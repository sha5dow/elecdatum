---
title: "ISO transition fits k6 m6"
sidebar:
  label: "ISO transition fits k6 m6"
description: "Technical reference: ISO transition fits k6 m6"
keywords: ["ISO transition fits k6 m6 n6", "tolerances"]
category: "tolerances"
topic: "iso-system"
subcategory: "fits-transition"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

ISO transition fits k6 and m6 belong to the family of indeterminate fits (sometimes called location fits) defined in ISO 286-2. These fits ensure very precise positioning of parts and allow both small clearances and small interferences after assembly, enabling detachable joints with light effort. This page details their tolerances, interpretation, applications, and their equivalence with the ANSI system.

## What is a k6 or m6 transition fit?

A transition fit occurs when the coupling between a hole and a shaft can result in a minimum clearance or a light interference. In the hole-basis system, fits with shaft k6 (similar fit H7/k6) and shaft m6 (fixed fit H7/m6) are the most used. The k6 shaft allows assembly and disassembly with a rubber mallet, while the m6 shaft usually requires light cold pressing. Both are used when exact location without appreciable clearance is needed, typical for hubs, pulleys, gears, and bushings.

## Tolerances for k6 and m6 shafts according to ISO 286-2

The table shows the fundamental deviations and manufacturing tolerances (IT6 grade) for k6 and m6 shafts in the most common diameter ranges. The lower deviation (ei) is positive and the upper deviation (es) is obtained by adding the width of the IT6 tolerance zone. All values are given in micrometers (µm) and inches.

| Nominal diameter (mm) | Shaft k6 ei (µm / in) | Shaft k6 es (µm / in) | Shaft m6 ei (µm / in) | Shaft m6 es (µm / in) |
| --- | --- | --- | --- | --- |
| > 3 to 6 | 4 / 0.00016 | 12 / 0.00047 | 8 / 0.00031 | 16 / 0.00063 |
| > 6 to 10 | 5 / 0.00020 | 14 / 0.00055 | 12 / 0.00047 | 21 / 0.00083 |
| > 10 to 18 | 6 / 0.00024 | 17 / 0.00067 | 15 / 0.00059 | 26 / 0.00102 |
| > 18 to 30 | 8 / 0.00031 | 21 / 0.00083 | 21 / 0.00083 | 34 / 0.00134 |
| > 30 to 50 | 9 / 0.00035 | 25 / 0.00098 | 25 / 0.00098 | 41 / 0.00161 |
| > 50 to 80 | 11 / 0.00043 | 30 / 0.00118 | 30 / 0.00118 | 49 / 0.00193 |
| > 80 to 120 | 13 / 0.00051 | 35 / 0.00138 | 36 / 0.00142 | 58 / 0.00228 |
| > 120 to 180 | 15 / 0.00059 | 40 / 0.00157 | 44 / 0.00173 | 69 / 0.00272 |
| > 180 to 250 | 18 / 0.00071 | 47 / 0.00185 | 54 / 0.00213 | 83 / 0.00327 |
| > 250 to 315 | 20 / 0.00079 | 52 / 0.00205 | 62 / 0.00244 | 94 / 0.00370 |
| > 315 to 400 | 22 / 0.00087 | 57 / 0.00224 | 72 / 0.00283 | 107 / 0.00421 |
| > 400 to 500 | 24 / 0.00094 | 63 / 0.00248 | 80 / 0.00315 | 119 / 0.00469 |

*For the H7/k6 fit (H7 hole with k6 shaft) the maximum clearance is calculated as H7(ES) - k6(ei) and the maximum interference as k6(es) - H7(EI). For the H7/m6 fit the procedure is analogous.*

## Interpretation of the k6 or m6 symbol on a drawing

The symbols k6 and m6 are interpreted according to ISO 286‑1. The lowercase letter (k, m) indicates the position of the tolerance zone relative to the zero line (fundamental deviation), and the number (6) defines the width of the tolerance band, corresponding to the IT6 quality grade.

