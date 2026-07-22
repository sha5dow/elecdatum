---
title: "EDM parameters and tolerances"
sidebar:
  label: "EDM parameters and tolerances"
description: "Technical reference: EDM parameters and tolerances"
keywords: ["EDM electrical discharge machining tolerances Ra", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "edm"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## General information
Electrical discharge machining (EDM) is a non-conventional machining process where material removal occurs through controlled electrical discharges between an electrode (tool) and the workpiece, both submerged in a dielectric fluid. The process allows machining complex geometries in conductive materials regardless of their hardness, since there is no mechanical contact between tool and workpiece.

## Process parameters
The operating parameters determine the removal rate, dimensional accuracy, and surface finish. Below are the typical ranges for sinker EDM and wire EDM.

| Parameter | Typical range | Unit |
|---|---|---|
| Discharge voltage | 40 – 300 | V |
| Peak current | 0,1 – 500 | A |
| Pulse duration | 1 – 2000 | µs |
| Pulse frequency | 0,5 – 500 | kHz |
| Interelectrode gap (GAP) | 0,01 – 0,5 mm / 0.0004 – 0.02 in | mm / in |
| Wire diameter (wire EDM) | 0,02 – 0,33 mm / 0.0008 – 0.013 in | mm / in |
| Dielectric pressure | 0,1 – 1,5 MPa / 14.5 – 217.5 psi | MPa / psi |
| Dielectric temperature | 20 – 40 °C / 68 – 104 °F | °C / °F |

## Typical tolerances
EDM offers exceptional dimensional accuracy compared to conventional chip removal processes, provided that appropriate finishing parameters and high-quality electrodes are used.

| Machining regime | Dimensional tolerance (μm / in) | Equivalent IT grade |
|---|---|---|
| Roughing | ±10 – 50 µm / ±0.0004 – 0.002 in | IT8 – IT10 |
| Semi–finishing | ±5 – 10 µm / ±0.0002 – 0.0004 in | IT6 – IT7 |
| Fine finishing | ±1 – 5 µm / ±0.00004 – 0.0002 in | IT5 – IT6 |
| Micro-EDM or multiple passes | ±0,5 – 2 µm / ±0.00002 – 0.00008 in | IT4 – IT5 |

## Applicable materials
EDM requires that the workpiece material be electrically conductive. Hardness, toughness, or brittleness do not represent limitations for the process.

| Material | Machinability by EDM | Observations |
|---|---|---|
| Carbon and alloy steels | Excellent | Includes hardened tool steels |
| Stainless steels | Excellent | Requires corrosion control by dielectric |
| Titanium and nickel-based superalloys | Very good | Moderate removal rate, risk of microcracks |
| Tungsten carbide (WC-Co) | Good | Requires graphite or copper-tungsten electrodes |
| Aluminum and its alloys | Good | Avoid chip accumulation in the gap |
| Copper and brass | Good | Often used as electrode, not as workpiece |
| Conductive ceramics (e.g., SiC, TiB₂) | Limited | Only some compositions with sufficient conductivity (>0.01 S/cm) |
| Non-conductive materials (insulating ceramics, plastics) | Not applicable | Only through conductive layer assisted EDM process |

## Surface finish
Surface finish in EDM depends on the discharge energy, the electrode material, and the number of finishing passes. Roughness is usually expressed as Ra (arithmetic mean roughness).

| Machining stage | Roughness Ra (µm / μin) | Observations |
|---|---|---|
| Roughing (high energy) | 3,2 – 12,5 µm / 126 – 492 μin | High removal rate, thick white layer |
| Semi–finishing | 0,8 – 3,2 µm / 31 – 126 μin | Reduction of recast layer |
| Fine finishing (graphite/copper electrode) | 0,2 – 0,8 µm / 8 – 31 μin | Multiple passes with decreasing energy |
| Mirror finish (wire EDM or sinker with micro-pulses) | 0,04 – 0,2 µm / 1.6 – 8 μin | Requires strict control of dielectric and electrode |

## Advantages and limitations
The choice of EDM must consider the balance between unique technical capabilities and production constraints.

| Advantages | Limitations |
|---|---|
| Machines any conductive material, regardless of hardness | Only applicable to materials with electrical conductivity (σ > 0.1 S/cm) |
| Allows complex geometries with minimum internal corner radii (0.05 – 0.1 mm / 0.002 – 0.004 in) | Low removal rate compared to conventional milling (typically 1 – 500 mm³/min) |
| Process without cutting forces: ideal for thin or fragile parts | Generates a white layer (re-solidified) and heat-affected zone (HAZ) of 2 – 50 µm |
| Repeatable dimensional tolerances of ±1 µm / ±0.00004 in | Risk of microcracks in hard materials if pulse energy is not controlled |
| Surface finishes up to Ra 0.04 µm / 1.6 μin without subsequent processes | Requires precision electrodes and electrode wear (1:1 to 100:1 depending on material) |
| High automation, unattended operation | High hourly cost (machinery, dielectric, electrodes) |

## Selection guide
Use the following criteria to decide whether EDM is the appropriate technology for your application:

- The **material hardness** exceeds 45 HRC and conventional processes show excessive tool wear → Sinker EDM.
- Complex **blind cavities** (injection molds, forging dies) with vertical or negative walls are required → Sinker EDM with graphite electrode.
- **Contour cutting in thick plate** (up to 300 mm / 11.8 in) with tight tolerances is needed → Wire EDM.
- The workpiece has **thin sections** (<0.5 mm / 0.02 in) that would not withstand cutting forces → EDM (both variants).
- A **surface finish Ra < 0.2 µm / 8 μin** is sought in materials difficult to polish mechanically → Finishing EDM with multiple passes.
- **Electrical conductivity** is < 0.01 S/cm → alternative processes (grinding, laser, ultrasonic).
- The **removal rate** must exceed 1000 mm³/min in steel → high-speed milling or turning, not EDM.

## Frequently asked questions

### What dimensional tolerance can be achieved in wire EDM with finishing passes?
A tolerance of ±0.001 mm / ±0.00004 in can be achieved under optimal shop conditions using at least three finishing passes (skim cuts) and thermal control of the dielectric.

### What is the maximum thickness that a wire EDM machine can cut?
Standard industrial machines cut up to 300 mm / 11.8 in thickness in steel, although special high-capacity models can exceed 500 mm / 19.7 in with reduced feed rates.

### What Ra roughness is typical in a fine finish sinker EDM with graphite electrode?
A typical fine finish achieves a Ra roughness of 0.4 µm / 16 μin, and with controlled micro-pulses it can drop to 0.1 µm / 4 μin.

### How much white layer (recast) does a roughing EDM process generate?
The white layer in roughing can reach a thickness of 30 to 50 µm / 0.0012 to 0.002 in, which must be removed by finishing passes or subsequent polishing to avoid fatigue failure.

### What material removal rate (MRR) can be expected when machining tool steel by EDM?
In roughing regime with graphite electrode and peak current of 50 A, a removal rate of up to 500 mm³/min / 0.03 in³/min is obtained; in fine finishing the MRR drops to 1–5 mm³/min.

### What is the minimum taper that can be obtained in a wire EDM cut?
The natural taper without correction by axis control is typically 0.01 – 0.02 mm per 10 mm of height / 0.0004 – 0.0008 in per 0.4 in of thickness, although with CNC compensation it is completely neutralized.

## Consulted sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/wire-edm

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/wire-edm
