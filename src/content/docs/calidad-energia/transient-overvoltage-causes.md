---
title: "Sobretensiones transitorias causas"
sidebar:
  label: "Sobretensiones transitorias causas"
description: "Ficha tecnica: Sobretensiones transitorias causas"
keywords: ["transient overvoltage causes protection", "calidad-energia"]
category: "calidad-energia"
topic: "transients"
subcategory: "transient-overvoltage"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Las sobretensiones transitorias son incrementos súbitos de tensión de corta duración, típicamente inferiores a 10 µs, que pueden alcanzar picos de 6000 V e incluso superar 1000 V en circuitos industriales. Se originan tanto por fenómenos externos como internos al sistema eléctrico, y representan una amenaza para el aislamiento y el funcionamiento de los equipos.

## Causas de las sobretensiones transitorias

### Descargas atmosféricas (rayos)
Un impacto directo de rayo sobre una línea de distribución puede generar sobretensiones superiores a 50 000 V. Los transformadores de distribución atenúan estos pulsos con un factor que varía entre 1 y 6, de modo que la sobretensión que finalmente alcanza los circuitos internos puede ser todavía de varios miles de voltios. Los rayos también inducen sobretensiones sin contacto directo, debido al campo electromagnético que acompaña la descarga.

### Conmutación de cargas (maniobras de interruptores y contactores)
La conexión o desconexión de cargas inductivas —motores, electroimanes, fuentes de alimentación— provoca variaciones bruscas de corriente. En la apertura de un circuito con carga, el fenómeno de “current chopping” (corte de corriente) eleva la tensión de forma transitoria. La conmutación de un motor puede generar picos de hasta 2500 V. En líneas de transmisión sin carga, al energizar o desenergizar la línea la tensión puede duplicarse momentáneamente respecto a la nominal.

### Fallas de aislamiento y arqueo a tierra
Cuando un conductor activo entra en contacto con tierra de manera accidental, la súbita puesta a tierra provoca una redistribución rápida de la tensión que se traduce en un transitorio. Las fallas de aislamiento en cables, transformadores o máquinas rotativas también inducen sobretensiones transitorias de corta duración.

### Resonancia
Si la forma de onda de la tensión está distorsionada por armónicos de orden elevado (quinto armónico o superior), puede darse una situación de resonancia en la que la reactancia inductiva y capacitiva del sistema se anulen. En ese instante la impedancia es mínima y la tensión puede aumentar significativamente, generando un transitorio de frecuencia distinta a la fundamental.

## Magnitudes típicas de sobretensiones transitorias

| Origen | Tensión máxima | Duración típica |
| --- | --- | --- |
| Descarga atmosférica directa en línea de distribución | >50 000 V / >50 kV | <10 µs |
| Sobretensión inducida por rayo en circuitos internos | 6000 V / 6 kV | <10 µs |
| Conmutación de motores eléctricos | 2500 V / 2,5 kV | <10 µs |
| Conmutación de líneas de transmisión sin carga | 2 × V_nominal (p. ej., 460 V para 230 V) | <10 µs |

## Consecuencias de las sobretensiones transitorias

Las sobretensiones transitorias buscan el camino de menor resistencia hacia tierra y generan calor en los componentes del circuito, lo que acelera la degradación del aislamiento y puede provocar fallas prematuras. En equipos electrónicos sensibles, un solo transitorio de alta energía basta para dañar semiconductores o destruir pistas de circuitos impresos. Además, los picos repetitivos reducen gradualmente la vida útil de los equipos e incrementan el riesgo de incendio por sobrecalentamiento localizado.

## Protección contra sobretensiones transitorias

La protección más eficaz frente a transitorios externos (rayos) se logra con una combinación de descargadores de sobretensión (DPS) —también llamados pararrayos o limitadores de sobretensión—, hilos de guarda sobre las líneas de transmisión y pantallas de puesta a tierra en las subestaciones. Para los transitorios internos se emplean supresores de picos (TVSS) en los tableros de distribución y dispositivos de protección en los equipos sensibles, como varistores, diodos de supresión de transitorios (TVS) y filtros de red. La coordinación de estos dispositivos permite derivar a tierra la energía del transitorio y restablecer el aislamiento una vez que la tensión vuelve a su valor normal.

## Preguntas frecuentes (FAQ)

### ¿Qué es una sobretensión transitoria?
Es un aumento repentino de la tensión que dura menos de 10 µs, con picos que pueden superar varios miles de voltios, causado por rayos, conmutación de cargas o fallas del sistema.

### ¿Cuáles son las causas más comunes de las sobretensiones transitorias?
Las descargas atmosféricas (rayos) y las maniobras de conexión/desconexión de cargas inductivas (motores, transformadores) explican la mayoría de los transitorios en sistemas eléctricos.

### ¿Cómo se diferencia una sobretensión transitoria de una sobretensión temporal?
La transitoria dura microsegundos y se caracteriza por un pulso de alta frecuencia; la temporal (o de frecuencia industrial) persiste varios ciclos, incluso segundos, y suele deberse a desequilibrios del sistema o fallas sostenidas.

### ¿Qué efectos tienen las sobretensiones transitorias en los equipos electrónicos?
Producen envejecimiento prematuro de componentes, fallas aleatorias, reinicios no deseados y, en casos severos, destrucción inmediata de semiconductores y circuitos integrados.

### ¿Cómo se protege un sistema eléctrico contra sobretensiones transitorias?
Instalando descargadores de sobretensión en la entrada del servicio, supresores de picos en tableros secundarios y dispositivos de protección local en equipos sensibles, además de mantener una correcta puesta a tierra y equipotencialidad.

### ¿Qué dispositivo es más eficaz para proteger contra rayos?
El descargador de sobretensión (pararrayos) coordinado con un sistema de puesta a tierra de baja impedancia es la defensa primaria; deriva la corriente del rayo a tierra y limita la tensión residual al nivel seguro para los equipos conectados.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/overvoltage-protection/
