---
title: "PLC memory types"
sidebar:
  label: "PLC memory types"
description: "Technical reference: PLC memory types"
keywords: ["PLC memory types RAM ROM EEPROM", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "plc-memory-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The memory of a programmable logic controller (PLC) is the electronic component that stores the operating system, the user program, and the work data. A typical PLC can integrate from 64 kB / 65 536 bytes up to several megabytes / several million bytes of total memory, distributed among different storage technologies. Knowing the memory types used by a PLC —RAM, ROM, and EEPROM— is essential for sizing the application, managing data persistence, and planning maintenance.

## PLC Memory Types
They are distinguished by the number of write cycles they support: RAM allows unlimited reads and writes, while a modern EEPROM reaches a useful life of 1 000 000 / 1×10⁶ program/erase cycles. Each type is described below with its technical characteristics.

## RAM Memory (Random Access Memory)
RAM memory in a PLC has a typical capacity ranging from 256 kB / 262 144 bytes to 16 MB / 16 777 216 bytes and is completely erased when power is disconnected. It is used as working memory during program execution, storing the temporary values of inputs, outputs, timers, counters, and flags. It is volatile, has high read/write speed, and is byte-addressable. In many PLCs, the RAM is complemented by a lithium battery or cell that retains data after a power failure, making it *battery-backed RAM*.

## ROM Memory (Read-Only Memory)
ROM holds between 64 kB / 65 536 bytes and 1 MB / 1 048 576 bytes of the PLC's operating system code, indelibly factory-programmed. It may also contain startup routines, power-on self-test (POST), and bootloader. Being a read-only memory, it cannot be modified by the user or the application program, which ensures firmware integrity. Its content is retained without power and is immune to voltage failures.

## EEPROM Memory (Electrically Erasable Programmable Read-Only Memory)
A typical PLC EEPROM can store from 2 kB / 2 048 bytes up to 512 kB / 524 288 bytes of the user program, configuration parameters, and data tables. Its floating-gate transistor technology allows electrical erasing and reprogramming byte by byte or by pages, reaching up to 1 000 000 / 1×10⁶ write cycles in current models. The information remains without supply voltage. Unlike ROM, EEPROM can be updated in the field using programming software without removing the device. In modern PLCs, the trend is to emulate EEPROM with higher-density, lower-cost flash memory.

## Comparison of main characteristics

| Type | Volatility | Typical capacity | Write cycles | Main use |
|------|------------|-----------------|--------------|----------|
| RAM | Volatile (erases on power-off) | 256 kB / 262 144 B to 16 MB / 16 777 216 B | Unlimited / ∞ | Work data, process variables |
| ROM | Non-volatile | 64 kB / 65 536 B to 1 MB / 1 048 576 B | 1 time (factory programmed) | Operating system, firmware, bootloader |
| EEPROM | Non-volatile | 2 kB / 2 048 B to 512 kB / 524 288 B | 1 000 000 / 1×10⁶ (up to 1 000 000) | User program, parameters, calibrations |

## Memory management during program execution
The memory map of a PLC divides the address space into functional areas, whose size influences the capacity of the application. In a mid-range controller, the following typical zones can be found:

| Memory area | Address range (example) | Size (words / bytes) |
|-------------|-------------------------|----------------------|
| Input image (I) | I0 – I2047 | 2048 words / 4096 bytes |
| Output image (Q) | Q0 – Q2047 | 2048 words / 4096 bytes |
| Internal flags (M) | M0 – M8191 | 8192 words / 16384 bytes |
| Data registers (V) | V0 – V32767 | 32768 words / 65536 bytes |
| Timers (T) | T0 – T255 | 256 structures / ~6 144 bytes |
| Counters (C) | C0 – C255 | 256 structures / ~6 144 bytes |

The work RAM stores the dynamic values of these areas during the scan cycle. Retentive versions (battery or supercapacitor) preserve the data registers after a power loss, while non-retentive positions are reset. The operating system manages the copy of the program from EEPROM to RAM at startup, and many PLCs allow dumping recipe tables to or from EEPROM via program instructions.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/technical-terms-fluid-mechanics-d_181.html
- **plcacademy.com**: https://www.plcacademy.com/plc-hardware-components/
- **automationdirect.com**: https://www.automationdirect.com/do-more/h2/software/memory-management
