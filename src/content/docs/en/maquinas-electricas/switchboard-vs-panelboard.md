---
title: "Switchboard vs panelboard comparison"
sidebar:
  label: "Switchboard vs panelboard comparison"
description: "Technical reference: Switchboard vs panelboard comparison"
keywords: ["switchboard vs panelboard comparison", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "switchgear"
subcategory: "switchboard-vs-panelboard"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Definition and Purpose

A switchboard is an assembly of switching and protective devices, generally of high capacity and robust construction, that receives power from a main source and distributes it to multiple branch circuits or to other distribution panels. A panelboard is a component that divides an electrical supply into subsidiary circuits, providing protection through thermal-magnetic circuit breakers, fuses, or residual current devices, all contained in a common dead-front enclosure. The fundamental difference lies in that the switchboard is designed for higher power applications, with main breakers of open-frame or large molded-case type, while the panelboard is oriented toward final distribution in residential, light commercial, and lower-demand industrial environments.

| Aspect | Switchboard | Panelboard |
| --- | --- | --- |
| Physical size | Large enclosure, typically rear and front access (depth >600 mm / 24 in). Construction in metal profiles with multiple connectable sections. | Compact enclosure, wall-mounted or flush-mounted (typical depth 100–150 mm / 4–6 in). Sheet metal chassis with one or two columns of breakers. |
| Maximum current rating | Up to 5000 A / 5000 A in low voltage or 2500 A / 2500 A in medium voltage (per switchgear breaker data). Main buses support high currents with multiple bars per phase. | Generally up to 1200 A / 1200 A in light commercial applications, with typical residential load centers at 100–225 A / 100–225 A. Industrial panelboards can reach 2000 A / 2000 A with bolt-on breakers. |
| Typical voltage levels | Low voltage up to 600 V / 600 V in three-phase industrial systems; medium voltage from 2.4 kV to 38 kV / 2.4 kV to 38 kV in metal-enclosed switchgear configurations. | Low voltage only: 120/240 V / 120/240 V single-phase residential; 120/208 V / 120/208 V or 277/480 V / 277/480 V three-phase commercial and light industrial. |
| Breaker connection type | Open-frame (power circuit breakers) or large molded-case breakers, draw-out or fixed installation with bolt-on connection. Access to terminals and bus bars from front or rear. | Plug-in breakers in residential and commercial load centers; bolt-on breakers in industrial and commercial applications. Two columns of breakers operable from front with dead-front cover. |
| Front / rear accessibility | Front access to instruments and controls, rear access to power cables and distribution bars. May include hinged doors covering controls, but never expose live parts during normal operation. | Fully accessible from front. When cover is removed, conductors and bus bars are visible; under service conditions, no live parts are exposed. |
| Typical applications | Main incoming services in large commercial and industrial buildings, secondary distribution in unit substations, emergency transfer, generator coupling, and transformer banks. | Branch circuit distribution in residences, commercial premises, low-consumption industrial plants, subfeed for lighting and receptacle loads. |
| Main reference standards | IEC 61439-1/-2 (Low-voltage switchgear and controlgear assemblies), IEEE C37.20.1 (Metal-enclosed low-voltage power circuit breaker switchgear), ANSI C37.20.3 for medium voltage. | IEC 61439-3 (Distribution boards intended for domestic and similar uses), NEMA PB 1 (Panelboards), UL 67 (Panelboards), UL 50/50E for enclosures. |

## Voltage Applications and Electrical Systems

| Voltage level | Switchboard | Panelboard |
| --- | --- | --- |
| Residential (120/240 V single-phase / 120/240 V) | Not applicable in this segment, except in large apartment complexes where a low-voltage switchboard feeds multiple load centers per floor. | Main load center of 100–225 A / 100–225 A with main breaker and branch circuits of 15–50 A / 15–50 A. Two-column arrangement with split bus bars for 120 V and 240 V loads. |
| Commercial (120/208 V three-phase / 120/208 V; 277/480 V three-phase / 277/480 V) | Incoming service of 600–4000 A / 600–4000 A, coupled with a dry-type distribution transformer or compact substation. Distributes to lighting, power, and HVAC panelboards via downstream main breakers. | Lighting and receptacle panelboards of 100–600 A / 100–600 A, with branch breakers of 20–100 A / 20–100 A. Power panelboards of 400–1200 A / 400–1200 A for motors and HVAC equipment. |
| Industrial low voltage (480/600 V three-phase / 480/600 V) | Main distribution switchboard of 2000–5000 A / 2000–5000 A with draw-out open-frame breakers. Feeds motor control centers (MCCs) and power panels for process loads. | Distribution panelboards of 225–1200 A / 225–1200 A with bolt-on breakers. Panelboards for lighting loads, service receptacles, and auxiliary equipment. |
| Medium voltage (2.4–38 kV / 2.4–38 kV) | Metal-enclosed switchgear configuration with SF6 or vacuum power circuit breakers, metering cells with current/potential transformers, and grounding switches. Interrupting capacity of 25–63 kA symmetrical / 25–63 kA. | Not applicable; panelboards are limited to low-voltage systems up to 600 V / 600 V per UL 67 and NEC code. |

| Bus Configuration | Number of Phases | Conductors | Typical Voltage | Switchboard / Panelboard |
| --- | --- | --- | --- | --- |
| Single-phase 2-wire | 1 phase | Phase + Neutral | 120 V / 120 V | Panelboard |
| Single-phase 3-wire | 1 phase | L1, L2 + Neutral | 120/240 V / 120/240 V | Panelboard / Switchboard (service entrance) |
| Three-phase 3-wire | 3 phases | L1, L2, L3 | 480 V / 480 V; 600 V / 600 V | Switchboard (motor power); Industrial panelboard |
| Three-phase 4-wire | 3 phases | L1, L2, L3 + Neutral | 208Y/120 V; 480Y/277 V | Switchboard and Panelboard |
| Three-phase with continuous neutral and ground | 3 phases + ground | L1, L2, L3, N, G | 208Y/120 V; 480Y/277 V | Switchboard (main service) |

## Efficiency and Thermal Losses

**General formula for total losses in switchboards and panelboards**

The power dissipated as heat by an assembly of breakers and bus bars consists of the fixed losses of each breaker plus the Joule effect losses in conductors and internal connections. This relationship is expressed by:

> **P_total = Σ(i=1→n) P_breaker,i + Σ(j=1→m) (I_j² · R_j · L_j)**

Where P_breaker,i are the unit thermal losses of each breaker as a function of its rating (tabulated values from catalog or standardized tests), I_j is the rms current flowing through bus section j, R_j is the electrical resistance of the conductor material per unit length (typically 0.015–0.035 mΩ/m / 0.015–0.035 mΩ/m for copper bus bars in low voltage), and L_j is the length of the section.

| Component | Physical Principle of Loss | Typical Percentage Loss (% of apparent power carried) | Dependence |
| --- | --- | --- | --- |
| Thermal-magnetic breaker (0–40 A) | Contact resistance in jaws and bimetal. Heat dissipated by Joule effect in internal connections. | 10 W fixed / 10 W, equivalent to 2.5%–0.25% of rated load | Constant |
| Low-voltage breaker 225 A | Contact resistance and Joule effect in trip coil. | 60 W / 60 W → 1.1% at 120 V, 0.12% at 480 V | Constant |
| Low-voltage breaker 600 A | Contact resistance, losses in magnetic trip. | 130 W / 130 W → 0.08%–0.02% | Constant |
| Low-voltage breaker 2000 A | Multiple parallel contacts, arc chamber, bolted large-section connections. | 600 W / 600 W → 0.05%–0.02% | Constant |
| Bare copper bus bar (1 m, 2000 A) | I²R Joule effect. Typical resistance 0.01 mΩ/m / 0.01 mΩ/m for 1000 mm² bar. | 40 W / 40 W → 0.003% | Proportional to square of current |
| Bolted bus bar connection | Concentrated contact resistance at the joint interface. | 5–20 W per joint / 5–20 W, variable according to torque and surface condition | Proportional to square of current |

## Thermal Management in Enclosures

**Simplified thermal load calculation for ventilation systems**

The thermal balance of the enclosure housing a switchboard or panelboard determines the internal temperature rise and the need for forced ventilation. The total thermal load is estimated as the sum of the losses of all installed equipment plus solar gain if the cabinet is located outdoors:

> **Q_total = Σ P_equipment + U · A · ΔT_solar**

The terms involved include Σ P_equipment as the sum of breaker, bus bar, and auxiliary device losses in W; U as the thermal transmittance of the enclosure (typically 1.5–3.5 W/(m²·°C) / 0.26–0.62 BTU/(h·ft²·°F) for painted sheet steel); A as the total surface area of the cabinet in m²; and ΔT_solar as the equivalent temperature difference due to solar radiation (usually 10–20 °C / 18–36 °F for unshaded outdoor enclosures).

| Size of Switchboard / Panelboard | Rated Service Current | Estimated Total Dissipated Power | Enclosure Surface Area | Heat Flow Dissipated to Environment |
| --- | --- | --- | --- | --- |
| Low-voltage switchboard (3 sections, 2000 A) | 2000 A / 2000 A | 1500–2200 W / 1500–2200 W | 12–15 m² / 12–15 m² | 100–180 W/m² / 31.7–57.1 BTU/(h·ft²) |
| Medium-voltage metal-enclosed switchboard (600 A) | 600 A / 600 A | 1000 W (main breaker only, per 600 A medium-voltage data) / 1000 W | 6–8 m² / 6–8 m² | 125–167 W/m² / 39.6–53.0 BTU/(h·ft²) |
| Industrial bolt-on panelboard 1200 A | 1200 A / 1200 A | 400–550 W / 400–550 W (main breaker plus typical branch breakers) | 2.5–3.5 m² / 2.5–3.5 m² | 114–220 W/m² / 36.1–69.7 BTU/(h·ft²) |
| Commercial plug-in panelboard 225 A | 225 A / 225 A | 150–200 W / 150–200 W (main breaker plus 12 active branch circuits) | 0.8–1.2 m² / 0.8–1.2 m² | 125–250 W/m² / 39.6–79.3 BTU/(h·ft²) |
| Residential load center 200 A | 200 A / 200 A | 80–120 W / 80–120 W | 0.4–0.6 m² / 0.4–0.6 m² | 133–300 W/m² / 42.2–95.1 BTU/(h·ft²) |

## Heating Tests and Load Cycle

Standardized test procedures (e.g., IEC 61439-1 section 10.10 and UL 891/67) require subjecting the switchboard or panelboard assembly to a current equal to the rated current of the main circuits, maintaining all branch circuits with simultaneous load, until thermal stabilization is reached. Temperature is measured by thermocouples fixed at critical points: bolted connections, breaker contacts, input/output terminals, bare bus bars, and accessible surfaces of the enclosure. A typical load cycle consists of 8 hours of continuous rated current followed by 16 hours at no load, repeated for several days until the temperature variation at any point does not exceed 1 °C/h / 1.8 °F/h. Additionally, a short-circuit test (at rated short-time withstand current) is performed to verify electromechanical integrity.

| Evaluated Component | Maximum Allowable Temperature Rise Above Ambient (40 °C / 104 °F) | Maximum Absolute Temperature | Failure Criterion |
| --- | --- | --- | --- |
| Tinned copper bolted connections | 65 °C / 117 °F | 105 °C / 221 °F | Accelerated oxidation, loss of torque, increase in contact resistance. |
| Circuit breaker contacts (molded case) | 85 °C / 153 °F | 125 °C / 257 °F | Degradation of contact material, premature bimetal trip in small thermal-magnetic breakers. |
| Bare copper bus bars | 90 °C / 162 °F | 130 °C / 266 °F | Reduction of mechanical strength, differential thermal expansion with insulating supports. |
| Connection terminals for external conductors (60 °C / 140 °F rating) | 45 °C / 81 °F | 85 °C / 185 °F | Degradation of conductor insulation, risk of phase-to-ground short circuit. |
| Class B insulation (130 °C / 266 °F) | 80 °C / 144 °F (absolute hot-spot limit) | 130 °C / 266 °F | Accelerated service life loss, cracking due to cumulative thermal embrittlement. |
| External surface of metal enclosure (accessible to operator) | 30 °C / 54 °F (metal parts not grasped but occasionally touched) | 70 °C / 158 °F | Risk of burn from accidental contact per IEC 60529 and NEC 110.26 criteria. |

## Thermal Calculation Example

A low-voltage switchboard 480Y/277 V / 480Y/277 V, 2000 A / 2000 A service, is evaluated. It contains one 2000 A open-frame main breaker and five 400 A / 400 A each branch breakers, operating at 80 % of their rated capacity in steady state. The resistance of the main copper bus bars is 0.01 mΩ/m / 0.01 mΩ/m and the total bus length is 1.5 m.

**Losses in breakers (Engineering Toolbox):**

- 2000 A / 2000 A breaker: 600 W nominal → 600 W
- 400 A / 400 A breaker: 100 W nominal → 80 W at 80 % load (losses approximately vary with I², so P_80% = 100 × (0.8)² = 64 W). 80 W will be adopted to account for real ambient temperature variation.
- Total breakers: 600 W + 5 × 80 W = 1000 W

**Losses in bus bars:**

> **P_bus bars = I² · R · L = (1600 A)² · (0.00001 Ω/m) · 1.5 m = 38.4 W**

(It is assumed that the branch breakers draw current uniformly, with an average rms current of 1600 A in the main section upstream of the taps, corresponding to the diversified demand of the five 400 A breakers at 80 %.)

**Total internal loss: P_total = 1000 W + 38.4 W ≈ 1038 W**

**Enclosure dimensions:** 1.2 m × 0.8 m × 2.2 m (width × depth × height). Surface area: 2 × (1.2×0.8 + 1.2×2.2 + 0.8×2.2) = 2 × (0.96 + 2.64 + 1.76) = 10.72 m² / 10.72 m²

**Dissipated heat flux:** q = 1038 W / 10.72 m² ≈ 96.8 W/m² / 30.7 BTU/(h·ft²)

**Evaluation of results and verification of temperature limits**

Assuming an ambient temperature of 40 °C / 104 °F and an overall heat transfer coefficient of the enclosure U = 2.5 W/(m²·°C) / 0.44 BTU/(h·ft²·°F), the average internal air temperature rise above ambient is estimated as:

> **ΔT_avg = Q_total / (U · A) = 1038 W / (2.5 W/(m²·°C) × 10.72 m²) ≈ 38.7 °C / 69.7 °F**

| Measurement Point | Estimated Temperature (°C / °F) | Allowable Limit (°C / °F) | Safety Margin (°C / °F) |
| --- | --- | --- | --- |
| Bus bar connections (2000 A breaker terminals) | 95 °C / 203 °F | 105 °C / 221 °F | 10 °C / 18 °F |
| Main contact of 2000 A breaker | 80 °C / 176 °F | 125 °C / 257 °F | 45 °C / 81 °F |
| Main bus bars in central area | 72 °C / 162 °F | 130 °C / 266 °F | 58 °C / 104 °F |
| Internal air (bulb thermometer) | 79 °C / 174 °F (40 °C amb + 38.7 °C) | No absolute limit applies; control via indirect contact | Adequate natural ventilation, forced not required |

The switchboard operates within the specified thermal limits; no premature insulation degradation or false trips due to thermal compensation in the breakers are anticipated. It is recommended to verify bolted connection torque every 12 months per the predictive maintenance program.

## Frequently Asked Questions (FAQ)

### What is the fundamental difference between a switchboard and a panelboard in terms of current capacity?
    
    A low-voltage switchboard can handle up to 5000 A / 5000 A of rated current, while a typical commercial panelboard rarely exceeds 1200 A / 1200 A, and residential load centers are limited to 100–225 A / 100–225 A.

### In what applications is a switchboard used instead of a panelboard?
    
    Switchboards are installed in commercial and industrial building incoming services where the service current exceeds 1200 A / 1200 A, whereas panelboards are intended for distribution of branch circuits for lighting, receptacles, and power in secondary panels up to 600 V / 600 V.

### How do voltage levels compare between switchboards and panelboards?
    
    A switchboard can operate at low voltage up to 600 V / 600 V and in metal-enclosed medium-voltage configurations from 2.4 kV to 38 kV / 2.4 kV to 38 kV; panelboards are limited exclusively to low voltage with a maximum of 600 V / 600 V.

### What energy efficiency differences exist between the two equipment types?
    
    Thermal losses in a 2000 A / 2000 A switchboard are estimated at around 1038 W / 1038 W (breakers + bus bars), while a 225 A / 225 A panelboard dissipates approximately 150–200 W / 150–200 W; the percentage difference is smaller in large equipment due to the lower relative resistance of the bus bars.

### What heating tests are required to certify a switchboard or panelboard?
    
    Both must undergo a temperature rise test with continuous rated current until thermal stabilization (variation less than 1 °C/h / 1.8 °F/h). The maximum temperature limits on bolted connections are 105 °C / 221 °F for switchboards and panelboards, and 85 °C / 185 °F on connection terminals for external conductors with 60 °C / 140 °F insulation.

### How is a switchboard vs panelboard selected for a new installation?
    
    The total expected load current must be calculated: if the demand exceeds 1200 A / 1200 A or rear access for maintenance of large-section bus bars and cables is required, a switchboard is specified. For lower loads with exclusively front distribution, a bolt-on or plug-in panelboard of 225–1200 A / 225–1200 A is the most compact and economical solution.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/heat-gain-equipment-d_1668.html
- **electrical4u.com**: https://www.electrical4u.com/metal-enclosed-switchgear/

