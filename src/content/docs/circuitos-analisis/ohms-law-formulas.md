---
title: "Ley de Ohm fórmulas y aplicaciones"
sidebar:
  label: "Ley de Ohm fórmulas y aplicaciones"
description: "Ficha tecnica: Ley de Ohm fórmulas y aplicaciones"
keywords: ["Ohms law formula V I R calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "fundamentals"
subcategory: "ohms-law"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La ley de Ohm establece que la corriente eléctrica que fluye a través de un conductor entre dos puntos es directamente proporcional a la diferencia de potencial o voltaje entre dichos puntos, e inversamente proporcional a la resistencia del conductor. Esta relación fundamental, descubierta por el físico alemán Georg Simon Ohm y publicada en 1827, constituye la base del análisis de circuitos eléctricos y se cumple para la gran mayoría de materiales conductores bajo condiciones físicas constantes.

## Definición y fórmula fundamental

La ley de Ohm define que el cociente entre el voltaje aplicado a un conductor y la corriente que circula por él es una constante denominada resistencia eléctrica. Matemáticamente, la fórmula principal se expresa como:

> **I = V / R**

Esta ecuación permite calcular la corriente I cuando se conocen el voltaje V y la resistencia R. Un circuito alimentado por una batería de 12 V que alimenta una resistencia de 18 Ω produce una corriente de 0,67 A, según el cálculo directo I = 12 V / 18 Ω.

| Variable | Nombre completo | Unidad de medida (SI) | Descripción |
| --- | --- | --- | --- |
| I | Corriente eléctrica | Amperios (A) | Flujo de carga eléctrica a través del conductor |
| V | Voltaje o diferencia de potencial | Voltios (V) | Diferencia de potencial eléctrico entre los extremos del conductor |
| R | Resistencia eléctrica | Ohmios (Ω) | Oposición al paso de la corriente ofrecida por el conductor |

## Expresiones equivalentes

Despejando los términos de la ecuación fundamental se obtienen dos expresiones alternativas de la ley de Ohm, que permiten calcular cualquier variable cuando se conocen las otras dos:

> **V = I × R**

> **R = V / I**

La expresión V = I × R resulta útil para determinar el voltaje necesario. Por ejemplo, para generar una corriente de 20 mA a través de una resistencia de 3,3 kΩ, se requiere un voltaje de 66 V. La expresión R = V / I permite calcular la resistencia de un circuito: una corriente de 1 A fluyendo bajo 230 V indica una resistencia de 230 Ω.

## Aplicaciones prácticas

La ley de Ohm se emplea en el dimensionamiento de componentes, análisis de circuitos, verificación de funcionamiento y estimación de parámetros eléctricos en sistemas de corriente continua y alterna. La tabla siguiente recoge aplicaciones representativas con sus valores de cálculo característicos.

| Aplicación | Parámetros conocidos | Cálculo con ley de Ohm | Resultado numérico |
| --- | --- | --- | --- |
| Cálculo de corriente en carga resistiva | V = 12 V, R = 18 Ω | I = V / R | 0,67 A |
| Determinación de voltaje necesario | I = 20 mA / 0,02 A, R = 3,3 kΩ / 3300 Ω | V = I × R | 66 V |
| Cálculo de resistencia de circuito | V = 230 V, I = 1 A | R = V / I | 230 Ω |
| Estimación de resistencia de bombilla | V = 230 V, P = 100 W | R = V² / P | 529 Ω |
| Cálculo de corriente en bombilla | P = 100 W, V = 230 V | I = P / V | 0,43 A |

## Limitaciones

La ley de Ohm solo se aplica a materiales óhmicos, aquellos cuya resistencia permanece constante independientemente de la corriente. Los materiales no óhmicos, como semiconductores, diodos, varistores o electrolitos, presentan una relación voltaje-corriente no lineal y no obedecen esta ley. Adicionalmente, la ley supone condiciones físicas constantes del conductor, en particular la temperatura: variaciones térmicas alteran la resistividad del material e invalidan la proporcionalidad directa entre voltaje y corriente. La forma puntual de la ley, **J = σ × E**, donde J es la densidad de corriente, σ la conductividad y E el campo eléctrico, generaliza el concepto para medios continuos en electromagnetismo.

## Triángulo de la ley de Ohm

El triángulo de Ohm es una representación gráfica nemotécnica que organiza las tres variables V, I y R para facilitar el despeje rápido de cualquiera de ellas. Colocando V en la parte superior y las otras dos variables en la parte inferior, la línea horizontal indica división y la línea vertical multiplicación.

| Disposición en el triángulo | Variable a calcular | Fórmula resultante |
| --- | --- | --- |
| V arriba, I y R abajo (separados por línea vertical) | V | V = I × R |
| V sobre I (separados por línea horizontal) | R | R = V / I |
| V sobre R (separados por línea horizontal) | I | I = V / R |

## Relación con la potencia eléctrica

Combinando la ley de Ohm con la definición de potencia eléctrica se obtienen tres expresiones equivalentes que vinculan potencia, voltaje, corriente y resistencia. La potencia disipada en un resistor de 18 Ω alimentado con 12 V es de 8 W, calculada como P = V² / R = (12 V)² / 18 Ω.

> **P = V × I**

> **P = R × I²**

> **P = V² / R**

| Variable | Nombre completo | Unidad de medida (SI) | Relación con ley de Ohm |
| --- | --- | --- | --- |
| P | Potencia eléctrica | Vatios (W) | P = V × I = R × I² = V² / R |
| V | Voltaje | Voltios (V) | V = P / I |
| I | Corriente | Amperios (A) | I = P / V |
| R | Resistencia | Ohmios (Ω) | R = V² / P |

## Preguntas frecuentes (FAQ)

### ¿Qué establece exactamente la ley de Ohm?

La ley de Ohm establece que la corriente a través de un conductor es directamente proporcional al voltaje aplicado e inversamente proporcional a la resistencia, siempre que las condiciones físicas del conductor permanezcan constantes.

### ¿Qué diferencia un material óhmico de uno no óhmico?

Un material óhmico mantiene su resistencia constante al variar la corriente, por lo que cumple la ley de Ohm. Un material no óhmico presenta una resistencia que cambia con el voltaje o la corriente aplicados, dando lugar a una relación voltaje-corriente no lineal.

### ¿En qué unidades se miden el voltaje, la corriente y la resistencia?

El voltaje se mide en voltios (V), la corriente en amperios (A) y la resistencia en ohmios (Ω), siendo todas unidades del Sistema Internacional.

### ¿Se puede aplicar la ley de Ohm a circuitos de corriente alterna?

Sí, la ley de Ohm se aplica a circuitos de corriente alterna cuando se trabaja con valores eficaces y la carga es puramente resistiva. En presencia de inductancias o capacitancias, el concepto de resistencia se generaliza al de impedancia.

### ¿Cómo influye la temperatura en el cumplimiento de la ley de Ohm?

La resistencia de los conductores varía con la temperatura. Si la temperatura cambia significativamente debido a la propia corriente, la resistencia deja de ser constante y la relación voltaje-corriente deja de ser lineal, invalidando la aplicabilidad de la ley de Ohm.

### ¿Qué es el triángulo de Ohm y para qué sirve?

El triángulo de Ohm es una representación visual que dispone V, I y R en forma triangular para recordar y despejar rápidamente cualquiera de las tres fórmulas equivalentes de la ley de Ohm, sin necesidad de operar algebraicamente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ohms-law-d_1658.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/tools/ohms-law-calculator/
- **electrical4u.com**: https://www.electrical4u.com/ohms-law-equation-formula-and-limitation-of-ohms-law/
