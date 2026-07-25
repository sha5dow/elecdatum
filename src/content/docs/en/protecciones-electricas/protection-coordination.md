---
title: "Electrical protection coordination"
sidebar:
  label: "Electrical protection coordination"
description: "Technical reference: Electrical protection coordination"
keywords: ["electrical protection coordination selectivity study", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "coordination"
subcategory: "protection-coordination"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
Protection coordination, also called selectivity or discrimination, is the technique of adjusting overcurrent devices to ensure that, in the event of a fault in an installation, only the circuit breaker closest to the fault disconnects the circuit, maintaining service in the rest of the network. In low voltage systems, an adequate coordination design can limit interruption time to less than 0.5 seconds even for short-circuit faults up to 50 kA.

## Functional Requirements of Selective Protection
A reliable protection system must achieve a success rate greater than 99.9% in fault detection and clearing, ensuring that healthy parts of the installation remain in service.

| Requirement | Description | Typical Numerical Data |
|---|---|---|
| **Reliability** | The relay must operate only when the conditions for which it was designed are met, without acting in normal or unrelated transient conditions. | Unwanted trip rate < 0.1% (1 in 1000 operations) |
| **Selectivity** | Ability to trip only the necessary circuit breaker, preserving supply in unaffected branches. | Effective discrimination in 100% of faults for the total selectivity zone |
| **Sensitivity** | Detects fault currents from a minimum preset value, operating even with reduced short-circuit levels. | Pick-up setting from 1.2 times the rated current (In) of the circuit |
| **Speed** | The total interruption time must be short enough to avoid equipment damage and risks to people. | Typical operation time between 20 ms and 100 ms in distribution circuits |

## Selective Coordination Methods
There are four main selective coordination methods defined in IEC 60947‑2, which differ by the physical principle used to achieve discrimination and by the minimum selectivity margin they offer.

### Amperimetric Selectivity (Current)
Amperimetric selectivity is based on staggering the instantaneous trip currents of series-connected circuit breakers, so that the downstream device responds before the upstream one for the same fault magnitude. The instantaneous setting of the main circuit breaker is usually programmed to a value 1.5 to 2.0 times that of the secondary circuit breaker, providing a selectivity margin of 50% to 100%.

| Protection Level | Instantaneous Setting Current (example) | Selectivity Margin |
|---|---|---|
| Downstream circuit breaker Q2, In = 100 A | 500 A | – |
| Upstream circuit breaker Q1, In = 250 A | 1000 A | 2.0 (100%) |

### Chronometric Selectivity (Time)
Chronometric selectivity introduces an intentional delay in upstream devices using inverse-time curves or fixed timers, so that the protection closest to the fault operates without waiting and the next one waits a defined interval. The typical time step between adjacent curves is 0.2 s to 0.5 s, depending on the selectivity class.

| Device | Delay Setting (s) |
|---|---|
| Circuit breaker Q2 (downstream) | 0 s (instantaneous) |
| Circuit breaker Q1 (upstream) | 0.3 s |

### Energy-Based Selectivity
Energy-based selectivity analyzes the time evolution of the short-circuit current and distinguishes between faults that can be cleared by the local circuit breaker and those that exceed its interrupting rating, causing only the device with higher interrupting rating to trip. This method allows achieving total selectivity up to short-circuit currents exceeding 50 kA in molded case circuit breakers with electronic control.

### Zone Selective Interlocking (ZSI) Selectivity
Zone selective interlocking uses communication signals between protection relays at different levels. When a relay detects a fault, it sends a blocking command to the higher level, which delays its trip; if the fault is not cleared by the lower level within a typical gradient time of 100 ms, the higher level acts as backup. This technique is especially useful in distribution panels with numerous branch circuits.

## Setting Parameters of Protection Devices
Electronic overcurrent relays allow precise definition of thresholds and operating times through discrete or continuous adjustments. A relay with a graphic display can offer current adjustment steps as fine as 0.1 A within a range of 0.5 to 10 times the rated current (In).

| Parameter | Symbol | Typical Range | Applicable Dual Unit (if applicable) |
|---|---|---|---|
| Pick-up current (overload setting) | Is | 0.5 – 1.0 × In | A (absolute value in amperes) |
| Instantaneous trip current | Ii | 2 – 12 × In | A |
| Time multiplier setting (time dial) | TMS | 0.05 – 1.50 | dimensionless |
| Fixed delay for chronometric selectivity | t<sub>d</sub> | 0.1 – 3.0 s | s |
| Minimum separation between time-current curves | Δt | 0.20 – 0.40 s | s |

## Trip Curves and Inverse-Time Equations
The relationship between trip time and fault current follows standardized curves, whose shape is described by the general inverse-time equation. For a standard IEC normally inverse curve, the expression is:

> **t = TMS × (0.14 / ((I/Is)^0.02 – 1))**

where the terms are defined below.

| Variable | Meaning | Unit |
|---|---|---|
| t | Relay trip time | s |
| TMS | Time multiplier setting | dimensionless |
| I | Actual fault current | A |
| Is | Relay setting (pick-up) current | A |

## Coordination in Classified Areas
Protection of equipment in potentially explosive atmospheres imposes additional restrictions on maximum surface temperature, which must be respected throughout the coordination chain. The temperature code of a device indicates its maximum surface temperature in continuous operation and must be lower than the autoignition temperature of the gas or dust present.

| Temperature Code | Maximum Surface Temperature |
|---|---|
| T1 | 450 °C / 842 °F |
| T2 | 300 °C / 572 °F |
| T2A | 280 °C / 536 °F |
| T2B | 260 °C / 500 °F |
| T2C | 230 °C / 446 °F |
| T2D | 215 °C / 419 °F |
| T3 | 200 °C / 392 °F |
| T3A | 180 °C / 356 °F |
| T3B | 165 °C / 329 °F |
| T3C | 160 °C / 320 °F |
| T4 | 135 °C / 275 °F |
| T4A | 120 °C / 248 °F |
| T5 | 100 °C / 212 °F |
| T6 | 85 °C / 185 °F |

In intrinsically safe installations, coordination includes physical separation between intrinsically safe and non-intrinsically safe wiring, which according to ISA‑RP12.6 practice must be at least **50.8 mm / 2 in** to prevent transfer of hazardous energy to the classified area.

## Practical Applications and Selectivity Examples
In an industrial plant with three distribution levels (service entrance, secondary panels, and final loads), the application of chronometric selectivity combined with amperimetric selectivity can reduce downtime to less than 0.5 s for 95% of faults. For example, in a scheme with a main open-frame circuit breaker of 1600 A, molded case circuit breakers of 250 A in sub-feeders, and miniature circuit breakers of 20 A in lighting circuits, the trip curves are adjusted so that a short circuit in a luminaire causes only the 20 A MCB to operate, leaving the other levels in service.

## Advantages and Limitations of Coordination
Total selectivity guarantees continuity of supply in unaffected parts of the installation, but may require circuit breakers with higher interrupting rating and frame size at higher levels. In systems with high short-circuit currents (> 50 kA), energy-based selectivity offers the best solution, although it requires electronic equipment and precise curve study. The main limitation of chronometric selectivity is the increase in clearing time at upstream levels, which can compromise the thermal stability of cables; to compensate, a maximum fault time of 5 s is usually imposed in distribution circuits.

## Frequently Asked Questions (FAQ)
### What is selective coordination or discrimination?
It is the coordination of overcurrent protection devices so that, in the event of a fault, only the circuit breaker closest to the fault disconnects the circuit, preserving supply in the rest of the installation.

### What is the difference between total selectivity and partial selectivity?
Total selectivity is maintained for any short-circuit current value up to the maximum interrupting rating of the circuit breakers; partial selectivity is only valid up to a certain current level, above which both devices may trip.

### What selectivity methods are covered by IEC 60947‑2?
The standard recognizes amperimetric selectivity (by current staggering), chronometric (by time delays), energy-based selectivity, and zone selective interlocking (ZSI).

### Is it mandatory to apply selective coordination in all installations?
Not in all, but in those where service continuity is critical, such as hospitals, data centers, or continuous industrial processes, as required by codes such as the NEC (Article 700) or equivalent local standards.

### How is the selectivity margin between two circuit breakers calculated?
The time-current curves of the two devices are compared and it is verified that, for any fault current, the downstream circuit breaker clears the fault before the upstream circuit breaker begins timing its trip. A typical margin is a factor of 1.5 to 2 in the instantaneous setting or a time step of 0.2 s to 0.4 s in the chronometric domain.

### What advantages does zone selective interlocking (ZSI) offer?
It reduces clearing time at higher levels by avoiding unnecessary delays, since the protection relays communicate to decide which one should operate. The programmed wait time in the blocking command is typically on the order of 100 ms, much shorter than the cumulative delays of pure chronometric selectivity.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-area-protection-d_487.html
- **electrical4u.com**: https://www.electrical4u.com/protection-system-in-power-system/
