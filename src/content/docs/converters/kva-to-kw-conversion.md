---
title: "Conversión de kVA a kW factor de potencia"
sidebar:
  label: "Conversión de kVA a kW factor de potencia"
description: "Ficha tecnica: Conversión de kVA a kW factor de potencia"
keywords: ["kVA kW conversion power factor table", "converters"]
category: "converters"
topic: "power-units"
subcategory: "kva-to-kw-conversion"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La conversión de kilovoltiamperios (kVA) a kilovatios (kW) es una operación esencial en el análisis de sistemas eléctricos de corriente alterna. La potencia aparente, medida en kVA, no representa por sí sola el trabajo útil; es necesario conocer el factor de potencia (FP) para determinar la potencia real o activa en kW. Esta página proporciona la fórmula exacta, tablas de conversión y ejemplos prácticos para facilitar el cálculo.

## Fórmula de conversión

> **kW = kVA × FP**

donde:

- **kW**: Potencia real o activa en kilovatios.
- **kVA**: Potencia aparente en kilovoltiamperios.
- **FP**: Factor de potencia (adimensional, entre 0 y 1).

El factor de potencia se define como el coseno del ángulo de desfase (φ) entre la tensión y la corriente en un circuito lineal:

> **FP = cos(φ) = P / S**

siendo P la potencia activa y S la potencia aparente.

Adicionalmente, en motores trifásicos se puede calcular la potencia aparente a partir de la potencia mecánica y la eficiencia:

> **kVA = (hp × 0,7457) / (η × FP)**

donde η es la eficiencia del motor expresada en tanto por uno.

## Tabla de conversión rápida

La siguiente tabla muestra la potencia real en kW y su equivalente en caballos de fuerza métricos (hp) para diferentes valores de potencia aparente y factor de potencia. El factor de conversión utilizado es 1 kW = 1,3596 hp (métrico).

| kVA | Factor de potencia | Potencia real (kW y hp) |
|---|---|---|
| 10 kVA | 0,80 | 8 kW / 10,877 hp |
| 10 kVA | 0,90 | 9 kW / 12,237 hp |
| 10 kVA | 1,00 | 10 kW / 13,596 hp |
| 25 kVA | 0,80 | 20 kW / 27,192 hp |
| 25 kVA | 0,90 | 22,5 kW / 30,591 hp |
| 25 kVA | 1,00 | 25 kW / 33,991 hp |
| 50 kVA | 0,80 | 40 kW / 54,385 hp |
| 50 kVA | 0,90 | 45 kW / 61,183 hp |
| 50 kVA | 1,00 | 50 kW / 67,981 hp |
| 100 kVA | 0,80 | 80 kW / 108,771 hp |
| 100 kVA | 0,90 | 90 kW / 122,366 hp |
| 100 kVA | 1,00 | 100 kW / 135,962 hp |
| 500 kVA | 0,80 | 400 kW / 543,854 hp |
| 500 kVA | 0,90 | 450 kW / 611,836 hp |
| 500 kVA | 1,00 | 500 kW / 679,811 hp |

## Factores que afectan la conversión

La conversión de kVA a kW depende directamente del factor de potencia, el cual varía según las características de la carga. Los principales factores que influyen son:

- **Carga resistiva:** FP = 1; toda la potencia aparente se convierte en potencia real. Ejemplo: calefactores eléctricos, lámparas incandescentes.
- **Carga inductiva (motores, transformadores):** FP típico entre 0,7 y 0,9. Produce desfase en atraso (corriente retrasada respecto a la tensión), reduciendo la potencia real para una misma potencia aparente.
- **Carga capacitiva:** FP en adelanto (corriente adelantada), poco común en equipos industriales pero presente en bancos de capacitores para corrección del factor de potencia.
- **Cargas no lineales (rectificadores, variadores de frecuencia):** Provocan distorsión armónica que reduce el factor de potencia real incluso si el cos(φ) es cercano a 1. En estos casos, el factor de potencia total se descompone en factor de desplazamiento y factor de distorsión.
- **Condiciones de operación:** En motores, el FP varía con la carga; con poca carga el FP puede ser inferior a 0,5.

