---
title: "Impedancia de transformadores %Z"
sidebar:
  label: "Impedancia de transformadores %Z"
description: "Ficha tecnica: Impedancia de transformadores %Z"
keywords: ["transformer impedance percent Z calculation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-impedance"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## ¿Qué es la impedancia de un transformador?

La impedancia de un transformador es la oposición total que presentan sus devanados al flujo de corriente alterna, combinando la resistencia de los conductores de cobre con la reactancia inductiva originada por el flujo de dispersión. Esta impedancia provoca caídas de tensión internas y limita la corriente de cortocircuito.

En un transformador real, no todo el flujo magnético enlaza ambos devanados. Una porción, denominada flujo de dispersión, se cierra a través del aislamiento y del aceite sin atravesar el núcleo, generando una autoinductancia conocida como reactancia de dispersión. La suma fasorial de la resistencia y la reactancia de dispersión constituye la impedancia del transformador.

## Componentes de la impedancia: resistencia y reactancia de dispersión

La impedancia de un transformador se compone de dos partes: la resistencia óhmica de los devanados (R) y la reactancia de dispersión (X). Para los devanados primario y secundario, las impedancias se expresan como:

> **Z₁ = R₁ + jX₁**
> **Z₂ = R₂ + jX₂**

donde:
- **Z₁, Z₂** = impedancias complejas del primario y secundario
- **R₁, R₂** = resistencias de los devanados primario y secundario
- **X₁, X₂** = reactancias de dispersión del primario y secundario

Las caídas de tensión internas se describen mediante las ecuaciones fasoriales del transformador:

> **V₁ = E₁ + I₁R₁ + jI₁X₁**
> **V₂ = E₂ – I₂R₂ – jI₂X₂**

Ambas componentes intervienen en la magnitud de la impedancia total referida a un lado, la cual determina el comportamiento del equipo ante variaciones de carga y fallas.

## Fórmula de impedancia porcentual (%Z)

La impedancia porcentual expresa la impedancia del transformador referida a una base de potencia y tensión, normalmente los valores nominales. Se calcula como la relación entre la caída de tensión a corriente nominal (tensión de cortocircuito) y la tensión nominal, multiplicada por 100.

> **%Z = (Vcc / Vnominal) × 100**

De forma equivalente, en términos de la impedancia en ohmios por fase:

> **%Z = (Zfase × Inominal / Vfase_nominal) × 100**

donde:
- **Zfase** = impedancia por fase referida al lado del cálculo (Ω)
- **Inominal** = corriente nominal del lado respectivo (A)
- **Vfase_nominal** = tensión de fase nominal correspondiente (V)
- **Vcc** = tensión de ensayo en cortocircuito que hace circular la corriente nominal (V)
- **Vnominal** = tensión nominal del devanado ensayado (V)

## Valores típicos de %Z según aplicación

La impedancia porcentual varía según el tamaño, la tensión y el diseño del transformador. En la tabla siguiente se indican valores de referencia comunes en la industria.

| Tipo de transformador | Rango de potencia (kVA) | Clase de tensión primaria (kV) | %Z típica (%) |
| :--- | :--- | :--- | :--- |
| Distribución en aceite | 25 – 500 | 12,5 – 34,5 | 2,0 – 4,5 |
| Distribución seco encapsulado | 10 – 500 | 0,6 – 15 | 2,5 – 6,0 |
| Potencia en aceite | 500 – 10 000 | 34,5 – 230 | 5,0 – 10,0 |
| Gran potencia | 10 000 – >100 000 | 230 – 765 | 10,0 – 20,0 |

Transformadores con mayor potencia suelen diseñarse con impedancias elevadas para limitar la corriente de cortocircuito. Los valores precisos dependen de la norma de fabricación y deben consultarse en la placa de características o en el protocolo de ensayos.

## Ejemplo de cálculo de %Z

Se tiene un transformador trifásico de 250 kVA, conexión Dyn11, tensión primaria 13,8 kV / tensión secundaria 480 V, corriente nominal secundaria 300 A. La impedancia medida por fase en el lado secundario es de **0,0368 Ω**.

La tensión de fase nominal secundaria (estrella) es:

**Vfase_nominal = 480 V / √3 = 277 V**

Aplicando la fórmula de %Z:

> **%Z = (Zfase × Inominal / Vfase_nominal) × 100**
> **%Z = (0,0368 Ω × 300 A / 277 V) × 100 = 4,0 %**

El mismo resultado se obtendría midiendo la tensión de cortocircuito secundaria (11,08 V línea‑línea) y dividiendo entre la tensión nominal secundaria.

## Preguntas frecuentes (FAQ)

### ¿Cuál es el valor típico de %Z para un transformador de distribución de 500 kVA?

Para un transformador de distribución de 500 kVA en aceite, la impedancia porcentual típica es del **4,5 %**. Este valor puede oscilar entre 2,5 % y 5,5 % según el diseño y la norma aplicable. Una %Z exacta figura en la placa del equipo y es esencial para el cálculo de cortocircuitos.

### ¿Cómo se relaciona la impedancia porcentual con la corriente de cortocircuito?

La corriente simétrica de cortocircuito en bornes del secundario se obtiene como **Icc = Inominal / (%Z/100)**. Por ejemplo, una %Z del **5 %** produce una Icc de **20 veces** la corriente nominal. Si el mismo transformador tuviera %Z = 2 %, la corriente de falla sería 50 veces la nominal, lo que obligaría a sobredimensionar la aparamenta.

### ¿Qué efectos tiene una impedancia porcentual demasiado baja, por ejemplo menor del 2 %?

Una %Z inferior al **2 %** puede ocasionar corrientes de cortocircuito excesivas, sobrecargando mecánica y térmicamente los devanados, además de exigir interruptores con capacidades de ruptura muy altas. También incrementa las caídas de tensión pasajeras durante la energización y reduce la capacidad de limitar armónicos.

### ¿Cómo se mide experimentalmente la impedancia porcentual de un transformador?

Se realiza el ensayo de cortocircuito: se cortocircuita el devanado de menor tensión y se aplica tensión reducida al otro lado hasta que circule la corriente nominal. La tensión aplicada en ese momento, expresada como **porcentaje de la tensión nominal del lado excitado**, es directamente la %Z. Por ejemplo, si para un transformador de 480 V se necesitan **19,2 V** para alcanzar la corriente nominal, la %Z es (19,2 / 480) × 100 = **4,0 %**.

### ¿La impedancia porcentual varía con la frecuencia de operación?

Sí, porque la componente de reactancia inductiva es directamente proporcional a la frecuencia (X = 2πfL). Al pasar de **50 Hz** a **60 Hz**, la reactancia de dispersión aumenta aproximadamente un **20 %** para el mismo transformador, lo que incrementa la %Z en esa misma proporción si la resistencia es despreciable frente a la reactancia.

### ¿Qué diferencia hay entre el valor de impedancia en ohmios y la impedancia porcentual?

La impedancia en ohmios por fase depende de la tensión y la potencia nominales, y difiere según se refiera al lado primario o secundario. La **%Z es un número adimensional** que permite comparar transformadores de cualquier tamaño y tensión. Por ejemplo, un transformador de 1000 kVA con Z = 0,10 Ω en el secundario de 480 V tendrá una %Z de aproximadamente **5,8 %**, mientras que otro de 100 kVA con la misma Z en ohmios presentaría una %Z mucho menor.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-leakage-reactance-or-impedance-of-transformer/
- **weg.net**: https://www.weg.net/institutional/ZA/en/support/resources-and-tools
