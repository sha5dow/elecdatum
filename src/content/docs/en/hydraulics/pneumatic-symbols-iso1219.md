---
title: "Pneumatic symbols ISO 1219"
sidebar:
  label: "Pneumatic symbols ISO 1219"
description: "Technical reference: Pneumatic symbols ISO 1219"
keywords: ["ISO 1219 pneumatic symbols valves cylinders", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "symbols-pneumatic"
skill: "standards-guide"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

The ISO 1219-1:2012 standard defines standard graphic symbols for pneumatic and hydraulic fluid power systems, establishing 4 basic representation rules: each symbol shows the function, not the construction; components are drawn in the rest position; connections are represented by lines; and valve positions are indicated by adjacent squares. Part 2 of the standard (ISO 1219-2:2012) complements this documentation with rules for drawing complete circuit diagrams.

## Pneumatic actuator symbols

| Symbol | Description | Technical notes |
| --- | --- | --- |
| Single-acting cylinder, spring return | The rod advances by air pressure and retracts by internal spring force. Typical strokes from 25 mm to 2000 mm / 0.98 in to 78.74 in. | Maximum pressure usually 10 bar / 145 psi. |
| Double-acting cylinder, single rod | Compressed air acts on both faces of the piston to control advance and retract. Standard diameters from 32 mm / 1.26 in to 320 mm / 12.6 in. | Symbol with two air connections and piston without spring. |
| Double-acting cylinder, double rod | Has a rod at both ends of the piston. Allows work in both directions with the same force. Typical symmetric strokes from 50 mm to 800 mm / 1.97 in to 31.5 in. | Available force is equal in both directions due to identical effective areas. |
| Double-acting cylinder with adjustable cushioning | Incorporates throttle valves at the ends to decelerate the piston before final impact. Adjustment screws allow modifying cushioning speed in a range of 0.1 m/s to 1.5 m/s / 0.33 ft/s to 4.92 ft/s. | Pneumatic cushioning reduces noise and extends cylinder service life. |
| Limited rotation pneumatic motor (rotary actuator) | Converts pneumatic pressure into angular motion. Typical rotation angles 90°, 180° and 270°. Useful torques from 0.5 N·m to 500 N·m / 0.37 lbf·ft to 369 lbf·ft. | Represented by a circular sector and the compressed air symbol. |
| Angular opening pneumatic gripper | Holding device with fingers that open/close via a pneumatic piston. Closing forces from 50 N to 2000 N / 11.24 lbf to 449.6 lbf at 6 bar / 87 psi. | Symbol similar to double-acting cylinder but with indication of the gripper mechanism. |

## Directional valve symbols

| Symbol | Description | Technical notes |
| --- | --- | --- |
| 2/2 valve, normally closed (N.C.) | Two connections and two positions; at rest blocks the passage. Actuated by pushbutton, return by spring. Nominal flow rates from 50 Nl/min to 5000 Nl/min / 1.77 scfm to 176.6 scfm. | The right square indicates the rest position with no flow. |
| 3/2 valve, normally open (N.O.) | Three connections and two positions; at rest allows passage from 1 to 2. Pneumatic actuation with spring return. Minimum pilot pressure 1.5 bar / 21.8 psi. | Port 3 is blocked at rest and connected to exhaust in active position. |
| 4/2 monostable valve | Four connections and two positions. Controls a double-acting cylinder with a single solenoid or pilot. Flow rates up to 1200 Nl/min / 42.4 scfm. | At rest connects pressure to one chamber and the other to exhaust; when activated, connections are reversed. |
| 5/2 bistable valve | Five connections and two positions. Has two independent pilots; maintains the last position when the signal disappears. Typical switching time 10 ms to 25 ms. | The two exhausts allow regulating the speed of each cylinder chamber separately. |
| 5/3, closed center | Five connections and three positions. The center position blocks all ports (1, 2, 4, 3 and 5 isolated). Allows stopping a cylinder at any intermediate point of its stroke. Maximum switching frequency 400 cycles/min. | Requires good sealing gaskets to maintain the blocked position under load. |
| 5/3, open center to exhaust | Similar to above but in center position connects ports 2 and 4 to exhaust (3 and 5) while pressure (1) remains blocked. The cylinder is free of pneumatic forces in the center position. Maximum working pressure 16 bar / 232 psi. | Common in applications where manual movement of the cylinder is required with the system stopped. |

## Control and locking valve symbols

| Symbol | Description | Technical notes |
| --- | --- | --- |
| Check valve without spring | Allows free flow in one direction and blocks in the opposite. Opening is produced by the fluid pressure itself. Opening pressure less than 0.1 bar / 1.45 psi. | Symbol: seat and ball without spring; the triangle indicates the direction of free flow. |
| Check valve with spring | Same as above but requires a minimum opening pressure, typically 0.5 bar to 1.0 bar / 7.25 psi to 14.5 psi, to overcome the spring. | The spring ensures closure even in the absence of differential pressure. |
| Quick exhaust valve | Accelerates air evacuation from a cylinder by directly connecting the chamber to the atmosphere. Reduces return times by 40% to 60% compared to a direct connection. | Symbol: three connections with floating seat that diverts flow to exhaust. |
| One-way flow control valve (flow regulator) | Allows free passage in one direction and restricts flow in the opposite direction via an adjustment screw. Regulation is normally done on the cylinder advance or retract speed. Connection diameters from M5 to G1/2. | The symbol shows a variable restrictor with a check by-pass. |
| Pressure regulator valve with relief | Maintains a constant secondary pressure regardless of variations in primary pressure. Typical regulation range 0.5 bar to 10 bar / 7.25 psi to 145 psi. | Incorporates a relief to release excess pressure in the secondary; symbol with adjustable spring and exhaust connection. |
| Shuttle valve (OR valve) | Has two inlets and one outlet; the pressure signal at either inlet passes to the outlet. The inlet pressure must be at least 0.3 bar / 4.35 psi higher than the outlet for switching. | Symbol with two inlets converging to a point and an internal floating seat. |

## Accessories and air treatment symbols

| Symbol | Description | Technical notes |
| --- | --- | --- |
| Compressed air filter with drain | Removes solid particles and condensate from compressed air. Pore sizes from 5 µm / 0.0002 in to 40 µm / 0.0016 in. Drain can be manual or automatic. | The symbol shows a container with inlet/outlet line and a bottom drain. |
| Compressed air lubricator | Doses oil in fine mist form to lubricate downstream pneumatic components. Maximum lubrication flow rate 3000 Nl/min / 105.9 scfm. Reservoir capacity 30 cm³ to 500 cm³ / 1.83 in³ to 30.5 in³. | The oil drop in the symbol indicates the lubrication function; installed after the filter and regulator. |
| Compact refrigerant dryer | Cools compressed air to condense moisture and then reheats it before outlet. Achievable pressure dew point +3 °C / 37.4 °F. Treated air flow from 15 m³/h / 8.83 cfm to 180 m³/h / 105.94 cfm. | Generic symbol with heat exchanger and condensate separator. |
| Compact maintenance unit (FRL) | Combines filter, pressure regulator and lubricator in one block. Semi-automatic drain activated by pressure loss. Standard connections G1/4, G3/8 and G1/2. Total weight 0.6 kg to 3.5 kg / 1.32 lb to 7.72 lb. | The symbol shows three blocks in line crossed by the supply line. |
| Pneumatic pressure switch | Switches an electrical contact when pneumatic pressure reaches a preset value. Adjustment range 0.2 bar to 12 bar / 2.9 psi to 174 psi. Repeatability ±1% of full scale. | Symbol with pressure line and normally open or normally closed electrical contact. |
| Pneumatic silencer | Reduces noise from compressed air exhaust at valve and cylinder ports. Sound attenuation from 15 dB(A) to 35 dB(A) depending on internal porous material. Connections from M5 to G1. | The symbol shows an element at the valve exhaust with acoustic attenuation indication. |

## Frequently asked questions (FAQ)

### Which international standard regulates pneumatic symbols for circuits?

The ISO 1219-1:2012 standard, last reviewed in 2012, regulates graphic symbols for fluid power systems, including more than 200 pneumatic and hydraulic symbols. Part 1 establishes basic rules and component representation, while ISO 1219-2:2012 defines rules for circuit diagrams. The Spanish nomenclature is collected in UNE-EN ISO 1219-1:2012, identical to the international version.

### How many positions and ports does a 5/3 closed center valve define?

A 5/3 closed center valve has 5 connections (ports) and 3 switching positions, with the center position blocking all ports. The maximum working pressure for this type of valve is 16 bar / 232 psi and the nominal flow rate reaches 1200 Nl/min / 42.4 scfm in G1/4 sizes. The maximum switching frequency is 400 cycles/minute in versions with pneumatic pilot and spring return.

### How is a double-acting cylinder with cushioning represented in ISO 1219?

The ISO 1219 symbol for a double-acting cylinder with adjustable cushioning shows a piston without spring with two air connections and an additional rectangle at each end indicating the adjustable throttle valves. Typical strokes range from 25 mm / 0.98 in to 2000 mm / 78.74 in, with standardized diameters from 32 mm / 1.26 in to 320 mm / 12.6 in per ISO 6432 and ISO 15552.

### What minimum pilot pressure does a 3/2 pneumatic valve need?

The minimum pilot pressure for a 3/2 valve with pneumatic actuation is 1.5 bar / 21.8 psi, below which the pilot does not guarantee switching of the main spool. Normally closed 3/2 valves operate in a pressure range from 2 bar to 10 bar / 29 psi to 145 psi and accept flow rates from 50 Nl/min / 1.77 scfm to 5000 Nl/min / 176.6 scfm depending on connection size.

### How much does a pneumatic silencer reduce exhaust noise?

A standard pneumatic silencer reduces exhaust noise between 15 dB(A) and 35 dB(A), depending on the internal porous material (sintered bronze or polyethylene) and working pressure conditions, which can reach up to 12 bar / 174 psi. Standard threaded connections range from M5 to G1, and the additional pressure drop introduced is less than 0.3 bar / 4.35 psi under nominal conditions.

### Which ISO standard defines compressed air treatment units?

The maintenance unit composed of filter, regulator and lubricator (FRL) is described in ISO 1219-1:2012 within the family of symbols for compressed air treatment. The filter retains particles from 5 µm / 0.0002 in to 40 µm / 0.0016 in, the regulator maintains a stable secondary pressure in a range of 0.5 bar to 10 bar / 7.25 psi to 145 psi, and the lubricator doses oil for flow rates up to 3000 Nl/min / 105.9 scfm.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/iso-valve-standards-d_375.html
- **engineersedge.com**: https://www.engineersedge.com/hydraulic/symbols/hydraulic_iso_schematic_symbols.htm
- **efunda.com**: https://www.efunda.com/designstandards/oring/oring_intro.cfm
