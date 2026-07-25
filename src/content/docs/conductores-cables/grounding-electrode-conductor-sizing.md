---
title: "Calibre de conductor de electrodo de tierra"
sidebar:
  label: "Calibre de conductor de electrodo de tierra"
description: "Ficha tecnica: Calibre de conductor de electrodo de tierra"
keywords: ["grounding electrode conductor size table", "conductores-cables"]
category: "conductores-cables"
topic: "grounding-conductors"
subcategory: "grounding-electrode-conductor"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Descripción y función
El conductor de electrodo de tierra es el puente que conecta el sistema de puesta a tierra de una instalación eléctrica con el electrodo (varilla, placa, anillo o estructura metálica enterrada). Su función principal es establecer un camino de baja impedancia hacia la masa de tierra para derivar corrientes de falla, sobretensiones atmosféricas y descargas electrostáticas, garantizando la equipotencialidad y la operación segura de las protecciones. El calibre de este conductor se selecciona en función del tamaño del conductor de acometida más grande, no de la corriente nominal del interruptor principal.

## Normativa aplicable
La referencia normativa primordial es el Artículo 250 del *National Electrical Code* (NEC), en particular la Tabla 250.66 para conductores de cobre y aluminio. Esta tabla relaciona el área equivalente de los conductores de fase de la acometida con el calibre mínimo del conductor de electrodo de tierra. Los electrodos de varilla, tubería o placa reciben un tratamiento diferenciado según la sección 250.66(A), mientras que los electrodos embebidos en concreto se rigen por 250.66(B).

## Tabla de selección según NEC 250.66
La dimensión mínima del conductor de electrodo de tierra de cobre se obtiene de la siguiente correspondencia, donde el tamaño de entrada es el mayor conductor de servicio o su área equivalente en caso de conductores en paralelo.

| Tamaño del conductor de entrada de cobre (AWG/kcmil) | Calibre mínimo del electrodo de tierra de cobre (AWG/kcmil) | Área de sección del electrodo (mm² / in²) |
| --- | --- | --- |
| Hasta 2 inclusive | 8 | 8.36 mm² / 0.0131 in² |
| 1 o 1/0 | 6 | 13.3 mm² / 0.0206 in² |
| 2/0 o 3/0 | 4 | 21.1 mm² / 0.0327 in² |
| Superior a 3/0 hasta 350 | 2 | 33.6 mm² / 0.0523 in² |
| Superior a 350 hasta 600 | 1/0 | 53.5 mm² / 0.0830 in² |
| Superior a 600 hasta 1100 | 2/0 | 67.4 mm² / 0.1045 in² |
| Superior a 1100 | 3/0 | 85.0 mm² / 0.1318 in² |

## Excepciones a la regla general
- **Electrodo de varilla, tubería o placa (NEC 250.66(A)):** Cuando el único electrodo es de este tipo, el conductor de puesta a tierra no necesita ser mayor de 6 AWG de cobre (13.3 mm² / 0.0206 in²), independientemente del tamaño de la acometida.
- **Electrodo embebido en concreto — UFER (NEC 250.66(B)):** El conductor que conecta la armadura de acero de una fundación como electrodo no necesita ser mayor de 4 AWG de cobre (21.1 mm² / 0.0327 in²).
- **Electrodos múltiples:** Cuando se emplean varios electrodos y se unen con un puente de puesta a tierra común, el calibre de dicho puente se determina con la tabla general, mientras que los tacos individuales a cada electrodo pueden regirse por las excepciones anteriores.

## Dimensiones de conductores AWG relevantes
Para facilitar la interpretación dimensional, se ofrecen las características físicas de los calibres más utilizados en conductores de electrodo de tierra, según los patrones del *American Wire Gauge*.

| Calibre AWG | Diámetro del cobre sólido (mm / in) | Sección transversal (mm² / in²) |
| --- | --- | --- |
| 8 | 3.26 mm / 0.129 in | 8.36 mm² / 0.0131 in² |
| 6 | 4.11 mm / 0.162 in | 13.3 mm² / 0.0206 in² |
| 4 | 5.19 mm / 0.204 in | 21.1 mm² / 0.0327 in² |
| 2 | 6.54 mm / 0.258 in | 33.6 mm² / 0.0523 in² |
| 1/0 | 8.25 mm / 0.325 in | 53.5 mm² / 0.0830 in² |
| 2/0 | 9.27 mm / 0.365 in | 67.4 mm² / 0.1045 in² |
| 3/0 | 10.4 mm / 0.410 in | 85.0 mm² / 0.1318 in² |

## Ejemplo de dimensionamiento
Si una instalación cuenta con dos conductores de cobre de 250 kcmil por fase en paralelo, el área equivalente de la acometida es de 500 kcmil. Ese valor se ubica en el rango «superior a 350 hasta 600 kcmil» de la Tabla 250.66. Por tanto, el conductor de electrodo de tierra de cobre requerido es de calibre 1/0 AWG, con una sección mínima de 53.5 mm² / 0.0830 in². Si, en cambio, el único electrodo fuera una varilla de cobre enterrada, la excepción 250.66(A) permitiría reducir el calibre a 6 AWG (13.3 mm² / 0.0206 in²).

## Preguntas frecuentes (FAQ)
### ¿Cuál es el calibre mínimo del conductor de electrodo de tierra cuando el conductor de acometida de cobre más grande es 2 AWG?
8 AWG (8.36 mm² / 0.0131 in²) es el calibre mínimo exigido por la NEC 250.66 para un servicio con entrada de hasta 2 AWG.

### ¿Qué valor máximo de resistencia a tierra admite el NEC para un electrodo único?
25 ohmios es el límite superior de resistencia a tierra que debe presentar un solo electrodo; en caso contrario se debe instalar un electrodo suplementario.

### ¿Cuál es la sección transversal de un conductor de cobre macizo calibre 6 AWG?
13.3 mm² / 0.0206 in² de superficie conductora ofrece un alambre 6 AWG, suficiente para unir electrodos de varilla o tubería según la excepción 250.66(A).

### ¿Desde qué tamaño de acometida se vuelve obligatorio un conductor de electrodo de tierra de 1/0 AWG?
Desde 350 kcmil hasta 600 kcmil de conductor de entrada de cobre, la tabla exige como mínimo 1/0 AWG (53.5 mm² / 0.0830 in²).

### ¿Cuál es la longitud máxima recomendada para un conductor de electrodo de tierra sin empalmes?
6 m / 20 ft es una longitud práctica habitual que mantiene baja la impedancia; el NEC no fija una distancia límite, pero sí exige que la conexión sea continua sin empalmes.

### ¿Cuál es el diámetro exterior de un conductor 2 AWG sólido de cobre?
6.54 mm / 0.258 in mide el diámetro de un conductor 2 AWG desnudo, un calibre empleado para electrodos cuando la acometida supera 3/0 AWG.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **southwire.com**: https://www.southwire.com/calculators
