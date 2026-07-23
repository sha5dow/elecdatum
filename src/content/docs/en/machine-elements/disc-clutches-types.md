---
title: "Disc clutches types"
sidebar:
  label: "Disc clutches types"
description: "Technical reference: Disc clutches types"
keywords: ["disc clutch types single multi-plate", "machine-elements"]
category: "machine-elements"
topic: "clutches-brakes"
subcategory: "disc-clutches"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

Disc clutches are friction mechanisms designed to connect and disconnect two rotating shafts, transmitting torque through axial contact of flat surfaces. Their main classification is based on the number of friction discs: **single-disc** (single disc) and **multi-disc** (multiple interleaved discs), each optimized for specific torque, speed, and operating condition ranges. Proper selection depends on the power to be transmitted, available space, actuation frequency, and working environment.

## Operating principle

The disc clutch operates under the principle of dry or wet friction between flat surfaces pressed axially. A friction disc, mounted on splines on the output shaft, is compressed against a flywheel integral with the input shaft by a pressure plate actuated by springs. The applied axial force generates a friction torque proportional to the coefficient of friction, normal force, and effective radius of the disc. When the driver presses the pedal, the release fork displaces the release bearing, overcoming the spring force and separating the friction disc from the flywheel, thereby interrupting power transmission. In a multi-disc system, several metallic and lined discs are interleaved to multiply the friction surface without increasing the diameter.

## Calculation formulas for disc clutches

### Torque capacity

The maximum transmissible torque by a friction disc clutch is calculated according to the uniform pressure theory:

```
T = n · μ · Fa · rm · c
```

Where:
- **T** = Transmissible torque (N·m / lb·ft)
- **n** = Number of friction surfaces (2 faces for single-disc; 2n for n inner discs in multi-disc)
- **μ** = Coefficient of friction of lining material (dimensionless)
- **Fa** = Axial force applied by springs (N / lbf)
- **rm** = Mean radius of friction lining = (De + Di) / 2 (m / in)
- **c** = Service factor (1,0–3,0 depending on application)

| Parameter | Typical single-disc | Typical multi-disc |
| --- | --- | --- |
| Coefficient of friction (dry) | μ = 0,30 – 0,50 | μ = 0,30 – 0,45 |
| Coefficient of friction (wet) | μ = 0,05 – 0,15 | μ = 0,05 – 0,15 |
| Allowable surface pressure | 0,2 – 0,4 MPa / 29 – 58 psi | 0,15 – 0,35 MPa / 22 – 51 psi |
| Number of friction surfaces | 2 | 4 – 20+ |

### Wear and service life formula

The loss of lining thickness due to wear is estimated by the accumulated friction work formula:

```
Δh = kw · p · v · t
```

- **Δh** = Linear wear (m / in)
- **kw** = Specific wear coefficient (m²/N / in²/lbf)
- **p** = Contact pressure (Pa / psi)
- **v** = Sliding velocity (m/s / ft/min)
- **t** = Accumulated slip time (s)

The clutch service life (in cycles) for industrial clutches of intermittent use ranges between 500 000 and 2 000 000 cycles under nominal conditions, assuming adequate maintenance and lubrication.

### Heat generation formula during clutching

The energy dissipated as heat during one engagement is calculated as:

```
Q = ½ · J · ω² · (T_embrague / (T_embrague – T_resistente))
```

- **Q** = Thermal energy generated (J / BTU)
- **J** = Moment of inertia reduced to the clutch shaft (kg·m² / lb·ft²)
- **ω** = Initial angular velocity of the driving shaft before engagement (rad/s)
- **T embrague** = Torque transmitted by the clutch (N·m / lb·ft)
- **T resistente** = Resisting torque of the load (N·m / lb·ft)

### Stress formula in the rotating disc

A rotating clutch disc experiences radial and tangential stresses proportional to angular velocity and material density. The maximum radial stress in a solid rotating disc is expressed as:

```
σz = (ω² · r² · ρ) / 3 = (v² · ρ) / 3
```

