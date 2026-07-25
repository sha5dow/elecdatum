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

## Definition  
Electrical protection coordination, also called selectivity or discrimination, consists of the arrangement and adjustment of overcurrent protection devices so that, in the event of a fault, only the minimum portion of the circuit directly affected is cleared, preserving supply continuity in the rest of the installation. Selectivity is evaluated for the entire range of possible overload and short-circuit currents, from the setting value to the maximum fault current expected at the installation point, and for any opening time associated with those current levels.

## Principle of selectivity  
The fundamental principle is to confine the service interruption exclusively to the faulted circuit. The protection closest to the downstream load must operate before any upstream device, avoiding unnecessary tripping at group feeders or the main service. Selectivity is achieved by coordinating the trip characteristics of circuit breakers, fuses, and protection relays, analyzing their time-current curves and response times for different fault magnitudes.

## Selectivity methods  
There are four basic methods to achieve discrimination between protections:

| Method | Operating principle | Typical devices |
| --- | --- | --- |
| **Amperometric** | Different breaking capacities or ratings; the upstream device withstands a higher fault current than the downstream device. | Circuit breakers, fuses |
| **Chronometric** | Programmed time delay on the upstream device to allow the downstream device to clear the fault first. | Protection relays, circuit breakers with electronic trip units |
| **Energy (or energy selectivity)** | Comparative analysis of current waves (Joule integral I²t); the upstream breaker allows the energy necessary for the downstream device to operate without itself initiating opening. | Molded case and open frame circuit breakers |
| **Zone (Selective interlocking – ZSI)** | Communication between devices via a pilot wire; the upstream unit receives a signal from the downstream unit and withholds its instantaneous trip command, switching to timed delay only if the fault persists. | Digital relays, electronic control units |

### Amperometric selectivity  
It is based on staggering the magnetic trip thresholds or nominal currents of the devices. For example, a 100 A downstream breaker with magnetic trip at 1000 A can be coordinated with a 250 A upstream breaker whose magnetic threshold is set at 2500 A, so that for a 1500 A fault only the smaller breaker operates. Selectivity is total if the maximum short-circuit current at the terminals of the downstream device does not exceed the instantaneous trip threshold of the upstream device.

### Chronometric selectivity  
It consists of intentionally delaying the opening of the upstream breaker by a time setting (e.g., 0.1 s / 100 ms) while the downstream breaker has instantaneous trip (0.02 s / 20 ms). The time difference, typically between 70 ms and 300 ms, ensures that the fault is extinguished at the lower level. Electronic trip units allow programming of definite-time or inverse-time curves. The equation governing the timed delay is usually of the form:

> **t_trip = k / (I/In)^α - 1**

where:
| Symbol | Quantity | Unit (metric / imperial) |
| --- | --- | --- |
| t_trip | Trip time | s / s |
| I | Fault current | A / A |
| In | Rated current of the breaker | A / A |
| k, α | Curve constants (per IEC 60255‑151 or ANSI C37.112) | dimensionless / dimensionless |

### Energy selectivity  
It is based on comparing the specific let-through energy (I²t) of the devices. When the energy let through by the upstream breaker during the fault, limited by its own breaking capacity, is less than the energy required to melt the fuse element or to actuate the downstream breaker trip device, selectivity is maintained. The basic condition is:

> **I²t_let-through (upstream) < I²t_fusion or pre-arcing (downstream)**

This method is typical in fuse-breaker coordination and between current-limiting breakers, and is verified using energy curves published by the manufacturer for voltages of 230/400 V or 480 V.

### Zone selectivity (interlocking)  
It uses a pilot conductor that connects the trip units of all breakers on the same line. In case of a fault, the downstream breaker that detects the current sends a blocking signal to the upstream breaker, which inhibits its instantaneous trip and activates a programmed delay (e.g., 0.1 s). If the fault is cleared by the downstream breaker, the signal ceases and the upstream breaker does not trip. This system guarantees total selectivity for high short-circuit currents, even when instantaneous thresholds overlap.

