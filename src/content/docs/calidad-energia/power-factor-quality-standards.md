---
title: "Normas de factor de potencia calidad de energía"
sidebar:
  label: "Normas de factor de potencia calidad de energía"
description: "Ficha tecnica: Normas de factor de potencia calidad de energía"
keywords: ["power factor quality standard IEEE 519", "calidad-energia"]
category: "calidad-energia"
topic: "power-factor-quality"
subcategory: "power-factor-quality-standards"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El factor de potencia es un indicador clave de la eficiencia con la que un sistema eléctrico utiliza la energía suministrada. Un factor de potencia bajo, a menudo ocasionado por cargas inductivas como motores y transformadores, incrementa las pérdidas en conductores, reduce la capacidad de distribución y puede derivar en penalizaciones económicas por parte de la compañía suministradora. Para mitigar estos efectos, estándares internacionales como IEC 61000-3-2 e IEEE 519 imponen límites estrictos a las emisiones de armónicos y exigen valores mínimos de factor de potencia, impulsando la adopción de técnicas de corrección como los bancos de capacitores.

## Definición de factor de potencia

El factor de potencia (PF por sus siglas en inglés) es una cantidad adimensional comprendida entre 0 y 1 que expresa la eficiencia de conversión de la potencia aparente en potencia activa. Se define como el coseno del ángulo de fase (φ) entre las ondas de tensión y corriente. Un valor igual a 1 indica que toda la energía suministrada se transforma en trabajo útil, mientras que valores inferiores revelan la presencia de potencia reactiva que oscila entre la fuente y la carga sin realizar trabajo neto.

> **PF = cos(φ) = P / S**

| Variable | Símbolo | Unidad |
| --- | --- | --- |
| Potencia activa | P | W / W |
| Potencia aparente | S | VA / VA |
| Potencia reactiva | Q | VAR / VAR |
| Ángulo de fase | φ | grados (°) / grados (°) |

La fórmula alternativa PF = P / S relaciona directamente la lectura de vatímetros (potencia activa) con el producto de tensión y corriente eficaces (potencia aparente). En circuitos trifásicos, el factor de potencia se calcula con la expresión:

> **PF = P / (√3 · U · I)**

Donde U es la tensión de línea e I la corriente de línea.

## Normas internacionales aplicables

La norma IEC 61000-3-2:2014, armonizada en la Unión Europea como EN 61000-3-2, fija límites máximos de emisión de corrientes armónicas para equipos eléctricos y electrónicos con corriente de entrada ≤ 16 A por fase. Su objetivo es prevenir la distorsión de la forma de onda de tensión en redes públicas de baja tensión. Complementariamente, el programa Energy Star 80 Plus exige un factor de potencia mínimo de 0.9 a plena carga y una eficiencia energética no inferior al 80 % en fuentes de alimentación para equipos informáticos.

| Estándar | Alcance | Parámetro controlado |
| --- | --- | --- |
| IEC 61000‑3‑2 | Equipos ≤ 16 A/fase conectados a la red pública | Corrientes armónicas |
| IEEE 519 | Sistemas de distribución industriales y comerciales | Distorsión armónica total de tensión y corriente |
| Energy Star 80 Plus | Fuentes de alimentación internas de ordenadores | Factor de potencia y eficiencia energética |

El cumplimiento de estas normas se traduce en una reducción de las pérdidas en el neutro de sistemas trifásicos, menor calentamiento de transformadores y una mayor capacidad de generación disponible.

## Límites de distorsión armónica

La distorsión armónica total (THD) de corriente es uno de los factores que degradan el factor de potencia, ya que introduce componentes frecuenciales que no contribuyen al trabajo útil y aumentan la corriente eficaz. La IEC 61000‑3‑2 establece límites individuales para cada armónico hasta el orden 40, diferenciados según la clase del equipo, en lugar de un único valor de THD. La tabla siguiente recoge los niveles de referencia empleados en entornos industriales según prácticas alineadas con IEEE 519.

| Armónico | Límite típico en baja tensión (≤ 690 V / ≤ 690 V) |
| --- | --- |
| 3º | 5 % de la fundamental / 5 % |
| 5º | 4 % de la fundamental / 4 % |
| 7º | 3 % de la fundamental / 3 % |
| 11º a 15º | 2 % de la fundamental / 2 % |
| 17º a 25º | 1.5 % de la fundamental / 1.5 % |

