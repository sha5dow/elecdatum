---
title: "EMT conduit fill table"
sidebar:
  label: "EMT conduit fill table"
description: "Technical reference: EMT conduit fill table"
keywords: ["EMT conduit fill table wire count", "conductores-cables"]
category: "conductores-cables"
topic: "conduit-fill"
subcategory: "conduit-fill-emt"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

EMT (Electrical Metallic Tubing) conduit fill establishes the maximum number of conductors that can be placed in a thin-wall metal tube, ensuring safety, thermal dissipation and ease of installation. The calculation basis is Chapter 9 of the NEC (NFPA 70), which defines cross-sectional areas, fill factors and ampacity adjustments. The typical fill table for THHN/THWN conductors, with a fill factor of 40 % (more than two conductors), is the most commonly used practical reference on site.

## EMT conduit dimensions
The dimensions of electrical metallic tubing (EMT) define the internal capacity to accommodate conductors. Standard commercial diameters in inches and their metric equivalents are used.

| Trade size (in / metric) | Outside diameter (mm / in) | Inside diameter (mm / in) | Internal cross-sectional area (mm² / in²) |
| --- | --- | --- | --- |
| 1/2" (16 mm) | 17,9 / 0.706 | 15,8 / 0.622 | 196 / 0.304 |
| 3/4" (21 mm) | 23,4 / 0.922 | 20,9 / 0.824 | 343 / 0.532 |
| 1" (27 mm) | 29,5 / 1.163 | 26,6 / 1.05 | 555 / 0.860 |
| 1-1/4" (35 mm) | 38,4 / 1.510 | 35,1 / 1.38 | 967 / 1.50 |
| 1-1/2" (41 mm) | 44,2 / 1.740 | 40,9 / 1.61 | 1313 / 2.03 |
| 2" (53 mm) | 55,8 / 2.197 | 52,5 / 2.07 | 2165 / 3.36 |
| 2-1/2" (63 mm) | 73,0 / 2.875 | 69,3 / 2.73 | 3771 / 5.85 |
| 3" (78 mm) | 88,9 / 3.500 | 85,2 / 3.36 | 5701 / 8.84 |
| 3-1/2" (91 mm) | 101,6 / 4.000 | 97,4 / 3.83 | 7451 / 11.55 |
| 4" (103 mm) | 114,3 / 4.500 | 110,0 / 4.33 | 9503 / 14.73 |

## Conductor fill table (EMT)
Maximum number of copper conductors with THHN/THWN insulation allowed in an EMT conduit, applying a fill factor of 40 % (more than two conductors). Reference values per NEC, Chapter 9, Table C.1.

| Trade size (in / mm) | 14 AWG | 12 AWG | 10 AWG | 8 AWG | 6 AWG | 4 AWG | 2 AWG | 1/0 AWG | 2/0 AWG | 4/0 AWG | 250 kcmil | 350 kcmil | 500 kcmil |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1/2" (16 mm) | 11 | 9 | 5 | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3/4" (21 mm) | 21 | 16 | 10 | 5 | 3 | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1" (27 mm) | 34 | 26 | 16 | 9 | 6 | 4 | 2 | 1 | 1 | 0 | 0 | 0 | 0 |
| 1-1/4" (35 mm) | 54 | 42 | 26 | 14 | 10 | 7 | 4 | 3 | 2 | 1 | 1 | 0 | 0 |
| 1-1/2" (41 mm) | 73 | 57 | 36 | 19 | 14 | 9 | 5 | 4 | 3 | 2 | 1 | 1 | 0 |
| 2" (53 mm) | 112 | 88 | 55 | 30 | 22 | 14 | 8 | 7 | 5 | 3 | 2 | 1 | 1 |
| 2-1/2" (63 mm) | 179 | 140 | 88 | 48 | 35 | 23 | 13 | 11 | 8 | 5 | 4 | 3 | 2 |
| 3" (78 mm) | 273 | 213 | 134 | 73 | 53 | 35 | 20 | 17 | 13 | 8 | 6 | 5 | 3 |
| 3-1/2" (91 mm) | 357 | 279 | 175 | 96 | 70 | 46 | 26 | 22 | 17 | 10 | 8 | 6 | 4 |
| 4" (103 mm) | 472 | 369 | 232 | 127 | 92 | 61 | 35 | 29 | 22 | 14 | 11 | 8 | 6 |

## Cross-sectional area formula
The fill calculation is based on the sum of the conductor areas compared to the usable cross-sectional area of the conduit, multiplied by the corresponding fill factor.

> **A_total = Σ (nᵢ × aᵢ) ≤ A_allowable = FR × A_interior**

| Variable | Description | Unit |
| --- | --- | --- |
| A_total | Total area occupied by conductors | mm² |
| nᵢ | Number of conductors of size i | – |
| aᵢ | Cross-sectional area of one conductor (including insulation) of size i | mm² |
| A_allowable | Maximum area allowed for the set of conductors | mm² |
| FR | Fill factor (0.53; 0.31 or 0.40 depending on number of conductors) | – |
| A_interior | Internal cross-sectional area of EMT conduit | mm² |

## Fill factors per NEC
The NEC defines three fill factors based on the number of conductors sharing the conduit.

| Number of conductors | Fill factor (FR) | Percentage of interior area |
| --- | --- | --- |
| 1 | 0.53 | 53 % |
| 2 | 0.31 | 31 % |
| 3 or more | 0.40 | 40 % |

## Ampacity adjustment factors
When multiple current-carrying conductors are installed in the same conduit, the current-carrying capacity of each conductor must be reduced to avoid overheating, per NEC Table 310.15(C)(1).

| Number of current-carrying conductors | Adjustment factor (ampacity multiplier) |
| --- | --- |
| 1 – 3 | 1.00 |
| 4 – 6 | 0.80 |
| 7 – 9 | 0.70 |
| 10 – 20 | 0.50 |
| 21 – 30 | 0.45 |
| 31 – 40 | 0.40 |
| 41 and more | 0.35 |

## Frequently Asked Questions (FAQ)
### What is the maximum number of 12 AWG THHN conductors allowed in a 1/2 inch EMT?
The maximum is 9 conductors, applying the 40% fill factor.

### What percentage of the interior area is used for three or more conductors in the same EMT conduit?
A maximum occupancy of 40% of the interior area is allowed, equivalent to a factor of 0.40.

### How many 10 AWG THHN conductors can be installed in a 2 inch EMT?
Up to 55 10 AWG conductors can be installed, according to the fill table with the 40% factor.

### What is the inside diameter of a 1 inch EMT conduit?
The inside diameter is 1.05 inches / 26.6 mm, which provides an interior area of 0.860 in² / 555 mm².

### How does having 9 current-carrying conductors affect ampacity?
With 9 current-carrying conductors, the ampacity of each conductor is multiplied by 0.70, meaning it is reduced by 30% from the nominal value.

### How many 4/0 AWG conductors fit maximum in a 3 inch EMT?
The maximum allowed is 8 4/0 AWG conductors, considering 40% fill and THHN/THWN insulation.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/conduit-size-d_1738.html
- **southwire.com**: https://www.southwire.com/calculator-conduit
