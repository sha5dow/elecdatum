---
title: "Ajustes ANSI B4.1 RC LC FN"
sidebar:
  label: "Ajustes ANSI B4.1 RC LC FN"
description: "Ficha tecnica: Ajustes ANSI B4.1 RC LC FN"
keywords: ["ANSI B4.1 RC LC LN FN clearance fits", "tolerances"]
category: "tolerances"
topic: "ansi-system"
subcategory: "ansi-b4"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

Los ajustes normalizados según ANSI B4.1 definen la holgura o interferencia resultante entre piezas cilíndricas ensambladas. La norma establece tres categorías principales de ajuste: ajustes con huelgo o juego (RC, *Running and Sliding Fits*), ajustes de localización o transición (LC, *Location Fits*) y ajustes de interferencia o forzados (FN, *Force and Shrink Fits*). Cada categoría se subdivide en clases que definen la magnitud del juego o la interferencia para un rango diametral dado, seleccionándose según los requisitos de precisión, movimiento relativo y método de montaje de la aplicación.

## Clasificación de los Ajustes ANSI

La norma ANSI B4.1 agrupa los ajustes en tres categorías funcionales, identificadas con letras seguidas de un número que indica la clase de precisión. Un número de clase menor corresponde generalmente a tolerancias más estrechas y juegos o interferencias más controlados. La designación ANSI especifica el tipo de ajuste resultante, a diferencia del sistema ISO que codifica por separado la tolerancia del agujero y del eje. La base de agujero es la práctica predominante, aunque la norma admite base de eje.

| Categoría | Designación ANSI | Descripción | Aplicaciones Típicas |
|---|---|---|---|
| Ajustes con Huelgo (RC) | RC1 a RC9 | El diámetro del agujero es mayor que el del eje. Existe un juego u holgura que permite movimiento relativo libre. La magnitud del huelgo crece con el número de clase. | Cojinetes de deslizamiento, pistones en cilindros, ejes que giran libremente, correderas, órganos de maniobra. |
| Ajustes de Localización (LC) | LC1 a LC11 | Proporcionan un pequeño huelgo o una ligera interferencia, diseñados para mantener precisión de ubicación entre piezas fijas que pueden requerir montaje y desmontaje. | Casquillos guía, bridas de centrado, acoplamientos, cubos de engranaje que deben mantenerse concéntricos. |
| Ajustes de Interferencia (FN) | FN1 a FN5 | El diámetro del eje es mayor que el del agujero. Se genera una presión de contacto que impide el movimiento relativo. El aprieto crece con el número de clase. | Montaje de rodamientos, coronas dentadas, casquillos a presión, acoplamientos forzados para transmisión de par. |

Los ajustes RC cubren aplicaciones con juego amplio (RC8, RC9) para piezas con dilataciones térmicas o corrosión, hasta juegos mínimos para guiados de precisión (RC1, RC2). Los ajustes LC con clases bajas ofrecen pequeños juegos, mientras las clases altas producen ligeras interferencias para centrado exacto. Los ajustes FN van desde interferencias ligeras montables a presión (FN1) hasta interferencias que requieren dilatación térmica para el montaje (FN5).

## Interpretación de Designaciones

La designación de un ajuste ANSI B4.1 se compone de la categoría y un número de clase. Por ejemplo, **RC 4** indica un ajuste con huelgo de clase 4. A diferencia del sistema ISO (que emplea códigos como H8/f7 para definir tolerancias de agujero y eje por separado), la nomenclatura ANSI define directamente el par funcional agujero-eje. El diseñador selecciona la designación de ajuste en función del diámetro nominal y la clase deseada; los valores numéricos de huelgo máximo y mínimo se obtienen de las tablas de la norma para ese rango diametral.

En el sistema ISO, la letra mayúscula designa la posición de tolerancia del agujero y la minúscula la del eje (sistema de agujero base H). En ANSI, no se especifica explícitamente la tolerancia individual de cada pieza en la designación del ajuste. Sin embargo, las tolerancias de agujero y eje subyacentes se derivan de los grados de tolerancia estándar. El despiece debe consultar las tablas dimensionales de ANSI B4.1 para cada clase y diámetro nominal a fin de asignar los límites máximo y mínimo a cada componente.

## Tablas de Tolerancias por Grado

