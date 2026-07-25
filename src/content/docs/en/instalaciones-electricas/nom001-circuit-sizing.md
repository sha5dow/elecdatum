---
title: "Circuit sizing per NOM-001"
sidebar:
  label: "Circuit sizing per NOM-001"
description: "Technical reference: Circuit sizing per NOM-001"
keywords: ["NOM-001 circuit sizing conductor breaker", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nom-001"
subcategory: "nom001-circuit-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Circuit sizing according to NOM-001 requires that every conductor and overcurrent protection device be sized to withstand at least 125% of the continuous load plus 100% of the non‑continuous load. This criterion applies to branch circuits, feeders, and service entrances, based on the ampacity tables and installation conditions specified in the standard. The objective is that no component operates above its rated temperature in steady state, and that the protection interrupts fault currents before the conductors or connected equipment are damaged.

## Purpose
To guarantee the safety of people and the integrity of the electrical installation by avoiding excessive heating that could degrade the insulation or cause fires. Sizing according to NOM-001 introduces specific safety factors, such as 125% for continuous loads, and considers the actual operating temperature at terminals and raceways so that the overcurrent protection acts selectively and effectively against short circuits and overloads.

## General procedure
Circuit sizing is carried out in three essential steps:

| Step | Action |
| --- | --- |
| 1 | Determine the design current by adding 125% of the continuous load plus 100% of the non‑continuous load. |
| 2 | Select a conductor with an ampacity (current-carrying capacity) equal to or greater than the design current, respecting the rated temperature of the terminals (60 °C / 140 °F for equipment ≤ 100 A; 75 °C / 167 °F for equipment > 100 A, unless marked otherwise). |
| 3 | Choose the overcurrent protection device (thermal‑magnetic circuit breaker or fuse) whose rating is not less than the design current and that, except for exceptions, protects the conductor according to its ampacity. |

When the conductor ampacity does not match a standard protection rating, the next higher standard commercial size is permitted up to 800 A, provided the conductor is sized for at least 100% of the load.

## Conductor selection
Conductors are chosen from the corresponding ampacity table of NOM-001, similar to NEC Table 310-15(b)(16). The following table shows typical values for copper conductors with THHN insulation under normal conditions (ambient temperature 30 °C / 86 °F, up to three conductors in a raceway):

| AWG Size | Cross-sectional area (mm² / in²) | Ampacity at 60 °C / 140 °F (A) | Ampacity at 75 °C / 167 °F (A) | Ampacity at 90 °C / 194 °F (A) |
| --- | --- | --- | --- | --- |
| 14 | 2.08 / 0.00323 | 15 | 20 | 25 |
| 12 | 3.31 / 0.00513 | 20 | 25 | 30 |
| 10 | 5.26 / 0.00815 | 30 | 35 | 40 |
| 8 | 8.37 / 0.0130 | 40 | 50 | 55 |
| 6 | 13.3 / 0.0206 | 55 | 65 | 75 |
| 4 | 21.2 / 0.0328 | 70 | 85 | 95 |
| 2 | 33.6 / 0.0521 | 95 | 115 | 130 |
| 1/0 | 53.5 / 0.0829 | 125 | 150 | 170 |
| 4/0 | 107 / 0.166 | 195 | 230 | 260 |

In practice, almost all low‑voltage equipment uses terminals rated for 75 °C / 167 °F, so the 75 °C / 167 °F column is the most common reference for final selection.

## Overcurrent protection device selection
The thermal‑magnetic circuit breaker or fuse is sized for a current rating not less than 125% of the continuous load plus 100% of the non‑continuous load, and not greater than the conductor ampacity corrected by grouping and temperature factors. For motor loads and equipment that indicate a MOCP (Maximum Over‑Current Protection), the following formula is used:

> **MOCP = (2.25 × FLA of the largest motor) + (ΣFLA of the other motors) + (Resistive loads)**

Where FLA is the Full Load Amperes. The calculated value is rounded down to the nearest standard rating (multiple of 5 A), unless it is less than the MCA (Minimum Circuit Ampacity), in which case the MCA is used and rounded up. A protection device smaller than 15 A is never permitted.

## Correction factors
When the ambient temperature differs from 30 °C / 86 °F or more than three current‑carrying conductors are installed in the same raceway, the nominal conductor ampacity must be multiplied by the factors in the following table:

| Ambient temperature (°C / °F) | Factor for conductor with 60 °C / 140 °F insulation | Factor for conductor with 75 °C / 167 °F insulation | Factor for conductor with 90 °C / 194 °F insulation |
| --- | --- | --- | --- |
| 30 / 86 | 1.00 | 1.00 | 1.00 |
| 35 / 95 | 0.91 | 0.94 | 0.96 |
| 40 / 104 | 0.82 | 0.88 | 0.91 |
| 45 / 113 | 0.71 | 0.82 | 0.87 |
| 50 / 122 | 0.58 | 0.75 | 0.82 |

Additionally, for each additional conductor above three inside the same raceway or multiconductor cable, a grouping factor is applied that reduces the ampacity; for example, for four to six current‑carrying conductors the factor is 0.80, and for seven to nine it is 0.70. These adjustments ensure that the conductor temperature does not exceed the insulation limit even under unfavorable conditions.

## Sizing example
**Branch circuit for continuous load of 23 A (lighting):**

1. Design current = 23 A × 1.25 = 28.75 A.
2. Conductor: with 75 °C / 167 °F terminals, a conductor with ampacity ≥ 28.75 A is needed in the 75 °C / 167 °F column. According to the table, a 10 AWG / 5.26 mm² THHN provides 35 A, so it is suitable.
3. Protection: the device must be ≥ 28.75 A; the next higher standard value is 30 A. The 10 AWG / 5.26 mm² conductor with 35 A is correctly protected by a 30 A breaker.

**Feeder for panelboard with continuous load of 184 A:**

1. Design current = 184 A × 1.25 = 230 A.
2. Conductor: with 75 °C / 167 °F terminals, an ampacity ≥ 230 A is required. The 4/0 AWG / 107 mm² THHN has 230 A at 75 °C / 167 °F; it meets exactly.
3. Protection: the standard value above 230 A is 250 A. Since the conductor has an ampacity of 230 A, the exception for the next higher commercial size (up to 800 A) applies, and it is permitted to protect it with a 250 A breaker.

## Frequently Asked Questions (FAQ)
### What percentage of the continuous load must be used to size the conductor?
The conductor must be sized for at least 125% of the continuous load, which is equivalent to multiplying the current by 1.25.

### What is the minimum conductor size for a continuous load of 23 A with 75 °C terminals?
A copper conductor of 10 AWG / 5.26 mm² with THHN insulation is required, since it supports 35 A at 75 °C, exceeding the required 28.75 A.

### Up to what value can the protection be rounded when the conductor ampacity does not match a standard size?
The next higher standard commercial size is permitted, provided the device does not exceed 800 A and the conductor is sized for the entire load.

### How does an ambient temperature of 40 °C affect the ampacity of a 90 °C THHN conductor?
At 40 °C / 104 °F, the correction factor is 0.91, so a conductor with a nominal ampacity of 40 A can only carry 36.4 A under those conditions.

### What size conductor and protection does a feeder for 184 A of continuous load require?
A 4/0 AWG / 107 mm² THHN conductor (230 A at 75 °C) and a 250 A breaker are required, applying the next higher standard size rule.

### What is the practical formula for calculating the maximum protection (MOCP) of equipment with motors?
The formula is MOCP = 2.25 × FLA of the largest motor, plus the sum of the full load currents of the remaining motors, plus the simultaneous resistive loads.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **mikeholt.com**: https://www.mikeholt.com/nec-conductor-sizing-and-protection.php
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
