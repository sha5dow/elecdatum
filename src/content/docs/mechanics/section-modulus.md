---
title: "Módulo resistente por sección"
sidebar:
  label: "Módulo resistente por sección"
description: "Ficha tecnica: Módulo resistente por sección"
keywords: ["section modulus Z bending stress calculation", "mechanics"]
category: "mechanics"
topic: "strength"
subcategory: "section-modulus"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

## Definición y tipos de módulo resistente
El módulo resistente de una sección transversal cualquiera puede superar los 300 000 mm³ (18.3 in³) en perfiles estructurales de tamaño medio y constituye la propiedad geométrica determinante para evaluar su capacidad a flexión. Se distinguen dos variantes: el módulo **elástico** (S), empleado para verificar la resistencia en el rango elástico donde tensión y deformación son proporcionales, y el módulo **plástico** (Z), que cuantifica la capacidad de la sección una vez que el material ha plastificado completamente. Ambos dependen exclusivamente de la forma de la sección, no del material, y sus valores están tabulados para los perfiles normalizados.

## Notación según normativa internacional
Al menos 8 combinaciones de símbolos diferentes coexisten en las normas estructurales del mundo; la tabla siguiente recoge las más utilizadas.

| Región | Norma | Módulo elástico | Módulo plástico |
| --- | --- | --- | --- |
| Norteamérica | ANSI/AISC 360‑10 (EE. UU.) | S | Z |
| Norteamérica | CSA S16‑14 (Canadá) | S | Z |
| Europa | Eurocódigo 3 (EN 1993‑1‑1) | *W*<sub>el</sub> | *W*<sub>pl</sub> |
| Gran Bretaña (obsoleta) | BS 5950 (retirada 2010) | Z | S |
| Japón | Especificaciones estándar para estructuras de acero | W | Z |
| China | GB 50017 | W | W<sub>p</sub> |
| India | IS 800 | Z<sub>e</sub> | Z<sub>p</sub> |
| Australia | AS 4100 | Z | S |

En este documento se emplea la notación norteamericana S (elástico) y Z (plástico), por ser la más extendida en la literatura técnica.

## Fórmulas fundamentales para el módulo elástico (S)
La distancia *c* desde el eje neutro hasta la fibra más alejada suele ser la mitad del canto (c = h/2 = 50 mm / 1.97 in para un canto de 100 mm). El módulo elástico se define como:

```
S = I / c
```

donde *I* es el segundo momento de área (momento de inercia de la sección respecto al eje neutro) en mm⁴ o in⁴ y *c* es la distancia a la fibra extrema en mm o in. Conocido S, el momento flector que produce la primera plastificación (momento de fluencia) se calcula mediante:

```
M_y = S · σ_y
```

siendo σ<sub>y</sub> el límite elástico del material.

## Tabla de módulos elásticos por sección transversal
Se recogen las expresiones de S para 8 formas comunes; las fórmulas ofrecen el valor en mm³ si las dimensiones se introducen en milímetros y en in³ si se usan pulgadas.

| Forma de la sección | Ecuación para S | Comentario |
| --- | --- | --- |
| Rectángulo macizo | S = b·h² / 6 | b = ancho, h = altura; NA en el centroide |
| Perfil I doblemente simétrico (eje fuerte) | S<sub>x</sub> = (B·H²)/6 – (b·h³)/(6·H) | B = ancho del ala, H = canto total; b = ancho del alma, h = canto del alma |
| Perfil I doblemente simétrico (eje débil) | S<sub>y</sub> = [B²(H‑h)]/6 + [(B‑b)³·h]/(6·B) | NA indica eje neutro |
| Círculo macizo | S = π·d³ / 32 | d = diámetro |
| Círculo hueco (tubo) | S = π·(D⁴ – d⁴) / (32·D) | D = diámetro exterior, d = diámetro interior |
| Rectángulo hueco (tubo rectangular) | S = (B·H³ – b·h³) / (6·H) | B, H externas; b, h internas |
| Rombo (diamante) | S = b·h² / 24 | b = ancho máximo, h = altura |
| Canal en C | S = (B·H² – b·h²) / (6·H) | Aproximación para perfil C simétrico; NA según calculadora |

## Módulo resistente plástico (Z)
Para una sección rectangular de ancho *b* = 50 mm y alto *h* = 100 mm, Z = b·h²/4 = 125 000 mm³ / 7.63 in³, valor un 50 % superior al módulo elástico correspondiente (S = 83 333 mm³). El módulo plástico depende de la posición del eje neutro plástico (ENA), que divide la sección en dos áreas de igual fuerza (compresión y tracción) cuando el material plastifica por completo. Para secciones con un solo material y límite elástico constante, el ENA coincide con el eje que iguala las áreas; en secciones compuestas puede desplazarse. Su expresión general es:

