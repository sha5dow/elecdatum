---
title: "Basic thermodynamic cycles"
sidebar:
  label: "Basic thermodynamic cycles"
description: "Technical reference: Basic thermodynamic cycles"
keywords: ["Rankine Brayton Otto diesel thermodynamic cycles", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "thermodynamic-cycles"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

Basic thermodynamic cycles are ideal models that describe the operation of thermal machines through compression, heat addition, expansion and heat rejection processes. Each cycle defines a set of reversible transformations on a working fluid, and its study allows predicting the performance, operating temperatures and achievable pressures in internal combustion engines, gas turbines, steam plants and refrigeration systems.

## Table of thermodynamic cycles

| Cycle | Main processes | Heat addition | Heat rejection | Ideal efficiency (formula) | Typical characteristic ratio | Typical temperatures (K / °R) |
|---|---|---|---|---|---|---|
| Carnot | 1-2 Isothermal, 2-3 Isentropic, 3-4 Isothermal, 4-1 Isentropic | Isothermal at T_max | Isothermal at T_min | η = 1 – T_min / T_max | – | 300–1500 K / 540–2700 °R |
| Otto | 1-2 Isentropic (compression), 2-3 Isochoric, 3-4 Isentropic (expansion), 4-1 Isochoric | Isochoric (constant volume) | Isochoric | η = 1 – 1 / ε^(κ–1) | ε = 8:1 to 12:1 (compression) | 300–2500 K / 540–4500 °R |
| Diesel | 1-2 Isentropic (compression), 2-3 Isobaric, 3-4 Isentropic (expansion), 4-1 Isochoric | Isobaric (constant pressure) | Isochoric | η = 1 – (1/ε^(κ–1)) · (Φ^κ – 1) / [κ(Φ – 1)] | ε = 14:1 to 25:1, Φ = 1.5–3.0 (injection) | 300–2200 K / 540–3960 °R |
| Brayton (Joule) | 1-2 Isentropic (compressor), 2-3 Isobaric, 3-4 Isentropic (turbine), 4-1 Isobaric | Isobaric | Isobaric | η = 1 – T1/T2 = 1 – (P2/P1)^((1–κ)/κ) | r_p = 15:1 to 40:1 (pressure) | 300–1700 K / 540–3060 °R (turbine inlet) |
| Rankine | 1-2 Isobaric (boiler), 2-3 Isentropic (turbine), 3-4 Isobaric (condenser), 4-1 Isentropic (pump) | Isobaric (evaporation and superheating) | Isobaric (condensation) | η = (h3 – h4) / (h3 – h1) | Boiler pressure: 40–250 bar / 580–3626 psi | 300–900 K / 540–1620 °R (steam) |

## Formulas and efficiencies

The thermal efficiency of each cycle is expressed as the net work produced divided by the heat input. Under ideal conditions, the formulas depend only on temperatures, compression or pressure ratios, and the isentropic exponent κ (typically 1.4 for air as a diatomic gas).

| Cycle | Key variables | Simplified expression | Typical real value |
|---|---|---|---|
| Carnot | T_max, T_min | η = 1 – 300 K/1500 K = 80 % | – (ideal) |
| Otto | ε, κ | η = 1 – ε^(1–κ) | 0.25–0.30 (gasoline) |
| Diesel | ε, κ, Φ | η = 1 – (1/ε^(κ–1)) · (Φ^κ–1)/[κ(Φ–1)] | 0.35–0.45 (modern engines) |
| Brayton | r_p, κ, T1 | η = 1 – 1/r_p^((κ–1)/κ) | 0.30–0.40 (simple gas turbine) |
| Rankine | Enthalpies h3, h4, h1 | η = (h3 – h4)/(h3 – h1) | 0.35–0.48 (steam plants) |

For the Rankine cycle, the use of superheating, reheating, and regenerative feedwater preheating raises the actual efficiency from 35% to 48% in supercritical plants (boiler operating at 250 bar / 3626 psi and 600 °C / 1112 °F).

## Selection criteria

The choice of the most appropriate thermodynamic cycle depends on the type of energy source, the required power, the working temperatures, and the final application.

| Criterion | Carnot | Otto | Diesel | Brayton | Rankine |
|---|---|---|---|---|---|
| Working fluid | Ideal gas (any) | Air‑fuel mixture | Air | Gas (air or helium) | Water/steam |
| Combustion type | External (theoretical) | Internal, spark ignition | Internal, compression ignition | Internal or external | External (boiler) |
| Power range | – | 1–400 kW (automobiles) | 5–80 000 kW (vehicles, generation) | 100 kW–500 MW (gas turbines) | 1 MW–1 000 MW (thermal power plants) |
| Typical T_max | Variable | ~2500 K / 4500 °R | ~2200 K / 3960 °R | 1500–1700 K / 2700–3060 °R | 800–900 K / 1440–1620 °R |
| Real efficiency | Maximum theoretical | 25–30 % | 35–45 % | 30–40 % | 35–48 % |

In large-scale stationary applications, the Rankine cycle is the dominant choice. Gas turbines (Brayton) are used in aircraft and combined cycles, where exhaust gases feed a steam boiler, achieving overall efficiencies above 60%. Otto and Diesel engines cover the transportation sector, while the Carnot cycle serves exclusively as a theoretical reference.

## P‑V and T‑s diagrams

Graphical representations in pressure‑volume (P‑V) and temperature‑entropy (T‑s) diagrams allow visualizing the processes of each cycle.

- **Carnot**: two horizontal isotherms in T‑s, two vertical isentropics.
- **Otto**: two curved isentropics and two vertical isochores in P‑V (constant volume lines).
- **Diesel**: curved isentropics, one horizontal isobar (heat addition) and one vertical isochore (rejection) in P‑V.
- **Brayton**: two horizontal isobars and two curved isentropics in both diagrams.
- **Rankine**: in T‑s, the phase change zone shows a saturation dome; the typical cycle includes boiler and condenser isobars, and an expansion isentropic in the turbine.

In all cases, the area enclosed in the P‑V diagram equals the net work of the cycle, while in the T‑s diagram the area under the heat addition curve represents the thermal energy absorbed.

## Typical applications

| Cycle | Main application | Concrete examples |
|---|---|---|
| Carnot | Ideal reference | Evaluation of efficiency limits |
| Otto | Gasoline, LPG engines | Automobiles, motorcycles, small generator sets |
| Diesel | Compression ignition engines | Trucks, locomotives, heavy machinery, diesel generators |
| Brayton | Gas turbines, air propulsion | Turbojets, turbofans, combined cycle plants |
| Rankine | Steam thermal power plants | Coal plants, nuclear plants, concentrating solar plants |

## Frequently asked questions (FAQ)

**What is the maximum ideal efficiency of a Carnot cycle between 300 K and 1500 K?**  
The ideal efficiency is 80%, calculated as 1 – (300 K / 1500 K). In practice, irreversibilities prevent reaching this value.

**What compression ratio is needed in an Otto cycle to achieve an ideal efficiency of 60% with κ = 1.4?**  
A compression ratio of approximately 10:1 is required. With ε = 10, η = 1 – 10^(1–1.4) = 1 – 10^(–0.4) ≈ 0.60.

**What is the typical real efficiency of an automotive diesel engine with a compression ratio of 18:1?**  
A modern diesel engine achieves between 35% and 40% real thermal efficiency, compared to the 63% ideal that the Diesel cycle formula would yield with Φ=2.0 and κ=1.4.

**At what pressure does the boiler of a supercritical Rankine cycle operate?**  
Supercritical boilers typically operate at 250 bar / 3600 psi, with steam temperatures up to 600 °C / 1112 °F, achieving real efficiencies from 45% to 48%.

**What thermal efficiency is obtained in an ideal Brayton cycle with a pressure ratio of 15 and compressor inlet temperature of 300 K?**  
With r_p = 15, the ideal efficiency is η = 1 – 15^((1–1.4)/1.4) = 0.557 (55.7%). Real gas turbines, with losses, operate between 35% and 40%.

**What is the specific fuel consumption of an Otto cycle engine at full load?**  
Direct injection Otto engines have a typical specific fuel consumption of 250 g/kWh (0.55 lb/hp·h). The most efficient diesel engines can drop to 200 g/kWh.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/carnot-otto-diesel-joule-cycles-d_2237.html
- **thermopedia.com**: https://www.thermopedia.com/content/1072/
