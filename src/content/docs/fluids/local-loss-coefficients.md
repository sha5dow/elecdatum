---
title: "Coeficientes de pérdidas locales"
sidebar:
  label: "Coeficientes de pérdidas locales"
description: "Ficha tecnica: Coeficientes de pérdidas locales"
keywords: ["local head loss coefficients fittings valves", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "local-losses"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

Los coeficientes de pérdidas locales, también denominados coeficientes de pérdida menor o dinámica, cuantifican la disipación de energía mecánica que ocurre en accesorios de tuberías —codos, tes, válvulas, uniones, etc.— debido a cambios en la dirección del flujo, obstrucciones parciales, expansiones o contracciones. En sistemas de tuberías, estas pérdidas se suman a las pérdidas por fricción continua y resultan determinantes en redes cortas o con múltiples singularidades. El valor del coeficiente ξ (adimensional) permite calcular la altura de pérdida o la caída de presión mediante la ecuación fundamental de pérdidas menores.

## Fórmula de pérdida de carga local

La pérdida de carga local se expresa como una fracción de la altura de velocidad del flujo. La expresión general para la altura de pérdida h<sub>L</sub> es:

\[
h_L = \xi \frac{v^2}{2g}
\]

donde:  
h<sub>L</sub> = altura de pérdida local (m o ft)  
ξ = coeficiente de pérdida local (adimensional)  
v = velocidad media del flujo (m/s o ft/s)  
g = aceleración de la gravedad (9,81 m/s² o 32,17 ft/s²)

En términos de presión, la caída asociada es:

\[
\Delta p = \xi \frac{\rho v^2}{2}
\]

donde:  
Δp = pérdida de presión (Pa o psi)  
ρ = densidad del fluido (kg/m³ o lb/ft³)

Estas fórmulas son válidas para flujo incompresible y régimen turbulento completamente desarrollado, donde ξ se considera constante. Para fluidos compresibles o flujo laminar deben aplicarse correcciones específicas.

## Tabla de coeficientes de pérdida para accesorios y válvulas

Valores típicos de ξ para componentes comunes en sistemas de tuberías. Los coeficientes corresponden a flujo turbulento completamente desarrollado (Re > 10 000). En régimen de transición, los valores pueden ser superiores.

| Componente | Coeficiente ξ |
|---|---|
| Te, bridada, flujo en línea recta | 0,2 |
| Te, roscada, flujo en línea recta | 0,9 |
| Te, bridada, flujo dividido lateral | 1,0 |
| Te, roscada, flujo dividido lateral | 2,0 |
| Unión, roscada | 0,08 |
| Codo 90°, bridado, estándar | 0,3 |
| Codo 90°, roscado, estándar | 1,5 |
| Codo 45°, roscado, estándar | 0,4 |
| Codo 90°, bridado, radio largo | 0,2 |
| Codo 90°, roscado, radio largo | 0,7 |
| Codo 45°, bridado, radio largo | 0,2 |
| Curva de retorno 180°, bridada | 0,2 |
| Curva de retorno 180°, roscada | 1,5 |
| Válvula de globo, totalmente abierta | 10 |
| Válvula de ángulo, totalmente abierta | 2 |
| Válvula de compuerta, totalmente abierta | 0,15 |
| Válvula de compuerta, cerrada 1/4 | 0,26 |
| Válvula de compuerta, cerrada 1/2 | 2,1 |
| Válvula de compuerta, cerrada 3/4 | 17 |
| Válvula de retención de oscilación, flujo directo | 2 |
| Válvula de bola, totalmente abierta | 0,05 |
| Válvula de bola, cerrada 1/3 | 5,5 |
| Válvula de bola, cerrada 2/3 | 200 |
| Válvula de diafragma, abierta | 2,3 |
| Válvula de diafragma, semiabierta | 4,3 |
| Válvula de diafragma, 1/4 abierta | 21 |
| Medidor de agua | 7 |

Los datos provienen de Engineering Toolbox (2004) y son representativos de geometrías estándar. Para accesorios con dimensiones específicas o curvaturas no convencionales se recomienda consultar normas del fabricante o referencias como Idelchik (1986).

## Factores que influyen en el coeficiente de pérdida

1. **Régimen de flujo**: En flujo laminar (Re < 2000), ξ no es constante y aumenta al disminuir el número de Reynolds. Los valores tabulados corresponden a Re > 10 000.
2. **Relación de curvatura (R/D)**: En codos, la relación entre radio de curvatura y diámetro interior (R/D) afecta significativamente ξ. Radios grandes (R/D ≥ 1,5) reducen el coeficiente, mientras que codos agudos incrementan las pérdidas por separación.
3. **Ángulo de deflexión**: A mayor ángulo, mayor pérdida. Un codo de 45° tiene aproximadamente la mitad del ξ de un codo de 90° equivalente.
4. **Acabado superficial**: La rugosidad interna del accesorio incrementa la disipación viscosa. Las superficies lisas (bridadas) presentan ξ menores que las roscadas.
5. **Posición de la válvula**: En válvulas de compuerta o bola, la obstrucción parcial genera un incremento drástico de ξ (de 0,15 a 17 al cerrar 3/4).

## Método de la longitud equivalente

Para simplificar el cálculo de sistemas, las pérdidas locales pueden expresarse como una longitud equivalente L<sub>eq</sub> de tubería recta del mismo diámetro que produciría la misma caída de presión:

\[
L_{eq} = \frac{\xi D}{f}
\]

donde:  
D = diámetro interno de la tubería (m o ft)  
f = factor de fricción de Darcy-Weisbach

Este método permite sumar longitudes equivalentes a la longitud física de la tubería y aplicar la ecuación de Darcy-Weisbach directamente. Es especialmente útil en la industria HVAC y sistemas de distribución de agua, donde se emplean tablas de longitudes equivalentes unificadas.

## Criterios de selección en diseño de sistemas

- **Codos**: Preferir radio largo (ξ ≈ 0,2) frente a estándar cuando el espacio lo permita. Evitar codos roscados en líneas principales: ξ = 1,5 (90°) es cinco veces mayor que el equivalente bridado.
- **Tes**: Orientar la derivación en línea recta siempre que sea posible (ξ = 0,2 bridada). Las derivaciones laterales incrementan ξ a 1,0.
- **Válvulas**: Las de bola totalmente abiertas ofrecen la mínima resistencia (ξ = 0,05), seguidas de las de compuerta (ξ = 0,15). Las de globo son naturalmente restrictivas (ξ = 10) y solo se justifican por su capacidad de regulación.
- **Válvulas de retención**: Las de oscilación imponen ξ ≈ 2, por lo que su instalación debe evaluarse cuidadosamente en sistemas de baja presión disponible.
- **Operación con cierre parcial**: Nunca utilice una válvula de compuerta como elemento de regulación: la pérdida se dispara de 0,15 a 17 en el rango de apertura de 25 %–100 %.

## Preguntas frecuentes (FAQ)

1. **¿Cuál es el coeficiente de pérdida de un codo roscado de 90° estándar?**  
   El coeficiente ξ es 1,5 para flujo turbulento. Esto implica que cada codo disipa una altura de velocidad igual a 1,5 × (v²/2g).

2. **¿Qué caída de presión produce una válvula de globo abierta con agua a 2 m/s y 1000 kg/m³?**  
   Con ξ = 10, Δp = 10 × (1000 kg/m³ × (2 m/s)² / 2) = 20 000 Pa (20 kPa o 2,9 psi).

3. **¿Qué accesorio común tiene el menor coeficiente de pérdida?**  
   La válvula de bola totalmente abierta (ξ = 0,05) y la unión roscada (ξ = 0,08) presentan las pérdidas más bajas, prácticamente despreciables en muchos diseños.

4. **¿Cuánto aumenta la pérdida si una válvula de compuerta se cierra a la mitad?**  
   El coeficiente pasa de 0,15 (totalmente abierta) a 2,1 (1/2 cerrada), un incremento de 14 veces. La altura de pérdida se multiplica por el mismo factor para una velocidad dada.

5. **¿Cómo se calcula la pérdida total en un tramo con múltiples accesorios?**  
   Se suman los coeficientes ξ de todos los accesorios y se aplica la fórmula h<sub>L total</sub> = (Σξ) v²/(2g). También pueden convertirse a longitudes equivalentes y usar la ecuación de Darcy-Weisbach.

6. **¿El coeficiente de pérdida varía con el diámetro de la tubería?**  
   Para un mismo tipo de accesorio, ξ es aproximadamente constante en flujo turbulento completamente desarrollado. Sin embargo, en codos la relación R/D afecta el valor: un codo de 90° bridado estándar (R/D ≈ 1) tiene ξ = 0,3; uno de radio largo (R/D = 1,5) reduce a ξ = 0,2.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/minor-loss-coefficients-pipes-d_626.html
- **efunda.com**: https://www.efunda.com/formulae/
- **thermopedia.com**: https://www.thermopedia.com/content/577/
