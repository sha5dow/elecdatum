---
title: "Medición de resistencia de puesta a tierra"
sidebar:
  label: "Medición de resistencia de puesta a tierra"
description: "Ficha tecnica: Medición de resistencia de puesta a tierra"
keywords: ["ground resistance testing method fall of potential", "puesta-tierra"]
category: "puesta-tierra"
topic: "resistance-testing"
subcategory: "ground-resistance-testing"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La medición de la resistencia de puesta a tierra es el procedimiento técnico para cuantificar la oposición que ofrece el terreno al paso de corriente eléctrica desde un electrodo enterrado. Su valor determina la capacidad del sistema para dispersar corrientes de falla o descargas atmosféricas de forma segura. Un valor bajo y estable es esencial para garantizar la protección de personas, equipos y la continuidad operativa de las instalaciones eléctricas.

## Factores que afectan la resistencia de tierra
La resistencia de tierra depende directamente de la resistividad del suelo circundante, la cual varía según su composición, humedad y temperatura. La resistividad de los materiales del electrodo y la resistencia de contacto con el terreno suelen ser despreciables frente a la del suelo mismo. La tabla siguiente recoge valores orientativos de resistividad para distintos tipos de terreno.

| Tipo de suelo | Rango de resistividad (Ω·m / Ω·ft) |
|---|---|
| Arcilla compactada | 100 - 200 Ω·m / 328 - 656 Ω·ft |
| Arcilla blanda | 50 Ω·m / 164 Ω·ft |
| Arena arcillosa | 50 - 500 Ω·m / 164 - 1640 Ω·ft |
| Humus, mantillo | 10 - 150 Ω·m / 33 - 492 Ω·ft |
| Granito | 1500 - 10000 Ω·m / 4920 - 32800 Ω·ft |
| Granito alterado | 100 - 600 Ω·m / 328 - 1968 Ω·ft |
| Marga jurásica | 30 - 40 Ω·m / 98 - 131 Ω·ft |
| Caliza fisurada | 500 - 1000 Ω·m / 1640 - 3280 Ω·ft |
| Marga | 100 - 200 Ω·m / 328 - 656 Ω·ft |
| Esquisto micáceo | 800 Ω·m / 2624 Ω·ft |
| Turba | 5 - 100 Ω·m / 16 - 328 Ω·ft |
| Arenisca | 1500 - 10000 Ω·m / 4920 - 32800 Ω·ft |
| Arenisca alterada | 100 - 600 Ω·m / 328 - 1968 Ω·ft |
| Pizarra, esquisto | 50 - 300 Ω·m / 164 - 984 Ω·ft |
| Arena silícea | 200 - 300 Ω·m / 656 - 984 Ω·ft |
| Suelo calcáreo | 100 - 300 Ω·m / 328 - 984 Ω·ft |
| Suelo pantanoso | 1 - 30 Ω·m / 3 - 98 Ω·ft |
| Subsuelo pedregoso con césped | 300 - 500 Ω·m / 984 - 1640 Ω·ft |
| Terreno pedregoso | 1500 - 3000 Ω·m / 4920 - 9840 Ω·ft |

## Método de caída de potencial (3 puntos)
Es el método de referencia para medir la resistencia de un electrodo de puesta a tierra, normalizado internacionalmente. Consiste en hacer circular una corriente conocida entre el electrodo bajo prueba (E) y un electrodo auxiliar de corriente (C) clavado a distancia, mientras se mide la caída de tensión con un electrodo de potencial (P) situado entre ambos, fuera de sus zonas de influencia. La resistencia se obtiene aplicando la ley de Ohm al cociente entre la tensión medida y la corriente inyectada.

> **R = V / I**

| Variable | Significado | Unidad |
|---|---|---|
| R | Resistencia de puesta a tierra | Ohm (Ω) |
| V | Tensión medida entre el electrodo bajo prueba y el de potencial | Volt (V) |
| I | Corriente inyectada entre el electrodo bajo prueba y el de corriente | Ampere (A) |

El electrodo C debe clavarse a una distancia suficiente, típicamente de 5 a 10 veces la dimensión máxima del electrodo bajo prueba. El electrodo P se sitúa al 62 % de la distancia entre E y C para obtener una lectura estabilizada en suelos homogéneos. Antes de la prueba es obligatorio desconectar el electrodo del resto de la instalación para evitar trayectorias paralelas que falseen la medida.

## Otros métodos de medición
Existen técnicas alternativas para situaciones donde el método de caída de potencial no es viable o se requiere una verificación rápida sin desconexión. El método de pinza o estacless emplea una pinza inductora y otra de medición sobre el conductor de tierra, calculando R = V / I; solo funciona en sistemas con múltiples electrodos en paralelo que forman un bucle cerrado. El método de varilla acoplada o attached rod conecta un electrodo auxiliar al de tierra con un cable y calcula la resistencia a partir de la tensión y corriente medidas, sin necesidad de desconectar los electrodos pero exigiendo buen contacto galvánico. El método estrella‑delta utiliza tres electrodos auxiliares dispuestos en triángulo equilátero y aplica las leyes de Kirchhoff para resolver la resistencia desconocida R a partir de las tensiones medidas entre pares de electrodos bajo corriente inyectada secuencialmente.

## Tabla comparativa de métodos

| Método | Ventaja principal | Limitación relevante | Precisión típica |
|---|---|---|---|
| Caída de potencial (3 puntos) | Exactitud elevada y respaldo normativo | Requiere desconexión del electrodo y espacio para picas auxiliares | ±2 - 5 % |
| Pinza (estacless) | Medición sin desconexión ni picas | Solo aplicable en sistemas con bucle de tierra múltiple | ±10 - 20 % |
| Varilla acoplada (attached rod) | No necesita desconectar la instalación | Exige contacto de baja resistencia en la unión cable‑electrodo | ±5 - 10 % |
| Estrella‑delta (4 puntos) | No requiere desconexión, útil en espacios reducidos | Mayor número de electrodos y cálculos más complejos | ±5 - 15 % |

## Valores típicos de resistencia de tierra
El valor admisible depende de la aplicación y de la normativa aplicable. En instalaciones de baja tensión según el NEC, se recomienda no superar 25 Ω con un solo electrodo, aunque no se exige un máximo absoluto si se instala un segundo electrodo suplementario. Para sistemas de telecomunicaciones o centros de datos se especifican valores inferiores, usualmente por debajo de 3 Ω e incluso menores de 1 Ω en sitios críticos. La tabla siguiente recoge criterios orientativos de estado en función de la resistencia medida.

| Valor de resistencia (Ω / Ω) | Estado típico |
|---|---|
| < 1 Ω / < 1 Ω | Excelente para equipos electrónicos sensibles |
| 1 - 5 Ω / 1 - 5 Ω | Adecuado para telecomunicaciones e industria |
| 5 - 25 Ω / 5 - 25 Ω | Aceptable para protección general en BT |
| > 25 Ω / > 25 Ω | Requiere mejora; obliga a electrodo suplementario según NEC |

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/soil-resistivity-d_1865.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-of-earth/
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Ground-Resistance-It-is-Not-What-You-Think-(12-30-99).php
