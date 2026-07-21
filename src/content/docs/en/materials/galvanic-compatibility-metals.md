---
title: "Galvanic compatibility of metals"
sidebar:
  label: "Galvanic compatibility of metals"
description: "Technical reference: Galvanic compatibility of metals"
keywords: ["galvanic corrosion compatibility metals table", "materials"]
category: "materials"
topic: "cross-reference"
subcategory: "galvanic-compatibility"
skill: "material-data-comparison"
launch_phase: 1
last_updated: "2026-07-21"
verified: true
---

## General description
Galvanic corrosion causes anodic metal loss that can reach rates of **2 to 100 times** higher than isolated corrosion when the potential difference between metals exceeds 0.15 V in aggressive environments. This electrochemical phenomenon, also called bimetallic corrosion, occurs when two dissimilar metals are in electrical contact in the presence of an electrolyte (water, humidity, soil, process fluids). The metal with the more negative electrochemical potential acts as the anode and dissolves rapidly, while the more noble metal (cathode) is protected. The intensity of the attack depends on the potential difference in the galvanic series, the anode-to-cathode area ratio, and the electrolyte conductivity. Understanding galvanic compatibility is essential to avoid premature failures in metal structures and piping.

## Chemical composition
The “composition” of galvanic compatibility is defined through the electrochemical potentials of metals. The following table presents the anodic index (potential vs. saturated calomel electrode, SCE) for the most common structural materials. Metals with a more negative index are anodic and will preferentially corrode when coupled with any metal above them.

| Representative metal and alloy | Anodic index (V, vs. SCE) |
| :--- | :--- |
| Gold (solid/plated) and gold-platinum alloys | 0.00 |
| Silver (solid/plated), Monel alloys (Ni-Cu) | 0.15 |
| Nickel (solid/plated), titanium and its alloys | 0.30 |
| Copper, low-zinc brasses, bronzes | 0.35 |
| Admiralty brasses, silicon bronzes | 0.40 |
| Stainless steels type 18 % Cr (AISI 304) | 0.50 |
| Stainless steels type 12 % Cr (AISI 410), chromium plate, tin plate | 0.60 |
| Tin (coating), Sn-Pb solder | 0.65 |
| Lead and high-Pb alloys | 0.70 |
| Wrought aluminum series 2xxx (Al-Cu) | 0.75 |
| Wrought iron, gray/malleable cast iron, carbon and low-alloy steels | 0.85 |
| Wrought aluminum other series, aluminum-silicon castings | 0.90 |
| Cast aluminum (except Si), cadmium | 0.95 |
| Zinc (hot-dip galvanized), galvanized steel | 1.20 |
| Zinc (wrought), zinc-base die-casting alloys | 1.25 |
| Magnesium and Mg alloys | 1.75 |
| Beryllium | 1.85 |

## Mechanical properties
A carbon steel (anode) joint with a copper sheet (cathode) immersed in saline water can lose **0.2 mm per year** of steel thickness, reducing the tensile load capacity by approximately 5 % annually. Galvanic corrosion concentrated on fasteners (bolts, rivets) generates deep pits that reduce fatigue strength by up to **60 % in 1 year** when the cathode-to-anode area ratio exceeds 10:1. Martensitic stainless steels coupled to carbon steels in a humid environment can suffer a reduction in Charpy impact energy of up to 20 J from an initial value of 80 J in 24 months.

| Mechanical property affected | Typical anodic metal | Estimated reduction in 12 months (coastal environment) |
| :--- | :--- | :--- |
| Tensile strength (Rm) | Carbon steel ASTM A36 | 8 – 15 % |
| Fatigue limit (50 × 10⁶ cycles) | Aluminum alloy 2024-T3 | 40 – 60 % |
| Elongation (A%) | Gray cast iron FG-20 | 20 – 30 % |
| Impact energy (Charpy V) | Stainless steel AISI 410 | 15 – 25 % |

## Physical and thermal properties
The galvanic current flowing between the metallic electrodes has a typical value of **10 µA/cm²** in fresh water and can reach **100 µA/cm²** in seawater, which corresponds to a heat dissipation of approximately **3 mW/cm²** (based on a potential difference of 0.3 V). The electrolyte properties determine the corrosion rate: seawater at 25 °C (77 °F) has an electrical resistivity of 0.25 Ω·m (0.25 ohm·meter), while urban drinking water can exceed 10 Ω·m. The formation of corrosion products on the anode usually acts as a thermal insulator, with a thermal conductivity lower than 0.5 W·m⁻¹·K⁻¹ (0.29 BTU·h⁻¹·ft⁻¹·°F⁻¹), locally reducing heat transfer in exchangers.

