---
title: "Variable frequency drive fundamentals"
sidebar:
  label: "Variable frequency drive fundamentals"
description: "Technical reference: Variable frequency drive fundamentals"
keywords: ["VFD variable frequency drive basics", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "vfd-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## What is a variable frequency drive?

A variable frequency drive (VFD) is a solid-state electronic device that regulates the speed and torque of an alternating current motor by modifying the frequency and voltage of the electrical supply. It also controls acceleration and deceleration ramps during start-up and shutdown. It is also known as a frequency converter, speed variator, AC drive, or VVVF converter (variable voltage, variable frequency). Modern VFDs are based on pulse width modulation (PWM) technique, whose commercial development began in Finland in the 1960s and became established in the 1980s.

## Operating principle

The VFD converts the fixed-frequency and fixed-voltage AC line voltage (e.g., 50 Hz / 60 Hz) into a DC voltage using a rectifier. Then a capacitive filter (DC link) smoothes the ripple, and finally an inverter chops that DC voltage generating a quasi-sinusoidal AC output of adjustable frequency and voltage. The voltage/frequency (V/f) ratio is kept constant below the motor's rated frequency to maintain magnetic flux within design limits; in this way torque can be controlled independently. Above the base frequency, the voltage is kept constant and torque decreases, entering the constant power region.

The synchronous speed of the motor depends directly on the supply frequency:

> **N_s = 120 · f / P**

where  
*N_s* = synchronous speed (rpm),  
*f* = supply frequency (Hz),  
*P* = number of motor poles.

The electronic control adjusts the frequency and, through PWM, generates a pulse train that the motor's inductance converts into a nearly sinusoidal current.

## Drive components

A typical voltage source type VFD consists of three fundamental stages plus the control system:

| Component         | Function                                                                 |
|-------------------|--------------------------------------------------------------------------|
| Rectifier         | Converts input AC voltage to DC; typically a three-phase 6-pulse diode bridge. |
| DC link           | Capacitive filter that stores energy and smoothes ripple, delivering a stable DC voltage to the inverter. |
| Inverter          | Bridge of semiconductor devices (IGBT, GTO) that switch at high frequency generating a modulated AC output. |
| Control system    | Microprocessor with feedback loops that executes PWM algorithms (SPWM, SVPWM) and maintains the desired V/f ratio. |

## Speed and torque equations

The actual rotor speed is obtained by subtracting slip from the synchronous speed. In practice, the VFD acts on frequency *f* and simultaneously on output voltage to keep the V/f ratio constant.

> **V / f ≅ constant** (for f ≤ f_rated)

The electromagnetic torque developed by the induction motor is proportional to flux and rotor current:

> **T = k · Φ · I₂**

where flux Φ ∝ V / f. By keeping V/f constant, the flux and torque capability are maintained throughout the speed range below rated frequency.

## Heat losses and cooling

A portion of the power passing through the drive is dissipated as heat. The thermal loss is calculated as:

> **H_loss = P_t · (1 − η_d)**

with *H_loss* in kW if *P_t* is in kW. In imperial units:

> **H_loss = P_t · 3412 · (1 − η_d)** [BTU/h]

Losses are typically between 2% and 6% of the nominal apparent power (kVA) of the equipment.  
The maximum ambient temperature for operation without forced cooling is **40 °C / 104 °F**. To evacuate heat in enclosed cabinets, a ventilation air flow rate is required.

Calculation example for a VFD transferring **50 kW** with efficiency **0.95**:

| Parameter                          | Formula / Value                       |
|------------------------------------|---------------------------------------|
| Transferred power *P_t*            | 50 kW / 67 hp                        |
| Efficiency *η_d*                   | 0.95                                  |
| Heat loss *H_loss*                 | 2.5 kW / 8530 BTU/h                   |
| Cooling air mass *m_air*           | 0.125 kg/s / 0.276 lb/s              |
| Volumetric flow rate at 20 °C      | 375 m³/h / 220 cfm                    |
| Volumetric flow rate at 40 °C      | 400 m³/h / 235 cfm                    |

The general ventilation formulas are:

> **m_air = H_loss / (c_p · ΔT)** [kg/s]

> **q_air = m_air / ρ_air** [m³/s]

with  
*c_p* = 1.005 kJ/(kg·°C) (specific heat of standard air),  
*ρ_air* = 1.205 kg/m³ at 20 °C / 0.075 lb/ft³.

## Typical applications

Variable frequency drives are used in any process requiring speed control or energy savings. Common applications include:

- Centrifugal pumps and pumping systems
- Fans and compressors
- Conveyors, elevators, and escalators
- Extruders, mills, and crushers
- HVAC systems

In these variable torque loads, speed reduction generates energy savings according to affinity laws (power absorbed varies with the cube of speed).

## Advantages of using variable frequency drives

- **Energy savings**: speed is adjusted to actual demand, eliminating losses from throttling or recirculation.
- **Precise process control**: allows regulation of speed, torque, acceleration, and deceleration.
- **Reduction of mechanical stress**: smooth starts and stops that extend the life of the motor and associated mechanics.
- **Lower starting current**: avoids high current peaks, reducing tariff penalties and voltage drop on the line.
- **Reduction of noise and vibrations**: especially at low speeds.
- **Possibility of eliminating mechanical elements**: replacement of mechanical drives, clutches, and gearboxes.

## Frequently Asked Questions (FAQ)

### What minimum power can a variable frequency drive handle?

Commercial VFDs are available from powers as low as 0.18 kW / 0.25 hp, suitable for small single-phase or three-phase motors used in applications such as light conveyor belts or dosing pumps.

### What is the typical energy efficiency of a modern variable frequency drive?

A current VFD achieves efficiencies between 95% and 98% at full load, depending on the rated power. Below 20% load, efficiency can drop to 90%.

### What percentage of rated power is lost as heat inside the drive?

Typically, the thermal loss represents between 2% and 6% of the nominal apparent power (kVA). For a 100 kVA unit, dissipation can range from 2 kW to 6 kW / 6824 BTU/h to 20472 BTU/h.

### What is the maximum ambient temperature without forced ventilation for a VFD?

Most manufacturers specify a maximum temperature of 40 °C / 104 °F in continuous operation without additional cooling. Above that value, it is necessary to reduce rated power (*derating*) or install forced ventilation.

### What carrier frequency does a VFD with PWM modulation use?

Common VFDs work with inverter switching frequencies between 2 kHz and 20 kHz. Low values (2-4 kHz) generate more audible noise but lower switching losses; high frequencies (12-20 kHz) silence the motor but increase inverter losses.

### How much energy can a VFD save in pumps and fans?

In installations with variable flow, reducing speed by 20% reduces absorbed power by approximately 50%, following the cubic affinity law. In pumping and ventilation systems, annual savings are typically between 30% and 60% compared to systems without speed control.

## Sources

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/variable-frequency-drives-d_656.html
- **electrical4u.com**: https://www.electrical4u.com/variable-frequency-drive/

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/variable-frequency-drives-d_656.html
- **electrical4u.com**: https://www.electrical4u.com/variable-frequency-drive/
