---
title: "GDT Runout and total runout"
sidebar:
  label: "GDT Runout and total runout"
description: "Technical reference: GDT Runout and total runout"
keywords: ["GDT runout total runout circular axial", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "runout"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

Runout is a composite geometric tolerance that simultaneously controls the form, orientation, and position of a surface of revolution relative to a datum axis during a complete 360° rotation.

## What is Circular Runout?

Circular runout is a two-dimensional tolerance that limits the surface variation of a rotating part at any individual cross-section perpendicular to the datum axis. It is measured by keeping the indicator fixed at a given axial position while the part rotates one full revolution. The total indicator reading (TIR) must not exceed the specified tolerance value. This tolerance does not cumulatively control the form along the entire length of the surface, but rather each circular section independently.

| Controlled characteristic | Symbol | Zone type | Measurement section |
|--- | --- | --- | --- |
| Radial or axial variation at each cross-section | ↗ (single arrow) | Two-dimensional circular zone bounded by two concentric circles | Each measurement plane separately |

## Radial Runout vs. Axial Runout

Runout is classified into two main types according to the direction of the controlled deviation relative to the datum axis.

### Radial Runout
Controls surface variation in the direction perpendicular to the datum axis. The tolerance zone consists of two concentric circles located in a measurement plane perpendicular to the axis, with a difference in radii equal to the tolerance value. Each circular section is evaluated independently along the feature. A 50 mm diameter part with a radial runout tolerance of 0,03 mm / 0.0012 in may exhibit a maximum indicator reading of 0,03 mm / 0.0012 in in any measured plane.

### Axial Runout
Controls the variation of a surface perpendicular to the datum axis during rotation. The tolerance zone consists of two concentric circles in a measurement plane perpendicular to the axis, but the reading is taken on the face of the part. This tolerance limits axial wobble or runout. For a 200 mm / 7.87 in diameter plate with axial runout of 0,08 mm / 0.0031 in, the maximum allowed variation on the face will be 0,08 mm / 0.0031 in measured at any diameter.

| Runout type | Control direction | Typical application | Drawing symbol |
|--- |--- |--- |--- |
| Radial | Perpendicular to axis | Bearing seats, shaft journals | Arrow on cylindrical surface |
| Axial | Parallel to axis | Support faces, centering flanges | Arrow on perpendicular flat surface |

## What is Total Runout?

Total runout is a three-dimensional composite geometric tolerance that limits the cumulative variation of an entire surface during a complete 360° rotation of the part around the datum axis, while the indicator is moved longitudinally or radially along the entire controlled surface.

Unlike circular runout, total runout simultaneously controls circularity, cylindricity, straightness, and coaxiality in a single specification. For a 100 mm / 3.94 in long shaft with a total runout of 0,05 mm / 0.002 in, the indicator placed perpendicular to the surface must traverse the full length of the feature while the part rotates at least one revolution; the cumulative total indicator reading must not exceed 0,05 mm / 0.002 in.

| Characteristic | Circular runout | Total runout |
|--- |--- |--- |
| Control | Individual cross-sections | Entire cumulative surface |
| Zone dimension | Two-dimensional (concentric circles) | Three-dimensional (annular volume or two parallel planes) |
| Rotation requirement | 360° at fixed axial position | 360° + longitudinal displacement of indicator |
| Combined controls | Circularity, sectional coaxiality | Cylindricity, straightness, taper, total coaxiality |

## Symbol and Specification on Drawings

The GD&T symbol for runout is a single arrow pointing to the right. It is placed in the first compartment of the feature control frame, followed by the tolerance value in the second compartment and the datum reference in the third.

| Frame element | Content | Example |
|--- |--- |--- |
| Compartment 1 | Runout symbol (↗) or total runout symbol (↗↗) | ↗ |
| Compartment 2 | Tolerance value in mm or inches | 0,05 / 0.002 |
| Compartment 3 | Datum reference letter(s) | A | B |
| Compartment 4 (optional) | Material condition modifier | Ⓜ (datum only, rare) |

For total runout, the double-arrow symbol is used. The datum is typically indicated as an axis or a flat surface. Runout control always requires at least one datum reference.

## Tolerance Tables by Accuracy Grade

General permissible runout values can be selected from standardized ISO 2768-2 tolerance grades for geometric tolerances without individual indication on drawings. These grades are classified as H (fine), K (medium), and L (coarse), covering most mechanical engineering applications.

### Circular Runout Tolerances (Radial and Axial) ISO 2768-2

| Nominal length range (mm) | Grade H (mm / in) | Grade K (mm / in) | Grade L (mm / in) |
|--- |--- |--- |--- |
| Up to 10 | 0,02 / 0.0008 | 0,05 / 0.002 | 0,1 / 0.004 |
| >10 to 30 | 0,03 / 0.0012 | 0,06 / 0.0024 | 0,2 / 0.008 |
| >30 to 100 | 0,04 / 0.0016 | 0,08 / 0.0031 | 0,3 / 0.012 |
| >100 to 300 | 0,05 / 0.002 | 0,12 / 0.0047 | 0,4 / 0.016 |
| >300 to 1000 | 0,08 / 0.0031 | 0,16 / 0.0063 | 0,6 / 0.024 |

### Recommended Total Runout Values by Diameter

| Diameter range (mm) | Fine precision (mm / in) | General machining (mm / in) | Casting or forging (mm / in) |
|--- |--- |--- |--- |
| 3 to 6 | 0,008 / 0.0003 | 0,025 / 0.001 | 0,1 / 0.004 |
| >6 to 30 | 0,012 / 0.0005 | 0,04 / 0.0016 | 0,15 / 0.006 |
| >30 to 120 | 0,02 / 0.0008 | 0,06 / 0.0024 | 0,25 / 0.01 |
| >120 to 400 | 0,03 / 0.0012 | 0,1 / 0.004 | 0,4 / 0.016 |

## Interpretation and Practical Measurement

In practice, runout is measured with a dial indicator mounted on a magnetic base or rigid stand, while the part is rotated about its datum axis. The datum axis can be realized by V-blocks, between centers, an expanding mandrel, or roller supports.

The measurement procedure for circular runout requires placing the indicator stylus perpendicular to the controlled surface. For radial runout, the stylus is oriented perpendicular to the datum axis at each circular section. For axial runout, it is oriented parallel to the axis on the face of the part. The part is rotated 360° at each section, and the difference between maximum and minimum readings (TIR) is recorded. For total runout, in addition to rotation, the indicator is moved longitudinally (radial total runout) or radially (axial total runout) covering the entire surface.

| Clamping method | Typical centering error (mm / in) | Application |
|--- |--- |--- |
| Between centers | 0,002 / 0.00008 | Shafts with conical centers |
| V-block support | 0,005 / 0.0002 | Cylinders with smooth external surface |
| Precision mandrel | 0,003 / 0.00012 | Parts with centering hole |
| Self-centering chuck | 0,01 to 0,03 / 0.0004 to 0.0012 | Rapid series production |

## Comparison Between ISO and ANSI Systems

The ISO and ANSI/ASME systems handle runout conceptually similarly but with differences in symbology, default application rules, and standardized values.

| Aspect | ISO 1101 / 2768-2 | ANSI/ASME Y14.5 |
|--- |--- |--- |
| Circular runout symbol | Single arrow (↗) | Same, single arrow |
| Total runout symbol | Double arrow (↗↗) | Same, double arrow (circular runout / total runout) |
| General tolerance grades | H, K, L (ISO 2768-2) | Not defined; direct specification required |
| Default interpretation without datum | Not allowed, datum mandatory | Datum mandatory |
| Envelope rule | Minimum circumscribed circle | Minimum circumscribed circle (Rule #1) |

In the ANSI/ASME Y14.5 system, there are no generic unspecified geometric tolerance grades as in ISO 2768-2; every runout control must be explicitly indicated with its value in the feature control frame. The metrological meaning is equivalent.

## Frequent Application Errors

The most common errors in runout specification and measurement include confusing circular runout with total runout, omitting the reference datum, and not correctly aligning the axis of rotation.

| Error | Consequence | Recommendation |
|--- |--- |--- |
| Using circular runout without controlling total coaxiality | Individual sections acceptable, but bent axis not detected | Use total runout if real coaxiality is required |
| Omitting datum in the feature control frame | Tolerance without metrological meaning; incomplete specification | Specify at least one axis or surface datum |
| Confusing runout with circularity | Circularity does not control position, runout does (composite) | Circular runout requires datum; circularity does not |
| Measuring runout without eliminating centering error | TIR includes setup error, not only part error | Verify concentricity between actual datum and instrument rotation axis |

## Frequently Asked Questions (FAQ)

### 1. What is the main difference between circular runout and total runout?
Circular runout controls each cross-section independently with a typical 2D zone of 0,05 mm / 0.002 in, while total runout controls the entire cumulative surface with a continuous 3D zone up to 0,1 mm / 0.004 in, also requiring axial travel of the indicator during measurement.

### 2. What does a runout reading of 0.07 mm on an 80 mm shaft indicate?
A reading of 0,07 mm / 0.0028 in on an 80 mm / 3.15 in diameter means the surface has a maximum radial variation of 70 micrometers relative to the datum axis, which corresponds approximately to an ISO grade K tolerance for circular runout.

### 3. Can runout be applied without a datum reference?
No, specifying a runout control of 0,02 mm / 0.0008 in without a datum reference is not valid according to ISO 1101 or ASME Y14.5, because the deviation must be referenced to an axis or surface datum to have dimensional meaning.

### 4. How is total runout measured on a 250 mm long shaft?
Place an indicator with 0,001 mm / 0.00004 in resolution perpendicular to the surface, rotate the part at least one full revolution, and simultaneously move the indicator along the entire 250 mm / 9.84 in length, recording the maximum cumulative variation which must not exceed the specified tolerance.

### 5. Does rotation speed affect measured runout?
In static measurement with a dial indicator, a low rotation speed of approximately 30 rpm avoids dynamic effects and yields repeatable readings of 0,003 mm / 0.00012 in; at high speeds of 3000 rpm, dynamic eccentricity and vibrations can falsify the measurement by up to an additional 0,02 mm / 0.0008 in.

### 6. What ISO tolerance grade is recommended for a bearing seat?
For bearing seats with diameters between 20 mm and 120 mm, a grade H circular runout (0.025 mm to 0,04 mm / 0.001 in to 0.0016 in) or a specified total runout of 0,015 mm / 0.0006 in is recommended, ensuring low vibration and long bearing life.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pumps-t_34.html
