---
title: "Datum references GDT drawings"
sidebar:
  label: "Datum references GDT drawings"
description: "Technical reference: Datum references GDT drawings"
keywords: ["GDT datum reference frame primary secondary", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "datum-references"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Definition
A datum reference is a geometric feature of a part (point, line, plane, hole, or set of surfaces) that is used as a basis to define nominal geometry and to measure actual dimensional conformity. In GD&T, datums establish the origin of spatial relationships and are essential to ensure assembly and functionality. A datum is not a tolerance, but an immutable reference element from which all dimensions and geometric tolerances originate.

## Fundamental principles
The guiding principle is that every part must mate with others, so functional datums reflect the mounting surfaces. A datum reference is not necessarily the manufacturing surface; often design datums differ from production datums to optimize costs. The theory of degrees of freedom states that every free rigid body has six possible displacements: three translations and three rotations. Datum references are selected to constrain these degrees in a hierarchical order: primary, secondary, and tertiary.

## Types of datum references
- **Plane datum:** flat surface considered ideal. Controls orientation and location.
- **Axis datum:** centerline of a cylinder or hole. Common in rotational parts.
- **Point datum:** intersection of planes or center of a sphere. Used in tooling.
- **Compound datum:** combination of several features (e.g., two holes) that form a common datum.
- **Datum target:** designated areas on an irregular surface to simulate support points in inspection, indicated by a target symbol.

## Standard symbology
| Symbol | Meaning | Typical application |
| --- | --- | --- |
| ![Filled triangle](https://roymech.org/images/datum_symbol.gif) ISO datum symbol (filled or open triangle on leader line) | Identification of datum feature | Plane, axis, or median plane |
| ![Datum target](https://roymech.org/images/datum_target.gif) Datum target symbol | Defined support point on the part | Forgings, castings |
| Ⓜ Maximum Material (MMR) | Requirement applicable to datum or tolerance | Assemblies with clearance |
| Ⓛ Least Material (LMR) | Requirement for critical thicknesses | Thin walls |
| CZ (Common Zone) | Common tolerance for multiple separate features | Groups of holes |

## Datum reference frame
The datum reference system is structured in three levels:

- **Primary datum (A):** constrains the most critical degrees of freedom. Usually the surface with the largest area or the one that establishes the main orientation. Typically controls 3 degrees (e.g., a primary plane eliminates one translation and two rotations).
- **Secondary datum (B):** reduces additional degrees once the primary is fixed. Generally a surface perpendicular to A. Controls 2 degrees (remaining translation and rotation in the perpendicular plane).
- **Tertiary datum (C):** eliminates the last degree of freedom. A third surface at 90° to the previous ones or a hole/locator. Provides the final translational constraint.

The frame is declared in the feature control frame as **|A|B|C|** , read from left to right according to priority.

## Selection of datum planes
Incorrect selection of datums is the most common cause of non-conformities in GD&T. The following guidelines are followed:

1. **Functionality first:** the surfaces that contact other components in the assembly are the natural candidates.
2. **Accessibility:** datums must be accessible both in production and inspection.
3. **Repeatability:** large and stable surfaces reduce measurement uncertainty.
4. **Derived tolerances:** when functional datums are not practical to manufacture, a tolerance analysis is performed to define equivalent machining datums.

## Controlled degrees of freedom
The following table summarizes the constraint capacity of the most common datum types. A primary plane with dimensions ≥ 50 mm / 1.97 in equivalent diameter is usually sufficient for stable inspection.

| Datum type | Translations constrained | Rotations constrained | Degrees controlled | Minimum dimensional example |
| --- | --- | --- | --- | --- |
| Primary plane (surface A) | 1 (Z) | 2 (u, v) | 3 | 50 mm x 50 mm / 1.97 in x 1.97 in |
| Secondary plane (B) | 1 (X) | 1 (w) | 2 | 25 mm x 25 mm / 0.98 in x 0.98 in |
| Tertiary plane (C) | 1 (Y) | 0 | 1 | 15 mm x 15 mm / 0.59 in x 0.59 in |
| Primary axis (cylinder A) | 2 (X, Y) | 2 (u, v) | 4 | Diameter 20 mm / 0.79 in, length 30 mm / 1.18 in |

## Real application examples
**Centrifugal pump housing:** the suction flange plane is designated datum A (primary), the concentric pilot hole datum B (secondary), and a through hole datum C (tertiary). The A|B|C frame ensures concentricity between impeller and housing.

**Engine block:** the crankshaft bearing surfaces are datums A and B (bedplate planes), while the connecting rod bushings reference a common axis C. This strategy allows controlling parallelism between cylinders and crankshaft within 0.05 mm / 0.002 in.

## Comparison between ISO and ANSI systems
| Aspect | ISO 5459:2011 | ASME Y14.5-2018 |
| --- | --- | --- |
| Datum designation | Filled or open triangle on datum leader | Filled triangle with letter in square |
| Material modifiers | Ⓜ, Ⓛ applicable to datum | Ⓜ, Ⓛ, and virtual condition modifier |
| Concept of "datum feature simulator" | Defined as "real contact situation" | Perfect theoretical simulator |
| Simultaneous requirements | CZ (common zone) for multiple tolerances | Simultaneous requirement by default |
| Treatment of datum targets | Indicated with target symbol and implied coordinates | Contact area diameter required, e.g., "⌀12 / ⌀0.47 in" |

## FAQ
1. **How many degrees of freedom does a primary plane datum constrain?**  
   A primary plane datum constrains exactly 3 degrees of freedom: 1 translation perpendicular to the plane and 2 rotations about axes contained in it.

2. **What is the difference between a functional datum and a manufacturing datum?**  
   A functional datum reflects the assembly function, while the manufacturing datum is chosen to facilitate machining. Conversion between them requires a tolerance analysis with typical deviations of 0.2 mm / 0.008 in.

3. **What is the minimum recommended diameter for a point-type datum target in CMM inspection?**  
   A contact diameter of at least 12 mm / 0.47 in is recommended for medium-sized parts (between 200 mm / 7.87 in and 500 mm / 19.69 in) to ensure repeatability.

4. **Can a datum be a center line without associated material?**  
   Yes, a datum can be a center line (median plane) of a slot or a width feature. It must be indicated with the datum symbol attached to the corresponding dimension line.

5. **In what order are the datums read in the A|B|C reference frame?**  
   They are read from left to right as primary, secondary, and tertiary. For example, A|B|C means A constrains more degrees, then B, and finally C.

6. **What typical error occurs when omitting the tertiary datum?**  
   Omitting the tertiary datum leaves the last translational degree of freedom uncontrolled, which can cause a maximum batch displacement equal to the unassigned position tolerance, typically 0.5 mm / 0.020 in for non-critical parts.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/beams-fixed-both-ends-support-loads-deflection-d_809.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
