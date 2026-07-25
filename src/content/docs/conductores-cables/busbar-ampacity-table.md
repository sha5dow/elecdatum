---
title: "Ampacidad de barras conductoras (busbar)"
sidebar:
  label: "Ampacidad de barras conductoras (busbar)"
description: "Ficha tecnica: Ampacidad de barras conductoras (busbar)"
keywords: ["busbar ampacity table copper aluminum", "conductores-cables"]
category: "conductores-cables"
topic: "busbar"
subcategory: "busbar-ampacity"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La ampacidad de una barra conductora (busbar) es la máxima corriente eléctrica que puede transportar de forma continua sin exceder los límites de temperatura establecidos para el aislamiento o para su entorno inmediato. Se fabrican normalmente en cobre o aluminio, con secciones transversales desde unos pocos milímetros cuadrados hasta cientos de milímetros cuadrados. La sección transversal, la forma (plana, tubular o maciza) y el material definen la capacidad de conducción. En corriente alterna de 50–60 Hz, el efecto pelicular limita la profundidad efectiva de conducción a unos 8 mm para el cobre, por lo que las barras planas o huecas son las más frecuentes en altas corrientes. La siguiente información resume los principios de diseño y valores típicos de ampacidad.

## Factores que influyen en la ampacidad
La ampacidad de una barra no es un valor fijo; depende del equilibrio entre la generación de calor por efecto Joule y la disipación al entorno. Los factores principales son:

- **Material**: resistividad eléctrica y conductividad térmica del conductor.
- **Sección transversal**: a mayor área, menor resistencia y mayor capacidad de corriente.
- **Forma y superficie de enfriamiento**: barras planas disipan mejor que redondas; los tubos aprovechan la convección interior.
- **Disposición**: barras en paralelo, separación entre fases, confinamiento en envolventes.
- **Temperatura ambiente**: la ampacidad se indica generalmente para 30 °C (86 °F); a mayor temperatura se reduce.
- **Elevación de temperatura admisible**: según la clase de aislación o límites de seguridad (típicamente 30‑60 °C de sobreelevación).
- **Efecto pelicular (skin effect)**: en CA reduce la sección útil en barras gruesas.
- **Efecto de proximidad**: cuando hay barras cercanas, distorsiona la distribución de corriente.
- **Conexiones y puntos de contacto**: una mala conexión eleva la resistencia local y reduce la ampacidad real del conjunto.

## Valores típicos de referencia
La tabla siguiente presenta ampacidades orientativas para conductores de cobre y aluminio en aire libre a 30 °C ambiente, derivadas de los diagramas de máxima corriente para alambres de Engineering Toolbox. Estos valores constituyen una referencia conservadora; para barras planas con la misma sección transversal, la capacidad real de transporte de corriente suele ser un 10‑20 % mayor gracias a su mayor superficie de disipación.

| Sección transversal (mm² / AWG / in²) | Ampacidad cobre (A) | Ampacidad aluminio (A) |
| --- | --- | --- |
| 1,5 mm² / AWG 16 (0,00233 in²) | 15 | 12 |
| 2,5 mm² / AWG 14 (0,00388 in²) | 20 | 16 |
| 4 mm² / AWG 12 (0,00621 in²) | 25 | 20 |
| 6 mm² / AWG 10 (0,00933 in²) | 32 | 30 |
| 10 mm² / AWG 8 (0,0155 in²) | 45 | 35 |
| 16 mm² / AWG 6 (0,0248 in²) | 60 | 48 |
| 25 mm² / AWG 4 (0,0388 in²) | 80 | 64 |
| 35 mm² / AWG 2 (0,0543 in²) | 100 | 80 |
| 50 mm² / AWG 0 (0,0775 in²) | 125 | 100 |

*Nota:* El valor de 30 A para aluminio de 6 mm² es el único dato numérico explícito tomado directamente del diagrama de Engineering Toolbox. Los demás son extrapolaciones típicas.

## Fórmula de ampacidad
La ampacidad se determina a partir del equilibrio térmico entre la generación de calor por efecto Joule y la disipación por convección y radiación. La expresión simplificada para una barra en aire es:

> **I = √(ΔT · h · A / R)**

