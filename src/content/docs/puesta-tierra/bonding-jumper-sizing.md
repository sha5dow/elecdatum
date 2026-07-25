---
title: "Dimensionamiento de puente de unión (bonding)"
sidebar:
  label: "Dimensionamiento de puente de unión (bonding)"
description: "Ficha tecnica: Dimensionamiento de puente de unión (bonding)"
keywords: ["bonding jumper sizing NEC table 250.66", "puesta-tierra"]
category: "puesta-tierra"
topic: "bonding"
subcategory: "bonding-jumper-sizing"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El dimensionamiento de puentes de unión (bonding jumpers) es un requisito fundamental del artículo 250 del National Electrical Code (NEC) para garantizar una ruta de baja impedancia que permita la operación de los dispositivos de protección contra sobrecorriente durante una falla a tierra. Los puentes del lado de la alimentación (supply‑side) se dimensionan según la tabla 250.102(C)(1) con base en el área de los conductores de fase, mientras que los del lado de la carga (load‑side) se rigen por 250.122, basándose en la capacidad del dispositivo de sobrecorriente. La correcta selección del calibre es crítica tanto para cobre como para aluminio o aluminio revestido de cobre.

## Tabla de dimensionamiento de puentes de unión (lado de la alimentación – NEC 250.102(C)(1))

| Tamaño del conductor de fase más grande por canalización o área equivalente para conductores en paralelo | Puente de unión – cobre | Puente de unión – aluminio o aluminio revestido de cobre |
|---|---|---|
| 2 AWG o menor (≤33,6 mm²) | 8 AWG (8,37 mm²) | 6 AWG (13,3 mm²) |
| 1 o 1/0 AWG (42,4 – 53,5 mm²) | 6 AWG (13,3 mm²) | 4 AWG (21,2 mm²) |
| 2/0 o 3/0 AWG (67,4 – 85,0 mm²) | 4 AWG (21,2 mm²) | 2 AWG (33,6 mm²) |
| Mayor de 3/0 hasta 350 kcmil (85,0 – 177 mm²) | 2 AWG (33,6 mm²) | 1/0 AWG (53,5 mm²) |
| Mayor de 350 hasta 600 kcmil (177 – 304 mm²) | 1/0 AWG (53,5 mm²) | 3/0 AWG (85,0 mm²) |
| Mayor de 600 hasta 1100 kcmil (304 – 557 mm²) | 2/0 AWG (67,4 mm²) | 4/0 AWG (107 mm²) |
| Mayor de 1100 kcmil (>557 mm²) | Véanse notas 1 y 2 | Véanse notas 1 y 2 |

Notas:
1. El término “conductores de alimentación” incluye los conductores de fase que no tienen protección contra sobrecorriente en su lado de alimentación y terminan en el medio de desconexión de servicio o en el primer medio de desconexión de un sistema derivado separadamente.
2. Para conductores con área mayor a 1100 kcmil, el puente de unión debe tener un área no menor al 12,5 % del área del conductor de fase más grande, utilizando la tabla 8 del capítulo 9 del NEC para la conversión de AWG a circular mils.

## Reglas de dimensionamiento según NEC 250.102

El artículo 250.102 del NEC establece criterios diferenciados para puentes de unión del lado de la alimentación y del lado de la carga. En el lado de la alimentación, una sola canalización o cable exige dimensionar el puente conforme a la tabla 250.102(C)(1) tomando como referencia el calibre del conductor de fase más grande dentro de esa canalización. Cuando los conductores de fase se instalan en paralelo en dos o más canalizaciones, el puente de unión de cada canalización se dimensiona individualmente según la tabla mencionada, utilizando el calibre del conductor de fase dentro de esa canalización en particular.

Si se opta por un único puente de unión para dos o más canalizaciones metálicas, el calibre mínimo se determina a partir del área equivalente total de los conductores de fase en paralelo. La regla básica es aplicar el 12,5 % al área circular total (suma de los kcmil de todas las fases en paralelo) y convertir el resultado al calibre AWG/kcmil normalizado más próximo, según la tabla 8 del capítulo 9 del NEC. La fórmula explícita es:

> **Área del puente (cmil) = (Suma de áreas de fase en kcmil) × 1000 × 0,125**

Donde cada variable representa:
- **Suma de áreas de fase en kcmil**: área total de los conductores de fase en paralelo, sumando los kcmil de todas las canalizaciones.
- **1000**: factor de conversión de kcmil a circular mils (1 kcmil = 1000 cmil).
- **0,125**: 12,5 %, porcentaje mínimo exigido para el puente de unión único.

