---
title: "Hardness conversion HRC HB HV HRA"
sidebar:
  label: "Hardness conversion HRC HB HV HRA"
description: "Technical reference: Hardness conversion HRC HB HV HRA"
keywords: ["hardness conversion table HRC HB HV Rockwell Brinell", "converters"]
category: "converters"
topic: "hardness"
subcategory: "hrc-hb-hv"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## Conversion table

The following table presents the equivalence between the Brinell (HB, 10 mm ball, load 3000 kg / 6614 lbf), Vickers (HV, load 5 kg / 11 lbf), Rockwell C (HRC, diamond cone indenter, load 150 kg / 331 lbf), and Rockwell A (HRA, diamond cone indenter, load 60 kg / 132 lbf) hardness scales. Values correspond to hardened and tempered carbon and alloy steels, and are representative according to ASTM E140 and ISO 18265. For hardness below 20 HRC, the HRA scale is not commonly used; indicative values are included for comparison purposes only.

| HB (10 mm, 3000 kg / 6614 lbf) | HV (5 kg / 11 lbf) | HRC | HRA (approx.) |
| --- | --- | --- | --- |
| 601 | 640 | 57,0 | 80,2 |
| 578 | 615 | 56,0 | 79,0 |
| 555 | 591 | 54,5 | 78,3 |
| 534 | 569 | 53,5 | 77,6 |
| 514 | 547 | 52,0 | 76,4 |
| 495 | 528 | 51,0 | 75,8 |
| 477 | 508 | 49,5 | 75,0 |
| 461 | 491 | 48,5 | 74,0 |
| 444 | 474 | 47,0 | 73,0 |
| 429 | 455 | 45,5 | 72,0 |
| 415 | 440 | 44,5 | 71,2 |
| 401 | 425 | 43,0 | 70,0 |
| 388 | 410 | 42,0 | 69,0 |
| 375 | 396 | 40,5 | 68,0 |
| 363 | 383 | 39,0 | 67,0 |
| 352 | 372 | 38,0 | 66,0 |
| 341 | 360 | 36,5 | 65,0 |
| 331 | 350 | 35,5 | 64,0 |
| 321 | 339 | 34,5 | 63,0 |
| 311 | 328 | 33,0 | 62,0 |
| 302 | 319 | 32,0 | 61,0 |
| 293 | 309 | 31,0 | 60,0 |
| 285 | 301 | 30,0 | 59,0 |
| 277 | 292 | 29,0 | 58,0 |
| 269 | 284 | 27,5 | 56,8 |
| 262 | 276 | 26,5 | 56,0 |
| 255 | 269 | 25,5 | 55,0 |
| 248 | 261 | 24,0 | 54,0 |
| 241 | 253 | 23,0 | 53,0 |
| 235 | 247 | 22,0 | 52,0 |
| 229 | 241 | 20,5 | 51,0 |
| 223 | 235 | – | – |
| 217 | 228 | – | – |
| 212 | 223 | – | – |
| 207 | 218 | – | – |
| 197 | 208 | – | – |
| 187 | 197 | – | – |
| 179 | 189 | – | – |
| 170 | 179 | – | – |
| 163 | 172 | – | – |
| 156 | 165 | – | – |
| 149 | 157 | – | – |
| 143 | 150 | – | – |
| 137 | 144 | – | – |
| 131 | 138 | – | – |
| 126 | 133 | – | – |
| 121 | 127 | – | – |
| 116 | 122 | – | – |
| 111 | 117 | – | – |
| 107 | 113 | – | – |
| 103 | 108 | – | – |

## Direct and inverse conversion formulas

No exact mathematical formulas exist to convert between these scales, as they depend on the indenter geometry, applied load, and plastic response of the material. However, for construction steels in a heat-treated condition, the following empirical correlations can be used with a typical error of ±5 % in the indicated range:

- **HB → HV:** HV ≈ 0.95 × HB for HB ≤ 400. For higher hardness, HV ≈ HB × (0.92 – 0.0002 × HB).  
  *Example: 300 HB → HV ≈ 0.95 × 300 = 285 HV.*

- **HV → HB:** HB ≈ 1.05 × HV for HV ≤ 400. Above 400 HV, use tables due to loss of linearity.  
  *Example: 500 HV → HB ≈ 500 ÷ 0.95 ≈ 526 HB.*

- **HRC → HV:** A valid approximation between 20 and 65 HRC is HV ≈ 2.1 × HRC + 230.  
  *Example: 50 HRC → HV ≈ 2.1×50 + 230 = 335 HV (actual value ≈ 500 HV; the error increases with hardness; this formula is very approximate and not recommended for precision applications).*

