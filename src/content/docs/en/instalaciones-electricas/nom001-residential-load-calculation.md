---
title: "Residential load calculation NOM-001"
sidebar:
  label: "Residential load calculation NOM-001"
description: "Technical reference: Residential load calculation NOM-001"
keywords: ["NOM-001 residential load calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nom-001"
subcategory: "nom001-residential-load"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The residential load calculation per NOM-001 determines the maximum power demand, expressed in VA, that a dwelling imposes on the electrical system, using minimum lighting loads of 3 VA per square foot (33 VA/m²) and small appliance circuits of 1500 VA (5118 BTU/h) each.

## General Lighting Unit Load

NOM-001 establishes a minimum unit load of 3 VA per square foot (33 VA/m²) for general lighting and general-purpose receptacles in dwelling areas, applied to the entire habitable area.

> **Lighting load (VA) = Area × Load density**
>
> **Lighting load (VA) = Area (m²) × 33 VA/m²**
> **Lighting load (VA) = Area (ft²) × 3 VA/ft²**

| Dwelling area                | Unit load (VA/m²) | Unit load (VA/ft²) | Thermal equivalent (BTU/h·m²) |
|------------------------------|-------------------|--------------------|-------------------------------|
| Entire habitable area        | 33 VA/m²          | 3 VA/ft²           | 112.6 BTU/(h·m²) / 10.2 BTU/(h·ft²) |

## Small Appliance and Laundry Circuits

Each small appliance circuit is considered with an assigned load of 1500 VA (1500 W), equivalent to 5118 BTU/h, and a minimum of two such circuits are required in dwellings.

| Circuit type                          | Assigned load (VA) | Equivalent (W) | Equivalent (BTU/h) |
|---------------------------------------|--------------------|----------------|--------------------|
| Small appliance circuit (20 A)        | 1500 VA            | 1500 W         | 5118 BTU/h         |
| Laundry circuit (20 A)                | 1500 VA            | 1500 W         | 5118 BTU/h         |

## Demand Factors for General Lighting

Demand factors for general lighting load, small appliance circuits, and laundry circuits in dwellings are taken from the table equivalent to NEC 220.42, with a first block of 3000 VA (10 236 BTU/h) at 100% and the remainder at 35% up to 120 000 VA.

| Connected load (VA / BTU/h)                                          | Demand factor (%) |
|----------------------------------------------------------------------|-------------------|
| 0 – 3000 VA / 0 – 10 236 BTU/h                                      | 100%              |
| 3001 VA – 120 000 VA / 10 237 BTU/h – 409 457 BTU/h                 | 35%               |
| Over 120 000 VA / over 409 457 BTU/h                                 | 25%               |

## Calculation of General-Use Receptacles

For general-use receptacles and fixed multioutlet assemblies in non-dwelling occupancies, 100% demand is applied to the first 10 000 VA (34 121 BTU/h) and 50% to the remainder; in dwellings these receptacles are already included in the general lighting unit load.

| Load block (VA / BTU/h)                                  | Demand factor (%) |
|----------------------------------------------------------|-------------------|
| 0 – 10 000 VA / 0 – 34 121 BTU/h                        | 100%              |
| Over 10 000 VA / over 34 121 BTU/h                      | 50%               |

## Motor and Fixed Appliance Loads

The capacity of conductors supplying motors and other loads must be at least the sum of: 125% of the full-load current of the largest motor, plus 100% of the sum of the remaining motors, plus 100% of noncontinuous loads and 125% of continuous loads. For four or more fixed appliances rated 186 W (¼ hp) or 500 W (1706 BTU/h) or larger, a 75% demand factor may be applied.

| Condition of application                                               | Demand factor (%) |
|-----------------------------------------------------------------------|-------------------|
| 4 or more fixed appliances ≥ ¼ hp (186 W / 635 BTU/h) or ≥ 500 W (1706 BTU/h) | 75%               |

## Clothes Dryer Load

The minimum load for a feeder or service supplying a clothes dryer in a dwelling is 5000 VA (5 kW), or the nameplate rating if larger, per NOM-001-220.54. For five or more dryers, the demand factors from the corresponding table may be used.

| Number of dryers | Unit rated load (VA / BTU/h)        | Method                              |
|------------------|-------------------------------------|-------------------------------------|
| 1 to 4           | 5000 VA / 17 061 BTU/h (minimum)    | Nameplate value or 5000 VA          |
| 5 or more        | Per nameplate                       | Demand factors Table 220.54         |

## Range and Oven Load

The demanded load for household cooking ranges and ovens with a nameplate rating greater than 1.75 kW is determined using the demand factors of Table 220.55 of NOM-001, which considers the number and rating of the appliances.

| Appliance nameplate rating (kW / BTU/h)        | Calculation method                          |
|------------------------------------------------|---------------------------------------------|
| Greater than 1.75 kW / greater than 5 971 BTU/h | Table 220.55 (demand in kW or VA)           |

## Neutral Conductor Calculation

The neutral load for feeders or services is based on the maximum calculated load between the neutral conductor and any ungrounded phase conductor. For residential ranges and dryers, 70% of the demanded load may be taken, and for the portion of imbalance exceeding 200 A, a 70% factor may be applied.

| Condition                                | Allowed reduction factor |
|------------------------------------------|--------------------------|
| Residential ranges and dryers            | 70% of demanded load     |
| Imbalance portion > 200 A                | 70%                      |

## Optional Calculation Method for Single-Family Dwellings

If the calculated load of a single-family dwelling is at least 100 A, it is permitted to add the general load calculated per 220.82(B) and the HVAC load per 220.82(C). The general load includes lighting, receptacles, small appliance circuits, laundry circuits, and fixed appliances with the simplified demand factors of the optional method.

## Residential Load Calculation Example

A dwelling of 200 m² (2153 ft²) has two small appliance circuits, one laundry circuit, fixed appliances (dishwasher 1200 VA, garbage disposal 800 VA, water heater 4500 VA, compactor 1000 VA), a dryer of 5000 VA, and a range of 8.0 kW. The total demanded load is 24 460 VA, requiring a 125 A service.

| Load item                                          | Connected load (VA) | Connected load (BTU/h) | Applied demand (VA) | Applied demand (BTU/h) |
|----------------------------------------------------|---------------------|------------------------|---------------------|------------------------|
| General lighting (200 m² × 33 VA/m²)              | 6600                | 22 520                | —                   | —                      |
| Small appliance circuits (2 × 1500 VA)            | 3000                | 10 236                | —                   | —                      |
| Laundry circuit (1 × 1500 VA)                     | 1500                | 5 118                 | —                   | —                      |
| Subtotal general lighting + small appliance + laundry | 11 100           | 37 874                | First 3000 VA at 100% = 3000; remaining 8100 VA at 35% = 2835; total = 5835 | 19 908 |
| Fixed appliances (4 units)                         | 7500 (1200+800+4500+1000) | 25 591       | 75% = 5625           | 19 193                 |
| Clothes dryer                                      | 5000                | 17 061                | 5000                 | 17 061                 |
| Range 8 kW (Table 220.55)                          | 8000                | 27 297                | 8000                 | 27 297                 |
| **Total demand**                                   |                     |                       | **24 460**           | **83 459**             |
| **Current at 240 V**                               |                     |                       | **101.9 A → service 125 A** |                  |

## Frequently Asked Questions (FAQ)

### What is the minimum unit load for lighting in a dwelling per NOM-001?
NOM-001 establishes 3 VA per square foot (33 VA/m²) for general lighting and receptacles, which gives a minimum power of 6600 VA (22 520 BTU/h) for a dwelling of 200 m².

### How many small appliance circuits does a kitchen require per NOM-001?
At least two 20 A small appliance circuits are required, each with an assigned load of 1500 VA (5118 BTU/h), totaling 3000 VA (10 236 BTU/h).

### What demand factor is applied to a general lighting load of 15 000 VA in a dwelling?
The first 3000 VA are taken at 100% (3000 VA / 10 236 BTU/h) and the remainder, 12 000 VA, at 35%, resulting in a demand of 7200 VA (24 566 BTU/h).

### How is the demanded load calculated for four fixed appliances rated 600 W, 400 W, 300 W, and 200 W?
Only the first three exceed 500 W (1706 BTU/h); since there are at least four fixed appliances with some ≥ 500 W, 75% is applied to the sum of the three that qualify (1300 W), giving 975 W, plus the 200 W directly, total 1175 W / 4010 BTU/h.

### What is the minimum load for a clothes dryer in a dwelling per NOM-001?
The minimum load is 5000 VA, equivalent to 5 kW or 17 061 BTU/h, or the nameplate rating if larger.

### What approximate current results from a demanded load of 24 000 VA on a 240 V single-phase service?
The demanded current is 100 A (24 000 VA ÷ 240 V), suggesting a 125 A main breaker.

## References
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2144
