---
title: "Ladder diagram symbols"
sidebar:
  label: "Ladder diagram symbols"
description: "Technical reference: Ladder diagram symbols"
keywords: ["ladder diagram symbols control", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "control-diagram-symbols"
subcategory: "ladder-diagram-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Ladder diagrams graphically represent the logical connections of contacts and coils using two vertical power rails and a set of horizontal rungs. Each symbol occupies a standard space of 8 mm high by 12 mm wide in most programmable logic controller programming environments.

## Contact Symbols

80% of ladder control networks use normally open or normally closed contacts as input elements, and each type responds to the presence or absence of a logic signal. The standardized symbols for contacts are detailed below, including edge detection variants.

| Symbol | Name | Description | Rest State |
| --- | --- | --- | --- |
| `---[ ]---` | Normally Open Contact (NO) | Conducts when the associated variable has logic value 1 (true). | Open |
| `---[/]---` | Normally Closed Contact (NC) | Conducts when the associated variable has logic value 0 (false). | Closed |
| `---[P]---` | Positive Edge Detection Contact | Conducts for one scan cycle upon detecting a transition from 0 to 1. | Open |
| `---[N]---` | Negative Edge Detection Contact | Conducts for one scan cycle upon detecting a transition from 1 to 0. | Open |

## Coil Symbols

Coils represent the program outputs; a single ladder rung can contain up to eight parallel coils per IEC 61131‑3, though the most common practice limits it to one coil per rung to ensure readability. Variants include set, reset, and latching coils.

| Symbol | Name | Description | Effect on Output |
| --- | --- | --- | --- |
| `---( )---` | Normally De-energized Coil | Energizes when the rung is true. | Equal to rung state |
| `---(/)---` | Normally Energized Coil | Energizes when the rung is false. | Inverse of rung state |
| `---(S)---` | Latching Coil (SET) | Activates the output and holds it even if the rung becomes false. | Output = 1 permanent |
| `---(R)---` | Unlatching Coil (RESET) | Deactivates the latched output. | Output = 0 permanent |

## Timer Symbols

There are three fundamental types of timers, each with a preset value that can be set from 1 ms to 24 h on modern PLC platforms. The graphical representation consists of a box with the function name and associated parameters.

| Symbol | Name | Description | Typical Parameters |
| --- | --- | --- | --- |
| `[TON]` | On-Delay Timer | Delays activation of the output for the programmed time. | PT (preset time): 500 ms / 0.5 s; ET (elapsed time): variable |
| `[TOF]` | Off-Delay Timer | Delays deactivation of the output once the input is deactivated. | PT: 2 s / 2000 ms; ET: variable |
| `[TP]` | Pulse Timer | Generates a fixed-duration pulse when the input is activated, regardless of the input duration. | PT: 100 ms / 0.1 s; ET: variable |

## Counter Symbols

Counters store discrete events and can reach maximum values of 32,767 counts in 16-bit systems. Their symbol shows a rectangle with up-count, down-count, or both marks, and contacts associated with count limits.

| Symbol | Name | Description | Typical Parameters |
| --- | --- | --- | --- |
| `[CTU]` | Up Counter | Increments the accumulated value by 1 for each positive edge on the count input. | PV (preset value): 10000 counts; CV (current value): 0‑10000 |
| `[CTD]` | Down Counter | Decrements the accumulated value by 1 for each positive edge. | PV: 5000; CV: 5000‑0 |
| `[CTUD]` | Up-Down Counter | Changes the count based on two independent inputs: CU (up) and CD (down). | PV: 20000; CV: 0‑20000 |

## Comparator Symbols

Comparison blocks allow evaluating relations between two 16-bit or 32-bit operands and occupy approximately 4 CPU instructions in a typical PLC. They are represented as rectangles with the logic function inside and operands at the inputs.

| Symbol | Name | Operation | Example (A, B operands) |
| --- | --- | --- | --- |
| `[ == ]` | Equality Comparator | True if A equals B. | MW10 == 25 |
| `[ > ]` | Greater Than Comparator | True if A is greater than B. | MW20 > 100 |
| `[ < ]` | Less Than Comparator | True if A is less than B. | MW30 < 500 |
| `[ >= ]` | Greater Than or Equal Comparator | True if A is greater than or equal to B. | MW40 >= 75 |
| `[ <= ]` | Less Than or Equal Comparator | True if A is less than or equal to B. | MW50 <= 200 |
| `[ <> ]` | Not Equal Comparator | True if A is not equal to B. | MW60 <> 0 |

## Program Control Function Symbols

Jump, subroutine call, and return functions allow structuring the program into reusable modules. A typical rung can address up to 256 subroutines, and the execution time of a jump does not exceed 1 µs on modern processors.

| Symbol | Name | Description |
| --- | --- | --- |
| `[JMP]` | Unconditional Jump | Transfers program execution to a specified label. |
| `[JMPC]` | Conditional Jump | Jumps to a label only if the preceding rung is true. |
| `[CALL]` | Subroutine Call | Executes a subroutine and, upon completion, returns to the call point. |
| `[RET]` | Subroutine Return | Indicates the end of a subroutine and returns control to the main program. |
| `[END]` | End of Program | Stops execution of the scan cycle; commonly used in PLC ladder programs. |

## Frequently Asked Questions (FAQ)

### What is the difference between a normally open and a normally closed contact in a ladder diagram?

The NO contact conducts only when the associated variable is in logic state 1, while the NC contact conducts when the variable is in 0. This allows safety and emergency stop logic with reverse wiring.

### Why limit to one coil per rung?

Although several standards allow more than one output, placing a single coil per rung simplifies debugging, avoids ambiguities in the evaluation order, and follows the recommendations of most PLC manufacturers.

### Do timers in ladder diagrams require a constant enable input?

Yes, TON and TOF timers require their enable input to remain active for the programmed time. If the input is deactivated earlier, the timer resets without completing the delay.

### What is the difference between a latching coil (SET) and a normal coil?

The normal coil continuously reflects the rung state; the latching coil (SET) changes the output state and holds it even if the rung becomes false, until an unlatching coil (RESET) resets it.

### Is it possible to implement a reversible counter with a single symbol block?

Yes, the up-down counter (CTUD) unifies both functions in one symbol, with independent inputs for counting up and down, and a common preset value for both directions.

### Which standard governs ladder diagram symbols?

The graphical representation for programmable logic controllers is described in standard IEC 61131‑3, which unifies criteria among manufacturers and defines the functional blocks, contacts, and coils used in ladder logic.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
- **electrical4u.com**: https://www.electrical4u.com/block-diagrams-of-control-system/
