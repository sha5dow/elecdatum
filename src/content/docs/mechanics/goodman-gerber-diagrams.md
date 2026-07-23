---
title: "Diagramas Goodman Gerber fatiga"
sidebar:
  label: "Diagramas Goodman Gerber fatiga"
description: "Ficha tecnica: Diagramas Goodman Gerber fatiga"
keywords: ["Goodman Gerber modified fatigue diagram", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "goodman-gerber"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Fundamento de fatiga con carga media

Los componentes mecánicos sometidos a ciclos de carga rara vez experimentan esfuerzos completamente alternantes (con media nula). En la mayoría de los casos, la tensión fluctúa alrededor de un valor medio distinto de cero, lo que reduce el límite de fatiga del material respecto a la condición de inversión total. La interacción entre la tensión media y la amplitud de tensión se describe mediante diagramas de fatiga que establecen regiones seguras de operación. El diagrama de Goodman‑Gerber es la herramienta fundamental para prever la vida infinita o finita de un elemento dúctil bajo estas condiciones.

## Esfuerzos medio y alternante

Toda historia de carga cíclica puede descomponerse en un valor medio y una amplitud. Para un ciclo de tracción pura se definen:

| Magnitud | Símbolo | Fórmula | Unidad típica (métrica / imperial) |
| --- | --- | --- | --- |
| Tensión máxima del ciclo | *σ*<sub>max</sub> | – | 250 MPa / 36.3 ksi |
| Tensión mínima del ciclo | *σ*<sub>min</sub> | – | 50 MPa / 7.3 ksi |
| Tensión media | *σ*<sub>m</sub> | (*σ*<sub>max</sub> + *σ*<sub>min</sub>) / 2 | 150 MPa / 21.8 ksi |
| Amplitud de tensión | *σ*<sub>a</sub> | (*σ*<sub>max</sub> − *σ*<sub>min</sub>) / 2 | 100 MPa / 14.5 ksi |

La tabla representa un punto de operación típico; todas las celdas incluyen el par métrico‑imperial.

## Línea de Goodman

Propuesta por John Goodman en 1899, es una recta que une el límite de fatiga para carga completamente invertida (*σ*<sub>e</sub> o *σ*<sub>w</sub>) con la resistencia última a la tracción (*σ*<sub>ult</sub>). Su expresión matemática, incluyendo un factor de seguridad *n*, es:

*σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> = 1/*n*

Para *n* = 1 define la frontera de fallo. Cualquier punto de trabajo (*σ*<sub>m</sub>, *σ*<sub>a</sub>) situado por debajo de la línea representa vida infinita; por encima, falla por fatiga. La recta de Goodman es conservadora y por ello la más empleada en diseño preliminar.

## Línea de Gerber

La parábola de Gerber ajusta mejor los datos experimentales de materiales dúctiles pero ofrece un margen de seguridad menor. Su ecuación es:

(*σ*<sub>m</sub>/*σ*<sub>ult</sub>)² + *σ*<sub>a</sub>/*σ*<sub>e</sub> = 1

La curva queda por encima de la recta de Goodman, excepto en los extremos, indicando que para niveles moderados de tensión media el material resiste amplitudes algo mayores. Su uso está limitado a situaciones en las que se dispone de amplia validación experimental o donde se admite una probabilidad de fallo mayor.

## Línea de Soderberg

La línea de Soderberg sustituye la resistencia última por el límite elástico (*σ*<sub>y</sub>) para proteger al componente contra la fluencia en el primer ciclo:

*σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>y</sub> = 1

Es el criterio más restrictivo de los tres. Se recomienda cuando las deformaciones plásticas, incluso locales, son inadmisibles o cuando el material no posee un límite de fatiga bien definido.

## Diagrama de Goodman modificado

Para tener en cuenta la fluencia en el régimen de altas tensiones medias se traza una línea adicional desde el punto (*σ*<sub>y</sub>, 0) hasta el punto (0, *σ*<sub>e</sub>). El dominio seguro queda delimitado por la envolvente que combina la recta de Goodman en la zona elástica y la recta de fluencia en la zona plástica.

| Criterio | Ecuación de fallo (n=1) | Región segura |
| --- | --- | --- |
| Goodman | *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> = 1 | Por debajo de la recta |
| Gerber | (*σ*<sub>m</sub>/*σ*<sub>ult</sub>)² + *σ*<sub>a</sub>/*σ*<sub>e</sub> = 1 | Por debajo de la parábola |
| Soderberg | *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>y</sub> = 1 | Por debajo de la recta |
| Modificado (Goodman + fluencia) | Envolvente de Goodman y línea *σ*<sub>m</sub> = *σ*<sub>y</sub> | Interior del polígono |

## Factores de seguridad en fatiga

El factor de seguridad *n* depende de cómo crezcan las cargas. Se distinguen tres modos:

- **Crecimiento proporcional**: ambas componentes, media y alternante, se multiplican por el mismo factor. *n* = ( *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> )⁻¹.
- **Solo crece la tensión media**: *n* = (1 − *σ*<sub>a</sub>/*σ*<sub>e</sub>) × *σ*<sub>ult</sub> / *σ*<sub>m</sub>, si *σ*<sub>m</sub> > 0.
- **Solo crece la amplitud**: *n* = ( *σ*<sub>e</sub> − *σ*<sub>e</sub>*σ*<sub>m</sub>/*σ*<sub>ult</sub> ) / *σ*<sub>a</sub>.

En el diagrama, estos casos corresponden a desplazamientos del punto de trabajo a lo largo de una recta que pasa por el origen, horizontalmente o verticalmente. La selección del modo depende de la física del sistema de carga.

## Aplicación a resortes helicoidales

En resortes de compresión, el esfuerzo cortante en la fibra interior alterna entre un valor máximo y uno mínimo. Se definen:

*τ*<sub>m</sub> = (*τ*<sub>max</sub> + *τ*<sub>min</sub>) / 2  
*τ*<sub>a</sub> = (*τ*<sub>max</sub> − *τ*<sub>min</sub>) / 2  

donde *τ* = *K*<sub>w</sub> 8FD / (πd³) incluye el factor de Wahl *K*<sub>w</sub>. El límite de resistencia a la fatiga en cortante se relaciona con el de fatiga axial mediante *τ*<sub>e</sub> ≈ 0.35 *σ*<sub>e</sub> para aceros de resortes. El criterio de Soderberg adaptado a cortante queda:

*τ*<sub>a</sub> / *τ*<sub>e</sub> + *τ*<sub>m</sub> / *τ*<sub>y</sub> ≤ 1 / *n*

con *τ*<sub>y</sub> ≈ 0.58 *σ*<sub>y</sub> (criterio de von Mises).

## Tabla de resistencia a la fatiga de aceros comunes

| Material | *σ*<sub>ult</sub> (tracción) | *σ*<sub>y</sub> (fluencia) | Límite de fatiga *σ*<sub>e</sub> (flexión rotativa) |
| --- | --- | --- | --- |
| AISI 1020 laminado | 380 MPa / 55 ksi | 210 MPa / 30 ksi | 190 MPa / 28 ksi |
| AISI 1045 normalizado | 620 MPa / 90 ksi | 530 MPa / 77 ksi | 310 MPa / 45 ksi |
| AISI 4140 bonificado | 1100 MPa / 160 ksi | 970 MPa / 141 ksi | 520 MPa / 75 ksi |
| AISI 4340 revenido | 1280 MPa / 186 ksi | 1170 MPa / 170 ksi | 600 MPa / 87 ksi |
| Acero inoxidable 304 | 515 MPa / 75 ksi | 205 MPa / 30 ksi | 240 MPa / 35 ksi |

Los límites de fatiga corresponden a probetas pulidas con rango de 10⁷ ciclos. En diseño deben reducirse mediante factores de superficie, tamaño y confiabilidad.

## Ejemplo de dimensionamiento

Un eje de acero AISI 1045 normalizado trabaja con una tensión media de 200 MPa / 29 ksi y una amplitud de 90 MPa / 13 ksi. Evalúe el factor de seguridad según Goodman.

- *σ*<sub>ult</sub> = 620 MPa / 90 ksi, *σ*<sub>e</sub> = 310 MPa / 45 ksi (tabla anterior).  
- Aplicando Goodman: 1/*n* = *σ*<sub>a</sub>/*σ*<sub>e</sub> + *σ*<sub>m</sub>/*σ*<sub>ult</sub> = 90/310 + 200/620 = 0.290 + 0.323 = 0.613 → *n* ≈ 1.63.  
- El eje soportará vida infinita con un factor de seguridad de 1.63 frente a fatiga.

Verificación complementaria con Gerber: 1/*n* = √(1 − *σ*<sub>m</sub>/ *σ*<sub>ult</sub> × *σ*<sub>a</sub>/*σ*<sub>e</sub>) (aproximación). Para Gerber se obtiene *n* ≈ 1.96, menos conservador.

## Preguntas frecuentes (FAQ)

1. **¿Qué es el límite de fatiga y cómo se relaciona con la resistencia última?**  
   El límite de fatiga de un acero dúctil es aproximadamente la mitad de su resistencia última (0.5 *σ*<sub>ult</sub>) cuando *σ*<sub>ult</sub> < 1400 MPa / 203 ksi. Para resistencias superiores el valor se estabiliza en torno a 700 MPa / 100 ksi. Esta regla es válida para flexión rotativa de probetas pulidas.

2. **¿Cómo aplico el criterio de Goodman modificado en un eje con tensiones multiaxiales?**  
   Se calcula la tensión equivalente de von Mises para la componente media (*σ*<sub>m,eq</sub>) y alternante (*σ*<sub>a,eq</sub>) y luego se ingresan en la ecuación de Goodman. El procedimiento estándar de elementos de máquinas da *n* ≈ 2.0 para un acero 4140 con carga combinada de torsión y flexión.

3. **¿Cuál es la diferencia principal entre Gerber y Goodman en términos de conservadurismo?**  
   La línea de Goodman admite amplitudes seguras hasta un 30 % menores que la curva de Gerber en la zona media del diagrama. Por ejemplo, para un acero de 300 MPa / 43.5 ksi de límite de fatiga y tensión media de 150 MPa / 21.8 ksi, Goodman permite una amplitud de 227 MPa / 33 ksi frente a 260 MPa / 37.7 ksi de Gerber.

4. **¿Es necesario usar Soderberg si el material no tiene un límite de fatiga definido?**  
   Sí, en aleaciones de aluminio, donde la curva S‑N no se vuelve asintótica, se prefiere Soderberg con un valor de resistencia a la fatiga a 5 × 10⁸ ciclos (≈ 96 MPa / 14 ksi para Al 6061‑T6) y el límite elástico de 276 MPa / 40 ksi, obteniendo n > 1.5 para cargas moderadas.

5. **¿Cómo afecta una tensión media de compresión al límite de fatiga?**  
   La compresión media mejora la resistencia a la fatiga. En el diagrama de Goodman, la recta se extiende por el cuadrante negativo de *σ*<sub>m</sub>, donde la amplitud admisible puede superar incluso el límite de fatiga. Para un acero de 350 MPa / 51 ksi de *σ*<sub>e</sub>, una compresión media de 100 MPa / 14.5 ksi permite una amplitud de hasta 400 MPa / 58 ksi según alguna bibliografía experimental.

6. **¿Cuándo se elige Goodman modificado frente a Gerber?**  
   Se elige Goodman modificado cuando la incertidumbre de carga es alta o se busca un diseño robusto, ya que reduce la amplitud permisible en un 15‑20 % respecto a Gerber para la misma tensión media. En aplicaciones aeroespaciales, donde los márgenes son estrechos, se prefiere Gerber acompañado de ensayos completos.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/fatigue/modified_godman_fatugue_curve.htm
- **efunda.com**: https://www.efunda.com/designstandards/springs/calc_comp_fatigue_eqn.cfm
