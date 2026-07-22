---
title: "EDM electroerosión parámetros y tolerancias"
sidebar:
  label: "EDM electroerosión parámetros y tolerancias"
description: "Ficha tecnica: EDM electroerosión parámetros y tolerancias"
keywords: ["EDM electrical discharge machining tolerances Ra", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "edm"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Información general
La electroerosión por descarga eléctrica (EDM, *Electrical Discharge Machining*) es un proceso de mecanizado no convencional donde la remoción de material se produce mediante descargas eléctricas controladas entre un electrodo (herramienta) y la pieza de trabajo, ambos sumergidos en un fluido dieléctrico. El proceso permite mecanizar geometrías complejas en materiales conductores con independencia de su dureza, ya que no existe contacto mecánico entre herramienta y pieza.

## Parámetros de proceso
Los parámetros de operación determinan la velocidad de remoción, la precisión dimensional y el acabado superficial. A continuación se presentan los rangos típicos para electroerosión por penetración y por hilo.

| Parámetro | Rango típico | Unidad |
|---|---|---|
| Voltaje de descarga | 40 – 300 | V |
| Corriente de pico | 0,1 – 500 | A |
| Duración del pulso | 1 – 2000 | µs |
| Frecuencia de pulsos | 0,5 – 500 | kHz |
| Espacio interelectrodo (GAP) | 0,01 – 0,5 mm / 0.0004 – 0.02 in | mm / in |
| Diámetro del hilo (wire EDM) | 0,02 – 0,33 mm / 0.0008 – 0.013 in | mm / in |
| Presión de dieléctrico | 0,1 – 1,5 MPa / 14.5 – 217.5 psi | MPa / psi |
| Temperatura del dieléctrico | 20 – 40 °C / 68 – 104 °F | °C / °F |

## Tolerancias típicas
La electroerosión ofrece una precisión dimensional excepcional en comparación con procesos convencionales de arranque de viruta, siempre que se empleen parámetros de acabado adecuados y electrodos de alta calidad.

| Régimen de mecanizado | Tolerancia dimensional (μm / in) | Grado IT equivalente |
|---|---|---|
| Desbaste | ±10 – 50 µm / ±0.0004 – 0.002 in | IT8 – IT10 |
| Semi–acabado | ±5 – 10 µm / ±0.0002 – 0.0004 in | IT6 – IT7 |
| Acabado fino | ±1 – 5 µm / ±0.00004 – 0.0002 in | IT5 – IT6 |
| Micro–electroerosión o pasadas múltiples | ±0,5 – 2 µm / ±0.00002 – 0.00008 in | IT4 – IT5 |

## Materiales aplicables
La electroerosión requiere que el material de la pieza sea conductor eléctrico. La dureza, tenacidad o fragilidad no representan limitaciones para el proceso.

| Material | Maquinabilidad por EDM | Observaciones |
|---|---|---|
| Aceros al carbono y aleados | Excelente | Incluye aceros templados de herramienta |
| Aceros inoxidables | Excelente | Precisa control de corrosión por dieléctrico |
| Titanio y superaleaciones base níquel | Muy buena | Velocidad de remoción moderada, riesgo de microgrietas |
| Carburo de tungsteno (WC–Co) | Buena | Requiere electrodos de grafito o cobre–tungsteno |
| Aluminio y sus aleaciones | Buena | Evitar acumulación de viruta en el gap |
| Cobre y latón | Buena | Empleados frecuentemente como electrodo, no como pieza |
| Cerámicas conductoras (ej. SiC, TiB₂) | Limitada | Solo algunas composiciones con suficiente conductividad (>0.01 S/cm) |
| Materiales no conductores (cerámicas aislantes, plásticos) | No aplica | Solo mediante proceso EDM asistido por capa conductora |

## Acabado superficial
El acabado superficial en EDM depende de la energía de descarga, el material del electrodo y el número de pasadas de acabado. La rugosidad se expresa habitualmente como Ra (rugosidad media aritmética).

| Etapa de mecanizado | Rugosidad Ra (µm / μin) | Observaciones |
|---|---|---|
| Desbaste (alta energía) | 3,2 – 12,5 µm / 126 – 492 μin | Alta velocidad de remoción, capa blanca gruesa |
| Semi–acabado | 0,8 – 3,2 µm / 31 – 126 μin | Reducción de capa refundida |
| Acabado fino (electrodo de grafito/cobre) | 0,2 – 0,8 µm / 8 – 31 μin | Múltiples pasadas con energía decreciente |
| Acabado espejo (wire EDM o penetración con micro–pulsos) | 0,04 – 0,2 µm / 1.6 – 8 μin | Requiere control estricto de dieléctrico y electrodo |

## Ventajas y limitaciones
La elección de la electroerosión debe considerar el balance entre capacidades técnicas únicas y restricciones productivas.

| Ventajas | Limitaciones |
|---|---|
| Mecaniza cualquier material conductor, sin importar su dureza | Solo aplicable a materiales con conductividad eléctrica (σ > 0.1 S/cm) |
| Permite geometrías complejas con esquinas internas de radio mínimo (0.05 – 0.1 mm / 0.002 – 0.004 in) | Baja velocidad de remoción comparada con fresado convencional (típicamente 1 – 500 mm³/min) |
| Proceso sin fuerzas de corte: ideal para piezas delgadas o frágiles | Genera capa blanca (re–solidificada) y zona afectada térmicamente (HAZ) de 2 – 50 µm |
| Tolerancias dimensionales repetibles de ±1 µm / ±0.00004 in | Riesgo de microgrietas en materiales duros si no se controla la energía de pulso |
| Acabados superficiales hasta Ra 0.04 µm / 1.6 μin sin procesos posteriores | Requiere electrodos de precisión y desgaste de electrodo (1:1 a 100:1 según material) |
| Alta automatización, operación desatendida | Coste horario elevado (maquinaria, dieléctrico, electrodos) |

## Guía de selección
Utilice los siguientes criterios para decidir si la electroerosión es la tecnología adecuada para su aplicación:

- La **dureza del material** supera los 45 HRC y los procesos convencionales presentan desgaste excesivo de herramienta → EDM por penetración.
- Se requieren **cavidades ciegas complejas** (moldes de inyección, matrices de forja) con paredes verticales o negativas → EDM por penetración con electrodo de grafito.
- Se necesita **corte de contorno en chapa gruesa** (hasta 300 mm / 11.8 in) con tolerancias estrechas → wire EDM.
- La pieza presenta **espesores finos** (<0.5 mm / 0.02 in) que no resistirían fuerzas de corte → EDM (ambas variantes).
- Se busca un **acabado superficial Ra < 0.2 µm / 8 μin** en materiales difíciles de pulir mecánicamente → EDM de acabado con múltiples pasadas.
- La **conductividad eléctrica** es < 0.01 S/cm → procesos alternativos (rectificado, láser, ultrasónico).
- La **tasa de remoción** debe superar los 1000 mm³/min en acero → fresado de alta velocidad o torneado, no EDM.

## Preguntas frecuentes

### ¿Qué tolerancia dimensional se puede alcanzar en wire EDM con pasadas de acabado?
Se puede alcanzar una tolerancia de ±0,001 mm / ±0.00004 in en condiciones óptimas de taller utilizando al menos tres pasadas de acabado (skim cuts) y control térmico del dieléctrico.

### ¿Cuál es el espesor máximo que puede cortar una máquina de electroerosión por hilo?
Las máquinas industriales estándar cortan hasta 300 mm / 11.8 in de espesor en acero, aunque modelos especiales de gran capacidad pueden superar los 500 mm / 19.7 in con velocidades de avance reducidas.

### ¿Qué rugosidad Ra es típica en un acabado fino de electroerosión por penetración con electrodo de grafito?
Un acabado fino típico logra una rugosidad Ra de 0,4 µm / 16 μin, y mediante micro–pulsos controlados puede descender a 0,1 µm / 4 μin.

### ¿Cuánta capa blanca (re–fundida) genera un proceso EDM de desbaste?
La capa blanca en desbaste puede alcanzar un espesor de 30 a 50 µm / 0.0012 a 0.002 in, que debe eliminarse mediante pasadas de acabado o pulido posterior para evitar fallos por fatiga.

### ¿Qué velocidad de remoción de material (MRR) se puede esperar al mecanizar acero de herramientas por EDM?
En régimen de desbaste con electrodo de grafito y corriente de pico de 50 A se obtiene una tasa de remoción de hasta 500 mm³/min / 0.03 in³/min; en acabado fino la MRR baja a 1–5 mm³/min.

### ¿Cuál es la conicidad mínima que se puede obtener en un corte de wire EDM?
La conicidad natural sin corrección por control de ejes suele ser de 0,01 – 0,02 mm por cada 10 mm de altura / 0.0004 – 0.0008 in por cada 0.4 in de espesor, aunque con compensación CNC se neutraliza por completo.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/wire-edm
