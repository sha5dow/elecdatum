---
title: "Casting process selection guide"
sidebar:
  label: "Casting process selection guide"
description: "Technical reference: Casting process selection guide"
keywords: ["casting process selection guide comparison volume", "manufacturing"]
category: "manufacturing"
topic: "casting"
subcategory: "selection-guide"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

Casting is a manufacturing process in which molten metal is poured or injected into a mold that contains a cavity with the desired geometry, allowing the production of parts with complex shapes that would be difficult or uneconomical to manufacture by other methods. The proper selection of the process depends on production volume, required material, necessary dimensional accuracy, and expected mechanical properties. This guide presents the critical parameters to compare the main casting processes and facilitate technical decision-making.

## Materials

The selection of material is decisive for choosing the casting process, since each technique has specific metallurgical limitations. Melting temperature, fluidity, reactivity with the mold, and shrinkage tendency define the material-process compatibility.

| Process | Applicable metallic materials |
|---|---|
| Sand casting | Gray iron, ductile iron, carbon steels, stainless steels, aluminum alloys, bronze, brass, magnesium alloys |
| Investment casting (lost wax) | Stainless steels, carbon steels, nickel and cobalt base superalloys, titanium, aluminum alloys, bronze, brass |
| Permanent mold casting (gravity die casting) | Aluminum alloys, magnesium alloys, copper alloys (bronze, brass), gray iron |
| Die casting (high pressure) | Aluminum alloys (AA 380, AA 384, AA 390), zinc alloys (Zamak), magnesium alloys, copper alloys |
| Centrifugal casting | Gray iron, ductile iron, steels, stainless steels, copper alloys, aluminum alloys |

Aluminum alloys dominate die casting and permanent mold casting due to their excellent fluidity when alloyed with silicon (8.5–17%), while zinc allows faster cycles due to its low melting temperature of approximately 425 °C / 800 °F. Ferrous alloys, with melting temperatures above 1450 °C / 2642 °F, require processes such as sand or investment casting that can withstand higher thermal demand.

## Tolerances and finishes

Dimensional accuracy and surface quality vary significantly between processes and determine the amount of subsequent machining required. Die casting achieves the most demanding standards in mass production, while sand casting requires larger machining allowances.

| Process | Typical dimensional tolerance | Surface roughness Ra |
|---|---|---|
| Sand casting (green) | ±1.5 mm / ±0.06 in (up to 150 mm / 6 in); ±0.5 mm / ±0.02 in for each additional 25 mm / 1 in | 5–25 µm / 200–1000 µin |
| Sand casting (chemical resin) | ±0.5 mm / ±0.02 in (up to 150 mm / 6 in); ±0.3 mm / ±0.012 in for each additional 25 mm / 1 in | 3.2–12.5 µm / 126–500 µin |
| Investment casting | ±0.1 mm / ±0.004 in (up to 25 mm / 1 in); ±0.075 mm / ±0.003 in for each additional 25 mm / 1 in | 1.6–3.2 µm / 63–126 µin |
| Permanent mold casting | ±0.4 mm / ±0.016 in (up to 25 mm / 1 in); ±0.25 mm / ±0.01 in for each additional 25 mm / 1 in | 2.5–6.3 µm / 100–250 µin |
| Die casting | ±0.1 mm / ±0.004 in (up to 25 mm / 1 in); ±0.05 mm / ±0.002 in for each additional 25 mm / 1 in; accuracy up to 0.2% of part dimension | 0.8–3.2 µm / 32–126 µin |

Die casting can achieve accuracies of up to 0.2% of the nominal dimension, in many cases allowing the complete elimination of subsequent machining. Tolerances depend directly on mold rigidity: metal molds (die casting, permanent mold) offer higher precision than bonded sand molds.

## Operating parameters by material

Each process imposes geometric and operational constraints that must be evaluated during the design stage. Parameters such as minimum wall thickness, draft angle, and maximum feasible mass define the technical feasibility of a geometry.

