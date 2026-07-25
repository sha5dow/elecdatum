---
title: "Voltage drop table by gauge and distance"
sidebar:
  label: "Voltage drop table by gauge and distance"
description: "Technical reference: Voltage drop table by gauge and distance"
keywords: ["voltage drop table wire gauge distance", "conductores-cables"]
category: "conductores-cables"
topic: "voltage-drop"
subcategory: "voltage-drop-table"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Voltage drop in copper conductors is a critical phenomenon in low-voltage installations, especially in 12 V, 24 V or 48 V DC systems. Excessive voltage loss reduces energy efficiency and can cause malfunction of connected equipment. Standardized values consider an allowable drop of 2 % for lighting circuits and sensitive loads. The following table presents the maximum recommended cable lengths for different AWG wire gauges and current intensities in a 12 V DC system with a maximum of 2 % voltage drop.

## DC Voltage Drop Formula

The voltage drop in a two-wire single-phase DC circuit is calculated with the following expression:

> **Vₚ = (2 × Lₘ × I × Rₘ) / 1000**

| Variable | Description | Unit |
|---|---|---|
| Vₚ | Voltage drop in the conductor | V |
| Lₘ | Cable length (one-way distance, without return) | m |
| I | Current flowing through the conductor | A |
| Rₘ | Conductor resistance per unit length | Ω/km |

The resistance Rₘ varies with conductor cross-section and operating temperature. For copper at 75 °C, typical values range from 33,9 Ω/km for 10 AWG to 0,9 Ω/km for 2/0 AWG.

In 12 V systems where the metal structure acts as the return conductor (e.g., in automotive applications), the factor 2 is replaced by 1, doubling the useful distance.

## Voltage Drop Table for 12 V DC (2% Drop)

The values in the table correspond to the **total cable length** (sum of outgoing and return conductors) for a two-wire copper system at 75 °C, with a maximum voltage drop of 2 % (0,24 V) over 12 V nominal. To find the maximum distance between source and load, divide the indicated length by two.

| AWG | Section (mm² / kcmil) | 3 A (m / ft) | 5 A (m / ft) | 10 A (m / ft) | 15 A (m / ft) | 20 A (m / ft) | 25 A (m / ft) | 30 A (m / ft) |
|---|---|---|---|---|---|---|---|---|
| 18 | 0,82 mm² / 1,62 | 5,8 m / 19 ft | 3,5 m / 11,5 ft | 1,7 m / 5,7 ft | 1,2 m / 3,8 ft | 0,9 m / 2,9 ft | 0,7 m / 2,3 ft | 0,6 m / 1,9 ft |
| 16 | 1,31 mm² / 2,58 | 9,3 m / 30,5 ft | 5,6 m / 18,3 ft | 2,8 m / 9,2 ft | 1,9 m / 6,1 ft | 1,4 m / 4,6 ft | 1,1 m / 3,7 ft | 0,9 m / 3,1 ft |
| 14 | 2,08 mm² / 4,11 | 14,8 m / 48,6 ft | 8,9 m / 29,2 ft | 4,4 m / 14,6 ft | 3,0 m / 9,7 ft | 2,2 m / 7,3 ft | 1,8 m / 5,8 ft | 1,5 m / 4,9 ft |
| 12 | 3,31 mm² / 6,53 | 23,5 m / 77,2 ft | 14,1 m / 46,3 ft | 7,1 m / 23,2 ft | 4,7 m / 15,4 ft | 3,5 m / 11,6 ft | 2,8 m / 9,3 ft | 2,3 m / 7,7 ft |
| 10 | 5,26 mm² / 10,4 | 37,4 m / 122,7 ft | 22,4 m / 73,6 ft | 11,2 m / 36,8 ft | 7,5 m / 24,5 ft | 5,6 m / 18,4 ft | 4,5 m / 14,7 ft | 3,7 m / 12,3 ft |
| 8 | 8,37 mm² / 16,5 | 59,6 m / 195,5 ft | 35,8 m / 117,3 ft | 17,9 m / 58,7 ft | 11,9 m / 39,1 ft | 8,9 m / 29,3 ft | 7,2 m / 23,5 ft | 6,0 m / 19,6 ft |
| 6 | 13,3 mm² / 26,3 | 94,8 m / 311 ft | 56,9 m / 186,6 ft | 28,4 m / 93,3 ft | 19,0 m / 62,2 ft | 14,2 m / 46,7 ft | 11,4 m / 37,3 ft | 9,5 m / 31,2 ft |
| 4 | 21,2 mm² / 41,7 | 151 m / 495 ft | 90,7 m / 297,6 ft | 45,3 m / 148,8 ft | 30,2 m / 99,2 ft | 22,7 m / 74,4 ft | 18,1 m / 59,5 ft | 15,1 m / 49,6 ft |
| 2 | 33,6 mm² / 66,4 | 240 m / 789 ft | 144 m / 473 ft | 72,1 m / 236,7 ft | 48,1 m / 157,8 ft | 36,0 m / 118,3 ft | 28,8 m / 94,6 ft | 24,0 m / 78,9 ft |
| 1/0 | 53,5 mm² / 105,6 | 382 m / 1254 ft | 229 m / 752 ft | 114 m / 376 ft | 76,4 m / 250,8 ft | 57,3 m / 188,1 ft | 45,8 m / 150,5 ft | 38,2 m / 125,4 ft |
| 2/0 | 67,4 mm² / 133,1 | 482 m / 1581 ft | 289 m / 949 ft | 145 m / 474 ft | 96,4 m / 316 ft | 72,3 m / 237 ft | 57,8 m / 190 ft | 48,2 m / 158 ft |
| 4/0 | 107 mm² / 211,6 | 766 m / 2514 ft | 460 m / 1509 ft | 230 m / 754 ft | 153 m / 503 ft | 115 m / 377 ft | 92,0 m / 302 ft | 76,6 m / 251 ft |

