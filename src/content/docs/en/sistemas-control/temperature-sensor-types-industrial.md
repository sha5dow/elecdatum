---
title: "Industrial temperature sensor types"
sidebar:
  label: "Industrial temperature sensor types"
description: "Technical reference: Industrial temperature sensor types"
keywords: ["industrial temperature sensor types RTD thermocouple", "sistemas-control"]
category: "sistemas-control"
topic: "sensors"
subcategory: "temperature-sensor-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Industrial temperature sensors are grouped into three main categories — thermocouples, resistance temperature detectors (RTDs), and thermistors — each with particular operating principles, ranges, and performance characteristics. The proper selection depends on factors such as required accuracy, working environment, cost, and response speed. Below are detailed their fundamentals, attribute comparison, and typical applications.

Three physical phenomena underpin the operation of temperature sensors: the Seebeck effect for thermocouples, the linear variation of electrical resistance with temperature in metals for RTDs, and the high resistive dependence of semiconductors for thermistors.

In a **thermocouple**, two different metallic conductors (for example, chromel‑alumel in type K) joined at one point generate a small voltage as a function of the temperature difference between the hot junction and the reference junction. This behavior is described by the Seebeck effect:

> **ΔV = -S · ΔT**

Where:

| Variable | Description | Typical Unit |
| --- | --- | --- |
| ΔV | Voltage generated at the ends | μV |
| S | Seebeck coefficient of the metallic pair | μV/°C |
| ΔT | Temperature difference between junctions | °C |

An **RTD** takes advantage of the predictable variation in resistance of noble metals such as platinum, nickel, or copper. Most industrial RTDs use a platinum element with a nominal resistance of 100 Ω at 0 °C (Pt100 designation). The resistance‑temperature relationship is characterized by the temperature coefficient α:

> **α = (R100 – R0) / (100 °C · R0)**

For an industrial Pt100 per IEC 60751, α = 0.00385 Ω/(Ω·°C). Thus, a variation of 1 °C produces a change of approximately 0.385 Ω.

A **thermistor** is a semiconductor resistor (sintered metal oxides) whose resistance changes drastically with temperature. NTC types decrease resistance with increasing temperature, while PTC types increase it. The relationship is highly nonlinear and is expressed by the Steinhart‑Hart equation, but in practice it is characterized by its high sensitivity, on the order of tenths of an ohm per degree.

## Main Types
The industry mainly uses three families of temperature sensors: thermocouples, RTDs, and thermistors, each with standardized sub‑types.

**Thermocouples:** are designated by a letter according to the metal composition. The most common are:
- Type J (iron‑constantan): range -40 °C / -40 °F to 750 °C / 1382 °F.
- Type K (chromel‑alumel): range -200 °C / -328 °F to 1372 °C / 2500 °F.
- Type T (copper‑constantan): range -200 °C / -328 °F to 350 °C / 662 °F.

**RTD:** according to the resistive material and nominal resistance:
- Pt100: 100 Ω at 0 °C, the industrial standard; Pt1000 version (1000 Ω) for higher sensitivity.
- Ni100: 100 Ω at 0 °C with high coefficient but limited range (up to 300 °C / 572 °F).
- Cu10: copper, very linear, usable up to 150 °C / 302 °F.

**Thermistors:**
- NTC (negative temperature coefficient): typical material of manganese, nickel, and cobalt oxides.
- PTC (positive temperature coefficient): polymers or ceramics with abrupt transition.

## Characteristics Comparison
The following table contrasts twelve differentiating attributes of the three sensor types, with all ranges expressed in metric and imperial units.

