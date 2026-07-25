---
title: "Diámetro de conductores AWG en mm"
sidebar:
  label: "Diámetro de conductores AWG en mm"
description: "Ficha tecnica: Diámetro de conductores AWG en mm"
keywords: ["AWG wire diameter mm table", "conductores-cables"]
category: "conductores-cables"
topic: "awg-system"
subcategory: "awg-mm-diameter"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El American Wire Gauge (AWG) es un sistema estandarizado de calibración de conductores eléctricos, de carácter logarítmico, empleado principalmente en Norteamérica desde 1857. La norma ASTM B-258 define los diámetros nominales de los conductores redondos sólidos. A mayor número de calibre, menor diámetro del hilo: un cable 24 AWG tiene un diámetro de 0,51 mm / 0.0201 in, mientras que un 10 AWG alcanza 2,59 mm / 0.102 in. La siguiente tabla recoge los diámetros y las secciones transversales para los calibres más usados.

## Tabla de conversión AWG a milímetros

| Calibre AWG | Diámetro (mm / in) | Sección transversal (mm² / in²) |
| --- | --- | --- |
| 0000 (4/0) | 11,7 mm / 0.460 in | 107 mm² / 0.166 in² |
| 000 (3/0) | 10,4 mm / 0.410 in | 85,0 mm² / 0.132 in² |
| 00 (2/0) | 9,27 mm / 0.365 in | 67,4 mm² / 0.105 in² |
| 0 (1/0) | 8,25 mm / 0.325 in | 53,5 mm² / 0.083 in² |
| 1 | 7,35 mm / 0.289 in | 42,4 mm² / 0.066 in² |
| 2 | 6,54 mm / 0.258 in | 33,6 mm² / 0.052 in² |
| 3 | 5,83 mm / 0.229 in | 26,7 mm² / 0.041 in² |
| 4 | 5,19 mm / 0.204 in | 21,1 mm² / 0.033 in² |
| 5 | 4,62 mm / 0.182 in | 16,8 mm² / 0.026 in² |
| 6 | 4,11 mm / 0.162 in | 13,3 mm² / 0.021 in² |
| 7 | 3,67 mm / 0.144 in | 10,6 mm² / 0.016 in² |
| 8 | 3,26 mm / 0.129 in | 8,36 mm² / 0.0130 in² |
| 9 | 2,91 mm / 0.114 in | 6,63 mm² / 0.0103 in² |
| 10 | 2,59 mm / 0.102 in | 5,26 mm² / 0.00816 in² |
| 11 | 2,30 mm / 0.0907 in | 4,17 mm² / 0.00646 in² |
| 12 | 2,05 mm / 0.0808 in | 3,31 mm² / 0.00513 in² |
| 13 | 1,83 mm / 0.0720 in | 2,63 mm² / 0.00407 in² |
| 14 | 1,63 mm / 0.0641 in | 2,08 mm² / 0.00323 in² |
| 15 | 1,45 mm / 0.0571 in | 1,65 mm² / 0.00256 in² |
| 16 | 1,29 mm / 0.0508 in | 1,31 mm² / 0.00203 in² |
| 17 | 1,15 mm / 0.0453 in | 1,04 mm² / 0.00161 in² |
| 18 | 1,02 mm / 0.0403 in | 0,82 mm² / 0.00127 in² |
| 19 | 0,91 mm / 0.0359 in | 0,65 mm² / 0.00101 in² |
| 20 | 0,81 mm / 0.0320 in | 0,52 mm² / 0.00080 in² |
| 21 | 0,72 mm / 0.0285 in | 0,41 mm² / 0.00064 in² |
| 22 | 0,65 mm / 0.0254 in | 0,33 mm² / 0.00051 in² |
| 23 | 0,57 mm / 0.0226 in | 0,26 mm² / 0.00040 in² |
| 24 | 0,51 mm / 0.0201 in | 0,20 mm² / 0.00031 in² |
| 25 | 0,45 mm / 0.0179 in | 0,16 mm² / 0.00025 in² |
| 26 | 0,40 mm / 0.0159 in | 0,13 mm² / 0.00020 in² |

Nota: el diámetro de un conductor trenzado con el mismo AWG es mayor que el de un conductor sólido debido a los espacios entre los hilos.

## Fórmula de cálculo del diámetro AWG

El diámetro nominal de un conductor sólido redondo se calcula mediante una progresión geométrica basada en el número de calibre. Para un calibre AWG n (donde n va de 36 a 0, y n = -1 para 00, n = -2 para 000, n = -3 para 0000), el diámetro en milímetros y en pulgadas es:

