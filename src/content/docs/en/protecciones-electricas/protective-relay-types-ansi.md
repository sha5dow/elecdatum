---
title: "Protective relay types ANSI codes"
sidebar:
  label: "Protective relay types ANSI codes"
description: "Technical reference: Protective relay types ANSI codes"
keywords: ["protective relay types ANSI device numbers", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "relays"
subcategory: "protective-relay-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## What are ANSI Protective Relays?

A protective relay is an automatic device that detects abnormal conditions in an electrical circuit — short-circuit currents, overvoltages, unbalances, etc. — and commands the associated circuit breaker to open in order to isolate the faulted zone. The ANSI/IEEE C37.2 standard assigns a unique device number (1 to 99) to each protection function, allowing the unambiguous identification of the task performed by the relay in single-line and control diagrams. A single modern electronic device (multifunction relay, code 11) can group dozens of these numbers, although the documentation continues to reference each function with its corresponding ANSI code.

## Classification of Protective Relays

Protective relays can be classified according to different criteria. The following table summarizes the most relevant categories based on industrial practice and technical sources.

| Classification Criterion | Types | Example of Associated ANSI Code |
| :--- | :--- | :--- |
| By operating mechanism | Electromagnetic, static (semiconductor), digital/microprocessor | – |
| By time characteristic | Instantaneous, definite time, inverse time (IDMT), combined | 50 (instantaneous), 51 (time-delayed) |
| By protection logic | Differential, directional, unbalance, distance, restricted earth fault, etc. | 87 (differential), 67 (directional overcurrent), 21 (distance) |
| By actuating quantity | Current, voltage, frequency, power, pressure, temperature | 27/59 (voltage), 81 (frequency), 32 (power) |
| By functional location | Primary protection, backup protection | – |

## Most Common ANSI Protection Function Codes

Below are listed the most common standardized protection functions in electrical power systems, with examples of typical settings according to usual practice with numerical relays. The indicated values reflect setting ranges based on the nominal secondary current or voltage at the relay input.

| ANSI Number | Function | Description | Typical Setting (metric / imperial) |
| :--- | :--- | :--- | :--- |
| 1 | Master element | Starts or stops the main equipment | – |
| 2 | Time-delay starting or closing relay | Provides connection delay | 0,2 s / 0,2 s a 10 s / 10 s |
| 21 | Distance relay | Line protection based on impedance | Reach: 0,1 Ω — 200 Ω / 0,1 Ω — 200 Ω (secondary) |
| 25 | Synchronizing or synchronism-check relay | Allows closing when networks are in phase | ΔV ≤ 5 %; Δf ≤ 0,1 Hz / 0,1 Hz; Δφ ≤ 10° |
| 27 | Undervoltage relay | Trips when voltage falls below the setting | 0,7 pu — 0,9 pu; e.g. 100 V / 100 V pickup at 80 V / 80 V |
| 32 | Directional power relay | Detects power flow in reverse or low direction | 0,5 % — 5 % of nominal power; e.g. 50 W / 50 W to 500 W / 500 W (secondary) |
| 40 | Loss-of-excitation relay | Protects generator against field loss | Typical impedance 0,8 — 1,0 pu of machine Zbase |
| 46 | Negative-sequence or current unbalance relay | Protects motors/generators against unbalance | 0,1 — 0,2 pu of rated current; e.g. 0,5 A / 0,5 A to 1 A / 1 A (secondary) |
| 49 | Thermal overload relay | Models machine or transformer heating | Thermal time constant: 5 min / 5 min — 60 min / 60 min |
| 50 | Instantaneous overcurrent relay | Protection without intentional delay for short-circuits | Pickup: 2 — 20 times In; e.g. 5 A / 5 A — 100 A / 100 A (secondary) |
| 50/51 | Combined instantaneous/time-delayed overcurrent relay | Unit 50 instantaneous + 51 time-delayed in same device | Unit 50: ≥ 5 A / 5 A; unit 51: IEC/ANSI curve, dial 0,05 — 1,0 |
| 51 | Time-delayed overcurrent relay (AC) | Inverse, very inverse, or extremely inverse curve | Pickup: 0,5 — 2,0 A / 0,5 — 2,0 A; time dial: 0,05 — 10 s / 0,05 — 10 s |
| 59 | Overvoltage relay | Operates when voltage exceeds threshold | 1,05 — 1,2 pu; e.g. trip at 120 V / 120 V on 100 V / 100 V nominal base |
| 60 | Voltage or current balance relay | Monitors the difference between two electrical quantities | Allowed unbalance: 2 % — 10 % of nominal quantity |
| 64 | Ground protection relay (stator or rotor) | Detects insulation faults to ground | Sensitivity: 0,5 % — 5 % of generator rated current |
| 67 | Directional overcurrent relay | Operates only when current flow exceeds value and direction is towards fault | Pickup: 0,5 — 2,0 A / 0,5 — 2,0 A; typical operating angle 30° — 90° |
| 81 | Frequency relay (under/over) | Protects generators and networks against frequency excursions | Over: 62 Hz / 62 Hz; under: 58 Hz / 58 Hz; hysteresis 0,1 Hz / 0,1 Hz |
| 87 | Differential relay | Compares input and output currents of a protected zone | Differential pickup: 0,05 — 0,5 pu of rated current; typical slope 20 % — 40 % |

## Operating Characteristics

Every protective relay is defined by four basic quantities:

- **Pick-up level:** value of the actuating quantity — current, voltage, frequency — that starts the timing (0,5 A / 0,5 A in a typical 51).  
- **Drop-out or reset level:** value below which the relay releases its contacts, normally between 80 % / 80 % and 95 % / 95 % of the pickup value.  
- **Operating time:** interval from when the pickup is exceeded until the output contacts close. In instantaneous relays it is less than 20 ms / 0,02 s; in time-delayed relays it follows standardized curves IEC 60255 or IEEE C37.112.  
- **Reset time:** time required for the relay to return to its rest state once the quantity falls below the reset level, typically 10 ms / 0,01 s to 50 ms / 0,05 s in numerical equipment.

Modern multifunction relays (ANSI 11) program all these characteristics via software and allow combining backup protections, automatic reclosing (79), synchronism check (25), and IEC 61850 communication functions in a single chassis.

## Typical Applications

- **Transmission line protection:** functions 21 (distance), 67 (directional overcurrent), 85 (carrier), and 79 (reclosing).  
- **Power transformer protection:** functions 87T (differential), 51/50 (overcurrent), 63 (gas pressure).  
- **Generator protection:** functions 40 (loss of excitation), 32 (reverse power), 64F/64R (field/rotor ground fault), 81 (frequency), 46 (negative-sequence current).  
- **Motor protection:** functions 49 (thermal), 50/51 (overcurrent), 46 (unbalance), 48 (locked rotor).  
- **Bus schemes:** function 87B (bus differential) combined with 50BF (breaker failure).

## Frequently Asked Questions (FAQ)

### How many device numbers does the IEEE C37.2 standard standardize?
   The standard defines more than 99 basic functions, although in daily protection practice around 40 different codes are used, and a single multifunction relay can group up to 12 numbers simultaneously.

### What is the typical trip time of an ANSI 50 instantaneous relay?
   In modern numerical relays, the trip time of a 50 element is less than 20 ms / 0,02 s, while in electromechanical equipment it can reach 40 ms / 0,04 s.

### What frequency setting range does a 81 relay have in a 60 Hz system?
   Typical settings are 58,5 Hz / 58,5 Hz for underfrequency and 61,5 Hz / 61,5 Hz for overfrequency, with a programmable hysteresis band of 0,05 Hz / 0,05 Hz to 0,2 Hz / 0,2 Hz to avoid oscillations.

### At what voltage level does an ANSI 27 undervoltage relay typically pick up?
   The pickup is typically set to 0,8 pu of the nominal voltage, which on a 120 V / 120 V secondary represents 96 V / 96 V; in 13,8 kV / 13,8 kV distribution systems, the corresponding primary is 11,04 kV / 11,04 kV.

### How many current transformers does an ANSI 87T transformer differential protection require?
   At least 6 current transformers are used — 3 on the HV side and 3 on the LV side — to build the three differential and three restraint currents, although configurations with a neutral may require 7 or 8 CTs.

### What pickup current is set on an ANSI 51 time-delayed overcurrent relay?
   A common setting for the time-delayed unit is between 0,5 A / 0,5 A and 2 A / 2 A on the current secondary, with a time dial of 0,1 s / 0,1 s to 1 s / 1 s on a standard inverse curve.

## References
- **electrical4u.com**: https://www.electrical4u.com/types-of-electrical-protection-relays-or-protective-relays/
