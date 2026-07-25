---
title: "Parpadeo de voltaje (flicker) causas"
sidebar:
  label: "Parpadeo de voltaje (flicker) causas"
description: "Ficha tecnica: Parpadeo de voltaje (flicker) causas"
keywords: ["voltage flicker causes measurement", "calidad-energia"]
category: "calidad-energia"
topic: "voltage-quality"
subcategory: "voltage-flicker"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El parpadeo de voltaje, conocido internacionalmente como *flicker*, es la fluctuación rápida de la tensión de alimentación que provoca un cambio perceptible en el brillo de las lámparas, y puede perturbar a los usuarios o afectar a equipos electrónicos sensibles. El fenómeno se produce por la caída de tensión que una carga de corriente variable genera sobre la impedancia de la red de distribución; cuanto mayor es la variación de carga respecto a la potencia de cortocircuito disponible en el punto de conexión común, más probable y severo resulta el parpadeo.

## Mecanismo de generación

La causa inmediata del flicker es la variación rápida de la corriente demandada por un equipo o conjunto de cargas. Al circular esta corriente a través de la impedancia de la línea (resistencia y reactancia del transformador, cables y acometida), aparece una caída de tensión dinámica que hace oscilar la tensión en bornes de los demás usuarios. La magnitud de la fluctuación depende principalmente de dos factores:

| Factor | Descripción |
| --- | --- |
| Amplitud del escalón de carga | La caída de tensión es proporcional a la variación de corriente (ΔI). Un aumento brusco de la demanda de corriente genera una depresión momentánea de tensión, y una desconexión súbita produce un pico. |
| Impedancia de la red aguas arriba | A mayor impedancia de cortocircuito (red débil), mayor será la caída de tensión para un mismo ΔI, por lo que la red amplifica el parpadeo. La relación entre la carga fluctuante y la capacidad de cortocircuito en el punto de acoplamiento común es el parámetro determinante de la severidad. |

> **ΔV ≈ I_red · Z_red**, donde ΔV es la fluctuación de tensión, I_red es la componente fluctuante de la corriente y Z_red la impedancia equivalente del sistema vista desde el punto de evaluación.

## Causas principales

El flicker se origina siempre en cargas que demandan potencia activa o reactiva de forma variable. Las fuentes más representativas son:

- Hornos de arco eléctrico en acerías y fundiciones, por la naturaleza errática del arco y los bruscos cambios de potencia durante la fusión.
- Arranque frecuente de motores de gran potencia, como ascensores, compresores o bombas, que provocan picos de corriente repetitivos.
- Máquinas de soldadura por resistencia, que funcionan con pulsos de alta corriente de corta duración.
- Equipos con regulación por control de fase (tiristores) que recortan la onda de corriente, como variadores de luminosidad o arrancadores suaves que no filtran adecuadamente.
- Electrodomésticos con ciclo de encendido/apagado periódico, como bombas de calor, aires acondicionados o lavadoras, cuando la instalación es débil.

La severidad del parpadeo no depende del valor absoluto de la potencia de la carga, sino de la **magnitud y frecuencia de los cambios de carga**. Un mismo escalón de potencia genera más parpadeo en una red rural con poca potencia de cortocircuito que en una red industrial robusta.

## Cargas típicas generadoras de flicker

| Tipo de carga | Característica de fluctuación | Ejemplos típicos |
| --- | --- | --- |
| Cargas de arco eléctrico | Fluctuación caótica de corriente, espectro amplio de frecuencias | Hornos de arco, soldadura por arco |
| Motores con arranque directo frecuente | Escalón de corriente 5-8 veces la nominal durante 0.5‑3.0 s / 0.5‑3.0 s, repetido cada pocos segundos | Ascensores, bombas de pozo, compresores de aire |
| Cargas controladas por electrónica de potencia | Recortes de la onda de corriente, generación de armónicos y fluctuaciones de potencia reactiva | Variadores de velocidad, arrancadores estáticos sin filtro |
| Equipos de calefacción/resistencia regulada | Cambios de escalón de potencia al conmutar los elementos calefactores | Hornos de resistencia, calderas eléctricas |

