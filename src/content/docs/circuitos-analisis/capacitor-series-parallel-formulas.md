---
title: "Fórmulas de capacitores serie paralelo"
sidebar:
  label: "Fórmulas de capacitores serie paralelo"
description: "Ficha tecnica: Fórmulas de capacitores serie paralelo"
keywords: ["capacitor series parallel formula calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "circuit-elements"
subcategory: "capacitor-formulas"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La capacitancia equivalente de dos capacitores de 10 μF y 20 μF conectados en paralelo es 30 μF, mientras que en serie se reduce a 6.7 μF. Conocer las fórmulas para calcular la capacitancia total en configuraciones serie y paralelo es esencial para el diseño y análisis de circuitos. Esta página presenta las expresiones matemáticas, su deducción, ejemplos prácticos y una comparación directa entre ambos modos de conexión.

## Capacitores en serie
Al conectar tres capacitores de 3 μF, 6 μF y 12 μF en serie se obtiene una capacitancia equivalente de 1.7 μF. La capacitancia equivalente de capacitores conectados en serie siempre es menor que la más pequeña de las capacitancias individuales. La fórmula general para n capacitores en serie es:

> **1 / C_eq = 1 / C₁ + 1 / C₂ + 1 / C₃ + … + 1 / Cₙ**

Para el caso particular de dos capacitores en serie, la expresión se simplifica a:

> **C_eq = (C₁ × C₂) / (C₁ + C₂)**

En una conexión serie, la carga (Q) es la misma en todos los capacitores y el voltaje total aplicado se reparte entre ellos de forma inversamente proporcional a su capacitancia (V = Q / C).

## Capacitores en paralelo
Dos capacitores de 10 μF y 20 μF en paralelo suman una capacitancia total de 30 μF. En una conexión en paralelo, la capacitancia equivalente es la suma directa de las capacitancias individuales y siempre es mayor que la mayor de ellas. La fórmula general para n capacitores en paralelo es:

> **C_eq = C₁ + C₂ + C₃ + … + Cₙ**

En esta configuración todos los capacitores están sometidos al mismo voltaje (el de la fuente), mientras que la carga total es la suma de las cargas en cada uno.

## Ejemplo de cálculo
Un circuito serie formado por capacitores de 3 μF, 6 μF y 12 μF alimentado con 230 V entrega una carga común de 391 μC. Primero se calcula la capacitancia equivalente:

> **1 / C_eq = 1 / 3 + 1 / 6 + 1 / 12 = 4/12 + 2/12 + 1/12 = 7/12**
> **C_eq = 12 / 7 ≈ 1.71 μF**

Con ese valor se determina la carga total que circula por el circuito:

> **Q = C_eq × V = 1.71×10⁻⁶ F × 230 V ≈ 3.93×10⁻⁴ C = 393 μC**

Puesto que en serie la carga es idéntica en todos los elementos, la tensión en cada capacitor se obtiene con V = Q / C:

| Capacitor | Capacitancia | Voltaje calculado |
|-----------|--------------|-------------------|
| C₁ | 3 μF | 131 V |
| C₂ | 6 μF | 65.5 V |
| C₃ | 12 μF | 32.8 V |

La suma de los voltajes parciales (131 + 65.5 + 32.8 ≈ 229.3 V) coincide, dentro del error de redondeo, con los 230 V aplicados.

## Comparación entre conexiones
Los valores típicos de 10 μF y 20 μF sirven para ilustrar las diferencias fundamentales. La siguiente tabla resume las propiedades de cada configuración.

| Propiedad | Conexión en serie | Conexión en paralelo |
|-----------|-------------------|----------------------|
| Capacitancia equivalente | Menor que la menor | Suma de capacitancias |
| Fórmula general | 1/C_eq = Σ (1/Cᵢ) | C_eq = Σ Cᵢ |
| Ejemplo con 10 μF y 20 μF | 6.7 μF | 30 μF |
| Voltaje en cada capacitor | Se reparte inversamente a C | El mismo que la fuente |
| Carga en cada capacitor | Igual en todos | Se reparte proporcionalmente a C |
| Comportamiento | Reduce la capacitancia total | Aumenta la capacitancia total |

## Preguntas frecuentes (FAQ)
### ¿Cómo se calcula la capacitancia equivalente en serie?
Se calcula con la fórmula 1/C_eq = 1/C₁ + 1/C₂ + … + 1/Cₙ. La capacitancia resultante es menor que la capacitancia más pequeña del arreglo.

### ¿Cómo se calcula la capacitancia equivalente en paralelo?
Simplemente se suman todas las capacitancias: C_eq = C₁ + C₂ + … + Cₙ. La capacitancia total siempre supera el mayor valor individual.

### ¿Por qué la capacitancia total en serie es menor que la menor?
Porque la conexión en serie equivale a aumentar el espesor efectivo del dieléctrico, lo que reduce la capacidad de almacenar carga para un mismo voltaje.

### ¿Cómo se distribuye el voltaje en capacitores en serie?
El voltaje se reparte de manera inversamente proporcional a la capacitancia: a menor capacitancia, mayor voltaje. La suma de las tensiones parciales iguala el voltaje de la fuente.

### ¿Qué sucede con la carga en una conexión en paralelo?
La carga total es la suma de las cargas de cada capacitor (Q_total = Q₁ + Q₂ + …), y cada uno almacena una carga proporcional a su capacitancia porque todos ven el mismo voltaje.

### ¿Cuál es la fórmula rápida para dos capacitores en serie?
Para exactamente dos capacitores en serie se puede usar C_eq = (C₁ × C₂) / (C₁ + C₂). Esta expresión evita trabajar directamente con los inversos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/capacitors-parallel-series-d_1388.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-13/series-and-parallel-capacitors/
- **electrical4u.com**: https://www.electrical4u.com/capacitors-in-series-and-parallel/
