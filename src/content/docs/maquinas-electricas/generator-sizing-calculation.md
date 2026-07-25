---
title: "Dimensionamiento de generadores eléctricos"
sidebar:
  label: "Dimensionamiento de generadores eléctricos"
description: "Ficha tecnica: Dimensionamiento de generadores eléctricos"
keywords: ["generator sizing calculation kW kVA", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "generators"
subcategory: "generator-sizing"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de un generador eléctrico consiste en determinar la potencia nominal — expresada en kW (potencia activa) y kVA (potencia aparente) — necesaria para alimentar de forma segura una instalación o conjunto de cargas. Un generador correctamente dimensionado evita tanto el sobredimensionamiento, que conduce a funcionamiento prolongado en vacío o baja carga, como el subdimensionamiento, que provoca caídas de tensión, sobrecalentamiento y disparos intempestivos.

La potencia del generador se elige evaluando la carga total conectada, el factor de potencia esperado, las corrientes de arranque de motores, el contenido armónico y las condiciones ambientales. Los grupos electrógenos diésel comerciales abarcan desde 8 kVA monofásicos para uso residencial hasta más de 2500 kVA trifásicos en aplicaciones industriales.

## Fórmulas fundamentales

La relación entre potencia activa, aparente y reactiva define el punto de partida del dimensionamiento:

> **S = P / FP**  
> **P = S × FP**  
> **Q = √(S² – P²)**

donde:

| Símbolo | Magnitud | Unidad |
| --- | --- | --- |
| S | Potencia aparente | kVA |
| P | Potencia activa | kW |
| Q | Potencia reactiva | kvar |
| FP | Factor de potencia (0–1) | – |

Para sistemas trifásicos, la corriente nominal del generador se obtiene con:

> **I = P / (√3 × V × FP)**  
> o bien  
> **I = S / (√3 × V)**

| Símbolo | Magnitud | Unidad típica |
| --- | --- | --- |
| I | Corriente de línea | A |
| V | Tensión de línea | V (ej. 400 V / 480 V) |

En aplicaciones con motores, la potencia de arranque se estima multiplicando la potencia nominal del motor por un factor que depende del tipo de arranque (directo, estrella-triángulo, variador). Para arranque directo se usa típicamente un factor de 3 a 7 veces la corriente nominal.

## Factores de dimensionamiento

### Factor de potencia (FP)

El FP de la carga define cuánta potencia aparente debe suministrar el generador. Un FP bajo incrementa el tamaño requerido en kVA para una misma potencia activa. Los generadores se especifican normalmente con FP 0,8 inductivo.

### Cargas no lineales y armónicos

Equipos electrónicos, variadores de frecuencia y fuentes de alimentación conmutadas generan corrientes armónicas que elevan la temperatura de los devanados y pueden distorsionar la tensión. Se recomienda sobredimensionar el alternador entre un 10 % y un 30 % si la distorsión armónica total (THD) supera el 15 %.

### Corrientes de arranque de motores

El generador debe soportar la punta de corriente durante el arranque sin que la tensión caiga por debajo del límite admisible (usualmente 70–80 % de la tensión nominal). La magnitud de la punta depende del tipo de motor y del método de arranque.

### Altitud y temperatura ambiente

La potencia del motor diésel y del alternador se reduce con la altitud y la temperatura. Factores de reducción típicos:

| Condición | Factor de reducción típico |
| --- | --- |
| Altitud > 1000 m / 3281 ft | –1 % cada 100 m / 328 ft adicionales |
| Temperatura > 40 °C / 104 °F | –1 % cada 5 °C / 9 °F adicionales |

## Procedimiento de cálculo

1.  **Inventario de cargas:** listar todos los equipos, su potencia activa (kW), factor de potencia y tipo de carga (lineal, no lineal, motor).
2.  **Cálculo de la potencia máxima demandada:** sumar las potencias activas, aplicando un factor de simultaneidad (típicamente 0,7–0,9) y un factor de utilización por equipo.
3.  **Determinación de la potencia aparente total:** dividir la potencia activa total entre el factor de potencia global estimado.
4.  **Verificación de la punta de arranque:** identificar el motor de mayor potencia y comprobar que el generador puede entregar la corriente de arranque con una caída de tensión aceptable.
5.  **Aplicación de factores ambientales:** corregir la potencia requerida según altitud y temperatura.
6.  **Margen de seguridad:** agregar un 10–20 % de reserva para expansiones futuras y garantizar que el generador no trabaje permanentemente al 100 % de carga.

## Ejemplo práctico de dimensionamiento

**Datos de la instalación:**  
Tensión: 400 V / 480 V trifásica  
Cargas:

| Equipo | Potencia activa | FP | Tipo |
| --- | --- | --- | --- |
| Motor 1 | 15 kW / 20 hp | 0,85 | Motor jaula de ardilla |
| Motor 2 | 7,5 kW / 10 hp | 0,82 | Motor jaula de ardilla |
| Iluminación | 5 kW / 5 kW | 0,95 | Carga lineal |
| Equipos electrónicos | 8 kW / 8 kW | 0,70 | Carga no lineal (THD 20 %) |

**Paso 1:** Potencia activa total = 15 + 7,5 + 5 + 8 = 35,5 kW / 47,6 hp.  
Aplicando factor de simultaneidad 0,85: P<sub>sim</sub> = 35,5 × 0,85 = 30,2 kW / 40,5 hp.

**Paso 2:** Factor de potencia global estimado = (15×0,85 + 7,5×0,82 + 5×0,95 + 8×0,70) / 35,5 ≈ 0,81.  
Potencia aparente requerida = 30,2 / 0,81 = 37,3 kVA.

**Paso 3:** Verificación de arranque. Motor mayor: 15 kW. Corriente nominal a 400 V: I<sub>n</sub> = 15 000 / (√3 × 400 × 0,85) ≈ 25,5 A / 25,5 A. Con arranque directo (6 × I<sub>n</sub>) la punta es 153 A / 153 A. Un generador de 40 kVA tiene corriente nominal ≈ 57,7 A / 57,7 A a 400 V y puede entregar puntas del 200–300 % durante 10–15 s, por lo que 153 A / 153 A es admisible.

**Paso 4:** Corrección ambiental. Altitud 1500 m / 4921 ft → reducción 5 %. Temperatura 45 °C / 113 °F → reducción 1 %. Factor total 0,94. Potencia corregida = 37,3 / 0,94 ≈ 39,7 kVA.

**Resultado:** se selecciona un generador trifásico de 40 kVA / 32 kW (FP 0,8), apto para 400 V / 480 V, con alternador sobredimensionado un 15 % por armónicos, resultando en un grupo electrógeno de aproximadamente 45 kVA.

## Normas de referencia

| Norma | Título resumido |
| --- | --- |
| ISO 8528-1 | Grupos electrógenos de corriente alterna accionados por motores de combustión interna |
| IEC 60034-1 | Máquinas eléctricas rotativas – Parte 1: Características asignadas y características de funcionamiento |
| NEMA MG 1 | Motores y generadores |
| NFPA 110 | Norma para sistemas de energía de emergencia y reserva |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre kW y kVA en un generador eléctrico?

Los kW representan la potencia activa que el generador puede entregar de forma continua a las cargas; los kVA, la potencia aparente total que incluye la componente reactiva. Un generador típico se especifica con un factor de potencia de 0,8, lo que significa que un grupo de 100 kVA entrega 80 kW.

### ¿Cómo influye el factor de potencia en el tamaño del generador?

Si el factor de potencia de la carga es bajo, el generador debe suministrar más kVA para la misma potencia activa. Por ejemplo, una carga de 50 kW con FP 0,7 requiere 71,4 kVA, mientras que con FP 0,9 solo necesita 55,6 kVA, lo que puede significar seleccionar un modelo de mayor tamaño.

### ¿Qué margen de seguridad se recomienda al dimensionar un generador?

Se recomienda un margen del 10 % al 20 % sobre la potencia máxima calculada. Para una instalación que demanda 80 kW / 107 hp, un margen del 15 % supone seleccionar un generador de al menos 92 kW / 123 hp, y en kVA, considerando FP 0,8, 115 kVA.

### ¿Cómo afectan los armónicos al alternador del generador?

Los armónicos de corriente provocan calentamiento adicional en los devanados y distorsión de la tensión. Con un THD superior al 15 %, se sobredimensiona el alternador entre un 10 % y un 30 %. En una instalación con 60 kVA de carga no lineal y THD del 25 %, se puede requerir un alternador de al menos 72 kVA.

### ¿Qué reducción de potencia se aplica por altitud y temperatura?

Por cada 100 m / 328 ft sobre 1000 m / 3281 ft de altitud se pierde aproximadamente un 1 % de potencia, y por cada 5 °C / 9 °F por encima de 40 °C / 104 °F se pierde otro 1 %. Un generador de 150 kW / 201 hp a 2000 m / 6562 ft y 50 °C / 122 °F puede ver su potencia útil reducida a unos 126 kW / 169 hp.

### ¿Qué norma internacional cubre el dimensionamiento de grupos electrógenos?

La norma ISO 8528-1 establece las clasificaciones de servicio (emergencia, principal, continua) y los requisitos de rendimiento. Para aplicaciones de emergencia en edificios, la NFPA 110 exige que el generador pueda alimentar la carga completa en un máximo de 10 segundos tras la falla de la red.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-calculator/
