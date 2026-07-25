---
title: "Lógica de escalera (ladder logic) fundamentos"
sidebar:
  label: "Lógica de escalera (ladder logic) fundamentos"
description: "Ficha tecnica: Lógica de escalera (ladder logic) fundamentos"
keywords: ["ladder logic PLC programming basics", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "ladder-logic-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La lógica de escalera (ladder logic) es un lenguaje de programación gráfico normalizado para controladores lógicos programables (PLC), definido en el estándar IEC 61131-3. Su representación se basa en dos líneas verticales de alimentación y líneas horizontales llamadas peldaños (rungs), sobre las que se disponen contactos y bobinas que emulan el comportamiento de circuitos eléctricos de relés. Esta analogía facilita la migración desde sistemas cableados y permite la implementación de funciones lógicas combinacionales y secuenciales en automatización industrial.

## Estructura y representación gráfica
Cada diagrama de escalera se organiza en peldaños que conectan la barra de alimentación izquierda (comienzo del flujo lógico) con la barra derecha. Un peldaño se evalúa de izquierda a derecha, estableciendo una continuidad lógica cuando todos los contactos en el camino están cerrados. El orden vertical de los peldaños determina la secuencia de ejecución (de arriba hacia abajo) en cada ciclo de scan del PLC.

## Instrucciones básicas: contactos y bobinas
Los elementos fundamentales de la lógica de escalera son los contactos (entradas lógicas) y las bobinas (salidas lógicas). La norma IEC 61131-3 define símbolos normalizados para contactos normalmente abiertos (NA), normalmente cerrados (NC) y bobinas de salida directa o negada.

| Símbolo IEC | Denominación | Función |
| --- | --- | --- |
| `-| |-` | Contacto normalmente abierto | Cierra el circuito cuando la variable asociada está en estado lógico 1 (verdadero) |
| `-|/|-` | Contacto normalmente cerrado | Cierra el circuito cuando la variable asociada está en estado lógico 0 (falso) |
| `-( )-` | Bobina de salida directa | Se activa cuando el peldaño tiene continuidad lógica |
| `-(/)-` | Bobina negada | Se activa cuando el peldaño no tiene continuidad lógica |

Cada contacto y bobina está asociado a una dirección de memoria del PLC, que puede representar entradas físicas (pulsadores, finales de carrera), salidas físicas (contactores, lámparas) o marcas internas.

## Ciclo de scan y orden de ejecución
Un PLC ejecuta la lógica de escalera de forma cíclica en lo que se conoce como ciclo de scan. Durante cada iteración:
1. Lee el estado de todas las entradas físicas.
2. Procesa secuencialmente cada peldaño, de arriba hacia abajo y de izquierda a derecha, actualizando solo las imágenes internas.
3. Al finalizar todos los peldaños, transfiere las imágenes de salida a los módulos físicos.

La duración del ciclo de scan depende del número de instrucciones y de la capacidad del procesador. En aplicaciones prácticas se encuentran valores típicos según la categoría del PLC:

| Categoría del PLC | Duración típica del ciclo de scan (ms) |
| --- | --- |
| Nano / micro PLC | 1 – 10 ms / 0.001 – 0.01 s |
| PLC compacto | 5 – 50 ms / 0.005 – 0.05 s |
| PLC modular de alta gama | 0.5 – 20 ms / 0.0005 – 0.02 s |

El modelo de ejecución secuencial implica que las salidas físicas solo se actualizan al término del scan. Por esta razón, la colocación de bobinas múltiples en un mismo peldaño o el uso de instrucciones de realimentación requiere atención especial para evitar comportamientos no deseados.

## Lógica combinacional con contactos
La combinación de contactos en serie y paralelo permite implementar funciones booleanas. Para un peldaño con dos contactos NA en serie, la bobina se activa si ambas variables son verdaderas (función AND). Con dos contactos NA en paralelo, la bobina se activa si al menos una variable es verdadera (función OR). La expresión lógica de un peldaño básico se puede formalizar como:

> **Q = (A · B) + C**

donde A, B, C representan contactos y Q la bobina. Esta notación facilita la verificación e integración con otros lenguajes IEC.

## Consideraciones de cableado e instalación
Aunque la lógica de escalera es independiente del hardware, la integridad de las señales digitales exige respetar distancias máximas de cableado para evitar caídas de tensión e interferencias. En sistemas que operan a 24 Vcc se recomiendan las siguientes longitudes orientativas:

| Tipo de señal | Distancia máxima recomendada |
| --- | --- |
| Entrada digital (24 Vcc) | 100 m / 328 ft |
| Salida digital (24 Vcc, carga resistiva) | 50 m / 164 ft |
| Entrada/salida analógica (4–20 mA) | 150 m / 492 ft |

Estos valores pueden variar según la sección del conductor y el entorno electromagnético; siempre debe consultarse la documentación del fabricante del PLC.

## Normas y estándares aplicables
La lógica de escalera está estandarizada internacionalmente en **IEC 61131-3**, dentro del conjunto IEC 61131 para controladores programables. Esta norma define la sintaxis, semántica y representación gráfica, garantizando portabilidad entre entornos de programación de distintos fabricantes. PLCOpen es la organización encargada de promover la conformidad y certificación con esta norma.

## Fuentes consultadas

- **plcacademy.com**: https://www.plcacademy.com/ladder-logic-tutorial/
- **automationdirect.com**: https://www.automationdirect.com/clickplcs/getting-started/programming
