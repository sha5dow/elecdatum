---
title: "Voltage drop calculation"
sidebar:
  label: "Voltage drop calculation"
description: "Technical reference: Voltage drop calculation"
keywords: ["voltage drop calculation formula conductor", "conductores-cables"]
category: "conductores-cables"
topic: "voltage-drop"
subcategory: "voltage-drop-calc"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Voltage drop represents the reduction in electrical potential between the source and the load, caused by the conductor's own resistance and impedance. Its precise calculation is crucial to ensure that terminal equipment operates within its nominal ratings and to comply with the maximum limits required by installation standards.

## Fundamental electrical principle

Voltage drop is based on Ohm's Law, which establishes a directly proportional relationship between the circulating current and the total resistance of the circuit. In direct current or alternating current circuits with unity power factor, the voltage drop is obtained by:

> **ΔU = I · R**

where each variable corresponds to:

| Variable | Description | Unit |
| --- | --- | --- |
| ΔU | Voltage drop in the conductor | V |
| I | Circuit current | A |
| R | Electrical resistance of the conductor | Ω |

In alternating current circuits with reactance present, resistance is replaced by the total impedance of the conductor, and the expression becomes:

> **ΔU = I · Z**

For balanced three-phase systems, the voltage drop between phases considers the corresponding phase factor and is usually calculated on the line-to-line voltage.

## Conductor resistance method

This method determines the voltage drop from the electrical resistance value of the conductor, which depends on the material, cross-section, length, and operating temperature. The total circuit resistance is calculated as:

> **R = R<sub>u</sub> · L**

| Variable | Description | Unit |
| --- | --- | --- |
| R | Total circuit resistance | Ω |
| R<sub>u</sub> | Unit resistance of the conductor | Ω/m or Ω/ft |
| L | Conductor length (round trip for single-phase) | m or ft |

### Unit resistance of common conductors

| Material | Section | Unit resistance at 20 °C / 68 °F |
| --- | --- | --- |
| Electrolytic copper | 1,5 mm² / 15,4 AWG | 0,0121 Ω/m / 0,00369 Ω/ft |
| Electrolytic copper | 2,5 mm² / 13,3 AWG | 0,00741 Ω/m / 0,00226 Ω/ft |
| Electrolytic copper | 4 mm² / 11,4 AWG | 0,00461 Ω/m / 0,00141 Ω/ft |
| Electrolytic copper | 6 mm² / 9,3 AWG | 0,00308 Ω/m / 0,000939 Ω/ft |
| Electrolytic copper | 10 mm² / 7,0 AWG | 0,00183 Ω/m / 0,000558 Ω/ft |
| Electrolytic copper | 16 mm² / 5,2 AWG | 0,00115 Ω/m / 0,000351 Ω/ft |
| Electrolytic copper | 25 mm² / 3,2 AWG | 0,000727 Ω/m / 0,000222 Ω/ft |
| Electrolytic copper | 35 mm² / 2,0 AWG | 0,000524 Ω/m / 0,000160 Ω/ft |
| Electrolytic copper | 50 mm² / 1/0 AWG | 0,000387 Ω/m / 0,000118 Ω/ft |
| Aluminum | 16 mm² / 5,2 AWG | 0,00191 Ω/m / 0,000582 Ω/ft |
| Aluminum | 25 mm² / 3,2 AWG | 0,00120 Ω/m / 0,000366 Ω/ft |
| Aluminum | 35 mm² / 2,0 AWG | 0,000868 Ω/m / 0,000265 Ω/ft |
| Aluminum | 50 mm² / 1/0 AWG | 0,000641 Ω/m / 0,000195 Ω/ft |

## Circular mil method (AWG/kcmil)

In North America and in installations using AWG or kcmil conductors, the expression based on circular mils and the specific resistivity coefficient K is used:

> **ΔU = (K · P · L · I) / A**

| Variable | Description | Unit |
| --- | --- | --- |
| ΔU | Voltage drop | V |
| K | Specific resistivity | Ω·circular mil/ft |
| P | Phase constant: 2 for single-phase, 1,732 for three-phase | — |
| L | Conductor length (one way) | ft |
| I | Current | A |
| A | Conductor area in circular mils | cmil |

### Resistivity coefficient K by material and temperature

