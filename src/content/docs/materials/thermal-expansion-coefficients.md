---
title: "Coeficientes de expansión térmica"
sidebar:
  label: "Coeficientes de expansión térmica"
description: "Ficha tecnica: Coeficientes de expansión térmica"
keywords: ["coefficient thermal expansion metals CTE", "materials"]
category: "materials"
topic: "cross-reference"
subcategory: "thermal-expansion"
skill: "material-data-comparison"
launch_phase: 1
last_updated: "2026-07-21"
verified: true
---

## Composición química

El coeficiente de expansión térmica (CTE) no es una propiedad asociada directamente a una composición química fija, sino una respuesta termomecánica que depende del tipo de enlace atómico y la estructura cristalina de cada material. Sin embargo, a efectos prácticos se tabulan valores CTE para metales puros y aleaciones de ingeniería con composiciones estandarizadas. La tabla siguiente recoge el CTE lineal medio (α) de metales y aleaciones representativos, expresado en unidades imperiales (10⁻⁶ in/in·°F) y del SI (10⁻⁶ m/m·°C), junto con el intervalo de temperatura de medición cuando se conoce.

| Metal / Aleación | Rango de temperatura (°F) | CTE (10⁻⁶ in/in·°F) | CTE (10⁻⁶ /°C) |
| --- | --- | --- | --- |
| Aluminio puro | 68 – 212 | 13.1 | 23.6 |
| Aluminio 6061 | 68 – 212 | 13.0 | 23.4 |
| Aleación de aluminio 7075 | 68 – 212 | 13.1 | 23.6 |
| Latón amarillo | 68 – 572 | 11.3 | 20.3 |
| Latón rojo (85 % Cu) | 68 – 572 | 10.4 | 18.7 |
| Bronce de aluminio | 68 – 572 | 9.0 | 16.2 |
| Cobre electrolítico (C11000) | 68 – 572 | 9.8 | 17.6 |
| Berilio‑cobre (C17200) | 68 – 212 | 9.9 | 17.8 |
| Fundición gris | 32 – 212 | 5.8 | 10.4 |
| Acero al carbono (laminado) | 70 – 800 | 7.8 | 14.0 |
| Acero inoxidable 304 | 68 – 212 | 9.6 | 17.3 |
| Acero inoxidable 316 | 68 – 212 | 8.8 | 15.8 |
| Invar (Fe‑36%Ni) | 68 – 212 | 0.67 | 1.2 |
| Kovar | 77 – 392 | 3.05 | 5.5 |
| Titanio puro | 68 – 200 | 4.8 | 8.6 |
| Ti‑5Al‑2.5Sn | 68 – 200 | 5.3 | 9.5 |
| Magnesio | 68 – 212 | 14.0 | 25.2 |
| Tungsteno | 68 – 212 | 2.5 | 4.5 |
| Molibdeno | 68 – 212 | 3.0 | 5.4 |
| Níquel 200 | 68 – 212 | 8.5 | 15.3 |
| Monel 400 | 32 – 212 | 7.7 | 13.9 |
| Hastelloy C | 70 – 200 | 5.3 | 9.5 |

Los valores proceden de mediciones normalizadas y pueden variar con la microestructura, el historial térmico y la composición exacta dentro de los límites de cada aleación.

## Propiedades mecánicas

El CTE no es una propiedad mecánica directa, pero gobierna la generación de tensiones térmicas cuando un componente está restringido. Una diferencia de temperatura de 100 °C en una barra de acero al carbono (CTE ≈ 14 × 10⁻⁶ /°C, módulo elástico ≈ 200 GPa) puede inducir una tensión de compresión o tracción cercana a 280 MPa si la expansión está totalmente impedida. La magnitud de la tensión térmica (σ) se estima con σ = E · α · ΔT, por lo que el conocimiento preciso del CTE es crítico para evitar deformaciones plásticas o fractura frágil. Las propiedades mecánicas del material (límite elástico, resistencia a la tracción) determinan el margen de seguridad frente a estos esfuerzos inducidos. Los ensayos de dilatación se realizan con probetas no sometidas a carga externa; la fuerza de contacto del palpador en un TMA típico oscila entre 0.001 y 0.1 N, insuficiente para alterar las propiedades mecánicas de la muestra.

## Propiedades físicas

El coeficiente de expansión térmica lineal representa el cambio fraccional de longitud por unidad de incremento de temperatura y se mide en K⁻¹ o °C⁻¹ (numéricamente idénticos porque se trata de diferencias de temperatura). El valor α se define como α = (ΔL / L₀) / ΔT, donde L₀ es la longitud de referencia medida habitualmente a 20 °C. A temperatura ambiente los materiales presentan una expansión tridimensional que, en sólidos isótropos, se relaciona con el CTE volumétrico β mediante β ≈ 3α. La densidad disminuye conforme la temperatura aumenta; por ejemplo, un bloque de aluminio puro (α ≈ 23.6 × 10⁻⁶ /°C) reduce su densidad en un 0.7 % al pasar de 20 °C a 120 °C. Materiales con enlace metálico tienden a poseer valores de α moderados (10–25 × 10⁻⁶ /°C), mientras que los cerámicos covalentes y los vidrios presentan coeficientes más bajos (0.5–10 × 10⁻⁶ /°C). El CTE también influye en la velocidad del sonido y en la conductividad térmica a través de la anarmonicidad de la red cristalina.

## Propiedades térmicas

