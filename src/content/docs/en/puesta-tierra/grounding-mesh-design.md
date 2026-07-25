---
title: "Grounding mesh design"
sidebar:
  label: "Grounding mesh design"
description: "Technical reference: Grounding mesh design"
keywords: ["grounding mesh design calculation substation", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-systems"
subcategory: "grounding-mesh-design"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

In the design of grounding systems for substations, the grounding mesh is a network of buried conductors that ensures the safety of people and equipment during electrical faults. Its objective is to limit step, touch, and mesh voltages to safe values, dissipating the fault current into the ground with the lowest possible potential rise. A proper design requires knowledge of soil resistivity, maximum fault current, and mesh geometry, following standardized methodologies such as IEEE Std 80.

When a ground fault occurs in a substation, the current injected into the ground flows through the buried mesh and disperses radially into the soil. The non-zero resistance of the soil produces a ground potential rise (GPR) relative to a remote point, following Ohm's law: the mesh voltage equals the product of the fault current and the mesh impedance. The mesh distributes the current over a large area, reducing current density, total impedance, and therefore hazardous potential gradients on the surface.

## Design Parameters

The design of a grounding mesh starts from the maximum ground fault current and soil resistivity to determine the conductor cross-section, burial depth, and grid geometry.

| Parameter | Description | Typical value or range |
| --- | --- | --- |
| Maximum ground fault current (I_f) | Current flowing through the mesh during the largest magnitude fault | 1 kA to 63 kA (depending on voltage level and system) |
| Soil resistivity (ρ) | Property opposing the flow of current; varies with moisture, compaction, and temperature | 10 Ω·m to 3000 Ω·m; typical design value 100 Ω·m |
| Minimum conductor cross-section (A) | Determined by the thermal capacity for fault current and its duration | 50 mm² to 300 mm² / 0.08 in² to 0.47 in² (copper); larger for steel |
| Burial depth (h) | Distance from the surface to the mesh conductors | 0.6 m to 1.0 m / 24 in to 39 in; minimum 600 mm / 24 in |
| Grid spacing (D) | Separation between parallel conductors in the mesh | 1 m to 15 m / 3.3 ft to 49 ft, depending on voltage level and resistivity |
| Maximum ground potential rise (GPR) | Voltage of the mesh relative to remote earth during fault | Generally limited by allowed touch and step voltages |
| Mesh voltage (E_mesh) | Maximum potential difference between a point on the mesh and the ground within the grid | Typically designed not to exceed 100 V to 600 V, per standard and protection |
| Step voltage (E_step) | Potential difference that may appear between the feet of a person 1 m apart | Typical limit 100 V to 300 V for sustained faults |
| Touch voltage (E_touch) | Potential difference between the hand and feet of a person touching an object connected to the mesh | Limit similar to E_step, with correction factors for surface resistance |

## Calculation Formula

The ground potential rise (GPR) is estimated by applying Ohm's law to the entire mesh.

> **V_mesh = I_f × Z_mesh**

| Variable | Definition | Unit |
| --- | --- | --- |
| V_mesh | Voltage of the mesh relative to remote earth (GPR) | V |
| I_f | Ground fault current flowing through the mesh | A |
| Z_mesh | Total impedance of the grounding mesh | Ω |

For large meshes in homogeneous soils, the mesh resistance is approximated using the Laurent and Niemann formula, and the grounding resistance of a rectangular mesh with vertical electrodes can be calculated as:

> **R_mesh = (ρ / 4r) + (ρ / L_total)**

| Variable | Definition | Unit |
| --- | --- | --- |
| R_mesh | Mesh resistance | Ω |
| ρ | Soil resistivity | Ω·m |
| r | Equivalent radius of the area covered by the mesh (r = √(Area/π)) | m |
| L_total | Total length of buried conductors (horizontal + vertical) | m |

## Factors Affecting Design

The behavior of the grounding mesh depends on geological, construction, and operational factors.

| Factor | Effect on the mesh |
| --- | --- |
| Soil resistivity (ρ) | High-resistivity soil (e.g., dry sand > 1000 Ω·m) raises the mesh impedance, increasing GPR and touch/step voltages. Low-resistivity soils (< 100 Ω·m) favor dissipation. |
| Soil moisture and temperature | Resistivity decreases with increasing moisture; freezing of the surface soil can drastically increase resistance in upper layers. |
| Fault current and duration | Higher currents and clearing times require larger conductor cross-sections to withstand adiabatic heating (I²t). |
| Mesh geometry | Grids with smaller spacing (reduced D) uniform the surface potential, reducing mesh and step voltages, at the cost of more conductor. |
| High-resistivity surface layer | A layer of crushed gravel (10–15 cm / 4–6 in, ρ ≈ 3000 Ω·m) adds series resistance with the human body, reducing effective touch and step voltages. |
| Vertical electrodes (ground rods) | Improve connection to deeper, lower-resistivity layers, reducing total mesh resistance and controlling GPR. |
| Connections and corrosion | Poor welds or corrosion of steel conductors increase local resistance, creating hot spots and hazardous gradients during a fault. |

## Applications

Grounding meshes are primarily installed in high- and medium-voltage substations, but also in generation plants, wind farms, and any facility with sensitive equipment or risk of high-energy faults. In substations, transformer neutrals, switchgear enclosures, disconnectors, current and voltage transformers, metal structures, shield down conductors, and all equipment that may become energized are connected to the mesh. According to documented practices in specialized sources, each piece of equipment must have at least two connections to the mesh from orthogonal directions (x and y) to ensure redundancy and low impedance. Additionally, disconnect switch mechanism boxes are connected to a local auxiliary mesh before joining the main mesh.

## Advantages and Limitations

| Advantage | Limitation |
| --- | --- |
| Distributes fault current over a large area, reducing GPR compared to single rod systems. | Requires more conductor and civil works than isolated vertical electrodes, increasing initial cost. |
| Uniforms surface potential within the substation, minimizing mesh, step, and contact voltages. | In very high resistivity soils (> 2000 Ω·m) may not achieve safe resistance values without extensive soil replacement or treatment. |
| Provides multiple low-impedance paths for equipment, improving reliability and surge protection. | Fixed geometry makes later adaptations difficult if the substation is expanded or fault levels change. |
| Allows combining horizontal conductors with vertical rods to access deep conductive layers. | Requires a detailed soil resistivity study (multi-layer model); simplifications can lead to unsafe designs. |
| By incorporating a gravel surface layer, increases intrinsic safety against touch and step voltages without modifying the buried mesh. | Galvanic corrosion between copper and buried steel requires protection or compatible materials, increasing maintenance complexity. |

## Frequently Asked Questions (FAQ)

### What is the difference between mesh voltage, step voltage, and touch voltage?
Mesh voltage is the maximum potential difference between a conductor of the mesh and the ground within the grid. Step voltage is the difference that appears between the feet of a person 1 m apart, and touch voltage is the difference between a metallic object connected to the mesh and the ground at the person's location. All three are limited to safe values to prevent electrocution.

### Why is gravel placed on the surface of a substation?
Crushed gravel — typically a layer 10 cm to 15 cm / 4 in to 6 in with resistivity around 3000 Ω·m — acts as an additional resistance in series with the human body, reducing the currents that would flow through it during a fault. This raises the safe step and touch voltage thresholds without modifying the buried mesh.

### How does soil resistivity affect the size of the mesh?
The higher the soil resistivity, the higher the mesh impedance and the greater the ground potential rise (GPR). To keep touch and step voltages within safe limits, it is necessary to increase the conductor density (smaller spacing D) or install deep vertical electrodes. In extremely resistive soils, it may be necessary to chemically treat the soil or enlarge the mesh area.

### Is a single connection per equipment to the mesh sufficient?
No. Recommended practices indicate that each metal structure and each piece of equipment must be connected by at least two risers coming from orthogonal directions (x and y conductors of the mesh). This ensures redundancy, reduces connection impedance, and prevents a single joint failure from leaving the equipment without effective grounding.

### What minimum cross-section should the mesh conductor have?
It depends on the fault current and its duration. It is calculated using the thermal capacity of the material (I²t). For copper, typical cross-sections in medium and high voltage substations range from 50 mm² / 0.08 in² to 300 mm² / 0.47 in². Steel conductors require larger cross-sections due to their lower conductivity and greater susceptibility to corrosion.

### What is the minimum burial depth of the mesh?
The usual minimum depth is 600 mm / 24 in below ground level. If conductors cross under cable trenches, pipes, or roadways, at least 300 mm / 12 in clearance below those structures must be maintained. This depth facilitates access during construction and reduces the risk of mechanical damage.

## References
- **electrical4u.com**: https://www.electrical4u.com/earthing-of-substation-equipment/
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/multigroundedutilityneutral.pdf
