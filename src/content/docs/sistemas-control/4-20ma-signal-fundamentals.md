---
title: "Señal de corriente 4-20 mA fundamentos"
sidebar:
  label: "Señal de corriente 4-20 mA fundamentos"
description: "Ficha tecnica: Señal de corriente 4-20 mA fundamentos"
keywords: ["4-20mA current loop signal fundamentals", "sistemas-control"]
category: "sistemas-control"
topic: "control-signals"
subcategory: "4-20ma-signal-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La señal de corriente de 4-20 mA es el estándar de transmisión analógica más extendido en la instrumentación industrial. En este bucle, 4 mA corresponde al 0 % del alcance de medida y 20 mA al 100 %, proporcionando un método robusto, autoalimentado y con alta inmunidad al ruido para comunicar variables de proceso entre sensores, controladores y actuadores.

La señal normalizada de 4-20 mA representa un intervalo de 16 mA donde 4 mA equivale al 0 % de la escala de medición y 20 mA al 100 %. Un transmisor de campo convierte la variable de proceso –temperatura, presión, caudal, nivel, etc.– en una corriente proporcional que circula por un par de conductores. El lazo se alimenta típicamente con 24 V CC / 24 V DC y, gracias al cero vivo de 4 mA, el propio bucle puede energizar el transmisor sin necesidad de fuentes adicionales. La relación lineal entre la corriente y la magnitud medida permite que cualquier dispositivo intercalado en el lazo (indicador, registrador, PLC) interprete directamente el valor de proceso.

## Características de la señal
El lazo de corriente 4-20 mA opera con un rango útil de 16 mA (de 4 a 20 mA) y permite detectar fallos cuando la corriente cae por debajo de 3,8 mA o supera 20,5 mA. Esta capacidad de autodiagnóstico es una de sus mayores fortalezas. Las corrientes fuera de la banda 3,8‑20,5 mA se interpretan como condición de avería.

| Corriente del lazo | Estado del sistema |
| --- | --- |
| < 3,8 mA / < 3,8 mA | Fallo: circuito abierto, alimentación insuficiente o transmisor apagado |
| 3,8 – 4 mA / 3,8 – 4 mA | Señal mínima válida (0 % del span) |
| 4 – 20 mA / 4 – 20 mA | Rango normal de operación |
| 20 – 20,5 mA / 20 – 20,5 mA | Señal máxima válida (100 % del span) |
| > 20,5 mA / > 20,5 mA | Fallo: cortocircuito, sobrecorriente o exceso de carga |

La precisión del lazo no se ve afectada por las caídas de tensión en el cableado, ya que la corriente es la misma en todos los puntos del circuito, lo que permite emplear largas tiradas de cable.

## Ventajas del lazo de corriente 4-20 mA
Los lazos 4-20 mA pueden recorrer distancias de hasta 1 500 m / 4 921 ft sin pérdida de precisión, siempre que la resistencia total del bucle no supere el límite de la fuente de alimentación. Entre las ventajas que consolidan este estándar figuran:

- **Alimentación integrada**: muchos transmisores son “loop‑powered”, es decir, se alimentan directamente del lazo, eliminando la necesidad de cableado adicional.
- **Inmunidad al ruido**: al ser un circuito de baja impedancia con par trenzado, la señal es resistente a interferencias electromagnéticas.
- **Detección de fallos intrínseca**: cualquier corriente inferior a 3,8 mA o superior a 20,5 mA alerta de manera inmediata de un fallo en el bucle.
- **Conversión sencilla**: basta una resistencia de precisión para transformar la corriente en tensión (por ejemplo, 250 Ω / 250 Ω produce 1‑5 V).
- **Interoperabilidad**: admite la inserción de indicadores, registradores o convertidores I/P (3‑15 psi) alimentados por el propio lazo.
- **Compatibilidad universal**: millones de dispositivos de distintos fabricantes soportan 4‑20 mA, lo que garantiza una integración inmediata.

## Configuraciones de lazo: dispositivos activos y pasivos
En un lazo 4-20 mA conviven normalmente un único dispositivo activo, que suministra una tensión típica de 24 V CC / 24 V DC, y varios dispositivos pasivos. El equipo activo (fuente o sinking) proporciona la energía, mientras que los pasivos (transmisores de dos hilos, indicadores, entradas de PLC) modulan o leen la corriente sin aportar alimentación.

| Tipo de dispositivo | Función | Ejemplo típico |
| --- | --- | --- |
| Activo (fuente) | Suministra la tensión y la corriente del lazo | Fuente de alimentación de 24 V DC, salida analógica de un PLC |
| Pasivo (loop‑powered) | Modula la corriente en función de la variable medida | Transmisor de presión de dos hilos |
| Pasivo (entrada) | Lee la corriente y la convierte en valor de ingeniería | Módulo de entrada analógica del PLC, indicador digital de panel |

Un lazo solo debe contener una fuente activa. La configuración más habitual emplea un transmisor de dos hilos (pasivo) alimentado por la propia tarjeta de entrada analógica del sistema de control, que actúa como elemento activo.

## Cableado y conexión a PLC
Las configuraciones de cableado más comunes para transmisores 4‑20 mA son de 2, 3 y 4 hilos. Los modelos de dos hilos concentran alimentación y señal en el mismo par, lo que simplifica la instalación y es la elección predominante en campo. Los transmisores de cuatro hilos separan claramente la alimentación (normalmente 120‑230 V CA / 120‑230 V AC) del bucle de señal, usándose cuando el sensor demanda una potencia elevada.

