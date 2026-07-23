---
title: "Stress concentration factors Kt"
sidebar:
  label: "Stress concentration factors Kt"
description: "Technical reference: Stress concentration factors Kt"
keywords: ["stress concentration factor Kt notch fillet hole", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "stress-concentration"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## What is the stress concentration factor Kt?
For a circular hole in an infinite plate under tension, the stress concentration factor Kt is exactly 3. The stress concentration factor, denoted as Kt, quantifies the local increase in stress in a part due to geometric irregularities such as holes, notches, grooves, or abrupt cross-section changes. It is defined as the ratio of the actual maximum stress at the discontinuity (σ_max) to a reference nominal stress (σ_nom) calculated far from the concentrator or at the net section:

\[ K_{t} = \frac{\sigma_{\max}}{\sigma_{\text{nom}}} \]

It is a dimensionless number that depends exclusively on the part geometry and the type of load (tension, bending, torsion), but not on the material or absolute size, provided the material is homogeneous and isotropic.

## Calculation formula
In an elliptical hole with semi-axes a (length) and b (width) and radius of curvature ρ = b²/a at the tip of the major axis, the maximum stress results from the Inglis equation:

\[ \sigma_{\max} = \sigma_{0} \left(1 + 2\frac{a}{b}\right) = \sigma_{0} \left(1 + 2\sqrt{\frac{a}{\rho}}\right) \]

For a circular hole (a = b), Kt = 3.0 is obtained. In finite geometries (plates with limited width or shafts with notches), Kt values are determined experimentally or by finite element analysis and are presented in graphs or tables as functions of dimensionless ratios such as d/W (diameter/width in plates) or r/d (fillet radius/smaller diameter in shafts). The nominal stress may be referenced to the gross section (Ktg) or the net section (Ktn); therefore, it is critical to know the definition used before applying the factor in any design calculation.

## Stress concentration factors in flat plates
In flat plates under tension, the most common concentrators are central holes, semicircular notches, and angular notches. The following table shows typical Kt values (referenced to gross section) for a plate with a centered circular hole and different diameter/width ratios (d/W). In all cases, W = 100 mm / 3.937 in and thickness t = 10 mm / 0.394 in.

| Diameter d (mm / in) | Width W (mm / in) | Ratio d/W | Kt (gross) |
|-----------------------|-------------------|--------------|--------------|
| 10 mm / 0.394 in      | 100 mm / 3.937 in | 0.10         | 3.03         |
| 20 mm / 0.787 in      | 100 mm / 3.937 in | 0.20         | 3.14         |
| 30 mm / 1.181 in      | 100 mm / 3.937 in | 0.30         | 3.36         |
| 40 mm / 1.575 in      | 100 mm / 3.937 in | 0.40         | 3.74         |
| 50 mm / 1.969 in      | 100 mm / 3.937 in | 0.50         | 4.32         |

For symmetric semicircular notches, Kt values are higher than for an equivalent hole; for example, with ratio r/W = 0.05 (notch radius 5 mm / 0.197 in and width 100 mm / 3.937 in) the typical Kt is 2.85, while with r/W = 0.02 (radius 2 mm / 0.079 in) it can exceed 4.2. In all cases, the presence of sharp angles significantly raises the coefficients.

## Stress concentration factors in shafts and cylinders
A shaft with a diameter step and a fillet radius r is a classic concentrator. The Kt factor depends on the diameter ratio D/d and the parameter r/d. Typical values for axial load (tension) are shown for a shaft with minor diameter d = 20 mm / 0.787 in and appropriate major diameter D, with variable fillet r.

| Minor diameter d (mm / in) | Major diameter D (mm / in) | Ratio D/d | Fillet radius r (mm / in) | r/d | Kt (axial) |
|-----------------------------|-----------------------------|--------------|-----------------------------|------|--------------|
| 20 mm / 0.787 in            | 30 mm / 1.181 in            | 1.50         | 1 mm / 0.039 in             | 0.05 | 2.55         |
| 20 mm / 0.787 in            | 30 mm / 1.181 in            | 1.50         | 2 mm / 0.079 in             | 0.10 | 1.90         |
| 20 mm / 0.787 in            | 30 mm / 1.181 in            | 1.50         | 4 mm / 0.157 in             | 0.20 | 1.60         |
| 20 mm / 0.787 in            | 40 mm / 1.575 in            | 2.00         | 1 mm / 0.039 in             | 0.05 | 2.85         |
| 20 mm / 0.787 in            | 40 mm / 1.575 in            | 2.00         | 2 mm / 0.079 in             | 0.10 | 2.10         |
| 20 mm / 0.787 in            | 40 mm / 1.575 in            | 2.00         | 4 mm / 0.157 in             | 0.20 | 1.75         |

For bending loads, Kt values are slightly lower (for example, with D/d = 1.5, r/d = 0.10, Kt ≈ 1.75) and for torsion they are even lower (Kt ≈ 1.55 in the same case). The designer should choose the largest fillet radius allowed by the design to minimize concentration.

## Design criteria
The first rule is to keep all transition radii at least 2 mm / 0.079 in when possible, and never less than 1 mm / 0.039 in in parts subjected to fatigue. In critical structural components, it is recommended that the Kt factor not exceed 2.0 for static loads. During machining, surface roughnesses less than Ra 3.2 µm / 126 µin should be specified in the concentration areas to avoid additional micro-notches. For ductile materials under static load, the yield strength allows local yielding and stress redistribution, so failure usually occurs when the average nominal stress reaches the ultimate strength; in these cases, Kt can be omitted in sizing. However, in fatigue or with brittle materials, the designer must always calculate σ_max = Kt · σ_nom and verify that it does not exceed the fatigue limit or the ultimate tensile strength, as appropriate.

## Practical application example
Consider a structural steel S275 plate with width W = 100 mm / 3.937 in, thickness t = 10 mm / 0.394 in and a central hole of d = 20 mm / 0.787 in, subjected to an axial tensile load of F = 50 kN / 11 240 lbf. The gross nominal stress is:

σ_nom = F / (W · t) = 50 000 N / (100 mm · 10 mm) = 50 MPa / 7.25 ksi

The ratio d/W = 20 mm / 100 mm = 0.20. From the corresponding table, Kt = 3.14. Therefore, the maximum stress at the edge of the hole is:

σ_max = 3.14 · 50 MPa = 157 MPa / 22.8 ksi

The yield strength of the material is 275 MPa / 39.9 ksi. With static loading, local yielding prevents sudden failure, but under cyclic loads the concentration factor would act fully. If one wishes to limit σ_max to 200 MPa / 29.0 ksi in fatigue, with the same load a Kt ≤ 4.0 would be needed, which allows holes up to d ≈ 35 mm / 1.378 in (Kt ≈ 3.7). Alternatively, the plate width can be increased or the hole size reduced.

## Frequently asked questions

**What is the typical maximum value of Kt in mechanical parts?** Kt values usually range between 1.0 and 6.0 for most common geometries; a sharp notch with a very small radius can exceed Kt = 10 from a theoretical elastic standpoint, although yielding reduces it in practice.

**Does the Kt factor change with the absolute size of the part?** No, Kt is strictly a function of dimensionless ratios and does not depend on absolute size; the same geometric shape at a 1:10 scale produces an identical Kt.

**What is the exact Kt for a circular hole in an infinite plate under tension?** The value is exactly 3.0, derived from the Kirsch solution.

**How is Kt reduced in a shaft with a shoulder?** Increasing the fillet radius r significantly reduces Kt; for example, for a shaft with D/d = 1.5, changing from r/d = 0.05 to 0.20 lowers Kt from 2.55 to 1.60, a reduction of 37%.

**Is it correct to confuse Kt with the stress intensity factor K?** No, Kt is dimensionless and characterizes a notch without a crack, while K (stress intensity factor) has units of stress·√length and describes the singular field at the tip of a crack.

**Should Kt be applied in the static design of ductile materials?** Generally not, because local yielding redistributes stresses, equalizing the ultimate load to that obtained with elementary formulas; in ductile materials, fatigue failure is the condition that always requires considering Kt.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/material_science/stress_concentration_factors_for_flat_plates__15193.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/stress_concentration/stresscon_intro.cfm