| Material | Type | Temperature range | K (Ω·cmil/ft) |
| --- | --- | --- | --- |
| Copper | Solid | 25 to 50 °C / 77 to 121 °F | 11 |
| Copper | Solid | 50 to 75 °C / 122 to 167 °F | 12 |
| Copper | Stranded | 25 to 50 °C / 77 to 121 °F | 11 |
| Copper | Stranded | 50 to 75 °C / 122 to 167 °F | 12 |
| Aluminum | Solid | 25 to 50 °C / 77 to 121 °F | 18 |
| Aluminum | Solid | 50 to 75 °C / 122 to 167 °F | 20 |
| Aluminum | Stranded | 25 to 50 °C / 77 to 121 °F | 19 |
| Aluminum | Stranded | 50 to 75 °C / 122 to 167 °F | 20 |

## Method by unit drop factor

For standardized copper conductors, an empirical factor _f_ can be used that groups the resistive properties of the conductor. The simplified expression is:

> **ΔU = f · I · L**

where L corresponds to the length of a single conductor and the values of _f_ are obtained from the following table for each gauge.

| AWG gauge | Equivalent metric section | Single-phase factor f | Three-phase factor f |
| --- | --- | --- | --- |
| 14 | 2,08 mm² | 0,476 | 0,42 |
| 12 | 3,31 mm² | 0,313 | 0,26 |
| 10 | 5,26 mm² | 0,196 | 0,17 |
| 8 | 8,37 mm² | 0,125 | 0,11 |
| 6 | 13,3 mm² | 0,0833 | 0,071 |
| 4 | 21,2 mm² | 0,0538 | 0,046 |
| 3 | 26,7 mm² | 0,0431 | 0,038 |
| 2 | 33,6 mm² | 0,0323 | 0,028 |
| 1 | 42,4 mm² | 0,0323 | 0,028 |
| 1/0 | 53,5 mm² | 0,0269 | 0,023 |
| 2/0 | 67,4 mm² | 0,0222 | 0,020 |
| 3/0 | 85,0 mm² | 0,0190 | 0,016 |
| 4/0 | 107,2 mm² | 0,0161 | 0,014 |
| 250 kcmil | 126,7 mm² | 0,0147 | 0,013 |
| 300 kcmil | 152,0 mm² | 0,0131 | 0,011 |
| 350 kcmil | 177,3 mm² | 0,0121 | 0,011 |
| 400 kcmil | 202,7 mm² | 0,0115 | 0,009 |
| 500 kcmil | 253,4 mm² | 0,0101 | 0,009 |

## Factors influencing voltage drop

### Material resistivity

Electrical resistivity determines the intrinsic opposition of the material to current flow. Annealed copper has a resistivity of 1,72·10⁻⁸ Ω·m at 20 °C / 68 °F, while aluminum reaches 2,82·10⁻⁸ Ω·m at 20 °C / 68 °F. This difference explains why an aluminum conductor requires a cross-section approximately 1,6 times larger than a copper conductor for the same voltage drop.

### Operating temperature

The resistance of metallic conductors increases with temperature according to:

> **R<sub>T</sub> = R<sub>20</sub> · [1 + α · (T − 20 °C)]**

| Variable | Description | Unit |
| --- | --- | --- |
| R<sub>T</sub> | Resistance at temperature T | Ω |
| R<sub>20</sub> | Resistance at 20 °C / 68 °F | Ω |
| α | Temperature coefficient: 0,00393 for copper, 0,00403 for aluminum | °C⁻¹ |
| T | Operating temperature | °C |

A copper conductor operating at 75 °C / 167 °F increases its resistance by approximately 21,6% compared to the value at 20 °C / 68 °F.

### Circuit length

Voltage drop is linearly proportional to the conductor length. For single-phase circuits, twice the physical distance between source and load must be considered, since the current travels through both the phase conductor and the neutral. In balanced three-phase systems, if the neutral does not carry return current, only the phase length is counted.

### Current type and power factor

In direct current or single-phase alternating current with power factor close to unity, the purely resistive expression applies. In AC circuits with inductive loads (motors, ballasts, transformers), the cable reactance becomes relevant. For cross-sections larger than 16 mm² / 5,2 AWG, inductive reactance can represent between 5% and 15% of the total conductor impedance.

## Correction for reactance in alternating current

