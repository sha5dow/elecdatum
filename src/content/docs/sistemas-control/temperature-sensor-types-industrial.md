---
title: "Tipos de sensores de temperatura industrial"
sidebar:
  label: "Tipos de sensores de temperatura industrial"
description: "Ficha tecnica: Tipos de sensores de temperatura industrial"
keywords: ["industrial temperature sensor types RTD thermocouple", "sistemas-control"]
category: "sistemas-control"
topic: "sensors"
subcategory: "temperature-sensor-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los sensores de temperatura industrial se agrupan en tres categorías principales — termopares, detectores de temperatura por resistencia (RTD) y termistores — cada una con principios de operación, rangos y prestaciones particulares. La selección adecuada depende de factores como la precisión requerida, el ambiente de trabajo, el costo y la velocidad de respuesta. A continuación se detallan sus fundamentos, comparativa de atributos y aplicaciones características.

Tres fenómenos físicos sustentan la operación de los sensores de temperatura: el efecto Seebeck para termopares, la variación lineal de la resistencia eléctrica con la temperatura en metales para los RTD y la alta dependencia resistiva de los semiconductores para los termistores.

En un **termopar**, dos conductores metálicos diferentes (por ejemplo, chromel‑alumel en el tipo K) unidos en un punto generan una pequeña tensión en función de la diferencia de temperatura entre la unión caliente y la unión de referencia. Este comportamiento se describe por el efecto Seebeck:

> **ΔV = -S · ΔT**

Donde:

| Variable | Descripción | Unidad típica |
| --- | --- | --- |
| ΔV | Tensión generada en los extremos | μV |
| S | Coeficiente Seebeck del par metálico | μV/°C |
| ΔT | Diferencia de temperatura entre uniones | °C |

Un **RTD** aprovecha la variación predecible de la resistencia de metales nobl es como el platino, níquel o cobre. La mayoría de los RTD industriales emplean un elemento de platino con una resistencia nominal de 100 Ω a 0 °C (designación Pt100). La relación resistencia‑temperatura se caracteriza mediante el coeficiente de temperatura α:

> **α = (R100 – R0) / (100 °C · R0)**

Para un Pt100 industrial según IEC 60751, α = 0,00385 Ω/(Ω·°C). Así, una variación de 1 °C produce un cambio de aproximadamente 0,385 Ω.

Un **termistor** es una resistencia semiconductora (óxidos metálicos sinterizados) cuya resistencia cambia drásticamente con la temperatura. Los de tipo NTC disminuyen su resistencia al aumentar la temperatura, mientras que los PTC la aumentan. La relación es altamente no lineal y se expresa mediante la ecuación de Steinhart‑Hart, pero en la práctica se caracteriza por su elevada sensibilidad, del orden de décimas de ohm por grado.

## Tipos principales
La industria emplea principalmente tres familias de sensores de temperatura: termopares, RTD y termistores, cada una con sub‑tipos normalizados.

**Termopares:** se designan con una letra según la composición de los metales. Los más comunes son:
- Tipo J (hierro‑constantán): rango -40 °C / -40 °F a 750 °C / 1382 °F.
- Tipo K (chromel‑alumel): rango -200 °C / -328 °F a 1372 °C / 2500 °F.
- Tipo T (cobre‑constantán): rango -200 °C / -328 °F a 350 °C / 662 °F.

**RTD:** según el material resistivo y la resistencia nominal:
- Pt100: 100 Ω a 0 °C, el estándar industrial; versión Pt1000 (1000 Ω) para mayor sensibilidad.
- Ni100: 100 Ω a 0 °C con alto coeficiente pero rango limitado (hasta 300 °C / 572 °F).
- Cu10: cobre, muy lineal, utilizable hasta 150 °C / 302 °F.

**Termistores:**
- NTC (coeficiente de temperatura negativo): material típico de óxidos de manganeso, níquel y cobalto.
- PTC (coeficiente de temperatura positivo): polímeros o cerámicos con transición abrupta.

## Comparativa de características
La siguiente tabla contrasta doce atributos diferenciales de los tres tipos de sensores, con todos los rangos expresados en unidades métricas e imperiales.

