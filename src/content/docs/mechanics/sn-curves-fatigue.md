---
title: "Curvas S-N fatiga materiales"
sidebar:
  label: "Curvas S-N fatiga materiales"
description: "Ficha tecnica: Curvas S-N fatiga materiales"
keywords: ["S-N fatigue curves endurance limit materials", "mechanics"]
category: "mechanics"
topic: "fatigue"
subcategory: "sn-curves"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Definición de las curvas S-N
La curva S‑N (esfuerzo‑número de ciclos) o método de vida bajo tensión es la herramienta fundamental para predecir la falla por fatiga en el régimen de alto ciclaje (N > 10³ ciclos, típicamente > 10⁴). En ella se representa el esfuerzo nominal alternante S (σₐ) frente al número de ciclos N hasta la rotura, ambos en escala logarítmica. La curva se obtiene experimentalmente mediante ensayos de flexión rotativa con tensión media nula (R = −1). Los materiales férreos y el titanio exhiben un **límite de fatiga** o **límite de resistencia a la fatiga** (Sₑ): un nivel de esfuerzo por debajo del cual el material puede soportar un número ilimitado de ciclos sin fallar. En aleaciones de aluminio, cobre y la mayoría de los metales no férreos no existe un límite definido; en su lugar se emplea la **resistencia a la fatiga** (Sₙf) para un número especificado de ciclos, habitualmente 5 × 10⁸.

La norma ASTM define _resistencia a la fatiga_ (S\_Nf) como “el valor del esfuerzo al que ocurre la falla después de Nf ciclos”, y _límite de fatiga_ (S\_f) como “el valor límite del esfuerzo al que ocurre la falla cuando Nf se hace muy grande”. En diseño de máquinas se reserva _límite de resistencia_ (Sₑ) para los aceros que realmente presentan una asíntota horizontal y se habla de _resistencia a la fatiga_ para los materiales sin límite verdadero.

## Límite de fatiga y resistencia a la fatiga en materiales metálicos
Para aceros al carbono y aleados, el límite de fatiga de probetas pulidas ensayadas en laboratorio (Sₑ′) es aproximadamente la mitad de la resistencia última a la tracción (Sᵤₜ), con un valor máximo de 290 MPa (42 ksi). En fundiciones, aluminios y cobres, Sₑ′ se estima como 0,4 veces la resistencia a la tracción. Los valores máximos típicos son 170 MPa (24 ksi) para fundiciones de hierro, 130 MPa (19 ksi) para aleaciones de aluminio y 97 MPa (14 ksi) para aleaciones de cobre. En polímeros, el límite de fatiga se corresponde con la resistencia intrínseca de los enlaces covalentes y puede ser muy inferior.

En la práctica, el límite de fatiga real del componente (Sₑ) se obtiene a partir del valor teórico de laboratorio aplicando una serie de factores modificadores que consideran el acabado superficial, el tamaño, el tipo de carga, la temperatura y la confiabilidad (véase Factores modificadores). Para materiales sin límite verdadero, como el aluminio 6061‑T6, la curva S‑N ajustada se expresa mediante la ecuación:

S = (14 479 / √N) + 96,5 MPa   o bien   S = (2 100 000 / √N) + 14 000 psi

a partir de la cual se define la resistencia a la fatiga para el número de ciclos de interés.

## Factores modificadores del límite de fatiga
El límite de fatiga corregido para una pieza real se calcula como:

Sₑ = Sₑ′ · Cₛ · C\_L · C\_d · C\_t · C\_r · C\_m

donde Sₑ′ es el límite teórico obtenido en laboratorio con probetas pulidas de pequeño diámetro sometidas a flexión rotativa.

- **Factor de superficie (Cₛ)** – depende del acabado superficial y de la resistencia a la tracción del material. Se expresa con ecuaciones de la forma Cₛ = a · Sᵤₜᵇ (Sᵤₜ en MPa o en ksi según la constante). La Tabla [1] presenta los coeficientes a y b para diferentes acabados, tanto en unidades métricas como imperiales.

| Acabado superficial | a (MPa) | b (MPa) | a (ksi) | b (ksi) |
|---|---|---|---|---|
| Rectificado | 1,58 | –0,085 | 1,34 | –0,085 |
| Mecanizado o estirado en frío | 4,51 | –0,265 | 2,70 | –0,265 |
| Laminado en caliente | 57,7 | –0,718 | 14,4 | –0,718 |
| Forjado | 272 | –0,995 | 39,9 | –0,995 |

