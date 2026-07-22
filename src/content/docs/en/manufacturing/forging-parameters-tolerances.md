---
title: "Forging parameters and tolerances"
sidebar:
  label: "Forging parameters and tolerances"
description: "Technical reference: Forging parameters and tolerances"
keywords: ["forging allowances tolerances design parameters", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "forging"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Process summary
Forging is a plastic deformation forming process in which a metal material, usually preheated, is subjected to localized compressive forces applied by hammers, presses, or dies. The objective is to orient the grain structure, improve mechanical properties, and obtain parts with shapes close to the final geometry. Design parameters, such as draft angles, fillet radii, and dimensional tolerances, are critical to ensure the manufacturability and quality of the forged component.

## Types of forging
- **Open-die forging (smith forging):** The material is repeatedly deformed between flat or simple-shaped dies, moving the part manually or with manipulators. Produces parts of approximate geometry, ideal for large components and small batches.  
- **Closed-die forging (impression-die forging):** The material flows into a closed cavity that reproduces the final shape. Includes variants such as flash forging (blocking) and precision forging (near‑net shape).  
- **Upset forging:** Increases the cross-section by compressing the length, typical for screw heads and valves.  
- **Roll forging:** Reduces the section and lengthens the part by means of grooved rolls, used for shafts and leaf springs.  
- **Swaging:** Radial hammers reduce the diameter of tubes or bars by rotary impacts.

## Design parameters

### Draft angles
To facilitate removal of the forging from the die, taper angles on interior and exterior walls are required. Recommended values based on material are:

| Material | Draft angle (°) |
|----------|----------------|
| Aluminum | 0 – 2 |
| Copper alloys (brass) | 0 – 3 |
| Carbon and alloy steel | 5 – 7 |
| Stainless steel | 5 – 8 |

### Minimum corner and fillet radii
Sharp edges must be avoided by using generous radii that improve material flow and reduce stress concentrations. Minimum dimensions depend on the height of the forged protrusion:

| Protrusion height | Minimum corner radius | Minimum fillet radius |
|-------------------|-----------------------|-----------------------|
| 12,5 mm / 0.5 in | 1,5 mm / 0.06 in | 5 mm / 0.2 in |
| 25 mm / 1.0 in | 3 mm / 0.12 in | 6,25 mm / 0.25 in |
| 50 mm / 2.0 in | 5 mm / 0.2 in | 10 mm / 0.4 in |
| 100 mm / 4.0 in | 6,25 mm / 0.25 in | 10 mm / 0.4 in |
| 400 mm / 16 in | 22 mm / 0.875 in | 50 mm / 2.0 in |

### Parting line considerations
- The parting line should be located, whenever possible, in a single plane and through the center of the part, not near the top or bottom edges.  
- Any point on the parting surface must not exceed 75° relative to the main parting plane.  
- Undercuts that prevent removal of the part must be avoided.

## Tolerances

### Dimensional tolerance
The usual dimensional tolerance is positive and approximates **0.3 % of the dimension**, rounded to the next multiple of 0,5 mm / 0.020 in. For example, for a dimension of 100 mm a tolerance of +0,5 mm is expected.

### Die wear tolerance
Lateral (parallel to the parting plane), expressed as a percentage of the nominal value:

| Material | Die wear tolerance (% of lateral nominal value) |
|----------|------------------------------------------------|
| Copper alloys | +0,2 % |
| Aluminum, Steel | +0,5 % |

### Die closure tolerance
Corresponds to the opening and closing direction of the tooling:

| Projected die area | Die closure tolerance |
|-------------------|-----------------------|
| < 150 cm² / < 23 in² | 1 mm / 0.040 in |
| > 6500 cm² / > 100 in² | 6,25 mm / 0.25 in |

For intermediate areas, linear interpolation is used.

### Die match tolerance
Allowable misalignment between the upper and lower die halves as a function of the trimmed forging weight:

| Material | Weight of finished forging (trimmed) | Die match tolerance |
|----------|--------------------------------------|---------------------|
| Aluminum, Copper alloys, Steel | < 10 kg / < 22 lb | 0,75 mm / 0.030 in |
|  | < 50 kg / < 110 lb | 1,75 mm / 0.070 in |
|  | > 500 kg / > 1100 lb | 5 mm / 0.200 in |
| Stainless steel, Titanium | < 10 kg / < 22 lb | 1,25 mm / 0.050 in |
|  | < 50 kg / < 110 lb | 2,5 mm / 0.100 in |
|  | > 500 kg / > 1100 lb | 6,5 mm / 0.260 in |

### Flash tolerance
Allowable amount of flash remaining after the trimming operation:

| Material | Weight of finished forging (trimmed) | Flash tolerance |
|----------|--------------------------------------|-----------------|
| Aluminum, Copper alloys, Steel | < 10 kg / < 22 lb | 0,8 mm / 0.032 in |
|  | < 50 kg / < 110 lb | 3,25 mm / 0.125 in |
|  | > 500 kg / > 1100 lb | 10 mm / 0.4 in |
| Stainless steel, Titanium | < 10 kg / < 22 lb | 1,6 mm / 0.064 in |
|  | < 50 kg / < 110 lb | 5 mm / 0.2 in |
|  | > 500 kg / > 1100 lb | 12,5 mm / 0.5 in |

## Applicable materials
Forging is applied to a wide range of metallic alloys with sufficient hot ductility. Typical hot forging temperature ranges are:

| Material | Hot forging temperature (°C / °F) |
|----------|-----------------------------------|
| Aluminum and alloys | 350 – 500 °C / 662 – 932 °F |
| Copper alloys (brass, bronze) | 700 – 800 °C / 1292 – 1472 °F |
| Carbon and alloy steel | 1100 – 1250 °C / 2012 – 2282 °F |
| Stainless steel | 1150 – 1250 °C / 2102 – 2282 °F |
| Titanium and alloys | 900 – 950 °C / 1652 – 1742 °F |

Material selection directly influences draft angles and the match and flash tolerances, according to the tables above.

## Advantages and limitations
**Advantages**
- Continuous improvement of grain flow, which increases fatigue resistance and toughness.
- Obtaining near‑net shapes, reducing subsequent machining.
- Absence of porosity and structural homogeneity superior to casting or sintering.
- Wide range of sizes, from small parts of grams to shafts of several tons.

**Limitations**
- High tooling and die costs, especially in precision forging.
- Geometric restrictions: need for draft angles, radii, and minimum wall thicknesses.
- Tighter tolerances than in machining, with allowances for finishing.
- Not suitable for brittle materials or those with low plastic deformation capacity.

## Frequently asked questions
**1. What dimensional tolerance is expected in a standard forged part?**  
The usual positive tolerance is approximately 0.3 % of the nominal dimension, rounded to the next 0,5 mm / 0.020 in.

**2. What is the minimum corner radius for a 50 mm protrusion?**  
For a height of 50 mm / 2.0 in a minimum corner radius of 5 mm / 0.2 in is recommended.

**3. What draft angle does a stainless steel design need?**  
Stainless steels require an angle of 5° to 8°; typically 7° is chosen as a safe value.

**4. How much can a die shift in a 30 kg aluminum forging?**  
For 30 kg / 66 lb (category <50 kg) the die match tolerance is 1,75 mm / 0.070 in.

**5. What maximum flash thickness is accepted in a 600 kg trimmed titanium forging?**  
For weights >500 kg / >1100 lb, the flash tolerance reaches 12,5 mm / 0.5 in.

**6. How much movement does die closure allow in a small part?**  
When the projected area is less than 150 cm² / 23 in², the die closure tolerance is 1 mm / 0.040 in.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **efunda.com**: https://www.efunda.com/processes/metal_processing/forging.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/open-die-forging
