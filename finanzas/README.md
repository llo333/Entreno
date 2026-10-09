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

## Formato del archivo de importación

```json
{
  "version": 1,
  "cuentas": [{ "id": "gastos", "nombre": "Gastos", "descripcion": "Día a día y recibos" }],
  "movimientos": [
    {
      "id": "gastos-2026-10-05-001",
      "fecha": "2026-10-05",
      "cuenta": "gastos",
      "concepto": "RECIBO IBERDROLA",
      "importe": -81.70,
      "saldo": 1205.06,
      "ambito": "personal",
      "categoria": "Suministros",
      "nota": "opcional"
    }
  ]
}
```

- `importe`: negativo = cargo, positivo = abono.
- `ambito`: `personal`, `profesional` o `traspaso` (movimientos entre cuentas propias; no cuentan como ingreso ni gasto).
- `id`: estable y único: `<cuenta>-<fecha>-<nº de orden del movimiento ese día en el extracto>`.

## Reglas de clasificación (se irán ampliando)

| Concepto contiene                       | Ámbito        | Categoría             |
|-----------------------------------------|---------------|-----------------------|
| TGSS, SEG. SOCIAL                       | profesional   | Seguridad Social      |
| AEAT, AGENCIA TRIBUTARIA                | profesional   | Impuestos             |
| Transferencias de clientes              | profesional   | Facturación           |
| Traspasos entre cuentas propias         | traspaso      | Traspaso              |
| MERCADONA, CONSUM, LIDL, CARREFOUR…     | personal      | Alimentación          |
| IBERDROLA, ENDESA, NATURGY, AGUA…       | personal      | Suministros           |
| Alquiler / hipoteca vivienda            | personal      | Vivienda              |
| Gasolineras                             | (preguntar)   | Vehículo              |

Si algo es dudoso, Claude pregunta antes de clasificarlo.

## Ideas pendientes

- Facturas emitidas (IVA 21 %, retención IRPF 15 % / 7 %) y conciliación con los cobros.
- Estimación del modelo 303 (IVA) y del 130 (pago fraccionado del IRPF) por trimestre.
- Comparar el saldo de la cuenta IVA con el IVA que realmente toca pagar.
- Editar la categoría de un movimiento desde la app.
