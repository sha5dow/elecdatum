---
title: "Tipos de enfriamiento de transformadores ONAN ONAF"
sidebar:
  label: "Tipos de enfriamiento de transformadores ONAN ONAF"
description: "Ficha tecnica: Tipos de enfriamiento de transformadores ONAN ONAF"
keywords: ["transformer cooling type ONAN ONAF OFAF", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-cooling-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La disipación del calor generado en un transformador es crítica para preservar la integridad del aislamiento y garantizar la vida útil del equipo. Los sistemas de enfriamiento se designan mediante un código de cuatro letras que describe el medio de refrigeración interno y externo, así como el modo de circulación. Este artículo aborda los métodos ONAN, ONAF y sus variantes forzadas, detallando sus principios de funcionamiento, capacidades y criterios de selección.

## Principio de generación de calor en transformadores

La principal fuente de calor en un transformador es la pérdida por efecto Joule en los devanados (pérdidas I²R), que representa la componente dominante frente a las pérdidas en el núcleo por histéresis y corrientes parásitas. Aproximadamente el 85 % de las pérdidas totales en un transformador de distribución típico se deben a las pérdidas en el cobre, mientras que el 15 % restante corresponde a pérdidas en el hierro. Si este calor no se disipa adecuadamente, la temperatura interna se eleva de forma continua, provocando la degradación térmica del aislamiento de papel y del medio líquido dieléctrico, y reduciendo drásticamente la vida útil del transformador.

| Componente de pérdida | Proporción típica |
| --- | --- |
| Pérdidas en el cobre (I²R) | 85 % |
| Pérdidas en el hierro (histéresis + Foucault) | 15 % |

## Clasificación según código IEC 60076

La norma IEC 60076 establece un sistema de cuatro letras para designar el método de enfriamiento. El significado de cada posición es el siguiente:

| Posición | Significado | Opciones comunes |
| --- | --- | --- |
| 1.ª letra | Medio de refrigeración interno en contacto con los devanados | O (aceite mineral), K (líquido aislante de alto punto de ignición), L (líquido aislante no mineral) |
| 2.ª letra | Modo de circulación del medio interno | N (natural), D (dirigida o forzada) |
| 3.ª letra | Medio de refrigeración externo | A (aire), W (agua) |
| 4.ª letra | Modo de circulación del medio externo | N (natural), F (forzada) |

## Enfriamiento ONAN (Oil Natural Air Natural)

El enfriamiento ONAN es el método más simple y se basa exclusivamente en la convección natural del aceite y del aire. El aceite caliente, al disminuir su densidad, asciende hacia la parte superior del tanque, donde cede calor a las paredes y a los radiadores. Al enfriarse, desciende por las partes laterales, estableciendo un ciclo de circulación continuo sin intervención de elementos mecánicos. La transferencia de calor al ambiente ocurre por convección y radiación natural desde la superficie exterior del tanque y los radiadores.

La capacidad de disipación está limitada por la superficie efectiva del tanque. Para mejorarla, se incorporan tubos, aletas o paneles de radiadores que aumentan el área de intercambio térmico.

| Parámetro | Valor típico ONAN |
| --- | --- |
| Velocidad de circulación del aceite | < 0,1 m/s / < 0,33 ft/s |
| Incremento de temperatura del aceite sobre el ambiente | 55 °C / 131 °F |
| Potencia máxima típica | Hasta 30 MVA |
| Pérdidas disipables por radiadores | 20 W/kVA a 50 W/kVA |

## Enfriamiento ONAF (Oil Natural Air Forced)

El método ONAF acelera la disipación de calor aplicando ventiladores que fuerzan el flujo de aire sobre las superficies de enfriamiento. El aceite continúa circulando por convección natural, pero el coeficiente de transferencia térmica en el lado del aire se multiplica al aumentar la velocidad del aire incidente. Esto permite incrementar la capacidad de carga del transformador sin exceder los límites de temperatura establecidos, o bien mantener la misma potencia con temperaturas de operación más bajas.

| Parámetro | Valor típico ONAF |
| --- | --- |
| Velocidad típica del aire forzado | 3 m/s a 6 m/s / 9,84 ft/s a 19,69 ft/s |
| Incremento de capacidad respecto a ONAN | 25 % a 33 % |
| Potencia máxima típica | Hasta 120 MVA |
| Nivel sonoro adicional por ventiladores | 65 dB a 75 dB |

## Enfriamiento OFAF (Oil Forced Air Forced)

En los sistemas OFAF se introduce circulación forzada del aceite mediante bombas, combinada con ventilación forzada del aire exterior. El aceite es impulsado a través de los devanados y del núcleo con caudales controlados, lo que incrementa notablemente el coeficiente de convección interna. El aceite caliente se conduce a intercambiadores de calor aire-aceite donde los ventiladores extraen el calor. Este método consigue la misma capacidad de enfriamiento que el ONAF en un volumen de tanque menor, o una capacidad superior en el mismo espacio.

| Parámetro | Valor típico OFAF |
| --- | --- |
| Caudal de aceite por bomba | 500 L/min a 2000 L/min / 132 gal/min a 528 gal/min |
| Incremento de capacidad respecto a ONAN | 50 % a 66 % |
| Potencia máxima típica | Hasta 400 MVA |
| Consumo propio de auxiliares | 0,2 % a 0,5 % de la potencia nominal |

## Pérdidas de calor según tamaño del transformador

Las pérdidas de calor que debe disipar el sistema de enfriamiento varían en función de la potencia nominal del transformador. A mayor potencia, la eficiencia del transformador aumenta y las pérdidas específicas por kVA disminuyen.

| Rango de potencia | Pérdidas de calor específicas |
| --- | --- |
| ≤ 150 kVA | 50 W/kVA |
| 150 kVA – 500 kVA | 30 W/kVA (aprox. 3 %) |
| 500 kVA – 1000 kVA | 25 W/kVA (aprox. 2,5 %) |
| 1000 kVA – 2500 kVA | 20 W/kVA (aprox. 2 %) |
| > 2500 kVA | 15 W/kVA (aprox. 1,5 %) |

## Comparación entre métodos de enfriamiento

La selección entre ONAN, ONAF y OFAF depende de la potencia nominal, el espacio disponible, las condiciones ambientales y las restricciones de ruido. La tabla siguiente resume las características diferenciales.

| Característica | ONAN | ONAF | OFAF |
| --- | --- | --- | --- |
| Circulación del aceite | Natural | Natural | Forzada (bombas) |
| Circulación del aire | Natural | Forzada (ventiladores) | Forzada (ventiladores) |
| Capacidad de sobrecarga | Baja | Media | Alta |
| Complejidad del sistema | Mínima | Baja | Media |
| Mantenimiento requerido | Muy bajo | Bajo (ventiladores) | Medio (bombas + ventiladores) |
| Potencia máxima típica | 30 MVA | 120 MVA | 400 MVA |

## Aplicaciones según rango de potencia

La elección del método de enfriamiento se alinea con rangos de potencia orientativos que responden a criterios económicos y técnicos.

| Rango de potencia | Método de enfriamiento recomendado | Ejemplo de aplicación |
| --- | --- | --- |
| Hasta 2,5 MVA | ONAN | Transformadores de distribución rural y urbana |
| 2,5 MVA – 30 MVA | ONAN con radiadores | Subestaciones de media tensión |
| 30 MVA – 120 MVA | ONAF | Subestaciones de transmisión |
| > 120 MVA | OFAF u OFWF | Grandes transformadores de potencia en centrales eléctricas |

## Modos de operación dual ONAN/ONAF

Muchos transformadores de potencia están diseñados para operar en modo dual ONAN/ONAF. A bajas cargas, funcionan exclusivamente con enfriamiento natural ONAN, minimizando el consumo de auxiliares y el ruido. Cuando la carga supera un umbral predefinido —generalmente entre el 60 % y el 70 % de la potencia nominal—, se activan automáticamente los ventiladores, conmutando al modo ONAF y aumentando la capacidad nominal del transformador.

> **P_ONAF = P_ONAN × (1 + ΔP)**, donde ΔP es el incremento porcentual de capacidad (0,25 a 0,33 típicamente).

| Parámetro | Modo ONAN | Modo ONAF |
| --- | --- | --- |
| Potencia continua | 60 % – 70 % de la nominal ONAF | 100 % de la nominal |
| Consumo de ventiladores | 0 kW | 2 kW a 10 kW / 2,68 hp a 13,4 hp |
| Temperatura máxima del aceite | 60 °C / 140 °F | 75 °C / 167 °F |

## Mantenimiento y consideraciones operativas

Los sistemas ONAN requieren únicamente inspección visual periódica de radiadores, verificación del nivel de aceite y limpieza de superficies para evitar obstrucciones al flujo de aire natural. En los sistemas ONAF se añade la revisión de los motores de los ventiladores, sus protecciones eléctricas y el control automático de arranque. Los sistemas OFAF incorporan además el mantenimiento de las bombas de aceite, incluyendo la verificación de sellos mecánicos, vibraciones y presión diferencial.

El monitoreo continuo de temperaturas mediante sensores de fibra óptica embebidos en los devanados permite optimizar la operación del sistema de enfriamiento y anticipar necesidades de mantenimiento predictivo.

| Actividad de mantenimiento | ONAN | ONAF | OFAF |
| --- | --- | --- | --- |
| Inspección visual de radiadores | Anual | Anual | Semestral |
| Limpieza de superficies de intercambio | Anual | Semestral | Semestral |
| Revisión de ventiladores | — | Trimestral | Trimestral |
| Revisión de bombas de aceite | — | — | Mensual |
| Verificación de protecciones eléctricas de auxiliares | — | Semestral | Trimestral |
| Análisis de vibraciones en bombas | — | — | Mensual |
| Medición de temperatura de devanados | Trimestral | Mensual | Continuo |

## Factores que limitan la capacidad de enfriamiento

La eficacia de cualquier sistema de enfriamiento puede verse comprometida por varios factores operativos y ambientales. La temperatura ambiente elevada reduce el gradiente térmico disponible para la transferencia de calor. Una altitud superior a 1000 m / 3281 ft sobre el nivel del mar disminuye la densidad del aire, afectando la capacidad de enfriamiento por convección tanto natural como forzada. La acumulación de suciedad, polvo o sedimentos en las superficies de los radiadores incrementa la resistencia térmica del sistema. La degradación del aceite con el tiempo eleva su viscosidad y reduce su capacidad de transferencia de calor.

| Factor limitante | Efecto sobre la capacidad de enfriamiento |
| --- | --- |
| Temperatura ambiente > 40 °C / 104 °F | Reducción del 3 % al 5 % por cada 5 °C / 9 °F adicionales |
| Altitud > 1000 m / 3281 ft | Reducción del 1 % por cada 100 m / 328 ft adicionales |
| Suciedad en radiadores (capa de 0,5 mm / 0,02 in) | Incremento de temperatura del aceite de 5 °C a 10 °C / 9 °F a 18 °F |
| Degradación del aceite (viscosidad +20 %) | Reducción de transferencia de calor del 8 % al 12 % |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia fundamental entre enfriamiento ONAN y ONAF?

La diferencia radica en el modo de circulación del aire externo. En ONAN, tanto la circulación del aceite como la del aire son naturales, sin asistencia mecánica. En ONAF, el aceite sigue circulando por convección natural, pero se añaden ventiladores que fuerzan el flujo de aire sobre los radiadores, incrementando la capacidad de disipación entre un 25 % y un 33 %.

### ¿Qué potencia máxima puede manejar un transformador con enfriamiento ONAN?

Un transformador con enfriamiento ONAN puede manejar típicamente hasta 30 MVA. Para potencias superiores, la superficie de disipación requerida sería excesivamente grande y antieconómica, siendo necesario recurrir a métodos de enfriamiento forzado como ONAF u OFAF.

### ¿Cómo afecta la temperatura ambiente al rendimiento del sistema ONAF?

Una temperatura ambiente superior a 40 °C / 104 °F reduce la capacidad de enfriamiento efectiva del sistema ONAF entre un 3 % y un 5 % por cada incremento de 5 °C / 9 °F. Esto obliga a limitar la carga del transformador o a sobredimensionar el sistema de ventilación forzada.

### ¿Cuánto aumentan las pérdidas de calor al pasar de un transformador de 500 kVA a uno de 2500 kVA?

Aunque las pérdidas totales en valor absoluto se incrementan, las pérdidas específicas disminuyen de 30 W/kVA (para el rango de 150 kVA – 500 kVA) a 20 W/kVA (para el rango de 1000 kVA – 2500 kVA), lo que refleja la mejora en la eficiencia de los transformadores de mayor potencia.

### ¿En qué consiste el modo de operación dual ONAN/ONAF?

El modo dual ONAN/ONAF permite que el transformador opere con enfriamiento natural ONAN hasta aproximadamente el 60 % o 70 % de la carga nominal, y commute automáticamente al modo ONAF activando los ventiladores cuando la carga supera ese umbral. Así se optimiza el consumo energético de los equipos auxiliares y se reduce el ruido en períodos de baja demanda.

### ¿Qué mantenimiento adicional requieren los sistemas OFAF frente a los ONAN?

El mantenimiento adicional en OFAF incluye la revisión mensual de las bombas de aceite (sellos, vibraciones, presión diferencial) y la verificación trimestral de las protecciones eléctricas de los motores, mientras que el sistema ONAN solo precisa inspección visual anual de radiadores y verificación del nivel de aceite.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/heat-gain-equipment-d_1668.html
- **electrical4u.com**: https://www.electrical4u.com/transformer-cooling-system-and-methods/
