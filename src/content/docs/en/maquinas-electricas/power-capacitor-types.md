---
title: "Power capacitor types"
sidebar:
  label: "Power capacitor types"
description: "Technical reference: Power capacitor types"
keywords: ["power capacitor types specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "capacitor-banks"
subcategory: "capacitor-types-power"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Standard power capacitor units for power factor correction in medium-voltage networks are manufactured in single-phase and three-phase configurations, with standardized reactive power ratings ranging from **50 kVAR** to **400 kVAR** (in steps of 50, 100, 150, 200, 300 and 400 kVAR). These capacitors must withstand severe service conditions: continuous operation at **110% of the rated peak voltage** and **120% of the rated RMS voltage**, as well as overloads of **135% of the reactive power (kVAR)** and **180% of the rated RMS current**. The maximum allowable ambient temperature for continuous service is typically set at **55 °C / 131 °F** (class D per IEC 60871), with a lower range of **−40 °C / −40 °F** in cold climates. Three main construction variants are distinguished: single-phase double-bushing unit (dead tank), single-phase single-bushing unit (enclosure as terminal), and three-phase three-bushing unit. All incorporate internal discharge devices that reduce the residual voltage to **50 V** or less within a specified time.

## Comparative Characteristics Table

| Unit Type | Bushing Configuration | Typical Rated Voltage Range | Typical Reactive Power per Unit | Typical Basic Insulation Level (BIL) | Grounding | Cooling |
|---|---|---|---|---|---|---|
| Single-phase double bushing | 2 insulated bushings | 1 kV – 36 kV | 50 kVAR – 400 kVAR | 95 kV (for 15 kV) / 125 kV (for 25 kV) | Dead tank (no ground connection) | Natural (air) |
| Single-phase single bushing | 1 bushing, metal enclosure as second terminal | 1 kV – 25 kV | 25 kVAR – 200 kVAR | 75 kV – 125 kV | One terminal grounded (live tank) | Natural (air) |
| Three-phase three bushings | 3 bushings (no neutral) | 1 kV – 24 kV | 100 kVAR – 600 kVAR (complete bank) | 95 kV – 150 kV | Isolated or system-grounded | Natural (air) or forced |

## Typical Applications and Key Features

Single-phase double-bushing capacitors, designed to operate up to **110% of the peak voltage** and **120% of the rated RMS voltage**, are used in power factor correction banks where complete tank isolation is required (dead tank configuration). This variant is the most common in medium-voltage installations (e.g., **2.4 kV to 34.5 kV**) for fixed and automatic compensation. Single-bushing capacitors reduce cost by using the enclosure as the ground terminal, ideal for systems with solidly grounded neutral and unit ratings up to **200 kVAR**. Compact three-phase units, which can handle banks up to **600 kVAR**, simplify mounting in industrial applications with limited space.

In all types, the internal discharge device ensures that the residual voltage drops below **50 V** in less than **5 minutes** (typically **3 minutes**). The ability to withstand transient overcurrents is verified by short-circuit tests, with the requirement to withstand peaks of **100 times the rated current** for **1 second**. Insulation levels (BIL) range from **60 kV** (for 5 kV systems) to **200 kV** (for 36 kV systems); these values must be selected according to the rated voltage and the insulation coordination of the network.

## Selection and Sizing Considerations

Selecting a power capacitor requires verifying that the unit withstands at least **135% of the rated reactive power** and **180% of the rated RMS current** without premature degradation. The actual reactive power delivered to the system depends on the actual operating voltage according to the expression:

> **Q<sub>actual</sub> = (V<sub>operating</sub> / V<sub>rated</sub>)² × Q<sub>rated</sub>**

| Variable | Description | Unit |
|---|---|---|
| Q<sub>actual</sub> | Reactive power delivered at operating voltage | kVAR |
| V<sub>operating</sub> | Service RMS voltage | kV |
| V<sub>rated</sub> | Rated voltage of capacitor | kV |
| Q<sub>rated</sub> | Rated reactive power of capacitor | kVAR |

Therefore, in networks with voltage fluctuations, it is recommended to specify the rated voltage of the capacitor **10% to 15%** above the system nominal voltage, ensuring that the required reactive power remains within the tolerance margin. Additionally, ambient temperature directly affects service life: for every **10 °C / 18 °F** increase above the maximum design temperature (e.g., **55 °C / 131 °F**), the life expectancy is reduced by approximately half. At altitudes above **1000 m / 3281 ft**, the heat dissipation capability decreases and a correction factor must be applied. Another critical parameter is the dielectric strength of the insulating material: modern capacitors use polypropylene dielectrics with a breakdown voltage on the order of **47 kV/mm / 1200 V/mil**, allowing compact and reliable units even under temporary overvoltage conditions.

## Frequently Asked Questions (FAQ)

### What is the maximum allowable overvoltage for a power capacitor?
Power capacitors are designed for continuous operation at **110% of the rated peak voltage** (1.1 × √2 × V<sub>RMS</sub>) and up to **120% of the rated RMS voltage**, including harmonics but without exceeding the reactive power limit.

### What standard kVAR values are used in the industry?
The standardized reactive power ratings per unit are **50, 100, 150, 200, 300 and 400 kVAR**, although series/parallel combinations achieve banks of several MVAR.

### Up to what temperature can a capacitor bank operate without loss of performance?
The most common maximum design ambient temperature is **55 °C / 131 °F** (class D), with a daily average temperature of **45 °C / 113 °F**. The lower range can reach **−40 °C / −40 °F** in equipment prepared for cold outdoor environments.

### How long does it take for a power capacitor to discharge to a safe level after disconnection?
Thanks to the internal discharge device, the residual voltage is reduced to **50 V or less** within the time specified on the nameplate, typically **3 to 5 minutes**.

### What is the typical Basic Insulation Level (BIL) for a 15 kV system?
For a **15 kV** class system, the standard BIL is **95 kV** (1.2/50 µs lightning impulse), which may be increased to **110 kV** in heavily polluted environments or with special insulation coordination requirements.

### What transient overcurrent capability must the units withstand?
The standard requires that capacitors withstand short-circuit peaks of up to **100 times their rated current** for **1 second** (or equivalent **I²t** values) without permanent damage.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/capacitors-energy-power-d_1389.html
- **electrical4u.com**: https://www.electrical4u.com/specifications-or-rating-of-power-capacitor/

