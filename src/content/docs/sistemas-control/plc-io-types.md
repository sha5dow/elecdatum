---
title: "Tipos de entradas y salidas de PLC"
sidebar:
  label: "Tipos de entradas y salidas de PLC"
description: "Ficha tecnica: Tipos de entradas y salidas de PLC"
keywords: ["PLC digital analog input output types", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "plc-io-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los controladores lógicos programables (PLC) interactúan con el proceso mediante entradas y salidas (E/S) que pueden clasificarse en dos grandes familias: digitales (discretas) y analógicas. Las señales digitales poseen únicamente dos estados lógicos, mientras que las analógicas varían de forma continua dentro de un rango. La elección del tipo de E/S depende de la naturaleza del sensor o actuador, la precisión requerida y las condiciones ambientales.

## Entradas y salidas digitales

Las entradas digitales discretas operan con dos niveles de tensión definidos, típicamente 0 V (estado bajo) y 24 V CC (estado alto) en aplicaciones industriales. Una señal digital es una señal binaria con dos estados distintos — 1 (ON) y 0 (OFF) — y se utiliza para detectar eventos discretos como finales de carrera, pulsadores o detectores de presencia. Las salidas digitales permiten gobernar actuadores todo/nada: contactores, electroválvulas, lámparas o arrancadores de motor. Según la naturaleza de la carga y la frecuencia de conmutación, se emplean distintos tipos de etapa de salida, cuyas características se resumen en la siguiente tabla.

| Tipo de salida | Ventaja principal | Corriente máxima típica por punto | Aplicación habitual |
| --- | --- | --- | --- |
| Relé electromecánico | Aislamiento galvánico, apta para CA y CC | 2 A / 2 A (no aplica conversión) | Cargas resistivas e inductivas de baja frecuencia |
| Transistor (colector abierto) | Conmutación rápida, larga vida útil | 0,5 A / 0,5 A (no aplica) | Cargas de CC con alta frecuencia de ciclo (hasta 1 kHz / 1 kHz) |
| Triac (estado sólido para CA) | Conmutación sin contacto, silenciosa | 1 A / 1 A (no aplica) | Cargas de CA con maniobras frecuentes (hasta 25 Hz / 25 Hz) |

## Entradas y salidas analógicas

La señal analógica de corriente más extendida es el lazo de 4‑20 mA, que utiliza un rango útil de 16 mA (20 mA − 4 mA) para representar la variable de proceso desde el 0 % hasta el 100 %. Las entradas analógicas convierten magnitudes físicas continuas (temperatura, presión, caudal, nivel) en números digitales que el PLC puede procesar. Además del lazo de corriente, se emplean señales de tensión de 0‑10 V, ±10 V y, en menor medida, 0‑5 V. Las salidas analógicas generan una señal continua — típicamente 4‑20 mA o 0‑10 V — para posicionar válvulas proporcionales, regular variadores de frecuencia o enviar consignas a otros controladores.

| Señal de entrada | Rango nominal | Impedancia típica de entrada | Nota |
| --- | --- | --- | --- |
| Corriente (activa o pasiva) | 4‑20 mA / 4‑20 mA (unidad sin conversión) | 50‑500 Ω / 50‑500 Ω | Detecta rotura de cable si la corriente cae por debajo de 3,6 mA |
| Tensión unipolar | 0‑10 V CC / 0‑10 V CC | > 10 kΩ / > 0,01 MΩ | Admite divisor de tensión para adaptar señales elevadas |
| Tensión bipolar | −10 a +10 V CC / −10 a +10 V CC | > 10 kΩ / > 0,01 MΩ | Usada en servoposicionadores y control de movimiento |
| Termopar (mV) | −10 a 80 mV / −10 a 80 mV | > 1 MΩ / > 1 MΩ | Requiere compensación de unión fría (CJC) |
| RTD (Pt100, Pt1000) | Resistencia variable (100‑138,5 Ω para Pt100 a 100 °C) | Medida por inyección de corriente | Necesita conexión a 2, 3 o 4 hilos para eliminar error de cable |

## Señales estándar en E/S analógicas

Los estándares industriales definen las señales analógicas de corriente en los rangos 0‑20 mA y 4‑20 mA, siendo este último el predominante por su capacidad de diagnóstico. La señal de 4‑20 mA permite al sistema identificar un fallo de cableado (0 mA) y tolera caídas de tensión mayores gracias a la inmunidad de los lazos de corriente frente a interferencias electromagnéticas. Las señales de tensión de 0‑10 V y ±10 V son fáciles de generar y medir, pero resultan más sensibles al ruido y a las caídas de tensión en cables largos, por lo que se reservan para distancias cortas (inferiores a 10 m / 33 ft habitualmente).

| Estándar | Rango de señal | Diagnóstico de fallo | Distancia máxima recomendada |
| --- | --- | --- | --- |
| 4‑20 mA | 4 a 20 mA / 4 a 20 mA | Sí (I < 3,6 mA indica rotura) | 1000 m / 3281 ft (con cable apantallado) |
| 0‑20 mA | 0 a 20 mA / 0 a 20 mA | No fiable | 1000 m / 3281 ft |
| 0‑10 V | 0 a 10 V CC / 0 a 10 V CC | Muy limitado | 10 m / 33 ft |
| ±10 V | −10 a +10 V CC / −10 a +10 V CC | Muy limitado | 10 m / 33 ft |

## Convertidor analógico‑digital y resolución

Un convertidor A/D de 12 bits divide el rango analógico en 4096 niveles discretos (2¹² = 4096). El convertidor muestrea la señal continua y la cuantifica en escalones cuyo valor mínimo depende del número de bits. La resolución se calcula como:

> **Resolución = (Fondo de escala) / (2ⁿ − 1)**

| Variable | Descripción |
| --- | --- |
| Fondo de escala | Rango máximo de la señal analógica (ej. 16 mA para 4‑20 mA, 10 V para 0‑10 V) |
| n | Número de bits del convertidor (12, 14, 16 son valores comunes en PLC) |

Con un convertidor de 16 bits se obtienen 65 536 divisiones, lo que permite una resolución de 0,24 µA por bit en un lazo de 4‑20 mA y resulta suficiente para aplicaciones de pesaje o dosificación de alta precisión.

## Tabla comparativa: E/S digitales vs analógicas

| Característica | Entrada/Salida Digital | Entrada/Salida Analógica |
| --- | --- | --- |
| Estados posibles | 2 (1 / 0) | Continuos (resolución limitada por el convertidor) |
| Señal eléctrica típica | 0 / 24 V CC, 0 / 120‑230 V CA | 4‑20 mA, 0‑10 V, ±10 V, mV, Ω |
| Inmunidad al ruido | Muy alta (umbrales bien definidos) | Media (susceptible a interferencia, requiere apantallamiento) |
| Cableado | 2 hilos digitales | 2, 3 o 4 hilos según sensor |
| Diagnóstico de fallo | Solo detección de cortocircuito o sobrecarga en salidas | Detección de lazo abierto (4‑20 mA) y fuera de rango |
| Aplicaciones representativas | Detectores ON/OFF, finales de carrera, arranque de motores | Control PID, medición de temperatura, caudal, presión, posicionamiento |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia fundamental entre una entrada digital y una analógica en un PLC?
La entrada digital solo reconoce dos estados lógicos (0 o 1), mientras que la entrada analógica interpreta una señal continua y la convierte en un valor numérico proporcional mediante un convertidor A/D, lo que permite medir magnitudes físicas con gran precisión.

### ¿Por qué se prefiere la señal de 4‑20 mA frente a 0‑20 mA o 0‑10 V?
El lazo de 4‑20 mA permite diagnosticar una rotura de cable (0 mA) y es inmune a caídas de tensión en largas distancias, además de que los transmisores de dos hilos pueden alimentarse directamente del lazo.

### ¿Cómo se conecta un sensor analógico de 4‑20 mA a un PLC?
Depende del tipo de sensor: los de dos hilos se conectan en serie con la fuente de alimentación y la entrada del módulo; los de tres hilos y cuatro hilos llevan alimentación independiente. El módulo de entrada debe configurarse en modo corriente y, a menudo, incluye una resistencia de 250 Ω para convertir la corriente en tensión.

### ¿Qué resolución es necesaria para una aplicación de control de temperatura con RTD Pt100?
Con un módulo de 16 bits se alcanza una resolución inferior a 0,1 °C / 0,18 °F en el rango de trabajo. Para lazos de calefacción generales suele ser suficiente una resolución de 12 bits (aprox. 0,1 % del fondo de escala), pero en procesos que exigen alta estabilidad se recomienda 14 o 16 bits.

### ¿Se puede reutilizar un canal de entrada digital como contador rápido?
Algunas entradas digitales especiales de los PLC soportan funciones de contador de alta velocidad (hasta 200 kHz / 200 000 pulsos por segundo), pero no todas las entradas estándar pueden hacerlo; es necesario consultar la ficha técnica del módulo.

### ¿Qué tipos de salidas digitales existen y cuándo conviene cada una?
Las salidas por relé son universales y soportan CA y CC, pero tienen una vida mecánica limitada (del orden de 10⁵‑10⁶ ciclos). Las salidas transistorizadas conmutan rápidamente y son ideales para cargas de CC con alta frecuencia de maniobra. Las salidas por triac se emplean en cargas de CA que requieren operaciones sin contacto y silenciosas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-terms-d_666.html
- **plcacademy.com**: https://www.plcacademy.com/plc-analog-input-output/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/programmable_controllers/directlogic_plcs_(micro_to_small,_brick_-a-_modular)/analog_i-z-o
