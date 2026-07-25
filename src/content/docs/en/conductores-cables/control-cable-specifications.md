---
title: "Control cable specifications"
sidebar:
  label: "Control cable specifications"
description: "Technical reference: Control cable specifications"
keywords: ["control cable specifications types", "conductores-cables"]
category: "conductores-cables"
topic: "cable-types"
subcategory: "control-cable"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Control cables are multiple conductors designed to transmit command, supervision, and measurement signals in industrial automation and power distribution circuits. They are typically installed between control panels, sensors, and actuators, operating at rated voltages up to 600 V. Their construction usually includes flexible copper conductors, thermoplastic insulation, optional electromagnetic shielding, and an outer sheath resistant to oils and chemical agents.

## Rated Voltage
The standard rated voltage for most industrial control cables is **600 V** (0.6/1 kV IEC category in some variants), being suitable for control and signaling circuits in low voltage.

## Conductor Material
The standard conductor used in control cables is **annealed electrolytic copper**, class B or C stranding according to ASTM B8, with a maximum resistivity of 17,241 Ω·mm²/km at 20 °C. In special applications, aluminum is used, although copper predominates due to its conductivity and flexibility.

## Insulation
The typical insulation is **PVC (polyvinyl chloride)** flame retardant, with thicknesses complying with UL 1277 or IEC 60227. Other options include XLPE (cross-linked polyethylene) for higher operating temperature or EPR (ethylene-propylene) for wet environments. The minimum dielectric strength is 15 kV/mm / 381 V/mil.

## Shielding
To protect signals against electromagnetic interference (EMI), several shielding configurations are available:

| Shielding Type | Optical Coverage (%) | Typical Material |
| --- | --- | --- |
| Aluminum/polyester tape with drain wire | 100 % | Al/PET tape 0.025 mm / 0.001 in with tinned copper drain wire |
| Tinned copper braid | 85 – 90 % | Tinned copper wires AWG 34 / 0.16 mm² |
| Double shielding (tape + braid) | 100 % + 90 % | Combination of tape and braid |

The maximum shield resistance as return path must not exceed 10 Ω/km / 3.05 Ω/1000 ft.

## Operating Temperature
The operating temperature range depends on the insulation type:

| Insulation Material | Maximum Temperature in Dry Service | Maximum Temperature in Wet Service |
| --- | --- | --- |
| Standard PVC | 90 °C / 194 °F | 75 °C / 167 °F |
| PVC 105 °C | 105 °C / 221 °F | 75 °C / 167 °F |
| XLPE | 90 °C / 194 °F | 90 °C / 194 °F |
| EPR | 90 °C / 194 °F | 90 °C / 194 °F |

## Reference Standards
Control cables are manufactured following international standards that govern dimensions, materials, and tests: ICEA S-73-532, UL 1277, CSA C22.2 No. 230, IEC 60227 and IEC 60502-1. RoHS and REACH compliance is mandatory for the European market.

## Standard Cross Sections
Conductor cross sections in control cables follow the AWG (American Wire Gauge) scale and its metric equivalent. The following table lists the most common gauges with their diameters and electrical resistances for solid copper conductor at 20 °C / 68 °F.

| AWG | Conductor Diameter (mm / in) | Cross Section (mm²) | Electrical Resistance (Ω/km / Ω/1000 ft) |
| --- | --- | --- | --- |
| 20 | 0,81 / 0.0320 | 0,52 | 33,2 / 10,12 |
| 18 | 1,02 / 0.0403 | 0,82 | 21,0 / 6,39 |
| 16 | 1,29 / 0.0508 | 1,31 | 13,2 / 4,02 |
| 14 | 1,63 / 0.0641 | 2,08 | 8,28 / 2,52 |
| 12 | 2,05 / 0.0808 | 3,31 | 5,21 / 1,59 |
| 10 | 2,59 / 0.1020 | 5,26 | 3,28 / 1,00 |

Note: for flexible cable class C, the resistance increases approximately 3% compared to solid conductor.

## Number of Conductors
Control cables are supplied with configurations ranging from **2 to 37 conductors**, with options of up to 60 wires in special orders. Even numbers with neutral (3, 5, 7...) are common in three-phase control circuits.

