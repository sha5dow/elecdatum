---
title: "Transformer secondary conductors"
sidebar:
  label: "Transformer secondary conductors"
description: "Technical reference: Transformer secondary conductors"
keywords: ["transformer secondary conductor sizing protection", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "transformer-secondary-conductors"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Transformer secondary conductors are the electrical conductors that connect the secondary winding of a transformer to the main overcurrent protection device on the secondary side. Their sizing and protection follow specific rules established in Article 240.4(F) of the National Electrical Code (NEC), which allows these conductors to be protected differently from their rated ampacity under certain installation conditions.

The main function of these conductors is to carry the current from the transformer secondary to the first disconnecting means or protection device, maintaining system integrity under normal operating conditions and possible faults. Proper selection of these conductors is critical, as insufficient protection can result in overheating, insulation deterioration, and fire risk.

## Secondary Conductor Sizing

The sizing of transformer secondary conductors is based on the rated secondary current plus a continuous overload factor of 125%. The rated secondary current is calculated by dividing the apparent power of the transformer by the product of the secondary line voltage and the square root of three for three-phase systems, or simply by the secondary voltage for single-phase systems.

> **I_sec = VA / (√3 × V_LL)** for three-phase systems

| Variable | Description | Unit |
|----------|-------------|------|
| I_sec | Rated secondary current | A |
| VA | Apparent power of the transformer | VA |
| V_LL | Secondary line voltage | V |

| Transformer Power (kVA) | Secondary Voltage (V) | Secondary Current (A) | Design Current at 125% (A) |
|--------------------------|-----------------------|-----------------------|----------------------------|
| 15 kVA | 208 / 120 V three-phase | 41,6 A | 52,0 A |
| 30 kVA | 208 / 120 V three-phase | 83,3 A | 104,1 A |
| 45 kVA | 208 / 120 V three-phase | 124,9 A | 156,1 A |
| 75 kVA | 480 / 277 V three-phase | 90,2 A | 112,8 A |
| 112,5 kVA | 480 / 277 V three-phase | 135,3 A | 169,1 A |

| AWG / kcmil Size | Equivalent Metric Cross-Section (mm²) | Ampacity at 75 °C (Copper) | Ampacity at 75 °C (Aluminum) |
|-------------------|---------------------------------------|----------------------------|------------------------------|
| 14 AWG | 2,08 mm² / 0.003 in² | 20 A | Not applicable |
| 12 AWG | 3,31 mm² / 0.005 in² | 25 A | Not applicable |
| 10 AWG | 5,26 mm² / 0.008 in² | 35 A | Not applicable |
| 8 AWG | 8,37 mm² / 0.013 in² | 50 A | 40 A |
| 6 AWG | 13,3 mm² / 0.021 in² | 65 A | 50 A |
| 4 AWG | 21,2 mm² / 0.033 in² | 85 A | 65 A |
| 3 AWG | 26,7 mm² / 0.041 in² | 100 A | 75 A |
| 2 AWG | 33,6 mm² / 0.052 in² | 115 A | 90 A |
| 1 AWG | 42,4 mm² / 0.066 in² | 130 A | 100 A |
| 1/0 AWG | 53,5 mm² / 0.083 in² | 150 A | 120 A |
| 2/0 AWG | 67,4 mm² / 0.105 in² | 175 A | 135 A |
| 3/0 AWG | 85,0 mm² / 0.132 in² | 200 A | 155 A |
| 4/0 AWG | 107,2 mm² / 0.166 in² | 230 A | 180 A |
| 250 kcmil | 126,7 mm² / 0.196 in² | 255 A | 205 A |
| 300 kcmil | 152,0 mm² / 0.236 in² | 285 A | 230 A |
| 350 kcmil | 177,3 mm² / 0.275 in² | 310 A | 250 A |
| 400 kcmil | 202,7 mm² / 0.314 in² | 335 A | 270 A |
| 500 kcmil | 253,4 mm² / 0.393 in² | 380 A | 310 A |

## Secondary Conductor Protection

The protection of transformer secondary conductors is governed by Section 240.4(F) of the NEC, which states that the conductors on the secondary side of a transformer can be protected by the primary side overcurrent device, provided that the device is correctly sized according to the turns ratio. This provision constitutes an exception to the general rule of conductor protection.

To correctly apply this exception, the primary protection device must not exceed the value determined by the turns ratio multiplied by the ampacity of the secondary conductor. In typical installations, the primary breaker or fuse indirectly protects the secondary conductors when the short-circuit or overload current is reflected through the transformer.

| Turns Ratio (Vp:Vs) | Maximum Primary Protection for 100 A Secondary Conductor | Maximum Primary Protection for 200 A Secondary Conductor |
|---------------------|----------------------------------------------------------|----------------------------------------------------------|
| 480 V : 208 V (2,31:1) | 43,3 A | 86,6 A |
| 480 V : 240 V (2:1) | 50,0 A | 100,0 A |
| 600 V : 208 V (2,88:1) | 34,7 A | 69,4 A |
| 4160 V : 480 V (8,67:1) | 11,5 A | 23,1 A |

| Type of Secondary Protection | Minimum Interrupting Capacity (kA) | Recommended Application |
|------------------------------|------------------------------------|------------------------|
| Thermomagnetic circuit breaker | 10 kA / 10.000 A | Transformers ≤ 45 kVA |
| Molded case circuit breaker | 22 kA / 22.000 A | Transformers 45-112,5 kVA |
| Class J current-limiting fuses | 200 kA / 200.000 A | All sizes, high capacity |
| Power circuit breaker | 35 kA / 35.000 A | Transformers ≥ 500 kVA |

## Installation Considerations

Transformer secondary conductors must be installed complying with specific maximum distances from the transformer to the protection device. The maximum permitted length for these conductors without individual secondary protection is 3,0 m / 10 ft for industrial installations and 7,5 m / 25 ft for commercial installations, provided additional raceway and accessibility conditions are met.

Additionally, the operating temperature of the transformer terminals and the protection device dictates the applicable ampacity column according to the conductor table. For equipment with a rated capacity of 100 A or less, the 60 °C column is used, while for equipment over 100 A, the 75 °C column applies, in accordance with Section 110.14(C) of the NEC.

## Frequently Asked Questions (FAQ)

### What is the difference between a transformer secondary conductor and a service conductor?

Transformer secondary conductors carry current from the user-owned transformer secondary winding to the first overcurrent protection device, while service conductors connect the utility delivery point to the building service equipment. Protection of secondary conductors follows specific rules under 240.4(F) of the NEC, allowing indirect protection from the primary, while service conductors are protected under 230.90. Secondary conductors typically handle currents between 20 A and 5000 A depending on transformer size.

### What is the maximum permitted length for a transformer secondary conductor without dedicated protection?

The maximum permitted length for secondary conductors without individual protection is 3,0 m / 10 ft in industrial installations with qualified maintenance practices and engineering supervision, and 7,5 m / 25 ft in commercial installations or other locations. For lengths exceeding 7,5 m / 25 ft, a dedicated overcurrent protection device is required on the secondary side located immediately after the transformer. These distances are measured from the transformer secondary terminals to the connection point of the protection device.

### How do the 10% and 25% rules affect secondary conductor protection?

The 10% rule applies when the primary protection device rating does not exceed 10% of the rated capacity of the secondary conductor adjusted by the turns ratio, allowing full indirect protection without a secondary device. The 25% rule applies when the primary device does not exceed 25% of that capacity, requiring additional protection on the secondary side but with greater location flexibility. For example, a 45 kVA transformer with a 208 V three-phase secondary requires copper conductors of at least 21,2 mm² / 4 AWG with a capacity of 85 A at 75 °C to meet both rules.

### What happens if a transformer secondary conductor experiences a bolted short circuit?

In the event of a bolted short circuit on the secondary conductors, the fault current is reflected to the transformer primary multiplied by the inverse turns ratio. A 10.000 A short circuit on the secondary of a 480 V to 208 V transformer is reflected as approximately 4330 A on the primary, a value that must be interrupted by the primary protection device. The magnitude of the available short-circuit current on the secondary depends on the transformer impedance, typically between 2% and 6% for distribution transformers, producing fault currents up to 25 times the rated secondary current.

### How is the protection of the secondary conductor coordinated with the main panel breaker?

Coordination between the transformer secondary conductor and the main panel breaker requires that the secondary breaker be sized at 125% of the continuous current plus 100% of the non-continuous load. A 250 A main panel breaker will adequately protect a 152,0 mm² / 300 kcmil copper secondary conductor with an ampacity of 285 A at 75 °C, maintaining selectivity with the transformer primary device. The trip curve of the secondary breaker must be coordinated with the primary device curve to ensure only the device closest to the fault operates.

### What special considerations apply for secondary conductors in parallel per phase?

Secondary conductors in parallel per phase must be identical in material, size, length, and insulation type, with a combined ampacity not less than 125% of the rated secondary current. For a 500 kVA transformer with a 480 V three-phase secondary delivering 601 A, two 152,0 mm² / 300 kcmil copper conductors in parallel per phase are required, each with an ampacity of 285 A at 75 °C, providing a combined capacity of 570 A that meets the design current of 751 A at 125%. All terminations and connections of parallel conductors must be made at both ends with connectors rated for the number of conductors and the specified size.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **mikeholt.com**: https://www.mikeholt.com/nec-conductor-sizing-and-protection.php
- **electrical4u.com**: https://www.electrical4u.com/transformer-protection-and-transformer-fault/
