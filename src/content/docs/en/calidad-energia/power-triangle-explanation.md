---
title: "Power triangle explanation"
sidebar:
  label: "Power triangle explanation"
description: "Technical reference: Power triangle explanation"
keywords: ["power triangle explanation kW kVAR kVA", "calidad-energia"]
category: "calidad-energia"
topic: "reactive-power"
subcategory: "power-triangle"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The power triangle is a graphical representation that links active power (P), reactive power (Q), and apparent power (S) in alternating current (AC) electrical circuits. Its geometry is based on the Pythagorean theorem and allows visualizing how the energy that performs useful work, the energy that oscillates without producing net work, and the total supplied power are linked by the phase angle φ.

## Definition and representation

The characteristic right triangle uses an angle φ that in purely resistive loads is **0° and in pure inductive loads reaches 90°**. The three types of power are projected onto this triangle, facilitating the interpretation of power factor and the quantification of losses.

| Element | Symbol | Main unit | Practical equivalence |
|----------|---------|------------------|------------------------|
| Active power | P | watt (W) | 1 kW ≈ 1,34 hp (horsepower) |
| Reactive power | Q | volt-ampere reactive (VAR) | – |
| Apparent power | S | volt-ampere (VA) | 1 kVA ≈ 1,34 electric hp (capacity reference) |
| Phase angle | φ | degree (°) / radian (rad) | 180° = π rad ≈ 3,1416 rad |

The powers satisfy the vector relationship **S = P + jQ**, where the horizontal axis represents active power and the vertical axis reactive power. The hypotenuse corresponds to apparent power.

## Components of the power triangle

**Active power (P):** In a typical induction motor of 10 kW / 13,4 hp, active power represents the capacity for conversion into mechanical work or heat. It is calculated as:

> **P = V · I · cos φ** (single-phase)

> **P = √3 · V · I · cos φ** (three-phase)

Its unit is the watt (W) and, in industrial systems, common values range from 1 kW / 1,34 hp to several MW.

**Reactive power (Q):** In that same motor, a reactive power of 7,5 kVAR is necessary to maintain the magnetic field, but it does not produce net work. It is expressed in volt-amperes reactive (VAR) and in single-phase circuits it is obtained with:

> **Q = V · I · sin φ**

In three-phase systems, the formula incorporates √3: **Q = √3 · V · I · sin φ**. Typical values at the terminals of medium motors are between 5 kVAR and 50 kVAR.

**Apparent power (S):** Combining the two previous ones, the apparent power for the example would be approximately 12,5 kVA (10 kW, 7,5 kVAR). It is measured in volt-amperes (VA) and is the direct product of the effective voltage and current:

> **S = V · I** (single-phase)

> **S = √3 · V · I** (three-phase)

In the triangle, S acts as the hypotenuse and is always equal to or greater than P.

## Fundamental mathematical relationships

The connection between the three powers follows the Pythagorean theorem, where the square of apparent power equals the sum of the squares of active and reactive power:

> **S² = P² + Q²**

From this, the following are derived:

> **S = √(P² + Q²)**

> **P = S · cos φ**

> **Q = S · sin φ**

The angle φ represents the phase shift between voltage and current. In an installation with a power factor of 0,8, φ is approximately **36,87° / 0,643 rad**. The following table summarizes some characteristic values:

| Power factor (cos φ) | Angle φ (°) / (rad) | Active power (P) for S = 100 kVA | Reactive power (Q) for S = 100 kVA |
|----------------------------|-----------------------|--------------------------------------|----------------------------------------|
| 1,0 | 0° / 0 rad | 100 kW / 134 hp | 0 kVAR |
| 0,9 | 25,84° / 0,451 rad | 90 kW / 120,7 hp | 43,6 kVAR |
| 0,8 | 36,87° / 0,643 rad | 80 kW / 107,3 hp | 60 kVAR |
| 0,7 | 45,57° / 0,795 rad | 70 kW / 93,9 hp | 71,4 kVAR |
| 0,5 | 60,00° / 1,047 rad | 50 kW / 67,1 hp | 86,6 kVAR |

## Power factor (PF)

The power factor is defined as the ratio of active power to apparent power: **PF = P / S = cos φ**. A value of **1,0 (dimensionless)** indicates that all supplied energy is converted into useful work, while a PF of 0,8 reveals that only 80% of apparent power is active; the remaining 20% corresponds to reactive energy circulating between source and load. In practice, industrial loads present typical power factors between 0,7 and 0,9, and values below 0,85 are often penalized economically.

## Importance of the power triangle in practice

A three-phase 480 V / 60 Hz system feeding a motor bank with a consumption of 500 kW / 670 hp and a power factor of 0,7 demands a significantly higher current than if it operated with PF 0,95. The power triangle allows quantifying the excess reactive current and sizing the correction equipment. For example, to raise the PF from 0.7 to 0.95 in that 500 kW system, approximately **290 kVAR of capacitive compensation** is required. This correction reduces losses in conductors and frees up capacity in transformers.

## Frequently Asked Questions (FAQ)

### What is the difference between active, reactive, and apparent power?
Active power (W) is the one that actually performs work (light, heat, motion); reactive power (VAR) sustains magnetic or electric fields without producing net work; apparent power (VA) is the vector sum of both and represents the total power that the source must supply.

### Why is the power triangle a right triangle?
Because active power and reactive power are phase-shifted 90° from each other, so the mathematical relationship corresponds to the Pythagorean theorem, forming a right triangle where the hypotenuse is apparent power.

### How does a low power factor affect the installation?
A power factor below 0.9 generates higher currents for the same active power, which increases Joule effect losses, requires larger conductor cross-sections, and can lead to economic penalties from the utility company.

### How is a low power factor corrected?
Mainly through capacitor banks connected in parallel, which supply reactive power locally and reduce the reactive demand on the grid. Synchronous condensers or active compensators are also used.

### What units are used in the power triangle?
Active power is measured in watts (W) or kilowatts (kW), reactive power in volt-amperes reactive (VAR) or kilovolt-amperes reactive (kVAR), and apparent power in volt-amperes (VA) or kilovolt-amperes (kVA). All can be expressed in horsepower (hp) as a capacity reference.

### Does the power triangle apply to both single-phase and three-phase systems?
Yes, the fundamental relationship S² = P² + Q² is valid in any linear AC circuit, but in three-phase systems the calculation formulas incorporate the factor √3 (approximately 1.732) to reflect the contribution of the three phases.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/kva-reactive-d_886.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
