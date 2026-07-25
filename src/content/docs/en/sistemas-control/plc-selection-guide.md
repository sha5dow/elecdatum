---
title: "PLC selection guide"
sidebar:
  label: "PLC selection guide"
description: "Technical reference: PLC selection guide"
keywords: ["PLC selection guide criteria", "sistemas-control"]
category: "sistemas-control"
topic: "plc-selection"
subcategory: "plc-selection-guide"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Selecting the right programmable logic controller (PLC) determines the efficiency, scalability, and reliability of any industrial automation system. A systematic evaluation of process requirements, from environmental conditions to network architecture, allows discarding oversized or undersized solutions, maximizing the investment over the entire life cycle of the equipment.

## Operating Parameters and Environment

The physical and electrical conditions at the installation site constrain the mechanical design and electronics of the PLC. Industrial controllers typically operate between 0 °C and 55 °C / 32 °F and 131 °F, with tolerated peaks up to 60 °C / 140 °F for short periods; storage allows from –20 °C to 70 °C / –4 °F to 158 °F. Non-condensing relative humidity is usually limited to 95% and maximum working altitude to 2000 m / 6562 ft, although hardened versions exist for aggressive environments.

| Parameter | Typical Value | Observations |
| --- | --- | --- |
| Operating temperature | 0–55 °C / 32–131 °F | Extended versions reach –40 °C / –40 °F or 70 °C / 158 °F |
| Relative humidity | 5–95% (non-condensing) | Requires sealed enclosure if splashes are present |
| Operating altitude | ≤2000 m / 6562 ft | Performance reduction above this value |
| Vibration resistance | 2 g @ 10–500 Hz / 0.07 in peak to peak | Complies with IEC 60068-2-6 |
| Electrical noise immunity | Level 3 per IEC 61000-4-4 | Protection against 2 kV fast transients |

The choice of IP protection rating (minimum IP20 for cabinets; IP65/IP67 for field mounting) and certification for explosive atmospheres (ATEX, IECEx) are mandatory when the PLC is located in classified areas.

## Input/Output Architecture

The number and type of I/O channels define the ability to interact with sensors, actuators, and peripherals. Compact PLCs (nano or micro type) integrate 10 to 36 I/O points, while modular systems can scale up to several thousand channels using remote expansion modules. Digital signals commonly work at 24 V DC and analog signals cover the standard ranges of 0–10 V and 4–20 mA.

| PLC Class | Integrated Digital I/O Points | Typical Analog Channels | Maximum Expansion |
| --- | --- | --- | --- |
| Nano (e.g., Siemens LOGO!) | 8–24 | 0–2 | 24–48 points with local modules |
| Micro (e.g., CLICK) | 20–36 | 2–4 | 100–200 points on local bus |
| Medium compact (e.g., S7-1200) | 24–128 | 4–16 | Up to 284 local + remote points |
| Large modular (e.g., ControlLogix) | Configurable from zero | 4–16 channel modules | >10,000 points with field networks |

For motion control applications, fast pulse train outputs (PTO) up to 200 kHz and differential encoder inputs must be considered. Special modules (thermocouple, RTD, strain gauges) expand connectivity without external processing.

## Processing Capacity and Memory

Program execution speed and available memory determine the maximum size of the control logic and the temporal response of the system. Low-end PLCs execute between 1 and 10 k instructions per millisecond, medium-range reach 0.1–0.5 ms/k instructions, and high-performance units can process a Boolean instruction in 1–5 ns.

| Resource | Low Range (Nano/Micro) | Medium Range | High Range |
| --- | --- | --- | --- |
| Program memory | 2–64 kB | 128 kB–2 MB | 4–32 MB |
| Data memory | 1–8 kB | 32–512 kB | 1–8 MB |
| Typical cycle time | 1–10 ms | 0.1–1 ms | 0.01–0.1 ms |
| Memory expansion capability | SD/microSD card (up to 32 GB) | Proprietary memory modules | Hot-swappable modules |

The selection should include a free memory margin of 30–50% for future expansions and the ability to store recipes or historical records in non-volatile memory.

## Programming Languages and Software

The IEC 61131-3 standard defines five programming languages for PLCs: ladder diagram (LD), function block diagram (FBD), structured text (ST), instruction list (IL), and sequential function chart (SFC). Compatibility with multiple languages allows selecting the most appropriate one for the task: LD for combinational logic, ST for complex calculations, and SFC for production sequences.

| Platform | Supported Languages | Development Environment | Integrated Simulation |
| --- | --- | --- | --- |
| Siemens TIA Portal | LD, FBD, ST, SFC, IL | TIA Portal V18 | Yes (PLCsim) |
| Rockwell Studio 5000 | LD, FBD, ST, SFC | Studio 5000 Logix Designer | Yes (Emulate) |
| Codesys | LD, FBD, ST, SFC, IL | Codesys Development System | Yes (native) |
| AutomationDirect Productivity Suite | LD, FBD, ST | Productivity Suite | No hardware required for testing |

