---
title: "Fórmulas de vigas apoyo y carga"
sidebar:
  label: "Fórmulas de vigas apoyo y carga"
description: "Ficha tecnica: Fórmulas de vigas apoyo y carga"
keywords: ["beam formulas deflection moment reaction", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "beam-formulas"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Introducción
Las vigas son elementos estructurales que trabajan principalmente a flexión, con luces típicas desde 2 m / 6.56 ft en edificación residencial hasta más de 50 m / 164 ft en puentes. Esta guía reúne fórmulas de resistencia de materiales para el cálculo de reacciones, esfuerzos internos, pendientes y flechas en vigas isostáticas sometidas a los tipos más habituales de carga y condiciones de apoyo.

## Ecuación diferencial de la viga
La teoría de Euler-Bernoulli, válida para pequeñas deformaciones de vigas esbeltas, establece que la deflexión w(x) de una viga con módulo de elasticidad E = 200 GPa / 29000 ksi (acero típico) y momento de inercia I satisface:

\[
\frac{d^2}{dx^2}\left(EI\frac{d^2w}{dx^2}\right)=q(x)
\]

Si la rigidez flexional EI es constante, la ecuación se simplifica a \(EI\, w^{IV} = q(x)\). Esta es la base para todas las fórmulas que siguen.

## Relaciones entre carga, cortante y momento
Las funciones de fuerza cortante V(x) y momento flector M(x) se vinculan con la carga distribuida q(x) mediante las relaciones diferenciales:

\[
\frac{dV}{dx} = -q(x),\qquad \frac{dM}{dx} = V(x)
\]

Por ejemplo, para una carga uniforme q = 8 kN/m / 0.55 kip/ft la fuerza cortante varía linealmente y el momento flector de manera parabólica a lo largo de la viga.

## Tabla de fórmulas para vigas isostáticas comunes

| Configuración | Reacciones | Momento flector máximo | Flecha máxima |
|---|---|---|---|
| Viga simplemente apoyada – carga puntual centrada P | \(R_A = R_B = P/2\) | \(M_{\max}= \dfrac{P L}{4}\) (en el centro) | \(\delta_{\max}= \dfrac{P L^3}{48 E I}\) (en el centro) |
| Viga simplemente apoyada – carga uniforme total W = q L | \(R_A = R_B = W/2\) | \(M_{\max}= \dfrac{W L}{8}\) (en el centro) | \(\delta_{\max}= \dfrac{5 W L^3}{384 E I}\) (en el centro) |
| Viga en voladizo – carga puntual en extremo libre P | \(R_A = P\) (vertical), \(M_A = P L\) (empotramiento) | \(M_{\max}= P L\) (empotramiento) | \(\delta_{\max}= \dfrac{P L^3}{3 E I}\) (extremo libre) |
| Viga en voladizo – carga uniforme total W = q L | \(R_A = W\), \(M_A = W L/2\) | \(M_{\max}= \dfrac{W L}{2}\) (empotramiento) | \(\delta_{\max}= \dfrac{W L^3}{8 E I}\) (extremo libre) |
| Viga empotrada-empotrada – carga puntual centrada P | \(R_A = R_B = P/2\), \(M_A = M_B = \dfrac{P L}{8}\) | \(M_{\max}= \dfrac{P L}{8}\) (extremos y centro, signo opuesto) | \(\delta_{\max}= \dfrac{P L^3}{192 E I}\) (centro) |
| Viga empotrada-empotrada – carga uniforme total W = q L | \(R_A = R_B = W/2\), \(M_A = M_B = \dfrac{W L}{12}\) | \(M_{\max}= \dfrac{W L}{12}\) (extremos) / \(\dfrac{W L}{24}\) (centro) | \(\delta_{\max}= \dfrac{W L^3}{384 E I}\) (centro) |

Nota: L = luz libre, E = módulo de elasticidad, I = momento de inercia de la sección respecto al eje neutro. Las fórmulas suponen material lineal elástico y pequeñas deformaciones.

## Ejemplo de aplicación numérica
Se dimensiona una viga simplemente apoyada de acero S275 (E = 200 GPa / 29 000 ksi, fy = 275 MPa / 40 ksi) con luz L = 5 m / 16.4 ft, sometida a una carga uniforme total de servicio q = 12 kN/m / 0.82 kip/ft (incluye peso propio). Sección IPE 200, Iy = 1 943 cm⁴ / 46.7 in⁴, módulo resistente Wel,y = 194 cm³ / 11.8 in³.

| Magnitud | Valor métrico | Valor imperial |
|---|---|---|
| Carga total W = q·L | 60 kN | 13.5 kip |
| Reacción en cada apoyo | 30 kN | 6.74 kip |
| Momento flector máximo \(M_{\max}=W L/8\) | 37.5 kN·m | 27.6 kip·ft |
| Tensión normal máxima \(\sigma = M_{\max}/W_{el}\) | 193.3 MPa | 28.0 ksi |
| Flecha máxima \(\delta_{\max}=5 W L^3/(384 E I)\) | 12.0 mm | 0.47 in |
| Relación flecha/luz | L/416 | L/416 |
| Verificación tensión \(\sigma < f_y/\gamma_{M0}=275/1.05\approx262\) MPa | Cumple | Cumple |
| Verificación flecha admisible L/250 = 20 mm | 12.0 mm / 0.47 in < 20 mm / 0.79 in | Cumple |

## Criterios de diseño
La práctica habitual limita la flecha máxima bajo cargas de servicio a L/250 en vigas de edificación, equivalente a 8 mm en una luz de 2 m / 0.31 in en 6.56 ft. Para combinaciones poco frecuentes se acepta L/300, y en elementos que soporten tabiques frágiles se reduce hasta L/500. La tensión de trabajo en acero no debe superar la resistencia de cálculo fy/γM, con γM = 1.05 según normativa, lo que para S275 da 262 MPa / 38 ksi. En vigas de madera la flecha admisible suele ser L/300 y la tensión admisible a flexión del orden de 10 MPa / 1.45 ksi.

## Preguntas frecuentes

**¿Cuál es la flecha máxima admisible en una viga de acero para uso residencial?**
La flecha se limita habitualmente a L/250, es decir, 8 mm para una viga de 2 m / 0.31 in para 6.56 ft, aunque en zonas con tabiquería frágil se exige L/500 (4 mm / 0.16 in en 2 m).

**¿Cómo se calcula el momento flector máximo en una viga simplemente apoyada con carga puntual?**
El momento máximo vale PL/4, lo que para P=20 kN y L=4 m da 20 kN·m / 14.75 kip·ft, localizándose justo bajo la carga.

**¿Qué efecto tiene duplicar la luz en la flecha de una viga biapoyada con carga uniforme?**
Como la flecha es proporcional a L³, al duplicar la luz de 3 m a 6 m / 9.84 ft a 19.7 ft la flecha se multiplica por 8, pasando, por ejemplo, de 2 mm a 16 mm / 0.08 in a 0.63 in.

**¿Cuál es la pendiente máxima en el extremo de un voladizo con carga puntual?**
La pendiente en el extremo libre vale PL²/(2EI); para P=5 kN, L=1.5 m y una sección con EI=400 kN·m² se obtienen 0.014 rad ≈ 0.8°.

**¿Cómo varía la tensión normal a lo largo de una viga en voladizo con carga uniforme?**
La tensión normal máxima en las fibras extremas es \(M y/I\), con M=WL/2. Para W=10 kN, L=2 m y sección con W_el=80 cm³ se alcanzan 125 MPa / 18.1 ksi en el empotramiento.

**¿Qué diferencia de flecha hay entre una viga simplemente apoyada y una empotrada en ambos extremos bajo carga uniforme?**
La flecha máxima en la viga simplemente apoyada es \(5WL^3/(384EI)\); en la empotrada-empotrada es \(WL^3/(384EI)\). La diferencia es un factor 5, de modo que para W=50 kN, L=6 m y EI=5000 kN·m² se obtienen 7.0 mm y 1.4 mm / 0.28 in y 0.06 in, respectivamente.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/beam_calc_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/beams/theory.cfm
