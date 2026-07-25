---
title: "Motor nameplate interpretation"
sidebar:
  label: "Motor nameplate interpretation"
description: "Technical reference: Motor nameplate interpretation"
keywords: ["motor nameplate data interpretation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-nameplate"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## What is the Motor Nameplate?

The motor nameplate, also known as the rating plate or identification plate, is a metal or durable material label attached to the motor frame that contains essential technical information for proper selection, installation, operation, and maintenance. Every three-phase squirrel-cage induction motor manufactured under NEMA (National Electrical Manufacturers Association) standards must include, at a minimum, the parameters detailed in this guide.

## Main Nameplate Parameters

The data found on a typical industrial motor nameplate, along with their most common values, are as follows:

| Parameter | Meaning | Typical Example (Metric / Imperial) |
| --- | --- | --- |
| Rated voltage | Supply voltage for which the motor is designed | 460 V / 460 V (common in three-phase systems) |
| Full load current (FLA) | Current drawn by the motor at rated power and rated voltage | 15,2 A / 15,2 A (for 10 HP) |
| Rated power | Mechanical shaft power expressed in HP or kW | 7,5 kW / 10 HP |
| Frequency | Supply mains frequency | 60 Hz / 60 Hz |
| Rated speed | Shaft rotational speed at full load | 1760 r/min / 1760 rpm |
| Service factor (SF) | Allowable temporary overload reserve | 1,15 / 1,15 |
| Insulation class | Maximum temperature of the insulation system | F (155 °C / 311 °F) |
| Duty type | Type of load per IEC (S1: continuous, S2: limited time, etc.) | S1 |
| IP protection degree | Protection against ingress of solids and liquids | IP55 |
| NEMA code letter | kVA/HP ratio with locked rotor for starting current calculation | G (5,6-6,29) |
| Rated power factor | Ratio of active to apparent power at full load | 0,85 |
| Rated efficiency | Efficiency at full load | 91,7 % |

## Related Formulas

The nameplate information allows calculating the starting current from the NEMA code letter. The following expression is used:

> **I_start (A) = (Code_kVA/HP × Motor_HP × 1000) / (√3 × Line_V)**

Where:

| Variable | Description | Unit |
| --- | --- | --- |
| Code_kVA/HP | Mean value of the range corresponding to the code letter (per NEMA table) | kVA/HP |
| Motor_HP | Rated power of the motor in HP | HP |
| Line_V | Rated line-to-line voltage | V |

To obtain the current in amperes with a kVA/HP code value of 5,9 (letter G) and a 10 HP motor at 460 V, we have:

> **I_start = (5,9 × 10 × 1000) / (1,732 × 460) = 74,1 A**

## NEMA Locked Rotor Codes

NEMA assigns a code letter to each motor to indicate the apparent kVA per HP drawn during locked-rotor starting (at full voltage). It is essential for sizing protections and coordinating voltage drops in the installation. The following table shows the ranges and average values used in engineering calculations.

| NEMA Code Letter | kVA/HP Range | Approximate Average Value |
| --- | --- | --- |
| A | 0,00 - 3,14 | 1,6 |
| B | 3,15 - 3,55 | 3,3 |
| C | 3,55 - 3,99 | 3,8 |
| D | 4,0 - 4,49 | 4,3 |
| E | 4,5 - 4,99 | 4,7 |
| F | 5,0 - 5,59 | 5,3 |
| G | 5,6 - 6,29 | 5,9 |
| H | 6,3 - 7,09 | 6,7 |
| J | 7,1 - 7,99 | 7,5 |
| K | 8,0 - 8,99 | 8,5 |
| L | 9,0 - 9,99 | 9,5 |
| M | 10,0 - 11,19 | 10,6 |
| N | 11,2 - 12,49 | 11,8 |
| P | 12,5 - 13,99 | 13,2 |
| R | 14,0 - 15,99 | 15,0 |
| S | 16,0 - 17,99 | — |
| T | 18,0 - 19,99 | — |
| U | 20,0 - 22,39 | — |
| V | 22,4 and above | — |

## Interpretation Example

A motor with a nameplate indicating 460 V, 10 HP, code letter G, and rated speed 1760 r/min has the following implications:

- The typical full load current (FLA) for this power at 460 V is approximately 15,2 A.
- With code letter G (kVA/HP between 5,6 and 6,29), the full-voltage starting current will be between 70,3 A and 79,0 A, which can cause significant voltage drops in weak lines.
- The speed of 1760 r/min indicates a rated slip of (1800 - 1760)/1800 ≈ 2,22 %, typical of a 4-pole motor at 60 Hz.
- The service factor of 1,15 allows it to operate with a 15 % overload continuously without exceeding the insulation class, as long as ambient conditions are as designed.

## Frequently Asked Questions (FAQ)

### What does the NEMA code letter on a motor mean?
The NEMA code letter indicates the ratio between starting kVA and power in HP; for example, the letter G corresponds to a range of 5,6 to 6,29 kVA/HP, equivalent to a starting current of 74 A in a 10 HP motor at 460 V.

### How is the starting current calculated from the code letter?
Multiply the motor power in HP by the average kVA/HP value of the code (e.g., 5,9 for letter G), convert to VA, and divide by the line voltage and the factor √3; for 10 HP and 460 V, 74 A are obtained.

### What is the importance of the service factor on the motor nameplate?
The service factor, commonly 1,15, means that the motor can supply up to 15 % more power continuously without overheating, which equates to 11,5 HP in a 10 HP motor, as long as the ambient temperature does not exceed 40 °C / 104 °F.

### What is the difference between the nameplate speed and the synchronous speed?
The nameplate speed is the actual shaft speed under rated load; for example, 1760 r/min versus 1800 r/min synchronous in a 4-pole motor at 60 Hz, giving a slip of 40 r/min (2,22 %).

### What does the insulation class represent and how does it relate to temperature?
Class F allows a maximum winding temperature of 155 °C / 311 °F; in a motor with class B temperature rise (80 K over 40 °C ambient), there is a margin of 35 K before reaching the class F limit, extending the service life.

### What is the purpose of the IP rating indicated on the nameplate?
IP55 indicates protection against dust (5) and against water jets from any direction (5); this allows the motor to be installed in humid or dirty environments without degrading its insulation.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/locked-rotor-code-d_917.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/news/products-and-solutions/weg-creates-app-to-access-motor-technical-information

