---
title: "Resistors in series and parallel"
sidebar:
  label: "Resistors in series and parallel"
description: "Technical reference: Resistors in series and parallel"
keywords: ["resistors series parallel formula calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "circuit-elements"
subcategory: "series-parallel-resistors"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

In electrical circuits, two or more resistors can be connected in series or in parallel to modify the total equivalent resistance of the arrangement. The series connection adds the individual ohmic values, while the parallel connection always results in an equivalent resistance lower than the smallest of the participating resistors.

## Series Resistance

> **R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + … + R<sub>n</sub>**

| Variable | Description | Unit |
| --- | --- | --- |
| R<sub>eq</sub> | Total equivalent resistance | Ω |
| R<sub>1</sub>, R<sub>2</sub>, …, R<sub>n</sub> | Individual resistors connected in series | Ω |

In a series connection, all components share the same electric current. The total applied voltage is divided among the resistors in direct proportion to their values (voltage divider). If any resistor fails open, the entire circuit is interrupted.

## Parallel Resistance

> **1 / R<sub>eq</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + … + 1 / R<sub>n</sub>**

For the particular case of two resistors in parallel:

> **R<sub>eq</sub> = (R<sub>1</sub> · R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)**

| Variable | Description | Unit |
| --- | --- | --- |
| R<sub>eq</sub> | Total equivalent resistance | Ω |
| R<sub>1</sub>, R<sub>2</sub>, …, R<sub>n</sub> | Individual resistors connected in parallel | Ω |

In a parallel connection, the electric voltage is identical across all resistor terminals. The total supplied current divides among the branches (current divider) and the total conductance is the sum of the individual conductances. If one resistor fails open, the others continue to operate.

## Comparison of Configurations

| Characteristic | Series | Parallel |
| --- | --- | --- |
| Equivalent resistance | R<sub>eq</sub> > any R<sub>i</sub> | R<sub>eq</sub> < the smallest R<sub>i</sub> |
| Current | Same in all resistors | Divides among branches (I<sub>total</sub> = Σ I<sub>i</sub>) |
| Voltage | Divides (V<sub>total</sub> = Σ V<sub>i</sub>) | Same across all resistors |
| Equivalent conductance | G<sub>eq</sub> = (1/G<sub>1</sub> + 1/G<sub>2</sub> + …)<sup>−1</sup> | G<sub>eq</sub> = G<sub>1</sub> + G<sub>2</sub> + … |
| Fault tolerance | One open interrupts the entire circuit | One open only disconnects that branch |
| Typical application | Current limiting, voltage dividers | Distribution networks, independent loads |

## Calculation Example

Three resistors of 33 Ω, 33 Ω and 47 Ω are connected to a 12 V source. Both configurations are analyzed.

**Series connection**  
R<sub>eq</sub> = 33 Ω + 33 Ω + 47 Ω = **113 Ω**  
I = 12 V / 113 Ω ≈ **0.106 A**  
Voltage drops: V<sub>1</sub> ≈ 3.5 V, V<sub>2</sub> ≈ 3.5 V, V<sub>3</sub> ≈ 5.0 V  

**Parallel connection**  
1 / R<sub>eq</sub> = 1/33 + 1/33 + 1/47 ≈ 0.0820 S → R<sub>eq</sub> = 1 / 0.0820 ≈ **12.2 Ω**  
I<sub>total</sub> = 12 V / 12.2 Ω ≈ **0.98 A**  
Branch currents: I<sub>1</sub> ≈ 0.36 A, I<sub>2</sub> ≈ 0.36 A, I<sub>3</sub> ≈ 0.26 A  

The total power dissipated in parallel is P = V · I = 12 V · 0.98 A ≈ 11.8 W, distributed among the resistors according to P = V² / R<sub>i</sub>.

## Frequently Asked Questions (FAQ)

### What is the formula for total resistance in series?
The equivalent resistance is the direct sum: R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + … + R<sub>n</sub>.

### How is the equivalent resistance of two resistors in parallel calculated?
The simplified expression R<sub>eq</sub> = (R<sub>1</sub> · R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>) is used. For more than two, the inverse of the sum of reciprocals is used.

### What current flows through each resistor in a series circuit?
In series, exactly the same current flows through each resistor, equal to the total circuit current.

### Why is the equivalent resistance in parallel smaller than the smallest resistor in the group?
By adding additional paths for current flow, the total conductance increases. Since resistance is the inverse of conductance, the equivalent value decreases and is always smaller than the smallest individual resistor.

### Can resistors be combined in series and parallel in the same circuit?
Yes, mixed networks are formed and are simplified step by step: first reduce the parallel subgroups, then add the series equivalents, repeating until a single equivalent resistance is obtained.

### How does tolerance affect the equivalent value?
Tolerance propagates according to the configuration. In series, the absolute error adds up; in parallel, the relative error of the equivalent resistance can be smaller, but the total uncertainty depends on the specific combination and the method of error propagation.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/resistance-serial-parallel-connections-d_1881.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/tools/parallel-resistance-calculator/
- **electrical4u.com**: https://www.electrical4u.com/resistances-in-series-and-resistances-in-parallel/
