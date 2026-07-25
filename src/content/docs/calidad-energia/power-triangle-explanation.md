---
title: "Triángulo de potencias explicación"
sidebar:
  label: "Triángulo de potencias explicación"
description: "Ficha tecnica: Triángulo de potencias explicación"
keywords: ["power triangle explanation kW kVAR kVA", "calidad-energia"]
category: "calidad-energia"
topic: "reactive-power"
subcategory: "power-triangle"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El triángulo de potencias es una representación gráfica que vincula la potencia activa (P), la potencia reactiva (Q) y la potencia aparente (S) en circuitos eléctricos de corriente alterna (CA). Su geometría se basa en el teorema de Pitágoras y permite visualizar cómo la energía que realiza trabajo útil, la que oscila sin producir trabajo neto y la potencia total suministrada están ligadas por el ángulo de fase φ.

## Definición y representación

El triángulo rectángulo característico emplea un ángulo φ que en cargas puramente resistivas vale **0° y en cargas inductivas puras alcanza 90°**. Sobre este triángulo se proyectan los tres tipos de potencia, facilitando la interpretación del factor de potencia y la cuantificación de pérdidas.

| Elemento | Símbolo | Unidad principal | Equivalencia práctica |
|----------|---------|------------------|------------------------|
| Potencia activa | P | vatio (W) | 1 kW ≈ 1,34 hp (caballo de fuerza) |
| Potencia reactiva | Q | voltamperio reactivo (VAR) | – |
| Potencia aparente | S | voltamperio (VA) | 1 kVA ≈ 1,34 hp eléctrico (referencia de capacidad) |
| Ángulo de fase | φ | grado (°) / radián (rad) | 180° = π rad ≈ 3,1416 rad |

Las potencias cumplen la relación vectorial **S = P + jQ**, donde el eje horizontal representa la potencia activa y el eje vertical la potencia reactiva. La hipotenusa corresponde a la potencia aparente.

## Componentes del triángulo de potencias

**Potencia activa (P):** En un motor de inducción típico de 10 kW / 13,4 hp, la potencia activa representa la capacidad de conversión en trabajo mecánico o calor. Se calcula como:

> **P = V · I · cos φ** (monofásico)

> **P = √3 · V · I · cos φ** (trifásico)

Su unidad es el vatio (W) y, en sistemas industriales, valores comunes oscilan entre 1 kW / 1,34 hp y varios MW.

**Potencia reactiva (Q):** En ese mismo motor, una potencia reactiva de 7,5 kVAR es necesaria para mantener el campo magnético, pero no produce trabajo neto. Se expresa en voltamperios reactivos (VAR) y en circuitos monofásicos se obtiene con:

> **Q = V · I · sin φ**

En sistemas trifásicos, la fórmula incorpora √3: **Q = √3 · V · I · sin φ**. Los valores típicos en bornes de motores medianos están entre 5 kVAR y 50 kVAR.

**Potencia aparente (S):** Combinando las dos anteriores, la potencia aparente para el ejemplo sería de aproximadamente 12,5 kVA (10 kW, 7,5 kVAR). Se mide en voltamperios (VA) y es el producto directo de la tensión y la corriente eficaces:

> **S = V · I** (monofásico)

> **S = √3 · V · I** (trifásico)

En el triángulo, S actúa como hipotenusa y es siempre igual o mayor que P.

## Relaciones matemáticas fundamentales

La conexión entre las tres potencias sigue el teorema de Pitágoras, donde el cuadrado de la potencia aparente iguala la suma de los cuadrados de la activa y la reactiva:

> **S² = P² + Q²**

A partir de aquí se despejan:

> **S = √(P² + Q²)**

> **P = S · cos φ**

> **Q = S · sin φ**

El ángulo φ representa el desfase entre tensión y corriente. En una instalación con factor de potencia 0,8, φ es de aproximadamente **36,87° / 0,643 rad**. La siguiente tabla resume algunos valores característicos:

| Factor de potencia (cos φ) | Ángulo φ (°) / (rad) | Potencia activa (P) para S = 100 kVA | Potencia reactiva (Q) para S = 100 kVA |
|----------------------------|-----------------------|--------------------------------------|----------------------------------------|
| 1,0 | 0° / 0 rad | 100 kW / 134 hp | 0 kVAR |
| 0,9 | 25,84° / 0,451 rad | 90 kW / 120,7 hp | 43,6 kVAR |
| 0,8 | 36,87° / 0,643 rad | 80 kW / 107,3 hp | 60 kVAR |
| 0,7 | 45,57° / 0,795 rad | 70 kW / 93,9 hp | 71,4 kVAR |
| 0,5 | 60,00° / 1,047 rad | 50 kW / 67,1 hp | 86,6 kVAR |

## Factor de potencia (PF)

El factor de potencia se define como la relación entre la potencia activa y la potencia aparente: **PF = P / S = cos φ**. Un valor de **1,0 (adimensional)** indica que toda la energía suministrada se convierte en trabajo útil, mientras que un PF de 0,8 revela que solo el 80 % de la potencia aparente es activa; el 20 % restante corresponde a energía reactiva que circula entre fuente y carga. En la práctica, las cargas industriales presentan factores de potencia típicos entre 0,7 y 0,9, y valores inferiores a 0,85 suelen penalizarse económicamente.

## Importancia del triángulo de potencias en la práctica

Un sistema trifásico de 480 V / 60 Hz que alimenta un banco de motores con un consumo de 500 kW / 670 hp y un factor de potencia de 0,7 demanda una corriente significativamente mayor que si operara con PF 0,95. El triángulo de potencias permite cuantificar el excedente de corriente reactiva y dimensionar los equipos de corrección. Por ejemplo, para elevar el PF de 0,7 a 0,95 en ese sistema de 500 kW, se requieren aproximadamente **290 kVAR de compensación capacitiva**. Esta corrección reduce pérdidas en los conductores y libera capacidad en transformadores.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre potencia activa, reactiva y aparente?
La potencia activa (W) es la que efectivamente realiza trabajo (luz, calor, movimiento); la reactiva (VAR) sostiene campos magnéticos o eléctricos sin producir trabajo neto; la aparente (VA) es la suma vectorial de ambas y representa la potencia total que debe suministrar la fuente.

### ¿Por qué el triángulo de potencias es rectángulo?
Porque la potencia activa y la reactiva están desfasadas 90° entre sí, de modo que la relación matemática corresponde al teorema de Pitágoras, formando un triángulo rectángulo donde la hipotenusa es la potencia aparente.

### ¿Cómo afecta un bajo factor de potencia a la instalación?
Un factor de potencia inferior a 0,9 genera corrientes más altas para una misma potencia activa, lo que incrementa las pérdidas por efecto Joule, exige conductores de mayor sección y puede acarrear penalizaciones económicas por parte de la compañía eléctrica.

### ¿Cómo se corrige un factor de potencia bajo?
Principalmente mediante bancos de capacitores conectados en paralelo, que suministran potencia reactiva localmente y reducen la demanda reactiva sobre la red. También se emplean condensadores síncronos o compensadores activos.

### ¿Qué unidades se usan en el triángulo de potencias?
La potencia activa se mide en vatios (W) o kilovatios (kW), la reactiva en voltamperios reactivos (VAR) o kilovoltamperios reactivos (kVAR), y la aparente en voltamperios (VA) o kilovoltamperios (kVA). Todas pueden expresarse en caballos de fuerza (hp) como referencia de capacidad.

### ¿El triángulo de potencias se aplica tanto a sistemas monofásicos como trifásicos?
Sí, la relación fundamental S² = P² + Q² es válida en cualquier circuito CA lineal, pero en sistemas trifásicos las fórmulas de cálculo incorporan el factor √3 (aproximadamente 1,732) para reflejar la contribución de las tres fases.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/kva-reactive-d_886.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
