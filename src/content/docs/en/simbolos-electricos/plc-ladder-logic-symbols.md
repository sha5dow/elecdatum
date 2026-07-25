---
title: "PLC ladder logic symbols"
sidebar:
  label: "PLC ladder logic symbols"
description: "Technical reference: PLC ladder logic symbols"
keywords: ["PLC ladder logic symbols reference", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "plc-symbols"
subcategory: "plc-ladder-logic-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The ladder diagram is organized into two vertical power rails and horizontal lines called rungs. Each rung connects input contacts on the left with output coils on the right, replicating the scheme of relay circuits. Ladder logic is one of the five languages standardized by IEC 61131‑3 for PLC programming and supports up to 12 contacts in series per rung in typical implementations.

## Standard Symbols
IEC 61131‑3 defines 4 fundamental symbols to represent contacts and coils in a ladder logic diagram. The table below shows the basic symbols, their names in Spanish, and the function they perform in the evaluation of the rung.

| Symbol | Name | Function |
| --- | --- | --- |
| `─[ ]─` | Normally open contact | Conducts when the associated variable is true (1); resting state open. |
| `─[\]─` | Normally closed contact | Conducts when the associated variable is false (0); resting state closed. |
| `─( )─` | Normally de-energized coil | Energizes (1) when the rung is true; resting state inactive. |
| `─(\)─` | Normally energized coil | Energizes (0) when the rung is true; resting state active (inverted logic). |

Contacts read the status of physical inputs, timers, or internal memory bits, while coils write to physical outputs or other bits. The same bit can be read as many times as desired, simulating a relay with unlimited contacts.

## Equivalent Logic Function
Each contact in a ladder diagram corresponds to an individual bit of the PLC memory, which can assume 2 logic states: 0 (false) or 1 (true). The series connection of contacts implements an AND operation and the parallel connection an OR operation.

The equivalent Boolean expression for a rung with two series contacts that energize a coil is:

> **Output = A · B**

Where A and B represent the state of the normally open contacts. If any is replaced by a normally closed contact, the corresponding variable is negated (ā). The PLC evaluates this function sequentially rung by rung, completing a typical scan cycle in less than 10 ms / 0.01 s, which ensures that the logical behavior appears immediate for most industrial processes.

## Typical Execution Parameters
Five parameters define the performance of a ladder program in a medium-range PLC. The following table shows representative values that influence program design and debugging.

| Parameter | Typical Value |
| --- | --- |
| Scan cycle time | 10 ms / 0.01 s (minimum 1 ms / 0.001 s in fast PLCs) |
| Maximum number of rungs per program | 1000 rungs / 1000 rungs |
| Contacts per rung (practical limit) | 8 to 12 contacts / 8 to 12 contacts |
| Program memory size (user) | 64 kB / 0.064 MB (expandable up to 512 kB / 0.512 MB) |
| Internal memory bits (markers) | 2048 bits / 2048 bits |

These values are approximate; compact PLCs usually have less capacity than modular ones, but all respect the sequential execution of ladder logic according to the standard.

## Standards and References
ISA standard S5.1‑1984 defines 26 identification letters for process instrumentation used in P&ID diagrams, while IEC 61131‑3 (first edition in 1993) establishes the graphic symbols and syntactic rules of ladder logic for PLCs. Both standards are complementary: ISA focuses on representing process control loops and IEC on programming the automation system. In integrated automation projects, a P&ID may show a valve with code FV 001 and the PLC that controls it will execute a ladder program that includes contacts and coils to decide when to energize that output. The correspondence between field instrumentation and ladder logic must be documented in the input/output (I/O) lists of the control system.

## Frequently Asked Questions (FAQ)

### What does a normally open contact represent in a ladder diagram?
A normally open contact (`─[ ]─`) represents a condition that must be true for logic current to flow. At rest the circuit is open; when the associated memory variable is 1, the contact closes and allows the rung evaluation to continue.

### What is the difference between a normally closed contact and a normally open contact?
The normally closed contact (`─[\]─`) conducts when the variable is in state 0, i.e., it has inverted logic. It is used to verify that a condition is not present, such as a limit switch that must be at rest for the system to advance.

### How is an output coil represented in ladder logic?
The standard output coil is represented by `─( )─`; it energizes (1) when the rung to its left is true. There is also the negated coil `─(\)─`, which takes the inverse value of the rung result, useful for simplifying combinational logic.

### What standard regulates ladder logic symbols?
The symbols and syntax of the ladder language are standardized by IEC 61131‑3, which defines five programming languages for PLCs: ladder diagram (LD), instruction list (IL), structured text (ST), function block diagram (FBD), and sequential function chart (SFC).

### Can multiple output coils be placed on the same rung?
Most controllers allow only one output coil at the end of the rung. If multiple outputs controlled by the same conditions are required, they must be drawn on separate rungs or use parallel coils if the programming environment permits.

### What is the scan cycle of a PLC?
It is the repetitive process of reading input states, sequentially executing all rungs of the program, updating outputs, and performing internal diagnostics. Modern PLCs complete a scan cycle in less than 10 ms / 0.01 s, so the system response is practically instantaneous for most industrial applications.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
- **electrical4u.com**: https://www.electrical4u.com/programmable-logic-controllers/
