---
title: "Moment of inertia cross sections"
sidebar:
  label: "Moment of inertia cross sections"
description: "Technical reference: Moment of inertia cross sections"
keywords: ["moment of inertia rectangle circle I-beam", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "moment-of-inertia"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Definition

The area moment of inertia of a rectangular cross section 150 mm × 300 mm (5.91 in × 11.81 in) about the horizontal axis passing through its centroid is 337.5 × 10⁶ mm⁴ (811 in⁴). Also known as the second moment of area, the area moment of inertia is a geometric property that quantifies the resistance of a cross section to bending and deflection. Its value depends solely on the shape and dimensions of the section, and it is fundamental in the design of beams, columns, and structural elements subjected to transverse loads. The unit in the metric system is mm⁴ (or m⁴) and in the imperial system in⁴. A high value of I indicates a stiffer section in bending.

## Properties of typical sections

A solid circular section with a diameter of 50 mm (1.97 in) has a moment of inertia Ix = 0.3068 × 10⁶ mm⁴ (0.738 in⁴). Below are the area moment of inertia formulas for the most commonly used cross sections in engineering, along with a numerical example in metric and imperial units.

| Section | Dimensions (mm / in) | Ix (mm⁴ / in⁴) | Iy (mm⁴ / in⁴) |
| --- | --- | --- | --- |
| Solid square (side a) | 100 / 3.94 | 8.33 × 10⁶ / 20.0 | 8.33 × 10⁶ / 20.0 |
| Solid rectangle (b × h) | b=80 / 3.15<br>h=160 / 6.30 | 27.3 × 10⁶ / 65.6 | 6.83 × 10⁶ / 16.4 |
| Solid circle (diameter d) | 80 / 3.15 | 2.01 × 10⁶ / 4.83 | 2.01 × 10⁶ / 4.83 |
| Circular tube (dₒ × dᵢ) | dₒ=100 / 3.94<br>dᵢ=80 / 3.15 | 2.90 × 10⁶ / 6.97 | 2.90 × 10⁶ / 6.97 |
| Symmetric I-section (b × H, web t) | b=100 / 3.94<br>H=200 / 7.87<br>t=10 / 0.394 | 41.2 × 10⁶ / 99.0 | 6.58 × 10⁶ / 15.8 |

The general formulas for each section are:

- Solid square of side a: Ix = Iy = a⁴ / 12  
- Solid rectangle (width b, height h): Ix = b h³ / 12 ; Iy = b³ h / 12  
- Solid circle (diameter d): Ix = Iy = π d⁴ / 64  
- Circular tube (outer diameter dₒ, inner diameter dᵢ): Ix = Iy = π (dₒ⁴ − dᵢ⁴) / 64  
- Symmetric I-section (flange width b, total height H, web thickness t):  
  Ix = [b H³ − (b − t) (H − 2t)³] / 12 ; Iy ≈ (2t b³ + (H − 2t) t³) / 12

For composite or non-symmetric sections, the moment of inertia is obtained by applying the parallel axis theorem (Steiner) and decomposing the geometry into elementary shapes.

## Design criteria

A simply supported beam with a span of 3 m (118 in) supporting a central point load of 10 kN (2248 lb) requires a minimum moment of inertia Ix = 1.98 × 10⁶ mm⁴ (4.76 in⁴) to limit the maximum deflection to L/360 according to serviceability criteria. In the design of elements subjected to bending, the moment of inertia of the cross section governs stiffness and lateral-torsional buckling resistance. The larger I is with respect to the bending axis, the smaller the normal stresses (σ = M y / I) and deflection (δ ∝ 1 / I). The designer should look for sections that concentrate material away from the neutral axis, such as I-sections or rectangular tubes, which offer an optimal stiffness-to-weight ratio. It is good practice to always verify the value of I for both the strong axis and the weak axis, since lateral stability can be decisive in slender beams. The elastic section modulus S = I / c complements the moment of inertia in strength verification, and the radius of gyration r = √(I / A) is key for compression design.

## Practical applications

An IPE 200 profile of S235 steel has a moment of inertia Ix = 19.4 × 10⁶ mm⁴ (46.6 in⁴). In practice, the moment of inertia is used to commercially select the appropriate profile from manufacturer catalogs. For example, when designing a floor beam with a span of 5 m (197 in) and a uniformly distributed load of 8 kN/m (548 lb/ft), the designer first calculates the required inertia to satisfy the serviceability limit state (deflection ≤ L/300). With the required inertia (≈ 61 × 10⁶ mm⁴ / 147 in⁴), an IPE 270 profile or similar is chosen. In steel structures, castellated or plate girders are also used, where the moment of inertia formulas of elementary sections allow optimizing the geometry. In shaft design, the polar moment of inertia (J) is used to calculate the angle of twist, while in reinforced concrete elements the cracked section is transformed to obtain an effective value of I that allows estimating deflections accurately.

## Frequently asked questions (FAQ)

**What is the area moment of inertia?**  
The area moment of inertia of a circular section with a diameter of 50 mm (1.97 in) is I = 0.307 × 10⁶ mm⁴ (0.738 in⁴). It is a geometric property that measures the distribution of a section's area about an axis and determines its resistance to bending and deflection.

**How is I calculated for a rectangular section?**  
For a rectangle of 150 mm × 300 mm (5.91 in × 11.81 in), Ix = (150 mm · 300³ mm³) / 12 = 337.5 × 10⁶ mm⁴ (811 in⁴). The formula Ix = b h³ / 12 is used, where b is the width and h is the height parallel to the bending axis.

**How are moment of inertia units converted?**  
1 in⁴ is exactly equal to 416 231 mm⁴; therefore, a value of I = 5 × 10⁶ mm⁴ corresponds to 12.0 in⁴. Simply multiply or divide by this factor to convert between systems.

**What is the difference between Ix and Iy?**  
In a rectangle of 200 mm × 100 mm (7.87 in × 3.94 in), if the 100 mm base is horizontal, Ix = 16.67 × 10⁶ mm⁴ (40.0 in⁴) and Iy = 66.67 × 10⁶ mm⁴ (160.2 in⁴). Ix and Iy are the moments of inertia about the centroidal axes; the larger one corresponds to the strong axis (greater stiffness).

**How does the moment of inertia influence deflection?**  
A beam with I = 10 × 10⁶ mm⁴ (24.0 in⁴) deflects twice as much as an identical one with I = 20 × 10⁶ mm⁴ (48.0 in⁴) under the same load, since deflection is inversely proportional to I.

**What is the section modulus and how is it related to the moment of inertia?**  
The elastic section modulus of a rectangle 200 mm high and 100 mm wide is S = 666.7 × 10³ mm³ (40.7 in³). It is obtained as S = I / c, where c is the distance from the neutral axis to the extreme fiber, and determines the maximum bending stress (σ = M / S).

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/area-moment-inertia-d_1328.html
- **engineersedge.com**: https://www.engineersedge.com/calculators/section_square_case_6.htm
- **efunda.com**: https://www.efunda.com/designstandards/beams/RectangularSBeam.cfm
