---
title: "Tabla de conversión AWG a mm²"
sidebar:
  label: "Tabla de conversión AWG a mm²"
description: "Ficha tecnica: Tabla de conversión AWG a mm²"
keywords: ["AWG mm2 wire gauge conversion table", "conductores-cables"]
category: "conductores-cables"
topic: "awg-system"
subcategory: "awg-mm2"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El American Wire Gauge (AWG) es el sistema normalizado estadounidense para denominar el calibre de conductores eléctricos. Su rasgo distintivo es que un número de AWG mayor indica un diámetro menor. La conversión entre AWG y milímetros cuadrados es indispensable en proyectos que integran componentes norteamericanos con entornos métricos, aunque no existe una equivalencia directa normalizada entre ambos sistemas.

## Fórmula de conversión AWG a diámetro

La definición del sistema AWG establece que 36 AWG equivale exactamente a 0,005 pulgadas de diámetro, mientras que 0000 AWG (4/0) equivale a 0,46 pulgadas. La escala comprende 40 calibres y 39 pasos entre 36 AWG y 0000 AWG, con una progresión geométrica de razón constante entre diámetros sucesivos.

El diámetro \( d_n \) (en milímetros) de un conductor AWG en función de su número de calibre \( n \) se calcula con la siguiente fórmula, aplicable para calibres desde 36 AWG hasta 0 AWG:

> **\( d_n = 0,127 \times 92^{(36-n)/39} \)**

Para calibres mayores que 0 AWG, \( n \) toma valores negativos: -1 para 00 AWG (2/0), -2 para 000 AWG (3/0) y -3 para 0000 AWG (4/0).

| Variable | Significado | Unidad |
| --- | --- | --- |
| \( d_n \) | Diámetro del conductor para el calibre n | mm |
| \( n \) | Número de calibre AWG (entero) | adimensional |

El área de la sección transversal circular \( A_n \) en mm² se obtiene a partir del diámetro calculado mediante la fórmula geométrica estándar:

> **\( A_n = \frac{\pi}{4} d_n^2 \)**

## Tabla de conversión AWG a milímetros cuadrados

La tabla presenta la correspondencia entre los calibres AWG normalizados, su diámetro en milímetros y pulgadas, y el área de la sección transversal nominal en milímetros cuadrados, que es el parámetro determinante para el cálculo de ampacidad y resistencia. La diferencia entre el diámetro de un conductor sólido y uno trenzado del mismo AWG radica en que el trenzado presenta un diámetro total ligeramente mayor debido a los espacios entre hilos, aunque su área conductora equivalente sea la misma.

| AWG | Diámetro | Área de sección transversal |
| --- | --- | --- |
| 0000 (4/0) | 11,68 mm / 0,460 in | 107 mm² |
| 000 (3/0) | 10,40 mm / 0,410 in | 85,0 mm² |
| 00 (2/0) | 9,27 mm / 0,365 in | 67,4 mm² |
| 0 (1/0) | 8,25 mm / 0,325 in | 53,5 mm² |
| 1 | 7,35 mm / 0,289 in | 42,4 mm² |
| 2 | 6,54 mm / 0,258 in | 33,6 mm² |
| 3 | 5,83 mm / 0,229 in | 26,7 mm² |
| 4 | 5,19 mm / 0,204 in | 21,2 mm² |
| 5 | 4,62 mm / 0,182 in | 16,8 mm² |
| 6 | 4,11 mm / 0,162 in | 13,3 mm² |
| 7 | 3,67 mm / 0,144 in | 10,6 mm² |
| 8 | 3,26 mm / 0,129 in | 8,37 mm² |
| 9 | 2,91 mm / 0,114 in | 6,63 mm² |
| 10 | 2,59 mm / 0,102 in | 5,26 mm² |
| 11 | 2,30 mm / 0,0907 in | 4,17 mm² |
| 12 | 2,05 mm / 0,0808 in | 3,31 mm² |
| 13 | 1,83 mm / 0,0720 in | 2,63 mm² |
| 14 | 1,63 mm / 0,0641 in | 2,08 mm² |
| 15 | 1,45 mm / 0,0571 in | 1,65 mm² |
| 16 | 1,29 mm / 0,0508 in | 1,31 mm² |
| 17 | 1,15 mm / 0,0453 in | 1,04 mm² |
| 18 | 1,02 mm / 0,0403 in | 0,823 mm² |
| 19 | 0,91 mm / 0,0359 in | 0,653 mm² |
| 20 | 0,81 mm / 0,0320 in | 0,518 mm² |
| 21 | 0,72 mm / 0,0285 in | 0,41 mm² |
| 22 | 0,65 mm / 0,0254 in | 0,33 mm² |
| 23 | 0,57 mm / 0,0226 in | 0,26 mm² |
| 24 | 0,51 mm / 0,0201 in | 0,20 mm² |
| 25 | 0,45 mm / 0,0179 in | 0,16 mm² |
| 26 | 0,40 mm / 0,0159 in | 0,13 mm² |

## Equivalencias prácticas AWG a métrico según UL 83

La norma UL 83 proporciona las correspondencias prácticas más cercanas entre AWG/kcmil y milímetros cuadrados, utilizadas para selección de espesores de aislamiento y chaqueta. Los valores de área para calibres hasta 4/0 AWG provienen de la tabla de áreas nominales normalizadas, mientras que para secciones mayores se emplean los kcmil con sus equivalencias métricas más próximas.

