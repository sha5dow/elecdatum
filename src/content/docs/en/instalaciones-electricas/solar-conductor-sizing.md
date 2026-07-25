---
title: "Conductor sizing for solar systems"
sidebar:
  label: "Conductor sizing for solar systems"
description: "Technical reference: Conductor sizing for solar systems"
keywords: ["solar PV conductor sizing calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "solar-installation"
subcategory: "solar-conductor-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A photovoltaic solar system converts light energy into direct current electrical energy through the photovoltaic effect in solar cells. A single monocrystalline silicon solar cell generates an open-circuit voltage of approximately 0.5 V to 0.6 V. To achieve usable voltages, cells are connected in series to form modules, and these in turn are connected in series to create strings. The generated current varies with solar irradiance, while the voltage depends on the operating temperature of the cells. This variable and environmentally dependent nature imposes specific requirements for the sizing of the conductors that transport the energy from the modules to the inverter and the interconnection point.

## Calculation of Maximum System Voltage

The maximum DC system voltage is determined to select conductors, equipment, and working spaces. For systems in commercial and industrial buildings, the voltage is limited to 1000 V, while in single-family and two-family residences the limit is 600 V. The primary calculation method consists of summing the open-circuit voltages of all modules connected in series, corrected by the temperature coefficient for the expected minimum ambient temperature.

| Component | Uncorrected Value | Correction Factor | Corrected Maximum Value |
|------------|-------------------|---------------------|------------------------|
| Open-circuit voltage (Voc) per module | 49,2 V / 49,2 V | — | — |
| Modules in series per string | 20 units / 20 units | — | — |
| Sum of Voc (STC) | 984 V / 984 V | — | — |
| Correction for minimum temperature of -10 °C / 14 °F | — | 1,12 | — |
| Corrected maximum string voltage | — | — | 1102 V / 1102 V |

## Factors Influencing Sizing

Conductor sizing in photovoltaic systems is governed by the maximum circuit current, calculated as 125% of the sum of the short-circuit currents of the modules connected in parallel. For systems with a generation capacity of 100 kW or more, the maximum current must be determined through simulation of local irradiance, considering the average of the highest current over a three-hour interval. Factors affecting the required ampacity include ambient temperature in conduit, grouping of conductors, and direct solar exposure on raceways. The final conductor ampacity must simultaneously satisfy two criteria: at least 125% of the maximum current without applying corrections, and at least 100% of the maximum current after applying all correction and adjustment factors.

| Factor | Description | Impact on Ampacity |
|--------|-------------|------------------------|
| High ambient temperature | Conduit exposed to direct sunlight on roof | Reduction per Table 310.15(B)(1)(1) |
| Conductor grouping | More than three current-carrying conductors in conduit | Reduction per Table 310.15(C)(1) |
| Continuous safety margin | Load considered continuous by definition | Factor 1.25 on maximum current |
| Insulation type | THWN-2, XHHW-2, PV Wire | Operating temperature of 90 °C / 194 °F |

## Step-by-Step Selection Procedure

The conductor selection procedure for photovoltaic source circuits begins with the design calculation current, followed by the application of correction factors and final verification against overcurrent protection requirements.

1. Calculate the maximum circuit current using the formula:

> **Imáx = 1,25 × Σ Isc_paralelo**

Where Σ Isc_paralelo is the sum of the short-circuit currents of all modules or strings connected in parallel.

2. Determine the minimum required ampacity before corrections as 125% of Imax.

3. Select a conductor with sufficient base ampacity, and apply the correction factors for temperature and adjustment for grouping.

4. Verify that the corrected ampacity is at least 100% of the maximum current.

5. Verify that the selected size coordinates with the overcurrent protection device, which must be sized at 125% of the maximum current.

| Step | Criterion | Formula | Example with Isc = 10 A / 10 A, 4 strings in parallel |
|------|--------|---------|------------------------------------------------------|
| 1 | Maximum circuit current | Imáx = 1,25 × (4 × 10 A) / 1,25 × (4 × 10 A) | 50 A / 50 A |
| 2 | Minimum ampacity without corrections | 1,25 × Imáx | 62,5 A / 62,5 A |
| 3 | Base conductor ampacity | Table value at 90 °C / 194 °F | AWG 6 THWN-2 = 75 A / 75 A |
| 4 | Apply factors (T=50 °C / 122 °F, 6 conductors) | 75 × 0,82 × 0,80 | 49,2 A / 49,2 A |
| 5 | Required minimum corrected ampacity | Imáx | 50 A / 50 A |
| 6 | Minimum size by ampacity | — | AWG 4 (85 A base × 0,82 × 0,80 = 55,8 A / 55,8 A) |

## Applicable Standards

Conductor sizing in solar systems is governed by Article 690 of the National Electrical Code of the United States. Section 690.7 establishes the calculation methods for the maximum DC system voltage. Section 690.8 defines the circuit current calculation and conductor sizing criteria. Section 690.9 regulates overcurrent protection requirements. For systems with a generation capacity of 100 kW or more, calculation by documented engineering methods sealed by a licensed professional is permitted. Conductors for photovoltaic source circuits must be listed for use in photovoltaic systems and withstand operating temperatures of 90 °C in wet and dry conditions.

## Frequently Asked Questions (FAQ)

### What is the maximum permitted voltage for a residential solar system?

For photovoltaic systems in single-family and two-family residential buildings, the maximum DC circuit voltage is limited to 600 V per Section 690.7. In commercial, industrial, and multi-family buildings, the limit increases to 1000 V.

### How is the maximum current of a photovoltaic source circuit calculated?

The maximum circuit current for systems under 100 kW is calculated as 125% of the sum of the short-circuit currents of all photovoltaic modules connected in parallel. For systems of 100 kW or more, an engineering calculation based on the average of the highest current over a three-hour interval is required.

### What safety factor is applied to solar conductor sizing?

Photovoltaic circuit conductors must have an ampacity of at least 125% of the calculated maximum current before applying correction factors, and at least 100% of the maximum current after applying all correction and adjustment factors for temperature and grouping.

### When can overcurrent protection be omitted in a solar circuit?

Overcurrent protection is not mandatory when the circuit conductors have sufficient ampacity per Section 690.8(B) and the currents from all sources do not exceed the nominal capacity of the protection device specified by the manufacturer for the modules or electronic converters.

### What operating temperature must solar conductors withstand?

Conductors for photovoltaic source circuits must be listed for photovoltaic systems and have an operating temperature of 90 °C in both wet and dry conditions, typically with THWN-2, XHHW-2 insulation, or dedicated photovoltaic cable.

### How does ambient temperature affect conductor sizing?

High ambient temperature reduces the conductor ampacity according to the factors of Table 310.15(B)(1)(1) of the NEC. In roof installations exposed to the sun, the temperature inside the conduit can reach 17 °C above the outside ambient temperature, requiring larger conductor sizes to compensate for this reduction.

## References

- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2809
- **electrical4u.com**: https://www.electrical4u.com/solar-cell/

