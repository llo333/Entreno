// Captura GTD → Notion
// Cloudflare Worker de un solo archivo. Sirve:
//   GET  /                     → app web de captura (instalable en el móvil)
//   POST /api/capturar         → crea tareas en el Inbox de Notion
//   GET  /manifest.webmanifest, /sw.js, /icon-*.png → piezas de la app instalable
//
// Variables del Worker (Settings → Variables and Secrets):
//   NOTION_TOKEN  (secreto)  token de la integración interna de Notion
//   NOTION_DB     (texto)    ID de la base "Tareas"
//   CLAVE         (secreto)  contraseña que piden la app y los atajos
//
// La API acepta JSON {"texto": "..."} o texto plano. Cada línea es una tarea.
// La clave va en la cabecera "X-Clave" (o en ?clave= para atajos sencillos).

const NOTION_VERSION = "2022-06-28";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") return new Response(null, { headers: cors() });

    if (url.pathname === "/api/capturar") {
      if (request.method !== "POST") return json({ ok: false, error: "Usa POST" }, 405);
      return capturar(request, env, url);
    }

    if (request.method !== "GET") return new Response("Not found", { status: 404 });

    switch (url.pathname) {
      case "/":
        return new Response(PAGE, { headers: { "content-type": "text/html; charset=utf-8" } });
      case "/manifest.webmanifest":
        return new Response(JSON.stringify(MANIFEST), {
          headers: { "content-type": "application/manifest+json" },
        });
      case "/sw.js":
        return new Response(SERVICE_WORKER, {
          headers: { "content-type": "text/javascript", "cache-control": "no-cache" },
        });
      case "/icon-180.png":
        return png(ICON_180);
      case "/icon-192.png":
        return png(ICON_192);
      case "/icon-512.png":
        return png(ICON_512);
    }
    return new Response("Not found", { status: 404 });
  },
};

async function capturar(request, env, url) {
  if (!env.NOTION_TOKEN || !env.NOTION_DB || !env.CLAVE) {
    return json({ ok: false, error: "Faltan variables NOTION_TOKEN, NOTION_DB o CLAVE en el Worker" }, 500);
  }

  // Se ignoran espacios al principio/final por si se colaron al copiar la clave.
  const clave = (request.headers.get("x-clave") || url.searchParams.get("clave") || "").trim();
  if (!(await iguales(clave, env.CLAVE.trim()))) return json({ ok: false, error: "Clave incorrecta" }, 401);

  let texto = "";
  const tipo = request.headers.get("content-type") || "";
  try {
    if (tipo.includes("application/json")) {
      const body = await request.json();
      texto = String(body.texto ?? body.text ?? "");
    } else {
      texto = await request.text();
    }
  } catch {
    return json({ ok: false, error: "Cuerpo de la petición no válido" }, 400);
  }

  const tareas = texto
    .split(/\r?\n/)
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 20);
  if (tareas.length === 0) return json({ ok: false, error: "No hay texto" }, 400);

  const creadas = [];
  for (const nombre of tareas) {
    let res;
    try {
      res = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          authorization: `Bearer ${env.NOTION_TOKEN}`,
          "notion-version": NOTION_VERSION,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          parent: { database_id: env.NOTION_DB },
          properties: {
            Nombre: { title: [{ text: { content: nombre.slice(0, 2000) } }] },
            Lista: { select: { name: "Inbox" } },
          },
        }),
      });
    } catch {
      return json({ ok: false, error: "No se pudo conectar con Notion", creadas }, 502);
    }
    if (!res.ok) {
      const detalle = await res.text();
      return json({ ok: false, error: `Notion respondió ${res.status}`, detalle, creadas }, 502);
    }
    creadas.push(nombre);
  }
  return json({ ok: true, creadas });
}

// Comparación en tiempo constante para no filtrar la clave por tiempos de respuesta.
async function iguales(a, b) {
  const enc = new TextEncoder();
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(a)),
    crypto.subtle.digest("SHA-256", enc.encode(b)),
  ]);
  const va = new Uint8Array(ha);
  const vb = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < va.length; i++) diff |= va[i] ^ vb[i];
  return diff === 0;
}

