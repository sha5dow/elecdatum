---
title: "Copper vs aluminum conductor comparison"
sidebar:
  label: "Copper vs aluminum conductor comparison"
description: "Technical reference: Copper vs aluminum conductor comparison"
keywords: ["copper vs aluminum conductor comparison ampacity", "conductores-cables"]
category: "conductores-cables"
topic: "conductor-materials"
subcategory: "copper-vs-aluminum"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Copper and aluminum are the two predominant conductor materials in power electrical installations. Each presents advantages and limitations depending on their physical, electrical, and economic properties. Below, the most relevant technical characteristics are compared for selecting the appropriate conductor according to the application.

## Physical properties

| Property | Copper (Cu) | Aluminum (Al) |
| --- | --- | --- |
| Density at 20 °C | 8960 kg/m³ / 0.324 lb/in³ | 2700 kg/m³ / 0.098 lb/in³ |
| Melting point | 1083 °C / 1981 °F | 660 °C / 1220 °F |
| Coefficient of linear thermal expansion | 16,5 × 10⁻⁶ /°C (9,2 × 10⁻⁶ /°F) | 23,1 × 10⁻⁶ /°C (12,8 × 10⁻⁶ /°F) |
| Modulus of elasticity | 117 GPa / 17 000 ksi | 69 GPa / 10 000 ksi |
| Tensile strength (annealed) | 200 – 250 MPa / 29 – 36 ksi | 60 – 90 MPa / 9 – 13 ksi |

## Electrical conductivity

The electrical conductivity of annealed copper is taken as reference at 100 % IACS (International Annealed Copper Standard). Electrical-grade aluminum (EC‑1350) has a conductivity of approximately 61 % IACS, which is equivalent to a resistivity 64 % higher than that of copper. The typical resistivities at 20 °C are:

| Material | Electrical resistivity (20 °C) |
| --- | --- |
| Copper | 0,01724 Ω·mm²/m (10,37 Ω·cmil/ft) |
| Aluminum | 0,0282 Ω·mm²/m (17,0 Ω·cmil/ft) |

The resistance of a conductor of constant cross-section is calculated with the following expression:

> **R = ρ · L / A**

where:

| Variable | Meaning | Unit (metric / imperial) |
| --- | --- | --- |
| R | Electrical resistance | Ω |
| ρ | Material resistivity | Ω·mm²/m or Ω·cmil/ft |
| L | Conductor length | m or ft |
| A | Cross-sectional area | mm² or cmil |

## Ampacity

For the same cross-section, copper allows a current approximately 28 % higher than aluminum, due to its lower resistivity. The maximum current chart from *Engineering Toolbox* (86 °F / 30 °C ambient) shows that a 6 mm² aluminum conductor can carry about 30 A. Based on the conductivity ratio, copper of the same section would support about 38 A.

| Section (mm² / approx. AWG) | Maximum current copper (A) | Maximum current aluminum (A) |
| --- | --- | --- |
| 6 mm² (~ AWG 10) | 38 | 30 |

To obtain the same ampacity as a copper conductor, the aluminum conductor must be sized with a cross-section 1,64 times larger. In practice, this translates to selecting an aluminum gauge two AWG numbers lower (thicker) than the equivalent copper.

## Weight and density

With a density nearly 3,3 times lower, aluminum drastically reduces the weight of the conductor. For an equivalent ampacity, where the aluminum area is 1,64 times that of copper, the weight per unit length ratio is calculated with:

> **W_Al / W_Cu = 1,64 × (d_Al / d_Cu) = 1,64 × (2700 ÷ 8960) ≈ 0,49**

That is, an aluminum conductor sized for equal current-carrying capacity weighs approximately half that of its copper equivalent. For example, 100 m of a 10 mm² copper conductor weighs 0,90 kg (0,060 lb/ft), while the equivalent 16 mm² aluminum conductor weighs 0,44 kg (0,030 lb/ft).

## Mechanical strength

Copper has a tensile strength 2,5 to 4 times higher than aluminum, in addition to greater fatigue and *creep* resistance. This makes it preferable in applications where the conductor will be subjected to mechanical stresses, vibrations, or repeated thermal cycles. Aluminum, being more ductile and with a lower yield strength, requires greater care in laying and fastening to avoid plastic deformations that reduce contact pressure at terminals.

## Thermal expansion and joints

Aluminum has a coefficient of thermal expansion 40 % higher than copper. Heating and cooling cycles in connections can cause progressive loosening if terminals designed for aluminum, with pressure washers or spring systems, are not used. For this reason, installations with aluminum conductors require specific connectors (marked Al or Cu/Al) and, in many cases, periodic retightening.

