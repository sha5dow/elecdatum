---
title: "Bernoulli equation applied"
sidebar:
  label: "Bernoulli equation applied"
description: "Technical reference: Bernoulli equation applied"
keywords: ["Bernoulli equation fluid mechanics applications", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "bernoulli"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## Definition and principle

The Bernoulli equation expresses the principle of conservation of energy for a steady, inviscid, and incompressible flow. Along a streamline, the sum of pressure, kinetic, and potential energies per unit mass remains constant: in a horizontal pipe, an increase in velocity implies a decrease in pressure and vice versa. The Bernoulli principle is the basis of the theorem of the same name, which is a special form of the Euler equation derived along a streamline.

## Equations

Below are the most commonly used forms of the Bernoulli equation, including the energy loss terms.

**Energy form**  
For an incompressible flow in steady state:

E = p₁ / ρ + v₁² / 2 + g h₁ = p₂ / ρ + v₂² / 2 + g h₂ – E<sub>loss</sub>

where:  
- *E*: energy per unit mass (J/kg or Btu/slug)  
- *p*: fluid pressure (Pa or psf)  
- *ρ*: fluid density (kg/m³ or slug/ft³)  
- *v*: fluid velocity (m/s or ft/s)  
- *g*: acceleration due to gravity (9.81 m/s² or 32.2 ft/s²)  
- *h*: height with respect to a reference plane (m or ft)  
- *E<sub>loss</sub>*: energy loss per unit mass (J/kg or Btu/slug)  

**Head form**  
Dividing the above equation by *g* yields terms with length units:

h = p₁ / γ + v₁² / (2 g) + h₁ = p₂ / γ + v₂² / (2 g) + h₂ – E<sub>loss</sub> / g

where γ = ρ g is the specific weight of the fluid (N/m³ or lbf/ft³). This form is called "head" because all terms have dimensions of fluid column.

**Dynamic pressure**  
If the height variation is neglected (horizontal flow), the Bernoulli equation simplifies to:

p₁ + ½ ρ v₁² = p₂ + ½ ρ v₂² – p<sub>loss</sub>

The term ½ ρ v² is known as **dynamic pressure** and relates the velocity to the recoverable pressure at a stagnation point. The total pressure is the sum of static pressure and dynamic pressure.

## Dynamic pressure reference table

Values of dynamic pressure for water (ρ = 1000 kg/m³ / 1.940 slug/ft³ at 20 °C) as a function of velocity. Calculations are based on the expression p<sub>d</sub> = ½ ρ v².

| Velocity (m/s) | Velocity (ft/s) | Dynamic pressure (Pa) | Dynamic pressure (psi) |
|-----------------|------------------|------------------------|-------------------------|
| 1 m/s           | 3.28 ft/s        | 500 Pa / 0.0725 psi   | 0.50 kPa / 0.073 psi   |
| 2 m/s           | 6.56 ft/s        | 2 000 Pa / 0.290 psi  | 2.0 kPa / 0.29 psi     |
| 5 m/s           | 16.4 ft/s        | 12 500 Pa / 1.81 psi  | 12.5 kPa / 1.81 psi    |
| 10 m/s          | 32.8 ft/s        | 50 000 Pa / 7.25 psi  | 50.0 kPa / 7.25 psi    |
| 15 m/s          | 49.2 ft/s        | 112 500 Pa / 16.3 psi | 112.5 kPa / 16.3 psi   |
| 20 m/s          | 65.6 ft/s        | 200 000 Pa / 29.0 psi | 200 kPa / 29.0 psi     |
| 25 m/s          | 82.0 ft/s        | 312 500 Pa / 45.3 psi | 312.5 kPa / 45.3 psi   |
| 30 m/s          | 98.4 ft/s        | 450 000 Pa / 65.3 psi | 450 kPa / 65.3 psi     |

*Note: 1 psi = 6894.76 Pa = 144 psf. Imperial conversions use ρ = 1.940 slug/ft³.*

## Typical applications

The Bernoulli equation, with its adaptations, allows solving numerous practical problems:

- **Discharge from an open tank (Torricelli's Theorem):** If the surface area of the tank is much larger than the discharge orifice area and the external pressure equals the internal pressure (vented tank), the exit velocity is v₂ = √(2 g h), where *h* is the height difference between the free surface and the center of the orifice. For a head of 10 m, v₂ = 14.0 m/s.
- **Discharge from a pressurized tank:** When the tank pressure (p₁) is different from the external pressure (p₂), the exit velocity is calculated with:  

v₂ = c · √{ (2 / [1 – (A₂/A₁)²]) · [ (p₁ – p₂) / ρ + g h ] }  

where *c* is the discharge coefficient of the orifice.
- **Flow meters:** The Venturi tube and the orifice plate use the pressure drop across a restriction to determine the flow rate, applying Bernoulli along with the continuity equation.
- **Pitot tube:** Measures the total pressure at the stagnation point (v = 0). The difference between total and static pressure gives the dynamic pressure, from which the flow velocity is obtained.
- **Pressure reducing valves:** The energy loss through a valve can be modeled as E<sub>loss</sub> = (p₁ – p₂) / ρ, neglecting changes in velocity and height.

## Discharge coefficients

To account for real losses, the theoretical velocity obtained from the Bernoulli equation is multiplied by a *discharge coefficient* (c), determined experimentally.

| Orifice geometry      | Discharge coefficient (c) |
|-----------------------------|-----------------------------|
| Sharp-edged orifice      | 0.60 – 0.64                |
| Rounded-edged orifice| 0.72 – 0.80                |
| Short and smooth orifice       | 0.80 – 0.85                |
| Smooth discharge nozzle    | 0.95 – 1.00                |

## Limitations of the equation

The simple form of the Bernoulli equation is subject to the following restrictions:

1. **Steady** (time-independent) and **inviscid** (negligible shear stress effects) flow.
2. **Incompressible** fluid; in gases only valid for low Mach numbers (Ma < 0.3).
3. Must be applied along the **same streamline**; if the flow is irrotational, the Bernoulli constant is the same for all streamlines.
4. Does not consider head losses due to friction, valves, or sudden changes in cross-section; to include these effects, the loss term ΔE or p<sub>loss</sub> is added.
5. Not suitable for flows with recirculation, intense turbulence, or significant heat exchange (non-adiabatic processes).

## Calculation example

**Problem:** A pressurized tank contains water (ρ = 1000 kg/m³) at a gauge pressure p₁ = 0.2 MPa. The external pressure is p₂ = 0.1 MPa. The discharge orifice is 10 m below the free surface. The area ratio is A₂/A₁ = 0.01. Assuming a discharge coefficient c = 1.0 (smooth orifice), determine the exit velocity.

**Solution:**  
We apply the equation for pressurized tank:

v₂ = √{ (2 / [1 – (A₂/A₁)²]) · [ (p₁ – p₂) / ρ + g h ] }

Substituting:  
A₂/A₁ = 0.01  → (A₂/A₁)² = 0.0001  → 1 – (A₂/A₁)² ≈ 0.9999  
p₁ – p₂ = 0.2×10⁶ – 0.1×10⁶ = 0.1×10⁶ Pa  
g = 9.81 m/s², h = 10 m  

v₂ = √{ (2 / 0.9999) [ (0.1×10⁶ Pa) / (1000 kg/m³) + (9.81 m/s²)(10 m) ] }  
v₂ = √{ 2.0002 [ 100 + 98.1 ] } ≈ √{ 2.0002 × 198.1 } ≈ √{ 396.2 } ≈ **19.9 m/s**

The exit velocity is 19.9 m/s (65.3 ft/s). If the height contribution had been neglected (h ≈ 0), the velocity would be 14.1 m/s, demonstrating the importance of considering all energy contributions.

## Frequently asked questions

**1. What is the exit velocity of water in an open tank with a height of 10 m relative to the orifice?**  
The theoretical velocity is 14.0 m/s (45.9 ft/s) according to Torricelli's theorem, assuming ideal flow without losses.

**2. What dynamic pressure does a water flow at 5 m/s generate?**  
A water flow at 5 m/s (16.4 ft/s) develops a dynamic pressure of 12,500 Pa (12.5 kPa / 1.81 psi).

**3. What pressure difference between the tank and the outside is needed to obtain 20 m/s exit velocity without height influence?**  
Solving from v = √(2 Δp / ρ), Δp = ½ ρ v² = 0.5 × 1000 × 400 = 200,000 Pa = 200 kPa (29.0 psi).

**4. What is the typical discharge coefficient for a sharp-edged orifice?**  
The discharge coefficient for a sharp-edged orifice varies between 0.60 and 0.64, so the actual velocity will be approximately 60% of the ideal velocity.

**5. In what units is the head form of the Bernoulli equation measured?**  
The terms in the head form have units of length (m or ft) and represent the height of the fluid column in circulation.

**6. Up to what air velocity can the flow be considered incompressible when applying Bernoulli?**  
For air under normal conditions, the incompressible approximation is acceptable up to velocities of approximately 100 m/s (328 ft/s), which corresponds to a Mach number close to 0.3.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bernouilli-equation-d_183.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/bernoulli.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/579/

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bernouilli-equation-d_183.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/bernoulli.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/579/
