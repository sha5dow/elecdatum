---
title: "Line current and phase current relationship"
sidebar:
  label: "Line current and phase current relationship"
description: "Technical reference: Line current and phase current relationship"
keywords: ["line current phase current three phase relationship", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "phase-current-line-current"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

In three-phase systems, the line current (I_L) is the current that flows through each supply conductor to the load, while the phase current (I_ph) is the current that flows through each individual coil of the generator, transformer, or load. The relationship between them depends exclusively on the winding configuration: in a star (Y) connection the line current is identical to the phase current, and in a delta (Δ) connection the line current is √3 (approximately 1,732) times the phase current.

## Relationship in star connection (Y)

In the star connection, each line conductor is in direct series with a single phase coil, so the line current and the phase current are exactly the same magnitude. The relationship is summarized as I_L = I_ph. The three line currents maintain a phase shift of 120° electrical between them, but there is no additional phase shift between the line current and the respective phase current. This equality is valid for both balanced systems and for the individual phase of an unbalanced system, as long as the same branch is analyzed. Single-phase loads connected between line and neutral in a four-wire star network benefit from this relationship, since the line current feeding the circuit is directly the phase current consumed by the load.

| Parameter | Star (Y) |
| --- | --- |
| Current relationship | I_L = I_ph |
| Example (I_ph = 10 A) | I_L = 10 A / 10 A |

## Relationship in delta connection (Δ)

In the delta connection, each line conductor joins two phase coils, so the line current is the vector sum of the two adjacent phase currents. Since these phase currents are 120° out of phase with each other, the magnitude of the line current ends up being √3 (approximately 1,732) times the magnitude of the phase current. The fundamental relationship is I_L = √3 × I_ph. The line current is phase-shifted 30° lagging (or leading, depending on the reference) with respect to one of the phase currents that compose it. This relationship remains invariant in balanced systems; under unbalanced conditions the complete phasor diagram must be solved for each node.

| Parameter | Delta (Δ) |
| --- | --- |
| Current relationship | I_L = √3 × I_ph |
| Example (I_ph = 10 A) | I_L = 17,32 A / 17,32 A |

## Comparative table star vs. delta

| Quantity | Star connection (Y) | Delta connection (Δ) |
| --- | --- | --- |
| Line current (I_L) | I_L = I_ph | I_L = √3 × I_ph ≈ 1,732 × I_ph |
| Line voltage (V_L) | V_L = √3 × V_ph | V_L = V_ph |
| Current example (I_ph = 10 A) | I_L = 10 A / 10 A | I_L = 17,32 A / 17,32 A |
| Voltage example (V_ph = 230 V) | V_L = 400 V / 400 V | V_L = 230 V / 230 V |
| Phase shift between I_L and I_ph | 0° (in phase) | 30° (lead/lag depending on sequence) |
| Neutral | May or may not be present | No neutral connection exists |

## Formulas

For a balanced star (Y) connection:

> **I_L = I_ph**

> **V_L = √3 × V_ph** (with V_L leading V_ph by 30°)

For a balanced delta (Δ) connection:

> **I_L = √3 × I_ph** (with I_L lagging the reference I_ph by 30°)

> **V_L = V_ph**

## Practical applications

The distinction between line current and phase current is essential for sizing conductors, protections, and equipment. In a delta-connected machine, the line current is 1,732 times higher than the current flowing through the internal windings, so the gauge of the supply cables must be larger than what a superficial inspection of the phase current would suggest. Star-delta starters take advantage of this relationship: when starting in star, the line current is reduced to one third of what it would be in delta, limiting the starting peak. In distribution transformers, precise knowledge of this relationship avoids thermal overloads in the internal windings, especially when feeding single-phase loads that cause neutral currents in the star configuration.

## Example table for component selection

| Component | Design condition (I_L for I_ph 10 A) | Observation |
| --- | --- | --- |
| Thermal-magnetic circuit breaker in star | 10 A / 10 A | The line current does not exceed the phase current |
| Thermal-magnetic circuit breaker in delta | 17,32 A / 17,32 A | Line current 1.732 times greater |
| Thermal relay (internal protection) | 10 A / 10 A | Protects the actual phase current |
| Conductor cross-section (delta) | For 17,32 A / 17,32 A | Larger cross-section than suggested by phase current |
| Star-delta starter adjustment | Change from 10 A to 17,32 A / 17,32 A | Starting peak is limited in star |

## Frequently Asked Questions (FAQ)

### In which configuration is the line current equal to the phase current?
In the star (Y) connection, the line current is equal to the phase current (I_L = I_ph). This is because each line conductor is in series with a single phase coil, without branches.

### Why is the line current greater than the phase current in the delta connection?
In the delta connection, each line is connected to two phase coils, and the line current results from the vector sum of two phase currents 120° out of phase. The magnitude of this vector sum is √3 (approximately 1,732) times that of an individual phase.

### Does the relationship I_L = √3 × I_ph hold in unbalanced systems?
Not directly. In unbalanced systems, the phase currents are not equal and the line current is obtained by complete phasor analysis of each node; the expression √3 is only valid for balanced conditions.

### How does the presence of a neutral affect the current relationship?
In a star connection with neutral, the line current remains equal to the corresponding phase current. The neutral will carry the vector sum of the three line currents, which is zero if the system is perfectly balanced.

### What happens to the phase current when only the line current is measured in a delta load?
It is necessary to divide the measured line current by √3 to obtain the phase current. This conversion is crucial to verify that the internal windings do not exceed their thermal capacity.

### In star-delta starters, how does the current relationship change?
During star starting, the line current is equal to the motor phase current, and the voltage across each winding equals the phase voltage (V_L/√3). When switching to delta, the line current is multiplied by 3 (due to the change in voltage and impedance) and the internal phase current is reconfigured according to the Δ connection. This reduces the starting peak.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/three-phase-electrical-d_888.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-10/three-phase-y-delta-configurations/
- **electrical4u.com**: https://www.electrical4u.com/relationship-of-line-and-phase-voltages-and-currents-in-a-star/
