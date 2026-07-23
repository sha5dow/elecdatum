---
title: "Splines DIN 5480 dimensions"
sidebar:
  label: "Splines DIN 5480 dimensions"
description: "Technical reference: Splines DIN 5480 dimensions"
keywords: ["spline DIN 5480 involute dimensions", "machine-elements"]
category: "machine-elements"
topic: "shafts-couplings"
subcategory: "splines"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General description
DIN 5480 defines involute profile splines with a 30° pressure angle, used in sliding or fixed power transmissions for shafts and hubs. The involute tooth form offers higher fatigue strength and torque capacity compared to straight-sided splines, making them suitable for high-load applications in mechanical engineering, automotive and aerospace. The system is based on the module (m) as the main dimensional parameter, working preferably with centering on the inside or outside diameter depending on service conditions.

## Standard dimensions
The dimensions are established based on the module, number of teeth and type of fit. For a given module and number of teeth, the reference diameter (d<sub>ref</sub>) is the product of both. Tolerances are selected according to the quality and type of coupling. The pressure angle is fixed (30°), while the addendum and dedendum are derived from the module.

| Module (mm / in) | Number of teeth (Z) | Reference diameter d<sub>ref</sub> (mm / in) | Major diameter hub (mm / in) | Minor diameter shaft (mm / in) |
| --- | --- | --- | --- | --- |
| 0,8 / 0.0315 | 6 | 4,8 / 0.1890 | 5,6 / 0.2205 | 3,6 / 0.1417 |
| 1 / 0.0394 | 10 | 10 / 0.3937 | 11,5 / 0.4528 | 8,5 / 0.3346 |
| 1,25 / 0.0492 | 12 | 15 / 0.5906 | 16,9 / 0.6654 | 12,5 / 0.4921 |
| 1,5 / 0.0591 | 15 | 22,5 / 0.8858 | 25,2 / 0.9921 | 18,8 / 0.7402 |
| 2 / 0.0787 | 20 | 40 / 1.5748 | 44,5 / 1.7520 | 34,0 / 1.3386 |
| 2,5 / 0.0984 | 25 | 62,5 / 2.4606 | 69,5 / 2.7362 | 53,5 / 2.1063 |
| 3 / 0.1181 | 30 | 90 / 3.5433 | 99,6 / 3.9213 | 77,4 / 3.0472 |
| 4 / 0.1575 | 35 | 140 / 5.5118 | 154,6 / 6.0866 | 122,6 / 4.8268 |
| 5 / 0.1969 | 40 | 200 / 7.8740 | 219,0 / 8.6220 | 175,0 / 6.8898 |
| 6 / 0.2362 | 45 | 270 / 10.6299 | 295,2 / 11.6220 | 236,4 / 9.3071 |

Note: The major and minor diameters correspond to the fit with centering on the outside diameter and basic clearance. Consult the full DIN 5480 standard for tolerances and centering variants.

## Load capacities
The load capacity of a DIN 5480 spline is primarily determined by the permissible surface pressure on the flanks. For a steel coupling with surface hardness ≥ 58 HRC, the typical admissible pressure is 120 N/mm² / 17,405 psi for fixed joints and 30 N/mm² / 4,351 psi for sliding joints under load. The approximate torque capacity in N·m can be estimated with the simplified formula:

**T = p<sub>adm</sub> · L · d<sub>ref</sub>² · Z / 2**

where p<sub>adm</sub> is the admissible pressure (N/mm²), L the coupling length (mm) and Z the number of teeth. This expression is valid for ideal load distributions. In real applications service factors must be applied (K<sub>A</sub> = 1,25 to 2,5 depending on load uniformity).

## Selection criteria
The selection of the standard spline is based on the module and the number of teeth necessary to transmit the torque with the available hub length. As a rule of thumb:
- The coupling length L is taken between 0,5 and 1,5 times the reference diameter.
- External centering is used when concentricity is critical and loads are high.
- Internal centering is suitable for large lengths where the hub must slide freely.

## Assembly considerations
- Centering is achieved through the outside diameter (major shaft / hub) or inside diameter (minor shaft / hub), defining the radial reference of the assembly.
- In sliding splines, forced lubrication or oil bath should be provided, with a minimum clearance of 0,05 mm / 0.002 in for modules up to 2.
- Assembly must be performed with concentricity control; misalignment greater than 0,03 mm / 0.0012 in per 100 mm / 3.94 in of length reduces service life by more than 50%.
- Tooth edges should be chamfered with a bevel of 0,3 to 0,5 mm / 0.012 to 0.020 in to avoid stress concentrations and facilitate insertion.

## Selection tables by application

| Typical application | Recommended module (mm / in) | Usual number of teeth | Joint type | Recommended centering |
| --- | --- | --- | --- | --- |
| Automotive transmission (primary shaft) | 1,25 – 2 / 0.049 – 0.079 | 13 – 20 | Sliding | Internal |
| Industrial gearbox | 2 – 3 / 0.079 – 0.118 | 16 – 30 | Fixed | External |
| Hydraulic pump (motor coupling) | 1 – 1,5 / 0.039 – 0.059 | 10 – 15 | Fixed with additional key | External |
| Agricultural drive shaft (PTO) | 2,5 – 4 / 0.098 – 0.157 | 20 – 35 | Sliding | Internal |
| Aerospace actuator | 0,8 – 1 / 0.031 – 0.039 | 6 – 10 | Fixed (light alloy) | External |
| Machine tool (spindle) | 3 – 5 / 0.118 – 0.197 | 25 – 45 | Fixed with preload | Mixed (both flanks) |

---

## FAQ
**What is the smallest module defined in DIN 5480?**  
The standard minimum module is 0,5 mm / 0.0197 in, although common catalogs start at 0,8 mm / 0.0315 in. For smaller modules, reference the supplementary standard DIN 5480‑1.

**What pressure angle does DIN 5480 use?**  
The pressure angle is 30°, which provides an optimal compromise between bending strength and contact pressure, reducing sensitivity to centering errors by approximately 15% compared to the 20° angle.

**How is the reference diameter determined?**  
The reference diameter is calculated by multiplying the module by the number of teeth (d<sub>ref</sub> = m × Z). Thus, for module 2 mm / 0.0787 in and 25 teeth, d<sub>ref</sub> is 50 mm / 1.9685 in.

**What minimum coupling length is recommended?**  
The minimum coupling length should be 0,5 times the reference diameter for fixed joints under nominal torque. In sliding joints with full load, at least 0,8 times the reference diameter is recommended to keep the specific pressure below 30 N/mm² / 4,351 psi.

**Does material hardness affect load capacity?**  
Yes, a surface hardness below 58 HRC reduces the admissible pressure by more than 40%. For case-hardened steels with surface hardening (60‑62 HRC), the admissible pressure in a fixed joint can reach 150 N/mm² / 21,756 psi, while in quenched and tempered steels at 300 HB it drops to about 70 N/mm² / 10,152 psi.

**What concentricity tolerances are achieved with external centering?**  
External centering allows eccentricity tolerances of up to 0,015 mm / 0.0006 in for reference diameters up to 50 mm / 1.97 in, a precision up to three times higher than that of internal centering under the same conditions.

## References
- **mcmaster.com**: https://www.mcmaster.com/products/shafts/spline-type~involute/

## Sources Consulted

- **mcmaster.com**: https://www.mcmaster.com/products/shafts/spline-type~involute/
