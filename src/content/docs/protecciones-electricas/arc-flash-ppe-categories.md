---
title: "Categorías de EPP para arco eléctrico"
sidebar:
  label: "Categorías de EPP para arco eléctrico"
description: "Ficha tecnica: Categorías de EPP para arco eléctrico"
keywords: ["arc flash PPE category table NFPA 70E", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "arc-flash"
subcategory: "ppe-categories-arc-flash"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Las categorías de EPP para arco eléctrico establecen un sistema escalonado de protección personal basado en el nivel de energía incidente esperado durante una falla por arco, medido en calorías por centímetro cuadrado (cal/cm²). Este sistema, definido por la NFPA 70E, permite seleccionar la indumentaria de protección adecuada para trabajadores que realizan tareas con riesgo eléctrico, garantizando que el equipo pueda soportar la energía térmica liberada sin que el usuario sufra quemaduras de segundo grado en zonas cubiertas.

## Base normativa

El estándar NFPA 70E (Standard for Electrical Safety in the Workplace) constituye la referencia principal para la clasificación de categorías de EPP frente a arco eléctrico en América del Norte. Este documento establece requisitos prácticos de seguridad eléctrica en el lugar de trabajo, incluyendo los límites de energía incidente para cada categoría, los requisitos de indumentaria ignífuga y los métodos de cálculo de energía de arco. La norma complementa los lineamientos de OSHA y se articula con el Código Eléctrico Nacional (NFPA 70) para ofrecer un marco integral de protección.

## Categorías de EPP según NFPA 70E

La NFPA 70E define cuatro categorías numeradas de EPP, más una condición de peligro extremo, cada una asociada a un rango máximo de energía incidente expresada en cal/cm². La energía incidente es la cantidad de energía térmica que incide sobre una superficie a una distancia de trabajo determinada, típicamente 45,7 cm / 18 in.

| Categoría | Rango de energía incidente | Tipo de riesgo |
|-----------|---------------------------|----------------|
| Categoría 1 | Hasta 4 cal/cm² / 16,7 J/cm² | Riesgo mínimo de arco |
| Categoría 2 | Hasta 8 cal/cm² / 33,5 J/cm² | Riesgo moderado de arco |
| Categoría 3 | Hasta 25 cal/cm² / 104,6 J/cm² | Riesgo elevado de arco |
| Categoría 4 | Hasta 40 cal/cm² / 167,4 J/cm² | Riesgo severo de arco |
| Peligro extremo | Superior a 40 cal/cm² / 167,4 J/cm² | Riesgo extremo — no se debe trabajar energizado |

La clasificación de una tarea en una categoría específica exige un estudio de energía incidente (arc flash study) que calcule los valores reales en el punto de trabajo, considerando corriente de cortocircuito disponible, tiempo de despeje de los dispositivos de protección y distancia de trabajo.

## Requisitos de indumentaria por categoría

Cada categoría exige capas específicas de protección fabricadas con materiales ignífugos. El valor de protección térmica de cada prenda se expresa mediante el ATPV (Arc Thermal Performance Value) o el E<sub>BT</sub> (Energy Breakopen Threshold), ambos medidos en cal/cm².

| Categoría | Prendas requeridas | ATPV mínimo |
|-----------|-------------------|--------------|
| Categoría 1 | Camisa y pantalón de manga larga ignífugos (mínimo 4 cal/cm²) o mono ignífugo, casco con careta de arco o gafas de seguridad, calzado dieléctrico | 4 cal/cm² / 16,7 J/cm² |
| Categoría 2 | Mono ignífugo sobre ropa interior no sintética (mínimo 8 cal/cm²), casco con careta de arco, calzado dieléctrico | 8 cal/cm² / 33,5 J/cm² |
| Categoría 3 | Traje completo de protección contra arco (chaqueta y pantalón o mono multicapa, mínimo 25 cal/cm²), capucha de arco, casco, calzado dieléctrico, guantes aislantes con protectores de cuero | 25 cal/cm² / 104,6 J/cm² |
| Categoría 4 | Traje de protección contra arco de alta resistencia (mínimo 40 cal/cm²), capucha de arco con visor, casco, calzado dieléctrico, guantes aislantes con protectores de cuero, protección auditiva | 40 cal/cm² / 167,4 J/cm² |

Todas las prendas exteriores, incluidas capuchas, chaquetas y pantalones, deben estar confeccionadas con fibras resistentes a la llama que no se fundan ni goteen. La ropa interior y las capas intermedias deben ser de fibras naturales no sintéticas para evitar fusión sobre la piel.

## Consideraciones para la selección de categoría

La selección de categoría no puede basarse únicamente en tablas genéricas de tareas. La NFPA 70E permite dos métodos de selección:
- **Método de tablas**: utiliza las tablas predefinidas de la norma cuando los parámetros eléctricos del equipo coinciden exactamente con los rangos especificados en ellas, limitando severamente su aplicación práctica.
- **Método de cálculo de energía incidente**: obligatorio en la mayoría de instalaciones industriales. Requiere un estudio de arco eléctrico conforme a IEEE 1584 que compute la energía incidente real en cada punto de trabajo. Este es el método más preciso y recomendado.

La distancia de trabajo de referencia es 45,7 cm / 18 in para equipos de baja tensión (hasta 600 V) y puede variar para tensiones superiores. Los valores de energía incidente se determinan mediante la fórmula de cálculo normalizada:

> **E = 4,184 · C<sub>f</sub> · E<sub>n</sub> · (t / 0,2) · (610<sup>x</sup> / D<sup>x</sup>)**

| Variable | Significado | Unidad |
|----------|-------------|--------|
| E | Energía incidente estimada | cal/cm² |
| C<sub>f</sub> | Factor de cálculo (1,0 para tensiones > 1 kV; 1,5 para tensiones ≤ 1 kV) | Adimensional |
| E<sub>n</sub> | Energía normalizada para duración de 0,2 s y distancia de 610 mm | J/cm² |
| t | Tiempo de despeje del arco | s |
| D | Distancia de trabajo real desde el punto de arco | mm |
| x | Exponente de distancia (dependiente del tipo de equipo y tensión) | Adimensional |

El tiempo de despeje del arco (t) es crítico: tiempos menores reducen drásticamente la energía incidente. Por ello, la coordinación de protecciones y el ajuste adecuado de interruptores y fusibles influye directamente en la categoría de EPP requerida.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre ATPV y EBT en una prenda de protección?

El ATPV (Arc Thermal Performance Value) indica la energía incidente necesaria para que el tejido transmita suficiente calor como para causar una quemadura de segundo grado en el usuario, con un 50 % de probabilidad. El E<sub>BT</sub> (Energy Breakopen Threshold) indica la energía que provoca la rotura o apertura del tejido. Ambos se miden en cal/cm² y el valor declarado para la prenda es el menor de los dos.

### ¿Puedo usar ropa interior de poliéster debajo del EPP de arco?

No. La ropa interior o cualquier capa intermedia debe ser de fibras naturales no sintéticas (algodón, lana, seda) o fibras ignífugas. Los materiales sintéticos como poliéster, nailon o licra pueden fundirse y adherirse a la piel incluso si la capa exterior de protección soporta el arco.

### ¿Las categorías de EPP de NFPA 70E son aplicables en instalaciones europeas?

No directamente. En Europa aplica la norma IEC 61482, que define dos niveles de protección por el método de caja (Clase 1: 4 kA durante 0,5 s; Clase 2: 7 kA durante 0,5 s) o por el método de arco abierto (ATPV o ELIM). Aunque conceptualmente similares, las clasificaciones no son equivalentes y no deben intercambiarse sin un análisis de ingeniería.

### ¿Qué significa el valor de energía incidente expresado en cal/cm²?

Una caloría por centímetro cuadrado es la cantidad de energía térmica necesaria para elevar un grado Celsius la temperatura de un gramo de agua, distribuida sobre un área de un centímetro cuadrado. Para referencia, 1,2 cal/cm² / 5,0 J/cm² es el umbral aproximado para causar quemadura de segundo grado en piel desnuda. Las categorías de EPP protegen contra energías muy superiores a este umbral.

### ¿Con qué frecuencia debe re-certificarse el EPP de arco eléctrico?

La normativa no exige una re-certificación periódica, pero sí impone inspecciones visuales antes de cada uso y revisiones documentadas al menos anualmente. Cualquier prenda que presente cortes, agujeros, decoloración, contaminación con sustancias inflamables o daños en costuras debe retirarse inmediatamente del servicio. La vida útil máxima recomendada por fabricantes suele ser de 5 años, dependiendo del uso y almacenamiento.

### ¿Qué sucede si la energía incidente supera los 40 cal/cm²?

Cuando un estudio de arco eléctrico determina energías incidentes superiores a 40 cal/cm² / 167,4 J/cm², la NFPA 70E lo clasifica como peligro extremo (extreme danger) y prohíbe cualquier trabajo en equipo energizado. En estos casos se debe desenergizar completamente el equipo antes de intervenir, o rediseñar el sistema de protecciones para reducir la energía incidente (por ejemplo, reduciendo tiempos de despeje o instalando dispositivos de mitigación de arco).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cheicals-hazard-rating-d_400.html
