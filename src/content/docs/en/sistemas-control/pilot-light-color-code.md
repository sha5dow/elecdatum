---
title: "Pilot light color code standard"
sidebar:
  label: "Pilot light color code standard"
description: "Technical reference: Pilot light color code standard"
keywords: ["pilot light color code standard indicator", "sistemas-control"]
category: "sistemas-control"
topic: "motor-control-devices"
subcategory: "pilot-light-color-code"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Pilot lights in control systems are luminous indicators that communicate the operating status of machines, processes, or equipment. Their color coding allows quick and intuitive interpretation of normal, abnormal, or dangerous conditions, reducing operator reaction time and improving industrial safety. This standardization follows international criteria such as those defined by IEC 60073, which assigns specific colors to each functional situation.

## Definition

A pilot light is a visual indicator device, typically mounted on control panels, that uses a light source — incandescent, LED, or neon — to signal the status of equipment. It differs from a gas pilot burner in that it operates exclusively with electrical energy and is governed by human-machine interface standards, such as the IEC 60073 series and those harmonized in ANSI Z535.

## Color codes

The IEC 60073:2002 standard establishes the correspondence between pilot light colors, their meaning, and their typical application. The following table summarizes the five fundamental colors used in industrial automation and process control.

| Color | Meaning | Typical application |
|-------|---------|---------------------|
| Red | Danger, stop, failure | Emergency stop, overload, device fault, fire |
| Green | Normal condition, running | Equipment in operation, sequence completed, door closed |
| Yellow | Caution, anomaly | Low level alarm, non-critical overheating, pending automatic reset |
| Blue | Mandatory action, informative status | Maintenance requested, manual operation required, programming mode active |
| White | Neutral, voltage present | Equipment energized without defined status, command confirmation, sequence on hold |

## Detailed meaning

Red. Reserved for conditions that require immediate action or indicate a serious fault. A red pilot light may accompany an emergency stop or a protection trip. It must never be used to indicate a normal operating status.

Green. Indicates that the system is in a safe condition or that the operation is proceeding as intended. It is the run color for starters and variable frequency drives.

Yellow. Warns of a condition that could become dangerous if not corrected. Includes process limit warnings, pending automatic disconnection, or waiting for confirmation.

Blue. Groups signals that require conscious operator intervention. It is used to indicate that a manual mode is active or that a supervisory action is needed.

White. Neutral color that simply confirms the presence of electrical power or active status without positive or negative connotation. It may replace other colors when the meaning is clear from context and the application justifies it.

## Applicable standards

Pilot light color codes are covered by the following international and regional standards:
- **IEC 60073:2002**: Principles and requirements for human-machine interface, marking, and identification.
- **ANSI Z535.1**: Safety color code for signage and labeling in the United States.
- **ISO 3864-1**: Graphical symbols – Safety colors and safety signs.

Although ANSI Z535.1 primarily focuses on printed signs and machine border painting, its color assignments (red = danger, yellow = caution, green = safety) are consistent with pilot lights.

## Practical applications

Pilot lights are installed in process mimics, electrical room control panels, and local operator panels. Typical assignment examples in a pumping system:
- Green pilot light: motor pump running, stable flow.
- Red pilot light: high pressure trip or drive fault.
- Yellow pilot light: low level in suction tank.
- Blue pilot light: system in bypass manual mode.
- White pilot light: three-phase voltage present at terminals.

## Frequently Asked Questions (FAQ)

### Can orange be used instead of yellow for pilot lights?

### Does the color of a pilot light directly determine a safety action?

### What does a white pilot light and a green pilot light lit simultaneously mean?

### Can I install pilot lights with custom colors per the customer?

### Do the mentioned colors also apply to indicators on HMI or only to physical devices?

### Is there a different color code for pilot lights in explosive atmospheres?

## Sources Consulted

- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/pushbuttons_-z-_switches_-z-_indicators/hazardous_location_devices/pilot_light_control_station_assemblies
