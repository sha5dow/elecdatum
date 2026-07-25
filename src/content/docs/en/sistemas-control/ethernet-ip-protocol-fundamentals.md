---
title: "EtherNet/IP protocol fundamentals"
sidebar:
  label: "EtherNet/IP protocol fundamentals"
description: "Technical reference: EtherNet/IP protocol fundamentals"
keywords: ["EtherNet/IP protocol basics industrial", "sistemas-control"]
category: "sistemas-control"
topic: "communication-protocols"
subcategory: "ethernet-ip-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

EtherNet/IP, short for Ethernet Industrial Protocol, is an open industrial network protocol that adapts the CIP (Common Industrial Protocol) to the physical and data link layers of standard Ethernet, enabling real-time communication and device configuration in automation environments with a typical transfer rate of 100 Mbit/s.

## Protocol Architecture

EtherNet/IP distributes its communication services in a hybrid TCP/IP model that assigns different functions to the transport layer: critical I/O traffic uses UDP to minimize latency through implicit messaging, while configuration and diagnostic tasks travel over TCP with explicit messaging. The protocol implements CIP in the upper layers (session, presentation, and application of the OSI model), encapsulating automation data using an object-oriented model common to other ODVA networks such as DeviceNet and ControlNet.

| OSI Layer | Protocol Implemented | Main Function |
| --- | --- | --- |
| Application (7) | CIP | Device profiles and specific objects |
| Presentation (6) | CIP | Data format and type translation |
| Session (5) | CIP | Connection establishment and management |
| Transport (4) | TCP / UDP | Flow control (TCP) or real-time priority (UDP) |
| Network (3) | IP | Routing and logical addressing |
| Data Link (2) | Ethernet | Media Access Control (MAC) and frames |
| Physical (1) | Ethernet (IEEE 802.3) | Electrical/optical signaling and cabling |

## Implicit and Explicit Messaging

The protocol defines two data exchange mechanisms differentiated by their purpose and transport resource. Implicit messaging transfers real-time input/output data with low overhead via UDP packets, using predefined connection identifiers and without needing to interpret commands. Explicit messaging uses TCP for requests and responses with a request/service structure, transporting commands such as reading and writing parameters, configuration, and program uploads, where each message includes a service code, class, instance, and CIP attribute.

| Characteristic | Implicit Messaging (I/O) | Explicit Messaging |
| --- | --- | --- |
| Transport | UDP | TCP |
| Data Format | Only predefined I/O data | Commands and structured data |
| Typical Use | Cyclic process control | Configuration and diagnostics |
| Maximum Packet Size | Up to 1 472 bytes (Ethernet) / 1 472 bytes | Up to 65 535 bytes theoretical, limited by MTU |
| Connection | Unicast or multicast | Point-to-point (unicast) |

## Communication Parameters

Connection parameters determine the frequency and transmission trigger of implicit messaging packets. The trigger type can be cyclic, change of state, or on-demand (polled), and the update rate is configured at the connection origin. The infrastructure uses port 44818 for TCP explicit messaging and port 2222 for UDP implicit messaging.

| Parameter | Typical Value / Range | Description |
| --- | --- | --- |
| Explicit TCP Port | 44818 | Used for configuration and programming |
| Implicit UDP Port | 2222 | Used for cyclic I/O messaging |
| Requested Packet Interval (RPI) | 0.5 ms to 3 200 ms | Implicit data update frequency |
| Connection Timeout | RPI multiplier, typically 4x to 16x | Time before declaring connection loss |
| Standard Ethernet MTU | 1 500 bytes | Maximum frame size without jumbo frames |

## Topologies and Physical Media

EtherNet/IP operates over standard commercial Ethernet infrastructure, supporting star topology via switches, device-level ring topology (DLR), and linear configuration. The protocol is independent of the physical medium, operating over copper and fiber optic with the same range limitations defined by IEEE 802.3 variants.

