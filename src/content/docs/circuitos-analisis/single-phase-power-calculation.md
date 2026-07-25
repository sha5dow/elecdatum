---
title: "Cálculo de potencia monofásica"
sidebar:
  label: "Cálculo de potencia monofásica"
description: "Ficha tecnica: Cálculo de potencia monofásica"
keywords: ["single phase power calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "single-phase-power"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

En un sistema monofásico residencial típico de 120 V y 200 A, la potencia aparente máxima disponible es de 24 kVA (32,2 HP). La potencia monofásica es la forma más simple de suministro en corriente alterna, donde la tensión y la corriente varían de forma senoidal y en fase –o con un desfase– entregando energía a cargas como iluminación, calefacción y pequeños motores. El cálculo correcto de la potencia activa, reactiva y aparente resulta esencial para dimensionar conductores, protecciones y evaluar la eficiencia energética de cualquier instalación.

## Fórmula de cálculo

La potencia activa (real) en un circuito monofásico de corriente alterna se obtiene con la expresión:

> **P = V × I × FP / 1000**  

donde P se mide en kilovatios (kW) si V está en voltios (V) e I en amperios (A). Para la potencia aparente se omite el factor de potencia:

> **S = V × I / 1000**  

y la potencia reactiva se calcula con:

> **Q = V × I × sen(φ) / 1000**  

siendo φ el ángulo de desfase entre tensión y corriente. La relación entre las tres potencias es S² = P² + Q².

## Tabla de variables

| Símbolo | Magnitud | Unidad (SI) | Unidad (Imperial) |
|---------|----------|--------------|-------------------|
| P | Potencia activa (real) | W, kW | HP (1 HP ≈ 746 W) |
| S | Potencia aparente | VA, kVA | kVA (misma) |
| Q | Potencia reactiva | var, kvar | kvar (misma) |
| V | Tensión (voltaje) | V | V (misma) |
| I | Corriente | A | A (misma) |
| FP (cos φ) | Factor de potencia | adimensional | adimensional |
| φ | Ángulo de fase | grados (°) | grados (°) |

## Potencia activa, reactiva y aparente

En corriente alterna monofásica coexisten tres tipos de potencia. La **potencia activa P = V × I × cos φ** es la que realiza trabajo útil (luz, calor, movimiento) y se mide en vatios (W) o kilovatios (kW). La **potencia reactiva Q = V × I × sen φ** es demandada por cargas inductivas o capacitivas para mantener los campos magnéticos o eléctricos; se expresa en voltiamperios reactivos (var) y no produce trabajo neto. La **potencia aparente S = V × I** representa la carga total que debe soportar la instalación y se mide en voltiamperios (VA) o kilovoltiamperios (kVA). El factor de potencia (FP = cos φ) indica qué fracción de la potencia aparente se convierte en trabajo útil: un FP de 1 significa que toda la potencia es activa (carga puramente resistiva), mientras que valores típicos en motores pequeños oscilan entre 0,7 y 0,95.

## Ejemplo de cálculo

Un motor monofásico de 12 V y 8 A con factor de potencia unitario (FP = 1) y una eficiencia del 96 % consume una potencia eléctrica activa de:

> **P = (12 V × 8 A × 1) / 1000 = 0,096 kW = 96 W**

La potencia mecánica en el eje (potencia al freno, BHP) se obtiene dividiendo por la eficiencia:

> **P_BHP = (12 V × 8 A × 1 × 0,96) / 746 = 0,125 HP (≈ 93,2 W)**

Esto equivale a 1/8 HP, una potencia típica en ventiladores o bombas pequeñas.

## Factores que influyen en la potencia monofásica

El valor real de potencia entregada depende del **factor de potencia** de la carga: cargas inductivas (motores, balastros) reducen la potencia activa para una misma corriente. La **eficiencia del dispositivo** (μ) descuenta pérdidas internas por calor; en motores suele estar entre 0,85 y 0,96. Las **caídas de tensión** en conductores largos disminuyen la tensión en bornes de la carga, reduciendo la potencia efectiva. Además, la **frecuencia de red** (50 Hz o 60 Hz) influye en la reactancia de inductores y condensadores, alterando Q y S sin cambiar necesariamente P. En instalaciones reales se debe considerar también el **desbalance de cargas** si se alimentan varios circuitos desde una misma fase.

## Aplicaciones típicas

La potencia monofásica se emplea en prácticamente todos los hogares y pequeños comercios. Alimenta iluminación interior y exterior, electrodomésticos (neveras, lavadoras, microondas), sistemas de climatización de hasta 3-5 toneladas de refrigeración, bombas de agua residenciales y herramientas eléctricas portátiles. En entornos rurales con redes monofásicas de media tensión se utilizan transformadores de distribución que entregan secundarios de 120/240 V en configuración de fase partida. La potencia máxima típica contratada en una vivienda unifamiliar europea es de 3,45 a 9,2 kVA (corrientes de 15 a 40 A a 230 V), mientras que en Norteamérica un servicio de 200 A a 240 V puede alcanzar 48 kVA.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre potencia activa y potencia aparente en monofásica?
La potencia activa (W) es la energía que realmente se convierte en trabajo; la aparente (VA) es el producto total de tensión y corriente que debe transportar la instalación. El factor de potencia relaciona ambas.

### ¿Cómo se calcula la corriente si conozco la potencia activa y la tensión?
Se despeja I = P / (V × FP) con la potencia en vatios. Si la carga es resistiva pura (FP=1), basta con I = P / V.

### ¿Por qué los motores monofásicos no suelen superar los 10 kW?
Porque no generan un campo magnético rotativo natural y requieren devanados auxiliares de arranque, lo que limita su eficiencia y par de arranque a potencias elevadas. Por encima de ese umbral se prefiere la alimentación trifásica.

### ¿Qué valor de factor de potencia debo usar para una instalación residencial?
En viviendas modernas con cargas mayoritariamente resistivas y electrónicas el FP suele estar entre 0,9 y 1,0. Si hay motores de aire acondicionado o bombas, puede bajar a 0,8-0,9, y se recomienda corregirlo con condensadores.

### ¿Cómo convierto potencia monofásica a caballos de fuerza (HP)?
1 HP equivale a 746 W. Para obtener la potencia en HP, divida la potencia activa en vatios entre 746. Si además hay que considerar la eficiencia del motor, la fórmula completa es HP = (V × I × FP × μ) / 746.

### ¿Puedo conectar una carga monofásica a un sistema trifásico?
Sí, conectándola entre una fase y el neutro o entre dos fases, siempre que la tensión nominal de la carga coincida con la tensión disponible. Por ejemplo, en un sistema 120/208 V trifásico, una carga monofásica de 120 V se conecta fase-neutro y una de 208 V entre dos fases.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/single-phase-electrical-d_887.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-5/power-calculations/
- **electrical4u.com**: https://www.electrical4u.com/electric-power-single-and-three-phase/
