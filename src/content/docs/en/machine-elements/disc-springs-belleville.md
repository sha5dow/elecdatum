---
title: "Disc springs Belleville washers"
sidebar:
  label: "Disc springs Belleville washers"
description: "Technical reference: Disc springs Belleville washers"
keywords: ["Belleville disc spring washer load deflection", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "disc-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General description
Belleville disc springs can support working loads from 27 N (6 lb) in the smallest diameters to over 38 kN (8650 lb) in high-strength versions, with a typical deflection range of 0,08 mm (0.003 in) to 1,0 mm (0.039 in) per disc. Patented in 1867 by Julien Belleville, they are conical washers of annular section that work under axial load, both static and dynamic. Their frustoconical geometry gives them a non-linear load‑deflection curve, allowing high forces in tight spaces and the possibility of combining them in stacks to multiply load or deflection. They are used to maintain tension, separate components on shafts, under screw heads, and in high-pressure valves. The most common configurations are parallel stacking (nest, to increase load), series stacking (alternating directions, to increase deflection), and a combination of both.

## Standard dimensions
The dimensions of commercial Belleville springs follow standardized series (e.g., DIN 2093). Below is a selection of common sizes in carbon steel, with dimensions in metric and imperial systems.

| For shaft (in) | Inner diameter (mm / in) | Outer diameter (mm / in) | Thickness (mm / in) | Free height (mm / in) | Height under load (mm / in) | Working deflection (mm / in) | Working load (N / lb) | Flat load (N / lb) |
|---|---|---|---|---|---|---|---|---|
| 3/32 | 2,36 / 0.093 | 4,75 / 0.187 | 0,18 / 0.007 | 0,33 / 0.013 | 0,25 / 0.010 | 0,08 / 0.003 | 27 / 6 | 44 / 10 |
| 1/8 | 3,18 / 0.125 | 6,35 / 0.250 | 0,23 / 0.009 | 0,43 / 0.017 | 0,33 / 0.013 | 0,10 / 0.004 | 49 / 11 | 76 / 17 |
| 1/4 | 6,48 / 0.255 | 12,7 / 0.500 | 0,46 / 0.018 | 0,86 / 0.034 | 0,66 / 0.026 | 0,20 / 0.008 | 200 / 45 | 311 / 70 |
| 5/16 | 8,05 / 0.317 | 15,88 / 0.625 | 0,56 / 0.022 | 1,07 / 0.042 | 0,81 / 0.032 | 0,25 / 0.010 | 311 / 70 | 467 / 105 |
| 3/8 | 9,65 / 0.380 | 19,05 / 0.750 | 0,64 / 0.025 | 1,27 / 0.050 | 0,97 / 0.038 | 0,30 / 0.012 | 512 / 115 | 756 / 170 |
| 1/2 | 12,83 / 0.505 | 25,4 / 1.000 | 0,91 / 0.036 | 1,63 / 0.064 | 1,27 / 0.050 | 0,36 / 0.014 | 712 / 160 | 1246 / 280 |
| 5/8 (heavy) | 16,00 / 0.630 | 38,1 / 1.500 | 2,77 / 0.109 | 4,17 / 0.164 | 3,18 / 0.125 | 0,99 / 0.039 | 38 500 / 8650 | 55 600 / 12 500 |

Stainless steel and Inconel 718 nickel alloy springs are available in the same dimensions; working loads are slightly lower (consult manufacturer tables).

## Load capacity
The maximum working load of a single Belleville disc varies from 6 lb (27 N) to 12 500 lb (55,6 kN) when reaching the flat position, although the recommended working load is usually 50‑70 % of that value to avoid over-flattening. The typical working deflection is between 15 % and 30 % of the free height. The load‑deflection curve is non-linear; the higher the h/t (height/thickness) ratio, the more regressive the characteristic becomes. Stacking allows modifying both the total load and deflection:

| Configuration | Resulting load | Resulting deflection | Numerical example (1/4" spring – 45 lb / 200 N) |
|---|---|---|---|
| Single (1 disc) | Nominal load C | Nominal deflection d | C = 200 N (45 lb), d = 0,20 mm (0.008 in) |
| Parallel – n discs in same direction (nest) | n × C | d (same) | 2 discs: load 400 N (90 lb); deflection 0,20 mm (0.008 in) |
| Series – m discs in alternating directions | C | m × d | 3 discs: load 200 N (45 lb); deflection 0,60 mm (0.024 in) |
| Combined – n packages in series, each with m discs in parallel | n × C | m × d | n=2, m=3 → load 2C=400 N (90 lb), deflection 3d=0,60 mm (0.024 in) |

The flat load (disc fully flattened) is approximately 1,5‑1,8 times the working load, depending on material and dimensions.

## Selection criteria
The permissible operating temperature ranges from −240 °C (−400 °F) for Inconel 718 to 1100 °F (593 °C) for the same alloy, while carbon steel is limited to about 120 °C (250 °F) and stainless steel reaches about 300 °C (570 °F) without significant loss of strength. To select a Belleville spring, the following should be considered:

1. **Required load and deflection**. Determine the desired working force and necessary travel; with those values, enter the standard dimensions table.
2. **Available space**. Verify inner (shaft) and outer (housing) diameters, as well as height in compressed state. The height under load must not exceed the package limit.
3. **Material based on environment**:
   - Carbon steel: dry environments, up to 120 °C (250 °F).
   - 18‑8 stainless steel: humid environments or with mild chemical splashes, up to 300 °C (570 °F).
   - Inconel 718 nickel alloy: prolonged exposure to extreme temperatures (−240 °C to 593 °C / −400 °F to 1100 °F), salt water, aggressive compounds.
4. **Fatigue and service life**. If the load is cyclic, choose conservative h/t ratios and heat-treated steels; life can exceed 10⁶ cycles with a maximum stress below 50 % of yield strength.
5. **Stacking configuration**. Select parallel, series, or combined to simultaneously meet the total force and deflection requirements.

## Mounting considerations
A load eccentricity greater than 0,1 mm (0.004 in) can reduce fatigue life by more than 50 %. To ensure reliable operation:

- **Concentric guide**: place the inner diameter on a shaft or the outer diameter in a cylinder. The recommended diametral clearance is:
  
| Nominal shaft diameter (mm / in) | Diametral clearance (mm / in) |
|---|---|
| ≤ 10 mm / 0.39 in | 0,10 – 0,15 / 0.004 – 0.006 |
| 10 – 25 mm / 0.39 – 0.98 in | 0,15 – 0,25 / 0.006 – 0.010 |
| > 25 mm / 0.98 in | 0,25 – 0,40 / 0.010 – 0.016 |

- **Orientation**: in parallel stacking (nest) all discs are placed in the same direction; in series, they alternate. Faces with support flats (if the disc has them) must face flat surfaces or each other.
- **Preload in bolted joints**: apply a controlled tightening torque and verify the resulting compressed height; a feeler gauge can confirm that all discs in a set work uniformly.
- **Protection**: in corrosive environments, choose the appropriate material and avoid direct contact between discs without lubrication, as friction modifies hysteresis and can cause premature wear.

## Selection tables by application

| Application | Main requirement | Recommended material | Size example | Typical configuration |
|---|---|---|---|---|
| Tension maintenance in fasteners | Long-term constant preload | Carbon steel | Shaft 1/4 in, load 200 N (45 lb) | Single disc or nest of 2 in parallel |
| Vibration damping (landing gear, machinery) | High hysteresis, fatigue | Stainless steel | Shaft 1/2 in, load 712 N (160 lb) | Series of 3‑4 discs |
| High-pressure valves (regulators, paintball) | High load in tight space | Heat-treated carbon steel / Inconel if >300 °C | Shaft 5/8 in heavy, load 38,5 kN (8650 lb) | Nest of 2‑3 in parallel |
| Thermal expansion compensation (wooden propellers, pipes) | Visual preload indication | Stainless steel (avoid moisture corrosion) | Shaft 3/8 in, load 512 N (115 lb) | Opposing pairs forming an “indicator spring” |
| Seismic dampers in buildings | Large accumulated deflections | High-strength steel | Large diameter discs (>100 mm OD) | Multiple stacks in series/parallel |
| Precision rifle triggers | Ultra-fast response, minimal space | Hardened carbon steel | Miniatures, shaft 3/32 in | Nest of 5‑8 discs for high load |

## Frequently asked questions (FAQ)

**1. What is the maximum load a Belleville spring can support?**  
The maximum flat load (fully flattened disc) in standard commercial sizes reaches 55,6 kN (12 500 lb), as in the heavy shaft 5/8 in disc from the table. By stacking in parallel, that value can be multiplied by the number of discs in the nest.

**2. Can they be stacked to increase deflection?**  
Yes. By placing three discs in series (alternating orientations), the total deflection is three times the individual deflection. For example, a 1/4 in disc that deflects 0,20 mm (0.008 in) will provide 0,60 mm (0.024 in) with three discs in series.

**3. What material to choose for corrosive environments?**  
18‑8 stainless steel resists humidity and mild chemicals up to 300 °C (570 °F); for extreme temperature and corrosion conditions (−240 °C to 593 °C / −400 °F to 1100 °F), Inconel 718 nickel alloy is used.

**4. How is deflection calculated in a mixed stacking arrangement?**  
In a stack with n packages in parallel (each with the same load C) and m packages in series, the total deflection is m × d (where d is the deflection of one disc under load C). For example, 2 discs in parallel each sharing the 200 N (45 lb) load from the previous example, and 3 of these packages in series, give a deflection of 3 × 0,20 mm = 0,60 mm (0.024 in).

**5. What is the fatigue life?**  
With maximum stresses below 50 % of the yield strength, heat-treated steel Belleville springs can exceed 10⁶ cycles. Asymmetric loading conditions or high eccentricities drastically reduce life, sometimes to less than 10⁵ cycles.

**6. Can they be used as safety washers in bolted joints?**  
No. Unlike Grower or toothed washers, Belleville springs do not have significant locking capacity; their function is to maintain a constant preload, but they do not prevent loosening due to vibration unless combined with other fastening elements.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cantilever-beams-d_1848.html
- **mcmaster.com**: https://www.mcmaster.com/products/belleville-disc-springs/
