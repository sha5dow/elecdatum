---
title: "4-20 mA current signal fundamentals"
sidebar:
  label: "4-20 mA current signal fundamentals"
description: "Technical reference: 4-20 mA current signal fundamentals"
keywords: ["4-20mA current loop signal fundamentals", "sistemas-control"]
category: "sistemas-control"
topic: "control-signals"
subcategory: "4-20ma-signal-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The 4-20 mA current signal is the most widespread analog transmission standard in industrial instrumentation. In this loop, 4 mA corresponds to 0 % of the measurement range and 20 mA to 100 %, providing a robust, self-powered method with high noise immunity to communicate process variables between sensors, controllers, and actuators.

The standardized 4-20 mA signal represents a 16 mA span where 4 mA equals 0 % of the measurement scale and 20 mA equals 100 %. A field transmitter converts the process variable – temperature, pressure, flow, level, etc. – into a proportional current that circulates through a pair of conductors. The loop is typically powered with 24 V DC and, thanks to the live zero of 4 mA, the loop itself can energize the transmitter without the need for additional sources. The linear relationship between current and the measured magnitude allows any device inserted in the loop (indicator, recorder, PLC) to interpret the process value directly.

## Signal Characteristics
The 4-20 mA current loop operates with a useful range of 16 mA (from 4 to 20 mA) and allows fault detection when the current falls below 3,8 mA or exceeds 20,5 mA. This self-diagnostic capability is one of its greatest strengths. Currents outside the 3,8‑20,5 mA band are interpreted as fault conditions.

| Loop Current | System Status |
| --- | --- |
| < 3,8 mA / < 3,8 mA | Fault: open circuit, insufficient power supply, or transmitter off |
| 3,8 – 4 mA / 3,8 – 4 mA | Minimum valid signal (0 % of span) |
| 4 – 20 mA / 4 – 20 mA | Normal operating range |
| 20 – 20,5 mA / 20 – 20,5 mA | Maximum valid signal (100 % of span) |
| > 20,5 mA / > 20,5 mA | Fault: short circuit, overcurrent, or excess load |

Loop accuracy is not affected by voltage drops in the wiring, since the current is the same at all points in the circuit, allowing long cable runs.

## Advantages of the 4-20 mA Current Loop
4-20 mA loops can cover distances up to 1 500 m / 4 921 ft without loss of accuracy, provided the total loop resistance does not exceed the power supply limit. Advantages that consolidate this standard include:

- **Integrated power supply**: many transmitters are “loop‑powered”, i.e., they are powered directly from the loop, eliminating the need for additional wiring.
- **Noise immunity**: being a low-impedance circuit with twisted pair, the signal is resistant to electromagnetic interference.
- **Intrinsic fault detection**: any current below 3,8 mA or above 20,5 mA immediately alerts to a loop fault.
- **Simple conversion**: a precision resistor is enough to convert current into voltage (e.g., 250 Ω / 250 Ω produces 1‑5 V).
- **Interoperability**: supports the insertion of indicators, recorders, or I/P converters (3‑15 psi) powered by the loop itself.
- **Universal compatibility**: millions of devices from different manufacturers support 4‑20 mA, ensuring immediate integration.

## Loop Configurations: Active and Passive Devices
A 4-20 mA loop normally contains a single active device, which supplies a typical voltage of 24 V DC, and several passive devices. The active equipment (source or sinking) provides the energy, while the passive devices (two-wire transmitters, indicators, PLC inputs) modulate or read the current without supplying power.

| Device Type | Function | Typical Example |
| --- | --- | --- |
| Active (source) | Supplies the loop voltage and current | 24 V DC power supply, PLC analog output |
| Passive (loop‑powered) | Modulates the current according to the measured variable | Two-wire pressure transmitter |
| Passive (input) | Reads the current and converts it into engineering value | PLC analog input module, digital panel indicator |

A loop must contain only one active source. The most common configuration uses a two-wire transmitter (passive) powered by the analog input card of the control system, which acts as the active element.

## Wiring and Connection to PLC
The most common wiring configurations for 4‑20 mA transmitters are 2, 3, and 4 wires. Two-wire models concentrate power and signal on the same pair, simplifying installation and being the predominant choice in the field. Four-wire transmitters clearly separate the power supply (typically 120‑230 V AC) from the signal loop, used when the sensor demands high power.

