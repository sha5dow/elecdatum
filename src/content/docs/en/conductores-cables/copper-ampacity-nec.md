---
title: "Copper conductor ampacity NEC"
sidebar:
  label: "Copper conductor ampacity NEC"
description: "Technical reference: Copper conductor ampacity NEC"
keywords: ["NEC copper conductor ampacity table 310.16", "conductores-cables"]
category: "conductores-cables"
topic: "ampacity"
subcategory: "ampacity-copper-nec"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Ampacity is the maximum current, expressed in amperes (A), that a conductor can continuously carry without its temperature exceeding the rating assigned to the insulation. In building electrical installations, the fundamental reference for copper conductors is Table 310.16 of the United States National Electrical Code (NEC). This table provides basic ampacities for conductors with up to three current-carrying conductors in the same raceway or cable, with an ambient temperature of 30 °C / 86 °F and insulation types with limits of 60 °C / 140 °F, 75 °C / 167 °F, and 90 °C / 194 °F. The values must be corrected for ambient temperature higher than the reference and for grouping of more than three conductors.

## Ampacity table (NEC Table 310.16)
The ampacities listed correspond to a maximum of three current-carrying conductors in a raceway, cable, or direct burial, ambient temperature 30 °C / 86 °F. Values are shown for the three most common insulation temperature limits.

| Conductor size | Cross-sectional area | 60 °C / 140 °F (A) | 75 °C / 167 °F (A) | 90 °C / 194 °F (A) |
| :--- | :--- | :--- | :--- | :--- |
| 14 AWG / 2,08 mm² | 2,08 mm² / 0,0032 in² | 15 | 20 | 25 |
| 12 AWG / 3,31 mm² | 3,31 mm² / 0,0051 in² | 20 | 25 | 30 |
| 10 AWG / 5,26 mm² | 5,26 mm² / 0,0082 in² | 30 | 35 | 40 |
| 8 AWG / 8,37 mm² | 8,37 mm² / 0,0130 in² | 40 | 50 | 55 |
| 6 AWG / 13,3 mm² | 13,3 mm² / 0,021 in² | 55 | 65 | 75 |
| 4 AWG / 21,2 mm² | 21,2 mm² / 0,033 in² | 70 | 85 | 95 |
| 3 AWG / 26,7 mm² | 26,7 mm² / 0,041 in² | 85 | 100 | 115 |
| 2 AWG / 33,6 mm² | 33,6 mm² / 0,052 in² | 95 | 115 | 130 |
| 1 AWG / 42,4 mm² | 42,4 mm² / 0,066 in² | 110 | 130 | 150 |
| 1/0 AWG / 53,5 mm² | 53,5 mm² / 0,083 in² | 125 | 150 | 170 |
| 2/0 AWG / 67,4 mm² | 67,4 mm² / 0,105 in² | 145 | 175 | 195 |
| 3/0 AWG / 85,0 mm² | 85,0 mm² / 0,132 in² | 165 | 200 | 225 |
| 4/0 AWG / 107 mm² | 107 mm² / 0,166 in² | 195 | 230 | 260 |
| 250 kcmil / 127 mm² | 127 mm² / 0,197 in² | 215 | 255 | 290 |
| 300 kcmil / 152 mm² | 152 mm² / 0,236 in² | 240 | 285 | 320 |
| 350 kcmil / 177 mm² | 177 mm² / 0,274 in² | 260 | 310 | 350 |
| 400 kcmil / 203 mm² | 203 mm² / 0,315 in² | 280 | 335 | 380 |
| 500 kcmil / 253 mm² | 253 mm² / 0,392 in² | 320 | 380 | 430 |

## Correction factors for ambient temperature
For ambient temperatures different from 30 °C / 86 °F, the table ampacity must be multiplied by the factor corresponding to the insulation thermal class. Use the following references (NEC Table 310.15(B)(2)(a)):

