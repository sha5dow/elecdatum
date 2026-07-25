---
title: "Relevador diferencial protección de transformadores"
sidebar:
  label: "Relevador diferencial protección de transformadores"
description: "Ficha tecnica: Relevador diferencial protección de transformadores"
keywords: ["differential relay transformer protection 87T", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "relays"
subcategory: "differential-relay"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El relevador diferencial para protección de transformadores, identificado con el número de dispositivo ANSI 87T, es la solución principal para detectar fallas internas en transformadores de potencia con capacidad superior a 5 MVA. Su función consiste en comparar la corriente que ingresa al primario con la que sale del secundario; cualquier desequilibrio significativo activa el disparo instantáneo de los interruptores de ambos lados, aislando la máquina en milisegundos.

## Principio de funcionamiento
La protección diferencial de transformadores se activa cuando la diferencia entre las corrientes de entrada y salida supera un valor de ajuste típico de entre el 20 % y el 40 % de la corriente nominal del transformador. El esquema se basa en la ley de equilibrio de amper‑vueltas: en condiciones normales, la suma fasorial de las corrientes medidas por los transformadores de corriente (CT) instalados en ambos lados del transformador debe ser nula, siempre que se hayan compensado las relaciones de transformación y los desfases. Al ocurrir una falla dentro de la zona protegida —entre los TC de primario y secundario—, este equilibrio se rompe, aparece una corriente diferencial o de _spill_ y el relé ordena la apertura de los interruptores.

## Esquema de conexión típico
Para un transformador de potencia trifásico se instalan tres transformadores de corriente en el lado primario y tres en el lado secundario. Sus secundarios se conectan en oposición de tal manera que, en régimen normal, la corriente circulante por la bobina del relé diferencial sea prácticamente cero. Cuando el transformador tiene una configuración estrella‑triángulo (Yd), los CT secundarios deben conectarse en triángulo en el lado de la estrella y en estrella en el lado del triángulo, con el fin de compensar el desfase de 30° introducido por el devanado. Las relaciones de los CT se seleccionan para que las corrientes secundarias sean iguales —normalmente 1 A o 5 A—, normalizando así los niveles antes de la comparación.

## Curva característica y ajuste de bias
El ajuste de bias o frenado en los relés diferenciales modernos se configura con una pendiente porcentual típica del 20 % al 50 %, lo que garantiza estabilidad durante faltas externas con corrientes de paso de hasta 10 veces la corriente nominal del transformador. La característica de operación no es una simple comparación de módulo, sino que incorpora una corriente de restricción (bias) para evitar disparos indebidos causados por errores de relación de los TC, cambios de tomas del cambiador de derivaciones bajo carga o por la corriente de magnetización de energización. El relé opera únicamente cuando la corriente diferencial supera un porcentaje definido de la corriente de restricción.

## Ventajas y aplicaciones
La protección diferencial detecta fallas internas en menos de 20 ms / 1 ciclo (a 50 Hz) en transformadores de potencia a partir de 5 MVA, superando en velocidad a otros dispositivos como el relé Buchholz. Sus principales ventajas son: operación instantánea ante cortocircuitos entre fases, entre espiras o a tierra dentro de la zona protegida; capacidad de detectar fallas en los bushings que no involucran el aceite aislante; y posibilidad de ajustar la sensibilidad mediante la pendiente de bias para evitar actuaciones en regímenes transitorios. Se aplica obligatoriamente en transformadores de potencia de generación, subestaciones de transmisión y grandes centros industriales.

## Preguntas frecuentes (FAQ)
### ¿Qué es un relé diferencial 87T?
Es un dispositivo de protección que compara permanentemente las corrientes eléctricas que entran y salen del transformador. Si la diferencia supera el umbral ajustado, desconecta instantáneamente el transformador de la red para evitar daños por fallas internas.

### ¿Cuál es el umbral típico de disparo de la protección diferencial?
El umbral de corriente diferencial suele regularse entre el 20 % y el 40 % de la corriente nominal del transformador. Este valor se ajusta considerando los errores de los TC y la corriente de magnetización, de manera que no se produzcan disparos intempestivos.

### ¿Cómo se compensa el desfase en conexiones estrella‑triángulo?
Los secundarios de los transformadores de corriente se conectan físicamente en la configuración opuesta: triángulo en el lado de la estrella del transformador y estrella en el lado del triángulo. Así se compensa el desfase de 30° y se obtienen magnitudes de corriente comparables en el relé.

### ¿Qué diferencia hay entre la protección diferencial y el relé Buchholz?
El relé Buchholz solo detecta fallas que producen gases dentro del tanque de aceite, mientras que la protección diferencial detecta cualquier falla interna —incluidas aquellas en los aisladores o arrollamientos sin generar gas— y lo hace en milisegundos, mucho más rápido que el Buchholz.

### ¿Qué ajustes de bias se recomiendan para evitar disparos en faltas externas?
La pendiente de bias se configura típicamente entre el 20 % y el 50 % de la corriente de restricción. Pendientes más altas ofrecen mayor seguridad frente a las corrientes de paso de una falta externa, aunque reducen la sensibilidad para fallas internas de baja intensidad.

### ¿En qué casos no se recomienda la protección diferencial de transformador?
No se recomienda cuando el costo o la complejidad de instalar TC en ambos lados sea excesiva, como en transformadores muy pequeños o en sistemas con grandes distancias entre el primario y el secundario. En esos casos se opta por protecciones de sobrecorriente combinadas con fusibles o relés Buchholz.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/differential-protection-of-transformer-differential-relays/
