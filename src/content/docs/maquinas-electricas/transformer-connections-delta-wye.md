---
title: "Conexiones de transformadores delta estrella"
sidebar:
  label: "Conexiones de transformadores delta estrella"
description: "Ficha tecnica: Conexiones de transformadores delta estrella"
keywords: ["transformer connections delta wye Dyn Yyn", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-connections"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La conexión delta-estrella (Δ‑Y) es la configuración predominante en transformadores de distribución trifásicos a nivel mundial, caracterizada por un devanado primario conectado en delta y un secundario en estrella, lo que permite disponer de una tensión de línea típica de **400 V / 400 V** en el secundario a partir de **11 kV / 11 kV** en el primario. Su principal ventaja es la capacidad de suministrar simultáneamente cargas trifásicas y monofásicas gracias al neutro accesible del lado estrella, además de bloquear las corrientes armónicas de tercera orden en el primario.

## Configuración delta-estrella (Δ-Y)
La conexión delta-estrella se construye cerrando las tres bobinas primarias en triángulo (delta) y uniendo un extremo de cada bobina secundaria en un punto común que constituye el neutro (estrella). El terminal neutro se pone a tierra y se conduce como cuarto hilo de distribución. La designación normalizada IEC más frecuente es **Dyn11**: “D” indica primario en delta, “y” secundario en estrella, “n” neutro accesible y “11” el índice horario que representa un desfase de 30° entre tensiones de línea primaria y secundaria. Una variante sin neutro accesible se denomina **Dy11**.

## Desfase angular
El desfase angular introducido por la conexión delta‑estrella tiene un valor fundamental de **30° / 30°** (índice horario 11), aunque dependiendo del marcado y la orientación de las bobinas pueden aparecer desfases de **150° / 150°**, **210° / 210°** o **330° / 330°**. Esta rotación de fase impide la puesta en paralelo directa con transformadores que no presenten el mismo desfase, como las configuraciones estrella‑estrella o delta‑delta, a menos que se utilicen desfasadores adicionales.

| Conexión | Índice horario | Tensión de línea primaria | Tensión de línea secundaria | Desfase angular |
|----------|----------------|---------------------------|-----------------------------|-----------------|
| Dyn11 | 11 | 11 kV / 11 kV | 400 V / 400 V | 30° / 30° |
| Dyn5 | 5 | 13.8 kV / 13.8 kV | 480 V / 480 V | 150° / 150° |
| Dyn1 | 1 | 33 kV / 33 kV | 1000 V / 1000 V | 330° / 330° |
| Dyn7 | 7 | 6.6 kV / 6.6 kV | 380 V / 380 V | 210° / 210° |

## Relación de transformación
La relación entre las tensiones compuestas de línea del primario (Δ) y del secundario (Y) depende de la relación de espiras por fase y del factor de conexión. Para un transformador ideal se cumple:

> **V<sub>LLp</sub> / V<sub>LLs</sub> = a / √3**

donde a = N<sub>1</sub>/N<sub>2</sub> es la relación de espiras entre el primario y el secundario. La división por √3 aparece porque en el lado estrella la tensión de fase es la de línea dividida por √3, mientras que en delta ambas coinciden. Por ejemplo, con una relación de espiras a = 47,6, una tensión primaria de 11 kV / 11 kV produce en el secundario 400 V / 400 V de línea y 230 V / 230 V de fase.

| Variable | Símbolo | Unidad |
|----------|---------|--------|
| Tensión de línea primaria | V<sub>LLp</sub> | V / V |
| Tensión de línea secundaria | V<sub>LLs</sub> | V / V |
| Relación de espiras por fase | a = N<sub>1</sub>/N<sub>2</sub> | adimensional |
| Factor de conexión | √3 ≈ 1.732 | adimensional |
| Tensión fase‑neutro secundaria | V<sub>LN</sub> = V<sub>LLs</sub> / √3 | V / V |

## Ventajas
- Disponibilidad de neutro accesible para cargas monofásicas y puesta a tierra.
- Circulación de corrientes armónicas de tercera orden dentro del triángulo primario, lo que impide su propagación a la red de alimentación.
- Flexibilidad para suministrar simultáneamente cargas trifásicas y monofásicas en un mismo sistema.
- Mejor aprovechamiento del aislamiento en el lado estrella, ya que la tensión de fase es menor que la de línea.
- Reducción del desequilibrio de tensiones en el secundario gracias al neutro sólidamente conectado a tierra.

## Limitaciones
- Desfase fijo de **30° / 30°** (o múltiplos) que impide el acoplamiento directo con transformadores de otros grupos de conexión sin adaptación.
- Requiere una protección específica contra sobrecargas en el neutro cuando circulan intensas corrientes de desequilibrio.
- La puesta en paralelo con otros transformadores solo es posible si comparten idénticos índice horario, relación de transformación y tensión de cortocircuito.
- En el lado estrella, la tensión entre fase y tierra puede ser mayor que en configuraciones delta‑delta aisladas, lo que puede exigir mayor nivel de aislamiento.
- Los huecos de tensión y las corrientes de inserción pueden ser más elevados debido a la inductancia del neutro y a la saturación del núcleo.

## Aplicaciones típicas
- Transformadores de distribución en redes de media a baja tensión (ej. 11 kV / 11 kV a **400/230 V / 400/230 V** en sistemas IEC; **13.8 kV / 13.8 kV** a **480/277 V / 480/277 V** en sistemas ANSI).
- Alimentación de edificios comerciales, industrias y zonas residenciales de alta densidad que combinan motores trifásicos con iluminación y equipos monofásicos.
- Subestaciones de parques eólicos y plantas fotovoltaicas donde se requiere un neutro franco a tierra para conectar inversores y transformadores de potencia.
- Centros de transformación en plataformas petrolíferas y minería, donde la disponibilidad del neutro es fundamental para la seguridad de las instalaciones.
- Sistemas de distribución secundaria en redes subterráneas urbanas, especialmente en Europa y América del Norte.

## Comparación con otras conexiones
| Conexión | Neutro accesible | Supresión de 3.ᵉʳ armónico | Desfase típico | Aplicación principal |
|----------|------------------|----------------------------|----------------|---------------------|
| Delta‑Delta (Δ‑Δ) | No | No (circula en Δ) | 0° / 0° | Motores industriales, transmisión a larga distancia |
| Estrella‑Estrella (Y‑Y) | Sí | No (requiere terciario) | 0° / 0° o 180° / 180° | Grandes transformadores de potencia con terciario en δ |
| Delta‑Estrella (Δ‑Y) | Sí | Sí (circula en Δ primario) | 30° / 30° | Distribución a baja tensión con cargas mixtas |
| Estrella‑Delta (Y‑Δ) | No (primario Y con neutro opcional) | Sí (circula en Δ secundario) | 30° / 30° | Elevación de tensión en generadores |

## Preguntas frecuentes (FAQ)
### ¿Qué tensión secundaria se obtiene de un transformador delta‑estrella con relación de espiras a = 47,6 y alimentación en 11 kV / 11 kV?
   Aplicando la fórmula V<sub>LLs</sub> = V<sub>LLp</sub> × √3 / a = 11 kV × 1,732 / 47,6 se obtienen **400 V / 400 V** de línea y **230 V / 230 V** de fase.

### ¿Por qué el desfase angular en una conexión delta‑estrella es siempre de 30° o múltiplos?
   La diferencia de **30° / 30°** se debe al producto de los desfases introducidos por los bobinados y la propia topología; según la disposición de las bobinas pueden aparecer **150° / 150°**, **210° / 210°** o **330° / 330°**, pero todos son submúltiplos de 180°.

### ¿Cómo se suprimen los armónicos de tercera orden en una conexión delta‑estrella?
   Las corrientes de tercera armónica, todas en fase, encuentran un camino cerrado dentro del triángulo del primario, circulando exclusivamente por el devanado en delta, lo que elimina su propagación a la red de alimentación y evita distorsiones en la onda de tensión secundaria.

### ¿Se pueden conectar en paralelo dos transformadores delta‑estrella de distinto índice horario?
   No, salvo que se empleen transformadores desfasadores o se realice la conexión con un desfase corregido; la diferencia de **30° / 30°** o más provoca corrientes de circulación internas que pueden dañar los equipos.

### ¿Qué ocurre si se pierde el neutro en el secundario estrella de un transformador delta‑estrella?
   Al desaparecer el neutro, las cargas monofásicas quedan sin referencia estable, y si el sistema está desequilibrado, las tensiones de fase pueden alcanzar valores peligrosos que sobrepasen los **480 V / 480 V** de diseño en un sistema de **277 V / 277 V**.

### ¿Cuál es la principal ventaja de una conexión delta‑estrella en sistemas de distribución industrial?
   Permite alimentar motores trifásicos a **480 V / 480 V** y, simultáneamente, ofrecer circuitos de iluminación y tomas a **277 V / 277 V** con el mismo transformador, optimizando la inversión y el espacio en la subestación.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-distribution-systems-usa-europe-d_2214.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-connections/
