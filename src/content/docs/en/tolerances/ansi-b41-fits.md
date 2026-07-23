---
title: "ANSI B4.1 fits RC LC FN"
sidebar:
  label: "ANSI B4.1 fits RC LC FN"
description: "Technical reference: ANSI B4.1 fits RC LC FN"
keywords: ["ANSI B4.1 RC LC LN FN clearance fits", "tolerances"]
category: "tolerances"
topic: "ansi-system"
subcategory: "ansi-b4"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

Standardized fits according to ANSI B4.1 define the resulting clearance or interference between assembled cylindrical parts. The standard establishes three main categories of fit: clearance fits (RC, *Running and Sliding Fits*), location or transition fits (LC, *Location Fits*), and interference or force fits (FN, *Force and Shrink Fits*). Each category is subdivided into classes that define the magnitude of clearance or interference for a given diameter range, selected according to the precision requirements, relative motion, and assembly method of the application.

## Classification of ANSI Fits

The ANSI B4.1 standard groups fits into three functional categories, identified by letters followed by a number indicating the precision class. A lower class number generally corresponds to tighter tolerances and more controlled clearances or interferences. The ANSI designation specifies the resulting fit type, unlike the ISO system which separately codes the hole and shaft tolerance. Hole basis is the predominant practice, although the standard allows shaft basis.

| Category | ANSI Designation | Description | Typical Applications |
|---|---|---|---|
| Clearance Fits (RC) | RC1 to RC9 | The hole diameter is larger than the shaft diameter. There is a clearance or play that allows free relative movement. The magnitude of clearance increases with class number. | Plain bearings, pistons in cylinders, freely rotating shafts, slides, maneuvering organs. |
| Location Fits (LC) | LC1 to LC11 | Provide a small clearance or a slight interference, designed to maintain location accuracy between fixed parts that may require assembly and disassembly. | Guide bushings, centering flanges, couplings, gear hubs that must remain concentric. |
| Interference Fits (FN) | FN1 to FN5 | The shaft diameter is larger than the hole diameter. A contact pressure is generated that prevents relative movement. The interference increases with class number. | Bearing mounting, gear rings, press-fit bushings, force couplings for torque transmission. |

RC fits cover applications from large clearance (RC8, RC9) for parts with thermal expansion or corrosion, to minimum clearance for precision guides (RC1, RC2). LC fits with low classes offer small clearances, while high classes produce slight interferences for exact centering. FN fits range from light interferences mountable by pressing (FN1) to interferences requiring thermal expansion for assembly (FN5).

## Interpretation of Designations

The designation of an ANSI B4.1 fit consists of the category and a class number. For example, **RC 4** indicates a clearance fit of class 4. Unlike the ISO system (which uses codes such as H8/f7 to define hole and shaft tolerances separately), the ANSI nomenclature directly defines the functional hole-shaft pair. The designer selects the fit designation based on the nominal diameter and desired class; the numerical values of maximum and minimum clearance are obtained from the standard tables for that diameter range.

In the ISO system, the uppercase letter designates the hole tolerance position and the lowercase letter the shaft tolerance (hole basis system H). In ANSI, the individual tolerance of each part is not explicitly specified in the fit designation. However, the underlying hole and shaft tolerances are derived from standard tolerance grades. The part designer must consult the dimensional tables of ANSI B4.1 for each class and nominal diameter to assign the maximum and minimum limits to each component.

## Tolerance Tables by Grade

Manufacturing processes have an intrinsic capability to achieve certain tolerance grades. Although the exact dimensional grades depend on part size and operator skill, the following table relates common machining processes to the ANSI tolerance grades they can produce under normal conditions. A lower (tighter) grade implies a narrower tolerance zone and therefore a more precise process.

| ANSI Grade | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|
| Lapping and Honing | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |   |
| Cylindrical Grinding |   | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |
| Surface Grinding |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |   |
| Diamond Turning |   |   | ✓ | ✓ | ✓ | ✓ |   |   |   |   |
| Diamond Boring |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |
| Broaching |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |   |   |
| Reaming |   |   |   | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |   |
| Conventional Turning |   |   |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |
| Conventional Boring |   |   |   |   | ✓ | ✓ | ✓ | ✓ | ✓ |   |
| Milling |   |   |   |   |   |   | ✓ | ✓ | ✓ | ✓ |
| Planing and Shaping |   |   |   |   |   |   | ✓ | ✓ | ✓ | ✓ |
| Drilling |   |   |   |   |   |   | ✓ | ✓ | ✓ | ✓ |

*Note: The marks (✓) indicate the range of tolerance grades normally achievable. Grade 4 typically corresponds to tolerances below 3 µm / 0.00012 in for small diameters, while grade 13 may exceed 0.3 mm / 0.012 in in similar ranges.*

The selection of the manufacturing process to achieve a specific fit depends on the required ANSI class. For example, an RC 4 fit with highly controlled clearances will require processes in the range of grades 5 to 7 (grinding, broaching, or precision turning), while a looser RC 9 fit can be obtained with milling or even conventional turning, corresponding to grades 9 to 11.

## Examples of Real Application

