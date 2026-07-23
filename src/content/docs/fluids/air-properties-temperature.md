---
title: "Propiedades del aire por temperatura"
sidebar:
  label: "Propiedades del aire por temperatura"
description: "Ficha tecnica: Propiedades del aire por temperatura"
keywords: ["air properties density viscosity temperature", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "air-properties"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

El aire seco a presión atmosférica estándar se comporta como un gas ideal. A 0 °C y 101.325 kPa, su densidad es 1,292 kg/m³ (0,0807 lb/ft³) y su viscosidad dinámica alcanza 17,22 μPa·s. Las propiedades termofísicas presentadas a continuación son válidas para aire seco a 101.325 kPa (14.696 psi) y temperaturas en el rango de −20 °C a 50 °C, calculadas a partir de correlaciones ampliamente verificadas en la literatura de ingeniería.

## Propiedades del aire seco a presión atmosférica estándar (101.325 kPa / 14.696 psi)

| Temperatura (°C / °F) | Densidad (kg/m³ / lb/ft³) | Viscosidad dinámica (μPa·s / lb/(ft·s)×10⁷) | Viscosidad cinemática (cSt / ft²/s×10⁵) | Conductividad térmica (W/(m·K) / Btu/(h·ft·°F)) | Velocidad del sonido (m/s / ft/s) | Cp (kJ/(kg·K) / Btu/(lb·°F)) | Prandtl (-) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| −20 °C / −4 °F | 1.395 / 0.0871 | 16.20 / 3.383 | 11.61 / 12.50 | 0.0227 / 0.0131 | 318.9 / 1046.5 | 1.006 / 0.2403 | 0.718 |
| −10 °C / 14 °F | 1.342 / 0.0838 | 16.72 / 3.492 | 12.46 / 13.41 | 0.0235 / 0.0136 | 325.2 / 1067.0 | 1.006 / 0.2403 | 0.715 |
| 0 °C / 32 °F | 1.292 / 0.0807 | 17.22 / 3.596 | 13.32 / 14.34 | 0.0244 / 0.0141 | 331.3 / 1086.9 | 1.006 / 0.2403 | 0.711 |
| 10 °C / 50 °F | 1.247 / 0.0779 | 17.71 / 3.700 | 14.20 / 15.28 | 0.0252 / 0.0145 | 337.4 / 1107.0 | 1.006 / 0.2403 | 0.708 |
| 15 °C / 59 °F | 1.225 / 0.0765 | 17.95 / 3.750 | 14.65 / 15.77 | 0.0256 / 0.0148 | 340.3 / 1116.5 | 1.006 / 0.2403 | 0.707 |
| 20 °C / 68 °F | 1.205 / 0.0752 | 18.20 / 3.802 | 15.11 / 16.26 | 0.0260 / 0.0150 | 343.3 / 1126.2 | 1.006 / 0.2403 | 0.706 |
| 25 °C / 77 °F | 1.184 / 0.0740 | 18.44 / 3.852 | 15.57 / 16.76 | 0.0264 / 0.0152 | 346.2 / 1135.9 | 1.006 / 0.2403 | 0.704 |
| 30 °C / 86 °F | 1.165 / 0.0727 | 18.67 / 3.900 | 16.03 / 17.25 | 0.0268 / 0.0155 | 349.2 / 1145.6 | 1.006 / 0.2403 | 0.702 |
| 40 °C / 104 °F | 1.128 / 0.0704 | 19.14 / 3.998 | 16.98 / 18.28 | 0.0275 / 0.0159 | 354.9 / 1164.4 | 1.006 / 0.2403 | 0.699 |
| 50 °C / 122 °F | 1.093 / 0.0682 | 19.59 / 4.093 | 17.93 / 19.30 | 0.0283 / 0.0164 | 360.6 / 1183.0 | 1.006 / 0.2403 | 0.696 |

## Fórmulas de aplicación

La constante de gas específica del aire seco es 287,058 J/(kg·K) y la relación de calores específicos γ es 1,4. Todas las propiedades de la tabla pueden calcularse a otras temperaturas (dentro del rango de gas ideal) con las siguientes ecuaciones:

**Densidad**  
Se obtiene mediante la ecuación de estado del gas ideal:  
ρ = p / (R·T)  
donde p es la presión absoluta (Pa), R = 287,058 J/(kg·K) y T la temperatura absoluta (K).

**Viscosidad dinámica – Ley de Sutherland**  
μ = μ₀ · (T/T₀)³⁄² · (T₀ + S) / (T + S)  
μ₀ = 17,22 μPa·s a T₀ = 273,15 K, constante de Sutherland S = 110,4 K. Esta correlación tiene un error inferior al 2 % entre −100 °C y 300 °C.

**Conductividad térmica**  
k = k₀ · (T/T₀)³⁄² · (T₀ + Sₖ) / (T + Sₖ)  
k₀ = 0,02435 W/(m·K) a T₀ = 273,15 K, Sₖ = 194 K.

**Velocidad del sonido**  
c = √(γ · R · T)  
γ = 1,4 (aire diatómico). Alternativamente puede usarse c = √(γ · p / ρ).

**Número de Prandtl**  
Pr = Cp · μ / k  
Cp se considera constante (1,006 kJ/(kg·K)) en el intervalo de la tabla; el error máximo por esta simplificación es inferior al 0,5 %.

**Viscosidad cinemática**  
ν = μ / ρ  
Los valores en cSt se obtienen directamente de μ (μPa·s) y ρ (kg/m³): ν [cSt] = μ / ρ.

## Criterios de selección

El rango de temperatura de aplicación de esta tabla es de −20 °C a 50 °C (−4 °F a 122 °F) a una presión absoluta de 101,325 kPa (14,696 psi). Estos valores representan las propiedades del aire seco (0 % de humedad relativa) y resultan adecuados para la mayoría de los cálculos de ingeniería en ventilación, climatización, aerodinámica subsónica y transferencia de calor donde no se superen los 200 °C ni presiones muy alejadas de la atmosférica. Para condiciones que involucren humedad significativa, altitud elevada o temperaturas extremas, deben aplicarse correcciones por presión parcial de vapor y gases reales, o bien consultar software especializado con bases de datos termofísicos como REFPROP.

## Preguntas frecuentes

**1. ¿Cuál es la densidad del aire a 20 °C y 1 atm?**  
La densidad del aire seco a 20 °C y 101.325 kPa es 1,205 kg/m³ (0,0752 lb/ft³). Este valor se reduce aproximadamente un 0,4 % si la humedad relativa alcanza el 50 % a esa temperatura.

**2. ¿Cómo varía la viscosidad dinámica del aire con la temperatura?**  
A 0 °C la viscosidad dinámica es 17,22 μPa·s, y aumenta con la temperatura siguiendo la ley de Sutherland. A 50 °C alcanza 19,59 μPa·s y a 100 °C sería aproximadamente 21,8 μPa·s.

**3. ¿Qué velocidad del sonido tiene el aire a 15 °C?**  
La velocidad del sonido en aire seco a 15 °C es 340,3 m/s (1116,5 ft/s). Este valor es el adoptado por la Atmósfera Estándar Internacional (ISA) y se incrementa en aproximadamente 0,6 m/s por cada grado Celsius.

**4. ¿Cuál es el número de Prandtl del aire a 25 °C?**  
El número de Prandtl del aire seco a 25 °C y 1 atm es 0,704. Este valor adimensional se mantiene cercano a 0,71 en un amplio intervalo de temperaturas ambiente, lo que indica que la difusividad de momento y la difusividad térmica son similares.

**5. ¿Cuál es la conductividad térmica del aire a 0 °C?**  
La conductividad térmica del aire seco a 0 °C y 1 atm es 0,0244 W/(m·K) (0,0141 Btu/(h·ft·°F)). Este valor prácticamente se triplica cuando el aire alcanza los 1000 °C, aunque suele seguir siendo bajo comparado con sólidos y líquidos.

**6. ¿Cuál es la viscosidad cinemática del aire a 20 °C?**  
La viscosidad cinemática del aire a 20 °C y 101.325 kPa es 15,11 cSt (1,626×10⁻⁴ ft²/s). Este valor duplica aproximadamente la viscosidad cinemática del agua a la misma temperatura (~1 cSt), lo que es relevante en análisis de similitud dinámica.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/air-properties-d_156.html
- **thermopedia.com**: https://www.thermopedia.com/content/553/
