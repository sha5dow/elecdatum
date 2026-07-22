---
title: "SLS parámetros y materiales"
sidebar:
  label: "SLS parámetros y materiales"
description: "Ficha tecnica: SLS parámetros y materiales"
keywords: ["SLS selective laser sintering nylon parameters", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "sls"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción del proceso
La sinterización selectiva por láser (SLS) es un método de fabricación aditiva que utiliza un láser pulsado, habitualmente de CO₂, para fusionar selectivamente partículas de polvo termoplástico capa por capa. El proceso se desarrolló a finales de los años 80 y fue patentado en 1989 por Carl Deckard. El polvo se extiende en una capa uniforme sobre una plataforma de construcción mediante un rodillo nivelador; a continuación, el láser traza la sección transversal de la pieza, sinterizando las partículas. La plataforma desciende entonces un espesor de capa — típicamente inferior a 0,1 mm — y se repite el ciclo hasta completar la pieza. Todo el lecho de polvo se mantiene a una temperatura ligeramente inferior al punto de fusión del material, lo que facilita la fusión parcial por el láser y evita tensiones térmicas. El polvo no sinterizado actúa como soporte natural, eliminando la necesidad de estructuras auxiliares y permitiendo el anidamiento de múltiples piezas en la misma cámara.

## Parámetros de operación típicos
La tabla siguiente recoge los rangos de parámetros de proceso más habituales en sistemas SLS industriales para plásticos. Los valores exactos dependen del material y del equipo.

| Parámetro | Valor típico |
| --- | --- |
| Tipo de láser | CO₂ (10,6 µm) |
| Potencia del láser | 30 – 100 W (regulada electrónicamente) |
| Espesor de capa | 0,08 – 0,15 mm / 0,003 – 0,006 in |
| Temperatura de la cama de polvo | 140 – 175 °C / 284 – 347 °F (según material) |
| Velocidad de escaneo | Hasta 10 m/s / 32,8 ft/s |
| Diámetro del haz focalizado | 0,3 – 0,5 mm / 0,012 – 0,020 in |
| Atmósfera de trabajo | Nitrógeno (O₂ < 1 %) |
| Reutilización de polvo | 50 – 80 % del polvo no sinterizado, previo tamizado |

## Tolerancias dimensionales
La precisión dimensional del SLS está limitada por la resolución del posicionador del láser, la contracción térmica durante el enfriamiento y la posible fusión indeseada de polvo adyacente (crecimiento de grano). En condiciones controladas se pueden alcanzar los siguientes valores típicos:

- Tolerancia lineal: ±0,3 % (con un mínimo de ±0,3 mm / ±0,012 in)
- Precisión en el eje Z: ligeramente inferior a la del plano XY debido a la falta de fresado entre capas
- Rugosidad superficial (Ra): 10 – 15 µm / 394 – 591 µin (acabado polvoriento sin sellado)

## Materiales compatibles
El SLS admite una amplia variedad de polvos termoplásticos y, en máquinas especiales, también metales y cerámicas. Los materiales más comunes para aplicaciones funcionales y prototipado son las poliamidas, elastómeros termoplásticos y sus composites.

| Material | Características principales | Aplicaciones típicas |
| --- | --- | --- |
| Poliamida 12 (PA12) | Buena resistencia mecánica, tenacidad, resistencia química y a la abrasión | Prototipos funcionales, carcasas, soportes, clips, bisagras vivas |
| Poliamida 11 (PA11) | Mayor ductilidad y resistencia al impacto que PA12, menor absorción de agua | Componentes de automoción, tuberías flexibles, aplicaciones médicas |
| Poliamida con carga de vidrio (PA12-GF) | Mayor rigidez y estabilidad térmica; menor contracción | Utillaje, moldes de inyección de bajo volumen, soportes estructurales |
| TPU (poliuretano termoplástico) | Alta flexibilidad, elasticidad y resistencia a la abrasión | Juntas, fuelles, protectores de impacto, calzado deportivo, piezas ergonómicas |
| Polipropileno (PP) | Baja densidad, buena resistencia química y a la fatiga | Baterías de automóvil, envases, bisagras integrales vivas |
| Polvo metálico (DMLS) | Procesos especializados para acero, aluminio, titanio; requiere láser de mayor potencia | Herramentales, piezas de uso final en sectores aeroespacial y médico |

## Propiedades mecánicas por material
Los valores siguientes corresponden a piezas sinterizadas en condiciones estándar, sin postratamiento, salvo indicación. Propiedades como elongación y resistencia pueden mejorarse con sellado superficial o tratamientos térmicos posteriores.

| Propiedad | PA12 | PA11 | PA12-GF (30 % vidrio) | TPU (Shore A 85) |
| --- | --- | --- | --- | --- |
| Densidad (g/cm³) | 1,01 | 1,04 | 1,27 | 1,20 |
| Resistencia a la tracción (MPa / ksi) | 45 – 48 / 6,5 – 7,0 | 49 – 51 / 7,1 – 7,4 | 48 – 55 / 7,0 – 8,0 | 7 – 10 / 1,0 – 1,5 |
| Módulo de elasticidad (GPa / kpsi) | 1,7 – 2,0 / 247 – 290 | 1,8 – 2,1 / 261 – 305 | 3,5 – 4,5 / 508 – 653 | 0,02 – 0,04 / 2,9 – 5,8 |
| Elongación a rotura (%) | 15 – 25 | 20 – 30 | 4 – 8 | 300 – 500 |
| Temperatura de deflexión térmica (HDT, °C / °F) a 0,45 MPa | 95 – 100 / 203 – 212 | 90 – 95 / 194 – 203 | 130 – 145 / 266 – 293 | 60 – 70 / 140 – 158 |
| Absorción de agua en 24 h (%) | 0,5 – 0,6 | 0,3 – 0,4 | 0,4 – 0,5 | < 0,1 |

## Ventajas y limitaciones
**Ventajas principales**
- Amplia gama de materiales termoplásticos que aproximan el comportamiento de plásticos de ingeniería como nailon o polipropileno, permitiendo bisagras vivas y piezas funcionales.
- No requiere estructuras de soporte: el polvo no sinterizado sostiene la pieza durante la construcción, lo que facilita geometrías complejas con voladizos y el anidamiento de múltiples componentes en un solo lote.
- Mayor resistencia mecánica que las piezas de SLA; las propiedades pueden ser comparables a las del mismo material procesado por inyección.
- El polvo no sinterizado es reutilizable en alto porcentaje, reduciendo el desperdicio.
- El postprocesado inmediato consiste principalmente en eliminar el polvo sobrante con cepillo o aire comprimido, sin necesidad de curado adicional.

**Limitaciones**
- Superficie porosa y polvorienta que requiere sellado para aplicaciones estéticas o estancas. El sellado, sin embargo, refuerza la pieza.
- La precisión en el eje Z puede ser inferior a la del plano XY debido a la ausencia de operaciones de fresado entre capas y a la variabilidad térmica del proceso.
- El acabado superficial es rugoso (Ra 10‑15 µm) en comparación con SLA, lo que lo hace menos adecuado para modelos de apariencia donde se exija alta definición de detalle.
- Puede aparecer exceso de material fusionado en la superficie si la temperatura de la cama de polvo se descontrola, dificultando la repetibilidad.
- Las piezas completamente cerradas y huecas requieren salidas de drenaje para el polvo no sinterizado; de lo contrario, permanece en el interior y añade peso.

## Guía de selección
La decisión de emplear SLS frente a otras tecnologías aditivas debe basarse en los requisitos funcionales, el acabado superficial admisible y el presupuesto.

- **SLS es preferible cuando** se necesita resistencia mecánica similar a la de un termoplástico de ingeniería, capacidad de producir bisagras vivas, piezas sin soportes o series cortas de componentes funcionales.
- **SLA puede ser mejor si** la prioridad es un acabado superficial liso y un alto nivel de detalle, y si la fragilidad de las resinas fotocurables es aceptable.
- **FDM es una alternativa más económica** si la resistencia requerida es menor y se puede tolerar un acabado escalonado, especialmente para prototipos de forma y ajuste simples.
- **DMLS (o SLM) es la opción cuando** se necesite una pieza metálica densa con propiedades mecánicas equivalentes a las de forja, aunque con un coste mucho mayor y limitaciones en el tamaño de la cámara.

## Aplicaciones comunes
- Prototipado funcional de conjuntos mecánicos, clips, enganches y carcasas electrónicas.
- Series cortas de producción sin inversión en utillajes (tiradas de hasta centenas de piezas).
- Fabricación de utillajes, plantillas y moldes de inyección de bajo volumen.
- Elementos elásticos (juntas, fuelles, protectores) en TPU.
- Componentes de automoción: conductos de ventilación, soportes internos y alojamientos.
- Aplicaciones médicas: modelos anatómicos para planificación quirúrgica, órtesis y prótesis personalizadas.

## Preguntas frecuentes

**¿Qué tolerancia dimensional se puede alcanzar con SLS?**
La tolerancia dimensional típica en SLS es de ±0,3 % con un mínimo de ±0,3 mm / ±0,012 in, aunque puede variar entre ±0,25 y ±0,3 mm para piezas pequeñas bien calibradas.

**¿Cuál es la temperatura de precalentamiento de la cama de polvo para PA12?**
La cama de polvo de PA12 se precalienta a 170 °C / 338 °F, manteniéndose entre 168 y 172 °C para asegurar la sinterización sin fusión completa.

**¿Cuánto tiempo requiere una impresión SLS de un lote típico?**
El tiempo medio de impresión de una cámara de 300 x 300 x 300 mm / 11,8 x 11,8 x 11,8 in es de 4 a 12 horas, dependiendo del volumen de llenado y de la altura total de las piezas.

**¿Cuál es la velocidad de escaneo del láser en SLS?**
La velocidad de escaneo habitual del láser de CO₂ alcanza hasta 10 m/s / 32,8 ft/s, permitiendo trazados rápidos de la sección transversal.

**¿Qué porcentaje de polvo no sinterizado se puede reutilizar?**
Entre el 50 % y el 80 % del polvo no sinterizado puede reutilizarse tras tamizado y mezcla con material virgen, siempre que no haya sufrido degradación térmica significativa.

**¿Qué resistencia a la tracción ofrece el nailon PA12 sinterizado?**
Las piezas de PA12 sinterizadas alcanzan una resistencia a la tracción de 45 a 48 MPa / 6,5 a 7,0 ksi, comparable a la del nailon moldeado por inyección.

**¿Qué diámetro tiene el haz láser en un equipo SLS estándar?**
El diámetro del haz focalizado en el plano de sinterización suele ser de 0,3 a 0,5 mm / 0,012 a 0,020 in, lo que define la anchura mínima de trazo.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sls.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/selective-laser-sintering-sls
