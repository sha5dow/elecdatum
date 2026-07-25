---
title: "Lightning arrester specifications"
sidebar:
  label: "Lightning arrester specifications"
description: "Technical reference: Lightning arrester specifications"
keywords: ["lightning arrester specifications rating", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "surge-protection"
subcategory: "lightning-arrester"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

A typical lightning arrester can divert lightning currents exceeding 100 kA / 100 kA peak, protecting the insulation and conductors of electrical and telecommunications systems against transient overvoltages. The device, also called a surge arrester or lightning diverter, is connected between the high-voltage line and ground. In the event of a lightning impulse or switching operation, the arrester diverts the excess current to ground and limits the voltage applied to the equipment, preventing its deterioration or destruction.

A lightning arrester uses materials with nonlinear electrical resistance. During normal operation, its impedance is extremely high and only a leakage current of the order of 1 mA / 1 mA flows. When an overvoltage exceeds a sparkover threshold, the resistance drops sharply, allowing the discharge current to pass. In zinc oxide models, the absence of a spark gap eliminates the triggering delay time. The transient overvoltage induced in an inductive load can be approximated by the formula:

> **V_transient = L × (di/dt)**

| Variable | Description | Unit |
| --- | --- | --- |
| V_transient | Induced transient voltage | V |
| L | Load inductance | H |
| di/dt | Rate of change of interrupted current | A/s |

## Construction of a zinc oxide lightning arrester

The active element of a ZnO arrester consists of a stack of zinc oxide ceramic discs, whose quantity is proportional to the nominal voltage of the network. The stack is housed inside a cylindrical porcelain or silicone polymer housing and is kept strongly compressed by a high-pressure spring anchored to the top cover. The line terminal protrudes from the top cover, while the ground terminal comes out of the bottom cover. The housing may incorporate a pressure relief valve that vents gases in case of internal fault, preventing the insulator from exploding.

## Technical specifications

Lightning arresters used in substations have a typical energy absorption capacity of 5 kJ / 4.7 BTU in a single 4/10 µs impulse, and operating parameters that are selected according to the maximum continuous voltage of the system.

| Parameter | Typical value |
| --- | --- |
| Rated voltage (Ur) | 3 kV to 800 kV / 3 kV to 800 kV |
| Continuous operating voltage (Uc) | 2.4 kV to 640 kV / 2.4 kV to 640 kV |
| Nominal discharge current (In) – 8/20 µs wave | 5 kA, 10 kA, 20 kA / 5 kA, 10 kA, 20 kA |
| Lightning impulse current (Iimp) – 10/350 µs wave | 25 kA / 25 kA |
| Energy absorption capacity (single line) | 2 kJ to 20 kJ / 1.9 BTU to 19 BTU |
| Residual voltage (Ures) at nominal In value | 1.5 to 3 times Ur / 1.5 to 3 times Ur |
| Discharge class according to IEC 61643-11 | Class I, II or III |
| Active material | Zinc oxide (ZnO) |
| Housing material | Porcelain or silicone polymer |
| Service ambient temperature | -40 °C to +55 °C / -40 °F to +131 °F |
| Maximum installation altitude without derating | 1000 m / 3280 ft |

## Frequently Asked Questions (FAQ)

### What is the difference between a lightning arrester and a surge arrester?

Both terms refer to the same main equipment, although “surge arrester” is usually reserved for devices installed in indoor electrical panels and “lightning arrester” for those mounted on overhead lines or substations.

### Why is zinc oxide used instead of silicon carbide?

ZnO offers a highly nonlinear voltage-current characteristic, does not require a spark gap, responds in nanoseconds, and dissipates more energy per unit volume, allowing the manufacture of more compact and reliable arresters.

### How is the rated voltage of a lightning arrester selected?

It is chosen so that the continuous operating voltage Uc exceeds the maximum phase-to-ground voltage expected in permanent service, including temporary overvoltages, and that the resulting residual voltage is lower than the withstand voltage of the protected equipment.

### What do the 8/20 µs wave and the 10/350 µs wave represent in the specifications?

They are standardized impulse waveforms: the 8/20 µs wave simulates switching impulses and induced lightning with a front time of 8 µs and tail time of 20 µs, while the 10/350 µs wave reproduces a direct lightning strike with a front of 10 µs and tail of 350 µs.

### Do lightning arresters require periodic maintenance?

Sealed porcelain or polymer ZnO arresters do not require routine maintenance, although it is recommended to visually inspect the integrity of the housing and verify the ground connection every 12 months / every 12 months in highly polluted environments.

### Can a lightning arrester be installed at any altitude?

The housing and discs withstand higher altitudes, but the dielectric cooling of the air decreases, so manufacturers provide correction factors; beyond 1000 m / 3280 ft it is usually necessary to derate the continuous operating voltage.

## References
- **electrical4u.com**: https://www.electrical4u.com/surge-protection-and-lightning-arrester-surge-arrester/