| AWG / kcmil | Área nominal mm² más cercana (UL 83) |
| --- | --- |
| 20 AWG | 0,519 mm² |
| 18 AWG | 0,823 mm² |
| 16 AWG | 1,31 mm² |
| 14 AWG | 2,08 mm² |
| 12 AWG | 3,31 mm² |
| 10 AWG | 5,26 mm² |
| 8 AWG | 8,37 mm² |
| 6 AWG | 13,3 mm² |
| 4 AWG | 21,2 mm² |
| 3 AWG | 26,7 mm² |
| 2 AWG | 33,6 mm² |
| 1 AWG | 42,4 mm² |
| 1/0 AWG | 53,5 mm² |
| 2/0 AWG | 67,4 mm² |
| 3/0 AWG | 85,0 mm² |
| 4/0 AWG | 107 mm² |
| 250 kcmil | 127 mm² |
| 300 kcmil | 152 mm² |
| 350 kcmil | 177 mm² |
| 400 kcmil | 203 mm² |
| 500 kcmil | 253 mm² |
| 600 kcmil | 304 mm² |
| 750 kcmil | 380 mm² |
| 1000 kcmil | 507 mm² |

## Preguntas frecuentes (FAQ)

### ¿Qué es el AWG y por qué es relevante convertirlo a mm²?

El AWG (American Wire Gauge) es un sistema logarítmico normalizado de calibres para conductores eléctricos redondos, no ferrosos, utilizado en Norteamérica desde 1857. Su conversión a mm² es relevante porque prácticamente todas las normativas internacionales de instalaciones eléctricas y los fabricantes de cable fuera de Norteamérica especifican la sección del conductor en milímetros cuadrados, de modo que la conversión es el paso obligado para dimensionar protecciones, calcular caídas de tensión y seleccionar terminales en proyectos que combinen equipos AWG con infraestructura métrica.

### ¿Cuál es la equivalencia exacta de 10 AWG en mm²?

El calibre 10 AWG equivale a un área de sección transversal de 5,26 mm² según la tabla normalizada ASTM B258. Comercialmente se asocia con 6 mm² cuando se usa la regla de equivalencia práctica más cercana de UL 83, aunque para fines de dimensionamiento eléctrico el valor exacto es el que rige los cálculos de resistencia y ampacidad.

### ¿Qué diferencias de diámetro hay entre conductor sólido y trenzado del mismo AWG?

El diámetro total de un conductor trenzado es siempre mayor que el de un conductor sólido del mismo AWG, debido a los intersticios o espacios vacíos entre los hilos individuales que componen el trenzado. Sin embargo, el AWG del conductor trenzado se determina por el área de la sección transversal del conductor sólido equivalente, por lo que la capacidad de corriente y la resistencia óhmica por unidad de longitud se mantienen iguales para ambos tipos de construcción bajo el mismo calibre.

### ¿Cómo se convierten calibres mayores que 4/0 AWG a mm²?

Los calibres mayores que 4/0 AWG se designan en miles de milipulgadas circulares (kcmil, antes MCM). Para convertir kcmil a mm² se utiliza el factor de conversión estándar: 1 kcmil equivale aproximadamente a 0,5067 mm². La tabla UL 83 establece correspondencias directas: 250 kcmil se asocia con 127 mm², 500 kcmil con 253 mm², y 1000 kcmil con 507 mm², entre otras.

### ¿Existe una relación exacta y biunívoca entre AWG y las secciones métricas IEC?

No, no existe una equivalencia directa ni normalizada entre el sistema AWG y el sistema métrico IEC 60228. La norma IEC 60228 define las secciones de conductor exclusivamente en milímetros cuadrados (0,5 mm², 0,75 mm², 1 mm², etc.) y no prescribe cables con conductores AWG o kcmil. Las equivalencias más utilizadas provienen de normas como UL 83, que establece los tamaños próximos más cercanos para fines de espesores de aislamiento, pero estos no implican intercambiabilidad directa desde el punto de vista de ampacidad según los códigos eléctricos norteamericanos.

### ¿Qué reglas prácticas simplifican la conversión entre AWG y mm² sin tablas?

Las reglas nemotécnicas fundamentales del sistema AWG son: una disminución de 3 números de calibre duplica aproximadamente el área de la sección transversal (y la conductancia), una disminución de 6 números duplica aproximadamente el diámetro, y una disminución de 10 números multiplica el área y la conductancia por un factor cercano a 10. Como referencia absoluta, 10 AWG corresponde a 5,26 mm²; a partir de ese ancla es posible estimar cualquier otro calibre aplicando las progresiones geométricas del sistema.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-cable/
- **southwire.com**: https://www.southwire.com/medias/2304-American-Wire-Gauge-PRINT.pdf?context=bWFzdGVyfHJvb3R8MjQyMTE2fGFwcGxpY2F0aW9uL3BkZnxoYjIvaGJjLzkyMjU2NjM3NDE5ODIvMjMwNF9BbWVyaWNhbl9XaXJlX0dhdWdlX1BSSU5ULnBkZnwxNTlkMGY2OWM2NTQzNDBhYmZiMzE5ZDFlYWRjNTRlMzhjMDU0NTljMjgxM2EyM2I4ZWRkZWFhMWI2NDJjZDRl