**Clearance Fits (RC):**
A centrifugal pump shaft rotating inside a lubricated bushing requires an RC 5 or RC 6 fit. This provides between 25 µm / 0.0010 in and 75 µm / 0.0030 in of diametral clearance for a typical diameter of 50 mm / 1.97 in, sufficient for the lubricant film without sacrificing concentricity.

An internal combustion engine piston operates with an RC 7 or RC 8 fit, where the thermal expansion of the aluminum piston reduces the clearance when hot. The cold clearance may exceed 100 µm / 0.004 in for a diameter of 90 mm / 3.54 in, ensuring no seizure occurs at operating temperature.

**Location Fits (LC):**
The centering of a bearing cap on a split housing uses an LC 3 or LC 4 fit. With a diameter of 80 mm / 3.15 in, the centering flange and corresponding recess are machined with tolerances that produce a typical maximum clearance of 30 µm / 0.0012 in and a minimum clearance near zero, guaranteeing alignment of the bearing support.

An interchangeable guide bushing in a drilling fixture is mounted with an LC 5 or LC 6 fit to allow manual removal but without perceptible play during operation.

**Interference Fits (FN):**
The ring of a case-hardened gear is mounted on a steel core with an FN 2 fit. For a coupling diameter of 100 mm / 3.94 in, the diametral interference varies between 40 µm / 0.0016 in and 90 µm / 0.0035 in, requiring a hydraulic press or light heating of the hub for assembly.

A deep groove ball bearing ring mounted directly on a rotating shaft requires an FN 1 or FN 2 fit, depending on the load. The interference prevents circumferential fretting of the inner ring under rotating load.

## Comparison between ISO and ANSI Systems

Both systems, ISO 286 and ANSI B4.1, classify fits into the same three fundamental categories: clearance, transition, and interference. However, they differ in designation philosophy and the level of granularity of individual tolerances. The following table presents an approximate equivalence between common fit designations in one system and the other, for a hole basis system in a medium diameter range.

| ANSI B4.1 Designation | Category | Approximate ISO Equivalent (Hole Basis) | Typical Clearance/Interference Range for ∅ 50 mm / 1.97 in |
|---|---|---|---|
| RC 4 | Medium clearance for precision rotation | H7/f7 | +25 µm / +0.0010 in to +89 µm / +0.0035 in |
| RC 7 | Large clearance for free rotation | H9/e9 | +50 µm / +0.0020 in to +142 µm / +0.0056 in |
| LC 3 | Location with minimum clearance | H7/h6 | 0 to +41 µm / 0 to +0.0016 in |
| LC 6 | Location with slight interference | H7/k6 | −18 µm / −0.0007 in to +23 µm / +0.0009 in |
| FN 2 | Medium interference, press fit | H7/s6 | −87 µm / −0.0034 in to −27 µm / −0.0011 in |

The main operational difference lies in that the ANSI designation specifies the resulting fit (the hole-shaft assembly) as a single entity, while ISO separately codes the hole tolerance (e.g., H7) and the shaft tolerance (e.g., f7). The ISO standard also offers greater granularity in choosing tolerance grades (IT grades) and tolerance positions, allowing non-standard combinations for special cases. In contrast, ANSI classes are predefined combinations with complete tables of limit values for each diameter, simplifying selection in basic mechanical design. In North American industrial practice, ANSI designations (RC, LC, FN) are commonly used on shop drawings and component catalogs, while international technical documentation leans toward the ISO system.

## Frequently Asked Questions

### How many clearance fit classes does ANSI B4.1 define?
ANSI B4.1 defines 9 clearance fit classes, designated RC1 through RC9, where RC1 provides the minimum clearance for highest precision guides and RC9 the maximum clearance for conditions of dirt or extreme expansion.

### What is the typical diametral clearance of an RC 4 fit on a 25 mm / 1 in shaft?
An RC 4 fit on a nominal diameter of 25 mm / 1 in produces a minimum diametral clearance of approximately 12 µm / 0.0005 in and a maximum of 41 µm / 0.0016 in, suitable for precision rotation with lubrication.

### What maximum interference can be expected from an FN 2 fit on a 100 mm / 4 in diameter?
For a diameter of 100 mm / 3.94 in, an FN 2 medium interference fit produces a maximum diametral interference of approximately 90 µm / 0.0035 in, requiring pressing with considerable force or light heating of the hub.

### How does an ANSI LC 3 fit differ from an ISO H7/h6 fit?
Both provide very precise centering with minimum or zero clearance; however, LC 3 is an ANSI complete fit designation, while H7/h6 is the specific ISO combination of hole and shaft tolerances that produces a functionally equivalent result (maximum clearance of 41 µm / 0.0016 in for 50 mm diameter).

### What ANSI tolerance grade is necessary to achieve a location fit LC 5?
LC 5 fits require components to be manufactured with processes in an ANSI tolerance grade 6 to 7, corresponding to operations such as cylindrical grinding or broaching.

### How is a choice made between an RC fit and an LC fit for a guided shaft?
An LC fit is selected when the priority is location precision with force-free assembly (typical maximum clearance ≤ 25 µm / 0.001 in for small diameters). An RC fit is chosen when continuous free movement or rotation is the primary requirement, accepting larger clearances to guarantee the lubricant film and freedom of movement.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
