---
title: "RTD vs thermocouple comparison"
sidebar:
  label: "RTD vs thermocouple comparison"
description: "Technical reference: RTD vs thermocouple comparison"
keywords: ["RTD vs thermocouple comparison accuracy", "sistemas-control"]
category: "sistemas-control"
topic: "thermocouples"
subcategory: "rtd-vs-thermocouple"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The selection between an RTD and a thermocouple defines the accuracy, stability, and cost of the temperature measurement system. While a platinum RTD achieves a precision of ±0.1 °C / ±0.18 °F in laboratory processes, a type K thermocouple covers extreme ranges up to 1250 °C / 2282 °F with response times below 1 second. This comparison details each technical attribute to facilitate engineering decisions based on quantitative data.

The RTD leverages the predictable variation of electrical resistance of a pure metal with temperature. A thermocouple generates an electromotive force (voltage) at the junction of two different metals when a thermal gradient exists.

> **Rₜ = R₀ (1 + α·ΔT)**
> where α is the temperature coefficient of resistance, typically 0.00385 Ω/Ω/°C for industrial platinum.

> **V = S·ΔT**
> where S is the Seebeck coefficient, approximately 40 µV/°C for type K thermocouple.

| Variable | RTD (Pt100) | Thermocouple (Type K) |
|---|---|---|
| Physical phenomenon | Temperature-dependent electrical resistance | Thermoelectric effect (Seebeck) |
| Typical material | Platinum (α = 0.00385 Ω/Ω/°C) | Chromel® (Ni-Cr) / Alumel® (Ni-Al) |

## Temperature Range
A standard platinum RTD operates between -200 °C / -328 °F and 850 °C / 1562 °F, while a type K thermocouple reaches from -200 °C / -328 °F to 1250 °C / 2282 °F, and types B or R exceed 1700 °C / 3092 °F.

| Sensor | Lower limit | Upper limit |
|---|---|---|
| RTD (Pt100) | -200 °C / -328 °F | 850 °C / 1562 °F |
| Thermocouple type K | -200 °C / -328 °F | 1250 °C / 2282 °F |
| Thermocouple type B | 0 °C / 32 °F | 1700 °C / 3092 °F |

## Precision and Accuracy
The precision of an industrial class A RTD is ±0.15 °C / ±0.27 °F at 0 °C, while a standard thermocouple offers ±1.5 °C / ±2.7 °F or worse, limited by cold junction compensation.

| Class / Type | Typical tolerance at 0 °C | Typical tolerance at 600 °C |
|---|---|---|
| RTD Class A | ±0.15 °C / ±0.27 °F | ±0.95 °C / ±1.71 °F |
| RTD Class B | ±0.3 °C / ±0.54 °F | ±1.85 °C / ±3.33 °F |
| Thermocouple type K | ±1.5 °C / ±2.7 °F | ±4.6 °C / ±8.3 °F |
| Thermocouple type T | ±0.5 °C / ±0.9 °F | ±2.5 °C / ±4.5 °F (at 300 °C) |

## Long-term Stability
A quality platinum RTD exhibits a drift less than 0.05 °C / 0.09 °F per year under controlled conditions, while a thermocouple can drift several degrees Celsius in the same period due to oxidation and junction contamination.

| Attribute | RTD | Thermocouple |
|---|---|---|
| Typical annual drift | < 0.05 °C / 0.09 °F | 0.5 – 2 °C / 0.9 – 3.6 °F |
| Main cause | Self-annealing, chemical contamination | Oxidation, diffusion at the hot junction |

## Response Time
A bare thermocouple reaches 63% of the temperature change in less than 1 s, while an encapsulated RTD with a 3 mm / 0.12 in sheath requires 2 to 5 seconds in moving water.

| Configuration | RTD (3 mm sheath) | Thermocouple (exposed junction) |
|---|---|---|
| Time constant τ in water | 2 – 5 s | < 0.5 s |
| Time constant τ in still air | 20 – 50 s | 5 – 10 s |

## Sensitivity
The sensitivity of a Pt100 RTD is approximately 0.385 Ω/°C, equivalent to a signal of 38.5 mV/°C with an excitation current of 1 mA. A type K thermocouple generates only 40 µV/°C, three orders of magnitude lower.

| Sensor | Output at ΔT = 100 °C |
|---|---|
| RTD Pt100 (1 mA) | 38.5 mV |
| Thermocouple type K | 4.0 mV |
| NTC thermistor (10 kΩ at 25 °C) | ~250 mV (non-linear) |

## Linearity
The resistance-temperature curve of the platinum RTD is nearly linear, with a maximum deviation of only 0.3% of the range, while a type K thermocouple requires high-degree polynomials for linearization due to its pronounced curvature.

