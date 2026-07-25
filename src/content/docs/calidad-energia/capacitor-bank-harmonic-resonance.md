---
title: "Resonancia de bancos de capacitores con armónicos"
sidebar:
  label: "Resonancia de bancos de capacitores con armónicos"
description: "Ficha tecnica: Resonancia de bancos de capacitores con armónicos"
keywords: ["capacitor bank harmonic resonance risk", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "capacitor-bank-harmonic-resonance"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La resonancia de un banco de capacitores ocurre cuando su reactancia capacitiva iguala la reactancia inductiva del sistema a una frecuencia armónica específica, provocando amplificaciones peligrosas de corriente y tensión. Esta condición, conocida como resonancia paralelo o serie, puede sobrecalentar equipos, distorsionar la forma de onda y reducir la vida útil de los componentes si no se toman medidas de mitigación adecuadas.

La resonancia de un banco de capacitores con armónicos es un fenómeno eléctrico que surge cuando la frecuencia natural de oscilación del circuito LC formado por el banco de capacitores y la inductancia de la red coincide con la frecuencia de una corriente armónica presente en el sistema. En condiciones de resonancia, la impedancia equivalente del circuito se minimiza (resonancia serie) o se maximiza (resonancia paralelo), dando lugar a sobretensiones o sobrecorrientes que pueden destruir los condensadores y otros dispositivos cercanos.

Cuando se conecta un banco de capacitores en una red eléctrica que contiene cargas no lineales, como variadores de velocidad o rectificadores, los armónicos generados circulan hacia el banco. La reactancia capacitiva disminuye con la frecuencia (**X_C = 1 / (2πfC)**) mientras que la reactancia inductiva del transformador y los cables aumenta (**X_L = 2πfL**). Existe una frecuencia para la cual ambas reactancias se igualan, anulando la impedancia reactiva total y favoreciendo la circulación intensa de corriente a esa frecuencia armónica.

## Frecuencia de resonancia

La frecuencia de resonancia de un banco de capacitores en derivación se determina mediante la expresión:

> ***f_r = 1 / (2π√(LC))***

donde:

| Variable | Descripción | Unidad (SI) |
| --- | --- | --- |
| f_r | Frecuencia de resonancia | Hz / s⁻¹ |
| L | Inductancia equivalente de la red | H |
| C | Capacitancia total del banco | F |

En sistemas prácticos, la frecuencia de sintonía del banco se expresa a menudo como un orden armónico *h = f_r / f_1*, donde *f_1* es la frecuencia fundamental. Los valores típicos de diseño se recogen en la siguiente tabla para sistemas de 50 Hz y 60 Hz.

| Frecuencia fundamental | Rango típico de frecuencia de sintonía | Orden armónico equivalente |
| --- | --- | --- |
| 50 Hz / 3000 r/min | 120 Hz – 210 Hz / 120 s⁻¹ – 210 s⁻¹ | 2,4 – 4,2 |
| 60 Hz / 3600 r/min | 150 Hz – 250 Hz / 150 s⁻¹ – 250 s⁻¹ | 2,5 – 4,17 |

## Efectos de la resonancia

La resonancia armónica provoca los siguientes impactos operativos:

- **Sobrecorrientes en el banco**: la corriente a la frecuencia de resonancia puede superar entre 1,5 y 5 veces la corriente nominal del condensador, causando envejecimiento acelerado del dieléctrico y fusión de fusibles.
- **Sobretensiones en barras**: la elevada impedancia en resonancia paralelo genera picos de tensión que pueden dañar aislamientos y disparar protecciones.
- **Distorsión de la tensión**: la amplificación de armónicos eleva el THDv por encima de los límites recomendados por IEEE 519 (5 % – 8 %).
- **Calentamiento de transformadores y cables**: las corrientes armónicas adicionales incrementan las pérdidas por efecto pelicular y por histéresis.
- **Interferencia con equipos de control**: las formas de onda distorsionadas pueden provocar falsos disparos y errores de medición.

## Métodos de mitigación

Las técnicas más empleadas para evitar o controlar la resonancia de bancos de capacitores incluyen:

- **Sintonización del banco**: añadir una reactancia serie al banco de capacitores para desplazar la frecuencia de resonancia por debajo de la primera armónica característica, convirtiendo el conjunto en un filtro pasivo sintonizado.
- **Filtros activos de armónicos**: inyectan corrientes de compensación que cancelan los armónicos en tiempo real, independientemente de la impedancia del sistema.
- **Análisis de armónicos previo**: realizar estudios de flujo de carga armónico y barrido de frecuencia antes de la instalación para identificar posibles resonancias y dimensionar las reactancias de sintonía.
- **Uso de bancos con pasos pequeños**: permitir un ajuste fino de la potencia reactiva total para evitar capacitancias que coincidan con resonancias críticas.
- **Implementación de reactores de línea**: en el lado de las cargas no lineales, limitan la inyección de armónicos que podrían excitar el circuito resonante.
- **Monitorización continua**: instalar analizadores de calidad de energía que alerten sobre la evolución de la impedancia armónica y disparen acciones correctivas.

## Aplicaciones

La gestión de la resonancia con armónicos es crucial en las siguientes instalaciones:

- Plantas industriales con variadores de frecuencia y hornos de arco
- Subestaciones de distribución que incorporan compensación reactiva fija o escalonada
- Parques eólicos y solares fotovoltaicos con inversores de potencia
- Edificios comerciales con iluminación LED masiva y sistemas UPS
- Redes de media tensión donde coexisten bancos de condensadores y cables subterráneos de alta capacidad

## Preguntas frecuentes (FAQ)

### ¿Qué es la resonancia de un banco de capacitores con armónicos?

La resonancia es la coincidencia entre la frecuencia natural del circuito LC formado por el banco de capacitores y la inductancia del sistema, con la frecuencia de algún armónico presente, lo que produce una amplificación peligrosa de corriente o tensión.

### ¿Cómo se calcula la frecuencia de resonancia de un banco de capacitores?

Se calcula con la fórmula f_r = 1 / (2π√(L·C)), donde L es la inductancia equivalente de la red y C la capacitancia del banco, ambas en henrios y faradios respectivamente.

### ¿Qué armónicos suelen excitar la resonancia en sistemas industriales?

Los armónicos de orden 5, 7, 11 y 13 son los más problemáticos porque coinciden con las frecuencias típicas de sintonía de bancos de condensadores sin reactor de sintonía (entre 150 Hz y 350 Hz en sistemas de 50 Hz).

### ¿Por qué es necesario sintonizar un banco de capacitores con una reactancia?

La sintonización desplaza la frecuencia de resonancia por debajo del primer armónico inyectado (normalmente por debajo del 5°), evitando así que el banco amplifique corrientes armónicas y protegiendo los condensadores.

### ¿Puede un banco de capacitores sufrir resonancia incluso si no hay cargas armónicas aparentes?

Sí, porque los armónicos de fondo de la red o los transitorios de conexión pueden excitar el circuito resonante si la impedancia del sistema es favorable, especialmente en redes débiles con alta distorsión preexistente.

### ¿Cómo se detecta una condición de resonancia en tiempo real?

Mediante analizadores de calidad de energía que registran corrientes armónicas elevadas, distorsión de tensión anómala y cambios bruscos en la impedancia del sistema para una frecuencia específica, típicamente superior a la fundamental.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/capacitor-bank-reactive-power-compensation/
