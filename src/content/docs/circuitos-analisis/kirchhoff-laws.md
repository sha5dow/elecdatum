---
title: "Leyes de Kirchhoff corriente y voltaje"
sidebar:
  label: "Leyes de Kirchhoff corriente y voltaje"
description: "Ficha tecnica: Leyes de Kirchhoff corriente y voltaje"
keywords: ["Kirchhoff current voltage law KCL KVL", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "fundamentals"
subcategory: "kirchhoff-laws"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Las leyes de Kirchhoff, formuladas por Gustav Kirchhoff en 1845, son dos igualdades fundamentales que describen la conservación de la corriente y la energía en circuitos eléctricos de parámetros concentrados. Constituyen la base del análisis de circuitos moderno, permitiendo modelar matemáticamente cualquier red eléctrica lineal o no lineal, tanto en corriente continua como alterna.

La **ley de corrientes de Kirchhoff** (LCK) establece que en todo nodo de un circuito, la suma algebraica de las corrientes eléctricas que entran y salen es igual a cero, lo que implica que la corriente total que entra al nodo es exactamente igual a la corriente total que sale de él. Este principio es una consecuencia directa del principio de conservación de la carga eléctrica: en régimen estacionario, la carga no puede acumularse ni desaparecer en un punto del circuito. Por convención, las corrientes que entran al nodo se consideran positivas y las corrientes que salen se consideran negativas.

La **ley de voltajes de Kirchhoff** (LVK) establece que en toda malla o lazo cerrado de un circuito, la suma algebraica de las diferencias de potencial (tensiones o voltajes) es igual a cero. Este principio se deriva de la naturaleza conservativa del campo eléctrico en circuitos donde no hay campos magnéticos variables en el tiempo: la energía necesaria para mover una carga a lo largo de una trayectoria cerrada es nula. Dicho de otro modo, la suma de las elevaciones de voltaje (fuentes) es igual a la suma de las caídas de voltaje (cargas) en cualquier lazo cerrado.

## Fórmulas

La ley de corrientes de Kirchhoff se expresa matemáticamente para un nodo con n ramas conductoras como:

> **∑ I<sub>k</sub> = I<sub>1</sub> + I<sub>2</sub> + ... + I<sub>n</sub> = 0**

| Variable | Descripción | Unidad |
|---|---|---|
| I<sub>k</sub> | Corriente eléctrica en la rama k del nodo | A |
| n | Número total de ramas conectadas al nodo | — |

La ley de voltajes de Kirchhoff se expresa para un lazo cerrado con n elementos como:

> **∑ V<sub>k</sub> = V<sub>1</sub> + V<sub>2</sub> + ... + V<sub>n</sub> = 0**

| Variable | Descripción | Unidad |
|---|---|---|
| V<sub>k</sub> | Voltaje o diferencia de potencial en el elemento k del lazo | V |
| n | Número total de elementos en el lazo cerrado | — |

## Ejemplo de aplicación

Para ilustrar la ley de corrientes, considérese un nodo con cinco corrientes conocidas y una sexta corriente desconocida I<sub>6</sub>. Las corrientes que entran son I<sub>1</sub> = 0,1 A, I<sub>2</sub> = 0,2 A, I<sub>3</sub> = 0,1 A y las corrientes que salen son I<sub>4</sub> = —0,05 A, I<sub>5</sub> = —0,15 A. Aplicando la LCK con la convención de signos descrita:

| Corriente | Valor | Signo (entrada/salida) |
|---|---|---|
| I<sub>1</sub> | 0,1 A | Positivo |
| I<sub>2</sub> | 0,2 A | Positivo |
| I<sub>3</sub> | 0,1 A | Positivo |
| I<sub>4</sub> | —0,05 A | Negativo |
| I<sub>5</sub> | —0,15 A | Negativo |

La ecuación de nodo resultante es 0,1 A + 0,2 A + 0,1 A — 0,05 A — 0,15 A + I<sub>6</sub> = 0. Despejando I<sub>6</sub> se obtiene I<sub>6</sub> = —0,2 A, lo que indica que I<sub>6</sub> es una corriente de 0,2 A saliendo del nodo.

Para la ley de voltajes, considérese un lazo simple con una fuente de voltaje de 12 V y tres resistencias en serie con caídas de 3 V, 5 V y 4 V. La suma algebraica es +12 V — 3 V — 5 V — 4 V = 0 V, cumpliendo la LVK.

## Aplicaciones

Las leyes de Kirchhoff se utilizan como herramienta principal en dos métodos sistemáticos de análisis de circuitos eléctricos. En el **análisis de mallas**, basado en la LVK, se asignan corrientes de malla ficticias y se plantea una ecuación de voltaje por cada lazo cerrado independiente para resolver las corrientes reales. En el **análisis nodal**, basado en la LCK, se elige un nodo de referencia y se plantea una ecuación de corriente para cada nodo restante en función de los voltajes nodales, permitiendo calcular todos los potenciales del circuito. Estas leyes, combinadas con la ley de Ohm, constituyen el núcleo algorítmico de la mayoría de los simuladores de circuitos electrónicos, como SPICE, y son aplicables a cualquier red de parámetros concentrados, independientemente de que sea lineal o no lineal, activa o pasiva.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre la ley de corrientes y la ley de voltajes de Kirchhoff?

La ley de corrientes se aplica a los nodos y establece que la suma de corrientes que entran y salen es cero, basándose en la conservación de la carga. La ley de voltajes se aplica a las mallas cerradas y establece que la suma de voltajes alrededor del lazo es cero, basándose en la conservación de la energía.

### ¿Por qué se consideran las corrientes de entrada positivas y las de salida negativas?

Es una convención de signos universalmente adoptada para el análisis nodal. Consistente con ella, la suma de corrientes con su signo debe ser cero. Si se invirtiera la convención el resultado matemático sería equivalente, cambiando el signo de todas las corrientes.

### ¿Qué limitación tiene la ley de voltajes de Kirchhoff en circuitos reales?

La LVK es exacta solo en el modelo de parámetros concentrados, donde se asume que no hay flujo magnético variable atravesando el lazo. Si un campo magnético externo variable induce una fuerza electromotriz en la malla, la suma de voltajes ya no es cero y debe añadirse el término de la ley de Faraday.

### ¿Se pueden aplicar las leyes de Kirchhoff en circuitos de corriente alterna?

Sí, las leyes son válidas para valores instantáneos de corriente y voltaje en CA. Trabajando en el dominio fasorial, las mismas ecuaciones se aplican a corrientes y voltajes complejos, constituyendo la base del análisis de circuitos de CA en régimen sinusoidal permanente.

### ¿Qué relación tienen las leyes de Kirchhoff con las ecuaciones de Maxwell?

Ambas leyes de Kirchhoff son corolarios de las ecuaciones de Maxwell en el límite de baja frecuencia. La LCK se deriva de la conservación de la carga y la LVK de la condición de campo eléctrico conservativo cuando la variación temporal del campo magnético es despreciable en la región del circuito.

### ¿Quién fue Gustav Kirchhoff y cuándo formuló estas leyes?

Gustav Robert Kirchhoff fue un físico alemán que formuló estas leyes en 1845, a la edad de 21 años, mientras aún era estudiante en la Universidad de Königsberg. Su trabajo generalizó la ley de Ohm y sentó las bases formales para la teoría de circuitos eléctricos y la espectroscopia.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/kirchhoff-laws-d_1386.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-6/kirchhoffs-current-law-kcl/
- **electrical4u.com**: https://www.electrical4u.com/kirchhoff-current-law-and-kirchhoff-voltage-law/
