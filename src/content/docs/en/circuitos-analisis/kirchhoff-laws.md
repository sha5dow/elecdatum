---
title: "Kirchhoff's current and voltage laws"
sidebar:
  label: "Kirchhoff's current and voltage laws"
description: "Technical reference: Kirchhoff's current and voltage laws"
keywords: ["Kirchhoff current voltage law KCL KVL", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "fundamentals"
subcategory: "kirchhoff-laws"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Kirchhoff's laws, formulated by Gustav Kirchhoff in 1845, are two fundamental equalities that describe the conservation of current and energy in lumped-parameter electrical circuits. They form the basis of modern circuit analysis, allowing any linear or non-linear electrical network, in both direct current and alternating current, to be mathematically modeled.

**Kirchhoff's current law** (KCL) states that at every node in a circuit, the algebraic sum of the electric currents entering and leaving is zero, implying that the total current entering the node is exactly equal to the total current leaving it. This principle is a direct consequence of the principle of conservation of electric charge: under steady-state conditions, charge cannot accumulate or disappear at a point in the circuit. By convention, currents entering the node are considered positive and currents leaving are considered negative.

**Kirchhoff's voltage law** (KVL) states that around every mesh or closed loop in a circuit, the algebraic sum of the potential differences (voltages) is zero. This principle derives from the conservative nature of the electric field in circuits where there are no time-varying magnetic fields: the energy required to move a charge along a closed path is zero. In other words, the sum of the voltage rises (sources) equals the sum of the voltage drops (loads) in any closed loop.

## Formulas

Kirchhoff's current law is expressed mathematically for a node with n conducting branches as:

> **∑ I<sub>k</sub> = I<sub>1</sub> + I<sub>2</sub> + ... + I<sub>n</sub> = 0**

| Variable | Description | Unit |
|---|---|---|
| I<sub>k</sub> | Electric current in branch k of the node | A |
| n | Total number of branches connected to the node | — |

Kirchhoff's voltage law is expressed for a closed loop with n elements as:

> **∑ V<sub>k</sub> = V<sub>1</sub> + V<sub>2</sub> + ... + V<sub>n</sub> = 0**

| Variable | Description | Unit |
|---|---|---|
| V<sub>k</sub> | Voltage or potential difference across element k of the loop | V |
| n | Total number of elements in the closed loop | — |

## Application Example

To illustrate the current law, consider a node with five known currents and a sixth unknown current I<sub>6</sub>. The currents entering are I<sub>1</sub> = 0,1 A, I<sub>2</sub> = 0,2 A, I<sub>3</sub> = 0,1 A and the currents leaving are I<sub>4</sub> = —0,05 A, I<sub>5</sub> = —0,15 A. Applying KCL with the sign convention described:

| Current | Value | Sign (input/output) |
|---|---|---|
| I<sub>1</sub> | 0,1 A | Positive |
| I<sub>2</sub> | 0,2 A | Positive |
| I<sub>3</sub> | 0,1 A | Positive |
| I<sub>4</sub> | —0,05 A | Negative |
| I<sub>5</sub> | —0,15 A | Negative |

The resulting node equation is 0,1 A + 0,2 A + 0,1 A — 0,05 A — 0,15 A + I<sub>6</sub> = 0. Solving for I<sub>6</sub> yields I<sub>6</sub> = —0,2 A, indicating that I<sub>6</sub> is a current of 0,2 A leaving the node.

For the voltage law, consider a simple loop with a 12 V voltage source and three series resistors with drops of 3 V, 5 V, and 4 V. The algebraic sum is +12 V — 3 V — 5 V — 4 V = 0 V, satisfying KVL.

## Applications

Kirchhoff's laws are used as the main tool in two systematic methods of electrical circuit analysis. In **mesh analysis**, based on KVL, fictitious mesh currents are assigned and a voltage equation is written for each independent closed loop to solve for the actual currents. In **nodal analysis**, based on KCL, a reference node is chosen and a current equation is written for each remaining node in terms of the nodal voltages, allowing all circuit potentials to be calculated. These laws, together with Ohm's law, form the algorithmic core of most electronic circuit simulators, such as SPICE, and are applicable to any lumped-parameter network, whether linear or non-linear, active or passive.

## Frequently Asked Questions (FAQ)

### What is the difference between Kirchhoff's current law and voltage law?

The current law applies to nodes and states that the sum of currents entering and leaving is zero, based on charge conservation. The voltage law applies to closed loops and states that the sum of voltages around the loop is zero, based on energy conservation.

### Why are incoming currents considered positive and outgoing currents negative?

It is a universally adopted sign convention for nodal analysis. Consistent with it, the sum of currents with their sign must be zero. If the convention were reversed, the mathematical result would be equivalent, changing the sign of all currents.

### What limitation does Kirchhoff's voltage law have in real circuits?

KVL is exact only in the lumped-parameter model, where it is assumed that no time-varying magnetic flux links the loop. If an external time-varying magnetic field induces an electromotive force in the mesh, the sum of voltages is no longer zero and Faraday's law term must be added.

### Can Kirchhoff's laws be applied in alternating current circuits?

Yes, the laws are valid for instantaneous values of current and voltage in AC. Working in the phasor domain, the same equations apply to complex currents and voltages, forming the basis of AC circuit analysis in the sinusoidal steady state.

### What is the relationship between Kirchhoff's laws and Maxwell's equations?

Both Kirchhoff's laws are corollaries of Maxwell's equations in the low-frequency limit. KCL derives from charge conservation and KVL from the conservative electric field condition when the time variation of the magnetic field is negligible in the circuit region.

### Who was Gustav Kirchhoff and when did he formulate these laws?

Gustav Robert Kirchhoff was a German physicist who formulated these laws in 1845, at the age of 21, while still a student at the University of Königsberg. His work generalized Ohm's law and laid the formal foundations for electrical circuit theory and spectroscopy.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/kirchhoff-laws-d_1386.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-6/kirchhoffs-current-law-kcl/
- **electrical4u.com**: https://www.electrical4u.com/kirchhoff-current-law-and-kirchhoff-voltage-law/
