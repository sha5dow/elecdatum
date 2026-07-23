---
title: "Industrial hydraulic pressure standards"
sidebar:
  label: "Industrial hydraulic pressure standards"
description: "Technical reference: Industrial hydraulic pressure standards"
keywords: ["hydraulic pressure standards 150 250 350 bar", "hydraulics"]
category: "hydraulics"
topic: "hydraulic-system"
subcategory: "pressure-standards"
skill: "hydraulics-reference-table"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

Standard pressures in hydraulic systems are established through a combination of manufacturing standards, pressure classes, and design criteria. The most commonly used nominal levels in industry are 150 bar, 250 bar, and 350 bar, in line with the standardized series ISO 2944 and ASME B16.5 flange classifications.

## Units and Conversion

| Pressure Unit | Symbol | Equivalence in bar | Equivalence in psi |
|---|---|---|---|
| Bar | bar | 1 bar / 1 bar | 14,504 psi / 14,504 psi |
| Megapascal | MPa | 10 bar / 10 bar | 145,04 psi / 145,04 psi |
| Kilopascal | kPa | 0,01 bar / 0,01 bar | 0,145 psi / 0,145 psi |
| Pound per square inch | psi | 0,06895 bar / 0,06895 bar | 1 psi / 1 psi |
| Technical atmosphere | at | 0,9807 bar / 0,9807 bar | 14,223 psi / 14,223 psi |

## Standards and Pressure Classifications

International standards define nominal pressures (PN) and pressure classes for hydraulic components. ASME B16.5 flanges use classes 150, 300, 400, 600, 900, 1500, and 2500, while ISO standards employ the PN series (2,5 to 400 bar). The hydrostatic test pressure is typically 1.5 times the allowable working pressure for components with hydraulic certification.

### Hydrostatic Test Pressures for ASTM Flanges

| ASTM Specification | Class 150 | Class 300 | Class 400 | Class 600 | Class 900 | Class 1500 | Class 2500 |
|---|---|---|---|---|---|---|---|
| A105, A216-WCB, A350-LF2, A516-70 and similar | 31,0 bar / 450 psig | 77,6 bar / 1125 psig | 103,4 bar / 1500 psig | 153,4 bar / 2225 psig | 231,0 bar / 3350 psig | 384,3 bar / 5575 psig | 639,4 bar / 9275 psig |
| A106-C, A203-B/E, A216-WCC, A352-LCC/LC2/LC3 | 31,0 bar / 450 psig | 77,6 bar / 1125 psig | 103,4 bar / 1500 psig | 155,1 bar / 2250 psig | 232,7 bar / 3375 psig | 387,8 bar / 5625 psig | 646,4 bar / 9375 psig |
| A106-B, A350-LF1, A515-60, A516-60 and similar | 25,9 bar / 375 psig | 65,5 bar / 950 psig | 86,2 bar / 1250 psig | 129,3 bar / 1875 psig | 191,3 bar / 2775 psig | 320,6 bar / 4650 psig | 532,6 bar / 7725 psig |
| A182-F304, A182-F304H, A240-304, A312-TP304 and similar | 29,3 bar / 425 psig | 75,8 bar / 1100 psig | 100,0 bar / 1450 psig | 149,9 bar / 2175 psig | 224,1 bar / 3250 psig | 372,3 bar / 5400 psig | 620,5 bar / 9000 psig |

## Maximum Pressure Tables for Standardized Pipes

The allowable working pressure of a steel hydraulic pipe depends on the wall thickness (Schedule) and nominal diameter. The following table shows maximum pressures for API 5L / A-106 pipes with a minimum tensile strength of 60 ksi.

