---
title: "GFCI fundamentals and application"
sidebar:
  label: "GFCI fundamentals and application"
description: "Technical reference: GFCI fundamentals and application"
keywords: ["GFCI ground fault circuit interrupter basics", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "gfci-afci"
subcategory: "gfci-basics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A GFCI (Ground Fault Circuit Interrupter), also called a differential switch or residual current device (RCD), is an electrical safety device designed to interrupt a circuit when it detects a ground leakage current exceeding a preset threshold, typically between 4 mA / 0.004 A and 30 mA / 0.030 A. The trip time in the presence of a ground fault does not exceed 25 ms / 0.025 s in personal protection devices, according to international standards.

## Definition and Purpose

The GFCI is a protection mechanism that automatically disconnects the electrical supply when the current flowing through the phase conductor is not equal to the current returning through the neutral. The difference, called residual or leakage current, indicates a current escape to ground — possibly through the human body — representing a risk of electrocution. Its purpose is to prevent serious or fatal injuries from electric shock, as well as to prevent fires caused by insulation faults.

## Operating Principle

The GFCI operates by continuously measuring the vector sum of the currents in all active conductors passing through a toroidal differential transformer. Under normal conditions, the current entering through the phase is exactly equal to that leaving through the neutral, and the net magnetic flux in the core is zero. In the event of a ground leakage, part of the current returns through an unintended path (such as a person or a metal enclosure), generating an imbalance detectable by the secondary winding of the transformer.

The induced signal is amplified and, if it exceeds the trip threshold, activates an electromagnet or relay that opens the main contacts in milliseconds, isolating the faulted circuit. The GFCI does not protect against direct contacts between phase and neutral, since in that case the differential current is still zero.

> **I<sub>Δ</sub> = I<sub>L</sub> − I<sub>N</sub>**

| Variable | Meaning | Unit |
| --- | --- | --- |
| I<sub>Δ</sub> | Residual differential current | mA or A |
| I<sub>L</sub> | Instantaneous current in the phase conductor | A |
| I<sub>N</sub> | Instantaneous current in the neutral conductor | A |

## Classification and Types

GFCI interrupters are classified according to their sensitivity, construction, and integrated function. The following table summarizes the main types and their characteristics.

| Type | Nominal sensitivity (I<sub>Δn</sub>) | Primary application | Maximum trip time |
| --- | --- | --- | --- |
| Personal protection (Class A) | 4–6 mA / 0.004–0.006 A | Receptacles in bathrooms, kitchens, outdoors | ≤25 ms / 0.025 s at 5× I<sub>Δn</sub> |
| Fire protection | 100–300 mA / 0.1–0.3 A | Main panels, distribution lines | ≤300 ms / 0.3 s |
| Equipment protection | 30 mA / 0.03 A | Workshops, pumps, power tools | ≤40 ms / 0.04 s at 5× I<sub>Δn</sub> |
| RCBO (combined) | 30 mA + thermal-magnetic curve | Differential and overcurrent protection | ≤40 ms / 0.04 s |

## Sensitivity and Trip Times

The sensitivity of a GFCI is expressed as the rated residual operating current (I<sub>Δn</sub>). For personal protection, high-sensitivity devices are used, with I<sub>Δn</sub> ≤ 30 mA / 0.030 A. Standard IEC 60479-1 establishes that alternating currents greater than 20 mA / 0.020 A through the human body can cause ventricular fibrillation if they persist for more than a few tenths of a second. Therefore, residential GFCIs must trip before the current reaches dangerous levels and in a time less than 40 ms / 0.04 s.

| I<sub>Δn</sub> | Maximum trip time (1× I<sub>Δn</sub>) | Maximum time (5× I<sub>Δn</sub>) | Typical use |
| --- | --- | --- | --- |
| 6 mA / 0.006 A | 25 ms / 0.025 s | 15 ms / 0.015 s | GFCI receptacles in North America (Class A) |
| 10 mA / 0.01 A | 40 ms / 0.04 s | 20 ms / 0.02 s | Medical equipment, hospital rooms |
| 30 mA / 0.03 A | 40 ms / 0.04 s | 30 ms / 0.03 s | General personal protection per IEC |
| 100 mA / 0.1 A | 100 ms / 0.1 s | 50 ms / 0.05 s | Fire protection in secondary panels |
| 300 mA / 0.3 A | 300 ms / 0.3 s | 150 ms / 0.15 s | Protection of large installations against insulation faults |

## Internal Construction and Components

The essential construction elements of a typical GFCI include:

- **Toroidal differential transformer**: magnetic core through which the phase and neutral conductors pass, and around which a secondary detection winding is wound.
- **Trip electromagnet**: converts the electrical signal from the secondary into mechanical force to release the contact mechanism.
- **Main contacts**: capable of interrupting the rated current and withstanding the short-circuit current until a backup protection operates.
- **Electronic amplification circuit**: processes the small signal from the secondary and compares it with the trip threshold; usually includes filtering and rectification for noise immunity.
- **Test button**: injects a calibrated leakage current (typically 8 mA / 0.008 A to 10 mA / 0.01 A) to verify operation without the need for external equipment.

## Typical Connection Diagram

In a single-phase installation with GFCI, the phase and neutral conductors pass through the differential transformer before connecting to the load. The ground conductor does not pass through the core. The ground terminal of the GFCI is connected directly to the installation ground.

The following figure describes the standard connections for a two-pole GFCI in a 120 V / 60 Hz system, with protection capability for downstream receptacles.

| Terminal | Description | Typical color |
| --- | --- | --- |
| LINE (L) | Phase supply | Black or brown |
| LINE (N) | Neutral supply | White or blue |
| LOAD (L) | Protected phase output | Red or black |
| LOAD (N) | Protected neutral output | White or gray |
| GND / Ground | Protective earth connection | Green or green/yellow |

## Typical Applications

GFCIs are mandatory in numerous locations according to national electrical codes. The most common application areas include:

- **Bathrooms and kitchens**: receptacles within 1.5 m / 5 ft of water sources.
- **Outdoors**: gardens, patios, balconies exposed to moisture or rain.
- **Basements and garages**: environments with possible presence of moisture on the floor.
- **Portable equipment**: power tools, submersible pumps, construction extension cords.
- **Swimming pools and fountains**: underwater lighting, recirculation pumps.

## Maintenance and Testing

It is recommended to verify the operation of the GFCI using the built-in test button at least once a month. The internal test diverts a calibrated current (typically 8 mA / 0.008 A in Class A devices) through the differential transformer, simulating a leakage that should cause immediate tripping. Failure to trip indicates device failure and requires replacement. There are also portable GFCI receptacle testers that measure the actual trip time, which should remain below 25 ms / 0.025 s per UL 943.

## Reference Standards

| Standard | Title | Scope |
| --- | --- | --- |
| UL 943 | Ground-Fault Circuit-Interrupters | North America |
| IEC 61008-1 | Residual current operated circuit-breakers without integral overcurrent protection | International |
| IEC 61009-1 | Residual current operated circuit-breakers with integral overcurrent protection (RCBO) | International |
| NEC Art. 210.8 | GFCI Protection for Personnel | USA |
| NOM-001-SEDE | Electrical installations (utilization) | Mexico |

## Frequently Asked Questions (FAQ)

### What is the trip current of a typical residential GFCI?
A residential GFCI in North America (Class A) trips at a rated residual current of 6 mA / 0.006 A, a value considered safe because it is below the ventricular fibrillation threshold (≈20 mA).

### How long should a GFCI take to trip in the event of a dangerous leakage?
The maximum trip time for a Class A GFCI is approximately 25 ms / 0.025 s when the leakage current reaches 5 times the rated value (30 mA / 0.030 A), per UL 943.

### What is the difference between a 30 mA GFCI and a 100 mA GFCI?
The 30 mA / 0.030 A device is intended for personal protection, while the 100 mA / 0.1 A device is used for fire protection, as it does not guarantee personal safety but does limit dangerous leakages in extensive installations.

### How often should a GFCI interrupter be tested?
Manufacturers and the NEC code recommend testing the GFCI at least once a month using its test button, which injects a calibrated leakage typically of 8 mA / 0.008 A.

### Can a single GFCI protect multiple receptacles?
Yes, a single GFCI can protect 4 to 6 downstream receptacles if connected from its load terminals, provided the total current does not exceed the device's rated capacity, typically 15 A or 20 A.

### What maximum operating temperature does a standard GFCI withstand?
General-purpose GFCIs are designed to operate in an ambient temperature range of -5 °C to 40 °C / 23 °F to 104 °F, although industrial models exist that reach up to 60 °C / 140 °F.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/standard-gauges-d_1345.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-circuit-breaker-operation-and-types-of-circuit-breaker/
