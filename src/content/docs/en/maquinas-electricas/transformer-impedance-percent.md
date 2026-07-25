---
title: "Transformer impedance %Z"
sidebar:
  label: "Transformer impedance %Z"
description: "Technical reference: Transformer impedance %Z"
keywords: ["transformer impedance percent Z calculation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-impedance"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## What is transformer impedance?

Transformer impedance is the total opposition that its windings present to the flow of alternating current, combining the resistance of the copper conductors with the inductive reactance caused by leakage flux. This impedance causes internal voltage drops and limits the short-circuit current.

In a real transformer, not all magnetic flux links both windings. A portion, called leakage flux, closes through the insulation and oil without crossing the core, generating self-inductance known as leakage reactance. The phasor sum of resistance and leakage reactance constitutes the transformer impedance.

## Impedance components: resistance and leakage reactance

The impedance of a transformer is composed of two parts: the ohmic resistance of the windings (R) and the leakage reactance (X). For the primary and secondary windings, the impedances are expressed as:

> **Z₁ = R₁ + jX₁**
> **Z₂ = R₂ + jX₂**

where:
- **Z₁, Z₂** = complex impedances of primary and secondary
- **R₁, R₂** = resistances of primary and secondary windings
- **X₁, X₂** = leakage reactances of primary and secondary

The internal voltage drops are described by the transformer phasor equations:

> **V₁ = E₁ + I₁R₁ + jI₁X₁**
> **V₂ = E₂ – I₂R₂ – jI₂X₂**

Both components are involved in the magnitude of the total impedance referred to one side, which determines the equipment's behavior under load variations and faults.

## Percent impedance formula (%Z)

Percent impedance expresses the transformer impedance referred to a power and voltage base, usually the rated values. It is calculated as the ratio between the voltage drop at rated current (short-circuit voltage) and the rated voltage, multiplied by 100.

> **%Z = (Vcc / Vnominal) × 100**

Equivalently, in terms of impedance in ohms per phase:

> **%Z = (Zfase × Inominal / Vfase_nominal) × 100**

where:
- **Zfase** = impedance per phase referred to the calculation side (Ω)
- **Inominal** = rated current of the respective side (A)
- **Vfase_nominal** = corresponding rated phase voltage (V)
- **Vcc** = short-circuit test voltage that circulates rated current (V)
- **Vnominal** = rated voltage of the tested winding (V)

## Typical %Z values by application

Percent impedance varies according to transformer size, voltage, and design. The following table shows common reference values in the industry.

| Transformer type | Power range (kVA) | Primary voltage class (kV) | Typical %Z (%) |
| :--- | :--- | :--- | :--- |
| Oil distribution | 25 – 500 | 12,5 – 34,5 | 2,0 – 4,5 |
| Dry type encapsulated distribution | 10 – 500 | 0,6 – 15 | 2,5 – 6,0 |
| Oil power | 500 – 10 000 | 34,5 – 230 | 5,0 – 10,0 |
| Large power | 10 000 – >100 000 | 230 – 765 | 10,0 – 20,0 |

Higher power transformers are often designed with high impedances to limit short-circuit current. Precise values depend on the manufacturing standard and should be consulted on the nameplate or in the test report.

## Example of %Z calculation

A three-phase transformer of 250 kVA, Dyn11 connection, primary voltage 13,8 kV / secondary voltage 480 V, secondary rated current 300 A. The impedance measured per phase on the secondary side is **0,0368 Ω**.

The secondary nominal phase voltage (wye) is:

**Vfase_nominal = 480 V / √3 = 277 V**

Applying the %Z formula:

> **%Z = (Zfase × Inominal / Vfase_nominal) × 100**
> **%Z = (0,0368 Ω × 300 A / 277 V) × 100 = 4,0 %**

The same result would be obtained by measuring the secondary short-circuit voltage (11,08 V line‑line) and dividing by the secondary nominal voltage.

## Frequently Asked Questions (FAQ)

### What is the typical %Z value for a 500 kVA distribution transformer?

For a 500 kVA oil distribution transformer, the typical percent impedance is **4,5 %**. This value can range between 2,5% and 5,5% depending on the design and applicable standard. The exact %Z appears on the equipment nameplate and is essential for short-circuit calculation.

### How is percent impedance related to short-circuit current?

The symmetrical short-circuit current at the secondary terminals is obtained as **Icc = Inominal / (%Z/100)**. For example, a %Z of **5 %** produces an Icc of **20 times** the rated current. If the same transformer had %Z = 2%, the fault current would be 50 times the rated current, which would force oversizing of the switchgear.

### What effects does a too low percent impedance have, for example below 2%?

A %Z below **2 %** can cause excessive short-circuit currents, overloading the windings mechanically and thermally, in addition to requiring circuit breakers with very high interrupting capacities. It also increases transient voltage drops during energization and reduces the ability to limit harmonics.

### How is the percent impedance of a transformer experimentally measured?

The short-circuit test is performed: the lower voltage winding is short-circuited and reduced voltage is applied to the other side until rated current flows. The voltage applied at that moment, expressed as a **percentage of the rated voltage of the excited side**, is directly the %Z. For example, if for a 480 V transformer **19,2 V** are needed to reach rated current, the %Z is (19,2 / 480) × 100 = **4,0 %**.

### Does percent impedance vary with operating frequency?

Yes, because the inductive reactance component is directly proportional to frequency (X = 2πfL). When going from **50 Hz** to **60 Hz**, the leakage reactance increases by approximately **20 %** for the same transformer, which increases the %Z by the same proportion if the resistance is negligible compared to the reactance.

### What is the difference between the impedance value in ohms and percent impedance?

The impedance in ohms per phase depends on the rated voltage and power, and differs depending on whether it is referred to the primary or secondary side. **%Z is a dimensionless number** that allows comparing transformers of any size and voltage. For example, a 1000 kVA transformer with Z = 0,10 Ω on the 480 V secondary will have a %Z of approximately **5,8 %**, while another 100 kVA transformer with the same Z in ohms would present a much lower %Z.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-leakage-reactance-or-impedance-of-transformer/
- **weg.net**: https://www.weg.net/institutional/ZA/en/support/resources-and-tools
