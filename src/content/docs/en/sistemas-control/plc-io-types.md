---
title: "PLC input output types"
sidebar:
  label: "PLC input output types"
description: "Technical reference: PLC input output types"
keywords: ["PLC digital analog input output types", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "plc-io-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Programmable logic controllers (PLCs) interact with the process through inputs and outputs (I/O) that can be classified into two main families: digital (discrete) and analog. Digital signals have only two logic states, while analog signals vary continuously within a range. The choice of I/O type depends on the nature of the sensor or actuator, the required precision, and the environmental conditions.

## Digital Inputs and Outputs

Discrete digital inputs operate with two defined voltage levels, typically 0 V (low state) and 24 V DC (high state) in industrial applications. A digital signal is a binary signal with two distinct states — 1 (ON) and 0 (OFF) — and is used to detect discrete events such as limit switches, pushbuttons, or presence detectors. Digital outputs allow governing on/off actuators: contactors, solenoid valves, lamps, or motor starters. Depending on the nature of the load and the switching frequency, different types of output stages are used, whose characteristics are summarized in the following table.

| Output type | Main advantage | Typical maximum current per point | Common application |
| --- | --- | --- | --- |
| Electromechanical relay | Galvanic isolation, suitable for AC and DC | 2 A / 2 A (conversion not applicable) | Low-frequency resistive and inductive loads |
| Transistor (open collector) | Fast switching, long service life | 0,5 A / 0,5 A (not applicable) | DC loads with high cycle frequency (up to 1 kHz / 1 kHz) |
| Triac (solid state for AC) | Contactless switching, silent | 1 A / 1 A (not applicable) | AC loads with frequent operations (up to 25 Hz / 25 Hz) |

## Analog Inputs and Outputs

The most widespread analog current signal is the 4‑20 mA loop, which uses a useful range of 16 mA (20 mA − 4 mA) to represent the process variable from 0% to 100%. Analog inputs convert continuous physical magnitudes (temperature, pressure, flow, level) into digital numbers that the PLC can process. In addition to the current loop, voltage signals of 0‑10 V, ±10 V, and to a lesser extent, 0‑5 V are used. Analog outputs generate a continuous signal — typically 4‑20 mA or 0‑10 V — to position proportional valves, regulate variable frequency drives, or send setpoints to other controllers.

| Input signal | Nominal range | Typical input impedance | Note |
| --- | --- | --- | --- |
| Current (active or passive) | 4‑20 mA / 4‑20 mA (unit without conversion) | 50‑500 Ω / 50‑500 Ω | Detects wire break if current falls below 3,6 mA |
| Unipolar voltage | 0‑10 V DC / 0‑10 V DC | > 10 kΩ / > 0,01 MΩ | Supports voltage divider to adapt high signals |
| Bipolar voltage | −10 to +10 V DC / −10 to +10 V DC | > 10 kΩ / > 0,01 MΩ | Used in servo positioners and motion control |
| Thermocouple (mV) | −10 to 80 mV / −10 to 80 mV | > 1 MΩ / > 1 MΩ | Requires cold junction compensation (CJC) |
| RTD (Pt100, Pt1000) | Variable resistance (100‑138,5 Ω for Pt100 at 100 °C) | Measured by current injection | Requires 2, 3, or 4-wire connection to eliminate lead error |

## Standard Signals in Analog I/O

Industrial standards define analog current signals in the ranges 0‑20 mA and 4‑20 mA, with the latter being predominant due to its diagnostic capability. The 4‑20 mA signal allows the system to identify a wiring fault (0 mA) and tolerates larger voltage drops thanks to the immunity of current loops to electromagnetic interference. Voltage signals of 0‑10 V and ±10 V are easy to generate and measure, but are more sensitive to noise and voltage drops in long cables, so they are reserved for short distances (typically less than 10 m / 33 ft).

| Standard | Signal range | Fault diagnosis | Maximum recommended distance |
| --- | --- | --- | --- |
| 4‑20 mA | 4 to 20 mA / 4 to 20 mA | Yes (I < 3,6 mA indicates break) | 1000 m / 3281 ft (with shielded cable) |
| 0‑20 mA | 0 to 20 mA / 0 to 20 mA | Not reliable | 1000 m / 3281 ft |
| 0‑10 V | 0 to 10 V DC / 0 to 10 V DC | Very limited | 10 m / 33 ft |
| ±10 V | −10 to +10 V DC / −10 to +10 V DC | Very limited | 10 m / 33 ft |

## Analog-to-Digital Converter and Resolution

A 12-bit A/D converter divides the analog range into 4096 discrete levels (2¹² = 4096). The converter samples the continuous signal and quantizes it into steps whose minimum value depends on the number of bits. The resolution is calculated as:

> **Resolution = (Full scale) / (2ⁿ − 1)**

| Variable | Description |
| --- | --- |
| Full scale | Maximum range of the analog signal (e.g., 16 mA for 4‑20 mA, 10 V for 0‑10 V) |
| n | Number of bits of the converter (12, 14, 16 are common values in PLCs) |

With a 16-bit converter, 65,536 divisions are obtained, allowing a resolution of 0,24 µA per bit in a 4‑20 mA loop and is sufficient for high-precision weighing or dosing applications.

## Comparison Table: Digital vs. Analog I/O

| Characteristic | Digital Input/Output | Analog Input/Output |
| --- | --- | --- |
| Possible states | 2 (1 / 0) | Continuous (resolution limited by the converter) |
| Typical electrical signal | 0 / 24 V DC, 0 / 120‑230 V AC | 4‑20 mA, 0‑10 V, ±10 V, mV, Ω |
| Noise immunity | Very high (well-defined thresholds) | Medium (susceptible to interference, requires shielding) |
| Wiring | 2 digital wires | 2, 3, or 4 wires depending on sensor |
| Fault diagnosis | Only short circuit or overload detection on outputs | Open loop detection (4‑20 mA) and out of range |
| Representative applications | ON/OFF detectors, limit switches, motor starting | PID control, temperature, flow, pressure measurement, positioning |

## Frequently Asked Questions (FAQ)

### What is the fundamental difference between a digital and an analog input in a PLC?
A digital input only recognizes two logic states (0 or 1), while an analog input interprets a continuous signal and converts it into a proportional numerical value using an A/D converter, allowing physical magnitudes to be measured with high precision.

### Why is the 4‑20 mA signal preferred over 0‑20 mA or 0‑10 V?
The 4‑20 mA loop allows diagnosing a wire break (0 mA) and is immune to voltage drops over long distances, in addition to the fact that two-wire transmitters can be powered directly from the loop.

### How is a 4‑20 mA analog sensor connected to a PLC?
It depends on the sensor type: two-wire sensors are connected in series with the power supply and the module input; three-wire and four-wire sensors have independent power. The input module must be configured in current mode and often includes a 250 Ω resistor to convert current to voltage.

### What resolution is necessary for a temperature control application with RTD Pt100?
With a 16-bit module, a resolution lower than 0,1 °C / 0,18 °F is achieved in the working range. For general heating loops, a 12-bit resolution (approx. 0,1% of full scale) is usually sufficient, but in processes requiring high stability, 14 or 16 bits are recommended.

### Can a digital input channel be reused as a high-speed counter?
Some special digital inputs of PLCs support high-speed counter functions (up to 200 kHz / 200,000 pulses per second), but not all standard inputs can do so; it is necessary to consult the module's technical data sheet.

### What types of digital outputs exist and when is each suitable?
Relay outputs are universal and support AC and DC, but have a limited mechanical life (on the order of 10⁵‑10⁶ cycles). Transistorized outputs switch quickly and are ideal for DC loads with high switching frequency. Triac outputs are used for AC loads that require contactless and silent operations.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-terms-d_666.html
- **plcacademy.com**: https://www.plcacademy.com/plc-analog-input-output/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/programmable_controllers/directlogic_plcs_(micro_to_small,_brick_-a-_modular)/analog_i-z-o
