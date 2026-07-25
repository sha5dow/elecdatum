---
title: "Dimensionamiento de circuitos según NOM-001"
sidebar:
  label: "Dimensionamiento de circuitos según NOM-001"
description: "Ficha tecnica: Dimensionamiento de circuitos según NOM-001"
keywords: ["NOM-001 circuit sizing conductor breaker", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nom-001"
subcategory: "nom001-circuit-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de circuitos según la NOM-001 exige que todo conductor y dispositivo de protección contra sobrecorriente se dimensione para soportar al menos el 125 % de la carga continua más el 100 % de la carga no continua. Este criterio se aplica a circuitos derivados, alimentadores y acometidas, con base en las tablas de ampacidad y las condiciones de instalación previstas en la norma. El objetivo es que ningún componente opere por encima de su temperatura nominal en régimen permanente, y que la protección interrumpa corrientes de falla antes de que se dañen los conductores o los equipos conectados.

## Propósito
Garantizar la seguridad de las personas y la integridad de la instalación eléctrica, evitando calentamientos excesivos que puedan degradar el aislamiento o provocar incendios. El dimensionamiento conforme a NOM-001 introduce factores de seguridad específicos, como el 125 % para cargas continuas, y considera la temperatura real de operación en terminales y canalizaciones, de modo que la protección contra sobrecorriente actúe de manera selectiva y efectiva ante cortocircuitos y sobrecargas.

## Procedimiento general
El dimensionamiento de un circuito se realiza en tres pasos esenciales:

| Paso | Acción |
| --- | --- |
| 1 | Determinar la corriente de diseño sumando el 125 % de la carga continua más el 100 % de la carga no continua. |
| 2 | Seleccionar el conductor con una ampacidad (capacidad de conducción de corriente) igual o mayor que la corriente de diseño, respetando la temperatura nominal de los terminales (60 °C / 140 °F para equipos ≤ 100 A; 75 °C / 167 °F para equipos > 100 A, salvo marcado diferente). |
| 3 | Elegir el dispositivo de protección contra sobrecorriente (interruptor termomagnético o fusible) cuyo valor nominal no sea inferior a la corriente de diseño y que, salvo excepciones, proteja al conductor de acuerdo con su ampacidad. |

Cuando la ampacidad del conductor no coincide con un valor estándar de protección, se permite utilizar el siguiente tamaño comercial inmediato superior hasta 800 A, siempre que el conductor esté dimensionado al menos para el 100 % de la carga.

## Selección del conductor
Los conductores se eligen de la tabla de ampacidad correspondiente de la NOM-001, similar a la tabla 310-15(b)(16) del NEC. La siguiente tabla presenta los valores típicos para conductores de cobre con aislamiento THHN en condiciones normales (temperatura ambiente 30 °C / 86 °F, hasta tres conductores en una canalización):

| Calibre AWG | Área de la sección transversal (mm² / in²) | Ampacidad a 60 °C / 140 °F (A) | Ampacidad a 75 °C / 167 °F (A) | Ampacidad a 90 °C / 194 °F (A) |
| --- | --- | --- | --- | --- |
| 14 | 2.08 / 0.00323 | 15 | 20 | 25 |
| 12 | 3.31 / 0.00513 | 20 | 25 | 30 |
| 10 | 5.26 / 0.00815 | 30 | 35 | 40 |
| 8 | 8.37 / 0.0130 | 40 | 50 | 55 |
| 6 | 13.3 / 0.0206 | 55 | 65 | 75 |
| 4 | 21.2 / 0.0328 | 70 | 85 | 95 |
| 2 | 33.6 / 0.0521 | 95 | 115 | 130 |
| 1/0 | 53.5 / 0.0829 | 125 | 150 | 170 |
| 4/0 | 107 / 0.166 | 195 | 230 | 260 |

En la práctica, casi todos los equipos de baja tensión utilizan terminales con capacidad para 75 °C / 167 °F, por lo que la columna de 75 °C / 167 °F es la referencia más habitual para la selección final.

## Selección del dispositivo de protección contra sobrecorriente
El interruptor termomagnético o el fusible se dimensiona para una corriente nominal no menor que el 125 % de la carga continua más el 100 % de la carga no continua, y no mayor que la ampacidad del conductor corregida por factores de agrupamiento y temperatura. Para cargas de motores y equipos que indiquen un MOCP (Maximum Over‑Current Protection), se utiliza la fórmula:

> **MOCP = (2.25 × FLA del mayor motor) + (ΣFLA de los demás motores) + (Cargas resistivas)**

Donde FLA es la corriente a plena carga (Full Load Amperes). El valor calculado se redondea hacia abajo a la capacidad estándar más cercana (múltiplo de 5 A), salvo que resulte menor que la MCA (Minimum Circuit Ampacity), en cuyo caso se toma la MCA y se redondea hacia arriba. Nunca se permite un dispositivo de protección menor a 15 A.

## Factores de corrección
Cuando la temperatura ambiente difiere de 30 °C / 86 °F o se instalan más de tres conductores activos en una misma canalización, la ampacidad nominal del conductor debe multiplicarse por los factores de la tabla siguiente:

| Temperatura ambiente (°C / °F) | Factor para conductor con aislamiento de 60 °C / 140 °F | Factor para conductor con aislamiento de 75 °C / 167 °F | Factor para conductor con aislamiento de 90 °C / 194 °F |
| --- | --- | --- | --- |
| 30 / 86 | 1.00 | 1.00 | 1.00 |
| 35 / 95 | 0.91 | 0.94 | 0.96 |
| 40 / 104 | 0.82 | 0.88 | 0.91 |
| 45 / 113 | 0.71 | 0.82 | 0.87 |
| 50 / 122 | 0.58 | 0.75 | 0.82 |

Además, por cada conductor adicional por encima de tres dentro de la misma canalización o cable multiconductor, se aplica un factor de agrupamiento que reduce la ampacidad; por ejemplo, para cuatro a seis conductores activos el factor es 0.80, y para siete a nueve es 0.70. Estos ajustes garantizan que la temperatura del conductor no exceda el límite del aislamiento incluso en condiciones desfavorables.

## Ejemplo de dimensionamiento
**Circuito derivado para carga continua de 23 A (alumbrado):**

1. Corriente de diseño = 23 A × 1.25 = 28.75 A.
2. Conductor: con terminales de 75 °C / 167 °F, se necesita un conductor con ampacidad ≥ 28.75 A en la columna de 75 °C / 167 °F. Según la tabla, un calibre 10 AWG / 5.26 mm² THHN ofrece 35 A, por lo que es adecuado.
3. Protección: el dispositivo debe ser ≥ 28.75 A; el valor estándar inmediato superior es 30 A. El conductor de 10 AWG / 5.26 mm² con 35 A queda correctamente protegido por un interruptor de 30 A.

**Alimentador para tablero con carga continua de 184 A:**

1. Corriente de diseño = 184 A × 1.25 = 230 A.
2. Conductor: con terminales de 75 °C / 167 °F se requiere una ampacidad ≥ 230 A. El calibre 4/0 AWG / 107 mm² THHN tiene 230 A a 75 °C / 167 °F; cumple exactamente.
3. Protección: el valor estándar superior a 230 A es 250 A. Como el conductor posee una ampacidad de 230 A, se aplica la excepción del siguiente tamaño comercial (hasta 800 A) y se permite protegerlo con un interruptor de 250 A.

## Preguntas frecuentes (FAQ)
### ¿Qué porcentaje de la carga continua debe usarse para dimensionar el conductor?
El conductor debe dimensionarse para al menos el 125 % de la carga continua, lo que equivale a multiplicar la corriente por 1.25.

### ¿Cuál es el tamaño mínimo de conductor para una carga continua de 23 A con terminales de 75 °C?
Se requiere un conductor de cobre calibre 10 AWG / 5.26 mm² con aislamiento THHN, ya que soporta 35 A a 75 °C, superando los 28.75 A necesarios.

### ¿Hasta qué valor se puede redondear la protección cuando la ampacidad del conductor no coincide con un tamaño estándar?
Se permite utilizar el siguiente tamaño comercial inmediato superior, siempre que el dispositivo no exceda los 800 A y el conductor esté dimensionado para la totalidad de la carga.

### ¿Cómo afecta una temperatura ambiente de 40 °C a la ampacidad de un conductor THHN de 90 °C?
A 40 °C / 104 °F, el factor de corrección es 0.91, por lo que un conductor con ampacidad nominal de 40 A solo puede transportar 36.4 A en esas condiciones.

### ¿Qué tamaño de conductor y protección requiere un alimentador para 184 A de carga continua?
Se necesita un conductor 4/0 AWG / 107 mm² THHN (230 A a 75 °C) y un interruptor de 250 A, aplicando la regla del siguiente tamaño estándar.

### ¿Cuál es la fórmula práctica para calcular la protección máxima (MOCP) de un equipo con motores?
La fórmula es MOCP = 2.25 × FLA del motor más grande, más la suma de las corrientes a plena carga del resto de motores, más las cargas resistivas simultáneas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **mikeholt.com**: https://www.mikeholt.com/nec-conductor-sizing-and-protection.php
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
