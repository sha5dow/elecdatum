---
title: "SLA DLP parameters and resins"
sidebar:
  label: "SLA DLP parameters and resins"
description: "Technical reference: SLA DLP parameters and resins"
keywords: ["SLA DLP resin 3D printing parameters resolution", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "sla"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Process Description

Stereolithography (SLA) and Digital Light Processing (DLP) are vat photopolymerization additive manufacturing technologies. In SLA, an ultraviolet laser selectively traces each layer on the surface of a liquid photosensitive resin, solidifying it. In DLP, a digital projector exposes a complete image of the layer at once, curing the entire section simultaneously. In both cases, the build platform moves vertically after each layer (typically between 0,025 mm / 0.001 in and 0,15 mm / 0.006 in) and a wiper or recoater blade spreads fresh resin. After printing, the part requires solvent cleaning to remove uncured resin and post‑curing in a UV oven or light chamber to achieve final mechanical properties.

## Operational Parameters

In SLA/DLP, critical parameters depend on the light source type, optics, and resin formulation. For SLA, the laser beam diameter determines lateral resolution, while in DLP the resolution is given by the pixel size projected onto the vat. Build speed is affected by the exposure time per layer and the selected layer thickness.

| Parameter | Typical range |
|---|---|
| Layer thickness | 0,025–0,15 mm / 0.001–0.006 in |
| Laser beam diameter (SLA) | 0,05–0,15 mm / 0.002–0.006 in |
| Pixel size (DLP) | 25–100 µm / 0.001–0.004 in |
| Curing wavelength | 355–405 nm (UV) |
| Laser power (SLA) | 30–500 mW |
| Exposure time per layer | 1–10 seconds (depending on resin and thickness) |
| Laser scanning speed (SLA) | 80–250 cm/s / 31.5–98.4 in/s |
| Recommended vat temperature | 25–35 °C / 77–95 °F |

## Materials

SLA/DLP resins are liquid photopolymer formulations (acrylates, epoxies, or urethanes) that react under UV light. They are classified according to their final properties: standard (rigid and economical), engineering (ABS‑like, PP‑like), flexible, high temperature, castable (for jewelry), and biocompatible. All require post‑curing to reach their nominal values.

| Resin type | Tensile strength | Elongation at break | Heat deflection temperature (HDT) | Typical volumetric shrinkage |
|---|---|---|---|---|
| Standard | 30–50 MPa / 4.4–7.3 ksi | 5–15 % | 45–60 °C / 113–140 °F | 3–8 % |
| Tough (ABS‑like) | 45–65 MPa / 6.5–9.4 ksi | 20–50 % | 55–75 °C / 131–167 °F | 2–6 % |
| Flexible | 5–15 MPa / 0.7–2.2 ksi | 100–300 % | < 40 °C / < 104 °F | 1–5 % |
| High temperature | 50–80 MPa / 7.3–11.6 ksi | 1–10 % | 120–250 °C / 248–482 °F | 5–10 % |
| Castable | 20–40 MPa / 2.9–5.8 ksi | 2–10 % | — (removal by calcination) | < 0.5 % (ash) |
| Biocompatible (ISO 10993) | 40–60 MPa / 5.8–8.7 ksi | 3–20 % | 55–70 °C / 131–158 °F | 2–5 % |

## Tolerances and surface roughness

Dimensional accuracy in SLA/DLP depends on part size, build orientation, and shrinkage compensation. For small parts (< 100 mm / 3.94 in) tolerances of ±0,1 mm / ±0.004 in are achieved, while on large parts the error can increase to ±0,25 mm / ±0.010 in or more. Surface roughness is directly related to layer thickness and the staircase effect.

| Layer thickness | Typical surface roughness (Ra) |
|---|---|
| 0,025 mm / 0.001 in | 1–5 µm / 39–197 µin |
| 0,05 mm / 0.002 in | 5–12 µm / 197–472 µin |
| 0,10 mm / 0.004 in | 10–25 µm / 394–984 µin |
| 0,15 mm / 0.006 in | 20–40 µm / 787–1575 µin |

## Advantages and limitations

SLA/DLP technology offers a combination of high resolution and good surface quality that makes it particularly suitable for precision models, master molds, jewelry, and surgical guides. Post‑processing, brittleness of standard resins, and toxicity of uncured materials are its main disadvantages.

| Advantages | Limitations |
|---|---|
| Very fine surface quality | Brittle parts with standard resins |
| High dimensional accuracy | Sticky surface without proper post‑curing |
| Wide range of specialized resins | Warping due to prolonged post‑curing |
| Ability to produce complex geometries and thin walls | Need for support structures |
| Simple and automated process | Toxicity of uncured material; requires ventilation |

## Parameter selection

1.  **Fine detail and smooth surfaces**: choose a layer thickness between 0,025 mm / 0.001 in and 0,05 mm / 0.002 in; sacrifices build speed. Orienting the part with the long axis vertical minimizes the staircase effect but increases print time.
2.  **Rapid prototyping production**: layer of 0,10 mm / 0.004 in or higher; horizontal orientation whenever possible to reduce build height. Use standard resin.
3.  **Functional parts under stress**: opt for *tough* or engineering resins, with controlled post‑curing to avoid distortion. Compensate shrinkage by applying a scale factor of 1,005–1,020.
4.  **High temperature applications**: resins with HDT > 120 °C / 248 °F, additional thermal post‑curing after UV. The layer thickness should not exceed 0,05 mm / 0.002 in to ensure cure uniformity.
5.  **Jewelry and casting**: use castable resins with low ash content, layer thickness of 0,025–0,05 mm / 0.001–0.002 in and orientation that places supports in non-visible or easily removable areas.
6.  **Biocompatibility**: select ISO 10993 certified resins, with washing and post‑curing according to the manufacturer's instructions. Do not skip post‑curing, as incomplete conversion releases residual monomers.

## Frequently Asked Questions

1.  **What is the typical layer resolution in SLA?** Layer resolution typically ranges from 0,025 mm / 0.001 in to 0,15 mm / 0.006 in; the most common value is 0,05 mm / 0.002 in for a balance of detail and speed.

2.  **What dimensional tolerance can I expect in an SLA/DLP part?** For parts up to 100 mm / 3.94 in the typical tolerance is ±0,1 mm / ±0.004 in; on larger parts it can reach ±0,25 mm / ±0.010 in or more.

3.  **How long does post‑curing take?** UV post‑curing usually lasts between 5 and 30 minutes per part, depending on size and lamp power; some high temperature resins require an additional thermal curing of 1 to 4 hours at 120–160 °C / 248–320 °F.

4.  **Are supports necessary?** Yes, almost always. Parts with overhangs greater than 45° or isolated areas need supports to avoid deformations during printing, as well as sections that do not directly touch the build platform.

5.  **How strong are SLA parts compared to FDM?** Standard resins offer tensile strength of 30–50 MPa / 4.4–7.3 ksi, comparable to PLA, but lower elongation (5–15 %). ABS‑like resins increase strength up to 65 MPa / 9.4 ksi with elongations up to 50 %.

6.  **Can an SLA part be painted or metallized?** Yes, after sanding and applying primer. The surface can be painted with acrylic or polyurethane paints, and can also undergo electrolytic metallization if a conductive varnish is applied beforehand. Complete post‑curing is recommended to remove residual stickiness.

## References

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sla.cfm

## Sources Consulted

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sla.cfm
