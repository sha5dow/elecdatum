---
title: "Código de colores de luces piloto"
sidebar:
  label: "Código de colores de luces piloto"
description: "Ficha tecnica: Código de colores de luces piloto"
keywords: ["pilot light color code standard indicator", "sistemas-control"]
category: "sistemas-control"
topic: "motor-control-devices"
subcategory: "pilot-light-color-code"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Las luces piloto en sistemas de control son indicadores luminosos que comunican el estado operativo de máquinas, procesos o equipos. Su codificación cromática permite una interpretación rápida e intuitiva de condiciones normales, anómalas o de peligro, reduciendo el tiempo de reacción del operador y mejorando la seguridad industrial. Esta estandarización sigue criterios internacionales como los definidos por IEC 60073, que asigna colores específicos a cada situación funcional.

## Definición

Una luz piloto es un dispositivo indicador visual, habitualmente montado en paneles de control, que utiliza una fuente de luz —incandescente, LED o neón— para señalizar el estado de un equipo. Se diferencia de la llama piloto de gas (pilot burner) en que opera exclusivamente con energía eléctrica y se rige por normas de interfaz hombre-máquina, como la serie IEC 60073 y las armonizadas en ANSI Z535.

## Códigos de colores

La norma IEC 60073:2002 establece la correspondencia entre colores de luces piloto, su significado y su aplicación típica. La siguiente tabla resume los cinco colores fundamentales empleados en automatización industrial y control de procesos.

| Color | Significado | Aplicación típica |
|-------|-------------|-------------------|
| Rojo | Peligro, parada, fallo | Paro de emergencia, sobrecarga, fallo de dispositivo, incendio |
| Verde | Condición normal, marcha | Equipo funcionando, secuencia terminada, puerta cerrada |
| Amarillo | Precaución, anomalía | Alarma de nivel bajo, sobrecalentamiento no crítico, rearme automático pendiente |
| Azul | Acción obligatoria, estado informativo | Mantenimiento solicitado, operación manual requerida, modo programación activo |
| Blanco | Neutro, presencia de tensión | Equipo energizado sin estado definido, confirmación de mando, secuencia en espera |

## Significado detallado

Rojo. Se reserva para condiciones que requieren una acción inmediata o que indican un fallo grave. Una luz piloto roja encendida puede acompañar a una parada de emergencia o a un disparo de protección. En ningún caso debe emplearse para señalizar un estado operativo normal.

Verde. Indica que el sistema se encuentra en condiciones seguras o que la operación avanza según lo previsto. Es el color de marcha en arrancadores y variadores de velocidad.

Amarillo. Advierte sobre una condición que podría convertirse en peligrosa si no se corrige. Incluye avisos de límite de proceso, desconexión automática prevista o espera de confirmación.

Azul. Agrupa señales que requieren una intervención consciente del operador. Se emplea para indicar que un modo manual está activo o que se necesita una acción de supervisión.

Blanco. Color neutro que simplemente confirma presencia de alimentación eléctrica o estado activo sin connotación positiva ni negativa. Puede reemplazar a otros colores cuando el significado queda claro por el contexto y la aplicación lo justifica.

## Normas aplicables

Los códigos de colores de luces piloto están cubiertos por las siguientes normas internacionales y regionales:
- **IEC 60073:2002**: Principios y requisitos para la interface hombre-máquina, marcado e identificación.
- **ANSI Z535.1**: Código de colores de seguridad para señalización y etiquetado en Estados Unidos.
- **ISO 3864-1**: Símbolos gráficos – Colores de seguridad y señales de seguridad.

Si bien ANSI Z535.1 se enfoca principalmente en señales impresas y pintura de bordes de máquina, sus asignaciones cromáticas (rojo = peligro, amarillo = precaución, verde = seguridad) son consistentes con las luces piloto.

## Aplicaciones prácticas

Las luces piloto se instalan en los sinópticos de procesos, paneles de control de salas eléctricas y tableros de operador local. Ejemplos típicos de asignación en un sistema de bombeo:
- Luz piloto verde: motobomba en marcha, caudal estable.
- Luz piloto roja: disparo por alta presión o fallo del variador.
- Luz piloto amarilla: bajo nivel en tanque de succión.
- Luz piloto azul: sistema en modo bypass manual.
- Luz piloto blanca: tensión trifásica presente en bornes.

## Preguntas frecuentes (FAQ)

### ¿Se puede usar el color naranja en lugar del amarillo en luces piloto?

### ¿El color de una luz piloto determina directamente una acción de seguridad?

### ¿Qué significa una luz piloto blanca y una verde encendidas simultáneamente?

### ¿Puedo instalar luces piloto con colores personalizados por el cliente?

### ¿Los colores mencionados aplican también para indicadores en HMI o solo para dispositivos físicos?

### ¿Existe un código de colores distinto para luces piloto en atmósferas explosivas?

## Fuentes consultadas

- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/pushbuttons_-z-_switches_-z-_indicators/hazardous_location_devices/pilot_light_control_station_assemblies
