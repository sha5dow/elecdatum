---
title: "AWG wire diameter in mm"
sidebar:
  label: "AWG wire diameter in mm"
description: "Technical reference: AWG wire diameter in mm"
keywords: ["AWG wire diameter mm table", "conductores-cables"]
category: "conductores-cables"
topic: "awg-system"
subcategory: "awg-mm-diameter"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The American Wire Gauge (AWG) is a standardized logarithmic system for sizing electrical conductors, used primarily in North America since 1857. ASTM B-258 defines the nominal diameters of solid round conductors. The higher the gauge number, the smaller the wire diameter: a 24 AWG wire has a diameter of 0,51 mm / 0.0201 in, while a 10 AWG reaches 2,59 mm / 0.102 in. The following table lists the diameters and cross-sectional areas for the most commonly used gauges.

## AWG to Millimeters Conversion Table

| AWG Gauge | Diameter (mm / in) | Cross-sectional area (mm² / in²) |
| --- | --- | --- |
| 0000 (4/0) | 11,7 mm / 0.460 in | 107 mm² / 0.166 in² |
| 000 (3/0) | 10,4 mm / 0.410 in | 85,0 mm² / 0.132 in² |
| 00 (2/0) | 9,27 mm / 0.365 in | 67,4 mm² / 0.105 in² |
| 0 (1/0) | 8,25 mm / 0.325 in | 53,5 mm² / 0.083 in² |
| 1 | 7,35 mm / 0.289 in | 42,4 mm² / 0.066 in² |
| 2 | 6,54 mm / 0.258 in | 33,6 mm² / 0.052 in² |
| 3 | 5,83 mm / 0.229 in | 26,7 mm² / 0.041 in² |
| 4 | 5,19 mm / 0.204 in | 21,1 mm² / 0.033 in² |
| 5 | 4,62 mm / 0.182 in | 16,8 mm² / 0.026 in² |
| 6 | 4,11 mm / 0.162 in | 13,3 mm² / 0.021 in² |
| 7 | 3,67 mm / 0.144 in | 10,6 mm² / 0.016 in² |
| 8 | 3,26 mm / 0.129 in | 8,36 mm² / 0.0130 in² |
| 9 | 2,91 mm / 0.114 in | 6,63 mm² / 0.0103 in² |
| 10 | 2,59 mm / 0.102 in | 5,26 mm² / 0.00816 in² |
| 11 | 2,30 mm / 0.0907 in | 4,17 mm² / 0.00646 in² |
| 12 | 2,05 mm / 0.0808 in | 3,31 mm² / 0.00513 in² |
| 13 | 1,83 mm / 0.0720 in | 2,63 mm² / 0.00407 in² |
| 14 | 1,63 mm / 0.0641 in | 2,08 mm² / 0.00323 in² |
| 15 | 1,45 mm / 0.0571 in | 1,65 mm² / 0.00256 in² |
| 16 | 1,29 mm / 0.0508 in | 1,31 mm² / 0.00203 in² |
| 17 | 1,15 mm / 0.0453 in | 1,04 mm² / 0.00161 in² |
| 18 | 1,02 mm / 0.0403 in | 0,82 mm² / 0.00127 in² |
| 19 | 0,91 mm / 0.0359 in | 0,65 mm² / 0.00101 in² |
| 20 | 0,81 mm / 0.0320 in | 0,52 mm² / 0.00080 in² |
| 21 | 0,72 mm / 0.0285 in | 0,41 mm² / 0.00064 in² |
| 22 | 0,65 mm / 0.0254 in | 0,33 mm² / 0.00051 in² |
| 23 | 0,57 mm / 0.0226 in | 0,26 mm² / 0.00040 in² |
| 24 | 0,51 mm / 0.0201 in | 0,20 mm² / 0.00031 in² |
| 25 | 0,45 mm / 0.0179 in | 0,16 mm² / 0.00025 in² |
| 26 | 0,40 mm / 0.0159 in | 0,13 mm² / 0.00020 in² |

Note: the diameter of a stranded conductor with the same AWG is larger than that of a solid conductor due to the spaces between the strands.

## AWG Diameter Calculation Formula

The nominal diameter of a solid round conductor is calculated using a geometric progression based on the gauge number. For an AWG gauge n (where n ranges from 36 to 0, and n = -1 for 00, n = -2 for 000, n = -3 for 0000), the diameter in millimeters and in inches is:

