---
title: "Synchronous motor characteristics"
sidebar:
  label: "Synchronous motor characteristics"
description: "Technical reference: Synchronous motor characteristics"
keywords: ["synchronous motor characteristics applications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "synchronous-motor"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

A synchronous motor is a rotating alternating current electrical machine that rotates at a constant speed directly proportional to the supply frequency, for example 1500 rpm for a 4-pole motor supplied at 50 Hz, and maintains this speed regardless of load within its torque limits.

Operation is based on the interaction between a rotating magnetic field generated in the stator by a three-phase alternating current and a constant magnetic field produced in the rotor (by permanent magnets or windings excited with direct current). When the rotor accelerates to synchronous speed, the electromagnetic poles of the rotor magnetically "lock" with the poles of the stator's rotating field, resulting in uniform torque and isochronous rotation.

## Synchronous speed

The synchronous speed of a synchronous motor is determined exclusively by the supply frequency and the number of poles of the machine, and is expressed by the following formula:

> **N_s = (120 · f) / P**

where:

| Variable | Meaning | Unit |
| --- | --- | --- |
| *N_s* | Synchronous speed | rpm (revolutions per minute) |
| *f* | Supply frequency | Hz (hertz) |
| *P* | Number of motor poles | ― |

The most common practical values are:

| Poles | 2 poles | 4 poles | 6 poles | 8 poles |
| --- | --- | --- | --- | --- |
| 50 Hz supply | 3000 / 3000 rpm | 1500 / 1500 rpm | 1000 / 1000 rpm | 750 / 750 rpm |
| 60 Hz supply | 3600 / 3600 rpm | 1800 / 1800 rpm | 1200 / 1200 rpm | 900 / 900 rpm |

## Torque characteristics

A synchronous motor produces constant torque during synchronized operation, but its transient behavior is evaluated through several torque values related to starting and overload capacity. Typical values expressed as multiples of nominal torque *T_n* are:

| Torque | Typical range (× T_n) | Example for T_n = 637 N·m / 470 lb·ft |
| --- | --- | --- |
| Starting torque | 1.5 – 2.0 | 955 – 1274 N·m / 704 – 940 lb·ft |
| Pull-in torque | 1.2 – 1.5 | 764 – 955 N·m / 563 – 704 lb·ft |
| Pull-out torque | 2.0 – 3.5 | 1274 – 2229 N·m / 940 – 1644 lb·ft |

Nominal torque is reached when the motor rotates at synchronous speed delivering the nominal mechanical power; the maximum torque is the point at which a higher load causes the rotor to lose synchronism.

## Types of synchronous motors

- **Permanent magnet synchronous motor (PMSM)**: rotor equipped with neodymium, samarium-cobalt, or ferrite magnets that generate a constant magnetic field without the need for electrical excitation.
- **Wound rotor synchronous motor (DC-excited)**: rotor with windings fed through slip rings and brushes, allowing adjustment of excitation and control of power factor.
- **Synchronous reluctance motor**: ferromagnetic rotor without magnets or windings; torque is produced by the rotor's tendency to align with the direction of minimum reluctance of the magnetic flux.
- **Hysteresis motor**: rotor made of magnetically hard material that is magnetized by hysteresis; provides smooth starting, quiet operation, and is used in low-power applications.

## Starting methods

The synchronous motor is not inherently self-starting, and synchronization is achieved mainly by three methods:

1. **Damper winding (squirrel cage)**: short-circuited bars in the rotor allow starting as an induction motor up to approximately 95% – 97% of synchronous speed, at which point direct current excitation is injected to synchronize the rotor.
2. **External auxiliary motor**: an induction or DC motor accelerates the synchronous motor to synchronous speed before electrical connection and excitation application.
3. **Variable frequency drive (VFD)**: the supply frequency is progressively increased from a low value, maintaining a constant voltage/frequency ratio, so that the rotor accelerates smoothly and remains in synchronism without slipping.

## Typical applications

Synchronous motors are used in processes that demand fixed speed, high efficiency, or power factor correction capability. Some representative applications are:

- Reciprocating compressors and high-power pumps (>35 kW).
- Ball mills, rolling mills, and crushers in mining.
- Marine propulsion with high torque density permanent magnet motors.
- Electrical generation as synchronous alternators in power plants.
- Constant speed railway traction systems.
- Clocks, timers, and precision servomechanisms in low power.

## Advantages and limitations

**Advantages**
- Absolutely constant speed, independent of load within the nominal torque range, ideal for synchronized processes.
- Ability to operate at unity or leading power factor, contributing to the power factor correction of the installation.
- Very high performance, with efficiencies above 95% for industrial-sized machines and values close to 98% in large PMSM motors.
- High torque density relative to volume, especially in permanent magnet motors.

**Limitations**
- They require additional starting equipment (damper windings or drives), which increases complexity and initial cost.
- Fixed speed without drive: not suitable for many applications requiring continuous regulation.
- Risk of loss of synchronism under overloads that exceed the pull-out torque.
- In wound rotor motors, maintenance of slip rings and brushes is necessary.

## Frequently Asked Questions (FAQ)

### What is the synchronous speed of a 4-pole motor at 60 Hz?
The synchronous speed is 1800 rpm when the supply operates at 60 Hz, calculated as N_s = (120 × 60) / 4; on 50 Hz supplies, the same motor would rotate at 1500 rpm.

### What efficiency can be expected from a 500 kW industrial synchronous motor?
A 500 kW (670 hp) synchronous motor typically achieves an efficiency of 96% – 97%, and in permanent magnet configurations can exceed 97% at full load.

### How is leading power factor achieved with a synchronous motor?
When the synchronous motor is excited with a field current greater than necessary to operate at unity power factor (overexcitation), the total absorbed current leads the voltage, delivering reactive power and bringing the power factor to values up to 0.95 leading.

### What maximum torque can a motor with 200 N·m nominal withstand without losing synchronism?
A synchronous motor with nominal torque of 200 N·m (147 lb·ft) can maintain synchronism up to a maximum torque of approximately 400 – 700 N·m (295 – 516 lb·ft), depending on the pull-out torque design margin.

### At what speed does a 6-pole synchronous motor rotate on a 50 Hz supply?
With a frequency of 50 Hz, the synchronous speed is 1000 rpm; on a 60 Hz supply the same motor would reach 1200 rpm.

### What is the approximate weight of a 750 kW synchronous motor at 1500 rpm?
A 750 kW (1000 hp) synchronous motor at 1500 rpm (4 poles) weighs between 2800 and 4500 kg (6200 – 9900 lb), with a more precise value around 3500 kg (7700 lb) in standard open ventilation frames.

## References

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
- **electrical4u.com**: https://www.electrical4u.com/synchronous-motor-working-principle/

