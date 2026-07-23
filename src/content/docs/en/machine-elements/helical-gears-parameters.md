---
title: "Helical gears parameters"
sidebar:
  label: "Helical gears"
description: "Technical reference: Helical gears parameters"
keywords: ["helical gear helix angle parameters", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "helical-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Geometric Parameters
The main geometric parameter of a helical gear is the helix angle (β), whose standard commercial value ranges from 15° to 45° / 0.26 to 0.79 rad, with 20° and 30° being the most common in general industry and 45° in perpendicular shaft crossings. The relationship between the transverse circular pitch (Pt) and the normal circular pitch (Pn) is given by Pn = Pt × cos(β). Consequently, the normal module (mn) and the transverse module (mt) maintain the same relationship: mn = mt × cos(β). The normal pressure angle (αn) is standardized at 14.5° and 20°, with the latter being predominant for power applications.

| Parameter               | Formula             | Unit           |
| :---------------------- | :------------------ | :------------- |
| Helix angle (β)         | —                   | 15°–45° / 0.26–0.79 rad |
| Normal circular pitch (Pn) | Pn = Pt × cos(β)    | mm / in        |
| Normal module (mn)      | mn = mt × cos(β)    | mm / in        |
| Pressure angle (αn)     | —                   | 20° / 0.35 rad |
| Number of teeth (Z)     | —                   | 10 to 48 teeth |

## Standard Dimensions
The standard commercial offering is governed by the diametral pitch (DP), with values of 16, 20, 24, 32 and 48 teeth per inch, which corresponds to modules from 1.59 mm to 0.53 mm. The following table correlates the common diametral pitches with their metric modules and corresponding circular pitches.

| Diametral pitch (DP) | Module (m)                   | Circular pitch (Pc)          |
| :------------------- | :--------------------------- | :--------------------------- |
| 16                   | 1.59 mm / 0.063 in           | 4.99 mm / 0.196 in           |
| 20                   | 1.27 mm / 0.050 in           | 3.99 mm / 0.157 in           |
| 24                   | 1.06 mm / 0.042 in           | 3.32 mm / 0.131 in           |
| 32                   | 0.79 mm / 0.031 in           | 2.49 mm / 0.098 in           |
| 48                   | 0.53 mm / 0.021 in           | 1.66 mm / 0.065 in           |

## Load Capacities
A helical gear supports between 30% and 50% more tangential load than a spur gear of equivalent module and material, due to the progressive tooth overlap. Bending stress at the tooth root is estimated using the modified Lewis formula: σ = (Ft × Ko × Kv × Ks) / (b × Y × mn), where Ft is the tangential load, b the face width, Y the form factor and mn the normal module. The more gradual contact reduces dynamic load (Kv close to 1), improving operating smoothness and pressure distribution on the surface.

| Load type                  | Suggested load capacity              | Typical safety factor |
| :------------------------- | :----------------------------------- | :-------------------- |
| Uniform service            | 100 % of yield strength / 100 %      | 2.0 to 3.0            |
| Moderate shocks            | 75 % of yield strength / 75 %        | 3.0 to 5.0            |
| Severe shocks              | 50 % of yield strength / 50 %        | 5.0 to 8.0            |
| Point static loads         | Up to 150 % of strength / Up to 150 % | 1.0 to 1.2            |

## Selection Criteria
The balance between the axial load that the bearings must support and the transmission smoothness is the fundamental design criterion. A helix angle of 45° / 0.79 rad generates an axial load exactly equal to the transmitted tangential load. In parallel-shaft gears, low angles (15° to 20°) are preferred to minimize thrust, while high angles (30° to 45°) are selected for transmissions where silence and absence of vibrations are critical. Material selection and pressure angle also depend on the required torque and operating speed.

| Criterion              | Low helix angle (15°–20°)    | High helix angle (30°–45°)     |
| :--------------------- | :--------------------------- | :----------------------------- |
| Resulting axial load   | Low                          | High (requires thrust bearings) |
| Operating smoothness   | Good                         | Excellent                      |
| Noise level            | Moderate                     | Very low                       |
| Recommended speed      | High (> 3000 rpm / 3000 rpm) | Medium or low (< 2000 rpm / 2000 rpm) |

## Assembly Considerations
The center distance tolerance must be maintained within ±0.05 mm / ±0.002 in for a fine diametral pitch helical gear mesh. The direction of the helix (right or left) in a pair must be opposite for parallel-shaft transmissions, thus managing the generated axial load. Angular contact ball bearings or tapered roller bearings are mandatory to absorb the thrust for angles above 20° / 0.35 rad. Lubrication must ensure the formation of an elastohydrodynamic (EHD) film even in the axial sliding zone, requiring oils with extreme pressure (EP) additives for heavy loads.

## Selection Tables by Application
The following tables offer a quick selection guide based on standard diametral pitches and materials available for different industrial sectors.

| Typical application              | Suggested teeth | Diametral pitch (DP) | Recommended material            |
| :------------------------------- | :-------------- | :------------------ | :------------------------------ |
| Instrumentation transmission     | 48              | 48                  | Stainless steel AISI 304        |
| Light hydraulic pumps            | 16 to 20        | 20                  | Alloy steel 4140                |
| Electric motors (1–10 HP)        | 24 to 32        | 16                  | Carbon steel 1045               |
| Continuous conveyors             | 13 to 18        | 16                  | Alloy steel 8620, case-hardened  |

| Load service                        | Helix angle (β) | Pressure angle (αn) | Material and surface hardness     |
| :---------------------------------- | :-------------- | :------------------ | :-------------------------------  |
| High power, severe shocks           | 20°–30° / 0.35–0.52 rad | 20° / 0.35 rad      | Alloy steel, > 60 HRC / > 60 HRC  |
| High continuous speed               | 15°–20° / 0.26–0.35 rad | 20° / 0.35 rad      | Carbon steel, > 50 HRC / > 50 HRC |
| Quiet, low shock load               | 30°–45° / 0.52–0.79 rad | 20° / 0.35 rad      | Stainless steel, unhardened        |

## Frequently Asked Questions
### Which helix angle minimizes axial load in parallel-shaft transmissions?
A low helix angle of 15° / 0.26 rad reduces the axial load to approximately 27% of the tangential load, being the technical option to minimize thrust in high-speed reducers.

### What is the practical difference between normal and circular pitch in tool design?
The normal circular pitch of a gear with module 1.27 mm / 0.050 in is 3.99 mm / 0.157 in, while its transverse pitch is larger; the cutter guide is aligned to the normal pitch because the cutting tool follows the tooth profile.

### Can helical pinions with different helix angles mesh together?
They only mesh correctly if the algebraic sum of their helix angles equals the angle between the shafts, commonly 90° / 1.57 rad for crossed-shaft transmissions.

### How does an increase in helix angle affect tooth load capacity?
An increase in angle from 15° to 30° / 0.26 to 0.52 rad increases the effective contact line length and the load the tooth can support by approximately 40%, although at the cost of generating an axial thrust corresponding to 57% of the tangential force.

### What surface hardness do helical gears require for heavy duty?
To withstand contact pressures above 1100 MPa / 160 ksi, the teeth must be case-hardened and tempered to achieve a surface hardness of 58 to 62 HRC / 58 to 62 HRC in the outer layer, maintaining a tough core around 35 HRC.

### Why are 45° / 1.57 rad helical gears common in rolling mills?
Because a helix angle of 45° / 1.57 rad makes the axial force equal to the tangential force, allowing them to cancel each other out or be managed symmetrically in double-helix configurations, which doubles the load capacity for the same bending load at the root.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gears-d_1307.html
- **mcmaster.com**: https://www.mcmaster.com/products/helical-gears/

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gears-d_1307.html
- **mcmaster.com**: https://www.mcmaster.com/products/helical-gears/
