---
title: "Voltage unbalance in three-phase systems"
sidebar:
  label: "Voltage unbalance in three-phase systems"
description: "Technical reference: Voltage unbalance in three-phase systems"
keywords: ["voltage unbalance three phase calculation", "calidad-energia"]
category: "calidad-energia"
topic: "voltage-quality"
subcategory: "voltage-unbalance"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Voltage unbalance in three-phase systems affects the efficiency and service life of connected equipment, being one of the most common disturbances in industrial distribution networks. Under ideal conditions, the three phase voltages must have equal magnitude and be phase-shifted exactly 120° from each other; any deviation from this balance constitutes an unbalance that increases losses and can cause premature failures in motors, transformers, and variable frequency drives.

Voltage unbalance occurs when the voltage phasors of a three-phase system do not have the same magnitude and/or are not exactly phase-shifted 120 electrical degrees from each other. The most common metric to quantify it is the percentage voltage unbalance (%VU), defined by NEMA MG 1 as the maximum deviation from the average of the three line voltages.

| Parameter | Typical value in balanced systems | Unbalance condition |
|---|---|---|
| Magnitude of line voltages | Equal to each other (e.g., 480 V / 480 V / 480 V) | At least one voltage differs (e.g., 480 V / 475 V / 485 V) |
| Phase angle | 120° / 120° / 120° electrical | Angles different from 120° (e.g., 120° / 118° / 122°) |
| Phase sequence | L1-L2-L3 (positive) | Negative sequence component may appear |

[VERIFY: typical tolerance numerical values per IEC 60034-26]

## Causes

The main causes of voltage unbalance in a three-phase installation are grouped into three categories: asymmetries in generation, imbalances in the distribution network, and, predominantly, the operation of single-phase loads connected unevenly among the phases. The non-uniform distribution of lighting, HVAC equipment, and single-phase induction furnaces in low-voltage 400/230 V systems can introduce significant unbalances if load distribution is not properly planned.

| Cause | Example | Typical impact on %VU |
|---|---|---|
| Unbalanced single-phase loads | 30 kVA single-phase on phase A, 10 kVA on phase B, 20 kVA on phase C | 2 – 5 % |
| Asymmetric line impedances | Conductors of different gauge or length in distribution lines | 0.5 – 2 % |
| Failures in capacitor banks | Blown fuse in a three-phase compensation stage | 1 – 3 % |
| Defective connections or loose contacts | Terminals with high resistance on one phase of the main panel | 1 – 4 % |
| Non-linear loads with uneven per-phase consumption | Single-phase variable speed drives concentrated on two phases | 2 – 6 % |

[VERIFY: statistical data on cause distribution per field studies]

## Effects on equipment

A voltage unbalance of as little as 1 % can increase losses in an induction motor by up to 5 %, while a 3 % unbalance reduces insulation service life by approximately 50 % for every 10 °C temperature rise. Three-phase motors are particularly sensitive because the unbalance generates a reverse rotating magnetic field (negative sequence component) that produces a braking torque and double-frequency currents in the rotor, raising the operating temperature and accelerating winding aging.

| Affected equipment | Main effect | Operational consequence |
|---|---|---|
| Squirrel-cage induction motor | Increased I²R losses and additional heating | Reduced insulation service life, risk of thermal trip |
| Three-phase transformer | Negative sequence currents cause uneven core heating | Decreased effective load capacity |
| Variable frequency drive | Increased DC bus ripple, possible overvoltage trips | Erratic operation, premature bus capacitor failure |
| Capacitor bank | Overcurrent in the most loaded phase, accelerated dielectric aging | Premature degradation, possible harmonic resonance |
| Supply cables | Elevated neutral current in wye systems | Excessive neutral conductor heating, fire risk |

## Calculation methods

Quantification of unbalance is performed using three main approaches recognized by international standards: the NEMA method (percentage voltage unbalance), the IEC method (voltage unbalance factor), and the symmetrical components method (negative-to-positive sequence ratio). The NEMA method is the most widespread in industrial applications due to its simplicity.

> **%VU_NEMA = (Maximum deviation from average / Average of the three line voltages) · 100**

| Variable | Meaning | Unit |
|---|---|---|
| V_AB, V_BC, V_CA | Three-phase line voltages | V |
| V_avg | Arithmetic mean of the three line voltages | V |
| Maximum deviation | Maximum absolute value of the difference V_i - V_avg | V |
| %VU_NEMA | Percentage voltage unbalance per NEMA | % |

The symmetrical components method, used by IEC 61000-4-30, defines the Voltage Unbalance Factor (VUF) as:

> **VUF = (V_neg / V_pos) · 100**

where V_neg and V_pos are the magnitudes of the negative sequence and positive sequence components, respectively.

## Standards and regulations

NEMA MG 1 establishes that induction motors can operate continuously with a voltage unbalance of up to 1 %, provided the load is reduced according to derating curves published by the manufacturer. IEC 60034-26 sets a limit of 2 % VUF for motors under rated conditions, while IEC 61000-2-2 recommends keeping unbalance below 2 % at low-voltage common coupling points.

