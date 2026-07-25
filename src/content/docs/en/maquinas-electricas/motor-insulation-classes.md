---
title: "Motor insulation classes A-H"
sidebar:
  label: "Motor insulation classes A-H"
description: "Technical reference: Motor insulation classes A-H"
keywords: ["motor insulation class A B F H temperature", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "motor-insulation-class"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Motor insulation classes are standardized categories that define the maximum operating temperature that winding insulating materials can withstand without compromising their service life. The classification follows NEMA and IEC standards and is a fundamental parameter for the selection, design, and safe operation of rotating machines.

## Standardized insulation classes
The following table lists insulation classes A, B, F, and H defined by NEMA, along with the equivalent IEC designations and typical insulating materials used in each.

| Class (NEMA) | IEC 60085 Class | Maximum hot spot temperature | Typical materials |
| --- | --- | --- | --- |
| A | 105 | 105 °C / 221 °F | Organic materials: cotton, silk, paper, some impregnated synthetic fibers |
| B | 130 | 130 °C / 266 °F | Inorganic materials: mica, fiberglass, asbestos with high-temperature binders |
| F | 155 | 155 °C / 311 °F | Class B materials with binders stable at higher temperature |
| H | 180 | 180 °C / 356 °F | Silicone elastomers, Class B inorganic materials with high-temperature binders |

## Allowable temperature rises
The full‑load heating limit depends on the insulation class and the motor service factor. The values given correspond to a reference ambient of 40 °C / 104 °F.

| Class | Max. hot spot temp. | Allowable rise (service factor 1.0) | Allowable rise (service factor 1.15) |
| --- | --- | --- | --- |
| A | 105 °C / 221 °F | 60 °C / 140 °F | 70 °C / 158 °F |
| B | 130 °C / 266 °F | 80 °C / 176 °F | 90 °C / 194 °F |
| F | 155 °C / 311 °F | 105 °C / 221 °F | 115 °C / 239 °F |
| H | 180 °C / 356 °F | 125 °C / 257 °F | – |

## Operating temperature calculation
The hot spot temperature is obtained by adding the reference ambient temperature, the allowable temperature rise at full load, and a hot spot safety margin. The explicit formula is:

> **T_max = T_amb + ΔT_rise + ΔT_hs**

| Variable | Meaning | Typical value / description |
| --- | --- | --- |
| T_max | Maximum hot spot temperature | Variable, according to class |
| T_amb | Reference ambient temperature | 40 °C / 104 °F |
| ΔT_rise | Allowable temperature rise at full load | According to class and service factor (see previous table) |
| ΔT_hs | Hot spot margin | 10 °C / 18 °F |

**Example for class F with service factor 1.0:**  
40 °C + 105 °C + 10 °C = 155 °C / 311 °F, exactly the class limit.

## Impact on service life
Insulation degradation follows a widely accepted rule of thumb: **for every 10 °C / 18 °F temperature increase above the class limit, the motor's service life is approximately halved**. The following example, operating at a hot spot temperature of 180 °C / 356 °F, illustrates the difference in longevity according to insulation class:

| Insulation class | Estimated service life at 180 °C / 356 °F |
| --- | --- |
| A | ≈ 300 hours |
| B | ≈ 1 800 hours |
| F | ≈ 8 500 hours |
| H | Tens of thousands of hours |

## Common applications
- **Class A:** limited use today; present in old machines or low-temperature household appliances.
- **Class B:** the most common in 60 Hz motors in the US market. Used in centrifugal pumps, fans, and air compressors.
- **Class F:** international standard in 50 Hz motors and in industrial applications requiring higher reliability, such as conveyors and extruders.
- **Class H:** high ambient temperature environments, furnaces, traction drives, and equipment where reduced cooling systems are installed.

## Frequently Asked Questions (FAQ)
### What is the maximum temperature that class A insulation withstands?
   The maximum temperature of class A insulation is 105 °C / 221 °F. Exceeding it drastically accelerates aging of organic materials.

### How many hours of approximate service life are obtained with class F insulation operating at 180 °C?
   At 180 °C / 356 °F, a motor with class F insulation offers about 8,500 hours of service life, compared to only 300 hours in class A and about 1,800 hours in class B.

### What temperature increase over the nominal class reduces life by half?
   The Arrhenius rule applied to motors states that each increase of 10 °C / 18 °F above the class limit halves the service life.

### What is the temperature difference between class B and class F?
   Class B reaches 130 °C / 266 °F, while class F reaches 155 °C / 311 °F, that is, a difference of 25 °C / 45 °F.

### What hot spot safety margin is considered in standard design?
   The typical hot spot margin is 10 °C / 18 °F, added to the reference ambient temperature of 40 °C / 104 °F and the allowable load rise.

### In what temperature range does class H insulation work?
   Class H insulation is designed to withstand a maximum hot spot temperature of 180 °C / 356 °F continuously, maintaining a service life of tens of thousands of hours.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-insulation-classes-d_734.html
- **electrical4u.com**: https://www.electrical4u.com/motor-duty-class/
