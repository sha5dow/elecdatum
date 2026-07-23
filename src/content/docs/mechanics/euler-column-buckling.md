---
title: "Pandeo de columnas Euler"
sidebar:
  label: "Pandeo de columnas Euler"
description: "Ficha tecnica: Pandeo de columnas Euler"
keywords: ["Euler column buckling critical load length factor", "mechanics"]
category: "mechanics"
topic: "columns"
subcategory: "euler-buckling"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Descripción
El pandeo de Euler describe la carga crítica de compresión para columnas esbeltas, calculada con la fórmula derivada en 1744 por Leonhard Euler. Una columna recta cargada axialmente permanece estable hasta que la carga alcanza un valor crítico; superado este, se produce un pandeo súbito con deflexiones laterales. La teoría asume comportamiento elástico lineal, perfecta alineación y ausencia de esfuerzos iniciales. La carga crítica no depende de la resistencia del material, sino de su rigidez a flexión (EI) y de la longitud efectiva de la columna.

## Fórmula de Euler
La carga crítica de pandeo elástico está dada por la siguiente expresión, donde la constante π² ≈ 9,8696:

\[
P_{cr} = \frac{\pi^2 E I}{(L_{eff})^2} = \frac{\pi^2 E I}{(K L)^2}
\]

| Magnitud | Símbolo | Unidades (métricas / imperiales) |
| --- | --- | --- |
| Carga crítica de pandeo | \(P_{cr}\) | N / lbf |
| Módulo de elasticidad | \(E\) | Pa (N/m²) / psi |
| Momento de inercia mínimo | \(I\) | m⁴ / in⁴ |
| Longitud efectiva de pandeo | \(L_{eff}\) | m / in |
| Longitud real de la columna | \(L\) | m / in |
| Factor de longitud efectiva | \(K\) | adimensional |

Para el caso ideal de columna biarticulada (K=1), la fórmula se simplifica a \(P_{cr} = \pi^2 E I / L^2\). La tensión crítica de pandeo se obtiene dividiendo por el área de la sección transversal \(A\):

\[
\sigma_{cr} = \frac{P_{cr}}{A} = \frac{\pi^2 E}{(L_{eff}/r)^2}
\]

donde \(r = \sqrt{I/A}\) es el radio de giro. La validez se limita a \(\sigma_{cr} < \sigma_y\), con \(\sigma_y\) el límite elástico del material.

## Suposiciones del modelo
Las 10 hipótesis fundamentales que garantizan la aplicabilidad de la fórmula son:

1. El material es homogéneo e isótropo.
2. La carga compresiva es exclusivamente axial.
3. La columna carece de tensiones iniciales.
4. Se desprecia el peso propio de la columna.
5. La columna es inicialmente perfectamente recta (sin excentricidad de la carga).
6. Los apoyos articulados no presentan fricción (no transmiten momento) y los empotramientos son rígidos (impiden rotación).
7. La sección transversal es uniforme en toda la longitud.
8. La tensión directa es muy pequeña comparada con la tensión de flexión; el material se mantiene en el rango elástico lineal.
9. La longitud de la columna es mucho mayor que las dimensiones de la sección transversal.
10. La falla ocurre únicamente por pandeo, siempre que la tensión crítica no supere el límite elástico.

## Longitud efectiva y factor K
La longitud efectiva de pandeo, \(L_{eff} = K L\), adapta la fórmula original de Euler para cualquier condición de apoyo. Se define como la distancia entre los puntos de momento flector nulo en la forma pandeada. Para columnas con extremos simplemente apoyados, K = 1. Valores de K menores que 1 corresponden a configuraciones que restringen el pandeo, aumentando la carga crítica; valores mayores que 1 reducen la resistencia.

En diseño práctico se utilizan factores de longitud efectiva **ingenieriles** (\(K_{dis}\)) que incrementan el valor teórico entre un 10 % y un 20 % para cubrir imperfecciones, rozamientos parciales y excentricidades. La tabla siguiente recoge los valores teóricos y los recomendados para diseño, basados en las condiciones de apoyo extremas.

