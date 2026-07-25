---
title: "Comparativa contactor vs relevador"
sidebar:
  label: "Comparativa contactor vs relevador"
description: "Ficha tecnica: Comparativa contactor vs relevador"
keywords: ["contactor vs relay comparison", "sistemas-control"]
category: "sistemas-control"
topic: "contactors"
subcategory: "contactor-vs-relay"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un contactor y un relevador son dispositivos electromecánicos gobernados por una bobina que, al energizarse, abre o cierra contactos eléctricos. La diferencia esencial radica en la capacidad de manejo de potencia: un relevador estándar conmuta corrientes inferiores a 15 amperios y potencias de algunos cientos de vatios, mientras que un contactor está diseñado para controlar cargas a partir de 15 amperios y varios kilovatios, como motores eléctricos, sistemas de iluminación y bancos de capacitores.

## Definición y principio de funcionamiento
Un contactor es un tipo de relevador con una capacidad de corriente y tensión elevada. Se define operativamente por su aptitud para maniobrar cargas superiores a 15 A o circuitos de más de unos pocos kilovatios. Ambos funcionan según el mismo principio electromagnético: al aplicar una tensión a la bobina, se genera un campo magnético que atrae un núcleo móvil solidario con los contactos principales, cerrándolos. Al desaparecer la excitación, los contactos retornan a su posición de reposo mediante un resorte. La gran diferencia está en que el contactor incorpora estructuras pensadas para interrumpir corrientes elevadas y soportar arcos eléctricos de manera fiable.

## Componentes y características constructivas
Un contactor consta de contactos de potencia fabricados con aleaciones de plata, tungsteno o cobre (a menudo con aditivos como óxido de cadmio para resistir el arco), un electroimán con bobina de fuerza, una envolvente aislante de materiales termoestables o nylon y, en los modelos de corriente continua, sopladores magnéticos que alargan y extinguen el arco. Frente a ello, los relevadores convencionales suelen usar contactos de menor sección, carecen de sopladores, y la mayoría ofrece tanto contactos normalmente abiertos (NO) como normalmente cerrados (NC). Los contactores, en cambio, se suministran casi exclusivamente con contactos principales de tipo normalmente abierto (Forma A), aunque pueden añadirse bloques auxiliares de baja corriente. Además, los contactores de CC incorporan con frecuencia un circuito economizador que reduce la corriente de mantenimiento de la bobina una vez cerrados los contactos principales, ahorrando energía y limitando el calentamiento.

## Tabla comparativa de parámetros eléctricos y mecánicos
| Parámetro | Contactor | Relevador estándar |
| --- | --- | --- |
| **Corriente nominal de carga** | >15 A — hasta miles de A | <15 A (típicamente 2 A a 10 A) |
| **Tensión nominal de maniobra** | 24 V CC/CA hasta 690 V CA (llegando a varios kV) | Generalmente ≤250 V CA / 30 V CC |
| **Potencia controlada** | Varias decenas de kW hasta centenares de kW | ≤2,5 kW |
| **Configuración de contactos de fuerza** | Principalmente NA (Forma A) | NA, NC o conmutados (Forma C) |
| **Supresión del arco eléctrico** | Cámaras apagachispas, sopladores magnéticos (en CC), separación amplia de contactos | Separación de contactos sin elementos adicionales de extinción |
| **Tamaño físico** | Desde unos centímetros (≈ 1 pulgada) hasta aproximadamente 1 m / 39,4 in de lado | Compacto, típicamente de unos 20 mm / 0,79 in a 50 mm / 1,97 in de ancho |
| **Tensión típica de bobina** | 24 V CA/CC, 120 V, 230 V, 400 V, hasta 600 V CA | 5 V, 12 V, 24 V CC; ocasionalmente 230 V CA |
| **Vida útil eléctrica** | 100 000 a 1 000 000 de maniobras con carga nominal | >10 000 000 de maniobras con carga reducida |

## Aplicaciones típicas
Los contactores se emplean en el arranque y control de motores trifásicos (formando parte de arrancadores magnéticos IEC/NEMA), en baterías de condensadores, en circuitos de calefacción industrial, en alumbrado de grandes instalaciones y en sistemas de evacuación de humos. En todos estos casos la corriente de inserción o la corriente permanente superan los 15 amperios. Los relevadores, en cambio, se ocupan del pilotaje, la lógica cableada, las interfaces de autómatas programables, el control de electroválvulas o la interposición de señales; es decir, circuitos de mando donde la potencia conmutada es reducida.

## Criterios de selección
La decisión entre contactor y relevador se basa en la corriente que debe manejar la carga, la tensión del circuito de potencia y la necesidad de extinguir arcos en condiciones severas. Si la corriente supera los 15 A o la potencia de la carga excede unos 2‑3 kW, se necesita un contactor. También es preferible un contactor cuando la carga es fuertemente inductiva (motores, bobinas de gran tamaño) y el pico de conexión puede fundir los contactos de un relevador. Cuando la aplicación solo requiere conmutar una señal, una bobina de contacto pequeño o una lámpara piloto, un relevador es más económico y compacto. Otros factores son la frecuencia de maniobras —los relevadores de propósito general suelen soportar ciclos muy rápidos— y el entorno: los contactores poseen envolventes que cumplen grados de protección IP hasta IP65, mientras que los relevadores se instalan normalmente en armarios eléctricos.

## Preguntas frecuentes (FAQ)
### ¿Un contactor puede sustituir a un relevador en un circuito de control?
Sí, técnicamente puede hacerlo, pero no es económico ni práctico: un contactor es más voluminoso, más caro y su bobina consume más potencia que la de un relevador de señal. Por ello, en circuitos de mando se emplean relevadores.

### ¿Por qué la mayoría de los contactores de potencia no tienen contactos normalmente cerrados?
Porque su misión es alimentar cargas como motores que deben estar desenergizadas en reposo. Los contactos normalmente cerrados aparecen solo como bloques auxiliares para enclavamientos y señalización, y se añaden por separado.

### ¿Qué ocurre si un relevador se utiliza para conmutar la corriente de arranque de un motor de 2 kW?
Un motor de 2 kW en 230 V CA puede absorber más de 10 A en régimen y picos de arranque de hasta 60 A. Los contactos del relevador se degradarían rápidamente por el arco y podrían soldarse, perdiendo la capacidad de apertura.

### ¿Cuál es la función de los sopladores magnéticos en un contactor de corriente continua?
Los sopladores magnéticos generan un campo que alarga y desplaza el arco eléctrico fuera de la zona de contactos, aumentando la tensión de arco hasta extinguirlo. Con ello se puede elevar la capacidad de ruptura, por ejemplo de 600 A a 1500 A en algunos modelos de CC.

### ¿Por qué algunos contactores incluyen un circuito economizador en la bobina?
Para reducir la corriente de mantenimiento una vez que el contactor ha cerrado. Se necesita más energía para cerrar los contactos que para mantenerlos cerrados; el economizador la disminuye, ahorrando potencia y evitando el sobrecalentamiento de la bobina, sobre todo en contactores de CC.

### ¿Se puede usar un contactor como elemento de protección contra cortocircuitos?
No, un contactor no está diseñado para interrumpir corrientes de cortocircuito. Para esa función se deben instalar fusibles o interruptores automáticos aguas arriba, que se coordinan con el contactor para proteger la instalación.

## Fuentes consultadas

- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/motor_controls
