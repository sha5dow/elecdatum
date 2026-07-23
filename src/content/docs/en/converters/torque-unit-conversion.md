---
title: "Torque unit conversion"
sidebar:
  label: "Torque unit conversion"
description: "Technical reference: Torque unit conversion"
keywords: ["torque unit conversion Nm lbf-ft kgf-m", "converters"]
category: "converters"
topic: "units"
subcategory: "torque-units"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## Torque definition

Torque (also called moment of force) is the physical quantity that describes the ability of a force to cause rotation about an axis or fulcrum. It is calculated as the product of the applied force and the perpendicular distance from the axis to the line of action of the force. In the International System (SI) the unit of torque is the **newton meter (N·m)**, while in U.S. customary systems the **pound-force foot (lbf·ft)** is used, among others.

## Torque unit conversion table

| Unit (symbol) | 1 unit equals (N·m / lbf·ft) |
|---|---|
| Newton meter (N·m) | 1 N·m / 0,737562 lbf·ft |
| Kilonewton meter (kN·m) | 1 000 N·m / 737,562 lbf·ft |
| Newton centimeter (N·cm) | 0,01 N·m / 0,00737562 lbf·ft |
| Newton millimeter (N·mm) | 0,001 N·m / 0,000737562 lbf·ft |
| Kilogram-force meter (kgf·m) | 9,80665 N·m / 7,23301 lbf·ft |
| Kilogram-force centimeter (kgf·cm) | 0,0980665 N·m / 0,0723301 lbf·ft |
| Gram-force centimeter (gf·cm) | 9,80665 × 10⁻⁵ N·m / 7,2330 × 10⁻⁵ lbf·ft |
| Pound-force foot (lbf·ft) | 1,35582 N·m / 1 lbf·ft |
| Pound-force inch (lbf·in) | 0,112985 N·m / 0,083333 lbf·ft |
| Ounce-force inch (ozf·in) | 0,00706155 N·m / 0,00520833 lbf·ft |
| Dyne centimeter (dyn·cm) | 1 × 10⁻⁷ N·m / 7,3756 × 10⁻⁸ lbf·ft |

## Direct and inverse conversion formulas

- **From N·m to lbf·ft:** \( T_{(\text{lbf·ft})} = T_{(\text{N·m})} \times 0{,}737562 \)  
  **Inverse:** \( T_{(\text{N·m})} = T_{(\text{lbf·ft})} \times 1{,}35582 \)

- **From N·m to kgf·m:** \( T_{(\text{kgf·m})} = T_{(\text{N·m})} \times 0{,}101972 \)  
  **Inverse:** \( T_{(\text{N·m})} = T_{(\text{kgf·m})} \times 9{,}80665 \)

- **From lbf·ft to kgf·m:** \( T_{(\text{kgf·m})} = T_{(\text{lbf·ft})} \times 0{,}138255 \)  
  **Inverse:** \( T_{(\text{lbf·ft})} = T_{(\text{kgf·m})} \times 7{,}23301 \)

- **From N·m to lbf·in:** \( T_{(\text{lbf·in})} = T_{(\text{N·m})} \times 8{,}8507 \)

- **From lbf·ft to ozf·in:** \( T_{(\text{ozf·in})} = T_{(\text{lbf·ft})} \times 192 \)  
  (because 1 lbf = 16 oz and 1 ft = 12 in, so 16 × 12 = 192)

## Precision notes and special cases

Conversions between torque units are based on exact definitions of mass, length, and standard gravity. In particular:
- 1 pound (mass) = 0,45359237 kg
- 1 foot = 0,3048 m
- Standard gravity = 9,80665 m/s²

Combining these constants yields **1 lbf·ft = 1,3558179483314004 N·m**, a value that in practice is rounded to **1,35582 N·m** (five decimals) or **1,356 N·m** (three decimals), depending on the required tolerance.

In technical environments, confusion is common between **pound‑foot (lbf·ft)** and **foot‑pound (ft·lb)**, since the latter formally designates a unit of energy. However, many torque wrenches and manuals use "ft‑lb" to refer to torque. For low torque ranges (below 20 N·m), **pound‑force inch (lbf·in)** or **ounce‑force inch (ozf·in)** are often used. Common torque wrenches usually show dual scales in N·m / lbf·ft or in kgf·m / lbf·ft.

## Frequently asked questions

1. **How many newton meters are in one pound‑force foot?**  
   One pound‑force foot (lbf·ft) is exactly equal to 1,355817948 N·m, commonly rounded to 1,3558 N·m.

2. **How to convert 100 N·m to pound‑force feet?**  
   100 N·m multiplied by 0,737562 gives **73,76 lbf·ft**; in practice it is often stated as 73,8 lbf·ft.

3. **What is the equivalence between kilogram‑force meter and pound‑force foot?**  
   One kilogram‑force meter (kgf·m) equals **7,2330 lbf·ft**; conversely, 1 lbf·ft = 0,138255 kgf·m.

4. **What value in N·m corresponds to 50 lbf·in?**  
   50 lbf·in equals **5,65 N·m** (50 × 0,112985).

5. **How many ounce‑force inches are in 1 N·m?**  
   One newton meter contains **141,6 ozf·in** (1 N·m / 0,00706155 ≈ 141,6).

6. **How do small metric units like gf·cm relate to N·m?**  
   One gram‑force centimeter equals **9,807 × 10⁻⁵ N·m**; therefore, 10 000 gf·cm = 0,9807 N·m.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/torque-d_991.html
- **unitconverters.net**: https://www.unitconverters.net/torque-converter.html
- **convertworld.com**: https://www.convertworld.com/en/torque/