| Attribute | Thermocouple | RTD | Thermistor |
| --- | --- | --- | --- |
| Cost | Low | High | Low |
| Temperature range | Very wide: -210 °C / -350 °F to +1760 °C / +3200 °F | Wide: -240 °C / -400 °F to +650 °C / +1200 °F | Short to medium: -73 °C / -100 °F to +260 °C / +500 °F |
| Interchangeability | Good | Excellent | Poor to fair |
| Long-term stability | Poor to fair | Good | Poor |
| Accuracy (without adjustment) | Low to medium (0.5–2 °C / 0.9–3.6 °F) | High (0.1–0.3 °C / 0.18–0.54 °F) | Medium (0.1–0.5 °C / 0.18–0.9 °F) |
| Repeatability | Poor to fair | Excellent (typically <0.1 °C) | Fair to good |
| Sensitivity (output) | Low (~10–50 μV/°C) | Medium (~0.4 Ω/°C for Pt100) | Very high (up to several Ω/°C) |
| Response (time constant) | Medium to fast (0.1–10 s) | Medium (0.5–20 s) | Medium to fast (0.1–8 s) |
| Linearity | Fair (requires linearization) | Good (deviation <0.5%) | Poor (exponential curve) |
| Self-heating | None | Very low to low (mW/°C) | High (can exceed 1 mW/°C) |
| Point sensitivity (at tip) | Excellent (exposed junction) | Fair (encapsulated element) | Good (miniature bead) |
| Effect of connecting cables | High (requires compensated cable) | Medium (3 or 4 wire configuration) | Low (high base resistance) |
| Size / Encapsulation | Small to large | Medium to small | Very small to medium |

## Advantages and Disadvantages
Each temperature sensor technology presents at least five specific advantages and several operational limitations.

**Thermocouples**
- *Advantages:* extremely wide temperature range, low cost, rugged construction and small size, fast response in exposed junction, no external power required (self-generating signal).
- *Disadvantages:* low accuracy without calibration, susceptibility to electrical noise, need for compatible extension cable, drift over time at high temperatures, nonlinear voltage-temperature relationship.

**RTD**
- *Advantages:* high accuracy and excellent repeatability, very good long-term stability, linear output over a wide range, interchangeability without recalibration, availability of standardized elements (Pt100 class A).
- *Disadvantages:* high cost, slower response than a thermocouple, small but present self-heating, lower upper temperature limit than thermocouples, greater fragility of the element.

**Thermistors**
- *Advantages:* very high sensitivity (allows detecting thousandths of a degree changes), compact size, low cost, fast response in miniature beads, high base resistance that minimizes cable effects.
- *Disadvantages:* limited temperature range, lack of linearity (requires complex equations), poor interchangeability between units, significant self-heating at high excitation currents, degradation over time in humid environments.

## Typical Applications
Thermocouples dominate in processes with temperatures above 1000 °C / 1832 °F, such as smelting furnaces, boilers, and gas turbines. RTDs are the standard in pharmaceutical, food, and process control industries that demand precision between -50 °C / -58 °F and 400 °C / 752 °F. Thermistors find their niche in narrow-range applications, between -40 °C / -40 °F and 125 °C / 257 °F, such as motor protection, HVAC equipment, batteries, and medical devices.

| Application | Recommended Sensor | Typical Operating Range |
| --- | --- | --- |
| Heat treatment furnaces | Thermocouple type K or S | 600–1600 °C / 1112–2912 °F |
| Chemical reactors | RTD Pt100 with thermowell | -50–300 °C / -58–572 °F |
| Compressors and HVAC systems | NTC 10 kΩ | -20–120 °C / -4–248 °F |
| Pipe surface measurement | Contact RTD or ring thermocouple | -40–500 °C / -40–932 °F |
| Climate chambers | Thermistor type 3 or Pt100 | -70–180 °C / -94–356 °F |
| Non-ferrous metal casting | Thermocouple type K with inconel sheath | 200–1350 °C / 392–2462 °F |

## Installation and Mounting
At least six mechanical probe configurations are used industrially to adapt the sensor to the process. Incorrect mounting can introduce measurement errors greater than 2% of range.