| Nominal Size (in) | Outer Diameter | Wall Thickness Schedule 40 | Maximum Pressure Sch 40 | Wall Thickness Schedule 80 | Maximum Pressure Sch 80 | Wall Thickness Schedule 160 | Maximum Pressure Sch 160 |
|---|---|---|---|---|---|---|---|
| 1/2" | 0,84 in / 21,3 mm | 0,109 in / 2,77 mm | 399,4 bar / 5792 psi | 0,147 in / 3,73 mm | 561,1 bar / 8140 psi | 0,188 in / 4,78 mm | 752,0 bar / 10905 psi |
| 1" | 1,315 in / 33,4 mm | 0,133 in / 3,38 mm | 303,5 bar / 4402 psi | 0,179 in / 4,55 mm | 421,3 bar / 6110 psi | 0,250 in / 6,35 mm | 618,4 bar / 8969 psi |
| 2" | 2,375 in / 60,3 mm | 0,154 in / 3,91 mm | 188,6 bar / 2736 psi | 0,218 in / 5,54 mm | 273,2 bar / 3963 psi | 0,344 in / 8,74 mm | 451,8 bar / 6553 psi |
| 4" | 4,5 in / 114,3 mm | 0,237 in / 6,02 mm | 151,6 bar / 2199 psi | 0,337 in / 8,56 mm | 219,7 bar / 3186 psi | 0,531 in / 13,5 mm | 359,3 bar / 5212 psi |
| 6" | 6,625 in / 168,3 mm | 0,280 in / 7,11 mm | 120,7 bar / 1750 psi | 0,432 in / 10,97 mm | 189,7 bar / 2752 psi | 0,719 in / 18,26 mm | 327,8 bar / 4754 psi |
| 8" | 8,625 in / 219,1 mm | 0,322 in / 8,18 mm | 106,1 bar / 1539 psi | 0,500 in / 12,70 mm | 167,7 bar / 2432 psi | 0,906 in / 23,01 mm | 316,3 bar / 4587 psi |

## Factors Influencing Working Pressure

The nominal pressure of hydraulic components undergoes derating with temperature and depends on the material strength. For carbon steel pipes per ASTM A106, the allowable stress decreases as temperature increases, which reduces the hot maximum pressure. The typical safety factor in hydraulic systems ranges from 4:1 to 6:1 over the burst pressure.

## Basic Calculation Formulas

The working pressure of a cylindrical tube is estimated using the Barlow formula:

**P = (2 × S × t) / D**

Where:
*   P = allowable pressure
*   S = working stress of the material
*   t = wall thickness
*   D = outer diameter

To calculate the friction head loss in straight pipes of constant cross-section, the Darcy-Weisbach equation is used:

**h = f × (L / D) × (V² / (2g))**

With the corresponding pressure drop:
**Δp = f × (L / D) × (ρ × V² / 2)**

Where f is the friction factor (obtained from the Colebrook equation for turbulent flow), L the length, D the diameter, V the mean fluid velocity, and ρ its density.

## Frequently Asked Questions

What is the most common standard pressure in mobile hydraulic systems?  
Mobile hydraulic systems typically operate in the range of 200 to 350 bar, with 250 bar being one of the most widespread nominal pressures.

How much does a test pressure of 1500 psig equal in bar?  
A test pressure of 1500 psig is exactly equivalent to 103,4 bar, a value associated with class 400 flanges per ASTM.

What maximum pressure does a 2-inch Schedule 80 pipe support?  
A 2 in (60,3 mm) Schedule 80 pipe supports a maximum pressure of approximately 273,2 bar / 3963 psi at 100 °F (38 °C).

What is the hydrostatic test pressure for ASTM A105 class 600 flanges?  
The hydrostatic test for ASTM A105 class 600 flanges is 153,4 bar / 2225 psig.

What working pressure does a 1-inch Schedule 160 pipe have?  
A 1 in Schedule 160 pipe reaches a maximum pressure of 618,4 bar / 8969 psi at ambient temperature.

What is the difference between PN and class in terms of pressure?  
The PN (Nominal Pressure) designation is expressed in bar (e.g., PN 250 = 250 bar), while the ASME class (150, 300, etc.) refers to psig; a class 150 is equivalent to 10,3 bar of service pressure for carbon steel.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hydrostatic-test-pressure-flanges-d_1339.html
- **engineersedge.com**: https://www.engineersedge.com/fluid_flow/steel-pipe-pressure-ratings.htm
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
