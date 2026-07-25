---
title: "Interpretación de placa de datos de motor"
sidebar:
  label: "Interpretación de placa de datos de motor"
description: "Ficha tecnica: Interpretación de placa de datos de motor"
keywords: ["motor nameplate data interpretation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-nameplate"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## ¿Qué es la placa de datos del motor?

La placa de datos de un motor eléctrico, también conocida como placa de características o placa de identificación, es una etiqueta metálica o de material resistente fijada al bastidor del motor que contiene información técnica esencial para su correcta selección, instalación, operación y mantenimiento. Todo motor trifásico de inducción de jaula de ardilla fabricado bajo las normas NEMA (National Electrical Manufacturers Association) debe incluir, como mínimo, los parámetros que se detallan en esta guía.

## Parámetros principales de la placa

Los datos que se encuentran en la placa de un motor industrial típico, junto con sus valores más comunes, son los siguientes:

| Parámetro | Significado | Ejemplo típico (métrico / imperial) |
| --- | --- | --- |
| Tensión nominal | Tensión de alimentación para la cual se diseña el motor | 460 V / 460 V (común en sistemas trifásicos) |
| Corriente a plena carga (FLA) | Corriente absorbida por el motor a la potencia nominal y tensión nominal | 15,2 A / 15,2 A (para 10 HP) |
| Potencia nominal | Potencia mecánica en el eje expresada en HP o kW | 7,5 kW / 10 HP |
| Frecuencia | Frecuencia de la red de alimentación | 60 Hz / 60 Hz |
| Velocidad nominal | Velocidad de giro del eje a plena carga | 1760 r/min / 1760 rpm |
| Factor de servicio (SF) | Reserva de sobrecarga temporal admisible | 1,15 / 1,15 |
| Clase de aislamiento | Temperatura máxima del sistema de aislamiento | F (155 °C / 311 °F) |
| Régimen de servicio | Tipo de carga según IEC (S1: continuo, S2: tiempo limitado, etc.) | S1 |
| Grado de protección IP | Protección contra ingreso de sólidos y líquidos | IP55 |
| Letra código NEMA | Relación kVA/HP con rotor bloqueado para cálculo de corriente de arranque | G (5,6-6,29) |
| Factor de potencia nominal | Relación entre potencia activa y aparente a plena carga | 0,85 |
| Rendimiento nominal | Eficiencia a plena carga | 91,7 % |

## Fórmulas relacionadas

La información de la placa permite calcular la corriente de arranque a partir de la letra código NEMA. Se utiliza la siguiente expresión:

> **I\_arranque (A) = (Código\_kVA/HP × HP\_motor × 1000) / (√3 × V\_línea)**

Donde:

| Variable | Descripción | Unidad |
| --- | --- | --- |
| Código\_kVA/HP | Valor medio del rango correspondiente a la letra código (según tabla NEMA) | kVA/HP |
| HP\_motor | Potencia nominal del motor en HP | HP |
| V\_línea | Tensión nominal entre fases | V |

Para obtener la corriente en amperios con un valor de código kVA/HP de 5,9 (letra G) y un motor de 10 HP a 460 V, se tiene:

> **I\_arranque = (5,9 × 10 × 1000) / (1,732 × 460) = 74,1 A**

## Códigos NEMA de rotor bloqueado

NEMA asigna una letra código a cada motor para indicar los kVA aparentes por HP que demanda durante el arranque con rotor bloqueado (a tensión plena). Es indispensable para dimensionar protecciones y coordinar las caídas de tensión en la instalación. La siguiente tabla muestra los rangos y los valores medios que se emplean en los cálculos de ingeniería.

| Letra código NEMA | Rango kVA/HP | Valor medio aproximado |
| --- | --- | --- |
| A | 0,00 - 3,14 | 1,6 |
| B | 3,15 - 3,55 | 3,3 |
| C | 3,55 - 3,99 | 3,8 |
| D | 4,0 - 4,49 | 4,3 |
| E | 4,5 - 4,99 | 4,7 |
| F | 5,0 - 5,59 | 5,3 |
| G | 5,6 - 6,29 | 5,9 |
| H | 6,3 - 7,09 | 6,7 |
| J | 7,1 - 7,99 | 7,5 |
| K | 8,0 - 8,99 | 8,5 |
| L | 9,0 - 9,99 | 9,5 |
| M | 10,0 - 11,19 | 10,6 |
| N | 11,2 - 12,49 | 11,8 |
| P | 12,5 - 13,99 | 13,2 |
| R | 14,0 - 15,99 | 15,0 |
| S | 16,0 - 17,99 | — |
| T | 18,0 - 19,99 | — |
| U | 20,0 - 22,39 | — |
| V | 22,4 y superior | — |

## Ejemplo de interpretación

Un motor con placa que indica 460 V, 10 HP, letra código G y velocidad nominal 1760 r/min tiene las siguientes implicancias:

- La corriente a plena carga (FLA) típica para esta potencia a 460 V es de aproximadamente 15,2 A.
- Con letra código G (kVA/HP entre 5,6 y 6,29), la corriente de arranque a tensión plena estará entre 70,3 A y 79,0 A, pudiendo provocar caídas de tensión notables en líneas débiles.
- La velocidad de 1760 r/min indica un deslizamiento nominal de (1800 - 1760)/1800 ≈ 2,22 %, propio de un motor de 4 polos a 60 Hz.
- El factor de servicio de 1,15 le permite operar con una sobrecarga del 15 % de forma continua sin exceder la clase de aislamiento, siempre que las condiciones ambientales sean las de diseño.

## Preguntas frecuentes (FAQ)

### ¿Qué significa la letra código NEMA en un motor?
La letra código NEMA indica la relación entre los kVA de arranque y la potencia en HP; por ejemplo, la letra G corresponde a un rango de 5,6 a 6,29 kVA/HP, equivalente a una corriente de arranque de 74 A en un motor de 10 HP a 460 V.

### ¿Cómo se calcula la corriente de arranque a partir del código de letra?
Se multiplica la potencia del motor en HP por el valor medio de kVA/HP del código (ej. 5,9 para letra G), se convierte a VA y se divide por la tensión de línea y el factor √3; para 10 HP y 460 V se obtienen 74 A.

### ¿Qué importancia tiene el factor de servicio en la placa del motor?
El factor de servicio, comúnmente 1,15, significa que el motor puede suministrar hasta un 15 % más de potencia de forma continua sin sobrecalentarse, lo que equivale a 11,5 HP en un motor de 10 HP, siempre que la temperatura ambiente no supere los 40 °C / 104 °F.

### ¿Cuál es la diferencia entre la velocidad en placa y la velocidad síncrona?
La velocidad en placa es la velocidad real del eje bajo carga nominal; por ejemplo, 1760 r/min frente a 1800 r/min síncrona en un motor de 4 polos a 60 Hz, lo que da un deslizamiento de 40 r/min (2,22 %).

### ¿Qué representa la clase de aislamiento y cómo se relaciona con la temperatura?
La clase F permite una temperatura máxima de bobinado de 155 °C / 311 °F; en un motor con elevación de temperatura clase B (80 K sobre 40 °C ambiente) se tiene un margen de 35 K antes de alcanzar el límite de la clase F, prolongando la vida útil.

### ¿Para qué sirve el grado IP indicado en la placa?
El grado IP55 indica protección contra polvo (5) y contra chorros de agua desde cualquier dirección (5); esto permite instalar el motor en ambientes húmedos o sucios sin que se degrade su aislamiento.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/locked-rotor-code-d_917.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/news/products-and-solutions/weg-creates-app-to-access-motor-technical-information
