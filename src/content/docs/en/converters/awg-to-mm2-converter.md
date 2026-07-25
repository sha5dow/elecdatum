---
title: "AWG to mm² converter"
sidebar:
  label: "AWG to mm² converter"
description: "Technical reference: AWG to mm² converter"
keywords: ["AWG mm2 wire size converter table", "converters"]
category: "converters"
topic: "wire-units"
subcategory: "awg-to-mm2-converter"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The AWG to mm² converter allows transformation of American Wire Gauge nomenclature into the cross-sectional area expressed in square millimeters. The conversion is indispensable for sizing electrical conductors, calculating current capacity, resistance, and weight when crossing specifications of North American origin with international metric systems.

## Conversion Formula

The relationship between the AWG number (n) and the nominal diameter of a solid copper conductor is defined logarithmically according to ASTM B258. The general expression is:

> **dₙ = 0,127 mm × 92^((36 − n) / 39)**

The circular cross-sectional area is obtained with:

> **Aₙ = (π / 4) × dₙ²**

| Variable | Meaning | Unit |
| --- | --- | --- |
| n | AWG gauge number (dimensionless) | — |
| dₙ | Nominal diameter of solid conductor | mm |
| Aₙ | Calculated cross-sectional area | mm² |

For gauges larger than 0 AWG (denoted as 00, 000, 0000) the values n = −1, −2, −3 are assigned respectively. The formula to obtain the gauge from a known diameter is:

> **n = −39 × log₉₂(dₙ / 0,127 mm) + 36**

## AWG to mm² Conversion Table

The diameter and area values shown correspond to solid annealed copper wire according to AWG specification. For stranded conductor, the outer diameter is slightly larger, although the equivalent cross-section is the same.

| AWG | Diameter (in / mm) | Cross-sectional area (mm² / in²) |
| --- | --- | --- |
| 0000 (4/0) | 0.460 in / 11,7 mm | 107 mm² / 0.166 in² |
| 000 (3/0) | 0.410 in / 10,4 mm | 85,0 mm² / 0.132 in² |
| 00 (2/0) | 0.365 in / 9,27 mm | 67,4 mm² / 0.104 in² |
| 0 (1/0) | 0.325 in / 8,25 mm | 53,5 mm² / 0.0829 in² |
| 1 | 0.289 in / 7,35 mm | 42,4 mm² / 0.0657 in² |
| 2 | 0.258 in / 6,54 mm | 33,6 mm² / 0.0521 in² |
| 3 | 0.229 in / 5,83 mm | 26,7 mm² / 0.0414 in² |
| 4 | 0.204 in / 5,19 mm | 21,1 mm² / 0.0327 in² |
| 5 | 0.182 in / 4,62 mm | 16,8 mm² / 0.0260 in² |
| 6 | 0.162 in / 4,11 mm | 13,3 mm² / 0.0206 in² |
| 7 | 0.144 in / 3,67 mm | 10,6 mm² / 0.0164 in² |
| 8 | 0.129 in / 3,26 mm | 8,36 mm² / 0.0130 in² |
| 9 | 0.114 in / 2,91 mm | 6,63 mm² / 0.0103 in² |
| 10 | 0.102 in / 2,59 mm | 5,26 mm² / 0.00815 in² |
| 11 | 0.0907 in / 2,30 mm | 4,17 mm² / 0.00646 in² |
| 12 | 0.0808 in / 2,05 mm | 3,31 mm² / 0.00513 in² |
| 13 | 0.0720 in / 1,83 mm | 2,63 mm² / 0.00408 in² |
| 14 | 0.0641 in / 1,63 mm | 2,08 mm² / 0.00322 in² |
| 15 | 0.0571 in / 1,45 mm | 1,65 mm² / 0.00256 in² |
| 16 | 0.0508 in / 1,29 mm | 1,31 mm² / 0.00203 in² |
| 17 | 0.0453 in / 1,15 mm | 1,04 mm² / 0.00161 in² |
| 18 | 0.0403 in / 1,02 mm | 0,82 mm² / 0.00127 in² |
| 19 | 0.0359 in / 0,91 mm | 0,65 mm² / 0.00101 in² |
| 20 | 0.0320 in / 0,81 mm | 0,52 mm² / 0.000806 in² |
| 21 | 0.0285 in / 0,72 mm | 0,41 mm² / 0.000635 in² |
| 22 | 0.0254 in / 0,65 mm | 0,33 mm² / 0.000512 in² |
| 23 | 0.0226 in / 0,57 mm | 0,26 mm² / 0.000403 in² |
| 24 | 0.0201 in / 0,51 mm | 0,20 mm² / 0.000310 in² |
| 25 | 0.0179 in / 0,45 mm | 0,16 mm² / 0.000248 in² |
| 26 | 0.0159 in / 0,40 mm | 0,13 mm² / 0.000202 in² |

