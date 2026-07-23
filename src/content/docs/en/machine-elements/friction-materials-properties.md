---
title: "Friction materials properties"
sidebar:
  label: "Friction materials"
description: "Technical reference: Friction materials properties"
keywords: ["friction material brake clutch coefficient", "machine-elements"]
category: "machine-elements"
topic: "clutches-brakes"
subcategory: "friction-materials"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## General Description

Friction materials are compounds designed to convert kinetic energy into heat through controlled friction in brakes and clutches. They consist of a binder matrix (phenolic resin, rubber, or sintered metal), fibrous reinforcements (aramid, glass, carbon, steel), and friction modifiers (graphite, ceramic particles, metallic sulfides) that adjust the coefficient of friction, wear resistance, and thermal stability. In electromagnetic applications, the friction material is mounted flush with the steel surface of the rotor or electromagnet, allowing the magnetic flux to close the circuit through the air gap while the friction layer reduces steel wear (principle of electromagnetic clutches and brakes). The exact combination of components determines behavior with respect to temperature, contact pressure, sliding speed, and environment (dry, wet, lubricated).

## Technical Properties

The suitability of a friction material is evaluated by a set of interdependent properties whose typical values for the most common families are summarized below.

| Property | Organic Material | Semi-metallic | Sintered Metallic | Carbon | Ceramic |
|-----------|-------------------|---------------|-----------------------|---------|----------|
| Static friction coefficient (dry, against steel/cast iron) | 0,35 – 0,45 | 0,38 – 0,48 | 0,30 – 0,50 | 0,25 – 0,35 | 0,40 – 0,50 |
| Maximum continuous temperature | 250 °C / 482 °F | 400 °C / 752 °F | 600 °C / 1112 °F | 500 °C / 932 °F | 800 °C / 1472 °F |
| Allowable contact pressure (static) | 0,7 MPa / 100 psi | 1,4 MPa / 200 psi | 2,8 MPa / 400 psi | 1,0 MPa / 145 psi | 2,0 MPa / 290 psi |
| PV limit (pressure × velocity) dry | 1,5 MPa·m/s<br>43 000 psi·ft/min | 2,2 MPa·m/s<br>63 000 psi·ft/min | 3,5 MPa·m/s<br>100 000 psi·ft/min | 1,0 MPa·m/s<br>28 500 psi·ft/min | 2,8 MPa·m/s<br>80 000 psi·ft/min |
| Relative wear rate* | Medium | Low–medium | Very low | Medium–high | Low |
| Thermal conductivity | 0,5 – 1,5 W/(m·K) | 3 – 15 W/(m·K) | 10 – 40 W/(m·K) | 20 – 50 W/(m·K) | 1 – 5 W/(m·K) |

*Wear rate depends strongly on PV load and temperature; values indicate qualitative comparison under equivalent nominal conditions.

## Friction Coefficients

The coefficient of friction of a friction pair varies with temperature, specific pressure, sliding speed, and the presence of contaminants. The following tables list common working ranges for frequent combinations in brakes and clutches.

### Coefficients in dry conditions (approximately 20 °C / 68 °F)

| Friction Material | Counterface | Static (μₛ) | Dynamic (μₖ) |
|----------------------|------------|---------------|---------------|
| Organic (molded) | Cast iron / steel | 0,35 – 0,42 | 0,32 – 0,38 |
| Organic (molded) | Stainless steel | 0,30 – 0,37 | 0,28 – 0,33 |
| Semi-metallic | Gray cast iron | 0,38 – 0,48 | 0,35 – 0,43 |
| Sintered, copper-base | Carbon steel | 0,30 – 0,45 | 0,28 – 0,42 |
| Sintered, iron-base | Carbon steel | 0,35 – 0,50 | 0,30 – 0,45 |
| Carbon composite | Steel | 0,25 – 0,35 | 0,22 – 0,30 |
| Ceramic (alumina base) | Cast iron | 0,42 – 0,50 | 0,40 – 0,48 |

### Coefficients in the presence of moisture or lubricant

