---
title: "Cálculo preload y torque tornillos"
sidebar:
  label: "Cálculo preload y torque tornillos"
description: "Ficha tecnica: Cálculo preload y torque tornillos"
keywords: ["bolt preload torque calculation formula", "fasteners"]
category: "fasteners"
topic: "torque-preload"
subcategory: "preload-calculation"
skill: "fastener-reference-table"
launch_phase: 4
last_updated: "2026-07-23"
verified: true
---

El torque de apriete aplicado a un tornillo genera una fuerza axial de sujeción, denominada precarga, que asegura la integridad de la unión. La relación entre torque y precarga no es lineal y depende fuertemente de la fricción, el diámetro nominal y el estado de lubricación. Un dimensionamiento correcto evita tanto el aflojamiento por insuficiencia de carga como la falla por sobrecarga.

## Principio de cálculo y fórmula general

La fórmula aceptada para estimar el torque de apriete a partir de la precarga deseada es:

\[
T = K \cdot F \cdot d \cdot \left(1 - \frac{l}{100}\right)
\]

Donde:
- \(T\) = torque de apriete (Nm, lb·ft)
- \(K\) = constante de torque (adimensional)
- \(F\) = fuerza axial o precarga en el tornillo (N, lb)
- \(d\) = diámetro nominal del tornillo (m, ft)
- \(l\) = factor de reducción por lubricación (%)

La misma expresión despejada permite obtener la fuerza generada para un torque dado: \(F = T / (K d (1 - l/100))\). La ecuación es una aproximación que no considera el paso de rosca; se recomienda validar con datos del fabricante. Las llaves dinamométricas convencionales presentan una precisión típica no mejor que ±25 %.

## Factores de lubricación y constantes de torque

La constante \(K\) absorbe los efectos de fricción bajo la cabeza y en los flancos de rosca. Varía según el acabado superficial y la lubricación. Los valores orientativos para tornillos de acero de baja aleación de 1/4" a 1" (M6–M24) se muestran en la tabla siguiente.

| Condición superficial / lubricación | Constante K típica |
| --- | --- |
| Seco normal (sin recubrimiento) | 0,20 |
| Acabado negro sin recubrimiento | 0,30 |
| Cincado electrolíticamente | 0,20 |
| Ligeramente lubricado (aceite ligero) | 0,18 |
| Cadmiado | 0,16 |

La lubricación reduce la fricción y, por tanto, el torque necesario para alcanzar una misma precarga. Por ejemplo, lubricar un tornillo con aceite SAE 30 disminuye el torque requerido aproximadamente un 40 %. Si se mantiene el torque seco en una unión lubricada, la precarga real puede superar la resistencia del tornillo y provocar una falla catastrófica.

Las prácticas de diseño establecen que el torque estándar en seco produce una tensión de tracción en el tornillo equivalente al 70 % de la resistencia a la tracción mínima o al 75 % de la carga de prueba (proof load).

## Dimensiones, pasos y cargas admisibles según normas

La tabla siguiente resume las características geométricas, mecánicas y las principales equivalencias normativas para tornillos métricos de rosca gruesa (paso normal ISO). Las cargas de prueba corresponden a las clases de resistencia 8.8 y 10.9 según ISO 898-1. Cuando el diseño lo exija, deben consultarse las cargas de prueba de clases superiores (como 12.9) directamente de las normas.

