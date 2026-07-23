---
title: "Cálculo vida útil L10 rodamientos"
sidebar:
  label: "Cálculo vida útil L10 rodamientos"
description: "Ficha tecnica: Cálculo vida útil L10 rodamientos"
keywords: ["bearing L10 life calculation dynamic load rating", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "l10-calculation"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Dimensiones normalizadas

La selección y cálculo de la vida L10 parte del conocimiento de las dimensiones principales del rodamiento. Las series métricas normalizadas según ISO 15 cubren los diámetros de eje desde 10 mm hasta más de 500 mm. La tabla siguiente recoge las dimensiones exteriores de rodamientos rígidos de bolas de las series 60, 62 y 63, utilizados como base para los ejemplos de cálculo.

| Designación ISO | Diámetro interior d | Diámetro exterior D | Ancho B |
| --- | --- | --- | --- |
| 6004 | 20 mm / 0.787 in | 42 mm / 1.654 in | 12 mm / 0.472 in |
| 6204 | 20 mm / 0.787 in | 47 mm / 1.850 in | 14 mm / 0.551 in |
| 6304 | 20 mm / 0.787 in | 52 mm / 2.047 in | 15 mm / 0.591 in |
| 6005 | 25 mm / 0.984 in | 47 mm / 1.850 in | 12 mm / 0.472 in |
| 6205 | 25 mm / 0.984 in | 52 mm / 2.047 in | 15 mm / 0.591 in |
| 6305 | 25 mm / 0.984 in | 62 mm / 2.441 in | 17 mm / 0.669 in |
| 6006 | 30 mm / 1.181 in | 55 mm / 2.165 in | 13 mm / 0.512 in |
| 6206 | 30 mm / 1.181 in | 62 mm / 2.441 in | 16 mm / 0.630 in |
| 6306 | 30 mm / 1.181 in | 72 mm / 2.835 in | 19 mm / 0.748 in |

## Capacidad de carga

La capacidad de carga dinámica C indica la carga radial constante que un rodamiento de bolas puede soportar durante una vida nominal de 1 millón de revoluciones. Los valores de C y de la capacidad de carga estática C0 se extraen de las tablas de cada fabricante y son el punto de partida del cálculo L10.

| Designación ISO | Capacidad dinámica C | Capacidad estática C0 |
| --- | --- | --- |
| 6004 | 9,36 kN / 2104 lbf | 5,07 kN / 1140 lbf |
| 6204 | 12,8 kN / 2877 lbf | 6,65 kN / 1495 lbf |
| 6304 | 15,9 kN / 3574 lbf | 7,9 kN / 1776 lbf |
| 6005 | 10,0 kN / 2248 lbf | 5,85 kN / 1315 lbf |
| 6205 | 14,0 kN / 3147 lbf | 7,8 kN / 1753 lbf |
| 6305 | 21,2 kN / 4765 lbf | 10,8 kN / 2428 lbf |
| 6006 | 12,5 kN / 2810 lbf | 7,35 kN / 1652 lbf |
| 6206 | 19,0 kN / 4271 lbf | 10,0 kN / 2248 lbf |
| 6306 | 27,0 kN / 6068 lbf | 14,6 kN / 3282 lbf |

## Criterios de selección

La vida nominal L10 se calcula mediante la ecuación de Lundberg-Palmgren:

```
L10 = (C/P)^p   [millones de revoluciones]
L10h = (10^6 / (60 n)) * (C/P)^p   [horas]
```

donde:
- C = capacidad de carga dinámica del rodamiento [kN]
- P = carga dinámica equivalente [kN]
- p = exponente de vida (3 para bolas, 10/3 para rodillos)
- n = velocidad de giro [rpm]

Para cargas combinadas radiales (Fr) y axiales (Fa), la carga equivalente se obtiene con:

```
P = X·Fr + Y·Fa
```

Los factores X e Y dependen de la relación Fa/Fr y del juego interno; para montajes típicos con Fa/Fr ≤ e se toma X=1, Y=0 en rodamientos de bolas.

El valor L10h recomendado para cada aplicación orienta la selección final. La tabla siguiente resume las vidas requeridas en función del tipo de máquina.

## Tablas de selección por aplicación

| Aplicación | Vida L10h recomendada [horas] |
| --- | --- |
| Electrodomésticos, herramientas portátiles | 2.000 – 8.000 |
| Ventiladores, motores eléctricos pequeños | 8.000 – 15.000 |
| Máquinas herramientas, compresores | 20.000 – 30.000 |
| Bombas centrífugas, transportadores | 30.000 – 50.000 |
| Reductoras industriales, grúas | 50.000 – 100.000 |
| Grandes ventiladores, equipos mineros | > 100.000 |

Estos intervalos permiten al ingeniero acotar la búsqueda; se puede afinar con análisis de fiabilidad L5 o L1 cuando se requiera mayor seguridad.

## Consideraciones de montaje

1. El ajuste del aro interior al eje debe ser de interferencia si el aro gira respecto a la carga; un ajuste flojo produce deslizamiento y reduce la vida real hasta 5 veces.
2. La holgura radial interna aumenta la capacidad de carga axial pero puede generar vibraciones; en aplicaciones de precisión se selecciona una clase de juego C2, CN o C3 según las dilataciones térmicas.
3. El desalineamiento entre ejes y alojamientos nunca debe superar 0.0015 rad (1.5 mrad / 0.086°) en rodamientos rígidos de bolas, so pena de reducir la vida L10 a la mitad.
4. La temperatura de trabajo superior a 120 °C / 248 °F obliga a aplicar un factor de reducción de C que los fabricantes publican en sus catálogos.
5. El montaje en caliente mediante expansión térmica (calentamiento a 110 °C / 230 °F) facilita la instalación sin dañar los caminos de rodadura y preserva la vida nominal de catálogo.

## Preguntas frecuentes

**¿Qué significa exactamente L10?**  
L10 es la vida nominal en millones de revoluciones que alcanza el 90% de un grupo de rodamientos idénticos trabajando bajo la misma carga. Se corresponde con una fiabilidad del 90% y es la base del dimensionado estándar.

**¿Cuál es el exponente de vida para rodamientos de rodillos cónicos?**  
El exponente p vale 10/3, equivalente a 3,33, lo que refleja la mayor sensibilidad de los rodamientos de rodillos a la carga. Así, un aumento del 10% en la carga reduce la vida L10 aproximadamente un 27% en este tipo de rodamientos.

**¿Cómo se convierte la vida de millones de revoluciones a horas?**  
Se divide el valor en millones de revoluciones por la velocidad de giro en rpm y por 60: L10h = L10 × 10⁶ / (60 n). Por ejemplo, un rodamiento con L10 = 500 millones de revoluciones girando a 1500 rpm tendrá una vida de 5.556 horas.

**¿Qué carga usar en el cálculo si existen fuerzas radiales y axiales simultáneas?**  
Se calcula la carga dinámica equivalente P = X·Fr + Y·Fa. Para rodamientos rígidos de bolas con Fa/Fr ≤ 0,25, X=1 e Y=0; en caso contrario X=0,56 e Y vale entre 1 y 2 según el catálogo del fabricante.

**¿Qué ocurre si la carga aplicada P supera la capacidad estática C0?**  
No se debe calcular vida L10 porque el rodamiento se encuentra en régimen de deformación plástica permanente; en esas condiciones la vida puede ser inferior a 100 revoluciones. La seguridad estática exige P0 ≤ C0/S0 con S0 ≥ 2 en general.

**¿Qué vida L10h se recomienda para un motor eléctrico de 50 HP?**  
Un motor eléctrico industrial de esa potencia opera típicamente entre 1.500 y 3.000 rpm, y la vida recomendada se sitúa entre 20.000 y 30.000 horas. Un valor de diseño seguro es elegir un rodamiento que proporcione al menos 25.000 horas L10h.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/w-steel-beam-uniform-load-d_1722.html
- **mcmaster.com**: https://www.mcmaster.com/products/bearings/
