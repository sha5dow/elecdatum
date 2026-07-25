---
title: "PPE categories for arc flash"
sidebar:
  label: "PPE categories for arc flash"
description: "Technical reference: PPE categories for arc flash"
keywords: ["arc flash PPE category table NFPA 70E", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "arc-flash"
subcategory: "ppe-categories-arc-flash"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Arc flash PPE categories establish a stepped personal protection system based on the expected incident energy level during an arc fault, measured in calories per square centimeter (cal/cm²). This system, defined by NFPA 70E, allows selecting the appropriate protective clothing for workers performing tasks with electrical risk, ensuring the equipment can withstand the released thermal energy without the user suffering second-degree burns in covered areas.

## Regulatory Basis

NFPA 70E (Standard for Electrical Safety in the Workplace) is the primary reference for classifying arc flash PPE categories in North America. This document establishes practical electrical safety requirements in the workplace, including incident energy limits for each category, flame-resistant clothing requirements, and arc energy calculation methods. The standard complements OSHA guidelines and aligns with the National Electrical Code (NFPA 70) to provide a comprehensive protection framework.

## PPE Categories per NFPA 70E

NFPA 70E defines four numbered PPE categories, plus an extreme hazard condition, each associated with a maximum incident energy range expressed in cal/cm². Incident energy is the amount of thermal energy incident on a surface at a given working distance, typically 45,7 cm / 18 in.

| Category | Incident Energy Range | Risk Type |
|-----------|---------------------------|----------------|
| Category 1 | Up to 4 cal/cm² / 16,7 J/cm² | Minimum arc risk |
| Category 2 | Up to 8 cal/cm² / 33,5 J/cm² | Moderate arc risk |
| Category 3 | Up to 25 cal/cm² / 104,6 J/cm² | High arc risk |
| Category 4 | Up to 40 cal/cm² / 167,4 J/cm² | Severe arc risk |
| Extreme Hazard | Above 40 cal/cm² / 167,4 J/cm² | Extreme risk — do not work energized |

Classifying a task into a specific category requires an arc flash study that calculates actual values at the work point, considering available short-circuit current, clearing time of protective devices, and working distance.

## Clothing Requirements by Category

Each category requires specific layers of protection made from flame-resistant materials. The thermal protection value of each garment is expressed by the ATPV (Arc Thermal Performance Value) or the E<sub>BT</sub> (Energy Breakopen Threshold), both measured in cal/cm².

| Category | Required Garments | Minimum ATPV |
|-----------|-------------------|--------------|
| Category 1 | Flame-resistant long-sleeve shirt and pants (minimum 4 cal/cm²) or flame-resistant coverall, hard hat with arc flash face shield or safety glasses, dielectric footwear | 4 cal/cm² / 16,7 J/cm² |
| Category 2 | Flame-resistant coverall over non-synthetic undergarments (minimum 8 cal/cm²), hard hat with arc flash face shield, dielectric footwear | 8 cal/cm² / 33,5 J/cm² |
| Category 3 | Full arc flash protective suit (jacket and pants or multi-layer coverall, minimum 25 cal/cm²), arc flash hood, hard hat, dielectric footwear, insulating gloves with leather protectors | 25 cal/cm² / 104,6 J/cm² |
| Category 4 | High-resistance arc flash suit (minimum 40 cal/cm²), arc flash hood with visor, hard hat, dielectric footwear, insulating gloves with leather protectors, hearing protection | 40 cal/cm² / 167,4 J/cm² |

All outer garments, including hoods, jackets, and pants, must be made of flame-resistant fibers that do not melt or drip. Undergarments and intermediate layers must be of natural non-synthetic fibers to avoid melting onto the skin.

## Considerations for Category Selection

Category selection cannot be based solely on generic task tables. NFPA 70E allows two selection methods:
- **Table method**: uses the standard's predefined tables when the equipment electrical parameters exactly match the specified ranges, severely limiting its practical application.
- **Incident energy calculation method**: mandatory in most industrial installations. Requires an arc flash study per IEEE 1584 that computes the actual incident energy at each work point. This is the most accurate and recommended method.

The reference working distance is 45,7 cm / 18 in for low-voltage equipment (up to 600 V) and may vary for higher voltages. Incident energy values are determined by the normalized calculation formula:

> **E = 4,184 · C<sub>f</sub> · E<sub>n</sub> · (t / 0,2) · (610<sup>x</sup> / D<sup>x</sup>)**

| Variable | Meaning | Unit |
|----------|-------------|--------|
| E | Estimated incident energy | cal/cm² |
| C<sub>f</sub> | Calculation factor (1,0 for voltages > 1 kV; 1,5 for voltages ≤ 1 kV) | Dimensionless |
| E<sub>n</sub> | Normalized energy for duration of 0,2 s and distance of 610 mm | J/cm² |
| t | Arc clearing time | s |
| D | Actual working distance from arc point | mm |
| x | Distance exponent (depends on equipment type and voltage) | Dimensionless |

The arc clearing time (t) is critical: shorter times drastically reduce incident energy. Therefore, protection coordination and proper adjustment of breakers and fuses directly influence the required PPE category.

## Frequently Asked Questions (FAQ)

### What is the difference between ATPV and EBT in a protective garment?

ATPV (Arc Thermal Performance Value) indicates the incident energy required for the fabric to transmit enough heat to cause a second-degree burn to the user, with a 50 % probability. E<sub>BT</sub> (Energy Breakopen Threshold) indicates the energy that causes fabric rupture or opening. Both are measured in cal/cm² and the declared value for the garment is the lower of the two.

### Can I wear polyester undergarments under arc flash PPE?

No. Underwear or any intermediate layer must be made of natural non-synthetic fibers (cotton, wool, silk) or flame-resistant fibers. Synthetic materials such as polyester, nylon, or lycra can melt and adhere to the skin even if the outer protective layer withstands the arc.

### Are NFPA 70E PPE categories applicable in European installations?

Not directly. In Europe, IEC 61482 applies, which defines two levels of protection by the box test method (Class 1: 4 kA for 0,5 s; Class 2: 7 kA for 0,5 s) or by the open arc method (ATPV or ELIM). Although conceptually similar, the classifications are not equivalent and should not be interchanged without engineering analysis.

### What does the incident energy value expressed in cal/cm² mean?

One calorie per square centimeter is the amount of thermal energy required to raise the temperature of one gram of water by one degree Celsius, distributed over an area of one square centimeter. For reference, 1,2 cal/cm² / 5,0 J/cm² is the approximate threshold for causing a second-degree burn on bare skin. PPE categories protect against energies well above this threshold.

### How often should arc flash PPE be re-certified?

The regulations do not require periodic re-certification, but they do require visual inspections before each use and documented reviews at least annually. Any garment with cuts, holes, discoloration, contamination with flammable substances, or seam damage must be immediately removed from service. The maximum recommended service life by manufacturers is usually 5 years, depending on use and storage.

### What happens if the incident energy exceeds 40 cal/cm²?

When an arc flash study determines incident energies greater than 40 cal/cm² / 167,4 J/cm², NFPA 70E classifies it as extreme danger and prohibits any work on energized equipment. In these cases, the equipment must be completely de-energized before intervention, or the protection system must be redesigned to reduce incident energy (e.g., by reducing clearing times or installing arc mitigation devices).

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cheicals-hazard-rating-d_400.html
