---
title: "Additive manufacturing process comparison"
sidebar:
  label: "Additive manufacturing process comparison"
description: "Technical reference: Additive manufacturing process comparison"
keywords: ["additive manufacturing FDM SLA SLS comparison", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "comparison"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Operating principle

The analyzed additive manufacturing processes build parts layer by layer from a digital model, but differ in the way material is deposited and consolidated:

- **FDM (Fused Deposition Modeling):** extrudes a thermoplastic filament through a heated nozzle that moves in the X‑Y axes, depositing the molten material onto a platform. The part is formed as each layer solidifies.
- **SLA (Stereolithography):** an ultraviolet laser selectively solidifies a liquid photosensitive resin contained in a tank. A platform descends progressively and a new layer of resin is spread over the previous one to be cured by the laser.
- **SLS (Selective Laser Sintering):** a high-power laser (typically CO₂) sinters or fuses powder particles (nylon, elastomer, etc.) spread in thin layers on a bed. The bed is preheated just below the powder's melting point and no supports are required because the unsintered powder acts as such.

## Applicable materials

| Process | Material | Form |
| --- | --- |
| FDM | ABS, PLA, PETG, TPU, PC, ASA, nylon, fiber composites | Filament (∅ 1.75 mm / 0.069 in or ∅ 2.85 mm / 0.112 in) |
| SLA | Standard, engineering (rigid, flexible, castable), biocompatible, ceramic-filled resins | Liquid photosensitive resin |
| SLS | Nylon PA12, PA11, TPU (elastomer), polypropylene, reinforced polyamides (glass fiber, carbon fiber), polystyrene (lost wax) | Spherical powder (mean size 20–80 µm / 787–3150 µin) |

## Process parameters

| Process | Material | Layer thickness | Operating temperature | Power / source | Typical build speed |
| --- | --- | --- | --- | --- | --- |
| FDM | PLA | 0,1–0,3 mm / 0.004–0.012 in | Nozzle: 190–220 °C / 374–428 °F; bed: 50–60 °C / 122–140 °F | — | 40–100 mm/s (Z axis variable per layer) |
| FDM | ABS | 0,1–0,3 mm / 0.004–0.012 in | Nozzle: 220–250 °C / 428–482 °F; bed: 90–110 °C / 194–230 °F | — | 30–80 mm/s |
| SLA | Standard resin | 0,025–0,15 mm / 0.001–0.006 in | Controlled environment 25–30 °C / 77–86 °F | UV laser 355 nm, up to 500 mW | 10–20 mm/h (Z advancement) |
| SLS | PA12 (nylon) | 0,1–0,15 mm / 0.004–0.006 in | Powder bed preheated 170–180 °C / 338–356 °F (≈ 5–10 °C below Tm) | CO₂ laser 30–50 W, pulsed beam | 10–20 mm/h (Z advancement) |
| SLS | TPU (elastomer) | 0,1–0,12 mm / 0.004–0.005 in | Preheated bed 80–100 °C / 176–212 °F | CO₂ laser 20–40 W | 8–15 mm/h |

## Tolerances and surface quality

| Process | Typical dimensional tolerance | Surface roughness (Ra) |
| --- | --- | --- |
| FDM | ±0.5 % of nominal (minimum ±0,2 mm / 0.008 in) | 8–25 µm / 315–984 µin |
| SLA | ±0,1 mm / 0.004 in (up to ±0,05 mm / 0.002 in on high-precision equipment) | 0,5–1,5 µm / 20–59 µin |
| SLS | ±0,3 mm / 0.012 in (Z may be larger) | 5–15 µm / 197–591 µin (powdery surface without sealant) |

## Advantages and limitations

| Process | Advantages | Limitations |
| --- | --- | --- |
| FDM | Low cost, wide variety of thermoplastic materials, ease of use, functional parts, possibility of composites. | Lower surface resolution, mechanical anisotropy (lower strength in Z), requires supports for overhangs. |
| SLA | Very high dimensional precision, excellent surface finish, possibility of transparent or castable materials, suitable for visual prototyping and molds. | Limited to photosensitive resins (lower mechanical and thermal durability than thermoplastics), post-curing required, lower impact resistance. |
| SLS | Materials very close to engineering thermoplastics (nylon, elastomers), no supports needed, allows complex geometries and functional parts, possible 3D nesting of parts. | Porous and powdery surface finish unless sealant is applied, Z precision less predictable than SLA, high machine cost, requires powder handling and controlled preheating. |

## Selection guide

Select the process based on the primary criterion:

- **Low cost per part and varied material → FDM.** Ideal for functional rapid prototyping, low-stress parts, and form/fit testing.
- **Maximum precision and surface finish → SLA.** Recommended for presentation models, master molds, casting patterns, and applications requiring tolerances below ±0,1 mm / 0.004 in.
- **Functional parts without supports and with properties close to engineering thermoplastics → SLS.** Suitable for short runs, components with living hinges, housings, and geometries inaccessible by other processes.
- **Medium mechanical or thermal loads → FDM (with ABS, PC) or SLS (with PA12).** SLA is ruled out if toughness or temperature resistance (> 60 °C / 140 °F) is required.
- **Urgent delivery deadline → FDM** (lower machine time for simple parts). For highly detailed parts, SLA may be competitive.
- **Low production volume (up to 100 units) → SLS**, thanks to nesting and the absence of supports which reduces post-processing.

## Frequently asked questions

1. **What is the typical dimensional accuracy of SLA?**  
   SLA routinely achieves tolerances of ±0,1 mm / 0.004 in, and can reach ±0,05 mm / 0.002 in on high-end machines.

2. **What layer thickness does SLS use for nylon PA12?**  
   The standard layer thickness for PA12 in SLS ranges from 0,1 mm / 0.004 in to 0,15 mm / 0.006 in, which determines surface roughness and build time.

3. **What is the nozzle temperature in FDM for ABS?**  
   The extruder temperature for ABS is typically maintained between 220 °C / 428 °F and 250 °C / 482 °F, and the heated bed between 90 °C / 194 °F and 110 °C / 230 °F to prevent warping.

4. **What surface roughness can be expected in unsealed SLS parts?**  
   The average roughness (Ra) of an SLS part without surface treatment is between 5 µm / 197 µin and 15 µm / 591 µin, due to the powdery nature of the sintered powder.

5. **How long does a 100 mm tall SLA print take?**  
   A 100 mm / 3.94 in tall part typically completes in 5 to 10 hours with a 0,1 mm / 0.004 in layer setting, depending on geometric complexity and cross-sectional area.

6. **What is the minimum wall thickness that can be guaranteed in FDM with a 0.4 mm nozzle?**  
   The functional minimum wall thickness in FDM is 0,8 mm / 0.031 in (twice the nozzle diameter) to ensure structural strength, although decorative details can reach 0,4 mm / 0.016 in.

## References

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sls.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/stereolithography-sla

## Sources Consulted

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sls.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/stereolithography-sla
