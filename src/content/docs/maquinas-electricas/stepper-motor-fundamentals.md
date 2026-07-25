---
title: "Motores paso a paso fundamentos"
sidebar:
  label: "Motores paso a paso fundamentos"
description: "Ficha tecnica: Motores paso a paso fundamentos"
keywords: ["stepper motor fundamentals types", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "stepper-motor-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un motor paso a paso es un motor eléctrico de corriente continua sin escobillas que convierte un tren de pulsos eléctricos en desplazamientos angulares discretos y precisos del eje. A diferencia de los motores de corriente continua convencionales, el rotor avanza un ángulo fijo — denominado paso — por cada pulso de control, permitiendo posicionar el eje sin necesidad de un sensor de realimentación. El par de retención estático y la capacidad de mantener la posición con consumo de corriente son características distintivas de esta máquina.

El principio de operación se basa en la atracción magnética secuencial entre un rotor dentado (de hierro dulce, imán permanente o una combinación de ambos) y un estator compuesto por varios electroimanes agrupados en fases. Al energizar una fase, los dientes del rotor se alinean con el campo magnético generado, reduciendo la reluctancia del circuito magnético. Cuando la fase siguiente recibe corriente, el rotor gira para alinearse con el nuevo campo, produciendo un movimiento angular elemental.

En el ejemplo clásico de un motor de 25 dientes y 4 fases, cada secuencia de energización produce una rotación de 3,6°. Para completar una revolución se requieren 100 pasos. La relación fundamental entre el ángulo de paso y el número de pasos por revolución es:

> **θ = 360° / N**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| θ | Ángulo de paso | ° (grados) o rad |
| N | Número de pasos por revolución | Adimensional |

Los valores normalizados más comunes en la industria son 200 pasos/rev (1,8° / 0,0314 rad) y 400 pasos/rev (0,9° / 0,0157 rad).

## Tipos de motores paso a paso
La clasificación principal distingue tres tipos constructivos, cada uno con características de par, paso y comportamiento magnético diferentes.

| Tipo | Construcción del rotor | Par de retención típico | Ángulo de paso típico | Ventajas | Limitaciones |
| --- | --- | --- | --- | --- | --- |
| Imán permanente (PM) | Imán permanente multipolar | 0,02 – 0,4 N·m / 2,8 – 56,7 oz·in | 7,5° – 15° / 0,131 – 0,262 rad | Electrónica de control sencilla, par de retención al desconectar la alimentación | Paso grande, baja resolución |
| Reluctancia variable (VR) | Hierro dulce dentado, sin imán | 0,05 – 1,0 N·m / 7,1 – 141,6 oz·in | 15° / 0,262 rad | Construcción robusta, alta velocidad | Sin par de retención en ausencia de corriente, mayor rizado de par |
| Híbrido (HY) | Combinación de imán permanente y dientes de hierro dulce | 0,1 – 5,0 N·m / 14,2 – 708 oz·in | 0,9° – 1,8° / 0,0157 – 0,0314 rad | Alto par en tamaño reducido, paso fino, excelente relación par/volumen | Mayor costo, requiere control más sofisticado |

Los motores paso a paso se encuadran dentro de la categoría de motores eléctricos especiales, tal como se recoge en las clasificaciones generales de máquinas eléctricas.

## Par y velocidad
El comportamiento torque‑velocidad de un motor paso a paso se define mediante tres parámetros fundamentales:

- **Par de retención (holding torque):** es el par estático máximo que el motor puede ejercer para mantener el eje bloqueado con las fases energizadas a corriente nominal. Representa el punto de partida de la curva de par.
- **Par de arranque o de pull‑in:** par máximo con el que el motor puede arrancar sin perder pasos, partiendo de velocidad cero y siguiendo la rampa de aceleración.
- **Par de pull‑out o de pérdida de paso:** par máximo que el motor puede entregar a una velocidad determinada sin desincronizarse. Define la curva de operación estable.

En todos los motores eléctricos, la relación entre par, potencia y velocidad responde a la ecuación general:

> **T = 9550 · P / n**

donde *T* se expresa en N·m, *P* en kW y *n* en rpm. En unidades imperiales la expresión equivalente es:

> **T = 5252 · P / n**

siendo *T* en lb·ft, *P* en hp y *n* en rpm. En los motores paso a paso el perfil par‑velocidad difiere del motor de inducción: el par disminuye notablemente al aumentar la velocidad, y el par de retención a velocidades bajas suele ser varias veces superior al disponible en la zona de pull‑out cerca de la velocidad máxima.

| Tipo de par | Definición | Dependencia |
| --- | --- | --- |
| Par de retención | Par estático con fases energizadas a corriente nominal | Corriente de fase, tipo de motor |
| Par de pull‑in | Par máximo de arranque sincronizado | Inercia de carga, rampa de aceleración |
| Par de pull‑out | Par máximo a velocidad constante sin pérdida de pasos | Velocidad de giro, tensión de alimentación |

Un motor paso a paso NEMA 17 típico ofrece un par de retención de **0,45 N·m / 63,7 oz·in** a 2 A por fase, y puede entregar un par dinámico de **0,2 N·m / 28,3 oz·in** a 500 rpm.

## Modos de operación y control
La resolución y suavidad de movimiento dependen del modo de excitación de las fases:

| Modo de operación | Pasos por revolución (motor de 1,8°) | Corriente en reposo | Característica |
| --- | --- | --- | --- |
| Paso completo (1 fase) | 200 | Alta (una fase energizada) | Par nominal, vibración elevada |
| Paso completo (2 fases) | 200 | Alta (dos fases energizadas) | Mayor par (+40 %) y rigidez |
| Medio paso (1‑2 fases) | 400 | Variable | Resolución doble, menor vibración |
| Micropaso 1/4 | 800 | Reducida (control PWM) | Movimiento más suave, par reducido |
| Micropaso 1/8 | 1 600 | Reducida (control PWM) | Alta resolución angular |
| Micropaso 1/16 | 3 200 | Reducida (control PWM) | Ideal para CNC e impresión 3D |

La configuración de los devanados define también la estrategia de control:

| Configuración | Número de cables | Conmutación | Observaciones |
| --- | --- | --- | --- |
| Bipolar | 4 | Puente H por fase | Mayor par por volumen |
| Unipolar (6 hilos) | 6 | Transistores de conmutación simple | Permite usar solo media bobina o bobina completa |
| Unipolar (8 hilos) | 8 | Flexible, conexión serie o paralelo | Máxima flexibilidad de voltaje y corriente |

La combinación de micropasos y control de corriente permite alcanzar resoluciones inferiores a **0,01° / 0,00017 rad** por paso en motores híbridos con driver avanzado.

## Ventajas y limitaciones
**Ventajas principales:**
- Posicionamiento preciso en lazo abierto, sin necesidad de encoder.
- Elevado par a bajas velocidades, ideal para aplicaciones de bloqueo.
- Respuesta rápida a pulsos de arranque y parada.
- Excelente repetibilidad de posición, del orden de **±0,05° / ±0,0009 rad** en condiciones nominales.
- Bajo coste del sistema completo (motor + driver) comparado con servomotores de prestaciones equivalentes.

**Limitaciones:**
- Resonancia mecánica a ciertas velocidades si no se implementa amortiguamiento.
- Pérdida de pasos si se excede el par pull‑out o la rampa de aceleración es inadecuada.
- Consumo energético constante incluso en reposo, con rendimientos típicos del **50 % al 70 %**.
- Velocidad máxima limitada, usualmente por debajo de **2000 rpm**.
- Calentamiento apreciable cuando se mantiene el par de retención de forma continua.

## Aplicaciones
Los motores paso a paso se emplean en todos aquellos sistemas que demandan movimientos discretos y repetibles sin realimentación de posición:

- **Impresión 3D y CNC de escritorio:** extrusores, ejes X/Y/Z.
- **Robótica educativa y brazos articulados ligeros:** control de articulaciones.
- **Periféricos informáticos:** escáneres, impresoras láser y de inyección de tinta.
- **Equipos médicos:** bombas peristálticas, dosificadores, mesas de posicionamiento.
- **Automatización industrial:** válvulas de control, dosificación de líquidos, sistemas pick-and-place de baja inercia.

## Preguntas frecuentes (FAQ)
### ¿Cuál es el ángulo de paso típico de un motor paso a paso?
El ángulo más común es 1,8° / 0,0314 rad, equivalente a 200 pasos por revolución. También se fabrican motores de 0,9° / 0,0157 rad (400 pasos/rev) para mayor resolución y versiones económicas de 7,5° / 0,131 rad (48 pasos/rev).

### ¿Qué par de retención suministra un motor paso a paso NEMA 17 estándar?
Un NEMA 17 típico entrega 0,45 N·m de par de retención (63,7 oz·in) con corrientes nominales de 1,5 A a 2 A por fase. Modelos de alta potencia pueden alcanzar 0,65 N·m / 92,1 oz·in.

### ¿Cuál es la velocidad máxima práctica de un motor paso a paso?
La velocidad máxima sin carga suele alcanzar 1000 rpm a 2000 rpm. Con carga, el par útil decae drásticamente por encima de 500 rpm; un motor híbrido de 1,8° puede perder el 70 % de su par de retención a 1000 rpm.

### ¿Cuántos cables tiene un motor paso a paso bipolar?
Un motor bipolar tiene 4 cables de salida, correspondientes a los dos devanados del estator. Las versiones unipolares cuentan con 5, 6 u 8 conductores, según la presencia de tomas intermedias en las bobinas.

### ¿Qué resolución se obtiene con microstepping 1/16?
Con un motor de 1,8° por paso natural, la interpolación en 1/16 micropasos divide el paso base entre 16, resultando 0,1125° / 0,00196 rad por micropaso y un total de 3200 pasos por revolución.

### ¿Qué eficiencia energética presenta un motor paso a paso típico?
La eficiencia habitual se sitúa entre el 50 % y el 70 %, ya que el motor consume corriente incluso para mantener el par de retención en reposo. En aplicaciones que priorizan el ahorro energético se pueden implementar modos de corriente reducida durante la inactividad.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-motor-types-classification-and-history-of-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
