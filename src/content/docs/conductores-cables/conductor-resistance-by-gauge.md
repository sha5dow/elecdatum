---
title: "Resistencia eléctrica de conductores por calibre"
sidebar:
  label: "Resistencia eléctrica de conductores por calibre"
description: "Ficha tecnica: Resistencia eléctrica de conductores por calibre"
keywords: ["conductor resistance table ohms per meter gauge", "conductores-cables"]
category: "conductores-cables"
topic: "conductor-materials"
subcategory: "conductor-resistance"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La resistencia eléctrica de un conductor metálico depende de su material, longitud, sección transversal y temperatura de operación. Para el cobre recocido estándar, la resistividad eléctrica a 20 °C es de 1,724 × 10⁻⁸ Ω·m, valor de referencia que permite calcular la resistencia de cualquier conductor conociendo su geometría. En conductores eléctricos, a mayor calibre AWG (número más bajo), menor resistencia por unidad de longitud.

## Resistencia eléctrica en conductores de cobre por calibre AWG

La tabla presenta la resistencia eléctrica nominal para conductores de cobre recocido de sección circular sólida según el sistema American Wire Gauge (AWG). Los valores corresponden a corriente continua (DC) y temperatura de referencia de 25 °C / 77 °F. Para trabajos de precisión deben considerarse tolerancias de fabricación y el incremento de resistencia con la temperatura.

| Calibre AWG | Diámetro mm / in | Área mm² / MCM | Resistencia a 25 °C Ω/km / Ω/1000 ft | Resistencia a 65 °C Ω/km / Ω/1000 ft |
| :--- | :--- | :--- | :--- | :--- |
| 4/0 (0000) | 11,68 / 0,460 | 107,2 / 212,0 | 0,164 / 0,0500 | 0,187 / 0,057 |
| 3/0 (000) | 10,41 / 0,410 | 85,0 / 168,0 | 0,207 / 0,0630 | 0,239 / 0,073 |
| 2/0 (00) | 9,27 / 0,365 | 67,4 / 133,0 | 0,261 / 0,0795 | 0,302 / 0,092 |
| 1/0 (0) | 8,26 / 0,325 | 53,5 / 106,0 | 0,328 / 0,100 | 0,380 / 0,116 |
| 1 | 7,35 / 0,289 | 42,4 / 83,7 | 0,414 / 0,126 | 0,479 / 0,146 |
| 2 | 6,54 / 0,258 | 33,6 / 66,4 | 0,522 / 0,159 | 0,604 / 0,184 |
| 3 | 5,83 / 0,229 | 26,7 / 52,6 | 0,660 / 0,201 | 0,761 / 0,232 |
| 4 | 5,19 / 0,204 | 21,2 / 41,7 | 0,831 / 0,253 | 0,958 / 0,292 |
| 5 | 4,62 / 0,182 | 16,8 / 33,1 | 1,047 / 0,319 | − |
| 6 | 4,12 / 0,162 | 13,3 / 26,3 | 1,323 / 0,403 | 1,526 / 0,465 |
| 8 | 3,26 / 0,128 | 8,37 / 16,5 | 2,104 / 0,641 | 2,425 / 0,739 |
| 10 | 2,59 / 0,102 | 5,27 / 10,4 | 3,348 / 1,02 | 3,871 / 1,18 |
| 12 | 2,05 / 0,081 | 3,31 / 6,53 | 5,316 / 1,62 | 6,136 / 1,87 |
| 14 | 1,63 / 0,064 | 2,08 / 4,11 | 8,467 / 2,58 | 9,747 / 2,97 |
| 16 | 1,29 / 0,051 | 1,31 / 2,58 | 13,42 / 4,09 | 15,52 / 4,73 |
| 18 | 1,02 / 0,040 | 0,823 / 1,62 | 21,37 / 6,51 | 24,65 / 7,51 |
| 20 | 0,812 / 0,032 | 0,518 / 1,02 | 34,12 / 10,4 | 39,06 / 11,9 |
| 24 | 0,511 / 0,0201 | 0,205 / 0,404 | 85,96 / 26,2 | 99,15 / 30,2 |
| 28 | 0,321 / 0,0126 | 0,0811 / 0,160 | 217,2 / 66,2 | 250,7 / 76,4 |
| 32 | 0,202 / 0,0080 | 0,0320 / 0,0632 | 548,2 / 167 | 633,2 / 193 |

El diámetro y área corresponden a conductor sólido de cobre recocido. La resistencia a 65 °C es relevante para condiciones de carga donde el conductor opera a temperatura elevada; se proporciona para los calibres más comunes según datos disponibles. Para conductor trenzado de cobre, la resistencia típica es entre 1 % y 3 % mayor debido al incremento de longitud efectiva por el paso del trenzado.

