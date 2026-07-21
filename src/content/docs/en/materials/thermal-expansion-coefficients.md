---
title: "Thermal expansion coefficients"
sidebar:
  label: "Thermal expansion coefficients"
description: "Technical reference: Thermal expansion coefficients"
keywords: ["coefficient thermal expansion metals CTE", "materials"]
category: "materials"
topic: "cross-reference"
subcategory: "thermal-expansion"
skill: "material-data-comparison"
launch_phase: 1
last_updated: "2026-07-21"
verified: true
---

## Chemical composition

The coefficient of thermal expansion (CTE) is not a property directly associated with a fixed chemical composition, but a thermomechanical response that depends on the type of atomic bond and the crystal structure of each material. However, for practical purposes, CTE values are tabulated for pure metals and engineering alloys with standardized compositions. The following table lists the mean linear CTE (α) of representative metals and alloys, expressed in imperial (10⁻⁶ in/in·°F) and SI (10⁻⁶ m/m·°C) units, along with the temperature measurement range when known.

| Metal / Alloy | Temperature range (°F) | CTE (10⁻⁶ in/in·°F) | CTE (10⁻⁶ /°C) |
| --- | --- | --- | --- |
| Pure aluminum | 68 – 212 | 13.1 | 23.6 |
| Aluminum 6061 | 68 – 212 | 13.0 | 23.4 |
| Aluminum alloy 7075 | 68 – 212 | 13.1 | 23.6 |
| Yellow brass | 68 – 572 | 11.3 | 20.3 |
| Red brass (85% Cu) | 68 – 572 | 10.4 | 18.7 |
| Aluminum bronze | 68 – 572 | 9.0 | 16.2 |
| Electrolytic copper (C11000) | 68 – 572 | 9.8 | 17.6 |
| Beryllium copper (C17200) | 68 – 212 | 9.9 | 17.8 |
| Gray cast iron | 32 – 212 | 5.8 | 10.4 |
| Carbon steel (rolled) | 70 – 800 | 7.8 | 14.0 |
| Stainless steel 304 | 68 – 212 | 9.6 | 17.3 |
| Stainless steel 316 | 68 – 212 | 8.8 | 15.8 |
| Invar (Fe‑36%Ni) | 68 – 212 | 0.67 | 1.2 |
| Kovar | 77 – 392 | 3.05 | 5.5 |
| Pure titanium | 68 – 200 | 4.8 | 8.6 |
| Ti‑5Al‑2.5Sn | 68 – 200 | 5.3 | 9.5 |
| Magnesium | 68 – 212 | 14.0 | 25.2 |
| Tungsten | 68 – 212 | 2.5 | 4.5 |
| Molybdenum | 68 – 212 | 3.0 | 5.4 |
| Nickel 200 | 68 – 212 | 8.5 | 15.3 |
| Monel 400 | 32 – 212 | 7.7 | 13.9 |
| Hastelloy C | 70 – 200 | 5.3 | 9.5 |

The values come from standardized measurements and may vary with microstructure, thermal history, and exact composition within the limits of each alloy.

## Mechanical properties

CTE is not a direct mechanical property, but it governs the generation of thermal stresses when a component is constrained. A temperature difference of 100 °C in a carbon steel bar (CTE ≈ 14 × 10⁻⁶ /°C, elastic modulus ≈ 200 GPa) can induce a compressive or tensile stress close to 280 MPa if expansion is fully restrained. The magnitude of thermal stress (σ) is estimated by σ = E · α · ΔT, therefore precise knowledge of CTE is critical to avoid plastic deformation or brittle fracture. The mechanical properties of the material (yield strength, tensile strength) determine the safety margin against these induced stresses. Dilatation tests are performed on specimens not subjected to external load; the contact force of the probe in a typical TMA ranges between 0.001 and 0.1 N, insufficient to alter the mechanical properties of the sample.

## Physical properties

The linear coefficient of thermal expansion represents the fractional change in length per unit temperature increase and is measured in K⁻¹ or °C⁻¹ (numerically identical because they are temperature differences). The value α is defined as α = (ΔL / L₀) / ΔT, where L₀ is the reference length usually measured at 20 °C. At room temperature, materials exhibit three-dimensional expansion which, in isotropic solids, is related to the volumetric CTE β by β ≈ 3α. Density decreases as temperature increases; for example, a block of pure aluminum (α ≈ 23.6 × 10⁻⁶ /°C) reduces its density by 0.7 % when going from 20 °C to 120 °C. Materials with metallic bonding tend to have moderate α values (10–25 × 10⁻⁶ /°C), while covalent ceramics and glasses have lower coefficients (0.5–10 × 10⁻⁶ /°C). CTE also influences the speed of sound and thermal conductivity through the anharmonicity of the crystal lattice.

## Thermal properties

