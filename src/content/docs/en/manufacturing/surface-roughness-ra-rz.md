---
title: "Surface roughness Ra Rz equivalences"
sidebar:
  label: "Surface roughness Ra Rz equivalences"
description: "Technical reference: Surface roughness Ra Rz equivalences"
keywords: ["surface roughness Ra Rz RMS comparison process", "manufacturing"]
category: "manufacturing"
topic: "surface-finishing"
subcategory: "surface-roughness"
skill: "process-data-comparison"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## General description
Surface roughness quantifies the micro-deviations of the real profile from the ideal shape of a part; it directly influences friction, wear, sealing capacity, and visual appearance. The most common parameters to characterize it are Ra (arithmetic mean roughness) and Rz (mean peak-to-valley height). Both evaluate different aspects of the texture: Ra describes the overall smoothness, while Rz is sensitive to local defects such as scratches or pores. There is no exact mathematical conversion formula between them, but in industrial practice approximate empirical relationships are used depending on the manufacturing process (e.g., Ra ≈ Rz/4 for rough turning, Ra ≈ Rz/7 for grinding). This page provides reference values, achievable tolerances according to material and method, and criteria for selecting the appropriate parameter in the manufacturing drawing.

## Operation parameters
The roughness evaluation is performed over a predefined sampling length with a roughness tester (stylus or optical system) that records the surface profile. The most commonly used ISO 4287 standardized parameters are:

- **Ra (arithmetic mean roughness)**: arithmetic mean of the absolute values of the profile deviations from the mean line. It replaced the old RMS and is the dominant indicator in manufacturing drawings.
- **Rz (mean peak-to-valley height)**: average of the five largest differences between consecutive peak and valley within the evaluation length. It measures the uniformity of the texture and detects anomalies that Ra smooths out.

The following table collects typical Ra and Rz values for common manufacturing processes, with a guideline relationship between both parameters.

| Manufacturing process | Ra (µm / µin) | Rz (µm / µin) | Approximate Ra/Rz ratio |
| --- | --- | --- | --- |
| Sawing | 25–50 µm / 984–1969 µin | 100–250 µm / 3937–9843 µin | 1/4 to 1/5 |
| Rough turning | 6.3–12.5 µm / 248–492 µin | 25–50 µm / 984–1969 µin | 1/4 |
| Finish turning | 0.8–3.2 µm / 31–126 µin | 4–16 µm / 157–630 µin | 1/5 |
| Rough milling | 3.2–12.5 µm / 126–492 µin | 16–60 µm / 630–2362 µin | 1/4 to 1/5 |
| Finish milling | 0.4–1.6 µm / 16–63 µin | 2–8 µm / 79–315 µin | 1/5 to 1/7 |
| Rough grinding | 0.8–3.2 µm / 31–126 µin | 4–16 µm / 157–630 µin | 1/5 |
| Medium grinding | 0.4–0.8 µm / 16–31 µin | 2–4 µm / 79–157 µin | 1/5 to 1/6 |
| Fine grinding | 0.1–0.4 µm / 4–16 µin | 0.6–2.0 µm / 24–79 µin | 1/6 to 1/7 |
| Honing | 0.05–0.4 µm / 2–16 µin | 0.3–2.0 µm / 12–79 µin | 1/6 to 1/7 |
| Lapping | 0.025–0.1 µm / 1–4 µin | 0.15–0.5 µm / 6–20 µin | 1/7 to 1/10 |
| Mirror polishing | 0.012–0.05 µm / 0.5–2 µin | 0.05–0.25 µm / 2–10 µin | 1/10 or greater |

Note: Empirical relationships vary depending on material, tool, and cutting conditions. It is recommended to verify with direct measurement on the part.

## Typical tolerances
Surface roughness tolerances are expressed as an upper limit of Ra or Rz in micrometers or microinches; a lower limit is rarely specified, except in lubricant retention applications. The following table shows the roughness ranges achievable in standardized manufacturing, equivalent to surface finish N grades (ISO 1302).

