---
title: "Comparativa de normas de calidad de energía"
sidebar:
  label: "Comparativa de normas de calidad de energía"
description: "Ficha tecnica: Comparativa de normas de calidad de energía"
keywords: ["power quality standards comparison IEEE IEC", "calidad-energia"]
category: "calidad-energia"
topic: "power-factor-quality"
subcategory: "power-quality-standards-comparison"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La calidad de energía eléctrica es un requisito fundamental para la operación segura y eficiente de los equipos industriales, comerciales y residenciales. Las normas internacionales definen los límites admisibles para perturbaciones como armónicos, fluctuaciones de tensión, desequilibrios y variaciones de frecuencia, estableciendo un marco común de compatibilidad entre la red y las cargas conectadas. La comparación entre las principales normas —IEEE 519, IEC 61000, EN 50160— permite seleccionar los criterios más adecuados para cada aplicación y asegurar el cumplimiento regulatorio.

## Definición y parámetros de calidad de energía

La calidad de energía se define como el grado en que la tensión, la frecuencia y la forma de onda del suministro eléctrico se ajustan a las especificaciones establecidas. Una calidad adecuada implica una tensión de alimentación estable dentro del rango prescrito, una frecuencia alterna cercana al valor nominal y una curva de tensión de forma sinusoidal libre de deformaciones apreciables.

Los parámetros más relevantes para caracterizar la calidad del suministro son:

- **Continuidad del servicio**: Clasificación de las interrupciones (breves, largas, transitorias) según su duración y frecuencia de ocurrencia.
- **Variaciones de tensión en régimen permanente**: Desviaciones lentas del valor eficaz respecto al valor nominal, normalmente expresadas como porcentaje.
- **Huecos de tensión (dips/sags)** y **sobretensiones temporales (swells)**: Reducciones o aumentos del valor eficaz de la tensión entre el 10 % y el 90 % durante tiempos que van de medio ciclo a un minuto.
- **Transitorios (sobretensiones impulsionales)**: Incrementos muy breves (microsegundos a milisegundos) de alta energía causados por descargas atmosféricas o maniobras.
- **Parpadeo (flicker)**: Variaciones cíclicas o aleatorias de la tensión que provocan cambios perceptibles en la emisión luminosa de lámparas.
- **Armónicos**: Componentes sinusoidales de frecuencia múltiplo entero de la fundamental que distorsionan la forma de onda.
- **Desequilibrio de tensión**: Diferencia entre los módulos o los ángulos de fase de las tensiones en un sistema trifásico.

## Principales normas internacionales

Las tres familias normativas dominantes en calidad de energía son las emitidas por IEEE (Institute of Electrical and Electronics Engineers), IEC (International Electrotechnical Commission) y CENELEC (Comité Européen de Normalisation Electrotechnique), con la norma EN 50160 como referencia europea. Cada una aborda distintos aspectos de las perturbaciones y define límites, métodos de medición y procedimientos de evaluación.

- **IEEE 519-2022**, *Recommended Practice and Requirements for Harmonic Control in Electric Power Systems*, establece los límites de distorsión armónica de tensión y corriente en el punto de acoplamiento común (PCC), así como los límites de interarmónicos y la tasa de distorsión total de la demanda (TDD).
- **IEEE 1159-2019**, *Recommended Practice for Monitoring Electric Power Quality*, clasifica los fenómenos electromagnéticos que afectan la calidad de la energía y proporciona directrices para la instrumentación y el monitoreo.
- **IEC 61000-3-2**, *Limits for harmonic current emissions (equipment input current ≤ 16 A per phase)*, fija los límites de emisión de armónicos de corriente para equipos conectados a la red pública de baja tensión.
- **IEC 61000-4-30**, *Testing and measurement techniques – Power quality measurement methods*, define los métodos de medición y los intervalos de agregación para todos los parámetros de calidad de energía, garantizando la comparabilidad internacional de los resultados.
- **EN 50160:2022**, *Voltage characteristics of electricity supplied by public electricity networks*, especifica las características de la tensión en los puntos de suministro de las redes públicas de baja y media tensión en Europa, incluyendo límites para frecuencia, amplitud, flicker, armónicos y desequilibrio.

## Comparativa de límites normativos

Cada norma establece umbrales y metodologías particulares que difieren en el punto de evaluación, el método de agregación temporal y los valores límite. La tabla siguiente resume los límites más representativos de los parámetros principales según IEEE 519, IEC 61000 y EN 50160 para sistemas de baja tensión.

