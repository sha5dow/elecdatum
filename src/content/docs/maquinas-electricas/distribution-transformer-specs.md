---
title: "Transformador de distribución especificaciones"
sidebar:
  label: "Transformador de distribución especificaciones"
description: "Ficha tecnica: Transformador de distribución especificaciones"
keywords: ["distribution transformer specifications kVA", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "distribution-transformer"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El transformador de distribución es el equipo encargado de la última reducción de tensión en una red eléctrica, entregando la energía al nivel de utilización del consumidor final. Opera típicamente entre corrientes primarias de 2,3 kV a 35 kV y secundarias de 120/240 V, 230/400 V o similares, con potencias nominales que rara vez superan los 5000 kVA y comúnmente se mantienen por debajo de 200 kVA.

La operación se basa en la inducción electromagnética: una corriente alterna en el devanado primario genera un flujo magnético variable que induce una tensión en el devanado secundario. La relación entre tensiones, corrientes y número de espiras se describe con la fórmula fundamental del transformador ideal.

> **U₁ / U₂ = N₁ / N₂ = I₂ / I₁**

| Variable | Magnitud | Unidad |
| --- | --- | --- |
| U₁ | Tensión en el devanado primario | V |
| U₂ | Tensión en el devanado secundario | V |
| N₁ | Número de espiras del primario | – |
| N₂ | Número de espiras del secundario | – |
| I₁ | Corriente en el primario | A |
| I₂ | Corriente en el secundario | A |

## Clasificación
Los transformadores de distribución se agrupan según:

| Criterio | Tipos |
| --- | --- |
| Ubicación de montaje | Poste, pedestal (pad‑mounted), bóveda subterránea |
| Tipo de aislamiento | Sumergidos en líquido (aceite mineral, ésteres), tipo seco |
| Número de fases | Monofásicos, trifásicos |
| Clase de tensión | 2,3 kV hasta 35 kV (típicamente 11 kV – 50 Hz o 13,8 kV – 60 Hz) |
| Nivel básico de aislamiento al impulso (BIL) | 30 kV a 150 kV según clase de tensión |

## Capacidades nominales (kVA)
La potencia aparente nominal se expresa en kVA porque las pérdidas internas (núcleo y cobre) dependen de la tensión y la corriente, no del factor de potencia de la carga. En campo, un transformador de 50 kVA a 240 V entrega 208,3 A a plena carga, valor que dimensiona protecciones y conductores. Los rangos normalizados abarcan desde 0,05 kVA hasta 5000 kVA, siendo los más frecuentes para distribución pública aquellos inferiores a 200 kVA.

## Corriente a plena carga

### Transformador monofásico

| Capacidad nominal (kVA) | Corriente a plena carga (A) a 120 V | Corriente a plena carga (A) a 240 V | Corriente a plena carga (A) a 480 V |
| --- | --- | --- | --- |
| 0,05 | 0,42 | 0,21 | 0,10 |
| 0,075 | 0,63 | 0,31 | 0,16 |
| 0,1 | 0,83 | 0,42 | 0,21 |
| 0,15 | 1,25 | 0,63 | 0,31 |
| 0,25 | 2,08 | 1,04 | 0,52 |
| 0,5 | 4,17 | 2,08 | 1,04 |
| 0,75 | 6,25 | 3,13 | 1,56 |
| 1 | 8,33 | 4,17 | 2,08 |
| 1,5 | 12,5 | 6,25 | 3,13 |
| 2 | 16,7 | 8,33 | 4,17 |
| 3 | 25 | 12,5 | 6,3 |
| 5 | 41,7 | 20,8 | 10,4 |
| 7,5 | 62,5 | 31,3 | 15,6 |
| 10 | 83,3 | 41,7 | 20,8 |
| 15 | 125 | 62,5 | 31,3 |
| 25 | 208 | 104,2 | 52,1 |
| 37,5 | 313 | 156,3 | 78,1 |
| 50 | 417 | 208,3 | 104,2 |
| 75 | 625 | 313 | 156 |
| 100 | 833 | 417 | 208 |
| 167 | 1392 | 696 | 348 |
| 200 | 1667 | 833 | 417 |
| 250 | 2083 | 1042 | 521 |

### Transformador trifásico

| Capacidad nominal (kVA) | Corriente a plena carga (A) a 240 V | Corriente a plena carga (A) a 480 V |
| --- | --- | --- |
| 3 | 7,2 | 3,6 |
| 6 | 14,4 | 7,2 |
| 9 | 21,7 | 10,8 |
| 15 | 36,1 | 18,0 |
| 22 | 53,0 | 26,5 |
| 30 | 72,2 | 36,1 |
| 45 | 108 | 54,1 |
| 75 | 180 | 90,2 |
| 112,5 | 271 | 135 |
| 150 | 361 | 180 |
| 225 | 541 | 271 |
| 300 | 722 | 361 |
| 500 | 1203 | 601 |
| 750 | 1806 | 903 |

## Relación de transformación
La relación entre espiras fija los niveles de tensión y corriente. Por ejemplo, un transformador con N₁ = 500 espiras en el primario y N₂ = 3000 espiras en el secundario, alimentado con 230 V en el primario, entrega en bornes secundarios:

> **U₂ = U₁ × (N₂ / N₁) = 230 V × (3000 / 500) = 1380 V = 1,38 kV**

Este mismo principio permite calcular la corriente primaria conocida la carga secundaria, manteniendo la potencia aparente constante en un transformador ideal.

## Factores que influyen en la capacidad nominal
A plena carga, las pérdidas totales de un transformador de 100 kVA representan típicamente entre un 1 % y un 3 % de su potencia nominal, y son el factor determinante de su calentamiento.
- **Pérdidas en el núcleo (constantes):** dependen de la tensión y la frecuencia, presentes incluso en vacío.
- **Pérdidas en los devanados (variables):** proporcionales a I²R, aumentan con el cuadrado de la corriente de carga.
- **Sistema de enfriamiento:** los transformadores de distribución están diseñados para operar a máximo rendimiento alrededor del 50 % de su carga, con una temperatura ambiente estándar de 40 °C / 104 °F. Por cada incremento de 6 °C / 10,8 °F por encima del límite térmico del aislamiento, la vida útil se reduce a la mitad.
- **Regulación de tensión:** se minimiza con reactancias de fuga pequeñas, lo que mejora la eficiencia a cargas reducidas.

## Preguntas frecuentes (FAQ)

### ¿Por qué los transformadores de distribución se especifican en kVA y no en kW?
Los transformadores de 50 kVA, 1000 kVA o cualquier otra capacidad se definen en kVA porque sus pérdidas dependen de la tensión y la corriente, independientemente del factor de potencia de la carga; así, a tensión y corriente nominales con factor de potencia cero, el equipo entrega 0 kW pero sigue transferiendo su potencia aparente nominal de 100 % kVA.

### ¿Cuál es la capacidad máxima que puede tener un transformador de distribución?
Aunque los valores usuales son inferiores a 200 kVA, algunas normas permiten que equipos de hasta 5000 kVA se clasifiquen como transformadores de distribución, especialmente en grandes complejos industriales o comerciales.

### ¿Cómo se calcula la corriente de plena carga en un transformador monofásico?
Para un transformador monofásico de 50 kVA conectado a 240 V, la corriente nominal se obtiene como I = (50 × 1000) / 240 = 208,3 A. En trifásico se divide adicionalmente entre √3 (≈1,732) para la tensión de línea.

### ¿A qué nivel de carga alcanza su máxima eficiencia un transformador de distribución?
Alcanza la máxima eficiencia típicamente alrededor del 50 % de su carga nominal, ya que en ese punto las pérdidas fijas del núcleo igualan a las pérdidas variables del cobre.

### ¿Qué valor de BIL corresponde a un transformador de 15 kV?
Un transformador de distribución de clase 15 kV suele tener un nivel básico de aislamiento al impulso (BIL) de 95 kV o 125 kV, garantizando la resistencia frente a sobretensiones de maniobra y descargas atmosféricas.

### ¿Qué relación de transformación se emplea en una acometida residencial típica?
En Norteamérica, una relación común es 14 400 V a 120/240 V, lo que equivale aproximadamente a 120:1 entre primario y secundario; en sistemas de 50 Hz, 11 000 V a 230/400 V es una configuración frecuente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/transformer-d_1398.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-rating/
