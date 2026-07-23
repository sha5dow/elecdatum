---
title: "Section modulus by cross section"
sidebar:
  label: "Section modulus by cross section"
description: "Technical reference: Section modulus by cross section"
keywords: ["section modulus Z bending stress calculation", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "section-modulus"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Definition and types of section modulus
The section modulus of any cross section can exceed 300 000 mm³ (18.3 in³) in medium-sized structural profiles and is the determining geometric property for evaluating its bending capacity. Two variants are distinguished: the **elastic** modulus (S), used to verify strength in the elastic range where stress and strain are proportional, and the **plastic** modulus (Z), which quantifies the capacity of the section once the material has fully yielded. Both depend exclusively on the shape of the section, not on the material, and their values are tabulated for standard profiles.

## Notation according to international standards
At least 8 different symbol combinations coexist in structural standards worldwide; the following table lists the most commonly used.

| Region | Standard | Elastic section modulus | Plastic section modulus |
| --- | --- | --- | --- |
| North America | ANSI/AISC 360‑10 (USA) | S | Z |
| North America | CSA S16‑14 (Canada) | S | Z |
| Europe | Eurocode 3 (EN 1993‑1‑1) | *W*<sub>el</sub> | *W*<sub>pl</sub> |
| Great Britain (obsolete) | BS 5950 (withdrawn 2010) | Z | S |
| Japan | Standard specifications for steel structures | W | Z |
| China | GB 50017 | W | W<sub>p</sub> |
| India | IS 800 | Z<sub>e</sub> | Z<sub>p</sub> |
| Australia | AS 4100 | Z | S |

This document uses the North American notation S (elastic) and Z (plastic), as it is the most widespread in technical literature.

## Fundamental formulas for elastic section modulus (S)
The distance *c* from the neutral axis to the farthest fiber is usually half the depth (c = h/2 = 50 mm / 1.97 in for a depth of 100 mm). The elastic section modulus is defined as:

```
S = I / c
```

where *I* is the second moment of area (moment of inertia of the section about the neutral axis) in mm⁴ or in⁴ and *c* is the distance to the extreme fiber in mm or in. Knowing S, the bending moment that produces first yielding (yield moment) is calculated by:

```
M_y = S · σ_y
```

where σ<sub>y</sub> is the yield strength of the material.

## Table of elastic section moduli by cross section
The expressions of S for 8 common shapes are given; the formulas provide the value in mm³ if dimensions are entered in millimeters and in in³ if inches are used.

| Cross section shape | Equation for S | Comment |
| --- | --- | --- |
| Solid rectangle | S = b·h² / 6 | b = width, h = height; NA at centroid |
| Doubly symmetric I-section (strong axis) | S<sub>x</sub> = (B·H²)/6 – (b·h³)/(6·H) | B = flange width, H = total depth; b = web width, h = web depth |
| Doubly symmetric I-section (weak axis) | S<sub>y</sub> = [B²(H‑h)]/6 + [(B‑b)³·h]/(6·B) | NA indicates neutral axis |
| Solid circle | S = π·d³ / 32 | d = diameter |
| Hollow circle (tube) | S = π·(D⁴ – d⁴) / (32·D) | D = outer diameter, d = inner diameter |
| Hollow rectangle (rectangular tube) | S = (B·H³ – b·h³) / (6·H) | B, H external; b, h internal |
| Rhombus (diamond) | S = b·h² / 24 | b = maximum width, h = height |
| C-channel | S = (B·H² – b·h²) / (6·H) | Approximation for symmetric C-section; NA per calculator |

## Plastic section modulus (Z)
For a rectangular section with width *b* = 50 mm and height *h* = 100 mm, Z = b·h²/4 = 125 000 mm³ / 7.63 in³, a value 50% higher than the corresponding elastic section modulus (S = 83 333 mm³). The plastic section modulus depends on the position of the plastic neutral axis (PNA), which divides the section into two areas of equal force (compression and tension) when the material is fully plasticized. For sections with a single material and constant yield strength, the PNA coincides with the axis that equalizes the areas; in composite sections it may shift. Its general expression is:

```
Z = A_C · y_C + A_T · y_T
```

where A<sub>C</sub> and A<sub>T</sub> are the areas on each side of the PNA and y<sub>C</sub>, y<sub>T</sub> are the distances from the centroids of each area to the PNA itself. The plastic resisting moment is:

```
M_p = Z · σ_y
```

and it is always greater than M<sub>y</sub> for the same section and material.

## Elastic‑plastic relationship and shape factor
The shape factor for a solid rectangular section is 1.50, while for a hot-rolled I-section it is usually between 1.12 and 1.15, reflecting a more modest plastic reserve. This factor α is defined as:

```
α = Z / S
```

and represents the ratio of the total plastic capacity to the elastic capacity of the section. Some typical values:
- Solid rectangle: α ≈ 1.5
- Solid circle: α ≈ 1.7
- Solid rhombus: α ≈ 2.0
- Standard I-section (strong axis): α ≈ 1.12 – 1.15
- Thin-walled circular tube: α ≈ 1.27

## Calculation of the resisting moment of a beam
An IPE 240 section with S<sub>x</sub> = 324 000 mm³ (19.8 in³) and S275 steel (σ<sub>y</sub> = 275 MPa / 40 ksi) provides an elastic resisting moment M<sub>y</sub> = 324 000 mm³ × 275 N/mm² = 89.1 kN·m / 65.7 kip·ft. If the plastic capacity is utilized (Z<sub>x</sub> ≈ 366 000 mm³ for the same section), the plastic moment would be M<sub>p</sub> ≈ 100.6 kN·m / 74.2 kip·ft. In practical design:
- **Elastic method (ASD):** it is verified that M<sub>max</sub> ≤ M<sub>y</sub> / Ω, with Ω factor of safety (typically 1.67 for steel).
- **Plastic method (LRFD):** M<sub>p</sub> multiplied by a resistance factor ϕ (≈ 0.9) is used and compared with the factored moment.

## Load diagrams and bending moments
For a simply supported beam with a span of 3 m / 9.84 ft and a centered point load of 10 kN / 2.25 kip, the maximum bending moment is 7.5 kN·m / 5.53 kip·ft. The following table summarizes the most common cases and their maximum moments, needed to select the required section modulus.

| Load condition | Bending moment diagram (description) | Maximum moment M<sub>max</sub> |
| --- | --- | --- |
| Centered point load (P) | Symmetric triangular, maximum at center | M<sub>max</sub> = P·L / 4 |
| Uniformly distributed load (w) | Symmetric parabola, maximum at center | M<sub>max</sub> = w·L² / 8 |
| Two symmetric point loads (P) spaced distance a from supports | Constant trapezoid between loads, linear ramps at ends | M<sub>max</sub> = P·a |
| Offset point load (P) at distance a from left support, b from right | Triangle with peak under load | M<sub>max</sub> = P·a·b / L |
| Point moment applied at end (M<sub>0</sub>) | Linear from end to opposite support | M<sub>max</sub> = M<sub>0</sub> (at the support where it is applied) |

## Design criteria for sections in bending
With a maximum bending moment of 50 kN·m / 36.88 kip·ft and an allowable stress of 160 MPa / 23.2 ksi (A36 steel with safety factor ≈ 1.67), the minimum required section modulus is 50 × 10⁶ N·mm / 160 N/mm² = 312 500 mm³ / 19.06 in³. The fundamental criteria are:

1. **Strength:** S<sub>required</sub> ≥ M<sub>max</sub> / σ<sub>allow</sub> must be satisfied in elastic design, or Z<sub>required</sub> ≥ M<sub>u</sub> / (ϕ·σ<sub>y</sub>) in plastic design.
2. **Section classification:** according to the slenderness of the plates (width‑thickness ratio), sections are defined as compact, non‑compact, or slender, which determines whether the full plastic moment can be reached or must be limited to the elastic or an intermediate value.
3. **Lateral‑torsional buckling:** the unbraced length of the compression flange can reduce the resisting moment of the beam; a modification factor depending on lateral slenderness is applied.
4. **Interaction with other internal forces:** if there is high axial force or shear, the effective section modulus is reduced according to the prescriptions of the applicable standard.

## Practical application example
Selection of an A36 steel beam (σ<sub>y</sub> = 250 MPa / 36 ksi) to cover a span of 4 m / 13.12 ft with a total uniformly distributed load (includes self-weight and live load) of 22 kN/m / 1.51 kip/ft, according to elastic design with allowable stress σ<sub>allow</sub> = 0.6·σ<sub>y</sub> = 150 MPa / 21.75 ksi.

**Step 1 – Maximum moment:**  
M<sub>max</sub> = w·L²/8 = 22 kN/m × (4 m)² / 8 = 44 kN·m ≈ 32.5 kip·ft

**Step 2 – Required section modulus:**  
S<sub>req</sub> = M<sub>max</sub> / σ<sub>allow</sub> = 44 × 10⁶ N·mm / 150 N/mm² = 293 333 mm³ ≈ 17.9 in³

**Step 3 – Section selection:**  
The European profile IPE 240 offers S<sub>x</sub> = 324 000 mm³ / 19.8 in³ (> 293 333 mm³), so it is suitable. Its self-weight of 30.7 kg/m (0.206 kip/ft) is included in the total load; if refinement is needed, it would be recalculated adding the exact weight.

**Step 4 – Verification:**  
Working stress = 44 × 10⁶ N·mm / 324 000 mm³ = 135.8 MPa / 19.7 ksi < 150 MPa → satisfactory.

## Frequently Asked Questions (FAQ)

### 1. What is the section modulus and how is it calculated?
The elastic section modulus *S* of a rectangular section with width 100 mm and height 200 mm (3.94 in × 7.87 in) is S = b·h²/6 = 100·200²/6 = 666 667 mm³ / 40.68 in³. It represents the geometric capacity to resist elastic bending.

### 2. How is the section modulus related to the bending moment?
The fundamental relationship is M<sub>y</sub> = S·σ<sub>y</sub>. For a beam with S = 150 000 mm³ (9.15 in³) and σ<sub>y</sub> = 355 MPa (51.5 ksi), the elastic resisting moment is 53.25 kN·m / 39.28 kip·ft.

### 3. What is the difference between elastic modulus S and plastic modulus Z?
S defines the strength up to the first fiber that yields (I/c), while Z considers full plastification of the section. In a rectangle of 50 mm × 100 mm (1.97 in × 3.94 in): S = 83 333 mm³ / 5.08 in³, Z = 125 000 mm³ / 7.63 in³ (shape factor 1.5).

### 4. Which modulus should be used in seismic zones?
In capacity design, the plastic modulus Z is used to ensure that the plastic hinge reaches moment M<sub>p</sub>. For example, an IPE 300 section has S<sub>x</sub> ≈ 557 000 mm³ (34.0 in³) and Z<sub>x</sub> ≈ 628 000 mm³ (38.3 in³), 12.7% higher.

### 5. How does orientation influence the section modulus of an I-section?
An I-section subjected to bending about its strong axis (S<sub>x</sub>) can have a value 10 times greater than about the weak axis (S<sub>y</sub>); for example, S<sub>x</sub> ≈ 1 000 cm³ (61.0 in³) versus S<sub>y</sub> ≈ 100 cm³ (6.10 in³) in an IPE 300, which requires orienting the web in the direction of the main load.

### 6. What is the typical section modulus of a hollow circular tube?
For a steel tube with outer diameter D = 100 mm (3.94 in) and wall thickness t = 5 mm (0.197 in), the elastic section modulus S = π·(D⁴‑d⁴)/(32·D) ≈ 36 000 mm³ / 2.20 in³, much lower than an I-section of similar weight but effective when there is combined torsion or compression.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/material_science/section_modulus_12893.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/beams/casestudy_bc_simple.cfm
