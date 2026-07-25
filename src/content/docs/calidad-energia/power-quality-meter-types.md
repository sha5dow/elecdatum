---
title: "Medidores de calidad de energía tipos"
sidebar:
  label: "Medidores de calidad de energía tipos"
description: "Ficha tecnica: Medidores de calidad de energía tipos"
keywords: ["power quality meter types specifications", "calidad-energia"]
category: "calidad-energia"
topic: "metering"
subcategory: "power-quality-meters"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los medidores de calidad de energía analizan simultáneamente más de 500 parámetros eléctricos, con frecuencias de muestreo que van desde 128 hasta 1024 muestras por ciclo para capturar transitorios de alta velocidad. Su función principal es evaluar las desviaciones de la tensión, corriente y forma de onda respecto a valores nominales ideales, detectando fenómenos como armónicos, fluctuaciones de tensión, desequilibrios y eventos transitorios.

## Tipos según instalación

Los medidores de calidad de energía se clasifican en tres grandes familias según su modo de instalación: portátiles, fijos (o de panel) y semipermanentes. Cada tipo responde a necesidades distintas de auditoría, monitorización continua o campañas temporales de medición.

| Tipo | Modo de uso | Alimentación | Precisión típica | Coste relativo |
|------|-------------|-------------|-----------------|----------------|
| Portátil | Auditorías puntuales, diagnóstico de fallos, estudios de prediagnóstico | Batería recargable de ión-litio (7,4 V – 14,8 V) o red | Clase A según IEC 61000-4-30 | Alto |
| Fijo (panel) | Monitorización continua en armarios eléctricos, puntos de acoplamiento común (PCC) | Red eléctrica 85 – 265 V CA o 100 – 300 V CC | Clase A o S según IEC 61000-4-30 | Medio – Alto |
| Semipermanente | Campañas de medida de 1 semana a 3 meses, estudios de calidad de suministro | Batería recambiable + alimentación de red opcional | Clase A o S según IEC 61000-4-30 | Medio |

## Tipos según tecnología de medición

La tecnología de conversión y procesamiento de señal determina la capacidad del equipo para medir fenómenos rápidos y calcular indicadores normalizados. Las precisiones de medida de tensión alcanzan ±0,1 % de la lectura en equipos de gama alta, mientras que los modelos básicos operan con ±0,5 % de la lectura.

| Tecnología | Principio de funcionamiento | Ancho de banda típico | Frecuencia de muestreo típica |
|------------|---------------------------|----------------------|-------------------------------|
| Conversión A/D con DSP | Muestreo simultáneo en todos los canales, procesamiento digital de señales (FFT, filtrado digital) | 5 kHz – 150 kHz | 128 – 1024 muestras/ciclo (50 Hz) |
| Conversión A/D multiplexada | Muestreo secuencial de canales con un solo convertidor, apto para parámetros lentos | Hasta 2,5 kHz | 64 – 256 muestras/ciclo (50 Hz) |
| Basada en FPGA | Procesamiento en hardware de muy alta velocidad para detección de transitorios | Hasta 10 MHz | Hasta 10 MS/s |
| Electromecánica (obsoleta) | Bobinas de inducción y discos de Ferraris, sin capacidad de análisis espectral | 45 – 65 Hz | No aplica |

## Parámetros medidos

Un medidor de calidad de energía clase A debe medir al menos 50 parámetros normalizados según IEC 61000-4-30 edición 3, incluyendo valores agregados, indicadores estadísticos y formas de onda. Los equipos más completos superan los 500 parámetros con tasas de actualización de 200 ms para valores de media tensión.

| Parámetro | Unidad | Rango típico de medida | Norma de referencia |
|-----------|--------|------------------------|---------------------|
| Tensión eficaz (RMS) | V | 0 – 1000 V CA / 0 – 1500 V CC | IEC 61000-4-30 |
| Corriente eficaz (RMS) | A | 0 – 6000 A (con pinza externa) | IEC 61000-4-30 |
| Frecuencia | Hz | 42,5 – 57,5 Hz / 51 – 69 Hz (según red) | IEC 61000-4-30 |
| Distorsión armónica total (THD) | % | 0 – 100 % | IEC 61000-4-7 |
| Armónicos individuales (hasta orden 50) | % / V / A | 0 – 100 % del fundamental | IEC 61000-4-7 |
| Interarmónicos | % / V / A | 0 – 100 % del fundamental | IEC 61000-4-7 |
| Flicker (Pst, Plt) | adimensional | 0,2 – 10 | IEC 61000-4-15 |
| Huecos de tensión (dips) | % / ms | 0 – 100 % Un, 10 ms – 60 s | IEC 61000-4-30 |
| Sobretensiones temporales (swells) | % / ms | 100 – 200 % Un, 10 ms – 60 s | IEC 61000-4-30 |
| Transitorios rápidos | kV / µs | 0 – 6 kV, > 5 µs de tiempo de subida | IEC 61000-4-30 |
| Desequilibrio de tensión | % | 0 – 10 % | IEC 61000-4-30 |
| Potencia activa, reactiva y aparente | W, var, VA | Depende de tensión y corriente | IEEE 1459 |
| Factor de potencia (total y de desplazamiento) | adimensional | 0 – 1 capacitivo/inductivo | IEEE 1459 |
| Energía activa y reactiva | kWh, kvarh | 0 – 10⁹ kWh | IEC 62053-22 |

