---
title: "Coordinación de protecciones eléctricas"
sidebar:
  label: "Coordinación de protecciones eléctricas"
description: "Ficha tecnica: Coordinación de protecciones eléctricas"
keywords: ["electrical protection coordination selectivity study", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "coordination"
subcategory: "protection-coordination"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

## Definición  
La coordinación de protecciones eléctricas, también denominada selectividad o discriminación, consiste en la disposición y ajuste de los dispositivos de protección de sobreintensidad para que, ante una falla, solo se despeje la porción mínima del circuito directamente afectada, preservando la continuidad del suministro en el resto de la instalación. La selectividad se evalúa para todo el rango de corrientes de sobrecarga y cortocircuito posibles, desde el valor de ajuste hasta la máxima corriente de falla prevista en el punto de instalación, y para cualquier tiempo de apertura asociado a esos niveles de corriente.

## Principio de selectividad  
El principio fundamental es localizar la interrupción del servicio exclusivamente en el circuito fallado. La protección más cercana a la carga aguas abajo debe actuar antes que cualquier dispositivo aguas arriba, evitando disparos innecesarios en cabeceras de grupo o en la acometida general. La selectividad se consigue mediante la coordinación de las características de disparo de los interruptores automáticos, fusibles y relés de protección, analizando sus curvas tiempo‑corriente y los tiempos de respuesta ante diferentes magnitudes de falta.

## Métodos de selectividad  
Existen cuatro modalidades básicas para lograr la discriminación entre protecciones:

| Método | Principio de funcionamiento | Dispositivos típicos |
| --- | --- | --- |
| **Amperimétrica** | Diferentes capacidades de ruptura o calibres; el dispositivo aguas arriba soporta una corriente de falla mayor que el aguas abajo. | Interruptores automáticos, fusibles |
| **Cronométrica** | Retardo de tiempo programado en el dispositivo aguas arriba para permitir que el dispositivo aguas abajo despeje primero la falla. | Relés de protección, interruptores con unidad de disparo electrónica |
| **Energética (o selectividad por energía)** | Análisis comparativo de las ondas de corriente (integral de Joule I²t); el interruptor aguas arriba deja pasar la energía necesaria para que el aguas abajo opere sin que él mismo inicie la apertura. | Interruptores automáticos de caja moldeada y bastidor abierto |
| **Por zona (Interbloqueo selectivo – ZSI)** | Comunicación entre los dispositivos mediante un lazo de pilotaje; la unidad aguas arriba recibe una señal del aguas abajo y retiene su orden de disparo instantáneo, pasando a temporizado solo si la falla persiste. | Relés digitales, unidades de control electrónicas |

### Selectividad amperimétrica  
Se basa en escalonar los umbrales de disparo magnético o las corrientes nominales de los dispositivos. Por ejemplo, un interruptor aguas abajo de 100 A con disparo magnético a 1000 A puede coordinarse con uno aguas arriba de 250 A cuyo umbral magnético se sitúe en 2500 A, de modo que para una falla de 1500 A solo actúe el interruptor menor. La selectividad es total si la corriente de cortocircuito máxima en bornas del dispositivo aguas abajo no supera el umbral de disparo instantáneo del dispositivo aguas arriba.

### Selectividad cronométrica  
Consiste en retardar intencionadamente la apertura del interruptor aguas arriba mediante un ajuste de tiempo (ej. 0,1 s / 100 ms) mientras que el interruptor aguas abajo tiene disparo instantáneo (0,02 s / 20 ms). La diferencia de tiempos, típicamente entre 70 ms y 300 ms, garantiza que la falta se extinga en el nivel inferior. Las unidades de disparo electrónicas permiten programar curvas de tiempo definido o de tiempo inverso. La ecuación que rige el retardo temporizado suele ser de la forma:

> **t_disp = k / (I/In)^α - 1**

donde:
| Símbolo | Magnitud | Unidad (métrica / imperial) |
| --- | --- | --- |
| t_disp | Tiempo de disparo | s / s |
| I | Corriente de falla | A / A |
| In | Corriente nominal del interruptor | A / A |
| k, α | Constantes de la curva (según norma IEC 60255‑151 o ANSI C37.112) | adimensional / adimensional |

### Selectividad energética  
Se sustenta en la comparación de la energía específica pasante (I²t) de los dispositivos. Cuando la energía que deja pasar el interruptor aguas arriba durante la falla, limitada por su propio poder de corte, es menor que la energía necesaria para fundir el elemento fusible o para accionar el disparador del interruptor aguas abajo, se mantiene la selectividad. La condición básica es:

> **I²t_pasante (aguas arriba) < I²t_fusión o prearco (aguas abajo)**

Este método es típico en la coordinación fusible‑interruptor y entre interruptores limitadores, y se verifica mediante las curvas de energía publicadas por el fabricante para tensiones de 230/400 V o 480 V.

### Selectividad por zona (interbloqueo)  
Emplea un conductor de pilotaje que conecta las unidades de disparo de todos los interruptores de una misma línea. Ante una falta, el interruptor aguas abajo que detecta la corriente envía una señal de bloqueo al interruptor aguas arriba, el cual inhibe su disparo instantáneo y activa un retardo programado (por ejemplo 0,1 s). Si la falla es despejada por el interruptor aguas abajo, la señal cesa y el interruptor aguas arriba no dispara. Este sistema garantiza selectividad total para corrientes de cortocircuito elevadas, incluso cuando los umbrales instantáneos se superponen.

## Ajustes y curvas de disparo  
Los relés de protección deben cumplir los requisitos funcionales de **fiabilidad**, **selectividad**, **sensibilidad** y **velocidad**. La selectividad exige que el relé actúe únicamente ante condiciones para las cuales ha sido configurado, evitando operaciones intempestivas. Los ajustes típicos en un sistema de distribución industrial son:

| Nivel | Dispositivo | Umbral magnético (Im) | Retardo (td) |
| --- | --- | --- | --- |
| Acometida general | Interruptor automático 1600 A | 12 kA / 12 kA | 0,5 s / 0,5 s |
| Alimentador | Interruptor automático 400 A | 4 kA / 4 kA | 0,2 s / 0,2 s |
| Carga final | Interruptor caja moldeada 100 A | 1 kA / 1 kA | Instantáneo (< 20 ms / < 0,02 s) |

Las curvas de disparo se representan en escala log‑log corriente‑tiempo; la separación entre las curvas de dos dispositivos consecutivos debe ser de al menos 0,1 s para garantizar selectividad cronométrica en todo el rango de sobreintensidad.

## Ejemplo de estudio de coordinación  
En una instalación con un transformador de 1000 kVA, 400 V, corriente nominal secundaria 1443 A, se instalan tres niveles de protecciones:

- **Acometida**: Interruptor de bastidor abierto 1600 A, umbral magnético 12×In = 19200 A, retardo 0,4 s.  
- **Alimentador motor**: Interruptor 250 A, umbral magnético 9×In = 2250 A, retardo 0,1 s.  
- **Protección del motor**: Guardamotor con disparo magnético a 500 A, instantáneo.

Al producirse un cortocircuito de 1500 A en bornas del motor, actúa el guardamotor en menos de 10 ms. Si la falla alcanzara 8000 A (dentro del alimentador), el interruptor de 250 A dispararía en 0,1 s, mientras el de acometida esperaría sus 0,4 s antes de intervenir, manteniendo la selectividad. El estudio debe verificar que la corriente de cortocircuito máxima en cada punto no obligue al disparo instantáneo del nivel superior.

## Consideraciones para instalaciones en atmósferas peligrosas  
Cuando la coordinación se aplica en áreas clasificadas (Clase I, División 1 o Zona 0, 1, 2), los dispositivos de protección deben cumplir con técnicas específicas que limitan la energía superficial y confinan posibles explosiones internas. Las temperaturas máximas admisibles en la envolvente se relacionan con la clase de temperatura del equipo, cuyo código indica la temperatura superficial máxima que no debe superar la autoignición de la atmósfera circundante.

| Código de temperatura | Temperatura superficial máxima |
| --- | --- |
| T1 | 450 °C / 842 °F |
| T2 | 300 °C / 572 °F |
| T2A | 280 °C / 536 °F |
| T2B | 260 °C / 500 °F |
| T2C | 230 °C / 446 °F |
| T2D | 215 °C / 419 °F |
| T3 | 200 °C / 392 °F |
| T3A | 180 °C / 356 °F |
| T3B | 165 °C / 329 °F |
| T3C | 160 °C / 320 °F |
| T4 | 135 °C / 275 °F |
| T4A | 120 °C / 248 °F |
| T5 | 100 °C / 212 °F |
| T6 | 85 °C / 185 °F |

En la coordinación deben seleccionarse interruptores y relés que, bajo condiciones de falla, no eleven la temperatura de la carcasa por encima de la clase correspondiente, y que respeten los métodos de protección Ex (p.ej., Ex d, Ex i, Ex e) aplicados al envolvente. La selectividad no debe comprometer la integridad de la protección contra explosiones, por lo que los tiempos de disparo deben ser compatibles con la inercia térmica del recinto.

## Preguntas frecuentes (FAQ)
### ¿Qué es la selectividad en un sistema de protección eléctrica?
Es la capacidad del conjunto de protecciones para desconectar únicamente el circuito donde ocurre la falla, dejando el resto de la instalación en servicio. Se consigue coordinando los ajustes de intensidad y tiempo de los dispositivos aguas arriba y aguas abajo.

### ¿Cuáles son los cuatro métodos principales de selectividad?
Son la selectividad amperimétrica (basada en distintos valores de corriente de disparo), la cronométrica (retardos de tiempo), la energética (comparación de la integral de Joule I²t) y la selectividad por zona o interbloqueo (ZSI, comunicación entre protecciones).

### ¿Qué diferencia hay entre selectividad total y selectividad parcial?
La selectividad total se mantiene para cualquier valor de corriente de falla, desde la sobrecarga hasta la máxima corriente de cortocircuito disponible. La selectividad parcial solo se garantiza hasta un cierto límite de corriente, por encima del cual ambos dispositivos pueden disparar simultáneamente.

### ¿Cómo se garantiza la selectividad cronométrica?
Programando un retardo de tiempo (por ejemplo 0,1 s a 0,5 s) en el interruptor aguas arriba, mientras que el dispositivo aguas abajo actúa de forma instantánea. La diferencia de tiempos se elige de manera que la falta sea extinguida por el primer dispositivo antes de que el segundo inicie su apertura.

### ¿Por qué es crítica la coordinación de protecciones en hospitales?
En hospitales, la continuidad del suministro a áreas críticas (quirófanos, UCI) es vital. La correcta coordinación evita que una falla en un circuito secundario provoque la desconexión de toda la instalación, cumpliendo los requisitos de seguridad eléctrica de normas como NFPA 70 e IEC 60364-7-710.

### ¿Qué normas rigen los estudios de selectividad?
Los estudios se basan en los requisitos de coordinación definidos en la NFPA 70 (NEC), artículos 100 y 517; la IEC 60947‑2 (interruptores automáticos de baja tensión) y la IEC 60255‑151 (características de relés de protección). Los fabricantes publican tablas de selectividad verificadas conforme a estas normas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-area-protection-d_487.html
- **electrical4u.com**: https://www.electrical4u.com/protection-system-in-power-system/
