---
title: "Soil resistivity measurement"
sidebar:
  label: "Soil resistivity measurement"
description: "Technical reference: Soil resistivity measurement"
keywords: ["soil resistivity measurement method Wenner", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-fundamentals"
subcategory: "soil-resistivity"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Soil resistivity is the property that quantifies the opposition of the ground to the flow of electric current and constitutes the fundamental parameter for the design of grounding systems. Its precise measurement allows predicting the behavior of the ground electrode under faults or lightning discharges. The most widespread method for determining the apparent resistivity of the soil is the Wenner four-electrode array, which injects a known current between two outer electrodes and measures the potential difference between two inner electrodes.

## Factors Affecting Soil Resistivity

Resistivity depends mainly on the chemical composition, grain size, moisture content, and temperature of the ground. Soils with a high concentration of dissolved salts have lower resistivity, while dry or frozen materials significantly increase their opposition to electrical flow. Compaction and the presence of organic matter also modify the measured value.

## Wenner Method for Resistivity Measurement

The Wenner method uses four aligned electrodes, separated by a uniform distance **a**, driven to a depth that does not exceed **0.1·a**. An injection equipment circulates a direct current or low-frequency current between the two outer electrodes (C1 and C2); simultaneously, the potential difference between the two inner electrodes (P1 and P2) is measured. The ratio between the measured voltage and the injected current provides an apparent resistance which, together with the geometry of the array, allows calculating the resistivity of the explored soil volume down to a depth approximately equal to the separation **a**.

## Wenner Formula

> **ρ = 2 π a R**
> 
> Where **ρ** is the apparent soil resistivity, **a** is the spacing between adjacent electrodes, and **R** is the ratio between the measured voltage and the injected current.

The above expression is valid when the depth of electrode penetration is much less than the spacing between them. For stratigraphic studies, the measurement is repeated by progressively increasing the distance **a**, which allows plotting vertical resistivity profiles.

## Typical Soil Resistivity Values

| Soil Type | Resistivity (average or range) |
| --- | --- |
| Soft clay | 50 Ω·m / 164 Ω·ft |
| Compacted clay | 100 – 200 Ω·m / 328 – 656 Ω·ft |
| Clayey sand | 50 – 500 Ω·m / 164 – 1640 Ω·ft |
| Humus, topsoil | 10 – 150 Ω·m / 33 – 492 Ω·ft |
| Granite | 1500 – 10000 Ω·m / 4921 – 32808 Ω·ft |
| Weathered granite | 100 – 600 Ω·m / 328 – 1969 Ω·ft |
| Jurassic marl | 30 – 40 Ω·m / 98 – 131 Ω·ft |
| Fissured limestone | 500 – 1000 Ω·m / 1640 – 3281 Ω·ft |
| Marl | 100 – 200 Ω·m / 328 – 656 Ω·ft |
| Micaceous schist | 800 Ω·m / 2625 Ω·ft |
| Peat, turf | 5 – 100 Ω·m / 16 – 328 Ω·ft |
| Sandstone | 1500 – 10000 Ω·m / 4921 – 32808 Ω·ft |
| Weathered sandstone | 100 – 600 Ω·m / 328 – 1969 Ω·ft |
| Slate, clay shales | 50 – 300 Ω·m / 164 – 984 Ω·ft |
| Siliceous sand | 200 – 300 Ω·m / 656 – 984 Ω·ft |
| Calcareous soil | 100 – 300 Ω·m / 328 – 984 Ω·ft |
| Swampy soil | 1 – 30 Ω·m / 3 – 98 Ω·ft |
| Stony subsoil with turf | 300 – 500 Ω·m / 984 – 1640 Ω·ft |
| Stony ground | 1500 – 3000 Ω·m / 4921 – 9843 Ω·ft |

The values correspond to measurements with moderate moisture content and temperature. Extreme conditions of dryness or frost can multiply resistivity by a factor greater than 10.

## Interpretation of Results and Grounding Design

The resistivity obtained in the field is an input for calculating the dispersion resistance of electrodes. The lower the soil resistivity, the lower the grounding resistance achievable with a given electrode geometry. In high-resistivity soils, it is necessary to increase electrode length, use multiple elements in parallel, or resort to chemical treatment of the ground. The reference standard does not mandate a maximum ground resistance value, but a value below 25 Ω / 82 Ω·ft is considered acceptable for lightning protection, while telecommunications installations or sensitive equipment may require less than 3 Ω / 10 Ω·ft.

## Frequently Asked Questions (FAQ)

### Why is the Wenner method used and not another array?
The Wenner array offers a direct interpretation of the formula, equal spacing between electrodes, and an investigation depth approximately equal to the inter-electrode distance, which facilitates correlation with soil strata.

### What electrode spacing is recommended for measuring soil resistivity?
Typically, spacings from 1 m to 3 m / 3.28 ft to 9.84 ft are used initially, and gradually increased until reaching the depth of interest for the grounding system. Greater spacing means a larger volume of soil sampled, but lower lateral resolution.

### Does the depth of electrode penetration affect the measurement?
Yes. For the Wenner formula to be valid, the burial depth must be less than 10% of the spacing between electrodes. Greater depths introduce errors that require analytical corrections.

### What type of current is used in the measurement?
Direct current or very low frequency alternating current (typically between 70 Hz and 128 Hz) is used to minimize polarization effects of the electrodes and reduce coupling with 50/60 Hz industrial noise.

### How does moisture affect soil resistivity?
Resistivity decreases drastically as water content increases, especially when the soil contains dissolved salts. A dry soil can have resistivity up to 1000 times greater than the same soil saturated with moisture.

### What to do if the ground exhibits very high resistivities?
Options include deeper electrodes that reach more conductive layers, using multiple interconnected electrodes, or improving ground conductivity with low-resistivity backfills such as bentonite or mixtures of charcoal and salts.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/soil-resistivity-d_1865.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-of-earth/
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Ground-Resistance-It-is-Not-What-You-Think-(12-30-99).php
