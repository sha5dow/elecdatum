---
title: "Fatiga en uniones soldadas"
sidebar:
  label: "Fatiga en uniones soldadas"
description: "Ficha tecnica: Fatiga en uniones soldadas"
keywords: ["fatigue welded joints IIW classification", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "fatigue-welded"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Resumen
La fatiga en uniones soldadas se produce cuando uniones con defectos, tensiones residuales o diseñadas de forma inadecuada se someten a cargas cíclicas. La resistencia a fatiga de la unión no se correlaciona con la del material base y se evalúa mediante curvas S‑N (Wöhler) y clases de detalle FAT según la IIW. Las tensiones residuales, el espesor del material, la geometría de la soldadura y el ambiente reducen la vida a fatiga. Se presentan criterios de diseño prenormativos, fórmulas de tensión en el cordón, clasificación IIW y un ejemplo práctico de aplicación.

## Conceptos fundamentales
La fatiga de soldaduras se estudia con el método de vida‑tensión (curvas S‑N) donde se relaciona la amplitud de tensión alternante Δσ con el número de ciclos hasta el fallo N. A diferencia de las piezas homogéneas, la resistencia a fatiga de una unión soldada está dominada por la geometría del detalle, las imperfecciones y las tensiones residuales de soldadura, y no por la resistencia última del material base. El acero de mayor resistencia (p. ej., S700) no mejora significativamente la resistencia a fatiga de la unión respecto a un acero dulce si el detalle es el mismo. La evaluación se basa en el rango de tensiones nominales (o tensiones estructurales) y en la clase FAT del detalle, definida como el rango de tensión en MPa que produce un fallo a 2 × 10⁶ ciclos con una probabilidad de supervivencia del 95 % (curva media menos dos desviaciones estándar).

## Factores que afectan la fatiga en uniones soldadas
* **Tensiones residuales de soldadura:** el proceso térmico genera tensiones de tracción en la zona de la soldadura que se superponen a las cargas cíclicas, elevando la tensión media y reduciendo drásticamente la vida a fatiga. Los tratamientos de alivio (térmico, martillado) solo mitigan parcialmente este efecto.
* **Efecto del espesor:** en uniones con grieta que se inicia en el pie del cordón, el aumento de espesor disminuye la resistencia a fatiga. La IIW propone un factor de corrección por espesor (t_ref / t)^n, donde n ≈ 0.1–0.25 para espesores mayores de 25 mm.
* **Defectos e imperfecciones:** inclusiones, falta de penetración, mordeduras y porosidad actúan como concentradores de tensión y sitios de iniciación de grietas, disminuyendo la clase FAT efectiva.
* **Entorno corrosivo:** la presencia de agua de mar o atmósferas agresivas acelera el crecimiento de grieta por fatiga y reduce la resistencia hasta un 50 % respecto a condiciones secas.

## Clasificación de detalles según la IIW
La International Institute of Welding (IIW) ha establecido clases de detalle (FAT) que cubren la mayoría de configuraciones de soldaduras en acero. Cada clase representa el rango de tensión nominal (MPa) que provoca el fallo a 2 × 10⁶ ciclos. La familia de curvas S‑N comparte la misma pendiente m = 3 hasta el punto de inflexión a 5 × 10⁶ ciclos, donde se adopta una resistencia a fatiga de amplitud constante Δσ_D = 0.737 × FAT. Para amplitudes variables se emplea una pendiente secundaria m = 5. La clasificación se presenta en la sección «Tabla de clases FAT (IIW)».

## Curvas S‑N (Wöhler)
Las curvas S‑N para uniones soldadas en acero siguen la relación empírica de Basquin:

N = C · (Δσ)^( − m)

con
* Δσ  = rango de tensión nominal aplicado
* N   = número de ciclos
* C   = constante característica de cada clase FAT (C = FAT^m · 2 × 10⁶)
* m   = 3 (pendiente habitual en acero soldado)

Para el diseño se utiliza el rango de tensión nominal Δσ ≤ FAT / γ_M, siendo γ_M el factor parcial de seguridad (usualmente 1.25–1.35). La curva S‑N resultante se representa en escala log‑log como una línea recta de pendiente −1/m.

## Criterios de diseño frente a fatiga
1. **Seleccionar detalles con alta clase FAT:** siempre que sea posible, usar soldaduras a tope con penetración total y esmerilado del refuerzo (FAT 112) en lugar de uniones en ángulo (FAT 80 o inferior).
2. **Ubicar las soldaduras en zonas de baja tensión nominal:** alejarlas de concentradores geométricos.
3. **Aplicar técnicas de mejora:** esmerilado del pie del cordón, granallado o martillado con ultrasonidos (UIT) para introducir tensiones residuales de compresión y elevar la clase FAT efectiva (ganancia de 2–4 clases).
4. **Controlar el espesor:** si t > 25 mm, aplicar factor de corrección a la tensión admisible.
5. **Proteger frente a corrosión:** pintura, galvanizado o protección catódica en ambientes marinos.

## Fórmulas de cálculo de tensiones en soldaduras
A continuación se muestran las ecuaciones básicas para estimar la tensión nominal en el cordón bajo distintos estados de carga, útiles para verificar frente a la clase FAT. Las fórmulas suponen carga estática equivalente y unidades coherentes.

| Configuración | Tipo de carga | Fórmula de tensión | Notas |
|---|---|---|---|
| Soldadura a tope, penetración total | Axial tracción/compresión | σ = P / (t · l) | t = espesor de la chapa más delgada, l = longitud efectiva |
| Soldadura a tope, penetración parcial | Axial tracción/compresión | σ = P / (a · l) | a = profundidad de garganta efectiva |
| Soldadura a tope, penetración total | Momento flector en el plano | σ = M_b / Z, Z = l · t² / 6 | M_b en el plano de la unión |
| Unión en T con cordón en ángulo, carga perpendicular al eje del cordón | Cortante en garganta | τ_⊥ = P / (0.707 · h_n · l) | h_n = lado del cordón en ángulo |
| Cordón en ángulo, carga paralela al eje del cordón | Cortante longitudinal | τ_∥ = P / (0.707 · h_n · l) | La carga se reparte entre dos cordones si hay simetría |
| Eje macizo soldado a tope, torsión | Cortante torsional | τ = M_t · r / J | r = radio del eje, J = momento polar de inercia de la sección soldada |
| Unión a solape con cordones longitudinales, carga axial | Cortante en garganta | τ = P / (2 · 0.707 · h_n · l) | Supone dos cordones paralelos |

> **Nota de unidades:** P [kN / lbf]; t, a, h_n, l [mm / in]; M_b [N·m / lbf·in]; M_t [N·m / lbf·in]; σ, τ [MPa / psi]. En el uso de la fórmula deben emplearse unidades coherentes, realizando las conversiones necesarias.

## Diagramas de carga y modos de fallo típicos
- **Carga axial en soldadura a tope:** el fallo ocurre por propagación de grieta desde el pie del cordón o desde un defecto interno; la tensión nominal uniforme se evalúa con σ = P / (t·l).
- **Flexión pura en unión a tope:** la grieta se inicia en la fibra exterior traccionada. El diagrama de tensiones es lineal, con máximo σ = 6M_b / (l·t²).
- **Uniones en T soldadas en ángulo con carga de tracción en el ala:** la soldadura transmite esfuerzo cortante; la rotura avanza por la garganta. Se analiza τ_⊥ en la sección mínima de garganta.
- **Cordón en ángulo bajo torsión (unión de ala a alma de viga):** el flujo de cortante genera tensiones τ_∥ en los cordones, combinándose con tensiones normales de flexión global.
- **Efectos combinados:** en piezas estructurales reales coexisten cargas axiales, de flexión y de torsión, debiendo evaluarse la tensión principal mayor en el pie del cordón mediante superposición vectorial.

## Ejemplo de aplicación práctica
**Unión a tope entre chapas de acero S355 de espesor t = 12 mm / 0.472 in, ancho l = 100 mm / 3.937 in, soldadura de penetración total sin tratamiento posterior (FAT 90).** La carga aplicada genera un rango de fuerza cíclico de 0 – 120 kN / 0 – 26977 lbf. Determinar la vida a fatiga.

1. Rango de tensión nominal:
   ΔF = 120 kN / 26977 lbf.
   Sección resistente A = t·l = 12 mm × 100 mm = 1200 mm² / (0.472 in × 3.937 in = 1.858 in²).
   Δσ = ΔF / A = 120 000 N / 1200 mm² = 100 MPa / (26977 lbf / 1.858 in² ≈ 14518 psi = 14.5 ksi).

2. Comparación con la clase FAT:
   FAT 90 (soldadura a tope en bruto) → resistencia característica Δσ_c = 90 MPa / 13.05 ksi a 2 × 10⁶ ciclos.
   Δσ = 100 MPa > 90 MPa → la unión no cumple el criterio de vida infinita ni siquiera a 2 × 10⁶ ciclos. Se debe rediseñar o aplicar mejora.

3. Alternativa: esmerilado del refuerzo para alcanzar FAT 112. Entonces Δσ = 100 MPa < 112 MPa → la vida teórica se calcula con:
   N = 2×10⁶ × (112 / 100)^3 ≈ 2×10⁶ × 1.4049 = 2.81×10⁶ ciclos.
   Con un factor de seguridad γ_M = 1.25, Δσ_perm = 112/1.25 = 89.6 MPa → 100 MPa aún excede. Es necesario reducir la carga o incrementar el ancho.

Este ejemplo ilustra cómo el detalle y la calidad superficial definen la robustez frente a fatiga.

## Tabla de clases FAT (IIW)
Clases de detalle para uniones soldadas en acero, según la recomendación IIW (FAT 36 hasta FAT 112). Para cada clase se indica el rango de tensión nominal característico a 2 × 10⁶ ciclos y ejemplos de detalles.

| Clase FAT | Rango Δσ_c (MPa) | Rango Δσ_c (ksi) | Descripción del detalle |
|---|---|---|---|
| FAT 36 | 36 | 5.22 | Soldadura en ángulo sobre borde cortado, cordones intermitentes |
| FAT 40 | 40 | 5.80 | Unión en ángulo sin penetración, calidad visual |
| FAT 45 | 45 | 6.53 | Unión en ángulo con imperfecciones admisibles según ISO 5817‑C |
| FAT 50 | 50 | 7.25 | Cordón en ángulo, carga transversal, raíz no controlada |
| FAT 56 | 56 | 8.12 | Soldadura a tope con defectos de alineamiento |
| FAT 63 | 63 | 9.14 | Soldadura a tope en bruto, penetración parcial |
| FAT 71 | 71 | 10.3 | Soldadura en ángulo en uniones tubulares sencillas |
| FAT 80 | 80 | 11.6 | Soldadura en ángulo, calidad estándar (ISO 5817‑B) |
| FAT 90 | 90 | 13.05 | Soldadura a tope en bruto, penetración total |
| FAT 100 | 100 | 14.5 | Soldadura a tope con refuerzo controlado y pie del cordón libre de mordeduras |
| FAT 112 | 112 | 16.2 | Soldadura a tope con penetración total, refuerzo eliminado por esmerilado y control superficial |

> Para condiciones de corrosión marina, multiplicar las clases FAT por 0.7 – 0.8. El factor de espesor k_s = (25 / t)^0.1 se aplica cuando el espesor de chapa t > 25 mm.

## Preguntas frecuentes
1. **¿Qué clase FAT debe emplearse para una soldadura a tope penetración total con refuerzo alisado?** Se asigna FAT 112 si el esmerilado elimina toda irregularidad y se garantiza la ausencia de mordeduras; esta clase proporciona una resistencia característica de 112 MPa / 16.2 ksi a 2 × 10⁶ ciclos.
2. **¿Cómo afecta el espesor de la chapa a la resistencia a fatiga?** El aumento de espesor de 10 mm a 25 mm puede reducir la resistencia a fatiga en torno al 12‑18 %, corregible mediante el factor (25/t)^0.1 en el cálculo del rango admisible.
3. **¿Es preferible aumentar el límite elástico del acero base para mejorar la fatiga de la unión?** No; elevar el acero de S355 (355 MPa / 51.5 ksi) a S700 (700 MPa / 101.5 ksi) no mejora significativamente la resistencia a fatiga del detalle soldado, ya que la vida está gobernada por la geometría y las tensiones residuales.
4. **¿Qué efecto tiene un entorno marino sobre la vida a fatiga de una unión soldada?** En agua de mar libre la velocidad de crecimiento de grieta se puede duplicar, reduciendo la resistencia a fatiga hasta en un 40 % respecto al aire, por lo que se recomiendan protecciones anticorrosión y el uso de curvas FAT reducidas.
5. **¿Cuánto mejora la fatiga el martillado por ultrasonidos (UIT) del pie del cordón?** El UIT introduce tensiones residuales de compresión que pueden elevar la clase FAT efectiva hasta 2‑4 categorías, por ejemplo, de FAT 90 a FAT 125, dependiendo del espesor y del acero.
6. **¿Qué pendiente m y a partir de qué ciclos se considera el cambio de pendiente en la curva S‑N según IIW?** La curva S‑N para acero soldado tiene pendiente m = 3 hasta 5 × 10⁶ ciclos, para luego cambiar a m = 5 si el análisis considera amplitudes variables; para amplitud constante se adopta un límite de fatiga Δσ_D = 0.737 × FAT a partir de ese punto.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/weld_design_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria.cfm
