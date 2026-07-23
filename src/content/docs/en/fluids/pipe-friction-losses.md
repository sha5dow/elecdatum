---
title: "Pipe friction losses Darcy"
sidebar:
  label: "Pipe friction losses Darcy"
description: "Technical reference: Pipe friction losses Darcy"
keywords: ["Darcy Weisbach pipe friction losses", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "pipe-losses"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## General Description
Pipe friction losses, also known as major losses, represent the pressure drop experienced by a fluid flowing through a straight conduit due to viscous stresses on the walls. The Darcy‑Weisbach equation is the most accurate and universally accepted method for quantifying this loss in steady, incompressible, fully developed flow. The friction factor (λ) depends on the Reynolds number and the relative roughness of the pipe.

## Darcy‑Weisbach Equation
The friction pressure loss is calculated with:

Δp = λ · (L / Dₕ) · (ρ · v² / 2)

Where:
- Δp = major pressure loss, expressed in Pa or N/m² (psi or psf)
- λ = Darcy‑Weisbach friction factor (dimensionless)
- L = pipe length, in m or ft
- Dₕ = hydraulic diameter (for circular sections equal to the inner diameter), in m or ft
- ρ = fluid density, in kg/m³ or slugs/ft³
- v = mean flow velocity, in m/s or ft/s

To express the loss as a head loss, divide by the specific weight of water:

Δh = λ · (L / Dₕ) · (ρ / ρw) · (v² / (2g))

where ρw is the density of water (1000 kg/m³, 62.4 lb/ft³) and g is the acceleration of gravity (9.81 m/s², 32.2 ft/s²).

## Friction Factor (λ)
The dimensionless friction factor λ is determined as a function of the flow regime:

- **Laminar flow (Re < 2000):**  
  λ = 64 / Re
- **Turbulent flow (Re > 4000):**  
  The implicit Colebrook‑White equation is used:

  1 / √λ = –2 · log₁₀( (e/Dₕ) / 3.7 + 2.51 / (Re · √λ) )

  where e is the absolute wall roughness and e/Dₕ the relative roughness.
- **Transition zone (2000 < Re < 4000):**  
  The flow is unstable; it is recommended to use the turbulent correlation assuming the worst case.

For smooth pipes and Re between 5×10³ and 10⁵, the Blasius formula may be used: λ = 0.316 / Re⁰·²⁵. In the fully rough region (very high Re), λ depends only on the relative roughness.

## Absolute Roughness of Pipes
Absolute roughness (e) represents the mean height of the internal wall protrusions. The following table lists typical values for commercial materials.

| Material | Absolute roughness (e) |
| --- | --- |
| New drawn ferrous metal pipe | 0.01 mm / 0.00039 in |
| New steel pipe | 0.014 mm / 0.00055 in |
| Steel pipe after a few years of service | 0.2 mm / 0.0079 in |
| Old and rusted pipe | 1 – 3 mm / 0.039 – 0.118 in |
| New galvanized pipe | 0.5 mm / 0.020 in |
| New fiber cement pipe | 0.085 mm / 0.0033 in |

*Values compiled from Thermopedia.*

## Calculation of the Reynolds Number
The Reynolds number determines the flow regime and is obtained from:

Re = (ρ · v · Dₕ) / μ = (v · Dₕ) / ν

where μ is the dynamic viscosity (Pa·s or lb/(ft·s)) and ν the kinematic viscosity (m²/s or ft²/s).

| Regime | Reynolds Number | Friction Factor Behavior |
| --- | --- | --- |
| Laminar | Re ≤ 2000 | λ depends only on Re; independent of roughness |
| Transition | 2000 < Re < 4000 | Unstable flow, turbulent correlation recommended |
| Smooth turbulent | 4000 < Re < 10⁵ | λ function of Re, little influence of roughness |
| Transitional turbulent | Intermediate Re | λ depends on Re and e/Dₕ per Colebrook |
| Fully rough | Very high Re | λ function only of e/Dₕ |

## Design Criteria
When sizing piping systems with the Darcy‑Weisbach equation, the following criteria should be considered:

- **Dominant length:** when the pipe is long (L/D > 1000) friction losses dominate over minor losses; in short sections, local losses must be added.
- **Flow regime:** in water and low-viscosity fluid applications, turbulent flow is preferred to avoid sedimentation, but design velocities between 1 and 3 m/s (3.3 and 9.8 ft/s) are accepted.
- **Material selection:** roughness increases with aging; the value corresponding to the expected service life of the system must be used.
- **Temperature:** fluid density and viscosity vary with temperature, altering the Reynolds number and the head loss. It is recommended to evaluate under the most unfavorable operating conditions (worst case).
- **Economic diameter:** a larger diameter reduces pressure loss but increases material cost; optimization is based on minimizing the sum of pumping and pipe costs.
- **Safety factor:** due to the inherent uncertainty in the correlations (±10 %), it is advisable to oversize the pumping power by 10 to 15 %.

## Frequently Asked Questions
### What is the pressure loss per meter in a DN 50 steel pipe with water at 2 m/s?
In a smooth pipe of 0.05 m diameter, with water at 20 °C (ν≈1.0×10⁻⁶ m²/s, ρ=1000 kg/m³), Re = 100 000. Applying Blasius (λ≈0.0178) the pressure loss is approximately 712 Pa per linear meter (0.103 psi/ft).

### How does the head loss change if the flow rate is doubled?
If the flow rate is doubled, the velocity is doubled, so the pressure loss increases by a factor of 4 (Δp ∝ v²) if the friction factor remains constant. In practice λ may decrease slightly as Re increases, resulting in an increase close to 3.8 times in turbulent regime.

### What error is made when using the Blasius formula instead of Colebrook for rough pipes?
For a relative roughness e/D = 0.001 and Re = 10⁵, Blasius gives λ ≈ 0.0179 while Colebrook yields λ ≈ 0.0199, an error of approximately –10 % in head loss. The error grows as roughness or Reynolds number increases.

### When is it necessary to consider minor losses in addition to friction losses?
When the pipe length is less than 1000 diameters (L/D < 1000), losses in fittings, valves, and section changes can represent more than 10 % of the total loss and must be added to the major losses.

### What is the hydraulic diameter of a rectangular duct 0.3 m × 0.2 m?
The hydraulic diameter is calculated as Dₕ = 4A/P. For a rectangle of 0.3 m × 0.2 m, A = 0.06 m², P = 1.0 m, therefore Dₕ = 0.24 m (9.45 in). This value replaces the diameter in the Darcy‑Weisbach equation.

### How does water temperature affect friction loss?
When the temperature increases from 10 °C to 80 °C (50 °F to 176 °F), the kinematic viscosity of water decreases from 1.31 to 0.36×10⁻⁶ m²/s. With the same flow rate, the Reynolds number increases by a factor of ~3.6 and the friction factor decreases, which reduces the pressure loss by approximately 15‑25 % for smooth pipes.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/darcy-weisbach-equation-d_646.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/857/
