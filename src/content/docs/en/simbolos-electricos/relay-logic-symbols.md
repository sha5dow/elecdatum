---
title: "Relay logic symbols"
sidebar:
  label: "Relay logic symbols"
description: "Technical reference: Relay logic symbols"
keywords: ["relay logic symbols control diagram", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "control-diagram-symbols"
subcategory: "relay-logic-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Relay logic symbols constitute the graphic language used in industrial control diagrams to represent coils, contacts, and timers. They are based on 7 standardized fundamental elements that allow interpreting any command scheme or wired logic.

## Coil and contact symbols

The following table lists the 7 most common symbols used in industrial control drawings, according to IEC 60617 and ANSI Y32.2 standards.

| Symbol | Designation | Function |
|--------|-------------|----------|
| `-( )-` | Relay or contactor coil | Energizes the associated contacts upon receiving the nominal control voltage. |
| `-|  |-` | Normally open (NO) contact | Closes the circuit when the coil is activated. |
| `-|/|-` | Normally closed (NC) contact | Opens the circuit when the coil is activated. |
| `-|T|-` | Time-delay on closure contact (TON) | Closes its contacts after an adjustable delay following coil excitation. |
| `-|T0|-` | Time-delay on opening contact (TOFF) | Opens its contacts after an adjustable delay following coil excitation. |
| `-|P|-` | Impulse contact (bistable) | Changes state with each supply pulse; also known as latching relay. |
| `-|M|-` | Mechanically held contact | Maintains its position without continuous electrical consumption once manually or magnetically actuated. |

## Typical electrical characteristics

Electromechanical relays for control circuits handle switching currents ranging from 5 A to 15 A in industrial applications.

| Parameter | Metric value | Imperial value |
|-----------|--------------|----------------|
| Nominal coil voltage | 24 V DC, 230 V AC | 24 V DC, 230 V AC |
| Nominal contact current | 10 A | 10 A |
| Break power (single-phase 230 V motor) | 0.75 kW / 1 hp | 1 hp / 0.75 kW |
| Mechanical durability | 10⁷ cycles | 10⁷ cycles |
| Operating temperature | -25 °C to +55 °C / -13 °F to 131 °F | -13 °F to 131 °F / -25 °C to +55 °C |

## Terminal and connection identification

The connection of relay terminals accepts conductors with cross-sections between 0.5 mm² (20 AWG) and 2.5 mm² (14 AWG) according to IEC 60947. Each relay has 4 main terminals: two for the coil (A1, A2) and two per contact (e.g., 1‑2 for the first contact, 3‑4 for the second). On timed contacts, a function designation is added, such as 15‑16 for the timed NO contact.

## Representation in control diagrams

A typical control diagram for three-phase motor interlocking uses at least 3 auxiliary contacts in wired logic. In the most common scheme, a start pushbutton (NO) is connected in parallel with an auxiliary NO contact of the contactor, and in series with the contactor coil and a stop pushbutton (NC). Pressing start closes the circuit, the coil energizes, and the auxiliary contact maintains the supply on its own, creating a self-holding circuit. To de-energize the contactor, the stop button is pressed, opening the current path and releasing the interlock.

## Application standards

There are 2 main normative systems that define relay logic symbols:

- **IEC 60617** (European and international representation), used in most industrial drawings outside North America. It uses coils represented as a rectangle and contacts with clear strokes.
- **ANSI Y32.2 / NEMA ICS 1** (American representation), distinguished by the use of crossed lines for normally closed contacts and a specific terminal nomenclature (L1, T1…).

Both systems coexist in machinery exported to different markets, so it is common for diagrams to include legends clarifying the symbology adopted.

## Frequently Asked Questions (FAQ)

### What is the difference between a normally open and a normally closed contact?

A normally open (NO) contact keeps the circuit interrupted when the coil is at rest and closes it when energized; the normally closed (NC) contact conducts at rest and opens when the coil is energized.

### What is an impulse relay used for in wired logic?

The impulse relay changes position with each applied pulse and maintains the state without continuous power consumption, allowing the same circuit to be turned on and off from multiple pushbuttons without added interlocking logic.

### Are relay logic symbols used in P&ID diagrams?

No. Piping and instrumentation diagrams (P&ID) exclude control relays, manual switches, and pilot lights, as they focus on process instrumentation and safety interlocking functions, not on detailed command logic.

### Which standards regulate the graphic representation of relays in electrical drawings?

The most relevant are IEC 60617 (international symbology) and ANSI Y32.2 / NEMA ICS 1 (American), supplemented by IEC 60947‑4‑1 regarding the designation of contactor terminals.

### How is a time-delay on closure contact represented in a control diagram?

It is drawn as a normally open contact with an associated timing mark (usually the letter “T” or an arc) and identified with the abbreviation TON (ON-delay); closure occurs only after the programmed time has elapsed.

### Is it necessary to indicate the cross-reference of contacts in a relay logic diagram?

Yes. To facilitate interpretation and maintenance, each contact must carry below it the identification of the coil that controls it (e.g., “KM1”) and, in multi-page diagrams, the location coordinate of the other contacts of that same relay.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
- **electrical4u.com**: https://www.electrical4u.com/latching-relay/