| Friction Material | Counterface | Condition | Typical Static Coefficient |
|----------------------|------------|-----------|-----------------------------|
| Organic (paper friction) | Steel | ATF oil bath | 0,10 – 0,14 |
| Sintered, bronze-base | Steel | Oil lubricated | 0,08 – 0,12 |
| Carbon | Steel | Wet (water) | 0,15 – 0,20 |
| Semi-metallic | Cast iron | Light rain (road) | 0,25 – 0,30 |

## Common Materials

Friction materials are grouped into families based on their binder and reinforcement filler. Each offers a specific balance of grip, thermal stability, and durability.

- **Organic (NAO – Non Asbestos Organic):** Matrix of phenolic resin modified with rubber, glass fibers, aramid, and graphite. Excellent modulation, low noise, reduced disc attack. Typical maximum temperature 250 °C / 482 °F. Common in passenger car brake pads.
- **Semi-metallic:** Contain 30–65 % metal fibers or powders (steel, copper) in an organic matrix. Higher thermal conductivity than organics (3–15 W/(m·K)), stability up to 400 °C / 752 °F, and good fade resistance. Universal application in automotive brakes.
- **Sintered metallic:** Copper, iron, tin, and graphite powders compacted at high pressure and temperature without resin. Extreme PV capacity, withstand 600 °C / 1112 °F. Used in industrial clutches, heavy machinery, competition, and railway brakes.
- **Carbon composite:** Carbon fiber reinforcement in a carbon or carbon-silicon matrix. Very low weight, resistance to temperatures above 500 °C / 932 °F, but higher dry wear. Aerospace and high-performance racing applications.
- **Ceramic:** Composites of ceramic fibers and metal particles in a thermoset or sintered matrix. Very stable coefficient even at 800 °C / 1472 °F. Used in high-performance brakes and sports vehicles.
- **Paper friction (wet friction):** Cellulosic or aramid sheets impregnated with resin and friction particles. They operate immersed in oil; μ between 0.08 and 0.14. Essential in automatic transmissions and oil-bath multi-disc brakes.

## Material Selection

The choice of friction material depends on the required braking/clutch torque, energy to dissipate, duty cycle, environment (dry/wet), and expected temperature. In addition to the coefficient of friction, it must be verified that the actual pressure × velocity (PV) product does not exceed the material limits.

### Selection table by application

| Application | Recommended Material | Dynamic μ (dry) | Maximum Working Temperature | Suggested Maximum PV (dry) | Remarks |
|------------|----------------------|-------------------|------------------------------|---------------------------|---------------|
| Automotive disc brake (passenger car) | Semi-metallic | 0,35 – 0,43 | 400 °C / 752 °F | 2,0 MPa·m/s / 57 000 psi·ft/min | Good compromise between durability and grip |
| Rear drum brake | Organic (NAO) | 0,32 – 0,38 | 250 °C / 482 °F | 1,2 MPa·m/s / 34 000 psi·ft/min | Low cost, smooth modulation |
| Heavy commercial vehicle brake | Sintered, iron-base | 0,30 – 0,45 | 600 °C / 1112 °F | 3,5 MPa·m/s / 100 000 psi·ft/min | High energy, long life |
| Industrial electromagnetic clutch | Organic molded on steel | 0,35 – 0,42 | 200 °C / 392 °F | 1,5 MPa·m/s / 43 000 psi·ft/min | Mounted flush with magnetic pole |
| Competition clutch (dry) | Sintered copper or carbon | 0,35 – 0,50 | 600 – 800 °C / 1112 – 1472 °F | 3,5 MPa·m/s / 100 000 psi·ft/min | High fade resistance |
| Multi-disc oil-bath brake | Paper friction (wet friction) | 0,10 – 0,14 (in oil) | 150 °C / 302 °F (oil) | 1,5 MPa·m/s / 43 000 psi·ft/min (in oil) | Progressive engagement, long transmission life |
| Aircraft brake (carbon) | Carbon–carbon | 0,25 – 0,35 | 500 °C / 932 °F | 2,0 MPa·m/s / 57 000 psi·ft/min | Extremely low weight, high cost |

