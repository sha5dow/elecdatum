---
title: "Euler column buckling"
sidebar:
  label: "Euler column buckling"
description: "Technical reference: Euler column buckling"
keywords: ["Euler column buckling critical load length factor", "mechanics"]
category: "mechanics"
topic: "columns"
subcategory: "euler-buckling"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Description
Euler buckling describes the critical compressive load for slender columns, calculated with the formula derived in 1744 by Leonhard Euler. An axially loaded straight column remains stable until the load reaches a critical value; beyond this, sudden buckling occurs with lateral deflections. The theory assumes linear elastic behavior, perfect alignment, and absence of initial stresses. The critical load does not depend on the material strength but on its flexural stiffness (EI) and the effective length of the column.

## Euler Formula
The critical elastic buckling load is given by the following expression, where the constant π² ≈ 9.8696:

\[
P_{cr} = \frac{\pi^2 E I}{(L_{eff})^2} = \frac{\pi^2 E I}{(K L)^2}
\]

| Quantity | Symbol | Units (Metric / Imperial) |
| --- | --- | --- |
| Critical buckling load | \(P_{cr}\) | N / lbf |
| Modulus of Elasticity | \(E\) | Pa (N/m²) / psi |
| Minimum moment of inertia | \(I\) | m⁴ / in⁴ |
| Effective buckling length | \(L_{eff}\) | m / in |
| Actual column length | \(L\) | m / in |
| Effective length factor | \(K\) | dimensionless |

For the ideal case of a column with two pinned ends (K=1), the formula simplifies to \(P_{cr} = \pi^2 E I / L^2\). The critical buckling stress is obtained by dividing by the cross-sectional area \(A\):

\[
\sigma_{cr} = \frac{P_{cr}}{A} = \frac{\pi^2 E}{(L_{eff}/r)^2}
\]

where \(r = \sqrt{I/A}\) is the radius of gyration. Validity is limited to \(\sigma_{cr} < \sigma_y\), with \(\sigma_y\) the yield stress of the material.

## Model Assumptions
The 10 fundamental hypotheses that ensure the applicability of the formula are:

1. The material is homogeneous and isotropic.
2. The compressive load is exclusively axial.
3. The column has no initial stresses.
4. The self-weight of the column is neglected.
5. The column is initially perfectly straight (no load eccentricity).
6. The pinned supports have no friction (they transmit no moment) and the fixed supports are rigid (prevent rotation).
7. The cross-section is uniform over the entire length.
8. The direct stress is very small compared to the bending stress; the material remains in the linear elastic range.
9. The column length is much greater than the cross-sectional dimensions.
10. Failure occurs only by buckling, provided the critical stress does not exceed the yield stress.

## Effective Length and Factor K
The effective buckling length, \(L_{eff} = K L\), adapts the original Euler formula for any support condition. It is defined as the distance between points of zero bending moment in the buckled shape. For columns with simply supported ends, K = 1. Values of K less than 1 correspond to configurations that restrain buckling, increasing the critical load; values greater than 1 reduce the strength.

In practical design, **engineering** effective length factors (\(K_{dis}\)) are used, which increase the theoretical value by 10 % to 20 % to account for imperfections, partial friction, and eccentricities. The following table lists the theoretical values and those recommended for design, based on extreme support conditions.

## Effective Length Factors Based on Support Conditions

| Support Condition | Theoretical K | Design K (\(K_{dis}\)) |
| --- | --- | --- |
| Free – Free | 1.0 | 1.2 |
| Pinned – Free | 1.0 | 1.2 |
| Pinned – Pinned | 1.0 | 1.0 |
| Fixed – Free | 2.0 | 2.1 |
| Fixed – Pinned | 0.707 | 0.8 |
| Fixed – Guided | 1.0 | 1.2 |
| Fixed – Fixed | 0.5 | 0.65 |
| Guided – Free | 2.0 | 2.1 |
| Guided – Pinned | 2.0 | 2.0 |
| Guided – Guided | 1.0 | 1.2 |

*Note: “Pinned” corresponds to supports that allow free rotation but prevent lateral displacement; “Guided” prevents rotation but allows lateral displacement; “Fixed” restricts both rotation and displacement.*

## Slenderness Ratio
The slenderness of a column is quantified by the dimensionless parameter \(\lambda\):

\[
\lambda = \frac{L_{eff}}{r} = \frac{K\,L}{r}
\]

where \(r = \sqrt{I/A}\) is the minimum radius of gyration of the cross-section. Values of \(\lambda\) below a critical limit \(\lambda_{cr}\) indicate that the column is “short” and will fail by yielding before elastic buckling. For \(\lambda > \lambda_{cr}\), the column is considered “long” and the Euler formula is applicable. The critical slenderness is obtained by equating the Euler critical stress to the yield stress:

\[
\lambda_{cr} = \sqrt{\frac{\pi^2 E}{\sigma_y}}
\]

For example, for a steel with E = 200 GPa (29 000 ksi) and \(\sigma_y = 250\) MPa (36.3 ksi), the critical slenderness is approximately 88.9.

