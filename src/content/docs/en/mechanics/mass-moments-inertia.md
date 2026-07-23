---
title: "Mass and moments of inertia"
sidebar:
  label: "Mass and moments of inertia"
description: "Technical reference: Mass and moments of inertia"
keywords: ["mass moment of inertia cylinder sphere", "mechanics"]
category: "mechanics"
topic: "dynamics"
subcategory: "mass-moments"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

The mass moment of inertia, denoted by I, measures the resistance a body offers to rotational acceleration about a given axis. It is the rotational analog of mass in linear motion. Its units are mass × length² (kg·m² in SI, lb·ft² or slug·ft² in the English system). It should not be confused with the second moment of area, which has units of length⁴ and is used in beam bending calculations.

## General formula

For a system of point particles, the total moment of inertia about an axis is the sum of the products of each mass by the square of its distance to the axis:

I = Σ mᵢ rᵢ²

Where:
- mᵢ = mass of particle i (kg, lbm)
- rᵢ = perpendicular distance of particle i from the axis of rotation (m, ft)

For continuous bodies with symmetric mass distribution and constant density, the expression becomes a volume integral, obtaining closed formulas that are presented in the following table.

## Table of moments of inertia for common shapes

| Geometric shape | Axis of rotation | Moment of inertia (I) | Notes |
|---|---|---|---|
| Point mass M at distance R from axis | Perpendicular to the line connecting mass and axis | I = M R² | Fundamental case; all other shapes derive from this principle |
| Thin rod of length L and mass M | Perpendicular to the rod, through the center | I_center = (1/12) M L² | Infinitely thin and rigid rod |
| Thin rod of length L and mass M | Perpendicular to the rod, through one end | I_end = (1/3) M L² | Special case of the previous rod applying the parallel axis theorem |
| Thin circular hoop of radius R and mass M | Perpendicular to the plane of the hoop, through the center | I_z = M R² | All mass concentrated at the same distance R from the axis |
| Thin circular hoop of radius R and mass M | Any diameter in the plane of the hoop | I_x = I_y = (1/2) M R² | Consequence of the perpendicular axis theorem |
| Thin solid disk of radius R and mass M | Perpendicular to the plane of the disk, through the center | I_z = (1/2) M R² | Special case of the solid cylinder with height h = 0 |
| Thin solid disk of radius R and mass M | Any diameter in the plane of the disk | I_x = I_y = (1/4) M R² | It satisfies I_x = I_y = I_z / 2 |
| Uniform ring (disk with concentric hole) of mass M, inner radius R₁ and outer radius R₂ | Perpendicular to the plane, through the center | I_z = (1/2) M (R₁² + R₂²) | Reduces to the solid disk when R₁ = 0 and to the thin hoop when R₁ ≈ R₂ |
| Thin-walled hollow cylinder of radius R and mass M | Longitudinal axis of the cylinder | I = M R² | All mass is considered at the same distance R from the axis |
| Hollow cylinder (shaft) of mass M, inner radius Rᵢ and outer radius Rₒ | Longitudinal axis of the cylinder | I = (1/2) M (Rᵢ² + Rₒ²) | General formula for tubular sections; coincides with the ring when height is negligible |
| Solid cylinder of radius R and mass M | Longitudinal axis of the cylinder | I = (1/2) M R² | Particular case of the hollow cylinder with Rᵢ = 0 |
| Thin-walled hollow sphere of radius R and mass M | Any diameter through the center | I = (2/3) M R² | The mass is uniformly distributed over the spherical surface |
| Solid sphere of radius R and mass M | Any diameter through the center | I = (2/5) M R² | Fundamental formula for solid spherical bodies |
| Rectangular plate of mass M, sides a and b | Perpendicular to the plane of the plate, through the center of mass | I_z = M (a² + b²) / 12 | The axis is perpendicular to the plate; for axes in the plane, other expressions are required |
| Rectangular plate of mass M, side a perpendicular to the axis | Axis in the plane of the plate, coinciding with an edge of length a | I = (1/3) M a² | The dimension parallel to the axis does not contribute to the moment of inertia |

Linear dimensions are expressed in meters (m) or feet (ft) and masses in kilograms (kg) or pounds mass (lbm), according to the chosen unit system. The result I is obtained in kg·m² or lb·ft² respectively.

## Parallel axis theorem

