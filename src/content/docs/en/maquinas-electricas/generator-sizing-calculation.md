---
title: "Electrical generator sizing"
sidebar:
  label: "Electrical generator sizing"
description: "Technical reference: Electrical generator sizing"
keywords: ["generator sizing calculation kW kVA", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "generators"
subcategory: "generator-sizing"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Definition and basic principles

Sizing an electric generator consists of determining the rated power — expressed in kW (active power) and kVA (apparent power) — necessary to safely supply an installation or set of loads. A correctly sized generator avoids both oversizing, which leads to prolonged no-load or low-load operation, and undersizing, which causes voltage drops, overheating, and nuisance tripping.

The generator power is selected by evaluating the total connected load, the expected power factor, motor starting currents, harmonic content, and environmental conditions. Commercial diesel generator sets range from 8 kVA single-phase for residential use to over 2500 kVA three-phase in industrial applications.

## Fundamental formulas

The relationship between active, apparent, and reactive power defines the starting point for sizing:

> **S = P / FP**  
> **P = S × FP**  
> **Q = √(S² – P²)**

where:

| Symbol | Quantity | Unit |
| --- | --- | --- |
| S | Apparent power | kVA |
| P | Active power | kW |
| Q | Reactive power | kvar |
| FP | Power factor (0–1) | – |

For three-phase systems, the generator rated current is obtained by:

> **I = P / (√3 × V × FP)**  
> or  
> **I = S / (√3 × V)**

| Symbol | Quantity | Typical unit |
| --- | --- | --- |
| I | Line current | A |
| V | Line voltage | V (e.g., 400 V / 480 V) |

In applications with motors, the starting power is estimated by multiplying the motor rated power by a factor that depends on the starting method (direct-on-line, star-delta, variable speed drive). For direct-on-line starting a factor of 3 to 7 times the rated current is typically used.

## Sizing factors

### Power factor (FP)

The FP of the load defines how much apparent power the generator must supply. A low FP increases the required kVA size for the same active power. Generators are normally specified with a 0.8 inductive FP.

### Nonlinear loads and harmonics

Electronic equipment, variable frequency drives, and switched-mode power supplies generate harmonic currents that increase winding temperature and can distort voltage. It is recommended to oversize the alternator by 10% to 30% if the total harmonic distortion (THD) exceeds 15%.

### Motor starting currents

The generator must withstand the current peak during starting without the voltage dropping below the permissible limit (usually 70–80% of rated voltage). The magnitude of the peak depends on the motor type and starting method.

### Altitude and ambient temperature

The power of both the diesel engine and the alternator decreases with altitude and temperature. Typical derating factors:

| Condition | Typical reduction factor |
| --- | --- |
| Altitude > 1000 m / 3281 ft | –1% each additional 100 m / 328 ft |
| Temperature > 40 °C / 104 °F | –1% each additional 5 °C / 9 °F |

## Calculation procedure

1.  **Load inventory:** list all equipment, their active power (kW), power factor, and load type (linear, nonlinear, motor).
2.  **Calculation of maximum demand:** sum the active powers, applying a simultaneity factor (typically 0.7–0.9) and a utilization factor per equipment.
3.  **Determination of total apparent power:** divide the total active power by the estimated overall power factor.
4.  **Verification of starting peak:** identify the largest motor and verify that the generator can deliver the starting current with an acceptable voltage drop.
5.  **Application of environmental factors:** correct the required power according to altitude and temperature.
6.  **Safety margin:** add 10–20% reserve for future expansions and to ensure the generator does not operate permanently at 100% load.

## Practical sizing example

**Installation data:**  
Voltage: 400 V / 480 V three-phase  
Loads:

| Equipment | Active power | FP | Type |
| --- | --- | --- | --- |
| Motor 1 | 15 kW / 20 hp | 0.85 | Squirrel cage motor |
| Motor 2 | 7.5 kW / 10 hp | 0.82 | Squirrel cage motor |
| Lighting | 5 kW / 5 kW | 0.95 | Linear load |
| Electronic equipment | 8 kW / 8 kW | 0.70 | Nonlinear load (THD 20%) |

**Step 1:** Total active power = 15 + 7.5 + 5 + 8 = 35.5 kW / 47.6 hp.  
Applying simultaneity factor 0.85: P<sub>sim</sub> = 35.5 × 0.85 = 30.2 kW / 40.5 hp.

**Step 2:** Estimated overall power factor = (15×0.85 + 7.5×0.82 + 5×0.95 + 8×0.70) / 35.5 ≈ 0.81.  
Required apparent power = 30.2 / 0.81 = 37.3 kVA.

**Step 3:** Starting verification. Largest motor: 15 kW. Rated current at 400 V: I<sub>n</sub> = 15 000 / (√3 × 400 × 0.85) ≈ 25.5 A / 25.5 A. With direct-on-line starting (6 × I<sub>n</sub>) the peak is 153 A / 153 A. A 40 kVA generator has rated current ≈ 57.7 A / 57.7 A at 400 V and can deliver peaks of 200–300% for 10–15 s, so 153 A / 153 A is acceptable.

**Step 4:** Environmental correction. Altitude 1500 m / 4921 ft → reduction 5%. Temperature 45 °C / 113 °F → reduction 1%. Total factor 0.94. Corrected power = 37.3 / 0.94 ≈ 39.7 kVA.

**Result:** a three-phase generator of 40 kVA / 32 kW (FP 0.8) is selected, suitable for 400 V / 480 V, with the alternator oversized by 15% for harmonics, resulting in a generator set of approximately 45 kVA.

## Reference standards

| Standard | Summary title |
| --- | --- |
| ISO 8528-1 | Reciprocating internal combustion engine driven alternating current generating sets |
| IEC 60034-1 | Rotating electrical machines – Part 1: Rating and performance |
| NEMA MG 1 | Motors and generators |
| NFPA 110 | Standard for emergency and standby power systems |

## Frequently Asked Questions (FAQ)

### What is the difference between kW and kVA in an electric generator?

kW represents the active power that the generator can deliver continuously to the loads; kVA represents the total apparent power that includes the reactive component. A typical generator is specified with a power factor of 0.8, meaning a 100 kVA set delivers 80 kW.

### How does power factor influence generator size?

If the load power factor is low, the generator must supply more kVA for the same active power. For example, a 50 kW load with FP 0.7 requires 71.4 kVA, while with FP 0.9 it needs only 55.6 kVA, which may mean selecting a larger model.

### What safety margin is recommended when sizing a generator?

A margin of 10% to 20% over the calculated maximum power is recommended. For an installation demanding 80 kW / 107 hp, a 15% margin means selecting a generator of at least 92 kW / 123 hp, and in kVA, considering FP 0.8, 115 kVA.

### How do harmonics affect the generator alternator?

Harmonic currents cause additional heating in the windings and voltage distortion. With THD above 15%, the alternator is oversized by 10% to 30%. In an installation with 60 kVA of nonlinear load and 25% THD, an alternator of at least 72 kVA may be required.

### What power reduction is applied for altitude and temperature?

For every 100 m / 328 ft above 1000 m / 3281 ft altitude, approximately 1% of power is lost, and for every 5 °C / 9 °F above 40 °C / 104 °F, another 1% is lost. A 150 kW / 201 hp generator at 2000 m / 6562 ft and 50 °C / 122 °F may see its usable power reduced to about 126 kW / 169 hp.

### Which international standard covers generator set sizing?

ISO 8528-1 establishes service classifications (emergency, prime, continuous) and performance requirements. For emergency applications in buildings, NFPA 110 requires that the generator be able to supply the full load within a maximum of 10 seconds after a utility failure.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-calculator/
