---
title: "Corriente de falla en transformadores"
sidebar:
  label: "Corriente de falla en transformadores"
description: "Ficha tecnica: Corriente de falla en transformadores"
keywords: ["transformer fault current calculation impedance", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "short-circuit"
subcategory: "fault-current-transformer"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La corriente de falla en los terminales secundarios de un transformador puede alcanzar valores de hasta 20 veces la corriente nominal cuando la impedancia del transformador es del 5%, lo que la convierte en un parámetro determinante para la selección de interruptores, fusibles y relés de protección. Conocer la magnitud de esta corriente permite coordinar adecuadamente los dispositivos de sobrecorriente y garantizar la seguridad del sistema eléctrico.

## Cálculo de la corriente de falla simétrica

La corriente de falla simétrica trifásica en bornes del secundario de un transformador se determina suponiendo una fuente de potencia infinita en el primario, es decir, sin contribución de la impedancia de la red aguas arriba. La magnitud depende exclusivamente de la impedancia del transformador y de su corriente nominal.

> **I_cc = I_n / Z_pu**

Donde la corriente nominal del transformador se obtiene a partir de la potencia aparente y la tensión de línea:

> **I_n = S / (√3 × V_L)**

| Variable | Descripción | Unidad |
|----------|--------------|--------|
| I_cc | Corriente de falla simétrica (cortocircuito trifásico) | A / A |
| I_n | Corriente nominal de línea a plena carga | A / A |
| Z_pu | Impedancia del transformador en por unidad (valor típico entre 0.02 y 0.10) | – |
| S | Potencia aparente nominal del transformador | kVA / kVA |
| V_L | Tensión nominal de línea en el lado donde se calcula la falla | V / V |

Para corrientes de falla asimétricas —que incluyen la componente de corriente continua debida al desplazamiento de la onda de tensión— se aplica un factor multiplicador que suele oscilar entre 1.2 y 1.6 sobre la corriente simétrica, en función de la relación X/R del transformador.

## Impedancias típicas de transformadores

La impedancia porcentual de un transformador determina de forma directa la intensidad de falla. Los valores estándar varían según la potencia y la clase de tensión, y están normalizados para facilitar la coordinación de protecciones.

| Potencia del transformador (kVA / HP) | Tensión primaria (kV / kV) | Impedancia típica Z% |
|---------------------------------------|----------------------------|------------------------|
| 15 – 50 kVA / 20 – 67 HP | 2.4 – 13.8 kV / 2.4 – 13.8 kV | 2.0 – 3.5 % |
| 75 – 500 kVA / 100 – 670 HP | 2.4 – 34.5 kV / 2.4 – 34.5 kV | 3.5 – 5.0 % |
| 750 – 2500 kVA / 1000 – 3350 HP | 13.8 – 34.5 kV / 13.8 – 34.5 kV | 5.0 – 7.0 % |
| ≥ 3000 kVA / ≥ 4000 HP | 34.5 – 138 kV / 34.5 – 138 kV | 7.0 – 10.0 % |

Una impedancia del 2% permite corrientes de falla de hasta 50 veces la nominal, mientras que con un 10% la corriente se limita a 10 veces la nominal. Por ello, transformadores de mayor potencia suelen tener impedancias más elevadas para reducir los esfuerzos mecánicos y las exigencias sobre los interruptores.

## Factores que afectan la corriente de falla

Además de la impedancia propia del transformador, existen otros elementos del sistema que modifican la corriente real de cortocircuito. La influencia de la fuente es especialmente significativa cuando la capacidad de cortocircuito en el primario no es infinita.

- **Impedancia de la fuente aguas arriba**: si la red de alimentación tiene una potencia de cortocircuito limitada —por ejemplo 200 MVA en 13.8 kV—, la impedancia equivalente reduce la corriente de falla en el secundario. El efecto se acentúa en transformadores de gran porte conectados a sistemas débiles.
- **Tipo de conexión del transformador**: en una conexión delta-estrella, la corriente de falla monofásica a tierra en el lado estrella depende de la puesta a tierra del neutro y de la impedancia de secuencia cero. Esta corriente puede ser menor que la trifásica simétrica.
- **Relación X/R del transformador**: valores típicos de X/R entre 3 y 15 influyen en la componente asimétrica de la corriente de falla y en la energía que deben soportar los dispositivos de protección.
- **Temperatura del devanado**: un aumento de 30 °C / 86 °F en la temperatura del cobre incrementa la resistencia del devanado aproximadamente un 12%, reduciendo ligeramente la corriente de falla.
- **Tolerancia de fabricación**: la norma de construcción admite una tolerancia de ±7.5% sobre la impedancia nominal declarada, lo que se traduce en una variación proporcional de la corriente de falla.

## Ejemplo de cálculo

Se desea conocer la corriente de falla simétrica en el secundario de un transformador trifásico de 500 kVA, relación 13.8 kV / 480 V, con impedancia del 5.0%.

**Corriente nominal secundaria:**
> **I_n = 500 kVA / (√3 × 480 V) ≈ 601 A / 601 A**

**Corriente de falla simétrica:**
> **I_cc = 601 A / 0.05 ≈ 12.0 kA / 12.0 kA**

Este valor de 12 kA debe ser comparado con la capacidad de ruptura de los interruptores seleccionados. Si la fuente aguas arriba tuviera una potencia de cortocircuito de solo 100 MVA, la impedancia equivalente reduciría la corriente de falla a aproximadamente 10.5 kA / 10.5 kA.

## Preguntas frecuentes (FAQ)

### ¿Cómo se calcula la corriente de falla asimétrica en un transformador?

La corriente de falla asimétrica se obtiene multiplicando la corriente simétrica por un factor de asimetría que, para una relación X/R de 4.5 típica en transformadores de distribución, vale 1.25 y puede llegar a 1.6 en transformadores de potencia con relaciones X/R superiores a 10.

### ¿Por qué la impedancia del transformador limita la corriente de falla?

La impedancia del transformador, típicamente entre un 2% y un 10%, actúa en serie con la carga y reduce la magnitud de la corriente durante un cortocircuito porque la tensión aplicada debe vencer la caída interna antes de alcanzar los terminales. Un transformador de 1000 kVA con 6% de impedancia limita la corriente de falla a unas 16 veces la nominal.

### ¿Qué ocurre si se desprecia la impedancia de la fuente en el cálculo?

Ignorar la impedancia de la fuente puede sobreestimar la corriente de falla en un 5% a un 15%, dependiendo de la rigidez de la red. En sistemas industriales con transformadores de 2500 kVA o menos, el error suele ser inferior al 10%, pero en instalaciones cercanas a grandes centrales de generación el error puede superar el 20%.

### ¿Cómo afecta la conexión delta-estrella a la corriente de falla a tierra?

En una conexión delta-estrella, una falla monofásica a tierra en el lado estrella produce corrientes de secuencia cero que circulan por el neutro, con magnitudes que dependen de la impedancia de secuencia cero del transformador y la resistencia de puesta a tierra. La corriente puede ser entre un 10% y un 25% inferior a la de una falla trifásica en transformadores con neutro rígido a tierra.

### ¿Qué parámetros de placa se necesitan para calcular la corriente de falla?

Se requieren la potencia nominal en kVA, la tensión nominal del lado donde se analiza la falla, y la impedancia porcentual declarada en la placa del transformador, la cual suele estar comprendida entre 3% y 7% para transformadores de distribución y entre 7% y 10% para transformadores de potencia.

### ¿Cómo se selecciona un interruptor a partir de la corriente de falla de un transformador?

El interruptor debe tener una capacidad de ruptura que supere en al menos un 10% la corriente de falla simétrica calculada y ser capaz de cerrar contra la corriente asimétrica. Para un transformador de 1500 kVA con 5.75% de impedancia, la corriente de falla simétrica esperada es de 20 kA, por lo que se elegiría un interruptor con capacidad de 25 kA o superior.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/transformer-d_1398.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-9/practical-considerations-transformers/
- **electrical4u.com**: https://www.electrical4u.com/electrical-fault-calculation-positive-negative-zero-sequence-impedance/
