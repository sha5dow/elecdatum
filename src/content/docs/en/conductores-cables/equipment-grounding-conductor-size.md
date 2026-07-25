---
title: "Minimum equipment grounding conductor size"
sidebar:
  label: "Minimum equipment grounding conductor size"
description: "Technical reference: Minimum equipment grounding conductor size"
keywords: ["equipment grounding conductor size table NEC 250.122", "conductores-cables"]
category: "conductores-cables"
topic: "grounding-conductors"
subcategory: "equipment-grounding-size"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Table of sizes according to overcurrent device rating

The equipment grounding conductor size is based on the rating of the overcurrent protective device that protects the circuit upstream, not on the load current. The following table presents the minimum standard sizes for copper and aluminum conductors.

| Overcurrent device rating | Copper conductor (AWG/kcmil) | Copper conductor (mm²) | Aluminum conductor (AWG/kcmil) | Aluminum conductor (mm²) |
| :--- | :--- | :--- | :--- | :--- |
| 15 A | 14 AWG | 2,08 mm² | 12 AWG | 3,31 mm² |
| 20 A | 12 AWG | 3,31 mm² | 10 AWG | 5,26 mm² |
| 30 A | 10 AWG | 5,26 mm² | 8 AWG | 8,37 mm² |
| 40 A | 10 AWG | 5,26 mm² | 8 AWG | 8,37 mm² |
| 60 A | 10 AWG | 5,26 mm² | 8 AWG | 8,37 mm² |
| 100 A | 8 AWG | 8,37 mm² | 6 AWG | 13,3 mm² |
| 200 A | 6 AWG | 13,3 mm² | 4 AWG | 21,2 mm² |
| 300 A | 4 AWG | 21,2 mm² | 2 AWG | 33,6 mm² |
| 400 A | 3 AWG | 26,7 mm² | 1 AWG | 42,4 mm² |
| 500 A | 2 AWG | 33,6 mm² | 1/0 AWG | 53,5 mm² |
| 600 A | 1 AWG | 42,4 mm² | 2/0 AWG | 67,4 mm² |
| 800 A | 1/0 AWG | 53,5 mm² | 3/0 AWG | 85,0 mm² |
| 1000 A | 2/0 AWG | 67,4 mm² | 4/0 AWG | 107 mm² |
| 1200 A | 3/0 AWG | 85,0 mm² | 250 kcmil | 127 mm² |
| 1600 A | 4/0 AWG | 107 mm² | 350 kcmil | 177 mm² |
| 2000 A | 250 kcmil | 127 mm² | 400 kcmil | 203 mm² |
| 2500 A | 350 kcmil | 177 mm² | 600 kcmil | 304 mm² |
| 3000 A | 400 kcmil | 203 mm² | 600 kcmil | 304 mm² |
| 4000 A | 500 kcmil | 253 mm² | 800 kcmil | 405 mm² |
| 5000 A | 700 kcmil | 355 mm² | 1200 kcmil | 608 mm² |
| 6000 A | 800 kcmil | 405 mm² | 1200 kcmil | 608 mm² |

## Adjustment for increase in phase conductor size

When the ungrounded conductors of a circuit are increased in cross section — typically to compensate for voltage drop in long runs — the equipment grounding conductor must be increased proportionally in copper area. The rule applies even if the protective device does not change. The general formula is:

> **S_ground_final = S_ground_initial × (S_phase_increased / S_phase_initial)**

| Variable | Description | Unit |
| :--- | :--- | :--- |
| S_ground_initial | Area of the grounding conductor per base table for the protective device | mm² or kcmil |
| S_phase_increased | Area of the phase conductor after increase for voltage drop | mm² or kcmil |
| S_phase_initial | Minimum area of the phase conductor for the load current without distance adjustment | mm² or kcmil |
| S_ground_final | Minimum required area for the adjusted equipment grounding conductor | mm² or kcmil |

