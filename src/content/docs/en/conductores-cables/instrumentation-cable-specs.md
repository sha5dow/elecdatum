---
title: "Instrumentation cable specifications"
sidebar:
  label: "Instrumentation cable specifications"
description: "Technical reference: Instrumentation cable specifications"
keywords: ["instrumentation cable specifications shielded", "conductores-cables"]
category: "conductores-cables"
topic: "cable-types"
subcategory: "instrumentation-cable"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Instrumentation cables are designed to transmit low-level signals (analog, digital, or control) in industrial environments with high electromagnetic interference (EMI). They incorporate shielded twisted pairs that reduce inductive and capacitive coupling. According to ISA‑ANSI S5.1, they are identified by codes such as FT (flow transmitter) or TT (temperature transmitter), always accompanied by a unique number. The typical rated voltage is 600 V and they are installed in cable trays (TC‑ER) or conduits.

## Construction
The described cable (Southwire reference SPEC43604) has the following configuration:

1. **Conductor**: bare soft copper, class B stranding, compatible with compression and screw terminals.  
2. **Insulation**: PVC type TFN (thermoplastic fixture wire nylon) with high dielectric strength, colored according to ICEA code for pair identification.  
3. **Twisted pair**: two insulated conductors are twisted with uniform lay; each pair is wrapped with optional separator tape.  
4. **Overall shield**: heat-bonded aluminum/polyester tape with 25% overlap and a tinned copper drain wire in intimate contact with the metallic face.  
5. **Outer jacket**: high-impact PVC, gray color, resistant to oils, chemicals, and UV radiation.

## Materials

| Component            | Material                                                                 |
| -------------------- | ------------------------------------------------------------------------ |
| Conductor            | Bare soft copper (ASTM B3 / B8)                                         |
| Primary insulation   | PVC type TFN (thermoplastic + nylon layer)                               |
| Shield element       | Aluminum/polyester tape 12 µm / 0.47 mil + tinned copper drain wire      |
| Filler / separator   | Polypropylene compound (optional depending on number of pairs)           |
| Outer jacket         | High-grade PVC, gray color, UV stabilized                                  |

## Technical Specifications

| Parameter                    | Value                                                               |
| ---------------------------- | ------------------------------------------------------------------- |
| Maximum rated voltage        | 600 V / 600 V                                                       |
| Maximum conductor temperature | 105 °C / 221 °F (TFN insulation)                                    |
| Minimum installation temperature | −20 °C / −4 °F                                                    |
| Conductor gauge              | 18 AWG (0.82 mm²) / 0.82 mm² – 14 AWG (1.63 mm²) per order         |
| Insulation thickness         | 0.38 mm / 0.015 in (for 18 AWG)                                     |
| Jacket thickness             | 0.80 mm / 0.031 in (nominal)                                        |
| Outer diameter (1 pair)      | 7.0 mm / 0.276 in                                                   |
| Outer diameter (2 pairs)     | 9.0 mm / 0.354 in                                                   |
| Minimum bending radius       | 8× outer diameter (56 mm / 2.2 in for 1 pair)                       |
| Net weight (1 pair)          | 68 kg/km / 45.7 lb/1000 ft                                          |
| Tensile strength             | 150 N / 33.7 lbf per conductor                                      |

## Electrical Properties

| Property                                   | Typical value (20 °C)                                                |
| ------------------------------------------ | -------------------------------------------------------------------- |
| Conductor resistance (18 AWG)              | 21.8 Ω/km / 6.64 Ω/1000 ft                                          |
| Insulation resistance                      | > 5000 MΩ⋅km / > 800 MΩ⋅1000 ft (pair‑to-ground, 500 V dc)          |
| Mutual capacitance (1 kHz)                 | 98 nF/km / 29.9 nF/1000 ft                                          |
| Unbalanced capacitance (pair‑to‑ground)    | 1.6 pF/m / 0.49 pF/ft                                                |
| Routine applied voltage                    | 2.0 kV ac / 2.0 kV ac for 5 min (conductor‑conductor)                |
| Characteristic impedance (at 1 MHz)        | 100 Ω ±15 % / 100 Ω                                                  |
| Maximum attenuation (at 1 MHz)             | 2.0 dB/100 m / 6.1 dB/1000 ft                                       |
| Shield effectiveness (30 MHz‑1 GHz)        | > 40 dB / > 40 dB                                                    |

## Applicable Standards

| Standard                | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| UL 2250                 | Instrumentation Cable (type PLTC/ITC)                                 |
| UL 13                   | Power‑Limited Circuit Cable (insulation components)                   |
| ICEA S‑73‑532           | Standard for Control, Thermocouple and Instrumentation Cables         |
| NEC 725 / 727           | Class 2, Class 3 and ITC cable                                       |
| CSA C22.2 No. 239       | Instrumentation and Control Cable (Canadian recognition)              |
| IEEE 383                | Vertical tray flame propagation test                                  |
| RoHS 3 (EU 2015/863)    | Hazardous substances compliance                                       |

## Applications

- 4‑20 mA process control loops and thermocouple/RTD signals.
- Connection of transmitters, actuators, and valve positioners.
- SCADA, DCS, and PLC systems in refineries, chemical plants, and power generation.
- Smart buildings with BACnet or Modbus RS‑485 networks.
- Outdoor installations in exposed cable trays (UV resistant).
- Environments with risk of interference from variable frequency drives (VFDs).

Good practice requires maintaining a minimum separation of 75 mm / 3 in from parallel power circuits, and connecting the shield at both ends to ground while ensuring electrical continuity. For frequencies above 1 MHz, a 360° circumferential contact through the cable gland or connector is mandatory.

## Frequently Asked Questions (FAQ)

### What is the maximum operating voltage of these cables?
   The maximum rated insulation voltage is 600 V, suitable for class ITC and PLTC circuits per NEC, with a dielectric safety margin tested at 2 kV ac for 5 min.

### What ambient temperature range do they withstand?
   PVC type TFN insulation ranges from −20 °C / −4 °F during installation to 105 °C / 221 °F in continuous operation; for extreme environments, versions with XLPE up to 125 °C are available.

### How is the minimum bending radius determined?
   A factor of 8 times the cable outer diameter is applied, e.g., 56 mm / 2.2 in for an 18 AWG pair; tighter bends can deform the insulation and shield.

### What type of shield offers the best protection against interference?
   The combination of aluminum/polyester tape with 25% overlap and a tinned copper drain wire provides 100% optical coverage, achieving effectiveness greater than 40 dB in the 30 MHz to 1 GHz range.

### Can this cable be used in explosive atmospheres?
   Yes, when installed with certified Ex‑e or Ex‑d cable glands and respecting maximum currents; the cable meets low halogen emission and flame propagation requirements per IEEE 383, suitable for Class I, Division 2 zones.

### What is the typical mutual capacitance and why is it important?
   Mutual capacitance is 98 nF/km / 29.9 nF/1000 ft at 1 kHz, which limits distortion in milliampere analog signals and defines the maximum current loop length to avoid signal attenuation below 1% of full scale.

## References

- **southwire.com**: https://www.southwire.com/wire-cable/instrumentation/600v-cu-pvc-tfn-pairs-pvc-spos-instrumentation/p/SPEC43604

