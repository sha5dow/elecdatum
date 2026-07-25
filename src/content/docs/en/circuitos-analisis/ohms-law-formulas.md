---
title: "Ohm's law formulas and applications"
sidebar:
  label: "Ohm's law formulas and applications"
description: "Technical reference: Ohm's law formulas and applications"
keywords: ["Ohms law formula V I R calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "fundamentals"
subcategory: "ohms-law"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Ohm's Law states that the electric current flowing through a conductor between two points is directly proportional to the potential difference or voltage between those points, and inversely proportional to the resistance of the conductor. This fundamental relationship, discovered by German physicist Georg Simon Ohm and published in 1827, forms the basis of electrical circuit analysis and holds for the vast majority of conductive materials under constant physical conditions.

## Definition and fundamental formula

Ohm's Law defines that the ratio between the voltage applied to a conductor and the current flowing through it is a constant called electrical resistance. Mathematically, the main formula is expressed as:

> **I = V / R**

This equation allows calculating the current I when the voltage V and resistance R are known. A circuit powered by a 12 V battery that feeds an 18 Ω resistor produces a current of 0,67 A, according to the direct calculation I = 12 V / 18 Ω.

| Variable | Full name | SI unit | Description |
| --- | --- | --- | --- |
| I | Electric current | Amperes (A) | Flow of electric charge through the conductor |
| V | Voltage or potential difference | Volts (V) | Electric potential difference between the ends of the conductor |
| R | Electrical resistance | Ohms (Ω) | Opposition to current flow offered by the conductor |

## Equivalent expressions

Solving for the terms of the fundamental equation yields two alternative expressions of Ohm's Law, which allow calculating any variable when the other two are known:

> **V = I × R**

> **R = V / I**

The expression V = I × R is useful for determining the required voltage. For example, to generate a current of 20 mA through a 3,3 kΩ resistor, a voltage of 66 V is required. The expression R = V / I allows calculating the resistance of a circuit: a current of 1 A flowing under 230 V indicates a resistance of 230 Ω.

## Practical applications

Ohm's Law is used in component sizing, circuit analysis, operation verification, and estimation of electrical parameters in direct current and alternating current systems. The following table collects representative applications with their characteristic calculation values.

| Application | Known parameters | Ohm's law calculation | Numerical result |
| --- | --- | --- | --- |
| Current calculation in resistive load | V = 12 V, R = 18 Ω | I = V / R | 0,67 A |
| Determination of required voltage | I = 20 mA / 0,02 A, R = 3,3 kΩ / 3300 Ω | V = I × R | 66 V |
| Circuit resistance calculation | V = 230 V, I = 1 A | R = V / I | 230 Ω |
| Bulb resistance estimation | V = 230 V, P = 100 W | R = V² / P | 529 Ω |
| Current calculation in bulb | P = 100 W, V = 230 V | I = P / V | 0,43 A |

## Limitations

Ohm's Law only applies to ohmic materials, those whose resistance remains constant regardless of current. Non-ohmic materials, such as semiconductors, diodes, varistors, or electrolytes, exhibit a nonlinear voltage-current relationship and do not obey this law. Additionally, the law assumes constant physical conditions of the conductor, particularly temperature: thermal variations alter the resistivity of the material and invalidate the direct proportionality between voltage and current. The point form of the law, **J = σ × E**, where J is current density, σ conductivity, and E electric field, generalizes the concept for continuous media in electromagnetism.

## Ohm's law triangle

The Ohm's triangle is a mnemonic graphical representation that organizes the three variables V, I, and R to facilitate quick solving of any of them. Placing V at the top and the other two variables at the bottom, the horizontal line indicates division and the vertical line multiplication.

| Arrangement in the triangle | Variable to calculate | Resulting formula |
| --- | --- | --- |
| V at top, I and R at bottom (separated by vertical line) | V | V = I × R |
| V over I (separated by horizontal line) | R | R = V / I |
| V over R (separated by horizontal line) | I | I = V / R |

## Relationship with electrical power

Combining Ohm's Law with the definition of electrical power yields three equivalent expressions that relate power, voltage, current, and resistance. The power dissipated in an 18 Ω resistor supplied with 12 V is 8 W, calculated as P = V² / R = (12 V)² / 18 Ω.

> **P = V × I**

> **P = R × I²**

> **P = V² / R**

| Variable | Full name | SI unit | Relationship with Ohm's law |
| --- | --- | --- | --- |
| P | Electrical power | Watts (W) | P = V × I = R × I² = V² / R |
| V | Voltage | Volts (V) | V = P / I |
| I | Current | Amperes (A) | I = P / V |
| R | Resistance | Ohms (Ω) | R = V² / P |

## Frequently Asked Questions (FAQ)

### What exactly does Ohm's Law state?

Ohm's Law states that the current through a conductor is directly proportional to the applied voltage and inversely proportional to the resistance, provided the physical conditions of the conductor remain constant.

### What differentiates an ohmic material from a non-ohmic one?

An ohmic material maintains constant resistance as current varies, thus obeying Ohm's Law. A non-ohmic material exhibits resistance that changes with applied voltage or current, resulting in a nonlinear voltage-current relationship.

### In which units are voltage, current, and resistance measured?

Voltage is measured in volts (V), current in amperes (A), and resistance in ohms (Ω), all being International System units.

### Can Ohm's Law be applied to alternating current circuits?

Yes, Ohm's Law applies to alternating current circuits when working with RMS values and the load is purely resistive. In the presence of inductances or capacitances, the concept of resistance is generalized to impedance.

### How does temperature affect the compliance with Ohm's Law?

The resistance of conductors varies with temperature. If the temperature changes significantly due to the current itself, the resistance ceases to be constant and the voltage-current relationship ceases to be linear, invalidating the applicability of Ohm's Law.

### What is the Ohm's triangle and what is it used for?

The Ohm's triangle is a visual representation that arranges V, I, and R in a triangular shape to remember and quickly solve any of the three equivalent formulas of Ohm's Law, without needing algebraic manipulation.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ohms-law-d_1658.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/tools/ohms-law-calculator/
- **electrical4u.com**: https://www.electrical4u.com/ohms-law-equation-formula-and-limitation-of-ohms-law/