Cₛ = a · Sᵤₜᵇ. Por ejemplo, para un acero con Sᵤₜ = 600 MPa (87 ksi) y acabado mecanizado: Cₛ(métrico) = 4,51 · 600⁻⁰·²⁶⁵ ≈ 0,84; Cₛ(imperial) = 2,70 · 87⁻⁰·²⁶⁵ ≈ 0,84.

- **Factor de tamaño (C\_L)** – para flexión y torsión en secciones circulares, depende del diámetro d:

| Rango de d | C\_L (flexión/torsión) |
|---|---|
| d ≤ 8,0 mm / 0,31 in | 1,0 |
| 8,0 mm < d ≤ 250 mm (0,31 in < d ≤ 9,84 in) | 1,189 · d⁻⁰·⁰⁹⁷ (d en mm) |
| d ≤ 8,3 mm / 0,33 in para carga axial | 1,0 |

donde d se introduce en milímetros en la fórmula métrica. En sistema imperial se utiliza una expresión equivalente con d en pulgadas. Para piezas no circulares se emplea el diámetro equivalente dₑ = √(A₉₅), siendo A₉₅ el área de la sección que soporta el 95 % del esfuerzo.

- **Factor de carga (C\_d)** – corrige según el tipo de solicitación:

| Tipo de carga | C\_d |
|---|---|
| Flexión | 1,0 |
| Carga axial | 0,85 |
| Torsión (cortante puro) | 0,577 |

- **Factor de temperatura (C\_t)** – para aceros al carbono y aleados:

| Temperatura T | C\_t |
|---|---|
| T ≤ 450 °C / 842 °F | 1,0 |
| 450 °C < T < 550 °C (842 °F < T < 1022 °F) | C\_t = 1 – 0,0058 (T – 450) con T en °C |
| T > 550 °C / 1022 °F | Consultar ensayos específicos |

- **Factor de confiabilidad (C\_r)** – refleja la dispersión estadística de los resultados de fatiga:

| Confiabilidad (%) | C\_r |
|---|---|
| 50 | 1,000 |
| 90 | 0,897 |
| 95 | 0,868 |
| 99 | 0,814 |
| 99,9 | 0,753 |

- **Factor de efectos varios (C\_m)** – agrupa la presencia de concentradores de esfuerzo (entallas, chaveteros, corrosión, etc.). Para entallas, se usa el factor de concentración de esfuerzos por fatiga K\_f = 1 + q (K\_t – 1), donde q es la sensibilidad a la entalla (0 ≤ q ≤ 1). El factor C\_m se toma como 1/K\_f. En ausencia de datos, un valor conservador es C\_m = 1/K\_t.

## Efecto de la tensión media
Cuando el ciclo de carga oscila alrededor de una tensión media σₘ distinta de cero, la resistencia a la fatiga se reduce. Las curvas S‑N obtenidas para R = −1 (σₘ = 0) se corrigen mediante los criterios de Goodman modificado, Gerber o Soderberg.

**Criterio de Goodman modificado (lineal, conservador):**  
σₐ / Sₑ + σₘ / Sᵤₜ = 1

**Criterio de Gerber (parabólico, mejor ajuste para materiales dúctiles):**  
σₐ / Sₑ + (σₘ / Sᵤₜ)² = 1

**Criterio de Soderberg (aún más conservador, usa S_y):**  
σₐ / Sₑ + σₘ / S\_y = 1

Donde σₐ es la amplitud del esfuerzo alternante admisible, σₘ la tensión media, Sₑ el límite de fatiga corregido (con todos los factores), Sᵤₜ la resistencia última a la tracción y S\_y el límite de fluencia.

En materiales con una relación S\_y/Sᵤₜ alta, como el aluminio 6061‑T6, Goodman resulta excesivamente conservador y se prefiere Gerber. Por ejemplo, para Sₑ = 129 MPa (18,7 ksi), Sᵤₜ = 290 MPa (42 ksi) y S\_y = 262 MPa (38 ksi):

| Criterio | σₘ aplicada | σₐ admisible (MPa) | σₐ admisible (ksi) |
|---|---|---|---|
| Goodman (σₘ = 150 MPa / 21,8 ksi) | 150 MPa / 21,8 ksi | 62 MPa | 9,0 ksi |
| Gerber (σₘ = 150 MPa / 21,8 ksi) | 150 MPa / 21,8 ksi | 83 MPa | 12,0 ksi |
| Sin corrección (σₘ = 0) | 0 | 129 MPa | 18,7 ksi |

La intersección de la recta de Goodman o de la parábola de Gerber con la línea de fluencia (σₐ + σₘ = S\_y) define el límite máximo de tensión media que puede sostenerse sin deformación plástica sostenida.

## Daño acumulado y regla de Miner
Cuando un componente está sometido a un espectro de cargas con diferentes amplitudes e historias de ciclos, el daño total se estima con la hipótesis lineal de Palmgren‑Miner:

