---
title: "Cálculo de carga residencial NOM-001"
sidebar:
  label: "Cálculo de carga residencial NOM-001"
description: "Ficha tecnica: Cálculo de carga residencial NOM-001"
keywords: ["NOM-001 residential load calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nom-001"
subcategory: "nom001-residential-load"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El cálculo de carga residencial conforme a la NOM-001 determina la demanda máxima de potencia, expresada en VA, que una vivienda impone al sistema eléctrico, utilizando cargas mínimas de alumbrado de 3 VA por pie cuadrado (33 VA/m²) y circuitos para pequeños aparatos de 1500 VA (5118 BTU/h) cada uno.

## Carga unitaria de alumbrado general

La NOM-001 establece una carga unitaria mínima de 3 VA por pie cuadrado (33 VA/m²) para alumbrado general y tomas de uso general en áreas de viviendas, aplicada a toda la superficie habitable.

> **Carga de alumbrado (VA) = Área × Densidad de carga**
>
> **Carga de alumbrado (VA) = Área (m²) × 33 VA/m²**
> **Carga de alumbrado (VA) = Área (ft²) × 3 VA/ft²**

| Área de la vivienda           | Carga unitaria (VA/m²) | Carga unitaria (VA/ft²) | Equivalencia térmica (BTU/h·m²) |
|-------------------------------|------------------------|-------------------------|----------------------------------|
| Toda la superficie habitable  | 33 VA/m²              | 3 VA/ft²                | 112.6 BTU/(h·m²) / 10.2 BTU/(h·ft²) |

## Circuitos para pequeños aparatos y lavandería

Cada circuito para pequeños aparatos electrodomésticos se considera con una carga asignada de 1500 VA (1500 W), equivalente a 5118 BTU/h, y en viviendas se requieren un mínimo de dos circuitos de este tipo.

| Tipo de circuito                         | Carga asignada (VA) | Equivalencia (W) | Equivalencia (BTU/h) |
|------------------------------------------|---------------------|------------------|----------------------|
| Circuito pequeños aparatos (20 A)        | 1500 VA             | 1500 W           | 5118 BTU/h           |
| Circuito de lavandería (20 A)            | 1500 VA             | 1500 W           | 5118 BTU/h           |

## Factores de demanda para alumbrado general

Los factores de demanda para la carga de alumbrado general, circuitos de pequeños aparatos y lavandería en viviendas se toman de la tabla equivalente a NEC 220.42, con un primer bloque de 3000 VA (10 236 BTU/h) al 100 % y el resto con un 35 % hasta 120 000 VA.

| Carga conectada (VA / BTU/h)                                         | Factor de demanda (%) |
|----------------------------------------------------------------------|-----------------------|
| 0 - 3000 VA / 0 - 10 236 BTU/h                                      | 100 %                 |
| 3001 VA - 120 000 VA / 10 237 BTU/h - 409 457 BTU/h                | 35 %                  |
| Más de 120 000 VA / más de 409 457 BTU/h                            | 25 %                  |

## Cálculo de contactos de uso general

Para contactos de uso general y ensambles multicontacto fijos en ocupaciones no residenciales, se aplica un 100 % de demanda a los primeros 10 000 VA (34 121 BTU/h) y un 50 % al excedente; en viviendas estos contactos ya están incluidos en la carga unitaria de alumbrado general.

| Bloque de carga (VA / BTU/h)                              | Factor de demanda (%) |
|-----------------------------------------------------------|-----------------------|
| 0 - 10 000 VA / 0 - 34 121 BTU/h                         | 100 %                 |
| Más de 10 000 VA / más de 34 121 BTU/h                   | 50 %                  |

## Cargas de motores y electrodomésticos fijos

La capacidad de los conductores que alimentan motores y otras cargas debe ser al menos la suma de: 125 % de la corriente a plena carga del motor mayor, más 100 % de la suma del resto de motores, más 100 % de las cargas no continuas y 125 % de las continuas. Para cuatro o más electrodomésticos fijos de 186 W (¼ hp) o 500 W (1706 BTU/h) o mayores, se puede aplicar un factor de demanda del 75 %.

| Condición de aplicación                                               | Factor de demanda (%) |
|-----------------------------------------------------------------------|-----------------------|
| 4 o más electrodomésticos fijos ≥ ¼ hp (186 W / 635 BTU/h) o ≥ 500 W (1706 BTU/h) | 75 %                  |

## Carga de secadoras de ropa

La carga mínima para un alimentador o acometida que alimenta una secadora de ropa en una vivienda es de 5000 VA (5 kW), o el valor nominal de placa si es mayor, de acuerdo con NOM-001-220.54. Para cinco o más secadoras se pueden usar los factores de demanda de la tabla correspondiente.

| Número de secadoras | Carga nominal unitaria (VA / BTU/h) | Método                    |
|---------------------|-------------------------------------|---------------------------|
| 1 a 4               | 5000 VA / 17 061 BTU/h (mínimo)     | Valor de placa o 5000 VA  |
| 5 o más             | Según placa                         | Factores de demanda Tabla 220.54 |

## Carga de estufas y hornos eléctricos

La carga demandada para estufas y hornos de cocina residenciales con potencia nominal mayor de 1.75 kW se determina mediante los factores de demanda de la Tabla 220.55 de la NOM-001, que considera el número y la potencia de los aparatos.

| Potencia nominal del aparato (kW / BTU/h)       | Método de cálculo                                  |
|-------------------------------------------------|----------------------------------------------------|
| Mayor de 1.75 kW / mayor de 5 971 BTU/h         | Tabla 220.55 (demanda en kW o VA)                  |

## Cálculo del conductor neutro

La carga del neutro para alimentadores o acometidas se basa en la máxima carga calculada entre el conductor neutro y cualquier conductor de fase. Para estufas y secadoras residenciales se permite tomar el 70 % de la carga demandada, y para la porción del desbalance que exceda 200 A se puede aplicar un factor del 70 %.

| Condición                                | Factor de reducción permitido |
|------------------------------------------|-------------------------------|
| Estufas y secadoras residenciales        | 70 % de la carga demandada    |
| Porción de desbalance > 200 A            | 70 %                          |

## Método opcional de cálculo para viviendas unifamiliares

Si la carga calculada de una vivienda unifamiliar es al menos de 100 A, se permite sumar la carga general calculada según 220.82(B) y la carga de HVAC según 220.82(C). La carga general incluye alumbrado, contactos, pequeños aparatos, lavandería y electrodomésticos fijos con los factores de demanda simplificados del método opcional.

## Ejemplo de cálculo de carga residencial

Una vivienda de 200 m² (2153 ft²) cuenta con dos circuitos de pequeños aparatos, un circuito de lavandería, electrodomésticos fijos (lavavajillas 1200 VA, triturador 800 VA, calentador de agua 4500 VA, compactador 1000 VA), una secadora de 5000 VA y una estufa de 8.0 kW. La carga total demandada resulta en 24 460 VA, lo que requiere un servicio de 125 A.

| Elemento de carga                                  | Carga conectada (VA) | Carga conectada (BTU/h) | Demanda aplicada (VA) | Demanda aplicada (BTU/h) |
|----------------------------------------------------|----------------------|-------------------------|----------------------|--------------------------|
| Alumbrado general (200 m² × 33 VA/m²)             | 6600                 | 22 520                 | —                    | —                        |
| Circuitos pequeños aparatos (2 × 1500 VA)         | 3000                 | 10 236                 | —                    | —                        |
| Circuito lavandería (1 × 1500 VA)                 | 1500                 | 5 118                  | —                    | —                        |
| Subtotal alumbrado general + pequeños aparatos + lavandería | 11 100 | 37 874 | Primeros 3000 VA al 100 % = 3000; restantes 8100 VA al 35 % = 2835; total = 5835 | 19 908 |
| Electrodomésticos fijos (4 aparatos)               | 7500 (1200+800+4500+1000) | 25 591 | 75 % = 5625           | 19 193                  |
| Secadora de ropa                                   | 5000                 | 17 061                 | 5000                  | 17 061                  |
| Estufa 8 kW (Tabla 220.55)                         | 8000                 | 27 297                 | 8000                  | 27 297                  |
| **Total demanda**                                  |                      |                        | **24 460**            | **83 459**              |
| **Corriente a 240 V**                              |                      |                        | **101.9 A → servicio 125 A** |                       |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la carga unitaria mínima para alumbrado en una vivienda según NOM-001?
La NOM-001 establece 3 VA por pie cuadrado (33 VA/m²) para alumbrado general y contactos, lo que supone una potencia mínima de 6600 VA (22 520 BTU/h) para una vivienda de 200 m².

### ¿Cuántos circuitos para pequeños aparatos requiere una cocina según la NOM-001?
Se requieren al menos dos circuitos de 20 A para pequeños aparatos, cada uno con una carga asignada de 1500 VA (5118 BTU/h), sumando 3000 VA (10 236 BTU/h) en total.

### ¿Qué factor de demanda se aplica a la carga de alumbrado general de una vivienda con 15 000 VA conectados?
Los primeros 3000 VA se toman al 100 % (3000 VA / 10 236 BTU/h) y el resto, 12 000 VA, al 35 %, resultando en una demanda de 7200 VA (24 566 BTU/h).

### ¿Cómo se calcula la carga demandada para cuatro electrodomésticos fijos de 600 W, 400 W, 300 W y 200 W?
Solo los tres primeros superan los 500 W (1706 BTU/h); al ser al menos cuatro fijos con algún aparato ≥ 500 W, se aplica el 75 % a la suma de los tres que califican (1300 W), obteniendo 975 W, más 200 W directo, total 1175 W / 4010 BTU/h.

### ¿Cuál es la carga mínima para una secadora de ropa en una vivienda con NOM-001?
La carga mínima es de 5000 VA, equivalentes a 5 kW o 17 061 BTU/h, o el valor de placa si este es mayor.

### ¿Qué corriente aproximada resulta de una carga demandada de 24 000 VA en un servicio monofásico de 240 V?
La corriente demandada es de 100 A (24 000 VA ÷ 240 V), lo que sugiere un interruptor principal de 125 A.

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2144
