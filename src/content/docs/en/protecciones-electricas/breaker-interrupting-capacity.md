---
title: "Breaker interrupting capacity kA"
sidebar:
  label: "Breaker interrupting capacity kA"
description: "Technical reference: Breaker interrupting capacity kA"
keywords: ["circuit breaker interrupting capacity kA AIC", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breakers"
subcategory: "breaker-interrupting-capacity"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
The interrupting capacity — also called breaking capacity or *interrupting rating* — of a circuit breaker is the maximum short-circuit current that the device can safely extinguish without suffering permanent damage or prolonging the electrical arc in an unacceptable manner. It is commonly expressed in kiloamperes (kA) and constitutes a determining parameter for the protection of lives and installations.

## Short-Circuit Interrupting Capacity (Icu)

It represents the root mean square (RMS) value of the short-circuit current that a circuit breaker can interrupt once under standardized test conditions. The device must clear the fault without deterioration, although it may become unusable for continued service. The Icu is assigned at a specific rated voltage.

| Type of Circuit Breaker | Typical Icu (kA / AIC) |
| --- | --- |
| Residential miniature circuit breaker (curve B/C, 6 A – 63 A) | 6 kA / 6 000 AIC |
| Commercial miniature circuit breaker | 10 kA / 10 000 AIC |
| Molded case circuit breaker (MCCB) secondary distribution | 25 kA – 50 kA / 25 000 – 50 000 AIC |
| Low voltage power circuit breaker (ACB) | 50 kA – 150 kA / 50 000 – 150 000 AIC |
| Industrial power circuit breaker for large plants | 200 kA / 200 000 AIC |

## Service Interrupting Capacity (Ics)

It is the short-circuit current that the circuit breaker can interrupt repeatedly and continue operating within its specifications. It is expressed as a percentage of Icu and reflects robustness for post-fault service.

| Circuit Breaker Family | Ics (% of Icu) |
| --- | --- |
| Modular miniature circuit breaker | 50 % – 75 % |
| Standard molded case (MCCB) | 50 % – 100 % |
| Power circuit breaker (ACB) | 75 % – 100 % |

## Making Capacity (Icm)

It defines the peak value of current that the circuit breaker can establish under short-circuit conditions. It is always greater than Icu because the first asymmetric peak of the fault current can reach up to 2.5 times the symmetric RMS value. Icm is expressed in kiloamperes peak (kAp).

> **Icm = n × Icu**

where:

| Variable | Meaning | Unit |
| --- | --- | --- |
| Icm | Making capacity (peak value) | kA peak / A peak |
| Icu | Ultimate interrupting capacity (RMS) | kA / A |
| n | Peak factor (depends on circuit power factor) | dimensionless |

| Power factor (cos φ) | Peak factor n (approximate) |
| --- | --- |
| 0.3 | 2.5 |
| 0.5 | 2.2 |
| 0.7 | 1.7 |

## Short-Time Withstand Current (Icw)

It is the current that the circuit breaker can withstand in the closed position for a defined time without thermal or mechanical damage. It ensures selectivity and allows downstream protection devices to operate.

| Standard Duration | Typical Icw/Icu Ratio |
| --- | --- |
| 1 s | 1.0 (Icw = Icu) |
| 3 s | 0.8 – 1.0 |

## Standard Operating Sequence

Circuit breakers are tested according to a cycle that simulates real operation under fault conditions, per IEC 60947-2:

**O - t - CO - t’ - CO**

where:

- **O**: opening.
- **CO**: closing followed immediately by opening.
- **t**: interval of 0.3 s for circuit breakers with automatic reclosing.
- **t’**: interval of 3 min (or 15 min for devices without intermediate maintenance).

## Calculation of Prospective Short-Circuit Current

To select the appropriate interrupting capacity, it is essential to know the short-circuit current that can actually flow at the installation point.

> **Icc = V / Z_total**

| Variable | Meaning | Unit |
| --- | --- | --- |
| Icc | Prospective short-circuit current | kA / A |
| V | Phase-to-neutral voltage (single-phase circuit) | V |
| Z_total | Total impedance of the fault loop (includes network, transformer, cables) | Ω / mΩ |

Practical example: in a single-phase 230 V installation with a measured loop impedance of 0.05 Ω, the short-circuit current results in Icc = 230 V / 0.05 Ω = 4,600 A ≈ **4.6 kA / 4,600 AIC**. This would require a circuit breaker with Icu ≥ 6 kA.

## Factors Affecting Interrupting Capacity

- **Operating voltage**: higher voltage reduces interrupting capacity for the same design.
- **Type of current**: in DC, interruption is more demanding because the current does not naturally pass through zero.
- **Power factor and asymmetric component**: highly inductive circuits (low cos φ) generate high peaks that stress making capacity and extinction.
- **Frequency**: frequencies above 50/60 Hz modify the dielectric strength of the extinguishing medium and may reduce breaking capacity.

## Circuit Breaker Selection

The basic rule is that the interrupting capacity of the circuit breaker must be equal to or greater than the maximum prospective short-circuit current at its location:

**Icu ≥ Prospective Icc**

Additionally, the following must be considered:

- The rated voltage of the device must match that of the network.
- The Ics must be sufficient if the circuit breaker is to operate repeatedly after a fault.
- At points near power transformers or generators, short-circuit currents are higher and capacities of 25 kA to 150 kA or more are required.

## Frequently Asked Questions (FAQ)

### What does kA mean on a circuit breaker?

It indicates the interrupting capacity expressed in kiloamperes. For example, 10 kA means that the circuit breaker can safely extinguish a short-circuit current of up to 10,000 A RMS without damage.

### What is the difference between Icu and Ics?

Icu is the ultimate interrupting capacity with a single trip (the device may become inoperable), while Ics is the service interrupting capacity that the circuit breaker can handle repeatedly and continue operating within specifications.

### How is the required interrupting capacity calculated for an installation?

The prospective short-circuit current at the circuit breaker terminals is calculated (Icc = V / Z_total) and a device with Icu ≥ Icc is selected. It is common to request the maximum short-circuit value available at the supply point from the network operator.

### What happens if the interrupting capacity of the circuit breaker is exceeded?

The equipment could fail catastrophically: the contacts may weld, the enclosure may rupture, and the electrical arc may not extinguish, with high risk of fire and personal injury.

### Do circuit breakers have different interrupting capacities depending on voltage?

Yes. The same circuit breaker may have an Icu of 50 kA at 415 V and only 10 kA at 690 V. The interrupting capacity must always be referenced to the actual service voltage of the installation.

### Which standard regulates the interrupting capacity of circuit breakers?

The international standard IEC 60947-2 defines the requirements for low-voltage circuit breakers (Icu, Ics, Icw, Icm). In North America, the *National Electrical Code* (NEC) and UL 489 standard set values in amperes (AIC) for circuit breakers.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **electrical4u.com**: https://www.electrical4u.com/rating-of-circuit-breaker-short-circuit-breaking-making-current/
