---
title: "Comparativa RTD vs termopar"
sidebar:
  label: "Comparativa RTD vs termopar"
description: "Ficha tecnica: Comparativa RTD vs termopar"
keywords: ["RTD vs thermocouple comparison accuracy", "sistemas-control"]
category: "sistemas-control"
topic: "thermocouples"
subcategory: "rtd-vs-thermocouple"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La selección entre un RTD y un termopar define la exactitud, estabilidad y costo del sistema de medición de temperatura. Mientras que un RTD de platino alcanza una precisión de ±0,1 °C / ±0,18 °F en procesos de laboratorio, un termopar tipo K cubre rangos extremos de hasta 1250 °C / 2282 °F con tiempos de respuesta inferiores a 1 segundo. Esta comparativa detalla cada atributo técnico para facilitar la decisión de ingeniería basada en datos cuantitativos.

El RTD aprovecha la variación predecible de la resistencia eléctrica de un metal puro con la temperatura. Un termopar genera una fuerza electromotriz (tensión) en la unión de dos metales distintos cuando existe un gradiente térmico.

> **Rₜ = R₀ (1 + α·ΔT)**
> donde α es el coeficiente de temperatura de resistencia, típicamente 0,00385 Ω/Ω/°C para platino industrial.

> **V = S·ΔT**
> donde S es el coeficiente Seebeck, aproximadamente 40 µV/°C para termopar tipo K.

| Variable | RTD (Pt100) | Termopar (Tipo K) |
|---|---|---|
| Fenómeno físico | Resistencia eléctrica dependiente de temperatura | Efecto termoeléctrico (Seebeck) |
| Material típico | Platino (α = 0,00385 Ω/Ω/°C) | Chromel® (Ni-Cr) / Alumel® (Ni-Al) |

## Rango de temperatura
Un RTD de platino estándar opera entre -200 °C / -328 °F y 850 °C / 1562 °F, mientras que un termopar tipo K alcanza desde -200 °C / -328 °F hasta 1250 °C / 2282 °F, y los tipos B o R superan 1700 °C / 3092 °F.

| Sensor | Límite inferior | Límite superior |
|---|---|---|
| RTD (Pt100) | -200 °C / -328 °F | 850 °C / 1562 °F |
| Termopar tipo K | -200 °C / -328 °F | 1250 °C / 2282 °F |
| Termopar tipo B | 0 °C / 32 °F | 1700 °C / 3092 °F |

## Precisión y exactitud
La precisión de un RTD industrial clase A es de ±0,15 °C / ±0,27 °F a 0 °C, mientras que un termopar estándar ofrece ±1,5 °C / ±2,7 °F o peor, limitado por la compensación de unión fría.

| Clase / Tipo | Tolerancia típica a 0 °C | Tolerancia típica a 600 °C |
|---|---|---|
| RTD Clase A | ±0,15 °C / ±0,27 °F | ±0,95 °C / ±1,71 °F |
| RTD Clase B | ±0,3 °C / ±0,54 °F | ±1,85 °C / ±3,33 °F |
| Termopar tipo K | ±1,5 °C / ±2,7 °F | ±4,6 °C / ±8,3 °F |
| Termopar tipo T | ±0,5 °C / ±0,9 °F | ±2,5 °C / ±4,5 °F (a 300 °C) |

## Estabilidad a largo plazo
Un RTD de platino de calidad presenta una deriva inferior a 0,05 °C / 0,09 °F por año en condiciones controladas, mientras que un termopar puede desviarse varios grados centígrados en el mismo período debido a oxidación y contaminación de la unión.

| Atributo | RTD | Termopar |
|---|---|---|
| Deriva anual típica | < 0,05 °C / 0,09 °F | 0,5 – 2 °C / 0,9 – 3,6 °F |
| Causa principal | Auto-recocido, contaminación química | Oxidación, difusión en la unión caliente |

## Tiempo de respuesta
Un termopar desnudo alcanza el 63 % del cambio de temperatura en menos de 1 s, mientras que un RTD encapsulado con vaina de 3 mm / 0,12 in requiere de 2 a 5 segundos en agua en movimiento.

| Configuración | RTD (vaina 3 mm) | Termopar (unión expuesta) |
|---|---|---|
| Constante de tiempo τ en agua | 2 – 5 s | < 0,5 s |
| Constante de tiempo τ en aire estático | 20 – 50 s | 5 – 10 s |

## Sensibilidad
La sensibilidad de un RTD Pt100 es aproximadamente 0,385 Ω/°C, equivalente a una señal de 38,5 mV/°C con corriente de excitación de 1 mA. Un termopar tipo K genera apenas 40 µV/°C, tres órdenes de magnitud menor.

| Sensor | Salida a ΔT = 100 °C |
|---|---|
| RTD Pt100 (1 mA) | 38,5 mV |
| Termopar tipo K | 4,0 mV |
| Termistor NTC (10 kΩ a 25 °C) | ~250 mV (no lineal) |

## Linealidad
La curva resistencia-temperatura del RTD de platino es casi lineal, con una desviación máxima de solo 0,3 % del rango, mientras que un termopar tipo K requiere polinomios de alto grado para linealización debido a su marcada curvatura.

| Sensor | Función de transferencia | Error máximo de linealidad (0 – 100 °C) |
|---|---|---|
| RTD Pt100 | R(T)=R₀(1+AT+BT²) | < 0,3 °C / 0,54 °F |
| Termopar tipo K | Polinomio de grado 9 | ~1 °C / 1,8 °F sin linealización |

