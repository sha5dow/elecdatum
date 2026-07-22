---
title: "Milling speeds and feeds by material"
sidebar:
  label: "Milling speeds and feeds by material"
description: "Technical reference: Milling speeds and feeds by material"
keywords: ["milling speeds feeds by material CNC mill rpm", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "milling"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## General Description

Milling is a machining process using a rotary multi-tooth cutting tool, where cutting speed and feed rate determine surface finish, tool life, and productivity. Cutting speed (Vc) represents the tangential velocity of the cutting edge on the workpiece surface, expressed in m/min or surface feet per minute (sfm). Feed per tooth (fz) indicates the thickness of material each tooth of the cutter removes in one revolution and is measured in mm/tooth or in/tooth. From these parameters, spindle revolutions per minute (RPM) and table feed rate are calculated. Correct selection depends on workpiece material, tool type (HSS, carbide, coatings), system rigidity, and operation (roughing or finishing).

## Operating Parameters

### Cutting Speeds by Material

Cutting speeds for milling are compiled in the following table, with starting values for high-speed steel (HSS) tools and uncoated solid carbide. Lower ranges correspond to roughing operations or low-rigidity conditions; upper ranges to light finishing. The use of coolant allows increasing speed by up to 25 %.

| Material | Cutting Speed HSS (m/min / sfm) | Cutting Speed Carbide (m/min / sfm) |
| --- | --- | --- |
| Low-carbon steel (AISI 1018) | 21 – 30 / 70 – 100 | 90 – 150 / 300 – 500 |
| Alloy steel (4140 annealed) | 12 – 18 / 40 – 60 | 60 – 105 / 200 – 350 |
| Stainless steel (AISI 304) | 9 – 15 / 30 – 50 | 45 – 90 / 150 – 300 |
| Gray cast iron (G25) | 15 – 24 / 50 – 80 | 60 – 120 / 200 – 400 |
| Wrought aluminum (6061‑T6) | 90 – 180 / 300 – 600 | 240 – 600 / 800 – 2000 |
| Red brass (C230) | 45 – 90 / 150 – 300 | 150 – 300 / 500 – 1000 |
| Free-machining bronze (C932) | 24 – 45 / 80 – 150 | 90 – 180 / 300 – 600 |
| Titanium (Ti‑6Al‑4V) | 4.6 – 9 / 15 – 30 | 30 – 60 / 100 – 200 |
| Plastics (PVC, PE) | 30 – 60 / 100 – 200 | 120 – 240 / 400 – 800 |
| Softwood (pine) | 180 – 300 / 600 – 1000 | — |
| Hardwood (oak) | 120 – 240 / 400 – 800 | — |

### Typical Feeds per Tooth

Feed per tooth (fz) depends on material machinability and cutter diameter. The following values are for end mills with diameter 10 – 25 mm; for smaller diameters, reduce feed by up to 50 %.

| Material | Feed per Tooth HSS (mm/tooth / in/tooth) | Feed per Tooth Carbide (mm/tooth / in/tooth) |
| --- | --- | --- |
| Aluminum and light alloys | 0.05 – 0.15 / 0.002 – 0.006 | 0.10 – 0.25 / 0.004 – 0.010 |
| Carbon and low-alloy steels | 0.03 – 0.10 / 0.001 – 0.004 | 0.05 – 0.15 / 0.002 – 0.006 |
| Stainless steel | 0.02 – 0.08 / 0.0008 – 0.0032 | 0.04 – 0.12 / 0.0016 – 0.0048 |
| Cast iron | 0.02 – 0.08 / 0.0008 – 0.0032 | 0.04 – 0.12 / 0.0016 – 0.0048 |
| Titanium and superalloys | 0.01 – 0.05 / 0.0004 – 0.0020 | 0.03 – 0.08 / 0.0012 – 0.0032 |
| Plastics | 0.05 – 0.20 / 0.002 – 0.008 | 0.10 – 0.30 / 0.004 – 0.012 |

### Calculation of RPM and Feed Rate

To convert cutting speed to spindle revolutions:

**RPM** = (1000 × Vc) / (π × D) if Vc is in m/min and D in mm.

In imperial units: **RPM** = (12 × Vc) / (π × D) = (3.82 × Vc) / D, with Vc in sfm and D in inches.

Table feed rate is obtained with:

**Vf** (mm/min) = fz (mm/tooth) × z (number of teeth) × RPM

**Example**: milling of 6061 aluminum with solid carbide end mill D = 10 mm, z = 3, Vc = 350 m/min, fz = 0.15 mm/tooth.
RPM = (1000 × 350) / (π × 10) ≈ 11 141 rpm.
Vf = 0.15 × 3 × 11 141 ≈ 5013 mm/min (197 in/min).

## Typical Tolerances

Conventional milling can achieve the following dimensional tolerances and surface finishes, depending on machine condition, tool, and cutting strategy.

| Parameter | Typical Tolerance |
| --- | --- |
| General dimensional tolerance | ±0.10 mm / ±0.004 in |
| Precision dimensional tolerance | ±0.025 mm / ±0.001 in |
| Positional repeatability | ±0.05 mm / ±0.002 in |
| Surface roughness (Ra) roughing | 3.2 – 6.3 µm / 126 – 250 µin |
| Surface roughness (Ra) finishing | 0.8 – 1.6 µm / 32 – 63 µin |
| Flatness on milled surfaces (100 mm length) | 0.02 – 0.05 mm / 0.0008 – 0.002 in |

## Applicable Materials

Milling is feasible on virtually any machinable material: carbon and alloy steels, stainless steels, cast irons, aluminum and its alloys, copper, brass, bronze, titanium, heat-resistant superalloys, plastics (thermoplastics and thermosets), composites, and wood. Material selection dictates cutting speed, feed rate, and tool type. Materials with hardness above 45 HRC require carbide or CBN cutters and tightly controlled parameters to prevent premature edge chipping.

## Advantages and Limitations

**Advantages**  
- High material removal rate (MRR), especially in roughing with indexable insert cutters.  
- Excellent geometric flexibility: capable of producing flat surfaces, contours, slots, and complex cavities.  
- Surface finishes of Ra 0.8 µm (32 µin) achievable without grinding.  
- Easily automated and monitorable process via CNC.

**Limitations**  
- High tool wear in hard or abrasive materials; high-performance coatings required.  
- Prone to vibration (chatter) if spindle‑tool‑workpiece system rigidity is insufficient.  
- Significant setup time for short runs or very complex parts.  
- Internal areas with sharp corners require very small diameter cutters, limiting feed rate.

## Selection Guide

1. **Identify material and condition**: hardness, strength, presence of scale or casting skin.  
2. **Choose tool material**:
   - HSS for short runs, soft materials, or where speed is not a priority.
   - Solid carbide (WC-Co) for medium and high production, materials up to 45 HRC.
   - Coated carbide (TiAlN, TiCN) for hard steels, stainless steels, and high temperatures.
3. **Set cutting speed** according to the operating parameters table, starting at the lower value and adjusting based on edge behavior.
4. **Select feed per tooth** based on cutter diameter and operation (roughing: higher fz; finishing: lower fz). Reduce for sharp corner radii or ramp entries.
5. **Calculate RPM and feed rate** using the formulas provided. Verify they do not exceed machine capabilities (maximum spindle RPM, maximum feed rate, and available power).
6. **Adjust depth of cut (ap)** and **width of cut (ae)**. For roughing, ap ≤ 1 × D and ae ≤ 0.5 × D are recommended; for finishing, ap up to 1.5 mm (0.06 in) and ae = cutter diameter if rapid removal is desired.  
7. **Validate the process** with a first part, measuring tolerances and evaluating surface finish and chip formation.

## Frequently Asked Questions (FAQ)

**1. What cutting speed is recommended for milling aluminum with carbide tools?**  
It is recommended between 240 and 600 m/min (800 – 2000 sfm) for wrought alloys such as 6061‑T6. With flood coolant and sharp carbide cutters, the upper end can reach 800 m/min (2600 sfm) without risk of built-up edge.

**2. What is the appropriate feed per tooth for low-carbon steel with an HSS cutter?**  
The typical range is 0.03 – 0.10 mm/tooth (0.001 – 0.004 in/tooth). For roughing it can go up to 0.12 mm/tooth (0.005 in/tooth) if spindle power allows, always monitoring chip formation.

**3. What RPM should the spindle have for a 12 mm cutter in stainless steel 304?**  
With Vc = 12 m/min (40 sfm) for HSS, RPM = (1000 × 12) / (π × 12) ≈ 318 rpm. With carbide at Vc = 60 m/min (200 sfm) the speed rises to 1590 rpm. Such low values are necessary to avoid work hardening.

**4. What is the maximum feed rate in steel milling with a 10 mm carbide cutter?**  
Taking Vc = 120 m/min (400 sfm) and fz = 0.15 mm/tooth (0.006 in/tooth) with 4 teeth, RPM = 3820 rpm and Vf = 0.15 × 4 × 3820 = 2292 mm/min (90 in/min). On rigid machines the actual speed can exceed 3000 mm/min if depth of cut is reduced.

**5. What dimensional tolerance can be expected in finish milling?**  
Typically ±0.025 mm (±0.001 in) is achieved on precision machining centers with sharp cutters and radius compensation strategies. Under less controlled conditions, tolerance is around ±0.10 mm (±0.004 in).

**6. Is coolant necessary when milling titanium with a carbide tool?**  
Yes, always. At cutting speeds as low as 4.6 – 9 m/min (15 – 30 sfm) the temperature in the cutting zone is extreme. High-pressure coolant (70–100 bar) is essential to evacuate chips and preserve the cutting edge; otherwise, wear accelerates in seconds.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-bit-speed-hardwood-softwood-d_1451.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/gear-milling
