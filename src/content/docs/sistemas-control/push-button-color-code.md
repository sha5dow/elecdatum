---
title: "Código de colores de botones pulsadores"
sidebar:
  label: "Código de colores de botones pulsadores"
description: "Ficha tecnica: Código de colores de botones pulsadores"
keywords: ["push button color code standard IEC", "sistemas-control"]
category: "sistemas-control"
topic: "motor-control-devices"
subcategory: "push-button-color-code"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El código de colores en botones pulsadores industriales está normalizado para proporcionar una comunicación visual inmediata y segura entre el operador y la máquina, reduciendo el riesgo de error humano. Las normas de referencia principales son la IEC 60073, que establece los principios de codificación para indicadores y actuadores, y la NFPA 79 en el ámbito de maquinaria industrial en Norteamérica.

## Códigos de colores estandarizados

La asignación de colores a botones pulsadores sigue una convención semántica donde cada color comunica un estado o una acción requerida. La tabla siguiente resume la correspondencia entre color, significado y aplicación típica en un entorno de control industrial.

| Color | Significado general | Aplicación típica en pulsadores |
|---|---|---|
| Rojo | Emergencia, parada, peligro | Parada de emergencia, parada general, acción de corrección inmediata |
| Amarillo | Anomalía, advertencia, precaución | Intervención para suprimir una condición anormal (rearme, reinicio) |
| Verde | Condición segura, marcha, normal | Arranque, puesta en marcha, inicio de ciclo |
| Azul | Acción obligatoria o de estado | Restablecimiento (reset), funciones de configuración no críticas |
| Blanco / Gris | Sin significado específico asignado | Encendido (ON), funciones auxiliares, confirmación |
| Negro | Sin significado específico asignado | Apagado (OFF), parada no emergencial, funciones auxiliares |

## Selección del color según la función

Los botones de Parada de Emergencia deben utilizar de manera exclusiva el color rojo sobre un fondo amarillo, según IEC 60947-1, para garantizar su identificación instantánea bajo cualquier condición de iluminación o estrés operativo. Esta combinación no debe emplearse en ninguna otra función.

Para los pulsadores de Arranque o Marcha, el color verde es el estándar aceptado. Por simbiosis en paneles de control, es frecuente que el botón de Parada (no emergencial) sea de color negro o rojo, aunque si se utiliza rojo debe estar claramente diferenciado del pulsador de emergencia, generalmente por tamaño y falta del fondo amarillo.

En maniobras de dos manos o funciones secuenciales, los colores blanco, gris o azul se reservan para acciones que no implican un peligro directo por activación accidental. El azul se asocia comúnmente al botón de Rearme o Reset.

## Aplicaciones típicas

En la práctica de integración de paneles de control, los códigos de colores se aplican siguiendo una jerarquía visual donde el rojo domina sobre cualquier otro estímulo. Un cuadro de mando típico de una máquina herramienta incluirá un botón de seta rojo sobre fondo amarillo para la parada de emergencia, un pulsador rasante verde para el arranque del ciclo automático y un pulsador negro o rojo rasante para la parada del ciclo.

En consolas de sistemas de control distribuido (DCS) o salas de control, los pulsadores en pantalla táctil y los botones físicos replican esta codificación. La retroiluminación de los pulsadores físicos sigue el mismo código, añadiendo información de estado: un botón verde puede iluminarse en modo fijo para indicar marcha o en intermitencia para indicar secuencia de arranque.

## Preguntas frecuentes (FAQ)

### ¿Puedo usar un botón rojo para la parada de ciclo normal si el de emergencia es una seta?

Sí, se permite un pulsador rojo para parada de ciclo siempre que el pulsador de emergencia sea de tipo seta con enclavamiento y fondo amarillo, diferenciándose claramente en forma y modo de accionamiento.

### ¿Qué color se asigna a la función de arranque en un proceso automatizado?

El verde es el color normalizado para arranque, puesta en marcha o inicio de secuencia, indicando una condición segura.

### ¿Es obligatorio usar el color amarillo para los botones de reinicio?

El amarillo es el color recomendado para funciones que suprimen una condición anormal, como un reinicio tras una parada por fallo, pero en la práctica también se utiliza el azul para restablecimientos generales no críticos.

### ¿Los botones de parada de emergencia deben ser siempre iluminados?

No es un requisito normativo que sean iluminados; la identificación depende del contraste cromático (rojo sobre amarillo). La iluminación puede añadirse para mejorar la visibilidad en ambientes oscuros, pero no es obligatoria.

### ¿Qué color corresponde a un pulsador de prueba o de lámpara de señal?

No existe un color fijo; se suele recurrir al blanco, gris o azul para funciones de prueba, verificación o mantenimiento, ya que son colores sin significado crítico asignado.

### ¿Los códigos de colores aplican también a los pilotos indicadores?

Sí, la norma IEC 60073 unifica los significados para indicadores luminosos y pulsadores: rojo para peligro/parada, amarillo para advertencia, verde para marcha, azul para obligación y blanco para estados neutros.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/isa-intrumentation-codes-d_415.html
- **plcacademy.com**: https://www.plcacademy.com/ladder-logic-symbols/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/pushbuttons_-z-_switches_-z-_indicators/pushbuttons
