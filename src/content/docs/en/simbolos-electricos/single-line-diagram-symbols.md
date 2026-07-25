---
title: "Single-line diagram symbols"
sidebar:
  label: "Single-line diagram symbols"
description: "Technical reference: Single-line diagram symbols"
keywords: ["single line diagram symbols electrical", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "unifilar-diagrams"
subcategory: "single-line-diagram-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Single-line diagram symbols represent the equipment and connections of an electrical power system using a single line, regardless of the actual number of conductors. A single-line diagram can model networks from low voltage up to 765 kV / 765 000 V, simplifying load flow, short-circuit, and protection coordination studies.

## Table of Standardized Symbols

The following table lists the 14 most commonly used symbols in single-line diagrams according to IEC 60617 and IEEE 315 standards.

| Element | Single-Line Diagram Symbol (Graphic Description) | Main Function |
|---|---|---|
| Synchronous generator | Circle with letter "G" inside | Electric energy source |
| Two-winding transformer | Two overlapping arcs of a circle, connection lines above and below | Voltage level change |
| Three-winding transformer | Two overlapping arcs with a third lateral connection in the form of a small arc | Supply of auxiliary services or double secondary |
| Circuit breaker | Square with a small diagonal line and an "x" inside, or square with a semicircle | Current interruption under load or fault |
| Disconnect switch | Straight line interrupted by a hinged oblique stroke | Visible isolation without interruption capability |
| Fuse | Rectangle crossed lengthwise by a line | Overcurrent protection by melting |
| Busbar | Thick horizontal or vertical line | Connection node for multiple circuits |
| Static load | Triangle or rectangle with letter "M" if it is a motor | Consumption of active and reactive power |
| Electric motor | Circle with letter "M" inside | Rotating load that converts electrical energy into mechanical energy |
| Current transformer | Circle with letter "T" or two concentric circles with line connection | Current reduction for measurement and protection |
| Voltage transformer | Circle with letters "TP" or rectangle with two terminals on the line | Voltage reduction for measurement and protection |
| Capacitor bank | Two vertical parallel lines connected to the bus | Reactive power compensation |
| Reactance (inductor) | Horizontal zigzag broken line on the main line | Short-circuit current limitation or series compensation |
| Underground cable | Continuous line with two small transverse semicircles | Representation of an insulated cable line |

## Applicable Standards

The IEC 60617 and ANSI Y32.9 standards define more than 900 standardized graphic symbols, of which about 100 are specific to single-line power systems. The most common equivalence used in international projects is as follows:

| Standard | Scope | Relationship with Single-Line Diagrams |
|---|---|---|
| IEC 60617 DB (database) | Graphic symbols for electrical and electronic diagrams | Part 6 (generation, transformation and distribution of energy) and part 7 (switchgear and protective devices) |
| IEEE Std 315 / ANSI Y32.9 | Graphic symbols for electrical and electronic diagrams (includes single-line diagrams) | Section 3.9 (power symbols) and section 3.10 (transmission and distribution symbols) |
| NTC 2050 (Colombia) / NEC (USA) | Installation codes referencing standardized symbols | Accepts IEEE 315 for installation single-line diagrams |

## Representation Conventions

The recommended line thickness for single-line symbols is 0,35 mm / 0.014 in minimum, with a separation between buses of at least 10 mm / 0.39 in. The main graphic conventions are:

- A single line represents three phases; for single-phase or direct current systems it is indicated with labels (1F, DC).
- Power flow is organized from left to right and top to bottom, reflecting the physical layout of the panel or substation.
- Nodes (buses) are numbered with alphanumeric labels at least 2,5 mm / 0.098 in high for easy reading on A3 / 297 × 420 mm formats.
- Power transformers carry a connection group designation (e.g., Dyn11) next to the symbol.
- Protection devices are accompanied by the ANSI reference (50, 51, 67, etc.) and the trip setting in amperes.

## Typical Applications

More than 90% of power system load flow and short-circuit studies are analyzed on single-line diagrams. The main applications include:

- **Power flow studies**: modeling of buses, generators, transformers, and loads to obtain voltages and angles at each node.
- **Short-circuit analysis**: symbols of circuit breakers, disconnect switches, and reactors allow calculation of fault currents and selection of appropriate switchgear.
- **Protection coordination**: relays, CTs, and VTs are represented on the single-line diagram to adjust cascaded trip curves.
- **Substation design**: arrangement of buses, bays, and switching equipment before developing the physical layout.
- **Electrical project documentation**: construction drawings, operation manuals, and control diagrams use single-line diagrams as the main reference.
- **SCADA systems**: simplified symbols serve as the basis for real-time monitoring graphical interfaces.

## Design Notes

Each symbol must include a label with the rated voltage in kV (e.g., 13,8 kV / 13 800 V) and the rated power in MVA when applicable. To ensure clarity and maintainability of the single-line diagram, it is recommended to:

- Keep the same family of symbols (IEC or IEEE) throughout the entire project, avoiding mixtures that could lead to errors.
- Place the rated values (I, U, S) next to the symbol with a text size of at least 2 mm / 0.079 in high.
- Reserve the circuit breaker symbol for equipment capable of interrupting fault currents; use the disconnect switch only for visible isolation.
- When several voltage levels are used, differentiate the buses with colors or voltage labels in kV, e.g., "400 kV – red".
- In systems with distributed generation, clearly represent the point of common coupling (PCC) and bidirectional flows.
- Include a revision note with date and author, since single-line diagrams are updated throughout the lifetime of the installation (sometimes more than 30 years).

## Frequently Asked Questions (FAQ)

### What is the difference between a circuit breaker and a disconnect switch on the single-line diagram?
The circuit breaker, generally represented by a square and a semicircle or by an "x", indicates a device capable of interrupting load and fault currents. The disconnect switch, with an oblique stroke, only provides visible isolation and must not be operated under load.

### Why is a single line used if the network is three-phase?
Because under balanced conditions the behavior of the three phases is identical; single-phase analysis reduces graphic complexity without loss of relevant information. Exceptions are explicitly noted (single-phase loads, asymmetric faults).

### Which standard should I follow for an international project?
It is recommended to adopt IEC 60617 for its wide global acceptance, although in projects with North American origin, IEEE Std 315 may be required. The critical point is to maintain consistency: never mix symbols from different standards in the same diagram.

### How are instrument transformers represented on the single-line diagram?
The current transformer is drawn as a circle that envelops the line, sometimes with the letters CT, and the voltage transformer as a rectangle connected between phase and ground or between phases. Both should be located next to the circuit breaker that feeds the relays.

### Can I include protections and settings directly on the single-line diagram?
Yes, it is a good design practice. The ANSI numbers (50, 51, 87, etc.), transformation ratios (e.g., 400/1 A), and trip settings are placed near the circuit breaker or relay symbol, maintaining a legible font of at least 2 mm / 0.079 in high.

### What additional information can be added to improve the usefulness of the single-line diagram?
Voltage levels in kV at each bus, rated powers of generators and transformers, underground cable lengths (in km / miles), short-circuit impedances in p.u., and references to other drawings (control diagrams, physical layout). All this is integrated while keeping the diagram clean and oriented to the main power flow.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electric-circuit-diagram-d_1829.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-international-symbol/
