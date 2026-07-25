---
title: "Servo motor fundamentals and applications"
sidebar:
  label: "Servo motor fundamentals and applications"
description: "Technical reference: Servo motor fundamentals and applications"
keywords: ["servo motor fundamentals applications industrial", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "servo-motor-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

A servomotor is a rotary or linear actuator that allows precise control of angular or linear position, velocity, and acceleration in a mechanical system, constituting an essential element of a closed-loop servomechanism. Its ability to deliver full torque from zero speed sets it apart from other types of electric motors, making it the preferred choice for high-performance applications such as robotics, CNC machinery, and automated manufacturing.

## Operating Principle

The servomotor operates as a closed-loop servomechanism that uses position feedback to control its movement and final position. The input signal to the controller, whether analog or digital, represents the desired position of the output shaft. A position sensor, typically an encoder, measures the actual position of the shaft and sends this information to the controller. The latter compares the commanded position with the measured actual position, generating an error signal. The error signal is used to drive the motor in the direction necessary to reduce the difference to zero, stopping the motor at the exact demanded position. The most sophisticated servomotors use absolute encoders to infer shaft speed and employ variable frequency drives in combination with a PID control algorithm to achieve faster and more precise positioning.

## Components of a Servomotor

| Component | Function |
|---|---|
| Motor (DC, AC, or brushless) | Provides the torque and base speed of the system. |
| Feedback sensor | Measures the position, and often the speed, of the output shaft. It can be an incremental encoder, an absolute encoder, or a resolver. |
| Controller | Dedicated electronic module that compares the commanded position with the feedback, executes the control algorithm (e.g., PID), and generates the power signals for the motor. |
| Gear reducer | Set of gears (often planetary gears) that reduces motor speed and multiplies output torque, mounted at the shaft output. |
| Power electronics | Circuits that supply the necessary current and voltage to the motor in response to the controller signals. |

## Types of Servomotors

| Type | Main Characteristics |
|---|---|
| Brushed DC servomotor | The motor section is a brushed DC motor. Offers simple and economical control, but brushes require maintenance and generate wear. |
| Brushless servomotor | Uses a brushless DC (BLDC) or synchronous AC motor. Higher torque density, no brush maintenance, and better heat dissipation. It is the standard in modern industry. |
| AC servomotor | Generally permanent magnet synchronous motors. Predominate in high-power, high-dynamic performance industrial applications. |
| Linear servomotor | A linear actuator that produces straight-line motion instead of rotary motion, using the same closed-loop control principles. |

## Comparison: Servomotor vs. Stepper Motor

In terms of performance, the servomotor is the high-performance alternative to the stepper motor. The stepper motor has an inherent open-loop position control capability, as its movement is based on discrete steps, which in many cases avoids the need for an encoder and associated controller. However, this lack of feedback limits its maximum usable torque, as it must operate well below its capacity to avoid step loss and consequent positioning errors that would require restarting the system. The servomotor, in contrast, continuously monitors its position and regulates torque and speed to correct any deviation, allowing it to use the full capacity of the base motor and ensure accuracy under load. Although the encoder and controller represent an additional cost, in systems where a powerful motor is a significant fraction of the total cost, the performance optimization offered by the servomotor makes it the most advantageous solution.

## Applications of Servomotors

| Application | Control Description |
|---|---|
| Industrial robotics | Enables precise movement of joints in "pick and place" robots or manipulators, controlling the angle of each axis via PWM signals. |
| CNC machines | Closed-loop control ensures exact and repeatable positioning of spindles and work tables for machining operations. |
| Camera autofocus systems | A high-precision servomotor adjusts lens position based on image sharpness analysis to obtain a clear photograph. |
| Conveyor systems | Servomotors start and stop conveyor belts with high precision, bringing bottles or objects exactly to filling and packaging stations. |
| Solar tracking systems | Control the tilt angle of solar panels to follow the sun's path during the day, maximizing system energy efficiency. |
| Robotic vehicles | Continuous rotation servos drive wheels, providing the high torque needed for quick starts and stops, as well as precise speed control. |

## Fundamental Torque and Power Equation

The relationship between torque and power in a rotary electric motor is defined by equations derived from the physics of circular motion. The fundamental relationship in a servomotor dictates that torque is the active twisting force from 0% to 100% of operating speed, and the power developed is zero at zero speed.

In SI units, motor torque is calculated as:

> **T_Nm = (P_W * 9,549) / n**

Where:

| Variable | Meaning | Units |
|---|---|---|
| T_Nm | Motor torque | Newton-meter (Nm) |
| P_W | Power delivered by the motor | Watts (W) |
| n | Rotational speed | Revolutions per minute (rpm) |

In imperial units, one of the equivalent forms is:

> **T_ftlb = (P_hp * 5252) / n**

Where:

| Variable | Meaning | Units |
|---|---|---|
| T_ftlb | Motor torque | Pound-force foot (lb·ft) |
| P_hp | Power delivered by the motor | Horsepower (hp) |
| n | Rotational speed | Revolutions per minute (rpm) |

From the first formula it follows, for example, that an electric motor producing 0.75 kW (750 W) at a speed of 2000 rpm delivers a torque of 3.6 Nm (or 2.6 lb·ft).

## Reference Table: Power, Speed, and Motor Torque

The following table lists a selection of values relating power (in hp and kW) to the torque generated (in Nm and lb·ft) at different operating speeds (rpm).

| Power (hp) | Power (kW) | Torque at 3450 rpm (Nm) | Torque at 3450 rpm (lb·ft) | Torque at 1750 rpm (Nm) | Torque at 1750 rpm (lb·ft) | Torque at 1000 rpm (Nm) | Torque at 1000 rpm (lb·ft) | Torque at 500 rpm (Nm) | Torque at 500 rpm (lb·ft) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 0,75 | 2,1 / 1,5 | 18 / 1,5 | 4,1 / 3,0 | 36 / 3,0 | 7,1 / 5,3 | 63 / 5,3 | 14,2 / 10,5 | 126 / 10,5 |
| 2 | 1,5 | 4,1 / 3,0 | 37 / 3,0 | 8,1 / 6,0 | 72 / 6,0 | 14,2 / 10,5 | 126 / 10,5 | 28,5 / 21,0 | 252 / 21,0 |
| 5 | 3,7 | 10 / 7,6 | 91 / 7,6 | 20 / 15 | 180 / 15 | 36 / 26,3 | 315 / 26,3 | 71 / 52,5 | 630 / 52,5 |
| 10 | 7,5 | 21 / 15 | 183 / 15 | 41 / 30 | 360 / 30 | 71 / 53 | 630 / 53 | 142 / 105 | 1260 / 105 |
| 20 | 15 | 41 / 30 | 365 / 30 | 81 / 60 | 720 / 60 | 142 / 105 | 1260 / 105 | 285 / 210 | 2521 / 210 |
| 50 | 37 | 103 / 76 | 913 / 76 | 204 / 150 | 1801 / 150 | 356 / 263 | 3151 / 263 | 712 / 525 | 6302 / 525 |
| 100 | 75 | 207 / 152 | 1827 / 152 | 407 / 300 | 3601 / 300 | 712 / 525 | 6302 / 525 | 1425 / 1050 | 12605 / 1050 |

## Frequently Asked Questions (FAQ)

### What exactly is a servomotor?

It is an electromechanical actuator, rotary or linear, that is part of a closed-loop control system to achieve precise control of position, velocity, and acceleration of a mechanism.

### What is the main difference from a conventional DC motor?

The key difference is that a servomotor integrates a position sensor and a controller that allows exact angular positioning through feedback, while a conventional DC motor lacks this precision without an additional control system.

### Why is the torque of a servomotor maximum from zero speed?

Unlike combustion engines, electric servomotors generate their maximum torque at standstill, eliminating the need for a clutch and making them ideal for rapid starts and stops under load in vehicles and machinery.

### What is the function of an encoder in a servomotor?

The encoder is the sensor that measures the angular position (and speed) of the motor shaft in real time and sends this signal to the controller to close the control loop, thus allowing instantaneous correction of position error.

### In what real-world applications are servomotors used?

They are used in industrial robotics, CNC machine tools, camera autofocus systems, industrial conveyor belts, solar tracking systems, and military or exploration robotic vehicles.

### Is a stepper motor a type of servomotor?

No. Although both are used for positioning, a stepper motor typically operates in open loop (without feedback), moves in discrete increments, and has lower performance and accuracy under load than a closed-loop servomotor.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-hp-torque-rpm-d_1503.html
- **electrical4u.com**: https://www.electrical4u.com/servo-motor-applications-in-robotics-solar-tracking-system-etc/
