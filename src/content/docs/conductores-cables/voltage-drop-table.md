---
title: "Tabla de caída de tensión por calibre y distancia"
sidebar:
  label: "Tabla de caída de tensión por calibre y distancia"
description: "Ficha tecnica: Tabla de caída de tensión por calibre y distancia"
keywords: ["voltage drop table wire gauge distance", "conductores-cables"]
category: "conductores-cables"
topic: "voltage-drop"
subcategory: "voltage-drop-table"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La caída de tensión en conductores de cobre es un fenómeno crítico en instalaciones de baja tensión, especialmente en sistemas de corriente continua de 12 V, 24 V o 48 V. Una pérdida excesiva de voltaje reduce la eficiencia energética y puede provocar el mal funcionamiento de los equipos conectados. Los valores normalizados consideran una caída admisible del 2 % para circuitos de iluminación y cargas sensibles. La tabla siguiente presenta las longitudes máximas de cable recomendadas para distintos calibres AWG e intensidades de corriente en un sistema de 12 V CC con un máximo de 2 % de caída de tensión.

## Fórmula de caída de tensión en CC

La caída de tensión en un circuito de corriente continua monofásico de dos hilos se calcula con la siguiente expresión:

> **Vₚ = (2 × Lₘ × I × Rₘ) / 1000**

| Variable | Descripción | Unidad |
|---|---|---|
| Vₚ | Caída de tensión en el conductor | V |
| Lₘ | Longitud del cable (distancia de ida, sin retorno) | m |
| I | Corriente que circula por el conductor | A |
| Rₘ | Resistencia del conductor por unidad de longitud | Ω/km |

La resistencia Rₘ varía con la sección del conductor y la temperatura de operación. Para cobre a 75 °C, los valores típicos oscilan entre 33,9 Ω/km para calibre 10 AWG y 0,9 Ω/km para calibre 2/0 AWG.

En sistemas de 12 V donde la estructura metálica actúa como conductor de retorno (por ejemplo, en automoción), el factor 2 se sustituye por 1, duplicando la distancia útil.

## Tabla de caída de tensión para 12 V CC (caída del 2 %)

Los valores de la tabla corresponden a la **longitud total del cable** (suma de los conductores de ida y retorno) para un sistema de dos hilos de cobre a 75 °C, con una caída de tensión máxima del 2 % (0,24 V) sobre 12 V nominales. Para conocer la distancia máxima entre fuente y carga, debe dividirse la longitud indicada entre dos.

| AWG | Sección (mm² / kcmil) | 3 A (m / ft) | 5 A (m / ft) | 10 A (m / ft) | 15 A (m / ft) | 20 A (m / ft) | 25 A (m / ft) | 30 A (m / ft) |
|---|---|---|---|---|---|---|---|---|
| 18 | 0,82 mm² / 1,62 | 5,8 m / 19 ft | 3,5 m / 11,5 ft | 1,7 m / 5,7 ft | 1,2 m / 3,8 ft | 0,9 m / 2,9 ft | 0,7 m / 2,3 ft | 0,6 m / 1,9 ft |
| 16 | 1,31 mm² / 2,58 | 9,3 m / 30,5 ft | 5,6 m / 18,3 ft | 2,8 m / 9,2 ft | 1,9 m / 6,1 ft | 1,4 m / 4,6 ft | 1,1 m / 3,7 ft | 0,9 m / 3,1 ft |
| 14 | 2,08 mm² / 4,11 | 14,8 m / 48,6 ft | 8,9 m / 29,2 ft | 4,4 m / 14,6 ft | 3,0 m / 9,7 ft | 2,2 m / 7,3 ft | 1,8 m / 5,8 ft | 1,5 m / 4,9 ft |
| 12 | 3,31 mm² / 6,53 | 23,5 m / 77,2 ft | 14,1 m / 46,3 ft | 7,1 m / 23,2 ft | 4,7 m / 15,4 ft | 3,5 m / 11,6 ft | 2,8 m / 9,3 ft | 2,3 m / 7,7 ft |
| 10 | 5,26 mm² / 10,4 | 37,4 m / 122,7 ft | 22,4 m / 73,6 ft | 11,2 m / 36,8 ft | 7,5 m / 24,5 ft | 5,6 m / 18,4 ft | 4,5 m / 14,7 ft | 3,7 m / 12,3 ft |
| 8 | 8,37 mm² / 16,5 | 59,6 m / 195,5 ft | 35,8 m / 117,3 ft | 17,9 m / 58,7 ft | 11,9 m / 39,1 ft | 8,9 m / 29,3 ft | 7,2 m / 23,5 ft | 6,0 m / 19,6 ft |
| 6 | 13,3 mm² / 26,3 | 94,8 m / 311 ft | 56,9 m / 186,6 ft | 28,4 m / 93,3 ft | 19,0 m / 62,2 ft | 14,2 m / 46,7 ft | 11,4 m / 37,3 ft | 9,5 m / 31,2 ft |
| 4 | 21,2 mm² / 41,7 | 151 m / 495 ft | 90,7 m / 297,6 ft | 45,3 m / 148,8 ft | 30,2 m / 99,2 ft | 22,7 m / 74,4 ft | 18,1 m / 59,5 ft | 15,1 m / 49,6 ft |
| 2 | 33,6 mm² / 66,4 | 240 m / 789 ft | 144 m / 473 ft | 72,1 m / 236,7 ft | 48,1 m / 157,8 ft | 36,0 m / 118,3 ft | 28,8 m / 94,6 ft | 24,0 m / 78,9 ft |
| 1/0 | 53,5 mm² / 105,6 | 382 m / 1254 ft | 229 m / 752 ft | 114 m / 376 ft | 76,4 m / 250,8 ft | 57,3 m / 188,1 ft | 45,8 m / 150,5 ft | 38,2 m / 125,4 ft |
| 2/0 | 67,4 mm² / 133,1 | 482 m / 1581 ft | 289 m / 949 ft | 145 m / 474 ft | 96,4 m / 316 ft | 72,3 m / 237 ft | 57,8 m / 190 ft | 48,2 m / 158 ft |
| 4/0 | 107 mm² / 211,6 | 766 m / 2514 ft | 460 m / 1509 ft | 230 m / 754 ft | 153 m / 503 ft | 115 m / 377 ft | 92,0 m / 302 ft | 76,6 m / 251 ft |

