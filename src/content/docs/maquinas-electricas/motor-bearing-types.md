---
title: "Tipos de rodamientos en motores eléctricos"
sidebar:
  label: "Tipos de rodamientos en motores eléctricos"
description: "Ficha tecnica: Tipos de rodamientos en motores eléctricos"
keywords: ["electric motor bearing types", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-bearing-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los rodamientos en motores eléctricos soportan el eje del rotor y permiten su giro libre minimizando la fricción. En un motor estándar se emplean típicamente dos rodamientos, uno en cada extremo del eje, seleccionados según la velocidad de giro, la dirección y magnitud de las cargas, y las condiciones ambientales. La configuración más común en motores industriales de hasta 500 kW emplea un rodamiento rígido de bolas en el lado de accionamiento y un rodamiento de bolas con ranura profunda en el lado opuesto (lado del ventilador), dejando libertad axial para absorber dilataciones térmicas. Los rodamientos se alojan en las tapas o bridas del estator y pueden estar sellados de fábrica o ser re-engrasables mediante engrasadores. La vida útil nominal L10 de estos rodamientos, bajo condiciones normales de carga y velocidad, supera las 20 000 horas de operación en la mayoría de los diseños industriales.

## Tipos y configuración
La selección del tipo de rodamiento responde principalmente a la naturaleza de la carga aplicada sobre el eje (radial, axial o combinada) y a la velocidad de rotación del motor. La configuración de montaje en los motores eléctricos horizontales y verticales difiere, ya que en los verticales el rodamiento inferior debe absorber todo el peso del rotor más el empuje axial.

| Tipo de rodamiento | Tipo de carga predominante | Configuración típica en motor |
|---|---|---|
| Rígido de bolas (ranura profunda) | Radial ligera a moderada; admite empuje axial en ambos sentidos | Lado accionamiento (DE) y lado ventilador (NDE) en motores pequeños y medianos |
| Rodillos cilíndricos | Radial elevada; no admite carga axial (excepto diseños específicos con pestaña) | Lado accionamiento (DE) en motores grandes o con acoplamiento pesado |
| Contacto angular (una hilera) | Combinada radial + axial en un solo sentido; montaje en pares para carga bidireccional | Motores verticales o con fuerte empuje axial (bombas verticales) |
| Bolas a rótula | Radial moderada; admite desalineaciones angulares de hasta 3° | Aplicaciones con ejes largos o dificultad de alineación precisa |
| Rodillos a rótula | Radial muy elevada con cargas de impacto; admite desalineaciones y algo de empuje axial | Grandes motores de tracción, molinos, ventiladores industriales |

## Características técnicas
Las dimensiones principales se rigen por las series de diámetros y anchos normalizados según ISO 15. Los materiales y acabados influyen directamente en la capacidad de carga dinámica, la velocidad límite y la resistencia a la corrosión o a las altas temperaturas.

| Característica | Rígido de bolas (serie 62) | Rodillos cilíndricos (serie NU) | Contacto angular (serie 72) |
|---|---|---|---|
| Material de anillos y elementos rodantes | Acero AISI 52100 / 100Cr6 | Acero AISI 52100 / 100Cr6 | Acero AISI 52100 / 100Cr6 |
| Dureza superficial anillos | 58-65 HRC | 58-65 HRC | 58-65 HRC |
| Acabado superficial pistas (Ra) | 0,1-0,2 µm / 4-8 µin | 0,15-0,25 µm / 6-10 µin | 0,1-0,2 µm / 4-8 µin |
| Capacidad de carga radial (C dinámica) | 100 % (referencia) | 150-250 % respecto a bolas del mismo diámetro exterior | 120-180 % respecto a rígido de bolas, dependiendo del ángulo de contacto |
| Capacidad de carga axial | 20-50 % de la carga radial dinámica | Nula en ejecución estándar (NU) | 50-100 % de la carga radial, función del ángulo (15°, 25°, 40°) |
| Carga combinada admisible | Buena (soporta axial bidireccional) | Muy limitada (solo con diseño NJ o NUP) | Excelente en un sentido (unidireccional) |
| Velocidad límite (factor n·dm) | 500 000 – 600 000 mm/min / 19 685 – 23 622 in/min | 400 000 – 500 000 mm/min / 15 748 – 19 685 in/min | 350 000 – 550 000 mm/min / 13 780 – 21 654 in/min (según ángulo y jaula) |

## Compatibilidades y aplicaciones
Cada tipo de motor eléctrico, por su principio de funcionamiento y por las condiciones de carga que impone la máquina accionada, resulta compatible con un grupo más o menos amplio de rodamientos. Las aplicaciones típicas orientan la preselección del tipo de rodamiento en fase de diseño o de reemplazo.

| Tipo de motor | Rodamiento lado accionamiento (DE) | Rodamiento lado ventilador (NDE) | Aplicación típica |
|---|---|---|---|
| Motor asíncrono trifásico cerrado (hasta 37 kW / 50 HP) | Rígido de bolas con ranura profunda y sello 2RS | Rígido de bolas con libertad axial en alojamiento | Bomba centrífuga horizontal, ventilador axial |
| Motor asíncrono trifásico media tensión (>200 kW / 268 HP) | Rodillos cilíndricos NU + contacto angular o rígido de bolas como localizador | Rígido de bolas (flotante) | Compresor de tornillo, cinta transportadora de minería |
| Motor DC con carga acoplada por polea-correa | Rígido de bolas reforzado (serie 63) | Rígido de bolas estándar | Máquina herramienta (torno, fresadora) |
| Motor vertical de empuje (bombas de pozo profundo) | Contacto angular de una hilera o par de contacto angular | Rígido de bolas o rodillos cilíndricos (libre) | Bomba vertical de turbina, agitador de tanque |
| Servomotor brushless de alta dinámica | Rígido de bolas de precisión (P4 o P5) con jaula de poliamida | Rígido de bolas de precisión con resorte de precarga | Máquina CNC, robot industrial, posicionador |

## Selección y dimensionamiento
La selección del tamaño del rodamiento parte del cálculo de la vida nominal L10 según la norma ISO 281, que relaciona la carga dinámica equivalente aplicada con la capacidad de carga dinámica básica del rodamiento, y se ajusta mediante factores de fiabilidad y de condiciones de operación.

La fórmula básica de vida nominal para rodamientos de bolas (exponente p = 3) y de rodillos (exponente p = 10/3) es:

> **L10 = (C / P)^p · 10^6 revoluciones**

> **L10h = (C / P)^p · (10^6 / (60 · n)) horas**

Donde:
| Variable | Descripción | Unidad |
|---|---|---|
| L10 | Vida nominal en revoluciones (millones de revoluciones si se omite 10^6) | rev |
| L10h | Vida nominal en horas de operación | h |
| C | Capacidad de carga dinámica básica del rodamiento | N o kN / lbf |
| P | Carga dinámica equivalente sobre el rodamiento | N o kN / lbf |
| p | Exponente de vida: 3 para bolas, 10/3 para rodillos | adimensional |
| n | Velocidad de rotación del eje | rpm |

La carga dinámica equivalente P combina las componentes radial (Fr) y axial (Fa):
> **P = X · Fr + Y · Fa**

Los factores X e Y dependen del tipo de rodamiento y de la relación Fa/Fr.

| Factor de cálculo | Símbolo | Rígido de bolas (serie 62) | Rodillos cilíndricos | Contacto angular 40° |
|---|---|---|---|---|
| Factor radial | X | 0,56 (si Fa/Fr ≤ e) | 1 | 0,35 |
| Factor axial | Y | 1,0 – 2,3 (según Fa/Fr) | N/A (axial nulo) | 0,57 |
| Factor de relación límite | e | 0,22 – 0,37 | - | 1,14 |
| Carga estática básica (C0) | - | Especificada en catálogo del fabricante | Especificada en catálogo | Especificada en catálogo |
| Factor de seguridad estática | s0 | ≥2 para motores con carga suave; ≥3 para cargas de impacto | ≥3 | ≥2,5 |

## Mantenimiento y vida útil
El principal modo de fallo en rodamientos de motores eléctricos es la fatiga superficial, acelerada por lubricación inadecuada, contaminación o corrosión por paso de corriente (erosión eléctrica en motores alimentados por variador de frecuencia). Una lubricación correcta y el control de la temperatura de operación son determinantes para alcanzar la vida de diseño.

| Práctica de mantenimiento | Tipo de rodamiento | Intervalo de re-engrase | Vida útil esperada L10h en condiciones nominales |
|---|---|---|---|
| Grasa de litio NLGI 2 o 3, re-engrase por engrasador | Rígido de bolas abierto (con placa de protección Z) | Cada 2000-4000 horas de operación (2-6 meses en servicio continuo) | 20 000 – 40 000 h |
| Grasa de poliurea para alta temperatura, sellado 2RS (sin re-engrase) | Rígido de bolas sellado de por vida | No requiere; sellado de fábrica | 15 000 – 25 000 h a 90 °C / 194 °F |
| Aceite mineral ISO VG 68-100 por baño o circulación en cárter | Rodillos cilíndricos en motores grandes | Cambio de aceite cada 8000-10 000 h o según análisis | 40 000 – 80 000 h |
| Inspección de vibración espectral (banda 500 Hz – 10 kHz) | Todos los tipos | Trimestral o continuo con monitorización online | Detecta fallos incipientes con 2-6 meses de anticipación a la falla catastrófica |
| Cambio completo por fatiga o aumento de holgura radial (> 2-3 veces la holgura inicial) | Todos los tipos | Sustituir el rodamiento cuando L10h alcanzada o vibración supere ISO 10816-3 zona C | Fin de vida: de 20 000 a 100 000 h según dimensionamiento |

## Normativa y equivalencias
Las designaciones de rodamientos para motores eléctricos siguen un sistema normalizado internacionalmente. Los principales fabricantes (SKF, FAG, NSK, NTN) comparten el mismo código de serie básica, lo que permite la intercambiabilidad dimensional entre marcas.

| Norma | Código | Descripción / designación típica |
|---|---|---|
| ISO 15 | Serie dimensional | Define diámetro exterior, diámetro interior y ancho para cada serie (p. ej., 6208, NU310) |
| ISO 281 | Cálculo de vida | Vida nominal L10, método de la carga dinámica equivalente |
| DIN 625-1 | Rodamientos rígidos de bolas | Especifica dimensiones y tolerancias para la serie 62, 63, etc. |
| DIN 5412-1 | Rodamientos de rodillos cilíndricos | Series NU, NJ, NUP y dimensiones asociadas |
| ANSI/ABMA Std 9 | Load ratings and fatigue life | Métrica y en pulgadas; equivalente funcional a ISO 281 en ámbito americano |
| Designación comercial tipo | 6208-2RSH/C3 | Serie 62, diámetro interior 40 mm / 1.5748 in, sellos de caucho sintético (2RS), holgura interna C3 (mayor que la normal) |

## Preguntas frecuentes (FAQ)
### ¿Cuál es la vida útil típica de un rodamiento en un motor eléctrico industrial?
    La vida nominal L10 de diseño para un rodamiento de motor industrial estándar se sitúa entre 20 000 y 40 000 horas de operación continua bajo carga nominal, pudiendo superar las 60 000 horas en motores de gran tamaño con rodamientos de rodillos cilíndricos sobredimensionados.

### ¿Qué tipo de rodamiento se recomienda para motores verticales con alto empuje axial?
    Para motores verticales que soportan empujes axiales superiores a 5000 N / 1124 lbf, se recomiendan rodamientos de contacto angular de una hilera o pares apareados en tándem, capaces de soportar cargas axiales equivalentes al 50-100 % de su capacidad radial dinámica según el ángulo de contacto (15°, 25° o 40°).

### ¿Cómo afecta la holgura interna C3 al funcionamiento del motor?
    La holgura C3 (holgura radial mayor que la normal CN) se selecciona cuando el eje del motor opera con temperaturas superiores a 80 °C / 176 °F o cuando existe interferencia fuerte en el ajuste del aro interior, evitando el bloqueo del rodamiento por dilatación térmica; la holgura radial típica para un 6208 C3 está entre 23 µm / 906 µin y 43 µm / 1693 µin.

### ¿Qué tipo de grasa es la más adecuada para rodamientos de motores eléctricos?
    Las grasas de litio con espesante de poliurea y consistencia NLGI 2 o 3 ofrecen la mejor estabilidad térmica y mecánica, soportando temperaturas de operación continuas de hasta 150 °C / 302 °F con intervalos de re-engrase que pueden duplicar los de las grasas de litio convencionales (alcanzando 5000-8000 horas en condiciones favorables).

### ¿Por qué los motores con variador de frecuencia sufren más fallos de rodamientos?
    Los motores alimentados por variadores de frecuencia generan tensiones de modo común que pueden producir descargas eléctricas a través del rodamiento (erosión eléctrica), con densidades de corriente superiores a 1 A/mm² que provocan microcráteres en pistas y elementos rodantes, reduciendo la vida del rodamiento en un 30-80 % si no se emplean rodamientos con aislamiento eléctrico.

### ¿Cuándo se debe reemplazar un rodamiento en un motor eléctrico?
    Un rodamiento debe reemplazarse cuando la holgura radial medida supera al menos 2-3 veces la holgura de fábrica, cuando el nivel de vibración global excede 7,1 mm/s RMS (ISO 10816-3 zona C) o cuando el análisis espectral muestra defectos avanzados en las frecuencias de fallo BPFO, BPFI o BSF con armónicos y bandas laterales claramente definidos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