| Atributo | Termopar | RTD | Termistor |
| --- | --- | --- | --- |
| Costo | Bajo | Alto | Bajo |
| Rango de temperatura | Muy amplio: -210 °C / -350 °F a +1760 °C / +3200 °F | Amplio: -240 °C / -400 °F a +650 °C / +1200 °F | Corto a medio: -73 °C / -100 °F a +260 °C / +500 °F |
| Intercambiabilidad | Buena | Excelente | Pobre a regular |
| Estabilidad a largo plazo | Pobre a regular | Buena | Pobre |
| Precisión (sin ajuste) | Baja a media (0,5–2 °C / 0,9–3,6 °F) | Alta (0,1–0,3 °C / 0,18–0,54 °F) | Media (0,1–0,5 °C / 0,18–0,9 °F) |
| Repetibilidad | Pobre a regular | Excelente (típicamente <0,1 °C) | Regular a buena |
| Sensibilidad (salida) | Baja (~10–50 μV/°C) | Media (~0,4 Ω/°C para Pt100) | Muy alta (hasta varios Ω/°C) |
| Respuesta (constante de tiempo) | Media a rápida (0,1–10 s) | Media (0,5–20 s) | Media a rápida (0,1–8 s) |
| Linealidad | Regular (requiere linealización) | Buena (desviación <0,5 %) | Pobre (curva exponencial) |
| Auto‑calentamiento | Ninguno | Muy bajo a bajo (mW/°C) | Alto (puede superar 1 mW/°C) |
| Sensibilidad puntual (en extremo) | Excelente (unión expuesta) | Regular (elemento encapsulado) | Buena (perla miniatura) |
| Efecto de los cables de conexión | Alto (necesita cable compensado) | Medio (configuración a 3 o 4 hilos) | Bajo (resistencia base alta) |
| Tamaño / Encapsulado | Pequeño a grande | Medio a pequeño | Muy pequeño a medio |

## Ventajas y desventajas
Cada tecnología de sensor de temperatura presenta al menos cinco ventajas específicas y varias limitaciones operativas.

**Termopares**
- *Ventajas:* rango de temperatura extremadamente amplio, bajo costo, construcción robusta y tamaño reducido, respuesta rápida en unión expuesta, no requieren alimentación externa (autogeneran señal).
- *Desventajas:* baja precisión sin calibración, susceptibilidad al ruido eléctrico, necesidad de cable de extensión compatible, deriva con el tiempo a altas temperaturas, relación voltaje‑temperatura no lineal.

**RTD**
- *Ventajas:* alta exactitud y excelente repetibilidad, muy buena estabilidad a largo plazo, salida lineal en un amplio intervalo, intercambiabilidad sin recalibración, disponibilidad de elementos normalizados (Pt100 clase A).
- *Desventajas:* costo elevado, respuesta más lenta que un termopar, auto‑calentamiento pequeño pero presente, límite superior de temperatura inferior al de termopares, mayor fragilidad del elemento.

**Termistores**
- *Ventajas:* sensibilidad muy alta (permite detectar cambios de milésimas de grado), tamaño compacto, bajo costo, respuesta rápida en perlas miniatura, alta resistencia base que minimiza el efecto de los cables.
- *Desventajas:* rango de temperatura limitado, falta de linealidad (requiere ecuaciones complejas), escasa intercambiabilidad entre unidades, auto‑calentamiento significativo en corrientes de excitación elevadas, degradación con el tiempo en ambientes húmedos.

## Aplicaciones típicas
Los termopares dominan en procesos con temperaturas superiores a 1000 °C / 1832 °F, como hornos de fundición, calderas y turbinas de gas. Los RTD son el estándar en industrias farmacéutica, alimentaria y en control de procesos que exigen precisión entre -50 °C / -58 °F y 400 °C / 752 °F. Los termistores encuentran su nicho en aplicaciones de rango estrecho, entre -40 °C / -40 °F y 125 °C / 257 °F, como protección de motores, equipos HVAC, baterías y dispositivos médicos.

| Aplicación | Sensor recomendado | Rango típico de operación |
| --- | --- | --- |
| Hornos de tratamiento térmico | Termopar tipo K o S | 600–1600 °C / 1112–2912 °F |
| Reactores químicos | RTD Pt100 con termopozo | -50–300 °C / -58–572 °F |
| Compresores y sistemas de climatización | NTC 10 kΩ | -20–120 °C / -4–248 °F |
| Medición de superficie de tuberías | RTD de contacto o termopar anillo | -40–500 °C / -40–932 °F |
| Cámaras climáticas | Termistor tipo 3 o Pt100 | -70–180 °C / -94–356 °F |
| Fundición de metales no ferrosos | Termopar tipo K con vaina de inconel | 200–1350 °C / 392–2462 °F |

## Instalación y montaje
Al menos seis configuraciones mecánicas de sonda se utilizan industrialmente para adaptar el sensor al proceso. Un montaje incorrecto puede introducir errores de medición superiores al 2 % del rango.

