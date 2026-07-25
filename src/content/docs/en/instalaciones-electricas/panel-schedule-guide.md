---
title: "Panel schedule guide"
sidebar:
  label: "Panel schedule guide"
description: "Technical reference: Panel schedule guide"
keywords: ["electrical panel schedule guide", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "panel-loads"
subcategory: "panel-schedule-guide"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A panel schedule is a technical document that records all branch circuits supplied from a distribution panelboard, indicating for each position the circuit number, connection phase, description of the area served or equipment supplied, estimated load in VA and amperes, conductor size, and associated overcurrent protective device.

## Purpose

The schedule allows verification of load balance between phases, quick identification of each circuit during maintenance or expansion work, and demonstration of compliance with the current-carrying capacity and protection coordination requirements of the applicable electrical code.

## Components of a Panel Schedule

A complete panel schedule includes the following fields.

| Field | Description |
| --- | --- |
| Panel Position | Physical number of the space occupied by the breaker (1, 2, 3…). Two-pole breakers occupy two adjacent positions. |
| Circuit Number | Unique identifier of the circuit within the panel, normally assigned sequentially. |
| Phase | Supply line used (A, B, or C). In 120/240 V single-phase systems, A and B are used. |
| Description | Location or equipment served: "Office lighting 1", "Kitchen receptacles", "Condensing unit 2", etc. |
| Estimated Load (VA) | Apparent power anticipated for the circuit, in volt‑amperes. |
| Estimated Load (A) | Calculated current by dividing the VA by the nominal circuit voltage. |
| Protection (A) | Rated capacity of the assigned thermal-magnetic circuit breaker. |
| Conductor Size | Designation in AWG or kcmil and its equivalent in mm². |
| Load Type | Classification: general lighting, general-use receptacles, special equipment, motors, etc. |

## Circuit Numbering

The mechanical arrangement of the breakers in the panel defines the numbering sequence and phase assignment. In North American enclosures, breakers are installed in two vertical columns; numbering proceeds left to right and top to bottom. Successive rows alternate the supply phase to facilitate connection of two-pole or three-pole breakers.

### Numbering in Single-Phase System (120/240 V)

| Position | Position | Phase A | Phase B |
| --- | --- | --- | --- |
| 1 | 2 | A | B |
| 3 | 4 | B | A |
| 5 | 6 | A | B |
| 7 | 8 | B | A |
| 9 | 10 | A | B |
| 11 | 12 | B | A |

### Numbering in Three-Phase System (120/208 V)

| Position | Position | Phase A | Phase B | Phase C |
| --- | --- | --- | --- | --- |
| 1 | 2 | A | B | — |
| 3 | 4 | B | C | — |
| 5 | 6 | C | A | — |
| 7 | 8 | A | B | — |
| 9 | 10 | B | C | — |
| 11 | 12 | C | A | — |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |

The phase assignment per position is derived from the internal bus connections of the panel. The installer must verify the exact correspondence on the manufacturer’s nameplate before labeling the final schedule.

## Load Calculation

The total connected load of a panel is determined by summing the apparent powers of all branch circuits and applying the demand factors permitted by the applicable code.

The general formula for the feeder total current is:

> **I_feeder = (Σ continuous loads × 1.25 + Σ non-continuous loads) / (V × √3 × cos φ)** 

(in three-phase systems; for single-phase, √3 is omitted)

| Variable | Meaning | Usual Units |
| --- | --- | --- |
| I_feeder | Design current of the main feeder | A |
| Σ continuous loads | Sum of loads that operate 3 h or more | VA |
| 1.25 | Safety factor for continuous loads (125%) | — |
| Σ non-continuous loads | Sum of intermittent operation loads | VA |
| V | Nominal line-to-line voltage | 208 V, 480 V… |
| √3 | Square root of 3 (1.732) for three-phase systems | — |
| cos φ | Average power factor of the installation | 0.8 to 1.0 |

Conductors and the main breaker are sized for a capacity not less than the value of I_feeder. The schedule must reflect the calculated value in the panel header along with the main breaker rating and feeder size.

## Example of Panel Schedule

Below is a partial schedule for a 120/240 V, 200 A single-phase panel with 12 circuits.

| No. | Phase | Description | Load (VA) | Current (A) | Protection (A) | Size AWG | Size mm² |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | A | Living room lighting | 900 | 7.5 | 15 | 14 | 2.08 |
| 2 | B | Bedroom 1 receptacles | 1500 | 12.5 | 20 | 12 | 3.31 |
| 3 | B | Kitchen lighting | 1200 | 10.0 | 15 | 14 | 2.08 |
| 4 | A | Living room receptacles | 1800 | 15.0 | 20 | 12 | 3.31 |
| 5 | A | Washing machine | 1500 | 12.5 | 20 | 12 | 3.31 |
| 6 | B | Dryer (240 V) | 5000 | 20.8 | 30 | 10 | 5.26 |
| 7 | B | Bathroom receptacles | 1000 | 8.3 | 20 | 12 | 3.31 |
| 8 | A | Outdoor lighting | 800 | 6.7 | 15 | 14 | 2.08 |
| 9 | A | Refrigerator | 1200 | 10.0 | 20 | 12 | 3.31 |
| 10 | B | Spare | — | — | 20 | 12 | 3.31 |
| 11–12 | A–B | Central air conditioner 240 V | 7200 | 30.0 | 40 | 8 | 8.37 |

The total connected load is 21,600 VA, which at 240 V equals 90 A. Applying the appropriate demand factors for a single-family dwelling, the main feeder is sized with 2/0 AWG (67.4 mm²) conductors and a 200 A main breaker.

## Common Errors

- Not documenting the actual phase of each circuit: an assumed theoretical alternation is used that does not always match the installed bus.
- Omitting spare circuits from the schedule, preventing knowledge of available capacity for future expansions.
- Not updating the schedule after modifications to the installation, creating dangerous discrepancies between what is documented and what exists.
- Using equipment nameplate currents instead of actual VA loads, underestimating conductor heating.
- Exceeding the circuit limit allowed by the panel manufacturer without verifying power density or phase balance.

## Frequently Asked Questions (FAQ)

### What is the maximum circuit capacity in a typical residential panel?

A 200 A single-phase residential panel can accommodate up to 42 poles of breakers according to the 2020 National Electrical Code, although many modern panels are manufactured with 30 to 40 physical spaces, allowing 60 to 80 circuits if tandem breakers are used where the manufacturer authorizes them.

### What should be the maximum phase balance in a three-phase panel?

The current between the most and least loaded phases should not differ by more than 20% of the average current of the three phases under full load conditions; ideally, a deviation of less than 10% is sought.

### What VA load is typically reserved for a general lighting circuit?

Each general lighting circuit in a dwelling is sized for a maximum load of 1500 VA in common areas, although in individual rooms 900 to 1200 VA is usually projected to maintain margin.

### What is the minimum short-circuit current that should be recorded on an industrial panel schedule?

The schedule must include the available short-circuit current at the point of installation; in industrial panels fed by transformers of 500 kVA or more, this value typically exceeds 22,000 symmetrical amperes.

### How often is it recommended to review and update the panel schedule?

The schedule should be reviewed every 5 years as part of predictive electrical maintenance, or immediately after any expansion that adds at least 3 new circuits.

### What percentage of spare capacity is customary in a commercial distribution panel?

It is recommended to reserve 25% of the panel spaces for future circuits, in addition to sizing the main feeder with at least 20% additional capacity over the calculated load.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/basic-electrical/

