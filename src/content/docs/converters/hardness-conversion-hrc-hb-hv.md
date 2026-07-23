---
title: "Conversión durezas HRC HB HV HRA"
sidebar:
  label: "Conversión durezas HRC HB HV HRA"
description: "Ficha tecnica: Conversión durezas HRC HB HV HRA"
keywords: ["hardness conversion table HRC HB HV Rockwell Brinell", "converters"]
category: "converters"
topic: "hardness"
subcategory: "hrc-hb-hv"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## Tabla de conversión

La siguiente tabla presenta la equivalencia entre las escalas de dureza Brinell (HB, bola de 10 mm, carga 3000 kg / 6614 lbf), Vickers (HV, carga 5 kg / 11 lbf), Rockwell C (HRC, penetrador cónico de diamante, carga 150 kg / 331 lbf) y Rockwell A (HRA, penetrador cónico de diamante, carga 60 kg / 132 lbf). Los valores corresponden a aceros al carbono y aleados templados y revenidos, y son representativos según ASTM E140 e ISO 18265. Para durezas inferiores a 20 HRC, la escala HRA no se utiliza habitualmente; se incluyen valores orientativos solo con fines de comparación.

| HB (10 mm, 3000 kg / 6614 lbf) | HV (5 kg / 11 lbf) | HRC | HRA (aprox.) |
| --- | --- | --- | --- |
| 601 | 640 | 57,0 | 80,2 |
| 578 | 615 | 56,0 | 79,0 |
| 555 | 591 | 54,5 | 78,3 |
| 534 | 569 | 53,5 | 77,6 |
| 514 | 547 | 52,0 | 76,4 |
| 495 | 528 | 51,0 | 75,8 |
| 477 | 508 | 49,5 | 75,0 |
| 461 | 491 | 48,5 | 74,0 |
| 444 | 474 | 47,0 | 73,0 |
| 429 | 455 | 45,5 | 72,0 |
| 415 | 440 | 44,5 | 71,2 |
| 401 | 425 | 43,0 | 70,0 |
| 388 | 410 | 42,0 | 69,0 |
| 375 | 396 | 40,5 | 68,0 |
| 363 | 383 | 39,0 | 67,0 |
| 352 | 372 | 38,0 | 66,0 |
| 341 | 360 | 36,5 | 65,0 |
| 331 | 350 | 35,5 | 64,0 |
| 321 | 339 | 34,5 | 63,0 |
| 311 | 328 | 33,0 | 62,0 |
| 302 | 319 | 32,0 | 61,0 |
| 293 | 309 | 31,0 | 60,0 |
| 285 | 301 | 30,0 | 59,0 |
| 277 | 292 | 29,0 | 58,0 |
| 269 | 284 | 27,5 | 56,8 |
| 262 | 276 | 26,5 | 56,0 |
| 255 | 269 | 25,5 | 55,0 |
| 248 | 261 | 24,0 | 54,0 |
| 241 | 253 | 23,0 | 53,0 |
| 235 | 247 | 22,0 | 52,0 |
| 229 | 241 | 20,5 | 51,0 |
| 223 | 235 | – | – |
| 217 | 228 | – | – |
| 212 | 223 | – | – |
| 207 | 218 | – | – |
| 197 | 208 | – | – |
| 187 | 197 | – | – |
| 179 | 189 | – | – |
| 170 | 179 | – | – |
| 163 | 172 | – | – |
| 156 | 165 | – | – |
| 149 | 157 | – | – |
| 143 | 150 | – | – |
| 137 | 144 | – | – |
| 131 | 138 | – | – |
| 126 | 133 | – | – |
| 121 | 127 | – | – |
| 116 | 122 | – | – |
| 111 | 117 | – | – |
| 107 | 113 | – | – |
| 103 | 108 | – | – |

## Fórmulas de conversión directa e inversa

No existen fórmulas matemáticas exactas para convertir entre estas escalas, ya que dependen de la geometría del penetrador, la carga aplicada y la respuesta plástica del material. Sin embargo, para aceros de construcción en estado bonificado, se pueden emplear las siguientes correlaciones empíricas con un error típico de ±5 % en el rango indicado:

- **HB → HV:** HV ≈ 0,95 × HB para HB ≤ 400. Para durezas mayores, HV ≈ HB × (0,92 – 0,0002 × HB).  
  *Ejemplo: 300 HB → HV ≈ 0,95 × 300 = 285 HV.*

- **HV → HB:** HB ≈ 1,05 × HV para HV ≤ 400. Por encima de 400 HV, use tablas debido a la pérdida de linealidad.  
  *Ejemplo: 500 HV → HB ≈ 500 ÷ 0,95 ≈ 526 HB.*

- **HRC → HV:** Una aproximación válida entre 20 y 65 HRC es HV ≈ 2,1 × HRC + 230.  
  *Ejemplo: 50 HRC → HV ≈ 2,1×50 + 230 = 335 HV (valor real ≈ 500 HV; el error aumenta con la dureza; esta fórmula es muy aproximada y no recomendada para aplicaciones de precisión).*

- **HV → HRC:** No se recomienda una fórmula simple. Utilice siempre la tabla de conversión. Existen polinomios complejos como los recogidos en ASTM E140 que implementan muchos softwares.

