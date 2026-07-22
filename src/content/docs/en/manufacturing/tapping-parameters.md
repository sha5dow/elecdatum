---
title: "Tapping parameters and speeds"
sidebar:
  label: "Tapping parameters and speeds"
description: "Technical reference: Tapping parameters and speeds"
keywords: ["tapping speeds feeds cut roll form", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "tapping"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

Tapping is a machining process for generating internal threads using a multi-edge rotating tool. The operating parameters —cutting speed, feed rate, and depth— determine thread quality, tap life, and productivity. Two main variants are presented: cutting taps (chip removal taps) and cold forming taps (roll form or form taps). Below are reference values, applicable materials, and selection criteria.

## Operational Parameters

### Cutting Speed (vc)

Cutting speed in tapping is the tangential speed at the major diameter of the tap. For high-speed steel (HSS) taps, values range from 3 m/min for stainless steels to 50 m/min for aluminum (10–164 ft/min). Cutting speed relates to revolutions per minute (n) via:

n = (1000 · vc) / (π · D) [min⁻¹] when vc is in m/min and D in mm.

In imperial units: n = (12 · vc) / (π · D) [RPM] with vc in ft/min and D in inches.

**Recommended Cutting Speeds – Cutting Taps (HSS, Straight Flute)**

| Material | Recommended vc |
|---|---|
| Aluminum (wrought, <6% Si) | 25–50 m/min (82–164 ft/min) |
| Cast aluminum (6–12% Si) | 15–25 m/min (49–82 ft/min) |
| Brass / Bronze | 15–30 m/min (49–98 ft/min) |
| Carbon steel (≤0.3% C) | 10–20 m/min (33–66 ft/min) |
| Alloy steel (0.3–0.5% C) | 5–12 m/min (16–39 ft/min) |
| Stainless steel (304/316) | 3–8 m/min (10–26 ft/min) |
| Gray cast iron | 12–25 m/min (39–82 ft/min) |
| Thermoplastics (engineering plastics) | 15–30 m/min (49–98 ft/min) |

**Cutting Speeds for Roll Form Taps (Formers, Chipless)**

| Material | Recommended vc |
|---|---|
| Aluminum (wrought) | 20–35 m/min (66–115 ft/min) |
| Low carbon steel | 10–20 m/min (33–66 ft/min) |
| Stainless steel (austenitic) | 5–12 m/min (16–39 ft/min) |
| Brass (CuZn37) | 15–25 m/min (49–82 ft/min) |

The values assume adequate cooling (oil or emulsion) and stable machine conditions. To increase tool life by up to 2 times, the indicated speeds can be reduced by 20–30%.

### Feed Rate (f)

In tapping, the feed rate is equal to the thread pitch, since the tap advances axially once the first guiding threads engage. The unit is millimeters per revolution (mm/rev) or inches per revolution (in/rev). For example, an M10×1.5 thread has a feed rate of 1.5 mm/rev (0.059 in/rev). No external feed control is required; a tap holder with axial float may be necessary.

### Depth of Cut (ap)

The depth of cut corresponds to the thread height, from the drill diameter to the internal thread diameter. The tap usually finishes the profile in a single pass. The effective depth is the difference between the pre-drill diameter and the nominal diameter.

**Drill diameters for cutting taps (ISO metric coarse thread)**

| Thread | Pitch (mm) | Recommended Drill (mm) | Approx. Inches |
|---|---|---|---|
| M3 | 0.5 | 2.5 mm | 0.098 in |
| M4 | 0.7 | 3.3 mm | 0.130 in |
| M5 | 0.8 | 4.2 mm | 0.166 in |
| M6 | 1.0 | 5.0 mm | 0.197 in |
| M8 | 1.25 | 6.8 mm | 0.268 in |
| M10 | 1.5 | 8.5 mm | 0.335 in |
| M12 | 1.75 | 10.2 mm | 0.402 in |

For fine threads and other systems, the drill size is calculated as: D_drill ≈ D_nominal – Pitch.

**Drill diameters for roll form taps** require a hole 3% to 8% larger than the internal thread diameter, since the material is displaced. The manufacturer provides the exact table.

For Whitworth threads (BSW, ISO 7/1, ISO 228), the table below shows drills for 75% thread height:

**Whitworth Threads – Taps and Drill Sizes**

| Tap Size (in) | Threads per Inch (TPI) | Drill for 75% Thread |
|---|---|---|
| 1/8 | 40 | 2.6 mm / 0.102 in (#39) |
| 1/4 | 20 | 5.1 mm / 0.201 in (#9) |
| 3/8 | 16 | 8.0 mm / 0.315 in (5/16) |
| 1/2 | 12 | 10.7 mm / 0.421 in (27/64) |
| 5/8 | 11 | 13.7 mm / 0.539 in (17/32) |
| 3/4 | 10 | 16.6 mm / 0.654 in (21/32) |
| 7/8 | 9 | 19.5 mm / 0.768 in (49/64) |
| 1 | 8 | 22.3 mm / 0.878 in (7/8) |
| 1 1/4 | 7 | 28.3 mm / 1.114 in (1 7/64) |
| 1 1/2 | 6 | 34.0 mm / 1.339 in (1 5/16) |
| 1 3/4 | 5 | 39.6 mm / 1.559 in (1 9/16) |
| 2 | 4 1/2 | 45.4 mm / 1.787 in (1 3/4) |
| 2 1/4 | 4 | 51.1 mm / 2.012 in (2) |
| 2 1/2 | 4 | 57.4 mm / 2.260 in (2 1/4) |
| 2 3/4 | 3 1/2 | 62.9 mm / 2.476 in (2 1/2) |
| 3 | 3 1/2 | 69.2 mm / 2.724 in (2 3/4) |
| 3 1/4 | 3 1/4 | 75.0 mm / 2.953 in (3) |
| 3 1/2 | 3 1/4 | 81.4 mm / 3.205 in (3 1/4) |
| 3 3/4 | 3 | 87.1 mm / 3.429 in (3 3/8) |
| 4 | 3 | 93.5 mm / 3.681 in (3 5/8) |

## Typical Tolerances

The tolerance class for metric internal threads is usually 6H (medium quality, general use), which allows a zero deviation on the pitch diameter (H position) and tolerances between 0.1 mm and 0.3 mm depending on the pitch (e.g., 0.112 mm for M6×1.0; 0.180 mm for M10×1.5). For high-demand applications, 4H is used, and for loose threads, 7H. For Unified threads (UN), fit classes range from 2B (medium fit) to 3B (fine fit). Correct tapping achieves pitch diameter accuracy of approximately ±0.02 mm (±0.0008 in) with high-quality taps in rigid CNC machines.

The position and perpendicularity of the tapped hole are controlled with positional tolerances in the plane (Ø 0.1–0.5 mm / 0.004–0.020 in) and an axial inclination limit of 0.5° to 1° relative to the theoretical axis.

## Applicable Materials

Cutting taps (HSS, carbide) can process almost any metallic material, plastics, and some composites. Roll form taps are restricted to materials with a minimum elongation of 5–8% (A5) and hardness below 35 HRC. The following table summarizes applicability.

| Material | Cutting Tap (Chip Removal) | Roll Form Tap (Former) |
|---|---|---|
| Carbon steels (≤0.3% C) | Excellent | Excellent |
| Low alloy steels (up to 35 HRC) | Very good | Good (low speed) |
| Austenitic stainless steel (304/316) | Good (with cooling) | Excellent (longer tool life) |
| Gray cast iron | Excellent (short chip) | Not recommended (<5% elong.) |
| Wrought aluminum (6000 series) | Good | Excellent |
| Cast aluminum (>6% Si) | Fair (abrasive wear) | Not recommended |
| Brass (CuZn37) | Excellent | Good (risk of galling) |
| Titanium | Possible (special taps, low vc) | Not viable (lack of ductility) |
| Plastics (Nylon, POM) | Good | Not applicable |

## Advantages

**Cutting Tapping**
- Ability to penetrate hard and brittle materials.
- Lower initial cost; standardized geometries.
- Allows chip evacuation via helical flutes (spiral point or spiral flute).
- Greater tolerance margin in the pre-drill diameter.

**Form Tapping**
- No chip generation; eliminates chip packing risk and minimizes cleaning cost.
- Material fibers are displaced, producing a thread with higher fatigue strength (up to 20% longer life) and better surface finish.
- Lower tap wear in ductile materials; tool life is 3–10 times longer than a cutting tap.
- Higher thread accuracy and internal diameter more resistant to corrosion.

## Limitations

**Cutting Tapping**
- Generates chips that can damage the thread or workpiece, especially in small blind holes.
- Lower productive speed in sticky materials.
- Inferior surface finish (Ra 3.2–6.3 µm / 126–248 µin) compared to formed threads.

**Form Tapping**
- Requires a pre-drilled hole with higher precision (±0.05 mm / ±0.002 in) and extreme lubrication (EP oil or forming fluids).
- High tapping torque (up to 2 times that of a cutting tap), requiring rigid machines and more robust floating tap holders.
- Not suitable for brittle materials (cast iron, hardened steels >35 HRC, fibrous composites).
- Maximum torque can break the tap if torque control is not available.

## Selection Guide

1. **Material type and ductility**: if the material has >7% elongation and hardness <35 HRC, the roll form tap is usually preferable due to longer tool life and absence of chips. For cast iron, hardened steels, or plastics, use a cutting tap.

2. **Hole type**: for through holes, spiral point taps are recommended (pushing chips forward). For blind holes, use spiral flute taps (pulling chips backward). Roll form taps are universal (blind or through) but need more depth for the forming zone.

3. **Productivity**: roll form taps operate at equal or higher speeds than cutting taps in ductile materials and can last more than 10,000 holes in low-carbon steel. In long series, the reduced tool change time compensates for the higher initial cost.

4. **Lubrication**: cutting taps require soluble cutting oil or mineral oil. Roll form taps require extreme pressure (EP) lubricant or specific oils; absence of lubricant causes immediate galling.

5. **Torque and feed control**: on CNC machines with rigid tapping, the exact pitch feed is programmed. On conventional machines, a tapping head with axial float is mandatory. For roll form taps, torque is 50–100% higher; verify that the machine supports it.

## Frequently Asked Questions

**What is the recommended cutting speed for tapping stainless steel 304 with an HSS tap?**
The typical cutting speed for austenitic stainless steel with a cutting tap is 3–8 m/min (10–26 ft/min). The exact value depends on cooling and system rigidity.

**What feed rate is programmed for an M12×1.75 thread?**
The programmed feed rate must be 1.75 mm/rev (0.069 in/rev), equal to the thread pitch. In rigid tapping, the machine synchronizes feed with spindle rotation.

**How much longer do roll form taps last compared to cutting taps in ductile aluminum?**
In wrought aluminum 6061-T6, roll form taps can achieve a tool life 3 to 10 times longer thanks to the absence of cutting edge wear and work hardening of the thread surface.

**What is the drill diameter for an M10×1.5 roll form tap?**
A starting value is a drill of 8.9 ± 0.05 mm (0.350 ± 0.002 in), leaving a margin of 0.6 mm for material displacement. Strict tolerance is essential to avoid breakage or incomplete thread.

**How much more tapping torque does a roll form tap require compared to a cutting tap in mild steel?**
An increase of 50–100% is estimated, with typical values of 15–30 N·m (11–22 ft·lbf) for an M10×1.5 in low-carbon steel with EP lubrication.

**What additional depth does a roll form tap need in a blind hole?**
It requires a lead-out length of approximately 2.5 times the pitch plus the forming tip. For M10×1.5 (pitch 1.5 mm), this equates to about 5–6 mm (0.20–0.24 in) additional to the useful threaded depth.

## Sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-size-pipe-taps-d_1126.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/roll-form-tapping

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-size-pipe-taps-d_1126.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/roll-form-tapping
