---
title: "Surface roughness Ra Rz RMS CLA"
sidebar:
  label: "Surface roughness Ra Rz RMS CLA"
description: "Technical reference: Surface roughness Ra Rz RMS CLA"
keywords: ["surface roughness Ra Rz RMS CLA conversion table", "converters"]
category: "converters"
topic: "roughness"
subcategory: "ra-rz-rms"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## Description
Surface roughness is measured using different standardized parameters such as Ra, Rz, RMS and CLA. Converting between them allows comparison of specifications from drawings, measurement reports, and manufacturing requirements. Ra (arithmetic mean roughness) is the most widespread parameter in the ISO standard. CLA (Center Line Average) is a historical British synonym for Ra, usually expressed in microinches (µin). RMS (Root Mean Square, also designated Rq) quantifies the root mean square roughness, giving greater weight to pronounced peaks and valleys. Rz (maximum mean profile height) measures the average of five consecutive peak-to-valley depths, making it more sensitive to local defects. There is no universally exact mathematical relationship between them, but in practice approximate factors based on typical machining processes are used.

## Ra, Rz, RMS, CLA Conversion Table
The following table uses practical equivalences for surfaces machined by chip removal, grinding and lapping. All conversions are approximate; the actual factor depends on the manufacturing process and the profile height distribution.

| Ra (µm) / Ra (µin) | RMS / Rq (µm) / RMS / Rq (µin) | Rz (µm) / Rz (µin) | CLA (µin) ¹ |
| --- | --- | --- | --- |
| 0.025 µm / 1.0 µin | 0.028 µm / 1.1 µin | 0.10 µm / 3.9 µin | 1.0 µin |
| 0.05 µm / 2.0 µin | 0.056 µm / 2.2 µin | 0.20 µm / 7.9 µin | 2.0 µin |
| 0.1 µm / 3.9 µin | 0.11 µm / 4.3 µin | 0.4 µm / 15.7 µin | 3.9 µin |
| 0.2 µm / 7.9 µin | 0.22 µm / 8.7 µin | 0.8 µm / 31.5 µin | 7.9 µin |
| 0.4 µm / 15.7 µin | 0.44 µm / 17.3 µin | 1.6 µm / 63 µin | 15.7 µin |
| 0.8 µm / 31.5 µin | 0.89 µm / 35 µin | 3.2 µm / 126 µin | 31.5 µin |
| 1.6 µm / 63 µin | 1.78 µm / 70 µin | 6.3 µm / 248 µin | 63 µin |
| 3.2 µm / 126 µin | 3.55 µm / 140 µin | 12.5 µm / 492 µin | 126 µin |
| 6.3 µm / 248 µin | 6.99 µm / 275 µin | 25 µm / 984 µin | 248 µin |
| 12.5 µm / 492 µin | 13.9 µm / 547 µin | 50 µm / 1969 µin | 492 µin |
| 25 µm / 984 µin | 27.8 µm / 1094 µin | 100 µm / 3937 µin | 984 µin |
| 50 µm / 1969 µin | 55.5 µm / 2185 µin | 200 µm / 7874 µin | 1969 µin |

¹ CLA is the Ra value in microinches; included for compatibility with older drawings.

## Direct and Inverse Conversion Formulas
The formulas below are the most industrially accepted for turning, milling, grinding and lapping surfaces. The factors should be adjusted according to the specific process.

- **Ra to RMS (Rq):**  
  RMS ≈ 1.11 × Ra  
  Example: for Ra = 3.2 µm / 126 µin, RMS ≈ 3.55 µm / 140 µin

- **Ra to Rz:**  
  Rz ≈ 4.0 × Ra (typical range 3.5 – 6 × Ra depending on process)  
  Example: for Ra = 1.6 µm / 63 µin, Rz ≈ 6.4 µm / 252 µin (here rounded to ISO value 6.3 µm)

