---
title: "Ampacidad de conductores de aluminio"
sidebar:
  label: "Ampacidad de conductores de aluminio"
description: "Ficha tecnica: Ampacidad de conductores de aluminio"
keywords: ["aluminum conductor ampacity table", "conductores-cables"]
category: "conductores-cables"
topic: "ampacity"
subcategory: "ampacity-aluminum"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La ampacidad de un conductor de aluminio es la corriente máxima, en amperios, que puede circular de forma continua por él sin que se supere su temperatura nominal de aislamiento, en condiciones normales de instalación a una temperatura ambiente de 30 °C / 86 °F. El valor depende del área de la sección transversal, del material del conductor, del tipo de aislamiento y de las condiciones de disipación térmica.

## Factores determinantes
La capacidad de transporte de corriente de un conductor de aluminio está influida por:

- La sección transversal y el diámetro del conductor.
- La temperatura máxima admisible del aislamiento (60 °C / 140 °F, 75 °C / 167 °F o 90 °C / 194 °F).
- La temperatura ambiente del entorno de instalación.
- El número de conductores activos agrupados en un mismo conducto o cable.
- El método de instalación (en conducto, al aire libre, directamente enterrado).

## Tabla de ampacidad nominal
Los valores corresponden a un máximo de tres conductores de aluminio en un conducto, cable o directamente enterrados, temperatura ambiente de 30 °C / 86 °F, según referencias estándar (NEC).

| Calibre (AWG/kcmil) | Sección nominal (mm²) | Diámetro (mm / in) | Ampacidad 60 °C (A) | Ampacidad 75 °C (A) | Ampacidad 90 °C (A) |
|----------------------|------------------------|---------------------|----------------------|----------------------|----------------------|
| 12 AWG | 3,31 mm² | 2,05 mm / 0.081 in | 15 | 15 | 20 |
| 10 AWG | 5,26 mm² | 2,59 mm / 0.102 in | 20 | 25 | 30 |
| 8 AWG | 8,37 mm² | 3,26 mm / 0.128 in | 35 | 40 | 45 |
| 6 AWG | 13,3 mm² | 4,11 mm / 0.162 in | 40 | 50 | 55 |
| 4 AWG | 21,1 mm² | 5,19 mm / 0.204 in | 55 | 65 | 75 |
| 2 AWG | 33,6 mm² | 6,54 mm / 0.258 in | 75 | 90 | 100 |
| 1/0 AWG | 53,5 mm² | 8,25 mm / 0.325 in | 100 | 120 | 135 |
| 2/0 AWG | 67,4 mm² | 9,27 mm / 0.365 in | 115 | 135 | 150 |
| 3/0 AWG | 85,0 mm² | 10,4 mm / 0.410 in | 130 | 155 | 175 |
| 4/0 AWG | 107 mm² | 11,7 mm / 0.460 in | 150 | 180 | 205 |
| 250 kcmil | 127 mm² | 12,7 mm / 0.500 in | 170 | 205 | 230 |
| 300 kcmil | 152 mm² | 13,9 mm / 0.548 in | 195 | 230 | 260 |
| 350 kcmil | 177 mm² | 15,0 mm / 0.591 in | 210 | 250 | 280 |
| 400 kcmil | 203 mm² | 16,1 mm / 0.633 in | 225 | 270 | 305 |
| 500 kcmil | 253 mm² | 18,0 mm / 0.707 in | 260 | 310 | 350 |
| 600 kcmil | 304 mm² | 19,7 mm / 0.775 in | 285 | 340 | 385 |
| 700 kcmil | 355 mm² | 21,3 mm / 0.837 in | 310 | 375 | 420 |
| 750 kcmil | 380 mm² | 22,0 mm / 0.866 in | 320 | 385 | 435 |
| 800 kcmil | 405 mm² | 22,7 mm / 0.894 in | 330 | 395 | 450 |
| 1000 kcmil | 507 mm² | 25,4 mm / 1.000 in | 375 | 445 | 500 |

## Fórmula de cálculo de la ampacidad
La capacidad de corriente en régimen permanente se puede calcular mediante el método de Neher‑McGrath, que relaciona el calor generado por efecto Joule con la resistencia térmica total entre el conductor y el ambiente. De forma simplificada:

