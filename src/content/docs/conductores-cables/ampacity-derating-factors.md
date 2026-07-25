---
title: "Factores de corrección por temperatura y agrupamiento"
sidebar:
  label: "Factores de corrección por temperatura y agrupamiento"
description: "Ficha tecnica: Factores de corrección por temperatura y agrupamiento"
keywords: ["ampacity derating factors temperature conduit fill", "conductores-cables"]
category: "conductores-cables"
topic: "ampacity"
subcategory: "derating-factors"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Definición de ampacidad y factores de corrección

La ampacidad es la capacidad máxima de conducción de corriente de un conductor eléctrico, expresada en amperios, que puede soportar de forma continua sin sobrepasar su temperatura de funcionamiento admisible. Esta capacidad depende de la resistencia del conductor, el tipo de aislamiento, la temperatura ambiente y la capacidad de disipación térmica del entorno. Cuando las condiciones de instalación difieren de las de referencia (habitualmente 30 °C / 86 °F de temperatura ambiente y un máximo de tres conductores portadores de corriente en un ducto o cable), se aplican factores de corrección para garantizar una operación segura.

El factor de corrección por temperatura ajusta la ampacidad debido a una temperatura ambiente distinta de la de referencia. El factor de corrección por agrupamiento considera la reducción de la capacidad de disipación de calor cuando varios conductores portadores de corriente comparten un mismo espacio cerrado, como un conduit, una canalización o una bandeja.

Ambos factores son multiplicativos y se aplican simultáneamente a la ampacidad nominal para obtener la corriente máxima admisible bajo condiciones reales de instalación.

## Factor de corrección por temperatura ambiente

Cuando la temperatura del entorno excede el valor de referencia (normalmente 30 °C / 86 °F), la capacidad de evacuación del calor generado por el conductor disminuye, por lo que la corriente admisible debe reducirse. Los factores de corrección varían en función de la clase de aislamiento del conductor. La tabla siguiente recoge los factores más habituales para aislamientos con temperaturas máximas de servicio de 60 °C, 75 °C y 90 °C, de acuerdo con estándares internacionales aplicables a instalaciones de baja tensión.

| Rango de temperatura ambiente | Factor (aislamiento 60 °C) | Factor (aislamiento 75 °C) | Factor (aislamiento 90 °C) |
| --- | --- | --- | --- |
| 21‑25 °C / 70‑77 °F | 1.08 | 1.05 | 1.04 |
| 26‑30 °C / 78‑86 °F | 1.00 | 1.00 | 1.00 |
| 31‑35 °C / 87‑95 °F | 0.91 | 0.94 | 0.96 |
| 36‑40 °C / 96‑104 °F | 0.82 | 0.88 | 0.91 |
| 41‑45 °C / 106‑113 °F | 0.71 | 0.82 | 0.87 |
| 46‑50 °C / 115‑122 °F | 0.58 | 0.75 | 0.82 |
| 51‑55 °C / 124‑131 °F | 0.41 | 0.67 | 0.76 |
| 56‑60 °C / 133‑140 °F | — | 0.58 | 0.71 |
| 61‑65 °C / 142‑149 °F | — | 0.47 | 0.65 |
| 66‑70 °C / 151‑158 °F | — | 0.33 | 0.58 |
| 71‑75 °C / 160‑167 °F | — | — | 0.50 |
| 76‑80 °C / 169‑176 °F | — | — | 0.41 |
| 81‑85 °C / 178‑185 °F | — | — | 0.29 |

## Factor de corrección por agrupamiento (conductores en ducto o cable)

Cuando en un mismo conducto, canalización o cable multiconductor se alojan más de tres conductores portadores de corriente, la acumulación de calor reduce la capacidad de disipación individual. La ampacidad debe multiplicarse por un factor de agrupamiento que depende del número de conductores activos. La tabla siguiente presenta los factores de ajuste típicos, basados en normativas de referencia para instalaciones eléctricas.

| Número de conductores portadores de corriente | Factor de agrupamiento (porcentaje de la ampacidad nominal) |
| --- | --- |
| 1 a 3 | 1.00 (100 %) |
| 4 a 6 | 0.80 (80 %) |
| 7 a 9 | 0.70 (70 %) |
| 10 a 20 | 0.50 (50 %) |
| 21 a 30 | 0.45 (45 %) |
| 31 a 40 | 0.40 (40 %) |
| 41 o más | 0.35 (35 %) |

En instalaciones donde coexistan correcciones por temperatura y por agrupamiento, ambos factores se multiplican secuencialmente sobre la ampacidad base.

## Cálculo de la ampacidad corregida

La ampacidad corregida se obtiene aplicando todos los factores de corrección relevantes sobre el valor nominal tabulado. La expresión general es:

> **I_corr = I₀ × f_T × f_A**

donde:

| Variable | Descripción | Unidad |
| --- | --- | --- |
| I_corr | Ampacidad corregida | A |
| I₀ | Ampacidad nominal del conductor en condiciones de referencia (por lo general 30 °C / 86 °F y máximo 3 conductores en ducto) | A |
| f_T | Factor de corrección por temperatura ambiente (adimensional) | — |
| f_A | Factor de corrección por agrupamiento (adimensional) | — |

Si existen otras condiciones adversas (enterramiento profundo, exposición solar, etc.), se añaden factores adicionales multiplicativos.

## Ejemplo práctico

Se desea determinar la ampacidad corregida de un conductor de cobre con aislamiento termoplástico de 90 °C, calibre 8 AWG, con ampacidad base de 50 A para 3 conductores en ducto a 30 °C / 86 °F. La instalación real presenta las siguientes condiciones:
- Temperatura ambiente de 45 °C / 113 °F.
- Ocho conductores portadores de corriente en la misma tubería.

Paso 1 – Factor de temperatura: para aislamiento de 90 °C y temperatura de 41‑45 °C, f_T = 0.87 (según tabla).
Paso 2 – Factor de agrupamiento: para 7‑9 conductores, f_A = 0.70.
Paso 3 – Ampacidad corregida:

I_corr = 50 A × 0.87 × 0.70 = 30.45 A.

Por tanto, la corriente máxima admisible en las condiciones reales es 30.45 A, muy inferior a los 50 A nominales.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/temperature-derating-factor-steel-pipes-d_1744.html
- **southwire.com**: https://www.southwire.com/calculators
