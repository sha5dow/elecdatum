---
title: "Power quality meter types"
sidebar:
  label: "Power quality meter types"
description: "Technical reference: Power quality meter types"
keywords: ["power quality meter types specifications", "calidad-energia"]
category: "calidad-energia"
topic: "metering"
subcategory: "power-quality-meters"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Power quality meters simultaneously analyze more than 500 electrical parameters, with sampling rates ranging from 128 to 1024 samples per cycle to capture high-speed transients. Their primary function is to evaluate deviations in voltage, current, and waveform relative to ideal nominal values, detecting phenomena such as harmonics, voltage fluctuations, unbalances, and transient events.

## Types by Installation

Power quality meters are classified into three main families according to their installation mode: portable, fixed (or panel-mounted), and semi-permanent. Each type responds to different needs for auditing, continuous monitoring, or temporary measurement campaigns.

| Type | Usage mode | Power supply | Typical accuracy | Relative cost |
|------|-------------|-------------|-----------------|----------------|
| Portable | Spot audits, fault diagnosis, pre-diagnosis studies | Rechargeable lithium-ion battery (7.4 V – 14.8 V) or mains | Class A per IEC 61000-4-30 | High |
| Fixed (panel) | Continuous monitoring in electrical cabinets, points of common coupling (PCC) | Mains 85 – 265 V AC or 100 – 300 V DC | Class A or S per IEC 61000-4-30 | Medium – High |
| Semi-permanent | Measurement campaigns from 1 week to 3 months, supply quality studies | Replaceable battery + optional mains supply | Class A or S per IEC 61000-4-30 | Medium |

## Types by Measurement Technology

The conversion and signal processing technology determines the instrument's ability to measure fast phenomena and calculate standardized indicators. Voltage measurement accuracies reach ±0.1% of reading in high-end instruments, while basic models operate with ±0.5% of reading.

| Technology | Operating principle | Typical bandwidth | Typical sampling rate |
|------------|---------------------------|----------------------|-------------------------------|
| A/D Conversion with DSP | Simultaneous sampling on all channels, digital signal processing (FFT, digital filtering) | 5 kHz – 150 kHz | 128 – 1024 samples/cycle (50 Hz) |
| Multiplexed A/D conversion | Sequential channel sampling with a single converter, suitable for slow parameters | Up to 2.5 kHz | 64 – 256 samples/cycle (50 Hz) |
| FPGA-based | Very high-speed hardware processing for transient detection | Up to 10 MHz | Up to 10 MS/s |
| Electromechanical (obsolete) | Induction coils and Ferraris discs, no spectral analysis capability | 45 – 65 Hz | Not applicable |

## Measured Parameters

A Class A power quality meter must measure at least 50 standardized parameters according to IEC 61000-4-30 Edition 3, including aggregated values, statistical indicators, and waveforms. The most complete instruments exceed 500 parameters with update rates of 200 ms for average voltage values.

| Parameter | Unit | Typical measurement range | Reference standard |
|-----------|--------|------------------------|---------------------|
| RMS Voltage | V | 0 – 1000 V AC / 0 – 1500 V DC | IEC 61000-4-30 |
| RMS Current | A | 0 – 6000 A (with external clamp) | IEC 61000-4-30 |
| Frequency | Hz | 42.5 – 57.5 Hz / 51 – 69 Hz (depending on network) | IEC 61000-4-30 |
| Total Harmonic Distortion (THD) | % | 0 – 100 % | IEC 61000-4-7 |
| Individual harmonics (up to 50th order) | % / V / A | 0 – 100 % of fundamental | IEC 61000-4-7 |
| Interharmonics | % / V / A | 0 – 100 % of fundamental | IEC 61000-4-7 |
| Flicker (Pst, Plt) | dimensionless | 0.2 – 10 | IEC 61000-4-15 |
| Voltage dips (sags) | % / ms | 0 – 100 % Un, 10 ms – 60 s | IEC 61000-4-30 |
| Temporary overvoltages (swells) | % / ms | 100 – 200 % Un, 10 ms – 60 s | IEC 61000-4-30 |
| Fast transients | kV / µs | 0 – 6 kV, > 5 µs rise time | IEC 61000-4-30 |
| Voltage unbalance | % | 0 – 10 % | IEC 61000-4-30 |
| Active, reactive, and apparent power | W, var, VA | Depends on voltage and current | IEEE 1459 |
| Power factor (total and displacement) | dimensionless | 0 – 1 capacitive/inductive | IEEE 1459 |
| Active and reactive energy | kWh, kvarh | 0 – 10⁹ kWh | IEC 62053-22 |

