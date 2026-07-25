---
title: "Elevator electrical requirements"
sidebar:
  label: "Elevator electrical requirements"
description: "Technical reference: Elevator electrical requirements"
keywords: ["elevator electrical code requirements NEC 620", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "elevator-electrical-requirements"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Article 620 of the National Electrical Code (NEC/NFPA 70) establishes requirements for the installation of conductors, electrical equipment, raceways, and control systems for elevators, dumbwaiters, escalators, moving walks, platform lifts, and stairway chairlifts. Its application extends from the dedicated feeder service entrance to disconnecting means, overcurrent protection, traveling cables, grounding, and lighting and receptacle circuits in the machine room. When equipment is installed in atmospheres with flammable gases, vapors, or combustible dusts, the hazardous location requirements of NEC Articles 500 through 506 must also be met.

## Main Electrical Parameters

| Parameter | Value |
| --- | --- |
| Typical three-phase nominal voltage | 208 V / 208 V; 240 V / 240 V; 480 V / 480 V (60 Hz) |
| Control voltage | 120 V / 120 V (single-phase) from control transformer |
| Frequency | 60 Hz / 60 Hz |
| Minimum equipment short-circuit current | 10 kA / 10 kA symmetrical |
| Demand factor for multiple elevators | Per NEC Table 620.14, varies from 1.00 (1 elevator) to 0.72 (6 or more) |
| Minimum main feeder conductor size | 8 AWG / 8,37 mm² (copper) |
| Maximum conductor operating temperature | 75 °C / 167 °F (for ampacity calculations per NEC) |
| Maximum grounding resistance | 25 Ω / 25 Ω (IEEE recommended value, not mandatory in NEC) |

### Feeder and Protection Classification

| Circuit | Typical protection (circuit breaker) | Interrupting rating |
| --- | --- | --- |
| Main feeder | Molded case circuit breaker, 3-pole, 100 A / 100 A | 25 kA / 25 kA at 480 V / 480 V |
| Control circuit | Class CC fuses, 15 A / 15 A | 100 kA / 100 kA at 120 V / 120 V |
| Machine room lighting | Thermal-magnetic circuit breaker 1P, 15 A / 15 A | 10 kA / 10 kA at 120 V / 120 V |

## Hazardous Area Classification (when applicable)
If the elevator is installed in an atmosphere with fire or explosion risk, the electrical installation must comply with the NEC hazardous location classification, either by the Class/Division system (Article 500) or the Zone system (Articles 505/506). The Class/Division system is summarized below:

| Class | Nature of hazardous material |
| --- | --- |
| Class I | Flammable gases or vapors in sufficient quantity to produce explosive or ignitable mixtures. |
| Class II | Combustible or conductive dusts in sufficient quantity to produce explosive or ignitable mixtures. |
| Class III | Ignitable fibers or flyings in sufficient quantity to produce explosive or ignitable mixtures. |

| Division | Probability of presence of hazardous material |
| --- | --- |
| Division 1 | High probability: present continuously, intermittently, or periodically, or equipment releases it during normal operation. |
| Division 2 | Low probability: present only under abnormal conditions and for short periods (leaks, ruptures, failures). |

| Group (Gases) | Type of hazardous material |
| --- | --- |
| Group A | Acetylene. |
| Group B | Hydrogen, butadiene, ethylene oxide, propylene oxide, acrolein, or gases with MESG ≤ 0,45 mm / 0.018 in or MIC ratio ≤ 0,40. |
| Group C | Carbon monoxide, ether, hydrogen sulfide, morpholine, cyclopropane, ethylene, isoprene, acetaldehyde, with MESG > 0,75 mm / 0.030 in or MIC ratio between 0,40 and 0,80. |
| Group D | Gasoline, acetone, ammonia, benzene, butane, ethanol, hexane, methanol, methane, natural gas, propane, with MESG > 0,75 mm / 0.030 in or MIC ratio > 0,80. |

| Group (Dusts/Fibers) | Type of hazardous material |
| --- | --- |
| Group E | Combustible metal dusts: aluminum, magnesium, bronze, chromium, titanium, zinc, and their alloys. |
| Group F | Carbonaceous dusts: carbon black, charcoal, coke, coal with more than 8 % volatile matter. |
| Group G | Other combustible dusts: flour, grain, starch, sugar, wood, plastics, chemicals. |

> **MESG**: Maximum Experimental Safe Gap – the maximum gap between two parallel metal surfaces that, under test conditions, prevents the propagation of an explosion from a test chamber to another containing the same flammable mixture.  
> **MIC ratio**: Ratio of the minimum igniting current relative to that of methane under the same conditions.

Electrical equipment in these environments must be certified for the corresponding class, division, and group. In the case of an elevator within a Class I, Division 1 area, motors, control panels, and control devices must be explosion-proof or intrinsically safe.

## Formula for Voltage Drop Calculation in Elevator Feeders
The NEC recommends a maximum voltage drop of 3% on the feeder for power loads. For a three-phase system, the voltage drop is calculated with the following expression:

> **V drop = (√3 · I · L · (R cos φ + X sin φ)) / 1000**

where:

| Variable | Description | Units |
| --- | --- | --- |
| V drop | Line-to-line voltage drop | V / V |
| I | Full-load motor current | A / A |
| L | Feeder length (one-way) | m / ft |
| R | Conductor resistance per unit length | Ω/km / Ω/1000 ft |
| X | Inductive reactance per unit length | Ω/km / Ω/1000 ft |
| cos φ | Load power factor | dimensionless |
| sin φ | √(1 − cos² φ) | dimensionless |

For a quick calculation in direct current or short circuits, the simplified formula can be used:

> **V drop = (2 · I · L · R) / 1000** (single-phase)  
> **V drop = (√3 · I · L · R) / 1000** (three-phase)

Always verify that the cumulative voltage drop up to the elevator motor does not exceed 5% per the definition of "point of delivery" in NEC 620.12.

## Typical Applications
- Medium to high-rise residential buildings with electric traction or hydraulic elevators.
- Hotels and hospitals with freight elevators and dumbwaiters.
- Shopping centers with escalators and moving walks.
- Industrial facilities with cargo elevators in dusty environments or with flammable vapors (classified areas).
- Stairway chairlifts in single-family homes or accessible public spaces.

## Reference Standards
- NFPA 70 (NEC), Article 620 – Elevators, dumbwaiters, escalators, and moving walks.
- NFPA 70 (NEC), Articles 500 through 506 – Hazardous locations (area classification).
- ANSI/ASME A17.1 – Safety code for elevators and escalators.
- IEEE Std 241 (Gray Book) – Electrical systems in commercial buildings.
- IEC 60079 (explosive atmospheres) for equipment with international certification.

## Frequently Asked Questions (FAQ)

**1. What is the most common supply voltage for a commercial elevator?** The standard voltage is 480 V three-phase / 480 V three-phase, although many equipment accept 208 V / 208 V and 240 V / 240 V; the control is supplied at 120 V single-phase / 120 V single-phase via a control transformer.

**2. What is the minimum conductor size required by the NEC for an elevator feeder?** The main feeder conductor cannot be smaller than 8 AWG / 8,37 mm² copper, regardless of load, per NEC 620.12.

**3. How much current does a typical passenger elevator draw?** A hydraulic elevator with a capacity of 1360 kg / 3000 lb typically requires between 40 A and 60 A at 480 V / 480 V, while a traction elevator of similar load may consume 30 A to 50 A.

**4. At what height above the floor should the elevator disconnect be installed?** The disconnecting means must be located so that the operating handle is at a height not more than 1,98 m / 6.5 ft above the floor or working platform, per NEC 620.51.

**5. What demand factor applies to a bank of 3 elevators?** For 3 elevators, the demand factor is 0.90 on the sum of the nameplate full-load currents of each unit, according to NEC Table 620.14.

**6. What maximum temperature is considered for conductor selection in a machine room?** Conductors are sized for an ambient temperature of 40 °C / 104 °F, unless the manufacturer specifies a higher value; the 75 °C / 167 °F column of the NEC ampacity tables is used.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/basic-electrical/
