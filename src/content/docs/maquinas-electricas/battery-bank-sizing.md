---
title: "Dimensionamiento de banco de baterías"
sidebar:
  label: "Dimensionamiento de banco de baterías"
description: "Ficha tecnica: Dimensionamiento de banco de baterías"
keywords: ["battery bank sizing calculation Ah", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "battery-systems"
subcategory: "battery-bank-sizing"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de un banco de baterías determina la capacidad nominal en amperios-hora (Ah) necesaria para alimentar una carga eléctrica durante un periodo de autonomía predefinido, manteniendo la tensión dentro de los límites de operación y respetando las restricciones de profundidad de descarga, eficiencia del sistema y condiciones ambientales. Una celda electroquímica entrega 1 Ah al transferir una carga de 3600 C, equivalente al flujo de 1 A durante una hora.

## Parámetros fundamentales
La capacidad requerida depende de la energía diaria consumida, la tensión nominal del sistema, los días de autonomía, la profundidad máxima de descarga admisible (DoD), la eficiencia global y el factor de corrección por temperatura. A continuación se listan las variables de entrada:

| Variable | Símbolo | Unidad | Descripción |
| --- | --- | --- | --- |
| Energía diaria | E<sub>dia</sub> | Wh/día | Consumo total de la carga en 24 horas |
| Tensión del sistema | V<sub>nom</sub> | V | Tensión nominal del bus de continua |
| Días de autonomía | N<sub>aut</sub> | – | Número de días consecutivos sin recarga |
| Profundidad de descarga máxima | DoD<sub>max</sub> | % | Fracción de la capacidad que puede extraerse sin dañar la batería |
| Eficiencia del sistema | η<sub>sist</sub> | % | Incluye eficiencia del inversor, cableado y autodescarga |
| Factor de temperatura | F<sub>T</sub> | – | Corrección por desviación respecto a 25 °C / 77 °F |

## Fórmula de dimensionamiento
La capacidad nominal del banco, expresada en amperios-hora (Ah), se obtiene mediante la siguiente expresión:

> **C<sub>banco</sub> = (E<sub>dia</sub> × N<sub>aut</sub>) / (V<sub>nom</sub> × DoD<sub>max</sub> × η<sub>sist</sub> × F<sub>T</sub>)**

donde cada variable se introduce en las unidades indicadas y el factor de temperatura toma un valor igual o inferior a 1 para temperaturas alejadas de la de referencia.

## Tabla de parámetros según tipo de batería
Las propiedades electroquímicas condicionan el DoD admisible, la eficiencia de carga/descarga, el número de ciclos y el rango de temperatura de operación. La tabla siguiente resume valores representativos para las tecnologías más empleadas en almacenamiento estacionario.

| Tipo de batería | Electrolito | Tensión de celda abierta (V) | Densidad de energía alcanzable (Wh/kg) | Eficiencia carga/descarga (%) | Ciclos de vida (nº) | Temperatura de operación |
| --- | --- | --- | --- | --- | --- | --- |
| Plomo-ácido | H₂SO₄ | 2,1 – 2,2 | 30 – 40 | 70 – 90 | 200 – 2000 | -20 °C a 60 °C / -4 °F a 140 °F |
| Níquel-Cadmio | KOH | 1,2 | 40 – 60 | 70 – 90 | 500 – 2000 | -40 °C a 60 °C / -40 °F a 140 °F |
| Níquel-Metal Hidruro | KOH | 1,2 | 60 – 80 | 50 | < 3000 | 10 °C a 50 °C / 50 °F a 122 °F |
| Iones de Litio | LiPF₆ | 3,6 | 100 – 200 | 70 | 500 – 2000 | -20 °C a 60 °C / -4 °F a 140 °F |
| Polímero de Litio | Li-β-Alúmina | 3,7 | 130 – 200 | 70 | > 1200 | -20 °C a 60 °C / -4 °F a 140 °F |

## Factores de corrección (temperatura, profundidad de descarga, envejecimiento)

### Corrección por temperatura
La capacidad práctica de una batería disminuye significativamente por debajo de 25 °C / 77 °F. El factor de corrección F<sub>T</sub> se aplica a la capacidad calculada para garantizar la entrega de energía en las condiciones de sitio. Valores orientativos para baterías de plomo-ácido:

| Temperatura ambiente | Factor de corrección F<sub>T</sub> |
| --- | --- |
| 25 °C / 77 °F | 1,00 |
| 0 °C / 32 °F | 0,85 |
| -10 °C / 14 °F | 0,75 |
| -20 °C / -4 °F | 0,65 |

### Profundidad de descarga (DoD) y envejecimiento
El DoD máximo admisible se fija en función de la vida útil deseada. Para baterías de plomo-ácido se recomienda limitar el DoD al 50 % en aplicaciones cíclicas, mientras que las de iones de litio admiten descargas de hasta el 80 % sin una degradación acelerada. El envejecimiento progresivo reduce la capacidad real; por ello se suele incorporar un margen del 10 al 20 % sobre la capacidad calculada, o bien se planifica el reemplazo al alcanzar el 80 % de la capacidad nominal inicial.

## Ejemplo de cálculo
Se requiere alimentar una carga con un consumo diario de 2400 Wh. La instalación opera a 24 V nominales, con 3 días de autonomía y baterías de plomo-ácido (DoD<sub>max</sub> = 50 %, η<sub>sist</sub> = 85 %). La temperatura mínima esperada en el recinto es de 0 °C / 32 °F, lo que implica F<sub>T</sub> = 0,85.

Aplicando la fórmula:

> **C<sub>banco</sub> = (2400 × 3) / (24 × 0,50 × 0,85 × 0,85) = 7200 / (24 × 0,50 × 0,85 × 0,85) = 7200 / 8,67 ≈ 830,5 Ah**

Se seleccionaría un banco de al menos 830 Ah a 24 V. Para materializarlo, podrían conectarse en serie/paralelo vasos de 2 V o monoblocks de 12 V, configurando la capacidad total requerida.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la vida útil típica de una batería de plomo-ácido en ciclos?
Las baterías de plomo-ácido ofrecen entre 200 y 2000 ciclos a una profundidad de descarga del 50 %, dependiendo del diseño (arranque, tracción o estacionaria). A un DoD del 30 % la vida puede superar los 3000 ciclos.

### ¿Qué temperatura reduce más la capacidad de una batería de iones de litio?
A -20 °C / -4 °F, una batería de iones de litio puede perder hasta el 30-40 % de su capacidad nominal a 25 °C / 77 °F, debido al aumento de la resistencia interna del electrolito LiPF₆.

### ¿Cuántos vatios-hora entrega una batería de 100 Ah a 12 V?
Una batería de 100 Ah a 12 V almacena una energía teórica de 1200 Wh (100 Ah × 12 V). Sin embargo, la energía útil se reduce al aplicar el DoD máximo: con un DoD del 50 %, se dispone de 600 Wh prácticos antes de requerir recarga.

### ¿Cuál es la eficiencia típica de carga/descarga de una batería de NiMH?
Las baterías de NiMH tienen una eficiencia de carga/descarga de alrededor del 50 %, lo que significa que por cada 100 Wh entregados a la carga se deben suministrar aproximadamente 200 Wh durante la carga.

### ¿Qué densidad de energía alcanza una batería de polímero de litio actual?
Las celdas de polímero de litio comerciales alcanzan entre 130 y 200 Wh/kg, ofreciendo más del triple de energía por kilogramo que las baterías de plomo-ácido (30‑40 Wh/kg).

### ¿Cuántos amperios-hora representan 3600 culombios?
Una cantidad de carga de 3600 culombios equivale exactamente a 1 amperio-hora (1 Ah), ya que 1 A sostenido durante 3600 segundos transfiere 3600 C.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/rechargeable-batteries-d_1219.html
- **electrical4u.com**: https://www.electrical4u.com/capacitor-bank-reactive-power-compensation/