| Sensor | Transfer function | Maximum linearity error (0 – 100 °C) |
|---|---|---|
| RTD Pt100 | R(T)=R₀(1+AT+BT²) | < 0.3 °C / 0.54 °F |
| Thermocouple type K | 9th degree polynomial | ~1 °C / 1.8 °F without linearization |

## Self-Heating Effect
The self-heating effect in an RTD is very low, typically less than 0.01 °C / 0.018 °F when excited with 1 mA, while a thermocouple is immune because it is an active sensor.

| Sensor | Typical dissipation | Thermal increase (still air, 1 mA) |
|---|---|---|
| RTD Pt100 | 100 µW | < 0.01 °C / 0.018 °F |
| Thermocouple | 0 W | 0 °C |

## Effect of Lead Wires
The resistance added by the lead wires affects the RTD reading (error of 2.6 °C / 4.7 °F per ohm in 2-wire configuration), while in a thermocouple it does not alter the voltage but requires exact reference junction compensation or using appropriate extension wire.

| Factor | RTD 2-wire | Thermocouple |
|---|---|---|
| Error per Ω of wire | ~2.6 °C / 4.7 °F | No direct error |
| Compensation requirement | 3 or 4-wire cable | Cold junction compensation (CJC) |

## Cost
A basic thermocouple costs between 1 and 5 USD (0.92 – 4.60 €) while an industrial platinum RTD with sheath can exceed 50 USD (46 €), although the difference in conditioning electronics can offset the balance if high precision is required.

| Element | Industrial RTD class A | Standard type K thermocouple |
|---|---|---|
| Sensor (unit) | 20 – 100 USD / 18 – 92 € | 1 – 10 USD / 0.92 – 9.2 € |
| Associated electronics | Low cost (resistive ADC) | Requires CJC, high gain |

## Typical Applications
RTDs dominate in laboratories, pharmaceutical industry, and HVAC control due to their accuracy and repeatability, while thermocouples are irreplaceable in foundry furnaces, gas turbines, and petrochemical processes where the temperature range exceeds 600 °C / 1112 °F.

| Sector / Process | Recommended sensor | Reason |
|---|---|---|
| Calibration laboratory | RTD Pt25 | Primary precision |
| Food industry | Sanitary RTD | CIP cleaning, repeatability |
| Heat treatment furnaces | Thermocouple type K or N | Range up to 1300 °C / 2372 °F |
| Refineries, flares | Thermocouple type B | Measurement > 1500 °C / 2732 °F |

## Quick Comparison
| Attribute | RTD | Thermocouple |
|---|---|---|
| Temperature range | -200 to 850 °C / -328 to 1562 °F | -200 to 1750 °C / -328 to 3182 °F |
| Accuracy | High (±0.15 °C / ±0.27 °F Class A) | Medium (±1.5 °C / ±2.7 °F typical) |
| Long-term stability | Good (< 0.05 °C/year) | Poor to fair (0.5–2 °C/year) |
| Response time | Medium (2–5 s in water) | Fast (< 1 s) |
| Sensitivity | Medium (0.385 Ω/°C) | Low (40 µV/°C) |
| Linearity | Good (error < 0.3 °C) | Fair (error ~1 °C without linearization) |
| Self-heating | Very low (< 0.01 °C with 1 mA) | None |
| Effect of lead wires | Significant (requires 3 or 4 wires) | Not direct, requires CJC |
| Cost | High | Low |
| Ideal application | Accuracy < 600 °C / 1112 °F | High temperature, extreme environments |

## Frequently Asked Questions (FAQ)
### Which is more accurate for temperature control, RTD or thermocouple?
The RTD is more accurate, with tolerances of ±0.15 °C / ±0.27 °F at 0 °C compared to ±1.5 °C / ±2.7 °F for a standard type K thermocouple.

### When is it advisable to choose a thermocouple instead of an RTD?
When the temperature exceeds 600 °C / 1112 °F or fast response (< 1 s) is needed, the thermocouple is the only viable option without extra cost.

### What is the service life of an RTD sensor compared to a thermocouple?
A quality RTD maintains its calibration for decades with drift less than 0.05 °C/year, while a thermocouple suffers accelerated aging and can drift 2 °C in the first year of continuous use at high temperature.

### Does cable length affect RTD measurement?
Yes, the cable resistance adds an error of 2.6 °C per ohm in a 2-wire RTD; this is solved with a 3 or 4-wire configuration. Thermocouples do not suffer this error but require electronic cold junction compensation.

### What maintenance does each type of sensor require?
The RTD practically requires no maintenance except periodic calibration verification. The thermocouple should be checked every 6–12 months for corrosion, oxidation, and drifts of the reference junction.

### Can I directly replace a thermocouple with an RTD in my current process?
If the maximum process temperature is below 600 °C / 1112 °F and response times are not critical below 2 seconds, the improvement in accuracy and stability justifies the change, although it requires checking controller input compatibility (resistance vs. voltage).

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/temperature-sensors-d_448.html
- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=12yINJakfZA