If the moment of inertia I_CM of a body about an axis through its center of mass is known, the moment of inertia I about any other parallel axis separated by a distance d is calculated as:

I = I_CM + M d²

Where:
- M = total mass of the body (kg, lbm)
- d = perpendicular distance between the two parallel axes (m, ft)

This theorem allows quickly calculating moments of inertia for axes displaced from the center of mass without needing to reintegrate. For example, a thin rod of length L has I_CM = (1/12) M L² with respect to its center; if the moment about one end is desired, with d = L/2, we obtain I = (1/12) M L² + M (L/2)² = (1/3) M L², matching the tabulated value.

## Perpendicular axis theorem

For a flat plate of arbitrary mass distribution in the xy plane, the moments of inertia about three mutually perpendicular axes intersecting at a point O, with x and y axes in the plane of the plate and z axis perpendicular to it, satisfy:

I_z = I_x + I_y

This theorem is only valid for strictly flat objects (negligible thickness) and does not apply to general three-dimensional bodies. It allows deducing the moment of inertia about the axis perpendicular to the plane if the moments about two perpendicular diameters in the plane are known. For example, for a thin disk, I_x = I_y = (1/4) M R², so I_z = (1/2) M R².

## Radius of gyration

The radius of gyration k is defined as the distance at which all the mass of the body would have to be concentrated to obtain the same moment of inertia:

k = √(I / M)

Where:
- I = moment of inertia about the considered axis (kg·m², lb·ft²)
- M = total mass (kg, lbm)
- k = radius of gyration (m, ft)

The radii of gyration for the most common shapes are summarized in the following table:

| Geometric shape | Axis of rotation | Radius of gyration (k) |
|---|---|---|
| Thin rod of length L | Perpendicular through the center | k = L / √12 ≈ 0,2887 L |
| Thin rod of length L | Perpendicular through one end | k = L / √3 ≈ 0,5774 L |
| Thin circular hoop of radius R | Perpendicular through the center (z axis) | k = R |
| Solid disk of radius R | Perpendicular through the center (z axis) | k = R / √2 ≈ 0,7071 R |
| Solid cylinder of radius R | Longitudinal axis | k = R / √2 ≈ 0,7071 R |
| Hollow cylinder with radii Rᵢ and Rₒ | Longitudinal axis | k = √[(Rᵢ² + Rₒ²) / 2] |
| Thin hollow sphere of radius R | Any diameter | k = R √(2/3) ≈ 0,8165 R |
| Solid sphere of radius R | Any diameter | k = R √(2/5) ≈ 0,6325 R |
| Rectangular plate of sides a, b | Perpendicular through the center | k = √[(a² + b²) / 12] |

The lengths of k are expressed in the same units as the characteristic dimensions (R, L, a, b), typically meters (m) or feet (ft).

## Practical application example

A flywheel of a mechanical press is manufactured as a solid steel cylinder with mass M = 150 kg / 330,7 lbm and radius R = 0,4 m / 1,31 ft. The moment of inertia about its longitudinal axis and the torque required to accelerate it from rest to an angular velocity of 300 rpm in 5 seconds are to be calculated.

**Step 1: Calculation of the moment of inertia**

For a solid cylinder about its longitudinal axis:

I = (1/2) M R² = (1/2) × 150 kg × (0,4 m)² = 0,5 × 150 × 0,16 = 12 kg·m²

In imperial units: I = (1/2) × 330,7 lbm × (1,31 ft)² ≈ 283,8 lb·ft²

**Step 2: Calculation of the required angular acceleration**

Final angular velocity: ω = 300 rpm = 300 × 2π / 60 = 31,42 rad/s

Angular acceleration: α = Δω / Δt = 31,42 rad/s / 5 s = 6,28 rad/s²

