---
title: "Ground resistance testing methods"
sidebar:
  label: "Ground resistance testing methods"
description: "Technical reference: Ground resistance testing methods"
keywords: ["ground resistance testing method fall of potential", "puesta-tierra"]
category: "puesta-tierra"
topic: "resistance-testing"
subcategory: "ground-resistance-testing"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Ground resistance testing is the technical procedure to quantify the opposition that the ground offers to the passage of electric current from a buried electrode. Its value determines the system's ability to safely dissipate fault currents or lightning strikes. A low and stable value is essential to ensure the protection of people, equipment, and the operational continuity of electrical installations.

## Factors Affecting Ground Resistance
Ground resistance directly depends on the resistivity of the surrounding soil, which varies according to its composition, moisture, and temperature. The resistivity of the electrode materials and the contact resistance with the ground are usually negligible compared to that of the soil itself. The following table provides indicative resistivity values for different soil types.

| Soil Type | Resistivity Range (Ω·m / Ω·ft) |
|---|---|
| Compacted clay | 100 - 200 Ω·m / 328 - 656 Ω·ft |
| Soft clay | 50 Ω·m / 164 Ω·ft |
| Clayey sand | 50 - 500 Ω·m / 164 - 1640 Ω·ft |
| Humus, topsoil | 10 - 150 Ω·m / 33 - 492 Ω·ft |
| Granite | 1500 - 10000 Ω·m / 4920 - 32800 Ω·ft |
| Weathered granite | 100 - 600 Ω·m / 328 - 1968 Ω·ft |
| Jurassic marl | 30 - 40 Ω·m / 98 - 131 Ω·ft |
| Fissured limestone | 500 - 1000 Ω·m / 1640 - 3280 Ω·ft |
| Marl | 100 - 200 Ω·m / 328 - 656 Ω·ft |
| Mica schist | 800 Ω·m / 2624 Ω·ft |
| Peat | 5 - 100 Ω·m / 16 - 328 Ω·ft |
| Sandstone | 1500 - 10000 Ω·m / 4920 - 32800 Ω·ft |
| Weathered sandstone | 100 - 600 Ω·m / 328 - 1968 Ω·ft |
| Slate, schist | 50 - 300 Ω·m / 164 - 984 Ω·ft |
| Siliceous sand | 200 - 300 Ω·m / 656 - 984 Ω·ft |
| Calcareous soil | 100 - 300 Ω·m / 328 - 984 Ω·ft |
| Swampy soil | 1 - 30 Ω·m / 3 - 98 Ω·ft |
| Stony subsoil with turf | 300 - 500 Ω·m / 984 - 1640 Ω·ft |
| Rocky ground | 1500 - 3000 Ω·m / 4920 - 9840 Ω·ft |

## Fall-of-Potential Method (3-Point)
This is the reference method for measuring the resistance of a ground electrode, internationally standardized. It consists of circulating a known current between the electrode under test (E) and an auxiliary current electrode (C) driven at a distance, while measuring the voltage drop with a potential electrode (P) placed between them, outside their zones of influence. The resistance is obtained by applying Ohm's law to the ratio between the measured voltage and the injected current.

> **R = V / I**

| Variable | Meaning | Unit |
|---|---|---|
| R | Ground resistance | Ohm (Ω) |
| V | Voltage measured between the electrode under test and the potential electrode | Volt (V) |
| I | Current injected between the electrode under test and the current electrode | Ampere (A) |

Electrode C must be driven at a sufficient distance, typically 5 to 10 times the maximum dimension of the electrode under test. Electrode P is placed at 62% of the distance between E and C to obtain a stabilized reading in homogeneous soils. Before the test, it is mandatory to disconnect the electrode from the rest of the installation to avoid parallel paths that would falsify the measurement.

## Other Measurement Methods
There are alternative techniques for situations where the fall-of-potential method is not feasible or a quick verification without disconnection is required. The clamp or stakeless method uses an inducing clamp and a measuring clamp on the ground conductor, calculating R = V / I; it only works in systems with multiple electrodes in parallel forming a closed loop. The attached rod method connects an auxiliary electrode to the ground electrode with a cable and calculates the resistance from the measured voltage and current, without needing to disconnect the electrodes but requiring good galvanic contact. The star-delta method uses three auxiliary electrodes arranged in an equilateral triangle and applies Kirchhoff's laws to solve for the unknown resistance R from the voltages measured between pairs of electrodes under sequentially injected current.

## Comparative Method Table

| Method | Main Advantage | Relevant Limitation | Typical Accuracy |
|---|---|---|---|
| Fall of Potential (3-point) | High accuracy and regulatory support | Requires disconnection of the electrode and space for auxiliary probes | ±2 - 5 % |
| Clamp (stakeless) | Measurement without disconnection or probes | Only applicable in systems with multiple ground loop | ±10 - 20 % |
| Attached Rod | Does not require disconnecting the installation | Requires low-resistance contact at the cable-electrode junction | ±5 - 10 % |
| Star-Delta (4-point) | Does not require disconnection, useful in confined spaces | Greater number of electrodes and more complex calculations | ±5 - 15 % |

## Typical Ground Resistance Values
The acceptable value depends on the application and applicable standards. In low-voltage installations according to the NEC, it is recommended not to exceed 25 Ω with a single electrode, although an absolute maximum is not required if a second supplementary electrode is installed. For telecommunications systems or data centers, lower values are specified, usually below 3 Ω and even less than 1 Ω in critical sites. The following table provides indicative state criteria based on the measured resistance.

| Resistance Value (Ω / Ω) | Typical Condition |
|---|---|
| < 1 Ω / < 1 Ω | Excellent for sensitive electronic equipment |
| 1 - 5 Ω / 1 - 5 Ω | Suitable for telecommunications and industry |
| 5 - 25 Ω / 5 - 25 Ω | Acceptable for general LV protection |
| > 25 Ω / > 25 Ω | Requires improvement; mandates supplementary electrode per NEC |

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/soil-resistivity-d_1865.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-of-earth/
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Ground-Resistance-It-is-Not-What-You-Think-(12-30-99).php