> **dₙ = 0,127 mm × 92^((36-n)/39) = 0,005 in × 92^((36-n)/39)**

This is equivalent to the exponential expression:

> **dₙ = e^(2,1104 – 0,11594 n) mm**

Where:
- **n**: AWG number (36 to 0; negative values for gauges larger than 0).
- **dₙ**: diameter of the solid conductor (mm or in).
- The ratio between successive gauges is 92^(1/39) ≈ 1,1229.

## Relationship between AWG and Cross-sectional Area

The cross-sectional area is derived directly from the diameter. For a round conductor, the area Aₙ is:

> **Aₙ = (π/4) dₙ² ≈ 0,012668 mm² × 92^((36-n)/19,5)**

The AWG system is logarithmic, which implies practical scaling rules:

- A reduction of 3 AWG numbers approximately doubles the cross-sectional area and conductance (for example, two 14 AWG wires are equivalent in area to one 11 AWG).
- A reduction of 6 AWG numbers doubles the diameter and quadruples the cross-sectional area (for example, 1 mm ≈ 18 AWG, 2 mm ≈ 12 AWG, 4 mm ≈ 6 AWG).
- A reduction of 10 AWG numbers multiplies the area, weight, and conductance by approximately 10.

For illustration, the following table shows how diameter and area vary in steps of 6 gauges:

| AWG Gauge | Diameter (mm / in) | Cross-sectional area (mm² / in²) |
| --- | --- | --- |
| 10 | 2,59 mm / 0.102 in | 5,26 mm² / 0.00816 in² |
| 16 | 1,29 mm / 0.0508 in | 1,31 mm² / 0.00203 in² |
| 4 | 5,19 mm / 0.204 in | 21,1 mm² / 0.033 in² |

## Frequently Asked Questions (FAQ)

### How do I convert an AWG gauge to millimeters?
Use the standard formula dₙ(mm) = 0,127 × 92^((36-n)/39), where n is the AWG number. For gauges thicker than 0, n takes negative values: -1 for 00, -2 for 000, and -3 for 0000. The conversion table in this article provides pre-calculated values.

### What is the diameter in mm of the largest gauges such as 4/0 AWG?
Gauge 0000 AWG (4/0) has a diameter of 11,7 mm / 0.460 in. 000 AWG (3/0) measures 10,4 mm / 0.410 in and 00 AWG (2/0) measures 9,27 mm / 0.365 in.

### Why is the diameter of a stranded cable with the same AWG larger than that of a solid cable?
Because the AWG of a stranded cable is defined by the equivalent cross-sectional area of the solid conductor. Since there are small gaps between the individual strands, the overall outer diameter is always larger than that of a solid conductor of the same gauge.

### What is the difference between AWG and cross-sectional area in mm²?
AWG indicates a gauge number based on conductor diameter, while the area in mm² directly describes the cross-sectional area of the conductor material. The relationship between them is logarithmic: a lower AWG number means a larger diameter and therefore a larger cross-sectional area.

### After how many AWG numbers does the diameter or cross-sectional area double?
Approximately every 6 AWG numbers the conductor diameter doubles (and the cross-sectional area quadruples). Every 3 AWG numbers the cross-sectional area doubles. For example, going from 16 AWG (1,29 mm, 1,31 mm²) to 10 AWG (2,59 mm, 5,26 mm²) reduces the gauge by 6 and doubles the diameter.

### Where is the AWG system primarily used?
The AWG system is predominantly used in North America (United States, Canada, and Mexico) to designate the gauge of copper and aluminum electrical conductors. The rest of the world predominantly uses the metric system based on cross-sectional area in mm² according to IEC 60228.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-cable/
- **southwire.com**: https://www.southwire.com/medias/2304-American-Wire-Gauge-PRINT.pdf?context=bWFzdGVyfHJvb3R8MjQyMTE2fGFwcGxpY2F0aW9uL3BkZnxoYjIvaGJjLzkyMjU2NjM3NDE5ODIvMjMwNF9BbWVyaWNhbl9XaXJlX0dhdWdlX1BSSU5ULnBkZnwxNTlkMGY2OWM2NTQzNDBhYmZiMzE5ZDFlYWRjNTRlMzhjMDU0NTljMjgxM2EyM2I4ZWRkZWFhMWI2NDJjZDRl
