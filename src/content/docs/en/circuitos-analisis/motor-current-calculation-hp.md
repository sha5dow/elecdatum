---
title: "Motor current calculation by HP"
sidebar:
  label: "Motor current calculation by HP"
description: "Technical reference: Motor current calculation by HP"
keywords: ["motor full load current calculation HP table", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "motor-electrical"
subcategory: "motor-current-calculation"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The calculation of the current of an electric motor from its power in horsepower (HP) is essential for sizing conductors, protections, and evaluating the electrical load. One mechanical horsepower (hp) equals 745,7 W, while the electrical horsepower (hpE) is exactly 746 W. Once the power in watts is known, the rated current is obtained by solving the electrical power formulas and incorporating the motor efficiency and power factor.

## Electrical power formulas

The general relationship between the mechanical shaft power (expressed in W or kW), the supply voltage, and the absorbed current depends on the motor type and the number of phases.

> **For single-phase AC motors:**  
> **I = P / (V × η × FP)**  

> **For three-phase AC motors:**  
> **I = P / (√3 × V × η × FP)**  

> **For DC motors:**  
> **I = P / (V × η)**  

Where:

| Variable | Meaning | Unit |
| --- | --- | --- |
| I | Full load current | A |
| P | Mechanical shaft power | W or kW |
| V | Supply voltage (line-to-line for three-phase) | V |
| η | Motor efficiency (per unit) | – |
| FP | Power factor (cos φ) | – |
| √3 | Square root of 3 (~1,732) | – |

The standard rated current tables presented in the following sections assume typical efficiency and power factor values implicit in manufacturing standards, so it is not necessary to apply the above formulas when working with these tabulated values.

## Quick estimation rules of thumb

For a preliminary estimate of the full load current, the following approximate values per horsepower can be used, valid for squirrel-cage induction motors under rated conditions.

| Motor type and voltage | Amperes per HP (approximate) |
| --- | --- |
| Single-phase motor – 115 V | 14 A/HP |
| Single-phase motor – 230 V | 7 A/HP |
| Three-phase motor – 230 V | 2,5 A/HP |
| Three-phase motor – 460 V | 1,25 A/HP |

These coefficients do not substitute the manufacturer's nameplate data or the exact tabulated values; they serve only as a reference during the initial design phase.

## Rated current for single-phase motors

The following table lists the full load rated currents for single-phase squirrel-cage induction motors, according to standard North American voltages.

| Power | Voltage 115 V | Voltage 208 V | Voltage 230 V |
| --- | --- | --- | --- |
| 1/6 HP / 0,13 kW | 4,4 A | 2,4 A | 2,2 A |
| 1/4 HP / 0,19 kW | 5,8 A | 3,2 A | 2,9 A |
| 1/3 HP / 0,25 kW | 7,2 A | 4,0 A | 3,6 A |
| 1/2 HP / 0,37 kW | 9,8 A | 5,4 A | 4,9 A |
| 3/4 HP / 0,56 kW | 13,8 A | 7,6 A | 6,9 A |
| 1 HP / 0,75 kW | 16 A | 8,8 A | 8 A |
| 1 1/2 HP / 1,1 kW | 20 A | 11 A | 10 A |
| 2 HP / 1,5 kW | 24 A | 13,2 A | 12 A |
| 3 HP / 2,2 kW | 34 A | 18,7 A | 17 A |
| 5 HP / 3,7 kW | 56 A | 30,8 A | 28 A |

The current values do not take into account the actual efficiency or power factor of the motor, which must be considered to avoid undersized conductors or protections.

## Rated current for three-phase motors

The following lists the full load currents for three-phase squirrel-cage and wound-rotor induction motors, as well as for synchronous motors with unity power factor, according to American standards.

| Power | Voltage 115 V | Voltage 230 V | Voltage 460 V | Voltage 575 V | Voltage 2300 V | Synchronous type 230 V | Synchronous type 460 V | Synchronous type 575 V | Synchronous type 2300 V |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1/2 HP / 0,37 kW | 4 A | 2 A | 1 A | 0,8 A | – | – | – | – | – |
| 3/4 HP / 0,56 kW | 5,6 A | 2,8 A | 1,4 A | 1,1 A | – | – | – | – | – |
| 1 HP / 0,75 kW | 7,2 A | 3,6 A | 1,8 A | 1,4 A | – | – | – | – | – |
| 1 1/2 HP / 1,1 kW | 10,4 A | 5,2 A | 2,6 A | 2,1 A | – | – | – | – | – |
| 2 HP / 1,5 kW | 13,6 A | 6,8 A | 3,4 A | 2,7 A | – | – | – | – | – |
| 3 HP / 2,2 kW | – | 9,6 A | 4,8 A | 3,9 A | – | – | – | – | – |
| 5 HP / 3,7 kW | – | 15,2 A | 7,6 A | 6,1 A | – | – | – | – | – |
| 7 1/2 HP / 5,6 kW | – | 22 A | 11 A | 9 A | – | – | – | – | – |
| 10 HP / 7,5 kW | – | 28 A | 14 A | 11 A | – | – | – | – | – |
| 15 HP / 11 kW | – | 42 A | 21 A | 17 A | – | – | – | – | – |
| 20 HP / 15 kW | – | 54 A | 27 A | 22 A | – | – | – | – | – |
| 25 HP / 19 kW | – | 68 A | 34 A | 27 A | – | 53 A | 26 A | 21 A | – |
| 30 HP / 22 kW | – | 80 A | 40 A | 32 A | – | 63 A | 32 A | 26 A | – |
| 40 HP / 30 kW | – | 104 A | 52 A | 41 A | – | 83 A | 41 A | 33 A | – |
| 50 HP / 37 kW | – | 130 A | 65 A | 52 A | – | 104 A | 52 A | 42 A | – |
| 60 HP / 45 kW | – | 154 A | 77 A | 62 A | 16 A | 123 A | 61 A | 49 A | 12 A |
| 75 HP / 56 kW | – | 192 A | 96 A | 77 A | 20 A | 155 A | 78 A | 62 A | 15 A |
| 100 HP / 75 kW | – | 248 A | 124 A | 99 A | 26 A | 202 A | 101 A | 81 A | 20 A |

Cells marked with a dash indicate that the motor is not commonly manufactured or that data are not standardized for that power and voltage combination. The synchronous motor values refer exclusively to unity power factor.

## Rated current for direct current motors

The following table provides the full load current for DC motors with typical voltages of 230 V and 440 V.

| Power | Voltage 230 V DC | Voltage 440 V DC |
| --- | --- | --- |
| 1/4 HP / 0,19 kW | 0,81 A | 0,42 A |
| 1/3 HP / 0,25 kW | 1,1 A | 0,56 A |
| 1/2 HP / 0,37 kW | 1,6 A | 0,85 A |
| 3/4 HP / 0,56 kW | 2,4 A | 1,3 A |
| 1 HP / 0,75 kW | 3,2 A | 1,7 A |
| 1 1/2 HP / 1,1 kW | 4,9 A | 2,5 A |
| 2 HP / 1,5 kW | 6,5 A | 3,4 A |
| 3 HP / 2,2 kW | 9,7 A | 5,1 A |
| 5 HP / 3,7 kW | 16 A | 8,5 A |
| 7 1/2 HP / 5,6 kW | 24 A | 13 A |
| 10 HP / 7,5 kW | 32 A | 17 A |
| 15 HP / 11 kW | 49 A | 25 A |
| 20 HP / 15 kW | 65 A | 34 A |
| 30 HP / 22 kW | 97 A | 51 A |
| 50 HP / 37 kW | 162 A | 85 A |
| 75 HP / 56 kW | 243 A | 127 A |
| 100 HP / 75 kW | 324 A | 170 A |

For 115 V DC supply, the current is approximately double that indicated for 230 V DC.

## Factors affecting the actual current

The tabulated values represent rated conditions and must be adjusted when the actual operating conditions differ from the design assumptions.

- **Motor efficiency.** The standard tables do not include the actual motor efficiency. A 1 HP motor with 82 % efficiency will draw more current than an equivalent one with 90 % efficiency. Maximum efficiency is usually achieved near 75 % of rated load.
- **Power factor.** In induction motors, the power factor decreases at light loads, increasing the reactive component of the current without increasing the active power.
- **Voltage tolerance.** The current varies inversely with the voltage within ±10 %. A voltage 5 % below nominal can raise the current between 5 % and 10 % for the same output power.
- **Service factor.** Motors with a service factor (SF) greater than 1.0 can withstand moderate overloads; under these regimes the current exceeds the rated tabulated value.
- **Ambient temperature and altitude.** Temperatures above 40 °C or altitudes above 1000 m above sea level require load reduction or motor oversizing, modifying the operating current.

## Relationship with protections and conductors

The full load amperes (FLA) data are used as a basis for calculating the minimum circuit ampacity (MCA) and the maximum overcurrent protection (MOCP).

> **MCA = 1,25 × (FLA of the motor + current of other resistive loads)**  

> **MOCP = (2,25 × FLA of the largest motor) + (FLA of other motors) + (current of non-motor loads)**  

The MOCP must never be less than the MCA and, in any case, not less than 15 A according to North American electrical codes. The calculated value is adjusted to the next standard size of fuse or circuit breaker, unless it already matches a standard value.

The locked rotor amperes (LRA) is another relevant parameter for coordinating protections and can be estimated as:

> **LRA ≈ 8 × FLA**  

This starting current peak determines the voltage drop during starting and conditions the selection of contactors and overload relays.

## Frequently Asked Questions (FAQ)

### What is the difference between FLA and MCA?
FLA (Full Load Amperes) is the current consumed by the motor at full load under rated conditions. MCA (Minimum Circuit Ampacity) is the minimum current-carrying capacity that the circuit conductors must support according to regulations, and includes a safety margin over the FLA.

### Why is motor efficiency not considered in the tables?
The standard rated current tables assume typical efficiency and power factor values for motors of standard manufacture. If a high-efficiency motor or one with special characteristics is used, the actual current may be lower and must be calculated specifically.

### What is the difference between HP, hp and hpE?
The mechanical HP or hp (horsepower) equals 745,7 W and is the most common in electric motors. The hpE (electrical horsepower) is exactly 746 W, used in laboratory contexts. The metric HP (PS or cv) equals 735,5 W, but is not used in the motor tables according to American standards.

### How do I convert HP to kW to use the tables?
1 mechanical HP = 0,746 kW. To convert, multiply the HP by 0,746. The tables include the equivalent for direct reading in both systems.

### Are the current values in the tables valid for motors with variable frequency drives?
Not directly. The input currents of a variable frequency drive may differ from the motor current due to the power factor and harmonic distortion. The drive and motor documentation must be consulted for sizing conductors and protections.

### What happens if a fuse or circuit breaker larger than the calculated MOCP is used?
Proper overcurrent and short circuit protection is lost. The conductor could overheat under a fault, with risk of fire. The MOCP is a maximum limit; it must never be exceeded.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/elctrical-motor-full-load-current-d_1499.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-13/single-phase-induction-motors/
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