- **Sondas de inmersión ajustables:** permiten variar la profundidad de inserción; típicas en plásticos con conexión por bayoneta. Rango de trabajo desde -58 °F (-50 °C) hasta 900 °F (482 °C).
- **Sondas de cabeza de conexión:** el elemento sensor va montado en un cabezal de aluminio IP66/NEMA 4X con termopozo. Adecuadas para temperaturas de proceso hasta 2100 °F (1149 °C).
- **Sondas de anillo empernable:** miden temperatura superficial fijándose con tornillo. Disponibles en termopar tipo K/J y RTD Pt100.
- **Sondas recortables:** tubo de 24 pulgadas (610 mm) que se corta a la longitud deseada; adecuadas para aplicaciones entre -40 °F (-40 °C) y 900 °F (482 °C).
- **Sondas de brida:** para montaje en paso de pared en hornos o conductos, con vaina de ¼ de pulgada (6,35 mm) en acero inoxidable 316.
- **Sondas de cordón/perla:** elemento miniatura desnudo, ideal para espacios confinados, con cable de 6 pies (1,83 m). Mide de -40 °F (-40 °C) a 257 °F (125 °C).

Las configuraciones de conexión eléctrica impactan la exactitud: los RTD se conectan a 3 o 4 hilos para compensar la resistencia de los cables, los termopares requieren cable de extensión del mismo tipo y los termistores, al tener resistencia alta, suelen bastar con 2 hilos.

## Precisión y exactitud
La precisión típica de un RTD Clase A es de ±0,15 °C (±0,27 °F) a 0 °C y de ±0,35 °C (±0,63 °F) a 100 °C, mientras que un termopar tipo K estándar tolera ±2,2 °C (±4 °F) o el 0,75 % del valor de lectura. Los termistores ofrecen precisiones intercambiables de ±0,2 °C (±0,36 °F) en rangos limitados pero pueden derivar si se excede su temperatura máxima.

| Tipo de sensor | Clase / Norma | Tolerancia típica a 0 °C / 32 °F | Tolerancia típica a 100 °C / 212 °F |
| --- | --- | --- | --- |
| Termopar tipo K | IEC 60584-1 clase 2 | ±2,2 °C / ±4,0 °F | ±2,2 °C / ±4,0 °F |
| Termopar tipo J | IEC 60584-1 clase 2 | ±2,2 °C / ±4,0 °F | ±2,2 °C / ±4,0 °F |
| RTD Pt100 | IEC 60751 clase A | ±0,15 °C / ±0,27 °F | ±0,35 °C / ±0,63 °F |
| RTD Pt100 | IEC 60751 clase B | ±0,3 °C / ±0,54 °F | ±0,8 °C / ±1,44 °F |
| Termistor NTC 10 kΩ | tipo 3 intercambiable | ±0,2 °C / ±0,36 °F (25 °C) | — |

La repetibilidad de los RTD alcanza valores inferiores a 0,1 °C (0,18 °F) y los termopares, si no están contaminados, pueden repetir dentro de 0,5 °C (0,9 °F). Los termistores mantienen buena repetibilidad dentro de su rango, aunque inferior a la de un RTD.

## Rango de temperatura
Los termopares tipo K soportan de forma continua desde -200 °C / -328 °F hasta 1372 °C / 2500 °F, mientras que los RTD de platino se limitan a -200 °C / -328 °F a 850 °C / 1562 °F aunque en la práctica industrial se usan hasta 650 °C / 1200 °F. Los termistores apenas alcanzan valores de -80 °C / -112 °F a 300 °C / 572 °F, si bien la mayoría de los modelos comerciales operan de -40 °C / -40 °F a 125 °C / 257 °F.

| Sensor | Rango mínimo | Rango máximo |
| --- | --- | --- |
| Termopar tipo K | -200 °C / -328 °F | 1372 °C / 2500 °F |
| Termopar tipo S (Pt‑Rh) | -50 °C / -58 °F | 1768 °C / 3214 °F |
| RTD Pt100 | -200 °C / -328 °F | 650 °C / 1202 °F (práctico) |
| RTD Ni100 | -60 °C / -76 °F | 300 °C / 572 °F |
| Termistor NTC | -80 °C / -112 °F | 300 °C / 572 °F (poco frecuente) |
| Termistor NTC tipo 3 | -40 °C / -40 °F | 125 °C / 257 °F |

