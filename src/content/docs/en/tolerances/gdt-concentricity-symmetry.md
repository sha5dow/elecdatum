---
title: "GDT Concentricity and Symmetry"
sidebar:
  label: "GDT Concentricity and Symmetry"
description: "Technical reference: GDT Concentricity and Symmetry"
keywords: ["GDT concentricity symmetry tolerance", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "concentricity-symmetry"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Overview

Concentricity and symmetry are geometric tolerances of location that control the position of the central axis (concentricity) or the median plane (symmetry) of a part relative to a reference datum feature. Both tolerances are used to ensure dynamic balance, assembly alignment, and interchangeability, although in modern practice they are often replaced by position or profile tolerances due to their greater ease of verification.

The tolerance zone for concentricity is a cylinder whose diameter equals the specified tolerance value; the derived axis of the part must lie entirely within this cylinder. For symmetry, the tolerance zone consists of two parallel planes separated by a distance equal to the tolerance value, and the actual median plane must lie between them.

## Symbol interpretation

The standardized symbols and their feature control frame contain the geometric characteristic symbol, the tolerance value, and when necessary, datum references. The most common representations are:

| System | Symbol | Visual description |
| --- | --- | --- |
| ASME Y14.5‑2018 | ⊗ | Circle with a cross inside (reticle) |
| ISO 1101 | ⊚ | Two concentric circles (double circumference) |

For symmetry, ASME uses a symbol composed of three parallel horizontal lines (thick center line flanked by two thin lines). ISO uses the same representation. The tolerance value is placed in the second cell of the feature control frame, expressed in millimeters (or inches per standard); for example, **0.02 mm / 0.0008 in** indicates a cylindrical zone of diameter 0.02 mm for concentricity, or a flat zone of 0.02 mm thickness for symmetry.

## Tolerances by machining grade

The capability of a process to achieve concentricity/symmetry tolerances is related to the ISO tolerance grade it can maintain. Typical ranges are given below for a reference shaft or surface with nominal diameter of 25 mm (1 in). The table is based on correspondences between processes and ISO grades according to ISO 286‑1.

| Process | ISO grades | Concentricity tolerance for Ø25 mm (mm / in) |
| --- | --- | --- |
| Lapping and honing | IT4–IT6 | 0.006–0.013 mm / 0.00024–0.00051 in |
| Cylindrical grinding | IT5–IT7 | 0.009–0.021 mm / 0.00035–0.00083 in |
| Precision turning | IT7–IT9 | 0.021–0.052 mm / 0.00083–0.00205 in |
| Milling | IT9–IT11 | 0.052–0.130 mm / 0.00205–0.00512 in |
| Drilling | IT10–IT12 | 0.084–0.210 mm / 0.00331–0.00827 in |

The values represent the tolerance range (cylindrical zone diameter or flat zone width) that can be reliably achieved with each process under normal production conditions. For larger parts, the absolute tolerance increases according to the tabulated values for IT grades; conversion to inches is rounded to five decimals.

## ISO vs ASME comparison

The comparison between the two main systems reveals normative and application differences that directly affect interpretation in the workshop.

| Aspect | ASME Y14.5‑2018 | ISO 1101 (GPS) |
| --- | --- | --- |
| **Normative status** | Reintroduced after absence in the 2009 edition | Continuously in effect |
| **Controlled element** | Median axis of opposed elements | Derived median line |
| **Tolerance zone** | Cylinder of diameter **t** (e.g., 0.025 mm / 0.001 in) | Cylinder of diameter **t** |
| **Datum requirement** | Mandatory; at least one axial datum | Mandatory |
| **Preferred application** | High-speed rotating parts | Static and slow-rotation parts |
| **Concentricity symbol** | ⊗ (circle with cross) | ⊚ (two concentric circles) |
| **Symmetry** | Symbol of three parallel lines; same zone logic | Same; used for median planes of keyways, etc. |

In practice, many designers replace concentricity/symmetry with position tolerances using the projected tolerance zone modifier, as these allow easier verification with functional methods (go/no-go gages) and offer greater tolerance margin.

## Real application examples

**30 mm diameter electric motor rotor shaft.** To ensure uniform magnetic air gap and avoid vibration, the rotor seat must be concentric with the support journals (datum A‑B). A concentricity tolerance of **0.015 mm / 0.0006 in** is specified, achievable by cylindrical grinding between centers (IT6). The inspection ensures that the center of the magnetic pack does not shift more than 0.0075 mm (0.0003 in) radially relative to the axis of rotation.

**Keyway for a key on a 40 mm diameter transmission shaft.** The key slot must be symmetric relative to the axis defined by the shaft end centers. A symmetry of **0.05 mm / 0.002 in** is prescribed, meaning the median plane of the slot can shift at most ±0.025 mm (±0.001 in) relative to the datum. This tolerance is verified with a dial indicator mounted on a centering fixture, taking measurements on both sides of the slot.

**Bearing housing in a split casing.** The two half-cylinders that house a bearing must be coaxial with each other and concentric with the base reference plane. A composite concentricity is applied: the manufacturer uses a position tolerance of **0.03 mm / 0.0012 in** (Ø0.03 mm) that simultaneously controls location and orientation, simplifying inspection compared to pure concentricity.

## Frequently Asked Questions

**1. What is the typical concentricity tolerance offered by cylindrical grinding?**  
For a 25 mm diameter shaft, cylindrical grinding can maintain a concentricity between **0.009 mm (0.00035 in) and 0.021 mm (0.00083 in)**, corresponding to grades IT5 to IT7.

**2. What numerical value should appear in the feature control frame for a symmetry of 0.08 mm?**  
The frame would indicate the symmetry symbol and the number **0.08**, which is equivalent to a flat zone of **0.08 mm / 0.00315 in** thickness; the actual median plane must lie within that zone relative to the specified datum.

**3. Why was concentricity removed from ASME Y14.5‑2009 and then reintroduced?**  
It was removed in 2009 due to the difficulty of measuring the "median of opposite points" and the preference for position; it was reintroduced in 2018 with measurement based on the functional envelope, but maintaining the classic symbol (⊗).

**4. How is concentricity related to the eccentricity measured by a dial indicator?**  
The measured eccentricity (TIR – Total Indicator Reading) is twice the radial offset; if an indicator registers **0.04 mm (0.0016 in)** of total variation, the concentricity (axis deviation) is **0.02 mm / 0.0008 in**.

**5. What is the minimum ISO grade to guarantee a symmetry of 0.1 mm in a keyway?**  
For a nominal width of 10 mm, grade **IT11** (tolerance 0.09 mm / 0.0035 in) or **IT10** (0.058 mm / 0.0023 in) can meet 0.1 mm; conventional milling achieves IT9‑IT11.

**6. Does the length of the part influence the concentricity tolerance?**  
Yes, the length/diameter ratio can cause angular deviation to amplify the error; a part 100 mm (3.94 in) long with a concentricity of **0.03 mm / 0.0012 in** requires the process to maintain very strict straightness, often an additional **0.005 mm / 0.0002 in** in the prior cylindrical turning.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
