---
title: "Bonding de equipos eléctricos"
sidebar:
  label: "Bonding de equipos eléctricos"
description: "Ficha tecnica: Bonding de equipos eléctricos"
keywords: ["electrical equipment bonding requirements", "puesta-tierra"]
category: "puesta-tierra"
topic: "bonding"
subcategory: "equipment-bonding"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El bonding de equipos eléctricos consiste en la interconexión intencionada de todas las partes metálicas expuestas que normalmente no conducen corriente, con el fin de mantenerlas al mismo potencial y eliminar diferencias peligrosas superiores a 50 V.

El bonding de equipos eléctricos, o unión equipotencial, es la conexión conductora permanente entre las partes metálicas no diseñadas para transportar corriente (carcasas, bandejas portacables, tuberías metálicas, estructuras) para formar una trayectoria eléctricamente continua con una resistencia de contacto inferior a 0,1 Ω / 0.1 Ω. Esta unión garantiza que, ante una falla de aislamiento, todas las superficies conductoras expuestas alcancen el mismo potencial, evitando tensiones de contacto peligrosas.

## Importancia del bonding
La unión equipotencial de equipos es crítica porque una diferencia de potencial mayor a 50 V / 50 V entre dos masas metálicas puede provocar electrocución, arcos eléctricos y daños en el aislamiento. Al conectar todas las partes metálicas, cualquier corriente de falla se deriva de manera controlada hacia el sistema de puesta a tierra, permitiendo que los dispositivos de protección (fusibles o interruptores automáticos) despejen la falta en menos de 0,4 s / 0.4 s, aumentando la seguridad del personal y la protección del equipo.

## Relación entre bonding y puesta a tierra
El bonding y la puesta a tierra trabajan juntos para lograr una protección efectiva. El bonding iguala los potenciales de las masas metálicas, mientras que la puesta a tierra proporciona una ruta de baja impedancia para que la corriente de falla retorne a la fuente. En sistemas TN con neutro aterrizado, la conexión del conductor de protección al neutro en el panel principal de servicio es lo que permite una trayectoria de falla de hasta 600 V / 600 V a tierra, asegurando la rápida actuación de las protecciones. Sin bonding, una falla podría energizar una carcasa y no disparar el interruptor si la resistencia de la tierra como camino único es demasiado alta (más de 25 Ω).

## Métodos de conexión de bonding
Para garantizar una trayectoria de falla efectiva, el bonding de equipos debe realizarse utilizando al menos uno de los 8 métodos permitidos por NEC (sección 250.8), entre ellos conectores a presión listados, barras de terminales, soldadura exotérmica o puentes de unión de tipo cable. A continuación se indican los métodos más comunes para equipos eléctricos de baja y media tensión hasta 600 V / 600 V.

| Método de conexión | Descripción | Aplicación típica |
| --- | --- | --- |
| Contratuerca de bonding | Contratuerca con tornillo de apriete que penetra la pintura del gabinete para asegurar continuidad | Cajas metálicas con conectores concéntricos, uso general hasta 200 A |
| Buje de bonding con puente | Buje roscado provisto de terminal para conectar un jumper de unión al conductor neutro o a tierra | Canalizaciones metálicas en acometidas, cuando se usan boquillas con anillos removibles |
| Soldadura exotérmica | Fusión molecular de conductores de cobre mediante reacción aluminotérmica, resistencia mecánica > 450 kg / 1000 lb | Uniones bajo tierra, conexión de cable a electrodo de tierra, subestaciones |
| Terminación roscada cónica | Acople roscado que asegura continuidad eléctrica sin necesidad de jumper adicional | Tubería metálica rígida (RMC) e intermedia (IMC) en envolventes con entrada roscada |
| Puente de unión de cable | Conductor de cobre aislado o desnudo instalado entre dos partes metálicas, dimensionado según norma | Bandejas portacables, unión de tuberías flexibles, puenteo de uniones pintadas |

## Dimensionamiento de conductores de unión
Los conductores de unión del lado de la alimentación se dimensionan según el calibre de los conductores de fase (NEC Tabla 250.102(C)(1)), mientras que los del lado de la carga dependen del ajuste del dispositivo de protección contra sobrecorriente (NEC Tabla 250.122). Para un alimentador protegido con un interruptor de 1200 A, el jumper de unión del lado de la carga requerido es de cobre de 85,0 mm² / 3/0 AWG.

### Lado de la alimentación (supply-side bonding jumper)

| Tamaño del conductor de fase | Jumper de unión mínimo |
| --- | --- |
| Hasta 33,6 mm² / 2 AWG | 8,37 mm² / 8 AWG |
| 33,6 a 85,0 mm² / 1 AWG a 3/0 AWG | 13,3 mm² / 6 AWG |
| 85,0 a 127 mm² / 4/0 AWG a 250 kcmil | 21,1 mm² / 4 AWG |
| 127 a 177 mm² / 250 a 350 kcmil | 33,6 mm² / 2 AWG |
| 177 a 304 mm² / 350 a 600 kcmil | 53,5 mm² / 1/0 AWG |
| 304 a 558 mm² / 600 a 1100 kcmil | 67,4 mm² / 2/0 AWG |
| Mayor de 558 mm² / 1100 kcmil | 85,0 mm² / 3/0 AWG |

### Lado de la carga (load-side equipment bonding jumper)

