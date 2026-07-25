---
title: "Cálculo de potencia trifásica"
sidebar:
  label: "Cálculo de potencia trifásica"
description: "Ficha tecnica: Cálculo de potencia trifásica"
keywords: ["three phase power calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "three-phase-power"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La potencia en sistemas trifásicos se determina mediante una fórmula que involucra la raíz cuadrada de tres, la tensión de línea, la corriente de línea y el factor de potencia. La expresión fundamental permite obtener la potencia activa, expresada en vatios (W) o caballos de fuerza (hp), y es aplicable tanto a configuraciones estrella como delta. A continuación se presentan las ecuaciones, variables, factores de potencia típicos y un ejemplo práctico de cálculo.

## Fórmulas de potencia trifásica
La potencia activa P en un sistema trifásico equilibrado puede calcularse a partir de magnitudes de línea o de fase. Las dos formas equivalentes son:

> **P = √3 · V_L · I_L · cos φ**
> **P = 3 · V_F · I_F · cos φ**

Donde √3 ≈ 1,732 es la constante de relación entre magnitudes de línea y de fase en sistemas trifásicos. La primera expresión utiliza la tensión de línea V_L y la corriente de línea I_L, mientras que la segunda emplea la tensión de fase V_F y la corriente de fase I_F.

## Variables y unidades
Los parámetros involucrados en el cálculo de potencia trifásica se resumen en la siguiente tabla. La potencia admite representación en unidades métricas e imperiales.

| Símbolo | Nombre | Unidad |
| --- | --- | --- |
| P | Potencia activa | vatio (W) / caballo de fuerza (hp); 1 hp = 746 W |
| V_L | Tensión de línea | voltio (V) |
| I_L | Corriente de línea | amperio (A) |
| V_F | Tensión de fase | voltio (V) |
| I_F | Corriente de fase | amperio (A) |
| cos φ | Factor de potencia | adimensional |
| φ | Ángulo de desfase | grado (°) o radián (rad) |

## Factor de potencia
El factor de potencia cos φ representa la fracción de la potencia aparente que se convierte en trabajo útil. Su valor oscila entre 0 y 1 y depende del tipo de carga. La tabla siguiente recoge valores característicos para dispositivos comunes.

| Dispositivo | Factor de potencia |
| --- | --- |
| Lámpara fluorescente no compensada | 0,5 |
| Lámpara fluorescente compensada | 0,93 |
| Lámpara incandescente | 1 |
| Motor de inducción a 100 % de carga | 0,85 |
| Motor de inducción a 50 % de carga | 0,73 |
| Motor de inducción sin carga (0 %) | 0,17 |
| Motor síncrono | 0,9 |
| Horno de resistencia calefactora | 1 |
| Horno de inducción compensado | 0,85 |
| Carga puramente resistiva | 1 |

## Potencia activa, reactiva y aparente
En corriente alterna, la potencia total se descompone en tres magnitudes:

- Potencia activa P (trabajo útil): P = √3 · V_L · I_L · cos φ, medida en vatios (W) o caballos de fuerza (hp).
- Potencia reactiva Q (energía almacenada y devuelta por campos magnéticos o eléctricos): Q = √3 · V_L · I_L · sin φ, medida en voltamperios reactivos (VAR).
- Potencia aparente S (producto de valores eficaces): S = √3 · V_L · I_L, medida en voltamperios (VA).

La relación entre ellas responde a la expresión S² = P² + Q². La potencia al freno (BHP) de un motor se obtiene dividiendo la potencia activa entre la eficiencia η y el factor de conversión 746 W/hp:

> **BHP = (√3 · V_L · I_L · cos φ · η) / 746**

## Configuraciones estrella y delta
Las relaciones entre tensión y corriente de línea y de fase dependen del tipo de conexión:

- Configuración estrella (Y): V_L = √3 · V_F; I_L = I_F.
- Configuración delta (Δ): V_L = V_F; I_L = √3 · I_F.

En ambos casos la potencia activa total calculada con los valores de línea es idéntica y sigue la fórmula general P = √3 · V_L · I_L · cos φ. Esta propiedad garantiza que el mismo método de cálculo sea válido independientemente de la topología del sistema.

## Ejemplo de cálculo
Considérese un circuito trifásico con tensión compuesta de 400 V / 230 V (línea/neutro) y corriente de 20 A, alimentando una carga puramente resistiva (cos φ = 1). La potencia activa se determina como:

- Mediante tensión de línea: P = 1,732 × 400 V × 20 A × 1 = 13 856 W (13,9 kW).
- Mediante tensión de fase: P = 3 × 230 V × 20 A × 1 = 13 800 W (13,8 kW).

La pequeña diferencia se debe al redondeo de √3. La potencia equivalente en caballos de fuerza es 13 856 W / 746 ≈ 18,6 hp.

## Preguntas frecuentes (FAQ)
### ¿Por qué se utiliza √3 en la fórmula de potencia trifásica?
El factor √3 proviene de la relación geométrica entre las tensiones de línea y de fase en un sistema equilibrado. En conexión estrella, V_L = √3 · V_F, y al sustituir en la expresión de potencia por fase se obtiene el factor √3 en la fórmula resumida.

### ¿Cómo se mide la potencia trifásica en campo?
Se emplean vaímetros trifásicos o analizadores de redes que aplican el método de los dos vaímetros (conexión Aron) o tres vaímetros, midiendo simultáneamente tensiones y corrientes de línea y calculando P total.

### ¿Cuál es la diferencia entre potencia activa, reactiva y aparente?
La potencia activa realiza trabajo útil; la reactiva es intercambiada entre generadores y cargas inductivas/capacitivas sin producir trabajo neto; la aparente es la suma vectorial de ambas y determina la capacidad necesaria de los equipos eléctricos.

### ¿Qué factor de potencia se considera aceptable en instalaciones industriales?
Valores superiores a 0,9 son deseables. Compañías eléctricas suelen penalizar factores inferiores a 0,95. La compensación con bancos de condensadores permite elevarlo desde valores típicos de motores (0,85) hasta niveles próximos a la unidad.

### ¿Cómo afecta el desequilibrio de fases al cálculo de potencia?
En sistemas desequilibrados, la fórmula √3 · V_L · I_L · cos φ deja de ser exacta. La potencia total debe calcularse como la suma de las potencias de cada fase, medidas individualmente, ya que las corrientes y tensiones dejan de ser simétricas.

### ¿Se puede aplicar la misma fórmula para sistemas en delta y en estrella?
Sí. La expresión P = √3 · V_L · I_L · cos φ es independiente de la configuración interna del generador o de la carga, siempre que se empleen las magnitudes de línea. Las relaciones internas entre fase y línea se cancelan al expresar la potencia total.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/three-phase-electrical-d_888.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-2/calculating-electric-power/
- **electrical4u.com**: https://www.electrical4u.com/electric-power-single-and-three-phase/
