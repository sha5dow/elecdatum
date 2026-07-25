---
title: "Transformer connections delta wye"
sidebar:
  label: "Transformer connections delta wye"
description: "Technical reference: Transformer connections delta wye"
keywords: ["transformer connections delta wye Dyn Yyn", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-connections"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The delta-wye connection (Δ‑Y) is the predominant configuration in three-phase distribution transformers worldwide, characterized by a primary winding connected in delta and a secondary in wye, which allows a typical line voltage of **400 V / 400 V** on the secondary from **11 kV / 11 kV** on the primary. Its main advantage is the ability to simultaneously supply three-phase and single-phase loads thanks to the accessible neutral on the wye side, in addition to blocking third-order harmonic currents in the primary.

## Delta-wye configuration (Δ-Y)
The delta-wye connection is constructed by closing the three primary windings in a triangle (delta) and joining one end of each secondary winding at a common point that constitutes the neutral (wye). The neutral terminal is grounded and run as the fourth distribution wire. The most common IEC standardized designation is **Dyn11**: "D" indicates delta primary, "y" wye secondary, "n" accessible neutral, and "11" the hour index representing a phase shift of 30° between primary and secondary line voltages. A variant without an accessible neutral is designated **Dy11**.

## Angular phase shift
The angular phase shift introduced by the delta-wye connection has a fundamental value of **30° / 30°** (hour index 11), although depending on the marking and orientation of the windings, phase shifts of **150° / 150°**, **210° / 210°** or **330° / 330°** may appear. This phase rotation prevents direct paralleling with transformers that do not have the same phase shift, such as wye-wye or delta-delta configurations, unless additional phase shifters are used.

| Connection | Hour index | Primary line voltage | Secondary line voltage | Angular phase shift |
|------------|------------|----------------------|------------------------|---------------------|
| Dyn11 | 11 | 11 kV / 11 kV | 400 V / 400 V | 30° / 30° |
| Dyn5 | 5 | 13.8 kV / 13.8 kV | 480 V / 480 V | 150° / 150° |
| Dyn1 | 1 | 33 kV / 33 kV | 1000 V / 1000 V | 330° / 330° |
| Dyn7 | 7 | 6.6 kV / 6.6 kV | 380 V / 380 V | 210° / 210° |

## Transformation ratio
The relationship between the line-to-line voltages of the primary (Δ) and secondary (Y) depends on the turns ratio per phase and the connection factor. For an ideal transformer the following holds:

> **V<sub>LLp</sub> / V<sub>LLs</sub> = a / √3**

where a = N<sub>1</sub>/N<sub>2</sub> is the turns ratio between primary and secondary. The division by √3 appears because on the wye side the phase voltage is the line voltage divided by √3, while in delta they coincide. For example, with a turns ratio a = 47,6, a primary voltage of 11 kV / 11 kV produces on the secondary 400 V / 400 V line and 230 V / 230 V phase.

| Variable | Symbol | Unit |
|----------|--------|------|
| Primary line voltage | V<sub>LLp</sub> | V / V |
| Secondary line voltage | V<sub>LLs</sub> | V / V |
| Turns ratio per phase | a = N<sub>1</sub>/N<sub>2</sub> | dimensionless |
| Connection factor | √3 ≈ 1.732 | dimensionless |
| Secondary phase‑neutral voltage | V<sub>LN</sub> = V<sub>LLs</sub> / √3 | V / V |

## Advantages
- Availability of accessible neutral for single-phase loads and grounding.
- Circulation of third-order harmonic currents within the primary delta, preventing their propagation to the supply network.
- Flexibility to simultaneously supply three-phase and single-phase loads in the same system.
- Better utilization of insulation on the wye side, since the phase voltage is lower than the line voltage.
- Reduction of voltage unbalance on the secondary thanks to the solidly grounded neutral.

## Limitations
- Fixed phase shift of **30° / 30°** (or multiples) that prevents direct coupling with transformers of other connection groups without adaptation.
- Requires specific protection against neutral overloads when large unbalanced currents flow.
- Paralleling with other transformers is only possible if they share identical hour index, transformation ratio, and short-circuit voltage.
- On the wye side, the phase-to-ground voltage may be higher than in isolated delta-delta configurations, which may require a higher insulation level.
- Voltage dips and inrush currents may be higher due to neutral inductance and core saturation.

## Typical applications
- Distribution transformers in medium-to-low voltage networks (e.g., 11 kV / 11 kV to **400/230 V / 400/230 V** in IEC systems; **13.8 kV / 13.8 kV** to **480/277 V / 480/277 V** in ANSI systems).
- Power supply for commercial buildings, industries, and high-density residential areas that combine three-phase motors with lighting and single-phase equipment.
- Substations in wind farms and photovoltaic plants where a solid neutral-to-ground is required to connect inverters and power transformers.
- Transformation centers on oil platforms and mining, where neutral availability is critical for installation safety.
- Secondary distribution systems in underground urban networks, especially in Europe and North America.

## Comparison with other connections
| Connection | Accessible neutral | 3rd harmonic suppression | Typical phase shift | Main application |
|------------|-------------------|--------------------------|---------------------|------------------|
| Delta‑Delta (Δ‑Δ) | No | No (circulates in Δ) | 0° / 0° | Industrial motors, long-distance transmission |
| Wye‑Wye (Y‑Y) | Yes | No (requires tertiary) | 0° / 0° or 180° / 180° | Large power transformers with δ tertiary |
| Delta‑Wye (Δ‑Y) | Yes | Yes (circulates in Δ primary) | 30° / 30° | Low-voltage distribution with mixed loads |
| Wye‑Delta (Y‑Δ) | No (primary Y with optional neutral) | Yes (circulates in Δ secondary) | 30° / 30° | Voltage step-up in generators |

## Frequently Asked Questions (FAQ)
### What secondary voltage is obtained from a delta-wye transformer with turns ratio a = 47,6 and supply at 11 kV / 11 kV?
   Applying the formula V<sub>LLs</sub> = V<sub>LLp</sub> × √3 / a = 11 kV × 1,732 / 47,6 gives **400 V / 400 V** line and **230 V / 230 V** phase.

### Why is the angular phase shift in a delta-wye connection always 30° or multiples?
   The difference of **30° / 30°** is due to the product of the phase shifts introduced by the windings and the topology itself; depending on the winding arrangement, **150° / 150°**, **210° / 210°** or **330° / 330°** may appear, but all are submultiples of 180°.

### How are third-order harmonics suppressed in a delta-wye connection?
   The third harmonic currents, all in phase, find a closed path within the primary delta, circulating exclusively through the delta winding, which eliminates their propagation to the supply network and avoids distortions in the secondary voltage waveform.

### Can two delta-wye transformers with different hour indices be connected in parallel?
   No, unless phase-shifting transformers are used or the connection is made with a corrected phase shift; the difference of **30° / 30°** or more causes internal circulating currents that can damage the equipment.

### What happens if the neutral is lost on the wye secondary of a delta-wye transformer?
   When the neutral disappears, single-phase loads lose a stable reference, and if the system is unbalanced, the phase voltages can reach dangerous values that exceed the design **480 V / 480 V** in a **277 V / 277 V** system.

### What is the main advantage of a delta-wye connection in industrial distribution systems?
   It allows supplying three-phase motors at **480 V / 480 V** and simultaneously offering lighting circuits and outlets at **277 V / 277 V** with the same transformer, optimizing investment and substation space.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-distribution-systems-usa-europe-d_2214.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-connections/
