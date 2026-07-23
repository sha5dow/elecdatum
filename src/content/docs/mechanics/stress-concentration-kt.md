---
title: "Factores concentración esfuerzo Kt"
sidebar:
  label: "Factores concentración esfuerzo Kt"
description: "Ficha tecnica: Factores concentración esfuerzo Kt"
keywords: ["stress concentration factor Kt notch fillet hole", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "stress-concentration"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## ¿Qué es el factor de concentración de esfuerzos Kt?
Para un agujero circular en una placa infinita bajo tensión, el factor de concentración de esfuerzos Kt es exactamente 3. El factor de concentración de esfuerzos, denotado como Kt, cuantifica el aumento local de la tensión en una pieza debido a irregularidades geométricas como agujeros, muescas, entallas o cambios bruscos de sección. Se define como la relación entre la tensión máxima real en la zona de la discontinuidad (σ_max) y una tensión nominal de referencia (σ_nom) calculada lejos del concentrador o en la sección neta:

\[ K_{t} = \frac{\sigma_{\max}}{\sigma_{\text{nom}}} \]

Es un número a dimensional que depende exclusivamente de la geometría de la pieza y del tipo de carga (tracción, flexión, torsión), pero no del material ni del tamaño absoluto, siempre que el material sea homogéneo e isótropo.

## Fórmula de cálculo
En un agujero elíptico con semiejes a (longitud) y b (anchura) y radio de curvatura ρ = b²/a en el extremo del eje mayor, la tensión máxima resulta de la ecuación de Inglis:

\[ \sigma_{\max} = \sigma_{0} \left(1 + 2\frac{a}{b}\right) = \sigma_{0} \left(1 + 2\sqrt{\frac{a}{\rho}}\right) \]

Para un agujero circular (a = b) se obtiene Kt = 3,0. En geometrías finitas (placas con ancho limitado o ejes con entallas) los valores de Kt se determinan experimentalmente o por análisis de elementos finitos y se presentan en gráficos o tablas en función de relaciones adimensionales como d/W (diámetro/anchura en placas) o r/d (radio de acuerdo/diámetro menor en ejes). La tensión nominal puede estar referida a la sección bruta (Ktg) o a la sección neta (Ktn); por ello es crítico conocer la definición utilizada antes de aplicar el factor en cualquier cálculo de diseño.

## Factores de concentración en placas planas
En placas planas bajo tracción, los concentradores más comunes son agujeros centrales, muescas semicirculares y entallas angulares. La tabla siguiente muestra valores típicos de Kt (referidos a la sección bruta) para una placa con un agujero circular centrado y diferentes relaciones diámetro/anchura (d/W). En todos los casos W = 100 mm / 3.937 in y espesor t = 10 mm / 0.394 in.

| Diámetro d (mm / in) | Ancho W (mm / in) | Relación d/W | Kt (bruto) |
|-----------------------|-------------------|--------------|------------|
| 10 mm / 0.394 in      | 100 mm / 3.937 in | 0.10         | 3.03       |
| 20 mm / 0.787 in      | 100 mm / 3.937 in | 0.20         | 3.14       |
| 30 mm / 1.181 in      | 100 mm / 3.937 in | 0.30         | 3.36       |
| 40 mm / 1.575 in      | 100 mm / 3.937 in | 0.40         | 3.74       |
| 50 mm / 1.969 in      | 100 mm / 3.937 in | 0.50         | 4.32       |

Para muescas semicirculares simétricas los valores de Kt son mayores que los de un agujero equivalente; por ejemplo, con relación r/W = 0,05 (radio de la muesca 5 mm / 0.197 in y ancho 100 mm / 3.937 in) el Kt típico es 2,85, mientras que con r/W = 0,02 (radio 2 mm / 0.079 in) puede superar 4,2. En todos los casos la presencia de ángulos agudos eleva los coeficientes de manera significativa.

## Factores de concentración en ejes y cilindros
Un eje con un escalón de diámetro y un radio de acuerdo r es un concentrador clásico. El factor Kt depende de la relación de diámetros D/d y del parámetro r/d. Se muestran valores típicos para carga axial (tracción) en un eje de diámetro menor d = 20 mm / 0.787 in y diámetro mayor D apropiado, con acuerdo r variable.

| Diámetro menor d (mm / in) | Diámetro mayor D (mm / in) | Relación D/d | Radio r (mm / in) | r/d | Kt (axial) |
|-----------------------------|-----------------------------|--------------|-------------------|------|------------|
| 20 mm / 0.787 in            | 30 mm / 1.181 in            | 1.50         | 1 mm / 0.039 in   | 0.05 | 2.55       |
| 20 mm / 0.787 in            | 30 mm / 1.181 in            | 1.50         | 2 mm / 0.079 in   | 0.10 | 1.90       |
| 20 mm / 0.787 in            | 30 mm / 1.181 in            | 1.50         | 4 mm / 0.157 in   | 0.20 | 1.60       |
| 20 mm / 0.787 in            | 40 mm / 1.575 in            | 2.00         | 1 mm / 0.039 in   | 0.05 | 2.85       |
| 20 mm / 0.787 in            | 40 mm / 1.575 in            | 2.00         | 2 mm / 0.079 in   | 0.10 | 2.10       |
| 20 mm / 0.787 in            | 40 mm / 1.575 in            | 2.00         | 4 mm / 0.157 in   | 0.20 | 1.75       |

Para cargas de flexión los valores de Kt son ligeramente inferiores (por ejemplo, con D/d=1.5, r/d=0.10, Kt≈1.75) y para torsión son aún más bajos (Kt≈1.55 en el mismo caso). El diseñador debe elegir el radio de acuerdo más grande posible que permita el diseño para minimizar la concentración.

## Criterios de diseño
La primera regla es mantener todos los radios de transición al menos 2 mm / 0.079 in cuando sea posible, y nunca inferiores a 1 mm / 0.039 in en piezas sometidas a fatiga. En componentes estructurales críticos se recomienda que el factor Kt no exceda 2,0 para cargas estáticas. Durante el mecanizado, se deben especificar rugosidades superficiales menores a Ra 3,2 µm / 126 µin en las zonas de concentración para evitar microentallas adicionales. Para materiales dúctiles bajo carga estática, el límite elástico permite la plastificación local y la redistribución de tensiones, por lo que el fallo suele producirse cuando la tensión nominal promedio alcanza la resistencia última; en estos casos Kt puede omitirse en el dimensionado. Sin embargo, en fatiga o con materiales frágiles el diseñador debe calcular siempre σ_max = Kt · σ_nom y verificar que no supere el límite de fatiga o la resistencia a la rotura, según corresponda.

## Ejemplo de aplicación práctica
Considere una placa de acero estructural S275 de ancho W = 100 mm / 3.937 in, espesor t = 10 mm / 0.394 in y un agujero central de d = 20 mm / 0.787 in, sometida a una carga de tracción axial de F = 50 kN / 11 240 lbf. La tensión nominal bruta es:

σ_nom = F / (W · t) = 50 000 N / (100 mm · 10 mm) = 50 MPa / 7.25 ksi

La relación d/W = 20 mm / 100 mm = 0,20. De la tabla correspondiente, Kt = 3,14. Por tanto, la tensión máxima en el borde del agujero es:

σ_max = 3,14 · 50 MPa = 157 MPa / 22.8 ksi

El límite elástico del material es 275 MPa / 39.9 ksi. Con carga estática, la plastificación local impide el fallo súbito, pero bajo cargas cíclicas el factor de concentración actuaría plenamente. Si se desea limitar σ_max a 200 MPa / 29.0 ksi en fatiga, con la misma carga se necesitaría Kt ≤ 4,0, lo que permite agujeros de hasta d ≈ 35 mm / 1.378 in (Kt ≈3,7). Alternativamente, se puede aumentar el ancho de la placa o reducir el tamaño del agujero.

## Preguntas frecuentes

**¿Cuál es el valor máximo típico de Kt en piezas mecánicas?** Los valores de Kt suelen oscilar entre 1,0 y 6,0 para la mayoría de las geometrías comunes; una muesca aguda con radio muy pequeño puede superar Kt = 10 desde el punto de vista elástico teórico, aunque la plastificación lo reduce en la práctica.

**¿El factor Kt cambia con el tamaño absoluto de la pieza?** No, Kt es estrictamente función de relaciones adimensionales y no depende del tamaño absoluto; una misma forma geométrica a escalas 1:10 produce idéntico Kt.

**¿Cuál es el Kt exacto para un agujero circular en una placa infinita bajo tracción?** El valor es exactamente 3,0, derivado de la solución de Kirsch.

**¿Cómo se reduce el Kt en un eje con escalón?** Aumentando el radio de acuerdo r se reduce el Kt significativamente; por ejemplo, para un eje con D/d = 1,5, pasar de r/d = 0,05 a 0,20 baja el Kt de 2,55 a 1,60, una reducción del 37%.

**¿Es correcto confundir Kt con el factor de intensidad de tensiones K?** No, Kt es adimensional y caracteriza una muesca sin fisura, mientras que K (factor de intensidad de tensiones) tiene unidades de tensión·√longitud y describe el campo singular en la punta de una grieta.

**¿Debe aplicarse Kt en el diseño estático de materiales dúctiles?** Generalmente no, porque la plastificación local redistribuye las tensiones, igualando la carga última a la obtenida con fórmulas elementales; en materiales dúctiles, la falla por fatiga es la que exige considerar Kt siempre.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/material_science/stress_concentration_factors_for_flat_plates__15193.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/stress_concentration/stresscon_intro.cfm