| Ambient temperature | Factor for 60 °C | Factor for 75 °C | Factor for 90 °C |
| :--- | :--- | :--- | :--- |
| ≤ 10 °C / 50 °F | 1,29 | 1,20 | 1,15 |
| 11 – 15 °C / 51 – 59 °F | 1,22 | 1,15 | 1,12 |
| 16 – 20 °C / 60 – 68 °F | 1,15 | 1,11 | 1,08 |
| 21 – 25 °C / 69 – 77 °F | 1,08 | 1,05 | 1,04 |
| 26 – 30 °C / 78 – 86 °F | 1,00 | 1,00 | 1,00 |
| 31 – 35 °C / 87 – 95 °F | 0,91 | 0,94 | 0,96 |
| 36 – 40 °C / 96 – 104 °F | 0,82 | 0,88 | 0,91 |
| 41 – 45 °C / 105 – 113 °F | 0,71 | 0,82 | 0,87 |
| 46 – 50 °C / 114 – 122 °F | 0,58 | 0,75 | 0,82 |
| 51 – 55 °C / 123 – 131 °F | 0,41 | 0,67 | 0,76 |
| 56 – 60 °C / 132 – 140 °F | – | 0,58 | 0,71 |
| 61 – 70 °C / 141 – 158 °F | – | 0,33 | 0,58 |
| 71 – 80 °C / 159 – 176 °F | – | – | 0,41 |

## Adjustment factors for conductor grouping
When more than three current-carrying conductors are installed in the same raceway or cable, the ampacity must be reduced by the following percentages:

| Number of current-carrying conductors | Adjustment factor (%) |
| :--- | :--- |
| 4 – 6 | 80 |
| 7 – 9 | 70 |
| 10 – 20 | 50 |
| 21 – 30 | 45 |
| 31 – 40 | 40 |
| 41 or more | 35 |

## Formula for calculating adjusted ampacity
The final applicable ampacity under real conditions is obtained from the basic table current, corrected for temperature and grouping:

> **I_ajustada = I_base × f_t × f_n**

| Variable | Description | Unit |
| :--- | :--- | :--- |
| I_ajustada | Maximum allowable current under installation conditions | A |
| I_base | Base ampacity per NEC 310.16 for the selected size, material, and insulation | A |
| f_t | Correction factor for ambient temperature (dimensionless) | – |
| f_n | Adjustment factor for number of current-carrying conductors (dimensionless) | – |

## Installation considerations
- Table 310.16 assumes an ambient temperature of 30 °C / 86 °F and a maximum of three current-carrying conductors per raceway. Any deviation requires applying the corresponding correction and adjustment factors.
- Continuous loads (those that operate for more than three consecutive hours) require that the conductor be sized to 125% of the load current, before applying derating factors (NEC 210.19(A)(1)).
- The insulation type determines which column of the table to use: conductors with THHN, THWN-2, or XHHW-2 designations allow using the 90 °C / 194 °F column, provided the equipment terminals are also rated for that temperature.
- Voltage drop is not included in ampacity limits; on long runs it may be necessary to increase the conductor size for this reason.
- The heat dissipation capacity directly affects ampacity: the same copper size supports more current in free air installation than inside a conduit or buried.

## Frequently Asked Questions (FAQ)
### What is the ampacity of a 10 AWG copper conductor with THHN insulation at 90 °C?
According to NEC Table 310.16, a 10 AWG copper conductor with 90 °C / 194 °F insulation can continuously carry 40 A.

### How does an ambient temperature of 40 °C affect the ampacity of a 12 AWG THWN-2 cable?
A 12 AWG copper cable with 90 °C insulation has a base ampacity of 30 A. At 40 °C / 104 °F the correction factor is 0,91, so the capacity is reduced to 27,3 A.

### What adjustment factor corresponds when five current-carrying conductors are installed in the same conduit?
For a group of 4 to 6 current-carrying conductors, the NEC establishes an adjustment factor of 0,80 (80% of the base ampacity).

### What is the cross-sectional area in mm² of a 2/0 AWG conductor?
A 2/0 AWG copper conductor has an equivalent cross-sectional area of 67,4 mm² / 0,105 in².

### If it is necessary to supply a continuous load of 100 A with THWN copper cable at 75 °C, what minimum size is required?
The design current must be 100 A × 1,25 = 125 A. According to the 75 °C / 167 °F column, the minimum size that exceeds this value is 1 AWG (130 A).

### Can a 14 AWG copper cable with 60 °C insulation be used in a 20 A circuit?
No, because the maximum ampacity of a 14 AWG conductor at 60 °C / 140 °F is 15 A, insufficient for a circuit protected at 20 A.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cables-current-rating-a1-a2-b1-b2-d_1875.html
- **southwire.com**: https://www.southwire.com/calculators/reliability-index-calculator
