---
title: "Ampacidad de conductores de cobre NOM-001"
sidebar:
  label: "Ampacidad de conductores de cobre NOM-001"
description: "Ficha tecnica: Ampacidad de conductores de cobre NOM-001"
keywords: ["copper conductor ampacity table NOM-001 90C", "conductores-cables"]
category: "conductores-cables"
topic: "ampacity"
subcategory: "ampacity-copper-nom"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La ampacidad es la máxima corriente eléctrica que un conductor de cobre puede transportar de forma continua bajo condiciones específicas de instalación, sin que su temperatura supere el límite de diseño del aislamiento.

## Tabla de ampacidad para conductores de cobre a 90 °C
Los valores corresponden a conductores de cobre con aislamiento de temperatura máxima de operación de 90 °C (por ejemplo, THHN, XHHW‑2) en instalaciones con no más de tres conductores portadores de corriente en un conducto o cable, y una temperatura ambiente de 30 °C / 86 °F, conforme a la NOM‑001‑SEDE.

| Calibre AWG / kcmil | Área de sección transversal (mm² / kcmil) | Diámetro (mm / in) | Ampacidad (A) |
| --- | --- | --- | --- |
| 14 | 2,08 mm² / 4,11 kcmil | 1,63 mm / 0,0641 in | 25 |
| 12 | 3,31 mm² / 6,53 kcmil | 2,05 mm / 0,0808 in | 30 |
| 10 | 5,26 mm² / 10,4 kcmil | 2,59 mm / 0,102 in | 40 |
| 8 | 8,36 mm² / 16,5 kcmil | 3,26 mm / 0,129 in | 55 |
| 6 | 13,3 mm² / 26,2 kcmil | 4,11 mm / 0,162 in | 75 |
| 4 | 21,1 mm² / 41,7 kcmil | 5,19 mm / 0,204 in | 95 |
| 3 | 26,7 mm² / 52,6 kcmil | 5,83 mm / 0,229 in | 110 |
| 2 | 33,6 mm² / 66,4 kcmil | 6,54 mm / 0,258 in | 130 |
| 1 | 42,4 mm² / 83,7 kcmil | 7,35 mm / 0,289 in | 150 |
| 1/0 | 53,5 mm² / 106 kcmil | 8,25 mm / 0,325 in | 170 |
| 2/0 | 67,4 mm² / 133 kcmil | 9,27 mm / 0,365 in | 195 |
| 3/0 | 85,0 mm² / 168 kcmil | 10,4 mm / 0,410 in | 225 |
| 4/0 | 107 mm² / 212 kcmil | 11,7 mm / 0,460 in | 260 |
| 250 kcmil | 127 mm² / 250 kcmil | 12,7 mm / 0,500 in | 290 |
| 300 kcmil | 152 mm² / 300 kcmil | 13,9 mm / 0,548 in | 320 |
| 350 kcmil | 177 mm² / 350 kcmil | 15,0 mm / 0,591 in | 350 |
| 400 kcmil | 203 mm² / 400 kcmil | 16,1 mm / 0,633 in | 380 |
| 500 kcmil | 253 mm² / 500 kcmil | 18,0 mm / 0,707 in | 430 |
| 600 kcmil | 304 mm² / 600 kcmil | 19,7 mm / 0,775 in | 475 |
| 750 kcmil | 380 mm² / 750 kcmil | 22,0 mm / 0,866 in | 535 |
| 1000 kcmil | 507 mm² / 1000 kcmil | 25,4 mm / 1,000 in | 615 |

## Factores de corrección por temperatura
Para temperaturas ambiente distintas de 30 °C / 86 °F, se aplican los siguientes factores de corrección sobre la ampacidad tabulada. Los valores son válidos para conductores con aislamiento de 90 °C.

