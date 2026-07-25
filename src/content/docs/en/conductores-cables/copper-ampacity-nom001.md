---
title: "Copper conductor ampacity NOM-001"
sidebar:
  label: "Copper conductor ampacity NOM-001"
description: "Technical reference: Copper conductor ampacity NOM-001"
keywords: ["copper conductor ampacity table NOM-001 90C", "conductores-cables"]
category: "conductores-cables"
topic: "ampacity"
subcategory: "ampacity-copper-nom"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Ampacity is the maximum electric current that a copper conductor can carry continuously under specific installation conditions without its temperature exceeding the insulation design limit.

## Ampacity table for copper conductors at 90 °C
The values apply to copper conductors with insulation rated for a maximum operating temperature of 90 °C (e.g., THHN, XHHW‑2) in installations with no more than three current-carrying conductors in a raceway or cable, and an ambient temperature of 30 °C / 86 °F, according to NOM‑001‑SEDE.

| AWG / kcmil Size | Cross‑Sectional Area (mm² / kcmil) | Diameter (mm / in) | Ampacity (A) |
| --- | --- | --- | --- |
| 14 | 2.08 mm² / 4.11 kcmil | 1.63 mm / 0.0641 in | 25 |
| 12 | 3.31 mm² / 6.53 kcmil | 2.05 mm / 0.0808 in | 30 |
| 10 | 5.26 mm² / 10.4 kcmil | 2.59 mm / 0.102 in | 40 |
| 8 | 8.36 mm² / 16.5 kcmil | 3.26 mm / 0.129 in | 55 |
| 6 | 13.3 mm² / 26.2 kcmil | 4.11 mm / 0.162 in | 75 |
| 4 | 21.1 mm² / 41.7 kcmil | 5.19 mm / 0.204 in | 95 |
| 3 | 26.7 mm² / 52.6 kcmil | 5.83 mm / 0.229 in | 110 |
| 2 | 33.6 mm² / 66.4 kcmil | 6.54 mm / 0.258 in | 130 |
| 1 | 42.4 mm² / 83.7 kcmil | 7.35 mm / 0.289 in | 150 |
| 1/0 | 53.5 mm² / 106 kcmil | 8.25 mm / 0.325 in | 170 |
| 2/0 | 67.4 mm² / 133 kcmil | 9.27 mm / 0.365 in | 195 |
| 3/0 | 85.0 mm² / 168 kcmil | 10.4 mm / 0.410 in | 225 |
| 4/0 | 107 mm² / 212 kcmil | 11.7 mm / 0.460 in | 260 |
| 250 kcmil | 127 mm² / 250 kcmil | 12.7 mm / 0.500 in | 290 |
| 300 kcmil | 152 mm² / 300 kcmil | 13.9 mm / 0.548 in | 320 |
| 350 kcmil | 177 mm² / 350 kcmil | 15.0 mm / 0.591 in | 350 |
| 400 kcmil | 203 mm² / 400 kcmil | 16.1 mm / 0.633 in | 380 |
| 500 kcmil | 253 mm² / 500 kcmil | 18.0 mm / 0.707 in | 430 |
| 600 kcmil | 304 mm² / 600 kcmil | 19.7 mm / 0.775 in | 475 |
| 750 kcmil | 380 mm² / 750 kcmil | 22.0 mm / 0.866 in | 535 |
| 1000 kcmil | 507 mm² / 1000 kcmil | 25.4 mm / 1.000 in | 615 |

## Temperature correction factors
For ambient temperatures other than 30 °C / 86 °F, the following correction factors shall be applied to the tabulated ampacity. The values are valid for conductors with 90 °C insulation.

| Ambient temperature (°C / °F) | Correction factor |
| --- | --- |
| 21 – 25 °C / 69.8 – 77.0 °F | 1.08 |
| 26 – 30 °C / 78.8 – 86.0 °F | 1.00 |
| 31 – 35 °C / 87.8 – 95.0 °F | 0.91 |
| 36 – 40 °C / 96.8 – 104.0 °F | 0.82 |
| 41 – 45 °C / 105.8 – 113.0 °F | 0.71 |
| 46 – 50 °C / 114.8 – 122.0 °F | 0.58 |
| 51 – 55 °C / 123.8 – 131.0 °F | 0.41 |

## Grouping correction factors
When more than three current-carrying conductors are installed in the same raceway or cable, the ampacity must be multiplied by the indicated factors.

| Number of current-carrying conductors | Correction factor |
| --- | --- |
| 1 – 3 | 1.00 |
| 4 – 6 | 0.80 |
| 7 – 9 | 0.70 |
| 10 – 20 | 0.50 |
| 21 – 30 | 0.45 |
| 31 – 40 | 0.40 |
| 41 or more | 0.35 |

## Corrected ampacity calculation
The corrected ampacity of a conductor is obtained by multiplying the tabulated ampacity by the temperature and grouping correction factors.

> **Icorr = Itable × FT × FA**

where:

| Variable | Description | Unit |
| --- | --- | --- |
| Icorr | Corrected ampacity | A |
| Itable | Tabulated ampacity for 90 °C and 30 °C ambient | A |
| FT | Temperature correction factor | - |
| FA | Grouping correction factor | - |

## Calculation example
A 10 AWG copper conductor with THHN insulation (90 °C) is installed in a raceway with 5 current-carrying conductors, in an ambient of 40 °C / 104 °F.  
- Itable = 40 A  
- FT for 40 °C = 0.82  
- FA for 4‑6 conductors = 0.80  
- Icorr = 40 A × 0.82 × 0.80 = 26.24 A  

The resulting corrected ampacity is 26.24 A.

## Frequently Asked Questions (FAQ)
### What is the ampacity of a 12 AWG copper conductor with THHN insulation (90 °C) for fewer than three conductors in a raceway according to NOM‑001?
The basic ampacity is 30 A when no more than three conductors are used and the ambient temperature remains at 30 °C / 86 °F.

### How is the ampacity of a 10 AWG copper conductor at 90 °C reduced when the ambient temperature reaches 45 °C?
A correction factor of 0.71 is applied, reducing the tabulated ampacity from 40 A to 28.4 A.

### What grouping factor corresponds to 8 current-carrying conductors in the same metallic raceway?
The grouping factor is 0.70, so the ampacity of each conductor must be multiplied by 0.70.

### What is the corrected ampacity of a 6 AWG copper conductor at 90 °C with an ambient temperature of 35 °C and 5 active conductors in the raceway?
Itable = 75 A, FT = 0.91, FA = 0.80, resulting in 75 × 0.91 × 0.80 = 54.6 A.

### What size copper conductor with 90 °C insulation is required to carry a corrected current of 100 A considering a total correction factor of 0.65?
The minimum required tabulated ampacity is 100 A / 0.65 = 153.8 A, therefore a 1/0 AWG conductor with an ampacity of 170 A is selected.

### What is the maximum operating temperature that defines the 90 °C column in NOM‑001 and its equivalent in Fahrenheit?
The maximum insulation operating temperature is 90 °C / 194 °F.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