- **Adjustable immersion probes:** allow varying insertion depth; typical in plastics with bayonet connection. Working range from -58 °F (-50 °C) to 900 °F (482 °C).
- **Connection head probes:** the sensor element is mounted in an aluminum IP66/NEMA 4X head with thermowell. Suitable for process temperatures up to 2100 °F (1149 °C).
- **Bolt-on ring probes:** measure surface temperature by fastening with a screw. Available in thermocouple type K/J and RTD Pt100.
- **Cut-to-length probes:** 24 inch (610 mm) tube that is cut to desired length; suitable for applications between -40 °F (-40 °C) and 900 °F (482 °C).
- **Flange probes:** for wall pass-through mounting in furnaces or ducts, with ¼ inch (6.35 mm) sheath in 316 stainless steel.
- **Bead/wire probes:** miniature bare element, ideal for confined spaces, with 6 ft (1.83 m) cable. Measures from -40 °F (-40 °C) to 257 °F (125 °C).

Electrical connection configurations impact accuracy: RTDs are connected with 3 or 4 wires to compensate for lead resistance, thermocouples require extension cable of the same type, and thermistors, having high resistance, usually suffice with 2 wires.

## Precision and Accuracy
Typical accuracy of a Class A RTD is ±0.15 °C (±0.27 °F) at 0 °C and ±0.35 °C (±0.63 °F) at 100 °C, while a standard type K thermocouple tolerates ±2.2 °C (±4 °F) or 0.75% of reading value. Thermistors offer interchangeable accuracies of ±0.2 °C (±0.36 °F) in limited ranges but can drift if their maximum temperature is exceeded.

| Sensor Type | Class / Standard | Typical Tolerance at 0 °C / 32 °F | Typical Tolerance at 100 °C / 212 °F |
| --- | --- | --- | --- |
| Thermocouple type K | IEC 60584-1 class 2 | ±2.2 °C / ±4.0 °F | ±2.2 °C / ±4.0 °F |
| Thermocouple type J | IEC 60584-1 class 2 | ±2.2 °C / ±4.0 °F | ±2.2 °C / ±4.0 °F |
| RTD Pt100 | IEC 60751 class A | ±0.15 °C / ±0.27 °F | ±0.35 °C / ±0.63 °F |
| RTD Pt100 | IEC 60751 class B | ±0.3 °C / ±0.54 °F | ±0.8 °C / ±1.44 °F |
| NTC 10 kΩ thermistor | type 3 interchangeable | ±0.2 °C / ±0.36 °F (25 °C) | — |

RTD repeatability reaches values below 0.1 °C (0.18 °F) and thermocouples, if not contaminated, can repeat within 0.5 °C (0.9 °F). Thermistors maintain good repeatability within their range, although inferior to that of an RTD.

## Temperature Range
Type K thermocouples continuously withstand from -200 °C / -328 °F to 1372 °C / 2500 °F, while platinum RTDs are limited to -200 °C / -328 °F to 850 °C / 1562 °F although in industrial practice they are used up to 650 °C / 1200 °F. Thermistors barely reach values from -80 °C / -112 °F to 300 °C / 572 °F, although most commercial models operate from -40 °C / -40 °F to 125 °C / 257 °F.

| Sensor | Minimum Range | Maximum Range |
| --- | --- | --- |
| Thermocouple type K | -200 °C / -328 °F | 1372 °C / 2500 °F |
| Thermocouple type S (Pt‑Rh) | -50 °C / -58 °F | 1768 °C / 3214 °F |
| RTD Pt100 | -200 °C / -328 °F | 650 °C / 1202 °F (practical) |
| RTD Ni100 | -60 °C / -76 °F | 300 °C / 572 °F |
| NTC Thermistor | -80 °C / -112 °F | 300 °C / 572 °F (uncommon) |
| NTC Thermistor type 3 | -40 °C / -40 °F | 125 °C / 257 °F |