Los datos se derivan de la gráfica de máxima longitud de cable de Engineering Toolbox para sistemas de 12 V con 2 % de caída y se complementan con resistencias normalizadas NEC para cobre a 75 °C.

## Factores que afectan la caída de tensión

- **Temperatura del conductor**: La resistencia del cobre aumenta aproximadamente un 0,393 % por cada grado Celsius de elevación sobre 20 °C. A la temperatura de operación típica de 75 °C, la resistencia es un 21,6 % superior que a 20 °C.
- **Naturaleza del circuito (CC/CA)**: En corriente alterna se suma la reactancia inductiva, aunque en calibres inferiores al 2/0 AWG y a 60 Hz sus efectos suelen ser despreciables frente a la resistencia óhmica.
- **Número de conductores activos**: En un sistema monofásico de dos hilos, la caída ocurre en ambos conductores, por lo que la longitud efectiva es el doble de la distancia física.
- **Tipo de instalación**: Conductores en conduit o en ambientes con poca ventilación alcanzan mayores temperaturas, reduciendo la longitud máxima admisible para una misma caída de tensión.
- **Conexiones y empalmes**: Cada unión introduce una pequeña resistencia adicional que se acumula en circuitos con múltiples derivaciones.

## Cómo usar la tabla

1. Identifique la intensidad de corriente que circulará por el circuito (A).
2. Determine la distancia real (ida) entre la fuente de alimentación y la carga, en metros o pies.
3. Calcule la longitud total de cable necesaria multiplicando la distancia por 2, salvo que el retorno se realice a través de chasis metálico (en cuyo caso la longitud total equivale a la distancia física).
4. Busque en la tabla la columna de la corriente deseada; desplácese hacia abajo hasta encontrar el primer valor de longitud total que iguale o supere el calculado en el paso 3.
5. El calibre correspondiente a esa fila es el mínimo recomendado para no exceder la caída del 2 %.

Si el sistema opera a 24 V, las longitudes de la tabla se duplican; a 48 V, se cuadruplican. Si se admite una caída del 4 %, las longitudes también se duplican.

## Ejemplo práctico

Se desea alimentar una lámpara de 50 W en un sistema de 12 V CC, situada a 4 m de la batería, utilizando dos conductores de cobre (ida y retorno). La corriente demandada es:

> **I = P / U = 50 W / 12 V = 4,2 A**

La longitud total del cable (ida + retorno) será 4 m × 2 = 8 m. En la tabla, para una corriente de 5 A (valor inmediato superior disponible), se requiere un calibre 14 AWG para una longitud total de 8,9 m (superior a 8 m). Por tanto, un calibre 14 AWG es suficiente con un margen aceptable. Si se desea un margen mayor o se prevén futuras ampliaciones, puede elegirse un calibre 12 AWG, que admite hasta 14,1 m para 5 A.

Como verificación, aplicando la fórmula de caída de tensión con Rₘ para cobre a 75 °C de aproximadamente 8,45 Ω/km (14 AWG), la caída real será:

> **Vₚ = (2 × 4 m × 4,2 A × 8,45 Ω/km) / 1000 = 0,28 V**

