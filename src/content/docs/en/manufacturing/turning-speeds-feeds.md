---
title: "Turning speeds and feeds by material"
sidebar:
  label: "Turning speeds and feeds by material"
description: "Technical reference: Turning speeds and feeds by material"
keywords: ["turning speeds feeds by material CNC lathe sfm", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "turning"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Process Description
Turning is a machining process by chip removal where a single-point cutting tool, stationary or under controlled motion, removes material from the surface of a rotating workpiece. The correct selection of cutting speed (Vc, in m/min or sfpm) and feed rate (f, in mm/rev or ipr) determines productivity, tool life, and workpiece surface quality. Cutting speed refers to the relative tangential velocity between the cutting edge and the machined surface, while feed rate indicates the distance the tool advances per spindle revolution. Together with depth of cut (ap), these parameters form the fundamental operating triplet of turning.

## Operating Parameters
Cutting speed (Vc) in turning is calculated from the workpiece diameter and spindle angular velocity using the equation Vc = (π × D × N) / 1000, where D is the diameter in mm and N is revolutions per minute (rpm). In imperial units, the equivalent formula is Vc (sfpm) = (π × D × N) / 12, with D in inches. Typical Vc values range from 10 m/min (33 sfpm) for difficult materials like titanium to 300 m/min (984 sfpm) for aluminum with carbide tools.  
Feed rate (f) is measured in millimeters per revolution (mm/rev) or inches per revolution (ipr) and, combined with depth of cut (ap), defines the material removal rate (MRR = Vc × f × ap). In roughing operations, feed rates of 0.2 to 0.6 mm/rev (0.008–0.024 ipr) are used, while in finishing they are reduced to 0.05–0.20 mm/rev (0.002–0.008 ipr).  
Depth of cut (ap) represents the radial penetration of the tool into the workpiece and typically varies between 0.3 mm / 0.012 in for fine finishing and 10 mm / 0.394 in for heavy roughing.  
The required spindle power (P) is related to MRR and the specific cutting pressure (kc) of the material: P (kW) = MRR (cm³/min) × kc / (60 × 10³). For low-alloy steels, kc is around 2500 N/mm².

## Speeds and Feeds by Material

| Material | Cutting Speed HSS (m/min / sfpm) | Cutting Speed Carbide (m/min / sfpm) | Roughing Feed (mm/rev / ipr) | Finishing Feed (mm/rev / ipr) | Typical Depth of Cut (mm / in) |
| --- | --- | --- | --- | --- | --- |
| Carbon Steel (C ≤ 0.3%) | 21–27 / 70–90 | 90–120 / 300–400 | 0.20–0.50 / 0.008–0.020 | 0.05–0.15 / 0.002–0.006 | 0.5–6 / 0.02–0.24 |
| Alloy Steel (4140, 4340) | 15–24 / 50–80 | 60–105 / 200–350 | 0.15–0.50 / 0.006–0.020 | 0.05–0.15 / 0.002–0.006 | 0.5–4 / 0.02–0.16 |
| Stainless Steel (304, 316) | 15–24 / 50–80 | 60–90 / 200–300 | 0.15–0.40 / 0.006–0.016 | 0.05–0.15 / 0.002–0.006 | 0.5–3 / 0.02–0.12 |
| Gray Cast Iron | 24–36 / 80–120 | 105–150 / 350–500 | 0.20–0.60 / 0.008–0.024 | 0.08–0.20 / 0.003–0.008 | 0.5–6 / 0.02–0.24 |
| Aluminum (wrought alloys) | 90–150 / 300–500 | 150–300 / 500–1000 | 0.20–0.60 / 0.008–0.024 | 0.05–0.20 / 0.002–0.008 | 0.5–10 / 0.02–0.40 |
| Brass and Soft Bronze | 60–105 / 200–350 | 120–180 / 400–600 | 0.20–0.50 / 0.008–0.020 | 0.05–0.15 / 0.002–0.006 | 0.5–6 / 0.02–0.24 |
| Titanium | 10–20 / 30–65 | 30–60 / 100–200 | 0.10–0.30 / 0.004–0.012 | 0.05–0.10 / 0.002–0.004 | 0.3–2 / 0.01–0.08 |
| Plastics (thermosets) | 60–150 / 200–500 | 90–210 / 300–700 | 0.10–0.40 / 0.004–0.016 | 0.05–0.15 / 0.002–0.006 | 0.5–3 / 0.02–0.12 |

The cutting speed values correspond to conditions with adequate coolant and proper machine rigidity. For HSS tools, take the lower values of the range; for carbide, the upper values can be reached. The indicated depths of cut are for roughing (high values) and semi-finishing (low values); for finishing, ap ≤ 0.5 mm / 0.02 in is recommended.

## Typical Tolerances
Turning can achieve dimensional tolerances IT7 to IT9 according to ISO 286, which corresponds to ±0.02 mm / ±0.0008 in for diameters up to 30 mm and ±0.05 mm / ±0.002 in for diameters up to 120 mm. Surface roughness is usually between Ra 0.8 µm / 32 µin and Ra 6.3 µm / 250 µin. With wiper tools and optimized parameters, Ra 0.4 µm / 16 µin is achievable repeatably. Cylindricity and concentricity tolerance depends on tailstock alignment and setup rigidity, typically in the range of 0.01–0.03 mm / 0.0004–0.0012 in.

## Applicable Materials
Virtually all metals and some non-metallic alloys can be machined by turning. Carbon and low-alloy steels are the most common, with reference machinability. Austenitic stainless steels require reduced speeds and coated carbide tools to avoid edge dulling. Gray cast irons produce short chips and are favorable for finishing, with moderate speeds. Wrought and cast aluminum alloys, as well as brasses, exhibit high machinability and allow high speeds and feeds. Titanium and heat-resistant superalloys (Inconel, Hastelloy) demand carbide or ceramic tools, low speeds (10–60 m/min / 33–200 sfpm), and abundant cooling. Non-metallic materials such as engineering plastics (nylon, POM, PTFE) and composites can be turned with very sharp tools and speeds comparable to those for aluminum.

## Advantages and Limitations
**Advantages of turning with proper parameters:**
- High productivity by combining high speeds and aggressive feeds in roughing.
- Excellent dimensional and roughness control (IT7 tolerances, Ra 0.8 µm / 32 µin common).
- Wide range of machinable materials, from plastics to hardened alloys.
- Ease of automation via CNC with constant cutting speed programs (G96).
- Ability to generate various surface finishes by only modifying feed rate and nose radius.

**Limitations:**
- Geometric restrictions: parts with L/D > 5 require steady rests and their precision degrades.
- Accelerated tool wear when cutting speed exceeds the maximum temperature of the insert material (approximately 600 °C / 1112 °F for HSS, 1200 °C / 2192 °F for carbide).
- Cutting speed decreases toward the center in facing, requiring the use of CSS (G96) or reducing rpm in operations with variable diameter.
- Built-up edge (BUE) formation in aluminum and stainless steel can deteriorate finish if proper speeds and coolants are not used.
- High cutting forces with large depths of cut require powerful spindles and rigid setups.

## Selection Guide
1. **Identify the workpiece material** and consult the speeds and feeds table to determine the recommended range of Vc and f.  
2. **Select the tool material**: for general production use coated carbide (PVD/CVD); for short runs or soft materials, HSS is economical.  
3. **Choose the operation type**: roughing (ap 1–10 mm / 0.04–0.4 in, f 0.2–0.6 mm/rev / 0.008–0.024 ipr) or finishing (ap 0.1–0.5 mm / 0.004–0.02 in, f 0.05–0.15 mm/rev / 0.002–0.006 ipr).  
4. **Calculate spindle speed (N rpm)** from Vc and workpiece diameter: N = (1000 × Vc) / (π × D) with Vc in m/min and D in mm. In imperial units: N = (12 × Vc) / (π × D) with Vc in sfpm and D in inches.  
5. **Adjust parameters for cooling**: when turning steel with carbide and coolant, Vc can be increased 10–20%; in aluminum, without coolant reduce Vc by 15%.  
6. **Verify chip load and power**: the chip cross-section (ap × f) must match the insert geometry; if calculated power exceeds 80% of spindle rated power, reduce ap or f.  
7. **Perform test cuts** and adjust until desired finish is achieved without vibration or overheating.

## Frequently Asked Questions
**What is the recommended cutting speed for aluminum with a carbide tool?**  
The recommended cutting speed is 150–300 m/min (500–1000 sfpm) for wrought aluminum with solid carbide tools, and up to 500 m/min (1640 sfpm) can be achieved on rigid machines with polished inserts.

**What feed rate should be used to obtain a fine finish on carbon steel?**  
The typical feed for finishing is 0.05–0.15 mm/rev (0.002–0.006 ipr), with an insert nose radius of 0.4–0.8 mm providing a theoretical roughness Ra 0.8–3.2 µm / 32–126 µin.

**What is the maximum depth of cut in roughing steel?**  
The maximum depth of cut can reach 6 mm / 0.24 in in low-alloy steel with machines over 10 kW and carbide tools, though it is usually limited to 4 mm / 0.16 in to preserve insert life.

**How is cutting speed converted to rpm?**  
For a workpiece diameter of 50 mm / 2 in and cutting speed of 100 m/min / 328 sfpm, the resulting rpm is approximately 636 rpm (using N = (1000 × 100) / (π × 50) ≈ 637; in imperial N = (12 × 328) / (π × 2) ≈ 626 rpm).

**What maximum temperature does the tool reach when cutting stainless steel?**  
The temperature at the tool-chip interface can exceed 1000 °C / 1832 °F in stainless steel with speeds of 80–100 m/min / 260–330 sfpm, so AlTiN coatings or high-pressure cooling are used.

**What surface roughness is feasible in precision turning?**  
Precision turning can regularly achieve Ra 0.4 µm / 16 µin with wiper inserts and feed rates of 0.08 mm/rev / 0.003 ipr, and even Ra 0.2 µm / 8 µin on ultra-precision machines.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-bit-speed-hardwood-softwood-d_1451.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/surface-finish-when-turning