Where:
- **σz** = Stress in the disc (Pa / psi)
- **ω** = Angular velocity (rad/s)
- **r** = Radius of the disc (m / in)
- **ρ** = Material density (kg/m³ / lb/in³)
- **v** = Peripheral velocity = ω·r (m/s / ft/s)

For a rotating ring, the stress is calculated as:

```
σz = ω² · ρ · (r₁² + r₁·r₂ + r₂²) / 3
```

- **r₁** = Outer radius of the ring (m / in)
- **r₂** = Inner radius of the ring (m / in)

| Disc material | Density (kg/m³ / lb/in³) | Typical design stress (MPa / ksi) |
| --- | --- | --- |
| Aluminum alloy | 2700 / 0,0975 | 150 – 280 / 21,8 – 40,6 |
| Titanium alloy | 4500 / 0,1626 | 650 / 94,3 |
| Hardened alloy steel | 7800 / 0,2818 | 400 – 900 / 58,0 – 130,5 |
| Carbon-epoxy composite 40% | 1550 / 0,0560 | 750 / 108,8 |
| Kevlar-epoxy composite 40% | 1400 / 0,0506 | 1000 / 145,0 |

Typical peripheral velocities of clutch discs range between 30 m/s / 5906 ft/min and 70 m/s / 13 779 ft/min for standard industrial applications. The centrifugal force at high revolutions can cause self-disintegration of the disc if the stress exceeds the material's breaking limit.

## Types of disc clutches

### Single-disc (single plate)

The single-disc clutch incorporates a single friction disc lined on both faces, compressed between the engine flywheel and the pressure plate. It is the predominant type in cars with manual transmission, medium and high displacement motorcycles, and light agricultural machinery. Its typical diameter ranges between 180 mm / 7,09 in and 350 mm / 13,78 in, with a torque capacity of 200 to 800 N·m / 148 to 590 lb·ft in automotive applications. Actuation can be by peripheral coil springs or by diaphragm spring (Belleville), the latter offering a more constant pedal force throughout the lining life and better wear compensation.

### Multi-disc (multiple plates)

The multi-disc clutch uses a pack of alternating discs: metallic discs (steel) that rotate with the splined hub and lined discs (sintered bronze, carbon fiber, or paper) that rotate with the outer drum. This configuration multiplies the friction surface without increasing the diameter, reducing rotational inertia and improving thermal dissipation in confined spaces. The number of discs varies between 3 and 15 in conventional applications.

| Characteristic | Single-disc clutch | Multi-disc clutch |
| --- | --- | --- |
| No. of friction discs | 1 (2 faces) | 2 to 15+ |
| Typical diameter (mm / in) | 180 – 400 / 7,09 – 15,75 | 80 – 250 / 3,15 – 9,84 |
| Torque capacity (N·m / lb·ft) | 200 – 3000 / 148 – 2213 | 100 – 5000 / 74 – 3688 |
| Approximate weight (kg / lb) | 4 – 25 / 8,8 – 55,1 | 2 – 20 / 4,4 – 44,1 |
| Typical cooling | Air (dry) | Oil (wet) or air |
| Main application | Manual automotive | Motorcycles, CNC machinery, presses |

Multi-disc clutches can be **dry** or **wet**. In the wet version, the discs operate submerged in oil, which cools, lubricates, and prolongs the life of the linings, albeit with a slight reduction in the effective friction coefficient (typically μ = 0,10 – 0,15 in oil bath). For competition applications (drag racing), dry multi-disc clutches are used with ceramic linings of high friction coefficient and great thermal resistance.

### Centrifugal disc clutch

A special variant is the centrifugal clutch, where the friction discs are not pressed by axial springs, but by the centrifugal force itself generated by masses or pivoting shoes as the engine speed increases. When the driving shaft reaches a predefined engagement speed (typically 1500 to 2500 rpm), the centrifugal masses overcome the return springs and press the discs together, transmitting torque. Below that speed, the clutch remains disengaged, allowing idle without load. It is used in minimotos, karts, and some light industrial vehicles.

## Applications

