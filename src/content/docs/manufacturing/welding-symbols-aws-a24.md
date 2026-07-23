---
title: "Símbolos soldadura AWS A2.4"
sidebar:
  label: "Símbolos soldadura AWS A2.4"
description: "Ficha tecnica: Símbolos soldadura AWS A2.4"
keywords: ["AWS A2.4 welding symbols complete reference", "manufacturing"]
category: "manufacturing"
topic: "welding"
subcategory: "symbols-aws-a24"
skill: "standards-guide"
launch_phase: 5
last_updated: "2026-07-22"
verified: true
---

El 100 % de los símbolos de soldadura en los planos técnicos de América y gran parte del mundo se rigen por la norma AWS A2.4, publicada por la American Welding Society. Esta norma es un estándar de comunicación, no un código de diseño, y su aplicación correcta elimina ambigüedades entre el diseñador y el operario de soldadura, abarcando desde la preparación de juntas hasta los exámenes no destructivos.

## Componentes del sistema de símbolos

El símbolo de soldadura completo se construye a partir de varios elementos dispuestos en una línea de referencia horizontal. Cada componente tiene una ubicación normalizada que transmite información específica sobre la junta y el proceso.

| Componente | Ubicación y función |
|---|---|
| Línea de flecha (hänvisningslinje) | Toca la arista de la pieza que se va a soldar o apunta directamente al cordón. Puede ser múltiple si se requiere indicar varios lados de una junta. |
| Línea de referencia (referenslinje) | Se compone de una línea continua y otra discontinua (o una sola línea según la práctica). La información situada sobre la línea continua se refiere al lado de la flecha; la información bajo la línea continua indica el otro lado. |
| Símbolo básico (grundsymbol) | Representa la geometría de la junta (ranura en V, chaflán, filete, tapón, etc.) y se dibuja sobre o bajo la línea de referencia. |
| Símbolo suplementario (tilläggssymbol) | Complementa al símbolo básico (por ejemplo, cordón cóncavo, convexo, respaldo, espaciador consumible). Se coloca directamente encima o debajo del símbolo básico. |
| Cola (laxstjärt) | Horquilla en el extremo opuesto a la flecha; contiene información adicional como la especificación del proceso, el tipo de metal de aporte o la nota de ensayo. Puede omitirse si no se requiere ningún dato complementario. |

## Símbolos básicos de soldadura

Los símbolos básicos definen el tipo de junta y la geometría de la preparación. Cada uno se dibuja con líneas de espesor fijo, normalmente de **0,35 mm / 0.014 in** para hojas de dibujo A y B. La altura del símbolo suele ser de **3 mm / 0.12 in**, proporcional al tamaño de la letra del plano.

| Símbolo | Designación | Aplicación típica |
|---|---|---|
| ▼ | Ranura en V | Soldadura a tope con bisel simple, espesores de 5–25 mm / 0.2–1.0 in |
| ▼▼ | Ranura en doble V | Soldadura por ambos lados en espesores superiores a 20 mm / 0.8 in |
| ⌝ | Filete | Uniones en T o a solape; el tamaño del cateto se indica a la izquierda del símbolo |
| ⌵ | Chaflán | Ranura preparada en un solo borde; el ángulo de chaflán se indica a la izquierda |
| □ | Tapón o ranura | Soldadura en agujero alargado o circular; la separación entre centros y el paso se indican a la derecha |
| ∟ | Borde o esquina | Soldadura de revestimiento o borde fundido, sin preparación de junta |

## Indicación de dimensiones y tolerancias

La norma AWS A2.4 no impone tolerancias de fabricación; es un estándar de representación gráfica. Sin embargo, toda la información dimensional necesaria para ejecutar la soldadura se incluye en el propio símbolo, respetando la siguiente disposición de campos (medidas en la misma celda, métrico e imperial donde corresponda).

| Campo | Dato que contiene | Ejemplo de valor |
|---|---|---|
| Izquierda del símbolo | Tamaño del cordón, garganta efectiva o profundidad de penetración | **a 6 mm / 0.24 in** (garganta) |
| Dentro del símbolo básico | Longitud del cordón de soldadura | **100 mm / 3.94 in** |
| Derecha del símbolo | Número de cordones intermitentes, paso o longitud de cada segmento | **3 × 50 (150) mm / 2.0 × 5.9 in** |
| Línea de referencia múltiple | Secuencia de operaciones o capas | Primera pasada: GTAW; segunda pasada: SMAW |

Los ángulos de bisel (por ejemplo, **30°**) y las aberturas de raíz (**2–4 mm / 0.08–0.16 in**) se anotan a la izquierda del símbolo de ranura. Cuando se requiere un cordón alrededor de todo el perímetro, se añade el círculo complementario en la intersección entre la línea de flecha y la de referencia.

## Materiales aplicables

La norma de simbología AWS A2.4 es independiente del material base y del metal de aporte. Se emplea en todos los sectores que utilizan soldadura por fusión, soldadura fuerte o blanda, y ensayos no destructivos, sin restricción alguna por el material a unir. Esto incluye:

