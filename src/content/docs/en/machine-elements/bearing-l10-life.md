---
title: "L10 bearing life calculation"
sidebar:
  label: "L10 bearing life calculation"
description: "Technical reference: L10 bearing life calculation"
keywords: ["bearing L10 life calculation dynamic load rating", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "l10-calculation"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Standard dimensions

The selection and calculation of L10 life begins with knowledge of the bearing's principal dimensions. Standard metric series per ISO 15 cover shaft diameters from 10 mm to over 500 mm. The following table lists the external dimensions of deep groove ball bearings of series 60, 62 and 63, used as a basis for the calculation examples.

| ISO designation | Bore diameter d | Outside diameter D | Width B |
| --- | --- | --- | --- |
| 6004 | 20 mm / 0.787 in | 42 mm / 1.654 in | 12 mm / 0.472 in |
| 6204 | 20 mm / 0.787 in | 47 mm / 1.850 in | 14 mm / 0.551 in |
| 6304 | 20 mm / 0.787 in | 52 mm / 2.047 in | 15 mm / 0.591 in |
| 6005 | 25 mm / 0.984 in | 47 mm / 1.850 in | 12 mm / 0.472 in |
| 6205 | 25 mm / 0.984 in | 52 mm / 2.047 in | 15 mm / 0.591 in |
| 6305 | 25 mm / 0.984 in | 62 mm / 2.441 in | 17 mm / 0.669 in |
| 6006 | 30 mm / 1.181 in | 55 mm / 2.165 in | 13 mm / 0.512 in |
| 6206 | 30 mm / 1.181 in | 62 mm / 2.441 in | 16 mm / 0.630 in |
| 6306 | 30 mm / 1.181 in | 72 mm / 2.835 in | 19 mm / 0.748 in |

## Load rating

The dynamic load rating C indicates the constant radial load that a ball bearing can support for a nominal life of 1 million revolutions. The values of C and static load rating C0 are taken from each manufacturer's tables and are the starting point for the L10 calculation.

| ISO designation | Dynamic load rating C | Static load rating C0 |
| --- | --- | --- |
| 6004 | 9,36 kN / 2104 lbf | 5,07 kN / 1140 lbf |
| 6204 | 12,8 kN / 2877 lbf | 6,65 kN / 1495 lbf |
| 6304 | 15,9 kN / 3574 lbf | 7,9 kN / 1776 lbf |
| 6005 | 10,0 kN / 2248 lbf | 5,85 kN / 1315 lbf |
| 6205 | 14,0 kN / 3147 lbf | 7,8 kN / 1753 lbf |
| 6305 | 21,2 kN / 4765 lbf | 10,8 kN / 2428 lbf |
| 6006 | 12,5 kN / 2810 lbf | 7,35 kN / 1652 lbf |
| 6206 | 19,0 kN / 4271 lbf | 10,0 kN / 2248 lbf |
| 6306 | 27,0 kN / 6068 lbf | 14,6 kN / 3282 lbf |

## Selection criteria

The nominal L10 life is calculated using the Lundberg-Palmgren equation:

```
L10 = (C/P)^p   [millions of revolutions]
L10h = (10^6 / (60 n)) * (C/P)^p   [hours]
```

where:
- C = dynamic load rating of the bearing [kN]
- P = equivalent dynamic load [kN]
- p = life exponent (3 for balls, 10/3 for rollers)
- n = rotational speed [rpm]

For combined radial (Fr) and axial (Fa) loads, the equivalent load is obtained from:

```
P = X·Fr + Y·Fa
```

The factors X and Y depend on the ratio Fa/Fr and internal clearance; for typical assemblies with Fa/Fr ≤ e, X=1, Y=0 is taken for ball bearings.

The recommended L10h value for each application guides the final selection. The following table summarizes the required lives based on machine type.

## Selection tables by application

| Application | Recommended L10h life [hours] |
| --- | --- |
| Household appliances, portable tools | 2.000 – 8.000 |
| Fans, small electric motors | 8.000 – 15.000 |
| Machine tools, compressors | 20.000 – 30.000 |
| Centrifugal pumps, conveyors | 30.000 – 50.000 |
| Industrial gearboxes, cranes | 50.000 – 100.000 |
| Large fans, mining equipment | > 100.000 |

These intervals allow the engineer to narrow the search; it can be refined with L5 or L1 reliability analysis when greater safety is required.

## Mounting considerations

1. The fit of the inner ring to the shaft should be interference if the ring rotates relative to the load; a loose fit causes sliding and reduces actual life by up to 5 times.
2. Internal radial clearance increases axial load capacity but can generate vibrations; in precision applications a clearance class of C2, CN or C3 is selected according to thermal expansion.
3. Misalignment between shafts and housings must never exceed 0.0015 rad (1.5 mrad / 0.086°) in deep groove ball bearings, at the risk of reducing L10 life by half.
4. Working temperature above 120 °C / 248 °F requires applying a reduction factor for C that manufacturers publish in their catalogs.
5. Hot mounting by thermal expansion (heating to 110 °C / 230 °F) facilitates installation without damaging the raceways and preserves the catalog nominal life.

## Frequently asked questions

**What does L10 exactly mean?**  
L10 is the nominal life in millions of revolutions that 90% of a group of identical bearings achieve under the same load. It corresponds to a 90% reliability and is the basis of standard sizing.

**What is the life exponent for tapered roller bearings?**  
The exponent p is 10/3, equivalent to 3,33, which reflects the greater sensitivity of roller bearings to load. Thus, a 10% increase in load reduces L10 life by approximately 27% in this type of bearing.

**How is life in millions of revolutions converted to hours?**  
Divide the value in millions of revolutions by the rotational speed in rpm and by 60: L10h = L10 × 10⁶ / (60 n). For example, a bearing with L10 = 500 million revolutions rotating at 1500 rpm will have a life of 5.556 hours.

**What load to use in the calculation if radial and axial forces exist simultaneously?**  
Calculate the equivalent dynamic load P = X·Fr + Y·Fa. For deep groove ball bearings with Fa/Fr ≤ 0,25, X=1 and Y=0; otherwise X=0,56 and Y is between 1 and 2 according to the manufacturer's catalog.

**What happens if the applied load P exceeds the static load rating C0?**  
L10 life should not be calculated because the bearing is in a regime of permanent plastic deformation; under these conditions the life can be less than 100 revolutions. Static safety requires P0 ≤ C0/S0 with S0 ≥ 2 in general.

**What L10h life is recommended for a 50 HP electric motor?**  
An industrial electric motor of that power typically operates between 1.500 and 3.000 rpm, and the recommended life is between 20.000 and 30.000 hours. A safe design value is to select a bearing that provides at least 25.000 hours L10h.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/w-steel-beam-uniform-load-d_1722.html
- **mcmaster.com**: https://www.mcmaster.com/products/bearings/
