---
title: "Capacitor bank resonance with harmonics"
sidebar:
  label: "Capacitor bank resonance with harmonics"
description: "Technical reference: Capacitor bank resonance with harmonics"
keywords: ["capacitor bank harmonic resonance risk", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "capacitor-bank-harmonic-resonance"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Resonance of a capacitor bank occurs when its capacitive reactance equals the inductive reactance of the system at a specific harmonic frequency, causing dangerous current and voltage amplifications. This condition, known as parallel or series resonance, can overheat equipment, distort the waveform, and reduce component lifespan if proper mitigation measures are not taken.

Capacitor bank harmonic resonance is an electrical phenomenon that arises when the natural oscillation frequency of the LC circuit formed by the capacitor bank and the network inductance coincides with the frequency of a harmonic current present in the system. Under resonance conditions, the equivalent impedance of the circuit is minimized (series resonance) or maximized (parallel resonance), leading to overvoltages or overcurrents that can destroy the capacitors and other nearby devices.

When a capacitor bank is connected to an electrical network that contains nonlinear loads, such as variable frequency drives or rectifiers, the generated harmonics flow toward the bank. Capacitive reactance decreases with frequency (**X_C = 1 / (2πfC)**) while the inductive reactance of the transformer and cables increases (**X_L = 2πfL**). There exists a frequency at which both reactances equal, canceling the total reactive impedance and favoring intense current circulation at that harmonic frequency.

## Resonance Frequency

The resonance frequency of a shunt capacitor bank is determined by the expression:

> ***f_r = 1 / (2π√(LC))***

where:

| Variable | Description | Unit (SI) |
| --- | --- | --- |
| f_r | Resonance frequency | Hz / s⁻¹ |
| L | Equivalent inductance of the network | H |
| C | Total capacitance of the bank | F |

In practical systems, the tuning frequency of the bank is often expressed as a harmonic order *h = f_r / f_1*, where *f_1* is the fundamental frequency. Typical design values are collected in the following table for 50 Hz and 60 Hz systems.

| Fundamental frequency | Typical tuning frequency range | Equivalent harmonic order |
| --- | --- | --- |
| 50 Hz / 3000 r/min | 120 Hz – 210 Hz / 120 s⁻¹ – 210 s⁻¹ | 2.4 – 4.2 |
| 60 Hz / 3600 r/min | 150 Hz – 250 Hz / 150 s⁻¹ – 250 s⁻¹ | 2.5 – 4.17 |

## Effects of Resonance

Harmonic resonance causes the following operational impacts:

- **Overcurrents in the bank**: the current at the resonance frequency can exceed the capacitor's rated current by 1.5 to 5 times, causing accelerated dielectric aging and fuse blowing.
- **Overvoltages on buses**: the high impedance in parallel resonance generates voltage peaks that can damage insulation and trip protections.
- **Voltage distortion**: harmonic amplification raises THDv above the limits recommended by IEEE 519 (5 % – 8 %).
- **Heating of transformers and cables**: additional harmonic currents increase skin effect and hysteresis losses.
- **Interference with control equipment**: distorted waveforms can cause false trips and measurement errors.

## Mitigation Methods

The most commonly used techniques to avoid or control capacitor bank resonance include:

- **Bank tuning**: adding a series reactor to the capacitor bank to shift the resonance frequency below the first characteristic harmonic, converting the assembly into a tuned passive filter.
- **Active harmonic filters**: inject compensating currents that cancel harmonics in real time, regardless of system impedance.
- **Prior harmonic analysis**: perform harmonic load flow and frequency sweep studies before installation to identify potential resonances and size the tuning reactors.
- **Use of banks with small steps**: allow fine adjustment of total reactive power to avoid capacitances that coincide with critical resonances.
- **Implementation of line reactors**: on the nonlinear load side, limit the injection of harmonics that could excite the resonant circuit.
- **Continuous monitoring**: install power quality analyzers that alert on the evolution of harmonic impedance and trigger corrective actions.

## Applications

Management of harmonic resonance is crucial in the following installations:

- Industrial plants with variable frequency drives and arc furnaces
- Distribution substations that incorporate fixed or stepped reactive compensation
- Wind farms and solar photovoltaic plants with power inverters
- Commercial buildings with massive LED lighting and UPS systems
- Medium voltage networks where capacitor banks and high-capacity underground cables coexist

## Frequently Asked Questions (FAQ)

### What is capacitor bank harmonic resonance?

Resonance is the coincidence between the natural frequency of the LC circuit formed by the capacitor bank and the system inductance, and the frequency of some harmonic present, resulting in a dangerous amplification of current or voltage.

### How is the resonance frequency of a capacitor bank calculated?

It is calculated using the formula f_r = 1 / (2π√(L·C)), where L is the equivalent inductance of the network and C is the capacitance of the bank, both in henries and farads respectively.

### Which harmonics typically excite resonance in industrial systems?

The 5th, 7th, 11th, and 13th harmonics are the most problematic because they coincide with the typical tuning frequencies of capacitor banks without tuning reactors (between 150 Hz and 350 Hz in 50 Hz systems).

### Why is it necessary to tune a capacitor bank with a reactor?

Tuning shifts the resonance frequency below the first injected harmonic (normally below the 5th), thus preventing the bank from amplifying harmonic currents and protecting the capacitors.

### Can a capacitor bank suffer resonance even if there are no apparent harmonic loads?

Yes, because background harmonics from the network or connection transients can excite the resonant circuit if the system impedance is favorable, especially in weak grids with high pre-existing distortion.

### How is a resonance condition detected in real time?

Using power quality analyzers that record high harmonic currents, abnormal voltage distortion, and abrupt changes in system impedance for a specific frequency, typically above the fundamental.

## References
- **electrical4u.com**: https://www.electrical4u.com/capacitor-bank-reactive-power-compensation/
