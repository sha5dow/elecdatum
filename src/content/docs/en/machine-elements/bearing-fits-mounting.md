---
title: "Bearing fits and mounting tolerances"
sidebar:
  label: "Bearing fits and mounting tolerances"
description: "Technical reference: Bearing fits and mounting tolerances"
keywords: ["bearing fits shaft housing tolerance mounting", "machine-elements"]
category: "machine-elements"
topic: "bearings"
subcategory: "bearing-fits"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

Engineering fits for bearings define the clearance or interference between the inner ring and the shaft, and between the outer ring and the housing, determining whether the parts can rotate freely, require mounting force, or form a permanent joint. Correct fit selection is critical to ensure bearing service life, rotation accuracy, and load capacity of the assembly.

## Overview

The ISO system of fits classifies couplings into three main categories: clearance (always exists play), transition (may result in small clearance or interference), and interference (always exists tightness). For bearings, the ISO alphanumeric designation such as H7/p6 specifies the housing tolerance in uppercase and the shaft tolerance in lowercase, allowing the manufacturer and assembler to know the exact dimensional limits without referring to full tables on each drawing. Fits are selected during the design phase considering the type of load (rotating or stationary), rotational speed, operating temperature, and support material.

## Standard dimensions and tolerances

The ISO system of limits and fits establishes the hole-basis as the preferred method for general bearing applications. ISO 286 defines tolerance grades IT5 to IT11 for shaft and housing diameters. Commonly specified fits for bearings are:

| ISO fit | Type | Nominal diameter 50 mm - Hole (µm / µin) | Nominal diameter 50 mm - Shaft (µm / µin) |
|---|---|---|---|
| H7/g6 | Sliding clearance | +25 µm / 0 to +984 µin | −9 µm / −354 to −25 µm / −984 µin |
| H7/h6 | Locational clearance | +25 µm / 0 to +984 µin | 0 to −16 µm / −630 µin |
| H7/k6 | Transition similar | +25 µm / 0 to +984 µin | +18 µm / +709 to +2 µm / +79 µin |
| H7/n6 | Transition fixed | +25 µm / 0 to +984 µin | +33 µm / +1299 to +17 µm / +669 µin |
| H7/p6 | Interference press | +25 µm / 0 to +984 µin | +42 µm / +1654 to +26 µm / +1024 µin |
| H7/s6 | Interference forced | +25 µm / 0 to +984 µin | +59 µm / +2323 to +43 µm / +1693 µin |

The dimensional tolerance of the bearing manufacturer is typically applied to the bore diameter and outside diameter according to precision classes P0, P6, P5, and P4.

## Load capacities and operating limits

An interference fit increases the radial load capacity of the assembly because it eliminates micro-slippage between the bearing ring and its seat, preventing frictional wear and fretting corrosion. However, excessive tightness can reduce the internal clearance of the bearing below 0 µm / 0 µin, causing overheating and premature failure. The minimum required load for ball bearings is approximately 0.01 C (dynamic load capacity), and for roller bearings 0.02 C, which must be ensured by a proper fit or external preload.

## Selection criteria

Fit selection is fundamentally based on three operating conditions: rotating load (the ring rotates relative to the load vector), stationary load (the ring remains stationary relative to the load), or indeterminate load. For the ring experiencing rotating load, an interference fit is recommended; for stationary load, clearance or light transition is allowed. Rotational speed above 5000 rpm leads to the selection of more precise fits and consideration of externally centered cages. Thermal expansion in service may require increasing the initial clearance when the shaft and housing are made of materials with different expansion coefficients.

## Mounting considerations

Mounting of bearings with interference fit requires methods that avoid damaging the raceways and cages. The maximum heating temperature for thermal expansion must not exceed 120 °C / 248 °F for standard bearings, nor 200 °C / 392 °F for bearings with dimensional stabilization treatment. The cold pressing force is always applied on the ring being mounted — never transmit force through the rolling elements. During mounting of the bearing into the housing, the temperature difference between parts can be up to 80 °C / 176 °F to facilitate insertion without damage.

