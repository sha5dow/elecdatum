---
title: "Hydraulic cylinder force speed calculation"
sidebar:
  label: "Hydraulic cylinder force speed calculation"
description: "Technical reference: Hydraulic cylinder force speed calculation"
keywords: ["hydraulic cylinder force speed bore rod calculation", "hydraulics"]
category: "hydraulics"
topic: "hydraulic-system"
subcategory: "cylinder-calculation"
skill: "hydraulics-reference-table"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

## Standard symbols

| Symbol | Description | Units |
| --- | --- | --- |
| _d₂_ | Piston diameter | mm / in |
| _d₁_ | Rod diameter | mm / in |
| _A₂_ | Effective area on piston side (thrust) | mm² / in² |
| _A₁_ | Annular area on rod side (traction) | mm² / in² |
| _P_ | Working pressure | bar / psi |
| _F₂_ | Thrust force (extension) | N / lbf |
| _F₁_ | Traction force (retraction) | N / lbf |
| _Q_ | Fluid flow rate | L/min / gpm |
| _v_ | Linear velocity of rod | m/s / in/s |

## Calculation formulas

**Thrust force (piston side, extension):**

_F₂ = P · A₂ = P ·_ (π · _d₂²_ / 4)

**Traction force (rod side, retraction):**

_F₁ = P · A₁ = P ·_ (π · (_d₂²_ − _d₁²_) / 4)

**Forward or return velocity:**

_v_ (m/s) = _Q_ (m³/s) / _A_ (m²)  
Imperial system: _v_ (in/min) = 231 · _Q_ (gpm) / _A_ (in²)

## Component selection tables

The following tables show typical forces and velocities for double-acting cylinders with single rod, based on bore diameter, pressure, and flow rate. Values assume 100% efficiency (no friction). For actual calculations, add a friction loss factor of 5–10%.

### Thrust and traction forces

| Piston diameter<br>(mm / in) | Rod diameter<br>(mm / in) | Piston area<br>(mm² / in²) | Annular area<br>(mm² / in²) | Thrust force at 100 bar / 1450 psi<br>(kN / lbf) | Traction force at 100 bar / 1450 psi<br>(kN / lbf) | Thrust force at 200 bar / 2900 psi<br>(kN / lbf) | Traction force at 200 bar / 2900 psi<br>(kN / lbf) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25 / 0.98 | 12 / 0.47 | 491 / 0.76 | 333 / 0.52 | 4.91 / 1100 | 3.33 / 750 | 9.82 / 2210 | 6.66 / 1500 |
| 32 / 1.26 | 14 / 0.55 | 804 / 1.25 | 563 / 0.87 | 8.04 / 1810 | 5.63 / 1270 | 16.1 / 3620 | 11.3 / 2540 |
| 40 / 1.57 | 18 / 0.71 | 1257 / 1.95 | 940 / 1.46 | 12.6 / 2830 | 9.40 / 2110 | 25.1 / 5650 | 18.8 / 4230 |
| 50 / 1.97 | 22 / 0.87 | 1963 / 3.04 | 1441 / 2.23 | 19.6 / 4410 | 14.4 / 3240 | 39.3 / 8830 | 28.8 / 6480 |
| 63 / 2.48 | 28 / 1.10 | 3117 / 4.83 | 2223 / 3.45 | 31.2 / 7010 | 22.2 / 5000 | 62.3 / 14000 | 44.5 / 10000 |
| 80 / 3.15 | 36 / 1.42 | 5027 / 7.79 | 3682 / 5.71 | 50.3 / 11300 | 36.8 / 8270 | 101 / 22600 | 73.6 / 16500 |
| 100 / 3.94 | 45 / 1.77 | 7854 / 12.2 | 5661 / 8.78 | 78.5 / 17700 | 56.6 / 12700 | 157 / 35300 | 113 / 25400 |
| 125 / 4.92 | 56 / 2.20 | 12272 / 19.0 | 8621 / 13.4 | 123 / 27600 | 86.2 / 19400 | 245 / 55200 | 172 / 38700 |
| 160 / 6.30 | 70 / 2.76 | 20106 / 31.2 | 14137 / 21.9 | 201 / 45200 | 141 / 31700 | 402 / 90400 | 283 / 63600 |
| 200 / 7.87 | 90 / 3.54 | 31416 / 48.7 | 22235 / 34.5 | 314 / 70600 | 222 / 49900 | 628 / 141000 | 445 / 100000 |

### Rod velocities

