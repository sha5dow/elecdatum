---
title: "Dimensionless numbers fluid mechanics"
sidebar:
  label: "Dimensionless numbers fluid mechanics"
description: "Technical reference: Dimensionless numbers fluid mechanics"
keywords: ["Reynolds Nusselt Prandtl Froude numbers", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "dimensionless-numbers"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## General description
Dimensionless numbers are fundamental parameters in fluid mechanics and heat transfer, obtained by non-dimensionalizing the equations governing motion. They allow characterizing the flow regime, predicting transitions, and comparing geometrically similar systems without relying on dimensional scales. Below is a comprehensive table with their definition, physical interpretation, and fields of application, followed by typical Prandtl number values for water and air, practical selection criteria, and answers to frequently asked questions.

## Table of dimensionless numbers
| Name | Symbol | Formula | Interpretation | Main application |
|---|---|---|---|---|
| Reynolds | Re | Re = (ρ v L) / η | Ratio of inertial to viscous forces | Prediction of laminar or turbulent regime |
| Euler | Eu | Eu = Δp / (ρ v²) | Ratio of pressure drop to kinetic energy | Head losses in pipes and fittings |
| Froude | Fr | Fr = v / √(g L) | Ratio of inertial to gravitational forces | Free-surface flows, hydraulic jumps |
| Mach | Ma | Ma = v / c | Ratio of flow velocity to speed of sound | Compressible flows and shock waves |
| Weber | We | We = ρ v² L / γ | Ratio of inertial to surface tension forces | Fluid interfaces, atomization and bubbles |
| Strouhal | Sr | Sr = L f / v | Ratio of oscillation to convection times | Vortex shedding, pulsating flows |
| Prandtl | Pr | Pr = η / (ρ a) = ν / a | Ratio of momentum diffusivity to thermal diffusivity | Convective heat transfer, boundary layers |
| Nusselt | Nu | Nu = h L / k | Ratio of convective to conductive heat transfer | Film coefficients, convection on surfaces |
| Grashof | Gr | Gr = (L³ g β ΔT ρ²) / η² | Ratio of buoyancy to viscous forces | Natural or free convection |
| Rayleigh | Ra | Ra = Gr · Pr | Product of Grashof and Prandtl | Conduction-convection transition in cavities |
| Schmidt | Sc | Sc = η / (ρ D) | Ratio of momentum diffusivity to mass diffusivity | Convective mass transfer |
| Knudsen | Kn | Kn = λ / L | Ratio of molecular mean free path to length scale | Validity of continuum model, microfluidics |
| Peclet | Pe | Pe = Re · Pr = v L / a | Ratio of advective to diffusive heat transport | Heat exchangers, thermal dispersion |
| Lewis | Le | Le = a / D | Ratio of thermal to mass diffusivity | Drying, humidification, combustion |
| Fourier | Fo | Fo = a t / L² | Ratio of heat transmitted to heat stored | Transient conduction, characteristic times |

## Typical Prandtl number values for water and air
The values exhibit a notable dependence on temperature, so the local boundary layer value should be used for accurate calculations. In the table, temperatures are given in degrees Celsius and Fahrenheit, and the Prandtl number is dimensionless.

| Fluid | Temperature (°C / °F) | Prandtl number (Pr) |
|---|---|---|
| Air (dry) | 0 °C / 32 °F | 0,711 |
| Air (dry) | 20 °C / 68 °F | 0,707 |
| Air (dry) | 100 °C / 212 °F | 0,698 |
| Air (dry) | 200 °C / 392 °F | 0,684 |
| Water (liquid) | 5 °C / 41 °F | 11,2 |
| Water (liquid) | 20 °C / 68 °F | 7,01 |
| Water (liquid) | 60 °C / 140 °F | 2,99 |
| Water (liquid) | 100 °C / 212 °F | 1,75 |

## Selection criteria
The choice of the appropriate dimensionless number depends on the dominant phenomenon in the problem:

1. **Flow regime:** use the Reynolds number (Re) to predict the laminar/turbulent transition. In pipes, Re < 2 300 indicates laminar flow; in boundary layer over a flat plate, Re < 5×10⁵ remains laminar.
2. **Compressibility:** when the fluid velocity is significant relative to the speed of sound, use the Mach number (Ma). Incompressible flow is usually assumed for Ma < 0,3.
3. **Free surfaces or gravity effects:** the Froude number (Fr) is essential in flows with gas-liquid interface, such as open channels or weirs. Fr = 1 marks the transition between subcritical and supercritical flow.
4. **Heat and momentum transfer:** for forced convection, correlate the Nusselt number (Nu) with Reynolds and Prandtl (Re ↔ Pr). For natural convection, use the Grashof number (Gr) or Rayleigh number (Ra).
5. **Simultaneous mass transfer:** the Schmidt number (Sc) and Lewis number (Le) control the analogy between thermal and concentration boundary layers.
6. **Surface tension effects:** in jets, drops or bubbles, the Weber number (We) determines interface breakup. High values (>8‑10) tend to fragment the fluid.

## Frequently asked questions
### What is the critical Reynolds number in a smooth circular pipe?
The critical Reynolds number for the transition from laminar to turbulent flow in pipes is approximately 2 300. Below this value, the flow remains laminar unless strong external disturbances exist.

### What value of the Froude number distinguishes subcritical from supercritical flow?
The critical value of the Froude number separating subcritical flow (Fr < 1) and supercritical flow (Fr > 1) is exactly 1,0, the point at which the flow velocity equals the propagation speed of a gravitational wave on the surface.

### From what Mach number are compressibility effects considered?
It is accepted that compressibility effects become noticeable for Mach numbers above 0,3. Below this threshold, the density variation is less than 5 % and the flow can be treated as incompressible with reduced error.

### What is the Prandtl number of air at room temperature?
The Prandtl number of dry air at 20 °C / 68 °F and atmospheric pressure is 0,707, a value that hardly varies over the normal temperature range in HVAC and ventilation engineering.

### What is the typical critical Weber number for droplet breakup in a gas stream?
The critical Weber number for droplet breakup in gas flows is around 10 to 12, depending on flow geometry and local acceleration, although values above 8 already indicate severe deformation.

### What dimensionless number determines the flow pattern in a natural convection heat exchanger?
The Rayleigh number, product of the Grashof number times the Prandtl number (Ra = Gr·Pr), governs the transition from conduction to natural convection; Ra values greater than 1 708 predict the onset of convection cells in horizontal cavities.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/dimensionless-number-quantity-symbol-application-d_1982.html
- **efunda.com**: https://www.efunda.com/formulae/heat_transfer/convection/nondim_params.cfm
- **thermopedia.com**: https://www.thermopedia.com/navigation/1513/
