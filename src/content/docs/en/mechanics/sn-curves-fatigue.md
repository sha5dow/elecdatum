---
title: "S-N fatigue curves materials"
sidebar:
  label: "S-N fatigue curves materials"
description: "Technical reference: S-N fatigue curves materials"
keywords: ["S-N fatigue curves endurance limit materials", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "sn-curves"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Definition of S-N Curves
The S‑N curve (stress‑number of cycles) or stress-life method is the fundamental tool for predicting fatigue failure in the high-cycle regime (N > 10³ cycles, typically > 10⁴). It plots the nominal alternating stress S (σₐ) against the number of cycles to failure N, both on a logarithmic scale. The curve is obtained experimentally through rotating bending tests with zero mean stress (R = −1). Ferrous materials and titanium exhibit an **endurance limit** or **fatigue limit** (Sₑ): a stress level below which the material can withstand an unlimited number of cycles without failure. In aluminum alloys, copper, and most non-ferrous metals, there is no defined limit; instead, the **fatigue strength** (Sₙf) is used for a specified number of cycles, typically 5 × 10⁸.

The ASTM standard defines _fatigue strength_ (S\_Nf) as “the stress value at which failure occurs after Nf cycles”, and _fatigue limit_ (S\_f) as “the limiting value of stress at which failure occurs when Nf becomes very large”. In machine design, _endurance limit_ (Sₑ) is reserved for steels that actually exhibit a horizontal asymptote, while _fatigue strength_ is used for materials without a true limit.

## Fatigue Limit and Fatigue Strength in Metallic Materials
For carbon and alloy steels, the fatigue limit of polished laboratory test specimens (Sₑ′) is approximately half the ultimate tensile strength (Sᵤₜ), with a maximum value of 290 MPa (42 ksi). In cast irons, aluminums, and coppers, Sₑ′ is estimated as 0.4 times the tensile strength. Typical maximum values are 170 MPa (24 ksi) for cast irons, 130 MPa (19 ksi) for aluminum alloys, and 97 MPa (14 ksi) for copper alloys. In polymers, the fatigue limit corresponds to the intrinsic strength of covalent bonds and can be much lower.

In practice, the actual fatigue limit of the component (Sₑ) is obtained from the theoretical laboratory value by applying a series of modifying factors that consider surface finish, size, load type, temperature, and reliability (see Modifying Factors). For materials without a true limit, such as aluminum 6061‑T6, the adjusted S‑N curve is expressed by the equation:

S = (14 479 / √N) + 96.5 MPa   or   S = (2 100 000 / √N) + 14 000 psi

from which the fatigue strength for the number of cycles of interest is defined.

## Modifying Factors for the Fatigue Limit
The corrected fatigue limit for a real part is calculated as:

Sₑ = Sₑ′ · Cₛ · C\_L · C\_d · C\_t · C\_r · C\_m

where Sₑ′ is the theoretical limit obtained in the laboratory with small-diameter polished specimens subjected to rotating bending.

- **Surface factor (Cₛ)** – depends on the surface finish and the tensile strength of the material. It is expressed with equations of the form Cₛ = a · Sᵤₜᵇ (Sᵤₜ in MPa or ksi depending on the constant). Table [1] presents the coefficients a and b for different finishes, in both metric and imperial units.

| Surface finish | a (MPa) | b (MPa) | a (ksi) | b (ksi) |
|---|---|---|---|---|
| Ground | 1.58 | –0.085 | 1.34 | –0.085 |
| Machined or cold-drawn | 4.51 | –0.265 | 2.70 | –0.265 |
| Hot-rolled | 57.7 | –0.718 | 14.4 | –0.718 |
| Forged | 272 | –0.995 | 39.9 | –0.995 |

Cₛ = a · Sᵤₜᵇ. For example, for a steel with Sᵤₜ = 600 MPa (87 ksi) and machined finish: Cₛ(metric) = 4.51 · 600⁻⁰·²⁶⁵ ≈ 0.84; Cₛ(imperial) = 2.70 · 87⁻⁰·²⁶⁵ ≈ 0.84.

- **Size factor (C\_L)** – for bending and torsion in circular cross sections, depends on diameter d:

| d range | C\_L (bending/torsion) |
|---|---|
| d ≤ 8.0 mm / 0.31 in | 1.0 |
| 8.0 mm < d ≤ 250 mm (0.31 in < d ≤ 9.84 in) | 1.189 · d⁻⁰·⁰⁹⁷ (d in mm) |
| d ≤ 8.3 mm / 0.33 in for axial load | 1.0 |

where d is entered in millimeters in the metric formula. In the imperial system, an equivalent expression is used with d in inches. For non-circular parts, the equivalent diameter dₑ = √(A₉₅) is used, where A₉₅ is the area of the section that supports 95% of the stress.

- **Load factor (C\_d)** – corrects according to the type of loading:

| Load type | C\_d |
|---|---|
| Bending | 1.0 |
| Axial load | 0.85 |
| Torsion (pure shear) | 0.577 |

- **Temperature factor (C\_t)** – for carbon and alloy steels:

| Temperature T | C\_t |
|---|---|
| T ≤ 450 °C / 842 °F | 1.0 |
| 450 °C < T < 550 °C (842 °F < T < 1022 °F) | C\_t = 1 – 0.0058 (T – 450) with T in °C |
| T > 550 °C / 1022 °F | Consult specific tests |

- **Reliability factor (C\_r)** – reflects the statistical scatter of fatigue results:

| Reliability (%) | C\_r |
|---|---|
| 50 | 1.000 |
| 90 | 0.897 |
| 95 | 0.868 |
| 99 | 0.814 |
| 99.9 | 0.753 |

- **Miscellaneous effects factor (C\_m)** – groups the presence of stress concentrators (notches, keyways, corrosion, etc.). For notches, the fatigue stress concentration factor K\_f = 1 + q (K\_t – 1) is used, where q is the notch sensitivity (0 ≤ q ≤ 1). The factor C\_m is taken as 1/K\_f. In the absence of data, a conservative value is C\_m = 1/K\_t.

## Effect of Mean Stress
When the load cycle oscillates about a non-zero mean stress σₘ, the fatigue strength is reduced. The S‑N curves obtained for R = −1 (σₘ = 0) are corrected using the modified Goodman, Gerber, or Soderberg criteria.

**Modified Goodman criterion (linear, conservative):**  
σₐ / Sₑ + σₘ / Sᵤₜ = 1

**Gerber criterion (parabolic, better fit for ductile materials):**  
σₐ / Sₑ + (σₘ / Sᵤₜ)² = 1

**Soderberg criterion (even more conservative, uses S_y):**  
σₐ / Sₑ + σₘ / S\_y = 1

Where σₐ is the allowable alternating stress amplitude, σₘ the mean stress, Sₑ the corrected fatigue limit (with all factors), Sᵤₜ the ultimate tensile strength, and S\_y the yield strength.

In materials with a high S\_y/Sᵤₜ ratio, such as aluminum 6061‑T6, Goodman is overly conservative and Gerber is preferred. For example, for Sₑ = 129 MPa (18.7 ksi), Sᵤₜ = 290 MPa (42 ksi), and S\_y = 262 MPa (38 ksi):

| Criterion | σₘ applied | σₐ allowable (MPa) | σₐ allowable (ksi) |
|---|---|---|---|
| Goodman (σₘ = 150 MPa / 21.8 ksi) | 150 MPa / 21.8 ksi | 62 MPa | 9.0 ksi |
| Gerber (σₘ = 150 MPa / 21.8 ksi) | 150 MPa / 21.8 ksi | 83 MPa | 12.0 ksi |
| No correction (σₘ = 0) | 0 | 129 MPa | 18.7 ksi |

The intersection of the Goodman line or the Gerber parabola with the yield line (σₐ + σₘ = S\_y) defines the maximum mean stress that can be sustained without sustained plastic deformation.

## Cumulative Damage and Miner's Rule
When a component is subjected to a load spectrum with different amplitudes and cycle histories, total damage is estimated using the linear Palmgren‑Miner hypothesis:

D = Σ (n\_i / N\_i)

where n\_i is the actual number of cycles applied at stress amplitude σ\_i, and N\_i is the number of cycles that would cause failure at that same stress level, obtained from the S‑N curve. Failure occurs when D ≥ 1 (or, in some standards, D ≥ a lower value such as 0.7). The rule does not consider the order of load application, so it can be non-conservative in some cases.

| Block | σ\_a (MPa / ksi) | n\_i (cycles) | N\_i from S‑N curve | n\_i / N\_i |
|---|---|---|---|---|
| 1 | 310 / 45.0 | 5 000 | 15 000 | 0.333 |
| 2 | 250 / 36.3 | 50 000 | 200 000 | 0.250 |
| 3 | 180 / 26.1 | 150 000 | >10⁷ (infinite) | 0.0 |
| **Total damage** | | | | **0.583** |

In this example, the accumulated damage is 0.583 < 1, so the part would survive the load sequence without fatigue failure.

## Practical Application Example
**Aluminum 6061‑T6 component under rotating bending**

An aluminum 6061‑T6 shaft is to be designed to withstand 200 000 cycles of fully alternating load (R = −1) without failure, with a reliability of 99% and operating at room temperature. The shaft is machined and has a diameter of 20 mm (0.79 in). There are no stress concentrators.

1. **Material S‑N curve (laboratory):**  
   S = (14 479 / √N) + 96.5 MPa.  
   For N = 2 × 10⁵ cycles: S ≈ 96.5 + 14 479 / √(200 000) ≈ 96.5 + 32.4 = 128.9 MPa (18.7 ksi).

2. **Modifying factors:**  
   - Machined finish, Sᵤₜ = 290 MPa: Cₛ = 4.51 · 290⁻⁰·²⁶⁵ ≈ 0.90.  
   - Size (d = 20 mm): C\_L = 1.189 · 20⁻⁰·⁰⁹⁷ ≈ 0.93.  
   - Load (bending): C\_d = 1.0.  
   - Room temperature: C\_t = 1.0.  
   - Reliability 99%: C\_r = 0.814.  
   - No notches: C\_m = 1.0.  
   Corrected Sₑ = 128.9 · 0.90 · 0.93 · 0.814 ≈ 87.8 MPa (12.7 ksi).

3. **Verification of zero mean stress:**  
   If the applied alternating stress is 60 MPa (8.7 ksi), since 60 < 87.8 MPa, the design is safe for infinite life under R = −1.

4. **Effect of a tensile mean stress:**  
   Suppose a mean stress σₘ = 50 MPa (7.25 ksi) also exists. Using the Gerber criterion with Sₑ = 87.8 MPa and Sᵤₜ = 290 MPa:  
   σₐ allowable = Sₑ [1 – (σₘ / Sᵤₜ)²] = 87.8 [1 – (50/290)²] ≈ 87.8 · 0.970 = 85.2 MPa (12.4 ksi).  
   Since the alternating stress of 60 MPa is still lower, the shaft also satisfies the mean stress condition.

5. **Design curve with maximum allowable mean stress:**  
   For the same material and 200 000 cycles, the maximum mean stress that can be sustained without plastic deformation is limited by the intersection of Gerber with the yield line (S\_y = 262 MPa). This gives σₘ max ≈ 110 MPa (16.0 ksi) and an associated alternating stress of about 75 MPa (10.9 ksi), much higher than the proposed design.

## Reference Tabulated Data
The Table summarizes typical values of fatigue limit (ferrous materials) or fatigue strength at 5 × 10⁸ cycles (materials without a limit), along with the ultimate tensile strength Sᵤₜ. The data correspond to smooth (unnotched) specimens and rotating bending tests.

| Material | Sᵤₜ (MPa / ksi) | Sₑ or S\_f at 5 × 10⁸ (MPa / ksi) |
|---|---|---|
| Carbon steel 1045 | 630 / 91 | ≈315 / 46 (Sₑ) ¹ |
| Alloy steel 4340 (quenched and tempered) | 980 / 142 | ≈490 / 71 (Sₑ) ¹ |
| Gray cast iron ASTM 20 | 310 / 45 | 170 / 24.7 (Sₑ) ² |
| Aluminum alloy 2014‑T6 | 480 / 70 | 130 / 19 (S\_f) ³ |
| Aluminum alloy 6061‑T6 | 290 / 42 | 97 / 14 (S\_f at 2 × 10⁵ cycles ≈129 MPa / 18.7 ksi) |
| Copper alloy (C11000) | 220 / 32 | 97 / 14 (S\_f) ³ |
| Titanium alloy Ti‑6Al‑4V | 900 / 130 | 510 / 74 (Sₑ) ¹ |

¹ Sₑ ≅ 0.5 Sᵤₜ (max. 290 MPa / 42 ksi for steels, laboratory value).  
² Sₑ ≅ 0.4 Sᵤₜ (max. 170 MPa / 24 ksi).  
³ S\_f ≅ 0.4 Sᵤₜ (max. 130 MPa / 19 ksi for aluminums, 97 MPa / 14 ksi for coppers). For design, the modifying factors must be applied.

## FAQ – Frequently Asked Questions

**1. What is the fatigue limit value of a typical steel?**  
The laboratory fatigue limit (Sₑ′) in a normalized carbon steel is approximately half its ultimate tensile strength, with a maximum limit of 290 MPa (42 ksi). For example, a 1045 steel with Sᵤₜ = 630 MPa (91 ksi) has Sₑ′ ≈ 315 MPa (46 ksi), which after applying all modifying factors can drop to values on the order of 150‑200 MPa (22‑29 ksi) in a real part.

**2. What is the difference between fatigue limit and fatigue strength?**  
The fatigue limit (Sₑ) is a stress value below which the material can withstand an unlimited number of cycles (steel, titanium). The fatigue strength (S\_f) is defined for a finite number of cycles, typically 5 × 10⁸ in aluminums and coppers. In aluminum 6061‑T6, the strength at 200 000 cycles is 128.9 MPa (18.7 ksi), while at 10⁸ cycles it would be much lower (98 MPa / 14.2 ksi), never reaching an asymptotic value.

**3. How does surface finish influence fatigue strength?**  
A rough surface finish drastically reduces the fatigue limit. For a steel with Sᵤₜ = 600 MPa (87 ksi), the surface factor Cₛ is 0.84 for machined parts, 0.62 for hot-rolled, and only 0.38 for forged parts. This means that the same forged part could have a fatigue limit of only 38% of the value it would have with a ground finish.

**4. What is the equation describing the S‑N curve of aluminum 6061‑T6?**  
The curve fitted to experimental data between 10³ and 10⁷ cycles, for fully alternating stress (R = −1), is S (MPa) = 14 479 / √N + 96.5 MPa, or S (psi) = 2 100 000 / √N + 14 000 psi. For 200 000 cycles, the predicted stress is 129 MPa (18.7 ksi).

**5. How is Miner's rule applied for a multi-block load?**  
The partial damage of each block is summed. For example: block 1 applies 3 000 cycles at 280 MPa (40.6 ksi), whose life N₁ = 8 000 cycles (partial damage 0.375); block 2 applies 50 000 cycles at 210 MPa (30.5 ksi) with N₂ = 150 000 cycles (damage 0.333). The total damage is 0.375 + 0.333 = 0.708 < 1, so failure is not predicted.

**6. What is the effect of a notch on fatigue strength?**  
A notch introduces a static stress concentration factor Kₜ and reduces fatigue strength according to K\_f = 1 + q (Kₜ − 1). Notch sensitivity q varies between 0 (insensitive material) and 1 (fully sensitive). In a high-strength steel with Kₜ = 2.5 and q = 0.8, the effective factor is K\_f = 1 + 0.8 (2.5 − 1) = 2.2, meaning the corrected fatigue limit will be Sₑ/K\_f, i.e., less than half the nominal value.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/materials/fatigue_design_curves__16022.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/fatigue/fatigue_highcycle.cfm
