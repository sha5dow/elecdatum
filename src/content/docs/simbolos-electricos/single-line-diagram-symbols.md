---
title: "Símbolos de diagramas unifilares"
sidebar:
  label: "Símbolos de diagramas unifilares"
description: "Ficha tecnica: Símbolos de diagramas unifilares"
keywords: ["single line diagram symbols electrical", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "unifilar-diagrams"
subcategory: "single-line-diagram-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los símbolos de diagramas unifilares representan los equipos y conexiones de un sistema eléctrico de potencia mediante una sola línea, independientemente del número real de conductores. Un diagrama unifilar puede modelar redes desde baja tensión hasta 765 kV / 765 000 V, simplificando estudios de flujo de carga, cortocircuito y coordinación de protecciones.

## Tabla de símbolos normalizados

La siguiente tabla recoge los 14 símbolos más utilizados en diagramas unifilares según las normas IEC 60617 e IEEE 315.

| Elemento | Símbolo en diagrama unifilar (descripción gráfica) | Función principal |
|---|---|---|
| Generador síncrono | Círculo con la letra «G» en su interior | Fuente de energía eléctrica |
| Transformador de dos devanados | Dos arcos de círculo superpuestos, líneas de conexión arriba y abajo | Cambio de nivel de tensión |
| Transformador de tres devanados | Dos arcos superpuestos con una tercera conexión lateral en forma de arco pequeño | Alimentación de servicios auxiliares o doble secundario |
| Interruptor automático (disyuntor) | Cuadrado con una pequeña línea diagonal y una «x» en su interior, o cuadrado con semicírculo | Corte de corriente en carga o bajo falta |
| Seccionador | Línea recta interrumpida por un trazo oblicuo abatible | Aislamiento visible sin capacidad de interrupción |
| Fusible | Rectángulo atravesado longitudinalmente por una línea | Protección contra sobreintensidades mediante fusión |
| Barra colectora (bus) | Línea gruesa horizontal o vertical | Nodo de conexión de varios circuitos |
| Carga estática | Triángulo o rectángulo con la letra «M» si es motor | Consumo de potencia activa y reactiva |
| Motor eléctrico | Círculo con la letra «M» en su interior | Carga rotativa que convierte energía eléctrica en mecánica |
| Transformador de corriente | Círculo con la letra «T» o dos círculos concéntricos con conexión a línea | Reducción de corriente para medición y protección |
| Transformador de tensión | Círculo con la letra «TP» o rectángulo con dos terminales en la línea | Reducción de tensión para medición y protección |
| Banco de condensadores | Dos líneas paralelas verticales conectadas a la barra | Compensación de potencia reactiva |
| Reactancia (inductor) | Línea quebrada en zigzag horizontal sobre la línea principal | Limitación de corriente de cortocircuito o compensación serie |
| Cable subterráneo | Línea continua con dos pequeños semicírculos transversales | Representación de una línea en cable aislado |

## Normas aplicables

Las normas IEC 60617 y ANSI Y32.9 definen más de 900 símbolos gráficos normalizados, de los cuales unos 100 son específicos para sistemas de potencia unifilares. La equivalencia más empleada en proyectos internacionales es la siguiente:

| Norma | Alcance | Relación con unifilares |
|---|---|---|
| IEC 60617 DB (base de datos) | Símbolos gráficos para esquemas eléctricos y electrónicos | Parte 6 (producción, transformación y distribución de energía) y parte 7 (aparamenta y dispositivos de protección) |
| IEEE Std 315 / ANSI Y32.9 | Símbolos gráficos para diagramas eléctricos y electrónicos (incluye diagramas unifilares) | Sección 3.9 (símbolos para potencia) y sección 3.10 (símbolos para transmisión y distribución) |
| NTC 2050 (Colombia) / NEC (EE.UU.) | Códigos de instalación que referencian símbolos normalizados | Acepta IEEE 315 para diagramas unifilares de instalaciones |

## Convenciones de representación

El grosor de línea recomendado para los símbolos de unifilar es de 0,35 mm / 0.014 in como mínimo, con separación entre buses de al menos 10 mm / 0.39 in. Las principales convenciones gráficas son:

- Una sola línea representa tres fases; para sistemas monofásicos o de corriente continua se indica con etiquetas (1F, CC).
- El flujo de potencia se organiza de izquierda a derecha y de arriba hacia abajo, reflejando la disposición física del tablero o la subestación.
- Los nodos (barras) se numeran con etiquetas alfanuméricas de al menos 2,5 mm / 0.098 in de altura para facilitar la lectura en formatos A3 / 297 × 420 mm.
- Los transformadores de potencia llevan designación de grupo de conexión (ej. Dyn11) al lado del símbolo.
- Los dispositivos de protección se acompañan de la referencia ANSI (50, 51, 67, etc.) y el ajuste de disparo en amperios.

## Aplicaciones típicas

Más del 90 % de los estudios de flujo de carga y cortocircuito en sistemas de potencia se analizan sobre diagramas unifilares. Las principales aplicaciones incluyen:

- **Estudios de flujo de potencia**: modelado de barras, generadores, transformadores y cargas para obtener tensiones y ángulos en cada nodo.
- **Análisis de cortocircuito**: los símbolos de interruptores, seccionadores y reactancias permiten calcular corrientes de falta y seleccionar la aparamenta adecuada.
- **Coordinación de protecciones**: sobre el unifilar se representan relés, TC y TP para ajustar curvas de disparo en cascada.
- **Diseño de subestaciones**: disposición de barras, bahías y equipos de maniobra antes de plasmar el layout físico.
- **Documentación de proyectos eléctricos**: planos de construcción, manuales de operación y diagramas de control utilizan unifilares como referencia principal.
- **Sistemas SCADA**: los símbolos simplificados sirven de base para interfaces gráficas de monitoreo en tiempo real.

## Notas de diseño

Cada símbolo debe incluir una etiqueta con la tensión nominal en kV (ej. 13,8 kV / 13 800 V) y la potencia asignada en MVA cuando corresponda. Para garantizar claridad y mantenibilidad del unifilar se recomienda:

- Mantener la misma familia de símbolos (IEC o IEEE) en todo el proyecto, evitando mezclas que induzcan a error.
- Colocar los valores nominales (I, U, S) al lado del símbolo con un tamaño de texto de al menos 2 mm / 0.079 in de altura.
- Reservar el símbolo de interruptor automático para equipos capaces de cortar corrientes de falta; usar el seccionador solo para aislamiento visible.
- Cuando se empleen varios niveles de tensión, diferenciar las barras con colores o etiquetas de tensión en kV, p.ej. «400 kV – rojo».
- En sistemas con generación distribuida, representar claramente el punto de acoplamiento común (PAC) y los flujos bidireccionales.
- Incluir una nota de revisión con fecha y autor, ya que los unifilares se actualizan durante toda la vida útil de la instalación (a veces más de 30 años).

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre un interruptor automático y un seccionador en el unifilar?
El interruptor automático, representado generalmente con un cuadrado y un semicírculo o con una «x», indica un dispositivo capaz de interrumpir corrientes de carga y de falta. El seccionador, con un trazo oblicuo, solo proporciona aislamiento visible y no debe maniobrar bajo carga.

### ¿Por qué se utiliza una sola línea si la red es trifásica?
Porque en condiciones equilibradas el comportamiento de las tres fases es idéntico; el análisis por fase única reduce la complejidad gráfica sin pérdida de información relevante. Las excepciones se anotan explícitamente (cargas monofásicas, faltas asimétricas).

### ¿Qué norma debo seguir para un proyecto internacional?
Se recomienda adoptar IEC 60617 por su amplia aceptación global, aunque en proyectos con origen en Norteamérica puede exigirse IEEE Std 315. Lo crítico es mantener consistencia: nunca mezclar símbolos de distinta norma en el mismo diagrama.

### ¿Cómo se representan los transformadores de medida en el unifilar?
El transformador de corriente se dibuja como un círculo que envuelve la línea, a veces con la letra TC, y el transformador de tensión como un rectángulo conectado entre fase y tierra o entre fases. Ambos deben ubicarse junto al interruptor al que alimentan los relés.

### ¿Puedo incluir protecciones y ajustes directamente en el unifilar?
Sí, es una buena práctica de diseño. Los números ANSI (50, 51, 87, etc.), las relaciones de transformación (p.ej., 400/1 A) y los ajustes de disparo se colocan cerca del símbolo del interruptor o del relé, manteniendo una fuente legible de al menos 2 mm / 0.079 in de altura.

### ¿Qué información adicional se puede agregar para mejorar la utilidad del unifilar?
Niveles de tensión en kV en cada barra, potencias nominales de generadores y transformadores, longitudes de cables subterráneos (en km / millas), impedancias de cortocircuito en p.u. y referencias a otros planos (esquemas de control, distribución física). Todo ello se integra manteniendo el diagrama limpio y orientado al flujo principal de energía.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electric-circuit-diagram-d_1829.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-international-symbol/
