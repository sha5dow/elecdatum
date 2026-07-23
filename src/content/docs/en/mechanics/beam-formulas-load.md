---
title: "Beam formulas support and load"
sidebar:
  label: "Beam formulas support and load"
description: "Technical reference: Beam formulas support and load"
keywords: ["beam formulas deflection moment reaction", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "beam-formulas"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Introduction
Beams are structural elements that primarily work in bending, with typical spans from 2 m / 6.56 ft in residential building to more than 50 m / 164 ft in bridges. This guide compiles strength of materials formulas for calculating reactions, internal stresses, slopes, and deflections in statically determinate beams subjected to the most common types of load and support conditions.

## Differential equation of the beam
The Euler-Bernoulli beam theory, valid for small deformations of slender beams, establishes that the deflection w(x) of a beam with modulus of elasticity E = 200 GPa / 29000 ksi (typical steel) and moment of inertia I satisfies:

\[
\frac{d^2}{dx^2}\left(EI\frac{d^2w}{dx^2}\right)=q(x)
\]

If the flexural rigidity EI is constant, the equation simplifies to \(EI\, w^{IV} = q(x)\). This is the basis for all the formulas that follow.

## Relationships between load, shear, and moment
The shear force V(x) and bending moment M(x) functions are linked to the distributed load q(x) by the differential relations:

\[
\frac{dV}{dx} = -q(x),\qquad \frac{dM}{dx} = V(x)
\]

For example, for a uniform load q = 8 kN/m / 0.55 kip/ft, the shear force varies linearly and the bending moment parabolically along the beam.

## Table of formulas for common statically determinate beams

| Configuration | Reactions | Maximum bending moment | Maximum deflection |
|---|---|---|---|
| Simply supported beam – central point load P | \(R_A = R_B = P/2\) | \(M_{\max}= \dfrac{P L}{4}\) (at center) | \(\delta_{\max}= \dfrac{P L^3}{48 E I}\) (at center) |
| Simply supported beam – total uniform load W = q L | \(R_A = R_B = W/2\) | \(M_{\max}= \dfrac{W L}{8}\) (at center) | \(\delta_{\max}= \dfrac{5 W L^3}{384 E I}\) (at center) |
| Cantilever beam – point load at free end P | \(R_A = P\) (vertical), \(M_A = P L\) (fixed end) | \(M_{\max}= P L\) (fixed end) | \(\delta_{\max}= \dfrac{P L^3}{3 E I}\) (free end) |
| Cantilever beam – total uniform load W = q L | \(R_A = W\), \(M_A = W L/2\) | \(M_{\max}= \dfrac{W L}{2}\) (fixed end) | \(\delta_{\max}= \dfrac{W L^3}{8 E I}\) (free end) |
| Fixed-ended beam – central point load P | \(R_A = R_B = P/2\), \(M_A = M_B = \dfrac{P L}{8}\) | \(M_{\max}= \dfrac{P L}{8}\) (ends and center, opposite sign) | \(\delta_{\max}= \dfrac{P L^3}{192 E I}\) (center) |
| Fixed-ended beam – total uniform load W = q L | \(R_A = R_B = W/2\), \(M_A = M_B = \dfrac{W L}{12}\) | \(M_{\max}= \dfrac{W L}{12}\) (ends) / \(\dfrac{W L}{24}\) (center) | \(\delta_{\max}= \dfrac{W L^3}{384 E I}\) (center) |

Note: L = clear span, E = modulus of elasticity, I = moment of inertia of the cross section about the neutral axis. The formulas assume linear elastic material and small deformations.

## Numerical application example
A simply supported steel beam S275 (E = 200 GPa / 29 000 ksi, fy = 275 MPa / 40 ksi) with span L = 5 m / 16.4 ft, subjected to a total service uniform load q = 12 kN/m / 0.82 kip/ft (includes self-weight) is designed. Section IPE 200, Iy = 1 943 cm⁴ / 46.7 in⁴, elastic section modulus Wel,y = 194 cm³ / 11.8 in³.

| Quantity | Metric value | Imperial value |
|---|---|---|
| Total load W = q·L | 60 kN | 13.5 kip |
| Reaction at each support | 30 kN | 6.74 kip |
| Maximum bending moment \(M_{\max}=W L/8\) | 37.5 kN·m | 27.6 kip·ft |
| Maximum normal stress \(\sigma = M_{\max}/W_{el}\) | 193.3 MPa | 28.0 ksi |
| Maximum deflection \(\delta_{\max}=5 W L^3/(384 E I)\) | 12.0 mm | 0.47 in |
| Deflection/span ratio | L/416 | L/416 |
| Stress verification \(\sigma < f_y/\gamma_{M0}=275/1.05\approx262\) MPa | Satisfies | Satisfies |
| Deflection verification allowable L/250 = 20 mm | 12.0 mm / 0.47 in < 20 mm / 0.79 in | Satisfies |

## Design criteria
Common practice limits the maximum deflection under service loads to L/250 for building beams, equivalent to 8 mm in a span of 2 m / 0.31 in in 6.56 ft. For unfrequent combinations, L/300 is accepted, and for elements supporting fragile partitions it is reduced to L/500. The working stress in steel must not exceed the design strength fy/γM, with γM = 1.05 according to code, which for S275 gives 262 MPa / 38 ksi. For timber beams, the allowable deflection is usually L/300 and the allowable bending stress is on the order of 10 MPa / 1.45 ksi.

## Frequently asked questions

**What is the maximum allowable deflection in a steel beam for residential use?**
The deflection is commonly limited to L/250, i.e., 8 mm for a beam of 2 m / 0.31 in for 6.56 ft, although in areas with fragile partitions L/500 (4 mm / 0.16 in in 2 m) is required.

**How is the maximum bending moment calculated in a simply supported beam with a point load?**
The maximum moment equals PL/4, which for P=20 kN and L=4 m gives 20 kN·m / 14.75 kip·ft, located directly under the load.

**What effect does doubling the span have on the deflection of a simply supported beam with uniform load?**
Since deflection is proportional to L³, doubling the span from 3 m to 6 m / 9.84 ft to 19.7 ft multiplies the deflection by 8, going, for example, from 2 mm to 16 mm / 0.08 in to 0.63 in.

**What is the maximum slope at the end of a cantilever with a point load?**
The slope at the free end equals PL²/(2EI); for P=5 kN, L=1.5 m and a section with EI=400 kN·m², 0.014 rad ≈ 0.8° is obtained.

**How does the normal stress vary along a cantilever beam with a uniform load?**
The maximum normal stress in the extreme fibers is \(M y/I\), with M=WL/2. For W=10 kN, L=2 m and a section with W_el=80 cm³, 125 MPa / 18.1 ksi is reached at the fixed end.

**What deflection difference is there between a simply supported beam and a fixed-ended beam under uniform load?**
The maximum deflection in the simply supported beam is \(5WL^3/(384EI)\); in the fixed-ended beam it is \(WL^3/(384EI)\). The difference is a factor of 5, so for W=50 kN, L=6 m and EI=5000 kN·m², 7.0 mm and 1.4 mm / 0.28 in and 0.06 in are obtained, respectively.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/beam_calc_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/beams/theory.cfm
