---
title: "Señal de voltaje 0-10V fundamentos"
sidebar:
  label: "Señal de voltaje 0-10V fundamentos"
description: "Ficha tecnica: Señal de voltaje 0-10V fundamentos"
keywords: ["0-10V voltage signal fundamentals control", "sistemas-control"]
category: "sistemas-control"
topic: "control-signals"
subcategory: "0-10v-signal-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La señal 0‑10 V es un sistema de control analógico que emplea una tensión continua variable entre 0 V y 10 V CC para transmitir consignas de regulación. Constituye uno de los métodos más antiguos y sencillos para el atenuado de iluminación y se ha extendido a todo tipo de actuadores industriales. Dos variantes normalizadas —corriente suministrada (*sourcing*) y corriente absorbida (*sinking*)— definen la dirección del flujo de energía, mientras que la baja corriente de lazo (≤ 1 mA) y la elevada impedancia de entrada (100 kΩ) simplifican el cableado y el acoplamiento a controladores lógicos programables (PLC).

La tensión continua de control entre 0 V y 10 V CC representa de forma proporcional el nivel de salida deseado: 0 V corresponde al 0 % (apagado o mínimo) y 10 V al 100 % de la capacidad del equipo. En el estándar de corriente suministrada, el controlador entrega directamente la tensión al dispositivo; en el de corriente absorbida, el balasto o *driver* genera los 10 V CC y el controlador drena una pequeña corriente para reducir la tensión hasta el valor de mando. Este segundo esquema proporciona un comportamiento a prueba de fallos: si se interrumpe el cable de control, la tensión se mantiene en 10 V y el actuador pasa a máximo, garantizando la iluminación o el funcionamiento continuo.

## Especificaciones técnicas
La impedancia de entrada nominal de un receptor 0‑10 V es de 100 kΩ ±20 kΩ, lo que limita la potencia disipada a 1 mW cuando se aplica la tensión máxima. La tabla siguiente recoge los parámetros eléctricos fundamentales.

| Parámetro | Valor |
|---|---|
| Rango de tensión de control | 0 a 10 V CC |
| Impedancia de entrada del receptor | 100 kΩ ±20 kΩ |
| Potencia disipada a 10 V | 1 mW ±0,2 mW |
| Corriente de control (modo absorción) | ≤ 1 mA |
| Resistencia de fuente típica (Rs) | ≈ 200 Ω (según aplicación) |
| Resolución recomendada en PLC | 12 a 16 bits |

En aplicaciones con PLC, la señal se digitaliza mediante un convertidor A/D que a 12 bits ofrece una resolución de 2,44 mV (10 V / 4096), suficiente para la mayoría de los lazos de control de iluminación y climatización.

## Métodos de control
Existen dos métodos principales para gobernar la señal 0‑10 V: el control resistivo analógico y la modulación por ancho de pulso (PWM). El control resistivo emplea un potenciómetro o resistencia variable que, junto con una resistencia fija de fuente, forma un divisor de tensión. La tensión de control resultante se calcula mediante la expresión

> **Vc = Vs × (Rc / (Rc + Rs))**

| Variable | Descripción | Unidad |
|---|---|---|
| Vc | Tensión de control retornada | V |
| Vs | Tensión de alimentación suministrada | V |
| Rc | Resistencia de control variable | Ω |
| Rs | Resistencia de fuente fija | Ω |

Variando Rc desde 0 Ω (cortocircuito que fuerza Vc = 0 V) hasta un valor máximo adecuado se obtiene cualquier punto intermedio. El método PWM, en cambio, sustituye la resistencia variable por un interruptor electrónico que se abre y cierra a alta frecuencia; la proporción de tiempo en estado alto define la tensión media equivalente, eliminando la necesidad de componentes de precisión y permitiendo controlar múltiples luminarias en paralelo.

## Cableado y consideraciones de instalación
La instalación de un bucle 0‑10 V requiere un par de conductores por canal de control más un retorno común. Aunque la baja corriente de lazo (≤ 1 mA) hace que la caída de tensión en el cable sea prácticamente despreciable incluso con hilos finos, el acoplamiento capacitivo con cables de potencia cercanos puede inducir ruido y provocar parpadeos en luminarias LED. Se recomienda emplear cable apantallado cuando los tendidos de señal discurran paralelos a líneas de CA durante más de 30 m / 100 ft. La distancia máxima sin repetidor suele limitarse a 100 m / 328 ft para evitar interferencias, aunque la norma no fija un límite estricto.

