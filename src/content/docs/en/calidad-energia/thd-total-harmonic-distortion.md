---
title: "Total harmonic distortion THD explanation"
sidebar:
  label: "Total harmonic distortion THD explanation"
description: "Technical reference: Total harmonic distortion THD explanation"
keywords: ["total harmonic distortion THD explanation calculation", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "harmonic-distortion-thd"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Total harmonic distortion (THD) is a fundamental measurement in electrical systems that quantifies how much a current or voltage waveform deviates from a pure sine wave. THD is usually expressed as a percentage; for example, a THD value of 5% indicates that the RMS magnitude of the harmonic components is 5% of the RMS magnitude of the fundamental component. In power systems, maintaining low THD levels is critical to reducing conductor heating, core losses in motors and transformers, and electromagnetic interference. International standards such as IEEE 519 set recommended THD limits to ensure grid quality and stability.

Total harmonic distortion (THD) is the ratio of the RMS value of the sum of all harmonic components of a signal to the RMS value of its fundamental component. In other words, THD quantifies how much of the total content of a voltage or current signal consists of unwanted harmonic frequencies (integer multiples of the fundamental frequency) compared to the main operating frequency, typically 50 Hz or 60 Hz.

| Parameter | Description |
|---|---|
| Fundamental component (1st harmonic) | Sine wave at the nominal grid frequency (50 Hz / 60 Hz). It is the desired waveform. |
| Harmonics (2nd, 3rd, 4th, ..., n) | Frequencies that are integer multiples of the fundamental (e.g., 150 Hz for the 3rd harmonic in a 50 Hz system). They arise from non-linear loads such as rectifiers, variable frequency drives (VFDs), and electronic ballasts. |
| THD value | Dimensionless parameter expressed as a percentage (%). A value of 0% corresponds to a pure, undistorted sine wave. |

## Types (THD-F vs THD-R)

There are two main mathematical definitions for THD, distinguished by the reference signal used in the denominator. Although for low distortion levels (below 10%) the result is practically identical, the difference becomes significant in signals with high distortion.

| Type of THD | Reference for calculation | Range | Main use case |
|---|---|---|---|
| **THD-F** (fundamental referenced) | RMS value of the fundamental frequency (V₁) | 0% to infinity (can exceed 100%) | Audio specifications and power quality standards (IEEE). It is the most commonly cited form. |
| **THD-R** (total RMS referenced) | RMS value of the complete signal (fundamental + harmonics) | 0% to 100% (cannot exceed this value) | Sometimes called "distortion factor". Useful in telecommunications or when analyzing the total signal. |

The conversion relationship between the two is: with a THD-F of 10%, the equivalent THD-R is approximately 9.95%. The distortion of a perfect square wave, which contains infinite harmonics, has a THD-F of 48.3% and a THD-R of 43.5%.

## Calculation formula

The standard formula for calculating THD-F, the most widely used in power systems, is defined as the square root of the sum of the squares of the RMS voltages of all harmonics, divided by the RMS voltage of the fundamental frequency.

> **THD = (√(V₂² + V₃² + V₄² + ... + Vₙ²)) / V₁**

| Variable | Definition | Unit |
|---|---|---|
| **THD** | Total harmonic distortion (usually expressed in % when multiplied by 100) | Dimensionless / % |
| **V₁** | RMS value of the fundamental frequency voltage (e.g., 50 Hz or 60 Hz) | V (volts) |
| **Vₙ** | RMS value of the nth harmonic voltage (n = 2, 3, 4, ...) | V (volts) |

The formula for THD-R, which uses the total signal as reference, is expressed as:

> **THD-R = (√(V₂² + V₃² + V₄² + ... + Vₙ²)) / (√(V₁² + V₂² + V₃² + ... + Vₙ²))**

In practice, Fourier analysis of the signal extracts the amplitude of each harmonic for input into these equations. For example, for a square wave with a 50% duty cycle, the theoretical THD-F calculation using its Fourier series yields exactly √(π²/8 - 1).

## Typical values and limits

The amount of acceptable harmonic distortion is strictly regulated in power systems by standards such as IEEE 519-2022, which sets voltage and current THD limits at the point of common coupling (PCC) to prevent deterioration of grid quality.

| Application / System | Typical THD or recommended limit | Remarks |
|---|---|---|
| Low-voltage distribution network (< 1 kV) | Voltage THD limit: < 8% (IEEE 519) | General maximum limit; more restrictive values apply depending on grid robustness (short-circuit ratio). |
| Dedicated system (hospitals, airports) | Target voltage THD: < 5% | Stricter levels to ensure failure-free operation of sensitive electronic equipment. |
| Output of a typical variable frequency drive (VFD) | Current THD: 30% to 80% | High current distortion requires filtering (line reactors or active filters) to comply with standards. |
| High-fidelity audio signal | THD: < 0.1% | Distortion is inaudible to most listeners at these levels. |
| Theoretical pure square wave | THD-F: 48.3% | It is a mathematical reference, not a design value. Indicates extreme distortion. |
| Induction motor operating with harmonics | NEMA MG1 recommends a voltage distortion factor (related to THD-R) < 5% | Excessive THD causes heating, losses (iron and copper), and reduced service life. |

## Consequences of not controlling harmonic distortion

High THD in an electrical system produces harmful effects ranging from equipment malfunction to premature damage. The increased frequency of harmonics raises iron losses in motors and transformers, as these losses depend on frequency (hysteresis losses proportional to f, and eddy current losses proportional to f²), causing heating and increased operating temperature. In motors, harmonic interaction generates pulsating torques and subsynchronous speeds, leading to mechanical vibrations and the crawling phenomenon. In control systems, harmonics can cause switching failures in variable speed drives and nuisance tripping of protections. Additionally, the presence of zero-sequence harmonics (multiples of the 3rd harmonic) in three-phase systems causes neutral current circulation that can overload the neutral up to 173% of the phase current even with balanced loads.

## THD measurement methods

Practical THD measurement is typically performed in two ways. The filtering method separates the signal into two parts: one containing only the fundamental frequency (filtering out harmonics) and the other containing only the harmonics (removing the fundamental), then measures the RMS value of both and calculates the ratio. The second, more modern and predominant method is based on digital signal processing using the Fast Fourier Transform (FFT). Power quality analyzers sample the voltage or current signal and calculate the harmonic spectrum in real time, determining the magnitude and phase of each harmonic up to the 50th order or higher. This spectral calculation directly yields both THD-F and THD-R by applying the definition formulas.

## Frequently Asked Questions (FAQ)

### What is total harmonic distortion and why is it important?
Total harmonic distortion (THD) measures how much a voltage or current waveform deviates from a perfect sine wave, expressed as the ratio of harmonic energy to fundamental frequency energy. It is important because high THD causes overheating, energy losses, and malfunction in electrical and electronic equipment connected to the grid.

### What is the difference between THD-F and THD-R?
THD-F compares harmonic distortion only against the fundamental component (can exceed 100%), while THD-R compares it against the complete signal (fundamental plus harmonics, cannot exceed 100%). For low distortion levels, e.g., 5%, the numerical difference between the two values is negligible.

### What is the maximum THD allowed by IEEE 519?
IEEE 519-2022 sets a maximum voltage THD limit of 8% for low-voltage systems (below 1 kV), although in practice values well below 5% are recommended for networks supplying sensitive equipment or critical industrial processes.

### Which equipment generates harmonics in an electrical installation?
The main sources of harmonics are non-linear loads such as variable frequency drives (VFDs), rectifiers, switched-mode power supplies (found in computers and LED lighting), uninterruptible power supplies (UPS), and electric arc furnaces, which distort the current drawn from the grid.

### How is THD reduced in an electrical system?
THD is mitigated primarily by line reactors (chokes) at the input of drives, isolation transformers with special connections (such as Delta-Wye) to block triplen harmonics, passive filters tuned to specific harmonic frequencies, and active power filters that inject counter-phase currents to cancel distortion in real time.

### How do harmonics affect the neutral conductor in a three-phase system?
Odd-order harmonics that are multiples of three (3rd, 9th, 15th, etc.), known as zero-sequence harmonics, do not cancel in the neutral but sum arithmetically. In a system with high distortion, the resulting neutral current can be up to 1.73 times the phase current, posing a risk of overload and fire if the conductor is not sized accordingly.

## References
- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/the-importance-of-total-harmonic-distortion/
