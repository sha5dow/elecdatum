---
title: "Llenado de conducto EMT tabla"
sidebar:
  label: "Llenado de conducto EMT tabla"
description: "Ficha tecnica: Llenado de conducto EMT tabla"
keywords: ["EMT conduit fill table wire count", "conductores-cables"]
category: "conductores-cables"
topic: "conduit-fill"
subcategory: "conduit-fill-emt"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El llenado de conducto EMT (Electrical Metallic Tubing) establece la cantidad máxima de conductores que pueden alojarse en un tubo metálico de pared delgada, garantizando la seguridad, la disipación térmica y la facilidad de instalación. La base de cálculo es el Capítulo 9 del NEC (NFPA 70), que define áreas de sección transversal, factores de relleno y ajustes de ampacidad. La tabla de llenado típica para conductores THHN/THWN, con un factor de relleno del 40 % (más de dos conductores), es la referencia práctica más utilizada en obra.

## Dimensiones del conducto EMT
Las dimensiones del conducto eléctrico metálico (EMT) definen la capacidad interna para alojar conductores. Se utilizan diámetros comerciales normalizados en pulgadas y su equivalente métrico.

| Tamaño comercial (pulg / métrico) | Diámetro exterior (mm / in) | Diámetro interior (mm / in) | Área transversal interior (mm² / in²) |
| --- | --- | --- | --- |
| 1/2" (16 mm) | 17,9 / 0.706 | 15,8 / 0.622 | 196 / 0.304 |
| 3/4" (21 mm) | 23,4 / 0.922 | 20,9 / 0.824 | 343 / 0.532 |
| 1" (27 mm) | 29,5 / 1.163 | 26,6 / 1.05 | 555 / 0.860 |
| 1-1/4" (35 mm) | 38,4 / 1.510 | 35,1 / 1.38 | 967 / 1.50 |
| 1-1/2" (41 mm) | 44,2 / 1.740 | 40,9 / 1.61 | 1313 / 2.03 |
| 2" (53 mm) | 55,8 / 2.197 | 52,5 / 2.07 | 2165 / 3.36 |
| 2-1/2" (63 mm) | 73,0 / 2.875 | 69,3 / 2.73 | 3771 / 5.85 |
| 3" (78 mm) | 88,9 / 3.500 | 85,2 / 3.36 | 5701 / 8.84 |
| 3-1/2" (91 mm) | 101,6 / 4.000 | 97,4 / 3.83 | 7451 / 11.55 |
| 4" (103 mm) | 114,3 / 4.500 | 110,0 / 4.33 | 9503 / 14.73 |

## Tabla de llenado de conductores (EMT)
Cantidad máxima de conductores de cobre con aislamiento THHN/THWN permitidos en un conducto EMT, aplicando un factor de relleno del 40 % (más de dos conductores). Valores de referencia conforme al NEC, Capítulo 9, Tabla C.1.

| Tamaño comercial (pulg / mm) | 14 AWG | 12 AWG | 10 AWG | 8 AWG | 6 AWG | 4 AWG | 2 AWG | 1/0 AWG | 2/0 AWG | 4/0 AWG | 250 kcmil | 350 kcmil | 500 kcmil |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1/2" (16 mm) | 11 | 9 | 5 | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3/4" (21 mm) | 21 | 16 | 10 | 5 | 3 | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1" (27 mm) | 34 | 26 | 16 | 9 | 6 | 4 | 2 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1-1/4" (35 mm) | 54 | 42 | 26 | 14 | 10 | 7 | 4 | 3 | 2 | 1 | 1 | 0 | 0 |
| 1-1/2" (41 mm) | 73 | 57 | 36 | 19 | 14 | 9 | 5 | 4 | 3 | 2 | 1 | 1 | 0 |
| 2" (53 mm) | 112 | 88 | 55 | 30 | 22 | 14 | 8 | 7 | 5 | 3 | 2 | 1 | 1 |
| 2-1/2" (63 mm) | 179 | 140 | 88 | 48 | 35 | 23 | 13 | 11 | 8 | 5 | 4 | 3 | 2 |
| 3" (78 mm) | 273 | 213 | 134 | 73 | 53 | 35 | 20 | 17 | 13 | 8 | 6 | 5 | 3 |
| 3-1/2" (91 mm) | 357 | 279 | 175 | 96 | 70 | 46 | 26 | 22 | 17 | 10 | 8 | 6 | 4 |
| 4" (103 mm) | 472 | 369 | 232 | 127 | 92 | 61 | 35 | 29 | 22 | 14 | 11 | 8 | 6 |

