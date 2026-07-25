---
title: "Conduit bending angles and offsets"
sidebar:
  label: "Conduit bending angles and offsets"
description: "Technical reference: Conduit bending angles and offsets"
keywords: ["conduit bending offset angle calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "raceways"
subcategory: "conduit-bending"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Electrical conduit bending allows adapting pipe runs to the changes in direction and elevation required by an installation, while maintaining the interior integrity of the conduit so as not to hinder subsequent wiring. The manual technique using a bender for EMT, IMC, or rigid conduit is based on a set of marks and multipliers that the electrician applies to obtain precise angles on the job site. Prefabricated fittings are only necessary when the routing exceeds the capacity of the hand tool or when working with rigid PVC without heat equipment.

## Essential Bending Types

| Bend Type | Description |
| --- | --- |
| Stub‑up (90° rise) | Tight 90° bend near the end of the conduit, used to rise from the floor to a panel or box. The stub height is the distance from the end of the pipe to the center of the box. |
| Offset | Two equal and opposite bends that shift the conduit while keeping the ends parallel, e.g., to clear an obstacle or align with a knockout. |
| Back‑to‑back | Two 90° bends in opposite directions located a short distance apart, typical for navigating an exit corner from a box to the ceiling. |
| Saddle | A set of three or four bends that allows jumping over a transverse obstacle. The three‑point saddle is the most common with manual benders. |
| Kick | A bend of less than 45° that changes the direction of the conduit, often used to compensate for small level differences. |

## Marks and Angles on the Manual Bender

The EMT bender incorporates fixed references to position the conduit according to the type of curve:

1. **Arrow**: aligns with the stub‑up mark and with the first mark of offsets.
2. **Star**: indicates the insertion point for back‑to‑back bends; the bend is made toward the opposite side of the first one.
3. **Teardrop or center notch**: used for the center bend of three‑point saddles.
4. **Degree marks**: allow directly executing bends of 10°, 22.5°, 30°, 45°, and 60°. The 90° bend is obtained by bringing the conduit to a vertical position without a numerical angular reference; practice and verification with a level determine correct execution.

## Offset Calculation

To lay out a deviation, mark the conduit with two distances starting from the first bend. The spacing between marks depends on the chosen angle and the offset depth.

> **Distance between marks = Offset depth × Multiplier**

The multiplier equals 1 / sin(angle). The total conduit length shortens during bending; this shrinkage is calculated per inch (or per millimeter) of offset depth and must be added before cutting the pipe.

> **Total shrinkage = Offset depth × Shrink factor per unit depth**

### Multipliers and Shrinkage for Offsets

| Angle (°) | Multiplier | Shrinkage per 25 mm depth / Shrinkage per inch of depth |
| --- | --- | --- |
| 10 | 6.0 | 1.6 mm / 0.06 in |
| 22.5 | 2.6 | 5.6 mm / 0.22 in |
| 30 | 2.0 | 6.4 mm / 0.25 in |
| 45 | 1.4 | 9.5 mm / 0.375 in |
| 60 | 1.2 | 12.7 mm / 0.50 in |

**Reading example:** For a 30° offset with a depth of 100 mm / 4 in, the distance between marks is 100 mm × 2.0 = 200 mm / 4 in × 2.0 = 8 in. The shrinkage will be 100 mm × (6.4 mm / 25 mm) = 25.6 mm / 4 in × 0.25 in = 1 in.

## Gain and Shrinkage in 90° Bends

In a 90° bend the conduit "gains" length because the curved path is shorter than two straight sections that would meet at a square corner. The gain depends on the bender's inside radius.

> **Gain ≈ 0.43 × Center‑line radius (CLR)**

Shrinkage in stub‑ups is not calculated using the offset multipliers, but rather with the manufacturer's gain table. Below is a reference table for commercial EMT benders.

| Conduit Trade Size | Typical Bending Radius (mm / in) | Approximate Gain (mm / in) |
| --- | --- | --- |
| ½ in (16 mm) | 127 mm / 5 in | 55 mm / 2.15 in |
| ¾ in (21 mm) | 152 mm / 6 in | 65 mm / 2.57 in |
| 1 in (27 mm) | 178 mm / 7 in | 76 mm / 3.00 in |

## Practical Application Example

A ½ in EMT stub‑up is needed that reaches 300 mm / 12 in above floor level and a 45° offset that shifts the conduit 50 mm / 2 in to avoid a beam. The ½ in bender has a radius of 127 mm (5 in). The gain is 55 mm (2.15 in). For the stub‑up, mark the conduit by subtracting the gain: the first mark is placed at 300 mm − 55 mm = 245 mm / 12 in − 2.15 in = 9.85 in from the end. Bend on the arrow until reaching 90°. The 45° offset requires a multiplier of 1.4: distance between marks = 50 mm × 1.4 = 70 mm / 2 in × 1.4 = 2.8 in. Shrinkage = 50 mm × (9.5 mm / 25 mm) = 19 mm / 2 in × 0.375 in = 0.75 in. Cut a conduit length that includes this extra shrinkage and execute the two bends in opposite directions, obtaining a precise deviation that keeps the ends parallel.

## Frequently Asked Questions (FAQ)

### What multiplier applies to a 30° offset?
The multiplier for a 30° offset is 2.0; this means the distance between the two marks is twice the offset depth.

### What is the shrinkage per inch of offset with a 45° angle?
Shrinkage is 9.5 mm per 25 mm of offset depth, equivalent to 3/8 inch per inch of deviation.

### How much length is gained when bending a ½ inch EMT conduit to 90°?
With a typical radius of 127 mm / 5 in, the gain is approximately 55 mm / 2.15 in; this figure is subtracted from the stub height to position the arrow mark.

### What maximum offset depth can I achieve with a distance between marks of 150 mm / 6 in and a 22.5° angle?
With multiplier 2.6, the maximum depth is 150 mm ÷ 2.6 = 57.7 mm / 6 in ÷ 2.6 = 2.31 in.

### How much shrinkage does a conduit experience when making a 10° offset with 80 mm / 3.15 in of deviation?
Shrinkage is 80 mm × (1.6 mm / 25 mm) = 5.1 mm / 3.15 in × 0.06 in = 0.19 in; this value must be added to the pipe length before bending.

### What distance should be between the marks of a 60° offset to clear 40 mm / 1.57 in?
Applying the multiplier 1.2, the distance between marks is 40 mm × 1.2 = 48 mm / 1.57 in × 1.2 = 1.88 in.

## References
- **mikeholt.com**: https://www.mikeholt.com/documents/freestuff/Hand_bending_conduit_and_tubing_by_Bill_Bamford.pdf
