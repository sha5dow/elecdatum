---
title: "Filtros de armónicos tipos"
sidebar:
  label: "Filtros de armónicos tipos"
description: "Ficha tecnica: Filtros de armónicos tipos"
keywords: ["harmonic filter types passive active", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "harmonic-filter-types"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los filtros de armónicos son dispositivos destinados a mitigar corrientes y tensiones armónicas en sistemas eléctricos, donde la distorsión armónica total (THD) puede superar el 40 % en entornos industriales con alta concentración de cargas no lineales. Se clasifican en dos grandes familias —pasivos y activos— según su principio de funcionamiento y componentes, cada una con prestaciones específicas para la mejora de la calidad de energía.

## Filtros pasivos

Los filtros pasivos están diseñados para sintonizar armónicos específicos, típicamente de orden 5 (250 Hz) y 7 (350 Hz) en redes de 50 Hz, aunque también pueden abarcar los órdenes 11 y 13. Consisten exclusivamente en combinaciones de resistencias (R), inductancias (L) y condensadores (C) que forman circuitos resonantes serie o paralelo. El principio de funcionamiento se basa en ofrecer un camino de baja impedancia a la frecuencia del armónico a eliminar, desviándolo del sistema hacia el filtro. La frecuencia de sintonía se calcula mediante la expresión:

> **f₀ = 1 / (2π · √(L·C))**

| Símbolo | Magnitud | Unidad (SI) |
| --- | --- | --- |
| f₀ | Frecuencia de resonancia | Hz |
| L | Inductancia | H (henrio) |
| C | Capacitancia | F (faradio) |

Estos filtros no requieren alimentación externa ni componentes activos, lo que los hace sencillos y económicos. Sin embargo, presentan limitaciones importantes: su tamaño es considerable, son sensibles a variaciones en los parámetros de la red, pueden entrar en resonancia con la impedancia del sistema y solo mitigan los armónicos para los que fueron sintonizados, resultando poco flexibles en entornos dinámicos.

## Filtros activos

Los filtros activos de potencia son capaces de compensar armónicos hasta el orden 50, lo que corresponde a frecuencias de hasta 2,5 kHz en sistemas de 50 Hz, con tiempos de respuesta inferiores a 1 ms. Utilizan electrónica de potencia (IGBT, MOSFET) para inyectar activamente una corriente de compensación de igual magnitud pero en oposición de fase con respecto a la corriente armónica presente. De este modo cancelan el contenido armónico sin necesidad de sintonizar frecuencias fijas.

A diferencia de los pasivos, los filtros activos requieren una fuente de alimentación externa y un sistema de control basado en DSP o FPGA. La topología más extendida es el filtro activo en derivación (shunt), que se conecta en paralelo en el punto de acoplamiento común (PCC). Además de eliminar armónicos, pueden compensar potencia reactiva y equilibrar corrientes trifásicas, adaptándose dinámicamente a las condiciones cambiantes de la carga. Estrategias de control como el control por histéresis, control deadbeat o la teoría de la potencia reactiva instantánea (p-q) permiten una respuesta rápida y precisa.

## Comparativa de filtros pasivos y activos

En sistemas con distorsión armónica total superior al 8 % en corriente o 5 % en tensión, la selección entre filtros pasivos y activos es crítica. La tabla siguiente resume los aspectos más relevantes.

| Parámetro | Filtro pasivo | Filtro activo |
| --- | --- | --- |
| Principio de operación | Desvío del armónico mediante resonancia LC | Inyección de corriente en contrafase |
| Componentes | R, L, C (sin semiconductores) | Convertidores de potencia, DSP, sensores |
| Rango de armónicos | Un solo orden por etapa (5°, 7°, 11°, 13°) | Múltiples órdenes simultáneamente (hasta 50°) |
| Adaptabilidad | Fija, requiere rediseño ante cambios en la red | Dinámica, se adapta en tiempo real |
| Tamaño y peso | Elevado (reactancias y condensadores voluminosos) | Compacto, especialmente en bajas potencias |
| Costo relativo | Bajo para uno o dos armónicos | Medio-alto; menor a largo plazo por versatilidad |
| Riesgo de resonancia | Alto; puede crear nuevas frecuencias resonantes | Prácticamente nulo |
| Pérdidas internas | Bajas (≈ 0,5 – 1 % de la potencia nominal) | Moderadas (≈ 2 – 5 %) |
| Capacidad de compensación reactiva | Parcial (condensador fijo) | Sí, regulable dinámicamente |
| Mantenimiento | Mínimo, componentes pasivos robustos | Requiere inspección periódica de electrónica |

## Aplicaciones

Los filtros pasivos se instalan principalmente en cargas fijas como variadores de velocidad de hasta 500 kW, sistemas de climatización, hornos de inducción con regímenes estables y compensación de factor de potencia en plantas industriales con predominio del 5.º armónico. Los filtros activos, en cambio, se emplean en sistemas con potencias a partir de 100 kVA, donde las cargas varían con frecuencia (centros de datos, líneas de producción flexibles, cargadores de vehículos eléctricos). También se utilizan en instalaciones fotovoltaicas y aerogeneradores para cumplir con los requisitos de calidad de red. Cuando las condiciones lo exigen, se combinan ambos tipos en configuraciones híbridas que aprovechan la robustez del filtro pasivo para los armónicos dominantes y la flexibilidad del activo para el resto del espectro.

## Criterios de selección

La selección de un filtro de armónicos debe considerar la distorsión armónica en el punto de acoplamiento común, con límites típicos de THDv < 5 % y THDi < 8 % según IEEE 519. Otros factores determinantes son la variabilidad de la carga, la presencia de armónicos de orden superior, el espacio disponible, el presupuesto inicial y los costes operativos por pérdidas. Si la instalación presenta un espectro armónico estable y concentrado en órdenes bajos, los filtros pasivos ofrecen una solución económica. Si la distorsión es dinámica o existen múltiples frecuencias, se recomienda el filtro activo. Las configuraciones híbridas resultan óptimas cuando se busca minimizar el tamaño del convertidor activo sin renunciar a la flexibilidad.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la principal diferencia entre un filtro pasivo y uno activo?
El filtro pasivo desvía las corrientes armónicas hacia un circuito LC sintonizado, mientras que el activo inyecta una corriente de compensación en oposición de fase para cancelarlas.

### ¿Qué armónicos puede eliminar un filtro pasivo?
Normalmente ataca un solo orden armónico por etapa (5.º, 7.º, 11.º, 13.º), siendo necesario un filtro independiente para cada frecuencia a eliminar.

### ¿Los filtros activos requieren alimentación externa?
Sí, necesitan una fuente de energía auxiliar para alimentar los convertidores electrónicos y el sistema de control.

### ¿Pueden los filtros pasivos corregir el factor de potencia?
Sí, en su configuración más simple el banco de condensadores entrega potencia reactiva capacitiva, aunque de forma fija y no regulable.

### ¿Cuál es la vida útil típica de un filtro activo?
Con un mantenimiento adecuado y condiciones nominales, supera los 15 años de operación, aunque los condensadores del bus de continua pueden requerir sustitución a los 8-10 años.

### ¿Qué norma limita la distorsión armónica en instalaciones industriales?
La IEEE 519 establece límites de THDv < 5 % en el PCC y corrientes armónicas máximas en función de la relación de cortocircuito.

## Fuentes consultadas

Ninguna fuente externa verificada disponible.