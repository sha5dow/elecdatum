---
title: "Differential relay transformer protection"
sidebar:
  label: "Differential relay transformer protection"
description: "Technical reference: Differential relay transformer protection"
keywords: ["differential relay transformer protection 87T", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "relays"
subcategory: "differential-relay"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The differential relay for transformer protection, identified by the ANSI device number 87T, is the primary solution for detecting internal faults in power transformers with capacity above 5 MVA. Its function is to compare the current entering the primary with that leaving the secondary; any significant imbalance triggers instantaneous tripping of the circuit breakers on both sides, isolating the machine in milliseconds.

## Operating Principle
Transformer differential protection is activated when the difference between the incoming and outgoing currents exceeds a typical setting value between 20 % and 40 % of the transformer's rated current. The scheme is based on the law of ampere-turn balance: under normal conditions, the phasor sum of the currents measured by the current transformers (CTs) installed on both sides of the transformer must be zero, provided the transformation ratios and phase shifts have been compensated. When a fault occurs within the protected zone —between the primary and secondary CTs— this balance is broken, a differential or _spill_ current appears, and the relay orders the opening of the circuit breakers.

## Typical Connection Diagram
For a three-phase power transformer, three current transformers are installed on the primary side and three on the secondary side. Their secondaries are connected in opposition so that, under normal conditions, the current circulating through the differential relay coil is practically zero. When the transformer has a wye‑delta (Yd) configuration, the secondary CTs must be connected in delta on the wye side and in wye on the delta side, in order to compensate for the 30° phase shift introduced by the winding. The CT ratios are selected so that the secondary currents are equal —normally 1 A or 5 A—, thus normalizing the levels before comparison.

## Characteristic Curve and Bias Adjustment
The bias or restraint adjustment in modern differential relays is set with a typical percentage slope of 20 % to 50 %, ensuring stability during external faults with through currents up to 10 times the transformer's rated current. The operating characteristic is not a simple magnitude comparison; it incorporates a restraint (bias) current to avoid false trips caused by CT ratio errors, taps from the on-load tap changer, or the inrush magnetization current. The relay operates only when the differential current exceeds a defined percentage of the restraint current.

## Advantages and Applications
Differential protection detects internal faults in less than 20 ms / 1 cycle (at 50 Hz) in power transformers from 5 MVA, surpassing other devices such as the Buchholz relay in speed. Its main advantages are: instantaneous operation against phase-to-phase, turn-to-turn, or ground faults within the protected zone; ability to detect faults in bushings that do not involve the insulating oil; and the possibility of adjusting sensitivity via the bias slope to avoid operation during transient conditions. It is mandatory for power transformers in generation plants, transmission substations, and large industrial centers.

## Frequently Asked Questions (FAQ)
### What is an 87T differential relay?
It is a protection device that continuously compares the electrical currents entering and leaving the transformer. If the difference exceeds the set threshold, it instantaneously disconnects the transformer from the network to prevent damage from internal faults.

### What is the typical trip threshold for differential protection?
The differential current threshold is usually set between 20 % and 40 % of the transformer's rated current. This value is adjusted considering CT errors and the magnetizing current, so that nuisance trips do not occur.

### How is the phase shift compensated in wye‑delta connections?
The secondaries of the current transformers are physically connected in the opposite configuration: delta on the wye side of the transformer and wye on the delta side. This compensates for the 30° phase shift and yields comparable current magnitudes at the relay.

### What is the difference between differential protection and the Buchholz relay?
The Buchholz relay only detects faults that produce gas inside the oil tank, whereas differential protection detects any internal fault —including those in insulators or windings without generating gas— and does so in milliseconds, much faster than the Buchholz.

### What bias settings are recommended to avoid trips during external faults?
The bias slope is typically set between 20 % and 50 % of the restraint current. Higher slopes offer greater security against through currents from an external fault, although they reduce sensitivity for low-magnitude internal faults.

### In which cases is transformer differential protection not recommended?
It is not recommended when the cost or complexity of installing CTs on both sides is excessive, such as in very small transformers or in systems with large distances between primary and secondary. In those cases, overcurrent protections combined with fuses or Buchholz relays are chosen.

## Sources Consulted

- **electrical4u.com**: https://www.electrical4u.com/differential-protection-of-transformer-differential-relays/