**Step 3: Required torque (Newton's second law for rotation)**

τ = I × α = 12 kg·m² × 6,28 rad/s² = 75,4 N·m

In imperial units: τ ≈ 283,8 lb·ft² × 6,28 rad/s² ≈ 55,6 lb·ft

The motor must supply a net torque of 75,4 N·m to achieve the desired acceleration. If there are additionally friction losses in the bearings estimated at 5 N·m, the total required torque would be 80,4 N·m / 59,3 lb·ft. The motor selection shall consider this value plus a suitable service factor for the application.

## Frequently asked questions (FAQ)

**What is the difference between mass moment of inertia and second moment of area?**

The mass moment of inertia measures resistance to rotational acceleration and depends on the mass of the body, with units mass × length² (kg·m² or lb·ft²). The second moment of area is a purely geometric property of the cross section of a beam, with units length⁴ (mm⁴ or in⁴), and is used in bending and deflection calculations. For example, a steel cylinder of 50 kg and 2 m length can have a mass moment of inertia of 1,2 kg·m² / 0,88 lb·ft² about its longitudinal axis, while the second moment of area of its circular cross section of 100 mm / 3,94 in diameter is approximately 4,91 × 10⁶ mm⁴ / 11,8 in⁴. They should not be confused or interchanged in calculations.

**How is the parallel axis theorem applied in a real case?**

If the moment of inertia of an electric motor about its center of mass is known, a typical value of 0,05 kg·m² / 0,037 lb·ft² for a small motor of 10 kg / 22 lb, and it is mounted on a base at 0,3 m / 11,8 in from the pivot axis, the total moment of inertia about the pivot will be I = 0,05 + 10 × (0,3)² = 0,05 + 0,9 = 0,95 kg·m² / 0,70 lb·ft². The term M d² usually dominates when the distance is large compared to the dimensions of the body, as in this case where the displacement of 300 mm / 11,8 in contributes 0,9 kg·m² versus the original 0,05 kg·m².

**Which geometric shape provides the greatest moment of inertia for a given mass and radius?**

For a fixed mass M and outer radius R, the thin hoop (or thin-walled hollow cylinder) provides the greatest possible moment of inertia: I = M R². At the other extreme, the solid sphere concentrates more mass near the axis and gives the lowest value among common shapes: I = (2/5) M R² = 0,4 M R². The ratio between them is 2,5 times. For an automobile flywheel with mass 8 kg / 17,6 lb and radius 0,15 m / 5,9 in, the values would be 0,18 kg·m² / 0,13 lb·ft² for a hoop and 0,072 kg·m² / 0,053 lb·ft² for a solid sphere of the same outer radius.

**How does mass distribution influence the radius of gyration of a hollow cylinder?**

The radius of gyration of a hollow cylinder with radii Rᵢ and Rₒ is k = √[(Rᵢ² + Rₒ²) / 2]. For a solid cylinder (Rᵢ = 0), k = Rₒ / √2 ≈ 0,707 Rₒ. For a thin-walled tube (Rᵢ ≈ Rₒ), k ≈ Rₒ. For example, a steel tube with Rₒ = 50 mm / 1,97 in and Rᵢ = 40 mm / 1,57 in has k = √[(40² + 50²) / 2] = √[(1600 + 2500)/2] = √2050 ≈ 45,3 mm / 1,78 in, which represents 90,6 % of the outer radius. This demonstrates how moving mass to the periphery increases the radius of gyration and therefore the rotational inertia for the same total mass.

**What torque is needed to stop a flywheel in a given time?**

The braking torque is calculated with τ = I × α, where α = Δω / Δt. A flywheel with I = 20 kg·m² / 14,75 lb·ft² rotating at 1500 rpm (157,1 rad/s) that must stop in 3 seconds requires a deceleration of α = 157,1 / 3 = 52,37 rad/s². The braking torque will be τ = 20 × 52,37 = 1047,4 N·m / 772,6 lb·ft. If the braking system acts at an effective radius of 0,25 m / 9,84 in, the tangential force required at the brake disc will be F = τ / r = 1047,4 / 0,25 ≈ 4189 N / 941,7 lbf. This level of force must be sustained by the brake components and dissipated as heat in the system.

**Is it correct to sum moments of inertia of different components of a system?**

Yes, provided all moments of inertia are referenced to the same axis of rotation. The moment of inertia is an additive property. For example, a rotor system composed of a steel shaft (I₁ = 0,002 kg·m² / 0,0015 lb·ft²), a disk (I₂ = 0,15 kg·m² / 0,11 lb·ft²), and a coupling (I₃ = 0,008 kg·m² / 0,0059 lb·ft²) will have a total moment of inertia of 0,16 kg·m² / 0,118 lb·ft² about the common axis. If any component does not share the same axis, its moment of inertia must be transferred using the parallel axis theorem before summing.

## Sources Consulted

- **engineersedge.com**: https://www.engineersedge.com/mechanics_machines/mass_moment_of_inertia_equations_13091.htm
- **efunda.com**: https://www.efunda.com/math/solids/solids_display.cfm?SolidName=Sphere
