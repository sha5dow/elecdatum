---
title: "Capacidad de interrupción de interruptores kA"
sidebar:
  label: "Capacidad de interrupción de interruptores kA"
description: "Ficha tecnica: Capacidad de interrupción de interruptores kA"
keywords: ["circuit breaker interrupting capacity kA AIC", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breakers"
subcategory: "breaker-interrupting-capacity"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
La capacidad de interrupción —también llamada poder de corte o *interrupting rating*— de un interruptor automático es la máxima corriente de cortocircuito que el dispositivo puede extinguir de forma segura sin sufrir daños permanentes ni prolongar el arco eléctrico de manera inaceptable. Se expresa comúnmente en kiloamperios (kA) y constituye un parámetro determinante para la protección de vidas e instalaciones.

## Capacidad de interrupción de cortocircuito (Icu)

Representa el valor eficaz (RMS) de la corriente de cortocircuito que un interruptor puede interrumpir una sola vez bajo condiciones normalizadas de ensayo. El dispositivo debe despejar la falla sin deterioro, aunque puede quedar inutilizado para servicio continuo. La Icu se asigna a una tensión nominal específica.

| Tipo de interruptor automático | Icu típica (kA / AIC) |
| --- | --- |
| Interruptor magnetotérmico residencial (curva B/C, 6 A – 63 A) | 6 kA / 6 000 AIC |
| Interruptor magnetotérmico de uso terciario | 10 kA / 10 000 AIC |
| Interruptor de caja moldeada (MCCB) distribución secundaria | 25 kA – 50 kA / 25 000 – 50 000 AIC |
| Interruptor de potencia de baja tensión (ACB) | 50 kA – 150 kA / 50 000 – 150 000 AIC |
| Interruptor de potencia industrial para grandes plantas | 200 kA / 200 000 AIC |

## Capacidad de interrupción de servicio (Ics)

Es la corriente de cortocircuito que el interruptor puede interrumpir repetidamente y continuar operando dentro de sus especificaciones. Se expresa como porcentaje de la Icu y refleja la robustez para el servicio post‑falla.

| Familia de interruptores | Ics (% de Icu) |
| --- | --- |
| Interruptor magnetotérmico modular | 50 % – 75 % |
| Caja moldeada (MCCB) estándar | 50 % – 100 % |
| Interruptor de potencia (ACB) | 75 % – 100 % |

## Capacidad de cierre (Icm)

Define el valor de cresta de la corriente que el interruptor puede establecer en condiciones de cortocircuito. Es siempre mayor que la Icu porque el primer pico asimétrico de la corriente de falla puede alcanzar hasta 2,5 veces el valor eficaz simétrico. La Icm se expresa en kiloamperios pico (kAp).

> **Icm = n × Icu**

donde:

| Variable | Significado | Unidad |
| --- | --- | --- |
| Icm | Capacidad de cierre (valor de cresta) | kA pico / A pico |
| Icu | Capacidad de interrupción última (RMS) | kA / A |
| n | Factor de pico (depende del factor de potencia del circuito) | adimensional |

| Factor de potencia (cos φ) | Factor de pico n (aproximado) |
| --- | --- |
| 0.3 | 2.5 |
| 0.5 | 2.2 |
| 0.7 | 1.7 |

## Corriente admisible de corta duración (Icw)

Es la corriente que el interruptor puede soportar en posición cerrado durante un tiempo definido sin que se produzcan daños térmicos o mecánicos. Garantiza la selectividad y permite el funcionamiento de protecciones aguas abajo.

| Duración normalizada | Relación típica Icw/Icu |
| --- | --- |
| 1 s | 1.0 (Icw = Icu) |
| 3 s | 0.8 – 1.0 |

## Secuencia normalizada de maniobras

Los interruptores automáticos se ensayan conforme a un ciclo que simula la operación real frente a una falta, según IEC 60947-2:

**O - t - CO - t’ - CO**

donde:

- **O**: apertura.
- **CO**: cierre seguido inmediatamente de apertura.
- **t**: intervalo de 0,3 s para interruptores con reenganche automático.
- **t’**: intervalo de 3 min (o 15 min para aparatos sin mantenimiento intermedio).

## Cálculo de la corriente de cortocircuito prospectiva

Para seleccionar la capacidad de interrupción adecuada es imprescindible conocer la corriente de cortocircuito que realmente puede circular en el punto de instalación.

> **Icc = V / Z_total**

| Variable | Significado | Unidad |
| --- | --- | --- |
| Icc | Corriente de cortocircuito prospectiva | kA / A |
| V | Tensión fase‑neutro (circuito monofásico) | V |
| Z_total | Impedancia total del lazo de falla (incluye red, transformador, cables) | Ω / mΩ |

Ejemplo práctico: en una instalación monofásica de 230 V con una impedancia de lazo medida de 0,05 Ω, la corriente de cortocircuito resulta Icc = 230 V / 0,05 Ω = 4 600 A ≈ **4,6 kA / 4 600 AIC**. Ello exigiría un interruptor con Icu ≥ 6 kA.

## Factores que influyen en la capacidad de interrupción

- **Tensión de operación**: a mayor tensión, menor capacidad de interrupción para un mismo diseño.
- **Tipo de corriente**: en CC la interrupción es más exigente porque la corriente no pasa por cero de forma natural.
- **Factor de potencia y componente asimétrica**: circuitos muy inductivos (bajo cos φ) generan picos elevados que fuerzan la capacidad de cierre y la extinción.
- **Frecuencia**: frecuencias superiores a 50/60 Hz modifican la rigidez dieléctrica del medio de extinción y pueden reducir la capacidad de ruptura.

## Selección del interruptor automático

La regla básica es que la capacidad de interrupción del interruptor sea igual o superior a la corriente de cortocircuito prospectiva máxima en su ubicación:

**Icu ≥ Icc prospectiva**

Además deben considerarse:

- La tensión asignada del aparato debe coincidir con la de la red.
- La Ics debe ser suficiente si el interruptor va a maniobrar repetidamente tras una falta.
- En puntos próximos a transformadores de potencia o generadores, las corrientes de cortocircuito son mayores y se requieren capacidades de 25 kA a 150 kA o superiores.

## Preguntas frecuentes (FAQ)

### ¿Qué significa kA en un interruptor automático?

Indica la capacidad de interrupción expresada en kiloamperios. Por ejemplo, 10 kA significa que el interruptor puede extinguir de forma segura una corriente de cortocircuito de hasta 10 000 A eficaces sin dañarse.

### ¿Cuál es la diferencia entre Icu e Ics?

La Icu es la capacidad de interrupción última con un único disparo (el equipo puede quedar fuera de servicio), mientras que la Ics es la capacidad de interrupción de servicio que el interruptor puede manejar repetidamente y seguir funcionando dentro de especificaciones.

### ¿Cómo se calcula la capacidad de interrupción necesaria para una instalación?

Se calcula la corriente de cortocircuito prospectiva en bornes del interruptor (Icc = V / Z_total) y se elige un dispositivo con Icu ≥ Icc. Es habitual solicitar al operador de red el valor máximo de cortocircuito disponible en el punto de suministro.

### ¿Qué sucede si se supera la capacidad de interrupción del interruptor?

El equipo podría fallar catastróficamente: los contactos pueden soldarse, la carcasa romperse y el arco eléctrico no extinguirse, con alto riesgo de incendio y daños personales.

### ¿Los interruptores tienen diferentes capacidades de interrupción según la tensión?

Sí. Un mismo interruptor puede tener una Icu de 50 kA a 415 V y solo 10 kA a 690 V. La capacidad de interrupción siempre debe referirse a la tensión de servicio real de la instalación.

### ¿Qué normativa regula la capacidad de interrupción de los interruptores automáticos?

La norma internacional IEC 60947-2 define los requisitos para interruptores de baja tensión (Icu, Ics, Icw, Icm). En Norteamérica, el *National Electrical Code* (NEC) y la norma UL 489 establecen valores en amperios (AIC) para *circuit breakers*.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **electrical4u.com**: https://www.electrical4u.com/rating-of-circuit-breaker-short-circuit-breaking-making-current/
