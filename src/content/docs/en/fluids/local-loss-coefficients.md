---
title: "Local loss coefficients"
sidebar:
  label: "Local loss coefficients"
description: "Technical reference: Local loss coefficients"
keywords: ["local head loss coefficients fittings valves", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "local-losses"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

Local loss coefficients, also called minor loss or dynamic loss coefficients, quantify the mechanical energy dissipation that occurs in pipe fittings — elbows, tees, valves, unions, etc. — due to changes in flow direction, partial obstructions, expansions, or contractions. In piping systems, these losses add to continuous friction losses and are decisive in short networks or those with multiple singularities. The value of the coefficient ξ (dimensionless) allows calculating the head loss or pressure drop using the fundamental minor loss equation.

## Local Head Loss Formula

Local head loss is expressed as a fraction of the flow velocity head. The general expression for head loss h<sub>L</sub> is:

\[
h_L = \xi \frac{v^2}{2g}
\]

where:  
h<sub>L</sub> = local head loss (m or ft)  
ξ = local loss coefficient (dimensionless)  
v = mean flow velocity (m/s or ft/s)  
g = acceleration due to gravity (9.81 m/s² or 32.17 ft/s²)

In terms of pressure, the associated drop is:

\[
\Delta p = \xi \frac{\rho v^2}{2}
\]

where:  
Δp = pressure loss (Pa or psi)  
ρ = fluid density (kg/m³ or lb/ft³)

These formulas are valid for incompressible flow and fully developed turbulent regime, where ξ is considered constant. For compressible fluids or laminar flow, specific corrections must be applied.

## Table of Loss Coefficients for Fittings and Valves

Typical ξ values for common components in piping systems. The coefficients correspond to fully developed turbulent flow (Re > 10,000). In the transition regime, values may be higher.

| Component | Coefficient ξ |
|---|---|
| Tee, flanged, straight-through flow | 0.2 |
| Tee, threaded, straight-through flow | 0.9 |
| Tee, flanged, side-branch flow | 1.0 |
| Tee, threaded, side-branch flow | 2.0 |
| Union, threaded | 0.08 |
| 90° elbow, flanged, standard | 0.3 |
| 90° elbow, threaded, standard | 1.5 |
| 45° elbow, threaded, standard | 0.4 |
| 90° elbow, flanged, long-radius | 0.2 |
| 90° elbow, threaded, long-radius | 0.7 |
| 45° elbow, flanged, long-radius | 0.2 |
| 180° return bend, flanged | 0.2 |
| 180° return bend, threaded | 1.5 |
| Globe valve, fully open | 10 |
| Angle valve, fully open | 2 |
| Gate valve, fully open | 0.15 |
| Gate valve, 1/4 closed | 0.26 |
| Gate valve, 1/2 closed | 2.1 |
| Gate valve, 3/4 closed | 17 |
| Swing check valve, forward flow | 2 |
| Ball valve, fully open | 0.05 |
| Ball valve, 1/3 closed | 5.5 |
| Ball valve, 2/3 closed | 200 |
| Diaphragm valve, open | 2.3 |
| Diaphragm valve, half-open | 4.3 |
| Diaphragm valve, 1/4 open | 21 |
| Water meter | 7 |

The data come from Engineering Toolbox (2004) and are representative of standard geometries. For fittings with specific dimensions or non-standard curvatures, it is recommended to consult manufacturer standards or references such as Idelchik (1986).

## Factors Influencing the Loss Coefficient

1. **Flow regime**: In laminar flow (Re < 2000), ξ is not constant and increases as the Reynolds number decreases. The tabulated values correspond to Re > 10,000.
2. **Curvature ratio (R/D)**: In elbows, the ratio of bend radius to inside diameter (R/D) significantly affects ξ. Large radii (R/D ≥ 1.5) reduce the coefficient, while sharp elbows increase losses due to separation.
3. **Deflection angle**: The greater the angle, the greater the loss. A 45° elbow has approximately half the ξ of an equivalent 90° elbow.
4. **Surface finish**: The internal roughness of the fitting increases viscous dissipation. Smooth surfaces (flanged) have lower ξ than threaded ones.
5. **Valve position**: In gate or ball valves, partial obstruction causes a drastic increase in ξ (from 0.15 to 17 when 3/4 closed).

## Equivalent Length Method

To simplify system calculations, local losses can be expressed as an equivalent length L<sub>eq</sub> of straight pipe of the same diameter that would produce the same pressure drop:

\[
L_{eq} = \frac{\xi D}{f}
\]

where:  
D = internal pipe diameter (m or ft)  
f = Darcy-Weisbach friction factor

This method allows summing equivalent lengths to the physical pipe length and applying the Darcy-Weisbach equation directly. It is especially useful in the HVAC industry and water distribution systems, where unified equivalent length tables are used.

## Selection Criteria in System Design

- **Elbows**: Prefer long-radius (ξ ≈ 0.2) over standard when space permits. Avoid threaded elbows in main lines: ξ = 1.5 (90°) is five times greater than the flanged equivalent.
- **Tees**: Orient the branch in a straight line whenever possible (ξ = 0.2 flanged). Side branches increase ξ to 1.0.
- **Valves**: Fully open ball valves offer the least resistance (ξ = 0.05), followed by gate valves (ξ = 0.15). Globe valves are inherently restrictive (ξ = 10) and are only justified by their throttling capability.
- **Check valves**: Swing check valves impose ξ ≈ 2, so their installation must be carefully evaluated in systems with low available pressure.
- **Partially closed operation**: Never use a gate valve as a throttling element: the loss jumps from 0.15 to 17 in the 25%–100% open range.

## Frequently Asked Questions (FAQ)

1. **What is the loss coefficient of a standard 90° threaded elbow?**  
   The coefficient ξ is 1.5 for turbulent flow. This implies that each elbow dissipates a velocity head equal to 1.5 × (v²/2g).

2. **What pressure drop does an open globe valve produce with water at 2 m/s and 1000 kg/m³?**  
   With ξ = 10, Δp = 10 × (1000 kg/m³ × (2 m/s)² / 2) = 20,000 Pa (20 kPa or 2.9 psi).

3. **Which common fitting has the lowest loss coefficient?**  
   The fully open ball valve (ξ = 0.05) and the threaded union (ξ = 0.08) have the lowest losses, practically negligible in many designs.

4. **How much does the loss increase if a gate valve is closed halfway?**  
   The coefficient goes from 0.15 (fully open) to 2.1 (1/2 closed), a 14-fold increase. The head loss is multiplied by the same factor for a given velocity.

5. **How is the total loss calculated in a section with multiple fittings?**  
   Sum the ξ coefficients of all fittings and apply the formula h<sub>L total</sub> = (Σξ) v²/(2g). They can also be converted to equivalent lengths and use the Darcy-Weisbach equation.

6. **Does the loss coefficient vary with pipe diameter?**  
   For the same type of fitting, ξ is approximately constant in fully developed turbulent flow. However, in elbows the R/D ratio affects the value: a standard flanged 90° elbow (R/D ≈ 1) has ξ = 0.3; a long-radius one (R/D = 1.5) reduces to ξ = 0.2.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/minor-loss-coefficients-pipes-d_626.html
- **efunda.com**: https://www.efunda.com/formulae/
- **thermopedia.com**: https://www.thermopedia.com/content/577/
