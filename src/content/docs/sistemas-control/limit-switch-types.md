---
title: "Tipos de interruptores de límite"
sidebar:
  label: "Tipos de interruptores de límite"
description: "Ficha tecnica: Tipos de interruptores de límite"
keywords: ["limit switch types industrial specifications", "sistemas-control"]
category: "sistemas-control"
topic: "motor-control-devices"
subcategory: "limit-switch-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Diseñados para un máximo de **2 operaciones por segundo** en aplicaciones de contacto físico, los interruptores de límite son dispositivos electromecánicos que conmutan un circuito eléctrico al ser accionados por el movimiento de una máquina o la presencia de un objeto. Su construcción robusta, su facilidad de instalación y su coste relativamente bajo los convierten en la solución preferida para detectar posición, final de carrera, paso de piezas o como enclavamientos de seguridad en entornos industriales.

## Clasificación por tipo de actuador
Existen **9 configuraciones de actuador** principales, cada una diseñada para un modo de interacción específico con el objeto detectado y para soportar distintas condiciones mecánicas de accionamiento.

| Tipo de actuador | Descripción | Aplicación habitual |
|---|---|---|
| **Émbolo (plunger)** | Activación por presión directa sobre un vástago, capaz de detectar movimientos muy pequeños. | Detección de posición precisa en utillajes, prensas y mesas lineales. |
| **Émbolo con rodillo** | Igual que el émbolo, pero con un rodillo en el extremo que facilita el paso de objetos o el seguimiento de contornos. | Detección de levas, guiado de piezas en transportadores. |
| **Palanca unidireccional con rodillo** | Palanca angular que solo se activa en un sentido de avance; el rodillo evita el desgaste excesivo. | Final de carrera en cintas transportadoras, puertas correderas con paso unidireccional. |
| **Palanca (micro)** | Pequeña palanca superior que presiona un pulsador interno; dimensiones reducidas y larga vida útil. | Impresoras, fotocopiadoras, electrodomésticos, mecanismos de bloqueo. |
| **Palanca con rodillo (micro)** | Como el anterior, pero con rodillo en el extremo que permite el paso libre de objetos. | Máquinas expendedoras, posicionamiento de bandejas, puertas de acceso. |
| **Palanca rotativa lateral con rodillo** | Palanca montada lateralmente que gira hasta un ángulo determinado; modelos fijos o ajustables. | Control de posición de compuertas, mecanismos oscilantes, grúas. |
| **Palanca rotativa lateral para alineación de banda** | Palanca lateral específica para detectar desalineación en cintas transportadoras; emite señal de alarma o paro. | Sistemas de transporte de materiales a granel, minería, canteras. |
| **Varilla rotativa lateral** | Actuador de varilla fija o regulable montado lateralmente; admite bucles de nailon para accionamiento multidireccional. | Detección de objetos irregulares, control de paso en líneas de montaje. |
| **Resorte y varilla 360°** | Actuador superior que se dobla en cualquier dirección al ser empujado y retorna por la fuerza del resorte; punta antirayado en algunos modelos. | Manipulación de piezas delicadas, robot pick & place, mecanismos con aproximación no lineal. |

## Configuraciones de contacto
Los interruptores de límite ofrecen **2 configuraciones de contacto básicas** (normalmente abierto y normalmente cerrado) que, combinadas con el estado de retención (held open/held closed), generan **4 variantes operativas** útiles para el diseño de circuitos de control.

| Contacto en reposo | Al accionar el actuador | Designación habitual |
|---|---|---|
| **Normalmente abierto (NA)** | Se cierra (conduce) | NA‑HO (held open) |
| **Normalmente cerrado (NC)** | Se abre (no conduce) | NC‑HO (held open) |
| **Normalmente abierto retenido cerrado** | Se abre al liberar | NA‑HC (held closed) |
| **Normalmente cerrado retenido abierto** | Se cierra al liberar | NC‑HC (held closed) |

En aplicaciones de seguridad, como finales de carrera de máquinas CNC o paros de emergencia en puertas automáticas, se prefiere la conexión **normalmente cerrada (NC)** . Esta arquitectura asegura que, ante una rotura de cable o fallo de conexión, el circuito se abre y el sistema se detiene inmediatamente, evitando daños mayores.

