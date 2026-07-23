---
title: "Referencias datum en planos GDT"
sidebar:
  label: "Referencias datum en planos GDT"
description: "Ficha tecnica: Referencias datum en planos GDT"
keywords: ["GDT datum reference frame primary secondary", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "datum-references"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Definición
Una referencia datum es una característica geométrica de una pieza (punto, línea, plano, agujero o conjunto de superficies) que se utiliza como base para definir la geometría nominal y para medir la conformidad dimensional real. En GD&T, los datums establecen el origen de las relaciones espaciales y son esenciales para asegurar el ensamblaje y la funcionalidad. Un datum no es una tolerancia, sino un elemento de referencia inmutable del cual parten todas las cotas y tolerancias geométricas.

## Principios fundamentales
El principio rector es que toda pieza debe acoplarse con otras, por lo que los datums funcionales reflejan las superficies de montaje. Una referencia datum no es necesariamente la superficie de fabricación; a menudo los datums de diseño difieren de los de producción para optimizar costes. La teoría de grados de libertad establece que todo cuerpo rígido libre posee seis desplazamientos posibles: tres translaciones y tres rotaciones. Las referencias datum se seleccionan para restringir estos grados en un orden jerárquico: primario, secundario y terciario.

## Tipos de referencias datum
- **Datum plano:** superficie plana considerada ideal. Controla orientación y localización.
- **Datum de eje:** línea central de un cilindro o agujero. Frecuente en piezas de revolución.
- **Datum de punto:** intersección de planos o centro de una esfera. Usado en utillaje.
- **Datum compuesto:** combinación de varios elementos (p. ej., dos agujeros) que forman un datum común.
- **Datum target:** áreas designadas sobre una superficie irregular para simular puntos de apoyo en inspección, indicadas con símbolo de diana.

## Simbología normalizada
| Símbolo | Significado | Aplicación típica |
| --- | --- | --- |
| ![Triángulo relleno](https://roymech.org/images/datum_symbol.gif) Símbolo datum ISO (triángulo relleno o vacío sobre línea) | Identificación de elemento datum | Plano, eje o plano medio |
| ![Diana datum target](https://roymech.org/images/datum_target.gif) Símbolo datum target | Punto de apoyo definido en la pieza | Piezas forjadas, fundiciones |
| Ⓜ Material máximo (MMR) | Requisito aplicable al datum o tolerancia | Ensamblajes con juego |
| Ⓛ Material mínimo (LMR) | Requisito para espesores críticos | Paredes delgadas |
| CZ (Common Zone) | Tolerancia común para varios elementos separados | Grupos de agujeros |

## Marco de referencia datum
El sistema de referencias datum se estructura en tres niveles:

- **Datum primario (A):** restringe los grados de libertad más críticos. Suele ser la superficie de mayor área o la que establece la orientación principal. Típicamente controla 3 grados (p. ej., un plano principal elimina una translación y dos rotaciones).
- **Datum secundario (B):** reduce grados adicionales una vez fijado el primario. Generalmente una superficie perpendicular a A. Controla 2 grados (translación y rotación restantes en el plano perpendicular).
- **Datum terciario (C):** elimina el último grado de libertad. Una tercera superficie a 90° de las anteriores o un agujero/localizador. Aporta la última restricción traslacional.

El marco se declara en el recuadro de control de elemento como **|A|B|C|** , leyéndose de izquierda a derecha según prioridad.

## Selección de planos datum
La elección incorrecta de datums es la causa más común de no conformidades en GD&T. Se siguen estas directrices:

1. **Funcionalidad primero:** las superficies que contactan con otros componentes en el ensamblaje son las candidatas naturales.
2. **Accesibilidad:** los datums deben ser accesibles tanto en producción como en inspección.
3. **Repetibilidad:** superficies amplias y estables reducen la incertidumbre de medición.
4. **Tolerancias derivadas:** cuando los datums funcionales no son prácticos para fabricar, se realiza un análisis de tolerancias para definir datums de mecanizado equivalentes.

## Grados de libertad controlados
La tabla siguiente resume la capacidad de restricción de los tipos de datum más comunes. Un plano primario de dimensiones ≥ 50 mm / 1.97 in de diámetro equivalente suele ser suficiente para una inspección estable.

| Tipo de datum | Translaciones restringidas | Rotaciones restringidas | Grados controlados | Ejemplo dimensional mínimo |
| --- | --- | --- | --- | --- |
| Plano primario (superficie A) | 1 (Z) | 2 (u, v) | 3 | 50 mm x 50 mm / 1.97 in x 1.97 in |
| Plano secundario (B) | 1 (X) | 1 (w) | 2 | 25 mm x 25 mm / 0.98 in x 0.98 in |
| Plano terciario (C) | 1 (Y) | 0 | 1 | 15 mm x 15 mm / 0.59 in x 0.59 in |
| Eje primario (cilindro A) | 2 (X, Y) | 2 (u, v) | 4 | Diámetro 20 mm / 0.79 in, longitud 30 mm / 1.18 in |

## Ejemplos de aplicación real
**Carcasa de bomba centrífuga:** el plano de la brida de aspiración se designa datum A (primario), el agujero piloto concéntrico datum B (secundario), y un taladro pasante datum C (terciario). El marco A|B|C garantiza concentricidad entre rodete y carcasa.

**Bloque motor:** las superficies de apoyo del cigüeñal son datum A y B (planos de bancada), mientras que los bujes de biela se referencian a un eje común C. Esta estrategia permite controlar el paralelismo entre cilindros y cigüeñal dentro de 0.05 mm / 0.002 in.

## Comparativa entre sistemas ISO y ANSI
| Aspecto | ISO 5459:2011 | ASME Y14.5-2018 |
| --- | --- | --- |
| Designación datum | Triángulo relleno o vacío sobre línea de referencia | Triángulo relleno con letra en cuadrado |
| Material modifiers | Ⓜ, Ⓛ aplicables a datum | Ⓜ, Ⓛ, y modificador de condición virtual |
| Concepto de "datum feature simulator" | Definido como "situación real de contacto" | Simulador teórico perfecto |
| Simultaneous requirements | CZ (zona común) para tolerancias múltiples | Simultaneous requirement por defecto |
| Tratamiento de datum targets | Se indican con diana y coordenadas implícitas | Diámetro del área de contacto obligatorio, p. ej., "⌀12 / ⌀0.47 in" |

## FAQ
1. **¿Cuántos grados de libertad restringe un datum primario plano?**  
   Un datum primario plano restringe exactamente 3 grados de libertad: 1 translación perpendicular al plano y 2 rotaciones sobre ejes contenidos en él.

2. **¿Qué diferencia hay entre datum funcional y datum de fabricación?**  
   Un datum funcional refleja la función de ensamblaje, mientras que el de fabricación se elige para facilitar el mecanizado. La conversión entre ambos requiere un análisis de tolerancias con desviaciones típicas de 0.2 mm / 0.008 in.

3. **¿Cuál es el diámetro mínimo recomendado para un datum target de tipo punto en inspección CMM?**  
   Se recomienda un diámetro de contacto de al menos 12 mm / 0.47 in para piezas de tamaño medio (entre 200 mm / 7.87 in y 500 mm / 19.69 in) con el fin de garantizar repetibilidad.

4. **¿Puede un datum ser una línea de centro sin material asociado?**  
   Sí, un datum puede ser una línea de centro (plano medio) de una ranura o una característica de anchura. Debe indicarse con el símbolo de datum unido a la línea de cota correspondiente.

5. **¿En qué orden se leen los datums en el marco de referencia A|B|C?**  
   Se leen de izquierda a derecha como primario, secundario y terciario. Por ejemplo, A|B|C significa que A restringe más grados, luego B y finalmente C.

6. **¿Qué error típico se produce al omitir el datum terciario?**  
   La omisión del datum terciario deja sin control el último grado de libertad traslacional, lo que puede provocar un desplazamiento máximo del lote igual a la tolerancia de posición no asignada, típicamente 0.5 mm / 0.020 in para piezas no críticas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/beams-fixed-both-ends-support-loads-deflection-d_809.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
