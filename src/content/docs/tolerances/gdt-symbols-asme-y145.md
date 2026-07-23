---
title: "Simbología GDT completa ASME Y14.5"
sidebar:
  label: "Simbología GDT completa ASME Y14.5"
description: "Ficha tecnica: Simbología GDT completa ASME Y14.5"
keywords: ["GDT geometric dimensioning tolerancing symbols", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "symbols-complete"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Descripción general

El dimensionado y tolerado geométrico (GDT, del inglés *Geometric Dimensioning and Tolerancing*) es un sistema simbólico normalizado por ASME Y14.5 que define las tolerancias de forma, orientación, localización, perfil y alabeo de las piezas. Sustituye el acotado lineal por un lenguaje que especifica la geometría nominal exacta y la variación permitida de cada elemento funcional. El estándar ASME Y14.5 reúne 14 símbolos principales, modificadores y reglas de interpretación. Esta guía recoge la simbología completa, ejemplos con datos numéricos y las diferencias más relevantes frente al sistema ISO GPS.

## Tabla de símbolos geométricos ASME Y14.5

### Símbolos de forma

| Símbolo | Nombre | Control geométrico |
| --- | --- | --- |
| – | Rectitud (*Straightness*) | Control de la rectitud de un eje o línea superficial |
| ▱ | Planitud (*Flatness*) | Control de la desviación de una superficie respecto a un plano |
| ○ | Redondez / Circularidad (*Circularity*) | Control de la variación radial de una sección transversal |
| ⌭ | Cilindricidad (*Cylindricity*) | Control simultáneo de redondez, rectitud y conicidad de una superficie cilíndrica |

### Símbolos de orientación

| Símbolo | Nombre | Control geométrico |
| --- | --- | --- |
| ∥ | Paralelismo (*Parallelism*) | Orientación de una línea o superficie paralela a un datum |
| ⟂ | Perpendicularidad (*Perpendicularity*) | Orientación de una línea o superficie a 90° respecto a un datum |
| ∠ | Angularidad (*Angularity*) | Orientación de una línea o superficie con un ángulo básico distinto de 0° o 90° respecto a un datum |

### Símbolos de localización

| Símbolo | Nombre | Control geométrico |
| --- | --- | --- |
| ⌖ | Posición (*Position*) | Localización exacta de elementos de tamaño respecto a un datum de referencia |
| ◎ | Concentricidad¹ (*Concentricity*) | Coaxialidad del eje mediano de un elemento de revolución respecto a un eje datum |

¹ *Eliminada en ASME Y14.5‑2018; se sustituye por control de posición o coaxialidad.*

### Símbolos de perfil

| Símbolo | Nombre | Control geométrico |
| --- | --- | --- |
| ⌒ | Perfil de una línea (*Profile of a line*) | Variación de una sección de contorno sin control de la superficie completa |
| ⌓ | Perfil de una superficie (*Profile of a surface*) | Variación tridimensional de una superficie respecto a su forma teórica exacta |

### Símbolos de alabeo (*Runout*)

| Símbolo | Nombre | Control geométrico |
| --- | --- | --- |
| ↗ | Alabeo circular (*Circular runout*) | Variación radial o axial compuesta de forma y posición en cada revolución |
| ⌰ | Alabeo total (*Total runout*) | Variación compuesta de toda la superficie en revolución completa |

## Modificadores y símbolos suplementarios

| Símbolo | Nombre ASME | Descripción (basada en Roymech) |
| --- | --- | --- |
| Ⓜ | Condición de máximo material (*Maximum Material Condition*, MMC) | El elemento contiene la máxima cantidad de material (mínimo agujero, máximo eje). Permite aumentar la tolerancia geométrica cuando el tamaño real se aleja del MMC, siempre que no se viole la condición virtual de máximo material (MMVC). |
| Ⓛ | Condición de mínimo material (*Least Material Condition*, LMC) | El elemento contiene la mínima cantidad de material (máximo agujero, mínimo eje). Se emplea para garantizar espesores mínimos de pared o distancias al borde. La tolerancia geométrica puede ampliarse cuando el tamaño real se aproxima al LMC. |
| Ⓟ | Zona de tolerancia proyectada (*Projected Tolerance Zone*) | La zona de tolerancia se extiende fuera del elemento real (por ejemplo, la altura del tornillo que sobresale de un agujero roscado), indicando la longitud proyectada. |
| Ⓣ | Plano tangente (*Tangent Plane*) | El control geométrico se aplica al plano tangente a la superficie real, no a la superficie completa. |
| Ⓕ | Estado libre (*Free State*) | Indica que la tolerancia debe cumplirse en estado no restringido (antes del montaje). Usado en piezas flexibles. |
| CZ | Zona común (*Common Zone*) – ISO | En ISO, indica que varios elementos separados comparten una única zona de tolerancia. ASME utiliza la anotación “Common Zone” en el marco de control. |

## Marco de control de características

El cuadro de control es el elemento gráfico que comunica la tolerancia geométrica. Está dividido en compartimentos:

1.  **Símbolo geométrico** (forma, orientación, etc.)
2.  **Valor de tolerancia** (p. ej., 0,2 mm / 0.008 in). Puede ir precedido del símbolo de diámetro ⌀ si la zona es cilíndrica.
3.  **Modificador de condición de material** (Ⓜ, Ⓛ o ninguno si se aplica RFS, *Regardless of Feature Size*).
4.  **Letra(s) de datum** (A, B, C) en orden de prioridad, cada una con su propio modificador de material si procede.

Ejemplo de marco de control para una tolerancia de posición:

` ⌖ | ⌀ 0,2 Ⓜ | A | B Ⓜ | C `

## Interpretación de símbolos y ejemplos de aplicación real

- **Rectitud aplicada al eje (⌀ 0,08 mm / 0.003 in Ⓜ):** La zona de tolerancia es un cilindro de diámetro 0,08 mm / 0.003 in en condición de máximo material. Si el eje se produce cerca del límite inferior de tamaño, el cilindro de tolerancia puede crecer hasta un diámetro igual a 0,08 mm más la desviación respecto al MMC. Para una barra de 12 mm ±0,05 mm / 0.472 in ±0.002 in, en MMC (12,05 mm / 0.474 in) la rectitud permitida es 0,08 mm / 0.003 in; en LMC (11,95 mm / 0.470 in) la tolerancia de rectitud puede alcanzar 0,18 mm / 0.007 in.

- **Posición de un patrón de agujeros con MMC:** Dos agujeros de 8 mm +0,1/−0 mm / 0.315 in +0.004/−0 in deben situarse a una distancia básica de 40 mm / 1.575 in. El control `⌖ | ⌀ 0,15 Ⓜ | A | B` define una zona de tolerancia cilíndrica de diámetro 0,15 mm / 0.006 in en MMC. Cuando el agujero se produce en su diámetro mayor (8,1 mm / 0.319 in), la tolerancia de posición total se amplía a 0,25 mm / 0.010 in (0,15 mm + 0,1 mm de bonificación). Esta bonificación garantiza montaje incluso con variaciones dimensionales y posicionales.

- **Perfil de superficie para control de contorno aerodinámico:** Una superficie con perfil teórico se controla mediante `⌓ | 0,5 mm / 0.020 in | A | B | C` (zona bilateral igual). Si se requiere una zona unilateral, se añade el símbolo Ⓤ seguido del desplazamiento, e.g., `⌓ | 0,5 Ⓤ 0,3 | A | B` define una zona de 0,5 mm / 0.020 in situada 0,3 mm / 0.012 in hacia el interior respecto al perfil nominal.

## Comparativa ASME Y14.5 vs ISO GPS

| Característica | ASME Y14.5 | ISO GPS | Impacto en la interpretación |
| --- | --- | --- | --- |
| Condición de máximo material (MMC) | Símbolo Ⓜ explícito en el marco de control | Símbolo Ⓜ igual, pero el estándar ISO 2692 especifica requisitos adicionales para el cálculo de la condición virtual | La bonificación de tolerancia se calcula de forma idéntica en ambos sistemas. |
| Regla de envolvente (*Envelope principle*) | Regla #1: la superficie de un elemento de tamaño no debe violar un contorno perfecto en MMC | No es regla general; debe invocarse con el símbolo Ⓔ (requisito de envolvente) | Una pieza ASME en MMC siempre debe encajar dentro de su contorno geométrico perfecto, mientras que en ISO se requiere indicarlo explícitamente. |
| Concentricidad | Eliminada en Y14.5‑2018; se reemplaza por posición o coaxialidad | ISO 1101 mantiene el símbolo de coaxialidad (mismo símbolo ◎) y la concentricidad como caso particular | Para efectos prácticos, en ASME moderno se prefiere posición con zona de tolerancia cilíndrica, ofreciendo un control más sencillo de medir. |
| Datums | Las referencias de datum se ordenan en el marco por orden de prioridad física | El orden de los datums en el marco es el mismo, pero ISO define sistemas de referencia con grados de restricción más explícitos | La secuencia funcional se mantiene, si bien ISO puede exigir más aclaraciones para la simulación del datum. |
| Perfil de línea | Por defecto, zona bilateral igual a menos que se especifique | ISO permite control de zona de tolerancia con desplazamiento por medio de símbolo UZ | La notación para zonas unilaterales difiere: ASME usa el modificador Ⓤ, mientras que ISO emplea UZ tras el valor de tolerancia. |
| Zona común | Se indica con nota “Common Zone” en el marco de control | Símbolo CZ dentro del marco, adyacente a la tolerancia | A igualdad técnica, la notación cambia la representación gráfica del requisito. |

## Preguntas frecuentes

**1. ¿Cuántos símbolos geométricos principales define la norma ASME Y14.5?**  
La norma ASME Y14.5 define 14 símbolos geométricos principales organizados en cinco categorías: 4 de forma, 3 de orientación, 2 de localización, 2 de perfil y 2 de alabeo, más un símbolo de concentricidad eliminado en la revisión de 2018.

**2. ¿Qué bonificación máxima de tolerancia puedo obtener con la condición de máximo material en un taladro de 10 mm / 0.394 in?**  
Con un taladro de 10 mm ±0,05 mm / 0.394 in ±0.002 in y una tolerancia de posición de 0,1 mm / 0.004 in Ⓜ, la bonificación máxima cuando el taladro se produce en su diámetro mayor (10,05 mm / 0.396 in) es de 0,05 mm / 0.002 in, lo que eleva la tolerancia total a 0,15 mm / 0.006 in.

**3. ¿Cuál es la diferencia fundamental entre el símbolo de rectitud y el de planitud respecto a la zona de tolerancia?**  
La rectitud aplicada a una superficie controla cada elemento lineal por separado, mientras que la planitud controla toda la superficie dentro de un plano de 0,05 mm / 0.002 in de espesor. Si se aplica rectitud a un eje, la zona de tolerancia es un cilindro de diámetro definido, por ejemplo ⌀ 0,03 mm / 0.0012 in.

**4. ¿En qué casos se utiliza el modificador de plano tangente Ⓣ?**  
El modificador Ⓣ se aplica cuando se desea controlar únicamente el plano que toca los puntos más altos de una superficie, ignorando valles de hasta 0,1 mm / 0.004 in de profundidad. Es útil en superficies de apoyo donde el contacto real se produce en picos, como en bases de montaje.

**5. ¿Qué representa la zona de tolerancia proyectada Ⓟ en un agujero roscado?**  
La zona de tolerancia proyectada Ⓟ de 15 mm / 0.59 in indica que la tolerancia de perpendicularidad se evalúa sobre una prolongación ficticia de 15 mm / 0.59 in por encima de la superficie, simulando la presencia del tornillo que atravesará el ensamblaje.

**6. ¿Permite ASME Y14.5 controlar simetría sin el antiguo símbolo de simetría?**  
Sí. La simetría se eliminó en la revisión 2009 y se controla actualmente mediante perfil de superficie o posición. Un control de perfil de 0,1 mm / 0.004 in respecto a un plano mediano datum asegura una simetría funcional equivalente sin la ambigüedad del símbolo original.

## Fuentes consultadas

- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
