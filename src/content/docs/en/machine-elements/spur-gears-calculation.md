---
title: "Spur gears modules and calculation"
sidebar:
  label: "Spur gears modules and calculation"
description: "Technical reference: Spur gears modules and calculation"
keywords: ["spur gear module pitch diameter calculation", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "spur-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General Information
Spur gears are the simplest type of gear; they transmit motion between parallel shafts using straight teeth oriented radially. Contact between involute profiles ensures a constant transmission ratio. The absence of axial thrust makes them suitable for moderate-speed applications. Modern standard pressure angles are 20° and 25°, while 14.5° is found in older equipment.

The relationship between the module *m* and the number of teeth *z* defines all main dimensions. For gears with 17 or more teeth, the pitch diameter = *m* × *z*. In gears with fewer than 17 teeth, a profile shift is required, resulting in a corrected pitch diameter = *m* × *z* + *m*. Interference and undercutting are avoided by this shift.

## Nomenclature and Standard Dimensions
Standard modules according to ISO 54 series are used universally. The conversion between metric module *m* (mm) and diametral pitch *DP* (in⁻¹) is *DP* = 25.4 / *m*. The following table lists preferred modules and the resulting pitch diameter for a 20-tooth pinion.

| Module *m* (mm) / Equivalent DP (in⁻¹) | Pitch diameter for *z*=20 (mm / in) |
| --- | --- |
| 0.5 / 50.8 | 10 / 0.394 |
| 0.8 / 31.75 | 16 / 0.630 |
| 1 / 25.4 | 20 / 0.787 |
| 1.25 / 20.32 | 25 / 0.984 |
| 1.5 / 16.933 | 30 / 1.181 |
| 2 / 12.7 | 40 / 1.575 |
| 2.5 / 10.16 | 50 / 1.969 |
| 3 / 8.467 | 60 / 2.362 |
| 4 / 6.35 | 80 / 3.150 |
| 5 / 5.08 | 100 / 3.937 |
| 6 / 4.233 | 120 / 4.724 |
| 8 / 3.175 | 160 / 6.299 |
| 10 / 2.54 | 200 / 7.874 |

The face width *b* is typically between 8 and 12 times the module. For commercial modules from 1 to 6 mm, the width usually ranges from 10 to 60 mm (0.39 to 2.36 in). The total tooth depth *h* is 2.25 × *m* and the circular thickness at the pitch circle is π × *m* / 2.

## Load Capacity
Although load capacity for bending and pitting follows methodologies such as AGMA or ISO 6336, a first estimate of the transmission is based on the following kinematic relationships. For a gear pair with efficiency η, the output speed *n₂* and output torque *M₂* are given by:

*n₂* = *n₁* / *i*  
*M₂* = *M₁* × *i* × η  

where *i* = *z₂*/z₁ is the transmission ratio. The mechanical power is maintained except for losses: *P₂* = *P₁* × η.

### Calculation Example
- Input torque: *M₁* = 500 N·m / 369 lbf·ft  
- Transmission ratio: *i* = 3.8  
- Efficiency: η = 0.90  
- Input speed: *n₁* = 2000 rpm  

Results:  
*M₂* = 500 N·m × 3.8 × 0.90 = 1710 N·m (1261 lbf·ft)  
*n₂* = 2000 rpm / 3.8 = 526 rpm  
Input power *P₁* = 300 kW / 402 hp → *P₂* = 270 kW / 362 hp

To safely transmit these loads, tooth fatigue failure must be verified. As an initial guideline, allowable stress values for case-hardened steel of 200 to 400 MPa (29 000 to 58 000 psi) at the tooth root are used.

## Assembly and Adjustments
Spur gears require precise mounting on parallel shafts. The center distance *a* = *m*(*z₁*+*z₂*)/2 must be maintained with tolerances of ±0.05 mm (±0.002 in) for small modules and up to ±0.2 mm (±0.008 in) for large modules. Shaft and hub fits follow the ISO system; a fit of H7/g6 or H7/js6 prevents excessive clearance. Axial fixation is achieved with retaining rings or lock nuts.

Backlash *j* is recommended between 0.03 and 0.10 mm (0.0012 – 0.004 in) for modules from 1 to 4 mm, increasing proportionally with the module. A practical guide is *j* ≈ 0.05 × *m* (in mm). The following table details typical values:

| Module *m* (mm) | Minimum backlash (mm / in) | Maximum backlash (mm / in) |
| --- | --- | --- |
| 1 | 0.03 / 0.0012 | 0.06 / 0.0024 |
| 2 | 0.05 / 0.0020 | 0.10 / 0.0039 |
| 3 | 0.08 / 0.0031 | 0.15 / 0.0059 |
| 4 | 0.10 / 0.0039 | 0.20 / 0.0079 |
| 5 | 0.13 / 0.0051 | 0.25 / 0.0098 |
| 6 | 0.15 / 0.0059 | 0.30 / 0.0118 |

During assembly, the clearance must be checked with feeler gauges and the contact pattern verified using Prussian blue.

## Selection by Application
The following table relates application sectors with typical recommendations for module, pressure angle, and material. The values are indicative and must be confirmed by detailed calculation.

| Application | Typical module *m* (mm) | Pressure angle (°) | Material | Remarks |
| --- | --- | --- | --- | --- |
| Office mechanisms, instrumentation | 0.5 – 1.0 / DP 50.8 – 25.4 | 20° | Brass, plastic (POM) | Low noise, loads < 10 N·m / 7.4 lbf·ft |
| Household appliances (mixers, blenders) | 1.0 – 2.0 / DP 25.4 – 12.7 | 20° | Sintered steel, PA6+GF | Medium speeds, torque up to 50 N·m / 37 lbf·ft |
| Machine tools (lathes, milling machines) | 2.5 – 5.0 / DP 10.16 – 5.08 | 20° or 25° | Case-hardened alloy steel 20MnCr5 | High precision, continuous loads of 200 – 800 N·m / 148 – 590 lbf·ft |
| Light vehicle transmissions | 3.0 – 6.0 / DP 8.47 – 4.23 | 20° | Induction hardened steel 42CrMo4 | Fluctuating loads, typical torque 500 – 1500 N·m / 369 – 1106 lbf·ft |
| Mining, heavy conveyors | 8.0 – 12.0 / DP 3.18 – 2.12 | 25° | Cast steel, deep case hardening | Severe impacts, torque > 2000 N·m / 1475 lbf·ft |

## Frequently Asked Questions
**1. What is the formula for the pitch diameter of a pinion with 20 teeth and module 2 mm?**  
The pitch diameter is 20 × 2 mm = 40 mm (1.575 in). For standard modules this relationship is valid as long as the number of teeth is ≥ 17.

**2. What backlash value is recommended for a module 4 gear?**  
A minimum backlash of 0.10 mm (0.004 in) and maximum of 0.20 mm (0.008 in) is recommended, following the practical rule of 0.05 × *m*.

**3. What is the diametral pitch equivalent to module 3?**  
The equivalent diametral pitch is 25.4 / 3 = 8.467 teeth per inch. A module 3 gear with 30 teeth would have a pitch diameter of 90 mm (3.543 in).

**4. What typical efficiency does a pair of well-lubricated spur gears have?**  
Efficiency varies between 94% and 98%. For preliminary calculations η = 0.95 is used, meaning that with 100 kW (134 hp) input, 95 kW (127 hp) useful output is obtained.

**5. How many minimum teeth without correction are needed for a 20° pressure angle?**  
To avoid interference with a 20° pressure angle, at least 17 teeth on the pinion are required. With 25° the minimum drops to 12 teeth, allowing more compact designs.

**6. What torque can a module 4, case-hardened steel gear transmit for infinite life?**  
A 20-tooth pinion with face width 40 mm, σ_Flim = 350 MPa (50 800 psi), can transmit approximately 1200 N·m (885 lbf·ft) according to ISO 6336. The exact value depends on quality and service factor.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **mcmaster.com**: https://www.mcmaster.com/products/spur-gears/