The choice of sheath material (316 stainless steel, inconel, ceramic) further extends or restricts these limits in actual installation.

## Materials and Construction
Three noble metals—platinum, nickel, and copper—make up most RTD elements, while thermocouples are manufactured with alloy pairs such as chromel‑alumel (type K), iron‑constantan (type J), or copper‑constantan (type T). Thermistors use transition metal oxides (manganese, nickel, cobalt) sintered into beads, discs, or chips.

- **Platinum (Pt):** offers the most stable and reproducible resistance‑temperature relationship; it is encapsulated in wire wound on a ceramic core or as thin film on an alumina substrate.
- **Nickel (Ni):** has a high temperature coefficient, but deviates above 300 °C / 572 °F.
- **Copper (Cu):** extremely linear and economical, oxidizes at temperatures above 150 °C / 302 °F, so it is reserved for controlled environments.
- **Thermocouple alloys:** chromel (Ni‑Cr) / alumel (Ni‑Al‑Mn‑Si) for type K; constantan (Cu‑Ni) for types J and T; platinum‑rhodium for type S or R at high temperatures.
- **Semiconductor oxides:** typical NTC formulations use Mn₃O₄, NiO, and Co₂O₃ adjusting the desired resistance.

The encapsulation influences response and environmental protection: 316 stainless steel sheaths are used up to 900 °F (482 °C) while for higher temperatures inconel 600 or ceramic is used.

## Frequently Asked Questions (FAQ)

### What is the fundamental difference between a thermocouple and an RTD?
A thermocouple generates a voltage in response to the temperature difference between two junctions of dissimilar metals (Seebeck effect), while an RTD varies its electrical resistance linearly with temperature. This difference in principle means that thermocouples withstand much higher temperatures, but RTDs offer higher accuracy and stability.

### Why do thermocouples need compensating cable?
The voltage generated by a thermocouple depends on the reference junction temperature. The compensating (or extension) cable is made of the same materials as the thermocouple or equivalent alloys, and carries the signal from the cold point to the instrument without introducing new dissimilar junctions, thus avoiding measurement errors. Using standard copper wire alters the thermoelectric voltage and falsifies the reading.

### What does the designation Pt100 mean?
Pt indicates the sensor element is platinum and 100 corresponds to its nominal resistance of 100 ohms at 0 °C (32 °F). It is the most widespread configuration in industrial RTDs; there is also Pt1000 (1000 Ω at 0 °C) for applications where higher sensitivity is needed or to reduce wiring effects.

### When is it advisable to choose a thermistor instead of an RTD?
The thermistor is preferable when the measurement is made in a narrow range (for example, -40 °C to 125 °C / -40 °F to 257 °F), high sensitivity is required to detect small changes (0.01 °C), and budget is limited. It is also advantageous when space is very limited, as they are manufactured in beads of 0.5 mm / 0.02 in diameter.

### How does self‑heating affect measurements with RTDs and thermistors?
To measure resistance, an excitation current is injected that dissipates power in the sensor (I²R). This additional heat raises the element temperature above that of the medium, introducing a systematic error. In RTDs it is minimized by using low currents (≤1 mA) and in thermistors, due to their high resistance, dissipation can be significant if excitation is not limited.

### Are sensors from different manufacturers interchangeable without recalibration?
RTDs that comply with IEC 60751 (Pt100 class A or B) are highly interchangeable without needing recalibration, although it is always recommended to verify the curve if the application is critical. Class 2 thermocouples, within the same type, are interchangeable with good tolerance. Thermistors present the worst interchangeability, unless models with tight tolerance are purchased (e.g., NTC type 3 with ±0.2 °C).

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/temperature-sensors-d_448.html
- **plcacademy.com**: https://www.plcacademy.com/thermocouple/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/process_control_-a-_measurement/temperature_sensors_-a-_transmitters/temperature_sensors
