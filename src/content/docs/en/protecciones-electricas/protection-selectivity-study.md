---
title: "Protection selectivity study"
sidebar:
  label: "Protection selectivity study"
description: "Technical reference: Protection selectivity study"
keywords: ["protection selectivity study time current curve", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "coordination"
subcategory: "selectivity-study"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

A protection selectivity study allows restricting interruptions exclusively to the circuit affected by an overcurrent, increasing the availability of the electrical system above 99%. Through the coordinated analysis of time-current curves and device settings, it ensures that only the breaker closest to the fault operates, preserving supply in the rest of the installation.

## Purpose of the Selectivity Study

The study aims that for 100% of faults, disconnection occurs only in the protection element immediately upstream of the anomaly (overload or short circuit). This prevents unwanted chain tripping and maintains service continuity in non-faulted sections.

## Methods to Achieve Selectivity

There are four recognized methods to achieve selectivity in protection systems, all evaluated in this type of study.

### Amperimetric Selectivity

It is based on differences in breaking capacity or magnetic threshold of breakers. The device farthest from the supply is set to a lower instantaneous trip value, so that low-magnitude fault currents only activate the local protection.

### Chronometric Selectivity

It consists of introducing staggered time delays of 0.1 s to 0.5 s between consecutive protections. The downstream breaker operates first due to its shorter timing, while the upstream one holds the closure until that interval expires, always within the thermal withstand limits of the conductors.

### Energy Selectivity

It evaluates the specific energy (I²t) let-through of each device. It requires analysis of current waveforms during the short circuit and is usually applied in current-limiting breakers. Selectivity is verified by comparing the energy curves of the upstream and downstream devices for the entire range of fault currents.

### Logical Selectivity (Zone Interlocking)

It uses pilot wire communication between protection relays. When a relay detects a fault, it sends a blocking signal to the immediately upstream breaker, which will only trip if it does not receive that signal. This method ensures operating times below 100 ms even under high fault current conditions.

## Adjustment Parameters in Protection Relays

Overcurrent relays are characterized by several settings that directly influence selectivity, such as pick-up current and time multipliers. The current setting typically ranges from 50% to 200% of the CT secondary rated value for phase relays, while for ground relays the range is usually from 10% to 70%.

### Pick-up Current

It is the current value at which the relay begins to operate, overcoming the restraining force of its contacts.

### Current Setting

It is expressed as a percentage relative to the CT secondary rated current.

> **Current setting (%) = (Relay pick-up current / CT secondary rated current) × 100**

| Current adjustment range | Phase relays | Ground relays |
| --- | --- | --- |
| Minimum value | 50 % | 10 % |
| Maximum value | 200 % | 70 % |
| Adjustment step | 25 % | 10 % |

### Plug Setting Multiplier (PSM)

It relates the fault current flowing through the relay coil to the pick-up current.

> **PSM = Fault current in the relay / Relay pick-up current**

Practical example: with a CT ratio of 200/1 A and a current setting of 150%, the pick-up current is 1.5 A. If the primary fault current is 1000 A, the secondary current results in 5 A, and the PSM is 5 / 1.5 = 3.33.

| Parameter | Metric / Imperial value |
| --- | --- |
| CT primary rated current | 200 A / 200 A |
| CT ratio | 200/1 A / 200/1 A |
| Current setting | 150 % |
| Pick-up current | 1.5 A / 1.5 A |
| Primary fault current | 1000 A / 1000 A |
| Secondary fault current | 5 A / 5 A |
| Calculated PSM | 3.33 |

### Time Setting Multiplier (TSM)

The time setting dial is calibrated from 0 to 1 in steps of 0.05 and determines the fraction of the total travel that the moving contacts of the electromechanical relay must perform. Multiplying the total operating time (obtained from the time/PSM curve) by the TSM gives the actual operating time. For example, if for a PSM of 10 the total time is 3 s and the TSM is set to 0.1, the actual time will be 0.3 s.

## Time-Current Curve (TCC)

A typical curve shows that for a PSM of 10 the total relay operating time is 3 s with TSM = 1. As the fault current increases, the trip time decreases following an inverse characteristic used to coordinate devices in cascade.

| PSM (dimensionless) | Total operating time (s) / (s) |
| --- | --- |
| 1.5 | 30 / 30 |
| 2 | 10 / 10 |
| 5 | 4 / 4 |
| 7 | 3.3 / 3.3 |
| 10 | 3 / 3 |

With the values in the table, the curve can be plotted, and for any combination of TSM and PSM, the operating time is calculated as the product of the total time and the TSM.

## Evaluation of Selectivity with TCC Curves

In a formal study, the curves of all breakers and relays in the system are superimposed, verifying that there are no overlaps in the same current band that could cause simultaneous tripping. A system is 100% selective when, for currents between 10% of the setting current and the maximum short-circuit current of the installation, the device with the lower rating or timing always operates before any of those located upstream.

Verification is performed on logarithmic plots where the horizontal axis represents current (in amperes) and the vertical axis represents time (in seconds), confirming that the curves maintain a minimum separation of 0.2 s at possible intersection points.

## Frequently Asked Questions (FAQ)

### What is selectivity?

Selectivity, also called discrimination, is the coordination of overcurrent protection devices so that, in the event of a fault, only the breaker immediately upstream of the anomaly operates, minimizing supply interruption.

### What is the difference between amperimetric and chronometric selectivity?

Amperimetric selectivity acts by adjusting different magnetic trip thresholds or breaking capacities, while chronometric selectivity introduces staggered time delays. The former is effective for low fault currents, and the latter for higher values where current steps are insufficient.

### How is the plug setting multiplier (PSM) defined?

PSM is the ratio of the actual current flowing through the relay coil during a fault to the configured pick-up current. A PSM of 5, for example, indicates that the fault current is five times the relay’s minimum operating current.

### What is the purpose of the time setting multiplier (TSM)?

TSM determines the fraction of the total operating time (extracted from the time/PSM curve) that the relay will actually take to complete its mechanical travel. It allows fine adjustment of the timing of each protection in the selectivity chain.

### What information does the time-current curve provide?

The curve relates the device trip time to the magnitude of the overload or short-circuit current. From it, the operating time for any current value is identified and coordination with other system devices is checked.

### When is zone interlocking recommended?

This method is especially useful in installations with high short-circuit levels or where fault clearing below 100 ms is required. By exchanging signals between relays, total selectivity is achieved without the need for prolonged time delays.

## References
- **electrical4u.com**: https://www.electrical4u.com/pick-up-current-current-setting-plug-setting-multiplier-and-time-setting-multiplier-of-relay/
