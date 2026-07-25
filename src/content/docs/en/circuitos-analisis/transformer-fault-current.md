---
title: "Fault current in transformers"
sidebar:
  label: "Fault current in transformers"
description: "Technical reference: Fault current in transformers"
keywords: ["transformer fault current calculation impedance", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "short-circuit"
subcategory: "fault-current-transformer"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The fault current at the secondary terminals of a transformer can reach values up to 20 times the rated current when the transformer impedance is 5%, making it a determining parameter for the selection of circuit breakers, fuses, and protective relays. Knowing the magnitude of this current allows proper coordination of overcurrent devices and ensures the safety of the electrical system.

## Calculation of Symmetrical Fault Current

The three-phase symmetrical fault current at the secondary terminals of a transformer is determined assuming an infinite power source on the primary, i.e., without contribution from the upstream network impedance. The magnitude depends exclusively on the transformer impedance and its rated current.

> **I_cc = I_n / Z_pu**

Where the rated current of the transformer is obtained from the apparent power and the line voltage:

> **I_n = S / (√3 × V_L)**

| Variable | Description | Unit |
|----------|--------------|--------|
| I_cc | Symmetrical fault current (three-phase short-circuit) | A / A |
| I_n | Rated line current at full load | A / A |
| Z_pu | Transformer impedance in per unit (typical value between 0.02 and 0.10) | – |
| S | Rated apparent power of the transformer | kVA / kVA |
| V_L | Rated line voltage on the side where the fault is calculated | V / V |

For asymmetrical fault currents —which include the DC component due to voltage wave offset— a multiplying factor is applied that typically ranges between 1.2 and 1.6 times the symmetrical current, depending on the X/R ratio of the transformer.

## Typical Transformer Impedances

The percentage impedance of a transformer directly determines the fault current magnitude. Standard values vary according to power and voltage class, and are standardized to facilitate protection coordination.

| Transformer Power (kVA / HP) | Primary Voltage (kV) | Typical Impedance Z% |
|-----------------------------|----------------------|----------------------|
| 15 – 50 kVA / 20 – 67 HP   | 2.4 – 13.8 kV        | 2.0 – 3.5 %         |
| 75 – 500 kVA / 100 – 670 HP | 2.4 – 34.5 kV       | 3.5 – 5.0 %         |
| 750 – 2500 kVA / 1000 – 3350 HP | 13.8 – 34.5 kV   | 5.0 – 7.0 %         |
| ≥ 3000 kVA / ≥ 4000 HP      | 34.5 – 138 kV        | 7.0 – 10.0 %        |

An impedance of 2% allows fault currents of up to 50 times the rated current, while with 10% the current is limited to 10 times the rated current. Therefore, higher power transformers usually have higher impedances to reduce mechanical stresses and demands on circuit breakers.

## Factors Affecting Fault Current

In addition to the transformer's own impedance, other system elements modify the actual short-circuit current. The influence of the source is especially significant when the short-circuit capacity on the primary is not infinite.

- **Upstream source impedance**: if the supply network has a limited short-circuit power —for example 200 MVA at 13.8 kV—, the equivalent impedance reduces the fault current on the secondary. The effect is accentuated in large transformers connected to weak systems.
- **Transformer connection type**: in a delta-wye connection, the single-line-to-ground fault current on the wye side depends on the neutral grounding and the zero-sequence impedance. This current can be lower than the three-phase symmetrical current.
- **Transformer X/R ratio**: typical X/R values between 3 and 15 influence the asymmetrical component of the fault current and the energy that protection devices must withstand.
- **Winding temperature**: a 30 °C / 86 °F increase in copper temperature increases the winding resistance by approximately 12%, slightly reducing the fault current.
- **Manufacturing tolerance**: the construction standard allows a tolerance of ±7.5% on the declared nominal impedance, which translates into a proportional variation of the fault current.

## Calculation Example

We want to know the symmetrical fault current on the secondary of a three-phase transformer of 500 kVA, ratio 13.8 kV / 480 V, with 5.0% impedance.

**Rated secondary current:**
> **I_n = 500 kVA / (√3 × 480 V) ≈ 601 A / 601 A**

**Symmetrical fault current:**
> **I_cc = 601 A / 0.05 ≈ 12.0 kA / 12.0 kA**

This value of 12 kA should be compared with the interrupting capacity of the selected circuit breakers. If the upstream source had a short-circuit power of only 100 MVA, the equivalent impedance would reduce the fault current to approximately 10.5 kA / 10.5 kA.

## Frequently Asked Questions (FAQ)

### How is the asymmetrical fault current in a transformer calculated?

The asymmetrical fault current is obtained by multiplying the symmetrical current by an asymmetry factor that, for an X/R ratio of 4.5 typical in distribution transformers, equals 1.25 and can reach 1.6 in power transformers with X/R ratios above 10.

### Why does transformer impedance limit fault current?

Transformer impedance, typically between 2% and 10%, acts in series with the load and reduces the current magnitude during a short circuit because the applied voltage must overcome the internal drop before reaching the terminals. A 1000 kVA transformer with 6% impedance limits the fault current to about 16 times the rated current.

### What happens if the source impedance is neglected in the calculation?

Ignoring the source impedance can overestimate the fault current by 5% to 15%, depending on the stiffness of the network. In industrial systems with transformers of 2500 kVA or less, the error is usually less than 10%, but in installations near large generation plants the error can exceed 20%.

### How does the delta-wye connection affect the ground fault current?

In a delta-wye connection, a single-line-to-ground fault on the wye side produces zero-sequence currents that circulate through the neutral, with magnitudes that depend on the transformer's zero-sequence impedance and the grounding resistance. The current can be between 10% and 25% lower than that of a three-phase fault in transformers with solidly grounded neutral.

### What nameplate parameters are needed to calculate fault current?

The rated power in kVA, the rated voltage on the side where the fault is analyzed, and the percentage impedance declared on the transformer nameplate are required, which is usually between 3% and 7% for distribution transformers and between 7% and 10% for power transformers.

### How is a circuit breaker selected based on transformer fault current?

The circuit breaker must have an interrupting capacity that exceeds the calculated symmetrical fault current by at least 10% and be capable of closing against the asymmetrical current. For a 1500 kVA transformer with 5.75% impedance, the expected symmetrical fault current is 20 kA, so a circuit breaker with a rating of 25 kA or higher would be selected.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/transformer-d_1398.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-9/practical-considerations-transformers/
- **electrical4u.com**: https://www.electrical4u.com/electrical-fault-calculation-positive-negative-zero-sequence-impedance/
