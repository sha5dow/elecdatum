---
title: "VFD parameter configuration"
sidebar:
  label: "VFD parameter configuration"
description: "Technical reference: VFD parameter configuration"
keywords: ["VFD parameter configuration acceleration deceleration", "sistemas-control"]
category: "sistemas-control"
topic: "variable-frequency-drives"
subcategory: "vfd-parameter-configuration"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The configuration of acceleration and deceleration parameters in a variable frequency drive (VFD) determines how the motor responds to speed setpoint changes, directly impacting the smoothness of starting, braking, and mechanical protection. These ramp times define the rate of change of the output frequency (and therefore motor speed), and can be adjusted between 0.1 s and 3600 s depending on the application. Proper parameterization avoids current peaks, reduces stress on transmissions, and ensures optimal process control.

## Acceleration and Deceleration Ramp Parameters

The main parameters related to ramp management in a VFD are the **acceleration time** (Acceleration Time) and the **deceleration time** (Deceleration Time). They are generally defined as the time required for the frequency to go from 0 Hz to the maximum frequency (or motor rated frequency) and vice versa.

| Parameter | Description | Typical Range | Unit |
|-----------|-------------|--------------|--------|
| Acceleration Time 1 (P.03 or F002) | Time from 0 Hz to maximum frequency | 0.1 – 3600 | s |
| Deceleration Time 1 (P.04 or F003) | Time from maximum frequency to 0 Hz | 0.1 – 3600 | s |
| Acceleration Time 2 | Second ramp set (multi-speed) | 0.1 – 3600 | s |
| Deceleration Time 2 | Second ramp set | 0.1 – 3600 | s |
| Maximum Frequency (Fmax) | Reference frequency for ramp calculation | 50 / 60 (EU) 60 / 60 (US) | Hz |
| Ramp Curve | Linear or S-curve | Linear / S1 / S2 | — |

Most VFDs allow programming up to eight different ramps, selectable via digital inputs. Values are entered in seconds, but internally the drive calculates the frequency variation per second (Hz/s), which is the actual acceleration rate.

## Mathematical Relationship Between Ramp Time and Acceleration

The linear acceleration of the load translated to the motor shaft is linked to the frequency variation through synchronous speed. For an induction motor, the mechanical speed in rpm is given by:

> **n = 120 × f / p**

where f is the frequency (Hz) and p is the number of poles. The angular acceleration α (rad/s²) is related to the frequency variation over time Δf/Δt by the formula:

> **α = (2π / 60) × (120 / p) × (Δf/Δt) = (4π / p) × (Δf/Δt)**

| Variable | Symbol | Units (metric / imperial) |
|----------|---------|---------------------------|
| Motor final speed | n_f | rpm |
| Motor initial speed | n_i | rpm |
| Frequency variation | Δf = f_f - f_i | Hz |
| Configured ramp time | Δt | s |
| Angular acceleration | α | rad/s² |
| Number of poles | p | — |
| Available accelerating torque | T | N·m / lb·ft |
| Total moment of inertia referred to motor | J | kg·m² / lb·ft² |

From Newton's second law for rotation (T = J × α), the minimum achievable ramp time is obtained with:

> **Δt_min = J × (2π/60) × (n_f - n_i) / T**

Numerical example: for a 4-pole motor (p=4) with rated speed 1750 rpm, rated torque 35 N·m and total moment of inertia 0.15 kg·m², the acceleration time from 0 to 1750 rpm is Δt = 0.15 × (2π/60) × 1750 / 35 ≈ 7.85 s. In real VFDs, a somewhat larger value is programmed (e.g., 10 s) to avoid overcurrents.

## Types of Ramp Curves

VFDs offer ramp modes that influence the smoothness of movement:

- **Linear ramp:** the frequency varies uniformly (constant acceleration). Suitable for most pumps, fans, and conveyors.
- **S-curve:** the transition follows a sigmoid curve (gradual acceleration at start and end). Used in applications requiring minimum mechanical jerk (elevators, cranes, machine tools). The additional parameter is usually 'S-curve time' (0 to 2 s), which defines the rounding of corners.

| Ramp type | Acceleration | Jerk | Typical applications |
|---------------|-------------|--------------|----------------------|
| Linear | Constant | ∞ (theoretical) | Pumps, fans, conveyors |
| Smooth S-curve | Controlled variable | Programmable finite | Elevators, packaging, people movement |
| Double S-curve | Two curvature zones | Adjustable finite | Machine tools, robots |

The combined parameterization (acceleration time + S-curvature) defines the actual speed profile.

## Recommended Configuration Values

The choice of ramp time depends on the load torque, load inertia, and electrical limitations. As a starting point, the following are recommended:

| Application | Acceleration time | Deceleration time |
|------------|----------------------|---------------------------|
| Centrifugal pumps | 2 – 10 s | 2 – 10 s |
| Axial fans | 5 – 20 s | 5 – 20 s |
| Conveyor belts (light load) | 1 – 5 s | 1 – 3 s |
| Conveyor belts (heavy load) | 5 – 15 s | 3 – 10 s |
| Cranes and hoists | 3 – 10 s | 3 – 10 s |
| Centrifuges | 30 – 120 s | 30 – 180 s (with braking resistor) |
| Extruders | 5 – 30 s | 5 – 30 s |

