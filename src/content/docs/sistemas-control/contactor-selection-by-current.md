---
title: "Selección de contactores por corriente"
sidebar:
  label: "Selección de contactores por corriente"
description: "Ficha tecnica: Selección de contactores por corriente"
keywords: ["contactor selection current rating table", "sistemas-control"]
category: "sistemas-control"
topic: "contactors"
subcategory: "contactor-selection"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La selección adecuada de contactores requiere analizar la corriente nominal del circuito y la categoría de servicio, con capacidades que abarcan desde 0,5 A en contactos auxiliares NEMA hasta 400 A en contactores de potencia IEC. El dimensionamiento depende del tipo de carga — motores, resistencias, iluminación — y de las condiciones de maniobra, siguiendo lineamientos de los estándares NEMA e IEC para asegurar la vida útil del dispositivo.

## Clasificación de contactos NEMA

La clasificación NEMA para contactos de control define diez niveles de corriente térmica que van desde 0,5 A hasta 10 A. La designación se compone de una letra que indica la corriente y la naturaleza de la carga, seguida de un número que establece la tensión máxima de diseño. Los contactos clase A soportan 10 A, clase B 5 A, clase C 2,5 A, clase D 1 A y clase E 0,5 A.

| Designación NEMA | Corriente térmica (A) | Tensión máxima de diseño (V) |
| --- | --- | --- |
| A150 | 10 | 150 |
| A300 | 10 | 300 |
| A600 | 10 | 600 |
| B150 | 5 | 150 |
| B300 | 5 | 300 |
| B600 | 5 | 600 |
| C150 | 2,5 | 150 |
| C300 | 2,5 | 300 |
| C600 | 2,5 | 600 |
| D150 | 1 | 150 |
| D300 | 1 | 300 |
| E150 | 0,5 | 150 |

Para contactos en circuitos de control con carga inductiva se utiliza la serie N, P, Q, R, que incorpora además el valor de potencia aparente de conmutación en voltamperios. Los contactos N soportan 275 VA hasta 600 V.

| Designación NEMA | Corriente térmica (A) | Tensión máxima (V) | Voltamperios máximos (VA) |
| --- | --- | --- | --- |
| N150 | 10 | 150 | 275 |
| N300 | 10 | 300 | 275 |
| N600 | 10 | 600 | 275 |
| P150 | 5 | 150 | 138 |
| P300 | 5 | 300 | 138 |
| P600 | 5 | 600 | 138 |
| Q150 | 2,5 | 150 | — |
| Q300 | 2,5 | 300 | — |
| Q600 | 2,5 | 600 | — |
| R150 | 1 | 150 | — |
| R300 | 1 | 300 | — |

## Contactores IEC y capacidad de corriente

Los contactores IEC abarcan corrientes de empleo desde 9 A hasta 400 A según el modelo constructivo, con potencias nominales que alcanzan 300 hp / 224 kW a 480 V CA. La gama se subdivide en tamaños compactos normalizados, donde los fabricantes suministran contactores de 9 A, 12 A, 18 A, 25 A, 32 A, 38 A, 50 A, 65 A, 80 A, 100 A, 125 A, 150 A y superiores.

| Serie o gama IEC | Corriente máxima (A) | Potencia máxima a 480 V (hp / kW) | Característica destacada |
| --- | --- | --- | --- |
| IronHorse HMC | 400 | 300 hp / 224 kW | Bobina electrónica, 3 polos, IP20 |
| Fuji Electric Odyssey | 361 | 300 hp / 224 kW | Bobina SUPERMAGNET™ AC/DC |
| Fuji Electric DUO | 150 | 100 hp / 75 kW | Integración directa con relés térmicos |
| WEG CWB | 125 | 100 hp / 75 kW | 1NA + 1NC auxiliar, montaje de supresor |
| Eaton CE15 Freedom | 32 | 20 hp / 15 kW | Diseño de 45 mm, hasta 2 millones de operaciones eléctricas |
| Schneider Easy TeSys | 38 | 20 hp / 15 kW | 1NA integrado, montaje en riel DIN |

