---
title: "Bathroom circuit code requirements"
sidebar:
  label: "Bathroom circuit code requirements"
description: "Technical reference: Bathroom circuit code requirements"
keywords: ["bathroom circuit code requirements GFCI", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "residential-code"
subcategory: "bathroom-circuits-code"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Electrical circuits in bathrooms require special ground fault protection due to the elevated risk of electrocution from the presence of water and moisture. The U.S. National Electrical Code (NEC) — in its 2023 edition — mandates GFCI (Ground Fault Circuit Interrupter) protection for all receptacles installed in bathrooms, both in dwellings and non-residential buildings. This protection interrupts the circuit when it detects a typical leakage current of 5 mA or higher, mitigating the danger of ventricular fibrillation.

## NEC 210.8 Requirements
Section 210.8 of the 2023 NEC establishes the locations where GFCI protection is mandatory for receptacles. With respect to bathrooms, the following applies:

| Occupancy Type | Receptacle Voltage and Rating | Requirement |
|---:|---:|---|
| Dwelling units | 125 V, single-phase, 15 A and 20 A | All receptacles in the bathroom must have GFCI protection [210.8(A)(1)] |
| Other than dwellings | 125 V to 250 V, single-phase up to 50 A or three-phase up to 100 A | All receptacles in the bathroom must have GFCI protection [210.8(B)(1)] |

The requirement covers the entire bathroom; it does not depend on distance to sinks, tubs, or showers. The 1.83 m / 6 ft rule applies only to sinks or tubs/showers installed **outside** a bathroom (210.8(A)(8) and (10)).

## Methods for Providing GFCI Protection
Two alternatives exist to meet the requirement:

1. **GFCI breaker in the panel:** protects the entire circuit from the load center. It must be readily accessible.
2. **GFCI receptacle:** device with integrated detection. If its load terminals are used, it can protect downstream receptacles on the same circuit.

Regardless of the method chosen, the GFCI device must be located in a **readily accessible** place [210.8].

## Measurement Distances That Generate Frequent Questions
Although the bathroom itself is not subject to a distance, other contiguous areas are. The following table summarizes the distances applicable to sinks, tubs, and showers outside a bathroom:

| Element | GFCI Application Distance |
|---:|---|
| Sink outside a kitchen or bathroom | 1.83 m / 6 ft from the inner top edge of the basin |
| Bathtub or shower pan outside a bathroom | 1.83 m / 6 ft from the outer edge |

The distance is measured along the shortest path that a power cord would follow without passing through walls, floors, ceilings, or fixed barriers (method confirmed in the 2023 NEC revision).

## Relevant Exceptions for Bathrooms
- **Bathroom exhaust fan in dwellings:** The internal receptacle of the fan does not require GFCI protection unless the manufacturer's manual specifies it [Exception 4, 210.8(A)]. This exclusion applies only to the equipment receptacle; wall receptacles in the bathroom always require GFCI.

## Applicable Standards
- **NFPA 70 – NEC 2023:** Article 210.8, which defines locations and requirements for GFCI protection in branch circuits.
- **UL 943:** Safety standard for GFCI devices in North America.
- Local regulations of each country may adopt the NEC with modifications; always verify the current code in the project's jurisdiction.

## Frequently Asked Questions (FAQ)

### What is the nominal leakage trip rating of a residential GFCI?
   A personal protection GFCI is calibrated to trip at a leakage current of 5 mA ± 1 mA (0.005 A), and must interrupt the circuit within 25 ms to 40 ms when leakage exceeds 30 mA, according to electrical safety studies.

### Is GFCI required on a receptacle that is more than 1.83 m / 6 ft from the sink inside a bathroom?
   Yes. In bathrooms, the requirement applies to all receptacles without distance limit, unlike sinks located outside a kitchen or bathroom which do use the 1.83 m / 6 ft rule.

### How many downstream receptacles can a single GFCI protect?
   A GFCI receptacle can feed up to 10 additional outlets via its load terminals, provided the sum of connected currents does not exceed the device's rated capacity (typically 15 A or 20 A).

### Do light switches in a bathroom need GFCI?
   No, NEC Article 210.8 refers exclusively to receptacles. Fixed wall switches do not require GFCI protection unless they incorporate a receptacle in the same device.

### What additional requirement does a bathroom with a hydromassage tub or jacuzzi have?
   In addition to protecting all bathroom receptacles, the dedicated circuit for the hydromassage must include GFCI protection per NEC Article 680. The 15 A or 20 A GFCI breaker must be installed more than 1.5 m / 5 ft from the inner wall of the tub.

### Is it necessary to replace GFCIs after a certain time?
   The electronic components of a GFCI degrade over time. Although there is no mandatory expiration date, it is recommended to test them monthly with the TEST button and consider replacement around 15 to 25 years of service, since up to 10% of units have been observed to fail after that period.

## References
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2750
