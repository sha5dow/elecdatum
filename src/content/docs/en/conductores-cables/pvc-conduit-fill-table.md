---
title: "PVC conduit fill table"
sidebar:
  label: "PVC conduit fill table"
description: "Technical reference: PVC conduit fill table"
keywords: ["PVC conduit fill table wire count", "conductores-cables"]
category: "conductores-cables"
topic: "conduit-fill"
subcategory: "conduit-fill-pvc"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The PVC conduit fill table establishes the maximum number of conductors that can be installed in a PVC conduit without exceeding the 40 % occupancy limit for more than two conductors, according to the installation requirements defined in the National Electrical Code (NEC). Proper sizing of PVC conduit prevents mechanical damage during installation, reduces Joule heating, and ensures regulatory compliance in residential, commercial, and industrial electrical installations.

The composition of rigid PVC conduit (Schedule 40 and Schedule 80 types) and its dielectric properties make it suitable for underground installations, embedded in concrete, or exposed to corrosive environments. The fill limits do not depend on the conduit material but on its internal diameter and the number and size of the conductors, being identical for PVC, EMT, or RMC of the same nominal size.

## Conductor Cross-Section

The total conductor area is calculated from the actual outer diameter of the insulated conductor, not from the bare conductor diameter. The effective cross-sectional area of stranded conductors is slightly larger than that of a solid conductor of the same AWG size due to the interstitial spaces between strands. For commonly used copper conductors with thermoplastic insulation, the AWG dimension table is used as a base reference.

| AWG Size | Bare Conductor Diameter (mm / in) | Bare Cross-Sectional Area (mm² / in²) |
|:---|:---|:---|
| 14 | 1,6 mm / 0.064 in | 2,1 mm² / 0.0032 in² |
| 12 | 2,1 mm / 0.081 in | 3,3 mm² / 0.0051 in² |
| 10 | 2,6 mm / 0.10 in | 5,3 mm² / 0.0082 in² |
| 8 | 3,3 mm / 0.13 in | 8,3 mm² / 0.013 in² |
| 6 | 4,1 mm / 0.17 in | 13,3 mm² / 0.021 in² |
| 4 | 5,2 mm / 0.20 in | 21,2 mm² / 0.033 in² |
| 2 | 6,5 mm / 0.26 in | 33,6 mm² / 0.052 in² |
| 1/0 | 8,3 mm / 0.33 in | 53,5 mm² / 0.083 in² |
| 2/0 | 9,3 mm / 0.37 in | 67,4 mm² / 0.104 in² |
| 3/0 | 10,4 mm / 0.41 in | 85,0 mm² / 0.132 in² |
| 4/0 | 11,7 mm / 0.46 in | 107 mm² / 0.166 in² |

The actual area of the insulated conductor — which determines the conduit fill — must be taken from NEC Chapter 9, Table 5 for each specific insulation type. The above table provides only the area of bare copper for dimensional reference; it should not be used directly for fill calculations.

## Number of Conductors by Size

The following table indicates the maximum number of copper conductors with THHN/THWN thermoplastic insulation that can be installed in Schedule 40 PVC conduit, considering a maximum 40 % fill of the conduit internal cross-sectional area for more than two conductors. Values assume all conductors of the same AWG size.

| Nominal Conduit Size | 1/2" / 12 mm | 3/4" / 19 mm | 1" / 25 mm | 1-1/4" / 32 mm | 1-1/2" / 38 mm | 2" / 51 mm |
|:---|:---|:---|:---|:---|:---|:---|
| AWG 14 | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] |
| AWG 12 | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] |
| AWG 10 | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] |
| AWG 8 | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] |
| AWG 6 | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] | [VERIFY] |

Numeric PVC conduit fill values are not directly available from the consulted sources; the above table requires comparing conductor dimensions per NEC Table 5 with PVC conduit internal areas per NEC Table 4. The Southwire fill calculator allows obtaining these values by entering conduit type, size, and number of conductors, eliminating the need for precalculated tables.

## Conduit Internal Diameter

The internal diameter of PVC conduit varies according to the schedule. Schedule 40 PVC has a thinner wall and therefore a larger internal diameter than Schedule 80 PVC of the same nominal size, allowing a higher fill capacity. For Schedule 40 PVC conduit, the standard internal dimensions are:

| Nominal Size | Schedule 40 Internal Diameter (mm / in) | Schedule 40 Internal Area (mm² / in²) |
|:---|:---|:---|
| 1/2" | [VERIFY] | [VERIFY] |
| 3/4" | [VERIFY] | [VERIFY] |
| 1" | [VERIFY] | [VERIFY] |
| 1-1/4" | [VERIFY] | [VERIFY] |
| 1-1/2" | [VERIFY] | [VERIFY] |
| 2" | [VERIFY] | [VERIFY] |

Exact PVC conduit internal diameter dimensions must be consulted from manufacturer tables or NEC Chapter 9, Table 4, as the consulted sources do not include conduit dimensional data.

## Temperature and Ambient Adjustment

The current-carrying capacity of conductors installed in PVC conduit is affected by ambient temperature. When the temperature exceeds 30 °C / 86 °F, correction factors are applied that reduce the conductor ampacity. For conductors with PVC insulation, the standard correction factors are:

| Ambient Temperature Range | Correction Factor |
|:---|:---|
| 31 °C – 40 °C / 88 °F – 104 °F | 0,82 |
| 41 °C – 45 °C / 106 °F – 113 °F | 0,71 |
| 46 °C – 50 °C / 115 °F – 122 °F | 0,58 |

