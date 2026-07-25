---
title: "Electrical equipment bonding"
sidebar:
  label: "Electrical equipment bonding"
description: "Technical reference: Electrical equipment bonding"
keywords: ["electrical equipment bonding requirements", "puesta-tierra"]
category: "puesta-tierra"
topic: "bonding"
subcategory: "equipment-bonding"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Electrical equipment bonding consists of intentionally interconnecting all exposed metallic parts that normally do not carry current, in order to maintain them at the same potential and eliminate dangerous differences exceeding 50 V.

Electrical equipment bonding, or equipotential bonding, is the permanent conductive connection between metallic parts not designed to carry current (enclosures, cable trays, metallic piping, structures) to form an electrically continuous path with a contact resistance less than 0.1 Ω / 0.1 Ω. This bonding ensures that, in the event of an insulation fault, all exposed conductive surfaces reach the same potential, preventing dangerous touch voltages.

## Importance of bonding
Equipotential bonding of equipment is critical because a potential difference greater than 50 V / 50 V between two metallic masses can cause electrocution, electric arcs, and insulation damage. By connecting all metallic parts, any fault current is routed in a controlled manner to the grounding system, allowing protective devices (fuses or circuit breakers) to clear the fault in less than 0.4 s / 0.4 s, increasing personnel safety and equipment protection.

## Relationship between bonding and grounding
Bonding and grounding work together to achieve effective protection. Bonding equalizes the potentials of metallic masses, while grounding provides a low-impedance path for fault current to return to the source. In TN systems with a grounded neutral, the connection of the protective conductor to the neutral in the main service panel is what enables a fault path of up to 600 V / 600 V to ground, ensuring rapid operation of protection devices. Without bonding, a fault could energize an enclosure and not trip the breaker if the ground resistance as the sole path is too high (more than 25 Ω).

## Bonding connection methods
To ensure an effective fault path, equipment bonding must be performed using at least one of the 8 methods permitted by NEC (Section 250.8), including listed pressure connectors, terminal bars, exothermic welding, or cable-type bonding jumpers. The most common methods for low- and medium-voltage electrical equipment up to 600 V / 600 V are indicated below.

| Connection method | Description | Typical application |
| --- | --- | --- |
| Bonding locknut | Locknut with a set screw that penetrates the enclosure paint to ensure continuity | Metallic boxes with concentric knockouts, general use up to 200 A |
| Bonding bushing with jumper | Threaded bushing provided with a terminal to connect a bonding jumper to the neutral or ground conductor | Metallic raceways in services, when using bushings with removable rings |
| Exothermic welding | Molecular fusion of copper conductors via aluminothermic reaction, mechanical strength > 450 kg / 1000 lb | Underground joints, connection of cable to ground electrode, substations |
| Tapered threaded termination | Threaded fitting that ensures electrical continuity without needing an additional jumper | Rigid metal conduit (RMC) and intermediate metal conduit (IMC) in enclosures with threaded entry |
| Cable bonding jumper | Insulated or bare copper conductor installed between two metallic parts, sized per standard | Cable trays, bonding of flexible conduits, bridging of painted joints |

## Sizing of bonding conductors
Supply-side bonding conductors are sized according to the size of the phase conductors (NEC Table 250.102(C)(1)), while load-side bonding conductors depend on the setting of the overcurrent protection device (NEC Table 250.122). For a feeder protected with a 1200 A breaker, the required load-side bonding jumper is 85.0 mm² / 3/0 AWG copper.

### Supply side (supply-side bonding jumper)

| Phase conductor size | Minimum bonding jumper |
| --- | --- |
| Up to 33.6 mm² / 2 AWG | 8.37 mm² / 8 AWG |
| 33.6 to 85.0 mm² / 1 AWG to 3/0 AWG | 13.3 mm² / 6 AWG |
| 85.0 to 127 mm² / 4/0 AWG to 250 kcmil | 21.1 mm² / 4 AWG |
| 127 to 177 mm² / 250 to 350 kcmil | 33.6 mm² / 2 AWG |
| 177 to 304 mm² / 350 to 600 kcmil | 53.5 mm² / 1/0 AWG |
| 304 to 558 mm² / 600 to 1100 kcmil | 67.4 mm² / 2/0 AWG |
| Greater than 558 mm² / 1100 kcmil | 85.0 mm² / 3/0 AWG |

### Load side (load-side equipment bonding jumper)

