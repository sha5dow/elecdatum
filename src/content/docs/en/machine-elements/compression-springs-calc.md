---
title: "Compression springs calculation"
sidebar:
  label: "Compression springs calculation"
description: "Technical reference: Compression springs calculation"
keywords: ["compression spring calculation stiffness wire", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "compression-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General description  
The design of compression springs covers stiffness constants from 0.1 N/mm (0.57 lb/in) in light mechanisms up to 49 050 N/m (280 lb/in) in vehicle suspensions. These elastic elements store mechanical energy when axially compressed and release it when they recover their original shape. Their applications include automotive suspension, engine valves, return systems in mechanisms, and precision devices.

## Operating principle  
Hooke's law states that the compression force is proportional to deformation, with a stiffness constant *k* that in the example of a 2000 kg car suspension reaches 49 050 N/m (280 lb/in). When a helical spring is compressed, each coil is elastically twisted, generating a shear stress that is distributed along the wire. The force‑deformation relationship is linear as long as the material's elastic limit is not exceeded; beyond this point permanent deformations appear and Hooke's law is no longer valid.

## Calculation formulas  
The stiffness *k* of a helical compression spring is expressed in N/m and is proportional to the shear modulus *G* of the material, which for carbon steel is 79.3 GPa (11.5×10⁶ psi). The essential design equations are:

| Equation | Nomenclature |
|---|---|
| *F* = *k*·*x* | *F*: force (N), *x*: compression (mm or m), *k*: stiffness constant |
| *k* = (*G*·*d*⁴)/(8·*D*³·*n*) | *G*: shear modulus (N/mm²), *d*: wire diameter (mm), *D*: mean coil diameter (mm), *n*: number of active coils |
| *τ* = *K*_w · (8·*F*·*D*)/(π·*d*³) | *τ*: maximum shear stress (N/mm²), *K*_w: Wahl factor (curvature and direct shear correction) |

**Practical example:**  

For the 2000 kg vehicle (500 kg per wheel) mentioned above, the static force on each spring is *F* = 500 kg × 9.81 m/s² = 4905 N (1103 lbf). If the maximum allowable compression is 0.1 m (3.94 in), the required constant is:

*k* = 4905 N / 0.1 m = 49 050 N/m (≈ 280 lb/in)

It is recommended to oversize this value by a factor of two to absorb dynamic loads.

**Typical stiffness ranges by application:**

| Application | Stiffness constant *k* (N/mm) | Stiffness constant *k* (lb/in) |
|---|---|---|
| Ballpoint pen | 0.05 – 0.5 N/mm | 0.29 – 2.85 lb/in |
| Membrane keyboard | 0.5 – 2 N/mm | 2.85 – 11.4 lb/in |
| Engine valve | 5 – 30 N/mm | 28.5 – 171 lb/in |
| Light automotive suspension | 20 – 60 N/mm | 114 – 342 lb/in |
| Heavy machinery damper | 60 – 200 N/mm | 342 – 1140 lb/in |

## Geometric parameters  
Standardized wire diameters for compression springs range from 0.1 mm (0.004 in) to 10 mm (0.394 in) according to the preferred number series. The following table summarizes the most common dimensional parameters in the design of cylindrical helical springs:

| Wire diameter *d* mm / in | Typical outer diameter *D*ₑ mm / in | Free length *L*₀ mm / in |
|---|---|---|
| 0.1 mm / 0.004 in | 0.8 – 1.2 mm / 0.031 – 0.047 in | 5 – 20 mm / 0.20 – 0.79 in |
| 0.3 mm / 0.012 in | 2.0 – 3.5 mm / 0.079 – 0.138 in | 10 – 40 mm / 0.39 – 1.57 in |
| 0.5 mm / 0.020 in | 3.0 – 5.0 mm / 0.118 – 0.197 in | 15 – 60 mm / 0.59 – 2.36 in |
| 1.0 mm / 0.039 in | 6.0 – 10 mm / 0.236 – 0.394 in | 20 – 100 mm / 0.79 – 3.94 in |
| 2.0 mm / 0.079 in | 12 – 20 mm / 0.472 – 0.787 in | 40 – 200 mm / 1.57 – 7.87 in |
| 5.0 mm / 0.197 in | 30 – 50 mm / 1.18 – 1.97 in | 80 – 300 mm / 3.15 – 11.8 in |
| 10.0 mm / 0.394 in | 60 – 100 mm / 2.36 – 3.94 in | 150 – 500 mm / 5.91 – 19.7 in |

The spring index (*C* = *D*/*d*) is usually kept between 4 and 12 to facilitate manufacturing and avoid excessive curvature stresses.

## Materials and properties  
Spring steels have a transverse elastic modulus *G* of approximately 79.3 GPa (11.5×10⁶ psi), offering high fatigue strength. The following table summarizes the most commonly used materials and their relevant properties:

| Material | Shear modulus *G* GPa / Mpsi | Allowable shear stress (static) MPa / ksi |
|---|---|---|
| Carbon spring steel (AISI 1080) | 79.3 GPa / 11.5 Mpsi | 550 – 700 MPa / 80 – 102 ksi |
| Stainless steel AISI 302/304 | 70 GPa / 10.2 Mpsi | 400 – 600 MPa / 58 – 87 ksi |
| Piano wire (ASTM A228) | 81 GPa / 11.8 Mpsi | 620 – 860 MPa / 90 – 125 ksi |
| Chromium-silicon alloy (AISI 9254) | 79 GPa / 11.5 Mpsi | 700 – 900 MPa / 102 – 131 ksi |

The dynamic allowable stress is typically reduced by 30–40 % to ensure a fatigue life greater than 10⁶ cycles.

## Selection table by application  
This table guides the selection of compression springs for static loads up to 5000 N (1124 lbf), covering from ballpoint pens to industrial presses. The values are indicative and must be verified with stress and deformation calculations.

| Application | Wire diameter *d* mm / in | Stiffness constant *k* N/mm / lb/in | Maximum load *F*ₘₐₓ N / lbf |
|---|---|---|---|
| Writing tools | 0.2 – 0.4 mm / 0.008 – 0.016 in | 0.1 – 0.5 N/mm / 0.57 – 2.85 lb/in | 2 – 10 N / 0.45 – 2.25 lbf |
| Microswitches | 0.3 – 0.5 mm / 0.012 – 0.020 in | 0.5 – 2 N/mm / 2.85 – 11.4 lb/in | 5 – 20 N / 1.12 – 4.5 lbf |
| Engine valves | 2.0 – 4.0 mm / 0.079 – 0.157 in | 10 – 40 N/mm / 57 – 228 lb/in | 200 – 800 N / 45 – 180 lbf |
| Automotive suspension (passenger car) | 10 – 14 mm / 0.394 – 0.551 in | 20 – 60 N/mm / 114 – 342 lb/in | 2000 – 5000 N / 450 – 1124 lbf |
| Presses and tooling | 8 – 16 mm / 0.315 – 0.630 in | 60 – 200 N/mm / 342 – 1140 lb/in | 5000 – 15000 N / 1124 – 3372 lbf |

## Mounting considerations  
A compression spring with a slenderness ratio *L*₀/*D* > 4.0 requires guidance to avoid lateral buckling. The coil end types influence the force behavior: closed and ground ends provide stable support and reduce eccentricity. Typical mounting is between two flat surfaces, with a housing that limits radial displacement. In cyclic applications a minimum preload must be applied to eliminate clearances and vibrations; an initial compression of at least 10 % of the maximum stroke is recommended.

## Frequently asked questions (FAQ)

**What is the stiffness constant *k* and how is it calculated?**  
The constant *k* is calculated as *k* = *F*/*x*; for a helical spring it is determined by *k* = (*G*·*d*⁴)/(8·*D*³·*n*), where *d* and *D* in mm, and *G* ≈ 79.3 GPa (11.5 Mpsi). In the 2000 kg suspension example, each spring has *k* = 49 050 N/m (280 lb/in).

**What is the maximum load a compression spring can withstand?**  
The maximum load corresponds to the allowable shear stress of the material, which for an AISI 302 stainless steel is 500 MPa (72.5 ksi). It must be verified that *τ*ₘₐₓ = *K*_w·(8·*F*·*D*)/(π·*d*³) does not exceed that value.

**What happens if the maximum deformation is exceeded?**  
The spring enters the plastic regime with permanent deformation; for a carbon steel, the yield strength is around 1200 MPa (174 ksi) in tension, but the shear yield stress is typically about 60 % of that value.

**How is buckling during compression avoided?**  
It is recommended to use guides or housings when the slenderness exceeds 4:1. A spring with *L*₀ = 200 mm (7.87 in) and *D*ₑ = 40 mm (1.57 in) has a slenderness of 5 and requires guidance.

**What influence does the number of active coils have?**  
The stiffness *k* is inversely proportional to *n*: reducing *n* from 10 to 5 doubles the constant. A spring with 5 active coils can reach *k* = 100 N/mm (570 lb/in) where one with 10 coils would give 50 N/mm (285 lb/in).

**Why is a Wahl factor applied in the stress calculation?**  
The Wahl factor *K*_w corrects for direct shear and stress concentration due to curvature. For an index *C* = 6, *K*_w ≈ 1.25, which increases the nominal stress calculated with *F* and *D* by 25 %.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hookes-law-force-spring-constant-d_1853.html
