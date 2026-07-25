---
title: "Service entrance sizing"
sidebar:
  label: "Service entrance sizing"
description: "Technical reference: Service entrance sizing"
keywords: ["electrical service entrance sizing calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "service-entrance"
subcategory: "service-entrance-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Service entrance sizing consists of selecting the conductors, the main overcurrent protection, and the short-circuit rating of the service equipment for a safe supply that complies with applicable regulations, such as the National Electrical Code (NEC) or equivalent local codes. The process begins with calculating the total load demanded by the installation and continues with verifying ampacity, voltage drop, and available fault current, ensuring that all components withstand both normal operation and abnormal fault conditions.

## Total Service Entrance Load Calculation
The service entrance load is determined by adding the loads of all branch circuits and applying demand factors according to the type of occupancy. For single-family dwellings, the standard NEC method is used, which computes:

- General lighting load: 3 VA per square foot of habitable area.
- Small appliance load: 1500 VA for each kitchen and laundry circuit.
- Major appliance load with reduced demand (range, dryer, etc.) according to standard tables.
- HVAC load: the larger of heating and air conditioning.
- Other fixed loads: motors, pumps, etc., at 100 %.

The total load in volt-amperes is converted to amperes by dividing by the service voltage (120/240 V single-phase or 120/208 V three-phase).

## Main Conductor Sizing
Service entrance conductors must have an ampacity equal to or greater than the calculated current, considering adjustment factors for temperature and bundling. Selection is based on NEC ampacity tables, as summarized below for copper conductors with THHN/THWN insulation at 75 °C.

| AWG/kcmil Size | Section (mm²) | Ampacity (A) |
|-------------------|---------------|---------------|
| 8 AWG / 8,37 mm²  | 8,37 mm² / 0,0130 in² | 50 A |
| 6 AWG / 13,3 mm²  | 13,3 mm² / 0,0206 in² | 65 A |
| 4 AWG / 21,2 mm²  | 21,2 mm² / 0,0329 in² | 85 A |
| 3 AWG / 26,7 mm²  | 26,7 mm² / 0,0414 in² | 100 A |
| 2 AWG / 33,6 mm²  | 33,6 mm² / 0,0521 in² | 115 A |
| 1 AWG / 42,4 mm²  | 42,4 mm² / 0,0657 in² | 130 A |
| 1/0 AWG / 53,5 mm² | 53,5 mm² / 0,0829 in² | 150 A |
| 2/0 AWG / 67,4 mm² | 67,4 mm² / 0,1045 in² | 175 A |
| 3/0 AWG / 85,0 mm² | 85,0 mm² / 0,1318 in² | 200 A |
| 4/0 AWG / 107 mm²  | 107 mm² / 0,166 in²   | 230 A |
| 250 kcmil / 127 mm² | 127 mm² / 0,197 in²   | 255 A |
| 300 kcmil / 152 mm² | 152 mm² / 0,236 in²   | 285 A |
| 350 kcmil / 177 mm² | 177 mm² / 0,274 in²   | 310 A |
| 400 kcmil / 203 mm² | 203 mm² / 0,315 in²   | 335 A |
| 500 kcmil / 253 mm² | 253 mm² / 0,392 in²   | 380 A |

For aluminum conductors, sizes approximately two AWG sizes larger are required for the same ampacity. Actual ampacity may be reduced by ambient temperatures above 30 °C (86 °F) or by more than three current-carrying conductors in the same raceway, applying the corresponding correction factors.

## Voltage Drop Verification
The voltage drop in the service entrance must not exceed 3 % of the nominal voltage to ensure adequate supply. The practical formula for single-phase alternating current is:

> **ΔV = (2 × L × I × (R cos φ + X sin φ)) / 1000**

where:

| Variable | Description | Typical units |
|----------|-------------|------------------|
| ΔV | Voltage drop | V |
| L | One-way conductor length | m / ft |
| I | Load current | A |
| R | Conductor resistance | Ω/km or Ω/1000 ft |
| X | Conductor reactance | Ω/km or Ω/1000 ft |
| φ | Power factor angle | degrees |

In three-phase systems, the factor 2 is replaced by √3 (≈1,732). For short lengths and moderate gauge copper conductors, the reactive component is often neglected, simplifying the calculation to ΔV = (2 × L × I × R) / 1000 for single-phase.

As an example, a 200 A residential service at 240 V with a 3/0 AWG copper conductor (resistance 0,078 Ω/1000 ft) and a length of 50 ft (15,24 m) produces a drop of approximately 1,56 V (0,65 %), easily meeting the criterion.

## Available Fault Current Calculation
The available fault current (AFC) must be marked on the service equipment per NEC Article 110.24. Its value is calculated from the short-circuit level at the utility transformer secondary, attenuated by the impedance of the service entrance conductor.

Calculation procedure (three-phase system):
1. Obtain the fault current at the transformer secondary, designated as *I*.
2. Determine the constant *C* of the phase conductor from the constant table.
3. Measure the length *L* (in feet) of the service entrance conductor between the transformer and the service point.
4. Calculate factor *F*:
   > **F = (1,732 × L × I) / (C × E(L-L))**
5. Obtain the multiplier *M*:
   > **M = 1 / (1 + F)**
6. The available fault current at the service equipment is:
   > **Isc = I × M**

The following table shows typical values of the constant *C* for copper and aluminum conductors in three-phase configuration.

| Material | AWG/kcmil Size | Constant C (three-phase) |
|----------|-------------------|-------------------------|
| Copper   | 8 AWG / 8,37 mm²  | 1 380 |
| Copper   | 6 AWG / 13,3 mm²  | 2 210 |
| Copper   | 4 AWG / 21,2 mm²  | 3 520 |
| Copper   | 3 AWG / 26,7 mm²  | 4 440 |
| Copper   | 2 AWG / 33,6 mm²  | 5 580 |
| Copper   | 1 AWG / 42,4 mm²  | 6 980 |
| Copper   | 1/0 AWG / 53,5 mm² | 8 830 |
| Copper   | 2/0 AWG / 67,4 mm² | 11 100 |
| Copper   | 3/0 AWG / 85,0 mm² | 13 900 |
| Copper   | 4/0 AWG / 107 mm²  | 17 500 |
| Aluminum | 8 AWG / 8,37 mm²  | 802   |
| Aluminum | 6 AWG / 13,3 mm²  | 1 290 |
| Aluminum | 4 AWG / 21,2 mm²  | 2 040 |
| Aluminum | 3 AWG / 26,7 mm²  | 2 580 |
| Aluminum | 2 AWG / 33,6 mm²  | 3 240 |
| Aluminum | 1 AWG / 42,4 mm²  | 4 070 |
| Aluminum | 1/0 AWG / 53,5 mm² | 5 130 |
| Aluminum | 2/0 AWG / 67,4 mm² | 6 440 |
| Aluminum | 3/0 AWG / 85,0 mm² | 8 080 |
| Aluminum | 4/0 AWG / 107 mm²  | 10 100 |

Length *L* is expressed in feet; to convert meters to feet, multiply by 3,281. The line-to-line voltage E(L-L) is in volts.

Example: transformer with 35 000 A fault at secondary, copper service entrance 3/0 AWG of 100 ft (30,48 m), 480 V system → C=13 900, F=0,9075, M=0,524, Isc=18 340 A. The service equipment must have a short-circuit current rating (SCCR) no less than this value.

## NEC Considerations

- Every service equipment must have a legible label indicating the maximum available fault current (AFC) and the calculation date (NEC 110.24).
- The interrupting rating of overcurrent protective devices (circuit breakers, fuses) must be equal to or greater than the available AFC (NEC 110.9).
- Service entrance conductors must be sized for the calculated load plus a safety margin for future overloads, respecting the ampacities in the table with adjustment factors.
- The combined voltage drop of the service entrance and branch circuits must not exceed 5 %; it is recommended to limit the service entrance drop to 3 %.
- Grounding conductor and grounding electrode conductor connections must be made at the service point, and the grounding electrode conductor is sized according to NEC Table 250.66.

## Frequently Asked Questions (FAQ)

### What is the typical ampacity of a 2/0 AWG copper conductor for a residential service entrance?
The 2/0 AWG copper conductor with THHN/THWN insulation at 75 °C has an ampacity of 175 A, and is commonly used for residential services of 150 A or 175 A.

### What percentage of voltage drop is permissible in a service entrance according to the NEC?
It is recommended that the voltage drop in the service entrance not exceed 3 %, leaving a 2 % margin for branch circuits, for a total maximum of 5 % to the point of use.

### How often should the available fault current label be updated?
The label must be updated whenever a modification is made that alters the impedance of the service entrance (change of conductor, transformer, or length) and, as a good practice, every 5 years to verify that network conditions have not changed.

### How does the length of the service entrance conductor affect the available fault current?
Greater length increases resistance and inductance, reducing the fault current; for example, doubling the length from 100 ft to 200 ft (from 30,5 m to 61 m) can decrease the AFC by more than 30 %, depending on the conductor size.

### What aluminum conductor size approximately equals a 4/0 AWG copper in ampacity?
A 300 kcmil (152 mm²) aluminum conductor has an ampacity of 255 A, comparable to 4/0 AWG copper (230 A) under similar installation conditions.

### What is the constant C for a 1/0 AWG copper conductor in a 208 V three-phase system?
The constant C for 1/0 AWG copper in three-phase configuration is 8 830, independent of voltage, since the formula already includes the line-to-line voltage.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **mikeholt.com**: https://www.mikeholt.com/electrician-toolbox-home.php
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
