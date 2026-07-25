---
title: "Harmonic filter types"
sidebar:
  label: "Harmonic filter types"
description: "Technical reference: Harmonic filter types"
keywords: ["harmonic filter types passive active", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "harmonic-filter-types"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Harmonic filters are devices intended to mitigate harmonic currents and voltages in electrical systems, where total harmonic distortion (THD) can exceed 40% in industrial environments with a high concentration of non-linear loads. They are classified into two main families —passive and active— according to their operating principle and components, each with specific capabilities for improving power quality.

## Passive Filters

Passive filters are designed to tune specific harmonics, typically 5th (250 Hz) and 7th (350 Hz) in 50 Hz networks, although they can also cover the 11th and 13th orders. They consist exclusively of combinations of resistors (R), inductors (L), and capacitors (C) that form series or parallel resonant circuits. The operating principle is based on offering a low-impedance path at the frequency of the harmonic to be eliminated, diverting it from the system to the filter. The tuning frequency is calculated using the expression:

> **f₀ = 1 / (2π · √(L·C))**

| Symbol | Quantity | Unit (SI) |
| --- | --- | --- |
| f₀ | Resonant frequency | Hz |
| L | Inductance | H (henry) |
| C | Capacitance | F (farad) |

These filters do not require external power or active components, making them simple and economical. However, they have important limitations: their size is considerable, they are sensitive to variations in network parameters, they can resonate with the system impedance, and they only mitigate the harmonics for which they were tuned, making them inflexible in dynamic environments.

## Active Filters

Active power filters are capable of compensating harmonics up to the 50th order, corresponding to frequencies up to 2.5 kHz in 50 Hz systems, with response times less than 1 ms. They use power electronics (IGBT, MOSFET) to actively inject a compensation current of equal magnitude but opposite phase with respect to the present harmonic current. In this way they cancel harmonic content without needing to tune fixed frequencies.

Unlike passive filters, active filters require an external power supply and a control system based on DSP or FPGA. The most widespread topology is the shunt active filter, which is connected in parallel at the point of common coupling (PCC). In addition to eliminating harmonics, they can compensate reactive power and balance three-phase currents, dynamically adapting to changing load conditions. Control strategies such as hysteresis control, deadbeat control, or the instantaneous reactive power theory (p-q) enable fast and accurate response.

## Comparison of Passive and Active Filters

In systems with total harmonic distortion greater than 8% in current or 5% in voltage, the selection between passive and active filters is critical. The following table summarizes the most relevant aspects.

| Parameter | Passive Filter | Active Filter |
| --- | --- | --- |
| Operating principle | Harmonic diversion via LC resonance | Counterphase current injection |
| Components | R, L, C (no semiconductors) | Power converters, DSP, sensors |
| Harmonic range | One single order per stage (5°, 7°, 11°, 13°) | Multiple orders simultaneously (up to 50°) |
| Adaptability | Fixed, requires redesign for network changes | Dynamic, adapts in real time |
| Size and weight | High (bulky reactors and capacitors) | Compact, especially at low power |
| Relative cost | Low for one or two harmonics | Medium-high; lower long-term due to versatility |
| Resonance risk | High; can create new resonant frequencies | Virtually none |
| Internal losses | Low (≈ 0,5 – 1 % of rated power) | Moderate (≈ 2 – 5 %) |
| Reactive compensation capability | Partial (fixed capacitor) | Yes, dynamically adjustable |
| Maintenance | Minimal, robust passive components | Requires periodic inspection of electronics |

## Applications

Passive filters are mainly installed in fixed loads such as variable frequency drives up to 500 kW, HVAC systems, induction furnaces with stable regimes, and power factor compensation in industrial plants with predominance of the 5th harmonic. Active filters, on the other hand, are used in systems with power from 100 kVA, where loads vary frequently (data centers, flexible production lines, electric vehicle chargers). They are also used in photovoltaic installations and wind turbines to meet grid quality requirements. When conditions demand it, both types are combined in hybrid configurations that take advantage of the robustness of the passive filter for the dominant harmonics and the flexibility of the active filter for the rest of the spectrum.

## Selection Criteria

The selection of a harmonic filter must consider the harmonic distortion at the point of common coupling, with typical limits of THDv < 5% and THDi < 8% according to IEEE 519. Other determining factors are load variability, the presence of higher order harmonics, available space, initial budget, and operating costs due to losses. If the installation has a stable harmonic spectrum concentrated in low orders, passive filters offer an economical solution. If distortion is dynamic or multiple frequencies exist, an active filter is recommended. Hybrid configurations are optimal when seeking to minimize the size of the active converter without sacrificing flexibility.

## Frequently Asked Questions (FAQ)

### What is the main difference between a passive and an active filter?
The passive filter diverts harmonic currents to a tuned LC circuit, while the active filter injects a compensation current in opposite phase to cancel them.

### What harmonics can a passive filter eliminate?
Normally it targets a single harmonic order per stage (5th, 7th, 11th, 13th), requiring an independent filter for each frequency to be eliminated.

### Do active filters require external power?
Yes, they need an auxiliary power source to supply the electronic converters and the control system.

### Can passive filters correct power factor?
Yes, in its simplest configuration the capacitor bank delivers capacitive reactive power, although in a fixed and non-adjustable manner.

### What is the typical service life of an active filter?
With proper maintenance and rated conditions, it exceeds 15 years of operation, although the DC bus capacitors may require replacement at 8-10 years.

### What standard limits harmonic distortion in industrial installations?
IEEE 519 sets limits of THDv < 5% at the PCC and maximum harmonic currents as a function of the short-circuit ratio.

## Sources Consulted

No verified external source available.