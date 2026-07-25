---
title: "Dimensionamiento de interruptores termomagnéticos"
sidebar:
  label: "Dimensionamiento de interruptores termomagnéticos"
description: "Ficha tecnica: Dimensionamiento de interruptores termomagnéticos"
keywords: ["circuit breaker sizing calculation ampacity", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breakers"
subcategory: "breaker-sizing"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de interruptores termomagnéticos consiste en seleccionar la capacidad nominal y las características de disparo adecuadas para proteger conductores y equipos contra sobrecargas y cortocircuitos, basándose en parámetros como la corriente a plena carga (FLA), la ampacidad mínima del circuito (MCA) y la protección máxima contra sobrecorriente (MOCP). Un interruptor correctamente dimensionado interrumpe el flujo de corriente cuando esta excede límites seguros, previniendo daños por calentamiento excesivo y fallas catastróficas en la instalación eléctrica.

## Principio de funcionamiento del disparo térmico y magnético

El interruptor termomagnético integra dos mecanismos de detección independientes que actúan sobre un disparador común. La protección térmica opera mediante una lámina bimetálica que se calienta por efecto Joule al circular corriente; cuando la corriente supera de forma sostenida el valor nominal, la deformación térmica del bimetal libera el mecanismo de disparo. Esta respuesta presenta una característica de tiempo inverso: a mayor sobrecarga, menor tiempo de disparo. La protección magnética consiste en una bobina con núcleo móvil que genera un campo magnético proporcional a la corriente instantánea; ante corrientes de cortocircuito de varias veces la corriente nominal, el campo magnético atrae el núcleo con fuerza suficiente para accionar el disparo de forma instantánea, típicamente en menos de 10 ms / 0,01 s.

| Parámetro de disparo | Disparo térmico (sobrecarga) | Disparo magnético (cortocircuito) |
| --- | --- | --- |
| Rango típico de actuación | 1,05 a 1,45 × In | 3 a 15 × In |
| Tiempo de respuesta característico | Segundos a minutos | 0,005 a 0,01 s / 5 a 10 ms |
| Elemento sensor | Lámina bimetálica calentada por efecto Joule | Bobina con núcleo móvil accionado por campo magnético |

## Parámetros fundamentales: MCA, MOCP, FLA y LRA

### FLA (Full Load Amperage / Corriente a Plena Carga)

El valor FLA, o corriente a plena carga, es la corriente continua que el equipo consume en condiciones nominales de operación a tensión y carga nominales. Este parámetro constituye la base para calcular tanto la ampacidad mínima del circuito como la protección máxima contra sobrecorriente. El FLA se obtiene de la placa de datos del fabricante o, en ausencia de este, mediante tablas normalizadas según la potencia y tensión del motor.

La relación empírica entre FLA y MCA es:

> **FLA ≈ 0,80 × MCA**

### MCA (Minimum Circuit Ampacity / Ampacidad Mínima del Circuito)

La MCA define la capacidad de conducción de corriente mínima que deben poseer los conductores del circuito para operar con seguridad bajo condiciones normales de funcionamiento. La MCA incorpora un margen del 25% sobre la corriente del motor más grande para compensar el calentamiento adicional durante el arranque y la operación continua.

| Variable | Significado | Unidad | Fuente de obtención |
| --- | --- | --- | --- |
| MCA | Ampacidad mínima del circuito | A | Cálculo |
| FLA_motor | Corriente a plena carga del motor | A | Placa del fabricante |
| I_calentador | Corriente nominal del calentador | A | Placa del fabricante |

La fórmula de cálculo de MCA es:

> **MCA = 1,25 × (FLA_motor + I_calentador)**

### MOCP (Maximum Over-Current Protection / Protección Máxima contra Sobrecorriente)

La MOCP establece el valor máximo permitido para el dispositivo de protección contra sobrecorriente, ya sea fusible o interruptor termomagnético. La MOCP asegura que el dispositivo de protección pueda soportar las corrientes transitorias de arranque sin disparos intempestivos, al tiempo que garantiza la desconexión bajo condiciones de falla. El valor de MOCP es siempre mayor que el valor de MCA para permitir corrientes de arranque normales sin interrupción.

La relación entre FLA y MOCP es:

> **FLA ≈ 0,44 × MOCP**

| Variable | Significado | Unidad | Fuente de obtención |
| --- | --- | --- | --- |
| MOCP | Protección máxima contra sobrecorriente | A | Cálculo |
| FLA_mayor | FLA del motor de mayor potencia | A | Placa del fabricante |
| Otros_motores | FLA de motores adicionales | A | Placa del fabricante |
| Cargas_resistivas | Corriente de cargas resistivas | A | Placa del fabricante |

La fórmula de cálculo de MOCP para equipos con múltiples cargas es:

> **MOCP = (2,25 × FLA del motor más grande) + (Suma de FLA de otros motores) + (Cargas resistivas)**

### LRA (Locked Rotor Amperage / Corriente de Rotor Bloqueado)

La LRA representa la corriente máxima que demanda un motor cuando su rotor está mecánicamente bloqueado y se aplica tensión nominal. Esta corriente de arranque puede alcanzar valores significativamente elevados durante el primer instante de energización. El valor de LRA es fundamental para verificar que la caída de tensión durante el arranque no supere límites críticos, que típicamente se sitúan entre el 15% y 20% de la tensión nominal para evitar que el motor no arranque y comience a vibrar.

La relación típica entre LRA y FLA es:

> **LRA ≈ 8 × FLA**

## Procedimiento de dimensionamiento paso a paso

El dimensionamiento correcto de un interruptor termomagnético sigue una secuencia lógica que garantiza tanto la protección efectiva como la operación ininterrumpida del equipo durante condiciones normales de arranque y funcionamiento.

1. Determinar la FLA del motor principal a partir de la placa de datos del fabricante, verificando que corresponda a la tensión de alimentación y potencia nominal del equipo.

2. Identificar todas las cargas adicionales (motores secundarios, calentadores resistivos, transformadores de control) y registrar sus corrientes nominales individuales.

3. Calcular la MCA multiplicando por 1,25 la suma de la FLA del motor más grande y las corrientes de cargas resistivas, si las hubiera.

4. Calcular la MOCP aplicando la fórmula que asigna un factor de 2,25 a la FLA del motor de mayor potencia y suma las corrientes de las demás cargas.

5. Seleccionar el interruptor termomagnético cuyo valor nominal normalizado sea el inmediato superior al valor de MCA calculado, sin exceder el valor de MOCP.

6. Verificar que la capacidad de interrupción del interruptor seleccionado supere la corriente de cortocircuito disponible en el punto de instalación.

7. Comprobar que los conductores dimensionados según la MCA tienen una ampacidad igual o superior a la exigida, considerando factores de corrección por temperatura ambiente y agrupamiento.

8. Validar que la caída de tensión durante el arranque, considerando la LRA, no exceda el 15% al 20% de la tensión nominal de alimentación.

9. Confirmar que la curva de disparo del interruptor (tipo B, C o D) sea compatible con las corrientes transitorias de arranque de la carga conectada.

## Relación entre FLA, MCA y MOCP

| Parámetro | Definición | Relación de cálculo |
| --- | --- | --- |
| FLA | Corriente a plena carga del equipo en operación nominal | Valor base obtenido de placa del fabricante |
| MCA | Ampacidad mínima requerida del conductor | MCA = 1,25 × (FLA_motor + I_calentador) |
| MOCP | Tamaño máximo del dispositivo de protección | MOCP = (2,25 × FLA_mayor) + Otros_motores + Cargas_resistivas |
| Relación FLA-MCA | Factor de proporcionalidad directa | FLA ≈ 0,80 × MCA |
| Relación FLA-MOCP | Factor de proporcionalidad directa | FLA ≈ 0,44 × MOCP |
| Relación MCA-MOCP | Jerarquía de magnitudes | MCA < MOCP en todo caso |

## Factores de ajuste y márgenes de seguridad

Los márgenes de seguridad incorporados en las fórmulas de dimensionamiento obedecen a comportamientos eléctricos y térmicos predecibles de los equipos. El factor 1,25 aplicado en el cálculo de MCA responde a la necesidad de que los conductores soporten el 125% de la corriente nominal de funcionamiento continuo, compensando el calor adicional generado durante períodos de arranque y pequeñas fluctuaciones de carga. El factor 2,25 en la fórmula de MOCP para el motor de mayor potencia permite que el dispositivo de protección no se dispare durante la corriente de arranque, que típicamente alcanza de 6 a 8 veces la FLA durante un breve lapso, pero garantiza la desconexión ante corrientes de falla sostenidas. El Código Eléctrico Nacional (NEC) establece tamaños normalizados de interruptores desde 15 A en adelante, con incrementos estandarizados.

| Corriente nominal estandarizada | Aplicación típica |
| --- | --- |
| 15 A | Circuitos de iluminación y tomacorrientes de uso general |
| 20 A | Circuitos de cocina, baño y electrodomésticos pequeños |
| 30 A | Secadoras eléctricas, aires acondicionados de ventana |
| 40 A | Cocinas eléctricas, hornos de pared |
| 50 A | Cocinas grandes, calentadores de agua |
| 60 A | Subalimentadores, equipos de climatización |

## Cálculo de ejemplo práctico

Un equipo de climatización comercial incorpora un compresor con FLA de 10 A, un motor de ventilador con FLA de 2 A y un calentador eléctrico de 8 A. El primer paso es identificar la FLA del motor más grande, que corresponde al compresor con 10 A. Se calcula la MCA multiplicando por 1,25 la suma de la FLA del compresor y la corriente del calentador: 1,25 × (10 A + 8 A) = 22,5 A. Este valor establece que los conductores deben tener una ampacidad mínima de 22,5 A. Para la MOCP se aplica el factor 2,25 al compresor y se suman las cargas restantes: (2,25 × 10 A) + 2 A + 8 A = 32,5 A. El interruptor termomagnético a seleccionar debe tener una corriente nominal mayor que 22,5 A (MCA) pero no superior a 32,5 A (MOCP), resultando adecuado un interruptor normalizado de 30 A.

| Parámetro | Valor calculado |
| --- | --- |
| FLA del compresor (motor más grande) | 10 A |
| FLA del ventilador | 2 A |
| Corriente del calentador | 8 A |
| MCA calculada | 1,25 × (10 A + 8 A) = 22,5 A |
| MOCP calculada | (2,25 × 10 A) + 2 A + 8 A = 32,5 A |
| Interruptor seleccionado | 30 A (22,5 A < 30 A < 32,5 A) |

## Consideraciones especiales para cargas inductivas

Las cargas inductivas, principalmente motores y compresores, presentan corrientes de arranque que pueden alcanzar de 6 a 8 veces el valor de FLA durante los primeros 100 ms / 0,1 s a 500 ms / 0,5 s de la energización. La LRA del compresor del ejemplo práctico se estima en 8 × 10 A = 80 A. Esta corriente de arranque, aunque breve, debe ser soportada por el interruptor termomagnético sin provocar disparo. Los interruptores de curva tipo C o D están diseñados específicamente para este propósito: la curva C soporta picos de 5 a 10 veces la corriente nominal, mientras que la curva D admite de 10 a 14 veces la corriente nominal, resultando adecuada para motores con arranque pesado. La coordinación entre la protección térmica (sobrecarga) y la magnética (cortocircuito) evita tanto el disparo intempestivo durante el arranque como la falta de protección ante una falla real.

| Curva de disparo | Rango de disparo magnético | Aplicación característica |
| --- | --- | --- |
| B | 3 a 5 × In | Cargas resistivas, iluminación, cableado general |
| C | 5 a 10 × In | Motores pequeños, compresores, tomacorrientes |
| D | 10 a 14 × In | Motores de alto par de arranque, transformadores |

## Preguntas frecuentes (FAQ)

### ¿Con qué factor se relaciona directamente la FLA respecto a la MCA?
La FLA equivale aproximadamente al 80% del valor de MCA, expresado como FLA ≈ 0,80 × MCA.

### ¿Cuántas veces la FLA puede alcanzar la corriente de rotor bloqueado?
La LRA alcanza típicamente 8 veces la FLA en condiciones de rotor bloqueado a tensión nominal.

### ¿Qué valor de corriente establece el MOCP cuando existe un motor principal y otras cargas?
El MOCP se define como (2,25 × FLA del motor más grande) más la suma de las FLA de los demás motores más todas las cargas resistivas.

### ¿Cuál es el margen porcentual que aplica la MCA sobre la corriente del motor y calentador?
La MCA incorpora un margen del 25% sobre la suma de la FLA del motor y la corriente del calentador, resultando en MCA = 1,25 × (FLA_motor + I_calentador).

### ¿A partir de qué múltiplo de la corriente nominal dispara instantáneamente un interruptor de curva C?
Un interruptor de curva C dispara instantáneamente por acción magnética cuando la corriente supera entre 5 y 10 veces la corriente nominal (In).

### ¿Qué tamaño de interruptor normalizado corresponde si el MOCP calculado es 27,2 A?
Corresponde un interruptor de 25 A si este valor es superior a la MCA y no excede el MOCP calculado de 27,2 A.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