El CTE es en sí mismo una propiedad térmica fundamental. Su dependencia con la temperatura hace necesario especificar el intervalo de medición. El método más empleado para determinarlo es el análisis termomecánico (TMA), que registra la variación de altura de una probeta mientras se calienta a velocidad controlada, típicamente 5 °C/min, con atmósfera de nitrógeno (caudal ≈ 20 cm³/min). La precisión alcanzable con equipos como el TMA 4000 es de ±0.1 µm en desplazamiento, lo que permite medir α con incertidumbre inferior al 1 % en muestras de 10 mm de altura. La expansión térmica no es lineal en rangos amplios; por ello los datos se reportan como valor medio en un intervalo o se ajustan a un polinomio α(T). Materiales como el Invar mantienen un CTE extremadamente bajo (< 1.5 × 10⁻⁶ /°C) hasta unos 200 °C, mientras que el aluminio muestra un aumento gradual de α al superar los 100 °C. La tabla incluida en la sección de composición química recoge valores medios representativos.

## Aplicaciones por industria

Las diferencias en el CTE entre materiales imponen decisiones de diseño en múltiples sectores:

- **Electrónica y semiconductores**: los sustratos cerámicos (α ≈ 3–7 × 10⁻⁶ /°C) deben casar con el silicio (α = 2.6 × 10⁻⁶ /°C) para evitar delaminación en ciclos térmicos. El Kovar (α ≈ 5.5 × 10⁻⁶ /°C) se usa en pasamuros vidrio-metal.
- **Aeroespacial**: las estructuras de aluminio 7075 (α = 23.6 × 10⁻⁶ /°C) requieren juntas de dilatación que compensen cambios de temperatura de más de 100 °C durante el vuelo.
- **Energía**: tuberías de acero inoxidable 316 (α = 15.8 × 10⁻⁶ /°C) transportan fluidos calientes y necesitan liras de expansión calculadas con precisión.
- **Construcción**: el acero estructural (α = 14 × 10⁻⁶ /°C) y el hormigón (α = 10–12 × 10⁻⁶ /°C) se combinan porque sus CTE son similares, reduciendo fisuras térmicas.
- **Óptica de precisión**: cerámicas de baja expansión como el Zerodur (α < 0.1 × 10⁻⁶ /°C) se emplean en sustratos de telescopios.

## Comparativa con materiales similares

Al comparar familias de metales se observa una jerarquía clara de CTE:

- **Metales refractarios** (W, Mo, Ta): α entre 2.5 y 5.4 × 10⁻⁶ /°C. Idóneos para aplicaciones de alta temperatura que exigen estabilidad dimensional.
- **Aceros y fundiciones**: la mayoría de los aceros al carbono e inoxidables presentan α entre 10 y 18 × 10⁻⁶ /°C. Los aceros inoxidables austeníticos (serie 300) poseen CTE más alto que los ferríticos (serie 400) y martensíticos.
- **Aleaciones de aluminio**: α alrededor de 23–25 × 10⁻⁶ /°C, aproximadamente el doble que los aceros. Su ligereza compensa la mayor dilatación en muchas aplicaciones.
- **Aleaciones de cobre**: valores entre 16 y 21 × 10⁻⁶ /°C, según la proporción de zinc o estaño. Los latones suelen tener α más alto que los bronces.
- **Aleaciones de níquel (Inconel, Monel)**: α entre 13 y 16 × 10⁻⁶ /°C, ofreciendo un compromiso entre resistencia a corrosión y estabilidad térmica.

La selección de materiales para uniones fijas (soldadura, adhesivo) exige que los CTE de ambos lados de la junta no difieran en más de 2–3 × 10⁻⁶ /°C si se esperan ciclos térmicos amplios.

## Preguntas frecuentes (FAQ)

### ¿Qué es el coeficiente de expansión térmica?
El CTE lineal es el cambio fraccional de longitud por grado de temperatura; por ejemplo, el acero al carbono tiene un CTE de aproximadamente 14 × 10⁻⁶ /°C, lo que significa que una barra de 1 m se alarga 14 µm al aumentar 1 °C.

### ¿Cómo se mide el CTE con precisión?
La medición precisa se realiza con un analizador termomecánico (TMA) capaz de detectar desplazamientos inferiores a 0.1 µm. Un equipo comercial como el PerkinElmer TMA 4000 alcanza esa resolución trabajando con muestras de 10 mm de altura y atmósfera de nitrógeno.

### ¿Cuál es el CTE del cobre electrolítico?
El cobre C11000 presenta un CTE de 9.8 × 10⁻⁶ in/in·°F (17.6 × 10⁻⁶ /°C) en el intervalo de 68 a 572 °F, según datos normalizados recopilados por Engineering Toolbox.

### ¿Por qué es crítico el CTE en el diseño de uniones?
Una diferencia de CTE de solo 5 × 10⁻⁶ /°C entre dos materiales rígidamente unidos puede generar tensiones superiores a 100 MPa para un cambio de temperatura de 50 °C, causando fallo por fatiga o delaminación.

### ¿El CTE varía con la temperatura?
Sí, el CTE no es constante. Por ejemplo, el acero inoxidable 304 pasa de 9.6 × 10⁻⁶ in/in·°F en el rango 68–212 °F a aproximadamente 10.4 × 10⁻⁶ in/in·°F al alcanzar 600 °F, un incremento cercano al 8 %.

### ¿Qué metal de ingeniería tiene el menor CTE?
La aleación Invar (Fe‑36%Ni) muestra un CTE excepcionalmente bajo de 0.67 × 10⁻⁶ in/in·°F (1.2 × 10⁻⁶ /°C) en el rango 68–212 °F, casi diez veces menor que el del acero común.

## Fuentes consultadas

- **azom.com**: https://www.azom.com/article.aspx?ArticleID=21969
- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/thermal-expansion-metals-d_859.html
- **steelnumber.com**: https://www.steelnumber.com/en/standard_steel_eu.php?gost_number=10283
