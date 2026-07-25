---
title: "Potencia reactiva fundamentos"
sidebar:
  label: "Potencia reactiva fundamentos"
description: "Ficha tecnica: Potencia reactiva fundamentos"
keywords: ["reactive power fundamentals VAR", "calidad-energia"]
category: "calidad-energia"
topic: "reactive-power"
subcategory: "reactive-power-basics"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La potencia reactiva es la componente de la potencia eléctrica en corriente alterna que no realiza trabajo útil, sino que oscila entre la fuente y los campos magnéticos o eléctricos de las cargas inductivas y capacitivas. Su unidad de medida es el voltamperio reactivo (VAR), y en instalaciones industriales típicas puede representar entre el 30 % y el 50 % de la potencia aparente total.

## Potencia activa, reactiva y aparente
En todo circuito de corriente alterna coexisten tres formas de potencia:

- **Potencia activa (P):** es la que efectivamente se transforma en trabajo mecánico, calor o luz. Se mide en vatios (W) y corresponde al producto de la tensión, la corriente y el coseno del ángulo de fase (cos φ).
- **Potencia reactiva (Q):** es la potencia intercambiada continuamente entre el generador y los elementos reactivos (bobinas y condensadores) sin producir trabajo neto. Se expresa en voltamperios reactivos (VAR) y está asociada al seno del ángulo de fase (sin φ). En un ciclo completo su valor medio es cero.
- **Potencia aparente (S):** es la potencia total suministrada a la carga, combinación vectorial de P y Q. Se mide en voltamperios (VA) y determina la capacidad necesaria de los transformadores y líneas de distribución.

## Triángulo de potencias
La relación entre P, Q y S se representa gráficamente mediante un triángulo rectángulo donde el cateto horizontal es la potencia activa, el cateto vertical es la potencia reactiva y la hipotenusa es la potencia aparente. El ángulo φ entre S y P coincide con el desfase entre tensión y corriente.

> **S² = P² + Q²**

donde:

- **S** = potencia aparente (VA)
- **P** = potencia activa (W)
- **Q** = potencia reactiva (VAR)

El factor de potencia se define como cos φ = P / S. Un bajo factor de potencia indica una elevada proporción de potencia reactiva.

## Fórmulas de cálculo
Las expresiones generales para sistemas monofásicos y trifásicos equilibrados son:

| Sistema | Potencia activa (W) | Potencia reactiva (VAR) | Potencia aparente (VA) |
| --- | --- | --- | --- |
| Monofásico | P = U · I · cos φ | Q = U · I · sin φ | S = U · I |
| Trifásico | P = √3 · U · I · cos φ | Q = √3 · U · I · sin φ | S = √3 · U · I |

Donde:

- **U** = tensión de línea (V)
- **I** = corriente de línea (A)
- **φ** = ángulo de desfase entre tensión y corriente

> **Q = U · I · sin φ** *(monofásico)*  
> **Q = √3 · U · I · sin φ** *(trifásico)*

En corriente continua (CC) la potencia reactiva no existe; solo hay potencia activa P = U · I.

## Relación con el factor de potencia
El factor de potencia (FP) es la razón entre la potencia activa y la aparente, y se expresa como FP = cos φ. Cuando la carga es puramente resistiva, φ = 0°, cos φ = 1 y toda la potencia suministrada es activa. A medida que aparecen elementos inductivos o capacitivos, φ aumenta, el factor de potencia disminuye y crece la proporción de potencia reactiva.

Un valor de FP inferior a 0,9 (90 %) suele considerarse ineficiente y, en muchas legislaciones, conlleva penalizaciones económicas al consumidor industrial.

## Efectos de una potencia reactiva elevada
La circulación de potencia reactiva provoca los siguientes efectos adversos en las redes eléctricas:

- **Aumento de la corriente de línea:** para una misma potencia activa, una mayor demanda de Q eleva la corriente total, incrementando las pérdidas por efecto Joule (I²R).
- **Sobrecalentamiento de transformadores y cables:** la corriente adicional reduce la capacidad útil de los equipos de distribución.
- **Caídas de tensión:** el tránsito de reactiva genera mayores caídas de tensión en los alimentadores, lo que puede comprometer la calidad del suministro.
- **Reducción de la estabilidad del sistema:** en redes débiles, las fluctuaciones de Q pueden provocar variaciones inadmisibles de la tensión. Por ello, la gestión de reactiva es un servicio auxiliar fundamental para mantener el perfil de tensiones dentro de límites seguros, normalmente ±5 % del valor nominal.

## Medición de la potencia reactiva
El instrumento destinado a medir la potencia reactiva se denomina **varímetro**. Existen dos variantes principales:

- **Varímetro monofásico:** la bobina de tensión es altamente inductiva, de modo que la corriente que circula por ella se desfasa 90° respecto a la tensión aplicada. La deflexión de la aguja es proporcional a U · I · sin φ. No ofrece buena precisión en presencia de armónicos.
- **Varímetro polifásico:** emplea dos autotransformadores en conexión delta abierta para generar un desfase de 90°. Las bobinas de corriente se conectan en serie con dos líneas y las de tensión se alimentan con tensiones compuestas desfasadas, logrando la lectura directa de la potencia reactiva total del sistema trifásico.

En circuitos trifásicos equilibrados también puede usarse un único vatímetro con la bobina de corriente en una fase y la bobina de tensión entre las otras dos, obteniendo un valor proporcional a Q.

## Preguntas frecuentes (FAQ)
### ¿Qué diferencia hay entre potencia activa, reactiva y aparente?
La potencia activa es la que realiza trabajo útil (se consume en resistencias). La reactiva oscila entre el generador y los elementos inductivos/capacitivos sin producir trabajo neto. La aparente es la suma vectorial de ambas y representa la potencia total suministrada al circuito.

### ¿Por qué es indeseable una potencia reactiva excesiva?
Porque incrementa la corriente que circula por la red sin aportar trabajo, elevando las pérdidas por calentamiento, reduciendo la capacidad de transporte de las líneas y provocando caídas de tensión. Además, penaliza económicamente al consumidor mediante un factor de potencia bajo.

### ¿Cómo se puede reducir la potencia reactiva?
Principalmente mediante la instalación de bancos de condensadores (compensación fija o automática) en paralelo con la carga inductiva, generando potencia reactiva de signo opuesto y acercando el factor de potencia a la unidad.

### ¿En qué unidades se mide la potencia reactiva?
Se mide en voltamperios reactivos (VAR) en el Sistema Internacional. Para grandes potencias se utilizan el kVAR (kilovar) y MVAR (megavar).

### ¿Qué papel juega la potencia reactiva en el control de tensión?
La inyección de potencia reactiva en un nodo eleva la tensión local, mientras que su absorción la reduce. Por ello, los operadores de red utilizan generadores síncronos (sobreexcitados/ subexcitados) y compensadores estáticos de reactiva para mantener la tensión dentro de los rangos admisibles.

### ¿Es posible medir la potencia reactiva con un vatímetro común?
No directamente. Se requiere un varímetro o bien modificar la conexión de un vatímetro para que la bobina de tensión reciba una señal desfasada 90° respecto a la original. En sistemas trifásicos equilibrados se puede medir con un solo vatímetro conectado de forma especial.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/kva-reactive-d_886.html
- **electrical4u.com**: https://www.electrical4u.com/varmeter-single-phase-and-polyphase-varmeter/
