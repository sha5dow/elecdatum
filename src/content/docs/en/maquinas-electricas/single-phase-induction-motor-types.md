---
title: "Single-phase induction motor types"
sidebar:
  label: "Single-phase induction motor types"
description: "Technical reference: Single-phase induction motor types"
keywords: ["single phase induction motor types capacitor", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "single-phase-induction"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Single-phase induction motors cover power ratings from fractions of a horsepower up to 10 hp / 7.5 kW, being the predominant choice in domestic and commercial applications where three-phase supply is not available. The rotor is always squirrel-cage, and the difference between types lies in the method used to create a rotating magnetic field during starting and, in some cases, during running.

## Operating principle of single-phase motor
The main single-phase winding produces a pulsating magnetic field that can be decomposed into two rotating fields of equal magnitude and opposite directions; this field alone does not generate starting torque (at standstill, the torques of the two fields cancel each other). To achieve starting, an auxiliary winding displaced by 90 electrical degrees is added, fed through an element that introduces a time phase shift of 30° to 50° (typically a capacitor or a resistor), thereby obtaining an elliptical rotating field sufficient to overcome inertia.

## Classification of single-phase induction motors
There are five main types of single-phase induction motors classified according to the starting method and the connection of the auxiliary winding: split-phase, capacitor-start, permanent split capacitor (PSC), dual-capacitor (start-run), and shaded pole. The following table summarizes their distinctive characteristics.

| Type | Start capacitor | Run capacitor | Starting torque (pu) | Representative applications |
| --- | --- | --- | --- | --- |
| Split-phase | No | No | 1.3‑2.0 / 130‑200 % | Fans, small centrifugal pumps, light blowers |
| Capacitor-start | Yes (disconnected at ~75 % speed) | No | 2.5‑3.5 / 250‑350 % | Compressors, conveyors, positive displacement pumps |
| Permanent split capacitor (PSC) | No | Yes (always connected) | 0.5‑1.0 / 50‑100 % | Forced draft fans, blowers, circulation pumps |
| Dual-capacitor | Yes (disconnected at ~75 % speed) | Yes (always connected) | 2.5‑3.5 / 250‑350 % | Hermetic compressors, air conditioning equipment, high torque and efficiency applications |
| Shaded pole | No | No | 0.3‑0.5 / 30‑50 % | Small equipment fans, bathroom extractors, very low power appliances |

## Comparative table of capacitances and capacitor voltages
Typical values of capacitors used in single-phase capacitor-type motors are detailed according to whether they operate only during starting or continuously.

| Parameter | Start capacitor | Run capacitor |
| --- | --- | --- |
| Capacitance | >70 µF (up to hundreds of µF) | 1.5‑100 µF |
| Rated voltages (VAC) | 125, 165, 250, 330 VAC | 250, 370, 440 VAC |
| Construction technology | Non-polarized aluminum electrolytic | Polypropylene film (low-loss polymer) |
| Service | Intermittent (only during starting) | Continuous |

## Characteristic torque-speed curve
The torque-speed curve of a single-phase induction motor presents four points of interest: starting torque or locked rotor torque (typically 130‑350 % of rated depending on type), pull-up torque, breakdown torque (200‑350 %), and rated torque at operating speed. Full-load torque can be calculated using the following formulas, depending on the unit system used.

> **T = 9550 · P<sub>kW</sub> / n<sub>r</sub>** *(rated torque in N·m, power in kW, speed in rpm)*
> **T = 5252 · P<sub>hp</sub> / n<sub>r</sub>** *(rated torque in lb·ft, power in hp, speed in rpm)*

Where:
- *T*: full-load torque
- *P<sub>kW</sub>*: rated power in kilowatts
- *P<sub>hp</sub>*: rated power in horsepower (hp)
- *n<sub>r</sub>*: rated rotational speed (rpm)

The high starting torque of capacitor-start motors is due to the large phase shift introduced by the capacitor in the auxiliary winding; these motors reach 75 % of rated speed before a centrifugal switch disconnects the capacitor, at which point the torque exhibits the minimum pull-up value and then rises to the breakdown torque.

## Selection and typical applications
The starting torque required by the load is the determining criterion in type selection: reciprocating compressors demand 200‑300 % of rated torque — choose capacitor-start or dual-capacitor — while centrifugal fans and low-inertia pumps require only 50‑80 % (split-phase or PSC). PSC motors, by keeping the run capacitor permanently connected, improve power factor (0.6‑0.8 at full load) and running efficiency, being the preferred choice in HVAC applications. Shaded pole motors are limited to powers below 1/4 hp / 186 W, with minimal cost and simple construction.

## Frequently Asked Questions (FAQ)
### What is the typical capacitance range of a start capacitor?
The start capacitor has a capacitance greater than 70 µF, with values often reaching several hundred microfarads, and is manufactured in voltage classes of 125, 165, 250 and 330 VAC.

### What maximum voltage does a standard run capacitor withstand?
Polypropylene film run capacitors are offered in rated voltages of 250, 370 and 440 VAC, with 440 VAC being the maximum common value in air conditioning applications.

### At what speed is the start capacitor disconnected?
The centrifugal switch disconnects the start capacitor at approximately 75 % of synchronous speed, after which the motor runs on only the main winding or the run capacitor if present.

### What is the typical starting torque of a split-phase motor?
A split-phase motor develops between 130 % and 200 % of rated torque at locked rotor, sufficient for ventilation loads but insufficient for high-inertia applications.

### Up to what power are permanent split capacitor (PSC) motors used?
PSC motors are typically manufactured up to 5 hp / 3.7 kW, covering most needs of fans, blowers, and centrifugal pumps in HVAC systems.

### What power factor does a single-phase induction motor have at full load?
The full-load power factor of single-phase induction motors is usually between 0.6 and 0.8, depending on the design, being higher in types with a permanent run capacitor.

## Consulted sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
