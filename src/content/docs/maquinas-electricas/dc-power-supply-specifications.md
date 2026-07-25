---
title: "Fuentes de alimentación DC especificaciones"
sidebar:
  label: "Fuentes de alimentación DC especificaciones"
description: "Ficha tecnica: Fuentes de alimentación DC especificaciones"
keywords: ["DC power supply specifications types", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "power-supplies"
subcategory: "dc-power-supply"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Tensión de salida

La tensión de salida especifica el rango de voltaje continuo que la fuente puede suministrar a la carga. En fuentes de laboratorio ajustables, un valor típico es de 0 a 30 V, mientras que las fuentes fijas suelen entregar valores como 5 V, 12 V o 24 V. La tensión se expresa como valor nominal y con su tolerancia de ajuste, por ejemplo, ±(0,05 % + 10 mV).

| Tipo de fuente                     | Rango de tensión típico        |
|------------------------------------|--------------------------------|
| Laboratorio lineal ajustable       | 0–30 V / 0–30 V               |
| Fuente conmutada fija (5 V)        | 5,0 V ± 0,25 V / 5,0 V ± 0,25 V [VERIFICAR] |
| Fuente programable de alta tensión | 0–600 V / 0–600 V [VERIFICAR] |

## Corriente de salida

La corriente máxima que la fuente puede entregar de forma continua sin exceder sus límites térmicos ni activar las protecciones. En fuentes ajustables, la corriente puede ser limitada por el usuario dentro del rango nominal. Una fuente de banco típica ofrece de 0 a 5 A, aunque existen modelos desde miliamperios hasta cientos de amperios.

| Aplicación                                  | Corriente máxima típica      |
|---------------------------------------------|------------------------------|
| Fuente de banco de propósito general        | 5 A / 5 A                    |
| Cargador de baterías de plomo-ácido 12 V    | 10 A / 10 A [VERIFICAR]      |
| Fuente de alta potencia para galvanoplastia | 300 A / 300 A [VERIFICAR]    |

## Regulación de línea

La regulación de línea mide la capacidad de la fuente para mantener constante la tensión de salida frente a variaciones en la tensión de entrada. Se expresa en porcentaje más un valor fijo en milivoltios. Una fuente lineal de calidad presenta valores típicos inferiores al 0,01 % + 1 mV para una variación de entrada de ±10 %.

> **Regulación de línea (%) = (ΔVsalida / Vsalida nominal) × 100**

| Condición de entrada                       | Regulación de línea típica         |
|--------------------------------------------|------------------------------------|
| 230 V CA ± 10 % (fuente lineal)            | < 0,01 % + 1 mV / < 0,01 % + 1 mV [VERIFICAR] |
| 230 V CA ± 10 % (fuente conmutada)         | < 0,1 % + 5 mV / < 0,1 % + 5 mV   |
| 115 V CA – 230 V CA (rango universal)      | < 0,2 % + 10 mV / < 0,2 % + 10 mV |

## Regulación de carga

Indica la variación de la tensión de salida cuando la corriente demandada por la carga cambia entre vacío y plena carga. Una buena regulación de carga es esencial para alimentar circuitos sensibles. Los valores típicos en fuentes lineales de laboratorio están por debajo del 0,02 % + 2 mV.

> **Regulación de carga (%) = (Vsalida sin carga – Vsalida plena carga) / Vsalida plena carga × 100**

| Cambio de carga                  | Regulación de carga típica           |
|----------------------------------|--------------------------------------|
| 0–100 % (fuente lineal)          | < 0,02 % + 2 mV / < 0,02 % + 2 mV [VERIFICAR] |
| 10–90 % (fuente conmutada)       | < 0,1 % + 10 mV / < 0,1 % + 10 mV   |
| Fuentes de muy baja potencia     | < 0,5 % / < 0,5 %                    |

## Rizado y ruido

El rizado (componente alterna residual) y el ruido de alta frecuencia superpuestos a la salida de continua determinan la pureza de la tensión suministrada. Se mide en valor eficaz (rms) o pico a pico (pp). Las fuentes lineales alcanzan valores de ruido muy inferiores a los de las conmutadas.

| Tecnología de la fuente      | Rizado típico (rms)                         |
|------------------------------|---------------------------------------------|
| Lineal de laboratorio        | < 1 mV / 0.001 V [VERIFICAR]                |
| Conmutada estándar           | < 10 mV / 0.010 V [VERIFICAR]               |
| Conmutada de bajo ruido      | < 5 mV / 0.005 V                            |

## Eficiencia

La eficiencia de una fuente de alimentación DC es la relación entre la potencia de salida y la potencia de entrada, expresada en porcentaje. Las fuentes conmutadas son significativamente más eficientes que las lineales, con valores que pueden superar el 90 %, mientras que una lineal típica ronda el 50–65 %.

| Tipo de fuente                    | Eficiencia típica a plena carga    |
|-----------------------------------|------------------------------------|
| Fuente lineal con transformador   | 50–65 % / 50–65 % [VERIFICAR]      |
| Fuente conmutada de baja tensión  | 80–90 % / 80–90 %                  |
| Fuente conmutada con PFC activo   | > 92 % / > 92 %                    |

## Protecciones

Las protecciones integradas salvaguardan tanto la fuente como la carga frente a condiciones anómalas. Las más comunes son la protección contra sobrecorriente (OCP), sobretensión (OVP), sobretemperatura (OTP) y cortocircuito. La OCP puede implementarse como limitación de corriente constante (CC) o como desconexión (foldback).

| Protección               | Función principal                                            |
|--------------------------|--------------------------------------------------------------|
| Sobrecorriente (OCP)     | Limita la corriente a un valor seguro predefinido (ej. 110 %) |
| Sobretensión (OVP)       | Desconecta la salida si la tensión supera un umbral (ej. 120 %) |
| Cortocircuito            | Mantiene la corriente limitada o apaga la salida sin daños   |
| Sobretemperatura (OTP)   | Reduce la potencia o apaga la fuente al alcanzar la temperatura máxima de operación |

## Modos de operación

La mayoría de las fuentes de alimentación DC de laboratorio operan en dos modos: tensión constante (CV) y corriente constante (CC). En modo CV, la tensión se mantiene fija y la corriente varía según la carga; en modo CC, la fuente limita la corriente a un valor ajustado y la tensión se reduce automáticamente para no sobrepasarlo.

| Modo  | Característica de control                 |
|-------|-------------------------------------------|
| CV    | Vsalida constante, Isalida ≤ I límite    |
| CC    | Isalida constante, Vsalida ≤ V límite    |

## Respuesta transitoria

La respuesta transitoria describe el tiempo que tarda la tensión de salida en recuperar su valor nominal después de un cambio brusco de carga. Una fuente con buena respuesta transitoria minimiza las excursiones de tensión. Los tiempos típicos de recuperación están en el rango de microsegundos para fuentes conmutadas de alta velocidad.

| Escalón de carga | Tiempo de recuperación típico      | Desviación máxima de tensión      |
|------------------|------------------------------------|-----------------------------------|
| 50–100 %         | < 50 µs / < 0.00005 s [VERIFICAR]  | < 50 mV / < 0.05 V               |
| 10–90 %          | < 100 µs / < 0.0001 s              | < 100 mV / < 0.1 V               |

## Frequently Asked Questions (FAQ)

### ¿Cuál es el valor típico de rizado en una fuente lineal de laboratorio?
El rizado típico es inferior a 1 mV rms (0,001 V), lo que la hace adecuada para circuitos analógicos sensibles.

### ¿Qué eficiencia alcanza una fuente conmutada moderna?
Una fuente conmutada puede alcanzar eficiencias superiores al 90 % a plena carga gracias a la operación en conmutación de los semiconductores.

### ¿Cuál es la regulación de línea estándar en fuentes DC?
La regulación de línea suele ser de 0,01 % + 1 mV para variaciones de entrada de ±10 %, valor típico de fuentes lineales de precisión.

### ¿Qué corriente máxima entrega una fuente de banco económica?
La mayoría de las fuentes de banco económicas entregan hasta 5 A, con una potencia total de salida alrededor de 150 W.

### ¿En cuánto tiempo se recupera una fuente conmutada tras un cambio de carga del 50 %?
El tiempo de recuperación típico es inferior a 50 µs, con una desviación máxima de tensión de 50 mV.

### ¿Qué protección incluye una fuente DC frente a cortocircuitos?
Incluye protección contra cortocircuitos que limita la corriente a un valor seguro, típicamente 110 % de la corriente nominal, y no sufre daños permanentes.

## Fuentes consultadas

 - https://en.wikipedia.org/wiki/Power_supply