| Tamaño nominal | Paso de rosca | Diámetro mayor | Área de esfuerzo | Clase 8.8 Carga de prueba | Clase 10.9 Carga de prueba | Normas equivalentes (ISO/DIN/ANSI) | Broca para roscar (mm / in) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M5 | 0,8 mm / 0.0315 in | 5 mm / 0.197 in | 14,2 mm² / 0.0220 in² | 8,2 kN / 1 840 lbf | 11,8 kN / 2 650 lbf | ISO 4762, DIN 912, ANSI B18.3.1M | 4,2 mm / 0.165 in |
| M6 | 1 mm / 0.0394 in | 6 mm / 0.236 in | 20,1 mm² / 0.0312 in² | 11,6 kN / 2 610 lbf | 16,7 kN / 3 750 lbf | ISO 4014/4017, DIN 931/933, ASME B18.2.6M | 5 mm / 0.197 in |
| M8 | 1,25 mm / 0.0492 in | 8 mm / 0.315 in | 36,6 mm² / 0.0567 in² | 21,2 kN / 4 765 lbf | 30,4 kN / 6 835 lbf | ISO 4014/4017, DIN 931/933 | 6,8 mm / 0.268 in |
| M10 | 1,5 mm / 0.0591 in | 10 mm / 0.394 in | 58 mm² / 0.0899 in² | 33,6 kN / 7 555 lbf | 48,1 kN / 10 820 lbf | ISO 4014/4017, DIN 931/933 | 8,5 mm / 0.335 in |
| M12 × 1.75 | 1,75 mm / 0.0689 in | 12 mm / 0.472 in | 84,3 mm² / 0.1307 in² | 48,9 kN / 10 990 lbf | 69,9 kN / 15 710 lbf | ISO 4014/4017, DIN 931/933 | 10,2 mm / 0.402 in |
| M14 × 2 | 2 mm / 0.0787 in | 14 mm / 0.551 in | 115 mm² / 0.178 in² | 66,7 kN / 15 000 lbf | 95,5 kN / 21 470 lbf | ISO 4014/4017, DIN 931/933 | 12 mm / 0.472 in |
| M16 × 2 | 2 mm / 0.0787 in | 16 mm / 0.630 in | 157 mm² / 0.243 in² | 91,1 kN / 20 470 lbf | 130 kN / 29 220 lbf | ISO 4014/4017, DIN 931/933 | 14 mm / 0.551 in |
| M18 × 2.5 | 2,5 mm / 0.0984 in | 18 mm / 0.709 in | 192 mm² / 0.298 in² | 111 kN / 24 950 lbf | 159 kN / 35 740 lbf | ISO 4014/4017, DIN 931/933 | 15,5 mm / 0.610 in |
| M20 × 2.5 | 2,5 mm / 0.0984 in | 20 mm / 0.787 in | 245 mm² / 0.380 in² | 142 kN / 31 920 lbf | 203 kN / 45 640 lbf | ISO 4014/4017, DIN 931/933 | 17,5 mm / 0.689 in |
| M22 × 2.5 | 2,5 mm / 0.0984 in | 22 mm / 0.866 in | 303 mm² / 0.470 in² | 176 kN / 39 550 lbf | 251 kN / 56 410 lbf | ISO 4014/4017, DIN 931/933 | 19,5 mm / 0.768 in |
| M24 × 3 | 3 mm / 0.118 in | 24 mm / 0.945 in | 353 mm² / 0.547 in² | 205 kN / 46 050 lbf | 293 kN / 65 800 lbf | ISO 4014/4017, DIN 931/933 | 21 mm / 0.827 in |
| M30 × 3.5 | 3,5 mm / 0.138 in | 30 mm / 1.181 in | 561 mm² / 0.870 in² | 325 kN / 73 050 lbf | 466 kN / 104 700 lbf | ISO 4014/4017, DIN 931/933 | 26,5 mm / 1.043 in |

## Torques de apriete recomendados y brocas

Los torques de la tabla siguiente se calculan para alcanzar una precarga equivalente al 75 % de la carga de prueba (proof load) con una constante \(K = 0,20\) para condiciones secas y \(K = 0,16\) para ligeramente lubricado. Los valores son orientativos; en aplicaciones críticas debe verificarse con el fabricante del tornillo y controlarse el método de apriete.

