---
title: "Power factor quality standards"
sidebar:
  label: "Power factor quality standards"
description: "Technical reference: Power factor quality standards"
keywords: ["power factor quality standard IEEE 519", "calidad-energia"]
category: "calidad-energia"
topic: "power-factor-quality"
subcategory: "power-factor-quality-standards"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The power factor is a key indicator of how efficiently an electrical system uses the supplied energy. A low power factor, often caused by inductive loads such as motors and transformers, increases conductor losses, reduces distribution capacity, and can lead to financial penalties from the utility company. To mitigate these effects, international standards such as IEC 61000-3-2 and IEEE 519 impose strict limits on harmonic emissions and require minimum power factor values, driving the adoption of correction techniques like capacitor banks.

## Definition of Power Factor

Power factor (PF) is a dimensionless quantity between 0 and 1 that expresses the efficiency of converting apparent power into active power. It is defined as the cosine of the phase angle (φ) between the voltage and current waveforms. A value of 1 indicates that all supplied energy is transformed into useful work, while lower values reveal the presence of reactive power that oscillates between the source and the load without performing net work.

> **PF = cos(φ) = P / S**

| Variable | Symbol | Unit |
| --- | --- | --- |
| Active power | P | W / W |
| Apparent power | S | VA / VA |
| Reactive power | Q | VAR / VAR |
| Phase angle | φ | degrees (°) / degrees (°) |

The alternative formula PF = P / S directly relates the wattmeter reading (active power) to the product of RMS voltage and current (apparent power). In three-phase circuits, the power factor is calculated with the expression:

> **PF = P / (√3 · U · I)**

Where U is the line voltage and I is the line current.

## Applicable International Standards

The standard IEC 61000-3-2:2014, harmonized in the European Union as EN 61000-3-2, sets maximum limits for harmonic current emissions from electrical and electronic equipment with input current ≤ 16 A per phase. Its objective is to prevent distortion of the voltage waveform in public low-voltage networks. Additionally, the Energy Star 80 Plus program requires a minimum power factor of 0.9 at full load and an energy efficiency of no less than 80% for computer power supplies.

| Standard | Scope | Controlled Parameter |
| --- | --- | --- |
| IEC 61000‑3‑2 | Equipment ≤ 16 A/phase connected to the public network | Harmonic currents |
| IEEE 519 | Industrial and commercial distribution systems | Total harmonic distortion of voltage and current |
| Energy Star 80 Plus | Internal computer power supplies | Power factor and energy efficiency |

Compliance with these standards results in reduced neutral losses in three-phase systems, lower transformer heating, and increased available generation capacity.

## Harmonic Distortion Limits

Total harmonic distortion (THD) of current is one of the factors that degrades power factor, as it introduces frequency components that do not contribute to useful work and increase RMS current. IEC 61000‑3‑2 establishes individual limits for each harmonic up to the 40th order, differentiated by equipment class, rather than a single THD value. The following table shows the reference levels used in industrial environments according to practices aligned with IEEE 519.

| Harmonic | Typical limit in low voltage (≤ 690 V / ≤ 690 V) |
| --- | --- |
| 3rd | 5% of fundamental / 5% |
| 5th | 4% of fundamental / 4% |
| 7th | 3% of fundamental / 3% |
| 11th to 15th | 2% of fundamental / 2% |
| 17th to 25th | 1.5% of fundamental / 1.5% |

Current THD is typically kept below 5% for Class A equipment under full load conditions, while configurations with simple rectifiers and capacitive filters can exceed 100% THD without correction.

## Equipment Classification According to IEC 61000‑3‑2

The standard divides equipment into four classes (A, B, C, and D) based on type and power, assigning different harmonic current limits to each. Class D, which includes equipment with single-phase input and active power between 75 W and 600 W, is especially restrictive due to its high penetration in the domestic and office market.

| Class | Included Equipment | Particularity |
| --- | --- | --- |
| A | Balanced three-phase equipment, household appliances not classified elsewhere | Absolute harmonic current limits (A) |
| B | Single-phase portable tools | Limits 1.5 times those of Class A |
| C | Lighting devices (including LED) | Limits expressed as a percentage of the fundamental harmonic |
| D | Equipment with power 75‑600 W and special waveform | Limits in mA/W, penalizing non‑sinusoidal waveform |

Proper classification by the manufacturer determines regulatory compliance and conditions the design of the input stage to keep distortion within allowed margins.

## Typical Power Factor Values

Without correction, almost all inductive loads have power factors far from unity. The following table shows reference values for three-phase induction motors at 1800 rpm, illustrating how the power factor improves as mechanical load increases.

| Power (hp / kW) | No load (cos φ) | ¼ load (cos φ) | ½ load (cos φ) | Full load (cos φ) |
| --- | --- | --- | --- | --- |
| 0‑5 hp / 0‑3.73 kW | 0.15‑0.20 | 0.50‑0.60 | 0.72 | 0.84 |
| 5‑20 hp / 3.73‑14.91 kW | 0.15‑0.20 | 0.50‑0.60 | 0.74 | 0.86 |
| 20‑100 hp / 14.91‑74.57 kW | 0.15‑0.20 | 0.50‑0.60 | 0.79 | 0.89 |
| 100‑300 hp / 74.57‑223.71 kW | 0.15‑0.20 | 0.50‑0.60 | 0.81 | 0.91 |

