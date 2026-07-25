---
title: "Battery bank sizing"
sidebar:
  label: "Battery bank sizing"
description: "Technical reference: Battery bank sizing"
keywords: ["battery bank sizing calculation Ah", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "battery-systems"
subcategory: "battery-bank-sizing"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Battery bank sizing determines the nominal capacity in ampere-hours (Ah) required to supply an electrical load for a predefined autonomy period, maintaining voltage within operating limits and respecting constraints of depth of discharge, system efficiency, and environmental conditions. An electrochemical cell delivers 1 Ah by transferring a charge of 3600 C, equivalent to the flow of 1 A for one hour.

## Fundamental Parameters
The required capacity depends on the daily energy consumed, the nominal system voltage, the days of autonomy, the maximum allowable depth of discharge (DoD), the global efficiency, and the temperature correction factor. The input variables are listed below:

| Variable | Symbol | Unit | Description |
| --- | --- | --- | --- |
| Daily energy | E<sub>dia</sub> | Wh/day | Total load consumption in 24 hours |
| System voltage | V<sub>nom</sub> | V | Nominal DC bus voltage |
| Days of autonomy | N<sub>aut</sub> | – | Number of consecutive days without recharge |
| Maximum depth of discharge | DoD<sub>max</sub> | % | Fraction of capacity that can be extracted without damaging the battery |
| System efficiency | η<sub>sist</sub> | % | Includes inverter, wiring and self-discharge efficiencies |
| Temperature factor | F<sub>T</sub> | – | Correction for deviation from 25 °C / 77 °F |

## Sizing Formula
The nominal capacity of the bank, expressed in ampere-hours (Ah), is obtained by the following expression:

> **C<sub>bank</sub> = (E<sub>dia</sub> × N<sub>aut</sub>) / (V<sub>nom</sub> × DoD<sub>max</sub> × η<sub>sist</sub> × F<sub>T</sub>)**

where each variable is entered in the indicated units and the temperature factor takes a value equal to or less than 1 for temperatures away from the reference.

## Parameter Table by Battery Type
Electrochemical properties condition the allowable DoD, charge/discharge efficiency, cycle life, and operating temperature range. The following table summarizes representative values for the most commonly used technologies in stationary storage.

| Battery type | Electrolyte | Open-cell voltage (V) | Achievable energy density (Wh/kg) | Charge/discharge efficiency (%) | Cycle life (number) | Operating temperature |
| --- | --- | --- | --- | --- | --- | --- |
| Lead-acid | H₂SO₄ | 2,1 – 2,2 | 30 – 40 | 70 – 90 | 200 – 2000 | -20 °C to 60 °C / -4 °F to 140 °F |
| Nickel-Cadmium | KOH | 1,2 | 40 – 60 | 70 – 90 | 500 – 2000 | -40 °C to 60 °C / -40 °F to 140 °F |
| Nickel-Metal Hydride | KOH | 1,2 | 60 – 80 | 50 | < 3000 | 10 °C to 50 °C / 50 °F to 122 °F |
| Lithium-Ion | LiPF₆ | 3,6 | 100 – 200 | 70 | 500 – 2000 | -20 °C to 60 °C / -4 °F to 140 °F |
| Lithium Polymer | Li-β-Alumina | 3,7 | 130 – 200 | 70 | > 1200 | -20 °C to 60 °C / -4 °F to 140 °F |

## Correction Factors (Temperature, Depth of Discharge, Aging)

### Temperature Correction
The practical capacity of a battery decreases significantly below 25 °C / 77 °F. The correction factor F<sub>T</sub> is applied to the calculated capacity to guarantee energy delivery under site conditions. Reference values for lead-acid batteries:

| Ambient temperature | Correction factor F<sub>T</sub> |
| --- | --- |
| 25 °C / 77 °F | 1,00 |
| 0 °C / 32 °F | 0,85 |
| -10 °C / 14 °F | 0,75 |
| -20 °C / -4 °F | 0,65 |

### Depth of Discharge (DoD) and Aging
The maximum allowable DoD is set based on the desired service life. For lead-acid batteries, it is recommended to limit the DoD to 50% in cyclic applications, while lithium-ion batteries allow discharges of up to 80% without accelerated degradation. Progressive aging reduces the actual capacity; therefore, a margin of 10 to 20% is usually added to the calculated capacity, or replacement is planned when reaching 80% of the initial rated capacity.

## Calculation Example
A load with a daily consumption of 2400 Wh is to be supplied. The installation operates at 24 V nominal, with 3 days of autonomy and lead-acid batteries (DoD<sub>max</sub> = 50%, η<sub>sist</sub> = 85%). The minimum expected temperature at the site is 0 °C / 32 °F, which implies F<sub>T</sub> = 0.85.

Applying the formula:

> **C<sub>bank</sub> = (2400 × 3) / (24 × 0,50 × 0,85 × 0,85) = 7200 / (24 × 0,50 × 0,85 × 0,85) = 7200 / 8,67 ≈ 830,5 Ah**

A bank of at least 830 Ah at 24 V would be selected. To implement it, 2 V cells or 12 V monoblocks could be connected in series/parallel, configuring the required total capacity.

## Frequently Asked Questions (FAQ)

### What is the typical cycle life of a lead-acid battery?
Lead-acid batteries offer between 200 and 2000 cycles at a depth of discharge of 50%, depending on the design (starting, traction, or stationary). At a DoD of 30%, life can exceed 3000 cycles.

### Which temperature reduces the capacity of a lithium-ion battery the most?
At -20 °C / -4 °F, a lithium-ion battery can lose up to 30-40% of its rated capacity at 25 °C / 77 °F, due to increased internal resistance of the LiPF₆ electrolyte.

### How many watt-hours does a 100 Ah battery at 12 V deliver?
A 100 Ah battery at 12 V stores a theoretical energy of 1200 Wh (100 Ah × 12 V). However, the usable energy is reduced by applying the maximum DoD: with a DoD of 50%, 600 Wh are practically available before recharging is required.

### What is the typical charge/discharge efficiency of a NiMH battery?
NiMH batteries have a charge/discharge efficiency of around 50%, meaning that for every 100 Wh delivered to the load, approximately 200 Wh must be supplied during charging.

### What energy density does a current lithium polymer battery achieve?
Commercial lithium polymer cells achieve between 130 and 200 Wh/kg, offering more than three times the energy per kilogram than lead-acid batteries (30‑40 Wh/kg).

### How many ampere-hours do 3600 coulombs represent?
A charge quantity of 3600 coulombs is exactly equivalent to 1 ampere-hour (1 Ah), since 1 A sustained for 3600 seconds transfers 3600 C.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/rechargeable-batteries-d_1219.html
- **electrical4u.com**: https://www.electrical4u.com/capacitor-bank-reactive-power-compensation/
