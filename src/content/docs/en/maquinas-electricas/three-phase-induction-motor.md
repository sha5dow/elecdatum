---
title: "Three-phase induction motor characteristics"
sidebar:
  label: "Three-phase induction motor characteristics"
description: "Technical reference: Three-phase induction motor characteristics"
keywords: ["three phase induction motor characteristics specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "three-phase-induction"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
The three-phase induction motor, also known as the three-phase asynchronous motor, is the most widely used rotating electrical machine in industrial applications. It converts three-phase alternating current electrical energy into mechanical energy using a rotating magnetic field. It stands out for its self-starting capability, robust construction, and minimal maintenance, typically operating at voltages of 400 V / 460 V and frequencies of 50 Hz or 60 Hz, with power ratings ranging from fractions of a kilowatt to several hundred kilowatts.

The operating principle is based on the creation of a rotating magnetic field in the stator that induces currents in the rotor, generating torque that accelerates the rotor until it reaches a speed slightly below synchronous speed, with a typical full-load slip between 2 % and 5 %.

When the three-phase stator winding is energized, a magnetic field is generated that rotates at synchronous speed (Ns). The flux lines cut the rotor conductors, inducing an electromotive force (emf) according to Faraday's law. If the rotor circuit is closed —as occurs in a squirrel-cage rotor— a current flows which, by interacting with the stator field, produces electromagnetic torque. By Lenz's law, the rotor rotates in the same direction as the magnetic field, but never reaches synchronous speed. If the rotor were to match that speed, the speed difference would disappear and no voltage would be induced, resulting in zero torque. This speed difference is called slip (s) and is essential for torque production.

## Construction

The three-phase induction motor consists of two main parts: the stator (stationary part) and the rotor (moving part). The air gap between them is small, typically 0.35 mm to 2 mm / 0.014 in to 0.079 in, to minimize magnetizing current.

The stator is formed by a laminated steel core with slots on its inner periphery that house a distributed three-phase winding. This winding is connected to the power supply and is designed to produce a rotating magnetic field with a defined number of poles according to the desired speed.

The most common rotor is the squirrel-cage type. It consists of a cylindrical laminated steel core with skewed slots inclined with respect to the axis, in which aluminum or copper bars are placed, short-circuited at both ends by end rings. The skewing of the slots reduces magnetic noise and helps avoid torque dead points during starting.

## Speed and slip

Synchronous speed is determined by the supply frequency and the number of poles of the stator winding, expressed as:

> **Ns = 120 × f / P**

where Ns is synchronous speed in revolutions per minute (rpm), f is the supply frequency in Hz, and P is the number of motor poles. The following table shows the most common synchronous speeds for 50 Hz and 60 Hz networks.

| Number of poles | Synchronous speed at 50 Hz / 60 Hz |
| --- | --- |
| 2 | 3000 rpm / 3600 rpm |
| 4 | 1500 rpm / 1800 rpm |
| 6 | 1000 rpm / 1200 rpm |
| 8 | 750 rpm / 900 rpm |
| 10 | 600 rpm / 720 rpm |
| 12 | 500 rpm / 600 rpm |

Slip (s) is the relative difference between synchronous speed (Ns) and the actual rotor speed (Nr):

> **s = (Ns – Nr) / Ns**

It is often expressed as a percentage. At full load, the slip of standard squirrel-cage motors ranges from 1 % (large motors) to 6 % (small motors). The rotor speed under operation is therefore Ns × (1 – s).

## Power factor

The power factor of a three-phase induction motor varies from values as low as 0.15 at no load to 0.84‑0.91 at full load, depending on the rated power and number of poles. The motor always operates with a lagging (inductive) power factor because it requires reactive current to create the magnetic field.

Power factor (PF) is defined as the ratio of active power (P) to apparent power (S), or as the cosine of the phase angle (φ) between voltage and current:

> **PF = P / S = cos φ**

For a balanced three-phase system, it is calculated from line quantities:

> **PF = P / (√3 × U × I)**

where P is active power in watts (W), U is line voltage in volts (V), and I is line current in amperes (A).

The following table presents typical power factors for 1800 rpm motors (4 poles, 60 Hz) as a function of load level and power range.

| Power range (hp / kW) | Speed (rpm) | Power factor at no load | Power factor at 1/4 load | Power factor at 1/2 load | Power factor at 3/4 load | Power factor at full load |
| --- | --- | --- | --- | --- | --- | --- |
| 0 – 5 hp / 0 – 3.73 kW | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.72 | 0.82 | 0.84 |
| 5 – 20 hp / 3.73 – 14.91 kW | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.74 | 0.84 | 0.86 |
| 20 – 100 hp / 14.91 – 74.57 kW | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.79 | 0.86 | 0.89 |
| 100 – 300 hp / 74.57 – 223.7 kW | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.81 | 0.88 | 0.91 |

These values show how the power factor improves significantly as load and motor rated power increase. Operating a large motor under light load causes a low power factor and results in penalties on the electricity bill.

## Torque and starting characteristics

The typical starting torque of a standard three-phase squirrel-cage induction motor (NEMA B design or equivalent) is 150 % to 200 % of rated torque, with a starting current of 6 to 8 times the full-load rated current.

When the motor is connected directly to the line, the current peak is high because the rotor is stationary, the slip is unity, and the impedance is minimal. As the rotor accelerates, the current decreases until it stabilizes at the running value. The characteristic torque-speed curve shows a defined starting torque (Tstart), a maximum torque (Tmax) that can reach 250‑300 % of rated, and the rated torque (Tn) delivered at the operating speed with the design slip.

The motor is inherently self-starting; it does not require auxiliary windings or special devices to start rotation, provided the opposing load at start does not exceed the available torque.

## Efficiency and losses

The efficiency of a three-phase induction motor ranges from 80 % for powers below 5 kW (≈ 6.7 hp) to over 95 % for large machines, depending on the number of poles and the insulation class. Losses are classified as stator and rotor copper losses (I²R), core losses (hysteresis and eddy currents), mechanical losses due to friction and windage, and additional stray losses.

High-efficiency motors (IE3, IE4) reduce losses through increased copper content, better magnetic steel properties, and optimized rotor design, achieving efficiencies up to 3‑5 % higher than standard motors.

## Typical applications

Thanks to their robustness, economy, and minimal maintenance, three-phase induction motors are widely used in centrifugal pumps, fans, compressors, conveyor belts, agitators, machine tools, hoisting systems, and all types of fixed industrial machinery. They are the preferred choice when three-phase power is available and fixed-speed operation is required.

## Advantages and limitations

Key advantages:
- Self-starting without auxiliary windings.
- Simple and robust construction, with a single moving part (rotor) without brushes or commutator.
- Low acquisition cost and minimal maintenance.
- Wide range of standardized powers and speeds.
- Quiet operation with low electromagnetic interference generation.

Main limitations:
- High starting current (6 to 8 times rated), which can cause voltage drops in weak networks.
- Low power factor, especially at partial loads, requiring reactive compensation.
- Speed dependent on line frequency and load, with limited control without a variable frequency drive.
- Slip varies with load, preventing precise position control without additional systems.

## Frequently Asked Questions (FAQ)

### What is slip and why is it necessary?
Slip is the relative difference between the synchronous speed of the magnetic field and the rotor speed. It is indispensable because without a speed difference no voltage would be induced in the rotor and, consequently, no torque would be generated.

### How is the direction of rotation of a three-phase induction motor reversed?
Simply interchange any two of the three supply phases. This reverses the sequence of the rotating field and, consequently, the direction of rotor rotation.

### Why is the power factor so low at no load?
At no load, the motor draws mainly reactive current to magnetize the core, while active power is very small. The ratio of active to apparent power drops, resulting in power factors of 0.15 to 0.20.

### What happens if the motor constantly operates under light load?
An oversized motor running at partial load exhibits low efficiency and a very poor power factor. Energy is wasted, and if the power factor falls below 0.95, electric utilities typically apply financial penalties.

### Can the speed of a three-phase induction motor be varied?
Yes, using a variable frequency drive (VFD) that adjusts the supply frequency and voltage, allowing precise speed control. This is the most efficient solution for applications requiring variable speed.

### What is the expected service life of a three-phase induction motor?
With basic maintenance (cleaning, bearing lubrication, and temperature monitoring), these motors can easily exceed 20 000 hours of continuous operation, and in well-maintained applications they can reach over 50 000 hours.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/working-principle-of-three-phase-induction-motor/