Los procesos de fabricación tienen una capacidad intrínseca para alcanzar ciertos grados de tolerancia. Aunque los grados dimensionales exactos dependen del tamaño de la pieza y la habilidad del operario, la siguiente tabla relaciona los procesos de mecanizado comunes con los grados de tolerancia ANSI que pueden producir bajo condiciones normales. Un grado menor (más restrictivo) implica una zona de tolerancia más estrecha y, por tanto, un proceso más preciso.

| Grado ANSI | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|
| Lapeado y Bruñido | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |   |
| Rectificado Cilíndrico |   | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |
| Rectificado Plano |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |   |
| Torneado con Diamante |   |   | ✓ | ✓ | ✓ | ✓ |   |   |   |   |
| Mandrinado con Diamante |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |
| Brochado |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |
| Escariado |   |   |   | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |   |
| Torneado Convencional |   |   |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |
| Mandrinado Convencional |   |   |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |
| Fresado |   |   |   |   |   |   | ✓ | ✓ | ✓ | ✓ |
| Cepillado y Limado |   |   |   |   |   |   | ✓ | ✓ | ✓ | ✓ |
| Taladrado |   |   |   |   |   |   | ✓ | ✓ | ✓ | ✓ |

*Nota: Las marcas (✓) indican el rango de grados de tolerancia normalmente alcanzables. Un grado 4 típicamente corresponde a tolerancias inferiores a 3 µm / 0.00012 in para diámetros pequeños, mientras un grado 13 puede exceder 0,3 mm / 0.012 in en rangos similares.*

La selección del proceso de fabricación para lograr un ajuste específico depende de la clase ANSI requerida. Por ejemplo, un ajuste RC 4 con juegos muy controlados exigirá procesos en el rango de grados 5 a 7 (rectificado, brochado o torneado de precisión), mientras que un ajuste RC 9 más holgado puede obtenerse con fresado o incluso torneado convencional, correspondiente a grados 9 a 11.

## Ejemplos de Aplicación Real

**Ajustes con Huelgo (RC):**
Un eje de bomba centrífuga que gira dentro de un casquillo lubricado requiere un ajuste RC 5 o RC 6. Este proporciona entre 25 µm / 0.0010 in y 75 µm / 0.0030 in de huelgo diametral para un diámetro típico de 50 mm / 1.97 in, suficiente para la película de lubricante sin sacrificar la concentricidad.

Un pistón de motor de combustión interna opera con un ajuste RC 7 u RC 8, donde la dilatación térmica del pistón de aluminio reduce el huelgo en caliente. El juego en frío puede superar los 100 µm / 0.004 in para un diámetro de 90 mm / 3.54 in, asegurando que no ocurra gripado a temperatura de funcionamiento.

**Ajustes de Localización (LC):**
El centrado de una tapa de cojinete sobre un alojamiento partido utiliza un ajuste LC 3 o LC 4. Con un diámetro de 80 mm / 3.15 in, el resalte de centrado y el rebaje correspondiente se mecanizan con tolerancias que producen un juego máximo típico de 30 µm / 0.0012 in y un juego mínimo cercano a cero, garantizando la alineación del soporte del rodamiento.

Un casquillo guía intercambiable en un utillaje de taladrado se monta con ajuste LC 5 o LC 6 para permitir extracción manual pero sin holgura perceptible durante la operación.

**Ajustes de Interferencia (FN):**
La corona de un engranaje cementado se monta sobre un núcleo de acero con un ajuste FN 2. Para un diámetro de acoplamiento de 100 mm / 3.94 in, la interferencia diametral varía entre 40 µm / 0.0016 in y 90 µm / 0.0035 in, requiriendo prensa hidráulica o calentamiento ligero del cubo para el montaje.

Un aro de rodamiento rígido de bolas montado directamente sobre un eje giratorio solicita un ajuste FN 1 o FN 2, dependiendo de la carga. La interferencia evita el deslizamiento circunferencial (fretting) del aro interior bajo carga rotativa.

## Comparativa entre Sistemas ISO y ANSI

Ambos sistemas, ISO 286 y ANSI B4.1, clasifican los ajustes en las mismas tres categorías fundamentales: con juego, indeterminados (transición) y con aprieto. Sin embargo, difieren en la filosofía de designación y el nivel de granularidad de las tolerancias individuales. La siguiente tabla presenta una equivalencia aproximada entre las designaciones de ajuste comunes en uno y otro sistema, para un sistema de agujero base en un rango diametral medio.