## Colors and Identification Code
According to ICEA S-73-532, method 1, insulated conductors are identified with black colors and white printed numbering on the insulation, or by means of base colors with tracers. The table summarizes the usual coding:

| Number of Conductors | Base Colors |
| --- | --- |
| 2 | Black, white |
| 3 | Black, white, red |
| 4 | Black, white, red, green |
| 5 | Black, white, red, green, orange |
| More than 5 | Black base + sequential white numbering |

The ground conductor, when included, is green or green/yellow and is counted separately.

## Marking
The outer sheath bears engraved or printed legend with the following fields, separated by spaces or hyphens: manufacturer, cable type, number of conductors and AWG, voltage, reference standard, year of manufacture, and "RoHS" legend. Example: `FABRICANTE – CABLE CONTROL 7h x 16 AWG – 600V – ICEA S-73-532 – 2025 – RoHS`. The minimum spacing between marks is 1 m / 39,37 in.

## Minimum Bending Radius
The bending radius during installation must not be less than a multiple of the total outer diameter of the cable (D). The general formula is:

> **Rmin = k × D**

Where k depends on the construction type:

| Cable Type | Factor k (minimum) |
| --- | --- |
| Unshielded and unarmored cable | 6 |
| Cable with tape or braid shield | 8 |
| Armored cable (aluminum/steel) | 12 |

For example, for an armored cable with an outer diameter of 20 mm / 0.787 in, the minimum bending radius is Rmin = 12 × 20 mm = 240 mm / 9.45 in. During static operation, these values may be reduced by 20%.

## Additional Construction Characteristics

| Component | Material / Thickness | Property |
| --- | --- | --- |
| Fillers | Non-hygroscopic polypropylene | Water resistance and dimensional stability |
| Inner sheath (in armored cables) | Black PVC 1.0 mm / 0.039 in min. | Mechanical protection prior to armor |
| Metallic armor | Interlocked aluminum or galvanized steel | Impact resistance; helical pitch 7 × D |
| Outer sheath | Oil, UV and weather resistant PVC | Thickness per UL 1277: 1,14 mm / 0.045 in for cables ≤25,4 mm / 1 in |

## Frequently Asked Questions (FAQ)

### What is the factory withstand insulation voltage of a 600 V control cable?
The factory dielectric strength test is performed by applying 3000 V AC / 3500 V DC for 5 minutes, which is equivalent to 2 × U0 + 1000 V, ensuring a breakdown voltage well above the rated voltage.

### What AWG 14 conductor cross-section is needed for a 4-20 mA control loop with a length of 1500 m?
For a loop of 1500 m / 4921 ft with a 250 Ω receiver, a 2.08 mm² (14 AWG) conductor introduces a resistance of 8.28 Ω/km × 1.5 km = 12.42 Ω, allowing a drop of less than 1% of the typical loop voltage of 24 V.

### How many conductors can a control cable with a maximum outer diameter of 18 mm accommodate?
In a diameter of 18 mm / 0.71 in, up to 12 conductors of 16 AWG with PVC insulation of 0.38 mm / 0.015 in and sheath of 1.14 mm / 0.045 in can be accommodated, typical in unarmored cables.

### What is the minimum insulation resistance in PVC cables at 20 °C?
At 20 °C / 68 °F the insulation resistance must not be less than 100 MΩ × km for conductors with cross section ≥0.82 mm² (18 AWG), measured with 500 V DC applied for one minute.

### What maximum temperature does a control cable with PVC insulation withstand during a short circuit?
The maximum short-circuit temperature for PVC insulation is 160 °C / 320 °F for a maximum of 5 seconds, allowing a short-duration current density before thermal damage.

### What is the minimum outer sheath thickness of an unarmored 10 AWG control cable?
For an unarmored cable with a diameter under inner sheath of 12 mm / 0.47 in, the nominal thickness of the PVC outer sheath is 1.5 mm / 0.059 in, with a minimum allowed of 1.2 mm / 0.047 in per UL 1277.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **southwire.com**: https://www.southwire.com/wire-cable/armored-power-cable/csa-teck-90-600v-pvc-control-cable/p/SPEC25040

