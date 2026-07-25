---
title: "Valores aceptables de resistencia de tierra"
sidebar:
  label: "Valores aceptables de resistencia de tierra"
description: "Ficha tecnica: Valores aceptables de resistencia de tierra"
keywords: ["acceptable ground resistance value ohms", "puesta-tierra"]
category: "puesta-tierra"
topic: "resistance-testing"
subcategory: "acceptable-ground-resistance"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La resistencia de tierra es el valor óhmico que ofrece el electrodo de puesta a tierra al paso de la corriente eléctrica hacia el terreno. Un valor bajo y estable es esencial para garantizar la seguridad de las personas, la protección de equipos y el correcto funcionamiento de dispositivos de protección contra sobretensiones. La práctica general establece un máximo de 25 Ω, aunque aplicaciones críticas exigen valores muy inferiores.

## Valores aceptables de resistencia

El valor de resistencia de tierra generalmente aceptado no debe superar los 25 Ω para sistemas de protección según el NEC. En instalaciones con equipos electrónicos sensibles se recomiendan valores mucho más estrictos, como se recoge en la siguiente tabla.

| Aplicación | Resistencia de tierra máxima recomendada |
| --- | --- |
| Protección general de edificios (NEC 250.56) | 25 Ω |
| Sistemas de comunicación (telefonía, radio) | < 3 Ω |
| Centros de datos, equipos electrónicos críticos | < 1 Ω |

Cuando una sola jabalina no alcanza los 25 Ω, el NEC exige instalar una segunda jabalina separada al menos 1,83 m / 6 ft. No obstante, no obliga a superar ese valor aunque la resistencia combinada siga siendo elevada, por lo que en la práctica muchos proyectistas buscan obtener la resistencia adecuada al tipo de instalación.

## Factores que afectan la resistencia de tierra

La resistividad del suelo, que puede variar desde unos pocos Ω·m hasta miles de Ω·m, es el factor determinante de la resistencia de tierra. La siguiente tabla resume los principales parámetros que modifican dicha resistividad.

| Factor | Efecto sobre la resistencia de tierra |
| --- | --- |
| Humedad del suelo | A mayor contenido de agua, menor resistividad. Suelo seco → alta resistencia. |
| Contenido de sales y minerales | A mayor salinidad, menor resistividad. Suelos ácidos o alcalinos pueden corroer electrodos. |
| Temperatura | Descenso por debajo de 0 °C / 32 °F congela el agua y eleva drásticamente la resistencia. |
| Granulometría y compactación | Suelos finos y compactos presentan menor resistividad que suelos gruesos y sueltos. |
| Profundidad del electrodo | A mayor longitud vertical, menor resistencia; duplicar la longitud puede reducir la resistencia en un 40 %. |
| Contacto electrodo‑suelo | Una mala compactación alrededor del electrodo o corrosión superficial aumentan la resistencia de contacto. |

## Métodos de medición

El método de caída de potencial (3 puntos) es el más común para medir la resistencia de tierra, requiriendo una distancia entre electrodos de al menos 20 m / 65.6 ft. A continuación se describen los procedimientos más utilizados.

| Método | Principio básico | Ventaja principal |
| --- | --- | --- |
| Caída de potencial (3 puntos) | Se inyecta una corriente conocida y se mide la tensión entre el electrodo de tierra y una sonda de potencial. | Alta exactitud. |
| Clamp‑on (inducción) | Una pinza induce una tensión en el electrodo y otra mide la corriente; no requiere picas auxiliares. | Rápido, sin desconexiones, útil en redes con múltiples puestas a tierra. |
| Varilla adjunta (2 puntos) | Se conecta un electrodo auxiliar y se mide la tensión entre este y la puesta a tierra. | Sencillo, sin necesidad de desconectar. |
| Estrella‑delta | Tres picas auxiliares en triángulo; se inyecta corriente entre pares y se miden tensiones; se calcula mediante leyes de Kirchhoff. | No requiere desconexiones, adecuado para terrenos extensos. |
| Tierra muerta | Se emplean dos picas en serie con el medidor; una cerca del electrodo y otra alejada. | Mide directamente la resistencia de tierra activa. |

En todos los métodos se aplica la ley de Ohm para calcular la resistencia:

> **R = V / I**

donde R es la resistencia de tierra, V la tensión medida e I la corriente inyectada.

## Métodos para mejorar la resistencia

Agregar sales o carbón vegetal alrededor del electrodo puede reducir la resistencia de tierra en más del 50 %. Las técnicas habituales se resumen a continuación.

| Técnica | Descripción | Reducción esperada |
| --- | --- | --- |
| Tratamiento químico | Sal común (NaCl) o carbón vegetal mezclado con tierra alrededor del electrodo. | 30 – 80 % |
| Múltiples electrodos en paralelo | Dos o más jabalinas separadas al menos la longitud del electrodo, preferiblemente ≥ 6 m / 19.7 ft. | Disminuye la resistencia total del sistema. |
| Incremento de la profundidad | Hincar una jabalina más larga o alcanzar la capa freática permanente. | Hasta 40 % al duplicar la longitud. |
| Electrodo en anillo | Conductor enterrado en zanja de al menos 0,76 m / 2.5 ft rodeando la instalación. | Mejora la disipación de altas corrientes. |
| Electrodo empotrado en concreto | Aprovecha la baja resistividad del hormigón en contacto con la humedad del suelo (cimiento de hormigón armado). | Resistencia muy estable en el tiempo. |

## Preguntas frecuentes (FAQ)

### ¿Cuál es el valor máximo de resistencia de tierra que exige la normativa?

El NEC no fija un máximo absoluto, pero establece que si una jabalina supera los 25 Ω debe instalarse una segunda. Normas particulares de telecomunicaciones o centros de datos pueden exigir menos de 3 Ω o incluso menos de 1 Ω.

### ¿Por qué la resistencia de tierra no mejora significativamente duplicando el número de jabalinas?

Para que dos jabalinas en paralelo reduzcan la resistencia de forma apreciable deben estar separadas al menos la longitud de cada una (idealmente 6 m / 20 ft o más). Si se colocan demasiado juntas, sus zonas de influencia se solapan y apenas se gana conductividad.

### ¿Afecta la temperatura ambiente a la resistencia de tierra?

Sí, cuando el suelo se congela la resistividad puede multiplicarse por diez o más. Por ello, en climas fríos los electrodos deben instalarse por debajo de la línea de congelación, típicamente a más de 1,5 m / 5 ft de profundidad.

### ¿Qué método de medición es más fiable en instalaciones existentes sin desconexión?

El método de pinza (clamp‑on) es el más práctico porque no requiere abrir el circuito ni hincar picas, siempre que existan varios electrodos en paralelo que permitan el retorno de la corriente inducida.

### ¿Es eficaz añadir sal común para bajar la resistencia?

Reduce la resistencia a corto plazo, pero la sal se lava con el agua de lluvia, puede corroer el electrodo y contaminar el suelo. Hoy se prefieren compuestos de relleno conductivo permanentes (bentonita o cemento conductivo).

### ¿Cada cuánto tiempo debe medirse la resistencia de puesta a tierra?

En instalaciones industriales y de comunicaciones se recomienda una medición anual, o cada vez que se realicen modificaciones en el sistema eléctrico, así como después de tormentas eléctricas intensas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/resistors-standard-values-d_1659.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-of-earth/
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Ground-Resistance-It-is-Not-What-You-Think-(12-30-99).php