## Installation Considerations

The installation of a friction material directly influences system performance and safety. Main recommendations:

- **Parallelism and flatness:** The friction surface must be parallel to the counterface. In electromagnetic clutches, the material is mounted flush with the steel surface of the pole so as not to reduce magnetic attraction; any uneven wear may increase the air gap.
- **Adhesion or riveting:** Pads are bonded with high-temperature structural adhesives (typical degradation above 250 °C / 482 °F) or riveted. In high-duty applications, riveting is preferred, allowing visual inspection of remaining thickness.
- **Air gap (in electromagnetic systems):** The thickness of the friction material determines the static air gap. Typical new air gap values range from 0,25–0,50 mm / 0.010–0.020 in. An excessive air gap reduces magnetic force and transmitted torque.
- **Initial bedding:** New surfaces require a running-in (bedding) process to reach the design nominal coefficient. Typically consists of 20–30 brake applications or clutch cycles with moderate load.
- **Clearances and centering:** The pressure plate or disc must slide freely on the shaft. Any eccentricity greater than 0,1 mm / 0.004 in may cause vibrations and uneven wear.

## Maintenance and Service Life

The service life of a friction material is expressed in number of cycles, kilometers, or accumulated dissipated energy, and is limited by the minimum remaining thickness.

- **Periodic inspection:** Check lining thickness every 10 000 km / 6214 mi in automotive or every 500 operating hours in industrial machinery. The wear limit is usually twice the thickness of the metal backing (e.g., 2 mm / 0.078 in over backing).
- **Degradation causes:** Surface vitrification from overheating, resin crystallization (organics), contamination with oil or hydraulic fluid, and oxidation of steel fiber in humid environments.
- **Reference dimensions:** Commercial thicknesses of friction sheets start at 0,076 mm / 0.003 in and reach up to 0,508 mm / 0.020 in, per industrial supply catalogs (McMaster-Carr). The replacement thickness must exactly match the original design to preserve air gap dimensions and actuator stroke.
- **End-of-life symptoms:** Metallic squeal, vibration when braking, increased pedal or lever travel, and reduction of the coefficient of friction below 70 % of its nominal value indicate the material has reached its minimum thickness.

## Frequently Asked Questions

**1. What is the typical coefficient of friction of a dry organic material against steel?**  
The dynamic coefficient is between 0.32 and 0.38 at 20 °C / 68 °F, with a slightly higher static value (0.35–0.42). These values may drop by 20–30 % if the surface temperature exceeds 300 °C / 572 °F.

**2. What maximum temperature does a sintered friction material withstand without losing performance?**  
Copper-base sintered materials maintain a stable coefficient up to approximately 600 °C / 1112 °F. Above this temperature, metal oxidation accelerates and material transfer to the disc may occur.

**3. How often should the friction material be replaced in a conventional automotive disc brake?**  
The average life of a semi-metallic pad in mixed city/highway use ranges from 30 000 to 50 000 km / 18 600–31 000 mi, depending on topography and driving style.

**4. What minimum lining thickness is recommended before replacement?**  
For bonded pads, a remaining thickness of 2 mm / 0.078 in over the metal plate is considered safe, while for riveted linings the thickness above the rivet head must not be less than 1 mm / 0.039 in.

**5. How does moisture affect the coefficient of friction of a brake material?**  
In organic and semi-metallic materials, the presence of water can reduce the static coefficient by up to 30 % (e.g., from 0.40 to 0.28) until the heat generated evaporates the moisture. Friction materials for oil baths are specifically designed to operate with low and constant μ in a lubricated environment.

**6. Can torque capacity be increased simply by using a material with a higher coefficient of friction?**  
An increase in the static coefficient from 0.35 to 0.50 can increase theoretical torque by up to 43 % for the same actuation force, but it may also cause local overheating, increased wear, and exceed the thermal and PV limits of the system, so it must always be evaluated as a whole.

## Sources Consulted

- **mcmaster.com**: https://www.mcmaster.com/products/friction-material/
