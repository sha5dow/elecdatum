---
title: "GDT Flatness and Straightness"
sidebar:
  label: "GDT Flatness and Straightness"
description: "Technical reference: GDT Flatness and Straightness"
keywords: ["GDT flatness straightness tolerance symbol", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "flatness-straightness"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## General Description
Flatness and straightness are geometric form tolerances that limit the deviation of a feature from its perfect geometry. Flatness controls how much a surface deviates from a perfect plane, while straightness restricts the variation of a line or an axis relative to a theoretical straight line. Both tolerances are specified in the feature control frame per ISO 1101 and ASME Y14.5 standards, and are independent of any datum, defining only the form of the feature. Their application ranges from machine base plates to transmission shafts, ensuring proper operation and assembly of mechanical components.

## Symbol and Representation
The standardized symbols for flatness and straightness are indicated in the first compartment of the feature control frame. The graphical representation follows ISO and ASME conventions.

| Characteristic | ISO/ANSI Symbol | Description |
| --- | --- | --- |
| Flatness | A slanted parallelogram (two parallel oblique lines) | Applied to a surface, it defines a tolerance zone between two parallel planes. |
| Straightness | A horizontal straight line | Controls the form of a line on a surface or an axis. If the zone is cylindrical, the tolerance value is preceded by the diameter symbol (⌀). |

The typical frame includes, from left to right, the characteristic symbol, the tolerance value (in millimeters or inches) and, if applicable, the datum letter for axis straightness.

## Tolerance Zone
The tolerance zone defines the volume or area within which the actual feature must lie.
- **Flatness**: Zone bounded by two parallel planes separated by a distance equal to the specified tolerance value (e.g., 0.05 mm / 0.002 in). The entire surface must reside between these planes.
- **Straightness of a surface line**: Zone in the projection plane bounded by two parallel straight lines separated by the tolerance.
- **Straightness of an axis**: Cylindrical zone with a diameter equal to the tolerance value (preceded by the ⌀ symbol). The actual axis of the cylinder must remain inside that cylindrical volume.

## General Tolerances per ISO 2768-2
When no form tolerance is explicitly indicated on the drawing, the general tolerances of ISO 2768-2 apply. The following tables show the values for flatness and straightness based on nominal length and tolerance class (H – fine, K – medium, L – coarse). The values are identical for both characteristics.

| Nominal length range (mm / in) | Tolerance class H (mm / in) | Tolerance class K (mm / in) | Tolerance class L (mm / in) |
| --- | --- | --- | --- |
| up to 10 mm / 0.394 in | 0.02 mm / 0.0008 in | 0.05 mm / 0.002 in | 0.1 mm / 0.004 in |
| over 10 up to 30 mm / 0.394 – 1.181 in | 0.05 mm / 0.002 in | 0.1 mm / 0.004 in | 0.2 mm / 0.008 in |
| over 30 up to 100 mm / 1.181 – 3.937 in | 0.1 mm / 0.004 in | 0.2 mm / 0.008 in | 0.4 mm / 0.016 in |
| over 100 up to 300 mm / 3.937 – 11.811 in | 0.2 mm / 0.008 in | 0.4 mm / 0.016 in | 0.8 mm / 0.031 in |
| over 300 up to 1000 mm / 11.811 – 39.37 in | 0.3 mm / 0.012 in | 0.6 mm / 0.024 in | 1.2 mm / 0.047 in |
| over 1000 up to 3000 mm / 39.37 – 118.11 in | 0.5 mm / 0.02 in | 1.0 mm / 0.039 in | 2.0 mm / 0.079 in |

*Note: The nominal length for flatness is the longer side of the surface; for straightness it is the total length of the controlled feature.*

## Achievable Tolerances by Manufacturing Processes
Machining processes allow obtaining different degrees of form precision. The following table, derived from the typical capabilities of each process, shows indicative flatness/straightness values per 100 mm (3.94 in) of length. The IT tolerance grades are based on ranges from the source engineeringtoolbox.com.

| Process | Typical dimensional tolerance grade (IT) | Indicative form tolerance per 100 mm (mm / in) |
| --- | --- | --- |
| Lapping / Honing | IT4 | 0.0025 mm / 0.0001 in |
| Cylindrical / Surface grinding | IT5 – IT6 | 0.005 mm / 0.0002 in |
| Diamond turning / Precision boring | IT6 – IT7 | 0.01 mm / 0.0004 in |
| Broaching | IT7 – IT8 | 0.02 mm / 0.0008 in |
| Reaming | IT8 | 0.03 mm / 0.0012 in |
| Conventional turning | IT9 – IT10 | 0.05 mm / 0.002 in |
| Milling | IT9 – IT11 | 0.08 mm / 0.003 in |
| Drilling | IT11 – IT12 | 0.2 mm / 0.008 in |
| Planing / Filing | IT11 – IT13 | 0.3 mm / 0.012 in |

## Real-World Application Examples
- **Base plate of a machining center**: The support surface is specified with a flatness tolerance of 0.02 mm / 0.0008 in per 500 mm / 19.69 in to ensure the geometric stability of the machine.
- **Precision transmission shaft**: Axis straightness is applied with a cylindrical zone ⌀ 0.01 mm / 0.0004 in over its entire length, preventing vibrations and premature wear.
- **Shims and alignments**: Contact surfaces on welding fixtures require a flatness of 0.05 mm / 0.002 in over the entire surface to ensure repeatable positioning.
- **Linear guides**: The straightness of sliding faces is controlled with 0.01 mm / 0.0004 in per 300 mm / 11.81 in.

## ISO vs ANSI Comparison
| Aspect | ISO 1101 | ASME Y14.5 |
| --- | --- | --- |
| Flatness symbol | Identical (parallelogram) | Identical |
| Straightness symbol | Straight line | Straight line |
| Use of diameter modifier | Rarely used for line straightness; not explicitly required | Mandatory (⌀) when the tolerance zone is cylindrical |
| Indication of tolerance zone in axis straightness | Cylindrical zone is assumed if the tolerance is associated with the axis | ⌀ must be shown before the value |
| Interpretation of Rule #1 (Envelope) | No equivalent universal rule; depends on ISO 8015 | Rule #1: Perfect form at MMC |
| General tolerances | ISO 2768-2 defines default form tolerances | No direct equivalent; must be specified on the drawing |
| Application on curved surfaces | Flatness applies only to nominally flat surfaces | Same criterion |

## Frequently Asked Questions
### What is the typical flatness tolerance for a 200 mm × 200 mm support plate?
A 200 mm / 7.87 in side plate usually receives a flatness tolerance of 0.05 mm / 0.002 in for precision seats, a value that falls within ISO 2768-2 class H for that length.

### What does a straightness value of ⌀ 0.03 mm / 0.0012 in mean on a shaft?
It means that the actual axis of the cylinder must lie entirely within a cylindrical zone of 0.03 mm / 0.0012 in diameter over its entire length of 150 mm / 5.91 in.

### How is the flatness of a surface of 0.2 mm / 0.008 in measured with conventional means?
For a tolerance of 0.2 mm / 0.008 in, a dial indicator mounted on a magnetic base can be used, sliding it over a granite surface plate and covering an area of 300 mm × 300 mm / 11.81 in × 11.81 in.

### What practical difference exists between applying surface straightness or flatness on a guide rail?
The straightness of each rail line individually controls 0.01 mm / 0.0004 in over 500 mm / 19.69 in, while flatness would control the entire top surface of 500 mm × 20 mm / 19.69 in × 0.79 in with a single zone of two parallel planes.

### Can flatness and straightness tolerances be combined on the same plane?
Yes, it is common to specify a straightness of 0.03 mm / 0.0012 in for a generating line and simultaneously a flatness of 0.05 mm / 0.002 in for the entire surface of 250 mm / 9.84 in length.

### What machining processes guarantee an axis straightness less than 0.01 mm / 0.0004 in?
Precision cylindrical grinding or diamond turning can achieve an axis straightness of ⌀ 0.005 mm / 0.0002 in over a length of 100 mm / 3.94 in.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
