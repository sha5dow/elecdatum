---
title: "Circuito para cargador de vehículo eléctrico"
sidebar:
  label: "Circuito para cargador de vehículo eléctrico"
description: "Ficha tecnica: Circuito para cargador de vehículo eléctrico"
keywords: ["EV charger circuit code requirements NEC 625", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "solar-installation"
subcategory: "ev-charger-circuit"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El circuito para cargador de vehículo eléctrico debe cumplir requisitos específicos según el artículo 625 del NEC para garantizar una instalación segura y confiable. Este artículo establece las bases para el dimensionamiento de conductores, protecciones contra sobrecorriente y consideraciones de carga continua aplicables a estaciones de carga de vehículos eléctricos en instalaciones residenciales, comerciales e industriales.

## Modos de carga según IEC 61851

La norma internacional IEC 61851-1 establece cuatro modos de carga para vehículos eléctricos, cada uno con características y aplicaciones diferenciadas que determinan los requisitos del circuito eléctrico necesario.

| Modo | Fases | Corriente máxima | Tensión máxima | Protección RCD | Aplicación típica |
|---|---|---|---|---|---|
| Modo 1 | 1φ / 3φ | 16 A / 16 A | 250 V / 250 V (1φ) ; 480 V / 480 V (3φ) | No | Bicicletas eléctricas, patinetes, carga por goteo |
| Modo 2 | 1φ / 3φ | 32 A / 32 A | 250 V / 250 V (1φ) ; 480 V / 480 V (3φ) | Sí | Carga lenta AC doméstica con cargador portátil |
| Modo 3 | 1φ / 3φ | 70 A (1φ) / 63 A (3φ) | 250 V / 250 V (1φ) ; 480 V / 480 V (3φ) | Sí | Carga AC lenta y rápida en estaciones públicas o privadas dedicadas |
| Modo 4 | CC | 500 A / 500 A | 1000 V / 1000 V | Sí | Carga rápida DC en estaciones públicas |

## Requisitos del circuito ramal

El circuito ramal para equipos de suministro de vehículos eléctricos (EVSE) con corriente nominal superior a 16 A o tensión superior a 120 V debe ser un circuito ramal individual. Esto implica que un solo circuito alimenta exclusivamente un equipo de carga, sin compartir la alimentación con otros receptores. Se permite una excepción cuando múltiples estaciones de carga son gestionadas mediante un sistema de administración de energía conforme a los requisitos del NEC 625.42(A) o (B), en cuyo caso un único circuito ramal puede alimentar más de un EVSE bajo control coordinado de carga.

## Protección contra sobrecorriente

La protección contra sobrecorriente para el circuito de un cargador de vehículo eléctrico debe dimensionarse como mínimo al 125 % de la corriente nominal del equipo de suministro. Esto significa que para un EVSE con corriente nominal de 40 A, el dispositivo de protección contra sobrecorriente debe tener una capacidad no menor a 50 A (40 A × 1.25). El valor de MOCP (Maximum Over-Current Protection) establece el límite superior permitido para el fusible o interruptor automático, y siempre debe ser mayor o igual que la ampacidad mínima del circuito.

> **MOCP ≥ Corriente nominal del EVSE × 1.25**

Donde la corriente nominal del EVSE se obtiene de la placa de datos del fabricante y el factor 1.25 corresponde al requisito para cargas continuas según el NEC.

## Ampacidad de conductores

Los conductores que alimentan un cargador de vehículo eléctrico deben tener una ampacidad no menor al 125 % de la corriente nominal del EVSE. Para un equipo de 40 A, esto implica una ampacidad mínima de 50 A. Según la tabla 310.16 del NEC, un conductor de cobre de 8 AWG / 8.37 mm² con aislamiento a 75 °C tiene una ampacidad de 50 A, por lo que resulta adecuado para esta aplicación.

> **Ampacidad mínima del conductor = Corriente nominal del EVSE × 1.25**

La selección final del calibre debe considerar el tipo de cable y su temperatura de operación. Para cable tipo NM (Non-Metallic), que debe calcularse según la columna de 60 °C de la tabla 310.16, un EVSE de 40 A requiere un calibre de 6 AWG / 13.3 mm², ya que a 60 °C el cable 8 AWG / 8.37 mm² solo tiene una ampacidad de 40 A.

## Consideraciones de carga continua

El equipo de suministro para vehículos eléctricos se considera una carga continua según el artículo 625.42 del NEC. Esto significa que se espera que opere a su corriente nominal durante tres horas o más, lo cual impacta directamente el dimensionamiento del circuito. La regla del 125 % para la protección contra sobrecorriente y la ampacidad de conductores deriva precisamente de esta clasificación. Adicionalmente, los sistemas de administración de energía permiten excluir la carga del EVSE del cálculo de alimentadores y conductores de servicio cuando se implementan según los lineamientos del NEC, evitando así la necesidad de actualizar el servicio eléctrico existente al instalar cargadores.

## Preguntas frecuentes (FAQ)

### ¿Cuándo se requiere un circuito ramal individual para un cargador de vehículo eléctrico?

Se requiere circuito ramal individual cuando el EVSE tiene una corriente nominal superior a 16 A / 16 A o tensión superior a 120 V / 120 V. Por debajo de estos umbrales, como en cargadores portátiles de baja potencia, no se exige circuito exclusivo. Esta disposición aplica en instalaciones residenciales y comerciales conforme al artículo 625.40 del NEC.

### ¿Cómo se calcula el tamaño del interruptor para un EVSE de 32 A?

Para un EVSE de 32 A, el interruptor debe dimensionarse al 125 % de la corriente nominal: 32 A × 1.25 = 40 A. Se selecciona un interruptor termomagnético de 40 A / 40 A como protección mínima requerida. Nunca debe utilizarse un dispositivo de protección inferior a este valor calculado.

### ¿Cuál es la ampacidad mínima requerida para alimentar un cargador de 48 A?

La ampacidad mínima es 48 A × 1.25 = 60 A. Se requiere un conductor de cobre de al menos 6 AWG / 13.3 mm² si se utiliza cable con aislamiento a 75 °C, o de 4 AWG / 21.15 mm² si es cable tipo NM limitado a la columna de 60 °C de la tabla 310.16.

### ¿Qué calibre de cable se necesita para un cargador de 40 A con cable NM?

Se necesita cable NM de 6 AWG / 13.3 mm². Aunque el conductor de 8 AWG / 8.37 mm² tiene ampacidad de 50 A a 75 °C, el cable NM debe calcularse según la columna de 60 °C del NEC 334.80, donde el calibre 6 AWG / 13.3 mm² ofrece 55 A, suficiente para los 50 A requeridos (40 A × 1.25). El calibre 8 AWG / 8.37 mm² a 60 °C solo proporciona 40 A, resultando insuficiente.

### ¿Qué es el MOCP y cómo se relaciona con el circuito del cargador?

El MOCP (Maximum Over-Current Protection) es la protección máxima contra sobrecorriente permitida, expresada en amperios, que establece el límite superior para el fusible o interruptor automático del circuito. Para un cargador de vehículo eléctrico, el MOCP efectivo se calcula como 2.25 veces la corriente a plena carga del equipo más otras cargas concurrentes, pero el requisito del NEC establece un mínimo práctico del 125 % de la corriente nominal del EVSE.

### ¿Se puede instalar un EVSE de 48 A en un panel de 100 A?

Sí, siempre que el cálculo de carga total de la vivienda lo permita y no se exceda la capacidad del panel. El EVSE consume 48 A continuos y requiere un circuito de 60 A (48 A × 1.25). Con un sistema de administración de energía certificado, la carga del vehículo puede gestionarse para evitar sobrecargar el servicio de 100 A / 100 A, ajustando automáticamente la corriente de carga según la demanda total de la instalación.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/NEC-National-Electrical-Code-d_28.html
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/23_SOLAR_Article_625.pdf
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