The data is derived from the Engineering Toolbox maximum cable length chart for 12 V systems with 2 % drop and supplemented with standard NEC resistances for copper at 75 °C.

## Factors Affecting Voltage Drop

- **Conductor temperature**: The resistance of copper increases approximately 0,393 % for each degree Celsius rise above 20 °C. At the typical operating temperature of 75 °C, the resistance is 21,6 % higher than at 20 °C.
- **Circuit nature (DC/AC)**: In alternating current, inductive reactance is added, although for gauges smaller than 2/0 AWG at 60 Hz its effects are usually negligible compared to ohmic resistance.
- **Number of active conductors**: In a two-wire single-phase system, the drop occurs in both conductors, so the effective length is twice the physical distance.
- **Installation type**: Conductors in conduit or in poorly ventilated environments reach higher temperatures, reducing the maximum allowable length for the same voltage drop.
- **Connections and splices**: Each junction introduces a small additional resistance that accumulates in circuits with multiple branches.

## How to Use the Table

1. Identify the current that will flow through the circuit (A).
2. Determine the actual one-way distance between the power source and the load, in meters or feet.
3. Calculate the total cable length required by multiplying the distance by 2, unless the return is through a metal chassis (in which case the total length equals the physical distance).
4. In the table, find the column for the desired current; scroll down until you find the first total length value that equals or exceeds the calculated value from step 3.
5. The gauge corresponding to that row is the minimum recommended to not exceed the 2 % drop.

If the system operates at 24 V, the table lengths double; at 48 V, they quadruple. If a 4 % drop is allowed, the lengths also double.

## Practical Example

A 50 W lamp is to be powered in a 12 V DC system, located 4 m from the battery, using two copper conductors (outgoing and return). The required current is:

> **I = P / U = 50 W / 12 V = 4,2 A**

The total cable length (outgoing + return) will be 4 m × 2 = 8 m. In the table, for a current of 5 A (next higher available value), a 14 AWG gauge is required for a total length of 8,9 m (greater than 8 m). Therefore, 14 AWG is sufficient with an acceptable margin. If a larger margin is desired or future expansions are foreseen, a 12 AWG gauge may be chosen, which allows up to 14,1 m for 5 A.

As a verification, applying the voltage drop formula with Rₘ for copper at 75 °C of approximately 8,45 Ω/km (14 AWG), the actual drop will be:

> **Vₚ = (2 × 4 m × 4,2 A × 8,45 Ω/km) / 1000 = 0,28 V**

