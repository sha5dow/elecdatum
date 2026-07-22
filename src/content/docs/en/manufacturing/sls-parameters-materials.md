---
title: "SLS parameters and materials"
sidebar:
  label: "SLS parameters and materials"
description: "Technical reference: SLS parameters and materials"
keywords: ["SLS selective laser sintering nylon parameters", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "sls"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Process description
Selective laser sintering (SLS) is an additive manufacturing method that uses a pulsed laser, usually CO₂, to selectively fuse thermoplastic powder particles layer by layer. The process was developed in the late 1980s and patented in 1989 by Carl Deckard. The powder is spread in a uniform layer over a build platform by a leveling roller; then the laser traces the cross-section of the part, sintering the particles. The platform then descends by one layer thickness — typically less than 0,1 mm — and the cycle repeats until the part is completed. The entire powder bed is maintained at a temperature slightly below the melting point of the material, which facilitates partial fusion by the laser and avoids thermal stresses. The unsintered powder acts as a natural support, eliminating the need for auxiliary structures and allowing nesting of multiple parts in the same chamber.

## Typical operating parameters
The following table lists the most common process parameter ranges in industrial SLS systems for plastics. Exact values depend on the material and equipment.

| Parameter | Typical value |
| --- | --- |
| Laser type | CO₂ (10,6 µm) |
| Laser power | 30 – 100 W (electronically regulated) |
| Layer thickness | 0,08 – 0,15 mm / 0,003 – 0,006 in |
| Powder bed temperature | 140 – 175 °C / 284 – 347 °F (depending on material) |
| Scanning speed | Up to 10 m/s / 32,8 ft/s |
| Focused beam diameter | 0,3 – 0,5 mm / 0,012 – 0,020 in |
| Working atmosphere | Nitrogen (O₂ < 1 %) |
| Powder reuse | 50 – 80 % of unsintered powder, after sieving |

## Dimensional tolerances
The dimensional accuracy of SLS is limited by the resolution of the laser positioning system, thermal contraction during cooling, and possible unwanted fusion of adjacent powder (grain growth). Under controlled conditions, the following typical values can be achieved:

- Linear tolerance: ±0,3 % (with a minimum of ±0,3 mm / ±0,012 in)
- Z-axis accuracy: slightly lower than the XY plane due to the lack of milling between layers
- Surface roughness (Ra): 10 – 15 µm / 394 – 591 µin (powdery finish without sealing)

## Compatible materials
SLS supports a wide variety of thermoplastic powders and, in special machines, also metals and ceramics. The most common materials for functional applications and prototyping are polyamides, thermoplastic elastomers, and their composites.

| Material | Main characteristics | Typical applications |
| --- | --- | --- |
| Polyamide 12 (PA12) | Good mechanical strength, toughness, chemical and abrasion resistance | Functional prototypes, housings, brackets, clips, living hinges |
| Polyamide 11 (PA11) | Higher ductility and impact resistance than PA12, lower water absorption | Automotive components, flexible tubing, medical applications |
| Glass-filled polyamide (PA12-GF) | Higher stiffness and thermal stability; lower shrinkage | Tooling, low-volume injection molds, structural supports |
| TPU (thermoplastic polyurethane) | High flexibility, elasticity, and abrasion resistance | Seals, bellows, impact protectors, sports footwear, ergonomic parts |
| Polypropylene (PP) | Low density, good chemical and fatigue resistance | Automotive batteries, packaging, integral living hinges |
| Metal powder (DMLS) | Specialized processes for steel, aluminum, titanium; requires higher power laser | Tooling, end-use parts in aerospace and medical sectors |

## Mechanical properties by material
The following values correspond to parts sintered under standard conditions, without post-processing, unless indicated. Properties such as elongation and strength can be improved with surface sealing or subsequent heat treatments.

| Property | PA12 | PA11 | PA12-GF (30% glass) | TPU (Shore A 85) |
| --- | --- | --- | --- | --- |
| Density (g/cm³) | 1,01 | 1,04 | 1,27 | 1,20 |
| Tensile strength (MPa / ksi) | 45 – 48 / 6,5 – 7,0 | 49 – 51 / 7,1 – 7,4 | 48 – 55 / 7,0 – 8,0 | 7 – 10 / 1,0 – 1,5 |
| Modulus of elasticity (GPa / kpsi) | 1,7 – 2,0 / 247 – 290 | 1,8 – 2,1 / 261 – 305 | 3,5 – 4,5 / 508 – 653 | 0,02 – 0,04 / 2,9 – 5,8 |
| Elongation at break (%) | 15 – 25 | 20 – 30 | 4 – 8 | 300 – 500 |
| Heat deflection temperature (HDT, °C / °F) at 0,45 MPa | 95 – 100 / 203 – 212 | 90 – 95 / 194 – 203 | 130 – 145 / 266 – 293 | 60 – 70 / 140 – 158 |
| Water absorption in 24 h (%) | 0,5 – 0,6 | 0,3 – 0,4 | 0,4 – 0,5 | < 0,1 |

## Advantages and limitations
**Main advantages**
- Wide range of thermoplastic materials that approximate the behavior of engineering plastics such as nylon or polypropylene, allowing living hinges and functional parts.
- No support structures required: unsintered powder holds the part during construction, facilitating complex geometries with overhangs and nesting of multiple components in a single batch.
- Higher mechanical strength than SLA parts; properties can be comparable to the same material processed by injection molding.
- Unsintered powder is reusable in a high percentage, reducing waste.
- Immediate post-processing mainly consists of removing excess powder with a brush or compressed air, without need for additional curing.

**Limitations**
- Porous and powdery surface that requires sealing for aesthetic or airtight applications. Sealing, however, strengthens the part.
- Z-axis accuracy may be lower than the XY plane due to the absence of milling between layers and thermal process variability.
- Surface finish is rough (Ra 10‑15 µm) compared to SLA, making it less suitable for appearance models where high detail definition is required.
- Excess fused material may appear on the surface if the powder bed temperature is uncontrolled, hindering repeatability.
- Fully enclosed and hollow parts require drainage outlets for unsintered powder; otherwise it remains inside and adds weight.

## Selection guide
The decision to use SLS versus other additive technologies should be based on functional requirements, acceptable surface finish, and budget.

- **SLS is preferable when** mechanical strength similar to an engineering thermoplastic is needed, ability to produce living hinges, support-free parts, or short runs of functional components.
- **SLA may be better if** the priority is a smooth surface finish and high level of detail, and if the brittleness of photocurable resins is acceptable.
- **FDM is a more economical alternative** if required strength is lower and a stepped finish is tolerable, especially for simple form and fit prototypes.
- **DMLS (or SLM) is the option when** a dense metal part with mechanical properties equivalent to forging is needed, albeit at a much higher cost and with chamber size limitations.

## Common applications
- Functional prototyping of mechanical assemblies, clips, fasteners, and electronic housings.
- Short production runs without tooling investment (batches of up to hundreds of parts).
- Manufacturing of tooling, jigs, and low-volume injection molds.
- Elastic elements (seals, bellows, protectors) in TPU.
- Automotive components: ventilation ducts, internal brackets, and housings.
- Medical applications: anatomical models for surgical planning, orthoses, and custom prostheses.

## Frequently asked questions

**What dimensional tolerance can be achieved with SLS?**
The typical dimensional tolerance in SLS is ±0,3 % with a minimum of ±0,3 mm / ±0,012 in, although it can vary between ±0,25 and ±0,3 mm for small, well-calibrated parts.

**What is the preheating temperature of the powder bed for PA12?**
The PA12 powder bed is preheated to 170 °C / 338 °F, maintained between 168 and 172 °C to ensure sintering without complete melting.

**How long does a typical SLS batch print take?**
The average print time for a 300 x 300 x 300 mm / 11,8 x 11,8 x 11,8 in chamber is 4 to 12 hours, depending on fill volume and total part height.

**What is the laser scanning speed in SLS?**
The typical scanning speed of the CO₂ laser reaches up to 10 m/s / 32,8 ft/s, allowing fast tracing of the cross-section.

**What percentage of unsintered powder can be reused?**
Between 50% and 80% of unsintered powder can be reused after sieving and mixing with virgin material, provided it has not undergone significant thermal degradation.

**What tensile strength does sintered PA12 nylon offer?**
Sintered PA12 parts achieve a tensile strength of 45 to 48 MPa / 6,5 to 7,0 ksi, comparable to injection-molded nylon.

**What is the laser beam diameter in a standard SLS machine?**
The focused beam diameter at the sintering plane is typically 0,3 to 0,5 mm / 0,012 to 0,020 in, which defines the minimum trace width.

## Sources Consulted

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sls.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/selective-laser-sintering-sls
