---
title: "Motor circuit conductor sizing"
sidebar:
  label: "Motor circuit conductor sizing"
description: "Technical reference: Motor circuit conductor sizing"
keywords: ["motor circuit conductor sizing NEC 430", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "motor-circuit-conductors"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Summary
The sizing of circuit conductors for electric motors is governed by Article 430 of the National Electrical Code (NEC/NFPA 70), which requires that the conductor ampacity shall not be less than 125% of the full-load current (FLC) obtained from NEC Tables 430.248 or 430.250. For a typical 480 V three-phase induction motor, this means that a 10 hp motor with a tabulated FLC of 14 A will require a conductor with a minimum capacity of 17,5 A, which normally corresponds to a 10 AWG (5,26 mm²) size. This rule ensures that the conductor can withstand both the continuous running current and the high starting current of motors without insulation deterioration.

## Conductor Sizing Principle
The NEC requires that the ampacity of the phase conductor supplying a single continuous-duty motor must be at least 125% of the full-load current taken from the appropriate tables in Article 430. The basic formula is:

> **I_cond ≥ 1.25 × FLC_430**

where:
| Variable | Description |
|---|---|
| I_cond | Minimum required conductor ampacity (A) |
| FLC_430 | Full-load current per Table 430.248 (single-phase) or 430.250 (three-phase) |

The FLC from the tables is usually higher than the motor nameplate current rating (FLA), as it covers standard efficiency motors and ensures compatibility with a wide range of manufacturers. The use of nameplate FLA is reserved solely for sizing overload devices and for non-continuous duty motors.

## Sizing Table for 480 V Three-Phase Motors
The following table, adapted from standardized NEMA and NEC data, indicates the minimum phase and grounding conductor sizes, as well as the conduit size, for 480 V three-phase squirrel-cage motors in continuous duty. The conductor ampacity is based on copper with 75 °C insulation.

| Power (hp) / (kW) | NEMA Current (A) | Phase Conductor (AWG / mm²) | Ground Conductor (AWG / mm²) | Conduit (inches / mm) |
|---|---|---|---|---|
| 1/2 / 0,37 | 1,0 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 3/4 / 0,56 | 1,4 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 1 / 0,75 | 1,8 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 1 1/2 / 1,1 | 2,6 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 2 / 1,5 | 3,4 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 3 / 2,2 | 4,8 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 5 / 3,7 | 7,5 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 7 1/2 / 5,6 | 11 | 12 / 3,31 | 12 / 3,31 | 3/4 / 19,05 |
| 10 / 7,5 | 14 | 10 / 5,26 | 10 / 5,26 | 3/4 / 19,05 |
| 15 / 11,2 | 21 | 10 / 5,26 | 10 / 5,26 | 3/4 / 19,05 |
| 20 / 15 | 27 | 8 / 8,37 | 8 / 8,37 | 1 / 25,4 |
| 25 / 18,7 | 34 | 6 / 13,3 | 6 / 13,3 | 1 1/4 / 31,75 |
| 30 / 22,4 | 40 | 6 / 13,3 | 6 / 13,3 | 1 1/4 / 31,75 |
| 40 / 30 | 52 | 4 / 21,2 | 4 / 21,2 | 1 1/4 / 31,75 |
| 50 / 37,3 | 65 | 4 / 21,2 | 4 / 21,2 | 1 1/4 / 31,75 |
| 60 / 44,7 | 77 | 2 / 33,6 | 2 / 33,6 | 1 1/2 / 38,1 |
| 75 / 56 | 96 | 2 / 33,6 | 2 / 33,6 | 1 1/2 / 38,1 |
| 100 / 74,6 | 125 | 2/0 / 67,4 | 2 / 33,6 | 2 / 50,8 |
| 125 / 93,2 | 156 | 4/0 / 107 | 1/0 / 53,5 | 2 1/2 / 63,5 |
| 150 / 112 | 180 | 4/0 / 107 | 1/0 / 53,5 | 2 1/2 / 63,5 |

*Note: 1 hp = 0,746 kW. The grounding conductor is sized per NEC Section 250.122 for typical HMCP protective devices indicated in the original source.*

## Additional Considerations
The table above assumes normal installation conditions (ambient temperature ≤ 30 °C / 86 °F and no more than three current-carrying conductors in the same conduit). If the ambient temperature is higher or more conductors are grouped, the ampacity must be corrected by multiplying by the factors shown in NEC Tables 310.15(B)(1) and 310.15(C)(1). Also, when the distance between the motor and its protection is significant, voltage drop must be verified, which should not exceed 3% of the nominal value under steady-state conditions for motor power circuits. The equipment grounding conductor is selected based on the rating of the short-circuit and ground-fault protective device (HMCP or fuse), not on the motor current.

## Frequently Asked Questions (FAQ)
### How is the full-load current determined for sizing the conductor of a 480 V three-phase motor?
   The full-load current (FLC) is obtained from NEC Table 430.250, which for a 10 hp motor indicates 14 A; this value, and not the nameplate current, is the starting point for sizing.

### What is the minimum phase conductor size for a 10 hp motor per the NEC?
   For a three-phase 10 hp motor at 480 V with an FLC of 14 A, 125% gives 17,5 A; the minimum conductor is 10 AWG (5,26 mm²) with 75 °C insulation, since it supports 35 A per Table 310.16.

### What size grounding conductor does a 25 hp motor require?
   NEC Section 250.122 requires a copper conductor of 6 AWG (13,3 mm²) when the branch circuit overcurrent protective device is 70 A, a typical value for this motor per NEMA data.

### Why is the conductor size based on FLC different from what the nameplate current would indicate?
   The tabulated FLC (e.g., 14 A for 10 hp) is a standardized value that covers standard efficiency motors; the nameplate current is usually lower (it can be between 12 and 13 A), but the NEC requires using the FLC to ensure a safety margin in the conductor.

### How does cable length affect motor circuit conductor sizing?
   For a distance of 100 m between a 50 hp motor (FLC 65 A) and the control center, voltage drop must be considered: keeping the drop below 3% (14,4 V at 480 V), the minimum size might increase from 4 AWG (21,2 mm²) to 2 AWG (33,6 mm²) to limit the loss.

### What overcurrent protection is required for the conductor of a 50 hp motor?
   Per NEC 430.52, the short-circuit and ground-fault protective device (HMCP) for a 50 hp motor with an FLC of 65 A can be 100 A, a value that effectively protects the 4 AWG (21,2 mm²) conductor provided that the motor overload device is properly adjusted.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/480-volt-motor-wiring-data-d_1447.html
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20UNEC1_430.6.pdf
- **electrical4u.com**: https://www.electrical4u.com/small-large-motor-protection/

