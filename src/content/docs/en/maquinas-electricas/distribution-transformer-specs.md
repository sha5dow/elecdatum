---
title: "Distribution transformer specifications"
sidebar:
  label: "Distribution transformer specifications"
description: "Technical reference: Distribution transformer specifications"
keywords: ["distribution transformer specifications kVA", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "distribution-transformer"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The distribution transformer is the equipment responsible for the final voltage reduction in an electrical network, delivering power at the consumer's utilization level. It typically operates between primary voltages of 2.3 kV to 35 kV and secondary voltages of 120/240 V, 230/400 V or similar, with nominal power ratings that rarely exceed 5000 kVA and commonly remain below 200 kVA.

Operation is based on electromagnetic induction: an alternating current in the primary winding generates a varying magnetic flux that induces a voltage in the secondary winding. The relationship between voltages, currents, and number of turns is described by the fundamental formula of the ideal transformer.

> **U₁ / U₂ = N₁ / N₂ = I₂ / I₁**

| Variable | Quantity | Unit |
| --- | --- | --- |
| U₁ | Voltage in primary winding | V |
| U₂ | Voltage in secondary winding | V |
| N₁ | Number of turns in primary | – |
| N₂ | Number of turns in secondary | – |
| I₁ | Current in primary | A |
| I₂ | Current in secondary | A |

## Classification
Distribution transformers are grouped according to:

| Criterion | Types |
| --- | --- |
| Mounting location | Pole, pad‑mounted, underground vault |
| Insulation type | Liquid‑immersed (mineral oil, esters), dry type |
| Number of phases | Single‑phase, three‑phase |
| Voltage class | 2.3 kV up to 35 kV (typically 11 kV – 50 Hz or 13.8 kV – 60 Hz) |
| Basic impulse insulation level (BIL) | 30 kV to 150 kV depending on voltage class |

## Nominal Ratings (kVA)
The apparent power rating is expressed in kVA because internal losses (core and copper) depend on voltage and current, not on the power factor of the load. In the field, a 50 kVA transformer at 240 V delivers 208.3 A at full load, a value that sizes protections and conductors. Standardized ranges span from 0.05 kVA to 5000 kVA, with those below 200 kVA being the most common for public distribution.

## Full Load Current

### Single‑Phase Transformer

| Nominal Rating (kVA) | Full Load Current (A) at 120 V | Full Load Current (A) at 240 V | Full Load Current (A) at 480 V |
| --- | --- | --- | --- |
| 0.05 | 0.42 | 0.21 | 0.10 |
| 0.075 | 0.63 | 0.31 | 0.16 |
| 0.1 | 0.83 | 0.42 | 0.21 |
| 0.15 | 1.25 | 0.63 | 0.31 |
| 0.25 | 2.08 | 1.04 | 0.52 |
| 0.5 | 4.17 | 2.08 | 1.04 |
| 0.75 | 6.25 | 3.13 | 1.56 |
| 1 | 8.33 | 4.17 | 2.08 |
| 1.5 | 12.5 | 6.25 | 3.13 |
| 2 | 16.7 | 8.33 | 4.17 |
| 3 | 25 | 12.5 | 6.3 |
| 5 | 41.7 | 20.8 | 10.4 |
| 7.5 | 62.5 | 31.3 | 15.6 |
| 10 | 83.3 | 41.7 | 20.8 |
| 15 | 125 | 62.5 | 31.3 |
| 25 | 208 | 104.2 | 52.1 |
| 37.5 | 313 | 156.3 | 78.1 |
| 50 | 417 | 208.3 | 104.2 |
| 75 | 625 | 313 | 156 |
| 100 | 833 | 417 | 208 |
| 167 | 1392 | 696 | 348 |
| 200 | 1667 | 833 | 417 |
| 250 | 2083 | 1042 | 521 |

### Three‑Phase Transformer

| Nominal Rating (kVA) | Full Load Current (A) at 240 V | Full Load Current (A) at 480 V |
| --- | --- | --- |
| 3 | 7.2 | 3.6 |
| 6 | 14.4 | 7.2 |
| 9 | 21.7 | 10.8 |
| 15 | 36.1 | 18.0 |
| 22 | 53.0 | 26.5 |
| 30 | 72.2 | 36.1 |
| 45 | 108 | 54.1 |
| 75 | 180 | 90.2 |
| 112.5 | 271 | 135 |
| 150 | 361 | 180 |
| 225 | 541 | 271 |
| 300 | 722 | 361 |
| 500 | 1203 | 601 |
| 750 | 1806 | 903 |

## Turns Ratio
The turns ratio sets the voltage and current levels. For example, a transformer with N₁ = 500 turns in the primary and N₂ = 3000 turns in the secondary, supplied with 230 V at the primary, delivers at the secondary terminals:

> **U₂ = U₁ × (N₂ / N₁) = 230 V × (3000 / 500) = 1380 V = 1.38 kV**

This same principle allows calculating the primary current given the secondary load, maintaining constant apparent power in an ideal transformer.

## Factors Affecting Nominal Rating
At full load, the total losses of a 100 kVA transformer typically represent between 1% and 3% of its nominal power, and are the determining factor of its heating.
- **Core losses (constant):** depend on voltage and frequency, present even at no load.
- **Winding losses (variable):** proportional to I²R, increase with the square of the load current.
- **Cooling system:** distribution transformers are designed to operate at maximum efficiency around 50% of their load, with a standard ambient temperature of 40 °C / 104 °F. For every increase of 6 °C / 10.8 °F above the thermal limit of the insulation, the service life is halved.
- **Voltage regulation:** minimized with small leakage reactances, which improves efficiency at reduced loads.

## Frequently Asked Questions (FAQ)

### Why are distribution transformers rated in kVA and not kW?
Transformers of 50 kVA, 1000 kVA, or any other capacity are defined in kVA because their losses depend on voltage and current, regardless of the load power factor; thus, at rated voltage and current with zero power factor, the equipment delivers 0 kW but still transfers its nominal apparent power of 100% kVA.

### What is the maximum rating a distribution transformer can have?
Although usual values are below 200 kVA, some standards allow equipment up to 5000 kVA to be classified as distribution transformers, especially in large industrial or commercial complexes.

### How is the full load current calculated in a single‑phase transformer?
For a single‑phase 50 kVA transformer connected to 240 V, the rated current is obtained as I = (50 × 1000) / 240 = 208.3 A. In three‑phase, it is additionally divided by √3 (≈1.732) for line voltage.

### At what load level does a distribution transformer reach its maximum efficiency?
It reaches maximum efficiency typically around 50% of its rated load, since at that point the fixed core losses equal the variable copper losses.

### What BIL value corresponds to a 15 kV transformer?
A 15 kV class distribution transformer typically has a basic impulse insulation level (BIL) of 95 kV or 125 kV, ensuring withstand against switching surges and lightning discharges.

### What turns ratio is used in a typical residential service?
In North America, a common ratio is 14 400 V to 120/240 V, which is approximately 120:1 between primary and secondary; in 50 Hz systems, 11 000 V to 230/400 V is a frequent configuration.

## Sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/transformer-d_1398.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-rating/

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/transformer-d_1398.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-rating/
