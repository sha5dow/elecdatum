---
title: "AFCI fundamentals and application"
sidebar:
  label: "AFCI fundamentals and application"
description: "Technical reference: AFCI fundamentals and application"
keywords: ["AFCI arc fault circuit interrupter basics", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "gfci-afci"
subcategory: "afci-basics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

An arc‑fault circuit interrupter (AFCI) is an electrical protection device designed to interrupt the circuit as soon as it detects dangerous electrical arcs, which are characteristic of loose connections in installation wiring. Unlike conventional thermal‑magnetic circuit breakers, which only respond to overloads and short circuits, an AFCI continuously analyzes the current waveform to discriminate between the normal arc produced by switches or brush motors and the anomalous arc that can reach temperatures exceeding 3000 °C / 5432 °F, capable of starting a fire. Each year more than 40 000 fires in the United States are attributed to residential electrical wiring, resulting in over 350 fatalities and 1 400 injuries.

The internal electronic circuits of an AFCI monitor the electrical current looking for high‑frequency components, typically around 100 kHz / 100 000 cycles per second, that persist for more than a few milliseconds. These signals are characteristic of the disruptive discharge that occurs when a loose connection or a partially broken conductor ionizes the air, generating a conductive plasma. The arc phenomenon initiates through two main mechanisms: thermal ionization, where the temperature increase (above 3000 °C / 5432 °F) raises the kinetic energy of the molecules and strips electrons, and electron‑collision ionization, in which free electrons accelerated by the electric field collide with atoms and release more electrons in a cascade. Once the AFCI microprocessor identifies a dangerous arc signature, it commands the immediate opening of the contacts, de‑energizing the circuit before the released energy reaches a level capable of igniting adjacent materials.

## Types of AFCI

| AFCI Type | Protection Offered | Characteristic Trip Current | Applicable Standard |
| --- | --- | --- | --- |
| Branch AFCI | Parallel arc (line‑neutral, line‑ground) | 75 A / 75 A | UL 1699 |
| Combination Type AFCI | Series arc, parallel arc, ground arc, overload and short circuit | 5 A / 5 A (series), 75 A / 75 A (parallel) | UL 1699 |
| AFCI Receptacle | Series arc in the entire branch circuit, parallel arc from the first outlet | Equivalent to combination type | UL 1699 |

The Branch AFCI only interrupts the circuit when an arc current of at least 75 A / 75 A flows from line to neutral or ground. The Combination type adds the ability to detect series arcs, tripping with as little as 5 A / 5 A, and includes overcurrent and short‑circuit protection in the same module. The AFCI Receptacle, installed at the first outlet of a branch circuit, protects the entire branch against series arc faults and from that point onward against parallel faults, without depending on the type of distribution panelboard.

## Installation Requirements According to NEC
Since the 2014 edition of the National Electrical Code (NEC) of the United States, AFCI protection is mandatory in all branches that supply outlets or devices in kitchens, family rooms, dining rooms, living rooms, libraries, bedrooms, closets, hallways, laundry areas, and similar rooms in dwellings. In bedrooms the requirement dates from 1999. The Canadian Electrical Code (CEC) incorporated equivalent requirements starting in 2015. Compliance can be achieved by using a combination‑type circuit breaker in the distribution panelboard or an AFCI receptacle at the first outlet of the circuit. The selection of the device must be verified with local code adoptions, since not all jurisdictions have incorporated the latest revisions.

## Maintenance and Testing
The manufacturer recommends exercising the AFCI TEST button monthly. When pressed, the device simulates an arc fault and must trip in less than 25 ms / 0.025 s, opening the contacts and cutting off power to the circuit. After a test trip, operation is restored by operating the reset lever. An AFCI that does not respond to the test or that experiences frequent nuisance tripping must be replaced immediately, as it may indicate sensor deterioration or the presence of real arcs in the installation. No internal maintenance is required; all repairs must be carried out by qualified personnel.

## Frequently Asked Questions (FAQ)

### What is the characteristic frequency that AFCIs look for in the current?
AFCIs monitor the electrical signal looking for components that oscillate around 100 kHz / 100 000 cycles per second, associated with the erratic nature of electrical arcs, and that persist for more than a few milliseconds.

### How many residential electrical fires are recorded annually in the United States?
More than 40 000 annual fires are reported attributed to residential electrical wiring, causing more than 350 deaths and 1 400 injuries each year, according to national statistics.

### At what current does a combination AFCI trip in response to a series arc fault?
The device opens the circuit when it detects a series arc current of just 5 A / 5 A, a value well below the reaction capability of common thermal‑magnetic circuit breakers.

### What is the minimum temperature required for air to thermally ionize and form an arc?
For significant thermal ionization to occur, the temperature must exceed 3000 °C / 5432 °F, at which point gas molecules acquire enough energy to release electrons and establish a conductive plasma.

### How often is it recommended to manually test an AFCI?
The test button should be operated at least once every 30 days / 1 month; the device must trip and reset correctly.

### How many amperes of parallel arc current does a Branch AFCI need to activate?
The trip threshold of a Branch AFCI is 75 A / 75 A between line and neutral or line and ground, protecting exclusively against parallel arcs.

## References
- **electrical4u.com**: https://www.electrical4u.com/what-is-arc-arc-in-circuit-breaker/
