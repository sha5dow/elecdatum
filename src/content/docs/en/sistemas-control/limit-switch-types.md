---
title: "Limit switch types"
sidebar:
  label: "Limit switch types"
description: "Technical reference: Limit switch types"
keywords: ["limit switch types industrial specifications", "sistemas-control"]
category: "sistemas-control"
topic: "motor-control-devices"
subcategory: "limit-switch-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Designed for a maximum of **2 operations per second** in physical contact applications, limit switches are electromechanical devices that switch an electrical circuit when actuated by the movement of a machine or the presence of an object. Their robust construction, ease of installation, and relatively low cost make them the preferred solution for detecting position, end-of-travel, part passage, or as safety interlocks in industrial environments.

## Classification by Actuator Type
There are **9 main actuator configurations**, each designed for a specific mode of interaction with the detected object and to withstand different mechanical actuation conditions.

| Actuator Type | Description | Typical Application |
|---|---|---|
| **Plunger** | Activation by direct pressure on a stem, capable of detecting very small movements. | Precise position detection in fixtures, presses, and linear tables. |
| **Plunger with Roller** | Same as plunger, but with a roller at the end that facilitates the passage of objects or contour following. | Cam detection, part guidance on conveyors. |
| **One-way Lever with Roller** | Angled lever that activates only in one direction of travel; the roller prevents excessive wear. | End-of-travel on conveyor belts, sliding doors with one-way passage. |
| **Lever (micro)** | Small top lever that presses an internal pushbutton; compact size and long service life. | Printers, photocopiers, home appliances, locking mechanisms. |
| **Lever with Roller (micro)** | Like the previous, but with a roller at the end that allows free passage of objects. | Vending machines, tray positioning, access doors. |
| **Lateral Rotating Lever with Roller** | Lever mounted laterally that rotates up to a determined angle; fixed or adjustable models. | Position control of gates, oscillating mechanisms, cranes. |
| **Lateral Rotating Lever for Belt Alignment** | Specific lateral lever to detect misalignment in conveyor belts; emits an alarm or stop signal. | Bulk material transport systems, mining, quarries. |
| **Lateral Rotating Rod** | Fixed or adjustable rod actuator mounted laterally; accepts nylon loops for multidirectional actuation. | Irregular object detection, passage control on assembly lines. |
| **Spring and Rod 360°** | Top actuator that bends in any direction when pushed and returns by spring force; anti-scratch tip on some models. | Handling of delicate parts, pick and place robots, mechanisms with non-linear approach. |

## Contact Configurations
Limit switches offer **2 basic contact configurations** (normally open and normally closed) which, combined with the held state (held open/held closed), generate **4 operational variants** useful for control circuit design.

| Contact at Rest | When Actuating the Actuator | Common Designation |
|---|---|---|
| **Normally Open (NO)** | Closes (conducts) | NO‑HO (held open) |
| **Normally Closed (NC)** | Opens (does not conduct) | NC‑HO (held open) |
| **Normally Open Held Closed** | Opens when released | NO‑HC (held closed) |
| **Normally Closed Held Open** | Closes when released | NC‑HC (held closed) |

In safety applications, such as end-of-travel on CNC machines or emergency stops on automatic doors, the **normally closed (NC)** connection is preferred. This architecture ensures that, in the event of a cable break or connection failure, the circuit opens and the system stops immediately, preventing further damage.

## Symbolism in Control Diagrams
The **IEC 61131‑3** standard defines **4 contact symbols** used to represent limit switches in ladder diagrams, covering both the normal state and signal edge detection.

| Symbol | Description | Function |
|---|---|---|
| `| |` | Normally open contact (NO) | Closes the circuit when the actuator is actuated. |
| `|/|` | Normally closed contact (NC) | Opens the circuit when the actuator is actuated. |
| `|P|` | Positive edge detection | Generates a brief pulse when the NO contact closes. |
| `|N|` | Negative edge detection | Generates a brief pulse when the NC contact opens. |

These symbols are used in programmable logic controllers (PLC) and relay schematics. The complementary notation with arrows or subscripts such as “LS1 NC‑HO”, etc., allows identifying the exact state of the switch within the system.

## Typical Applications
In a standard residential garage door, **2 limit switches** are installed to stop the motor at the fully open and fully closed positions. The same philosophy extends to numerous industrial sectors.

- **CNC machine tools**: define the travel limits of the axes and provide a home reference.
- **Conveyor systems**: detect the passage of objects, control belt alignment, or activate diverters.
- **Lifting equipment**: end-of-travel on hoists, overhead cranes, and lifts to prevent exceeding the useful travel.
- **Safety interlocks**: prevent a machine from starting if the guards are not closed.
- **Material handling**: counting packages, presence of pallets on packaging lines, or gate control.

## Frequently Asked Questions (FAQ)
### What is the difference between a limit switch and a proximity sensor?
The limit switch requires direct physical contact with the object to activate, whereas a proximity sensor (inductive, capacitive, or photoelectric) detects without contact. Limit switches are more robust against harsh environments, but suffer mechanical wear over time.

### Why is it recommended not to exceed 2 operations per second?
Exceeding 2 actuations per second accelerates wear of the actuator and electrical contacts, drastically reducing the component's service life and potentially causing premature failures in high-speed applications.

### What does the normally closed configuration mean in safety applications?
In a normally closed (NC) connection, the circuit remains closed at rest and opens when the switch is actuated. If the wire is cut or the connector comes loose, the circuit also opens, generating a safe stop condition that prevents uncontrolled machine movements.

### Which actuator type is most suitable for following the contour of a cam?
A **plunger with roller** or **lateral rotating lever with roller** actuator is recommended, since the roller minimizes friction, allows sliding over the cam profile, and extends the switch life.

### Can limit switches be installed in dusty or humid environments?
Yes. There are limit switches with sealed housings that comply with IP65, IP67 or higher protection ratings, as well as enclosures conforming to NEMA standards to withstand water jets, dust, and corrosive environments.

### How is a limit switch represented in an IEC ladder diagram?
Normally open (`| |`) or normally closed (`|/|`) contacts are used, often accompanied by an identifier such as “LS1” and the state “NO” or “NC”. If switching edge detection is needed, the positive or negative edge detection symbols are added.

## References
- **plcacademy.com**: https://www.plcacademy.com/ladder-logic-symbols/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/sensors_-z-_encoders/limit_switches
