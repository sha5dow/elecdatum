---
title: "Resistencias en serie y paralelo"
sidebar:
  label: "Resistencias en serie y paralelo"
description: "Ficha tecnica: Resistencias en serie y paralelo"
keywords: ["resistors series parallel formula calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "circuit-elements"
subcategory: "series-parallel-resistors"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

En circuitos eléctricos, dos o más resistencias pueden conectarse en serie o en paralelo para modificar la resistencia equivalente total del arreglo. La conexión en serie suma los valores óhmicos individuales, mientras que la conexión en paralelo siempre resulta en una resistencia equivalente menor que la más pequeña de las resistencias participantes.

## Resistencia en serie

> **R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + … + R<sub>n</sub>**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| R<sub>eq</sub> | Resistencia equivalente total | Ω |
| R<sub>1</sub>, R<sub>2</sub>, …, R<sub>n</sub> | Resistencias individuales conectadas en serie | Ω |

En una conexión serie, todos los componentes comparten la misma corriente eléctrica. La tensión total aplicada se reparte entre las resistencias en proporción directa a sus valores (divisor de tensión). Si alguna resistencia falla abriéndose, el circuito completo se interrumpe.

## Resistencia en paralelo

> **1 / R<sub>eq</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + … + 1 / R<sub>n</sub>**

Para el caso particular de dos resistencias en paralelo:

> **R<sub>eq</sub> = (R<sub>1</sub> · R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| R<sub>eq</sub> | Resistencia equivalente total | Ω |
| R<sub>1</sub>, R<sub>2</sub>, …, R<sub>n</sub> | Resistencias individuales conectadas en paralelo | Ω |

En una conexión paralelo, la tensión eléctrica es idéntica en todos los terminales de las resistencias. La corriente total suministrada se divide entre las ramas (divisor de corriente) y la conductancia total es la suma de las conductancias individuales. Si una resistencia falla abriéndose, las demás continúan funcionando.

## Comparación de configuraciones

| Característica | Serie | Paralelo |
| --- | --- | --- |
| Resistencia equivalente | R<sub>eq</sub> > cualquier R<sub>i</sub> | R<sub>eq</sub> < la menor R<sub>i</sub> |
| Corriente | Misma en todas las resistencias | Se divide entre las ramas (I<sub>total</sub> = Σ I<sub>i</sub>) |
| Tensión | Se divide (V<sub>total</sub> = Σ V<sub>i</sub>) | Misma en todas las resistencias |
| Conductancia equivalente | G<sub>eq</sub> = (1/G<sub>1</sub> + 1/G<sub>2</sub> + …)<sup>−1</sup> | G<sub>eq</sub> = G<sub>1</sub> + G<sub>2</sub> + … |
| Tolerancia al fallo | Una abertura interrumpe todo el circuito | Una abertura solo desconecta esa rama |
| Aplicación típica | Limitación de corriente, divisores de tensión | Redes de distribución, cargas independientes |

## Ejemplo de cálculo

Tres resistencias de 33 Ω, 33 Ω y 47 Ω se conectan a una fuente de 12 V. Se analizan ambas configuraciones.

**Conexión en serie**  
R<sub>eq</sub> = 33 Ω + 33 Ω + 47 Ω = **113 Ω**  
I = 12 V / 113 Ω ≈ **0,106 A**  
Caídas de tensión: V<sub>1</sub> ≈ 3,5 V, V<sub>2</sub> ≈ 3,5 V, V<sub>3</sub> ≈ 5,0 V  

**Conexión en paralelo**  
1 / R<sub>eq</sub> = 1/33 + 1/33 + 1/47 ≈ 0,0820 S → R<sub>eq</sub> = 1 / 0,0820 ≈ **12,2 Ω**  
I<sub>total</sub> = 12 V / 12,2 Ω ≈ **0,98 A**  
Corrientes por rama: I<sub>1</sub> ≈ 0,36 A, I<sub>2</sub> ≈ 0,36 A, I<sub>3</sub> ≈ 0,26 A  

La potencia total disipada en paralelo es P = V · I = 12 V · 0,98 A ≈ 11,8 W, repartida entre los resistores según P = V² / R<sub>i</sub>.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la fórmula para la resistencia total en serie?
La resistencia equivalente es la suma directa: R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + … + R<sub>n</sub>.

### ¿Cómo se calcula la resistencia equivalente de dos resistencias en paralelo?
Se usa la expresión simplificada R<sub>eq</sub> = (R<sub>1</sub> · R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>). Para más de dos, se emplea el inverso de la suma de inversos.

### ¿Qué corriente circula por cada resistencia en un circuito serie?
En serie, por cada resistencia circula exactamente la misma corriente, igual a la corriente total del circuito.

### ¿Por qué la resistencia equivalente en paralelo es menor que la más pequeña del conjunto?
Al añadir rutas adicionales al flujo de corriente, la conductancia total aumenta. Como la resistencia es el inverso de la conductancia, el valor equivalente disminuye y siempre es menor que la menor de las resistencias individuales.

### ¿Se pueden combinar resistencias en serie y paralelo en un mismo circuito?
Sí, se forman redes mixtas que se simplifican paso a paso: primero se reducen los subgrupos en paralelo, luego se suman los equivalentes en serie, repitiendo hasta obtener una única resistencia equivalente.

### ¿Cómo influye la tolerancia en el valor equivalente?
La tolerancia se propaga según la configuración. En serie, el error absoluto se suma; en paralelo, el error relativo de la resistencia equivalente puede ser menor, pero la incertidumbre total depende de la combinación específica y del método de propagación de errores.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/resistance-serial-parallel-connections-d_1881.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/tools/parallel-resistance-calculator/
- **electrical4u.com**: https://www.electrical4u.com/resistances-in-series-and-resistances-in-parallel/
