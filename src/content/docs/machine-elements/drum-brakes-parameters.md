---
title: "Frenos de tambor parámetros"
sidebar:
  label: "Frenos de tambor"
description: "Ficha tecnica: Frenos de tambor parámetros"
keywords: ["drum brake design parameters", "machine-elements"]
category: "machine-elements"
topic: "clutches-brakes"
subcategory: "drum-brakes"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

El freno de tambor es un sistema de frenado por fricción donde un conjunto de zapatas o segmentos presionan radialmente contra la superficie interior de un tambor giratorio, generando el par de frenado que desacelera el vehículo o la maquinaria. Aunque ha sido ampliamente sustituido por el freno de disco en los ejes delanteros de automóviles modernos, mantiene una presencia significativa en aplicaciones traseras, vehículos industriales ligeros, maquinaria agrícola y como freno de estacionamiento integrado (drum-in-hat), gracias a su bajo coste de fabricación, capacidad de auto-energización y eficacia como mecanismo de retención estática.

## Principio de diseño

El par de frenado en un freno de tambor se genera mediante la expansión de dos zapatas internas, revestidas con material de fricción, contra la pista mecanizada del tambor. La fuerza de accionamiento, típicamente hidráulica a través de un cilindro de rueda, empuja las zapatas. El diseño se caracteriza por la auto-energización: la zapata primaria (o conductora) tiende a ser arrastrada por la rotación del tambor, incrustándose más y amplificando la fuerza de frenado, mientras que la secundaria (o arrastrada) es repelida, resultando en un desgaste asimétrico.

| Parámetro geométrico | Rango típico | Descripción |
|---|---|---|
| Diámetro del tambor | 180 – 420 mm / 7.1 – 16.5 in | Valor estándar para turismos y vehículos comerciales ligeros. |
| Ancho del forro | 25 – 75 mm / 1.0 – 3.0 in | Variable según la capacidad de carga térmica requerida. |
| Espesor del forro | 3,0 – 5,0 mm / 0.12 – 0.20 in | Espesor del material de fricción antes de alcanzar el desgaste máximo. |
| Holgura zapata-tambor | 0,15 – 0,30 mm / 0.006 – 0.012 in | Holgura diametral en reposo, ajustada automáticamente en sistemas modernos. |
| Ángulo del arco del forro | 90° – 130° | Define la extensión del contacto y la distribución de presión en la zapata. |

## Capacidades de par de frenado

El par de frenado es la capacidad fundamental del tambor para disipar energía cinética. Su cálculo deriva de la fuerza de accionamiento, el coeficiente de fricción del forro y el radio interior del tambor. La geometría de doble zapata interna produce un par de frenado efectivo que varía con la dirección de giro.

| Parámetro de rendimiento | Rango típico | Notas |
|---|---|---|
| Par de frenado máximo por eje | 800 – 6500 N·m / 590 – 4794 lb·ft | Para un eje trasero equipado con tambores de 228 a 305 mm (9–12 in). |
| Presión de accionamiento hidráulica | 2,0 – 6,0 MPa / 290 – 870 psi | Máxima durante una frenada de emergencia en circuitos sin asistencia excesiva. |
| Temperatura superficial del tambor | 200 – 400 °C / 392 – 752 °F | Rango operativo; puede alcanzar picos de 500–600 °C (932–1112 °F) en uso severo. |
| Factor de auto-energización | 1,5 – 3,0 | Relación entre la fuerza tangencial de frenado y la fuerza radial de accionamiento. |
| Capacidad de freno de estacionamiento | 20 – 35 % | Porcentaje de la capacidad de frenado de servicio en retención estática en pendiente. |

## Parámetros de fricción del forro

El coeficiente de fricción (μ) del material compuesto del forro determina la eficiencia de frenado y su estabilidad térmica. Los forros orgánicos sin amianto (NAO) y semimetálicos presentan un μ estable entre 0,30 y 0,40, aunque su valor disminuye con la temperatura (fade). El diseño del tambor debe garantizar un contacto uniforme para evitar vibraciones y el fenómeno de judder.

| Propiedad del forro | Valor nominal | Comentario |
|---|---|---|
| Coeficiente de fricción dinámico (μ) a 100 °C / 212 °F | 0,32 – 0,40 | Rango estándar medido según ensayos SAE J661 / ISO 6312. |
| Coeficiente de fricción en caliente a 300 °C / 572 °F | 0,25 – 0,35 | Caída típica (fade); forros premium mantienen μ > 0,30. |
| Dureza del forro (escala Rockwell L) | 60 – 90 HRL | Afecta el desgaste del tambor y la generación de ruido. |
| Tasa de desgaste admisible | 0,5 – 1,5 mm³/N·m / 3.1e-5 – 9.3e-5 in³/lb·in | Por unidad de energía disipada, según normas de desgaste. |
| Temperatura máxima de servicio continuo | 350 °C / 662 °F | Límite para forros orgánicos; superarlo causa degradación acelerada de la resina. |

