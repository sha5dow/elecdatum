---
title: "Feeder sizing per NEC"
sidebar:
  label: "Feeder sizing per NEC"
description: "Technical reference: Feeder sizing per NEC"
keywords: ["NEC feeder sizing calculation article 215", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nec"
subcategory: "nec-feeder-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Summary

Feeder sizing according to the National Electrical Code (NEC/NFPA 70) establishes the minimum required ampacity for conductors feeding panels, equipment, or loads downstream of the service entrance. Article 215.2(A) requires that the conductor ampacity not be less than the greater of two criteria: capacity for continuous and non-continuous loads under rated conditions, or capacity after applying temperature correction factors and adjustment for bundling. These rules ensure that the feeder operates safely under any load and environmental conditions.

## General Requirements per NEC Article 215

Section 215.2(A) states that feeder conductors must have an ampacity equal to or greater than the most demanding value between:

1. **Calculation without correction or adjustment:** 125 % of the continuous load plus 100 % of the non-continuous load, evaluated at the temperature column corresponding to the terminals (usually 75 °C per 110.14(C)(1)) before applying any correction or adjustment.
2. **Calculation with correction and adjustment:** 100 % of the total load after applying ambient temperature correction factors [Table 310.15(B)(1)(1)] and conductor bundling adjustment factors [Table 310.15(C)(1)].

This double check ensures that the selected conductor complies both under typical installation conditions and under the most restrictive conditions anticipated for the actual routing.

## Sizing Formula for Standard Terminals (75 °C)

The minimum conductor ampacity, before any correction or adjustment, is calculated with the expression:

> **Min Amp (75 °C) = 1.25 × I_cont + 1.00 × I_nocont**

Where:

| Variable | Description | Unit |
| --- | --- | --- |
| Min Amp (75 °C) | Required conductor ampacity per the 75 °C column of Table 310.16 | A |
| I_cont | Sum of the currents of all loads that operate continuously (3 hours or more) | A |
| I_nocont | Sum of the currents of non-continuous loads | A |

This formula is valid for most installations where the connected equipment is marked for 75 °C conductors. If the terminals at both ends are rated 90 °C and are in separate enclosures, 100 % of the total load may be used based on the 90 °C column [Exception 2 of 215.2(A)(1)].

## Conductor Size Selection

Once the minimum ampacity is determined, the size is chosen from Table 310.16 for copper Type THWN-2 (75 °C column). The most common sizes and their capacities are shown below.

| Size AWG/kcmil (imperial) | Cross-section (mm²) | Ampacity at 75 °C (A) |
| --- | --- | --- |
| 1 AWG | 42.4 mm² | 130 A |
| 1/0 AWG | 53.5 mm² | 150 A |
| 2/0 AWG | 67.4 mm² | 175 A |
| 3/0 AWG | 85.0 mm² | 200 A |
| 4/0 AWG | 107.2 mm² | 230 A |
| 250 kcmil | 127.0 mm² | 255 A |
| 300 kcmil | 152.0 mm² | 285 A |
| 350 kcmil | 177.3 mm² | 310 A |
| 500 kcmil | 253.4 mm² | 380 A |

## Calculation Example

**Case:** feeder with 100 A continuous load and 100 A non-continuous load, 75 °C terminals.

1. Required ampacity = (100 A × 1.25) + 100 A = 225 A.
2. According to the table above, size 4/0 AWG carries 230 A at 75 °C, so it is the minimum allowed.

**Additional case with 100 % continuous load of 180 A:** Ampacity = 180 A × 1.25 = 225 A → same result, 4/0 AWG.

## Temperature and Bundling Adjustments

When the feeder is exposed to ambient temperatures other than 30 °C / 86 °F or when more than three current-carrying conductors are installed in the same raceway, the ampacity is corrected and adjusted. Article 215.2(A)(2) requires that the ampacity after applying these factors not be less than 100 % of the load.

To select the conductor, first calculate the ampacity required in the nominal insulation temperature column (typically 90 °C for THWN-2) using:

> **Nominal Amp (90 °C) = Total load / (Temp_factor × Bundling_factor)**

Ambient temperature correction factors for 90 °C conductor:

| Ambient Temperature | Correction Factor |
| --- | --- |
| 30 °C / 86 °F | 1.00 |
| 40 °C / 104 °F | 0.91 |
| 45 °C / 113 °F | 0.87 |
| 50 °C / 122 °F | 0.82 |
| 55 °C / 131 °F | 0.76 |
| 60 °C / 140 °F | 0.71 |

Bundling adjustment factors (more than three current-carrying conductors in conduit):

| Number of Conductors | Adjustment Factor |
| --- | --- |
| 4 – 6 | 0.80 |
| 7 – 9 | 0.70 |
| 10 – 20 | 0.50 |

**Example with adjustments:** feeder with 180 A continuous, four current-carrying conductors in conduit, ambient temperature 40 °C / 104 °F, 90 °C insulation.

- Required nominal ampacity = 180 A / (0.91 × 0.80) = 180 A / 0.728 ≈ 247 A.
- From the 90 °C column of Table 310.16, conductor 4/0 AWG has 260 A, so it complies. If compared with the criterion without correction (180 A × 1.25 = 225 A), the final sizing remains 4/0 AWG because it must satisfy the most restrictive condition.

## Neutral Conductor Sizing

The neutral of a feeder is sized according to 215.2(B) and 220.61. It is permitted to have an ampacity of 100 % of the continuous and non-continuous loads connected to it. However, its size must not be smaller than the equipment grounding conductor specified in Table 250.122.

**Practical example:** for a feeder with phases of 3/0 AWG protected by a 200 A breaker and a maximum unbalanced current of 30 A:

- Based on load, a 10 AWG neutral (30 A at 75 °C) would suffice.
- However, the minimum equipment grounding conductor for a 200 A device is 6 AWG per 250.122.
- Therefore, the neutral cannot be smaller than 6 AWG.

## Frequently Asked Questions (FAQ)

### What is the minimum ampacity for a feeder with 150 A continuous and 200 A non-continuous at 75 °C terminals?
150 A × 1.25 = 187.5 A; adding the 200 A non-continuous gives 387.5 A, which rounds up to require size 500 kcmil (380 A insufficient, need 400 kcmil or evaluate the next standard).

### What size copper THWN-2 is needed for a continuous load of 120 A with no other adjustments?
120 A × 1.25 = 150 A → 1/0 AWG (150 A at 75 °C).

### How is a feeder sized when the protective device is 100 % rated?
If the breaker is listed for operation at 100 % of its rating, the conductors may be sized at 100 % of the continuous load plus the non-continuous load, instead of applying 125 % to the continuous load.

### What minimum ampacity must a 90 °C conductor have after correction and adjustment for a total load of 200 A?
It must remain at least 200 A after multiplying by the factors; the inverse formula gives Amp_90°C = 200 A / (Temp_factor × Bundling_factor).

### What is the correction factor for a 90 °C conductor operating at 45 °C / 113 °F?
The factor is 0.87 per Table 310.15(B)(1)(1).

### What neutral size does the NEC require for a 100 A feeder with an unbalance of 40 A?
The neutral must carry at least 40 A, but it cannot be smaller than the grounding conductor specified for a 100 A device (8 AWG copper), so 8 AWG is selected.

## Applicable Standards

 - ANSI/NFPA 70, National Electrical Code (NEC), Article 215 — Feeders.
 - NEC Article 310 — Conductors for General Installations, including Table 310.16 (ampacities) and Tables 310.15(B)(1)(1) and 310.15(C)(1) (correction and adjustment).
 - NEC Article 110.14 — Requirements for Electrical Terminals and Connections.
 - NEC Article 220.61 — Neutral Load Calculations.
 - NEC Article 250.122 — Sizing of Equipment Grounding Conductors.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/23_CALC_215.2.pdf
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
