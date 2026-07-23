---
title: "GDT Angularity Parallelism Perpendicularity"
sidebar:
  label: "GDT Angularity Parallelism Perpendicularity"
description: "Technical reference: GDT Angularity Parallelism Perpendicularity"
keywords: ["GDT angularity parallelism perpendicularity", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "angularity-parallelism"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Definition and principle
Orientation tolerances control deviations of angularity, parallelism, and perpendicularity of a surface or axis with respect to a specified datum, with a typical tolerance zone between 0,05 mm / 0.002 in and 0,5 mm / 0.02 in depending on required precision. These three tolerances share the principle of limiting angular variation without controlling linear dimensions. Angularity defines the allowable deviation from a theoretical exact angle between a feature and a datum (e.g., a surface inclined at 45°). Parallelism ensures that a line or surface remains equidistant from the datum (tolerance zone between two parallel planes or lines). Perpendicularity requires the feature to form exact 90° with the datum (tolerance zone between two planes perpendicular to the datum). In all three cases, the tolerance zone can be two-dimensional (area between two lines) or three-dimensional (space between two planes or within a cylinder, the latter applicable to axes).

## Symbols and specification on drawing
Orientation tolerance specification is done using a three-compartment feature control frame per ASME Y14.5 or ISO 1101. The first compartment contains the geometric symbol, the second the numerical tolerance (preceded by Ø if the zone is cylindrical), and the third the reference datum letter(s). The standard symbols are: angularity ∠, parallelism ∥, and perpendicularity ⊥ (ASME) or ⊤ (ISO). On manufacturing drawings of parts such as machine tool guides, it is specified for example: ∥ 0,02 A, indicating that the surface must be parallel to datum A within a zone of 0,02 mm / 0.0008 in. Perpendicularity of an axis to a base surface is marked as ⊥ Ø 0,05 A, indicating a cylindrical zone of 0,05 mm / 0.002 in diameter. Angularity of a surface at 60° relative to datum B is indicated with ∠ 0,1 B and the basic dimension of 60° without dimensional tolerance.

## Orientation tolerance tables
The following tables show parallelism, perpendicularity, and angularity tolerances for usual precision grades in mechanical manufacturing, according to ISO 2768-2 class L (coarse), K (medium), and H (fine). The values are given as a function of the nominal length of the controlled feature.

### Parallelism tolerances
| Nominal length | Class L (coarse) | Class K (medium) | Class H (fine) |
|---|---|---|---|
| Up to 10 mm / 0.39 in | 0,2 mm / 0.008 in | 0,05 mm / 0.002 in | 0,02 mm / 0.0008 in |
| 10 – 30 mm / 0.39 – 1.18 in | 0,3 mm / 0.012 in | 0,1 mm / 0.004 in | 0,03 mm / 0.0012 in |
| 30 – 100 mm / 1.18 – 3.94 in | 0,5 mm / 0.02 in | 0,2 mm / 0.008 in | 0,05 mm / 0.002 in |
| 100 – 300 mm / 3.94 – 11.81 in | 0,8 mm / 0.031 in | 0,3 mm / 0.012 in | 0,1 mm / 0.004 in |
| 300 – 1000 mm / 11.81 – 39.37 in | 1,2 mm / 0.047 in | 0,5 mm / 0.02 in | 0,2 mm / 0.008 in |

### Perpendicularity tolerances
| Nominal length | Class L (coarse) | Class K (medium) | Class H (fine) |
|---|---|---|---|
| Up to 10 mm / 0.39 in | 0,2 mm / 0.008 in | 0,05 mm / 0.002 in | 0,02 mm / 0.0008 in |
| 10 – 30 mm / 0.39 – 1.18 in | 0,3 mm / 0.012 in | 0,1 mm / 0.004 in | 0,03 mm / 0.0012 in |
| 30 – 100 mm / 1.18 – 3.94 in | 0,5 mm / 0.02 in | 0,2 mm / 0.008 in | 0,05 mm / 0.002 in |
| 100 – 300 mm / 3.94 – 11.81 in | 0,8 mm / 0.031 in | 0,3 mm / 0.012 in | 0,1 mm / 0.004 in |
| 300 – 1000 mm / 11.81 – 39.37 in | 1,2 mm / 0.047 in | 0,5 mm / 0.02 in | 0,2 mm / 0.008 in |

### Angularity tolerances
| Short side length | Class L (coarse) | Class K (medium) | Class H (fine) |
|---|---|---|---|
| Up to 10 mm / 0.39 in | 0,3 mm / 0.012 in | 0,1 mm / 0.004 in | 0,03 mm / 0.0012 in |
| 10 – 30 mm / 0.39 – 1.18 in | 0,4 mm / 0.016 in | 0,15 mm / 0.006 in | 0,05 mm / 0.002 in |
| 30 – 100 mm / 1.18 – 3.94 in | 0,6 mm / 0.024 in | 0,25 mm / 0.010 in | 0,1 mm / 0.004 in |
| 100 – 300 mm / 3.94 – 11.81 in | 1,0 mm / 0.039 in | 0,4 mm / 0.016 in | 0,2 mm / 0.008 in |
| 300 – 1000 mm / 11.81 – 39.37 in | 1,5 mm / 0.059 in | 0,6 mm / 0.024 in | 0,3 mm / 0.012 in |

Note: For angularity, the nominal length is considered the shortest side of the angle. Values apply when no individual tolerance is specified in the control frame.

## Real application examples
Perpendicularity tolerance is typically used on flange support faces and bearing seats, where a deviation of 0,05 mm / 0.002 in on a diameter of 100 mm / 3.94 in generates unacceptable vibration. In machine tool column assembly, perpendicularity between the vertical guide and the bed is limited to 0,02 mm / 0.0008 in per 300 mm / 11.81 in of height to ensure machining accuracy. Parallelism is critical in linear guides: a tolerance of 0,01 mm / 0.0004 in over 500 mm / 19.69 in of travel ensures smooth movement without jamming. Angularity is controlled on inclined cutting tool seating surfaces, such as insert holders at 45°, requiring 0,1 mm / 0.004 in angularity relative to the shank to maintain cutting geometry.

## Comparison between ISO and ASME standards
ASME Y14.5 and ISO 1101 share fundamental symbology for orientation, but present practical divergences. In ISO, the perpendicularity symbol may be ⊤, while ASME uses ⊥. ASME allows projected tolerance zone only with modifier Ⓟ, ISO resorts to additional plane annotations. Angularity in ISO directly allows multiple datum references (plane and axis simultaneously) without additional requirements, while ASME requires a composite datum construction. The maximum material condition modifier (Ⓜ) acts exclusively on features of size (holes, shafts) in both standards, but ISO extends its use to derived surfaces in the 2017 revision. The interpretation of the primary invariant datum (flat surface) and secondary datum (axis) is equivalent in both systems.

## Frequently asked questions (FAQ)
1. What is the recommended perpendicularity tolerance for a shaft of 20 mm diameter? — For a shaft of 20 mm / 0.79 in diameter, a perpendicularity tolerance of 0,03 mm / 0.0012 in relative to its support face is recommended if high precision is required (class H), or 0,1 mm / 0.004 in for medium class applications (K).

2. Can a surface meet a parallelism of 0.1 mm without meeting flatness? — Yes, a surface with parallelism of 0,1 mm / 0.004 in can have a flatness worse than 0,1 mm / 0.004 in, because the parallelism tolerance zone consists of two planes parallel to the datum, within which the actual surface can freely undulate.

3. How is an angularity tolerance of 0.2 mm converted to degrees? — With a measured side length of 100 mm / 3.94 in, an angularity tolerance of 0,2 mm / 0.008 in is equivalent to an angular variation of approximately 0.11° or 6.9 arcminutes (tan(θ) ≈ 0.2/100).

4. What parallelism tolerance is needed for a pair of flange faces spaced 200 mm apart? — For a spacing of 200 mm / 7.87 in and medium precision (class K), the parallelism tolerance is 0,2 mm / 0.008 in, sufficient to prevent leaks in non-metallic gaskets.

5. Can perpendicularity be replaced by an angularity tolerance of 90°? — Technically yes, an angularity of 0,05 mm / 0.002 in with a basic dimension of 90° produces the same tolerance zone as a perpendicularity of 0,05 mm / 0.002 in, but standards reserve the symbol ⊥ for implied 90° and ∠ for angles other than 90°.

6. How does the maximum material condition modifier affect a perpendicularity of 0.04 mm? — With Ⓜ applied to a shaft of 15 mm / 0.59 in and dimensional tolerance ±0.1 mm, the perpendicularity of 0,04 mm / 0.0016 in can be increased to 0,14 mm / 0.0055 in if the shaft is manufactured at its minimum diameter of 14.9 mm / 0.587 in, thanks to the additional clearance.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/acceleration-d_1393.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
