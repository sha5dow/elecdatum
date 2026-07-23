---
title: "Conversión unidades de presión"
sidebar:
  label: "Conversión unidades de presión"
description: "Ficha tecnica: Conversión unidades de presión"
keywords: ["pressure unit conversion bar psi MPa kPa", "converters"]
category: "converters"
topic: "units"
subcategory: "pressure-units"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## Descripción general
La conversión de unidades de presión es fundamental en ingeniería, meteorología y procesos industriales. La unidad base del Sistema Internacional (SI) es el **pascal (Pa)**, equivalente a 1 newton por metro cuadrado. Desde esta referencia se derivan múltiplos como el kilopascal (kPa = 10³ Pa) y el megapascal (MPa = 10⁶ Pa), así como otras unidades de uso común como el **bar** (1 bar = 100 000 Pa), la **atmósfera estándar** (atm), los **milímetros de mercurio** (mmHg) y las unidades anglosajonas **psi** (libras-fuerza por pulgada cuadrada) o **inHg** (pulgadas de mercurio). En esta página se presentan las equivalencias más precisas y las fórmulas para pasar fácilmente de una unidad a otra, junto con notas sobre exactitud y casos especiales.

## Unidades y símbolos

| Unidad | Símbolo | Sistema / Tipo |
|--------|---------|----------------|
| pascal | Pa | SI (derivado) |
| kilopascal | kPa | SI (múltiplo) |
| megapascal | MPa | SI (múltiplo) |
| bar | bar | métrico (no SI, aceptado) |
| milibar | mbar | métrico (submúltiplo del bar) |
| atmósfera estándar | atm | unidad convencional |
| atmósfera técnica | at | unidad técnica (kgf/cm²) |
| milímetro de mercurio | mmHg | unidad manométrica (métrica) |
| pulgada de mercurio | inHg | imperial |
| milímetro de columna de agua | mmH₂O | unidad de baja presión |
| metro de columna de agua | mH₂O | unidad de carga hidráulica |
| pulgada de columna de agua | inH₂O | imperial |
| libra-fuerza por pulgada cuadrada | psi | imperial |
| libra-fuerza por pie cuadrado | psf | imperial |
| torr | Torr | próxima al mmHg (1 Torr ≈ 1 mmHg) |
| kilogramo-fuerza por cm² | kgf/cm² | unidad técnica (métrica) |

## Tabla de conversión
Cada valor se expresa simultáneamente en unidades métricas e imperiales para facilitar la lectura directa.
*Condiciones de referencia: columna de agua a 4 °C; mercurio a 0 °C, salvo indicación en contrario.*

| Unidad de referencia | Equivalencias (métrico / imperial) |
|----------------------|--------------------------------------|
| 1 pascal (Pa) | 1 N/m² / 0,01 mbar / 1×10⁻⁵ bar / 9,869×10⁻⁶ atm / 0,0075006 mmHg / 0,00014504 psi / 0,0040147 inH₂O |
| 1 kilopascal (kPa) | 1000 Pa / 10 mbar / 0,01 bar / 0,009869 atm / 7,5006 mmHg / 0,145038 psi / 0,33456 ftH₂O |
| 1 bar | 100 000 Pa (100 kPa) / 0,1 MPa / 0,986923 atm / 750,06 mmHg / 14,5038 psi / 29,53 inHg / 33,46 ftH₂O / 1,01972 kgf/cm² |
| 1 atmósfera estándar (atm) | 101 325 Pa / 1,01325 bar / 760 mmHg / 29,9213 inHg / 14,6959 psi / 407,19 inH₂O / 1,03323 kgf/cm² |
| 1 atmósfera técnica (at = 1 kgf/cm²) | 98 066,5 Pa / 0,980665 bar / 735,56 mmHg / 28,96 inHg / 14,223 psi / 10 mH₂O |
| 1 psi (lbf/in²) | 6894,76 Pa / 6,8948 kPa / 0,0689476 bar / 0,068046 atm / 51,7149 mmHg / 2,0360 inHg / 27,68 inH₂O |
| 1 mmHg (0 °C) | 133,322 Pa / 1,33322 mbar / 0,0013158 atm / 0,03937 inHg / 0,0193368 psi / 13,5951 mmH₂O |
| 1 inHg (0 °C) | 3386,39 Pa / 33,8639 mbar / 0,033421 atm / 25,4 mmHg / 0,491154 psi / 13,57 inH₂O |
| 1 mmH₂O (4 °C) | 9,80638 Pa / 0,0980638 mbar / 9,6784×10⁻⁵ atm / 0,073555 mmHg / 0,0014223 psi / 0,03937 inH₂O |
| 1 inH₂O (4 °C) | 249,082 Pa / 2,49082 mbar / 0,002458 atm / 1,868 mmHg / 0,036127 psi |
| 1 torr | 133,322 Pa / 1,33322 mbar / 1 mmHg (aprox.) / 0,0013158 atm / 0,01934 psi |

## Fórmulas de conversión
Todas las fórmulas se basan en la equivalencia exacta 1 bar = 100 000 Pa y en los valores definidos para la atmósfera estándar (1 atm = 101 325 Pa) y la pulgada (1 in = 25,4 mm).