| Application | Recommended clutch type | Typical torque range (N·m / lb·ft) | Remarks |
| --- | --- | --- | --- |
| Passenger car (manual) | Single-disc dry | 150 – 400 / 111 – 295 | Diaphragm actuation |
| Street motorcycle | Multi-disc wet | 40 – 150 / 30 – 111 | Immersed in engine oil |
| Racing motorcycle | Multi-disc dry | 80 – 200 / 59 – 148 | Ceramic linings, air cooling |
| Heavy vehicle / truck | Single-disc dry (Ø > 350 mm / 13,78 in) | 800 – 2500 / 590 – 1844 | Reinforced, with servo assistance |
| Textile machinery / CNC | Multi-disc wet | 10 – 100 / 7,4 – 74 | High engagement cadence |
| Mechanical press | Multi-disc dry | 1000 – 5000 / 738 – 3688 | Pneumatic actuation |
| Centrifugal clutch (kart/minimoto) | Disc centrifugal | 5 – 30 / 3,7 – 22,1 | Automatic engagement by rpm |
| Agricultural driveline transmission | Single-disc dry | 250 – 600 / 184 – 443 | Power take-off (PTO) |

## Maintenance and troubleshooting

| Symptom | Probable cause | Solution |
| --- | --- | --- |
| Clutch slips (rpm increases without acceleration) | Worn lining (thickness < 2 mm / 0,079 in), weak pressure springs, oil contamination in dry clutch | Replace clutch disc and check crankshaft seals |
| Harsh engagement (jerks when starting) | Glazed lining, deformed pressure plate, seized actuation cable | Resurface flywheel, replace disc and plate |
| Pedal does not return or is spongy | Air in hydraulic circuit, defective master/slave cylinder, worn release fork | Bleed hydraulic system, replace defective components |
| Clutch does not disengage (cannot engage gear) | Disc stuck to flywheel due to rust, broken cable, misadjusted linkage, seized release bearing | Free disc (start in gear with pedal depressed), replace cable/bearing |
| Vibration during engagement | Disc warpage (> 0,5 mm / 0,020 in), broken torsion dampers, misalignment | Replace clutch disc, verify centering with tool |
| Metallic noise or squeal | Worn release bearing, dry pilot bearing, broken damper springs | Replace release bearing and grease pilot bearing |
| Excessive heating and burning smell | Severe slippage, excessive load, prolonged engagement time | Reduce load, check spring force, improve cooling |

## Glossary of technical terms

- **Release bearing (Cojinete de empuje):** Axial bearing that transmits pedal force to the diaphragm or springs of the pressure plate to disengage the clutch.
- **Friction disc (Disco de fricción):** Central component of the clutch, lined with friction material on both faces and equipped with a splined hub that connects to the input shaft of the transmission.
- **Service factor (Factor de servicio):** Multiplier coefficient that oversizes the clutch to absorb vibrations, transient overloads and guarantee a minimum service life; varies between 1,0 and 3,0.
- **Release fork (Horquilla de embrague):** Pivoting lever that transforms the movement of the cable or slave cylinder into axial displacement of the release bearing.
- **Diaphragm spring (Muelle de diafragma):** Conical spring made of steel sheet that exerts the clamping force; offers a non-linear force curve, lighter in the depressed position than coil springs.
- **Pressure plate (Plato de presión):** Machined metallic disc that, under spring action, clamps the friction disc against the engine flywheel.
- **Slippage (Patinaje):** Controlled relative sliding between the friction surfaces during engagement; necessary for smooth start but harmful if prolonged due to accelerated wear and overheating.
- **Dual-mass flywheel (Volante bimasa):** Flywheel divided into two masses connected by a spring-damper system, which absorbs torsional vibrations from the diesel engine and reduces stress on the clutch disc.

## Frequently asked questions

1. **What is the minimum allowable lining thickness of a single-disc clutch disc?** The minimum thickness before replacement is usually 2,0 mm / 0,079 in measured from the lining surface to the rivet head, although this value varies between manufacturers from 1,5 mm / 0,06 in to 3,0 mm / 0,12 in.

2. **How many discs can a wet multi-disc clutch incorporate?** A wet multi-disc clutch can incorporate between 2 and 15 friction discs in standard configurations, providing between 4 and 30 contact surfaces in a diameter compatible with compact housings from 120 mm / 4,72 in to 250 mm / 9,84 in.

