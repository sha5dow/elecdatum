---
title: "FDM parameters materials tolerances"
sidebar:
  label: "FDM parameters materials tolerances"
description: "Technical reference: FDM parameters materials tolerances"
keywords: ["FDM 3D printing parameters tolerances layer height", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "fdm"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Process Description

Fused filament fabrication (FFF), commercially referred to as fused deposition modeling (FDM), is an additive manufacturing process that builds parts layer by layer by extruding a continuous thermoplastic filament. The thread-like material is pulled by a roller mechanism into a heated extrusion head; there it melts and is deposited through a nozzle onto a movable build platform. Each horizontal layer reproduces a section of the CAD model. Once completed, the platform lowers (or the head rises) by the distance corresponding to the layer thickness and the next sheet of material is applied. When the design includes overhangs or complex geometries, a support structure is extruded and mechanically removed during post-processing. If a superior surface finish is required, additional operations such as sanding, polishing, or chemical vapor smoothing may be performed.

## Process Parameters

FDM printing parameters vary depending on the thermoplastic material used. The table below shows the most common operating ranges for filaments typically used in desktop equipment.

| Material | Extrusion Temperature | Bed Temperature | Typical Layer Height | Print Speed | Standard Nozzle Diameter |
|---|---|---|---|---|---|
| PLA (polylactic acid) | 190 – 220 °C / 374 – 428 °F | 20 – 60 °C / 68 – 140 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| ABS (acrylonitrile butadiene styrene) | 220 – 250 °C / 428 – 482 °F | 80 – 110 °C / 176 – 230 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| PETG (polyethylene terephthalate glycol) | 220 – 250 °C / 428 – 482 °F | 70 – 90 °C / 158 – 194 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| PET (polyethylene terephthalate) | 230 – 260 °C / 446 – 500 °F | 70 – 90 °C / 158 – 194 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 30 – 50 mm/s / 1,18 – 1,97 in/s | 0,4 mm / 0.016 in |
| TPU (thermoplastic polyurethane) | 210 – 230 °C / 410 – 446 °F | 20 – 60 °C / 68 – 140 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 20 – 30 mm/s / 0,79 – 1,18 in/s | 0,4 mm / 0.016 in |
| Nylon (polyamide) | 240 – 260 °C / 464 – 500 °F | 70 – 100 °C / 158 – 212 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 30 – 50 mm/s / 1,18 – 1,97 in/s | 0,4 mm / 0.016 in |
| ASA (acrylic styrene acrylonitrile) | 230 – 250 °C / 446 – 482 °F | 90 – 110 °C / 194 – 230 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| HIPS (high impact polystyrene) | 220 – 250 °C / 428 – 482 °F | 90 – 110 °C / 194 – 230 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |

## Typical Dimensional Tolerances

Geometric accuracy in FDM is fundamentally limited by the positioning mechanics, nozzle diameter, layer height, and thermal shrinkage of the material. In well-calibrated desktop equipment, the following indicative values are achieved.

| Dimensional Parameter | Typical Tolerance |
|---|---|
| Linear dimension in XY plane (parts < 100 mm) | ± 0,2 mm / 0.008 in |
| Linear dimension in XY plane (parts > 100 mm) | ± 0,5 % of nominal dimension |
| Dimension in height (Z axis) | ± 0,1 mm / 0.004 in or +-1 layer height |
| Horizontal hole diameter | ± 0,15 mm / 0.006 in |
| Flatness (per 100 mm length) | 0,3 mm / 0.012 in |
| Roundness (vertical holes) | 0,10 mm / 0.004 in |

Values improve with the use of finer nozzles (0,2 – 0,3 mm / 0.008 – 0.012 in), reduced speeds, and chamber heating systems that minimize distortion.

## Applicable Materials

The FDM process supports a wide range of engineering and general-purpose thermoplastics. The most common in desktop and industrial printing are:

- **PLA**: polylactic acid, biodegradable, easy to print, low shrinkage.
- **ABS**: impact and temperature resistant, requires heated bed and good ventilation.
- **PETG**: combines ease of printing with good chemical and mechanical resistance.
- **PET**: similar to PETG but with higher stiffness and slightly higher extrusion temperature.
- **TPU**: thermoplastic elastomer, flexible and abrasion resistant.
- **Nylon (polyamide)**: high toughness and wear resistance, hygroscopic, requires pre-drying.
- **ASA**: equivalent to ABS but with excellent weather and UV resistance.
- **HIPS**: used both as a support material soluble in limonene and as a lightweight final part.

Polycarbonate (PC), polypropylene (PP), and composite materials with carbon fiber or glass filler are also processed, provided the equipment has the appropriate extrusion components.

## Advantages

- **Commercial availability**: large supply of printers and filaments, from educational equipment to industrial systems.
- **Wide range of polymeric materials**: from rigid thermoplastics to flexible and composite materials.
- **High material utilization**: waste is practically limited to support material and purges, with rates above 95 %.
- **Low acquisition cost**: desktop machines are affordable and the price per kilogram of filament is low.

## Limitations

- **Limited surface resolution**: nozzle diameter and layer height create visible steps; detailed parts require post-processing.
- **Thin walls and fine geometries**: residual stresses and lack of strength in reduced profiles can cause failures or deformations.
- **Need for support structures**: overhangs, bridges, and internal cavities require supports that must later be removed mechanically or chemically.
- **Mechanical anisotropy**: strength in the Z axis is lower than in the XY planes, due to interlayer bonding.

## Selection Guide

FDM is the most suitable option when seeking:

- Rapid functional prototyping that does not require very high dimensional precision.
- Large parts (over 200 mm / 7.9 in) that can be manufactured at low cost.
- Single units or very short series, where amortizing tooling from other processes is not feasible.
- Applications where leveraging the variety of available thermoplastic materials is needed.

It is not recommended for:

- Components requiring tolerances below ± 0,1 mm / 0.004 in.
- Details less than 0,8 mm / 0.031 in thickness or geometries with micro-cavities.
- Mass production where the cycle speed of other methods (injection molding) greatly exceeds 3D printing.

## Frequently Asked Questions

**What is the minimum layer height achievable in FDM?**  
The practical minimum layer height is 0.05 mm / 0.002 in, although most desktop printers work at 0.1 mm / 0.004 in without compromising extrusion reliability.

**What dimensional tolerance is realistic on desktop FDM printers?**  
In the XY axes, an accuracy of ±0.2 mm / 0.008 in is obtained for parts up to 100 mm per side, while in the Z axis the tolerance is ±0.1 mm / 0.004 in, approximately equivalent to one layer height.

**How much material is wasted during an FDM print?**  
Material utilization exceeds 95 %, with waste below 5 % and mainly concentrated in support structures and purges at the start of each job.

**What bed temperature is needed to avoid warping with ABS?**  
ABS requires a heated bed between 80 and 110 °C / 176 – 230 °F; below 80 °C / 176 °F it is very likely that the part will detach and deform.

**What is the maximum recommended print speed for TPU?**  
Flexible filaments are printed at low speed, typically between 20 and 30 mm/s / 0.79 – 1.18 in/s; higher speeds can cause jams in the extruder.

**What nozzle diameter is used as standard in FDM?**  
The most common nozzle diameter is 0.4 mm / 0.016 in, which offers a balance between build speed and surface detail. Nozzles of 0.2 mm / 0.008 in are also used for high-definition parts and up to 1.0 mm / 0.039 in for fast large-format prints.

## References

- **efunda.com**: https://www.efunda.com/designstandards/gdt/3d_hole.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/fused-deposition-modeling-fdm

## Sources Consulted

- **efunda.com**: https://www.efunda.com/designstandards/gdt/3d_hole.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/fused-deposition-modeling-fdm
