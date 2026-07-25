---
title: "Photoelectric sensor types"
sidebar:
  label: "Photoelectric sensor types"
description: "Technical reference: Photoelectric sensor types"
keywords: ["photoelectric sensor types through-beam retroreflective", "sistemas-control"]
category: "sistemas-control"
topic: "sensors"
subcategory: "photoelectric-sensor-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Photoelectric sensors are optoelectronic devices used to detect the presence, absence, or distance of objects by means of a light beam —usually infrared, visible red, or laser— and a photosensitive receiver. There are three fundamental detection types: **barrier (through‑beam)**, **retroreflective**, and **diffuse (reflection on the object or proximity)**, each with distinctly different range, accuracy, and installation performance.

## Operating principle

The photoelectric sensor consists of a light emitter and a receiver. In the **barrier** configuration, emitter and receiver are housed in separate enclosures facing each other; the object is detected when it interrupts the direct beam. The **retroreflective** mode places emitter and receiver in the same housing and uses a passive reflector to return the beam; detection occurs when the outward and return path is blocked. In the **diffuse** type, emitter and receiver also share the housing, but the object itself acts as a diffuse reflector: the sensor switches when the light reflected by the target's surface strikes the receiver with sufficient intensity.

## Types and characteristics

| Type | Detection principle | Typical maximum range | Accuracy | Installation complexity |
|------|---------------------|-----------------------|----------|--------------------------|
| Barrier (through‑beam) | Direct beam between separate emitter and receiver | Up to 250 m / 820 ft | Very high | Requires two-point mounting and precise alignment |
| Retroreflective | Beam reflected off a reflector (retroreflector) | Up to 10 m / 33 ft | High | Two-point mounting (sensor + reflector), moderate alignment |
| Diffuse (reflection on object) | Diffuse light reflected by the target surface | Up to 2 m / 6.6 ft | Medium – low | Single-point mounting, no reflector |

Additional characteristics:

- **Output modes:** sensors can operate in light‑on mode, activating the output when the receiver receives light, or in dark‑on mode, activating it when the beam is interrupted. Many industrial units offer complementary or selectable switching.
- **Emission:** infrared, visible red, or Class 1 laser sources are used depending on the application. Modulated light minimizes external interference.
- **IO‑Link compatibility:** modern models, such as those from the Contrinex or Wenglor series, integrate IO‑Link v1.0 communication for remote configuration and diagnostics.

## Type comparison

| Type | Detection principle | Typical range | Advantages | Disadvantages |
|------|---------------------|---------------|------------|---------------|
| Barrier | Interruption of the direct beam between separate emitter and receiver | Up to 250 m / 820 ft (Eaton E58 rectangular) | Maximum precision and reliability; longest range; very high excess gain | Two-point installation; requires precise alignment; may not detect translucent objects |
| Retroreflective | Blocking the outward and return beam to a reflector | Up to 10 m / 33 ft | High precision, range superior to diffuse; simplified mounting compared to barrier | Requires clean reflector; highly reflective objects (high albedo) can cause false detection if polarization is not used |
| Diffuse | Diffuse reflection of light off the object surface | Up to 2 m / 6.6 ft | Single-point installation; lower cost; no reflector required | Lower accuracy; sensitive to object color, texture, and reflectivity; longer adjustment time; limited range |

## Selection criteria

- **Detection distance:** For long distances, the barrier type is recommended (up to 250 m / 820 ft in robust models); retroreflective covers most medium industrial applications (<10 m / 33 ft); diffuse is reserved for short range (<2 m / 6.6 ft).
- **Object characteristics:** Opaque and highly reflective materials can use any type. With shiny or mirrored objects, the retroreflective must incorporate a polarizing filter to avoid false detections. Translucent or small objects benefit from the barrier mode due to its high interruption capability.
- **Work environment:** Environments with dirt, humidity, or extreme temperatures require robust housings (316L stainless steel, IP67/IP69K) and often the barrier configuration, which admits greater attenuation due to contamination. The retroreflective needs a clean reflector.
- **Space and mounting:** Diffuse only requires access to one side, while barrier requires two opposite points. Ultra‑compact models (4 mm / 0.16 in, 5 mm / 0.20 in diameter) allow even barrier sensors to be integrated in tight spaces.
- **Cost:** Diffuse sensors are the most economical; barrier and retroreflective, though more expensive, offer better performance in demanding environments.

