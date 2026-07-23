---
title: "Números adimensionales mecánica fluidos"
sidebar:
  label: "Números adimensionales mecánica fluidos"
description: "Ficha tecnica: Números adimensionales mecánica fluidos"
keywords: ["Reynolds Nusselt Prandtl Froude numbers", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "dimensionless-numbers"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## Descripción general
Los números adimensionales son parámetros fundamentales en mecánica de fluidos y transferencia de calor, obtenidos mediante adimensionalización de las ecuaciones que gobiernan el movimiento. Permiten caracterizar el régimen de flujo, predecir transiciones y comparar sistemas geométricamente similares sin depender de escalas dimensionales. A continuación se presenta una tabla exhaustiva con su definición, interpretación física y campos de aplicación, seguida de valores típicos del número de Prandtl para agua y aire, criterios prácticos de selección y respuestas a las preguntas más frecuentes.

## Tabla de números adimensionales
| Nombre | Símbolo | Fórmula | Interpretación | Aplicación principal |
|---|---|---|---|---|
| Reynolds | Re | Re = (ρ v L) / η | Relación entre fuerzas inerciales y viscosas | Predicción del régimen laminar o turbulento |
| Euler | Eu | Eu = Δp / (ρ v²) | Relación entre caída de presión y energía cinética | Pérdidas de carga en tuberías y accesorios |
| Froude | Fr | Fr = v / √(g L) | Relación entre fuerzas inerciales y gravitacionales | Flujos con superficie libre, resaltos hidráulicos |
| Mach | Ma | Ma = v / c | Relación entre la velocidad del flujo y la del sonido | Flujos compresibles y ondas de choque |
| Weber | We | We = ρ v² L / γ | Relación entre fuerzas inerciales y tensión superficial | Interfaces entre fluidos, atomización y burbujas |
| Strouhal | Sr | Sr = L f / v | Relación entre tiempos de oscilación y convección | Desprendimiento de vórtices, flujos pulsátiles |
| Prandtl | Pr | Pr = η / (ρ a) = ν / a | Relación entre difusividad de cantidad de movimiento y térmica | Transferencia de calor convectiva, capas límite |
| Nusselt | Nu | Nu = h L / k | Relación entre transferencia de calor por convección y conducción | Coeficientes de película, convección en superficies |
| Grashof | Gr | Gr = (L³ g β ΔT ρ²) / η² | Relación entre fuerzas de flotación y viscosas | Convección natural o libre |
| Rayleigh | Ra | Ra = Gr · Pr | Producto de Grashof por Prandtl | Transición conducción‑convección en cavidades |
| Schmidt | Sc | Sc = η / (ρ D) | Relación entre difusividad de cantidad de movimiento y másica | Transferencia de masa por convección |
| Knudsen | Kn | Kn = λ / L | Relación entre el recorrido libre medio molecular y la escala de longitud | Validez del modelo de medio continuo, microfluídica |
| Peclet | Pe | Pe = Re · Pr = v L / a | Relación entre transporte advectivo y difusivo de calor | Intercambiadores, dispersión térmica |
| Lewis | Le | Le = a / D | Relación entre difusividades térmica y másica | Secado, humidificación, combustión |
| Fourier | Fo | Fo = a t / L² | Relación entre calor transmitido y calor almacenado | Conducción transitoria, tiempos característicos |

## Valores típicos del número de Prandtl para agua y aire
Los valores exhiben una notable dependencia de la temperatura, por lo que se debe emplear el valor local de la capa límite para cálculos precisos. En la tabla, las temperaturas se dan en grados Celsius y Fahrenheit, y el número de Prandtl es adimensional.

| Fluido | Temperatura (°C / °F) | Número de Prandtl (Pr) |
|---|---|---|
| Aire (seco) | 0 °C / 32 °F | 0,711 |
| Aire (seco) | 20 °C / 68 °F | 0,707 |
| Aire (seco) | 100 °C / 212 °F | 0,698 |
| Aire (seco) | 200 °C / 392 °F | 0,684 |
| Agua (líquida) | 5 °C / 41 °F | 11,2 |
| Agua (líquida) | 20 °C / 68 °F | 7,01 |
| Agua (líquida) | 60 °C / 140 °F | 2,99 |
| Agua (líquida) | 100 °C / 212 °F | 1,75 |

## Criterios de selección
La elección del número adimensional adecuado depende del fenómeno dominante en el problema:

1. **Régimen del flujo:** utilice el número de Reynolds (Re) para anticipar la transición laminar/turbulento. En conductos, Re < 2 300 indica flujo laminar; en capa límite sobre placa plana, Re < 5×10⁵ se mantiene laminar.
2. **Compresibilidad:** cuando la velocidad del fluido sea significativa respecto a la del sonido, emplee el número de Mach (Ma). Flujo incompresible suele asumirse para Ma < 0,3.
3. **Superficies libres o efectos de gravedad:** el número de Froude (Fr) es indispensable en flujos con interfase gas‑líquido, como canales abiertos o vertederos. Fr = 1 marca la transición entre flujo subcrítico y supercrítico.
4. **Transferencia de calor y momento:** para convección forzada, correlacione el número de Nusselt (Nu) con Reynolds y Prandtl (Re ↔ Pr). Para convección natural, recurra al número de Grashof (Gr) o Rayleigh (Ra).
5. **Transferencia de masa simultánea:** el número de Schmidt (Sc) y el de Lewis (Le) controlan la analogía entre capa límite térmica y de concentración.
6. **Efectos de tensión superficial:** en chorros, gotas o burbujas, el número de Weber (We) determina la rotura de la interfase. Valores altos (>8‑10) tienden a fragmentar el fluido.

## Preguntas frecuentes
### ¿Cuál es el número de Reynolds crítico en una tubería circular lisa?
El número de Reynolds crítico para la transición de flujo laminar a turbulento en tuberías es aproximadamente 2 300. Por debajo de este valor, el flujo permanece laminar a menos que existan perturbaciones externas intensas.

### ¿Qué valor del número de Froude distingue el flujo subcrítico del supercrítico?
El valor crítico del número de Froude que separa flujo subcrítico (Fr < 1) y supercrítico (Fr > 1) es exactamente 1,0, punto en el que la velocidad del flujo iguala la velocidad de propagación de una onda gravitacional en la superficie.

### ¿A partir de qué número de Mach se consideran efectos de compresibilidad?
Se acepta que los efectos de compresibilidad comienzan a ser notorios con un número de Mach superior a 0,3. Por debajo de este umbral, la variación de densidad es menor al 5 % y el flujo puede tratarse como incompresible con error reducido.

### ¿Cuánto vale el número de Prandtl del aire a temperatura ambiente?
El número de Prandtl del aire seco a 20 °C / 68 °F y presión atmosférica es 0,707, valor que apenas varía en el rango de temperaturas normales de trabajo en climatización e ingeniería de ventilación.

### ¿Cuál es el número de Weber crítico típico para la rotura de una gota en una corriente de gas?
El número de Weber crítico para la fragmentación de gotas en flujos gaseosos se encuentra alrededor de 10 a 12, dependiendo de la geometría del flujo y de la aceleración local, aunque valores superiores a 8 ya indican deformación severa.

### ¿Qué número adimensional determina el patrón de flujo en un intercambiador de calor por convección natural?
El número de Rayleigh, producto del número de Grashof por el Prandtl (Ra = Gr·Pr), gobierna la transición de conducción a convección natural; valores de Ra mayores de 1 708 predicen el inicio de celdas de convección en cavidades horizontales.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/dimensionless-number-quantity-symbol-application-d_1982.html
- **efunda.com**: https://www.efunda.com/formulae/heat_transfer/convection/nondim_params.cfm
- **thermopedia.com**: https://www.thermopedia.com/navigation/1513/