## Factores que modifican la resistencia eléctrica

La resistencia de un conductor no es un valor fijo sino que varía principalmente con dos factores operativos:

- **Temperatura del conductor:** la resistencia aumenta al incrementarse la temperatura. Para el cobre, el coeficiente de variación es aproximadamente 0,393 % por grado Celsius (0,218 % por grado Fahrenheit) respecto al valor a 20 °C. El valor R₂ a la temperatura T₂ se estima como R₂ = R₁ × (234,5 + T₂) / (234,5 + T₁), con T en °C. Así, un conductor que mide 1,00 Ω a 25 °C pasará a medir aproximadamente 1,15 Ω a 65 °C.
- **Longitud del conductor:** la resistencia es directamente proporcional a la longitud. Al duplicar la distancia del tendido eléctrico, la resistencia total del circuito se duplica, lo que repercute en la caída de tensión.

## Fórmula fundamental

La resistencia eléctrica R de un conductor homogéneo de sección constante se calcula mediante la ley de Pouillet:

> **R = ρ × (L / A)**

| Variable | Símbolo | Unidad SI | Unidad imperial |
| :--- | :--- | :--- | :--- |
| Resistencia eléctrica | R | Ohm (Ω) | Ohm (Ω) |
| Resistividad del material | ρ | Ohm-metro (Ω·m) | Ohm-pie (Ω·ft) |
| Longitud del conductor | L | Metro (m) | Pie (ft) |
| Área de sección transversal | A | Metro cuadrado (m²) | Circular mil (CM) |

Para un conductor de cobre con resistividad 1,724 × 10⁻⁸ Ω·m, la misma expresión proporciona la resistencia por unidad de longitud si se fija L = 1 m y se introduce la sección real del calibre seleccionado.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la resistencia típica de un conductor de cobre calibre 12 AWG?
El conductor de cobre calibre 12 AWG tiene una resistencia a 25 °C de 5,316 Ω/km o 1,62 Ω/1000 ft, valor que sube a 6,136 Ω/km o 1,87 Ω/1000 ft cuando el conductor alcanza 65 °C por efecto de la carga.

### ¿Cómo afecta la temperatura al valor de resistencia de un conductor de cobre?
La resistencia del cobre aumenta aproximadamente 0,393 % por cada grado Celsius de incremento sobre 20 °C; esto significa que un conductor con 1,00 Ω a 25 °C presentará cerca de 1,15 Ω a 65 °C, lo cual debe considerarse en el dimensionamiento de circuitos.

### ¿Qué diferencia de resistencia existe entre cobre y aluminio para un mismo calibre AWG?
Para dimensiones geométricas idénticas, el aluminio presenta una resistencia aproximadamente 1,6 veces mayor que el cobre debido a que su resistividad (2,65 × 10⁻⁸ Ω·m) es superior a la del cobre (1,724 × 10⁻⁸ Ω·m), razón por la cual se requieren calibres mayores en aluminio para igualar la conductancia de un circuito de cobre.

### ¿Por qué la resistencia en corriente alterna es mayor que en corriente continua?
En corriente alterna, el efecto pelicular (skin effect) desplaza la densidad de corriente hacia la periferia del conductor, reduciendo el área efectiva de conducción e incrementando la resistencia efectiva; a 60 Hz, este incremento es inferior al 3 % para calibres hasta 2/0 AWG, pero se vuelve significativo en conductores de gran sección.

### ¿Cuál es la resistencia de un conductor de cobre calibre 18 AWG en un tramo de 100 metros?
La resistencia de un conductor de cobre calibre 18 AWG a 25 °C es de 21,37 Ω/km, por lo que un tramo de 100 m presentará una resistencia de 2,14 Ω; en corriente alterna y con temperatura de operación elevada este valor puede superar los 2,50 Ω.

### ¿Qué significa el área en circular mils y cómo se relaciona con mm²?
El circular mil (CM) es una unidad de área usada en EE. UU. que representa el área de un círculo de 1 mil (0,001 in) de diámetro; un circular mil equivale a 5,067 × 10⁻⁴ mm², y el área en mm² puede obtenerse dividiendo el valor en circular mils entre 1973,5.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/copper-wire-d_1429.html
- **southwire.com**: https://www.southwire.com/medias/Genesis-Conductor-Sizing-Reference-Guide.pdf?context=bWFzdGVyfHJvb3R8NDA2MjM2fGFwcGxpY2F0aW9uL3BkZnxoZWMvaDdhLzg5MTA4MDk3NTk3NzQucGRmfDU5MGMwYThmMjExNTczOTFiMTYwNTU5YjgwZGUyMDcxNzQ5Y2ExZDk2YWFjMmE1MjdmNWQxYTBiMTRiMDQ3Njk
