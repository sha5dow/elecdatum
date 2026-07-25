---
title: "Tipos de sensores fotoeléctricos"
sidebar:
  label: "Tipos de sensores fotoeléctricos"
description: "Ficha tecnica: Tipos de sensores fotoeléctricos"
keywords: ["photoelectric sensor types through-beam retroreflective", "sistemas-control"]
category: "sistemas-control"
topic: "sensors"
subcategory: "photoelectric-sensor-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los sensores fotoeléctricos son dispositivos optoelectrónicos utilizados para detectar la presencia, ausencia o distancia de objetos mediante un haz de luz —habitualmente infrarroja, rojo visible o láser— y un receptor fotosensible. Existen tres tipos fundamentales de detección: **barrera** (through‑beam), **retrorreflectivo** y **difuso** (reflexión sobre el objeto o de proximidad), cada uno con prestaciones de alcance, precisión e instalación bien diferenciadas.

## Principio de funcionamiento

El sensor fotoeléctrico consta de un emisor de luz y un receptor. En la configuración de **barrera**, emisor y receptor se alojan en carcasas separadas enfrentadas; el objeto se detecta cuando interrumpe el haz directo. El modo **retrorreflectivo** sitúa emisor y receptor en la misma carcasa y emplea un reflector pasivo para devolver el haz; la detección se produce al bloquear el camino de ida y vuelta. En el tipo **difuso**, emisor y receptor comparten igualmente la carcasa, pero el propio objeto actúa como reflector difuso: el sensor conmuta cuando la luz reflejada por la superficie del blanco incide sobre el receptor con intensidad suficiente.

## Tipos y características

| Tipo | Principio de detección | Alcance típico máximo | Precisión | Complejidad de instalación |
|------|------------------------|------------------------|-----------|-----------------------------|
| Barrera (through‑beam) | Haz directo entre emisor y receptor separados | Hasta 250 m / 820 ft | Muy alta | Requiere montaje en dos puntos y alineación precisa |
| Retrorreflectivo | Haz reflejado en un reflector (retrorreflector) | Hasta 10 m / 33 ft | Alta | Montaje en dos puntos (sensor + reflector), alineación moderada |
| Difuso (reflexión sobre objeto) | Luz difusa reflejada por la superficie del blanco | Hasta 2 m / 6.6 ft | Media – baja | Montaje en un único punto, sin reflector |

Características adicionales:

- **Modos de salida:** los sensores pueden funcionar en modo luz (light‑on), activando la salida cuando el receptor recibe luz, o en modo oscuridad (dark‑on), activándola cuando el haz se interrumpe. Muchos equipos industriales ofrecen conmutación complementaria o seleccionable.
- **Emisión:** se emplean fuentes infrarrojas, rojo visible o láser de clase 1 según la aplicación. La luz modulada minimiza interferencias externas.
- **Compatibilidad IO‑Link:** modelos modernos, como los de las series Contrinex o Wenglor, integran comunicación IO‑Link v1.0 para configuración y diagnóstico remotos.

## Comparativa de tipos

| Tipo | Principio de detección | Alcance típico | Ventajas | Desventajas |
|------|------------------------|----------------|----------|-------------|
| Barrera | Interrupción del haz directo entre emisor y receptor separados | Hasta 250 m / 820 ft (rectangular Eaton E58) | Máxima precisión y fiabilidad; mayor alcance; muy alta ganancia excedente | Instalación en dos puntos; requiere alineación precisa; puede no detectar objetos translúcidos |
| Retrorreflectivo | Bloqueo del haz de ida y vuelta hacia un reflector | Hasta 10 m / 33 ft | Alta precisión, alcance superior al difuso; montaje simplificado respecto a barrera | Necesita reflector limpio; objetos muy reflectantes (alto albedo) pueden falsear la detección si no se usa polarización |
| Difuso | Reflexión difusa de la luz sobre la superficie del objeto | Hasta 2 m / 6.6 ft | Instalación en un único punto; menor coste; no requiere reflector | Menor precisión; sensible al color, textura y reflectividad del objeto; mayor tiempo de ajuste; alcance limitado |

## Criterios de selección

- **Distancia de detección:** para largas distancias se recomienda el tipo barrera (hasta 250 m / 820 ft en modelos robustos); el retrorreflectivo cubre la mayoría de aplicaciones industriales medias (<10 m / 33 ft); el difuso se reserva para corto alcance (<2 m / 6.6 ft).
- **Características del objeto:** materiales opacos y de alta reflectividad pueden emplear cualquier tipo. Con objetos brillantes o espejados, el retrorreflectivo debe incorporar filtro polarizador para evitar falsas detecciones. Objetos translúcidos o pequeños se benefician del modo barrera por su alta capacidad de interrupción.
- **Entorno de trabajo:** ambientes con suciedad, humedad o temperaturas extremas exigen carcasas robustas (acero inoxidable 316L, IP67/IP69K) y, a menudo, la configuración de barrera, que admite mayor atenuación por contaminación. El retrorreflectivo necesita un reflector limpio.
- **Espacio y montaje:** el difuso solo requiere acceso a un lado, mientras que la barrera precisa dos puntos opuestos. Modelos ultra‑compactos (4 mm / 0.16 in, 5 mm / 0.20 in de diámetro) permiten integrar incluso sensores de barrera en espacios reducidos.
- **Coste:** los sensores difusos son los más económicos; los de barrera y retrorreflectivos, aunque de mayor precio, ofrecen mejor rendimiento en entornos exigentes.

