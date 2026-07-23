---
title: "Welding symbols ISO 2553 complete"
sidebar:
  label: "Welding symbols ISO 2553 complete"
description: "Technical reference: Welding symbols ISO 2553 complete"
keywords: ["ISO 2553 welding symbols complete guide", "manufacturing"]
category: "manufacturing"
topic: "welding"
subcategory: "symbols-iso-2553"
skill: "standards-guide"
launch_phase: 5
last_updated: "2026-07-22"
verified: true
---

## General description

The ISO 2553 standard establishes the international system of symbolic representation for welded joints in technical drawings. It defines the structure, position, and meaning of each graphical element necessary to fully describe a welded joint without resorting to extensive notes. The designation includes the reference line, the arrow, the basic and supplementary symbols, and the dimensions indicating the size, length, and edge preparation.

## Symbol structure

The ISO 2553 welding symbol consists of a horizontal reference line, an arrow connecting the reference line to the joint, and a basic symbol representing the weld geometry. The information is distributed with respect to the reference line as follows:

| Symbol element | Description | Typical minimum/maximum dimensions |
|---|---|---|
| Arrow | Connects the reference line to the joint. It is drawn at an angle of 30° to 60° with respect to the reference line. | Length: 10 mm / 0.39 in to 20 mm / 0.79 in |
| Reference line | Horizontal line on which the basic and supplementary symbols are arranged. It must be continuous. | Variable length; line thickness: 0.5 mm / 0.02 in to 1 mm / 0.04 in |
| Basic symbol | Represents the shape of the weld cross-section (e.g., fillet, butt, V). It is placed above or below the reference line. | Symbol height (h): minimum 2.5 mm / 0.1 in, recommended 3.5 mm / 0.14 in for readability |
| Tail (optional) | Extension at the end opposite the arrow of the reference line. It may contain process notes or specifications. | Length: equal to or greater than the height of the note text, minimum 10 mm / 0.39 in |
| Identification line (optional) | Dashed line parallel to the reference line used to indicate the opposite side of the joint when necessary. | Same length as reference line; separation: 2 mm / 0.08 in to 3 mm / 0.12 in |

## Basic welding symbols

The basic symbols indicate the cross-section of the joint. The following table lists the most commonly used according to ISO 2553 and their position relative to the reference line.

| Symbol | Name | Position relative to reference line | Typical preparation angle (metric / imperial) | Minimum effective throat (metric / imperial) |
|---|---|---|---|---|
| ⊔ (rectangle) | Butt weld with square edge (no bevel) | Above the line (arrow side) or below the line (other side) | 0° | According to sheet thickness, minimum 1.5 mm / 0.06 in |
| ∠ (triangle) | Fillet weld | Above the line or below the line; the height of the triangle corresponds to the throat | — | 2 mm / 0.08 in for structural steel |
| V (open) | Butt weld with V bevel | Above the line (arrow side), below the line (other side) | 30° to 60° (typical 60°) | 2 mm / 0.08 in for thickness ≤ 3 mm / 0.12 in |
| ½ V (half V) | Butt weld with half V bevel | Above the line indicates preparation on the arrow side; below the line indicates the other side | 30° to 50° | 2 mm / 0.08 in |
| U | Butt weld with U bevel | Similar to V; the arc of the U is oriented towards the side to be welded | 8° to 12° at the root, bottom radius 6 mm / 0.24 in minimum | 3 mm / 0.12 in |
| J (half U) | Butt weld with half U bevel | Location analogous to half V, curved side indicates preparation | 10° to 20° at the root | 2.5 mm / 0.1 in |

## Supplementary symbols

Supplementary symbols add information about surface finish, welding sequence, and peripheral geometry. They are placed next to the basic symbol.

| Supplementary symbol | Meaning | Typical use in drawing | Associated numerical value |
|---|---|---|---|
| ⌒ (lower arc) | Weld to be made in the workshop (factory) | It is superimposed on the basic symbol | No numerical value |
| ⌒ (upper arc) | Weld to be made on site (assembly) | It is superimposed on the basic symbol | No numerical value |
| Horizontal line above the symbol | Surface finish by machining (M) or grinding (G) | It is placed above the basic symbol; may include the process letter | Letter M or G, optionally followed by Ra roughness (e.g., Ra 3.2 µm / 126 µin) |
| Circle at the intersection of arrow and reference line | Perimeter weld (all around) | It is drawn at the junction point of the arrow and reference line | Circle diameter: 3 mm / 0.12 in to 4 mm / 0.16 in |
| Flag at the intersection | Field weld (on site, not in workshop) | Similar to the circle, but with a triangular flag | Flag height: 3 mm / 0.12 in |

## Dimensioning on the symbol

Weld dimensions are indicated by numbers placed in fixed positions relative to the basic symbol. The following table details the location and meaning of each dimension.

| Dimension location | Parameter indicated | Typical example (mm / in) |
|---|---|---|
| To the left of the basic symbol | Weld size (throat for fillet, effective throat thickness) | 6 / 0.24 (6 mm throat) |
| To the right of the basic symbol | Weld length, optionally followed by the spacing between weld beads | 50 (125) → 50 mm / 1.97 in length, pitch 125 mm / 4.92 in |
| Below the reference line | Size or depth of the preparation (bevel, chamfer) | 3 / 0.12 (3 mm chamfer depth) |
| Above the reference line (above the basic symbol) | Height of the reinforcement | 1.5 / 0.06 (maximum reinforcement of 1.5 mm) |

