---
title: "Push button color code standard"
sidebar:
  label: "Push button color code standard"
description: "Technical reference: Push button color code standard"
keywords: ["push button color code standard IEC", "sistemas-control"]
category: "sistemas-control"
topic: "motor-control-devices"
subcategory: "push-button-color-code"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

The color code for industrial push buttons is standardized to provide immediate and safe visual communication between the operator and the machine, reducing the risk of human error. The main reference standards are IEC 60073, which establishes coding principles for indicators and actuators, and NFPA 79 in the field of industrial machinery in North America.

## Standardized Color Codes

The assignment of colors to push buttons follows a semantic convention where each color communicates a state or a required action. The following table summarizes the correspondence between color, meaning, and typical application in an industrial control environment.

| Color | General meaning | Typical application in push buttons |
|---|---|---|
| Red | Emergency, stop, danger | Emergency stop, general stop, immediate correction action |
| Yellow | Anomaly, warning, caution | Intervention to suppress an abnormal condition (reset, restart) |
| Green | Safe condition, run, normal | Start, start-up, cycle start |
| Blue | Mandatory action or state | Reset, non-critical configuration functions |
| White / Gray | No specific meaning assigned | ON, auxiliary functions, confirmation |
| Black | No specific meaning assigned | OFF, non-emergency stop, auxiliary functions |

## Color Selection According to Function

Emergency Stop buttons must exclusively use the color red on a yellow background, according to IEC 60947-1, to ensure their instant identification under any lighting condition or operational stress. This combination must not be used for any other function.

For Start or Run push buttons, green is the accepted standard. By symbiosis in control panels, the Stop (non-emergency) button is frequently black or red, although if red is used it must be clearly differentiated from the emergency stop button, generally by size and the absence of the yellow background.

In two-hand control or sequential functions, white, gray, or blue colors are reserved for actions that do not imply a direct danger from accidental activation. Blue is commonly associated with the Reset button.

## Typical Applications

In the practice of control panel integration, color codes are applied following a visual hierarchy where red dominates over any other stimulus. A typical machine tool control panel will include a red mushroom-head button on a yellow background for emergency stop, a green flush push button for automatic cycle start, and a black or red flush push button for cycle stop.

In distributed control system (DCS) consoles or control rooms, push buttons on touch screens and physical buttons replicate this coding. The backlighting of physical push buttons follows the same code, adding status information: a green button may be lit steady to indicate run or flashing to indicate a start sequence.

## Frequently Asked Questions (FAQ)

### Can I use a red button for a normal cycle stop if the emergency stop is a mushroom-head?

Yes, a red push button is allowed for cycle stop as long as the emergency stop push button is a mushroom-head type with latching and yellow background, clearly differentiated in shape and actuation mode.

### What color is assigned to the start function in an automated process?

Green is the standardized color for start, start-up, or sequence initiation, indicating a safe condition.

### Is it mandatory to use yellow for reset buttons?

Yellow is the recommended color for functions that suppress an abnormal condition, such as a reset after a fault stop, but in practice blue is also used for general non-critical resets.

### Must emergency stop buttons always be illuminated?

It is not a regulatory requirement that they be illuminated; identification depends on chromatic contrast (red on yellow). Illumination may be added to improve visibility in dark environments, but is not mandatory.

### What color corresponds to a test or lamp test push button?

There is no fixed color; white, gray, or blue are commonly used for test, verification, or maintenance functions, as they are colors without assigned critical meaning.

### Do the color codes also apply to pilot indicators?

Yes, IEC 60073 standard unifies the meanings for luminous indicators and push buttons: red for danger/stop, yellow for warning, green for run, blue for obligation, and white for neutral states.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
- **plcacademy.com**: https://www.plcacademy.com/ladder-logic-symbols/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/pushbuttons_-z-_switches_-z-_indicators/pushbuttons