La elección del material de la vaina (acero inoxidable 316, inconel, cerámica) amplía o restringe aún más estos límites en instalación real.

## Materiales y construcción
Tres metales nobles—platino, níquel y cobre—componen la mayoría de los elementos RTD, mientras que los termopares se fabrican con pares de aleaciones como chromel‑alumel (tipo K), hierro‑constantán (tipo J) o cobre‑constantán (tipo T). Los termistores emplean óxidos de metales de transición (manganeso, níquel, cobalto) sinterizados en perlas, discos o chips.

- **Platino (Pt):** ofrece la relación resistencia‑temperatura más estable y reproducible; se encapsula en alambre enrollado sobre núcleo cerámico o en película fina sobre sustrato de alúmina.
- **Níquel (Ni):** tiene un coeficiente de temperatura alto, pero se desvía por encima de 300 °C / 572 °F.
- **Cobre (Cu):** extremadamente lineal y económico, se oxida a temperaturas superiores a 150 °C / 302 °F, por lo que se reserva para ambientes controlados.
- **Aleaciones de termopares:** chromel (Ni‑Cr) / alumel (Ni‑Al‑Mn‑Si) para tipo K; constantán (Cu‑Ni) para tipos J y T; platino‑rodio para tipo S o R en altas temperaturas.
- **Óxidos semiconductores:** las formulaciones NTC típicas usan Mn₃O₄, NiO y Co₂O₃ ajustando la resistencia deseada.

El encapsulado influye en la respuesta y la protección ambiental: las vainas de acero inoxidable 316 se emplean hasta 900 °F (482 °C) mientras que para temperaturas superiores se recurre a inconel 600 o cerámica.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia fundamental entre un termopar y un RTD?
Un termopar genera una tensión en respuesta a la diferencia de temperatura entre dos uniones de metales distintos (efecto Seebeck), mientras que un RTD varía su resistencia eléctrica de manera lineal con la temperatura. Esta diferencia de principio hace que los termopares soporten temperaturas mucho más altas, pero los RTD ofrezcan mayor exactitud y estabilidad.

### ¿Por qué los termopares necesitan cable de compensación?
La tensión generada por un termopar depende de la temperatura en la unión de referencia. El cable de compensación (o de extensión) está fabricado con los mismos materiales que el termopar o con aleaciones equivalentes, y transporta la señal desde el punto frío hasta el instrumento sin introducir nuevas uniones disimilares, evitando así errores de medida. Usar cable de cobre estándar altera la tensión termoeléctrica y falsea la lectura.

### ¿Qué significa la designación Pt100?
Pt indica que el elemento sensor es de platino y 100 corresponde a su resistencia nominal de 100 ohmios a 0 °C (32 °F). Es la configuración más extendida en RTD industriales; existe también Pt1000 (1000 Ω a 0 °C) para aplicaciones donde se necesita mayor sensibilidad o reducir el efecto del cableado.

### ¿Cuándo conviene elegir un termistor en lugar de un RTD?
El termistor es preferible cuando la medición se realiza en un rango reducido (por ejemplo, -40 °C a 125 °C / -40 °F a 257 °F), se requiere alta sensibilidad para detectar pequeños cambios (0,01 °C) y el presupuesto es limitado. También es ventajoso cuando el espacio es muy reducido, ya que se fabrican en perlas de 0,5 mm / 0,02 in de diámetro.

### ¿Cómo afecta el auto‑calentamiento en las mediciones con RTD y termistores?
Para medir la resistencia se inyecta una corriente de excitación que disipa potencia en el sensor (I²R). Este calor adicional eleva la temperatura del elemento por encima de la del medio, introduciendo un error sistemático. En RTD se minimiza usando corrientes bajas (≤1 mA) y en termistores, por su alta resistencia, la disipación puede ser significativa si no se limita la excitación.

### ¿Son intercambiables los sensores de distintos fabricantes sin recalibración?
Los RTD que cumplen la norma IEC 60751 (Pt100 clase A o B) son altamente intercambiables sin necesidad de recalibrar, aunque siempre se recomienda verificar la curva si la aplicación es crítica. Los termopares de clase 2, dentro del mismo tipo, son intercambiables con buena tolerancia. Los termistores presentan la peor intercambiabilidad, a menos que se adquieran modelos con tolerancia estrecha (por ejemplo, NTC tipo 3 con ±0,2 °C).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/temperature-sensors-d_448.html
- **plcacademy.com**: https://www.plcacademy.com/thermocouple/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/process_control_-a-_measurement/temperature_sensors_-a-_transmitters/temperature_sensors
