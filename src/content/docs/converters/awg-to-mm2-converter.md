---
title: "Conversor AWG a mm²"
sidebar:
  label: "Conversor AWG a mm²"
description: "Ficha tecnica: Conversor AWG a mm²"
keywords: ["AWG mm2 wire size converter table", "converters"]
category: "converters"
topic: "wire-units"
subcategory: "awg-to-mm2-converter"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El conversor AWG a mm² permite transformar la nomenclatura de calibre estadounidense (American Wire Gauge) en el área de sección transversal expresada en milímetros cuadrados. La conversión es indispensable para dimensionar conductores eléctricos, calcular capacidad de corriente, resistencia y peso cuando se cruzan especificaciones de origen norteamericano con sistemas métricos internacionales.

## Fórmula de conversión

La relación entre el número AWG (n) y el diámetro nominal de un conductor sólido de cobre se define de forma logarítmica según la norma ASTM B258. La expresión general es:

> **dₙ = 0,127 mm × 92^((36 − n) / 39)**

El área de la sección circular se obtiene con:

> **Aₙ = (π / 4) × dₙ²**

| Variable | Significado | Unidad |
| --- | --- | --- |
| n | Número de calibre AWG (adimensional) | — |
| dₙ | Diámetro nominal del conductor sólido | mm |
| Aₙ | Área de sección transversal calculada | mm² |

Para calibres mayores que 0 AWG (denotados como 00, 000, 0000) se asigna n = −1, −2, −3 respectivamente. La fórmula para obtener el calibre desde un diámetro conocido es:

> **n = −39 × log₉₂(dₙ / 0,127 mm) + 36**

## Tabla de conversión AWG a mm²

Los valores de diámetro y área que se muestran corresponden a hilo sólido de cobre recocido según la especificación AWG. En conductor trenzado, el diámetro exterior es ligeramente mayor, aunque la sección equivalente es la misma.

| AWG | Diámetro (in / mm) | Área de sección (mm² / in²) |
| --- | --- | --- |
| 0000 (4/0) | 0.460 in / 11,7 mm | 107 mm² / 0.166 in² |
| 000 (3/0) | 0.410 in / 10,4 mm | 85,0 mm² / 0.132 in² |
| 00 (2/0) | 0.365 in / 9,27 mm | 67,4 mm² / 0.104 in² |
| 0 (1/0) | 0.325 in / 8,25 mm | 53,5 mm² / 0.0829 in² |
| 1 | 0.289 in / 7,35 mm | 42,4 mm² / 0.0657 in² |
| 2 | 0.258 in / 6,54 mm | 33,6 mm² / 0.0521 in² |
| 3 | 0.229 in / 5,83 mm | 26,7 mm² / 0.0414 in² |
| 4 | 0.204 in / 5,19 mm | 21,1 mm² / 0.0327 in² |
| 5 | 0.182 in / 4,62 mm | 16,8 mm² / 0.0260 in² |
| 6 | 0.162 in / 4,11 mm | 13,3 mm² / 0.0206 in² |
| 7 | 0.144 in / 3,67 mm | 10,6 mm² / 0.0164 in² |
| 8 | 0.129 in / 3,26 mm | 8,36 mm² / 0.0130 in² |
| 9 | 0.114 in / 2,91 mm | 6,63 mm² / 0.0103 in² |
| 10 | 0.102 in / 2,59 mm | 5,26 mm² / 0.00815 in² |
| 11 | 0.0907 in / 2,30 mm | 4,17 mm² / 0.00646 in² |
| 12 | 0.0808 in / 2,05 mm | 3,31 mm² / 0.00513 in² |
| 13 | 0.0720 in / 1,83 mm | 2,63 mm² / 0.00408 in² |
| 14 | 0.0641 in / 1,63 mm | 2,08 mm² / 0.00322 in² |
| 15 | 0.0571 in / 1,45 mm | 1,65 mm² / 0.00256 in² |
| 16 | 0.0508 in / 1,29 mm | 1,31 mm² / 0.00203 in² |
| 17 | 0.0453 in / 1,15 mm | 1,04 mm² / 0.00161 in² |
| 18 | 0.0403 in / 1,02 mm | 0,82 mm² / 0.00127 in² |
| 19 | 0.0359 in / 0,91 mm | 0,65 mm² / 0.00101 in² |
| 20 | 0.0320 in / 0,81 mm | 0,52 mm² / 0.000806 in² |
| 21 | 0.0285 in / 0,72 mm | 0,41 mm² / 0.000635 in² |
| 22 | 0.0254 in / 0,65 mm | 0,33 mm² / 0.000512 in² |
| 23 | 0.0226 in / 0,57 mm | 0,26 mm² / 0.000403 in² |
| 24 | 0.0201 in / 0,51 mm | 0,20 mm² / 0.000310 in² |
| 25 | 0.0179 in / 0,45 mm | 0,16 mm² / 0.000248 in² |
| 26 | 0.0159 in / 0,40 mm | 0,13 mm² / 0.000202 in² |

