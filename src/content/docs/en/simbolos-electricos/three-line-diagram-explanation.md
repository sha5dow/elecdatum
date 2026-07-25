---
title: "Three-line diagram explanation"
sidebar:
  label: "Three-line diagram explanation"
description: "Technical reference: Three-line diagram explanation"
keywords: ["three line diagram electrical explanation", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "unifilar-diagrams"
subcategory: "three-line-diagram-explanation"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

A three-line diagram represents each of the three phase conductors and the neutral of a 400 V / 230 V three-phase system, explicitly showing the connections between devices.

## What is a three-line diagram?

A three-line diagram is the schematic representation of an electrical circuit in which all the conductor lines are drawn separately: the three phases (L1, L2, L3) and, where applicable, the neutral conductor (N) and the protective conductor (PE). Unlike the single-line diagram, where a single line symbolizes the set of phases, the three-line diagram allows you to see each connection and each branch, which is essential in the detailed design stage and in the wiring of control panels.

## Purpose and application

The three-line diagram is used when it is necessary to accurately identify the path of each conductor in a polyphase system. It is the basis for the manufacture of electrical cabinets, motor connections and verification of control and protection circuits. The detailed information it provides – terminals, conductor numbering, device references – drastically reduces wiring errors and facilitates maintenance tasks. In industrial projects, it is required that all power and control circuits be documented in three-line format.

## Structure of a three-line diagram

In a three-line diagram each phase is drawn as an independent line, generally identified with the colors or labels L1, L2 and L3. The devices (switches, contactors, thermal relays, coils, etc.) are interposed in the lines corresponding to the poles they occupy. The neutral, if it exists, runs parallel to the phases and is connected to the loads that require it. The graphic layout usually reflects the physical order of the components inside the panel, from left to right and from top to bottom, although the scale and dimensions are not related to the real equipment.

## Symbology in three-line diagrams

All symbols used must conform to the requirements of IEC 60617 (equivalent to the former IEC 617) or, in the Americas, to ANSI/NEMA standards. The most common elements in these schematics are:

- Three-pole circuit breaker
- Contactor with auxiliary contacts
- Thermal relay or motor protection circuit breaker
- Squirrel-cage three-phase motor
- Fuses
- Connection terminals with numbering
- Conductor identification (cross-sections, colors)

Each symbol appears as many times as the real device has poles, so that the three interruptions of a three-pole contactor are drawn one on each phase line.

## Differences between single-line and three-line diagrams

| Feature | Single-line diagram | Three-line diagram |
| --- | --- | --- |
| Representation of phases | One single line for the three phases | One line per phase (3 lines for a three-phase system) |
| Neutral and protective conductor | Indicated only if strictly necessary | Always drawn when physically present |
| Level of detail | High level, global view of the installation | Low level, shows each connection and terminal |
| Main application | Load-flow studies, protection coordination | Wiring, assembly, fault location |
| Use of colors | Symbolic (black, by convention) | Each phase can be colored (brown, black, gray) or labeled |
| Additional information | Powers, impedances, relay settings | Cable cross-sections, terminal numbering, commercial references |

## Example of a three-line diagram: direct-on-line motor start

A typical case is the direct start of a squirrel-cage three-phase motor. The three-line diagram will show:
- The three supply phases arriving at a three-pole circuit breaker.
- Then, a three-pole contactor that receives the phases and delivers them to a thermal relay.
- From the thermal relay, the phases go to the motor.
- The neutral (if the control circuit requires it) is derived from one phase and passes through control fuses or a transformer.
- The auxiliary contacts of the contactor, the start/stop pushbuttons, and the coil are drawn in the control part, respecting the connections between terminals.

The following table relates the three-phase apparent power and line current for a voltage of 400 V, typical values used in sizing conductors in a three-line diagram.

| Power (kW) | Power (HP) | Current per phase at 400 V (A) |
| --- | --- | --- |
| 1,0 kW | 1,34 HP | 1,4 A |
| 2,0 kW | 2,68 HP | 2,9 A |
| 3,0 kW | 4,02 HP | 4,3 A |
| 5,0 kW | 6,70 HP | 7,2 A |
| 7,5 kW | 10,1 HP | 10,8 A |
| 10,0 kW | 13,4 HP | 14,4 A |

*Values for balanced resistive load (cos φ = 1). Currents obtained from the table “Single and Three Phase AC – Electric Current vs. Power” for 400 V three-phase.*

## Advantages and limitations

**Advantages:**
- Eliminates any ambiguity about which conductor is connected to which terminal.
- Facilitates detection of wiring errors and preparation of material lists.
- It is indispensable for the construction of electrical panels and the execution of modifications.

**Limitations:**
- It takes up much more space on the drawing than a single-line diagram, making it impractical for representing entire distribution networks.
- For very large systems it becomes complex to read; partial plans or functional schematics are often used.

## Frequently Asked Questions (FAQ)

### What is the difference between a single-line diagram and a three-line diagram?
The single-line diagram shows the three phases on a single line, whereas the three-line diagram draws one line per actual conductor. Therefore, the three-line diagram offers a level of detail that allows knowing the exact path of each cable.

### When should a three-line diagram be used?
Whenever it is necessary to build, modify or repair an electrical panel. Project documentation standards usually require three-line diagrams for power and control circuits of machines and industrial installations.

### What standards govern the representation of three-line diagrams?
Internationally, IEC 60617 applies. In the Americas, ANSI/NEMA symbols are also used. Terminal numbering and conductor identification usually follow IEC 60445 or NFPA 79.

### Is the neutral represented in a three-line diagram?
Yes, if the system has a distributed neutral. It is drawn as an additional line, generally blue in color, and is connected to single-phase loads or to the control circuit input.

### How is the line current calculated from the three-phase power?
For a balanced three-phase load with line voltage V and power factor cos φ, the current per phase is obtained by:

> **I = P / (√3 × V × cos φ)**

Where:

| Variable | Meaning |
| --- | --- |
| I | Line current (A) |
| P | Three-phase active power (W) |
| V | Line voltage (V) |
| cos φ | Power factor (dimensionless) |

In purely resistive loads, cos φ = 1. For a power of 10 kW at 400 V, the current per phase is 14,4 A.

### Do three-line diagrams include the protective conductor (PE)?
Yes, the grounding conductor is represented as an independent green‑yellow line and is connected to all metallic chassis and earth terminals of the system. Its inclusion is mandatory in safety schematics.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ampere-phase-d_449.html
