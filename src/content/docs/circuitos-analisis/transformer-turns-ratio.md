---
title: "Relación de transformación en transformadores"
sidebar:
  label: "Relación de transformación en transformadores"
description: "Ficha tecnica: Relación de transformación en transformadores"
keywords: ["transformer turns ratio calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "transformers-calc"
subcategory: "transformer-turns-ratio"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La relación de transformación en un transformador ideal se define como el cociente entre el número de espiras del devanado primario (N₁) y el número de espiras del devanado secundario (N₂). Este parámetro adimensional determina la proporción en que se modifican la tensión y la corriente alterna entre ambos devanados. En un transformador real, la relación de transformación se aproxima al valor ideal, pero se ve afectada por pérdidas en el núcleo, flujo de dispersión y resistencia de los devanados. La comprensión de este concepto es fundamental para el diseño, selección y operación de transformadores en sistemas de potencia, electrónica y aplicaciones industriales.

Un transformador opera según la ley de inducción electromagnética de Faraday. Una corriente alterna en el devanado primario produce un flujo magnético variable en el tiempo que circula por el núcleo ferromagnético común. Este flujo eslabona el devanado secundario e induce en él una fuerza electromotriz (f.e.m.) proporcional a su número de espiras. En un transformador ideal, todo el flujo generado por el primario concatena el secundario sin dispersión, y la permeabilidad magnética del núcleo se considera infinita. Bajo estas condiciones, la tensión inducida en cada devanado es directamente proporcional a su número de espiras.

## Ecuación fundamental de la relación de transformación

La relación entre las tensiones primaria y secundaria en un transformador ideal es igual a la relación entre el número de espiras de ambos devanados, y a su vez igual a la relación inversa de las corrientes. La expresión matemática que describe este comportamiento es:

> **V₁ / V₂ = N₁ / N₂ = I₂ / I₁**

Donde cada variable se define como:

| Símbolo | Magnitud | Unidad |
| --- | --- | --- |
| V₁ | Tensión en el devanado primario | V |
| V₂ | Tensión en el devanado secundario | V |
| N₁ | Número de espiras del devanado primario | — (adimensional) |
| N₂ | Número de espiras del devanado secundario | — (adimensional) |
| I₁ | Corriente en el devanado primario | A |
| I₂ | Corriente en el devanado secundario | A |

El cociente **a = N₁ / N₂** se denomina relación de transformación. Cuando a > 1, el transformador reduce la tensión; cuando a < 1, la eleva.

## Relación de corrientes

En el transformador ideal la potencia aparente se conserva, por lo que el producto de tensión y corriente en el primario es igual al producto en el secundario (V₁·I₁ = V₂·I₂). Combinando esta condición con la ecuación fundamental se obtiene la relación de corrientes:

> **I₁ / I₂ = N₂ / N₁ = 1 / a**

La corriente en cada devanado es inversamente proporcional a su número de espiras. Un devanado con más espiras soporta mayor tensión pero conduce menor corriente. Esta relación permite dimensionar correctamente la sección del conductor: el devanado de baja tensión requiere un calibre mayor porque transporta una corriente más elevada.

## Relación de impedancias

Cuando se conecta una impedancia de carga Z₂ en el secundario, la impedancia reflejada en el primario se transforma según el cuadrado de la relación de transformación. La expresión que relaciona ambas impedancias es:

> **Z₁ = a² · Z₂**

Donde Z₁ es la impedancia equivalente vista desde los terminales primarios y Z₂ es la impedancia conectada en el secundario. Esta propiedad se utiliza para adaptar impedancias entre etapas de circuitos electrónicos y para modelar el efecto de la carga sobre el primario.

## Clasificación según la relación de espiras

Los transformadores se clasifican en función del valor de la relación de transformación a = N₁ / N₂:

| Tipo | Relación de espiras (N₁ / N₂) | Efecto sobre la tensión | Efecto sobre la corriente |
| --- | --- | --- | --- |
| Reductor (step-down) | a > 1 | V₂ < V₁ | I₂ > I₁ |
| Elevador (step-up) | a < 1 | V₂ > V₁ | I₂ < I₁ |
| Aislamiento | a = 1 | V₂ = V₁ | I₂ = I₁ |

La operación de un transformador es reversible: un transformador reductor puede funcionar como elevador si se intercambian los devanados primario y secundario, siempre que se respeten los límites nominales de tensión y corriente de cada arrollamiento.

## Ejemplo de cálculo

Un transformador monofásico de 50 kVA tiene una tensión primaria de 4000 V y una tensión secundaria de 400 V. Suponiendo un comportamiento ideal, se desea determinar:

1. Las corrientes nominales en ambos devanados.
2. La relación de transformación.

**Cálculo de corrientes nominales.** La corriente nominal del primario se obtiene a partir de la potencia aparente nominal:

Corriente primaria: I₁ = S / V₁ = 50 000 VA / 4000 V = 12,5 A

Corriente secundaria: I₂ = S / V₂ = 50 000 VA / 400 V = 125 A

**Cálculo de la relación de transformación.** Se puede determinar a partir de las tensiones o de las corrientes:

a = V₁ / V₂ = 4000 V / 400 V = 10

Alternativamente, a = I₂ / I₁ = 125 A / 12,5 A = 10

El resultado a = 10 indica un transformador reductor, en el cual el devanado primario posee 10 veces más espiras que el secundario.

## Limitaciones del transformador real

El modelo de transformador ideal no considera los siguientes fenómenos presentes en los transformadores reales:

- **Pérdidas en el núcleo:** producidas por histéresis magnética y corrientes parásitas de Foucault. Estas pérdidas dependen de la frecuencia, la densidad de flujo máximo y el material del núcleo.
- **Resistencia de los devanados:** la resistencia óhmica del cobre disipa potencia en forma de calor (pérdidas I²R), reduciendo la tensión de salida en carga.
- **Flujo de dispersión:** parte del flujo magnético generado por el primario no concatena completamente al secundario. Este flujo de fuga se modela como inductancias de dispersión en serie con cada devanado.
- **Corriente de magnetización:** en un transformador real, el núcleo requiere una pequeña corriente de excitación incluso con el secundario en vacío, para establecer el flujo magnético.

Estas no idealidades hacen que la relación de tensiones en carga difiera ligeramente de la relación de espiras, especialmente a plena carga y con factores de potencia bajos.

## Aplicaciones del concepto

La relación de transformación es un parámetro fundamental en las siguientes aplicaciones:

- **Transmisión y distribución de energía eléctrica:** los transformadores elevadores incrementan la tensión en las centrales generadoras para reducir las pérdidas resistivas en las líneas de transmisión, y los transformadores reductores la disminuyen a niveles seguros para el consumo residencial e industrial.
- **Adaptación de impedancias en electrónica:** los transformadores de audio y radiofrecuencia emplean relaciones de espiras específicas para acoplar etapas con diferente impedancia característica, maximizando la transferencia de potencia.
- **Instrumentación y protección:** los transformadores de corriente y de potencial utilizan relaciones de transformación calibradas para reducir señales de alta tensión o corriente a valores normalizados, seguros para instrumentos de medición y relevadores de protección.
- **Fuentes de alimentación conmutadas:** los transformadores de pulsos con relaciones de transformación optimizadas permiten convertir niveles de tensión continua en convertidores CC-CC aislados.

## Preguntas frecuentes (FAQ)

### ¿Qué representa la relación de transformación en un transformador?
La relación de transformación a = N₁ / N₂ representa el cociente entre el número de espiras del primario y del secundario. Determina cómo se modifican la tensión y la corriente entre ambos devanados: V₁ / V₂ = a y I₁ / I₂ = 1 / a. Un valor a > 1 indica un transformador reductor, mientras que a < 1 corresponde a un transformador elevador.

### ¿Cómo se calcula la relación de transformación a partir de mediciones eléctricas?
Se puede calcular midiendo las tensiones en vacío de ambos devanados y aplicando la fórmula a = V₁ / V₂. También puede obtenerse a partir de las corrientes nominales, ya que a = I₂ / I₁. En transformadores de potencia se suele determinar mediante ensayos normalizados que corrigen los efectos de la impedancia interna.

### ¿Por qué la corriente es mayor en el devanado de baja tensión?
La potencia aparente se conserva en un transformador ideal (V₁·I₁ = V₂·I₂). Por tanto, si el devanado secundario tiene menor tensión que el primario, la corriente en el secundario debe ser proporcionalmente mayor para mantener el producto potencia constante. Esta es la razón por la cual el devanado de baja tensión se fabrica con conductor de mayor sección.

### ¿La relación de transformación varía con la carga?
En un transformador real, la relación de tensiones en carga difiere ligeramente de la relación de espiras debido a la caída de tensión en las impedancias internas (resistencia y reactancia de dispersión de los devanados). Esta diferencia es mayor a plena carga y con factores de potencia inductivos. En vacío, la relación de tensiones se aproxima mucho a la relación de espiras.

### ¿Qué ocurre si se conecta un transformador reductor al revés?
Un transformador reductor puede operar como elevador si se alimenta el devanado de baja tensión y se carga el de alta tensión. Sin embargo, es imprescindible que la tensión aplicada al nuevo primario no supere su valor nominal de diseño, y que la corriente demandada por la carga no exceda la capacidad del devanado que originalmente era el primario. Superar estos límites puede provocar saturación del núcleo o sobrecalentamiento.

### ¿Cómo se refleja la impedancia de carga en el primario?
La impedancia conectada al secundario se refleja en el primario multiplicada por el cuadrado de la relación de transformación: Z₁ = a² · Z₂. Esta propiedad permite que un transformador actúe como adaptador de impedancias, haciendo que una carga de valor Z₂ aparezca como una carga equivalente de valor a²·Z₂ vista desde el circuito primario.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/transformer-d_1398.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-9/step-up-and-step-down-transformers/
- **electrical4u.com**: https://www.electrical4u.com/transformer-calculator/
