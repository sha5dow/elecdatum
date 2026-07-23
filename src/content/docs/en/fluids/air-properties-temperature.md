---
title: "Air properties by temperature"
sidebar:
  label: "Air properties by temperature"
description: "Technical reference: Air properties by temperature"
keywords: ["air properties density viscosity temperature", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "air-properties"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

Dry air at standard atmospheric pressure behaves as an ideal gas. At 0 °C and 101.325 kPa, its density is 1.292 kg/m³ (0.0807 lb/ft³) and its dynamic viscosity reaches 17.22 μPa·s. The thermophysical properties presented below are valid for dry air at 101.325 kPa (14.696 psi) and temperatures in the range of −20 °C to 50 °C, calculated from widely verified correlations in the engineering literature.

## Properties of dry air at standard atmospheric pressure (101.325 kPa / 14.696 psi)

| Temperature (°C / °F) | Density (kg/m³ / lb/ft³) | Dynamic viscosity (μPa·s / lb/(ft·s)×10⁷) | Kinematic viscosity (cSt / ft²/s×10⁵) | Thermal conductivity (W/(m·K) / Btu/(h·ft·°F)) | Speed of sound (m/s / ft/s) | Cp (kJ/(kg·K) / Btu/(lb·°F)) | Prandtl (-) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| −20 °C / −4 °F | 1.395 / 0.0871 | 16.20 / 3.383 | 11.61 / 12.50 | 0.0227 / 0.0131 | 318.9 / 1046.5 | 1.006 / 0.2403 | 0.718 |
| −10 °C / 14 °F | 1.342 / 0.0838 | 16.72 / 3.492 | 12.46 / 13.41 | 0.0235 / 0.0136 | 325.2 / 1067.0 | 1.006 / 0.2403 | 0.715 |
| 0 °C / 32 °F | 1.292 / 0.0807 | 17.22 / 3.596 | 13.32 / 14.34 | 0.0244 / 0.0141 | 331.3 / 1086.9 | 1.006 / 0.2403 | 0.711 |
| 10 °C / 50 °F | 1.247 / 0.0779 | 17.71 / 3.700 | 14.20 / 15.28 | 0.0252 / 0.0145 | 337.4 / 1107.0 | 1.006 / 0.2403 | 0.708 |
| 15 °C / 59 °F | 1.225 / 0.0765 | 17.95 / 3.750 | 14.65 / 15.77 | 0.0256 / 0.0148 | 340.3 / 1116.5 | 1.006 / 0.2403 | 0.707 |
| 20 °C / 68 °F | 1.205 / 0.0752 | 18.20 / 3.802 | 15.11 / 16.26 | 0.0260 / 0.0150 | 343.3 / 1126.2 | 1.006 / 0.2403 | 0.706 |
| 25 °C / 77 °F | 1.184 / 0.0740 | 18.44 / 3.852 | 15.57 / 16.76 | 0.0264 / 0.0152 | 346.2 / 1135.9 | 1.006 / 0.2403 | 0.704 |
| 30 °C / 86 °F | 1.165 / 0.0727 | 18.67 / 3.900 | 16.03 / 17.25 | 0.0268 / 0.0155 | 349.2 / 1145.6 | 1.006 / 0.2403 | 0.702 |
| 40 °C / 104 °F | 1.128 / 0.0704 | 19.14 / 3.998 | 16.98 / 18.28 | 0.0275 / 0.0159 | 354.9 / 1164.4 | 1.006 / 0.2403 | 0.699 |
| 50 °C / 122 °F | 1.093 / 0.0682 | 19.59 / 4.093 | 17.93 / 19.30 | 0.0283 / 0.0164 | 360.6 / 1183.0 | 1.006 / 0.2403 | 0.696 |

## Application Formulas

The specific gas constant of dry air is 287.058 J/(kg·K) and the specific heat ratio γ is 1.4. All properties in the table can be calculated at other temperatures (within the ideal gas range) using the following equations:

**Density**  
Obtained from the ideal gas equation of state:  
ρ = p / (R·T)  
where p is absolute pressure (Pa), R = 287.058 J/(kg·K) and T is absolute temperature (K).

**Dynamic viscosity – Sutherland's Law**  
μ = μ₀ · (T/T₀)³⁄² · (T₀ + S) / (T + S)  
μ₀ = 17.22 μPa·s at T₀ = 273.15 K, Sutherland constant S = 110.4 K. This correlation has an error less than 2 % between −100 °C and 300 °C.

**Thermal conductivity**  
k = k₀ · (T/T₀)³⁄² · (T₀ + Sₖ) / (T + Sₖ)  
k₀ = 0.02435 W/(m·K) at T₀ = 273.15 K, Sₖ = 194 K.

**Speed of sound**  
c = √(γ · R · T)  
γ = 1.4 (diatomic air). Alternatively, c = √(γ · p / ρ) can be used.

**Prandtl number**  
Pr = Cp · μ / k  
Cp is considered constant (1.006 kJ/(kg·K)) in the range of the table; the maximum error due to this simplification is less than 0.5 %.

**Kinematic viscosity**  
ν = μ / ρ  
Values in cSt are obtained directly from μ (μPa·s) and ρ (kg/m³): ν [cSt] = μ / ρ.

## Selection Criteria

The temperature range of application of this table is −20 °C to 50 °C (−4 °F to 122 °F) at an absolute pressure of 101.325 kPa (14.696 psi). These values represent the properties of dry air (0% relative humidity) and are suitable for most engineering calculations in ventilation, air conditioning, subsonic aerodynamics, and heat transfer where temperatures do not exceed 200 °C or pressures far from atmospheric. For conditions involving significant humidity, high altitude, or extreme temperatures, corrections for partial vapor pressure and real gas behavior should be applied, or specialized software with thermophysical databases such as REFPROP should be consulted.

## Frequently Asked Questions

**1. What is the density of air at 20 °C and 1 atm?**  
The density of dry air at 20 °C and 101.325 kPa is 1.205 kg/m³ (0.0752 lb/ft³). This value decreases by approximately 0.4% if the relative humidity reaches 50% at that temperature.

**2. How does the dynamic viscosity of air vary with temperature?**  
At 0 °C, the dynamic viscosity is 17.22 μPa·s, and it increases with temperature according to Sutherland's law. At 50 °C it reaches 19.59 μPa·s and at 100 °C it would be approximately 21.8 μPa·s.

**3. What is the speed of sound in air at 15 °C?**  
The speed of sound in dry air at 15 °C is 340.3 m/s (1116.5 ft/s). This value is adopted by the International Standard Atmosphere (ISA) and increases by approximately 0.6 m/s per degree Celsius.

**4. What is the Prandtl number of air at 25 °C?**  
The Prandtl number of dry air at 25 °C and 1 atm is 0.704. This dimensionless number remains close to 0.71 over a wide range of ambient temperatures, indicating that momentum diffusivity and thermal diffusivity are similar.

**5. What is the thermal conductivity of air at 0 °C?**  
The thermal conductivity of dry air at 0 °C and 1 atm is 0.0244 W/(m·K) (0.0141 Btu/(h·ft·°F)). This value nearly triples when the air reaches 1000 °C, although it usually remains low compared to solids and liquids.

**6. What is the kinematic viscosity of air at 20 °C?**  
The kinematic viscosity of air at 20 °C and 101.325 kPa is 15.11 cSt (1.626×10⁻⁴ ft²/s). This value is approximately double the kinematic viscosity of water at the same temperature (~1 cSt), which is relevant in dynamic similarity analysis.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/air-properties-d_156.html
- **thermopedia.com**: https://www.thermopedia.com/content/553/
