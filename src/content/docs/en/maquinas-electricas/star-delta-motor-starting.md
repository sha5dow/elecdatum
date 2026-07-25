---
title: "Star-delta motor starting"
sidebar:
  label: "Star-delta motor starting"
description: "Technical reference: Star-delta motor starting"
keywords: ["star delta starter motor circuit", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "star-delta-starting"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Star-delta starting is a reduced-voltage starting method for three-phase asynchronous motors. During start-up the stator is connected in star (Y) and, once the motor reaches approximately 80% of its rated speed, it is switched to the delta (Δ) configuration. The starting current is limited to about 33% of the direct-on-line starting current, which reduces the electrical and mechanical stress on the supply network and the driven machine.

In the star connection the voltage applied to each phase winding is equal to the line voltage divided by √3 (≈ 0.58 VL). Since the phase current is proportional to the phase voltage, the line current drawn in star is one third of the current that the same motor would draw if started directly in delta. A timer controls the interval in star; when the rotor reaches sufficient speed (about 80% of rated speed), the circuit automatically switches to delta. In the delta position each winding receives the full line voltage and the motor delivers its rated torque.

## Components
A standard automatic star-delta starter consists of the following:

| Component | Function |
|---|---|
| Main contactor (KM1) | Supplies the motor in delta |
| Star contactor (KM2) | Closes the star connection during start-up |
| Delta contactor (KM3) | Acts together with KM1 to close the delta connection |
| Overload relay (F1) | Protects against prolonged overcurrents |
| Timer (K1) | Sets the star connection duration |
| Start/stop pushbuttons | Control the start and stop command |

Additionally, the contactors incorporate mechanical and electrical interlocks that prevent simultaneous star and delta closing.

## Connection diagram
The power circuit starts from the three-phase network (L1, L2, L3) and reaches the motor through the three contactors. During start-up the star contactor (KM2) joins the winding ends U2, V2, W2, while KM1 supplies the beginnings U1, V1, W1. After the timer elapses, KM2 opens and KM3 closes, connecting each winding between two phases: U1‑W2, V1‑U2, W1‑V2, forming the delta.

```
      L1       L2       L3
       │        │        │
       ├─── KM1 ────────┤
       │                │
       │   U1  V1  W1  │
       │                │
       └─── KM2 (Y) ────┘
                  U2,V2,W2
                  
      Switched to Δ:
       L1       L2       L3
       │        │        │
       ├─── KM1 ────────┤
       │                │
       │ U1──┐ ┌──V1──┐ │
       │     │ │      │ │
       │     W2      U2 │
       │                │
       └── V2 ── W1 ────┘
```

The control circuit includes the timer, the auxiliary contacts of the contactors and the overload relay coil to perform the star → delta sequence automatically.

## Starting characteristics

| Parameter | Typical value |
|---|---|
| Starting current (relative to direct-on-line starting) | 33% (≈ 1/3) |
| Starting torque (relative to direct-on-line starting) | 33% (≈ 1/3) |
| Switching speed | ≈ 80% of rated speed |
| Initial voltage per phase | 58% of line voltage |
| Star connection start time | Adjustable with timer (typ. 5‑15 s) |
| Speed example: 4‑pole motor, 50 Hz, 1 500 min⁻¹ / 1 500 rpm → switching at 1 200 min⁻¹ / 1 200 rpm |

The starting torque, proportional to the square of the phase voltage, is reduced to (1/√3)² = 1/3 of the direct-on-line torque. The line starting current follows the same reduction, since the impedance per phase is constant.

## Advantages
- Starting current reduced to 33% of direct-on-line starting, avoiding excessive voltage drops on the network.
- No electronic components or resistors that generate heat, increasing the starter efficiency.
- The starter is economical compared to variable frequency drives or soft starters.
- Produces a moderate starting torque, sufficient for applications with centrifugal load where high breakaway torque is not required.
- The star-delta switching is a widely standardized method and easy to implement with standard contactors.

## Disadvantages
- The starting torque is also reduced to one third, so it is not suitable for loads with high resistive torque at start-up.
- During the transition from star to delta a brief current peak (re‑insertion spike) occurs that can cause disturbances on the network.
- The motor must have its six winding terminals accessible and be suitable for star-delta connection (normally designed to operate in delta at the line voltage).
- The start time is longer than direct-on-line starting, which can increase motor heating if the timer is not correctly adjusted.
- The installation requires three contactors, an overload relay and a timer, increasing the volume and wiring of the electrical cabinet.

## Typical applications
Star-delta starting is used in machines where the resistive torque increases with speed, so that a starting torque of about one third of the rated torque is sufficient to accelerate the load. Some examples:
- Centrifugal compressors
- Centrifugal pumps
- Large fans
- Blowers
- Conveyor belts starting unloaded
- Crushers and mills with hydraulic coupling allowing partial disengagement

It is not suitable for loads such as heavily loaded conveyor belts, bucket elevators or machinery requiring maximum torque from standstill.

## Formulas and calculations
The voltage reduction in star leads to the fundamental current and torque relationships.

**Line current in star start (IY) versus delta start (IΔ):**

> \mathbf{I_Y = \frac{V_L}{\sqrt{3}\,Z} \quad ; \quad I_\Delta = \frac{\sqrt{3}\,V_L}{Z} \quad \Rightarrow \quad \frac{I_Y}{I_\Delta} = \frac{1}{3}}

**Starting torque in star (TY) versus delta start (TΔ), with T ∝ Vphase²:**

> \mathbf{T_Y \propto \left( \frac{V_L}{\sqrt{3}} \right)^2 = \frac{V_L^2}{3} \quad ; \quad T_\Delta \propto V_L^2 \quad \Rightarrow \quad \frac{T_Y}{T_\Delta} = \frac{1}{3}}

| Variable | Meaning | Unit |
|---|---|---|
| VL | Line voltage of the network | V |
| Vphase | Voltage across each winding | V |
| Z | Impedance per phase at standstill | Ω |
| IY | Line current drawn in star | A |
| IΔ | Line current drawn in direct delta start | A |
| TY | Starting torque in star connection | N·m / lb·ft |
| TΔ | Starting torque in direct delta connection | N·m / lb·ft |

**Numerical example:** If a motor draws 150 A in direct starting, in star it will demand approximately 150 A / 3 = 50 A from the network. If the direct starting torque is 300 N·m / 221 lb·ft, the torque in star is reduced to about 100 N·m / 74 lb·ft.

## Frequently Asked Questions (FAQ)
### What is the starting current of a star-delta starter compared to direct-on-line starting?
The starting current in star is approximately 33% (1/3) of the current that the same motor would draw with direct on-line starting in delta, i.e. if it draws 150 A directly, it will draw about 50 A in star.

### How much is the starting torque reduced with the star-delta method?
The starting torque is reduced to 33% (1/3) of the direct starting torque. In round numbers, a motor that develops 90 N·m / 66 lb·ft in direct starting will generate about 30 N·m / 22 lb·ft in star.

### At what speed does the switching from star to delta occur?
The switching is typically set when the motor reaches 80% of its rated speed. For a 4‑pole motor at 50 Hz (1 500 min⁻¹ / 1 500 rpm), the transition occurs around 1 200 min⁻¹ / 1 200 rpm.

### What maximum torque can a star-delta starter overcome?
The motor only delivers one third of the direct starting torque, so it can only overcome loads whose resistive torque at start-up does not exceed that value. With a direct torque of 100 N·m / 74 lb·ft, the useful torque in star will be about 33 N·m / 24 lb·ft.

### How much voltage does each winding receive during the star stage?
Each winding receives the line voltage divided by √3, i.e. approximately 58% of the network voltage. For a 400 V network, each motor phase sees 230 V during start-up.

### What is the typical duration in star?
The timer is adjusted according to the inertia of the load, and the star connection start time normally ranges between 5 and 15 seconds.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/star-delta-starter/
