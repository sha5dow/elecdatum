---
title: "Métodos de frenado en variadores de frecuencia"
sidebar:
  label: "Métodos de frenado en variadores de frecuencia"
description: "Ficha tecnica: Métodos de frenado en variadores de frecuencia"
keywords: ["VFD braking methods dynamic regenerative", "sistemas-control"]
category: "sistemas-control"
topic: "variable-frequency-drives"
subcategory: "vfd-braking-methods"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los métodos de frenado en variadores de frecuencia (VFD) se clasifican en dos categorías principales: frenado reostático, que disipa la energía de frenado en forma de calor a través de resistencias, y frenado regenerativo, que devuelve la energía a la red de alimentación. La potencia de frenado típica en aplicaciones industriales puede alcanzar hasta el 150 % de la potencia nominal del motor durante períodos cortos, y la eficiencia de conversión en frenado regenerativo moderno supera el 95 %.

Durante el frenado, el motor de inducción actúa como generador, convirtiendo la energía cinética de la carga en energía eléctrica. El VFD gestiona esta energía elevando la tensión en el bus de corriente continua. Cuando la tensión del bus supera un umbral predefinido — típicamente entre 750 V CC / 810 V CC y 800 V CC / 840 V CC para variadores de 400 V CA / 460 V CA —, se activa el circuito de frenado. La potencia de frenado disponible depende de la velocidad del motor y de la capacidad del sistema de disipación.

> **P_frenado = (J × ω²) / (2 × t_frenado)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| P_frenado | Potencia de frenado | W o kW |
| J | Momento de inercia total de la carga | kg·m² / lb·ft² |
| ω | Velocidad angular inicial | rad/s |
| t_frenado | Tiempo de frenado deseado | s |

## Frenado reostático

El frenado reostático disipa la energía generada en resistencias de potencia externas, conocidas como resistencias de frenado. La potencia nominal de estas resistencias se selecciona generalmente entre el 10 % y el 150 % de la potencia del motor, dependiendo de la inercia de la carga y el ciclo de trabajo. Un sistema típico puede manejar picos de potencia de hasta 250 kW / 335 hp durante frenados de emergencia, con temperaturas superficiales de resistencia que pueden alcanzar 250 °C / 482 °F.

| Parámetro | Rango típico |
| --- | --- |
| Resistencia mínima permitida | 10 Ω a 100 Ω según potencia |
| Potencia disipada | 0,5 kW a 500 kW / 0,67 hp a 670 hp |
| Ciclo de trabajo | 10 % a 50 % |
| Tiempo de frenado máximo continuo | 60 s a 300 s |

## Frenado regenerativo

El frenado regenerativo reinyecta la energía de frenado a la red de suministro eléctrico mediante un convertidor activo, logrando eficiencias de recuperación de hasta el 97 %. La corriente regenerada típica en variadores de 400 V CA / 460 V CA varía entre 10 A y 500 A, y la distorsión armónica total (THD) se mantiene por debajo del 5 %. Este método reduce el consumo energético total entre un 5 % y un 30 % en aplicaciones con ciclos frecuentes de aceleración y desaceleración, como grúas y ascensores.

| Ventaja | Valor cuantitativo |
| --- | --- |
| Eficiencia de regeneración | 92 % a 97 % |
| Ahorro energético típico | 5 % a 30 % |
| THD de corriente | < 5 % |
| Rango de potencia aplicable | 2,2 kW a 2 MW / 3 hp a 2682 hp |

## Comparativa de métodos

La selección entre frenado reostático y regenerativo depende de la frecuencia de frenado, la potencia involucrada y la infraestructura eléctrica disponible. El costo inicial de un sistema regenerativo es entre 1,5 y 3 veces mayor que uno reostático, pero el retorno de inversión puede lograrse en menos de 2 años en aplicaciones de alto ciclo de trabajo.

| Característica | Frenado reostático | Frenado regenerativo |
| --- | --- | --- |
| Destino de la energía | Disipación en calor | Retorno a la red |
| Costo relativo | 1x | 1,5x a 3x |
| Mantenimiento | Revisión de resistencias cada 2000 h / 2000 h | Revisión de filtros cada 4000 h / 4000 h |
| Aplicación típica | Frenados esporádicos | Frenados frecuentes (> 10 ciclos/h) |
| Temperatura ambiente máxima | 40 °C / 104 °F | 40 °C / 104 °F |

## Consideraciones de implementación

La instalación de sistemas de frenado en variadores requiere verificar la capacidad del bus de CC y la ventilación del gabinete. Para frenado reostático, la resistencia debe montarse fuera del gabinete del variador si disipa más de 500 W / 1706 BTU/h, y la distancia máxima entre el variador y la resistencia no debe exceder 5 m / 16,4 ft. En frenado regenerativo, la impedancia de red debe ser inferior al 3 % para evitar problemas de estabilidad, y se recomienda instalar inductancias de línea cuando la potencia supera 100 kW / 134 hp.

| Parámetro de instalación | Valor recomendado |
| --- | --- |
| Distancia máxima VFD-resistencia | 5 m / 16,4 ft |
| Potencia para montaje externo de resistencia | > 500 W / 1706 BTU/h |
| Impedancia de red máxima (regenerativo) | < 3 % |
| Inductancia de línea requerida | > 100 kW / 134 hp |

## Preguntas frecuentes (FAQ)

### ¿Qué método de frenado es más eficiente energéticamente?

### ¿Se puede usar frenado regenerativo en cualquier instalación?

### ¿Qué mantenimiento requieren las resistencias de frenado?

### ¿Cómo se calcula la resistencia de frenado adecuada?

### ¿El frenado reostático afecta la vida útil del variador?

### ¿Qué protecciones se deben instalar en un sistema de frenado?

## Fuentes consultadas

- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=87EwaBzd7Dk
