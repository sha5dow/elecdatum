---
title: "Power factor calculation"
sidebar:
  label: "Power factor calculation"
description: "Technical reference: Power factor calculation"
keywords: ["power factor calculation formula cos phi", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "power-factor"
subcategory: "power-factor-calculation"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The power factor (PF) is a dimensionless quantity that takes values between 0 and 1 and represents the ratio of active power (P) to apparent power (S). For example, a PF of 0.7 indicates that only 70% of the supplied energy is converted into useful work. Its calculation is fundamental in alternating current systems to evaluate energy efficiency and correctly size the installation components.

## General Formula

The power factor is expressed as the quotient of active power and apparent power, equal to the cosine of the phase angle between voltage and current.

> **PF = P / S = cos φ**

| Symbol | Name | Unit | Definition |
| --- | --- | --- | --- |
| PF | Power factor | dimensionless | Ratio of active power to apparent power |
| P | Active power (real) | W (watts) | Power that performs useful work |
| S | Apparent power | VA (volt-amperes) | Product of RMS voltage and current |
| φ | Phase angle | ° (degrees) or rad | Phase shift between voltage and current waveforms |

## Power Triangle

The relationship between the three powers is represented by a right triangle where the hypotenuse is apparent power (S), the adjacent leg is active power (P), and the opposite leg is reactive power (Q). The angle φ can vary between 0° and 90°, and its cosine is the power factor.

> **S² = P² + Q²**

| Quantity | Symbol | Unit |
| --- | --- | --- |
| Active power | P | W |
| Reactive power | Q | VAR (volt-amperes reactive) |
| Apparent power | S | VA |

## Power Factor in Linear Loads

In a purely resistive load the power factor is 1 and the current is in phase with the voltage. In a purely inductive load (motor, transformer) the power factor is 0 and the current lags the voltage by 90°; in a purely capacitive load, the current leads by 90° and the power factor is also 0. In practice, loads combine resistance and inductance, resulting in intermediate power factors, usually inductive (lagging).

## Power Factor in Three-Phase Motors

For a three-phase motor of 10 hp (7.46 kW) at full load, the typical power factor is 0.86. The expression used to calculate it from line quantities is:

> **PF = P / (√3 · U · I)**

where U is the line voltage (V) and I is the line current (A).

| Power (hp / kW) | Speed (rpm) | No load | 1/4 load | 1/2 load | 3/4 load | Full load |
| --- | --- | --- | --- | --- | --- | --- |
| 0 – 5 / 0 – 3.7 | 1800 | 0.15 – 0.20 | 0.5 – 0.6 | 0.72 | 0.82 | 0.84 |
| 5 – 20 / 3.7 – 14.9 | 1800 | 0.15 – 0.20 | 0.5 – 0.6 | 0.74 | 0.84 | 0.86 |
| 20 – 100 / 14.9 – 74.6 | 1800 | 0.15 – 0.20 | 0.5 – 0.6 | 0.79 | 0.86 | 0.89 |
| 100 – 300 / 74.6 – 223.7 | 1800 | 0.15 – 0.20 | 0.5 – 0.6 | 0.81 | 0.88 | 0.91 |

*1 hp = 0.7457 kW*

## Effects of a Low Power Factor

A power factor below 0.95 usually incurs penalties on the electricity bill and forces conductors to be sized with a cross-section up to 11% larger for a PF of 0.3. The most relevant consequences are:

- Increase in line current for the same active power.
- Higher Joule effect losses in cables and transformers.
- More pronounced voltage drops, which deteriorate regulation.
- Reduction of the system’s load capacity.
- Possible surcharges by the electric utility.

| Industry | Typical uncorrected power factor |
| --- | --- |
| Offices | 0.80 – 0.90 |
| Manufacturing (machinery) | 0.60 – 0.65 |
| Metallurgy | 0.65 – 0.70 |
| Chemical | 0.65 – 0.75 |
| Cement | 0.75 – 0.80 |
| Textile | 0.35 – 0.60 |
| Oil pumping | 0.40 – 0.60 |
| Coal mines | 0.65 – 0.80 |

## Power Factor Correction Methods

Installing a 50 kVAR capacitor bank can raise the power factor from 0.7 to 0.95 in a typical industrial plant. The main techniques are:

- **Shunt capacitor banks**: connected in parallel to the load, they supply the necessary reactive power and reduce the reactive demand from the grid.
- **Synchronous condensers**: overexcited synchronous motors that act as reactive power generators.
- **Static VAR compensators (SVC)**: fast-response electronic systems for fluctuating loads.

## Correction Factors with Capacitors

The following table summarizes the multiplication factors to determine the required compensation reactive power (in kVAR) per kW of active load. For example, to raise the power factor from 0.70 to 0.95, a factor of 0.69 kVAR/kW is required.

| Initial PF | Target PF 0.90 | Target PF 0.92 | Target PF 0.94 | Target PF 0.95 | Target PF 0.98 |
| --- | --- | --- | --- | --- | --- |
| 0.50 | 1.25 | 1.30 | 1.37 | 1.40 | 1.53 |
| 0.55 | 1.04 | 1.09 | 1.12 | 1.19 | 1.32 |
| 0.60 | 0.85 | 0.91 | 0.94 | 1.01 | 1.13 |
| 0.65 | 0.71 | 0.77 | 0.80 | 0.87 | 0.97 |
| 0.70 | 0.54 | 0.60 | 0.63 | 0.69 | 0.81 |
| 0.75 | 0.40 | 0.46 | 0.49 | 0.55 | 0.66 |
| 0.80 | 0.27 | 0.32 | 0.36 | 0.42 | 0.52 |
| 0.85 | 0.14 | 0.19 | 0.23 | 0.29 | 0.39 |

## Benefits of Power Factor Correction

Through power factor correction, line losses can be reduced by up to 20% and system load capacity increased by 10%. Specific benefits include:

- Elimination of penalties on the electricity bill.
- Reduction of line current and therefore of heat losses.
- Improvement of voltage levels at equipment terminals.
- Increase in the transport capacity of the existing installation.
- Possibility of adding new loads without needing to reinforce transformers or cables.

## Frequently Asked Questions (FAQ)

### What is power factor?
It is the ratio of active power (W) to apparent power (VA) in an alternating current circuit, expressed as a dimensionless number between 0 and 1, or as the cosine of the phase angle φ.

### How is power factor calculated in a single-phase circuit?
Divide the active power measured with a wattmeter by the product of RMS voltage and RMS current (PF = P / (V·I)), which equals the cosine of the phase angle if the waveforms are sinusoidal.

### Why is it important to maintain a power factor close to 1?
Because a low power factor increases the current required to transmit the same useful power, raises losses, reduces system capacity, and may cause economic surcharges from the utility company.

### What is the difference between leading and lagging power factor?
A lagging power factor occurs in inductive loads (motors, transformers) where current lags voltage. A leading power factor appears in capacitive loads (capacitor banks), with current leading voltage.

### How is a low power factor corrected in an industrial installation?
Capacitor banks are installed in parallel with the inductive loads, calculated to supply the necessary reactive power and bring the power factor to the desired value, typically 0.95.

### What is the minimum power factor value required by electric companies?
Generally, penalties apply when the power factor is below 0.95 (or 0.90 depending on local regulations), so it is recommended to maintain it at or above that threshold.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-11/calculating-power-factor/
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
