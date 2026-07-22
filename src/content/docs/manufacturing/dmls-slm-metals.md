---
title: "DMLS SLM metales impresión 3D"
sidebar:
  label: "DMLS SLM metales impresión 3D"
description: "Ficha tecnica: DMLS SLM metales impresión 3D"
keywords: ["DMLS SLM metal 3D printing tolerances titanium", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "dmls"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción general
La sinterización directa por láser de metales (DMLS) y la fusión selectiva por láser (SLM) son tecnologías de fabricación aditiva por fusión de lecho de polvo que utilizan un láser de alta potencia para fundir y fusionar polvo metálico capa por capa, creando componentes metálicos completamente densos. El proceso está normalizado por ASTM como fusión de lecho de polvo (PBF). Aunque comercialmente se presentan como procesos distintos —DMLS suele implicar una sinterización parcial y SLM una fusión completa—, ambos términos se usan hoy de forma intercambiable para referirse a la fusión total del material. El volumen de construcción típico alcanza dimensiones de hasta 500 mm / 19,69 in en cada eje, con equipos de gran formato que superan 1 m / 39,37 in.

## Proceso de fabricación
1. Se genera un modelo CAD 3D y se corta en capas de entre 20 µm / 0,0008 in y 100 µm / 0,0039 in, normalmente de 30–60 µm / 0,0012–0,0024 in.
2. La cámara de construcción se inertiza con argón o nitrógeno hasta alcanzar niveles de oxígeno inferiores a 1000 ppm.
3. Una capa uniforme de polvo metálico atomizado, de granulometría típica 15–45 µm / 0,0006–0,0018 in, se extiende sobre la plataforma de construcción mediante una cuchilla o rodillo recargador.
4. Un láser de fibra de iterbio, con potencia desde 100 W / 0,13 hp hasta 1000 W / 1,34 hp, barre selectivamente la sección transversal de la capa fundiendo las partículas metálicas.
5. La plataforma desciende un espesor de capa y se repite el ciclo hasta completar la pieza.
6. La pieza se retira y se somete a posprocesado: eliminación de soportes, tratamiento térmico para alivio de tensiones y, si se requiere, mecanizado o pulido superficial.

## Parámetros del proceso
Los parámetros de proceso varían según la aleación y el equipo. A continuación se muestran valores típicos en equipos industriales de 400 W / 0,54 hp.

| Material | Capa típica | Potencia láser | Velocidad de escaneado | Distancia de escotadura | Densidad relativa |
| --- | --- | --- | --- | --- | --- |
| Titanio Ti6Al4V | 30 µm / 0,0012 in | 200–400 W / 0,27–0,54 hp | 800–1500 mm/s / 31,5–59,1 in/s | 100–120 µm / 0,0039–0,0047 in | > 99,5 % |
| Acero inoxidable 316L | 40 µm / 0,0016 in | 200–350 W / 0,27–0,47 hp | 700–1200 mm/s / 27,6–47,2 in/s | 90–110 µm / 0,0035–0,0043 in | > 99,5 % |
| Aluminio AlSi10Mg | 30–50 µm / 0,0012–0,0020 in | 250–400 W / 0,34–0,54 hp | 1000–2000 mm/s / 39,4–78,7 in/s | 130–180 µm / 0,0051–0,0071 in | > 99 % |
| Inconel 718 | 40–60 µm / 0,0016–0,0024 in | 250–400 W / 0,34–0,54 hp | 600–1100 mm/s / 23,6–43,3 in/s | 90–110 µm / 0,0035–0,0043 in | > 99,5 % |
| Cobalto-cromo | 30–50 µm / 0,0012–0,0020 in | 200–350 W / 0,27–0,47 hp | 600–1000 mm/s / 23,6–39,4 in/s | 80–100 µm / 0,0031–0,0039 in | > 99,5 % |

La atmósfera inerte se mantiene con un flujo continuo de argón a una presión ligeramente positiva; el precalentamiento de la plataforma, típicamente entre 100 °C / 212 °F y 200 °C / 392 °F, reduce las tensiones térmicas.

## Materiales aplicables
Se procesan aleaciones metálicas en forma de polvo esférico atomizado:

- Aceros: inoxidable 316L, 17-4PH, herramientas H13, maraging.
- Titanio: Ti6Al4V (grado 5 y grado 23), Ti CP.
- Aluminio: AlSi10Mg, AlSi7Mg, Scalmalloy.
- Superaleaciones base níquel: Inconel 718, Inconel 625, Hastelloy X.
- Cobalto-cromo: para aplicaciones dentales y médicas.
- Cobre y aleaciones refractarias como tungsteno.

La esfericidad y la distribución granulométrica controlada (15–45 µm / 0,0006–0,0018 in) garantizan una alta fluidez y una densidad de empaquetamiento uniforme, factores críticos para la calidad superficial y la porosidad final.

## Tolerancias típicas
La precisión dimensional y la rugosidad dependen del material, la orientación de la pieza y el posprocesado.

| Parámetro | Valor típico | Posprocesado avanzado |
| --- | --- | --- |
| Tolerancia dimensional (ejes X,Y) | ±0,1 mm / ±0,004 in por cada 25 mm / 1 in | ±0,05 mm / ±0,002 in |
| Tolerancia dimensional (eje Z) | ±0,2 mm / ±0,008 in por cada 25 mm / 1 in | ±0,1 mm / ±0,004 in |
| Rugosidad superficial (Ra) tal como construida | 10–20 µm / 394–787 µin | 1–3 µm / 39–118 µin con pulido |
| Tamaño mínimo de detalle | 0,3–0,5 mm / 0,012–0,020 in | – |
| Espesor mínimo de pared | 0,3–0,4 mm / 0,012–0,016 in | 0,2 mm / 0,008 in con soportes optimizados |

La contracción térmica y las tensiones residuales pueden distorsionar piezas esbeltas, requiriendo un diseño con espesores uniformes y soportes adecuados.

## Ventajas y limitaciones
**Ventajas:**
- Complejidad geométrica sin penalización de coste: permite canales internos, estructuras reticulares y geometrías imposibles por arranque de viruta.
- Densidad superior al 99,5 % / 99,5 %, propiedades mecánicas comparables a las de forja tras tratamiento térmico.
- Amplia gama de materiales, desde aluminio hasta superaleaciones y titanio.
- Reducción de desperdicio de material en comparación con mecanizado sustractivo.
- Prototipado funcional y producción de series cortas sin utillaje.

**Limitaciones:**
- Acabado superficial rugoso, que suele requerir operaciones secundarias.
- Elevado coste de maquinaria (desde 250 000 USD / 250 000 USD) y de materia prima en polvo.
- Limitación en tamaño de piezas, con volúmenes máximos típicos de 250 × 250 × 300 mm / 9,8 × 9,8 × 11,8 in, aunque existen equipos de mayor formato.
- Velocidad de construcción inferior a los métodos convencionales, con tasas de 5–20 cm³/h / 0,31–1,22 in³/h según potencia y material.
- Necesidad de estructuras de soporte conductivas del calor, que deben retirarse mecánicamente.

## Guía de selección
Utilice DMLS/SLM cuando:

- La pieza requiera geometrías internas complejas, como canales de refrigeración conformados o estructuras aligeradas no mecanizables.
- Se busque consolidación de componentes: reducción de un ensamblaje a una única pieza.
- Se necesite iteración rápida de prototipos funcionales en el material de producción.
- La aplicación demande titanio, Inconel u otras aleaciones difíciles de mecanizar.
- El volumen de producción sea bajo o medio (1–500 piezas/año) y los costes de utillaje convencional no se justifiquen.

Considere procesos alternativos (mecanizado CNC, forja, fundición) si la rugosidad superficial Ra debe ser < 3 µm / 118 µin sin posprocesado o si los volúmenes superan miles de piezas al año.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la precisión dimensional típica del proceso DMLS/SLM?
La tolerancia dimensional estándar es de ±0,1 mm / ±0,004 in por cada 25 mm / 1 in en los ejes X e Y, y ±0,2 mm / ±0,008 in en el eje Z para piezas sin mecanizado posterior.

### ¿Qué espesores de capa se emplean en la fabricación metálica por lecho de polvo?
Los espesores de capa varían entre 20 µm / 0,0008 in y 100 µm / 0,0039 in, aunque en producción se emplean mayoritariamente capas de 30–60 µm / 0,0012–0,0024 in.

### ¿Qué rugosidad superficial se obtiene directamente de la máquina?
La rugosidad media aritmética (Ra) en superficies verticales tal como se construyen oscila entre 10 µm / 394 µin y 20 µm / 787 µin, pudiendo reducirse a 1–3 µm / 39–118 µin mediante pulido.

### ¿Cuál es la densidad alcanzable en las piezas de titanio Ti6Al4V?
La densidad relativa supera el 99,5 % / 99,5 %, alcanzando valores cercanos al 99,9 % / 99,9 % con parámetros optimizados y tratamiento térmico posterior.

### ¿Qué tamaño máximo de pieza se puede fabricar?
Los equipos industriales habituales ofrecen volúmenes de construcción de 250 × 250 × 300 mm / 9,8 × 9,8 × 11,8 in, mientras que los sistemas de gran formato sobrepasan 500 × 500 × 500 mm / 19,7 × 19,7 × 19,7 in e incluso 800 × 400 × 500 mm / 31,5 × 15,7 × 19,7 in en algunos modelos.

### ¿Cuánto cuesta aproximadamente una impresora DMLS/SLM industrial?
El rango de precios de los equipos DMLS/SLM comienza alrededor de 250 000 USD / 250 000 USD y puede superar 1 000 000 USD / 1 000 000 USD para sistemas de alta productividad con láseres múltiples.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/designstandards/
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/direct-laser-metal-sintering-dmls
