---
title: "Guía de selección de motores eléctricos"
sidebar:
  label: "Guía de selección de motores eléctricos"
description: "Ficha tecnica: Guía de selección de motores eléctricos"
keywords: ["electric motor selection guide application", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-selection-guide"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los motores eléctricos convierten la energía eléctrica en energía mecánica mediante la interacción entre el campo magnético y la corriente en los devanados. Están presentes en aplicaciones que abarcan desde electrodomésticos hasta sistemas de propulsión marina de más de 100 MW. La selección correcta requiere evaluar el tipo de motor, la clase de diseño, el entorno de operación y los parámetros de carga.

## Tipos de motores
| Tipo de motor | Construcción básica | Alimentación | Característica distintiva |
| --- | --- | --- | --- |
| Motor de inducción (asíncrono) | Rotor de jaula de ardilla o bobinado; estator con devanados trifásicos o monofásicos | CA | Velocidad ligeramente inferior a la síncrona (deslizamiento) |
| Motor síncrono | Rotor con imanes permanentes o electroimanes; estator similar al de inducción | CA | Velocidad constante igual a la velocidad síncrona |
| Motor de corriente continua (CC) con escobillas | Rotor bobinado con conmutador y escobillas; estator con imanes o devanados de campo | CC | Control de velocidad simple y alto par de arranque |
| Motor CC sin escobillas (BLDC) | Imanes permanentes en el rotor; estator con devanados conmutados electrónicamente | CC (con controlador) | Mayor eficiencia y menor mantenimiento que los motores con escobillas |
| Motor paso a paso | Rotor de imán permanente o reluctancia; múltiples fases en el estator | CC (pulsos) | Movimiento en pasos discretos; posicionamiento preciso |
| Motor universal (serie) | Similar al motor CC serie pero diseñado para CA/CC | CA o CC | Alta velocidad y potencia en herramientas portátiles |

## Clases de diseño NEMA
La norma NEMA define cuatro diseños de motores de inducción con distintas curvas par‑velocidad‑deslizamiento, adecuados para aplicaciones específicas. Las principales características se resumen en la siguiente tabla.

| Diseño | Deslizamiento máximo | Corriente de arranque | Par de rotor bloqueado | Par máximo | Aplicaciones típicas |
| --- | --- | --- | --- | --- | --- |
| **NEMA A** | 5 % | Alta a media | Normal | Normal | Ventiladores, bombas |
| **NEMA B** | 5 % | Baja | Alto | Normal | HVAC, sopladores, bombas |
| **NEMA C** | 5 % | Baja | Alto | Normal | Bombas de desplazamiento positivo, transportadores |
| **NEMA D** | 5 – 13 % | Baja | Muy alto | — (no normalizado) | Grúas, montacargas, equipos de alta inercia |

El deslizamiento, _s_, se define como la diferencia porcentual entre la velocidad síncrona (_n<sub>s</sub>_) y la velocidad real del rotor (_n<sub>r</sub>_):  
> **s (%) = [(n<sub>s</sub> – n<sub>r</sub>) / n<sub>s</sub>] × 100**

En los diseños A, B y C el deslizamiento a plena carga está limitado al 5 %, mientras que el diseño D admite valores de hasta 13 % para manejar arranques con elevada inercia.

## Criterios de selección
| Parámetro | Descripción y relevancia |
| --- | --- |
| Potencia nominal (kW / hp) | Capacidad de realizar trabajo. Debe superar la potencia demandada por la carga. |
| Par (N·m / lb·ft) | Par de arranque, par máximo y par nominal. Determinan la capacidad de aceleración y de sobrecarga. |
| Velocidad (r/min) | La velocidad síncrona la fija la frecuencia de red y el número de polos. El tipo de carga dicta si se necesita velocidad constante o variable. |
| Factor de servicio | Margen de sobrecarga admisible (típicamente 1,15 para motores normalizados de uso general). |
| Clase de aislamiento | Resistencia térmica del devanado (ej. clase F: 155 °C / 311 °F). Influye en la vida útil y en el entorno admisible. |
| Grado de protección (IP) | Protección contra polvo y agua. Motores abiertos (IP20) para interiores limpios; cerrados (IP55/IP65) para ambientes agresivos o lavado. |
| Eficiencia (IE1 a IE4) | Niveles de rendimiento definidos por IEC. Un motor IE4 puede ser hasta un 15 % más eficiente que uno IE1. |
| Altitud y temperatura ambiente | Por encima de 1000 m / 3281 ft o 40 °C / 104 °F se requiere desclasificar la potencia. |

## Aplicaciones típicas
| Aplicación | Tipo de motor más usual | Clase NEMA recomendada | Observaciones |
| --- | --- | --- | --- |
| Bombas centrífugas | Inducción trifásico | B | Par de arranque moderado, régimen continuo |
| Ventiladores y sopladores | Inducción monofásico/trifásico | A o B | Aplicaciones HVAC con alta inercia de arranque |
| Compresores de pistón | Inducción con alto par de arranque | C | Requiere vencer la inercia inicial |
| Transportadores de banda | Inducción (a veces con reductor) | C | Arranque bajo carga y funcionamiento constante |
| Grúas y aparejos | Inducción con rotor bobinado o diseño D | D | Par de arranque muy elevado (hasta 300 % del nominal) |
| Máquinas herramienta | CC sin escobillas o síncrono | — | Control preciso de velocidad y posición |
| Herramientas eléctricas portátiles | Universal (serie) | — | Alta velocidad, alimentación monofásica, compacto |
| Propulsión marina | Síncrono de imanes permanentes | — | Potencias superiores a 100 MW |

## Fórmulas de utilidad
> **Potencia mecánica (kW): P = (T × n) / 9549**  
> (donde T en N·m, n en r/min)

> **Potencia en hp: P<sub>hp</sub> = (T<sub>lb·ft</sub> × n) / 5252**

> **Eficiencia: η (%) = (P<sub>mecánica</sub> / P<sub>eléctrica</sub>) × 100**

| Variable | Símbolo | Unidad métrica | Unidad imperial |
| --- | --- | --- | --- |
| Potencia | P | kW | hp |
| Par motor | T | N·m | lb·ft |
| Velocidad de giro | n | r/min | rpm |
| Potencia eléctrica de entrada | P<sub>eléctrica</sub> | kW | — |

## Normas y estándares
- **NEMA MG 1**: Motores y generadores (clases de diseño A‑D, dimensiones de bastidor, eficiencia).
- **IEC 60034**: Máquinas eléctricas rotativas (clasificación de eficiencia IE, métodos de ensayo, grados de protección).
- **IEEE 112**: Procedimiento de ensayo normalizado para motores de inducción polifásicos.
- **UL 1004**: Seguridad de motores eléctricos en aplicaciones industriales y comerciales.
- **WEG** proporciona herramientas de selección y hojas de datos conforme a estas normas, incluyendo el catálogo de motores de inducción y síncronos.

## Preguntas frecuentes (FAQ)
### ¿Cuánto deslizamiento admite un motor de diseño NEMA B?
   Un motor NEMA B presenta un deslizamiento máximo a plena carga del 5 %, lo que garantiza un funcionamiento estable en bombas y ventiladores.

### ¿Qué par de rotor bloqueado ofrece un motor NEMA D?
   Los motores NEMA D desarrollan un par de rotor bloqueado muy alto, habitualmente entre el 250 % y el 300 % del par nominal, ideal para arrancar cargas con gran inercia como grúas.

### ¿Hasta qué altitud puede trabajar un motor sin desclasificación?
   En condiciones estándar, los motores pueden operar hasta 1000 m / 3281 ft sin reducir su potencia; por encima de esa altitud se requiere una desclasificación aproximada del 3 % por cada 500 m adicionales.

### ¿Cuál es la diferencia de eficiencia entre un motor IE1 y uno IE4?
   Un motor de eficiencia superpremium IE4 consume hasta un 15 % menos de energía que uno estándar IE1 para la misma potencia mecánica.

### ¿A qué temperatura máxima de servicio se limita un motor con aislamiento clase F?
   La clase de aislamiento F permite una temperatura máxima en el devanado de 155 °C / 311 °F, con un margen de seguridad que prolonga la vida útil si se opera por debajo de ese límite.

### ¿Qué corriente de arranque se espera en un motor NEMA C?
   Los motores NEMA C tienen una corriente de arranque baja en comparación con el diseño A, limitando la caída de tensión en la red, a la vez que entregan un par de arranque elevado.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-a-b-c-d-design-d_650.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
