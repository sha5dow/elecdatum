---
title: "Panelboard load calculation"
sidebar:
  label: "Panelboard load calculation"
description: "Technical reference: Panelboard load calculation"
keywords: ["panelboard load calculation demand factor", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "panel-loads"
subcategory: "panelboard-load-calculation"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Panelboard load calculation determines the maximum active or apparent power (demand load) that a distribution panelboard must supply. It is obtained from the sum of connected loads, applying standardized demand factors that reflect the probability of simultaneous use. The goal is to select a rated capacity for the panelboard, its busbars, and its overcurrent protective devices that is sufficient and economical, while complying with the safety requirements of the applicable code.

## Calculation formula
> **S_dem = ( Σ S_connected_i × F_dem_i ) × F_coinc**

| Variable | Definition | Unit |
| :--- | :--- | :--- |
| S_dem | Total demand load of the panelboard | kVA |
| S_connected_i | Connected apparent power of load i | kVA |
| F_dem_i | Demand factor for load i | dimensionless (0 to 1) |
| F_coinc | Coincidence factor between loads (if applicable) | dimensionless (0 to 1) |

When not all loads operate simultaneously, a global coincidence factor is used; otherwise, F_coinc = 1 is assumed. The demand factors depend on the load type and local regulations, typically taken from NEC Article 220 or IEC 61439-2.

## Demand factors by load type
The typical values come from US practice (NEC) and are widely adopted in Latin America as a reference for commercial and industrial installations.

### General lighting and receptacles

| Load type | Connected load range | Demand factor |
| :--- | :--- | :--- |
| Residential general lighting | First 3000 VA / 3 kVA | 1.00 (100 %) |
| Residential general lighting | From 3001 VA to 120 kVA | 0.35 (35 %) |
| Residential general lighting | Over 120 kVA | 0.25 (25 %) |
| Commercial lighting | Total lighting load | 1.00 (100 %) up to 15 kVA; then 0.50 (50 %) for the excess |
| General-use receptacles (offices) | Up to 10 kVA | 1.00 (100 %) |
| General-use receptacles (offices) | Excess over 10 kVA | 0.50 (50 %) |

### Electric motors

| Motor rated power (kW / HP) | Typical nameplate current (A) | Applicable demand factor (NEC 430.24) |
| :--- | :--- | :--- |
| 0.37 kW / 0.5 HP | 2.4 A (single-phase 230 V) | 125 % of largest motor full-load current + 100 % of the rest |
| 0.75 kW / 1 HP | 6.9 A (three-phase 208 V) | 125 % of largest motor full-load current + 100 % of the rest |
| 3.73 kW / 5 HP | 16.7 A (three-phase 208 V) | 125 % of largest motor full-load current + 100 % of the rest |
| 18.65 kW / 25 HP | 74.8 A (three-phase 480 V) | 125 % of largest motor full-load current + 100 % of the rest |
| 37.3 kW / 50 HP | 65 A (three-phase 480 V) | 125 % of largest motor full-load current + 100 % of the rest |

### Kitchen and laundry equipment

| Appliance | Typical connected power (kVA) | Demand factor |
| :--- | :--- | :--- |
| Household electric range | 8 – 12 kVA | 0.80 (80 %) for one unit, 0.65 for two |
| Clothes dryer | 5 kVA | 1.00 (100 %) or per nameplate |
| Commercial dishwasher | 3 – 6 kVA | 0.90 (90 %) |

## Calculation procedure
1. **List all loads connected** to the panelboard, classifying them by type (lighting, receptacles, motors, special equipment).
2. **Assign the connected apparent power (S_connected)** for each load in kVA, using nameplate values or standardized tables (e.g., 180 VA per receptacle in offices).
3. **Apply the corresponding demand factor** (F_dem_i) according to the load type and accumulated quantity, in accordance with the design code.
4. **Calculate the partial demand load** by summing the products S_connected_i × F_dem_i.
5. **Apply the coincidence factor** if several sub-panels or groups of loads that do not operate simultaneously are supplied (typically 0.7 to 0.9 for distribution panelboards).
6. **Verify that the rated capacity of the panelboard (in A or kVA) is greater than or equal to the calculated demand load**, and that the main protective device does not exceed the panelboard rating (NEC 408.36).
7. **Record the demand load, design current, and available short-circuit current** on the panelboard label in accordance with NEC 408.6.

## Reference codes and standards
- **NEC 408.30** – Panelboard rating not less than minimum feeder capacity based on load calculations from Article 220.
- **NEC 408.36** – Overcurrent protection of the panelboard: the device shall have a rating not greater than that of the panelboard.
- **NEC Article 220** – Branch-circuit and feeder load calculation methods, including demand factors by occupancy type.
- **IEC 61439-1/-2** – Low-voltage switchgear and controlgear assemblies, heating criteria and verification of rated current capacity.

## Frequently Asked Questions (FAQ)
### What is the demand factor for general lighting in a single-family dwelling?
   The first 3000 VA are taken at 100 % and the remainder up to 120 kVA at 35 %, per NEC Table 220.42.

### What minimum rating should a typical residential main panelboard have in 120/240 V systems?
   The panelboard rating must be at least equal to the calculated demand load; in North American single-family homes, a 100 A or 200 A panelboard is typically installed.

### How much load is assigned to each general-use receptacle in offices?
   A connected load of 180 VA is assigned per single or multiple receptacle, and a demand factor of 100 % up to 10 kVA and 50 % for the excess may be applied.

### How is motor load determined in an industrial panelboard?
   Take 125 % of the full-load current of the largest motor plus 100 % of the current of the remaining motors, per NEC 430.24.

### What do NEC standards require regarding fault current marking on the panelboard?
   In installations other than one- or two-family dwellings, the available short-circuit current and the date of the calculation must be marked on the enclosure with a durable label (NEC 408.6).

### Is it mandatory to apply a demand factor to heating and air conditioning loads?
   A demand factor is only applied if the local code allows it; in the NEC, fixed heating and cooling equipment is considered at 100 % of nameplate current, without demand reduction.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/fans-efficiency-power-consumption-d_197.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2860