## Factores determinantes en la selección

La corriente de empleo de un contactor puede reducirse hasta un 30 % respecto de su corriente térmica nominal cuando la categoría de servicio involucra arranques y paradas frecuentes o una alta inductancia.

La corriente de cortocircuito prospectiva, la temperatura ambiente, la altitud de instalación y la frecuencia de maniobras son los parámetros que obligan a aplicar factores de corrección. El desclasamiento típico por altitud se sitúa en 1 % por cada 100 m / 328 ft por encima de 1000 m / 3280 ft sobre el nivel del mar. La presencia de armónicos en la red fuerza a sobredimensionar el contactor entre un 10 % y un 20 %.

## Fórmula base de dimensionamiento por corriente

Para el cálculo rápido de la corriente que debe ser capaz de gobernar el contactor en una carga trifásica se emplea la siguiente expresión.

> **I = P / (√3 · V · cos φ · η)**

| Variable | Descripción | Unidad típica |
| --- | --- | --- |
| I | Corriente de línea a plena carga | A |
| P | Potencia mecánica en el eje | W o kW |
| V | Tensión nominal entre fases | V |
| cos φ | Factor de potencia de la carga | Adimensional (0 a 1) |
| η | Rendimiento del motor | Adimensional (0 a 1) |

El factor de servicio y el tipo de arranque —directo, estrella-triángulo, suave— modifican la corriente real que circula por los contactos y, por tanto, la especificación final del contactor. Bajo arranque a tensión reducida, la corriente de maniobra puede ser hasta un 58 % menor que en arranque directo, lo que permite elegir un tamaño inmediatamente inferior.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia principal entre corriente térmica y corriente de empleo en un contactor?

La corriente térmica es la máxima que los contactos principales soportan en régimen permanente sin sobrecalentarse, mientras que la corriente de empleo —definida por la categoría de servicio— incorpora las condiciones reales de cierre y apertura con carga. Para cargas inductivas, la corriente de empleo suele ser menor que la corriente térmica del contactor.

### ¿Cómo se selecciona el tamaño del contactor para un motor asincrónico?

Se toma la potencia nominal del motor en hp o kW, se consulta la tabla del fabricante para la tensión de trabajo y se elige el modelo cuya corriente de empleo iguale o supere la corriente a plena carga del motor. Después se verifica que la categoría de servicio (AC-3, AC-4) sea compatible con el ciclo de trabajo previsto.

### ¿Influye la temperatura ambiente en la capacidad de corriente del contactor?

Sí, de forma significativa. La mayoría de los contactores se especifican a 40 °C / 104 °F. Por encima de ese umbral se debe aplicar un factor de reducción que puede alcanzar el 15 % con temperaturas de 60 °C / 140 °F.

### ¿Se pueden regir cargas puramente resistivas con un contactor dimensionado para motores?

Sí, y bajo esa condición la capacidad de corriente es mayor. La categoría de servicio AC-1 permite explotar la corriente térmica nominal completa del contactor, sin limitaciones por picos de arranque.

### ¿Qué implica la designación NEMA A600 en contactos auxiliares?

El código A600 indica que los contactos soportan 10 A térmicos y pueden maniobrar circuitos de hasta 600 V, lo que los hace adecuados para la mayoría de las aplicaciones de enclavamiento y señalización en tableros industriales.

### ¿Es correcto sustituir un contactor NEMA por uno IEC respetando solo la corriente nominal?

No siempre. El dimensionamiento NEMA es más conservador y está tabulado directamente por potencia y tensión, mientras que el IEC exige verificar la categoría de servicio y la corriente de empleo específica. Una sustitución directa sin analizar estos factores puede reducir la vida útil del dispositivo.

## Fuentes consultadas

- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/motor_controls/iec_magnetic_contactors/iec_contactors
