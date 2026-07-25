---
title: "ANSI/IEEE electrical symbols"
sidebar:
  label: "ANSI/IEEE electrical symbols"
description: "Technical reference: ANSI/IEEE electrical symbols"
keywords: ["ANSI IEEE electrical symbols reference", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "iec-symbols"
subcategory: "ansi-ieee-electrical-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

ANSI/IEEE electrical symbols, formally standardized by IEEE 315-1975 (ANSI Y32.2-1975 / CSA Z99-1975), constitute a universal graphic language used to represent components, functions, and connections in schematic diagrams and electrical drawings. Although the IEEE 315 standard was inactivated without replacement in November 2019, its set of symbols continues to be a mandatory reference in electrical and electronic engineering in North America and in numerous global industrial sectors. This page compiles the fundamental symbols described in that standard and its later extensions, including the graphic symbols for logic functions covered in IEEE 91/91a and conductor crossing conventions.

## Reference Standards
The graphic symbols for electrical and electronic components are covered by the following standards, which define the representation adopted in ANSI/IEEE schematics:

| Standard | Description |
|---|---|
| IEEE 315‑1975 / ANSI Y32.2‑1975 | Graphic symbols for electrical and electronic diagrams (reaffirmed in 1993, inactivated without replacement in 2019). |
| IEEE 91 / IEEE 91a | Graphic symbols for logic functions (digital), referenced from IEEE 315. |
| ANSI Y32.9‑1972 | Graphic symbols for electrical and lighting architecture plans. |
| ANSI Y1.1‑1972 | Abbreviations for use in technical drawings and texts; complements graphic symbology with standardized nomenclature. |
| NMTBA EGPl‑1967 | JIC (Joint Industrial Council) symbols adopted by the machine tool manufacturers association. |

> The original IEEE 315 standard grouped the symbols into functional categories: transmission elements, switching devices, contacts, solid-state components, rotating machines, relays, instruments, and measuring devices.

## Power Supply, Ground, and Source Symbols
Correct interpretation of the type of power supply and ground references is essential for analyzing any circuit. ANSI/IEEE standards distinguish between DC voltage sources, AC sources, signal ground, and chassis ground.

| ANSI/IEEE Symbol | Designation |
|---|---|
| Continuous horizontal or vertical line, with a connection point (filled circle) where three or more conductors meet. | Conductor or electrical connection. |
| Two parallel lines of different lengths; the longer represents the positive terminal and the shorter the negative. | Cell or battery, single cell. |
| Two or more pairs of alternating long and short parallel lines. | Multi-cell battery. |
| Circle with a plus sign "+" and a minus sign "-" inside, separated by a horizontal line. | Controlled or independent DC voltage source. |
| Circle with a sine wave (~) inside. | Generic AC voltage source. |
| Three horizontal lines of decreasing length downward. | Chassis ground or protective earth ground (IEC-style adapted). |
| Three decreasing horizontal lines, with the top one connected to a point; instead of the bottom one, a triangle with the point facing upward is drawn. | General ground (signal/reference). |
| Ground symbol with an asterisk "*" next to it (the asterisk is not part of the symbol). | Low-signal or low-noise ground. |

## Resistor, Capacitor, and Inductor Symbols
Passive components form the basis of circuits. ANSI/IEEE symbols typically represent resistors with a zigzag line, while capacitors use two parallel plates.

| ANSI/IEEE Symbol | Component |
|---|---|
| Zigzag line. | Fixed resistor. |
| Zigzag line with a diagonal arrow crossing it. | Variable resistor (rheostat). |
| Zigzag line with a diagonal arrow and a third terminal. | Potentiometer (adjustable voltage divider). |
| Two parallel plates of equal length, no polarity marked. | Non-polarized capacitor (generic). |
| Two parallel plates; one curved or accompanied by a "+" sign. | Polarized electrolytic capacitor. |
| Two parallel plates with a diagonal arrow crossing them. | Variable capacitor. |
| Series of consecutive half-loops (arcs) on a line. | Inductor (coil) with air core. |
| Series of half-loops with two nearby parallel lines (representing a ferromagnetic core). | Inductor with iron core. |
| Two magnetically coupled coils (two inductors nearby with common core lines) | Two-winding transformer. |

## Diode, Transistor, and Solid-State Device Symbols
The semiconductor family is represented according to IEEE 315, complemented by IEEE 91 for logic elements. The symbols share the arrow indicating the PN junction and conduction direction.

| ANSI/IEEE Symbol | Device |
|---|---|
| Triangle (anode) resting on a vertical bar (cathode); the vertex points toward the bar. | Junction diode (rectifier). |
| Same as above, with a vertical bar bent at a right angle in the cathode region. | Zener diode. |
| Diode with two incoming arrows (light symbol) toward the junction. | Photodiode. |
| Diode with two arrows leaving the triangle (light emission). | LED (light-emitting diode). |
| Four diodes arranged in a bridge configuration. | Diode bridge rectifier. |
| Transistor with three terminals: base (straight line), emitter (outgoing arrow for NPN, incoming for PNP), and collector. | NPN BJT. |
| Similar to the above, but with the emitter arrow pointing toward the base. | PNP BJT. |
| N-channel junction field-effect transistor: gate with incoming arrow. | N-channel JFET. |
| P-channel junction field-effect transistor: gate with outgoing arrow. | P-channel JFET. |
| Circle with an arrow inside and an amplifier symbol. | Photocell (photovoltaic cell). |

## Switch, Relay, and Connector Symbols
These symbols control the flow of current and the physical interconnection between parts of the circuit. The standard distinguishes between normally open (NO), normally closed (NC), and changeover contacts.

| ANSI/IEEE Symbol | Function |
|---|---|
| Two parallel lines; the top one movable (separated at rest). | Normally open contact (NO). |
| Two parallel lines that touch at rest; the top one rises when actuated. | Normally closed contact (NC). |
| Combination of NO and NC with a common point. | Changeover contact (SPDT). |
| Relay coil (represented as a circle or rectangle with the letter "K" and two terminals). | Electromechanical relay, coil. |
| Circuit breaker symbol (broken line with an arc above) and an associated NO contact. | Thermal-magnetic circuit breaker (automatic). |
| Junction point with a small filled circle at the crossing of conductors. | Electrical connection (splice). |
| Crossing of two lines without a circle; sometimes a semicircle ("bridge") is added over one of them. | Crossing without connection (isolated). |

## Instrumentation and Measurement Symbols
Measuring instruments are represented with a circle and an identifying letter inside. The standard distinguishes between indicators, recorders, and transducers.

| ANSI/IEEE Symbol | Instrument |
|---|---|
| Circle with the letter "A" inside. | Ammeter. |
| Circle with the letter "V" inside. | Voltmeter. |
| Circle with the letter "G" inside. | Galvanometer. |
| Circle with the letter "W" inside. | Wattmeter. |
| Rectangle with the label "CRO" or "OSC". | Cathode ray oscilloscope (CRO). |
| Generic rectangle with numbered pins; may carry the standard part number. | Integrated circuit (IC). |

## Frequently Asked Questions (FAQ)
### What do the acronyms ANSI and IEEE mean in the context of electrical symbols?
ANSI (American National Standards Institute) coordinates standardization in the United States; IEEE (Institute of Electrical and Electronics Engineers) develops the technical content. The symbols standard was called IEEE 315-1975 and was adopted as ANSI Y32.2-1975.

### How do ANSI/IEEE symbols differ from IEC symbols?
The main difference lies in the graphic representation: for example, resistors are drawn with a zigzag in ANSI/IEEE and as a rectangle in IEC 60617. Ground and source symbols also vary, although the functional meaning is equivalent.

### How is a chassis ground connection represented according to IEEE 315?
A set of three horizontal lines of decreasing length downward, connected to a common point, is used. For signal ground, a triangle with the point facing upward is used.

### Is IEEE 315-1975 still in effect?
It was reaffirmed in 1993 and inactivated without replacement in November 2019. However, it continues to be used as a de facto reference in numerous drawings and CAD applications.

### How should a cable crossing without electrical connection be drawn?
The recommended method is to avoid right-angle crossings and instead draw a small semicircle ("bridge") over one of the conductors, so that it is clear there is no metallic junction. The exclusive use of a dot (•) is reserved for connected splices.

### Are there variants of the ANSI/IEEE standard for specific applications?
Yes, the standard includes specific symbols for machine tools (JIC), architectural plans (ANSI Y32.9), and logic functions (IEEE 91). In addition, many manufacturers introduce slight customizations within the standardized symbols to indicate special characteristics.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ANSI-abbreviations-scientific-engineering-terms-d_1622.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-international-symbol/
