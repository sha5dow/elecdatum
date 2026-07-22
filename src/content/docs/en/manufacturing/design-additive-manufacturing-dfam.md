---
title: "Design for additive manufacturing DfAM"
sidebar:
  label: "Design for additive manufacturing DfAM"
description: "Technical reference: Design for additive manufacturing DfAM"
keywords: ["DfAM design for additive manufacturing rules", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "dfam"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

The typical layer thickness in additive manufacturing processes ranges from 0,05 mm / 0.002 in to 0,30 mm / 0.012 in, largely defining the resolution and surface finish of the part.

## Process Description

Design for Additive Manufacturing (DfAM) is an engineering methodology that optimizes the geometry, materials, and functionality of a product by leveraging the specific freedoms and constraints of material additive manufacturing processes. Unlike design for traditional manufacturing, DfAM does not merely adapt an existing part but rethinks the architecture of the entire assembly to maximize the benefits of 3D printing: component consolidation, weight reduction through lightweight structures, integration of internal cooling channels, and mass customization. DfAM encompasses both general principles and technology-specific rules (FDM, SLA, SLS, SLM, DMLS, etc.), considering everything from print orientation and supports to mechanical anisotropy and achievable tolerances.

## Operating Parameters

The minimum wall thickness in DfAM ranges from 0,8 mm / 0.031 in to 2,0 mm / 0.079 in depending on the process, material, and orientation; these criteria are essential to ensure structural integrity and manufacturability.

| AM Technology | Minimum wall thickness (mm / in) | Maximum unsupported angle (° / rad) | Minimum hole diameter (mm / in) | Estimated linear shrinkage (%) |
| --- | --- | --- | --- | --- |
| FDM (PLA) | 1,0 mm / 0.039 in | 45° / 0.79 rad | 1,5 mm / 0.059 in | 0,3–0,5 % |
| FDM (ABS) | 1,2 mm / 0.047 in | 45° / 0.79 rad | 2,0 mm / 0.079 in | 0,5–1,2 % |
| SLA (standard resin) | 0,5 mm / 0.020 in | 30° / 0.52 rad | 0,8 mm / 0.031 in | 0,1–0,3 % |
| SLS (PA12) | 0,8 mm / 0.031 in | 30° / 0.52 rad | 1,0 mm / 0.039 in | 2,0–3,0 % |
| DMLS (AlSi10Mg) | 1,0 mm / 0.039 in | 45° / 0.79 rad | 1,2 mm / 0.047 in | 1,5–2,5 % |
| DMLS (Ti6Al4V) | 0,8 mm / 0.031 in | 45° / 0.79 rad | 1,0 mm / 0.039 in | 1,0–2,0 % |

## Typical Tolerances

General dimensional tolerances in AM parts can reach ±0,1 mm / ±0.004 in in high-precision processes such as SLA or DMLS, while in extrusion technologies they remain around ±0,5 mm / ±0.020 in.

| Technology | Typical dimensional tolerance (mm / in) | Surface roughness Ra (µm / µin) | Repeatability accuracy (mm / in) |
| --- | --- | --- | --- |
| FDM | ±0,5 mm / ±0.020 in | 10–20 µm / 395–787 µin | ±0,2 mm / ±0.008 in |
| SLA | ±0,1 mm / ±0.004 in | 1–5 µm / 40–200 µin | ±0,05 mm / ±0.002 in |
| SLS | ±0,3 mm / ±0.012 in | 8–15 µm / 315–590 µin | ±0,15 mm / ±0.006 in |
| DMLS | ±0,1 mm / ±0.004 in | 5–10 µm / 200–395 µin | ±0,05 mm / ±0.002 in |
| MJF | ±0,3 mm / ±0.012 in | 6–12 µm / 236–472 µin | ±0,1 mm / ±0.004 in |

## Applicable Materials

There are more than 50 engineering materials suitable for additive manufacturing, classified into thermoplastic polymers (PLA, ABS, PA, PC), photopolymer resins, metal powders (aluminum, titanium, stainless steel, inconel), ceramics, and composites reinforced with continuous or discontinuous fiber. The selection depends on both the required mechanical properties and the compatibility with the chosen AM process. In DfAM, it is also recommended to evaluate mechanical anisotropy, behavior regarding supports, and thermal stability of the material during printing.

## Advantages

Mass reduction through topological optimization and lattice structures can reach up to 60 % / 60 % compared to the original design while maintaining the specified mechanical strength. Other key advantages of applying DfAM include:

- Assembly consolidation – it is possible to replace hundreds of parts with a single integrated component, reducing assembly steps and failure points.
- Free geometric complexity – allows manufacturing internal channels, organic surfaces, and cavities impossible with subtractive methods.
- Mass customization – each part can be unique without impact on unit cost.
- Waste reduction – the additive process uses only the necessary material, with utilization rates exceeding 90 % in metal powders.
- Functional optimization – integration of sensors, actuators, or conformal channels inside the part.

## Limitations

The average surface roughness in FDM parts ranges from 10 µm Ra / 395 µin Ra to 20 µm Ra / 787 µin Ra, which may require post-processing for aesthetic or functional applications. Other significant limitations are:

- Mechanical anisotropy – strength in the build direction can be 30 to 50 % lower than in the XY plane.
- Need for support structures – geometries with overhangs below 45° require supports that increase time and material.
- Maximum part size limited by the build volume, typically 300 mm x 300 mm x 300 mm / 11.8 in x 11.8 in x 11.8 in, although large-format machines exist.
- Low production speed compared to high-volume processes such as injection molding.
- Fatigue and creep properties still under development for critical applications.
- Limitations in the range of certified materials and high cost of metal powders and special resins.

## Selection Guide

It is recommended to set a minimum wall thickness of 1 mm / 0.039 in for functional components and provide an oversize of 0,2 mm / 0.008 in for subsequent machining operations in hybrid metal parts. The following matrix guides the choice of AM technology based on the priority design requirement:

| Design requirement | Recommended technology | Justification |
| --- | --- | --- |
| High precision and surface finish | SLA / DMLS | Tolerances of ±0,1 mm and Ra < 5 µm |
| Low cost and ease of prototyping | FDM | Inexpensive materials and affordable equipment |
| Durable functional plastic parts | SLS / MJF | Isotropic properties and good mechanical strength |
| Lightweight and strong metal components | DMLS | High density and possibility of advanced alloys |
| High-volume plastic production | MJF | Higher speed than SLS and uniform finish |
| Extreme assembly consolidation | Select technology according to the most restrictive material | Evaluate the consolidated part and choose the process that meets all requirements |

## Frequently Asked Questions

**What is the critical angle for printing overhangs without supports?**
For most FDM and SLS technologies, the critical angle is 45° / 0.79 rad from the horizontal; below this value, supports or geometry redesign are required.

**What dimensional tolerance can I expect in SLS with polyamide 12?**
Tolerances of ±0,3 mm / ±0.012 in are achieved for parts up to 100 mm / 3.94 in, provided shrinkage is controlled with a scale compensation of 3 % / 3 %.

**How much material is wasted on average in reusable metal powder?**
Approximately 5 % to 10 % of the metal powder becomes non-reusable reject after repeated cycles, although the finished part material represents only 15 % of the total powder bed volume.

**From what thickness is a wall considered self-supporting in photopolymer resins?**
In SLA, walls of 0,5 mm / 0.020 in or more are usually stable without additional reinforcement, provided they do not exceed a free height of 50 mm / 1.97 in without lateral supports.

**What weight reduction is feasible through topological optimization in DfAM?**
It is common to achieve a mass reduction of 40 % to 60 % in components redesigned for AM, maintaining or improving the original stiffness thanks to optimized material distribution.

**How much can mechanical strength vary between XY and Z directions in FDM parts?**
The tensile strength in the Z direction can be between 30 % and 50 % lower than in the XY plane, depending on interlayer adhesion and printing parameters such as extrusion temperature and layer height.

## Sources Consulted

- **efunda.com**: https://www.efunda.com/designstandards/
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/additiv-tillverkning?page=1