| Process | Minimum wall thickness | Minimum draft angle | Typical maximum part mass |
|---|---|---|---|
| Sand casting (green) | 3–5 mm / 0.12–0.20 in (ferrous); 2.5–4 mm / 0.10–0.16 in (non-ferrous) | 1–3° (external surfaces); 2–5° (internal) | No practical limit for green sand; 2300–2700 kg / 5100–6000 lb (dry sand) |
| Investment casting | 0.5–1 mm / 0.02–0.04 in | 0° (external surfaces with adequate design); 0.5–1° (internal) | 50 kg / 110 lb (typical); up to 250 kg / 550 lb (special) |
| Permanent mold casting | 3–4 mm / 0.12–0.16 in (aluminum); 4–5 mm / 0.16–0.20 in (iron) | 2–3° (external surfaces); 3–5° (internal) | 25 kg / 55 lb (aluminum); 50 kg / 110 lb (iron) |
| Die casting | 0.6 mm / 0.025 in (zinc); 0.9 mm / 0.035 in (aluminum); 1.25 mm / 0.050 in (brass) | 0.25–0.75° (per side, depending on material) | 35 kg / 77 lb (zinc); 20 kg / 55 lb (magnesium) |
| Centrifugal casting | 5–8 mm / 0.20–0.32 in (small diameters); 10–20 mm / 0.40–0.80 in (large diameters) | 0–1° (in mandrel extraction direction) | Up to 5000 kg / 11000 lb (large diameter tubes) |

In die casting, zinc allows the thinnest walls (0.6 mm / 0.025 in) thanks to its high fluidity at 425 °C / 800 °F and the hot chamber process that accelerates filling. Aluminum alloys with high silicon content, such as AA 390 with 17% Si, improve wear resistance but increase melt viscosity, requiring wall thicknesses greater than 0.9 mm / 0.035 in.

## Advantages and limitations

Objective comparison of each process allows identification of the optimal technology for each application based on economic, geometric, and mechanical performance criteria.

### Sand casting

| Advantages | Limitations |
|---|---|
| Capacity for parts of any size, from 0.075 kg / 0.17 lb to tens of tons | Rough surface finish, typically Ra 5–25 µm / 200–1000 µin |
| Low tooling and mold cost, suitable for small batches (1–20 pieces/hour-mold) | Wide dimensional tolerances, requires machining allowances |
| Compatibility with almost all alloys, including steels and cast irons | Limited production speed due to manual mold preparation |
| Flexibility for design modifications with low cost impact | Inferior mechanical properties compared to forged parts due to coarser solidification structure |
| Sand recyclability over multiple cycles | Reduced control over microstructure and internal porosity |

### Investment casting (lost wax)

| Advantages | Limitations |
|---|---|
| Excellent surface finish Ra 1.6–3.2 µm / 63–126 µin and dimensional accuracy ±0.1 mm / ±0.004 in | High cost of the ceramic process, especially for large parts |
| Capacity for extremely complex geometries with undercuts and internal cavities | Long lead time (days to weeks per batch) due to multiple stages |
| Compatibility with superalloys and high-temperature steels not processable by other methods | Mass limitation, typically up to 50 kg / 110 lb |
| Minimum draft angles, even 0° on external faces | Higher unit cost compared to sand for medium batches |
| Virtual elimination of parting lines and flash | Requires rigorous ceramic process control to avoid inclusions |

### Permanent mold casting (gravity die casting)

| Advantages | Limitations |
|---|---|
| Superior mechanical properties due to rapid solidification in metal mold | Restricted to non-ferrous metals with low-medium melting point |
| Improved surface finish Ra 2.5–6.3 µm / 100–250 µin compared to sand | High cost of steel or cast iron molds, requires medium-large series |
| Tighter dimensional tolerances than sand, ±0.4 mm / ±0.016 in | Limited geometries due to need for metal core removal |
| Higher productivity than sand, suitable for medium series | Not suitable for high-temperature ferrous alloys (except gray iron with special molds) |
| Lower gas porosity than die casting | Controlled cooling cycles to avoid thermal shock to the mold |

