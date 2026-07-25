---
title: "VFD braking methods"
sidebar:
  label: "VFD braking methods"
description: "Technical reference: VFD braking methods"
keywords: ["VFD braking methods dynamic regenerative", "sistemas-control"]
category: "sistemas-control"
topic: "variable-frequency-drives"
subcategory: "vfd-braking-methods"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Braking methods in variable frequency drives (VFDs) are classified into two main categories: rheostatic braking, which dissipates braking energy as heat through resistors, and regenerative braking, which returns the energy to the power supply. Typical braking power in industrial applications can reach up to 150 % of the motor rated power for short periods, and the conversion efficiency of modern regenerative braking exceeds 95 %.

During braking, the induction motor acts as a generator, converting the kinetic energy of the load into electrical energy. The VFD manages this energy by raising the voltage on the DC bus. When the bus voltage exceeds a predefined threshold — typically between 750 V DC / 810 V DC and 800 V DC / 840 V DC for 400 V AC / 460 V AC drives — the braking circuit is activated. Available braking power depends on motor speed and the dissipation system capacity.

> **P_braking = (J × ω²) / (2 × t_braking)**

| Variable | Description | Unit |
| --- | --- | --- |
| P_braking | Braking power | W or kW |
| J | Total load moment of inertia | kg·m² / lb·ft² |
| ω | Initial angular speed | rad/s |
| t_braking | Desired braking time | s |

## Rheostatic Braking

Rheostatic braking dissipates the generated energy in external power resistors, known as braking resistors. The rated power of these resistors is typically selected between 10 % and 150 % of the motor power, depending on load inertia and duty cycle. A typical system can handle power peaks up to 250 kW / 335 hp during emergency stops, with resistor surface temperatures that can reach 250 °C / 482 °F.

| Parameter | Typical Range |
| --- | --- |
| Minimum allowed resistance | 10 Ω to 100 Ω depending on power |
| Dissipated power | 0.5 kW to 500 kW / 0.67 hp to 670 hp |
| Duty cycle | 10 % to 50 % |
| Maximum continuous braking time | 60 s to 300 s |

## Regenerative Braking

Regenerative braking reinjects the braking energy into the electrical supply grid using an active converter, achieving recovery efficiencies of up to 97 %. Typical regenerated current in 400 V AC / 460 V AC drives varies between 10 A and 500 A, and total harmonic distortion (THD) is kept below 5 %. This method reduces total energy consumption by 5 % to 30 % in applications with frequent acceleration and deceleration cycles, such as cranes and elevators.

| Advantage | Quantitative Value |
| --- | --- |
| Regeneration efficiency | 92 % to 97 % |
| Typical energy savings | 5 % to 30 % |
| Current THD | < 5 % |
| Applicable power range | 2.2 kW to 2 MW / 3 hp to 2682 hp |

## Method Comparison

The selection between rheostatic and regenerative braking depends on braking frequency, power involved, and available electrical infrastructure. The initial cost of a regenerative system is 1.5 to 3 times higher than a rheostatic one, but the return on investment can be achieved in less than 2 years in high duty cycle applications.

| Characteristic | Rheostatic Braking | Regenerative Braking |
| --- | --- | --- |
| Energy destination | Dissipation as heat | Return to grid |
| Relative cost | 1x | 1.5x to 3x |
| Maintenance | Resistor inspection every 2000 h / 2000 h | Filter inspection every 4000 h / 4000 h |
| Typical application | Occasional braking | Frequent braking (> 10 cycles/h) |
| Maximum ambient temperature | 40 °C / 104 °F | 40 °C / 104 °F |

## Implementation Considerations

Installing braking systems in drives requires verifying the DC bus capacity and cabinet ventilation. For rheostatic braking, the resistor must be mounted outside the drive cabinet if it dissipates more than 500 W / 1706 BTU/h, and the maximum distance between the drive and the resistor must not exceed 5 m / 16.4 ft. In regenerative braking, the grid impedance must be less than 3 % to avoid stability issues, and line inductors are recommended when power exceeds 100 kW / 134 hp.

| Installation Parameter | Recommended Value |
| --- | --- |
| Maximum VFD-resistor distance | 5 m / 16.4 ft |
| Power for external resistor mounting | > 500 W / 1706 BTU/h |
| Maximum grid impedance (regenerative) | < 3 % |
| Required line inductance | > 100 kW / 134 hp |

## Frequently Asked Questions (FAQ)

### Which braking method is more energy efficient?

### Can regenerative braking be used in any installation?

### What maintenance do braking resistors require?

### How is the appropriate braking resistor calculated?

### Does rheostatic braking affect the drive's service life?

### What protections should be installed in a braking system?

## References
- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=87EwaBzd7Dk
