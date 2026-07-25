---
title: "DC power supply specifications"
sidebar:
  label: "DC power supply specifications"
description: "Technical reference: DC power supply specifications"
keywords: ["DC power supply specifications types", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "power-supplies"
subcategory: "dc-power-supply"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Output Voltage

The output voltage specifies the range of direct voltage that the power supply can deliver to the load. In adjustable laboratory power supplies, a typical value is 0 to 30 V, while fixed supplies often deliver values such as 5 V, 12 V, or 24 V. The voltage is expressed as a nominal value and with its adjustment tolerance, for example, ±(0.05% + 10 mV).

| Power supply type                     | Typical voltage range        |
|---------------------------------------|------------------------------|
| Adjustable linear laboratory          | 0–30 V / 0–30 V             |
| Fixed switching supply (5 V)          | 5,0 V ± 0,25 V / 5,0 V ± 0,25 V [VERIFY] |
| High-voltage programmable supply      | 0–600 V / 0–600 V [VERIFY]  |

## Output Current

The maximum current that the power supply can deliver continuously without exceeding its thermal limits or activating protections. In adjustable power supplies, the current can be limited by the user within the nominal range. A typical bench power supply offers 0 to 5 A, although models range from milliamperes to hundreds of amperes.

| Application                               | Typical maximum current      |
|-------------------------------------------|------------------------------|
| General purpose bench supply              | 5 A / 5 A                    |
| 12 V lead-acid battery charger            | 10 A / 10 A [VERIFY]         |
| High-power electroplating supply          | 300 A / 300 A [VERIFY]       |

## Line Regulation

Line regulation measures the power supply's ability to keep the output voltage constant in response to variations in the input voltage. It is expressed as a percentage plus a fixed value in millivolts. A quality linear power supply shows typical values below 0.01% + 1 mV for an input variation of ±10%.

> **Line regulation (%) = (ΔVout / Vout nominal) × 100**

| Input condition                           | Typical line regulation          |
|-------------------------------------------|----------------------------------|
| 230 V AC ± 10% (linear supply)            | < 0,01 % + 1 mV / < 0,01 % + 1 mV [VERIFY] |
| 230 V AC ± 10% (switching supply)         | < 0,1 % + 5 mV / < 0,1 % + 5 mV |
| 115 V AC – 230 V AC (universal range)     | < 0,2 % + 10 mV / < 0,2 % + 10 mV |

## Load Regulation

Indicates the variation in output voltage when the current demanded by the load changes from no-load to full load. Good load regulation is essential for powering sensitive circuits. Typical values in linear laboratory supplies are below 0.02% + 2 mV.

> **Load regulation (%) = (Vout no-load – Vout full-load) / Vout full-load × 100**

| Load change                       | Typical load regulation            |
|-----------------------------------|------------------------------------|
| 0–100% (linear supply)            | < 0,02 % + 2 mV / < 0,02 % + 2 mV [VERIFY] |
| 10–90% (switching supply)         | < 0,1 % + 10 mV / < 0,1 % + 10 mV |
| Very low power supplies           | < 0,5 % / < 0,5 %                  |

## Ripple and Noise

Ripple (residual AC component) and high-frequency noise superimposed on the DC output determine the purity of the supplied voltage. It is measured in root mean square (rms) or peak-to-peak (pp). Linear supplies achieve much lower noise values than switching supplies.

| Power supply technology   | Typical ripple (rms)                     |
|---------------------------|------------------------------------------|
| Linear laboratory         | < 1 mV / 0.001 V [VERIFY]                |
| Standard switching        | < 10 mV / 0.010 V [VERIFY]               |
| Low-noise switching       | < 5 mV / 0.005 V                         |

## Efficiency

The efficiency of a DC power supply is the ratio of output power to input power, expressed as a percentage. Switching supplies are significantly more efficient than linear supplies, with values that can exceed 90%, while a typical linear supply ranges around 50–65%.

| Power supply type                     | Typical efficiency at full load |
|---------------------------------------|---------------------------------|
| Linear supply with transformer        | 50–65 % / 50–65 % [VERIFY]      |
| Low-voltage switching supply          | 80–90 % / 80–90 %               |
| Switching supply with active PFC      | > 92 % / > 92 %                 |

## Protections

Built-in protections safeguard both the power supply and the load against abnormal conditions. The most common are overcurrent protection (OCP), overvoltage protection (OVP), over-temperature protection (OTP), and short circuit. OCP can be implemented as constant current limiting (CC) or as foldback.

| Protection               | Main function                                                 |
|--------------------------|---------------------------------------------------------------|
| Overcurrent (OCP)        | Limits the current to a predefined safe value (e.g. 110%)     |
| Overvoltage (OVP)        | Disconnects the output if the voltage exceeds a threshold (e.g. 120%) |
| Short circuit            | Keeps the current limited or shuts down the output without damage |
| Over-temperature (OTP)   | Reduces power or shuts down the supply when the maximum operating temperature is reached |

## Operating Modes

Most laboratory DC power supplies operate in two modes: constant voltage (CV) and constant current (CC). In CV mode, the voltage remains fixed and the current varies according to the load; in CC mode, the supply limits the current to a set value and the voltage automatically decreases to not exceed it.

| Mode | Control characteristic                  |
|------|-----------------------------------------|
| CV   | Vout constant, Iout ≤ I limit           |
| CC   | Iout constant, Vout ≤ V limit           |

## Transient Response

Transient response describes the time it takes for the output voltage to recover to its nominal value after a sudden load change. A power supply with good transient response minimizes voltage excursions. Typical recovery times are in the microsecond range for high-speed switching supplies.

| Load step | Typical recovery time        | Maximum voltage deviation      |
|-----------|------------------------------|--------------------------------|
| 50–100%   | < 50 µs / < 0.00005 s [VERIFY] | < 50 mV / < 0.05 V            |
| 10–90%    | < 100 µs / < 0.0001 s        | < 100 mV / < 0.1 V            |

## Frequently Asked Questions (FAQ)

### What is the typical ripple value in a linear laboratory power supply?
The typical ripple is below 1 mV rms (0.001 V), making it suitable for sensitive analog circuits.

### What efficiency does a modern switching power supply achieve?
A switching supply can achieve efficiencies above 90% at full load thanks to the switching operation of semiconductors.

### What is the standard line regulation in DC power supplies?
Line regulation is typically 0.01% + 1 mV for input variations of ±10%, a typical value for precision linear supplies.

### What maximum current does an economy bench power supply deliver?
Most economy bench supplies deliver up to 5 A, with a total output power around 150 W.

### How quickly does a switching supply recover after a 50% load change?
The typical recovery time is below 50 µs, with a maximum voltage deviation of 50 mV.

### What protection does a DC power supply include against short circuits?
It includes short circuit protection that limits the current to a safe value, typically 110% of the rated current, and suffers no permanent damage.

## References

 - https://en.wikipedia.org/wiki/Power_supply