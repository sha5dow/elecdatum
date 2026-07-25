---
title: "Cálculo de corriente de motor por HP"
sidebar:
  label: "Cálculo de corriente de motor por HP"
description: "Ficha tecnica: Cálculo de corriente de motor por HP"
keywords: ["motor full load current calculation HP table", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "motor-electrical"
subcategory: "motor-current-calculation"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El cálculo de la corriente de un motor eléctrico a partir de su potencia en caballos de fuerza (HP) es fundamental para dimensionar conductores, protecciones y evaluar la carga eléctrica. Un caballo de fuerza mecánico (hp) equivale a 745,7 W, mientras que el caballo eléctrico (hpE) es exactamente 746 W. Conocida la potencia en vatios, la corriente nominal se obtiene despejando las fórmulas de potencia eléctrica e incorporando la eficiencia del motor y el factor de potencia.

## Fórmulas de potencia eléctrica

La relación general entre la potencia mecánica en el eje (expresada en W o kW), la tensión de alimentación y la corriente absorbida depende del tipo de motor y del número de fases.

> **Para motores monofásicos de CA:**  
> **I = P / (V × η × FP)**  

> **Para motores trifásicos de CA:**  
> **I = P / (√3 × V × η × FP)**  

> **Para motores de CC:**  
> **I = P / (V × η)**  

Donde:

| Variable | Significado | Unidad |
| --- | --- | --- |
| I | Corriente a plena carga | A |
| P | Potencia mecánica en el eje | W o kW |
| V | Tensión de alimentación (línea-línea para trifásicos) | V |
| η | Eficiencia del motor (tanto por uno) | – |
| FP | Factor de potencia (cos φ) | – |
| √3 | Raíz cuadrada de 3 (~1,732) | – |

Las tablas de corriente nominal estándar presentadas en las secciones siguientes asumen valores típicos de eficiencia y factor de potencia implícitos en las normas de fabricación, por lo que no es necesario aplicar las fórmulas anteriores cuando se trabaja con esos valores tabulados.

## Reglas prácticas de estimación rápida

Para una estimación preliminar de la corriente a plena carga pueden emplearse los siguientes valores aproximados por caballo de fuerza, válidos para motores de inducción de jaula de ardilla en condiciones nominales.

| Tipo de motor y tensión | Amperios por HP (aproximado) |
| --- | --- |
| Motor monofásico – 115 V | 14 A/HP |
| Motor monofásico – 230 V | 7 A/HP |
| Motor trifásico – 230 V | 2,5 A/HP |
| Motor trifásico – 460 V | 1,25 A/HP |

Estos coeficientes no sustituyen los datos de placa del fabricante ni los valores exactos tabulados; únicamente sirven como referencia durante la fase inicial de diseño.

## Corriente nominal para motores monofásicos

La tabla siguiente recoge las corrientes nominales a plena carga para motores monofásicos de inducción de jaula de ardilla, según tensiones normalizadas en América del Norte.

| Potencia | Tensión 115 V | Tensión 208 V | Tensión 230 V |
| --- | --- | --- | --- |
| 1/6 HP / 0,13 kW | 4,4 A | 2,4 A | 2,2 A |
| 1/4 HP / 0,19 kW | 5,8 A | 3,2 A | 2,9 A |
| 1/3 HP / 0,25 kW | 7,2 A | 4,0 A | 3,6 A |
| 1/2 HP / 0,37 kW | 9,8 A | 5,4 A | 4,9 A |
| 3/4 HP / 0,56 kW | 13,8 A | 7,6 A | 6,9 A |
| 1 HP / 0,75 kW | 16 A | 8,8 A | 8 A |
| 1 1/2 HP / 1,1 kW | 20 A | 11 A | 10 A |
| 2 HP / 1,5 kW | 24 A | 13,2 A | 12 A |
| 3 HP / 2,2 kW | 34 A | 18,7 A | 17 A |
| 5 HP / 3,7 kW | 56 A | 30,8 A | 28 A |

Los valores de corriente no tienen en cuenta la eficiencia ni el factor de potencia reales del motor, que deben considerarse para evitar conductores o protecciones insuficientes.

## Corriente nominal para motores trifásicos

A continuación se indican las corrientes a plena carga para motores trifásicos de inducción de jaula de ardilla y de rotor bobinado, así como para motores síncronos con factor de potencia unidad, según normas americanas.

| Potencia | Tensión 115 V | Tensión 230 V | Tensión 460 V | Tensión 575 V | Tensión 2300 V | Tipo síncrono 230 V | Tipo síncrono 460 V | Tipo síncrono 575 V | Tipo síncrono 2300 V |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1/2 HP / 0,37 kW | 4 A | 2 A | 1 A | 0,8 A | – | – | – | – | – |
| 3/4 HP / 0,56 kW | 5,6 A | 2,8 A | 1,4 A | 1,1 A | – | – | – | – | – |
| 1 HP / 0,75 kW | 7,2 A | 3,6 A | 1,8 A | 1,4 A | – | – | – | – | – |
| 1 1/2 HP / 1,1 kW | 10,4 A | 5,2 A | 2,6 A | 2,1 A | – | – | – | – | – |
| 2 HP / 1,5 kW | 13,6 A | 6,8 A | 3,4 A | 2,7 A | – | – | – | – | – |
| 3 HP / 2,2 kW | – | 9,6 A | 4,8 A | 3,9 A | – | – | – | – | – |
| 5 HP / 3,7 kW | – | 15,2 A | 7,6 A | 6,1 A | – | – | – | – | – |
| 7 1/2 HP / 5,6 kW | – | 22 A | 11 A | 9 A | – | – | – | – | – |
| 10 HP / 7,5 kW | – | 28 A | 14 A | 11 A | – | – | – | – | – |
| 15 HP / 11 kW | – | 42 A | 21 A | 17 A | – | – | – | – | – |
| 20 HP / 15 kW | – | 54 A | 27 A | 22 A | – | – | – | – | – |
| 25 HP / 19 kW | – | 68 A | 34 A | 27 A | – | 53 A | 26 A | 21 A | – |
| 30 HP / 22 kW | – | 80 A | 40 A | 32 A | – | 63 A | 32 A | 26 A | – |
| 40 HP / 30 kW | – | 104 A | 52 A | 41 A | – | 83 A | 41 A | 33 A | – |
| 50 HP / 37 kW | – | 130 A | 65 A | 52 A | – | 104 A | 52 A | 42 A | – |
| 60 HP / 45 kW | – | 154 A | 77 A | 62 A | 16 A | 123 A | 61 A | 49 A | 12 A |
| 75 HP / 56 kW | – | 192 A | 96 A | 77 A | 20 A | 155 A | 78 A | 62 A | 15 A |
| 100 HP / 75 kW | – | 248 A | 124 A | 99 A | 26 A | 202 A | 101 A | 81 A | 20 A |

Las celdas marcadas con guion indican que el motor no suele fabricarse o que los datos no están normalizados para esa combinación de potencia y tensión. Los valores de motor síncrono se refieren exclusivamente a factor de potencia unitario.

## Corriente nominal para motores de corriente continua

La siguiente tabla proporciona la corriente a plena carga para motores de CC con tensiones típicas de 230 V y 440 V.

| Potencia | Tensión 230 V CC | Tensión 440 V CC |
| --- | --- | --- |
| 1/4 HP / 0,19 kW | 0,81 A | 0,42 A |
| 1/3 HP / 0,25 kW | 1,1 A | 0,56 A |
| 1/2 HP / 0,37 kW | 1,6 A | 0,85 A |
| 3/4 HP / 0,56 kW | 2,4 A | 1,3 A |
| 1 HP / 0,75 kW | 3,2 A | 1,7 A |
| 1 1/2 HP / 1,1 kW | 4,9 A | 2,5 A |
| 2 HP / 1,5 kW | 6,5 A | 3,4 A |
| 3 HP / 2,2 kW | 9,7 A | 5,1 A |
| 5 HP / 3,7 kW | 16 A | 8,5 A |
| 7 1/2 HP / 5,6 kW | 24 A | 13 A |
| 10 HP / 7,5 kW | 32 A | 17 A |
| 15 HP / 11 kW | 49 A | 25 A |
| 20 HP / 15 kW | 65 A | 34 A |
| 30 HP / 22 kW | 97 A | 51 A |
| 50 HP / 37 kW | 162 A | 85 A |
| 75 HP / 56 kW | 243 A | 127 A |
| 100 HP / 75 kW | 324 A | 170 A |

Para alimentación a 115 V CC, la corriente es aproximadamente el doble de la indicada para 230 V CC.

## Factores que afectan la corriente real

Los valores tabulados representan condiciones nominales y deben ajustarse cuando las condiciones reales de operación difieran de las hipótesis de diseño.

- **Eficiencia del motor.** Las tablas estándar no incluyen la eficiencia real del motor. Un motor de 1 HP con eficiencia del 82 % demandará más corriente que uno equivalente con eficiencia del 90 %. La eficiencia máxima suele alcanzarse cerca del 75 % de la carga nominal.
- **Factor de potencia.** En motores de inducción, el factor de potencia disminuye con cargas ligeras, aumentando la componente reactiva de la corriente sin incrementar la potencia activa.
- **Tolerancia de tensión.** La corriente varía inversamente con la tensión dentro de ±10 %. Una tensión un 5 % por debajo de la nominal puede elevar la corriente entre un 5 % y un 10 % para la misma potencia de salida.
- **Factor de servicio.** Motores con factor de servicio (SF) mayor que 1,0 pueden soportar sobrecargas moderadas; en esos regímenes la corriente supera el valor nominal tabulado.
- **Temperatura ambiente y altitud.** Temperaturas superiores a 40 °C o altitudes por encima de 1000 m sobre el nivel del mar obligan a reducir la carga o a sobredimensionar el motor, modificando la corriente de trabajo.

## Relación con protecciones y conductores

Los datos de corriente a plena carga (FLA, *Full Load Amperes*) se utilizan como base para calcular la capacidad mínima de los conductores (MCA, *Minimum Circuit Ampacity*) y la protección máxima contra sobrecorriente (MOCP, *Maximum Over-Current Protection*).

> **MCA = 1,25 × (FLA del motor + corriente de otras cargas resistivas)**  

> **MOCP = (2,25 × FLA del motor más grande) + (FLA de otros motores) + (corriente de cargas no motoras)**  

El MOCP nunca debe ser inferior al MCA y, en ningún caso, menor de 15 A según los códigos eléctricos norteamericanos. El valor calculado se ajusta al tamaño normalizado inmediato superior de fusible o interruptor, a menos que ya coincida con un valor estándar.

La corriente de rotor bloqueado (LRA, *Locked Rotor Amperes*) es otro parámetro relevante para coordinar las protecciones y puede estimarse como:

> **LRA ≈ 8 × FLA**  

Este pico de corriente inicial determina la caída de tensión durante el arranque y condiciona la selección de contactores y relés de sobrecarga.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre FLA y MCA?
FLA (Full Load Amperes) es la corriente que consume el motor a plena carga en condiciones nominales. MCA (Minimum Circuit Ampacity) es la capacidad de corriente mínima que deben soportar los conductores del circuito según la normativa, e incluye un margen de seguridad sobre el FLA.

### ¿Por qué en las tablas no se tiene en cuenta la eficiencia del motor?
Las tablas de corriente nominal estándar asumen valores de eficiencia y factor de potencia típicos para motores de fabricación normalizada. Si se utiliza un motor de alta eficiencia o de características especiales, la corriente real puede ser menor y es necesario calcularla específicamente.

### ¿Cuál es la diferencia entre HP, hp y hpE?
El HP o hp (horsepower) mecánico equivale a 745,7 W y es el más habitual en motores eléctricos. El hpE (caballo eléctrico) es exactamente 746 W, utilizado en contextos de laboratorio. El HP métrico (PS o cv) equivale a 735,5 W, pero no se emplea en las tablas de motores según normas americanas.

### ¿Cómo convierto HP a kW para usar las tablas?
1 HP mecánico = 0,746 kW. Para convertir, multiplique los HP por 0,746. Las tablas incluyen la equivalencia para facilitar la lectura directa en ambos sistemas.

### ¿Los valores de corriente de las tablas son válidos para motores con variador de frecuencia?
No directamente. Las corrientes de entrada de un variador de frecuencia pueden diferir de la corriente del motor debido al factor de potencia y a la distorsión armónica. Debe consultarse la documentación del variador y del motor para el dimensionamiento de conductores y protecciones.

### ¿Qué sucede si se utiliza un fusible o interruptor mayor que el MOCP calculado?
Se pierde la protección adecuada contra sobrecorrientes y cortocircuitos. El conductor podría sobrecalentarse ante una falla, con riesgo de incendio. El MOCP es un límite máximo; nunca debe superarse.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/elctrical-motor-full-load-current-d_1499.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-13/single-phase-induction-motors/
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
