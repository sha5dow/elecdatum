---
title: "Tipos de dispositivos de protección contra sobretensión SPD"
sidebar:
  label: "Tipos de dispositivos de protección contra sobretensión SPD"
description: "Ficha tecnica: Tipos de dispositivos de protección contra sobretensión SPD"
keywords: ["SPD surge protective device types class 1 2 3", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "surge-protection"
subcategory: "spd-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
Los dispositivos de protección contra sobretensión (SPD) se clasifican según su capacidad de derivación de corriente, su tiempo de respuesta y la ubicación en la instalación eléctrica. La norma IEC 61643-11 define tres tipos principales: Tipo 1 (Clase I), Tipo 2 (Clase II) y Tipo 3 (Clase III), cada uno pensado para un nivel de protección específico frente a sobretensiones transitorias de origen atmosférico o por maniobras.

## Tipos de SPD según capacidad de descarga

| Tipo de SPD | Descarga nominal (In) | Corriente de impulso (Iimp) | Nivel de protección (Up) | Ubicación típica |
| --- | --- | --- | --- | --- |
| Tipo 1 (Clase I) | No aplica (onda 10/350 µs) | 12,5 kA / 12,5 kA a 50 kA / 50 kA | ≤ 2,5 kV / 2,5 kV | Acometida principal, interruptor general |
| Tipo 2 (Clase II) | 5 kA / 5 kA a 20 kA / 20 kA (onda 8/20 µs) | No aplica | ≤ 1,5 kV / 1,5 kV | Cuadros de distribución secundarios |
| Tipo 3 (Clase III) | 1 kA / 1 kA a 3 kA / 3 kA (onda combinada 1,2/50 µs y 8/20 µs) | No aplica | ≤ 1,0 kV / 1,0 kV a 1,2 kV / 1,2 kV | Tomas de corriente, equipos delicados |

## Características constructivas y de funcionamiento

| Característica | Tipo 1 | Tipo 2 | Tipo 3 |
| --- | --- | --- | --- |
| Tecnología principal | Cebador de chispa o varistor de gran potencia | Varistor de óxido metálico (MOV) | Varistor, diodo supresor combinado con filtro |
| Capacidad de extinción | Alta corriente subsiguiente | Media, sin corriente subsiguiente significativa | Baja, protección fina |
| Tiempo de respuesta | 25 ns a 100 ns | < 25 ns | < 1 ns |
| Resistencia a cortocircuito | Elevada (hasta 50 kA / 50 kA) | Media (hasta 25 kA / 25 kA) | Baja (protección fusible adicional) |
| Montaje | Carril DIN sobresaliente, envolvente robusta | Carril DIN, formato modular | Enchufe directo o base adaptadora |

## Coordinación entre tipos de SPD

La protección efectiva requiere coordinar los tres tipos en cascada. El Tipo 1 deriva la mayor parte de la energía de una descarga directa (10/350 µs) en la entrada del edificio, reduciendo la corriente residual. El Tipo 2, instalado aguas abajo, maneja la energía remanente y los transitorios inducidos (8/20 µs). El Tipo 3 protege cargas muy sensibles con un nivel de tensión residual inferior a 1,2 kV / 1,2 kV. La distancia entre etapas debe ser por lo menos 10 m / 32,8 ft para garantizar la correcta decoordinación de las protecciones, salvo que se empleen inductancias de desacoplo.

## Selección del tipo de SPD adecuado

La selección depende del nivel de exposición al rayo y del valor económico de los equipos. En edificios con pararrayos externo o líneas aéreas de alimentación se obliga un SPD Tipo 1 en la cabecera. En entornos con subestación propia o alimentación subterránea suele bastar una combinación Tipo 2 + Tipo 3. El volumen de protección se define por la distancia de cableado hasta la carga; tramos superiores a 10 m / 32,8 ft requieren un SPD adicional cerca del equipo. La corriente máxima de descarga Imax del Tipo 2 se dimensiona según el nivel de riesgo: 40 kA / 40 kA para alta incidencia, 15 kA / 15 kA para instalaciones residenciales estándar.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre una onda de corriente 10/350 µs y 8/20 µs?

La onda 10/350 µs simula el impacto directo de un rayo, con un tiempo de subida de 10 µs y una duración hasta el 50 % de 350 µs, mientras que la onda 8/20 µs reproduce sobretensiones inducidas o de maniobra, con tiempo de subida de 8 µs y duración de 20 µs. Los SPD Tipo 1 están probados con la primera, los Tipo 2 con la segunda.

### ¿Puedo usar solo un SPD Tipo 3 en toda la instalación?

No es suficiente. El Tipo 3 no puede absorber la energía de un rayo directo y se destruiría rápidamente. Su función es refinar la protección en el punto de uso, pero siempre debe estar precedido por un Tipo 2 y, si existe riesgo de impacto directo, por un Tipo 1.

### ¿Cómo identifico visualmente un SPD de Tipo 1 en un cuadro eléctrico?

Suelen ser dispositivos de mayor tamaño, con bornes de conexión robustos para secciones de cable de 25 mm² / AWG 3 o más, y en la placa de datos indica “Iimp” con valor en kA y la onda 10/350 µs. Frecuentemente llevan un indicador de estado de varistor y contacto de señalización remota.

### ¿Qué significa Up en un SPD y cómo afecta la protección de los equipos?

Up (tensión residual de protección) es el valor de pico de tensión que el SPD deja pasar hacia los equipos durante un transitorio. Cuanto menor sea, mejor protegido está el aparato. Para electrónica sensible se recomienda Up ≤ 1,2 kV / 1,2 kV, lo que corresponde a dispositivos Tipo 3.

### ¿Es obligatorio instalar un SPD según el reglamento electrotécnico?

En la mayoría de países se exige por normativa en nuevas construcciones o remodelaciones importantes, especialmente si el edificio cuenta con pararrayos o está en zona de alta actividad tormentosa. La norma IEC 60364-5-53 especifica los casos y los niveles de protección requeridos.

### ¿Los SPD protegen frente a sobretensiones permanentes?

No. Los SPD actúan exclusivamente sobre transitorios de corta duración (microsegundos). Para sobretensiones mantenidas de minutos u horas, como las provocadas por la pérdida del neutro, se necesitan relés de máxima tensión o protecciones combinadas tipo sobretensión+subtensión.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **electrical4u.com**: https://www.electrical4u.com/surge-protection-and-lightning-arrester-surge-arrester/
