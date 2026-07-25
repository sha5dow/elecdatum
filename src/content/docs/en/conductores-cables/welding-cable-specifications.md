---
title: "Welding cable specifications"
sidebar:
  label: "Welding cable specifications"
description: "Technical reference: Welding cable specifications"
keywords: ["welding cable specifications ampacity", "conductores-cables"]
category: "conductores-cables"
topic: "cable-types"
subcategory: "welding-cable"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
Welding cable is a highly flexible copper electrical conductor designed to connect the power source to the electrode holder and the workpiece in arc welding processes. Its usual service temperature reaches 90 °C (194 °F) and it supports intermittent welding currents of several hundred amperes. The 4 AWG size, for example, has a reference continuous ampacity of 120 A.

## Construction

The welding cable consists of a Class 6 copper conductor (extra flexible) according to IEC 60228, formed by a multitude of fine wires that provide the flexibility necessary for handling on site. A separating layer of polyester tape and an insulation of EPDM or neoprene elastomer that resists oils, sparks and abrasion are applied over the conductor. The outer jacket is polychloroprene (PCP) or chlorinated polyethylene (CPE), black or orange, with good flame and weather resistance. Single-conductor versions are manufactured and occasionally in twin configuration for ground return circuits.

## Electrical properties

The electrical resistance of the copper conductor determines the voltage drop and self-heating. At 20 °C typical values are:

| AWG/kcmil Size | Electrical resistance at 20 °C (Ω/km / Ω/1000 ft) |
| --- | --- |
| 6 | 1,3 / 0,40 |
| 4 | 0,81 / 0,25 |
| 2 | 0,51 / 0,16 |
| 1/0 | 0,32 / 0,098 |
| 2/0 | 0,26 / 0,079 |
| 3/0 | 0,20 / 0,061 |
| 4/0 | 0,16 / 0,049 |
| 250 | 0,13 / 0,040 |
| 300 | 0,11 / 0,034 |
| 400 | 0,08 / 0,024 |

The EPDM/neoprene insulation provides sufficient dielectric strength for working voltages up to 100 V in DC or low-frequency AC, typical in welding.

## Ampacity and dimensions table

The current capacities shown correspond to a single copper conductor in free air, ambient temperature of 30 °C (86 °F) and continuous duty. For welding work with reduced duty cycles, duty factors can be applied to increase the allowable current.

| AWG/kcmil Size | Conductor diameter (mm / in) | Cross-sectional area (mm² / in²) | Continuous ampacity (A) |
| --- | --- | --- | --- |
| 6 | 4,1 / 0,17 | 13,3 / 0,0206 | 95 |
| 4 | 5,2 / 0,20 | 21,2 / 0,0329 | 120 |
| 2 | 6,5 / 0,26 | 33,6 / 0,0521 | 170 |
| 1/0 | 8,3 / 0,33 | 53,5 / 0,0829 | 200 |
| 2/0 | 9,3 / 0,37 | 67,4 / 0,1045 | 225 |
| 3/0 | 10,4 / 0,41 | 85,0 / 0,1318 | 275 |
| 4/0 | 11,7 / 0,46 | 107 / 0,166 | 325 |
| 250 | 12,7 / 0,50 | 127 / 0,197 | 345 |
| 300 | 14,0 / 0,55 | 152 / 0,236 | 390 |
| 400 | 16,0 / 0,63 | 178 / 0,276 | 415 |

## Temperature correction factors

When the ambient temperature exceeds 30 °C, the ampacity must be reduced using the following correction factors:

| Ambient temperature (°C / °F) | Correction factor |
| --- | --- |
| 31 – 40 °C / 87,8 – 104 °F | 0,82 |
| 41 – 45 °C / 105,8 – 113 °F | 0,71 |
| 46 – 50 °C / 114,8 – 122 °F | 0,58 |

In installations with several grouped cables, the corresponding grouping factor must also be applied. For intermittent welding service, with duty cycles below 60 %, a multiplication factor of 1.5 to 2.0 over the nominal continuous current can be used, provided the insulation does not exceed its maximum temperature.

## Voltage drop

The voltage drop in a single-phase welding circuit (outgoing and return conductor) is calculated with the expression:

> **Vd = (2 × L × I × R) / 1000**

| Symbol | Variable | Unit |
| --- | --- | --- |
| Vd | Voltage drop | V |
| L | Conductor length (one way only) | m |
| I | Welding current | A |
| R | Conductor resistance | Ω/km |

For a 2 AWG cable 50 m long carrying 200 A, the voltage drop will be Vd = (2 × 50 × 200 × 0.51) / 1000 = 10.2 V. It is recommended to keep the total drop below 5 % of the arc voltage to ensure process stability.

## Frequently Asked Questions (FAQ)

### What is the difference between a welding cable and a standard power cable?

Welding cable uses a Class 6 extra flexible copper conductor and an EPDM or neoprene insulation resistant to sparks, oils, and abrasion, while standard power cables usually have less flexible conductors and PVC or XLPE insulation.

### Can I use the same cable for shielded metal arc welding and MIG/MAG welding?

Yes, welding cable is suitable for all electric arc processes. The appropriate size must be selected based on the maximum current required by the equipment.

### What ampacity should I consider for short duty cycles?

For duty cycles below 60 %, the continuous ampacity can be multiplied by a factor of 1.5 to 2.0, always verifying that the insulation temperature does not exceed its limit (e.g., 90 °C for EPDM).

### Does the cable length affect weld quality?

Yes. An excessive length or insufficient gauge causes high voltage drops, which can destabilize the arc and reduce penetration. It is recommended to size the cable for a maximum drop of 5 %.

### Is it necessary to protect the welding cable from radiant heat?

Although the polychloroprene jacket is heat-resistant, direct contact with parts above 150 °C (302 °F) should be avoided. It is advisable to keep it away from areas of intense spark projection.

### How is the appropriate gauge determined for a specific welding job?

Start with the maximum current of the equipment, select a gauge whose continuous ampacity covers that demand, verify the voltage drop for the required cable length, and apply temperature and grouping correction factors if applicable.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/wire-gauges-d_419.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-cable/
- **southwire.com**: https://www.southwire.com/wire-cable/leadwire/c/c-lwsub2
