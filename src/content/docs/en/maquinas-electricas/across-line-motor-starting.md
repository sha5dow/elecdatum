---
title: "Across-the-line motor starting"
sidebar:
  label: "Across-the-line motor starting"
description: "Technical reference: Across-the-line motor starting"
keywords: ["across the line motor starting current", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "across-line-starting"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Across-the-line starting, also known as direct on line starting or DOL starting, is a starting method for three-phase induction motors in which full line voltage is applied to the motor terminals at the instant the contactor closes. It is the simplest and most widespread technique for small and medium power squirrel-cage motors.

At rest, the back electromotive force (back EMF) of the motor is zero. When full line voltage is applied to the stator, the current is limited only by the winding impedance and the locked rotor resistance. This starting current generates a rotating magnetic field that induces large currents in the rotor, producing a high starting torque that accelerates the motor to its rated speed. As the motor gains speed, the back EMF increases and the current progressively decreases until it reaches the steady-state value.

## Main characteristics

The inrush current in direct on line starting ranges from 5 to 10 times the motor rated current. The starting torque typically reaches 1.5 to 3 times the full load rated torque. The acceleration time depends on the inertia of the coupled load and the torque-speed characteristic of the motor. During the starting transition, a transient voltage drop occurs in the supply network proportional to the demanded current.

| Parameter | Typical value |
| --- | --- |
| Starting current (multiple of Iₙ) | 5–10 p.u. |
| Starting torque (multiple of Tₙ) | 1.5–3 p.u. |
| Allowable voltage drop per IEC 60038 | ≤ 4 % |
| Voltage applied at start | 100 % of line voltage |
| Typical starting duration for motors < 15 kW | 0.5–5 s |
| Typical starting duration for motors > 15 kW / 20 hp | 3–15 s |

## Advantages

- Maximum constructive simplicity: only requires main contactor and overload relay.
- Lower acquisition and installation cost compared to electronic starters or variable frequency drives.
- Full starting torque available from the first instant, suitable for low inertia loads.
- High reliability due to minimum number of components.
- Occupies little space in the electrical panel.
- Easy maintenance and fault diagnosis.

## Disadvantages

- High inrush current that can cause voltage drops in weak networks.
- Sudden mechanical stresses on couplings, belts, gears, and bearings.
- Water hammer in pumping systems if damping valves are not installed.
- Impossibility of controlling the acceleration ramp.
- Not suitable for machines that require progressive starting or strict current limitation.
- Can damage products in processes sensitive to sudden accelerations (e.g., bottle transport, textiles).

## Typical applications

It is used in low and medium power squirrel-cage motors, typically up to 5.5 kW / 7.5 hp in domestic networks and up to 15 kW / 20 hp in industrial environments with a distribution transformer of sufficient capacity. It is common in centrifugal fans, small hydraulic pumps, piston compressors with discharge valve, short conveyor belts, circular saws, and air extractors that do not require soft starting. It is also used in applications where current peaks do not affect other equipment connected to the same busbar.

## Components of the DOL starter

| Component | Function |
| --- | --- |
| Thermomagnetic circuit breaker (MCCB) | Protection against short circuits and long-duration overloads in the supply line. |
| Main contactor | Closing and opening of the three power poles; withstands starting current and rated current. |
| Thermal or electronic overload relay | Motor protection against prolonged overloads using trip curve class 10, 20, or 30. |
| Start pushbutton (NO) | Momentary closing that energizes the contactor coil. |
| Stop pushbutton (NC) | Opening of the control circuit to stop the motor. |
| Auxiliary holding contact | Feedback in parallel with the start pushbutton to keep the coil energized. |
| Phase sequence relay (optional) | Prevents accidental reversal of rotation direction. |
| Motor circuit breaker (optional, instead of MCCB + relay) | Integrated short-circuit and overload protection in a single compact device. |

## Connection diagram

The power circuit connects the three line phases (L1, L2, L3) to the motor terminals (U, V, W) through the load break switch, the three-pole contactor, and the overload relay. The control circuit is supplied from two phases or via a control transformer and includes the stop pushbutton (NC) in series with the start pushbutton (NO) and the contactor coil. The NO auxiliary contact of the contactor is connected in parallel with the start pushbutton to establish electrical interlocking. Opening of the overload relay disconnects the contactor coil, causing the main contacts to drop out and stopping the motor.

> **Simplified control circuit:** L1 → Stop NC → Start NO → Coil K1 → Thermal relay NC → L2

## Starting current formula

The inrush current in direct on line starting is estimated from the motor input impedance with the rotor locked.

> **Iₐ = Vₗ / Zₗ**

| Symbol | Meaning | Unit |
| --- | --- | --- |
| Iₐ | Starting current per phase | A |
| Vₗ | Line-to-line voltage | V |
| Zₗ | Equivalent phase impedance with locked rotor | Ω |

In practical terms, the ratio with respect to rated current is used:

> **Iₐ = k · Iₙ**

where **k** typically ranges from 5 to 10 for standard motors and can reach 15 for high-efficiency motors.

## Comparison with other starting methods

| Method | Starting current (% of DOL) | Starting torque (% of DOL) | Relative cost | Complexity |
| --- | --- | --- | --- | --- |
| Direct on line (DOL) | 100 % | 100 % | 1 p.u. | Minimal |
| Star-delta starting | ≈ 30 % | ≈ 25 % | 1.3–1.8 p.u. | Low–Medium |
| Electronic soft starter | Adjustable (20–100 %) | Adjustable (20–100 %) | 2–3 p.u. | Medium |
| Variable frequency drive | 50–100 % | 100 % available from low speed | 3–5 p.u. | High |
| Autotransformer starting | Adjustable (40/65/80 % typical) | Proportional to square of reduced voltage | 2–4 p.u. | Medium |

## Frequently Asked Questions (FAQ)

### What is the typical inrush current value in a direct on line start of a standard induction motor?
The typical inrush current ranges from 5 to 10 times the full load rated current, and can reach up to 15 times in high-efficiency motors with low stator resistance design.

### How much starting torque does a motor deliver with DOL starting compared to rated torque?
It delivers between 1.5 and 3 times the rated torque. This value depends on the rotor design; double cage or deep bar rotors exhibit higher starting torques.

### What maximum allowable voltage drop does IEC 60038 establish during starting?
The maximum recommended voltage drop at the common service point is 4% of the nominal voltage. At motor terminals, larger drops are tolerated during the brief acceleration interval.

### What is the duration of a direct on line start for a 7.5 kW / 10 hp motor coupled to a centrifugal pump?
The typical duration is between 1 and 3 seconds, provided the moment of inertia of the pump does not exceed the value accepted by the motor manufacturer.

### Why is a 30 kW / 40 hp motor rarely started with DOL?
Because the starting current, on the order of 600 to 900 A in a 400 V / 460 V network, can cause a voltage drop greater than 10% in distribution transformers of limited capacity, affecting other users.

### How does the trip class of the overload relay influence protection during direct on line starting?
Class 10 or 20 defines the maximum time the relay can withstand a current of 6 times the rated current without tripping. For long starts (above 10 seconds), class 30 is required to avoid nuisance tripping.

## References consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/direct-online-starter-or-dol-starter/

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/direct-online-starter-or-dol-starter/
