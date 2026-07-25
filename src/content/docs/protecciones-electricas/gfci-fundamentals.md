---
title: "Interruptor GFCI fundamentos y aplicación"
sidebar:
  label: "Interruptor GFCI fundamentos y aplicación"
description: "Ficha tecnica: Interruptor GFCI fundamentos y aplicación"
keywords: ["GFCI ground fault circuit interrupter basics", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "gfci-afci"
subcategory: "gfci-basics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un interruptor GFCI (Ground Fault Circuit Interrupter), también denominado interruptor diferencial o dispositivo de corriente residual (RCD), es un dispositivo de seguridad eléctrica diseñado para interrumpir un circuito cuando detecta una fuga de corriente hacia tierra superior a un umbral preestablecido, típicamente entre 4 mA / 0.004 A y 30 mA / 0.030 A. El tiempo de disparo en presencia de una falla a tierra no supera los 25 ms / 0.025 s en dispositivos de protección personal, de acuerdo con las normativas internacionales.

El GFCI es un mecanismo de protección que desconecta automáticamente el suministro eléctrico cuando la corriente que circula por el conductor de fase no es igual a la que retorna por el neutro. La diferencia, denominada corriente residual o de fuga, indica un escape de corriente hacia tierra —posiblemente a través del cuerpo humano—, lo que representa un riesgo de electrocución. Su propósito es evitar lesiones graves o fatales por choque eléctrico, así como prevenir incendios originados por fallas de aislamiento.

## Principio de funcionamiento

El GFCI opera midiendo continuamente la suma vectorial de las corrientes en todos los conductores activos que atraviesan un transformador diferencial toroidal. En condiciones normales, la corriente que entra por la fase es exactamente igual a la que sale por el neutro, y el flujo magnético neto en el núcleo es cero. Ante una fuga a tierra, parte de la corriente retorna por un camino no previsto (como una persona o una carcasa metálica), generando un desequilibrio detectable por el bobinado secundario del transformador.

La señal inducida se amplifica y, si supera el umbral de disparo, activa un electroimán o relé que abre los contactos principales en milisegundos, aislado el circuito fallado. El GFCI no protege contra contactos directos entre fase y neutro, ya que en ese caso la corriente diferencial sigue siendo nula.

> **I<sub>Δ</sub> = I<sub>L</sub> − I<sub>N</sub>**

| Variable | Significado | Unidad |
| --- | --- | --- |
| I<sub>Δ</sub> | Corriente diferencial residual | mA o A |
| I<sub>L</sub> | Corriente instantánea en el conductor de fase | A |
| I<sub>N</sub> | Corriente instantánea en el conductor neutro | A |

## Clasificación y tipos

Los interruptores GFCI se clasifican según su sensibilidad, construcción y función integrada. La tabla siguiente resume los tipos principales y sus características.

| Tipo | Sensibilidad nominal (I<sub>Δn</sub>) | Aplicación principal | Tiempo de disparo máximo |
| --- | --- | --- | --- |
| Protección personal (Clase A) | 4–6 mA / 0.004–0.006 A | Tomas en baños, cocinas, exterior | ≤25 ms / 0.025 s a 5× I<sub>Δn</sub> |
| Protección contra incendios | 100–300 mA / 0.1–0.3 A | Cuadros generales, líneas de distribución | ≤300 ms / 0.3 s |
| Protección de equipos | 30 mA / 0.03 A | Talleres, bombas, herramientas eléctricas | ≤40 ms / 0.04 s a 5× I<sub>Δn</sub> |
| RCBO (combinado) | 30 mA + curva termomagnética | Protección diferencial y sobrecorriente | ≤40 ms / 0.04 s |

## Sensibilidad y tiempos de disparo

La sensibilidad de un GFCI se expresa como la corriente diferencial nominal de disparo (I<sub>Δn</sub>). Para protección de personas se emplean dispositivos de alta sensibilidad, con I<sub>Δn</sub> ≤ 30 mA / 0.030 A. La norma IEC 60479-1 establece que corrientes alternas superiores a 20 mA / 0.020 A a través del cuerpo humano pueden provocar fibrilación ventricular si persisten más de unas décimas de segundo. Por ello, los GFCI de uso residencial deben disparar antes de que la corriente alcance niveles peligrosos y en un tiempo inferior a 40 ms / 0.04 s.

| I<sub>Δn</sub> | Tiempo máximo de disparo (1× I<sub>Δn</sub>) | Tiempo máximo (5× I<sub>Δn</sub>) | Utilización típica |
| --- | --- | --- | --- |
| 6 mA / 0.006 A | 25 ms / 0.025 s | 15 ms / 0.015 s | Tomas GFCI en Norteamérica (Clase A) |
| 10 mA / 0.01 A | 40 ms / 0.04 s | 20 ms / 0.02 s | Equipos médicos, salas de hospital |
| 30 mA / 0.03 A | 40 ms / 0.04 s | 30 ms / 0.03 s | Protección personal general según IEC |
| 100 mA / 0.1 A | 100 ms / 0.1 s | 50 ms / 0.05 s | Protección contra incendios en cuadros secundarios |
| 300 mA / 0.3 A | 300 ms / 0.3 s | 150 ms / 0.15 s | Protección de grandes instalaciones contra fallas de aislamiento |

## Construcción interna y componentes

Los elementos constructivos esenciales de un GFCI típico incluyen:

- **Transformador diferencial toroidal**: núcleo magnético por donde pasan los conductores de fase y neutro, y sobre el que se arrolla un bobinado secundario de detección.
- **Electroimán de disparo**: convierte la señal eléctrica del secundario en fuerza mecánica para liberar el mecanismo de contactos.
- **Contactos principales**: capaces de interrumpir la corriente nominal y soportar la corriente de cortocircuito hasta que actúe una protección de respaldo.
- **Circuito electrónico de amplificación**: procesa la pequeña señal del secundario y la compara con el umbral de disparo; suele incluir filtrado y rectificación para inmunidad al ruido.
- **Pulsador de prueba**: inyecta una corriente de fuga calibrada (usualmente 8 mA / 0.008 A a 10 mA / 0.01 A) para verificar el funcionamiento sin necesidad de equipos externos.

## Esquema de conexión típica

En una instalación monofásica con GFCI, los conductores de fase y neutro pasan a través del transformador diferencial antes de conectarse a la carga. El conductor de tierra no atraviesa el núcleo. El borne de tierra del GFCI se conecta directamente a la tierra de la instalación.

La figura siguiente describe las conexiones estándar para un GFCI de dos polos en un sistema de 120 V / 60 Hz, con capacidad de protección en tomas aguas abajo.

| Terminal | Descripción | Color habitual |
| --- | --- | --- |
| LINE (L) | Alimentación de fase | Negro o marrón |
| LINE (N) | Alimentación de neutro | Blanco o azul |
| LOAD (L) | Salida protegida de fase | Rojo o negro |
| LOAD (N) | Salida protegida de neutro | Blanco o gris |
| GND / Tierra | Conexión a tierra de protección | Verde o verde/amarillo |

## Aplicaciones típicas

Los GFCI son obligatorios en numerosas ubicaciones según los códigos eléctricos nacionales. Las áreas de aplicación más comunes incluyen:

- **Baños y cocinas**: tomas a menos de 1.5 m / 5 ft de fuentes de agua.
- **Exteriores**: jardines, terrazas, balcones con acceso a humedad o lluvia.
- **Sótanos y garajes**: ambientes con posible presencia de humedad en el suelo.
- **Equipos portátiles**: herramientas eléctricas, bombas sumergibles, extensiones de obra.
- **Piscinas y fuentes**: iluminación subacuática, bombas de recirculación.

## Mantenimiento y pruebas

Se recomienda verificar el funcionamiento del GFCI mediante el botón de prueba integrado al menos una vez al mes. La prueba interna desvía una corriente calibrada (típicamente 8 mA / 0.008 A en dispositivos de Clase A) a través del transformador diferencial, simulando una fuga que debe provocar el disparo inmediato. La falta de disparo indica falla del dispositivo y obliga a su reemplazo. También existen comprobadores portátiles de tomas GFCI que miden el tiempo de disparo real, el cual debe permanecer por debajo de 25 ms / 0.025 s según UL 943.

## Normativas de referencia

| Norma | Título | Ámbito |
| --- | --- | --- |
| UL 943 | Ground-Fault Circuit-Interrupters | Norteamérica |
| IEC 61008-1 | Interruptores diferenciales sin protección de sobrecorriente | Internacional |
| IEC 61009-1 | Interruptores diferenciales con protección de sobrecorriente (RCBO) | Internacional |
| NEC Art. 210.8 | Protección GFCI para personal | EE.UU. |
| NOM-001-SEDE | Instalaciones eléctricas (utilización) | México |

## Frequently Asked Questions (FAQ)

### ¿Cuál es la corriente de disparo de un GFCI residencial típico?
Un GFCI residencial en Norteamérica (Clase A) dispara con una corriente diferencial nominal de 6 mA / 0.006 A, un valor considerado seguro porque está por debajo del umbral de fibrilación ventricular (≈20 mA).

### ¿En cuánto tiempo debe disparar un GFCI ante una fuga peligrosa?
El tiempo máximo de disparo para un GFCI Clase A es de aproximadamente 25 ms / 0.025 s cuando la corriente de fuga alcanza 5 veces la nominal (30 mA / 0.030 A), según UL 943.

### ¿Qué diferencia hay entre un GFCI de 30 mA y uno de 100 mA?
El de 30 mA / 0.030 A está destinado a la protección de personas, mientras que el de 100 mA / 0.1 A se utiliza para protección contra incendios, ya que no garantiza la seguridad personal pero sí limita fugas peligrosas en instalaciones extensas.

### ¿Cada cuánto se debe probar un interruptor GFCI?
Los fabricantes y el código NEC recomiendan probar el GFCI al menos una vez al mes mediante su botón de prueba, que inyecta una fuga calibrada típicamente de 8 mA / 0.008 A.

### ¿Puede un mismo GFCI proteger múltiples tomas?
Sí, un único GFCI puede proteger de 4 a 6 tomas aguas abajo si se conectan desde sus terminales de carga, siempre que la corriente total no exceda la capacidad nominal del dispositivo, generalmente 15 A o 20 A.

### ¿Qué temperatura máxima de operación soporta un GFCI estándar?
Los GFCI de uso general están diseñados para operar en un rango de temperatura ambiente de -5 °C a 40 °C / 23 °F a 104 °F, aunque existen modelos industriales que alcanzan hasta 60 °C / 140 °F.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/standard-gauges-d_1345.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-circuit-breaker-operation-and-types-of-circuit-breaker/
