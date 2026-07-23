---
title: "Failure theories mechanical engineering"
sidebar:
  label: "Failure theories mechanical engineering"
description: "Technical reference: Failure theories mechanical engineering"
keywords: ["failure theories Von Mises Tresca Mohr", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "failure-theories"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Overview
The failure theories in mechanical engineering predict the moment when a solid material stops supporting load, either by yielding (ductile) or fracture (brittle). In the field of solid mechanics, these theories define mathematical criteria that relate the stress state to the material's strength properties, establishing a failure surface in the stress space. The selection of the appropriate criterion depends on the nature of the material—ductile or brittle—and the type of loading. The most used models in mechanical engineering are the maximum shear stress criterion (Tresca) and the distortion energy criterion (Von Mises) for ductile materials, while for brittle materials the maximum principal stress criterion (Rankine) and Mohr-Coulomb predominate. The same material can behave ductile or brittle depending on temperature, loading rate, or triaxial stress state; therefore, the choice of criterion must be based on the expected response under actual service conditions.

## Failure criteria for ductile materials
Ductile materials, such as carbon steels, aluminum, and many metal alloys, predominantly fail by yielding, that is, by excessive plastic deformation. The criteria presented below define the transition from elastic to plastic behavior and are formulated as a function of the uniaxial yield strength *σ<sub>y</sub>*.

### Maximum shear stress criterion (Tresca)
The Tresca criterion, also known as the Guest criterion, postulates that yielding begins when the maximum shear stress at a point reaches the shear yield stress in a simple tension test. The latter is equal to *σ<sub>y</sub> / 2*. Mathematically, for a general stress state with principal stresses *σ<sub>1</sub> ≥ σ<sub>2</sub> ≥ σ<sub>3</sub>*, the yield condition is written:

*τ<sub>max</sub> = (σ<sub>1</sub> – σ<sub>3</sub>) / 2 = σ<sub>y</sub> / 2*

In the case of plane stress (*σ<sub>3</sub> = 0*), the yield envelope in the *σ<sub>1</sub> – σ<sub>2</sub>* plane forms a regular hexagon centered at the origin. This criterion is inherently conservative for ductile materials and its application is straightforward in the design of components under torsion or combinations of bending and torsion.

**Table 1** Shear yield strength according to Tresca for common metals.

| Material | Yield strength (σ<sub>y</sub>) | Shear yield stress (τ<sub>y</sub> = σ<sub>y</sub>/2) |
| --- | --- | --- |
| Structural steel S235 | 235 MPa / 34.1 ksi | 117,5 MPa / 17.0 ksi |
| Alloy steel 4140 quenched and tempered | 655 MPa / 95.0 ksi | 327,5 MPa / 47.5 ksi |
| Aluminum 6061-T6 | 275 MPa / 39.9 ksi | 137,5 MPa / 19.9 ksi |
| Titanium Ti-6Al-4V (annealed) | 880 MPa / 127.6 ksi | 440 MPa / 63.8 ksi |

### Maximum distortion energy criterion (Von Mises)
The Von Mises criterion (or Maxwell-Huber-Hencky-Von Mises) establishes that yielding occurs when the distortion energy per unit volume equals the distortion energy corresponding to yielding in a uniaxial tension test. Alternatively, it can be interpreted as a criterion based on the octahedral shear stress or the second invariant of the deviatoric stress tensor, *J<sub>2</sub>*. The yield function is commonly expressed by the **Von Mises equivalent stress**, σ<sub>v</sub>:

σ<sub>v</sub> = √( ½[(σ<sub>1</sub> – σ<sub>2</sub>)² + (σ<sub>2</sub> – σ<sub>3</sub>)² + (σ<sub>3</sub> – σ<sub>1</sub>)²] )

In terms of the stress tensor components:

σ<sub>v</sub> = √( ½[(σ<sub>x</sub> – σ<sub>y</sub>)² + (σ<sub>y</sub> – σ<sub>z</sub>)² + (σ<sub>z</sub> – σ<sub>x</sub>)² + 6(τ<sub>xy</sub>² + τ<sub>yz</sub>² + τ<sub>zx</sub>²)] )

Yielding is predicted when σ<sub>v</sub> ≥ σ<sub>y</sub>. For a plane stress state, the equation defines an ellipse in principal stress space, which encloses the Tresca hexagon. The criterion is independent of the hydrostatic component of stress, making it appropriate for metals where yielding is pressure-insensitive. In direct comparison, the Von Mises equivalent stress for a pure shear state (e.g., torsion) is √3 times the maximum shear stress, while Tresca limits it to half the yield strength; that is, Von Mises allows shear stresses 15.5% higher than the Tresca prediction.

**Table 2** Comparison of shear yield strength according to Tresca and Von Mises.

| Criterion | Shear yield stress (relative to σ<sub>y</sub>) | Example for σ<sub>y</sub> = 250 MPa / 36.3 ksi |
| --- | --- | --- |
| Tresca | τ<sub>y</sub> = σ<sub>y</sub> / 2 = 0,500 σ<sub>y</sub> | 125 MPa / 18.1 ksi |
| Von Mises | τ<sub>y</sub> = σ<sub>y</sub> / √3 ≈ 0,577 σ<sub>y</sub> | 144 MPa / 20.9 ksi |

## Failure criteria for brittle materials
Brittle materials (gray cast iron, ceramics, glasses, concrete) undergo little plastic deformation before fracture and their compressive strength is much higher than tensile strength. The criteria described below incorporate this asymmetry and are generally based on the limiting normal stress.

### Maximum principal stress criterion (Rankine)
The Rankine criterion, or maximum normal stress criterion, states that failure occurs when the maximum tensile principal stress, σ<sub>1</sub>, reaches the tensile strength *σ<sub>t</sub>*, or when the minimum principal stress (maximum compression), σ<sub>3</sub>, exceeds in absolute value the compressive strength *σ<sub>c</sub>*. In its simplest form:

σ<sub>1</sub> ≤ σ<sub>t</sub> ; |σ<sub>3</sub>| ≤ σ<sub>c</sub>

This criterion does not consider the interaction between stresses and is valid when fracture is governed exclusively by normal stresses. It is especially used in glass and technical ceramics.

### Mohr-Coulomb criterion
The Mohr-Coulomb criterion is an extension of the internal friction model, widely used in geomechanics, gray cast iron, and concrete. Failure occurs when the shear stress on a plane exceeds the cohesion *c* plus the internal friction proportional to the normal compressive stress on that plane. The failure envelope is expressed as:

τ = c + σ<sub>n</sub> tan φ

where *φ* is the internal friction angle and σ<sub>n</sub> is the normal stress (positive in compression). In terms of principal stresses (σ<sub>1</sub> ≥ σ<sub>2</sub> ≥ σ<sub>3</sub>), the failure condition is written:

σ<sub>1</sub> (1 – sin φ) – σ<sub>3</sub> (1 + sin φ) = 2c cos φ

When φ = 0°, the criterion reduces to Tresca (with *c = τ<sub>y</sub>*). Mohr-Coulomb adequately captures the higher compressive strength compared to tensile strength. For a material with cohesion *c* = 5 MPa / 725 psi and friction angle φ = 30°, the uniaxial tensile strength is approximately *σ<sub>t</sub>* = 2c cos φ / (1+ sin φ) = 5,77 MPa / 837 psi, while the compressive strength is *σ<sub>c</sub>* = 2c cos φ / (1– sin φ) = 17,3 MPa / 2510 psi.

**Table 3** Typical Mohr-Coulomb parameters for engineering materials.

| Material | Cohesion (c) | Internal friction angle (φ) | Tensile strength (σ<sub>t</sub>) |
| --- | --- | --- | --- |
| Gray cast iron | 60 MPa / 8,70 ksi | 30° | 35 MPa / 5,08 ksi |
| Plain concrete | 3,5 MPa / 508 psi | 37° | 2,6 MPa / 377 psi |
| Hard clay soil | 50 kPa / 7,25 psi | 25° | 32 kPa / 4,64 psi |

## Comparison of failure criteria
The following table summarizes the fundamental criteria, the type of material for which they are applicable, and the control variable that defines failure.

| Criterion | Material | Limit variable | Basic formula | Observation |
| --- | --- | --- | --- | --- |
| Tresca | Ductile | Maximum shear stress | (σ<sub>1</sub> – σ<sub>3</sub>) / 2 ≤ τ<sub>y</sub> | More conservative than Von Mises; hexagonal yield surface |
| Von Mises | Ductile | Distortion energy or J<sub>2</sub> | σ<sub>v</sub> ≤ σ<sub>y</sub> | Cylindrical yield surface; better experimental fit for metals |
| Rankine (maximum stress) | Brittle | Tensile principal stress | σ<sub>1</sub> ≤ σ<sub>t</sub> | No interaction considered; suitable for glasses and ceramics |
| Mohr-Coulomb | Brittle / frictional | Shear and normal stress | τ = c + σ<sub>n</sub> tan φ | Captures tension-compression asymmetry; widely used in rocks and concrete |

## Practical application example
**Steel shaft subjected to combined bending and torsion.**  
A solid steel shaft AISI 1045 (yield strength σ<sub>y</sub> = 310 MPa / 45,0 ksi) must transmit power that induces a bending moment *M* = 120 N·m / 1062 lbf·in and a torque *T* = 90 N·m / 797 lbf·in. The proposed initial diameter is *d* = 25 mm / 0,984 in.

**Step 1 – Nominal stresses.**  
For a circular cross section:  
Normal stress due to bending: σ<sub>x</sub> = 32M / (πd³) = 32 × 120e3 N·mm / (π × 25³ mm³) ≈ 78,2 MPa / 11,34 ksi.  
Shear stress due to torsion: τ<sub>xy</sub> = 16T / (πd³) = 16 × 90e3 N·mm / (π × 25³) ≈ 29,3 MPa / 4,25 ksi.

**Step 2 – Calculation of von Mises equivalent stress (plane stress, σ<sub>y</sub>=0, σ<sub>z</sub>=0).**  
σ<sub>v</sub> = √(σ<sub>x</sub>² + 3τ<sub>xy</sub>²) = √(78,2² + 3 × 29,3²) ≈ 94,6 MPa / 13,72 ksi.

**Step 3 – Verification.**  
Safety factor: FS = σ<sub>y</sub> / σ<sub>v</sub> = 310 / 94,6 ≈ 3,28.  
With the Tresca criterion, τ<sub>max</sub> = √[(σ<sub>x</sub>/2)² + τ<sub>xy</sub>²] = √(39,1² + 29,3²) ≈ 48,9 MPa / 7,09 ksi, and the allowable shear stress is τ<sub>y</sub> = σ<sub>y</sub>/2 = 155 MPa / 22,5 ksi, giving FS = 155 / 48,9 ≈ 3,17. Both criteria indicate that the diameter of 25 mm / 0,984 in is more than sufficient; it could be reduced to optimize material while respecting the minimum design FS (typically 1.5 to 2.5 depending on the application).

## Frequently Asked Questions

### What is the numerical difference between the yield stress according to Tresca and Von Mises for a pure shear state?
For a pure shear state (torsion), the shear yield stress according to Tresca is 0,500 of the yield strength, while Von Mises predicts a value of 0,577, that is, 15.5% higher. For example, with a steel of σ<sub>y</sub> = 400 MPa / 58,0 ksi, yielding is expected at τ = 200 MPa / 29,0 ksi with Tresca and at 231 MPa / 33,5 ksi with Von Mises.

### What value of Von Mises equivalent stress is considered safe for an aluminum 7075-T6 with σ<sub>y</sub> = 500 MPa / 72,5 ksi?
Keeping a safety factor of 1,5, the allowable Von Mises stress should not exceed 500 / 1,5 ≈ 333 MPa / 48,3 ksi. In practice, for aeronautical components, safety factors between 1,25 and 2,0 are often used.

### Why does the Mohr-Coulomb criterion predict a compressive strength greater than tensile strength for concrete?
Because it incorporates the internal friction angle; for φ = 37° and c = 3,5 MPa / 508 psi, the uniaxial tensile strength is only 2,6 MPa / 377 psi, while the compressive strength reaches 17,3 MPa / 2510 psi. This asymmetry of approximately 6.6 times is typical of plain concrete.

### What is the minimum cohesion required in a soil joint to support a shear stress of 80 kPa / 11,6 psi with a normal compressive stress of 120 kPa / 17,4 psi and φ = 28°?
Applying τ = c + σ<sub>n</sub> tan φ, solving c = τ – σ<sub>n</sub> tan φ = 80 – 120 × tan(28°) ≈ 80 – 120 × 0,5317 = 80 – 63,8 = 16,2 kPa / 2,35 psi.

### Under what circumstances can a ductile material like steel fail in a brittle manner and what criterion is applied?
At low temperatures or under triaxial states of high hydrostatic stress, steel can exhibit brittle fracture with negligible plastic deformation. In such cases, a maximum principal stress criterion (Rankine) should be used. The ductile-brittle transition temperature varies, but for an unalloyed carbon steel it can be around -20 °C / -4 °F; when the service temperature is lower, the safety factor is increased and σ<sub>1</sub> is limited to a value below 0,3 of the minimum tensile strength.

### How much larger is the safety factor obtained with Von Mises compared to Tresca for the same non-proportional stress state?
The difference is not constant: in pure shear, the FS with Von Mises is 1,155 times that of Tresca; in equibiaxial tension (σ<sub>1</sub>=σ<sub>2</sub>=σ, σ<sub>3</sub>=0), both criteria coincide because τ<sub>max</sub>=σ/2 and σ<sub>v</sub>=σ, so the same FS is obtained when comparing with σ<sub>y</sub>. Therefore, the advantage of Von Mises is maximum in states with shear dominance.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/material_science/von_mises.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria_ductile.cfm