## Tabla comparativa de especificaciones técnicas

La tabla siguiente resume las especificaciones más relevantes para tres categorías representativas de medidores: portátil clase A, fijo clase A y registrador de perturbaciones.

| Especificación | Portátil clase A | Fijo clase A | Registrador de perturbaciones |
|----------------|------------------|--------------|-------------------------------|
| Canales de tensión | 4 (3 fases + neutro) | 4 (3 fases + neutro) | 4 (3 fases + neutro) |
| Canales de corriente | 4 (con pinzas externas) | 4 (con transformadores externos) | 4 (con pinzas externas) |
| Clase de precisión tensión | 0,1 % lectura | 0,1 % lectura | 0,2 % lectura |
| Ancho de banda | 5 Hz – 150 kHz | 5 Hz – 150 kHz | 5 Hz – 10 MHz |
| Frecuencia de muestreo | 256 muestras/ciclo (50 Hz) | 512 muestras/ciclo (50 Hz) | 10 MS/s (transitorios) |
| Memoria interna | 8 GB – 32 GB | 32 GB – 128 GB | 64 GB – 512 GB |
| Pantalla | LCD color 5,7" – 7" / 145 mm – 178 mm | LCD táctil 7" – 10" / 178 mm – 254 mm | Sin pantalla (operación remota) |
| Temperatura de operación | -10 °C a +50 °C / 14 °F a 122 °F | -25 °C a +70 °C / -13 °F a 158 °F | -20 °C a +65 °C / -4 °F a 149 °F |
| Grado de protección | IP65 (estuche cerrado) | IP54 (frontal), IP20 (trasero) | IP67 |
| Peso | 1,5 kg – 2,5 kg / 3,3 lb – 5,5 lb | 0,5 kg – 2 kg / 1,1 lb – 4,4 lb | 0,8 kg – 1,5 kg / 1,8 lb – 3,3 lb |
| Comunicaciones | USB, Ethernet, WiFi | Ethernet, RS-485, WiFi, 4G opcional | Ethernet, WiFi, 4G |
| Normativa aplicable | IEC 61000-4-30 clase A, IEC 61000-4-7, IEC 61000-4-15 | IEC 61000-4-30 clase A, IEC 61000-4-7, IEC 61000-4-15 | IEC 61000-4-30 clase A (solo estado estacionario) |
| Coste relativo | Alto | Medio – Alto | Muy alto |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre un medidor clase A y clase S según IEC 61000-4-30?

La clase A exige mayor precisión en la medida de tensión (±0,1 % de la lectura) y algoritmos de agregación normalizados sin ambigüedad. La clase S permite especificaciones menos restrictivas, con precisiones de ±0,5 % a ±1 % de la lectura, y se emplea en aplicaciones estadísticas o de supervisión menos críticas donde no se requiere exactitud metrológica verificable.

### ¿Se puede usar un medidor de calidad de energía como registrador de transitorios?

Sí, si el equipo incorpora muestreo de alta velocidad y un ancho de banda suficiente. Los medidores con muestreo ≥ 1 MS/s y ancho de banda ≥ 1 MHz pueden capturar transitorios con tiempos de subida de hasta 5 µs. Los equipos diseñados exclusivamente para estado estacionario (ancho de banda ≤ 150 kHz) no detectan transitorios rápidos.

### ¿Qué parámetros mínimos debe medir un analizador de calidad de energía para cumplir con IEC 61000-4-30 edición 3?

Debe medir tensión RMS, corriente RMS, frecuencia, armónicos hasta orden 50, interarmónicos, desequilibrio, flicker (Pst y Plt), huecos de tensión, sobretensiones temporales e interrupciones. Todos estos parámetros deben registrarse con marcas de tiempo sincronizadas por GPS o NTP con incertidumbre inferior a 20 ms.

### ¿Cuánto tiempo puede registrar un medidor portátil sin descargar la batería?

Un medidor portátil clase A típico registra entre 6 y 10 horas con una batería de 7,4 V – 14,8 V y capacidad de 90 Wh, midiendo 4 tensiones y 4 corrientes con pantalla encendida al 50 % de brillo. Con pantalla apagada y midiendo solo tensiones, la autonomía puede extenderse a 18 – 24 horas.

### ¿Es necesario calibrar un medidor de calidad de energía periódicamente?

Sí, la calibración debe realizarse cada 12 a 24 meses en laboratorio acreditado, según recomendación de fabricantes y normas IEC/ISO 17025. La deriva típica para equipos clase A es inferior a 0,05 % por año, pero los transformadores de corriente externos pueden introducir errores adicionales de hasta 0,5 % si no se calibran simultáneamente.

### ¿Qué comunicaciones son imprescindibles en un sistema de monitorización permanente?

Para monitorización permanente en subestaciones e industrias se requieren al menos Ethernet y RS-485 con protocolos Modbus TCP/RTU e IEC 61850. La conectividad WiFi y 4G es necesaria para ubicaciones sin cableado estructurado, mientras que la sincronización horaria mediante GPS o NTP con precisión < 1 ms es obligatoria según IEC 61000-4-30 clase A.

## Fuentes consultadas

- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-12/power-quality-measurement/
