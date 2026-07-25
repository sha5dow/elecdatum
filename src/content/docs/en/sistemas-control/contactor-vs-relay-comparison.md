---
title: "Contactor vs relay comparison"
sidebar:
  label: "Contactor vs relay comparison"
description: "Technical reference: Contactor vs relay comparison"
keywords: ["contactor vs relay comparison", "sistemas-control"]
category: "sistemas-control"
topic: "contactors"
subcategory: "contactor-vs-relay"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A contactor and a relay are electromechanical devices governed by a coil that, when energized, opens or closes electrical contacts. The essential difference lies in power handling capacity: a standard relay switches currents below 15 amperes and powers of a few hundred watts, while a contactor is designed to control loads from 15 amperes and several kilowatts, such as electric motors, lighting systems, and capacitor banks.

A contactor is a type of relay with high current and voltage capacity. It is operationally defined by its ability to handle loads above 15 A or circuits of more than a few kilowatts. Both operate on the same electromagnetic principle: when a voltage is applied to the coil, a magnetic field is generated that attracts a moving core attached to the main contacts, closing them. When excitation ceases, the contacts return to their rest position via a spring. The major difference is that the contactor incorporates structures designed to interrupt high currents and reliably withstand electric arcs.

## Components and construction features
A contactor consists of power contacts made from alloys of silver, tungsten or copper (often with additives such as cadmium oxide to resist arcing), an electromagnet with a power coil, an insulating enclosure made of thermoset materials or nylon, and, in DC models, magnetic blowouts that lengthen and extinguish the arc. In contrast, conventional relays typically use smaller cross-section contacts, lack blowouts, and most offer both normally open (NO) and normally closed (NC) contacts. Contactors, however, are supplied almost exclusively with main contacts of the normally open type (Form A), although low-current auxiliary contact blocks can be added. Additionally, DC contactors frequently incorporate an economizer circuit that reduces the coil holding current once the main contacts are closed, saving energy and limiting heating.

## Comparative table of electrical and mechanical parameters
| Parameter | Contactor | Standard Relay |
| --- | --- | --- |
| **Rated load current** | >15 A — up to thousands of A | <15 A (typically 2 A to 10 A) |
| **Rated operating voltage** | 24 V DC/AC up to 690 V AC (reaching several kV) | Generally ≤250 V AC / 30 V DC |
| **Controlled power** | Several tens of kW up to hundreds of kW | ≤2.5 kW |
| **Power contact configuration** | Mainly NA (Form A) | NA, NC or changeover (Form C) |
| **Arc suppression** | Arc chutes, magnetic blowouts (in DC), wide contact separation | Contact separation without additional arc extinction elements |
| **Physical size** | From a few centimeters (≈ 1 inch) up to approximately 1 m / 39.4 in per side | Compact, typically about 20 mm / 0.79 in to 50 mm / 1.97 in wide |
| **Typical coil voltage** | 24 V AC/DC, 120 V, 230 V, 400 V, up to 600 V AC | 5 V, 12 V, 24 V DC; occasionally 230 V AC |
| **Electrical life** | 100,000 to 1,000,000 operations at rated load | >10,000,000 operations at reduced load |

## Typical applications
Contactors are used in starting and controlling three-phase motors (as part of IEC/NEMA magnetic starters), capacitor banks, industrial heating circuits, large installation lighting, and smoke extraction systems. In all these cases, the inrush or continuous current exceeds 15 amperes. Relays, on the other hand, are used for piloting, hardwired logic, programmable logic controller interfaces, solenoid valve control, or signal interposition; that is, control circuits where the switched power is low.

## Selection criteria
The decision between a contactor and a relay is based on the current the load must handle, the power circuit voltage, and the need to extinguish arcs under severe conditions. If the current exceeds 15 A or the load power exceeds about 2-3 kW, a contactor is required. A contactor is also preferable when the load is highly inductive (motors, large coils) and the connection peak can weld relay contacts. When the application only requires switching a signal, a small contactor coil, or a pilot lamp, a relay is more economical and compact. Other factors include operating frequency — general-purpose relays usually withstand very fast cycles — and the environment: contactors have enclosures meeting protection ratings up to IP65, while relays are normally installed in electrical cabinets.

## Frequently Asked Questions (FAQ)
### Can a contactor replace a relay in a control circuit?
Yes, technically it can, but it is neither economical nor practical: a contactor is bulkier, more expensive, and its coil consumes more power than a signal relay. Therefore, relays are used in control circuits.

### Why do most power contactors not have normally closed contacts?
Because their mission is to supply loads such as motors that must be de-energized at rest. Normally closed contacts appear only as auxiliary blocks for interlocks and signaling, and are added separately.

### What happens if a relay is used to switch the starting current of a 2 kW motor?
A 2 kW motor at 230 V AC can draw more than 10 A in steady state and starting peaks up to 60 A. The relay contacts would quickly degrade due to arcing and could weld, losing the ability to open.

### What is the function of magnetic blowouts in a DC contactor?
Magnetic blowouts generate a field that lengthens and displaces the electric arc away from the contact area, increasing the arc voltage until it extinguishes. This can raise the breaking capacity, for example from 600 A to 1500 A in some DC models.

### Why do some contactors include an economizer circuit in the coil?
To reduce the holding current once the contactor has closed. More energy is needed to close the contacts than to keep them closed; the economizer reduces it, saving power and preventing coil overheating, especially in DC contactors.

### Can a contactor be used as short-circuit protection?
No, a contactor is not designed to interrupt short-circuit currents. For that function, fuses or circuit breakers must be installed upstream, coordinated with the contactor to protect the installation.

## References
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/motor_controls
