---
title: "kVA to kW conversion power factor"
sidebar:
  label: "kVA to kW conversion power factor"
description: "Technical reference: kVA to kW conversion power factor"
keywords: ["kVA kW conversion power factor table", "converters"]
category: "converters"
topic: "power-units"
subcategory: "kva-to-kw-conversion"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The conversion of kilovolt-amperes (kVA) to kilowatts (kW) is an essential operation in the analysis of alternating current electrical systems. Apparent power, measured in kVA, does not by itself represent useful work; the power factor (PF) must be known to determine the real or active power in kW. This page provides the exact formula, conversion tables, and practical examples to facilitate the calculation.

## Conversion Formula

> **kW = kVA × PF**

where:

- **kW**: Real or active power in kilowatts.
- **kVA**: Apparent power in kilovolt-amperes.
- **PF**: Power factor (dimensionless, between 0 and 1).

The power factor is defined as the cosine of the phase angle (φ) between voltage and current in a linear circuit:

> **PF = cos(φ) = P / S**

where P is active power and S is apparent power.

Additionally, in three-phase motors the apparent power can be calculated from mechanical power and efficiency:

> **kVA = (hp × 0,7457) / (η × PF)**

where η is the motor efficiency expressed as a decimal.

## Quick Conversion Table

The following table shows the real power in kW and its equivalent in metric horsepower (hp) for different values of apparent power and power factor. The conversion factor used is 1 kW = 1,3596 hp (metric).

| kVA | Power Factor | Real Power (kW and hp) |
|---|---|---|
| 10 kVA | 0,80 | 8 kW / 10,877 hp |
| 10 kVA | 0,90 | 9 kW / 12,237 hp |
| 10 kVA | 1,00 | 10 kW / 13,596 hp |
| 25 kVA | 0,80 | 20 kW / 27,192 hp |
| 25 kVA | 0,90 | 22,5 kW / 30,591 hp |
| 25 kVA | 1,00 | 25 kW / 33,991 hp |
| 50 kVA | 0,80 | 40 kW / 54,385 hp |
| 50 kVA | 0,90 | 45 kW / 61,183 hp |
| 50 kVA | 1,00 | 50 kW / 67,981 hp |
| 100 kVA | 0,80 | 80 kW / 108,771 hp |
| 100 kVA | 0,90 | 90 kW / 122,366 hp |
| 100 kVA | 1,00 | 100 kW / 135,962 hp |
| 500 kVA | 0,80 | 400 kW / 543,854 hp |
| 500 kVA | 0,90 | 450 kW / 611,836 hp |
| 500 kVA | 1,00 | 500 kW / 679,811 hp |

## Factors Affecting the Conversion

The conversion from kVA to kW depends directly on the power factor, which varies according to load characteristics. The main influencing factors are:

- **Resistive load:** PF = 1; all apparent power is converted to real power. Example: electric heaters, incandescent lamps.
- **Inductive load (motors, transformers):** typical PF between 0,7 and 0,9. Produces lagging phase shift (current lagging voltage), reducing real power for the same apparent power.
- **Capacitive load:** leading PF (current leading), uncommon in industrial equipment but present in capacitor banks for power factor correction.
- **Non-linear loads (rectifiers, variable frequency drives):** cause harmonic distortion that reduces the real power factor even if cos(φ) is close to 1. In these cases, the total power factor is decomposed into displacement factor and distortion factor.
- **Operating conditions:** In motors, PF varies with load; under light load the PF can be below 0,5.

Knowing the actual power factor of the equipment is essential for an accurate conversion; otherwise, using estimated values can lead to oversizing conductors and protections.

## Calculation Examples

**Example 1: Calculation of kW from kVA and known PF.**  
A three-phase generator supplies 150 kVA with a power factor of 0,85. Determine the real power in kW and in horse power.

> **kW = 150 kVA × 0,85 = 127,5 kW**

Converting to metric horse power:

> **hp = 127,5 kW × 1,3596 ≈ 173,349 hp (metric)**

The generator delivers 127,5 kW (approximately 173,3 hp).

**Example 2: Determination of the necessary power factor to obtain a certain real power.**  
An installation has a load of 80 kW and is fed through a 100 kVA transformer. What must be the minimum power factor to not exceed the transformer capacity?

Solve for PF:

> **PF = kW / kVA = 80 kW / 100 kVA = 0,8**

The power factor must be at least 0,8 (lagging or leading). If the actual PF of the load is lower, correction equipment must be installed.

**Example 3: Calculation of kVA required for a motor.**  
A 50 hp (metric) motor with efficiency η = 0,92 and power factor 0,88. Calculate the required kVA.  
First, convert hp to kW: 50 hp ÷ 1,3596 ≈ 36,78 kW (equivalent to 50 hp × 0,7355 kW/hp).  
Apply the kVA formula for motors:

> **kVA = (hp × 0,7355) / (η × PF) = 36,78 kW / (0,92 × 0,88) ≈ 36,78 / 0,8096 ≈ 45,43 kVA**

A supply of at least 45,43 kVA will be required for that motor.

## Frequently Asked Questions (FAQ)

### What is the difference between kVA and kW?
kW (kilowatt) measures real power, that is, the energy effectively converted into work. kVA (kilovolt-ampere) measures apparent power, which includes reactive power that does not perform useful work but does circulate through the conductors. The relationship between them is the power factor.

### Why is the power factor not always 1?
A power factor equal to 1 occurs only in purely resistive loads. Most industrial equipment (motors, transformers) contains inductances that shift the current phase relative to the voltage, reducing the power factor below 1.

### How does a low power factor affect the electricity bill?
A low power factor forces more current to be carried for the same useful power, which increases network losses and requires larger cross-section conductors. Electric utilities often impose financial penalties on consumers with a power factor below 0,9 or 0,95.

### What do lagging and leading power factor mean?
Lagging power factor occurs when the current lags the voltage (inductive load). Leading means the current leads (capacitive load). Both can be corrected, although the most common case in industry is lagging.

### Can kW be converted to kVA without knowing the power factor?
An exact conversion is not possible without the power factor, since the relationship between the two quantities is direct: kVA = kW / PF. If PF is unknown, a typical value for the load type can be assumed, but there is a risk of obtaining an inaccurate result.

### What equipment is used to correct the power factor?
Capacitor banks, connected in parallel with the load, are used to compensate for inductive reactive power and raise the power factor. In installations with non-linear loads, active harmonic filters or electronic dynamic correction equipment are used.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **unitconverters.net**: https://www.unitconverters.net/power/kw-to-hp.htm
- **convertworld.com**: https://www.convertworld.com/en/power/