## Design Criteria
To select the verification method, compare the column slenderness with the critical value:

- **Long column (\(\lambda > \lambda_{cr}\))** → Elastic buckling governs. Use Euler: \(P_{cr} = \pi^2 E I / (K L)^2\) and apply an appropriate safety factor (typically 1.92 – 2.5 against buckling).
- **Short column (\(\lambda \le \lambda_{cr}\))** → Failure occurs by compressive yielding or inelastic buckling. Use the Johnson parabolic formula or Engesser’s tangent modulus. The allowable stress is limited to the yield stress divided by the safety factor.

In both cases, the design K factors from the table above must be used to account for imperfections. If the slenderness is extremely low (\(\lambda < 10\)), the column is considered stocky and is designed for pure compression only, without buckling risk.

## Application Example
**Problem**: An S275 steel column (E = 200 GPa / 29 000 ksi, \(\sigma_y = 275\) MPa / 39.9 ksi) with a length of 3.5 m (137.8 in) is fixed at the base and free at the top (fixed-free configuration). The cross-section is a circular tube with outer diameter 60 mm (2.36 in) and wall thickness 5 mm (0.197 in). Calculate the critical buckling load, the critical stress, and verify if the Euler formula is applicable.

**Calculation**:
- Area: \(A = \frac{\pi}{4}(d_e^2 - d_i^2) = \frac{\pi}{4}(0.060^2 - 0.050^2) \approx 8.639 \times 10^{-4}\) m² (1.339 in²).
- Moment of inertia (tube): \(I = \frac{\pi}{64}(d_e^4 - d_i^4) = \frac{\pi}{64}(0.060^4 - 0.050^4) \approx 3.293 \times 10^{-7}\) m⁴ (0.791 in⁴).
- Radius of gyration: \(r = \sqrt{I/A} = \sqrt{3.293\times10^{-7} / 8.639\times10^{-4}} \approx 0.0195\) m (0.769 in).
- Effective length (fixed-free, design K = 2.1): \(L_{eff} = 2.1 \times 3.5 = 7.35\) m (289 in).
- Slenderness: \(\lambda = L_{eff} / r = 7.35 / 0.0195 \approx 377\).
- Critical slenderness for S275 steel: \(\lambda_{cr} = \sqrt{\pi^2 \times 200\times10^9 / 275\times10^6} \approx 84.7\).
- Since \(\lambda > \lambda_{cr}\) → Euler is applicable.
- Critical load: \(P_{cr} = \frac{\pi^2 E I}{L_{eff}^2} = \frac{\pi^2 \times 200\times10^9 \times 3.293\times10^{-7}}{7.35^2} \approx 12 048\) N (2 708 lbf).
- Critical stress: \(\sigma_{cr} = P_{cr}/A \approx 13.95 \times 10^6\) Pa = 13.95 MPa (2 023 psi), well below the yield stress.

**Conclusion**: The column will buckle elastically with a load of approximately 12.05 kN (2 708 lbf) and a stress of only 13.95 MPa, confirming its extreme slenderness and the need to stiffen the member.

## Frequently Asked Questions

### What is the critical buckling load for a 2 m long, pinned-pinned steel column with a square tube 50×50×3 mm?
For steel E=200 GPa, I=1.29×10⁻⁷ m⁴, A=5.64×10⁻⁴ m², L_eff=2 m, we obtain P_cr ≈ 63.6 kN / 14 290 lbf, well below the yield stress.

### Which effective length factor should be used for a fixed-fixed column in practical design?
The design factor table recommends K_dis = 0.65 (compared to the theoretical 0.5). It increases the effective length by 30 % relative to the ideal value to absorb imperfections.

### At what slenderness does a 6061-T6 aluminum column cease to be short and Euler govern?
With E = 68.9 GPa / 10 000 ksi and σ_y = 276 MPa / 40 ksi, the critical slenderness is approximately 49.6. Above 50, Euler applies.

### How much does the critical load decrease if the length of a pinned-pinned column is doubled?
Since P_cr ∝ 1/L², doubling the length reduces the critical load to 1/4 of the original value, i.e., a reduction of 75 %, for example from 100 kN to 25 kN.

### What is the maximum load an A36 steel column of 1.5 m, fixed-free, with an IPE 100 profile can support?
With E=200 GPa, I=1.71×10⁻⁶ m⁴, L_eff=3.15 m, P_cr ≈ 340 kN / 76 400 lbf. However, its slenderness λ≈102 exceeds the critical value of 96, so elastic buckling governs.

### What minimum safety factor is usually applied to the critical buckling load in metal structures?
Design codes typically require a safety factor of 2.0 to 2.5 on P_cr for static loads, equivalent to a reduction of the allowable load between 50 % and 60 %.

## References

- **engineersedge.com**: https://www.engineersedge.com/column_buckling/column_ideal.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/columns/columns.cfm

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/column_buckling/column_ideal.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/columns/columns.cfm