## Cómo convertir AWG a mm² paso a paso

1. Identifique el número AWG (n) del conductor. Para calibres múltiples de cero use n = −1 (00), −2 (000) o −3 (0000).
2. Aplique la fórmula del diámetro: **dₙ = 0,127 mm × 92^((36 − n) / 39)**.
3. Obtenga el área con **Aₙ = (π / 4) × dₙ²**.
4. Si desea el resultado en pulgadas cuadradas, multiplique el valor en mm² por 0.001550.
5. Redondee el área a dos o tres cifras significativas según la precisión requerida en el proyecto.

Ejemplo para calibre 12 AWG (n = 12):  
d = 0,127 × 92^((36 − 12) / 39) = 0,127 × 92^(24/39) ≈ 2,05 mm  
A = (π / 4) × (2,05)² ≈ 3,31 mm²

## Equivalencias comunes

| AWG | mm² aproximado | Uso típico |
| --- | --- | --- |
| 10 | 5,26 | Circuitos de 30 A en instalaciones residenciales (EE. UU.) |
| 12 | 3,31 | Tomas de corriente y alumbrado en vivienda (20 A) |
| 14 | 2,08 | Circuitos de iluminación de 15 A |
| 16 | 1,31 | Extensiones y cableado de control |
| 18 | 0,82 | Electrónica, cables de señal |
| 20 | 0,52 | Sensores, cableado interno de equipos |
| 22 | 0,33 | Datos y telecomunicaciones (teléfono) |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre AWG y mm²?

AWG (American Wire Gauge) es una escala logarítmica que indica el calibre con un número adimensional, mientras que mm² es una unidad métrica de área que expresa directamente la sección transversal del conductor. En AWG, un número mayor corresponde a un conductor más delgado y menor área; en mm² la relación es directa.

### ¿Cómo se convierte 4/0 AWG a mm²?

El calibre 4/0 AWG equivale a 0000 AWG (cuatro ceros). Usando n = −3 en la fórmula se obtiene un diámetro de 11,7 mm y un área de sección transversal de 107 mm². Es el mayor calibre normalizado en la tabla AWG y se emplea en alimentadores de alta corriente.

### ¿El calibre AWG afecta la capacidad de corriente?

Sí. La capacidad de corriente (ampacidad) depende directamente del área de sección. Convertir AWG a mm² permite dimensionar el conductor en unidades métricas utilizando las tablas de ampacidad normalizadas (IEC, NEC). Un aumento de tres números AWG hacia abajo (ej. de 13 a 10) duplica aproximadamente el área.

### ¿Se puede usar la misma conversión para cable trenzado?

Sí. En el sistema AWG, el cable trenzado se identifica por el área equivalente de un conductor sólido. Por tanto, la conversión a mm² es la misma y la tabla mostrada es válida. El diámetro exterior del cable trenzado será mayor que el nominal, pero el área de cobre efectiva es la indicada.

### ¿Por qué un número AWG más alto indica menor área?

La escala AWG se originó en el número de pasos de trefilado necesarios para reducir el diámetro del alambre. Un número de calibre más alto implica más pasos de estirado, lo que produce un conductor más delgado. No es una medida directa de área, por eso se requiere la conversión a mm² para cálculos eléctricos.

### ¿Existe una tabla rápida de equivalencia entre AWG y mm²?

Sí, la tabla de conversión de esta página muestra las equivalencias normalizadas desde 0000 AWG hasta 26 AWG. Para trabajos cotidianos, las equivalencias más utilizadas son: 10 AWG ≈ 5,26 mm², 12 AWG ≈ 3,31 mm², 14 AWG ≈ 2,08 mm² y 16 AWG ≈ 1,31 mm².

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **convertworld.com**: https://www.convertworld.com/en/
