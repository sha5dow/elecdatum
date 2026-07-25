---
title: "Synchronous and asynchronous generator types"
sidebar:
  label: "Synchronous and asynchronous generator types"
description: "Technical reference: Synchronous and asynchronous generator types"
keywords: ["generator types synchronous asynchronous", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "generators"
subcategory: "generator-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

AC electrical generators are classified according to the relationship between their rotor speed and the frequency of the generated voltage into **synchronous generators** and **asynchronous (induction) generators**. While in the synchronous generator the rotor rotates exactly at the speed of the rotating magnetic field, in the asynchronous generator there is a speed difference (slip) essential for the production of electromagnetic torque.

In both types of machine, an armature winding (normally in the stator) supplied with alternating current produces a rotating magnetic field. The rotation speed of this field, called **synchronous speed** *nₛ*, is given by:

> ***nₛ = 120 · f / p***

| Variable | Meaning | Unit |
|----------|--------------|--------|
| *nₛ* | Synchronous speed | rpm |
| *f* | Grid frequency | Hz |
| *p* | Number of magnetic poles | – |

In the synchronous generator, the rotor remains magnetically locked with this field and rotates at *nₛ*, while in the asynchronous generator the rotor must rotate at a speed *n* slightly higher than *nₛ* (generator mode) to induce rotor currents and generate electrical power.

## Synchronous generators

The synchronous generator uses a rotor supplied with direct current (independent excitation) or permanent magnets to create a fixed magnetic field relative to the rotor. Rotating in unison with the stator field, the frequency of the generated voltage maintains an exact relationship with the mechanical speed.

**Main types of synchronous generators**

| Type | Rotor characteristic | Typical application |
|------|---------------------------|-------------------|
| Salient-pole rotor | Projecting magnetic poles, large number of poles | Low-speed hydroelectric plants |
| Cylindrical (smooth) rotor | Distributed winding in slots, 2 or 4 poles | High-speed steam or gas turbine generators |

Excitation can be via brushes and slip rings, brushless systems, or permanent magnets, the latter option being common in variable-speed generators used in renewable energies.

## Asynchronous (induction) generators

The induction or asynchronous generator is a squirrel-cage or wound-rotor machine that, driven by a prime mover above synchronous speed, converts mechanical energy into electrical energy using the same principle as an induction motor. The difference *n – nₛ* is called slip *s* and in generator mode it takes negative values (normally between –0.5% and –5%). The active power delivered to the grid is proportional to this slip, reaching nominal power with |*s*| values on the order of 3%.

To excite the magnetic field, the induction generator requires an external source of reactive power. When connected to the electrical grid, it supplies the magnetizing current; in isolated applications, a capacitor bank is used to provide the necessary reactive power (self-excited generator).

## Compared technical characteristics

| Characteristic | Synchronous generator (smooth rotor, 2 poles) | Asynchronous generator (4 poles, 60 Hz) |
|----------------|-------------------------------------------|--------------------------------------|
| Synchronism speed | 3600 rpm (60 Hz) / 3000 rpm (50 Hz) | 1800 rpm (60 Hz) / 1500 rpm (50 Hz) |
| Nominal operating speed | 3600 rpm / 3000 rpm | ≈ 1860 rpm / 1550 rpm (|*s*| ≈ 3.3%) |
| Excitation | Independent DC or permanent magnets | Grid reactive or capacitor bank |
| Voltage regulation | Control via field current | Depends on the grid; off-grid requires additional regulation |
| Self-start capability | Yes (black start) | No; requires external source or pre-charged capacitors |
| Magnetizing current | ≤ 2% of nominal | 20% – 35% of nominal |

## Comparison of characteristic torques (generator/motor mode)

The torques developed by an asynchronous machine are identical in the motor and generator quadrants, so the table values apply to both modes. The data correspond to a NEMA B induction motor of 60 hp (45 kW) and 1725 rpm (~1800 rpm synchronous).

| Torque | Percentage of rated torque | Typical value |
|-----|----------------------------|--------------|
| Rated torque at full load | 100% | 248 N·m / 182.7 lb·ft |
| Starting torque (locked rotor) | 150% – 200% | 372 – 496 N·m / 274 – 366 lb·ft |
| Pull-up torque (minimum during acceleration) | 100% – 140% | 248 – 347 N·m / 183 – 256 lb·ft |
| Breakdown torque (maximum) | 200% – 300% | 496 – 744 N·m / 366 – 549 lb·ft |

## Typical applications

- **Synchronous generators:** thermal power plants, nuclear plants, hydroelectric plants, emergency generator sets, cogeneration systems, marine and aeronautical applications where precise frequency and voltage control is required.
- **Asynchronous generators:** fixed or variable speed wind turbines, mini hydroelectric plants, regenerative braking systems in cranes and elevators, energy recovery in high-pressure gas expansion.

## Advantages and disadvantages

| | Synchronous generator | Asynchronous generator |
|---|---|---|
| Advantages | Independent reactive power control; black start capability; high efficiency; precise voltage and frequency regulation | Robust and economical construction; compact size per kW; does not require precise synchronization; allows direct connection to the grid without complex electronic equipment |
| Disadvantages | Requires excitation system and brush maintenance (except brushless); mandatory synchronization before connecting to the grid | Requires external reactive source; cannot start in island mode without capacitors; lower efficiency at partial loads; impossibility of direct control of generated voltage |

## Frequently Asked Questions (FAQ)

### What is the synchronous speed of a 4-pole generator connected to a 60 Hz grid?
   The exact synchronous speed is 1800 rpm. For a frequency of 50 Hz, the corresponding speed would be 1500 rpm. An asynchronous generator of the same polarity must rotate slightly above these figures, for example at 1860 rpm (60 Hz) to deliver its rated power.

### What slip does an induction generator present at full load?
   The slip in generator mode is between –3% and –5% of synchronous speed. For a synchronous speed of 1800 rpm, a speed of 1860 rpm corresponds to a slip of –3.3%.

### What percentage of rated current does an induction generator consume as magnetizing current?
   The magnetizing current represents between 20% and 35% of the full load current, which forces proper sizing of the reactive power source when the generator works in isolation.

### What is the maximum torque that an asynchronous generator can develop before becoming unstable?
   The breakdown torque is typically between 2 and 3 times the rated torque. For a 60 hp (45 kW) generator with a rated torque of 248 N·m / 182.7 lb·ft, the maximum torque would be between 496 N·m / 366 lb·ft and 744 N·m / 549 lb·ft.

### What value of capacitance does a self-excited induction generator require to operate off-grid?
   The required capacitance varies with the power and voltage of the generator, but as a reference a 10 kW generator at 400 V may need a capacitor bank on the order of 2.5 kvar to 5 kvar, depending on the load and desired power factor.

### Above what minimum speed does a 6-pole asynchronous generator start delivering power at 50 Hz?
   The synchronous speed is 1000 rpm. Generation begins when the speed exceeds 1000 rpm, and rated power is reached at an approximate speed of 1030 rpm (slip of –3%).

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
- **electrical4u.com**: https://www.electrical4u.com/induction-generator/
