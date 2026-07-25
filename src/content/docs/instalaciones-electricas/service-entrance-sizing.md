---
title: "Dimensionamiento de acometida eléctrica"
sidebar:
  label: "Dimensionamiento de acometida eléctrica"
description: "Ficha tecnica: Dimensionamiento de acometida eléctrica"
keywords: ["electrical service entrance sizing calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "service-entrance"
subcategory: "service-entrance-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de la acometida eléctrica consiste en seleccionar los conductores, la protección principal y la capacidad de cortocircuito del equipo de servicio para un suministro seguro y conforme a las normativas aplicables, como el National Electrical Code (NEC) o las reglamentaciones locales equivalentes. El proceso inicia con el cálculo de la carga total demandada por la instalación y continúa con la verificación de ampacidad, caída de tensión y corriente de falla disponible, garantizando que todos los componentes soporten tanto la operación normal como las condiciones anormales de falla.

## Cálculo de carga total de la acometida
La carga de la acometida se determina sumando las cargas de todos los circuitos derivados y aplicando factores de demanda según el tipo de ocupación. Para viviendas unifamiliares se utiliza el método estándar del NEC, que computa:

- Carga de alumbrado general: 3 VA por pie cuadrado de área habitable.
- Carga de pequeños electrodomésticos: 1500 VA por cada circuito de cocina y lavandería.
- Carga de electrodomésticos mayores con demanda reducida (estufa, secadora, etc.) según tablas normalizadas.
- Carga de climatización: la mayor entre calefacción y aire acondicionado.
- Otras cargas fijas: motores, bombas, etc., al 100 %.

La carga total en voltamperios se convierte a amperios dividiendo entre la tensión de servicio (120/240 V monofásico o 120/208 V trifásico).

## Dimensionamiento del conductor principal
Los conductores de la acometida deben tener una ampacidad igual o superior a la corriente calculada, considerando factores de ajuste por temperatura y agrupamiento. La selección se basa en las tablas de ampacidad del NEC, como se resume a continuación para conductores de cobre con aislamiento THHN/THWN a 75 °C.

| Calibre AWG/kcmil | Sección (mm²) | Ampacidad (A) |
|-------------------|---------------|---------------|
| 8 AWG / 8,37 mm²  | 8,37 mm² / 0,0130 in² | 50 A |
| 6 AWG / 13,3 mm²  | 13,3 mm² / 0,0206 in² | 65 A |
| 4 AWG / 21,2 mm²  | 21,2 mm² / 0,0329 in² | 85 A |
| 3 AWG / 26,7 mm²  | 26,7 mm² / 0,0414 in² | 100 A |
| 2 AWG / 33,6 mm²  | 33,6 mm² / 0,0521 in² | 115 A |
| 1 AWG / 42,4 mm²  | 42,4 mm² / 0,0657 in² | 130 A |
| 1/0 AWG / 53,5 mm² | 53,5 mm² / 0,0829 in² | 150 A |
| 2/0 AWG / 67,4 mm² | 67,4 mm² / 0,1045 in² | 175 A |
| 3/0 AWG / 85,0 mm² | 85,0 mm² / 0,1318 in² | 200 A |
| 4/0 AWG / 107 mm²  | 107 mm² / 0,166 in²   | 230 A |
| 250 kcmil / 127 mm² | 127 mm² / 0,197 in²   | 255 A |
| 300 kcmil / 152 mm² | 152 mm² / 0,236 in²   | 285 A |
| 350 kcmil / 177 mm² | 177 mm² / 0,274 in²   | 310 A |
| 400 kcmil / 203 mm² | 203 mm² / 0,315 in²   | 335 A |
| 500 kcmil / 253 mm² | 253 mm² / 0,392 in²   | 380 A |

Para conductores de aluminio, se requieren calibres aproximadamente dos tamaños mayores para la misma ampacidad. La ampacidad real puede verse reducida por temperaturas ambiente superiores a 30 °C (86 °F) o por más de tres conductores portadores de corriente en una misma canalización, aplicando los factores de corrección correspondientes.

## Verificación de caída de tensión
La caída de tensión en la acometida no debe exceder el 3 % de la tensión nominal para garantizar un suministro adecuado. La fórmula práctica en corriente alterna monofásica es:

> **ΔV = (2 × L × I × (R cos φ + X sen φ)) / 1000**

donde:

| Variable | Descripción | Unidades típicas |
|----------|-------------|------------------|
| ΔV | Caída de tensión | V |
| L | Longitud del conductor en un solo sentido | m / ft |
| I | Corriente de carga | A |
| R | Resistencia del conductor | Ω/km o Ω/1000 ft |
| X | Reactancia del conductor | Ω/km o Ω/1000 ft |
| φ | Ángulo del factor de potencia | grados |

En sistemas trifásicos se reemplaza el factor 2 por √3 (≈1,732). Para longitudes cortas y conductores de cobre de calibre moderado, la componente reactiva suele despreciarse, simplificando el cálculo a ΔV = (2 × L × I × R) / 1000 para monofásico.

Como ejemplo, un servicio residencial de 200 A a 240 V con un conductor de cobre 3/0 AWG (resistencia 0,078 Ω/1000 ft) y una longitud de 50 ft (15,24 m) produce una caída de aproximadamente 1,56 V (0,65 %), cumpliendo holgadamente el criterio.

## Cálculo de corriente de falla disponible
La corriente de falla disponible (AFC, por *Available Fault Current*) debe marcarse en el equipo de servicio conforme al artículo 110.24 del NEC. Su valor se calcula a partir del nivel de cortocircuito en el secundario del transformador de la compañía suministradora, atenuado por la impedancia del conductor de acometida.

Procedimiento de cálculo (sistema trifásico):
1. Obtener la corriente de falla en el secundario del transformador, designada como *I*.
2. Determinar la constante *C* del conductor de fase según la tabla de constantes.
3. Medir la longitud *L* (en pies) del conductor de acometida entre el transformador y el punto de servicio.
4. Calcular el factor *F*:
   > **F = (1,732 × L × I) / (C × E(L-L))**
5. Obtener el multiplicador *M*:
   > **M = 1 / (1 + F)**
6. La corriente de falla disponible en el equipo de servicio es:
   > **Isc = I × M**

La tabla siguiente muestra valores típicos de la constante *C* para conductores de cobre y aluminio en configuración trifásica.

| Material | Calibre AWG/kcmil | Constante C (trifásica) |
|----------|-------------------|-------------------------|
| Cobre    | 8 AWG / 8,37 mm²  | 1 380 |
| Cobre    | 6 AWG / 13,3 mm²  | 2 210 |
| Cobre    | 4 AWG / 21,2 mm²  | 3 520 |
| Cobre    | 3 AWG / 26,7 mm²  | 4 440 |
| Cobre    | 2 AWG / 33,6 mm²  | 5 580 |
| Cobre    | 1 AWG / 42,4 mm²  | 6 980 |
| Cobre    | 1/0 AWG / 53,5 mm² | 8 830 |
| Cobre    | 2/0 AWG / 67,4 mm² | 11 100 |
| Cobre    | 3/0 AWG / 85,0 mm² | 13 900 |
| Cobre    | 4/0 AWG / 107 mm²  | 17 500 |
| Aluminio | 8 AWG / 8,37 mm²  | 802   |
| Aluminio | 6 AWG / 13,3 mm²  | 1 290 |
| Aluminio | 4 AWG / 21,2 mm²  | 2 040 |
| Aluminio | 3 AWG / 26,7 mm²  | 2 580 |
| Aluminio | 2 AWG / 33,6 mm²  | 3 240 |
| Aluminio | 1 AWG / 42,4 mm²  | 4 070 |
| Aluminio | 1/0 AWG / 53,5 mm² | 5 130 |
| Aluminio | 2/0 AWG / 67,4 mm² | 6 440 |
| Aluminio | 3/0 AWG / 85,0 mm² | 8 080 |
| Aluminio | 4/0 AWG / 107 mm²  | 10 100 |

Longitud *L* se expresa en pies; para convertir metros a pies, multiplicar por 3,281. La tensión de línea a línea E(L-L) está en voltios.

Ejemplo: transformador con 35 000 A de falla en secundario, acometida de cobre 3/0 AWG de 100 ft (30,48 m), sistema 480 V → C=13 900, F=0,9075, M=0,524, Isc=18 340 A. El equipo de servicio debe tener un poder de corte nominal (SCCR) no menor que este valor.

## Consideraciones según NEC

- Todo equipo de servicio debe llevar una etiqueta legible que indique la máxima corriente de falla disponible (AFC) y la fecha de cálculo (NEC 110.24).
- El poder de corte de los dispositivos de protección (interruptores, fusibles) debe ser igual o mayor que la AFC disponible (NEC 110.9).
- Los conductores de la acometida deben dimensionarse para la carga calculada más un margen de seguridad por sobrecargas futuras, respetando las ampacidades de la tabla con los factores de ajuste.
- La caída de tensión combinada entre la acometida y los circuitos derivados no debe superar el 5 %; se recomienda limitar la caída en la acometida al 3 %.
- Las conexiones de los conductores de puesta a tierra y del electrodo de puesta a tierra deben realizarse en el punto de servicio, y el conductor del electrodo se dimensiona según la tabla 250.66 del NEC.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la ampacidad típica de un conductor de cobre 2/0 AWG para una acometida residencial?
El conductor 2/0 AWG de cobre con aislamiento THHN/THWN a 75 °C tiene una ampacidad de 175 A, y se utiliza comúnmente en servicios residenciales de 150 A o 175 A.

### ¿Qué porcentaje de caída de tensión es admisible en una acometida según el NEC?
Se recomienda que la caída de tensión en la acometida no exceda el 3 %, dejando un margen de 2 % para los circuitos derivados, para un total máximo del 5 % hasta el punto de utilización.

### ¿Cada cuánto debe actualizarse la etiqueta de corriente de falla disponible?
La etiqueta debe actualizarse cada vez que se realice una modificación que altere la impedancia de la acometida (cambio de conductor, transformador o longitud) y, como buena práctica, cada 5 años para verificar que no hayan cambiado las condiciones de la red.

### ¿Cómo afecta la longitud del conductor de acometida a la corriente de falla disponible?
A mayor longitud, mayor resistencia e inductancia, lo que reduce la corriente de falla; por ejemplo, duplicar la longitud de 100 ft a 200 ft (de 30,5 m a 61 m) puede disminuir la AFC en más del 30 %, dependiendo del calibre.

### ¿Qué calibre de conductor de aluminio equivale aproximadamente a un cobre 4/0 AWG en ampacidad?
Un conductor de aluminio 300 kcmil (152 mm²) tiene una ampacidad de 255 A, comparable al cobre 4/0 AWG (230 A) en condiciones similares de instalación.

### ¿Cuál es la constante C para un conductor de cobre 1/0 AWG en un sistema trifásico de 208 V?
La constante C para cobre 1/0 AWG en configuración trifásica es 8 830, independiente de la tensión, ya que la fórmula ya incluye la tensión de línea a línea.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **mikeholt.com**: https://www.mikeholt.com/electrician-toolbox-home.php
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
