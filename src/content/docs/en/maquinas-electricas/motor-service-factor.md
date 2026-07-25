---
title: "Motor service factor"
sidebar:
  label: "Motor service factor"
description: "Technical reference: Motor service factor"
keywords: ["motor service factor explanation calculation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "motor-service-factor"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The service factor, abbreviated as **SF**, is a measure of the periodic overload capacity of an electric motor defined by the NEMA MG 1 standard. Its standard value for totally enclosed fan-cooled (TEFC) motors is **1,0**, indicating that the motor can deliver exactly its nameplate rated power without additional margin for continuous overloads. A service factor greater than 1,0, such as **1,15**, means that the motor can temporarily operate at a power up to 15 % above the rated power without immediate damage, provided that rated voltage and frequency are maintained.

## Service factors for open drip‑proof motors

Open drip‑proof motors, according to NEMA, have service factors that depend on the rated power and synchronous speed. The following table shows the values for powers from **1/6 hp to 1 1/2 hp and above**, where the smallest motors reach a **maximum SF of 1,35**.

| Motor power [hp / kW] | Service factor – SF at synchronous speed |
| --- | --- |
| Synchronous speed [rpm] | 3600 | 1800 | 1200 | 900 |
| 1/6 hp / 0,12 kW | 1,35 | 1,35 | 1,35 | 1,35 |
| 1/4 hp / 0,19 kW | 1,35 | 1,35 | 1,35 | 1,35 |
| 1/3 hp / 0,25 kW | 1,35 | 1,35 | 1,35 | 1,35 |
| 1/2 hp / 0,37 kW | 1,25 | 1,25 | 1,25 | 1,25 |
| 3/4 hp / 0,56 kW | 1,25 | 1,25 | 1,15 | 1,15 |
| 1 hp / 0,75 kW | 1,25 | 1,15 | 1,15 | 1,15 |
| 1 1/2 hp and above / ≥1,12 kW | 1,15 | 1,15 | 1,15 | 1,15 |

## Service factor in totally enclosed motors (TEFC)

NEMA standard establishes a fixed service factor of **1,0** for all totally enclosed fan-cooled (TEFC) motors, regardless of their power or speed. This means that these motors do not have continuous overload capacity and must be sized for the exact power required by the load.

## Design power calculation

The design power *P<sub>D</sub>* that a motor can deliver under temporary overload conditions is obtained by multiplying the service factor by the nameplate rated power. The explicit formula is:

> **P<sub>D</sub> = SF × P**

| Variable | Symbol | Unit | Description |
| --- | --- | --- | --- |
| Design power | P<sub>D</sub> | hp or kW | Maximum permitted power in continuous service with overload |
| Service factor | SF | dimensionless | Multiplier factor according to NEMA for the motor type |
| Rated power | P | hp or kW | Mechanical power at the shaft indicated on the motor nameplate |

For example, a **1 hp / 0,75 kW** motor with **SF = 1,15** can operate intermittently at a design power of **1,15 hp / 0,86 kW** without overheating, provided that voltage and frequency are rated. Continuous maintenance of this overload is not recommended.

## Consequences of operation above the service factor

Starting or permanently operating with loads that exceed the design power shortens the motor's useful life, especially that of the insulation and bearings. The operating temperature rises approximately **10 °C / 18 °F** for each **10 % sustained overload**, which accelerates the aging of the varnishes and reduces dielectric strength. Although the service factor provides a safety margin, its continuous use reduces life expectancy according to the classic Arrhenius rule: insulation life is halved for every **10 °C / 18 °F** of permanent increase in operating temperature.

## Application recommendations

Correct motor selection requires that the design power *P<sub>D</sub>* covers **100 % of the expected maximum demand**, leaving the service factor as a reserve for occasional peaks. Motors with **SF = 1,0** must completely avoid any sustained overload, as they lack thermal margin. In installations where the load varies predictably, motors with **SF = 1,15** can be used for heavy starts or brief fluctuations, but never as a substitute for a motor with higher rated power.

## Frequently asked questions (FAQ)

### What does a service factor of 1.15 mean in an electric motor?
It means that the motor can be temporarily overloaded up to **15 % above its rated power**, delivering **1,15 times the nameplate power** without immediate risk of deterioration, provided that voltage and frequency are rated.

### Is it advisable to operate a motor continuously at its maximum service factor?
No. Continuous operation with overload, even within the declared SF, raises the operating temperature and reduces the insulation life. NEMA warns that a motor operating permanently at **SF > 1,0** will have a lower life expectancy than one operated at its rated power.

### How does the service factor affect motor life?
Each additional **10 °C / 18 °F** in winding temperature, caused by frequent overloads, halves the life of the insulation system. Therefore, abusing the service factor leads to premature failures.

### Do all motors have a service factor greater than 1.0?
No. Totally enclosed (TEFC) motors defined by NEMA have a **standard SF of 1,0**, meaning they do not allow continuous overload. Only certain open drip‑proof motors have service factors of **1,15, 1,25, or 1,35** according to their size and speed.

### What is the difference between service factor and power factor?
The service factor indicates the mechanical overload capacity of the motor, while the power factor measures how efficiently the electric current is converted into useful work. A motor can have a high service factor and, simultaneously, a low power factor.

### How is the design power calculated from the service factor?
The design power is obtained by multiplying the nameplate rated power by the service factor: **P<sub>D</sub> = SF × P**. For example, a **2 hp / 1,5 kW** motor with **SF = 1,25** can deliver **2,5 hp / 1,9 kW** intermittently.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/service-factor-d_735.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
- **weg.net**: https://www.weg.net/institutional/AU/en/support/resources-and-tools