In alternating current installations with conductors of significant cross-section or with low power factors, the voltage drop must be calculated incorporating the inductive component:

> **ΔU = I · (R · cos φ + X · sin φ)**

| Variable | Description | Unit |
| --- | --- | --- |
| ΔU | Voltage drop | V |
| I | Circuit current | A |
| R | Conductor resistance | Ω |
| X | Inductive reactance of the conductor | Ω |
| cos φ | Load power factor | — |

### Typical values of inductive reactance

| Conductor arrangement | Reactance at 60 Hz |
| --- | --- |
| Single-core cables in trefoil | 0,08 to 0,10 mΩ/m / 0,024 to 0,030 mΩ/ft |
| Single-core cables spaced one diameter apart | 0,12 to 0,15 mΩ/m / 0,037 to 0,046 mΩ/ft |
| Cables in magnetic duct (steel) | 0,15 to 0,25 mΩ/m / 0,046 to 0,076 mΩ/ft |

For cross-sections smaller than 16 mm² / 6 AWG, reactance is negligible and the purely resistive calculation is sufficient.

## Recommended voltage drop limit values

Excessive voltage drop causes heating in conductors, reduction of starting torque in motors, decrease in luminous flux in lighting, and nuisance tripping of protections. International standards establish maximum limits for different types of circuits:

| Installation type | Recommended maximum drop | Reference standard |
| --- | --- | --- |
| Lighting circuits | 3% | NEC 210.19(A) / IEC 60364-5-52 |
| Power circuits (combined) | 5% | NEC 210.19(A) / IEC 60364-5-52 |
| Branch circuit from panel to load | 3% | NEC 210.19(A) |
| Feeder plus branch circuit combined | 5% | NEC 215.2(A)(3) |
| Motor starting circuits | 10 to 15% (transient) | NEMA MG-1 |
| Sensitive installations (data, instrumentation) | 1% | Manufacturer's recommendation |

## Frequently Asked Questions (FAQ)

**What grouping factor applies for voltage drop calculation?** 0,8 is the typical reduction factor for circuits with 4 to 6 active conductors in the same conduit, but this factor only affects the current-carrying capacity and not the voltage drop formula, which is calculated with the actual circuit current. Voltage drop increases indirectly if the cross-section is reduced by applying grouping factors.

**What is the maximum allowed voltage drop for a main feeder?** 3% is the maximum limit established by the NEC for feeders, and up to 5% when adding the branch circuit drop, measured from the service point to the farthest load. IEC 60364-5-52 recommends 4% for low voltage installations.

**How is the resistance value of copper corrected for a temperature of 90 °C?** The correction factor is 1,275, which means that the resistance of a copper conductor at 90 °C / 194 °F is 27,5% greater than at 20 °C / 68 °F. The correction formula is applied with the coefficient α of 0,00393 °C⁻¹.

**From what conductor length should voltage drop be calculated in a residential installation?** 30 m / 98 ft is the length from which it is essential to verify voltage drop in single-phase 120 V circuits with 2,5 mm² / 14 AWG conductors and typical 15 A loads. For 240 V circuits, this threshold doubles to approximately 60 m / 197 ft.

**What influence does a power factor of 0,85 have on the voltage drop of a 35 mm² conductor?** For a copper conductor of 35 mm² / 2 AWG with a power factor of 0,85, the reactive component represents approximately an additional 12% over the purely resistive drop. The total drop can be estimated by multiplying the resistive drop by a factor of 1,08 to 1,12.

**What is the minimum cross-section in mm² to limit voltage drop to 2% in a single-phase circuit of 230 V, 16 A and 40 m length?** The minimum required cross-section is approximately 6 mm² / 10 AWG, which produces a resistive drop of 4,56 V (1,98%) considering the out and return of the circuit (80 m / 262 ft total conductor). With 4 mm² / 12 AWG the drop reaches 2,93%.

## Online calculation tools

There are specialized calculators that simplify the sizing process for voltage drop. The Southwire calculator allows selecting the material, size, length, current, and circuit type, returning both the drop percentage and the final voltage at the load terminals. Conductor manufacturers integrate these tools into their technical portals to facilitate verification in the field and during the design stage.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/voltage-drop-d_1550.html
- **southwire.com**: https://www.southwire.com/calculator-vdrop