| Configuration | Wires | Power Supply | Signal | Main Use |
| --- | --- | --- | --- | --- |
| 2-wire | 2 | Through the loop | 4‑20 mA current on the same wires | Pressure, temperature, level transmitters |
| 3-wire | 3 | Two power wires + one common wire for signal and 0 V | 4‑20 mA between signal wire and common | Some sensors with active electronics |
| 4-wire | 4 | Independent pair for power | Independent pair for the 4‑20 mA signal | Mass flow meters, analyzers, high-power sensors |

When wiring the analog input of a PLC, it is common to connect the transmitter positive to the +24 V terminal of the power supply, the negative to the analog input terminal, and add a shunt resistor if the module only accepts voltage. Many modules internally incorporate a fixed 250 Ω resistor to convert 4‑20 mA into 1‑5 V.

## Signal Scaling
Linear conversion of the 4‑20 mA current to engineering units is performed using an equation that employs the 16 mA span. The universal expression is:

> **EU = EU_min + ((I – 4) / 16) × (EU_max – EU_min)**

| Variable | Description | Typical Units |
| --- | --- | --- |
| EU | Resulting value in engineering units (temperature, pressure, flow, etc.) | °C / °F, bar / psi, m³/h, etc. |
| I | Loop current | mA |
| EU_min | Engineering value corresponding to 4 mA | °C / °F, bar / psi, etc. |
| EU_max | Engineering value corresponding to 20 mA | °C / °F, bar / psi, etc. |

When the signal enters a PLC, the A/D converter transforms the current (or the equivalent voltage) into a digital value of N bits. With 12-bit resolution (4 096 divisions), the sensitivity reaches approximately 0,0039 mA / 0,0039 mA per count; with 16 bits it reaches 0,00024 mA / 0,00024 mA.

## Integration with Control Systems
Analog input modules of PLCs convert the 4‑20 mA signal into a digital value with a typical resolution of 12 or 16 bits (4 096 to 65 536 divisions). These modules can directly power the loop (active mode) or receive the signal from an external source (passive mode). Ladder or structured text implementation includes scaling blocks that execute the described formula, delivering a process variable usable by PID loops, SCADA, or distributed control systems (DCS). Additionally, loop‑powered digital panel indicators, such as those from the DPM1‑A‑LP series, are inserted in series without external power and display the measured magnitude with IP65 protection.

## Frequently Asked Questions (FAQ)
### Why is 4 mA used as the minimum value instead of 0 mA?
The live zero of 4 mA allows distinguishing a process signal at its minimum point (0 %) from an open loop or power failure, providing continuous self-diagnostic capability. Moreover, those 4 mA provide the minimum energy to power the electronics of loop‑powered transmitters even when the process variable is at the bottom of the scale.

### How is a two-wire transmitter powered in a 4‑20 mA loop?
The transmitter receives power through the same pair that carries the signal. The active source of the loop (typically 24 V DC) delivers the necessary voltage, and the transmitter regulates the current consumption between 4 and 20 mA according to the measured variable.

### What is the maximum distance a 4‑20 mA loop can reach?
There is no fixed universal figure, but with 24 V DC and standard copper wire, distances up to 1 500 m / 4 921 ft are usually achieved, provided the total loop resistance does not exceed the maximum value the source can handle. The practical formula is: R_max (Ω) = (V_supply – V_min_transmitter) / 0,02 A.

### What happens if several devices are connected in series in the same loop?
Multiple passive devices (indicators, recorders, PLC inputs) can be inserted in series, since they all read the same current. However, the total resistance added by all of them must not exceed the limit the source can supply. Only one transmitter and one active source can exist.

### What is the difference between an active loop and a passive loop?
An active loop includes its own source that supplies the energy (e.g., a PLC output or an external source), while in a passive loop the power comes from the device to which the transmitter is connected. In practice, the analog input card of the control system usually plays the role of the active element.

### How is the 4‑20 mA signal converted into a pneumatic output?
An I/P converter (current to pressure) powered by the loop itself is used, which linearly transforms the 4‑20 mA range into a 3‑15 psi / 0,21‑1,03 bar pneumatic signal, used to govern control valves in plants with pneumatic actuators.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-terms-d_666.html
- **plcacademy.com**: https://www.plcacademy.com/plc-analog-input-output/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/process_control_-a-_measurement/digital_panel_meters/analog_input
