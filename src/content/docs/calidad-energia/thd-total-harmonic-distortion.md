---
title: "Distorsión armónica total THD explicación"
sidebar:
  label: "Distorsión armónica total THD explicación"
description: "Ficha tecnica: Distorsión armónica total THD explicación"
keywords: ["total harmonic distortion THD explanation calculation", "calidad-energia"]
category: "calidad-energia"
topic: "harmonics"
subcategory: "harmonic-distortion-thd"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La distorsión armónica total (THD) es una medida fundamental en sistemas eléctricos que cuantifica la desviación de una forma de onda de corriente o voltaje respecto a una senoidal pura. La THD se expresa generalmente como un porcentaje; por ejemplo, un valor de THD del 5 % indica que la magnitud eficaz de los componentes armónicos es el 5 % de la magnitud eficaz de la componente fundamental. En sistemas de potencia, mantener la THD en niveles bajos es crítico para reducir el calentamiento de conductores, las pérdidas en el núcleo de motores y transformadores, y las interferencias electromagnéticas. Las normas internacionales, como la IEEE 519, establecen los límites recomendados de THD para asegurar la calidad y estabilidad de la red eléctrica.

La distorsión armónica total (THD) es la relación entre el valor eficaz (RMS) de la suma de todos los componentes armónicos de una señal y el valor eficaz de su componente fundamental. En otras palabras, la THD cuantifica cuánto del contenido total de una señal de voltaje o corriente está compuesto por frecuencias armónicas no deseadas (múltiplos enteros de la frecuencia fundamental) en comparación con la frecuencia principal de trabajo, que típicamente es de 50 Hz o 60 Hz.

| Parámetro | Descripción |
|---|---|
| Componente fundamental (1er armónico) | Señal senoidal a la frecuencia nominal de la red (50 Hz / 60 Hz). Constituye la forma de onda deseada. |
| Armónicos (2º, 3º, 4º, ..., n) | Frecuencias múltiplos enteros de la fundamental (ej. 150 Hz para el 3er armónico en un sistema de 50 Hz). Surgen de cargas no lineales como rectificadores, variadores de frecuencia (VFD) y balastros electrónicos. |
| Valor THD | Parámetro adimensional expresado en porcentaje (%). Un valor del 0 % corresponde a una senoidal pura, sin distorsión. |

## Tipos (THD-F vs THD-R)

Existen dos definiciones matemáticas principales para la THD, que se distinguen por la señal de referencia utilizada en el denominador. Aunque para niveles bajos de distorsión (menores al 10 %) el resultado es prácticamente idéntico, la diferencia se vuelve significativa en señales con alta distorsión.

| Tipo de THD | Referencia para el cálculo | Rango | Caso de uso principal |
|---|---|---|---|
| **THD-F** (con referencia al fundamental) | Valor RMS de la frecuencia fundamental (V₁) | 0 % hasta infinito (puede superar el 100 %) | Especificaciones de audio y estándares de calidad de energía (IEEE). Es la forma más comúnmente citada. |
| **THD-R** (con referencia al RMS total) | Valor RMS de la señal completa (fundamental + armónicos) | 0 % hasta 100 % (no puede superar este valor) | Denominado a veces "factor de distorsión". Útil en telecomunicaciones o cuando se analiza la señal total. |

La relación de conversión entre ambas es: con una THD-F del 10 %, la THD-R equivalente es de aproximadamente 9.95 %. La distorsión de una onda cuadrada perfecta, que contiene infinitos armónicos, tiene una THD-F del 48.3 % y una THD-R del 43.5 %.

## Fórmula de cálculo

La fórmula estándar para calcular la THD-F, la más utilizada en sistemas de potencia, se define como la raíz cuadrada de la suma de los cuadrados de los voltajes eficaces de todos los armónicos, dividida por el voltaje eficaz de la frecuencia fundamental.

> **THD = (√(V₂² + V₃² + V₄² + ... + Vₙ²)) / V₁**

| Variable | Definición | Unidad |
|---|---|---|
| **THD** | Distorsión armónica total (expresada generalmente en % al multiplicarse por 100) | Adimensional / % |
| **V₁** | Valor RMS del voltaje de la frecuencia fundamental (ej. 50 Hz o 60 Hz) | V (voltios) |
| **Vₙ** | Valor RMS del voltaje del enésimo armónico (n = 2, 3, 4, ...) | V (voltios) |

La fórmula para THD-R, que usa la señal total como referencia, se expresa como:

> **THD-R = (√(V₂² + V₃² + V₄² + ... + Vₙ²)) / (√(V₁² + V₂² + V₃² + ... + Vₙ²))**

En la práctica, el análisis de Fourier de la señal permite extraer la amplitud de cada armónico para introducirlos en estas ecuaciones. Por ejemplo, para una onda cuadrada de ciclo de trabajo del 50 %, el cálculo teórico de THD-F usando su serie de Fourier da como resultado exacto √(π²/8 - 1).

## Valores típicos y límites

La cantidad de distorsión armónica aceptable está estrictamente regulada en sistemas de potencia mediante normas como IEEE 519-2022, que establece límites de THD de voltaje y corriente en el punto de acoplamiento común (PCC) para evitar el deterioro de la calidad de la red.