## Factores de longitud efectiva según condiciones de apoyo

| Condición de apoyo | K teórico | K diseño (\(K_{dis}\)) |
| --- | --- | --- |
| Libre – Libre | 1,0 | 1,2 |
| Articulado (pinned) – Libre | 1,0 | 1,2 |
| Articulado – Articulado | 1,0 | 1,0 |
| Empotrado – Libre | 2,0 | 2,1 |
| Empotrado – Articulado | 0,707 | 0,8 |
| Empotrado – Guiado | 1,0 | 1,2 |
| Empotrado – Empotrado | 0,5 | 0,65 |
| Guiado – Libre | 2,0 | 2,1 |
| Guiado – Articulado | 2,0 | 2,0 |
| Guiado – Guiado | 1,0 | 1,2 |

*Nota: “Articulado” equivale a apoyos que permiten giro libre pero impiden desplazamiento lateral; “Guiado” impide giro, pero permite desplazamiento lateral; “Empotrado” restringe tanto giro como desplazamiento.*

## Relación de esbeltez
La esbeltez de una columna se cuantifica con el parámetro adimensional \(\lambda\):

\[
\lambda = \frac{L_{eff}}{r} = \frac{K\,L}{r}
\]

donde \(r = \sqrt{I/A}\) es el radio de giro mínimo de la sección. Valores de \(\lambda\) por debajo de un límite crítico \(\lambda_{cr}\) indican que la columna es “corta” y fallará por fluencia antes de pandear elásticamente. Para \(\lambda > \lambda_{cr}\), la columna se considera “larga” y la fórmula de Euler es aplicable. La esbeltez crítica se obtiene igualando la tensión crítica de Euler al límite elástico:

\[
\lambda_{cr} = \sqrt{\frac{\pi^2 E}{\sigma_y}}
\]

Por ejemplo, para un acero con E = 200 GPa (29 000 ksi) y \(\sigma_y = 250\) MPa (36,3 ksi), la esbeltez crítica es aproximadamente 88,9.

## Criterios de diseño
Para seleccionar el método de verificación se compara la esbeltez de la columna con el valor crítico:

- **Columna larga (\(\lambda > \lambda_{cr}\))** → Pandeo elástico gobierna. Se emplea Euler: \(P_{cr} = \pi^2 E I / (K L)^2\) y se aplica un factor de seguridad adecuado (típicamente 1,92 – 2,5 contra pandeo).
- **Columna corta (\(\lambda \le \lambda_{cr}\))** → La falla ocurre por fluencia compresiva o pandeo inelástico. Se utiliza la fórmula parabólica de Johnson o el módulo tangente de Engesser. La tensión admisible se limita a la de fluencia dividida por el coeficiente de seguridad.

En ambos casos, los factores K de diseño de la tabla anterior deben emplearse para tener en cuenta imperfecciones. Si la esbeltez es extremadamente baja (\(\lambda < 10\)), se considera una columna robusta y se diseña únicamente a compresión pura, sin riesgo de pandeo.

## Ejemplo de aplicación
**Enunciado**: Una columna de acero S275 (E = 200 GPa / 29 000 ksi, \(\sigma_y = 275\) MPa / 39,9 ksi) de 3,5 m (137,8 in) de longitud está empotrada en la base y libre en el extremo superior (configuración empotrado-libre). La sección transversal es un tubo circular de diámetro exterior 60 mm (2,36 in) y espesor de pared 5 mm (0,197 in). Calcule la carga crítica de pandeo, la tensión crítica y verifique si la fórmula de Euler es aplicable.