| Temperatura ambiente (°C / °F) | Factor de corrección |
| --- | --- |
| 21 – 25 °C / 69,8 – 77,0 °F | 1,08 |
| 26 – 30 °C / 78,8 – 86,0 °F | 1,00 |
| 31 – 35 °C / 87,8 – 95,0 °F | 0,91 |
| 36 – 40 °C / 96,8 – 104,0 °F | 0,82 |
| 41 – 45 °C / 105,8 – 113,0 °F | 0,71 |
| 46 – 50 °C / 114,8 – 122,0 °F | 0,58 |
| 51 – 55 °C / 123,8 – 131,0 °F | 0,41 |

## Factores de corrección por agrupamiento
Cuando en un mismo conducto o cable se alojan más de tres conductores portadores de corriente, la ampacidad debe multiplicarse por los factores indicados.

| Número de conductores portadores de corriente | Factor de corrección |
| --- | --- |
| 1 – 3 | 1,00 |
| 4 – 6 | 0,80 |
| 7 – 9 | 0,70 |
| 10 – 20 | 0,50 |
| 21 – 30 | 0,45 |
| 31 – 40 | 0,40 |
| 41 o más | 0,35 |

## Cálculo de la ampacidad corregida
La ampacidad corregida de un conductor se obtiene multiplicando la ampacidad tabulada por los factores de corrección por temperatura y por agrupamiento.

> **Icorr = Itabla × FT × FA**

donde:

| Variable | Descripción | Unidad |
| --- | --- | --- |
| Icorr | Ampacidad corregida | A |
| Itabla | Ampacidad de la tabla para 90 °C y 30 °C ambiente | A |
| FT | Factor de corrección por temperatura | - |
| FA | Factor de corrección por agrupamiento | - |

## Ejemplo de cálculo
Un conductor de cobre calibre 10 AWG con aislamiento THHN (90 °C) se instala en un conducto con 5 conductores portadores de corriente, en un ambiente a 40 °C / 104 °F.  
- Itabla = 40 A  
- FT para 40 °C = 0,82  
- FA para 4‑6 conductores = 0,80  
- Icorr = 40 A × 0,82 × 0,80 = 26,24 A  

La ampacidad corregida resultante es de 26,24 A.

## Frequently Asked Questions (FAQ)
### ¿Cuál es la ampacidad de un conductor de cobre calibre 12 AWG con aislamiento THHN (90 °C) para menos de tres conductores en un conducto según NOM‑001?
La ampacidad básica es de 30 A cuando no se exceden tres conductores y la temperatura ambiente se mantiene en 30 °C / 86 °F.

### ¿Cómo se reduce la ampacidad de un conductor de cobre calibre 10 AWG a 90 °C cuando la temperatura ambiente alcanza 45 °C?
Se aplica un factor de corrección de 0,71, reduciendo la ampacidad tabulada de 40 A a 28,4 A.

### ¿Qué factor de agrupamiento corresponde a 8 conductores portadores de corriente en un mismo conducto metálico?
El factor de agrupamiento es 0,70, por lo que la ampacidad de cada conductor debe multiplicarse por 0,70.

### ¿Cuál es la ampacidad corregida de un conductor de cobre calibre 6 AWG a 90 °C con temperatura ambiente de 35 °C y 5 conductores activos en el conducto?
Itabla = 75 A, FT = 0,91, FA = 0,80, resultando 75 × 0,91 × 0,80 = 54,6 A.

### ¿Qué calibre de cobre con aislamiento de 90 °C se requiere para transportar una corriente corregida de 100 A considerando un factor total de corrección de 0,65?
La ampacidad tabulada mínima necesaria es 100 A / 0,65 = 153,8 A, por lo que se selecciona un conductor calibre 1/0 AWG con ampacidad de 170 A.

### ¿Cuál es la temperatura máxima de operación que define la columna de 90 °C en la NOM‑001 y su equivalente en Fahrenheit?
La temperatura máxima de operación del aislamiento es de 90 °C / 194 °F.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