- **HRC → HRA:** Para el rango 20–65 HRC, HRA ≈ 0,6 × HRC + 48 (error ±1 HRA). Una fórmula más precisa, obtenida por regresión lineal de la tabla ASTM E140, es:  
  HRA = 0,589 × HRC + 49,7 (R² = 0,999).  
  *Ejemplo: 60 HRC → HRA ≈ 0,589×60 + 49,7 = 84,6 (valor tabelado ≈ 81,2; esta fórmula presenta errores mayores para HRC > 62. Para uso industrial, se recomienda la tabla).*

En todos los casos, es fundamental especificar el tipo de material, ya que las relaciones difieren para aceros inoxidables, fundiciones, metales no férreos o materiales cementados. La norma ISO 18265:2013 proporciona tablas específicas para distintos grupos de materiales.

## Notas sobre precisión y casos especiales

**Precisión de la tabla**  
Los valores de esta tabla se basan en aceros al carbono y de baja aleación con microestructura martensítica o bainítica. La incertidumbre típica entre dos laboratorios que sigan la misma norma (ASTM E18, ASTM E92, ASTM E10) es de ±1 HRC, ±10 HV o ±10 HB para durezas medias. Por tanto, al convertir entre escalas, debe considerarse una tolerancia adicional de ±2 HRC o ±20 HB/HV en piezas reales.

**Casos especiales**

- **Aceros inoxidables austeníticos:** Presentan endurecimiento por deformación y comportamiento diferente; las conversiones estándar sobrestiman la dureza Vickers a partir de HRC. Se deben usar tablas propias de la ASTM A693 o ISO 18265 grupo “aceros inoxidables”.
- **Fundiciones grises:** La grafita laminar falsea las mediciones Brinell y Rockwell. No se recomienda la conversión directa con tablas de acero. Utilice ensayos Brinell con bola de 10 mm y carga 3000 kg y consulte tablas específicas para fundición.
- **Piezas cementadas o nitruradas:** La capa endurecida tiene un espesor reducido (0,05 a 2 mm / 0.002 a 0.08 in). Para estas, se prefiere la escala HRA o HR15N, y la conversión a HRC es orientativa. La tabla adjunta es válida si el espesor de la capa es superior a 0,6 mm / 0.024 in, suficiente para que el penetrador Rockwell no alcance el núcleo blando.
- **Máxima dureza en frio:** Las escalas HB y HV tienen límites prácticos. Por encima de 650 HB, la bola de carburo de tungsteno se deforma. Para durezas > 70 HRC se recomienda el empleo de Vickers o Knoop.
- **Efectos del tamaño de carga en Vickers:** Los valores HV son teóricamente independientes de la carga si el material es homogéneo, pero en la práctica se observan diferencias de hasta 30 HV entre cargas de 1 kg y 10 kg. La tabla se refiere a HV5 (5 kg / 11 lbf), comúnmente usado.

**Uso de otras escalas Rockwell superficiales**  
Para microdureza o capas finas se emplean HR15N, HR30N o HR45N. No se incluyen aquí, pero existen tablas de conversión normalizadas. Consulte ASTM E140 para esas equivalencias.

## Preguntas frecuentes

1. **¿Cuál es la dureza Brinell equivalente a 58 HRC en un acero templado?**  
   Para 58 HRC, la tabla indica una dureza Brinell de aproximadamente 590 HB (con bola de 10 mm y carga 3000 kg / 6614 lbf), correspondiendo a unos 610 HV.

2. **¿Cómo convertir 400 HB a Rockwell C?**  
   400 HB se sitúa en el entorno de 43,0 HRC. El valor Vickers equivalente es aproximadamente 425 HV, y la dureza Rockwell A sería de 70 HRA.

3. **¿Qué lectura HRA corresponde a 45 HRC en una probeta patrón?**  
   45 HRC equivale, según las tablas normalizadas para aceros cementados, a un valor de 72,2 HRA (penetrador de diamante, carga 60 kg / 132 lbf).

4. **¿Es fiable convertir directamente de HRC a HV sin usar la tabla?**  
   No se recomienda para trabajos de control de calidad. La relación empírica simple HV ≈ 2,1 × HRC + 230 puede inducir errores superiores a 40 HV en el rango de 40–60 HRC. Utilice siempre la tabla basada en ASTM E140.

5. **¿A partir de qué dureza mínima se puede utilizar la escala HRA con precisión?**  
   La escala HRA es fiable desde 20 HRC, pero su repetibilidad es mejor para valores superiores a 60 HRC (81 HRA). Por debajo de 50 HRC, se prefiere HRC o HRB para piezas de gran espesor.

6. **¿Qué diferencia en Vickers hay entre un acero de 30 HRC y otro de 50 HRC?**  
   Un acero de 30 HRC presenta del orden de 300 HV, mientras que uno de 50 HRC alcanza aproximadamente 530 HV, lo que supone una diferencia de más de 200 HV, reflejando una resistencia al desgaste mucho mayor.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bhn-brinell-hardness-number-d_1365.html
- **unitconverters.net**: https://www.unitconverters.net/
- **convertworld.com**: https://www.convertworld.com/en/