**Cálculo**:
- Área: \(A = \frac{\pi}{4}(d_e^2 - d_i^2) = \frac{\pi}{4}(0,060^2 - 0,050^2) \approx 8,639 \times 10^{-4}\) m² (1,339 in²).
- Momento de inercia (tubo): \(I = \frac{\pi}{64}(d_e^4 - d_i^4) = \frac{\pi}{64}(0,060^4 - 0,050^4) \approx 3,293 \times 10^{-7}\) m⁴ (0,791 in⁴).
- Radio de giro: \(r = \sqrt{I/A} = \sqrt{3,293\times10^{-7} / 8,639\times10^{-4}} \approx 0,0195\) m (0,769 in).
- Longitud efectiva (empotrado-libre, K diseño = 2,1): \(L_{eff} = 2,1 \times 3,5 = 7,35\) m (289 in).
- Esbeltez: \(\lambda = L_{eff} / r = 7,35 / 0,0195 \approx 377\).
- Esbeltez crítica para acero S275: \(\lambda_{cr} = \sqrt{\pi^2 \times 200\times10^9 / 275\times10^6} \approx 84,7\).
- Dado que \(\lambda > \lambda_{cr}\) → Euler es aplicable.
- Carga crítica: \(P_{cr} = \frac{\pi^2 E I}{L_{eff}^2} = \frac{\pi^2 \times 200\times10^9 \times 3,293\times10^{-7}}{7,35^2} \approx 12 048\) N (2 708 lbf).
- Tensión crítica: \(\sigma_{cr} = P_{cr}/A \approx 13,95 \times 10^6\) Pa = 13,95 MPa (2 023 psi), muy inferior al límite elástico.

**Conclusión**: La columna pandeará elásticamente con una carga de aproximadamente 12,05 kN (2 708 lbf) y una tensión de solo 13,95 MPa, lo que confirma su extrema esbeltez y la necesidad de rigidizar el elemento.

## Preguntas frecuentes

### ¿Cuál es la carga crítica de pandeo para una columna de acero de 2 m de longitud, biarticulada, con un tubo cuadrado de 50×50×3 mm?
Para acero E=200 GPa, I=1,29×10⁻⁷ m⁴, A=5,64×10⁻⁴ m², L_eff=2 m, se obtiene P_cr ≈ 63,6 kN / 14 290 lbf, muy por debajo del límite elástico.

### ¿Qué factor de longitud efectiva se debe usar para una columna empotrada-empotrada en diseño práctico?
La tabla de factores de diseño recomienda K_dis = 0,65 (frente al teórico 0,5). Incrementa la longitud efectiva un 30 % respecto al valor ideal para absorber imperfecciones.

### ¿A partir de qué esbeltez una columna de aluminio 6061-T6 deja de ser corta y rige Euler?
Con E = 68,9 GPa / 10 000 ksi y σ_y = 276 MPa / 40 ksi, la esbeltez crítica es aproximadamente 49,6. Por encima de 50 se aplica Euler.

### ¿Cuánto disminuye la carga crítica si se duplica la longitud de una columna biarticulada?
Dado que P_cr ∝ 1/L², duplicar la longitud reduce la carga crítica a 1/4 del valor original, es decir, una reducción del 75 %, pasando por ejemplo de 100 kN a 25 kN.

### ¿Cuál es la carga máxima que soporta una columna de acero A36 de 1,5 m, empotrada-libre, con perfil IPE 100?
Con E=200 GPa, I=1,71×10⁻⁶ m⁴, L_eff=3,15 m, P_cr ≈ 340 kN / 76 400 lbf. Sin embargo, su esbeltez λ≈102 supera el crítico de 96, por lo que rige pandeo elástico.

### ¿Qué factor de seguridad mínimo se aplica usualmente sobre la carga crítica de pandeo en estructuras metálicas?
Los códigos de diseño suelen exigir un factor de seguridad de 2,0 a 2,5 sobre P_cr para cargas estáticas, equivalente a una reducción de la carga admisible entre el 50 % y el 60 %.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/column_buckling/column_ideal.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/columns/columns.cfm
