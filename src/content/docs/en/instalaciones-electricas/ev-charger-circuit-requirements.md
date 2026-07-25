---
title: "EV charger circuit requirements"
sidebar:
  label: "EV charger circuit requirements"
description: "Technical reference: EV charger circuit requirements"
keywords: ["EV charger circuit code requirements NEC 625", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "solar-installation"
subcategory: "ev-charger-circuit"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The circuit for an electric vehicle charger must meet specific requirements according to Article 625 of the NEC to ensure a safe and reliable installation. This article establishes the basis for conductor sizing, overcurrent protection, and continuous load considerations applicable to electric vehicle charging stations in residential, commercial, and industrial installations.

## Charging modes according to IEC 61851

The international standard IEC 61851-1 establishes four charging modes for electric vehicles, each with different characteristics and applications that determine the electrical circuit requirements.

| Mode | Phases | Maximum current | Maximum voltage | RCD protection | Typical application |
|---|---|---|---|---|---|
| Mode 1 | 1φ / 3φ | 16 A / 16 A | 250 V / 250 V (1φ) ; 480 V / 480 V (3φ) | No | Electric bicycles, scooters, trickle charging |
| Mode 2 | 1φ / 3φ | 32 A / 32 A | 250 V / 250 V (1φ) ; 480 V / 480 V (3φ) | Yes | Slow AC home charging with portable charger |
| Mode 3 | 1φ / 3φ | 70 A (1φ) / 63 A (3φ) | 250 V / 250 V (1φ) ; 480 V / 480 V (3φ) | Yes | Slow and fast AC charging at dedicated public or private stations |
| Mode 4 | DC | 500 A / 500 A | 1000 V / 1000 V | Yes | Fast DC charging at public stations |

## Branch circuit requirements

The branch circuit for electric vehicle supply equipment (EVSE) with a rated current higher than 16 A or voltage higher than 120 V must be an individual branch circuit. This means a single circuit exclusively supplies one charging device, without sharing the supply with other receptacles. An exception is permitted when multiple charging stations are managed by a power management system in accordance with NEC 625.42(A) or (B), in which case a single branch circuit may supply more than one EVSE under coordinated load control.

## Overcurrent protection

Overcurrent protection for the electric vehicle charger circuit must be sized at a minimum of 125% of the rated current of the supply equipment. This means that for an EVSE with a rated current of 40 A, the overcurrent protection device must have a capacity not less than 50 A (40 A × 1.25). The MOCP (Maximum Over-Current Protection) value establishes the maximum allowed limit for the fuse or circuit breaker, and must always be greater than or equal to the minimum circuit ampacity.

> **MOCP ≥ EVSE rated current × 1.25**

Where the EVSE rated current is obtained from the manufacturer's nameplate, and the factor 1.25 corresponds to the continuous load requirement per the NEC.

## Conductor ampacity

Conductors supplying an electric vehicle charger must have an ampacity not less than 125% of the EVSE rated current. For a 40 A device, this implies a minimum ampacity of 50 A. According to NEC Table 310.16, an 8 AWG / 8.37 mm² copper conductor with 75 °C insulation has an ampacity of 50 A, making it suitable for this application.

> **Minimum conductor ampacity = EVSE rated current × 1.25**

The final conductor size selection must consider the cable type and its operating temperature. For NM (Non-Metallic) cable, which must be calculated per the 60 °C column of Table 310.16, a 40 A EVSE requires 6 AWG / 13.3 mm², since at 60 °C the 8 AWG / 8.37 mm² cable only has an ampacity of 40 A.

## Continuous load considerations

Electric vehicle supply equipment is considered a continuous load per NEC Article 625.42. This means it is expected to operate at its rated current for three hours or more, which directly impacts circuit sizing. The 125% rule for overcurrent protection and conductor ampacity derives from this classification. Additionally, power management systems allow the EVSE load to be excluded from feeder and service conductor calculations when implemented per NEC guidelines, thus avoiding the need to upgrade the existing electrical service when installing chargers.

## Frequently Asked Questions (FAQ)

### When is an individual branch circuit required for an electric vehicle charger?

An individual branch circuit is required when the EVSE has a rated current greater than 16 A / 16 A or voltage greater than 120 V / 120 V. Below these thresholds, such as for low-power portable chargers, an exclusive circuit is not required. This provision applies in residential and commercial installations per NEC Article 625.40.

### How is the breaker size calculated for a 32 A EVSE?

For a 32 A EVSE, the breaker must be sized at 125% of the rated current: 32 A × 1.25 = 40 A. A 40 A / 40 A thermal-magnetic circuit breaker is selected as the minimum required protection. A protection device lower than this calculated value must never be used.

### What is the minimum required ampacity to supply a 48 A charger?

The minimum ampacity is 48 A × 1.25 = 60 A. A copper conductor of at least 6 AWG / 13.3 mm² is required if using cable with 75 °C insulation, or 4 AWG / 21.15 mm² if using NM cable limited to the 60 °C column of Table 310.16.

### What wire size is needed for a 40 A charger with NM cable?

NM cable of 6 AWG / 13.3 mm² is needed. Although an 8 AWG / 8.37 mm² conductor has an ampacity of 50 A at 75 °C, NM cable must be calculated per the 60 °C column of NEC 334.80, where 6 AWG / 13.3 mm² provides 55 A, sufficient for the required 50 A (40 A × 1.25). 8 AWG / 8.37 mm² at 60 °C only provides 40 A, which is insufficient.

### What is MOCP and how does it relate to the charger circuit?

MOCP (Maximum Over-Current Protection) is the maximum permitted overcurrent protection, expressed in amperes, which establishes the upper limit for the circuit fuse or circuit breaker. For an electric vehicle charger, the effective MOCP is calculated as 2.25 times the full-load current of the equipment plus other concurrent loads, but the NEC requirement establishes a practical minimum of 125% of the EVSE rated current.

### Can a 48 A EVSE be installed on a 100 A panel?

Yes, provided the total load calculation of the dwelling allows it and the panel capacity is not exceeded. The EVSE draws a continuous 48 A and requires a 60 A circuit (48 A × 1.25). With a certified power management system, the vehicle load can be managed to avoid overloading the 100 A / 100 A service, automatically adjusting the charging current according to the total installation demand.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/NEC-National-Electrical-Code-d_28.html
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/23_SOLAR_Article_625.pdf
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
