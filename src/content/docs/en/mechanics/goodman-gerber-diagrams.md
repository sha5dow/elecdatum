---
title: "Goodman Gerber fatigue diagrams"
sidebar:
  label: "Goodman Gerber fatigue diagrams"
description: "Technical reference: Goodman Gerber fatigue diagrams"
keywords: ["Goodman Gerber modified fatigue diagram", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "goodman-gerber"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Fundamentals of fatigue with mean load

Mechanical components subjected to load cycles rarely experience fully reversed stresses (zero mean). In most cases, the stress fluctuates around a non‑zero mean value, which reduces the material's fatigue limit compared to the fully reversed condition. The interaction between mean stress and stress amplitude is described by fatigue diagrams that establish safe operating regions. The Goodman‑Gerber diagram is the fundamental tool for predicting infinite or finite life of a ductile element under these conditions.

## Mean and alternating stresses

Any cyclic load history can be decomposed into a mean value and an amplitude. For a pure tension cycle the following are defined:

| Quantity | Symbol | Formula | Typical unit (metric / imperial) |
| --- | --- | --- | --- |
| Maximum cycle stress | *σ*<sub>max</sub> | – | 250 MPa / 36.3 ksi |
| Minimum cycle stress | *σ*<sub>min</sub> | – | 50 MPa / 7.3 ksi |
| Mean stress | *σ*<sub>m</sub> | (*σ*<sub>max</sub> + *σ*<sub>min</sub>) / 2 | 150 MPa / 21.8 ksi |
| Stress amplitude | *σ*<sub>a</sub> | (*σ*<sub>max</sub> − *σ*<sub>min</sub>) / 2 | 100 MPa / 14.5 ksi |

The table represents a typical operating point; all cells include the metric‑imperial pair.

## Goodman line

Proposed by John Goodman in 1899, it is a straight line that joins the fatigue limit for fully reversed loading (*σ*<sub>e</sub> or *σ*<sub>w</sub>) with the ultimate tensile strength (*σ*<sub>ult</sub>). Its mathematical expression, including a safety factor *n*, is:

*σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> = 1/*n*

For *n* = 1 it defines the failure boundary. Any operating point (*σ*<sub>m</sub>, *σ*<sub>a</sub>) lying below the line represents infinite life; above, fatigue failure occurs. The Goodman line is conservative and therefore the most used in preliminary design.

## Gerber line

The Gerber parabola fits experimental data of ductile materials better but offers a smaller safety margin. Its equation is:

(*σ*<sub>m</sub>/*σ*<sub>ult</sub>)² + *σ*<sub>a</sub>/*σ*<sub>e</sub> = 1

The curve lies above the Goodman line, except at the ends, indicating that for moderate levels of mean stress the material can withstand somewhat larger amplitudes. Its use is limited to situations where extensive experimental validation is available or where a higher probability of failure is acceptable.

## Soderberg line

The Soderberg line replaces the ultimate strength with the yield strength (*σ*<sub>y</sub>) to protect the component against yielding on the first cycle:

*σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>y</sub> = 1

It is the most restrictive of the three criteria. It is recommended when plastic deformations, even local ones, are unacceptable or when the material does not have a well‑defined fatigue limit.

## Modified Goodman diagram

To account for yielding in the high mean stress regime, an additional line is drawn from the point (*σ*<sub>y</sub>, 0) to the point (0, *σ*<sub>e</sub>). The safe domain is bounded by the envelope that combines the Goodman line in the elastic zone and the yielding line in the plastic zone.

| Criterion | Failure equation (n=1) | Safe region |
| --- | --- | --- |
| Goodman | *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> = 1 | Below the line |
| Gerber | (*σ*<sub>m</sub>/*σ*<sub>ult</sub>)² + *σ*<sub>a</sub>/*σ*<sub>e</sub> = 1 | Below the parabola |
| Soderberg | *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>y</sub> = 1 | Below the line |
| Modified (Goodman + yielding) | Envelope of Goodman and line *σ*<sub>m</sub> = *σ*<sub>y</sub> | Inside the polygon |

## Safety factors in fatigue

The safety factor *n* depends on how the loads increase. Three modes are distinguished:

- **Proportional growth**: both components, mean and alternating, are multiplied by the same factor. *n* = ( *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> )⁻¹.
- **Only mean stress increases**: *n* = (1 − *σ*<sub>a</sub>/*σ*<sub>e</sub>) × *σ*<sub>ult</sub> / *σ*<sub>m</sub>, if *σ*<sub>m</sub> > 0.
- **Only amplitude increases**: *n* = ( *σ*<sub>e</sub> − *σ*<sub>e</sub>*σ*<sub>m</sub>/*σ*<sub>ult</sub> ) / *σ*<sub>a</sub>.

In the diagram, these cases correspond to displacements of the operating point along a line passing through the origin, horizontally, or vertically. The selection of the mode depends on the physics of the loading system.

## Application to helical springs

In compression springs, the shear stress in the inner fiber alternates between a maximum and a minimum value. The following are defined:

*τ*<sub>m</sub> = (*τ*<sub>max</sub> + *τ*<sub>min</sub>) / 2  
*τ*<sub>a</sub> = (*τ*<sub>max</sub> − *τ*<sub>min</sub>) / 2  

where *τ* = *K*<sub>w</sub> 8FD / (πd³) includes the Wahl factor *K*<sub>w</sub>. The shear fatigue strength is related to the axial fatigue limit by *τ*<sub>e</sub> ≈ 0.35 *σ*<sub>e</sub> for spring steels. The Soderberg criterion adapted to shear becomes:

*τ*<sub>a</sub> / *τ*<sub>e</sub> + *τ*<sub>m</sub> / *τ*<sub>y</sub> ≤ 1 / *n*

with *τ*<sub>y</sub> ≈ 0.58 *σ*<sub>y</sub> (von Mises criterion).

## Fatigue resistance table for common steels

| Material | *σ*<sub>ult</sub> (tensile) | *σ*<sub>y</sub> (yield) | Fatigue limit *σ*<sub>e</sub> (rotating bending) |
| --- | --- | --- | --- |
| AISI 1020 rolled | 380 MPa / 55 ksi | 210 MPa / 30 ksi | 190 MPa / 28 ksi |
| AISI 1045 normalized | 620 MPa / 90 ksi | 530 MPa / 77 ksi | 310 MPa / 45 ksi |
| AISI 4140 quenched and tempered | 1100 MPa / 160 ksi | 970 MPa / 141 ksi | 520 MPa / 75 ksi |
| AISI 4340 tempered | 1280 MPa / 186 ksi | 1170 MPa / 170 ksi | 600 MPa / 87 ksi |
| Stainless steel 304 | 515 MPa / 75 ksi | 205 MPa / 30 ksi | 240 MPa / 35 ksi |

The fatigue limits correspond to polished specimens with a range of 10⁷ cycles. In design they must be reduced by surface, size, and reliability factors.

## Design example

An AISI 1045 normalized steel shaft works with a mean stress of 200 MPa / 29 ksi and an amplitude of 90 MPa / 13 ksi. Evaluate the safety factor according to Goodman.

- *σ*<sub>ult</sub> = 620 MPa / 90 ksi, *σ*<sub>e</sub> = 310 MPa / 45 ksi (previous table).  
- Applying Goodman: 1/*n* = *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> = 90/310 + 200/620 = 0.290 + 0.323 = 0.613 → *n* ≈ 1.63.  
- The shaft will support infinite life with a safety factor of 1.63 against fatigue.

Complementary verification with Gerber: 1/*n* = √(1 − *σ*<sub>m</sub>/ *σ*<sub>ult</sub> × *σ*<sub>a</sub>/*σ*<sub>e</sub>) (approximation). For Gerber, *n* ≈ 1.96, less conservative.

## Frequently asked questions (FAQ)

1. **What is the fatigue limit and how is it related to ultimate strength?**  
   The fatigue limit of a ductile steel is approximately half of its ultimate strength (0.5 *σ*<sub>ult</sub>) when *σ*<sub>ult</sub> < 1400 MPa / 203 ksi. For higher strengths, the value stabilizes around 700 MPa / 100 ksi. This rule is valid for rotating bending of polished specimens.

2. **How do I apply the modified Goodman criterion to a shaft with multiaxial stresses?**  
   The von Mises equivalent stress is calculated for the mean component (*σ*<sub>m,eq</sub>) and the alternating component (*σ*<sub>a,eq</sub>) and then entered into the Goodman equation. The standard machine elements procedure gives *n* ≈ 2.0 for a 4140 steel with combined torsion and bending loading.

3. **What is the main difference between Gerber and Goodman in terms of conservatism?**  
   The Goodman line allows safe amplitudes up to 30 % lower than the Gerber curve in the middle zone of the diagram. For example, for a steel with a fatigue limit of 300 MPa / 43.5 ksi and a mean stress of 150 MPa / 21.8 ksi, Goodman allows an amplitude of 227 MPa / 33 ksi compared to 260 MPa / 37.7 ksi for Gerber.

4. **Is it necessary to use Soderberg if the material does not have a defined fatigue limit?**  
   Yes, in aluminum alloys, where the S‑N curve does not become asymptotic, Soderberg is preferred with a fatigue strength value at 5 × 10⁸ cycles (≈ 96 MPa / 14 ksi for Al 6061‑T6) and a yield strength of 276 MPa / 40 ksi, obtaining n > 1.5 for moderate loads.

5. **How does a mean compressive stress affect the fatigue limit?**  
   Mean compression improves fatigue resistance. In the Goodman diagram, the line extends into the negative *σ*<sub>m</sub> quadrant, where the allowable amplitude can even exceed the fatigue limit. For a steel with *σ*<sub>e</sub> = 350 MPa / 51 ksi, a mean compression of 100 MPa / 14.5 ksi allows an amplitude up to 400 MPa / 58 ksi according to some experimental literature.

6. **When is modified Goodman chosen over Gerber?**  
   Modified Goodman is chosen when load uncertainty is high or a robust design is sought, since it reduces the allowable amplitude by 15‑20 % compared to Gerber for the same mean stress. In aerospace applications, where margins are tight, Gerber is preferred accompanied by full testing.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/fatigue/modified_godman_fatugue_curve.htm
- **efunda.com**: https://www.efunda.com/designstandards/springs/calc_comp_fatigue_eqn.cfm
