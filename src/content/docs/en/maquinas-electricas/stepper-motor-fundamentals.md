---
title: "Stepper motor fundamentals"
sidebar:
  label: "Stepper motor fundamentals"
description: "Technical reference: Stepper motor fundamentals"
keywords: ["stepper motor fundamentals types", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "stepper-motor-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A stepper motor is a brushless DC electric motor that converts a train of electrical pulses into discrete and precise angular displacements of the shaft. Unlike conventional DC motors, the rotor advances a fixed angle — called the step — for each control pulse, allowing the shaft to be positioned without the need for a feedback sensor. The static holding torque and the ability to maintain position with current consumption are distinctive characteristics of this machine.

The operating principle is based on sequential magnetic attraction between a toothed rotor (made of soft iron, permanent magnet, or a combination of both) and a stator composed of several electromagnets grouped into phases. When a phase is energized, the rotor teeth align with the generated magnetic field, reducing the reluctance of the magnetic circuit. When the next phase receives current, the rotor rotates to align with the new field, producing an elementary angular movement.

In the classic example of a motor with 25 teeth and 4 phases, each energization sequence produces a rotation of 3,6°. To complete one revolution, 100 steps are required. The fundamental relationship between the step angle and the number of steps per revolution is:

> **θ = 360° / N**

| Variable | Description | Unit |
| --- | --- | --- |
| θ | Step angle | ° (degrees) or rad |
| N | Number of steps per revolution | Dimensionless |

The most common standardized values in the industry are 200 steps/rev (1,8° / 0,0314 rad) and 400 steps/rev (0,9° / 0,0157 rad).

## Types of stepper motors
The main classification distinguishes three construction types, each with different torque, step, and magnetic behavior characteristics.

| Type | Rotor construction | Typical holding torque | Typical step angle | Advantages | Limitations |
| --- | --- | --- | --- | --- | --- |
| Permanent magnet (PM) | Multipolar permanent magnet | 0,02 – 0,4 N·m / 2,8 – 56,7 oz·in | 7,5° – 15° / 0,131 – 0,262 rad | Simple control electronics, holding torque when power is disconnected | Large step, low resolution |
| Variable reluctance (VR) | Toothed soft iron, no magnet | 0,05 – 1,0 N·m / 7,1 – 141,6 oz·in | 15° / 0,262 rad | Robust construction, high speed | No holding torque in absence of current, higher torque ripple |
| Hybrid (HY) | Combination of permanent magnet and soft iron teeth | 0,1 – 5,0 N·m / 14,2 – 708 oz·in | 0,9° – 1,8° / 0,0157 – 0,0314 rad | High torque in small size, fine step, excellent torque/volume ratio | Higher cost, requires more sophisticated control |

Stepper motors fall within the category of special electric motors, as collected in the general classifications of electrical machines.

## Torque and speed
The torque-speed behavior of a stepper motor is defined by three fundamental parameters:

- **Holding torque:** is the maximum static torque that the motor can exert to keep the shaft locked with phases energized at rated current. It represents the starting point of the torque curve.
- **Pull-in torque:** maximum torque with which the motor can start without losing steps, starting from zero speed and following the acceleration ramp.
- **Pull-out torque:** maximum torque that the motor can deliver at a given speed without losing synchronization. It defines the stable operating curve.

In all electric motors, the relationship between torque, power and speed follows the general equation:

> **T = 9550 · P / n**

where *T* is expressed in N·m, *P* in kW and *n* in rpm. In imperial units the equivalent expression is:

> **T = 5252 · P / n**

with *T* in lb·ft, *P* in hp and *n* in rpm. In stepper motors the torque-speed profile differs from the induction motor: torque decreases significantly as speed increases, and the holding torque at low speeds is usually several times higher than that available in the pull-out region near maximum speed.

| Torque type | Definition | Dependence |
| --- | --- | --- |
| Holding torque | Static torque with phases energized at rated current | Phase current, motor type |
| Pull-in torque | Maximum synchronized starting torque | Load inertia, acceleration ramp |
| Pull-out torque | Maximum torque at constant speed without loss of steps | Rotation speed, supply voltage |

A typical NEMA 17 stepper motor offers a holding torque of **0,45 N·m / 63,7 oz·in** at 2 A per phase, and can deliver a dynamic torque of **0,2 N·m / 28,3 oz·in** at 500 rpm.

## Modes of operation and control
The resolution and smoothness of movement depend on the phase excitation mode:

| Operation mode | Steps per revolution (1,8° motor) | Current at rest | Characteristic |
| --- | --- | --- | --- |
| Full step (1 phase) | 200 | High (one phase energized) | Rated torque, high vibration |
| Full step (2 phases) | 200 | High (two phases energized) | Higher torque (+40 %) and stiffness |
| Half step (1‑2 phases) | 400 | Variable | Double resolution, lower vibration |
| Microstep 1/4 | 800 | Reduced (PWM control) | Smoother movement, reduced torque |
| Microstep 1/8 | 1 600 | Reduced (PWM control) | High angular resolution |
| Microstep 1/16 | 3 200 | Reduced (PWM control) | Ideal for CNC and 3D printing |

The winding configuration also defines the control strategy:

| Configuration | Number of wires | Switching | Remarks |
| --- | --- | --- | --- |
| Bipolar | 4 | H-bridge per phase | Higher torque per volume |
| Unipolar (6 wires) | 6 | Simple switching transistors | Allows using only half coil or full coil |
| Unipolar (8 wires) | 8 | Flexible, series or parallel connection | Maximum voltage and current flexibility |

The combination of microstepping and current control allows reaching resolutions below **0,01° / 0,00017 rad** per step in hybrid motors with advanced driver.

## Advantages and limitations
**Main advantages:**
- Precise open-loop positioning, no encoder needed.
- High torque at low speeds, ideal for locking applications.
- Fast response to start and stop pulses.
- Excellent position repeatability, on the order of **±0,05° / ±0,0009 rad** under rated conditions.
- Low cost of the complete system (motor + driver) compared to servomotors with equivalent performance.

**Limitations:**
- Mechanical resonance at certain speeds if damping is not implemented.
- Loss of steps if the pull-out torque is exceeded or the acceleration ramp is inadequate.
- Constant energy consumption even at rest, with typical efficiencies of **50 % to 70 %**.
- Limited maximum speed, usually below **2000 rpm**.
- Appreciable heating when holding torque is maintained continuously.

## Applications
Stepper motors are used in all those systems that demand discrete and repeatable movements without position feedback:

- **3D printing and desktop CNC:** extruders, X/Y/Z axes.
- **Educational robotics and light articulated arms:** joint control.
- **Computer peripherals:** scanners, laser and inkjet printers.
- **Medical equipment:** peristaltic pumps, dispensers, positioning tables.
- **Industrial automation:** control valves, liquid dosing, low-inertia pick-and-place systems.

## Frequently Asked Questions (FAQ)
### What is the typical step angle of a stepper motor?
The most common angle is 1,8° / 0,0314 rad, equivalent to 200 steps per revolution. Motors of 0,9° / 0,0157 rad (400 steps/rev) are also manufactured for higher resolution, and economical versions of 7,5° / 0,131 rad (48 steps/rev).

### What holding torque does a standard NEMA 17 stepper motor provide?
A typical NEMA 17 provides 0,45 N·m of holding torque (63,7 oz·in) with rated currents from 1,5 A to 2 A per phase. High-power models can reach 0,65 N·m / 92,1 oz·in.

### What is the practical maximum speed of a stepper motor?
The maximum speed without load usually reaches 1000 rpm to 2000 rpm. Under load, the useful torque drops drastically above 500 rpm; a 1,8° hybrid motor can lose 70 % of its holding torque at 1000 rpm.

### How many wires does a bipolar stepper motor have?
A bipolar motor has 4 output wires, corresponding to the two stator windings. Unipolar versions have 5, 6 or 8 conductors, depending on the presence of center taps in the coils.

### What resolution is obtained with 1/16 microstepping?
With a motor of 1,8° per full step, the 1/16 microstep interpolation divides the base step by 16, resulting in 0,1125° / 0,00196 rad per microstep and a total of 3200 steps per revolution.

### What energy efficiency does a typical stepper motor have?
Typical efficiency ranges between 50 % and 70 %, since the motor consumes current even to maintain holding torque at rest. In applications that prioritize energy savings, reduced current modes can be implemented during inactivity.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-motor-types-classification-and-history-of-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