## Simbología en diagramas de control
La norma **IEC 61131‑3** define **4 símbolos de contacto** empleados para representar interruptores de límite en diagramas ladder, cubriendo tanto el estado normal como la detección de cambios de señal.

| Símbolo | Descripción | Función |
|---|---|---|
| `| |` | Contacto normalmente abierto (NA) | Cierra el circuito cuando el actuador es accionado. |
| `|/|` | Contacto normalmente cerrado (NC) | Abre el circuito cuando el actuador es accionado. |
| `|P|` | Detección de flanco positivo | Genera un pulso breve cuando el contacto NA se cierra. |
| `|N|` | Detección de flanco negativo | Genera un pulso breve cuando el contacto NC se abre. |

Estos símbolos se emplean en autómatas programables (PLC) y esquemas de relés. La notación complementaria con flechas o los subíndices “LS1 NC‑HO”, etc., permite identificar el estado exacto del interruptor dentro del sistema.

## Aplicaciones típicas
En una puerta de garaje residencial estándar se instalan **2 interruptores de límite** para detener el motor en las posiciones de completamente abierto y completamente cerrado. Esta misma filosofía se extiende a numerosos sectores industriales.

- **Máquinas herramienta CNC**: definen los límites de desplazamiento de los ejes y proporcionan una referencia de origen (home).
- **Sistemas de transporte**: detectan el paso de objetos, controlan la alineación de bandas o activan desviadores.
- **Equipos de elevación**: final de carrera en polipastos, puentes grúa y montacargas para evitar sobrepasar la carrera útil.
- **Enclavamientos de seguridad**: impiden el arranque de una máquina si las protecciones no están cerradas.
- **Manipulación de materiales**: contaje de paquetes, presencia de palés en líneas de empaquetado o control de compuertas.

## Preguntas frecuentes (FAQ)
### ¿Cuál es la diferencia entre un interruptor de límite y un sensor de proximidad?
El interruptor de límite requiere contacto físico directo con el objeto para activarse, mientras que un sensor de proximidad (inductivo, capacitivo o fotoeléctrico) detecta sin contacto. Los interruptores de límite son más robustos frente a ambientes agresivos, pero sufren desgaste mecánico con el tiempo.

### ¿Por qué se recomienda no exceder 2 operaciones por segundo?
Superar 2 accionamientos por segundo acelera el desgaste del actuador y de los contactos eléctricos, reduciendo drásticamente la vida útil del componente y pudiendo provocar fallos prematuros en aplicaciones de alta cadencia.

### ¿Qué significa la configuración normalmente cerrada en aplicaciones de seguridad?
En una conexión normalmente cerrada (NC), el circuito permanece cerrado en reposo y se abre al accionar el interruptor. Si el cable se corta o el conector se suelta, el circuito también se abre, generando una condición de parada segura que evita movimientos incontrolados de la máquina.

### ¿Cuál es el tipo de actuador más adecuado para seguir el contorno de una leva?
Se recomienda un actuador de **émbolo con rodillo** o de **palanca rotativa lateral con rodillo**, ya que el rodillo minimiza la fricción, permite deslizar sobre el perfil de la leva y alarga la vida del interruptor.

### ¿Se pueden instalar interruptores de límite en ambientes con polvo o humedad?
Sí. Existen interruptores de límite con carcasas selladas que cumplen los grados de protección IP65, IP67 o superiores, así como envolventes conformes a normas NEMA para resistir chorros de agua, polvo y ambientes corrosivos.

### ¿Cómo se representa un interruptor de límite en un diagrama ladder IEC?
Se utilizan contactos normalmente abiertos (`| |`) o normalmente cerrados (`|/|`), a menudo acompañados de un identificador como “LS1” y el estado “NO” o “NC”. Si se necesita detectar el flanco de conmutación, se añaden los símbolos de detección de flanco positivo o negativo.

## Fuentes consultadas

- **plcacademy.com**: https://www.plcacademy.com/ladder-logic-symbols/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/sensors_-z-_encoders/limit_switches
