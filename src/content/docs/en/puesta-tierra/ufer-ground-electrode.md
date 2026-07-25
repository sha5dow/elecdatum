---
title: "Ufer ground concrete-encased electrode"
sidebar:
  label: "Ufer ground concrete-encased electrode"
description: "Technical reference: Ufer ground concrete-encased electrode"
keywords: ["Ufer ground concrete encased electrode NEC", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-systems"
subcategory: "ufer-ground-electrode"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

The concrete-encased electrode, universally known as the Ufer ground in English, is a grounding method that uses a conductor embedded in the foundation concrete to achieve a low-impedance electrical connection with the earth. Developed in the 1940s by Herbert G. Ufer for the U.S. Army, it became established as an effective solution in dry soil areas and is currently recognized as a grounding electrode in Article 250.52(A)(3) of the National Electrical Code (NEC). Its key lies in taking advantage of the alkaline nature of concrete, which provides ions and improves the conductivity of the surrounding soil.

## Origins and History

The Ufer system was born from a military necessity during World War II. The U.S. Army needed to protect underground bomb storage magazines in the desert areas of Tucson and Flagstaff, Arizona, where the terrain lacked a water table and precipitation was minimal. Conventional ground rods required hundreds of feet of driven rods to achieve acceptable resistance. In 1942, Herbert G. Ufer, a consulting engineer, demonstrated that concrete offered better conductivity than arid soil and designed a system based on copper conductors embedded in the foundation. Tests at the Arizona proving ground proved so effective that the technique was adopted throughout the complex. Ufer continued his research and published the results in an IEEE paper in 1963. The NEC first incorporated the concrete-encased electrode in 1968, and starting in 1978, the use of 1/2-inch reinforcing bars (rebar) was explicitly permitted as an electrode [NEC 250.52(A)(3)].

## Operating Principle

The effectiveness of the Ufer electrode is based on two complementary phenomena. First, concrete is a strongly alkaline material (high pH), meaning it contains an abundant reserve of ions in solution. This condition makes it a superior ionic conductor compared to most natural soils. Second, over time, the moisture in the concrete slowly leaches ions into the adjacent soil, raising the pH of the soil surrounding the footing. This ionic "doping" reduces the soil resistivity at the electrode-earth interface, progressively lowering the total impedance of the system. Additionally, because the conductor is distributed over a large contact surface area (the entire length of the rebar or copper wire), the current density per unit area is reduced, which helps maintain a low grounding resistance even in high-resistivity soils.

## Requirements According to the NEC (NFPA 70)

The NEC recognizes two valid configurations for a concrete-encased electrode. In both cases, the minimum concrete cover must be 2 inches and the electrode must be in direct contact with the earth; vapor barriers or insulating materials nullify its function. When a building has multiple electrodes of this type, only one of them needs to be used.

| Parameter | Requirement for Reinforcing Bar (Rebar) | Requirement for Bare Copper Conductor |
| --- | --- | --- |
| **Material** | Steel (electrically connected with tie wire) | Bare copper |
| **Minimum diameter or size** | 1/2 inch (12.7 mm / 0.5 in) | 4 AWG (21.2 mm² / ~0.0417 in²) |
| **Minimum length within concrete** | 20 feet (6.1 m / 20 ft) continuous or joined | 20 feet (6.1 m / 20 ft) continuous |
| **Concrete cover** | Minimum 2 inches (50.8 mm / 2 in) | Minimum 2 inches (50.8 mm / 2 in) |
| **Grounding electrode conductor** | Maximum size 4 AWG (21.2 mm²) per 250.66(B) | Maximum size 4 AWG (21.2 mm²) per 250.66(B) |
| **Connections** | Reinforcing steel tied with wire; the GEC is attached to an exposed bar or accessible section of rebar | The cable end must be accessible for connection |

> **Note:** The reinforcing bar must be immersed in concrete that is in direct contact with the earth; if an insulating membrane exists under the slab, the system cannot be considered a grounding electrode.

## Advantages and Limitations

The Ufer electrode offers notable advantages in certain scenarios, but also requires precautions during design and construction.

**Advantages**

- **Reduced impedance in dry soils:** The alkalinity of concrete and the large contact surface area provide low grounding resistances even in desert terrains or areas without a water table.
- **Space and material savings:** By being integrated into the foundation, it eliminates the need to drive multiple rods or lay ground rings, simplifying construction and reducing costs.
- **Long service life:** The conductor is protected by concrete against atmospheric corrosion and mechanical damage, provided quality steel or copper is used.
- **Straightforward code compliance:** The NEC recognizes the CEE (Concrete-Encased Electrode) and, when present, it is considered preferred over other supplementary electrodes.

**Limitations**

- **Risk of steam explosion:** During a lightning strike or high-energy fault, moisture trapped in the concrete can instantly vaporize, generating pressures capable of cracking the structural element.
- **Requirement for direct earth contact:** Any insulating layer (vapor barrier, polyethylene film, etc.) invalidates its function as an electrode. In buildings with waterproofed basements or slabs over insulation, the system cannot be used.
- **Accessibility requirement:** An accessible connection point (a steel bar or cable end) protruding from the concrete must be provided to connect the service grounding, which must be planned before pouring.
- **Possible galvanic incompatibility:** Although concrete protects the steel, the combination of different metals in the general grounding system requires verification of galvanic corrosion conditions.

## Comparison with Conventional Grounding Electrodes

The following table contrasts the characteristics of the Ufer concrete-encased electrode with those of ground rods and buried ring conductors around the building.

| Characteristic | Ufer Electrode (CEE) | Ground Rod | Ground Ring |
| --- | --- | --- | --- |
| **Contact surface with soil** | Very large (length ≥ 6.1 m / 20 ft distributed in the footing) | Limited to rod surface (∅ 15.9 mm / 5/8 in, L ≈ 2.44 m / 8 ft) | Large (total length of perimeter ring) |
| **Typical installation depth** | Within foundation slab or footing (≥ 50.8 mm / 2 in cover) | Driven at least 2.44 m / 8 ft into ground, top flush or buried | Minimum 762 mm / 30 in below grade [250.53(F)] |
| **Impedance in dry soil** | Very low; improves over time due to ionic doping of soil | High; often requires multiple rods or soil treatment | Low-moderate; depends on natural soil resistivity |
| **NEC compliance** | Article 250.52(A)(3); preferred electrode if present | Article 250.52(A)(5); supplementary electrode required if resistance exceeds 25 Ω | Article 250.52(A)(4); no supplementary electrode required |
| **Construction cost** | Very low (uses existing reinforcing steel) | Medium (copper-clad steel rods, driving labor) | High (2 AWG copper wire, perimeter trench excavation) |
| **Resistance to mechanical damage** | Protected by concrete; permanent once set | Exposed to soil corrosion and accidental impact | Protected by burial, but susceptible to cuts during excavation |
| **Possibility of future replacement** | Not possible without partial demolition of foundation | Can be extracted and replaced with appropriate tools | Replacement feasible but requires trench opening |

## Frequently Asked Questions (FAQ)

### Why is this type of electrode called "Ufer"?
The name comes from Herbert G. Ufer, the engineer who developed the method in 1942 for the U.S. Army. After his successful trials in Arizona, the technique became known as the "Ufer ground," although the NEC uses the technical term "Concrete-Encased Electrode" (CEE).

### Is it mandatory to install a Ufer electrode in all buildings?
It is not mandatory if another main electrode (e.g., underground metal water piping) already exists per the NEC. However, in many jurisdictions—such as Des Moines, Iowa—the local code requires a Ufer electrode in all residential and commercial construction. If the building has a concrete foundation with accessible steel reinforcement, it is considered good practice to use it as the main electrode.

### What happens if the foundation slab is supported on a vapor barrier?
The electrode cannot function as a ground because the barrier prevents direct contact with the earth. The NEC specifies that the reinforcing bars or conductor must be "in direct contact with the earth" through the concrete. In such cases, other electrodes, such as ground rods or a perimeter ground ring, must be used.

### Can any type of reinforcing steel be used as the electrode?
Yes, provided the bar has a minimum diameter of 1/2 inch (12.7 mm) and electrical continuity is ensured, typically using steel tie wires. Exothermic welding between bars is not required, as the NEC accepts mechanical bonding with wire. However, it is essential that the reinforcement is completely embedded in concrete in direct contact with the soil and that an accessible connection point exists for the grounding electrode conductor.

### What size grounding electrode conductor should I use to the concrete-encased electrode?
According to NEC 250.66(B), the conductor connecting the concrete-encased electrode to the general grounding system need not be larger than 4 AWG copper (21.2 mm²). This reduction is permitted because the large contact surface area of the CEE limits current density, even during high-energy faults.

### Can the foundation crack during a lightning strike?
Yes, this risk exists. Moisture within the concrete can instantaneously turn to vapor when dissipating very high-magnitude lightning currents, generating local pressures capable of cracking the concrete. For this reason, codes and good practice require a minimum cover of 2 inches (50.8 mm) and, in critical structures, it is recommended to provide a supplementary electrode to share the discharge current.

## References
- **electrical4u.com**: https://www.electrical4u.com/system-earthing/
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2291
