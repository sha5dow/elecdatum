---
title: "SMAW welding electrodes parameters"
sidebar:
  label: "SMAW welding electrodes"
description: "Technical reference: SMAW welding electrodes parameters"
keywords: ["SMAW stick welding electrodes E6010 E7018 amperage", "manufacturing"]
category: "manufacturing"
topic: "joining"
subcategory: "smaw-welding"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Process Description
The SMAW (Shielded Metal Arc Welding) process uses a consumable coated electrode between 1,6 mm and 6,4 mm (1/16 in and 1/4 in) in diameter, whose electric arc generates melting temperatures above **1500 °C / 2732 °F**. The electrode coating decomposes forming a protective gas atmosphere and a slag layer that insulates the weld pool. Typical current intensity ranges from 40 A to 400 A depending on the electrode diameter and type, usually working with direct current electrode positive (DCEP) or alternating current (AC).

## Operating Parameters
The current selection for a given electrode diameter directly influences penetration and deposition rate. The recommended amperage ranges according to AWS classification and diameter are summarized below. The arc voltage is usually maintained between 18 V and 30 V, with a travel speed of 150 mm/min to 350 mm/min (6 in/min to 14 in/min) for root and fill passes.

| Electrode (AWS) | Diameter        | Recommended Current (DCEP or AC) | Typical Polarity |
|-----------------|-----------------|----------------------------------|------------------|
| E6010           | 2,4 mm / 3/32 in | 40 – 70 A                        | DCEP             |
| E6010           | 3,2 mm / 1/8 in  | 70 – 110 A                       | DCEP             |
| E6010           | 4,0 mm / 5/32 in | 100 – 160 A                      | DCEP             |
| E7018           | 2,4 mm / 3/32 in | 65 – 100 A                       | DCEP, AC         |
| E7018           | 3,2 mm / 1/8 in  | 90 – 130 A                       | DCEP, AC         |
| E7018           | 4,0 mm / 5/32 in | 120 – 180 A                      | DCEP, AC         |
| E7018           | 5,0 mm / 3/16 in | 180 – 260 A                      | DCEP, AC         |
| E6011           | 3,2 mm / 1/8 in  | 75 – 120 A                       | AC, DCEP         |
| E6013           | 3,2 mm / 1/8 in  | 80 – 125 A                       | AC, DCEN, DCEP   |

The cooling rate is controlled by adjusting the heat input between 0,5 kJ/mm and 2,5 kJ/mm (12,7 kJ/in to 63,5 kJ/in), which influences the joint microstructure.

## Tolerances and Dimensional Quality
SMAW welded joints can maintain weld bead position tolerances of ±0,8 mm (±0.031 in) on sheet thicknesses up to 5 mm (0.197 in). The weld reinforcement is controlled not to exceed 3,0 mm / 0.118 in above the base metal surface, and complete penetration on 1,5 mm / 0.059 in sheet is achievable with 1,6 mm / 1/16 in electrodes. Final dimensional accuracy depends on operator skill and edge preparation, allowing a maximum angular misalignment of 3° to 5° in butt joints.

## Applicable Materials
The process is suitable for welding carbon steels with carbon content up to 0,30 %C, low alloy steels such as ASTM A36 and A572, austenitic stainless steels 304/316, and gray or ductile cast irons using nickel-based electrodes. Thicknesses from 1,5 mm / 0.059 in to more than 50 mm / 1.97 in can be joined with multiple passes. Compatibility extends to copper and nickel alloys, although with less frequent use.

## Advantages and Limitations
- **Advantages**:
  - Simple and low-cost equipment, with initial investment under 1000 USD for basic 150 A units.
  - Outdoor operation with moderate wind, no need for external shielding gas.
  - Wide variety of electrodes for different materials (more than 50 AWS classifications).
  - Suitable for maintenance and repair work in the field.
- **Limitations**:
  - Deposition rate limited to 1 – 3 kg/h (2 – 6 lb/h) in high-production electrodes.
  - Productivity lower than GMAW and FCAW in continuous production.
  - Requires slag removal between passes, increasing cycle time.
  - Sensitive to coating moisture; low-hydrogen electrodes must be stored at 120 °C / 248 °F.

