---
title: "Conductor electrical resistance by gauge"
sidebar:
  label: "Conductor electrical resistance by gauge"
description: "Technical reference: Conductor electrical resistance by gauge"
keywords: ["conductor resistance table ohms per meter gauge", "conductores-cables"]
category: "conductores-cables"
topic: "conductor-materials"
subcategory: "conductor-resistance"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The electrical resistance of a metallic conductor depends on its material, length, cross-sectional area, and operating temperature. For standard annealed copper, the electrical resistivity at 20 °C is 1,724 × 10⁻⁸ Ω·m, a reference value that allows calculating the resistance of any conductor knowing its geometry. In electrical conductors, the larger the AWG size (lower number), the lower the resistance per unit length.

## Electrical Resistance in Copper Conductors by AWG Gauge

The table presents the nominal electrical resistance for solid round annealed copper conductors according to the American Wire Gauge (AWG) system. The values correspond to direct current (DC) and a reference temperature of 25 °C / 77 °F. For precision work, manufacturing tolerances and the increase in resistance with temperature must be considered.

| AWG Gauge | Diameter mm / in | Area mm² / MCM | Resistance at 25 °C Ω/km / Ω/1000 ft | Resistance at 65 °C Ω/km / Ω/1000 ft |
| :--- | :--- | :--- | :--- | :--- |
| 4/0 (0000) | 11,68 / 0,460 | 107,2 / 212,0 | 0,164 / 0,0500 | 0,187 / 0,057 |
| 3/0 (000) | 10,41 / 0,410 | 85,0 / 168,0 | 0,207 / 0,0630 | 0,239 / 0,073 |
| 2/0 (00) | 9,27 / 0,365 | 67,4 / 133,0 | 0,261 / 0,0795 | 0,302 / 0,092 |
| 1/0 (0) | 8,26 / 0,325 | 53,5 / 106,0 | 0,328 / 0,100 | 0,380 / 0,116 |
| 1 | 7,35 / 0,289 | 42,4 / 83,7 | 0,414 / 0,126 | 0,479 / 0,146 |
| 2 | 6,54 / 0,258 | 33,6 / 66,4 | 0,522 / 0,159 | 0,604 / 0,184 |
| 3 | 5,83 / 0,229 | 26,7 / 52,6 | 0,660 / 0,201 | 0,761 / 0,232 |
| 4 | 5,19 / 0,204 | 21,2 / 41,7 | 0,831 / 0,253 | 0,958 / 0,292 |
| 5 | 4,62 / 0,182 | 16,8 / 33,1 | 1,047 / 0,319 | − |
| 6 | 4,12 / 0,162 | 13,3 / 26,3 | 1,323 / 0,403 | 1,526 / 0,465 |
| 8 | 3,26 / 0,128 | 8,37 / 16,5 | 2,104 / 0,641 | 2,425 / 0,739 |
| 10 | 2,59 / 0,102 | 5,27 / 10,4 | 3,348 / 1,02 | 3,871 / 1,18 |
| 12 | 2,05 / 0,081 | 3,31 / 6,53 | 5,316 / 1,62 | 6,136 / 1,87 |
| 14 | 1,63 / 0,064 | 2,08 / 4,11 | 8,467 / 2,58 | 9,747 / 2,97 |
| 16 | 1,29 / 0,051 | 1,31 / 2,58 | 13,42 / 4,09 | 15,52 / 4,73 |
| 18 | 1,02 / 0,040 | 0,823 / 1,62 | 21,37 / 6,51 | 24,65 / 7,51 |
| 20 | 0,812 / 0,032 | 0,518 / 1,02 | 34,12 / 10,4 | 39,06 / 11,9 |
| 24 | 0,511 / 0,0201 | 0,205 / 0,404 | 85,96 / 26,2 | 99,15 / 30,2 |
| 28 | 0,321 / 0,0126 | 0,0811 / 0,160 | 217,2 / 66,2 | 250,7 / 76,4 |
| 32 | 0,202 / 0,0080 | 0,0320 / 0,0632 | 548,2 / 167 | 633,2 / 193 |