This represents 2,3 % of the nominal, slightly above the recommended 2 %, confirming that for this specific application a 12 AWG gauge would offer better performance (Vₚ ≈ 0,17 V, equivalent to 1,4 %).

## Typical Values by Application

| Application | Typical Current | Typical Distance (one-way) | Minimum Recommended Gauge |
|---|---|---|---|
| Interior LED lighting (12 V, 10 W) | 0,8 A | 3 m / 10 ft | 18 AWG |
| Exterior LED lighting (12 V, 20 W) | 1,7 A | 5 m / 16 ft | 16 AWG |
| RV water pump (12 V, 50 W) | 4,2 A | 4 m / 13 ft | 12 AWG |
| Small inverter (12 V, 300 W) | 25 A | 1,5 m / 5 ft | 8 AWG |
| Medium inverter (12 V, 1000 W) | 83 A | 2 m / 6,6 ft | 2 AWG |
| Winch motor (12 V, 3000 W) | 250 A | 3 m / 10 ft | 2/0 AWG |
| Off-grid solar system (48 V, 2000 W) | 41,7 A | 10 m / 33 ft | 6 AWG |

## Frequently Asked Questions (FAQ)

### What is the exact formula for calculating voltage drop in a copper cable?
The exact formula for direct current is Vₚ = (2 × L × I × R) / 1000, where L is the one-way length in meters, I is the current in amperes, and R is the conductor resistance in ohms per kilometer. The total cable length (out and back) doubles the physical distance, hence the factor 2. The resistance R varies with conductor cross-section and temperature, being for annealed copper at 20 °C equal to 17,241 Ω·mm²/km divided by the nominal cable cross-section.

### How many meters of 12 AWG cable can I use without exceeding 2% drop in 12 V?
In a two-wire copper circuit at 75 °C, a 12 AWG cable allows a total length (out and back) of approximately 23,5 m (77,2 ft) for 3 A, 14,1 m (46,3 ft) for 5 A, and 7,1 m (23,2 ft) for 10 A while keeping the drop below 2 % (0,24 V). The distance between source and load will be half of those values.

### What AWG gauge do I need for a 1000 W inverter in 12 V with 2 m of cable?
For a power of 1000 W at 12 V, the nominal current rises to 83,3 A. With 2 m of one-way distance, the total cable length will be 4 m (out and back). In the table, for 30 A at least 4 AWG is required with a maximum length of 15,1 m; however, since there is no specific column for 83 A, it can be interpolated that a 2 AWG gauge supports 36 m per each 20 A, which for 83 A gives approximately 8,7 m, and a 1/0 AWG gauge reaches 13,8 m. Therefore, the minimum viable is 2 AWG, with 1/0 AWG recommended to reduce losses.

### Does ambient temperature influence voltage drop in a conductor?
Ambient temperature directly affects conductor resistance. An increase of 30 °C above 20 °C raises the resistance of copper by approximately 11,8 %, which reduces the maximum allowable length for the same voltage drop by the same proportion. Standard tables usually use resistance at 75 °C, so in very hot environments an additional correction factor of 0,85 to 0,90 should be applied.

### Can I double the distance if I use a 24 V system instead of 12 V?
By doubling the supply voltage from 12 V to 24 V while maintaining the same power, the current is halved. Since voltage drop is proportional to current, with the same cable cross-section and the same allowable percentage drop, the maximum length is multiplied exactly by two. Therefore, for the same gauge and load, a 24 V system allows reaching twice the distance of a 12 V system.

### What is the maximum allowable voltage drop according to electrical codes?
International electrical codes, such as the NEC in the United States or IEC 60364 in Europe, recommend that the cumulative voltage drop from the supply point to the farthest load should not exceed 3 % for lighting circuits and 5 % for power circuits, adding both the maximum drop in the feeder and the branch circuit. In low-voltage DC installations at 12 V, a 2 % drop is common practice to protect sensitive equipment.

## Sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/12-volt-wire-loss-chart-d_1689.html
- **southwire.com**: https://www.southwire.com/calculator-vdrop

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/12-volt-wire-loss-chart-d_1689.html
- **southwire.com**: https://www.southwire.com/calculator-vdrop