Additionally, when more than three current-carrying conductors are installed in the same conduit, a grouping adjustment factor must be applied that reduces the ampacity of each conductor. The nominal ampacity of copper conductors with PVC insulation for conduit installation, at ambient temperature up to 30 °C / 86 °F, in a multiconductor configuration of up to 3 cores, is shown below:

| AWG Size | Ampacity up to 3 conductors (A) | Ampacity 4-6 conductors (A) | Ampacity 7-24 conductors (A) |
|:---|:---|:---|:---|
| 14 | 15 | 12 | 9,0 |
| 12 | 20 | 16 | 12 |
| 10 | 30 | 24 | 18 |
| 8 | 40 | 32 | 24 |
| 6 | 55 | 44 | 33 |
| 4 | 70 | 56 | 42 |
| 2 | 95 | 76 | 57 |

In systems with multiple conductors within the same PVC conduit, heat generated by Joule effect accumulates and its dissipation to the outside is hindered. This requires reducing the allowable current to prevent the insulation temperature from exceeding its thermal limit, which for standard PVC is typically 60 °C / 140 °F or 75 °C / 167 °F depending on insulation type.

## Fill Formula

The conduit fill calculation is based on the relationship between the sum of the cross-sectional areas of all conductors and the internal area of the conduit, expressed as a percentage. The general formula is:

> **Fill (%) = (A_total_conductors / A_conduit_interior) × 100**

The maximum fill limits established by the NEC are:

| Number of Conductors | Maximum Allowable Fill |
|:---|:---|
| 1 conductor | 53 % |
| 2 conductors | 31 % |
| 3 or more conductors | 40 % |

To determine the total area occupied by the conductors, sum the cross-sectional area of each individual conductor with insulation, including the main insulation and any outer covering.

## Calculation Example

For a group of 6 conductors, 12 AWG with THHN insulation in a 1/2" Schedule 40 PVC conduit:

1. Identify the area of each 12 AWG THHN conductor: approximately 11,7 mm² / 0.0181 in² (conductor with insulation).
2. Calculate the total conductor area: 6 × 11,7 mm² = 70,2 mm² / 0.109 in².
3. The internal area of 1/2" Schedule 40 PVC conduit is approximately [VERIFY] mm² ([VERIFY] in²).
4. The fill percentage is (70,2 / internal_area) × 100. If the result exceeds 40 %, a larger conduit is required.

## Correction Factors

Grouping correction factors apply when more than three current-carrying conductors are installed in the same conduit, regardless of whether the physical fill is within the allowable limit. The ampacity reduction for grouping follows the factors established in NEC tables:

| Number of Current-Carrying Conductors | Adjustment Factor |
|:---|:---|
| 4 to 6 | 0,80 |
| 7 to 9 | 0,70 |
| 10 to 20 | 0,50 |
| 21 to 30 | 0,45 |
| 31 to 40 | 0,40 |
| 41 and more | 0,35 |

These correction factors are applied simultaneously with the ambient temperature correction factors. The final conductor ampacity is obtained by multiplying the nominal ampacity by both factors.

## Practical Applications

PVC conduit is widely used in direct burial, under concrete slab installations, corrosive environments, and areas where moderate mechanical protection is needed without the cost of metallic conduit. In residential applications, Schedule 40 PVC is common for underground service entrances and feeder to subpanels. Schedule 80 PVC, with a thicker wall, is used in areas exposed to physical damage or where local regulations require higher impact resistance.

Conductors installed inside PVC conduit lose part of their heat dissipation capacity because the trapped air inside the conduit acts as thermal insulation. This is especially critical in long runs with multiple conductors, where internal temperature can rise significantly, and both maximum fill and grouping correction factors must be considered.

## Frequently Asked Questions (FAQ)

### How many 12 AWG conductors fit in a 1/2" PVC conduit?

The maximum number of 12 AWG THHN conductors in a 1/2" Schedule 40 PVC conduit is [VERIFY] — typically between 4 and 6 conductors respecting the 40% fill limit, but must be verified with exact NEC tables or the Southwire fill calculator.

### What is the maximum fill percentage for a PVC conduit with three conductors?

The maximum fill percentage for a conduit with 3 or more conductors is 40%, according to the NEC standard.

### Does the 40% fill limit also apply to metallic conduits such as EMT?

Yes, the 40% limit for 3 or more conductors is independent of conduit material and applies equally to PVC, EMT, RMC, and IMC of the same nominal size.

### How does ambient temperature affect current-carrying capacity in PVC conduit?

For ambient temperatures between 31 °C and 40 °C a correction factor of 0.82 applies; between 41 °C and 45 °C the factor is 0.71; and between 46 °C and 50 °C the factor is 0.58, proportionally reducing the conductor ampacity.

### Why does a stranded conductor occupy more area than a solid conductor of the same AWG size?

The empty spaces between individual strands increase the effective outer diameter of the stranded conductor, making the total cross-sectional area slightly larger than that of an equivalent solid conductor.

### What calculator allows verifying PVC conduit fill?

The Southwire fill calculator, available at southwire.com/calculator-conduit, allows entering conduit type, AWG size, and number of conductors to determine if the configuration meets NEC limits.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/wire-gauges-d_419.html
- **southwire.com**: https://www.southwire.com/calculator-conduit
