// DATOS DE EJEMPLO (inventados) — se muestran solo si no has importado tus datos.
window.FINANZAS_DEMO = {
"version": 1,
"demo": true,
"actualizado": "2026-10-08",
"cuentas": [
{
"id": "gastos",
"nombre": "Gastos",
"descripcion": "Día a día y recibos"
},
{
"id": "cobros",
"nombre": "Cobros",
"descripcion": "Donde entran los pagos de clientes"
},
{
"id": "iva",
"nombre": "IVA",
"descripcion": "IVA apartado para Hacienda"
},
{
"id": "hucha",
"nombre": "Hucha",
"descripcion": "Ahorro"
}
],
"movimientos": [
{
"fecha": "2026-04-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 1650.0,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0001"
},
{
"fecha": "2026-04-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 1355.7,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0002"
},
{
"fecha": "2026-04-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 1319.41,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0003"
},
{
"fecha": "2026-04-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 1307.42,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0004"
},
{
"fecha": "2026-04-02",
"cuenta": "gastos",
"concepto": "ZARA",
"importe": -31.1,
"saldo": 1276.32,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0005"
},
{
"fecha": "2026-04-04",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -48.67,
"saldo": 1227.65,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0006"
},
{
"fecha": "2026-04-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -62.85,
"saldo": 1164.8,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0007"
},
{
"fecha": "2026-04-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": 1134.8,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0008"
},
{
"fecha": "2026-04-05",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -21.56,
"saldo": 1113.24,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0009"
},
{
"fecha": "2026-04-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE LUNA FILMS SL",
"importe": 1272.0,
"saldo": 6472.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0010"
},
{
"fecha": "2026-04-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -252.0,
"saldo": 6220.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0011"
},
{
"fecha": "2026-04-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 252.0,
"saldo": 2052.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0012"
},
{
"fecha": "2026-04-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1020.0,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0013"
},
{
"fecha": "2026-04-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1020.0,
"saldo": 2133.24,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0014"
},
{
"fecha": "2026-04-10",
"cuenta": "gastos",
"concepto": "SANITAS SEGURO SALUD",
"importe": -62.5,
"saldo": 2070.74,
"ambito": "personal",
"categoria": "Salud",
"id": "demo-0015"
},
{
"fecha": "2026-04-11",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -91.06,
"saldo": 1979.68,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0016"
},
{
"fecha": "2026-04-16",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -22.22,
"saldo": 1957.46,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0017"
},
{
"fecha": "2026-04-18",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -64.88,
"saldo": 1892.58,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0018"
},
{
"fecha": "2026-04-20",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -51.48,
"saldo": 1841.1,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0019"
},
{
"fecha": "2026-04-22",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 1749.0,
"saldo": 6949.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0020"
},
{
"fecha": "2026-04-22",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -41.96,
"saldo": 1799.14,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0021"
},
{
"fecha": "2026-04-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -346.5,
"saldo": 6602.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0022"
},
{
"fecha": "2026-04-23",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 346.5,
"saldo": 2398.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0023"
},
{
"fecha": "2026-04-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1402.5,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0024"
},
{
"fecha": "2026-04-23",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1402.5,
"saldo": 3201.64,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0025"
},
{
"fecha": "2026-04-23",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -29.64,
"saldo": 3172.0,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0026"
},
{
"fecha": "2026-04-24",
"cuenta": "gastos",
"concepto": "BP",
"importe": -63.51,
"saldo": 3108.49,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0027"
},
{
"fecha": "2026-04-25",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -95.85,
"saldo": 3012.64,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0028"
},
{
"fecha": "2026-04-26",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -64.54,
"saldo": 2948.1,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0029"
},
{
"fecha": "2026-04-27",
"cuenta": "gastos",
"concepto": "BP",
"importe": -39.54,
"saldo": 2908.56,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0030"
},
{
"fecha": "2026-04-27",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -32.25,
"saldo": 2876.31,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0031"
},
{
"fecha": "2026-04-28",
"cuenta": "gastos",
"concepto": "TRASPASO A HUCHA",
"importe": -200,
"saldo": 2676.31,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0032"
},
{
"fecha": "2026-04-28",
"cuenta": "hucha",
"concepto": "TRASPASO DESDE GASTOS",
"importe": 200,
"saldo": 8200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0033"
},
{
"fecha": "2026-04-29",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -44.77,
"saldo": 2631.54,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0034"
},
{
"fecha": "2026-04-30",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -57.49,
"saldo": 2574.05,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0035"
},
{
"fecha": "2026-05-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 1824.05,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0036"
},
{
"fecha": "2026-05-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 1529.75,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0037"
},
{
"fecha": "2026-05-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 1493.46,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0038"
},
{
"fecha": "2026-05-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 1481.47,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0039"
},
{
"fecha": "2026-05-02",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -78.02,
"saldo": 1403.45,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0040"
},
{
"fecha": "2026-05-02",
"cuenta": "gastos",
"concepto": "BP",
"importe": -43.94,
"saldo": 1359.51,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0041"
},
{
"fecha": "2026-05-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -80.48,
"saldo": 1279.03,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0042"
},
{
"fecha": "2026-05-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": 1249.03,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0043"
},
{
"fecha": "2026-05-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ACME DIGITAL SL",
"importe": 1908.0,
"saldo": 7108.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0044"
},
{
"fecha": "2026-05-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -378.0,
"saldo": 6730.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0045"
},
{
"fecha": "2026-05-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 378.0,
"saldo": 2776.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0046"
},
{
"fecha": "2026-05-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1530.0,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0047"
},
{
"fecha": "2026-05-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1530.0,
"saldo": 2779.03,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0048"
},
{
"fecha": "2026-05-09",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -45.64,
"saldo": 2733.39,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0049"
},
{
"fecha": "2026-05-09",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -40.9,
"saldo": 2692.49,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0050"
},
{
"fecha": "2026-05-10",
"cuenta": "gastos",
"concepto": "SANITAS SEGURO SALUD",
"importe": -62.5,
"saldo": 2629.99,
"ambito": "personal",
"categoria": "Salud",
"id": "demo-0051"
},
{
"fecha": "2026-05-11",
"cuenta": "gastos",
"concepto": "BP",
"importe": -38.6,
"saldo": 2591.39,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0052"
},
{
"fecha": "2026-05-14",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -40.1,
"saldo": 2551.29,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0053"
},
{
"fecha": "2026-05-14",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -31.5,
"saldo": 2519.79,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0054"
},
{
"fecha": "2026-05-16",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -78.41,
"saldo": 2441.38,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0055"
},
{
"fecha": "2026-05-16",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -58.98,
"saldo": 2382.4,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0056"
},
{
"fecha": "2026-05-17",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -59.78,
"saldo": 2322.62,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0057"
},
{
"fecha": "2026-05-19",
"cuenta": "gastos",
"concepto": "BP",
"importe": -45.61,
"saldo": 2277.01,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0058"
},
{
"fecha": "2026-05-21",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -37.62,
"saldo": 2239.39,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0059"
},
{
"fecha": "2026-05-22",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 1749.0,
"saldo": 6949.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0060"
},
{
"fecha": "2026-05-22",
"cuenta": "gastos",
"concepto": "BP",
"importe": -56.76,
"saldo": 2182.63,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0061"
},
{
"fecha": "2026-05-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -346.5,
"saldo": 6602.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0062"
},
{
"fecha": "2026-05-23",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 346.5,
"saldo": 3123.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0063"
},
{
"fecha": "2026-05-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1402.5,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0064"
},
{
"fecha": "2026-05-23",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1402.5,
"saldo": 3585.13,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0065"
},
{
"fecha": "2026-05-23",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -73.77,
"saldo": 3511.36,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0066"
},
{
"fecha": "2026-05-23",
"cuenta": "gastos",
"concepto": "AMAZON EU",
"importe": -35.77,
"saldo": 3475.59,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0067"
},
{
"fecha": "2026-05-28",
"cuenta": "gastos",
"concepto": "TRASPASO A HUCHA",
"importe": -200,
"saldo": 3275.59,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0068"
},
{
"fecha": "2026-05-28",
"cuenta": "hucha",
"concepto": "TRASPASO DESDE GASTOS",
"importe": 200,
"saldo": 8400.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0069"
},
{
"fecha": "2026-05-29",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -46.77,
"saldo": 3228.82,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0070"
},
{
"fecha": "2026-05-30",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -86.86,
"saldo": 3141.96,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0071"
},
{
"fecha": "2026-05-31",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -43.93,
"saldo": 3098.03,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0072"
},
{
"fecha": "2026-06-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 2348.03,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0073"
},
{
"fecha": "2026-06-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 2053.73,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0074"
},
{
"fecha": "2026-06-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 2017.44,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0075"
},
{
"fecha": "2026-06-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 2005.45,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0076"
},
{
"fecha": "2026-06-02",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -64.82,
"saldo": 1940.63,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0077"
},
{
"fecha": "2026-06-03",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -35.58,
"saldo": 1905.05,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0078"
},
{
"fecha": "2026-06-03",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -139.56,
"saldo": 1765.49,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0079"
},
{
"fecha": "2026-06-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -80.48,
"saldo": 1685.01,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0080"
},
{
"fecha": "2026-06-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": 1655.01,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0081"
},
{
"fecha": "2026-06-05",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -20.97,
"saldo": 1634.04,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0082"
},
{
"fecha": "2026-06-06",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -97.38,
"saldo": 1536.66,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0083"
},
{
"fecha": "2026-06-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 2226.0,
"saldo": 7426.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0084"
},
{
"fecha": "2026-06-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -441.0,
"saldo": 6985.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0085"
},
{
"fecha": "2026-06-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 441.0,
"saldo": 3564.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0086"
},
{
"fecha": "2026-06-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1785.0,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0087"
},
{
"fecha": "2026-06-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1785.0,
"saldo": 3321.66,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0088"
},
{
"fecha": "2026-06-09",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -59.05,
"saldo": 3262.61,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0089"
},
{
"fecha": "2026-06-09",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -14.2,
"saldo": 3248.41,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0090"
},
{
"fecha": "2026-06-10",
"cuenta": "gastos",
"concepto": "SANITAS SEGURO SALUD",
"importe": -62.5,
"saldo": 3185.91,
"ambito": "personal",
"categoria": "Salud",
"id": "demo-0091"
},
{
"fecha": "2026-06-11",
"cuenta": "gastos",
"concepto": "BP",
"importe": -56.29,
"saldo": 3129.62,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0092"
},
{
"fecha": "2026-06-13",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -60.3,
"saldo": 3069.32,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0093"
},
{
"fecha": "2026-06-13",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -120.11,
"saldo": 2949.21,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0094"
},
{
"fecha": "2026-06-14",
"cuenta": "gastos",
"concepto": "BP",
"importe": -50.17,
"saldo": 2899.04,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0095"
},
{
"fecha": "2026-06-18",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -44.4,
"saldo": 2854.64,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0096"
},
{
"fecha": "2026-06-18",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -210.11,
"saldo": 2644.53,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0097"
},
{
"fecha": "2026-06-19",
"cuenta": "gastos",
"concepto": "ZARA",
"importe": -78.1,
"saldo": 2566.43,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0098"
},
{
"fecha": "2026-06-20",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -107.97,
"saldo": 2458.46,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0099"
},
{
"fecha": "2026-06-20",
"cuenta": "gastos",
"concepto": "AMAZON EU",
"importe": -26.81,
"saldo": 2431.65,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0100"
},
{
"fecha": "2026-06-22",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 1749.0,
"saldo": 6949.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0101"
},
{
"fecha": "2026-06-22",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -151.59,
"saldo": 2280.06,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0102"
},
{
"fecha": "2026-06-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -346.5,
"saldo": 6602.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0103"
},
{
"fecha": "2026-06-23",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 346.5,
"saldo": 3910.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0104"
},
{
"fecha": "2026-06-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1402.5,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0105"
},
{
"fecha": "2026-06-23",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1402.5,
"saldo": 3682.56,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0106"
},
{
"fecha": "2026-06-24",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -59.51,
"saldo": 3623.05,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0107"
},
{
"fecha": "2026-06-24",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -13.38,
"saldo": 3609.67,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0108"
},
{
"fecha": "2026-06-24",
"cuenta": "gastos",
"concepto": "DECATHLON",
"importe": -62.23,
"saldo": 3547.44,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0109"
},
{
"fecha": "2026-06-27",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -50.46,
"saldo": 3496.98,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0110"
},
{
"fecha": "2026-06-27",
"cuenta": "gastos",
"concepto": "ZARA",
"importe": -81.9,
"saldo": 3415.08,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0111"
},
{
"fecha": "2026-06-28",
"cuenta": "gastos",
"concepto": "TRASPASO A HUCHA",
"importe": -200,
"saldo": 3215.08,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0112"
},
{
"fecha": "2026-06-28",
"cuenta": "hucha",
"concepto": "TRASPASO DESDE GASTOS",
"importe": 200,
"saldo": 8600.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0113"
},
{
"fecha": "2026-07-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 2465.08,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0114"
},
{
"fecha": "2026-07-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 2170.78,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0115"
},
{
"fecha": "2026-07-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 2134.49,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0116"
},
{
"fecha": "2026-07-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 2122.5,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0117"
},
{
"fecha": "2026-07-01",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -33.02,
"saldo": 2089.48,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0118"
},
{
"fecha": "2026-07-02",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -32.67,
"saldo": 2056.81,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0119"
},
{
"fecha": "2026-07-03",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -57.45,
"saldo": 1999.36,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0120"
},
{
"fecha": "2026-07-04",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -92.2,
"saldo": 1907.16,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0121"
},
{
"fecha": "2026-07-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -79.04,
"saldo": 1828.12,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0122"
},
{
"fecha": "2026-07-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": 1798.12,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0123"
},
{
"fecha": "2026-07-06",
"cuenta": "gastos",
"concepto": "BP",
"importe": -43.62,
"saldo": 1754.5,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0124"
},
{
"fecha": "2026-07-06",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -33.21,
"saldo": 1721.29,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0125"
},
{
"fecha": "2026-07-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ACME DIGITAL SL",
"importe": 1272.0,
"saldo": 6472.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0126"
},
{
"fecha": "2026-07-08",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -64.18,
"saldo": 1657.11,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0127"
},
{
"fecha": "2026-07-08",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -34.3,
"saldo": 1622.81,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0128"
},
{
"fecha": "2026-07-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -252.0,
"saldo": 6220.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0129"
},
{
"fecha": "2026-07-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 252.0,
"saldo": 4162.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0130"
},
{
"fecha": "2026-07-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1020.0,
"saldo": 5200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0131"
},
{
"fecha": "2026-07-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1020.0,
"saldo": 2642.81,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0132"
},
{
"fecha": "2026-07-10",
"cuenta": "gastos",
"concepto": "SANITAS SEGURO SALUD",
"importe": -62.5,
"saldo": 2580.31,
"ambito": "personal",
"categoria": "Salud",
"id": "demo-0133"
},
{
"fecha": "2026-07-10",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -170.15,
"saldo": 2410.16,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0134"
},
{
"fecha": "2026-07-11",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -107.77,
"saldo": 2302.39,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0135"
},
{
"fecha": "2026-07-13",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -28.79,
"saldo": 2273.6,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0136"
},
{
"fecha": "2026-07-14",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -60.86,
"saldo": 2212.74,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0137"
},
{
"fecha": "2026-07-16",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -240.18,
"saldo": 1972.56,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0138"
},
{
"fecha": "2026-07-17",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -35.53,
"saldo": 1937.03,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0139"
},
{
"fecha": "2026-07-18",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -44.55,
"saldo": 1892.48,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0140"
},
{
"fecha": "2026-07-20",
"cuenta": "iva",
"concepto": "AEAT MODELO 303 2T",
"importe": -1450,
"saldo": 2712.5,
"ambito": "profesional",
"categoria": "Impuestos",
"id": "demo-0141"
},
{
"fecha": "2026-07-20",
"cuenta": "cobros",
"concepto": "AEAT MODELO 130 2T",
"importe": -620,
"saldo": 4580.0,
"ambito": "profesional",
"categoria": "Impuestos",
"id": "demo-0142"
},
{
"fecha": "2026-07-22",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 1007.0,
"saldo": 5587.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0143"
},
{
"fecha": "2026-07-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -199.5,
"saldo": 5387.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0144"
},
{
"fecha": "2026-07-23",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 199.5,
"saldo": 2912.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0145"
},
{
"fecha": "2026-07-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -807.5,
"saldo": 4580.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0146"
},
{
"fecha": "2026-07-23",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 807.5,
"saldo": 2699.98,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0147"
},
{
"fecha": "2026-07-23",
"cuenta": "gastos",
"concepto": "ZARA",
"importe": -45.82,
"saldo": 2654.16,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0148"
},
{
"fecha": "2026-07-24",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -49.57,
"saldo": 2604.59,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0149"
},
{
"fecha": "2026-07-25",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -64.06,
"saldo": 2540.53,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0150"
},
{
"fecha": "2026-07-27",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -37.26,
"saldo": 2503.27,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0151"
},
{
"fecha": "2026-07-28",
"cuenta": "gastos",
"concepto": "TRASPASO A HUCHA",
"importe": -200,
"saldo": 2303.27,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0152"
},
{
"fecha": "2026-07-28",
"cuenta": "hucha",
"concepto": "TRASPASO DESDE GASTOS",
"importe": 200,
"saldo": 8800.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0153"
},
{
"fecha": "2026-07-31",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -46.49,
"saldo": 2256.78,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0154"
},
{
"fecha": "2026-08-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 1506.78,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0155"
},
{
"fecha": "2026-08-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 1212.48,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0156"
},
{
"fecha": "2026-08-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 1176.19,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0157"
},
{
"fecha": "2026-08-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 1164.2,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0158"
},
{
"fecha": "2026-08-01",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -74.87,
"saldo": 1089.33,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0159"
},
{
"fecha": "2026-08-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -79.37,
"saldo": 1009.96,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0160"
},
{
"fecha": "2026-08-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": 979.96,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0161"
},
{
"fecha": "2026-08-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE LUNA FILMS SL",
"importe": 1272.0,
"saldo": 5852.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0162"
},
{
"fecha": "2026-08-08",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -85.31,
"saldo": 894.65,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0163"
},
{
"fecha": "2026-08-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -252.0,
"saldo": 5600.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0164"
},
{
"fecha": "2026-08-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 252.0,
"saldo": 3164.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0165"
},
{
"fecha": "2026-08-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1020.0,
"saldo": 4580.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0166"
},
{
"fecha": "2026-08-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1020.0,
"saldo": 1914.65,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0167"
},
{
"fecha": "2026-08-10",
"cuenta": "gastos",
"concepto": "SANITAS SEGURO SALUD",
"importe": -62.5,
"saldo": 1852.15,
"ambito": "personal",
"categoria": "Salud",
"id": "demo-0168"
},
{
"fecha": "2026-08-10",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -29.43,
"saldo": 1822.72,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0169"
},
{
"fecha": "2026-08-11",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -50.73,
"saldo": 1771.99,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0170"
},
{
"fecha": "2026-08-12",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -44.88,
"saldo": 1727.11,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0171"
},
{
"fecha": "2026-08-14",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -56.14,
"saldo": 1670.97,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0172"
},
{
"fecha": "2026-08-14",
"cuenta": "gastos",
"concepto": "DECATHLON",
"importe": -81.36,
"saldo": 1589.61,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0173"
},
{
"fecha": "2026-08-15",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -58.01,
"saldo": 1531.6,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0174"
},
{
"fecha": "2026-08-22",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 1749.0,
"saldo": 6329.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0175"
},
{
"fecha": "2026-08-22",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -49.93,
"saldo": 1481.67,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0176"
},
{
"fecha": "2026-08-22",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -40.52,
"saldo": 1441.15,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0177"
},
{
"fecha": "2026-08-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -346.5,
"saldo": 5982.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0178"
},
{
"fecha": "2026-08-23",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 346.5,
"saldo": 3510.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0179"
},
{
"fecha": "2026-08-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1402.5,
"saldo": 4580.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0180"
},
{
"fecha": "2026-08-23",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1402.5,
"saldo": 2843.65,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0181"
},
{
"fecha": "2026-08-23",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -62.95,
"saldo": 2780.7,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0182"
},
{
"fecha": "2026-08-24",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -35.94,
"saldo": 2744.76,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0183"
},
{
"fecha": "2026-08-25",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -21.23,
"saldo": 2723.53,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0184"
},
{
"fecha": "2026-08-26",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -46.4,
"saldo": 2677.13,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0185"
},
{
"fecha": "2026-08-27",
"cuenta": "gastos",
"concepto": "BP",
"importe": -49.2,
"saldo": 2627.93,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0186"
},
{
"fecha": "2026-08-28",
"cuenta": "gastos",
"concepto": "TRASPASO A HUCHA",
"importe": -200,
"saldo": 2427.93,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0187"
},
{
"fecha": "2026-08-28",
"cuenta": "hucha",
"concepto": "TRASPASO DESDE GASTOS",
"importe": 200,
"saldo": 9000.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0188"
},
{
"fecha": "2026-08-28",
"cuenta": "gastos",
"concepto": "DECATHLON",
"importe": -33.6,
"saldo": 2394.33,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0189"
},
{
"fecha": "2026-08-29",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -42.85,
"saldo": 2351.48,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0190"
},
{
"fecha": "2026-08-29",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -59.1,
"saldo": 2292.38,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0191"
},
{
"fecha": "2026-08-29",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -36.66,
"saldo": 2255.72,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0192"
},
{
"fecha": "2026-08-31",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -241.36,
"saldo": 2014.36,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0193"
},
{
"fecha": "2026-09-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 1264.36,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0194"
},
{
"fecha": "2026-09-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 970.06,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0195"
},
{
"fecha": "2026-09-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 933.77,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0196"
},
{
"fecha": "2026-09-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 921.78,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0197"
},
{
"fecha": "2026-09-01",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -116.13,
"saldo": 805.65,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0198"
},
{
"fecha": "2026-09-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -79.78,
"saldo": 725.87,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0199"
},
{
"fecha": "2026-09-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": 695.87,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0200"
},
{
"fecha": "2026-09-05",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -56.53,
"saldo": 639.34,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0201"
},
{
"fecha": "2026-09-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ESTUDIO NORTE SL",
"importe": 1007.0,
"saldo": 5587.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0202"
},
{
"fecha": "2026-09-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -199.5,
"saldo": 5387.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0203"
},
{
"fecha": "2026-09-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 199.5,
"saldo": 3710.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0204"
},
{
"fecha": "2026-09-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -807.5,
"saldo": 4580.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0205"
},
{
"fecha": "2026-09-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 807.5,
"saldo": 1446.84,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0206"
},
{
"fecha": "2026-09-10",
"cuenta": "gastos",
"concepto": "SANITAS SEGURO SALUD",
"importe": -62.5,
"saldo": 1384.34,
"ambito": "personal",
"categoria": "Salud",
"id": "demo-0207"
},
{
"fecha": "2026-09-12",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -59.56,
"saldo": 1324.78,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0208"
},
{
"fecha": "2026-09-14",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -44.75,
"saldo": 1280.03,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0209"
},
{
"fecha": "2026-09-17",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -41.99,
"saldo": 1238.04,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0210"
},
{
"fecha": "2026-09-17",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -44.11,
"saldo": 1193.93,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0211"
},
{
"fecha": "2026-09-19",
"cuenta": "gastos",
"concepto": "LIDL",
"importe": -106.2,
"saldo": 1087.73,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0212"
},
{
"fecha": "2026-09-19",
"cuenta": "gastos",
"concepto": "BP",
"importe": -56.29,
"saldo": 1031.44,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0213"
},
{
"fecha": "2026-09-19",
"cuenta": "gastos",
"concepto": "DECATHLON",
"importe": -25.6,
"saldo": 1005.84,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0214"
},
{
"fecha": "2026-09-21",
"cuenta": "gastos",
"concepto": "CEPSA",
"importe": -47.27,
"saldo": 958.57,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0215"
},
{
"fecha": "2026-09-22",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ACME DIGITAL SL",
"importe": 1272.0,
"saldo": 5852.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0216"
},
{
"fecha": "2026-09-22",
"cuenta": "gastos",
"concepto": "BAR EL PUERTO",
"importe": -38.26,
"saldo": 920.31,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0217"
},
{
"fecha": "2026-09-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -252.0,
"saldo": 5600.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0218"
},
{
"fecha": "2026-09-23",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 252.0,
"saldo": 3962.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0219"
},
{
"fecha": "2026-09-23",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1020.0,
"saldo": 4580.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0220"
},
{
"fecha": "2026-09-23",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1020.0,
"saldo": 1940.31,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0221"
},
{
"fecha": "2026-09-25",
"cuenta": "gastos",
"concepto": "PCCOMPONENTES",
"importe": -244.0,
"saldo": 1696.31,
"ambito": "profesional",
"categoria": "Material y equipos",
"id": "demo-0222"
},
{
"fecha": "2026-09-26",
"cuenta": "gastos",
"concepto": "CONSUM",
"importe": -85.11,
"saldo": 1611.2,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0223"
},
{
"fecha": "2026-09-27",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -59.61,
"saldo": 1551.59,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0224"
},
{
"fecha": "2026-09-28",
"cuenta": "gastos",
"concepto": "TRASPASO A HUCHA",
"importe": -200,
"saldo": 1351.59,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0225"
},
{
"fecha": "2026-09-28",
"cuenta": "hucha",
"concepto": "TRASPASO DESDE GASTOS",
"importe": 200,
"saldo": 9200.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0226"
},
{
"fecha": "2026-09-28",
"cuenta": "gastos",
"concepto": "REPSOL",
"importe": -36.55,
"saldo": 1315.04,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0227"
},
{
"fecha": "2026-09-28",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -14.94,
"saldo": 1300.1,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0228"
},
{
"fecha": "2026-09-29",
"cuenta": "gastos",
"concepto": "REST. LA TASCA",
"importe": -17.34,
"saldo": 1282.76,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0229"
},
{
"fecha": "2026-10-01",
"cuenta": "gastos",
"concepto": "RECIBO ALQUILER VIVIENDA",
"importe": -750,
"saldo": 532.76,
"ambito": "personal",
"categoria": "Vivienda",
"id": "demo-0230"
},
{
"fecha": "2026-10-01",
"cuenta": "gastos",
"concepto": "TGSS CUOTA AUTONOMOS",
"importe": -294.3,
"saldo": 238.46,
"ambito": "profesional",
"categoria": "Seguridad Social",
"id": "demo-0231"
},
{
"fecha": "2026-10-01",
"cuenta": "gastos",
"concepto": "ADOBE SYSTEMS",
"importe": -36.29,
"saldo": 202.17,
"ambito": "profesional",
"categoria": "Software",
"id": "demo-0232"
},
{
"fecha": "2026-10-01",
"cuenta": "gastos",
"concepto": "SPOTIFY",
"importe": -11.99,
"saldo": 190.18,
"ambito": "personal",
"categoria": "Ocio",
"id": "demo-0233"
},
{
"fecha": "2026-10-01",
"cuenta": "gastos",
"concepto": "DECATHLON",
"importe": -38.59,
"saldo": 151.59,
"ambito": "personal",
"categoria": "Compras",
"id": "demo-0234"
},
{
"fecha": "2026-10-02",
"cuenta": "gastos",
"concepto": "GLOVO",
"importe": -32.47,
"saldo": 119.12,
"ambito": "personal",
"categoria": "Restaurantes",
"id": "demo-0235"
},
{
"fecha": "2026-10-03",
"cuenta": "gastos",
"concepto": "MERCADONA",
"importe": -83.47,
"saldo": 35.65,
"ambito": "personal",
"categoria": "Alimentación",
"id": "demo-0236"
},
{
"fecha": "2026-10-04",
"cuenta": "gastos",
"concepto": "BP",
"importe": -39.69,
"saldo": -4.04,
"ambito": "profesional",
"categoria": "Vehículo",
"id": "demo-0237"
},
{
"fecha": "2026-10-05",
"cuenta": "gastos",
"concepto": "RECIBO IBERDROLA",
"importe": -81.7,
"saldo": -85.74,
"ambito": "personal",
"categoria": "Suministros",
"id": "demo-0238"
},
{
"fecha": "2026-10-05",
"cuenta": "gastos",
"concepto": "DIGI MOVIL FIBRA",
"importe": -30,
"saldo": -115.74,
"ambito": "profesional",
"categoria": "Telefonía e internet",
"id": "demo-0239"
},
{
"fecha": "2026-10-08",
"cuenta": "cobros",
"concepto": "TRANSF. CLIENTE ACME DIGITAL SL",
"importe": 1749.0,
"saldo": 6329.0,
"ambito": "profesional",
"categoria": "Facturación",
"id": "demo-0240"
},
{
"fecha": "2026-10-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA IVA",
"importe": -346.5,
"saldo": 5982.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0241"
},
{
"fecha": "2026-10-09",
"cuenta": "iva",
"concepto": "TRASPASO DESDE COBROS",
"importe": 346.5,
"saldo": 4308.5,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0242"
},
{
"fecha": "2026-10-09",
"cuenta": "cobros",
"concepto": "TRASPASO A CUENTA GASTOS",
"importe": -1402.5,
"saldo": 4580.0,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0243"
},
{
"fecha": "2026-10-09",
"cuenta": "gastos",
"concepto": "TRASPASO DESDE COBROS",
"importe": 1402.5,
"saldo": 1286.76,
"ambito": "traspaso",
"categoria": "Traspaso",
"id": "demo-0244"
}
]
};