| Piston diameter<br>(mm / in) | Piston area<br>(mm² / in²) | Flow rate 10 L/min / 2.64 gpm<br>speed (m/s / in/s) | Flow rate 30 L/min / 7.93 gpm<br>speed (m/s / in/s) | Flow rate 50 L/min / 13.2 gpm<br>speed (m/s / in/s) |
| --- | --- | --- | --- | --- |
| 25 / 0.98 | 491 / 0.76 | 0.339 / 13.4 | 1.02 / 40.1 | 1.70 / 66.8 |
| 32 / 1.26 | 804 / 1.25 | 0.207 / 8.14 | 0.621 / 24.4 | 1.04 / 40.7 |
| 40 / 1.57 | 1257 / 1.95 | 0.133 / 5.22 | 0.398 / 15.6 | 0.663 / 26.1 |
| 50 / 1.97 | 1963 / 3.04 | 0.085 / 3.34 | 0.255 / 10.0 | 0.425 / 16.7 |
| 63 / 2.48 | 3117 / 4.83 | 0.053 / 2.10 | 0.160 / 6.31 | 0.267 / 10.5 |
| 80 / 3.15 | 5027 / 7.79 | 0.033 / 1.30 | 0.099 / 3.90 | 0.166 / 6.50 |
| 100 / 3.94 | 7854 / 12.2 | 0.021 / 0.83 | 0.064 / 2.50 | 0.106 / 4.17 |
| 125 / 4.92 | 12272 / 19.0 | 0.014 / 0.54 | 0.041 / 1.61 | 0.068 / 2.69 |
| 160 / 6.30 | 20106 / 31.2 | 0.008 / 0.33 | 0.025 / 0.99 | 0.042 / 1.65 |
| 200 / 7.87 | 31416 / 48.7 | 0.005 / 0.21 | 0.016 / 0.63 | 0.027 / 1.05 |

## Standard working pressures

Working pressures in hydraulic systems are typically classified according to the application type. The most common design values are shown below.

| Pressure class | Typical range (bar / psi) | Common applications |
| --- | --- | --- |
| Low pressure | 10 – 70 bar / 145 – 1015 psi | Lubrication systems, fluid transfer, light drives |
| Medium pressure | 70 – 210 bar / 1015 – 3045 psi | Agricultural machinery, low-capacity hydraulic presses, light mobile equipment |
| High pressure | 210 – 350 bar / 3045 – 5075 psi | Excavators, construction machinery, heavy industrial equipment |
| Very high pressure | 350 – 700 bar / 5075 – 10150 psi | Special applications: rescue hydraulics, cutting tools, high-tonnage cylinders |

## Calculation example

**Cylinder data:**  
Piston diameter _d₂_ = 80 mm / 3.15 in  
Rod diameter _d₁_ = 40 mm / 1.57 in  
Working pressure _P_ = 200 bar / 2900 psi  
Flow rate _Q_ = 30 L/min / 7.93 gpm  

**1. Effective areas**  
_A₂_ = π · (80 mm)² / 4 = 5027 mm² / 7.79 in²  
_A₁_ = π · (80² − 40²) / 4 = 3770 mm² / 5.84 in²  

**2. Thrust force (extension)**  
_F₂_ = 200 bar · 10 N/(cm²·bar) · 50.27 cm² = 100 540 N ≈ **100.5 kN / 22 600 lbf**  

**3. Traction force (retraction)**  
_F₁_ = 200 bar · 10 N/(cm²·bar) · 37.70 cm² = 75 400 N ≈ **75.4 kN / 16 950 lbf**  

**4. Extension speed**  
_A₂_ = 5027 mm² = 0.005027 m²  
_Q_ = 30 L/min = 0.0005 m³/s  
_v_ = 0.0005 / 0.005027 = **0.0995 m/s / 3.92 in/s**  

## Frequently asked questions

**What thrust force does a cylinder with 100 mm diameter generate at 250 bar?**  
A cylinder with piston diameter of 100 mm (3.94 in) operated at 250 bar (3626 psi) develops a thrust force of 196.3 kN (44,100 lbf), neglecting friction.  

**How does rod diameter affect retraction force?**  
Retraction force is always less than thrust force because the annular area is smaller. For example, with a 45 mm (1.77 in) rod in a 100 mm (3.94 in) cylinder, the traction force at 200 bar (2900 psi) is 113 kN (25,400 lbf), 28% lower than the thrust force.  

**What speed does a cylinder with 80 mm diameter achieve with a flow rate of 40 L/min?**  
With a flow rate of 40 L/min (10.6 gpm), the extension speed of an 80 mm (3.15 in) bore cylinder is approximately 0.133 m/s (5.22 in/s).  

**What pressure is required to lift a load of 50 kN with a 63 mm cylinder?**  
For a cylinder with piston diameter of 63 mm (2.48 in) that must exert 50 kN (11,240 lbf) of thrust, a working pressure of approximately 160 bar (2320 psi) is required.  

**Is the force formula valid for single-acting cylinders?**  
Yes, in a single-acting cylinder the thrust force is calculated with the same formula _F = P · A_, but the return stroke depends on a spring or external load, not on opposing hydraulic pressure.  

**What margin is recommended to add for friction in force calculations?**  
Friction from seals and bearings can consume between 5% and 20% of the theoretical force. For preliminary calculations, an increase factor of 10% over the required load is typically applied.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hydraulic-force-calculator-d_1369.html
- **engineersedge.com**: https://www.engineersedge.com/fluid_flow/cylinder_piston_velocity.htm
- **efunda.com**: https://www.efunda.com/designstandards/oring/design_guidelines.cfm