| N Grade | Ra (µm / µin) | Rz (µm / µin) | Representative processes |
| --- | --- | --- | --- |
| N12 | 50 µm / 1969 µin | 200 µm / 7874 µin | Saw cut, rough forging |
| N11 | 25 µm / 984 µin | 100 µm / 3937 µin | Rough drilling, sand casting |
| N10 | 12.5 µm / 492 µin | 50 µm / 1969 µin | Rough turning, oxyfuel cutting |
| N9 | 6.3 µm / 248 µin | 25 µm / 984 µin | Rough milling, semi-finishing machining |
| N8 | 3.2 µm / 126 µin | 12.5 µm / 492 µin | Finish turning, medium milling |
| N7 | 1.6 µm / 63 µin | 6.3 µm / 248 µin | Rough grinding, fine boring |
| N6 | 0.8 µm / 31 µin | 3.2 µm / 126 µin | Medium grinding, broaching |
| N5 | 0.4 µm / 16 µin | 1.6 µm / 63 µin | Fine grinding, honing |
| N4 | 0.2 µm / 8 µin | 0.8 µm / 31 µin | Fine honing, centerless grinding |
| N3 | 0.1 µm / 4 µin | 0.4 µm / 16 µin | Lapping, superfinishing |
| N2 | 0.05 µm / 2 µin | 0.2 µm / 8 µin | Optical polishing, fine lapping |
| N1 | 0.025 µm / 1 µin | 0.1 µm / 4 µin | Mirror polishing for optics and master gauges |

These values assume stable process conditions and homogeneous materials. Actual capability may deviate up to 30% depending on batch and tool wear.

## Applicable materials
All machinable engineering materials support the measurement and specification of Ra and Rz. The resulting roughness depends on the machinability of the material as well as the process and tool. The following table shows typical material/process combinations with expected roughness parameters.

| Material | Process | Achievable Ra (µm / µin) | Achievable Rz (µm / µin) |
| --- | --- | --- | --- |
| Carbon steel (SAE 1045) | Finish turning | 0.8–1.6 µm / 31–63 µin | 4–8 µm / 157–315 µin |
| Carbon steel | Medium grinding | 0.2–0.8 µm / 8–31 µin | 1.2–4 µm / 47–157 µin |
| Stainless steel AISI 304 | Finish turning | 0.8–3.2 µm / 31–126 µin | 4–16 µm / 157–630 µin |
| Stainless steel AISI 304 | Fine grinding | 0.1–0.4 µm / 4–16 µin | 0.6–2.0 µm / 24–79 µin |
| Gray cast iron GG25 | Rough milling | 3.2–6.3 µm / 126–248 µin | 16–30 µm / 630–1181 µin |
| Gray cast iron | Fine grinding | 0.2–0.8 µm / 8–31 µin | 1.2–4 µm / 47–157 µin |
| Aluminum 6061‑T6 | Turning with PCD insert | 0.2–0.8 µm / 8–31 µin | 1.0–4 µm / 39–157 µin |
| Aluminum 6061‑T6 | Polishing | 0.025–0.1 µm / 1–4 µin | 0.15–0.5 µm / 6–20 µin |
| Brass C360 | Finish turning | 0.4–1.6 µm / 16–63 µin | 2–8 µm / 79–315 µin |
| Titanium Ti‑6Al‑4V | Medium grinding | 0.4–1.2 µm / 16–47 µin | 2–6 µm / 79–236 µin |
| Engineering plastics (POM, PA6) | Finish milling | 0.4–1.6 µm / 16–63 µin | 2–8 µm / 79–315 µin |

Values are for guidance; actual roughness can improve with cooling, sharper tools, and optimized cutting parameters.

## Advantages and limitations
**Advantages of Ra**
- Provides an overall view of the surface condition, useful for monitoring process stability.
- It is the universally accepted parameter in drawings, standards, and manufacturing contracts.
- Easy to interpret by operators and customers.

**Limitations of Ra**
- Insensitive to isolated peaks, scratches, or pores that can compromise sealing or initiate fatigue.
- Does not distinguish between profiles with the same mean but different distribution of peaks and valleys.

**Advantages of Rz**
- Detects local anomalies (bursts, tool marks) that Ra would average out, making it suitable for sealing surfaces.
- Average of the five most representative peak-valley values, offering greater repeatability in the presence of sporadic defects.

**Limitations of Rz**
- Less widespread in industry, requiring clarifications in quality documentation.
- Can vary significantly if a single pass produces an extreme peak; averaging reduces but does not eliminate the influence of outliers.

