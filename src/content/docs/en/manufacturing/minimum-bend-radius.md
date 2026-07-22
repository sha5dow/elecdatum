---
title: "Minimum bend radius by material"
sidebar:
  label: "Minimum bend radius by material"
description: "Technical reference: Minimum bend radius by material"
keywords: ["minimum bend radius sheet metal by material thickness", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "minimum-bend-radius"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Overview
The minimum bend radius for sheet metal is the smallest inside radius that can be achieved without causing fractures, excessive deformation, or significant reduction in part service life. It is generally expressed as a multiple of the material thickness (T) and is a fundamental parameter in the design of parts formed by bending. The most widespread rule — applicable to most metals — states that the minimum inside radius should be at least equal to the sheet thickness (1T). However, the exact value depends on the material's ductility, its heat treatment condition, and the orientation of the bend relative to the rolling direction.

## Parameters by Material
The values in the table below are based on the generic recommendation of **minimum inside radius = 1 × thickness (1T)**, valid as a safe starting point for carbon steel, stainless steel, aluminum, and other metals commonly used in sheet metal work. For highly ductile materials (annealed aluminum, soft copper) smaller radii may be acceptable, while hard steels or cold-rolled steels with hardness above Rb 70 require larger radii and additional precautions regarding bending direction.

| Gauge | Material | Thickness (mm / in) | Minimum Inside Radius 1T (mm / in) |
| --- | --- | --- | --- |
| 16 | Carbon Steel | 1,52 mm / 0.0598 in | 1,52 mm / 0.0598 in |
| 16 | Stainless Steel | 1,59 mm / 0.0625 in | 1,59 mm / 0.0625 in |
| 16 | Aluminum | 1,29 mm / 0.0508 in | 1,29 mm / 0.0508 in |
| 18 | Carbon Steel | 1,21 mm / 0.0478 in | 1,21 mm / 0.0478 in |
| 18 | Stainless Steel | 1,27 mm / 0.0500 in | 1,27 mm / 0.0500 in |
| 18 | Aluminum | 1,02 mm / 0.0403 in | 1,02 mm / 0.0403 in |
| 20 | Carbon Steel | 0,91 mm / 0.0359 in | 0,91 mm / 0.0359 in |
| 20 | Stainless Steel | 0,95 mm / 0.0375 in | 0,95 mm / 0.0375 in |
| 20 | Aluminum | 0,81 mm / 0.0320 in | 0,81 mm / 0.0320 in |
| 22 | Carbon Steel | 0,76 mm / 0.0299 in | 0,76 mm / 0.0299 in |
| 22 | Stainless Steel | 0,79 mm / 0.0312 in | 0,79 mm / 0.0312 in |
| 22 | Aluminum | 0,64 mm / 0.0253 in | 0,64 mm / 0.0253 in |
| 24 | Carbon Steel | 0,61 mm / 0.0239 in | 0,61 mm / 0.0239 in |
| 24 | Stainless Steel | 0,64 mm / 0.0250 in | 0,64 mm / 0.0250 in |
| 24 | Aluminum | 0,51 mm / 0.0201 in | 0,51 mm / 0.0201 in |

**Note:** Thicknesses come from the standard sheet metal gauge table (Source 1). Radii are calculated using the 1T criterion. More ductile materials (e.g., annealed 1xxx series aluminum or soft copper) can be bent with radii as low as **0.5T**, while hardened stainless steels may require **2T** or more. Always consult the technical data sheet for the material you will process.

### Relationship with Rolling Direction
Bending parallel to the rolling direction is more prone to cracking, especially in cold-rolled steels with high hardness. Guidelines extracted from the efunda source are:

- For cold-rolled steel with hardness **Rb 70 – 85** bending parallel to the rolling direction is not recommended.
- For cold-rolled steel with hardness **greater than Rb 85** no bending should be performed, not even perpendicular to the rolling direction.
- Hot-rolled steel allows bending parallel to the rolling direction without severe restrictions.

## Typical Tolerances
In the bending process, geometric tolerances are affected by springback and by the proximity of holes or slots to the bend edge. Although no absolute numerical values are given in the sources used, the following design rules are established to preserve dimensional quality:

- **Minimum edge distance for holes or slots:** at least **3 times the sheet thickness plus the bend radius** (3T + R). If geometry forces holes to be placed closer, it is recommended to extend the slot or hole beyond the bend line.
- **Minimum flange width:** the flange must measure at least **4 times the thickness plus the bend radius** (4T + R). Smaller values can cause part distortion, die slippage, or operator risk.

It is recommended to dimension considering tolerance accumulation and to provide oblong holes in fasteners to absorb variations. Parts should be inspected in a clamping position that cancels the natural bending of the material; interior dimensions of an inside bend shall be measured near the bend zone.

## Advantages and Limitations
**Advantages of respecting the proper minimum radius**

- Prevents crack formation and stress concentrations that would reduce service life.
- Maintains dimensional integrity after bending, minimizing excessive springback.
- Allows bending of low-ductility or heat-treated materials without fracture.

**Limitations and risks**

- A radius that is too large can harm the compact design of the part.
- Very tight radii in hard materials or when bending parallel to the rolling direction cause immediate fractures.
- Failure to comply with minimum distances to holes or edges generates distortions that make the part unusable.
- Cold-rolled steels with hardness > Rb 85 are not bendable; forcing the bend leads to catastrophic breakage.

## Selection Guide
1. **Identify the material and its hardness.** Consult the technical data sheet: carbon steel, stainless steel, aluminum, copper, brass, and whether it is annealed or hardened.
2. **Determine the initial minimum inside radius.** Adopt the value **1T** (radius = thickness) as a baseline for most metals.
3. **Adjust for ductility.** If the material is very ductile (annealed aluminum, soft copper) you can progressively reduce down to **0.5T** with testing validation. For tough or high-strength materials (hardened stainless steel, titanium) increase to **2T** or more.
4. **Check the bend orientation.** Whenever possible, bend perpendicular to the rolling direction. For cold-rolled steels with hardness Rb 70‑85, avoid bending parallel; for hardness > Rb 85, do not perform any bending.
5. **Verify critical distances:** minimum flange width ≥ 4T + R and holes ≥ 3T + R from the bend radius. If they cannot be met, redesign the part or extend the hole beyond the bend line.

Always perform a trial with actual sheet metal before series production; the tabulated values are generic recommendations.

## Frequently Asked Questions
**What is the recommended minimum bend radius for most metals?**  
The minimum inside radius is **1 times the material thickness (1T)**, which is equivalent, for example, to **1,52 mm / 0.0598 in** for a 16-gauge carbon steel sheet. This value constitutes a safe starting point for steel, stainless steel, and aluminum in commercial supply condition.

**Does the rolling direction affect the bend radius?**  
Yes, significantly. For cold-rolled steel with hardness **Rb 70 to 85**, bending parallel to the rolling direction is not recommended, and if the hardness exceeds **Rb 85**, no bending should be performed. Hot-rolled steel allows parallel bending without restrictions.

**What is the minimum flange width required for reliable bending?**  
The flange must measure at least **4 times the material thickness plus the bend radius**. For example, for a sheet of **1,52 mm / 0.0598 in** with a 1T radius, the minimum flange is **2 × 1,52 mm = 3,04 mm / 0.1196 in** (computing 4T + R). Respecting this dimension prevents distortion and die slippage risks.

**How far from the bend can I place a hole without it deforming?**  
Holes or slots must be separated at least **3 times the thickness plus the bend radius (3T + R)**. If the distance is reduced, the hole must be extended beyond the bend line so that deformation does not affect it directly.

**Can aluminum be bent with a radius tighter than 1T?**  
Yes, annealed aluminum and other highly ductile alloys can be bent with radii as small as **0.5T** (for example, **0,65 mm / 0.0256 in** radius for 20-gauge). This must be confirmed with the material supplier and validated through trials, as temper and rolling direction influence the result.

**What happens if a bend radius smaller than the minimum is used?**  
The material will crack on the outer tension side of the bend, possibly leading to complete fracture. In cold-rolled steels with hardness above **Rb 85**, the simple attempt to bend causes breakage, regardless of the radius used.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gauge-sheet-d_915.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/bending_design.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/sites/default/files/company-presentation/smicut_eng_2021-09.pdf
