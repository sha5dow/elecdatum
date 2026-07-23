---
title: "Welding symbols AWS A2.4"
sidebar:
  label: "Welding symbols AWS A2.4"
description: "Technical reference: Welding symbols AWS A2.4"
keywords: ["AWS A2.4 welding symbols complete reference", "manufacturing"]
category: "manufacturing"
topic: "welding"
subcategory: "symbols-aws-a24"
skill: "standards-guide"
launch_phase: 5
last_updated: "2026-07-22"
verified: true
---

100% of welding symbols in technical drawings in America and much of the world are governed by the AWS A2.4 standard, published by the American Welding Society. This standard is a communication standard, not a design code, and its correct application eliminates ambiguities between the designer and the welding operator, covering from joint preparation to non-destructive testing.

## Components of the Symbol System

The complete welding symbol is built from several elements arranged on a horizontal reference line. Each component has a standardized location that conveys specific information about the joint and the process.

| Component | Location and function |
|---|---|
| Arrow line (hänvisningslinje) | Touches the edge of the part to be welded or points directly to the weld bead. It can be multiple if required to indicate several sides of a joint. |
| Reference line (referenslinje) | Consists of a continuous line and a dashed line (or a single line depending on practice). Information placed above the continuous line refers to the arrow side; information below the continuous line indicates the other side. |
| Basic symbol (grundsymbol) | Represents the joint geometry (V-groove, bevel, fillet, plug, etc.) and is drawn above or below the reference line. |
| Supplementary symbol (tilläggssymbol) | Complements the basic symbol (e.g., concave, convex, backing, consumable insert). It is placed directly above or below the basic symbol. |
| Tail (laxstjärt) | Fork at the end opposite the arrow; contains additional information such as process specification, filler metal type, or test note. It may be omitted if no additional data is required. |

## Basic Welding Symbols

The basic symbols define the joint type and preparation geometry. Each is drawn with fixed line thickness, typically **0.35 mm / 0.014 in** for drawing sheets A and B. The symbol height is usually **3 mm / 0.12 in**, proportional to the drawing letter size.

| Symbol | Designation | Typical application |
|---|---|---|
| ▼ | V-groove | Butt weld with single bevel, thicknesses 5–25 mm / 0.2–1.0 in |
| ▼▼ | Double V-groove | Welding from both sides on thicknesses greater than 20 mm / 0.8 in |
| ⌝ | Fillet | T-joints or lap joints; leg size is indicated to the left of the symbol |
| ⌵ | Bevel | Groove prepared on one edge; bevel angle is indicated to the left |
| □ | Plug or slot | Weld in elongated or circular hole; center-to-center spacing and pitch are indicated to the right |
| ∟ | Edge or corner | Surfacing or fusion edge weld, without joint preparation |

## Dimension and Tolerance Indication

AWS A2.4 does not impose manufacturing tolerances; it is a graphical representation standard. However, all dimensional information necessary to execute the weld is included in the symbol itself, respecting the following field arrangement (measurements in the same cell, metric and imperial where applicable).

| Field | Data contained | Example value |
|---|---|---|
| Left of symbol | Weld size, effective throat or depth of penetration | **a 6 mm / 0.24 in** (throat) |
| Inside the basic symbol | Length of the weld bead | **100 mm / 3.94 in** |
| Right of symbol | Number of intermittent welds, pitch or length of each segment | **3 × 50 (150) mm / 2.0 × 5.9 in** |
| Multiple reference lines | Sequence of operations or layers | First pass: GTAW; second pass: SMAW |

Bevel angles (e.g., **30°**) and root openings (**2–4 mm / 0.08–0.16 in**) are noted to the left of the groove symbol. When a weld is required around the entire perimeter, the complementary circle is added at the intersection of the arrow line and the reference line.

## Applicable Materials

The AWS A2.4 symbol standard is independent of the base material and filler metal. It is used in all sectors that employ fusion welding, brazing or soldering, and non-destructive testing, without any restriction on the material to be joined. This includes:

- Carbon and alloy steels (structural, pressure vessels)
- Stainless steels (300 and 400 series)
- Aluminum alloys (2xxx, 5xxx, 6xxx, 7xxx series)
- Titanium and nickel alloys
- Copper, brass, and bronze
- Gray and ductile cast irons (with suitable welding processes)

The tail of the symbol is reserved for identifying the welding process (e.g., GTAW, SMAW, FCAW) or the consumable specification, ensuring metallurgical compatibility without changing the shape of the basic symbol.

## Advantages and Limitations

**Advantages**

- Eliminates ambiguities in drawing interpretation; the same symbol is understandable in any shop that follows the standard.
- Centralizes all joint information in a single graphic element: geometry, dimensions, process, filler metal, and controls.
- Significantly reduces the number of views and sections required in the technical drawing.
- Facilitates automation and reading by CAD/CAM systems that translate symbols into welding paths.

**Limitations**

- Does not directly provide manufacturing tolerances; these must be indicated in supplementary drawing notes or in the applicable design codes (e.g., ASME B31.3).
- Initial learning curve for operators unfamiliar with the standard; misplacement of a symbol can cause defects.
- Representation of complex intermittent welds or multi-pass sequences can saturate the symbol and require multiple reference lines.
- Use of the tail is not mandatory, which sometimes omits critical data if workshop procedures are not standardized.

## Guide for Selecting the Correct Symbol

1. **Identify the joint geometry**. Determine whether the joint is butt, T-joint, lap, corner, or edge. This decides the basic symbol.
2. **Choose the arrow side**. The arrow line must touch the part that is prepared or where the first bead will be deposited. For symmetric joints, the arrow is directed to the side that best represents the preparation.
3. **Place the weld size**. To the left of the basic symbol, note the effective throat (for fillets) or the depth of preparation (for grooves). If it is a fillet, the size is preceded by the capital letter **L** or directly by the dimension.
4. **Indicate the length and pitch**. For intermittent welds, write to the right of the symbol: length of each segment, hyphen, center-to-center pitch, and if necessary, number of segments in parentheses.
5. **Add supplementary symbols** if contour (concave, convex, flush) or backing is required.
6. **Complete the tail** with the welding process specification (e.g., AWS A5.18 for carbon steel) or with the reference to the qualified procedure (WPS).
7. **Review the dashed reference line**: if the weld is to be made on the opposite side of the arrow, the basic symbol is placed below the continuous line; if on both sides, a double continuous or dashed line is used depending on company practice.

## Frequently Asked Questions (FAQ)

1. **What is the recommended line thickness for welding symbols?**  
   **0.35 mm / 0.014 in** for drawing sheets size A and B, **0.5 mm / 0.020 in** for C and D, and **0.7 mm / 0.028 in** for formats E and larger, per AWS A2.4.

2. **What is the minimum length of the reference line?**  
   Common practice recommends at least **100 mm / 4.0 in**, approximately twice the total symbol length, to ensure reading clarity.

3. **How many multiple reference lines can be stacked?**  
   Up to **4 reference lines** consecutively are allowed before interpretation becomes confusing; for more complex joints, additional notes are preferred.

4. **What dimension should the arrow have?**  
   Arrow length is at the drafter's discretion, but the tip angle must be **15° to 30°** relative to the reference line, with a minimum tip length of **3 mm / 0.12 in**.

5. **What is the height of the basic fillet symbol?**  
   The fillet symbol, at drawing scale, measures **3 mm / 0.12 in** in height, matching the standard dimension height on drawings.

6. **Can the tail of the symbol be omitted?**  
   Yes, the tail is omitted when there is no need to specify the process, filler metal, or inspection standard; in those cases, the reference line ends in a dovetail without additional information.

## Sources Consulted

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/piping-codes-standards-d_6.html
- **efunda.com**: https://www.efunda.com/forum/show_message.cfm?start=1&thread=8717&id=9057
- **manufacturingguide.com**: https://www.manufacturingguide.com/sv/ordlista/svetsbeteckning
