---
title: "GDT Oscilación y oscilación total"
sidebar:
  label: "GDT Oscilación y oscilación total"
description: "Ficha tecnica: GDT Oscilación y oscilación total"
keywords: ["GDT runout total runout circular axial", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "runout"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

La oscilación es una tolerancia geométrica compuesta que controla simultáneamente la forma, la orientación y la posición de una superficie de revolución respecto a un eje de referencia durante una rotación completa de 360°.

## ¿Qué es la oscilación circular?

La oscilación circular es una tolerancia bidimensional que limita la variación de la superficie de una pieza en rotación en cualquier sección transversal individual perpendicular al eje de referencia. Se mide manteniendo fijo el indicador en una posición axial determinada mientras la pieza gira una vuelta completa. La lectura total del indicador (TIR, *Total Indicator Reading*) no debe exceder el valor de tolerancia especificado. Esta tolerancia no controla acumulativamente la forma a lo largo de toda la longitud de la superficie, sino cada sección circular de manera independiente.

| Característica controlada | Símbolo | Tipo de zona | Sección de medición |
|---| --- | --- | --- |
| Variación radial o axial en cada sección transversal | ↗ (flecha simple) | Zona bidimensional circular limitada por dos círculos concéntricos | Cada plano de medición por separado |

## Oscilación radial vs. oscilación axial

La oscilación se clasifica en dos tipos principales según la dirección de la desviación controlada respecto al eje de referencia.

### Oscilación radial
Controla la variación de la superficie en dirección perpendicular al eje de referencia. La zona de tolerancia está formada por dos círculos concéntricos situados en un plano de medición perpendicular al eje, con una diferencia de radios igual al valor de tolerancia. Se evalúa cada sección circular de forma independiente a lo largo del elemento. Una pieza de 50 mm de diámetro con una tolerancia de oscilación radial de 0,03 mm / 0.0012 in puede presentar una lectura máxima de indicador de 0,03 mm / 0.0012 in en cualquier plano medido.

### Oscilación axial
Controla la variación de una superficie perpendicular al eje de referencia durante el giro. La zona de tolerancia está formada por dos círculos concéntricos en un plano de medición perpendicular al eje, pero la lectura se toma sobre la cara frontal de la pieza. Esta tolerancia limita el bamboleo o alabeo axial. Para un plato de 200 mm / 7.87 in de diámetro con oscilación axial de 0,08 mm / 0.0031 in, la variación máxima permitida en la cara frontal será de 0,08 mm / 0.0031 in medida en cualquier diámetro.

| Tipo de oscilación | Dirección de control | Aplicación típica | Símbolo en plano |
|--- |--- |--- |--- |
| Radial | Perpendicular al eje | Asientos de rodamientos, muñones de ejes | Flecha sobre superficie cilíndrica |
| Axial | Paralela al eje | Caras de apoyo, bridas de centrado | Flecha sobre superficie plana perpendicular |

## ¿Qué es la oscilación total?

La oscilación total es una tolerancia geométrica tridimensional compuesta que limita la variación acumulada de una superficie entera durante una rotación completa de 360° de la pieza alrededor del eje de referencia, mientras el indicador se desplaza longitudinal o radialmente a lo largo de toda la superficie controlada.

A diferencia de la oscilación circular, la oscilación total controla simultáneamente circularidad, cilindricidad, rectitud y coaxialidad en una sola especificación. Para un eje de 100 mm / 3.94 in de longitud con una oscilación total de 0,05 mm / 0.002 in, el indicador colocado perpendicularmente a la superficie debe recorrer la longitud completa del elemento mientras la pieza gira al menos una vuelta; la lectura total acumulada del indicador no debe superar los 0,05 mm / 0.002 in.

| Característica | Oscilación circular | Oscilación total |
|--- |--- |--- |
| Control | Secciones transversales individuales | Superficie completa acumulada |
| Dimensión de zona | Bidimensional (círculos concéntricos) | Tridimensional (volumen anular o dos planos paralelos) |
| Requisito de rotación | 360° en posición axial fija | 360° + desplazamiento longitudinal del indicador |
| Controles combinados | Circularidad, coaxialidad seccional | Cilindricidad, rectitud, conicidad, coaxialidad total |

## Símbolo y especificación en planos

El símbolo GD&T para la oscilación es una flecha simple orientada hacia la derecha. Se coloca en el primer compartimento del marco de control de elementos, seguido del valor de tolerancia en el segundo compartimento y la referencia de datum en el tercero.

| Elemento del marco | Contenido | Ejemplo |
|--- |--- |--- |
| Compartimento 1 | Símbolo de oscilación (↗) u oscilación total (↗↗) | ↗ |
| Compartimento 2 | Valor de tolerancia en mm o pulgadas | 0,05 / 0.002 |
| Compartimento 3 | Letra(s) del datum de referencia | A | B |
| Compartimento 4 (opcional) | Modificador de condición material | Ⓜ (solo para datum, raro) |

Para oscilación total se emplea el símbolo con doble flecha. El datum se indica normalmente como un eje o una superficie plana. El control de oscilación siempre requiere al menos un datum de referencia.

## Tablas de tolerancias según grado de precisión

Los valores de oscilación general admisibles pueden seleccionarse a partir de grados de tolerancia normalizados ISO 2768-2 para tolerancias geométricas sin indicación individual en planos. Estos grados se clasifican en H (precisión), K (media) y L (basta), cubriendo la mayoría de las aplicaciones de ingeniería mecánica.

### Tolerancias de oscilación circular (radial y axial) ISO 2768-2

| Rango de longitud nominal (mm) | Grado H (mm / in) | Grado K (mm / in) | Grado L (mm / in) |
|--- |--- |--- |--- |
| Hasta 10 | 0,02 / 0.0008 | 0,05 / 0.002 | 0,1 / 0.004 |
| >10 hasta 30 | 0,03 / 0.0012 | 0,06 / 0.0024 | 0,2 / 0.008 |
| >30 hasta 100 | 0,04 / 0.0016 | 0,08 / 0.0031 | 0,3 / 0.012 |
| >100 hasta 300 | 0,05 / 0.002 | 0,12 / 0.0047 | 0,4 / 0.016 |
| >300 hasta 1000 | 0,08 / 0.0031 | 0,16 / 0.0063 | 0,6 / 0.024 |

### Valores de oscilación total recomendados según diámetro

| Rango de diámetro (mm) | Precisión fina (mm / in) | Mecanizado general (mm / in) | Fundición o forja (mm / in) |
|--- |--- |--- |--- |
| 3 a 6 | 0,008 / 0.0003 | 0,025 / 0.001 | 0,1 / 0.004 |
| >6 a 30 | 0,012 / 0.0005 | 0,04 / 0.0016 | 0,15 / 0.006 |
| >30 a 120 | 0,02 / 0.0008 | 0,06 / 0.0024 | 0,25 / 0.01 |
| >120 a 400 | 0,03 / 0.0012 | 0,1 / 0.004 | 0,4 / 0.016 |

## Interpretación y medición práctica

La oscilación se mide en la práctica con un indicador de carátula (comparador) montado sobre una base magnética o un soporte rígido, mientras la pieza se hace girar sobre su eje de referencia. El eje de referencia puede materializarse mediante apoyos en V, entre puntos, mandril expansivo o apoyos de rodillos.

El procedimiento de medición para oscilación circular requiere colocar el palpador del indicador perpendicular a la superficie controlada. Para oscilación radial, el palpador se orienta perpendicular al eje del datum en cada sección circular. Para oscilación axial, se orienta paralelo al eje sobre la cara de la pieza. Se gira la pieza 360° en cada sección y se registra la diferencia entre lecturas máxima y mínima (TIR). Para oscilación total, además de la rotación, el indicador se desplaza longitudinalmente (radial) o radialmente (axial) cubriendo la totalidad de la superficie.

| Método de sujeción | Error de centrado típico (mm / in) | Aplicación |
|--- |--- |--- |
| Entre puntos | 0,002 / 0.00008 | Ejes con centros cónicos |
| Apoyo en V | 0,005 / 0.0002 | Cilindros con superficie externa lisa |
| Mandril de precisión | 0,003 / 0.00012 | Piezas con agujero de centrado |
| Plato autocentrante | 0,01 a 0,03 / 0.0004 a 0.0012 | Producción seriada rápida |

## Comparativa entre sistemas ISO y ANSI

Los sistemas ISO y ANSI/ASME manejan la oscilación de forma conceptualmente similar pero con diferencias en simbología, reglas de aplicación por defecto y valores normalizados.

| Aspecto | ISO 1101 / 2768-2 | ANSI/ASME Y14.5 |
|--- |--- |--- |
| Símbolo de oscilación circular | Flecha simple (↗) | Igual, flecha simple |
| Símbolo de oscilación total | Flecha doble (↗↗) | Igual, flecha doble (circular runout / total runout) |
| Grados de tolerancia general | H, K, L (ISO 2768-2) | No definidos; se requiere especificación directa |
| Interpretación por defecto sin datum | No permitido, datum obligatorio | Datum obligatorio |
| Regla de envoltura | Círculo mínimo circunscrito | Círculo mínimo circunscrito (Rule #1) |

En el sistema ANSI/ASME Y14.5, no existen grados genéricos de tolerancia geométrica no especificada como en ISO 2768-2; todo control de oscilación debe indicarse explícitamente con su valor en el marco de control. El significado metrológico es equivalente.

## Errores frecuentes de aplicación

Los errores más comunes en la especificación y medición de oscilación incluyen confundir oscilación circular con total, omitir el datum de referencia y no alinear correctamente el eje de giro.

| Error | Consecuencia | Recomendación |
|--- |--- |--- |
| Usar oscilación circular sin controlar coaxialidad total | Secciones individuales aceptables, pero eje acodado no detectado | Usar oscilación total si se requiere coaxialidad real |
| Omitir datum en el marco de control | Tolerancia sin significado metrológico; especificación incompleta | Especificar al menos un datum de eje o superficie |
| Confundir oscilación con circularidad | Circularidad no controla posición, oscilación sí (compuesta) | La oscilación circular requiere datum; la circularidad no |
| Medir oscilación sin eliminar error de centrado | TIR incluye error de montaje, no solo error de pieza | Verificar concentricidad entre datum real y eje de giro del instrumento |

## Preguntas frecuentes (FAQ)

### 1. ¿Cuál es la diferencia principal entre oscilación circular y oscilación total?
La oscilación circular controla cada sección transversal de forma independiente con una zona 2D de 0,05 mm / 0.002 in típica, mientras que la oscilación total controla la superficie completa acumulada con una zona 3D continua de hasta 0,1 mm / 0.004 in, requiriendo además un recorrido axial del indicador durante la medición.

### 2. ¿Qué indica una lectura de oscilación de 0,07 mm en un eje de 80 mm?
Una lectura de 0,07 mm / 0.0028 in en un diámetro de 80 mm / 3.15 in significa que la superficie presenta una variación radial máxima de 70 micrómetros respecto al eje de referencia, lo cual corresponde aproximadamente a un grado de tolerancia ISO K para oscilación circular.

### 3. ¿Se puede aplicar oscilación sin un datum de referencia?
No, especificar un control de oscilación de 0,02 mm / 0.0008 in sin datum de referencia no es válido según las normas ISO 1101 ni ASME Y14.5, ya que la desviación debe referirse obligatoriamente a un eje o superficie de referencia para tener significado dimensional.

### 4. ¿Cómo se mide la oscilación total en un eje de 250 mm de longitud?
Se coloca un indicador de resolución 0,001 mm / 0.00004 in perpendicular a la superficie, se gira la pieza al menos una vuelta completa y simultáneamente se desplaza el indicador a lo largo de los 250 mm / 9.84 in de longitud, registrando la variación máxima acumulada que no debe superar la tolerancia especificada.

### 5. ¿Afecta la velocidad de rotación a la oscilación medida?
En medición estática con comparador, una velocidad de giro baja de aproximadamente 30 rpm evita efectos dinámicos y se obtienen lecturas repetibles de 0,003 mm / 0.00012 in; a altas velocidades de 3000 rpm la excentricidad dinámica y vibraciones pueden falsear la medición hasta 0,02 mm / 0.0008 in adicionales.

### 6. ¿Qué grado de tolerancia ISO se recomienda para un asiento de rodamiento?
Para asientos de rodamientos con diámetros entre 20 mm y 120 mm se recomienda un grado H de oscilación circular (0,025 mm a 0,04 mm / 0.001 in a 0.0016 in) o una oscilación total especificada de 0,015 mm / 0.0006 in, asegurando baja vibración y larga vida útil del rodamiento.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pumps-t_34.html
