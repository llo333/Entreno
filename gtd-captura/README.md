# Captura GTD → Notion

Para apuntar algo en el **Inbox** de la base *Tareas* de Notion en un par de segundos, desde el móvil.

Funciona con un **Cloudflare Worker** (gratis) que hace de puente con Notion y que da dos formas de capturar:

- **Widget o atajo:** pulsas un icono, aparece una cajita de texto encima de la pantalla, escribes y se envía. No hace falta abrir ninguna app.
- **App web:** se instala en la pantalla de inicio y abre directamente en el campo de texto. Si no hay conexión, guarda lo que escribas y lo envía después.

Cualquier cosa que llega se crea en Notion con `Lista = Inbox` y aparece en la pestaña **📥 Inbox** de *Sala de despiece*.

---

## 1. Notion: crear la integración (una vez, ~3 min)

1. Entra en <https://www.notion.so/profile/integrations> y pulsa **Nueva integración**.
   - Nombre: `Captura GTD`. Tipo: **Interna**. Espacio de trabajo: el tuyo.
2. Copia el **token secreto** de la integración (empieza por `ntn_` o `secret_`).
3. Abre la base **Tareas** (*Recursos → Almacén → Tareas*), pulsa **··· → Conexiones** y añade **Captura GTD**.

El ID de la base Tareas es `7cc4a96c67944fc3884a69f83bc1d82b`.

## 2. Cloudflare: publicar el Worker (~5 min)

1. Crea una cuenta gratuita en <https://dash.cloudflare.com>.
2. Ve a **Workers & Pages → Create → Create Worker**, ponle de nombre `inbox`, por ejemplo, y pulsa **Deploy**.
3. Pulsa **Edit code**, borra todo lo que hay, pega el contenido de [`worker.js`](worker.js) y pulsa **Deploy**.
4. En **Settings → Variables and Secrets** añade:

   | Nombre | Tipo | Valor |
   |---|---|---|
   | `NOTION_TOKEN` | Secret | el token del paso 1 |
   | `NOTION_DB` | Text | `7cc4a96c67944fc3884a69f83bc1d82b` |
   | `CLAVE` | Secret | una contraseña que te inventes (sin espacios) |

5. Tu dirección queda como `https://inbox.<tu-usuario>.workers.dev`.

**Comprobación:** abre esa dirección en el móvil, escribe la `CLAVE`, envía "prueba" y mira que aparece en el Inbox de Notion.

## 3. Instalar la app en el móvil

- **iPhone (Safari):** abre la dirección, pulsa **Compartir → Añadir a pantalla de inicio**. Al abrirla desde el icono te pedirá la clave una sola vez.
- **Android (Chrome):** abre la dirección, pulsa **⋮ → Instalar aplicación** (o *Añadir a pantalla de inicio*).

## 4. Widget o atajo: capturar sin abrir nada

La API del Worker es:

```
POST https://inbox.<tu-usuario>.workers.dev/api/capturar
Cabecera:  X-Clave: <tu CLAVE>
Cuerpo:    el texto (texto plano). Cada línea crea una tarea.
```

### iPhone: app *Atajos*

1. Abre **Atajos → +** (nuevo atajo) y llámalo `Apuntar`.
2. Añade la acción **Solicitar entrada** (*Ask for Input*), tipo texto, con la pregunta "¿Qué tienes en la cabeza?".
3. Añade **Obtener contenido de URL** (*Get Contents of URL*):
   - URL: `https://inbox.<tu-usuario>.workers.dev/api/capturar`
   - Método: **POST**
   - Cabeceras: `X-Clave` = tu clave, `Content-Type` = `text/plain`
   - Cuerpo de la solicitud: **Archivo**, con la variable *Entrada proporcionada*.
4. (Opcional) Añade **Mostrar notificación** con el texto "✓ En el Inbox".
5. Para tenerlo a mano:
   - **Widget:** mantén pulsada la pantalla de inicio, pulsa **+ → Atajos** y elige `Apuntar`.
   - **Botón de acción** (iPhone 15 Pro o posterior): *Ajustes → Botón de acción → Atajo → Apuntar*.
   - **Centro de control / pantalla bloqueada** (iOS 18): añade el control *Atajo → Apuntar*.
   - **Voz:** "Oye Siri, apuntar".

Al pulsarlo aparece la caja de texto encima de lo que estés viendo, escribes y pulsas **Hecho**.

### Android: app *HTTP Shortcuts* (gratis, en Google Play)

1. Instala **HTTP Shortcuts** y crea un atajo nuevo de tipo **Regular Shortcut**, llamado `Apuntar`.
2. En **Basic Request Settings**:
   - Método: **POST**
   - URL: `https://inbox.<tu-usuario>.workers.dev/api/capturar`
3. En **Variables** crea una variable de tipo **Text Input** llamada `texto`, con el título "¿Qué tienes en la cabeza?".
4. En **Request Headers** añade `X-Clave` con tu clave.
5. En **Request Body / Parameters** elige **Custom Text**, tipo `text/plain`, con el contenido `{texto}` (insertando la variable).
6. En **Response Handling** elige mostrar el resultado como **Toast**, para que salga "ok".
7. Para tenerlo a mano:
   - **Icono o widget:** mantén pulsado el atajo, elige **Place on Home Screen**, o añade el widget de HTTP Shortcuts.
   - **Ajustes rápidos** (persiana superior): en *HTTP Shortcuts → Settings → Quick Settings Tile*, elige `Apuntar`.

Al pulsarlo aparece un cuadro flotante con el campo de texto y el botón de enviar.

---

## Detalles

- **Seguridad:** el token de Notion solo vive en Cloudflare, nunca en el móvil. Sin la `CLAVE`, la API responde `401` y no crea nada.
- **Varias tareas de golpe:** si pegas varias líneas, cada línea se convierte en una tarea (máximo 20 por envío).
- **Cambiar los iconos:** edita `generar-iconos.py` y ejecútalo (`python3 generar-iconos.py`, necesita Pillow). Vuelve a incrustar los iconos al final de `worker.js`.
- **Si algo falla:** la app muestra el error de Notion.
  - `404`: casi siempre falta conectar la integración a la base (paso 1.3).
  - `401` de Notion: el token es incorrecto.
