---
title: "MC armored cable specifications"
sidebar:
  label: "MC armored cable specifications"
description: "Technical reference: MC armored cable specifications"
keywords: ["MC armored cable specifications", "conductores-cables"]
category: "conductores-cables"
topic: "cable-types"
subcategory: "armored-cable"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

MC (Metal Clad) cable is a power cable rated up to 600 V consisting of copper or aluminum conductors with thermoplastic insulation, a grounding conductor, a general binder tape assembly, and an interlocked aluminum or steel metal armor that provides mechanical protection and serves as an equipment grounding path. Its maximum operating temperature in dry conditions is 90 °C for copper conductors and 75 °C for aluminum, with an installation temperature range of -25 °C to 70 °C without an outer jacket.

## Construction Specifications

| Component | Material | Specification |
| --- | --- | --- |
| Phase conductor | Soft copper or 8000 series aluminum | THHN/THWN-2, compressed or compact |
| Insulation | PVC plus nylon | Flame retardant, color per NEC code |
| Grounding conductor | Soft copper | Green insulation per NEC, size per Table 250.122 |
| Assembly | Polypropylene or polyester tape | Covers insulated conductors, no absorbent filler |
| Armor | Aluminum alloy (AL 5052 or similar) or galvanized steel | Helical, interlocked, minimum thickness 0.56 mm / 0.022 in for standard sizes |
| Jacket (optional) | Flexible PVC | Sunlight and oil resistant, available in direct burial versions |

## Dimensions and Diameters

| AWG/kcmil Size | Cross Section (mm²) | Nominal Outer Diameter Aluminum (mm / in) | Nominal Outer Diameter Steel (mm / in) |
| --- | --- | --- | --- |
| 14 AWG solid | 2.08 mm² / 4.11 kcmil | 8.6 mm / 0.339 in | 9.1 mm / 0.358 in |
| 12 AWG solid | 3.31 mm² / 6.53 kcmil | 9.7 mm / 0.382 in | 10.2 mm / 0.402 in |
| 10 AWG solid | 5.26 mm² / 10.38 kcmil | 11.2 mm / 0.441 in | 11.9 mm / 0.469 in |
| 8 AWG | 8.36 mm² / 16.5 kcmil | 13.2 mm / 0.520 in | 14.0 mm / 0.551 in |
| 6 AWG | 13.3 mm² / 26.2 kcmil | 15.5 mm / 0.610 in | 16.3 mm / 0.642 in |
| 4 AWG | 21.1 mm² / 41.7 kcmil | 18.3 mm / 0.720 in | 19.1 mm / 0.752 in |
| 2 AWG | 33.6 mm² / 66.4 kcmil | 21.6 mm / 0.850 in | 22.4 mm / 0.882 in |
| 1/0 AWG | 53.5 mm² / 105.6 kcmil | 26.2 mm / 1.031 in | 27.0 mm / 1.063 in |

The outer diameter of a cable with stranded conductor is larger than that of a solid conductor of the same AWG size; the table indicates typical values for Class B or C conductors in aluminum armor without jacket.

## Continuous Ampacity

Allowable current in copper conductors, 30 °C ambient temperature, maximum three current-carrying conductors in MC cable, installed in air.

| AWG/kcmil Size | 60 °C (A) | 75 °C (A) | 90 °C (A) |
| --- | --- | --- | --- |
| 14 AWG | 15 A | 20 A | 25 A |
| 12 AWG | 20 A | 25 A | 30 A |
| 10 AWG | 30 A | 35 A | 40 A |
| 8 AWG | 40 A | 50 A | 55 A |
| 6 AWG | 55 A | 65 A | 75 A |
| 4 AWG | 70 A | 85 A | 95 A |
| 2 AWG | 95 A | 115 A | 130 A |
| 1/0 AWG | 125 A | 150 A | 170 A |

For aluminum conductors, apply a factor of 0.80 to the copper ampacity; the maximum operating temperature of aluminum in MC cable is typically limited to 75 °C.

## Temperature Correction Factors

| Ambient Temperature (°C / °F) | Factor for 60 °C | Factor for 75 °C | Factor for 90 °C |
| --- | --- | --- | --- |
| 10 °C / 50 °F | 1.29 | 1.20 | 1.15 |
| 20 °C / 68 °F | 1.12 | 1.08 | 1.04 |
| 30 °C / 86 °F | 1.00 | 1.00 | 1.00 |
| 40 °C / 104 °F | 0.82 | 0.88 | 0.91 |
| 50 °C / 122 °F | 0.58 | 0.75 | 0.82 |
| 60 °C / 140 °F | — | 0.58 | 0.71 |
| 70 °C / 158 °F | — | — | 0.58 |

