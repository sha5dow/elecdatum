---
title: "Servomotores fundamentos y aplicaciones"
sidebar:
  label: "Servomotores fundamentos y aplicaciones"
description: "Ficha tecnica: Servomotores fundamentos y aplicaciones"
keywords: ["servo motor fundamentals applications industrial", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "servo-motor-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un servomotor es un actuador rotativo o lineal que permite un control preciso de la posición angular o lineal, velocidad y aceleración en un sistema mecánico, constituyendo un elemento esencial de un servomecanismo en lazo cerrado. Su capacidad para entregar par motor completo desde velocidad cero lo diferencia de otros tipos de motores eléctricos, convirtiéndolo en la opción predilecta para aplicaciones de alto rendimiento como robótica, maquinaria CNC y manufactura automatizada.

## Principio de funcionamiento

El servomotor opera como un servomecanismo de lazo cerrado que utiliza la realimentación de posición para controlar su movimiento y posición final. La señal de entrada al controlador, ya sea analógica o digital, representa la posición deseada del eje de salida. Un sensor de posición, típicamente un encoder, mide la posición real del eje y envía esta información al controlador. Este último compara la posición comandada con la posición real medida, generando una señal de error. La señal de error se utiliza para accionar el motor en la dirección necesaria para reducir la diferencia a cero, deteniendo el motor en la posición exacta demandada. Los servomotores más sofisticados emplean encoders absolutos para inferir la velocidad del eje y utilizan variadores de frecuencia en combinación con un algoritmo de control PID para lograr un posicionamiento más rápido y preciso.

## Componentes de un servomotor

| Componente | Función |
|---|---|
| Motor (DC, AC o brushless) | Proporciona el par motor y la velocidad base del sistema. |
| Sensor de realimentación | Mide la posición, y a menudo la velocidad, del eje de salida. Puede ser un encoder incremental, un encoder absoluto o un resolver. |
| Controlador | Módulo electrónico dedicado que compara la posición comandada con la realimentada, ejecuta el algoritmo de control (ej. PID) y genera las señales de potencia para el motor. |
| Reductora | Conjunto de engranajes (frecuentemente epicicloidales) que reduce la velocidad del motor y multiplica el par de salida, montada a la salida del eje. |
| Electrónica de potencia | Circuitos que suministran la corriente y el voltaje necesarios al motor en respuesta a las señales del controlador. |

## Tipos de servomotores

| Tipo | Características principales |
|---|---|
| Servomotor DC con escobillas | La sección del motor es un motor de corriente continua con escobillas. Ofrece control simple y económico, pero las escobillas requieren mantenimiento y generan desgaste. |
| Servomotor brushless (sin escobillas) | Utiliza un motor de corriente continua sin escobillas (BLDC) o de corriente alterna síncrono. Mayor densidad de par, sin mantenimiento de escobillas y con mejor disipación térmica. Es el estándar en la industria moderna. |
| Servomotor de corriente alterna (AC) | Generalmente motores síncronos de imanes permanentes. Predominan en aplicaciones industriales de alta potencia y alto rendimiento dinámico. |
| Servomotor lineal | Es un actuador lineal que produce movimiento en línea recta en lugar de rotativo, utilizando los mismos principios de control de lazo cerrado. |

## Comparación: Servomotor vs. motor paso a paso

En términos de rendimiento, el servomotor es la alternativa de alto rendimiento frente al motor paso a paso. El motor paso a paso posee una capacidad inherente de control de posición en lazo abierto, ya que su movimiento se basa en pasos discretos, lo que evita en muchos casos el uso de encoder y controlador asociado. Sin embargo, esta falta de realimentación limita su par máximo utilizable, pues debe operar muy por debajo de su capacidad para evitar la pérdida de pasos y los consecuentes errores de posicionamiento que obligarían a reiniciar el sistema. El servomotor, por el contrario, monitoriza continuamente su posición y regula el par y la velocidad para corregir cualquier desviación, lo que le permite utilizar toda la capacidad del motor básico y asegurar la precisión bajo carga. Aunque el encoder y el controlador suponen un costo adicional, en sistemas donde un motor potente es una fracción significativa del costo total, la optimización del rendimiento que ofrece el servomotor lo convierte en la solución con mayor ventaja.

## Aplicaciones de los servomotores

| Aplicación | Descripción del control |
|---|---|
| Robótica industrial | Permite el movimiento preciso de articulaciones en robots "pick and place" o manipuladores, controlando el ángulo de cada eje mediante señales PWM. |
| Máquinas CNC | El control de lazo cerrado asegura el posicionamiento exacto y repetible de los husillos y mesas de trabajo para operaciones de mecanizado. |
| Sistemas de autoenfoque en cámaras | Un servomotor de alta precisión ajusta la posición de las lentes basándose en el análisis de nitidez de la imagen para obtener una fotografía clara. |
| Sistemas transportadores | Los servomotores detienen y arrancan las bandas transportadoras con alta precisión, llevando botellas u objetos exactamente a las estaciones de llenado y empaquetado. |
| Sistemas de seguimiento solar | Controlan el ángulo de inclinación de los paneles solares para que sigan la trayectoria del sol durante el día, maximizando la eficiencia energética del sistema. |
| Vehículos robóticos | Los servos de rotación continua accionan las ruedas, proporcionando el alto par necesario para arranques y paradas rápidas, así como el control preciso de la velocidad. |

## Ecuación fundamental de par y potencia

La relación entre el par motor y la potencia en un motor eléctrico rotativo se define por ecuaciones derivadas de la física del movimiento circular. La relación fundamental en un servomotor dicta que el par es la fuerza de torsión activa desde el 0% al 100% de la velocidad de operación, y la potencia desarrollada es cero a velocidad cero.

En unidades del sistema internacional (SI), el par motor se calcula como:

> **T_Nm = (P_W * 9,549) / n**

Donde:

| Variable | Significado | Unidades |
|---|---|---|
| T_Nm | Par motor | Newton-metro (Nm) |
| P_W | Potencia entregada por el motor | Vatios (W) |
| n | Velocidad de rotación | Revoluciones por minuto (rpm) |

En unidades imperiales, una de las formas equivalentes es:

> **T_ftlb = (P_hp * 5252) / n**

Donde:

| Variable | Significado | Unidades |
|---|---|---|
| T_ftlb | Par motor | Libra-fuerza pie (lb·ft) |
| P_hp | Potencia entregada por el motor | Caballos de fuerza (hp) |
| n | Velocidad de rotación | Revoluciones por minuto (rpm) |

De la primera fórmula se deduce, por ejemplo, que un motor eléctrico que produce una potencia de 0,75 kW (750 W) a una velocidad de 2000 rpm entrega un par de 3,6 Nm (o 2,6 lb·ft).

## Tabla de referencia: Potencia, velocidad y par motor

La siguiente tabla recoge una selección de valores que relacionan la potencia (en hp y kW) con el par generado (en Nm y lb·ft) a distintas velocidades de operación (rpm).

| Potencia (hp) | Potencia (kW) | Par a 3450 rpm (Nm) | Par a 3450 rpm (lb·ft) | Par a 1750 rpm (Nm) | Par a 1750 rpm (lb·ft) | Par a 1000 rpm (Nm) | Par a 1000 rpm (lb·ft) | Par a 500 rpm (Nm) | Par a 500 rpm (lb·ft) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0,75 | 2,1 / 1,5 | 18 / 1,5 | 4,1 / 3,0 | 36 / 3,0 | 7,1 / 5,3 | 63 / 5,3 | 14,2 / 10,5 | 126 / 10,5 |
| 2 | 1,5 | 4,1 / 3,0 | 37 / 3,0 | 8,1 / 6,0 | 72 / 6,0 | 14,2 / 10,5 | 126 / 10,5 | 28,5 / 21,0 | 252 / 21,0 |
| 5 | 3,7 | 10 / 7,6 | 91 / 7,6 | 20 / 15 | 180 / 15 | 36 / 26,3 | 315 / 26,3 | 71 / 52,5 | 630 / 52,5 |
| 10 | 7,5 | 21 / 15 | 183 / 15 | 41 / 30 | 360 / 30 | 71 / 53 | 630 / 53 | 142 / 105 | 1260 / 105 |
| 20 | 15 | 41 / 30 | 365 / 30 | 81 / 60 | 720 / 60 | 142 / 105 | 1260 / 105 | 285 / 210 | 2521 / 210 |
| 50 | 37 | 103 / 76 | 913 / 76 | 204 / 150 | 1801 / 150 | 356 / 263 | 3151 / 263 | 712 / 525 | 6302 / 525 |
| 100 | 75 | 207 / 152 | 1827 / 152 | 407 / 300 | 3601 / 300 | 712 / 525 | 6302 / 525 | 1425 / 1050 | 12605 / 1050 |

## Preguntas frecuentes (FAQ)

### ¿Qué es exactamente un servomotor?

Es un actuador electromecánico, rotativo o lineal, que forma parte de un sistema de control de lazo cerrado para lograr un control preciso de la posición, velocidad y aceleración de un mecanismo.

### ¿Qué diferencia principal tiene con un motor DC convencional?

La diferencia clave es que un servomotor integra un sensor de posición y un controlador que permite un posicionamiento angular exacto mediante realimentación, mientras que un motor DC convencional carece de esta precisión sin un sistema de control adicional.

### ¿Por qué el par de un servomotor es máximo desde velocidad cero?

A diferencia de los motores de combustión, los servomotores eléctricos generan su par motor máximo de torsión en reposo, lo que elimina la necesidad de un embrague y los hace ideales para arranques y paradas rápidas bajo carga en vehículos y maquinaria.

### ¿Cuál es la función de un encoder en un servomotor?

El encoder es el sensor que mide la posición angular (y velocidad) del eje del motor en tiempo real y envía esta señal al controlador para cerrar el lazo de control, permitiendo así la corrección instantánea del error de posición.

### ¿En qué aplicaciones reales se utilizan los servomotores?

Se utilizan en robótica industrial, máquinas herramienta CNC, sistemas de autoenfoque de cámaras, bandas transportadoras industriales, sistemas de seguimiento solar y vehículos robóticos militares o de exploración.

### ¿Es un motor paso a paso un tipo de servomotor?

No. Aunque ambos se usan para posicionamiento, un motor paso a paso opera típicamente en lazo abierto (sin realimentación), se mueve en incrementos discretos y tiene un rendimiento y precisión bajo carga inferior al de un servomotor de lazo cerrado.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-hp-torque-rpm-d_1503.html
- **electrical4u.com**: https://www.electrical4u.com/servo-motor-applications-in-robotics-solar-tracking-system-etc/
