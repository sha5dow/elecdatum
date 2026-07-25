---
title: "Corriente de rotor bloqueado LRA"
sidebar:
  label: "Corriente de rotor bloqueado LRA"
description: "Ficha tecnica: Corriente de rotor bloqueado LRA"
keywords: ["locked rotor current LRA calculation motor", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "motor-electrical"
subcategory: "locked-rotor-current"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La corriente de rotor bloqueado (LRA, por sus siglas en inglés) es la corriente estacionaria que absorbe un motor de inducción cuando su rotor se encuentra mecánicamente inmovilizado y se aplica tensión nominal en bornes. Su valor suele ser de **5 a 8 veces la corriente a plena carga (FLA)**, pudiendo ser mayor en motores de diseño especial, y constituye un parámetro crítico para el dimensionamiento de protecciones, conductores y transformadores.

## Códigos de letra NEMA para corriente de rotor bloqueado

La NEMA (National Electrical Manufacturers Association) clasifica los motores según la relación entre los kVA absorbidos con rotor bloqueado y la potencia en hp. Cada letra de código indica un rango de kVA/hp, que permite estimar la LRA sin necesidad de ensayar cada motor.

| Código NEMA | kVA/hp con rotor bloqueado | LRA típica a 460 V / 460 V (aprox.) |
| --- | --- | --- |
| A | 0,00 – 3,14 | 0 – 39 A |
| B | 3,15 – 3,54 | 40 – 44 A |
| C | 3,55 – 3,99 | 45 – 50 A |
| D | 4,00 – 4,49 | 51 – 56 A |
| E | 4,50 – 4,99 | 57 – 62 A |
| F | 5,00 – 5,59 | 63 – 70 A |
| G | 5,60 – 6,29 | 71 – 79 A |
| H | 6,30 – 7,09 | 80 – 89 A |
| J | 7,10 – 7,99 | 90 – 100 A |
| K | 8,00 – 8,99 | 101 – 113 A |
| L | 9,00 – 9,99 | 114 – 126 A |
| M | 10,00 – 11,19 | 127 – 141 A |
| N | 11,20 – 12,49 | 142 – 158 A |
| P | 12,50 – 13,99 | 159 – 176 A |
| R | 14,00 – 15,99 | 177 – 201 A |
| S | 16,00 – 17,99 | 202 – 227 A |
| T | 18,00 – 19,99 | 228 – 253 A |
| U | 20,00 – 22,39 | 254 – 284 A |
| V | 22,40 y más | 285 A en adelante |

Los valores de LRA se estiman para un motor de 10 hp a 460 V; la corriente real varía con la tensión y la potencia nominal.

## Ensayo de rotor bloqueado

El ensayo de rotor bloqueado, también denominado ensayo de cortocircuito, se realiza para determinar la impedancia de dispersión del motor, las pérdidas en el cobre y la corriente de cortocircuito a tensión nominal. Consiste en bloquear mecánicamente el rotor, aplicar una tensión reducida al estator y elevar gradualmente el voltaje hasta que circule la corriente nominal. Se registran la tensión aplicada (V<sub>S</sub>), la corriente de línea (I<sub>S</sub>) y la potencia total de entrada (W<sub>S</sub>).

Para motores de jaula de ardilla, la frecuencia de ensayo suele ser la nominal; en rotores bobinados se cortocircuitan las fases a través de los anillos rozantes. La prueba debe ejecutarse con rapidez para evitar un calentamiento excesivo de los devanados.

## Cálculo de parámetros del ensayo

A partir de los valores medidos se obtienen los parámetros del modelo equivalente del motor. La impedancia, resistencia y reactancia de cortocircuito por fase, referidas al estator, se calculan así:

> **Z<sub>01</sub> = V<sub>S</sub> / I<sub>S</sub>**

> **R<sub>01</sub> = (W<sub>cu</sub>) / (3 · I<sub>S</sub><sup>2</sup>)**, donde **W<sub>cu</sub> = W<sub>S</sub> – W<sub>c</sub>**

> **X<sub>01</sub> = √(Z<sub>01</sub><sup>2</sup> – R<sub>01</sub><sup>2</sup>)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| V<sub>S</sub> | Tensión de cortocircuito aplicada por fase | V |
| I<sub>S</sub> | Corriente de cortocircuito por fase | A |
| W<sub>S</sub> | Potencia trifásica total medida | W |
| W<sub>c</sub> | Pérdidas en el núcleo (se desprecian por la baja tensión) | W |
| W<sub>cu</sub> | Pérdidas totales en el cobre | W |
| R<sub>01</sub> | Resistencia equivalente por fase (estator + rotor referido) | Ω |
| X<sub>01</sub> | Reactancia de dispersión equivalente por fase | Ω |

Las reactancias de estator y rotor se suponen iguales: **X<sub>1</sub> = X<sub>2</sub>′ = X<sub>01</sub> / 2**. La resistencia estatórica R<sub>1</sub> se obtiene con un ensayo en corriente continua, y la rotórica referida **R<sub>2</sub>′ = R<sub>01</sub> – R<sub>1</sub>**.

Para trasladar la corriente de cortocircuito a la tensión nominal V se emplea la proporcionalidad directa:

> **I<sub>SN</sub> = I<sub>S</sub> × (V / V<sub>S</sub>)**

donde V es la tensión nominal entre fases y V<sub>S</sub> la tensión de ensayo.

El factor de potencia en cortocircuito se determina con:

> **cos φ<sub>S</sub> = W<sub>S</sub> / (√3 · V<sub>SL</sub> · I<sub>SL</sub>)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| W<sub>S</sub> | Potencia trifásica medida en cortocircuito | W |
| V<sub>SL</sub> | Tensión de línea aplicada en cortocircuito | V |
| I<sub>SL</sub> | Corriente de línea en cortocircuito | A |

## Factores que afectan la corriente de rotor bloqueado

La LRA no es un valor fijo; depende de varios factores constructivos y operativos:

- **Tensión aplicada**: La corriente varía de forma prácticamente lineal con la tensión; una sobretensión incrementa proporcionalmente la LRA.
- **Frecuencia de alimentación**: El ensayo a frecuencia nominal o reducida (típicamente un cuarto de la nominal, según IEEE) altera la resistencia efectiva del rotor por efecto pelicular, lo que modifica la impedancia y, por tanto, la corriente registrada.
- **Temperatura de los devanados**: A mayor temperatura, mayor resistencia del cobre, reduciendo ligeramente la LRA.
- **Diseño del rotor**: La profundidad de las barras, la forma de la ranura y el material empleado influyen en la relación LRA/FLA. Los motores de alto par de arranque (diseño D, por ejemplo) presentan LRA moderadas; los de alto rendimiento pueden tener LRA más elevadas.

## Consecuencias de una LRA elevada

Una corriente de rotor bloqueado muy alta repercute directamente en la instalación eléctrica:

- **Caída de tensión en la red**: Durante el arranque, la LRA provoca una brusca caída de tensión en los conductores de alimentación, que puede afectar a otros equipos sensibles.
- **Esfuerzos térmicos**: Aunque el tiempo de arranque sea breve, el efecto Joule (I²R) eleva rápidamente la temperatura de los devanados; si el motor no gira, la ausencia de ventilación agrava el calentamiento.
- **Dimensionamiento de protecciones**: Los interruptores magnetotérmicos, contactores y relés de sobrecarga deben ser capaces de soportar la LRA durante el tiempo de arranque sin disparar. Se recurre a curvas de disparo clase 10, 20 o 30 según la aplicación y a arrancadores suaves o variadores de frecuencia para limitar la corriente.
- **Esfuerzos electromecánicos**: Las fuerzas magnéticas proporcionales al cuadrado de la corriente someten a los devanados a tensiones mecánicas que pueden provocar desplazamientos o daños si la LRA es excesiva.

## Preguntas frecuentes (FAQ)

### ¿Qué es exactamente la corriente de rotor bloqueado?

Es la máxima corriente que circula por el estator de un motor de inducción cuando el rotor está frenado y se aplica la tensión nominal. Equivale a la corriente de arranque a plena tensión y suele ser de 5 a 8 veces la corriente nominal.

### ¿Por qué la LRA es mucho mayor que la corriente de plena carga?

Con el rotor detenido, el deslizamiento es igual a la unidad y la fuerza contraelectromotriz inducida es nula. La única oposición al paso de la corriente es la pequeña impedancia de dispersión de los devanados, lo que origina una intensidad muy elevada.

### ¿Cómo se emplea el código de letra NEMA?

El código indica el rango de kVA por hp que demanda el motor con el rotor bloqueado. Conocida la tensión y la potencia del motor, se calcula la LRA aproximada: LRA (A) = (kVA/hp × hp × 1000) / (√3 × V). Así se seleccionan las protecciones adecuadas sin necesidad de ensayos.

### ¿Es posible medir la LRA sin un ensayo destructivo?

Sí. El ensayo de rotor bloqueado se realiza a tensión reducida para que la corriente no sobrepase el valor nominal. Luego se extrapola la corriente a la tensión de red mediante la relación I<sub>SN</sub> = I<sub>S</sub> × (V / V<sub>S</sub>). De esta forma no se daña el motor.

### ¿Cuál es la diferencia entre LRA y corriente de arranque?

Ambas coinciden en magnitud cuando el motor arranca a plena tensión y se mide el primer pico de corriente tras el cierre del contactor. Sin embargo, LRA es un valor estacionario medido en condiciones de rotor bloqueado, mientras que la corriente de arranque real puede incluir un transitorio asimétrico de valor algo mayor durante los primeros ciclos.

### ¿Cómo se limita la LRA en la práctica?

Se recurre a métodos de arranque a tensión reducida (estrella-triángulo, autotransformador, arrancadores electrónicos suaves) o a variadores de frecuencia que controlan la relación tensión/frecuencia, limitando la corriente de arranque a valores típicos de 2 a 4 veces la nominal.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-13/wound-rotor-induction-motors/
- **electrical4u.com**: https://www.electrical4u.com/blocked-rotor-test-of-induction-motor/
