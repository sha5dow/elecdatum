---
title: "Electrical motor selection guide"
sidebar:
  label: "Electrical motor selection guide"
description: "Technical reference: Electrical motor selection guide"
keywords: ["electric motor selection guide application", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-selection-guide"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Electric motors convert electrical energy into mechanical energy through the interaction between the magnetic field and current in the windings. They are present in applications ranging from household appliances to marine propulsion systems of over 100 MW. Correct selection requires evaluating the motor type, design class, operating environment, and load parameters.

## Motor types
| Motor type | Basic construction | Power supply | Distinctive characteristic |
| --- | --- | --- | --- |
| Induction motor (asynchronous) | Squirrel-cage or wound rotor; stator with three-phase or single-phase windings | AC | Speed slightly below synchronous (slip) |
| Synchronous motor | Rotor with permanent magnets or electromagnets; stator similar to induction | AC | Constant speed equal to synchronous speed |
| Direct current (DC) motor with brushes | Wound rotor with commutator and brushes; stator with magnets or field windings | DC | Simple speed control and high starting torque |
| Brushless DC motor (BLDC) | Permanent magnets on rotor; stator with electronically commutated windings | DC (with controller) | Higher efficiency and lower maintenance than brushed motors |
| Stepper motor | Permanent magnet or reluctance rotor; multiple phases in stator | DC (pulses) | Discrete step movement; precise positioning |
| Universal motor (series) | Similar to series DC motor but designed for AC/DC | AC or DC | High speed and power in portable tools |

## NEMA design classes
The NEMA standard defines four designs of induction motors with different torque‑speed‑slip curves, suitable for specific applications. The main characteristics are summarized in the following table.

| Design | Maximum slip | Starting current | Locked rotor torque | Maximum torque | Typical applications |
| --- | --- | --- | --- | --- | --- |
| **NEMA A** | 5 % | High to medium | Normal | Normal | Fans, pumps |
| **NEMA B** | 5 % | Low | High | Normal | HVAC, blowers, pumps |
| **NEMA C** | 5 % | Low | High | Normal | Positive displacement pumps, conveyors |
| **NEMA D** | 5 – 13 % | Low | Very high | — (not standardized) | Cranes, hoists, high inertia equipment |

Slip, _s_, is defined as the percentage difference between synchronous speed (_n<sub>s</sub>_) and actual rotor speed (_n<sub>r</sub>_):  
> **s (%) = [(n<sub>s</sub> – n<sub>r</sub>) / n<sub>s</sub>] × 100**

In designs A, B and C the full-load slip is limited to 5 %, while design D allows values up to 13 % to handle high inertia starts.

## Selection criteria
| Parameter | Description and relevance |
| --- | --- |
| Rated power (kW / hp) | Work capacity. Must exceed the power demanded by the load. |
| Torque (N·m / lb·ft) | Starting torque, maximum torque, and rated torque. Determine acceleration and overload capacity. |
| Speed (r/min) | Synchronous speed is set by line frequency and number of poles. The load type dictates whether constant or variable speed is needed. |
| Service factor | Allowable overload margin (typically 1.15 for standard general purpose motors). |
| Insulation class | Thermal resistance of the winding (e.g., class F: 155 °C / 311 °F). Affects service life and allowable environment. |
| Ingress protection (IP) | Protection against dust and water. Open motors (IP20) for clean indoors; enclosed (IP55/IP65) for harsh environments or washdown. |
| Efficiency (IE1 to IE4) | Performance levels defined by IEC. An IE4 motor can be up to 15 % more efficient than an IE1 motor. |
| Altitude and ambient temperature | Above 1000 m / 3281 ft or 40 °C / 104 °F power derating is required. |

## Typical applications
| Application | Most common motor type | Recommended NEMA class | Remarks |
| --- | --- | --- | --- |
| Centrifugal pumps | Three-phase induction | B | Moderate starting torque, continuous duty |
| Fans and blowers | Single-phase/three-phase induction | A or B | HVAC applications with high starting inertia |
| Piston compressors | Induction with high starting torque | C | Requires overcoming initial inertia |
| Belt conveyors | Induction (sometimes with gearbox) | C | Start under load and constant operation |
| Cranes and hoists | Induction with wound rotor or design D | D | Very high starting torque (up to 300 % of rated) |
| Machine tools | Brushless DC or synchronous | — | Precise speed and position control |
| Portable power tools | Universal (series) | — | High speed, single-phase supply, compact |
| Marine propulsion | Permanent magnet synchronous | — | Powers exceeding 100 MW |

## Useful formulas
> **Mechanical power (kW): P = (T × n) / 9549**  
> (where T in N·m, n in r/min)

> **Power in hp: P<sub>hp</sub> = (T<sub>lb·ft</sub> × n) / 5252**

> **Efficiency: η (%) = (P<sub>mechanical</sub> / P<sub>electrical</sub>) × 100**

| Variable | Symbol | Metric unit | Imperial unit |
| --- | --- | --- | --- |
| Power | P | kW | hp |
| Torque | T | N·m | lb·ft |
| Rotational speed | n | r/min | rpm |
| Electrical input power | P<sub>electrical</sub> | kW | — |

## Standards and norms
- **NEMA MG 1**: Motors and generators (design classes A‑D, frame dimensions, efficiency).
- **IEC 60034**: Rotating electrical machines (IE efficiency classification, test methods, degrees of protection).
- **IEEE 112**: Standard test procedure for polyphase induction motors.
- **UL 1004**: Safety of electric motors in industrial and commercial applications.
- **WEG** provides selection tools and datasheets in accordance with these standards, including the catalog of induction and synchronous motors.

## Frequently Asked Questions (FAQ)
### How much slip does a NEMA design B motor allow?
   A NEMA B motor has a maximum full-load slip of 5 %, which ensures stable operation in pumps and fans.

### What locked rotor torque does a NEMA D motor offer?
   NEMA D motors develop a very high locked rotor torque, typically between 250 % and 300 % of rated torque, ideal for starting high inertia loads such as cranes.

### Up to what altitude can a motor operate without derating?
   Under standard conditions, motors can operate up to 1000 m / 3281 ft without reducing power; above that altitude a derating of approximately 3 % per additional 500 m is required.

### What is the efficiency difference between an IE1 and an IE4 motor?
   A super-premium efficiency IE4 motor consumes up to 15 % less energy than a standard IE1 motor for the same mechanical power.

### What maximum service temperature is limited for a motor with class F insulation?
   Insulation class F allows a maximum winding temperature of 155 °C / 311 °F, with a safety margin that extends service life if operated below that limit.

### What starting current is expected in a NEMA C motor?
   NEMA C motors have a low starting current compared to design A, limiting voltage drop on the line, while delivering high starting torque.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-a-b-c-d-design-d_650.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
