---
title: "Reactive power fundamentals"
sidebar:
  label: "Reactive power fundamentals"
description: "Technical reference: Reactive power fundamentals"
keywords: ["reactive power fundamentals VAR", "calidad-energia"]
category: "calidad-energia"
topic: "reactive-power"
subcategory: "reactive-power-basics"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Reactive power is the component of electrical power in alternating current that does not perform useful work, but oscillates between the source and the magnetic or electric fields of inductive and capacitive loads. Its unit of measurement is the reactive volt-ampere (VAR), and in typical industrial installations it can represent between 30 % and 50 % of the total apparent power.

## Active, Reactive and Apparent Power
In every alternating current circuit, three forms of power coexist:

- **Active power (P):** is the power that is effectively transformed into mechanical work, heat or light. It is measured in watts (W) and corresponds to the product of voltage, current and the cosine of the phase angle (cos φ).
- **Reactive power (Q):** is the power continuously exchanged between the generator and the reactive elements (inductors and capacitors) without producing net work. It is expressed in reactive volt-amperes (VAR) and is associated with the sine of the phase angle (sin φ). In a complete cycle its average value is zero.
- **Apparent power (S):** is the total power supplied to the load, the vector combination of P and Q. It is measured in volt-amperes (VA) and determines the required capacity of transformers and distribution lines.

## Power Triangle
The relationship between P, Q and S is graphically represented by a right triangle where the horizontal leg is active power, the vertical leg is reactive power and the hypotenuse is apparent power. The angle φ between S and P coincides with the phase shift between voltage and current.

> **S² = P² + Q²**

where:

- **S** = apparent power (VA)
- **P** = active power (W)
- **Q** = reactive power (VAR)

The power factor is defined as cos φ = P / S. A low power factor indicates a high proportion of reactive power.

## Calculation Formulas
The general expressions for single-phase and balanced three-phase systems are:

| System | Active power (W) | Reactive power (VAR) | Apparent power (VA) |
| --- | --- | --- | --- |
| Single-phase | P = U · I · cos φ | Q = U · I · sin φ | S = U · I |
| Three-phase | P = √3 · U · I · cos φ | Q = √3 · U · I · sin φ | S = √3 · U · I |

Where:

- **U** = line voltage (V)
- **I** = line current (A)
- **φ** = phase angle between voltage and current

> **Q = U · I · sin φ** *(single-phase)*  
> **Q = √3 · U · I · sin φ** *(three-phase)*

In direct current (DC) reactive power does not exist; only active power P = U · I.

## Relationship with Power Factor
The power factor (PF) is the ratio between active power and apparent power, and is expressed as PF = cos φ. When the load is purely resistive, φ = 0°, cos φ = 1 and all supplied power is active. As inductive or capacitive elements appear, φ increases, the power factor decreases and the proportion of reactive power grows.

A PF value below 0.9 (90 %) is generally considered inefficient and, in many legislations, entails economic penalties for the industrial consumer.

## Effects of High Reactive Power
The circulation of reactive power causes the following adverse effects in electrical networks:

- **Increase in line current:** for the same active power, a higher demand for Q raises the total current, increasing Joule effect losses (I²R).
- **Overheating of transformers and cables:** the additional current reduces the useful capacity of distribution equipment.
- **Voltage drops:** the transit of reactive power generates greater voltage drops in feeders, which can compromise supply quality.
- **Reduction of system stability:** in weak networks, fluctuations in Q can cause unacceptable voltage variations. Therefore, reactive power management is an essential ancillary service to maintain the voltage profile within safe limits, normally ±5 % of the nominal value.

## Reactive Power Measurement
The instrument intended for measuring reactive power is called a **varmeter**. There are two main variants:

- **Single-phase varmeter:** the voltage coil is highly inductive, so that the current flowing through it lags by 90° with respect to the applied voltage. The needle deflection is proportional to U · I · sin φ. It does not offer good accuracy in the presence of harmonics.
- **Polyphase varmeter:** uses two autotransformers in open delta connection to generate a 90° phase shift. The current coils are connected in series with two lines and the voltage coils are fed with phase-shifted line voltages, achieving direct reading of the total reactive power of the three-phase system.

In balanced three-phase circuits, a single wattmeter can also be used with the current coil in one phase and the voltage coil between the other two, obtaining a value proportional to Q.

## Frequently Asked Questions (FAQ)
### What is the difference between active, reactive and apparent power?
Active power is the power that performs useful work (it is consumed in resistors). Reactive power oscillates between the generator and the inductive/capacitive elements without producing net work. Apparent power is the vector sum of both and represents the total power supplied to the circuit.

### Why is excessive reactive power undesirable?
Because it increases the current flowing through the network without contributing work, raising heating losses, reducing the transport capacity of lines and causing voltage drops. Additionally, it economically penalizes the consumer through a low power factor.

### How can reactive power be reduced?
Mainly by installing capacitor banks (fixed or automatic compensation) in parallel with the inductive load, generating reactive power of opposite sign and bringing the power factor close to unity.

### In what units is reactive power measured?
It is measured in reactive volt-amperes (VAR) in the International System. For large powers, kVAR (kilovar) and MVAR (megavar) are used.

### What role does reactive power play in voltage control?
Injecting reactive power at a node raises the local voltage, while absorbing it reduces the voltage. Therefore, network operators use synchronous generators (overexcited/underexcited) and static reactive compensators to keep voltage within allowable ranges.

### Is it possible to measure reactive power with a common wattmeter?
Not directly. A varmeter is required, or else the connection of a wattmeter must be modified so that the voltage coil receives a signal shifted by 90° from the original. In balanced three-phase systems it can be measured with a single wattmeter connected in a special way.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/kva-reactive-d_886.html
- **electrical4u.com**: https://www.electrical4u.com/varmeter-single-phase-and-polyphase-varmeter/
