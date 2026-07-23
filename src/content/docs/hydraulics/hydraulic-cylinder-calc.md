---
title: "Cálculo cilindros hidráulicos fuerza velocidad"
sidebar:
  label: "Cálculo cilindros hidráulicos fuerza velocidad"
description: "Ficha tecnica: Cálculo cilindros hidráulicos fuerza velocidad"
keywords: ["hydraulic cylinder force speed bore rod calculation", "hydraulics"]
category: "hydraulics"
topic: "hydraulic-system"
subcategory: "cylinder-calculation"
skill: "hydraulics-reference-table"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

## Símbolos normalizados

| Símbolo | Descripción | Unidades |
| --- | --- | --- |
| _d₂_ | Diámetro del pistón (émbolo) | mm / in |
| _d₁_ | Diámetro del vástago | mm / in |
| _A₂_ | Área efectiva del lado pistón (empuje) | mm² / in² |
| _A₁_ | Área anular del lado vástago (tracción) | mm² / in² |
| _P_ | Presión de trabajo | bar / psi |
| _F₂_ | Fuerza de empuje (extensión) | N / lbf |
| _F₁_ | Fuerza de tracción (retracción) | N / lbf |
| _Q_ | Caudal de fluido | L/min / gpm |
| _v_ | Velocidad lineal del vástago | m/s / in/s |

## Fórmulas de cálculo

**Fuerza de empuje (lado pistón, extensión):**

_F₂ = P · A₂ = P ·_ (π · _d₂²_ / 4)

**Fuerza de tracción (lado vástago, retracción):**

_F₁ = P · A₁ = P ·_ (π · (_d₂²_ − _d₁²_) / 4)

**Velocidad de avance o retroceso:**

_v_ (m/s) = _Q_ (m³/s) / _A_ (m²)  
Sistema imperial: _v_ (in/min) = 231 · _Q_ (gpm) / _A_ (in²)

## Tablas de selección de componentes

Las tablas siguientes muestran las fuerzas y velocidades típicas para cilindros de doble efecto con vástago simple, en función del diámetro interior, la presión y el caudal. Los valores consideran eficiencia del 100 % (sin fricción). Para cálculos reales añadir un factor de pérdidas por fricción del 5–10 %.

### Fuerzas de empuje y tracción

| Diámetro pistón<br>(mm / in) | Diámetro vástago<br>(mm / in) | Área pistón<br>(mm² / in²) | Área anular<br>(mm² / in²) | Fuerza empuje a 100 bar / 1450 psi<br>(kN / lbf) | Fuerza tracción a 100 bar / 1450 psi<br>(kN / lbf) | Fuerza empuje a 200 bar / 2900 psi<br>(kN / lbf) | Fuerza tracción a 200 bar / 2900 psi<br>(kN / lbf) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25 / 0.98 | 12 / 0.47 | 491 / 0.76 | 333 / 0.52 | 4.91 / 1100 | 3.33 / 750 | 9.82 / 2210 | 6.66 / 1500 |
| 32 / 1.26 | 14 / 0.55 | 804 / 1.25 | 563 / 0.87 | 8.04 / 1810 | 5.63 / 1270 | 16.1 / 3620 | 11.3 / 2540 |
| 40 / 1.57 | 18 / 0.71 | 1257 / 1.95 | 940 / 1.46 | 12.6 / 2830 | 9.40 / 2110 | 25.1 / 5650 | 18.8 / 4230 |
| 50 / 1.97 | 22 / 0.87 | 1963 / 3.04 | 1441 / 2.23 | 19.6 / 4410 | 14.4 / 3240 | 39.3 / 8830 | 28.8 / 6480 |
| 63 / 2.48 | 28 / 1.10 | 3117 / 4.83 | 2223 / 3.45 | 31.2 / 7010 | 22.2 / 5000 | 62.3 / 14000 | 44.5 / 10000 |
| 80 / 3.15 | 36 / 1.42 | 5027 / 7.79 | 3682 / 5.71 | 50.3 / 11300 | 36.8 / 8270 | 101 / 22600 | 73.6 / 16500 |
| 100 / 3.94 | 45 / 1.77 | 7854 / 12.2 | 5661 / 8.78 | 78.5 / 17700 | 56.6 / 12700 | 157 / 35300 | 113 / 25400 |
| 125 / 4.92 | 56 / 2.20 | 12272 / 19.0 | 8621 / 13.4 | 123 / 27600 | 86.2 / 19400 | 245 / 55200 | 172 / 38700 |
| 160 / 6.30 | 70 / 2.76 | 20106 / 31.2 | 14137 / 21.9 | 201 / 45200 | 141 / 31700 | 402 / 90400 | 283 / 63600 |
| 200 / 7.87 | 90 / 3.54 | 31416 / 48.7 | 22235 / 34.5 | 314 / 70600 | 222 / 49900 | 628 / 141000 | 445 / 100000 |

### Velocidades del vástago

