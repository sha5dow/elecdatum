---
title: "HMI interface fundamentals"
sidebar:
  label: "HMI interface fundamentals"
description: "Technical reference: HMI interface fundamentals"
keywords: ["HMI human machine interface basics", "sistemas-control"]
category: "sistemas-control"
topic: "hmi-scada"
subcategory: "hmi-interface-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The Human-Machine Interface (HMI) is the point of contact between the human operator and the automated system, providing a visual representation of the process status and allowing direct intervention on control parameters. In the industrial control field, the HMI has evolved from simple indicator lamp and pushbutton panels to sophisticated touchscreen graphic displays, integrating supervision, data acquisition, and real-time diagnostics functions.

## Definition and Evolution of the Concept
The original term **Man‑Machine Interface (MMI)** referred to the software through which the plant operator interacted with the process, functionally equivalent to what is now known as HMI. With the adoption of the user-centered approach and industrial computing, the name shifted to **Human‑Machine Interface**, highlighting ergonomics and usability. In current control systems, the HMI relies on communication standards that read and write variables from programmable logic controllers (PLCs), process controllers, and supervision systems (SCADA), acting as the digital face of the system.

## Operation of the Interaction Loop
The dialogue between operator and machine follows a closed loop of **observation‑decision‑action‑feedback**. The HMI graphically displays the process value (PV) and set point (SP); the operator analyzes the deviation and, if necessary, modifies parameters that are sent to the controller. The controller calculates the error and acts on the final elements, closing the loop. The fundamental formula governing the controller decision is:

> **Error = SP – PV**

| Variable | Description | Observation |
|----------|-------------|-------------|
| SP | Set point or desired setpoint | Reference value entered by the operator or a supervisory system |
| PV | Process variable | Actual value measured by the transmitter (temperature, pressure, flow, etc.) |
| Error | Instantaneous difference between SP and PV | Input signal to the control algorithm (PID) |

## Types of HMI Interfaces
Industrial visualization solutions are classified into three main families, each oriented to different levels of complexity and work environments.

| Type | Description | Typical Features |
|------|-------------|-----------------|
| Graphic touch panel | Compact device with LCD/TFT screen and touch-sensitive surface. Integrates configurable objects such as buttons, indicators, trend charts, and animations. | Sizes from 4.3 in / 10.9 cm to 15 in / 38.1 cm, WVGA or higher resolutions, Ethernet/serial connectivity, support for multiple protocols. |
| Message display | High-brightness LED panel intended to communicate textual information and numeric values. Ideal for production lines where only quick status reading is required. | Modbus RTU/TCP or ASCII serial communication, programmable lines with colors and scrolling effects. |
| Industrial monitor | Industrial-grade flat LCD display, with or without touch function, acting as a thin client connected to a “headless” HMI or to a supervision PC. | Diagonals from 15 to 24 in / 38.1 to 61.0 cm, IP65/NEMA 4X front protection, suitable for harsh environments. |

## Components of an HMI Station
A modern HMI integrates the following functional blocks:

- **Processor and memory**: Embedded CPU (ARM, x86) that executes the display firmware and manages screen logic, recipes, and alarms.
- **Display interface**: LED-backlit LCD/TFT panel, with sizes from 4.3 in / 10.9 cm and typical resolutions from 480×272 pixels up to 1920×1080 pixels.
- **Touch system or keypad**: Resistive or projected capacitive (PCAP) touch screen, occasionally accompanied by physical function keys.
- **Communication ports**: At least one Ethernet port and serial ports (RS‑232/RS‑485) for connection to PLCs, drives, and other peripherals.
- **Storage**: Flash memory or SD card for the project, recipes, alarm histories, and data backup.
- **Development software**: PC environment with graphic object libraries, recipe editor, alarm manager, and offline simulator.

## Communication with the Control System
The HMI communicates cyclically with the PLC or controller using industrial protocols. The PLC scan cycle — typically ranging from 0.5 ms to 50 ms — determines the frequency at which the HMI receives updates of process variables. The most common protocols are Modbus TCP/IP, EtherNet/IP, PROFINET, and, in legacy environments, Modbus RTU over RS‑485. Through the communication driver, the HMI reads blocks of registers (analog inputs, markers, counters) and writes setpoints or start/stop commands. When real-time data exchange is required, some devices support direct communication via OPC UA, also enabling vertical integration with MES and ERP systems.

## Operational and Environmental Parameters
Industrial HMI displays are designed to operate in harsh environments. The most common ambient temperature range covers -10 °C to 60 °C (14 °F to 140 °F) without condensation, making them suitable for installation in electrical cabinets or at machine level in unheated workshops.

| Parameter | Value (metric / imperial) |
|-----------|----------------------------|
| Operating temperature | -10 to 60 °C / 14 to 140 °F |
| Storage temperature | -20 to 70 °C / -4 to 158 °F |
| Relative humidity in service | 10–90 % without condensation |
| Typical front protection rating | IP65 / NEMA 4X |

## Frequently Asked Questions (FAQ)
### What is the difference between HMI and SCADA?
An HMI is a device or software intended for direct operator interaction with a machine or a work cell, while a SCADA system encompasses the supervision, data acquisition, and control of entire plants, integrating multiple HMIs, servers, and historical databases.

### What communication protocols does an HMI support with a PLC?
The most widespread protocols are Modbus RTU/TCP, EtherNet/IP, and PROFINET. Most HMI manufacturers offer drivers for the major PLC brands (Siemens, Allen‑Bradley, Omron, Schneider, etc.), as well as OPC UA communication for integration into IIoT architectures.

### Is it mandatory for an HMI to have a touch screen?
No. There are “headless” HMIs without a screen, which connect to an industrial monitor or to a web client, as well as message viewers controlled by keyboard or dedicated solely to reading status. The touch screen is predominant in compact panels, but not essential.

### What screen resolution is considered adequate for industrial applications?
It depends on the information density. For basic monitoring of variables, 480×272 or 800×480 pixels are used on panels from 4.3 to 7 inches. Applications requiring layouts, trend charts, or multiple recipes typically use 1024×600 or higher, and PC-type supervision stations reach 1920×1080 pixels.

### How is the graphic interface of an HMI programmed?
Using manufacturer-specific development software that runs on a PC. The designer places graphic objects (buttons, numeric displays, bar charts, indicators) on screens, assigns them PLC variable addresses, and configures behaviors, animations, access levels, and recipes. The project is then downloaded to the panel via Ethernet, USB, or SD card.

### What security measures should be considered when implementing an HMI?
It is recommended to assign user levels with passwords, physically lock unused ports, separate the control network from the corporate network using firewalls, and disable unnecessary services. In critical environments, certified HMIs with hardwired “emergency stop” functions independent of the touch screen are used.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-terms-d_666.html
- **plcacademy.com**: https://www.plcacademy.com/category/plc-basics/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/hmi_(human_machine_interface)
