---
title: "Tipos de relevadores de protección ANSI"
sidebar:
  label: "Tipos de relevadores de protección ANSI"
description: "Ficha tecnica: Tipos de relevadores de protección ANSI"
keywords: ["protective relay types ANSI device numbers", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "relays"
subcategory: "protective-relay-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un relevador de protección es un dispositivo automático que detecta condiciones anómalas en un circuito eléctrico — corrientes de cortocircuito, sobretensiones, desequilibrios, etc. — y ordena la apertura del interruptor asociado para aislar la zona fallada. La norma ANSI/IEEE C37.2 asigna a cada función de protección un número de dispositivo único (1 a 99) que permite identificar de forma inequívoca la tarea que realiza el relé en los diagramas unifilares y de control. Un mismo equipo electrónico actual (relé multifunción, código 11) puede agrupar decenas de estos números, aunque la documentación sigue referenciando cada función con su código ANSI correspondiente.

## Clasificación de los relevadores de protección

Los relevadores de protección pueden clasificarse atendiendo a distintos criterios. La tabla siguiente resume las categorías más relevantes de acuerdo con la práctica industrial y las fuentes técnicas.

| Criterio de clasificación | Tipos | Ejemplo de código ANSI asociado |
| :--- | :--- | :--- |
| Por mecanismo de operación | Electromagnético, estático (semiconductor), digital/microprocesado | – |
| Por característica de tiempo | Instantáneo, tiempo definido, tiempo inverso (IDMT), combinado | 50 (instantáneo), 51 (temporizado) |
| Por lógica de protección | Diferencial, direccional, desequilibrio, distancia, restringido a tierra, etc. | 87 (diferencial), 67 (sobrecorriente direccional), 21 (distancia) |
| Por magnitud de actuación | Corriente, tensión, frecuencia, potencia, presión, temperatura | 27/59 (tensión), 81 (frecuencia), 32 (potencia) |
| Por ubicación funcional | Protección primaria, protección de respaldo | – |

## Códigos ANSI de funciones de protección más comunes

A continuación se listan las funciones de protección estandarizadas más habituales en sistemas eléctricos de potencia, con ejemplos de ajustes típicos conforme a la práctica usual con relés numéricos. Los valores indicados reflejan rangos de reglaje sobre la base de la corriente o tensión nominal secundaria a la entrada del relé.

| Número ANSI | Función | Descripción | Ajuste típico (métrico / imperial) |
| :--- | :--- | :--- | :--- |
| 1 | Elemento maestro | Inicia o para el equipo principal | – |
| 2 | Relé de arranque o cierre temporizado | Proporciona retardo en la conexión | 0,2 s / 0,2 s a 10 s / 10 s |
| 21 | Relé de distancia | Protección de línea basada en impedancia | Alcance: 0,1 Ω — 200 Ω / 0,1 Ω — 200 Ω (secundario) |
| 25 | Sincronizador o verificación de sincronismo | Permite cierre cuando las redes están en fase | ΔV ≤ 5 %; Δf ≤ 0,1 Hz / 0,1 Hz; Δφ ≤ 10° |
| 27 | Relé de subtensión | Dispara cuando la tensión cae por debajo del ajuste | 0,7 pu — 0,9 pu; ej. 100 V / 100 V arranque a 80 V / 80 V |
| 32 | Relé direccional de potencia | Detecta flujo de potencia en sentido inverso o bajo | 0,5 % — 5 % de la potencia nominal; ej. 50 W / 50 W a 500 W / 500 W (secundario) |
| 40 | Relé de pérdida de excitación | Protege el generador ante pérdida de campo | Impedancia típica 0,8 — 1,0 pu Zbase de la máquina |
| 46 | Relé de secuencia negativa o desequilibrio de corriente | Protege motores/generadores contra desbalance | 0,1 — 0,2 pu de la corriente nominal; ej. 0,5 A / 0,5 A a 1 A / 1 A (secundario) |
| 49 | Relé de sobrecarga térmica | Modela calentamiento de máquinas o transformadores | Constante de tiempo térmico: 5 min / 5 min — 60 min / 60 min |
| 50 | Relé instantáneo de sobrecorriente | Protección sin retardo intencional ante cortocircuitos | Pickup: 2 — 20 veces In; ej. 5 A / 5 A — 100 A / 100 A (secundario) |
| 50/51 | Relé combinado instantáneo/temporizado de sobrecorriente | Unidad 50 instantánea + 51 temporizada en el mismo equipo | Unidad 50: ≥ 5 A / 5 A; unidad 51: curva IEC/ANSI, dial 0,05 — 1,0 |
| 51 | Relé de sobrecorriente temporizado (AC) | Curva inversa, muy inversa o extremadamente inversa | Pickup: 0,5 — 2,0 A / 0,5 — 2,0 A; dial de tiempo: 0,05 — 10 s / 0,05 — 10 s |
| 59 | Relé de sobretensión | Actúa cuando la tensión supera el umbral | 1,05 — 1,2 pu; ej. disparo a 120 V / 120 V en base nominal 100 V / 100 V |
| 60 | Relé de equilibrio de tensión o corriente | Vigila la diferencia entre dos magnitudes eléctricas | Desequilibrio permitido: 2 % — 10 % de la magnitud nominal |
| 64 | Relé de protección a tierra (estator o rotor) | Detecta fallas de aislamiento a masa | Sensibilidad: 0,5 % — 5 % de la corriente nominal del generador |
| 67 | Relé direccional de sobrecorriente | Actúa solo cuando el flujo de corriente supera el valor y la dirección es hacia la falla | Pickup: 0,5 — 2,0 A / 0,5 — 2,0 A; ángulo de operación típico 30° — 90° |
| 81 | Relé de frecuencia (sub/sobre) | Protege generadores y redes ante excursiones de frecuencia | Sobre: 62 Hz / 62 Hz; sub: 58 Hz / 58 Hz; histéresis 0,1 Hz / 0,1 Hz |
| 87 | Relé diferencial | Compara corrientes de entrada y salida de una zona protegida | Pickup diferencial: 0,05 — 0,5 pu de la corriente nominal; pendiente típica 20 % — 40 % |

## Características de operación

Todo relevador de protección se define por cuatro magnitudes básicas:

- **Nivel de arranque (pick‑up):** valor de la magnitud de actuación — corriente, tensión, frecuencia — que inicia la temporización (0,5 A / 0,5 A en un 51 típico).  
- **Nivel de reposición (drop‑out o reset):** valor por debajo del cual el relé libera sus contactos, normalmente entre el 80 % / 80 % y el 95 % / 95 % del valor de arranque.  
- **Tiempo de operación:** intervalo desde que se supera el pick‑up hasta que se cierran los contactos de salida. En relés instantáneos es menor a 20 ms / 0,02 s; en temporizados obedece a curvas normalizadas IEC 60255 o IEEE C37.112.  
- **Tiempo de reposición:** lapso requerido para que el relé vuelva a su estado de reposo una vez que la magnitud cae por debajo del nivel de reset, típicamente 10 ms / 0,01 s a 50 ms / 0,05 s en equipos numéricos.

Los relés modernos multifunción (ANSI 11) programan todas estas características por software y permiten combinar protecciones de respaldo, reenganche automático (79), verificación de sincronismo (25) y funciones de comunicación IEC 61850 en un único chasis.

## Aplicaciones típicas

- **Protección de líneas de transmisión:** funciones 21 (distancia), 67 (sobrecorriente direccional), 85 (portadora) y 79 (reenganche).  
- **Protección de transformadores de potencia:** funciones 87T (diferencial), 51/50 (sobrecorriente), 63 (presión de gas).  
- **Protección de generadores:** funciones 40 (pérdida de excitación), 32 (potencia inversa), 64F/64R (falta a tierra de campo/rotor), 81 (frecuencia), 46 (corriente de secuencia negativa).  
- **Protección de motores:** funciones 49 (térmica), 50/51 (sobrecorriente), 46 (desequilibrio), 48 (rotor bloqueado).  
- **Esquemas de barra:** función 87B (diferencial de barra) combinada con 50BF (fallo de interruptor).

## Preguntas frecuentes (FAQ)

### ¿Cuántos números de dispositivo normaliza el estándar IEEE C37.2?
   El estándar define más de 99 funciones básicas, aunque en la práctica diaria de protección se utilizan alrededor de 40 códigos distintos, pudiendo un solo relé multifunción agrupar hasta 12 números simultáneamente.

### ¿Cuál es el tiempo de disparo típico de un relevador instantáneo ANSI 50?
   En relés numéricos modernos, el tiempo de disparo de un elemento 50 es inferior a 20 ms / 0,02 s, mientras que en equipos electromecánicos puede alcanzar 40 ms / 0,04 s.

### ¿Qué margen de ajuste de frecuencia tiene un relé 81 en un sistema de 60 Hz?
   Los ajustes habituales son 58,5 Hz / 58,5 Hz para subfrecuencia y 61,5 Hz / 61,5 Hz para sobrefrecuencia, con una banda de histéresis programable de 0,05 Hz / 0,05 Hz a 0,2 Hz / 0,2 Hz para evitar oscilaciones.

### ¿A qué nivel de tensión arranca normalmente un relé de subtensión ANSI 27?
   El arranque se ajusta típicamente a 0,8 pu de la tensión nominal, lo que en un secundario de 120 V / 120 V representa 96 V / 96 V; en sistemas de distribución de 13,8 kV / 13,8 kV, el primario correspondiente es 11,04 kV / 11,04 kV.

### ¿Cuántos transformadores de corriente necesita una protección diferencial de transformador ANSI 87T?
   Como mínimo se emplean 6 transformadores de corriente — 3 en el lado de alta y 3 en el de baja — para construir las tres corrientes diferenciales y las de restricción, aunque configuraciones con neutro pueden requerir 7 u 8 TC.

### ¿Qué corriente de arranque se programa en un relé de sobrecorriente temporizado ANSI 51?
   Un ajuste común de la unidad temporizada está entre 0,5 A / 0,5 A y 2 A / 2 A en el secundario de corriente, con un dial de tiempo de 0,1 s / 0,1 s a 1 s / 1 s en curva inversa normalizada.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/types-of-electrical-protection-relays-or-protective-relays/
