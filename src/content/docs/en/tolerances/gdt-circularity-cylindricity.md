---
title: "GDT Circularity and Cylindricity"
sidebar:
  label: "GDT Circularity and Cylindricity"
description: "Technical reference: GDT Circularity and Cylindricity"
keywords: ["GDT circularity cylindricity roundness", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "circularity-cylindricity"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Overview
Circularity (roundness) controls the radial variation of a cross-section relative to a perfect circle, while cylindricity extends that control to the entire cylindrical surface, ensuring that the feature remains simultaneously round and straight along its axis. Both form tolerances are independent of size and do not require a datum, evaluating only the intrinsic geometric deviation of the part.

## Symbol and Designation
| Geometric characteristic | Symbol | Drawing designation |
| --- | --- | --- |
| Circularity | ○ | Control frame with circle symbol followed by tolerance value (e.g., ○ 0,02) |
| Cylindricity | ⌭ | Control frame with two parallel circles symbol followed by tolerance value (e.g., ⌭ 0,05) |

In the ISO system, both symbols are enclosed in a tolerance frame identical to that of ANSI/ASME Y14.5; the main difference lies in the default application rules (ISO independence principle vs. ASME Rule #1).

## Tolerance by Grades
The following table lists the standardized values for circularity/circular runout taken from ISO 2768-2 general tolerances, also usable as a comparative reference for cylindricity in the absence of particular specifications.

| Nominal diameter (mm / in) | Class H (fine) – Circularity / cylindricity (mm / in) | Class K (medium) – Circularity / cylindricity (mm / in) | Class L (coarse) – Circularity / cylindricity (mm / in) |
| --- | --- | --- | --- |
| ≤ 10 / ≤ 0.394 | 0,05 / 0.0020 | 0,1 / 0.0039 | 0,2 / 0.0079 |
| > 10–30 / > 0.394–1.181 | 0,10 / 0.0039 | 0,1 / 0.0039 | 0,3 / 0.0118 |
| > 30–100 / > 1.181–3.937 | 0,15 / 0.0059 | 0,2 / 0.0079 | 0,4 / 0.0157 |
| > 100–300 / > 3.937–11.811 | 0,20 / 0.0079 | 0,3 / 0.0118 | 0,6 / 0.0236 |
| > 300–1000 / > 11.811–39.370 | 0,30 / 0.0118 | 0,4 / 0.0157 | 0,8 / 0.0315 |
| > 1000–3000 / > 39.370–118.110 | 0,40 / 0.0157 | 0,6 / 0.0236 | 1,2 / 0.0472 |

*Cylindricity is usually toleranced with the same value as circularity or the equivalent circular runout, as indicated in ISO 2768-2. For more demanding requirements, specific geometric tolerances with direct measurement of the full cylindrical axis are used.*

## Tolerance Interpretation
The tolerance zone for circularity is bounded by two coplanar concentric circles whose radial difference is the specified value. In the case of cylindricity, the zone is defined by two perfect coaxial cylinders that envelop the entire actual surface; the radial distance between them is the indicated tolerance.

Neither of the two tolerances requires datum references, as they evaluate intrinsic form without restricting position or orientation. Measurement is usually performed with an electronic probe, coordinate measuring machines (CMM), or by rotation on a precision support (roundness tester) capable of filtering harmonics according to ISO 12181.

## ANSI vs ISO Comparison
| Aspect | ANSI/ASME Y14.5 | ISO 1101 / GPS |
| --- | --- | --- |
| Default principle | Rule #1 (perfect envelope, size limits form) | Independence principle (size does not restrict form unless indicated) |
| Circularity (symbol) | Same graphic (circle), identical tolerance zone | Identical to ANSI |
| Cylindricity (symbol) | Same graphic (two circles), same zone interpretation | Identical, although it can be applied independently of straightness |
| Verification | Any method that guarantees conformity is allowed; CMM and form testers are common | ISO 12181 defines the measurement procedure for circularity with Gaussian filter; ISO 12180 for cylindricity |

Both systems share symbols and tolerance zone definition. Practical divergence arises when the size tolerance is more restrictive than the form tolerance: in ASME the form is automatically controlled, while in ISO the circularity or cylindricity may exceed the size range if no individual form tolerance is specified or the envelope principle (E) is invoked.

## Typical Applications
| Component | Characteristic | Common tolerance (mm / in) | Functional reason |
| --- | --- | --- | --- |
| Crankshaft journal | Cylindricity | 0,005 / 0.0002 | Friction bearing, minimum oil film thickness |
| Diesel injector needle | Circularity | 0,001 / 0.00004 | Hydraulic sealing, controlled leaks |
| Electric motor shaft | Circularity at bearing zone | 0,004 / 0.00016 | Quiet assembly, vibration reduction |
| Master plug gauge | Cylindricity | 0,0003 / 0.000012 | Dimensional reference, calibration |
| Hydraulic cylinder liner | Cylindricity | 0,01 / 0.0004 | Sealing with O-ring |
| Rolling mill roll | Circularity | 0,02 / 0.0008 | Uniform sheet thickness |

## Frequently Asked Questions (FAQ)
1. **What is the allowable circularity tolerance for a 25 mm shaft according to ISO 2768‑2 class K?**  
   The general tolerance is 0,1 mm / 0.0039 in, since the diameter is in the 10‑30 mm range.

2. **What cylindricity value guarantees the fit of a 50 mm piston with minimum clearance?**  
   A cylindricity ≤ 0,005 mm / 0.0002 in is recommended to ensure a uniform lubricant film and prevent seizure.

3. **How is circularity measured with a V-block and a dial indicator?**  
   The method detects deviations above 0,002 mm / 0.00008 in when the probe is properly calibrated, although uncertainty increases with the number of lobes.

4. **From what diameter can a turned part maintain a circularity of 0,003 mm / 0.00012 in?**  
   With precision processes, diameters up to 30 mm / 1.181 in can achieve 0,003 mm / 0.00012 in if fine cutting tools and controlled speeds are used.

5. **What cylindricity tolerance does a 100 mm diameter hydrodynamic bearing require to avoid sub-harmonic vibrations?**  
   A cylindricity of 0,008 mm / 0.00031 in is sufficient to maintain minimum film thickness, with stricter values depending on rotational speed.

6. **How much does a circularity of 0,02 mm / 0.0008 in affect a 20 mm lip seal?**  
   At 6000 rpm, an eccentricity combined with a circularity of 0,02 mm / 0.0008 in can cause 5‑8 % additional leakage compared to a part with 0,005 mm / 0.0002 in circularity.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/mathematics-t_54.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
