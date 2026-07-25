---
title: "Motor bearing lubrication"
sidebar:
  label: "Motor bearing lubrication"
description: "Technical reference: Motor bearing lubrication"
keywords: ["electric motor bearing lubrication schedule", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-bearing-lubrication"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Bearing lubrication in electric motors is a maintenance procedure that applies grease or oil between the rolling elements and raceways to reduce friction, dissipate heat, and protect against contamination. Proper lubrication can extend bearing service life by up to 80% compared to poor lubrication conditions, and it is one of the most critical preventive maintenance tasks to ensure reliable operation of induction motors and other rotating electrical machines.

## Lubrication Principle

Bearing lubrication in electric motors is based on the formation of a thin lubricant film between the rolling elements and raceways, which separates the metallic surfaces in relative motion. This film supports the applied load and minimizes direct metal-to-metal contact, reducing wear. The predominant lubrication regime in motor bearings is elastohydrodynamic lubrication (EHL), where the pressure in the contact zone is high enough to transiently increase the lubricant viscosity and elastically deform the surfaces. Under ideal speed and load conditions, typical film thickness ranges from 0,1 µm to 3 µm / 3,9 µin to 118 µin.

In grease-lubricated bearings, the metallic soap that forms the thickener acts as a sponge that gradually releases the base oil to the contact zone. During the initial break-in phase, the grease redistributes and excess is expelled from the raceways, leaving only a thin lubricating film under stable operation. The required grease amount is estimated with the formula relating the free volume in the bearing to a percentage fill factor.

> **G = 0,005 × D × B**

Where:
| Variable | Meaning | Unit |
|---|---|---|
| G | Amount of grease | g / oz |
| D | Bearing outer diameter | mm / in |
| B | Bearing width | mm / in |

## Types of Lubrication Systems

| System | Components | Typical motor application |
|---|---|---|
| Manual grease gun lubrication | Ball or conical grease fitting, inlet duct | Small and medium squirrel-cage motors |
| Spring-loaded grease cup | Compression plate, calibrated spring, grease reservoir | Long-life motors without frequent maintenance |
| Ring oiler | Metallic ring, lower oil reservoir, shaft groove | Horizontal motors with sleeve bearings |
| Forced oil circulation | Oil pump, filter, cooler, piping, reservoir | Large or high-speed motors with oil-lubricated bearings |
| Oil mist | Mist generator, application nozzles, collector | Motors in continuous process plant service |

The ring oiler system operates by mounting a metallic ring with a diameter larger than the shaft on top of the shaft, partially submerged in a lower oil reservoir. Shaft rotation drags the ring, which rises while spinning on its own axis and carries oil adhered to its surface to the top of the shaft, from which it flows laterally to the bearings. This system is effective at speeds up to approximately 1000 rpm / 1000 rpm, since above this value centrifugal force tends to expel oil from the ring instead of transporting it, and requires the shaft to remain horizontal and stable.

## Lubrication Schedule by Motor Type

| Motor type | Typical lubrication interval (hours) | Verification method |
|---|---|---|
| Squirrel cage, light duty (< 1800 rpm / < 1800 rpm) | Every 2000 – 4000 h | Temperature control and vibration analysis |
| Squirrel cage, standard continuous duty | Every 1500 – 2000 h | Bearing housing temperature measurement |
| Squirrel cage, severe duty (high temperature, dirt) | Every 500 – 1000 h | Continuous vibration monitoring and thermography |
| Wound rotor with slip rings | Every 1000 – 1500 h | Visual inspection of rings and oil level check |
| Ring-oiled sleeve bearings | Weekly level check; oil change every 6 months | Visual oil level check in reservoir |

## Types of Lubricants and Applications

| Lubricant type | Base composition | Operating temperature range | Typical base oil viscosity at 40 °C | Recommended application |
|---|---|---|---|---|
| Lithium grease NLGI 2 | Mineral oil + lithium soap | -30 °C to 120 °C / -22 °F to 248 °F | 100 – 150 cSt | General service in standard motors |
| Lithium complex grease NLGI 2-3 | Mineral oil + lithium complex soap | -20 °C to 150 °C / -4 °F to 302 °F | 150 – 220 cSt | High-temperature motors or long cycles |
| Polyurea grease NLGI 2 | Mineral or synthetic oil + polyurea thickener | -20 °C to 160 °C / -4 °F to 320 °F | 70 – 150 cSt | High-speed and long-life motors |
| Bentonite grease NLGI 2 | Synthetic oil + bentonite clay | -40 °C to 180 °C / -40 °F to 356 °F | 30 – 100 cSt | Extreme temperatures, radiation compatible |
| Oil for sleeve bearings R&O | Refined mineral oil with anti-rust and anti-wear additives | -10 °C to 80 °C / 14 °F to 176 °F | 32 – 68 cSt | Ring-oiled or circulation sleeve bearings |

## Relubrication Frequency

Relubrication frequency in electric motors depends on four main factors: rotational speed, bearing operating temperature, the type of grease selected, and environmental conditions. A common method for estimating relubrication frequency uses the following empirical formula.

> **t = K × (14 × 10⁶) / (n × √d) − 4 × d**

Where:
| Variable | Meaning | Unit |
|---|---|---|
| t | Relubrication interval | h |
| n | Shaft rotational speed | rpm / rpm |
| d | Bearing inner diameter | mm / in |
| K | Adjustment factor for bearing type and conditions | dimensionless |

## Common Failures Due to Poor Lubrication

| Failure | Symptom | Probable cause | Solution |
|---|---|---|---|
| Abrasive wear on raceways and rolling elements | Gradual increase in vibration and noise, matte or scratched surface | Grease contaminated with solid particles or ingress of environmental dust | Thoroughly clean bearing, apply new grease, improve seals |
| Surface fatigue due to lubricant overload | Excessive noise, rapid temperature rise, darkened hardened grease | Excess grease causing churning and internal heating | Reduce grease amount to 30-50% of bearing free volume |
| False brinelling / vibration marks | Transverse marks visible on raceways, vibration without shaft rotation | Motor stopped subjected to external vibration without sufficient lubricant film | Use grease with anti-wear additives, start motor periodically, apply coatings |
| Corrosion from trapped moisture | Surface rust on raceways, pitting, increased internal clearance | Free water emulsified in grease from pressure washing or condensation | Replace grease with corrosion inhibitors, check seals and drains |
| Thermal degradation of lubricant | Carbonaceous residues on cage and raceways, deep black color, viscosity loss | Operating temperature above grease limit | Select grease with higher thermal stability, reduce load or improve ventilation |

## How to Grease Correctly

The greasing procedure for a bearing in an electric motor must follow a controlled sequence to prevent ingress of contaminants and lubricant excess. First, thoroughly clean the grease fitting and surrounding area to remove adhered dirt. Then, remove the lower purge plug, if present, and inject grease through the upper fitting with the motor running, provided safety conditions allow. The amount to apply is measured in grams, not by pumping volume, using the fill formula or bearing manufacturer tables. After greasing, allow the motor to run for 30 minutes to 1 hour so that excess grease is expelled through the purge plug, then reinstall the plug. Bearing temperature must be monitored during this operation; an increase greater than 15 °C / 27 °F above the steady-state temperature indicates overgreasing or contamination.

## Tools and Materials

| Tool / Material | Function | Typical specifications |
|---|---|---|
| Manual grease gun | Controlled grease application | Lever or pistol, nozzle compatible with grease fitting |
| Passive ultrasonic meter | Detection of abnormal friction and incipient bearing failures | Typical frequency range 20 – 100 kHz |
| Active ultrasonics with compatible grease | Verification of effective grease entry during lubrication | Contact receiver with audible and visual indicator |
| Portable vibration analyzer | Vibration spectrum measurement for bearing diagnostics | Piezoelectric accelerometer, range 10 Hz – 10 kHz |
| Lithium grease NLGI 2 for electric motors | Main lubricant for standard motor bearings | Consistency 265-295, drop point ≥ 180 °C / 356 °F |
| Lint-free cloths and degreasing solvent | Cleaning of grease fittings and purge plugs before lubrication | Non-chlorinated solvent, controlled flammability |
| Replacement purge plug | Replacement in case of damage or blockage of original purge plug | Metric or NPT thread per motor design |

## Temperature vs. Bearing Life Graph

The relationship between bearing operating temperature and service life follows a decreasing exponential trend. A bearing operating at 70 °C / 158 °F with adequate lubrication commonly achieves between 40,000 and 100,000 hours of nominal L10 life. For every 15 °C / 27 °F increase in sustained operating temperature, grease life is approximately halved, and bearing material fatigue accelerates proportionally. At temperatures above 100 °C / 212 °F, the lubricant degradation rate triples compared to the baseline condition of 70 °C / 158 °F, requiring drastically shorter relubrication intervals and selection of greases with higher viscosity base oils or synthetic bases.

| Operating temperature | Estimated relative bearing life | Lubrication interval multiplier |
|---|---|---|
| 50 °C / 122 °F | 1.5 – 2.0 relative to nominal | 2.0 |
| 70 °C / 158 °F | 1.0 (nominal reference) | 1.0 |
| 85 °C / 185 °F | 0.5 – 0.7 relative to nominal | 0.5 |
| 100 °C / 212 °F | 0.2 – 0.3 relative to nominal | 0.3 |
| 120 °C / 248 °F and above | Less than 0.1 relative to nominal | 0.1 – 0.15 |

## Applied Predictive Maintenance

Predictive maintenance of bearing lubrication in electric motors integrates several condition monitoring techniques to detect failures before they occur. Regular broadband vibration measurement allows identification of defects in raceways, rolling elements, and cage through the appearance of characteristic frequencies (BPFO, BPFI, BSF, FTF). A properly lubricated bearing shows an overall vibration level below 2.8 mm/s RMS / 0.11 in/s RMS in motors up to 300 kW; values above 7.1 mm/s RMS / 0.28 in/s RMS indicate alarm condition.

Infrared thermography detects hot spots on the bearing housing, with increases of up to 20 °C / 68 °F above ambient temperature being acceptable. Passive ultrasonics can detect lack of lubricant or incipient metal-to-metal friction up to 12 weeks in advance of catastrophic failure. The combination of ultrasonics with compatible grease allows real-time verification that lubricant is effectively entering the contact zone, by recording the progressive attenuation of the ultrasonic level during pumping. Analysis of used oil or grease by optical emission spectrometry and ferrography quantifies metallic wear particles; iron concentrations above 100 ppm / 100 ppm in an oil sample indicate active abnormal wear.

## Standards and Regulations

| Standard / Regulation | Focus | Main parameter |
|---|---|---|
| ISO 281 | Calculation of bearing nominal life | Dynamic load rating and equivalent load |
| NEMA MG 1 | Electric motors and generators | Service conditions, including bearing lubrication |
| DIN 51825 | Lubricating greases type K | Classification of greases for bearings by temperature and consistency |
| ISO 6743-9 | Classification of industrial lubricants | Family X (greases) and family C (turbines and circulation systems) |

NEMA MG 1 establishes that electric motor bearings must be lubricated with the grease specified on the nameplate or in the manufacturer's manual, and that the lubrication system design must allow relubrication without disassembling the motor. DIN 51825 classifies bearing greases according to maximum operating temperature and NLGI consistency, with grease K2K-30 being suitable for bearings with a maximum temperature of 120 °C / 248 °F and NLGI 2 consistency.

## Frequently Asked Questions (FAQ)

### How often should a standard electric motor bearing be lubricated?
The typical lubrication interval for a squirrel-cage motor in standard continuous duty is every 2000 operating hours, although this value is adjusted according to motor speed, ambient temperature, and the type of grease used, and may be reduced to 1000 hours under severe conditions or extended to 4000 hours in light service.

### What is the correct amount of grease for an electric motor bearing?
The correct amount of grease is calculated with the formula G = 0.005 × D × B, where D is the outer diameter and B is the bearing width, and is approximately 30% to 50% of the internal free volume of the bearing; for a 6308 bearing with an outer diameter of 90 mm / 3.54 in and a width of 23 mm / 0.91 in, the approximate amount is 10 g / 0.35 oz.

### What happens if too much grease is applied to a motor bearing?
Excess grease causes a temperature increase due to churning and internal friction, raising the operating temperature between 10 °C and 20 °C / 18 °F and 36 °F above normal, which accelerates lubricant degradation, increases internal pressure, and can cause premature bearing failure in less than 25% of its expected nominal life.

### Is it necessary to purge old grease during motor relubrication?
Yes, evacuation of excess grease through the lower purge plug during greasing with the motor running is essential to remove degraded grease and avoid pressure buildup; purging must always be performed when the bearing operates at a temperature above 70 °C / 158 °F or when the new grease is chemically incompatible with the old one.

### How does the start/stop regime influence motor bearing lubrication?
Operating regimes with frequent starts and stops, such as those defined in duty cycles S3 (intermittent periodic) and S4 (intermittent periodic with starting) of the IEC standard, require lubrication intervals 30% to 50% shorter compared to motors in continuous S1 service, because each start momentarily destroys the lubricant film and subjects the bearing to boundary friction conditions.

### Which monitoring method is most effective for detecting lack of lubricant in electric motor bearings?
Passive ultrasonic monitoring is the most sensitive method for detecting lack of lubricant, as it can identify increased friction in the contact zone up to 12 weeks in advance of a catastrophic failure, while vibration analysis and thermography typically detect the anomaly when damage has already started, usually about 4 weeks in advance.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/iec-duty-cucles-d_739.html
- **electrical4u.com**: https://www.electrical4u.com/induction-motor-maintenance/