## Physical Properties and Resistances

| Property | Value |
| --- | --- |
| Maximum conductor temperature (continuous operation) | 90 °C / 194 °F (copper THHN), 75 °C / 167 °F (aluminum) |
| Maximum short circuit temperature | 250 °C / 482 °F (max 5 s) |
| Installation temperature range | -25 °C to 70 °C / -13 °F to 158 °F (without jacket) |
| Compression resistance (aluminum armor) | 450 N/cm / 257 lb/in minimum |
| Impact resistance | 2.26 J / 20 lb·in minimum |
| Insulation resistance at 15.6 °C / 60 °F | Minimum 2000 MΩ·km at 500 V DC |
| Flammability class | UL 1569, FT4 (vertical cable tray) |

## Allowable Voltage Drop

The voltage drop for power installations using MC cable must be limited to 3% per branch circuit or 5% combined with the feeder per NEC 210.19. The formula for a single-phase AC system is:

> **Vd = (2 × L × I × R) / 1000**

| Variable | Meaning | Unit |
| --- | --- | --- |
| Vd | Voltage drop | V |
| L | Circuit length (one way) | m |
| I | Load current | A |
| R | Electrical resistance of conductor | Ω/km |

For three-phase systems, replace the factor 2 with √3 ≈ 1.732. Resistance values at 75 °C for copper are 8.28 Ω/km for 14 AWG, 5.21 Ω/km for 12 AWG, 3.28 Ω/km for 10 AWG, and 2.08 Ω/km for 8 AWG.

## Typical Applications

MC armored cable is approved for the following applications per NEC 330:

- Branch circuits, feeder circuits, and control circuits in commercial, industrial, and multifamily residential buildings.
- Installation in cable trays, tray supports, ladder racks, or exposed on surfaces.
- Direct burial or installation in underground conduits when the cable has an approved PVC jacket (marked "MC direct burial").
- Use in damp or wet locations if the cable includes a moisture-resistant jacket.
- Power supply for HVAC equipment, pumps, motors, electrical panels, and load centers in environments with moderate mechanical exposure.
- Not permitted in Class I Division 1 hazardous locations unless the cable has specific certification (MC-HL) and is installed with explosion-proof fittings.

## Installation Accessories

| Accessory Type | Function | Typical Material |
| --- | --- | --- |
| "Push-in" / "snap-in" connector | Quick termination in metal box, spring retention | Zinc-plated steel, aluminum alloy |
| Compression connector | Termination in enclosure with tight seal and electrical continuity | Anodized aluminum, stainless steel |
| Anti-short bushing (red devil bushing) | Protection of conductors against sharp armor edge | Polypropylene, nylon |
| Cable clamp | Securing cable along its run every 1.8 m / 6 ft maximum | Steel, aluminum |
| Outdoor termination kit | IP65 environmental seal with cable gland | Nickel-plated brass or stainless steel |

## Frequently Asked Questions (FAQ)

### What is the ampacity of a 12 AWG copper MC cable at 75 °C?
The ampacity of a 12 AWG copper MC cable with THHN insulation at 75 °C is 25 A, provided that there are no more than three current-carrying conductors and the ambient temperature does not exceed 30 °C / 86 °F.

### Can MC cable be installed directly underground without additional protection?
Standard MC cable is not suitable for direct burial; it requires the version with PVC jacket marked "MC direct burial", which withstands moisture and soil chemical attack, with a minimum installation temperature of -25 °C / -13 °F.

### What is the maximum temperature a THHN conductor inside an MC cable can withstand during a short circuit?
The copper conductor inside an MC cable with THHN insulation can reach 250 °C / 482 °F during a short circuit, with a maximum duration of 5 seconds without compromising insulation integrity.

### What is the smallest size manufactured for MC cable?
MC cable is typically manufactured from 18 AWG / 0.82 mm² for control and signaling circuits, and from 14 AWG / 2.08 mm² for power circuits of 120 V and above.

### What is the thickness of the aluminum armor on a 10 AWG MC cable?
The aluminum armor on a 10 AWG MC cable has a nominal thickness of 0.56 mm / 0.022 in, providing an approximate outer diameter of 11.2 mm / 0.441 in in a three-conductor plus insulated ground configuration.

### How much does a 4/3 copper MC cable with steel armor weigh per meter?
A 4 AWG 3-conductor copper plus ground MC cable with galvanized steel armor weighs approximately 0.89 kg/m / 0.60 lb/ft; the aluminum armor version reduces the weight to about 0.62 kg/m / 0.42 lb/ft.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **southwire.com**: https://www.southwire.com/wire-cable/metal-clad-cable/c/c-mcmain
