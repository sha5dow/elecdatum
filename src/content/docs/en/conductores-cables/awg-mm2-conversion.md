---
title: "AWG to mm² conversion table"
sidebar:
  label: "AWG to mm² conversion table"
description: "Technical reference: AWG to mm² conversion table"
keywords: ["AWG mm2 wire gauge conversion table", "conductores-cables"]
category: "conductores-cables"
topic: "awg-system"
subcategory: "awg-mm2"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The American Wire Gauge (AWG) is the standardized U.S. system for designating the size of electrical conductors. Its distinguishing feature is that a higher AWG number indicates a smaller diameter. Conversion between AWG and square millimeters is essential in projects that integrate North American components with metric environments, although there is no standardized direct equivalence between the two systems.

## AWG to Diameter Conversion Formula

The definition of the AWG system establishes that 36 AWG is exactly 0.005 inches in diameter, while 0000 AWG (4/0) is 0.46 inches. The scale comprises 40 gauges and 39 steps between 36 AWG and 0000 AWG, with a geometric progression of constant ratio between successive diameters.

The diameter \( d_n \) (in millimeters) of an AWG conductor as a function of its gauge number \( n \) is calculated using the following formula, applicable for gauges from 36 AWG to 0 AWG:

> **\( d_n = 0.127 \times 92^{(36-n)/39} \)**

For gauges larger than 0 AWG, \( n \) takes negative values: -1 for 00 AWG (2/0), -2 for 000 AWG (3/0), and -3 for 0000 AWG (4/0).

| Variable | Meaning | Unit |
| --- | --- | --- |
| \( d_n \) | Conductor diameter for gauge n | mm |
| \( n \) | AWG gauge number (integer) | dimensionless |

The cross-sectional circular area \( A_n \) in mm² is obtained from the calculated diameter using the standard geometric formula:

> **\( A_n = \frac{\pi}{4} d_n^2 \)**

## AWG to Square Millimeters Conversion Table

The table presents the correspondence between standardized AWG gauges, their diameter in millimeters and inches, and the nominal cross-sectional area in square millimeters, which is the determining parameter for ampacity and resistance calculations. The difference between the diameter of a solid conductor and a stranded conductor of the same AWG is that the stranded conductor has a slightly larger overall diameter due to the gaps between wires, although its equivalent conductive area is the same.

| AWG | Diameter | Cross-sectional Area |
| --- | --- | --- |
| 0000 (4/0) | 11.68 mm / 0.460 in | 107 mm² |
| 000 (3/0) | 10.40 mm / 0.410 in | 85.0 mm² |
| 00 (2/0) | 9.27 mm / 0.365 in | 67.4 mm² |
| 0 (1/0) | 8.25 mm / 0.325 in | 53.5 mm² |
| 1 | 7.35 mm / 0.289 in | 42.4 mm² |
| 2 | 6.54 mm / 0.258 in | 33.6 mm² |
| 3 | 5.83 mm / 0.229 in | 26.7 mm² |
| 4 | 5.19 mm / 0.204 in | 21.2 mm² |
| 5 | 4.62 mm / 0.182 in | 16.8 mm² |
| 6 | 4.11 mm / 0.162 in | 13.3 mm² |
| 7 | 3.67 mm / 0.144 in | 10.6 mm² |
| 8 | 3.26 mm / 0.129 in | 8.37 mm² |
| 9 | 2.91 mm / 0.114 in | 6.63 mm² |
| 10 | 2.59 mm / 0.102 in | 5.26 mm² |
| 11 | 2.30 mm / 0.0907 in | 4.17 mm² |
| 12 | 2.05 mm / 0.0808 in | 3.31 mm² |
| 13 | 1.83 mm / 0.0720 in | 2.63 mm² |
| 14 | 1.63 mm / 0.0641 in | 2.08 mm² |
| 15 | 1.45 mm / 0.0571 in | 1.65 mm² |
| 16 | 1.29 mm / 0.0508 in | 1.31 mm² |
| 17 | 1.15 mm / 0.0453 in | 1.04 mm² |
| 18 | 1.02 mm / 0.0403 in | 0.823 mm² |
| 19 | 0.91 mm / 0.0359 in | 0.653 mm² |
| 20 | 0.81 mm / 0.0320 in | 0.518 mm² |
| 21 | 0.72 mm / 0.0285 in | 0.41 mm² |
| 22 | 0.65 mm / 0.0254 in | 0.33 mm² |
| 23 | 0.57 mm / 0.0226 in | 0.26 mm² |
| 24 | 0.51 mm / 0.0201 in | 0.20 mm² |
| 25 | 0.45 mm / 0.0179 in | 0.16 mm² |
| 26 | 0.40 mm / 0.0159 in | 0.13 mm² |

## Practical AWG to Metric Equivalents per UL 83

