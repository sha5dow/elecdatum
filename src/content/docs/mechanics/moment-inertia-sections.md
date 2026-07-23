---
title: "Momentos de inercia por sección transversal"
sidebar:
  label: "Momentos de inercia por sección transversal"
description: "Ficha tecnica: Momentos de inercia por sección transversal"
keywords: ["moment of inertia rectangle circle I-beam", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "moment-of-inertia"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Definición

El momento de inercia de área de una sección rectangular de 150 mm × 300 mm (5.91 in × 11.81 in) respecto al eje horizontal que pasa por su centroide es de 337.5 × 10⁶ mm⁴ (811 in⁴). Conocido también como segundo momento de área, el momento de inercia de área es una propiedad geométrica que cuantifica la resistencia de una sección transversal a la flexión y a la deflexión. Su valor depende exclusivamente de la forma y dimensiones de la sección, y es fundamental en el diseño de vigas, pilares y elementos estructurales sometidos a cargas transversales. La unidad en el sistema métrico es el mm⁴ (o m⁴) y en el sistema imperial el in⁴. Un valor elevado de I indica una sección más rígida frente a la flexión.

## Propiedades de secciones típicas

Una sección circular maciza de 50 mm (1.97 in) de diámetro tiene un momento de inercia Ix = 0.3068 × 10⁶ mm⁴ (0.738 in⁴). A continuación se presentan las fórmulas del momento de inercia de área para las secciones transversales más utilizadas en ingeniería, junto con un ejemplo numérico en unidades métricas e imperiales.

| Sección | Dimensiones (mm / in) | Ix (mm⁴ / in⁴) | Iy (mm⁴ / in⁴) |
| --- | --- | --- | --- |
| Cuadrado macizo (lado a) | 100 / 3.94 | 8.33 × 10⁶ / 20.0 | 8.33 × 10⁶ / 20.0 |
| Rectángulo macizo (b × h) | b=80 / 3.15<br>h=160 / 6.30 | 27.3 × 10⁶ / 65.6 | 6.83 × 10⁶ / 16.4 |
| Círculo macizo (diámetro d) | 80 / 3.15 | 2.01 × 10⁶ / 4.83 | 2.01 × 10⁶ / 4.83 |
| Tubo circular (dₒ × dᵢ) | dₒ=100 / 3.94<br>dᵢ=80 / 3.15 | 2.90 × 10⁶ / 6.97 | 2.90 × 10⁶ / 6.97 |
| Perfil I simétrico (b × H, alma t) | b=100 / 3.94<br>H=200 / 7.87<br>t=10 / 0.394 | 41.2 × 10⁶ / 99.0 | 6.58 × 10⁶ / 15.8 |

Las fórmulas generales correspondientes a cada sección son:

- Cuadrado macizo de lado a: Ix = Iy = a⁴ / 12  
- Rectángulo macizo (ancho b, alto h): Ix = b h³ / 12 ; Iy = b³ h / 12  
- Círculo macizo (diámetro d): Ix = Iy = π d⁴ / 64  
- Tubo circular (diámetro exterior dₒ, interior dᵢ): Ix = Iy = π (dₒ⁴ − dᵢ⁴) / 64  
- Perfil I simétrico (ancho de ala b, altura total H, espesor de alma t):  
  Ix = [b H³ − (b − t) (H − 2t)³] / 12 ; Iy ≈ (2t b³ + (H − 2t) t³) / 12

Para secciones compuestas o no simétricas, el momento de inercia se obtiene aplicando el teorema de los ejes paralelos (Steiner) y descomponiendo la geometría en formas elementales.

## Criterios de diseño

Una viga simplemente apoyada con luz de 3 m (118 in) que soporta una carga puntual central de 10 kN (2248 lb) requiere un momento de inercia mínimo Ix = 1.98 × 10⁶ mm⁴ (4.76 in⁴) para limitar la deflexión máxima a L/360 según criterios de servicio. En el diseño de elementos sometidos a flexión, el momento de inercia de la sección transversal gobierna la rigidez y la resistencia al pandeo lateral. Cuanto mayor es I respecto al eje de flexión, menores son las tensiones normales (σ = M y / I) y la deflexión (δ ∝ 1 / I). El proyectista debe buscar secciones que concentren el material lejos del eje neutro, como los perfiles I o los tubos rectangulares, que ofrecen una relación rigidez/peso óptima. Es buena práctica verificar siempre el valor de I tanto para el eje fuerte como para el eje débil, ya que la estabilidad lateral puede ser determinante en vigas esbeltas. El módulo de sección elástico S = I / c complementa al momento de inercia en la verificación resistente, y el radio de giro r = √(I / A) es clave para el dimensionado a compresión.

## Aplicaciones prácticas

Un perfil IPE 200 de acero S235 posee un momento de inercia Ix = 19.4 × 10⁶ mm⁴ (46.6 in⁴). En la práctica, el momento de inercia sirve para seleccionar comercialmente el perfil adecuado a partir de catálogos de fabricantes. Por ejemplo, al dimensionar una viga de entrepiso con luz de 5 m (197 in) y carga uniformemente distribuida de 8 kN/m (548 lb/ft), el proyectista calcula primero la inercia necesaria para cumplir el estado límite de servicio (deflexión ≤ L/300). Con la inercia requerida (≈ 61 × 10⁶ mm⁴ / 147 in⁴), se elige un perfil IPE 270 o similar. En estructuras metálicas también se utilizan vigas alveolares o armadas, donde las fórmulas de momento de inercia de las secciones elementales permiten optimizar la geometría. En el diseño de ejes, el momento de inercia polar (J) se emplea para calcular el ángulo de torsión, mientras que en elementos de hormigón armado se transforma la sección agrietada para obtener un valor efectivo de I que permita estimar las flechas con precisión.

## Preguntas frecuentes (FAQ)

**¿Qué es el momento de inercia de área?**  
El momento de inercia de área de una sección circular de 50 mm (1.97 in) de diámetro es I = 0.307 × 10⁶ mm⁴ (0.738 in⁴). Es una propiedad geométrica que mide la distribución del área de una sección respecto a un eje y determina su resistencia a la flexión y a la deflexión.

**¿Cómo se calcula I para una sección rectangular?**  
Para un rectángulo de 150 mm × 300 mm (5.91 in × 11.81 in), Ix = (150 mm · 300³ mm³) / 12 = 337.5 × 10⁶ mm⁴ (811 in⁴). Se emplea la fórmula Ix = b h³ / 12, donde b es el ancho y h la altura paralela al eje de flexión.

**¿Cómo se convierten las unidades de momento de inercia?**  
1 in⁴ equivale exactamente a 416 231 mm⁴; por lo tanto, un valor de I = 5 × 10⁶ mm⁴ corresponde a 12.0 in⁴. Basta multiplicar o dividir por este factor para cambiar entre sistemas.

**¿Qué diferencia existe entre Ix e Iy?**  
En un rectángulo de 200 mm × 100 mm (7.87 in × 3.94 in), si la base de 100 mm es horizontal, Ix = 16.67 × 10⁶ mm⁴ (40.0 in⁴) e Iy = 66.67 × 10⁶ mm⁴ (160.2 in⁴). Ix e Iy son los momentos de inercia respecto a los ejes centroidales; el mayor de ellos corresponde al eje fuerte (mayor rigidez).

**¿Cómo influye el momento de inercia en la deflexión?**  
Una viga con I = 10 × 10⁶ mm⁴ (24.0 in⁴) deflecta el doble que otra idéntica con I = 20 × 10⁶ mm⁴ (48.0 in⁴) bajo la misma carga, ya que la flecha es inversamente proporcional a I.

**¿Qué es el módulo de sección y cómo se relaciona con el momento de inercia?**  
El módulo de sección elástico de un rectángulo de 200 mm de alto y 100 mm de ancho es S = 666.7 × 10³ mm³ (40.7 in³). Se obtiene como S = I / c, donde c es la distancia desde el eje neutro hasta la fibra extrema, y determina la tensión máxima en flexión (σ = M / S).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/area-moment-inertia-d_1328.html
- **engineersedge.com**: https://www.engineersedge.com/calculators/section_square_case_6.htm
- **efunda.com**: https://www.efunda.com/designstandards/beams/RectangularSBeam.cfm