3. **What maximum torque can a single-disc automotive clutch transmit before requiring multi-disc?** A single-disc clutch for passenger cars supports up to 400 N·m / 295 lb·ft of engine torque with diameters of 240 mm / 9,45 in; above 450 N·m / 332 lb·ft it is recommended to switch to multi-disc configurations or high-performance discs.

4. **What is the maximum safe operating temperature for an organic lining in a dry clutch?** Standard organic linings withstand temperature peaks up to 300 °C / 572 °F intermittently; prolonged exposure above 250 °C / 482 °F accelerates degradation and wear at rates of 5 μm/s / 0,0002 in/s.

5. **What centrifugal engagement speed is common in kart clutches?** The engagement speed in kart centrifugal clutches is typically calibrated between 2000 rpm and 3500 rpm, depending on engine displacement and weight of the centrifugal shoes, with a starting torque of 5 N·m to 15 N·m / 3,7 lb·ft to 11,1 lb·ft.

6. **How often should the clutch disc thickness be checked in a passenger car?** The average service life of a clutch disc in mixed urban-highway use ranges between 80 000 km and 160 000 km (50 000 to 100 000 miles), although the first visual inspection is usually recommended at 60 000 km / 37 500 miles.

## Assembly considerations

Assembly of a disc clutch requires precise alignment between the crankshaft axis and the transmission input shaft. Use of a centering pilot is recommended to position the friction disc before tightening the pressure plate bolts. The maximum allowable misalignment at the input shaft tip must not exceed 0,15 mm / 0,006 in of indicated diameter. During installation, a thin layer of high-temperature grease should be applied to the splines of the disc hub and the bearing surface of the release bearing, avoiding any contact with the friction surfaces. The pressure plate bolts should be tightened in a cross pattern and in at least two stages, respecting a tightening torque of 25 to 30 N·m / 18 to 22 lb·ft for light vehicles, and check pedal free play after installation to ensure correct travel of the release bearing.

## Dimensions and specifications

| Parameter | Dry single-disc | Wet multi-disc |
| --- | --- | --- |
| Disc outer diameter (mm / in) | 180 – 400 / 7,09 – 15,75 | 80 – 250 / 3,15 – 9,84 |
| Lining inner diameter (mm / in) | 125 – 280 / 4,92 – 11,02 | 50 – 180 / 1,97 – 7,09 |
| New disc thickness (mm / in) | 7,5 – 10,0 / 0,295 – 0,394 | 1,5 – 4,0 / 0,059 – 0,157 (per disc) |
| Number of splines | 20 – 28 | 15 – 30 |
| Crankshaft / shaft diameter (mm / in) | 25 – 45 / 0,984 – 1,772 | 15 – 40 / 0,591 – 1,575 |
| Pressure plate clamping force (N / lbf) | 4000 – 9000 / 899 – 2023 | 800 – 5000 / 180 – 1124 |
| Disengagement travel (mm / in) | 8 – 12 / 0,315 – 0,472 | 2 – 5 / 0,079 – 0,197 |

## Selection by application

| Criterion | Light duty | Medium duty | Heavy duty |
| --- | --- | --- | --- |
| Clutch type | Dry single-disc Ø < 220 mm / 8,66 in | Dry single-disc Ø 220 – 310 mm / 8,66 – 12,20 in | Dry or wet multi-disc |
| Maximum torque (N·m / lb·ft) | < 200 / 148 | 200 – 500 / 148 – 369 | > 500 / 369 |
| Recommended service factor | 1,3 – 1,6 | 1,6 – 2,2 | 2,2 – 3,0 |
| Lining material | Organic NAO | Organic with copper / semi-metallic | Ceramic / sintered / carbon |
| Cooling | Natural air | Forced air | Oil (wet) or air with ventilated housings |
| Daily engagement cycles | < 100 | 100 – 500 | > 500 |
| Typical example | Small lathe, lawn mower | Passenger car, van | Presses, construction machinery |

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/stress-rotation-disc-ring-body-d_1752.html
- **mcmaster.com**: https://www.mcmaster.com/products/clutches/
