---
title: "Ajustes y montaje de rodamientos"
sidebar:
  label: "Ajustes y montaje de rodamientos"
description: "Ficha tecnica: Ajustes y montaje de rodamientos"
keywords: ["bearing fits shaft housing tolerance mounting", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "bearing-fits"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

Los ajustes de ingeniería para rodamientos definen la holgura o interferencia entre el aro interior y el eje, y entre el aro exterior y el alojamiento, determinando si las piezas pueden girar libremente, necesitan fuerza de montaje o forman una unión permanente. La selección correcta del ajuste es crítica para garantizar la vida útil del rodamiento, la precisión de giro y la capacidad de carga del conjunto.

## Descripción general

El sistema ISO de ajustes clasifica los acoplamientos en tres categorías principales: juego (siempre existe holgura), transición (puede resultar en pequeña holgura o interferencia) e interferencia (siempre existe apriete). Para rodamientos, la designación alfanumérica ISO como H7/p6 especifica la tolerancia del alojamiento en mayúscula y la del eje en minúscula, permitiendo al fabricante y al montador conocer los límites dimensionales exactos sin recurrir a tablas completas en cada plano. Los ajustes se seleccionan en fase de diseño considerando el tipo de carga (rotativa o fija), la velocidad de giro, la temperatura de funcionamiento y el material del soporte.

## Dimensiones normalizadas y tolerancias

El sistema ISO de límites y ajustes establece la base de agujero (hole-basis) como método preferente para aplicaciones generales de rodamientos. La norma ISO 286 define los grados de tolerancia IT5 a IT11 para los diámetros de ejes y alojamientos. Los ajustes comúnmente especificados para rodamientos son:

| Ajuste ISO | Tipo | Diámetro nominal 50 mm - Agujero (µm / µin) | Diámetro nominal 50 mm - Eje (µm / µin) |
|---|---|---|---|
| H7/g6 | Juego deslizante | +25 µm / 0 a +984 µin | −9 µm / −354 a −25 µm / −984 µin |
| H7/h6 | Juego de localización | +25 µm / 0 a +984 µin | 0 a −16 µm / −630 µin |
| H7/k6 | Transición similar | +25 µm / 0 a +984 µin | +18 µm / +709 a +2 µm / +79 µin |
| H7/n6 | Transición fijo | +25 µm / 0 a +984 µin | +33 µm / +1299 a +17 µm / +669 µin |
| H7/p6 | Interferencia prensado | +25 µm / 0 a +984 µin | +42 µm / +1654 a +26 µm / +1024 µin |
| H7/s6 | Interferencia forzado | +25 µm / 0 a +984 µin | +59 µm / +2323 a +43 µm / +1693 µin |

La tolerancia dimensional del fabricante de rodamientos se aplica típicamente al diámetro del agujero y al diámetro exterior según las clases de precisión P0, P6, P5 y P4.

## Capacidades de carga y límites de funcionamiento

Un ajuste de interferencia incrementa la capacidad de carga radial del conjunto porque elimina el micro-deslizamiento entre el aro del rodamiento y su asiento, evitando el desgaste por fricción y la corrosión por contacto. Sin embargo, un apriete excesivo puede reducir la holgura interna del rodamiento por debajo de 0 µm / 0 µin, provocando sobrecalentamiento y fallo prematuro. La carga mínima requerida para rodamientos de bolas es aproximadamente 0,01 C (capacidad de carga dinámica), y para rodamientos de rodillos 0,02 C, debiendo asegurarse mediante un ajuste adecuado o precarga externa.

## Criterios de selección

La selección del ajuste se basa fundamentalmente en tres condiciones operativas: carga rotativa (el aro gira respecto al vector de carga), carga fija (el aro permanece estacionario respecto a la carga) o carga indeterminada. Para el aro que experimenta carga rotativa se recomienda ajuste de interferencia; para carga fija se permite juego o transición ligera. La velocidad de giro superior a 5000 rpm conlleva la selección de ajustes más precisos y la consideración de jaulas de centrado externo. Las dilataciones térmicas en servicio pueden requerir aumentar el juego inicial cuando el eje y el alojamiento son de materiales con distinto coeficiente de dilatación.

## Consideraciones de montaje

El montaje de rodamientos con ajuste de interferencia requiere métodos que eviten dañar los caminos de rodadura y las jaulas. La temperatura máxima de calentamiento para dilatación térmica no debe exceder 120 °C / 248 °F para rodamientos estándar, ni 200 °C / 392 °F para rodamientos con tratamiento de estabilización dimensional. La fuerza de prensado en frío se aplica siempre sobre el aro que se está montando — nunca transmitir la fuerza a través de los elementos rodantes. Durante el montaje del rodamiento en el alojamiento, la diferencia de temperaturas entre piezas puede ser de hasta 80 °C / 176 °F para facilitar la inserción sin daño.

## Tablas de selección por aplicación

| Aplicación típica | Ajuste eje | Ajuste alojamiento |
|---|---|---|
| Motor eléctrico, eje rotativo carga fija | k6 o m6 (+2 µm a +18 µm / +79 a +709 µin) | H7 o J7 (+25 µm a 0 / +984 a 0 µin) |
| Ventilador centrífugo, condiciones leves | j6 (−4 µm a +8 µm / −157 a +315 µin) | H7 (+25 µm a 0 / +984 a 0 µin) |
| Caja de engranajes, carga pesada | m6 o n6 (+8 µm a +25 µm / +315 a +984 µin) | P7 (−14 µm a −39 µm / −551 a −1535 µin) |
| Cubo de rueda automotriz | s6 (+43 µm a +59 µm / +1693 a +2323 µin) | N7 (−10 µm a −36 µm / −394 a −1417 µin) |
| Bomba de agua, girando continuo | h6 (0 a −16 µm / 0 a −630 µin) | H8 (+39 µm a 0 / +1535 a 0 µin) |
| Husillo máquina herramienta | k5 o m5 (+2 µm a +15 µm / +79 a +591 µin) | JS6 (±8 µm / ±315 µin) |

## Fallos comunes y causas

La selección incorrecta del ajuste se manifiesta mediante fallos característicos: el ajuste demasiado holgado provoca deslizamiento circunferencial del aro sobre su asiento, generando marcas de desgaste, oxidación por fretting y vibración a la frecuencia de giro. Un ajuste excesivamente apretado reduce la holgura radial interna por debajo del mínimo de 3 µm / 118 µin para rodamientos de bolas pequeños, causando calentamiento incontrolado y gripado. La desalineación durante el montaje genera cargas axiales parásitas que reducen la vida útil L10 hasta un 30 % respecto a la calculada teóricamente.

## Preguntas frecuentes

### ¿Qué temperatura máxima admite un rodamiento durante el montaje por calentamiento?

La temperatura máxima segura para calentar un rodamiento estándar es 120 °C / 248 °F, y no debe superarse a menos que el fabricante haya aplicado tratamiento de estabilización dimensional hasta 200 °C / 392 °F. El calentamiento uniforme se realiza con placas de inducción o baño de aceite controlado termostáticamente.

### ¿Cuánto apriete mínimo necesita un aro de rodamiento bajo carga rotativa?

Para ejes de acero con diámetro entre 20 mm / 0.787 in y 50 mm / 1.969 in, se recomienda una interferencia mínima de 2 µm / 79 µin a 8 µm / 315 µin, dependiendo de la velocidad y la magnitud de la carga. La regla general es que el apriete aumente proporcionalmente con el diámetro del eje.

### ¿Cuál es la holgura radial interna mínima admisible tras el montaje?

La holgura radial interna mínima tras el montaje debe ser superior a 0 µm / 0 µin, recomendándose para aplicaciones generales un valor residual entre 3 µm / 118 µin y 10 µm / 394 µin en rodamientos rígidos de bolas, y hasta 15 µm / 591 µin en rodamientos de rodillos.

### ¿Qué valor de apriete diametral corresponde a un ajuste H7/p6 en un eje de 50 mm / 1.969 in?

El apriete diametral en un ajuste H7/p6 para diámetro 50 mm / 1.969 in oscila entre un mínimo de 1 µm / 39 µin (línea de agujero máxima y eje mínimo) y un máximo de 42 µm / 1654 µin (agujero mínimo y eje máximo).

### ¿Cuándo se requiere un ajuste con juego en lugar de interferencia para rodamientos?

Se requiere ajuste con juego en el aro cargado de forma fija, como el aro exterior de un rodamiento que soporta un eje sin movimiento axial, o cuando el rodamiento debe deslizar sobre su asiento para compensar dilataciones de más de 0,1 mm / 0.004 in en funcionamiento.

### ¿Cuál es la diferencia práctica entre un ajuste k6 y un ajuste m6 en el mismo diámetro nominal?

Para un diámetro nominal de 50 mm / 1.969 in, el ajuste k6 proporciona interferencia entre +2 µm / +79 µin y +18 µm / +709 µin, mientras que m6 da entre +8 µm / +315 µin y +25 µm / +984 µin. La diferencia de apriete máximo es de 7 µm / 275 µin, suficiente para pasar de un ajuste de transición ligero a uno con interferencia fiable en toda la tolerancia.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/centrifugal-pumps-standards-d_1116.html
- **mcmaster.com**: https://www.mcmaster.com/products/bearing-housings/
