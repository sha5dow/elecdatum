---
title: "Bolt preload and torque calculation"
sidebar:
  label: "Bolt preload and torque calculation"
description: "Technical reference: Bolt preload and torque calculation"
keywords: ["bolt preload torque calculation formula", "fasteners"]
category: "fasteners"
topic: "torque-preload"
subcategory: "preload-calculation"
skill: "fastener-reference-table"
launch_phase: 4
last_updated: "2026-07-23"
verified: true
---

The tightening torque applied to a bolt generates an axial clamping force, called preload, which ensures the integrity of the joint. The relationship between torque and preload is not linear and depends strongly on friction, nominal diameter, and lubrication condition. Proper sizing prevents both loosening due to insufficient load and failure due to overload.

## Calculation principle and general formula

The accepted formula to estimate the tightening torque from the desired preload is:

\[
T = K \cdot F \cdot d \cdot \left(1 - \frac{l}{100}\right)
\]

Where:
- \(T\) = tightening torque (Nm, lb·ft)
- \(K\) = torque constant (dimensionless)
- \(F\) = axial force or preload on the bolt (N, lb)
- \(d\) = nominal bolt diameter (m, ft)
- \(l\) = reduction factor due to lubrication (%)

The same expression rearranged allows obtaining the force generated for a given torque: \(F = T / (K d (1 - l/100))\). The equation is an approximation that does not consider the thread pitch; it is recommended to validate with manufacturer data. Conventional torque wrenches have a typical accuracy no better than ±25 %.

## Lubrication factors and torque constants

The constant \(K\) absorbs the friction effects under the head and on the thread flanks. It varies according to surface finish and lubrication. The indicative values for low‑alloy steel bolts from 1/4" to 1" (M6–M24) are shown in the following table.

| Surface condition / lubrication | Typical constant K |
| --- | --- |
| Normal dry (uncoated) | 0,20 |
| Black finish uncoated | 0,30 |
| Electrolytic zinc plated | 0,20 |
| Lightly lubricated (light oil) | 0,18 |
| Cadmium plated | 0,16 |

Lubrication reduces friction and therefore the torque required to achieve the same preload. For example, lubricating a bolt with SAE 30 oil reduces the required torque by approximately 40 %. If the dry torque is maintained on a lubricated joint, the actual preload can exceed the bolt strength and cause catastrophic failure.

Design practices establish that the standard dry torque produces a tensile stress in the bolt equal to 70 % of the minimum tensile strength or 75 % of the proof load.

## Dimensions, pitches, and allowable loads according to standards

The following table summarizes the geometric and mechanical characteristics and the main standard equivalences for metric coarse thread bolts (ISO normal pitch). The proof loads correspond to property classes 8.8 and 10.9 according to ISO 898-1. When design requires, proof loads for higher classes (such as 12.9) must be consulted directly from the standards.

