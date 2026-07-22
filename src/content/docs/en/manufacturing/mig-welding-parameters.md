---
title: "MIG welding parameters by material"
sidebar:
  label: "MIG welding parameters by material"
description: "Technical reference: MIG welding parameters by material"
keywords: ["MIG GMAW welding parameters wire speed voltage", "manufacturing"]
category: "manufacturing"
topic: "joining"
subcategory: "mig-welding"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Operating Parameters
Typical voltage in MIG welding for carbon steel ranges from 15 V to 32 V, depending on thickness and transfer mode. The fundamental parameters controlling the process are arc voltage, wire feed speed, travel speed, and shielding gas flow rate. Proper selection of these values determines joint quality and penetration.

| Parameter | Typical Range | Common Unit |
|---|---|---|
| Voltage | 15 – 32 | V |
| Wire feed speed (steel ⌀ 0,8 mm) | 2 – 12 m/min / 6,6 – 39,4 ft/min | m/min |
| Travel speed | 0,2 – 0,8 m/min / 0,7 – 2,6 ft/min | m/min |
| Shielding gas flow rate | 10 – 20 L/min / 0,35 – 0,71 ft³/min | L/min |
| Contact tip-to-work distance (stick-out) | 10 – 15 mm / 0,39 – 0,59 in | mm |

Current is directly related to wire feed speed and electrode diameter. In short-circuit transfer, currents of 50 to 200 A are used, while in spray transfer, they exceed 250 A. The recommended polarity is direct current electrode positive (DCEP) for most applications.

## Typical Tolerances
The positioning accuracy of the weld bead reaches ±1 mm / ±0,039 in in semi-automatic processes with adequate tooling. Tolerances are influenced by joint preparation, operator skill, and arc stability.

| Characteristic | Usual Tolerance |
|---|---|
| Weld bead position relative to joint line | ±1 mm / ±0,039 in |
| Weld reinforcement (excess weld metal) | ±0,5 mm / ±0,020 in |
| Weld bead width | ±0,5 mm / ±0,020 in |
| Root penetration (butt joint without bevel) | ±0,2 mm / ±0,008 in |
| Distance between tack welds | Minimum 50 mm / 2 in |

Thermal distortion is minimized by spacing tack welds at least 50 mm / 2 in apart and using alternating welding sequences. Angular tolerances in corner joints are usually controlled within ±2°.

## Applicable Materials
The MIG process is suitable for welding 4 main families of materials. Carbon steels, low-alloy steels, stainless steels, and most aluminum alloys are successfully welded using this procedure.

| Material | Weldability | Typical Shielding Gas | Remarks |
|---|---|---|---|
| Carbon steels (A36, S235, S275) | Excellent | CO₂ or Ar/CO₂ mixture (80/20) | Suitable from 0,5 mm / 0,020 in |
| Low-alloy steels (4140, 4340) | Good | Ar/CO₂ (80/20) or Ar/O₂ | May require preheating |
| Stainless steels (304, 316) | Excellent | Ar/CO₂ (98/2) or He/Ar/CO₂ | Pay attention to distortion |
| Aluminum alloys (5052, 6061) | Very good | Argon 100 % | Use push torch technique |
| Copper-zinc alloys (brass) | Limited | Argon or Ar/He mixture | Emission of zinc fumes |

The process is also used on nickel and titanium with high-purity inert gases and gas backing conditions. Coated materials (galvanized) require fume extraction and may need cored wire.

## Advantages and Limitations
The deposition rate in spray transfer can reach 8 kg/h / 17,6 lb/h, offering much higher productivity than shielded metal arc welding. MIG welding combines high execution speed, excellent adaptability to automation, and the absence of slag in most modes.

**Advantages:**
- High deposition rate – up to 8 kg/h / 17,6 lb/h in spray.
- Continuous weld bead without needing to change electrode.
- Low fume and spatter levels with argon/CO₂ mixed gases.
- Easy integration into robotic cells and positioners.
- Wide thickness range: from 0,5 mm / 0,020 in up to 6,3 mm / 0,250 in.