| Designación ANSI B4.1 | Categoría | Equivalencia ISO Aproximada (Agujero Base) | Rango Típico de Juego/Interferencia para ∅ 50 mm / 1.97 in |
|---|---|---|---|
| RC 4 | Huelgo medio para rotación precisa | H7/f7 | +25 µm / +0.0010 in a +89 µm / +0.0035 in |
| RC 7 | Huelgo amplio para rotación libre | H9/e9 | +50 µm / +0.0020 in a +142 µm / +0.0056 in |
| LC 3 | Localización con juego mínimo | H7/h6 | 0 a +41 µm / 0 a +0.0016 in |
| LC 6 | Localización con ligera interferencia | H7/k6 | −18 µm / −0.0007 in a +23 µm / +0.0009 in |
| FN 2 | Interferencia media, montaje a presión | H7/s6 | −87 µm / −0.0034 in a −27 µm / −0.0011 in |

La principal diferencia operativa radica en que la designación ANSI especifica el ajuste resultante (el conjunto agujero-eje) como una entidad única, mientras que ISO codifica por separado la tolerancia del agujero (p.ej., H7) y la del eje (p.ej., f7). El estándar ISO también ofrece una mayor granularidad en la elección de grados de tolerancia (grados IT) y posiciones de tolerancia, permitiendo combinaciones no normalizadas para casos especiales. En cambio, las clases ANSI son combinaciones predefinidas con tablas completas de valores límite para cada diámetro, simplificando la selección en diseño mecánico básico. En la práctica industrial norteamericana, las designaciones ANSI (RC, LC, FN) son de uso común en planos de taller y catálogos de componentes, mientras que la documentación técnica internacional se inclina por el sistema ISO.

## Preguntas Frecuentes

### ¿Cuántas clases de ajuste con huelgo define la norma ANSI B4.1?
La norma ANSI B4.1 define 9 clases de ajuste con huelgo, designadas desde RC1 hasta RC9, donde RC1 proporciona el juego mínimo para guiados de máxima precisión y RC9 el juego máximo para condiciones de suciedad o dilatación extrema.

### ¿Cuál es el huelgo diametral típico de un ajuste RC 4 en un eje de 25 mm / 1 in?
Un ajuste RC 4 en un diámetro nominal de 25 mm / 1 in produce un huelgo diametral mínimo de aproximadamente 12 µm / 0.0005 in y un máximo de 41 µm / 0.0016 in, adecuado para rotación de precisión con lubricación.

### ¿Qué interferencia máxima puede esperarse de un ajuste FN 2 en un diámetro de 100 mm / 4 in?
Para un diámetro de 100 mm / 3.94 in, un ajuste FN 2 de interferencia media produce una interferencia diametral máxima de aproximadamente 90 µm / 0.0035 in, requiriendo prensado con fuerza considerable o calentamiento ligero del cubo.

### ¿En qué se diferencia un ajuste ANSI LC 3 de un ajuste ISO H7/h6?
Ambos proporcionan un centrado muy preciso con juego mínimo o nulo; sin embargo, LC 3 es una designación ANSI de ajuste completo, mientras que H7/h6 es la combinación ISO específica de tolerancias de agujero y eje que produce un resultado funcionalmente equivalente (juego máximo de 41 µm / 0.0016 in para 50 mm de diámetro).

### ¿Qué grado de tolerancia ANSI es necesario para lograr un ajuste de localización LC 5?
Los ajustes LC 5 requieren que los componentes se fabriquen con procesos en un grado de tolerancia ANSI 6 a 7, lo que corresponde a operaciones como rectificado cilíndrico o brochado.

### ¿Cómo se selecciona entre un ajuste RC y un ajuste LC para un eje guiado?
Se selecciona un ajuste LC cuando la prioridad es la precisión de ubicación con montaje sin fuerza (juego máximo típico ≤ 25 µm / 0.001 in en diámetros pequeños). Se opta por un ajuste RC cuando el movimiento libre continuo o la rotación son la exigencia primaria, aceptándose mayores juegos para garantizar la película lubricante y la libertad de movimiento.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
