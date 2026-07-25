---
title: "Corriente de línea y de fase relación"
sidebar:
  label: "Corriente de línea y de fase relación"
description: "Ficha tecnica: Corriente de línea y de fase relación"
keywords: ["line current phase current three phase relationship", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "phase-current-line-current"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

En los sistemas trifásicos, la corriente de línea (I_L) es la que circula por cada conductor de alimentación hacia la carga, mientras que la corriente de fase (I_ph) es la que atraviesa cada bobina individual del generador, transformador o carga. La relación entre ambas depende exclusivamente de la configuración de los devanados: en conexión estrella (Y) la corriente de línea es idéntica a la de fase, y en conexión triángulo (Δ) la corriente de línea es √3 (aproximadamente 1,732) veces la corriente de fase.

## Relación en conexión estrella (Y)

En la conexión estrella, cada conductor de línea está en serie directa con una sola bobina de fase, por lo que la corriente de línea y la corriente de fase son exactamente la misma magnitud. La relación se resume como I_L = I_ph. Las tres corrientes de línea mantienen un desfase de 120° eléctricos entre sí, pero no existe desfase adicional entre la corriente de línea y la respectiva corriente de fase. Esta igualdad es válida tanto para sistemas balanceados como para la fase individual de un sistema desbalanceado, siempre que se analice la misma rama. Las cargas monofásicas conectadas entre línea y neutro en una red en estrella a cuatro hilos se benefician de esta relación, ya que la corriente de línea que alimenta el circuito es directamente la corriente de fase consumida por la carga.

| Parámetro | Estrella (Y) |
| --- | --- |
| Relación de corriente | I_L = I_ph |
| Ejemplo (I_ph = 10 A) | I_L = 10 A / 10 A |

## Relación en conexión triángulo (Δ)

En la conexión triángulo, cada conductor de línea se une a dos bobinas de fase, por lo que la corriente de línea es la suma vectorial de las dos corrientes de fase adyacentes. Como estas corrientes de fase están desfasadas 120° entre sí, la magnitud de la corriente de línea resulta ser √3 (aproximadamente 1,732) veces la magnitud de la corriente de fase. La relación fundamental es I_L = √3 × I_ph. La corriente de línea está desfasada 30° en retraso (o adelanto, según la referencia) con respecto a una de las corrientes de fase que la componen. Esta relación se mantiene invariante en sistemas equilibrados; en condiciones de desequilibrio debe resolverse el diagrama fasorial completo para cada nodo.

| Parámetro | Triángulo (Δ) |
| --- | --- |
| Relación de corriente | I_L = √3 × I_ph |
| Ejemplo (I_ph = 10 A) | I_L = 17,32 A / 17,32 A |

## Tabla comparativa estrella vs. triángulo

| Magnitud | Conexión estrella (Y) | Conexión triángulo (Δ) |
| --- | --- | --- |
| Corriente de línea (I_L) | I_L = I_ph | I_L = √3 × I_ph ≈ 1,732 × I_ph |
| Tensión de línea (V_L) | V_L = √3 × V_ph | V_L = V_ph |
| Ejemplo de corriente (I_ph = 10 A) | I_L = 10 A / 10 A | I_L = 17,32 A / 17,32 A |
| Ejemplo de tensión (V_ph = 230 V) | V_L = 400 V / 400 V | V_L = 230 V / 230 V |
| Desfase entre I_L e I_ph | 0° (en fase) | 30° (adelanto/retraso según secuencia) |
| Neutro | Puede o no estar presente | No existe conexión de neutro |

## Fórmulas

Para una conexión estrella (Y) balanceada:

> **I_L = I_ph**

> **V_L = √3 × V_ph** (con V_L adelantada 30° respecto a V_ph)

Para una conexión triángulo (Δ) balanceada:

> **I_L = √3 × I_ph** (con I_L retrasada 30° respecto a I_ph de referencia)

> **V_L = V_ph**

## Aplicaciones prácticas

La distinción entre corriente de línea y corriente de fase es esencial para el dimensionamiento de conductores, protecciones y equipos. En una máquina conectada en triángulo, la corriente de línea es 1,732 veces superior a la que circula por los devanados internos, por lo que el calibre de los cables de alimentación debe ser mayor que el que sugeriría una inspección superficial de la corriente de fase. Los arrancadores estrella‑triángulo aprovechan esta relación: al arrancar en estrella, la corriente de línea se reduce a un tercio de la que se tendría en triángulo, limitando el pico de arranque. En transformadores de distribución, el conocimiento preciso de esta relación evita sobrecargas térmicas en los devanados internos, especialmente cuando se alimentan cargas monofásicas que provocan corrientes de neutro en la configuración estrella.

## Tabla de ejemplos para selección de componentes

| Componente | Condición de diseño (I_L para I_ph 10 A) | Observación |
| --- | --- | --- |
| Interruptor magnetotérmico en estrella | 10 A / 10 A | La corriente de línea no supera la de fase |
| Interruptor magnetotérmico en triángulo | 17,32 A / 17,32 A | Corriente de línea 1,732 veces mayor |
| Relé térmico (protección interna) | 10 A / 10 A | Protege la corriente real de fase |
| Sección de conductor (triángulo) | Para 17,32 A / 17,32 A | Mayor sección que la sugerida por la corriente de fase |
| Ajuste de arrancador estrella‑triángulo | Cambio de 10 A a 17,32 A / 17,32 A | El pico de arranque se limita en estrella |

## Preguntas frecuentes (FAQ)

### ¿En qué configuración la corriente de línea es igual a la corriente de fase?
En la conexión estrella (Y), la corriente de línea es igual a la corriente de fase (I_L = I_ph). Esto se debe a que cada conductor de línea está en serie con una sola bobina de fase, sin derivaciones.

### ¿Por qué en la conexión triángulo la corriente de línea es mayor que la de fase?
En la conexión triángulo, cada línea se conecta a dos bobinas de fase, y la corriente de línea resulta de la suma vectorial de dos corrientes de fase desfasadas 120°. La magnitud de esta suma vectorial es √3 (aproximadamente 1,732) veces la de una fase individual.

### ¿La relación I_L = √3 × I_ph se cumple en sistemas desbalanceados?
No de forma directa. En sistemas desbalanceados, las corrientes de fase no son iguales y la corriente de línea se obtiene mediante el análisis fasorial completo de cada nodo; la expresión √3 solo es válida para condiciones equilibradas.

### ¿Cómo afecta la presencia de neutro a la relación de corrientes?
En una conexión estrella con neutro, la corriente de línea sigue siendo igual a la corriente de fase correspondiente. El neutro conducirá la suma vectorial de las tres corrientes de línea, que es cero si el sistema está perfectamente balanceado.

### ¿Qué ocurre con la corriente de fase cuando se mide solo la corriente de línea en una carga en triángulo?
Es necesario dividir la corriente de línea medida entre √3 para obtener la corriente de fase. Esta conversión es crucial para verificar que los devanados internos no superen su capacidad térmica.

### ¿En los arrancadores estrella‑triángulo cómo cambia la relación de corrientes?
Durante el arranque en estrella, la corriente de línea es igual a la corriente de fase del motor, y la tensión en cada devanado equivale a la tensión de fase (V_L/√3). Al conmutar a triángulo, la corriente de línea se multiplica por 3 (debido al cambio de tensión e impedancia) y la corriente de fase interna se reacomoda según la configuración Δ. Esto reduce el pico de arranque.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/three-phase-electrical-d_888.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-10/three-phase-y-delta-configurations/
- **electrical4u.com**: https://www.electrical4u.com/relationship-of-line-and-phase-voltages-and-currents-in-a-star/