| Nominal size | Thread pitch | Major diameter | Stress area | Class 8.8 Proof load | Class 10.9 Proof load | Equivalent standards (ISO/DIN/ANSI) | Tap drill (mm / in) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M5 | 0,8 mm / 0.0315 in | 5 mm / 0.197 in | 14,2 mm² / 0.0220 in² | 8,2 kN / 1 840 lbf | 11,8 kN / 2 650 lbf | ISO 4762, DIN 912, ANSI B18.3.1M | 4,2 mm / 0.165 in |
| M6 | 1 mm / 0.0394 in | 6 mm / 0.236 in | 20,1 mm² / 0.0312 in² | 11,6 kN / 2 610 lbf | 16,7 kN / 3 750 lbf | ISO 4014/4017, DIN 931/933, ASME B18.2.6M | 5 mm / 0.197 in |
| M8 | 1,25 mm / 0.0492 in | 8 mm / 0.315 in | 36,6 mm² / 0.0567 in² | 21,2 kN / 4 765 lbf | 30,4 kN / 6 835 lbf | ISO 4014/4017, DIN 931/933 | 6,8 mm / 0.268 in |
| M10 | 1,5 mm / 0.0591 in | 10 mm / 0.394 in | 58 mm² / 0.0899 in² | 33,6 kN / 7 555 lbf | 48,1 kN / 10 820 lbf | ISO 4014/4017, DIN 931/933 | 8,5 mm / 0.335 in |
| M12 × 1.75 | 1,75 mm / 0.0689 in | 12 mm / 0.472 in | 84,3 mm² / 0.1307 in² | 48,9 kN / 10 990 lbf | 69,9 kN / 15 710 lbf | ISO 4014/4017, DIN 931/933 | 10,2 mm / 0.402 in |
| M14 × 2 | 2 mm / 0.0787 in | 14 mm / 0.551 in | 115 mm² / 0.178 in² | 66,7 kN / 15 000 lbf | 95,5 kN / 21 470 lbf | ISO 4014/4017, DIN 931/933 | 12 mm / 0.472 in |
| M16 × 2 | 2 mm / 0.0787 in | 16 mm / 0.630 in | 157 mm² / 0.243 in² | 91,1 kN / 20 470 lbf | 130 kN / 29 220 lbf | ISO 4014/4017, DIN 931/933 | 14 mm / 0.551 in |
| M18 × 2.5 | 2,5 mm / 0.0984 in | 18 mm / 0.709 in | 192 mm² / 0.298 in² | 111 kN / 24 950 lbf | 159 kN / 35 740 lbf | ISO 4014/4017, DIN 931/933 | 15,5 mm / 0.610 in |
| M20 × 2.5 | 2,5 mm / 0.0984 in | 20 mm / 0.787 in | 245 mm² / 0.380 in² | 142 kN / 31 920 lbf | 203 kN / 45 640 lbf | ISO 4014/4017, DIN 931/933 | 17,5 mm / 0.689 in |
| M22 × 2.5 | 2,5 mm / 0.0984 in | 22 mm / 0.866 in | 303 mm² / 0.470 in² | 176 kN / 39 550 lbf | 251 kN / 56 410 lbf | ISO 4014/4017, DIN 931/933 | 19,5 mm / 0.768 in |
| M24 × 3 | 3 mm / 0.118 in | 24 mm / 0.945 in | 353 mm² / 0.547 in² | 205 kN / 46 050 lbf | 293 kN / 65 800 lbf | ISO 4014/4017, DIN 931/933 | 21 mm / 0.827 in |
| M30 × 3.5 | 3,5 mm / 0.138 in | 30 mm / 1.181 in | 561 mm² / 0.870 in² | 325 kN / 73 050 lbf | 466 kN / 104 700 lbf | ISO 4014/4017, DIN 931/933 | 26,5 mm / 1.043 in |

## Recommended tightening torques and tap drills

The torques in the following table are calculated to achieve a preload equivalent to 75 % of the proof load with a constant \(K = 0,20\) for dry conditions and \(K = 0,16\) for lightly lubricated. The values are indicative; in critical applications, verification with the bolt manufacturer and control of the tightening method is necessary.

| Nominal size | Class 8.8 – Dry torque | Class 8.8 – Lubricated torque (*) | Class 10.9 – Dry torque | Class 10.9 – Lubricated torque (*) | Tap drill (mm / in) |
| --- | --- | --- | --- | --- | --- |
| M5 | 4,9 Nm / 3,6 ft·lb | 3,9 Nm / 2,9 ft·lb | 7,1 Nm / 5,2 ft·lb | 5,7 Nm / 4,2 ft·lb | 4,2 mm / 0.165 in |
| M6 | 8,4 Nm / 6,2 ft·lb | 6,7 Nm / 4,9 ft·lb | 12,0 Nm / 8,9 ft·lb | 9,6 Nm / 7,1 ft·lb | 5 mm / 0.197 in |
| M8 | 20,4 Nm / 15,0 ft·lb | 16,3 Nm / 12,0 ft·lb | 29,2 Nm / 21,5 ft·lb | 23,4 Nm / 17,3 ft·lb | 6,8 mm / 0.268 in |
| M10 | 40,4 Nm / 29,8 ft·lb | 32,3 Nm / 23,8 ft·lb | 57,8 Nm / 42,6 ft·lb | 46,2 Nm / 34,1 ft·lb | 8,5 mm / 0.335 in |
| M12 | 70,4 Nm / 51,9 ft·lb | 56,3 Nm / 41,5 ft·lb | 101 Nm / 74,5 ft·lb | 81 Nm / 59,7 ft·lb | 10,2 mm / 0.402 in |
| M14 | 112 Nm / 82,6 ft·lb | 90 Nm / 66,4 ft·lb | 160 Nm / 118 ft·lb | 128 Nm / 94 ft·lb | 12 mm / 0.472 in |
| M16 | 175 Nm / 129 ft·lb | 140 Nm / 103 ft·lb | 250 Nm / 184 ft·lb | 200 Nm / 148 ft·lb | 14 mm / 0.551 in |
| M18 | 240 Nm / 177 ft·lb | 192 Nm / 142 ft·lb | 344 Nm / 254 ft·lb | 275 Nm / 203 ft·lb | 15,5 mm / 0.610 in |
| M20 | 341 Nm / 252 ft·lb | 273 Nm / 201 ft·lb | 488 Nm / 360 ft·lb | 390 Nm / 288 ft·lb | 17,5 mm / 0.689 in |
| M22 | 465 Nm / 343 ft·lb | 372 Nm / 274 ft·lb | 663 Nm / 489 ft·lb | 530 Nm / 391 ft·lb | 19,5 mm / 0.768 in |
| M24 | 590 Nm / 435 ft·lb | 472 Nm / 348 ft·lb | 845 Nm / 623 ft·lb | 676 Nm / 499 ft·lb | 21 mm / 0.827 in |
| M30 | 1170 Nm / 863 ft·lb | 936 Nm / 691 ft·lb | 1680 Nm / 1 239 ft·lb | 1 340 Nm / 988 ft·lb | 26,5 mm / 1.043 in |

