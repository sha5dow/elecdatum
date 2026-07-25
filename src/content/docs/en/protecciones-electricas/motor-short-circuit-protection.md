---
title: "Motor short circuit protection"
sidebar:
  label: "Motor short circuit protection"
description: "Technical reference: Motor short circuit protection"
keywords: ["motor short circuit protection device selection", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "motor-protection"
subcategory: "motor-short-circuit-protection"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Motor short circuit protection limits fault currents that can exceed 10 kA in less than 30 µs, and is achieved by devices that interrupt the circuit before thermal and mechanical energy can damage the windings or supply conductors. Device selection is governed by NEC 430.52 tables, which relate motor horsepower, starting type, and circuit breaker or fuse class.

The short circuit protection device detects the sudden current increase caused by a direct phase-to-phase, phase-to-neutral, or phase-to-ground contact. It responds in milliseconds through a magnetic element — in the case of Motor Circuit Protectors (MCPs) or HMCPs — that generates an electromagnetic field capable of opening the contacts almost instantaneously. Opening interrupts the electric arc and clears the fault, preventing the short circuit current from reaching its maximum crest value that could fuse conductors or cause a fire.

## Short Circuit Protection Devices

| Device | Operating Principle | Advantages | Limitations |
| --- | --- | --- | --- |
| Current-limiting fuse | Fusible wire that melts by Joule effect when a high fault current flows | Ultra-fast interruption (0.01 s), high interrupting capacity up to 200 kA / 200 kA, low cost | Not reusable, does not protect against light overloads, requires replacement after each operation |
| Thermal-magnetic circuit breaker | Magnetic coil for short circuit and bimetal for overload | Reusable, adjustable magnetic and thermal trip, visual status indication | Lower interrupting capacity than high-capacity fuses, careful sizing for motors with starting peaks |
| HMCP (Motor Circuit Protector) or MCP | Exclusively magnetic trip calibrated to act only on short circuit, without thermal protection | High precision in instantaneous trip threshold, easy coordination with external overload relays | Does not include overload protection, requires a separate thermal relay, moderate cost |

IEC 60947-2 and NEC 430.52 recognize these devices. The HMCP is typically used in combination with a contactor and an overload relay in combination starters, ensuring short circuit protection while the thermal relay covers overload.

## Selection Criteria
Selection of the short circuit protection device for motors is based on the motor full load current (FLC), rated voltage, rotor type (squirrel cage, slip ring, etc.), and duty class. The fundamental parameters are:

- **Motor rated current (Iₙ):** obtained from the nameplate or NEMA tables for the given horsepower and voltage.
- **Maximum setting or rating allowed:** per NEC 430.52, for instantaneous trip circuit breakers (MCP) on squirrel-cage motors, the maximum setting is 800 % of full load current. For Class RK5 or similar fuses, the typical range is 175 % to 300 % of Iₙ.
- **Interrupting capacity (kA):** must exceed the available short circuit current at the motor terminals. In industrial 480 V panels, values of 65 kA or higher are typically required.
- **Coordination with the starter:** the short circuit device must allow the starting current (6 to 8 times Iₙ) to pass without tripping, so a magnetic threshold is chosen above that peak.

## Selection Table for 480 V Three-Phase Motors

| Power (HP / kW) | NEMA Full Load Current (A / A) | Starter Size | Thermal Relay | HMCP (A / A) | Conduit (in / mm) | Phase Conductors (AWG / mm²) | Ground (AWG / mm²) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ½ / 0.37 | 1.0 / 1.0 | 1 | W30 | 3 / 3 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| ¾ / 0.56 | 1.4 / 1.4 | 1 | W33 | 3 / 3 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 1 / 0.75 | 1.8 / 1.8 | 1 | W36 | 3 / 3 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 1½ / 1.12 | 2.6 / 2.6 | 1 | W40 | 7 / 7 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 2 / 1.49 | 3.4 / 3.4 | 1 | W42 | 7 / 7 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 3 / 2.24 | 4.8 / 4.8 | 1 | W45 | 7 / 7 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 5 / 3.73 | 7.5 / 7.5 | 1 | W50 | 15 / 15 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 7½ / 5.59 | 11 / 11 | 1 | W54 | 15 / 15 | ¾ / 21.3 | 12 / 3.31 | 12 / 3.31 |
| 10 / 7.46 | 14 / 14 | 1 | W56 | 30 / 30 | ¾ / 21.3 | 10 / 5.26 | 10 / 5.26 |
| 15 / 11.19 | 21 / 21 | 2 | W61 | 50 / 50 | ¾ / 21.3 | 10 / 5.26 | 10 / 5.26 |
| 20 / 14.92 | 27 / 27 | 2 | W64 | 50 / 50 | 1 / 25.4 | 8 / 8.37 | 8 / 8.37 |
| 25 / 18.65 | 34 / 34 | 2 | W67 | 70 / 70 | 1¼ / 31.8 | 6 / 13.3 | 6 / 13.3 |
| 30 / 22.38 | 40 / 40 | 3 | W67 | 100 / 100 | 1¼ / 31.8 | 6 / 13.3 | 6 / 13.3 |
| 40 / 29.84 | 52 / 52 | 3 | W69 | 100 / 100 | 1¼ / 31.8 | 4 / 21.15 | 4 / 21.15 |
| 50 / 37.30 | 65 / 65 | 3 | W72 | 100 / 100 | 1¼ / 31.8 | 4 / 21.15 | 4 / 21.15 |
| 60 / 44.76 | 77 / 77 | 4 | W74 | 150 / 150 | 1½ / 38.1 | 2 / 33.62 | 2 / 33.62 |
| 75 / 55.95 | 96 / 96 | 4 | W77 | 150 / 150 | 1½ / 38.1 | 2 / 33.62 | 2 / 33.62 |
| 100 / 74.60 | 125 / 125 | 4 | W36 | 200 / 200 | 2 / 50.8 | 2/0 / 67.43 | 2 / 33.62 |
| 125 / 93.25 | 156 / 156 | 5 | W38 | 250 / 250 | 2½ / 63.5 | 4/0 / 107.2 | 1/0 / 53.49 |
| 150 / 111.9 | 180 / 180 | 5 | W40 | 400 / 400 | 2½ / 63.5 | 4/0 / 107.2 | 1/0 / 53.49 |

Note: Conductor sizes correspond to copper with THHN insulation at 75 °C per NEC. The cross-section in mm² is the effective conductor area.

## Coordination with Overload Protection
The short circuit device and the overload relay must be coordinated so that, under a moderate overload, only the thermal relay rated between 115 % and 125 % of the rated current operates, while the HMCP remains closed. During a bolted short circuit, the HMCP opens in less than 20 ms and the thermal relay, due to its inertia, is not damaged. This selectivity is supported by time‑current curves: the magnetic trip band of the HMCP lies to the right of the motor starting curve and to the left of the thermal capacity of the conductor and the relay.

## Instantaneous Circuit Breaker Sizing Formula
The maximum setting value of the magnetic trip for a squirrel-cage motor is calculated with the following expression:

> **I<sub>mag</sub> ≤ K × I<sub>n</sub>**

where:

| Variable | Meaning | Unit (metric / imperial) |
| --- | --- | --- |
| I<sub>mag</sub> | Magnetic trip current of the HMCP or instantaneous circuit breaker | A / A |
| K | Multiplier factor per NEC 430.52 (800 % → 8.0 for instantaneous trip circuit breaker; lower values for fuses) | – |
| I<sub>n</sub> | Motor full-load rated current | A / A |

The practical setting is selected as the next lower commercial value below the calculated limit, ensuring that the starting peak (6 – 8 × I<sub>n</sub>) does not cause nuisance tripping.

## Frequently Asked Questions (FAQ)

### What is the difference between a fuse and an HMCP for motor short circuit protection?
The fuse is a single-use protection element that melts its internal wire when a high fault current flows, whereas the HMCP is a resettable circuit breaker with exclusively magnetic trip. The HMCP allows fine adjustment of the trip threshold, does not require replacement after a fault, and integrates better into combination starters.

### Why does an HMCP not include thermal protection?
The HMCP is designed to act only against short circuits; overload protection is provided by a separate thermal relay. This avoids nuisance tripping during starting and achieves Type 2 coordination per IEC 60947‑4‑1, where the contactor and relay suffer no damage after a short circuit.

### How is the correct HMCP selected from the 480 V table?
Enter the table with the motor horsepower; read the NEMA current and choose the HMCP whose amperage covers at least 700 % – 800 % of that current. For a 20 HP motor (27 A), a 50 A HMCP equals 185 % of I<sub>n</sub>, well below the 800 % limit, so short circuit protection is ensured and the starting margin is respected.

### What happens if the HMCP is undersized?
An HMCP with a too‑low magnetic threshold will trip every time the motor starts, because the starting current (6 to 8 times I<sub>n</sub>) will exceed the setting. Conversely, one that is oversized may not open during a moderate short circuit, endangering the conductors and the motor itself. Therefore, the NEC 800 % maximum limit is respected and coordination with the cable damage curve is verified.

### Is it necessary to protect each motor separately with its own short circuit device?
Yes, the NEC requires an individual short circuit protection device for each motor, except in installations with several very small motors sharing a branch circuit when very specific conditions are met. Individual protection allows setting the threshold exactly to the motor current and prevents a fault in one motor from interrupting other processes.

### Which standards regulate motor short circuit protection?
The National Electrical Code (NEC), Article 430, Parts III through V, defines overcurrent and short circuit protection requirements for motors. Internationally, IEC 60947‑2 establishes the tests and characteristics of circuit breakers, and IEC 60947‑4‑1 specifies coordination with contactors and starters.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/480-volt-motor-wiring-data-d_1447.html
- **electrical4u.com**: https://www.electrical4u.com/small-large-motor-protection/
