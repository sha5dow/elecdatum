---
title: "Factores de demanda por tipo de carga"
sidebar:
  label: "Factores de demanda por tipo de carga"
description: "Ficha tecnica: Factores de demanda por tipo de carga"
keywords: ["demand factor table load type NEC", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "panel-loads"
subcategory: "demand-factors"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El factor de demanda es un coeficiente adimensional, siempre menor o igual a la unidad, que relaciona la demanda máxima real de un sistema o conjunto de cargas con la carga total conectada durante un intervalo de tiempo. En instalaciones eléctricas, su aplicación reduce la capacidad nominal de alimentadores y servicios porque no todas las cargas funcionan simultáneamente a plena potencia. Los códigos de instalación, como el NEC, establecen factores de demanda normalizados según el tipo y la cantidad de equipos, lo que permite un dimensionamiento seguro y económico de conductores y protecciones.

## Fórmula del factor de demanda
La expresión general del factor de demanda instantáneo es:

> **f<sub>Demanda</sub> = P<sub>máx demanda</sub> / P<sub>total conectado</sub>**

| Variable | Significado | Unidad |
|---|---|---|
| f<sub>Demanda</sub> | Factor de demanda | adimensional (≤ 1) |
| P<sub>máx demanda</sub> | Máxima potencia activa demandada en el intervalo de estudio | kW / hp |
| P<sub>total conectado</sub> | Suma de las potencias nominales de todas las cargas conectadas al mismo circuito | kW / hp |

## Factores de demanda para receptáculos de uso general en locales no residenciales
La sección 220.44 del NEC permite aplicar un factor de demanda del 50 % a la porción de carga de receptáculos y ensamblajes multi-toma fijos que exceda 10 kVA. Los primeros 10 kVA (10 000 VA) se toman al 100 %. Esto reconoce que en ocupaciones comerciales no todos los receptáculos se utilizan al mismo tiempo.

| Condición de carga | Factor de demanda |
|---|---|
| Primeros 10 kVA (10 kW / 13.4 hp) | 100 % |
| Excedente de 10 kVA | 50 % |

*Ejemplo:* Para 150 receptáculos de uso general (27 000 VA) más 20 secciones de ensamblaje multi-toma (3600 VA), la carga conectada total es 30 600 VA. La carga de demanda calculada es:
- 10 000 VA × 100 % = 10 000 VA (10 kW / 13.4 hp)
- 20 600 VA × 50 % = 10 300 VA (10.3 kW / 13.8 hp)
- Total = 20 300 VA (20.3 kW / 27.2 hp)

## Factores de demanda para electrodomésticos fijos en viviendas
Según 220.53, cuando una vivienda dispone de cuatro o más electrodomésticos fijos en sitio (sujetos, no portátiles) con potencia nominal igual o mayor a ¼ hp ó 500 W, se permite aplicar un factor de demanda del 75 % a la carga total conectada de dichos aparatos. Quedan excluidos de esta reducción los equipos de cocción, secadoras de ropa, calefacción de ambiente y aire acondicionado.

| Número de electrodomésticos fijos ≥ ¼ hp o ≥ 500 W | Factor de demanda aplicable |
|---|---|
| 1 a 3 | 100 % |
| 4 o más | 75 % |

## Factores de demanda para secadoras de ropa eléctricas en viviendas
La carga mínima para cada secadora doméstica es 5000 W (5 kW / 6.7 hp) o la corriente nominal de placa si esta es mayor. Cuando un edificio contiene cinco o más secadoras, se pueden utilizar los factores de demanda de la Tabla 220.54, que reducen la carga de demanda del conjunto.

| Cantidad de secadoras | Factor de demanda (%) |
|---|---|
| 1 a 4 | 100 |
| 5 | 85 |
| 6 | 80 |
| 7 | 75 |
| 8 | 70 |
| 9 | 65 |
| 10 | 60 |
| 11 | 58 |
| 12 | 56 |
| 13 | 54 |
| 14 | 52 |
| 15 | 50 |
| 16 | 48 |
| 17 | 47 |
| 18 | 46 |
| 19 | 45 |
| 20 | 44 |
| 21 | 43 |
| 22 | 42 |
| 23 | 41 |
| 24 | 40 |
| 25 | 39 |

Los valores son adimensionales (porcentaje). Para convertir la carga total conectada a kW y hp, se multiplica la potencia unitaria (mínimo 5 kW / 6.7 hp) por el número de secadoras y por el factor de demanda correspondiente.

## Factores de demanda para equipos de cocina eléctricos en viviendas
La Tabla 220.55 del NEC proporciona la demanda máxima para cocinas, hornos de pared y unidades de cocción de encimera en viviendas. Se aplica a equipos de más de 1.75 kW. La columna C, para equipos de potencia no superior a 8.75 kW, se muestra a continuación. Para potencias entre 8.75 kW y 27 kW, la demanda de la columna C se incrementa un 5 % por cada kilovatio o fracción mayoritaria que exceda 12 kW (Nota 1).

| Número de aparatos | Demanda máxima (columna C) | Equivalente en hp |
|---|---|---|
| 1 | 8 kW | 10.7 hp |
| 2 | 11 kW | 14.8 hp |
| 3 | 14 kW | 18.8 hp |
| 4 | 17 kW | 22.8 hp |
| 5 | 20 kW | 26.8 hp |
| 6 | 21 kW | 28.2 hp |
| 7 | 22 kW | 29.5 hp |
| 8 | 23 kW | 30.8 hp |
| 9 | 24 kW | 32.2 hp |
| 10 | 25 kW | 33.5 hp |

*Ejemplo:* Un rango eléctrico de 15 kW, como único aparato, excede 12 kW en 3 kW completos. La demanda de columna C para un aparato (8 kW) se incrementa 3 × 5 % = 15 %. Demanda final = 8 kW × 1.15 = 9.2 kW (12.3 hp).

## Factores de demanda para equipos de cocina comerciales
Para equipos de cocina comerciales con control termostático o de uso intermitente, la sección 220.56 permite aplicar la Tabla 220.56. La carga calculada del alimentador o servicio no debe ser inferior a la suma de las dos cargas más grandes.

| Número de unidades | Factor de demanda (%) |
|---|---|
| 1 | 100 |
| 2 | 100 |
| 3 | 90 |
| 4 | 80 |
| 5 | 70 |
| 6 | 65 |
| 7 | 60 |
| 8 | 56 |
| 9 | 52 |
| 10 | 48 |
| 11 | 44 |
| 12 | 40 |
| 13 | 36 |
| 14 | 32 |
| 15 | 29 |
| 16 | 26 |
| 17 | 23 |
| 18 | 20 |

Estos factores son adimensionales y reducen la carga conectada total de los equipos de cocina, excepto los de calefacción, ventilación y aire acondicionado.

## Factores de demanda para cargas no coincidentes
De acuerdo con 220.60, cuando dos o más cargas no pueden funcionar simultáneamente, para el cálculo del alimentador o servicio se considera únicamente la mayor de ellas. Si la carga mayor incluye un motor, se debe emplear el 125 % de la corriente a plena carga del motor más grande, conforme a 430.24. Esta regla es un factor de demanda extremo donde la carga menor se descarta por completo.

## Cálculo del neutro para cargas residenciales
La carga del neutro en alimentadores o servicios se basa en la máxima carga desequilibrada entre el neutro y cualquier fase [220.61(A)]. Para circuitos que alimentan cocinas eléctricas y secadoras de ropa, se permite reducir la contribución al neutro al 70 % de la demanda calculada según las Tablas 220.55 y 220.54 respectivamente [220.61(B)(1)]. En sistemas monofásicos de 3 hilos o trifásicos de 4 hilos, la porción de carga desequilibrada que exceda 200 A también puede tomarse al 70 % [220.61(B)(2)], siempre que no existan cargas no lineales significativas.

## Frequently Asked Questions (FAQ)
### ¿Cuál es la carga de demanda para 150 receptáculos de uso general en un local comercial?
   La carga de demanda calculada es 20 300 VA (20.3 kVA), equivalente a 20.3 kW o 27.2 hp, aplicando el 100 % a los primeros 10 kVA y el 50 % al excedente según 220.44.

### ¿Qué demanda se debe considerar para cinco secadoras de ropa en una vivienda multifamiliar?
   Para cinco secadoras, el factor de demanda de la Tabla 220.54 es 85 %. Con una carga unitaria mínima de 5 kW (6.7 hp), la demanda del grupo es 5 × 5 kW × 0.85 = 21.25 kW (28.5 hp).

### ¿Cómo se aplica el factor de demanda a electrodomésticos fijos en una casa con cuatro aparatos de 500 W o más?
   Con cuatro o más electrodomésticos que cumplen la condición de 220.53, la carga total conectada se multiplica por 0.75. Si cada uno consume 600 W, la suma conectada es 2400 W (2.4 kW / 3.2 hp) y la carga de demanda es 2400 W × 0.75 = 1800 W (2.4 hp).

### ¿Cuál es la demanda de una cocina eléctrica de 15 kW según la Tabla 220.55?
   Para un solo aparato de 15 kW, la columna C base es 8 kW. El exceso sobre 12 kW es 3 kW, por lo que se añade un 15 %: 8 kW × 1.15 = 9.2 kW (12.3 hp). Este valor es la demanda máxima que se debe considerar.

### ¿Qué factor de demanda corresponde a 10 unidades de equipo de cocina comercial?
   La Tabla 220.56 asigna un factor de 48 % para 10 unidades. Así, la carga de demanda del conjunto es la suma de las potencias de placa multiplicada por 0.48, sin ser inferior a la suma de las dos cargas más grandes.

### ¿Cómo se calcula la carga del neutro cuando hay secadoras y cocinas eléctricas?
   Se toma el 70 % de la demanda obtenida con las Tablas 220.54 y 220.55 respectivamente [220.61(B)(1)]. Por ejemplo, si la demanda de cocción es 9.2 kW, el neutro asociado se calcula como 9.2 kW × 0.70 = 6.44 kW (8.6 hp).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2144
