---
title: "Modbus protocol fundamentals"
sidebar:
  label: "Modbus protocol fundamentals"
description: "Technical reference: Modbus protocol fundamentals"
keywords: ["Modbus protocol RTU TCP basics", "sistemas-control"]
category: "sistemas-control"
topic: "communication-protocols"
subcategory: "modbus-protocol-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Modbus is an open, royalty-free serial fieldbus communication protocol widely used to interconnect industrial electronic devices, such as programmable logic controllers (PLCs), sensors, and actuators. It was first published in 1979 and its simplicity has made it a de facto standard in supervisory, control, and data acquisition (SCADA) systems.

Modbus was created in 1979 by the company Modicon (now part of Schneider Electric) specifically to connect its PLCs. Since 2004 it has been managed by the Modbus Organization, an association that maintains the protocol as an open standard. It operates under a client-server architecture (formerly master-slave): the client initiates transactions and the server responds, with up to 247 addressable servers on a serial network. The specification defines three main transport variants — asynchronous serial (RTU and ASCII) and Ethernet (TCP/IP) — enabling use over EIA‑485, RS‑232, fiber optics, or radio.

## Protocol Specifications

The following table summarizes the fundamental parameters of the Modbus protocol across its different transport layers.

| Parameter | Value |
|---|---|
| Maximum PDU size | 253 bytes |
| Maximum ADU size on serial network | 256 bytes |
| Maximum ADU size on TCP/IP | 260 bytes |
| Server address range (serial) | 1 to 247 (address 0 for broadcast) |
| Maximum nodes per RS‑485 segment without repeater | 32 |
| Maximum RS‑485 cable length | 1200 m / 3937 ft |
| Typical transmission speeds (serial) | 9600, 19200, 38400 bps (up to 115200 bps) |
| Default TCP port | 502 |

## Frame Structure

Each Modbus message consists of an **Application Data Unit (ADU)**, which encapsulates the **Protocol Data Unit (PDU)** together with medium-specific information. The PDU has a maximum length of 253 bytes and contains only the function code and associated data.

| Component | Size (serial RTU) | Size (TCP) | Description |
|---|---|---|---|
| Address | 1 byte | — (included in MBAP) | Destination server identifier |
| Function code | 1 byte | 1 byte | Requested operation (read/write) |
| Data | 0 to 252 bytes | 0 to 252 bytes | Addresses, values, register count |
| CRC / LRC | 2 bytes (CRC) | — | Error checking in serial |
| MBAP header | — | 7 bytes | Transaction ID, protocol, length, unit |

> **ADU = Address + PDU + Error check**
> **PDU = Function code + Data**

In RTU mode the frame is delimited by silence periods of at least 3.5 characters; in ASCII the colon character (:) is used as start and carriage return/line feed as end.

## Standard Function Codes

There are 21 public function codes in the Modbus specification. The following table shows the most commonly used in automation applications.

| Code (hex) | Function | Data type |
|---|---|---|
| 01 (0x01) | Read coils | Bit, physical output |
| 02 (0x02) | Read discrete inputs | Bit, physical input |
| 03 (0x03) | Read holding registers | 16 bits, output |
| 04 (0x04) | Read input registers | 16 bits, input |
| 05 (0x05) | Write single coil | Bit, output |
| 06 (0x06) | Write single register | 16 bits, output |
| 15 (0x0F) | Write multiple coils | Bits, output |
| 16 (0x10) | Write multiple registers | 16 bits, output |

Data addresses are referenced using predefined ranges: coils from 00001 to 09999, discrete inputs from 10001 to 19999, input registers from 30001 to 39999, and holding registers from 40001 to 49999, although within the PDU addressing always starts at zero.

## Transmission Modes

Modbus operates in three main transmission modes — RTU, ASCII, and TCP/IP — with response times and ranges from a few ms up to 1200 m (3937 ft) on RS‑485. The following table summarizes their differences.

| Characteristic | Modbus RTU | Modbus ASCII | Modbus TCP |
|---|---|---|---|
| Encoding | Binary | Hexadecimal ASCII | MBAP + binary PDU |
| Error checking | CRC‑16 | LRC | Ethernet CRC (transport layer) |
| Maximum frame length | 256 bytes | 513 characters (approx.) | 260 bytes |
| Typical speed | 9600–115200 bps | ≤ 19200 bps | 10/100/1000 Mbps |
| Maximum range | 1200 m / 3937 ft (RS‑485) | 1200 m / 3937 ft (RS‑485) | 100 m / 328 ft per Ethernet segment |
| Topology | Bus (daisy chain) | Bus (daisy chain) | Star (switched) |

RTU is the most bandwidth-efficient mode and the most common in industrial environments; TCP/IP allows direct integration with corporate networks and remote supervisory systems.

## Typical Applications

Modbus connects from 2 to 247 devices on the same network and is present in hundreds of thousands of industrial, energy, and smart building installations. Its most representative uses include:

- **SCADA and telemetry**: communication between RTUs, PLCs, and control centers.
- **Process automation**: reading temperature, pressure, and flow sensors, and controlling pumps, valves, and drives.
- **Integration of equipment from different manufacturers**: due to its open nature, it is the common language in gateways and protocol converters.
- **Energy monitoring**: electrical meters, network analyzers, and energy management systems.

## Frequently Asked Questions (FAQ)

### What is the difference between Modbus RTU and Modbus TCP?
Modbus RTU transmits frames in binary format over serial lines (RS‑485/RS‑232) with CRC checking, while Modbus TCP encapsulates the PDU within a TCP segment over Ethernet networks, using the MBAP header and port 502. RTU reaches distances of 1200 m per bus, whereas TCP is limited to 100 m per link, but offers higher speed.

### How many devices can I connect on a single Modbus network?
On a serial network without repeaters, up to 247 servers can be addressed, although the typical physical limit on RS‑485 is 32 unit loads per segment. With repeaters the limit extends to 247 total addresses. On Modbus TCP the number of connections depends on server and switch resources, not on the protocol.

### Is Modbus compatible with any PLC?
Yes. As an open standard published in 1979 and revised up to version V1.1b3 of 2012, most PLC manufacturers (Siemens, Allen‑Bradley, Schneider Electric, Omron, etc.) offer native Modbus communication libraries or modules, both in RTU and TCP mode.

### What does CRC mean in a Modbus RTU frame?
CRC (Cyclic Redundancy Check) is a 2‑byte field that the transmitter calculates from the frame content and appends at the end. The receiver recalculates the CRC and compares it; if they do not match, the frame is discarded, ensuring data integrity against electromagnetic noise.

### Can Modbus be used over RS‑232?
Yes, the serial specification supports EIA/TIA‑232, although its range is shorter (15 m / 49 ft) and only allows a point-to-point connection. RS‑232 is typically used to connect a single device directly to a PC or gateway.

### Is Modbus a free and license‑free protocol?
Yes. The Modbus Organization freely distributes all specifications and does not require royalty payments for implementation, which has driven its widespread adoption in industry.

## References
- **plcacademy.com**: https://www.plcacademy.com/category/plc-programming/
