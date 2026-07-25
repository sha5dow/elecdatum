---
title: "Grounding electrode conductor sizing"
sidebar:
  label: "Grounding electrode conductor sizing"
description: "Technical reference: Grounding electrode conductor sizing"
keywords: ["grounding electrode conductor size table", "conductores-cables"]
category: "conductores-cables"
topic: "grounding-conductors"
subcategory: "grounding-electrode-conductor"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Description and Function
The grounding electrode conductor is the bridge that connects the grounding system of an electrical installation to the electrode (rod, plate, ring, or buried metallic structure). Its main function is to establish a low-impedance path to earth ground to divert fault currents, atmospheric overvoltages, and electrostatic discharges, ensuring equipotential bonding and safe operation of protective devices. The size of this conductor is selected based on the size of the largest service entrance conductor, not the rated current of the main breaker.

## Applicable Standard
The primary normative reference is Article 250 of the *National Electrical Code* (NEC), particularly Table 250.66 for copper and aluminum conductors. This table relates the equivalent area of the service phase conductors to the minimum size of the grounding electrode conductor. Rod, pipe, or plate electrodes receive differentiated treatment according to Section 250.66(A), while concrete-encased electrodes are governed by 250.66(B).

## Selection Table per NEC 250.66
The minimum size of the copper grounding electrode conductor is obtained from the following correspondence, where the input size is the largest service conductor or its equivalent area in the case of parallel conductors.

| Size of Copper Service Entrance Conductor (AWG/kcmil) | Minimum Size of Copper Grounding Electrode Conductor (AWG/kcmil) | Cross-Sectional Area of Electrode Conductor (mm² / in²) |
| --- | --- | --- |
| Up to 2 AWG inclusive | 8 | 8.36 mm² / 0.0131 in² |
| 1 or 1/0 | 6 | 13.3 mm² / 0.0206 in² |
| 2/0 or 3/0 | 4 | 21.1 mm² / 0.0327 in² |
| Over 3/0 up to 350 | 2 | 33.6 mm² / 0.0523 in² |
| Over 350 up to 600 | 1/0 | 53.5 mm² / 0.0830 in² |
| Over 600 up to 1100 | 2/0 | 67.4 mm² / 0.1045 in² |
| Over 1100 | 3/0 | 85.0 mm² / 0.1318 in² |

## Exceptions to the General Rule
- **Rod, pipe, or plate electrode (NEC 250.66(A)):** When the only electrode is of this type, the grounding conductor need not be larger than 6 AWG copper (13.3 mm² / 0.0206 in²), regardless of the service size.
- **Concrete-Encased Electrode — UFER (NEC 250.66(B)):** The conductor connecting the steel reinforcement of a foundation as an electrode need not be larger than 4 AWG copper (21.1 mm² / 0.0327 in²).
- **Multiple Electrodes:** When several electrodes are used and joined by a common grounding bridge, the size of that bridge is determined by the general table, while the individual taps to each electrode may be governed by the previous exceptions.

## Relevant AWG Conductor Dimensions
To facilitate dimensional interpretation, the physical characteristics of the most commonly used sizes for grounding electrode conductors are provided, according to the *American Wire Gauge* standards.

| AWG Size | Solid Copper Diameter (mm / in) | Cross-Sectional Area (mm² / in²) |
| --- | --- | --- |
| 8 | 3.26 mm / 0.129 in | 8.36 mm² / 0.0131 in² |
| 6 | 4.11 mm / 0.162 in | 13.3 mm² / 0.0206 in² |
| 4 | 5.19 mm / 0.204 in | 21.1 mm² / 0.0327 in² |
| 2 | 6.54 mm / 0.258 in | 33.6 mm² / 0.0523 in² |
| 1/0 | 8.25 mm / 0.325 in | 53.5 mm² / 0.0830 in² |
| 2/0 | 9.27 mm / 0.365 in | 67.4 mm² / 0.1045 in² |
| 3/0 | 10.4 mm / 0.410 in | 85.0 mm² / 0.1318 in² |

## Sizing Example
If an installation has two 250 kcmil copper conductors per phase in parallel, the equivalent service entrance area is 500 kcmil. This value falls in the range "over 350 up to 600 kcmil" of Table 250.66. Therefore, the required copper grounding electrode conductor is 1/0 AWG, with a minimum cross-sectional area of 53.5 mm² / 0.0830 in². If, instead, the only electrode were an embedded copper rod, Exception 250.66(A) would allow reducing the size to 6 AWG (13.3 mm² / 0.0206 in²).

## Frequently Asked Questions (FAQ)
### What is the minimum size of the grounding electrode conductor when the largest copper service entrance conductor is 2 AWG?
8 AWG (8.36 mm² / 0.0131 in²) is the minimum size required by NEC 250.66 for a service with entrance up to 2 AWG.

### What maximum ground resistance value does the NEC allow for a single electrode?
25 ohms is the upper limit of ground resistance that a single electrode must have; otherwise, an additional electrode must be installed.

### What is the cross-sectional area of a solid copper 6 AWG conductor?
13.3 mm² / 0.0206 in² of conductive area is provided by a 6 AWG wire, sufficient to connect rod or pipe electrodes per Exception 250.66(A).

### From what service size does a 1/0 AWG grounding electrode conductor become mandatory?
From 350 kcmil up to 600 kcmil of copper entrance conductor, the table requires a minimum of 1/0 AWG (53.5 mm² / 0.0830 in²).

### What is the maximum recommended length for a grounding electrode conductor without splices?
6 m / 20 ft is a common practical length that keeps impedance low; the NEC does not set a distance limit, but it does require that the connection be continuous without splices.

### What is the outer diameter of a solid copper 2 AWG conductor?
6.54 mm / 0.258 in is the diameter of a solid 2 AWG bare conductor, a size used for electrodes when the service exceeds 3/0 AWG.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **southwire.com**: https://www.southwire.com/calculators