function cors() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type, x-clave",
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...cors() },
  });
}

function png(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Response(bytes, {
    headers: { "content-type": "image/png", "cache-control": "public, max-age=604800" },
  });
}

const MANIFEST = {
  name: "Inbox GTD",
  short_name: "Inbox",
  start_url: "/",
  display: "standalone",
  background_color: "#0f0f0f",
  theme_color: "#0f0f0f",
  lang: "es",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
};

// Guarda la página para que abra al instante y funcione sin conexión
// (las tareas pendientes se quedan en el móvil hasta que haya red).
const SERVICE_WORKER = `
const CACHE = "inbox-v1";
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["/", "/manifest.webmanifest", "/icon-192.png"])));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).pathname.startsWith("/api/")) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copia = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copia));
        return res;
      })
      .catch(() => caches.match(req))
  );
});
`;

const PAGE = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0f0f0f">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Inbox">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="apple-touch-icon" href="/icon-180.png">
<title>Inbox GTD</title>
<style>
  :root {
    --bg: #0f0f0f; --surface: #1a1a1a; --border: #2e2e2e;
    --text: #f5f5f5; --muted: #8a8a8a; --accent: #facc15; --ok: #4ade80; --err: #f87171;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  html, body { height: 100%; background: var(--bg); color: var(--text);
    font: 17px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  main { max-width: 560px; margin: 0 auto; padding: calc(env(safe-area-inset-top) + 20px) 16px 24px;
    display: flex; flex-direction: column; gap: 14px; min-height: 100%; }
  h1 { font-size: 15px; font-weight: 600; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; }
  form { display: flex; flex-direction: column; gap: 10px; }
  textarea { width: 100%; min-height: 120px; resize: vertical; padding: 14px; border-radius: 14px;
    border: 1px solid var(--border); background: var(--surface); color: var(--text); font: inherit; font-size: 19px; }
  textarea:focus { outline: 2px solid var(--accent); border-color: transparent; }
  button { padding: 15px; border: 0; border-radius: 14px; background: var(--accent); color: #111;
    font: inherit; font-weight: 700; }
  button:disabled { opacity: .5; }
  .hint { font-size: 13px; color: var(--muted); }
  #estado { min-height: 22px; font-size: 15px; }
  #estado.ok { color: var(--ok); } #estado.err { color: var(--err); }
  ul { list-style: none; display: flex; flex-direction: column; gap: 6px; }
  li { padding: 10px 12px; background: var(--surface); border-radius: 10px; font-size: 15px;
    display: flex; justify-content: space-between; gap: 10px; }
  li span:last-child { color: var(--muted); white-space: nowrap; }
  li.pendiente span:last-child { color: var(--accent); }
  #config { display: none; }
  .link { background: none; color: var(--muted); padding: 4px; font-weight: 400; font-size: 13px; align-self: flex-start; }
</style>
</head>
<body>
<main>
  <h1>📥 Inbox</h1>

  <form id="config">
    <p class="hint">Primera vez: escribe la clave que pusiste en el Worker (variable CLAVE).</p>
    <input id="clave" type="text" placeholder="Clave" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" style="padding:14px;border-radius:14px;border:1px solid var(--border);background:var(--surface);color:var(--text);font:inherit;font-size:19px">
    <button>Guardar clave</button>
  </form>

  <form id="captura">
    <textarea id="texto" placeholder="¿Qué tienes en la cabeza?" autofocus enterkeyhint="send"></textarea>
    <button id="enviar">Enviar al Inbox</button>
    <p class="hint">La tecla Enviar del teclado también vale · Pega varias líneas para crear varias tareas</p>
  </form>

  <p id="estado" role="status"></p>
  <ul id="recientes"></ul>
  <button class="link" id="cambiarClave" type="button">Cambiar clave</button>
</main>
<script>
  const $ = (id) => document.getElementById(id);
  const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  // La clave puede venir una vez en la URL (?clave=...) y se guarda en el móvil.
  const params = new URLSearchParams(location.search);
  if (params.get("clave")) { guardar("clave", params.get("clave")); history.replaceState(null, "", "/"); }

  function mostrarConfig(config) {
    $("config").style.display = config ? "flex" : "none";
    $("captura").style.display = config ? "none" : "flex";
    (config ? $("clave") : $("texto")).focus();
  }
  mostrarConfig(!leer("clave", ""));

  $("config").addEventListener("submit", (e) => {
    e.preventDefault();
    const c = $("clave").value.trim();
    if (c) { guardar("clave", c); mostrarConfig(false); estado(""); enviarPendientes(); }
  });
  $("cambiarClave").addEventListener("click", () => { $("clave").value = ""; mostrarConfig(true); });

  function estado(msg, tipo) { $("estado").textContent = msg; $("estado").className = tipo || ""; }

  function pintar() {
    const pend = leer("pendientes", []);
    const rec = leer("recientes", []);
    $("recientes").innerHTML = "";
    for (const t of pend) añadirLi(t, "pendiente", "sin enviar");
    for (const r of rec) añadirLi(r.t, "", r.h);
  }
  function añadirLi(t, clase, extra) {
    const li = document.createElement("li");
    li.className = clase;
    const a = document.createElement("span"); a.textContent = t;
    const b = document.createElement("span"); b.textContent = extra;
    li.append(a, b); $("recientes").append(li);
  }

  async function enviarPendientes() {
    const pend = leer("pendientes", []);
    if (!pend.length) return;
    $("enviar").disabled = true;
    try {
      const res = await fetch("/api/capturar", {
        method: "POST",
        headers: { "content-type": "application/json", "x-clave": leer("clave", "") },
        body: JSON.stringify({ texto: pend.join("\\n") }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) { estado("Clave incorrecta", "err"); mostrarConfig(true); return; }
      const creadas = data.creadas || [];
      if (creadas.length) {
        const hora = new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
        const rec = creadas.map((t) => ({ t, h: hora })).concat(leer("recientes", [])).slice(0, 8);
        guardar("recientes", rec);
        guardar("pendientes", pend.slice(creadas.length));
      }
      if (data.ok) estado(creadas.length > 1 ? "✓ " + creadas.length + " tareas en el Inbox" : "✓ En el Inbox", "ok");
      else estado("No se pudo enviar (" + (data.error || res.status) + "). Queda guardado y se reenviará.", "err");
    } catch {
      estado("Sin conexión: guardado en el móvil, se enviará luego.", "err");
    } finally {
      $("enviar").disabled = false;
      pintar();
    }
  }

  $("captura").addEventListener("submit", (e) => {
    e.preventDefault();
    const lineas = $("texto").value.split("\\n").map((t) => t.trim()).filter(Boolean);
    if (!lineas.length) return;
    guardar("pendientes", leer("pendientes", []).concat(lineas));
    $("texto").value = "";
    $("texto").focus();
    pintar();
    enviarPendientes();
  });
  $("texto").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); $("captura").requestSubmit(); }
  });

  window.addEventListener("online", enviarPendientes);
  pintar();
  enviarPendientes();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {});