## Aplicaciones típicas
La señal 0‑10 V se utiliza profusamente en regulación de iluminación —balastos electrónicos para fluorescentes, *drivers* LED y paneles planos—, control de velocidad de ventiladores y bombas, actuadores de válvulas y compuertas en sistemas HVAC, y como salida analógica de PLC y controladores de procesos. También es habitual en mesas de iluminación teatral y arquitectónica, si bien los protocolos digitales (DMX, DALI) la han ido desplazando en entornos profesionales.

## Ventajas y limitaciones
La sencillez del sistema facilita su comprensión, implantación y diagnóstico. La corriente de control extremadamente reducida permite usar cable delgado y realizar empalmes de obra sin pérdidas sensibles. No obstante, cada canal de control necesita un hilo independiente, lo que en instalaciones con decenas de luminarias obliga a tender mangueras multiconductoras costosas. Sobre longitudes elevadas, el acoplamiento capacitivo obliga a apantallar y, en algunos casos, a calibrar el receptor para compensar la caída de tensión. Finalmente, la falta de alimentación en bucle propio la hace vulnerable a ruidos de modo común y no ofrece detección automática de fallo de línea salvo en el modo *sinking*.

## Comparación con la señal 4‑20 mA
El bucle de corriente 4‑20 mA es el principal competidor industrial de la señal 0‑10 V. Mientras que el voltaje es sensible a las caídas óhmicas y al ruido electromagnético, la corriente se mantiene constante a lo largo del lazo, lo que permite tendidos superiores a 500 m / 1640 ft sin degradación. El estándar 4‑20 mA también ofrece diagnóstico de rotura de hilo (caída a 0 mA) y puede alimentar al sensor con la misma pareja de cables. A cambio, la señal 0‑10 V es más fácil de generar desde un microcontrolador o un potenciómetro y no exige una fuente de corriente precisa. La elección entre ambas depende de la distancia, el entorno eléctrico y la necesidad de detectar fallos.

## Preguntas frecuentes (FAQ)

### ¿Qué es la señal 0-10 V y para qué sirve?
Es una señal analógica de tensión continua que varía entre 0 y 10 V CC y se utiliza para transmitir un valor de consigna a actuadores, principalmente en sistemas de iluminación regulable y control de motores. A 10 V el dispositivo opera al 100 % y a 0 V se apaga o queda en reposo.

### ¿Cuál es la diferencia entre suministro (sourcing) y absorción (sinking) de corriente?
En el modo *sourcing*, el controlador entrega directamente la tensión de 0 a 10 V a la carga. En el modo *sinking*, la carga genera los 10 V CC y el controlador hunde una pequeña corriente para reducir la tensión. Este último es más común en balastos de iluminación porque proporciona seguridad frente a rotura de cable (la lámpara se enciende al máximo).

### ¿Qué impedancia de entrada tiene un receptor 0-10 V?
La impedancia nominal es de 100 kΩ, con una tolerancia de ±20 kΩ. Esto implica que a plena escala apenas circulan 0,1 mA, lo que minimiza el consumo y la caída de tensión en los cables.

### ¿Se puede controlar una entrada 0-10 V mediante PWM?
Sí, conectando un transistor o interruptor electrónico entre el terminal de control y tierra. Una señal PWM de frecuencia elevada (≥ 1 kHz) emula una resistencia variable; el ciclo de trabajo define el valor medio de tensión. Esta técnica es habitual en mandos microcontrolados y permite controlar varios equipos en paralelo sin resistencias de precisión.

### ¿Cuál es la longitud máxima del cable para una señal 0-10 V?
No existe una distancia normalizada, pero en la práctica se recomienda no superar los 100 m / 328 ft con cable sin apantallar. Tramos más largos requieren cable apantallado y, eventualmente, repetidores o conversores a bucle de corriente para evitar interferencias y parpadeos.

### ¿Se puede convertir una señal 0-10 V a 4-20 mA?
Sí, existen acondicionadores de señal específicos que convierten tensión en corriente, proporcionando además aislamiento galvánico y filtrado de ruido. Esta conversión es común cuando se quiere enviar una consigna de PLC a un actuador situado a gran distancia o en entornos con elevado ruido electromagnético.

## Fuentes consultadas

- **plcacademy.com**: https://www.plcacademy.com/plc-analog-input-output/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/process_control_-a-_measurement/signal_conditioners
