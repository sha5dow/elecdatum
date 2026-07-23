---
title: "Psychrometric chart interpretation"
sidebar:
  label: "Psychrometric chart interpretation"
description: "Technical reference: Psychrometric chart interpretation"
keywords: ["psychrometric chart humidity enthalpy temperature", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "psychrometric-chart"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

The psychrometric chart is the fundamental graphical tool that correlates the thermodynamic properties of moist air at a fixed barometric pressure, typically 101.325 kPa. Correctly interpreting its seven state lines allows mass and energy balances in HVAC systems with a typical accuracy of ±1 % in relative humidity when the air velocity over the sensors exceeds 5 m/s / 1000 ft/min.

## Fundamental Psychrometric Properties

The psychrometric chart for the dry air‑water vapor system works with two independent families of properties and three thermodynamic constraints. The dry-bulb temperature (DBT) is the conventional thermometric magnitude, measured with a sensor shielded from radiation, and constitutes the primary horizontal coordinate of the chart. The absolute humidity or humidity ratio (W) is represented on the right vertical axis and is defined as the mass of water vapor per unit mass of dry air, expressed in grams of vapor per kilogram of dry air (g/kg) or in pounds of vapor per pound of dry air (lb/lb). The relative humidity (RH) indicates the degree of air saturation at a given temperature and is plotted as hyperbolic curves that converge at the saturation point of the envelope curve; an RH value of 50 % at 25 °C / 77 °F corresponds to a moisture content of approximately 9.9 g/kg. The thermodynamic wet-bulb temperature (WBT) is practically coincident with the adiabatic saturation temperature in the usual psychrometric range and is read by following constant enthalpy lines until they intersect the saturation curve. The dew point temperature (DPT) is the temperature at which the air becomes saturated if cooled at constant pressure and absolute humidity, and is obtained by moving horizontally to the left from the representative state until intersecting the saturation line. The specific volume of moist air is shown as oblique lines with negative slope, while the specific enthalpy (h) is represented by lines practically parallel to the wet-bulb lines.

| Property | Symbol | Metric unit | Imperial unit |
|----------|--------|-------------|---------------|
| Dry-bulb temperature | DBT | °C | °F |
| Wet-bulb temperature | WBT | °C | °F |
| Dew point temperature | DPT | °C | °F |
| Relative humidity | RH | % | % |
| Absolute humidity (Humidity ratio) | W | g/kg | lb/lb (grains/lb) |
| Specific enthalpy | h | kJ/kg | BTU/lb |
| Specific volume | v | m³/kg | ft³/lb |

## Thermodynamic Relations and Application Formulas

The wet-bulb depression (DBT − WBT) is the key psychrometric parameter for calculating relative humidity without resorting to capacitive sensors or the graphic chart. Sprung's psychrometric equation, valid for air velocities above 4.5 m/s / 885 ft/min, relates the partial pressure of water vapor to the dry- and wet-bulb temperatures according to the expression:

\[
P_v = P_{sat}(WBT) - A \cdot P_{atm} \cdot (DBT - WBT)
\]

where \(P_{sat}(WBT)\) is the saturation pressure of water evaluated at the wet-bulb temperature, \(P_{atm}\) is the total atmospheric pressure, and \(A\) is the psychrometric coefficient, which takes the value 0.000662 K⁻¹ for a forced aspiration psychrometer. The relative humidity is subsequently calculated as the ratio of the partial pressure of vapor to the saturation pressure at the dry-bulb temperature, multiplied by 100.

In the case of the air‑water system, the psychrometric ratio is practically equal to 1, meaning that the wet-bulb temperature lines and the adiabatic saturation temperature lines are essentially coincident. The absolute humidity (W) is calculated from the partial pressure of vapor by the formula:

\[
W = 0.622 \cdot \frac{P_v}{P_{atm} - P_v} \quad (\text{kg vapor / kg dry air})
\]

The specific enthalpy of moist air is determined with the equation:

\[
h = 1.006 \cdot DBT + W \cdot (2501 + 1.86 \cdot DBT) \quad (\text{kJ/kg dry air})
\]

where 1.006 kJ/(kg·K) is the specific heat of dry air and 2501 kJ/kg is the latent heat of vaporization of water at 0 °C / 32 °F. The humid heat capacity of the mixture, \(C_{py}\), is defined as the sum of the specific heat of dry air plus the product of the absolute humidity and the specific heat of water vapor.

## Psychrometric Chart Selection Criteria

The selection of the appropriate psychrometric chart fundamentally depends on the barometric pressure of the site and the expected operating temperature range. A chart drawn for the altitude of the site must be used: at sea level the standard pressure is 101.325 kPa / 14.696 psi; at 1500 m / 4921 ft altitude the pressure drops to approximately 84.5 kPa / 12.26 psi, which modifies the position of the saturation curve and the specific volume lines by 15‑18 %. For refrigeration and comfort applications the low-temperature chart is normally used, covering the DBT range between −10 °C / 14 °F and 55 °C / 131 °F; high-temperature industrial drying processes require extended charts up to 200 °C / 392 °F.

The minimum airflow over the sensors of a psychrometer must be 3.5 m/s / 690 ft/min to ensure that the measured wet-bulb temperature is representative; below 1 m/s / 200 ft/min errors can exceed 15 % relative humidity. In environments with significant thermal radiation, wet-bulb thermometers must be shielded with low-emissivity radiation screens. Additionally, for relative humidities below 20 %, direct measurement of the wet-bulb temperature becomes difficult and the use of dew point hygrometers or capacitive sensors calibrated in situ is recommended.

## Reference Table of Moist Air Properties

Thermodynamic properties of moist air at standard atmospheric pressure of 101.325 kPa / 14.696 psi.

| DBT (°C / °F) | RH (%) | WBT (°C / °F) | DPT (°C / °F) | W (g/kg / lb/lb) | h (kJ/kg / BTU/lb) | v (m³/kg / ft³/lb) |
|---|---|---|---|---|---|---|
| 10 °C / 50 °F | 30 | 4.1 °C / 39.4 °F | −6.5 °C / 20.3 °F | 2.3 / 0.0023 | 15.8 / 6.8 | 0.801 / 12.83 |
| 10 °C / 50 °F | 60 | 6.5 °C / 43.7 °F | 2.6 °C / 36.7 °F | 4.6 / 0.0046 | 21.6 / 9.3 | 0.804 / 12.88 |
| 20 °C / 68 °F | 40 | 12.9 °C / 55.2 °F | 6.0 °C / 42.8 °F | 5.9 / 0.0059 | 35.2 / 15.1 | 0.842 / 13.49 |
| 20 °C / 68 °F | 70 | 16.5 °C / 61.7 °F | 14.4 °C / 57.9 °F | 10.3 / 0.0103 | 46.3 / 19.9 | 0.849 / 13.60 |
| 30 °C / 86 °F | 50 | 22.0 °C / 71.6 °F | 18.4 °C / 65.1 °F | 13.5 / 0.0135 | 64.6 / 27.8 | 0.887 / 14.21 |
| 30 °C / 86 °F | 80 | 27.1 °C / 80.8 °F | 26.2 °C / 79.2 °F | 21.6 / 0.0216 | 85.4 / 36.7 | 0.902 / 14.45 |
| 40 °C / 104 °F | 30 | 24.5 °C / 76.1 °F | 18.8 °C / 65.8 °F | 13.7 / 0.0137 | 75.3 / 32.4 | 0.929 / 14.88 |
| 40 °C / 104 °F | 60 | 32.9 °C / 91.2 °F | 31.0 °C / 87.8 °F | 28.9 / 0.0289 | 114.5 / 49.2 | 0.953 / 15.27 |
| 50 °C / 122 °F | 20 | 29.6 °C / 85.3 °F | 21.1 °C / 70.0 °F | 15.4 / 0.0154 | 89.7 / 38.6 | 0.974 / 15.60 |
| 50 °C / 122 °F | 40 | 36.5 °C / 97.7 °F | 33.9 °C / 93.0 °F | 32.8 / 0.0328 | 135.4 / 58.2 | 1.007 / 16.13 |

## FAQ: Frequently Asked Questions about the Psychrometric Chart

**What is the approximate slope of the enthalpy lines on a standard psychrometric chart?**  
The constant enthalpy lines have a slope of approximately −2.4 kJ/kg per g/kg increase in absolute humidity, which is equivalent to −1.03 BTU/lb per lb/lb increase in humidity ratio. This slope is practically parallel to that of the wet-bulb temperature and allows both parameters to be read directly on a single plot.

**At what pressure is the conventional psychrometric chart drawn and how is it corrected for altitude?**  
The most widespread psychrometric chart is drawn at the standard sea-level atmospheric pressure of 101.325 kPa / 14.696 psi. For every 500 m / 1640 ft increase in altitude, the barometric pressure decreases by approximately 6 kPa / 0.87 psi, which requires using a chart specific to the altitude or applying correction factors of 5‑7 % in absolute humidity readings.

**What maximum difference is accepted between the wet-bulb temperature and the adiabatic saturation temperature in the air‑water system?**  
For the moist air with water system, the difference between the thermodynamic wet-bulb temperature and the adiabatic saturation temperature is less than 0.2 °C / 0.36 °F in the entire comfort range, because the Luikov number is approximately equal to 1. This coincidence allows both lines to be used interchangeably in HVAC calculations.

**How much does the dew point drop when relative humidity is reduced by 10 % at a constant dry-bulb temperature of 25 °C / 77 °F?**  
At 25 °C / 77 °F, a reduction in relative humidity from 60 % to 50 % produces a drop in dew point from approximately 17.4 °C / 63.3 °F to 13.8 °C / 56.8 °F, i.e., a drop close to 3.6 °C / 6.5 °F. This variation is critical in cooling processes to avoid unwanted surface condensation.

**What minimum air velocity must be maintained in an aspiration psychrometer to limit the measurement error to 1 %?**  
To ensure a relative humidity measurement error of less than 1 %, the air velocity over the bulbs of a forced aspiration psychrometer must be at least 4.5 m/s / 885 ft/min. Velocities below 2 m/s / 394 ft/min cause errors above 5 % due to insufficient renewal of the wet boundary layer.

**What increase in absolute humidity occurs when heating air from 10 °C / 50 °F and 60 % RH to 30 °C / 86 °F and injecting vapor until reaching 50 % RH?**  
When heating air from 10 °C / 50 °F with an initial absolute humidity of 4.6 g/kg / 0.0046 lb/lb and adding vapor until reaching 30 °C / 86 °F and 50 % RH, the final absolute humidity rises to 13.5 g/kg / 0.0135 lb/lb. This represents an addition of 8.9 grams of water vapor per kilogram of dry air processed, equivalent to 62.3 grains of vapor per pound of dry air.

## References

- **efunda.com**: https://www.efunda.com/
- **thermopedia.com**: https://www.thermopedia.com/content/1261/

## Sources Consulted

- **efunda.com**: https://www.efunda.com/
- **thermopedia.com**: https://www.thermopedia.com/content/1261/