La THD de corriente suele mantenerse por debajo del 5 % para equipos de clase A en condiciones de plena carga, mientras que configuraciones con rectificadores y filtros capacitivos simples pueden superar el 100 % de THD sin corrección.

## Clasificación de equipos según IEC 61000‑3‑2

La norma divide los equipos en cuatro clases (A, B, C y D) en función de su tipología y potencia, asignando a cada una límites diferentes de corrientes armónicas. La clase D, que engloba equipos con entrada monofásica y potencia activa entre 75 W y 600 W, es especialmente restrictiva por su alta penetración en el mercado doméstico y de oficinas.

| Clase | Equipos incluidos | Particularidad |
| --- | --- | --- |
| A | Equipos trifásicos equilibrados, electrodomésticos no clasificados en otras clases | Límites absolutos de corriente armónica (A) |
| B | Herramientas portátiles monofásicas | Límites 1.5 veces los de clase A |
| C | Dispositivos de iluminación (incluidos LED) | Límites expresados como porcentaje del armónico fundamental |
| D | Equipos con potencia 75‑600 W y forma de onda especial | Límites en mA/W, penalizando la forma de onda no sinusoidal |

La correcta clasificación del fabricante determina el cumplimiento normativo y condiciona el diseño de la etapa de entrada para mantener la distorsión dentro de los márgenes permitidos.

## Valores típicos de factor de potencia

En ausencia de corrección, casi todas las cargas inductivas presentan factores de potencia alejados de la unidad. La tabla siguiente muestra los valores de referencia para motores eléctricos trifásicos de inducción a 1800 rpm, donde se observa cómo el factor de potencia mejora conforme aumenta la carga mecánica.

| Potencia (hp / kW) | Vacío (cos φ) | ¼ carga (cos φ) | ½ carga (cos φ) | Plena carga (cos φ) |
| --- | --- | --- | --- | --- |
| 0‑5 hp / 0‑3.73 kW | 0.15‑0.20 | 0.50‑0.60 | 0.72 | 0.84 |
| 5‑20 hp / 3.73‑14.91 kW | 0.15‑0.20 | 0.50‑0.60 | 0.74 | 0.86 |
| 20‑100 hp / 14.91‑74.57 kW | 0.15‑0.20 | 0.50‑0.60 | 0.79 | 0.89 |
| 100‑300 hp / 74.57‑223.71 kW | 0.15‑0.20 | 0.50‑0.60 | 0.81 | 0.91 |

Distintos sectores industriales operan con factores de potencia globales que dependen de la combinación de cargas instaladas. Los valores no corregidos más bajos se registran en plantas con gran cantidad de motores asíncronos trabajando a carga parcial.

| Industria | Factor de potencia típico (%) |
| --- | --- |
| Alimentación (cerveceras) | 75‑80 % / 75‑80 % |
| Cemento | 75‑80 % / 75‑80 % |
| Química | 65‑75 % / 65‑75 % |
| Electroquímica | 65‑75 % / 65‑75 % |
| Fundición | 75‑80 % / 75‑80 % |
| Manufactura de maquinaria | 60‑65 % / 60‑65 % |
| Petróleo (bombeo) | 40‑60 % / 40‑60 % |
| Oficinas | 80‑90 % / 80‑90 % |
| Textil | 35‑60 % / 35‑60 % |

## Métodos de corrección del factor de potencia

La corrección del factor de potencia busca minimizar el desfase entre tensión y corriente, reduciendo la energía reactiva demandada a la red. La técnica más extendida consiste en instalar bancos de capacitores en paralelo con la carga inductiva, que compensan localmente la potencia reactiva y elevan el factor de potencia hasta valores próximos a 0.95, requeridos por muchas compañías eléctricas para evitar penalizaciones.

La tabla siguiente recoge los factores multiplicadores de la potencia activa (kW) que permiten dimensionar la capacidad reactiva del banco de capacitores necesario para elevar el factor de potencia desde un valor inicial hasta un valor deseado.

| Factor de potencia inicial | Factor de potencia objetivo |
| --- | --- |
| 0.85 | 0.90 | 0.92 | 0.94 | 0.95 | 0.98 | 1.00 |
| 0.50 | 1.59 | 1.72 | 1.77 | 1.83 | 1.86 | 1.95 | 2.12 |
| 0.60 | 1.00 | 1.13 | 1.18 | 1.24 | 1.27 | 1.36 | 1.53 |
| 0.70 | 0.54 | 0.67 | 0.72 | 0.78 | 0.81 | 0.90 | 1.12 |
| 0.75 | 0.34 | 0.47 | 0.52 | 0.58 | 0.61 | 0.70 | 1.08 |
| 0.80 | 0.15 | 0.28 | 0.33 | 0.39 | 0.42 | 0.51 | 0.84 |

