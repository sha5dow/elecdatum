---
title: "Solar interconnection code requirements"
sidebar:
  label: "Solar interconnection code requirements"
description: "Technical reference: Solar interconnection code requirements"
keywords: ["solar PV interconnection code requirements NEC 690", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "solar-installation"
subcategory: "solar-interconnection-code"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Solar photovoltaic interconnection requirements are the set of technical specifications, procedures, and conditions established by national electrical codes and distribution utilities to connect a solar generator to the low or medium voltage grid. Their main objective is to safeguard people and property from the risks arising from the use of electricity, as required by the NEC in Section 90.1(A). Within the US regulatory framework, Article 690 of the National Electrical Code (NEC) and the IEEE 1547 standard constitute the mandatory reference framework, defining everything from module grounding to grid event response.

## Reference Standards
The standards governing interconnection are based on three fundamental documents for the electrical installation field:

| Standard | Description |
|---|---|
| NEC Article 690 (NFPA 70) | Electrical safety requirements for photovoltaic systems. Includes Part V — Grounding and Equipotential Bonding (Section 690.43). |
| IEEE 1547‑2018 | Interconnection standard for distributed energy resources with the grid. Defines voltage, frequency, and power quality parameters. |
| UL 1741 / UL 1741 SA | Safety standard for inverters, converters, and controllers of photovoltaic systems, required by electric utilities. |

## Classification of Interconnection Systems
Based on their relationship with the distribution grid, solar systems are grouped into three basic categories that determine interconnection requirements:

- **Grid‑tied system**. Operates in parallel with the electrical grid, without storage. The interactive inverter synchronizes with the grid and ceases injection in its absence (anti‑islanding).
- **Off‑grid system**. Not connected to the public utility grid. Includes a battery bank and charge controller; does not require an interconnection agreement but must comply with NEC Article 690.
- **Hybrid system**. Combines grid connection with local storage. Must simultaneously meet the requirements of grid‑tied systems and energy storage systems.

## Grid Connection Requirements
The design of the interconnection point must satisfy the following requirements of NEC Article 690 and IEEE 1547, among which voltage limits, conductor ampacity, and grounding stand out.

### Maximum System Voltage
The DC voltage of the PV generator cannot exceed the values indicated in the table, according to the building type and the presence of qualified personnel.

| Installation Type | Max DC Voltage |
|---|---|
| Single-family and two-family dwellings | 600 V |
| Commercial/industrial buildings with access to qualified personnel | 1000 V |
| Installations with exclusive access control (large plants) | 1500 V |

### Conductor Sizing
The ampacity of the PV system conductors must be at least 156% of the module short-circuit current (I<sub>sc</sub>). This requirement translates into the following expression, which incorporates accumulated safety factors:

> **I<sub>COND</sub> ≥ 1.25 × 1.25 × I<sub>sc STC</sub> = 1.56 × I<sub>sc STC</sub>**

Where:
- **I<sub>COND</sub>** – Conductor ampacity (A)
- **I<sub>sc STC</sub>** – Module short-circuit current under standard conditions (A)

### Equipment Grounding Conductor (EGC)
Grounding of PV systems follows the general rules of NEC 250.122. Section 690.43 of the NEC requires that all metal frames of modules, enclosures, and raceways containing PV system conductors be connected to the equipment grounding conductor. The following table shows the minimum copper conductor size based on the circuit overcurrent protection device.

| Overcurrent Device (A) | Minimum EGC Size (copper) | Equivalent Cross-sectional Area |
|---|---|---|
| 15 | 14 AWG | 2.08 mm² / 0.0032 in² |
| 20 | 12 AWG | 3.31 mm² / 0.0051 in² |
| 30 | 10 AWG | 5.26 mm² / 0.0082 in² |
| 60 | 8 AWG | 8.37 mm² / 0.0130 in² |
| 100 | 6 AWG | 13.3 mm² / 0.0206 in² |
| 200 | 4 AWG | 21.2 mm² / 0.0328 in² |

## Protection and Control Devices
To ensure safety and supply quality at the interconnection point, the NEC and IEEE 1547 require the implementation of the following protections:

- **Ground Fault Protection (GFP)** – Required by NEC 690.5 for arrays mounted on buildings, with a detector that automatically opens the circuit if leakage current exceeds **1 A**.
- **Arc Fault Protection (AFCI)** – NEC 690.11 requires protection against arc faults in DC circuits over **80 V**.
- **Rapid Shutdown** – NEC 690.12 requires limiting the voltage of conductors within the array to less than **80 V** in less than **30 s**, and to less than **30 V** in 30 s on control conductors, using switches external to the array.
- **Overcurrent Protection** – NEC 690.9 requires devices capable of withstanding **156%** of the array short-circuit current.
- **Surge Protection Device (SPD)** – Recommended to protect inverters and sensitive electronics, especially in areas with high lightning strike incidence.

*Note: Mounting equipment used to secure and connect module frames to metal support structures must be listed, labeled, and identified for equipotential bonding (NEC 690.43(A)). When metal support structures are used as grounding conductors, listed bonding jumpers must be installed between separated metal sections (NEC 690.43(B)).*

## Interconnection Procedure
Connecting a solar system to the grid follows a sequence regulated by the local electric utility and involves:

1. **Interconnection Application** – Submission of the single-line diagram and system characteristics (power, voltage, UL 1741 certified inverter model).
2. **Technical Review** – The utility verifies that grid capacity and system parameters are compatible. Upon approval, the interconnection permit is issued.
3. **Electrical Inspection** – The authority having jurisdiction verifies compliance with the NEC (grounding, protections, labeling, rapid shutdown).
4. **Commissioning Tests** – Verification of open-circuit voltage (V<sub>oc</sub>), short-circuit current (I<sub>sc</sub>), inverter synchronization, and anti‑islanding test. Once tests are passed, parallel operation is authorized.

## Tests and Verification
Before energizing the system and during its acceptance, the following checks are performed, as required by NEC 690 practice and utility criteria:

- **Insulation Resistance** – Measured with a 500 V DC meter. The minimum acceptable value is **1 MΩ** for the entire array, although > **20 MΩ** is recommended under dry conditions. Each active conductor to ground must exceed **40 MΩ** per module.
- **Grounding Conductor Continuity** – Resistance less than **0.1 Ω** between any module frame and the main grounding busbar.
- **Polarity** – Verification that all positive and negative conductors match the inverter markings.
- **Inverter Operation** – Startup sequence, grid synchronization, and verification of disconnection upon loss of grid (anti‑islanding) in less than **2 s**.
- **Ground Fault Protection** – Simulation of **300 mA** leakage to confirm circuit opening.

## Maintenance
Maintaining the system in safe interconnection conditions includes:

- Periodic cleaning of modules with demineralized water and a soft cloth to avoid losses exceeding **5%** of rated power.
- Quarterly visual inspection of connections, wiring, and junction boxes, paying special attention to signs of degradation on exposed conductors (cracking at **90 °C / 194 °F**).
- Retightening of power terminals at least once a year, using the torque values specified by the manufacturer.
- Continuous monitoring of production and comparison with design values, verifying that the difference does not exceed **10%** relative to the theoretical estimate.

## Frequently Asked Questions (FAQ)
### What is the maximum DC voltage allowed in residential systems under the NEC?
   The maximum DC voltage for single-family and two-family dwellings is limited to **600 V**. In non-residential buildings with qualified personnel it can reach **1000 V**, while installations with exclusive access control allow up to **1500 V**.

### What minimum size equipment grounding conductor is required for a system with a 60 A main breaker?
   For a **60 A** overcurrent device, NEC 250.122 requires a copper conductor of at least **8 AWG**, equivalent to **8.37 mm² / 0.0130 in²**.

### What is the maximum distance the DC disconnect switch must be located from the point of entry into the building?
   According to NEC 690.13, the DC disconnect means must not exceed a distance of **1.8 m / 6 ft** from the point where the array conductors penetrate the building.

### What is the minimum insulation resistance value in a newly installed photovoltaic system?
   Common commissioning practice requires that the value measured with **500 V DC** not be less than **1 MΩ** for the complete array. Ideally, each module should show more than **40 MΩ** under dry conditions.

### What maximum temperature does a USE‑2 photovoltaic conductor withstand in wet and dry environments?
   USE‑2 conductors are designed to operate up to **90 °C / 194 °F** in dry environments and **75 °C / 167 °F** in wet environments, making them suitable for outdoor use.

### What overcurrent factor must the conductors of a photovoltaic system withstand according to the NEC?
   The conductor must be sized for at least **1.56 times** the module short-circuit current I<sub>sc</sub> under STC conditions, i.e., **156%** of its rated capacity, to absorb high irradiance conditions and faults.

## References

- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20_SOLAR_690.43.pdf
- **electrical4u.com**: https://www.electrical4u.com/solar-cell/

