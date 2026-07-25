---
title: "Thermal overload relay selection"
sidebar:
  label: "Thermal overload relay selection"
description: "Technical reference: Thermal overload relay selection"
keywords: ["thermal overload relay selection motor", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "relays"
subcategory: "overload-relay"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The thermal overload relay is a protection device that disconnects the motor when the current draw exceeds the rated value for a time sufficient to generate dangerous heating. Its main function is to prevent damage to winding insulation due to prolonged overloads, frequent starts, or abnormal conditions such as rotor lock, low voltage, or phase loss.

The thermal relay bases its operation on the heating effect of current. A bimetal strip, heated directly or indirectly by the motor current, deforms proportionally to the accumulated energy. When the temperature reaches the trip threshold, the deformation releases a latching mechanism that opens an auxiliary contact in series with the contactor coil, interrupting motor power. The trip time follows an inverse characteristic: the higher the overcurrent, the shorter the actuation time.

After a trip, the bimetal must cool before the relay can be reset manually or automatically, providing a recovery time necessary for heat dissipation in the motor.

## Characteristic Thermal Trip Curve
The curve defines the relationship between the current flowing through the relay (expressed in multiples of the setting current) and the trip time. The typical form is based on an adiabatic heating equation:

> **t = k / (I² – 1)**

| Variable | Meaning |
|----------|---------|
| t | Trip time (s) |
| k | Thermal constant depending on trip class and relay design |
| I | Actual current in per unit of the setting current |

The value of k is determined experimentally for each trip class, establishing time limits at different overloads according to international standards.

## Selection Criteria
The choice of the appropriate thermal relay is based on these parameters:

| Criterion | Description | Numerical Example |
|---|---|---|
| Setting current (Ir) | Must cover the motor rated current, as shown on its nameplate. The relay range must include that value. | Motor 10 A / 10 A → relay with range 8–12.5 A / 8–12.5 A |
| Trip class | Determined by the application (see following table). | Heavy compressor → class 20 or 30 |
| Insulation voltage and short-circuit current | The relay must withstand the circuit rated voltage and the starter short-circuit level. | 690 V AC / 690 V AC |
| Ambient temperature compensation | Compensated relays maintain the trip point nearly constant between –20 °C / –4 °F and +60 °C / 140 °F. | — |
| Number of poles | Normally three-pole for three-phase motors; single-phase or phase-loss detection versions also available. | Three-phase motor → three-pole relay |
| Mounting type | Direct on contactor, independent on DIN rail or plate. | — |

## Trip Classes per IEC 60947-4-1
Standardized classes define the maximum trip time at 7.2 times the setting current, starting from cold state.

| Class | Trip time at 7.2 × Ir (s / s) | Typical applications |
|-------|----------------------------------|----------------------|
| 10A | < 2 s / < 2 s | Very low inertia loads, small centrifugal pumps |
| 10 | 2 s / 2 s – 10 s / 10 s | General light applications, fans, standard pumps |
| 20 | 6 s / 6 s – 20 s / 20 s | Machinery with heavy starting, piston compressors, long conveyor belts |
| 30 | 9 s / 9 s – 30 s / 30 s | Very prolonged starts, high inertia fans, crushers |

[VERIFY] Exact values may vary by manufacturer and must be verified against the applicable IEC 60947-4-1 standard.

## Setting the Trip Current
The adjustment is made via a graduated dial that shifts the bimetal anchor point or modifies the trip spring tension. The setting current (Ir) is calculated with the expression:

> **I_set = I_n × SF**

| Symbol | Quantity | Unit |
|--------|----------|------|
| I_set | Relay setting current | A / A |
| I_n | Motor full-load rated current (nameplate) | A / A |
| SF | Service factor (typically 1.0 or 1.15) | — |

For motors with service factor 1.15, the relay is set at 115 % / 115 % of the rated current, ensuring it does not trip in the permissible continuous overload zone. If the relay does not have temperature compensation, an additional correction factor must be applied when the ambient temperature differs significantly from 40 °C / 104 °F.

## Protection Against Abnormal Conditions
The thermal overload relay, complemented by a differential trip in some models, covers the following situations:

| Condition | Effect on the motor | Relay action |
|---|---|---|
| Mechanical overload | Current increase proportional to load | Bimetal heating and trip according to thermal curve |
| Rotor lock | Permanent starting current (600 % / 600 % to 700 % / 700 % of In) | Fast trip due to high dissipated energy |
| Low supply voltage | Current increase to maintain motor torque | Trip due to sustained overcurrent |
| Phase loss (single-phasing) | Disparate current in phases, severe overheating | Differential trip due to imbalance between bimetal elements (in relays with phase-loss sensitivity) |
| Voltage imbalance (>2 % / 2 %) | Negative-sequence currents generating additional heat | Trip due to asymmetric bimetal heating |
| Frequent starts or restarts after micro-interruption | Heat accumulation without sufficient cooling time | Thermal memory of bimetal shortens trip time on successive restarts |

## Frequently Asked Questions (FAQ)

### How high can the starting current of an induction motor reach at the moment of starting?
The starting current can reach 600 % / 600 % of the full-load rated current, equivalent to 6 or 7 times its value, due to maximum slip when the rotor is at standstill.

### Within what time does the starting current drop to approximately 500 % / 500 % of rated?
The current falls to around 500 % / 500 % in about 12 s / 12 s, at which point the motor reaches close to 80 % / 80 % of synchronous speed.

### What slip range does an asynchronous motor exhibit during normal operation?
The slip at steady state is typically between 1 % / 1 % and 3 % / 3 %, depending on the load level and motor design.

### What is the main cause of overheating that activates thermal protection?
Mechanical overload is the most frequent cause, as it forces the motor to draw a current higher than rated, directly detected by the thermal relay.

### What happens to the current in the healthy phases when one phase is lost in a three-phase system?
The current in the two remaining phases increases to a value between 150 % / 150 % and 200 % / 200 % of rated current, causing rapid heating that the relay interprets as overload.

### How does ambient temperature affect the trip point of a relay without thermal compensation?
A 10 °C / 18 °F change in ambient temperature can shift the trip threshold by approximately 10 % / 10 %, advancing or delaying protection depending on the direction of the change.

## References
- **electrical4u.com**: https://www.electrical4u.com/motor-thermal-overload-protection/
