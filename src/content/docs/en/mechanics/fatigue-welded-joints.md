---
title: "Fatigue in welded joints"
sidebar:
  label: "Fatigue in welded joints"
description: "Technical reference: Fatigue in welded joints"
keywords: ["fatigue welded joints IIW classification", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "fatigue-welded"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Summary
Fatigue in welded joints occurs when joints with defects, residual stresses, or inadequate design are subjected to cyclic loads. The fatigue strength of the joint does not correlate with that of the base material and is evaluated using S‑N (Wöhler) curves and FAT detail classes according to the IIW. Residual stresses, material thickness, weld geometry, and environment reduce fatigue life. Pre-normative design criteria, weld stress formulas, IIW classification, and a practical application example are presented.

## Fundamental concepts
Weld fatigue is studied using the stress-life method (S‑N curves) where the alternating stress range Δσ is related to the number of cycles to failure N. Unlike homogeneous parts, the fatigue strength of a welded joint is dominated by the detail geometry, imperfections, and welding residual stresses, not by the ultimate strength of the base material. Higher-strength steel (e.g., S700) does not significantly improve the fatigue strength of the joint compared to mild steel if the detail is the same. The evaluation is based on the nominal stress range (or structural stresses) and the FAT class of the detail, defined as the stress range in MPa that produces failure at 2 × 10⁶ cycles with a survival probability of 95 % (mean curve minus two standard deviations).

## Factors affecting fatigue in welded joints
* **Welding residual stresses:** the thermal process generates tensile stresses in the weld zone that superimpose on cyclic loads, raising the mean stress and drastically reducing fatigue life. Relief treatments (thermal, peening) only partially mitigate this effect.
* **Thickness effect:** in joints with a crack initiating at the weld toe, increasing thickness decreases fatigue strength. The IIW proposes a thickness correction factor (t_ref / t)^n, where n ≈ 0.1–0.25 for thicknesses greater than 25 mm.
* **Defects and imperfections:** inclusions, lack of penetration, undercuts, and porosity act as stress concentrators and crack initiation sites, reducing the effective FAT class.
* **Corrosive environment:** the presence of seawater or aggressive atmospheres accelerates fatigue crack growth and reduces strength by up to 50 % compared to dry conditions.

## Detail classification according to the IIW
The International Institute of Welding (IIW) has established detail classes (FAT) that cover most steel weld configurations. Each class represents the nominal stress range (MPa) that causes failure at 2 × 10⁶ cycles. The family of S‑N curves shares the same slope m = 3 up to the knee point at 5 × 10⁶ cycles, where a constant amplitude fatigue strength Δσ_D = 0.737 × FAT is adopted. For variable amplitudes, a secondary slope m = 5 is used. The classification is presented in the section «FAT class table (IIW)».

## S‑N curves (Wöhler)
S‑N curves for welded steel joints follow the empirical Basquin relationship:

N = C · (Δσ)^( − m)

with
* Δσ  = applied nominal stress range
* N   = number of cycles
* C   = characteristic constant of each FAT class (C = FAT^m · 2 × 10⁶)
* m   = 3 (usual slope for welded steel)

For design, the nominal stress range Δσ ≤ FAT / γ_M is used, where γ_M is the partial safety factor (usually 1.25–1.35). The resulting S‑N curve is plotted on a log‑log scale as a straight line with slope −1/m.

## Design criteria against fatigue
1. **Select details with high FAT class:** whenever possible, use butt welds with full penetration and grinding of the reinforcement (FAT 112) instead of fillet welds (FAT 80 or lower).
2. **Locate welds in low nominal stress zones:** keep them away from geometric stress raisers.
3. **Apply improvement techniques:** grinding of the weld toe, shot peening, or ultrasonic impact treatment (UIT) to introduce compressive residual stresses and raise the effective FAT class (gain of 2–4 classes).
4. **Control thickness:** if t > 25 mm, apply a correction factor to the allowable stress.
5. **Protect against corrosion:** painting, galvanizing, or cathodic protection in marine environments.

## Stress calculation formulas for welds
The following show the basic equations for estimating the nominal stress in the weld under different load states, useful for verification against the FAT class. The formulas assume equivalent static load and consistent units.

| Configuration | Load type | Stress formula | Notes |
|---|---|---|---|
| Butt weld, full penetration | Axial tension/compression | σ = P / (t · l) | t = thickness of thinner plate, l = effective length |
| Butt weld, partial penetration | Axial tension/compression | σ = P / (a · l) | a = effective throat depth |
| Butt weld, full penetration | Bending moment in plane | σ = M_b / Z, Z = l · t² / 6 | M_b in the joint plane |
| T-joint with fillet weld, load perpendicular to weld axis | Shear in throat | τ_⊥ = P / (0.707 · h_n · l) | h_n = fillet weld leg size |
| Fillet weld, load parallel to weld axis | Longitudinal shear | τ_∥ = P / (0.707 · h_n · l) | Load is distributed between two welds if symmetrical |
| Solid shaft butt welded, torsion | Torsional shear | τ = M_t · r / J | r = shaft radius, J = polar moment of inertia of welded section |
| Lap joint with longitudinal fillet welds, axial load | Shear in throat | τ = P / (2 · 0.707 · h_n · l) | Assumes two parallel welds |

> **Unit note:** P [kN / lbf]; t, a, h_n, l [mm / in]; M_b [N·m / lbf·in]; M_t [N·m / lbf·in]; σ, τ [MPa / psi]. When using the formula, consistent units must be employed, making the necessary conversions.

## Load diagrams and typical failure modes
- **Axial load in butt weld:** failure occurs by crack propagation from the weld toe or an internal defect; the uniform nominal stress is evaluated with σ = P / (t·l).
- **Pure bending in butt joint:** the crack starts at the outer tension fiber. The stress diagram is linear, with maximum σ = 6M_b / (l·t²).
- **Fillet welded T-joints with tensile load on the flange:** the weld transmits shear stress; fracture progresses through the throat. τ_⊥ is analyzed in the minimum throat section.
- **Fillet weld under torsion (flange-to-web beam connection):** the shear flow generates τ_∥ stresses in the welds, combined with global bending normal stresses.
- **Combined effects:** in real structural parts, axial, bending, and torsional loads coexist, requiring evaluation of the largest principal stress at the weld toe via vector superposition.

## Practical application example
**Butt joint between S355 steel plates of thickness t = 12 mm / 0.472 in, width l = 100 mm / 3.937 in, full penetration weld without post-treatment (FAT 90).** The applied load generates a cyclic force range of 0 – 120 kN / 0 – 26977 lbf. Determine the fatigue life.

1. Nominal stress range:
   ΔF = 120 kN / 26977 lbf.
   Resisting section A = t·l = 12 mm × 100 mm = 1200 mm² / (0.472 in × 3.937 in = 1.858 in²).
   Δσ = ΔF / A = 120 000 N / 1200 mm² = 100 MPa / (26977 lbf / 1.858 in² ≈ 14518 psi = 14.5 ksi).

2. Comparison with FAT class:
   FAT 90 (as-welded butt weld) → characteristic strength Δσ_c = 90 MPa / 13.05 ksi at 2 × 10⁶ cycles.
   Δσ = 100 MPa > 90 MPa → the joint does not meet the infinite life criterion even at 2 × 10⁶ cycles. Redesign or apply improvement.

3. Alternative: grinding the reinforcement to achieve FAT 112. Then Δσ = 100 MPa < 112 MPa → theoretical life is calculated with:
   N = 2×10⁶ × (112 / 100)^3 ≈ 2×10⁶ × 1.4049 = 2.81×10⁶ cycles.
   With a safety factor γ_M = 1.25, Δσ_perm = 112/1.25 = 89.6 MPa → 100 MPa still exceeds. It is necessary to reduce the load or increase the width.

This example illustrates how the detail and surface quality define robustness against fatigue.

## FAT class table (IIW)
Detail classes for welded steel joints, according to IIW recommendation (FAT 36 to FAT 112). For each class, the characteristic nominal stress range at 2 × 10⁶ cycles and detail examples are given.

| FAT class | Range Δσ_c (MPa) | Range Δσ_c (ksi) | Detail description |
|---|---|---|---|
| FAT 36 | 36 | 5.22 | Fillet weld on cut edge, intermittent welds |
| FAT 40 | 40 | 5.80 | Fillet joint without penetration, visual quality |
| FAT 45 | 45 | 6.53 | Fillet joint with permissible imperfections per ISO 5817‑C |
| FAT 50 | 50 | 7.25 | Fillet weld, transverse loading, root not controlled |
| FAT 56 | 56 | 8.12 | Butt weld with misalignment defects |
| FAT 63 | 63 | 9.14 | As-welded butt weld, partial penetration |
| FAT 71 | 71 | 10.3 | Fillet weld in simple tubular joints |
| FAT 80 | 80 | 11.6 | Fillet weld, standard quality (ISO 5817‑B) |
| FAT 90 | 90 | 13.05 | As-welded butt weld, full penetration |
| FAT 100 | 100 | 14.5 | Butt weld with controlled reinforcement and undercut-free weld toe |
| FAT 112 | 112 | 16.2 | Butt weld with full penetration, reinforcement removed by grinding, and surface inspection |

> For marine corrosion conditions, multiply FAT classes by 0.7 – 0.8. The thickness factor k_s = (25 / t)^0.1 applies when plate thickness t > 25 mm.

## Frequently asked questions
1. **Which FAT class should be used for a full penetration butt weld with smoothed reinforcement?** FAT 112 is assigned if grinding removes all irregularity and the absence of undercuts is guaranteed; this class provides a characteristic strength of 112 MPa / 16.2 ksi at 2 × 10⁶ cycles.
2. **How does plate thickness affect fatigue strength?** Increasing thickness from 10 mm to 25 mm can reduce fatigue strength by about 12‑18 %, correctable by the factor (25/t)^0.1 in the allowable range calculation.
3. **Is it preferable to increase the yield strength of the base steel to improve joint fatigue?** No; raising the steel from S355 (355 MPa / 51.5 ksi) to S700 (700 MPa / 101.5 ksi) does not significantly improve the fatigue strength of the welded detail, since life is governed by geometry and residual stresses.
4. **What effect does a marine environment have on the fatigue life of a welded joint?** In free seawater, the crack growth rate can double, reducing fatigue strength by up to 40 % compared to air, so corrosion protection and the use of reduced FAT curves are recommended.
5. **How much does ultrasonic impact treatment (UIT) of the weld toe improve fatigue?** UIT introduces compressive residual stresses that can raise the effective FAT class by 2‑4 categories, for example, from FAT 90 to FAT 125, depending on thickness and steel.
6. **What slope m and from how many cycles is the slope change in the S‑N curve according to IIW considered?** The S‑N curve for welded steel has slope m = 3 up to 5 × 10⁶ cycles, then changes to m = 5 if the analysis considers variable amplitudes; for constant amplitude, a fatigue limit Δσ_D = 0.737 × FAT is adopted from that point.

## References

- **engineersedge.com**: https://www.engineersedge.com/weld_design_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria.cfm

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/weld_design_menu.shtml
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria.cfm