| Variable | Descripción | Unidades (métrico / imperial) |
| --- | --- | --- |
| I | Corriente admisible (ampacidad) | A |
| ΔT | Sobreelevación de temperatura respecto al ambiente | K / °C |
| h | Coeficiente combinado de transferencia de calor (convección + radiación) | W/(m²·K) / BTU/(h·ft²·°F) |
| A | Área superficial efectiva de la barra | m² / ft² |
| R | Resistencia eléctrica de la barra a la temperatura de operación | Ω |

En la práctica, a partir de la geometría y las propiedades del material se obtiene R, y con valores empíricos de h se calcula I para un ΔT deseado.

## Comparación cobre vs. aluminio
Las barras de cobre ofrecen mayor conductividad que las de aluminio para una misma sección, pero el aluminio es más ligero y económico. La tabla siguiente compara las propiedades básicas a 20 °C.

| Propiedad | Cobre | Aluminio |
| --- | --- | --- |
| Resistividad eléctrica | 0,01724 Ω·mm²/m (10,37 Ω·cmil/ft) | 0,0282 Ω·mm²/m (17,0 Ω·cmil/ft) |
| Densidad | 8,96 g/cm³ (0,324 lb/in³) | 2,70 g/cm³ (0,0975 lb/in³) |
| Ampacidad relativa para igual sección | 1 | 0,75 – 0,8 |
| Sección necesaria para igual ampacidad | 1 | 1,3 – 1,5 |

La relación de ampacidades cobre/aluminio para la misma sección es aproximadamente 1,25 – 1,3. Las uniones bimetálicas requieren atención especial para evitar corrosión galvánica.

## Aplicaciones típicas
- Distribución principal en tableros eléctricos y centros de control de motores.
- Barras de puesta a tierra y neutro en envolventes.
- Conexión de baterías en bancos de almacenamiento (battery banks).
- Subestaciones eléctricas, donde se emplean tubos de aluminio o cobre de gran diámetro.
- Electrólisis y hornos de arco, con corrientes que alcanzan decenas de miles de amperios.
- Barras flexibles laminadas para compensar vibraciones y dilataciones.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la ampacidad de una barra de cobre de 6 mm² en aire libre?
Para una barra de cobre de 6 mm² en condiciones similares a las de un alambre desnudo, se puede tomar como referencia 32 A, aunque en forma plana puede alcanzar entre 35 A y 40 A. El diagrama de Engineering Toolbox indica para aluminio de igual sección 30 A.

### ¿A partir de qué espesor se vuelve relevante el efecto pelicular en un busbar de cobre a 60 Hz?
En corriente alterna de 60 Hz, el efecto pelicular limita la conducción efectiva a una profundidad de aproximadamente 8 mm (0.31 in). Para espesores superiores, conviene utilizar barras planas, huecas o múltiples láminas.

### ¿Cuánta corriente puede transportar una barra plana de aluminio de 50 mm² de sección?
Con base en los valores de alambre, una barra de aluminio de 50 mm² puede conducir del orden de 100 A; en formato plano con buena ventilación se alcanzan fácilmente 115‑120 A manteniendo una sobreelevación de temperatura moderada.

### ¿Qué caída de tensión se produce en una barra de cobre de 25 mm² que transporta 80 A durante 1 metro?
La resistencia de una barra de cobre de 25 mm² a 20 °C es aproximadamente 0,00069 Ω/m. Con 80 A, la caída de tensión es de ≈0,055 V por metro (80 A × 0,00069 Ω).

### ¿Qué incremento de temperatura se diseña normalmente para una barra conductora a plena carga?
Las barras de distribución se suelen diseñar para una sobreelevación de temperatura (ΔT) de entre 30 °C (54 °F) y 60 °C (108 °F) por encima de la temperatura ambiente, típicamente 30 °C, dependiendo del tipo de aislante y de la envolvente.

### ¿Cuál es la relación típica de ampacidad entre cobre y aluminio para la misma sección?
Para una misma sección transversal, la ampacidad del cobre es aproximadamente 1.25 a 1.3 veces la del aluminio. Inversamente, para igual capacidad de corriente, el aluminio requiere entre un 30 % y un 50 % más de sección.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/maximum-current-copper-aluminum-wire-d_1690.html
- **southwire.com**: https://www.southwire.com/calculators