Different industrial sectors operate with overall power factors that depend on the combination of installed loads. The lowest uncorrected values are found in plants with a large number of asynchronous motors working at partial load.

| Industry | Typical power factor (%) |
| --- | --- |
| Food (breweries) | 75‑80% / 75‑80% |
| Cement | 75‑80% / 75‑80% |
| Chemical | 65‑75% / 65‑75% |
| Electrochemical | 65‑75% / 65‑75% |
| Foundry | 75‑80% / 75‑80% |
| Machinery manufacturing | 60‑65% / 60‑65% |
| Oil (pumping) | 40‑60% / 40‑60% |
| Offices | 80‑90% / 80‑90% |
| Textile | 35‑60% / 35‑60% |

## Power Factor Correction Methods

Power factor correction aims to minimize the phase shift between voltage and current, reducing the reactive power demanded from the grid. The most widespread technique consists of installing capacitor banks in parallel with the inductive load, which locally compensate reactive power and raise the power factor to values near 0.95, required by many electric utilities to avoid penalties.

The following table contains the multiplying factors of active power (kW) that allow sizing the reactive capacity of the capacitor bank needed to raise the power factor from an initial value to a desired value.

| Initial power factor | Target power factor |
| --- | --- |
| 0.85 | 0.90 | 0.92 | 0.94 | 0.95 | 0.98 | 1.00 |
| 0.50 | 1.59 | 1.72 | 1.77 | 1.83 | 1.86 | 1.95 | 2.12 |
| 0.60 | 1.00 | 1.13 | 1.18 | 1.24 | 1.27 | 1.36 | 1.53 |
| 0.70 | 0.54 | 0.67 | 0.72 | 0.78 | 0.81 | 0.90 | 1.12 |
| 0.75 | 0.34 | 0.47 | 0.52 | 0.58 | 0.61 | 0.70 | 1.08 |
| 0.80 | 0.15 | 0.28 | 0.33 | 0.39 | 0.42 | 0.51 | 0.84 |

**Note:** The table value is multiplied by the active power in kW to obtain the capacitor kVAR.

Other correction alternatives include:

- **Synchronous condensers:** Synchronous machines that, operating overexcited, supply capacitive reactive power to the grid.
- **Active harmonic filters:** Electronic devices that inject compensating currents, simultaneously correcting the displacement power factor and harmonic distortion.
- **Variable frequency drives with PFC stage:** Controlled rectifiers with active power factor correction, capable of maintaining it above 0.95 over the entire load range.

## Effects of a Low Power Factor

Operating with a power factor below 0.85 causes a direct increase in the line current required to transfer the same active power. This current increase results in over‑sizing of conductors, higher Joule effect losses, reduced insulation life, and additional voltage drops. The following table quantifies how much the conductor cross‑section must be increased (taking unit cross‑section at power factor = 1 as reference) to carry the same active power without exceeding the maximum allowed heating.

| Power factor | Relative increase in cross‑section |
| --- | --- |
| 1.00 | 1.0 / 1.0 |
| 0.90 | 1.23 / 1.23 |
| 0.80 | 1.56 / 1.56 |
| 0.70 | 2.04 / 2.04 |
| 0.60 | 2.78 / 2.78 |
| 0.50 | 4.00 / 4.00 |
| 0.40 | 6.25 / 6.25 |
| 0.30 | 11.1 / 11.1 |

In addition to the cost of copper, the reduction in effective generation and distribution capacity is proportional to the power factor: an 80 kVA installation with PF of 0.7 only delivers 56 real kW, leaving the transformer underutilized.

## Frequently Asked Questions (FAQ)

### Which international standard regulates harmonic emissions from low-voltage equipment?
Standard IEC 61000‑3‑2, applicable to equipment with input current equal to or less than 16 A per phase, establishes the maximum limits for harmonic currents injected into the public network.

### What is the minimum power factor value typically required by electric utilities?
Many utilities penalize power factors below 0.90 or 0.95, since a lower value increases distribution losses and reduces the effective capacity of the grid.

### Why do linear power supplies fail to meet power quality regulations?
Linear supplies based on a transformer, rectifier, and filter capacitor draw current in narrow peaks that generate high total harmonic distortion (THD) and a typical power factor below 0.7, which is incompatible with standards such as IEC 61000‑3‑2.

### What is the difference between displacement power factor and true power factor?
Displacement power factor only considers the cosine of the phase angle at the fundamental frequency, while true power factor also includes the effect of harmonic distortion, being equal to the product of the displacement factor and the distortion factor.

### How is the capacity of a capacitor bank for correction selected?
The required reactive power is calculated by multiplying the active power in kW by the correction factor tabulated as a function of the initial cos φ and the target cos φ. This product gives the kVAR that the bank must supply.

### Does power factor affect the cross‑section of conductors in an installation?
Yes. With a power factor of 0.50, the conductor cross‑section must be multiplied by approximately 4 compared to that required with unity power factor, due to the current increase caused by reactive power.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/power-factor-thd-why-linear-power-supplies-fail-meet-electricity-standards/
