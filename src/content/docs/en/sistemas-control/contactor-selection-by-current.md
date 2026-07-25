---
title: "Contactor selection by current rating"
sidebar:
  label: "Contactor selection by current rating"
description: "Technical reference: Contactor selection by current rating"
keywords: ["contactor selection current rating table", "sistemas-control"]
category: "sistemas-control"
topic: "contactors"
subcategory: "contactor-selection"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Proper contactor selection requires analyzing the circuit's rated current and the service category, with capacities ranging from 0.5 A in NEMA auxiliary contacts to 400 A in IEC power contactors. Sizing depends on the load type — motors, resistors, lighting — and on the operating conditions, following guidelines from NEMA and IEC standards to ensure device service life.

## NEMA Contact Classification

The NEMA classification for control contacts defines ten thermal current levels ranging from 0.5 A to 10 A. The designation consists of a letter indicating the current and the nature of the load, followed by a number that establishes the maximum design voltage. Class A contacts support 10 A, class B 5 A, class C 2.5 A, class D 1 A, and class E 0.5 A.

| NEMA Designation | Thermal Current (A) | Maximum Design Voltage (V) |
| --- | --- | --- |
| A150 | 10 | 150 |
| A300 | 10 | 300 |
| A600 | 10 | 600 |
| B150 | 5 | 150 |
| B300 | 5 | 300 |
| B600 | 5 | 600 |
| C150 | 2.5 | 150 |
| C300 | 2.5 | 300 |
| C600 | 2.5 | 600 |
| D150 | 1 | 150 |
| D300 | 1 | 300 |
| E150 | 0.5 | 150 |

For contacts in control circuits with inductive load, the N, P, Q, R series is used, which also incorporates the apparent switching power value in volt-amperes. N contacts support 275 VA up to 600 V.

| NEMA Designation | Thermal Current (A) | Maximum Voltage (V) | Maximum Volt-Amperes (VA) |
| --- | --- | --- | --- |
| N150 | 10 | 150 | 275 |
| N300 | 10 | 300 | 275 |
| N600 | 10 | 600 | 275 |
| P150 | 5 | 150 | 138 |
| P300 | 5 | 300 | 138 |
| P600 | 5 | 600 | 138 |
| Q150 | 2.5 | 150 | — |
| Q300 | 2.5 | 300 | — |
| Q600 | 2.5 | 600 | — |
| R150 | 1 | 150 | — |
| R300 | 1 | 300 | — |

## IEC Contactors and Current Capacity

IEC contactors cover operational currents from 9 A to 400 A depending on the construction model, with rated powers reaching 300 hp / 224 kW at 480 V AC. The range is subdivided into standardized compact sizes, where manufacturers supply contactors of 9 A, 12 A, 18 A, 25 A, 32 A, 38 A, 50 A, 65 A, 80 A, 100 A, 125 A, 150 A and higher.

| IEC Series or Range | Maximum Current (A) | Maximum Power at 480 V (hp / kW) | Notable Feature |
| --- | --- | --- | --- |
| IronHorse HMC | 400 | 300 hp / 224 kW | Electronic coil, 3-pole, IP20 |
| Fuji Electric Odyssey | 361 | 300 hp / 224 kW | SUPERMAGNET™ AC/DC coil |
| Fuji Electric DUO | 150 | 100 hp / 75 kW | Direct integration with thermal relays |
| WEG CWB | 125 | 100 hp / 75 kW | 1NO + 1NC auxiliary, suppressor mounting |
| Eaton CE15 Freedom | 32 | 20 hp / 15 kW | 45 mm design, up to 2 million electrical operations |
| Schneider Easy TeSys | 38 | 20 hp / 15 kW | 1NO integrated, DIN rail mounting |

## Determining Factors in Selection

The operational current of a contactor can be reduced by up to 30% from its rated thermal current when the service category involves frequent starts and stops or high inductance.

The prospective short-circuit current, ambient temperature, installation altitude, and operating frequency are the parameters that require applying correction factors. The typical derating for altitude is 1% per 100 m / 328 ft above 1000 m / 3280 ft above sea level. The presence of harmonics in the network forces oversizing the contactor by 10% to 20%.

## Basic Current Sizing Formula

For the quick calculation of the current that the contactor must be able to handle in a three-phase load, the following expression is used.

> **I = P / (√3 · V · cos φ · η)**

| Variable | Description | Typical Unit |
| --- | --- | --- |
| I | Line current at full load | A |
| P | Mechanical power at the shaft | W or kW |
| V | Rated line-to-line voltage | V |
| cos φ | Load power factor | Dimensionless (0 to 1) |
| η | Motor efficiency | Dimensionless (0 to 1) |

The service factor and the starting type — direct, star-delta, soft — modify the actual current flowing through the contacts and therefore the final contactor specification. Under reduced voltage starting, the switching current can be up to 58% lower than in direct starting, allowing selection of an immediately smaller size.

## Frequently Asked Questions (FAQ)

### What is the main difference between thermal current and operational current in a contactor?

The thermal current is the maximum that the main contacts can withstand in steady state without overheating, while the operational current — defined by the service category — incorporates the actual closing and opening conditions under load. For inductive loads, the operational current is usually lower than the contactor's thermal current.

### How is the contactor size selected for an asynchronous motor?

Take the motor's rated power in hp or kW, consult the manufacturer's table for the working voltage, and choose the model whose operational current equals or exceeds the motor's full load current. Then verify that the service category (AC-3, AC-4) is compatible with the intended duty cycle.

### Does ambient temperature affect the current capacity of the contactor?

Yes, significantly. Most contactors are specified at 40 °C / 104 °F. Above that threshold, a reduction factor must be applied that can reach 15% at temperatures of 60 °C / 140 °F.

### Can purely resistive loads be controlled with a contactor sized for motors?

Yes, and under that condition the current capacity is higher. Service category AC-1 allows exploiting the full rated thermal current of the contactor, without limitations due to starting peaks.

### What does the NEMA A600 designation imply in auxiliary contacts?

The A600 code indicates that the contacts support 10 A thermal and can handle circuits up to 600 V, making them suitable for most interlocking and signaling applications in industrial panels.

### Is it correct to replace a NEMA contactor with an IEC one respecting only the rated current?

Not always. NEMA sizing is more conservative and is tabulated directly by power and voltage, while IEC requires verifying the service category and the specific operational current. A direct replacement without analyzing these factors can reduce the device's service life.

## References
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/motor_controls/iec_magnetic_contactors/iec_contactors
