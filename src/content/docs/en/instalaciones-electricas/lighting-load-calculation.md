---
title: "Lighting load calculation"
sidebar:
  label: "Lighting load calculation"
description: "Technical reference: Lighting load calculation"
keywords: ["lighting load calculation VA per square foot", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "lighting-circuits"
subcategory: "lighting-load-calculation"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The general lighting load for a dwelling is set at **3 VA per square foot (ft²)**, equivalent to **32,3 VA/m²**, in accordance with the minimum NEC requirements for lighting and general-use receptacle circuits. This value covers both fixed luminaires and receptacle outlets, forming the basis for sizing feeders and electrical services.

## General lighting loads by occupancy type
The following table lists the minimum unit load values that NEC 220.12 assigns to each occupancy type, expressed in volt-amperes per square meter and its equivalent in VA/ft². The total load is obtained by multiplying this density by the usable floor area of the premises.

| Occupancy type | Unit load (VA/m² / VA/ft²) |
| :--- | :--- |
| Single-family and multifamily dwellings | 32,3 VA/m² / 3,0 VA/ft² |
| Offices and banks | 37,7 VA/m² / 3,5 VA/ft² |
| Commercial premises and stores | 32,3 VA/m² / 3,0 VA/ft² |
| Churches and assembly halls | 10,8 VA/m² / 1,0 VA/ft² |
| Meeting rooms and auditoriums | 10,8 VA/m² / 1,0 VA/ft² |
| Hospitals (general areas) | 21,5 VA/m² / 2,0 VA/ft² |
| Hotels and motels (common areas) | 21,5 VA/m² / 2,0 VA/ft² |
| Hotels and motels (guest rooms) | 21,5 VA/m² / 2,0 VA/ft² |
| Schools and educational centers | 32,3 VA/m² / 3,0 VA/ft² |
| Restaurants and dining rooms | 21,5 VA/m² / 2,0 VA/ft² |
| Warehouses and storage | 2,7 VA/m² / 0,25 VA/ft² |
| Garages and parking lots | 5,4 VA/m² / 0,5 VA/ft² |
| Hair salons and barbershops | 32,3 VA/m² / 3,0 VA/ft² |
| Libraries and museums | 32,3 VA/m² / 3,0 VA/ft² |
| Nursing homes (rooms) | 21,5 VA/m² / 2,0 VA/ft² |

## Demand factors
For general lighting loads in dwellings, the NEC (Table 220.42) allows the application of decreasing demand factors, since not all luminaires and receptacles operate simultaneously. The first **3000 VA** is taken at **100%**; the portion between **3001 VA and 120 000 VA** is calculated at **35%**, and the remainder above **120 000 VA** at **25%**. In other building types, such as hospitals or hotels, specific factors are used that reflect different usage profiles. The following table summarizes the typical values:

| Occupancy type | Load range (VA) | Demand factor (%) |
| :--- | :--- | :--- |
| Dwellings | 0 – 3 000 | 100 |
|  | 3 001 – 120 000 | 35 |
|  | More than 120 000 | 25 |
| Hospitals | 0 – 50 000 | 40 |
|  | More than 50 000 | 20 |
| Hotels and motels | 0 – 20 000 | 50 |
|  | 20 001 – 100 000 | 40 |
|  | More than 100 000 | 30 |
| Restaurants | Total load | 100 |

## Calculation method
The general lighting load is determined by multiplying the usable floor area of each space by the corresponding density from the occupancy table, and then applying demand factors when permitted. The general expression is:

> **Lighting load (VA) = Σ [ Area (m²) × Density (VA/m²) ]**

If the building houses multiple occupancies, the products for each type of space are added together. Demand factors may be applied to the resulting load as long as the installation does not concentrate the simultaneous use of all lighting (for example, in dance halls or community dining rooms). For general-use receptacles in non-dwelling occupancies, once the connected load exceeds **10 000 VA**, a demand factor of **50%** is applied to the excess, per NEC Section 220.44.

## Calculation example
A single-family dwelling of **150 m²** (≈ 1615 ft²) with no other mixed occupancies requires the following steps:

1. Base load = 150 m² × 32,3 VA/m² = **4845 VA**.
2. Application of demand factors per Table 220.42:
   - First 3000 VA at 100% = 3000 VA.
   - Remainder (4845 – 3000) = 1845 VA at 35% = **645,75 VA**.
3. Total demand load = 3000 + 645,75 = **3645,75 VA** (≈ 3,6 kVA).

This value is integrated into the feeder or electrical service calculation, adding it to other loads such as small appliances, laundry, kitchen, and HVAC.

## Frequently Asked Questions (FAQ)

### What is the minimum required lighting load for a 100 m² dwelling?
The general lighting load without applying demand is **3230 VA** (100 m² × 32,3 VA/m²). After applying demand factors, the demand load is reduced to approximately **2480 VA**.

### In what cases is the 35% demand factor not allowed in dwellings?
The demand factor is not applied in areas where all lighting may be on simultaneously, such as dance halls or banquet rooms, as indicated in the note of NEC 220.42.

### How is the lighting load calculated for a 200 m² commercial premises?
Multiply the area of 200 m² by the density of 32,3 VA/m², obtaining **6460 VA**. If the store is part of a larger building, this value is added to the loads of other spaces and the corresponding overall demand factors are applied.

### What practical difference is there between VA/m² and W/ft² in lighting calculation?
For lighting loads with power factor close to unity, **1 VA is approximately equal to 1 W**. Therefore, densities in VA/m² can be converted to W/m² without loss of practical precision, although the NEC uses VA to reflect the capacity of the distribution system.

### What is the unit load for a 500 m² parking lot?
According to the occupancy table, garages have **5,4 VA/m² (0,5 VA/ft²)**, so the total load amounts to **2700 VA** (500 m² × 5,4 VA/m²). This load is usually not subject to additional demand factors.

### When is the 50% demand factor applied for commercial receptacles?
When the connected load of all general-use receptacles exceeds **10 000 VA**, the portion exceeding that threshold is reduced to **50%** (NEC Section 220.44). For example, for 15 000 VA connected, the demand load is 10 000 + (5000 × 0,5) = **12 500 VA**.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/light-power-room-d_897.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2144
- **electrical4u.com**: https://www.electrical4u.com/voltage-drop-calculation/

