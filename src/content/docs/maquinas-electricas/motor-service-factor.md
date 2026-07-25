---
title: "Factor de servicio en motores eléctricos"
sidebar:
  label: "Factor de servicio en motores eléctricos"
description: "Ficha tecnica: Factor de servicio en motores eléctricos"
keywords: ["motor service factor explanation calculation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "motor-service-factor"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El factor de servicio, abreviado como **SF**, es una medida de la capacidad de sobrecarga periódica de un motor eléctrico definida por la norma NEMA MG 1. Su valor estándar para motores totalmente cerrados con ventilación (TEFC) es **1,0**, lo que indica que el motor puede entregar exactamente su potencia nominal de placa sin margen adicional para sobrecargas continuas. Un factor de servicio superior a 1,0, como **1,15**, significa que el motor puede operar temporalmente a una potencia hasta un 15 % por encima de la nominal sin sufrir daños inmediatos, siempre que se mantengan la tensión y la frecuencia nominales.

## Factores de servicio para motores abiertos (drip‑proof)

Los motores abiertos a prueba de goteo, según NEMA, presentan factores de servicio que dependen de la potencia nominal y de la velocidad de sincronismo. La tabla siguiente recoge los valores para potencias desde **1/6 hp hasta 1 1/2 hp y superiores**, donde los motores más pequeños alcanzan un **SF máximo de 1,35**.

| Potencia del motor [hp / kW] | Factor de servicio – SF a velocidad síncrona |
| --- | --- |
| Velocidad síncrona [rpm] | 3600 | 1800 | 1200 | 900 |
| 1/6 hp / 0,12 kW | 1,35 | 1,35 | 1,35 | 1,35 |
| 1/4 hp / 0,19 kW | 1,35 | 1,35 | 1,35 | 1,35 |
| 1/3 hp / 0,25 kW | 1,35 | 1,35 | 1,35 | 1,35 |
| 1/2 hp / 0,37 kW | 1,25 | 1,25 | 1,25 | 1,25 |
| 3/4 hp / 0,56 kW | 1,25 | 1,25 | 1,15 | 1,15 |
| 1 hp / 0,75 kW | 1,25 | 1,15 | 1,15 | 1,15 |
| 1 1/2 hp y superiores / ≥1,12 kW | 1,15 | 1,15 | 1,15 | 1,15 |

## Factor de servicio en motores cerrados (TEFC)

La norma NEMA establece un factor de servicio fijo de **1,0** para todos los motores totalmente cerrados con ventilación (TEFC), independientemente de su potencia o velocidad. Esto implica que estos motores no disponen de capacidad de sobrecarga continua y deben dimensionarse para la potencia exacta requerida por la carga.

## Cálculo de la potencia de diseño

La potencia de diseño *P<sub>D</sub>* que un motor puede entregar en régimen de sobrecarga temporal se obtiene multiplicando el factor de servicio por la potencia nominal de placa. La fórmula explícita es:

> **P<sub>D</sub> = SF × P**

| Variable | Símbolo | Unidad | Descripción |
| --- | --- | --- | --- |
| Potencia de diseño | P<sub>D</sub> | hp o kW | Máxima potencia permitida en servicio continuo con sobrecarga |
| Factor de servicio | SF | adimensional | Factor multiplicador según NEMA para el tipo de motor |
| Potencia nominal | P | hp o kW | Potencia mecánica en el eje indicada en la placa del motor |

Por ejemplo, un motor de **1 hp / 0,75 kW** con **SF = 1,15** puede operar de forma intermitente a una potencia de diseño de **1,15 hp / 0,86 kW** sin sobrecalentarse, siempre que la tensión y la frecuencia sean las nominales. No se recomienda mantener esta sobrecarga de forma continua.

## Consecuencias de la operación por encima del factor de servicio

Arrancar o funcionar permanentemente con cargas que excedan la potencia de diseño acorta la vida útil del motor, en especial la del aislamiento y los rodamientos. La temperatura de operación se eleva aproximadamente **10 °C / 18 °F** por cada **10 % de sobrecarga** sostenida, lo que acelera el envejecimiento de los barnices y reduce la rigidez dieléctrica. Aunque el factor de servicio otorga un margen de seguridad, su uso continuo disminuye la expectativa de vida según la clásica regla de Arrhenius: la vida del aislamiento se reduce a la mitad por cada **10 °C / 18 °F** de incremento permanente en la temperatura de trabajo.

## Recomendaciones de aplicación

La selección correcta del motor exige que la potencia de diseño *P<sub>D</sub>* cubra el **100 % de la demanda máxima esperada**, dejando el factor de servicio como reserva para picos ocasionales. Los motores con **SF = 1,0** deben evitar completamente cualquier sobrecarga sostenida, ya que carecen de margen térmico. En instalaciones donde la carga varía de forma previsible, se pueden emplear motores con **SF = 1,15** para arranques pesados o fluctuaciones breves, pero nunca como sustituto de un motor de mayor potencia nominal.

## Preguntas frecuentes (FAQ)

### ¿Qué significa un factor de servicio de 1.15 en un motor eléctrico?
Significa que el motor puede sobrecargarse temporalmente hasta un **15 % por encima de su potencia nominal**, entregando **1,15 veces la potencia de placa** sin riesgo inmediato de deterioro, siempre que la tensión y la frecuencia sean las nominales.

### ¿Es recomendable operar un motor continuamente a su factor de servicio máximo?
No. La operación continua con sobrecarga, incluso dentro del SF declarado, eleva la temperatura de funcionamiento y reduce la vida útil del aislamiento. NEMA advierte que un motor que trabaje permanentemente a **SF > 1,0** tendrá una expectativa de vida inferior a la de uno operado a su potencia nominal.

### ¿Cómo afecta el factor de servicio a la vida útil del motor?
Cada **10 °C / 18 °F** adicionales en la temperatura del devanado, provocados por sobrecargas frecuentes, reducen a la mitad la duración del sistema de aislamiento. Por ello, abusar del factor de servicio conduce a fallos prematuros.

### ¿Todos los motores tienen factor de servicio superior a 1.0?
No. Los motores totalmente cerrados (TEFC) definidos por NEMA tienen un **SF estándar de 1,0**, es decir, no admiten sobrecarga continua. Solo ciertos motores abiertos (drip‑proof) presentan factores de servicio de **1,15, 1,25 o 1,35** según su tamaño y velocidad.

### ¿Qué diferencia hay entre factor de servicio y factor de potencia?
El factor de servicio indica la capacidad de sobrecarga mecánica del motor, mientras que el factor de potencia mide la eficiencia con que la corriente eléctrica es convertida en trabajo útil. Un motor puede tener un alto factor de servicio y, simultáneamente, un bajo factor de potencia.

### ¿Cómo se calcula la potencia de diseño a partir del factor de servicio?
La potencia de diseño se obtiene multiplicando la potencia nominal de placa por el factor de servicio: **P<sub>D</sub> = SF × P**. Por ejemplo, un motor de **2 hp / 1,5 kW** con **SF = 1,25** puede entregar **2,5 hp / 1,9 kW** de forma intermitente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/service-factor-d_735.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
- **weg.net**: https://www.weg.net/institutional/AU/en/support/resources-and-tools
