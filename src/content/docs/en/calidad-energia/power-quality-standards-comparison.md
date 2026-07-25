---
title: "Power quality standards comparison"
sidebar:
  label: "Power quality standards comparison"
description: "Technical reference: Power quality standards comparison"
keywords: ["power quality standards comparison IEEE IEC", "calidad-energia"]
category: "calidad-energia"
topic: "power-factor-quality"
subcategory: "power-quality-standards-comparison"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Electric power quality is a fundamental requirement for the safe and efficient operation of industrial, commercial, and residential equipment. International standards define the permissible limits for disturbances such as harmonics, voltage fluctuations, unbalance, and frequency variations, establishing a common framework of compatibility between the network and the connected loads. The comparison among the main standards —IEEE 519, IEC 61000, EN 50160— allows selecting the most appropriate criteria for each application and ensuring regulatory compliance.

## Definition and parameters of power quality

Power quality is defined as the degree to which the voltage, frequency, and waveform of the electricity supply conform to the established specifications. Adequate quality implies a stable supply voltage within the prescribed range, an alternating frequency close to the nominal value, and a sinusoidal voltage curve free from appreciable deformations.

The most relevant parameters for characterizing supply quality are:

- **Continuity of service**: Classification of interruptions (short, long, transient) according to their duration and frequency of occurrence.
- **Steady-state voltage variations**: Slow deviations of the rms value from the nominal value, normally expressed as a percentage.
- **Voltage dips (sags)** and **temporary overvoltages (swells)**: Reductions or increases of the rms voltage between 10 % and 90 % for times ranging from half a cycle to one minute.
- **Transients (impulsive overvoltages)**: Very brief increases (microseconds to milliseconds) of high energy caused by lightning discharges or switching operations.
- **Flicker**: Cyclic or random voltage variations that cause perceptible changes in the light emission of lamps.
- **Harmonics**: Sinusoidal components at integer multiples of the fundamental frequency that distort the waveform.
- **Voltage unbalance**: Difference between the magnitudes or phase angles of the voltages in a three‑phase system.

## Main international standards

The three dominant standard families in power quality are those issued by IEEE (Institute of Electrical and Electronics Engineers), IEC (International Electrotechnical Commission), and CENELEC (European Committee for Electrotechnical Standardization), with EN 50160 as the European reference. Each addresses different aspects of disturbances and defines limits, measurement methods, and evaluation procedures.

- **IEEE 519‑2022**, *Recommended Practice and Requirements for Harmonic Control in Electric Power Systems*, establishes the limits for voltage and current harmonic distortion at the point of common coupling (PCC), as well as limits for interharmonics and the total demand distortion (TDD).
- **IEEE 1159‑2019**, *Recommended Practice for Monitoring Electric Power Quality*, classifies the electromagnetic phenomena that affect power quality and provides guidelines for instrumentation and monitoring.
- **IEC 61000‑3‑2**, *Limits for harmonic current emissions (equipment input current ≤ 16 A per phase)*, sets the emission limits for current harmonics for equipment connected to the public low‑voltage network.
- **IEC 61000‑4‑30**, *Testing and measurement techniques – Power quality measurement methods*, defines standardized measurement methods and aggregation intervals for all power quality parameters, ensuring international comparability of results.
- **EN 50160:2022**, *Voltage characteristics of electricity supplied by public electricity networks*, specifies the voltage characteristics at the supply points of public low‑ and medium‑voltage networks in Europe, including limits for frequency, amplitude, flicker, harmonics, and unbalance.

## Comparison of normative limits

Each standard establishes particular thresholds and methodologies that differ in the evaluation point, the temporal aggregation method, and the limit values. The following table summarizes the most representative limits of the main parameters according to IEEE 519, IEC 61000, and EN 50160 for low‑voltage systems.

