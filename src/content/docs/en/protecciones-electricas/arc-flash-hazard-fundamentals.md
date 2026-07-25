---
title: "Arc flash hazard fundamentals"
sidebar:
  label: "Arc flash hazard fundamentals"
description: "Technical reference: Arc flash hazard fundamentals"
keywords: ["arc flash hazard basics NFPA 70E", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "arc-flash"
subcategory: "arc-flash-basics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

An arc flash is the light and heat generated during an arc fault in an electrical system, reaching temperatures up to 19 400 °C / 35 000 °F at the arc terminals and releasing energy capable of vaporizing metallic conductors in milliseconds.

## Arc Flash Temperature and Energy
The plasma temperature at the arc core exceeds 19 400 °C / 35 000 °F, while incident energy can surpass 40 cal/cm² in low-voltage systems with high fault current.

| Parameter | Typical Value |
|---|---|
| Maximum terminal temperature | 19 400 °C / 35 000 °F |
| Incident energy in typical arc (480 V, 65 kA) | 40 cal/cm² – 100 cal/cm² |
| Maximum ultraviolet radiation | ~170 nm (far UV) |
| Instantaneous power (controlled 85 J arc) | 24 000 000 W |
| Radiant heat perceived at 1 m | Over 5 W/cm² (second-degree burn in 0.1 s) |

## Formation and Propagation Mechanism
The arc initiates when the applied voltage ionizes the air or an insulating medium between conductors, and it is sustained because the plasma resistance decreases as temperature increases—a phenomenon known as negative incremental resistance. This causes an uncontrolled current increase until a circuit element fuses, a breaker trips, or the separation distance extinguishes the arc. Arc formation does not require physical contact if the voltage exceeds the dielectric breakdown value of the medium; in medium- and high-voltage systems (>1000 V), the risk of remote initiation is high.

## Effects of Arc Flash and Arc Blast
Arc flash and arc blast are simultaneous phenomena but with distinct consequences:

| Effect | Characteristic |
|---|---|
| Thermal radiation | Severe burns at a distance; tissues absorb infrared and ultraviolet energy almost instantly |
| Supersonic shock wave | Pressures >100 kPa (14.5 psi) capable of collapsing structures and hurling fragments |
| Vaporized metal expansion | Copper expands 67 000 times its volume when transitioning from solid to gas, generating a mechanical explosion |
| Projectile ejection | Molten metal droplets and shrapnel travel at high velocity |
| Noise | Sound levels exceeding 160 dB, with risk of eardrum rupture |

## Risk Analysis per NFPA 70E
Standard NFPA 70E establishes the methodology for assessing arc flash risk in workplaces, classifying personal protective equipment (PPE), and defining safety distances. The analysis is based on calculating incident energy (cal/cm²) at a given working distance and determining the arc flash boundary, where incident energy reaches 1.2 cal/cm² (second-degree burn threshold). PPE is grouped into categories from 1 to 4, where category 4 requires clothing similar to a bomb suit, capable of withstanding energies above 40 cal/cm².

| NFPA 70E Category | Maximum Incident Energy (cal/cm²) | Typical Required Protection |
|---|---|---|
| 1 | 4 | Treated cotton clothing, face shield |
| 2 | 8 | Flame-resistant underwear, arc-rated shirt and pants |
| 3 | 25 | Full arc flash suit, hood, dielectric gloves |
| 4 | 40 | Multi-layer extreme protection suit, hood, arc-rated gloves |

## Arc Interruption Methods
Extinguishing the arc in switching equipment is achieved through two main approaches:

1. **High-resistance method**: the arc resistance is progressively increased (by lengthening, cooling, or splitting it) until the current drops to zero. It is typically applied in DC circuit breakers and some low- and medium-voltage AC circuit breakers.

2. **Low-resistance or zero-crossing interruption method**: exclusive to alternating current, it exploits the natural current zero crossing. At that instant, if the dielectric strength of the medium between contacts recovers faster than the recovery voltage, the arc extinguishes without reignition.

   The recovery voltage equation in an ideal lossless system is:
   > **v(t) = V · (1 − cos (t / √(L·C)))**
   
   where v is the recovery voltage, V is the voltage at the interruption instant, L is the series inductance to the fault point, and C is the shunt capacitance. The smaller the product L·C, the steeper the recovery slope and the more demanding the interruption.

Two classic theories explain the phenomenon:
- **Energy balance theory**: the arc is extinguished if the heat dissipation rate between contacts exceeds the heat generation rate, achieved by lengthening, cooling, and splitting the arc.
- **Voltage race theory**: interruption is achieved by removing ions from the space between contacts (recombination or insulator insertion) at a rate higher than the ionization produced by the recovery voltage.

## Characteristic Data Table
| Data | Value |
|---|---|
| Arc terminal temperature | 19 400 °C / 35 000 °F |
| Copper expansion factor upon vaporization | 67 000 times its volume |
| Minimum voltage with sustained arc risk | 400 V AC (standard services) |
| Non-contact initiation voltage | > 1000 V (typical laboratory and medium-voltage installation conditions) |
| Second-degree burn threshold | 1.2 cal/cm² (5 J/cm²) |
| Typical safety distance (arc flash boundary) | Varies per calculation, often between 0.5 m / 20 in and 5 m / 200 in for low-voltage panels |
| Sound level of severe arc blast | > 160 dB |
| Plasma expansion velocity | Supersonic (~ 340 m/s initial) |

## Frequently Asked Questions (FAQ)
### What is the maximum temperature reached by an arc flash?
The temperature at the arc terminals can exceed 19 400 °C / 35 000 °F, which is higher than the surface temperature of the sun.

### What is the difference between arc flash and arc blast?
Arc flash is the emission of light and radiant heat; arc blast is the supersonic shock wave and projection of molten material that accompany the same event. Protective equipment can mitigate the flash, but the blast requires safety distances and equipment design.

### At what voltage is arc flash risk considered present?
In AC systems, as low as 400 V there is enough energy to sustain a dangerous arc. Above 1000 V, the risk of non-contact initiation increases.

### What regulations govern arc flash protection in the workplace?
NFPA 70E (Standard for Electrical Safety in the Workplace) is the international reference. In Europe, it is supplemented by IEC 61482 and EN 50110.

### How is incident energy calculated in an arc flash analysis?
Methods described in IEEE 1584 and NFPA 70E are used, considering short-circuit current, protection clearing time, working distance, and electrode configuration, delivering the value in cal/cm².

### Why does copper expand so violently during an arc?
When vaporized, copper transitions from solid to gas with an expansion of 67 000 times its original volume, creating a mechanical explosion that can destroy enclosures and hurl fragments at high speed.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cheicals-hazard-rating-d_400.html
- **electrical4u.com**: https://www.electrical4u.com/arc-interruption-theory/
