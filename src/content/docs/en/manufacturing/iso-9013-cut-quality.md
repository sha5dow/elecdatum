---
title: "ISO 9013 cut quality"
sidebar:
  label: "ISO 9013 cut quality"
description: "Technical reference: ISO 9013 cut quality"
keywords: ["ISO 9013 thermal cutting quality tolerances", "manufacturing"]
category: "manufacturing"
topic: "welding"
subcategory: "quality-iso-9013"
skill: "standards-guide"
launch_phase: 5
last_updated: "2026-07-22"
verified: true
---

The ISO 9013 standard establishes the classification of cut quality in thermal processes such as oxyfuel cutting, plasma and laser, defining tolerances for perpendicularity, average roughness and dimensions. Its criteria allow objective comparison of the precision of cut parts by controlling defects such as taper and groove depth, being a fundamental reference in manufacturing engineering.

## Cutting parameters by material

| Material | Thickness | Thermal process | Typical dimensional tolerance | Average roughness Rz5 | Tentative ISO 9013 class |
|---|---|---|---|---|---|
| Carbon steel | 10 mm / 0.39 in | Laser (fiber) | ±0,05 mm / 0.002 in | 15 µm / 591 µin | Class 1 |
| Carbon steel | 10 mm / 0.39 in | Plasma | ±0,4 mm / 0.016 in | 60 µm / 2362 µin | Class 2 |
| Carbon steel | 10 mm / 0.39 in | Oxyfuel cutting | ±2 mm / 0.08 in | 150 µm / 5906 µin | Class 3 |
| Stainless steel | 5 mm / 0.20 in | Laser (fiber) | ±0,03 mm / 0.0012 in | 10 µm / 394 µin | Class 1 |
| Aluminum | 6 mm / 0.24 in | High-definition plasma | ±0,3 mm / 0.012 in | 45 µm / 1772 µin | Class 2 |

## Quality tolerances according to ISO 9013

Cut quality is mainly evaluated by the mean roughness value Rz5 (average of five sampling lengths) and the perpendicularity tolerance u. The selection of assist gas and feed rate modify these indicators.

| ISO 9013 class | Maximum Rz5 | Maximum perpendicularity u | Typical improvement range with post-processing |
|---|---|---|---|
| Class 1 | 30 µm / 1181 µin | 0,1 mm / 0.004 in | Light machining reduces u by 60 % |
| Class 2 | 60 µm / 2362 µin | 0,3 mm / 0.012 in | Light machining reduces u by 50 % |
| Class 3 | 120 µm / 4724 µin | 0,6 mm / 0.024 in | Not always necessary |

The equivalence with ISO 286 dimensional tolerance grades for thicknesses 10–18 mm is summarized as follows:

| Thermal process | Equivalent ISO 286 grade | Dimensional tolerance range |
|---|---|---|
| Laser | IT9 – IT10 | 0,036 mm – 0,058 mm / 0.0014 in – 0.0023 in |
| Plasma | IT12 – IT13 | 0,18 mm – 0,27 mm / 0.007 in – 0.011 in |
| Oxyfuel cutting | IT14 – IT16 | 0,43 mm – 1,1 mm / 0.017 in – 0.043 in |

## Applicable materials

- **Carbon and low-alloy steels**: suitable for oxyfuel cutting, plasma and laser. Oxyfuel cutting requires thicknesses >3 mm / 0.12 in.
- **Stainless steels**: cut by plasma and laser; oxyfuel cutting is not viable due to the refractory oxide layer.
- **Aluminum and light alloys**: plasma and laser cutting. In laser, copper mirrors and high power overcome reflectivity.
- **Titanium alloys**: only with laser or plasma in inert atmosphere to avoid embrittlement.

Quick selection guide: for thickness < 8 mm / 0.31 in and Class 1, laser is preferred; for 8–25 mm / 0.31–0.98 in with Class 2, plasma; for > 25 mm / 0.98 in and wide tolerances, oxyfuel cutting.

## Advantages

- Standardized framework internationally accepted for quality agreements.
- Allows clearly defining perpendicularity and roughness requirements without ambiguities.
- The most demanding class (Class 1) is achievable with fiber laser, eliminating secondary operations in many cases.
- Facilitates comparison of quotes among thermal cutting suppliers.

## Limitations

- Does not address microstructural changes, heat-affected zone, or residual hardness.
- Tolerance values are thickness-dependent; extrapolation to very thin parts (< 1 mm / 0.04 in) requires additional verification.
- In oxyfuel cutting, Class 1 is rarely achievable for thicknesses above 20 mm / 0.79 in.
- Rz5 roughness can vary due to nozzle wear and gas condition, requiring continuous monitoring.

## Frequently asked questions

1. **What is the perpendicularity tolerance for a 12 mm steel part cut with Class 1 quality?**  
   The maximum admissible deviation is 0.1 mm / 0.004 in, measured according to the projection of the cut surface.

2. **What average roughness Rz5 defines plasma Class 2 according to ISO 9013?**  
   An average roughness of 60 µm / 2362 µin is the typical limit for Class 2 on sheets up to 15 mm / 0.59 in.

3. **How much can perpendicularity be reduced by subsequent grinding?**  
   Light grinding can reduce perpendicularity from 0.3 mm / 0.012 in (Class 2) to 0.08 mm / 0.003 in, improving the result by 73 %.

4. **From what thickness does a carbon steel oxyfuel cut lose Class 2 capability?**  
   Above 20 mm / 0.79 in the perpendicularity exceeds 0.4 mm / 0.016 in, relegating oxyfuel cutting to Class 3.

5. **What ISO 286 tolerance grade corresponds to precision laser cutting?**  
   It corresponds to IT9 – IT10, with a tolerance band of only 0.05 mm / 0.002 in for nominal diameters of 10–18 mm.

6. **How much does the Rz5 roughness increase when switching from laser to plasma on 10 mm steel?**  
   Roughness goes from 15 µm / 591 µin (Class 1) to 60 µm / 2362 µin (Class 2), an increase of 45 µm / 1772 µin.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **efunda.com**: https://www.efunda.com/forum/show_message.cfm?start=1&thread=14577&id=14869
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/tolerances-thermal-cutting
