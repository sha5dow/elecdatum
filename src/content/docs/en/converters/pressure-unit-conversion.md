---
title: "Pressure unit conversion"
sidebar:
  label: "Pressure unit conversion"
description: "Technical reference: Pressure unit conversion"
keywords: ["pressure unit conversion bar psi MPa kPa", "converters"]
category: "converters"
topic: "units"
subcategory: "pressure-units"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## General description
Pressure unit conversion is fundamental in engineering, meteorology, and industrial processes. The base unit of the International System (SI) is the **pascal (Pa)**, equivalent to 1 newton per square meter. From this reference, multiples such as the kilopascal (kPa = 10³ Pa) and megapascal (MPa = 10⁶ Pa) are derived, as well as other commonly used units such as the **bar** (1 bar = 100 000 Pa), the **standard atmosphere** (atm), **millimeters of mercury** (mmHg), and the imperial units **psi** (pounds-force per square inch) or **inHg** (inches of mercury). This page presents the most precise equivalences and formulas to easily convert from one unit to another, along with notes on accuracy and special cases.

## Units and symbols

| Unit | Symbol | System / Type |
|------|--------|---------------|
| pascal | Pa | SI (derived) |
| kilopascal | kPa | SI (multiple) |
| megapascal | MPa | SI (multiple) |
| bar | bar | metric (non-SI, accepted) |
| millibar | mbar | metric (submultiple of bar) |
| standard atmosphere | atm | conventional unit |
| technical atmosphere | at | technical unit (kgf/cm²) |
| millimeter of mercury | mmHg | manometric unit (metric) |
| inch of mercury | inHg | imperial |
| millimeter of water column | mmH₂O | low pressure unit |
| meter of water column | mH₂O | hydraulic head unit |
| inch of water column | inH₂O | imperial |
| pound-force per square inch | psi | imperial |
| pound-force per square foot | psf | imperial |
| torr | Torr | close to mmHg (1 Torr ≈ 1 mmHg) |
| kilogram-force per cm² | kgf/cm² | technical unit (metric) |

## Conversion table
Each value is expressed simultaneously in metric and imperial units for direct reading.
*Reference conditions: water column at 4 °C; mercury at 0 °C, unless otherwise noted.*

| Reference unit | Equivalents (metric / imperial) |
|----------------|----------------------------------|
| 1 pascal (Pa) | 1 N/m² / 0,01 mbar / 1×10⁻⁵ bar / 9,869×10⁻⁶ atm / 0,0075006 mmHg / 0,00014504 psi / 0,0040147 inH₂O |
| 1 kilopascal (kPa) | 1000 Pa / 10 mbar / 0,01 bar / 0,009869 atm / 7,5006 mmHg / 0,145038 psi / 0,33456 ftH₂O |
| 1 bar | 100 000 Pa (100 kPa) / 0,1 MPa / 0,986923 atm / 750,06 mmHg / 14,5038 psi / 29,53 inHg / 33,46 ftH₂O / 1,01972 kgf/cm² |
| 1 standard atmosphere (atm) | 101 325 Pa / 1,01325 bar / 760 mmHg / 29,9213 inHg / 14,6959 psi / 407,19 inH₂O / 1,03323 kgf/cm² |
| 1 technical atmosphere (at = 1 kgf/cm²) | 98 066,5 Pa / 0,980665 bar / 735,56 mmHg / 28,96 inHg / 14,223 psi / 10 mH₂O |
| 1 psi (lbf/in²) | 6894,76 Pa / 6,8948 kPa / 0,0689476 bar / 0,068046 atm / 51,7149 mmHg / 2,0360 inHg / 27,68 inH₂O |
| 1 mmHg (0 °C) | 133,322 Pa / 1,33322 mbar / 0,0013158 atm / 0,03937 inHg / 0,0193368 psi / 13,5951 mmH₂O |
| 1 inHg (0 °C) | 3386,39 Pa / 33,8639 mbar / 0,033421 atm / 25,4 mmHg / 0,491154 psi / 13,57 inH₂O |
| 1 mmH₂O (4 °C) | 9,80638 Pa / 0,0980638 mbar / 9,6784×10⁻⁵ atm / 0,073555 mmHg / 0,0014223 psi / 0,03937 inH₂O |
| 1 inH₂O (4 °C) | 249,082 Pa / 2,49082 mbar / 0,002458 atm / 1,868 mmHg / 0,036127 psi |
| 1 torr | 133,322 Pa / 1,33322 mbar / 1 mmHg (approx.) / 0,0013158 atm / 0,01934 psi |

## Conversion formulas
All formulas are based on the exact equivalence 1 bar = 100 000 Pa and on the defined values for the standard atmosphere (1 atm = 101 325 Pa) and the inch (1 in = 25,4 mm).