- Aceros al carbono y aleados (estructurales, recipientes a presión)
- Aceros inoxidables (serie 300 y 400)
- Aleaciones de aluminio (series 2xxx, 5xxx, 6xxx, 7xxx)
- Aleaciones de titanio y níquel
- Cobre, latón y bronce
- Fundiciones grises y nodulares (con procesos de soldadura adecuados)

La cola del símbolo se reserva para identificar el proceso de soldadura (por ejemplo, GTAW, SMAW, FCAW) o la especificación del consumible, lo que garantiza la compatibilidad metalúrgica sin necesidad de cambiar la forma del símbolo básico.

## Ventajas y limitaciones

**Ventajas**

- Elimina ambigüedades en la interpretación de planos; un mismo símbolo es comprensible en cualquier taller que siga la norma.
- Centraliza en un solo elemento gráfico toda la información de la junta: geometría, dimensiones, proceso, metal de aporte y controles.
- Reduce notablemente el número de vistas y secciones necesarias en el dibujo técnico.
- Facilita la automatización y la lectura por parte de sistemas CAD/CAM que traducen símbolos a trayectorias de soldadura.

**Limitaciones**

- No proporciona directamente las tolerancias de fabricación; estas deben indicarse en notas complementarias del plano o en los códigos de diseño aplicables (por ejemplo, ASME B31.3).
- Curva de aprendizaje inicial para operarios que no conocen la norma; la mala colocación de un símbolo puede provocar defectos.
- La representación de cordones intermitentes complicados o secuencias de varias pasadas puede saturar el símbolo y requerir líneas de referencia múltiples.
- El uso de la cola no es obligatorio, lo que a veces omite datos críticos si los procedimientos de taller no están estandarizados.

## Guía de selección del símbolo correcto

1. **Identifique la geometría de la junta**. Determine si la unión es a tope, en T, a solape, en esquina o reborde. Esto decide el símbolo básico.
2. **Escoja el lado de la flecha**. La línea de flecha debe tocar la pieza que se prepara o donde se depositará el primer cordón. Para juntas simétricas, la flecha se dirige al lado que mejor represente la preparación.
3. **Coloque el tamaño de la soldadura**. A la izquierda del símbolo básico, anote la garganta efectiva (para filetes) o la profundidad de preparación (para ranuras). Si es un filete, el tamaño se antecede con la letra mayúscula **L** o directamente con la dimensión.
4. **Indique la longitud y el paso**. Para cordones intermitentes, escriba a la derecha del símbolo: longitud de cada segmento, guion, paso de centro a centro, y si es necesario, número de segmentos entre paréntesis.
5. **Añada símbolos suplementarios** si se requiere contorno (cóncavo, convexo, a ras) o respaldo.
6. **Complete la cola** con la especificación del proceso de soldadura (AWS A5.18 para acero al carbono, por ejemplo) o con la referencia al procedimiento calificado (WPS).
7. **Revise la línea de referencia discontinua**: si la soldadura debe hacerse en el lado opuesto a la flecha, el símbolo básico se coloca debajo de la línea continua; si es en ambos lados, se usa una línea doble continua o discontinua según la práctica de la empresa.

## Preguntas frecuentes (FAQ)

1. **¿Cuál es el espesor de línea recomendado para los símbolos de soldadura?**  
   **0.35 mm / 0.014 in** para hojas de dibujo tamaño A y B, **0.5 mm / 0.020 in** para C y D, y **0.7 mm / 0.028 in** para formatos E y superiores, conforme a AWS A2.4.

2. **¿Cuál es la longitud mínima de la línea de referencia?**  
   La práctica habitual recomienda al menos **100 mm / 4.0 in**, equivalente aproximadamente a dos veces la longitud total del símbolo, para garantizar claridad en la lectura.

3. **¿Cuántas líneas de referencia múltiples se pueden apilar?**  
   Se admiten hasta **4 líneas de referencia** consecutivas antes de que la interpretación se vuelva confusa; para uniones más complejas se prefiere el uso de notas adicionales.

4. **¿Qué dimensión debe tener la flecha?**  
   La longitud de la flecha es a criterio del dibujante, pero el ángulo de la punta debe ser de **15° a 30°** respecto a la línea de referencia, con una longitud mínima de la punta de **3 mm / 0.12 in**.

5. **¿Qué altura tiene el símbolo básico de filete?**  
   El símbolo del filete, a escala de dibujo, mide **3 mm / 0.12 in** de altura, coincidiendo con la altura normalizada de las cotas en los planos.

6. **¿Se puede omitir la cola del símbolo?**  
   Sí, la cola se omite cuando no hay necesidad de especificar el proceso, el metal de aporte o la norma de inspección; en esos casos, la línea de referencia termina en la cola de milano sin información adicional.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/piping-codes-standards-d_6.html
- **efunda.com**: https://www.efunda.com/forum/show_message.cfm?start=1&thread=8717&id=9057
- **manufacturingguide.com**: https://www.manufacturingguide.com/sv/ordlista/svetsbeteckning
