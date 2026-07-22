---
title: "Fresado velocidades y avances por material"
sidebar:
  label: "Fresado velocidades y avances por material"
description: "Ficha tecnica: Fresado velocidades y avances por material"
keywords: ["milling speeds feeds by material CNC mill rpm", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "milling"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción general

El fresado es un proceso de mecanizado con herramienta rotativa de múltiples filos, donde la velocidad de corte y el avance determinan la calidad superficial, la vida útil de la herramienta y la productividad. La velocidad de corte (Vc) representa la velocidad tangencial del filo sobre la superficie de la pieza, expresada en m/min o en pies de superficie por minuto (sfm). El avance por diente (fz) indica el espesor de material que cada diente de la fresa arranca en una revolución y se mide en mm/diente o in/diente. A partir de estos parámetros se calculan las revoluciones por minuto del husillo (RPM) y la velocidad de avance de la mesa. La selección correcta depende del material de la pieza, del tipo de herramienta (HSS, carburo, recubrimientos), de la rigidez del sistema y de la operación (desbaste o acabado).

## Parámetros operativos

### Velocidades de corte por material

Las velocidades de corte para fresado se recopilan en la tabla siguiente, con valores de partida para herramientas de acero rápido (HSS) y carburo integral sin recubrimiento. Los intervalos inferiores corresponden a operaciones de desbaste o condiciones de baja rigidez; los superiores, a acabados ligeros. El uso de refrigerante permite incrementar la velocidad hasta un 25 %.

| Material | Velocidad de corte HSS (m/min / sfm) | Velocidad de corte carburo (m/min / sfm) |
| --- | --- | --- |
| Acero bajo carbono (AISI 1018) | 21 – 30 / 70 – 100 | 90 – 150 / 300 – 500 |
| Acero aleado (4140 recocido) | 12 – 18 / 40 – 60 | 60 – 105 / 200 – 350 |
| Acero inoxidable (AISI 304) | 9 – 15 / 30 – 50 | 45 – 90 / 150 – 300 |
| Fundición gris (G25) | 15 – 24 / 50 – 80 | 60 – 120 / 200 – 400 |
| Aluminio forjado (6061‑T6) | 90 – 180 / 300 – 600 | 240 – 600 / 800 – 2000 |
| Latón rojo (C230) | 45 – 90 / 150 – 300 | 150 – 300 / 500 – 1000 |
| Bronce maquinable (C932) | 24 – 45 / 80 – 150 | 90 – 180 / 300 – 600 |
| Titanio (Ti‑6Al‑4V) | 4,6 – 9 / 15 – 30 | 30 – 60 / 100 – 200 |
| Plásticos (PVC, PE) | 30 – 60 / 100 – 200 | 120 – 240 / 400 – 800 |
| Madera blanda (pino) | 180 – 300 / 600 – 1000 | — |
| Madera dura (roble) | 120 – 240 / 400 – 800 | — |

### Avances por diente típicos

El avance por diente (fz) depende de la maquinabilidad del material y del diámetro de la fresa. Los valores siguientes corresponden a fresas de mango con diámetro 10 – 25 mm; para diámetros menores, reducir el avance hasta un 50 %.

| Material | Avance por diente HSS (mm/diente / in/diente) | Avance por diente carburo (mm/diente / in/diente) |
| --- | --- | --- |
| Aluminio y aleaciones ligeras | 0,05 – 0,15 / 0.002 – 0.006 | 0,10 – 0,25 / 0.004 – 0.010 |
| Aceros al carbono y de baja aleación | 0,03 – 0,10 / 0.001 – 0.004 | 0,05 – 0,15 / 0.002 – 0.006 |
| Acero inoxidable | 0,02 – 0,08 / 0.0008 – 0.0032 | 0,04 – 0,12 / 0.0016 – 0.0048 |
| Fundición de hierro | 0,02 – 0,08 / 0.0008 – 0.0032 | 0,04 – 0,12 / 0.0016 – 0.0048 |
| Titanio y superaleaciones | 0,01 – 0,05 / 0.0004 – 0.0020 | 0,03 – 0,08 / 0.0012 – 0.0032 |
| Plásticos | 0,05 – 0,20 / 0.002 – 0.008 | 0,10 – 0,30 / 0.004 – 0.012 |

### Cálculo de RPM y velocidad de avance

Para convertir la velocidad de corte a revoluciones del husillo:

**RPM** = (1000 × Vc) / (π × D) si Vc está en m/min y D en mm.

En unidades imperiales: **RPM** = (12 × Vc) / (π × D) = (3,82 × Vc) / D, con Vc en sfm y D en pulgadas.

La velocidad de avance de la mesa se obtiene con:

**Vf** (mm/min) = fz (mm/diente) × z (número de dientes) × RPM

**Ejemplo**: fresado de aluminio 6061 con fresa de carburo integral de D = 10 mm, z = 3, Vc = 350 m/min, fz = 0,15 mm/diente.
RPM = (1000 × 350) / (π × 10) ≈ 11 141 rpm.
Vf = 0,15 × 3 × 11 141 ≈ 5013 mm/min (197 in/min).

## Tolerancias típicas

El fresado convencional permite alcanzar las siguientes tolerancias dimensionales y de acabado superficial, dependiendo del estado de la máquina, la herramienta y la estrategia de corte.

| Parámetro | Tolerancia típica |
| --- | --- |
| Tolerancia dimensional general | ±0,10 mm / ±0.004 in |
| Tolerancia dimensional de precisión | ±0,025 mm / ±0.001 in |
| Repetibilidad posicional | ±0,05 mm / ±0.002 in |
| Rugosidad superficial (Ra) desbaste | 3,2 – 6,3 µm / 126 – 250 µin |
| Rugosidad superficial (Ra) acabado | 0,8 – 1,6 µm / 32 – 63 µin |
| Planitud en superficies fresadas (100 mm de longitud) | 0,02 – 0,05 mm / 0.0008 – 0.002 in |

## Materiales aplicables

El fresado es viable en prácticamente cualquier material maquinable: aceros al carbono y aleados, aceros inoxidables, fundiciones, aluminio y sus aleaciones, cobre, latón, bronce, titanio, superaleaciones termorresistentes, plásticos (termoplásticos y termoestables), composites y madera. La selección del material condiciona la velocidad de corte, el avance y el tipo de herramienta. Materiales con dureza superior a 45 HRC requieren fresas de carburo o CBN y parámetros muy controlados para evitar astillamiento prematuro del filo.

## Ventajas y limitaciones

**Ventajas**  
- Alta tasa de remoción de material (MRR), especialmente en desbaste con fresas de plaquita intercambiable.  
- Excelente flexibilidad geométrica: permite generar superficies planas, contornos, ranuras y cavidades complejas.  
- Acabados superficiales de calidad Ra 0,8 µm (32 µin) alcanzables sin rectificado.  
- Proceso fácilmente automatizable y monitorizable mediante CNC.

**Limitaciones**  
- Elevado desgaste de herramienta en materiales duros o abrasivos; necesarios recubrimientos de alto rendimiento.  
- Propenso a vibraciones (chatter) si la rigidez del sistema husillo‑herramienta‑pieza es insuficiente.  
- Tiempo de preparación significativo para series cortas o piezas muy complejas.  
- Zonas internas con esquinas vivas requieren fresas de diámetro muy pequeño, limitando la velocidad de avance.

## Guía de selección

1. **Identificar material y estado**: dureza, resistencia, presencia de incrustaciones o cascarilla.  
2. **Elegir material de la herramienta**:
   - HSS para series cortas, materiales blandos o donde la velocidad no es prioritaria.
   - Carburo integral (WC-Co) para producciones medias y altas, materiales hasta 45 HRC.
   - Metal duro con recubrimiento (TiAlN, TiCN) para aceros duros, inoxidables y altas temperaturas.
3. **Fijar la velocidad de corte** según la tabla de parámetros operativos, comenzando por el valor inferior y ajustando según comportamiento del filo.
4. **Seleccionar avance por diente** en función del diámetro de la fresa y de la operación (desbaste: mayor fz; acabado: menor fz). Reducir para radios de esquina agudos o entradas en rampa.
5. **Calcular RPM y velocidad de avance** con las fórmulas indicadas. Verificar que no excedan las capacidades de la máquina (máximo RPM del husillo, velocidad de avance máxima y potencia disponible).
6. **Ajustar profundidad de corte (ap)** y **ancho de corte (ae)**. Para desbaste, se recomienda ap ≤ 1 × D y ae ≤ 0,5 × D; en acabado, ap hasta 1,5 mm (0.06 in) y ae = diámetro de la fresa si se busca remoción rápida.  
7. **Validar el proceso** con primera pieza, midiendo tolerancias y evaluando el acabado y la formación de viruta.

## Preguntas frecuentes (FAQ)

**1. ¿Qué velocidad de corte se recomienda para fresar aluminio con herramientas de carburo?**  
Se recomienda entre 240 y 600 m/min (800 – 2000 sfm) para aleaciones forjadas como 6061‑T6. Con refrigerante por inundación y fresas de metal duro afiladas, los extremos superiores alcanzan 800 m/min (2600 sfm) sin riesgo de filo recrecido.

**2. ¿Cuál es el avance por diente adecuado para acero bajo carbono con fresa de HSS?**  
El rango típico es 0,03 – 0,10 mm/diente (0.001 – 0.004 in/diente). Para desbaste se puede llegar a 0,12 mm/diente (0.005 in/diente) si la potencia del husillo lo permite, siempre vigilando la formación de viruta.

**3. ¿Qué RPM debe tener el husillo para una fresa de 12 mm en acero inoxidable 304?**  
Con Vc = 12 m/min (40 sfm) para HSS, RPM = (1000 × 12) / (π × 12) ≈ 318 rpm. Con carburo a Vc = 60 m/min (200 sfm) la velocidad sube a 1590 rpm. Valores tan bajos son necesarios para evitar endurecimiento por deformación.

**4. ¿Cuál es la velocidad de avance máxima en fresado de acero con fresa de carburo de 10 mm?**  
Si se toma Vc = 120 m/min (400 sfm) y fz = 0,15 mm/diente (0.006 in/diente) con 4 dientes, RPM = 3820 rpm y Vf = 0,15 × 4 × 3820 = 2292 mm/min (90 in/min). En máquinas rígidas la velocidad real puede superar 3000 mm/min si se reduce la profundidad de corte.

**5. ¿Qué tolerancia dimensional se puede esperar en un fresado de acabado?**  
Se alcanza habitualmente ±0,025 mm (±0.001 in) en centros de mecanizado de precisión con fresas bien afiladas y estrategias de compensación de radio. Con condiciones menos controladas, la tolerancia se sitúa en ±0,10 mm (±0.004 in).

**6. ¿Es necesario refrigerante al fresar titanio con herramienta de carburo?**  
Sí, siempre. Con velocidades de corte tan bajas como 4,6 – 9 m/min (15 – 30 sfm) la temperatura en la zona de corte es extrema. El refrigerante de alta presión (70–100 bar) es imprescindible para evacuar la viruta y mantener el filo; de lo contrario, el desgaste se acelera en segundos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-bit-speed-hardwood-softwood-d_1451.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/gear-milling