## Corrosion and oxidation resistance

Both metals develop an oxide layer when exposed to air, but that of aluminum (Al₂O₃) is an excellent electrical insulator and forms instantly. This requires applying anti-oxidant compounds (inhibitor paste) at connections and brushing the conductor immediately before installation. Copper also oxidizes, but its oxides remain moderately conductive and present a lower risk of failure due to high contact resistance.

## Comparative cost

According to COMEX prices reported by Southwire (July 2023), copper was quoted at 6,4150 USD/lb and aluminum at 2,7172 USD/lb, giving a cost per unit mass ratio of 0,423 (Al/Cu). Combining density and equivalent cross-section for equal ampacity, the cost of the aluminum conductor is approximately 21 % of the cost of the copper conductor. The comparative formula is:

> **Costo_Al / Costo_Cu = 1,64 × (d_Al/d_Cu) × (precio_Al/precio_Cu) ≈ 0,21**

Thus, for each monetary unit invested in a copper conductor, only 0,21 units would be spent on the aluminum equivalent in ampacity.

## Cross-section equivalence

To replace a copper conductor with an aluminum one while maintaining the same current-carrying capacity and voltage drop, the following basic rule is used:

> **A_Al = 1,64 × A_Cu**

Some practical equivalences between standard sizes:

| Copper (mm²) | Equivalent aluminum (mm²) | Copper (AWG) | Aluminum (AWG) |
| --- | --- | --- | --- |
| 1,5 mm² | 2,5 mm² | 16 AWG | 14 AWG |
| 2,5 mm² | 4 mm² | 14 AWG | 12 AWG |
| 4 mm² | 6 mm² | 12 AWG | 10 AWG |
| 6 mm² | 10 mm² | 10 AWG | 8 AWG |
| 10 mm² | 16 mm² | 8 AWG | 6 AWG |
| 16 mm² | 25 mm² | 6 AWG | 4 AWG |

## Frequently Asked Questions (FAQ)

### What is the ampacity of a 6 mm² copper conductor compared to an aluminum one of the same section?
   6 mm² copper can carry approximately 38 A under 30 °C ambient conditions, while aluminum of the same size is around 30 A (according to Engineering Toolbox maximum current data). The difference is due to the higher resistivity of aluminum.

### What aluminum cross-section is electrically equivalent to a 10 mm² copper conductor?
   For equal ampacity, an aluminum conductor of approximately 16 mm² is required (1,64 times the copper area). In AWG terms, an 8 AWG copper conductor (approximately 8,37 mm²) is replaced by a 6 AWG aluminum conductor (13,3 mm²), although the two AWG size rule is common in North American practice.

### How much does a copper conductor weigh compared to aluminum for the same current-carrying capacity?
   For the same ampacity, the aluminum conductor weighs about 49 % of the copper weight. For every 100 meters, a 10 mm² copper conductor weighs 0,90 kg (0,060 lb/ft), and the equivalent 16 mm² aluminum weighs 0,44 kg (0,030 lb/ft).

### What is the resistance of a 2,5 mm² copper conductor 100 m long, and how does it compare to aluminum?
   The copper resistance at 20 °C is: R = 0,01724 × 100 / 2,5 = 0,69 Ω. In aluminum of the same cross-section, the resistance would be 0,0282 × 100 / 2,5 = 1,13 Ω, which is 64 % higher. The resistance ratio matches the resistivity ratio (≈ 1,64).

### How much more expensive is a copper conductor compared to aluminum for equal capacity?
   With raw material prices of 6,415 USD/lb for copper and 2,717 USD/lb for aluminum (COMEX, July 2023), the cost of the equivalent ampacity aluminum conductor is only 21 % of the cost of copper. In other words, copper is 4,76 times more expensive than aluminum for the same electrical performance.

### What thermal expansion does aluminum exhibit compared to copper in a 30 m section with a 50 °C increase?
   Copper expands approximately 25 mm (0,98 in) and aluminum 35 mm (1,38 in) under the same conditions (30 m × 50 °C). The coefficient of aluminum (23,1 µm/m·°C) generates movements 40 % greater than those of copper (16,5 µm/m·°C), which requires connectors and fastening systems that absorb the difference.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/maximum-current-copper-aluminum-wire-d_1690.html
- **southwire.com**: https://www.southwire.com/calculators/re3-conversion-calculator
