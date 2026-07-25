---
title: "Tipos de capacitores de potencia"
sidebar:
  label: "Tipos de capacitores de potencia"
description: "Ficha tecnica: Tipos de capacitores de potencia"
keywords: ["power capacitor types specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "capacitor-banks"
subcategory: "capacitor-types-power"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Las unidades estándar de capacitores de potencia para corrección del factor de potencia en redes de media tensión se fabrican en configuraciones monofásicas y trifásicas, con potencias reactivas normalizadas que van desde **50 kVAR** hasta **400 kVAR** (en escalones de 50, 100, 150, 200, 300 y 400 kVAR). Estos capacitores deben soportar condiciones de servicio severas: operación continua al **110 % de la tensión pico** nominal y al **120 % de la tensión RMS** nominal, así como sobrecargas del **135 % de la potencia reactiva** (KVAR) y del **180 % de la corriente RMS** nominal. La temperatura ambiente máxima admisible para servicio continuo suele fijarse en **55 °C / 131 °F** (clase D según IEC 60871), con un rango inferior de **−40 °C / −40 °F** en climas fríos. Se distinguen tres variantes constructivas principales: unidad monofásica de doble buje (tanque muerto), unidad monofásica de buje simple (caja como terminal) y unidad trifásica de tres bujes. Todas incorporan dispositivos internos de descarga que reducen la tensión residual a **50 V** o menos en un tiempo especificado.

## Tabla comparativa de características

| Tipo de unidad | Configuración de bujes | Rango típico de tensión nominal | Potencia reactiva típica por unidad | Nivel básico de aislamiento (BIL) típico | Conexión a tierra | Enfriamiento |
|---|---|---|---|---|---|---|
| Monofásica doble buje | 2 bujes aislados | 1 kV – 36 kV | 50 kVAR – 400 kVAR | 95 kV (para 15 kV) / 125 kV (para 25 kV) | Tanque muerto (sin conexión a tierra) | Natural (aire) |
| Monofásica buje simple | 1 buje, caja metálica como segundo terminal | 1 kV – 25 kV | 25 kVAR – 200 kVAR | 75 kV – 125 kV | Un terminal conectado a tierra (tanque vivo) | Natural (aire) |
| Trifásica tres bujes | 3 bujes (sin neutro) | 1 kV – 24 kV | 100 kVAR – 600 kVAR (banco completo) | 95 kV – 150 kV | Sistema aislado o puesto a tierra por el sistema | Natural (aire) o forzado |

## Aplicaciones típicas y características clave

Los capacitores monofásicos de doble buje, diseñados para operar hasta el **110 % de la tensión pico** y el **120 % de la tensión RMS** nominal, se emplean en bancos de corrección del factor de potencia donde se requiere aislamiento completo del tanque (configuración de tanque muerto). Esta variante es la más utilizada en instalaciones de media tensión (p. ej., **2,4 kV a 34,5 kV**) para compensación fija y automática. Los capacitores de buje simple reducen costo al utilizar la caja como terminal de tierra, ideales en sistemas con neutro sólidamente aterrizado y potencias unitarias de hasta **200 kVAR**. Las unidades trifásicas compactas, que pueden manejar bancos de hasta **600 kVAR**, simplifican el montaje en aplicaciones industriales con espacio limitado.

En todas ellas el dispositivo interno de descarga garantiza que la tensión residual caiga por debajo de **50 V** en menos de **5 minutos** (típicamente **3 minutos**). La capacidad de soportar sobrecorrientes transitorias se verifica con ensayos de cortocircuito, debiendo resistir picos de **100 veces la corriente nominal** durante **1 segundo**. Los niveles de aislamiento (BIL) oscilan entre **60 kV** (para sistemas de 5 kV) y **200 kV** (para sistemas de 36 kV), valores que deben seleccionarse según la tensión nominal y la coordinación de aislamiento de la red.

## Consideraciones de selección y dimensionamiento

La selección de un capacitor de potencia exige verificar que la unidad soporte al menos el **135 % de la potencia reactiva nominal** y el **180 % de la corriente RMS nominal** sin degradación prematura. La capacidad reactiva efectivamente entregada al sistema depende de la tensión real de operación según la expresión:

> **Q<sub>real</sub> = (V<sub>operación</sub> / V<sub>nominal</sub>)² × Q<sub>nominal</sub>**

| Variable | Descripción | Unidad |
|---|---|---|
| Q<sub>real</sub> | Potencia reactiva entregada a la tensión de operación | kVAR |
| V<sub>operación</sub> | Tensión eficaz de servicio | kV |
| V<sub>nominal</sub> | Tensión nominal del capacitor | kV |
| Q<sub>nominal</sub> | Potencia reactiva nominal del capacitor | kVAR |

Por ello, en redes con fluctuaciones de tensión se recomienda especificar la tensión nominal del capacitor un **10 % a 15 %** por encima de la tensión nominal del sistema, garantizando que la potencia reactiva requerida se mantiene dentro del margen de tolerancia. Además, la temperatura ambiente influye directamente en la vida útil: por cada **10 °C / 18 °F** de aumento sobre la temperatura máxima de diseño (p. ej., **55 °C / 131 °F**), la expectativa de vida se reduce aproximadamente a la mitad. En instalaciones a altitudes superiores a **1000 m / 3281 ft**, la capacidad de disipación térmica disminuye y debe aplicarse un factor de corrección. Otro parámetro crítico es la rigidez dieléctrica del material aislante: los capacitores modernos emplean dieléctricos de polipropileno con una tensión de perforación del orden de **47 kV/mm / 1200 V/mil**, lo que permite unidades compactas y fiables incluso en condiciones de sobretensión temporal.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la sobretensión máxima admisible para un capacitor de potencia?
Los capacitores de potencia están diseñados para operar continuamente a **110 % de la tensión pico** nominal (1,1 × √2 × V<sub>RMS</sub>) y hasta **120 % de la tensión RMS** nominal, incluyendo armónicos pero sin superar el límite de potencia reactiva.

### ¿Qué valores estándar de KVAR se manejan en la industria?
Las potencias reactivas normalizadas por unidad son **50, 100, 150, 200, 300 y 400 kVAR**, aunque mediante combinaciones en serie/paralelo se alcanzan bancos de varios MVAR.

### ¿Hasta qué temperatura puede trabajar un banco de capacitores sin pérdida de prestaciones?
La máxima temperatura ambiente de diseño más común es **55 °C / 131 °F** (clase D), con una temperatura media diaria de **45 °C / 113 °F**. El rango inferior puede alcanzar **−40 °C / −40 °F** en equipos preparados para intemperie fría.

### ¿Cuánto tarda un capacitor de potencia en descargarse a un nivel seguro tras su desconexión?
Gracias al dispositivo interno de descarga, la tensión residual se reduce a **50 V o menos** en el tiempo especificado por la placa de características, típicamente **3 a 5 minutos**.

### ¿Cuál es el nivel básico de aislamiento (BIL) típico para un sistema de 15 kV?
Para un sistema de **15 kV** clase, el BIL normalizado es **95 kV** (impulso de rayo 1,2/50 µs), pudiendo elevarse a **110 kV** en ambientes muy contaminados o con requisitos especiales de coordinación.

### ¿Qué capacidad de sobrecorriente transitoria deben soportar las unidades?
La norma exige que los capacitores resistan picos de cortocircuito de hasta **100 veces su corriente nominal** durante **1 segundo** (o valores equivalentes de **I²t**) sin daño permanente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/capacitors-energy-power-d_1389.html
- **electrical4u.com**: https://www.electrical4u.com/specifications-or-rating-of-power-capacitor/