## Settings and trip curves  
Protection relays must meet the functional requirements of **reliability**, **selectivity**, **sensitivity**, and **speed**. Selectivity requires that the relay operate only under conditions for which it has been configured, avoiding nuisance operations. Typical settings in an industrial distribution system are:

| Level | Device | Magnetic threshold (Im) | Delay (td) |
| --- | --- | --- | --- |
| Main service | Circuit breaker 1600 A | 12 kA / 12 kA | 0.5 s / 0.5 s |
| Feeder | Circuit breaker 400 A | 4 kA / 4 kA | 0.2 s / 0.2 s |
| Final load | Molded case breaker 100 A | 1 kA / 1 kA | Instantaneous (< 20 ms / < 0.02 s) |

Trip curves are plotted on a log-log current-time scale; the separation between the curves of two consecutive devices must be at least 0.1 s to ensure chronometric selectivity over the entire overcurrent range.

## Example of coordination study  
In an installation with a 1000 kVA, 400 V transformer, secondary rated current 1443 A, three protection levels are installed:

- **Main service**: Open frame circuit breaker 1600 A, magnetic threshold 12×In = 19200 A, delay 0.4 s.  
- **Motor feeder**: Circuit breaker 250 A, magnetic threshold 9×In = 2250 A, delay 0.1 s.  
- **Motor protection**: Motor protection circuit breaker with magnetic trip at 500 A, instantaneous.

When a short circuit of 1500 A occurs at the motor terminals, the motor protection circuit breaker operates in less than 10 ms. If the fault reaches 8000 A (within the feeder), the 250 A breaker would trip in 0.1 s, while the main service breaker would wait its 0.4 s before intervening, maintaining selectivity. The study must verify that the maximum short-circuit current at each point does not force the instantaneous trip of the upstream level.

## Considerations for installations in hazardous atmospheres  
When coordination is applied in classified areas (Class I, Division 1 or Zone 0, 1, 2), protection devices must comply with specific techniques that limit surface energy and contain possible internal explosions. The maximum allowable surface temperatures on the enclosure are related to the equipment temperature class, whose code indicates the maximum surface temperature that must not exceed the autoignition temperature of the surrounding atmosphere.

| Temperature code | Maximum surface temperature |
| --- | --- |
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

In coordination, circuit breakers and relays must be selected that, under fault conditions, do not raise the enclosure temperature above the corresponding class, and that respect the Ex protection methods (e.g., Ex d, Ex i, Ex e) applied to the enclosure. Selectivity must not compromise the integrity of explosion protection, so trip times must be compatible with the thermal inertia of the enclosure.

## Frequently Asked Questions (FAQ)
### What is selectivity in an electrical protection system?
It is the ability of the protection set to disconnect only the circuit where the fault occurs, leaving the rest of the installation in service. It is achieved by coordinating the current and time settings of upstream and downstream devices.

### What are the four main selectivity methods?
They are amperometric selectivity (based on different trip current values), chronometric (time delays), energy (comparison of the Joule integral I²t), and zone selectivity or interlocking (ZSI, communication between protections).

### What is the difference between total selectivity and partial selectivity?
Total selectivity is maintained for any fault current value, from overload to the maximum available short-circuit current. Partial selectivity is only guaranteed up to a certain current limit, above which both devices may trip simultaneously.

### How is chronometric selectivity guaranteed?
By programming a time delay (e.g., 0.1 s to 0.5 s) on the upstream breaker, while the downstream device operates instantaneously. The time difference is chosen so that the fault is extinguished by the first device before the second begins its opening.

### Why is protection coordination critical in hospitals?
In hospitals, continuity of supply to critical areas (operating rooms, ICUs) is vital. Proper coordination prevents a fault in a secondary circuit from disconnecting the entire installation, meeting electrical safety requirements of standards such as NFPA 70 and IEC 60364-7-710.

### What standards govern selectivity studies?
Studies are based on coordination requirements defined in NFPA 70 (NEC), Articles 100 and 517; IEC 60947‑2 (low-voltage circuit breakers); and IEC 60255‑151 (protection relay characteristics). Manufacturers publish selectivity tables verified in accordance with these standards.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-area-protection-d_487.html
- **electrical4u.com**: https://www.electrical4u.com/protection-system-in-power-system/
