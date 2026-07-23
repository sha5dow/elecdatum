---
title: "GDT True position"
sidebar:
  label: "GDT True position"
description: "Technical reference: GDT True position"
keywords: ["GDT position true position tolerance zone", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "position"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

True position is a geometric control that defines the exact location of a feature (hole, slot, boss) using basic dimensions and datum references. It specifies a cylindrical tolerance zone within which the axis, center point, or mid-plane of the controlled feature must lie. Unlike Cartesian coordinate dimensioning, the cylindrical zone allows up to 57% greater utilization of the available space for position error, facilitating manufacturing without compromising interchangeability.

## Tolerance zone and interpretation

Position tolerance is always interpreted as a diameter defining a cylinder (or a bandwidth for non-cylindrical features) oriented and located according to the datums specified in the feature control frame. The value stated in the frame is the diameter of the zone, meaning the feature axis can shift radially by half that value from its exact theoretical position.

| Characteristic | RFS (no modifier) | MMC (circle Ⓜ) | LMC (circle Ⓛ) |
|----------------|-------------------|-----------------|------------------|
| **Condition of applicability** | Regardless of the actual size of the feature | When the feature is at maximum material condition | When the feature is at least material condition |
| **Tolerance zone** | Fixed diameter equal to specified tolerance (e.g., ∅0.2 mm / ∅0.008 in) | Variable diameter; specified tolerance + bonus for deviation from MMC | Variable diameter; specified tolerance + bonus for deviation from LMC |
| **Additional tolerance (bonus)** | 0 mm / 0 in | Difference between MMC and actual size | Difference between actual size and LMC |
| **Main use** | Precision fits, concentricity | Assembly assurance, sheet metal parts | Minimum wall thickness control |

The tolerance zone is located perpendicular to the primary datum and centered at the intersections of the secondary and tertiary datum planes, forming a Cartesian reference system that replicates the actual assembly of the part.

## Symbol and feature control frame

The true position symbol is a stylized target (cross with central circle). The feature control frame is arranged as follows:

```
⌖ | ∅0.2 Ⓜ | A | B | C
```

- First compartment: geometric characteristic symbol (true position)
- Second compartment: tolerance value with optional modifier (here ∅0.2 mm / ∅0.008 in with MMC)
- Third compartment onward: datum reference letters in order of priority (primary, secondary, tertiary)

The basic dimensions (theoretically exact) that locate the feature are shown on the drawing enclosed in a rectangle, without direct tolerance. The complete tolerance comes exclusively from the feature control frame.

## Maximum material requirement (MMR) and virtual condition

When the modifier Ⓜ (MMR – Maximum Material Requirement) is applied, the specified geometric tolerance is valid only when the feature of size is at its maximum material condition (MMC). If the actual size deviates from MMC, an additional tolerance (bonus) of equal magnitude is generated, without compromising the virtual condition for assembly.

### Numerical example with hole

| Parameter | Metric value | Imperial value |
|-----------|--------------|----------------|
| Nominal diameter | 10 mm | 0.3937 in |
| Dimensional tolerance | +0.2 mm / 0 mm | +0.0079 in / 0 in |
| MMC (minimum hole diameter) | 10.0 mm | 0.3937 in |
| LMC (maximum hole diameter) | 10.2 mm | 0.4016 in |
| Specified position tolerance (∅) | 0.1 mm | 0.0039 in |
| Actual measured diameter | 10.15 mm | 0.3996 in |
| Bonus for deviation from MMC | 0.15 mm | 0.0059 in |
| Total position tolerance | 0.25 mm | 0.0098 in |
| MMVS (Maximum Material Virtual Size) | 9.9 mm | 0.3898 in |

The maximum material virtual condition (MMVC) is a cylinder of diameter 9.9 mm / 0.3898 in perfectly oriented and located. As long as no point of the hole violates this volume, the part will be assemblable.

### Numerical example with pin

| Parameter | Metric value | Imperial value |
|-----------|--------------|----------------|
| Nominal diameter | 10 mm | 0.3937 in |
| Dimensional tolerance | 0 mm / -0.2 mm | 0 in / -0.0079 in |
| MMC (maximum pin diameter) | 10.0 mm | 0.3937 in |
| LMC (minimum pin diameter) | 9.8 mm | 0.3858 in |
| Specified position tolerance (∅) | 0.1 mm | 0.0039 in |
| Actual measured diameter | 9.85 mm | 0.3878 in |
| Bonus for deviation from MMC | 0.15 mm | 0.0059 in |
| Total position tolerance | 0.25 mm | 0.0098 in |
| MMVS (Maximum Material Virtual Size) | 10.1 mm | 0.3976 in |

## Least material requirement (LMR)

The modifier Ⓛ (LMR – Least Material Requirement) is used when the critical condition is minimum wall thickness. The specified geometric tolerance applies at the least material condition (LMC). As the actual size deviates from LMC, a proportional bonus is granted.

| Feature state | Applicable position tolerance |
|---------------|-------------------------------|
| At LMC (maximum hole, minimum pin) | Specified tolerance (e.g., ∅0.1 mm / ∅0.0039 in) |
| At MMC (minimum hole, maximum pin) | Specified tolerance + total diametral difference (e.g., ∅0.3 mm / ∅0.0118 in) |

This practice protects minimum distances between critical surfaces, common in cast or forged components.

## Practical applications

### Two-plate assembly with screws

Two plates joined by M6 screws (pitch 1 mm). Through holes in the upper plate of diameter 6.5 mm / 0.256 in with dimensional tolerance ±0.2 mm / ±0.008 in. Threaded holes in the lower plate M6. True position with MMC is applied to the through holes:

- Specified position: ∅0.2 mm / ∅0.008 in Ⓜ
- MMC hole: 6.3 mm / 0.248 in
- If the hole is produced at 6.5 mm / 0.256 in, bonus = 0.2 mm / 0.008 in
- Total position tolerance: ∅0.4 mm / ∅0.016 in

With this specification, even in the worst combination of diameters and positions, the screw will always have sufficient clearance for assembly.

### Hole pattern with common datum

For four equidistant holes in a circular pattern, basic dimensions of radius and angle are specified, along with a single feature control frame referencing the central axis as primary datum and the bearing surface as secondary. The position tolerance applies to each hole individually or as a group, depending on required assembly repeatability.

## Comparison between ISO and ASME standards

| Aspect | ASME Y14.5 | ISO 1101 (GPS) |
|---------|-------------|-----------------|
| **Default condition** | RFS (Regardless of Feature Size) unless a modifier is indicated | Independence; size and geometry are not related unless Ⓜ, Ⓛ, or (E) is used |
| **MMR notation** | Ⓜ in the tolerance and/or datum compartment | Ⓜ in the tolerance compartment; the datum may have an independent modifier |
| **Virtual condition** | MMVC defined as a fixed boundary | MMVC with same practical interpretation |
| **Position tolerance without datum** | Not allowed; at least one datum is mandatory | Allowed in self-referencing cases |
| **Projected tolerance zone** | Symbol Ⓟ | Symbol Ⓟ, identical interpretation |

In industrial applications with multiple suppliers, it is critical to specify the applicable standard (ASME Y14.5 or ISO 1101) in the drawing title block to avoid conflicting interpretations.

## Reference tables

### Suggested position tolerances by nominal diameter

| Nominal hole diameter (mm / in) | Typical screw / pin | Suggested position tolerance ∅ (mm / in) |
|---------------------------------|---------------------|------------------------------------------|
| 3.0 mm / 0.118 in | M2.5 | 0.10 mm / 0.0039 in |
| 5.0 mm / 0.197 in | M4 | 0.15 mm / 0.0059 in |
| 6.5 mm / 0.256 in | M5 | 0.20 mm / 0.0079 in |
| 8.5 mm / 0.335 in | M6 | 0.25 mm / 0.0098 in |
| 10.5 mm / 0.413 in | M8 | 0.30 mm / 0.0118 in |
| 13.0 mm / 0.512 in | M10 | 0.35 mm / 0.0138 in |
| 17.0 mm / 0.669 in | M12 | 0.40 mm / 0.0157 in |

### Process capability and tolerance grades

According to the ANSI B4.1 tolerance grade table for machining, processes capable of maintaining dimensional tolerances in the IT4 to IT13 ranges relate to achievable position accuracy. The following table associates the dimensional tolerance grade with an indicative position accuracy for a nominal diameter of 10 mm.

| Machining process | Typical IT grade | Dimensional tolerance (µm / µin) | Indicative position accuracy (∅ mm / ∅ in) |
|-------------------|-----------------|----------------------------------|--------------------------------------------|
| Lapping / Fine grinding | IT4–IT5 | 4–6 µm / 157–236 µin | 0.005 mm / 0.0002 in |
| Cylindrical grinding | IT6 | 9 µm / 354 µin | 0.010 mm / 0.0004 in |
| Diamond turning | IT7 | 15 µm / 591 µin | 0.020 mm / 0.0008 in |
| Broaching / Reaming | IT8 | 22 µm / 866 µin | 0.030 mm / 0.0012 in |
| General turning | IT9–IT10 | 36–58 µm / 1417–2283 µin | 0.050 mm / 0.0020 in |
| Drilling | IT11–IT12 | 90–150 µm / 3543–5906 µin | 0.100 mm / 0.0039 in |
| Planing / Shaping | IT12–IT13 | 150–220 µm / 5906–8661 µin | 0.200 mm / 0.0079 in |

Indicative values; the actual true position requirement depends additionally on assembly rigidity, fit type, and the presence of MMC/LMC.

## Frequently asked questions

**What improvement does the cylindrical tolerance zone of 0.1 mm / 0.0039 in provide compared to an equivalent Cartesian tolerance?**  
The cylindrical zone of diameter 0.1 mm / 0.0039 in offers 57% more usable area than a square zone of side 0.1 mm / 0.0039 in, because it eliminates the rigid restrictions of the corners and allows complete diagonal displacements.

**How is the additional tolerance calculated when applying modifier Ⓜ to a hole of 6.5 mm / 0.256 in with dimensional tolerance +0.2 mm / 0?**  
If the actual diameter is 6.7 mm / 0.264 in, the bonus is the difference between the actual diameter and the MMC (6.5 mm / 0.256 in), i.e., 0.2 mm / 0.008 in, which is added to the specified position tolerance.

**What true position value is recommended for an M8 through hole with diameter 9.0 mm / 0.354 in?**  
With a hole diameter of 9.0 mm / 0.354 in and an M8 screw, the suggested position tolerance is ∅0.3 mm / ∅0.012 in applied with MMC to guarantee interchangeability.

**What is the maximum material virtual size (MMVS) for a hole of 10.0 mm / 0.3937 in with position tolerance ∅0.1 mm / ∅0.0039 in?**  
The MMVS results from subtracting the position tolerance from the MMC: 10.0 mm – 0.1 mm = 9.9 mm / 0.3898 in. It represents the diameter of the assembly pin in the worst condition.

**Does a feature control frame with ∅0.2 mm / ∅0.008 in and no modifier allow radial movement of 0.2 mm / 0.008 in?**  
No; because it is a cylindrical zone, the value ∅0.2 mm / ∅0.008 in is the total allowable diameter. The axis can shift a maximum of 0.1 mm / 0.004 in radially from its theoretical position.

**How does the ISO principle of independence affect true position without a modifier?**  
In ISO, if Ⓜ or (E) is not specified, the size of the feature does not influence the geometric tolerance: a hole of 10.0 mm / 0.3937 in maintains its fixed position zone, even if its actual diameter varies, unlike ASME RFS which also grants no bonus but does require envelope compliance.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
