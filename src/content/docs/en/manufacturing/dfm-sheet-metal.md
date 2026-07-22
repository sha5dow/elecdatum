---
title: "DFM rules for sheet metal"
sidebar:
  label: "DFM rules for sheet metal"
description: "Technical reference: DFM rules for sheet metal"
keywords: ["DFM design for manufacturing sheet metal rules", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "dfm-sheet-metal"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Overview

The design for manufacturing (DFM) rules for sheet metal establish guidelines so that parts can be produced consistently, economically, and without defects, taking advantage of the capabilities of cutting, bending, punching, and deep drawing processes. The fundamental principles drawn from good industrial design practices recommend simplifying geometry, reducing the number of components whenever feasible, standardizing repetitive elements (such as hole diameters or thread types), and planning part orientation for automated handling. In the case of deep drawing, rule-based analysis indicates that material formability, punch-to-die clearance, corner radii, and blank holding force are critical to avoid tearing, wrinkling, or fractures.

## Applicable Materials

| Material | Typical thickness (mm / in.) | Yield strength (MPa / ksi) | Tensile strength (MPa / ksi) | Common applications |
| --- | --- | --- | --- | --- |
| Carbon steel (SAE 1008/1010) | 0,5 – 6,0 mm / 0,020 – 0,236 in | 170 – 310 MPa / 25 – 45 ksi | 280 – 420 MPa / 41 – 61 ksi | Brackets, enclosures, automotive panels |
| Stainless steel AISI 304 | 0,5 – 3,0 mm / 0,020 – 0,118 in | 205 – 310 MPa / 30 – 45 ksi | 515 – 700 MPa / 75 – 102 ksi | Food equipment, tanks, decorative components |
| Aluminum 5052-H32 | 0,5 – 4,0 mm / 0,020 – 0,157 in | 195 MPa / 28 ksi | 230 – 275 MPa / 33 – 40 ksi | Electronic enclosures, lightweight panels, signage |
| Aluminum 6061-T6 | 0,5 – 5,0 mm / 0,020 – 0,197 in | 276 MPa / 40 ksi | 310 – 380 MPa / 45 – 55 ksi | Structural components, frames, welded parts |
| Copper C110 | 0,3 – 3,0 mm / 0,012 – 0,118 in | 69 – 210 MPa / 10 – 30 ksi | 210 – 310 MPa / 30 – 45 ksi | Electrical contacts, screens, conductive parts |
| Brass C260 | 0,3 – 3,0 mm / 0,012 – 0,118 in | 105 – 380 MPa / 15 – 55 ksi | 310 – 480 MPa / 45 – 70 ksi | Hinges, connectors, decorative parts |

## Operating Parameters

| Parameter | Recommendation (ratio or absolute value) | Additional notes |
| --- | --- | --- |
| Minimum bend radius (mild steel) | ≥ 1,0 × thickness | Example: for 1,5 mm / 0.059 in sheet, radius ≥ 1,5 mm / 0.059 in |
| Minimum bend radius (aluminum 5052) | ≥ 1,5 – 2,0 × thickness | Avoids cracking; orient bend perpendicular to rolling direction |
| Minimum distance between hole and edge | ≥ 2,0 × thickness + hole diameter | On 2 mm / 0.079 in sheet with 5 mm / 0.197 in hole, distance ≥ 9 mm / 0.354 in |
| Minimum flange height | ≥ 4,0 × thickness | To ensure stable bending without flange distortion |
| Minimum hole diameter (punching) | ≥ 1,0 × thickness (up to 1,5 × thickness for hard steels) | On 3 mm / 0.118 in sheet, hole ≥ 3 mm / 0.118 in |
| Maximum drawing ratio | Db / Dp ≤ 2,0 | Where Db = blank diameter, Dp = punch diameter; for non-circular shapes use equivalent areas |
| Die corner radius (drawing) | 5 – 10 × sheet thickness | Smaller radius causes wrinkling or fracture due to abrupt direction change |
| Punch profile radius (drawing) | 4 – 10 × sheet thickness | Too sharp radius causes extreme thinning and cracks near the base |
| Punch-to-die clearance (drawing) | > sheet thickness, not exceeding 1,4 × thickness | Excessive clearance allows wall wrinkling |
| Blank holding force | Sufficient to avoid flange wrinkling, without unnecessarily increasing friction | Adjust by trial; excess increases drawing force |

## Typical Tolerances

| Feature | Process | General tolerance (mm / in.) |
| --- | --- | --- |
| Linear dimensions (≤ 100 mm) | Laser cutting / punching | ±0,15 mm / ±0.006 in |
| Linear dimensions (100 – 500 mm) | Laser cutting / punching | ±0,3 mm / ±0.012 in |
| Hole position | Punching with die | ±0,1 mm / ±0.004 in |
| Hole diameter (≤ 10 mm) | Punching | ±0,05 mm / ±0.002 in |
| Bend angle | Press brake | ±1° |
| Flange length after bending | Bending | ±0,5 mm / ±0.020 in per flange |
| Outside diameter of drawn cup | Deep drawing | ±0,3 mm / ±0.012 in for diameters < 50 mm |
| Height of drawn cup | Deep drawing | ±0,5 mm / ±0.020 in |

## Advantages

*   Reduces the number of secondary operations (welding, machining) by integrating multiple functions into a single sheet metal part.
*   Decreases manufacturing time and tooling costs by standardizing holes, bend radii, and tolerances.
*   Facilitates assembly automation and inspection when clear positioning references are designed.
*   Improves repeatability and quality by following rules that avoid excessive material deformation and stress concentration.
*   Allows optimization of raw material utilization (nesting) and reduces sheet waste.
*   Increases punch and die life by respecting proper thickness ratios and clearances.

## Limitations

*   Forming capability is limited by material type; high-strength alloys may exhibit high springback and require angular compensations of 2 to 5 degrees.
*   Sharp internal corners are not feasible; the minimum bend radius imposes geometric restrictions.
*   Deep drawing in a single stage cannot exceed a drawing ratio of approximately 2; deeper parts require progressive draws and intermediate annealing.
*   Thickness variation is unavoidable: localized thinning in the punch area during drawing can reach 10-20 % of the original thickness.
*   Dimensional tolerances in bending are less accurate than in machining; tolerance accumulation in sheet metal assemblies must be carefully analyzed.

## Selection Guide

| Design requirement | Recommended process | Key criterion |
| --- | --- | --- |
| Flat parts or single bend | Laser/punch cutting + bending | Thickness ratios, bend radius ≥ 1t, flange height ≥ 4t |
| Simple cylindrical cup shape, moderate depth (h/d ≤ 1) | Single-stage deep drawing | Drawing ratio ≤ 2, die radii 5-10t, proper clearance |
| Deep cups or complex shapes (rectangular) | Progressive or multi-step drawing | Sequence analysis, intermediate annealing if necessary |
| High volume of small parts with many features | Progressive die | Station spacing, constant pitch, carrier strip design |
| Low-rigidity or large-surface parts | Bending with stiffening ribs or bead drawing | Incorporate reinforcements to prevent buckling deformation |
| Welded or assembled parts | Design tabs, centering flanges or weld points | Minimize additional fasteners; ensure electrode access |

## FAQ

### What is the minimum bend radius for mild steel?

The minimum bend radius for low-carbon steel (SAE 1008/1010) is 1,0 times the sheet thickness, which equals 1,5 mm / 0.059 in for a 1,5 mm thick sheet. This ratio avoids cracking on the outer surface of the bend and is valid when the rolling direction is perpendicular to the bending axis.

### What is the minimum distance between a hole and the part edge?

To avoid deformation or tearing of the material, the distance from the center of a hole to the nearest edge must be at least 2,0 times the sheet thickness plus the hole diameter. On a 2 mm / 0.079 in sheet with a 5 mm / 0.197 in hole, the minimum distance to the edge is 9 mm / 0.354 in.

### What is the maximum draw depth achievable in a single operation?

The drawing ratio (blank diameter / punch diameter) must not exceed 2,0 in a single stage. For a cylindrical cup with a 50 mm / 1.97 in punch diameter, the maximum usable blank is 100 mm / 3.94 in, which translates to a final height of approximately 30-35 mm / 1.18-1.38 in, depending on bottom radius and thickness.

### How is springback compensated in bending operations?

Typical springback in mild carbon steels ranges from 2° to 5°, so the die bending angle must be overbent by that amount. In 5000 series aluminums, elastic recovery can be greater, between 3° and 8°, requiring additional adjustment of the tool angle or punch overtravel.

### What sheet thicknesses are commonly used in sheet metal manufacturing?

The most common thicknesses for sheet metal parts range from 0,5 mm / 0.020 in to 6,0 mm / 0.236 in. Below 0,5 mm the material is considered foil, while above 6 mm parts are usually considered plates and are processed by other methods such as oxyfuel cutting or machining.

### What die radius is recommended for drawing stainless steel?

The die corner radius in a drawing operation for stainless steel 304 should be 5 to 10 times the sheet thickness. With a thickness of 1,0 mm / 0.039 in, the appropriate radius would be between 5 mm and 10 mm / 0.197 in and 0.394 in. Smaller radii cause fractures due to abrupt change in material flow direction.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/paper-drawing-sizes-d_140.html
- **efunda.com**: https://www.efunda.com/designstandards/
- **manufacturingguide.com**: https://www.manufacturingguide.com/sv/iindep/design-manufacturing
