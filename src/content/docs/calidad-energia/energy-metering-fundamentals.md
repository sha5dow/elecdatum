---
title: "Fundamentos de medición de energía eléctrica"
sidebar:
  label: "Fundamentos de medición de energía eléctrica"
description: "Ficha tecnica: Fundamentos de medición de energía eléctrica"
keywords: ["electrical energy metering fundamentals kWh", "calidad-energia"]
category: "calidad-energia"
topic: "metering"
subcategory: "energy-metering-fundamentals"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La medición de energía eléctrica es el proceso mediante el cual se cuantifica la cantidad de trabajo realizado por una corriente eléctrica en un intervalo de tiempo. Un kilovatio‑hora (kWh), la unidad comercial más difundida, equivale a 3,6×10<sup>6</sup> julios (J) o 3412,14 unidades térmicas británicas (BTU). Los instrumentos que realizan esta función —los medidores de energía— constituyen la base de los sistemas de facturación, monitorización y gestión energética tanto en entornos domésticos como industriales.

## Principio de medición de energía eléctrica

La energía eléctrica (E) se obtiene a partir de la integral de la potencia instantánea (p) durante el período de consumo, lo que significa que 1 vatio (W) mantenido durante 3600 segundos entrega 1 vatio‑hora (Wh) o 3600 julios (J). En corriente continua y en corriente alterna monofásica con factor de potencia unitario, la potencia media se calcula como el producto de la tensión eficaz y la corriente eficaz. Los medidores registran de forma continua el producto de estas magnitudes y lo acumulan en el tiempo, proporcionando el valor total de energía consumida.

En corriente alterna con cargas no resistivas, el desfase entre tensión y corriente introduce la componente de potencia reactiva. La potencia activa —la que efectivamente realiza trabajo— se expresa como:

> **P = V × I × cos φ**

donde V es la tensión eficaz (V), I la corriente eficaz (A) y cos φ el factor de potencia. El medidor de energía activa integra únicamente esta potencia activa, ignorando la componente reactiva que circula por el sistema pero no produce trabajo útil.

## Unidades de energía eléctrica

1 kilovatio‑hora equivale a 3,6 millones de julios (MJ) o 3412,14 BTU. Aunque el julio (J) es la unidad del Sistema Internacional, su valor resulta demasiado pequeño para facturación eléctrica, por lo que se emplean múltiplos basados en la hora. La tabla siguiente resume las equivalencias más habituales.

| Unidad | Equivalencia en julios (J) | Equivalencia en BTU |
|--------|----------------------------|----------------------|
| Julio (J) | 1 J / 0.0009478 BTU | – |
| Vatio‑hora (Wh) | 3600 J / 3.41 BTU | 3.41 BTU |
| Kilovatio‑hora (kWh) | 3.6×10<sup>6</sup> J / 3412.14 BTU | 3412.14 BTU |
| Megavatio‑hora (MWh) | 3.6×10<sup>9</sup> J / 3.41×10<sup>6</sup> BTU | 3.41×10<sup>6</sup> BTU |
| Gigavatio‑hora (GWh) | 3.6×10<sup>12</sup> J / 3.41×10<sup>9</sup> BTU | 3.41×10<sup>9</sup> BTU |

## Tipos de medidores de energía

Los medidores de energía se clasifican en tres grandes grupos según la tecnología que emplean: electromecánicos, electrónicos (estado sólido) e inteligentes. Cada generación ha mejorado la precisión, las funcionalidades y la capacidad de comunicación.

**Medidores electromecánicos (inducción o Ferraris).** Operan mediante un disco de aluminio que gira impulsado por campos magnéticos generados por bobinas de tensión y corriente. La velocidad del disco es proporcional a la potencia activa y un registro mecánico acumula el número de revoluciones. Un contador típico de este tipo presenta una clase de exactitud de 2.0 o 1.0 y requiere calibración periódica para compensar el desgaste mecánico.

**Medidores electrónicos (estado sólido).** Utilizan sensores de tensión y corriente, conversores analógico‑digitales y un procesador digital que calcula la energía directamente. No poseen partes móviles, por lo que mantienen la exactitud durante más tiempo y pueden medir parámetros adicionales como potencia reactiva, factor de potencia o distorsión armónica. Su clase de exactitud habitual es 0.5 o 1.0.

**Medidores inteligentes.** Incorporan un módulo de comunicaciones (PLC, RF, GPRS) que permite la lectura remota, la tarificación horaria y la desconexión/reconexión a distancia. Forman parte de la infraestructura de medición avanzada (AMI) y son pieza clave en las redes eléctricas inteligentes. Además de las funciones de un medidor electrónico, registran perfiles de carga con intervalo de 15 minutos o menos y pueden recibir órdenes de gestión de demanda.

