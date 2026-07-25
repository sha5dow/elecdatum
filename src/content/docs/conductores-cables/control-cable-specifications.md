---
title: "Cables de control especificaciones"
sidebar:
  label: "Cables de control especificaciones"
description: "Ficha tecnica: Cables de control especificaciones"
keywords: ["control cable specifications types", "conductores-cables"]
category: "conductores-cables"
topic: "cable-types"
subcategory: "control-cable"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los cables de control son conductores múltiples diseñados para transmitir señales de mando, supervisión y medición en circuitos de automatización industrial y distribución de energía. Se instalan típicamente entre tableros de control, sensores y actuadores, operando a tensiones nominales de hasta 600 V. Su construcción suele incluir conductores de cobre flexible, aislamiento termoplástico, blindaje electromagnético opcional y una cubierta exterior resistente a aceites y agentes químicos.

## Tensión nominal
La tensión nominal normalizada para la mayoría de los cables de control de uso industrial es de **600 V** (0,6/1 kV categoría IEC en algunas variantes), siendo aptos para circuitos de control y señalización en baja tensión.

## Material del conductor
El conductor estándar empleado en cables de control es **cobre electrolítico recocido**, clase B o C de cableado según ASTM B8, con una resistividad máxima de 17,241 Ω·mm²/km a 20 °C. En aplicaciones especiales se utiliza aluminio, aunque el cobre predomina por su conductividad y flexibilidad.

## Aislamiento
El aislamiento típico es de **PVC (policloruro de vinilo)** retardante de llama, con espesores que cumplen la norma UL 1277 o IEC 60227. Otras opciones incluyen XLPE (polietileno reticulado) para mayor temperatura de operación o EPR (etileno-propileno) para entornos húmedos. El valor dieléctrico mínimo de rigidez se sitúa en 15 kV/mm / 381 V/mil.

## Blindaje y apantallamiento
Para proteger las señales contra interferencias electromagnéticas (EMI), se dispone de varias configuraciones de blindaje:

| Tipo de blindaje | Cobertura óptica (%) | Material típico |
| --- | --- | --- |
| Cinta de aluminio/poliéster con drenaje | 100 % | Cinta Al/PET de 0,025 mm / 0.001 in con conductor de drenaje de cobre estañado |
| Trenza de cobre estañado | 85 – 90 % | Hilos de cobre estañado AWG 34 / 0,16 mm² |
| Doble blindaje (cinta + trenza) | 100 % + 90 % | Combinación de cinta y trenza |

La resistencia máxima del blindaje como masa de retorno no debe exceder 10 Ω/km / 3,05 Ω/1000 ft.

## Temperatura de operación
El rango de temperatura de operación depende del tipo de aislamiento:

| Material del aislamiento | Temperatura máxima en servicio seco | Temperatura máxima en servicio húmedo |
| --- | --- | --- |
| PVC estándar | 90 °C / 194 °F | 75 °C / 167 °F |
| PVC 105 °C | 105 °C / 221 °F | 75 °C / 167 °F |
| XLPE | 90 °C / 194 °F | 90 °C / 194 °F |
| EPR | 90 °C / 194 °F | 90 °C / 194 °F |

## Normas de referencia
Los cables de control se fabrican siguiendo normas internacionales que regulan dimensiones, materiales y ensayos: ICEA S-73-532, UL 1277, CSA C22.2 No. 230, IEC 60227 e IEC 60502-1. La compatibilidad RoHS y REACH es obligatoria para el mercado europeo.

## Secciones transversales normalizadas
Las secciones de los conductores en cables de control siguen la escala AWG (American Wire Gauge) y su equivalente métrico. La tabla siguiente recoge los calibres más habituales con sus diámetros y resistencias eléctricas para conductor de cobre sólido a 20 °C / 68 °F.

| AWG | Diámetro del conductor (mm / in) | Sección transversal (mm²) | Resistencia eléctrica (Ω/km / Ω/1000 ft) |
| --- | --- | --- | --- |
| 20 | 0,81 / 0.0320 | 0,52 | 33,2 / 10,12 |
| 18 | 1,02 / 0.0403 | 0,82 | 21,0 / 6,39 |
| 16 | 1,29 / 0.0508 | 1,31 | 13,2 / 4,02 |
| 14 | 1,63 / 0.0641 | 2,08 | 8,28 / 2,52 |
| 12 | 2,05 / 0.0808 | 3,31 | 5,21 / 1,59 |
| 10 | 2,59 / 0.1020 | 5,26 | 3,28 / 1,00 |

Nota: para cable flexible clase C la resistencia aumenta aproximadamente un 3 % respecto a la del conductor sólido.

## Número de conductores
Los cables de control se suministran con configuraciones que van desde **2 hasta 37 conductores**, existiendo opciones de hasta 60 hilos en pedidos especiales. Los números pares con neutro (3, 5, 7...) son comunes en circuitos trifásicos de mando.

