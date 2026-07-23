---
title: "MMC LMC RFS material conditions"
sidebar:
  label: "MMC LMC RFS material conditions"
description: "Technical reference: MMC LMC RFS material conditions"
keywords: ["MMC LMC RFS maximum material condition explained", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "mmc-lmc-rfs"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Definition
Material conditions (MMC, LMC and RFS) modify the geometric tolerance based on the actual size of the feature, potentially increasing the position tolerance by up to 0.030 mm / 0.0012 in for holes with typical dimensional tolerance. These modifiers allow accepting functional parts that, without the bonus, would be rejected.

- **Maximum material condition (MMC)**: the feature contains the greatest amount of material within its dimensional limits (minimum diameter for holes, maximum diameter for shafts). When MMC is invoked, if the feature deviates from this state, a geometric tolerance bonus is granted equal to the deviation from MMC.
- **Least material condition (LMC)**: the feature contains the least amount of material (maximum hole, minimum shaft). The bonus is obtained when deviating from LMC toward MMC.
- **Regardless of feature size (RFS)**: the geometric tolerance always applies with the value stated in the tolerance feature control frame, without additional bonus. This is the default condition in ASME and ISO when no modifier is specified.

## Symbol interpretation
The modifiers are placed inside the geometric tolerance feature control frame, after the tolerance value and/or the datum letter. The presence of the symbol activates the bonus calculation based on the measured size of the feature.

| Symbol | Meaning | ISO Standard | ASME Y14.5 |
|---|---|---|---|
| Ⓜ (M in a circle) | Maximum material condition (MMC) | Identical symbol. Applies to features of size and datum references. | Identical symbol. Bonus allowed in position, orientation, etc. controls. |
| Ⓛ (L in a circle) | Least material condition (LMC) | Same symbol. Application analogous to MMC but inverse. | Same interpretation. Less frequent than MMC. |
| (no symbol) | Regardless of feature size (RFS) | Absence of modifier indicates RFS (default rule). | Likewise, absence of modifier implies RFS. Bonus is not applied. |
| Ⓢ (S in a circle) | RFS (obsolete) | Not used in current ISO 1101. | Used in older versions of ASME Y14.5, now replaced by its omission. |

## Tolerance bonus table
The maximum achievable bonus is equal to the difference between the MMC size and the LMC size of the feature. The table below shows the behavior for a **hole with nominal diameter 10 H7** (dimensional tolerance: 10.000 / 10.015 mm / 0.3937 / 0.3943 in) with a **specified position tolerance at MMC of 0.1 mm / 0.004 in**.

| Actual hole size | Deviation from MMC (10.000 mm / 0.3937 in) | Tolerance bonus | Total allowed position tolerance |
|---|---|---|---|
| 10.000 mm / 0.3937 in (MMC) | 0 mm / 0 in | 0 mm / 0 in | 0.100 mm / 0.0040 in |
| 10.005 mm / 0.3939 in | 0.005 mm / 0.0002 in | 0.005 mm / 0.0002 in | 0.105 mm / 0.0042 in |
| 10.010 mm / 0.3941 in | 0.010 mm / 0.0004 in | 0.010 mm / 0.0004 in | 0.110 mm / 0.0044 in |
| 10.015 mm / 0.3943 in (LMC) | 0.015 mm / 0.0006 in | 0.015 mm / 0.0006 in | 0.115 mm / 0.0046 in |

For LMC the logic is symmetric but referenced to the least material condition. For shafts, MMC corresponds to the maximum diameter, so the bonus is calculated by subtracting the actual size from the MMC.

## Real application examples

### Through assembly with screw and nut
An M8 screw (major diameter 8.0 mm / 0.315 in) must pass through two parts with through holes of 8.5 ±0.1 mm / 0.335 ±0.004 in. If a position tolerance of 0.2 mm / 0.008 in at MMC is specified, the part is acceptable with the hole at 8.4 mm / 0.331 in (MMC) and a position deviation of 0.2 mm / 0.008 in. If the hole is made at 8.6 mm / 0.339 in (LMC), the position tolerance expands to 0.3 mm / 0.012 in, allowing greater misalignment without compromising assembly.

### MMC functional gage
A verification gage for MMC has a fixed diameter equal to the MMC of the feature minus the position tolerance (for holes). Only parts whose hole and position lie within the virtual envelope will be accepted. This technique is fast and ensures interchangeability.

### Shaft and housing with interference fit
In applications requiring a minimum interference, LMC is used on the housing to guarantee that, even with the maximum clearance (hole at LMC), enough material remains for the interference. The LMC bonus allows accepting some form or position deviation without losing the required interference.

## Comparison between systems (ISO vs ASME)

| Aspect | ISO 1101 / 2692 | ASME Y14.5 |
|---|---|---|
| MMC symbol | Ⓜ (identical) | Ⓜ (identical) |
| LMC symbol | Ⓛ (identical) | Ⓛ (identical) |
| RFS by default | No symbol (RFS is the default condition). | No symbol (RFS is the default rule). |
| Envelope Requirement | Indicated with (E) after the dimensional tolerance. Forces perfect form at MMC. Not applied automatically. | Rule #1 (Envelope Principle) applies by default to features of size: perfect form required at MMC. |
| Application of MMC to datums | MMC can be applied to datum references to create a movable virtual datum. | Likewise, virtual datum shift («datum feature shift») allows absorbing additional misalignment. |
| Documentation | ISO 2692 specifies maximum/least material requirement. | ASME Y14.5 defines everything within a single geometric dimensioning standard. |

The main practical difference lies in the **Envelope Requirement**: in ASME Rule #1 is always assumed, while in ISO it must be explicitly indicated with the symbol (E). Therefore, a drawing without (E) in ISO allows the part to exceed the perfect form envelope at MMC, which can lead to assembly problems if not accounted for.

## Frequently asked questions

1. **How much additional tolerance can I obtain by applying MMC to a 10 H7 hole?**  
   Up to 0.015 mm / 0.0006 in of bonus, reaching a total position tolerance of 0.115 mm / 0.0046 in if the hole is manufactured at its LMC (10.015 mm / 0.3943 in).

2. **What dimensional deviation is needed to double a geometric tolerance of 0.1 mm / 0.004 in?**  
   To double it to 0.2 mm / 0.008 in, the feature must deviate 0.1 mm / 0.004 in from its MMC, provided the dimensional tolerance range allows it; in a 10 H7 hole this is not possible because only 0.015 mm / 0.0006 in of travel is available.

3. **Is there any case where MMC does not provide any increase in tolerance?**  
   When the feature is produced exactly at MMC (e.g., hole of 10.000 mm / 0.3937 in in the example), the bonus is 0 mm / 0 in and the geometric tolerance remains at the base value.

4. **How much can a datum with MMC modifier shift?**  
   The maximum shift of the virtual datum equals the dimensional tolerance of the reference as a feature of size. If a shaft datum has a dimensional tolerance of 0.020 mm / 0.0008 in, the part can shift laterally up to 0.010 mm / 0.0004 in in the worst condition, leveraging the difference between MMC size and actual size.

5. **What productivity improvement has been documented when switching from RFS to MMC?**  
   In the automotive industry, a reduction of up to 15% in rejected parts has been reported when changing position tolerances from RFS to MMC in sheet metal components with fastening holes, by taking advantage of the dimensional bonus.

6. **What is the maximum combined tolerance (dimensional + geometric) allowed for a nominal M6 fit?**  
   In a 6 H7 hole (6.000/6.012 mm / 0.2362/0.2367 in), with a position tolerance of 0.05 mm / 0.002 in at MMC, the maximum combined tolerance in the worst case (hole at LMC) reaches 0.062 mm / 0.0024 in of allowable positional deviation.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/material-properties-t_24.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/material-properties-t_24.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
