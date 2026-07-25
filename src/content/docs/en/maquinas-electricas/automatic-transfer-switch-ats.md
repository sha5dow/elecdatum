---
title: "Automatic transfer switch ATS"
sidebar:
  label: "Automatic transfer switch ATS"
description: "Technical reference: Automatic transfer switch ATS"
keywords: ["automatic transfer switch ATS specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "generators"
subcategory: "automatic-transfer-switch"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

An automatic transfer switch (ATS) is an electrical switching device that automatically transfers power to a load between two power sources (normal and backup) upon detection of a fault. The ATS is mainly installed with emergency generators to ensure continuity of electrical supply in residential, commercial, and industrial applications.

## Parts of an automatic transfer switch
| Component | Function |
|---|---|
| Switching mechanism | Set of main contacts that perform the physical transfer between sources |
| Logic controller | Microprocessor or programmable relay that monitors voltage, frequency, and status of the sources, and issues start/stop and switching commands |
| Network supervision relay | Detects the presence, loss, or return of the main source voltage within programmed thresholds |
| Motorized actuator or trip coil | Element that mechanically executes the movement of the contacts under the controller's command |
| Auxiliary contacts | Provide status signals for remote signaling, interlocks, or generator start |
| Communication interface | Allows integration with building management systems (BMS) or SCADA via protocols such as Modbus, Profibus, or Ethernet |

## Operating principle
The ATS continuously monitors the voltage and frequency of the main source. When the parameters fall outside the set limits (undervoltage, overvoltage, phase loss), the controller sends a start signal to the backup generator set. Once the generator reaches stable voltage and frequency within nominal values, the switch transfers the load via a break-before-make mechanism (open transition) or make-before-break (closed transition) depending on its type. When the main grid returns within acceptable parameters for a minimum stabilization time, the ATS reconnects the load to the grid and, after a no-load cooling period, orders the generator to stop.

The synchronization condition for a closed transition transfer is met when:
> **|ΔU| < 5 %, **|Δf| < 0,2 Hz** and **|Δφ| < 5°**

## Types of automatic transfer switches
| Type | Description | Typical transition | Main application |
|---|---|---|---|
| Open transition ATS (break‑before‑make) | Interrupts connection to the first source before establishing contact with the second | < 167 ms / 0.167 s | Residential, small businesses, general loads |
| Closed transition ATS (make‑before‑break) | Momentarily connects both sources in parallel (if synchronized) to transfer without micro-interruption | Overlap < 100 ms / 0.1 s | Data centers, hospitals, industrial processes with sensitive loads |
| Static transfer switch (STS) | Uses power semiconductors (SCR) to switch between two sources in an extremely short time | < 4 ms / 0.004 s | Critical applications with microprocessors, server rooms, industrial UPS |
| Soft-loading ATS | Variant of the closed transition ATS that allows progressive transfer and grid synchronization to reduce demand peaks | Controlled overlap, programmable cycle | Large facilities with own generation, load management systems |

## Technical characteristics
| Parameter | Typical value |
|---|---|
| Rated service current (In) | 40 A / 0.04 kA (residential) up to 5000 A / 5 kA (industrial) |
| Rated operating voltage (Ue) | 120/208 V / 0.12‑0.208 kV, 230/400 V / 0.23‑0.4 kV, 480 V / 0.48 kV |
| Rated frequency | 50 Hz / 0.05 kHz or 60 Hz / 0.06 kHz |
| Switching time in open transition | < 167 ms / 0.167 s |
| Overlap time in closed transition | < 100 ms / 0.1 s |
| Admissible voltage difference for synchronization (ΔU) | ±5 % / ±0.05 pu |
| Admissible frequency difference for synchronization (Δf) | ±0.2 Hz / 0.0002 kHz |
| Maximum phase angle for synchronization | ±5° |
| Number of mechanical operations (service life) | ≥ 10 000 operations |
| Degree of protection (IEC 60529) | IP20 to IP54 typical |
| Ambient operating temperature | -5 °C / 23 °F to +40 °C / 104 °F (standard); on request up to -25 °C / -13 °F |

## Applications
Automatic transfer switches are used in:
- Residences with backup generator for essential loads (lighting, refrigeration, heating).
- Commercial establishments requiring continuity for point-of-sale equipment, refrigeration, or local servers.
- Hospitals and health centers, where uninterrupted power is critical for life support equipment and operating rooms.
- Data centers and telecommunications rooms, with closed transition or static ATS to avoid micro-interruptions.
- Industrial plants with continuous processes (chemical, steel, food) that install high-current ATS.
- Drinking water and wastewater pumping systems where prolonged interruption is unacceptable.

## Maintenance
Recommended preventive maintenance operations every 6 months or 500 operations include:
- Visual inspection of contacts, cables, and terminals, retightening of connections.
- Measurement of insulation resistance and contact resistance with micro-ohmmeter.
- Functional check of generator start/stop logic, transfer in both directions, and automatic reset.
- Cleaning of cabinet interior and ventilation filters with dry compressed air or vacuum cleaner.
- Review of programmed thresholds for undervoltage, overvoltage, frequency, and timers.
- Transfer test under load in real conditions to verify correct operation of the entire system.

## Advantages and disadvantages
| Advantages | Disadvantages |
|---|---|
| Full automation: no human intervention required during a grid outage | Higher initial cost than a manual transfer switch |
| Fast response: switching times less than 167 ms / 0.167 s in open transition | Requires periodic maintenance to ensure reliability of contacts and electronics |
| Protection against backfeeding to the grid, ensuring safety of utility maintenance personnel | Open transition produces a micro-interruption that can affect sensitive electronic equipment if closed transition ATS or auxiliary UPS is not used |
| Flexibility: ability to program timers, prioritize circuits, and perform load shedding in advanced models | Closed transition requires source synchronization and utility approval, increasing complexity |
| Integration with remote management systems and communication protocols for remote supervision | Static ATS, although offering interruption-free switching, have conduction losses in semiconductors and require thermal dissipation |

## Frequently Asked Questions (FAQ)
### What is the typical switching time of an open transition ATS?
The typical switching time in an open transition automatic transfer switch is less than 167 ms (0.167 s), sufficient for most loads not to lose their operational state.

### What voltage difference is allowed for a closed transfer?
For a closed transition ATS to operate safely, the voltage difference between the two sources must not exceed 5 %, a condition monitored by the controller before authorizing the overlap.

### How many operating cycles does a typical industrial ATS withstand?
An industrial ATS is designed to exceed 10 000 cycles of mechanical operation with contacts in no-load condition, and about 5 000 cycles with rated load according to electrical life tests.

### What is the maximum current an ATS can handle at low voltage?
Standard low-voltage ATS reach service currents up to 5000 A (5 kA) in open frame executions, suitable for main services of large installations.

### At what ambient temperature do standard ATS operate?
Most commercial ATS operate reliably in the ambient temperature range of -5 °C (23 °F) to +40 °C (104 °F); special versions exist for -25 °C (-13 °F) ensuring operation of the switching motor and electronics.

### How long does the stabilization signal last for return to the main grid?
The return-to-main-grid timer is typically programmed between 30 s and 15 min to ensure that the utility power has been stably restored before transferring the load back.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/piping-hvac-abbreviations-d_1694.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-bus-system-and-electrical-substation-layout/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