## Colores y código de identificación
Según ICEA S-73-532, método 1, los conductores aislados se identifican con colores negro y numeración impresa en blanco sobre el aislamiento, o mediante colores base con trazas. La tabla resume la codificación habitual:

| N.º de conductores | Colores base |
| --- | --- |
| 2 | Negro, blanco |
| 3 | Negro, blanco, rojo |
| 4 | Negro, blanco, rojo, verde |
| 5 | Negro, blanco, rojo, verde, naranja |
| Más de 5 | Negro base + numeración correlativa blanca |

El conductor de tierra, cuando se incluye, es verde o verde/amarillo y se cuenta separadamente.

## Marcado
La cubierta exterior lleva grabada o impresa la leyenda con los siguientes campos, separados por espacios o guiones: fabricante, tipo de cable, número de conductores y AWG, tensión, norma de referencia, año de fabricación y leyenda “RoHS”. Ejemplo: `FABRICANTE – CABLE CONTROL 7h x 16 AWG – 600V – ICEA S-73-532 – 2025 – RoHS`. La separación mínima entre marcas es de 1 m / 39,37 in.

## Radio de curvatura mínimo
El radio de curvatura durante la instalación no debe ser inferior a un múltiplo del diámetro exterior total del cable (D). La fórmula general es:

> **Rmin = k × D**

Donde k depende del tipo constructivo:

| Tipo de cable | Factor k (mínimo) |
| --- | --- |
| Cable sin blindaje ni armadura | 6 |
| Cable con blindaje de cinta o trenza | 8 |
| Cable armado (aluminio/acero) | 12 |

Por ejemplo, para un cable armado de 20 mm / 0.787 in de diámetro exterior, el radio de curvatura mínimo es Rmin = 12 × 20 mm = 240 mm / 9.45 in. Durante la operación estática se permite reducir estos valores en un 20 %.

## Características constructivas adicionales

| Componente | Material / Espesor | Propiedad |
| --- | --- | --- |
| Rellenos | Polipropileno no higroscópico | Resistencia al agua y estabilidad dimensional |
| Cubierta interior (en armados) | PVC negro de 1,0 mm / 0.039 in min. | Protección mecánica previa a la armadura |
| Armadura metálica | Aluminio o acero galvanizado entrelazado | Resistencia a impacto; paso helicoidal 7 × D |
| Cubierta exterior | PVC resistente a aceites, UV e intemperie | Espesor según UL 1277: 1,14 mm / 0.045 in para cables ≤25,4 mm / 1 in |

## Frequently Asked Questions (FAQ)

### ¿Cuál es la tensión de aislamiento soportada en fábrica de un cable de control de 600 V?
La prueba de rigidez dieléctrica en fábrica se realiza aplicando 3000 V CA / 3500 V CC durante 5 minutos, lo que equivale a 2 × U0 + 1000 V, asegurando una tensión de perforación muy superior a la nominal.

### ¿Qué sección de conductor AWG 14 se necesita para un lazo de control de 4-20 mA con una longitud de 1500 m?
Para un lazo de 1500 m / 4921 ft con receptor de 250 Ω, un conductor de 2,08 mm² (14 AWG) introduce una resistencia de 8,28 Ω/km × 1,5 km = 12,42 Ω, permitiendo una caída inferior al 1 % de la tensión de lazo típica de 24 V.

### ¿Cuántos conductores puede alojar un cable de control con diámetro externo máximo de 18 mm?
En un diámetro de 18 mm / 0.71 in se pueden alojar hasta 12 conductores de 16 AWG con aislamiento de PVC de 0,38 mm / 0.015 in y cubierta de 1,14 mm / 0.045 in, típico en cables no armados.

### ¿Cuál es la resistencia de aislamiento mínima en cables de PVC a 20 °C?
A 20 °C / 68 °F la resistencia de aislamiento no debe ser inferior a 100 MΩ × km para conductores de sección ≥0,82 mm² (18 AWG), medida con 500 V CC aplicados durante un minuto.

### ¿Qué temperatura máxima soporta un cable de control con aislamiento de PVC durante un cortocircuito?
La temperatura máxima de cortocircuito para aislamiento de PVC es de 160 °C / 320 °F durante un máximo de 5 segundos, permitiendo una densidad de corriente de corta duración antes de daño térmico.

### ¿Cuál es el espesor mínimo de la cubierta exterior de un cable de control no armado de 10 AWG?
Para un cable sin armadura con diámetro bajo cubierta interior de 12 mm / 0.47 in, el espesor nominal de la cubierta exterior de PVC es de 1,5 mm / 0.059 in, con un mínimo permitido de 1,2 mm / 0.047 in según UL 1277.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/awg-wire-gauge-d_731.html
- **southwire.com**: https://www.southwire.com/wire-cable/armored-power-cable/csa-teck-90-600v-pvc-control-cable/p/SPEC25040
