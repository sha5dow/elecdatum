---
title: "Overvoltage category classification"
sidebar:
  label: "Overvoltage category classification"
description: "Technical reference: Overvoltage category classification"
keywords: ["overvoltage category classification I II III IV", "calidad-energia"]
category: "calidad-energia"
topic: "transients"
subcategory: "overvoltage-category-classification"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The overvoltage categories, established by standard IEC 61010-1, classify electrical circuits into four levels (CAT I to CAT IV) based on the continuous available energy and the magnitude of expected transient overvoltages at the measurement point. The rated impulse withstand voltage values range from 500 V for a CAT II device at 50 V working voltage to 12 000 V for a CAT IV instrument used in 1000 V systems.

## Definition and purpose

The overvoltage category classification (or measurement category) identifies the risk of voltage transients that a measuring instrument, a protection device, or an electrical installation may encounter. Its purpose is to ensure that the equipment has the appropriate insulation level, creepage distances, and clearances to withstand overvoltages caused by lightning strikes, switching operations, or network faults without compromising operator safety or system integrity.

## Categories according to IEC 61010-1

Standard IEC 61010-1 divides circuits into the following measurement categories:

| Category | Description |
| --- | --- |
| CAT I | Measurements performed on circuits not directly connected to the mains supply (public electrical grid). Includes protected internal circuits derived from the mains. Transients are controlled to low levels and source impedance is high. |
| CAT II | Measurements on circuits directly connected to the low-voltage installation. Corresponds to socket outlets, household appliances, portable tools, and similar consumer equipment. Transient overvoltages are more significant than in CAT I but lower than in higher categories. |
| CAT III | Measurements performed on the fixed installation of the building. Includes distribution boards, circuit breakers, wiring, busbars, junction boxes, industrial sockets, and fixed equipment. The energy available during a transient is considerable. |
| CAT IV | Measurements performed at the origin of the high-voltage installation or at the service entrance. Includes energy meters, primary overcurrent protection devices, and ripple control systems. This is the most severe level, with the highest impulse overvoltages and the lowest source impedance. |

## Rated impulse withstand voltages

The following table lists the standard impulse voltage values that equipment classified in each category must withstand, based on the rated working voltage:

| Working voltage (V) | CAT I | CAT II | CAT III | CAT IV |
| --- | --- | --- | --- | --- |
| 150 | 800 V | 1500 V | 2500 V | 4000 V |
| 300 | 1500 V | 2500 V | 4000 V | 6000 V |
| 600 | 2500 V | 4000 V | 6000 V | 8000 V |
| 1000 | 4000 V | 6000 V | 8000 V | 12 000 V |

The source impedance used during transient overvoltage tests depends on the category:

| Category | Source impedance (Ω) |
| --- | --- |
| CAT I | 30 |
| CAT II | 12 |
| CAT III | 2 |
| CAT IV | 2 |

A lower source impedance allows a higher fault current to flow, which explains why higher categories impose more severe insulation requirements.

## Selection of instrument category

The choice of category for a multimeter, clamp meter, or voltage tester must be equal to or higher than the category of the point where the measurement is taken. For example, to measure on the busbar of a distribution panel (CAT III), a CAT II instrument must not be used. Using an instrument in a category lower than required exposes the user to arc flash and equipment explosion risk.

Minimum insulation clearances and creepage distances increase with category and working voltage. For double insulation, values can range from 0.04 mm / 0.0016 in (CAT II, 50 V) up to 28 mm / 1.102 in (CAT IV, 1000 V). These requirements ensure that the equipment maintains its dielectric integrity even during severe transients.

## Frequently Asked Questions (FAQ)

### What is the difference between overvoltage categories and insulation classes?

Overvoltage categories classify the point of the installation based on expected energy and transients, while insulation classes (basic, supplementary, double, or reinforced) define the level of protection of the equipment. Both complement each other to set creepage distances and test voltages.

### Can a CAT III instrument be used to measure on a CAT II circuit?

Yes. Equipment with a CAT III rating can measure on CAT II or CAT I circuits because its design can withstand higher transients. The general rule is that the instrument must have a category equal to or higher than that of the measurement point.

### Why is source impedance lower for CAT III and CAT IV?

Because these points are closer to the distribution transformer or the origin of the installation, where the capacity to supply short-circuit current is greater. A low impedance allows a transient overvoltage to deliver much more energy to the instrument.

### What happens if I measure on a main panel with a CAT II instrument?

The instrument is not designed to withstand the transients that may appear at that point. There is a high risk of insulation breakdown, internal arc flash, and operator injury. The minimum category indicated by the manufacturer must always be respected.

### Do overvoltage categories apply only to multimeters?

No. They affect any measurement, control, or laboratory equipment connected to the electrical mains (oscilloscopes, data loggers, current clamps, voltage testers, etc.), as well as the components of the fixed installation itself.

### How does altitude influence overvoltage categories?

At higher altitudes, the dielectric strength of air decreases, so some manufacturers reduce the maximum working voltage or require an additional margin in insulation clearances. However, the category and standardized impulse voltages do not change; it is the user who must consider environmental conditions.

## Sources Consulted

- [Hazardous Areas - North America Classification](https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html)
- [Thyristor Protection or SCR Protection](https://www.electrical4u.com/thyristor-protection-or-scr-protection/)