### Die casting (high pressure)

| Advantages | Limitations |
|---|---|
| Maximum dimensional accuracy, up to 0.2% of nominal dimension | Very high initial investment in hardened steel dies |
| Extremely fast cycles, ideal for mass production | Limited to non-ferrous alloys: aluminum, zinc, magnesium, copper |
| Thin walls possible: 0.6 mm / 0.025 in zinc, 0.9 mm / 0.035 in aluminum | Gas porosity, especially in parts of large thickness or size |
| Excellent surface quality Ra 0.8–3.2 µm / 32–126 µin, often without subsequent machining | Maximum mass limited: 35 kg / 77 lb (zinc), 20 kg / 55 lb (magnesium) |
| High mechanical strength due to solidification under pressure of 10–210 MPa / 1450–30500 psi | Not suitable for steels or ferrous alloys due to reaction with die steel |

### Centrifugal casting

| Advantages | Limitations |
|---|---|
| Dense, porosity-free structure due to centrifugal force effect | Limited to axisymmetric geometries (tubes, liners, rings, bushings) |
| Superior metallurgical purity: impurities and gases concentrate on the inner diameter (machinable) | Cost of specialized equipment with controlled rotation |
| Capacity for large parts, up to 5000 kg / 11000 lb | Inner diameter with wide tolerances, requires subsequent boring |
| Compatibility with ferrous and non-ferrous alloys | Minimum wall thickness limited by fluidity and solidification time |
| Elimination of cores and risers, better material utilization | Critical rotation speeds to avoid segregation or solidification defects |

## Comparative tables of parameters by process

The following tables integrate the key parameters of each process to facilitate direct comparison during preliminary selection.

| Process | Relative tooling cost | Unit cost (short run) | Unit cost (long run) | Initial lead time |
|---|---|---|---|---|
| Sand (green) | Low | Medium | High (compared to automated processes) | Days to 1 week |
| Investment | Medium-high | High | Medium-high | 2–6 weeks |
| Permanent mold | High | High | Medium | 4–12 weeks |
| Die (high pressure) | Very high | Very high | Low | 8–16 weeks |
| Centrifugal | Medium | Medium | Medium-low | 2–6 weeks |

| Process | Part mass range | Minimum wall thickness | Surface roughness Ra | Dimensional tolerance (up to 25 mm) |
|---|---|---|---|---|
| Sand (green) | 0.075 kg / 0.17 lb – 2700 kg / 6000 lb | 3–5 mm / 0.12–0.20 in | 5–25 µm / 200–1000 µin | ±1.5 mm / ±0.06 in |
| Investment | 0.01 kg / 0.02 lb – 50 kg / 110 lb | 0.5 mm / 0.02 in | 1.6–3.2 µm / 63–126 µin | ±0.1 mm / ±0.004 in |
| Permanent mold | 0.5 kg / 1.1 lb – 50 kg / 110 lb | 3–4 mm / 0.12–0.16 in | 2.5–6.3 µm / 100–250 µin | ±0.4 mm / ±0.016 in |
| Die (high pressure) | 0.01 kg / 0.02 lb – 35 kg / 77 lb | 0.6 mm / 0.025 in (Zn) | 0.8–3.2 µm / 32–126 µin | ±0.1 mm / ±0.004 in |
| Centrifugal | 1 kg / 2.2 lb – 5000 kg / 11000 lb | 5 mm / 0.20 in | 3.2–12.5 µm / 126–500 µin | ±1.0 mm / ±0.04 in |

## Selection guide

The final selection of the casting process responds to a combination of factors: production volume, required material, part geometry, required tolerances, mechanical properties, and available budget. The decision criteria for typical engineering scenarios are presented below.