| Parámetro | IEEE 519-2022 | IEC 61000-3-2 / -4-30 | EN 50160:2022 |
|---|---|---|---|
| Distorsión armónica total de tensión (THDv) | 5 % (sistemas de hasta 69 kV) | 8 % (compatibilidad, según IEC 61000-2-2) | 8 % (incluyendo todos los armónicos hasta el orden 40) |
| Armónicos individuales de tensión | 3 % para órdenes impares, 1,5 % para pares | 5 % (3.er armónico), 6 % (5.º armónico), etc. según IEC 61000-2-2 | 5 % (3.er armónico), 6 % (5.º armónico), 5 % (7.º armónico), etc. |
| Límite de corriente armónica (equipos < 16 A) | TDD definido por relación Isc/IL (ej. 5 % para Isc/IL <20) | Clase A: límites absolutos (ej. 2,3 A para 3.er armónico) / Clase D: límites relativos | No aplica (norma de red, no de equipo) |
| Flicker de corta duración (Pst) | No se especifica directamente en IEEE 519; se trata en IEEE 1453 | Pst ≤ 1,0 (IEC 61000-4-15) | Pst ≤ 1,0 (durante el 95 % del tiempo semanal) |
| Flicker de larga duración (Plt) | No se especifica en IEEE 519 | Plt ≤ 0,65 | Plt ≤ 0,65 (durante el 95 % del tiempo semanal) |
| Variación de la frecuencia fundamental | 60 Hz ± 0,1 % (sistemas interconectados) | 50 Hz ± 1 % (99,5 % del año), ± 2 % (100 % del tiempo) | 50 Hz ± 1 % (99,5 % del año), +4%/-6% (100 % del tiempo) |
| Variación de la tensión de alimentación | ± 5 % (servicio normal) | ± 10 % (IEC 60038) | ± 10 % de la tensión nominal (95 % del tiempo semanal) |
| Desequilibrio de tensión (componente inversa) | 3 % (sin carga específica) | 2 % (IEC 61000-2-2) | 2 % (hasta el 95 % del tiempo semanal) |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia principal entre IEEE 519 e IEC 61000-3-2?

IEEE 519 define límites de distorsión armónica en el punto de acoplamiento común (PCC) para sistemas completos, considerando tanto la tensión como la corriente y utilizando el concepto de TDD. IEC 61000-3-2, en cambio, limita las emisiones de corriente armónica de equipos individuales con corriente de entrada ≤ 16 A, clasificándolos en clases A, B, C y D según su aplicación.

### ¿La norma EN 50160 establece límites obligatorios o indicativos?

La norma EN 50160 especifica las características de la tensión suministrada y es de aplicación contractual en muchos países europeos. No impone límites de emisión para equipos; describe los valores que la red debe cumplir en condiciones normales de explotación, sirviendo de referencia para acuerdos de calidad de servicio entre distribuidoras y clientes.

### ¿Cómo se miden los parámetros de calidad de energía de acuerdo con la norma IEC 61000-4-30?

IEC 61000-4-30 establece métodos de medición normalizados, definiendo intervalos de agregación de 10/12 ciclos (para frecuencia 50/60 Hz), 150/180 ciclos (3 s) y 10 min. Define dos clases de rendimiento del instrumento (Clase A para medidas contractuales o de verificación, Clase S para estudios estadísticos), la incertidumbre requerida y el procesamiento de los datos para garantizar la repetibilidad y comparabilidad internacional.

### ¿Qué es la curva CBEMA y qué relación tiene con las normas de calidad de energía?

La curva CBEMA (Computer and Business Equipment Manufacturers Association) define la envolvente de tolerancia de los equipos informáticos frente a variaciones de tensión en magnitud y duración. Aunque no es una norma internacional, se utiliza ampliamente como criterio de diseño y complementa las normas IEEE 1159 y los requisitos de inmunidad de la serie IEC 61000-4.

### ¿Qué diferencia hay entre los conceptos de compatibilidad electromagnética y calidad de energía?

La calidad de energía describe las características del suministro eléctrico, mientras que la compatibilidad electromagnética (EMC) consiste en la capacidad de los equipos para funcionar correctamente en su entorno electromagnético y sin generar perturbaciones inaceptables para otros aparatos. Las normas IEC 61000 establecen los niveles de compatibilidad, que a su vez influyen en los límites de calidad de energía que recogen normas como EN 50160 e IEEE 519.

### ¿Un mismo valor de THD puede ser aceptable según IEEE 519 y no cumplir con EN 50160?

Sí, porque las condiciones de evaluación son diferentes. IEEE 519 aplica límites de distorsión en el PCC y considera escenarios de cortocircuito (Isc/IL), mientras que EN 50160 evalúa la tensión entregada al cliente durante el 95 % del tiempo semanal. Un valor de THDv que cumple con IEEE 519 en un sistema robusto puede sobrepasar el límite del 8 % de EN 50160 si la medición semanal arroja un percentil 95 superior, o viceversa.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/transformer-testing-type-test-and-routine-test-of-transformer/