```
Z = A_C · y_C + A_T · y_T
```

donde A<sub>C</sub> y A<sub>T</sub> son las áreas a cada lado del ENA e y<sub>C</sub>, y<sub>T</sub> las distancias desde los centroides de cada área hasta el propio ENA. El momento plástico resistente vale:

```
M_p = Z · σ_y
```

y siempre es mayor que M<sub>y</sub> para la misma sección y material.

## Relación elástico‑plástico y factor de forma
El factor de forma para una sección rectangular maciza es 1.50, mientras que para un perfil I laminado en caliente se sitúa habitualmente entre 1.12 y 1.15, reflejando una reserva plástica más modesta. Este factor α se define como:

```
α = Z / S
```

y representa el cociente entre la capacidad plástica total y la capacidad elástica de la sección. Algunos valores típicos:
- Rectángulo macizo: α ≈ 1.5
- Círculo macizo: α ≈ 1.7
- Rombo macizo: α ≈ 2.0
- Perfil I estándar (eje fuerte): α ≈ 1.12 – 1.15
- Tubo circular de pared delgada: α ≈ 1.27

## Cálculo del momento resistente de una viga
Un perfil IPE 240 con S<sub>x</sub> = 324 000 mm³ (19.8 in³) y acero S275 (σ<sub>y</sub> = 275 MPa / 40 ksi) proporciona un momento elástico resistente M<sub>y</sub> = 324 000 mm³ × 275 N/mm² = 89.1 kN·m / 65.7 kip·ft. Si se aprovecha la capacidad plástica (Z<sub>x</sub> ≈ 366 000 mm³ para el mismo perfil), el momento plástico sería M<sub>p</sub> ≈ 100.6 kN·m / 74.2 kip·ft. En diseño práctico:
- **Método elástico (ASD):** se verifica que M<sub>max</sub> ≤ M<sub>y</sub> / Ω, con Ω factor de seguridad (típicamente 1.67 para acero).
- **Método plástico (LRFD):** se emplea M<sub>p</sub> multiplicado por un factor de resistencia ϕ (≈ 0.9) y se compara con el momento factorizado.

## Diagramas de carga y momentos flectores
Para una viga simplemente apoyada de luz 3 m / 9.84 ft con una carga puntual centrada de 10 kN / 2.25 kip, el momento flector máximo vale 7.5 kN·m / 5.53 kip·ft. La tabla siguiente resume los casos más frecuentes y sus momentos máximos, necesarios para seleccionar el módulo resistente requerido.

| Condición de carga | Diagrama de momento flector (descripción) | Momento máximo M<sub>max</sub> |
| --- | --- | --- |
| Carga puntual centrada (P) | Triangular simétrico, máximo en el centro | M<sub>max</sub> = P·L / 4 |
| Carga uniformemente distribuida (w) | Parábola simétrica, máximo en el centro | M<sub>max</sub> = w·L² / 8 |
| Dos cargas puntuales simétricas (P) separadas distancia a de los apoyos | Trapecio constante entre cargas, rampas lineales en los extremos | M<sub>max</sub> = P·a |
| Carga puntual descentrada (P) a distancia a del apoyo izquierdo, b del derecho | Triángulo con pico bajo la carga | M<sub>max</sub> = P·a·b / L |
| Momento puntual aplicado en extremo (M<sub>0</sub>) | Lineal desde el extremo hasta el apoyo opuesto | M<sub>max</sub> = M<sub>0</sub> (en el apoyo donde se aplica) |

## Criterios de diseño de secciones a flexión
Con un momento flector máximo de 50 kN·m / 36.88 kip·ft y una tensión admisible de 160 MPa / 23.2 ksi (acero A36 con factor de seguridad ≈ 1.67), el módulo resistente mínimo necesario es 50 × 10⁶ N·mm / 160 N/mm² = 312 500 mm³ / 19.06 in³. Los criterios fundamentales son:

1. **Resistencia:** se debe cumplir S<sub>requerido</sub> ≥ M<sub>max</sub> / σ<sub>adm</sub> en diseño elástico, o Z<sub>requerido</sub> ≥ M<sub>u</sub> / (ϕ·σ<sub>y</sub>) en diseño plástico.
2. **Clasificación de la sección:** según la esbeltez de las chapas (relación ancho‑espesor) se definen secciones compactas, no compactas o esbeltas, que condicionan si se puede alcanzar el momento plástico total o si debe limitarse al elástico o a un valor intermedio.
3. **Pandeo lateral‑torsional:** la longitud no arriostrada del ala comprimida puede reducir el momento resistente de la viga; se aplica un factor de modificación que depende de la esbeltez lateral.
4. **Interacción con otros esfuerzos:** si existe axil o cortante elevado, el módulo resistente efectivo se reduce según las prescripciones de la norma aplicable.