| Selection criterion | Recommended process | Technical justification |
|---|---|---|
| Mass production (>50000 parts/year), aluminum or zinc alloy, high precision and thin walls | Die casting | High productivity with fast hot chamber (zinc) or cold chamber (aluminum) cycles; accuracy of 0.2% of dimension; wall thicknesses from 0.6 mm / 0.025 in |
| Single part or short runs (<50 pieces), ferrous alloy, large size (>100 kg / 220 lb) | Sand casting | Low mold cost; no practical size limit for green sand; compatible with steels and cast irons |
| High geometric complexity with internal cavities, superalloys or stainless steels, medium runs (100–5000 pieces/year) | Investment casting | Capability for geometries impossible by other methods; zero draft angles; tolerances ±0.1 mm / ±0.004 in; suitable for superalloys |
| Medium runs (1000–20000 pieces/year), aluminum or magnesium alloy, high mechanical requirements | Permanent mold casting | Controlled solidification that improves mechanical properties; lower initial investment than die casting; finish Ra 2.5–6.3 µm / 100–250 µin |
| Tubular or cylindrical parts of ferrous alloy, high metallurgical integrity, diameters 50–1500 mm / 2–60 in | Centrifugal casting | Dense, porosity-free structure due to centrifugal force; elimination of cores; capacity up to 5000 kg / 11000 lb |
| Functional prototypes or very short runs (<20 pieces), any alloy, design validation prior to production | Sand casting (rapid molding with 3D printed cores) | Lead time of days; low cost without tooling investment; flexibility for design iterations |
| Aluminum parts with wear resistance and low porosity requirements, medium-large runs | Die casting (AA 390 alloy with 17% Si) or permanent mold with subsequent heat treatment | AA 390 offers high wear resistance for engine components; permanent mold allows T6 heat treatment to optimize hardness |

For intermediate volumes (500–5000 pieces/year) where die tooling cost is prohibitive, permanent mold casting with sand cores for internal cavities offers an optimal compromise between initial investment, productivity, and quality. In applications with leak-tightness or fatigue requirements, centrifugal casting or investment casting minimize the microporosity that affects fatigue strength.

## Frequently asked questions

**What is the most accurate casting process for series production?**
Die casting achieves accuracies of up to 0.2% of nominal dimension and surface roughness Ra 0.8–3.2 µm / 32–126 µin, allowing tolerances of ±0.1 mm / ±0.004 in for aluminum and zinc parts in mass production.

**Which process allows casting steel parts with complex geometries and tight tolerances?**
Investment casting (lost wax) processes stainless steels and superalloys with tolerances of ±0.1 mm / ±0.004 in and wall thicknesses from 0.5 mm / 0.02 in, reaching typical masses of up to 50 kg / 110 lb per part.

**What is the relative tooling cost between sand casting and die casting?**
Sand casting has the lowest tooling cost among all casting processes, while die casting has the highest investment due to hardened steel dies that require between 8 and 16 weeks of initial manufacturing.

**Which aluminum alloys are most common in die casting and why?**
AA 380 alloy (8.5% Si, 3.5% Cu) is the most widely used for its excellent fluidity and tensile strength of 324 MPa / 47 ksi; AA 390 (17% Si) is used in engine blocks for its high wear resistance; and AA 360 (low copper content, <0.6%) offers corrosion resistance for marine applications.

**What is the maximum mass that can be die cast?**
Die casting is limited to 35 kg / 77 lb for zinc alloys and 20 kg / 55 lb for magnesium alloys, due to increased gas porosity in larger parts and premature solidification of the melt before reaching the cavity extremities.

**Which process is recommended for casting a ductile iron tube of 500 mm diameter and 3000 mm length?**
Centrifugal casting is the optimal process for long tubular parts, with capacity up to 5000 kg / 11000 lb and diameters of 50–1500 mm / 2–60 in, achieving a dense, porosity-free structure due to centrifugal force during solidification.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **efunda.com**: https://www.efunda.com/processes/metal_processing/die_casting.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/search/process?page=2&field_process_parents_is=944
