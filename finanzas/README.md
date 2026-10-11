# Mis Finanzas

App web (un solo `index.html`, sin servidor) para llevar las finanzas domésticas y de autónomo
a partir de los extractos bancarios.

> **Privacidad:** este repositorio es público. Aquí solo va el **código** y datos de ejemplo
> inventados (`demo.js`). Los movimientos reales se importan desde la propia app y se guardan
> **solo en el navegador del dispositivo** (localStorage). Nunca subas PDFs ni `.json` reales al repo
> (el `.gitignore` lo impide).

## Flujo semanal

1. Se pasa a Claude el PDF del extracto en el chat.
2. Claude extrae los movimientos, los clasifica y devuelve un archivo `movimientos-AAAA-MM-DD.json`.
3. En la app → pestaña **Datos** → *Importar*. Los movimientos con el mismo `id` se actualizan, no se duplican.
4. De vez en cuando: *Descargar todos mis datos* como copia de seguridad.

## Cuentas

| id       | Uso                                         |
|----------|---------------------------------------------|
| `gastos` | Día a día y recibos                         |
| `cobros` | Donde entran los pagos de clientes          |
| `iva`    | IVA que se aparta para Hacienda             |
| `hucha`  | Ahorro                                      |

## Pestañas

- **Resumen**: ingresos, gastos, resultado, tasa de ahorro, salud financiera (coste de vida medio,
  facturación mínima necesaria, meses cubiertos por la hucha), evolución mensual y gastos por categoría.
- **Movimientos**: lista filtrable; tocar un movimiento permite reclasificarlo.
- **Impuestos** (trimestrales de autónomo + Renta anual, con escala estatal y catalana): facturas emitidas y gastos con factura, estimación del **303** (IVA) y del **130**
  (IRPF, acumulado desde enero), comparación con el saldo de la cuenta IVA, pendientes de cobro y resumen anual.
  Al abrirla muestra el trimestre que toca presentar (del 1 al 20 del mes siguiente, aún el anterior).
  Debajo, la Renta anual: actividad, alquiler de la casa (sin retención) y paro, con la reserva recomendada para junio.
- **Ahorro**: saldos de las cuentas, fondo de emergencia, reparto de cada cobro (IVA → reserva IRPF → hucha → sueldo),
  metas de ahorro, simulador de inversión y estrategia por pasos.
- **Datos**: importar, copia de seguridad y borrado.

## Datos fiscales

| Trabajo                        | IVA          | Retención IRPF |
|--------------------------------|--------------|----------------|
| Escenografía / servicios       | 21 %         | 15 %           |
| Docencia                       | 0 % (exenta) | 15 %           |
| Venta de taller a particulares | 21 %         | 0 %            |

- 303 = IVA repercutido − IVA soportado (por fecha de factura).
- 130 = 20 % × (ingresos − gastos deducibles desde el 1 de enero) − retenciones − pagos 130 anteriores.
  Gastos deducibles = bases de gastos con factura × % deducible + cuota de autónomos (de los movimientos con subcategoría `Cuota autónomos`).
- Plazos: 20 abr (1T), 20 jul (2T), 20 oct (3T), 30 ene (4T).

## Formato del archivo de importación (v2)

```json
{
  "version": 2,
  "cuentas": [{ "id": "gastos", "nombre": "Gastos", "descripcion": "Día a día y recibos" }],
  "movimientos": [
    { "id": "gastos-2026-10-05-001", "fecha": "2026-10-05", "cuenta": "gastos", "concepto": "SOM ENERGIA",
      "importe": -81.70, "saldo": 1205.06, "ambito": "personal", "categoria": "Vivienda", "subcategoria": "Luz", "nota": "opcional" }
  ],
  "facturas": [
    { "id": "f-2026-010", "numero": "2026-010", "fecha": "2026-10-01", "cliente": "…", "nif": "…", "tipo": "servicio",
      "concepto": "…", "base": 1000, "ivaPct": 21, "irpfPct": 15, "estado": "pendiente", "fechaCobro": null }
  ],
  "recibidas": [
    { "id": "r-…", "fecha": "2026-10-02", "proveedor": "Leroy Merlin SLU", "numero": "056-…", "concepto": "Material",
      "categoria": "Material", "base": 41.95, "iva": 8.81, "deduciblePct": 100 }
  ],
  "metas": [{ "id": "m-…", "nombre": "Vacaciones", "objetivo": 1500, "ahorrado": 300, "fecha": "2027-06-30" }]
}
```

- `importe`: negativo = cargo, positivo = abono.
- `ambito`: `personal`, `profesional` o `traspaso` (entre cuentas propias; no cuenta como ingreso ni gasto).
- `id` de movimientos: `<cuenta>-<fecha>-<nº de orden ese día en el extracto>`. La cuenta `excel` es el histórico importado de las hojas de cálculo (sin saldo).
- Categorías: árbol de la hoja *Presupuesto vida* (Vivienda, Trabajo, Tecnología, Comida, Salud, Transporte,
  Educación, Ocio, Personales, Finanzas, Ropa) más `Traspaso` y `Otros`.

## Reglas de clasificación (se irán ampliando)

| Concepto contiene                       | Ámbito        | Categoría             |
|-----------------------------------------|---------------|-----------------------|
| TGSS.COTIZACI.                          | profesional   | Trabajo › Cuota autónomos      |
| I.V.A. MOD.303                          | profesional   | Finanzas › Hacienda IVA        |
| MOD.130, I.R.P.F.                       | profesional   | Finanzas › Hacienda IRPF       |
| Transferencias de clientes              | profesional   | Trabajo › Ingresos             |
| TRASPÀS PROPI / traspasos entre cuentas | traspaso      | Traspaso                       |
| ALDI, BONPREU, DIA, SUPER…              | personal      | Comida › Supermercado          |
| SOM ENERGIA                             | personal      | Vivienda › Luz                 |
| Alquiler, hipoteca                      | personal      | Vivienda › Alquiler / Hipoteca |
| Alquileres cobrados (Passatemps, Verd…) | personal      | Vivienda › Alquiler …          |
| GAS OIL ROVIRA, REPSOL… (furgoneta)     | profesional   | Transporte › Combustible       |
| LEROY MERLIN, FERRETERIA, OBRAMAT…      | profesional   | Trabajo › Material trabajo     |
| REINT.CAIXER                            | personal      | Personales › Efectivo          |
| BIZUM REBUT / ENVIAT                    | (preguntar)   | —                              |

Si algo es dudoso, Claude pregunta antes de clasificarlo.

## Ideas pendientes

- Generar el PDF de cada factura desde la app.
- Marcar automáticamente una factura como cobrada cuando aparezca el ingreso en el extracto.
- Opción del 5 % de gastos de difícil justificación en el 130.
- Estimación de la Renta anual (incluyendo alquileres).
