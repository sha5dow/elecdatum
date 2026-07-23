---
title: "Torsion springs calculation"
sidebar:
  label: "Torsion springs calculation"
description: "Technical reference: Torsion springs calculation"
keywords: ["torsion spring calculation angle torque", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "torsion-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General definition
A torsion spring is an elastic mechanical element that stores energy when twisted around its axis, exerting a torque proportional to the angle of rotation. The maximum torque a solid circular shaft of 50 mm diameter in steel with an allowable shear stress of 40.8 MPa can withstand is approximately 1000 N·m / 737.6 lb·ft. The angular deflection of that same shaft subjected to that torque and with a length of 1 m results in 1.2° (0.021 rad), considering a shear modulus of 79 GPa.

| Characteristic | Description |
| --- | --- |
| Physical principle | Energy storage by elastic deformation under torsion (shafts) or bending (helical springs). |
| Constitutive law | τ = -κ θ (torque proportional to angle, negative sign indicates opposition). |
| Stored energy | U = ½ κ θ² (for linear behavior). |
| Typical applications | Torsion bars in vehicle suspension, clothespin springs, mousetraps, garage doors. |

## Types of torsion springs
Torsion springs are classified according to their geometry and the predominant type of stress:

- **Torsion bar (solid or hollow shaft)**: straight metal or elastomer bar subjected to pure torsion. The stress is shear, maximum at the periphery.
- **Helical torsion spring**: wire or strip wound into a helix that works mainly in bending when wound or unwound. Used in clothespins, hinges, and return mechanisms.
- **Spiral spring (clock spring)**: variant of the helical with concentric flat coils, capable of storing energy for multiple revolutions.
- **Torsion fiber**: thin thread (silk, quartz, glass) used in precision instruments (torsion pendulums, galvanometers).

## Calculation formulas
The behavior of a solid or hollow circular cross-section torsion bar, within the elastic limit, is governed by the following expressions (according to data from engineeringtoolbox):

| Variable | Formula | Units |
| --- | --- | --- |
| Maximum shear stress on surface | τ_max = T·R / J | Pa; T in N·m, R in m, J in m⁴ |
| Polar moment of inertia (solid) | J = π D⁴ / 32 | m⁴; D outer diameter |
| Polar moment of inertia (hollow) | J = π (D⁴ - d⁴) / 32 | m⁴; d inner diameter |
| Maximum torque (solid) | T_max = (π/16)·τ_max · D³ | N·m |
| Maximum torque (hollow) | T_max = (π/16)·τ_max · (D⁴ - d⁴) / D | N·m |
| Angular deflection (radians) | α = L·T / (J·G) | rad; L length, G shear modulus |
| Angular deflection solid (°) | α_deg ≈ 584·L·T / (G·D⁴) | °; L in m, T in N·m, G in Pa, D in m |
| Minimum solid diameter | D_min = 1,72·(T_max / τ_max)^(1/3) | m |

For helical torsion springs (according to general spring design principles):

| Parameter | Expression | Units |
| --- | --- | --- |
| Spring constant (torque/angle) | κ = E·d⁴ / (64·D·N) | N·mm/rad; E elastic modulus, d wire ∅, D mean ∅, N active coils |
| Bending stress in the farthest fiber | σ_f = 32·M / (π·d³) | Pa; M applied moment |
| Wahl factor (for curvature correction) | K_w = (4C-1)/(4C-4); C = D/d | dimensionless |

The energy stored in any linear torsion spring is given by U = ½ κ θ², where κ is the torsional stiffness and θ is the torsion angle in radians.

## Standard dimensions
The dimensions of commercial torsion springs are usually standardized according to DIN standards or manufacturer catalogs. Below are typical ranges for helical torsion springs of round wire in AISI 302 stainless steel, based on common offerings:

| Parameter | Metric range | Imperial range |
| --- | --- | --- |
| Wire diameter (d) | 0.3 – 6 mm | 0.012 – 0.236 in |
| Body outer diameter (De) | 3 – 60 mm | 0.118 – 2.362 in |
| Body free length (L0) | 5 – 300 mm | 0.197 – 11.811 in |
| Number of coils (N) | 2 – 30 | — |
| Free angle between legs | 90° / 120° / 180° | — |
| Winding direction | Right or left | — |

Solid torsion bars used in vehicle suspension have diameters between 15 mm / 0.59 in and 35 mm / 1.38 in, with effective lengths ranging from 600 mm / 23.6 in to 1500 mm / 59.1 in.

## Materials and properties
The most common materials for torsion springs and their relevant mechanical properties are listed below.

| Material | Elastic modulus (E) | Shear modulus (G) | Tensile strength (Rm) | Maximum service temperature |
| --- | --- | --- | --- | --- |
| Carbon steel for springs (EN 10270-1) | 206 GPa / 29 900 ksi | 81.5 GPa / 11 820 ksi | 1200 – 2200 MPa / 174 – 319 ksi (depending on ∅) | 120 °C / 248 °F |
| Stainless steel AISI 302/304 | 193 GPa / 28 000 ksi | 70 GPa / 10 150 ksi | 1400 – 1800 MPa / 203 – 261 ksi | 250 °C / 482 °F |
| Chrome-silicon steel (ASTM A401) | 206 GPa / 29 900 ksi | 80 GPa / 11 600 ksi | 1400 – 2000 MPa / 203 – 290 ksi | 250 °C / 482 °F |
| Piano wire (ASTM A228) | 207 GPa / 30 000 ksi | 83 GPa / 12 040 ksi | 1600 – 2800 MPa / 232 – 406 ksi | 120 °C / 248 °F |
| Elastomer (natural rubber, hardness 60 ShA) | 2 – 10 MPa / 0.29 – 1.45 ksi | 0.7 – 3 MPa / 0.10 – 0.43 ksi | 15 – 25 MPa / 2.2 – 3.6 ksi | 70 °C / 158 °F |

## Load capacity
Load capacity expresses the maximum allowable torque without exceeding the design stress or causing permanent deformation. For a solid steel torsion bar with τ_adm = 300 MPa / 43.5 ksi, the indicative values are:

| Diameter (D) | Maximum torque (T_max) |
| --- | --- |
| 10 mm / 0.394 in | 58.9 N·m / 521 lbf·in |
| 15 mm / 0.591 in | 198.2 N·m / 1754 lbf·in |
| 20 mm / 0.787 in | 471.2 N·m / 4170 lbf·in |
| 25 mm / 0.984 in | 920.4 N·m / 8145 lbf·in |
| 30 mm / 1.181 in | 1588 N·m / 14 060 lbf·in |
| 35 mm / 1.378 in | 2520 N·m / 22 300 lbf·in |

For helical springs, the capacity is defined by the torque at maximum deflection (according to working angle). A spring with d = 2 mm / 0.079 in, D = 12 mm / 0.472 in, N = 6 coils and E = 206 GPa, deflected by 90° (1.57 rad), develops a torque of approximately 17.2 N·m / 152 lbf·in, with a corrected bending stress of 1100 MPa.

## Selection criteria
To choose a suitable torsion spring, the following criteria must be evaluated:

- **Working torque (M)** and **deflection angle (θ)**: determine the required torsional stiffness (κ = M / θ).
- **Spring type**: torsion bar for large torques with limited radial space; helical spring for moderate torques with limited angular movement; spiral for multiple revolutions.
- **Material**: carbon steel for general use, stainless steel if there is risk of corrosion, piano wire for high strengths.
- **Allowable stress**: apply safety factor ≥ 1.5 over the elastic limit, and correct for curvature (Wahl) in helical springs.
- **Mounting and space constraints**: consider housing diameter, guide shafts or bushings, and attachment legs.
- **Service life**: for fatigue (> 10⁵ cycles) limit stress to 60% of the tensile strength.

## Assembly considerations
Mounting torsion springs requires specific precautions:

| Aspect | Recommendation |
| --- | --- |
| Winding direction | Select right or left depending on the direction of rotation of the application; reverse if the load is reversed. |
| Clearance with mandrel or shaft | For helical springs, the mandrel diameter should be ≤ 0.9 × spring inner diameter at rest, because when deflected the inner diameter decreases. |
| Lubrication | Apply lithium grease or MoS₂ to the coils for springs working at high frequency or to reduce friction between coils and guides. |
| End fixation | The legs must rest on flat surfaces or bushings with sliding tolerance; avoid stress concentration points using fillet radii. |
| Mounting on torsion bars | Splines or keyways at both ends to transmit torque without slipping; provide sliding fit with lubricated spline. |
| Corrosion protection | Zinc plating, phosphating, or epoxy paint protection in humid environments; in helical springs avoid galvanic contact with the shaft. |

## Selection tables by application
The following tables guide the selection of a torsion spring for common applications, considering EN 10270-1 spring steel and mounting on a shaft. Torques are calculated for a 90° deflection.

| Application | d (mm / in) | Outer diameter (mm / in) | No. of coils | Torque at 90° (N·m / lbf·in) | Free angle (°) |
| --- | --- | --- | --- | --- | --- |
| Clothespin | 1.0 / 0.039 | 8 / 0.315 | 4 | 0.8 / 7.1 | 180 |
| Small door hinge | 1.5 / 0.059 | 12 / 0.472 | 6 | 2.5 / 22.1 | 120 |
| Mousetrap | 1.8 / 0.071 | 15 / 0.591 | 5 | 4.2 / 37.2 | 180 |
| Electric access door | 2.5 / 0.098 | 20 / 0.787 | 8 | 12.5 / 110.6 | 90 |
| Timing chain tensioner | 3.0 / 0.118 | 25 / 0.984 | 10 | 22.4 / 198.3 | 120 |
| Sectional door counterweight | 5.0 / 0.197 | 40 / 1.575 | 15 | 110.0 / 973.6 | 270 |

For steel torsion bars with τ_adm = 400 MPa / 58 000 psi:

| Application | D (mm / in) | Active length (mm / in) | Maximum torque (N·m / lbf·in) | Maximum angular deflection (°) |
| --- | --- | --- | --- | --- |
| Stabilizer bar (light automobile) | 18 / 0.709 | 900 / 35.43 | 350 / 3098 | 5.2 |
| Light truck suspension | 25 / 0.984 | 1000 / 39.37 | 920 / 8145 | 6.4 |
| Landing gear (light aircraft) | 30 / 1.181 | 800 / 31.50 | 1600 / 14 160 | 7.3 |

## Frequently asked questions (FAQ)
**What is the difference between a torsion bar and a helical torsion spring?**  
The torsion bar is a solid or hollow element that works in pure shear; a helical spring, although twisted, works essentially in bending of the wire. The torsion bar supports high torques with small angles (typically 5–10°), while the helical allows deflections of up to 360° with moderate torques.

**How is the minimum diameter of a torsion bar to transmit 200 N·m with τ_adm = 250 MPa calculated?**  
Applying D_min = 1,72·(T_max / τ_max)^(1/3). For T = 200 N·m and τ = 250 MPa (250×10⁶ Pa) we obtain D_min ≈ 1,72·(200 / 250×10⁶)^(1/3) = 1,72·(8×10⁻⁷)^(1/3) = 1,72·0,00928 m = 0,0160 m, i.e., 16 mm / 0.630 in.

**What torsion angle does a solid steel shaft (G = 80 GPa) with D = 20 mm, L = 500 mm and a torque of 50 N·m reach?**  
Using α_deg ≈ 584·L·T / (G·D⁴) = 584·0.5·50 / (80×10⁹·(0.02)⁴) = 14600 / (80×10⁹·1.6×10⁻⁷) = 14600 / 12800 = 1.14°. In radians, 0.0199 rad.

**How much energy does a torsion bar with stiffness κ = 5000 N·m/rad store when deflected by 15°?**  
First convert 15° to rad: 15 · π/180 = 0.262 rad. Energy U = ½ κ θ² = ½ · 5000 · (0.262)² ≈ 171.6 J / 126.6 ft·lbf.

**What spring constant does a helical spring with d = 2.5 mm, D = 15 mm, N = 8 and E = 206 GPa have?**  
κ = E·d⁴ / (64·D·N) = 206×10³ · (2.5⁴) / (64·15·8) ≈ 206×10³·39.06 / (7680) = 8.04×10⁶ / 7680 ≈ 1047 N·mm/rad = 1.047 N·m/rad. Equivalent to 0.0183 N·m/°.

**What is the working torque of a clothespin spring with d = 1 mm, D = 8 mm, N = 4, deflected by 180°?**  
Stiffness κ = 206×10³·1⁴ / (64·8·4) = 206×10³ / 2048 ≈ 100.6 N·mm/rad = 0.1006 N·m/rad. Angle 180° = π rad ≈ 3.14 rad. Torque M = κ·θ = 0.1006·3.14 ≈ 0.316 N·m / 2.80 lbf·in, consistent with the table.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/torsion-shafts-d_947.html
- **mcmaster.com**: https://www.mcmaster.com/products/torsion-springs/
