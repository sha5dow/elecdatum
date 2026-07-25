---
title: "Locked rotor current LRA"
sidebar:
  label: "Locked rotor current LRA"
description: "Technical reference: Locked rotor current LRA"
keywords: ["locked rotor current LRA calculation motor", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "motor-electrical"
subcategory: "locked-rotor-current"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Locked rotor current (LRA) is the steady-state current drawn by an induction motor when its rotor is mechanically locked and rated voltage is applied at the terminals. Its value is typically **5 to 8 times the full-load current (FLA)**, and may be higher for special design motors, constituting a critical parameter for sizing protections, conductors, and transformers.

## NEMA Letter Codes for Locked Rotor Current

NEMA (National Electrical Manufacturers Association) classifies motors according to the ratio between the kVA drawn with locked rotor and the power in hp. Each letter code indicates a kVA/hp range, allowing LRA estimation without testing each motor.

| NEMA Code | Locked Rotor kVA/hp | Typical LRA at 460 V / 460 V (approx.) |
| --- | --- | --- |
| A | 0,00 – 3,14 | 0 – 39 A |
| B | 3,15 – 3,54 | 40 – 44 A |
| C | 3,55 – 3,99 | 45 – 50 A |
| D | 4,00 – 4,49 | 51 – 56 A |
| E | 4,50 – 4,99 | 57 – 62 A |
| F | 5,00 – 5,59 | 63 – 70 A |
| G | 5,60 – 6,29 | 71 – 79 A |
| H | 6,30 – 7,09 | 80 – 89 A |
| J | 7,10 – 7,99 | 90 – 100 A |
| K | 8,00 – 8,99 | 101 – 113 A |
| L | 9,00 – 9,99 | 114 – 126 A |
| M | 10,00 – 11,19 | 127 – 141 A |
| N | 11,20 – 12,49 | 142 – 158 A |
| P | 12,50 – 13,99 | 159 – 176 A |
| R | 14,00 – 15,99 | 177 – 201 A |
| S | 16,00 – 17,99 | 202 – 227 A |
| T | 18,00 – 19,99 | 228 – 253 A |
| U | 20,00 – 22,39 | 254 – 284 A |
| V | 22,40 and above | 285 A onwards |

LRA values are estimated for a 10 hp motor at 460 V; actual current varies with voltage and rated power.

## Locked Rotor Test

The locked rotor test, also called the short-circuit test, is performed to determine the motor leakage impedance, copper losses, and short-circuit current at rated voltage. It consists of mechanically locking the rotor, applying a reduced voltage to the stator, and gradually increasing the voltage until rated current flows. The applied voltage (V<sub>S</sub>), line current (I<sub>S</sub>), and total input power (W<sub>S</sub>) are recorded.

For squirrel cage motors, the test frequency is typically the rated frequency; for wound rotors, the phases are short-circuited through the slip rings. The test must be performed quickly to avoid excessive heating of the windings.

## Test Parameter Calculations

From the measured values, the parameters of the motor equivalent circuit are obtained. The short-circuit impedance, resistance, and reactance per phase, referred to the stator, are calculated as follows:

> **Z<sub>01</sub> = V<sub>S</sub> / I<sub>S</sub>**

> **R<sub>01</sub> = (W<sub>cu</sub>) / (3 · I<sub>S</sub><sup>2</sup>)**, where **W<sub>cu</sub> = W<sub>S</sub> – W<sub>c</sub>**

> **X<sub>01</sub> = √(Z<sub>01</sub><sup>2</sup> – R<sub>01</sub><sup>2</sup>)**

| Variable | Description | Unit |
| --- | --- | --- |
| V<sub>S</sub> | Short-circuit voltage applied per phase | V |
| I<sub>S</sub> | Short-circuit current per phase | A |
| W<sub>S</sub> | Total three-phase measured power | W |
| W<sub>c</sub> | Core losses (neglected due to low voltage) | W |
| W<sub>cu</sub> | Total copper losses | W |
| R<sub>01</sub> | Equivalent resistance per phase (stator + referred rotor) | Ω |
| X<sub>01</sub> | Equivalent leakage reactance per phase | Ω |

The stator and rotor reactances are assumed equal: **X<sub>1</sub> = X<sub>2</sub>′ = X<sub>01</sub> / 2**. The stator resistance R<sub>1</sub> is obtained from a DC test, and the referred rotor resistance **R<sub>2</sub>′ = R<sub>01</sub> – R<sub>1</sub>**.

To scale the short-circuit current to rated voltage V, direct proportionality is used:

> **I<sub>SN</sub> = I<sub>S</sub> × (V / V<sub>S</sub>)**

where V is the rated line-to-line voltage and V<sub>S</sub> is the test voltage.

The short-circuit power factor is determined by:

> **cos φ<sub>S</sub> = W<sub>S</sub> / (√3 · V<sub>SL</sub> · I<sub>SL</sub>)**

| Variable | Description | Unit |
| --- | --- | --- |
| W<sub>S</sub> | Three-phase power measured in short-circuit | W |
| V<sub>SL</sub> | Line voltage applied in short-circuit | V |
| I<sub>SL</sub> | Line current in short-circuit | A |

## Factors Affecting Locked Rotor Current

LRA is not a fixed value; it depends on several construction and operational factors:

- **Applied voltage**: Current varies almost linearly with voltage; overvoltage proportionally increases LRA.
- **Supply frequency**: Testing at rated or reduced frequency (typically one quarter of rated, according to IEEE) alters the effective rotor resistance due to the skin effect, thereby modifying the impedance and thus the recorded current.
- **Winding temperature**: Higher temperature increases copper resistance, slightly reducing LRA.
- **Rotor design**: Bar depth, slot shape, and material used influence the LRA/FLA ratio. High starting torque motors (design D, for example) have moderate LRA; high efficiency motors may have higher LRA.

## Consequences of High LRA

A very high locked rotor current directly impacts the electrical installation:

- **Voltage drop in the network**: During starting, LRA causes a sudden voltage drop in the supply conductors, which can affect other sensitive equipment.
- **Thermal stresses**: Even though starting time is brief, the Joule effect (I²R) rapidly raises winding temperature; if the motor does not rotate, the lack of ventilation worsens heating.
- **Protection sizing**: Magnetic circuit breakers, contactors, and overload relays must be able to withstand LRA during starting without tripping. Class 10, 20, or 30 trip curves are used depending on the application, along with soft starters or variable frequency drives to limit current.
- **Electromechanical stresses**: Magnetic forces proportional to the square of the current subject the windings to mechanical stresses that can cause displacement or damage if LRA is excessive.

## Frequently Asked Questions (FAQ)

### What exactly is locked rotor current?

It is the maximum current that flows through the stator of an induction motor when the rotor is locked and rated voltage is applied. It is equivalent to the full-voltage starting current and is typically 5 to 8 times the rated current.

### Why is LRA much higher than full load current?

With the rotor stationary, slip is unity and the induced counter-electromotive force is zero. The only opposition to current flow is the small leakage impedance of the windings, resulting in a very high current.

### How is the NEMA letter code used?

The code indicates the range of kVA per hp that the motor draws with locked rotor. Knowing the voltage and motor power, the approximate LRA is calculated: LRA (A) = (kVA/hp × hp × 1000) / (√3 × V). This allows proper protection selection without testing.

### Is it possible to measure LRA without a destructive test?

Yes. The locked rotor test is performed at reduced voltage so that current does not exceed rated value. Then the current is extrapolated to line voltage using the relationship I<sub>SN</sub> = I<sub>S</sub> × (V / V<sub>S</sub>). Thus the motor is not damaged.

### What is the difference between LRA and starting current?

Both coincide in magnitude when the motor starts at full voltage and the first current peak after contactor closure is measured. However, LRA is a steady-state value measured under locked rotor conditions, while actual starting current may include an asymmetric transient of slightly higher value during the first cycles.

### How is LRA limited in practice?

Reduced voltage starting methods (star-delta, autotransformer, electronic soft starters) or variable frequency drives that control the voltage/frequency ratio are used, limiting starting current to typical values of 2 to 4 times rated.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-13/wound-rotor-induction-motors/
- **electrical4u.com**: https://www.electrical4u.com/blocked-rotor-test-of-induction-motor/
