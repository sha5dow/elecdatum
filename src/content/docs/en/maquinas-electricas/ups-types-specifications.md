---
title: "UPS types specifications"
sidebar:
  label: "UPS types specifications"
description: "Technical reference: UPS types specifications"
keywords: ["UPS types online offline line interactive", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "power-supplies"
subcategory: "ups-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
An uninterruptible power supply (UPS) provides emergency power with backup times typically ranging from 5 to 20 minutes, using batteries, flywheels, or supercapacitors to protect critical equipment. The three main types of UPS — Offline, Online, and Line-interactive — are distinguished by their topology, transfer time, and power conditioning capability, covering from domestic applications of 200 VA to industrial installations of several MVA.

## Offline UPS (Standby)

The Offline UPS, known as Standby, is the most economical solution and offers a transfer time of up to 25 ms when the mains voltage goes outside pre-set limits. In normal operation, the load is fed directly from the filtered mains; only in the event of an interruption or serious anomaly does the inverter activate and the static switch transfer the output to the battery.

| Parameter | Typical Value |
|---|---|
| Operating principle | Mains → filter → load; battery + inverter on standby |
| Transfer time | ≤ 25 ms |
| Battery autonomy | 5 – 20 min |
| Typical power range | 200 VA – 1 kVA |
| Voltage regulation | No (only surge protection) |
| Protection against electrical noise | Basic (passive filtering) |
| Relative cost | Low |

## Online UPS (Double conversion)

The Online UPS, also called double conversion, eliminates the transfer time because the inverter continuously feeds the load, with zero theoretical interruption milliseconds. The topology rectifies the AC input to DC and then inverts back to AC, keeping the battery permanently online; in real designs, phenomena such as inrush current can introduce delays of 4 – 6 ms.

| Parameter | Typical Value |
|---|---|
| Operating principle | Mains → rectifier → DC → inverter → load (battery always connected) |
| Transfer time | 0 ms (ideal); ≤ 6 ms in transients |
| Battery autonomy | Configurable (minutes to hours depending on battery bank) |
| Typical power range | 1 kVA – several MVA |
| Voltage regulation | Full (permanent stabilization) |
| Protection against electrical noise | Very high (galvanic isolation and active filtering) |
| Relative cost | High |

## Line-interactive UPS

The Line-interactive UPS adds a multi-tap transformer to the Offline design, achieving a transfer time that typically falls between 2 and 10 ms. This system keeps the inverter permanently connected to the output and dynamically regulates voltage (boost/buck) without switching to battery for moderate fluctuations.

| Parameter | Typical Value |
|---|---|
| Operating principle | Mains → autotransformer (regulation) + inverter online; battery activates only on serious fault |
| Transfer time | 2 – 10 ms |
| Battery autonomy | 5 – 20 min (typical for models ≤ 5 kVA) |
| Typical power range | 500 VA – 5 kVA |
| Voltage regulation | Yes (tap changer, boost/buck) |
| Protection against electrical noise | Medium (better filtering than Offline) |
| Relative cost | Medium |

## Specifications comparison

| Type | Switching Technology | Transfer Time | Voltage Regulation | Typical Power | Electrical Isolation | Relative Cost |
|---|---|---|---|---|---|---|
| Offline (Standby) | Relay / static switching | ≤ 25 ms | No | 200 VA – 1 kVA | No | Low |
| Line-interactive | Static switching + tap changer | 2 – 10 ms | Automatic boost/buck | 500 VA – 5 kVA | No | Medium |
| Online (Double conversion) | Continuous inverter | 0 ms (up to 6 ms transients) | Continuous and precise | 1 kVA – MVA | Yes (rectifier + inverter) | High |

## Typical applications

| UPS Type | Typical Applications |
|---|---|
| Offline | Household equipment, basic PCs, peripherals, point-of-sale terminals |
| Line-interactive | Small servers, workstations, commercial departments, network electronics |
| Online | Data centers, critical medical equipment, telecommunications, industrial processes, laboratories |

## Frequently Asked Questions (FAQ)

### Which type of UPS offers the shortest transfer time?
The Online UPS (double conversion) provides zero transfer time permanently, although under extreme transient conditions it can reach up to 6 ms.

### Which UPS is most suitable for protecting a small business server?
The Line-interactive, because it combines automatic voltage regulation, transfer time under 10 ms, and intermediate cost, sufficient for small and medium critical loads.

### What does double conversion mean in an Online UPS?
It means that the input power is rectified to direct current and then inverted back to alternating current, electrically isolating the load and ensuring clean, stable output voltage.

### Can an Offline UPS correct voltage sags or spikes?
It does not actively regulate voltage; it only switches to battery when the mains exceeds tolerance thresholds. Protection is limited to basic filtering against spikes and noise.

### What is the typical battery backup time of a household UPS?
Most Offline and Line-interactive UPS units up to 1 kVA offer battery backup times between 5 and 20 minutes, enough to safely shut down equipment or switch to a generator.

### Do Online UPS units consume more energy in normal operation?
Yes, the double conversion topology implies continuous losses in the rectifier and inverter, which reduces efficiency compared to Line-interactive or Offline systems, although the protection and power quality obtained usually justify the higher consumption.

## Sources Consulted

- **electrical4u.com**: https://www.electrical4u.com/ups-uninterruptible-power-supply/