| Aplicación / Sistema | THD típico o límite recomendado | Observaciones |
|---|---|---|
| Red de distribución de baja tensión (< 1 kV) | Límite de THD de voltaje: < 8 % (IEEE 519) | Límite máximo general; se aplican valores más restrictivos según la robustez de la red (cortocircuito). |
| Sistema dedicado (hospitales, aeropuertos) | THD de voltaje buscado: < 5 % | Niveles más estrictos para asegurar la operación sin fallos de equipos electrónicos sensibles. |
| Salida de un variador de frecuencia (VFD) típico | THD de corriente: 30 % a 80 % | La alta distorsión de corriente requiere filtrado (inductancias de línea o filtros activos) para cumplir la norma. |
| Señal de audio de alta fidelidad | THD: < 0.1 % | La distorsión es inaudible para la mayoría de los oyentes a estos niveles. |
| Onda cuadrada teórica pura | THD-F: 48.3 % | Es una referencia matemática, no un valor de diseño. Indica una distorsión extrema. |
| Motor eléctrico de inducción operando con armónicos | La norma NEMA MG1 recomienda un factor de distorsión de voltaje (primo de THD-R) < 5 % | Un exceso de THD causa calentamiento, pérdidas (hierro y cobre) y reducción de la vida útil. |

## Consecuencias de no controlar la distorsión armónica

Una THD elevada en un sistema eléctrico produce efectos perjudiciales que van desde el mal funcionamiento de equipos hasta daños prematuros. El incremento de la frecuencia en los armónicos eleva las pérdidas en el hierro de motores y transformadores, ya que estas dependen de la frecuencia (pérdidas por histéresis proporcionales a f, y por corrientes de Foucault proporcionales a f²), causando un calentamiento y un aumento de la temperatura de operación. En motores, la interacción de armónicos genera pares pulsantes y velocidades subsíncronas que provocan vibraciones mecánicas y el fenómeno de *crawling* (arrastre). En sistemas de control, los armónicos pueden ocasionar fallos de conmutación en variadores de velocidad y disparos intempestivos de protecciones. Además, la presencia de armónicos de secuencia cero (múltiplos del 3er armónico) en sistemas trifásicos provoca la circulación de corrientes por el neutro, que puede llegar a sobrecargarse hasta un 173 % de la corriente de fase incluso con cargas balanceadas.

## Métodos de medición de THD

La medición práctica de la THD se realiza típicamente de dos formas. El método de filtrado consiste en separar la señal en dos partes: una que contiene solo la frecuencia fundamental (filtrando los armónicos) y otra que contiene solo los armónicos (eliminando la fundamental), para luego medir el valor RMS de ambas y calcular la relación. El segundo método, más moderno y predominante, se basa en el procesamiento digital de señales mediante la Transformada Rápida de Fourier (FFT). Los analizadores de calidad de energía toman muestras de la señal de voltaje o corriente y calculan el espectro armónico en tiempo real, determinando la magnitud y fase de cada armónico hasta el orden 50 o superior. Este cálculo espectral permite obtener directamente tanto THD-F como THD-R aplicando las fórmulas de definición.

## Preguntas frecuentes (FAQ)

### ¿Qué es la distorsión armónica total y por qué es importante?
La distorsión armónica total (THD) es la medida de cuánto se desvía una forma de onda de voltaje o corriente de una senoidal perfecta, expresada como la relación entre la energía de los armónicos y la de la frecuencia fundamental. Es importante porque una THD alta causa sobrecalentamiento, pérdidas de energía y mal funcionamiento en equipos eléctricos y electrónicos conectados a la red.

### ¿Cuál es la diferencia entre THD-F y THD-R?
La THD-F compara la distorsión armónica solo con la componente fundamental (puede superar el 100 %), mientras que la THD-R la compara con la señal completa (fundamental más armónicos, sin poder superar el 100 %). Para niveles bajos de distorsión, por ejemplo un 5 %, la diferencia numérica entre ambos valores es despreciable.

### ¿Cuál es el valor máximo de THD permitido por la norma IEEE 519?
La norma IEEE 519-2022 establece como límite máximo de THD de voltaje el 8 % para sistemas de baja tensión (menores a 1 kV), aunque en la práctica se recomiendan valores muy inferiores al 5 % para redes que alimentan equipos sensibles o procesos industriales críticos.

### ¿Qué equipos generan armónicos en una instalación eléctrica?
Las principales fuentes de armónicos son las cargas no lineales, como los variadores de frecuencia (VFD), rectificadores, fuentes de alimentación conmutadas (presentes en ordenadores y luminarias LED), sistemas de alimentación ininterrumpida (UPS) y hornos de arco eléctrico, que distorsionan la corriente absorbida de la red.

### ¿Cómo se reduce la THD en un sistema eléctrico?
La THD se mitiga principalmente mediante inductancias de línea (chokes) en la entrada de variadores, transformadores de aislamiento con conexión especial (como Delta-Estrella) para bloquear armónicos triples, filtros pasivos sintonizados a frecuencias armónicas específicas, y filtros activos de potencia que inyectan corrientes en contrafase para cancelar la distorsión en tiempo real.

### ¿Cómo afectan los armónicos al conductor neutro en un sistema trifásico?
Los armónicos de orden impar múltiplos de tres (3º, 9º, 15º, etc.), conocidos como de secuencia cero, no se cancelan en el neutro, sino que se suman aritméticamente. En un sistema con alta distorsión, la corriente resultante por el neutro puede ser hasta 1.73 veces la corriente de fase, lo que supone un riesgo de sobrecarga e incendio si el conductor no está dimensionado para ello.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/the-importance-of-total-harmonic-distortion/