## How to Convert AWG to mm² Step by Step

1. Identify the AWG number (n) of the conductor. For multiple-zero gauges use n = −1 (00), −2 (000) or −3 (0000).
2. Apply the diameter formula: **dₙ = 0,127 mm × 92^((36 − n) / 39)**.
3. Obtain the area with **Aₙ = (π / 4) × dₙ²**.
4. If the result is desired in square inches, multiply the value in mm² by 0.001550.
5. Round the area to two or three significant figures according to the precision required by the project.

Example for 12 AWG (n = 12):  
d = 0,127 × 92^((36 − 12) / 39) = 0,127 × 92^(24/39) ≈ 2,05 mm  
A = (π / 4) × (2,05)² ≈ 3,31 mm²

## Common Equivalences

| AWG | Approximate mm² | Typical Use |
| --- | --- | --- |
| 10 | 5,26 | 30 A circuits in residential installations (USA) |
| 12 | 3,31 | Receptacles and lighting in housing (20 A) |
| 14 | 2,08 | 15 A lighting circuits |
| 16 | 1,31 | Extension cords and control wiring |
| 18 | 0,82 | Electronics, signal cables |
| 20 | 0,52 | Sensors, internal equipment wiring |
| 22 | 0,33 | Data and telecommunications (telephone) |

## Frequently Asked Questions (FAQ)

### What is the difference between AWG and mm²?

AWG (American Wire Gauge) is a logarithmic scale that indicates the gauge with a dimensionless number, while mm² is a metric area unit that directly expresses the conductor cross-section. In AWG, a higher number corresponds to a thinner conductor and smaller area; in mm² the relationship is direct.

### How is 4/0 AWG converted to mm²?

4/0 AWG is equivalent to 0000 AWG (four zeros). Using n = −3 in the formula yields a diameter of 11,7 mm and a cross-sectional area of 107 mm². It is the largest standardized gauge in the AWG table and is used in high-current feeders.

### Does the AWG gauge affect current capacity?

Yes. Current capacity (ampacity) depends directly on the cross-sectional area. Converting AWG to mm² allows sizing the conductor in metric units using standardized ampacity tables (IEC, NEC). A decrease of three AWG numbers (e.g., from 13 to 10) approximately doubles the area.

### Can the same conversion be used for stranded cable?

Yes. In the AWG system, stranded cable is identified by the equivalent area of a solid conductor. Therefore, the conversion to mm² is the same and the table shown is valid. The outer diameter of stranded cable will be larger than the nominal, but the effective copper area is as indicated.

### Why does a higher AWG number indicate a smaller area?

The AWG scale originated from the number of drawing steps needed to reduce the wire diameter. A higher gauge number implies more drawing steps, which produces a thinner conductor. It is not a direct measure of area, hence the conversion to mm² is required for electrical calculations.

### Is there a quick equivalence table between AWG and mm²?

Yes, the conversion table on this page shows standardized equivalences from 0000 AWG to 26 AWG. For daily work, the most commonly used equivalences are: 10 AWG ≈ 5,26 mm², 12 AWG ≈ 3,31 mm², 14 AWG ≈ 2,08 mm² and 16 AWG ≈ 1,31 mm².

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **convertworld.com**: https://www.convertworld.com/en/