> **dₙ = 0,127 mm × 92^((36-n)/39) = 0,005 pulg × 92^((36-n)/39)**

Equivale a la expresión exponencial:

> **dₙ = e^(2,1104 – 0,11594 n) mm**

Donde:
- **n**: número AWG (36 a 0; valores negativos para calibres mayores que 0).
- **dₙ**: diámetro del conductor sólido (mm o pulg).
- La relación entre calibres sucesivos es 92^(1/39) ≈ 1,1229.

## Relación entre AWG y sección transversal

La sección transversal se deriva directamente del diámetro. Para un conductor redondo, el área Aₙ es:

> **Aₙ = (π/4) dₙ² ≈ 0,012668 mm² × 92^((36-n)/19,5)**

El sistema AWG es logarítmico, lo que implica reglas prácticas de escalado:

- Una reducción de 3 números AWG duplica aproximadamente la sección transversal y la conductancia (por ejemplo, dos cables 14 AWG equivalen a un 11 AWG en área).
- Una reducción de 6 números AWG duplica el diámetro y cuadruplica la sección transversal (por ejemplo, 1 mm ≈ 18 AWG, 2 mm ≈ 12 AWG, 4 mm ≈ 6 AWG).
- Una reducción de 10 números AWG multiplica por ~10 el área, el peso y la conductancia.

A modo ilustrativo, la tabla siguiente muestra cómo varían el diámetro y el área en pasos de 6 calibres:

| Calibre AWG | Diámetro (mm / in) | Sección transversal (mm² / in²) |
| --- | --- | --- |
| 10 | 2,59 mm / 0.102 in | 5,26 mm² / 0.00816 in² |
| 16 | 1,29 mm / 0.0508 in | 1,31 mm² / 0.00203 in² |
| 4 | 5,19 mm / 0.204 in | 21,1 mm² / 0.033 in² |

## Preguntas frecuentes (FAQ)

### ¿Cómo convierto un calibre AWG a milímetros?
Utilice la fórmula estándar dₙ(mm) = 0,127 × 92^((36-n)/39), donde n es el número AWG. Para calibres más gruesos que 0, n toma valores negativos: -1 para 00, -2 para 000 y -3 para 0000. La tabla de conversión de este artículo proporciona los valores ya calculados.

### ¿Cuál es el diámetro en mm de los calibres más grandes como 4/0 AWG?
El calibre 0000 AWG (4/0) tiene un diámetro de 11,7 mm / 0.460 in. El 000 AWG (3/0) mide 10,4 mm / 0.410 in y el 00 AWG (2/0) 9,27 mm / 0.365 in.

### ¿Por qué el diámetro de un cable trenzado del mismo AWG es mayor que el de un cable sólido?
Porque el AWG de un cable trenzado se define por la sección transversal equivalente del conductor sólido. Al existir pequeños espacios entre los alambres que forman el trenzado, el diámetro exterior resulta siempre mayor que el del conductor sólido del mismo calibre.

### ¿Cuál es la diferencia entre AWG y la sección transversal en mm²?
El AWG indica un número de calibre basado en el diámetro del conductor, mientras que la sección en mm² describe directamente el área del material conductor. La relación entre ambos es logarítmica: a menor número AWG, mayor diámetro y, por tanto, mayor sección transversal.

### ¿Cada cuántos números AWG se duplica el diámetro o la sección transversal?
Aproximadamente cada 6 números AWG se duplica el diámetro del conductor (y se cuadruplica la sección). Cada 3 números AWG se duplica la sección transversal. Así, al pasar de 16 AWG (1,29 mm, 1,31 mm²) a 10 AWG (2,59 mm, 5,26 mm²) se reduce 6 calibres y se duplica el diámetro.

### ¿Dónde se utiliza principalmente el sistema AWG?
El sistema AWG se emplea de forma predominante en Norteamérica (Estados Unidos, Canadá y México) para designar el calibre de conductores eléctricos de cobre y aluminio. En el resto del mundo predomina el sistema métrico basado en la sección transversal en mm² según la norma IEC 60228.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-cable/
- **southwire.com**: https://www.southwire.com/medias/2304-American-Wire-Gauge-PRINT.pdf?context=bWFzdGVyfHJvb3R8MjQyMTE2fGFwcGxpY2F0aW9uL3BkZnxoYjIvaGJjLzkyMjU2NjM3NDE5ODIvMjMwNF9BbWVyaWNhbl9XaXJlX0dhdWdlX1BSSU5ULnBkZnwxNTlkMGY2OWM2NTQzNDBhYmZiMzE5ZDFlYWRjNTRlMzhjMDU0NTljMjgxM2EyM2I4ZWRkZWFhMWI2NDJjZDRl
