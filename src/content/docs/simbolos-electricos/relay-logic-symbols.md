---
title: "Símbolos de lógica de relevadores"
sidebar:
  label: "Símbolos de lógica de relevadores"
description: "Ficha tecnica: Símbolos de lógica de relevadores"
keywords: ["relay logic symbols control diagram", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "control-diagram-symbols"
subcategory: "relay-logic-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los símbolos de lógica de relevadores constituyen el lenguaje gráfico utilizado en los diagramas de control industriales para representar bobinas, contactos y temporizadores. Se basan en 7 elementos fundamentales normalizados que permiten interpretar cualquier esquema de mando o lógica cableada.

## Símbolos de bobinas y contactos

La tabla siguiente lista los 7 símbolos más comunes empleados en planos de control industrial, conforme a las normas IEC 60617 y ANSI Y32.2.

| Símbolo | Denominación | Función |
|---------|--------------|---------|
| `-( )-` | Bobina de relé o contactor | Energiza los contactos asociados al recibir la tensión nominal de mando. |
| `-| |-` | Contacto normalmente abierto (NA) | Cierra el circuito cuando la bobina queda activada. |
| `-|/|-` | Contacto normalmente cerrado (NC) | Abre el circuito cuando la bobina queda activada. |
| `-|T|-` | Contacto temporizado al cierre (TON) | Cierra sus contactos transcurrido un retardo ajustable tras la excitación de la bobina. |
| `-|T0|-` | Contacto temporizado a la apertura (TOFF) | Abre sus contactos transcurrido un retardo ajustable tras la excitación de la bobina. |
| `-|P|-` | Contacto de impulso (biestable) | Cambia de estado con cada pulso de alimentación; también conocido como relé de enganche o *latching relay*. |
| `-|M|-` | Contacto con retención mecánica | Mantiene su posición sin consumo eléctrico continuo una vez accionado manual o magnéticamente. |

## Características eléctricas típicas

Los relés electromecánicos para circuitos de control manejan corrientes de conmutación que van desde 5 A hasta 15 A en aplicaciones industriales.

| Parámetro | Valor métrico | Valor imperial |
|-----------|---------------|----------------|
| Tensión nominal de bobina | 24 V CC, 230 V CA | 24 V DC, 230 V AC |
| Corriente nominal de contactos | 10 A | 10 A |
| Potencia de ruptura (motor monofásico 230 V) | 0,75 kW / 1 hp | 1 hp / 0,75 kW |
| Durabilidad mecánica | 10⁷ ciclos | 10⁷ cycles |
| Temperatura de operación | -25 °C a +55 °C / -13 °F a 131 °F | -13 °F a 131 °F / -25 °C a +55 °C |

## Identificación de bornes y conexiones

La conexión de los bornes de relé acepta conductores de sección entre 0,5 mm² (20 AWG) y 2,5 mm² (14 AWG) según IEC 60947. Cada relé cuenta con 4 bornes principales: dos para la bobina (A1, A2) y dos por cada contacto (por ejemplo 1‑2 para el primer contacto, 3‑4 para el segundo). En contactos temporizados se añade una designación de función, como 15‑16 para el contacto NA temporizado.

## Representación en diagramas de control

Un diagrama de control típico para enclavamiento de motor trifásico emplea al menos 3 contactos auxiliares en lógica cableada. En el esquema más habitual, un pulsador de marcha (NA) se conecta en paralelo con un contacto auxiliar NA del contactor, y en serie con la bobina del contactor y un pulsador de parada (NC). Al pulsar marcha se cierra el circuito, la bobina se excita y el contacto auxiliar mantiene la alimentación por sí mismo, creando un circuito de autoretención. Para desenergizar el contactor se presiona la parada, que abre el camino de corriente y libera el enclavamiento.

## Normas de aplicación

Existen 2 sistemas normativos principales que definen los símbolos de lógica de relevadores:

- **IEC 60617** (representación europea e internacional), empleada en la mayoría de los planos industriales fuera de Norteamérica. Utiliza bobinas representadas con un rectángulo y contactos con trazos claros.
- **ANSI Y32.2 / NEMA ICS 1** (representación americana), que se distingue por el uso de líneas cruzadas para los contactos normalmente cerrados y una nomenclatura de bornes específica (L1, T1…).

Ambos sistemas conviven en maquinaria que se exporta a distintos mercados, por lo que es frecuente que los diagramas incluyan leyendas que aclaren la simbología adoptada.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre un contacto normalmente abierto y uno normalmente cerrado?

Un contacto normalmente abierto (NA) mantiene el circuito interrumpido cuando la bobina está en reposo y lo cierra al excitarse; el normalmente cerrado (NC) conduce en reposo y abre al excitar la bobina.

### ¿Para qué sirve un relé de impulso en lógica cableada?

El relé de impulso cambia de posición con cada pulso aplicado y conserva el estado sin consumo permanente, lo que permite encender y apagar un mismo circuito desde múltiples pulsadores sin lógica de enclavamiento añadida.

### ¿Se utilizan los símbolos de lógica de relevadores en los diagramas P&ID?

No. Los diagramas de tuberías e instrumentación (P&ID) excluyen los relevadores de control, interruptores manuales e indicaciones luminosas, ya que se centran en la instrumentación de proceso y las funciones de enclavamiento de seguridad, no en la lógica de mando detallada.

### ¿Qué normas regulan la representación gráfica de los relés en planos eléctricos?

Las más relevantes son la IEC 60617 (simbología internacional) y la ANSI Y32.2 / NEMA ICS 1 (americana), complementadas por la IEC 60947‑4‑1 en lo referente a designación de bornes de contactores.

### ¿Cómo se representa un contacto temporizado al cierre en un diagrama de control?

Se dibuja como un contacto normalmente abierto con una marca de temporización asociada (habitualmente la letra «T» o un arco) y se identifica con la abreviatura TON (ON‑delay); el cierre se produce únicamente una vez transcurrido el tiempo programado.

### ¿Es necesario indicar la referencia cruzada de contactos en un esquema de lógica de relevadores?

Sí. Para facilitar la interpretación y el mantenimiento, cada contacto debe llevar debajo la identificación de la bobina que lo gobierna (por ejemplo «KM1») y, en esquemas multipágina, la coordenada de localización del resto de contactos de ese mismo relé.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
- **electrical4u.com**: https://www.electrical4u.com/latching-relay/
