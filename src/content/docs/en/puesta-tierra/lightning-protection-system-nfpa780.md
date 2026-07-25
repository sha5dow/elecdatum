---
title: "Lightning protection system NFPA 780"
sidebar:
  label: "Lightning protection system NFPA 780"
description: "Technical reference: Lightning protection system NFPA 780"
keywords: ["lightning protection system design NFPA 780", "puesta-tierra"]
category: "puesta-tierra"
topic: "lightning-protection"
subcategory: "lightning-protection-system"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

A lightning protection system (LPS) conforming to NFPA 780 standard aims to capture the lightning discharge and safely conduct its current to ground, preventing damage to the structure and its occupants. The measured grounding resistance in the installation is typically required to be less than 25 Ω to ensure effective operation.

## Components of the NFPA 780 Lightning Protection System

A complete LPS includes at least 3 air terminals per 30 m² / 323 sq ft of roof surface and consists of the following fundamental elements.

| Component | Main function | Typical material (copper) | Minimum required dimension |
| --- | --- | --- | --- |
| Air terminal (lightning rod) | Discharge collection | Solid copper | 9,5 mm / 3/8 in diameter |
| Down conductor | Vertical conduction of the current | Bare copper or stranded wire | 29 mm² / #2 AWG (or 5/8 in × 1/16 in in strip) |
| Grounding electrode | Safe dissipation of current into the ground | Copper-clad steel electrode (copperweld) | 15,9 mm / 5/8 in diameter × 3 m / 10 ft |
| Equipotential bonding connections | Interconnection of metallic elements to avoid potential difference | Copper conductor | 16 mm² / #6 AWG |

## Recommended Grounding Resistance

The maximum ground resistance measured with an earth resistance tester must be equal to or less than 25 Ω to comply with NFPA 780, although in installations housing sensitive equipment a value of 10 Ω or less is recommended. The apparent resistivity of the soil, influenced by moisture and soil type, is the factor that most affects the final resistance.

## Calculation of the Resistance of a Simple Vertical Electrode

The grounding resistance of a vertical cylindrical electrode is estimated using the following simplified formula, sufficient for preliminary LPS sizing.

> **R = (ρ / (2πL))* (ln(4L/d) - 1)**

| Symbol | Parameter | Unit (metric/imperial) |
| --- | --- | --- |
| R | Grounding resistance | Ω |
| ρ | Soil resistivity | Ω·m |
| L | Buried length of the electrode | m / ft |
| d | Diameter of the electrode | m / ft |

## Table of Typical Soil Resistivities

Soil resistivity (ρ) varies widely depending on its composition and moisture content. The values in the table are used as input data for electrode sizing.

| Type of soil | Resistivity ρ (Ω·m) | Resistivity ρ (Ω·cm) |
| --- | --- | --- |
| Moist humus | 10 – 50 | 1000 – 5000 |
| Moist garden soil | 50 – 150 | 5000 – 15000 |
| Dry sand | 200 – 2000 | 20000 – 200000 |
| Moist clay | 20 – 100 | 2000 – 10000 |
| Crushed gravel | 300 – 1000 | 30000 – 100000 |
| Solid rock | 2000 – 10000 | 200000 – 1000000 |

## Frequently Asked Questions (FAQ)

### Which structures require lightning protection according to NFPA 780?
NFPA 780 mandates the installation of LPS in buildings taller than 23 m / 75 ft, in those storing explosive or flammable materials, and in critical facilities such as hospitals and data centers, provided a risk assessment determines a real need.

### What is the difference between a lightning rod and a lightning protection system?
A lightning rod (air terminal) is the device that captures the initial discharge, while the lightning protection system is the complete set consisting of air terminals, down conductors, ground electrodes, and equipotential bonding connections, designed to safely conduct the lightning current to the ground.

### How often should the lightning protection system be inspected?
NFPA 780 recommends an annual visual inspection and a complete review with ground resistance measurement at least every 5 years, as well as after any severe thunderstorm or roof repair that may have altered the components.

### Is it possible to install the system without help from a certified professional?
It is not recommended. Correct installation requires protection level calculations (Class I, II, III, IV according to IEC/NFPA), precise material selection, exothermic welding, and final verification of ground resistance, tasks that require trained personnel and UL or equivalent certification.

### Does the shape of the lightning rod affect its effectiveness?
The most common shape is the pointed rod (sharp termination) which facilitates ionization and gradual capture of the charge. However, rounded or "Franklin" type terminations are also acceptable as long as they meet the dimensions and materials specified by NFPA 780.

### Can the metallic structure of the building be reused as a down conductor?
Yes, provided the metallic structure has conductivity equivalent to that of standard down conductors (such as a steel profile with minimum thickness of 4,8 mm / 3/16 in) and electrical continuity is ensured between all its elements, according to the provisions of NFPA 780.

## References
- **electrical4u.com**: https://www.electrical4u.com/surge-protection-and-lightning-arrester-surge-arrester/