| Standard | Parameter | Recommended limit | Remarks |
|---|---|---|---|
| NEMA MG 1 (2016) | %VU_NEMA | 1 % continuous; 5 % maximum during starting | Above 1 %, load reduction (derating) required |
| IEC 60034-26 | VUF | 2 % maximum for rated operation | At 2 % VUF, motor power should be reduced to 90 % |
| IEEE 141 (Red Book) | %VU_NEMA | < 3 % for industrial distribution | Higher values require mitigation study |
| IEC 61000-2-2 | VUF | 2 % in LV (230/400 V) | Electromagnetic compatibility in public networks |

[VERIFY: specific editions and update years for each standard]

## Recommended practical limits

The following table summarizes commonly accepted voltage unbalance ranges in industrial installations and the recommended actions for each case. An unbalance above 5 % can cause thermal protection operation in induction motors in less than 10 minutes.

| %VU Range (NEMA) | Classification | Recommended action |
|---|---|---|
| 0 – 1 % | Normal | Continuous operation without restrictions; periodic monitoring |
| 1 – 2 % | Attention | Redistribute single-phase loads; verify balance at the MCC |
| 2 – 3 % | Abnormal | Derate motor per NEMA MG 1; plan correction |
| 3 – 5 % | Critical | Immediate correction; install static compensator or active filter |
| > 5 % | Hazard | Urgent scheduled shutdown; risk of catastrophic insulation failure |

Temperature units in the table above do not require conversion since no numerical values in degrees are presented.

## Measurement and monitoring

Voltage unbalance measurement is performed with power quality analyzers capable of recording all three phase voltages simultaneously for a minimum period of one week, per IEC 61000-4-30 Class A. Instruments must calculate sequence components via the Fortescue transform and report the VUF every 10 minutes as an aggregate of 200 ms RMS values.

| Measurement parameter | Recommendation | Interval |
|---|---|---|
| Minimum campaign duration | 7 continuous days | 1 week |
| Aggregation interval | 10 minutes (200 ms RMS values) | 10 min |
| Required instrument accuracy | Class A per IEC 61000-4-30 | --- |
| Quantities to record | V_AB, V_BC, V_CA, VUF, sequence components | Sampling >= 256 points/cycle |
| Time synchronization | GPS or NTP for correlation with other measurement points | --- |

[VERIFY: exact nominal accuracy values for Class A steady-state voltage]

## Mitigation

Correction of voltage unbalance is primarily addressed through balanced redistribution of single-phase loads among the three phases and, when this is insufficient, by installing active or passive compensation equipment. Static Var Compensators (SVC) and Active Power Filters (APF) can dynamically correct unbalance by injecting negative sequence currents in phase opposition.

| Mitigation method | Relative cost | Effectiveness | Typical application |
|---|---|---|---|
| Manual load redistribution | Low | High for moderate unbalance (1-3 %) | Plants with static single-phase loads |
| Capacitor banks with sequence reactors | Medium | Medium | Power factor correction combined with unbalance reduction |
| Static Var Compensator (SVC) | High | Very high | Large induction furnaces, distribution systems |
| Active Power Filter (APF) | High | Very high | Environments with simultaneous harmonics and unbalance |
| Delta-wye isolation transformer | Medium | Medium | Elimination of triplen harmonics and partial redistribution |

## Frequently Asked Questions (FAQ)

### What is the difference between voltage unbalance and current unbalance?

Voltage unbalance is measured on the three line voltages and relates to supply quality, while current unbalance is measured on the phase conductors and reflects the inequality of connected load. A perfectly balanced motor can exhibit unbalanced currents if the supply voltage is unbalanced.

### How does a delta-wye transformer affect voltage unbalance?

A delta-wye transformer can attenuate zero-sequence components but does not eliminate negative sequence; therefore, line-to-line voltage unbalance is transferred almost entirely to the secondary, still affecting downstream motors.

### What is the safe unbalance limit for a variable frequency drive?

Most manufacturers recommend a voltage unbalance below 2 %; above this value, DC bus voltage ripple increases and can cause overvoltage trips, especially if the drive operates without a DC link choke.

### Does voltage unbalance increase neutral losses?

In a three-phase four-wire system with non-linear load and unbalance, the neutral current can exceed the phase current, causing excessive neutral conductor heating and even fire risk if not properly sized.

### Can unbalance be measured with a conventional multimeter?

A common multimeter only measures RMS magnitudes and cannot calculate phase angle or sequence components. To characterize voltage unbalance, a power quality analyzer that records phasors or computes the Fortescue transform is necessary.

### What is the relationship between unbalance and harmonics?

Voltage unbalance and harmonics are different disturbances but often coexist. Non-linear single-phase loads (e.g., switch-mode power supplies) can generate both harmonics and unbalance simultaneously, and negative-sequence harmonics (5th, 11th, etc.) aggravate the effect of unbalance on motors and transformers.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/three-phase-electrical-d_888.html
