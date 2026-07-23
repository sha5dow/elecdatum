---
title: "Specific heat of materials"
sidebar:
  label: "Specific heat of materials"
description: "Technical reference: Specific heat of materials"
keywords: ["specific heat capacity metals fluids", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "specific-heat"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## Definition
Specific heat (\(c_p\)) is the thermophysical property that quantifies the amount of energy required to raise by one degree the temperature of a unit mass of a substance. It is formally defined as the limit of the ratio \(dq/dT\) when \(dT \to 0\), where \(dq\) is the heat supplied in a constant‑pressure process. In practical terms, it represents the capacity of a material to store thermal energy: high values indicate that the material absorbs a large amount of heat with a small temperature rise, making it an excellent thermal buffer. The units in the International System are J/(kg·K) or J/(kg·°C), while the imperial system uses Btu/(lb·°F). The conversion factor between the two is 1 Btu/(lb·°F) = 4186,8 J/(kg·K).

## Table of specific heat of common materials
The following values correspond to measurements taken at room temperature (20‑25 °C / 68‑77 °F) and standard atmospheric pressure, unless otherwise noted.

| Material | Specific heat \(c_p\) |
|---|---|
| Liquid water (20 °C) | 4182 J/(kg·°C) / 1,000 Btu/(lb·°F) |
| Water (ice, -5 °C) | 2090 J/(kg·°C) / 0,499 Btu/(lb·°F) |
| Dry air (sea level) | 1005 J/(kg·°C) / 0,240 Btu/(lb·°F) |
| Alumina (Al₂O₃) | 718 J/(kg·°C) / 0,172 Btu/(lb·°F) |
| Aluminum | 897 J/(kg·°C) / 0,214 Btu/(lb·°F) |
| Liquid ammonia | 4700 J/(kg·°C) / 1,123 Btu/(lb·°F) |
| Ammonia gas | 2060 J/(kg·°C) / 0,492 Btu/(lb·°F) |
| Asphalt (asphalt concrete) | 920 J/(kg·°C) / 0,220 Btu/(lb·°F) |
| Bronze | 370 J/(kg·°C) / 0,088 Btu/(lb·°F) |
| Limestone | 909 J/(kg·°C) / 0,217 Btu/(lb·°F) |
| Charcoal | 840 J/(kg·°C) / 0,201 Btu/(lb·°F) |
| Copper | 385 J/(kg·°C) / 0,092 Btu/(lb·°F) |
| Concrete | 880 J/(kg·°C) / 0,210 Btu/(lb·°F) |
| Diamond (carbon) | 516 J/(kg·°C) / 0,123 Btu/(lb·°F) |
| Tin | 228 J/(kg·°C) / 0,054 Btu/(lb·°F) |
| Graphite (carbon) | 717 J/(kg·°C) / 0,171 Btu/(lb·°F) |
| Granite | 790 J/(kg·°C) / 0,189 Btu/(lb·°F) |
| Helium | 5193 J/(kg·°C) / 1,241 Btu/(lb·°F) |
| Iron | 449 J/(kg·°C) / 0,107 Btu/(lb·°F) |
| Hydrogen | 14304 J/(kg·°C) / 3,417 Btu/(lb·°F) |
| Brass | 375 J/(kg·°C) / 0,090 Btu/(lb·°F) |
| Lithium | 3582 J/(kg·°C) / 0,856 Btu/(lb·°F) |
| Wood (oak) | 2400 J/(kg·°C) / 0,573 Btu/(lb·°F) |
| Magnesium | 1050 J/(kg·°C) / 0,251 Btu/(lb·°F) |
| Marble | 880 J/(kg·°C) / 0,210 Btu/(lb·°F) |
| Mercury | 140 J/(kg·°C) / 0,033 Btu/(lb·°F) |
| Nickel | 461 J/(kg·°C) / 0,110 Btu/(lb·°F) |
| Gold | 129 J/(kg·°C) / 0,031 Btu/(lb·°F) |
| Silver | 235 J/(kg·°C) / 0,056 Btu/(lb·°F) |
| Lead | 129 J/(kg·°C) / 0,031 Btu/(lb·°F) |
| High-density polyethylene | 1920 J/(kg·°C) / 0,459 Btu/(lb·°F) |
| Dry earth | 800 J/(kg·°C) / 0,191 Btu/(lb·°F) |
| Wet earth | 1480 J/(kg·°C) / 0,354 Btu/(lb·°F) |
| Glass (silica) | 840 J/(kg·°C) / 0,201 Btu/(lb·°F) |
| Zinc | 388 J/(kg·°C) / 0,093 Btu/(lb·°F) |

## Application formulas
The fundamental relationship for calculating thermal energy in heat transfer processes is:

\[
Q = m \cdot c_p \cdot \Delta T
\]

where:  
\(Q\) = heat transferred (J)  
\(m\) = mass (kg)  
\(c_p\) = specific heat at constant pressure (J/(kg·°C))  
\(\Delta T\) = temperature change (°C)

In fluid thermodynamics analysis, heat capacity is also expressed on a molar basis. The molar heat capacity at constant pressure (\(C_{p,m}\)) and at constant volume (\(C_{v,m}\)) are defined. For ideal gases, the difference between the two is given by:

\[
C_{p,m} - C_{v,m} = R
\]

where \(R\) is the universal gas constant (8,314 J/(mol·K)). Additionally, the adiabatic index \(\gamma\) is used in processes without heat exchange:

\[
\gamma = \frac{c_p}{c_v}
\]

The specific heat of a mixture without chemical reaction is obtained by mass-weighted average:

\[
c_{p,\text{mixture}} = \sum_i (w_i \cdot c_{p,i})
\]

with \(w_i\) the mass fraction of component \(i\).

## Selection criteria based on specific heat
The choice of a material based on its specific heat responds to the desired function in the thermal system:

| Application | Typical value of \(c_p\) | Recommended material |
|---|---|---|
| Thermal storage (sensible heat) | > 1500 J/(kg·°C) / 0,36 Btu/(lb·°F) | Water, paraffin, molten hydroxides |
| High-performance liquid coolant | > 3500 J/(kg·°C) / 0,84 Btu/(lb·°F) | Water, liquid ammonia |
| Metal heat sinks | 700–1000 J/(kg·°C) / 0,17–0,24 Btu/(lb·°F) | Aluminum, aluminum-brass |
| Thermal insulation (materials with low specific heat) | < 400 J/(kg·°C) / 0,10 Btu/(lb·°F) | Lead, cork, ceramic foams |
| Structures subjected to rapid thermal cycles | > 1500 J/(kg·°C) / 0,36 Btu/(lb·°F) | Phase change materials (PCM), hydrated salts |

For thermal fluids in heat exchangers, a high \(c_p\) is preferred because it reduces the mass flow rate necessary to transport a given amount of heat, decreasing pumping consumption. In quenching or rapid cooling processes, a low specific heat allows the material to reach the desired temperature with lower energy investment.

## Frequently asked questions
**What is the specific heat of water and why is it so high?**  
Liquid water at 20 °C has a specific heat of 4182 J/(kg·°C) / 1,000 Btu/(lb·°F), one of the highest among common liquids. This high value is due to the strong hydrogen bonds that store part of the supplied energy as intermolecular potential energy, delaying the temperature rise.

**Which metal has the highest specific heat?**  
Lithium has 3582 J/(kg·°C) / 0,856 Btu/(lb·°F), the highest value recorded for a pure metal at room temperature. It is followed by beryllium (1020 J/(kg·°C)) and magnesium (1050 J/(kg·°C)), suitable for aerospace applications where lightness and thermal absorption capacity are sought.

**Which mass-use material has the lowest specific heat?**  
Lead, with 129 J/(kg·°C) / 0,031 Btu/(lb·°F), shares the lowest value among common metals along with gold. This property, combined with its high density, makes it useful in radiation shielding where low heat accumulation is desired.

**How much energy is needed to heat 1 liter of water from 20 °C to boiling?**  
To raise the temperature of 1 L of water (mass ≈ 1 kg) from 20 °C to 100 °C, approximately 334 560 J (80 kcal) are required, calculated with \(Q = 1\,\text{kg} \times 4182\,\text{J/(kg·°C)} \times 80\,\text{°C}\). In imperial units it is equivalent to about 317 Btu.

**How does the specific heat of dry air vary with temperature?**  
At 0 °C, the \(c_p\) of dry air is approximately 1005 J/(kg·°C) / 0,240 Btu/(lb·°F); at 100 °C it rises to about 1009 J/(kg·°C) / 0,241 Btu/(lb·°F). The variation is minimal in HVAC applications, so it is taken as constant in most engineering calculations.

**What influence does specific heat have on the design of a heat exchanger?**  
A secondary fluid with high specific heat, such as water (4182 J/(kg·°C)), can transport more energy per unit mass, reducing the required flow rate and the size of the heat exchanger. In contrast, fluids with low \(c_p\) require higher flow rates for the same thermal transfer, which increases operating costs.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/specific-heat-capacity-d_391.html
- **efunda.com**: https://www.efunda.com/formulae/
- **thermopedia.com**: https://www.thermopedia.com/content/1140/?tid=110