- **CLA to Ra:**  
  CLA (µin) / 39.37 = Ra (µm)  or  Ra (µm) × 39.37 = Ra (µin) = CLA (µin)  
  Since CLA is numerically equal to Ra in microinches, no additional factor is required.

- **Rz to Ra (inverse):**  
  Ra ≈ Rz / 4.0  
  Example: Rz = 25 µm / 984 µin ⇒ Ra ≈ 6.25 µm / 246 µin (6.3 µm / 248 µin is adopted as the normalized value)

- **RMS to Ra (inverse):**  
  Ra ≈ RMS / 1.11  
  Example: RMS = 1.78 µm / 70 µin ⇒ Ra ≈ 1.6 µm / 63 µin

## Notes on Accuracy and Special Cases
- **The factors are approximate.** The actual relationship between Ra and Rz varies between 3:1 and 7:1 depending on material, tool, cutting parameters, and measurement direction. For ground surfaces, a factor of 4:1 is commonly used; for rough milling or turning, it can reach 6:1 or more.
- **RMS (Rq) and Ra only coincide** if the profile is a straight line; the more irregular the surface, the greater the difference. For sinusoidal profiles, Rq ≈ 1.11 Ra. In processes with isolated peaks (pores, scratches), Rq can be significantly higher.
- **CLA vs. Ra:** The Center Line Average (BS 1134) is the arithmetic mean of deviations taken from the mean line and mathematically equals Ra. In practice, any direct conversion (1 CLA = 1 Ra in the same units) is exact. Discrepancies only arise from filtering or instrumentation errors.
- **Rz (ISO 4287)** corresponds to the average of five maximum peak-to-valley heights over the sampling length. In older standards (DIN 4768), Rz was defined as the mean peak-to-valley height over a single reference length, giving different values; the applicable standard edition must be verified.
- **Conversion to microinches:** 1 µm equals 39.37 µin. Tolerances in industries using imperial units are often expressed in microinches, making the µm ↔ µin conversion essential. The table incorporates both values in each cell to avoid rounding errors.
- **Process-specific table:** If maximum accuracy is required, it is recommended to consult equivalence charts provided by the instrumentation manufacturer or based on measurements from certified standards.

## Frequently Asked Questions (FAQ)

**1. What is the Rz value if Ra is 3.2 µm?**  
For Ra = 3.2 µm / 126 µin, the typical conversion gives Rz ≈ 12.5 µm / 492 µin (factor 3.9). In smooth machining, the value can range between 11 µm and 16 µm / 433–630 µin.

**2. What RMS corresponds to a Ra roughness of 0.8 µm?**  
A Ra of 0.8 µm / 31.5 µin translates to an RMS of approximately 0.89 µm / 35 µin (factor 1.11). In precision grinding, values up to 0.93 µm / 37 µin have been reported.

**3. How to convert from CLA to Ra in µm?**  
CLA (µin) equals Ra (µin). Thus, a CLA of 63 µin corresponds to 1.6 µm (63 / 39.37). This conversion is direct and without any empirical factor.

**4. What is the Rz value for Ra 1.6 µm?**  
For Ra = 1.6 µm / 63 µin, the expected Rz is 6.3 µm / 248 µin. In turning processes, it can vary between 5 µm and 9 µm / 197–354 µin depending on feed rate and nose radius.

**5. What Ra results from a measured Rz of 25 µm?**  
Applying the factor 4, Ra ≈ 6.25 µm / 246 µin, which in practice is rounded to 6.3 µm / 248 µin. On cast surfaces with high Rz, the Ra could be as low as 4 µm / 157 µin if the profile is very uneven.

**6. Are these conversions valid for all materials?**  
The conversions depend more on the manufacturing process than on the material. However, ductile materials (aluminum, copper) tend to generate more regular profiles with Ra/Rz ratios closer to 4.0, while cast irons and brittle alloys may show isolated peaks that raise Rz without affecting Ra as much.

## Sources Consulted

- **unitconverters.net**: https://www.unitconverters.net/
- **convertworld.com**: https://www.convertworld.com/en/