| Tamaño nominal | Clase 8.8 – Torque seco | Clase 8.8 – Torque lubricado (*) | Clase 10.9 – Torque seco | Clase 10.9 – Torque lubricado (*) | Broca para roscar (mm / in) |
| --- | --- | --- | --- | --- | --- |
| M5 | 4,9 Nm / 3,6 ft·lb | 3,9 Nm / 2,9 ft·lb | 7,1 Nm / 5,2 ft·lb | 5,7 Nm / 4,2 ft·lb | 4,2 mm / 0.165 in |
| M6 | 8,4 Nm / 6,2 ft·lb | 6,7 Nm / 4,9 ft·lb | 12,0 Nm / 8,9 ft·lb | 9,6 Nm / 7,1 ft·lb | 5 mm / 0.197 in |
| M8 | 20,4 Nm / 15,0 ft·lb | 16,3 Nm / 12,0 ft·lb | 29,2 Nm / 21,5 ft·lb | 23,4 Nm / 17,3 ft·lb | 6,8 mm / 0.268 in |
| M10 | 40,4 Nm / 29,8 ft·lb | 32,3 Nm / 23,8 ft·lb | 57,8 Nm / 42,6 ft·lb | 46,2 Nm / 34,1 ft·lb | 8,5 mm / 0.335 in |
| M12 | 70,4 Nm / 51,9 ft·lb | 56,3 Nm / 41,5 ft·lb | 101 Nm / 74,5 ft·lb | 81 Nm / 59,7 ft·lb | 10,2 mm / 0.402 in |
| M14 | 112 Nm / 82,6 ft·lb | 90 Nm / 66,4 ft·lb | 160 Nm / 118 ft·lb | 128 Nm / 94 ft·lb | 12 mm / 0.472 in |
| M16 | 175 Nm / 129 ft·lb | 140 Nm / 103 ft·lb | 250 Nm / 184 ft·lb | 200 Nm / 148 ft·lb | 14 mm / 0.551 in |
| M18 | 240 Nm / 177 ft·lb | 192 Nm / 142 ft·lb | 344 Nm / 254 ft·lb | 275 Nm / 203 ft·lb | 15,5 mm / 0.610 in |
| M20 | 341 Nm / 252 ft·lb | 273 Nm / 201 ft·lb | 488 Nm / 360 ft·lb | 390 Nm / 288 ft·lb | 17,5 mm / 0.689 in |
| M22 | 465 Nm / 343 ft·lb | 372 Nm / 274 ft·lb | 663 Nm / 489 ft·lb | 530 Nm / 391 ft·lb | 19,5 mm / 0.768 in |
| M24 | 590 Nm / 435 ft·lb | 472 Nm / 348 ft·lb | 845 Nm / 623 ft·lb | 676 Nm / 499 ft·lb | 21 mm / 0.827 in |
| M30 | 1170 Nm / 863 ft·lb | 936 Nm / 691 ft·lb | 1680 Nm / 1 239 ft·lb | 1 340 Nm / 988 ft·lb | 26,5 mm / 1.043 in |

(*) Lubricación ligera, K ≈ 0,16. Para lubricación con aceite SAE 30 puede aplicarse una reducción adicional del 40 % respecto al valor seco.

## Métodos de control de la precarga

Existen múltiples técnicas para asegurar que la tensión en el tornillo se aproxima a la especificada en diseño, cada una con ventajas y limitaciones:

- **Apriete por control de torque:** Es el método más sencillo y extendido. Se ajusta hasta alcanzar un torque límite mediante llave dinamométrica. La dispersión de precarga puede ser alta debido a las variaciones de fricción (hasta ±25 %).
- **Apriete por ángulo controlado (o método de giro de tuerca):** Se rota la unión un ángulo determinado después del asentamiento, llevando el material más allá del límite elástico. Proporciona precarga repetible, pero requiere ensayos previos para definir el ángulo y puede degradar la rosca en reutilizaciones.
- **Apriete por torque-ángulo (control de tensión torque-ángulo):** Combina la supervisión simultánea del torque y el ángulo de giro. Se aprieta hasta un torque umbral y luego se aplica un ángulo adicional. El registro de la curva torque vs. ángulo permite validar el proceso y detectar anomalías.
- **Apriete por control de límite elástico:** La detección de la pendiente de la curva torque-ángulo identifica el inicio de la fluencia, maximizando la precarga. Requiere herramienta especializada.
- **Método de estiramiento del tornillo:** Un cilindro hidráulico estira el vástago del tornillo; la tuerca se gira sin carga y al liberar la presión se establece la precarga. Frecuente en uniones de gran diámetro.
- **Apriete térmico:** Se calienta el tornillo para dilatarlo, se posiciona la tuerca y al enfriarse se genera la precarga. Método lento empleado en turbinas y equipos de gran tamaño.
- **Métodos con indicación de tensión:** Incluyen medición directa del alargamiento con comparador, galgas extensométricas adheridas o elementos indicadores de carga incorporados en la tornillería (por ej., resaltos que se aplanan al alcanzar la precarga objetivo).

La selección del método depende de la criticidad de la unión, el tamaño del tornillo y la producción. Los sistemas de control torque-ángulo dominan en la industria automotriz y aeroespacial por su trazabilidad.

## Preguntas frecuentes (FAQ)

1.  **¿Cuál es la fórmula general para calcular el torque de apriete en tornillos?**
    La expresión más utilizada es \(T = K F d (1 - l/100)\), donde el torque \(T\) se obtiene multiplicando la constante de torque \(K\) (típicamente 0,2 para acero seco normal), la precarga \(F\) y el diámetro nominal \(d\), afectada por la reducción por lubricación \(l\). No considera el paso de rosca y supone una precisión de llave de ±25 %.

2.  **¿Qué valor de constante K se recomienda para un tornillo de acero sin lubricar?**
    Para un tornillo de acero de resistencia media, seco y sin recubrimiento, \(K = 0,2\). Si el acabado es negro no revestido puede subir a 0,3, mientras que un tornillo ligeramente lubricado baja a 0,18.

3.  **¿Cuánto reduce la lubricación el torque necesario?**
    Al lubricar con aceite SAE 30, el torque requerido para alcanzar la misma precarga se reduce aproximadamente un 40 % respecto al valor en seco. Por ello, si se aplica el torque seco a una unión lubricada, la precarga real puede exceder la resistencia del tornillo y producir rotura.

4.  **¿Cuál es la precarga objetivo habitual respecto a la resistencia del tornillo?**
    El torque estándar en seco se calcula para generar una tensión de tracción igual al 75 % de la carga de prueba (proof load) o al 70 % de la resistencia a la tracción mínima del tornillo, según la práctica general de ingeniería.

5.  **¿Qué torque se requiere para apretar un tornillo métrico M30 clase 8.8 en seco?**
    Para un M30 clase 8.8 con carga de prueba de 337 kN (aproximadamente 325 kN en tabla) en condiciones secas (K=0,2) se necesita un torque de 2022 Nm / 1492 ft·lb. Con lubricación, el torque se reduce a unos 1213 Nm / 895 ft·lb.

6.  **¿Cuáles son los métodos de control de precarga más utilizados en la industria?**
    El control por torque con llave dinamométrica es el más simple y extendido. Le siguen el método torque-ángulo (torque hasta umbral + giro adicional), el apriete por control de ángulo puro y, en aplicaciones críticas, los sistemas de estiramiento hidráulico y los indicadores de tensión directa.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bolt-torque-load-calculator-d_2065.html
- **bossard.com**: https://www.bossard.com/global-en/knowledge-hub/resources/online-calculators-and-converters/torque-and-preload-calculator/
- **mcmaster.com**: https://www.mcmaster.com/products/torque-charts