</script>
</body>
</html>`;

// Iconos PNG (base64), generados con generar-iconos.py
const ICON_180 = "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";
const ICON_192 = "iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAAAQVUlEQVR42u2de5AUx33Hv909s7Ozt7uz9+CQZEmRIgsJiK2Eh1Ui5WBFLocyCTYiB+UC8ZAgqpKKhDpSesaWFCMRx67YGD2CK+dEUixHjikprsICk0SyDIlQYayLgg/JgB1kgxB3cLd3u7O7M92dP/bAIIvb2d27m72b36f2L2rZm+357K9//ZhfM8dxQBC1wqkJCBKIIIEIEogggQiCBCJIIIIEIkgggiCBCBKIIIEIEoggSCCCBCJIIIIEIggSiCCBCBKIIIEIEoggSCBivDGoCc4hhAj4TqWU1ppajAT6NVrrgYEBrTVjrOI7E4mEYRjkEABGT6aWnTBNc/bs2aZpjqyF1towjO7u7tOnT5NDJBAAMMY8z2tra+vu7nYcZ+QgpJTinC9atGjHjh2ZTEZKSV0YMRxahoaGLMvyPG9kgZLJpO/7FXs6Eih6I9KzjCxHxTfQMJ4gSCCCBCJIIIIEIggSiCCBCBKIIIEIggQiSCCCBCJIIIIEIggSiCCBCBKIIIEIggQiSCCCBCJIIIIggQgSiCCBiMlJQz+ZyjkYMNZPgTIGrWCIKv6L4DAEDIGxfkBVA1pDKRKoyjsqOKRC3oXnQ411/QIGKCiB4JU2+gdRLOHUGegxvjbGETMRt2AISIUGrAXScAIZAoUS+vOIW/joNPahqex3r2WmAa3HLhQxJZWdFLYFVemvMAbPx7pb+R9eL6y4GLs7qjUYx8Gj+tAv9JFjuq8fTTbiFqSEJoEudm84Q98ArpzKVn+GfW6BmDudxRLjcI0MWkEI16rcWTCGkofbFnMsEGBizBtFopDD0V/qF/5TfWO7OnZcO2lwBqVJoN9IdzwfeRcr/5g/9hfiQ5czePBdFIfGpbE0YEC3BxXdHQSy4zECYQwGx4xr2IwZYu0S/tTz6u+elZ5CPAapSKDz7CmWYMfw9YeNNR1cu3DPgDNwDs7HZaCoAQGvmiSaiXEawiqgWIDKY0qaPdwpPjWPd2z0TmeRsNEI1a3CH8ZzhpKHdAIvPWWuWcbdfngeDAFOMwxnU3zOYAj4PtxezJvFXv0n8+rLWDYHIUggAAzFIp560Jg7h+V6YQhQ9aaLdmcG3CyuuZo9u9loc1Aqhd9WIQtkCJzpx59/Tnx2IXd7ETPJk0otZiB/BrNnsSfuM/KFaAvEGXIF3HAde+gu4WUbIiBPCEwThT7cuoB/5hM8OwTBIysQR8HFHYt5uhW+Rz1XlTMPGvevEaYR8pA+NIEYQ9HDJVOw+Gahxi8fZCO+xv9zakRweDnM+gibdwMbyocZhEL7y5wh7+LmOfzyy+GNRzLIoCV0Cdq76KuKYb9/8c8pQctx0EhqCAufvZlLf3ykbbB5IMagJH7nwwwGlB5rkRkgYTQDAtoH44C+oNW1D9ES+D5oiDSMVvA0oH79j+UZbSYACTkw1j9OxgCJj3yYcRHmGlloAikNYWDGbzPIQOFH63o6ewblwWz3rnyecYszHyg7dE4vDcbAU9AVf84cquBftuXsO8//EKW00ODm//0piqfAE+fpVf3cD68skPZw1aWsrRl5FyIkjcKciWYMLWkEWhvUiMWAGGpdSFRgTfB/HC/8LS7ZOpRzOecfIIr2q4hA7//vWimdbIrj3U7w15HOALKecOkVKr8LCukki8cwlIeIWgQq48tAsYebOPKOPvpLbRo1r0WXwFpk4XFn2tQ5n/yr3GA/F+YH3pSgOdD7DJW+nXRef/nr2Z6vivjU6jKqC6/Ak2h12EenMRUgNoe+xyNkgYJ0XlIh1oR//r56+ElpJ+D5Nf8tH2jW8q+7uq5cuXJlNps1jJq//gXX7Xme4zjbt29ftmwjN5qBQs031RAouLjlJv7v/2AUc5XbJ/SpjwlyVoZGzAQXSCYCBa0Rhn7FkrVhw4brr79+zpw5uVxO1D1/IKVMp9Pd3d133323bcctq64NhILDV0hYE2ZCasKsWJZ3dtb58qWKxWKu63Z0dJw8edK27TrPa1JKmabZ29u7du3avr4+y7J8X9V/nUqTQI2KlLKpqenEiRNLly7N5/OxWEzVGjHKp81ZlrVmzZr9+/dnMhnf96PWnlHcM+H7fjqd3rNnT2dnZ/mIwtoOHpRSJpPJe+65Z8eOHW1tbZ7nRbAxI7rpxvf9tra2rq6uRx99NJVK1RA5yhZ2dXVt2bKlubk5mvYgys+FeZ7X3Ny8adOmZ555xnGcqhwq27N3797169fbth3lk1Ojvu0vFott2LBh3759qVQqYEJd7rkOHz7c0dHBORdCkEARRanhQdnSpUuPHz9u23bFhLp8vnM2m129evWpU6csy1KN/NgfCTQ+g7Ljx4+vXLmyUCjwSktQSql4PP7II4/s3buXTm0mgYYdsm374MGDfX195fxmBHuklL7vv/nmm6ZpRjz2lKFTm4fNSCQS7e3ttm0DGBwc/M0ZaqWUbdvlfw+eMJFA0YjDnOfz+cceewzA3LlzFy1a9D6Hyonz/v37X3zxRcdxjhw5YllWlHNnEuiCvJhz7rrupk2bAGQymV27dp2/UlbOtfv6+latWtXT0wOgqamJ0mfKgS6AMdbS0tLe3l4sFs9fKSvrxRjr6Oh4++2329vbW1tby/PX1Ggk0Puz6WKxmEgkzl8pk1ImEonOzs5XXnklk8kUi0Xf98keEuiinL9SJoRIp9Pbtm174oknWlpaIrhWSjlQjQ6VV8qmT59+44033nXXXZlMhjIeEqgKPM9Lp9ObN2+2LCuRSDDGSCASqOqxved5xWLRMAyyhwSqcXjPOaeUmQSq3SFqBBqFESQQQV3YBxK8pgI/W9u7jv4ISo/5Y3jlWrM114oolzAXnAQKgFLwA1aWYMi58H2cOlN73XFuIGnDMMawNqUQ8H1kXaian37k0BL9gw3wyGAjC8QYpIKTwmVTGPwKv1fOoQr45Mc4AxLxqp+ZKlco9yX29+j/ekP1DaA5DT3aoYgxMIbTA2h1sPDjfM50ZohaiqMzhkIJ117B1ASpuBVaBJISLWlcOoVpr1I5DAZZwPyPsfl/IGqv0q4BiYM/01/qks+9pJIJMDZqDpU/ajCH2xbye+8QM69lEHWEEAb48IZIoFHtwoouVL7e2zzzavbMV4yP/566+2/8Jns0v0u+gKceMNYt5yigMFSvmuXTQqgLG+Ukuv4mLRagXKxbxY+8I770tGxxRiEfEgKnB3DvKrFuFXdPgbOJlALTML7Kb8shOAq92LxRLJg3CiVOBUd2CAvm8c0bRaEXgkeuPnrk5oHY2XJk967mStV78o0GlMK9q/m5j40aUZxIFALFIcy/ia9YyAcGa59bMgQGBrFiIZ9/Ey8ORbTOdYRnoiUevF0k4vBqTYM8iUQcD94uEOEHNCIqEOco5jHtOnbnEpEdqiUIGQLZIdy5REy7jhXz0T0aJroRiHNIF/ffIa6YikKVharL031XTMX9dwjpRvpgoeh+dcZQKqF1KtYvE7kqi70Ljlwe65eJ1qkNcWQOCRRaNu0NYv0KMWs6y7kQfHhFYuSX4Mi5mDWdrV8hvMGonxET8kRi8FF0tYXGA9XqBnwJO4PO5WLFA37MDHSOpOAouOhcLuJJuP2B8qdq5wuCXDwJVM2EfbWFxhkgUXIrdy6GQCmLZQv5v/2Qv7xfpRIVHBIcg3l0/BFftpCXsoHs0RpWAhDVXXzFQuNRF4gzFErI5nSzw/SIC2I1FBr3JVrTbNYM5pWCrbVJPPtFY2Ao0O9eKTjJwHXoNWIxHHhT92V1ENuqLTQeUYG0hmGg9wyOvKOv+i2miyPd5moLjTMGpRCP4Ydd5qyZrOhWiHPlY1+EwJSWYEGCQUoELCNv2fjxQT1/rVcogfPKi6zVFhqPehfGg3dh1RQaNzj6BvCFJ+WOvzdYsCtRGip4ncxgew4ZwAS+8KR0i2h14AdLsKjQ+FgFreCFuks+nBR271O7X1VWMlBqzBBoCDb8CtIrKlhJ7H5V7d6nnBRKPhUan4AzPfdtlQUXgmOc74g+O1i7b6uc3LNEk1YgpZBK4ECP/u5OZaYxzvXEpISZxnd3qgM9OpXAJH6udTJHIKmQsPHQNv+9EzDN8TsWSWuYJt47gYe2+Qk7UAdKAjVo2mRbOHoMXdulMY5BSEoYaXRtl0ePwbYwuZ9uneRLGVIhlcaWb8vDh7QZH4/kVGmYcRw+pLd8W6bSkzz8TH6BtEbMwMlefPlpaTi1P1NWhUAShoMvPy1P9iJmYNI/XD/5F1N9CSeN53+gdu1UdhpjWmTM92GnsWunev4HyknXdTYeCdRY43mpsHij/9oBbbdDSkg5mrFB6+HPtNvx2gG9eKMvVVT2eERCIK1hGuAcSzZ633lBxVOIO4jFRucURK0RiyHuIJ7Cd15QSzZ6nMOMQOdVZsLUBzp/prg2hywT2TyW3+9/awe/fTG/4Vp21aUMJuqaZGSAh1+c0N0/0998QX1/j4pbsEyoWp/QqOc7kkAVxlNawfPrSiwYgx3H915R33tZtWQw4xqWTEDXMVBiHEN5/PSIPt0PMKSS0BrFOs6eUxzSn0jJ04Q5tTkRRyaNFmcUGrfNARg8H4d+rqWqqwxGeckiYcNJAXoUBu2CwzCQbgI0CRSsZ6l8iQLeENbdKm5bKEY3tnM+CkVUys8WjnrG5hUDbVUIPdMKWSDTCHqXEnEkbUQEHTiYGSLkza+hCVTexnXsXSDYUrlUkFGqeFkx1mqACZw8rQeGwiznEJ5AgFJ44y29nAXq7xkmTNGu8ev9TfT8XPdn0ewgrOPLQlNXaRgx7P+pUsVo1UMZTYEEXv9frXWYv6zwBFJoiuMnb+lDh7UZB1WCrzp9FHAHsOu/lWWF2Xph/vbL1S22/otkMVBF76rwJYwktu9WPzmkm+wwt8DycFshncJzO9VbPdpKTP6dD6PYeQmBkouvfktaYe83Cjn7MDhyLv7ya5KJhpjVmBBIiVgzPr9VDoefUH94Ih6Ph/tjsuP4n7f16TP6Tz7N/UItpXEjFHsA30eiFf/4nHrgcZlOhp87hiwQzm48/dEbmpVwy+9zDnhepAumjBB4ANhT8M3n1J990S9XKg6d8AUq/7ASFl76kT7+nv7ETTzpQBXhq+GJnygHJK2hMZwdxtMwDGx6XN7zNdlkg7OG6PGZ4zgN0liGgdP9mHkN+/ydYvEt3EwABSgfnpwwK4tjMVAVJmABHv7jNfWVp9XOPSrjNFC+2EACldtryIX0MXsmW/opvmAev6SVtWQAXp66j1i+w5DN4ti7+kCP/tfdaudepTUyqcba7NFYAuFsXZyci1IRzRk0pzHtSl4+dyJqMI6jv9K/ek8PZCEE0kkwNNxkR8MJdE4jzoa3jxVLke3BYJmImRBidDYbjUmn0ZgNpxQUwBliJuKxSCfRSoe2UDqBBTqXBkBHaxfHhIPmWwgSiCCBCBKIIIEIggQiSCCCBCJIIIIggQgSiCCBCBKIIEggggQiSCCCBCIIEogggQgSiCCBCBKIIEggggQiSCCCBCIIEogggQgSiCCBCIIEIkggggQiSCCCIIEIEogggQgSiCCBCIIEIkggggQiSCCCIIEIEogggYjJz/8DPe6Gdig5htcAAAAASUVORK5CYII=";
const ICON_512 = "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";
