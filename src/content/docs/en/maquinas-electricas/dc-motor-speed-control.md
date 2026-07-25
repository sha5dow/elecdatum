---
title: "DC motor speed control"
sidebar:
  label: "DC motor speed control"
description: "Technical reference: DC motor speed control"
keywords: ["DC motor speed control methods", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "dc-motor-speed-control"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The speed of a DC motor is controlled by adjusting the voltage applied to the armature, the resistance of the armature circuit, or the magnetic flux per pole, according to the fundamental speed equation. Control can be manual or automated and is classified into armature and field methods, applicable to shunt, series, and compound motors.

The speed of a DC motor is governed by the back electromotive force and the applied voltage. The fundamental speed equation relates armature voltage, resistance drop, motor constant, and flux per pole.

> **N = (V - IₐRₐ) / (kφ)**

| Variable | Description | Unit |
| --- | --- | --- |
| N | Motor speed | rpm or rad/s |
| V | Voltage applied to armature | V |
| Iₐ | Armature current | A |
| Rₐ | Armature circuit resistance | Ω |
| k | Motor constant | — |
| φ | Magnetic flux per pole | Wb |

Speed control acts on three independent parameters: armature voltage V, external resistance in the armature circuit Rₐ, and flux per pole φ. The first two affect only the armature circuit and constitute armature control methods. The third modifies the magnetic field and defines field control methods.

## Control Methods for DC Shunt Motor

DC shunt motors allow speed control by armature and field methods. The choice of method depends on the required speed range, allowable energy efficiency, and the torque characteristics demanded by the load.

### Armature Control

Armature control in a DC shunt motor varies the voltage applied to the armature while keeping the field flux constant. Speed is directly proportional to armature voltage, and maximum torque remains unchanged.

**Armature resistance control:** consists of inserting a variable resistor in series with the armature. This method reduces the effective voltage at the motor terminals and allows speed to be decreased below rated speed. The power dissipated in the control resistor makes the method inefficient for continuous operation with high loads. It is mainly used in starters and applications requiring temporary speed reduction under light load conditions.

**Armature voltage control:** uses an independent variable voltage source. The Ward Leonard system, introduced by Harry Ward Leonard in 1891, is the classic implementation: a motor-generator set where a constant-speed AC motor drives a DC generator with adjustable field excitation. The generator output directly feeds the armature of the motor to be controlled. Small variations in the generator field current produce amplified changes in the output voltage, achieving smooth regulation from zero to maximum speed in both directions. The system can incorporate a flywheel to stabilize load fluctuations; this variant is known as Ward Leonard Ilgner control.

| Parameter | Typical Range |
| --- | --- |
| Speed range | 0 to rated speed |
| Torque available | Constant throughout the range |
| Efficiency | High in voltage control, low with series resistance |
| Direction reversal | Smooth and controlled |

### Field Control

Field control in a DC shunt motor varies the magnetic flux by inserting a rheostat in the field circuit. Reducing the excitation current decreases the flux per pole and speed increases above rated speed.

Excitation power typically represents between 2% and 5% of the motor's rated power, so losses in the field rheostat are small. The available torque decreases inversely proportional to the speed increase, maintaining approximately constant power. Excessive field weakening can cause operational instability and poor commutation in the commutator.

| Parameter | Typical Range |
| --- | --- |
| Speed range | Rated speed up to 3 to 5 times rated |
| Torque available | Decreases as speed increases |
| Power | Approximately constant |
| Control losses | Low (field circuit only) |

## Control Methods for DC Series Motor

The DC series motor has speed and torque characteristics inversely proportional to the load. Speed control is implemented using armature and field methods, with particular attention to the risk of runaway under no-load conditions.

### Armature Control

**Armature resistance control:** a variable resistor connected in series with the motor reduces the voltage applied to the armature. This method is economical in constant-torque applications such as cranes, bascule bridges, and railway traction, where speed reduction occurs under light load and resistor losses are acceptable.

**Shunt armature control:** combines a rheostat in parallel with the armature and another in series. Series rheostat R₁ adjusts the armature voltage, while parallel rheostat R₂ diverts part of the current, varying the excitation of the series field. The control range covers speed below rated with a wide regulation margin, although losses in the rheostats reduce overall efficiency.

**Armature voltage control:** requires an independent variable voltage source for the series motor. Its cost and complexity limit practical application, being uncommon compared to other alternatives.

| Method | Speed Range | Typical Application |
| --- | --- | --- |
| Series resistance | Below rated | Cranes, traction |
| Shunt armature | Wide range below rated | Industrial processes |
| Variable voltage | 0 to rated | Special applications |

### Field Control

**Field diverter method:** connects a variable resistor (diverter) in parallel with the series field winding. The diverter diverts a portion of the armature current, reducing the excitation flux and increasing speed above rated. The lower the diverter resistance, the higher the speed. This method is typical in electric drives where a rapid speed increase is required as load decreases.

**Field tapping control:** the series field winding has taps or tappings that allow varying the effective number of turns through which the excitation current flows. Reducing the number of active turns decreases flux and increases speed. This technique is used in electric traction systems.

| Method | Principle | Resulting Speed |
| --- | --- | --- |
| Field diverter | Resistor in parallel with field | Above rated |
| Field tapping | Reduction of active turns | Above rated |

## Ward Leonard System

The Ward Leonard system, introduced by Harry Ward Leonard in 1891, is a variable-speed drive for DC motors based on a rotating motor-generator set. A constant-speed prime mover — typically an AC induction or synchronous motor — drives a DC generator whose field winding receives a low-power control signal. The generator armature output directly feeds the DC motor that drives the load.

The amplification principle of the set allows small variations in the generator field current to produce significant changes in the voltage and power delivered to the motor. Speed is controlled from zero to rated in both directions by reversing the field current. Additional field weakening control of the motor allows extending speed above rated.

The Ward Leonard Ilgner variant incorporates a flywheel coupled between a wound-rotor induction motor and the generator, decoupling sudden load demands from the AC supply network. The set consisting of induction motor, flywheel, and generator is called the Ilgner group.

| Characteristic | Value |
| --- | --- |
| Speed range | 0 to rated speed (voltage control), extendable by field |
| Starting torque | Rated torque available from zero speed |
| Direction reversal | Smooth, by generator field reversal |
| Typical efficiency | 70% to 85% (including rotating set losses) |

The Ward Leonard system was extensively used in elevators, mine hoists, naval propulsion, and military radars (such as the SCR-584 in 1942) until the arrival of static thyristor drives in the 1980s.

## Comparison of Control Methods

Control methods differ in speed range, efficiency, torque type, and cost. Proper selection depends on the application and load characteristics.

| Method | Motor | Speed Range | Efficiency | Relative Cost |
| --- | --- | --- | --- | --- |
| Armature resistance | Shunt / Series | Below rated | Low (I²R losses) | Low |
| Variable armature voltage | Shunt / Series | 0 to rated | Medium - high | Medium - high |
| Field weakening | Shunt | Rated to 3–5× rated | High | Low |
| Field diverter | Series | Above rated | Medium | Low |
| Field tapping | Series | Above rated | High | Low |
| Ward Leonard | Shunt | 0 to rated, reversible | Medium | High |

## Speed vs. Number of Poles and Frequency

In separately excited or shunt DC motors, the base speed depends on the number of magnetic poles and the supply frequency when using prior AC/DC conversion. The following table shows synchronous and full-load speeds for typical 2, 4, 6, and 8 pole configurations at 50 Hz and 60 Hz.

| Poles | 50 Hz — Synchronous (rpm / rad/s) | 50 Hz — Full load (rpm / rad/s) | 60 Hz — Synchronous (rpm / rad/s) | 60 Hz — Full load (rpm / rad/s) |
| --- | --- | --- | --- | --- |
| 2 | 3000 rpm / 314 rad/s | 2850 rpm / 298 rad/s | 3600 rpm / 377 rad/s | 3450 rpm / 361 rad/s |
| 4 | 1500 rpm / 157 rad/s | 1425 rpm / 149 rad/s | 1800 rpm / 188 rad/s | 1725 rpm / 181 rad/s |
| 6 | 1000 rpm / 105 rad/s | 950 rpm / 99 rad/s | 1200 rpm / 126 rad/s | 1150 rpm / 120 rad/s |
| 8 | 750 rpm / 79 rad/s | 700 rpm / 73 rad/s | 900 rpm / 94 rad/s | 850 rpm / 89 rad/s |

The slip between synchronous and full-load speeds typically ranges from 3% to 7% for standard induction motors. In Ward Leonard configurations with a synchronous motor as prime mover, the generator speed remains constant regardless of load variations.

## Frequently Asked Questions (FAQ)

### Which control method allows the maximum speed reduction in a DC shunt motor?

Armature voltage control with a variable source — such as the Ward Leonard system — allows operation from 0 rpm / 0 rad/s up to rated speed of 1500 rpm / 157 rad/s (4-pole motor at 50 Hz), maintaining rated torque throughout the range. Armature resistance control reduces speed but with increasing losses as speed decreases.

### Why does field control only increase speed and not reduce it?

Magnetic flux φ appears in the denominator of the speed equation N = (V - IₐRₐ) / (kφ). Reducing flux through field weakening increases speed; to reduce speed it would be necessary to increase flux above rated, which saturates the magnetic circuit and increases core losses without practical benefit. Field weakening typically reaches 3 to 5 times rated speed.

### What is the main risk of speed control in DC series motors?

The DC series motor tends to run away when operating with no load or very light load, since the decrease in armature current reduces the field flux and speed increases uncontrollably. Excessive speed — which can exceed 5000 rpm / 524 rad/s in small motors — causes mechanical damage from centrifugal force on the rotor and severe wear of the commutator and brushes.

### What is the efficiency of the armature resistance control method?

The efficiency of armature resistance control decreases proportionally to the speed reduction. For operating at 50% of rated speed (for example, 750 rpm / 79 rad/s in a 4-pole, 50 Hz motor with base speed 1500 rpm / 157 rad/s), the power dissipated in the resistor equals the power delivered to the load, resulting in efficiency below 50%.

### In which applications was the Ward Leonard system widely used?

The Ward Leonard system was widely used in passenger elevators and freight lifts until the 1980s, mine hoists, diesel-electric locomotive traction patented by H.W. Leonard in 1903, and precision servomechanisms such as the SCR-584 radar in World War II. Its amplification capability in the multi-kilowatt range and smooth stepless speed control justified its widespread adoption.

### What advantage does the field diverter control offer in DC series motors?

The field diverter allows increasing speed above rated simply and with few additional components. By connecting a variable resistor in parallel with the series field, a fraction of the excitation current — typically between 10% and 40% — is diverted, reducing magnetic flux and raising speed. This method is particularly effective in electric traction where speed must increase as load decreases.

## Consulted sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-frequency-speed-d_456.html
- **electrical4u.com**: https://www.electrical4u.com/speed-control-of-dc-motor/

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-frequency-speed-d_456.html
- **electrical4u.com**: https://www.electrical4u.com/speed-control-of-dc-motor/