## Medición y normativa

La cuantificación del flicker se realiza con un flickerímetro normalizado, definido en la norma **IEC 61000-4-15**. Este instrumento simula el comportamiento de una lámpara incandescente de referencia (230 V/60 W o 120 V/60 W) y el sistema de percepción ojo‑cerebro humano. A partir de la señal procesada se obtienen dos índices estadísticos:

| Índice | Intervalo de observación | Límite admisible (norma IEC 61000-3-3) |
| --- | --- | --- |
| **Pst** (severidad de flicker de corta duración) | 10 min / 600 s | 1,0 |
| **Plt** (severidad de flicker de larga duración) | 2 h / 7200 s | 0,65 |

El valor de Plt se calcula como la media cúbica de varios valores consecutivos de Pst medidos a lo largo de un período de dos horas. El factor de escala de ambos índices se ha calibrado de modo que un valor unitario (P=1,0) corresponde al umbral en el que el 50 % de los observadores considera el parpadeo molesto.

## Efectos del parpadeo

- **Molestias visuales y fatiga**: La fluctuación luminosa es molesta incluso en niveles bajos; en personas fotosensibles puede desencadenar crisis epilépticas.
- **Alteración de equipos electrónicos**: Receptores de televisión, monitores y sistemas de control industrial pueden funcionar erráticamente si la tensión de alimentación oscila.
- **Pérdida de rendimiento en procesos**: Máquinas que requieren par electromagnético constante (motores de precisión) pueden sufrir variaciones de velocidad o vibraciones.

## Estrategias de mitigación

- Reducir la amplitud del escalón de carga mediante arrancadores suaves o variadores de frecuencia.
- Disminuir la frecuencia de las maniobras; por ejemplo, espaciar los arranques de motores.
- Aumentar la potencia de cortocircuito en el punto de conexión (pasar a un nivel de tensión superior, instalar un transformador dedicado).
- Instalar compensadores estáticos de potencia reactiva (SVC) o compensadores síncronos que alisen las fluctuaciones de tensión.
- Utilizar filtros activos o compensadores serie para desacoplar la carga perturbadora del resto de la red.

## Preguntas frecuentes (FAQ)

### ¿Qué es el flicker o parpadeo de voltaje?
Es la oscilación rápida de la tensión de suministro que provoca una variación visible en la luminosidad de las lámparas. Se cuantifica mediante los índices Pst y Plt definidos en la norma IEC 61000-4-15.

### ¿Cuáles son las principales causas del parpadeo?
Cargas que demandan corrientes muy variables, como hornos de arco, arranque frecuente de motores, soldadoras por resistencia y equipos de regulación electrónica sin filtro. La gravedad depende de la magnitud de la fluctuación de carga y de la impedancia de la red.

### ¿Cómo se mide la severidad del parpadeo?
Con un flickerímetro conforme a IEC 61000-4-15, que emula una lámpara incandescente de referencia y el sistema visual humano, calculando el índice Pst sobre intervalos de 10 minutos y el Plt sobre 2 horas.

### ¿Qué valores de Pst y Plt se consideran aceptables?
La norma IEC 61000-3-3 establece un límite de Pst ≤ 1,0 y Plt ≤ 0,65. Un valor de 1,0 representa el umbral en el que el 50 % de las personas percibe el parpadeo como molesto.

### ¿Cómo se puede reducir el flicker en una instalación?
Reduciendo la amplitud o la frecuencia de los cambios de carga (arrancadores progresivos, variadores de velocidad), reforzando la red (aumento de la potencia de cortocircuito) o instalando compensadores estáticos (SVC) que absorban las fluctuaciones.

### ¿Qué normativa regula la emisión de flicker?
La emisión de flicker en baja tensión está limitada por la norma IEC 61000-3-3 (equipos con corriente ≤ 16 A por fase). La medición se rige por IEC 61000-4-15, y existen informes complementarios como IEC TR 61547-1 para luminarias.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/flow-meters-d_493.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/temperature-drift-in-electronic-circuits-resistors-and-operational-amplifiers/
