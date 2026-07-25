---
title: "Voltage sag and swell"
sidebar:
  label: "Voltage sag and swell"
description: "Technical reference: Voltage sag and swell"
keywords: ["voltage sag swell definition causes", "calidad-energia"]
category: "calidad-energia"
topic: "voltage-quality"
subcategory: "voltage-sag-swell"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Voltage sag (or dip) is a momentary reduction in the root mean square (RMS) voltage, typically between 10% and 90% of the nominal voltage, with a duration ranging from 0.5 cycles to 1 minute. Its counterpart, voltage swell, is a temporary increase above 110% of the nominal voltage, usually in the range of 110% to 180%, with similar durations. Both disturbances constitute the most frequent power quality events in industrial and commercial electrical systems.

## Definition and Characteristic Parameters

The magnitude of a voltage sag lies between 10% and 90% of the nominal voltage, while its minimum duration is 0.5 cycles (10 ms at 60 Hz / 8.33 ms at 50 Hz). The following table summarizes the typical values of both phenomena.

| Parameter | Voltage Sag (Dip) | Voltage Swell |
|---|---|---|
| Magnitude (% of V<sub>nominal</sub>) | 10% – 90% | 110% – 180% (1.10 p.u. – 1.80 p.u.) |
| Duration | 0.5 cycles (10 ms @ 60 Hz / 8.33 ms @ 50 Hz) to 1 minute (60 s / 3,600 cycles @ 60 Hz) | Same range as sag |
| Typical frequency of occurrence | Can represent up to 70% of all power quality disturbances in an installation | Less frequent, often associated with load rejection |

## Classification by Duration (IEEE 1159)

IEEE 1159 establishes three temporal categories for short-duration events: instantaneous (0.5–30 cycles), momentary (30 cycles – 3 s), and temporary (3 s – 1 min). The following table details the limits.

| Category | Duration (cycles) | Duration at 50 Hz (ms / s) | Duration at 60 Hz (ms / s) |
|---|---|---|---|
| Instantaneous | 0.5 – 30 cycles | 10 ms – 600 ms (0.6 s) | 8.33 ms – 500 ms (0.5 s) |
| Momentary | 30 cycles – 3 s | 600 ms (0.6 s) – 3 s | 500 ms (0.5 s) – 3 s |
| Temporary | 3 s – 1 min | 3 s – 60 s | 3 s – 60 s |

## Main Causes

Single-phase-to-ground faults in the distribution system are the most common cause, as they can cause voltage sags of 30% to 60% in adjacent circuits. In addition to faults, there are other relevant causes:

- Starting of large motors: the inrush current can reach 5 to 7 times the rated current, causing a momentary sag.
- Switching operations of power transformers: sudden energization originates inrush currents that can exceed 10 times the rated current, dropping the voltage at the point of common coupling.
- Switching of large loads or sudden demand variations.
- Atmospheric phenomena (lightning) that cause transient line-to-ground faults.
- Voltage swells typically appear when disconnecting large loads or when operating switches in the presence of capacitor banks.

## Consequences on Equipment

Voltage sags of only 20% of the nominal voltage with a duration of 2 to 3 cycles (34 ms–50 ms @ 60 Hz) can cause contactor opening and stoppage of automated processes. The main adverse effects are:

| Equipment / System | Effect of Voltage Sag |
|---|---|
| Contactors and electromechanical relays | Disconnection with voltages below 80% (0.80 p.u.) for more than 1–2 cycles. |
| Variable speed drives (VSD) | Trip due to undervoltage on the DC bus when the mains voltage drops below 70%–85% (0.70 p.u.–0.85 p.u.). |
| PLCs and control systems | Reset or failure if the power supply does not ride through the sag; typical sensitivity from sags of 30%. |
| Discharge lamps (HID) | Shutdown and subsequent re-ignition time of several minutes (3 min – 15 min). |
| Computers and IT equipment | Reset or data loss with sags greater than 30% and duration longer than 8 ms (0.5 cycles @ 60 Hz). |

## Mitigation Methods

Dynamic voltage restorers (DVR) can compensate for sags of up to 50% of the nominal voltage in less than 2 ms, keeping the load within operating limits. The most common mitigation technologies are:

| Method | Description | Typical Compensation Range |
|---|---|---|
| Dynamic Voltage Restorer (DVR) | Injects voltage in series via a power converter to compensate for the sag. | Sags of up to 50% (0.50 p.u.), response < 2 ms. |
| UPS (Uninterruptible Power Supply) | Provides backup with batteries; online mode completely isolates the load. | Covers sags of 100% (interruptions) depending on autonomy (minutes to hours). |
| Static Synchronous Compensator (STATCOM) | Compensates deep sags via fast reactive power exchange. | Sags of up to 30%–40% (0.30 p.u.–0.40 p.u.). |
| Fast-switched capacitors | Raise the voltage at the connection point during the event. | Sag attenuation of 10%–20% (0.10 p.u.–0.20 p.u.). |
| Automatic reclosers and protection coordination | Reduce the fault duration and therefore the voltage sag duration. | Depends on network topology. |

## Applicable Standards

IEEE 1159 classifies short-duration voltage variations into three temporal categories — instantaneous, momentary, and temporary — and provides the fundamental definitions of sag and swell. Other reference standards are:

- **IEC 61000‑4‑30 / EN 61000‑4‑30**: power quality measurement methods, including detection of dips and temporary overvoltages.
- **EN 50160**: characteristics of voltage supplied by distribution networks; establishes statistical limits for the frequency of voltage dips.
- **SEMI F47**: specification for semiconductor manufacturing equipment defining voltage sag tolerance limits.
- **ITIC (CBEMA)**: susceptibility curve for electronic equipment, widely used to evaluate immunity against sag/swell.

## Frequently Asked Questions (FAQ)

### What is the difference between a voltage sag and a blackout?
A voltage sag is a partial reduction in voltage (10%‑90%) lasting between 0.5 cycles and 1 minute; a blackout or interruption corresponds to a total loss of voltage (≥90% reduction) that can last for longer periods.

### Which equipment is most susceptible to voltage sags?
Electromechanical contactors, variable speed drives, PLCs, and discharge lamps are particularly sensitive; a sag of only 20% for 2‑3 cycles can stop a production line.

### How is a voltage sag measured according to standards?
A power quality analyzer that records the RMS voltage every half-cycle according to IEC 61000‑4‑30 is used; the event is characterized by its residual magnitude, duration, and time stamps.

### Are voltage swells harmful to equipment?
Yes. Voltages above 110% of nominal can damage power supplies, reduce the lifespan of LED luminaires, and cause overvoltages in electronic equipment if not protected.

### How can I mitigate voltage sags in an industrial plant?
The most effective solution is to install a DVR or an online UPS for critical loads; it is also possible to improve protection coordination and use soft starters to limit inrush currents.

### What duration must a voltage sag have to be considered according to IEEE 1159?
An event is classified as a voltage sag if its duration is greater than 0.5 cycles and less than or equal to 1 minute; shorter durations are considered transients, and longer ones are cataloged as sustained undervoltages.

## References
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-9/practical-considerations-transformers/