**Nota:** El valor de la tabla se multiplica por la potencia activa en kW para obtener los kVAR del capacitor.

Otras alternativas de corrección incluyen:

- **Condensadores síncronos:** Máquinas síncronas que, operando sobreexcitadas, suministran potencia reactiva capacitiva a la red.
- **Filtros activos de armónicos:** Dispositivos electrónicos que inyectan corrientes de compensación, corrigiendo simultáneamente el factor de potencia de desplazamiento y la distorsión armónica.
- **Variadores de frecuencia con etapa PFC:** Rectificadores controlados con corrección activa del factor de potencia, capaces de mantenerlo por encima de 0.95 en todo el rango de carga.

## Efectos de un factor de potencia bajo

Operar con un factor de potencia inferior a 0.85 provoca un incremento directo de la corriente de línea necesaria para transferir una misma potencia activa. Este aumento de corriente repercute en un sobredimensionamiento de conductores, mayores pérdidas por efecto Joule, reducción de la vida útil del aislamiento y caídas de tensión adicionales. La tabla siguiente cuantifica cuánto debe incrementarse la sección transversal del conductor (tomando como referencia la sección unitaria con factor de potencia igual a 1) para transportar la misma potencia activa sin exceder el calentamiento máximo permitido.

| Factor de potencia | Incremento relativo de sección |
| --- | --- |
| 1.00 | 1.0 / 1.0 |
| 0.90 | 1.23 / 1.23 |
| 0.80 | 1.56 / 1.56 |
| 0.70 | 2.04 / 2.04 |
| 0.60 | 2.78 / 2.78 |
| 0.50 | 4.00 / 4.00 |
| 0.40 | 6.25 / 6.25 |
| 0.30 | 11.1 / 11.1 |

Además del coste en cobre, la reducción de la capacidad de generación y distribución efectiva es proporcional al factor de potencia: una instalación de 80 kVA con PF de 0.7 solo entrega 56 kW reales, dejando infrautilizado el transformador.

## Preguntas frecuentes (FAQ)

### ¿Qué norma internacional regula la emisión de armónicos en equipos de baja tensión?
La norma IEC 61000‑3‑2, aplicable a equipos con corriente de entrada igual o inferior a 16 A por fase, establece los límites máximos de corrientes armónicas inyectadas a la red pública.

### ¿Cuál es el valor mínimo de factor de potencia que suelen exigir las compañías eléctricas?
Muchas compañías penalizan factores de potencia por debajo de 0.90 o 0.95, ya que un valor inferior incrementa las pérdidas de distribución y reduce la capacidad efectiva de la red.

### ¿Por qué las fuentes de alimentación lineales incumplen las normativas de calidad de energía?
Las fuentes lineales basadas en transformador, rectificador y condensador de filtrado absorben corriente en picos angostos que generan una elevada distorsión armónica total (THD) y un factor de potencia típico inferior a 0.7, incompatible con estándares como IEC 61000‑3‑2.

### ¿Qué diferencia existe entre el factor de potencia de desplazamiento y el factor de potencia verdadero?
El factor de potencia de desplazamiento solo considera el coseno del ángulo de fase a la frecuencia fundamental, mientras que el factor de potencia verdadero incluye además el efecto de la distorsión armónica, siendo igual al producto del factor de desplazamiento por el factor de distorsión.

### ¿Cómo se selecciona la capacidad de un banco de capacitores para corrección?
Se calcula la potencia reactiva necesaria multiplicando la potencia activa en kW por el factor de corrección tabulado en función del cos φ inicial y el cos φ objetivo. Este producto entrega los kVAR que debe suministrar el banco.

### ¿Afecta el factor de potencia a la sección de los conductores de una instalación?
Sí. Con un factor de potencia de 0.50 la sección del conductor debe multiplicarse aproximadamente por 4 respecto a la necesaria con factor de potencia unidad, debido al incremento de corriente que implica la potencia reactiva.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/power-factor-thd-why-linear-power-supplies-fail-meet-electricity-standards/