UL 83 provides the closest practical correspondences between AWG/kcmil and square millimeters, used for selecting insulation and jacket thicknesses. The area values for gauges up to 4/0 AWG come from the standardized nominal area table, while for larger sections kcmil are used with their nearest metric equivalents.

| AWG / kcmil | Closest Nominal mm² Area (UL 83) |
| --- | --- |
| 20 AWG | 0.519 mm² |
| 18 AWG | 0.823 mm² |
| 16 AWG | 1.31 mm² |
| 14 AWG | 2.08 mm² |
| 12 AWG | 3.31 mm² |
| 10 AWG | 5.26 mm² |
| 8 AWG | 8.37 mm² |
| 6 AWG | 13.3 mm² |
| 4 AWG | 21.2 mm² |
| 3 AWG | 26.7 mm² |
| 2 AWG | 33.6 mm² |
| 1 AWG | 42.4 mm² |
| 1/0 AWG | 53.5 mm² |
| 2/0 AWG | 67.4 mm² |
| 3/0 AWG | 85.0 mm² |
| 4/0 AWG | 107 mm² |
| 250 kcmil | 127 mm² |
| 300 kcmil | 152 mm² |
| 350 kcmil | 177 mm² |
| 400 kcmil | 203 mm² |
| 500 kcmil | 253 mm² |
| 600 kcmil | 304 mm² |
| 750 kcmil | 380 mm² |
| 1000 kcmil | 507 mm² |

## Frequently Asked Questions (FAQ)

### What is AWG and why is it relevant to convert it to mm²?

AWG (American Wire Gauge) is a standardized logarithmic system of gauges for round, non-ferrous electrical conductors, used in North America since 1857. Its conversion to mm² is relevant because virtually all international electrical installation standards and cable manufacturers outside North America specify conductor cross-section in square millimeters, so conversion is an essential step for sizing protections, calculating voltage drops, and selecting terminals in projects that combine AWG equipment with metric infrastructure.

### What is the exact equivalence of 10 AWG in mm²?

10 AWG corresponds to a cross-sectional area of 5.26 mm² according to the ASTM B258 standardized table. Commercially, it is associated with 6 mm² when using UL 83’s closest practical equivalence rule, although for electrical sizing purposes the exact value governs resistance and ampacity calculations.

### What diameter differences exist between solid and stranded conductors of the same AWG?

The overall diameter of a stranded conductor is always larger than that of a solid conductor of the same AWG, due to the interstices or empty spaces between the individual wires that make up the stranding. However, the AWG of a stranded conductor is determined by the cross-sectional area of the equivalent solid conductor, so the current-carrying capacity and ohmic resistance per unit length remain the same for both construction types under the same gauge.

### How are gauges larger than 4/0 AWG converted to mm²?

Gauges larger than 4/0 AWG are designated in thousands of circular mils (kcmil, formerly MCM). To convert kcmil to mm², the standard conversion factor is used: 1 kcmil is approximately equal to 0.5067 mm². The UL 83 table establishes direct correspondences: 250 kcmil is associated with 127 mm², 500 kcmil with 253 mm², and 1000 kcmil with 507 mm², among others.

### Is there an exact one-to-one relationship between AWG and IEC metric sizes?

No, there is no direct or standardized equivalence between the AWG system and the IEC 60228 metric system. IEC 60228 defines conductor sizes exclusively in square millimeters (0.5 mm², 0.75 mm², 1 mm², etc.) and does not prescribe cables with AWG or kcmil conductors. The most commonly used equivalences come from standards such as UL 83, which establishes the nearest close sizes for insulation thickness purposes, but these do not imply direct interchangeability from the ampacity standpoint of North American electrical codes.

### What practical rules simplify AWG to mm² conversion without tables?

The fundamental mnemonic rules of the AWG system are: a decrease of 3 gauge numbers approximately doubles the cross-sectional area (and conductance), a decrease of 6 numbers approximately doubles the diameter, and a decrease of 10 numbers multiplies the area and conductance by a factor close to 10. As an absolute reference, 10 AWG corresponds to 5.26 mm²; from this anchor any other gauge can be estimated by applying the geometric progressions of the system.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-cable/
- **southwire.com**: https://www.southwire.com/medias/2304-American-Wire-Gauge-PRINT.pdf?context=bWFzdGVyfHJvb3R8MjQyMTE2fGFwcGxpY2F0aW9uL3BkZnxoYjIvaGJjLzkyMjU2NjM3NDE5ODIvMjMwNF9BbWVyaWNhbl9XaXJlX0dhdWdlX1BSSU5ULnBkZnwxNTlkMGY2OWM2NTQzNDBhYmZiMzE5ZDFlYWRjNTRlMzhjMDU0NTljMjgxM2EyM2I4ZWRkZWFhMWI2NDJjZDRl
