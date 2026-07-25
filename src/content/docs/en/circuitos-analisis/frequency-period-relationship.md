---
title: "Frequency and period relationship"
sidebar:
  label: "Frequency and period relationship"
description: "Technical reference: Frequency and period relationship"
keywords: ["frequency period relationship formula Hz", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "ac-fundamentals"
subcategory: "frequency-period"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Frequency and period are two inversely proportional quantities that describe the speed at which a cyclic phenomenon occurs; for example, a frequency of 60 Hz (60 cycles per second) corresponds to a period of 16.67 ms (0.01667 s). Frequency is measured in hertz (Hz), a unit equivalent to s⁻¹, while period is expressed in seconds (s) or submultiples such as milliseconds (ms) or microseconds (µs). In alternating current circuits, generators, oscillators, and communication systems, the relationship between these two variables is fundamental for analyzing waveforms, calculating reactances, and synchronizing signals.

## Fundamental Formula
The mathematical relationship linking frequency (f) and period (T) is expressed by a single equation, whose direct application allows calculating one magnitude from the other without additional instruments.

> **f = 1 / T**

where:

| Variable | Meaning | Unit (metric / imperial) |
|----------|---------|--------------------------|
| f | frequency | Hz (hertz) — 1 cycle per second / 1 cycle per second |
| T | period | s (second) / s (second) |

Solving for the period yields the equivalent expression:

> **T = 1 / f**

Both forms indicate that an increase in frequency proportionally reduces the period, and vice versa.

## Mathematical Relationship
A 1 kHz (1000 Hz) signal has a period of 1 ms (0.001 s), which evidences the exact reciprocal nature between both variables. The relationship is valid for any periodic phenomenon, whether electrical, mechanical, or electromagnetic. Doubling the frequency reduces the period by half; for example, going from 50 Hz to 100 Hz implies the period decreases from 20 ms to 10 ms. The conversion between units is based on the International System scale: 1 kHz = 1000 Hz, 1 MHz = 10⁶ Hz, 1 GHz = 10⁹ Hz, and the corresponding periods are expressed in ms, µs, or ns.

## Practical Example
An audible tone of 500 Hz, common in speaker and alarm systems, completes a cycle in exactly 0.002 s (2 ms). Step-by-step calculation using the formula T = 1 / f:

| Step | Operation | Result (metric / imperial) |
|------|-----------|----------------------------|
| 1 | Identify f = 500 Hz | f = 500 Hz / 500 Hz |
| 2 | Apply T = 1 / (500 Hz) | T = 0.002 s / 0.002 s |
| 3 | Convert to milliseconds | T = 2 ms / 2 ms |

In electrical engineering, an alternator that generates 5 complete cycles in 100 ms has a period per cycle of T = 20 ms, which equates to a frequency of f = 1 / 0.020 s = 50 Hz, a typical value for European power grids.

## Conversion Table
The following table provides immediate equivalence between the most common frequency values and their corresponding period.

| Frequency (metric / imperial) | Period (metric / imperial) | Alternate notation |
|-------------------------------|----------------------------|--------------------|
| 1 mHz (0.001 Hz) / 1 mHz | 1 ks (1000 s) / 1 ks | 16 min 40 s |
| 1 Hz / 1 Hz | 1 s / 1 s | 1 s |
| 1 kHz (1000 Hz) / 1 kHz | 1 ms (0.001 s) / 1 ms | 1 ms |
| 1 MHz (1 000 000 Hz) / 1 MHz | 1 µs (0.000001 s) / 1 µs | 1 µs |
| 1 GHz (1 000 000 000 Hz) / 1 GHz | 1 ns (0.000000001 s) / 1 ns | 1 ns |
| 1 THz (1 000 000 000 000 Hz) / 1 THz | 1 ps (0.000000000001 s) / 1 ps | 1 ps |

The table shows that the 60 Hz frequency of American power grids translates to a period of 16.67 ms, while the European 50 Hz corresponds to 20 ms.

## Applications in Circuits
On an oscilloscope analyzing a 100 MHz sine wave (100 million cycles per second), the period observed on screen is 10 ns, a key value for verifying waveform integrity. Indirect frequency measurement through period is a standard laboratory technique: the duration of one cycle is measured on the horizontal scale and the reciprocal is calculated. In power systems, 2nd order harmonics (100 Hz on a 50 Hz fundamental) or 3rd order (150 Hz) distort the signal and generate periods of 10 ms and 6.67 ms respectively, affecting the operation of motors and transformers. The frequency-period relationship also enables the design of filters, resonant circuits, and oscillators: setting a period of 0.1 µs is equivalent to selecting a frequency of 10 MHz, a typical frequency in amateur radio transmitters.

## Frequently Asked Questions (FAQ)
### What is frequency?
Frequency, measured in hertz (Hz), represents the number of cycles completed in one second; for example, 60 Hz indicates 60 cycles each second.

### What is period?
The period is the time required for a repetitive phenomenon to complete one exact cycle; a 2 Hz signal has a period of 0.5 s.

### What is the formula relating frequency and period?
The formula is f = 1 / T, where f is the frequency in Hz and T is the period in seconds, applicable to any periodic signal.

### How do you convert frequency to period?
The reciprocal value is calculated as T = 1 / f; for example, 400 Hz gives a period of 0.0025 s (2.5 ms).

### How does the period affect the frequency in an AC circuit?
The smaller the period, the higher the frequency; a 4-pole generator rotating at 1500 rpm produces a frequency of 50 Hz, according to the relationship f = (PN) / 120.

### What unit is used for frequency?
The International System unit is the hertz (Hz), equivalent to s⁻¹, although in rotating applications rpm (revolutions per minute) is also used; 60 rpm equals 1 Hz.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/sound-frequency-wavelength-d_56.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-1/ac-waveforms/
- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