**Limitations:**
- Sensitivity to drafts: the shielding gas can be displaced, limiting outdoor use without barriers.
- More complex equipment and requires gas supply, nozzles, diffusers, and wire feeders.
- Short-circuit transfer generates spatter that requires additional cleaning.
- Limited for vertical-up welding with thicknesses greater than 4 mm / 0,16 in.
- Higher operating cost than MMA welding when using special gas mixtures.

## Parameter Selection Guide
The recommended parameter selection for carbon steel with solid wire ER70S-6 and Ar/CO₂ (80/20) gas is based on material thickness and the desired transfer mode.

| Material Thickness | Wire Diameter | Current (A) | Voltage (V) | Wire Speed | Transfer Mode |
|---|---|---|---|---|---|
| 0,8 mm / 0,031 in | 0,6 mm / 0,024 in | 40 – 60 | 15 – 17 | 1,5 – 2,5 m/min / 4,9 – 8,2 ft/min | Short-circuit |
| 1,5 mm / 0,059 in | 0,8 mm / 0,030 in | 80 – 110 | 17 – 19 | 3,0 – 4,5 m/min / 9,8 – 14,8 ft/min | Short-circuit |
| 3,0 mm / 0,118 in | 1,0 mm / 0,040 in | 130 – 170 | 20 – 23 | 5,0 – 7,0 m/min / 16,4 – 23,0 ft/min | Short-circuit or globular |
| 4,5 mm / 0,177 in | 1,2 mm / 0,047 in | 180 – 220 | 23 – 26 | 7,5 – 9,5 m/min / 24,6 – 31,2 ft/min | Globular or spray |
| 6,0 mm / 0,236 in | 1,2 mm / 0,047 in | 220 – 280 | 26 – 30 | 9,5 – 13,0 m/min / 31,2 – 42,6 ft/min | Spray |

For aluminum, with pure argon and 5356 wire, parameters shift to higher wire feed speed and current values due to higher thermal conductivity. Prior cleaning with a stainless steel brush and degreasing with acetone is always recommended.

## Parameter Tables by Material
Below are typical parameter tables for three widely used industrial materials. Values may be adjusted according to joint geometry, welding position, and environmental conditions.

### Carbon Steel (ER70S-6 / CO₂ or Ar/CO₂)
| Thickness | Wire Diameter | Voltage (V) | Wire Feed Speed | Shielding Gas | Transfer |
|---|---|---|---|---|---|
| 0,8 mm / 0,031 in | 0,6 mm / 0,024 in | 15 – 16 V | 1,5 – 2,0 m/min / 4,9 – 6,6 ft/min | CO₂ | Short-circuit |
| 1,0 mm / 0,039 in | 0,8 mm / 0,030 in | 16 – 18 V | 2,5 – 3,5 m/min / 8,2 – 11,5 ft/min | Ar/CO₂ 80/20 | Short-circuit |
| 1,5 mm / 0,059 in | 0,8 mm / 0,030 in | 17 – 19 V | 3,5 – 4,5 m/min / 11,5 – 14,8 ft/min | Ar/CO₂ 80/20 | Short-circuit |
| 2,0 mm / 0,079 in | 1,0 mm / 0,040 in | 19 – 21 V | 4,5 – 6,0 m/min / 14,8 – 19,7 ft/min | Ar/CO₂ 80/20 | Short-circuit |
| 3,0 mm / 0,118 in | 1,0 mm / 0,040 in | 20 – 23 V | 6,0 – 7,5 m/min / 19,7 – 24,6 ft/min | Ar/CO₂ 80/20 | Short-circuit/Globular |
| 4,0 mm / 0,157 in | 1,2 mm / 0,047 in | 23 – 26 V | 7,5 – 9,0 m/min / 24,6 – 29,5 ft/min | Ar/CO₂ 80/20 | Globular/Spray |
| 5,0 mm / 0,197 in | 1,2 mm / 0,047 in | 26 – 29 V | 9,0 – 11,0 m/min / 29,5 – 36,1 ft/min | Ar/CO₂ 80/20 | Spray |
| 6,0 mm / 0,236 in | 1,2 mm / 0,047 in | 29 – 32 V | 11,0 – 14,0 m/min / 36,1 – 45,9 ft/min | Ar/CO₂ 80/20 | Spray |

