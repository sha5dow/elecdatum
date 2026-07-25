---
title: "Diagramas trifilares explicación"
sidebar:
  label: "Diagramas trifilares explicación"
description: "Ficha tecnica: Diagramas trifilares explicación"
keywords: ["three line diagram electrical explanation", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "unifilar-diagrams"
subcategory: "three-line-diagram-explanation"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un diagrama trifilar representa cada uno de los tres conductores de fase y el neutro de un sistema trifásico de 400 V / 230 V, mostrando explícitamente las conexiones entre dispositivos.

## ¿Qué es un diagrama trifilar?

Un diagrama trifilar es la representación esquemática de un circuito eléctrico en la que se dibujan por separado todas las líneas conductoras: las tres fases (L1, L2, L3) y, cuando corresponde, el conductor neutro (N) y el conductor de protección (PE). A diferencia del diagrama unifilar, donde una sola línea simboliza el conjunto de fases, el diagrama trifilar permite ver cada conexión y cada rama, lo que resulta indispensable en la etapa de diseño detallado y en el cableado de tableros de control.

## Propósito y aplicación

El diagrama trifilar se emplea cuando es necesario identificar con precisión el recorrido de cada conductor en un sistema polifásico. Es la base para la fabricación de armarios eléctricos, el conexionado de motores y la verificación de circuitos de mando y protección. La información detallada que aporta —bornes, numeración de conductores, referencias de dispositivos— reduce drásticamente los errores de cableado y facilita las tareas de mantenimiento. En proyectos industriales, se exige que todos los circuitos de fuerza y control queden documentados en formato trifilar.

## Estructura de un diagrama trifilar

En un diagrama trifilar cada fase se traza como una línea independiente, generalmente identificada con los colores o etiquetas L1, L2 y L3. Los dispositivos (interruptores, contactores, relés térmicos, bobinas, etc.) se intercalan en las líneas que correspondan a los polos que ocupan. El neutro, si existe, corre paralelo a las fases y se conecta a las cargas que lo requieran. La disposición gráfica suele reflejar el orden físico de los componentes dentro del tablero, de izquierda a derecha y de arriba hacia abajo, aunque la escala y las dimensiones no guardan relación con el equipo real.

## Simbología en diagramas trifilares

Todos los símbolos utilizados deben ajustarse a lo establecido en la norma IEC 60617 (equivalente a la antigua IEC 617) o, en América, a los estándares ANSI/NEMA. Los elementos más comunes en estos esquemas son:

- Interruptor automático (breaker) tripolar
- Contactor con contactos auxiliares
- Relé térmico o guardamotor
- Motor trifásico jaula de ardilla
- Fusibles
- Bornes de conexión con numeración
- Identificación de conductores (secciones, colores)

Cada símbolo aparece tantas veces como polos posea el dispositivo real, de manera que las tres interrupciones de un contactor tripolar se dibujan una en cada línea de fase.

## Diferencias entre diagrama unifilar y trifilar

| Característica | Diagrama unifilar | Diagrama trifilar |
| --- | --- | --- |
| Representación de fases | Una sola línea para las tres fases | Una línea por cada fase (3 líneas para un sistema trifásico) |
| Neutro y protección | Se indica solo si es estrictamente necesario | Se dibujan siempre que existan físicamente |
| Nivel de detalle | Alto nivel, visión global de la instalación | Bajo nivel, muestra cada conexión y borne |
| Aplicación principal | Estudios de flujo de carga, coordinación de protecciones | Cableado, montaje, localización de averías |
| Uso de colores | Simbólico (negro, según convenio) | Cada fase puede colorearse (marrón, negro, gris) o etiquetarse |
| Información adicional | Potencias, impedancias, ajustes de relés | Secciones de cable, numeración de bornes, referencias comerciales |

## Ejemplo de diagrama trifilar: arranque directo de un motor

Un caso típico es el arranque directo de un motor trifásico de jaula de ardilla. El diagrama trifilar mostrará:
- Las tres fases de alimentación llegando a un interruptor automático tripolar.
- Luego, un contactor tripolar que recibe las fases y las entrega a un relé térmico.
- Del térmico, las fases van al motor.
- El neutro (si el circuito de mando lo requiere) se deriva de una fase y pasa por fusibles de control o un transformador.
- Los contactos auxiliares del contactor, los pulsadores de marcha‑paro y la bobina se dibujan en la parte de control, respetando las conexiones entre bornes.

La tabla siguiente relaciona la potencia trifásica aparente y la corriente de línea para una tensión de 400 V, valores habituales en el dimensionamiento de los conductores del diagrama trifilar.

| Potencia (kW) | Potencia (HP) | Corriente por fase a 400 V (A) |
| --- | --- | --- |
| 1,0 kW | 1,34 HP | 1,4 A |
| 2,0 kW | 2,68 HP | 2,9 A |
| 3,0 kW | 4,02 HP | 4,3 A |
| 5,0 kW | 6,70 HP | 7,2 A |
| 7,5 kW | 10,1 HP | 10,8 A |
| 10,0 kW | 13,4 HP | 14,4 A |

*Valores para carga resistiva equilibrada (cos φ = 1). Corrientes obtenidas de la tabla “Single and Three Phase AC – Electric Current vs. Power” para 400 V trifásico.*

## Ventajas y limitaciones

**Ventajas:**
- Elimina cualquier ambigüedad sobre qué conductor va conectado a cada borne.
- Facilita la detección de errores de cableado y la elaboración de listas de materiales.
- Es indispensable para la construcción de cuadros eléctricos y la ejecución de modificaciones.

**Limitaciones:**
- Ocupa mucho más espacio en el plano que un unifilar, lo que lo hace poco práctico para representar redes de distribución completas.
- Para sistemas muy grandes se vuelve complejo de leer; se suelen emplear planos parciales o esquemas funcionales.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre un diagrama unifilar y un trifilar?
El unifilar muestra las tres fases en una sola línea, mientras que el trifilar dibuja una línea por cada conductor real. Por tanto, el trifilar ofrece un nivel de detalle que permite conocer la ruta exacta de cada cable.

### ¿Cuándo se debe utilizar un diagrama trifilar?
Siempre que se necesite construir, modificar o reparar un tablero eléctrico. Las normas de documentación de proyectos suelen exigir diagramas trifilares para los circuitos de fuerza y control de máquinas e instalaciones industriales.

### ¿Qué normas rigen la representación de diagramas trifilares?
A escala internacional se aplica la IEC 60617. En América también se emplean los símbolos ANSI/NEMA. La numeración de bornes y la identificación de conductores suelen seguir la IEC 60445 o la NFPA 79.

### ¿Se representa el neutro en un diagrama trifilar?
Sí, si el sistema cuenta con neutro distribuido. Se dibuja como una línea adicional, generalmente de color azul, y se conecta a las cargas monofásicas o a la entrada del circuito de control.

### ¿Cómo se calcula la corriente de línea a partir de la potencia trifásica?
Para una carga trifásica equilibrada con tensión de línea V y factor de potencia cos φ, la corriente por fase se obtiene mediante:

> **I = P / (√3 × V × cos φ)**

Donde:

| Variable | Significado |
| --- | --- |
| I | Corriente de línea (A) |
| P | Potencia activa trifásica (W) |
| V | Tensión de línea (V) |
| cos φ | Factor de potencia (adimensional) |

En cargas puramente resistivas, cos φ = 1. Para una potencia de 10 kW con 400 V, la corriente por fase resulta 14,4 A.

### ¿Los diagramas trifilares incluyen el conductor de protección (PE)?
Sí, el conductor de puesta a tierra se representa como una línea independiente de color verde‑amarillo y se conecta a todos los chasis metálicos y bornes de tierra del sistema. Su inclusión es obligatoria en los esquemas de seguridad.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ampere-phase-d_449.html