The diameter and area correspond to solid annealed copper conductor. The resistance at 65 °C is relevant for load conditions where the conductor operates at elevated temperature; it is provided for the most common gauges according to available data. For stranded copper conductor, the typical resistance is between 1% and 3% higher due to the increase in effective length from the stranding lay.

## Factors That Modify Electrical Resistance

The resistance of a conductor is not a fixed value but varies mainly with two operating factors:

- **Conductor Temperature:** resistance increases as temperature rises. For copper, the coefficient of variation is approximately 0,393 % per degree Celsius (0,218 % per degree Fahrenheit) relative to the value at 20 °C. The value R₂ at temperature T₂ is estimated as R₂ = R₁ × (234,5 + T₂) / (234,5 + T₁), with T in °C. Thus, a conductor measuring 1,00 Ω at 25 °C will measure approximately 1,15 Ω at 65 °C.
- **Conductor Length:** resistance is directly proportional to length. Doubling the distance of the electrical run doubles the total circuit resistance, which affects voltage drop.

## Fundamental Formula

The electrical resistance R of a homogeneous conductor of constant cross-section is calculated using Pouillet's law:

> **R = ρ × (L / A)**

| Variable | Symbol | SI Unit | Imperial Unit |
| :--- | :--- | :--- | :--- |
| Electrical resistance | R | Ohm (Ω) | Ohm (Ω) |
| Material resistivity | ρ | Ohm-meter (Ω·m) | Ohm-foot (Ω·ft) |
| Conductor length | L | Meter (m) | Foot (ft) |
| Cross-sectional area | A | Square meter (m²) | Circular mil (CM) |

For a copper conductor with resistivity 1,724 × 10⁻⁸ Ω·m, the same expression provides the resistance per unit length if L = 1 m is set and the actual cross-section of the selected gauge is used.

## Frequently Asked Questions (FAQ)

### What is the typical resistance of a 12 AWG copper conductor?
The 12 AWG copper conductor has a resistance at 25 °C of 5,316 Ω/km or 1,62 Ω/1000 ft, a value that rises to 6,136 Ω/km or 1,87 Ω/1000 ft when the conductor reaches 65 °C due to load.

### How does temperature affect the resistance value of a copper conductor?
Copper resistance increases approximately 0,393 % for each degree Celsius increase above 20 °C; this means a conductor with 1,00 Ω at 25 °C will present about 1,15 Ω at 65 °C, which must be considered in circuit sizing.

### What is the resistance difference between copper and aluminum for the same AWG gauge?
For identical geometric dimensions, aluminum presents a resistance approximately 1.6 times higher than copper because its resistivity (2,65 × 10⁻⁸ Ω·m) is higher than that of copper (1,724 × 10⁻⁸ Ω·m), which is why larger gauges are required in aluminum to match the conductance of a copper circuit.

### Why is AC resistance higher than DC resistance?
In alternating current, the skin effect displaces current density toward the conductor periphery, reducing the effective conduction area and increasing the effective resistance; at 60 Hz, this increase is less than 3% for gauges up to 2/0 AWG, but becomes significant in large cross-section conductors.

### What is the resistance of an 18 AWG copper conductor in a 100-meter run?
The resistance of an 18 AWG copper conductor at 25 °C is 21,37 Ω/km, so a 100 m run will present a resistance of 2,14 Ω; in alternating current and at elevated operating temperature this value can exceed 2,50 Ω.

### What does area in circular mils mean and how does it relate to mm²?
The circular mil (CM) is a unit of area used in the U.S. that represents the area of a circle 1 mil (0.001 in) in diameter; one circular mil equals 5,067 × 10⁻⁴ mm², and the area in mm² can be obtained by dividing the value in circular mils by 1973,5.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/copper-wire-d_1429.html
- **southwire.com**: https://www.southwire.com/medias/Genesis-Conductor-Sizing-Reference-Guide.pdf?context=bWFzdGVyfHJvb3R8NDA2MjM2fGFwcGxpY2F0aW9uL3BkZnxoZWMvaDdhLzg5MTA4MDk3NTk3NzQucGRmfDU5MGMwYThmMjExNTczOTFiMTYwNTU5YjgwZGUyMDcxNzQ5Y2ExZDk2YWFjMmE1MjdmNWQxYTBiMTRiMDQ3Njk

