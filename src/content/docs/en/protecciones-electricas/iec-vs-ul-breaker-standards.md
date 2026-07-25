---
title: "IEC vs UL breaker standards comparison"
sidebar:
  label: "IEC vs UL breaker standards comparison"
description: "Technical reference: IEC vs UL breaker standards comparison"
keywords: ["IEC vs UL circuit breaker standards comparison", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breaker-standards"
subcategory: "iec-vs-ul-breakers"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

IEC standards and UL standards represent the two dominant regulatory frameworks for low and medium voltage circuit breakers worldwide. While IEC standards, published by the International Electrotechnical Commission, are in effect in most of Europe, Asia and Latin America, UL (Underwriters Laboratories) and ANSI standards are required mainly in the United States and Canada. Although both aim to guarantee safety and reliability, they differ in test parameters, design philosophy and installation requirements, making a detailed analysis necessary to select the appropriate device according to the target market.

## Geographical scope and recognition
IEC standards are adopted as national standards in more than 170 countries, while UL/ANSI standards are mandatory in the United States, Canada and in projects with North American investment. Approximately 80% of commercially marketed breakers globally are manufactured under IEC guidelines, although equipment with UL certification dominates the North American market with more than 500 million installed devices. Outside North America, many countries accept products with dual IEC/UL certification, but local homologation usually requires additional tests according to national regulations.

## Main applicable standards
The IEC 60947-2 series covers circuit breakers for industrial and distribution applications, while IEC 60898-1 is intended for breakers for domestic use and similar installations. In the American realm, UL 489 governs molded case and power circuit breakers, and UL 1077 applies to supplementary protectors within equipment. The fundamental difference is that UL 489 devices are certified as branch circuit protection devices, while IEC 60947-2 devices require coordination tests with other elements of the installation defined by the user.

## Comparative table of technical characteristics
The following table summarizes the most relevant construction and operating parameters for typical 250 A breakers in both normative families.

| Characteristic | IEC 60947-2 (industrial breaker) | UL 489 (molded case breaker) |
| --- | --- | --- |
| Rated operational voltage | 690 V AC / 600 V AC (typical values) | 600 V AC / 600 V AC |
| Rated current | 250 A | 250 A |
| Ultimate breaking capacity (Icu) at 480 V | 65 kA / 65 kA | 65 kA / 65 kA |
| Reference temperature for calibration | 40 °C / 104 °F | 40 °C / 104 °F (with different trip margins) |
| Terminals permitted | 70 °C / 158 °F with conductors sized according to IEC 60364 | 60 °C / 140 °F or 75 °C / 167 °F according to NEC |
| Minimum air insulation distance | 12,7 mm / 0,5 in (for 600 V) | 25,4 mm / 1 in (for 600 V) |
| Dielectric strength test between contacts | 2 200 V AC / 2 200 V AC | 2 200 V AC / 2 200 V AC (60 Hz) |

## Enclosures and environmental protection
Breakers designed under IEC are usually certified with IP ratings according to IEC 60529, while in the UL/ANSI environment, NEMA classifications are used. The correspondence table most accepted by standardization bodies is shown below, prepared from verified data from NEMA and IEC.

| NEMA enclosure type | Equivalent IEC designation | Protection description |
| --- | --- | --- |
| NEMA 1 (indoor use) | IP10 | Protected against solid objects up to 50 mm / 1.97 in, e.g., accidental contact with hands. |
| NEMA 2 (drip-tight indoor) | IP11 | Protected against solid objects up to 50 mm / 1.97 in and against vertical dripping of water. |
| NEMA 3 / 3S (dusttight, rainproof, outdoor) | IP54 | Protected against dust with limited ingress (no harmful deposit) and against water splashed from all directions. |
| NEMA 3R (rainproof and sleet-resistant) | IP14 | Protected against solid objects up to 50 mm / 1.97 in and against water splashed from all directions. |
| NEMA 4 / 4X (watertight and dusttight, indoor/outdoor) | IP56 | Protected against dust with limited ingress and against powerful water jets. |
| NEMA 6 / 6P (submersible) | IP67 | Totally protected against dust. Protected against immersion between 15 cm and 1 m (6 in and 3.3 ft). |
| NEMA 12 / 12K (dusttight and drip-tight indoor) | IP52 | Protected against dust with limited ingress and against falling water in direct spray up to 15° from vertical. |
| NEMA 13 (oil-tight and dusttight indoor) | IP54 | Protected against dust with limited ingress and against water splashed from all directions. |

Note: NEMA classifications meet or exceed the equivalent IEC requirements, so the conversion from IEC to NEMA is not direct and must be evaluated case by case.

## Basic insulation level (BIL)
BIL represents the impulse withstand voltage that the breaker must withstand without insulation puncture. For medium voltage breakers, typical values according to American and Indian standards are summarized in the following table, constructed from verified data from Electrical4U.

| Rated system voltage | BIL according to Indian standards (based on IEC) | BIL according to British standards (ANSI reference) |
| --- | --- | --- |
| 11 kV / 11 kV | 75 kV / 75 kV | — |
| 33 kV / 33 kV | 170 kV / 170 kV | 200 kV / 200 kV |
| 66 kV / 66 kV | 325 kV / 325 kV | 450 kV / 450 kV |
| 132 kV / 132 kV | 550 kV / 550 kV or 650 kV / 650 kV | 650 kV / 650 kV or 750 kV / 750 kV |
| 220 kV / 220 kV | 900 kV / 900 kV or 1050 kV / 1050 kV | 900 kV / 900 kV or 1050 kV / 1050 kV |

The insulation coordination requires that the discharge voltage of the surge arrester be lower than the BIL of the breaker. Typically a protection margin of 20% is maintained for lightning impulses, which in a 33 kV system represents a difference of at least 34 kV between the protection level of the arrester and the BIL of the breaker.

## Certification tests
IEC type tests are governed by the IEC 60947 series of standards and include heating tests at 40 °C / 104 °F, short-circuit tests with power factor from 0.2 to 0.5, and verification of selectivity coordination. UL 489, on the other hand, performs interruption tests at 50 °C / 122 °F ambient, with trip and reclosing sequences simulating 50 operations at rated current and up to 6000 mechanical operations for 250 A breakers. Additionally, UL requires dielectric withstand tests with a voltage of 2 200 V / 2 200 V for 1 minute after short-circuit tests, while IEC may require up to 2 500 V / 2 500 V for assigned voltages above 690 V.

## Typical applications
IEC 60898-1 breakers are the predominant choice in residential and commercial installations in Europe and Asia, while the IEC 60947-2 series covers industrial applications worldwide. UL 489 breakers are mostly installed in distribution panels in North America, feeders of industrial plants and data centers with seismic requirements according to IBC/CBC codes. In sectors such as marine and offshore, the trend is to use dual-certified IEC/UL breakers with IP56 / NEMA 4X enclosures to resist saline environments.

## Frequently Asked Questions (FAQ)
### Can a UL-certified breaker be used in an installation designed under IEC?
Not directly. Although the rated electrical characteristics may coincide, the UL breaker must be evaluated by a local entity to verify that it meets the installation requirements of the applicable IEC standard, especially regarding insulation distances and protection coordination. Many countries require a CE mark or national homologation.

### Is it true that UL breakers interrupt higher currents than IEC breakers?
Not necessarily. The ultimate breaking capacity (Icu) is measured under different test conditions: IEC uses a variable power factor depending on current and UL uses a circuit with fixed X/R. A 250 A breaker may declare 65 kA under both standards, but the safety margin after fault may be different. Direct comparison requires analyzing the complete test sequences.

### Which standard is more demanding regarding fire resistance?
UL 489 includes stricter flammability tests for enclosure materials, such as UL 94 V-0, while IEC 60947-2 relies on IEC 60695-2-1 (glow wire). UL breakers usually require housings with self-extinguishing capability at 850 °C / 1562 °F, while IEC may accept up to 650 °C / 1202 °F for lower rated currents.

### Why do NEMA 4X enclosures not have a direct equivalent in IP?
Because NEMA 4X adds corrosion resistance requirements that are not covered by IP codes. The correspondence table assigns IP56 to NEMA 4, but the "X" implies additional protection against chemical agents and pressure washing, for which the IEC system would require supplementary tests specified by the user.

### Is the basic insulation level (BIL) the same in IEC and ANSI?
The BIL values for the same rated system voltage may differ slightly between IEC and ANSI practices, as shown by 170 kV versus 200 kV at 33 kV. However, the current trend is to harmonize standardized insulation levels, so at high voltage the differences have been reduced to margins below 10%.

### Can an IEC breaker replace a UL breaker in a machine exported to the United States?
Only if the breaker has the corresponding UL marking, either through full UL 489 certification or as a recognized component (UR) under UL 508 for applications within industrial panels. Field installation without the UL mark is not accepted by authorities with jurisdiction (AHJ) that apply the National Electrical Code (NEC).

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-iec-enclosure-standards-d_920.html
- **electrical4u.com**: https://www.electrical4u.com/basic-insulation-level-definition-table-and-calculation/
