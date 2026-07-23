---
title: "Resortes de compresión cálculo"
sidebar:
  label: "Resortes de compresión cálculo"
description: "Ficha tecnica: Resortes de compresión cálculo"
keywords: ["compression spring calculation stiffness wire", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "compression-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Descripción general  
El diseño de resortes de compresión abarca constantes de rigidez desde 0,1 N/mm (0.57 lb/in) en mecanismos ligeros hasta 49 050 N/m (280 lb/in) en suspensiones de vehículos. Estos elementos elásticos almacenan energía mecánica al ser comprimidos axialmente y la liberan al recuperar su forma original. Sus aplicaciones incluyen suspensión automotriz, válvulas de motor, sistemas de retorno en mecanismos y dispositivos de precisión.

## Principio de funcionamiento  
La ley de Hooke establece que la fuerza de compresión es proporcional a la deformación, con una constante de rigidez *k* que en el ejemplo de una suspensión de automóvil de 2000 kg alcanza 49 050 N/m (280 lb/in). Cuando un resorte helicoidal se comprime, cada vuelta se torsiona elásticamente, generando un esfuerzo cortante que se distribuye a lo largo del alambre. La relación fuerza‑deformación es lineal siempre que no se supere el límite elástico del material; más allá de este punto aparecen deformaciones permanentes y la ley de Hooke deja de ser válida.

## Fórmulas de cálculo  
La rigidez *k* de un resorte helicoidal de compresión se expresa en N/m y es proporcional al módulo de cizalladura *G* del material, que para acero al carbono es de 79,3 GPa (11,5×10⁶ psi). Las ecuaciones esenciales de diseño son:

| Ecuación | Nomenclatura |
|---|---|
| *F* = *k*·*x* | *F*: fuerza (N), *x*: compresión (mm o m), *k*: constante de rigidez |
| *k* = (*G*·*d*⁴)/(8·*D*³·*n*) | *G*: módulo de cizalladura (N/mm²), *d*: diámetro de alambre (mm), *D*: diámetro medio de espira (mm), *n*: número de espiras activas |
| *τ* = *K*_w · (8·*F*·*D*)/(π·*d*³) | *τ*: esfuerzo cortante máximo (N/mm²), *K*_w: factor de Wahl (corrección por curvatura y cortante directo) |

**Ejemplo práctico:**  

Para el vehículo de 2000 kg (500 kg por rueda) mencionado anteriormente, la fuerza estática sobre cada resorte es *F* = 500 kg × 9,81 m/s² = 4905 N (1103 lbf). Si la compresión máxima admisible es de 0,1 m (3,94 in), la constante requerida resulta:

*k* = 4905 N / 0,1 m = 49 050 N/m (≈ 280 lb/in)

Se recomienda sobredimensionar este valor al doble para absorber cargas dinámicas.

**Rangos típicos de rigidez según aplicación:**

| Aplicación | Constante de rigidez *k* (N/mm) | Constante de rigidez *k* (lb/in) |
|---|---|---|
| Bolígrafo | 0,05 – 0,5 N/mm | 0,29 – 2,85 lb/in |
| Teclado de membrana | 0,5 – 2 N/mm | 2,85 – 11,4 lb/in |
| Válvula de motor | 5 – 30 N/mm | 28,5 – 171 lb/in |
| Suspensión automotriz ligera | 20 – 60 N/mm | 114 – 342 lb/in |
| Amortiguador de maquinaria pesada | 60 – 200 N/mm | 342 – 1140 lb/in |

## Parámetros geométricos  
Los diámetros de alambre normalizados para resortes de compresión oscilan entre 0,1 mm (0.004 in) y 10 mm (0.394 in) según la serie de números preferentes. La tabla siguiente reúne los parámetros dimensionales más comunes en el diseño de resortes cilíndricos helicoidales:

| Diámetro de alambre *d* mm / in | Diámetro exterior *D*ₑ típico mm / in | Longitud libre *L*₀ mm / in |
|---|---|---|
| 0,1 mm / 0.004 in | 0,8 – 1,2 mm / 0.031 – 0.047 in | 5 – 20 mm / 0.20 – 0.79 in |
| 0,3 mm / 0.012 in | 2,0 – 3,5 mm / 0.079 – 0.138 in | 10 – 40 mm / 0.39 – 1.57 in |
| 0,5 mm / 0.020 in | 3,0 – 5,0 mm / 0.118 – 0.197 in | 15 – 60 mm / 0.59 – 2.36 in |
| 1,0 mm / 0.039 in | 6,0 – 10 mm / 0.236 – 0.394 in | 20 – 100 mm / 0.79 – 3.94 in |
| 2,0 mm / 0.079 in | 12 – 20 mm / 0.472 – 0.787 in | 40 – 200 mm / 1.57 – 7.87 in |
| 5,0 mm / 0.197 in | 30 – 50 mm / 1.18 – 1.97 in | 80 – 300 mm / 3.15 – 11.8 in |
| 10,0 mm / 0.394 in | 60 – 100 mm / 2.36 – 3.94 in | 150 – 500 mm / 5.91 – 19.7 in |

El índice del resorte (*C* = *D*/*d*) suele mantenerse entre 4 y 12 para facilitar la fabricación y evitar esfuerzos excesivos por curvatura.

## Materiales y propiedades  
Los aceros para resortes poseen un módulo elástico transversal *G* de aproximadamente 79,3 GPa (11,5×10⁶ psi), ofreciendo una alta resistencia a la fatiga. A continuación se resumen los materiales más empleados y sus propiedades relevantes:

| Material | Módulo de cizalladura *G* GPa / Mpsi | Tensión cortante admisible (estática) MPa / ksi |
|---|---|---|
| Acero al carbono para muelles (AISI 1080) | 79,3 GPa / 11,5 Mpsi | 550 – 700 MPa / 80 – 102 ksi |
| Acero inoxidable AISI 302/304 | 70 GPa / 10,2 Mpsi | 400 – 600 MPa / 58 – 87 ksi |
| Alambre de piano (ASTM A228) | 81 GPa / 11,8 Mpsi | 620 – 860 MPa / 90 – 125 ksi |
| Aleación cromo-silicio (AISI 9254) | 79 GPa / 11,5 Mpsi | 700 – 900 MPa / 102 – 131 ksi |

La tensión admisible dinámica se reduce típicamente un 30–40 % para garantizar una vida a fatiga superior a 10⁶ ciclos.

## Tabla de selección por aplicación  
Esta tabla orienta la selección de resortes de compresión para cargas estáticas de hasta 5000 N (1124 lbf), cubriendo desde bolígrafos hasta prensas industriales. Los valores son orientativos y deben verificarse con los cálculos de tensión y deformación.

| Aplicación | Diámetro alambre *d* mm / in | Constante de rigidez *k* N/mm / lb/in | Carga máxima *F*ₘₐₓ N / lbf |
|---|---|---|---|
| Herramientas de escritura | 0,2 – 0,4 mm / 0.008 – 0.016 in | 0,1 – 0,5 N/mm / 0.57 – 2.85 lb/in | 2 – 10 N / 0,45 – 2,25 lbf |
| Microinterruptores | 0,3 – 0,5 mm / 0.012 – 0.020 in | 0,5 – 2 N/mm / 2.85 – 11,4 lb/in | 5 – 20 N / 1,12 – 4,5 lbf |
| Válvulas de motor | 2,0 – 4,0 mm / 0.079 – 0.157 in | 10 – 40 N/mm / 57 – 228 lb/in | 200 – 800 N / 45 – 180 lbf |
| Suspensión automotriz (turismo) | 10 – 14 mm / 0.394 – 0.551 in | 20 – 60 N/mm / 114 – 342 lb/in | 2000 – 5000 N / 450 – 1124 lbf |
| Prensas y utillajes | 8 – 16 mm / 0.315 – 0.630 in | 60 – 200 N/mm / 342 – 1140 lb/in | 5000 – 15000 N / 1124 – 3372 lbf |

## Consideraciones de montaje  
Un resorte de compresión con una relación de esbeltez *L*₀/*D* > 4,0 necesita guiado para evitar pandeo lateral. Las terminaciones de las espiras influyen en el comportamiento de la fuerza: los extremos aplanados y esmerilados proporcionan un apoyo estable y reducen la excentricidad. El montaje habitual se realiza entre dos superficies planas, con un alojamiento que limite el desplazamiento radial. En aplicaciones cíclicas se debe aplicar una precarga mínima para eliminar holguras y vibraciones; se recomienda una compresión inicial de al menos el 10 % de la carrera máxima.

## Preguntas frecuentes (FAQ)

**¿Qué es la constante de rigidez *k* y cómo se calcula?**  
La constante *k* se calcula como *k* = *F*/*x*; para un resorte helicoidal se determina mediante *k* = (*G*·*d*⁴)/(8·*D*³·*n*), donde *d* y *D* en mm, y *G* ≈ 79,3 GPa (11,5 Mpsi). En el ejemplo de la suspensión de 2000 kg, cada resorte presenta *k* = 49 050 N/m (280 lb/in).

**¿Cuál es la carga máxima que puede soportar un resorte de compresión?**  
La carga máxima corresponde al esfuerzo cortante admisible del material, que para un acero inoxidable AISI 302 es de 500 MPa (72,5 ksi). Se debe verificar que *τ*ₘₐₓ = *K*_w·(8·*F*·*D*)/(π·*d*³) no supere ese valor.

**¿Qué sucede si se excede la deformación máxima?**  
El resorte entra en régimen plástico con deformación permanente; para un acero al carbono, el límite elástico ronda los 1200 MPa (174 ksi) en tracción, pero el esfuerzo cortante de fluencia se sitúa típicamente en el 60 % de ese valor.

**¿Cómo se evita el pandeo durante la compresión?**  
Se recomienda emplear guías o alojamientos cuando la esbeltez supera 4:1. Un resorte con *L*₀ = 200 mm (7,87 in) y *D*ₑ = 40 mm (1,57 in) presenta una esbeltez de 5 y precisa guiado.

**¿Qué influencia tiene el número de espiras activas?**  
La rigidez *k* es inversamente proporcional a *n*: reducir *n* de 10 a 5 duplica la constante. Un resorte con 5 espiras activas puede alcanzar *k* = 100 N/mm (570 lb/in) allí donde uno de 10 espiras daría 50 N/mm (285 lb/in).

**¿Por qué se aplica un factor de Wahl en el cálculo de tensiones?**  
El factor de Wahl *K*_w corrige el cortante directo y la concentración de esfuerzos por curvatura. Para un índice *C* = 6, *K*_w ≈ 1,25, lo que incrementa un 25 % el esfuerzo nominal calculado con *F* y *D*.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hookes-law-force-spring-constant-d_1853.html
