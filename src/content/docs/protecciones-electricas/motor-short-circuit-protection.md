---
title: "Protección de cortocircuito en motores"
sidebar:
  label: "Protección de cortocircuito en motores"
description: "Ficha tecnica: Protección de cortocircuito en motores"
keywords: ["motor short circuit protection device selection", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "motor-protection"
subcategory: "motor-short-circuit-protection"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La protección de cortocircuito en motores limita las corrientes de falla que pueden superar los 10 kA en un lapso menor a 30 µs, y se consigue mediante dispositivos que interrumpen el circuito antes de que la energía térmica y mecánica dañe los devanados o los conductores de alimentación. La selección del dispositivo se rige por las tablas del NEC 430.52, que vinculan la potencia del motor, el tipo de arranque y la clase del interruptor automático o fusible.

El dispositivo de protección contra cortocircuito detecta el brusco incremento de corriente generado por un contacto directo entre fases, entre fase y neutro o entre fase y tierra. Responde en el orden de milisegundos a través de un elemento magnético —en el caso de los interruptores de potencia para motores (MCP) o HMCP— que genera un campo electromagnético capaz de abrir los contactos casi instantáneamente. La apertura interrumpe el arco eléctrico y despeja la falla, evitando que la corriente de cortocircuito alcance el valor de cresta máximo que podría fusionar los conductores o provocar un incendio.

## Dispositivos de protección contra cortocircuito  

| Dispositivo | Principio de actuación | Ventajas | Limitaciones |
| --- | --- | --- | --- |
| Fusible limitador de corriente | Hilo fusible que se funde por efecto Joule al circular una corriente de falla elevada | Interrupción ultrarápida (0,01 s), alta capacidad de ruptura hasta 200 kA / 200 kA, bajo costo | No reutilizable, no protege contra sobrecargas leves, requiere sustitución tras cada actuación |
| Interruptor automático magnetotérmico | Bobina magnética para cortocircuito y bimetal para sobrecarga | Reusable, ajuste de disparo magnético y térmico, indicación visual de estado | Menor poder de corte que los fusibles de alta capacidad, dimensionamiento cuidadoso para motores con picos de arranque |
| HMCP (Motor Circuit Protector) o MCP | Disparador exclusivamente magnético calibrado para actuar únicamente ante cortocircuito, sin protección térmica | Alta precisión en el umbral de disparo instantáneo, coordinación sencilla con relevadores de sobrecarga externos | No integra protección contra sobrecarga, requiere un relevador térmico separado, costo moderado |

La norma IEC 60947-2 y el NEC 430.52 reconocen estos dispositivos. El HMCP se emplea típicamente en combinación con un contactor y un relé de sobrecarga en arrancadores combinados, garantizando la protección de cortocircuito mientras el relé térmico cubre la sobrecarga.

## Criterios de selección  
La selección del dispositivo de protección de cortocircuito para motores se basa en la corriente a plena carga (FLC) del motor, la tensión nominal, el tipo de rotor (jaula de ardilla, anillos rozantes, etc.) y la categoría de servicio. Los parámetros fundamentales son:

- **Corriente nominal del motor (In):** se obtiene de la placa de características o de las tablas NEMA para la potencia y tensión dadas.
- **Máximo ajuste o calibre permitido:** según NEC 430.52, para interruptores automáticos de disparo instantáneo (MCP) en motores de jaula de ardilla, el ajuste máximo es del 800 % de la corriente a plena carga. Para fusibles de clase RK5 o similar, el rango habitual es 175 % a 300 % de In.
- **Capacidad interruptiva (kA):** debe superar la corriente de cortocircuito disponible en bornes del motor. En tableros industriales de 480 V se suelen requerir valores de 65 kA o superiores.
- **Coordinación con el arrancador:** el dispositivo de cortocircuito debe dejar pasar la corriente de arranque (6 a 8 veces In) sin disparar, por lo que se elige un umbral magnético por encima de ese pico.

## Tabla de selección para motores trifásicos de 480 V

| Potencia (HP / kW) | Corriente NEMA a plena carga (A / A) | Tamaño de arrancador | Relevador térmico | HMCP (A / A) | Conduit (pulg / mm) | Conductores de fase (AWG / mm²) | Tierra (AWG / mm²) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ½ / 0,37 | 1,0 / 1,0 | 1 | W30 | 3 / 3 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| ¾ / 0,56 | 1,4 / 1,4 | 1 | W33 | 3 / 3 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 1 / 0,75 | 1,8 / 1,8 | 1 | W36 | 3 / 3 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 1½ / 1,12 | 2,6 / 2,6 | 1 | W40 | 7 / 7 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 2 / 1,49 | 3,4 / 3,4 | 1 | W42 | 7 / 7 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 3 / 2,24 | 4,8 / 4,8 | 1 | W45 | 7 / 7 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 5 / 3,73 | 7,5 / 7,5 | 1 | W50 | 15 / 15 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 7½ / 5,59 | 11 / 11 | 1 | W54 | 15 / 15 | ¾ / 21,3 | 12 / 3,31 | 12 / 3,31 |
| 10 / 7,46 | 14 / 14 | 1 | W56 | 30 / 30 | ¾ / 21,3 | 10 / 5,26 | 10 / 5,26 |
| 15 / 11,19 | 21 / 21 | 2 | W61 | 50 / 50 | ¾ / 21,3 | 10 / 5,26 | 10 / 5,26 |
| 20 / 14,92 | 27 / 27 | 2 | W64 | 50 / 50 | 1 / 25,4 | 8 / 8,37 | 8 / 8,37 |
| 25 / 18,65 | 34 / 34 | 2 | W67 | 70 / 70 | 1¼ / 31,8 | 6 / 13,3 | 6 / 13,3 |
| 30 / 22,38 | 40 / 40 | 3 | W67 | 100 / 100 | 1¼ / 31,8 | 6 / 13,3 | 6 / 13,3 |
| 40 / 29,84 | 52 / 52 | 3 | W69 | 100 / 100 | 1¼ / 31,8 | 4 / 21,15 | 4 / 21,15 |
| 50 / 37,30 | 65 / 65 | 3 | W72 | 100 / 100 | 1¼ / 31,8 | 4 / 21,15 | 4 / 21,15 |
| 60 / 44,76 | 77 / 77 | 4 | W74 | 150 / 150 | 1½ / 38,1 | 2 / 33,62 | 2 / 33,62 |
| 75 / 55,95 | 96 / 96 | 4 | W77 | 150 / 150 | 1½ / 38,1 | 2 / 33,62 | 2 / 33,62 |
| 100 / 74,60 | 125 / 125 | 4 | W36 | 200 / 200 | 2 / 50,8 | 2/0 / 67,43 | 2 / 33,62 |
| 125 / 93,25 | 156 / 156 | 5 | W38 | 250 / 250 | 2½ / 63,5 | 4/0 / 107,2 | 1/0 / 53,49 |
| 150 / 111,9 | 180 / 180 | 5 | W40 | 400 / 400 | 2½ / 63,5 | 4/0 / 107,2 | 1/0 / 53,49 |

Nota: los calibres de conductor corresponden a cobre con aislamiento THHN a 75 °C según NEC. La sección en mm² es el área efectiva del conductor.

## Coordinación con protección de sobrecarga  
El dispositivo de cortocircuito y el relé de sobrecarga deben coordinarse para que, ante una sobrecarga moderada, actúe únicamente el relé térmico clasificado entre el 115 % y el 125 % de la corriente nominal, mientras el HMCP permanezca cerrado. Durante un cortocircuito franco, el HMCP se abre en menos de 20 ms y el relé térmico, por su inercia, no resulta dañado. Esta selectividad se apoya en las curvas tiempo‑corriente: la banda de disparo magnético del HMCP se sitúa a la derecha de la curva de arranque del motor y a la izquierda de la capacidad térmica del conductor y del relé.

## Fórmula de dimensionamiento del interruptor instantáneo  
El valor máximo de ajuste del disparador magnético para un motor de jaula de ardilla se calcula con la siguiente expresión:

> **Imag ≤ K × In**

donde:

| Variable | Significado | Unidad (métrica / imperial) |
| --- | --- | --- |
| Imag | Corriente de ajuste magnético del HMCP o interruptor instantáneo | A / A |
| K | Factor multiplicador según NEC 430.52 (800 % → 8,0 para interruptor automático de disparo instantáneo; valores menores para fusibles) | – |
| In | Corriente nominal a plena carga del motor | A / A |

El ajuste práctico se selecciona como el valor comercial inmediatamente inferior al límite calculado, garantizando que el pico de arranque (6 – 8 × In) no provoque disparos indeseados.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre un fusible y un HMCP para protección de cortocircuito en motores?
El fusible es un elemento de protección de un solo uso que funde su hilo interno al circular una corriente de falla elevada, mientras que el HMCP es un interruptor automático rearmable con disparo exclusivamente magnético. El HMCP permite ajuste fino del umbral de disparo, no requiere reemplazo tras una falta y se integra mejor en arrancadores combinados.

### ¿Por qué un HMCP no incluye protección térmica?
El HMCP está diseñado para actuar únicamente frente a cortocircuitos; la protección contra sobrecarga se confía a un relé térmico separado. De esta forma se evitan disparos intempestivos durante el arranque y se logra una coordinación tipo 2 según IEC 60947‑4‑1, en la que el contactor y el relé no sufren daños tras un cortocircuito.

### ¿Cómo se selecciona el HMCP adecuado a partir de la tabla de 480 V?
Se ingresa a la tabla con la potencia del motor en HP; se lee la corriente NEMA y se elige el HMCP cuya capacidad en amperes cubra al menos el 700 % – 800 % de esa corriente. Para un motor de 20 HP (27 A) el HMCP de 50 A equivale a un 185 % de In, muy por debajo del límite del 800 %, por lo que la protección contra cortocircuito queda asegurada y se respeta el margen de arranque.

### ¿Qué ocurre si el HMCP está subdimensionado?
Un HMCP con umbral magnético demasiado bajo se disparará cada vez que el motor arranque, porque la corriente de arranque (6 a 8 veces In) superará el ajuste. En cambio, uno sobredimensionado podría no abrir durante un cortocircuito moderado, poniendo en riesgo los conductores y el propio motor. Por ello se respeta el límite máximo del 800 % de la NEC y se verifica la coordinación con la curva de daño del cable.

### ¿Es necesario proteger por separado cada motor con su propio dispositivo de cortocircuito?
Sí, la NEC exige un dispositivo de protección de cortocircuito individual para cada motor, salvo en instalaciones con varios motores de potencia muy reducida que compartan un circuito derivado cuando se cumplen condiciones muy específicas. La protección individual permite ajustar el umbral exactamente a la corriente del motor y evita que una falla en un motor interrumpa otros procesos.

### ¿Qué normas regulan la protección de cortocircuito en motores?
El National Electrical Code (NEC), artículo 430, partes III a V, define los requisitos de protección de sobrecorriente y cortocircuito para motores. A nivel internacional, la IEC 60947‑2 establece los ensayos y características de los interruptores automáticos, y la IEC 60947‑4‑1 especifica la coordinación con contactores y arrancadores.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/480-volt-motor-wiring-data-d_1447.html
- **electrical4u.com**: https://www.electrical4u.com/small-large-motor-protection/