The availability of predefined libraries for PID loops, communications, or motion control speeds up development; an engineering project requiring batch control will benefit from the implementation of the ISA-88 standard in the PLC firmware.

## Communications and Connectivity

The ability to integrate with industrial networks and supervision systems defines scalability and wiring cost. Basic ports include RS-232/485 and Ethernet with protocols like Modbus RTU/TCP. PLCs supporting fieldbuses (PROFIBUS, CANopen) and automation protocols (EtherNet/IP, PROFINET, EtherCAT) facilitate I/O distribution and drive control.

| Protocol | Typical Speed | Topology | Typical Application |
| --- | --- | --- | --- |
| Modbus TCP | 100 Mbps | Star | Integration with HMI/SCADA |
| EtherNet/IP | 100 Mbps / 1 Gbps | Star, ring | Communication between PLC and remote I/O |
| PROFINET | 100 Mbps | Star, line | Machine automation |
| EtherCAT | 100 Mbps | Ring, line | High-speed motion control |

Built-in USB ports allow program upload without a network, and OPC UA connectivity ensures interoperability with MES/ERP systems within the Industry 4.0 framework.

## Installation and Maintenance Considerations

The mechanical format (compact, modular, or PC-based), cabinet dimensions, and ease of diagnostics directly impact operating costs. Current PLCs incorporate status LEDs, local displays, and diagnostic logs accessible from the programming software.

| Aspect | Recommendation |
| --- | --- |
| Mounting | 35 mm / 1.38 in DIN rail or panel, with minimum 50 mm / 2 in separation for ventilation |
| Power supply | 24 V DC (industrial) or 100–240 V AC; typical consumption 5–30 W |
| Electrical protection | External 2 A fuse and transient suppressor on the power input |
| Preventive maintenance | 3 V backup battery with 3–5 year life; replacement without program loss if flash memory is used |
| Diagnostics | Watchdog, I/O status indicators, and timestamped event buffer |

The ability to hot-swap modules and the availability of standard spare parts reduce unscheduled downtime.

## Typical Applications

The selection guide is specified in the following sectors, where PLCs dominate automation:

- **Discrete manufacturing**: assembly lines, presses, and robots. Fast cycles (<10 ms), numerous digital I/Os, and safety networks are required.
- **Continuous process control**: fluid mixing, chemical reactors. They demand redundant PID loops, high-resolution analog modules, and HART communication.
- **Infrastructure and buildings**: pumping stations, HVAC. Nano PLCs with Modbus connectivity and alarms managed via SMS or cloud.
- **Mobile and agricultural machinery**: Embedded PLCs with IP67 protection, 12/24 V DC power supply, and CAN bus protocol (SAE J1939).
- **Energy and utilities**: substations, wind farms. Need for time stamping, SNTP synchronization, and protocol support such as DNP3 or IEC 61850.
- **Pharmaceutical and food industry**: dosing and packaging. Compliance with ISA-88, tamper-proof audit logs, and integrated CIP/SIP.

## Frequently Asked Questions (FAQ)

### What is the difference between a compact PLC and a modular PLC?

The compact PLC integrates CPU, power supply, and I/O in a single, not significantly expandable housing, ideal for applications up to 128 points. The modular PLC allows adding I/O modules, communication, and special functions on an expansion bus, scaling up to thousands of channels.

### How many I/O points should I reserve for future expansions?

A prudent margin ranges between 20% and 30% of the total installed. In systems with expected rapid growth or integration of new lines, it is recommended to leave 50% capacity in the rack.

### Is it better to select a PLC with an integrated or external power supply?

Integrated power supplies simplify mounting and reduce cabinet space in small applications. For modular systems with high current demand (>2 A) or need for redundancy, an external sized switched power supply is preferable.

### Which communication protocol should I choose for motion control?

EtherCAT and PROFINET IRT offer determinism and bus cycle times below 100 µs, suitable for multi-axis synchronization. EtherNet/IP with CIP Motion also meets medium-dynamic applications but requires jitter management.

### Can I mix I/O modules from different manufacturers in the same PLC?

Not directly. Expansion buses are proprietary. Interoperability is achieved through protocol gateways or using remote I/O with an open fieldbus (PROFIBUS, EtherNet/IP) supported by the main PLC.

### How does ambient temperature affect PLC service life?

Every 10 °C / 18 °F increase above the maximum operating temperature halves the life of electrolytic capacitors. Keeping the PLC within the nominal range and with adequate ventilation prevents premature failures and spontaneous restarts.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-systems-t_32.html
- **plcacademy.com**: https://www.plcacademy.com/
- **automationdirect.com**: https://www.automationdirect.com/systembuilder