## Comparative Technical Specifications Table

The following table summarizes the most relevant specifications for three representative meter categories: Class A portable, Class A fixed, and disturbance recorder.

| Specification | Class A portable | Class A fixed | Disturbance recorder |
|----------------|------------------|--------------|-------------------------------|
| Voltage channels | 4 (3 phases + neutral) | 4 (3 phases + neutral) | 4 (3 phases + neutral) |
| Current channels | 4 (with external clamps) | 4 (with external transformers) | 4 (with external clamps) |
| Voltage accuracy class | 0.1 % reading | 0.1 % reading | 0.2 % reading |
| Bandwidth | 5 Hz – 150 kHz | 5 Hz – 150 kHz | 5 Hz – 10 MHz |
| Sampling rate | 256 samples/cycle (50 Hz) | 512 samples/cycle (50 Hz) | 10 MS/s (transients) |
| Internal memory | 8 GB – 32 GB | 32 GB – 128 GB | 64 GB – 512 GB |
| Display | LCD color 5,7" – 7" / 145 mm – 178 mm | LCD touch 7" – 10" / 178 mm – 254 mm | No display (remote operation) |
| Operating temperature | -10 °C to +50 °C / 14 °F to 122 °F | -25 °C to +70 °C / -13 °F to 158 °F | -20 °C to +65 °C / -4 °F to 149 °F |
| Protection rating | IP65 (case closed) | IP54 (front), IP20 (rear) | IP67 |
| Weight | 1,5 kg – 2,5 kg / 3.3 lb – 5.5 lb | 0,5 kg – 2 kg / 1.1 lb – 4.4 lb | 0,8 kg – 1,5 kg / 1.8 lb – 3.3 lb |
| Communications | USB, Ethernet, WiFi | Ethernet, RS-485, WiFi, 4G optional | Ethernet, WiFi, 4G |
| Applicable standards | IEC 61000-4-30 class A, IEC 61000-4-7, IEC 61000-4-15 | IEC 61000-4-30 class A, IEC 61000-4-7, IEC 61000-4-15 | IEC 61000-4-30 class A (steady state only) |
| Relative cost | High | Medium – High | Very high |

## Frequently Asked Questions (FAQ)

### What is the difference between a Class A and Class S meter according to IEC 61000-4-30?

Class A requires higher accuracy in voltage measurement (±0.1% of reading) and standardized aggregation algorithms without ambiguity. Class S allows less restrictive specifications, with accuracies of ±0.5% to ±1% of reading, and is used in statistical or less critical monitoring applications where verifiable metrological accuracy is not required.

### Can a power quality meter be used as a transient recorder?

Yes, if the instrument incorporates high-speed sampling and sufficient bandwidth. Meters with sampling ≥ 1 MS/s and bandwidth ≥ 1 MHz can capture transients with rise times up to 5 µs. Instruments designed exclusively for steady-state (bandwidth ≤ 150 kHz) do not detect fast transients.

### What minimum parameters must a power quality analyzer measure to comply with IEC 61000-4-30 Edition 3?

It must measure RMS voltage, RMS current, frequency, harmonics up to order 50, interharmonics, unbalance, flicker (Pst and Plt), voltage dips, temporary overvoltages, and interruptions. All these parameters must be recorded with timestamps synchronized by GPS or NTP with uncertainty less than 20 ms.

### How long can a portable meter record without draining the battery?

A typical Class A portable meter records between 6 and 10 hours with a 7.4 V – 14.8 V battery and 90 Wh capacity, measuring 4 voltages and 4 currents with display at 50% brightness. With display off and measuring only voltages, battery life can extend to 18 – 24 hours.

### Is it necessary to periodically calibrate a power quality meter?

Yes, calibration must be performed every 12 to 24 months in an accredited laboratory, as per manufacturer recommendations and IEC/ISO 17025 standards. Typical drift for Class A instruments is less than 0.05% per year, but external current transformers can introduce additional errors up to 0.5% if not calibrated simultaneously.

### What communications are essential in a permanent monitoring system?

For permanent monitoring in substations and industries, at least Ethernet and RS-485 with Modbus TCP/RTU and IEC 61850 protocols are required. WiFi and 4G connectivity is necessary for locations without structured cabling, while time synchronization via GPS or NTP with accuracy < 1 ms is mandatory according to IEC 61000-4-30 Class A.

## References
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-12/power-quality-measurement/
