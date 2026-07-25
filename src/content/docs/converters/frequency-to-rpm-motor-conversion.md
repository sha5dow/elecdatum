---
title: "Conversión de frecuencia a RPM en motores"
sidebar:
  label: "Conversión de frecuencia a RPM en motores"
description: "Ficha tecnica: Conversión de frecuencia a RPM en motores"
keywords: ["frequency RPM motor conversion table poles", "converters"]
category: "converters"
topic: "frequency-units"
subcategory: "frequency-to-rpm-motor-conversion"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La velocidad síncrona de un motor de inducción de 2 polos alimentado a 50 Hz es de 3000 rpm (314,16 rad/s), mientras que a 60 Hz alcanza 3600 rpm (376,99 rad/s). La velocidad real a plena carga es ligeramente inferior debido al deslizamiento, situándose alrededor de 2850 rpm (298,45 rad/s) y 3450 rpm (361,28 rad/s) respectivamente. La relación entre frecuencia, número de polos magnéticos y velocidad de giro es una de las conversiones más utilizadas en el dimensionamiento y análisis de motores eléctricos de corriente alterna.

## Principio de conversión
A 50 Hz, un motor de 4 polos gira sincrónicamente a 1500 rpm (157,08 rad/s). La velocidad de rotación del campo magnético del estator —velocidad síncrona— es directamente proporcional a la frecuencia de la red e inversamente proporcional al número de pares de polos. En un motor real, el rotor nunca alcanza la velocidad síncrona; la diferencia se expresa mediante el deslizamiento, que suele estar entre el 2 % y el 5 % a plena carga. Esta conversión permite predecir la velocidad nominal de cualquier motor de inducción conociendo únicamente la frecuencia de alimentación y el número de polos.

## Fórmula
La expresión que relaciona la frecuencia de alimentación (f) en hertz (Hz), el número de polos (p) del motor y la velocidad síncrona (Ns) en revoluciones por minuto (rpm) es:

> **Ns (rpm) = (120 × f) / p**

Donde:
- **Ns** = velocidad síncrona en revoluciones por minuto (rpm)
- **f** = frecuencia de la red de alimentación en hertz (Hz)
- **p** = número total de polos magnéticos del estator (número par, típicamente 2, 4, 6, 8…)

Para obtener la velocidad angular síncrona (ωs) en radianes por segundo (rad/s) se utiliza:

> **ωs (rad/s) = (4π × f) / p = (2π × Ns) / 60**

La velocidad real a plena carga (N) se calcula considerando el deslizamiento (s):

> **N = Ns × (1 − s)**

## Tabla de velocidades por número de polos y frecuencia
La siguiente tabla recoge las velocidades síncronas y a plena carga para motores de 2, 4, 6 y 8 polos a las frecuencias normalizadas de 50 Hz y 60 Hz.

| Polos | Frecuencia (Hz) | Velocidad síncrona (rpm / rad/s) | Velocidad a plena carga (rpm / rad/s) |
| --- | --- | --- | --- |
| 2 | 50 | 3000 rpm / 314,16 rad/s | 2850 rpm / 298,45 rad/s |
| 2 | 60 | 3600 rpm / 376,99 rad/s | 3450 rpm / 361,28 rad/s |
| 4 | 50 | 1500 rpm / 157,08 rad/s | 1425 rpm / 149,23 rad/s |
| 4 | 60 | 1800 rpm / 188,50 rad/s | 1725 rpm / 180,64 rad/s |
| 6 | 50 | 1000 rpm / 104,72 rad/s | 950 rpm / 99,48 rad/s |
| 6 | 60 | 1200 rpm / 125,66 rad/s | 1150 rpm / 120,43 rad/s |
| 8 | 50 | 750 rpm / 78,54 rad/s | 700 rpm / 73,30 rad/s |
| 8 | 60 | 900 rpm / 94,25 rad/s | 850 rpm / 89,01 rad/s |

## Ejemplo de cálculo
Para un motor de 6 polos alimentado a 60 Hz, la velocidad síncrona teórica se calcula como 120 × 60 / 6 = 1200 rpm (125,66 rad/s). Con un deslizamiento típico del 4 % (s = 0,04), la velocidad a plena carga sería 1200 × (1 − 0,04) = 1152 rpm (120,63 rad/s). Este resultado coincide prácticamente con el valor tabulado de 1150 rpm (120,43 rad/s), ligeramente ajustado por el deslizamiento real del motor normalizado.

## Preguntas frecuentes (FAQ)
### ¿Qué es la velocidad síncrona en un motor de inducción?
Es la velocidad de rotación del campo magnético giratorio creado por el estator. Depende exclusivamente de la frecuencia de alimentación y del número de polos, y representa el límite superior al que puede girar el rotor. El rotor siempre gira a una velocidad ligeramente inferior debido al deslizamiento necesario para inducir corriente en él.

### ¿Cómo influye el número de polos en la velocidad del motor?
A mayor número de polos, menor velocidad síncrona para una misma frecuencia. Por ejemplo, a 50 Hz un motor de 2 polos gira a 3000 rpm, mientras que uno de 8 polos lo hace a 750 rpm. La velocidad es inversamente proporcional al número de polos.

### ¿Cuál es el deslizamiento típico y cómo afecta la velocidad real?
El deslizamiento a plena carga suele ser del 2 % al 5 % en motores de inducción estándar. La velocidad real se obtiene restando ese porcentaje de la velocidad síncrona: por ejemplo, un motor de 4 polos a 50 Hz con 1500 rpm síncronas gira a 1425 rpm con un deslizamiento del 5 %.

### ¿Qué fórmula relaciona frecuencia, número de polos y velocidad?
La fórmula fundamental es Ns = (120 × f) / p, con Ns en rpm, f en Hz y p el número de polos. Para obtener la velocidad angular en rad/s se multiplica Ns por 2π/60 o se usa ωs = (4π × f) / p.

### ¿Cómo se convierten las rpm a radianes por segundo?
Para convertir una velocidad en revoluciones por minuto (rpm) a radianes por segundo (rad/s) se multiplica por 2π/60, es decir, por 0,10472. Por ejemplo, 3000 rpm equivalen a 3000 × 0,10472 ≈ 314,16 rad/s.

### ¿Por qué los motores de 50 Hz y 60 Hz tienen velocidades distintas?
Porque la velocidad síncrona es directamente proporcional a la frecuencia. Un motor diseñado para 50 Hz gira a 3000 rpm con 2 polos, mientras que a 60 Hz alcanza 3600 rpm con los mismos polos. Esta diferencia debe tenerse en cuenta al seleccionar motores para regiones con distinta frecuencia de red.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-frequency-speed-d_456.html
