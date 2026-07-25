---
title: "Variadores de frecuencia fundamentos"
sidebar:
  label: "Variadores de frecuencia fundamentos"
description: "Ficha tecnica: Variadores de frecuencia fundamentos"
keywords: ["VFD variable frequency drive basics", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "vfd-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## ¿Qué es un variador de frecuencia?

Un variador de frecuencia (VFD, por sus siglas en inglés) es un dispositivo electrónico de estado sólido que regula la velocidad y el par de un motor de corriente alterna modificando la frecuencia y la tensión de la alimentación eléctrica. También controla las rampas de aceleración y deceleración durante el arranque y la parada. Se conoce igualmente como convertidor de frecuencia, variador de velocidad, *drive* de CA o convertidor VVVF (tensión variable, frecuencia variable). Los VFD modernos se basan en la técnica de modulación por ancho de pulsos (PWM), cuyo desarrollo comercial comenzó en Finlandia en los años 60 y se consolidó en la década de 1980.

## Principio de funcionamiento

El VFD convierte la tensión alterna de red, de frecuencia y tensión fijas (por ejemplo 50 Hz / 60 Hz), en una tensión continua mediante un rectificador. A continuación un filtro capacitivo (enlace de CC) alisa el rizado, y finalmente un inversor trocea esa tensión continua generando una salida alterna cuasisenoidal de frecuencia y tensión ajustables. La relación tensión/frecuencia (V/f) se mantiene constante por debajo de la frecuencia nominal del motor para conservar el flujo magnético dentro de los límites de diseño; de esta forma se logra controlar el par de manera independiente. Por encima de la frecuencia base la tensión se mantiene constante y el par decrece, entrando en la zona de potencia constante.

La velocidad síncrona del motor depende directamente de la frecuencia de alimentación:

> **N_s = 120 · f / P**

donde  
*N_s* = velocidad síncrona (rpm),  
*f* = frecuencia de alimentación (Hz),  
*P* = número de polos del motor.

El control electrónico ajusta la frecuencia y, mediante PWM, genera un tren de pulsos que la inductancia del motor convierte en corriente casi sinusoidal.

## Componentes del variador

Un variador de frecuencia típico de tipo fuente de tensión (VSI) está constituido por tres etapas fundamentales más el sistema de control:

| Componente         | Función                                                                 |
|--------------------|-------------------------------------------------------------------------|
| Rectificador       | Convierte la tensión CA de entrada en CC; habitualmente puente de diodos trifásico de 6 pulsos. |
| Enlace de CC       | Filtro capacitivo que almacena energía y alisa el rizado, entregando una tensión continua estable al inversor. |
| Inversor           | Puente de dispositivos semiconductores (IGBT, GTO) que conmutan a alta frecuencia generando una salida CA modulada. |
| Sistema de control | Microprocesador con lazos de realimentación que ejecuta algoritmos PWM (SPWM, SVPWM) y mantiene la relación V/f deseada. |

## Ecuaciones de velocidad y par

La velocidad de giro real del rotor se obtiene restando el deslizamiento a la velocidad síncrona. En la práctica el VFD actúa sobre la frecuencia *f* y, simultáneamente, sobre la tensión de salida para mantener constante el cociente V/f.

> **V / f ≅ cte** (para f ≤ f_nominal)

El par electromagnético desarrollado por el motor de inducción es proporcional al flujo y a la corriente del rotor:

> **T = k · Φ · I₂**

donde el flujo Φ ∝ V / f. Al mantener V/f constante, el flujo y la capacidad de par se conservan en toda la gama de velocidades por debajo de la frecuencia nominal.

## Pérdidas de calor y refrigeración

Una parte de la potencia que atraviesa el variador se disipa en forma de calor. La pérdida térmica se calcula como:

> **H_pérdida = P_t · (1 − η_d)**

con *H_pérdida* en kW si *P_t* está en kW. En unidades imperiales:

> **H_pérdida = P_t · 3412 · (1 − η_d)** [BTU/h]

Las pérdidas suelen situarse entre el 2 % y el 6 % de la potencia nominal aparente (kVA) del equipo.  
La temperatura ambiente máxima de operación sin refrigeración forzada es **40 °C / 104 °F**. Para evacuar el calor en armarios cerrados se requiere un caudal de aire de ventilación.

Ejemplo de cálculo para un VFD que transfiere **50 kW** con rendimiento **0.95**:

| Parámetro                          | Fórmula / valor                         |
|------------------------------------|-----------------------------------------|
| Potencia transferida *P_t*         | 50 kW / 67 hp                          |
| Eficiencia *η_d*                   | 0.95                                    |
| Pérdida de calor *H_pérdida*       | 2.5 kW / 8530 BTU/h                     |
| Masa de aire refrigerante *m_aire* | 0.125 kg/s / 0.276 lb/s                |
| Caudal volumétrico a 20 °C         | 375 m³/h / 220 cfm                    |
| Caudal volumétrico a 40 °C         | 400 m³/h / 235 cfm                    |

Las fórmulas generales de ventilación son:

> **m_aire = H_pérdida / (c_p · ΔT)** [kg/s]

> **q_aire = m_aire / ρ_aire** [m³/s]

con  
*c_p* = 1.005 kJ/(kg·°C) (calor específico del aire estándar),  
*ρ_aire* = 1.205 kg/m³ a 20 °C / 0.075 lb/ft³.

## Aplicaciones típicas

Los variadores de frecuencia se emplean en cualquier proceso donde se requiera control de velocidad o ahorro energético. Aplicaciones habituales incluyen:

- Bombas centrífugas y sistemas de bombeo
- Ventiladores y compresores
- Transportadores, elevadores y escaleras mecánicas
- Extrusoras, molinos y trituradoras
- Sistemas de climatización (HVAC)

En estas cargas de par variable, la reducción de velocidad genera ahorros de energía de acuerdo con las leyes de afinidad (la potencia absorbida varía con el cubo de la velocidad).

## Ventajas del uso de variadores de frecuencia

- **Ahorro de energía**: se ajusta la velocidad a la demanda real, eliminando pérdidas por estrangulamiento o recirculación.
- **Control preciso del proceso**: permite regular velocidad, par, aceleración y deceleración.
- **Reducción de esfuerzos mecánicos**: arranques y paradas suaves que prolongan la vida del motor y de la mecánica asociada.
- **Menor corriente de arranque**: evita puntas de corriente elevadas, reduciendo la penalización tarifaria y la caída de tensión en la red.
- **Disminución de ruido y vibraciones**: especialmente a bajas velocidades.
- **Posibilidad de eliminar elementos mecánicos**: sustitución de variadores mecánicos, embragues y reductores.

## Preguntas frecuentes (FAQ)

### ¿Qué potencia mínima puede manejar un variador de frecuencia?

Los VFD comerciales están disponibles desde potencias tan bajas como 0.18 kW / 0.25 hp, aptos para pequeños motores monofásicos o trifásicos de uso en aplicaciones como cintas transportadoras ligeras o bombas dosificadoras.

### ¿Cuál es la eficiencia energética típica de un variador de frecuencia moderno?

Un VFD actual alcanza rendimientos entre 95 % y 98 % a plena carga, dependiendo de la potencia nominal. Por debajo del 20 % de carga la eficiencia puede descender hasta el 90 %.

### ¿Qué porcentaje de la potencia nominal se pierde en forma de calor dentro del variador?

Habitualmente la pérdida térmica representa entre el 2 % y el 6 % de la potencia aparente nominal (kVA). Para una unidad de 100 kVA la disipación puede oscilar entre 2 kW y 6 kW / 6824 BTU/h y 20472 BTU/h.

### ¿Cuál es la temperatura ambiente máxima sin ventilación forzada para un VFD?

La mayoría de los fabricantes especifican una temperatura máxima de 40 °C / 104 °F en operación continua sin refrigeración adicional. Por encima de ese valor es necesario reducir la potencia nominal (*derating*) o instalar ventilación forzada.

### ¿Qué frecuencia de portadora usa un VFD con modulación PWM?

Los VFD comunes trabajan con frecuencias de conmutación del inversor entre 2 kHz y 20 kHz. Valores bajos (2‑4 kHz) generan más ruido audible pero menores pérdidas de conmutación; frecuencias altas (12‑20 kHz) silencian el motor pero incrementan las pérdidas en el inversor.

### ¿Cuánta energía puede ahorrar un VFD en bombas y ventiladores?

En instalaciones con caudal variable, al reducir la velocidad un 20 % la potencia absorbida cae aproximadamente un 50 %, siguiendo la ley de afinidad cúbica. En sistemas de bombeo y ventilación los ahorros anuales suelen situarse entre el 30 % y el 60 % respecto a sistemas sin control de velocidad.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/variable-frequency-drives-d_656.html
- **electrical4u.com**: https://www.electrical4u.com/variable-frequency-drive/
