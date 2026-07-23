---
title: "MMC LMC RFS condiciones de material"
sidebar:
  label: "MMC LMC RFS condiciones de material"
description: "Ficha tecnica: MMC LMC RFS condiciones de material"
keywords: ["MMC LMC RFS maximum material condition explained", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "mmc-lmc-rfs"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Definición
Las condiciones de material (MMC, LMC y RFS) modifican la tolerancia geométrica en función del tamaño real de la pieza, pudiendo aumentar la tolerancia de posición en hasta 0.030 mm / 0.0012 in para agujeros con tolerancia dimensional típica. Estos modificadores permiten aceptar piezas funcionales que, sin la bonificación, serían rechazadas.

- **Condición de máximo material (MMC)**: la característica contiene la mayor cantidad de material dentro de sus límites dimensionales (mínimo diámetro en agujeros, máximo diámetro en ejes). Cuando se invoca MMC, si la característica se aleja de este estado, se concede una bonificación de tolerancia geométrica igual a la desviación respecto al MMC.
- **Condición de mínimo material (LMC)**: la característica contiene la menor cantidad de material (máximo agujero, mínimo eje). La bonificación se obtiene al alejarse del LMC hacia el MMC.
- **Independientemente del tamaño de la característica (RFS)**: la tolerancia geométrica se aplica siempre con el valor indicado en el cuadro de tolerancia, sin bonificación adicional. Es la condición por defecto en ASME e ISO cuando no se especifica modificador.

## Interpretación de símbolos
Los modificadores se colocan dentro del cuadro de tolerancia geométrica, después del valor de tolerancia y/o de la letra del datum. La presencia del símbolo activa el cálculo de la bonificación según el tamaño medido de la característica.

| Símbolo | Significado | Norma ISO | Norma ASME Y14.5 |
|---|---|---|---|
| Ⓜ (M en un círculo) | Condición de máximo material (MMC) | Símbolo idéntico. Se aplica a características de tamaño y referencias datum. | Símbolo idéntico. Bonificación permitida en controles de posición, orientación, etc. |
| Ⓛ (L en un círculo) | Condición de mínimo material (LMC) | Mismo símbolo. Aplicación análoga a MMC pero inversa. | Igual interpretación. Menos frecuente que MMC. |
| (sin símbolo) | Independientemente del tamaño (RFS) | La ausencia de modificador indica RFS (regla por defecto). | Ídem, la ausencia de modificador implica RFS. La bonificación no se aplica. |
| Ⓢ (S en un círculo) | RFS (obsoleto) | No se emplea en ISO 1101 actual. | Usado en versiones antiguas de ASME Y14.5, hoy reemplazado por su omisión. |

## Tabla de bonificación de tolerancia
La bonificación máxima alcanzable es igual a la diferencia entre el tamaño en MMC y el tamaño en LMC de la característica. En la tabla siguiente se muestra el comportamiento para un **agujero de diámetro nominal 10 H7** (tolerancia dimensional: 10.000 / 10.015 mm / 0.3937 / 0.3943 in) con una **tolerancia de posición especificada a MMC de 0.1 mm / 0.004 in**.

| Tamaño real del agujero | Desviación respecto al MMC (10.000 mm / 0.3937 in) | Bonificación de tolerancia | Tolerancia de posición total permitida |
|---|---|---|---|
| 10.000 mm / 0.3937 in (MMC) | 0 mm / 0 in | 0 mm / 0 in | 0.100 mm / 0.0040 in |
| 10.005 mm / 0.3939 in | 0.005 mm / 0.0002 in | 0.005 mm / 0.0002 in | 0.105 mm / 0.0042 in |
| 10.010 mm / 0.3941 in | 0.010 mm / 0.0004 in | 0.010 mm / 0.0004 in | 0.110 mm / 0.0044 in |
| 10.015 mm / 0.3943 in (LMC) | 0.015 mm / 0.0006 in | 0.015 mm / 0.0006 in | 0.115 mm / 0.0046 in |

Para LMC la lógica es simétrica pero referida a la condición de mínimo material. En ejes, el MMC corresponde al diámetro máximo, por lo que la bonificación se calcula restando el tamaño real al MMC.

## Ejemplos de aplicación real

### Ensamblaje pasante con tornillo y tuerca
Un tornillo M8 (diámetro mayor 8.0 mm / 0.315 in) debe atravesar dos piezas con agujeros pasantes de 8.5 ±0.1 mm / 0.335 ±0.004 in. Si se especifica tolerancia de posición de 0.2 mm / 0.008 in a MMC, la pieza es aceptable con el agujero a 8.4 mm / 0.331 in (MMC) y posición desviada 0.2 mm / 0.008 in. Si el agujero se fabrica a 8.6 mm / 0.339 in (LMC), la tolerancia de posición se amplía a 0.3 mm / 0.012 in, permitiendo una desalineación mayor sin comprometer el montaje.

### Calibre funcional MMC
Un útil de verificación para MMC tiene un diámetro fijo igual al MMC de la característica menos la tolerancia de posición (para agujeros). Solo las piezas cuyo agujero y posición se encuentren dentro de la envolvente virtual serán aceptadas. Esta técnica es rápida y asegura intercambiabilidad.

### Árbol y alojamiento con ajuste forzado
En aplicaciones que requieren un apriete mínimo, se emplea LMC sobre el alojamiento para garantizar que, incluso con la máxima holgura (agujero en LMC), quede material suficiente para el apriete. La bonificación LMC permite aceptar cierta desviación de forma o posición sin perder la interferencia requerida.

## Comparativa entre sistemas (ISO vs ASME)

| Aspecto | ISO 1101 / 2692 | ASME Y14.5 |
|---|---|---|
| Símbolo MMC | Ⓜ (idéntico) | Ⓜ (idéntico) |
| Símbolo LMC | Ⓛ (idéntico) | Ⓛ (idéntico) |
| RFS por defecto | Sin símbolo (RFS es la condición por omisión). | Sin símbolo (RFS es la regla por defecto). |
| Requisito de envolvente (Envelope Requirement) | Se indica con (E) después de la tolerancia dimensional. Fuerza la perfecta forma en MMC. No se aplica automáticamente. | La Regla #1 (Envelope Principle) se aplica por defecto a características de tamaño: en MMC debe existir forma perfecta. |
| Aplicación de MMC a datums | MMC puede aplicarse a referencias datum para crear un datum virtual móvil. | Ídem, datum virtual desplazable («datum feature shift») permite absorber desalineaciones adicionales. |
| Documentación | ISO 2692 especifica requisito de máximo/minimo material. | ASME Y14.5 define todo dentro de un único estándar de dimensionamiento geométrico. |

La principal diferencia práctica reside en el **Requisito de Envolvente**: en ASME la Regla #1 se asume siempre, mientras que en ISO debe indicarse explícitamente con el símbolo (E). Por lo tanto, un dibujo sin (E) en ISO permite que la pieza exceda la envolvente de forma perfecta en MMC, lo que puede dar lugar a problemas de ensamblaje si no se tiene en cuenta.

## Preguntas frecuentes

1. **¿Cuánta tolerancia adicional puedo obtener al aplicar MMC en un agujero de 10 H7?**  
   Hasta 0.015 mm / 0.0006 in de bonificación, alcanzando una tolerancia total de posición de 0.115 mm / 0.0046 in si el agujero se fabrica en su LMC (10.015 mm / 0.3943 in).

2. **¿Qué desviación dimensional se necesita para duplicar una tolerancia geométrica de 0.1 mm / 0.004 in?**  
   Para duplicarla a 0.2 mm / 0.008 in, la característica debe desviarse 0.1 mm / 0.004 in de su MMC, siempre que el campo de tolerancia dimensional lo permita; en un agujero 10 H7 esto no es posible porque solo hay 0.015 mm / 0.0006 in de recorrido.

3. **¿Existe algún caso en que MMC no aporte ningún aumento de tolerancia?**  
   Cuando la característica se produce exactamente en el MMC (p. ej., agujero de 10.000 mm / 0.3937 in en el ejemplo), la bonificación es 0 mm / 0 in y la tolerancia geométrica se queda en el valor base.

4. **¿Cuánto se puede desplazar un datum con modificador MMC?**  
   El desplazamiento máximo del datum virtual es igual a la tolerancia dimensional de la referencia como característica de tamaño. Si un datum de un eje tiene tolerancia dimensional de 0.020 mm / 0.0008 in, la pieza puede desplazarse lateralmente hasta 0.010 mm / 0.0004 in en la peor condición, aprovechando la diferencia entre tamaño en MMC y tamaño real.

5. **¿Qué mejora de productividad se ha documentado al pasar de RFS a MMC?**  
   En la industria automotriz se ha reportado una reducción de hasta un 15 % en piezas rechazadas al cambiar tolerancias de posición de RFS a MMC en componentes de chapa con orificios de fijación, al aprovechar la bonificación dimensional.

6. **¿Cuál es la tolerancia máxima combinada (dimensional + geométrica) que permite un ajuste M6 nominal?**  
   En un agujero de 6 H7 (6.000/6.012 mm / 0.2362/0.2367 in), con tolerancia de posición de 0.05 mm / 0.002 in a MMC, la tolerancia combinada máxima en el peor caso (agujero en LMC) alcanza 0.062 mm / 0.0024 in de desviación posicional admisible.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/material-properties-t_24.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
