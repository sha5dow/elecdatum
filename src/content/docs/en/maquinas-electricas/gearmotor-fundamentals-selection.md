---
title: "Gearmotor fundamentals and selection"
sidebar:
  label: "Gearmotor fundamentals and selection"
description: "Technical reference: Gearmotor fundamentals and selection"
keywords: ["gearmotor fundamentals selection ratio", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "gearmotor-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## What is a gearmotor?
A gearmotor integrates an electric induction motor with a gear reduction box into a single compact assembly, delivering output torques typically ranging from 0,1 N·m / 0,074 lbf·ft up to over 50 000 N·m / 36 878 lbf·ft. This design eliminates external couplings, reduces installation space, and simplifies maintenance by sharing a common housing and often a single output shaft. The motor power is transmitted through gear stages that reduce speed and multiply torque, adapting electrical energy to mechanical energy directly at the point of use.

## Operating principle
The motor shaft rotates at a nominal speed of 1500 r/min (50 Hz) or 1800 r/min (60 Hz) in standard four-pole applications, and the gearbox reduces that speed via the transmission ratio, while the output torque is multiplied by approximately the same factor, discounting efficiency losses. Each gear stage transmits power through toothed wheels that progressively mesh; in a simple gear train, the output speed *S*ₒ (r/min) equals the input speed *S*ᵢ divided by the transmission ratio *r*, provided that efficiency is considered separately.

## Transmission ratio
The transmission ratio indicates how many revolutions the input shaft must make for the output shaft to complete one turn; in industrial single-stage gearmotors, ratios from 1:1 up to approximately 10:1 are used, while planetary or multi-stage configurations achieve ratios exceeding 100:1 to 300:1. This quantity is the quotient between the number of teeth on the driven gear and the number of teeth on the driving gear, and it determines the transformation of speed and torque according to the laws of gear mechanics.

## Formulas for calculating torque, speed, and power
The output behavior of a gear reducer is governed by three basic expressions, where efficiency *μ* directly affects torque and power, but not speed (ideally without slippage). The formulas are based on input values and the transmission ratio *r* = (input speed) / (output speed).

> **Output torque: *M*ₒ = *M*ᵢ · *r* · *μ***  
> **Output speed: *S*ₒ = *S*ᵢ / *r***  
> **Output power: *P*ₒ = *P*ᵢ · *μ***

| Variable | Meaning | Unit (metric / imperial) |
| --- | --- | --- |
| *M*ₒ | Output torque | N·m / lbf·ft |
| *M*ᵢ | Input torque | N·m / lbf·ft |
| *r* | Transmission ratio (dimensionless) | — |
| *μ* | Gear efficiency (decimal) | — (e.g., 0,94) |
| *S*ₒ | Output speed | r/min or rad/s (same in imperial) |
| *S*ᵢ | Input speed | r/min or rad/s (same in imperial) |
| *P*ₒ | Output power | kW / hp |
| *P*ᵢ | Input power | kW / hp |

Practical example: with an input torque of 500 N·m / 369 lbf·ft, a transmission ratio of 3,8 and an efficiency of 0,9, the output torque is (500 N·m)·(3,8)·(0,9) = 1710 N·m / 1261 lbf·ft. For an input speed of 2000 r/min and the same ratio, the output speed is 2000 / 3,8 ≈ 526 r/min. Similarly, an input power of 300 kW / 402 hp produces an output power of 300 kW · 0,9 = 270 kW / 362 hp.

## Efficiency and losses in the gear reducer
Losses in a gearmotor mainly come from tooth friction, bearing friction, and lubricant churning; the typical efficiency of a spur gear reducer ranges between 94% and 98%, while that of a worm‑gear reducer varies between 50% and 90% depending on ratio and lead. The overall efficiency of the motor‑gearmotor assembly is obtained by multiplying the motor efficiency (usually 85–95% for induction motors) by the gearbox efficiency.

| Reducer type | Efficiency range (approximate) | Comment |
| --- | --- | --- |
| Spur / helical gears | 94 – 98 % | Low losses, suitable for continuous use |
| Planetary | 96 – 98 % | High torque density, very efficient |
| Worm gear (worm and wheel) | 50 – 90 % | High ratios in one stage, but efficiency drops with ratio |
| Bevel‑helical | 94 – 97 % | Transmission between perpendicular shafts |

## Selection criteria
To select a gearmotor, one usually starts from a required output speed, for example 100 r/min, and a necessary output torque of 50 N·m / 36,9 lbf·ft. Using the nominal input speed of the motor (1750 r/min at 60 Hz), the required transmission ratio is determined (≈17,5:1). Then it is verified that the nominal torque of the gearmotor, corrected by the service factor, exceeds the torque demanded by the load. Additionally, the following are evaluated: type of load (uniform, with shocks), duty cycle, mounting position, ambient temperature, and motor insulation class.

## Typical service factors
The service factor *fs* is a safety multiplier that adjusts the nominal torque of the gearmotor to the actual operating conditions; a value of 1,0 corresponds to continuous service with uniform load and few starts (less than 5 per hour), while in applications with severe impacts it can reach 2,0 or more. The following table shows indicative values according to the nature of the load and the type of driven machine.

| Application | Service factor *fs* range |
| --- | --- |
| Belt conveyors (uniform load) | 1,0 – 1,25 |
| Agitators, mixers (medium load) | 1,25 – 1,5 |
| Bucket elevators, extruders | 1,5 – 1,75 |
| Crushers, rolling mills, presses | 1,75 – 2,0 or higher |

*Note: the exact values depend on the number of daily operating hours and the frequency of starts, and should be consulted in the manufacturer's catalogs.*

## Frequently Asked Questions (FAQ)

### How is the output torque of a gearmotor calculated knowing the motor torque and the transmission ratio?
    The output torque is obtained by multiplying the input torque by the transmission ratio and by the gear reducer efficiency; with a motor of 10 N·m / 7,4 lbf·ft, a ratio of 10:1 and an efficiency of 90 %, the torque available at the output shaft is 10 × 10 × 0,9 = 90 N·m / 66,4 lbf·ft.

### What is the typical efficiency of a worm-gear gearmotor compared to a spur gear one?
    A worm‑gear reducer can have efficiencies from 50 % (high ratios, 60:1 or more) up to 90 % (low ratios), while a single‑stage spur gear reducer usually yields between 94 % and 98 %; the difference is critical in continuous operation applications where 10 percentage points of efficiency represent hundreds of kW·h wasted per year.

### What service factor should I choose for a belt conveyor that operates 16 hours a day with frequent starts?
    For a conveyor that works more than 10 hours daily and experiences 5 to 10 starts per hour, a service factor of 1,25 to 1,5 is recommended. With a continuous torque demand of 200 N·m / 147,5 lbf·ft, the gearmotor should offer at least 200 × 1,5 = 300 N·m / 221,3 lbf·ft of nominal torque.

### Is it possible to couple a gearmotor directly to the load without flexible elements?
    Yes, provided that the manufacturer's alignment tolerance allows it; an angular misalignment greater than 0,5°/0,5° can reduce bearing life by 50 % or more. In loads with moderate vibrations, a flexible coupling is inserted or a gearmotor with a hollow shaft and keyway that accepts slight misalignments is chosen.

### How do I determine the required transmission ratio if I need an output speed of 60 r/min with a 4-pole motor at 50 Hz?
    The synchronous speed of a 4-pole motor at 50 Hz is 1500 r/min. If the full-load speed is around 1450 r/min, the required transmission ratio is 1450 / 60 ≈ 24,2:1. The nearest available nominal ratio would be chosen, for example 25:1, verifying that the actual output speed (1450 / 25 = 58 r/min) is acceptable for the process.

### When is it advisable to use a planetary gearmotor instead of a conventional parallel shaft one?
    A planetary gearmotor offers torque densities up to 3 times higher than those of a parallel shaft reducer of the same size, with efficiencies reaching 96–98 %. It is preferred when installation space is critical and torques greater than 500 N·m / 369 lbf·ft are required in a reduced diameter, for example in robotics or machine tool spindles.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