D = Σ (n\_i / N\_i)

donde n\_i es el número real de ciclos aplicados con la amplitud de esfuerzo σ\_i, y N\_i es el número de ciclos que causaría la falla a ese mismo nivel de esfuerzo, obtenido de la curva S‑N. La falla ocurre cuando D ≥ 1 (o, en algunas normas, D ≥ un valor menor como 0,7). La regla no considera el orden de aplicación de las cargas, por lo que puede resultar no conservadora en algunos casos.

| Bloque | σ\_a (MPa / ksi) | n\_i (ciclos) | N\_i de la curva S‑N | n\_i / N\_i |
|---|---|---|---|---|
| 1 | 310 / 45,0 | 5 000 | 15 000 | 0,333 |
| 2 | 250 / 36,3 | 50 000 | 200 000 | 0,250 |
| 3 | 180 / 26,1 | 150 000 | >10⁷ (infinito) | 0,0 |
| **Daño total** | | | | **0,583** |

En este ejemplo el daño acumulado es 0,583 < 1, por lo que la pieza sobreviviría la secuencia de cargas sin falla por fatiga.

## Ejemplo de aplicación práctica
**Componente de aluminio 6061‑T6 trabajando a flexión rotativa**

Se desea diseñar un eje de aluminio 6061‑T6 que debe soportar 200 000 ciclos de carga completamente alternante (R = −1) sin falla, con una confiabilidad del 99 % y operando a temperatura ambiente. El eje está mecanizado y tiene un diámetro de 20 mm (0,79 in). No hay concentradores de esfuerzo.

1. **Curva S‑N del material (laboratorio):**  
   S = (14 479 / √N) + 96,5 MPa.  
   Para N = 2 × 10⁵ ciclos: S ≈ 96,5 + 14 479 / √(200 000) ≈ 96,5 + 32,4 = 128,9 MPa (18,7 ksi).

2. **Factores modificadores:**  
   - Acabado mecanizado, Sᵤₜ = 290 MPa: Cₛ = 4,51 · 290⁻⁰·²⁶⁵ ≈ 0,90.  
   - Tamaño (d = 20 mm): C\_L = 1,189 · 20⁻⁰·⁰⁹⁷ ≈ 0,93.  
   - Carga (flexión): C\_d = 1,0.  
   - Temperatura ambiente: C\_t = 1,0.  
   - Confiabilidad 99 %: C\_r = 0,814.  
   - Sin entallas: C\_m = 1,0.  
   Sₑ corregido = 128,9 · 0,90 · 0,93 · 0,814 ≈ 87,8 MPa (12,7 ksi).

3. **Verificación de tensión media nula:**  
   Si el esfuerzo alternante aplicado es 60 MPa (8,7 ksi), como 60 < 87,8 MPa, el diseño es seguro para vida infinita bajo R = −1.

4. **Efecto de una tensión media de tracción:**  
   Supóngase que además exista una tensión media σₘ = 50 MPa (7,25 ksi). Utilizando el criterio de Gerber con Sₑ = 87,8 MPa y Sᵤₜ = 290 MPa:  
   σₐ admisible = Sₑ [1 – (σₘ / Sᵤₜ)²] = 87,8 [1 – (50/290)²] ≈ 87,8 · 0,970 = 85,2 MPa (12,4 ksi).  
   Como el esfuerzo alternante de 60 MPa sigue siendo menor, el eje cumple también con la tensión media.

5. **Curva de diseño con tensión media máxima admisible:**  
   Para el mismo material y 200 000 ciclos, la máxima tensión media que puede soportarse sin deformación plástica está limitada por la intersección de Gerber con la recta de fluencia (S\_y = 262 MPa). Ello da σₘ máx ≈ 110 MPa (16,0 ksi) y un esfuerzo alternante asociado de unos 75 MPa (10,9 ksi), muy superior al diseño propuesto.

## Datos tabulados de referencia
En la Tabla se resumen valores típicos de límite de fatiga (materiales férreos) o resistencia a la fatiga a 5 × 10⁸ ciclos (materiales sin límite), junto con la resistencia última a la tracción Sᵤₜ. Los datos corresponden a probetas lisas (sin entalla) y ensayos de flexión rotativa.

