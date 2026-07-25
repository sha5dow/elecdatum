---
title: "Frequency to RPM motor conversion"
sidebar:
  label: "Frequency to RPM motor conversion"
description: "Technical reference: Frequency to RPM motor conversion"
keywords: ["frequency RPM motor conversion table poles", "converters"]
category: "converters"
topic: "frequency-units"
subcategory: "frequency-to-rpm-motor-conversion"
skill: "converter-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The synchronous speed of a 2-pole induction motor fed at 50 Hz is 3000 rpm (314.16 rad/s), while at 60 Hz it reaches 3600 rpm (376.99 rad/s). The actual speed at full load is slightly lower due to slip, being around 2850 rpm (298.45 rad/s) and 3450 rpm (361.28 rad/s) respectively. The relationship between frequency, number of magnetic poles, and rotational speed is one of the most used conversions in the sizing and analysis of alternating current electric motors.

## Conversion principle
At 50 Hz, a 4-pole motor rotates synchronously at 1500 rpm (157.08 rad/s). The rotation speed of the stator magnetic field — synchronous speed — is directly proportional to the mains frequency and inversely proportional to the number of pole pairs. In a real motor, the rotor never reaches synchronous speed; the difference is expressed by slip, which is usually between 2% and 5% at full load. This conversion allows predicting the rated speed of any induction motor knowing only the supply frequency and the number of poles.

## Formula
The expression relating supply frequency (f) in hertz (Hz), the number of poles (p) of the motor, and synchronous speed (Ns) in revolutions per minute (rpm) is:

> **Ns (rpm) = (120 × f) / p**

Where:
- **Ns** = synchronous speed in revolutions per minute (rpm)
- **f** = mains supply frequency in hertz (Hz)
- **p** = total number of magnetic poles in the stator (even number, typically 2, 4, 6, 8…)

To obtain the synchronous angular speed (ωs) in radians per second (rad/s) use:

> **ωs (rad/s) = (4π × f) / p = (2π × Ns) / 60**

The actual speed at full load (N) is calculated considering slip (s):

> **N = Ns × (1 − s)**

## Speed table by number of poles and frequency
The following table lists the synchronous and full-load speeds for 2, 4, 6, and 8 pole motors at standard frequencies of 50 Hz and 60 Hz.

| Poles | Frequency (Hz) | Synchronous speed (rpm / rad/s) | Full load speed (rpm / rad/s) |
| --- | --- | --- | --- |
| 2 | 50 | 3000 rpm / 314,16 rad/s | 2850 rpm / 298,45 rad/s |
| 2 | 60 | 3600 rpm / 376,99 rad/s | 3450 rpm / 361,28 rad/s |
| 4 | 50 | 1500 rpm / 157,08 rad/s | 1425 rpm / 149,23 rad/s |
| 4 | 60 | 1800 rpm / 188,50 rad/s | 1725 rpm / 180,64 rad/s |
| 6 | 50 | 1000 rpm / 104,72 rad/s | 950 rpm / 99,48 rad/s |
| 6 | 60 | 1200 rpm / 125,66 rad/s | 1150 rpm / 120,43 rad/s |
| 8 | 50 | 750 rpm / 78,54 rad/s | 700 rpm / 73,30 rad/s |
| 8 | 60 | 900 rpm / 94,25 rad/s | 850 rpm / 89,01 rad/s |

## Calculation example
For a 6-pole motor fed at 60 Hz, the theoretical synchronous speed is calculated as 120 × 60 / 6 = 1200 rpm (125.66 rad/s). With a typical slip of 4% (s = 0.04), the full load speed would be 1200 × (1 − 0.04) = 1152 rpm (120.63 rad/s). This result practically coincides with the tabulated value of 1150 rpm (120.43 rad/s), slightly adjusted by the actual slip of the standard motor.

## Frequently Asked Questions (FAQ)
### What is synchronous speed in an induction motor?
It is the rotation speed of the rotating magnetic field created by the stator. It depends exclusively on the supply frequency and the number of poles, and represents the upper limit at which the rotor can rotate. The rotor always rotates at a slightly lower speed due to the slip required to induce current in it.

### How does the number of poles influence motor speed?
The greater the number of poles, the lower the synchronous speed for the same frequency. For example, at 50 Hz a 2-pole motor rotates at 3000 rpm, while an 8-pole motor rotates at 750 rpm. Speed is inversely proportional to the number of poles.

### What is typical slip and how does it affect actual speed?
Slip at full load is usually 2% to 5% in standard induction motors. The actual speed is obtained by subtracting that percentage from the synchronous speed: for example, a 4-pole motor at 50 Hz with 1500 rpm synchronous rotates at 1425 rpm with a 5% slip.

### What formula relates frequency, number of poles, and speed?
The fundamental formula is Ns = (120 × f) / p, with Ns in rpm, f in Hz, and p the number of poles. To obtain the angular speed in rad/s, multiply Ns by 2π/60 or use ωs = (4π × f) / p.

### How do you convert rpm to radians per second?
To convert a speed in revolutions per minute (rpm) to radians per second (rad/s) multiply by 2π/60, i.e., by 0.10472. For example, 3000 rpm equals 3000 × 0.10472 ≈ 314.16 rad/s.

### Why do 50 Hz and 60 Hz motors have different speeds?
Because synchronous speed is directly proportional to frequency. A motor designed for 50 Hz rotates at 3000 rpm with 2 poles, while at 60 Hz it reaches 3600 rpm with the same poles. This difference must be considered when selecting motors for regions with different mains frequencies.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-frequency-speed-d_456.html
