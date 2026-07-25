---
title: "PLC fundamentals introduction"
sidebar:
  label: "PLC fundamentals introduction"
description: "Technical reference: PLC fundamentals introduction"
keywords: ["PLC programmable logic controller basics introduction", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "plc-fundamentals-introduction"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A programmable logic controller (PLC) is a ruggedized industrial computer designed to govern manufacturing processes, assembly lines, and machinery with high reliability. Its core function is to execute a control program that continuously reads the status of sensors and actuators via digital and analog inputs, processes the programmed logic, and updates outputs in real time, all within a predictable scan cycle. Unlike hardwired relay systems, a PLC can be reprogrammed without modifying the physical wiring, simplifying adaptation to process changes.

## Historical Background

The first PLC was developed in 1968 in response to the need to replace costly and inflexible relay logic systems in the automotive industry. General Motors' Hydramatic Division issued a request for proposals for a flexible electronic controller, and the company Bedford Associates, led by Dick Morley, was selected. The result, delivered in 1969, was the Modicon 084 (Bedford project number 84), considered the first commercial PLC. This equipment introduced ladder logic as a programming language inspired by relay diagrams, allowing electrical technicians without computer training to program it. The Modicon brand was later sold to Gould Electronics and today belongs to Schneider Electric.

## PLC Architecture

A PLC integrates the following functional blocks:

| Component | Function | Typical Characteristics |
|---|---|---|
| CPU (Central Processing Unit) | Execute the control program and manage communication | 32-bit processor, instruction cycle less than 0.1 µs / 0.0001 ms |
| Power supply | Convert mains voltage to internal DC levels | Input 100‑240 V AC / 47‑63 Hz; output 24 V DC / 5 A |
| Input modules (I) | Acquire signals from sensors, pushbuttons, limit switches | Digital input voltage 24 V DC or 120 V AC / 50‑60 Hz; analog range 0‑10 V |
| Output modules (O) | Activate actuators, contactors, valves | Relay output up to 2 A / 250 V AC, transistor output 0.5 A / 24 V DC |
| Backplane bus | Transport data between CPU and I/O modules | Typical bus speed 100 Mbps or higher |
| Memory | Store user program, data, and operating system | Non-volatile program memory, capacity from 64 kB to several MB |

## Scan Cycle and Internal Operation

The typical scan cycle time of a modern PLC ranges from 1 ms to 20 ms, depending on program complexity and the number of inputs/outputs. During each scan, the controller sequentially executes three stages:

1. **Read inputs:** The CPU captures the status of all input modules and stores an image in memory.
2. **Execute program:** The processor scans the control code (ladder, structured text, etc.), evaluating contacts, coils, and function blocks, updating an internal output image.
3. **Write outputs:** The output image is transferred to the physical modules, modifying the status of actuators.

This cycle repeats continuously while the PLC is in RUN mode, ensuring deterministic behavior. High-end PLCs can complete more than 50,000 logical instructions in 1 ms.

## Basic Programming

The IEC 61131‑3 standard, established in 1993, defines five programming languages for PLCs, combining graphical and textual environments:

| Language | Type | Description |
|---|---|---|
| Ladder diagram (LD) | Graphical | Based on contacts and coils; resembles electrical relay schematics |
| Function block diagram (FBD) | Graphical | Connects blocks representing logical, mathematical, or control functions |
| Structured text (ST) | Textual | Syntax similar to high-level languages (Pascal, C) |
| Instruction list (IL) | Textual | Low-level language with accumulator and mnemonic operations |
| Sequential function chart (SFC) | Graphical | Describes sequences of steps and transitions |

Ladder diagram remains the most widely used in industry due to its ease of interpretation by electrical maintenance personnel.

## Advantages over Relay Logic

A single PLC can replace hundreds of relays, timers, and counters, reducing the electrical cabinet volume from 2 m³ / 70.6 ft³ to less than 0.5 m³ / 17.7 ft³ and the control panel weight by more than 60%. Additionally, it offers significant advantages over traditional hardwired systems:

- **Flexibility:** Modifying the program does not require rewiring, shortening commissioning from weeks to hours.
- **Built-in diagnostics:** Self-diagnostic routines detect faults and display detailed alarms, speeding up troubleshooting.
- **Connectivity:** PLCs integrate into industrial networks (EtherNet/IP, PROFINET, Modbus TCP) and communicate with SCADA, HMI, and MES systems.
- **Electrical reliability:** Immunity to electromagnetic noise per IEC 61000‑4‑4 (2 kV burst) and high vibration resistance (up to 2 g / 19.6 m/s²).

## Applications

PLCs control processes in all industrial sectors. An automotive assembly line can manage over 2000 I/O points with a single modular PLC, while packaging applications use compact controllers that process 300 bottles per minute. Other examples include:

- Transport and sorting systems (belts, rollers, elevators).
- Water treatment and chemical dosing.
- Machine tools and CNC machining centers.
- Boiler, furnace, and burner control.
- Building automation (HVAC, lighting, security).

## Frequently Asked Questions (FAQ)

### What differentiates a PLC from a common microcontroller?
A PLC is designed to operate 24/7 in harsh industrial environments (temperatures from 0 °C to 55 °C / 32 °F to 131 °F, humidity 95% non-condensing, vibrations), includes built-in electrical protections, and offers specific programming languages for automation, whereas a microcontroller requires additional hardware and basic software to achieve similar reliability levels.

### What is the service life of a PLC?
The service life of a PLC in continuous operation typically exceeds 15 years, provided the specified environmental conditions are respected. Many installations continue to operate with equipment over 20 years old thanks to its robust design and the availability of spare parts.

### Is computer programming training necessary to program a PLC?
It is not essential. Ladder logic was designed so that electrical technicians could program without knowledge of high-level languages. However, handling structured text or function blocks requires some background in logic and programming.

### Can a PLC communicate with other systems such as databases or the cloud?
Yes. Current PLCs incorporate Ethernet ports and protocols such as OPC UA, MQTT, or Modbus TCP, allowing connection to SQL databases, cloud services, and industrial IoT platforms.

### What does it mean for a PLC to be modular?
A modular PLC consists of an independent CPU and I/O, communication, and special function modules that attach to a rack or backplane. This architecture allows expansion to several thousand I/O points without replacing the central controller.

### Is it possible to simulate a PLC program without having the physical hardware?
Numerous manufacturers offer software simulators (e.g., RSLogix Emulate, PLCSIM, CODESYS Simulation) that allow the program to be executed and debugged on a PC, reducing commissioning time and avoiding risks on the actual machine.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-systems-t_32.html
- **plcacademy.com**: https://www.plcacademy.com/category/plc-basics/
- **automationdirect.com**: https://www.automationdirect.com/ebooks/plc-handbook
