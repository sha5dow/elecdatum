---
title: "K-factor aluminio 6061"
sidebar:
  label: "K-factor aluminio 6061"
description: "Ficha tecnica: K-factor aluminio 6061"
keywords: ["6061 aluminum sheet metal k-factor", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "sheet-metal-kfactor"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Definición y uso del K-factor en plegado de chapa

El factor K (K‑factor) representa la relación entre la distancia del eje neutro a la cara interior del doblez y el espesor del material, variando típicamente entre 0,3 y 0,5 para aluminio 6061. En el plegado de chapa, este coeficiente adimensional permite calcular con precisión la longitud desarrollada y la deducción por curvatura al predecir la posición de la fibra que no sufre alargamiento ni compresión. La aleación 6061, con módulo elástico de 68 GPa / 9 900 ksi y amplio rango de elongación (12–25 % según Wikipedia), requiere un ajuste cuidadoso del K‑factor en función del temple y del radio de plegado para lograr tolerancias de ±0,1 mm / ±0,004 in en el desarrollo.

## Valores de K-factor para aluminio 6061

El K‑factor para aluminio 6061‑T6 en condiciones estándar de plegado (radio interior igual al espesor) es de 0,33, mientras que para 6061‑O asciende a 0,40. Estos valores se derivan de ensayos de flexión en frío y reflejan la mayor ductilidad del material recocido. La tabla siguiente resume los K‑factors más comunes en función del estado de tratamiento térmico y del cociente entre el radio interior (R) y el espesor (T).

| Temple del aluminio 6061 | R/T ≤ 1 | R/T = 2 | R/T = 3 | R/T ≥ 5 |
|---------------------------|---------|---------|---------|---------|
| O (recocido)              | 0,40    | 0,42    | 0,44    | 0,45    |
| T4                        | 0,37    | 0,39    | 0,41    | 0,43    |
| T6 / T651                 | 0,33    | 0,35    | 0,37    | 0,40    |

## Tabla de K-factor según espesor y radio de plegado

Para geometrías de plegado típicas en aluminio 6061‑T6, el factor K varía con el espesor y el radio interior. La siguiente tabla proporciona los valores recomendados, junto con la longitud de la fibra neutra para un ángulo de 90°.

| Espesor (mm / in) | Radio interior recomendado (mm / in) | R/T | K‑factor | Desarrollo por doblez 90° (mm / in) |
|-------------------|--------------------------------------|-----|----------|--------------------------------------|
| 0,8 / 0.031       | 0,8 / 0.031                          | 1,0 | 0,33     | 1,25 / 0.0492                        |
| 1,0 / 0.039       | 1,0 / 0.039                          | 1,0 | 0,33     | 1,56 / 0.0614                        |
| 1,5 / 0.059       | 1,5 / 0.059                          | 1,0 | 0,33     | 2,34 / 0.0921                        |
| 2,0 / 0.079       | 2,0 / 0.079                          | 1,0 | 0,34     | 3,11 / 0.1224                        |
| 3,0 / 0.118       | 3,0 / 0.118                          | 1,0 | 0,34     | 4,67 / 0.1839                        |
| 1,5 / 0.059       | 3,0 / 0.118 (R generoso)             | 2,0 | 0,35     | 2,51 / 0.0988                        |
| 3,0 / 0.118       | 6,0 / 0.236 (R generoso)             | 2,0 | 0,35     | 5,03 / 0.1980                        |

## Factores que afectan al K-factor en aluminio 6061

La resistencia a la tracción, que oscila entre 124 MPa / 18 ksi (O) y 290 MPa / 42 ksi (T6), y la ductilidad (elongación de 12–25 %) son los principales determinantes del K‑factor. El temple T6, artificialmente envejecido, endurece la matriz de aluminio y desplaza el eje neutro hacia el interior de la doblez, reduciendo el K‑factor a 0,33–0,37. En recocido (O), el material fluye con mayor facilidad y el K‑factor alcanza 0,40–0,45. Otros parámetros que influyen son el radio de plegado respecto al espesor (R/T) y la velocidad de deformación; un aumento de R/T eleva el K‑factor porque el gradiente de deformación es menos severo.

## Cálculo de la longitud desarrollada y deducción de plegado

La longitud desarrollada (L) se calcula mediante la fórmula L = A + B + BA, donde A y B son las longitudes rectas de las alas y BA es la tolerancia de plegado (Bend Allowance). Para un ángulo de doblez θ, BA = (π/180) · θ · (R + K · T). La deducción de plegado (BD) se obtiene como BD = 2 · (R + T) – BA. Ejemplo para chapa de aluminio 6061‑T6 de 1,5 mm / 0.059 in, radio interior 1,5 mm / 0.059 in, K = 0,33, θ = 90°: BA = 2,34 mm / 0.0921 in; BD = 4,5 mm / 0.1772 in – 2,34 mm / 0.0921 in = 2,16 mm / 0.0850 in.

## Tolerancias típicas en el plegado

La variabilidad del K‑factor en aluminio 6061, debida a diferencias de temple y homogeneidad del lote, impone una tolerancia de ±0,02 sobre el valor nominal del K‑factor. Esto se traduce en una incertidumbre en el desarrollo de aproximadamente ±0,08 mm / ±0.003 in para espesores de 1,5 mm / 0.059 in. Las tolerancias dimensionales finales del ala doblada suelen situarse en ±0,2 mm / ±0.008 in cuando se emplean utillajes de precisión, y son validadas mediante calibración por lotes.

## Materiales aplicables y su comparativa

Aunque el K‑factor es intrínseco a cada aleación, la base de conocimiento del aluminio 6061 sirve como referencia para otras de la serie 6xxx. Sus propiedades mecánicas —densidad 2,70 g/cm³ / 0.098 lb/in³ y conductividad térmica de 151‑202 W/(m·K)— lo hacen comparable al 5052‑H32 (K ≈ 0,40) y al acero dulce (K ≈ 0,45). Sin embargo, la mayor rigidez del 6061‑T6 (límite elástico 240 MPa / 35 ksi) requiere un K‑factor más bajo que en aleaciones blandas.

## Ventajas del uso del K-factor en aluminio 6061

La aplicación del K‑factor específico para 6061‑T6 permite una precisión de desarrollo de ±0,1 mm / ±0.004 in en producción seriada, reduciendo el desperdicio de material y el tiempo de ajuste. La buena soldabilidad y la amplia disponibilidad del 6061 en temple T6 convierten a este K‑factor en un estándar de facto en aplicaciones aeroespaciales y de automoción. Además, el coeficiente de dilatación lineal de 2,32×10⁻⁵ K⁻¹ (1,29×10⁻⁵ °F⁻¹) asegura una estabilidad dimensional predecible tras el plegado en un amplio rango de temperaturas.

## Limitaciones

El K‑factor de 0,33 para 6061‑T6 solo es válido cuando el radio interior es al menos igual al espesor; radios más agresivos (R/T < 0,5) provocan agrietamiento y variación no lineal del K‑factor. La influencia de la dirección de laminado, especialmente en espesores mayores de 3 mm / 0.118 in, puede generar diferencias de K‑factor de hasta 0,05 entre plegados longitudinales y transversales. Por último, el revenido desigual a lo largo de una misma pieza obliga a verificar el temple real antes de adoptar el valor tabulado.

## Guía de selección del K-factor

Seleccione el K‑factor según el temple y la relación R/T, utilizando 0,33 como punto de partida para 6061‑T6 con R/T = 1 y ajustando a 0,40 para 6061‑O. Para diseños con tolerancias críticas (< 0,15 mm / 0.006 in en la longitud desarrollada), realice un lote de prueba y calcule el K‑factor empírico a partir de la pieza doblada, corrigiendo la tabla con el valor medido. En piezas multicurvatura, asigne un K‑factor independiente a cada radio para mantener la precisión global.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/thermal-conductivity-metals-d_858.html
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/vertikal-cnc-svarvning
