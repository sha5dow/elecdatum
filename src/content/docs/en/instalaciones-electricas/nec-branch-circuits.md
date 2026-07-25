---
title: "Branch circuits per NEC"
sidebar:
  label: "Branch circuits per NEC"
description: "Technical reference: Branch circuits per NEC"
keywords: ["NEC branch circuit requirements article 210", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nec"
subcategory: "nec-branch-circuits"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Definition and scope per the NEC
A branch circuit is the set of conductors and components that run from the overcurrent protection device (circuit breaker or fuse) to the final load or receptacle, as defined by Article 100 of the NEC, and its entire installation must comply with the requirements of Article 210 of NFPA 70. The standard classifies branch circuits by their maximum current rating, expressed in amperes, and distinguishes them according to application (lighting, appliances, receptacles, individual circuits), establishing the conditions for protection, identification, and safe connection of equipment.

## Classification of branch circuits
The NEC groups branch circuits into two broad categories: multiwire (with more than one ungrounded phase conductor) and individual (supplying a single load, generally not usable as general-purpose circuits).

| Circuit type | Maximum rated current | Typical applications | Required protection |
| --- | --- | --- | --- |
| General purpose branch (120 V) | 15 A / 15 A, 20 A / 20 A | Lighting, receptacles in dwellings | Overcurrent protection, GFCI/AFCI per location |
| Branch for appliances (120/240 V) | 20 A / 20 A up to 50 A / 50 A | Kitchen, laundry, dryer, oven, water heater | GFCI Class A protection in most cases (210.8(D)) |
| Individual branch | Up to 50 A / 50 A (receptacles) or per equipment nameplate | Fixed equipment, motors, air conditioners | Overcurrent only, unless equipment or location requires GFCI (210.8(F)) |
| Branch for lighting circuits (277/480 V) | 20 A / 20 A, 30 A / 30 A | Commercial and industrial | Coordination with metal raceways, GFCI in certain locations |

## Protection requirements
### Overcurrent protection
Each branch circuit must be protected by an overcurrent device (fuse or circuit breaker) with a rating not exceeding the ampacity of the conductors, in accordance with Table 310.16. The available fault current (AFC) at the point of connection must be marked on all equipment per NEC 110.24, and the equipment short-circuit current rating (SCCR) must be equal to or greater than the calculated AFC.

To calculate the AFC in a branch circuit, the point-to-point formula from the secondary of the utility transformer is used:

> **F = (1.73 × L × I) / (C × E L-L)**

Where:

| Variable | Meaning | Unit |
| --- | --- | --- |
| F | Reduction factor | dimensionless |
| L | Length of service conductor | ft / m |
| I | Available fault current at transformer secondary | A |
| C | Conductor constant (per NEC table) | - |
| E L-L | Line-to-line voltage | V |

> **Multiplier M = 1 / (1 + F)**

> **AFC at connection point Isc = I × M**

**Practical example** (typical numbers): in a 480 V three-phase system with a transformer delivering 35 000 A fault current, a service conductor 30.5 m / 100 ft long and constant C = 13 900 (copper in conduit), the AFC at the distribution panel is 18 340 A, which requires selecting breakers with a minimum SCCR of 22 kA.

### GFCI protection (210.8)
Since the 2023 edition of the NEC, all references to "ground-fault circuit-interrupter" in Article 210.8 have been updated to "listed Class A differential circuit breaker", whose trip threshold for current imbalance is **5 mA nominal (±1 mA)**. Differential protection is now required in virtually all areas where moisture or water is present, both in dwellings and in non-dwelling occupancies.

Receptacles in the locations listed below must have Class A GFCI protection, measured from the nearest edge of the sink, bathtub, or similar conductive support via the shortest path that the power cord would follow without penetrating floors, walls, or fixed barriers.

| Location (per 210.8) | Maximum distance from water source | Circuit voltage and current |
| --- | --- | --- |
| Receptacles in kitchens (all areas with permanent provision for food, beverage, or cooking preparation) | No distance limit – all receptacles in the area | 120 V, 15 A – 20 A |
| Lavatory areas (bathrooms, dressing rooms, washrooms) | 1.8 m / 6 ft from the inner top edge of the lavatory | 120 V, 15 A – 20 A |
| Garages, accessory buildings, boat houses, and outdoors | All receptacles, including those replacing existing unprotected equipment | 120 V – 240 V, up to 50 A |
| Food service areas (buffets, bars, beverage areas) | 1.8 m / 6 ft from sink or conductive surface of aquarium, bait tank, and similar vessels | 120 V, 15 A – 60 A |
| Listed appliances (electric ovens, ranges, dryers, microwaves, wall-mounted ovens, counter-mounted cooking units) | All cord-and-plug connected or fixed wired equipment in dwellings | 150 V max to ground; 60 A or less |

**Important exceptions (2023 edition)**:
- The internal receptacle of a bathroom exhaust fan does not require GFCI protection, unless manufacturer instructions or product listing require it.
- The cord path measurement no longer excludes sections passing through windows or interior doors, eliminating previous ambiguities.

### AFCI protection (210.12)
Branch circuits supplying bedrooms, living rooms, and common areas in dwelling units must include arc-fault circuit-interrupter (AFCI) protection using a listed circuit breaker that detects series and parallel arcs. This requirement extends to all 120 V, 15 A and 20 A phase conductors supplying receptacles and luminaires in those areas.

## Conductor sizing and voltage drop
The current-carrying capacity of branch circuit conductors is determined based on NEC Table 310.16, selecting the minimum gauge that supports continuous load (with a 125% factor) and non-continuous load, without exceeding the insulation temperature rating. The NEC recommends that voltage drop, although not a mandatory requirement for most circuits, not exceed **3% in the branch and 5% combined with the feeder**, values verified with the classic formula:

> **Vd = (2 × K × I × L) / CM** (single-phase) or **Vd = (1.73 × K × I × L) / CM** (three-phase)

| AWG size | Equivalent section (mm²) | Ampacity at 60 °C (copper) / at 75 °C (copper) | Typical voltage drop per 30 m / 100 ft (120 V, 20 A) |
| --- | --- | --- | --- |
| 14 AWG | 2.08 mm² / 2.08 mm² | 15 A (60 °C) / 20 A (75 °C) only in specific applications | ~5.2 % (too high for general use) |
| 12 AWG | 3.31 mm² / 3.31 mm² | 20 A / 25 A | ~3.3 % (acceptable for 20 A circuits) |
| 10 AWG | 5.26 mm² / 5.26 mm² | 30 A / 35 A | ~2.1 % |

In practice, residential 15 A and 20 A branch circuits are wired with 14 AWG and 12 AWG respectively, while 240 V, 30 A appliances use 10 AWG, and 50 A ranges require 6 AWG copper at 75 °C.

## Installation requirements
- All GFCI devices must be **readily accessible**, without the need for portable ladders or removing obstacles.
- Circuits supplying nonlinear loads require a neutral conductor sized at 100% of the phase current, sometimes oversized to 200%.
- In multiple rooms of a dwelling, lighting and general-use receptacle circuits must not exceed a total load of 3 VA per square foot (approximately 32 VA/m²), distributing loads evenly among phases.
- Receptacles installed on kitchen countertops must be GFCI protected and served by at least two 20 A branch circuits.

## Applicable standards
- **NFPA 70 (NEC)**: Article 100 (definitions), Article 210 (branch circuits), Article 240 (overcurrent protection), Article 250 (grounding), Article 310 (conductors), Article 422 (appliances), Article 590 (temporary installations).
- **National Electrical Safety Code (NESC – IEEE C2)**: for service supply lines and substations, not directly branch circuits.
- **NOM-001-SEDE (Mexico)**: local equivalent based on the NEC, with some variations.

## Frequently Asked Questions (FAQ)
### At what distance from a sink is GFCI required in non-dwelling areas?
   NEC 210.8(B)(7) requires GFCI protection for all receptacles located within **1.8 m / 6 ft** of the inner top edge of the sink, measured by the shortest path a cord would follow without passing through walls or ceilings.

### What is the maximum rated current of a branch circuit for lighting in dwellings?
   Lighting circuits in dwelling units can be **15 A or 20 A** (limited to 80% of continuous load, i.e., effective 12 A or 16 A).

### Which 240 V household appliances now require GFCI protection per the 2023 NEC?
   The updated list includes electric ranges, wall-mounted ovens, counter-mounted cooking units, clothes dryers, and microwave ovens, provided they operate at 150 V or less to ground and do not exceed **60 A**.

### What available fault current must be marked on a residential distribution panel?
   The AFC must be recorded with its calculation date. In a 240 V, 200 A single-phase service, the AFC is typically between **10 000 A and 22 000 A** (10 kA – 22 kA) depending on the impedance of the service and transformer.

### What is the maximum voltage drop allowed on a branch circuit per NEC good practices?
   The recommendation is not to exceed **3%** in the branch circuit plus **2%** in the feeder, for a combined total of **5%**, equivalent to a loss of **6 V** in a 120 V system.

### From what size should conductors with 75 °C insulation be used in branch circuits?
   The 75 °C column may be used for sizes **1.3 mm² / 16 AWG** and larger, provided the terminal equipment is listed for that temperature; in practice, from **1.6 mm² / 14 AWG** and 15 A, many installers use 90 °C THWN-2 insulation which is limited to 75 °C at terminals.

## References
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/23_CC_210.8.pdf
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
