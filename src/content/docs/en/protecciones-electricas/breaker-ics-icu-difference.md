---
title: "Ics and Icu difference in breakers"
sidebar:
  label: "Ics and Icu difference in breakers"
description: "Technical reference: Ics and Icu difference in breakers"
keywords: ["circuit breaker Ics Icu difference explanation", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breaker-standards"
subcategory: "breaker-icu-ics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Low-voltage circuit breakers are selected based on their ability to safely interrupt short-circuit currents. Two fundamental parameters define this behavior: **Icu** (ultimate breaking capacity) and **Ics** (service breaking capacity), established by IEC 60947-2. Understanding the difference between them is essential to ensure installation protection and service continuity after a fault.

## Icu: Ultimate Breaking Capacity

Icu is the maximum short-circuit current that the circuit breaker can interrupt once without danger to personnel or the installation, but after which the equipment may become unusable or require complete inspection. This value is verified by a standardized test that includes an opening sequence (O – t – CO) without the circuit breaker needing to subsequently carry its rated current. Icu is expressed in kA RMS and is the value typically listed in device characteristics as "breaking capacity." For example, a typical domestic MCB has an Icu of **6 kA / 6 kA**, while an industrial molded case circuit breaker can reach **50 kA / 50 kA** or more.

## Ics: Service Breaking Capacity

Ics is the short-circuit current that the circuit breaker can interrupt repeatedly (generally three test cycles) and then continue to operate normally, i.e., carry its rated current without permanent damage. The standard requires that after interrupting Ics, the circuit breaker passes a heating test and a dielectric withstand test. Ics values are usually indicated as a percentage of Icu: **25%, 50%, 75%, or 100%** depending on the device design. A circuit breaker with Ics = 100% Icu can be reused without restrictions after a short-circuit trip.

## Fundamental Differences Between Icu and Ics

The essential difference lies in the **state of the circuit breaker after tripping**. Icu is a design value that guarantees integrity against the fault but assumes the circuit breaker may be sacrificed; Ics, on the other hand, ensures continuity of service. Ics never exceeds Icu, and in many industrial devices the Ics/Icu ratio reaches at least **50%**, while in the residential sector it may be **25%** or lower.

## Typical Numerical Relationship Between Icu and Ics

Manufacturers test and declare Icu/Ics pairs according to the category of use and service voltage. The following table shows typical values for low-voltage circuit breakers in 400 V AC networks:

| Type of circuit breaker | Typical Icu (400 V AC) | Typical Ics (400 V AC) | Ics / Icu ratio |
|------------------------|------------------------|------------------------|----------------|
| Residential MCB | 6 kA / 6 kA | 6 kA / 6 kA | 100 % |
| Commercial MCB | 10 kA / 10 kA | 7.5 kA / 7.5 kA | 75 % |
| Standard Molded Case Circuit Breaker (MCCB) | 36 kA / 36 kA | 18 kA / 18 kA | 50 % |
| High-performance MCCB | 50 kA / 50 kA | 50 kA / 50 kA | 100 % |
| Open frame circuit breaker (ACB) | 85 kA / 85 kA | 85 kA / 85 kA | 100 % |

Ics can be equal to Icu when the circuit breaker design allows the arc energy to be dissipated without damage. In applications where continuity is critical, circuit breakers with Ics = Icu are selected.

## Implications for Design and Safety

Choosing a circuit breaker based solely on Icu may be insufficient without analyzing the actual short-circuit level at the installation point and the need for reuse after a fault. Selectivity and protection of persons require that, even after clearing a fault current equal to Ics, the circuit breaker continues to protect against subsequent overloads and short circuits. Therefore, the designer must:

1. Calculate the maximum short-circuit current at the circuit breaker terminals (Isc max).
2. Select a circuit breaker with **Icu ≥ Isc max**.
3. Verify that the **Ics** is adequate for the restoration and maintenance strategy of the installation.

## Frequently Asked Questions (FAQ)

### What does it mean for a circuit breaker to have Ics = 50% of Icu?
It means that after interrupting a current of **50% of the Icu value**, the circuit breaker continues to function correctly and can be reused without special maintenance.

### Is it mandatory for Ics to be equal to 100% of Icu in residential installations?
It is not mandatory; a domestic circuit breaker of **6 kA** usually has Ics equal to **100% of its Icu** for safety and simplicity reasons, but lower values are accepted in other sectors.

### What is the minimum Ics value required by IEC 60947-2?
The standard establishes that, unless otherwise specified, Ics must be at least **25% of Icu**, although in practice many manufacturers offer **50% or more**.

### Can a circuit breaker be reused after interrupting its Icu?
After interrupting the **Icu**, the circuit breaker may have suffered internal damage that prevents its subsequent operation; the standard does not require it to remain operational.

### In which applications is Ics = 100% of Icu required?
It is required in critical applications where prolonged downtime cannot be tolerated, such as data centers, hospitals, or continuous industrial processes, with circuit breakers reaching **85 kA** Icu and Ics.

### How is Ics verified during type tests?
A sequence of three opening and closing operations at the declared current is performed, followed by a heating test at rated current, ensuring that the circuit breaker continues to operate within the **specified thermal limits**.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-iec-enclosure-standards-d_920.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-circuit-breaker-operation-and-types-of-circuit-breaker/
