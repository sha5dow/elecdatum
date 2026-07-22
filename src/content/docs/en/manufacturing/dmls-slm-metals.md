---
title: "DMLS SLM metal 3D printing"
sidebar:
  label: "DMLS SLM metal 3D printing"
description: "Technical reference: DMLS SLM metal 3D printing"
keywords: ["DMLS SLM metal 3D printing tolerances titanium", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "dmls"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## General overview
Direct Metal Laser Sintering (DMLS) and Selective Laser Melting (SLM) are powder bed fusion additive manufacturing technologies that use a high-power laser to melt and fuse metal powder layer by layer, creating fully dense metal components. The process is standardized by ASTM as powder bed fusion (PBF). Although commercially presented as distinct processes —DMLS often involves partial sintering and SLM full melting— both terms are used interchangeably today to refer to total material fusion. The typical build volume reaches dimensions of up to 500 mm / 19,69 in on each axis, with large-format machines exceeding 1 m / 39,37 in.

## Manufacturing process
1. A 3D CAD model is generated and sliced into layers between 20 µm / 0,0008 in and 100 µm / 0,0039 in, typically 30–60 µm / 0,0012–0,0024 in.
2. The build chamber is inertized with argon or nitrogen until oxygen levels below 1000 ppm are reached.
3. A uniform layer of atomized metal powder, with typical particle size 15–45 µm / 0,0006–0,0018 in, is spread over the build platform using a blade or recoater roller.
4. An ytterbium fiber laser, with power from 100 W / 0,13 hp to 1000 W / 1,34 hp, selectively scans the cross-section of the layer, melting the metal particles.
5. The platform lowers by one layer thickness and the cycle repeats until the part is complete.
6. The part is removed and subjected to post-processing: support removal, heat treatment for stress relief, and if required, machining or surface polishing.

## Process parameters
Process parameters vary according to the alloy and equipment. Below are typical values for 400 W / 0,54 hp industrial machines.

| Material | Typical layer | Laser power | Scan speed | Hatch distance | Relative density |
| --- | --- | --- | --- | --- | --- |
| Titanium Ti6Al4V | 30 µm / 0,0012 in | 200–400 W / 0,27–0,54 hp | 800–1500 mm/s / 31,5–59,1 in/s | 100–120 µm / 0,0039–0,0047 in | > 99,5 % |
| Stainless steel 316L | 40 µm / 0,0016 in | 200–350 W / 0,27–0,47 hp | 700–1200 mm/s / 27,6–47,2 in/s | 90–110 µm / 0,0035–0,0043 in | > 99,5 % |
| Aluminum AlSi10Mg | 30–50 µm / 0,0012–0,0020 in | 250–400 W / 0,34–0,54 hp | 1000–2000 mm/s / 39,4–78,7 in/s | 130–180 µm / 0,0051–0,0071 in | > 99 % |
| Inconel 718 | 40–60 µm / 0,0016–0,0024 in | 250–400 W / 0,34–0,54 hp | 600–1100 mm/s / 23,6–43,3 in/s | 90–110 µm / 0,0035–0,0043 in | > 99,5 % |
| Cobalt-chrome | 30–50 µm / 0,0012–0,0020 in | 200–350 W / 0,27–0,47 hp | 600–1000 mm/s / 23,6–39,4 in/s | 80–100 µm / 0,0031–0,0039 in | > 99,5 % |

The inert atmosphere is maintained with a continuous flow of argon at a slightly positive pressure; platform preheating, typically between 100 °C / 212 °F and 200 °C / 392 °F, reduces thermal stresses.

## Applicable Materials
Atomized spherical metal powders are processed:

- Steels: stainless 316L, 17-4PH, tool H13, maraging.
- Titanium: Ti6Al4V (grade 5 and grade 23), Ti CP.
- Aluminum: AlSi10Mg, AlSi7Mg, Scalmalloy.
- Nickel-base superalloys: Inconel 718, Inconel 625, Hastelloy X.
- Cobalt-chrome: for dental and medical applications.
- Copper and refractory alloys such as tungsten.

Sphericity and controlled particle size distribution (15–45 µm / 0,0006–0,0018 in) ensure high flowability and uniform packing density, critical factors for surface quality and final porosity.

## Typical Tolerances
Dimensional accuracy and roughness depend on the material, part orientation, and post-processing.

| Parameter | Typical value | Advanced post-processing |
| --- | --- | --- |
| Dimensional tolerance (X,Y axes) | ±0,1 mm / ±0,004 in per 25 mm / 1 in | ±0,05 mm / ±0,002 in |
| Dimensional tolerance (Z axis) | ±0,2 mm / ±0,008 in per 25 mm / 1 in | ±0,1 mm / ±0,004 in |
| Surface roughness (Ra) as-built | 10–20 µm / 394–787 µin | 1–3 µm / 39–118 µin with polishing |
| Minimum detail size | 0,3–0,5 mm / 0,012–0,020 in | – |
| Minimum wall thickness | 0,3–0,4 mm / 0,012–0,016 in | 0,2 mm / 0,008 in with optimized supports |

Thermal shrinkage and residual stresses can distort slender parts, requiring design with uniform thicknesses and adequate supports.

## Advantages and Limitations
**Advantages:**
- Geometric complexity at no cost penalty: enables internal channels, lattice structures, and geometries impossible by chip removal.
- Density greater than 99,5 % / 99,5 %, mechanical properties comparable to wrought after heat treatment.
- Wide range of materials, from aluminum to superalloys and titanium.
- Reduction of material waste compared to subtractive machining.
- Functional prototyping and short-run production without tooling.

**Limitations:**
- Rough surface finish, often requiring secondary operations.
- High machinery cost (from 250 000 USD / 250 000 USD) and raw powder material cost.
- Limitation in part size, with typical maximum volumes of 250 × 250 × 300 mm / 9,8 × 9,8 × 11,8 in, although larger format machines exist.
- Build speed slower than conventional methods, with rates of 5–20 cm³/h / 0,31–1,22 in³/h depending on power and material.
- Need for heat-conductive support structures, which must be mechanically removed.

## Selection Guide
Use DMLS/SLM when:

- The part requires complex internal geometries, such as conformal cooling channels or lightweight structures not machinable.
- Component consolidation is sought: reducing an assembly to a single part.
- Rapid iteration of functional prototypes in the production material is needed.
- The application demands titanium, Inconel, or other difficult-to-machine alloys.
- Production volume is low to medium (1–500 parts/year) and conventional tooling costs are not justified.

Consider alternative processes (CNC machining, forging, casting) if surface roughness Ra must be < 3 µm / 118 µin without post-processing or if volumes exceed thousands of parts per year.

## Frequently Asked Questions (FAQ)

### What is the typical dimensional accuracy of the DMLS/SLM process?
The standard dimensional tolerance is ±0,1 mm / ±0,004 in per 25 mm / 1 in on the X and Y axes, and ±0,2 mm / ±0,008 in on the Z axis for parts without subsequent machining.

### What layer thicknesses are used in metal powder bed manufacturing?
Layer thicknesses vary between 20 µm / 0,0008 in and 100 µm / 0,0039 in, although layers of 30–60 µm / 0,0012–0,0024 in are predominantly used in production.

### What surface roughness is obtained directly from the machine?
The arithmetic mean roughness (Ra) on as-built vertical surfaces ranges between 10 µm / 394 µin and 20 µm / 787 µin, and can be reduced to 1–3 µm / 39–118 µin by polishing.

### What density is achievable in Ti6Al4V titanium parts?
Relative density exceeds 99,5 % / 99,5 %, reaching values close to 99,9 % / 99,9 % with optimized parameters and subsequent heat treatment.

### What is the maximum part size that can be manufactured?
Common industrial machines offer build volumes of 250 × 250 × 300 mm / 9,8 × 9,8 × 11,8 in, while large-format systems exceed 500 × 500 × 500 mm / 19,7 × 19,7 × 19,7 in and even 800 × 400 × 500 mm / 31,5 × 15,7 × 19,7 in in some models.

### How much does an industrial DMLS/SLM printer cost approximately?
The price range for DMLS/SLM machines starts around 250 000 USD / 250 000 USD and can exceed 1 000 000 USD / 1 000 000 USD for high-productivity systems with multiple lasers.

## Sources Consulted

- **efunda.com**: https://www.efunda.com/designstandards/
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/direct-laser-metal-sintering-dmls