| Parameter | IEEE 519‑2022 | IEC 61000‑3‑2 / ‑4‑30 | EN 50160:2022 |
|---|---|---|---|
| Total harmonic voltage distortion (THDv) | 5 % (systems up to 69 kV) | 8 % (compatibility, per IEC 61000‑2‑2) | 8 % (including all harmonics up to order 40) |
| Individual voltage harmonics | 3 % for odd orders, 1,5 % for even orders | 5 % (3rd harmonic), 6 % (5th harmonic), etc. per IEC 61000‑2‑2 | 5 % (3rd harmonic), 6 % (5th harmonic), 5 % (7th harmonic), etc. |
| Harmonic current limit (equipment < 16 A) | TDD defined by Isc/IL ratio (e.g., 5 % for Isc/IL <20) | Class A: absolute limits (e.g., 2,3 A for 3rd harmonic) / Class D: relative limits | Not applicable (network standard, not equipment standard) |
| Short‑term flicker (Pst) | Not directly specified in IEEE 519; addressed in IEEE 1453 | Pst ≤ 1,0 (IEC 61000‑4‑15) | Pst ≤ 1,0 (during 95 % of the weekly time) |
| Long‑term flicker (Plt) | Not specified in IEEE 519 | Plt ≤ 0,65 | Plt ≤ 0,65 (during 95 % of the weekly time) |
| Fundamental frequency variation | 60 Hz ± 0,1 % (interconnected systems) | 50 Hz ± 1 % (99,5 % of the year), ± 2 % (100 % of the time) | 50 Hz ± 1 % (99,5 % of the year), +4%/-6% (100 % of the time) |
| Supply voltage variation | ± 5 % (normal service) | ± 10 % (IEC 60038) | ± 10 % of nominal voltage (95 % of the weekly time) |
| Voltage unbalance (negative sequence) | 3 % (without specific load) | 2 % (IEC 61000‑2‑2) | 2 % (up to 95 % of the weekly time) |

## Frequently Asked Questions (FAQ)

### What is the main difference between IEEE 519 and IEC 61000‑3‑2?

IEEE 519 defines harmonic distortion limits at the point of common coupling (PCC) for complete systems, considering both voltage and current and using the concept of TDD. IEC 61000‑3‑2, in contrast, limits the harmonic current emissions of individual equipment with input current ≤ 16 A, classifying them into classes A, B, C, and D according to their application.

### Does EN 50160 establish mandatory or indicative limits?

EN 50160 specifies the characteristics of the supplied voltage and is contractually applicable in many European countries. It does not impose emission limits for equipment; it describes the values that the network must comply with under normal operating conditions, serving as a reference for quality‑of‑service agreements between distributors and customers.

### How are power quality parameters measured according to IEC 61000‑4‑30?

IEC 61000‑4‑30 establishes standardized measurement methods, defining aggregation intervals of 10/12 cycles (for 50/60 Hz frequency), 150/180 cycles (3 s), and 10 min. It defines two instrument performance classes (Class A for contractual or verification measurements, Class S for statistical studies), the required uncertainty, and the data processing to guarantee repeatability and international comparability.

### What is the CBEMA curve and what is its relationship with power quality standards?

The CBEMA (Computer and Business Equipment Manufacturers Association) curve defines the tolerance envelope of information technology equipment against voltage variations in magnitude and duration. Although it is not an international standard, it is widely used as a design criterion and complements IEEE 1159 and the immunity requirements of the IEC 61000‑4 series.

### What is the difference between the concepts of electromagnetic compatibility and power quality?

Power quality describes the characteristics of the electricity supply, while electromagnetic compatibility (EMC) is the ability of equipment to function correctly in its electromagnetic environment and without generating unacceptable disturbances for other apparatus. The IEC 61000 standards establish compatibility levels, which in turn influence the power quality limits contained in standards such as EN 50160 and IEEE 519.

### Can the same THD value be acceptable according to IEEE 519 and not comply with EN 50160?

Yes, because the evaluation conditions are different. IEEE 519 applies distortion limits at the PCC and considers short‑circuit scenarios (Isc/IL), while EN 50160 evaluates the voltage delivered to the customer during 95 % of the weekly time. A THDv value that complies with IEEE 519 in a robust system may exceed the 8 % limit of EN 50160 if the weekly measurement yields a 95th percentile above, or vice versa.

## References
- **electrical4u.com**: https://www.electrical4u.com/transformer-testing-type-test-and-routine-test-of-transformer/
