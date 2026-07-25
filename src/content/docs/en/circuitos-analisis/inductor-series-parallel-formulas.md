---
title: "Inductor series parallel formulas"
sidebar:
  label: "Inductor series parallel formulas"
description: "Technical reference: Inductor series parallel formulas"
keywords: ["inductor series parallel formula calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "circuit-elements"
subcategory: "inductor-formulas"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

When multiple inductors are connected in the same circuit, their total or equivalent inductance depends on the connection topology. In a series configuration, the equivalent inductance is the arithmetic sum of the individual inductances, while in a parallel configuration, the reciprocal of the equivalent inductance is the sum of the reciprocals of each inductance. These rules are analogous to those for resistors in series and parallel, but with the additional complexity that, in real circuits, mutual inductance between nearby coils can significantly alter the total value. The current in series is identical for all inductors and the total voltage is divided among them; in parallel, the voltage is common and the current divides among each branch.

## Inductors in Series

In a series connection, the equivalent inductance **L<sub>eq</sub>** is the direct sum of the individual inductances of each magnetically uncoupled inductor. The formula for *n* inductors is:

> **L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub> + ... + L<sub>n</sub>**

Where each **L<sub>i</sub>** represents the inductance of the i-th inductor, expressed in henries (H). The electric current flowing through each component is exactly the same, while the total voltage drop across the terminals of the set equals the sum of the individual voltage drops.

| Number of inductors | Individual value (metric) | Individual value (equivalent imperial) | Series equivalent inductance |
|---|---|---|---|
| 2 | 10 mH each | 10 mH / 0.01 H | 20 mH / 0.02 H |
| 3 | 4,7 µH each | 4,7 µH / 4.7×10⁻⁶ H | 14,1 µH / 1.41×10⁻⁵ H |
| 4 | 1 H each | 1 H / 1 H | 4 H / 4 H |

## Inductors in Parallel

For inductors connected in parallel without magnetic coupling, the reciprocal of the equivalent inductance is the sum of the reciprocals of the individual inductances. The general expression for *n* inductors is:

> **1 / L<sub>eq</sub> = 1 / L<sub>1</sub> + 1 / L<sub>2</sub> + 1 / L<sub>3</sub> + ... + 1 / L<sub>n</sub>**

In the particular case of two inductors, the formula simplifies to:

> **L<sub>eq</sub> = (L<sub>1</sub> × L<sub>2</sub>) / (L<sub>1</sub> + L<sub>2</sub>)**

In this configuration, the voltage applied to each inductor is identical, while the total current is divided among the different branches inversely proportional to the inductance of each.

| Configuration | Inductor 1 (metric) | Inductor 2 (metric) | Parallel equivalent inductance |
|---|---|---|---|
| 2 equal | 100 mH / 0.1 H | 100 mH / 0.1 H | 50 mH / 0.05 H |
| 2 different | 10 µH / 1×10⁻⁵ H | 20 µH / 2×10⁻⁵ H | 6,67 µH / 6.67×10⁻⁶ H |
| 3 equal | 30 mH / 0.03 H | 30 mH / 0.03 H | 10 mH / 0.01 H |

## Mutual Inductance in Series and Parallel Configurations

When inductors are physically close, the magnetic flux of one can link the turns of another, generating a mutual inductance **M** that modifies the total inductance. In series, if the fields reinforce each other (additive polarity), the equivalent inductance increases; if they oppose each other (subtractive polarity), it decreases. For two coupled inductors in series, the formula is:

> **L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> ± 2M**

Where the positive sign corresponds to additive series connection and the negative sign to subtractive series. In parallel, the effect of **M** is more complex and its contribution depends on the coupling coefficient and the relative orientation of the windings. The coupling coefficient *k* relates the mutual inductance to the self-inductances as:

> **M = k √(L<sub>1</sub> × L<sub>2</sub>)**

With *k* ranging between 0 (no coupling) and 1 (perfect coupling).

| Coupling type | L<sub>1</sub> (metric) | L<sub>2</sub> (metric) | k | M | L<sub>eq</sub> additive series |
|---|---|---|---|---|---|
| No coupling | 10 mH / 0.01 H | 10 mH / 0.01 H | 0 | 0 mH / 0 H | 20 mH / 0.02 H |
| Partial coupling | 10 mH / 0.01 H | 10 mH / 0.01 H | 0,5 | 5 mH / 0.005 H | 30 mH / 0.03 H |
| Perfect coupling | 10 mH / 0.01 H | 10 mH / 0.01 H | 1 | 10 mH / 0.01 H | 40 mH / 0.04 H |

## Electrical Behavior and Applications

In a series circuit, the same current flows through all inductors, making them ideal for applications where increasing the total inductance is required without modifying the current capacity. This configuration is frequently used in passive filters and in input stages of power supplies to attenuate high-frequency noise.

In parallel, each inductor supports the same voltage, but the current divides, allowing handling of higher total currents than a single inductor could support. It is used in multi-phase DC-DC converters and in charging circuits where energy needs to be distributed among multiple branches to reduce heating losses.

## Frequently Asked Questions (FAQ)

### Is the formula for series inductors the same as for series resistors?
Yes, the equivalent inductance of series inductors without magnetic coupling is calculated exactly the same as the equivalent resistance of series resistors: by summing the individual values. The fundamental difference is that inductors can exhibit mutual inductance, which has no direct analog in pure resistors.

### Why is the equivalent inductance in parallel less than the smallest individual inductance?
As with resistors in parallel, adding more paths for current reduces the total opposition to current change. The reciprocal of the inductance (similar to admittance) is summed, which mathematically produces an equivalent value lower than the smallest component.

### What happens if I connect two inductors in parallel with very different values?
The equivalent inductance approaches the value of the smallest inductor. For example, a 1 mH inductor in parallel with a 100 mH inductor yields approximately 0,99 mH. The branch with lower inductance dominates the overall response because it offers less opposition to current change.

### How does mutual inductance affect the total inductance?
Mutual inductance can increase or decrease the total inductance depending on the relative orientation of the magnetic fields. In additive series it adds 2M, in subtractive series it subtracts 2M. In parallel configurations, the effect is more complex and requires knowing the coupling coefficient and the geometric arrangement of the coils.

### Can inductors be combined in series and parallel in the same circuit?
Yes, it is common to find mixed series-parallel combinations. The analysis procedure consists of reducing the circuit in stages: first calculate the equivalent inductance of the parallel subgroups, then add the result with the series inductors. If there is magnetic coupling between coils of different subgroups, the calculation requires applying mesh analysis with inductance matrices.

### How does the stored energy differ between series and parallel?
The total energy stored in a set of inductors is always the sum of the energies stored in each one, regardless of the connection. However, for the same applied voltage, a parallel configuration can store more energy than a series configuration because the lower equivalent inductance allows higher currents in transient conditions.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/inductance-serial-parallel-connections-d_1882.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-15/series-and-parallel-inductors/
- **electrical4u.com**: https://www.electrical4u.com/series-and-parallel-inductors/