(*) Light lubrication, K ≈ 0,16. For lubrication with SAE 30 oil, an additional reduction of 40 % relative to the dry value may be applied.

## Preload control methods

There are multiple techniques to ensure that the bolt tension approaches the design specification, each with advantages and limitations:

- **Torque-controlled tightening:** It is the simplest and most widespread method. Adjust until a limit torque is reached using a torque wrench. Preload scatter can be high due to friction variations (up to ±25 %).
- **Angle-controlled tightening (or turn-of-nut method):** The joint is rotated a specified angle after seating, taking the material beyond the yield point. Provides repeatable preload, but requires prior tests to define the angle and may degrade the thread upon reuse.
- **Torque-angle tightening (torque-angle tension control):** Combines simultaneous monitoring of torque and rotation angle. Tighten to a threshold torque and then apply an additional angle. Recording the torque vs. angle curve allows process validation and anomaly detection.
- **Yield-controlled tightening:** Detection of the slope of the torque-angle curve identifies the onset of yielding, maximizing preload. Requires specialized tooling.
- **Bolt stretch method:** A hydraulic cylinder stretches the bolt shank; the nut is turned under no load and upon releasing the pressure the preload is set. Common in large-diameter joints.
- **Thermal tightening:** The bolt is heated to expand it, the nut is positioned, and upon cooling the preload is generated. Slow method used in turbines and large equipment.
- **Methods with tension indication:** Include direct measurement of elongation with a comparator, bonded strain gauges, or load-indicating elements built into the fasteners (e.g., bumps that flatten when the target preload is reached).

The selection of the method depends on the criticality of the joint, the bolt size, and production. Torque-angle control systems dominate in the automotive and aerospace industries due to their traceability.

## Frequently Asked Questions (FAQ)

1.  **What is the general formula for calculating tightening torque in bolts?**
    The most commonly used expression is \(T = K F d (1 - l/100)\), where the torque \(T\) is obtained by multiplying the torque constant \(K\) (typically 0.2 for normal dry steel), the preload \(F\), and the nominal diameter \(d\), affected by the lubrication reduction \(l\). It does not consider thread pitch and assumes a wrench accuracy of ±25 %.

2.  **What constant K value is recommended for a dry steel bolt?**
    For a medium-strength steel bolt, dry and uncoated, \(K = 0.2\). If the finish is black uncoated it can rise to 0.3, while a lightly lubricated bolt drops to 0.18.

3.  **How much does lubrication reduce the required torque?**
    When lubricating with SAE 30 oil, the torque required to achieve the same preload is reduced by approximately 40 % compared to the dry value. Therefore, if the dry torque is applied to a lubricated joint, the actual preload may exceed the bolt strength and cause breakage.

4.  **What is the typical target preload relative to bolt strength?**
    The standard dry torque is calculated to produce a tensile stress equal to 75 % of the proof load or 70 % of the minimum tensile strength of the bolt, according to general engineering practice.

5.  **What torque is required to tighten a metric M30 class 8.8 bolt dry?**
    For an M30 class 8.8 with a proof load of 337 kN (approximately 325 kN in table) under dry conditions (K=0.2) a torque of 2022 Nm / 1492 ft·lb is needed. With lubrication, the torque is reduced to about 1213 Nm / 895 ft·lb.

6.  **What are the most commonly used preload control methods in industry?**
    Torque control with a torque wrench is the simplest and most widespread. It is followed by the torque-angle method (torque to threshold + additional turn), pure angle-controlled tightening, and, in critical applications, hydraulic stretch systems and direct tension indicators.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bolt-torque-load-calculator-d_2065.html
- **bossard.com**: https://www.bossard.com/global-en/knowledge-hub/resources/online-calculators-and-converters/torque-and-preload-calculator/
- **mcmaster.com**: https://www.mcmaster.com/products/torque-charts
