---
title: "Difference between grounding and bonding"
sidebar:
  label: "Difference between grounding and bonding"
description: "Technical reference: Difference between grounding and bonding"
keywords: ["grounding vs bonding difference electrical", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-fundamentals"
subcategory: "grounding-vs-bonding"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Grounding and bonding are two fundamental concepts in the protection of electrical systems, and although they are often used interchangeably, their purposes and operating mechanisms are clearly distinct. Grounding intentionally connects a point of the system to the physical earth to dissipate fault currents or lightning discharges, while bonding interconnects all non-current-carrying metal parts to equalize their electrical potential and eliminate dangerous contact voltages. An effective protection system requires both to work together: without grounding, overcurrent protection may not operate; without bonding, deadly potential differences can appear even with correct grounding.

## Fundamental purpose

Grounding provides a low-impedance return path to the source through the earth, ensuring the operation of protections under fault conditions. Bonding actively eliminates voltage differences between accessible conductive parts, preventing current flow through the human body. The following table summarizes the main differences:

| Characteristic | Grounding | Bonding |
| :--- | :--- | :--- |
| **Objective** | Dissipate fault current to ground | Equalize potential between metal masses |
| **Connection** | Electrode in contact with earth (rod, plate, ring) | Conductor between cabinets, pipes and metal structures |
| **Critical parameter** | Typical ground resistance ≤ 25 Ω / ≤ 25 Ω | Negligible fault loop impedance, ideally 0 Ω / 0 Ω |
| **Operation under fault** | Facilitates overcurrent protection tripping | Prevents contact voltage between simultaneously accessible parts |

## Specific function of grounding

Grounding establishes a fixed voltage reference point —earth potential— to which the system conductors are linked. In a typical residential installation, the grounding electrode must achieve a resistance not greater than 25 Ω / 25 Ω to remote earth; if this value is exceeded, the standard requires a second supplementary electrode, separated by at least 1.8 m / 6 ft from the main one. Its critical function is to drain unwanted currents —insulation faults, transient overvoltages or lightning discharges— directly into the ground, limiting the system’s potential rise with respect to earth. In TN schemes, the low-impedance fault loop allows a high short-circuit current to trip a circuit breaker in milliseconds; in TT schemes, the earth resistance may be higher, so a residual current device (RCD) with sensitivity ≤ 30 mA / 30 mA is installed to complement protection.

## Specific function of bonding

Bonding joins all exposed conductive parts —metal enclosures, cable trays, water, gas or central heating pipes, handrails, stairs, platforms and building metal structures— to the same electrical potential, usually via a protective conductor or directly to the main ground busbar. The connection is sized to withstand the maximum foreseeable fault current without fusing or detaching; in a main residential panel, the neutral-to-ground bonding conductor is typically at least 8 mm² / 8 AWG (copper). When all metal objects in a room are bonded, even if the remote ground connection is interrupted, a person cannot simultaneously touch two surfaces with a dangerous potential difference. This equalization is especially critical in bathrooms, swimming pools and fountains, where the presence of water and bare skin drastically reduces total body resistance.

## Practical interrelationship

Bonding and grounding complement each other to form a two-layer protection network. During an insulation fault in equipment, bonding ensures that its metal chassis acquires the same potential as the rest of the connected masses, eliminating contact voltage; simultaneously, grounding provides the return path that drives the fault current to flow. The simplified formula that governs the effectiveness of tripping is:

> **I_falla = V_fase / (Z_fuente + Z_retorno_tierra)**

Where:
- **I_falla**: short-circuit current that must exceed the threshold of the protective device
- **V_fase**: line voltage (230 V / 400 V in European systems, 120 V / 240 V in American systems)
- **Z_fuente**: internal impedance of the transformer and line up to the fault point
- **Z_retorno_tierra**: impedance of the earth return path, which effective bonding minimizes by avoiding paths through loose or corroded joints

Without bonding to unify the return impedance, the fault current may be too low to trip a thermal-magnetic circuit breaker, leaving the installation energized and dangerous for an indefinite time.

## Standards and technical references

At the international level, the International Electrotechnical Commission (IEC) classifies grounding and bonding systems into types TN-S, TN-C, TN-C-S, TT and IT, defined in IEC 60364. In the United States, the National Electrical Code (NEC) dedicates Article 250 entirely to grounding and bonding requirements, including conductor sizes, admissible electrodes and connection methods; Table 250.6 specifies, for example, a copper conductor of 8.37 mm² / 8 AWG for a rod electrode and a minimum of 33.6 mm² / 2 AWG for a ring electrode. IEEE 142 (Green Book) provides guidelines for the design of industrial grounding systems, while IEEE 837 details the qualification of bonding connectors for substations.

## Common errors

- **Confusing the ground electrode with bonding**: driving a 2.4 m / 8 ft rod does not equalize potential between pipes and cabinets; it only diverts current to ground.
- **Assuming neutral and ground are equivalent**: in a TN-C-S scheme, a break in the neutral conductor upstream of the separation point leaves all masses connected to phase potential; proper bonding of metal pipes prevents uncontrolled return paths.
- **Ignoring bonding in renovations**: installing aluminum windows, handrails or metal pipes without connecting them to the bonding system introduces floating objects that can become energized by induction or accidental contact.
- **Opening the ground conductor as a test method**: disconnecting the ground to measure it without de-energizing the system is a dangerous practice, because while the measurement lasts, all masses lose their protection reference.
- **Using the same term for both concepts**: in English, "grounding" does not automatically imply "equipotential bonding"; referring to both as "ground" in plans and procedures is a recurring source of installation defects.

## Frequently Asked Questions (FAQ)

### What is the essential difference between grounding and bonding?
Grounding connects the electrical system to the physical earth to drain fault currents and establish a voltage reference, while bonding joins all metal parts together to keep them at the same potential, preventing dangerous voltages from appearing between surfaces that a person can touch simultaneously.

### Can a system be safe without bonding if the ground resistance is less than 5 ohms / 5 ohms?
It does not guarantee it. A ground resistance of 5 ohms / 5 ohms ensures good drainage to earth, but if two metal cabinets are grounded through paths with different impedance, a fault in one can raise its potential relative to the other, creating a contact voltage that bonding would eliminate by connecting them directly.

### Why is bonding mandatory in swimming pools and fountains with reinforcing mesh?
Because the immersed body drastically reduces its electrical resistance and wet skin has an impedance of only a few hundred ohms. Bonding of all metallic elements, including concrete reinforcement, stainless steel handrails and ladders, creates an equipotential zone where the potential difference between any two points is practically zero, eliminating the voltage gradient that could pass through a swimmer.

### Does a ground electrode buried 3 meters / 10 ft deep eliminate the need for bonding in a substation?
Definitely not. The electrode drains fault current and dissipates overvoltages, but it does not equalize the potential of metal structures, cabinets, gratings and supports on the surface. Standards such as IEEE 80 require both a buried ground grid and an extensive bonding network to form a safe equipotential surface for personnel.

### What happens if the neutral conductor breaks in a TN-C-S system that has bonding?
If the bonding of metal pipes is correctly executed, these pipes and other interconnected masses will not become directly energized, but the potential of the neutral downstream of the break can rise toward phase voltage due to connected loads. Grounding with its own electrode at the building partially attenuates the rise, but only integral bonding prevents dangerous potential differences between exposed metal elements.

### Is it necessary to apply bonding to a 25 mm / 1 in diameter CPVC or polypropylene pipe?
No, bonding is only required for metal pipes or those containing metal sections that could become energized. A completely non-conductive pipe does not introduce an exposed surface that could acquire a different potential from the surroundings, so it is not part of the equipotential bonding system, although the metal parts of equipment connected to it must be linked to bonding.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **electrical4u.com**: https://www.electrical4u.com/system-earthing/
- **mikeholt.com**: https://www.mikeholt.com/bonding-and-grounding.php
