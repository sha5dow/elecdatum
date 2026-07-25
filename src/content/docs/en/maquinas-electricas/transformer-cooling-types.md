---
title: "Transformer cooling types ONAN ONAF"
sidebar:
  label: "Transformer cooling types ONAN ONAF"
description: "Technical reference: Transformer cooling types ONAN ONAF"
keywords: ["transformer cooling type ONAN ONAF OFAF", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-cooling-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The dissipation of heat generated in a transformer is critical to preserving insulation integrity and ensuring equipment service life. Cooling systems are designated by a four-letter code that describes the internal and external cooling medium as well as the circulation mode. This article addresses ONAN, ONAF and their forced variants, detailing their operating principles, capabilities and selection criteria.

## Principle of heat generation in transformers

The main source of heat in a transformer is the Joule effect loss in the windings (I²R losses), which represents the dominant component compared to core losses due to hysteresis and eddy currents. Approximately 85% of the total losses in a typical distribution transformer are due to copper losses, while the remaining 15% correspond to iron losses. If this heat is not properly dissipated, the internal temperature rises continuously, causing thermal degradation of the paper insulation and the liquid dielectric medium, and drastically reducing transformer life.

| Loss component | Typical proportion |
| --- | --- |
| Copper losses (I²R) | 85 % |
| Iron losses (hysteresis + eddy current) | 15 % |

## Classification according to IEC 60076 code

IEC 60076 establishes a four-letter system to designate the cooling method. The meaning of each position is as follows:

| Position | Meaning | Common options |
| --- | --- | --- |
| 1st letter | Internal cooling medium in contact with windings | O (mineral oil), K (high fire point insulating liquid), L (non-mineral insulating liquid) |
| 2nd letter | Circulation mode of internal medium | N (natural), D (directed or forced) |
| 3rd letter | External cooling medium | A (air), W (water) |
| 4th letter | Circulation mode of external medium | N (natural), F (forced) |

## ONAN Cooling (Oil Natural Air Natural)

ONAN cooling is the simplest method and relies exclusively on natural convection of oil and air. The hot oil, as its density decreases, rises toward the top of the tank, where it transfers heat to the walls and radiators. Upon cooling, it descends along the lateral parts, establishing a continuous circulation cycle without any mechanical intervention. Heat transfer to the environment occurs by natural convection and radiation from the outer surface of the tank and radiators.

The dissipation capacity is limited by the effective surface area of the tank. To improve it, tubes, fins or radiator panels are incorporated to increase the heat exchange area.

| Parameter | Typical value ONAN |
| --- | --- |
| Oil circulation velocity | < 0,1 m/s / < 0,33 ft/s |
| Oil temperature rise over ambient | 55 °C / 131 °F |
| Typical maximum power | Up to 30 MVA |
| Dissipatable losses via radiators | 20 W/kVA to 50 W/kVA |

## ONAF Cooling (Oil Natural Air Forced)

The ONAF method accelerates heat dissipation by applying fans that force air flow over the cooling surfaces. The oil continues to circulate by natural convection, but the heat transfer coefficient on the air side is multiplied as the incident air velocity increases. This allows increasing the transformer load capacity without exceeding established temperature limits, or maintaining the same power with lower operating temperatures.

| Parameter | Typical value ONAF |
| --- | --- |
| Typical forced air velocity | 3 m/s to 6 m/s / 9,84 ft/s to 19,69 ft/s |
| Capacity increase compared to ONAN | 25 % to 33 % |
| Typical maximum power | Up to 120 MVA |
| Additional sound level from fans | 65 dB to 75 dB |

## OFAF Cooling (Oil Forced Air Forced)

In OFAF systems, forced oil circulation is introduced by means of pumps, combined with forced external air ventilation. The oil is driven through the windings and core at controlled flow rates, which significantly increases the internal convection coefficient. The hot oil is directed to air-oil heat exchangers where fans extract the heat. This method achieves the same cooling capacity as ONAF in a smaller tank volume, or a higher capacity in the same space.

| Parameter | Typical value OFAF |
| --- | --- |
| Oil flow rate per pump | 500 L/min to 2000 L/min / 132 gal/min to 528 gal/min |
| Capacity increase compared to ONAN | 50 % to 66 % |
| Typical maximum power | Up to 400 MVA |
| Auxiliary self-consumption | 0,2 % to 0,5 % of rated power |

## Heat losses according to transformer size

The heat losses that the cooling system must dissipate vary according to the transformer rated power. At higher power, transformer efficiency increases and specific losses per kVA decrease.

| Power range | Specific heat losses |
| --- | --- |
| ≤ 150 kVA | 50 W/kVA |
| 150 kVA – 500 kVA | 30 W/kVA (approx. 3 %) |
| 500 kVA – 1000 kVA | 25 W/kVA (approx. 2,5 %) |
| 1000 kVA – 2500 kVA | 20 W/kVA (approx. 2 %) |
| > 2500 kVA | 15 W/kVA (approx. 1,5 %) |

## Comparison between cooling methods

The selection between ONAN, ONAF and OFAF depends on rated power, available space, environmental conditions and noise restrictions. The following table summarizes the differentiating characteristics.

| Characteristic | ONAN | ONAF | OFAF |
| --- | --- | --- | --- |
| Oil circulation | Natural | Natural | Forced (pumps) |
| Air circulation | Natural | Forced (fans) | Forced (fans) |
| Overload capacity | Low | Medium | High |
| System complexity | Minimal | Low | Medium |
| Required maintenance | Very low | Low (fans) | Medium (pumps + fans) |
| Typical maximum power | 30 MVA | 120 MVA | 400 MVA |

## Applications according to power range

The choice of cooling method aligns with indicative power ranges that respond to economic and technical criteria.

| Power range | Recommended cooling method | Application example |
| --- | --- | --- |
| Up to 2,5 MVA | ONAN | Rural and urban distribution transformers |
| 2,5 MVA – 30 MVA | ONAN with radiators | Medium voltage substations |
| 30 MVA – 120 MVA | ONAF | Transmission substations |
| > 120 MVA | OFAF or OFWF | Large power transformers in power plants |

## Dual ONAN/ONAF operation modes

Many power transformers are designed to operate in dual ONAN/ONAF mode. At low loads, they operate exclusively with natural ONAN cooling, minimizing auxiliary consumption and noise. When the load exceeds a predefined threshold —generally between 60% and 70% of rated power— the fans automatically activate, switching to ONAF mode and increasing the transformer rated capacity.

> **P_ONAF = P_ONAN × (1 + ΔP)**, where ΔP is the percentage capacity increase (0,25 to 0,33 typically).

| Parameter | ONAN mode | ONAF mode |
| --- | --- | --- |
| Continuous power | 60 % – 70 % of ONAF rating | 100 % of rating |
| Fan consumption | 0 kW | 2 kW a 10 kW / 2,68 hp a 13,4 hp |
| Maximum oil temperature | 60 °C / 140 °F | 75 °C / 167 °F |

## Maintenance and operational considerations

ONAN systems require only periodic visual inspection of radiators, oil level verification and surface cleaning to avoid obstructions to natural air flow. In ONAF systems, checking fan motors, their electrical protections and the automatic starting control are added. OFAF systems also include maintenance of oil pumps, including verification of mechanical seals, vibrations and differential pressure.

Continuous temperature monitoring using fiber optic sensors embedded in the windings makes it possible to optimize the operation of the cooling system and anticipate predictive maintenance needs.

| Maintenance activity | ONAN | ONAF | OFAF |
| --- | --- | --- | --- |
| Visual inspection of radiators | Annual | Annual | Semiannual |
| Cleaning of exchange surfaces | Annual | Semiannual | Semiannual |
| Fan inspection | — | Quarterly | Quarterly |
| Oil pump inspection | — | — | Monthly |
| Verification of auxiliary electrical protections | — | Semiannual | Quarterly |
| Vibration analysis on pumps | — | — | Monthly |
| Winding temperature measurement | Quarterly | Monthly | Continuous |

## Factors that limit cooling capacity

The effectiveness of any cooling system can be compromised by several operational and environmental factors. High ambient temperature reduces the thermal gradient available for heat transfer. An altitude above 1000 m / 3281 ft above sea level decreases air density, affecting both natural and forced convection cooling capacity. The accumulation of dirt, dust or sediment on radiator surfaces increases the thermal resistance of the system. Oil degradation over time raises its viscosity and reduces its heat transfer capacity.

| Limiting factor | Effect on cooling capacity |
| --- | --- |
| Ambient temperature > 40 °C / 104 °F | Reduction of 3 % to 5 % per additional 5 °C / 9 °F |
| Altitude > 1000 m / 3281 ft | Reduction of 1 % per additional 100 m / 328 ft |
| Dirt on radiators (0,5 mm / 0,02 in layer) | Oil temperature increase of 5 °C to 10 °C / 9 °F to 18 °F |
| Oil degradation (viscosity +20 %) | Heat transfer reduction of 8 % to 12 % |

## Frequently Asked Questions (FAQ)

### What is the fundamental difference between ONAN and ONAF cooling?

The difference lies in the circulation mode of the external air. In ONAN, both oil and air circulation are natural, without mechanical assistance. In ONAF, the oil still circulates by natural convection, but fans are added to force air flow over the radiators, increasing dissipation capacity by 25% to 33%.

### What maximum power can a transformer with ONAN cooling handle?

A transformer with ONAN cooling can typically handle up to 30 MVA. For higher powers, the required dissipation surface would be excessively large and uneconomical, making it necessary to use forced cooling methods such as ONAF or OFAF.

### How does ambient temperature affect the performance of the ONAF system?

An ambient temperature above 40 °C / 104 °F reduces the effective cooling capacity of the ONAF system by 3% to 5% per each 5 °C / 9 °F increase. This forces limiting the transformer load or oversizing the forced ventilation system.

### How much do heat losses increase when going from a 500 kVA transformer to a 2500 kVA one?

Although the total losses in absolute value increase, the specific losses decrease from 30 W/kVA (for the 150 kVA – 500 kVA range) to 20 W/kVA (for the 1000 kVA – 2500 kVA range), reflecting the improvement in efficiency of larger transformers.

### What does the dual ONAN/ONAF operation mode consist of?

The dual ONAN/ONAF mode allows the transformer to operate with natural ONAN cooling up to approximately 60% or 70% of rated load, and automatically switch to ONAF mode by activating the fans when the load exceeds that threshold. This optimizes the energy consumption of auxiliary equipment and reduces noise during periods of low demand.

### What additional maintenance do OFAF systems require compared to ONAN?

Additional maintenance in OFAF includes monthly inspection of oil pumps (seals, vibrations, differential pressure) and quarterly verification of motor electrical protections, while the ONAN system only requires annual visual inspection of radiators and oil level verification.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/heat-gain-equipment-d_1668.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-cooling-system-and-methods/

