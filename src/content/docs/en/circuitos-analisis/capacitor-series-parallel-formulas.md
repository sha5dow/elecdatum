---
title: "Capacitor series parallel formulas"
sidebar:
  label: "Capacitor series parallel formulas"
description: "Technical reference: Capacitor series parallel formulas"
keywords: ["capacitor series parallel formula calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "circuit-elements"
subcategory: "capacitor-formulas"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The equivalent capacitance of two 10 μF and 20 μF capacitors connected in parallel is 30 μF, while in series it reduces to 6.7 μF. Knowing the formulas for calculating total capacitance in series and parallel configurations is essential for circuit design and analysis. This page presents the mathematical expressions, their derivation, practical examples, and a direct comparison between the two connection modes.

## Capacitors in Series
When connecting three capacitors of 3 μF, 6 μF, and 12 μF in series, an equivalent capacitance of 1.7 μF is obtained. The equivalent capacitance of capacitors connected in series is always less than the smallest individual capacitance. The general formula for n capacitors in series is:

> **1 / C_eq = 1 / C₁ + 1 / C₂ + 1 / C₃ + … + 1 / Cₙ**

For the particular case of two capacitors in series, the expression simplifies to:

> **C_eq = (C₁ × C₂) / (C₁ + C₂)**

In a series connection, the charge (Q) is the same on all capacitors, and the total applied voltage is distributed among them inversely proportional to their capacitance (V = Q / C).

## Capacitors in Parallel
Two capacitors of 10 μF and 20 μF in parallel sum to a total capacitance of 30 μF. In a parallel connection, the equivalent capacitance is the direct sum of the individual capacitances and is always greater than the largest of them. The general formula for n capacitors in parallel is:

> **C_eq = C₁ + C₂ + C₃ + … + Cₙ**

In this configuration, all capacitors are subjected to the same voltage (that of the source), while the total charge is the sum of the charges on each.

## Calculation Example
A series circuit made of 3 μF, 6 μF, and 12 μF capacitors fed with 230 V delivers a common charge of 391 μC. First, the equivalent capacitance is calculated:

> **1 / C_eq = 1 / 3 + 1 / 6 + 1 / 12 = 4/12 + 2/12 + 1/12 = 7/12**
> **C_eq = 12 / 7 ≈ 1.71 μF**

With this value, the total charge flowing through the circuit is determined:

> **Q = C_eq × V = 1.71×10⁻⁶ F × 230 V ≈ 3.93×10⁻⁴ C = 393 μC**

Since the charge is identical in all elements in series, the voltage across each capacitor is obtained with V = Q / C:

| Capacitor | Capacitance | Calculated Voltage |
|-----------|--------------|-------------------|
| C₁ | 3 μF | 131 V |
| C₂ | 6 μF | 65.5 V |
| C₃ | 12 μF | 32.8 V |

The sum of the partial voltages (131 + 65.5 + 32.8 ≈ 229.3 V) matches, within rounding error, the applied 230 V.

## Comparison Between Connections
Typical values of 10 μF and 20 μF serve to illustrate the fundamental differences. The following table summarizes the properties of each configuration.

| Property | Series Connection | Parallel Connection |
|-----------|-------------------|----------------------|
| Equivalent capacitance | Smaller than the smallest | Sum of capacitances |
| General formula | 1/C_eq = Σ (1/Cᵢ) | C_eq = Σ Cᵢ |
| Example with 10 μF and 20 μF | 6.7 μF | 30 μF |
| Voltage across each capacitor | Distributed inversely to C | Same as source |
| Charge on each capacitor | Equal on all | Distributed proportionally to C |
| Behavior | Reduces total capacitance | Increases total capacitance |

## Frequently Asked Questions (FAQ)
### How is equivalent capacitance calculated in series?
It is calculated using the formula 1/C_eq = 1/C₁ + 1/C₂ + … + 1/Cₙ. The resulting capacitance is smaller than the smallest capacitance in the arrangement.

### How is equivalent capacitance calculated in parallel?
Simply sum all capacitances: C_eq = C₁ + C₂ + … + Cₙ. The total capacitance always exceeds the largest individual value.

### Why is the total capacitance in series smaller than the smallest?
Because the series connection effectively increases the dielectric thickness, which reduces the ability to store charge for the same voltage.

### How is voltage distributed in capacitors in series?
Voltage is distributed inversely proportional to capacitance: the smaller the capacitance, the greater the voltage. The sum of the partial voltages equals the source voltage.

### What happens with charge in a parallel connection?
The total charge is the sum of the charges on each capacitor (Q_total = Q₁ + Q₂ + …), and each one stores a charge proportional to its capacitance because all see the same voltage.

### What is the quick formula for two capacitors in series?
For exactly two capacitors in series, you can use C_eq = (C₁ × C₂) / (C₁ + C₂). This expression avoids working directly with reciprocals.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/capacitors-parallel-series-d_1388.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-13/series-and-parallel-capacitors/
- **electrical4u.com**: https://www.electrical4u.com/capacitors-in-series-and-parallel/