## Electrode Selection Guide
1. **E6010/E6011**: deep penetration, fine slag and rapid solidification; ideal for root passes in pipes and maintenance in difficult positions. Deposit tensile strength: ~430 MPa / 62 ksi.
2. **E7018**: low hydrogen, excellent low-temperature toughness (−30 °C / −22 °F), deposit with 490 MPa / 70 ksi tensile strength. Use in high-strength steel structures and pressure vessels.
3. **E7016**: similar to E7018 but with sodium coating, suitable for alternating current, deposited metal efficiency of 95%.
4. **E308L-16**: stainless steel electrode for 304L steels, deposit with intergranular corrosion resistance, current of 70–110 A for 3,2 mm / 1/8 in diameter.
5. **E Ni-Cl**: nickel electrode for dissimilar joints and cast iron welding; preheating to 150 °C / 302 °F for thicknesses >10 mm / 0.394 in.

## Parameter Tables by Material

### Carbon Steel ASTM A36 – butt joint at 6 mm (0.236 in)
| Parameter                | Value for E6010               | Value for E7018               |
|--------------------------|-------------------------------|-------------------------------|
| Electrode diameter       | 3,2 mm / 1/8 in               | 3,2 mm / 1/8 in               |
| Current (A)              | 85 – 105 A                    | 100 – 120 A                   |
| Voltage (V)              | 20 – 24 V                     | 22 – 26 V                     |
| Travel speed             | 200 mm/min / 7.9 in/min       | 250 mm/min / 9.8 in/min       |
| Heat input               | 0,6 – 1,0 kJ/mm / 15 – 25 kJ/in | 0,7 – 1,1 kJ/mm / 18 – 28 kJ/in |
| Welding positions        | All                           | All, except vertical-down     |

### Stainless Steel 304L – thickness 3 mm (0.118 in)
| Parameter                | E308L-16                      |
|--------------------------|-------------------------------|
| Electrode diameter       | 2,4 mm / 3/32 in              |
| Current                  | 55 – 75 A (DCEP)              |
| Voltage                  | 21 – 25 V                     |
| Travel speed             | 180 mm/min / 7.1 in/min       |
| Backing gas              | Pure argon (not always needed) |
| Post-weld treatment      | Normally not required         |

### Gray Cast Iron – repair with Ni-Cl electrode
| Parameter                | Recommendation                |
|--------------------------|-------------------------------|
| Preheating               | 150 – 260 °C / 302 – 500 °F   |
| Electrode diameter       | 3,2 mm / 1/8 in               |
| Current                  | 70 – 100 A (AC or DCEN)       |
| Post-weld cooling        | Slow, wrapped in ceramic blanket |

## Frequently Asked Questions

### What is the recommended amperage for a 3,2 mm E7018 electrode?
For a 3,2 mm (1/8 in) E7018 electrode, a current range of 90 to 130 A is recommended, operating with DCEP or AC polarity, depending on the base material thickness and welding position.

### What penetration difference exists between E6010 and E7018 at 100 A?
At 100 A, an E6010 electrode produces up to 30% greater penetration than an E7018 of the same diameter, due to the composition of its cellulosic coating that generates a more intense and directed arc.

### What is the maximum storage temperature for a low-hydrogen electrode?
Low-hydrogen electrodes, such as E7018, must be stored in ovens at a temperature between 120 °C and 150 °C (248 °F – 302 °F) to avoid moisture absorption, which could introduce up to 5 ml/100 g of diffusible hydrogen in the deposited metal.

### What minimum thickness can be welded with SMAW electrode without backing?
With a 1,6 mm (1/16 in) electrode, it is possible to weld 1,5 mm (0.059 in) sheet in a butt joint without backing, maintaining a current of 30 to 50 A and a square edge preparation.

### How much material does a 4,0 mm E7018 electrode deposit per arc minute?
A 4,0 mm (5/32 in) E7018 electrode operating at 150 A deposits approximately 1,4 kg/h (3.1 lb/h), which is equivalent to 0.025 kg per minute of continuous arc, with a deposition efficiency close to 70% including the coating.

### What is the typical tensile strength of an SMAW weld bead with E6013 electrode?
The deposited metal with an E6013 electrode has a minimum tensile strength of 430 MPa (62 ksi), with an elongation of 17% and a toughness of 27 J at −20 °C (20 ft·lbf at −4 °F), suitable for light structural applications.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **efunda.com**: https://www.efunda.com/units/show_units.cfm?Alfa=no&String1=Electric%20charge&String2=Electric%20charge
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/leverantorer/swepart-transmission
