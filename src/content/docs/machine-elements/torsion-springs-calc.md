---
title: "Resortes de torsión cálculo"
sidebar:
  label: "Resortes de torsión cálculo"
description: "Ficha tecnica: Resortes de torsión cálculo"
keywords: ["torsion spring calculation angle torque", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "torsion-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Definición general
Un resorte de torsión es un elemento mecánico elástico que almacena energía al ser retorcido alrededor de su eje, ejerciendo un par de torsión proporcional al ángulo de giro. El momento torsor máximo que puede soportar un eje circular macizo de 50 mm de diámetro en acero con una tensión cortante admisible de 40,8 MPa es de aproximadamente 1000 N·m / 737,6 lb·ft. La deflexión angular de ese mismo eje sometido a dicho momento y con una longitud de 1 m resulta de 1,2° (0,021 rad), considerando un módulo de rigidez de 79 GPa.

| Característica | Descripción |
| --- | --- |
| Principio físico | Almacenamiento de energía por deformación elástica bajo torsión (ejes) o flexión (muelles helicoidales). |
| Ley constitutiva | τ = -κ θ (par proporcional al ángulo, signo negativo indica oposición). |
| Energía almacenada | U = ½ κ θ² (para comportamiento lineal). |
| Aplicaciones típicas | Barras de torsión en suspensión vehicular, muelles de pinzas de ropa, trampas para ratones, puertas de garaje. |

## Tipos de resortes de torsión
Los resortes de torsión se clasifican según su geometría y el tipo de esfuerzo predominante:

- **Barra de torsión (eje macizo o hueco)**: barra recta de metal o elastómero sometida a torsión pura. El esfuerzo es cortante, máximo en la periferia.
- **Muelle helicoidal de torsión**: alambre o fleje enrollado en hélice que trabaja principalmente a flexión cuando se enrolla o desenrolla. Utilizado en pinzas, bisagras y mecanismos de retorno.
- **Muelle espiral (relojería)**: variante del helicoidal con espiras planas concéntricas, capaz de almacenar energía para múltiples revoluciones.
- **Fibra de torsión**: hilo fino (seda, cuarzo, vidrio) usado en instrumentos de precisión (péndulos de torsión, galvanómetros).

## Fórmulas de cálculo
El comportamiento de una barra de torsión de sección circular maciza o hueca, dentro del límite elástico, se rige por las siguientes expresiones (según datos de engineeringtoolbox):

| Variable | Fórmula | Unidades |
| --- | --- | --- |
| Tensión cortante máxima en superficie | τ_max = T·R / J | Pa; T en N·m, R en m, J en m⁴ |
| Momento polar de inercia (macizo) | J = π D⁴ / 32 | m⁴; D diámetro exterior |
| Momento polar de inercia (hueco) | J = π (D⁴ - d⁴) / 32 | m⁴; d diámetro interior |
| Momento torsor máximo (macizo) | T_max = (π/16)·τ_max · D³ | N·m |
| Momento torsor máximo (hueco) | T_max = (π/16)·τ_max · (D⁴ - d⁴) / D | N·m |
| Deflexión angular (radianes) | α = L·T / (J·G) | rad; L longitud, G módulo de rigidez |
| Deflexión angular macizo (°) | α_deg ≈ 584·L·T / (G·D⁴) | °; L en m, T en N·m, G en Pa, D en m |
| Diámetro mínimo macizo | D_min = 1,72·(T_max / τ_max)^(1/3) | m |

Para muelles helicoidales de torsión (según principios generales de diseño de resortes):

| Parámetro | Expresión | Unidades |
| --- | --- | --- |
| Constante del muelle (par/ángulo) | κ = E·d⁴ / (64·D·N) | N·mm/rad; E módulo elástico, d ∅ alambre, D ∅ medio, N espiras activas |
| Tensión de flexión en la fibra más alejada | σ_f = 32·M / (π·d³) | Pa; M momento aplicado |
| Coeficiente de Wahl (para corrección de curvatura) | K_w = (4C-1)/(4C-4); C = D/d | adimensional |

La energía almacenada en cualquier resorte de torsión lineal se obtiene de U = ½ κ θ², siendo κ la rigidez torsional y θ el ángulo de torsión en radianes.

## Dimensiones normalizadas
Las dimensiones de resortes de torsión comerciales suelen estandarizarse según normas DIN o catálogos de fabricantes. A continuación se presentan rangos típicos para muelles helicoidales de torsión de alambre redondo en acero inoxidable AISI 302, basados en ofertas comunes:

| Parámetro | Rango métrico | Rango imperial |
| --- | --- | --- |
| Diámetro de alambre (d) | 0,3 – 6 mm | 0.012 – 0.236 in |
| Diámetro exterior del cuerpo (De) | 3 – 60 mm | 0.118 – 2.362 in |
| Longitud libre del cuerpo (L0) | 5 – 300 mm | 0.197 – 11.811 in |
| Número de espiras (N) | 2 – 30 | — |
| Ángulo libre entre patas | 90° / 120° / 180° | — |
| Sentido de enrollamiento | Derecha o izquierda | — |

Las barras de torsión macizas empleadas en suspensión vehicular presentan diámetros entre 15 mm / 0.59 in y 35 mm / 1.38 in, con longitudes efectivas que oscilan entre 600 mm / 23.6 in y 1500 mm / 59.1 in.

## Materiales y propiedades
Los materiales más comunes para resortes de torsión y sus propiedades mecánicas relevantes se listan a continuación.

| Material | Módulo elástico (E) | Módulo de rigidez (G) | Resistencia a la tracción (Rm) | Temperatura máxima de servicio |
| --- | --- | --- | --- | --- |
| Acero al carbono para muelles (EN 10270-1) | 206 GPa / 29 900 ksi | 81,5 GPa / 11 820 ksi | 1200 – 2200 MPa / 174 – 319 ksi (según ∅) | 120 °C / 248 °F |
| Acero inoxidable AISI 302/304 | 193 GPa / 28 000 ksi | 70 GPa / 10 150 ksi | 1400 – 1800 MPa / 203 – 261 ksi | 250 °C / 482 °F |
| Acero al cromo-silicio (ASTM A401) | 206 GPa / 29 900 ksi | 80 GPa / 11 600 ksi | 1400 – 2000 MPa / 203 – 290 ksi | 250 °C / 482 °F |
| Alambre de piano (ASTM A228) | 207 GPa / 30 000 ksi | 83 GPa / 12 040 ksi | 1600 – 2800 MPa / 232 – 406 ksi | 120 °C / 248 °F |
| Elastómero (caucho natural, dureza 60 ShA) | 2 – 10 MPa / 0.29 – 1.45 ksi | 0,7 – 3 MPa / 0.10 – 0.43 ksi | 15 – 25 MPa / 2.2 – 3.6 ksi | 70 °C / 158 °F |

## Capacidad de carga
La capacidad de carga expresa el máximo par torsor admisible sin superar la tensión de diseño ni provocar deformaciones permanentes. Para una barra de torsión maciza de acero con τ_adm = 300 MPa / 43,5 ksi, los valores orientativos son:

| Diámetro (D) | Par máximo (T_max) |
| --- | --- |
| 10 mm / 0.394 in | 58,9 N·m / 521 lbf·in |
| 15 mm / 0.591 in | 198,2 N·m / 1754 lbf·in |
| 20 mm / 0.787 in | 471,2 N·m / 4170 lbf·in |
| 25 mm / 0.984 in | 920,4 N·m / 8145 lbf·in |
| 30 mm / 1.181 in | 1588 N·m / 14 060 lbf·in |
| 35 mm / 1.378 in | 2520 N·m / 22 300 lbf·in |

Para muelles helicoidales, la capacidad se define por el par a deflexión máxima (según ángulo de trabajo). Un muelle con d = 2 mm / 0.079 in, D = 12 mm / 0.472 in, N = 6 espiras y E = 206 GPa, deflectado 90° (1,57 rad), desarrolla un par de aproximadamente 17,2 N·m / 152 lbf·in, con una tensión de flexión corregida de 1100 MPa.

## Criterios de selección
Para elegir un resorte de torsión adecuado se deben evaluar los siguientes criterios:

- **Par de trabajo (M)** y **ángulo de deflexión (θ)**: determinar la rigidez torsional requerida (κ = M / θ).
- **Tipo de resorte**: barra de torsión para grandes pares con poco espacio radial; muelle helicoidal para pares moderados con movimiento angular limitado; espiral para múltiples revoluciones.
- **Material**: acero al carbono para uso general, inoxidable si hay riesgo de corrosión, alambre de piano para altas resistencias.
- **Tensión admisible**: aplicar factor de seguridad ≥ 1,5 sobre el límite elástico, y corregir por curvatura (Wahl) en muelles helicoidales.
- **Montaje y restricciones espaciales**: considerar diámetro de alojamiento, ejes o casquillos guía, y patas de sujeción.
- **Ciclos de vida**: para fatiga (> 10⁵ ciclos) limitar la tensión al 60 % de la resistencia a la tracción.

## Consideraciones de montaje
El montaje de resortes de torsión exige precauciones específicas:

| Aspecto | Recomendación |
| --- | --- |
| Sentido de enrollamiento | Seleccionar derecha o izquierda según el sentido de giro de la aplicación; invertir si se invierte la carga. |
| Holgura con el mandril o eje | Para muelles helicoidales, el diámetro del mandril debe ser ≤ 0,9 × diámetro interior del muelle en reposo, pues al deflectar el diámetro interior se reduce. |
| Lubricación | Aplicar grasa de litio o MoS₂ en las espiras para muelles que trabajen a alta frecuencia o para reducir la fricción entre espiras y guías. |
| Fijación de extremos | Las patas deben apoyarse sobre superficies planas o casquillos con tolerancia de deslizamiento; evitar puntos de concentración de tensiones mediante radios de acuerdo. |
| Montaje en barras de torsión | Estriado o chavetero en ambos extremos para transmitir par sin deslizamiento; prever ajuste deslizante con estriado lubricado. |
| Protección contra la corrosión | Zincado, fosfatado o protección con pintura epoxi en ambientes húmedos; en muelles helicoidales evitar el contacto galvánico con el eje. |

## Tablas de selección por aplicación
Las siguientes tablas orientan en la elección de un resorte de torsión para aplicaciones comunes, considerando acero de muelles EN 10270-1 y montaje sobre eje. Los pares están calculados para una deflexión de 90°.

| Aplicación | d (mm / in) | Diámetro exterior (mm / in) | N.º de espiras | Par a 90° (N·m / lbf·in) | Ángulo libre (°) |
| --- | --- | --- | --- | --- | --- |
| Pinza de ropa | 1,0 / 0.039 | 8 / 0.315 | 4 | 0,8 / 7,1 | 180 |
| Bisagra de puerta pequeña | 1,5 / 0.059 | 12 / 0.472 | 6 | 2,5 / 22,1 | 120 |
| Trampa para ratones | 1,8 / 0.071 | 15 / 0.591 | 5 | 4,2 / 37,2 | 180 |
| Puerta de acceso eléctrico | 2,5 / 0.098 | 20 / 0.787 | 8 | 12,5 / 110,6 | 90 |
| Tensor de cadena de distribución | 3,0 / 0.118 | 25 / 0.984 | 10 | 22,4 / 198,3 | 120 |
| Contrapeso de puerta seccional | 5,0 / 0.197 | 40 / 1.575 | 15 | 110,0 / 973,6 | 270 |

Para barras de torsión de acero con τ_adm = 400 MPa / 58 000 psi:

| Aplicación | D (mm / in) | Longitud activa (mm / in) | Par máximo (N·m / lbf·in) | Deflexión angular máxima (°) |
| --- | --- | --- | --- | --- |
| Barra estabilizadora (automóvil ligero) | 18 / 0.709 | 900 / 35.43 | 350 / 3098 | 5,2 |
| Suspensión de camión ligero | 25 / 0.984 | 1000 / 39.37 | 920 / 8145 | 6,4 |
| Tren de aterrizaje (aeronave ligera) | 30 / 1.181 | 800 / 31.50 | 1600 / 14 160 | 7,3 |

## Preguntas frecuentes (FAQ)
**¿Qué diferencia hay entre una barra de torsión y un muelle helicoidal de torsión?**  
La barra de torsión es un elemento macizo o hueco que trabaja a cortante puro; un muelle helicoidal, aunque retorcido, trabaja esencialmente a flexión en el alambre. La barra soporta pares elevados con ángulos pequeños (típicamente 5–10°), mientras el helicoidal admite deflexiones de hasta 360° con pares moderados.

**¿Cómo se calcula el diámetro mínimo de una barra de torsión para transmitir 200 N·m con τ_adm = 250 MPa?**  
Aplicando D_min = 1,72·(T_max / τ_max)^(1/3). Para T = 200 N·m y τ = 250 MPa (250×10⁶ Pa) se obtiene D_min ≈ 1,72·(200 / 250×10⁶)^(1/3) = 1,72·(8×10⁻⁷)^(1/3) = 1,72·0,00928 m = 0,0160 m, es decir, 16 mm / 0.630 in.

**¿Qué ángulo de torsión alcanza un eje macizo de acero (G = 80 GPa) con D = 20 mm, L = 500 mm y un par de 50 N·m?**  
Utilizando α_deg ≈ 584·L·T / (G·D⁴) = 584·0,5·50 / (80×10⁹·(0,02)⁴) = 14600 / (80×10⁹·1,6×10⁻⁷) = 14600 / 12800 = 1,14°. En radianes, 0,0199 rad.

**¿Cuánta energía almacena una barra de torsión con rigidez κ = 5000 N·m/rad al deflectarse 15°?**  
Primero convertir 15° a rad: 15 · π/180 = 0,262 rad. Energía U = ½ κ θ² = ½ · 5000 · (0,262)² ≈ 171,6 J / 126,6 ft·lbf.

**¿Qué constante de muelle tiene un helicoidal con d = 2,5 mm, D = 15 mm, N = 8 y E = 206 GPa?**  
κ = E·d⁴ / (64·D·N) = 206×10³ · (2,5⁴) / (64·15·8) ≈ 206×10³·39,06 / (7680) = 8,04×10⁶ / 7680 ≈ 1047 N·mm/rad = 1,047 N·m/rad. Equivale a 0,0183 N·m/°.

**¿Cuál es el par de trabajo de un muelle de pinza de ropa con d = 1 mm, D = 8 mm, N = 4, deflectado 180°?**  
Rigidez κ = 206×10³·1⁴ / (64·8·4) = 206×10³ / 2048 ≈ 100,6 N·mm/rad = 0,1006 N·m/rad. Ángulo 180° = π rad ≈ 3,14 rad. Par M = κ·θ = 0,1006·3,14 ≈ 0,316 N·m / 2,80 lbf·in, coherente con la tabla.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/torsion-shafts-d_947.html
- **mcmaster.com**: https://www.mcmaster.com/products/torsion-springs/
