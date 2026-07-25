---
title: "Soft starter specifications"
sidebar:
  label: "Soft starter specifications"
description: "Technical reference: Soft starter specifications"
keywords: ["soft starter motor specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "soft-starter"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The starting current is typically reduced to a range of 1.5 to 4 times the full-load rated current, depending on the equipment setting. Soft starters use thyristors in antiparallel configuration to control the voltage applied to the motor during the acceleration phase, minimizing mechanical and electrical stresses.

The soft starter operates by controlling the firing angle of thyristor pairs connected in antiparallel in series with each motor phase. During starting, the voltage is progressively increased from an adjustable initial value up to the nominal line voltage, limiting the inrush current and the starting torque.

The fundamental equation governing soft starter behavior is:

> **I_start = V_controlled / Z_stator**, where **V_controlled** is obtained by phase-chopping the supply voltage, and **Z_stator** represents the equivalent impedance of the motor at standstill.

| Variable | Description |
|---|---|
| V_controlled | Controlled RMS voltage applied to the motor, in V |
| V_nominal | Nominal supply voltage of the network, in V |
| Z_stator | Impedance of the stator winding at standstill, in Ω |
| I_nominal | Motor full-load rated current, in A |
| I_start_DOL | Starting current with direct-on-line starting, typically 6 to 10 times I_nominal |

Control is performed electronically, with no moving parts, and allows programmable acceleration and deceleration ramps. In three-phase applications, optimal control is obtained with thyristors in all three phases, avoiding current imbalances. When nominal speed is reached, an internal or external bypass contactor bridges the thyristors to eliminate steady-state conduction losses.

## Technical Specifications

The electrical and mechanical specifications of commercial soft starters cover a wide power and voltage range. The following table summarizes typical characteristic values.

| Parameter | Typical Value |
|---|---|
| Supply voltage (three-phase) | 200 to 690 V AC ±10 % |
| Line frequency | 50/60 Hz ±2 Hz |
| Applicable motor rated power | 4 kW to 1200 kW / 5.4 HP to 1609 HP |
| Soft starter rated current | 8 A to 1400 A |
| Adjustable starting current | 1.5 to 7 × I_nominal |
| Adjustable starting torque | 0.1 to 1.0 × motor rated torque |
| Acceleration ramp time | 0.5 s to 180 s |
| Deceleration ramp time (soft stop) | 0 s to 60 s |
| Initial starting voltage (pedestal) | 10 % to 70 % of V_nominal |
| Operating ambient temperature | -10 °C to +50 °C / 14 °F to 122 °F |
| Maximum altitude without derating | 1000 m / 3281 ft above sea level |
| Enclosure protection degree (standard) | IP00 to IP54 |

## Configuration Parameters

Electronic soft starters offer multiple adjustments to adapt the start to the load characteristics. The most relevant parameters are listed below.

| Parameter | Adjustment range | Description |
|---|---|---|
| Initial starting voltage | 10 % to 70 % of V_nominal | Voltage value applied at the beginning of the ramp; defines the initial starting torque. |
| Acceleration ramp time | 0.5 s to 180 s | Duration of the linear voltage increase up to V_nominal. |
| Starting current limit | 1.5 to 7 × I_nominal | Maximum current allowed during acceleration; the controller maintains this value constant. |
| Maximum starting torque | 0.1 to 1.0 × rated torque | Torque limitation via voltage control. |
| Deceleration ramp time | 0 s to 60 s | Duration of the gradual voltage reduction for smooth stopping in pumps or conveyors. |
| Final deceleration voltage | 0 % to 40 % of V_nominal | Voltage at which the motor is disconnected at the end of the stopping ramp. |
| Overload protection setting | Class 5 to 30 per IEC 60947-4-2 | Adjustable electronic thermal trip curve matching the motor insulation class. |

## Typical Applications

Soft starter specifications make them suitable for applications where limiting inrush current and mechanical impact of direct-on-line starting is required. The most common applications are detailed in the following table.

| Application | Main benefit of soft start |
|---|---|
| Centrifugal pumps | Elimination of water hammer; reduction of overpressures in pipes by up to 90 %. |
| Fans and blowers | Prevents belt slippage; starting without air pressure peaks. |
| Screw compressors | Minimizes wear on bearings and gears; reduces inrush current to 3-4 × I_nominal. |
| Conveyor belts | Progressive acceleration that avoids jerking and damage to transported material. |
| Crushers and mills | Limitation of starting torque; protection against rotor lock. |
| Deep well pumps | Reduction of mechanical stress on shafts and couplings; controlled start for long pump columns. |

| Starting current as a multiple of I_nominal, per method | |
|---|---|
| Direct-on-line (DOL) | 6 to 10 × I_nominal, up to 15 × on high-efficiency motors |
| Star-delta starting | ~2 to 3 × I_nominal (approximately 1/3 of direct-on-line) |
| Soft starter | 1.5 to 4 × I_nominal (typical setting); programmable up to 7 × I_nominal |
| Variable frequency drive | 0.5 to 1.5 × I_nominal |

## Advantages and Limitations

| Advantages | Limitations |
|---|---|
| Reduces starting current peaks by up to 70 % compared to direct-on-line (DOL). | Does not provide steady-state speed control; operates only during start and stop. |
| Minimizes mechanical stresses on couplings, gears, and belts, extending system life. | Generates heat in thyristors during the acceleration phase; requires adequate ventilation or steady-state bypass. |
| Eliminates water hammer in pumping systems via soft stop ramp. | Harmonic distortion during starting can be significant if acceleration time is prolonged. |
| Simple installation and lower cost compared to variable frequency drives for start/stop functions. | Not suitable for applications with continuously high starting torque (e.g., very high static friction loads). |
| Simple configuration with few parameters; some models include load learning. | Torque control in wound-rotor motors is limited; rotor rheostat is preferred for very high torque applications. |

## Comparison with Other Starting Methods

| Starting method | Typical inrush current | Typical starting torque | Relative cost | Steady-state energy efficiency |
|---|---|---|---|---|
| Direct-on-line (DOL) | 6 to 10 × I_nominal (100 %) | 1.5 to 3 × rated torque (100 %) | Low | High (no additional losses) |
| Star-delta starting | ~2 to 3.3 × I_nominal (approx. 33 %) | ~0.5 to 1 × rated torque (approx. 25-33 %) | Medium-low | High (no steady-state losses) |
| Soft starter | 1.5 to 4 × I_nominal (adjustable) | 0.1 to 1 × rated torque (adjustable) | Medium | High (with steady-state bypass); thyristor losses < 1.5 W/A during start |
| Variable frequency drive (VFD) | 0.5 to 1.5 × I_nominal | 1 × rated torque available from low speed | High | Medium-high (power stage losses 2-5 % of load) |

| Estimated voltage drop on the network during starting, for a 500 kVA transformer | |
|---|---|
| Direct-on-line (6 × I_nominal, 55 kW motor) | Voltage drop greater than 15 % |
| Soft starter (3 × I_nominal, same motor) | Voltage drop less than 10 % |

## Frequently Asked Questions (FAQ)

### What is the typical starting current reduction range with a soft starter?
A soft starter typically reduces the starting current from 6 to 10 times the rated current (direct-on-line) to an adjustable value between 1.5 and 4 times the rated current, representing a reduction of 60 % to 75 %. In pump and fan applications, the starting current is commonly set to 3 times the rated current, sufficient to overcome inertia without causing excessive voltage drops.

### How is the maximum acceleration ramp time specified on a soft starter?
The maximum acceleration ramp time is typically specified at 180 seconds, depending on the model and power. For motors up to 100 kW / 134 HP, ramp times are commonly programmed between 5 and 30 seconds; for large motors above 500 kW / 670 HP, they can be extended up to 120 seconds to limit thermal stress on the thyristors and the motor.

### What is the maximum operating ambient temperature without derating?
The maximum operating ambient temperature without current derating is 40 °C / 104 °F for most standard soft starters. Between 40 °C and 50 °C / 104 °F and 122 °F, a typical derating factor of 0.8 % per additional degree Celsius is applied, according to manufacturer derating curves.

### What overload protection class does a soft starter incorporate?
Electronic soft starters incorporate adjustable overload protection from class 5 to 30, according to IEC 60947-4-2. Class 10 (trip in 10 seconds at 6 times rated current) is the most used for general-purpose motors; class 20 is selected for high-inertia motors with starting times exceeding 10 seconds.

### What IP protection degree is standard on soft starters?
Open chassis soft starters typically have IP00 protection, while enclosed versions reach IP20 or IP54. For installation in electrical panels, IP20 is usually sufficient; in dusty or humid environments, IP54 is required, achieved with gasketed enclosures and cable glands.

### What is the maximum motor power that a single-phase soft starter can control?
Single-phase soft starters typically control motors up to 5 kW / 6.7 HP, with maximum rated currents of 25 A at 230 V AC. For higher powers, three-phase soft starters are used, covering motors from 4 kW / 5.4 HP up to more than 1200 kW / 1609 HP in medium voltage.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/star-delta-starter/

