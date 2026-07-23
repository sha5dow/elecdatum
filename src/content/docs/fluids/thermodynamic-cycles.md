---
title: "Ciclos termodinámicos básicos"
sidebar:
  label: "Ciclos termodinámicos básicos"
description: "Ficha tecnica: Ciclos termodinámicos básicos"
keywords: ["Rankine Brayton Otto diesel thermodynamic cycles", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "thermodynamic-cycles"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

Los ciclos termodinámicos básicos son modelos ideales que describen el funcionamiento de las máquinas térmicas mediante procesos de compresión, adición de calor, expansión y rechazo de calor. Cada ciclo define un conjunto de transformaciones reversibles sobre un fluido de trabajo, y su estudio permite predecir el rendimiento, las temperaturas de operación y las presiones alcanzables en motores de combustión interna, turbinas de gas, plantas de vapor y sistemas de refrigeración.

## Tabla de ciclos termodinámicos

| Ciclo | Procesos principales | Adición de calor | Rechazo de calor | Eficiencia ideal (fórmula) | Relación característica típica | Temperaturas típicas (K / °R) |
|---|---|---|---|---|---|---|
| Carnot | 1-2 Isotermo, 2-3 Isentrópico, 3-4 Isotermo, 4-1 Isentrópico | Isoterma a T<sub>máx</sub> | Isoterma a T<sub>mín</sub> | η = 1 – T<sub>mín</sub> / T<sub>máx</sub> | – | 300–1500 K / 540–2700 °R |
| Otto | 1-2 Isentrópico (compresión), 2-3 Isócoro, 3-4 Isentrópico (expansión), 4-1 Isócoro | Isócoro (volumen constante) | Isócoro | η = 1 – 1 / ε<sup>κ–1</sup> | ε = 8:1 a 12:1 (compresión) | 300–2500 K / 540–4500 °R |
| Diésel | 1-2 Isentrópico (compresión), 2-3 Isóbaro, 3-4 Isentrópico (expansión), 4-1 Isócoro | Isóbaro (presión constante) | Isócoro | η = 1 – (1/ε<sup>κ–1</sup>) · (Φ<sup>κ</sup> – 1) / [κ(Φ – 1)] | ε = 14:1 a 25:1, Φ = 1,5–3,0 (inyección) | 300–2200 K / 540–3960 °R |
| Brayton (Joule) | 1-2 Isentrópico (compresor), 2-3 Isóbaro, 3-4 Isentrópico (turbina), 4-1 Isóbaro | Isóbaro | Isóbaro | η = 1 – T<sub>1</sub>/T<sub>2</sub> = 1 – (P<sub>2</sub>/P<sub>1</sub>)<sup>(1–κ)/κ</sup> | r<sub>p</sub> = 15:1 a 40:1 (presión) | 300–1700 K / 540–3060 °R (entrada turbina) |
| Rankine | 1-2 Isóbaro (caldera), 2-3 Isentrópico (turbina), 3-4 Isóbaro (condensador), 4-1 Isentrópico (bomba) | Isobaro (evaporación y sobrecalentamiento) | Isobaro (condensación) | η = (h<sub>3</sub> – h<sub>4</sub>) / (h<sub>3</sub> – h<sub>1</sub>) | Presión caldera: 40–250 bar / 580–3626 psi | 300–900 K / 540–1620 °R (vapor) |

## Fórmulas y eficiencias

La eficiencia térmica de cada ciclo se expresa como el trabajo neto producido dividido por el calor aportado. En condiciones ideales, las fórmulas dependen únicamente de temperaturas, relaciones de compresión o presión, y del exponente isentrópico κ (típicamente 1,4 para aire como gas diatómico).

| Ciclo | Variables clave | Expresión simplificada | Valor típico real |
|---|---|---|---|
| Carnot | T<sub>máx</sub>, T<sub>mín</sub> | η = 1 – 300 K/1500 K = 80 % | – (ideal) |
| Otto | ε, κ | η = 1 – ε<sup>1–κ</sup> | 0,25–0,30 (gasolina) |
| Diésel | ε, κ, Φ | η = 1 – (1/ε<sup>κ–1</sup>) · (Φ<sup>κ</sup>–1)/[κ(Φ–1)] | 0,35–0,45 (motores modernos) |
| Brayton | r<sub>p</sub>, κ, T<sub>1</sub> | η = 1 – 1/r<sub>p</sub><sup>(κ–1)/κ</sup> | 0,30–0,40 (turbina de gas simple) |
| Rankine | Entalpías h<sub>3</sub>, h<sub>4</sub>, h<sub>1</sub> | η = (h<sub>3</sub> – h<sub>4</sub>)/(h<sub>3</sub> – h<sub>1</sub>) | 0,35–0,48 (plantas de vapor) |

Para el ciclo Rankine, el uso de sobrecalentamiento, recalentamiento y precalentamiento regenerativo del agua de alimentación eleva la eficiencia real desde un 35 % hasta un 48 % en plantas supercríticas (caldera operando a 250 bar / 3626 psi y 600 °C / 1112 °F).

## Criterios de selección

La elección del ciclo termodinámico más adecuado depende del tipo de fuente de energía, la potencia requerida, las temperaturas de trabajo y la aplicación final.

| Criterio | Carnot | Otto | Diésel | Brayton | Rankine |
|---|---|---|---|---|---|
| Fluido de trabajo | Gas ideal (cualquiera) | Mezcla aire‑combustible | Aire | Gas (aire o helio) | Agua/vapor |
| Tipo de combustión | Externa (teórica) | Interna, encendido por chispa | Interna, encendido por compresión | Interna o externa | Externa (caldera) |
| Rango de potencia | – | 1–400 kW (automóviles) | 5–80 000 kW (vehículos, generación) | 100 kW–500 MW (turbinas de gas) | 1 MW–1 000 MW (centrales termoeléctricas) |
| T<sub>máx</sub> típica | Variable | ~2500 K / 4500 °R | ~2200 K / 3960 °R | 1500–1700 K / 2700–3060 °R | 800–900 K / 1440–1620 °R |
| Rendimiento real | Máximo teórico | 25–30 % | 35–45 % | 30–40 % | 35–48 % |

En aplicaciones estacionarias de gran escala, el ciclo Rankine es la opción dominante. Las turbinas de gas (Brayton) se emplean en aeronaves y ciclos combinados, donde los gases de escape alimentan una caldera de vapor, alcanzando eficiencias globales superiores al 60 %. Los motores Otto y Diésel cubren el sector del transporte, mientras que el ciclo Carnot sirve exclusivamente como referencia teórica.

## Diagramas P‑V y T‑s

Las representaciones gráficas en diagramas presión‑volumen (P‑V) y temperatura‑entropía (T‑s) permiten visualizar los procesos de cada ciclo.

- **Carnot**: dos isotermas horizontales en T‑s, dos isentrópicas verticales.
- **Otto**: dos isentrópicas curvas y dos isócoras verticales en P‑V (líneas de volumen constante).
- **Diésel**: isentrópicas curvas, una isóbara horizontal (adición de calor) y una isócora vertical (rechazo) en P‑V.
- **Brayton**: dos isóbaras horizontales y dos isentrópicas curvas en ambos diagramas.
- **Rankine**: en T‑s, la zona de cambio de fase muestra una campana de saturación; el ciclo típico incluye isóbaras de caldera y condensador, y una isentrópica de expansión en la turbina.

En todos los casos, el área encerrada en el diagrama P‑V equivale al trabajo neto del ciclo, mientras que en el diagrama T‑s el área bajo la curva de adición de calor representa la energía térmica absorbida.

## Aplicaciones típicas

| Ciclo | Aplicación principal | Ejemplos concretos |
|---|---|---|
| Carnot | Referencia ideal | Evaluación de límites de eficiencia |
| Otto | Motores de gasolina, GLP | Automóviles, motocicletas, grupos electrógenos pequeños |
| Diésel | Motores de combustión por compresión | Camiones, locomotoras, maquinaria pesada, generadores diésel |
| Brayton | Turbinas de gas, propulsión aérea | Turborreactores, turbofán, plantas de ciclo combinado |
| Rankine | Centrales termoeléctricas de vapor | Plantas de carbón, nucleares, solares de concentración |

## Preguntas frecuentes (FAQ)

**¿Cuál es la eficiencia máxima ideal de un ciclo Carnot entre 300 K y 1500 K?**  
La eficiencia ideal es del 80 %, calculada como 1 – (300 K / 1500 K). En la práctica, las irreversibilidades impiden alcanzar este valor.

**¿Qué relación de compresión se necesita en un ciclo Otto para lograr una eficiencia ideal del 60 % con κ = 1,4?**  
Se requiere una relación de compresión de aproximadamente 10:1. Con ε = 10, η = 1 – 10<sup>1–1,4</sup> = 1 – 10<sup>–0,4</sup> ≈ 0,60.

**¿Cuál es la eficiencia real típica de un motor diésel de automóvil con relación de compresión 18:1?**  
Un motor diésel moderno alcanza entre 35 % y 40 % de eficiencia térmica real, frente al 63 % ideal que arrojaría la fórmula del ciclo Diésel con Φ=2,0 y κ=1,4.

**¿A qué presión opera la caldera de un ciclo Rankine supercrítico?**  
Las calderas supercríticas trabajan típicamente a 250 bar / 3600 psi, con temperaturas de vapor de hasta 600 °C / 1112 °F, alcanzando eficiencias reales del 45 % al 48 %.

**¿Qué eficiencia térmica se obtiene en un ciclo Brayton ideal con relación de presión 15 y temperatura de entrada al compresor de 300 K?**  
Con r<sub>p</sub> = 15, la eficiencia ideal es η = 1 – 15<sup>(1–1,4)/1,4</sup> = 0,557 (55,7 %). Las turbinas de gas reales, con pérdidas, operan entre 35 % y 40 %.

**¿Cuál es el consumo específico de combustible de un motor de ciclo Otto a plena carga?**  
Los motores Otto de inyección directa presentan un consumo específico de combustible típico de 250 g/kWh (0,55 lb/hp·h). Los motores diésel más eficientes pueden bajar a 200 g/kWh.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/carnot-otto-diesel-joule-cycles-d_2237.html
- **thermopedia.com**: https://www.thermopedia.com/content/1072/
