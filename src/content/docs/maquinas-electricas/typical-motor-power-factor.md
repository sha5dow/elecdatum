---
title: "Factor de potencia típico en motores eléctricos"
sidebar:
  label: "Factor de potencia típico en motores eléctricos"
description: "Ficha tecnica: Factor de potencia típico en motores eléctricos"
keywords: ["typical motor power factor table HP", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "motor-power-factor"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El factor de potencia (PF) en un sistema de corriente alterna es la relación entre la potencia activa, que realiza trabajo útil, y la potencia aparente suministrada. Para motores eléctricos de inducción, el factor de potencia es siempre inductivo y menor que uno, ya que parte de la energía se destina a la magnetización del campo magnético, sin generar trabajo mecánico.

## Fórmula del factor de potencia
La expresión general del factor de potencia es el cociente entre potencia activa y aparente, que coincide con el coseno del ángulo de desfase entre tensión e intensidad.

> **PF = cos(φ)**
> **PF = P / S**

Para un motor trifásico, la fórmula se relaciona directamente con la tensión de línea y la corriente:

> **PF = P / (√3 × U × I)**

| Variable | Significado | Unidad |
|---|---|---|
| PF | Factor de potencia | adimensional |
| φ | Ángulo de desfase entre tensión y corriente | radianes / grados |
| P | Potencia activa o real | W (vatio) |
| S | Potencia aparente | VA (voltamperio) |
| U | Tensión de línea | V (voltio) |
| I | Corriente de línea | A (amperio) |

## Valores típicos de factor de potencia en motores eléctricos
Los motores de inducción presentan un factor de potencia muy bajo en vacío y mejoran sustancialmente al acercarse a la plena carga. La tabla siguiente muestra valores orientativos para motores trifásicos de 1800 rpm.

| Rango de potencia | Velocidad | FP sin carga | FP a 1/4 de carga | FP a 1/2 carga | FP a 3/4 de carga | FP a plena carga |
|---|---|---|---|---|---|---|
| 0 – 5 hp (0 – 3,73 kW) | 1800 rpm | 0,15 – 0,20 | 0,5 – 0,6 | 0,72 | 0,82 | 0,84 |
| 5 – 20 hp (3,73 – 14,9 kW) | 1800 rpm | 0,15 – 0,20 | 0,5 – 0,6 | 0,74 | 0,84 | 0,86 |
| 20 – 100 hp (14,9 – 74,6 kW) | 1800 rpm | 0,15 – 0,20 | 0,5 – 0,6 | 0,79 | 0,86 | 0,89 |
| 100 – 300 hp (74,6 – 223,7 kW) | 1800 rpm | 0,15 – 0,20 | 0,5 – 0,6 | 0,81 | 0,88 | 0,91 |

## Factor de potencia por industria
Antes de aplicar corrección, diferentes sectores industriales operan con factores de potencia característicos debido al tipo y cantidad de motores instalados.

| Sector industrial | Factor de potencia sin corregir (%) |
|---|---|
| Cervecería | 75 – 80 |
| Cemento | 75 – 80 |
| Química | 65 – 75 |
| Electroquímica | 65 – 75 |
| Fundición | 75 – 80 |
| Forja | 70 – 80 |
| Hospitales | 75 – 80 |
| Manufactura (maquinaria) | 60 – 65 |
| Pintura | 65 – 70 |
| Metalurgia | 65 – 70 |
| Minería de carbón | 65 – 80 |
| Oficinas | 80 – 90 |
| Bombeo de petróleo | 40 – 60 |
| Plásticos | 75 – 80 |
| Estampado | 60 – 70 |
| Acerías | 65 – 80 |
| Textiles | 35 – 60 |

## Preguntas frecuentes (FAQ)
### ¿Cuál es el factor de potencia típico de un motor de 10 hp a plena carga?
    Un motor de 10 hp (7,46 kW) a plena carga presenta un factor de potencia cercano a 0,86, según la tabla para el rango de 5 a 20 hp.

### ¿Cómo afecta un factor de potencia de 0,7 a la sección del conductor?
    Con un factor de potencia de 0,7 la sección transversal del conductor debe multiplicarse por 2,04 respecto a la necesaria con PF unitario, lo que incrementa el peso del cobre y las pérdidas por efecto Joule.

### ¿A partir de qué valor de factor de potencia las compañías eléctricas suelen aplicar penalizaciones?
    Muchas empresas suministradoras penalizan cuando el factor de potencia es inferior a 0,95, exigiendo la instalación de sistemas de compensación.

### ¿Qué valor mínimo alcanza el factor de potencia de un motor operando en vacío?
    Un motor de inducción trifásico en vacío puede caer hasta 0,15 – 0,20, prácticamente solo consumiendo corriente magnetizante sin entregar potencia mecánica.

### ¿Qué porcentaje de la capacidad de un transformador de 80 kVA se aprovecha si el factor de potencia de la carga es 0,7?
    Con un factor de potencia de 0,7, la potencia activa útil es de solo 56 kW, es decir, un 70 % de la capacidad aparente del transformador, desperdiciando un 30 % en potencia reactiva.

### ¿En qué sectores industriales se registran los factores de potencia más bajos?
    Los sectores textil y de bombeo de petróleo presentan los valores más bajos, con rangos de 35 – 60 % y 40 – 60 % respectivamente, debido a la alta presencia de motores de inducción de pequeña potencia y regímenes de carga fluctuante.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/electric-motor-power-rating/
