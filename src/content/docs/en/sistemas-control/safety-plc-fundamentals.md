---
title: "Safety PLC fundamentals"
sidebar:
  label: "Safety PLC fundamentals"
description: "Technical reference: Safety PLC fundamentals"
keywords: ["safety PLC fundamentals SIL", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "safety-plc-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

A safety PLC (Programmable Logic Controller) is a programmable logic controller specifically designed to execute safety functions in industrial applications, complying with functional safety integrity standards such as IEC 61508 and ISO 13849. Unlike a standard PLC, it incorporates internal diagnostics, redundancy, and fault-tolerant architecture to ensure a safe state in the event of system failures. These devices monitor and control critical functions such as emergency stops, light curtains, safety mats, and interlocks, reducing the risk of injury to personnel and damage to machinery.

A safety PLC continuously monitors inputs from safety devices, processes the logic using certified function blocks, and controls safety outputs with a scan cycle typically below 10 ms. The most common architecture uses a dual-channel design with self-diagnostics: two independent microcontrollers read the same inputs, execute the same logic in parallel, and compare their results. If a discrepancy is detected, the controller forces the safe state (output de‑energization) within 25 ms. This cyclic operation with cross‑checking achieves diagnostic coverage (DC) levels exceeding 99%, meeting the requirements of IEC 61508 and ISO 13849‑1 for functional safety systems.

## Safety Integrity Levels (SIL)

There are four safety integrity levels (SIL 1 to SIL 4) defined in IEC 61508, with SIL 4 corresponding to the highest risk reduction. Most commercial safety PLCs are certified up to SIL 3, compatible with performance level PL e (Cat. 4) of ISO 13849‑1. SIL assignment is carried out by risk analysis, using methods such as risk matrices, risk graphs, or layer of protection analysis (LOPA), as detailed in the safety relay and circuit guide (plcacademy.com).

| SIL Level | Probability of Failure on Demand (PFD) | Probability of Failure per Hour (PFH) | Risk Reduction Factor (RRF) |
|-----------|---------------------------------------------------|-----------------------------------------------|-------------------------------------|
| SIL 1     | 0.1 – 0.01                                        | 10⁻⁵ – 10⁻⁶                                   | 10 – 100                            |
| SIL 2     | 0.01 – 0.001                                      | 10⁻⁶ – 10⁻⁷                                   | 100 – 1 000                         |
| SIL 3     | 0.001 – 0.0001                                    | 10⁻⁷ – 10⁻⁸                                   | 1 000 – 10 000                      |
| SIL 4     | 0.0001 – 0.00001                                  | 10⁻⁸ – 10⁻⁹                                   | 10 000 – 100 000                    |

## Internal Architecture

A safety PLC typically integrates two identical microcontrollers that execute the same safety logic with a comparison frequency of every 1 ms. The usual structure is 1oo2 (one out of two) or 2oo3 (two out of three) for channel voting, guaranteeing fault tolerance (HFT = 1) in SIL 3 configurations. Each channel has watchdog hardware and pulse test circuits that verify the integrity of wiring and contacts without compromising the output state. Redundancy extends to the clock system, internal communication buses, and power supplies, allowing the equipment to detect 99% of dangerous faults before they cause an unsafe output.

## Hardware Features

Current safety PLCs, such as the Schmersal PROTECT PSC1 or the ReeR MOSAIC MZERO, offer compact or modular configurations with scalability up to 216 I/O points (automationdirect.com). The PSC1‑C‑100 model, for example, incorporates 14 safe inputs, 4 semiconductor safety outputs (OSSDs), 2 relay outputs, and 2 pulse outputs, all certified up to SIL 3 / PL e Cat. 4. Typical specifications of a compact model are shown below.

| Parameter | Typical Value |
|-----------|--------------|
| Digital safety inputs | 14 |
| Safety OSSD outputs | 4 |
| Relay outputs | 2 |
| Supply voltage | 24 V DC |
| Operating temperature | 0 °C to 55 °C / 32 °F to 131 °F |
| Dimensions (width × height × depth) | 120 × 100 × 85 mm / 4.72 × 3.94 × 3.35 in |
| Weight | 0.5 kg / 1.1 lb |

## Programming and Configuration

Programming a safety PLC is done using graphical drag‑and‑drop software (e.g., provided by Schmersal or ReeR), which automatically generates the project with its calculated reliability parameters such as PFH, DCavg, and MTTFd according to EN 13849‑1. The supported language is usually a restricted version of function block diagram (FBD) or ladder logic (LD), where only certified function blocks (emergency stop, muting, two‑hand control, etc.) are available. Online editing or downloading changes while the system is in RUN mode is not allowed, and any modification requires a validation commission that re‑verifies the safety functions.

## Industrial Applications

Safety PLCs are used in any sector where machines present risks to operators, such as hydraulic presses, robotic assembly lines, belt conveyor systems, packaging machines, machining centers, and mining excavators. They are especially useful in installations that combine multiple safety functions (more than three zones) because they allow consolidating the logic into a single device, eliminating the need for individual safety relays and reducing wiring. The risk assessment methodology according to ISO 12100, described at plcacademy.com, provides the framework for identifying hazards and defining the safety instrumented functions (SIFs) that the PLC must execute.

## Advantages

The main advantage of a safety PLC is the integration of multiple safety functions into a single controller, which simplifies wiring, reduces cabinet space, and facilitates remote diagnostic tasks. Additionally, they offer diagnostic coverage (DC) greater than 99%, detailed event logging of safety events, and the ability to scale inputs and outputs via expansion modules up to 216 points. Native connectivity to fieldbuses (Profinet, EtherCAT, Modbus TCP) eliminates the need for additional gateways, and the configuration software provides automatic reports of the reliability parameters (PFH, DCavg, MTTFd) required by the standards.

## Disadvantages

The acquisition cost of a safety PLC is significantly higher than that of a safety relay or an equivalent standard PLC, due to its redundant architecture and certification processes. Programming is more restrictive: only pre‑certified function blocks can be used and hot changes are not supported, which slows down commissioning and modification processes. Likewise, the documentation and validation required by the regulations demand personnel with specific training in functional safety, increasing engineering costs.

## Frequently Asked Questions (FAQ)

### What is the difference between a standard PLC and a safety PLC?
A standard PLC does not guarantee predictable behavior when a hardware or software fault occurs, whereas a safety PLC is designed with redundancy and self‑diagnostics to force a safe state (machine stop) in the event of any anomaly. Additionally, safety PLCs are certified under functional safety standards such as IEC 61508 or ISO 13849‑1, which involves much more rigorous development and validation processes.

### What is the highest SIL level a safety PLC can be certified to?
Safety PLCs available on the market commonly reach SIL 3 according to IEC 61508 / IEC 62061, which is equivalent to PL e and category 4 per ISO 13849‑1. Achieving SIL 4 is extremely rare in general‑purpose safety controllers, as it requires quadruple redundancy and is reserved for highly specific systems such as nuclear instrumentation.

### Can standard and safety I/O be mixed in the same controller?
Yes. Most safety PLCs allow combining standard I/O modules and certified safety modules in the same rack. Standard I/O is managed by the non‑safe part of the firmware, while safety I/O is exclusively processed by the certified part, ensuring logical segregation. Some models, such as the PSC1‑C‑100, include 20 configurable I/O points as standard inputs or outputs, in addition to the 14 safety channels.

### What regulations govern the design of a safety PLC?
The fundamental standards are IEC 61508 (functional safety of electrical/electronic/programmable electronic systems), IEC 62061 (functional safety of machinery), and ISO 13849‑1 (safety‑related parts of control systems). At the product level, manufacturers must obtain certification from a notified body such as TÜV Rheinland or TÜV SÜD, which verifies compliance with the declared safety integrity levels.

### Is it mandatory to use a safety PLC on every industrial machine?
No. The obligation depends on the risk assessment performed according to the Machinery Directive 2006/42/EC. If the residual risk after applying non‑instrumented protective measures is tolerable, electromechanical safety relays may suffice. However, when multiple safety functions, response times below 10 ms, or centralized diagnostics are required, using a safety PLC becomes the most efficient solution and, in many cases, the only viable one.

### What types of safety devices can be connected to a safety PLC?
A safety PLC supports the connection of a wide variety of devices with OSSD outputs or dry contacts: emergency stops, interlock switches, safety light curtains, laser scanners, safety mats, coded magnetic sensors, and pneumatic safety valves. More advanced models also allow monitoring rotational speed via inductive sensors or encoders, implementing functions such as safely limited speed (SLS) or safe torque off (STO).

## References
- **plcacademy.com**: https://www.plcacademy.com/category/safety/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/safety/safety_controllers
