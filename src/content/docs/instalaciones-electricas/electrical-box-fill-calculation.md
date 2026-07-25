---
title: "Cálculo de llenado de caja eléctrica"
sidebar:
  label: "Cálculo de llenado de caja eléctrica"
description: "Ficha tecnica: Cálculo de llenado de caja eléctrica"
keywords: ["electrical box fill calculation NEC", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "wiring-methods"
subcategory: "box-fill-calculation"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El cálculo de llenado de caja eléctrica determina la cantidad máxima de conductores, dispositivos y accesorios que pueden instalarse de forma segura dentro de una caja de conexiones, evitando sobrecalentamientos y daños mecánicos. El método estándar se basa en las disposiciones del Artículo 314 del National Electrical Code (NEC) de Estados Unidos, ampliamente referenciado en normativas internacionales y prácticas de ingeniería eléctrica.

El llenado de caja eléctrica es el procedimiento normalizado que cuantifica el volumen ocupado por todos los componentes alojados en una caja de empalmes, derivación o dispositivo. Cada conductor, dispositivo de conexión, borne, abrazadera o elemento de soporte interno consume un volumen específico en pulgadas cúbicas o centímetros cúbicos. La suma de estos volúmenes individuales no debe superar el volumen total marcado en la caja, garantizando así la integridad de los aislamientos y la correcta disipación de calor.

## Fórmula de cálculo del llenado de cajas

La conformidad con los requisitos de llenado se evalúa con la desigualdad fundamental que compara el volumen total equivalente de todos los elementos con el volumen máximo de la caja seleccionada.

> **V_total equivalente = Σ (Cantidad de conductores × Volumen unitario) + Volumen de dispositivos + Volumen de accesorios internos ≤ V_caja**

| Variable | Descripción | Unidad |
| :--- | :--- | :--- |
| `V_total equivalente` | Volumen total calculado ocupado por todos los componentes dentro de la caja | cm³ / in³ |
| `Cantidad de conductores` | Número de conductores de un calibre y tipo de aislamiento dados, contabilizados según reglas de cómputo del NEC | adimensional |
| `Volumen unitario` | Volumen asignado a un conductor individual según su calibre, tomado de la Tabla 314.16(A) del NEC | cm³ / in³ |
| `Volumen de dispositivos` | Volumen equivalente asignado a cada dispositivo de conexión (interruptor, receptáculo), calculado como 2 veces el volumen unitario del conductor más grande conectado al dispositivo | cm³ / in³ |
| `Volumen de accesorios internos` | Volumen asignado a abrazaderas internas, pernos de soporte o conectores que ingresan a la caja, basado en el conductor más grande presente | cm³ / in³ |
| `V_caja` | Volumen interno total de la caja, usualmente moldeado o estampado en el cuerpo de la misma por el fabricante | cm³ / in³ |

## Tabla de volumen equivalente de conductores

Los volúmenes asignados a cada conductor se extraen de la tabla normalizada NEC 314.16(A), expresados aquí en pulgadas cúbicas y su conversión a centímetros cúbicos.

| Calibre del conductor (AWG/kcmil) | Volumen unitario por conductor (in³ / cm³) |
| :--- | :--- |
| 18 AWG | 1.50 in³ / 24.6 cm³ |
| 16 AWG | 1.75 in³ / 28.7 cm³ |
| 14 AWG | 2.00 in³ / 32.8 cm³ |
| 12 AWG | 2.25 in³ / 36.9 cm³ |
| 10 AWG | 2.50 in³ / 41.0 cm³ |
| 8 AWG | 3.00 in³ / 49.2 cm³ |
| 6 AWG | 5.00 in³ / 81.9 cm³ |

Las reglas de cómputo establecen que cada conductor que se origina fuera de la caja y termina dentro de ella cuenta como uno. Los conductores que pasan a través de la caja sin corte cuentan como uno. El conductor de puesta a tierra de equipos, cuando es de calibre igual o inferior a 4 AWG, se cuenta una sola vez sin importar cuántos conductores de tierra lleguen. Las abrazaderas internas consumen un volumen equivalente al conductor más grande presente.

## Tabla de volumen máximo de cajas estándar

Las cajas metálicas o no metálicas de uso común poseen volúmenes internos normalizados que el instalador debe respetar como límite superior del cálculo. Los valores típicos para cajas cuadradas de 4 pulgadas y octogonales se listan a continuación.

| Tipo de caja y dimensiones | Volumen interno máximo (in³ / cm³) |
| :--- | :--- |
| Cuadrada 4 × 4 × 1½" | 21.0 in³ / 344.1 cm³ |
| Cuadrada 4 × 4 × 2⅛" | 30.3 in³ / 496.5 cm³ |
| Octogonal 4 × 1½" | 15.5 in³ / 254.0 cm³ |
| Octogonal 4 × 2⅛" | 21.5 in³ / 352.3 cm³ |
| Rectangular de dispositivo 3 × 2 × 2½" | 12.5 in³ / 204.8 cm³ |
| Rectangular de dispositivo 3 × 2 × 3½" | 18.0 in³ / 295.0 cm³ |

## Aplicaciones

El cálculo de llenado de caja es obligatorio en toda instalación eléctrica residencial, comercial e industrial donde se utilicen cajas de conexiones, empalmes o salidas para luminarias. Se aplica tanto en sistemas de corriente alterna como continua hasta 1000 voltios nominales. Entre las aplicaciones más relevantes se incluyen la distribución de circuitos ramales con múltiples derivaciones, la instalación de receptáculos dúplex en cajas de dispositivo, el montaje de luminarias pesadas con soportes que actúan como volumen ocupante, y las cajas de paso con conductores de gran sección transversal.

## Consideraciones normativas

El procedimiento de cálculo se rige por el Artículo 314 del NEC (NFPA 70), en particular la Sección 314.16. Esta sección exige que el volumen total de los conductores, dispositivos y accesorios no supere el volumen de la caja indicado por el fabricante. La tabla 314.16(A) proporciona los volúmenes unitarios para conductores de hasta 6 AWG. La tabla 314.16(B) lista los volúmenes máximos permitidos para cajas metálicas estándar. En el ámbito europeo e internacional, aunque no existe una tabla idéntica, el concepto de factor de llenado de envolventes sigue los lineamientos de la serie IEC 60670 y las regulaciones locales derivadas. La inspección de cumplimiento verifica la compatibilidad entre la capacidad de la caja y el volumen calculado, rechazando instalaciones que requieran forzar los conductores para cerrar la tapa.

## Ejemplo de cálculo

Se requiere instalar en una caja cuadrada de 4 × 4 × 2⅛ pulgadas (volumen interno 30.3 in³ / 496.5 cm³) los siguientes elementos: tres cables de 12 AWG con dos conductores activos y tierra cada uno, un receptáculo dúplex con conductores de 12 AWG, y una abrazadera interna. El cálculo se desarrolla así:

1. Se identifican los conductores que entran a la caja: 3 cables × 2 conductores activos = 6 conductores activos de 12 AWG.
2. Los conductores de tierra de 12 AWG en los tres cables se agrupan como un solo conductor de tierra a efectos de volumen.
3. Conductores totales a contar: 6 activos + 1 tierra = 7 conductores de 12 AWG.
4. Volumen unitario para 12 AWG según la tabla: 2.25 in³ / 36.9 cm³ cada uno.
5. Volumen de conductores: 7 × 2.25 in³ = 15.75 in³ / 7 × 36.9 cm³ = 258.1 cm³.
6. Volumen del dispositivo: al ser un receptáculo con conductores de 12 AWG, equivale a 2 conductores de 12 AWG → 2 × 2.25 in³ = 4.50 in³ / 73.7 cm³.
7. Volumen de la abrazadera interna: equivale al conductor más grande presente, en este caso 12 AWG → 2.25 in³ / 36.9 cm³.
8. Volumen total equivalente: 15.75 + 4.50 + 2.25 = 22.50 in³ / 368.7 cm³.
9. Comparación con el volumen de la caja seleccionada: 22.50 in³ ≤ 30.3 in³, por lo que la instalación cumple.

## Preguntas frecuentes (FAQ)

### ¿Cuál es el volumen total máximo permitido para una caja octogonal de 4 × 1½ pulgadas según el NEC?
El volumen interno máximo marcado en una caja octogonal estándar de 4 × 1½ pulgadas es 15.5 in³ / 254.0 cm³, y este valor no debe sobrepasarse en el cálculo de llenado.

### ¿Cuántos conductores de calibre 14 AWG pueden alojarse como máximo en una caja cuadrada de 21 pulgadas cúbicas?
Considerando un volumen unitario de 2.00 in³ / 32.8 cm³ por conductor de 14 AWG y sin otros dispositivos, una caja de 21.0 in³ / 344.1 cm³ puede contener hasta 10 conductores de ese calibre.

### ¿Qué volumen equivalente ocupa un interruptor unipolar conectado con conductores de 12 AWG en una caja de dispositivo?
Un interruptor unipolar conectado a conductores de 12 AWG consume un volumen equivalente a 4.50 in³ / 73.7 cm³, correspondiente a dos veces el volumen unitario de 2.25 in³ / 36.9 cm³ del conductor de 12 AWG.

### ¿Cómo se contabiliza un conductor de puesta a tierra de 10 AWG que ingresa a la caja junto con otros conductores activos del mismo calibre?
Todos los conductores de puesta a tierra de equipos de calibre 10 AWG que entran a la caja se cuentan como un único conductor de 10 AWG, aportando 2.50 in³ / 41.0 cm³ al volumen total equivalente.

### ¿Cuál es el volumen requerido para un conductor de calibre 6 AWG en un cálculo de llenado?
Un conductor de 6 AWG requiere un volumen unitario de 5.00 in³ / 81.9 cm³, valor que se multiplica por la cantidad de conductores de ese calibre que se originan fuera y terminan dentro de la caja.

### ¿Puede excederse el volumen interno de una caja si los conductores se compactan manualmente?
No está permitido bajo ninguna circunstancia exceder el volumen interno marcado, incluso si los conductores pueden comprimirse físicamente, ya que esto compromete la disipación térmica y la integridad mecánica de los aislamientos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20_EP_5.7_Annex_C.pdf
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
