---
title: "Fórmulas de potencia eléctrica"
sidebar:
  label: "Fórmulas de potencia eléctrica"
description: "Ficha tecnica: Fórmulas de potencia eléctrica"
keywords: ["electrical power formula P V I watts", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "fundamentals"
subcategory: "power-formulas"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La potencia eléctrica se expresa en vatios (W), donde 1 W equivale a 1 julio por segundo (J/s), y constituye la magnitud fundamental para dimensionar y analizar cualquier circuito. En corriente continua, la potencia se calcula como el producto de la tensión aplicada y la corriente que circula, relación conocida como la fórmula de potencia básica.

## Fórmula fundamental de potencia

La relación directa entre potencia, tensión y corriente se expresa mediante la ecuación:

> **P = V · I**

donde:

- **P** es la potencia en vatios (W),
- **V** representa la tensión o diferencia de potencial en voltios (V),
- **I** es la intensidad de corriente en amperios (A).

Esta expresión indica que un circuito que consume 1 W disipa o transforma 1 J de energía cada segundo cuando por él circula 1 A bajo una tensión de 1 V.

## Formas equivalentes según la Ley de Ohm

Combinando la fórmula fundamental con la Ley de Ohm (V = I · R) se obtienen otras dos variantes muy utilizadas en análisis de circuitos:

> **P = I² · R**

> **P = V² / R**

La primera resulta útil cuando se conoce la resistencia y la corriente que la atraviesa, mientras que la segunda evita calcular la corriente si se dispone de la tensión y la resistencia.

## Tabla de variables y unidades

| Símbolo | Magnitud | Unidad SI | Definición breve |
| --- | --- | --- | --- |
| P | Potencia | Vatio (W) | Tasa de transferencia de energía; 1 W = 1 J/s. |
| V | Tensión (voltaje) | Voltio (V) | Diferencia de potencial eléctrico. |
| I | Corriente | Amperio (A) | Flujo de carga eléctrica; 1 A = 1 C/s. |
| R | Resistencia | Ohmio (Ω) | Oposición al paso de la corriente. |

## Ejemplos de cálculo

### Ejemplo 1 – Potencia disipada por una resistencia

Una batería de 12 V alimenta una resistencia de 18 Ω. La potencia consumida por la resistencia se determina con la fórmula P = V² / R:

> **P = (12 V)² / (18 Ω) = 144 / 18 = 8 W**

La corriente que circula puede verificarse con P = V · I:

> **I = P / V = 8 W / 12 V ≈ 0,67 A**

En 60 segundos la energía disipada será:

> **W = P · t = 8 W · 60 s = 480 J (W·s)**

### Ejemplo 2 – Cálculo de corriente a partir de potencia y tensión

Una lámpara incandescente de 60 W se conecta a una red doméstica de 120 V. La corriente que demanda se obtiene despejando I = P / V:

> **I = 60 W / 120 V = 0,5 A**

Si la misma lámpara se conectara a 230 V, la corriente sería:

> **I = 60 W / 230 V ≈ 0,26 A**

### Ejemplo 3 – Capacidad de un circuito doméstico

Un circuito residencial típico está protegido por un interruptor de 15 A a 120 V. La potencia máxima que puede suministrar sin dispararse es:

> **P = V · I = 120 V · 15 A = 1800 W**

Esto significa que se pueden conectar, por ejemplo, tres luminarias de 500 W (1500 W totales) manteniendo un margen de seguridad de 300 W.

## Potencia en corriente alterna

En sistemas de corriente alterna (CA) la tensión y la corriente pueden no estar en fase. La potencia activa realmente consumida se relaciona con la potencia aparente mediante el factor de potencia (FP):

> **P = V · I · FP   (monofásica)**

> **P₃ɸ = √3 · Vₗ · Iₗ · FP   (trifásica)**

La potencia aparente (S) se mide en voltamperios (VA) y la potencia reactiva (Q) en voltamperios reactivos (VAR). La potencia activa (P, en W) es la que realiza trabajo útil.

## Aplicaciones típicas

- Dimensionamiento de conductores y protecciones eléctricas en instalaciones residenciales e industriales.
- Cálculo del consumo energético de equipos (kWh) para la facturación eléctrica.
- Selección de fuentes de alimentación, convertidores y sistemas de respaldo.
- Determinación de la disipación térmica en componentes electrónicos (potencia en forma de calor).
- Análisis de eficiencia en motores eléctricos mediante la relación entre potencia eléctrica de entrada y potencia mecánica de salida.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre la Ley de Watt y la Ley de Ohm?

La Ley de Ohm establece la relación entre tensión, corriente y resistencia (V = I · R), mientras que la Ley de Watt relaciona la potencia con la tensión y la corriente (P = V · I). Ambas se combinan para obtener las formas alternativas de potencia P = I²R y P = V²/R.

### ¿Qué significa que un dispositivo tenga un consumo de 1 kW?

Significa que el dispositivo consume 1000 julios de energía eléctrica cada segundo. En una hora de funcionamiento, habrá utilizado 1 kilovatio‑hora (kWh), unidad que las compañías eléctricas emplean para facturar el consumo.

### ¿Cómo se calcula la potencia en un circuito trifásico?

La potencia activa trifásica se calcula con P = √3 · Vₗ · Iₗ · FP, donde Vₗ es la tensión de línea, Iₗ la corriente de línea y FP el factor de potencia. Si la carga es equilibrada y resistiva (FP = 1), la fórmula se simplifica a P = √3 · Vₗ · Iₗ.

### ¿Por qué en corriente alterna se habla de potencia aparente y potencia activa?

Porque la tensión y la corriente pueden estar desfasadas debido a elementos reactivos (bobinas y condensadores). La potencia aparente (V·I) representa la capacidad total que debe manejar el sistema, mientras que la potencia activa (V·I·FP) es la porción que efectivamente se transforma en trabajo útil.

### ¿Qué significa un factor de potencia bajo?

Un factor de potencia inferior a 1 indica que parte de la corriente circulante no contribuye al trabajo útil, lo que obliga a sobredimensionar cables y transformadores. Muchas compañías eléctricas penalizan económicamente los valores bajos de FP para incentivar su corrección.

### ¿Afecta la temperatura al cálculo de la potencia en una resistencia?

La resistencia de muchos materiales varía con la temperatura, lo que modifica las corrientes y las tensiones en el circuito. Para cálculos precisos de potencia en régimen térmico, debe emplearse la resistencia a la temperatura de operación, y no el valor nominal a 20 °C.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/calculating-electric-power/
- **electrical4u.com**: https://www.electrical4u.com/watts-law/
