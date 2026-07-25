---
title: "Símbolos de diagramas de escalera"
sidebar:
  label: "Símbolos de diagramas de escalera"
description: "Ficha tecnica: Símbolos de diagramas de escalera"
keywords: ["ladder diagram symbols control", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "control-diagram-symbols"
subcategory: "ladder-diagram-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los diagramas de escalera representan gráficamente las conexiones lógicas de contactos y bobinas mediante dos rieles verticales de alimentación y un conjunto de escalones horizontales. Cada símbolo ocupa un espacio estándar de 8 mm de altura por 12 mm de ancho en la mayoría de los entornos de programación de autómatas programables.

## Símbolos de contactos

El 80 % de las redes de control en escalera utilizan contactos normalmente abiertos o normalmente cerrados como elementos de entrada, y cada tipo responde a la presencia o ausencia de señal lógica. A continuación se detallan los símbolos normalizados para contactos, incluyendo variantes de detección de flanco.

| Símbolo | Nombre | Descripción | Estado en reposo |
| --- | --- | --- | --- |
| `---[ ]---` | Contacto normalmente abierto (NA) | Conduce cuando la variable asociada tiene valor lógico 1 (verdadero). | Abierto |
| `---[/]---` | Contacto normalmente cerrado (NC) | Conduce cuando la variable asociada tiene valor lógico 0 (falso). | Cerrado |
| `---[P]---` | Contacto de detección de flanco positivo | Conduce durante un ciclo de scan, al detectar una transición de 0 a 1. | Abierto |
| `---[N]---` | Contacto de detección de flanco negativo | Conduce durante un ciclo de scan, al detectar una transición de 1 a 0. | Abierto |

## Símbolos de bobinas

Las bobinas representan las salidas del programa; una única línea de escalera puede contener hasta ocho bobinas en paralelo según la norma IEC 61131‑3, aunque la práctica más común limita a una bobina por escalón para garantizar legibilidad. Las variantes incluyen bobinas de activación, desactivación y retención.

| Símbolo | Nombre | Descripción | Efecto sobre la salida |
| --- | --- | --- | --- |
| `---( )---` | Bobina normalmente desactivada | Se energiza cuando el escalón es verdadero. | Igual al estado del escalón |
| `---(/)---` | Bobina normalmente activada | Se energiza cuando el escalón es falso. | Inverso al estado del escalón |
| `---(S)---` | Bobina de enclavamiento (SET) | Activa la salida y la mantiene aunque el escalón deje de ser verdadero. | Salida = 1 permanente |
| `---(R)---` | Bobina de desenclavamiento (RESET) | Desactiva la salida enclavada. | Salida = 0 permanente |

## Símbolos de temporizadores

Existen tres tipos fundamentales de temporizadores, cada uno con un valor de preselección que puede fijarse desde 1 ms hasta 24 h en plataformas PLC modernas. La representación gráfica se compone de un cuadro con el nombre de la función y los parámetros asociados.

| Símbolo | Nombre | Descripción | Parámetros típicos |
| --- | --- | --- | --- |
| `[TON]` | Temporizador con retardo a la conexión (Timer On‑Delay) | Retarda la activación de la salida durante el tiempo programado. | PT (preset time): 500 ms / 0.5 s; ET (elapsed time): variable |
| `[TOF]` | Temporizador con retardo a la desconexión (Timer Off‑Delay) | Retarda la desactivación de la salida una vez que la entrada se desactiva. | PT: 2 s / 2000 ms; ET: variable |
| `[TP]` | Temporizador de pulso (Pulse Timer) | Genera un pulso de duración fija al activarse la entrada, independientemente de la duración de ésta. | PT: 100 ms / 0.1 s; ET: variable |

## Símbolos de contadores

Los contadores almacenan eventos discretos y pueden alcanzar valores máximos de 32 767 cuentas en sistemas de 16 bits. Su símbolo muestra un rectángulo con las marcas de cuenta ascendente, descendente o ambas, y los contactos asociados a los límites de conteo.

| Símbolo | Nombre | Descripción | Parámetros típicos |
| --- | --- | --- | --- |
| `[CTU]` | Contador ascendente (Up Counter) | Incrementa en 1 el valor acumulado por cada flanco positivo en la entrada de conteo. | PV (preset value): 10000 cuentas; CV (current value): 0‑10000 |
| `[CTD]` | Contador descendente (Down Counter) | Decrementa en 1 el valor acumulado por cada flanco positivo. | PV: 5000; CV: 5000‑0 |
| `[CTUD]` | Contador ascendente/descendente (Up‑Down Counter) | Modifica el conteo según dos entradas independientes: CU (ascendente) y CD (descendente). | PV: 20000; CV: 0‑20000 |

## Símbolos de comparadores

Los bloques de comparación permiten evaluar relaciones entre dos operandos de 16 o 32 bits y ocupan aproximadamente 4 instrucciones de CPU en un PLC típico. Se representan como rectángulos con la función lógica en su interior y los operandos en las entradas.

| Símbolo | Nombre | Operación | Ejemplo (A, B operandos) |
| --- | --- | --- | --- |
| `[ == ]` | Comparador de igualdad | Verdadero si A es igual a B. | MW10 == 25 |
| `[ > ]` | Comparador mayor que | Verdadero si A es mayor que B. | MW20 > 100 |
| `[ < ]` | Comparador menor que | Verdadero si A es menor que B. | MW30 < 500 |
| `[ >= ]` | Mayor o igual que | Verdadero si A es mayor o igual que B. | MW40 >= 75 |
| `[ <= ]` | Menor o igual que | Verdadero si A es menor o igual que B. | MW50 <= 200 |
| `[ <> ]` | Diferente de | Verdadero si A no es igual a B. | MW60 <> 0 |

## Símbolos de funciones de control de programa

Las funciones de salto, llamada a subrutina y retorno permiten estructurar el programa en módulos reutilizables. Un escalón típico puede direccionar hasta 256 subrutinas, y el tiempo de ejecución de un salto no supera 1 µs en procesadores modernos.

| Símbolo | Nombre | Descripción |
| --- | --- | --- |
| `[JMP]` | Salto incondicional | Transfiere la ejecución del programa a una etiqueta especificada. |
| `[JMPC]` | Salto condicional | Salta a una etiqueta solo si el escalón que lo precede es verdadero. |
| `[CALL]` | Llamada a subrutina | Ejecuta una subrutina y al finalizar retorna al punto de llamada. |
| `[RET]` | Retorno de subrutina | Indica el final de una subrutina y devuelve el control al programa principal. |
| `[END]` | Fin de programa | Detiene la ejecución del ciclo de scan; suele utilizarse en programas ladder de PLC. |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia un contacto normalmente abierto de uno normalmente cerrado en un diagrama de escalera?

El contacto NA conduce solo cuando la variable asociada está en estado lógico 1, mientras que el contacto NC conduce cuando la variable está en 0. Esto permite lógicas de seguridad y parada de emergencia con cableado inverso.

### ¿Por qué limitar una sola bobina por escalón?

Aunque varias normas permiten más de una salida, colocar una única bobina por escalón simplifica la depuración, evita ambigüedades en el orden de evaluación y sigue las recomendaciones de la mayoría de los fabricantes de PLC.

### ¿Los temporizadores en diagrama de escalera requieren una entrada de habilitación constante?

Sí, los temporizadores TON y TOF necesitan que su entrada de habilitación se mantenga activa durante el tiempo programado. Si la entrada se desactiva antes, el temporizador se reinicia sin completar el retardo.

### ¿Cuál es la diferencia entre una bobina de enclavamiento (SET) y una bobina normal?

La bobina normal refleja el estado del escalón de forma continua; el enclavamiento (SET) cambia el estado de la salida y lo retiene aunque el escalón deje de ser verdadero, hasta que una bobina de desenclavamiento (RESET) lo restablezca.

### ¿Es posible implementar un contador reversible con un único bloque simbólico?

Sí, el contador ascendente/descendente (CTUD) unifica ambas funciones en un solo símbolo, con entradas independientes para cuenta arriba y cuenta abajo, y un valor de preselección común para ambos sentidos.

### ¿Qué norma rige los símbolos de los diagramas de escalera?

La representación gráfica para autómatas programables está descrita en la norma IEC 61131‑3, que unifica criterios entre fabricantes y define los bloques funcionales, contactos y bobinas utilizados en lógica de escalera.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
- **electrical4u.com**: https://www.electrical4u.com/block-diagrams-of-control-system/
