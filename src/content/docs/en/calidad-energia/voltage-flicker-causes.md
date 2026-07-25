---
title: "Voltage flicker causes"
sidebar:
  label: "Voltage flicker causes"
description: "Technical reference: Voltage flicker causes"
keywords: ["voltage flicker causes measurement", "calidad-energia"]
category: "calidad-energia"
topic: "voltage-quality"
subcategory: "voltage-flicker"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Voltage flicker, internationally known as *flicker*, is the rapid fluctuation of the supply voltage that causes a perceptible change in lamp brightness, and can disturb users or affect sensitive electronic equipment. The phenomenon is caused by the voltage drop that a variable current load produces across the impedance of the distribution network; the greater the load variation relative to the short-circuit power available at the point of common coupling, the more likely and severe the flicker becomes.

## Mechanism of generation

The immediate cause of flicker is the rapid variation of current demanded by a piece of equipment or a set of loads. When this current flows through the line impedance (resistance and reactance of the transformer, cables, and service entrance), a dynamic voltage drop appears that causes the voltage at the terminals of other users to oscillate. The magnitude of the fluctuation depends mainly on two factors:

| Factor | Description |
| --- | --- |
| Amplitude of the load step | The voltage drop is proportional to the current variation (ΔI). A sudden increase in current demand generates a momentary voltage depression, and a sudden disconnection produces a peak. |
| Upstream network impedance | The greater the short-circuit impedance (weak network), the greater the voltage drop for the same ΔI, so the network amplifies the flicker. The relationship between the fluctuating load and the short-circuit capacity at the point of common coupling is the determining parameter of severity. |

> **ΔV ≈ I_red · Z_red**, where ΔV is the voltage fluctuation, I_red is the fluctuating component of the current, and Z_red is the equivalent system impedance seen from the evaluation point.

## Main causes

Flicker always originates in loads that demand variable active or reactive power. The most representative sources are:

- Electric arc furnaces in steel mills and foundries, due to the erratic nature of the arc and sudden power changes during melting.
- Frequent starting of large motors, such as elevators, compressors, or pumps, which cause repetitive current peaks.
- Resistance welding machines, which operate with short-duration high-current pulses.
- Equipment with phase control regulation (thyristors) that chops the current waveform, such as dimmers or soft starters that do not filter properly.
- Appliances with periodic on/off cycles, such as heat pumps, air conditioners, or washing machines, when the installation is weak.

The severity of flicker does not depend on the absolute value of the load power, but on the **magnitude and frequency of load changes**. The same power step generates more flicker in a rural network with low short-circuit power than in a robust industrial network.

## Typical flicker-generating loads

| Load type | Fluctuation characteristic | Typical examples |
| --- | --- | --- |
| Electric arc loads | Chaotic current fluctuation, wide frequency spectrum | Arc furnaces, arc welding |
| Motors with frequent direct starting | Current step 5-8 times nominal for 0.5‑3.0 s / 0.5‑3.0 s, repeated every few seconds | Elevators, well pumps, air compressors |
| Loads controlled by power electronics | Current waveform chopping, harmonic generation, and reactive power fluctuations | Variable frequency drives, static starters without filter |
| Heating/regulated resistance equipment | Power step changes when switching heating elements | Resistance furnaces, electric boilers |

## Measurement and standards

Flicker quantification is performed with a standardized flickermeter, defined in standard **IEC 61000-4-15**. This instrument simulates the behavior of a reference incandescent lamp (230 V/60 W or 120 V/60 W) and the human eye-brain perception system. From the processed signal, two statistical indices are obtained:

| Index | Observation interval | Admissible limit (IEC 61000-3-3 standard) |
| --- | --- | --- |
| **Pst** (short-term flicker severity) | 10 min / 600 s | 1,0 |
| **Plt** (long-term flicker severity) | 2 h / 7200 s | 0,65 |

The Plt value is calculated as the cubic mean of several consecutive Pst values measured over a two-hour period. The scale factor of both indices has been calibrated so that a unit value (P=1,0) corresponds to the threshold at which 50 % of observers consider the flicker annoying.

## Effects of flicker

- **Visual discomfort and fatigue**: The luminous fluctuation is annoying even at low levels; in photosensitive individuals it can trigger epileptic seizures.
- **Disruption of electronic equipment**: Television receivers, monitors, and industrial control systems may operate erratically if the supply voltage oscillates.
- **Loss of process performance**: Machines that require constant electromagnetic torque (precision motors) may suffer speed variations or vibrations.

## Mitigation strategies

- Reduce the amplitude of the load step using soft starters or variable frequency drives.
- Decrease the frequency of operations; for example, space out motor starts.
- Increase the short-circuit power at the connection point (move to a higher voltage level, install a dedicated transformer).
- Install static reactive power compensators (SVC) or synchronous compensators that smooth voltage fluctuations.
- Use active filters or series compensators to decouple the disturbing load from the rest of the network.

## Frequently Asked Questions (FAQ)

### What is flicker or voltage flicker?
It is the rapid oscillation of the supply voltage that causes a visible variation in lamp brightness. It is quantified using the Pst and Plt indices defined in IEC 61000-4-15.

### What are the main causes of flicker?
Loads that demand highly variable currents, such as arc furnaces, frequent motor starting, resistance welders, and electronic regulation equipment without filters. The severity depends on the magnitude of the load fluctuation and the network impedance.

### How is flicker severity measured?
With a flickermeter according to IEC 61000-4-15, which emulates a reference incandescent lamp and the human visual system, calculating the Pst index over 10-minute intervals and the Plt over 2 hours.

### What Pst and Plt values are considered acceptable?
The IEC 61000-3-3 standard establishes a limit of Pst ≤ 1,0 and Plt ≤ 0,65. A value of 1,0 represents the threshold at which 50% of people perceive the flicker as annoying.

### How can flicker be reduced in an installation?
By reducing the amplitude or frequency of load changes (progressive starters, variable speed drives), reinforcing the network (increase in short-circuit power), or installing static compensators (SVC) that absorb fluctuations.

### What standard regulates flicker emission?
Flicker emission in low voltage is limited by IEC 61000-3-3 (equipment with current ≤ 16 A per phase). Measurement is governed by IEC 61000-4-15, and there are complementary reports such as IEC TR 61547-1 for luminaires.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/flow-meters-d_493.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/temperature-drift-in-electronic-circuits-resistors-and-operational-amplifiers/
