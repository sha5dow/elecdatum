---
title: "SPD surge protection device types"
sidebar:
  label: "SPD surge protection device types"
description: "Technical reference: SPD surge protection device types"
keywords: ["SPD surge protective device types class 1 2 3", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "surge-protection"
subcategory: "spd-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
Surge protective devices (SPDs) are classified according to their current diversion capacity, response time, and location in the electrical installation. IEC 61643-11 defines three main types: Type 1 (Class I), Type 2 (Class II), and Type 3 (Class III), each designed for a specific protection level against transient overvoltages of atmospheric origin or switching operations.

## Types of SPD According to Discharge Capacity

| SPD Type | Nominal Discharge (In) | Impulse Current (Iimp) | Protection Level (Up) | Typical Location |
| --- | --- | --- | --- | --- |
| Type 1 (Class I) | Not applicable (10/350 µs wave) | 12,5 kA / 12,5 kA a 50 kA / 50 kA | ≤ 2,5 kV / 2,5 kV | Main service entrance, main switch |
| Type 2 (Class II) | 5 kA / 5 kA a 20 kA / 20 kA (8/20 µs wave) | Not applicable | ≤ 1,5 kV / 1,5 kV | Secondary distribution panels |
| Type 3 (Class III) | 1 kA / 1 kA a 3 kA / 3 kA (combined wave 1,2/50 µs and 8/20 µs) | Not applicable | ≤ 1,0 kV / 1,0 kV a 1,2 kV / 1,2 kV | Power outlets, sensitive equipment |

## Construction and Operating Characteristics

| Characteristic | Type 1 | Type 2 | Type 3 |
| --- | --- | --- | --- |
| Main technology | Spark gap or high-power varistor | Metal oxide varistor (MOV) | Varistor, suppressor diode combined with filter |
| Extinction capacity | High follow current | Medium, without significant follow current | Low, fine protection |
| Response time | 25 ns to 100 ns | < 25 ns | < 1 ns |
| Short-circuit withstand | High (up to 50 kA / 50 kA) | Medium (up to 25 kA / 25 kA) | Low (additional fuse protection) |
| Mounting | Prominent DIN rail, robust enclosure | DIN rail, modular format | Direct plug or adapter base |

## Coordination Between SPD Types

Effective protection requires coordinating the three types in cascade. Type 1 diverts most of the energy from a direct strike (10/350 µs) at the building entrance, reducing the residual current. Type 2, installed downstream, handles the remaining energy and induced transients (8/20 µs). Type 3 protects very sensitive loads with a residual voltage level below 1,2 kV / 1,2 kV. The distance between stages must be at least 10 m / 32,8 ft to ensure proper decoordination of the protections, unless decoupling inductances are used.

## Selection of the Appropriate SPD Type

The selection depends on the level of exposure to lightning and the economic value of the equipment. In buildings with external lightning rods or overhead supply lines, a Type 1 SPD is mandatory at the head. In environments with their own substation or underground supply, a Type 2 + Type 3 combination is usually sufficient. The protection volume is defined by the wiring distance to the load; sections longer than 10 m / 32,8 ft require an additional SPD near the equipment. The maximum discharge current Imax of the Type 2 is sized according to the risk level: 40 kA / 40 kA for high incidence, 15 kA / 15 kA for standard residential installations.

## Frequently Asked Questions (FAQ)

### What is the difference between a 10/350 µs and 8/20 µs current wave?

The 10/350 µs wave simulates a direct lightning strike, with a rise time of 10 µs and a duration to 50% of 350 µs, while the 8/20 µs wave reproduces induced or switching overvoltages, with a rise time of 8 µs and a duration of 20 µs. Type 1 SPDs are tested with the former, Type 2 with the latter.

### Can I use only a Type 3 SPD throughout the installation?

It is not sufficient. The Type 3 cannot absorb the energy of a direct lightning strike and would be destroyed quickly. Its function is to refine protection at the point of use, but it must always be preceded by a Type 2 and, if there is a risk of direct impact, by a Type 1.

### How do I visually identify a Type 1 SPD in an electrical panel?

They are usually larger devices, with robust connection terminals for cable sections of 25 mm² / AWG 3 or more, and the data plate indicates "Iimp" with a value in kA and the 10/350 µs wave. They often have a varistor status indicator and remote signaling contact.

### What does Up mean in an SPD and how does it affect equipment protection?

Up (residual protection voltage) is the peak voltage value that the SPD lets through to the equipment during a transient. The lower it is, the better protected the device. For sensitive electronics, Up ≤ 1,2 kV / 1,2 kV is recommended, which corresponds to Type 3 devices.

### Is it mandatory to install an SPD according to electrical regulations?

In most countries, it is required by regulations in new constructions or major renovations, especially if the building has a lightning rod or is in an area of high thunderstorm activity. IEC 60364-5-53 specifies the cases and required protection levels.

### Do SPDs protect against permanent overvoltages?

No. SPDs act exclusively on short-duration transients (microseconds). For sustained overvoltages of minutes or hours, such as those caused by loss of neutral, overvoltage relays or combined over/under voltage protections are needed.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **electrical4u.com**: https://www.electrical4u.com/surge-protection-and-lightning-arrester-surge-arrester/
