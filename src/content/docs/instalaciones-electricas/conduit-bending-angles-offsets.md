---
title: "Dobleces de conducto ángulos y offsets"
sidebar:
  label: "Dobleces de conducto ángulos y offsets"
description: "Ficha tecnica: Dobleces de conducto ángulos y offsets"
keywords: ["conduit bending offset angle calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "raceways"
subcategory: "conduit-bending"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El doblado de conductos eléctricos permite adaptar los tramos de tubería a los cambios de dirección y nivel que exige una instalación, manteniendo la integridad interior del conducto para no entorpecer el posterior cableado. La técnica manual con dobladora de EMT, IMC o conduit rígido se basa en un juego de marcas y multiplicadores que el electricista aplica para obtener ángulos precisos en obra. Los accesorios prefabricados solo son necesarios cuando el trazado supera la capacidad de la herramienta de mano o cuando se trabaja con PVC rígido sin equipo de calor.

## Tipos de dobleces esenciales

| Tipo de doblez | Descripción |
| --- | --- |
| Stub‑up (levantamiento a 90°) | Curva cerrada a 90° cerca del extremo del conducto, usada para subir desde el piso hasta un panel o caja. La altura del stub es la distancia desde el extremo del tubo hasta el centro de la caja. |
| Offset (desviación) | Dos curvas iguales y opuestas que desplazan el conducto manteniendo los extremos paralelos, por ejemplo para salvar un obstáculo o alinear con un knock‑out. |
| Back‑to‑back (curvas espalda con espalda) | Dos curvas de 90° en sentidos contrarios situadas a corta distancia, típicas para sortear un ángulo de salida de caja a techo. |
| Saddle (montura) | Conjunto de tres o cuatro curvas que permite saltar un obstáculo transversal. La montura de tres puntos es la más habitual con dobladora manual. |
| Kick (patada) | Doblez menor de 45° que modifica la dirección del conducto, a menudo usado para compensar pequeños desniveles. |

## Marcas y ángulos en la dobladora manual

La dobladora de EMT incorpora referencias fijas para situar el conducto en función del tipo de curva:

1. **Flecha (arrow)**: se alinea con la marca de stub‑up y con la primera marca de los offsets.
2. **Estrella (star)**: indica el punto de inserción para dobleces back‑to‑back; la curva se realiza hacia el lado opuesto a la primera.
3. **Lágrima (teardrop) o muesca central**: empleada para la curva central de las monturas de tres puntos.
4. **Marcas de grados**: permiten ejecutar directamente dobleces de 10°, 22,5°, 30°, 45° y 60°. El doblez a 90° se obtiene llevando el conducto hasta la posición vertical sin referencia angular numérica; la práctica y la verificación con nivel marcan la ejecución correcta.

## Cálculo de offsets

Para trazar una desviación se marca el conducto con dos distancias a partir de la primera curva. La separación entre marcas depende del ángulo elegido y de la profundidad de la desviación.

> **Distancia entre marcas = Profundidad de la desviación × Multiplicador**

El multiplicador es igual a 1 / seno(ángulo). La longitud total del conducto se acorta durante el doblado; esta contracción se calcula por pulgada (o por milímetro) de profundidad de offset y debe sumarse antes de cortar el tubo.

> **Contracción total = Profundidad de la desviación × Factor de contracción por unidad de profundidad**

### Multiplicadores y contracciones para desviaciones

| Ángulo (°) | Multiplicador | Contracción por cada 25 mm de profundidad / Contracción por pulgada de profundidad |
| --- | --- | --- |
| 10 | 6,0 | 1,6 mm / 0,06 in |
| 22,5 | 2,6 | 5,6 mm / 0,22 in |
| 30 | 2,0 | 6,4 mm / 0,25 in |
| 45 | 1,4 | 9,5 mm / 0,375 in |
| 60 | 1,2 | 12,7 mm / 0,50 in |

**Ejemplo de lectura:** Para un offset de 30° con profundidad de 100 mm / 4 in, la distancia entre marcas es 100 mm × 2,0 = 200 mm / 4 in × 2,0 = 8 in. La contracción será 100 mm × (6,4 mm / 25 mm) = 25,6 mm / 4 in × 0,25 in = 1 in.

## Ganancia y contracción en curvas de 90°

En un doblez a 90° el conducto “gana” longitud porque el recorrido curvo es más corto que dos tramos rectos que se encontrarían en una esquina a escuadra. La ganancia depende del radio interior de la dobladora.

> **Ganancia ≈ 0,43 × Radio del centro de la curva (CLR)**

La contracción (shrink) en los stub‑up no se calcula con los multiplicadores de offset, sino con la tabla de ganancias del fabricante. A continuación se muestra una tabla orientativa para dobladoras de EMT comerciales.

| Tamaño comercial del conducto | Radio de curvatura típico (mm / in) | Ganancia aproximada (mm / in) |
| --- | --- | --- |
| ½ in (16 mm) | 127 mm / 5 in | 55 mm / 2,15 in |
| ¾ in (21 mm) | 152 mm / 6 in | 65 mm / 2,57 in |
| 1 in (27 mm) | 178 mm / 7 in | 76 mm / 3,00 in |

## Ejemplo práctico de aplicación

Se necesita un stub‑up de EMT ½ in que llegue a 300 mm / 12 in sobre el nivel del suelo y un offset de 45° que desplace el conducto 50 mm / 2 in para esquivar una viga. La dobladora de ½ in tiene radio de 127 mm (5 in). La ganancia es 55 mm (2,15 in). Para el stub‑up se marca el conducto restando la ganancia: la primera marca se sitúa a 300 mm − 55 mm = 245 mm / 12 in − 2,15 in = 9,85 in del extremo. Se dobla sobre la flecha hasta alcanzar 90°. El offset de 45° exige multiplicador 1,4: distancia entre marcas = 50 mm × 1,4 = 70 mm / 2 in × 1,4 = 2,8 in. Contracción = 50 mm × (9,5 mm / 25 mm) = 19 mm / 2 in × 0,375 in = 0,75 in. Se corta un tramo de conducto que incluya esa contracción extra y se ejecutan las dos curvas en sentidos opuestos, obteniendo una desviación precisa que mantiene las bocas paralelas.

## Preguntas frecuentes (FAQ)

### ¿Qué multiplicador se aplica a un offset de 30°?
El multiplicador para un offset de 30° es 2,0; esto significa que la distancia entre las dos marcas es el doble de la profundidad de la desviación.

### ¿Cuál es la contracción por pulgada de desviación con ángulo de 45°?
La contracción es 9,5 mm por cada 25 mm de profundidad de offset, equivalente a 3/8 de pulgada por pulgada de desviación.

### ¿Cuánto se gana en longitud al doblar un conducto EMT de ½ pulgada a 90°?
Con un radio típico de 127 mm / 5 in, la ganancia es aproximadamente 55 mm / 2,15 in; esta cifra se resta de la altura del stub para situar la marca de flecha.

### ¿Qué profundidad máxima de offset puedo conseguir con una separación entre marcas de 150 mm / 6 in y un ángulo de 22,5°?
Con multiplicador 2,6, la profundidad máxima es 150 mm ÷ 2,6 = 57,7 mm / 6 in ÷ 2,6 = 2,31 in.

### ¿Cuánta contracción sufre un conducto al hacer un offset de 10° con 80 mm / 3,15 in de desviación?
La contracción es 80 mm × (1,6 mm / 25 mm) = 5,1 mm / 3,15 in × 0,06 in = 0,19 in; este valor debe sumarse a la longitud del tubo antes del doblado.

### ¿Qué distancia debe haber entre las marcas de un offset de 60° para salvar 40 mm / 1,57 in?
Aplicando el multiplicador 1,2, la distancia entre marcas es 40 mm × 1,2 = 48 mm / 1,57 in × 1,2 = 1,88 in.

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/documents/freestuff/Hand_bending_conduit_and_tubing_by_Bill_Bamford.pdf
