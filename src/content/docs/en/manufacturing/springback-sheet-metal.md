---
title: "Springback in sheet metal bending"
sidebar:
  label: "Springback in sheet metal bending"
description: "Technical reference: Springback in sheet metal bending"
keywords: ["sheet metal springback by material angle", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "springback"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

The elastic recovery after bending, known as springback, modifies the final bending angle with typical values between 2° and 10° for carbon steels and aluminum alloys, depending on the bend radius and thickness.

## General description
Springback is an inherent phenomenon in cold forming of sheet metal, where the part, once released from the tool, partially recovers its original shape due to the release of elastic stresses accumulated during plastic deformation. As a result, the angle of the bent part is larger than the punch angle, requiring overbending to achieve the desired geometry.

## Operating principle
During bending, the material undergoes a deformation that combines a plastic component (permanent) and an elastic component (recoverable). When the load is removed, the elastic part relaxes and the geometry changes: the bend radius increases and the angle opens. The magnitude of springback is quantified by the recovery factor Ks = (180° – αf) / (180° – αi), where αf is the final angle and αi is the angle imposed by the tool. Compensation consists of overbending the sheet by an angle equal to the predicted springback.

## Springback parameters
The parameters governing springback are the mechanical properties of the material (yield strength, Young's modulus, work hardening coefficient), the bend radius/thickness ratio (R/t), the bending angle, and the rolling direction. The higher the yield strength and the higher the R/t ratio, the greater the elastic recovery.

| Parameter | Typical effect on springback |
| :--- | :--- |
| Yield strength (Re) | Springback increases with Re. |
| Young's modulus (E) | Springback inversely proportional to E. |
| Radius/Thickness ratio (R/t) | Higher R/t leads to greater springback (5–15% additional recovery per unit increase in R/t). |
| Bending angle (αi) | The absolute springback increases with the bending angle. |
| Sheet thickness (t) | For the same radius, smaller thickness gives greater springback. |

## Applicable materials
Springback affects all cold-formed metals, with notable differences depending on the alloy and heat treatment condition.

**Carbon steels** (S235, A36, DC01): Moderate springback (2–5° for 90° angles with R/t ≈ 1).
**Austenitic stainless steels** (AISI 304): High springback (5–8° under the same conditions) due to their high yield strength and strain hardening.
**Aluminum alloys** (6061-T6, 7075-T6): High springback (6–10°), especially in T6 temper.
**Copper and brass** (Cu-DHP, C26000): Low springback (1–3°), due to their low yield strength.
**Titanium** (Ti-6Al-4V): Very high springback (up to 15°), combined with high elastic recovery.

## Advantages and limitations
**Advantages of controlling springback**
- Allows obtaining parts within tight dimensional tolerances (±0.5° in angle).
- Reduces rejects and rework by applying predictive compensation.
- Increases process repeatability.

**Limitations**
- Dependence on lot-to-lot variations in mechanical properties (yield strength can vary by ±10%).
- Need for simulation software or practical tests for complex shapes.
- Tool wear modifies the actual radius and thus the springback.

## Overbending selection guide
To select the overbending angle, it is recommended:
1. Experimentally determine the springback for the material and thickness using a test specimen with the same R/t.
2. Use the simplified springback formula: αpunch = αdesired / (1 + (3·Re·R)/(E·t)), where Re is the yield strength and E is Young's modulus.
3. In series production, use CNC systems with real-time angular measurement and adaptive compensation.
4. For thin sheet geometries (t < 1.5 mm / 0.059 in), anticipate an overbend on the order of 3°–8° depending on the material.

## Parameter tables by material
The lower values refer to 90° bending in a V-die with R/t=1 and cold-rolled sheet. For other conditions, consult specialized literature.

| Material | Thickness t (mm / in) | Bend radius R (mm / in) | Springback angle (°) | Recommended overbend (°) |
| :--- | :--- | :--- | :--- | :--- |
| Carbon steel S235 | 1.0 mm / 0.039 in | 1.0 mm / 0.039 in | 2° | 88° (punch) |
| Carbon steel S235 | 3.0 mm / 0.118 in | 3.0 mm / 0.118 in | 3° | 87° |
| Stainless steel 304 | 1.5 mm / 0.059 in | 1.5 mm / 0.059 in | 6° | 84° |
| Aluminum 6061-T6 | 2.0 mm / 0.079 in | 2.0 mm / 0.079 in | 8° | 82° |
| Aluminum 6061-T6 | 2.0 mm / 0.079 in | 4.0 mm / 0.157 in (R/t=2) | 12° | 78° |
| Brass C26000 | 1.0 mm / 0.039 in | 1.0 mm / 0.039 in | 2° | 88° |
| Titanium Ti-6Al-4V | 1.5 mm / 0.059 in | 1.5 mm / 0.059 in | 14° | 76° |

## Frequently asked questions (FAQ)

**What is the typical springback in a 2 mm thick S235 steel sheet bent to 90°?**
Under normal conditions with R/t=1, the springback is approximately 2.5°; for a thickness of 2 mm / 0.079 in, a punch with an angle of 87.5° would be required to compensate.

**How does the bend radius affect springback in 6061-T6 aluminum?**
With an R/t of 1, springback is around 8°, while for R/t=2 it rises to 12°; doubling the radius adds between 3° and 5° additional, depending on the thickness.

**What precision can be achieved with automatic compensation systems on CNC press brakes?**
Equipment with electronic angle measurement achieves an accuracy of ±0.2°, even on the first part, thanks to real-time adjustment of the overbend during the stroke.

**How much does springback vary due to changes in lot yield strength?**
A ±10% variation in yield strength can modify springback by 1° to 2°, especially in stainless steels; therefore, it is recommended to sample each lot before production.

**Should I consider the rolling direction when estimating springback?**
Yes, springback can differ by up to 1° if bending transversely instead of parallel to the rolling direction, due to the anisotropy of the cold-rolled material.

**Can springback be completely eliminated by heat treatment?**
Annealing the sheet reduces the yield strength and thus the springback (up to 50% less) but does not eliminate it completely; using heated dies can minimize it further.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/steel-angles-d_1322.html
