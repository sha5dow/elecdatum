---
title: "Ladder logic fundamentals"
sidebar:
  label: "Ladder logic fundamentals"
description: "Technical reference: Ladder logic fundamentals"
keywords: ["ladder logic PLC programming basics", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "ladder-logic-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Ladder logic is a standardized graphical programming language for programmable logic controllers (PLCs), defined in the IEC 61131-3 standard. Its representation is based on two vertical power rails and horizontal lines called rungs, on which contacts and coils are arranged to emulate the behavior of electrical relay circuits. This analogy facilitates migration from hardwired systems and allows the implementation of combinational and sequential logic functions in industrial automation.

## Structure and Graphical Representation
Each ladder diagram is organized into rungs that connect the left power rail (start of logic flow) with the right rail. A rung is evaluated from left to right, establishing logical continuity when all contacts in the path are closed. The vertical order of the rungs determines the execution sequence (top to bottom) in each scan cycle of the PLC.

## Basic Instructions: Contacts and Coils
The fundamental elements of ladder logic are contacts (logic inputs) and coils (logic outputs). The IEC 61131-3 standard defines standardized symbols for normally open (NO), normally closed (NC) contacts, and direct or negated output coils.

| IEC Symbol | Name | Function |
| --- | --- | --- |
| `-| |-` | Normally open contact | Closes the circuit when the associated variable is in logic state 1 (true) |
| `-|/|-` | Normally closed contact | Closes the circuit when the associated variable is in logic state 0 (false) |
| `-( )-` | Direct output coil | Activates when the rung has logical continuity |
| `-(/)-` | Negated coil | Activates when the rung does not have logical continuity |

Each contact and coil is associated with a memory address of the PLC, which can represent physical inputs (pushbuttons, limit switches), physical outputs (contactors, lamps), or internal markers.

## Scan Cycle and Execution Order
A PLC executes ladder logic cyclically in what is known as the scan cycle. During each iteration:
1. Reads the state of all physical inputs.
2. Sequentially processes each rung, from top to bottom and left to right, updating only internal images.
3. After all rungs are processed, transfers the output images to the physical modules.

The duration of the scan cycle depends on the number of instructions and the processor capacity. In practical applications, typical values are found according to the PLC category:

| PLC Category | Typical scan cycle duration (ms) |
| --- | --- |
| Nano / micro PLC | 1 – 10 ms / 0.001 – 0.01 s |
| Compact PLC | 5 – 50 ms / 0.005 – 0.05 s |
| High-end modular PLC | 0.5 – 20 ms / 0.0005 – 0.02 s |

The sequential execution model implies that physical outputs are only updated at the end of the scan. For this reason, placing multiple coils in the same rung or using feedback instructions requires special attention to avoid unwanted behavior.

## Combinational Logic with Contacts
The combination of contacts in series and parallel allows implementing Boolean functions. For a rung with two NO contacts in series, the coil activates if both variables are true (AND function). With two NO contacts in parallel, the coil activates if at least one variable is true (OR function). The logic expression of a basic rung can be formalized as:

> **Q = (A · B) + C**

where A, B, C represent contacts and Q the coil. This notation facilitates verification and integration with other IEC languages.

## Wiring and Installation Considerations
Although ladder logic is hardware-independent, the integrity of digital signals requires respecting maximum wiring distances to avoid voltage drops and interference. In systems operating at 24 Vdc, the following recommended lengths are provided:

| Signal type | Maximum recommended distance |
| --- | --- |
| Digital input (24 Vdc) | 100 m / 328 ft |
| Digital output (24 Vdc, resistive load) | 50 m / 164 ft |
| Analog input/output (4–20 mA) | 150 m / 492 ft |

These values may vary depending on conductor cross-section and electromagnetic environment; the PLC manufacturer's documentation should always be consulted.

## Applicable Norms and Standards
Ladder logic is internationally standardized in **IEC 61131-3**, within the IEC 61131 set for programmable controllers. This standard defines the syntax, semantics, and graphical representation, ensuring portability between programming environments from different manufacturers. PLCOpen is the organization responsible for promoting compliance and certification with this standard.

## References
- **plcacademy.com**: https://www.plcacademy.com/ladder-logic-tutorial/
- **automationdirect.com**: https://www.automationdirect.com/clickplcs/getting-started/programming