| Diámetro pistón<br>(mm / in) | Área pistón<br>(mm² / in²) | Caudal 10 L/min / 2.64 gpm<br>velocidad (m/s / in/s) | Caudal 30 L/min / 7.93 gpm<br>velocidad (m/s / in/s) | Caudal 50 L/min / 13.2 gpm<br>velocidad (m/s / in/s) |
| --- | --- | --- | --- | --- |
| 25 / 0.98 | 491 / 0.76 | 0.339 / 13.4 | 1.02 / 40.1 | 1.70 / 66.8 |
| 32 / 1.26 | 804 / 1.25 | 0.207 / 8.14 | 0.621 / 24.4 | 1.04 / 40.7 |
| 40 / 1.57 | 1257 / 1.95 | 0.133 / 5.22 | 0.398 / 15.6 | 0.663 / 26.1 |
| 50 / 1.97 | 1963 / 3.04 | 0.085 / 3.34 | 0.255 / 10.0 | 0.425 / 16.7 |
| 63 / 2.48 | 3117 / 4.83 | 0.053 / 2.10 | 0.160 / 6.31 | 0.267 / 10.5 |
| 80 / 3.15 | 5027 / 7.79 | 0.033 / 1.30 | 0.099 / 3.90 | 0.166 / 6.50 |
| 100 / 3.94 | 7854 / 12.2 | 0.021 / 0.83 | 0.064 / 2.50 | 0.106 / 4.17 |
| 125 / 4.92 | 12272 / 19.0 | 0.014 / 0.54 | 0.041 / 1.61 | 0.068 / 2.69 |
| 160 / 6.30 | 20106 / 31.2 | 0.008 / 0.33 | 0.025 / 0.99 | 0.042 / 1.65 |
| 200 / 7.87 | 31416 / 48.7 | 0.005 / 0.21 | 0.016 / 0.63 | 0.027 / 1.05 |

## Presiones estándar de trabajo

Las presiones de trabajo en sistemas hidráulicos se clasifican típicamente según el tipo de aplicación. Los valores de diseño más habituales se muestran a continuación.

| Clase de presión | Rango típico (bar / psi) | Aplicaciones comunes |
| --- | --- | --- |
| Baja presión | 10 – 70 bar / 145 – 1015 psi | Sistemas de lubricación, transferencia de fluidos, accionamientos ligeros |
| Media presión | 70 – 210 bar / 1015 – 3045 psi | Maquinaria agrícola, prensas hidráulicas de baja capacidad, equipos móviles ligeros |
| Alta presión | 210 – 350 bar / 3045 – 5075 psi | Excavadoras, maquinaria de construcción, equipos industriales pesados |
| Muy alta presión | 350 – 700 bar / 5075 – 10150 psi | Aplicaciones especiales: hidráulica de rescate, herramientas de corte, cilindros de gran tonelaje |

## Ejemplo de cálculo

**Datos del cilindro:**  
Diámetro del pistón _d₂_ = 80 mm / 3.15 in  
Diámetro del vástago _d₁_ = 40 mm / 1.57 in  
Presión de trabajo _P_ = 200 bar / 2900 psi  
Caudal _Q_ = 30 L/min / 7.93 gpm  

**1. Áreas efectivas**  
_A₂_ = π · (80 mm)² / 4 = 5027 mm² / 7.79 in²  
_A₁_ = π · (80² − 40²) / 4 = 3770 mm² / 5.84 in²  

**2. Fuerza de empuje (extensión)**  
_F₂_ = 200 bar · 10 N/(cm²·bar) · 50.27 cm² = 100 540 N ≈ **100.5 kN / 22 600 lbf**  

**3. Fuerza de tracción (retracción)**  
_F₁_ = 200 bar · 10 N/(cm²·bar) · 37.70 cm² = 75 400 N ≈ **75.4 kN / 16 950 lbf**  

**4. Velocidad de extensión**  
_A₂_ = 5027 mm² = 0.005027 m²  
_Q_ = 30 L/min = 0.0005 m³/s  
_v_ = 0.0005 / 0.005027 = **0.0995 m/s / 3.92 in/s**  

## Preguntas frecuentes

**¿Qué fuerza de empuje genera un cilindro de 100 mm de diámetro a 250 bar?**  
Un cilindro con diámetro de pistón de 100 mm (3.94 in) operado a 250 bar (3626 psi) desarrolla una fuerza de empuje de 196.3 kN (44 100 lbf), despreciando fricciones.  

**¿Cómo afecta el diámetro del vástago a la fuerza de retracción?**  
La fuerza de retracción es siempre menor que la de empuje porque el área anular es más pequeña. Por ejemplo, con un vástago de 45 mm (1.77 in) en un cilindro de 100 mm (3.94 in), la fuerza de tracción a 200 bar (2900 psi) es de 113 kN (25 400 lbf), un 28 % inferior a la fuerza de empuje.  

**¿Qué velocidad alcanza un cilindro de 80 mm de diámetro con un caudal de 40 L/min?**  
Con un caudal de 40 L/min (10.6 gpm), la velocidad de extensión de un cilindro de 80 mm (3.15 in) de diámetro interior es aproximadamente 0.133 m/s (5.22 in/s).  

**¿Cuál es la presión necesaria para levantar una carga de 50 kN con un cilindro de 63 mm?**  
Para un cilindro con diámetro de pistón de 63 mm (2.48 in) que debe ejercer 50 kN (11 240 lbf) de empuje, se requiere una presión de trabajo de aproximadamente 160 bar (2320 psi).  

**¿Es válida la fórmula de fuerza para cilindros de simple efecto?**  
Sí, en un cilindro de simple efecto la fuerza de empuje se calcula con la misma fórmula _F = P · A_, pero la carrera de retorno depende de un muelle o carga externa, no de presión hidráulica opuesta.  

**¿Qué margen se recomienda añadir por fricción en los cálculos de fuerza?**  
La fricción de juntas y cojinetes puede consumir entre un 5 % y un 20 % de la fuerza teórica. Para cálculos preliminares se suele aplicar un factor de incremento del 10 % sobre la carga requerida.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hydraulic-force-calculator-d_1369.html
- **engineersedge.com**: https://www.engineersedge.com/fluid_flow/cylinder_piston_velocity.htm
- **efunda.com**: https://www.efunda.com/designstandards/oring/design_guidelines.cfm
