---
title: "Tipos de generadores síncronos asíncronos"
sidebar:
  label: "Tipos de generadores síncronos asíncronos"
description: "Ficha tecnica: Tipos de generadores síncronos asíncronos"
keywords: ["generator types synchronous asynchronous", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "generators"
subcategory: "generator-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los generadores eléctricos de corriente alterna se clasifican según la relación entre la velocidad de su rotor y la frecuencia de la tensión generada en **generadores síncronos** y **generadores asíncronos (de inducción)**. Mientras que en el generador síncrono el rotor gira exactamente a la velocidad del campo magnético giratorio, en el generador asíncrono existe una diferencia de velocidad (deslizamiento) indispensable para la producción de par electromagnético.

En ambos tipos de máquina, un devanado de armadura (normalmente en el estator) alimentado con corriente alterna produce un campo magnético rotatorio. La velocidad de rotación de este campo, denominada **velocidad síncrona** *nₛ*, viene dada por:

> ***nₛ = 120 · f / p***

| Variable | Significado | Unidad |
|----------|--------------|--------|
| *nₛ* | Velocidad síncrona | rpm |
| *f* | Frecuencia de la red | Hz |
| *p* | Número de polos magnéticos | – |

En el generador síncrono, el rotor se mantiene bloqueado magnéticamente con este campo y gira a *nₛ*, mientras que en el generador asíncrono el rotor debe girar a una velocidad *n* ligeramente superior a *nₛ* (régimen generador) para inducir corrientes rotóricas y generar potencia eléctrica.

## Generadores síncronos

El generador síncrono utiliza un rotor alimentado con corriente continua (excitación independiente) o imanes permanentes para crear un campo magnético fijo respecto al rotor. Al girar solidario con el campo del estator, la frecuencia de la tensión generada mantiene una relación exacta con la velocidad mecánica.

**Tipos principales de generadores síncronos**

| Tipo | Característica del rotor | Aplicación típica |
|------|---------------------------|-------------------|
| Rotor de polos salientes | Polos magnéticos proyectados, gran número de polos | Centrales hidroeléctricas de baja velocidad |
| Rotor cilíndrico (liso) | Devanado distribuido en ranuras, 2 o 4 polos | Turbogeneradores de vapor o gas de alta velocidad |

La excitación puede ser mediante escobillas y anillos rozantes, sistemas brushless o imanes permanentes, siendo esta última opción común en generadores de velocidad variable usados en energías renovables.

## Generadores asíncronos (inducción)

El generador de inducción o asíncrono es una máquina de jaula de ardilla o rotor bobinado que, arrastrada por una máquina motriz por encima de la velocidad síncrona, convierte energía mecánica en energía eléctrica utilizando el mismo principio que el motor de inducción. La diferencia *n – nₛ* se denomina deslizamiento *s* y en régimen generador toma valores negativos (normalmente entre –0.5 % y –5 %). La potencia activa entregada a la red es proporcional a ese deslizamiento, alcanzándose la potencia nominal con valores de |*s*| del orden del 3 %.

Para excitar el campo magnético, el generador de inducción necesita una fuente externa de potencia reactiva. Cuando se conecta a la red eléctrica, esta suministra la corriente de magnetización; en aplicaciones aisladas, se recurre a un banco de condensadores que proporciona la reactiva necesaria (generador autoexcitado).

## Características técnicas comparadas

| Característica | Generador síncrono (rotor liso, 2 polos) | Generador asíncrono (4 polos, 60 Hz) |
|----------------|-------------------------------------------|--------------------------------------|
| Velocidad de sincronismo | 3600 rpm (60 Hz) / 3000 rpm (50 Hz) | 1800 rpm (60 Hz) / 1500 rpm (50 Hz) |
| Velocidad de operación nominal | 3600 rpm / 3000 rpm | ≈ 1860 rpm / 1550 rpm (|*s*| ≈ 3,3 %) |
| Excitación | CC independiente o imanes permanentes | Reactiva de red o banco de condensadores |
| Regulación de tensión | Control mediante corriente de campo | Depende de la red; sin red requiere regulación adicional |
| Capacidad de arranque autónomo | Sí (black start) | No; necesita fuente externa o condensadores precargados |
| Corriente de magnetización | ≤ 2 % de la nominal | 20 % – 35 % de la nominal |

## Comparación de pares característicos (régimen generador/motor)

Los pares que desarrolla una máquina asíncrona son idénticos en los cuadrantes motor y generador, por lo que los valores de la tabla aplican a ambos regímenes. Los datos corresponden a un motor de inducción NEMA B de 60 hp (45 kW) y 1725 rpm (~1800 rpm síncronas).

| Par | Porcentaje del par nominal | Valor típico |
|-----|----------------------------|--------------|
| Par nominal a plena carga | 100 % | 248 N·m / 182.7 lb·ft |
| Par de arranque (rotor bloqueado) | 150 % – 200 % | 372 – 496 N·m / 274 – 366 lb·ft |
| Par de pull-up (mínimo durante aceleración) | 100 % – 140 % | 248 – 347 N·m / 183 – 256 lb·ft |
| Par de ruptura (máximo) | 200 % – 300 % | 496 – 744 N·m / 366 – 549 lb·ft |

## Aplicaciones típicas

- **Generadores síncronos:** centrales termoeléctricas, nucleares, hidroeléctricas, grupos electrógenos de emergencia, sistemas de cogeneración, aplicaciones marinas y aeronáuticas donde se requiere control preciso de frecuencia y tensión.
- **Generadores asíncronos:** aerogeneradores de velocidad fija o variable, minicentrales hidroeléctricas, sistemas de frenado regenerativo en grúas y ascensores, recuperación de energía en expansión de gases de alta presión.

## Ventajas y desventajas

| | Generador síncrono | Generador asíncrono |
|---|---|---|
| Ventajas | Control independiente de potencia reactiva; capacidad de black start; alta eficiencia; regulación precisa de tensión y frecuencia | Construcción robusta y económica; tamaño compacto por kW; no requiere sincronización precisa; admite conexión directa a la red sin equipos electrónicos complejos |
| Desventajas | Necesita sistema de excitación y mantenimiento de escobillas (excepto brushless); sincronización obligatoria antes de acoplar a la red | Requiere fuente externa de reactiva; no puede arrancar en isla sin condensadores; menor rendimiento a cargas parciales; imposibilidad de control directo de la tensión generada |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la velocidad síncrona de un generador de 4 polos conectado a una red de 60 Hz?
   La velocidad síncrona exacta es de 1800 rpm. Para una frecuencia de 50 Hz, la velocidad correspondiente sería de 1500 rpm. Un generador asíncrono de la misma polaridad tendrá que girar ligeramente por encima de esas cifras, por ejemplo a 1860 rpm (60 Hz) para entregar su potencia nominal.

### ¿Qué deslizamiento presenta un generador de inducción a plena carga?
   El deslizamiento en régimen generador se sitúa entre el –3 % y el –5 % de la velocidad síncrona. Para una máquina de 1800 rpm sincrónicas, una velocidad de 1860 rpm equivale a un deslizamiento de –3,3 %.

### ¿Qué porcentaje de la corriente nominal consume un generador de inducción como corriente de magnetización?
   La corriente de magnetización representa entre el 20 % y el 35 % de la corriente a plena carga, lo que obliga a dimensionar adecuadamente la fuente de potencia reactiva cuando el generador trabaja de forma aislada.

### ¿Cuál es el par máximo que puede desarrollar un generador asíncrono antes de volverse inestable?
   El par de ruptura (break-down torque) se sitúa típicamente entre 2 y 3 veces el par nominal. Para un generador de 60 hp (45 kW) con par nominal de 248 N·m / 182.7 lb·ft, el par máximo estaría entre 496 N·m / 366 lb·ft y 744 N·m / 549 lb·ft.

### ¿Qué valor de capacidad requiere un generador de inducción autoexcitado para operar sin red?
   La capacidad necesaria varía con la potencia y la tensión del generador, pero como referencia un generador de 10 kW a 400 V puede necesitar un banco de condensadores del orden de 2.5 kvar a 5 kvar, dependiendo de la carga y del factor de potencia deseado.

### ¿Por encima de qué velocidad mínima empieza a entregar potencia un generador asíncrono de 6 polos a 50 Hz?
   La velocidad síncrona es 1000 rpm. La generación comienza cuando la velocidad supera los 1000 rpm, y la potencia nominal se alcanza con una velocidad aproximada de 1030 rpm (deslizamiento del –3 %).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
- **electrical4u.com**: https://www.electrical4u.com/induction-generator/
