---
title: "Motor overload trip classes"
sidebar:
  label: "Motor overload trip classes"
description: "Technical reference: Motor overload trip classes"
keywords: ["motor overload trip class 10 20 30", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "motor-protection"
subcategory: "motor-overload-classes"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Motor overload trip classes protect electric motors against excessive heating by defining the maximum time an overload relay takes to interrupt the circuit when the current exceeds a preset value, typically 600% of the rated current. This internationally standardized classification coordinates the protection system response with the motor's thermal and starting characteristics, preventing nuisance trips and prolonging insulation life.

## Standardized trip time classification
IEC 60947-4-1 defines three main trip classes —10, 20 and 30— which establish a maximum interruption time of 10 s for class 10 when the motor draws 600% of its rated current. The following table summarizes the time limits that overload relays must meet under starting and overcurrent conditions.

| Trip class | Maximum trip at 600% In (seconds/minutes) | Typical allowable starting time range |
| --- | --- | --- |
| 10 | 10 s / 0,17 min | < 10 s |
| 20 | 20 s / 0,33 min | 10 s – 20 s |
| 30 | 30 s / 0,50 min | 20 s – 30 s |

## Time‑current characteristic curve
The trip curve of a class 10 relay indicates that for a 600% In overload, the auxiliary contact opens in 10 s, while at moderate overloads of 200% the trip time extends to several minutes. This inverse‑time response, modeled by the Joule effect integral, replicates the actual heating of the winding and allows the motor to use its short‑term thermal capacity without premature protection activation.

| Overload level (% In) | Estimated trip time class 10 (s/min) | Estimated trip time class 20 (s/min) | Estimated trip time class 30 (s/min) |
| --- | --- | --- | --- |
| 200% | ≈ 120 s / 2,0 min | ≈ 240 s / 4,0 min | ≈ 360 s / 6,0 min |
| 300% | ≈ 30 s / 0,5 min | ≈ 60 s / 1,0 min | ≈ 90 s / 1,5 min |
| 600% (standardized limit) | 10 s / 0,17 min | 20 s / 0,33 min | 30 s / 0,50 min |

## Selection criteria according to application
Class 10 is selected for motors with light starting duty, where start‑up current exceeds 600% In for less than 10 s. Class 20 covers starts up to 20 s, and class 30 is reserved for high‑inertia loads that require acceleration times up to 30 s. An incorrect choice — a class that is too fast — causes nuisance trips at every start; a class that is too slow reduces winding thermal protection and can cut motor life by 50% for each 10 °C sustained rise above the insulation class limit.

## Factors that modify actual trip time
Ambient temperature can shorten the trip time by up to 30% compared to the catalog value because bimetal strips or electronic sensors integrate the cumulative heating effect. Other factors that shift the response curve include enclosure ventilation, installation altitude, and thermal dissipation of the associated contactor. The presence of current harmonics adds extra heating without a proportional increase in the relay reading; therefore, in networks with total harmonic distortion above 10%, electronic protection with true RMS measurement is recommended.

## Frequently Asked Questions (FAQ)
### What is the difference between class 10 and class 10A?
Class 10A imposes a maximum trip time of 10 s at 600% In, but also requires a minimum trip time of 2 s, ensuring the relay does not operate during very short starts that general class 10 does not bound with the same precision.
### Can a class 20 relay be used on a motor that only requires class 10?
Yes, but the motor will be less thermally protected. The class 20 relay allows the overload current to flow for 20 s, twice the time the winding design can withstand, reducing insulation service life.
### What happens if the actual starting time of the motor exceeds 30 s?
None of the standardized classes guarantees protection without tripping during start‑up. Electronic protection with continuous winding temperature monitoring via RTD sensors or PTC thermistors should be considered, or the starting system must be redesigned.
### Are trip classes the same under NEMA and IEC standards?
Not exactly. IEC defines classes 10, 20 and 30, while NEMA uses trip classes 10, 20 and 30 with slightly different time tolerances at low overload. Equivalence is valid at the 600% In point, but in practice NEMA relays tend to be slightly faster at moderate overloads.
### Does pre‑heating of the motor affect the trip time?
Yes, because the overload relay — especially the bimetal type — responds to accumulated energy. A motor that has already operated at full load for hours may trip in less than 4 s under a 600% In overload if the relay is thermally saturated.
### How is the trip class of a relay verified in the field?
A current of 600% of the relay's In is injected and the time until the auxiliary contact opens is timed. The obtained value must be less than the maximum limit of the declared class (10, 20 or 30 s). The test must be carried out with the relay cold so as not to falsify the measurement.

## References
- **electrical4u.com**: https://www.electrical4u.com/motor-thermal-overload-protection/
