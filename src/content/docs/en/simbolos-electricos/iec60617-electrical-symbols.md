---
title: "IEC 60617 electrical symbols"
sidebar:
  label: "IEC 60617 electrical symbols"
description: "Technical reference: IEC 60617 electrical symbols"
keywords: ["IEC 60617 electrical symbols reference", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "iec-symbols"
subcategory: "iec60617-electrical-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Electrical symbols are standardized graphical representations that identify components, devices, and functions in circuit schematics and diagrams. The international standard **IEC 60617** is the main reference for harmonizing these symbols globally, facilitating the reading, design, and maintenance of electrotechnical systems in all industrial sectors. Currently in force since its 2025 edition, it progressively replaces old national standards such as DIN 40700, BS 3939, or AS 1102 and is adopted as a reference framework by most standardization bodies.

## Basic symbols according to IEC 60617

IEC 60617 defines a comprehensive set of symbols for passive components, active components, power supplies, conductors, connectors, and logic functions. The following table lists some of the fundamental symbols used in electrical and electronic diagrams according to this international standard.

| Component | Symbol Name | Representation according to IEC 60617 |
|---|---|---|
| Fixed resistor | Resistor | Rectangle with connection lines at the ends |
| Variable resistor | Potentiometer / Rheostat | Rectangle crossed by a diagonal arrow |
| Non-polarized capacitor | Capacitor | Two parallel plates (vertical lines) |
| Polarized capacitor | Electrolytic capacitor | Two parallel plates, one with a + sign |
| Air-core inductor | Coil | Series of convex arcs or semicircles |
| Iron-core transformer | Transformer | Two coupled coils on vertical lines |
| Semiconductor diode | Junction diode | Triangle pointing to a vertical bar |
| Light-emitting diode | LED | Diode with two diagonal outgoing arrows |
| Bipolar NPN transistor | BJT NPN | Circle with three terminals; emitter with outgoing arrow |
| Bipolar PNP transistor | BJT PNP | Circle with three terminals; emitter with incoming arrow |
| Single-pole switch | Switch | Inclined line connecting two open points |
| Cell or battery | Electrochemical cell | Short thick line next to a long thin line |
| General earth | Ground (chassis) | Horizontal line with three decreasing vertical strokes |
| Protective earth | Earth | Horizontal line with three inclined strokes in an inverted triangle |
| Fuse | Fuse | Rectangle with a wavy or zigzag central line |
| Electric motor | Motor | Circle with the letter M inside |
| Incandescent lamp | Lamp | Circle with a cross in the center |
| Ammeter | Ammeter | Circle with the letter A inside |
| Voltmeter | Voltmeter | Circle with the letter V inside |
| Conductor connection | Junction | Filled circle at the intersection point |
| No connection (crossing) | Crossing without connection | Semicircular arc over one of the crossing conductors |

## Main features of the IEC 60617 standard

IEC 60617 provides a common graphical language that eliminates ambiguities in the documentation of electrical and electronic projects. Among its fundamental features are:

- **Comprehensive coverage:** includes symbols for discrete components (R, L, C, semiconductors, transducers, connectors, sources), control and protection functions, binary logic, and elements of low and high voltage electrical installations.
- **Continuous updating:** the IEC 60617:2025 version incorporates new symbols for power electronics devices, renewable generation, and industrial communications.
- **Vector representation:** all symbols are defined in a standardized vector format, allowing direct implementation in CAD/CAE tools while maintaining readability at any scale.
- **Multilingual:** the standard provides literal designations and reference names in several languages, although the graphical representations are identical in all regions.
- **Hierarchical structure:** symbols are organized by functional families (conductors and connections, passive components, semiconductors, energy production and conversion, etc.) facilitating their consultation and selective application.

## Differences from other symbol standards

Although IEC 60617 is the predominant international standard, other historical standards coexist that present relevant graphical divergences. The following table compares the most significant representations between IEC 60617 and the IEEE 315 / ANSI Y32.2 standard, still used in some North American sectors.

| Component | Symbol according to IEC 60617 | Symbol according to IEEE 315 / ANSI |
|---|---|---|
| Fixed resistor | Rectangle | Zigzag line |
| Non-polarized capacitor | Two parallel plates | Two parallel plates (similar) but with larger spacing in ANSI |
| Air-core coil | Convex arcs | Series of semicircles or loops |
| General earth | Ground symbol (three decreasing strokes) | Horizontal line with wider oblique strokes |
| Protective earth | Inverted triangle of strokes | Symbol with circle around the general earth |
| Semiconductor diode | Triangle and bar | Triangle and bar (practically identical) |
| BJT transistor | Optional enclosing circle; arrow indicates emitter | Enclosing circle always present; terminals with curved lines |
| Direct current (DC) source | Two parallel lines of different thickness | A single pair of lines with + and - signs |
| Switch | Inclined line between two open points | Horizontal straight line with contact point and opening angle |

## Applications of IEC 60617 electrical symbols

Symbols according to IEC 60617 are used in all stages of the life cycle of an electrotechnical system, from conception to maintenance. Some essential application areas are:

- **Design of electrical and electronic circuits:** they allow the creation of single-line, multi-line, and schematic diagrams understandable by engineers of any nationality.
- **Documentation of industrial installations:** electrical panels, automation and control systems, lighting plans, motive power, and energy distribution are represented with these standardized symbols.
- **Technical training:** universities and vocational training centers use IEC 60617 symbology to teach circuit analysis and electrotechnology.
- **Simulation and design software:** EDA tools (Altium, KiCad, EPLAN, SolidWorks Electrical) integrate native libraries of IEC 60617 symbols, ensuring project interoperability.
- **Standardization of electrical enclosures and control panels:** terminal references, wiring labels, and connection diagrams adhere to this standard to facilitate compliance review.

## Frequently Asked Questions (FAQ)

### What exactly is IEC 60617?

It is the international standard published by the International Electrotechnical Commission that specifies graphical symbols to represent components and functions in electrotechnical documentation. It defines a harmonized, public domain symbol library covering from simple elements to complex power, control, and communications installations.

### How do IEC symbols differ from ANSI or IEEE symbols?

The main differences lie in the way resistors (IEC rectangle vs. ANSI zigzag), coils, switch contacts, and some types of ground are represented. While IEC 60617 is the world reference, IEEE 315 has been inactive without replacement since 2019, so new projects tend to adopt IEC.

### Are IEC 60617 symbols legally mandatory?

They are not legally mandatory in most countries, but they are contractually required in international projects and recommended by virtually all national standardization bodies, which are progressively withdrawing their local standards in favor of IEC 60617.

### Where can I consult all IEC 60617 symbols?

The International Electrotechnical Commission offers an official online database (IEC 60617: Graphical Symbols for Diagrams) that contains all symbols in browser format, with descriptions and multilingual metadata. Many EDA software vendors also include complete libraries based on it.

### Can I mix IEC symbols with symbols from other standards in the same schematic?

Technically it is possible, but it is discouraged because it compromises the clarity and uniformity of the drawing. In professional projects, a single representation standard is specified from the start —usually IEC 60617— to avoid confusion during assembly, commissioning, or troubleshooting.

### What is the difference between the IEC ground symbol and the ground or chassis symbol?

In IEC 60617, the protective earth symbol (three inclined strokes inside an inverted triangle) is reserved for connection to the safety earth. The ground symbol (three decreasing horizontal strokes) represents the common voltage reference point of the circuit. Both are not interchangeable and must be used according to the actual function of the conductor.

## References
- **electrical4u.com**: https://www.electrical4u.com/electrical-international-symbol/
