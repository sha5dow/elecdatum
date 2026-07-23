---
title: "GDT symbols ASME Y14.5 complete"
sidebar:
  label: "GDT symbols ASME Y14.5 complete"
description: "Technical reference: GDT symbols ASME Y14.5 complete"
keywords: ["GDT geometric dimensioning tolerancing symbols", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "symbols-complete"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Overview

Geometric Dimensioning and Tolerancing (GDT) is a symbolic system standardized by ASME Y14.5 that defines tolerances for form, orientation, location, profile, and runout of parts. It replaces linear dimensioning with a language that specifies the exact nominal geometry and the allowed variation of each functional feature. The ASME Y14.5 standard encompasses 14 main symbols, modifiers, and interpretation rules. This guide contains the complete symbology, examples with numerical data, and the most relevant differences compared to the ISO GPS system.

## ASME Y14.5 Geometric Symbol Table

### Form Symbols

| Symbol | Name | Geometric control |
| --- | --- | --- |
| – | Straightness | Control of straightness of an axis or surface line |
| ▱ | Flatness | Control of deviation of a surface from a plane |
| ○ | Roundness / Circularity | Control of radial variation of a cross-section |
| ⌭ | Cylindricity | Simultaneous control of roundness, straightness, and taper of a cylindrical surface |

### Orientation Symbols

| Symbol | Name | Geometric control |
| --- | --- | --- |
| ∥ | Parallelism | Orientation of a line or surface parallel to a datum |
| ⟂ | Perpendicularity | Orientation of a line or surface at 90° to a datum |
| ∠ | Angularity | Orientation of a line or surface at a basic angle other than 0° or 90° to a datum |

### Location Symbols

| Symbol | Name | Geometric control |
| --- | --- | --- |
| ⌖ | Position | Exact location of features of size relative to a reference datum |
| ◎ | Concentricity¹ | Coaxiality of the median axis of a feature of revolution relative to a datum axis |

¹ *Eliminated in ASME Y14.5‑2018; replaced by position or coaxiality control.*

### Profile Symbols

| Symbol | Name | Geometric control |
| --- | --- | --- |
| ⌒ | Profile of a line | Variation of a contour section without control of the entire surface |
| ⌓ | Profile of a surface | Three-dimensional variation of a surface relative to its exact theoretical shape |

### Runout Symbols

| Symbol | Name | Geometric control |
| --- | --- | --- |
| ↗ | Circular runout | Composite radial or axial variation of form and position in each revolution |
| ⌰ | Total runout | Composite variation of the entire surface in full revolution |

## Modifiers and Supplementary Symbols

| Symbol | ASME Name | Description (based on Roymech) |
| --- | --- | --- |
| Ⓜ | Maximum Material Condition (MMC) | The feature contains the maximum amount of material (minimum hole, maximum shaft). It allows increasing the geometric tolerance when the actual size deviates from MMC, as long as the maximum material virtual condition (MMVC) is not violated. |
| Ⓛ | Least Material Condition (LMC) | The feature contains the minimum amount of material (maximum hole, minimum shaft). It is used to guarantee minimum wall thicknesses or edge distances. The geometric tolerance may be increased when the actual size approaches LMC. |
| Ⓟ | Projected Tolerance Zone | The tolerance zone extends outside the actual feature (e.g., the height of the screw protruding from a threaded hole), indicating the projected length. |
| Ⓣ | Tangent Plane | The geometric control applies to the plane tangent to the actual surface, not to the entire surface. |
| Ⓕ | Free State | Indicates that the tolerance must be met in an unrestrained state (before assembly). Used on flexible parts. |
| CZ | Common Zone – ISO | In ISO, indicates that multiple separate features share a single tolerance zone. ASME uses the annotation “Common Zone” in the feature control frame. |

## Feature Control Frame

The control frame is the graphical element that communicates the geometric tolerance. It is divided into compartments:

1.  **Geometric symbol** (form, orientation, etc.)
2.  **Tolerance value** (e.g., 0,2 mm / 0.008 in). It may be preceded by the diameter symbol ⌀ if the zone is cylindrical.
3.  **Material condition modifier** (Ⓜ, Ⓛ or none if RFS applies).
4.  **Datum letter(s)** (A, B, C) in order of priority, each with its own material modifier if applicable.

Example of a feature control frame for a position tolerance:

` ⌖ | ⌀ 0,2 Ⓜ | A | B Ⓜ | C `

## Interpretation of Symbols and Real Application Examples

- **Straightness applied to an axis (⌀ 0,08 mm / 0.003 in Ⓜ):** The tolerance zone is a cylinder of diameter 0,08 mm / 0.003 in at maximum material condition. If the shaft is produced near the lower size limit, the tolerance cylinder can grow to a diameter equal to 0,08 mm plus the deviation from MMC. For a bar of 12 mm ±0,05 mm / 0.472 in ±0.002 in, at MMC (12,05 mm / 0.474 in) the allowed straightness is 0,08 mm / 0.003 in; at LMC (11,95 mm / 0.470 in) the straightness tolerance can reach 0,18 mm / 0.007 in.

- **Position of a hole pattern with MMC:** Two holes of 8 mm +0,1/−0 mm / 0.315 in +0.004/−0 in must be located at a basic distance of 40 mm / 1.575 in. The control `⌖ | ⌀ 0,15 Ⓜ | A | B` defines a cylindrical tolerance zone of diameter 0,15 mm / 0.006 in at MMC. When the hole is produced at its largest diameter (8,1 mm / 0.319 in), the total position tolerance increases to 0,25 mm / 0.010 in (0,15 mm + 0,1 mm bonus). This bonus guarantees assembly even with dimensional and positional variations.

- **Surface profile for aerodynamic contour control:** A surface with a theoretical profile is controlled by `⌓ | 0,5 mm / 0.020 in | A | B | C` (equal bilateral zone). If a unilateral zone is required, the symbol Ⓤ is added followed by the offset, e.g., `⌓ | 0,5 Ⓤ 0,3 | A | B` defines a zone of 0,5 mm / 0.020 in located 0,3 mm / 0.012 in inward from the nominal profile.

## ASME Y14.5 vs ISO GPS Comparison

| Feature | ASME Y14.5 | ISO GPS | Impact on Interpretation |
| --- | --- | --- | --- |
| Maximum Material Condition (MMC) | Explicit Ⓜ symbol in the feature control frame | Same Ⓜ symbol, but ISO 2692 specifies additional requirements for calculating the virtual condition | The tolerance bonus is calculated identically in both systems. |
| Envelope principle | Rule #1: the surface of a feature of size must not violate a perfect form boundary at MMC | Not a general rule; must be invoked with the Ⓔ symbol (envelope requirement) | An ASME part at MMC must always fit within its perfect geometric boundary, whereas ISO requires explicit indication. |
| Concentricity | Eliminated in Y14.5‑2018; replaced by position or coaxiality | ISO 1101 retains the coaxiality symbol (same symbol ◎) and concentricity as a special case | For practical purposes, modern ASME prefers position with a cylindrical tolerance zone, offering easier measurement. |
| Datums | Datum references are ordered in the frame by physical priority | The order of datums in the frame is the same, but ISO defines reference systems with more explicit degrees of constraint | The functional sequence is maintained, although ISO may require more clarification for datum simulation. |
| Profile of a line | By default, equal bilateral zone unless specified | ISO allows tolerance zone control with offset using the UZ symbol | The notation for unilateral zones differs: ASME uses the Ⓤ modifier, while ISO uses UZ after the tolerance value. |
| Common zone | Indicated with the note “Common Zone” in the feature control frame | CZ symbol inside the frame, adjacent to the tolerance | For equal technical meaning, the notation changes the graphical representation of the requirement. |

## Frequently Asked Questions

**1. How many main geometric symbols does the ASME Y14.5 standard define?**  
The ASME Y14.5 standard defines 14 main geometric symbols organized into five categories: 4 form, 3 orientation, 2 location, 2 profile, and 2 runout, plus a concentricity symbol eliminated in the 2018 revision.

**2. What maximum tolerance bonus can I obtain with the maximum material condition on a 10 mm / 0.394 in hole?**  
With a 10 mm ±0,05 mm / 0.394 in ±0.002 in hole and a position tolerance of 0,1 mm / 0.004 in Ⓜ, the maximum bonus when the hole is produced at its largest diameter (10,05 mm / 0.396 in) is 0,05 mm / 0.002 in, raising the total tolerance to 0,15 mm / 0.006 in.

**3. What is the fundamental difference between the straightness and flatness symbols regarding the tolerance zone?**  
Straightness applied to a surface controls each linear element separately, while flatness controls the entire surface within a plane of 0,05 mm / 0.002 in thickness. If straightness is applied to an axis, the tolerance zone is a cylinder of defined diameter, for example ⌀ 0,03 mm / 0.0012 in.

**4. In which cases is the tangent plane modifier Ⓣ used?**  
The Ⓣ modifier is applied when it is desired to control only the plane that touches the highest points of a surface, ignoring valleys up to 0,1 mm / 0.004 in deep. It is useful on bearing surfaces where actual contact occurs at peaks, such as mounting bases.

**5. What does the projected tolerance zone Ⓟ represent in a threaded hole?**  
The projected tolerance zone Ⓟ of 15 mm / 0.59 in indicates that the perpendicularity tolerance is evaluated over a fictitious extension of 15 mm / 0.59 in above the surface, simulating the presence of the bolt that will pass through the assembly.

**6. Does ASME Y14.5 allow controlling symmetry without the old symmetry symbol?**  
Yes. Symmetry was eliminated in the 2009 revision and is now controlled using surface profile or position. A profile control of 0,1 mm / 0.004 in with respect to a median datum plane ensures equivalent functional symmetry without the ambiguity of the original symbol.

## Sources Consulted

- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
