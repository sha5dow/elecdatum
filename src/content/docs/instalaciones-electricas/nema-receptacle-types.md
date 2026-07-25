---
title: "Tipos de contactos NEMA especificaciones"
sidebar:
  label: "Tipos de contactos NEMA especificaciones"
description: "Ficha tecnica: Tipos de contactos NEMA especificaciones"
keywords: ["NEMA receptacle plug configuration chart", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "receptacles-switches"
subcategory: "receptacle-types-nema"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Clasificación y nomenclatura
Los conectores NEMA se dividen en dos familias básicas: dispositivos de inserción recta (straight-blade) y dispositivos con bloqueo por giro (twist-lock), identificados con la letra `L` antes del código numérico. La nomenclatura sigue el formato `L?-??R/P`, donde las cifras antes del guión definen el número de polos, la cantidad de hilos y la tensión, y las cifras tras el guión indican la corriente nominal en amperios (A). El sufijo `R` designa receptáculo (base) y `P` clavija (enchufe). Por ejemplo, `5-15R` es un receptáculo de 125 V, 15 A, dos polos, tres hilos (fase, neutro y tierra); `L5-15R` comparte la misma capacidad eléctrica pero con mecanismo de bloqueo.

## Tipos de conectores NEMA rectos
Los conectores de inserción recta constituyen la mayoría de las instalaciones residenciales y comerciales ligeras. La tabla siguiente recoge las series más empleadas.

| Serie NEMA | Polos / Hilos | Tensión nominal | Corriente (A) | Configuración de contactos | Aplicación habitual |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1-15 | 2 / 2 | 125 V | 15 | Dos patas planas paralelas (sin tierra) | Equipos antiguos, lámparas, cargadores pequeños |
| 5-15 | 2 / 3 | 125 V | 15 | Dos patas planas paralelas + pata de tierra en U | Electrodomésticos, electrónica, tomacorriente estándar doméstico |
| 5-20 | 2 / 3 | 125 V | 20 | Dos patas planas (una en T horizontal) + tierra en U | Equipos de mayor consumo como acondicionadores de aire portátiles |
| 6-15 | 2 / 3 | 250 V | 15 | Dos patas planas horizontales + tierra en U | Aires acondicionados, bombas de calor hasta 15 A |
| 6-20 | 2 / 3 | 250 V | 20 | Dos patas planas (una en T horizontal, giradas) + tierra en U | Aires acondicionados, bombas de calor hasta 20 A |
| 10-30 | 3 / 3 | 125/250 V | 30 | Tres patas planas (dos en ángulo, una en L) | Secadoras de ropa antiguas (sin tierra dedicada) |
| 10-50 | 3 / 3 | 125/250 V | 50 | Tres patas planas (dos en ángulo, una recta) | Cocinas eléctricas antiguas (sin tierra dedicada) |
| 14-30 | 3 / 4 | 125/250 V | 30 | Dos fases planas, neutro en L, tierra en U | Secadoras de ropa modernas, generadores portátiles |
| 14-50 | 3 / 4 | 125/250 V | 50 | Igual que 14-30, mayor tamaño | Cocinas eléctricas, vehículos eléctricos (NEMA 14-50R) |

## Conectores NEMA con bloqueo (Twist-Lock)
Los conectores con prefijo `L` incorporan patas curvadas que giran para bloquearse, impidiendo desconexiones accidentales. Se emplean en entornos industriales, hospitalarios y de infraestructura.

| Serie NEMA | Polos / Hilos | Tensión nominal | Corriente (A) | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| L5-15 | 2 / 3 | 125 V | 15 | Bloqueo, 125 V, uso general con tierra |
| L5-20 | 2 / 3 | 125 V | 20 | Similar a L5-15, para 20 A |
| L5-30 | 2 / 3 | 125 V | 30 | Uso en generadores, transferencias y equipos marinos |
| L6-15 | 2 / 3 | 250 V | 15 | Bloqueo, 250 V, sin neutro, con tierra |
| L6-20 | 2 / 3 | 250 V | 20 | Versión de 20 A del L6-15 |
| L6-30 | 2 / 3 | 250 V | 30 | Común en soldadores, compressores y racks de servidores |
| L14-20 | 3 / 4 | 125/250 V | 20 | Bloqueo, 4 hilos, pequeño; eventos temporales |
| L14-30 | 3 / 4 | 125/250 V | 30 | Bloqueo, 4 hilos, 30 A; generadores portátiles, ferias |

## Dimensiones de contactos
Las cotas de patas y alvéolos están definidas en ANSI/NEMA WD-6. Las magnitudes principales para las series más extendidas son:

| Parámetro | NEMA 5-15 | NEMA 5-20 | NEMA 14-50 |
| :--- | :--- | :--- | :--- |
| Ancho pata plana | 6,35 mm / 0.250 in | 6,35 mm / 0.250 in | – |
| Espesor pata plana | 1,5 mm / 0.060 in | 1,5 mm / 0.060 in | – |
| Distancia entre centros de patas planas | 12,7 mm / 0.500 in | 12,7 mm / 0.500 in | – |
| Diámetro pata de tierra | 4,76 mm / 0.1875 in | 4,76 mm / 0.1875 in | 5,94 mm / 0.234 in |
| Longitud expuesta de pata de tierra | 28,6 mm / 1.125 in | 28,6 mm / 1.125 in | 31,8 mm / 1.250 in |

## Selección del calibre del conductor
La elección del conductor de cobre debe basarse en la corriente nominal del conector y en la longitud del circuito. La tabla siguiente relaciona las corrientes típicas de los conectores NEMA con el calibre AWG mínimo recomendado (considerando temperatura ambiente de 30 °C / 86 °F y conductores de cobre).

| Corriente del conector (A) | Calibre AWG | Diámetro del conductor | Área transversal (mm²) |
| :--- | :--- | :--- | :--- |
| 15 | 14 AWG | 1,63 mm / 0.0641 in | 2,08 |
| 20 | 12 AWG | 2,05 mm / 0.0808 in | 3,31 |
| 30 | 10 AWG | 2,59 mm / 0.102 in | 5,26 |
| 50 | 6 AWG | 4,11 mm / 0.162 in | 13,3 |
| 60 | 4 AWG | 5,19 mm / 0.204 in | 21,1 |

## Orientación de montaje y seguridad
La orientación del receptáculo influye directamente en la seguridad eléctrica. Las recomendaciones de ingeniería indican que, en montaje vertical, la pata de tierra debe quedar en la parte superior. Si un objeto metálico plano (regla metálica, marco, tapa) se desliza sobre la pared y hace contacto con una clavija parcialmente insertada, encontrará primero la conexión a tierra, reduciendo el riesgo de cortocircuito fase-neutro y de arco eléctrico. En montaje horizontal, se aconseja que el neutro quede arriba por el mismo principio. Aunque el NEC (National Electrical Code) no obliga a una orientación concreta, los principales fabricantes (Pass & Seymour, Hubbell, Arrow-Hart) marcan el yugo y los botones de GFCI para ser leídos con la tierra hacia arriba.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia principal entre un receptáculo NEMA 5-15 y NEMA 5-20?
La diferencia principal es la corriente máxima: el NEMA 5-15 admite 15 A y el NEMA 5-20 admite 20 A, ambos a 125 V. El receptáculo 5-20R presenta una ranura en T en la pata de fase que permite insertar tanto clavijas 5-15P (15 A) como 5-20P (20 A).

### ¿Se puede usar un calibre 14 AWG para un circuito protegido a 20 A con conectores NEMA 5-20?
No es recomendable. El calibre 14 AWG solo garantiza una ampacidad de 15 A en condiciones estándar; para 20 A se necesita como mínimo calibre 12 AWG, cuyo diámetro es de 2,05 mm / 0.0808 in y su sección de 3,31 mm².

### ¿Qué corriente y tensión maneja un conector NEMA 10-30?
El NEMA 10-30 está diseñado para 30 A a 125/250 V, configuración de 3 polos sin tierra dedicada, común en secadoras de ropa fabricadas antes de la adopción del NEMA 14-30.

### ¿Por qué algunos conectores NEMA 14-50 se emplean en estaciones de carga de vehículos eléctricos?
Porque suministran 50 A a 125/250 V (12 500 W totales), lo que permite cargas de Nivel 2 con potencias superiores a 9,6 kW, reduciendo el tiempo de recarga frente a tomacorrientes de 15 A o 20 A.

### ¿Cuál es el diámetro de la pata de tierra en una clavija NEMA 5-15?
El diámetro de la pata de tierra en un NEMA 5-15P es de 4,76 mm / 0.1875 in. Esta dimensión es ligeramente mayor que el ancho de las patas planas (6,35 mm / 0.250 in) para asegurar que la tierra haga contacto primero.

### ¿Es seguro instalar un receptáculo NEMA 5-15 con la tierra hacia abajo?
Aunque no está prohibido por código, la instalación con tierra hacia abajo incrementa el riesgo de cortocircuito si un objeto metálico delgado cae sobre una clavija parcialmente extraída; la mayoría de las guías de buenas prácticas y los propios fabricantes recomiendan la orientación tierra arriba.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Receptacles-Ground-Up-or-Ground-Down-(9-23-99).php
