---
title: "SCADA system fundamentals"
sidebar:
  label: "SCADA system fundamentals"
description: "Technical reference: SCADA system fundamentals"
keywords: ["SCADA system fundamentals basics", "sistemas-control"]
category: "sistemas-control"
topic: "hmi-scada"
subcategory: "scada-system-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A SCADA (Supervisory Control and Data Acquisition) system is a control architecture oriented to the supervision of machines and processes, integrating computers, communication networks, and operator stations with graphical interfaces. Its main function is to acquire real-time data from field devices such as sensors and actuators, and allow operators to issue high-level control commands, such as setpoint changes, without intervening in the real-time control logic executed by PLCs or RTUs. SCADA systems are situated at the supervision and monitoring levels of the automation pyramid defined in ISA‑95/IEC 62264‑3, connecting the operational world (OT) with enterprise information systems (IT). They constitute one of the most widespread types of industrial control systems, used in critical infrastructures, process plants, electrical distribution networks, among others.

## What is a SCADA System?

SCADA stands for Supervisory Control and Data Acquisition. It is a software-based system that collects information from distributed devices, presents it in a comprehensible form to the operator through a human-machine interface (HMI), and allows sending supervisory commands without directly handling low-level control. The central concept is that supervision is separated from local control: the controllers (PLC, RTU) execute critical real-time functions and the SCADA provides global visibility and remote intervention capability.

A SCADA can range from a single station with one PLC to hundreds of nodes spread over several geographic locations. In all cases, information is organized through a tag database, where each point (or tag) represents an instrumentation variable or a specific actuator of the process. Data such as temperature, pressure, flow values, or valve status are historically accumulated for trend analysis and audits.

## Architecture and Functional Levels

The SCADA architecture is commonly described by functional levels, from field devices to corporate planning. The following table summarizes the five levels, typical equipment, and main function:

| Level | Name | Typical Equipment | Main Function |
|-------|------|-------------------|---------------|
| 0 | Field | Flow, temperature, pressure sensors; final control elements (control valves) | Direct measurement and actuation on the process |
| 1 | Local control | Industrialized input/output modules, PLCs, RTUs | Execution of real-time control logic, communication with the field level |
| 2 | Supervision | Supervisory computers, SCADA servers, HMI stations | Data acquisition, presentation, and sending of supervisory commands |
| 3 | Production control | MES (Manufacturing Execution System) systems | Production tracking and objective management, without direct process control |
| 4 | Enterprise planning | ERP (Enterprise Resource Planning) | Production scheduling, logistics, and corporate resource management |

Levels 1 and 2 constitute the core of SCADA. At level 1, RTUs (Remote Terminal Units) are ruggedized devices, often powered by solar panels and capable of operating in temperature ranges from **‑20 °C to +70 °C / ‑4 °F to +158 °F**, and even **‑40 °C to +85 °C / ‑40 °F to +185 °F** in special versions, without external HVAC equipment. PLCs, for their part, offer high connection speed in factory applications and can communicate directly with the SCADA or through an RTU in remote environments.

## Fundamental Components

SCADA systems are based on four main elements that collaborate for supervision and control:

| Component | Description | Examples / Characteristics |
|-----------|-------------|----------------------------|
| Supervisory computers and HMI | They constitute the logical core of the SCADA. They run the server software and operator interfaces. In large configurations, redundant servers (dual-redundant or active standby) are implemented to ensure continuity. | Ignition, WinCC, FactoryTalk View SE, InTouch |
| Remote Terminal Units (RTU) | Field devices that connect sensors and actuators, convert signals to digital format, and communicate with the supervisory system. Support programming per IEC 61131‑3 (ladder, function blocks). Designed for harsh environments. | Solar power, radio, GSM or satellite communications, wide temperature range |
| Programmable Logic Controllers (PLC) | Perform local process control with high cycle speed. They connect to sensors/actuators and, via industrial networks, to the SCADA. In factory automation they communicate directly; in remote applications they often delegate communication management to an RTU. | AutomationDirect, Siemens, Rockwell platforms |
| Communications infrastructure | Connects all the above elements via standard and proprietary protocols. Includes fieldbuses, industrial Ethernet, radio, satellite, and mobile networks. | OPC UA, Modbus TCP, DNP3, IEC 60870‑5 |

