---
title: "Conductores de circuito de motor dimensionamiento"
sidebar:
  label: "Conductores de circuito de motor dimensionamiento"
description: "Ficha tecnica: Conductores de circuito de motor dimensionamiento"
keywords: ["motor circuit conductor sizing NEC 430", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "motor-circuit-conductors"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de los conductores de circuito para motores eléctricos se rige por el Artículo 430 del National Electrical Code (NEC/NFPA 70), el cual exige que la ampacidad del conductor no sea inferior al 125 % de la corriente a plena carga (FLC) obtenida de las tablas NEC 430.248 o 430.250. Para un motor típico de inducción trifásico de 480 V, esto significa que un motor de 10 hp con una FLC tabulada de 14 A requerirá un conductor con capacidad mínima de 17,5 A, lo que normalmente corresponde a un calibre 10 AWG (5,26 mm²). Esta regla garantiza que el conductor soporte tanto la corriente de funcionamiento continuo como la elevada corriente de arranque de los motores sin deterioro del aislamiento.

## Principio de dimensionamiento del conductor
El NEC establece que la ampacidad del conductor de fase para alimentar un solo motor de servicio continuo debe ser al menos el 125 % de la corriente a plena carga tomada de las tablas apropiadas del artículo 430. La fórmula básica es:

> **I_cond ≥ 1.25 × FLC_430**

donde:
| Variable | Descripción |
|---|---|
| I_cond | Ampacidad mínima requerida del conductor (A) |
| FLC_430 | Corriente a plena carga según Tabla 430.248 (monofásicos) o 430.250 (trifásicos) |

La FLC de las tablas suele ser mayor que la corriente nominal de placa (FLA) del motor, ya que contempla motores de eficiencia estándar y asegura compatibilidad con una amplia gama de fabricantes. El uso de la FLA de placa está reservado únicamente para el dimensionamiento de dispositivos de sobrecarga y para motores de servicio no continuo.

## Tabla de dimensionamiento para motores trifásicos de 480 V
La siguiente tabla, adaptada de datos normalizados NEMA y NEC, indica los calibres mínimos de conductor de fase y de puesta a tierra, así como el tamaño de conducción, para motores trifásicos jaula de ardilla de 480 V en servicio continuo. La ampacidad de los conductores se basa en cobre con aislamiento de 75 °C.

| Potencia (hp) / (kW) | Corriente NEMA (A) | Conductor fase (AWG / mm²) | Conductor tierra (AWG / mm²) | Conduit (pulgadas / mm) |
|---|---|---|---|---|
| 1/2 / 0,37 | 1,0 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 3/4 / 0,56 | 1,4 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 1 / 0,75 | 1,8 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 1 1/2 / 1,1 | 2,6 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 2 / 1,5 | 3,4 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 3 / 2,2 | 4,8 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 5 / 3,7 | 7,5 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 7 1/2 / 5,6 | 11 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 10 / 7,5 | 14 | 10 / 5,26 | 10 / 5,26 | 3/4 / 19,05 |
| 15 / 11,2 | 21 | 10 / 5,26 | 10 / 5,26 | 3/4 / 19,05 |
| 20 / 15 | 27 | 8 / 8,37 | 8 / 8,37 | 1 / 25,4 |
| 25 / 18,7 | 34 | 6 / 13,3 | 6 / 13,3 | 1 1/4 / 31,75 |
| 30 / 22,4 | 40 | 6 / 13,3 | 6 / 13,3 | 1 1/4 / 31,75 |
| 40 / 30 | 52 | 4 / 21,2 | 4 / 21,2 | 1 1/4 / 31,75 |
| 50 / 37,3 | 65 | 4 / 21,2 | 4 / 21,2 | 1 1/4 / 31,75 |
| 60 / 44,7 | 77 | 2 / 33,6 | 2 / 33,6 | 1 1/2 / 38,1 |
| 75 / 56 | 96 | 2 / 33,6 | 2 / 33,6 | 1 1/2 / 38,1 |
| 100 / 74,6 | 125 | 2/0 / 67,4 | 2 / 33,6 | 2 / 50,8 |
| 125 / 93,2 | 156 | 4/0 / 107 | 1/0 / 53,5 | 2 1/2 / 63,5 |
| 150 / 112 | 180 | 4/0 / 107 | 1/0 / 53,5 | 2 1/2 / 63,5 |

*Nota: 1 hp = 0,746 kW. El conductor de tierra se dimensiona según la sección 250.122 del NEC para protecciones HMCP típicas indicadas en la fuente original.*

## Consideraciones adicionales
La tabla anterior supone condiciones normales de instalación (temperatura ambiente ≤ 30 °C / 86 °F y no más de tres conductores portadores de corriente en un mismo conduit). Si la temperatura ambiente es mayor o se agrupan más conductores, la ampacidad debe corregirse multiplicando por los factores indicados en las tablas 310.15(B)(1) y 310.15(C)(1) del NEC. Asimismo, cuando la distancia entre el motor y su protección es considerable, se debe verificar la caída de tensión, que no debe exceder el 3 % del valor nominal en régimen permanente para circuitos de fuerza motriz. El conductor de puesta a tierra del equipo se selecciona con base en el valor del dispositivo de protección contra cortocircuitos y fallas a tierra (HMCP o fusible), no en la corriente del motor.

## Preguntas frecuentes (FAQ)
### ¿Cómo se determina la corriente de plena carga para dimensionar el conductor de un motor trifásico de 480 V?
   La corriente de plena carga (FLC) se obtiene de la Tabla 430.250 del NEC, que para un motor de 10 hp indica 14 A; este valor, y no la corriente de placa, es el punto de partida para el dimensionamiento.

### ¿Cuál es el calibre mínimo del conductor de fase para un motor de 10 hp según NEC?
   Para un motor trifásico de 10 hp a 480 V con una FLC de 14 A, el 125 % da 17,5 A; el conductor mínimo es 10 AWG (5,26 mm²) con aislamiento de 75 °C, ya que soporta 35 A según tabla 310.16.

### ¿Qué tamaño de conductor de puesta a tierra requiere un motor de 25 hp?
   El NEC sección 250.122 exige un conductor de cobre de 6 AWG (13,3 mm²) cuando el dispositivo de protección contra sobrecorriente del circuito derivado es de 70 A, valor típico para este motor según datos NEMA.

### ¿Por qué el calibre del conductor basado en la FLC es diferente al que indicaría la corriente de placa?
   La FLC tabulada (ej. 14 A para 10 hp) es un valor normalizado que cubre motores de eficiencia estándar; la corriente de placa suele ser menor (puede estar entre 12 y 13 A), pero el NEC exige usar la FLC para garantizar un margen de seguridad en el conductor.

### ¿Cómo afecta la longitud del cable al dimensionamiento del conductor del circuito del motor?
   Para una distancia de 100 m entre el motor de 50 hp (FLC 65 A) y el centro de control, se debe considerar la caída de tensión: manteniendo la caída por debajo del 3 % (14,4 V en 480 V), el calibre mínimo podría subir de 4 AWG (21,2 mm²) a 2 AWG (33,6 mm²) para limitar la pérdida.

### ¿Qué protección contra sobrecorriente se requiere para el conductor de un motor de 50 hp?
   Según NEC 430.52, el dispositivo de protección contra cortocircuitos y fallas a tierra (HMCP) para un motor de 50 hp con FLC de 65 A puede ser de 100 A, valor que protege eficazmente el conductor de 4 AWG (21,2 mm²) siempre que el dispositivo de sobrecarga del motor esté correctamente ajustado.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/480-volt-motor-wiring-data-d_1447.html
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20UNEC1_430.6.pdf
- **electrical4u.com**: https://www.electrical4u.com/small-large-motor-protection/
