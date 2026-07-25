---
title: "NOM-001-SEDE general guide"
sidebar:
  label: "NOM-001-SEDE general guide"
description: "Technical reference: NOM-001-SEDE general guide"
keywords: ["NOM-001-SEDE electrical installation guide Mexico", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nom-001"
subcategory: "nom001-general"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Definition and purpose
NOM-001-SEDE is an official Mexican standard that establishes provisions for electrical installations in buildings with supply voltages up to 600 V / 600 V (rms) in alternating current. Its main objective is to safeguard human life and preserve property through safety, performance, and good installation practice requirements, covering from the service entrance to the utilization equipment.

## Scope of application
This standard applies to new electrical installations, expansions and modifications of all types of residential, commercial, industrial, agricultural, and public service buildings in the Mexican Republic. Installations of electric power supply companies regarding generation and transmission are excluded, as well as ships and aircraft, as detailed in the scope section of the standard itself.

## Voltage classification
The installations covered by NOM-001-SEDE operate at nominal voltages up to 600 V / 600 V in alternating current and 1500 V / 1500 V in direct current for standard conditions, according to equivalent international criteria. Low voltage levels (not exceeding 1000 V / 1000 V) are recognized in alignment with standards such as DIN VDE 0100, and safety distances and insulation requirements are established based on voltage category.

| Voltage level | Voltage between phase and neutral (AC) | Voltage between phases (AC) |
| --- | --- | --- |
| Extra-low voltage | ≤ 50 V / 50 V | ≤ 50 V / 50 V |
| Low voltage (LV) | > 50 V – ≤ 300 V / 300 V | > 50 V – ≤ 600 V / 600 V |
| Reduced voltage (special) | 110 V / 110 V – 220 V / 220 V | 220 V / 220 V – 440 V / 440 V |

## General installation requirements
Every installation must guarantee a minimum of 3 m / 9.84 ft of clear height above work surfaces in electrical rooms, and distribution panels must be located with at least 1 m / 3.28 ft of free front space. Conductors are sized with a maximum voltage drop of 3% for lighting circuits and 5% for the combination of feeder and branch circuit.

## Conductor selection and protection
In circuits up to 600 V / 600 V, copper conductors must respect current-carrying capacities based on an ambient temperature of 30 °C / 86 °F. The maximum operating temperature of the insulation defines the ampacity; for example, a THWN‑2 conductor allows 75 °C / 167 °F in dry environment and up to 90 °C / 194 °F in special conditions. Nominal currents below 0.5 A / 0.5 A are considered for signal circuits.

| Nominal cross-section (mm² / AWG) | Approx. outer diameter (mm / in) | Ampacity at 60 °C (A) | Ampacity at 75 °C (A) |
| --- | --- | --- | --- |
| 2.5 mm² / 14 AWG | 3.26 mm / 0.128 in | 15 A | 20 A |
| 4 mm² / 12 AWG | 4.11 mm / 0.162 in | 20 A | 25 A |
| 6 mm² / 10 AWG | 5.18 mm / 0.204 in | 30 A | 35 A |
| 16 mm² / 6 AWG | 7.80 mm / 0.307 in | 55 A | 65 A |
| 35 mm² / 2 AWG | 12.6 mm / 0.496 in | 95 A | 115 A |
| 120 mm² / 4/0 AWG | 17.5 mm / 0.689 in | 195 A | 230 A |

## Overcurrent protection
A protective device must interrupt fault currents up to 10 000 A / 10 000 A (symmetrical rms) in general-purpose circuit breakers. Protections are coordinated with the short-circuit capacity of the conductor, ensuring that the fault clearing time, typically 0.1 s / 0.1 s, does not exceed the thermal limit of the insulation.

## Grounding systems
The resistance of the grounding system must not exceed 25 Ω / 25 Ω for individual electrodes, and the main equipotential bonding conductor is sized with a copper conductor of at least 6 mm² / 10 AWG. All metal elements that could become accidentally energized must be connected to the ground bus via conductors capable of withstanding prospective fault currents of 3 kA / 3 kA.

## Raceways and enclosures
Rigid metal raceways of 25 mm / 1 in diameter support a maximum fill of 40% with conductors, based on calculation using the actual interior area of 490 mm² / 0.759 in² for that nominal diameter. Enclosures must have a minimum protection rating of IP20 / IP20 for dry indoors and IP44 / IP44 for wet locations.

## Special areas and wet locations
In bathrooms, a protection zone of 0.6 m / 1.97 ft around the bathtub or shower is established, where only luminaires with IPX5 / IPX5 rating and voltages not exceeding 12 V / 12 V in internal circuits are allowed. Electric saunas require wiring resistant to 170 °C / 338 °F and a minimum distance of 0.5 m / 1.64 ft between the heater and combustible materials.

## Table of correction factors for ambient temperature
Ampacity is corrected by multiplying by the indicated factors when the ambient temperature differs from 30 °C / 86 °F. This practice is consistent with the recommendations of DIN VDE 0276 part 1000 and reflects the thermal behavior of insulations.

| Ambient temperature (°C / °F) | Factor for 60 °C conductor | Factor for 75 °C conductor |
| --- | --- | --- |
| 21–25 °C / 70–77 °F | 1.08 | 1.05 |
| 26–30 °C / 79–86 °F | 1.00 | 1.00 |
| 31–35 °C / 88–95 °F | 0.91 | 0.94 |
| 36–40 °C / 97–104 °F | 0.82 | 0.88 |
| 41–45 °C / 106–113 °F | 0.71 | 0.82 |
| 46–50 °C / 115–122 °F | 0.58 | 0.75 |

## Voltage drop calculation
The maximum allowable voltage drop is determined by the following expression, which must be verified for the longest circuit in a typical 120 V / 120 V installation.

> **Vd = 2 × L × I × (R cos φ + X sen φ) / 1000**

| Variable | Description | Unit |
| --- | --- | --- |
| Vd | Voltage drop (V) | V |
| L | Conductor length (m / ft) | m / ft |
| I | Load current (A) | A |
| R | Conductor resistance (Ω/km or Ω/1000 ft) | Ω/km or Ω/1000 ft |
| X | Conductor reactance (Ω/km or Ω/1000 ft) | Ω/km or Ω/1000 ft |
| φ | Power factor angle | degrees |

## Frequently Asked Questions (FAQ)

### What is the minimum cross-section of the main grounding electrode conductor?
The minimum cross-section is 6 mm² / 10 AWG for copper conductors, as established by NOM‑001‑SEDE for installations with service entrances up to 100 A / 100 A.

### At what depth should grounding electrodes be buried?
Vertical electrodes must be driven to a minimum depth of 2.4 m / 7.87 ft, in order to ensure contact with stable resistivity soil.

### What maximum temperature does an XHHW-2 cable withstand in continuous operation?
The temperature of the XHHW‑2 conductor can reach 90 °C / 194 °F in steady state, provided the ambient temperature does not exceed 40 °C / 104 °F.

### How much clear space should be left in front of a 1200 A electrical panel?
A working space of at least 1.0 m / 3.28 ft depth and 2.0 m / 6.56 ft height without obstructions is required, with width equal to the equipment width plus 0.6 m / 1.97 ft.

### What is the minimum distance between a receptacle and a water source in bathrooms?
The minimum distance is 1.5 m / 4.92 ft measured horizontally from the edge of the bathtub or shower, to prevent electrocution risks.

### At what interval should a junction box be installed in straight conduit runs?
Junction boxes are placed at intervals no greater than 30 m / 98.4 ft in continuous straight runs, facilitating conductor pulling and inspection.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/DIN-VDE-power-installations-d_1876.html
- **mikeholt.com**: https://www.mikeholt.com/
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electrical-laws/
