---
title: "Circuit breaker sizing"
sidebar:
  label: "Circuit breaker sizing"
description: "Technical reference: Circuit breaker sizing"
keywords: ["circuit breaker sizing calculation ampacity", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breakers"
subcategory: "breaker-sizing"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The sizing of thermal-magnetic circuit breakers consists of selecting the rated capacity and appropriate tripping characteristics to protect conductors and equipment against overloads and short circuits, based on parameters such as full load amperage (FLA), minimum circuit ampacity (MCA), and maximum over-current protection (MOCP). A correctly sized breaker interrupts current flow when it exceeds safe limits, preventing damage from excessive heating and catastrophic failures in the electrical installation.

## Operating principle of thermal and magnetic tripping

The thermal-magnetic circuit breaker integrates two independent detection mechanisms that act on a common release. The thermal protection operates by means of a bimetallic strip that heats up by Joule effect when current flows; when the current sustainably exceeds the rated value, the thermal deformation of the bimetal releases the tripping mechanism. This response has an inverse time characteristic: the greater the overload, the shorter the tripping time. The magnetic protection consists of a coil with a movable core that generates a magnetic field proportional to the instantaneous current; in the presence of short-circuit currents several times the rated current, the magnetic field attracts the core with sufficient force to trigger the trip instantaneously, typically in less than 10 ms / 0.01 s.

| Tripping parameter | Thermal trip (overload) | Magnetic trip (short circuit) |
| --- | --- | --- |
| Typical actuation range | 1.05 to 1.45 × In | 3 to 15 × In |
| Characteristic response time | Seconds to minutes | 0.005 to 0.01 s / 5 to 10 ms |
| Sensing element | Bimetallic strip heated by Joule effect | Coil with movable core actuated by magnetic field |

## Fundamental parameters: MCA, MOCP, FLA and LRA

### FLA (Full Load Amperage)

The FLA value, or full load amperage, is the continuous current the equipment draws under rated operating conditions at rated voltage and load. This parameter forms the basis for calculating both the minimum circuit ampacity and the maximum over-current protection. The FLA is obtained from the manufacturer’s nameplate or, in its absence, through standardized tables according to motor power and voltage.

The empirical relationship between FLA and MCA is:

> **FLA ≈ 0.80 × MCA**

### MCA (Minimum Circuit Ampacity)

The MCA defines the minimum current-carrying capacity that the circuit conductors must have to operate safely under normal operating conditions. The MCA incorporates a 25% margin over the current of the largest motor to compensate for additional heating during starting and continuous operation.

| Variable | Meaning | Unit | Source |
| --- | --- | --- | --- |
| MCA | Minimum circuit ampacity | A | Calculation |
| FLA_motor | Full load amperage of the motor | A | Manufacturer’s nameplate |
| I_heater | Rated current of the heater | A | Manufacturer’s nameplate |

The MCA calculation formula is:

> **MCA = 1.25 × (FLA_motor + I_heater)**

### MOCP (Maximum Over-Current Protection)

The MOCP establishes the maximum permissible value for the over-current protection device, whether fuse or thermal-magnetic circuit breaker. The MOCP ensures that the protection device can withstand transient starting currents without nuisance tripping, while guaranteeing disconnection under fault conditions. The MOCP value is always greater than the MCA value to allow normal starting currents without interruption.

The relationship between FLA and MOCP is:

> **FLA ≈ 0.44 × MOCP**

| Variable | Meaning | Unit | Source |
| --- | --- | --- | --- |
| MOCP | Maximum over-current protection | A | Calculation |
| FLA_largest | FLA of the largest motor | A | Manufacturer’s nameplate |
| Other_motors | FLA of additional motors | A | Manufacturer’s nameplate |
| Resistive_loads | Current of resistive loads | A | Manufacturer’s nameplate |

The MOCP calculation formula for equipment with multiple loads is:

> **MOCP = (2.25 × FLA of the largest motor) + (Sum of FLA of other motors) + (Resistive loads)**

### LRA (Locked Rotor Amperage)

The LRA represents the maximum current drawn by a motor when its rotor is mechanically locked and rated voltage is applied. This starting current can reach significantly high values during the first instant of energization. The LRA value is essential to verify that the voltage drop during starting does not exceed critical limits, typically between 15% and 20% of the rated voltage to prevent the motor from failing to start and beginning to vibrate.

The typical relationship between LRA and FLA is:

> **LRA ≈ 8 × FLA**

## Step-by-step sizing procedure

Correct sizing of a thermal-magnetic circuit breaker follows a logical sequence that ensures both effective protection and uninterrupted equipment operation during normal starting and running conditions.

1. Determine the FLA of the main motor from the manufacturer’s nameplate, verifying that it corresponds to the supply voltage and rated power of the equipment.

2. Identify all additional loads (secondary motors, resistive heaters, control transformers) and record their individual rated currents.

3. Calculate the MCA by multiplying the sum of the FLA of the largest motor and the resistive load currents, if any, by 1.25.

4. Calculate the MOCP by applying the formula that assigns a factor of 2.25 to the FLA of the largest motor and adds the currents of the other loads.

5. Select the thermal-magnetic circuit breaker whose standardized rated value is the next higher above the calculated MCA, without exceeding the MOCP value.

6. Verify that the interrupting capacity of the selected breaker exceeds the available short-circuit current at the point of installation.

7. Check that the conductors sized according to the MCA have an ampacity equal to or greater than required, considering correction factors for ambient temperature and grouping.

8. Validate that the voltage drop during starting, considering the LRA, does not exceed 15% to 20% of the rated supply voltage.

9. Confirm that the trip curve of the circuit breaker (type B, C, or D) is compatible with the transient starting currents of the connected load.

## Relationship between FLA, MCA and MOCP

| Parameter | Definition | Calculation relationship |
| --- | --- | --- |
| FLA | Full load amperage of equipment under rated operation | Base value obtained from manufacturer’s nameplate |
| MCA | Minimum required conductor ampacity | MCA = 1.25 × (FLA_motor + I_heater) |
| MOCP | Maximum size of protection device | MOCP = (2.25 × FLA_largest) + Other_motors + Resistive_loads |
| FLA-MCA relationship | Direct proportionality factor | FLA ≈ 0.80 × MCA |
| FLA-MOCP relationship | Direct proportionality factor | FLA ≈ 0.44 × MOCP |
| MCA-MOCP relationship | Magnitude hierarchy | MCA < MOCP in all cases |

## Adjustment factors and safety margins

The safety margins incorporated in the sizing formulas are due to predictable electrical and thermal behaviors of the equipment. The factor of 1.25 applied in the MCA calculation responds to the need for conductors to withstand 125% of the rated continuous operating current, compensating for the additional heat generated during starting periods and small load fluctuations. The factor of 2.25 in the MOCP formula for the largest motor allows the protection device not to trip during the starting current, which typically reaches 6 to 8 times the FLA for a brief period, but guarantees disconnection under sustained fault currents. The National Electrical Code (NEC) establishes standardized breaker sizes from 15 A upward, with standardized increments.

| Standardized rated current | Typical application |
| --- | --- |
| 15 A | Lighting and general-use receptacle circuits |
| 20 A | Kitchen, bathroom, and small appliance circuits |
| 30 A | Electric dryers, window air conditioners |
| 40 A | Electric ranges, wall ovens |
| 50 A | Large ranges, water heaters |
| 60 A | Subfeeders, HVAC equipment |

## Practical calculation example

A commercial HVAC unit incorporates a compressor with FLA of 10 A, a fan motor with FLA of 2 A, and an electric heater of 8 A. The first step is to identify the FLA of the largest motor, which is the compressor at 10 A. The MCA is calculated by multiplying the sum of the compressor FLA and the heater current by 1.25: 1.25 × (10 A + 8 A) = 22.5 A. This value establishes that the conductors must have a minimum ampacity of 22.5 A. For the MOCP, the factor of 2.25 is applied to the compressor and the remaining loads are added: (2.25 × 10 A) + 2 A + 8 A = 32.5 A. The thermal-magnetic circuit breaker to be selected must have a rated current greater than 22.5 A (MCA) but not exceeding 32.5 A (MOCP), making a standardized 30 A breaker suitable.

| Parameter | Calculated value |
| --- | --- |
| FLA of compressor (largest motor) | 10 A |
| FLA of fan | 2 A |
| Heater current | 8 A |
| Calculated MCA | 1.25 × (10 A + 8 A) = 22.5 A |
| Calculated MOCP | (2.25 × 10 A) + 2 A + 8 A = 32.5 A |
| Selected breaker | 30 A (22.5 A < 30 A < 32.5 A) |

## Special considerations for inductive loads

Inductive loads, primarily motors and compressors, present starting currents that can reach 6 to 8 times the FLA value during the first 100 ms / 0.1 s to 500 ms / 0.5 s of energization. The LRA of the compressor in the practical example is estimated at 8 × 10 A = 80 A. This starting current, although brief, must be withstood by the thermal-magnetic circuit breaker without causing tripping. Type C or D curve breakers are specifically designed for this purpose: curve C withstands peaks of 5 to 10 times the rated current, while curve D withstands 10 to 14 times the rated current, making it suitable for motors with heavy starting. The coordination between thermal protection (overload) and magnetic protection (short circuit) prevents both nuisance tripping during starting and lack of protection during an actual fault.

| Trip curve | Magnetic trip range | Characteristic application |
| --- | --- | --- |
| B | 3 to 5 × In | Resistive loads, lighting, general wiring |
| C | 5 to 10 × In | Small motors, compressors, receptacles |
| D | 10 to 14 × In | High starting torque motors, transformers |

## Frequently Asked Questions (FAQ)

1. By what factor is the FLA directly related to the MCA? The FLA is approximately 80% of the MCA value, expressed as FLA ≈ 0.80 × MCA.

2. How many times the FLA can the locked rotor current reach? The LRA typically reaches 8 times the FLA under locked rotor conditions at rated voltage.

3. What current value does the MOCP establish when there is a main motor and other loads? The MOCP is defined as (2.25 × FLA of the largest motor) plus the sum of the FLA of other motors plus all resistive loads.

4. What is the percentage margin that the MCA applies over the motor and heater current? The MCA incorporates a 25% margin over the sum of the motor FLA and the heater current, resulting in MCA = 1.25 × (FLA_motor + I_heater).

5. From what multiple of the rated current does a curve C breaker trip instantaneously? A curve C breaker trips instantaneously by magnetic action when the current exceeds between 5 and 10 times the rated current (In).

6. What standardized breaker size corresponds if the calculated MOCP is 27.2 A? A 25 A breaker corresponds if this value is greater than the MCA and does not exceed the calculated MOCP of 27.2 A.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