To avoid overloads, the deceleration time must consider whether the drive has a braking resistor (DBR). If it does not and the load has high inertia, the regenerative energy raises the DC bus voltage, causing an overvoltage fault. In that case, the deceleration time must be increased or a braking chopper added.

## Table of Typical Parameters in Commercial VFDs

The following table shows actual parameters taken from datasheets of general-purpose VFDs (200 V – 480 V, 0.4 kW to 75 kW), covering the most common brands on the market:

| Parameter (code) | Adjustment range | Default value | Units |
|--------------------|-----------------|-------------------|----------|
| Acceleration time 1 (F02 / P03) | 0.1 to 3600 | 10.0 | s |
| Deceleration time 1 (F03 / P04) | 0.1 to 3600 | 10.0 | s |
| Acceleration time 2 (E10 / P19) | 0.1 to 3600 | 15.0 | s |
| Deceleration time 2 (E11 / P20) | 0.1 to 3600 | 15.0 | s |
| Smooth S-curve (H07 / P42) | 0.00 to 2.00 | 0.20 | s |
| Fast stop (time) (F08 / P12) | 0.1 to 3600 | 5.0 | s |
| Maximum frequency (F15 / P18) | 50.0 / 60.0 selectable | 50.0 (EU) 60.0 (US) | Hz |
| DC injection after stop (time) (F12 / P14) | 0.0 to 10.0 | 0.5 | s |

These values are merely illustrative and should be adapted to the installation.

## Effects of Incorrect Configuration

An excessively short ramp (e.g., 0.1 s for a 15 kW motor with inertial load) causes:

- **Instantaneous current overload** (peak > 200 % In), with possible protection trip.
- **High mechanical stress** on belts, chains, or couplings, reducing their service life.
- **Cavitation in pumps** or water hammer in pipes due to sudden fluid acceleration.

An excessively long ramp (e.g., 300 s in a fan that does not require it) causes:

- **Loss of productivity**, especially in fast cycle applications.
- **Additional motor heating** during prolonged start with high current but low cooling speed.

During deceleration, insufficient time without a braking resistor triggers the **DC bus overvoltage (OV)** protection. In VFDs without a braking resistor, it is typical to set the deceleration time to at least 2‑3 times the acceleration time for inertial loads.

## Practical Adjustment Procedure

1. Set the acceleration time to the value suggested in the application table.
2. Start the motor unloaded and verify no alarms.
3. With the load coupled, start and monitor the current via the VFD display or software.
4. If peak current exceeds 110–120% of rated, increase the time in steps of 1 s.
5. For deceleration, brake from maximum speed and observe the DC bus voltage (monitoring parameter). If it approaches the overvoltage limit (typically 410 V for 230 V AC supplies or 820 V for 400 V AC), increase the deceleration time.
6. If an S-curve ramp is required, enable the curve and adjust the S-curvature parameter, increasing it until noticeable jerks are eliminated.

## Frequently Asked Questions (FAQ)

### What is the difference between the acceleration time in a VFD and the linear ramp of a soft starter?

In a VFD, the acceleration time controls the output frequency, so the motor actually starts at low speed with full torque available. In a soft starter, only the voltage is limited, so torque is reduced approximately with the square of the voltage. The VFD allows much longer ramps (up to 3600 s) without overheating the motor, while a soft starter must not remain in a prolonged ramp to avoid overheating at low speed.

### Why does the VFD trip on overvoltage during deceleration if the set time is short?

When the motor brakes, it acts as a generator, returning energy to the VFD's DC bus. If deceleration is very fast, that energy is not dissipated and the bus voltage rises until it reaches the protection threshold. The solution is to install an external braking resistor or increase the deceleration time so that the energy is dissipated gradually.

### Is it necessary to program the same acceleration and deceleration time?

Not necessarily. In many applications, the acceleration time is defined by the VFD current capacity and the required starting torque, while the deceleration time depends on the regenerative energy and the presence of dynamic braking. It is common for the deceleration time to be longer (even double) than the acceleration time.

### What effect does the S-curve ramp have on current consumption?

The S-curve ramp reduces the initial current peak because the angular acceleration starts gradually, avoiding the sudden current demand to overcome static inertia. Although the average acceleration is maintained, the smoothed profile allows lower maximum current variation rates (dI/dt).

### Can I change the ramp times while the motor is running?

Yes, most VFDs allow modifying ramp parameters in real time without stopping the motor. The change takes effect immediately or at the next acceleration/deceleration ramp edge, depending on the manufacturer's configuration. This is useful in processes with load variations.

### How does load inertia influence the selection of acceleration time?

Inertia is the dominant factor. The greater the inertia, the more accelerating torque is needed to move the load in the same time, or a longer acceleration time is required to keep the current within the VFD limits. The formula Δt = J × Δω / T shows the linear dependence on inertia.

## References
- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=KlEOk86_3Uc