| Dispositivo de protección (A) | Calibre mínimo del jumper de unión |
| --- | --- |
| 15 A | 2,08 mm² / 14 AWG |
| 20 A | 3,31 mm² / 12 AWG |
| 30 A | 5,26 mm² / 10 AWG |
| 40 – 60 A | 5,26 mm² / 10 AWG |
| 70 – 100 A | 8,37 mm² / 8 AWG |
| 110 – 200 A | 13,3 mm² / 6 AWG |
| 250 – 300 A | 21,1 mm² / 4 AWG |
| 400 A | 26,7 mm² / 3 AWG |
| 500 A | 33,6 mm² / 2 AWG |
| 600 A | 42,4 mm² / 1 AWG |
| 800 A | 53,5 mm² / 1/0 AWG |
| 1000 A | 67,4 mm² / 2/0 AWG |
| 1200 A | 85,0 mm² / 3/0 AWG |

## Resistencia de conexión recomendada
Aunque el bonding no exige un valor absoluto de resistencia a tierra como el electrodo de puesta a tierra (que suele ser inferior a 1 Ω / 1 Ω en subestaciones), es buena práctica que la continuidad entre partes unidas presente una resistencia medida inferior a 0,1 Ω / 0.1 Ω, utilizando un microóhmetro de al menos 10 A de corriente de prueba. Las superficies de contacto deben limpiarse en un radio de 12 mm / 0.5 in para eliminar pintura, óxido o recubrimientos no conductivos, asegurando así una trayectoria de falla de baja impedancia.

## Procedimiento de instalación
1. Identificar todas las masas metálicas expuestas (carcasas, soportes, tuberías metálicas) dentro del área de trabajo, que deban ser unidas al sistema de bonding.
2. Preparar al menos 12 mm / 0.5 in de superficie alrededor de cada punto de conexión, retirando cualquier pintura, esmalte o corrosión hasta dejar el metal desnudo.
3. Seleccionar el método de unión (contratuerca, buje con jumper, soldadura exotérmica) y el conductor de bonding según las tablas de dimensionamiento aplicables.
4. Realizar la conexión mecánica firme, asegurando que el conductor de bonding quede fijado mediante terminal listado, tornillo de apriete o soldadura, según el método escogido.
5. Verificar la continuidad eléctrica con un instrumento capaz de medir resistencias inferiores a 0,1 Ω / 0.1 Ω.
6. Documentar las conexiones y los valores de resistencia obtenidos en el protocolo de inspección eléctrica.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre bonding y puesta a tierra?
El bonding (unión equipotencial) conecta las partes metálicas entre sí para mantener el mismo potencial, mientras que la puesta a tierra conecta intencionadamente el sistema eléctrico a la tierra física para disipar corrientes de falla y estabilizar la tensión. Ambos se complementan: el bonding asegura que la corriente de falla tenga un camino metálico de baja impedancia hacia el conductor de puesta a tierra, evitando que la corriente busque rutas alternativas peligrosas.

### ¿El bonding solo aplica a equipos metálicos?
Principalmente se aplica a partes metálicas conductoras (gabinetes, canalizaciones, bandejas, estructuras). Sin embargo, en áreas con riesgo de acumulación estática, también se unen equipos no metálicos que puedan generar cargas, conectando sus partes conductoras o revestimientos. En piscinas y fuentes, incluso los refuerzos de acero del concreto deben unirse al sistema de bonding para eliminar gradientes de potencial.

### ¿Se puede utilizar la tubería metálica como conductor de bonding?
Sí, las canalizaciones metálicas continuas (tubo conduit rígido, intermedio, EMT) listadas pueden servir como trayectoria de enlace equipotencial siempre que las uniones estén apretadas con las contratuercas apropiadas y no se interrumpan con tramos de material no metálico. No obstante, en instalaciones que superan 250 V / 250 V a tierra y emplean boquillas con anillos removibles, se requiere un puente de bonding externo dimensionado según NEC.

### ¿Es obligatorio el bonding en instalaciones comerciales e industriales?
Sí, todas las instalaciones eléctricas según normas internacionales (NEC, IEC 60364) exigen bonding de los equipos metálicos. De hecho, el capítulo 250 del NEC obliga a unir todas las partes metálicas que puedan energizarse, incluyendo tuberías de agua metálicas, estructuras del edificio y sistemas de comunicación, para garantizar un mismo potencial y la actuación de las protecciones.

### ¿Qué peligro representa una unión de bonding floja o corroída?
Una unión de alta resistencia (superior a 0,1 Ω) puede no conducir adecuadamente la corriente de falla, lo que eleva la impedancia del camino de retorno al neutro. En lugar de despejar la falta rápidamente, la corriente circula durante más tiempo, provocando calentamiento, riesgo de incendio y la posibilidad de que la carcasa del equipo mantenga un potencial peligroso (aún por debajo del nivel de disparo del interruptor) y cause electrocución al ser tocada.

### ¿Cómo se verifica un sistema de bonding?
Se utiliza un microóhmetro de baja resistencia que inyecta una corriente continua de prueba de al menos 10 A. La medición se realiza entre la masa metálica y el punto de conexión al sistema de puesta a tierra. El valor aceptado generalmente debe ser inferior a 0,1 Ω / 0.1 Ω. También se realizan inspecciones visuales para comprobar el ajuste mecánico y la ausencia de corrosión o pintura en las conexiones.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/equipment-earthing/
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2312