| Physical Medium | Nominal Speed | Maximum Distance per Segment |
| --- | --- | --- |
| Twisted pair copper Cat5e/6 (100BASE-TX) | 100 Mbit/s | 100 m / 328 ft |
| Twisted pair copper Cat6a/7 (1000BASE-T) | 1 000 Mbit/s | 100 m / 328 ft |
| Multimode fiber 62.5/125 µm (100BASE-FX) | 100 Mbit/s | 2 000 m / 6 562 ft |
| Single-mode fiber 9/125 µm (1000BASE-LX) | 1 000 Mbit/s | 10 000 m / 32 808 ft |

## Data Transport Modes

EtherNet/IP adapters can consume and produce data through various transport modes that define how and when packets are sent. The most deterministic mode is cyclic multicast, where the producer emits data to a multicast group at fixed intervals; alternatively, change-of-state (COS) mode transmits only upon a change in I/O data, and polled mode sends data as a response to an explicit request from the scanner.

| Transport Mode | Transmission Trigger | Typical Use |
| --- | --- | --- |
| Cyclic | Fixed RPI timer | High-speed motion control |
| Change of State (COS) | Data change edge | Traffic reduction in environments with sporadic changes |
| Polled (on-demand) | Scanner request | Diagnostic requests or non-critical events |
| Multicast | Transmission to a group of nodes | Distributed I/O control from a single producer |

## Comparison with Other Industrial Protocols

EtherNet/IP directly competes with other industrial Ethernet protocols based on IEC 61158 standards. Compared to Modbus TCP, it adds a comprehensive CIP object model and producer/consumer communication; with respect to PROFINET IO, the difference is that EtherNet/IP encapsulates CIP over standard TCP/UDP without requiring a modified media access controller or special hardware for strict real-time.

| Protocol | Real-time Messaging | Transport | Ring Topology |
| --- | --- | --- | --- |
| EtherNet/IP | Implicit UDP + CIP Sync (IEEE 1588) | Standard TCP/UDP | Native DLR at device level |
| Modbus TCP | Not native (master-slave polling) | TCP | Dependent on managed switch |
| PROFINET IO | IRT with dedicated hardware or RT with software | Proprietary Ethertype | MRP (Media Redundancy Protocol) |
| EtherCAT | On-the-fly frame processing | Proprietary Ethertype | Logical ring with closed port |

## Frequently Asked Questions (FAQ)

### What is the difference between implicit and explicit messaging in EtherNet/IP?

Implicit messaging uses UDP to exchange real-time input/output data without embedded commands, while explicit messaging operates over TCP with a request/response structure to read or write parameters, configure devices, and transfer programs.

### Which ports should I open in the firewall for an EtherNet/IP network?

Port 44818 TCP for explicit messaging and port 2222 UDP for implicit messaging must be allowed. Additionally, UDP multicast traffic must be enabled in the IP address range used by the application.

### Is it possible to run EtherNet/IP over office Ethernet infrastructure?

Yes, EtherNet/IP operates over standard IEEE 802.3 compliant Ethernet hardware, although in office environments it is recommended to segment traffic using VLANs and managed switches that support IGMP snooping to avoid flooding multicast packets across the entire network.

### What is CIP and why is it relevant to EtherNet/IP?

CIP (Common Industrial Protocol) is an object-oriented application protocol managed by ODVA that provides standardized device profiles and common services across multiple networks, allowing EtherNet/IP to share the same data and configuration model as DeviceNet and ControlNet.

### Does EtherNet/IP support ring topology?

Yes, the protocol defines DLR (Device Level Ring), a layer 2 redundancy mechanism that allows connecting devices in a ring to maintain communication in the event of a single cable or node failure, with recovery times less than 3 ms for 50 nodes.

### Can EtherNet/IP be used with public IP addresses?

Technically it is possible, but it is not recommended for security and determinism reasons. The protocol is designed for isolated or properly segmented control networks, and exposure to the Internet introduces unpredictable latency and vulnerabilities to cyber attacks.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
- **plcacademy.com**: https://www.plcacademy.com/category/plc-basics/
- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=O88HPpYBSlc
