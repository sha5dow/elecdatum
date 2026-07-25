---
title: "Electrical power formulas"
sidebar:
  label: "Electrical power formulas"
description: "Technical reference: Electrical power formulas"
keywords: ["electrical power formula P V I watts", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "fundamentals"
subcategory: "power-formulas"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Electrical power is expressed in watts (W), where 1 W equals 1 joule per second (J/s), and is the fundamental quantity for sizing and analyzing any circuit. In direct current, power is calculated as the product of the applied voltage and the current flowing, a relationship known as the basic power formula.

## Fundamental Power Formula

The direct relationship between power, voltage, and current is expressed by the equation:

> **P = V · I**

where:

- **P** is power in watts (W),
- **V** represents voltage or potential difference in volts (V),
- **I** is current intensity in amperes (A).

This expression indicates that a circuit consuming 1 W dissipates or transforms 1 J of energy every second when 1 A flows through it under a voltage of 1 V.

## Equivalent Forms According to Ohm's Law

Combining the fundamental formula with Ohm's Law (V = I · R) yields two other widely used variants in circuit analysis:

> **P = I² · R**

> **P = V² / R**

The first is useful when resistance and current are known, while the second avoids calculating current if voltage and resistance are available.

## Table of Variables and Units

| Symbol | Quantity | SI Unit | Brief Definition |
| --- | --- | --- | --- |
| P | Power | Watt (W) | Rate of energy transfer; 1 W = 1 J/s. |
| V | Voltage | Volt (V) | Electrical potential difference. |
| I | Current | Ampere (A) | Flow of electric charge; 1 A = 1 C/s. |
| R | Resistance | Ohm (Ω) | Opposition to current flow. |

## Calculation Examples

### Example 1 – Power Dissipated by a Resistor

A 12 V battery supplies an 18 Ω resistor. The power consumed by the resistor is determined using the formula P = V² / R:

> **P = (12 V)² / (18 Ω) = 144 / 18 = 8 W**

The current flowing can be verified with P = V · I:

> **I = P / V = 8 W / 12 V ≈ 0.67 A**

In 60 seconds the energy dissipated will be:

> **W = P · t = 8 W · 60 s = 480 J (W·s)**

### Example 2 – Current Calculation from Power and Voltage

A 60 W incandescent lamp is connected to a 120 V household supply. The current it draws is found by solving I = P / V:

> **I = 60 W / 120 V = 0.5 A**

If the same lamp were connected to 230 V, the current would be:

> **I = 60 W / 230 V ≈ 0.26 A**

### Example 3 – Capacity of a Household Circuit

A typical residential circuit is protected by a 15 A breaker at 120 V. The maximum power it can supply without tripping is:

> **P = V · I = 120 V · 15 A = 1800 W**

This means, for example, three 500 W lamps (1500 W total) can be connected while maintaining a safety margin of 300 W.

## Power in Alternating Current

In alternating current (AC) systems, voltage and current may not be in phase. The actual active power consumed is related to apparent power by the power factor (PF):

> **P = V · I · PF   (single-phase)**

> **P₃ɸ = √3 · Vₗ · Iₗ · PF   (three-phase)**

Apparent power (S) is measured in volt-amperes (VA) and reactive power (Q) in volt-amperes reactive (VAR). Active power (P, in W) is the energy that performs useful work.

## Typical Applications

- Sizing conductors and electrical protections in residential and industrial installations.
- Calculating energy consumption of equipment (kWh) for electricity billing.
- Selecting power supplies, converters, and backup systems.
- Determining thermal dissipation in electronic components (power in the form of heat).
- Analyzing efficiency in electric motors through the relationship between electrical input power and mechanical output power.

## Frequently Asked Questions (FAQ)

### What is the difference between Watt's Law and Ohm's Law?

Ohm's Law establishes the relationship between voltage, current, and resistance (V = I · R), while Watt's Law relates power to voltage and current (P = V · I). Both are combined to obtain the alternative forms of power P = I²R and P = V²/R.

### What does it mean that a device has a consumption of 1 kW?

It means the device consumes 1000 joules of electrical energy every second. In one hour of operation, it will have used 1 kilowatt-hour (kWh), the unit used by electric companies to bill consumption.

### How is power calculated in a three-phase circuit?

Three-phase active power is calculated with P = √3 · Vₗ · Iₗ · PF, where Vₗ is line voltage, Iₗ line current, and PF the power factor. If the load is balanced and resistive (PF = 1), the formula simplifies to P = √3 · Vₗ · Iₗ.

### Why in alternating current are apparent power and active power discussed?

Because voltage and current can be out of phase due to reactive elements (inductors and capacitors). Apparent power (V·I) represents the total capacity the system must handle, while active power (V·I·PF) is the portion that is actually transformed into useful work.

### What does a low power factor mean?

A power factor below 1 indicates that part of the circulating current does not contribute to useful work, forcing over-sizing of cables and transformers. Many electric companies financially penalize low PF values to encourage correction.

### Does temperature affect power calculation in a resistor?

The resistance of many materials varies with temperature, which modifies currents and voltages in the circuit. For accurate power calculations under thermal conditions, the resistance at operating temperature must be used, not the nominal value at 20 °C.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/calculating-electric-power/
- **electrical4u.com**: https://www.electrical4u.com/watts-law/
