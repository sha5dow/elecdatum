---
title: "Tabla de orden de armónicos y fuentes"
sidebar:
  label: "Tabla de orden de armónicos y fuentes"
description: "Ficha tecnica: Tabla de orden de armónicos y fuentes"
keywords: ["harmonic order table sources 3rd 5th 7th", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "harmonic-order-table"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

En un sistema eléctrico de corriente alterna, los armónicos son componentes sinusoidales cuya frecuencia es un múltiplo entero de la frecuencia fundamental de la red (50 Hz en Europa, Asia y gran parte del mundo; 60 Hz en América y algunos países asiáticos). Estos componentes aparecen como consecuencia de cargas no lineales (rectificadores, variadores de velocidad, equipos electrónicos con fuentes conmutadas, etc.) que distorsionan la forma de onda de la corriente, y en menor medida de la tensión, generando problemas de calidad de energía como sobrecalentamiento de conductores y transformadores, disparos intempestivos de protecciones o pares pulsantes en motores. La tabla que se presenta a continuación recoge los órdenes armónicos más habituales en redes industriales y terciarias, sus frecuencias para las dos frecuencias fundamentales normalizadas, la secuencia de fase que presentan en sistemas trifásicos y las fuentes no lineales que típicamente los originan.

## Tabla de órdenes armónicos y fuentes típicas
Se listan los armónicos desde el orden 1 (fundamental) hasta el orden 25, con indicación de las frecuencias correspondientes a redes de 50 Hz y 60 Hz, así como las cargas que predominantemente los inyectan. Los armónicos pares suelen ser de magnitud muy reducida en sistemas equilibrados gracias a la simetría de media onda de las cargas industriales, pero se incluyen para completar la secuencia.

| Orden (h) | Frecuencia @ 50 Hz (Hz) | Frecuencia @ 60 Hz (Hz) | Secuencia de fase | Fuentes típicas |
|---|---|---|---|---|
| 1 (fund.) | 50 | 60 | Positiva (+) | Todas las cargas lineales; referencia |
| 2 | 100 | 120 | Negativa (−) | Rectificadores de media onda, asimetrías, cargas monofásicas desequilibradas |
| 3 | 150 | 180 | Cero (0) | Fuentes de alimentación monofásicas con puente rectificador y filtro capacitivo (computadoras, monitores, impresoras), balastos electrónicos de lámparas fluorescentes compactas, cargadores de baterías, saturación de transformadores |
| 4 | 200 | 240 | Positiva (+) | Similar al armónico 2; niveles habitualmente despreciables |
| 5 | 250 | 300 | Negativa (−) | Variadores de velocidad de 6 pulsos, rectificadores trifásicos de 6 pulsos, hornos de arco, controladores de fase por tiristores, grandes sistemas de alimentación ininterrumpida (SAI/UPS) |
| 6 | 300 | 360 | Cero (0) | Pequeñas asimetrías en rectificadores de 6 pulsos; normalmente bajo |
| 7 | 350 | 420 | Positiva (+) | Mismas fuentes que el 5º armónico: variadores de frecuencia, rectificadores de 6 pulsos, hornos de arco, convertidores estáticos |
| 8 | 400 | 480 | Negativa (−) | Nivel generalmente bajo; procesos de conmutación asimétricos |
| 9 | 450 | 540 | Cero (0) | Cargas electrónicas monofásicas masivas (ordenadores, iluminación LED con driver no corregido), armónicos triples superiores de equipos con rectificador y filtro capacitivo |
| 10 | 500 | 600 | Positiva (+) | Residual de cargas de media onda, desequilibrios |
| 11 | 550 | 660 | Negativa (−) | Convertidores de 12 pulsos (armónico característico), rectificadores de 6 pulsos, hornos de inducción |
| 12 | 600 | 720 | Cero (0) | Muy bajo en sistemas equilibrados; puede aparecer por desequilibrio |
| 13 | 650 | 780 | Positiva (+) | Convertidores de 12 pulsos (armónico característico), sistemas de tracción, soldadura por arco |
| 14 | 700 | 840 | Negativa (−) | Contribución residual de equipos de conmutación |
| 15 | 750 | 900 | Cero (0) | Acumulación de armónicos triples en centros de datos y edificios comerciales, sistemas de iluminación con balasto magnético saturado |
| 16 | 800 | 960 | Positiva (+) | Pequeñas perturbaciones; origen similar al armónico 14 |
| 17 | 850 | 1020 | Negativa (−) | Convertidores de 18 pulsos, accionamientos CC, hornos de arco |
| 18 | 900 | 1080 | Cero (0) | Típicamente bajo; asociado a desequilibrios en redes con gran presencia de triples |
| 19 | 950 | 1140 | Positiva (+) | Convertidores de 18 pulsos, sistemas de propulsión ferroviaria |
| 20 | 1000 | 1200 | Negativa (−) | Residual de conmutación |
| 21 | 1050 | 1260 | Cero (0) | Cargas monofásicas muy distorsionantes (electrodomésticos con fuentes no PFC) |
| 22 | 1100 | 1320 | Positiva (+) | Nivel normalmente insignificante |
| 23 | 1150 | 1380 | Negativa (−) | Convertidores de 24 pulsos, cargas industriales muy específicas |
| 24 | 1200 | 1440 | Cero (0) | Asimetrías mínimas |
| 25 | 1250 | 1500 | Positiva (+) | Convertidores multinivel, sistemas de muy alta potencia con inversores conmutados a alta frecuencia |

## Secuencia de fase de los armónicos
En un sistema trifásico equilibrado, la secuencia de fase de un armónico de orden h sigue un patrón cíclico de tres valores: los armónicos cuyo orden es de la forma **h = 3k+1** (1, 4, 7, 10, …) tienen secuencia **positiva** y crean campos giratorios en el mismo sentido que la componente fundamental; los órdenes de la forma **h = 3k+2** (2, 5, 8, 11, …) presentan secuencia **negativa** y producen campos que giran en sentido opuesto, lo que puede frenar momentáneamente a los motores y aumentar las pérdidas; y los armónicos **múltiplos de 3** (3, 6, 9, 12, …) exhiben secuencia **cero** u homopolar, lo que significa que las corrientes de estas frecuencias están en fase en las tres líneas y se suman aritméticamente en el conductor neutro. Esta es la razón por la que, en instalaciones con alta densidad de cargas monofásicas no lineales (ordenadores, iluminación electrónica), el neutro puede transportar corrientes superiores a las de fase, obligando a sobredimensionarlo para evitar sobrecalentamientos.

## Preguntas frecuentes (FAQ)

### ¿Por qué los armónicos de orden múltiplo de 3 (triplen) se suman en el neutro?
Porque en un sistema trifásico las corrientes de secuencia cero de las tres fases están en fase entre sí (desplazamiento de 0°) en lugar de estarlo a 120°, por lo que la corriente de retorno por el neutro es la suma algebraica de las tres corrientes de fase. Si las cargas monofásicas generan un 15 % de tercer armónico, la corriente de neutro puede alcanzar hasta un 45 % de la corriente de fase, incluso con cargas equilibradas.

### ¿Cuáles son las principales fuentes del 5º y 7º armónico?
Los armónicos 5º (250 Hz en red de 50 Hz) y 7º (350 Hz en red de 50 Hz) son los armónicos característicos de los rectificadores trifásicos de seis pulsos, ampliamente utilizados en variadores de velocidad, sistemas de alimentación ininterrumpida (SAI), cargadores industriales de baterías y hornos de arco de corriente continua. Su amplitud típica en la corriente de entrada de un rectificador de 6 pulsos puede ser del 20 % para el 5º armónico y del 14 % para el 7º respecto de la fundamental.

### ¿Qué diferencia hay entre secuencia positiva, negativa y cero en los armónicos?
La secuencia positiva produce un campo magnético giratorio en el mismo sentido que el fundamental, por lo que contribuye al par motor; la secuencia negativa genera un campo en sentido opuesto que se opone al giro, provocando calentamiento y vibraciones en máquinas rotativas; la secuencia cero no produce campo rotatorio neto pero las corrientes se suman en el neutro y pueden saturar núcleos magnéticos de transformadores con conexión estrella-estrella.

### ¿Cómo afectan los armónicos a los motores de inducción?
Los armónicos de corriente aumentan las pérdidas en el cobre por el efecto pelicular (las pérdidas resistivas crecen aproximadamente con el cuadrado de la frecuencia) y las pérdidas en el hierro (las pérdidas por histéresis son proporcionales a la frecuencia y las por corrientes de Foucault al cuadrado de la frecuencia). Además, los armónicos de secuencia negativa, como el 5º, crean pares pulsantes y un par de frenado que reduce el rendimiento efectivo del motor, pudiendo originar vibraciones y ruido acústico.

### ¿Es normal encontrar armónicos pares en una red eléctrica?
En condiciones ideales de operación, las formas de onda de corriente y tensión presentan simetría de media onda, lo que elimina los armónicos pares. Sin embargo, pueden aparecer armónicos pares de bajo nivel cuando existen cargas que conducen de manera asimétrica (rectificadores de media onda), transformadores con saturación asimétrica, o cuando hay desequilibrios severos entre fases. En condiciones normales, los armónicos pares suelen ser inferiores al 1 % de la fundamental.

### ¿Qué norma internacional regula los límites de emisión de armónicos?
La norma IEC 61000-3-2 establece los límites de emisión de corriente armónica para equipos con corriente de entrada ≤ 16 A por fase, clasificándolos en cuatro clases (A, B, C y D) en función del tipo de equipo y de la forma de onda de la corriente. Para corrientes superiores, la IEC 61000-3-12 fija los límites para equipos de 16 A a 75 A. A nivel de sistema, la IEEE 519 (utilizada en América) y la IEC 61000-3-6 / EN 50160 (Europa) definen los niveles de compatibilidad y los límites de distorsión armónica total en el punto de conexión común.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-10/harmonic-phase-sequences/