## Applications by industry
Galvanic compatibility is controlled in multiple sectors to avoid catastrophic failures. Marine structures (ships, offshore platforms) use approximately **500 kg of sacrificial zinc anodes** per vessel, extending the hull service life to 25–30 years. In construction, aluminum facades are electrically isolated from the steel structure with plastic spacers to prevent cladding corrosion. Industrial piping systems (domestic hot water, HVAC) limit the potential difference between metals to less than **0.15 V** when fluids containing chlorides circulate. The 1986 restoration of the Statue of Liberty replaced the interior wrought iron framework with low-alloy stainless steel, solving a severe galvanic couple between the copper skin and the structure.

| Industry | Example of galvanic control | Expected service life |
| :--- | :--- | :--- |
| Naval | Zn anodes on steel hull | 25 – 30 years |
| Oil and gas | Buried pipelines with cathodic protection | 50 years |
| Automotive | Stainless steel fasteners with nylon washers | 15 years |
| Electronics | Gold-plated contacts on copper connectors | 20 years |
| Architecture | Break joints between aluminum and steel | 50 years |

## Comparison with similar materials
The selection of compatible metal pairs is governed by the maximum allowable potential difference depending on the service environment. The following table compares restrictions for different environmental severities.

| Service environment | Maximum potential difference (V) | Example of acceptable pair |
| :--- | :--- | :--- |
| Controlled (humidity and temperature controlled) | ≤ 0.50 | Stainless steel 304 (0.50 V) with aluminum 6061 (0.90 V) → do not use; Stainless steel 304 with bronze (0.40 V) → suitable |
| Indoor normal (warehouse, climate-controlled building) | ≤ 0.25 | Copper (0.35 V) with carbon steel (0.85 V) → difference 0.50 V not suitable; Copper with lead (0.70 V) → difference 0.35 V not suitable |
| Outdoor or saline environment (marine, industrial) | ≤ 0.15 | Stainless steel 316 (0.50 V) with carbon steel (0.85 V) → difference 0.35 V excessive; Titanium (0.30 V) with stainless steel 316 (0.50 V) → difference 0.20 V marginal |

In wet applications, carbon steel can be protected with zinc coatings (galvanized) because zinc acts as a sacrificial anode even if the coating is damaged; the opposite occurs with tin coating on steel, where the steel corrodes rapidly when exposed due to polarity reversal.

## FAQ

**What is the maximum allowable potential difference between metals in a marine environment?**  
In a marine environment, the electrochemical potential difference must not exceed **0.15 V**; pairs such as copper (0.35 V) with galvanized steel (1.20 V) generate a difference of 0.85 V and fail quickly.

**What corrosion rate does a 304 stainless steel and carbon steel pair cause in humid air?**  
The carbon steel acts as an anode and can corrode at a rate of **0.1 to 0.3 mm/year**, while the stainless steel hardly suffers deterioration.

**How many additional years of service life does a cathodic protection system with sacrificial anodes provide?**  
Cathodic protection can extend the service life of buried pipelines by **20 to 40 years** beyond the unprotected duration, depending on the quality of the coating and the soil.

**By how much is the fatigue strength of a carbon steel bolt reduced in a galvanic couple with a copper plate?**  
After one year of outdoor exposure, the fatigue strength can drop by up to **50 %** relative to the original value of 180 MPa, due to localized pitting.

**How much heat does a typical galvanic cell dissipate in a humidification stack?**  
A corrosion current of **50 µA/cm²** with a difference of 0.3 V dissipates approximately **1.5 mW/cm²**, a negligible value from a thermal standpoint but decisive for electrochemical kinetics.

**What potential difference is considered safe for coupling metals in climate-controlled interiors?**  
In interiors with humidity control (<60 % RH) and constant temperature, differences up to **0.50 V** are accepted; for example, aluminum 2024 (0.75 V) with stainless steel 304 (0.50 V) is feasible with caution.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/metal-corrosion-resistance-d_491.html
- **steelnumber.com**: https://www.steelnumber.com/en/standard_steel_eu.php?gost_number=10283
