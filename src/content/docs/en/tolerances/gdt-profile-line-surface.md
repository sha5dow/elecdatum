---
title: "GDT Profile of line and surface"
sidebar:
  label: "GDT Profile of line and surface"
description: "Technical reference: GDT Profile of line and surface"
keywords: ["GDT profile line surface tolerance", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "profile"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## General description
The profile of line and surface tolerance defines a uniform tolerance zone that follows the nominal shape of a feature. A geometric control is used to limit the deviation of the actual surface from the exact theoretical geometry defined by basic dimensions. The tolerance zone consists of two equidistant contours — two curves for profile of line and two surfaces for profile of surface — separated by the total tolerance value. This control can be applied to any shape, including open and closed contours, and is the only means to simultaneously control form, orientation, and, when datum references are used, also the location of a feature.

## Symbols and specification
The feature control frame for profile of line consists of a curve-shaped arc symbol (⌒) followed by the tolerance value and optionally datum references. For profile of surface the symbol is a closed arc (⌓). The tolerance is always interpreted as a bilateral zone of equal distribution unless otherwise indicated.

| Element | Description |
|---|---|
| Profile of line symbol | ⌒ |
| Profile of surface symbol | ⌓ |
| Zone modifier | Ⓤ (unilateral, ASME) / UZ (ISO) to indicate unequal distribution |
| Default tolerance zone | Bilateral equal, centered on true profile |

## Tolerance tables by manufacturing grade
The following table relates the most common manufacturing processes with the IT tolerance grade they can achieve under normal conditions, and translates that grade to a typical profile tolerance for a nominal dimension between 18 mm and 30 mm (0.71 in to 1.18 in). The values are based on ISO fundamental tolerances for that size range.

| Process | Typical IT grades | Profile tolerance (mm / in) |
|---|---|---|
| Lapping and honing | IT4 – IT5 | 0,006 mm – 0,009 mm / 0.00024 in – 0.00035 in |
| Cylindrical grinding | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Surface grinding | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Diamond turning | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Diamond boring | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Broaching | IT6 – IT7 | 0,013 mm – 0,021 mm / 0.00051 in – 0.00083 in |
| Reaming | IT7 – IT8 | 0,021 mm – 0,033 mm / 0.00083 in – 0.00130 in |
| Turning | IT8 – IT10 | 0,033 mm – 0,084 mm / 0.00130 in – 0.00331 in |
| Boring | IT8 – IT10 | 0,033 mm – 0,084 mm / 0.00130 in – 0.00331 in |
| Milling | IT9 – IT11 | 0,052 mm – 0,130 mm / 0.00205 in – 0.00512 in |
| Planing and shaping | IT10 – IT11 | 0,084 mm – 0,130 mm / 0.00331 in – 0.00512 in |
| Drilling | IT11 – IT12 | 0,130 mm – 0,210 mm / 0.00512 in – 0.00827 in |

When the profile is applied to a large surface or a complex part, the nominal size must be considered to select the appropriate IT grade, since absolute tolerances increase with dimension.

## Interpretation according to ASME and ISO
Both ASME Y14.5 and ISO 1101 share the fundamental concept of the profile tolerance zone, although they differ in the notation of unequal tolerance distributions and some modifiers.

| Aspect | ASME Y14.5 | ISO 1101 |
|---|---|---|
| Default tolerance | Bilateral equal | Bilateral equal |
| Unilateral distribution | Modifier Ⓤ followed by a value indicating the thickness in the direction of extra material | Symbol UZ followed by the zone value in one direction and the total |
| "All around" indication | Circle at the leader intersection | Same, with option of "all over" (double circle) |
| Datum references in profile without datum | Controls only form | Controls only form |
| Application to a composite surface | Allowed with "all over" or multiple profiles | Profile of surface can be combined with "CZ" (common zone) for multiple surfaces |

## Real application examples
- Camshaft cam: a profile of surface with tolerance 0.1 mm / 0.004 in controls the functional shape that determines the valve opening diagram, referenced to the shaft journals.
- Airplane wing contour: the aerodynamic profile is controlled with a profile of line tolerance of 0.5 mm / 0.020 in to ensure laminar flow and the expected performance, without datum references in the individual cross sections.
- Pump housing seal joint: profile of surface with 0.05 mm / 0.002 in on the flange ensures uniform compression of the O-ring, referenced to the mounting surface.
- Automobile body panel: profile of line with a value of 1.5 mm / 0.06 in is applied along the edge of the fender to control appearance and fit with adjacent parts, using the vehicle datum system.
- Injection mold: the profile of surface of the cavity with 0.03 mm / 0.0012 in ensures the precise 3D geometry of the plastic part, referenced to the mold closing planes.

## Frequently asked questions (FAQ)
- **What profile tolerance can be expected from a surface grinding process?** A typical surface grinding can maintain a profile within 0.013 mm / 0.00051 in (IT6 grade) for nominal dimensions between 18 mm and 30 mm / 0.71 in–1.18 in, although under optimal conditions 0.009 mm / 0.00035 in can be achieved.
- **When is profile of line used instead of profile of surface?** Profile of line is applied to individual cross sections of a feature, such as the edge of a sheet metal part with a tolerance of 0.2 mm / 0.008 in; profile of surface covers the entire three-dimensional shape and is used when the entire surface must be controlled with a single frame of reference, for example a tolerance of 0.5 mm / 0.020 in on the face of a plastic panel.
- **How is a profile tolerance with datum reference interpreted?** With datum references, the tolerance zone of 0.08 mm / 0.0031 in is fixed in position and orientation relative to those datums, controlling both form deviation and location of the actual profile; without datums only form is controlled.
- **What is the difference between an equal bilateral zone and a unilateral zone in profile of surface?** In an equal bilateral zone, a tolerance of 0.1 mm / 0.004 in is split into ±0.05 mm / 0.002 in on each side of the nominal profile; in a unilateral zone the total value of 0.1 mm / 0.004 in is placed only toward the outside or inside from the true profile.
- **What profile tolerance is realistic for a seal joint on a milled aluminum flange?** Milling an aluminum flange with a size around 100 mm / 4 in can achieve a profile of surface tolerance of 0.1 mm / 0.004 in to 0.15 mm / 0.006 in, equivalent to an IT9-IT10 grade.
- **Is it possible to measure the profile of a surface with a coordinate measuring machine?** Yes, contact probing measurement can evaluate profile of surface deviations less than 0.01 mm / 0.0004 in, although the machine uncertainty must be at least 5 times better than the tolerance to be verified.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
