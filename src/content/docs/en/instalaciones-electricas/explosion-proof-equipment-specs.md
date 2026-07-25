---
title: "Explosion-proof equipment specifications"
sidebar:
  label: "Explosion-proof equipment specifications"
description: "Technical reference: Explosion-proof equipment specifications"
keywords: ["explosion proof equipment specifications rating", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "hazardous-locations"
subcategory: "explosion-proof-equipment"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Electrical equipment installed in atmospheres with flammable gases, vapors, combustible liquids, or explosive dusts presents a risk of fire or explosion. To mitigate this hazard, installations are classified into hazardous locations, and equipment is designed under strict standards that ensure safe operation. This document details the fundamental specifications governing the selection, installation, and marking of explosion-proof equipment in accordance with the National Electrical Code (NEC) and international IEC standards.

## Hazardous Area Classification

| System | Main Region | Classification Structure |
|---|---|---|
| Class/Division | North America (NEC Art. 500) | Class → nature of material; Division → probability of presence; Group → type of material |
| Zone | International (IEC 60079) and NEC Art. 505/506 | Zone → risk level combined with nature of material; Group → type of material and location |

Area classification is determined by professionals such as the plant engineer, the insurer, or the safety officer, not by the electrical installer. Every classified location must be documented in an area classification drawing (NEC 500.4).

## Class/Division System

### Hazardous Atmosphere Classes

| Class | Nature of Hazardous Material |
|---|---|
| Class I | Flammable gases or vapors that can form explosive mixtures. |
| Class II | Combustible or conductive dusts that can generate explosive mixtures. |
| Class III | Easily ignitable fibers or flyings (flyings). |

### Divisions by Probability

| Division | Probability of Material Presence in Flammable Concentration |
|---|---|
| Division 1 | High probability: present continuously, intermittently, or periodically during normal operation, or released by the equipment itself under normal conditions. |
| Division 2 | Low probability: present only under abnormal conditions for short periods, such as an accidental leak or system failure. |

### Material Groups

For Class I (gases/vapors), groups A, B, C, and D are used. Classes II and III use groups E, F, and G.

| Group | Typical Materials | MESG (Maximum Experimental Safe Gap) | MIC Ratio |
|---|---|---|---|
| A | Acetylene | Not standardized | Not standardized |
| B | Hydrogen, butadiene, ethylene oxide, propylene oxide, acrolein, and gases with >30% hydrogen by volume | ≤ 0.45 mm / 0.018 in | ≤ 0.40 |
| C | Carbon monoxide, ethyl ether, hydrogen sulfide, ethylene, cyclopropane, acetaldehyde, isoprene, and others of equivalent risk | > 0.75 mm / 0.030 in | > 0.40 and < 0.80 |
| D | Gasoline, acetone, ammonia, benzene, butane, ethanol, hexane, methanol, methane, vinyl chloride, natural gas, naphtha, propane, and equivalents | > 0.75 mm / 0.030 in | > 0.80 |
| E | Combustible metal dusts: aluminum, magnesium, bronze, chromium, titanium, zinc, and their commercial alloys | N/A | N/A |
| F | Carbonaceous dusts: carbon black, charcoal, coke, and coal dusts with more than 8% trapped volatiles | N/A | N/A |
| G | Combustible dusts not included in E or F: flour, grain, starch, sugar, wood, plastics, and chemicals | N/A | N/A |

**Note:** MESG measures the maximum gap between two parallel metal surfaces that prevents the propagation of an internal explosion. The MIC Ratio compares the minimum ignition current of the gas with that of methane under the same test conditions.

## Zone System

### Gases, Vapors, and Mists (NEC Art. 505 / IEC 60079-10-1)

| Zone | Nature and Probability of Hazardous Material |
|---|---|
| Zone 0 | Flammable concentrations present continuously or for prolonged periods. |
| Zone 1 | Flammable concentrations likely under normal operating conditions. |
| Zone 2 | Flammable concentrations unlikely in normal operation and, if they occur, only for short periods. |

### Combustible Dusts (NEC Art. 506 / IEC 60079-10-2)

| Zone | Nature and Probability of Hazardous Material |
|---|---|
| Zone 20 | Combustible dust cloud present continuously, frequently, or for long periods. |
| Zone 21 | Combustible dust cloud that may form occasionally in normal operation. |
| Zone 22 | Combustible dust cloud unlikely in normal operation and of short duration. |

## Protection Methods for Equipment

| Method | IEC Symbol | Protection Principle |
|---|---|---|
| Explosion-proof enclosure | Ex d | Contains the internal explosion and prevents flames or hot gases from escaping. The enclosure withstands the pressure of an explosion and the gaps cool the gases. |
| Increased safety | Ex e | Robust design that prevents the formation of arcs, sparks, or excessive temperatures in normal operation, reducing the likelihood of ignition. |
| Intrinsic safety | Ex i | The circuit energy is limited below the level necessary to ignite the atmosphere, even under fault conditions. Categories ia (Zone 0), ib (Zone 1). |
| Pressurization | Ex p | A positive pressure of protective gas (air or inert) is maintained in the enclosure to prevent the entry of the explosive atmosphere. |
| Encapsulation | Ex m | Components that may cause ignition are encapsulated in resin to exclude the explosive atmosphere. |
| Non-incendive | Ex n | Equipment that under normal operating conditions does not produce arcs, sparks, or hot surfaces capable of causing ignition (suitable only for Zone 2). |

## Temperature Codes

The maximum surface temperature of the equipment, including fault conditions, must not exceed the autoignition temperature of the surrounding atmosphere. The T codes establish the limits.

| Temperature Class | Maximum Allowable Surface Temperature | Temperature in °F |
|---|---|---|
| T1 | ≤ 450 °C | ≤ 842 °F |
| T2 | ≤ 300 °C | ≤ 572 °F |
| T3 | ≤ 200 °C | ≤ 392 °F |
| T4 | ≤ 135 °C | ≤ 275 °F |
| T5 | ≤ 100 °C | ≤ 212 °F |
| T6 | ≤ 85 °C | ≤ 185 °F |

## Documentation Requirements

All classified hazardous locations must be documented in an area classification drawing, available to those who design, install, inspect, maintain, or operate the equipment (NEC 500.4). This drawing indicates the classes, divisions (or zones), groups, and applicable T codes, and is the basis for selecting the correct equipment.

## Frequently Asked Questions (FAQ)

### What is the maximum allowable surface temperature for equipment with T4 class?
The maximum surface temperature for T4 equipment is 135 °C / 275 °F, suitable for atmospheres with an autoignition temperature above that value.

### What is the Maximum Experimental Safe Gap (MESG) required for Group B?
The maximum MESG for Group B is 0.45 mm / 0.018 in, making it the most restrictive group for flammable gases according to the NEC.

### How many divisions exist in the Class/Division system and what do they mean?
There are two divisions, Division 1 and Division 2. Division 1 indicates frequent or continuous presence of the hazardous substance (high probability), while Division 2 implies presence only under abnormal conditions (low probability).

### How many material groups does the NEC define for Class I?
Class I defines four gas groups: Group A (acetylene), Group B (hydrogen and analogs), Group C (ether, ethylene, etc.), and Group D (gasoline, propane, etc.).

### From what particle size are Group E metal dusts considered especially hazardous?
There is no single diameter; Group E dusts are hazardous due to their conductivity and abrasiveness, as well as their ability to form explosive clouds with particles smaller than 0.5 mm / 0.020 in in many cases.

### How many risk zones for gases does the international IEC system distinguish?
The IEC system and NEC Article 505 establish three zones: Zone 0 (continuous presence), Zone 1 (occasional presence in normal operation), and Zone 2 (presence only under abnormal conditions).

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2697
- **electrical4u.com**: https://www.electrical4u.com/cut-sheets/
