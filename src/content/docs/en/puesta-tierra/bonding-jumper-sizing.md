---
title: "Bonding jumper sizing"
sidebar:
  label: "Bonding jumper sizing"
description: "Technical reference: Bonding jumper sizing"
keywords: ["bonding jumper sizing NEC table 250.66", "puesta-tierra"]
category: "puesta-tierra"
topic: "bonding"
subcategory: "bonding-jumper-sizing"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The sizing of bonding jumpers is a fundamental requirement of Article 250 of the National Electrical Code (NEC) to ensure a low-impedance path that allows operation of overcurrent protection devices during a ground fault. Supply‑side jumpers are sized according to Table 250.102(C)(1) based on the area of the phase conductors, while load‑side jumpers are governed by 250.122, based on the rating of the overcurrent device. Correct conductor gauge selection is critical for both copper and aluminum or aluminum-clad copper.

## Bonding Jumper Sizing Table (Supply‑Side – NEC 250.102(C)(1))

| Size of largest phase conductor per raceway or equivalent area for parallel conductors | Bonding jumper – copper | Bonding jumper – aluminum or aluminum-clad copper |
|---|---|---|
| 2 AWG or smaller (≤33,6 mm²) | 8 AWG (8,37 mm²) | 6 AWG (13,3 mm²) |
| 1 or 1/0 AWG (42,4 – 53,5 mm²) | 6 AWG (13,3 mm²) | 4 AWG (21,2 mm²) |
| 2/0 or 3/0 AWG (67,4 – 85,0 mm²) | 4 AWG (21,2 mm²) | 2 AWG (33,6 mm²) |
| Larger than 3/0 up to 350 kcmil (85,0 – 177 mm²) | 2 AWG (33,6 mm²) | 1/0 AWG (53,5 mm²) |
| Larger than 350 up to 600 kcmil (177 – 304 mm²) | 1/0 AWG (53,5 mm²) | 3/0 AWG (85,0 mm²) |
| Larger than 600 up to 1100 kcmil (304 – 557 mm²) | 2/0 AWG (67,4 mm²) | 4/0 AWG (107 mm²) |
| Larger than 1100 kcmil (>557 mm²) | See notes 1 and 2 | See notes 1 and 2 |

Notes:
1. The term “supply conductors” includes the phase conductors that do not have overcurrent protection on their supply side and terminate at the service disconnecting means or at the first disconnecting means of a separately derived system.
2. For conductors with area greater than 1100 kcmil, the bonding jumper must have an area not less than 12,5 % of the area of the largest phase conductor, using Table 8 of Chapter 9 of the NEC for conversion from AWG to circular mils.

## Sizing Rules per NEC 250.102

Article 250.102 of the NEC establishes differentiated criteria for supply-side and load-side bonding jumpers. On the supply side, a single raceway or cable requires sizing the jumper according to Table 250.102(C)(1) based on the size of the largest phase conductor within that raceway. When phase conductors are installed in parallel in two or more raceways, the bonding jumper for each raceway is sized individually according to that table, using the size of the phase conductor within that particular raceway.

If a single bonding jumper is chosen for two or more metallic raceways, the minimum size is determined from the total equivalent area of the parallel phase conductors. The basic rule is to apply 12,5 % to the total circular area (sum of kcmil of all parallel phases) and convert the result to the nearest standard AWG/kcmil size according to Table 8 of Chapter 9 of the NEC. The explicit formula is:

> **Bonding jumper area (cmil) = (Sum of phase areas in kcmil) × 1000 × 0,125**

Where each variable represents:
- **Sum of phase areas in kcmil**: total area of the parallel phase conductors, adding the kcmil of all raceways.
- **1000**: conversion factor from kcmil to circular mils (1 kcmil = 1000 cmil).
- **0,125**: 12,5 %, the minimum percentage required for the single bonding jumper.

For example, three raceways with 400 kcmil conductors each result in 1200 kcmil total. The jumper area must be 1200 × 1000 × 0,125 = 150 000 cmil, which corresponds to 3/0 AWG according to Table 8 of Chapter 9.

On the load side (downstream of overcurrent devices), equipment bonding jumpers are sized exclusively per 250.122 based on the rating of the overcurrent protection device feeding the circuit. Installation of jumpers, both inside and outside raceways, must comply with the termination methods listed in 250.8(A) and with a maximum length of 1,8 m / 6 ft when installed outside the raceway, and must also be routed along with it.

## Calculation Procedure

1. Identify whether the bonding jumper corresponds to the supply side or the load side. If load side, skip the following steps and directly use Table 250.122 based on the overcurrent protection.
2. Determine the size or area of the largest phase conductor present in the raceway.
3. If it is a single raceway or cable, enter that value into Table 250.102(C)(1) and select the gauge of the copper or aluminum jumper according to the phase conductor material.
4. If conductors are in parallel in multiple raceways and an individual jumper is sized for each, apply step 3 for each raceway using the phase size within it.
5. If a single bonding jumper is used for all parallel raceways, sum the areas of all phase conductors (in kcmil), calculate 12,5 % of that total, and convert the result to circular mils. Then locate the corresponding commercial size in Table 8 of Chapter 9 of the NEC (18 AWG through 4/0 AWG) or use the value in kcmil for larger sizes.
6. Verify that the termination complies with approved methods per 250.8(A) and that the conductor length, if installed outside the raceway, does not exceed 1,8 m / 6 ft.

## Frequently Asked Questions (FAQ)

### Where is the bonding jumper sizing table found in the NEC?
Table 250.102(C)(1) of the 2020 NEC contains the required sizes for supply-side grounding conductors, including main bonding jumpers, system bonding jumpers, and supply-side bonding jumpers. It is located in Article 250, Section 250.102(C).

### What is the difference between a supply-side bonding jumper and a load-side bonding jumper?
The supply-side jumper connects before the main overcurrent device and is sized using Table 250.102(C)(1) according to the phase conductor size. The load-side jumper is located after the overcurrent protection and its size is determined by the device rating, in accordance with Table 250.122.

### How is the single bonding jumper for multiple parallel raceways calculated?
Sum the area of all parallel phases (in kcmil), multiply by 1000 to convert to circular mils, and calculate 12,5 % of that value. The result in circular mils is converted to the nearest commercial size using Table 8 of Chapter 9 of the NEC. For example, three 400 kcmil phases require a single jumper of 3/0 AWG (150 000 cmil).

### Can an aluminum bonding jumper be used in a system with copper conductors?
Yes, Table 250.102(C)(1) allows aluminum or aluminum-clad copper jumpers for any system, provided the connections are identified for use with aluminum conductors and galvanic compatibility is respected at the termination points.

### What maximum length does the NEC allow for a bonding jumper installed outside the raceway?
NEC 250.102(E)(2) limits the bonding jumper conductor length to 1,8 m / 6 ft when installed outside a raceway. Additionally, it requires the conductor to be routed along with the raceway it is bonding.

### Is it mandatory to install a bonding jumper in each metallic raceway?
Yes, each metallic raceway containing service conductors must have a bonding jumper sized per Table 250.102(C)(1) based on the size of the phase conductors within that raceway, unless a single common jumper sized from the equivalent area of all parallel phases per 250.102(C)(2) is used.

## References
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20_BG_250.102.pdf
