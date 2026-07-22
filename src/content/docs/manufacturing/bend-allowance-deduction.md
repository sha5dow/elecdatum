---
title: "Bend allowance y deducción fórmulas"
sidebar:
  label: "Bend allowance y deducción fórmulas"
description: "Ficha tecnica: Bend allowance y deducción fórmulas"
keywords: ["sheet metal bend allowance deduction formula calculation", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "bend-allowance"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción general
El cálculo preciso de la **longitud desarrollada** en piezas de chapa plegada depende de dos conceptos complementarios: la **tolerancia de doblado** (*Bend Allowance*, BA) y la **deducción de plegado** (*Bend Deduction*, BD). La BA representa la longitud del arco de la fibra neutra a lo largo del radio de doblado, mientras que la BD es la cantidad que debe restarse de la suma de las dimensiones externas de las alas para obtener la longitud total de la chapa plana. Ambos valores dependen del espesor del material, del radio interior, del ángulo de plegado y del factor **K**, que define la posición de la fibra neutra. Utilizar las fórmulas correctas evita errores dimensionales y garantiza que la pieza final cumpla las especificaciones.

## Fórmulas de cálculo
Para un doblado con radio interior **R**, espesor **T**, ángulo de plegado **A** (en grados) y factor K **k** (adimensional), se aplican las siguientes expresiones:

- **Bend Allowance (BA)** = (π / 180) × A × (R + k × T)
- **Retroceso exterior (OSSB)** = tan(A / 2) × (R + T)
- **Bend Deduction (BD)** = 2 × OSSB − BA
- **Longitud desarrollada (L)** = Σ longitudes rectas de las alas + Σ BA  (método de la tolerancia)
- Alternativamente: **L** = Σ (dimensiones externas de las alas) − Σ BD  (método de la deducción)

La conversión entre BA y BD es inmediata a partir de las fórmulas anteriores. El método más usado en diseño de chapa es el de la deducción de plegado, porque trabaja directamente con las cotas exteriores medidas sobre el plano.

## Parámetros y factores clave

| Parámetro | Valor típico / Rango | Unidad |
| --- | --- | --- |
| **Factor K (acero dulce)** | 0.33 – 0.40 | — |
| **Factor K (acero inoxidable 304)** | 0.40 – 0.45 | — |
| **Factor K (aluminio 5052-O)** | 0.40 – 0.45 | — |
| **Factor K (cobre dúctil)** | 0.35 – 0.42 | — |
| **Radio interior mínimo recomendado** | ≥ 1 × T | mm / in |
| **Anchura mínima del ala** | ≥ 4T + R | mm / in |
| **Distancia mínima de taladros al borde de plegado** | ≥ 3T + R | mm / in |
| **Precisión angular en doblado al aire** | ±0.5° | grados |

El factor K expresa la posición de la fibra neutra como fracción del espesor, medida desde la cara interior del doblado. En el doblado al aire, el radio interior se determina aproximadamente por la abertura de la matriz en V; una regla empírica frecuente es que el radio interior natural equivale al 16 % de la apertura de la V.

## Materiales aplicables y guía de selección
La tabla siguiente recoge los parámetros de diseño recomendados para los materiales más habituales en plegado de chapa. Las tolerancias de plegado dependen del estado de suministro y del espesor.

| Material | Espesor típico (mm / in) | Radio interior mínimo recomendado (mm / in) | Factor K recomendado | Observaciones |
| --- | --- | --- | --- | --- |
| Acero laminado en frío DC01 | 1.0 / 0.039 | 1.0 / 0.039 | 0.37 | Doblado perpendicular a laminación |
| Acero inoxidable AISI 304 | 1.5 / 0.059 | 1.5 / 0.059 | 0.42 | Admite doblado paralelo si Rb < 85 |
| Aluminio 5052-O | 2.0 / 0.079 | 2.0 / 0.079 | 0.43 | Excelente conformabilidad en frío |
| Cobre recocido | 0.8 / 0.031 | 0.8 / 0.031 | 0.38 | Evitar radios excesivamente agudos |
| Latón 70/30 semiduro | 1.2 / 0.047 | 1.5 / 0.059 | 0.40 | Puede requerir radio > 1.5T |

Para materiales con dureza Rockwell B superior a 70, se desaconseja el doblado paralelo a la dirección de laminación; debe emplearse doblado perpendicular y aumentar el radio interior hasta 2T cuando sea necesario.

## Tolerancias de doblado
La tolerancia angular en el doblado al aire es de aproximadamente ±0.5°, siempre que se mantenga constante la carrera del punzón y se compense la recuperación elástica (*springback*). En procesos de estampación por fondo (*bottoming*) se pueden alcanzar precisiones angulares de ±0.25°. La variación de espesor del material y el desgaste de las herramientas afectan directamente a la deducción de plegado; por ello se recomienda verificar los parámetros con piezas de prueba antes de la producción en serie. En aceros al carbono, una tolerancia típica sobre la longitud desarrollada es de ±0.2 mm (±0.008 in) para espesores inferiores a 3 mm (0.118 in).

## Ventajas y limitaciones
El uso de las fórmulas de *Bend Allowance* y *Bend Deduction* permite obtener la longitud exacta del desarrollo plano, optimizar el consumo de material y reducir ajustes en el taller. Es un procedimiento estandarizado compatible con software CAD/CAM y con las tablas de parámetros de las prensas plegadoras. Las principales limitaciones están asociadas a la variabilidad del factor K real en producción, la influencia del estado de la matriz y la no linealidad del *springback* en materiales de alta resistencia. Por ello, se recomienda realizar un ensayo previo para cada lote de material cuando se exijan tolerancias cerradas.

## Preguntas frecuentes (FAQ)

1. **¿Qué precisión angular se puede esperar en doblado al aire de chapa metálica?** La precisión típica es de ±0.5° en condiciones controladas.

2. **¿Cuál es el radio interior mínimo para acero inoxidable AISI 304 en doblado?** El radio mínimo debe ser al menos 1 veces el espesor del material; por ejemplo, para una chapa de 1.5 mm / 0.059 in, el radio mínimo es 1.5 mm / 0.059 in.

3. **¿Cuánto se alarga una chapa de acero de 2 mm / 0.079 in al doblarla a 90° con radio igual al espesor?** El alargamiento medido como Bend Allowance es de 4.40 mm / 0.173 in.

4. **¿Qué deducción de plegado se debe aplicar para una chapa de aluminio de 1.5 mm / 0.059 in con radio interior 1 mm / 0.039 in y ángulo de 90°?** La deducción de plegado es de 2.37 mm / 0.093 in, considerando un factor K de 0.45.

5. **¿Cuál es el ancho mínimo de ala para un doblado en prensa plegadora según normas de diseño?** El ancho mínimo debe ser al menos 4 veces el espesor más el radio interior; para una chapa de 2 mm / 0.079 in con radio de 2 mm / 0.079 in, el ancho mínimo es 10 mm / 0.39 in.

6. **¿Cómo afecta la dirección de laminación al radio mínimo de doblado en acero laminado en frío?** Para acero con dureza Rockwell B superior a 70, el doblado debe realizarse perpendicular a la dirección de laminación para evitar fracturas; el radio mínimo se mantiene en 1T bajo esa orientación y puede requerir hasta 2T si se dobla en paralelo.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pipe-formulas-d_1335.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/bending_design.cfm
