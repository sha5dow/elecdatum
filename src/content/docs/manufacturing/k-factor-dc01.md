---
title: "K-factor chapa DC01"
sidebar:
  label: "K-factor chapa DC01"
description: "Ficha tecnica: K-factor chapa DC01"
keywords: ["DC01 sheet metal k-factor bend allowance table", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "sheet-metal-kfactor"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Definición
El factor K en chapa metálica representa la razón adimensional entre la posición del eje neutro y el espesor del material, y es fundamental para el cálculo preciso del desarrollo en plano de piezas dobladas. Para el acero DC01 (conforme a EN 10130), el factor K suele oscilar entre 0,33 y 0,45 en operaciones de plegado por aire, dependiendo de la relación radio/espesor, la dirección de laminación y las condiciones de la herramienta.

## Fórmula del factor K
El factor K se expresa como:

K = d / T

donde:
- d = distancia desde la cara interior del doblez hasta el eje neutro.
- T = espesor de la chapa.

A partir del factor K se calculan la tolerancia de plegado (BA) y la deducción por plegado (BD):
BA = (π / 180) × (R + K × T) × A
BD = 2 × (R + T) × tan(A/2) − BA

siendo R el radio interior del doblez y A el ángulo de plegado.

## Tabla de valores del factor K para DC01

Condiciones: plegado por aire, matriz en V, ángulo 90°, grano de laminación paralelo al eje del plegado. Los valores están verificados para prácticas de taller comunes con acero DC01 decapado y recocido de calidad comercial.

| Espesor (mm / in) | Apertura de V (mm / in) | Radio interior (mm / in) | Factor K |
| --- | --- | --- | --- |
| 0,5 mm / 0.020 in | 4 mm / 0.157 in | 0,8 mm / 0.031 in | 0,42 |
| 1,0 mm / 0.039 in | 8 mm / 0.315 in | 1,5 mm / 0.059 in | 0,40 |
| 1,5 mm / 0.059 in | 12 mm / 0.472 in | 2,0 mm / 0.079 in | 0,38 |
| 2,0 mm / 0.079 in | 16 mm / 0.630 in | 2,5 mm / 0.098 in | 0,36 |
| 3,0 mm / 0.118 in | 24 mm / 0.945 in | 3,5 mm / 0.138 in | 0,33 |

Para plegado en grano transversal (grano perpendicular al eje de pliegue), el factor K puede aumentar entre 0,02 y 0,05.

## Factores que afectan el factor K
- **Relación radio/espesor (R/T)**: a mayor R/T, el eje neutro se desplaza hacia el centro de la chapa y el factor K se aproxima a 0,50.
- **Dirección de laminación**: plegar en dirección transversal al grano desplaza el eje neutro hacia el interior, elevando el K.
- **Método de plegado**: el plegado por aire produce valores de K más estables que el acuñado o el plegado en fondos.
- **Velocidad de deformación y lubricación**: influyen en la fricción y el estirado del material, modificando ligeramente el K.
- **Estado superficial y tolerancias del material**: variaciones en el espesor real o en el límite elástico del DC01 alteran la posición del eje neutro.

## Materiales aplicables
Aunque esta tabla es específica para acero DC01 (equivalente a EN 10130, 1.0330, similar a AISI 1008/1010), el factor K se puede estimar para otros aceros de bajo carbono con ductilidad similar. A modo de referencia comparativa, los rangos de factor K para plegado en aire a 90° con V=8×espesor son:

| Material | Espesor típico (mm / in) | Factor K |
| --- | --- | --- |
| DC01 (acero suave) | 0,5–3,0 mm / 0.020–0.118 in | 0,33–0,45 |
| Acero inoxidable 304 | 0,5–3,0 mm / 0.020–0.118 in | 0,35–0,42 |
| Aluminio 5052-H32 | 0,5–3,0 mm / 0.020–0.118 in | 0,38–0,45 |
| Cobre ETP | 0,5–2,0 mm / 0.020–0.079 in | 0,40–0,48 |

## Tolerancias típicas
En el plegado de DC01, las tolerancias dimensionales esperables sobre la longitud desarrollada utilizando el factor K de esta tabla son:
- **Para espesores ≤ 1,5 mm / 0.059 in**: ±0,1 mm / ±0.004 in en la cota total de la pieza.
- **Para espesores de 2,0–3,0 mm / 0.079–0.118 in**: ±0,2 mm / ±0.008 in.
Estos valores asumen máquinas de plegado con repetibilidad posicional de ±0,01 mm / ±0.0004 in y una variación de espesor del material dentro de las tolerancias EN 10130.

## Ventajas y limitaciones
**Ventajas**:
- El factor K proporciona un método sencillo para predecir el desarrollo de la chapa, reduciendo pruebas y errores en taller.
- Es aplicable a la mayoría de los aceros al carbono conformables como el DC01, con datos ampliamente difundidos.
- Combinado con software CAD/CAM, permite obtener piezas dobladas dentro de tolerancias finas.

**Limitaciones**:
- El factor K es sensible a las condiciones reales de la herramienta (radio de punzón, desgaste) y al sentido de laminación, por lo que puede requerir ajuste experimental.
- No contempla el retorno elástico (springback); debe combinarse con compensaciones angulares.
- Para radios muy ajustados (R/T < 0,5) o espesores superiores a 3 mm / 0.118 in, el eje neutro se desplaza de forma no lineal y el factor K deja de ser constante.

## Guía de selección
Para plegado en aire de DC01 con una matriz en V estándar (apertura = 8 × espesor), utilizar el factor K de la tabla del espesor correspondiente. Si la relación V/t es mayor (10–12), el radio interior aumenta y debe seleccionarse un factor K ligeramente superior (sumar 0,02–0,04). En piezas donde la dirección de granulación es desconocida o mixta, se recomienda emplear el valor medio de 0,40 para espesores ≤ 2 mm y 0,35 para espesores > 2 mm. Siempre se aconseja validar las primeras piezas con medición sobre muestra real, ajustando el K según la desviación observada.

## Preguntas frecuentes

**¿Cuál es el factor K recomendado para DC01 de 1,5 mm de espesor en plegado a 90°?**
El factor K recomendado es 0,38 para una matriz en V de 12 mm / 0.472 in y radio interior de 2,0 mm / 0.079 in, plegando en dirección paralela al grano.

**¿Cuánto vale el factor K si se pliega DC01 transversalmente al grano?**
En plegado transversal al grano el factor K suele aumentar entre 0,02 y 0,05; para un espesor de 2,0 mm / 0.079 in, el valor de 0,36 puede pasar a 0,38–0,41 dependiendo de la severidad del estirado.

**¿El factor K varía con el ángulo de plegado?**
Para ángulos entre 60° y 120° el factor K en DC01 se mantiene prácticamente constante, con variaciones inferiores a ±0,02 respecto a los valores tabulados para 90°.

**¿Qué tolerancia de desarrollo puedo esperar usando el factor K = 0,40 para DC01 de 1 mm?**
Usando un factor K de 0,40 en DC01 de 1,0 mm / 0.039 in, la tolerancia típica sobre la longitud desarrollada total de la pieza es de ±0,12 mm / ±0.005 in.

**¿El factor K se utiliza igual en plegado por aire y en estampado de fondo?**
No: en estampado de fondo el material se comprime severamente contra el utillaje y el eje neutro se desplaza más hacia la tabla interna; el factor K puede ser 0,05 menor que en plegado por aire en las mismas condiciones nominales.

**¿Para espesores por encima de 3 mm / 0.118 in en DC01 se puede extrapolar la tabla?**
Por encima de 3 mm / 0.118 in la relación R/T suele ser menor y los efectos de la deformación heterogénea hacen que el factor K no sea lineal; se recomienda determinar experimentalmente un valor específico en lugar de extrapolar.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/factors-safety-fos-d_1624.html
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/fracture_mechanics/fm_lefm_Kc_Matl.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/platbockning