| Configuración | Hilos | Alimentación | Señal | Uso principal |
| --- | --- | --- | --- | --- |
| 2 hilos | 2 | A través del lazo | Corriente 4‑20 mA sobre los mismos hilos | Transmisores de presión, temperatura, nivel |
| 3 hilos | 3 | Dos hilos de alimentación + un hilo común para señal y 0 V | 4‑20 mA entre el hilo de señal y el común | Algunos sensores con electrónica activa |
| 4 hilos | 4 | Par independiente para alimentación | Par independiente para la señal 4‑20 mA | Caudalímetros másicos, analizadores, sensores de alta potencia |

Al cablear la entrada analógica de un PLC, es habitual conectar el positivo del transmisor al borne de +24 V de la fuente, el negativo al borne de entrada analógica y añadir una resistencia de derivación si el módulo solo admite tensión. Muchos módulos incorporan internamente una resistencia fija de 250 Ω para convertir 4‑20 mA en 1‑5 V.

## Escalado de la señal
La conversión lineal de la corriente de 4‑20 mA a unidades de ingeniería se realiza mediante una ecuación que emplea el intervalo de 16 mA. La expresión universal es:

> **EU = EU_min + ((I – 4) / 16) × (EU_max – EU_min)**

| Variable | Descripción | Unidades típicas |
| --- | --- | --- |
| EU | Valor resultante en unidades de ingeniería (temperatura, presión, caudal, etc.) | °C / °F, bar / psi, m³/h, etc. |
| I | Corriente del lazo | mA |
| EU_min | Valor de ingeniería correspondiente a 4 mA | °C / °F, bar / psi, etc. |
| EU_max | Valor de ingeniería correspondiente a 20 mA | °C / °F, bar / psi, etc. |

Cuando la señal ingresa a un PLC, el conversor A/D transforma la corriente (o la tensión equivalente) en un valor digital de N bits. Con una resolución de 12 bits (4 096 divisiones), la sensibilidad alcanza aproximadamente 0,0039 mA / 0,0039 mA por cuenta; con 16 bits llega a 0,00024 mA / 0,00024 mA.

## Integración con sistemas de control
Los módulos de entrada analógica de los PLC convierten la señal de 4‑20 mA en un valor digital con una resolución típica de 12 o 16 bits (4 096 a 65 536 divisiones). Estos módulos pueden alimentar directamente el lazo (modo activo) o recibir la señal de una fuente externa (modo pasivo). La implementación en escalera o texto estructurado incluye bloques de escalado que ejecutan la fórmula descrita, entregando una variable de proceso utilizable por los lazos PID, SCADA o sistemas de control distribuido (DCS). Además, existen indicadores digitales de panel loop‑powered, como los de las series DPM1‑A‑LP, que se insertan en serie sin necesidad de alimentación externa y muestran la magnitud medida con protección IP65.

## Preguntas frecuentes (FAQ)
### ¿Por qué se utiliza 4 mA como valor mínimo y no 0 mA?
El cero vivo de 4 mA permite distinguir una señal de proceso en su punto mínimo (0 %) de un lazo abierto o un fallo de alimentación, lo que otorga capacidad de autodiagnóstico continua. Además, esos 4 mA proporcionan la energía mínima para alimentar la electrónica de los transmisores loop‑powered incluso cuando la variable de proceso se encuentra en el fondo de escala.

### ¿Cómo se alimenta un transmisor de dos hilos en un lazo 4‑20 mA?
El transmisor recibe la alimentación a través del mismo par que transporta la señal. La fuente activa del lazo (habitualmente 24 V CC) entrega la tensión necesaria, y el transmisor regula el consumo de corriente entre 4 y 20 mA en función de la variable medida.

### ¿Cuál es la distancia máxima que puede alcanzar un lazo 4‑20 mA?
No existe una cifra fija universal, pero con 24 V CC y cable de cobre estándar se suelen alcanzar distancias de hasta 1 500 m / 4 921 ft, siempre que la resistencia total del bucle no exceda el valor máximo que la fuente puede manejar. La fórmula práctica es: R_máx (Ω) = (V_alimentación – V_mínima transmisor) / 0,02 A.

### ¿Qué sucede si se conectan varios dispositivos en serie en el mismo lazo?
Se pueden intercalar varios dispositivos pasivos (indicadores, registradores, entradas de PLC) en serie, ya que todos leen la misma corriente. Sin embargo, la resistencia total añadida por todos ellos no debe superar el límite que la fuente puede alimentar. Solo puede existir un transmisor y una fuente activa.

### ¿Qué diferencia hay entre un lazo activo y uno pasivo?
Un lazo activo incluye una fuente propia que suministra la energía (por ejemplo, la salida de un PLC o una fuente externa), mientras que en un lazo pasivo la alimentación proviene del dispositivo al que se conecta el transmisor. En la práctica, la tarjeta de entrada analógica del sistema de control suele desempeñar el papel de elemento activo.

### ¿Cómo se convierte la señal 4‑20 mA en una salida neumática?
Se emplea un convertidor I/P (corriente a presión) alimentado por el propio lazo, que transforma linealmente el rango 4‑20 mA en una señal neumática de 3‑15 psi / 0,21‑1,03 bar, utilizada para gobernar válvulas de control en plantas con actuadores neumáticos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-terms-d_666.html
- **plcacademy.com**: https://www.plcacademy.com/plc-analog-input-output/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/process_control_-a-_measurement/digital_panel_meters/analog_input
