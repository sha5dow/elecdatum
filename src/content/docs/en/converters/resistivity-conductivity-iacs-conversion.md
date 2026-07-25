---
title: "Resistivity to conductivity IACS conversion"
sidebar:
  label: "Resistivity to conductivity IACS conversion"
description: "Technical reference: Resistivity to conductivity IACS conversion"
keywords: ["resistivity conductivity IACS conversion table", "converters"]
category: "converters"
topic: "resistance-units"
subcategory: "resistivity-conductivity-iacs-conversion"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The conversion between electrical resistivity and IACS conductivity is essential for specifying and comparing conductive materials. The IACS (International Annealed Copper Standard) establishes that internationally annealed copper has an electrical conductivity of 58.0 × 10⁶ S/m at 20 °C, a value defined as 100 % IACS. Resistivity is the reciprocal of conductivity, so from the resistivity measured in ohm‑meter (Ω·m) the IACS percentage can be obtained, and vice versa. This page presents the conversion formula, a reference table, and a practical example to facilitate the calculation.

## Conversion Formula

> **%IACS = (σ / σ<sub>IACS</sub>) × 100 %**
> **σ = 1 / ρ**

where σ<sub>IACS</sub> = 58.0 × 10⁶ S/m is the electrical conductivity of the IACS standard copper.

| Variable | Description | Unit |
| --- | --- | --- |
| %IACS | Conductivity expressed as a percentage of the IACS standard | % |
| σ | Electrical conductivity of the material | S/m (or S/cm, μS/cm) |
| ρ | Electrical resistivity of the material | Ω·m (or Ω·cm, Ω·mm²/m, Ω·CM/ft) |

Combining both expressions gives the direct relationship:

> **%IACS = [1 / (ρ × 58.0 × 10⁶)] × 100**

## Conversion Table

| Resistivity (Ω·m / Ω·CM/ft) | %IACS |
| --- | --- |
| 1.724 × 10⁻⁸ / 10.37 | 100.0 % |
| 2.00 × 10⁻⁸ / 12.03 | 86.2 % |
| 2.50 × 10⁻⁸ / 15.04 | 69.0 % |
| 3.00 × 10⁻⁸ / 18.05 | 57.5 % |
| 4.00 × 10⁻⁸ / 24.06 | 43.1 % |
| 5.00 × 10⁻⁸ / 30.08 | 34.5 % |
| 7.50 × 10⁻⁸ / 45.12 | 23.0 % |
| 1.00 × 10⁻⁷ / 60.15 | 17.2 % |
| 5.00 × 10⁻⁷ / 300.8 | 3.45 % |
| 1.00 × 10⁻⁶ / 601.5 | 1.72 % |
| 1.00 × 10⁻⁵ / 6015 | 0.172 % |

## Calculation Example

An aluminum alloy wire has a resistivity of 3.80 × 10⁻⁸ Ω·m. Calculate its IACS conductivity.

1. Calculate the absolute electrical conductivity:
   σ = 1 / ρ = 1 / (3.80 × 10⁻⁸) ≈ 2.6316 × 10⁷ S/m

2. Express the conductivity as a percentage of the IACS standard:
   %IACS = (σ / 58.0 × 10⁶) × 100 = (2.6316 × 10⁷ / 5.80 × 10⁷) × 100 ≈ 45.4 %

Result: the alloy has an approximate conductivity of 45.4 % IACS.

## Frequently Asked Questions (FAQ)

### What exactly does 100% IACS mean?
100 % IACS is equivalent to an electrical conductivity of 58.0 × 10⁶ S/m and a resistivity of 1.724 × 10⁻⁸ Ω·m, values corresponding to standard annealed copper at 20 °C.

### How is resistivity measured to calculate %IACS?
It is typically measured with eddy current instruments that determine conductivity directly, or with a four-point Kelvin bridge for resistivity, and then the conversion formula is applied.

### Why is annealed copper used as the reference?
Annealed copper was adopted as a standard by the International Electrotechnical Commission in 1913 because it exhibited reproducible and high conductivity, becoming a worldwide comparison point for metals and alloys.

### Is the IACS conversion valid for any material?
The mathematical relationship is universal, but the IACS reference is mainly applied to conductive metals and alloys. For insulators or semiconductors, resistivity is usually used directly, without the IACS scale.

### What is the resistivity of pure copper in imperial units?
Pure annealed copper has a resistivity of 10.37 Ω·CM/ft (ohm‑circular mil per foot), which exactly corresponds to 100 % IACS.

### How accurate is the conversion formula?
Since the IACS standard is a fixed value, the conversion is exact. Practical accuracy depends solely on the precision with which the material's resistivity or conductivity has been measured.

## References
- [Electrical Conductivity - Elements and other Materials](https://www.engineeringtoolbox.com/conductors-d_1381.html)