**Conversiones directas (multiplicación por factor)**
- Pa → bar: \( P_{bar} = P_{Pa} \times 1\times10^{-5} \)
- Pa → atm: \( P_{atm} = P_{Pa} \times 9,86923\times10^{-6} \)
- Pa → mmHg: \( P_{mmHg} = P_{Pa} \times 0,00750062 \)
- Pa → psi: \( P_{psi} = P_{Pa} \times 1,45038\times10^{-4} \)
- bar → Pa: \( P_{Pa} = P_{bar} \times 100\,000 \)
- bar → psi: \( P_{psi} = P_{bar} \times 14,5038 \)
- atm → Pa: \( P_{Pa} = P_{atm} \times 101\,325 \)
- atm → psi: \( P_{psi} = P_{atm} \times 14,6959 \)
- psi → Pa: \( P_{Pa} = P_{psi} \times 6894,76 \)
- psi → bar: \( P_{bar} = P_{psi} \times 0,0689476 \)
- mmHg → Pa: \( P_{Pa} = P_{mmHg} \times 133,322 \)
- inHg → Pa: \( P_{Pa} = P_{inHg} \times 3386,39 \)
- mmH₂O (4 °C) → Pa: \( P_{Pa} = P_{mmH2O} \times 9,80638 \)
- inH₂O (4 °C) → Pa: \( P_{Pa} = P_{inH2O} \times 249,082 \)

**Conversiones inversas (división por el mismo factor)**
- Pa → bar: para convertir 500 000 Pa a bar, \( 500\,000 / 100\,000 = 5\ \text{bar} \)
- psi → atm: \( P_{atm} = P_{psi} / 14,6959 \)
- inHg → mmHg: \( P_{mmHg} = P_{inHg} \times 25,4 \)

**Ejemplo numérico (métrico + imperial)**
Convertir 2,5 bar a psi y a kPa:
\( 2,5\ \text{bar} \times 14,5038 = 36,26\ \text{psi} \)
\( 2,5\ \text{bar} \times 100\ \text{kPa/bar} = 250\ \text{kPa} \)

## Notas sobre precisión y casos especiales
- La equivalencia **1 bar = 100 000 Pa** es exacta por definición, por lo que no introduce error de redondeo en conversiones que involucren pascales o bares.
- **1 atm = 101 325 Pa** es un valor exacto adoptado por convenio internacional, por lo que las conversiones entre atm y Pa son exactas siempre que se utilice esa cifra completa.
- La relación **1 inHg ≈ 25,4 mmHg** es geométricamente exacta porque la pulgada se define como 25,4 mm. Sin embargo, la equivalencia en pascales depende de la densidad del mercurio a una temperatura dada; se asume 0 °C (13595,1 kg/m³) para mmHg y para inHg en la mayoría de normas.
- El factor **1 psi = 6894,7572931783 Pa** es muy preciso. En ingeniería suele redondearse a **6894,76 Pa**; el error relativo es inferior a 0,00004 %. Para aplicaciones de alta precisión se recomienda usar el valor completo.
- Las conversiones que involucran **kgf/cm²** dependen de la aceleración de la gravedad estándar (9,80665 m/s²). Cualquier variación local de *g* requeriría corrección, aunque a efectos prácticos se usa el valor estándar.
- Para **presiones manométricas** (relativas) se debe tener cuidado al usar conversiones que mezclan unidades absolutas. La atmósfera estándar y el bar suelen referirse a presión absoluta. Si se trabaja con presión relativa (ej. 2 bar manométricos), la conversión a psi manométricos mantiene el mismo factor de conversión (2 bar relativo = 29,0 psi relativo).

## FAQ
1. **¿Cuántos pascales exactamente tiene 1 bar?**  
   Un bar equivale exactamente a 100 000 Pa (100 kPa). Es una equivalencia definida por consenso internacional, por lo que no hay incertidumbre en la conversión entre bar y pascal.

2. **¿A cuántos psi corresponden 2,5 bar?**  
   2,5 bar son 36,26 psi (2,5 × 14,5038). Expresado en unidades métricas sería 250 kPa o 0,25 MPa; en unidades imperiales, 36,26 lbf/in².

3. **¿Cuántos mmHg hay en una atmósfera estándar?**  
   La atmósfera estándar se define como 760 mmHg exactamente a 0 °C. En unidades imperiales equivale a 29,9213 inHg.

4. **¿Qué presión en psi representa 50 MPa?**  
   50 MPa son 50 000 kPa, es decir, 7251,9 psi (50 000 × 0,145038). Esta conversión muestra que 50 MPa equivalen a aproximadamente 7252 psi, valor típico en sistemas hidráulicos de alta presión.

5. **¿Cuántos metros de columna de agua produce una presión de 0,5 psi?**  
   0,5 psi equivalen a 0,352 mH₂O (0,5 psi × 0,70307 mH₂O/psi, ya que 1 psi ≈ 0,703 mH₂O). En unidades imperiales serían 13,84 inH₂O.

6. **¿Es correcto usar kg/cm² como unidad de presión?**  
   Técnicamente 1 kgf/cm² es una unidad de presión (fuerza por área) si se sobreentiende que la masa de 1 kg se multiplica por la gravedad estándar (9,80665 m/s²). Su valor numérico es 98 066,5 Pa; equivale a 0,980665 bar y a 14,223 psi. Aunque no es una unidad SI, aún se emplea en contextos industriales.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pressure-units-converter-d_569.html
- **unitconverters.net**: https://www.unitconverters.net/pressure-converter.html
- **convertworld.com**: https://www.convertworld.com/en/pressure/bar.html