Operator stations display synoptics based on piping and instrumentation diagrams (P&ID) or schematic representations of the machines, where the operator visualizes real-time values and can modify setpoints. The tag database is the central repository that links each variable to its physical instrument.

## Basic Operation

The information flow in a SCADA follows a continuous cycle of acquisition, processing, presentation, and command. It starts with reading field signals by RTUs or PLCs, which convert physical quantities to digital values. This data is transmitted to the SCADA server over the communications network. The server stores them in the tag database and makes them available to HMI stations.

The operator views the process status through animated graphic screens, alarm tables, and trend curves. When an intervention is required, the operator can send a command (e.g., a new setpoint value for a control loop) that travels from the HMI to the server and then to the local controller. The low-level control loop (typically a PID executed in the PLC) continues to operate autonomously; the supervision only modifies parameters or activates sequences.

Historians, often integrated into the SCADA or as standalone modules, record data with timestamps for later analysis, production reports, and regulatory compliance. Server and communication path redundancy ensures system availability even in the event of hardware failures.

## Typical Applications

SCADA systems find application in any sector that requires centralized monitoring and control of distributed processes:

- **Water treatment and distribution**: Pump control, tank levels, chemical dosing, leak detection in pipe networks.
- **Power generation and distribution**: Substation supervision, load management, control of switches and disconnectors, integration of renewable energies.
- **Oil and gas**: Pipeline monitoring, control of block valves, compressors, and pumping stations.
- **Industrial manufacturing**: Production line supervision, real-time quality control, integration with MES systems.
- **Transportation and logistics**: Railway traffic management, tunnel HVAC control, automatic toll systems.
- **Critical infrastructures**: Smart buildings, access control, centralized energy management.

In each case, the HMI screens are custom-designed to faithfully represent the process, using standardized symbols and navigation hierarchies that facilitate rapid operator response.

## Frequently Asked Questions (FAQ)

### What is the difference between SCADA and DCS?

A SCADA is oriented to supervising geographically dispersed processes and delegates low-level control to local devices (PLC, RTU), while a Distributed Control System (DCS) integrates control and supervision in an architecture designed for continuous and centralized processes, with a deterministic control bus and typically proprietary local controllers.

### Is HMI the same as SCADA?

No. HMI (Human-Machine Interface) is only the visual component that presents data to the operator. SCADA is the complete system that includes servers, communications, database, supervision logic, and, among its interfaces, one or more HMIs.

### What communication protocols are used in SCADA?

The most widespread protocols are Modbus (RTU and TCP), DNP3, IEC 60870‑5, OPC UA, and Profibus. The OPC UA standard has become the interoperability layer between devices from different manufacturers, while DNP3 and IEC 60870‑5 dominate in the electrical and infrastructure sectors.

### How is SCADA system availability ensured?

Through redundancy at all levels: dual servers (active-standby), dual communication paths, redundant power supplies, and RTU/PLC with autonomous operation capability in case of loss of communication with the control center.

### What is an RTU and how does it differ from a PLC?

An RTU (Remote Terminal Unit) is a device designed for harsh remote environments, with support for wireless communications, wide temperature range, and autonomous power. A PLC (Programmable Logic Controller) is optimized for fast local control, typically in protected industrial environments, and often relies on an RTU when complex remote connectivity is required.

### What role does the historian play in a SCADA system?

The historian is a software component that stores time series of all process variables with high compression and write speed. It allows generating regulatory reports, analyzing trends, diagnosing failures, and feeding advanced business intelligence applications.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pfd-process-flow-diagram-d_465.html
- **plcacademy.com**: https://www.plcacademy.com/scada-system/
- **automationdirect.com**: https://www.automationdirect.com/ebooks/plc-handbook
