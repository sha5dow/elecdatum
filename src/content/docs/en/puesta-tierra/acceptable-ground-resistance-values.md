---
title: "Acceptable ground resistance values"
sidebar:
  label: "Acceptable ground resistance values"
description: "Technical reference: Acceptable ground resistance values"
keywords: ["acceptable ground resistance value ohms", "puesta-tierra"]
category: "puesta-tierra"
topic: "resistance-testing"
subcategory: "acceptable-ground-resistance"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Ground resistance is the ohmic value that the grounding electrode offers to the passage of electrical current into the earth. A low and stable value is essential to ensure personnel safety, equipment protection, and proper operation of surge protection devices. General practice establishes a maximum of 25 Ω, although critical applications require much lower values.

## Acceptable Resistance Values

The generally accepted ground resistance value should not exceed 25 Ω for protection systems according to the NEC. In installations with sensitive electronic equipment, much stricter values are recommended, as shown in the following table.

| Application | Maximum Recommended Ground Resistance |
| --- | --- |
| General building protection (NEC 250.56) | 25 Ω |
| Communication systems (telephony, radio) | < 3 Ω |
| Data centers, critical electronic equipment | < 1 Ω |

When a single ground rod does not achieve 25 Ω, the NEC requires installing a second rod separated by at least 1.83 m / 6 ft. However, it does not require exceeding that value even if the combined resistance remains high, so in practice many designers seek to obtain the resistance appropriate for the type of installation.

## Factors Affecting Ground Resistance

Soil resistivity, which can range from a few Ω·m to thousands of Ω·m, is the determining factor in ground resistance. The following table summarizes the main parameters that modify this resistivity.

| Factor | Effect on Ground Resistance |
| --- | --- |
| Soil moisture | Higher water content → lower resistivity. Dry soil → high resistance. |
| Salt and mineral content | Higher salinity → lower resistivity. Acidic or alkaline soils can corrode electrodes. |
| Temperature | Drop below 0 °C / 32 °F freezes water and drastically increases resistance. |
| Grain size and compaction | Fine, compact soils have lower resistivity than coarse, loose soils. |
| Electrode depth | Greater vertical length → lower resistance; doubling the length can reduce resistance by 40 %. |
| Electrode‑to‑soil contact | Poor compaction around the electrode or surface corrosion increase contact resistance. |

## Measurement Methods

The fall-of-potential method (3-point) is the most common for measuring ground resistance, requiring a distance between electrodes of at least 20 m / 65.6 ft. The most used procedures are described below.

| Method | Basic Principle | Main Advantage |
| --- | --- | --- |
| Fall-of-potential (3-point) | A known current is injected and the voltage between the ground electrode and a potential probe is measured. | High accuracy. |
| Clamp‑on (induction) | A clamp induces a voltage in the electrode and another measures the current; no auxiliary probes required. | Fast, no disconnection, useful in networks with multiple grounds. |
| Attached rod (2-point) | An auxiliary electrode is connected and the voltage between it and the ground is measured. | Simple, no disconnection required. |
| Star‑delta | Three auxiliary probes in a triangle; current is injected between pairs and voltages are measured; calculated using Kirchhoff's laws. | No disconnections, suitable for large areas. |
| Dead earth | Two probes are used in series with the meter; one near the electrode and one far away. | Directly measures the active ground resistance. |

In all methods, Ohm's law is applied to calculate the resistance:

> **R = V / I**

where R is the ground resistance, V the measured voltage, and I the injected current.

## Methods to Improve Resistance

Adding salts or charcoal around the electrode can reduce ground resistance by more than 50 %. Common techniques are summarized below.

| Technique | Description | Expected Reduction |
| --- | --- | --- |
| Chemical treatment | Common salt (NaCl) or charcoal mixed with soil around the electrode. | 30 – 80 % |
| Multiple electrodes in parallel | Two or more rods separated by at least the length of the electrode, preferably ≥ 6 m / 19.7 ft. | Decreases total system resistance. |
| Increasing depth | Driving a longer rod or reaching the permanent water table. | Up to 40 % when doubling the length. |
| Ring electrode | Conductor buried in a trench at least 0.76 m / 2.5 ft deep surrounding the installation. | Improves dissipation of high currents. |
| Concrete-encased electrode | Utilizes the low resistivity of concrete in contact with soil moisture (reinforced concrete footing). | Very stable resistance over time. |

## Frequently Asked Questions (FAQ)

### What is the maximum ground resistance value required by code?

The NEC does not set an absolute maximum, but states that if a rod exceeds 25 Ω, a second rod must be installed. Specific standards for telecommunications or data centers may require less than 3 Ω or even less than 1 Ω.

### Why does doubling the number of rods not significantly improve ground resistance?

For two rods in parallel to appreciably reduce resistance, they must be separated by at least the length of each rod (ideally 6 m / 20 ft or more). If placed too close together, their zones of influence overlap and little conductivity gain is achieved.

### Does ambient temperature affect ground resistance?

Yes, when the soil freezes, resistivity can increase tenfold or more. Therefore, in cold climates, electrodes must be installed below the frost line, typically deeper than 1.5 m / 5 ft.

### Which measurement method is most reliable in existing installations without disconnection?

The clamp-on method is the most practical because it does not require opening the circuit or driving probes, provided that multiple electrodes in parallel exist to allow the return path of the induced current.

### Is adding common salt effective for lowering resistance?

It reduces resistance in the short term, but the salt washes away with rainwater, can corrode the electrode, and contaminate the soil. Today, permanent conductive backfill compounds (bentonite or conductive concrete) are preferred.

### How often should ground resistance be measured?

In industrial and communications installations, an annual measurement is recommended, or whenever modifications are made to the electrical system, as well as after severe thunderstorms.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/resistors-standard-values-d_1659.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-of-earth/
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Ground-Resistance-It-is-Not-What-You-Think-(12-30-99).php