## Weld process indication

ISO 2553 allows indicating the welding process in the tail of the symbol using the numbering of ISO 4063 standard. The numerical values of the most common processes are:

| Welding process | ISO 4063 number | Typical preheating temperature (metric / imperial) | Indicative current intensity (A) |
|---|---|---|---|
| Manual metal arc welding (SMAW) | 111 | 20 °C / 68 °F to 150 °C / 302 °F depending on steel | 80 – 180 |
| MIG/MAG welding | 131/135 | 15 °C / 59 °F to 50 °C / 122 °F | 100 – 350 |
| TIG welding | 141 | 15 °C / 59 °F to 100 °C / 212 °F | 50 – 250 |
| Submerged arc welding | 121 | 20 °C / 68 °F to 200 °C / 392 °F | 300 – 800 |
| Oxyacetylene welding | 311 | 20 °C / 68 °F to 40 °C / 104 °F | — |

## Typical application examples

The combination of lines, symbols, and dimensions allows describing complex joints. Three common configurations are shown below with their associated parameters.

| Joint type | Resulting symbol | Throat dimension (mm / in) | Length dimension (mm / in) | Typical process |
|---|---|---|---|---|
| Continuous fillet T-joint | Arrow + triangle on line + circle | 5 / 0.20 | — | 135 (MAG) |
| V butt joint with backing | Arrow + V + identification line with rectangle | V depth = 6 / 0.24 | 40 / 1.57 on 120 / 4.72 pitch | 111 (electrode) |
| Corner weld with flush finish | Arrow + triangle + straight upper line with M | 4 / 0.16 | 30 / 1.18 (intermittent beads) | 141 (TIG) |

## Advantages and limitations

The application of ISO 2553 symbols presents advantages and limitations that the designer must consider when preparing welded fabrication drawings.

**Advantages**
- Reduction of written notes on the drawing. A single symbol can contain design, preparation, and process information, eliminating up to 60% of explanatory text compared to non-standardized drawings.
- International standardization that facilitates subcontracting and technical communication between teams from different countries.
- Possibility to add multiple tails and supplementary indications without losing clarity, allowing the description of complex welds of up to four beads on a single reference line.

**Limitations**
- Requires specific training for design and workshop personnel. Incorrect interpretation causes defects in approximately 15% of joints in sectors where personnel are not certified in symbol reading.
- Representation of welds with geometries not covered by basic symbols (e.g., friction or deep penetration laser welds) requires additional notes, losing the graphical advantage.
- ISO 2553 does not specify dimensional tolerances by process; these must be consulted in complementary standards (ISO 13920, ISO 5817), requiring the handling of additional documentation.

## Frequently asked questions

**What is the difference between the arrow side and the other side in a welding symbol?**  
The arrow side refers to the surface of the joint that the arrow points to on the drawing. The symbol placed above the reference line indicates welding on that side, while the symbol below the continuous line (or above the dashed identification line) indicates welding on the opposite side. The separation between the two reference and identification lines is a minimum of 2.5 mm / 0.1 in.

**How is an intermittent weld indicated with ISO 2553?**  
The weld bead length is placed to the right of the basic symbol, followed by a hyphen and the center-to-center spacing. For example, "50-150" indicates beads of 50 mm / 1.97 in length with a pitch of 150 mm / 5.91 in. The number of beads and exact location are defined with an enlarged detail if the part has a total length less than 200 mm / 7.87 in.

**What minimum height should the text have in a welding symbol?**  
The letter height (h) for any number or letter within the symbol must not be less than 2.5 mm / 0.1 in. ISO recommends 3.5 mm / 0.14 in for A3 and A4 formats, and 5 mm / 0.2 in for A2 and larger formats to ensure readability in reduced reproductions.

**Can more than one basic symbol be combined on the same reference line?**  
Yes, ISO 2553 allows multiple basic symbols on the same reference line to indicate combined welds, such as a fillet weld with a plug. Each symbol is placed in its normal position above or below the line, and independent dimensions are associated separated by a thin vertical line of 0.35 mm / 0.014 in thickness.

**How is the surface finish after welding specified?**  
A horizontal line is added above the basic symbol, and above that line, the indication of the finishing process, for example 'M' for machining or 'G' for grinding. If a roughness value is required, it is written next; for example 'M Ra 6.3' indicates a machined finish with an arithmetic mean roughness of 6.3 µm / 248 µin.

**What does the circle at the junction of the arrow and reference line indicate?**  
The circle indicates a perimeter weld, i.e., a joint that must be made around the entire accessible contour of the part. Its diameter is drawn between 3 mm / 0.12 in and 4 mm / 0.16 in and its stroke is reinforced with a line thickness of 0.7 mm / 0.028 in to ensure its visibility on the drawing.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pfd-process-flow-diagram-d_465.html
- **efunda.com**: https://www.efunda.com/forum/show_message.cfm?thread=8717&id=9057
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/mag-welding
