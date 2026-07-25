---
title: "Single-phase power calculation"
sidebar:
  label: "Single-phase power calculation"
description: "Technical reference: Single-phase power calculation"
keywords: ["single phase power calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "single-phase-power"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

In a typical 120 V, 200 A residential single-phase system, the maximum apparent power available is 24 kVA (32.2 HP). Single-phase power is the simplest form of alternating current supply, where voltage and current vary sinusoidally and in phase – or with a phase shift – delivering energy to loads such as lighting, heating, and small motors. Correct calculation of active, reactive, and apparent power is essential for sizing conductors, protections, and evaluating the energy efficiency of any installation.

## Calculation Formula

Active (real) power in a single-phase alternating current circuit is obtained with the expression:

> **P = V × I × PF / 1000**  

where P is measured in kilowatts (kW) if V is in volts (V) and I in amperes (A). For apparent power, the power factor is omitted:

> **S = V × I / 1000**  

and reactive power is calculated with:

> **Q = V × I × sin(φ) / 1000**  

where φ is the phase angle between voltage and current. The relationship between the three powers is S² = P² + Q².

## Variable Table

| Symbol | Quantity | Unit (SI) | Unit (Imperial) |
|--------|----------|-----------|-----------------|
| P | Active (real) power | W, kW | HP (1 HP ≈ 746 W) |
| S | Apparent power | VA, kVA | kVA (same) |
| Q | Reactive power | var, kvar | kvar (same) |
| V | Voltage | V | V (same) |
| I | Current | A | A (same) |
| PF (cos φ) | Power factor | dimensionless | dimensionless |
| φ | Phase angle | degrees (°) | degrees (°) |

## Active, Reactive, and Apparent Power

In single-phase alternating current, three types of power coexist. **Active power P = V × I × cos φ** is the one that performs useful work (light, heat, motion) and is measured in watts (W) or kilowatts (kW). **Reactive power Q = V × I × sin φ** is demanded by inductive or capacitive loads to maintain magnetic or electric fields; it is expressed in reactive volt-amperes (var) and produces no net work. **Apparent power S = V × I** represents the total load that the installation must support and is measured in volt-amperes (VA) or kilovolt-amperes (kVA). The power factor (PF = cos φ) indicates what fraction of apparent power is converted into useful work: a PF of 1 means that all power is active (purely resistive load), while typical values in small motors range from 0,7 to 0,95.

## Calculation Example

A single-phase motor of 12 V and 8 A with unity power factor (PF = 1) and an efficiency of 96 % consumes an active electrical power of:

> **P = (12 V × 8 A × 1) / 1000 = 0,096 kW = 96 W**

The mechanical power at the shaft (brake horsepower, BHP) is obtained by dividing by efficiency:

> **P_BHP = (12 V × 8 A × 1 × 0,96) / 746 = 0,125 HP (≈ 93,2 W)**

This is equivalent to 1/8 HP, a typical power for fans or small pumps.

## Factors Influencing Single-Phase Power

The actual power delivered depends on the **power factor** of the load: inductive loads (motors, ballasts) reduce active power for the same current. The **device efficiency** (μ) subtracts internal heat losses; in motors it is usually between 0,85 and 0,96. **Voltage drops** in long conductors decrease the voltage at the load terminals, reducing effective power. Additionally, the **mains frequency** (50 Hz or 60 Hz) influences the reactance of inductors and capacitors, altering Q and S without necessarily changing P. In real installations, **load imbalance** must also be considered if multiple circuits are supplied from the same phase.

## Typical Applications

Single-phase power is used in virtually all homes and small businesses. It powers indoor and outdoor lighting, household appliances (refrigerators, washing machines, microwaves), HVAC systems up to 3-5 tons of refrigeration, residential water pumps, and portable power tools. In rural areas with medium-voltage single-phase networks, distribution transformers are used that deliver 120/240 V secondaries in a split-phase configuration. The typical maximum contracted power in a European single-family home is 3,45 to 9,2 kVA (currents of 15 to 40 A at 230 V), while in North America a 200 A service at 240 V can reach 48 kVA.

## Frequently Asked Questions (FAQ)

### What is the difference between active power and apparent power in single-phase?
Active power (W) is the energy actually converted into work; apparent power (VA) is the total product of voltage and current that the installation must carry. The power factor relates the two.

### How is current calculated if I know the active power and voltage?
Solve for I = P / (V × PF) with power in watts. If the load is purely resistive (PF=1), simply use I = P / V.

### Why do single-phase motors typically not exceed 10 kW?
Because they do not generate a natural rotating magnetic field and require auxiliary starting windings, which limits their efficiency and starting torque at high powers. Above that threshold, three-phase supply is preferred.

### What power factor value should I use for a residential installation?
In modern homes with mostly resistive and electronic loads, the PF is typically between 0,9 and 1,0. If there are air conditioning motors or pumps, it can drop to 0,8-0,9, and correction with capacitors is recommended.

### How do I convert single-phase power to horsepower (HP)?
1 HP equals 746 W. To obtain power in HP, divide the active power in watts by 746. If motor efficiency must also be considered, the complete formula is HP = (V × I × PF × μ) / 746.

### Can I connect a single-phase load to a three-phase system?
Yes, by connecting it between one phase and neutral or between two phases, provided the load's nominal voltage matches the available voltage. For example, in a 120/208 V three-phase system, a 120 V single-phase load is connected phase-to-neutral and a 208 V load between two phases.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/single-phase-electrical-d_887.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-5/power-calculations/
- **electrical4u.com**: https://www.electrical4u.com/electric-power-single-and-three-phase/
