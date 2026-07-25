---
title: "0-10V voltage signal fundamentals"
sidebar:
  label: "0-10V voltage signal fundamentals"
description: "Technical reference: 0-10V voltage signal fundamentals"
keywords: ["0-10V voltage signal fundamentals control", "sistemas-control"]
category: "sistemas-control"
topic: "control-signals"
subcategory: "0-10v-signal-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The 0‑10 V signal is an analog control system that uses a variable DC voltage between 0 V and 10 V DC to transmit regulation setpoints. It constitutes one of the oldest and simplest methods for lighting dimming and has extended to all types of industrial actuators. Two standardized variants — sourcing current and sinking current — define the direction of energy flow, while the low loop current (≤ 1 mA) and high input impedance (100 kΩ) simplify wiring and coupling to programmable logic controllers (PLCs).

The DC control voltage between 0 V and 10 V DC proportionally represents the desired output level: 0 V corresponds to 0 % (off or minimum) and 10 V to 100 % of equipment capacity. In the sourcing standard, the controller delivers the voltage directly to the device; in the sinking standard, the ballast or driver generates the 10 V DC and the controller drains a small current to reduce the voltage to the command value. This second scheme provides fail-safe behavior: if the control wire is interrupted, the voltage remains at 10 V and the actuator goes to maximum, guaranteeing lighting or continuous operation.

## Technical specifications
The nominal input impedance of a 0‑10 V receiver is 100 kΩ ±20 kΩ, which limits the power dissipated to 1 mW when maximum voltage is applied. The following table summarizes the fundamental electrical parameters.

| Parameter | Value |
|---|---|
| Control voltage range | 0 to 10 V DC |
| Receiver input impedance | 100 kΩ ±20 kΩ |
| Power dissipated at 10 V | 1 mW ±0.2 mW |
| Control current (sinking mode) | ≤ 1 mA |
| Typical source resistance (Rs) | ≈ 200 Ω (depending on application) |
| Recommended PLC resolution | 12 to 16 bits |

In PLC applications, the signal is digitized using an A/D converter that at 12 bits offers a resolution of 2.44 mV (10 V / 4096), sufficient for most lighting and HVAC control loops.

## Control methods
There are two main methods to govern the 0‑10 V signal: analog resistive control and pulse width modulation (PWM). Resistive control uses a potentiometer or variable resistor that, together with a fixed source resistor, forms a voltage divider. The resulting control voltage is calculated using the expression

> **Vc = Vs × (Rc / (Rc + Rs))**

| Variable | Description | Unit |
|---|---|---|
| Vc | Returned control voltage | V |
| Vs | Supplied supply voltage | V |
| Rc | Variable control resistance | Ω |
| Rs | Fixed source resistance | Ω |

Varying Rc from 0 Ω (short circuit that forces Vc = 0 V) to a suitable maximum value yields any intermediate point. The PWM method, on the other hand, replaces the variable resistor with an electronic switch that opens and closes at high frequency; the proportion of time in the high state defines the equivalent average voltage, eliminating the need for precision components and allowing control of multiple luminaires in parallel.

## Wiring and installation considerations
The installation of a 0‑10 V loop requires a pair of conductors per control channel plus a common return. Although the low loop current (≤ 1 mA) makes the voltage drop in the cable practically negligible even with thin wires, capacitive coupling with nearby power cables can induce noise and cause flickering in LED luminaires. It is recommended to use shielded cable when signal runs parallel to AC lines for more than 30 m / 100 ft. The maximum distance without a repeater is usually limited to 100 m / 328 ft to avoid interference, although the standard does not set a strict limit.

## Typical applications
The 0‑10 V signal is widely used in lighting regulation — electronic ballasts for fluorescent lamps, LED drivers, and flat panels — speed control of fans and pumps, valve and damper actuators in HVAC systems, and as analog output of PLCs and process controllers. It is also common in theatrical and architectural lighting consoles, although digital protocols (DMX, DALI) have been displacing it in professional environments.

## Advantages and limitations
The simplicity of the system facilitates its understanding, implementation, and diagnosis. The extremely low control current allows the use of thin wire and on-site splices without significant losses. However, each control channel requires an independent wire, which in installations with dozens of luminaires forces the laying of expensive multi-conductor cables. Over long distances, capacitive coupling forces shielding and, in some cases, calibration of the receiver to compensate for voltage drop. Finally, the lack of a dedicated loop power supply makes it vulnerable to common-mode noise and does not offer automatic line fault detection except in sinking mode.

## Comparison with the 4‑20 mA signal
The 4‑20 mA current loop is the main industrial competitor of the 0‑10 V signal. While voltage is sensitive to ohmic drops and electromagnetic noise, current remains constant along the loop, allowing runs greater than 500 m / 1640 ft without degradation. The 4‑20 mA standard also offers wire break diagnosis (drop to 0 mA) and can power the sensor with the same pair of wires. In return, the 0‑10 V signal is easier to generate from a microcontroller or a potentiometer and does not require a precise current source. The choice between them depends on distance, electrical environment, and the need for fault detection.

## Frequently Asked Questions (FAQ)

### What is the 0-10 V signal and what is it used for?
It is an analog DC voltage signal that varies between 0 and 10 V DC and is used to transmit a setpoint value to actuators, mainly in dimmable lighting systems and motor control. At 10 V the device operates at 100 % and at 0 V it turns off or remains idle.

### What is the difference between sourcing and sinking current?
In sourcing mode, the controller delivers the 0 to 10 V voltage directly to the load. In sinking mode, the load generates 10 V DC and the controller sinks a small current to reduce the voltage. The latter is more common in lighting ballasts because it provides safety against wire breakage (the lamp turns on to maximum).

### What is the input impedance of a 0-10 V receiver?
The nominal impedance is 100 kΩ, with a tolerance of ±20 kΩ. This implies that at full scale only 0.1 mA flows, minimizing power consumption and voltage drop in the cables.

### Can a 0-10 V input be controlled via PWM?
Yes, by connecting a transistor or electronic switch between the control terminal and ground. A high-frequency PWM signal (≥ 1 kHz) emulates a variable resistor; the duty cycle defines the average voltage value. This technique is common in microcontroller-based controls and allows controlling several devices in parallel without precision resistors.

### What is the maximum cable length for a 0-10 V signal?
There is no standardized distance, but in practice it is recommended not to exceed 100 m / 328 ft with unshielded cable. Longer runs require shielded cable and possibly repeaters or converters to a current loop to avoid interference and flickering.

### Can a 0-10 V signal be converted to 4-20 mA?
Yes, there are specific signal conditioners that convert voltage to current, also providing galvanic isolation and noise filtering. This conversion is common when sending a PLC setpoint to an actuator located at a great distance or in environments with high electromagnetic noise.

## References
- **plcacademy.com**: https://www.plcacademy.com/plc-analog-input-output/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/process_control_-a-_measurement/signal_conditioners
