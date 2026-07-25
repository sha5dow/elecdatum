---
title: "Relación frecuencia y periodo"
sidebar:
  label: "Relación frecuencia y periodo"
description: "Ficha tecnica: Relación frecuencia y periodo"
keywords: ["frequency period relationship formula Hz", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "ac-fundamentals"
subcategory: "frequency-period"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La frecuencia y el periodo son dos magnitudes inversamente proporcionales que describen la rapidez con que ocurre un fenómeno cíclico; por ejemplo, una frecuencia de 60 Hz (60 ciclos por segundo) corresponde a un periodo de 16,67 ms (0,01667 s). La frecuencia se mide en hercios (Hz), unidad equivalente a s⁻¹, mientras que el periodo se expresa en segundos (s) o submúltiplos como milisegundos (ms) o microsegundos (µs). En circuitos de corriente alterna, generadores, osciladores y sistemas de comunicaciones, la relación entre ambas variables es fundamental para analizar formas de onda, calcular reactancias y sincronizar señales.

## Fórmula fundamental
La relación matemática que vincula frecuencia (f) y periodo (T) se expresa mediante una única ecuación, cuya aplicación directa permite calcular una magnitud a partir de la otra sin necesidad de instrumentos adicionales.

> **f = 1 / T**

donde:

| Variable | Significado | Unidad (métrica / imperial) |
|----------|-------------|------------------------------|
| f | frecuencia | Hz (hercios) — 1 ciclo por segundo / 1 ciclo por segundo |
| T | periodo | s (segundo) / s (segundo) |

Despejando el periodo se obtiene la expresión equivalente:

> **T = 1 / f**

Ambas formas indican que un aumento de la frecuencia reduce proporcionalmente el periodo, y viceversa.

## Relación matemática
Una señal de 1 kHz (1000 Hz) tiene un periodo de 1 ms (0,001 s), lo que evidencia la naturaleza recíproca exacta entre ambas variables. La relación es válida para cualquier fenómeno periódico, ya sea eléctrico, mecánico o electromagnético. Al duplicar la frecuencia se reduce el periodo a la mitad; por ejemplo, pasar de 50 Hz a 100 Hz implica que el periodo disminuye de 20 ms a 10 ms. La conversión entre unidades se basa en la escala del Sistema Internacional: 1 kHz = 1000 Hz, 1 MHz = 10⁶ Hz, 1 GHz = 10⁹ Hz, y los periodos correspondientes se expresan en ms, µs o ns.

## Ejemplo práctico
Un tono audible de 500 Hz, común en sistemas de altavoces y alarmas, completa un ciclo en exactamente 0,002 s (2 ms). Cálculo paso a paso con la fórmula T = 1 / f:

| Paso | Operación | Resultado (métrico / imperial) |
|------|-----------|--------------------------------|
| 1 | Identificar f = 500 Hz | f = 500 Hz / 500 Hz |
| 2 | Aplicar T = 1 / (500 Hz) | T = 0,002 s / 0,002 s |
| 3 | Convertir a milisegundos | T = 2 ms / 2 ms |

En electrotécnia, un alternador que genera 5 ciclos completos en 100 ms presenta un periodo por ciclo de T = 20 ms, lo que equivale a una frecuencia de f = 1 / 0,020 s = 50 Hz, valor típico de las redes eléctricas europeas.

## Tabla de conversiones
La siguiente tabla facilita la equivalencia inmediata entre los valores más habituales de frecuencia y su periodo correspondiente.

| Frecuencia (métrica / imperial) | Periodo (métrica / imperial) | Notación alternativa |
|---------------------------------|-----------------------------|-----------------------|
| 1 mHz (0,001 Hz) / 1 mHz | 1 ks (1000 s) / 1 ks | 16 min 40 s |
| 1 Hz / 1 Hz | 1 s / 1 s | 1 s |
| 1 kHz (1000 Hz) / 1 kHz | 1 ms (0,001 s) / 1 ms | 1 ms |
| 1 MHz (1 000 000 Hz) / 1 MHz | 1 µs (0,000001 s) / 1 µs | 1 µs |
| 1 GHz (1 000 000 000 Hz) / 1 GHz | 1 ns (0,000000001 s) / 1 ns | 1 ns |
| 1 THz (1 000 000 000 000 Hz) / 1 THz | 1 ps (0,000000000001 s) / 1 ps | 1 ps |

La tabla muestra que la frecuencia de 60 Hz de las redes eléctricas americanas se traduce en un periodo de 16,67 ms, mientras que los 50 Hz europeos corresponden a 20 ms.

## Aplicaciones en circuitos
En un osciloscopio analizando una señal senoidal de 100 MHz (100 millones de ciclos por segundo), el periodo observado en pantalla es de 10 ns, valor clave para verificar la integridad de la forma de onda. La medición indirecta de frecuencia a través del periodo es una técnica estándar en laboratorio: se mide la duración de un ciclo sobre la escala horizontal y se calcula la recíproca. En sistemas de potencia, los armónicos de 2º orden (100 Hz sobre una fundamental de 50 Hz) o 3º orden (150 Hz) distorsionan la señal y generan periodos de 10 ms y 6,67 ms respectivamente, lo que afecta al funcionamiento de motores y transformadores. La relación frecuencia-periodo también permite diseñar filtros, circuitos resonantes y osciladores: fijar un periodo de 0,1 µs equivale a seleccionar una frecuencia de 10 MHz, frecuencia típica en transmisores de radioaficionados.

## Preguntas frecuentes (FAQ)
### ¿Qué es la frecuencia?
La frecuencia, medida en hercios (Hz), representa la cantidad de ciclos completados en un segundo; por ejemplo, 60 Hz indica 60 ciclos cada segundo.

### ¿Qué es el periodo?
El periodo es el tiempo necesario para que un fenómeno repetitivo complete un ciclo exacto; una señal de 2 Hz posee un periodo de 0,5 s.

### ¿Cuál es la fórmula que relaciona frecuencia y periodo?
La fórmula es f = 1 / T, donde f es la frecuencia en Hz y T es el periodo en segundos, aplicable a cualquier señal periódica.

### ¿Cómo se convierte frecuencia a periodo?
Se calcula el valor recíproco T = 1 / f; por ejemplo, 400 Hz dan un periodo de 0,0025 s (2,5 ms).

### ¿Cómo afecta el periodo a la frecuencia en un circuito de CA?
A menor periodo, mayor frecuencia; un generador de 4 polos girando a 1500 rpm produce una frecuencia de 50 Hz, según la relación f = (PN) / 120.

### ¿Qué unidad se usa para la frecuencia?
La unidad del Sistema Internacional es el hercio (Hz), equivalente a s⁻¹, aunque en aplicaciones rotativas también se emplea rpm (revoluciones por minuto); 60 rpm equivale a 1 Hz.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/sound-frequency-wavelength-d_56.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-1/ac-waveforms/
- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