Esto representa un 2,3 % del nominal, ligeramente por encima del 2 % recomendado, lo que confirma que para esta aplicación concreta un calibre 12 AWG ofrecería mejores prestaciones (Vₚ ≈ 0,17 V, equivalente al 1,4 %).

## Valores típicos por aplicación

| Aplicación | Corriente típica | Distancia típica (ida) | Calibre mínimo recomendado |
|---|---|---|---|
| Iluminación LED interior (12 V, 10 W) | 0,8 A | 3 m / 10 ft | 18 AWG |
| Iluminación LED exterior (12 V, 20 W) | 1,7 A | 5 m / 16 ft | 16 AWG |
| Bomba de agua para autocaravana (12 V, 50 W) | 4,2 A | 4 m / 13 ft | 12 AWG |
| Inversor pequeño (12 V, 300 W) | 25 A | 1,5 m / 5 ft | 8 AWG |
| Inversor mediano (12 V, 1000 W) | 83 A | 2 m / 6,6 ft | 2 AWG |
| Motor de cabestrante (12 V, 3000 W) | 250 A | 3 m / 10 ft | 2/0 AWG |
| Sistema solar aislado (48 V, 2000 W) | 41,7 A | 10 m / 33 ft | 6 AWG |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la fórmula exacta para calcular la caída de tensión en un cable de cobre?
La fórmula exacta para corriente continua es Vₚ = (2 × L × I × R) / 1000, donde L es la longitud de ida en metros, I la corriente en amperios y R la resistencia del conductor en ohmios por kilómetro. La longitud total del cable (ida y vuelta) duplica la distancia física, de ahí el factor 2. La resistencia R varía con la sección del conductor y la temperatura, siendo para cobre recocido a 20 °C igual a 17,241 Ω·mm²/km dividido entre la sección nominal del cable.

### ¿Cuántos metros de cable calibre 12 AWG puedo usar sin exceder el 2% de caída en 12 V?
En un circuito de dos hilos de cobre a 75 °C, un cable calibre 12 AWG admite una longitud total (ida y vuelta) de aproximadamente 23,5 m (77,2 ft) para 3 A, 14,1 m (46,3 ft) para 5 A y 7,1 m (23,2 ft) para 10 A manteniendo la caída por debajo del 2 % (0,24 V). La distancia entre fuente y carga será la mitad de esos valores.

### ¿Qué calibre AWG necesito para un inversor de 1000 W en 12 V con 2 m de cable?
Para una potencia de 1000 W en 12 V, la corriente nominal asciende a 83,3 A. Con 2 m de distancia (ida), la longitud total del cable será de 4 m (ida y vuelta). En la tabla, para 30 A se requiere al menos 4 AWG con una longitud máxima de 15,1 m; sin embargo, al no contar con una columna específica para 83 A, puede interpolarse que un calibre 2 AWG soporta 36 m por cada 20 A, lo que para 83 A da aproximadamente 8,7 m, y un calibre 1/0 AWG alcanza 13,8 m. Por tanto, el mínimo viable es 2 AWG, siendo recomendable 1/0 AWG para reducir pérdidas.

### ¿Influye la temperatura ambiente en la caída de tensión de un conductor?
La temperatura ambiente incide directamente en la resistencia del conductor. Un incremento de 30 °C sobre 20 °C eleva la resistencia del cobre en aproximadamente un 11,8 %, lo que reduce la longitud máxima admisible para una misma caída de tensión en la misma proporción. Las tablas normalizadas suelen emplear la resistencia a 75 °C, por lo que en ambientes muy cálidos debe aplicarse un factor de corrección adicional de 0,85 a 0,90.

### ¿Puedo duplicar la distancia si uso un sistema de 24 V en lugar de 12 V?
Al duplicar la tensión de alimentación de 12 V a 24 V manteniendo la misma potencia, la corriente se reduce a la mitad. Como la caída de tensión es proporcional a la corriente, con la misma sección de cable y la misma caída porcentual admisible, la longitud máxima se multiplica exactamente por dos. Por ello, para un mismo calibre y carga, un sistema a 24 V permite alcanzar el doble de distancia que uno a 12 V.

### ¿Cuál es la caída de tensión máxima permitida según la normativa eléctrica?
Los códigos eléctricos internacionales, como la NEC en Estados Unidos o la IEC 60364 en Europa, recomiendan que la caída de tensión acumulada desde el punto de suministro hasta la carga más alejada no supere el 3 % para circuitos de alumbrado y el 5 % para circuitos de fuerza, sumando ambos la caída máxima en el alimentador y en el circuito derivado. En instalaciones de baja tensión en corriente continua de 12 V, una caída del 2 % es una práctica habitual para proteger equipos sensibles.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/12-volt-wire-loss-chart-d_1689.html
- **southwire.com**: https://www.southwire.com/calculator-vdrop