## Typical applications

- **Barrier:** perimeter access control, detection of large objects on long‑distance conveyors, high‑speed part counting, heavy machinery protection.
- **Retroreflective:** monitoring warehouse doors and loading docks, vehicle detection in toll systems, pass control on conveyor belts, detection of opaque objects with non‑cooperative surfaces using polarized filters.
- **Diffuse:** verification of part presence at assembly stations, detection of lids and packaging on packaging lines, level measurement in small hoppers, low‑cost applications where distance does not exceed 1 – 2 m (3.3 – 6.6 ft).

## Key technical data

| Parameter | Typical value |
|-----------|---------------|
| Supply voltage | 10 to 30 VDC (AC models: 20 to 250 V AC) |
| Switched output current | ≤ 200 mA |
| Switching frequency | Up to 10 kHz (e.g., 8 mm tubular sensors) |
| Housing material | ABS plastic, 316L stainless steel, PVDF |
| Protection rating | IP67, IP68, IP69K |
| Operating temperature | −25 °C to +60 °C / −13 °F to +140 °F (expandable with special housings) |
| Cable length | 2 m / 6.6 ft (axial) or M8 / M12 quick‑disconnect connector |
| Maximum range (barrier) | Up to 250 m / 820 ft |
| Maximum range (retroreflective) | Up to 10 m / 33 ft |
| Maximum range (diffuse) | Up to 2 m / 6.6 ft |

## Installation and maintenance

**Barrier** sensors require precise alignment between emitter and receiver, as well as rigid fixing to avoid misalignment from vibration. Periodic cleaning of the optics is recommended. **Retroreflective** sensors simplify mounting by concentrating emitter and receiver in one module, but the reflector must remain clean and correctly oriented; in the presence of shiny objects, polarized reflectors and filters should be used. **Diffuse** sensors are the easiest to install — simply screw the sensor in front of the detection area — although their performance depends heavily on the color, roughness, and angle of the detected object; to maintain reliability, clean the lens regularly and adjust sensitivity for each application. In all cases, the temperatures and supply voltages specified by the manufacturer must be respected, and outdoors, use visors or filters to counteract direct sunlight or intense artificial lighting.

## Frequently Asked Questions (FAQ)

### What is the fundamental difference between the three types of photoelectric sensors?
Barrier uses emitter and receiver in independent opposite enclosures; retroreflective groups both in one enclosure and reflects the beam off a special mirror; diffuse detects the light that the object itself reflects back to the sensor.

### Which type of photoelectric sensor offers the longest range?
The barrier sensor achieves the greatest distances, with commercial models capable of detecting objects beyond 250 m / 820 ft, thanks to the beam traveling a single path without loss at a reflector.

### How can false detections be avoided when working with shiny objects?
In retroreflective mode, polarized filters and triple‑prism reflectors are used to discriminate light reflected by a specular surface. In diffuse mode, adjusting sensitivity and orienting the sensor to avoid receiving the direct reflection usually solves the problem.

### Can photoelectric sensors be used in dusty or humid environments?
Yes, if a model with the appropriate IP protection (IP67, IP69K) is chosen and the optics are kept clean. In extreme conditions, barrier sensors tolerate greater dirt because the total interruption of the beam remains detectable thanks to their high excess gain.

### What do the light‑on and dark‑on operating modes mean?
In light‑on mode, the output activates when the receiver receives light; in dark‑on mode, the output activates when the beam no longer reaches the receiver. The choice depends on the control logic and required safety (e.g., dark‑on for "object present" detection).

### Is precise alignment indispensable for all types?
Not to the same degree. Barrier requires very precise alignment between emitter and receiver. Retroreflective requires the sensor to point correctly at the reflector, but is more tolerant. Diffuse practically requires no alignment, only that the object enters the field of view.

## Sources Consulted

- **plcacademy.com**: https://www.plcacademy.com/thermocouple/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/sensors_-z-_encoders/photoelectric_sensors/through-beam
