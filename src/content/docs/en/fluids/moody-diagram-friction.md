---
title: "Moody diagram friction factor"
sidebar:
  label: "Moody diagram friction factor"
description: "Technical reference: Moody diagram friction factor"
keywords: ["Moody diagram Darcy Weisbach friction factor Reynolds", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "moody-diagram"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

The Moody diagram is a dimensionless graphical representation that relates the Darcy-Weisbach friction factor (f_D), the Reynolds number (Re), and the relative roughness (ε/D) for fully developed flow in a circular pipe. Published in 1944 by Lewis Ferry Moody, this diagram allows predicting the pressure drop or flow rate in piping systems and is a fundamental tool in applied fluid mechanics. The Darcy-Weisbach friction factor (λ or f) is used in the fundamental head loss equation to calculate friction losses in closed conduits.

## Principle of operation

The diagram is constructed from the force balance in a pipe, where the wall shear stress (τ_w) balances the pressure drop. The one-dimensional force balance equation states that Δp · S = τ_w · A, where S is the cross-sectional area and A is the pipe surface area. The friction factor is defined as a dimensionless relationship between the wall shear stress and the fluid kinetic energy, expressed as f = 2τ_w / (ρV²).

The Moody diagram correlates experimental data from approximately 10,000 tests and presents them on a single logarithmic plot. The dimensionless variables governing the phenomenon are the Reynolds number (Re = ρVD/μ) and the relative roughness (ε/D), where ε is the mean height of the interior wall asperities and D is the pipe diameter.

There are two definitions of the friction factor: the one based on the SI system (Darcy-Weisbach factor f_D) and the imperial one (Fanning factor f_F). The Darcy-Weisbach factor is four times greater than the Fanning factor (f_D = 4f_F). The head loss equation using the Darcy-Weisbach factor is expressed as h_f = f_D · (L/D) · (V²/(2g)), where L is the pipe length, V is the mean fluid velocity, and g is the acceleration due to gravity.

## Formulations and equations

| Equation | Expression | Application conditions |
|---|---|---|
| Darcy-Weisbach (head loss) | h_f = f_D · (L/D) · (V² / 2g) | Fully developed flow in circular pipes |
| Direct pressure drop | Δp = f_D · (ρV²/2) · (L/D) | Valid for any flow regime |
| Poiseuille (laminar) | f_D = 64 / Re | Re < 2100, independent of roughness |
| Blasius (smooth turbulent) | f_D = 0.3164 / Re^(0.25) | 3000 < Re < 100,000, smooth pipes |
| Colebrook-White (transition) | 1/√f_D = -2.0·log₁₀[(ε/D)/3.7 + 2.51/(Re·√f_D)] | Re > 4000, any roughness (implicit equation) |
| Karman-Nikuradse (smooth) | 1/√f_F = 2.0·log₁₀(Re·√f_F) - 0.8 | Smooth pipes, turbulent regime |
| Fully rough | 1/√f_F = 2.0·log₁₀(3.7/(ε/D)) | Fully rough regime, independent of Re |

The Colebrook-White equation is implicit in f_D and requires iteration (Newton-Raphson method) to solve. It converges to the Karman-Nikuradse equation for smooth pipes when ε → 0, and to the fully rough regime when Re → ∞. For transition flow (2100 < Re < 4000), the friction factor cannot be determined with certainty and is generally interpolated between the laminar and turbulent values.

## Affecting factors

| Factor | Effect on friction factor | Influence range |
|---|---|---|
| Reynolds number (Re) | Determines the flow regime. In laminar, f_D ∝ 1/Re. In turbulent, f_D decreases with Re until it stabilizes | Re < 2100 laminar; 2100–4000 transition; Re > 4000 turbulent |
| Relative roughness (ε/D) | No effect in laminar flow. In turbulent, the larger ε/D, the larger f_D for the same Re | Dimensionless, typical values from 10⁻⁶ to 10⁻² |
| Absolute roughness (ε) | Depends on material and manufacturing method. Commercial pipes have non-uniform roughness patterns | Varies from 0.0015 mm (drawn tubing) to > 0.26 mm (cast iron) |
| Roughness regime (u*ε/ν) | Defines three zones: hydraulically smooth (0–5), transition (5–70), and fully rough (>70) | Dimensionless (u* = friction velocity, ν = kinematic viscosity) |
| Pipe diameter (D) | Affects relative roughness. For same ε, larger D → smaller ε/D → smaller f_D | Indirectly influences through ε/D and Re |
| Fluid velocity (V) | Influences Re and flow regime. Higher V gives higher Re and potential transition to turbulent | Directly proportional to Re |
| Fluid density (ρ) and viscosity (μ) | Define flow properties. Higher μ reduces Re; higher ρ increases Re | Vary with fluid temperature and pressure |

## Absolute roughness of commercial pipes

| Material | Absolute roughness ε |
|---|---|
| Glass | 0.0015 mm / 0.000059 in |
| Drawn tubing | 0.0015 mm / 0.000059 in |
| Commercial steel or wrought iron | 0.046 mm / 0.0018 in |
| Asphalted cast iron | 0.12 mm / 0.0047 in |
| Galvanized iron | 0.15 mm / 0.0059 in |
| Cast iron | 0.26 mm / 0.0102 in |
| PVC (typical roughness) | 0.0015 mm / 0.000059 in |

## Criteria for selecting the friction factor

The procedure for selecting the friction factor using the Moody diagram follows a sequence determined by the flow regime. First, the Reynolds number (Re = ρVD/μ) is calculated and the regime is determined: if Re < 2100, the flow is laminar and f_D = 64/Re regardless of roughness; if Re > 4000, the flow is turbulent and the relative roughness (ε/D) is required to enter the diagram; if 2100 < Re < 4000, the flow is in the transition zone and the friction factor is uncertain, with interpolation recommended.

For the turbulent regime, the relative roughness ε/D is calculated using the absolute roughness values from the previous table and the pipe diameter. With Re and ε/D, enter the Moody diagram: locate Re on the horizontal axis (abscissa), ascend vertically until intersecting the corresponding ε/D curve, and read f_D on the left vertical axis. Alternatively, the Colebrook-White equation can be used to obtain greater numerical accuracy.

For commercial pipes in the transition zone, the Colebrook-White equation provides values that differ from those obtained with artificial sand roughness (Nikuradse), since commercial roughness patterns are not uniform. It is estimated that pressure drops calculated using this method have an uncertainty of at least 10%, due to the scatter of the underlying experimental data.

In systems with non-Newtonian fluids or multiphase flow, the standard Moody diagram is not directly applicable and specific correlations are required. For non-circular pipes, the hydraulic diameter D_h = 4A/P is used, where A is the cross-sectional area and P is the wetted perimeter, maintaining the same formulation. The accuracy of the original graphical method is sufficient for most engineering applications, with typical f_D values between 0.008 and 0.08.

## FAQ

**What is the formula for the friction factor for laminar flow?**
The Darcy-Weisbach friction factor (f_D) for laminar flow is calculated analytically as f_D = 64/Re, valid for Reynolds numbers (Re) below 2100. This expression, derived from the Hagen-Poiseuille equation, is independent of pipe roughness and yields values ranging from 0.03 (Re ≈ 2100) to 0.064 (Re = 1000).

**How is the friction factor determined in the transition zone (2100 < Re < 4000)?**
In the transition zone (2100 < Re < 4000), the flow alternates between laminar and turbulent characteristics, and the friction factor cannot be determined precisely. The common practice is to linearly interpolate between the laminar value at Re = 2100 (f_D = 64/2100 ≈ 0.0305) and the turbulent value at Re = 4000, calculated with the Colebrook-White equation for the corresponding relative roughness.

**What is the difference between the Darcy-Weisbach friction factor and the Fanning factor?**
The Darcy-Weisbach friction factor (f_D) is exactly four times greater than the Fanning factor (f_F): f_D = 4 · f_F. The Darcy-Weisbach factor (also called λ) is used in the head loss equation h_f = f_D·(L/D)·(V²/2g), while the Fanning factor (f_F) appears in the definition of shear stress τ_w = f_F·(ρV²/2). It is essential to identify which one is being used when reading values from the diagram, as confusion introduces a factor of 4 error.

**For what value of relative roughness can a pipe be considered smooth?**
A pipe is considered hydraulically smooth when the dimensionless roughness parameter u*ε/ν is between 0 and 5, where u* = √(τ_w/ρ) is the friction velocity and ν is the kinematic viscosity. In practical terms, for Re = 10⁵, this corresponds approximately to ε/D < 0.000001; for Re = 10⁶, ε/D < 0.00001. Under these conditions, the asperities are submerged within the viscous sublayer and do not affect the friction factor.

**What uncertainty do pressure drops calculated with the Moody diagram have?**
Pressure drops calculated using the Moody diagram have an uncertainty of at least 10%, attributable to the scatter of the experimental data supporting the curves and to the differences between uniform artificial roughness (Nikuradse sand) and the irregular roughness patterns in commercial pipes. For critical applications, experimental verification or the use of appropriate safety factors is recommended.

**How is the friction factor calculated without using the graph?**
The friction factor can be calculated numerically without using the graph through the Colebrook-White equation: 1/√f_D = -2.0·log₁₀[(ε/D)/3.7 + 2.51/(Re·√f_D)]. Because it is implicit, it requires iteration; the Newton-Raphson method is the most commonly used and typically converges in 3 to 5 iterations. There are also explicit approximations such as the Swamee-Jain equation, valid for 10⁻⁶ < ε/D < 10⁻² and 5000 < Re < 10⁸: f_D = 0.25 / [log₁₀((ε/D)/3.7 + 5.74/Re^0.9)]².

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/moody-diagram-d_618.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/789/
