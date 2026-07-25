---
title: "Estudio de selectividad de protecciones"
sidebar:
  label: "Estudio de selectividad de protecciones"
description: "Ficha tecnica: Estudio de selectividad de protecciones"
keywords: ["protection selectivity study time current curve", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "coordination"
subcategory: "selectivity-study"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un estudio de selectividad de protecciones permite restringir las interrupciones exclusivamente al circuito afectado por una sobrecorriente, incrementando la disponibilidad del sistema eléctrico por encima del 99 %. Mediante el análisis coordinado de las curvas tiempo‑corriente y los ajustes de los dispositivos, se asegura que solo el interruptor más próximo a la falta actúe, preservando el suministro en el resto de la instalación.

## Finalidad del estudio de selectividad

El estudio tiene como objetivo que, para el 100 % de las fallas, la desconexión se produzca únicamente en el elemento de protección aguas arriba de la anomalía (sobrecarga o cortocircuito). De esta manera se evitan disparos intempestivos en cadena y se mantiene la continuidad de servicio en los tramos no fallados.

## Métodos para lograr la selectividad

Existen cuatro métodos reconocidos para conseguir la selectividad en sistemas de protección, todos ellos evaluados en un estudio de este tipo.

### Selectividad amperimétrica

Se basa en diferencias en la capacidad de ruptura o en el umbral magnético de los interruptores. El dispositivo más alejado de la alimentación se ajusta a un valor inferior de disparo instantáneo, de forma que las corrientes de falta de baja magnitud solo activen la protección local.

### Selectividad cronométrica

Consiste en introducir retardos escalonados de 0,1 s a 0,5 s entre protecciones consecutivas. El interruptor aguas abajo opera primero gracias a su menor temporización, mientras que el aguas arriba retiene el cierre hasta que se agote ese intervalo, siempre dentro de los límites de aguante térmico de los conductores.

### Selectividad energética

Evalúa la energía específica (I²t) que deja pasar cada dispositivo. Requiere el análisis de las ondas de corriente durante el cortocircuito y suele aplicarse en interruptores limitadores. La selectividad se verifica comparando las curvas de energía del dispositivo aguas arriba y del aguas abajo para toda la gama de corrientes de falta.

### Selectividad lógica (interbloqueo por zona)

Emplea una comunicación por hilo piloto entre los relés de protección. Cuando un relé detecta una falta, envía una señal de bloqueo al interruptor inmediatamente superior, que a su vez solo disparará si no recibe dicha señal. Este método asegura tiempos de actuación inferiores a 100 ms incluso en condiciones de alta corriente de falta.

## Parámetros de ajuste en relés de protección

Los relés de sobrecorriente se caracterizan por varios ajustes que influyen directamente en la selectividad, como la corriente de arranque y los multiplicadores de tiempo. El ajuste de corriente suele oscilar entre el 50 % y el 200 % del valor nominal secundario del transformador de intensidad (TI) en relés de fase, mientras que para los de tierra el margen habitualmente va del 10 % al 70 %.

### Corriente de arranque (pick-up)

Es el valor de corriente a partir del cual el relé comienza a operar, superando la fuerza de retención de sus contactos.

### Ajuste de corriente (current setting)

Se expresa como porcentaje respecto a la corriente secundaria nominal del TI.

> **Ajuste de corriente (%) = (Corriente de arranque del relé / Corriente secundaria nominal del TI) × 100**

| Rango de ajuste de corriente | Relés de fase | Relés de tierra |
| --- | --- | --- |
| Valor mínimo | 50 % | 10 % |
| Valor máximo | 200 % | 70 % |
| Paso de ajuste | 25 % | 10 % |

### Múltiplo de ajuste de corriente (PSM)

Relaciona la corriente de falta que circula por la bobina del relé con la corriente de arranque.

> **PSM = Corriente de falta en el relé / Corriente de arranque del relé**

Ejemplo práctico: con un TI de relación 200/1 A y un ajuste de corriente del 150 %, la corriente de arranque es 1,5 A. Si la corriente primaria de falta es de 1000 A, la corriente secundaria resulta 5 A, y el PSM vale 5 / 1,5 = 3,33.

| Parámetro | Valor métrico / imperial |
| --- | --- |
| Corriente primaria nominal del TI | 200 A / 200 A |
| Relación del TI | 200/1 A / 200/1 A |
| Ajuste de corriente | 150 % |
| Corriente de arranque | 1,5 A / 1,5 A |
| Corriente de falta primaria | 1000 A / 1000 A |
| Corriente de falta secundaria | 5 A / 5 A |
| PSM calculado | 3,33 |

### Múltiplo de ajuste de tiempo (TSM)

El dial de ajuste de tiempo se calibra de 0 a 1 en pasos de 0,05 y determina la fracción del recorrido total que deben efectuar los contactos móviles del relé electromecánico. Multiplicando el tiempo total de operación (obtenido de la curva tiempo/PSM) por el TSM se obtiene el tiempo real de actuación. Por ejemplo, si para un PSM de 10 el tiempo total es de 3 s y el TSM se fija en 0,1, el tiempo real será 0,3 s.

## Curva tiempo‑corriente (TCC)

Una curva típica muestra que para un PSM de 10 el tiempo de operación total del relé es de 3 s con TSM = 1. A medida que la corriente de falta aumenta, el tiempo de disparo se reduce siguiendo una característica inversa que se utiliza para coordinar los dispositivos en cascada.

| PSM (adimensional) | Tiempo de operación total (s) / (s) |
| --- | --- |
| 1,5 | 30 / 30 |
| 2 | 10 / 10 |
| 5 | 4 / 4 |
| 7 | 3,3 / 3,3 |
| 10 | 3 / 3 |

Con los valores de la tabla se puede trazar la curva y, para cualquier combinación de TSM y PSM, calcular el tiempo de actuación como el producto del tiempo total y el TSM.

## Evaluación de la selectividad con curvas TCC

En un estudio formal se superponen las curvas de todos los interruptores y relés del sistema, verificando que no existan solapes en la misma banda de corriente que puedan provocar disparos simultáneos. Un sistema es 100 % selectivo cuando, para corrientes comprendidas entre el 10 % de la corriente de ajuste y la corriente máxima de cortocircuito de la instalación, el dispositivo de menor calibre o temporización siempre opera antes que cualquiera de los situados aguas arriba.

La verificación se realiza sobre planos logarítmicos donde el eje horizontal representa la corriente (en amperios) y el eje vertical el tiempo (en segundos), confirmando que las curvas mantienen una separación mínima de 0,2 s en los puntos de posible intersección.

## Preguntas frecuentes (FAQ)

### ¿Qué es la selectividad?

La selectividad, también denominada discriminación, es la coordinación de los dispositivos de protección contra sobrecorriente para que, ante una falta, únicamente actúe el interruptor situado inmediatamente aguas arriba de la anomalía, minimizando la interrupción del suministro.

### ¿Cuál es la diferencia entre selectividad amperimétrica y cronométrica?

La selectividad amperimétrica actúa ajustando distintos umbrales de disparo magnético o de capacidad de ruptura, mientras que la cronométrica introduce retardos temporales escalonados. La primera es efectiva para corrientes de falta bajas y la segunda para valores más elevados donde los escalones de corriente no son suficientes.

### ¿Cómo se define el múltiplo de ajuste de corriente (PSM)?

El PSM es la relación entre la corriente real que circula por la bobina del relé durante una falta y la corriente de arranque configurada. Un PSM de 5, por ejemplo, indica que la corriente de falta es cinco veces la corriente mínima de operación del relé.

### ¿Para qué sirve el múltiplo de ajuste de tiempo (TSM)?

El TSM determina la fracción del tiempo total de operación (extraído de la curva tiempo/PSM) que el relé empleará realmente para completar su desplazamiento mecánico. Permite ajustar de manera fina la temporización de cada protección en la cadena de selectividad.

### ¿Qué información proporciona la curva tiempo‑corriente?

La curva relaciona el tiempo de disparo del dispositivo con la magnitud de la corriente de sobrecarga o cortocircuito. A partir de ella se identifica el tiempo de actuación para cualquier valor de corriente y se comprueba la coordinación con otros dispositivos del sistema.

### ¿Cuándo se recomienda el interbloqueo por zona?

Este método es especialmente útil en instalaciones con altos niveles de cortocircuito o donde se requiere un despeje de falta inferior a 100 ms. Al intercambiar señales entre relés, se logra una selectividad total sin necesidad de retardos temporales prolongados.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/pick-up-current-current-setting-plug-setting-multiplier-and-time-setting-multiplier-of-relay/
