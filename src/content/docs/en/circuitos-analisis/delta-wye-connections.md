---
title: "Delta and wye connections comparison"
sidebar:
  label: "Delta and wye connections comparison"
description: "Technical reference: Delta and wye connections comparison"
keywords: ["delta wye connection comparison three phase", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "delta-wye"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Delta (Δ) and wye (Y) connections constitute the two fundamental methods for interconnecting the windings of sources and loads in three-phase alternating current systems. The choice between them determines the relationship between line and phase voltages, the availability of neutral, the behavior under unbalanced loads, and the circulation of harmonic currents. In industrial, commercial, and distribution applications, the delta configuration is mainly used for pure three-phase loads such as motors, while the wye configuration allows for a neutral conductor to supply single-phase loads at a reduced voltage.

## Wye (Y) Connection

The wye connection, also called Y or star, is characterized by joining one terminal of each of the three windings at a common point called the neutral. The other three terminals are connected to the supply lines. The line voltage is equal to the phase voltage multiplied by the square root of three, while the line current is identical to the phase current. The neutral point can be grounded or used as a fourth conductor, allowing two voltage levels in the same system. The most common configurations in low voltage are 230/400 V in Europe and 120/208 V in North America.

| Parameter | Wye relationship |
|---|---|
| Line voltage (VL) | **VL = √3 × VF** |
| Line current (IL) | **IL = IF** |

## Delta (Δ) Connection

In the delta connection, the three windings are connected in a closed loop, forming a triangle. Each line is connected to a vertex of the triangle, so the line voltage is exactly equal to the phase voltage. The line current is the vector sum of two adjacent phase currents and equals √3 times the phase current. This configuration lacks a neutral point; therefore, it only supplies a single line-to-line voltage. The absence of a neutral and the ability to circulate third harmonic currents internally make it ideal for supplying large three-phase motors and for the primary of distribution transformers.

| Parameter | Delta relationship |
|---|---|
| Line voltage (VL) | **VL = VF** |
| Line current (IL) | **IL = √3 × IF** |

## Voltage and Current Relationships

The relationship between line and phase voltages and currents is the most relevant differentiating factor between the two configurations. All cases consider a balanced three-phase system with positive sequence. The fundamental formulas are summarized below.

> **VL(Y) = √3 × VF(Y) ; IL(Y) = IF(Y)**  
> **VL(Δ) = VF(Δ) ; IL(Δ) = √3 × IF(Δ)**

| Quantity | Wye (Y) | Delta (Δ) |
|---|---|---|
| Line voltage – VL | √3 × VF ≈ 1.732 × VF | VF |
| Line current – IL | IF | √3 × IF ≈ 1.732 × IF |
| Phase shift VL – VF | 30° (line leads phase) | 0° |
| Phase shift IL – IF | 0° | 30° (line lags phase) |
| Neutral availability | Yes | No |

For a balanced three-phase system, the total active power is calculated independently of the connection using the expression:

> **P = √3 × VL × IL × cos φ**

Where cos φ is the load power factor.

## Comparative Table

| Feature | Wye connection (Y) | Delta connection (Δ) |
|---|---|---|
| Number of conductors | 3 or 4 (with neutral) | 3 |
| Line/phase voltage | VL = √3 × VF | VL = VF |
| Line/phase current | IL = IF | IL = √3 × IF |
| Neutral available | Yes | No |
| Typical standard voltages | 230/400 V; 120/208 V | 240 V; 400 V; 480 V |
| Behavior with unbalanced load | Requires neutral to stabilize phase voltages | Less sensitive in 3-wire systems |
| 3rd harmonic circulation | Does not circulate internally; may appear in neutral | Circulates in the closed loop, not through lines |
| Phase-to-ground fault current | Depends on neutral grounding impedance | Low or zero if no ground reference |
| Typical application | Low voltage distribution, lighting, receptacles | Supply of three-phase motors, transformer primary |

## Advantages and Disadvantages

**Advantages of wye connection (Y)**
- Provides two voltage levels: phase-to-neutral and phase-to-phase, allowing single-phase and three-phase loads to be supplied from the same system.
- The neutral point can be grounded, improving safety and facilitating ground fault detection.
- Lower voltage per winding for the same line voltage, reducing dielectric stress on insulation.

**Disadvantages of wye connection (Y)**
- Under severely unbalanced loads and absence of neutral, phase voltages can deviate significantly from nominal values.
- Third harmonic currents and their multiples can flow through the neutral, causing overheating if not properly sized.

**Advantages of delta connection (Δ)**
- Allows third harmonic currents to circulate within the closed loop, preventing them from being injected into the network and distorting the waveform.
- Higher line current available for the same phase current, which can be an advantage in motor starting.
- Does not require a neutral, simplifying installation in purely three-phase systems.

**Disadvantages of delta connection (Δ)**
- Without a neutral, it is not possible to obtain a reduced voltage for single-phase loads without an additional transformer.
- In the event of a phase fault, the open delta configuration reduces the power capacity to 57.7% of the nominal value and can cause severe imbalances.
- A ground fault in one phase can go unnoticed for long periods if the system operates isolated from ground, as no significant short-circuit current flows.

## Common Applications

**Wye connection (Y)**
- Secondary distribution networks in commercial and residential environments: 120/208 V three-phase 4-wire system in North America and 230/400 V in Europe.
- Secondary of distribution transformers where an accessible neutral is required.
- Capacitor banks for power factor correction with grounded neutral.
- Synchronous generators in power plants, whose stator is normally connected in wye to provide a neutral and facilitate protection.

**Delta connection (Δ)**
- Supply of medium and high power three-phase induction motors, especially in direct-on-line starting.
- Primary of distribution and power transformers, where the circulation of third harmonics is exploited.
- Transmission and subtransmission networks without neutral (3-wire delta systems at 240, 400, 480, or 600 V, used in industrial applications).
- Open delta configuration for emergency situations or temporary expansions with only two single-phase transformers.

## Δ-Y Transformer Connections

Three-phase transformers can implement combinations of delta and wye connections on the primary and secondary. The delta-wye (Δ-Y) configuration is the most widespread in distribution, as it combines the advantages of both topologies: the primary in delta eliminates third harmonic currents from the primary line, while the secondary in wye provides an accessible neutral for single-phase loads. This connection introduces a 30° phase shift between primary and secondary voltages, which must be considered when operating transformers in parallel.

| Connection | Primary | Secondary | Transformation ratio | Phase shift | Typical application |
|---|---|---|---|---|---|
| Δ-Δ | Delta | Delta | VL1 / VL2 | 0° | Three-phase industrial loads without neutral |
| Y-Y | Wye | Wye | VL1 / VL2 | 0° | Systems with neutral on both sides; sensitive to third harmonics |
| Δ-Y | Delta | Wye | √3 × VL1 / VL2 | 30° | Distribution transformer: step-down from medium to low voltage |
| Y-Δ | Wye | Delta | VL1 / (√3 × VL2) | 30° | Step-up in generating stations or end of line |

## Frequently Asked Questions (FAQ)

### What is the practical difference between a delta and a wye connection?

The most practical difference is that the wye connection provides a neutral point, allowing two voltage levels (phase-to-neutral and phase-to-phase) and supplying single-phase loads without an additional transformer. The delta connection only delivers a line-to-line voltage and lacks a neutral, making it ideal for exclusively three-phase loads such as motors.

### When should a delta connection be chosen over a wye connection?

The delta connection is preferred when the load is purely three-phase and balanced, such as large motors, or when it is desired to prevent third harmonic currents from flowing into the network. It is also used on the primary of distribution transformers to take advantage of its ability to filter harmonics internally.

### Why in a delta connection is the line current greater than the phase current?

Because each line conductor receives the contribution of two adjacent phases. The vector sum of these two currents, 120° out of phase with each other, results in a line current of magnitude √3 times the phase current, which is approximately 1.732 times.

### How are the terminals visually identified in a delta or wye connection?

In standardized diagrams, the wye connection is represented with three windings joined at one end at a common point (Y). The delta connection is drawn as a closed triangle (Δ) with the vertices connected to the lines. On actual terminals, the wye connection has jumpers connecting one end of each coil, while in delta the jumpers form the complete loop.

### Can single-phase loads be connected to a delta system?

Yes, by connecting them between two phases. The available voltage will be the line voltage of the delta system. However, it must be verified that the single-phase load does not excessively unbalance the system and that its nominal voltage matches the available line voltage.

### What is the phase-to-neutral voltage in a wye system if the line voltage is 400 V?

The phase-to-neutral voltage is 400 V divided by √3, approximately 230 V. This is the principle that allows, for example, a European 400 V line-to-line network to have 230 V between phase and neutral for domestic use.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-distribution-systems-usa-europe-d_2214.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-10/three-phase-y-delta-configurations/
- **electrical4u.com**: https://www.electrical4u.com/transformer-connections/
