---
title: "Electrical box fill calculation"
sidebar:
  label: "Electrical box fill calculation"
description: "Technical reference: Electrical box fill calculation"
keywords: ["electrical box fill calculation NEC", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "wiring-methods"
subcategory: "box-fill-calculation"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The electrical box fill calculation determines the maximum number of conductors, devices, and accessories that can be safely installed inside a junction box, avoiding overheating and mechanical damage. The standard method is based on the provisions of Article 314 of the National Electrical Code (NEC) of the United States, widely referenced in international regulations and electrical engineering practices.

Electrical box fill is the standardized procedure that quantifies the volume occupied by all components housed in a junction, splice, or device box. Each conductor, connection device, terminal, clamp, or internal support element consumes a specific volume in cubic inches or cubic centimeters. The sum of these individual volumes must not exceed the total volume marked on the box, thereby ensuring the integrity of the insulations and proper heat dissipation.

## Box Fill Calculation Formula

Compliance with fill requirements is evaluated using the fundamental inequality that compares the total equivalent volume of all elements with the maximum volume of the selected box.

> **V_total equivalent = Σ (Number of conductors × Unit volume) + Device volume + Internal accessory volume ≤ V_box**

| Variable | Description | Unit |
| :--- | :--- | :--- |
| `V_total equivalent` | Total calculated volume occupied by all components inside the box | cm³ / in³ |
| `Number of conductors` | Number of conductors of a given gauge and insulation type, counted according to NEC counting rules | dimensionless |
| `Unit volume` | Volume assigned to an individual conductor based on its gauge, taken from NEC Table 314.16(A) | cm³ / in³ |
| `Device volume` | Equivalent volume assigned to each connection device (switch, receptacle), calculated as 2 times the unit volume of the largest conductor connected to the device | cm³ / in³ |
| `Internal accessory volume` | Volume assigned to internal clamps, support screws, or connectors entering the box, based on the largest conductor present | cm³ / in³ |
| `V_box` | Total internal volume of the box, usually molded or stamped on the box body by the manufacturer | cm³ / in³ |

## Conductor Equivalent Volume Table

The volumes assigned to each conductor are taken from the standard NEC Table 314.16(A), expressed here in cubic inches and their conversion to cubic centimeters.

| Conductor Size (AWG/kcmil) | Unit Volume per Conductor (in³ / cm³) |
| :--- | :--- |
| 18 AWG | 1.50 in³ / 24.6 cm³ |
| 16 AWG | 1.75 in³ / 28.7 cm³ |
| 14 AWG | 2.00 in³ / 32.8 cm³ |
| 12 AWG | 2.25 in³ / 36.9 cm³ |
| 10 AWG | 2.50 in³ / 41.0 cm³ |
| 8 AWG | 3.00 in³ / 49.2 cm³ |
| 6 AWG | 5.00 in³ / 81.9 cm³ |

The counting rules establish that each conductor that originates outside the box and terminates inside counts as one. Conductors passing through the box without being cut count as one. The equipment grounding conductor, when of size 4 AWG or smaller, is counted only once regardless of how many grounding conductors enter. Internal clamps consume a volume equivalent to the largest conductor present.

## Standard Box Maximum Volume Table

Commonly used metallic or nonmetallic boxes have standardized internal volumes that the installer must respect as the upper limit of the calculation. Typical values for 4-inch square and octagonal boxes are listed below.

| Box Type and Dimensions | Maximum Internal Volume (in³ / cm³) |
| :--- | :--- |
| Square 4 × 4 × 1½" | 21.0 in³ / 344.1 cm³ |
| Square 4 × 4 × 2⅛" | 30.3 in³ / 496.5 cm³ |
| Octagonal 4 × 1½" | 15.5 in³ / 254.0 cm³ |
| Octagonal 4 × 2⅛" | 21.5 in³ / 352.3 cm³ |
| Device rectangular 3 × 2 × 2½" | 12.5 in³ / 204.8 cm³ |
| Device rectangular 3 × 2 × 3½" | 18.0 in³ / 295.0 cm³ |

## Applications

Box fill calculation is mandatory in all residential, commercial, and industrial electrical installations where junction boxes, splice boxes, or outlet boxes for luminaires are used. It applies to both alternating current and direct current systems up to 1000 nominal volts. The most relevant applications include distribution of branch circuits with multiple taps, installation of duplex receptacles in device boxes, mounting of heavy luminaires with supports that act as occupying volume, and pull boxes with large cross-section conductors.

## Regulatory Considerations

The calculation procedure is governed by Article 314 of the NEC (NFPA 70), specifically Section 314.16. This section requires that the total volume of conductors, devices, and accessories does not exceed the box volume indicated by the manufacturer. Table 314.16(A) provides unit volumes for conductors up to 6 AWG. Table 314.16(B) lists the maximum allowed volumes for standard metallic boxes. In the European and international context, although there is no identical table, the concept of enclosure fill factor follows the guidelines of the IEC 60670 series and derived local regulations. Compliance inspection verifies compatibility between the box capacity and the calculated volume, rejecting installations that require forcing conductors to close the cover.

## Calculation Example

It is required to install in a square box 4 × 4 × 2⅛ inches (internal volume 30.3 in³ / 496.5 cm³) the following elements: three cables of 12 AWG with two current-carrying conductors and a ground each, a duplex receptacle with 12 AWG conductors, and an internal clamp. The calculation proceeds as follows:

1. Identify the conductors entering the box: 3 cables × 2 current-carrying conductors = 6 current-carrying conductors of 12 AWG.
2. The 12 AWG grounding conductors in the three cables are grouped as a single grounding conductor for volume purposes.
3. Total conductors to count: 6 current-carrying + 1 ground = 7 conductors of 12 AWG.
4. Unit volume for 12 AWG per table: 2.25 in³ / 36.9 cm³ each.
5. Conductor volume: 7 × 2.25 in³ = 15.75 in³ / 7 × 36.9 cm³ = 258.1 cm³.
6. Device volume: being a receptacle with 12 AWG conductors, it is equivalent to 2 conductors of 12 AWG → 2 × 2.25 in³ = 4.50 in³ / 73.7 cm³.
7. Internal clamp volume: equivalent to the largest conductor present, in this case 12 AWG → 2.25 in³ / 36.9 cm³.
8. Total equivalent volume: 15.75 + 4.50 + 2.25 = 22.50 in³ / 368.7 cm³.
9. Comparison with the selected box volume: 22.50 in³ ≤ 30.3 in³, therefore the installation complies.

## Frequently Asked Questions (FAQ)

### What is the maximum total volume allowed for a 4 × 1½ inch octagonal box according to the NEC?
The maximum internal volume marked on a standard 4 × 1½ inch octagonal box is 15.5 in³ / 254.0 cm³, and this value must not be exceeded in the fill calculation.

### How many 14 AWG conductors can be housed at maximum in a 21 cubic inch square box?
Considering a unit volume of 2.00 in³ / 32.8 cm³ per 14 AWG conductor and no other devices, a 21.0 in³ / 344.1 cm³ box can hold up to 10 conductors of that size.

### What equivalent volume does a single-pole switch connected with 12 AWG conductors occupy in a device box?
A single-pole switch connected to 12 AWG conductors consumes an equivalent volume of 4.50 in³ / 73.7 cm³, corresponding to twice the unit volume of 2.25 in³ / 36.9 cm³ of the 12 AWG conductor.

### How is a 10 AWG equipment grounding conductor that enters the box together with other current-carrying conductors of the same size counted?
All 10 AWG equipment grounding conductors entering the box are counted as a single 10 AWG conductor, contributing 2.50 in³ / 41.0 cm³ to the total equivalent volume.

### What is the volume required for a 6 AWG conductor in a fill calculation?
A 6 AWG conductor requires a unit volume of 5.00 in³ / 81.9 cm³, which is multiplied by the number of conductors of that size that originate outside and terminate inside the box.

### Can the internal volume of a box be exceeded if the conductors are manually compacted?
It is not permitted under any circumstances to exceed the marked internal volume, even if the conductors can be physically compressed, as this compromises thermal dissipation and mechanical integrity of the insulations.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20_EP_5.7_Annex_C.pdf
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
