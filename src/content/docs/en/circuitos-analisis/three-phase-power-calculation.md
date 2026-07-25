---
title: "Three-phase power calculation"
sidebar:
  label: "Three-phase power calculation"
description: "Technical reference: Three-phase power calculation"
keywords: ["three phase power calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "three-phase-power"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Power in three-phase systems is determined by a formula that involves the square root of three, line voltage, line current, and power factor. The fundamental expression allows obtaining active power, expressed in watts (W) or horsepower (hp), and is applicable to both star and delta configurations. Below are the equations, variables, typical power factors, and a practical calculation example.

## Three-Phase Power Formulas
The active power P in a balanced three-phase system can be calculated from line or phase quantities. The two equivalent forms are:

> **P = √3 · V_L · I_L · cos φ**
> **P = 3 · V_F · I_F · cos φ**

Where √3 ≈ 1,732 is the constant relationship between line and phase quantities in three-phase systems. The first expression uses line voltage V_L and line current I_L, while the second uses phase voltage V_F and phase current I_F.

## Variables and Units
The parameters involved in three-phase power calculation are summarized in the following table. Power can be represented in metric and imperial units.

| Symbol | Name | Unit |
| --- | --- | --- |
| P | Active power | watt (W) / horsepower (hp); 1 hp = 746 W |
| V_L | Line voltage | volt (V) |
| I_L | Line current | ampere (A) |
| V_F | Phase voltage | volt (V) |
| I_F | Phase current | ampere (A) |
| cos φ | Power factor | dimensionless |
| φ | Phase angle | degree (°) or radian (rad) |

## Power Factor
The power factor cos φ represents the fraction of apparent power that is converted into useful work. Its value ranges from 0 to 1 and depends on the load type. The following table lists characteristic values for common devices.

| Device | Power factor |
| --- | --- |
| Uncompensated fluorescent lamp | 0,5 |
| Compensated fluorescent lamp | 0,93 |
| Incandescent lamp | 1 |
| Induction motor at 100% load | 0,85 |
| Induction motor at 50% load | 0,73 |
| Induction motor at no load (0%) | 0,17 |
| Synchronous motor | 0,9 |
| Resistance heating furnace | 1 |
| Compensated induction furnace | 0,85 |
| Purely resistive load | 1 |

## Active, Reactive, and Apparent Power
In alternating current, the total power is decomposed into three quantities:

- Active power P (useful work): P = √3 · V_L · I_L · cos φ, measured in watts (W) or horsepower (hp).
- Reactive power Q (energy stored and returned by magnetic or electric fields): Q = √3 · V_L · I_L · sin φ, measured in volt-amperes reactive (VAR).
- Apparent power S (product of RMS values): S = √3 · V_L · I_L, measured in volt-amperes (VA).

The relationship between them is given by S² = P² + Q². The brake horsepower (BHP) of a motor is obtained by dividing the active power by the efficiency η and the conversion factor 746 W/hp:

> **BHP = (√3 · V_L · I_L · cos φ · η) / 746**

## Star and Delta Configurations
The relationships between line and phase voltage and current depend on the type of connection:

- Star (Y) configuration: V_L = √3 · V_F; I_L = I_F.
- Delta (Δ) configuration: V_L = V_F; I_L = √3 · I_F.

In both cases, the total active power calculated with line values is identical and follows the general formula P = √3 · V_L · I_L · cos φ. This property ensures that the same calculation method is valid regardless of the system topology.

## Calculation Example
Consider a three-phase circuit with a line voltage of 400 V / 230 V (line/neutral) and a current of 20 A, feeding a purely resistive load (cos φ = 1). The active power is determined as:

- Using line voltage: P = 1,732 × 400 V × 20 A × 1 = 13 856 W (13,9 kW).
- Using phase voltage: P = 3 × 230 V × 20 A × 1 = 13 800 W (13,8 kW).

The small difference is due to rounding of √3. The equivalent power in horsepower is 13 856 W / 746 ≈ 18,6 hp.

## Frequently Asked Questions (FAQ)
### Why is √3 used in the three-phase power formula?
The √3 factor comes from the geometric relationship between line and phase voltages in a balanced system. In a star connection, V_L = √3 · V_F, and substituting into the per-phase power expression yields the √3 factor in the condensed formula.

### How is three-phase power measured in the field?
Three-phase wattmeters or network analyzers are used, applying the two-wattmeter method (Aron connection) or three-wattmeter method, simultaneously measuring line voltages and currents and calculating total P.

### What is the difference between active, reactive, and apparent power?
Active power performs useful work; reactive power is exchanged between generators and inductive/capacitive loads without producing net work; apparent power is the vector sum of both and determines the required capacity of electrical equipment.

### What power factor is considered acceptable in industrial installations?
Values above 0,9 are desirable. Electric companies often penalize factors below 0,95. Compensation with capacitor banks allows raising it from typical motor values (0,85) to levels close to unity.

### How does phase imbalance affect power calculation?
In unbalanced systems, the formula √3 · V_L · I_L · cos φ is no longer accurate. Total power must be calculated as the sum of the powers of each phase, measured individually, since currents and voltages are no longer symmetrical.

### Can the same formula be applied for delta and star systems?
Yes. The expression P = √3 · V_L · I_L · cos φ is independent of the internal configuration of the generator or load, as long as line quantities are used. The internal relationships between phase and line cancel out when expressing the total power.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/three-phase-electrical-d_888.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/calculating-electric-power/
- **electrical4u.com**: https://www.electrical4u.com/electric-power-single-and-three-phase/