## Ejemplo de aplicación práctica
Selección de una viga de acero A36 (σ<sub>y</sub> = 250 MPa / 36 ksi) para cubrir una luz de 4 m / 13.12 ft con carga uniformemente distribuida total (incluye peso propio y sobrecarga) de 22 kN/m / 1.51 kip/ft, según diseño elástico con tensión admisible σ<sub>adm</sub> = 0.6·σ<sub>y</sub> = 150 MPa / 21.75 ksi.

**Paso 1 – Momento máximo:**  
M<sub>max</sub> = w·L²/8 = 22 kN/m × (4 m)² / 8 = 44 kN·m ≈ 32.5 kip·ft

**Paso 2 – Módulo resistente requerido:**  
S<sub>req</sub> = M<sub>max</sub> / σ<sub>adm</sub> = 44 × 10⁶ N·mm / 150 N/mm² = 293 333 mm³ ≈ 17.9 in³

**Paso 3 – Selección del perfil:**  
El perfil europeo IPE 240 ofrece S<sub>x</sub> = 324 000 mm³ / 19.8 in³ (> 293 333 mm³), por lo que resulta adecuado. Su peso propio de 30.7 kg/m (0.206 kip/ft) queda incluido en la carga total; si fuese necesario afinar, se recalcularía añadiendo el peso exacto.

**Paso 4 – Verificación:**  
Tensión de trabajo = 44 × 10⁶ N·mm / 324 000 mm³ = 135.8 MPa / 19.7 ksi < 150 MPa → cumple holgadamente.

## Preguntas frecuentes (FAQ)

### 1. ¿Qué es el módulo resistente de una sección y cómo se calcula?
El módulo resistente elástico *S* de una sección rectangular de ancho 100 mm y alto 200 mm (3.94 in × 7.87 in) vale S = b·h²/6 = 100·200²/6 = 666 667 mm³ / 40.68 in³. Representa la capacidad geométrica para resistir flexión elástica.

### 2. ¿Cómo se relaciona el módulo resistente con el momento flector?
La relación fundamental es M<sub>y</sub> = S·σ<sub>y</sub>. Para una viga con S = 150 000 mm³ (9.15 in³) y σ<sub>y</sub> = 355 MPa (51.5 ksi), el momento elástico resistente es 53.25 kN·m / 39.28 kip·ft.

### 3. ¿Cuál es la diferencia entre módulo elástico S y módulo plástico Z?
S define la resistencia hasta la primera fibra plastificada (I/c), mientras que Z considera plastificación total de la sección. En un rectángulo de 50 mm × 100 mm (1.97 in × 3.94 in): S = 83 333 mm³ / 5.08 in³, Z = 125 000 mm³ / 7.63 in³ (factor de forma 1.5).

### 4. ¿Qué módulo debe usarse en zonas sísmicas?
En diseño por capacidad se emplea el módulo plástico Z para asegurar que la rótula plástica alcance el momento M<sub>p</sub>. Por ejemplo, un perfil IPE 300 tiene S<sub>x</sub> ≈ 557 000 mm³ (34.0 in³) y Z<sub>x</sub> ≈ 628 000 mm³ (38.3 in³), un 12.7 % mayor.

### 5. ¿Cómo influye la orientación en el módulo resistente de un perfil I?
Un perfil I sometido a flexión según su eje fuerte (S<sub>x</sub>) puede presentar un valor 10 veces mayor que según el eje débil (S<sub>y</sub>); por ejemplo, S<sub>x</sub> ≈ 1 000 cm³ (61.0 in³) frente a S<sub>y</sub> ≈ 100 cm³ (6.10 in³) en un IPE 300, lo que obliga a orientar el alma en la dirección de la carga principal.

### 6. ¿Cuál es el módulo resistente típico de un tubo circular hueco?
Para un tubo de acero con diámetro exterior D = 100 mm (3.94 in) y espesor t = 5 mm (0.197 in), el módulo elástico S = π·(D⁴‑d⁴)/(32·D) ≈ 36 000 mm³ / 2.20 in³, muy inferior al de un perfil I de peso similar pero eficaz cuando hay torsión o compresión combinada.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/material_science/section_modulus_12893.htm
- **efunda.com**: https://www.efunda.com/formulae/solid_mechanics/beams/casestudy_bc_simple.cfm
