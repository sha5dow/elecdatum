---
title: "Clasificación de categorías de sobretensión"
sidebar:
  label: "Clasificación de categorías de sobretensión"
description: "Ficha tecnica: Clasificación de categorías de sobretensión"
keywords: ["overvoltage category classification I II III IV", "calidad-energia"]
category: "calidad-energia"
topic: "transients"
subcategory: "overvoltage-category-classification"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Las categorías de sobretensión, establecidas por la norma IEC 61010-1, clasifican los circuitos eléctricos en cuatro niveles (CAT I a CAT IV) en función de la energía continua disponible y la magnitud de las sobretensiones transitorias esperadas en el punto de medición. Los valores de tensión de impulso soportada oscilan entre 500 V para un equipo CAT II a 50 V de trabajo y 12 000 V para un instrumento CAT IV utilizado en sistemas de 1000 V.

## Definición y propósito

La clasificación por categorías de sobretensión (o categorías de medición) identifica el riesgo de transitorios de tensión que puede encontrar un instrumento de medida, un dispositivo de protección o una instalación eléctrica. Su propósito es garantizar que el equipo posea el nivel de aislamiento y las distancias de fuga y de aislamiento adecuadas para soportar las sobretensiones originadas por descargas atmosféricas, maniobras de conmutación o fallos de la red sin comprometer la seguridad del operador ni la integridad del sistema.

## Categorías según IEC 61010-1

La norma IEC 61010-1 divide los circuitos en las siguientes categorías de medición:

| Categoría | Descripción |
| --- | --- |
| CAT I | Mediciones realizadas en circuitos no conectados directamente a la red de alimentación (red eléctrica pública). Incluye circuitos internos protegidos derivados de la red. Los transitorios están controlados a niveles bajos y la impedancia de fuente es elevada. |
| CAT II | Mediciones en circuitos conectados directamente a la instalación de baja tensión. Corresponde a tomas de corriente, electrodomésticos, herramientas portátiles y equipos de consumo similares. Las sobretensiones transitorias son más importantes que en CAT I pero menores que en las categorías superiores. |
| CAT III | Mediciones realizadas en la instalación fija del edificio. Abarca tableros de distribución, interruptores automáticos, cableados, embarrados, cajas de conexión, enchufes industriales y equipos fijos. La energía disponible en caso de un transitorio es considerable. |
| CAT IV | Mediciones efectuadas en el origen de la instalación de alta tensión o en el punto de acometida. Incluye contadores de energía, dispositivos de protección contra sobrecorriente primarios y sistemas de control de rizado. Se trata del nivel más severo, con las sobretensiones de impulso más elevadas y la menor impedancia de fuente. |

## Tensiones de impulso soportadas

La tabla siguiente recoge los valores normalizados de tensión de impulso que debe soportar un equipo clasificado en cada categoría, en función de la tensión nominal de trabajo:

| Tensión de trabajo (V) | CAT I | CAT II | CAT III | CAT IV |
| --- | --- | --- | --- | --- |
| 150 | 800 V | 1500 V | 2500 V | 4000 V |
| 300 | 1500 V | 2500 V | 4000 V | 6000 V |
| 600 | 2500 V | 4000 V | 6000 V | 8000 V |
| 1000 | 4000 V | 6000 V | 8000 V | 12 000 V |

La impedancia de fuente empleada durante los ensayos de sobretensión transitoria depende de la categoría:

| Categoría | Impedancia de fuente (Ω) |
| --- | --- |
| CAT I | 30 |
| CAT II | 12 |
| CAT III | 2 |
| CAT IV | 2 |

Una impedancia de fuente más baja permite que fluya una corriente de falta mayor, lo que explica por qué las categorías más altas imponen requisitos de aislamiento más severos.

## Selección de la categoría del instrumento

La elección de la categoría de un multímetro, pinza amperimétrica o comprobador de tensión debe ser igual o superior a la categoría del punto donde se realiza la medición. Por ejemplo, para medir en el embarrado de un cuadro de distribución (CAT III) no se debe emplear un equipo CAT II. El uso de un instrumento en una categoría inferior a la requerida expone al usuario a un riesgo de arco eléctrico y de explosión del equipo.

Las distancias de aislamiento y las líneas de fuga mínimas aumentan con la categoría y con la tensión de trabajo. Para una doble aislamiento, los valores pueden variar desde 0,04 mm / 0.0016 in (CAT II, 50 V) hasta 28 mm / 1.102 in (CAT IV, 1000 V). Estos requisitos aseguran que el equipo mantenga su integridad dieléctrica incluso durante transitorios severos.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre las categorías de sobretensión y las clases de aislamiento?

Las categorías de sobretensión clasifican el punto de la instalación en función de la energía y los transitorios esperados, mientras que las clases de aislamiento (básico, suplementario, doble o reforzado) definen el nivel de protección del equipo. Ambas se complementan para fijar las distancias de fuga y las tensiones de ensayo.

### ¿Se puede utilizar un instrumento CAT III para medir en un circuito CAT II?

Sí. Un equipo con clasificación CAT III puede medir en circuitos CAT II o CAT I porque su diseño soporta transitorios superiores. La regla general es que el instrumento debe tener una categoría igual o superior a la del punto de medición.

### ¿Por qué la impedancia de fuente es menor en CAT III y CAT IV?

Porque estos puntos están más cerca del transformador de distribución o del origen de la instalación, donde la capacidad de suministrar corriente de cortocircuito es mayor. Una impedancia baja permite que una sobretensión transitoria entregue mucha más energía al instrumento.

### ¿Qué sucede si mido en un cuadro general con un equipo CAT II?

El instrumento no está diseñado para soportar los transitorios que pueden aparecer en ese punto. Existe un alto riesgo de perforación del aislamiento, arco eléctrico interno y lesiones al operador. Siempre se debe respetar la categoría mínima indicada por el fabricante.

### ¿Las categorías de sobretensión se aplican solo a multímetros?

No. Afectan a cualquier equipo de medida, control o laboratorio conectado a la red eléctrica (osciloscopios, registradores, pinzas de corriente, comprobadores de tensión, etc.), así como a los propios componentes de la instalación fija.

### ¿Cómo influye la altitud en las categorías de sobretensión?

A mayor altitud, la rigidez dieléctrica del aire disminuye, por lo que algunos fabricantes reducen la tensión máxima de trabajo o exigen un margen adicional en las distancias de aislamiento. Sin embargo, la categoría y las tensiones de impulso normalizadas no varían; es el usuario quien debe considerar las condiciones ambientales.

## Fuentes consultadas

- [Hazardous Areas - North America Classification](https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html)
- [Thyristor Protection or SCR Protection](https://www.electrical4u.com/thyristor-protection-or-scr-protection/)