---
title: "NEMA receptacle types specifications"
sidebar:
  label: "NEMA receptacle types specifications"
description: "Technical reference: NEMA receptacle types specifications"
keywords: ["NEMA receptacle plug configuration chart", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "receptacles-switches"
subcategory: "receptacle-types-nema"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Classification and Nomenclature
NEMA connectors are divided into two basic families: straight-blade devices and twist-lock devices, identified by the letter `L` before the numerical code. The nomenclature follows the format `L?-??R/P`, where the digits before the hyphen define the number of poles, number of wires, and voltage, and the digits after the hyphen indicate the rated current in amperes (A). The suffix `R` designates a receptacle (base) and `P` a plug (connector). For example, `5-15R` is a 125 V, 15 A, two-pole, three-wire receptacle (line, neutral, ground); `L5-15R` shares the same electrical rating but with a locking mechanism.

## Straight-Blade NEMA Connector Types
Straight-blade connectors make up the majority of residential and light commercial installations. The following table lists the most commonly used series.

| NEMA Series | Poles / Wires | Rated Voltage | Current (A) | Contact Configuration | Common Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1-15 | 2 / 2 | 125 V | 15 | Two parallel flat blades (no ground) | Old equipment, lamps, small chargers |
| 5-15 | 2 / 3 | 125 V | 15 | Two parallel flat blades + U-shaped ground pin | Appliances, electronics, standard household receptacle |
| 5-20 | 2 / 3 | 125 V | 20 | Two flat blades (one horizontal T) + U-shaped ground | Higher-consumption equipment like portable air conditioners |
| 6-15 | 2 / 3 | 250 V | 15 | Two horizontal flat blades + U-shaped ground | Air conditioners, heat pumps up to 15 A |
| 6-20 | 2 / 3 | 250 V | 20 | Two flat blades (one horizontal T, rotated) + U-shaped ground | Air conditioners, heat pumps up to 20 A |
| 10-30 | 3 / 3 | 125/250 V | 30 | Three flat blades (two angled, one L-shaped) | Older clothes dryers (no dedicated ground) |
| 10-50 | 3 / 3 | 125/250 V | 50 | Three flat blades (two angled, one straight) | Older electric ranges (no dedicated ground) |
| 14-30 | 3 / 4 | 125/250 V | 30 | Two flat line blades, L-shaped neutral, U-shaped ground | Modern clothes dryers, portable generators |
| 14-50 | 3 / 4 | 125/250 V | 50 | Same as 14-30, larger size | Electric ranges, electric vehicles (NEMA 14-50R) |

## Locking NEMA Connectors (Twist-Lock)
Connectors with the `L` prefix incorporate curved blades that rotate to lock, preventing accidental disconnections. They are used in industrial, healthcare, and infrastructure environments.

| NEMA Series | Poles / Wires | Rated Voltage | Current (A) | Description |
| :--- | :--- | :--- | :--- | :--- |
| L5-15 | 2 / 3 | 125 V | 15 | Locking, 125 V, general purpose with ground |
| L5-20 | 2 / 3 | 125 V | 20 | Similar to L5-15, for 20 A |
| L5-30 | 2 / 3 | 125 V | 30 | Used on generators, transfer switches, and marine equipment |
| L6-15 | 2 / 3 | 250 V | 15 | Locking, 250 V, no neutral, with ground |
| L6-20 | 2 / 3 | 250 V | 20 | 20 A version of L6-15 |
| L6-30 | 2 / 3 | 250 V | 30 | Common on welders, compressors, and server racks |
| L14-20 | 3 / 4 | 125/250 V | 20 | Locking, 4-wire, small size; temporary events |
| L14-30 | 3 / 4 | 125/250 V | 30 | Locking, 4-wire, 30 A; portable generators, fairs |

## Contact Dimensions
The dimensions of blades and slots are defined in ANSI/NEMA WD-6. The main dimensions for the most common series are:

| Parameter | NEMA 5-15 | NEMA 5-20 | NEMA 14-50 |
| :--- | :--- | :--- | :--- |
| Flat blade width | 6.35 mm / 0.250 in | 6.35 mm / 0.250 in | – |
| Flat blade thickness | 1.5 mm / 0.060 in | 1.5 mm / 0.060 in | – |
| Center-to-center distance between flat blades | 12.7 mm / 0.500 in | 12.7 mm / 0.500 in | – |
| Ground pin diameter | 4.76 mm / 0.1875 in | 4.76 mm / 0.1875 in | 5.94 mm / 0.234 in |
| Exposed ground pin length | 28.6 mm / 1.125 in | 28.6 mm / 1.125 in | 31.8 mm / 1.250 in |

## Conductor Gauge Selection
The choice of copper conductor must be based on the connector's rated current and the circuit length. The following table relates typical NEMA connector currents to the minimum recommended AWG gauge (considering ambient temperature of 30 °C / 86 °F and copper conductors).

| Connector Current (A) | AWG Gauge | Conductor Diameter | Cross-Sectional Area (mm²) |
| :--- | :--- | :--- | :--- |
| 15 | 14 AWG | 1.63 mm / 0.0641 in | 2.08 |
| 20 | 12 AWG | 2.05 mm / 0.0808 in | 3.31 |
| 30 | 10 AWG | 2.59 mm / 0.102 in | 5.26 |
| 50 | 6 AWG | 4.11 mm / 0.162 in | 13.3 |
| 60 | 4 AWG | 5.19 mm / 0.204 in | 21.1 |

## Mounting Orientation and Safety
Receptacle orientation directly affects electrical safety. Engineering recommendations indicate that in vertical mounting, the ground pin should be at the top. If a flat metal object (metal ruler, frame, cover) slides down the wall and contacts a partially inserted plug, it will first meet the ground connection, reducing the risk of a line-to-neutral short circuit and arcing. For horizontal mounting, it is advised that the neutral be at the top for the same principle. Although the NEC (National Electrical Code) does not mandate a specific orientation, major manufacturers (Pass & Seymour, Hubbell, Arrow-Hart) mark the yoke and GFCI buttons to be read with the ground upward.

## Frequently Asked Questions (FAQ)

### What is the main difference between a NEMA 5-15 and NEMA 5-20 receptacle?
The main difference is the maximum current: NEMA 5-15 supports 15 A and NEMA 5-20 supports 20 A, both at 125 V. The 5-20R receptacle has a T-shaped slot on the line blade that allows insertion of both 5-15P (15 A) and 5-20P (20 A) plugs.

### Can 14 AWG wire be used on a 20 A circuit protected by NEMA 5-20 connectors?
It is not recommended. 14 AWG wire only guarantees an ampacity of 15 A under standard conditions; for 20 A, at least 12 AWG is required, with a diameter of 2.05 mm / 0.0808 in and a cross-section of 3.31 mm².

### What current and voltage does a NEMA 10-30 connector handle?
The NEMA 10-30 is designed for 30 A at 125/250 V, 3-pole configuration without a dedicated ground, common on clothes dryers manufactured before the adoption of NEMA 14-30.

### Why are some NEMA 14-50 connectors used in electric vehicle charging stations?
Because they supply 50 A at 125/250 V (12,500 W total), enabling Level 2 charging with power levels above 9.6 kW, reducing recharge time compared to 15 A or 20 A receptacles.

### What is the ground pin diameter on a NEMA 5-15 plug?
The ground pin diameter on a NEMA 5-15P is 4.76 mm / 0.1875 in. This dimension is slightly larger than the width of the flat blades (6.35 mm / 0.250 in) to ensure that the ground makes contact first.

### Is it safe to install a NEMA 5-15 receptacle with the ground down?
Although not prohibited by code, installing with the ground down increases the risk of a short circuit if a thin metal object falls onto a partially pulled-out plug; most best-practice guides and the manufacturers themselves recommend the ground-up orientation.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Receptacles-Ground-Up-or-Ground-Down-(9-23-99).php