- **k (shaft tolerance):** the fundamental deviation is the lower deviation (ei), positive and of moderate value. With an H7 hole, a transition fit is achieved with the possibility of small clearance or interference.
- **m (shaft tolerance):** the fundamental deviation ei is larger than in k, so the fit tends more towards interference. It requires light press force for assembly.
- **IT6 grade:** narrow tolerance band, suitable for precision parts obtained by finish turning, grinding, or boring. The IT6 tolerance varies between 6 µm (0.00024 in) and 63 µm (0.00248 in) depending on the nominal diameter.

The code is written alongside the diameter dimension, for example, ∅50 k6 or ∅80 m6. This replaces the explicit indication of the upper and lower limit dimensions.

## Typical applications of k6 and m6 fits

- **Power transmission with exact positioning:** gears, pulleys, and clutch discs mounted on splined or cylindrical shafts, where backlash-free centering is desired to facilitate disassembly with light tools.
- **Bushings and friction bearings:** bushings and bearings that require light press fit (m6) or soft tap (k6) to remain fixed during service.
- **Couplings and precision flanges:** parts that must maintain exact alignment with the shaft without the need for an additional key, but are periodically disassembled for maintenance.
- **Tools and tooling:** chucks, collets, and holders that require assembly repeatability and submicrometric centering.

## ISO vs ANSI comparison

The American standard ANSI B4.1 classifies transition fits under the designation LN (locational transition) and LT. The closest correspondence is:

- **H7/k6 ≈ LT1** (or LN1 with similar tolerances): transition fit with very little clearance/interference, manual assembly with light tap.
- **H7/m6 ≈ LT2:** higher probable interference, requires light pressing.

ANSI nomenclature assigns uppercase letters for the hole and a class number for the fit; however, the concept of transition zone is equivalent to the ISO system. ANSI tolerances are usually expressed in thousandths of an inch.

In international applications the ISO system is preferred, while in North America both coexist. Direct conversion between an ANSI code and an ISO code is not exact, but the clearance and interference values are practically interchangeable for IT6–IT7 precision grades.

## Frequently asked questions

**1. What is the maximum interference in an H7/k6 fit for a diameter of 50 mm?**  
For ∅50 mm, the maximum interference is 0.018 mm / 0.00071 in, which corresponds to the extreme case where the k6 shaft reaches its upper limit (+0.018 mm) and the H7 hole its lower limit (0 mm).

**2. What is the difference between a k6 and an m6 fit in terms of assembly force?**  
With k6, a light tap with a rubber mallet is required to assemble or disassemble; with m6 the average interference is larger (9 µm / 0.00035 in extra compared to k6 for 30–50 mm) and cold pressing is usually required.

**3. Can I replace an H7/m6 fit with H7/k6 if there is vibration in the machine?**  
It is not recommended, since the k6 fit can present clearance under unfavorable conditions. The minimum interference with m6 (-0.025 mm / -0.00098 in) ensures a backlash-free joint even under vibratory loads.

**4. What machining process is suitable to obtain a k6 tolerance on a shaft?**  
IT6 grade is achieved by high-precision turning (diamond turning), cylindrical grinding, or finish boring. Surface roughness is usually kept below 0.8 µm Ra / 32 µin Ra.

**5. How is a drawing with the specification ∅40 m6 interpreted?**  
The dimension indicates that the shaft must be manufactured with a diameter between 40.025 mm / 1.5748 in and 40.041 mm / 1.5756 in (lower deviation +0.025 mm, upper deviation +0.041 mm for the 30–50 mm range).

**6. Is there a direct ANSI equivalent of the H7/k6 fit?**  
The LT1 class under ANSI B4.1 approximates the behavior of H7/k6, with tolerances of up to 0.0005 in (12.7 µm) clearance or interference, although the exact limits depend on the nominal diameter.

## Sources Consulted

- **roymech.org**: https://roymech.org/Useful_Tables/ISO_Tolerances
