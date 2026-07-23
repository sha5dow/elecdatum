---
title: "Pneumatic air consumption calculation"
sidebar:
  label: "Pneumatic air consumption calculation"
description: "Technical reference: Pneumatic air consumption calculation"
keywords: ["pneumatic air consumption cylinder flow", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "air-consumption"
skill: "hydraulics-reference-table"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

The consumption of compressed air in industrial pneumatic systems typically represents between 15% and 30% of the total energy cost of a plant. Accurate estimation of the free air volume demanded by cylinders, tools, and leaks is essential to correctly size compressors, distribution networks, and treatment systems. Below are the symbols, formulas, and reference tables necessary to perform these calculations in accordance with common practice in pneumatic engineering.

## Standard symbols

The reference atmospheric pressure in standard calculations is 1.013 bar abs / 14.7 psia at sea level, and the reference ambient temperature is 20 °C / 68 °F. The most commonly used parameters are summarized in the following table.

| Symbol | Description | Metric unit / Imperial unit |
| --- | --- | --- |
| *D* | Inside diameter of cylinder | mm / in |
| *d* | Rod diameter | mm / in |
| *L* | Stroke length | mm / in |
| *n* | Complete cycles per minute | cycles/min / cpm |
| *P<sub>man</sub>* | Gauge working pressure | bar / psi |
| *P<sub>abs</sub>* | Absolute pressure = *P<sub>man</sub>* + *P<sub>atm</sub>* | bar abs / psia |
| *P<sub>atm</sub>* | Atmospheric pressure (1.013 bar / 14.7 psi) | bar / psi |
| *A<sub>ext</sub>* | Effective piston area in extension | mm² / in² |
| *A<sub>ret</sub>* | Effective piston area in retraction | mm² / in² |
| *V<sub>ciclo</sub>* | Free air volume consumed per complete cycle | Nl / scf |
| *Q* | Free air flow rate consumed | Nl/min / scfm |
| *C* | Discharge coefficient (orifices) | dimensionless |
| *A<sub>orif</sub>* | Cross-sectional area of orifice | mm² / in² |
| *T* | Absolute air temperature | K / °R |
| *ρ* | Air density at reference conditions | kg/m³ / lb/ft³ |

## Calculation formulas

The typical working pressure in pneumatic networks is 6 bar / 87 psi, and the free air flow rate required by a cylinder is calculated using the equation *Q = A × L × n × (P<sub>abs</sub> / P<sub>atm</sub>)*.

**Area calculation**  
Piston area in extension:  
*A<sub>ext</sub>* = π · *D*² / 4  
Piston area in retraction (double-acting):  
*A<sub>ret</sub>* = π · (*D*² – *d*²) / 4

**Free air volume per cycle**  
Single-acting cylinder (pneumatic advance only):  
*V<sub>ciclo</sub>* = *A<sub>ext</sub>* · *L* · (*P<sub>abs</sub>* / *P<sub>atm</sub>*)  

Double-acting cylinder (pneumatic advance and return):  
*V<sub>ciclo</sub>* = (*A<sub>ext</sub>* + *A<sub>ret</sub>*) · *L* · (*P<sub>abs</sub>* / *P<sub>atm</sub>*)

**Free air flow rate**  
*Q* = *V<sub>ciclo</sub>* · *n*

**Air discharge through an orifice (Moss formula)**  
Applicable when the supply pressure exceeds twice the back pressure and the flow is sonic (gauge pressure > 1.013 bar / 14.7 psi):  

*W* = 0,5303 · *A*<sub>orif</sub> · *C* · *P*<sub>abs</sub> / √*T*  

Where *W* in lb/s, *A*<sub>orif</sub> in in², *P*<sub>abs</sub> in psia and *T* in °R. The volumetric flow rate at reference conditions (14.7 psia and 70 °F / 21.1 °C) is obtained as:  

*Q* [scfm] = *W* · 60 / 0,07494  (where 0.07494 lb/ft³ is the density of air at those conditions).

**Flow through a restriction (venturi meter)**  
For subsonic velocities and incompressible flow:  

*Q* = *C* · (*A*<sub>1</sub> · *A*<sub>2</sub> / √(*A*<sub>1</sub>² – *A*<sub>2</sub>²)) · √(2 · Δ*p* / ρ)  

*C* is typically between 0.90 and 0.98 for smooth profile venturis.

## Component selection tables

For a sharp-edged orifice of 1.59 mm / 1/16 in, the air discharge at 6.9 bar / 100 psig is 4.2 scfm / 119 Nl/min with *C* = 0.65, or 6.3 scfm / 178 Nl/min with rounded edges (*C* = 0.97). The following tables facilitate the evaluation of consumption of standard cylinders and discharge through typical orifices.

**Free air consumption per complete cycle (extension + retraction) for double-acting cylinders at 6 bar / 87 psi gauge, stroke of 100 mm / 3.94 in**

| Inside diameter | Extension area | Retraction area | Consumption per cycle (100 mm / 3.94 in) |
| --- | --- | --- | --- |
| 32 mm / 1.26 in | 804 mm² / 1.25 in² | 691 mm² / 1.07 in² | 1.03 Nl / 0.0364 scf |
| 40 mm / 1.57 in | 1257 mm² / 1.95 in² | 1056 mm² / 1.64 in² | 1.60 Nl / 0.0565 scf |
| 50 mm / 1.97 in | 1963 mm² / 3.04 in² | 1649 mm² / 2.56 in² | 2.50 Nl / 0.0883 scf |
| 63 mm / 2.48 in | 3117 mm² / 4.83 in² | 2804 mm² / 4.35 in² | 4.09 Nl / 0.144 scf |
| 80 mm / 3.15 in | 5027 mm² / 7.79 in² | 4536 mm² / 7.03 in² | 6.61 Nl / 0.233 scf |
| 100 mm / 3.94 in | 7854 mm² / 12.17 in² | 7147 mm² / 11.08 in² | 10.4 Nl / 0.366 scf |

*Note: the retraction area values consider rods of 12, 16, 20, 20, 25 and 30 mm respectively. Consumption is directly proportional to stroke and absolute pressure.*

**Air discharge through a circular orifice, *C* = 0.65 / *C* = 0.97**

| Gauge pressure | 1/16 in / 1,59 mm | 1/8 in / 3,18 mm | 1/4 in / 6,35 mm | 1/2 in / 12,7 mm |
| --- | --- | --- | --- | --- |
| 1,4 bar / 20 psi | 1,27 / 1,90 scfm (36,0 / 53,8 Nl/min) | 5,09 / 7,59 scfm (144 / 215 Nl/min) | 20,4 / 30,4 scfm (578 / 861 Nl/min) | 81,6 / 122 scfm (2310 / 3450 Nl/min) |
| 4,1 bar / 60 psi | 2,59 / 3,86 scfm (73,3 / 109 Nl/min) | 10,4 / 15,5 scfm (294 / 439 Nl/min) | 41,5 / 61,9 scfm (1175 / 1750 Nl/min) | 166 / 248 scfm (4700 / 7020 Nl/min) |
| 6,9 bar / 100 psi | 4,20 / 6,27 scfm (119 / 178 Nl/min) | 16,8 / 25,1 scfm (476 / 711 Nl/min) | 67,3 / 100 scfm (1910 / 2830 Nl/min) | 270 / 402 scfm (7650 / 11400 Nl/min) |

*Values calculated according to the Moss formula for reference conditions 14.7 psia and 70 °F / 21.1 °C; the free air flow at 20 °C / 1 atm is obtained by multiplying the value in scfm by 28,3 L/scf.*

## Standard working pressures

The nominal pressure of industrial compressors is 7 bar / 101 psi to 8 bar / 116 psi, while actuators typically operate between 4 bar / 58 psi and 8 bar / 116 psi.

| Application | Typical pressure range |
| --- | --- |
| Pneumatic instrumentation | 1.4 – 2.4 bar / 20 – 35 psi |
| Control valves | 2 – 6 bar / 29 – 87 psi |
| Blowing and cleaning | 2 – 4 bar / 29 – 58 psi |
| Spray painting | 2 – 3.5 bar / 29 – 51 psi |
| Linear actuators / grippers | 4 – 8 bar / 58 – 116 psi |
| Portable tools | 6.3 bar / 90 psi (typical nominal value) |
| Packaging / automation processes | 5 – 6 bar / 73 – 87 psi |

## Calculation example

For a double-acting cylinder with 50 mm / 1.97 in inside diameter, rod of 20 mm / 0.79 in, stroke of 200 mm / 7.87 in and frequency of 20 cycles per minute, the free air consumption is 100 Nl/min / 3.53 scfm.

**Step 1 – Effective areas**  
*A<sub>ext</sub>* = π · (50 mm)² / 4 = 1963,5 mm² = 0,0019635 m²  
*A<sub>ret</sub>* = π · [(50 mm)² – (20 mm)²] / 4 = 1649,3 mm² = 0,0016493 m²

**Step 2 – Geometric volume per cycle (extension + retraction)**  
*V<sub>ext</sub>* = 0,0019635 m² · 0,200 m = 0,0003927 m³ = 0,3927 L  
*V<sub>ret</sub>* = 0,0016493 m² · 0,200 m = 0,0003299 m³ = 0,3299 L  
Total geometric volume per cycle: 0,7226 L

**Step 3 – Absolute pressure**  
*P<sub>man</sub>* = 6 bar → *P<sub>abs</sub>* = 6 + 1,013 = 7,013 bar

**Step 4 – Free air volume per cycle**  
*V<sub>ciclo</sub>* = 0,7226 L · (7,013 / 1,013) = 5,00 Nl

**Step 5 – Free air flow rate**  
*Q* = 5,00 Nl/cycle · 20 cycles/min = 100,0 Nl/min  
*Q* (scfm) = 100,0 / 28,317 ≈ 3,53 scfm

This flow rate must be supplied at the operating pressure of 6 bar; the supply line and the maintenance unit must be sized accordingly.

## Frequently asked questions

**How is the air consumption of a single-acting cylinder calculated?**  
The free air consumption per minute of a single-acting cylinder with 40 mm diameter and 100 mm stroke, operating at 6 bar and 30 cycles/min, is approximately 25 Nl/min. Air is only consumed during extension; the return is provided by a spring or the load.

**What is the recommended working pressure for pneumatic actuators?**  
The standard working pressure for linear actuators is 6 bar / 87 psi, with an allowable range of 4 to 8 bar / 58 to 116 psi. Lower pressures drastically reduce the available force; higher pressures shorten the service life of seals and components.

**What discharge coefficient is used for a sharp-edged orifice?**  
For a sharp-edged orifice the discharge coefficient *C* is 0.65, while for rounded edges 0.97 is used. In commercial valves and throttles, *C* ≈ 0.7 – 0.8 is typically adopted.

**How does working pressure affect air consumption?**  
Increasing the working pressure from 6 to 8 bar increases free air consumption by approximately 33%, since the necessary atmospheric air volume is directly proportional to absolute pressure.

**What is the conversion between Nl/min and scfm?**  
1 scfm is equivalent to 28.3 Nl/min when considering reference conditions of 20 °C / 68 °F and 1 atmosphere (1.013 bar / 14.7 psi). Values in Nl/min are obtained by multiplying scfm by 28.317.

**What pipe diameter is recommended for a flow rate of 500 Nl/min?**  
For a flow rate of 500 Nl/min / 17.7 scfm, a pipe with 10 mm / 0.39 in inside diameter generates a pressure drop of less than 0.1 bar / 1.5 psi per 10 m / 33 ft of length, which is suitable for most installations.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/single-acting-piston-air-volume-d_1192.html
- **engineersedge.com**: https://www.engineersedge.com/fluid_flow/discharge-air-orifice.htm
- **efunda.com**: https://www.efunda.com/formulae/fluids/venturi_flowmeter.cfm
