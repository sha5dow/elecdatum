---
title: "Conexiones delta y estrella comparativa"
sidebar:
  label: "Conexiones delta y estrella comparativa"
description: "Ficha tecnica: Conexiones delta y estrella comparativa"
keywords: ["delta wye connection comparison three phase", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "single-three-phase"
subcategory: "delta-wye"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Las conexiones delta (Δ) y estrella (Y) constituyen los dos métodos fundamentales para interconectar los devanados de fuentes y cargas en sistemas trifásicos de corriente alterna. La elección entre ellas determina la relación entre tensiones de línea y de fase, la disponibilidad de neutro, el comportamiento frente a cargas desequilibradas y la circulación de corrientes armónicas. En aplicaciones industriales, comerciales y de distribución, la configuración delta se emplea principalmente para cargas trifásicas puras como motores, mientras que la configuración estrella permite disponer de un conductor neutro para alimentar cargas monofásicas a una tensión reducida.

## Conexión estrella (Y)

La conexión estrella, también denominada Y o wye, se caracteriza por unir un terminal de cada uno de los tres devanados en un punto común llamado neutro. Los otros tres terminales se conectan a las líneas de alimentación. La tensión de línea es igual a la tensión de fase multiplicada por la raíz cuadrada de tres, mientras que la corriente de línea es idéntica a la corriente de fase. El punto neutro puede conectarse a tierra o utilizarse como cuarto conductor, permitiendo disponer de dos niveles de tensión en un mismo sistema. Las configuraciones más habituales en baja tensión son 230/400 V en Europa y 120/208 V en Norteamérica.

| Parámetro | Relación en estrella |
|---|---|
| Tensión de línea (VL) | **VL = √3 × VF** |
| Corriente de línea (IL) | **IL = IF** |

## Conexión delta (Δ)

En la conexión delta los tres devanados se conectan en un lazo cerrado, formando un triángulo. Cada línea se conecta a un vértice del triángulo, por lo que la tensión de línea es exactamente igual a la tensión de fase. La corriente de línea es la suma vectorial de las corrientes de dos fases adyacentes y equivale a √3 veces la corriente de fase. Esta configuración carece de punto neutro; por tanto, solo suministra una única tensión entre fases. La ausencia de neutro y la capacidad de hacer circular corrientes de tercera armónica internamente la hacen idónea para alimentar grandes motores trifásicos y para el primario de transformadores de distribución.

| Parámetro | Relación en delta |
|---|---|
| Tensión de línea (VL) | **VL = VF** |
| Corriente de línea (IL) | **IL = √3 × IF** |

## Relaciones de voltaje y corriente

La relación entre tensiones y corrientes de línea y de fase es el factor diferencial más relevante entre ambas configuraciones. En todos los casos se considera un sistema trifásico balanceado con secuencia positiva. Las fórmulas fundamentales se resumen a continuación.

> **VL(Y) = √3 × VF(Y) ; IL(Y) = IF(Y)**  
> **VL(Δ) = VF(Δ) ; IL(Δ) = √3 × IF(Δ)**

| Magnitud | Estrella (Y) | Delta (Δ) |
|---|---|---|
| Tensión de línea – VL | √3 × VF ≈ 1,732 × VF | VF |
| Corriente de línea – IL | IF | √3 × IF ≈ 1,732 × IF |
| Desfase VL – VF | 30° (línea adelanta a fase) | 0° |
| Desfase IL – IF | 0° | 30° (línea retrasa a fase) |
| Disponibilidad de neutro | Sí | No |

Para un sistema trifásico equilibrado, la potencia activa total se calcula con independencia de la conexión mediante la expresión:

> **P = √3 × VL × IL × cos φ**

Donde cos φ es el factor de potencia de la carga.

## Tabla comparativa

| Característica | Conexión estrella (Y) | Conexión delta (Δ) |
|---|---|---|
| Número de conductores | 3 o 4 (con neutro) | 3 |
| Tensión de línea / fase | VL = √3 × VF | VL = VF |
| Corriente de línea / fase | IL = IF | IL = √3 × IF |
| Neutro disponible | Sí | No |
| Tensiones normalizadas típicas | 230/400 V / 230/400 V; 120/208 V / 120/208 V | 240 V / 240 V; 400 V / 400 V; 480 V / 480 V |
| Comportamiento con carga desequilibrada | Requiere neutro para estabilizar tensiones de fase | Menos sensible en sistemas de 3 hilos |
| Circulación de 3.ᵉʳ armónico | No circula internamente; puede aparecer en el neutro | Circula por el lazo cerrado, no por las líneas |
| Corriente de cortocircuito fase-tierra | Depende de la impedancia de puesta a tierra del neutro | Baja o nula si no hay referencia a tierra |
| Aplicación típica | Distribución en baja tensión, alumbrado, tomas de corriente | Alimentación de motores trifásicos, primario de transformadores |

## Ventajas y desventajas

**Ventajas de la conexión estrella (Y)**
- Proporciona dos niveles de tensión: fase-neutro y fase-fase, lo que permite alimentar cargas monofásicas y trifásicas desde el mismo sistema.
- El punto neutro puede conectarse a tierra, mejorando la seguridad y facilitando la detección de fallas a tierra.
- Menor tensión por devanado para una misma tensión de línea, lo que reduce el esfuerzo dieléctrico en los aislamientos.

**Desventajas de la conexión estrella (Y)**
- Ante cargas fuertemente desequilibradas y ausencia de neutro, las tensiones de fase pueden desviarse significativamente de los valores nominales.
- Las corrientes de tercera armónica y sus múltiplos pueden circular por el neutro, provocando sobrecalentamiento si no se dimensiona adecuadamente.

**Ventajas de la conexión delta (Δ)**
- Permite la circulación de corrientes de tercera armónica dentro del lazo cerrado, evitando que se inyecten a la red y distorsionen la forma de onda.
- Mayor corriente de línea disponible para una misma corriente de fase, lo que puede representar una ventaja en el arranque de motores.
- No requiere neutro, simplificando la instalación en sistemas puramente trifásicos.

**Desventajas de la conexión delta (Δ)**
- Al no disponer de neutro, no es posible obtener una tensión reducida para cargas monofásicas sin un transformador adicional.
- En caso de falla de una fase, la configuración en delta abierto reduce la capacidad de potencia al 57,7 % del valor nominal y puede provocar desequilibrios severos.
- Una falla a tierra en una fase puede pasar inadvertida durante largos períodos si el sistema opera aislado de tierra, ya que no circula corriente de cortocircuito significativa.

## Aplicaciones comunes

**Conexión estrella (Y)**
- Redes de distribución secundaria en entornos comerciales y residenciales: sistema 120/208 V trifásico de 4 hilos en Norteamérica y 230/400 V en Europa.
- Secundario de transformadores de distribución donde se requiere neutro accesible.
- Bancos de condensadores para corrección de factor de potencia con neutro conectado a tierra.
- Generadores síncronos de centrales eléctricas, cuyo estator se conecta normalmente en estrella para disponer de neutro y facilitar protecciones.

**Conexión delta (Δ)**
- Alimentación de motores trifásicos de inducción de potencia media y alta, especialmente en arranque directo.
- Primario de transformadores de distribución y de potencia, donde se aprovecha la circulación de terceros armónicos.
- Redes de transporte y subtransmisión sin neutro (sistemas de 3 hilos en delta a 240, 400, 480 o 600 V, utilizadas en aplicaciones industriales).
- Configuración en delta abierto para situaciones de emergencia o ampliaciones temporales con solo dos transformadores monofásicos.

## Conexiones de transformador Δ-Y

Los transformadores trifásicos pueden implementar combinaciones de conexiones delta y estrella en primario y secundario. La configuración delta-estrella (Δ-Y) es la más extendida en distribución, ya que combina las ventajas de ambas topologías: el primario en delta elimina las corrientes de tercer armónico de la línea primaria, mientras que el secundario en estrella proporciona un neutro accesible para cargas monofásicas. Esta conexión introduce un desfase de 30° entre las tensiones primarias y secundarias, que debe ser considerado al operar transformadores en paralelo.

| Conexión | Primario | Secundario | Relación de transformación | Desfase | Aplicación típica |
|---|---|---|---|---|---|
| Δ-Δ | Delta | Delta | VL1 / VL2 | 0° | Cargas industriales trifásicas sin neutro |
| Y-Y | Estrella | Estrella | VL1 / VL2 | 0° | Sistemas con neutro en ambos lados; sensible a terceros armónicos |
| Δ-Y | Delta | Estrella | √3 × VL1 / VL2 | 30° | Transformador de distribución: reducción de media a baja tensión |
| Y-Δ | Estrella | Delta | VL1 / (√3 × VL2) | 30° | Elevador en centrales generadoras o final de línea |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia práctica hay entre una conexión delta y una estrella?

La diferencia más práctica es que la conexión estrella proporciona un punto neutro, lo que permite tener dos niveles de tensión (fase-neutro y fase-fase) y alimentar cargas monofásicas sin necesidad de transformador adicional. La conexión delta solo entrega una tensión entre fases y carece de neutro, siendo ideal para cargas exclusivamente trifásicas como motores.

### ¿Cuándo se debe elegir una conexión delta frente a una estrella?

Se prefiere la conexión delta cuando la carga es puramente trifásica y equilibrada, como grandes motores, o cuando se desea evitar la circulación de corrientes de tercer armónico hacia la red. También se usa en el primario de transformadores de distribución para aprovechar su capacidad de filtrar armónicos internamente.

### ¿Por qué en una conexión delta la corriente de línea es mayor que la de fase?

Porque cada conductor de línea recibe la contribución de dos fases adyacentes. La suma vectorial de estas dos corrientes, desfasadas 120° entre sí, da como resultado una corriente de línea de magnitud √3 veces la corriente de fase, lo que equivale aproximadamente a 1.732 veces.

### ¿Cómo se identifican visualmente los bornes en una conexión delta o estrella?

En esquemas normalizados, la conexión estrella se representa con tres devanados unidos por un extremo en un punto común (Y). La conexión delta se dibuja como un triángulo cerrado (Δ) con los vértices conectados a las líneas. En bornes reales, la conexión estrella tiene puentes que unen un extremo de cada bobina, mientras que en delta los puentes forman el lazo completo.

### ¿Se pueden conectar cargas monofásicas a un sistema en delta?

Sí, conectándolas entre dos fases. La tensión disponible será la tensión de línea del sistema delta. Sin embargo, debe verificarse que la carga monofásica no desequilibre excesivamente el sistema y que su tensión nominal coincida con la tensión de línea disponible.

### ¿Cuál es la tensión fase-neutro en un sistema en estrella si la tensión de línea es 400 V?

La tensión fase-neutro es 400 V dividido por √3, aproximadamente 230 V. Este es el principio que permite, por ejemplo, que en una red europea de 400 V entre fases se tengan 230 V entre fase y neutro para usos domésticos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-distribution-systems-usa-europe-d_2214.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-10/three-phase-y-delta-configurations/
- **electrical4u.com**: https://www.electrical4u.com/transformer-connections/
