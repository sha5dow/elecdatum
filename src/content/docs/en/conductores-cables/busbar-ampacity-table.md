---
title: "Busbar ampacity"
sidebar:
  label: "Busbar ampacity"
description: "Technical reference: Busbar ampacity"
keywords: ["busbar ampacity table copper aluminum", "conductores-cables"]
category: "conductores-cables"
topic: "busbar"
subcategory: "busbar-ampacity"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The ampacity of a busbar is the maximum electric current it can continuously carry without exceeding the established temperature limits for its insulation or immediate surroundings. Busbars are typically made of copper or aluminum, with cross-sections ranging from a few square millimeters to hundreds of square millimeters. The cross-section, shape (flat, tubular, or solid), and material define the current-carrying capacity. In 50–60 Hz alternating current, the skin effect limits the effective conduction depth to about 8 mm for copper, so flat or hollow bars are the most common for high currents. The following information summarizes design principles and typical ampacity values.

## Factors influencing ampacity
The ampacity of a busbar is not a fixed value; it depends on the balance between heat generation by the Joule effect and heat dissipation to the surroundings. The main factors are:

- **Material**: electrical resistivity and thermal conductivity of the conductor.
- **Cross-section**: larger area means lower resistance and higher current capacity.
- **Shape and cooling surface**: flat bars dissipate better than round ones; tubes utilize internal convection.
- **Arrangement**: bars in parallel, phase spacing, confinement in enclosures.
- **Ambient temperature**: ampacity is generally given for 30 °C (86 °F); higher temperatures reduce it.
- **Allowable temperature rise**: according to the insulation class or safety limits (typically 30‑60 °C rise).
- **Skin effect**: in AC reduces the useful cross-section in thick bars.
- **Proximity effect**: when bars are close together, it distorts the current distribution.
- **Connections and contact points**: a poor connection increases local resistance and reduces the actual ampacity of the assembly.

## Typical reference values
The following table shows indicative ampacities for copper and aluminum conductors in free air at an ambient temperature of 30 °C, derived from Engineering Toolbox maximum current diagrams for wires. These values provide a conservative reference; for flat bars with the same cross-section, the actual current-carrying capacity is usually 10‑20% higher due to their larger dissipation surface.

| Cross-section (mm² / AWG / in²) | Copper ampacity (A) | Aluminum ampacity (A) |
| --- | --- | --- |
| 1.5 mm² / AWG 16 (0.00233 in²) | 15 | 12 |
| 2.5 mm² / AWG 14 (0.00388 in²) | 20 | 16 |
| 4 mm² / AWG 12 (0.00621 in²) | 25 | 20 |
| 6 mm² / AWG 10 (0.00933 in²) | 32 | 30 |
| 10 mm² / AWG 8 (0.0155 in²) | 45 | 35 |
| 16 mm² / AWG 6 (0.0248 in²) | 60 | 48 |
| 25 mm² / AWG 4 (0.0388 in²) | 80 | 64 |
| 35 mm² / AWG 2 (0.0543 in²) | 100 | 80 |
| 50 mm² / AWG 0 (0.0775 in²) | 125 | 100 |

*Note:* The value of 30 A for aluminum of 6 mm² is the only explicit numerical data taken directly from the Engineering Toolbox diagram. The others are typical extrapolations.

## Ampacity formula
The ampacity is determined from the thermal equilibrium between heat generation by the Joule effect and dissipation by convection and radiation. The simplified expression for a bar in air is:

> **I = √(ΔT · h · A / R)**

| Variable | Description | Units (metric / imperial) |
| --- | --- | --- |
| I | Allowable current (ampacity) | A |
| ΔT | Temperature rise above ambient | K / °C |
| h | Combined heat transfer coefficient (convection + radiation) | W/(m²·K) / BTU/(h·ft²·°F) |
| A | Effective surface area of the bar | m² / ft² |
| R | Electrical resistance of the bar at operating temperature | Ω |

In practice, R is obtained from geometry and material properties, and using empirical values of h, I is calculated for a desired ΔT.

## Copper vs. aluminum comparison
Copper bars offer higher conductivity than aluminum bars for the same cross-section, but aluminum is lighter and more economical. The following table compares basic properties at 20 °C.

| Property | Copper | Aluminum |
| --- | --- | --- |
| Electrical resistivity | 0.01724 Ω·mm²/m (10.37 Ω·cmil/ft) | 0.0282 Ω·mm²/m (17.0 Ω·cmil/ft) |
| Density | 8.96 g/cm³ (0.324 lb/in³) | 2.70 g/cm³ (0.0975 lb/in³) |
| Relative ampacity for same cross-section | 1 | 0.75 – 0.8 |
| Cross-section needed for same ampacity | 1 | 1.3 – 1.5 |

The copper/aluminum ampacity ratio for the same cross-section is approximately 1.25 – 1.3. Bimetallic connections require special attention to avoid galvanic corrosion.

## Typical applications
- Main distribution in electrical switchboards and motor control centers.
- Grounding and neutral bars in enclosures.
- Battery connection in battery banks.
- Electrical substations, where large-diameter aluminum or copper tubes are used.
- Electrolysis and arc furnaces, with currents reaching tens of thousands of amperes.
- Laminated flexible bars to compensate for vibrations and thermal expansion.

## Frequently Asked Questions (FAQ)

### What is the ampacity of a 6 mm² copper bar in free air?
For a 6 mm² copper bar under conditions similar to a bare wire, 32 A can be taken as a reference, although in flat form it can reach between 35 A and 40 A. The Engineering Toolbox diagram indicates 30 A for aluminum of the same cross-section.

### Beyond what thickness does the skin effect become significant in a copper busbar at 60 Hz?
In 60 Hz alternating current, the skin effect limits effective conduction to a depth of approximately 8 mm (0.31 in). For greater thicknesses, it is advisable to use flat, hollow, or laminated bars.

### How much current can a flat aluminum bar with a 50 mm² cross-section carry?
Based on wire values, a 50 mm² aluminum bar can conduct on the order of 100 A; in flat format with good ventilation, 115‑120 A is easily reached while maintaining a moderate temperature rise.

### What voltage drop occurs in a 25 mm² copper bar carrying 80 A over 1 meter?
The resistance of a 25 mm² copper bar at 20 °C is approximately 0.00069 Ω/m. With 80 A, the voltage drop is ≈0.055 V per meter (80 A × 0.00069 Ω).

### What temperature rise is typically designed for a busbar at full load?
Distribution bars are usually designed for a temperature rise (ΔT) of between 30 °C (54 °F) and 60 °C (108 °F) above ambient temperature, typically 30 °C, depending on the type of insulation and the enclosure.

### What is the typical ampacity ratio between copper and aluminum for the same cross-section?
For the same cross-section, the ampacity of copper is approximately 1.25 to 1.3 times that of aluminum. Conversely, for the same current capacity, aluminum requires 30% to 50% more cross-section.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/maximum-current-copper-aluminum-wire-d_1690.html
- **southwire.com**: https://www.southwire.com/calculators