It is not correct to state that Ra and Rz are interchangeable by means of a universal constant. Each parameter responds to a different control need, and the choice depends on the functional requirement of the surface.

## Selection guide
The decision to specify Ra or Rz (or both) on the part must be based on the main function of the surface. Practical criteria are presented below:

| Functional requirement | Recommended parameter | Justification |
| --- | --- | --- |
| General control of smoothness and visual quality | Ra | Average roughness is sufficient; the entire industry understands it. |
| Static sealing surface with gasket | Rz (or Rmax) | Detects scratches or pores that would cause leaks. |
| Bearing seat | Ra and Rz | Ra defines the contact area; Rz highlights defects that reduce service life. |
| Lubricant retention (cylinders) | Rz | The mean peak-to-valley height correlates with the retained oil volume. |
| Sliding surface with controlled friction | Ra | Low Ra ensures low overall friction; can be complemented with Rsk (skewness). |
| Aesthetic parts or subsequent painting | Ra | Tactile perception and paint adhesion correlate with Ra. |
| Process control in series production | Ra | Allows establishing control limits (e.g., Ra ≤ 0.8 µm / 31 µin) and monitoring trends. |

When compliance with both parameters is required, it is noted e.g.: Ra ≤ 0.4 µm / 16 µin and Rz ≤ 2.0 µm / 79 µin. The combination reduces the risk of surfaces that comply with Ra but have deep defects.

## Frequently asked questions (FAQ)

### What is Ra roughness and how is it calculated?
Ra is the arithmetic mean of the absolute values of the profile deviations from the mean line; it is usually expressed in micrometers (µm) or microinches (µin). For example, fine grinding gives Ra values of 0.4 µm / 16 µin, while rough turning reaches 6.3 µm / 248 µin. It is calculated as the integral of the profile |y(x)| divided by the sampling length, according to ISO 4287.

### How does Rz differ from Ra?
Rz measures the mean peak-to-valley height by averaging the five largest differences between a peak and its adjacent valley over five independent sampling lengths. A turned profile may show Ra = 3.2 µm / 126 µin but Rz = 15 µm / 591 µin if deep grooves exist. Ra smooths out those defects, while Rz highlights them, being especially useful for sealing gaskets.

### Is there a direct conversion formula between Ra and Rz?
No, because each parameter measures a different property of the profile. However, in practice approximate relationships are used: for turning Ra ≈ Rz/4, for grinding Ra ≈ Rz/7, and for polishing Ra ≈ Rz/10. The same Ra value of 0.8 µm / 31 µin can correspond to an Rz of 5.6 µm / 220 µin in turning or 3.2 µm / 126 µin in grinding. Direct measurement should always be verified.

### When should Ra be specified and when Rz on a drawing?
For general-purpose surfaces or statistical control, Ra is chosen, e.g., Ra ≤ 0.8 µm / 31 µin on a bearing seat. If the function requires detecting scratches or isolated defects (flange faces, sealing), Rz or Rmax is used, e.g., Rz ≤ 3.2 µm / 126 µin. On critical components both parameters are specified simultaneously.

### What are the typical Ra and Rz values by machining process?
Values vary with operation and material. As a reference, rough turning typically leaves Ra 6.3–12.5 µm / 248–492 µin and Rz 25–50 µm / 984–1969 µin, while fine grinding achieves Ra 0.1–0.4 µm / 4–16 µin and Rz 0.6–2.0 µm / 24–79 µin. Optical lapping reduces down to Ra 0.025 µm / 1 µin and Rz 0.1 µm / 4 µin. See the table in the "Operation parameters" section for more ranges.

### How are Ra and Rz measured in the workshop?
Both are obtained with a contact roughness tester that drags a diamond stylus (tip radius typically 2 µm / 79 µin) over a sampling length of 0.8 mm / 0.031 in or 2.5 mm / 0.098 in. The instrument automatically calculates Ra and Rz from the digitized profile. For small or delicate parts, non-contact optical systems are used, achieving resolutions of 0.01 µm / 0.4 µin.

## Sources Consulted

- **efunda.com**: https://www.efunda.com/forum/show_message.cfm?start=1&thread=4043&id=4058
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/surface-roughness
