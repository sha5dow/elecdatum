---
title: "Capacitor bank sizing"
sidebar:
  label: "Capacitor bank sizing"
description: "Technical reference: Capacitor bank sizing"
keywords: ["capacitor bank sizing power factor correction", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "capacitor-banks"
subcategory: "capacitor-bank-sizing"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Capacitor bank sizing determines the reactive power required to raise the power factor of an installation from typical values of 0,7 to 0,8 up to the economic range of 0,90 to 0,95, reducing the inductive component of the load without modifying the active power.

## Importance
A power factor of 0,7 in a system of 200 A at 400 V (80 kVA / 60 kW) delivers only 56 kW of real power, forcing oversizing of transformers, cables, and protections, while correction to 0,95 frees up distribution capacity and avoids tariff penalties.

## Operating Principle
The capacitor bank connected in parallel with the inductive load supplies capacitive reactive power that opposes the inductive reactive power, compensating the phase shift between voltage and current. The current phasor of the capacitor (Ic) leads the voltage by 90°, reducing the total reactive current demanded from the grid and decreasing the phase angle φ.

| Component        | Effect                                                                 |
|------------------|------------------------------------------------------------------------|
| Inductive load   | Absorbs reactive power, current lagging with respect to voltage        |
| Capacitor bank   | Generates reactive power, current leading with respect to voltage      |

## Key Components
A three-phase industrial capacitor bank typically consists of:

| Component               | Function                                                                 |
|-------------------------|--------------------------------------------------------------------------|
| Unit capacitors         | Provide the capacitive reactive power (kVAR)                             |
| Contactors              | Switch the capacitor steps                                               |
| Fuses or circuit breakers | Protect against short circuits and overloads                            |
| Discharge resistors     | Reduce residual voltage to less than 50 V / 50 V within 1 minute after disconnection |
| Power factor regulator  | Automatically controls the connection of steps based on the measured cos φ |
| Harmonic filters (optional) | Prevent resonance phenomena in networks with harmonic distortion      |

## Design Parameters
The main design values for sizing are:

| Parameter                          | Typical value / Range          |
|------------------------------------|--------------------------------|
| System nominal voltage             | 400 V / 480 V, 6,6 kV, etc.    |
| Frequency                          | 50 Hz / 60 Hz                  |
| Existing power factor (cos φ1)     | 0,5 to 0,85                    |
| Target power factor (cos φ2)       | 0,92 to 0,95                   |
| Active power of the load (kW)      | 1 – 10 000 kW / 1,34 – 13 400 hp |
| Required reactive power (kVAR)     | Depends on the difference of tangents |

## Sizing Formula
The required reactive power of the capacitor bank (Qc, in kVAR) is calculated from the demanded active power (P, in kW) and the phase angles before and after compensation:

> **Qc = P × (tan φ1 − tan φ2)**

where:

| Variable | Meaning                                          |
|----------|--------------------------------------------------|
| P        | Active power of the load (kW / hp, 1 hp = 0,746 kW) |
| cos φ1   | Initial power factor                             |
| cos φ2   | Desired final power factor                       |
| tan φ1   | Tangent of the angle corresponding to cos φ1     |
| tan φ2   | Tangent of the angle corresponding to cos φ2     |

Alternatively it can be expressed as:

> **Qc = P × f**

where f is the correction factor tabulated depending on (cos φ1) and (cos φ2).

## Correction Factor Table
A multiplier factor (f) is used to directly determine Qc = P × f. The following table shows some typical values; the complete data ranges from cos φ = 0,50 to 0,90 and for targets from 0,90 to 1,00.

| cos φ1 | f (target cos φ2 = 0,95) | f (target cos φ2 = 0,97) | f (target cos φ2 = 1,00) |
|--------|--------------------------|--------------------------|--------------------------|
| 0,60   | 1,01                     | 1,08                     | 1,33                     |
| 0,65   | 0,80                     | 0,88                     | 1,17                     |
| 0,70   | 0,62                     | 0,70                     | 1,02                     |
| 0,75   | 0,46                     | 0,54                     | 0,88                     |
| 0,80   | 0,31                     | 0,39                     | 0,75                     |
| 0,85   | 0,17                     | 0,25                     | 0,62                     |

## Calculation Example
An industrial plant with three-phase motors consumes 500 kW with an initial power factor of 0,70 and a target of 0,95 is desired.

- P = 500 kW
- cos φ1 = 0,70 → tan φ1 = 1,020
- cos φ2 = 0,95 → tan φ2 = 0,329
- Qc = 500 × (1,020 − 0,329) = 500 × 0,691 = 345,5 kVAR

A capacitor bank of 350 kVAR in automatic steps is selected, connected to the main low-voltage busbar (400 V / 480 V). The bank current is reduced from 722 A (without compensation) to 532 A (with compensation) for the same active power, decreasing conductor losses by approximately 46 %.

## Good Practices
- Locate the capacitor bank as close as possible to the inductive loads to reduce wiring losses.
- Use automatic power factor regulators when the load varies more than 30 % throughout the day.
- Carry out a harmonic study if the total voltage distortion (THDv) exceeds 3 % or 5 % according to local standards, to avoid resonances with the bank.
- Oversize the contactors and fuses to withstand inrush currents of up to 30 times the rated current for less than 10 ms.
- Maintain a target power factor no higher than 0,95 to avoid permanent overvoltages and resonance risk.

## Common Mistakes
- Compensating to unity (cos φ = 1,00), which can cause excessive overvoltages at motor terminals (up to 10 % of nominal voltage) and penalties for injecting reactive power into the grid.
- Not considering the steady-state discharge current of the capacitor, which can damage sensitive equipment if proper discharge resistors are not installed.
- Installing fixed banks in installations with highly variable load, causing cyclic under-compensation and over-compensation.
- Omitting the influence of harmonics: the presence of 5th or 7th harmonics can reduce the equivalent impedance and generate overload currents in the capacitors.
- Calculating the bank using only the total installed power (kVA) without subtracting the actual load, oversizing the equipment and increasing cost unnecessarily.

## Frequently Asked Questions (FAQ)
### What is the typical power factor of a three-phase 20 hp motor at full load?
The power factor of a 15–20 kW (20 hp) motor at full load and 1800 rpm is approximately 0,86, while at half load it drops to 0,74 and at no load it reaches only 0,15 to 0,20.

### What capacitor capacity is required to correct a 1000 A load with power factor from 0,70 to 0,95?
For a three-phase load of 1000 A at 400 V (approximately 692 kVA and 484 kW of active power with cos φ = 0,70), 484 × 0,69 ≈ 334 kVAR are required. This implies installing a capacitor bank of about 350 kVAR, reducing the total current drawn from the grid by 26 %.

### What power factor limit do electric utilities typically penalize?
Generally, penalties are applied when the power factor is below 0,90 or 0,95, depending on the country, and the monthly average is measured; some tariffs include additional charges starting from 0,85.

### Up to what reactive power value should compensation be applied to avoid instability?
It is not recommended to exceed an inductive power factor of 0,95, because unity or capacitive values can cause permanent overvoltages of up to 10 % and excite resonances with system harmonics.

### How does power factor correction affect conductor cross-section?
Improving the power factor from 0,50 to 1,00 reduces the required conductor cross-section by a factor of 4 (table: at PF=0,50, 4 times the cross-section is required compared to PF=1,00). With a correction to 0,95, the required cross-section is only 5 % greater than the theoretical for unity PF.

### What percentage of transformer capacity is freed when correcting from 0,70 to 0,95?
A 1000 kVA transformer feeding a load with PF=0,70 delivers only 700 kW of active power; when corrected to 0,95, the same machine can deliver 950 kW, freeing 25 % capacity (approximately 250 kW) without requiring investment in new equipment.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/power-factor-correction/

