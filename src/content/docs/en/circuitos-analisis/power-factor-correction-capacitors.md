---
title: "Power factor correction with capacitors"
sidebar:
  label: "Power factor correction with capacitors"
description: "Technical reference: Power factor correction with capacitors"
keywords: ["power factor correction capacitor sizing calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "power-factor"
subcategory: "power-factor-correction"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Power factor correction with capacitors consists of connecting capacitor banks in parallel with inductive loads to compensate for the reactive power demanded by motors, transformers, and ballasts, thereby reducing the phase shift between voltage and current. A low power factor, typically below 0.95, increases losses in conductors and transformers, raises line current, and can lead to financial penalties from the electric utility. The practical objective is to bring the power factor to a value between 0.9 and 0.95, a range that balances investment cost and technical-economic benefit without attempting to reach unity, which would be excessively costly.

## Principle of Power Factor Correction
In an alternating current circuit with predominantly inductive characteristics, the total current I L lags the voltage V by an angle φ₁. When a capacitor is installed in shunt, it draws a current I C that leads the voltage by 90°. The phasor sum of I L and I C yields a resultant current I R with a phase angle φ₂ < φ₁, raising the power factor from cos φ₁ to cos φ₂. The active power P remains unchanged because the capacitor only exchanges reactive power. The capacitor supplies capacitive reactive power Q C that partially cancels the inductive reactive power Q L, reducing the apparent power S and the line current.

## Calculation of Capacitor Size
The capacitive reactive power required to change from a power factor cos φ₁ to cos φ₂ is obtained with the formula:

> **Q C = P × (tan φ₁ − tan φ₂)**

where Q C is the capacitor reactive power in kilovolt-amperes reactive (kVAR), P is the active power of the load in kilowatts (kW), and φ₁, φ₂ are the initial and desired phase angles. The capacitance of the capacitor for a single-phase system is calculated as:

> **C = Q C / (2π f V²)**

For a three-phase system with capacitors connected in delta (the most common configuration), the capacitance per phase is determined by:

> **C Δ = Q C / (2π f V L² (3))**

where C Δ is the capacitance in farads (F), f is the grid frequency in hertz (Hz) —50 Hz or 60 Hz depending on the region—, V L is the line voltage in volts (V), and Q C is the total three-phase reactive power in volt-amperes reactive (VAR). If the capacitors are connected in wye, the capacitance per phase is three times larger: C Y = 3 C Δ.

### Numerical Example
Consider an industrial installation with an active power of 100 kW (100 000 W) operating at an initial power factor of 0.70, and it is desired to correct to 0.95. The corresponding angles are φ₁ = arccos(0.70) ≈ 45.57° and φ₂ = arccos(0.95) ≈ 18.19°. Applying the formula:

Q C = 100 kW × (tan 45.57° − tan 18.19°) = 100 × (1.02 − 0.33) ≈ 69 kVAR

For a three-phase 400 V / 277 V, 50 Hz network, delta-connected capacitors require:

C Δ = 69 000 VAR / (2π × 50 Hz × (400 V)² × 3) ≈ 69 000 / (314.16 × 160 000 × 3) ≈ 0.000 457 F = 457 μF per phase.

The result in imperial units (480 V, 60 Hz) is obtained similarly: for a 100 kW load, 480 V line-to-line, the capacitance per phase in delta would be approximately 317 μF.

## Correction Factor Table
The correction factor presented in the following table is the multiplier that, applied to the active power in kW, yields the kVAR of the capacitor needed to raise the power factor from the initial value (left column) to the desired value (top row). The values are dimensionless and valid for any grid frequency.

| Initial power factor | Desired power factor → 1.00 | 0.99 | 0.98 | 0.97 | 0.96 | 0.95 | 0.94 | 0.93 | 0.92 | 0.91 | 0.90 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0.50 | 1.73 | 1.59 | 1.53 | 1.48 | 1.44 | 1.40 | 1.37 | 1.34 | 1.30 | 1.28 | 1.25 |
| 0.55 | 1.52 | 1.38 | 1.32 | 1.28 | 1.23 | 1.19 | 1.16 | 1.12 | 1.09 | 1.06 | 1.04 |
| 0.60 | 1.33 | 1.19 | 1.13 | 1.08 | 1.04 | 1.01 | 0.97 | 0.94 | 0.91 | 0.88 | 0.85 |
| 0.65 | 1.17 | 1.03 | — | — | — | — | — | — | — | — | — |

Note: Values not shown (—) correspond to combinations whose correction factors are directly derived from the expression Q C = P (tan φ₁ − tan φ₂) and can be calculated with it. The table is limited to the data verified in the available sources.

## Configuration of Capacitor Banks
Capacitor banks for power factor correction in three-phase systems are preferably connected in delta because each capacitor is subjected to the line-to-line voltage, requiring a capacitance three times smaller than in wye connection for the same total reactive power. This configuration also takes advantage of the fact that many single-phase capacitors are designed for line voltage. Wye connection is used occasionally when it is necessary to limit the voltage applied to each unit, by connecting the neutral to ground, or when correcting unbalanced phase-to-neutral single-phase loads. In installations with load variations, automatic controllers are installed that connect and disconnect capacitor steps to keep the power factor within the desired band, avoiding overvoltages during low-load periods.

The location of capacitors can be:
- **Individual correction**: each important motor or inductive load receives its own capacitor, connected directly at the terminals. Reduces reactive currents in all upstream conductors.
- **Group correction**: a common bank for a set of loads, located at the motor control center.
- **Centralized correction**: a single bank at the service entrance, compensating the overall power factor of the installation.

## Benefits of Power Factor Correction
Power factor correction with capacitors provides several operational and economic benefits. First, it reduces the electric bill by eliminating or minimizing surcharges that utilities apply when the power factor is below 0.95. Second, it increases the available capacity of the system: by decreasing line current, capacity is freed up in transformers, cables, and switchgear, allowing new loads to be added without oversizing the infrastructure. Third, Joule losses in conductors are reduced, since losses are proportional to the square of the current. Finally, voltage drop in feeders decreases, improving voltage regulation at consumption points and extending the service life of connected equipment.

## Typical Power Factors in Industry
For reference, two tables with representative power factors are presented. The first shows the variation of power factor of standardized three-phase motors as a function of load. The second collects typical uncorrected values in different industrial sectors.

### Three-Phase Electric Motors – Typical Power Factor by Load
| Power (hp / kW) | Speed (rpm) | No load | 1/4 load | 1/2 load | 3/4 load | Full load |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 – 5 / 0 – 3.7 | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.72 | 0.82 | 0.84 |
| 5 – 20 / 3.7 – 14.9 | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.74 | 0.84 | 0.86 |
| 20 – 100 / 14.9 – 74.6 | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.79 | 0.86 | 0.89 |
| 100 – 300 / 74.6 – 223.7 | 1800 | 0.15 – 0.20 | 0.50 – 0.60 | 0.81 | 0.88 | 0.91 |

### Uncorrected Power Factor by Industrial Sector
| Sector | Typical power factor |
| :--- | :--- |
| Coal mining | 65 – 80 |
| Cement | 75 – 80 |
| Chemical | 65 – 75 |
| Electrochemical | 65 – 75 |
| Foundry | 75 – 80 |
| Forging | 70 – 80 |
| Hospitals | 75 – 80 |
| Manufacturing (machinery) | 60 – 65 |
| Paints | 65 – 70 |
| Metallurgy | 65 – 70 |
| Offices | 80 – 90 |
| Oil pumping | 40 – 60 |
| Plastics | 75 – 80 |
| Stamping | 60 – 70 |
| Steel mills | 65 – 80 |
| Textile | 35 – 60 |
| Brewery | 75 – 80 |

## Frequently Asked Questions (FAQ)
### Why is the power factor not corrected to unity?
Achieving a power factor of unity (1.00) requires completely canceling the inductive reactive power, which demands larger capacitors, increases the risk of overvoltage under light load conditions, and raises the installation cost without proportional economic return. Values between 0.90 and 0.95 eliminate penalties and optimize the cost-benefit ratio.

### How is the required reactive power for a three-phase motor calculated?
The active power in kW and the current power factor cos φ₁ are measured or taken from the nameplate. With the desired power factor cos φ₂, apply Q C = P (tan φ₁ − tan φ₂). The result, in kVAR, is divided by the line voltage and frequency to size the capacitor bank.

### What is the difference between fixed and automatic correction?
Fixed correction permanently maintains a constant capacitance value, suitable for stable loads. Automatic correction incorporates a controller that connects or disconnects capacitor steps according to instantaneous reactive demand, ideal for installations with frequent load variations.

### Can correction with capacitors cause overvoltages?
Yes, especially if the capacitor bank is not disconnected when the inductive load decreases significantly. Excess capacitive reactive power can raise the voltage at the terminals, affecting sensitive equipment. Therefore, it is recommended to install automatic controllers or manually disconnect capacitors when not in service.

### Is it suitable to connect the capacitor directly at the motor terminals?
Yes, individual correction is a common practice that prevents reactive current from circulating through the feeders. The capacitor must be sized so that self-excitation of the motor does not occur at no load, limiting the capacitive reactive power to 90 % of the motor's magnetizing current.

### Does the grid frequency influence capacitor sizing?
The calculated capacitance is inversely proportional to frequency. The same capacitor produces less reactive power at 50 Hz than at 60 Hz. Therefore, selection tables must correspond to the nominal frequency of the installation, or the capacitance value must be corrected using the frequency ratio.

## References
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-11/practical-power-factor-correction/
- **electrical4u.com**: https://www.electrical4u.com/power-factor-correction/