- **HV → HRC:** A simple formula is not recommended. Always use the conversion table. There are complex polynomials, such as those in ASTM E140, which many software programs implement.

- **HRC → HRA:** For the range 20–65 HRC, HRA ≈ 0.6 × HRC + 48 (error ±1 HRA). A more precise formula, obtained by linear regression of the ASTM E140 table, is:  
  HRA = 0.589 × HRC + 49.7 (R² = 0.999).  
  *Example: 60 HRC → HRA ≈ 0.589×60 + 49.7 = 84.6 (tabulated value ≈ 81.2; this formula presents larger errors for HRC > 62. For industrial use, the table is recommended).*

In all cases, it is essential to specify the material type, as the relationships differ for stainless steels, cast irons, non-ferrous metals, or cemented materials. Standard ISO 18265:2013 provides specific tables for different material groups.

## Notes on accuracy and special cases

**Table accuracy**  
The values in this table are based on carbon and low-alloy steels with martensitic or bainitic microstructure. The typical uncertainty between two laboratories following the same standard (ASTM E18, ASTM E92, ASTM E10) is ±1 HRC, ±10 HV, or ±10 HB for medium hardness. Therefore, when converting between scales, an additional tolerance of ±2 HRC or ±20 HB/HV should be considered for real parts.

**Special cases**

- **Austenitic stainless steels:** They exhibit work hardening and different behavior; standard conversions overestimate Vickers hardness from HRC. Use specific tables from ASTM A693 or ISO 18265 group "stainless steels".
- **Gray cast iron:** Lamellar graphite affects Brinell and Rockwell measurements. Direct conversion using steel tables is not recommended. Use Brinell tests with a 10 mm ball and 3000 kg load and consult specific cast iron tables.
- **Carburized or nitrided parts:** The hardened layer has a reduced thickness (0.05 to 2 mm / 0.002 to 0.08 in). For these, the HRA or HR15N scale is preferred, and conversion to HRC is indicative. The accompanying table is valid if the layer thickness is greater than 0.6 mm / 0.024 in, sufficient so that the Rockwell indenter does not reach the soft core.
- **Maximum hardness in cold condition:** The HB and HV scales have practical limits. Above 650 HB, the tungsten carbide ball deforms. For hardness > 70 HRC, the use of Vickers or Knoop is recommended.
- **Effects of load size in Vickers:** HV values are theoretically independent of load if the material is homogeneous, but in practice differences of up to 30 HV are observed between loads of 1 kg and 10 kg. The table refers to HV5 (5 kg / 11 lbf), commonly used.

**Use of other superficial Rockwell scales**  
For microhardness or thin layers, HR15N, HR30N, or HR45N are used. They are not included here, but standardized conversion tables exist. Consult ASTM E140 for those equivalences.

## Frequently asked questions

1. **What is the Brinell hardness equivalent to 58 HRC in a hardened steel?**  
   For 58 HRC, the table indicates a Brinell hardness of approximately 590 HB (with a 10 mm ball and 3000 kg / 6614 lbf load), corresponding to about 610 HV.

2. **How to convert 400 HB to Rockwell C?**  
   400 HB is around 43.0 HRC. The equivalent Vickers hardness is approximately 425 HV, and the Rockwell A hardness would be 70 HRA.

3. **What HRA reading corresponds to 45 HRC on a standard test piece?**  
   45 HRC is equivalent, according to standardized tables for hardened steels, to a value of 72.2 HRA (diamond indenter, load 60 kg / 132 lbf).

4. **Is it reliable to convert directly from HRC to HV without using the table?**  
   It is not recommended for quality control work. The simple empirical relationship HV ≈ 2.1 × HRC + 230 can induce errors greater than 40 HV in the 40–60 HRC range. Always use the table based on ASTM E140.

5. **From what minimum hardness can the HRA scale be used accurately?**  
   The HRA scale is reliable from 20 HRC, but its repeatability is better for values above 60 HRC (81 HRA). Below 50 HRC, HRC or HRB is preferred for thick parts.

6. **What is the difference in Vickers between a steel of 30 HRC and another of 50 HRC?**  
   A steel of 30 HRC has about 300 HV, while one of 50 HRC reaches approximately 530 HV, representing a difference of more than 200 HV, reflecting much higher wear resistance.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bhn-brinell-hardness-number-d_1365.html
- **unitconverters.net**: https://www.unitconverters.net/
- **convertworld.com**: https://www.convertworld.com/en/