## Selection tables by application

| Typical application | Shaft fit | Housing fit |
|---|---|---|
| Electric motor, rotating shaft stationary load | k6 or m6 (+2 µm to +18 µm / +79 to +709 µin) | H7 or J7 (+25 µm to 0 / +984 to 0 µin) |
| Centrifugal fan, light conditions | j6 (−4 µm to +8 µm / −157 to +315 µin) | H7 (+25 µm to 0 / +984 to 0 µin) |
| Gearbox, heavy load | m6 or n6 (+8 µm to +25 µm / +315 to +984 µin) | P7 (−14 µm to −39 µm / −551 to −1535 µin) |
| Automotive wheel hub | s6 (+43 µm to +59 µm / +1693 to +2323 µin) | N7 (−10 µm to −36 µm / −394 to −1417 µin) |
| Water pump, continuous rotation | h6 (0 to −16 µm / 0 to −630 µin) | H8 (+39 µm to 0 / +1535 to 0 µin) |
| Machine tool spindle | k5 or m5 (+2 µm to +15 µm / +79 to +591 µin) | JS6 (±8 µm / ±315 µin) |

## Common failures and causes

Incorrect fit selection manifests through characteristic failures: excessively loose fit causes circumferential slippage of the ring on its seat, generating wear marks, fretting corrosion, and vibration at rotation frequency. An excessively tight fit reduces the internal radial clearance below the minimum of 3 µm / 118 µin for small ball bearings, causing uncontrolled heating and seizing. Misalignment during mounting generates parasitic axial loads that reduce L10 service life by up to 30% compared to the theoretical calculation.

## Frequently asked questions

### What maximum temperature does a bearing withstand during heat mounting?

The safe maximum temperature for heating a standard bearing is 120 °C / 248 °F, and should not be exceeded unless the manufacturer has applied dimensional stabilization treatment up to 200 °C / 392 °F. Uniform heating is done with induction plates or a thermostatically controlled oil bath.

### How much minimum interference does a bearing ring need under rotating load?

For steel shafts with diameter between 20 mm / 0.787 in and 50 mm / 1.969 in, a minimum interference of 2 µm / 79 µin to 8 µm / 315 µin is recommended, depending on speed and load magnitude. The general rule is that interference increases proportionally with shaft diameter.

### What is the minimum allowable internal radial clearance after mounting?

The minimum internal radial clearance after mounting must be greater than 0 µm / 0 µin, with a recommended residual value between 3 µm / 118 µin and 10 µm / 394 µin in deep groove ball bearings, and up to 15 µm / 591 µin in roller bearings.

### What diametral interference value corresponds to an H7/p6 fit on a 50 mm / 1.969 in shaft?

The diametral interference in an H7/p6 fit for diameter 50 mm / 1.969 in ranges between a minimum of 1 µm / 39 µin (maximum hole line and minimum shaft) and a maximum of 42 µm / 1654 µin (minimum hole and maximum shaft).

### When is a clearance fit required instead of interference for bearings?

A clearance fit is required on the stationary loaded ring, such as the outer ring of a bearing supporting a shaft without axial movement, or when the bearing must slide on its seat to compensate for expansions greater than 0.1 mm / 0.004 in during operation.

### What is the practical difference between a k6 fit and an m6 fit on the same nominal diameter?

For a nominal diameter of 50 mm / 1.969 in, the k6 fit provides interference between +2 µm / +79 µin and +18 µm / +709 µin, while m6 provides between +8 µm / +315 µin and +25 µm / +984 µin. The maximum interference difference is 7 µm / 275 µin, sufficient to go from a light transition fit to one with reliable interference across the entire tolerance.

## References consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/centrifugal-pumps-standards-d_1116.html
- **mcmaster.com**: https://www.mcmaster.com/products/bearing-housings/

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/centrifugal-pumps-standards-d_1116.html
- **mcmaster.com**: https://www.mcmaster.com/products/bearing-housings/
