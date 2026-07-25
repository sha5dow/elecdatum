---
title: "Bearing types in electric motors"
sidebar:
  label: "Bearing types in electric motors"
description: "Technical reference: Bearing types in electric motors"
keywords: ["electric motor bearing types", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-bearing-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Bearings in electric motors support the rotor shaft and allow it to rotate freely while minimizing friction. In a standard motor, two bearings are typically used, one at each end of the shaft, selected according to rotational speed, direction and magnitude of loads, and environmental conditions. The most common configuration in industrial motors up to 500 kW uses a deep groove ball bearing on the drive end and a deep groove ball bearing on the opposite end (fan end), providing axial freedom to absorb thermal expansion. The bearings are housed in the end shields or flanges of the stator and can be factory-sealed or regreasable via grease fittings. The rated life L10 of these bearings, under normal load and speed conditions, exceeds 20,000 operating hours in most industrial designs.

## Types and Configuration
The selection of the bearing type mainly responds to the nature of the load applied on the shaft (radial, axial, or combined) and the motor rotational speed. The mounting configuration in horizontal and vertical electric motors differs, since in vertical motors the lower bearing must support the entire rotor weight plus axial thrust.

| Bearing type | Predominant load type | Typical motor configuration |
|---|---|---|
| Deep groove ball bearing | Light to moderate radial; accepts axial thrust in both directions | Drive end (DE) and fan end (NDE) in small and medium motors |
| Cylindrical roller bearing | High radial; does not accept axial load (except specific designs with flange) | Drive end (DE) in large motors or with heavy coupling |
| Angular contact (single row) | Combined radial + axial in one direction; mounted in pairs for bidirectional load | Vertical motors or with high axial thrust (vertical pumps) |
| Self-aligning ball bearing | Moderate radial; accepts angular misalignments up to 3° | Applications with long shafts or difficulty in precise alignment |
| Spherical roller bearing | Very high radial with impact loads; accepts misalignments and some axial thrust | Large traction motors, mills, industrial fans |

## Technical Characteristics
Main dimensions are governed by standardized diameter and width series according to ISO 15. Materials and finishes directly influence dynamic load capacity, limiting speed, and resistance to corrosion or high temperatures.

| Characteristic | Deep groove ball (series 62) | Cylindrical roller (series NU) | Angular contact (series 72) |
|---|---|---|---|
| Ring and rolling element material | AISI 52100 / 100Cr6 steel | AISI 52100 / 100Cr6 steel | AISI 52100 / 100Cr6 steel |
| Ring surface hardness | 58-65 HRC | 58-65 HRC | 58-65 HRC |
| Raceway surface finish (Ra) | 0.1-0.2 µm / 4-8 µin | 0.15-0.25 µm / 6-10 µin | 0.1-0.2 µm / 4-8 µin |
| Radial load capacity (dynamic C) | 100 % (reference) | 150-250 % relative to balls of same outside diameter | 120-180 % relative to deep groove ball, depending on contact angle |
| Axial load capacity | 20-50 % of dynamic radial load | None in standard execution (NU) | 50-100 % of radial load, function of angle (15°, 25°, 40°) |
| Allowable combined load | Good (supports bidirectional axial) | Very limited (only with NJ or NUP design) | Excellent in one direction (unidirectional) |
| Limiting speed (n·dm factor) | 500 000 – 600 000 mm/min / 19 685 – 23 622 in/min | 400 000 – 500 000 mm/min / 15 748 – 19 685 in/min | 350 000 – 550 000 mm/min / 13 780 – 21 654 in/min (depending on angle and cage) |

## Compatibility and Applications
Each type of electric motor, due to its operating principle and the load conditions imposed by the driven machine, is compatible with a more or less broad group of bearings. Typical applications guide the preselection of the bearing type during the design or replacement phase.

| Motor type | Drive end (DE) bearing | Fan end (NDE) bearing | Typical application |
|---|---|---|---|
| Closed three-phase induction motor (up to 37 kW / 50 HP) | Deep groove ball bearing with seal 2RS | Deep groove ball bearing with axial freedom in housing | Horizontal centrifugal pump, axial fan |
| Medium-voltage three-phase induction motor (>200 kW / 268 HP) | Cylindrical roller NU + angular contact or deep groove ball as locating bearing | Deep groove ball bearing (floating) | Screw compressor, mining conveyor belt |
| DC motor with belt-pulley coupled load | Reinforced deep groove ball bearing (series 63) | Standard deep groove ball bearing | Machine tool (lathe, milling machine) |
| Vertical thrust motor (deep well pumps) | Single row angular contact or angular contact pair | Deep groove ball or cylindrical roller bearing (free) | Vertical turbine pump, tank agitator |
| High-dynamics brushless servomotor | Precision deep groove ball bearing (P4 or P5) with polyamide cage | Precision deep groove ball bearing with preload spring | CNC machine, industrial robot, positioner |

## Selection and Sizing
The selection of the bearing size starts from the calculation of the rated life L10 according to ISO 281, which relates the applied equivalent dynamic load to the basic dynamic load rating of the bearing, and is adjusted by reliability and operating condition factors.

The basic life formula for ball bearings (exponent p = 3) and roller bearings (exponent p = 10/3) is:

> **L10 = (C / P)^p · 10^6 revolutions**

> **L10h = (C / P)^p · (10^6 / (60 · n)) hours**

Where:
| Variable | Description | Unit |
|---|---|---|
| L10 | Rated life in revolutions (millions of revolutions if 10^6 is omitted) | rev |
| L10h | Rated life in operating hours | h |
| C | Basic dynamic load rating of the bearing | N or kN / lbf |
| P | Equivalent dynamic load on the bearing | N or kN / lbf |
| p | Life exponent: 3 for balls, 10/3 for rollers | dimensionless |
| n | Shaft rotational speed | rpm |

The equivalent dynamic load P combines the radial (Fr) and axial (Fa) components:
> **P = X · Fr + Y · Fa**

The factors X and Y depend on the bearing type and the Fa/Fr ratio.

| Calculation factor | Symbol | Deep groove ball (series 62) | Cylindrical roller | Angular contact 40° |
|---|---|---|---|---|
| Radial factor | X | 0.56 (if Fa/Fr ≤ e) | 1 | 0.35 |
| Axial factor | Y | 1.0 – 2.3 (according to Fa/Fr) | N/A (axial none) | 0.57 |
| Limit ratio factor | e | 0.22 – 0.37 | - | 1.14 |
| Basic static load rating (C0) | - | Specified in manufacturer catalog | Specified in catalog | Specified in catalog |
| Static safety factor | s0 | ≥2 for motors with smooth load; ≥3 for impact loads | ≥3 | ≥2.5 |

## Maintenance and Service Life
The main failure mode in electric motor bearings is surface fatigue, accelerated by inadequate lubrication, contamination, or corrosion due to current passage (electrical erosion in motors fed by variable frequency drives). Proper lubrication and control of operating temperature are decisive in achieving design life.

| Maintenance practice | Bearing type | Relubrication interval | Expected L10h life under nominal conditions |
|---|---|---|---|
| Lithium grease NLGI 2 or 3, regreasing via grease fitting | Open deep groove ball (with Z shield) | Every 2000-4000 operating hours (2-6 months in continuous service) | 20 000 – 40 000 h |
| Polyurea grease for high temperature, 2RS seal (no regreasing) | Lifetime sealed deep groove ball | Not required; factory sealed | 15 000 – 25 000 h at 90 °C / 194 °F |
| Mineral oil ISO VG 68-100 by bath or circulation in sump | Cylindrical roller in large motors | Oil change every 8000-10 000 h or according to analysis | 40 000 – 80 000 h |
| Spectral vibration monitoring (band 500 Hz – 10 kHz) | All types | Quarterly or continuous with online monitoring | Detects incipient failures 2-6 months before catastrophic failure |
| Complete replacement due to fatigue or increased radial clearance (> 2-3 times initial clearance) | All types | Replace bearing when L10h reached or vibration exceeds ISO 10816-3 zone C | End of life: from 20 000 to 100 000 h depending on sizing |

## Standards and Equivalencies
Bearing designations for electric motors follow an internationally standardized system. Major manufacturers (SKF, FAG, NSK, NTN) share the same basic series code, allowing dimensional interchangeability between brands.

| Standard | Code | Description / typical designation |
|---|---|---|
| ISO 15 | Dimensional series | Defines outside diameter, bore diameter, and width for each series (e.g., 6208, NU310) |
| ISO 281 | Life calculation | Rated life L10, equivalent dynamic load method |
| DIN 625-1 | Deep groove ball bearings | Specifies dimensions and tolerances for series 62, 63, etc. |
| DIN 5412-1 | Cylindrical roller bearings | Series NU, NJ, NUP and associated dimensions |
| ANSI/ABMA Std 9 | Load ratings and fatigue life | Metric and inch; functionally equivalent to ISO 281 in the American scope |
| Commercial designation type | 6208-2RSH/C3 | Series 62, bore diameter 40 mm / 1.5748 in, synthetic rubber seals (2RS), internal clearance C3 (greater than normal) |

## Frequently Asked Questions (FAQ)
### What is the typical service life of a bearing in an industrial electric motor?
    The design rated life L10 for a standard industrial motor bearing is between 20,000 and 40,000 operating hours under rated load, and can exceed 60,000 hours in large motors with oversized cylindrical roller bearings.

### What type of bearing is recommended for vertical motors with high axial thrust?
    For vertical motors supporting axial thrusts greater than 5000 N / 1124 lbf, single row angular contact bearings or pairs mounted in tandem are recommended, capable of supporting axial loads equivalent to 50-100 % of their dynamic radial capacity depending on the contact angle (15°, 25°, or 40°).

### How does internal clearance C3 affect motor operation?
    Clearance C3 (radial clearance greater than normal CN) is selected when the motor shaft operates at temperatures above 80 °C / 176 °F or when there is strong interference in the inner ring fit, preventing bearing seizure due to thermal expansion; typical radial clearance for a 6208 C3 is between 23 µm / 906 µin and 43 µm / 1693 µin.

### What type of grease is most suitable for electric motor bearings?
    Lithium greases with polyurea thickener and consistency NLGI 2 or 3 offer the best thermal and mechanical stability, supporting continuous operating temperatures up to 150 °C / 302 °F with relubrication intervals that can double those of conventional lithium greases (reaching 5000-8000 hours under favorable conditions).

### Why do motors with variable frequency drives suffer more bearing failures?
    Motors fed by variable frequency drives generate common-mode voltages that can produce electrical discharges through the bearing (electrical erosion), with current densities greater than 1 A/mm² causing microcraters on raceways and rolling elements, reducing bearing life by 30-80 % if electrically insulated bearings are not used.

### When should a bearing be replaced in an electric motor?
    A bearing should be replaced when the measured radial clearance exceeds at least 2-3 times the factory clearance, when the overall vibration level exceeds 7.1 mm/s RMS (ISO 10816-3 zone C), or when spectral analysis shows advanced defects at failure frequencies BPFO, BPFI, or BSF with clearly defined harmonics and sidebands.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/