Por ejemplo, tres canalizaciones con conductores de 400 kcmil cada una resultan en 1200 kcmil totales. El área del puente debe ser 1200 × 1000 × 0,125 = 150 000 cmil, que corresponde a un calibre 3/0 AWG según la tabla 8 del capítulo 9.

En el lado de la carga (aguas abajo de dispositivos de sobrecorriente), los puentes de unión de equipos se dimensionan exclusivamente según 250.122 con base en el valor nominal del dispositivo de protección contra sobrecorriente que alimenta el circuito. La instalación de los puentes, tanto en el interior como en el exterior de canalizaciones, debe cumplir con los métodos de terminación listados en 250.8(A) y con una longitud máxima de 1,8 m / 6 ft cuando se instalan fuera de la canalización, debiendo ir además encaminados junto con ella.

## Procedimiento de cálculo

1. Identificar si el puente de unión corresponde al lado de la alimentación o al lado de la carga. Si es lado de la carga, omitir los pasos siguientes y utilizar directamente la tabla 250.122 en función de la protección de sobrecorriente.
2. Determinar el calibre o área del conductor de fase más grande presente en la canalización.
3. Si se trata de una sola canalización o cable, ingresar con ese valor a la tabla 250.102(C)(1) y seleccionar el calibre del puente de cobre o aluminio según el material del conductor de fase.
4. Si los conductores están en paralelo en múltiples canalizaciones y se dimensiona un puente individual por cada una, aplicar el paso 3 para cada canalización usando el calibre de fase dentro de ella.
5. Si se utiliza un único puente de unión para todas las canalizaciones en paralelo, sumar las áreas de todos los conductores de fase (en kcmil), calcular el 12,5 % de ese total y convertir el resultado a circular mils. Luego localizar el calibre comercial correspondiente en la tabla 8 del capítulo 9 del NEC (18 AWG hasta 4/0 AWG) o usar el valor en kcmil para dimensiones mayores.
6. Verificar que la terminación cumpla con los métodos aprobados según 250.8(A) y que la longitud del conductor, si va por fuera de la canalización, no supere 1,8 m / 6 ft.

## Preguntas frecuentes (FAQ)

### ¿Dónde se encuentra la tabla de dimensionamiento de puentes de unión en el NEC?
La tabla 250.102(C)(1) del NEC 2020 contiene los calibres requeridos para conductores de puesta a tierra del lado de la alimentación, incluyendo puentes de unión principales, puentes de unión del sistema y puentes de unión del lado de la alimentación. Se encuentra en el artículo 250, sección 250.102(C).

### ¿Qué diferencia hay entre un puente de unión del lado de la alimentación y uno del lado de la carga?
El puente del lado de la alimentación se conecta antes del dispositivo de sobrecorriente principal y se dimensiona con la tabla 250.102(C)(1) según el tamaño del conductor de fase. El puente del lado de la carga se ubica después de la protección de sobrecorriente y su tamaño se determina por la capacidad nominal del dispositivo, conforme a la tabla 250.122.

### ¿Cómo se calcula el puente de unión único para múltiples canalizaciones en paralelo?
Se suma el área de todas las fases en paralelo (en kcmil), se multiplica por 1000 para convertir a circular mils y se calcula el 12,5 % de ese valor. El resultado en circular mils se convierte al calibre comercial más cercano usando la tabla 8 del capítulo 9 del NEC. Por ejemplo, tres fases de 400 kcmil requieren un puente único de 3/0 AWG (150 000 cmil).

### ¿Se puede usar un puente de unión de aluminio en un sistema con conductores de cobre?
Sí, la tabla 250.102(C)(1) contempla puentes de aluminio o aluminio revestido de cobre para cualquier sistema, siempre que las conexiones estén identificadas para su uso con conductores de aluminio y se respete la compatibilidad galvánica en los puntos de terminación.

### ¿Qué longitud máxima permite el NEC para un puente de unión instalado fuera de la canalización?
El NEC 250.102(E)(2) limita a 1,8 m / 6 ft la longitud del conductor del puente de unión cuando se instala fuera de una canalización. Además, exige que el conductor esté encaminado junto con la canalización que está uniendo.

### ¿Es obligatorio instalar un puente de unión en cada canalización metálica?
Sí, cada canalización metálica que contenga conductores de servicio debe tener un puente de unión dimensionado según la tabla 250.102(C)(1) basado en el tamaño de los conductores de fase dentro de esa canalización, a menos que se utilice un único puente común dimensionado a partir del área equivalente de todas las fases en paralelo conforme a 250.102(C)(2).

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20_BG_250.102.pdf
