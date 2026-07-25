---
title: "Tipos de interruptores de instalación"
sidebar:
  label: "Tipos de interruptores de instalación"
description: "Ficha tecnica: Tipos de interruptores de instalación"
keywords: ["electrical switch types single pole 3-way", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "receptacles-switches"
subcategory: "switch-types-electrical"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los interruptores de instalación emplean más de 5 configuraciones básicas, desde unipolares hasta sistemas de conmutación de 4 vías, todos ellos dimensionados típicamente para 15 A y 20 A en circuitos de 120 V. Estos dispositivos permiten controlar cargas eléctricas —principalmente iluminación— desde uno o varios puntos, y se rigen por normas como el Código Eléctrico Nacional (NEC) para garantizar una operación segura. La elección del tipo adecuado depende del número de puntos de control, de si se requiere únicamente encendido/apagado o regulación, y de las condiciones ambientales donde se instalarán. La incorporación de interruptores inteligentes y reguladores electrónicos añade requerimientos de neutro y espacio en las cajas, aspectos que el NEC 2020 ha reforzado.

## Tipos de interruptores
En instalaciones residenciales y comerciales ligeras predominan 6 tipos funcionales de interruptores listados en la tabla siguiente. Cada uno se describe mediante su nomenclatura internacional, número de polos y tiros, y parámetros eléctricos característicos.

| Tipo de interruptor | Abreviatura (NEMA/IEC) | Polos / Tiros | Uso típico | Corriente nominal | Tensión nominal | Calibre de conductor de cobre recomendado | Temperatura nominal del aislamiento |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Simple (unipolar) | SPST (1P1T) | 1 polo, 1 tiro | Control de una luz desde un solo punto | 15 A / 20 A | 120 V | 14 AWG (2,08 mm²) para 15 A; 12 AWG (3,31 mm²) para 20 A | 75 °C / 167 °F |
| Conmutador de escalera (3 vías) | SPDT (1P2T) | 1 polo, 2 tiros | Control desde dos puntos (ej. pasillos, escaleras) | 15 A / 20 A | 120 V | 14 AWG (2,08 mm²) / 12 AWG (3,31 mm²) | 75 °C / 167 °F |
| Interruptor de cruce (4 vías) | DPDT configurado como intermedio | 2 polos, 2 tiros | Control desde tres o más puntos, en combinación con dos 3 vías | 15 A / 20 A | 120 V | 14 AWG (2,08 mm²) / 12 AWG (3,31 mm²) | 75 °C / 167 °F |
| Bipolar | DPST (2P1T) | 2 polos, 1 tiro | Desconexión simultánea de dos fases (cargas 240 V, como calentadores) | 20 A / 30 A | 240 V | 12 AWG (3,31 mm²) / 10 AWG (5,26 mm²) | 75 °C / 167 °F |
| Regulador (dimmer) | — | 1 polo, 1 tiro o compatible con 3 vías | Variación de intensidad luminosa | 15 A / 20 A (o menos según tipo de carga) | 120 V | 14 AWG (2,08 mm²) / 12 AWG (3,31 mm²) | 75 °C / 167 °F |
| Interruptor inteligente | — | Igual que SPST o 3 vías | Control remoto, programación, integración domótica | 15 A normalmente | 120 V | 14 AWG (2,08 mm²) | 75 °C / 167 °F (según dispositivo) |

La mayoría de los interruptores de uso general están listados para cargas de tungsteno, fluorescentes o LED, y soportan al menos 15 A. La temperatura de operación de los terminales suele ser de 75 °C / 167 °F, lo que condiciona el calibre del conductor.

## Funcionamiento y conexionado
El sistema de conmutación de escalera utiliza 2 interruptores de 3 vías y 2 conductores viajeros, permitiendo control desde 2 ubicaciones distintas. En la configuración estándar (sistema del viajero), la línea viva (fase) se conecta al común de uno de los conmutadores; los otros dos bornes de cada interruptor se unen a través de los llamados viajeros, y el común del segundo conmutador alimenta la lámpara. Al accionar cualquiera de los dos interruptores se invierte el camino de la corriente, encendiendo o apagando la carga. La siguiente tabla muestra las cuatro combinaciones posibles, dos con lámpara encendida y dos apagada.

| Posición conmutador 1 | Posición conmutador 2 | Estado de la lámpara |
| --- | --- | --- |
| Arriba | Arriba | Apagada |
| Arriba | Abajo | Encendida |
| Abajo | Arriba | Encendida |
| Abajo | Abajo | Apagada |

Para controlar la misma carga desde 3 o más puntos, se añaden interruptores de cruce (4 vías) entre los dos conmutadores de 3 vías. Cada interruptor de cruce posee dos pares de terminales viajeros y se encarga de conmutar la línea recta o cruzada. En instalaciones con mando desde tres ubicaciones se emplean dos conmutadores de 3 vías y un interruptor de cruce, y se puede ampliar a 4 o más puntos añadiendo más interruptores de cruce intercalados. No existe un límite práctico de cantidad, aunque la longitud del circuito y la caída de tensión deben evaluarse; en obra residencial difícilmente se superan 3 interruptores intermedios (4 puntos de control).

## Requisitos del NEC para interruptores
El NEC 2020 establece una altura máxima de operación de 2,0 m / 6 ft 7 in, sin altura mínima, y exige conductor neutro en la mayoría de las cajas de interruptores de iluminación. A continuación se resumen los principales puntos del Artículo 404 aplicables a interruptores de instalación (no industriales):

- **Altura de accionamiento:** el centro de la empuñadura en su posición más alta no debe superar 2,0 m / 6 ft 7 in sobre el suelo o plataforma de trabajo [NEC 404.8(A)]. No se especifica altura mínima. Se admite mayor altura si el interruptor está adyacente al equipo que alimenta y se puede acceder por medios portátiles.
- **Neutro en la caja:** desde la edición 2020, todos los interruptores que controlen cargas de iluminación línea‑neutro deben disponer de un conductor neutro en la caja, excepto cuando la instalación cumple alguna de las excepciones [404.2(C)]. Para circuitos conmutados de 3 y 4 vías, basta con que el neutro esté presente en una de las cajas si el área completa del espacio es visible desde las posiciones de los interruptores.
- **Reemplazo de interruptores con electrónica:** si se instala un interruptor que requiera conexión a neutro (inteligente, temporizador, etc.) en una instalación existente sin neutro, se permite omitirlo siempre que no sea posible añadirlo sin dañar acabados. En ese caso, el número de dispositivos electrónicos sin neutro no puede exceder de 5 por circuito derivado ni de 25 por alimentador [404.22].
- **Llenado de caja:** las cajas que contengan interruptores pueden alojar empalmes que ocupen como máximo el 75 % de la sección transversal en cualquier punto. Si los conductores atraviesan la caja sin empalmes, la ocupación no debe superar el 40 % [404.3(B), referido a 312.8].
- **Puesta a tierra:** los yugos metálicos de los interruptores y las placas frontales metálicas deben conectarse al conductor de puesta a tierra del circuito. En cajas no metálicas, el yugo se conecta directamente al conductor de tierra; en cajas metálicas, la fijación con tornillos metálicos asegura la continuidad [404.9(B)].
- **Indicación de encendido/apagado:** los interruptores de uso general deben indicar claramente la posición de encendido y apagado, normalmente mediante el balancín. Los conmutadores de 3 y 4 vías están exentos, ya que la posición de encendido depende de la configuración del otro interruptor [404.7].
- **Instalación en lugares húmedos:** cualquier interruptor montado en superficie o empotrado en ambiente húmedo o mojado debe alojarse en una envolvente estanca o con cubierta de protección adecuada [404.4]. No está permitido instalar interruptores dentro de espacios de bañera o ducha, salvo que formen parte de un conjunto listado.

## Aplicaciones típicas
Más del 90 % de los interruptores de instalación controlan circuitos de iluminación en estancias habitables, escaleras y pasillos. Los conmutadores de 3 vías y 4 vías facilitan el encendido y apagado desde ambos extremos de un corredor largo o desde las entradas de una sala amplia, cumpliendo con la exigencia de seguridad de que un punto de control esté siempre al alcance. Los interruptores simples se usan en habitaciones individuales sin necesidad de puntos múltiples. Los reguladores se instalan en comedores, salones y dormitorios para crear ambientes, mientras que los interruptores inteligentes añaden automatización, control por voz y programación horaria sin necesidad de re‑cableado adicional cuando ya existe neutro en la caja.

## Tabla resumen de características
La siguiente tabla resume los 6 tipos principales de interruptores con sus parámetros eléctricos y constructivos de uso más frecuente.

| Tipo | Polos/Tiros | Corriente típica | Tensión | Calibre de cable (Cu) | Temperatura de terminales | Neutro requerido en caja | Aplicación |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SPST | 1P1T | 15 A / 20 A | 120 V | 14 AWG (2,08 mm²) / 12 AWG (3,31 mm²) | 75 °C / 167 °F | Sí (si controla iluminación en zona habitable) | Control simple de luz/tomacorriente |
| 3 vías (SPDT) | 1P2T | 15 A / 20 A | 120 V | 14 AWG (2,08 mm²) / 12 AWG (3,31 mm²) | 75 °C / 167 °F | Al menos en una caja | Escaleras, pasillos, salas con dos accesos |
| 4 vías (intermedio) | DPDT | 15 A / 20 A | 120 V | 14 AWG (2,08 mm²) / 12 AWG (3,31 mm²) | 75 °C / 167 °F | Neutro se lleva hasta el circuito | Salones con tres o más accesos |
| Bipolar (DPST) | 2P1T | 20 A / 30 A | 240 V | 12 AWG (3,31 mm²) / 10 AWG (5,26 mm²) | 75 °C / 167 °F | Según carga (calentador, equipo fijo) | Calentador de agua, motor monofásico |
| Dimmer (SPST/3 vías) | 1P1T / 1P2T | 15 A o 600 W LED/incandescente | 120 V | 14 AWG (2,08 mm²) mínimo | 75 °C / 167 °F | Sí (la mayoría de modelos electrónicos) | Regulación de intensidad |
| Inteligente | 1P1T/1P2T | 15 A típico | 120 V | 14 AWG (2,08 mm²) | 75 °C / 167 °F | Sí (imprescindible para electrónica) | Domótica, control remoto, escenas |

La selección del conductor se basa en la corriente nominal del interruptor y en la temperatura de los terminales, respetando los ampacidades de la tabla 310.16 del NEC. Para circuitos de 15 A, el cobre de 14 AWG (2,08 mm²) con aislamiento de 75 °C / 167 °F es suficiente; para 20 A se requiere 12 AWG (3,31 mm²) y para 30 A, 10 AWG (5,26 mm²).

## Preguntas frecuentes (FAQ)
### ¿Cuántos interruptores de 4 vías se pueden instalar entre dos conmutadores de 3 vías?
No hay un límite eléctrico; en la práctica residencial se emplean hasta 3 interruptores de cruce, lo que permite controlar la misma luz desde 4 o más puntos.

### ¿Cuál es la altura máxima permitida para un interruptor de pared según el NEC 2020?
La altura máxima del centro del operador en su posición más alta es de 2,0 m / 6 ft 7 in sobre el piso, sin restricción de altura mínima [404.8(A)].

### ¿Qué calibre de cable se necesita para un interruptor de 20 A instalado en un circuito de iluminación?
Como mínimo se requiere conductor de cobre de 12 AWG (3,31 mm²), capaz de manejar 20 A bajo una temperatura de terminales de 75 °C / 167 °F.

### ¿Cuántos conductores neutros deben llegar a las cajas cuando se utilizan interruptores de 3 vías?
El NEC 2020 exige que al menos una de las cajas del circuito conmutado contenga el neutro cuando toda el área controlada sea visible desde las posiciones de los interruptores [404.2(C) Ex.].

### ¿Cuál es el porcentaje máximo de llenado de una caja de interruptores con empalmes?
Los empalmes no deben ocupar más del 75 % del espacio de cableado en cualquier sección transversal, y los conductores que pasan sin empalmes no más del 40 % [312.8 / 404.3(B)].

### ¿Cuántos vatios puede manejar un interruptor estándar de 15 A a 120 V?
En carga puramente resistiva, 1800 W (15 A × 120 V); para iluminación continua se recomienda no exceder el 80 % de su capacidad, es decir, 1440 W.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ampere-phase-d_449.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2638
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/switchgear/
