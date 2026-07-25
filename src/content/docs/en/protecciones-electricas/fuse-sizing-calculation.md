---
title: "Fuse sizing by load"
sidebar:
  label: "Fuse sizing by load"
description: "Technical reference: Fuse sizing by load"
keywords: ["fuse sizing calculation motor load", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "fuses"
subcategory: "fuse-sizing"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Correct fuse sizing for inductive loads such as motors is based on the Maximum Overcurrent Protection (MOCP), whose typical value is **2.25 times the full load amps (FLA)** of the largest motor plus the rest of the simultaneous loads. This value establishes the upper limit of the rated capacity that the fuse or circuit breaker associated with the equipment can have, ensuring that the protective device safely disconnects during any fault condition without nuisance tripping during starting. The MOCP works together with the Minimum Circuit Ampacity (MCA) — **1.25 times the FLA plus resistive loads** — to define both the minimum conductor size and the maximum size of the overcurrent protective device.

A **10 A gG fuse** must melt in less than **1 hour** when a current of **1.45 times** its rated value (14.5 A) flows through it, according to the verification tests of IEC 60269. The thermal protection principle is based on a calibrated fusible element that, when subjected to an overcurrent, raises its temperature until it reaches the melting point. The time‑current characteristic defines two regions: a moderate overload zone where the melting time can be minutes or hours, and a short‑circuit zone where interruption occurs in milliseconds. In the case of motors, the high starting current (up to **8 times FLA** for a few cycles) forces the selection of fuses with sufficient delay, such as class aM or with curve gM, capable of withstanding transient peaks without melting prematurely.

## Application Categories According to IEC 60269
IEC 60269 defines application categories for low‑voltage fuses, where the first letter indicates the type of protection (g = general, a = short‑circuit only) and the second letter identifies the equipment to be protected. For electric motors, the two essential categories are aM and gM. An aM fuse is designed exclusively for **short‑circuit protection** and must withstand without melting currents up to **1.05 times its rated current** for one hour; it needs an associated device (thermal relay or motor‑protector) for overload protection. In contrast, a gM fuse acts as general protection — overload and short‑circuit — and must melt at **1.45 times** its rated current within one hour. The gG category, commonly used in networks, is not suitable for motors because it does not reliably discriminate the starting current.

| Category | Protection Type | Typical Application | Non‑fusing Current (1 h) | Fusing Current (1 h) |
| --- | --- | --- | --- | --- |
| aM | Short‑circuit only (accompanying) | Motors with external overload protection | 1.05 × In | Not defined (fast fuse) |
| gM | General (overload + short‑circuit) | Motors without separate overload protection | 1.05 × In | 1.45 × In |
| gG | General for cables and conductors | General distribution (not recommended for motors) | 1.05 × In | 1.45 × In |

## Calculation of Maximum Overcurrent Protection (MOCP) and Minimum Circuit Ampacity (MCA)
For a three‑phase motor of **15 kW (20 hp)** with an FLA of **28 A** at 400 V, the MOCP value according to the standard formula is **2.25 × 28 A = 63 A**, while the minimum MCA for the conductor is **1.25 × 28 A = 35 A**. When several simultaneous loads exist, the following expressions apply:

> **MOCP = (2.25 × FLA of the largest motor) + (Sum of FLA of other motors) + (Total resistive load)**

> **MCA = 1.25 × (FLA of the largest motor + Resistive load) + (Sum of FLA of other motors)**

In a system with two motors of 10 kW (14 A) and 5 kW (7 A) plus an 8 A heating resistor, the resulting MOCP would be: 2.25 × 14 A + 7 A + 8 A = **46.5 A** (round up to 50 A), and the MCA: 1.25 × (14 A + 8 A) + 7 A = **34.5 A** (minimum conductor 6 mm² / 10 AWG if installation conditions allow).

Formula variables:

| Variable | Meaning | Unit |
| --- | --- | --- |
| FLA_mayor | Full load current of the largest motor | A |
| FLA_otros | Full load current of the other motors | A |
| I_calef | Current of resistive loads (e.g., heater) | A |
| MOCP | Maximum overcurrent protection (fuse/CB rating) | A |
| MCA | Minimum circuit ampacity (conductor) | A |

The U.S. National Electrical Code (NEC) establishes a minimum standard protection rating of **15 A** for branch circuits, and the commercial range of fuses follows the values: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100 A, etc. Always choose the fuse of the next higher standard value above the calculated MOCP without exceeding it.

## Fuse Selection Table for Motors
For a **5.5 kW (7.5 hp)** motor at 400 V three‑phase, the full load current is around **11.5 A**, recommending a **20 A aM fuse** if external overload protection exists, or a **25 A gM fuse** for integral protection. The following table provides guide values for standard 4‑pole motors (1500 rpm), considering direct‑on‑line starting and an ambient temperature of 40 °C.

| Motor Power | Voltage (V) | FLA (A) | MCA (A) | MOCP (A) | aM Fuse (A) | gM Fuse (A) |
| --- | --- | --- | --- | --- | --- | --- |
| 0.75 kW / 1 hp | 230 1~ / 400 3~ | 4.8 / 1.8 | 6.0 / 2.3 | 13.5 / 5.1 | 16 / 6 | 16 / 10 |
| 2.2 kW / 3 hp | 230 1~ / 400 3~ | 13.0 / 4.8 | 16.3 / 6.0 | 36.6 / 13.5 | 40 / 16 | 40 / 16 |
| 5.5 kW / 7.5 hp | 400 3~ | 11.5 | 14.4 | 32.4 | 35 | 40 |
| 11 kW / 15 hp | 400 3~ | 22 | 27.5 | 62 | 63 | 80 |
| 22 kW / 30 hp | 400 3~ | 42 | 52.5 | 118 | 125 | 125 |
| 37 kW / 50 hp | 400 3~ | 70 | 87.5 | 197 | 200 | 225 |

*Note: the values in the 230 V 1~ / 400 V 3~ column are shown separated by a slash. The fuses comply with the standard series according to IEC 60269 and are selected by default as type gG for general conductor protection; aM fuses require additional overload protection.*

## Applicable Standards
IEC 60269‑2 requires that fuses for industrial use (types aM and gM) be capable of interrupting short‑circuit currents up to **50 kA** RMS at low voltage. This international standard harmonizes former national standards (DIN, BS, NFC) and guarantees that fuses with the same application category are electrically interchangeable, regardless of their construction format (Diazed, Neozed, NH, etc.). At the American level, the National Electrical Code (NEC) establishes in Article 430 the calculation method for MOCP and MCA, limiting the maximum setting of the protective device to **225% of the FLA** for induction motors with full‑voltage starting, with a minimum rating of **15 A** for any branch circuit.

## Frequently Asked Questions (FAQ)

### What is the standard multiplication factor for calculating the MOCP of a motor?
    The standard factor is **2.25**, applied to the full load current (FLA) of the largest motor. For a motor drawing **10 A FLA**, the resulting MOCP would be **22.5 A**, selecting the standard **25 A** fuse.

### What is the difference in melting time between a gG fuse and an aM fuse under an overload of 1.45 times In?
    A gG fuse must melt in less than **1 hour** (conventionally **3600 s**) when **1.45 times In** is applied, while an aM fuse has no fusing specification under overload because it is not designed to protect against sustained overcurrents — it only acts on short‑circuits.

### Why can a 63 A fuse not protect a 15 kW motor if the FLA is 28 A?
    The MOCP for that motor is **2.25 × 28 A = 63 A**, so a 63 A fuse is correct as a maximum; however, during starting the current can reach **224 A (8 × FLA)** for a few seconds. The 63 A aM fuse is sized to withstand that peak without melting, but a gG fuse of the same rating could act prematurely if its I²t curve is not suitable.

### What minimum ampacity must the supply conductor have for a 3 kW single‑phase motor?
    With an FLA of **15 A** (230 V 1~), the minimum MCA is **1.25 × 15 A = 18.75 A**, requiring a conductor of at least **2.5 mm² (14 AWG)** if the conduit and temperature allow that current‑carrying capacity.

### What is the most common mistake when sizing fuses for several motors in the same circuit?
    Forgetting to add **100% of the FLA of the additional motors** after applying the 2.25 factor to the largest. For example, with two motors of **20 A and 8 A** and a **5 A** resistance, the correct MOCP is **(2.25 × 20 A) + 8 A + 5 A = 58 A**, not simply **2.25 × 20 A = 45 A**.

### What MOCP value does the NEC establish for a 50 hp motor with locked‑rotor code letter G?
    For a **50 hp (37 kW)** motor with an FLA of **65 A** at 460 V, the NEC allows an MOCP of **225%** if a time‑delay fuse (class CC or aM) is used, giving **146 A** and requiring a standard fuse of **150 A**. If starting causes trips, it can be increased to **250%** (162 A, 175 A fuse) after verifying that the conductor supports that setting.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
