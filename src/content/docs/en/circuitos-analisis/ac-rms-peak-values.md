---
title: "RMS and peak values in AC"
sidebar:
  label: "RMS and peak values in AC"
description: "Technical reference: RMS and peak values in AC"
keywords: ["RMS peak value AC calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "ac-fundamentals"
subcategory: "rms-values"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

RMS (root mean square) and peak values are fundamental parameters to characterize a sinusoidal alternating current signal. The RMS value of an AC voltage or current is equivalent to the DC value that would produce the same power dissipation across a resistive load. For a pure sine wave, the RMS value is approximately 0,7071 times the peak value.

## Conversion Formula

The mathematical relationship between the RMS value and the peak value for a sinusoidal waveform is derived from the definition of root mean square. For the effective voltage we have:

> **Urms = Upico / √2 ≈ 0,7071 × Upico**

The inverse expression, to obtain the peak value from the RMS value, is:

> **Upico = Urms × √2 ≈ 1,414 × Urms**

| Variable | Description | Unit |
| --- | --- | --- |
| Urms | RMS voltage (Root Mean Square) | V / V |
| Upico | Peak voltage or sine wave amplitude | V / V |
| √2 | Crest factor for sine wave (dimensionless) | ~1,4142 / ~1,4142 |

These relationships are identical for alternating current, replacing voltage with current (Irms and Ipico). The equivalence is valid exclusively for pure sinusoidal waveforms; other waveforms have different crest factors.

## Relationship Between Characteristic Values

In a sinusoidal alternating current signal, three characteristic amplitude values are distinguished: the RMS or effective value, the peak value (instantaneous maximum), and the peak-to-peak value (difference between the positive maximum and the negative maximum). Their numerical relationships are:

| Parameter | Formula based on Upico | Example for Upico = 325 V / 325 V |
| --- | --- | --- |
| RMS value (Urms) | Upico / √2 | 230 V / 230 V |
| Peak value (Upico) | Upico | 325 V / 325 V |
| Peak-to-peak value (Upp) | 2 × Upico | 650 V / 650 V |

The peak-to-peak relationship with respect to RMS is expressed as **Upp = 2√2 × Urms ≈ 2,828 × Urms**. This factor is constant for any sinusoidal signal, regardless of its frequency or amplitude.

## Standard Values in Electrical Installations

Electric power distribution systems specify their voltages in RMS values. The maximum or peak voltage is inherently higher and determines the insulation requirements of equipment connected to the grid. For the two most common standard voltages, the following peak values are obtained:

| System | Nominal RMS Voltage | Peak Voltage (Upico = Urms × √2) |
| --- | --- | --- |
| European (single-phase) | 230 V / 230 V | 325 V / 325 V |
| North American (single-phase) | 120 V / 120 V | 170 V / 170 V |

AC voltmeters and ammeters always display the RMS value, not the peak or instantaneous value. This allows direct calculation of active power in resistive loads using the classical expressions of Ohm's law.

## Crest Factor and Form Factor

Crest factor and form factor are two dimensionless coefficients that characterize the geometry of a periodic waveform. Crest factor defines the relationship between the peak value and the RMS value:

> **Crest factor = Upico / Urms**

For a pure sine wave, the crest factor is √2 ≈ 1,414. Form factor relates the RMS value to the absolute mean value of the rectified signal:

> **Form factor = Urms / Umed**

| Parameter | Value for pure sine wave |
| --- | --- |
| Crest factor (Upico/Urms) | 1,414 / 1,414 |
| Form factor (Urms/Umed) | 1,111 / 1,111 |

These factors are used to evaluate the quality of a power supply signal. Harmonic distortion raises the crest factor above 1,414, which can cause nuisance tripping of protections or overheating in transformers.

## RMS Value Calculation by the Analytical Method

The analytical method determines the RMS value of a continuous function by integration over a complete period. For any periodic function v(t) defined between t1 and t2, the general expression is:

> **Vrms = √[ (1/T) × ∫0T v(t)² dt ]**

For a sinusoidal voltage of the form v(t) = Upico × sen(ωt), the integration evaluated over one complete period T = 2π/ω yields:

> **Vrms = Upico / √2**

| Symbol | Meaning | Unit |
| --- | --- | --- |
| Vrms | RMS voltage (root mean square) | V / V |
| T | Signal period | s / s |
| v(t) | Instantaneous voltage as a function of time | V / V |
| Upico | Maximum amplitude of the sinusoid | V / V |

The graphical method is a practical alternative when the waveform is not symmetrical or analytically integrable. It consists of sampling the signal at n equally spaced intervals, squaring each sample, averaging the squares, and taking the square root of the result.

## RMS Values in Non-Sinusoidal Waveforms

The relationships between RMS value, mean value, and peak value vary significantly according to the geometry of the wave. The following table lists the form factors and crest factors for the most common periodic waveforms in power electronics and signal analysis.

| Waveform | Form factor (Urms / Umed) | Crest factor (Upico / Urms) |
| --- | --- | --- |
| Sinusoidal | 1,111 / 1,111 | 1,414 / 1,414 |
| Triangular | 1,155 / 1,155 | 1,732 / 1,732 |
| Square (50% duty cycle) | 1,0 / 1,0 | 1,0 / 1,0 |
| Sawtooth | 1,155 / 1,155 | 1,732 / 1,732 |
| Full-wave rectified (sine) | 1,111 / 1,111 | 1,414 / 1,414 |
| Half-wave rectified (sine) | 1,571 / 1,571 | 2,0 / 2,0 |

For a symmetrical square wave, the RMS value exactly matches the peak value, since the voltage remains constant in each half-cycle. In a triangular wave, the peak-to-RMS ratio rises to √3 ≈ 1,732, meaning that for the same power, the required peak amplitude is higher than in the sinusoidal case.

## Frequently Asked Questions (FAQ)

### Why is the RMS value used in alternating current instead of the peak value?

The RMS value represents the effective capability of an AC signal to perform work on a resistive load. It is equivalent to the DC value that would produce the same power dissipation, allowing direct application of Ohm's law formulas and active power calculation without integrating the waveform.

### Is the 0,707 factor valid for any waveform?

No. The relationship Urms = 0,707 × Upico is exclusive to pure sinusoidal waves. For a triangular wave, the factor is approximately 0,577 (1/√3), and for a square wave it is exactly 1,0. Applying the sinusoidal factor to a distorted signal introduces significant measurement errors.

### How is the peak-to-peak value related to the RMS value?

The peak-to-peak value equals 2√2 times the RMS value, i.e., approximately 2,828 × Urms. This relationship is derived directly from Upp = 2 × Upico and Upico = √2 × Urms. In a 230 V RMS network, the peak-to-peak voltage is about 650 V.

### What does a multimeter measure in AC, RMS value or peak value?

Standard multimeters measure RMS value calibrated for sinusoidal waves. True RMS models calculate the actual RMS of the signal regardless of its waveform, which is essential when harmonic components exist or the signal is not perfectly sinusoidal.

### What is the peak voltage in a 230 V domestic network?

The peak voltage of a European domestic 230 V RMS network is approximately 325 V (230 × √2). For a North American 120 V RMS network, the peak value is approximately 170 V. This value determines the insulation voltage that connected equipment must withstand.

### What do the crest factor and form factor mean?

The crest factor is the ratio between the peak value and the RMS value (1,414 for sine wave), and the form factor is the ratio between the RMS value and the mean rectified value (1,111 for sine wave). A high crest factor indicates current peaks that can saturate transformers or trip protections.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ac-circuit-d_1933.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/tools/rms-voltage-calculator/
- **electrical4u.com**: https://www.electrical4u.com/rms-or-root-mean-square-value-of-ac-signal/
