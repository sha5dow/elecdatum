---
title: "Pneumatic fittings types"
sidebar:
  label: "Pneumatic fittings types"
description: "Technical reference: Pneumatic fittings types"
keywords: ["pneumatic push-in fittings types connection", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "pneumatic-fittings"
skill: "hydraulics-reference-table"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

## Standardized Symbols
Pneumatic fittings are represented by symbols according to ISO 1219‑1. A fixed fitting is indicated by a black dot on the connection line; a fitting with a quick connector (instant insertion) adds a small triangle or semicircle indicating the coupling direction. Threads are symbolized by an oblique line next to the connection point. In circuit diagrams, NPT or metric threaded connections are not detailed individually, but multiple connection blocks are drawn as a rectangle with as many entry points as there are ports.

## Types and Classification
Pneumatic fittings are classified into **5 main families**: push‑in fittings, threaded fittings, compression fittings, quick couplings, and functional fittings (check valves, flow regulators).  
**Instant fittings** dominate the current market due to their tool‑free assembly; the first industrial generation was introduced by John Guest in 1974 under the Speedfit brand for compressed air.  
Threaded fittings use NPT, BSPP or metric threads and are tightened with a controlled torque; compression fittings, such as those regulated by DIN 3861 and DIN 3870, use a compression ring and union nut.  
Quick couplings allow immediate disconnection of the line without residual pressure leakage.

## Connections
| Connection type | Sealing principle | Tube outer diameter (mm / in) | Main advantage |
| --- | --- | --- | --- |
| Push‑in (instant insertion) | EPDM/NBR O‑ring plus stainless steel toothed ring | 3 mm / 0.12 in – 16 mm / 0.63 in | Tool‑free assembly/disassembly |
| Threaded NPT | Metal‑metal taper seal with PTFE tape or sealant | 1/8 in (DN 6) – 2 in (DN 50) | High‑strength metal seal |
| Compression ring (DIN 3861) | Deformable compression ring on the tube | 4 mm / 0.16 in – 28 mm / 1.10 in | Detachable and reusable rigid connection |
| Quick coupling | Automatic shut‑off valves with spring | 2 mm / 0.08 in – 50 mm / 1.97 in | Tool exchange in seconds |

## Materials
The bodies of instant fittings are mainly manufactured from **glass‑fiber reinforced polyamide or nickel‑plated brass**; brass (CuZn39Pb3) is reserved for applications with pressure spikes or temperatures above 60 °C / 140 °F.  
The retaining ring is always made of stainless steel AISI 301 or 304. O‑rings, depending on the working temperature, are made of NBR (‑20 °C to 80 °C / ‑4 °F to 176 °F), EPDM (‑40 °C to 100 °C / ‑40 °F to 212 °F) or FKM (‑20 °C to 200 °C / ‑4 °F to 392 °F).  
Threaded and compression fittings use brass, zinc‑plated carbon steel or stainless steel AISI 316 for corrosive environments.

## Working Pressures
The maximum service pressure of a brass push‑in fitting is **12 bar / 174 psi** at 23 °C / 73 °F for polyurethane tubing, while the plastic body version is usually limited to **10 bar / 145 psi**.  
In brass NPTF threaded fittings, the allowable static pressure can reach **20 bar / 290 psi**, provided the tightening torque is correct.  
DIN 2826 standards specify fittings with a clamp for steam up to **18 bar / 261 psi**.  
Temperature increase reduces the allowable pressure according to a manufacturer correction factor; at 60 °C / 140 °F the maximum pressure of a plastic fitting is derated to 60 % (6 bar / 87 psi).

## Selection Tables

### Selection Table by Flow Rate and Tube Diameter
| Tube outer diameter (mm / in) | Recommended flow rate at 6 bar (Nl/min / SCFM) | Max. allowable pressure at 23 °C (bar / psi) | Recommended fitting type |
| --- | --- | --- | --- |
| 4 mm / 0.16 in | 110 Nl/min / 3.9 SCFM | 10 bar / 145 psi | Push‑in plastic |
| 6 mm / 0.24 in (1/4 in) | 260 Nl/min / 9.2 SCFM | 12 bar / 174 psi | Push‑in brass |
| 8 mm / 0.31 in (5/16 in) | 460 Nl/min / 16.2 SCFM | 12 bar / 174 psi | Push‑in brass |
| 10 mm / 0.39 in | 700 Nl/min / 24.7 SCFM | 12 bar / 174 psi | Push‑in brass / compression |
| 12 mm / 0.47 in | 1050 Nl/min / 37.1 SCFM | 12 bar / 174 psi | Compression / direct thread |

### Maximum Tightening Torque for NPT Threads (according to NPTF)
| Thread size (NPT) | Turns from manual tightening (T.F.F.T.) | Maximum torque (ft·lb / N·m) |
| --- | --- | --- |
| 1/16 in - 27 | 2 – 3 | 5.0 ft·lb / 6.7 N·m |
| 1/8 in - 27 | 2 – 3 | 7.0 ft·lb / 9.5 N·m |
| 1/4 in - 18 | 2 – 3 | 16 ft·lb / 21.7 N·m |
| 3/8 in - 18 | 2 – 3 | 23 ft·lb / 31.0 N·m |
| 1/2 in - 14 | 2 – 3 | 30 ft·lb / 40.6 N·m |
| 3/4 in - 14 | 2 – 3 | 54 ft·lb / 73.0 N·m |
| 1 in - 11 1/2 | 1.5 – 2.5 | 78 ft·lb / 105.7 N·m |

## Calculation Formulas
The circumferential stress in a threaded plastic bushing is estimated with the following expression, applicable when using a friction lubricant μ ≈ 0.15:

**σ = (3 · T) / (t · d · L)**

Where:
- **σ** = circumferential stress (psi / MPa)
- **T** = tightening torque (in·lb / N·m)
- **t** = wall thickness (in / mm)
- **d** = outer diameter of the thread (in / mm)
- **L** = thread engagement length (in / mm)

**Calculation Example**  
For a 1/8 in NPT thread, with wall thickness 0.05 in / 1.27 mm, threaded length 0.5 in / 12.7 mm and tightening torque 5 in·lb / 0.565 N·m:

σ = (3 × 5 in·lb) / (0.125 in × 0.05 in × 0.5 in) = 4800 psi / 33.1 MPa

This value must not exceed 25% of the plastic's tensile strength to avoid creep failure.

## Installation and Assembly
The assembly of an instant fitting requires a straight, burr‑free cut of the tube. The insertion depth is verified by the witness mark printed on the fitting body or on the tube itself; for example, a 6 mm / 1/4 in tube must penetrate at least **12 mm / 0.47 in**.  
For threaded connections, apply PTFE tape (2–3 turns in the direction of the thread) and tighten only the indicated turns from manual contact; excessive torque can crack a plastic base.  
Quick couplings require that the coupling surfaces be clean and dry to avoid premature seal wear.  
Never exceed the maximum tightening torque indicated in the corresponding table, especially when the female component is made of polymeric material.

## Frequently Asked Questions

1. **What is the maximum working pressure for a 6 mm push‑in fitting?**  
   The maximum working pressure for a 6 mm / 1/4 in push‑in fitting is typically 10 bar / 145 psi at 20 °C / 68 °F, 8 bar / 116 psi at 40 °C / 104 °F and 6 bar / 87 psi at 60 °C / 140 °F.

2. **What minimum insertion length does a polyurethane tube need in an instant fitting?**  
   For an 8 mm / 5/16 in OD polyurethane tube, the minimum insertion depth is 12 mm / 0.47 in; for 10 mm OD it is 14 mm / 0.55 in.

3. **How many turns from manual contact are applied to a 1/2‑14 NPT thread with sealant?**  
   For a 1/2‑14 NPT thread, the number of turns from manual tightening (T.F.F.T.) is 2 to 3, with a maximum torque of 30 ft·lb / 40.6 N·m.

4. **What is the maximum tightening torque for a brass connector with 3/8 in NPT thread?**  
   The recommended maximum tightening torque for a 3/8‑18 NPT thread is 23 ft·lb / 31 N·m.

5. **What stress does a torque of 5 in·lb generate in a 1/8 in plastic bushing?**  
   With a torque of 5 in·lb / 0.565 N·m, thickness of 1.27 mm / 0.05 in and outer diameter of 3.175 mm / 0.125 in, the calculated circumferential stress is approximately 4800 psi / 33.1 MPa.

6. **Up to what temperature does a fitting with NBR seal work in compressed air?**  
   Fittings with NBR seals permit service temperatures from ‑20 °C to 80 °C / ‑4 °F to 176 °F; for higher temperatures EPDM (up to 100 °C / 212 °F) or FKM (up to 200 °C / 392 °F) is used.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/din-pipes-tubes-fittings-standards-d_768.html
- **engineersedge.com**: https://www.engineersedge.com/hardware/pipe_thread_installation_13424.htm
- **efunda.com**: https://www.efunda.com/designstandards/sensors/flowmeters/flowmeter_intro.cfm?search_string=installation%20intr