## Short-circuit withstand capacity limit

Every equipment grounding conductor must have a cross section sufficient to withstand the maximum ground-fault current that the protective device allows to flow during its clearing time. The minimum size according to the table guarantees this requirement for faults up to 5 cycles (0,083 s) in standard circuit breakers, provided the conductor is copper and installed in the same raceway conditions as the phase conductors. In systems with short-circuit currents exceeding 25 kA / 25 000 A symmetrical, it must be verified that the Joule integral of the conductor (I²t) exceeds the specific pass-through energy of the protective device.

> **I²t_conductor ≥ I² × t_clearing**

| Variable | Description | Unit |
| :--- | :--- | :--- |
| I²t_conductor | Maximum allowable Joule integral for the grounding conductor | A²·s |
| I | Symmetrical rms short-circuit current available at the fault point | A |
| t_clearing | Total fault clearing time of the upstream protective device | s |

## Relationship with overcurrent protection

The sizing of the equipment grounding conductor depends exclusively on the rating of the overcurrent protective device that feeds the branch circuit, not on the size of the phase conductors. This rule is reversed only in the case of adjustment for increased phase size, where the grounding conductor must be scaled to maintain the same fault impedance ratio. In installations with multiple circuits in a single conduit, a single grounding conductor must be selected sized for the largest protective device present. Systems with fuse protection may, in certain cases, allow the use of slightly smaller grounding conductors than those required for circuit breakers of the same amperage when the melting time is less than 0,01 s.

## Comparison with IEC 60364-5-54

The international standard IEC 60364-5-54 uses a calculation approach rather than a fixed table per device. The protective conductor (PE) is sized using the formula based on short-circuit energy and clearing time. The simplified table of the IEC yields values very close to the NEC table for circuit breakers up to 63 A / 63 amperes; above that threshold, the IEC tends to be slightly more conservative, requiring on average 8 % more cross section in copper for ratings of 400 A / 400 amperes. In aluminum the difference reaches up to 15 % for sizes larger than 500 kcmil / 253 mm², due to the lower conductivity and higher resistivity of the material, which the IEC penalizes with a larger correction factor.

## Frequently Asked Questions (FAQ)

1.  **What is the minimum grounding conductor size for a 20-ampere breaker in copper?**  
    The minimum size is 12 AWG (3,31 mm²) for a 20 A / 20 ampere protective device, provided the phase conductors have not been increased for voltage drop.

2.  **Can aluminum conductor be used as equipment grounding conductor?**  
    Yes, aluminum conductor is permitted for equipment grounding. For a 200 A / 200 ampere device, a minimum of 4 AWG aluminum (21,2 mm²) is required, compared to 6 AWG copper (13,3 mm²).

3.  **What grounding conductor size corresponds to a 1000-ampere main breaker?**  
    For a 1000 A / 1000 ampere protective device, the minimum size in copper is 2/0 AWG (67,4 mm²) and in aluminum is 4/0 AWG (107 mm²).

4.  **When must the grounding conductor size be increased?**  
    When the phase conductors are increased in size to compensate for voltage drop, the grounding conductor must be increased proportionally in cross-sectional area. If a 20 A circuit changes from 12 AWG to 8 AWG in phase, the ground from 12 AWG (3,31 mm²) increases to 8 AWG (8,37 mm²).

5.  **Can a grounding conductor be smaller than the neutral?**  
    Yes, the grounding conductor is often of smaller size than the neutral. In a 100 A circuit with a 4 AWG neutral, the ground can be 8 AWG copper (8,37 mm²) depending on the protective device, since it only conducts current during faults.

6.  **What happens if a grounding conductor is installed undersized?**  
    An undersized grounding conductor can melt before the protective device clears a ground fault, leaving metal parts energized and creating a severe risk of electrocution. The table ensures the conductor withstands the fault current for at least 0,083 s / 83 ms.