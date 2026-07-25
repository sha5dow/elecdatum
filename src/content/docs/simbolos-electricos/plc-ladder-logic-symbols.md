---
title: "Símbolos de lógica ladder en PLC"
sidebar:
  label: "Símbolos de lógica ladder en PLC"
description: "Ficha tecnica: Símbolos de lógica ladder en PLC"
keywords: ["PLC ladder logic symbols reference", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "plc-symbols"
subcategory: "plc-ladder-logic-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El diagrama ladder se organiza en dos rieles verticales de alimentación y líneas horizontales llamadas rungs (escalones). Cada rung conecta contactos de entrada a la izquierda con bobinas de salida a la derecha, replicando el esquema de los circuitos de relés. La lógica ladder es uno de los cinco lenguajes normalizados por IEC 61131‑3 para la programación de PLC y soporta hasta 12 contactos en serie por rung en implementaciones típicas.

## Símbolos normalizados
La norma IEC 61131‑3 define 4 símbolos fundamentales para representar contactos y bobinas en un diagrama de lógica ladder. A continuación se muestran los símbolos básicos, su denominación en español y la función que desempeñan en la evaluación del rung.

| Símbolo | Nombre | Función |
| --- | --- | --- |
| `─[ ]─` | Contacto normalmente abierto | Conduce cuando la variable asociada es verdadera (1); estado de reposo abierto. |
| `─[\]─` | Contacto normalmente cerrado | Conduce cuando la variable asociada es falsa (0); estado de reposo cerrado. |
| `─( )─` | Bobina normalmente desactivada | Se activa (1) cuando el rung es verdadero; reposo inactivo. |
| `─(\)─` | Bobina normalmente activada | Se activa (0) cuando el rung es verdadero; reposo activo (lógica invertida). |

Los contactos leen el estado de entradas físicas, temporizadores o bits internos de memoria, mientras que las bobinas escriben en salidas físicas u otros bits. Un mismo bit puede leerse tantas veces como se desee, simulando un relé con contactos ilimitados.

## Función lógica equivalente
Cada contacto en un diagrama ladder corresponde a un bit individual de la memoria del PLC, que puede asumir 2 estados lógicos: 0 (falso) o 1 (verdadero). La conexión serie de contactos implementa una operación AND y la conexión paralelo una operación OR.

La expresión booleana equivalente para un rung con dos contactos en serie que activan una bobina es:

> **Salida = A · B**

Donde A y B representan el estado de los contactos normalmente abiertos. Si se sustituye alguno por un contacto normalmente cerrado, la variable correspondiente se niega (ā). El PLC evalúa esta función de manera secuencial rung por rung, completando un ciclo de escaneo típico en menos de 10 ms / 0.01 s, lo que garantiza que el comportamiento lógico aparente ser inmediato para la mayoría de procesos industriales.

## Parámetros típicos de ejecución
Cinco parámetros definen el desempeño de un programa ladder en un PLC de gama media. La tabla siguiente muestra valores representativos que influyen en el diseño y la depuración del programa.

| Parámetro | Valor típico |
| --- | --- |
| Tiempo de ciclo de escaneo | 10 ms / 0.01 s (mínimo 1 ms / 0.001 s en PLC rápidos) |
| Número máximo de rungs por programa | 1000 rungs / 1000 rungs |
| Contactos por rung (límite práctico) | 8 a 12 contactos / 8 a 12 contactos |
| Tamaño de memoria de programa (usuario) | 64 kB / 0.064 MB (expandible hasta 512 kB / 0.512 MB) |
| Bits de memoria internos (marcas) | 2048 bits / 2048 bits |

Estos valores son orientativos; los PLC compactos suelen tener menos capacidad que los modulares, pero todos respetan la ejecución secuencial de la lógica ladder según la norma.

## Normas y referencias
La norma ISA S5.1‑1984 define 26 letras de identificación para instrumentación de procesos usadas en diagramas P&ID, mientras que la IEC 61131‑3 (primera edición en 1993) establece los símbolos gráficos y las reglas sintácticas de la lógica ladder para PLC. Ambas normas son complementarias: ISA se enfoca en la representación de lazos de control de proceso y la IEC en la programación del automatismo. En proyectos de automatización integrados, un P&ID puede mostrar una válvula con código FV 001 y el PLC que la gobierna ejecutará un programa ladder que incluya contactos y bobinas para decidir cuándo energizar esa salida. La correspondencia entre instrumentación de campo y lógica ladder debe documentarse en las listas de entradas/salidas (E/S) del sistema de control.

## Preguntas frecuentes (FAQ)

### ¿Qué representa un contacto normalmente abierto en un diagrama ladder?
Un contacto normalmente abierto (`─[ ]─`) representa una condición que debe ser verdadera para que fluya la corriente lógica. En reposo el circuito está abierto; cuando la variable de memoria asociada es 1, el contacto se cierra y permite continuar la evaluación del rung.

### ¿Cuál es la diferencia entre un contacto normalmente cerrado y uno normalmente abierto?
El contacto normalmente cerrado (`─[\]─`) conduce cuando la variable está en estado 0, es decir, tiene una lógica invertida. Se utiliza para verificar que una condición no esté presente, como un sensor de final de carrera que debe estar en reposo para que el sistema avance.

### ¿Cómo se representa una bobina de salida en lógica ladder?
La bobina de salida estándar se representa con `─( )─`; se activa (1) cuando el rung a su izquierda es verdadero. También existe la bobina negada `─(\)─`, que toma el valor inverso del resultado del rung, útil para simplificar lógicas combinacionales.

### ¿Qué norma regula los símbolos de la lógica ladder?
Los símbolos y la sintaxis del lenguaje ladder están normalizados por la IEC 61131‑3, que define cinco lenguajes de programación para PLC: ladder diagram (LD), lista de instrucciones (IL), texto estructurado (ST), diagrama de bloques funcionales (FBD) y gráfico de funciones secuenciales (SFC).

### ¿Se pueden tener varias bobinas de salida en un mismo rung?
La mayoría de los controladores solo permiten una bobina de salida al final del rung. Si se requieren múltiples salidas controladas por las mismas condiciones, se deben dibujar en rungs separados o usar bobinas en paralelo si el entorno de programación lo admite.

### ¿Qué es el ciclo de escaneo de un PLC?
Es el proceso repetitivo de leer estados de entrada, ejecutar secuencialmente todos los rungs del programa, actualizar salidas y realizar diagnósticos internos. Los PLC modernos completan un ciclo de escaneo en menos de 10 ms / 0.01 s, por lo que la respuesta del sistema es prácticamente instantánea para la mayoría de las aplicaciones industriales.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
- **electrical4u.com**: https://www.electrical4u.com/programmable-logic-controllers/
