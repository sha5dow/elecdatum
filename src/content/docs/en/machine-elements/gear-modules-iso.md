---
title: "Normalized gear modules ISO"
sidebar:
  label: "Normalized gear modules ISO"
description: "Technical reference: Normalized gear modules ISO"
keywords: ["gear modules ISO DIN standard table", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "gear-modules"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Definition and principles

The ISO standard module is the fundamental parameter that defines the size of teeth on involute profile cylindrical gears. It represents the ratio between the reference diameter (mm) and the number of teeth on the gear (m = d/z). A module of 1.5 mm indicates that for each tooth the wheel increases 1.5 mm in its pitch diameter.

International standardization under ISO 54 unifies tooth dimensions to guarantee interchangeability of gears manufactured anywhere in the world. The module system makes it possible to build robust transmissions because it directly relates tooth thickness to load capacity and circular pitch. In the imperial system, diametral pitch (DP) is used, which is inversely proportional to the module (DP = 25.4 / m).

## Standard dimensions

The following table lists series I (preferred) and II (complementary) modules according to ISO 54, along with their equivalent diametral pitch in the imperial system.

| Module (mm) / Diametral pitch (teeth/in) | ISO Series |
|-----------------------------------------------|------------|
| 1 mm / 25.4 teeth/in                        | I          |
| 1.25 mm / 20.32 teeth/in                     | I          |
| 1.5 mm / 16.93 teeth/in                      | I          |
| 1.75 mm / 14.51 teeth/in                     | II         |
| 2 mm / 12.7 teeth/in                         | I          |
| 2.25 mm / 11.29 teeth/in                     | II         |
| 2.5 mm / 10.16 teeth/in                      | I          |
| 2.75 mm / 9.24 teeth/in                      | II         |
| 3 mm / 8.47 teeth/in                         | I          |
| 3.5 mm / 7.26 teeth/in                       | II         |
| 4 mm / 6.35 teeth/in                         | I          |
| 4.5 mm / 5.64 teeth/in                       | II         |
| 5 mm / 5.08 teeth/in                         | I          |
| 5.5 mm / 4.62 teeth/in                       | II         |
| 6 mm / 4.23 teeth/in                         | I          |
| 7 mm / 3.63 teeth/in                         | II         |
| 8 mm / 3.18 teeth/in                         | I          |
| 9 mm / 2.82 teeth/in                         | II         |
| 10 mm / 2.54 teeth/in                        | I          |
| 11 mm / 2.31 teeth/in                        | II         |
| 12 mm / 2.12 teeth/in                        | I          |
| 14 mm / 1.81 teeth/in                        | II         |
| 16 mm / 1.588 teeth/in                       | I          |
| 18 mm / 1.411 teeth/in                       | II         |
| 20 mm / 1.27 teeth/in                        | I          |
| 22 mm / 1.155 teeth/in                       | II         |
| 25 mm / 1.016 teeth/in                       | I          |
| 28 mm / 0.907 teeth/in                       | II         |
| 32 mm / 0.794 teeth/in                       | I          |
| 36 mm / 0.706 teeth/in                       | II         |
| 40 mm / 0.635 teeth/in                       | I          |
| 45 mm / 0.564 teeth/in                       | II         |
| 50 mm / 0.508 teeth/in                       | I          |

Series I values cover most applications; series II is reserved for situations where transmission ratios or construction dimensions require an intermediate step not available in the preferred series. The center distance is calculated as a = m·(z₁+z₂)/2, always expressed in millimeters.

## Load capacity

The load capacity of a straight steel gear with surface hardness 300 HB, face width equal to 10 times the module, and pressure angle 20°, can be estimated according to the Lewis formula. The following table provides an indicative allowable torque for different modules, considering case-hardened carbon steel material and tangential velocity below 5 m/s / 16.4 ft/s.

| Module (mm) / Diametral pitch (teeth/in) | Allowable torque (N·m / lb·ft) |
|-----------------------------------------------|-----------------------------------------|
| 1.5 mm / 16.93 teeth/in                    | 12 N·m / 8.9 lb·ft                       |
| 2 mm / 12.7 teeth/in                       | 35 N·m / 25.8 lb·ft                      |
| 2.5 mm / 10.16 teeth/in                    | 75 N·m / 55.3 lb·ft                      |
| 3 mm / 8.47 teeth/in                       | 130 N·m / 95.8 lb·ft                     |
| 4 mm / 6.35 teeth/in                       | 280 N·m / 206 lb·ft                      |
| 5 mm / 5.08 teeth/in                       | 500 N·m / 369 lb·ft                      |
| 6 mm / 4.23 teeth/in                       | 800 N·m / 590 lb·ft                      |
| 8 mm / 3.18 teeth/in                       | 1.600 N·m / 1180 lb·ft                   |
| 10 mm / 2.54 teeth/in                      | 2.800 N·m / 2065 lb·ft                   |

The values correspond to a static safety factor of 2. For helical gears, capacity increases by 20–30% due to the higher contact ratio. Surface wear resistance must be verified using the Hertz contact pressure criterion, employing the limits of the selected material (typically 1200 MPa / 174 ksi for hardened steels).

## Selection criteria

Standard module selection is based on the following design parameters:

- **Transmitted load:** The higher the torque, the larger the module required to avoid tooth breakage from bending. The stress is evaluated with the formula σ = Fₜ · Y / (b · m), where Fₜ is tangential force, Y is the form factor, b is face width, and m is the module.
- **Rotational speed:** High speeds (> 1500 rpm) require smaller modules and fine surface finishes to reduce noise and vibration.
- **Required precision:** Control systems (servomotors, robotics) use fine modules (1–2 mm) to minimize backlash and increase torsional stiffness.
- **Available material:** Plastic gears can use larger modules than metal ones under equal load to compensate for their lower strength.
- **Construction space:** Center distance conditions the sum of teeth and, therefore, the maximum possible module. A series I value is always preferred.

ISO standard 6336 provides detailed methods for load capacity calculation, but the initial practical rule is: m ≥ (2·T / (σ_lim · b · Y · z))^(1/3), with T in N·mm.

## Selection by application

| Typical application | Recommended module (mm) / Diametral pitch (teeth/in) |
|-------------------|----------------------------------------------------------|
| Measuring instruments (micrometers, calipers) | 0.3–0.5 mm / 84.7–50.8 teeth/in |
| Watchmaking and timers | 0.1–0.3 mm / 254–84.7 teeth/in |
| 3D printers and office equipment | 0.5–1 mm / 50.8–25.4 teeth/in |
| Servo actuators and light robotics | 1–2 mm / 25.4–12.7 teeth/in |
| Bicycles and light transmissions | 2–2.5 mm / 12.7–10.16 teeth/in |
| Hydraulic pumps and compressors | 2.5–5 mm / 10.16–5.08 teeth/in |
| Machine tools (lathes, milling machines) | 3–6 mm / 8.47–4.23 teeth/in |
| Automotive gearboxes | 2–4 mm / 12.7–6.35 teeth/in |
| Industrial gear reducers up to 100 kW | 5–10 mm / 5.08–2.54 teeth/in |
| Mill reducers and large drives | 12–25 mm / 2.12–1.016 teeth/in |
| Hoisting and crane transmissions | 8–16 mm / 3.18–1.588 teeth/in |

For high-speed applications requiring quiet operation (e.g., helicopter transmissions), small modules and helical gearing with surface coating (nitriding) are used. In environments without forced lubrication, the module is increased by 20% to reduce contact pressure.

## Assembly considerations

The assembly of gears with standard modules requires controlling the following tolerances and parameters:

- **Center distance:** The typical tolerance in a machined housing is ± 0.05 mm / ± 0.002 in for modules up to 5 mm. A larger error reduces the contact ratio and increases noise.
- **Backlash:** 0.05–0.10 mm / 0.002–0.004 in per 100 mm / 3.94 in of pitch diameter is recommended, adjustable through profile shift.
- **Shaft alignment:** Parallel misalignment must not exceed 0.02 mm / 0.0008 in per 100 mm of face width. Allowable angular misalignment is ≤ 0.05°.
- **Lubrication:** In assemblies with sliding velocity below 3 m/s / 9.8 ft/s, NLGI 0–1 grease is used; above that, ISO VG 68 to VG 220 oil is used with splash or forced system.
- **Fitting:** Small pinions (m < 3) are mounted with an H7/g6 fit on the shaft to facilitate centering without radial play.
- **Axial fixation:** For face widths less than 25 mm / 0.98 in, a flat-point set screw is sufficient. Wider gears require a keyway or taper lock.

Final assembly verification is performed with feeler gauges on the center distance and with a thin layer of Prussian blue to check the contact pattern.

## Frequently asked questions (FAQ)

**1. What is the minimum module that can be manufactured in steel with standard milling?**  
The practical minimum module is 0.5 mm / 50.8 teeth/in, because below that the cutters generate poor surface finish and the tooth strength is insufficient for most mechanical applications.

**2. What service life in hours does a module 3 mm gear with oil pump have?**  
A pair of straight gears in alloy steel with 55 HRC hardness, lubricated with ISO VG 100 oil, typically achieves 25,000 hours of continuous service before surface wear exceeds 0.2 mm / 0.008 in.

**3. How much does the moment of inertia increase when doubling the module with the same number of teeth?**  
The moment of inertia increases approximately 16 times because the pitch diameter doubles and the mass increases in proportion to the square of the radius.

**4. At what tangential velocity does a straight gear of module 4 mm generate excessive noise?**  
Above 12 m/s / 39.4 ft/s, 85 dB(A) is exceeded in non-insulated housings, requiring helical gearing or high-precision grinding.

**5. What is the minimum face width for a module 2 mm pinion transmitting 50 N·m / 36.9 lb·ft?**  
With case-hardened steel and a safety factor of 2.5, a minimum width of 18 mm / 0.71 in is required to keep bending stress below 250 MPa / 36.3 ksi.

**6. How much radial load does a module 5 mm straight gear add to its shaft?**  
For a torque of 300 N·m / 221 lb·ft and a pitch diameter of 100 mm / 3.94 in, the resulting radial load is 6,000 N / 1,350 lbf, neglecting the pressure angle.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/din-standards-d_759.html
- **mcmaster.com**: https://www.mcmaster.com/products/gears/