## Efecto de autocalentamiento
El efecto de autocalentamiento en un RTD es muy bajo, típicamente inferior a 0,01 °C / 0,018 °F cuando se excita con 1 mA, mientras que un termopar es inmune por ser un sensor activo.

| Sensor | Disipación típica | Incremento térmico (aire estático, 1 mA) |
|---|---|---|
| RTD Pt100 | 100 µW | < 0,01 °C / 0,018 °F |
| Termopar | 0 W | 0 °C |

## Efecto de los conductores
La resistencia añadida por los conductores afecta la lectura de un RTD (error de 2,6 °C / 4,7 °F por ohmio en configuración 2 hilos), mientras que en un termopar no altera la tensión pero exige compensación exacta de la unión de referencia o usar cable de extensión adecuado.

| Factor | RTD 2 hilos | Termopar |
|---|---|---|
| Error por Ω de cable | ~2,6 °C / 4,7 °F | Sin error directo |
| Requisito de compensación | Cable a 3 o 4 hilos | Compensación de unión fría (CJC) |

## Coste
Un termopar básico cuesta entre 1 y 5 USD (0,92 – 4,60 €) mientras que un RTD industrial de platino con vaina puede superar los 50 USD (46 €), aunque la diferencia en electrónica de acondicionamiento puede invertir la balanza si se requiere alta precisión.

| Elemento | RTD industrial clase A | Termopar tipo K estándar |
|---|---|---|
| Sensor (unidad) | 20 – 100 USD / 18 – 92 € | 1 – 10 USD / 0,92 – 9,2 € |
| Electrónica asociada | Bajo coste (ADC resistivo) | Requiere CJC, ganancia alta |

## Aplicaciones típicas
Los RTD dominan en laboratorios, industria farmacéutica y control HVAC por su precisión y repetibilidad, mientras que los termopares son insustituibles en hornos de fundición, turbinas de gas y procesos petroquímicos donde el rango de temperatura supera los 600 °C / 1112 °F.

| Sector / Proceso | Sensor recomendado | Motivo |
|---|---|---|
| Laboratorio de calibración | RTD Pt25 | Precisión primaria |
| Industria alimentaria | RTD sanitario | Limpieza CIP, repetibilidad |
| Hornos de tratamiento térmico | Termopar tipo K o N | Rango hasta 1300 °C / 2372 °F |
| Refinerías, antorchas | Termopar tipo B | Medición > 1500 °C / 2732 °F |

## Comparativa rápida
| Atributo | RTD | Termopar |
|---|---|---|
| Rango de temperatura | -200 a 850 °C / -328 a 1562 °F | -200 a 1750 °C / -328 a 3182 °F |
| Precisión | Alta (±0,15 °C / ±0,27 °F Clase A) | Media (±1,5 °C / ±2,7 °F típico) |
| Estabilidad a largo plazo | Buena (< 0,05 °C/año) | Pobre a regular (0,5–2 °C/año) |
| Tiempo de respuesta | Medio (2–5 s en agua) | Rápido (< 1 s) |
| Sensibilidad | Media (0,385 Ω/°C) | Baja (40 µV/°C) |
| Linealidad | Buena (error < 0,3 °C) | Regular (error ~1 °C sin linealizar) |
| Autocalentamiento | Muy bajo (< 0,01 °C con 1 mA) | Ninguno |
| Efecto de conductores | Significativo (requiere 3 o 4 hilos) | No directo, requiere CJC |
| Coste | Alto | Bajo |
| Aplicación ideal | Precisión < 600 °C / 1112 °F | Alta temperatura, ambientes extremos |

## Preguntas frecuentes (FAQ)
### ¿Cuál es más preciso para control de temperatura, RTD o termopar?
El RTD es más preciso, con tolerancias de ±0,15 °C / ±0,27 °F a 0 °C frente a ±1,5 °C / ±2,7 °F de un termopar tipo K estándar.

### ¿Cuándo conviene elegir un termopar en lugar de un RTD?
Cuando la temperatura supera los 600 °C / 1112 °F o se necesita respuesta rápida (< 1 s), el termopar es la única opción viable sin sobrecoste.

### ¿Qué vida útil tiene un sensor RTD frente a un termopar?
Un RTD de calidad mantiene su calibración durante décadas con deriva inferior a 0,05 °C/año, mientras que un termopar sufre envejecimiento acelerado y puede desviarse 2 °C en el primer año de uso continuo a alta temperatura.

### ¿Afecta la longitud del cable a la medición con RTD?
Sí, la resistencia del cable añade error de 2,6 °C por ohmio en un RTD de 2 hilos; se soluciona con configuración de 3 o 4 hilos. Los termopares no sufren este error pero requieren compensación electrónica de la unión fría.

### ¿Qué mantenimiento requiere cada tipo de sensor?
El RTD prácticamente no requiere mantenimiento salvo verificación periódica de calibración. El termopar debe revisarse cada 6–12 meses por corrosión, oxidación y derivas de la unión de referencia.

### ¿Puedo sustituir un termopar por un RTD directamente en mi proceso actual?
Si la temperatura máxima del proceso es inferior a 600 °C / 1112 °F y los tiempos de respuesta no son críticos por debajo de 2 segundos, la mejora en precisión y estabilidad justifica el cambio, aunque requiere verificar compatibilidad de entradas del controlador (resistencia vs. tensión).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/temperature-sensors-d_448.html
- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=12yINJakfZA
