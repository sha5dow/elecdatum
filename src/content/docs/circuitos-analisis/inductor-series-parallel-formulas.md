---
title: "Fórmulas de inductores serie paralelo"
sidebar:
  label: "Fórmulas de inductores serie paralelo"
description: "Ficha tecnica: Fórmulas de inductores serie paralelo"
keywords: ["inductor series parallel formula calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "circuit-elements"
subcategory: "inductor-formulas"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Cuando varios inductores se conectan en un mismo circuito, su inductancia total o equivalente depende de la topología de la conexión. En una configuración serie, la inductancia equivalente es la suma aritmética de las inductancias individuales, mientras que en una configuración paralelo, el recíproco de la inductancia equivalente es la suma de los recíprocos de cada inductancia. Estas reglas son análogas a las de resistencias en serie y paralelo, pero con la complejidad adicional de que, en circuitos reales, la inductancia mutua entre bobinas próximas puede alterar significativamente el valor total. La corriente en serie es idéntica para todos los inductores y la tensión total se reparte entre ellos; en paralelo, la tensión es común y la corriente se divide por cada rama.

## Inductores en serie

En una conexión serie, la inductancia equivalente **L<sub>eq</sub>** es la suma directa de las inductancias individuales de cada inductor no acoplado magnéticamente. La fórmula para *n* inductores es:

> **L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub> + ... + L<sub>n</sub>**

Donde cada **L<sub>i</sub>** representa la inductancia del i-ésimo inductor, expresada en henrios (H). La corriente eléctrica que atraviesa cada componente es exactamente la misma, mientras que la caída de tensión total en bornes del conjunto equivale a la suma de las caídas de tensión individuales.

| Número de inductores | Valor individual (métrico) | Valor individual (imperial equivalente) | Inductancia equivalente serie |
|---|---|---|---|
| 2 | 10 mH cada uno | 10 mH / 0.01 H | 20 mH / 0.02 H |
| 3 | 4,7 µH cada uno | 4,7 µH / 4.7×10⁻⁶ H | 14,1 µH / 1.41×10⁻⁵ H |
| 4 | 1 H cada uno | 1 H / 1 H | 4 H / 4 H |

## Inductores en paralelo

Para inductores conectados en paralelo sin acoplamiento magnético, el recíproco de la inductancia equivalente es la suma de los recíprocos de las inductancias individuales. La expresión general para *n* inductores es:

> **1 / L<sub>eq</sub> = 1 / L<sub>1</sub> + 1 / L<sub>2</sub> + 1 / L<sub>3</sub> + ... + 1 / L<sub>n</sub>**

En el caso particular de dos inductores, la fórmula se simplifica a:

> **L<sub>eq</sub> = (L<sub>1</sub> × L<sub>2</sub>) / (L<sub>1</sub> + L<sub>2</sub>)**

En esta configuración, la tensión aplicada a cada inductor es idéntica, mientras que la corriente total se reparte entre las distintas ramas de forma inversamente proporcional a la inductancia de cada una.

| Configuración | Inductor 1 (métrico) | Inductor 2 (métrico) | Inductancia equivalente paralelo |
|---|---|---|---|
| 2 iguales | 100 mH / 0.1 H | 100 mH / 0.1 H | 50 mH / 0.05 H |
| 2 diferentes | 10 µH / 1×10⁻⁵ H | 20 µH / 2×10⁻⁵ H | 6,67 µH / 6.67×10⁻⁶ H |
| 3 iguales | 30 mH / 0.03 H | 30 mH / 0.03 H | 10 mH / 0.01 H |

## Inductancia mutua en configuraciones serie y paralelo

Cuando los inductores están físicamente próximos, el flujo magnético de uno puede enlazar las espiras de otro, generando una inductancia mutua **M** que modifica la inductancia total. En serie, si los campos se refuerzan (polaridad aditiva), la inductancia equivalente aumenta; si se oponen (polaridad sustractiva), disminuye. Para dos inductores acoplados en serie, la fórmula es:

> **L<sub>eq</sub> = L<sub>1</sub> + L<sub>2</sub> ± 2M**

Donde el signo positivo corresponde a conexión serie aditiva y el signo negativo a serie sustractiva. En paralelo, el efecto de **M** es más complejo y su contribución depende del coeficiente de acoplamiento y de la orientación relativa de los devanados. El coeficiente de acoplamiento *k* relaciona la inductancia mutua con las autoinductancias según:

> **M = k √(L<sub>1</sub> × L<sub>2</sub>)**

Con *k* comprendido entre 0 (sin acoplamiento) y 1 (acoplamiento perfecto).

| Tipo de acoplamiento | L<sub>1</sub> (métrico) | L<sub>2</sub> (métrico) | k | M | L<sub>eq</sub> serie aditiva |
|---|---|---|---|---|---|
| Sin acoplamiento | 10 mH / 0.01 H | 10 mH / 0.01 H | 0 | 0 mH / 0 H | 20 mH / 0.02 H |
| Acoplamiento parcial | 10 mH / 0.01 H | 10 mH / 0.01 H | 0,5 | 5 mH / 0.005 H | 30 mH / 0.03 H |
| Acoplamiento perfecto | 10 mH / 0.01 H | 10 mH / 0.01 H | 1 | 10 mH / 0.01 H | 40 mH / 0.04 H |

## Comportamiento eléctrico y aplicaciones

En un circuito serie, la misma corriente recorre todos los inductores, lo que los hace idóneos para aplicaciones donde se requiere incrementar la inductancia total sin modificar la capacidad de corriente. Esta configuración se emplea frecuentemente en filtros pasivos y en etapas de entrada de fuentes de alimentación para atenuar ruido de alta frecuencia.

En paralelo, cada inductor soporta la misma tensión, pero la corriente se divide, lo que permite manejar corrientes totales más elevadas que las que soportaría un único inductor. Se utiliza en convertidores CC-CC multifase y en circuitos de carga donde se necesita repartir la energía entre múltiples ramas para reducir pérdidas por calentamiento.

## Preguntas frecuentes (FAQ)

### ¿La fórmula de inductores en serie es igual que la de resistencias en serie?
Sí, la inductancia equivalente de inductores en serie sin acoplamiento magnético se calcula exactamente igual que la resistencia equivalente de resistencias en serie: sumando los valores individuales. La diferencia fundamental es que los inductores pueden presentar inductancia mutua, la cual no tiene análogo directo en resistencias puras.

### ¿Por qué la inductancia equivalente en paralelo es menor que la menor de las inductancias individuales?
Al igual que con resistencias en paralelo, al añadir más caminos para la corriente se reduce la oposición total al cambio de corriente. El recíproco de la inductancia (similar a la admitancia) se suma, lo que matemáticamente produce un valor equivalente inferior al componente más pequeño.

### ¿Qué ocurre si conecto dos inductores en paralelo con valores muy dispares?
La inductancia equivalente se aproxima al valor del inductor más pequeño. Por ejemplo, un inductor de 1 mH en paralelo con uno de 100 mH produce aproximadamente 0,99 mH. La rama de menor inductancia domina la respuesta del conjunto porque ofrece menor oposición al cambio de corriente.

### ¿Cómo influye la inductancia mutua en la inductancia total?
La inductancia mutua puede aumentar o disminuir la inductancia total según la orientación relativa de los campos magnéticos. En serie aditiva suma 2M, en serie sustractiva resta 2M. En configuraciones paralelo, el efecto es más complejo y requiere conocer el coeficiente de acoplamiento y la disposición geométrica de las bobinas.

### ¿Se pueden combinar inductores en serie y paralelo en un mismo circuito?
Sí, es habitual encontrar combinaciones mixtas serie-paralelo. El procedimiento de análisis consiste en reducir el circuito por etapas: primero se calcula la inductancia equivalente de los subgrupos en paralelo, y luego se suma el resultado con los inductores en serie. Si existe acoplamiento magnético entre bobinas de distintos subgrupos, el cálculo requiere aplicar análisis de mallas con matrices de inductancia.

### ¿En qué se diferencia la energía almacenada en serie frente a paralelo?
La energía total almacenada en un conjunto de inductores es siempre la suma de las energías almacenadas en cada uno, independientemente de la conexión. Sin embargo, para una misma tensión aplicada, una configuración paralelo puede almacenar más energía que una serie porque la inductancia equivalente menor permite corrientes más elevadas en régimen transitorio.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/inductance-serial-parallel-connections-d_1882.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-15/series-and-parallel-inductors/
- **electrical4u.com**: https://www.electrical4u.com/series-and-parallel-inductors/