**Direct conversions (multiplication by factor)**
- Pa → bar: \( P_{bar} = P_{Pa} \times 1\times10^{-5} \)
- Pa → atm: \( P_{atm} = P_{Pa} \times 9,86923\times10^{-6} \)
- Pa → mmHg: \( P_{mmHg} = P_{Pa} \times 0,00750062 \)
- Pa → psi: \( P_{psi} = P_{Pa} \times 1,45038\times10^{-4} \)
- bar → Pa: \( P_{Pa} = P_{bar} \times 100\,000 \)
- bar → psi: \( P_{psi} = P_{bar} \times 14,5038 \)
- atm → Pa: \( P_{Pa} = P_{atm} \times 101\,325 \)
- atm → psi: \( P_{psi} = P_{atm} \times 14,6959 \)
- psi → Pa: \( P_{Pa} = P_{psi} \times 6894,76 \)
- psi → bar: \( P_{bar} = P_{psi} \times 0,0689476 \)
- mmHg → Pa: \( P_{Pa} = P_{mmHg} \times 133,322 \)
- inHg → Pa: \( P_{Pa} = P_{inHg} \times 3386,39 \)
- mmH₂O (4 °C) → Pa: \( P_{Pa} = P_{mmH2O} \times 9,80638 \)
- inH₂O (4 °C) → Pa: \( P_{Pa} = P_{inH2O} \times 249,082 \)

**Inverse conversions (division by the same factor)**
- Pa → bar: to convert 500 000 Pa to bar, \( 500\,000 / 100\,000 = 5\ \text{bar} \)
- psi → atm: \( P_{atm} = P_{psi} / 14,6959 \)
- inHg → mmHg: \( P_{mmHg} = P_{inHg} \times 25,4 \)

**Numerical example (metric + imperial)**
Convert 2,5 bar to psi and to kPa:
\( 2,5\ \text{bar} \times 14,5038 = 36,26\ \text{psi} \)
\( 2,5\ \text{bar} \times 100\ \text{kPa/bar} = 250\ \text{kPa} \)

## Notes on accuracy and special cases
- The equivalence **1 bar = 100 000 Pa** is exact by definition, so it introduces no rounding error in conversions involving pascals or bars.
- **1 atm = 101 325 Pa** is an exact value adopted by international convention, so conversions between atm and Pa are exact as long as this full figure is used.
- The relationship **1 inHg ≈ 25,4 mmHg** is geometrically exact because the inch is defined as 25,4 mm. However, the equivalence in pascals depends on the density of mercury at a given temperature; 0 °C (13595,1 kg/m³) is assumed for both mmHg and inHg in most standards.
- The factor **1 psi = 6894,7572931783 Pa** is very precise. In engineering it is usually rounded to **6894,76 Pa**; the relative error is less than 0,00004 %. For high-precision applications it is recommended to use the full value.
- Conversions involving **kgf/cm²** depend on the standard acceleration of gravity (9,80665 m/s²). Any local variation of *g* would require correction, although for practical purposes the standard value is used.
- For **gage pressures** (relative), care must be taken when using conversions that mix absolute units. The standard atmosphere and the bar usually refer to absolute pressure. If working with relative pressure (e.g., 2 bar gage), the conversion to psi gage uses the same conversion factor (2 bar relative = 29,0 psi relative).

## FAQ
1. **How many pascals exactly are in 1 bar?**  
   One bar equals exactly 100 000 Pa (100 kPa). This equivalence is defined by international consensus, so there is no uncertainty in the conversion between bar and pascal.

2. **How many psi correspond to 2,5 bar?**  
   2,5 bar are 36,26 psi (2,5 × 14,5038). Expressed in metric units it would be 250 kPa or 0,25 MPa; in imperial units, 36,26 lbf/in².

3. **How many mmHg are in a standard atmosphere?**  
   The standard atmosphere is defined as exactly 760 mmHg at 0 °C. In imperial units it equals 29,9213 inHg.

4. **What pressure in psi does 50 MPa represent?**  
   50 MPa are 50 000 kPa, i.e., 7251,9 psi (50 000 × 0,145038). This conversion shows that 50 MPa are approximately 7252 psi, a typical value in high-pressure hydraulic systems.

5. **How many meters of water column does a pressure of 0,5 psi produce?**  
   0,5 psi equals 0,352 mH₂O (0,5 psi × 0,70307 mH₂O/psi, since 1 psi ≈ 0,703 mH₂O). In imperial units it would be 13,84 inH₂O.

6. **Is it correct to use kg/cm² as a pressure unit?**  
   Technically 1 kgf/cm² is a pressure unit (force per area) if it is understood that the mass of 1 kg is multiplied by standard gravity (9,80665 m/s²). Its numerical value is 98 066,5 Pa; it equals 0,980665 bar and 14,223 psi. Although it is not an SI unit, it is still used in industrial contexts.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pressure-units-converter-d_569.html
- **unitconverters.net**: https://www.unitconverters.net/pressure-converter.html
- **convertworld.com**: https://www.convertworld.com/en/pressure/bar.html
