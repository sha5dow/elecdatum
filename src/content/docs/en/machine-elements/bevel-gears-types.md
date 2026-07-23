---
title: "Bevel gears types"
sidebar:
  label: "Bevel gears types"
description: "Technical reference: Bevel gears types"
keywords: ["bevel gear straight spiral types", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "bevel-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

Bevel gears transmit power between intersecting shafts, typically at 90 degrees, changing the direction of rotary motion. The shape of their teeth, cut on a conical surface, determines smoothness of operation, load capacity, and noise level. The fundamental types are straight bevel gears and spiral bevel gears, each with distinct performance characteristics and applications.

## Operating principle

The operating principle is based on the rolling of two pitch cones that rotate synchronously without sliding at the line of contact. The force is applied to the driving pinion, and the load is transferred to the driven gear. The transmission ratio, which links rotational speeds to the number of teeth, is expressed as i_M = t_F / t_D, where t_F are the teeth of the follower and t_D those of the driver. A spiral bevel gear uses curved helical teeth, producing gradual and overlapping contact between flanks, reducing vibration and noise compared to the straight profile. The hypoid variant, a type of spiral bevel gear where the shafts do not intersect, introduces additional sliding action that requires extreme-pressure lubricants.

## Types and classification

The main classification of bevel gears is defined by the geometry of their tooth profile and the relative position of their shafts.

| Bevel gear type | Tooth geometry description | Shaft intersection | Typical transmission ratio |
|--- |--- |--- |--- |
| Straight bevel | Straight radial teeth on the pitch cone | Yes | 1:1 to 8:1 |
| Spiral bevel | Curved helical teeth with gradual contact | Yes | 1:1 to 8:1 |
| Zerol bevel | Curved teeth with zero spiral angle at the midpoint | Yes | Similar to spiral |
| Hypoid | Spiral teeth on a hyperboloid of revolution; offset pinion | No (shafts cross without intersecting) | 3:1 to 12:1 |
| Straight bevel (internal) | Straight teeth on the inside of a conical ring | Yes (special case) | 1.5:1 to 7:1 |

The right-hand or left-hand designation of a spiral bevel gear is observed from the gear face: right-hand tilts the outer half of the tooth clockwise relative to the axial plane, while left-hand does so counterclockwise. A pinion and its mating gear are always of opposite hand. In hypoid gears, the hand of the pinion and gear are also opposite, and the spiral angle of the pinion is usually larger to increase its diameter and contact area.

## Standard dimensions

Main dimensions are standardized using diametral pitch in imperial units or metric module. Specifications include pitch diameter, pitch angle, face width, and hub bore diameter. The following table summarizes reference geometric parameters for a standard catalog spiral bevel pair with a 2:1 ratio.

| Geometric parameter | Pinion (straight) | Gear (straight) | Pinion (spiral) | Gear (spiral) |
|--- |--- |--- |--- |--- |
| Number of teeth | 20 | 40 | 20 | 40 |
| Diametral pitch (DP) / Module (m) | 16 DP / 1.588 mm | 16 DP / 1.588 mm | 16 DP / 1.588 mm | 16 DP / 1.588 mm |
| Pitch diameter | 31.75 mm / 1.25 in | 63.5 mm / 2.50 in | 31.75 mm / 1.25 in | 63.5 mm / 2.50 in |
| Pitch angle | 26.57° | 63.43° | 26.57° | 63.43° |
| Face width | 9.53 mm / 0.375 in | 9.53 mm / 0.375 in | 12.7 mm / 0.50 in | 12.7 mm / 0.50 in |
| Bore diameter | 12.7 mm / 0.50 in | 25.4 mm / 1.00 in | 12.7 mm / 0.50 in | 25.4 mm / 1.00 in |
| Mean spiral angle | N/A | N/A | 35° | 35° |
| Common material | Case-hardened alloy steel | Case-hardened alloy steel | Case-hardened alloy steel | Case-hardened alloy steel |

Hand designation is always specified on the order: a 2:1 spiral bevel set with left-hand pinion and right-hand gear is the standard configuration for a 90° drive.

## Load capacities

Load capacity in bevel gears is limited by bending strength at the tooth root and surface contact fatigue resistance. A straight bevel gear transmits load through a single tooth at any instant, whereas a spiral bevel distributes the load across two or more teeth simultaneously, increasing capacity. Hypoid gears offer an additional increase in load capacity because the pinion, being larger in diameter than an equivalent spiral bevel pinion, allows a greater number of teeth in contact. However, this gain comes with a reduction in mechanical efficiency due to sliding between flanks. The efficiency of a properly lubricated spiral bevel pair is around 98–99%, while for a hypoid pair it can drop to 92–96%, depending on the offset.

## Selection criteria

To select the appropriate bevel gear type, four main criteria are evaluated: operating speed, torque load, allowable noise level, and relative shaft position.

- Low to medium speed with uniform load: straight bevel gears are economical and effective, with typical linear pitch speed up to 5 m/s / 1000 ft/min.
- Medium to high speed or fluctuating loads: spiral bevel gears provide quieter and smoother operation, suitable for pitch speeds above 5 m/s / 1000 ft/min and up to 25 m/s / 5000 ft/min in precision applications.
- Requirement for non-intersecting shafts or high torque in limited space: hypoid gears allow lowering the pinion, reducing the height of the transmission tunnel in vehicles and increasing torque capacity.
- Applications with frequent direction reversal: spiral or Zerol bevel gears are preferred because overlapping contact reduces backlash noise on reversal.

The maximum allowable torque is calculated using the modified Lewis equation for bending and Hertz's formula for contact, and must always be verified with manufacturer ratings.

## Mounting considerations

Mounting a bevel gear pair requires rigorous control of the relative position of both elements. Critical mounting dimensions are the pinion locating distance (from the reference face to the pitch cone apex) and the axial displacement of the gear. Backlash between teeth should be adjusted between 0.08 mm / 0.003 in and 0.25 mm / 0.010 in for precision pairs of module 1.5 mm to 3 mm / DP 16 to DP 8. A correct contact pattern, verified with Prussian blue, should occupy the center of the tooth face and cover at least 60% of its length. Spiral and hypoid bevel gears are manufactured and lapped in pairs; therefore, when replacing, the complete set (pinion and gear) must be replaced to maintain contact geometry and avoid premature failure. Lubricant for hypoid applications must contain extreme-pressure additives formulated to withstand the combination of sliding and high contact pressure.

## Selection tables by application

The choice of bevel gear type can be guided by the target application and its predominant service conditions.

| Typical application | Recommended bevel gear type | Typical torque ratio of hypoid to straight spiral | Maximum reference speed |
|--- |--- |--- |--- |
| Electric power hand tool | Straight | – | 3.5 m/s / 700 ft/min |
| Printing machinery | Spiral | – | 6 m/s / 1200 ft/min |
| Passenger vehicle differential | Hypoid | 2.5:1 to 3.5:1 | 25 m/s / 5000 ft/min |
| Tram or bus transmission | Hypoid | 3:1 to 5:1 | 20 m/s / 4000 ft/min |
| Aircraft steering system | Spiral (high precision) | – | 30 m/s / 6000 ft/min |
| Worm screw elevator | Straight or spiral bevel | – | 2 m/s / 400 ft/min |
| Mining conveyor drive | Spiral (surface hardened) | – | 4 m/s / 800 ft/min |

The table relates the application to the gear type and maximum operating speed. For hypoid gears, the torque ratio relative to an equivalent straight spiral bevel gear is included, reflecting the gain in torque capacity due to the larger hypoid pinion diameter.

## Frequently asked questions

### What is the maximum transmission ratio in a straight bevel gear?
The practical maximum transmission ratio is 8:1, meaning that for every 8 revolutions of a 15-tooth driving pinion, the 120-tooth driven gear completes 1 revolution. Higher ratios typically require hypoid or epicyclic gears.

### Why must spiral bevel gears always be replaced in pairs?
Spiral pairs are lapped together during manufacturing to achieve an optimal contact pattern. Replacing only one component alters the contact footprint, concentrating load on less than 30% of the tooth surface and accelerating failure due to surface fatigue or pitting.

### What is the recommended backlash range for a spiral bevel pair of module 2 mm?
The circumferential backlash should be adjusted between 0.08 mm / 0.003 in and 0.18 mm / 0.007 in for a module 2 mm / DP 12.7 pair. Insufficient backlash causes heating and galling; excessive backlash generates noise and dynamic overload during direction reversals.

### What mean spiral angle is typical in spiral bevel gears?
The standard mean spiral angle is 35°, measured at the mean tooth radius. Smaller angles, such as 25°, reduce axial thrust but also the overlap ratio, while angles up to 45° are used in applications with extreme smoothness requirements.

### What linear pitch speed differentiates a straight bevel gear from a spiral one?
A pitch speed of 5 m/s / 1000 ft/min marks the practical transition. Below this value, straight teeth operate with acceptable noise levels; above it, straight tooth vibration increases rapidly and spiral teeth are preferred due to their gradual contact and lower sound emission.

### How much larger is the diameter of a hypoid pinion compared to an equivalent spiral bevel pinion?
A hypoid pinion with moderate offset can have a diameter between 25% and 40% larger than a spiral bevel pinion with the same number of teeth and diametral pitch. This increase allows more teeth in simultaneous contact and transmission of higher torques.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/Gear-Trains-d_1374.html
- **mcmaster.com**: https://www.mcmaster.com/products/spiral-bevel-gears