## Fórmulas fundamentales para el cálculo de energía

El cómputo de energía eléctrica parte de la relación básica entre potencia y tiempo. La tabla siguiente recoge las expresiones más utilizadas en sistemas monofásicos y trifásicos.

| Fórmula | Aplicación | Variables |
|---------|------------|-----------|
| E = P × t | Energía en corriente continua o alterna con factor de potencia constante | E: energía (J o kWh); P: potencia activa (W); t: tiempo (s o h) |
| P = V × I | Potencia en corriente continua | V: tensión (V); I: corriente (A) |
| P = V × I × cos φ | Potencia activa monofásica en CA | cos φ: factor de potencia (adimensional) |
| P<sub>3Ø</sub> = √3 × V<sub>L</sub> × I<sub>L</sub> × cos φ | Potencia activa trifásica | V<sub>L</sub>: tensión de línea (V); I<sub>L</sub>: corriente de línea (A) |
| E = ∫ p(t) dt | Energía a partir de potencia instantánea | p(t): potencia instantánea (W); t: tiempo (s) |

**Ejemplo numérico:** una resistencia de 50 Ω conectada a una batería de 12 V disipa una potencia de P = V² / R = (12 V)² / 50 Ω = 2.88 W. En 60 segundos, la energía consumida es E = 2.88 W × 60 s = 172.8 J, equivalentes a 4.8×10<sup>−5</sup> kWh o 0.164 BTU.

## Factores que influyen en la exactitud de la medición

La precisión de la medición de energía depende de múltiples parámetros. Un medidor de clase 0.5 puede presentar un error inferior al 0.5 % en condiciones nominales, pero ese error se incrementa si las condiciones de operación se alejan de los valores de diseño.

- **Factor de potencia bajo.** Cuando la corriente está muy desfasada respecto a la tensión, los errores de fase en los transformadores de medida se magnifican.
- **Distorsión armónica.** Las componentes armónicas generan un flujo de potencia que los medidores electromecánicos no siempre registran correctamente. Los medidores electrónicos con muestreo digital pueden cuantificar la potencia activa incluyendo los armónicos, siempre que el ancho de banda sea suficiente.
- **Variaciones de temperatura.** Afectan la resistencia de los materiales y la linealidad de los sensores electrónicos. Los medidores inteligentes incluyen compensación térmica para minimizar este efecto.
- **Corrientes muy bajas o sobrecargas.** Por debajo del 5 % de la corriente nominal, el error de un medidor electromecánico puede superar el 2 %. En sobrecarga, la saturación magnética degrada la linealidad.
- **Campos magnéticos externos.** Pueden alterar el par motor en medidores de inducción o inducir tensiones espurias en circuitos electrónicos.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre un medidor de energía y un vatímetro?

El vatímetro mide la potencia instantánea en un momento dado, mientras que el medidor de energía integra esa potencia en el tiempo y entrega la energía total consumida, expresada en kWh u otras unidades similares.

### ¿Por qué la facturación doméstica se hace en kilovatios‑hora (kWh)?

Porque el kWh refleja la cantidad de trabajo eléctrico realmente utilizado, independientemente de si la potencia se ha demandado de forma continua o intermitente. Al integrar potencia y tiempo, permite una tarificación equitativa.

### ¿Los medidores inteligentes consumen energía por sí mismos?

Sí, el circuito interno del medidor consume típicamente entre 0.5 W y 2 W, lo que representa menos de 1.5 kWh al mes. Este autoconsumo no se registra en la energía contabilizada al usuario, ya que el diseño toma la medida aguas abajo de la fuente de alimentación del propio equipo.

### ¿Se puede medir energía reactiva con un medidor convencional de inducción?

No, los medidores de inducción estándar solo registran energía activa. Para medir energía reactiva se requieren medidores específicos con bobinas desfasadas 90° eléctricos, medidores electrónicos con capacidad de cálculo de potencia reactiva, o medidores combinados activa‑reactiva.

### ¿Cada cuánto tiempo se recomienda calibrar un medidor de energía?

La frecuencia de calibración depende de la normativa local y de la tecnología del medidor. Los medidores electromecánicos suelen requerir verificación cada 5 a 10 años, mientras que los electrónicos pueden mantener su exactitud durante 15 años o más si las condiciones ambientales son favorables.

### ¿El factor de potencia bajo aumenta el valor registrado en el medidor de energía activa?

No, un factor de potencia bajo reduce la potencia activa para una misma corriente, por lo que el medidor de energía activa registra un consumo menor. Sin embargo, la corriente reactiva asociada produce pérdidas en los conductores y transformadores, que sí incrementan la demanda total del sistema.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **electrical4u.com**: https://www.electrical4u.com/measurement-of-electrical-energy/
