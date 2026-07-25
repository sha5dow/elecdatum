---
title: "Fuse types class J RK1 T"
sidebar:
  label: "Fuse types class J RK1 T"
description: "Technical reference: Fuse types class J RK1 T"
keywords: ["fuse types class J RK1 T specifications", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "fuses"
subcategory: "fuse-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Class J, RK1 and T fuses are current-limiting protective devices conforming to UL 248 and CSA C22.2 standards, designed to operate in low-voltage distribution circuits up to 600 VAC. The class J fuse, governed by UL 248-8, is characterized by its compact size and high interrupting capacity of 200 kA symmetrical; the class RK1 fuse, under UL 248‑12, incorporates a dual-element fuse link with mechanical rejection that prevents insertion of class H or K cartridges; the class T fuse, specified in UL 248‑15, offers the highest energy density per volume, with a typical breaking capacity of 200 kA and dimensions up to 40 % smaller than an equivalent class J fuse. All three types use a silver or silver alloy fuse element encapsulated in silica sand, ensuring rapid arc extinction under short-circuit conditions.

## Technical Characteristics

| Parameter | Class J | Class RK1 | Class T |
|---|---|---|---|
| Rated voltage VAC | 600 V / — | 250 V / — and 600 V / — | 300 V / — and 600 V / — |
| Current range | 1 A to 600 A | 0.1 A to 600 A | 1 A to 800 A |
| Interrupting capacity (symmetrical) | 200 kA / — | 200 kA / — (600 V), 300 kA / — (250 V) | 200 kA / — (600 V), 200 kA / — (300 V) |
| Current-limiting class | Current-limiting | Current-limiting, dual-element available | Fast-acting current-limiting |
| Reference standard | UL 248-8, CSA C22.2 No. 248.8 | UL 248-12, CSA C22.2 No. 248.12 | UL 248-15, CSA C22.2 No. 248.15 |
| Operating temperature | –40 °C / –40 °F to 100 °C / 212 °F | –40 °C / –40 °F to 100 °C / 212 °F | –40 °C / –40 °F to 100 °C / 212 °F |

## Classification by response time

- **Fast-acting**. No intentional delay, ideal for resistive loads and circuits without inrush peaks. The pre-arcing I²t constant is low, typically less than 10 000 A²·s for a 100 A cartridge.
- **Time-delay**. Withstand momentary overloads up to 5 times rated current for 10 s without melting. The class RK1 with dual-element is the main representative; the fuse link contains additional thermal mass that delays melting under motor starting conditions.
- **Dual-element**. Exclusive to classes RK1 and RK5, integrates a calibrated solder point for short-circuits and a thermal section for overloads. The overload behavior is defined from 135 % of rated current, with a minimum opening time of 1 h.

## Construction and dimensional section

Class J fuses use a cylindrical body of melamine or epoxy reinforced with fiberglass, with ferrule terminals up to 60 A and blade terminals for higher currents. Standard dimensions of a 600 A class J fuse are 170 mm / 6.69 in length and 50.8 mm / 2.0 in diameter. RK1 fuses share external dimensions with classes H and K but include a rejection slot in their terminals; lengths vary between 76.2 mm / 3 in for 30 A cartridges and 339.7 mm / 13.37 in for 600 A. Class T fuses reduce volume by up to 40 % compared to an equivalent class J fuse; a 400 A class T cartridge measures approximately 101.6 mm / 4.0 in length and 25.4 mm / 1.0 in diameter.

## Applications by class

| Class | Main application | Concrete example |
|---|---|---|
| J | Protection of distribution feeders, lighting and power panels, motor control centers (MCC) with limited space | 480 V / 277 V panel for a 5000 m² / 53 820 ft² commercial building |
| RK1 | Protection of motor branch circuits and transformers where selectivity and mechanical rejection are required | 50 HP / 37 kW induction motor starter in a water treatment plant |
| T | Protection in ultra-compact enclosures, compact disconnects, and high-density busbars | 1200 A main disconnect in a data center with 300 kW power modules |

## Trip curve and let-through energy

The trip characteristic of current-limiting fuses is defined by the Joule integral for the fuse element:

> **I²t = ∫ i² dt** where I is the instantaneous current and t the melting time.

| Symbol | Meaning | Unit |
|---|---|---|
| I²t | Let-through energy (Joule integral) | A²·s |
| I | Instantaneous short-circuit current | A |
| t | Melting time (pre‑arc plus arc) | s |

In 480 V three-phase systems with 65 kA available symmetrical fault current, a 200 A class J fuse limits the peak let-through current to less than 18 kA, with a clearing I²t around 15 000 A²·s. A class T fuse of the same rating reduces the let-through energy by approximately an additional 30 % due to its faster operating speed.

## Installation and selectivity

Class J and T fuses are installed in fuse holders without a rejection mechanism; the cartridge must be selected by qualified personnel according to equipment markings. Class RK1 is housed only in bases with slotted receptacles, a mechanism that physically prevents insertion of class H or K fuses. To achieve ampacity selectivity between fuses, a minimum ratio of 2:1 in rated currents is recommended (e.g., 200 A upstream and 100 A downstream). Selectivity in the short-circuit zone is verified by comparing let-through energy curves; the upstream fuse must have a pre-arcing I²t that exceeds the total clearing I²t of the downstream fuse.

## Frequently Asked Questions (FAQ)

### What is the maximum interrupting rating of a class J fuse at 600 V?

The maximum interrupting rating of a class J fuse at 600 V is 200 kA symmetrical RMS, equivalent to 200 000 A RMS, sufficient for the most severe fault currents in industrial installations. This interrupting capacity ensures the fuse can clear the fault without fragmentation of the cartridge body.

### In what current range are class T fuses available?

Class T fuses cover a current range from 1 A to 800 A, at voltages of 300 V and 600 V. The 300 V version is used in single-phase or three-phase distribution systems at 208 V/240 V, while the 600 V version predominates in industrial 480 V systems.

### How long is a 60 A class J fuse?

A 60 A class J fuse measures 57.2 mm / 2.25 in length and 20.6 mm / 0.81 in diameter. These cartridges use ferrule terminals suitable for fuse holders with capacities from 0 A to 30 A and 31 A to 60 A.

### What operating temperature do RK1 fuses withstand?

Class RK1 fuses withstand a continuous operating temperature from –40 °C / –40 °F to 100 °C / 212 °F without degradation of their trip characteristics. The temperature rise at the terminals must not exceed 75 °C / 167 °F to comply with UL 248 heating tests.

### What is the maximum rated current of a class J fuse?

The maximum rated current of a class J fuse is 600 A, with a rated voltage of 600 VAC. This cartridge size uses blade terminals with a standard center-to-center spacing of 44.5 mm / 1.75 in for mounting in disconnect bases.

### What I²t let-through energy is required to protect a 50 HP motor?

For a 50 HP / 37 kW, three-phase, 460 V induction motor with a full-load current of 65 A, a 100 A time-delay class RK1 fuse is recommended, whose maximum clearing I²t under a 100 kA short-circuit is of the order of 8000 A²·s, a value that effectively limits electromagnetic and thermal stresses on the windings.

## References
- **electrical4u.com**: https://www.electrical4u.com/electrical-fuse-hrc-fuse-high-rupturing-capacity/
