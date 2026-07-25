---
title: "Conversión resistividad a conductividad IACS"
sidebar:
  label: "Conversión resistividad a conductividad IACS"
description: "Ficha tecnica: Conversión resistividad a conductividad IACS"
keywords: ["resistivity conductivity IACS conversion table", "converters"]
category: "converters"
topic: "resistance-units"
subcategory: "resistivity-conductivity-iacs-conversion"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La conversión entre resistividad eléctrica y conductividad IACS es esencial para especificar y comparar materiales conductores. El estándar IACS (International Annealed Copper Standard) establece que el cobre recocido internacionalmente posee una conductividad eléctrica de 58,0 × 10⁶ S/m a 20 °C, valor que se define como 100 % IACS. La resistividad es el recíproco de la conductividad, por lo que a partir de la resistividad medida en ohm‑metro (Ω·m) puede obtenerse el porcentaje IACS, y viceversa. Esta página presenta la fórmula de conversión, una tabla de referencia y un ejemplo práctico para facilitar el cálculo.

## Fórmula de conversión

> **%IACS = (σ / σ<sub>IACS</sub>) × 100 %**
> **σ = 1 / ρ**

donde σ<sub>IACS</sub> = 58,0 × 10⁶ S/m es la conductividad eléctrica del cobre patrón IACS.

| Variable | Descripción | Unidad |
| --- | --- | --- |
| %IACS | Conductividad expresada como porcentaje del estándar IACS | % |
| σ | Conductividad eléctrica del material | S/m (o S/cm, μS/cm) |
| ρ | Resistividad eléctrica del material | Ω·m (o Ω·cm, Ω·mm²/m, Ω·CM/ft) |

Combinando ambas expresiones se obtiene la relación directa:

> **%IACS = [1 / (ρ × 58,0 × 10⁶)] × 100**

## Tabla de conversión

| Resistividad (Ω·m / Ω·CM/ft) | %IACS |
| --- | --- |
| 1,724 × 10⁻⁸ / 10,37 | 100,0 % |
| 2,00 × 10⁻⁸ / 12,03 | 86,2 % |
| 2,50 × 10⁻⁸ / 15,04 | 69,0 % |
| 3,00 × 10⁻⁸ / 18,05 | 57,5 % |
| 4,00 × 10⁻⁸ / 24,06 | 43,1 % |
| 5,00 × 10⁻⁸ / 30,08 | 34,5 % |
| 7,50 × 10⁻⁸ / 45,12 | 23,0 % |
| 1,00 × 10⁻⁷ / 60,15 | 17,2 % |
| 5,00 × 10⁻⁷ / 300,8 | 3,45 % |
| 1,00 × 10⁻⁶ / 601,5 | 1,72 % |
| 1,00 × 10⁻⁵ / 6015 | 0,172 % |

## Ejemplo de cálculo

Un alambre de aleación de aluminio presenta una resistividad de 3,80 × 10⁻⁸ Ω·m. Calcular su conductividad IACS.

1. Calcular la conductividad eléctrica absoluta:
   σ = 1 / ρ = 1 / (3,80 × 10⁻⁸) ≈ 2,6316 × 10⁷ S/m

2. Expresar la conductividad como porcentaje del patrón IACS:
   %IACS = (σ / 58,0 × 10⁶) × 100 = (2,6316 × 10⁷ / 5,80 × 10⁷) × 100 ≈ 45,4 %

Resultado: la aleación tiene una conductividad aproximada de 45,4 % IACS.

## Preguntas frecuentes (FAQ)

### ¿Qué significa exactamente 100% IACS?
100 % IACS equivale a una conductividad eléctrica de 58,0 × 10⁶ S/m y una resistividad de 1,724 × 10⁻⁸ Ω·m, valores correspondientes al cobre recocido patrón a 20 °C.

### ¿Cómo se mide la resistividad para calcular el %IACS?
Se mide típicamente con equipos de corrientes de Foucault (eddy current) que determinan la conductividad directamente, o mediante un puente Kelvin de cuatro puntas para la resistividad, y luego se aplica la fórmula de conversión.

### ¿Por qué se utiliza el cobre recocido como referencia?
El cobre recocido fue adoptado como estándar por la International Electrotechnical Commission en 1913 porque presentaba una conductividad reproducible y elevada, convirtiéndose en un punto de comparación mundial para metales y aleaciones.

### ¿Es válida la conversión IACS para cualquier material?
La relación matemática es universal, pero la referencia IACS se aplica principalmente a metales y aleaciones conductoras. Para aislantes o semiconductores se suele emplear directamente la resistividad, sin escala IACS.

### ¿Cuál es la resistividad del cobre puro en unidades imperiales?
El cobre puro recocido tiene una resistividad de 10,37 Ω·CM/ft (ohm‑circular mil por pie), que corresponde exactamente al 100 % IACS.

### ¿Qué precisión tiene la fórmula de conversión?
Dado que el patrón IACS es un valor fijo, la conversión es exacta. La precisión práctica depende únicamente de la exactitud con que se haya medido la resistividad o conductividad del material.

## Fuentes consultadas

- [Electrical Conductivity - Elements and other Materials](https://www.engineeringtoolbox.com/conductors-d_1381.html)