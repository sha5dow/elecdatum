---
title: "Valores RMS y pico en corriente alterna"
sidebar:
  label: "Valores RMS y pico en corriente alterna"
description: "Ficha tecnica: Valores RMS y pico en corriente alterna"
keywords: ["RMS peak value AC calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "ac-fundamentals"
subcategory: "rms-values"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los valores RMS (raíz cuadrática media) y pico son parámetros fundamentales para caracterizar una señal de corriente alterna sinusoidal. El valor RMS de una tensión o corriente alterna equivale al valor de corriente continua que produciría la misma disipación de potencia sobre una carga resistiva. Para una onda senoidal pura, el valor RMS es aproximadamente 0,7071 veces el valor pico.

## Fórmula de conversión

La relación matemática entre el valor RMS y el valor pico para una forma de onda senoidal se deriva de la definición de raíz cuadrática media. Para la tensión eficaz se tiene:

> **Urms = Upico / √2 ≈ 0,7071 × Upico**

La expresión inversa, para obtener el valor pico a partir del RMS, es:

> **Upico = Urms × √2 ≈ 1,414 × Urms**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| Urms | Tensión eficaz (Root Mean Square) | V / V |
| Upico | Tensión máxima o amplitud de la sinusoide | V / V |
| √2 | Factor de cresta para onda senoidal (adimensional) | ~1,4142 / ~1,4142 |

Estas relaciones son idénticas para la corriente alterna, sustituyendo la tensión por la corriente (Irms e Ipico). La equivalencia es válida exclusivamente para formas de onda senoidales puras; otras formas de onda poseen distintos factores de cresta.

## Relación entre valores característicos

En una señal de corriente alterna senoidal se distinguen tres valores característicos de amplitud: el valor RMS o eficaz, el valor pico (máximo instantáneo) y el valor pico a pico (diferencia entre el máximo positivo y el máximo negativo). Sus relaciones numéricas son:

| Parámetro | Fórmula basada en Upico | Ejemplo para Upico = 325 V / 325 V |
| --- | --- | --- |
| Valor RMS (Urms) | Upico / √2 | 230 V / 230 V |
| Valor pico (Upico) | Upico | 325 V / 325 V |
| Valor pico a pico (Upp) | 2 × Upico | 650 V / 650 V |

La relación pico a pico respecto al RMS se expresa como **Upp = 2√2 × Urms ≈ 2,828 × Urms**. Este factor es constante para cualquier señal senoidal, independientemente de su frecuencia o amplitud.

## Valores normalizados en instalaciones eléctricas

Los sistemas de distribución de energía eléctrica especifican sus tensiones en valores RMS. La tensión máxima o pico es inherentemente superior y determina los requisitos de aislamiento de los equipos conectados a la red. Para las dos tensiones normalizadas más comunes se obtienen los siguientes valores pico:

| Sistema | Tensión nominal RMS | Tensión pico (Upico = Urms × √2) |
| --- | --- | --- |
| Europeo (monofásico) | 230 V / 230 V | 325 V / 325 V |
| Norteamericano (monofásico) | 120 V / 120 V | 170 V / 170 V |

Los voltímetros y amperímetros de corriente alterna muestran siempre el valor RMS, no el valor pico ni el instantáneo. Esto permite calcular directamente la potencia activa en cargas resistivas mediante las expresiones clásicas de la ley de Ohm.

## Factor de cresta y factor de forma

El factor de cresta y el factor de forma son dos coeficientes adimensionales que caracterizan la geometría de una forma de onda periódica. El factor de cresta define la relación entre el valor pico y el valor RMS:

> **Factor de cresta = Upico / Urms**

Para una onda senoidal pura, el factor de cresta es √2 ≈ 1,414. El factor de forma relaciona el valor RMS con el valor medio absoluto de la señal rectificada:

> **Factor de forma = Urms / Umed**

| Parámetro | Valor para onda senoidal pura |
| --- | --- |
| Factor de cresta (Upico/Urms) | 1,414 / 1,414 |
| Factor de forma (Urms/Umed) | 1,111 / 1,111 |

Estos factores se utilizan para evaluar la calidad de una señal de alimentación. Una distorsión armónica eleva el factor de cresta por encima de 1,414, lo que puede provocar disparos intempestivos de protecciones o sobrecalentamiento en transformadores.

## Cálculo del valor RMS por el método analítico

El método analítico determina el valor RMS de una función continua mediante integración en un periodo completo. Para una función periódica cualquiera v(t) definida entre t1 y t2, la expresión general es:

> **Vrms = √[ (1/T) × ∫0T v(t)² dt ]**

Para una tensión senoidal de la forma v(t) = Upico × sen(ωt), la integración evaluada sobre un periodo completo T = 2π/ω produce:

> **Vrms = Upico / √2**

| Símbolo | Significado | Unidad |
| --- | --- | --- |
| Vrms | Tensión eficaz (raíz cuadrática media) | V / V |
| T | Periodo de la señal | s / s |
| v(t) | Tensión instantánea en función del tiempo | V / V |
| Upico | Amplitud máxima de la sinusoide | V / V |

El método gráfico constituye una alternativa práctica cuando la forma de onda no es simétrica o analíticamente integrable. Consiste en muestrear la señal en n intervalos equidistantes, elevar cada muestra al cuadrado, promediar los cuadrados y extraer la raíz cuadrada del resultado.

## Valores RMS en formas de onda no senoidales

Las relaciones entre valor RMS, valor medio y valor pico varían significativamente según la geometría de la onda. La siguiente tabla recoge los factores de forma y de cresta para las formas de onda periódicas más comunes en electrónica de potencia y análisis de señales.

| Forma de onda | Factor de forma (Urms / Umed) | Factor de cresta (Upico / Urms) |
| --- | --- | --- |
| Senoidal | 1,111 / 1,111 | 1,414 / 1,414 |
| Triangular | 1,155 / 1,155 | 1,732 / 1,732 |
| Cuadrada (50 % ciclo de trabajo) | 1,0 / 1,0 | 1,0 / 1,0 |
| Diente de sierra | 1,155 / 1,155 | 1,732 / 1,732 |
| Rectificada de onda completa (seno) | 1,111 / 1,111 | 1,414 / 1,414 |
| Rectificada de media onda (seno) | 1,571 / 1,571 | 2,0 / 2,0 |

Para una onda cuadrada simétrica, el valor RMS coincide exactamente con el valor pico, ya que la tensión permanece constante en cada semiperiodo. En una onda triangular, la relación pico a RMS asciende a √3 ≈ 1,732, lo que implica que, para una misma potencia, la amplitud pico requerida es mayor que en el caso senoidal.

## Preguntas frecuentes (FAQ)

### ¿Por qué se usa el valor RMS en corriente alterna en lugar del valor pico?

El valor RMS representa la capacidad efectiva de una señal alterna para realizar trabajo sobre una carga resistiva. Equivale al valor de corriente continua que produciría la misma disipación de potencia, lo que permite aplicar directamente las fórmulas de la ley de Ohm y el cálculo de potencia activa sin necesidad de integrar la forma de onda.

### ¿El factor 0,707 es válido para cualquier forma de onda?

No. La relación Urms = 0,707 × Upico es exclusiva de ondas senoidales puras. Para una onda triangular, el factor es aproximadamente 0,577 (1/√3), y para una onda cuadrada es exactamente 1,0. Aplicar el factor senoidal a una señal distorsionada introduce errores significativos en la medición.

### ¿Cómo se relaciona el valor pico a pico con el valor RMS?

El valor pico a pico equivale a 2√2 veces el valor RMS, es decir, aproximadamente 2,828 × Urms. Esta relación se deduce directamente de Upp = 2 × Upico y Upico = √2 × Urms. En una red de 230 V RMS, la tensión pico a pico es de unos 650 V.

### ¿Qué mide un multímetro en alterna, valor RMS o valor pico?

Los multímetros estándar miden el valor RMS calibrado para ondas senoidales. Los modelos de verdadero valor eficaz (true RMS) calculan el RMS real de la señal independientemente de su forma de onda, lo cual es imprescindible cuando existen componentes armónicas o la señal no es perfectamente senoidal.

### ¿Cuál es la tensión pico en una red doméstica de 230 V?

La tensión pico de una red doméstica europea de 230 V RMS es de aproximadamente 325 V (230 × √2). Para una red norteamericana de 120 V RMS, el valor pico es de aproximadamente 170 V. Este valor determina la tensión de aislamiento que deben soportar los equipos conectados.

### ¿Qué significan los factores de cresta y de forma?

El factor de cresta es el cociente entre el valor pico y el valor RMS (1,414 para onda senoidal), y el factor de forma es el cociente entre el valor RMS y el valor medio rectificado (1,111 para onda senoidal). Un factor de cresta elevado indica picos de corriente que pueden saturar transformadores o disparar protecciones.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ac-circuit-d_1933.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/tools/rms-voltage-calculator/
- **electrical4u.com**: https://www.electrical4u.com/rms-or-root-mean-square-value-of-ac-signal/
