---
title: "Cable tray fill calculation"
sidebar:
  label: "Cable tray fill calculation"
description: "Technical reference: Cable tray fill calculation"
keywords: ["cable tray fill calculation NEC", "conductores-cables"]
category: "conductores-cables"
topic: "conduit-fill"
subcategory: "cable-tray-fill"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Cable tray fill is a fundamental parameter in the design of electrical raceway systems, defining the maximum number of conductors that can be installed inside a tray. It is expressed as the percentage of the total cross-sectional area of the tray occupied by cables. The U.S. National Electrical Code (NEC), in Article 392, establishes fill limits to ensure adequate heat dissipation and prevent mechanical damage during installation.

## Definition
Cable tray fill is the percentage ratio between the sum of the cross-sectional areas of all installed conductors and the usable cross-sectional area of the tray. This value is limited by code to preserve insulation integrity, facilitate future additions, and maintain operating temperature within safe ranges. The calculation considers the outer diameter of each cable, including its jacket or insulation, and applies to the entire length of the run.

## Applicable Standard
The primary reference is NFPA 70 (National Electrical Code, Article 392). Fill requirements vary depending on the type of tray (ladder, ventilated bottom, solid bottom) and the nature of the cables (multiconductor, single conductor, control). The authority having jurisdiction in each area may adopt the most recent edition, with the 2023 edition being current at the ANSI standard level. In industrial installations, complementary practices from organizations such as NEMA or IEC are also considered when required by the project.

## Fill Criteria
Maximum fill limits per NEC 392.22(B) are summarized below.

| Tray type | Cable type | Maximum % fill |
|---|---|---|
| Ladder or ventilated bottom | Multiconductor 2000 V or less | 40 % |
| Solid bottom | Multiconductor 2000 V or less | 50 % |
| Ladder or ventilated bottom | Single conductor 2000 V or less | 75 % (spacing ≤ one diameter) |
| Any | Signal, control or instrumentation | 50 % |

When cables of different categories coexist in the same tray, the most restrictive criterion applies. The usable area of the tray is determined by multiplying the interior width by the usable fill height, which for ladder trays is typically an equivalent height defined by the manufacturer.

## Calculation Formula
The basic expression for fill percentage is:

> **%F = (Σ (A_cable_i × N_i) / A_tray) × 100**

Where:

| Variable | Description | Unit (SI / Imperial) |
|---|---|---|
| Σ (A_cable_i × N_i) | Sum of cross-sectional areas of all cables | mm² / in² |
| A_tray | Usable cross-sectional area of the tray | mm² / in² |
| %F | Fill percentage | % |

For rectangular-section trays, the usable area is calculated as the product of the interior width and the fill height allowed according to the mechanical configuration.

## Calculation Example
It is desired to install 25 multiconductor cables rated 600 V, each with an outer diameter of 25.4 mm / 1.0 in, in a ladder tray with an interior width of 600 mm and a usable fill height of 150 mm.

1. Area of one cable: A_cable = π × (25.4 mm / 2)² = 506.7 mm² / 0.785 in².
2. Total conductor area: 25 × 506.7 mm² = 12,668 mm² / 19.63 in².
3. Usable tray area: 600 mm × 150 mm = 90,000 mm² / 139.5 in².
4. Fill percentage: (12,668 / 90,000) × 100 = 14.1 %.

The result complies well within the 40 % limit for ladder tray with multiconductor cables rated 2000 V or less. The installation is NEC compliant.

## Recommended Fill Area Table
Maximum allowable cross-sectional areas are shown for ladder and ventilated bottom trays, considering the 40 % fill criterion.

| Tray interior width (mm / in) | Usable height (mm / in) | Usable area (mm² / in²) | Maximum cable area (mm² / in²) |
|---|---|---|---|
| 300 / 12 | 150 / 6 | 45,000 / 69.8 | 18,000 / 27.9 |
| 450 / 18 | 150 / 6 | 67,500 / 104.6 | 27,000 / 41.9 |
| 600 / 24 | 150 / 6 | 90,000 / 139.5 | 36,000 / 55.8 |
| 750 / 30 | 150 / 6 | 112,500 / 174.4 | 45,000 / 69.8 |
| 900 / 36 | 150 / 6 | 135,000 / 209.3 | 54,000 / 83.7 |

For a solid bottom tray, 50 % is allowed, so the penultimate column would be multiplied by 0.50 to obtain the maximum cable area.

## Frequently Asked Questions (FAQ)
### What happens if the allowable fill percentage is exceeded?
Exceeding the limit raises conductor temperature, accelerates insulation aging, and prevents proper heat dissipation, which can lead to premature failure or code non-compliance.

### How is the outer diameter of a cable measured for calculation?
Use the nominal diameter stated by the manufacturer, which includes all insulation and jacket layers. Do not use the bare conductor diameter.

### Does the fill limit vary for medium voltage cables?
Yes, for cables rated above 2000 V, the NEC establishes different provisions, generally requiring lower fill and additional grouping considerations.

### Can cables of different sizes be mixed in the same tray?
Yes, as long as the sum of their cross-sectional areas does not exceed the maximum fill percentage and the installation conditions specific to each cable type are respected.

### Does the tray material affect the fill limit?
The NEC does not differentiate by metallic material (steel, aluminum), but the thermal conductivity of the material can influence heat dissipation capacity; however, fill percentages are the same for all metals.

### Where can the exact fill percentages per NEC be found?
The percentages and full conditions are defined in Article 392 of the NEC (NFPA 70). It is recommended to consult the locally adopted edition to verify possible amendments.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cable-loads-d_1816.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-formulas/
- **southwire.com**: https://www.southwire.com/calculators