Conocer el factor de potencia real del equipo es imprescindible para una conversión precisa; de lo contrario, utilizar valores estimados puede llevar a sobredimensionar conductores y protecciones.

## Ejemplos de cálculo

**Ejemplo 1: Cálculo de kW a partir de kVA y FP conocido.**  
Un generador trifásico suministra 150 kVA con un factor de potencia de 0,85. Determinar la potencia real en kW y en caballos de fuerza.

> **kW = 150 kVA × 0,85 = 127,5 kW**

Convertiendo a caballos de fuerza métricos:

> **hp = 127,5 kW × 1,3596 ≈ 173,349 hp (métrico)**

El generador entrega 127,5 kW (aproximadamente 173,3 hp).

**Ejemplo 2: Determinación del factor de potencia necesario para obtener cierta potencia real.**  
Una instalación tiene una carga de 80 kW y se alimenta a través de un transformador de 100 kVA. ¿Cuál debe ser el factor de potencia mínimo para no sobrepasar la capacidad del transformador?

Se despeja FP:

> **FP = kW / kVA = 80 kW / 100 kVA = 0,8**

El factor de potencia debe ser al menos 0,8 (en atraso o adelanto). Si el FP real de la carga es menor, será necesario instalar equipos de corrección.

**Ejemplo 3: Cálculo de kVA necesarios para un motor.**  
Un motor de 50 hp (métricos) con eficiencia η = 0,92 y factor de potencia 0,88. Calcular los kVA requeridos.  
Primero, convertir hp a kW: 50 hp ÷ 1,3596 ≈ 36,78 kW (equivale a 50 hp × 0,7355 kW/hp).  
Aplicar la fórmula de kVA para motores:

> **kVA = (hp × 0,7355) / (η × FP) = 36,78 kW / (0,92 × 0,88) ≈ 36,78 / 0,8096 ≈ 45,43 kVA**

Se necesitará una alimentación de al menos 45,43 kVA para ese motor.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre kVA y kW?
El kW (kilovatio) mide la potencia real, es decir, la energía efectivamente convertida en trabajo. El kVA (kilovoltiamperio) mide la potencia aparente, que incluye la potencia reactiva que no realiza trabajo útil pero sí circula por los conductores. La relación entre ambos es el factor de potencia.

### ¿Por qué el factor de potencia no siempre es 1?
Un factor de potencia igual a 1 se da solo en cargas puramente resistivas. La mayoría de los equipos industriales (motores, transformadores) contienen inductancias que desfasan la corriente respecto a la tensión, reduciendo el factor de potencia por debajo de 1.

### ¿Cómo afecta un bajo factor de potencia a la factura eléctrica?
Un factor de potencia bajo obliga a transportar más corriente para la misma potencia útil, lo que aumenta las pérdidas en la red y requiere conductores de mayor sección. Las compañías eléctricas suelen penalizar económicamente a los consumidores con un factor de potencia inferior a 0,9 o 0,95.

### ¿Qué significa factor de potencia en atraso y en adelanto?
El factor de potencia en atraso ocurre cuando la corriente está retrasada respecto a la tensión (carga inductiva). En adelanto significa que la corriente está adelantada (carga capacitiva). Ambos pueden corregirse, aunque el caso más común en la industria es el atraso.

### ¿Se puede convertir kW a kVA sin conocer el factor de potencia?
No es posible una conversión exacta sin el factor de potencia, ya que la relación entre ambas magnitudes es directa: kVA = kW / FP. Si se desconoce FP, se puede asumir un valor típico para el tipo de carga, pero se correrá el riesgo de obtener un resultado impreciso.

### ¿Qué equipos se utilizan para corregir el factor de potencia?
Se emplean bancos de capacitores, conectados en paralelo con la carga, para compensar la potencia reactiva inductiva y elevar el factor de potencia. En instalaciones con cargas no lineales se usan filtros activos de armónicos o equipos electrónicos de corrección dinámica.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **unitconverters.net**: https://www.unitconverters.net/power/kw-to-hp.htm
- **convertworld.com**: https://www.convertworld.com/en/power/