> **I = √[ (Tc − Ta) / (Rdc · (1 + Yc) · Rca) ]**

| Símbolo | Variable | Unidad |
|---------|----------|--------|
| I | Corriente admisible | A |
| Tc | Temperatura máxima del conductor | °C / °F |
| Ta | Temperatura ambiente | °C / °F |
| Rdc | Resistencia eléctrica en corriente continua por unidad de longitud | Ω/m |
| Yc | Factor de pérdidas adicionales en corriente alterna (efecto piel y proximidad) | adimensional |
| Rca | Resistencia térmica efectiva entre el conductor y el ambiente | °C·m/W |

## Factores de corrección

### Corrección por temperatura ambiente
Cuando la temperatura ambiente difiere de 30 °C / 86 °F, la ampacidad nominal se multiplica por el factor indicado.

| Temperatura ambiente (°C / °F) | Factor para 60 °C | Factor para 75 °C | Factor para 90 °C |
|-------------------------------|-------------------|-------------------|-------------------|
| 21‑25 °C / 70‑77 °F | 1,08 | 1,05 | 1,04 |
| 26‑30 °C / 79‑86 °F | 1,00 | 1,00 | 1,00 |
| 31‑35 °C / 88‑95 °F | 0,91 | 0,94 | 0,96 |
| 36‑40 °C / 97‑104 °F | 0,82 | 0,88 | 0,91 |
| 41‑45 °C / 106‑113 °F | 0,71 | 0,82 | 0,87 |
| 46‑50 °C / 115‑122 °F | 0,58 | 0,75 | 0,82 |

### Corrección por agrupamiento de conductores
Cuando más de tres conductores activos comparten un mismo conducto, la ampacidad se reduce de acuerdo con la siguiente tabla.

| Número de conductores activos | Factor de ajuste |
|------------------------------|------------------|
| 4 a 6 | 0,80 |
| 7 a 9 | 0,70 |
| 10 a 20 | 0,50 |
| 21 a 30 | 0,45 |
| 31 a 40 | 0,40 |
| 41 y más | 0,35 |

## Ejemplo de cálculo
Se desea conocer la ampacidad corregida de un conductor de aluminio 350 kcmil (177 mm²) con aislamiento de 75 °C, instalado en un conducto que contiene cinco conductores activos, a una temperatura ambiente de 38 °C / 100 °F.

1. Ampacidad nominal (tabla): 250 A.
2. Factor de temperatura (36‑40 °C, 75 °C): 0,88.
3. Factor de agrupamiento (5 conductores): 0,80.
4. Ampacidad corregida = 250 A × 0,88 × 0,80 = **176 A**.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la ampacidad de un conductor de aluminio 2 AWG con aislamiento THHN a 75 °C en conducto?
   La ampacidad nominal es de 90 A para un máximo de tres conductores activos en conducto a 30 °C ambiente.

### ¿Cuánto se reduce la ampacidad de un conductor de aluminio de 1/0 AWG a 40 °C ambiente?
   Con aislamiento de 75 °C, el factor de corrección es 0,88; por tanto, su ampacidad pasa de 120 A a 105,6 A.

### ¿Cuál es el diámetro de un conductor de aluminio 250 kcmil?
   El diámetro nominal es de 12,7 mm / 0,500 in para un conductor compacto de aluminio AAC.

### ¿Qué factor de agrupamiento se aplica con 8 conductores de aluminio en un mismo conducto?
   Se aplica un factor de 0,70, lo que reduce la ampacidad al 70 % del valor nominal.

### ¿Cuál es la ampacidad de un conductor de aluminio 4/0 AWG al aire libre a 75 °C?
   En instalación al aire libre, un solo conductor de aluminio 4/0 AWG puede transportar 230 A a 75 °C.

### ¿A qué temperatura máxima puede operar un conductor de aluminio con aislamiento XHHW‑2?
   El aislamiento XHHW‑2 está clasificado para 90 °C / 194 °F en condición seca, aunque típicamente se dimensiona con base en la columna de 75 °C.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **southwire.com**: https://www.southwire.com/wire-cable/bare-aluminum-overhead-transmission-distribution/aac/p/ALBARE2
