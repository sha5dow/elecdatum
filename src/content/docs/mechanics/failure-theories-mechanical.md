---
title: "Teorías de falla ingeniería mecánica"
sidebar:
  label: "Teorías de falla ingeniería mecánica"
description: "Ficha tecnica: Teorías de falla ingeniería mecánica"
keywords: ["failure theories Von Mises Tresca Mohr", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "failure-theories"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Visión general
Las teorías de falla ingeniería mecánica predicen el momento en que un material sólido deja de soportar carga, ya sea por fluencia (dúctil) o por fractura (frágil). En el ámbito de la mecánica de sólidos, estas teorías definen criterios matemáticos que relacionan el estado tensional con las propiedades resistentes del material, estableciendo una superficie de falla en el espacio de tensiones. La selección del criterio adecuado depende de la naturaleza del material ‒dúctil o frágil‒ y del tipo de solicitación. Los modelos más utilizados en ingeniería mecánica son el criterio de la máxima tensión cortante (Tresca) y el de la energía de distorsión (Von Mises) para materiales dúctiles, mientras que para materiales frágiles predominan los criterios de la tensión principal máxima (Rankine) y de Mohr-Coulomb. Un mismo material puede comportarse de forma dúctil o frágil según la temperatura, la velocidad de carga o el estado triaxial de tensiones; por ello, la elección del criterio debe basarse en la respuesta esperada bajo las condiciones reales de servicio.

## Criterios de falla para materiales dúctiles
Los materiales dúctiles, como los aceros al carbono, aluminio y muchas aleaciones metálicas, fallan predominantemente por fluencia, es decir, por deformación plástica excesiva. Los criterios que se presentan a continuación definen la transición del comportamiento elástico al plástico y se formulan en función del límite elástico uniaxial *σ<sub>y</sub>*.

### Criterio de la máxima tensión de corte (Tresca)
El criterio de Tresca, también conocido como criterio de Guest, postula que la fluencia se inicia cuando la tensión cortante máxima en un punto alcanza la tensión cortante de fluencia en un ensayo de tracción simple. Esta última es igual a *σ<sub>y</sub> / 2*. Matemáticamente, para un estado general de tensiones con tensiones principales *σ<sub>1</sub> ≥ σ<sub>2</sub> ≥ σ<sub>3</sub>*, la condición de fluencia se escribe:

*τ<sub>max</sub> = (σ<sub>1</sub> – σ<sub>3</sub>) / 2 = σ<sub>y</sub> / 2*

En el caso de tensión plana (*σ<sub>3</sub> = 0*), la envolvente de fluencia en el plano *σ<sub>1</sub> – σ<sub>2</sub>* forma un hexágono regular centrado en el origen. Este criterio es inherentemente conservador para materiales dúctiles y su aplicación resulta sencilla en el diseño de componentes bajo torsión o combinaciones de flexión-torsión.

**Tabla 1** Límite cortante de fluencia según Tresca para metales comunes.

| Material | Límite elástico (σ<sub>y</sub>) | Tensión cortante de fluencia (τ<sub>y</sub> = σ<sub>y</sub>/2) |
| --- | --- | --- |
| Acero estructural S235 | 235 MPa / 34.1 ksi | 117,5 MPa / 17.0 ksi |
| Acero aleado 4140 templado | 655 MPa / 95.0 ksi | 327,5 MPa / 47.5 ksi |
| Aluminio 6061-T6 | 275 MPa / 39.9 ksi | 137,5 MPa / 19.9 ksi |
| Titanio Ti-6Al-4V (recocido) | 880 MPa / 127.6 ksi | 440 MPa / 63.8 ksi |

### Criterio de la máxima energía de distorsión (Von Mises)
El criterio de Von Mises (o de Maxwell-Huber-Hencky-Von Mises) establece que la fluencia ocurre cuando la energía de distorsión por unidad de volumen iguala a la energía de distorsión correspondiente a la fluencia en un ensayo de tracción uniaxial. Alternativamente, puede interpretarse como un criterio basado en la tensión cortante octaédrica o en el segundo invariante del tensor desviador de tensiones, *J<sub>2</sub>*. La función de fluencia se expresa comúnmente mediante la **tensión equivalente de Von Mises**, σ<sub>v</sub>:

σ<sub>v</sub> = √( ½[(σ<sub>1</sub> – σ<sub>2</sub>)² + (σ<sub>2</sub> – σ<sub>3</sub>)² + (σ<sub>3</sub> – σ<sub>1</sub>)²] )

En función de las componentes del tensor de tensiones:

σ<sub>v</sub> = √( ½[(σ<sub>x</sub> – σ<sub>y</sub>)² + (σ<sub>y</sub> – σ<sub>z</sub>)² + (σ<sub>z</sub> – σ<sub>x</sub>)² + 6(τ<sub>xy</sub>² + τ<sub>yz</sub>² + τ<sub>zx</sub>²)] )

La fluencia se predice cuando σ<sub>v</sub> ≥ σ<sub>y</sub>. Para un estado de tensión plana, la ecuación define una elipse en el espacio de tensiones principales, que envuelve al hexágono de Tresca. El criterio es independiente de la componente hidrostática de la tensión, lo que lo hace apropiado para metales donde la fluencia es insensible a la presión. En comparación directa, la tensión equivalente de Von Mises para un estado de cortante puro (p.ej., torsión) es √3 veces la tensión cortante máxima, mientras que Tresca la limita a la mitad del límite elástico; es decir, Von Mises permite tensiones cortantes un 15,5 % superiores respecto a la predicción de Tresca.

**Tabla 2** Comparación del límite cortante de fluencia según Tresca y Von Mises.

| Criterio | Tensión cortante de fluencia (relativa a σ<sub>y</sub>) | Ejemplo para σ<sub>y</sub> = 250 MPa / 36.3 ksi |
| --- | --- | --- |
| Tresca | τ<sub>y</sub> = σ<sub>y</sub> / 2 = 0,500 σ<sub>y</sub> | 125 MPa / 18.1 ksi |
| Von Mises | τ<sub>y</sub> = σ<sub>y</sub> / √3 ≈ 0,577 σ<sub>y</sub> | 144 MPa / 20.9 ksi |

## Criterios de falla para materiales frágiles
Los materiales frágiles (fundición gris, cerámicos, vidrios, hormigón) soportan escasa deformación plástica antes de la fractura y su resistencia a compresión es muy superior a la de tracción. Los criterios que se describen a continuación incorporan esta asimetría y se basan generalmente en la tensión normal límite.

### Criterio de la tensión principal máxima (Rankine)
El criterio de Rankine, o de la tensión normal máxima, establece que la falla ocurre cuando la tensión principal máxima de tracción, σ<sub>1</sub>, alcanza la resistencia a tracción *σ<sub>t</sub>*, o cuando la tensión principal mínima (máxima compresión), σ<sub>3</sub>, supera en valor absoluto la resistencia a compresión *σ<sub>c</sub>*. En su forma más simple:

σ<sub>1</sub> ≤ σ<sub>t</sub> ; |σ<sub>3</sub>| ≤ σ<sub>c</sub>

Este criterio no considera la interacción entre tensiones y resulta válido cuando la fractura está gobernada exclusivamente por tensiones normales. Es especialmente utilizado en vidrio y cerámicas técnicas.

### Criterio de Mohr-Coulomb
El criterio de Mohr-Coulomb es una extensión del modelo de fricción interna, ampliamente empleado en geomecánica, fundición gris y hormigón. La falla se produce cuando la tensión cortante en un plano supera la cohesión *c* más la fricción interna proporcional a la tensión normal de compresión sobre ese plano. La envolvente de falla se expresa como:

τ = c + σ<sub>n</sub> tan φ

donde *φ* es el ángulo de fricción interna y σ<sub>n</sub> es la tensión normal (positiva en compresión). En términos de tensiones principales (σ<sub>1</sub> ≥ σ<sub>2</sub> ≥ σ<sub>3</sub>), la condición de falla se escribe:

σ<sub>1</sub> (1 – sin φ) – σ<sub>3</sub> (1 + sin φ) = 2c cos φ

Cuando φ = 0°, el criterio se reduce al de Tresca (con *c = τ<sub>y</sub>*). Mohr-Coulomb captura adecuadamente la mayor resistencia a compresión que a tracción. Para un material con una cohesión *c* = 5 MPa / 725 psi y ángulo de fricción φ = 30°, la resistencia a tracción uniaxial es de aproximadamente *σ<sub>t</sub>* = 2c cos φ / (1+ sin φ) = 5,77 MPa / 837 psi, mientras que la resistencia a compresión es *σ<sub>c</sub>* = 2c cos φ / (1– sin φ) = 17,3 MPa / 2510 psi.

**Tabla 3** Parámetros típicos de Mohr-Coulomb para materiales de ingeniería.

| Material | Cohesión (c) | Ángulo de fricción interna (φ) | Resistencia tracción (σ<sub>t</sub>) |
| --- | --- | --- | --- |
| Fundición gris | 60 MPa / 8,70 ksi | 30° | 35 MPa / 5,08 ksi |
| Hormigón simple | 3,5 MPa / 508 psi | 37° | 2,6 MPa / 377 psi |
| Suelo arcilloso duro | 50 kPa / 7,25 psi | 25° | 32 kPa / 4,64 psi |

## Comparación de los criterios de falla
La siguiente tabla resume los criterios fundamentales, el tipo de material para el que son aplicables y la variable de control que define el fallo.

| Criterio | Material | Variable límite | Fórmula básica | Observación |
| --- | --- | --- | --- | --- |
| Tresca | Dúctil | Tensión cortante máxima | (σ<sub>1</sub> – σ<sub>3</sub>) / 2 ≤ τ<sub>y</sub> | Más conservador que Von Mises; superficie de fluencia hexagonal |
| Von Mises | Dúctil | Energía de distorsión o J<sub>2</sub> | σ<sub>v</sub> ≤ σ<sub>y</sub> | Superficie de fluencia cilíndrica; mejor ajuste experimental para metales |
| Rankine (tensión máxima) | Frágil | Tensión principal de tracción | σ<sub>1</sub> ≤ σ<sub>t</sub> | No considera interacción; adecuado para vidrios y cerámicos |
| Mohr-Coulomb | Frágil / friccional | Tensión cortante y normal | τ = c + σ<sub>n</sub> tan φ | Captura asimetría tracción-compresión; muy usado en rocas y hormigón |

## Ejemplo de aplicación práctica
**Eje de acero sometido a flexión y torsión combinadas.**  
Un eje macizo de acero AISI 1045 (límite elástico σ<sub>y</sub> = 310 MPa / 45,0 ksi) debe transmitir una potencia que induce un momento flector *M* = 120 N·m / 1062 lbf·in y un momento torsor *T* = 90 N·m / 797 lbf·in. El diámetro inicial propuesto es *d* = 25 mm / 0,984 in.

**Paso 1 – Tensiones nominales.**  
Para una sección circular:  
Tensión normal por flexión: σ<sub>x</sub> = 32M / (πd³) = 32 × 120e3 N·mm / (π × 25³ mm³) ≈ 78,2 MPa / 11,34 ksi.  
Tensión cortante por torsión: τ<sub>xy</sub> = 16T / (πd³) = 16 × 90e3 N·mm / (π × 25³) ≈ 29,3 MPa / 4,25 ksi.

**Paso 2 – Cálculo de la tensión equivalente según Von Mises (tensión plana, σ<sub>y</sub>=0, σ<sub>z</sub>=0).**  
σ<sub>v</sub> = √(σ<sub>x</sub>² + 3τ<sub>xy</sub>²) = √(78,2² + 3 × 29,3²) ≈ 94,6 MPa / 13,72 ksi.

**Paso 3 – Verificación.**  
Factor de seguridad: FS = σ<sub>y</sub> / σ<sub>v</sub> = 310 / 94,6 ≈ 3,28.  
Con el criterio de Tresca, τ<sub>max</sub> = √[(σ<sub>x</sub>/2)² + τ<sub>xy</sub>²] = √(39,1² + 29,3²) ≈ 48,9 MPa / 7,09 ksi, y el cortante admisible es τ<sub>y</sub> = σ<sub>y</sub>/2 = 155 MPa / 22,5 ksi, dando FS = 155 / 48,9 ≈ 3,17. Ambos criterios indican que el diámetro de 25 mm / 0,984 in es más que suficiente; podría reducirse para optimizar el material respetando el FS mínimo de diseño ( típicamente 1,5 a 2,5 según la aplicación).

## Preguntas frecuentes

### ¿Cuál es la diferencia numérica entre la tensión de fluencia según Tresca y Von Mises para un estado de cortante puro?
Para un estado de cortante puro (torsión), la tensión cortante de fluencia según Tresca es 0,500 del límite elástico, mientras que Von Mises predice un valor 0,577, es decir, un 15,5 % mayor. Por ejemplo, con un acero de σ<sub>y</sub> = 400 MPa / 58,0 ksi, la fluencia se espera a τ = 200 MPa / 29,0 ksi con Tresca y a 231 MPa / 33,5 ksi con Von Mises.

### ¿Qué valor de tensión equivalente de Von Mises se considera seguro para un aluminio 7075-T6 con σ<sub>y</sub> = 500 MPa / 72,5 ksi?
Manteniendo un factor de seguridad de 1,5, la tensión de Von Mises admisible no debe superar 500 / 1,5 ≈ 333 MPa / 48,3 ksi. En la práctica, para componentes aeronáuticos se suelen emplear factores de seguridad entre 1,25 y 2,0.

### ¿Por qué el criterio de Mohr-Coulomb predice una resistencia a la compresión mayor que a tracción para el hormigón?
Porque incorpora el ángulo de fricción interna; para φ = 37° y c = 3,5 MPa / 508 psi, la resistencia a tracción uniaxial vale solo 2,6 MPa / 377 psi, mientras que la resistencia a compresión alcanza 17,3 MPa / 2510 psi. Esta asimetría de aproximadamente 6.6 veces es típica del hormigón simple.

### ¿Cuál es la cohesión mínima necesaria en una junta de suelo para soportar una tensión cortante de 80 kPa / 11,6 psi con una tensión normal de compresión de 120 kPa / 17,4 psi y φ = 28°?
Aplicando τ = c + σ<sub>n</sub> tan φ, despejando c = τ – σ<sub>n</sub> tan φ = 80 – 120 × tan(28°) ≈ 80 – 120 × 0,5317 = 80 – 63,8 = 16,2 kPa / 2,35 psi.

### ¿En qué circunstancias un material dúctil como el acero puede fallar de forma frágil y qué criterio se aplica?
A bajas temperaturas o bajo estados triaxiales de alta tensión hidrostática, el acero puede presentar fractura frágil sin deformación plástica apreciable. En esos casos se debe usar un criterio de tensión principal máxima (Rankine). La temperatura de transición dúctil-frágil varía, pero para un acero al carbono sin alear puede situarse alrededor de -20 °C / -4 °F; cuando la temperatura de servicio es inferior, se aumenta el factor de seguridad y se limita σ<sub>1</sub> a un valor inferior a 0,3 de la resistencia a tracción mínima.

### ¿Cuánto mayor es el factor de seguridad obtenido con Von Mises frente a Tresca para un mismo estado tensional no proporcional?
La diferencia no es constante: en cortante puro, el FS con Von Mises es 1,155 veces el de Tresca; en tensión biaxial equibiaxial (σ<sub>1</sub>=σ<sub>2</sub>=σ, σ<sub>3</sub>=0), ambos criterios coinciden debido a que τ<sub>max</sub>=σ/2 y σ<sub>v</sub>=σ, con lo que el mismo FS se obtiene al comparar con σ<sub>y</sub>. Por tanto, la ventaja de Von Mises es máxima en estados con dominancia de cortante.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/material_science/von_mises.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/failure_criteria/failure_criteria_ductile.cfm
