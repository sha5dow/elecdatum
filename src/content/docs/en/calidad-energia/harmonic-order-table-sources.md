---
title: "Harmonic order table and sources"
sidebar:
  label: "Harmonic order table and sources"
description: "Technical reference: Harmonic order table and sources"
keywords: ["harmonic order table sources 3rd 5th 7th", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "harmonic-order-table"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

In an alternating current electrical system, harmonics are sinusoidal components whose frequency is an integer multiple of the fundamental power system frequency (50 Hz in Europe, Asia and much of the world; 60 Hz in the Americas and some Asian countries). These components arise as a consequence of non‑linear loads (rectifiers, variable frequency drives, electronic equipment with switched‑mode power supplies, etc.) that distort the current waveform, and to a lesser extent the voltage, causing power quality problems such as overheating of conductors and transformers, nuisance tripping of protection devices or pulsating torques in motors. The table below lists the most common harmonic orders in industrial and tertiary networks, their frequencies for the two standard fundamental frequencies, the phase sequence they exhibit in three‑phase systems, and the non‑linear loads that typically generate them.

## Harmonic Order Table and Typical Sources
Harmonics from order 1 (fundamental) up to order 25 are listed, with the corresponding frequencies for 50 Hz and 60 Hz networks, as well as the loads that predominantly inject them. Even harmonics are usually very low in magnitude in balanced systems due to the half‑wave symmetry of industrial loads, but they are included for completeness.

| Order (h) | Frequency @ 50 Hz (Hz) | Frequency @ 60 Hz (Hz) | Phase sequence | Typical sources |
|---|---|---|---|---|
| 1 (fund.) | 50 | 60 | Positive (+) | All linear loads; reference |
| 2 | 100 | 120 | Negative (−) | Half-wave rectifiers, asymmetries, unbalanced single‑phase loads |
| 3 | 150 | 180 | Zero (0) | Single‑phase power supplies with rectifier bridge and capacitive filter (computers, monitors, printers), electronic ballasts of compact fluorescent lamps, battery chargers, transformer saturation |
| 4 | 200 | 240 | Positive (+) | Similar to harmonic 2; levels usually negligible |
| 5 | 250 | 300 | Negative (−) | 6-pulse variable frequency drives, 6-pulse three‑phase rectifiers, arc furnaces, thyristor phase controllers, large uninterruptible power supply (UPS) systems |
| 6 | 300 | 360 | Zero (0) | Small asymmetries in 6‑pulse rectifiers; normally low |
| 7 | 350 | 420 | Positive (+) | Same sources as 5th harmonic: variable frequency drives, 6‑pulse rectifiers, arc furnaces, static converters |
| 8 | 400 | 480 | Negative (−) | Generally low level; asymmetric switching processes |
| 9 | 450 | 540 | Zero (0) | Massive single‑phase electronic loads (computers, LED lighting with uncorrected driver), higher-order triple harmonics from equipment with rectifier and capacitive filter |
| 10 | 500 | 600 | Positive (+) | Residual from half‑wave loads, imbalances |
| 11 | 550 | 660 | Negative (−) | 12‑pulse converters (characteristic harmonic), 6‑pulse rectifiers, induction furnaces |
| 12 | 600 | 720 | Zero (0) | Very low in balanced systems; may appear due to unbalance |
| 13 | 650 | 780 | Positive (+) | 12‑pulse converters (characteristic harmonic), traction systems, arc welding |
| 14 | 700 | 840 | Negative (−) | Residual contribution from switching equipment |
| 15 | 750 | 900 | Zero (0) | Accumulation of triple harmonics in data centers and commercial buildings, lighting systems with saturated magnetic ballast |
| 16 | 800 | 960 | Positive (+) | Small disturbances; origin similar to harmonic 14 |
| 17 | 850 | 1020 | Negative (−) | 18‑pulse converters, DC drives, arc furnaces |
| 18 | 900 | 1080 | Zero (0) | Typically low; associated with imbalances in networks with high presence of triplens |
| 19 | 950 | 1140 | Positive (+) | 18‑pulse converters, railway propulsion systems |
| 20 | 1000 | 1200 | Negative (−) | Residual switching |
| 21 | 1050 | 1260 | Zero (0) | Highly distorting single‑phase loads (appliances with non‑PFC power supplies) |
| 22 | 1100 | 1320 | Positive (+) | Normally insignificant level |
| 23 | 1150 | 1380 | Negative (−) | 24‑pulse converters, very specific industrial loads |
| 24 | 1200 | 1440 | Zero (0) | Minimal asymmetries |
| 25 | 1250 | 1500 | Positive (+) | Multilevel converters, very high power systems with high‑frequency switched inverters |

## Phase Sequence of Harmonics
In a balanced three‑phase system, the phase sequence of a harmonic of order h follows a cyclic pattern of three values: harmonics whose order is of the form **h = 3k+1** (1, 4, 7, 10, …) have **positive** sequence and create rotating fields in the same direction as the fundamental component; orders of the form **h = 3k+2** (2, 5, 8, 11, …) exhibit **negative** sequence and produce fields that rotate in the opposite direction, which can momentarily brake motors and increase losses; and harmonics that are **multiples of 3** (3, 6, 9, 12, …) show **zero** or homopolar sequence, meaning that the currents at these frequencies are in phase in all three lines and add arithmetically in the neutral conductor. This is why, in installations with a high density of non‑linear single‑phase loads (computers, electronic lighting), the neutral may carry currents higher than the phase currents, requiring oversizing to avoid overheating.

## Frequently Asked Questions (FAQ)

### Why do harmonics of order multiple of 3 (triplen) add in the neutral?
Because in a three‑phase system the zero‑sequence currents of the three phases are in phase with each other (0° displacement) instead of being 120° apart, so the return current through the neutral is the algebraic sum of the three phase currents. If the single‑phase loads generate 15 % third harmonic, the neutral current can reach up to 45 % of the phase current, even with balanced loads.

### What are the main sources of the 5th and 7th harmonics?
The 5th (250 Hz in a 50 Hz network) and 7th (350 Hz in a 50 Hz network) harmonics are the characteristic harmonics of six‑pulse three‑phase rectifiers, widely used in variable frequency drives, uninterruptible power supplies (UPS), industrial battery chargers and DC arc furnaces. Their typical amplitude in the input current of a 6‑pulse rectifier can be 20 % for the 5th harmonic and 14 % for the 7th with respect to the fundamental.

### What is the difference between positive, negative and zero sequence in harmonics?
Positive sequence produces a magnetic field rotating in the same direction as the fundamental, thus contributing to motor torque; negative sequence generates a field rotating in the opposite direction that opposes rotation, causing heating and vibrations in rotating machines; zero sequence does not produce a net rotating field but the currents add in the neutral and can saturate the magnetic cores of transformers with wye‑wye connection.

### How do harmonics affect induction motors?
Current harmonics increase copper losses due to the skin effect (resistive losses increase approximately with the square of the frequency) and iron losses (hysteresis losses are proportional to frequency and eddy current losses are proportional to the square of the frequency). Additionally, negative‑sequence harmonics, such as the 5th, create pulsating torques and a braking torque that reduces the effective efficiency of the motor, possibly causing vibrations and acoustic noise.

### Is it normal to find even harmonics in an electrical network?
Under ideal operating conditions, current and voltage waveforms exhibit half‑wave symmetry, which eliminates even harmonics. However, low‑level even harmonics can appear when there are loads that conduct asymmetrically (half‑wave rectifiers), transformers with asymmetric saturation, or severe unbalances between phases. Under normal conditions, even harmonics are usually below 1 % of the fundamental.

### What international standard regulates harmonic emission limits?
Standard IEC 61000‑3‑2 establishes harmonic current emission limits for equipment with input current ≤ 16 A per phase, classifying them into four classes (A, B, C and D) according to the type of equipment and the current waveform. For higher currents, IEC 61000‑3‑12 sets limits for equipment from 16 A to 75 A. At system level, IEEE 519 (used in the Americas) and IEC 61000‑3‑6 / EN 50160 (Europe) define compatibility levels and total harmonic distortion limits at the point of common coupling.

## Sources Consulted

- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-10/harmonic-phase-sequences/
