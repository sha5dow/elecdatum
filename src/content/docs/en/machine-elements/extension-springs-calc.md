---
title: "Extension springs calculation"
sidebar:
  label: "Extension springs calculation"
description: "Technical reference: Extension springs calculation"
keywords: ["extension spring calculation initial tension", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "extension-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Definition

A tension spring (or extension spring) is an elastic element designed to absorb and store mechanical energy when subjected to an axial tensile force. Unlike compression springs, tension springs incorporate an initial preload—called coil tension—that keeps the coils in firm contact and must be overcome before the spring begins to elongate. The spring stiffness is described by the spring constant k (N/mm or lb/in) and the force–deformation relationship obeys the generalized form of Hooke's law: F = Fᵢ + k·δ, where Fᵢ is the initial tension and δ the extension from free length.

## Operating principle

The behavior of a tension spring results from the elastic torsional deformation of helically wound wire. When an external force is applied, the initial tension Fᵢ that holds the coils together must first be overcome; only then do the coils begin to separate and the elongation becomes linearly proportional to the additional load. Mathematically this is expressed with the modified Hooke's law:

**F = Fᵢ + k · δ**

where F is the applied force, Fᵢ the initial tension (N or lb), k the spring constant (N/mm or lb/in) and δ the elongation from free length (mm or in). As long as the load does not exceed the elastic limit of the material, recovery is complete and the spring returns to its original state. This principle is used in return mechanisms, doors, trampolines, spring balances and clamping devices.

## Standard dimensions

Typical dimensions for industrial tension springs manufactured from spring steel wire (per DIN 17223 or ASTM A228) are given in the following table. The values correspond to common commercial sizes; tolerances and surface finishes are governed by manufacturer standards.

| Wire diameter (d) | Outer diameter (De) | Free length (L₀) | Typical hook diameter (Dg) |
|-------------------|---------------------|------------------|----------------------------|
| 0.5 mm / 0.020 in | 3.2 mm / 0.126 in | 12.7 mm / 0.50 in | 2.5 mm / 0.098 in |
| 1.0 mm / 0.039 in | 6.5 mm / 0.256 in | 25.4 mm / 1.00 in | 5.0 mm / 0.197 in |
| 1.6 mm / 0.063 in | 10.0 mm / 0.394 in | 50.8 mm / 2.00 in | 8.0 mm / 0.315 in |
| 2.5 mm / 0.098 in | 16.0 mm / 0.630 in | 76.2 mm / 3.00 in | 12.7 mm / 0.500 in |
| 3.5 mm / 0.138 in | 22.5 mm / 0.886 in | 102.0 mm / 4.02 in | 18.0 mm / 0.709 in |
| 5.0 mm / 0.197 in | 32.0 mm / 1.260 in | 152.4 mm / 6.00 in | 25.4 mm / 1.000 in |

*Note: Traction hooks can be half-loop, full-loop or threaded inserts, and increase the total installed length. The free length indicated does not include the hooks.*

## Load capacities

The load capacity of a tension spring is determined by the allowable shear stress of the material, the spring index C = D/d and the Wahl factor. The following table gives indicative values for the standard dimensions above, considering a high-carbon steel with shear modulus G = 79.3 GPa / 11.5×10⁶ psi and number of active coils Na = 20.

| Wire diameter (d) | Spring constant (k) | Maximum force (Fmax) | Maximum extension (δmax) | Typical initial tension (Fᵢ) |
|-------------------|---------------------|----------------------|--------------------------|------------------------------|
| 0.5 mm / 0.020 in | 0.12 N/mm / 0.69 lb/in | 3.8 N / 0.85 lb | 31.8 mm / 1.25 in | 0.4 N / 0.09 lb |
| 1.0 mm / 0.039 in | 0.35 N/mm / 2.0 lb/in | 22 N / 4.9 lb | 62.7 mm / 2.47 in | 2.2 N / 0.49 lb |
| 1.6 mm / 0.063 in | 1.15 N/mm / 6.6 lb/in | 85 N / 19.1 lb | 73.9 mm / 2.91 in | 8.5 N / 1.9 lb |
| 2.5 mm / 0.098 in | 2.8 N/mm / 16.0 lb/in | 310 N / 69.7 lb | 110.7 mm / 4.36 in | 31 N / 7.0 lb |
| 3.5 mm / 0.138 in | 5.5 N/mm / 31.4 lb/in | 750 N / 168.6 lb | 136.4 mm / 5.37 in | 75 N / 16.9 lb |
| 5.0 mm / 0.197 in | 11.0 N/mm / 62.8 lb/in | 1800 N / 404.7 lb | 163.6 mm / 6.44 in | 180 N / 40.5 lb |

*The Fmax values correspond to an allowable shear stress of approximately 40 % of the material's tensile strength (≈ 1100 MPa / 160 ksi). The initial tension Fᵢ represents between 5 % and 10 % of the maximum force.*

## Calculation and selection

1. **Determine the service conditions**: desired force at extended length F₁ and free length L₀, or the travel δ = L₁ – L₀ and force F₁.
2. **Choose an initial tension Fᵢ** according to the design (generally 5‑15 % of Fmax for standard hooks; higher for firm return applications). Initial tension is difficult to calculate accurately and is usually verified by testing.
3. **Calculate the required spring constant**:
   \[ k = \frac{F₁ - Fᵢ}{δ} \]
4. **Size the spring** using the stiffness formula for helical springs:
   \[ k = \frac{G \, d^4}{8 \, D_m^3 \, N_a} \]
   where G is the shear modulus of the material, d the wire diameter, Dm = De – d the mean diameter, and Na the number of active coils.
5. **Verify the shear stress** in the wire using the Wahl factor (Kw):
   \[ τ_{max} = K_w \, \frac{8 \, F_{max} \, D_m}{π \, d^3} \]
   Ensure that τmax is less than the allowable stress of the material, considering fatigue effects if cyclic loading is present.
6. **Select the material**: spring steel per ASTM A228 (music wire), AISI 302/304 stainless for corrosive environments, or nickel alloys for high temperatures.
7. **Round to commercial standard dimensions** and recalculate the actual force obtained. During hook selection, consider the reduction in effective free length and the possible stress concentration effect.

## Mounting considerations

- **Hooks and terminals**: the loop or hook ends are the weakest areas of the spring. Avoid sharp bend radii that increase local stress. The hook must be formed without damaging the wire; cold bending raises the risk of fatigue failure.
- **Anchor points**: the pins or supports where the spring hooks should be smooth and free of sharp edges that could scratch the wire. Use pins, bolts or clips with a diameter slightly smaller than the hook inside diameter to avoid excessive play.
- **Preloading**: when a high initial tension is specified, the spring may require a preloading that takes it slightly above the elastic limit during manufacturing (setting) to stabilize the initial tension.
- **Protection and safety**: in applications with high stored energy, provide a guide or containment system to prevent ejection of the spring in case of unexpected failure. In the presence of corrosion, select stainless materials or consider protective coatings.
- **Detachable mounting**: if maintenance requires frequent detachment of the spring, choose easily coupled hooks (German-type or clip) and verify that the insertion force does not exceed the working load.

## Selection tables by application

For a quick selection, dimensions and indicative performances for common applications are provided. All tables include values in metric and imperial units.

| Application | Wire diameter (d) | Free length (L₀) | Constant k (N/mm / lb/in) | Maximum force (N / lb) |
|-------------|-------------------|------------------|---------------------------|------------------------|
| Recreational trampoline | 3.5 mm / 0.138 in | 140 mm / 5.51 in | 3.0 N/mm / 17.1 lb/in | 800 N / 180 lb |
| Pedal return mechanism | 1.6 mm / 0.063 in | 80 mm / 3.15 in | 0.7 N/mm / 4.0 lb/in | 50 N / 11.2 lb |
| Fire door (closer) | 4.5 mm / 0.177 in | 300 mm / 11.81 in | 1.2 N/mm / 6.9 lb/in | 600 N / 135 lb |
| Blinds tape tensioner | 1.0 mm / 0.039 in | 40 mm / 1.57 in | 0.2 N/mm / 1.1 lb/in | 12 N / 2.7 lb |
| Light trailer hitch | 5.5 mm / 0.217 in | 180 mm / 7.09 in | 4.8 N/mm / 27.4 lb/in | 1500 N / 337 lb |
| Analog spring balance | 0.7 mm / 0.028 in | 60 mm / 2.36 in | 0.08 N/mm / 0.46 lb/in | 8 N / 1.8 lb |

## Frequently asked questions

**What is the typical initial tension for a tension spring of 2 mm diameter steel wire?**  
The initial tension is usually between 12 N / 2.7 lb and 25 N / 5.6 lb, depending on the spring index and winding process, representing approximately 8% of the maximum allowable force.

**How is the spring constant k of an extension spring calculated?**  
The constant is obtained with the formula k = (F – Fᵢ) / δ, where F is the total applied force, Fᵢ the initial tension, and δ the measured elongation. For a helical spring of round wire, k can also be calculated as k = G·d⁴ / (8·Dm³·Na), with G ≈ 79.3 GPa / 11.5×10⁶ psi for steel.

**What maximum extension can a tension spring reach without losing its elastic properties?**  
It is recommended not to exceed a deformation that induces a shear stress above 45% of the material's tensile strength, which for an ASTM A228 steel of 2.5 mm / 0.098 in corresponds, for example, to a maximum elongation of about 110 mm / 4.3 in.

**How much does the force of a tension spring vary when temperature increases from 20 °C to 100 °C?**  
In carbon steels, the shear modulus G decreases approximately 1% every 38 °C, so when going from 20 °C to 100 °C the spring constant reduces by about 2.5%, proportionally reducing the force generated for the same extension. The force at 100 °C would be 2.5% lower than at 20 °C.

**What force is needed to open 15 mm a closing door equipped with a tension spring of k = 0.8 N/mm?**  
Assuming an initial tension of 3 N, the required force would be F = 3 N + 0.8 N/mm × 15 mm = 15 N / 3.4 lb. In imperial units: k ≈ 4.6 lb/in, Fᵢ = 0.67 lb, δ = 0.59 in, so F = 0.67 + 4.6 × 0.59 ≈ 3.4 lb.

**How does the number of active coils influence the stiffness of a tension spring?**  
Stiffness is inversely proportional to Na. If a constant of 2.8 N/mm with 20 coils is needed, a spring with 10 active coils would double the stiffness to 5.6 N/mm, provided the wire diameter and mean coil diameter are unchanged.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hookes-law-force-spring-constant-d_1853.html
- **mcmaster.com**: https://www.mcmaster.com/products/tension-springs/
