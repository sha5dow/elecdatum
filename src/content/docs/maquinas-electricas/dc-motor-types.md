---
title: "Tipos de motores de corriente directa"
sidebar:
  label: "Tipos de motores de corriente directa"
description: "Ficha tecnica: Tipos de motores de corriente directa"
keywords: ["DC motor types series shunt compound", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "dc-motor-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Existen más de 5 configuraciones básicas de motores de corriente directa, clasificadas según la conexión de sus devanados de campo, con potencias que van desde fracciones de watt hasta varios megavatios y eficiencias típicas entre 70 % y 95 %. Estas máquinas convierten energía eléctrica de corriente continua en energía mecánica rotativa, siendo los primeros motores eléctricos de uso masivo gracias a su facilidad de control de velocidad y alto par de arranque.

La velocidad de un motor DC está gobernada por la ecuación \( V = E_b + I_a R_a \), donde \( E_b \) (fuerza contraelectromotriz) es proporcional al flujo magnético y a la velocidad angular, con velocidades nominales que pueden variar desde 1000 rpm / 16.7 rps hasta 3000 rpm / 50 rps. El campo magnético del estator, generado por imanes permanentes o electroimanes, interactúa con la corriente que circula por la armadura para producir un torque electromagnético que impulsa el rotor. El colector (conmutador) y las escobillas invierten la corriente en las bobinas de la armadura cada media vuelta, manteniendo el par en la misma dirección.

## Clasificación de los motores de corriente directa
Los motores DC se dividen en dos grandes grupos: de imanes permanentes y de campo bobinado; estos últimos se subdividen en 3 categorías según la conexión del devanado de campo: excitación independiente, autoexcitados (shunt, serie y compound). Cada configuración ofrece características velocidad‑par particulares que determinan su aplicación industrial.

### Motor de imanes permanentes (PMDC)
El campo magnético del estator lo producen imanes permanentes de alta densidad de flujo. Al no requerir devanado de campo, la corriente de armadura es la única variable de control. La velocidad es prácticamente lineal con la tensión aplicada y el torque es directamente proporcional a la corriente de armadura, ya que \( \phi = \) constante. Se emplea en aplicaciones de baja potencia como juguetes, herramientas inalámbricas y actuadores.

### Motor con excitación independiente
El devanado de campo y el devanado de armadura se alimentan con fuentes de corriente continua separadas. El flujo de campo \( \phi \) puede ajustarse independientemente de la corriente de armadura \( I_a \), lo que permite un control preciso del par y la velocidad. La corriente de campo no depende de la carga, lo que facilita el control en lazo cerrado para accionamientos de precisión.

### Motor shunt (derivación)
El devanado de campo se conecta en paralelo con la armadura, de modo que toda la tensión de línea \( V \) se aplica al campo. La corriente de campo \( I_f = V / R_f \) es constante si la tensión es estable, manteniendo el flujo prácticamente fijo. La velocidad apenas varía con la carga (característica de velocidad constante). El par es proporcional a la corriente de armadura, lo que da una curva velocidad‑par ligeramente decreciente. Se usa en bombas centrífugas, ventiladores y máquinas herramienta donde se requiere velocidad regulada.

### Motor serie
El devanado de campo está en serie con la armadura, por lo que la corriente de campo es igual a la corriente de armadura. A bajas velocidades, la alta corriente produce un fuerte flujo magnético, generando un par de arranque muy elevado (hasta 5 veces el par nominal). La velocidad cae drásticamente al aumentar la carga, e inversamente, sin carga el motor puede embalarse. Aplicaciones típicas: tracción eléctrica, grúas, arrancadores de motores de combustión y herramientas portátiles de alta potencia.

### Motor compound (compuesto)
Combina un devanado serie y otro shunt sobre el mismo núcleo de campo. Según la disposición puede ser:
- **Compound acumulativo**: los flujos serie y shunt se suman, mejorando la regulación de velocidad respecto al motor serie y elevando el par de arranque respecto al shunt.
- **Compound diferencial**: los flujos se oponen; ofrece una regulación de velocidad casi constante pero puede inestabilizarse con sobrecargas.

Además, la conexión física determina:
- **Compound largo**: el devanado serie está en serie con la armadura y el shunt en paralelo con el conjunto armadura+serie.
- **Compound corto**: el devanado shunt está en paralelo con la armadura y el serie en serie con la línea.

Aplicaciones: ascensores, prensas, laminadores y sistemas que requieren alto par de arranque con velocidad controlada.

## Ecuaciones fundamentales

> **η_m = P_{salida} / P_{entrada}**

Donde \( P_{salida} \) es la potencia mecánica en el eje (W) y \( P_{entrada} \) la potencia eléctrica de entrada (W). Si la potencia de salida se mide en caballos de fuerza (hp), la expresión equivalente es:

> **η_m = P_{salida} × 746 / P_{entrada}**

| Variable | Significado |
| --- | --- |
| η_m | Eficiencia del motor (adimensional) |
| P_{salida} | Potencia en el eje (W o hp) |
| P_{entrada} | Potencia eléctrica de entrada (W) |
| 746 | Factor de conversión: 1 hp = 746 W |

La ecuación de torque electromagnético para cualquier motor DC es:

> **T = K_a φ I_a**

| Variable | Significado | Unidad |
| --- | --- | --- |
| T | Torque electromagnético | N·m / lb·ft |
| K_a | Constante constructiva de la armadura | — |
| φ | Flujo magnético por polo | Wb |
| I_a | Corriente de armadura | A |

La velocidad angular en régimen permanente se obtiene de:

> **ω = \frac{V - I_a R_a}{K_a φ}**

donde \( V \) es la tensión de línea, \( R_a \) la resistencia de armadura y \( ω \) la velocidad angular (rad/s). Convertida a revoluciones por minuto (rpm), resulta:

> **n = \frac{60}{2π} ω**

## Tabla comparativa de tipos de motores DC

| Tipo | Conexión del campo | Característica velocidad‑par | Par de arranque (relación al nominal) | Aplicaciones típicas |
| --- | --- | --- | --- | --- |
| Imanes permanentes | No requiere devanado (imanes) | Lineal, velocidad proporcional a la tensión | 1.5 – 2.5 veces | Herramientas inalámbricas, robótica, electrodomésticos |
| Excitación independiente | Alimentación separada | Regulable ampliamente | 1.5 – 2.5 veces | Accionamientos de precisión, máquinas herramienta CNC |
| Shunt (derivación) | Campo en paralelo con armadura | Velocidad casi constante, ligeramente decreciente con la carga | 1.3 – 1.8 veces | Bombas centrífugas, ventiladores, compresores |
| Serie | Campo en serie con armadura | Alta velocidad en vacío, fuerte caída con carga; par elevado a baja velocidad | 4 – 5 veces | Tracción eléctrica, grúas, arrancadores |
| Compound acumulativo | Serie + shunt (flujos sumados) | Regulación intermedia, buen par de arranque | 2 – 3 veces | Ascensores, laminadores, prensas |
| Compound diferencial | Serie + shunt (flujos opuestos) | Velocidad muy estable (casi constante) | 1.5 – 2 veces | Aplicaciones especiales donde se necesita velocidad invariable con la carga |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la eficiencia típica de un motor DC pequeño?
Los motores DC pequeños de hasta 1 hp muestran eficiencias nominales entre 70 % y 85 %, dependiendo del diseño y la calidad de los materiales. En motores industriales de mayor potencia, la eficiencia puede superar el 90 % a plena carga.

### ¿Qué rango de velocidad alcanza un motor shunt de 4 polos alimentado a 60 Hz?
Un motor shunt de 4 polos diseñado para 1800 rpm / 30 rps síncronas gira típicamente a 1725 rpm / 28.75 rps a plena carga, con una regulación de velocidad inferior al 5 % entre vacío y plena carga.

### ¿Cuál es la corriente de armadura típica de un motor compound de 10 hp a 500 V?
Un motor compound de 10 hp (7.46 kW) y 500 V consume cerca de 15 A de corriente de armadura a plena carga, mientras que la corriente del campo shunt ronda los 0.5 A, resultando en una corriente total de línea de aproximadamente 15.5 A.

### ¿Qué resistencia de armadura presenta un motor DC de 2 hp?
La resistencia de armadura en motores DC de 2 hp, 180 V oscila entre 0.2 Ω y 1.0 Ω, lo que provoca una caída de tensión interna de 2 V a 10 V a plena carga y afecta la pendiente de la característica velocidad‑corriente.

### ¿Cuál es el límite de velocidad segura para un motor shunt sin carga?
Un motor shunt puede embalarse hasta 3000 rpm / 50 rps si se interrumpe el campo mientras la armadura recibe tensión plena; por ello, los sistemas de protección limitan la velocidad máxima al 120 % de la velocidad nominal, por ejemplo, 2160 rpm para un motor de 1800 rpm.

### ¿Qué par de arranque relativo desarrolla un motor serie frente a uno shunt?
Los motores serie desarrollan hasta 5 veces el par nominal, mientras que un motor shunt entrega típicamente 1.3 a 1.8 veces el par nominal. Esta diferencia hace que el motor serie sea preferido en aplicaciones que exigen arranque con carga pesada.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-efficiency-d_655.html
- **electrical4u.com**: https://www.electrical4u.com/types-of-dc-motor-separately-excited-shunt-series-compound-dc-motor/