| Material | Sᵤₜ (MPa / ksi) | Sₑ o S\_f a 5 × 10⁸ (MPa / ksi) |
|---|---|---|
| Acero al carbono 1045 | 630 / 91 | ≈315 / 46 (Sₑ) ¹ |
| Acero aleado 4340 (bonificado) | 980 / 142 | ≈490 / 71 (Sₑ) ¹ |
| Fundición gris ASTM 20 | 310 / 45 | 170 / 24,7 (Sₑ) ² |
| Aleación de aluminio 2014‑T6 | 480 / 70 | 130 / 19 (S\_f) ³ |
| Aleación de aluminio 6061‑T6 | 290 / 42 | 97 / 14 (S\_f a 2 × 10⁵ ciclos ≈129 MPa / 18,7 ksi) |
| Aleación de cobre (C11000) | 220 / 32 | 97 / 14 (S\_f) ³ |
| Aleación de titanio Ti‑6Al‑4V | 900 / 130 | 510 / 74 (Sₑ) ¹ |

¹ Sₑ ≅ 0,5 Sᵤₜ (máx. 290 MPa / 42 ksi para aceros, valor de laboratorio).  
² Sₑ ≅ 0,4 Sᵤₜ (máx. 170 MPa / 24 ksi).  
³ S\_f ≅ 0,4 Sᵤₜ (máx. 130 MPa / 19 ksi para aluminios, 97 MPa / 14 ksi para cobres). Para diseño se requiere aplicar los factores modificadores.

## FAQ – Preguntas frecuentes

**1. ¿Qué valor de límite de fatiga tiene un acero típico?**  
El límite de fatiga de laboratorio (Sₑ′) en un acero al carbono normalizado es aproximadamente la mitad de su resistencia última a la tracción, con un límite máximo de 290 MPa (42 ksi). Por ejemplo, un acero 1045 con Sᵤₜ = 630 MPa (91 ksi) tiene Sₑ′ ≈ 315 MPa (46 ksi), que una vez aplicados todos los factores modificadores puede bajar a valores del orden de 150‑200 MPa (22‑29 ksi) en una pieza real.

**2. ¿Cuál es la diferencia entre límite de fatiga y resistencia a la fatiga?**  
El límite de fatiga (Sₑ) es un valor de esfuerzo por debajo del cual el material puede soportar un número ilimitado de ciclos (acero, titanio). La resistencia a la fatiga (S\_f) se define para un número finito de ciclos, habitualmente 5 × 10⁸ en aluminios y cobres. En aluminio 6061‑T6, la resistencia a 200 000 ciclos es 128,9 MPa (18,7 ksi), mientras que a 10⁸ ciclos sería mucho menor (98 MPa / 14,2 ksi), sin llegar nunca a un valor asintótico.

**3. ¿Cómo influye el acabado superficial en la resistencia a la fatiga?**  
Un acabado superficial rugoso reduce drásticamente el límite de fatiga. Para un acero con Sᵤₜ = 600 MPa (87 ksi), el factor de superficie Cₛ es 0,84 en piezas mecanizadas, 0,62 en laminado en caliente y apenas 0,38 en piezas forjadas. Esto significa que la misma pieza forjada podría tener un límite de fatiga de solo un 38 % del valor que tendría con acabado rectificado.

**4. ¿Cuál es la ecuación que describe la curva S‑N del aluminio 6061‑T6?**  
La curva ajustada a los datos experimentales entre 10³ y 10⁷ ciclos, para tensión completamente alternante (R = −1), es S (MPa) = 14 479 / √N + 96,5 MPa, o bien S (psi) = 2 100 000 / √N + 14 000 psi. Para 200 000 ciclos, la tensión predicha es 129 MPa (18,7 ksi).

**5. ¿Cómo se aplica la regla de Miner para una carga con múltiples bloques?**  
Se suma el daño parcial de cada bloque. Por ejemplo: bloque 1 aplica 3 000 ciclos a 280 MPa (40,6 ksi), cuya vida N₁ = 8 000 ciclos (daño parcial 0,375); bloque 2 aplica 50 000 ciclos a 210 MPa (30,5 ksi) con N₂ = 150 000 ciclos (daño 0,333). El daño total es 0,375 + 0,333 = 0,708 < 1, por lo que no se prevé falla.

**6. ¿Cuál es el efecto de una entalla en la resistencia a la fatiga?**  
Una entalla introduce un factor de concentración de esfuerzos estático Kₜ y reduce la resistencia a la fatiga según K\_f = 1 + q (Kₜ − 1). La sensibilidad a la entalla q varía entre 0 (material insensible) y 1 (totalmente sensible). En un acero de alta resistencia con Kₜ = 2,5 y q = 0,8, el factor efectivo es K\_f = 1 + 0,8 (2,5 − 1) = 2,2, lo que significa que el límite de fatiga corregido será Sₑ/K\_f, es decir, menos de la mitad del valor nominal.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/materials/fatigue_design_curves__16022.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/fatigue/fatigue_highcycle.cfm
