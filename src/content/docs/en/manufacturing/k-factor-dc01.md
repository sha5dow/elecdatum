---
title: "K-factor sheet metal DC01"
sidebar:
  label: "K-factor sheet metal DC01"
description: "Technical reference: K-factor sheet metal DC01"
keywords: ["DC01 sheet metal k-factor bend allowance table", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "sheet-metal-kfactor"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Definition
The K-factor in sheet metal represents the dimensionless ratio between the position of the neutral axis and the material thickness, and is fundamental for the accurate calculation of the flat pattern development of bent parts. For DC01 steel (according to EN 10130), the K-factor typically ranges between 0.33 and 0.45 in air bending operations, depending on the radius-to-thickness ratio, the rolling direction, and the tool conditions.

## K-factor formula
The K-factor is expressed as:

K = d / T

where:
- d = distance from the inside face of the bend to the neutral axis.
- T = sheet thickness.

From the K-factor, the bend allowance (BA) and bend deduction (BD) are calculated:
BA = (π / 180) × (R + K × T) × A
BD = 2 × (R + T) × tan(A/2) − BA

where R is the inside bend radius and A is the bend angle.

## Table of K-factor values for DC01

Conditions: air bending, V-die, 90° angle, rolling grain parallel to the bend axis. Values are verified for common shop practices with commercial quality pickled and annealed DC01 steel.

| Thickness (mm / in) | V-die opening (mm / in) | Inside radius (mm / in) | K-factor |
| --- | --- | --- | --- |
| 0,5 mm / 0.020 in | 4 mm / 0.157 in | 0,8 mm / 0.031 in | 0,42 |
| 1,0 mm / 0.039 in | 8 mm / 0.315 in | 1,5 mm / 0.059 in | 0,40 |
| 1,5 mm / 0.059 in | 12 mm / 0.472 in | 2,0 mm / 0.079 in | 0,38 |
| 2,0 mm / 0.079 in | 16 mm / 0.630 in | 2,5 mm / 0.098 in | 0,36 |
| 3,0 mm / 0.118 in | 24 mm / 0.945 in | 3,5 mm / 0.138 in | 0,33 |

For bending with transverse grain (grain perpendicular to the bend axis), the K-factor can increase by 0.02 to 0.05.

## Factors affecting the K-factor
- **Radius-to-thickness ratio (R/T)**: as R/T increases, the neutral axis shifts toward the center of the sheet and the K-factor approaches 0.50.
- **Rolling direction**: bending transverse to the grain shifts the neutral axis inward, raising the K-factor.
- **Bending method**: air bending produces more stable K-values than coining or bottom bending.
- **Deformation speed and lubrication**: they influence friction and material stretching, slightly modifying the K-factor.
- **Surface condition and material tolerances**: variations in actual thickness or yield strength of DC01 alter the neutral axis position.

## Applicable materials
Although this table is specific to DC01 steel (equivalent to EN 10130, 1.0330, similar to AISI 1008/1010), the K-factor can be estimated for other low-carbon steels with similar ductility. As a comparative reference, the K-factor ranges for air bending at 90° with V=8×thickness are:

| Material | Typical thickness (mm / in) | K-factor |
| --- | --- | --- |
| DC01 (mild steel) | 0,5–3,0 mm / 0.020–0.118 in | 0,33–0,45 |
| Stainless steel 304 | 0,5–3,0 mm / 0.020–0.118 in | 0,35–0,42 |
| Aluminum 5052-H32 | 0,5–3,0 mm / 0.020–0.118 in | 0,38–0,45 |
| Copper ETP | 0,5–2,0 mm / 0.020–0.079 in | 0,40–0,48 |

## Typical tolerances
In DC01 bending, the expected dimensional tolerances on the developed length using the K-factor from this table are:
- **For thicknesses ≤ 1.5 mm / 0.059 in**: ±0,1 mm / ±0.004 in on the overall part dimension.
- **For thicknesses of 2.0–3.0 mm / 0.079–0.118 in**: ±0,2 mm / ±0.008 in.
These values assume bending machines with positional repeatability of ±0.01 mm / ±0.0004 in and material thickness variation within EN 10130 tolerances.

## Advantages and limitations
**Advantages**:
- The K-factor provides a simple method to predict the sheet development, reducing trial and error in the workshop.
- It is applicable to most formable carbon steels like DC01, with widely available data.
- Combined with CAD/CAM software, it allows obtaining bent parts within tight tolerances.

**Limitations**:
- The K-factor is sensitive to actual tool conditions (punch radius, wear) and the rolling direction, so it may require experimental adjustment.
- It does not account for springback; it must be combined with angular compensations.
- For very tight radii (R/T < 0.5) or thicknesses above 3 mm / 0.118 in, the neutral axis shifts nonlinearly and the K-factor ceases to be constant.

## Selection guide
For air bending of DC01 with a standard V-die (opening = 8 × thickness), use the K-factor from the table for the corresponding thickness. If the V/t ratio is larger (10–12), the inside radius increases and a slightly higher K-factor should be selected (add 0.02–0.04). In parts where the grain direction is unknown or mixed, it is recommended to use the average value of 0.40 for thicknesses ≤ 2 mm and 0.35 for thicknesses > 2 mm. It is always advisable to validate the first parts with measurement on a real sample, adjusting the K-factor according to the observed deviation.

## Frequently asked questions

**What is the recommended K-factor for DC01 of 1.5 mm thickness in 90° bending?**
The recommended K-factor is 0.38 for a V-die of 12 mm / 0.472 in and inside radius of 2.0 mm / 0.079 in, bending parallel to the grain.

**What is the K-factor when bending DC01 transverse to the grain?**
In transverse grain bending, the K-factor usually increases by 0.02 to 0.05; for a thickness of 2.0 mm / 0.079 in, the value of 0.36 can become 0.38–0.41 depending on the severity of stretching.

**Does the K-factor vary with the bend angle?**
For angles between 60° and 120°, the K-factor in DC01 remains practically constant, with variations less than ±0.02 relative to the tabulated values for 90°.

**What development tolerance can I expect using K-factor = 0.40 for DC01 of 1 mm?**
Using a K-factor of 0.40 for DC01 of 1.0 mm / 0.039 in, the typical tolerance on the total developed length of the part is ±0.12 mm / ±0.005 in.

**Is the K-factor used the same in air bending and bottom stamping?**
No: in bottom stamping the material is severely compressed against the tooling and the neutral axis shifts more toward the inside sheet; the K-factor can be 0.05 lower than in air bending under the same nominal conditions.

**For thicknesses above 3 mm / 0.118 in in DC01, can the table be extrapolated?**
Above 3 mm / 0.118 in the R/T ratio is usually smaller and the effects of heterogeneous deformation make the K-factor nonlinear; it is recommended to experimentally determine a specific value instead of extrapolating.

## References consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/factors-safety-fos-d_1624.html
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/fracture_mechanics/fm_lefm_Kc_Matl.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/platbockning

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/factors-safety-fos-d_1624.html
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/fracture_mechanics/fm_lefm_Kc_Matl.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/platbockning
