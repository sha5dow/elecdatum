---
title: "Copper busbar sizing"
sidebar:
  label: "Copper busbar sizing"
description: "Technical reference: Copper busbar sizing"
keywords: ["copper busbar sizing current rating", "conductores-cables"]
category: "conductores-cables"
topic: "busbar"
subcategory: "busbar-sizing"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A copper busbar is a rigid conductor, generally of rectangular or tubular cross-section, used to distribute large electric currents in distribution panels, substations and power systems. Its low resistivity and high thermal conductivity allow it to handle current densities higher than those of equivalent round cables, optimizing space and heat dissipation. Copper busbars are sized mainly based on cross-sectional area, installation type and allowable temperature rise.

## Sizing principle
The current-carrying capacity of a copper busbar depends directly on its cross-sectional area, the material (electrolytic copper with a resistivity of 1,724×10⁻⁸ Ω·m at 20 °C) and the ventilation conditions. For the same cross-section, flat bars dissipate heat better than cylindrical conductors due to their larger lateral surface. The skin effect becomes significant in bars thicker than 8 mm / 0.31 in at 50–60 Hz alternating current, favoring the use of hollow profiles or laminated bundles in very high current applications.

## Calculation of current carrying capacity
The allowable steady-state current is estimated using the expression:

> **I = J × A**

| Variable | Description | Unit |
| --- | --- | --- |
| I | Allowable continuous current | A |
| J | Practical current density (copper in free air) | A/mm² / A/in² |
| A | Cross-sectional area | mm² / in² |

For bare copper busbars in still air at 30 °C / 86 °F, a current density between 1,2 and 2,0 A/mm² (≈ 774 – 1290 A/in²) is typically adopted, depending on the size and spacing between supports.

## Correction factors for ambient temperature
If the ambient temperature exceeds 30 °C / 86 °F, the current-carrying capacity must be reduced by applying the following correction factors:

| Ambient temperature | Correction factor |
| --- | --- |
| 31 – 40 °C / 87.8 – 104 °F | 0,82 |
| 41 – 45 °C / 105.8 – 113 °F | 0,71 |
| 46 – 50 °C / 114.8 – 122 °F | 0,58 |

These coefficients are valid for busbars with basic insulation or in installations where heat dissipation is limited. For outdoor busbars with high natural convection, the reduction is usually less severe.

## Table of indicative dimensions and capacities
The following values correspond to bare copper busbars, horizontal, in still air at 30 °C / 86 °F, with a design current density of 1,5 A/mm² (≈ 968 A/in²). Standard rectangular sections are considered.

| Dimensions (mm) | Dimensions (in) | Section (mm²) | Section (in²) | Allowable current (A) |
| --- | --- | --- | --- | --- |
| 15 × 3 | 0.59 × 0.12 | 45 | 0.07 | 68 |
| 20 × 5 | 0.79 × 0.20 | 100 | 0.16 | 150 |
| 30 × 5 | 1.18 × 0.20 | 150 | 0.23 | 225 |
| 40 × 5 | 1.57 × 0.20 | 200 | 0.31 | 300 |
| 50 × 5 | 1.97 × 0.20 | 250 | 0.39 | 375 |
| 60 × 10 | 2.36 × 0.39 | 600 | 0.93 | 900 |
| 80 × 10 | 3.15 × 0.39 | 800 | 1.24 | 1200 |
| 100 × 10 | 3.94 × 0.39 | 1000 | 1.55 | 1500 |
| 120 × 10 | 4.72 × 0.39 | 1200 | 1.86 | 1800 |

For installations with forced ventilation or vertically mounted busbars, the capacity can be increased by up to 20 %.

## Installation considerations
- Busbars must be supported on insulating supports that withstand the electrodynamic forces in case of short circuit.
- The spacing between supports must not exceed 500 mm / 19.7 in for thicknesses less than 6 mm / 0.24 in, to avoid deformation from self-weight and vibrations.
- Joints between sections require flat, clean surfaces and, at high currents, silver-plating to minimize contact resistance.
- Expansion joints should be provided in straight runs longer than 3 m / 118 in, because copper expands approximately 0.017 mm per meter per degree Celsius of temperature rise.
- Outdoors, busbars must be protected against galvanic corrosion when in contact with aluminum or other metals.

## Frequently Asked Questions (FAQ)

### What is the typical current density for copper busbars in free air?
The recommended current density ranges between 1,2 and 2,0 A/mm² (774 – 1290 A/in²), with 1,5 A/mm² (968 A/in²) being the most commonly used value in electrical panel design with natural ventilation.

### What is the current-carrying capacity of a 30 × 5 mm copper busbar?
A 30 × 5 mm (1.18 × 0.20 in) copper busbar, with a cross-section of 150 mm² (0.23 in²), can carry approximately 225 A under standard installation conditions in air at 30 °C / 86 °F.

### How much is the allowable current reduced at 45 °C?
At 45 °C / 113 °F the allowable current is multiplied by a correction factor of 0,71, which for a 375 A busbar reduces the capacity to about 266 A.

### From what thickness does the skin effect become relevant in alternating current?
The skin effect becomes noticeable in copper busbars with a thickness greater than 8 mm / 0.31 in operating at 50–60 Hz, which can reduce the effective capacity by 3 % to 8 % relative to the actual cross-section.

### What current can a 100 × 10 mm copper busbar carry?
A 100 × 10 mm (3.94 × 0.39 in) busbar, with a cross-section of 1000 mm² (1.55 in²), can conduct about 1500 A in steady-state service in free air without additional insulation.

### What is the resistivity of the copper used in busbars?
The resistivity of standard electrolytic copper at 20 °C / 68 °F is 1,724×10⁻⁸ Ω·m, equivalent to 0,01724 Ω·mm²/m, which can increase with temperature and impurities.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/wire-gauges-d_419.html
- **southwire.com**: https://www.southwire.com/calculators