## Aplicaciones típicas

- **Barrera:** control de acceso perimetral, detección de objetos de gran tamaño en transportadores de larga distancia, conteo de piezas a alta velocidad, protección de maquinaria pesada.
- **Retrorreflectivo:** supervisión de puertas de almacenes y muelles de carga, detección de vehículos en sistemas de peaje, control de paso en cintas transportadoras, detección de objetos opacos con superficies no cooperativas mediante filtro polarizado.
- **Difuso:** verificación de presencia de piezas en estaciones de montaje, detección de tapas y embalajes en líneas de envasado, medición de nivel en tolvas pequeñas, aplicaciones de bajo coste donde la distancia no supera 1 – 2 m (3.3 – 6.6 ft).

## Datos técnicos clave

| Parámetro | Valor típico |
|-----------|--------------|
| Tensión de alimentación | 10 a 30 VCC (modelos CA: 20 a 250 V CA) |
| Corriente de salida conmutada | ≤ 200 mA |
| Frecuencia de conmutación | Hasta 10 kHz (ej. sensores tubulares 8 mm) |
| Material de la carcasa | Plástico ABS, acero inoxidable 316L, PVDF |
| Grado de protección | IP67, IP68, IP69K |
| Temperatura de operación | −25 °C a +60 °C / −13 °F a +140 °F (ampliable con carcasas especiales) |
| Longitud de cable | 2 m / 6.6 ft (axial) o conector M8 / M12 de desconexión rápida |
| Alcance máximo (barrera) | Hasta 250 m / 820 ft |
| Alcance máximo (retrorreflectivo) | Hasta 10 m / 33 ft |
| Alcance máximo (difuso) | Hasta 2 m / 6.6 ft |

## Instalación y mantenimiento

Los sensores de **barrera** exigen una alineación precisa entre emisor y receptor, así como una fijación rígida que evite desalineaciones por vibración. Se recomienda verificar periódicamente la limpieza de las ópticas. Los **retrorreflectivos** simplifican el montaje al concentrar emisor y receptor en un módulo, pero el reflector debe permanecer limpio y correctamente orientado; en presencia de objetos brillantes conviene emplear reflectores y filtros polarizados. Los **difusos** son los más fáciles de instalar —basta atornillar el sensor frente al área de detección—, aunque su rendimiento depende fuertemente del color, la rugosidad y el ángulo del objeto detectado; para mantener la fiabilidad conviene limpiar la lente regularmente y ajustar la sensibilidad para cada aplicación. En todos los casos deben respetarse las temperaturas y tensiones de alimentación indicadas por el fabricante y, en exteriores, usar viseras o filtros que contrarresten la luz solar directa o la iluminación artificial intensa.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia fundamental entre los tres tipos de sensores fotoeléctricos?
La barrera utiliza emisor y receptor en carcasas independientes opuestas; el retrorreflectivo agrupa ambos en una carcasa y refleja el haz en un espejo especial; el difuso detecta la luz que el propio objeto refleja de vuelta al sensor.

### ¿Qué tipo de sensor fotoeléctrico ofrece el mayor alcance?
El sensor de barrera alcanza las mayores distancias, con modelos comerciales capaces de detectar objetos a más de 250 m / 820 ft, gracias a que el haz recorre un único trayecto sin pérdida en el reflector.

### ¿Cómo evitar falsas detecciones al trabajar con objetos brillantes?
En modo retrorreflectivo se emplean filtros polarizados y reflectores de triple prisma que discriminan la luz reflejada por una superficie especular. En modo difuso, ajustar la sensibilidad y orientar el sensor para no recibir el reflejo directo suele solucionar el problema.

### ¿Se pueden utilizar sensores fotoeléctricos en ambientes con polvo o humedad?
Sí, si se elige un modelo con la protección IP adecuada (IP67, IP69K) y se mantiene la limpieza de las ópticas. En condiciones extremas, los sensores de barrera toleran mayor suciedad porque la interrupción total del haz sigue siendo detectable gracias a su alta ganancia excedente.

### ¿Qué significan los modos de operación luz‑on y oscuridad‑on?
En modo luz (light‑on), la salida se activa cuando el receptor recibe luz; en modo oscuridad (dark‑on), la salida se activa cuando el haz deja de llegar al receptor. La elección depende de la lógica de control y la seguridad requerida (por ejemplo, modo oscuridad para detección de “objeto presente”).

### ¿Es indispensable una alineación precisa en todos los tipos?
No en la misma medida. La barrera requiere alineación muy precisa entre emisor y receptor. El retrorreflectivo necesita que el sensor apunte correctamente al reflector, pero es más tolerante. El difuso prácticamente no exige alineación, solo que el objeto entre dentro del campo de visión.

## Fuentes consultadas

- **plcacademy.com**: https://www.plcacademy.com/thermocouple/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/sensors_-z-_encoders/photoelectric_sensors/through-beam