CTE is itself a fundamental thermal property. Its dependence on temperature makes it necessary to specify the measurement range. The most widely used method for its determination is thermomechanical analysis (TMA), which records the height variation of a specimen while it is heated at a controlled rate, typically 5 °C/min, with a nitrogen atmosphere (flow ≈ 20 cm³/min). The achievable precision with equipment like the TMA 4000 is ±0.1 µm in displacement, allowing measurement of α with uncertainty below 1 % in samples 10 mm in height. Thermal expansion is not linear over wide ranges; therefore data are reported as mean values over an interval or fitted to a polynomial α(T). Materials like Invar maintain an extremely low CTE (< 1.5 × 10⁻⁶ /°C) up to about 200 °C, while aluminum shows a gradual increase in α above 100 °C. The table included in the chemical composition section lists representative mean values.

## Applications by industry

Differences in CTE between materials drive design decisions in multiple sectors:

- **Electronics and semiconductors**: ceramic substrates (α ≈ 3–7 × 10⁻⁶ /°C) must match silicon (α = 2.6 × 10⁻⁶ /°C) to avoid delamination in thermal cycles. Kovar (α ≈ 5.5 × 10⁻⁶ /°C) is used in glass-to-metal feedthroughs.
- **Aerospace**: aluminum 7075 structures (α = 23.6 × 10⁻⁶ /°C) require expansion joints that compensate for temperature changes of more than 100 °C during flight.
- **Energy**: stainless steel 316 pipes (α = 15.8 × 10⁻⁶ /°C) transport hot fluids and require precisely calculated expansion loops.
- **Construction**: structural steel (α = 14 × 10⁻⁶ /°C) and concrete (α = 10–12 × 10⁻⁶ /°C) are combined because their CTEs are similar, reducing thermal cracking.
- **Precision optics**: low-expansion ceramics such as Zerodur (α < 0.1 × 10⁻⁶ /°C) are used in telescope substrates.

## Comparison with similar materials

When comparing families of metals, a clear hierarchy of CTE is observed:

- **Refractory metals** (W, Mo, Ta): α between 2.5 and 5.4 × 10⁻⁶ /°C. Ideal for high-temperature applications requiring dimensional stability.
- **Steels and cast irons**: most carbon and stainless steels have α between 10 and 18 × 10⁻⁶ /°C. Austenitic stainless steels (300 series) have higher CTE than ferritic (400 series) and martensitic ones.
- **Aluminum alloys**: α around 23–25 × 10⁻⁶ /°C, approximately twice that of steels. Their lightness compensates for the greater expansion in many applications.
- **Copper alloys**: values between 16 and 21 × 10⁻⁶ /°C, depending on the proportion of zinc or tin. Brasses usually have higher α than bronzes.
- **Nickel alloys** (Inconel, Monel): α between 13 and 16 × 10⁻⁶ /°C, offering a compromise between corrosion resistance and thermal stability.

Material selection for fixed joints (welding, adhesive) requires that the CTEs on both sides of the joint do not differ by more than 2–3 × 10⁻⁶ /°C if large thermal cycles are expected.

## Frequently asked questions (FAQ)

### What is the coefficient of thermal expansion?
Linear CTE is the fractional change in length per degree of temperature; for example, carbon steel has a CTE of approximately 14 × 10⁻⁶ /°C, meaning a 1 m bar elongates 14 µm when increasing 1 °C.

### How is CTE measured with precision?
Precise measurement is performed with a thermomechanical analyzer (TMA) capable of detecting displacements below 0.1 µm. A commercial instrument such as the PerkinElmer TMA 4000 achieves that resolution working with samples 10 mm in height and nitrogen atmosphere.

### What is the CTE of electrolytic copper?
Copper C11000 has a CTE of 9.8 × 10⁻⁶ in/in·°F (17.6 × 10⁻⁶ /°C) in the range of 68 to 572 °F, according to standardized data compiled by Engineering Toolbox.

### Why is CTE critical in joint design?
A CTE difference of only 5 × 10⁻⁶ /°C between two rigidly joined materials can generate stresses above 100 MPa for a temperature change of 50 °C, causing fatigue failure or delamination.

### Does CTE vary with temperature?
Yes, CTE is not constant. For example, stainless steel 304 goes from 9.6 × 10⁻⁶ in/in·°F in the range 68–212 °F to approximately 10.4 × 10⁻⁶ in/in·°F when reaching 600 °F, an increase close to 8%.

### Which engineering metal has the lowest CTE?
The Invar alloy (Fe‑36%Ni) exhibits an exceptionally low CTE of 0.67 × 10⁻⁶ in/in·°F (1.2 × 10⁻⁶ /°C) in the range 68–212 °F, almost ten times lower than that of common steel.

## Sources Consulted

- **azom.com**: https://www.azom.com/article.aspx?ArticleID=21969
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/thermal-expansion-metals-d_859.html
- **steelnumber.com**: https://www.steelnumber.com/en/standard_steel_eu.php?gost_number=10283