## Fórmula para el área transversal
El cálculo del llenado se basa en la suma de las áreas de los conductores comparada con el área transversal utilizable del conducto, multiplicada por el factor de relleno correspondiente.

> **A_total = Σ (nᵢ × aᵢ) ≤ A_permisible = FR × A_interior**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| A_total | Área total ocupada por los conductores | mm² |
| nᵢ | Número de conductores de un calibre i | – |
| aᵢ | Área de la sección transversal de un conductor (incluyendo aislamiento) del calibre i | mm² |
| A_permisible | Área máxima permitida para el conjunto de conductores | mm² |
| FR | Factor de relleno (0.53; 0.31 o 0.40 según cantidad de conductores) | – |
| A_interior | Área transversal interior del conducto EMT | mm² |

## Factores de relleno según NEC
El NEC define tres factores de relleno según la cantidad de conductores que comparten el conducto.

| Cantidad de conductores | Factor de relleno (FR) | Porcentaje del área interior |
| --- | --- | --- |
| 1 | 0.53 | 53 % |
| 2 | 0.31 | 31 % |
| 3 o más | 0.40 | 40 % |

## Factores de ajuste de ampacidad
Cuando se instalan varios conductores activos en un mismo conducto, la capacidad de corriente de cada conductor debe reducirse para evitar sobrecalentamiento, según la tabla 310.15(C)(1) del NEC.

| Número de conductores portadores de corriente | Factor de ajuste (multiplicador de ampacidad) |
| --- | --- |
| 1 – 3 | 1.00 |
| 4 – 6 | 0.80 |
| 7 – 9 | 0.70 |
| 10 – 20 | 0.50 |
| 21 – 30 | 0.45 |
| 31 – 40 | 0.40 |
| 41 y más | 0.35 |

## Preguntas frecuentes (FAQ)
### ¿Cuál es el máximo número de conductores calibre 12 AWG THHN que permite un EMT de 1/2 pulgada?
El máximo son 9 conductores, aplicando el factor de relleno del 40 %.

### ¿Qué porcentaje del área interior se utiliza para tres o más conductores en un mismo conducto EMT?
Se permite una ocupación máxima del 40 % del área interior, equivalente a un factor de 0.40.

### ¿Cuántos conductores de 10 AWG THHN pueden instalarse en un EMT de 2 pulgadas?
Se pueden instalar hasta 55 conductores calibre 10 AWG, según la tabla de llenado con factor del 40 %.

### ¿Cuál es el diámetro interior de un conducto EMT de 1 pulgada?
El diámetro interior es de 1.05 pulgadas / 26.6 mm, que proporciona un área interior de 0.860 in² / 555 mm².

### ¿Cómo afecta tener 9 conductores portadores de corriente a la ampacidad?
Con 9 conductores activos, la ampacidad de cada conductor se multiplica por 0.70, es decir, se reduce un 30 % respecto al valor nominal.

### ¿Cuántos conductores 4/0 AWG caben como máximo en un EMT de 3 pulgadas?
El máximo permitido es de 8 conductores 4/0 AWG, considerando relleno del 40 % y aislamiento THHN/THWN.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/conduit-size-d_1738.html
- **southwire.com**: https://www.southwire.com/calculator-conduit
