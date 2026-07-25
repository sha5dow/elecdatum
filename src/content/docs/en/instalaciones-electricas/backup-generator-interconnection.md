---
title: "Backup generator interconnection"
sidebar:
  label: "Backup generator interconnection"
description: "Technical reference: Backup generator interconnection"
keywords: ["backup generator interconnection transfer switch code", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "backup-generator-interconnection"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The correct interconnection of the backup generator with the existing electrical installation is the cornerstone of any emergency or standby power system. The central element of this connection is the transfer switch, the device responsible for switching the load between the utility grid and the generator, ensuring at all times galvanic separation between both sources and protection for utility personnel. Proper interconnection design not only ensures supply continuity but also determines regulatory compliance, occupant safety, and the longevity of both the generator and the equipment it powers.

Interconnection systems are classified into three fundamental categories based on their switching mode: open-transition switches, closed-transition switches, and static transfer switches. Each responds to different needs regarding interruption tolerance, load type, and grid synchronization requirements, and its selection directly influences the protection scheme, conductor sizing, and system grounding configuration.

## Operating Principles

The primary function of the transfer switch is to isolate the backup generator from the utility distribution network when the generator is in operation. The switch monitors voltage on the main service and, upon detecting a fault condition, can send a start command to the generator. Once the controller verifies that the generator has reached nominal voltage and frequency parameters, it disconnects the load from the grid and connects it to the generator in a switching sequence that depends on the configured transition type.

### Open Transition (Break‑Before‑Make)

In open transition mode, also called “break before make,” the switch opens the contact with the active source before closing the contact with the alternative source. During the fraction of a second that the transfer takes, the flow of electricity is completely interrupted. The typical interruption time is less than 1/6 of a second (approximately 167 ms), an interval that does not affect loads in most residential and commercial applications.

### Closed Transition (Make‑Before‑Break)

Closed transition avoids any interruption by momentarily paralleling both sources within strict synchronization parameters. For the controller to authorize the operation, the voltage difference must be less than 5%, the frequency difference less than 0.2 Hz, and the maximum phase angle between the two sources cannot exceed 5 degrees. The overlap time must be less than 100 ms. When either source is not present or is outside acceptable limits, the switch operates by default in break‑before‑make mode to prevent backfeeding to the grid. Closed transition requires prior approval from the local utility because it involves momentarily paralleling the generator with the grid.

## Types of Transfer Switches

| Switch Type | Operation Mode | Primary Application | Key Requirement |
|---|---|---|---|
| Manual | Direct human operation; three positions (line – off – generator) | Small residential or temporary installations | Must pass through the off position before connecting the other source |
| Automatic (ATS) | Grid failure detection, generator start, and switching without human intervention | Emergency systems (NEC Art. 700), legally required standby (Art. 701), and optional standby (Art. 702) | For portable generators > 15 kW / 20.1 HP, nameplate must include subtransient impedances and power factor |
| Static (STS) | Switching via power semiconductors (SCR) between two sources | Critical loads with zero interruption tolerance; data centers | Transfer time in the millisecond range or less; does not replace a UPS |

## Coordination of Protections

Every generator and its associated transfer switch must be integrated with the installation’s protection schemes. The feeder connecting the generator to the transfer switch must be sized for 125% of the generator’s full-load current, coordinating its overcurrent devices with the generator set’s own protection relays. Generator differential protection, stator ground fault protection, and negative-sequence protection are elements the designer must temporally coordinate with the transfer switch settings to avoid nuisance trips. Negative-sequence currents caused by unbalanced loads downstream of the ATS generate a rotating field at twice the synchronous frequency, inducing high-magnitude currents in the rotor; without proper coordination, the accumulated heating from these currents can irreversibly damage the machine.

On the load side, selectivity between generator protections and the branch circuit thermal-magnetic breakers ensures that a short circuit in a secondary circuit does not cause a complete generator set shutdown. Generator overload protection devices must be adjusted to withstand the motor starting transient during switching, while the alternator damage curve—especially its ability to withstand negative-sequence currents—becomes an upper limit that no setting must exceed.

NEC Articles 700, 701, and 702 impose physical segregation of emergency, legally required standby, and optional standby circuits, respectively, requiring that transfer switches and their associated protections be located in separate enclosures and be identified according to the category of load they serve.

## Applicable Codes and Standards

| Standard / Code | Article / Section | Key Requirement Related to Interconnection |
|---|---|---|
| NEC (NFPA 70) | Article 445 | Generator installation and nameplate requirements; for portables > 15 kW / 20.1 HP, power factor and subtransient and transient impedances are required |
| NEC (NFPA 70) | Article 700 | Emergency systems; dedicated transfer switch, independent wiring, monthly load testing |
| NEC (NFPA 70) | Article 701 | Legally required standby systems; switching and circuit separation requirements |
| NEC (NFPA 70) | Article 702 | Optional standby systems; allows manual or automatic transfer switch with less stringent testing requirements |
| NEC (NFPA 70) | Article 220.87 | Existing load calculation based on 125% of annual maximum demand or, alternatively, continuous 30-day measurement at the 15-minute interval of highest usage |
| ANSI/ISA S5.1‑1984 (R 1992) | Instrumentation identification codes | Nomenclature for P&ID diagrams including switches (S), relays (Y), and positioners (Z) |

## Design and Installation Criteria

Interconnection design starts with calculating the load the generator must serve after switching. The NEC requires that for existing installations, the greater value be taken between the load calculated per the standard method and 125% of the maximum demand recorded over one year (or the maximum demand in 15-minute intervals over a minimum period of 30 days with the building occupied). This data determines the transfer switch rating and the feeder conductor size.

The choice between open and closed transition depends on load criticality. If the process allows a maximum interruption of 1/6 second, open transition suffices and simplifies installation by not requiring synchronization. When loads involve data processing equipment, motors and transformers sensitive to micro‑interruptions, or systems where the mandatory monthly load test (Art. 700) is unacceptable due to the interruption, closed transition is chosen. The latter requires an isochronous governor on the generator engine to maintain stable frequency during synchronization and utility approval due to the momentary parallel operation.

The grounding configuration of the generator and the transfer switch is another design-defining aspect. The NEC requires the manufacturer to mark on the nameplate whether the generator neutral is bonded to the frame. When this bond is modified in the field, additional signage must be installed to indicate it. In systems with a switched neutral transfer switch, it must be ensured that the system is never left without a ground reference, coordinating the generator grounding scheme with the service transformer to comply with NEC Articles 250 and 445.

Physical separation between emergency and normal circuits is a non‑negotiable requirement for systems covered by Article 700: emergency conductors cannot share raceways, cabinets, or enclosures with conductors from other systems, and the transfer switch must be clearly identified as emergency equipment.

## Comparison of Transition Modes

| Mode | Interruption Time | Synchronization Requirement | Typical Application | Requires Utility Approval |
|---|---|---|---|---|
| Open transition | < 167 ms / 1/6 s | Not required | Single-family homes, commercial premises, optional standby systems | No |
| Closed transition | 0 ms (no interruption) | Voltage difference < 5%, frequency < 0.2 Hz, phase angle < 5° | Data centers, hospitals with sensitive loads, systems with monthly testing without micro‑interruption in emergency | Yes |
| Soft‑loading transition | 0 ms while sources are synchronized; programmable ramp time | Same as closed transition; additional load ramp control | Peak shaving, controlled transfer of large motors, transient reduction | Yes |

## Causes of Transfer Failure

| Cause | Consequence | Relative Frequency | Associated Standard / Technical Reference |
|---|---|---|---|
| Residual voltage on the grid side during manual switching | Backfeeding to the grid and risk of electrocution for utility personnel | Moderate | NEC Art. 702; mandatory transfer switch with central off position |
| Failure of the generator start relay or ATS controller degradation | No generator response upon grid outage | High | NEC Art. 700 (monthly testing required); predictive controller maintenance |
| Synchronization parameters out of range in closed transition | Forced operation in break‑before‑make mode without prior provision, micro‑interruption on sensitive loads | Low | Isochronous governor adjustment; verification of potential transformers on both sources |
| Lack of coordination between generator overload protection and load inrush current | Generator main breaker tripping during transfer, leaving load unpowered even though the set is available | Moderate | NEC Art. 445; adjustment of overload curve above the starting current of the most demanding load |

## Frequently Asked Questions (FAQ)

### What is the main purpose of an automatic transfer switch (ATS)?

The ATS continuously monitors the utility voltage and, upon detecting an interruption or a drop outside permitted limits, sends the start signal to the generator. When it verifies that the generator has reached nominal voltage and frequency, it switches the load from the grid to the generator within a maximum time of 167 ms in open mode, completely isolating it from the distribution network to prevent backfeeding.

### What synchronization conditions must be met for a closed transition transfer?

Closed transition requires that the voltage difference between the grid and the generator be less than 5%, the frequency difference less than 0.2 Hz, and the maximum phase angle between the two sources not exceed 5 degrees. The controller verifies these three conditions before authorizing the source overlap, whose total time must be less than 100 ms.

### When is a closed transition transfer switch mandatory?

No code absolutely requires closed transition; it is selected based on process or load requirements. It is preferable when the 167 ms interruption of open transition is unacceptable for data processing equipment, magnetic resonance imaging systems, or continuous industrial processes, and when it is desired that the mandatory monthly test per NEC Article 700 not cause a micro‑interruption.

### Does the NEC require a specific transfer switch for emergency systems?

Yes. NEC Article 700 establishes that emergency systems must have an automatic transfer switch, dedicated exclusively to emergency loads, installed in an independent enclosure and clearly identified. Sharing the ATS with optional standby circuits or non‑emergency classified loads is not allowed.

### How are generator protections coordinated with the transfer switch?

Coordination is achieved by setting the generator-side overcurrent relays above the total load starting current when the ATS switches, while differential protection and negative-sequence protection are configured to operate instantaneously on internal faults. Overcurrent devices downstream of the ATS must be selective so that a fault in a branch circuit does not cause the generator main breaker to open.

### How is it verified that the existing installation can support the addition of a transfer switch?

NEC Article 220.87 allows sizing based on 125% of the maximum demand recorded over one year. If that data is unavailable, the maximum demand measured in 15-minute intervals over a continuous period of at least 30 days with the building occupied can be used. The resulting value determines the minimum capacity of the transfer switch and the feeder conductor size.

## References
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/Generators_and_Standby_Power_Systems_2014NEC.pdf
- **electrical4u.com**: https://www.electrical4u.com/generator-protection/
