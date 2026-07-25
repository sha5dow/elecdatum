---
title: "Clases de aislamiento en motores A-H"
sidebar:
  label: "Clases de aislamiento en motores A-H"
description: "Ficha tecnica: Clases de aislamiento en motores A-H"
keywords: ["motor insulation class A B F H temperature", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "motor-insulation-class"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Las clases de aislamiento en motores eléctricos son categorías normalizadas que establecen la temperatura máxima de operación que pueden soportar los materiales aislantes del bobinado sin comprometer su vida útil. La clasificación sigue las normas NEMA e IEC y constituye un parámetro fundamental para la selección, el diseño y la operación segura de máquinas rotativas.

## Clases de aislamiento estandarizadas
La tabla siguiente recoge las clases de aislamiento A, B, F y H definidas por NEMA, junto con las designaciones equivalentes de IEC y los materiales aislantes típicos empleados en cada una.

| Clase (NEMA) | Clase IEC 60085 | Temperatura máxima de punto caliente | Materiales típicos |
| --- | --- | --- | --- |
| A | 105 | 105 °C / 221 °F | Materiales orgánicos: algodón, seda, papel, algunas fibras sintéticas impregnadas |
| B | 130 | 130 °C / 266 °F | Materiales inorgánicos: mica, fibra de vidrio, asbesto con aglutinantes de alta temperatura |
| F | 155 | 155 °C / 311 °F | Materiales de clase B con aglutinantes estables a mayor temperatura |
| H | 180 | 180 °C / 356 °F | Elastómeros de silicona, materiales inorgánicos de clase B con aglutinantes de alta temperatura |

## Aumentos de temperatura admisibles
El límite de calentamiento a plena carga depende de la clase de aislamiento y del factor de servicio del motor. Los valores indicados corresponden a un ambiente de referencia de 40 °C / 104 °F.

| Clase | Temp. máx. de punto caliente | Aumento admisible (servicio 1.0) | Aumento admisible (servicio 1.15) |
| --- | --- | --- | --- |
| A | 105 °C / 221 °F | 60 °C / 140 °F | 70 °C / 158 °F |
| B | 130 °C / 266 °F | 80 °C / 176 °F | 90 °C / 194 °F |
| F | 155 °C / 311 °F | 105 °C / 221 °F | 115 °C / 239 °F |
| H | 180 °C / 356 °F | 125 °C / 257 °F | – |

## Cálculo de la temperatura de operación
La temperatura de punto caliente se obtiene sumando la temperatura ambiente de referencia, el aumento de temperatura admisible a plena carga y un margen de seguridad para puntos calientes (hot spot). La fórmula explícita es:

> **T_max = T_amb + ΔT_rise + ΔT_hs**

| Variable | Significado | Valor típico / descripción |
| --- | --- | --- |
| T_max | Temperatura máxima de punto caliente | Variable, según clase |
| T_amb | Temperatura ambiente de referencia | 40 °C / 104 °F |
| ΔT_rise | Aumento de temperatura admisible a plena carga | Según clase y factor de servicio (ver tabla anterior) |
| ΔT_hs | Margen para puntos calientes | 10 °C / 18 °F |

**Ejemplo para clase F con factor de servicio 1.0:**  
40 °C + 105 °C + 10 °C = 155 °C / 311 °F, exactamente el límite de la clase.

## Impacto en la vida útil
La degradación del aislamiento sigue una regla práctica ampliamente aceptada: **por cada 10 °C / 18 °F de incremento de temperatura por encima del límite de la clase, la vida útil del motor se reduce aproximadamente a la mitad**. El siguiente ejemplo, operando a una temperatura de punto caliente de 180 °C / 356 °F, ilustra la diferencia de longevidad según la clase de aislamiento:

| Clase de aislamiento | Vida útil estimada a 180 °C / 356 °F |
| --- | --- |
| A | ≈ 300 horas |
| B | ≈ 1 800 horas |
| F | ≈ 8 500 horas |
| H | Decenas de miles de horas |

## Aplicaciones comunes
- **Clase A:** uso limitado en la actualidad; presente en máquinas antiguas o aparatos electrodomésticos de baja temperatura.
- **Clase B:** la más común en motores de 60 Hz en el mercado estadounidense. Empleada en bombas centrífugas, ventiladores y compresores de aire.
- **Clase F:** estándar internacional en motores de 50 Hz y en aplicaciones industriales que demandan mayor fiabilidad, como cintas transportadoras y extrusoras.
- **Clase H:** entornos de alta temperatura ambiente, hornos, accionamientos de tracción y equipos donde se instalan sistemas de refrigeración reducidos.

## Preguntas frecuentes (FAQ)
### ¿Cuál es la temperatura máxima que soporta un aislamiento clase A?
   La temperatura máxima de un aislamiento clase A es de 105 °C / 221 °F. Superarla acelera drásticamente el envejecimiento de los materiales orgánicos.

### ¿Cuántas horas de vida aproximada se obtienen con un aislamiento clase F operando a 180 °C?
   A 180 °C / 356 °F un motor con aislamiento clase F ofrece alrededor de 8 500 horas de vida útil, frente a sólo 300 horas en clase A y unas 1 800 horas en clase B.

### ¿Qué incremento de temperatura sobre la clase nominal reduce la vida a la mitad?
   La regla de Arrhenius aplicada a motores establece que cada aumento de 10 °C / 18 °F por encima del límite de la clase reduce la vida útil a la mitad.

### ¿Cuál es la diferencia de temperatura entre la clase B y la clase F?
   La clase B alcanza 130 °C / 266 °F, mientras que la clase F llega a 155 °C / 311 °F, es decir, una diferencia de 25 °C / 45 °F.

### ¿Qué margen de seguridad por puntos calientes se considera en el diseño estándar?
   El margen típico de punto caliente (hot spot) es de 10 °C / 18 °F, sumado a la temperatura ambiente de referencia de 40 °C / 104 °F y al aumento de carga admisible.

### ¿En qué rango de temperatura trabaja un aislamiento clase H?
   El aislamiento clase H está diseñado para soportar una temperatura máxima de punto caliente de 180 °C / 356 °F de forma continua, manteniendo una vida útil de decenas de miles de horas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-insulation-classes-d_734.html
- **electrical4u.com**: https://www.electrical4u.com/motor-duty-class/