## Selección por aplicación

La selección del tamaño del tambor y el tipo de forro se basa en la masa del vehículo, la distribución de frenado y el ciclo de trabajo. Los sistemas con mayor exigencia térmica utilizan tambores de fundición gris perlítica con aletas de refrigeración exteriores, mientras que las aplicaciones ligeras recurren a tambores de chapa embutida o fundición nodular.

| Aplicación típica | Diámetro x Ancho de tambor | Material del tambor | Tipo de forro recomendado |
|---|---|---|---|
| Automóvil utilitario trasero | 200 x 40 mm / 7.9 x 1.6 in | Fundición gris GG20 | NAO (orgánico sin amianto) |
| Furgoneta de reparto | 254 x 57 mm / 10.0 x 2.2 in | Fundición gris GG25 | Semimetálico de baja agresividad |
| Remolque agrícola | 305 x 65 mm / 12.0 x 2.6 in | Fundición nodular GGG50 | Semimetálico para alta carga |
| Maquinaria de elevación | 355 x 75 mm / 14.0 x 3.0 in | Fundición perlítica de alta resistencia | Forro sinterizado metálico |
| Carretilla industrial | 180 x 35 mm / 7.1 x 1.4 in | Chapa de acero embutida | Orgánico flexible de bajo ruido |

## Configuraciones de montaje y accionamiento

El montaje del conjunto se realiza sobre una placa de anclaje rígida que absorbe el par de reacción. El sistema de accionamiento hidráulico utiliza un cilindro de rueda con dos pistones opuestos, mientras que el ajuste de holgura se confía a un mecanismo de trinquete o de regulación por cuña. El sistema de freno de estacionamiento se integra mediante un cable mecánico que actúa sobre una palanca solidaria a la zapata secundaria.

| Componente de montaje | Característica | Especificación típica |
|---|---|---|
| Placa de anclaje | Acero estampado S355MC | Espesor 2,5 – 4,0 mm / 0.10 – 0.16 in |
| Cilindro de rueda | Fundición de aluminio o hierro | Diámetro de pistón 17,5 – 31,8 mm / 0.69 – 1.25 in |
| Resorte de retorno | Acero para muelles C75S | Fuerza de retorno 80 – 200 N / 18 – 45 lb |
| Mecanismo ajustador | Trinquete con rueda dentada | Paso de ajuste 0,3 – 0,5 mm por ciclo / 0.012 – 0.020 in |
| Apoyo de zapata | Perno anclado al plato | Diámetro 12 – 18 mm / 0.47 – 0.71 in en hierro nodular |

## Preguntas frecuentes

**¿Cuál es el rango típico del par de frenado máximo para un freno de tambor de 250 mm (10 in)?** El par máximo se sitúa entre 1500 y 2800 N·m (1106 a 2065 lb·ft) para una sola rueda, dependiendo del coeficiente de fricción del forro y de la presión de accionamiento. La configuración de zapata doble auto-energizada optimiza este valor en marcha adelante.

**¿Cómo varía el coeficiente de fricción con la temperatura?** Un forro orgánico estándar con μ nominal de 0,38 a 100 °C (212 °F) experimenta una reducción a aproximadamente 0,28 al alcanzar 300 °C (572 °F). Superado este umbral, la resina fenólica del ligante se degrada, causando una caída de rendimiento (fade) a valores inferiores a 0,20.

**¿Cuál es la presión hidráulica de accionamiento que no debe superarse en un sistema de tambor trasero?** En sistemas con válvula compensadora, la presión máxima en los cilindros traseros de tambor se limita a 4,5–5,5 MPa (650–800 psi) para evitar el bloqueo prematuro del eje trasero antes del delantero, que equipa discos.

**¿Qué espesor mínimo de forro debe mantenerse para una operación segura?** El espesor mínimo admisible del material de fricción, medido en el punto central del forro, es de 1,0–1,5 mm (0.04–0.06 in) por encima de la cabeza de los remaches o de la placa soporte. La inspección debe realizarse con el tambor desmontado.

**¿Cómo se determina el diámetro interior máximo de un tambor en servicio?** El diámetro interior no debe exceder el diámetro nominal en más de 1,5–2,0 mm (0.060–0.080 in), valor que usualmente se encuentra grabado en la periferia del tambor. Superar este límite reduce la rigidez estructural y aumenta el riesgo de rotura por fatiga térmica.

**¿Cuál es la temperatura superficial que puede alcanzar la pista del tambor en una frenada de emergencia desde 90 km/h (56 mph) con carga máxima?** La temperatura superficial de la pista de fricción puede superar los 500 °C (932 °F) en un intervalo de 2 a 3 segundos, lo que exige un material de tambor con buena conductividad térmica y resistencia al revenido para evitar la deformación y el agrietamiento térmico.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/disk-brakes-d_1808.html
- **mcmaster.com**: https://www.mcmaster.com/cad-models