### Stainless Steel (ER308L / Ar+CO₂ 98/2)
| Thickness | Wire Diameter | Voltage (V) | Wire Feed Speed | Shielding Gas | Transfer |
|---|---|---|---|---|---|
| 1,0 mm / 0,039 in | 0,8 mm / 0,030 in | 16 – 18 V | 2,5 – 3,5 m/min / 8,2 – 11,5 ft/min | Ar/CO₂ 98/2 | Short-circuit |
| 1,5 mm / 0,059 in | 0,8 mm / 0,030 in | 17 – 19 V | 3,5 – 4,5 m/min / 11,5 – 14,8 ft/min | Ar/CO₂ 98/2 | Short-circuit |
| 2,0 mm / 0,079 in | 1,0 mm / 0,040 in | 19 – 21 V | 4,5 – 5,5 m/min / 14,8 – 18,0 ft/min | Ar/CO₂ 98/2 | Short-circuit |
| 3,0 mm / 0,118 in | 1,0 mm / 0,040 in | 20 – 23 V | 5,5 – 7,0 m/min / 18,0 – 23,0 ft/min | Ar/CO₂ 98/2 | Short-circuit/Globular |
| 4,0 mm / 0,157 in | 1,2 mm / 0,047 in | 23 – 26 V | 7,0 – 9,0 m/min / 23,0 – 29,5 ft/min | Ar/CO₂ 98/2 | Spray |

### Aluminum (ER5356 / Argon 100%)
| Thickness | Wire Diameter | Voltage (V) | Wire Feed Speed | Shielding Gas | Transfer |
|---|---|---|---|---|---|
| 2,0 mm / 0,079 in | 1,0 mm / 0,040 in | 20 – 23 V | 5,5 – 7,0 m/min / 18,0 – 23,0 ft/min | Ar 100% | Pulsed spray |
| 3,0 mm / 0,118 in | 1,2 mm / 0,047 in | 23 – 26 V | 7,0 – 9,5 m/min / 23,0 – 31,2 ft/min | Ar 100% | Pulsed spray |
| 4,0 mm / 0,157 in | 1,2 mm / 0,047 in | 24 – 27 V | 9,5 – 12,0 m/min / 31,2 – 39,4 ft/min | Ar 100% | Spray |
| 5,0 mm / 0,197 in | 1,6 mm / 0,063 in | 26 – 30 V | 8,0 – 11,0 m/min / 26,2 – 36,1 ft/min | Ar 100% | Spray |
| 6,0 mm / 0,236 in | 1,6 mm / 0,063 in | 28 – 32 V | 11,0 – 14,0 m/min / 36,1 – 45,9 ft/min | Ar 100% | Spray |

## Frequently Asked Questions

**1. What thickness range can be welded with MIG?**  
The typical range covers from 0,5 mm / 0,020 in to 6,3 mm / 0,250 in in a single pass. Greater thicknesses require multiple passes or proper beveling.

**2. What is the recommended shielding gas flow rate for indoor use?**  
The optimal flow rate is between 10 L/min and 20 L/min (0,35–0,71 ft³/min). Values below 8 L/min can cause porosity; above 25 L/min cause turbulence and contamination.

**3. At what voltage is spray transfer achieved on carbon steel?**  
The transition to spray generally occurs from 25 V with 1,2 mm wire and Ar/CO₂ 80/20 gas, reaching currents above 220 A.

**4. What should the contact tip-to-work distance (stick-out) be?**  
The recommended stick-out distance for solid wire is 10–15 mm / 0,39–0,59 in. An excessive value reduces penetration; one too short can overheat the nozzle.

**5. What wire feed speed is needed to weld 3 mm aluminum?**  
For 3 mm / 0,118 in aluminum with ⌀ 1,2 mm wire, between 7,0 and 9,5 m/min / 23,0–31,2 ft/min are used, with voltages of 23–26 V and pure argon.

**6. How many tack welds per linear meter are recommended?**  
A minimum of 5 tack welds per linear meter is suggested, spaced at least 50 mm / 2 in apart to control thermal distortion in thin sheets.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/thermal-conductivity-calculator-d_857.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/welding_inertgas.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/manual-metal-arc-welding-mma
