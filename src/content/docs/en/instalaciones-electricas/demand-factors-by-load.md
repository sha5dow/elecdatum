---
title: "Demand factors by load type"
sidebar:
  label: "Demand factors by load type"
description: "Technical reference: Demand factors by load type"
keywords: ["demand factor table load type NEC", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "panel-loads"
subcategory: "demand-factors"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The demand factor is a dimensionless coefficient, always less than or equal to unity, that relates the actual maximum demand of a system or group of loads to the total connected load over a time interval. In electrical installations, its application reduces the rated capacity of feeders and services because not all loads operate simultaneously at full power. Installation codes, such as the NEC, establish standardized demand factors according to the type and quantity of equipment, allowing safe and economical sizing of conductors and protection devices.

## Demand factor formula
The general expression for the instantaneous demand factor is:

> **f<sub>Demand</sub> = P<sub>max demand</sub> / P<sub>total connected</sub>**

| Variable | Meaning | Unit |
|---|---|---|
| f<sub>Demand</sub> | Demand factor | dimensionless (≤ 1) |
| P<sub>max demand</sub> | Maximum active power demanded in the study interval | kW / hp |
| P<sub>total connected</sub> | Sum of the rated powers of all loads connected to the same circuit | kW / hp |

## Demand factors for general-use receptacles in non-dwelling occupancies
NEC Section 220.44 permits applying a demand factor of 50% to the portion of receptacle load and fixed multi-outlet assemblies that exceeds 10 kVA. The first 10 kVA (10 000 VA) are taken at 100%. This recognizes that in commercial occupancies not all receptacles are used simultaneously.

| Load condition | Demand factor |
|---|---|
| First 10 kVA (10 kW / 13.4 hp) | 100% |
| Excess over 10 kVA | 50% |

*Example:* For 150 general-use receptacles (27 000 VA) plus 20 sections of multi-outlet assembly (3600 VA), the total connected load is 30 600 VA. The calculated demand load is:
- 10 000 VA × 100% = 10 000 VA (10 kW / 13.4 hp)
- 20 600 VA × 50% = 10 300 VA (10.3 kW / 13.8 hp)
- Total = 20 300 VA (20.3 kW / 27.2 hp)

## Demand factors for fixed appliances in dwellings
According to 220.53, when a dwelling has four or more fixed in-place appliances (fastened, not portable) with a rated power equal to or greater than ¼ hp or 500 W, a demand factor of 75% may be applied to the total connected load of those appliances. Excluded from this reduction are cooking equipment, clothes dryers, space heating, and air conditioning.

| Number of fixed appliances ≥ ¼ hp or ≥ 500 W | Applicable demand factor |
|---|---|
| 1 to 3 | 100% |
| 4 or more | 75% |

## Demand factors for electric clothes dryers in dwellings
The minimum load for each household dryer is 5000 W (5 kW / 6.7 hp) or the nameplate rating if greater. When a building contains five or more dryers, the demand factors from Table 220.54 may be used, which reduce the demand load of the group.

| Number of dryers | Demand factor (%) |
|---|---|
| 1 to 4 | 100 |
| 5 | 85 |
| 6 | 80 |
| 7 | 75 |
| 8 | 70 |
| 9 | 65 |
| 10 | 60 |
| 11 | 58 |
| 12 | 56 |
| 13 | 54 |
| 14 | 52 |
| 15 | 50 |
| 16 | 48 |
| 17 | 47 |
| 18 | 46 |
| 19 | 45 |
| 20 | 44 |
| 21 | 43 |
| 22 | 42 |
| 23 | 41 |
| 24 | 40 |
| 25 | 39 |

The values are dimensionless (percentage). To convert the total connected load to kW and hp, multiply the unit power (minimum 5 kW / 6.7 hp) by the number of dryers and by the corresponding demand factor.

## Demand factors for electric cooking equipment in dwellings
NEC Table 220.55 provides the maximum demand for ranges, wall-mounted ovens, and counter-mounted cooking units in dwellings. It applies to equipment over 1.75 kW. Column C, for equipment rated not more than 8.75 kW, is shown below. For ratings between 8.75 kW and 27 kW, the demand from column C is increased by 5% for each kilowatt or major fraction thereof that exceeds 12 kW (Note 1).

| Number of appliances | Maximum demand (column C) | Equivalent in hp |
|---|---|---|
| 1 | 8 kW | 10.7 hp |
| 2 | 11 kW | 14.8 hp |
| 3 | 14 kW | 18.8 hp |
| 4 | 17 kW | 22.8 hp |
| 5 | 20 kW | 26.8 hp |
| 6 | 21 kW | 28.2 hp |
| 7 | 22 kW | 29.5 hp |
| 8 | 23 kW | 30.8 hp |
| 9 | 24 kW | 32.2 hp |
| 10 | 25 kW | 33.5 hp |

*Example:* A 15 kW electric range, as a single appliance, exceeds 12 kW by 3 complete kW. The column C demand for one appliance (8 kW) is increased 3 × 5% = 15%. Final demand = 8 kW × 1.15 = 9.2 kW (12.3 hp).

## Demand factors for commercial cooking equipment
For commercial cooking equipment with thermostatic control or intermittent use, Section 220.56 permits applying Table 220.56. The calculated feeder or service load must not be less than the sum of the two largest loads.

| Number of units | Demand factor (%) |
|---|---|
| 1 | 100 |
| 2 | 100 |
| 3 | 90 |
| 4 | 80 |
| 5 | 70 |
| 6 | 65 |
| 7 | 60 |
| 8 | 56 |
| 9 | 52 |
| 10 | 48 |
| 11 | 44 |
| 12 | 40 |
| 13 | 36 |
| 14 | 32 |
| 15 | 29 |
| 16 | 26 |
| 17 | 23 |
| 18 | 20 |

These factors are dimensionless and reduce the total connected load of the cooking equipment, excluding heating, ventilation, and air conditioning equipment.

## Demand factors for non-coincident loads
According to 220.60, when two or more loads cannot operate simultaneously, only the largest of them is considered for the feeder or service calculation. If the largest load includes a motor, 125% of the full-load current of the largest motor must be used, per 430.24. This rule is an extreme demand factor where the smaller load is completely disregarded.

## Neutral calculation for residential loads
The neutral load for feeders or services is based on the maximum unbalanced load between the neutral and any phase [220.61(A)]. For circuits supplying electric ranges and clothes dryers, the contribution to the neutral may be reduced to 70% of the demand calculated according to Tables 220.55 and 220.54 respectively [220.61(B)(1)]. In 3-wire single-phase or 4-wire three-phase systems, the portion of unbalanced load exceeding 200 A may also be taken at 70% [220.61(B)(2)], provided there are no significant nonlinear loads.

## Frequently Asked Questions (FAQ)
### What is the demand load for 150 general-use receptacles in a commercial occupancy?
   The calculated demand load is 20 300 VA (20.3 kVA), equivalent to 20.3 kW or 27.2 hp, applying 100% to the first 10 kVA and 50% to the excess per 220.44.

### What demand should be considered for five clothes dryers in a multifamily dwelling?
   For five dryers, the demand factor from Table 220.54 is 85%. With a minimum unit load of 5 kW (6.7 hp), the group demand is 5 × 5 kW × 0.85 = 21.25 kW (28.5 hp).

### How is the demand factor applied to fixed appliances in a house with four appliances of 500 W or more?
   With four or more appliances meeting the condition of 220.53, the total connected load is multiplied by 0.75. If each consumes 600 W, the connected sum is 2400 W (2.4 kW / 3.2 hp) and the demand load is 2400 W × 0.75 = 1800 W (2.4 hp).

### What is the demand for a 15 kW electric range according to Table 220.55?
   For a single appliance of 15 kW, the base column C is 8 kW. The excess over 12 kW is 3 kW, so 15% is added: 8 kW × 1.15 = 9.2 kW (12.3 hp). This value is the maximum demand to be considered.

### What demand factor corresponds to 10 units of commercial cooking equipment?
   Table 220.56 assigns a factor of 48% for 10 units. Thus, the group demand load is the sum of the nameplate ratings multiplied by 0.48, not less than the sum of the two largest loads.

### How is the neutral load calculated when dryers and electric ranges are present?
   Take 70% of the demand obtained from Tables 220.54 and 220.55 respectively [220.61(B)(1)]. For example, if the cooking demand is 9.2 kW, the associated neutral load is calculated as 9.2 kW × 0.70 = 6.44 kW (8.6 hp).

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2144

