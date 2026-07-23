---
title: "Worm gears parameters"
sidebar:
  label: "Worm gears"
description: "Technical reference: Worm gears parameters"
keywords: ["worm gear worm wheel parameters ratio", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "worm-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General description
Worm gears are a mechanical transmission system by sliding consisting of a worm (also called a worm screw) and a helical gear (worm wheel). The axes of the worm and wheel usually cross at 90°, allowing very high reduction ratios in a single stage, typically between 5:1 and 100:1. One of their most valued characteristics is the possibility of being **self-locking**: when the lead angle of the worm is less than the friction angle, the system cannot be driven from the output, guaranteeing irreversibility of motion in lifting or holding applications.

According to the contact geometry, three types are distinguished: without throat (point contact, light loads), single-throat (wheel with enveloping throat, larger contact surface), and double-throat (both elements wrap the profile, maximum load capacity). The excellent reduction capacity and quiet operation make them suitable for conveyors, elevators, rotary tables, precision positioners, and valve actuators.

## Geometric parameters
A worm gear is defined by the following parameters:

- **Module** _m_ (mm) or **diametral pitch** _DP_ (`DP = 25,4 / m`).
- **Pressure angle** _α_: 20° in most metric designs; 14,5° or 20° in imperial.
- **Number of starts** _z₁_ (commonly 1, 2, 3 or 4).
- **Number of teeth of the wheel** _z₂_.
- **Transmission ratio** _i = z₂ / z₁_.
- **Pitch diameter of the worm** _d₁_, outside diameter _da₁_ and worm length _L_.
- **Lead angle** _γ = arctan(m·z₁ / d₁)_.

The following table shows standard dimensions of worms with ground finish, mounted on shaft, according to common commercial specifications.

| Module (mm) / DP (in⁻¹) | Pitch diameter (mm / in) | Outside diameter (mm / in) | Length (mm / in) | Starts (z₁) | Pressure angle (°) |
| --- | --- | --- | --- | --- | --- |
| 0,5 / 50,8 | 9 / 0.354 | 10 / 0.394 | 12 / 0.472 | 1 | 20 |
| 1,0 / 25,4 | 16 / 0.630 | 18 / 0.709 | 32 / 1.260 | 1 | 20 |
| 1,5 / 16,9 | 25 / 0.984 | 28 / 1.102 | 40 / 1.575 | 1 | 20 |
| 2,0 / 12,7 | 31 / 1.220 | 35 / 1.378 | 46 / 1.811 | 1 | 14,5 |
| 2,5 / 10,16 | 37 / 1.457 | 42 / 1.654 | 63 / 2.480 | 2 | 20 |

The wheel must have a number of teeth \(z_2\) at least 20 to avoid undercutting. The center distance is calculated as \(a ≈ (d_1 + d_2)/2\), where \(d_2 = m·z_2\) is the pitch diameter of the wheel.

## Materials and treatments
The classic combination is steel worm with bronze wheel, which offers low friction, good heat dissipation, and wear resistance. In applications where static load capacity or cost is paramount, cast iron is used. The following table summarizes the most common materials, their treatments, and typical applications.

| Component | Material | Treatment / Finish | Characteristics | Typical applications |
| --- | --- | --- | --- | --- |
| Worm | Carbon steel 1045 | Untempered, rolled thread | Economical, good machinability | Moderate loads, economy series |
| Worm | Carbon steel 1045 | Carburized and ground (HRC 58–62) | High wear resistance, precision | Intensive use, long life |
| Worm | Alloy steel 4140 | Hardened and ground (HRC 56–60) | Excellent fatigue resistance, integral with shaft | High-demand gears |
| Worm | Stainless steel 303 | Untempered | Corrosion resistant, hygienic | Food industry, humid environments |
| Wheel | Tin bronze (CuSn12) | Centrifugal casting or forging | Low coefficient of friction, good heat dissipation | Standard combination with steel worm |
| Wheel | Gray cast iron (GG-25) | Machined | High rigidity, low cost | Low speeds, predominantly static load |

## Lubrication and cooling
The worm-wheel contact is predominantly sliding, which generates heat and requires adequate lubrication to control wear and temperature. High viscosity mineral or synthetic oils with extreme pressure (EP) additives are used. The following table provides guidance on ISO VG viscosity based on the peripheral speed of the worm.

| Peripheral speed (m/s / ft/min) | Recommended ISO VG viscosity | Lubrication method |
| --- | --- | --- |
| < 2,5 / < 492 | ISO VG 680 | Oil bath or fluid grease |
| 2,5 – 5 / 492 – 984 | ISO VG 460 | Oil bath / splash |
| > 5 / > 984 | ISO VG 320 | Forced circulation with cooling |

The service temperature must be kept below 80 °C / 176 °F to preserve the lubricant and materials. Gearboxes with high thermal power incorporate additional cooling: fan mounted on the shaft, water coil, or oil-water heat exchanger.

## Load capacity
The basic transmission formulas for a worm gear reducer are as follows:

- **Output torque** \(M_o = M_i · i · \eta\) (Nm / lb·ft)
- **Output speed** \(S_o = S_i / i\) (rpm)
- **Output power** \(P_o = P_i · \eta\) (W / hp)

where \(M_i\) = input torque, \(S_i\) = input speed, \(i\) = transmission ratio, and \(\eta\) = efficiency.

The **efficiency** \(\eta\) strongly depends on the lead angle, sliding speed, materials, and lubrication. The following table shows indicative values as a function of the number of starts.

| Number of starts (z₁) | Lead angle γ (°) | Efficiency η | Typical transmission ratio i |
| --- | --- | --- | --- |
| 1 | 3 – 6 | 0,30 – 0,55 | 20:1 – 100:1 |
| 2 | 7 – 16 | 0,65 – 0,80 | 10:1 – 40:1 |
| 3 | 10 – 20 | 0,75 – 0,90 | 5:1 – 20:1 |
| 4 or more | > 20 | 0,85 – 0,95 | < 15:1 |

Self-locking gearboxes (z₁ = 1, γ < 5° with μ ≈ 0,1) have efficiencies below 50 %. The admissible load capacity is determined from the surface fatigue strength of the wheel flank and the strength of the worm, and the dissipated thermal power must also be verified.

## Selection criteria
To choose a worm gear size, it is recommended to follow the sequence:

1. **Define the transmission ratio** \(i = n_{input} / n_{output}\) and decide the number of worm starts (1 for self-locking, ≥2 for higher efficiency).
2. **Calculate the required output torque** \(M_o\) (Nm) from the power \(P\) (kW) and the output speed \(n_2\) (rpm): \(M_o = 9550·P / n_2\).
3. **Select the module** based on the torque and the available center distance, using manufacturer load tables. The following table provides guidance on maximum admissible torques for carburized/ground steel worm and bronze wheel, with adequate lubrication and continuous duty.

   | Module (mm) | Maximum indicative torque (Nm / lb·ft) | Typical center distance (mm / in) |
   | --- | --- | --- |
   | 0,5 | 1,2 / 0,89 | 12 – 15 / 0.47 – 0.59 |
   | 1,0 | 12 / 8,9 | 20 – 30 / 0.79 – 1.18 |
   | 1,5 | 40 / 29,5 | 35 – 50 / 1.38 – 1.97 |
   | 2,0 | 85 / 62,7 | 50 – 70 / 1.97 – 2.76 |
   | 2,5 | 160 / 118 | 70 – 100 / 2.76 – 3.94 |

4. **Verify self-locking** if the application requires it: the lead angle must be less than the friction angle (approx. 4° to 6°).
5. **Check the thermal power**: the dissipated power at rated conditions must not exceed the thermal capacity of the gearbox without auxiliary cooling.
6. **Choose materials and lubrication** according to speed, environment, and expected life.

## Assembly
The correct installation of the gear determines its service life and precision. The following recommendations should be followed:

- Ensure exact alignment between the worm and wheel shafts, using rigid supports and ball bearings or tapered roller bearings that absorb axial and radial loads.
- Adjust the circumferential clearance (backlash) by axial displacement of the worm or wheel; in positioning applications a slight preload can be applied.
- Allow for thermal expansion, especially in long worms; mount one end with a fixed bearing and the other with a floating axial bearing.
- Ensure that the lubrication system reaches all contact points; in vertical assemblies use labyrinths or special seals to prevent leaks.
- Mount preferably in horizontal position; if vertical, provide an oil recirculation system and an auxiliary reservoir.

## Selection tables by application
The following table offers a quick guide to choose the most suitable configuration according to the type of machine or installation.

| Application | Typical ratio | Recommended module | Material worm / wheel | Lubrication type | Estimated efficiency |
| --- | --- | --- | --- | --- | --- |
| Precision instruments (telescopes) | 40:1 – 100:1, 1 start | 0,5 – 1,0 | Steel 1045 / Bronze | Fluid grease or oil ISO VG 460 | 0,35 – 0,55 |
| Belt conveyors (medium load) | 20:1 – 30:1, 1 or 2 starts | 1,0 – 1,5 | Carburized steel / Bronze | Oil bath ISO VG 460 | 0,55 – 0,75 |
| Elevators and hoists | 30:1 – 50:1, 1 start | 1,5 – 2,5 | Carburized steel / Bronze | Bath with fan cooling | 0,45 – 0,65 |
| Lifting machinery (cranes) | 50:1 – 100:1, 1 start (self-locking) | 2,0 – 3,0 | Hardened alloy steel / Cast iron or bronze | Forced circulation ISO VG 680 | 0,35 – 0,50 |
| Valve and gate actuators | 20:1 – 60:1, 1 start | 1,0 – 2,0 | Stainless steel / Bronze | Special outdoor grease | 0,40 – 0,60 |
| Machine tool spindles | 5:1 – 15:1, 2 or 3 starts | 1,5 – 2,5 | Carburized ground steel / Bronze | Oil with EP ISO VG 320 | 0,75 – 0,90 |

## FAQ
1. What is the maximum transmission ratio that a single-start worm can achieve?  
   With a single-start worm, the transmission ratio is equal to the number of teeth on the wheel, reaching up to 100:1 in compact single-stage designs, although the most common values are between 5:1 and 60:1.

2. What minimum efficiency is expected from a self-locking gearbox?  
   The efficiency of a self-locking assembly ranges between 30 % and 50 %, limited by the low lead angle (3°–6°) and the inherent sliding friction with conventional lubrication.

3. What is the standard length of a worm of module 1 with pitch diameter 16 mm?  
   The standard length for a worm of module 1 and pitch diameter 16 mm is 32 mm / 1.260 in, measured over the threaded body mounted on the shaft.

4. What pressure angle do metric worm gears use?  
   Metric gears predominantly adopt a pressure angle of 20°, while in imperial systems both 14,5° and 20° are found.

5. How many starts must a worm have to achieve an efficiency above 80 %?  
   To exceed 80 % efficiency, at least 2 starts are required; with 3 or more starts and lead angles above 15°, efficiencies from 85 % to 95 % are achieved.

6. What oil viscosity is recommended for a medium to high load worm gear?  
   For medium to high load conditions, an ISO VG 460 oil (equivalent to SAE 140) is recommended, preferably with extreme pressure (EP) additives that protect against sliding wear.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **mcmaster.com**: https://www.mcmaster.com/products/worm-gears/