| Protection device (A) | Minimum bonding jumper size |
| --- | --- |
| 15 A | 2.08 mm² / 14 AWG |
| 20 A | 3.31 mm² / 12 AWG |
| 30 A | 5.26 mm² / 10 AWG |
| 40 – 60 A | 5.26 mm² / 10 AWG |
| 70 – 100 A | 8.37 mm² / 8 AWG |
| 110 – 200 A | 13.3 mm² / 6 AWG |
| 250 – 300 A | 21.1 mm² / 4 AWG |
| 400 A | 26.7 mm² / 3 AWG |
| 500 A | 33.6 mm² / 2 AWG |
| 600 A | 42.4 mm² / 1 AWG |
| 800 A | 53.5 mm² / 1/0 AWG |
| 1000 A | 67.4 mm² / 2/0 AWG |
| 1200 A | 85.0 mm² / 3/0 AWG |

## Recommended connection resistance
Although bonding does not require an absolute ground resistance value like the grounding electrode (which is typically less than 1 Ω / 1 Ω in substations), it is good practice for the continuity between bonded parts to present a measured resistance less than 0.1 Ω / 0.1 Ω, using a micro-ohmmeter with at least 10 A test current. Contact surfaces must be cleaned within a radius of 12 mm / 0.5 in to remove paint, rust, or non-conductive coatings, thus ensuring a low-impedance fault path.

## Installation procedure
1. Identify all exposed metallic masses (enclosures, supports, metallic piping) within the work area that must be bonded to the bonding system.
2. Prepare at least 12 mm / 0.5 in of surface around each connection point, removing any paint, enamel, or corrosion until bare metal is exposed.
3. Select the bonding method (locknut, bushing with jumper, exothermic welding) and the bonding conductor according to the applicable sizing tables.
4. Make the firm mechanical connection, ensuring the bonding conductor is secured using a listed terminal, set screw, or welding, according to the chosen method.
5. Verify electrical continuity with an instrument capable of measuring resistances below 0.1 Ω / 0.1 Ω.
6. Document the connections and resistance values obtained in the electrical inspection protocol.

## Frequently Asked Questions (FAQ)

### What is the difference between bonding and grounding?
Bonding (equipotential bonding) connects metallic parts to each other to maintain the same potential, while grounding intentionally connects the electrical system to the physical earth to dissipate fault currents and stabilize voltage. Both complement each other: bonding ensures that fault current has a low-impedance metallic path to the grounding conductor, preventing current from seeking dangerous alternative paths.

### Does bonding apply only to metallic equipment?
It primarily applies to conductive metallic parts (enclosures, raceways, cable trays, structures). However, in areas with risk of static accumulation, non-metallic equipment that can generate charges is also bonded by connecting its conductive parts or coatings. In swimming pools and fountains, even steel reinforcement in concrete must be bonded to the bonding system to eliminate potential gradients.

### Can metallic conduit be used as a bonding conductor?
Yes, continuous metallic raceways (rigid metal conduit, intermediate metal conduit, EMT) listed can serve as an equipotential bonding path as long as joints are tight with appropriate locknuts and not interrupted by non-metallic sections. However, in installations exceeding 250 V / 250 V to ground and using bushings with removable rings, an external bonding jumper sized per NEC is required.

### Is bonding mandatory in commercial and industrial installations?
Yes, all electrical installations per international standards (NEC, IEC 60364) require bonding of metallic equipment. In fact, NEC Chapter 250 mandates bonding all metallic parts that could become energized, including metallic water piping, building structures, and communication systems, to ensure equal potential and operation of protection devices.

### What danger does a loose or corroded bonding connection represent?
A high-resistance connection (greater than 0.1 Ω) may not adequately conduct fault current, raising the impedance of the return path to neutral. Instead of quickly clearing the fault, the current circulates for longer, causing heating, fire risk, and the possibility that the equipment enclosure maintains a dangerous potential (still below the breaker trip level) and causes electrocution when touched.

### How is a bonding system verified?
A low-resistance micro-ohmmeter that injects a DC test current of at least 10 A is used. The measurement is taken between the metallic mass and the connection point to the grounding system. The generally accepted value should be less than 0.1 Ω / 0.1 Ω. Visual inspections are also performed to check mechanical tightness and absence of corrosion or paint on connections.

## References
- **electrical4u.com**: https://www.electrical4u.com/equipment-earthing/
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2312
