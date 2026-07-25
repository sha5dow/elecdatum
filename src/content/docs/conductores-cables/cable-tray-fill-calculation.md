---
title: "Llenado de charola portacables"
sidebar:
  label: "Llenado de charola portacables"
description: "Ficha tecnica: Llenado de charola portacables"
keywords: ["cable tray fill calculation NEC", "conductores-cables"]
category: "conductores-cables"
topic: "conduit-fill"
subcategory: "cable-tray-fill"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El llenado de charola portacables es un parámetro fundamental en el diseño de sistemas de canalización eléctrica, que define la cantidad máxima de conductores que pueden instalarse en el interior de una charola. Se expresa como el porcentaje del área transversal total de la charola ocupada por los cables. El Código Eléctrico Nacional de Estados Unidos (NEC), en su Artículo 392, establece los límites de ocupación para garantizar una disipación térmica adecuada y evitar daños mecánicos durante la instalación.

## Definición
El llenado de charola portacables es la relación porcentual entre la suma de las áreas transversales de todos los conductores instalados y el área transversal útil de la charola. Este valor se limita normativamente para preservar la integridad de los aislamientos, facilitar futuras ampliaciones y mantener la temperatura de operación dentro de rangos seguros. El cálculo considera el diámetro exterior de cada cable, incluyendo su chaqueta o aislamiento, y se aplica a toda la longitud del tramo.

## Normativa aplicable
La referencia principal es la norma NFPA 70 (National Electrical Code, Artículo 392). Los requisitos de llenado varían en función del tipo de charola (escalera, fondo ventilado, fondo sólido) y de la naturaleza de los cables (multiconductores, monopolares, de control). La autoridad competente en cada jurisdicción puede adoptar la edición más reciente, siendo la edición 2023 la vigente a nivel de estándar ANSI. En instalaciones industriales también se consideran prácticas complementarias de organismos como NEMA o IEC cuando el proyecto lo exige.

## Criterios de llenado
Los límites máximos de ocupación según NEC 392.22(B) se resumen a continuación.

| Tipo de charola | Tipo de cable | % máximo de llenado |
|---|---|---|
| Escalera o fondo ventilado | Multiconductor 2000 V o menos | 40 % |
| Fondo sólido | Multiconductor 2000 V o menos | 50 % |
| Escalera o fondo ventilado | Monopolar 2000 V o menos | 75 % (separación ≤ una vez el diámetro) |
| Cualquiera | Señal, control o instrumentación | 50 % |

Cuando en una misma charola coexisten cables de distintas categorías, se aplica el criterio más restrictivo. El área útil de la charola se determina multiplicando el ancho interior por la altura útil de llenado, que para charolas tipo escalera suele ser una altura equivalente definida por el fabricante.

## Fórmula de cálculo
La expresión básica para el porcentaje de llenado es:

> **%L = (Σ (A_cable_i × N_i) / A_charola) × 100**

Donde:

| Variable | Descripción | Unidad (SI / Imperial) |
|---|---|---|
| Σ (A_cable_i × N_i) | Suma de las áreas transversales de todos los cables | mm² / in² |
| A_charola | Área transversal útil de la charola | mm² / in² |
| %L | Porcentaje de llenado | % |

Para charolas de sección rectangular, el área útil se calcula como el producto del ancho interior por la altura de llenado permitida según la configuración mecánica.

## Ejemplo de cálculo
Se desea instalar 25 conductores multiconductores de 600 V, cada uno con diámetro exterior de 25,4 mm / 1.0 in, en una charola tipo escalera de 600 mm de ancho interior por 150 mm de altura útil de llenado.

1. Área de un cable: A_cable = π × (25,4 mm / 2)² = 506,7 mm² / 0,785 in².
2. Área total de los conductores: 25 × 506,7 mm² = 12 668 mm² / 19,63 in².
3. Área útil de la charola: 600 mm × 150 mm = 90 000 mm² / 139,5 in².
4. Porcentaje de llenado: (12 668 / 90 000) × 100 = 14,1 %.

El resultado cumple ampliamente con el límite del 40 % para charola escalera con cables multiconductores de 2000 V o menos. La instalación es conforme a NEC.

## Tabla de áreas de llenado recomendadas
Se presentan áreas transversales máximas permitidas para charolas escalera y fondo ventilado, considerando el criterio del 40 % de llenado.

| Ancho interior charola (mm / in) | Altura útil (mm / in) | Área útil (mm² / in²) | Área máxima de cables (mm² / in²) |
|---|---|---|---|
| 300 / 12 | 150 / 6 | 45 000 / 69,8 | 18 000 / 27,9 |
| 450 / 18 | 150 / 6 | 67 500 / 104,6 | 27 000 / 41,9 |
| 600 / 24 | 150 / 6 | 90 000 / 139,5 | 36 000 / 55,8 |
| 750 / 30 | 150 / 6 | 112 500 / 174,4 | 45 000 / 69,8 |
| 900 / 36 | 150 / 6 | 135 000 / 209,3 | 54 000 / 83,7 |

Para charola de fondo sólido se admite el 50 %, por lo que la penúltima columna se multiplicaría por 0,50 para obtener el área máxima de cables.

## Preguntas frecuentes (FAQ)
### ¿Qué sucede si se excede el porcentaje de llenado permitido?
Exceder el límite eleva la temperatura de los conductores, acelera el envejecimiento del aislamiento e impide una correcta disipación del calor, lo que puede conducir a fallos prematuros o a incumplimiento normativo.

### ¿Cómo se mide el diámetro exterior de un cable para el cálculo?
Se utiliza el diámetro nominal indicado por el fabricante, que incluye todas las capas de aislamiento y chaqueta. No se debe emplear el diámetro del conductor desnudo.

### ¿El límite de llenado varía si los cables son de media tensión?
Sí, para cables con tensión superior a 2000 V, el NEC establece disposiciones diferentes, requiriendo en general un llenado menor y consideraciones adicionales de agrupamiento.

### ¿Se puede mezclar cables de distintos tamaños en la misma charola?
Sí, siempre que la suma de sus áreas transversales no supere el porcentaje máximo de llenado y se respeten las condiciones de instalación propias de cada tipo de cable.

### ¿Influye el material de la charola en el límite de llenado?
El NEC no diferencia por material metálico (acero, aluminio), pero la conductividad térmica del material puede influir en la capacidad de disipación; sin embargo, los porcentajes de llenado son los mismos para todos los metales.

### ¿Dónde se encuentran los porcentajes exactos de llenado según NEC?
Los porcentajes y condiciones completos están definidos en el Artículo 392 del NEC (NFPA 70). Es recomendable consultar la edición adoptada localmente para verificar posibles enmiendas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cable-loads-d_1816.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-formulas/
- **southwire.com**: https://www.southwire.com/calculators
