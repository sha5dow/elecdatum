---
title: "Protocolo Modbus fundamentos"
sidebar:
  label: "Protocolo Modbus fundamentos"
description: "Ficha tecnica: Protocolo Modbus fundamentos"
keywords: ["Modbus protocol RTU TCP basics", "sistemas-control"]
category: "sistemas-control"
topic: "communication-protocols"
subcategory: "modbus-protocol-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Modbus es un protocolo de comunicación serial de campo (fieldbus) abierto, libre de regalías y ampliamente utilizado para interconectar dispositivos electrónicos industriales, como autómatas programables (PLC), sensores y actuadores. Fue publicado por primera vez en 1979 y su simplicidad lo ha convertido en un estándar de facto en sistemas de supervisión, control y adquisición de datos (SCADA).

Modbus fue creado en 1979 por la empresa Modicon (hoy integrada en Schneider Electric) específicamente para conectar sus PLCs. Desde 2004 su gestión corresponde a la Modbus Organization, asociación que mantiene el protocolo como un estándar abierto. Opera bajo una arquitectura cliente‑servidor (anteriormente maestro‑esclavo): el cliente inicia las transacciones y el servidor responde, pudiendo existir hasta 247 servidores direccionables en una red serial. La especificación define tres variantes de transporte principales — serie asíncrono (RTU y ASCII) y Ethernet (TCP/IP) —, lo que permite su uso sobre EIA‑485, RS‑232, fibra óptica o radio.

## Especificaciones del protocolo

La tabla siguiente reúne los parámetros fundamentales del protocolo Modbus en sus distintas capas de transporte.

| Parámetro | Valor |
|---|---|
| Tamaño máximo de la PDU | 253 bytes |
| Tamaño máximo de la ADU en red serie | 256 bytes |
| Tamaño máximo de la ADU en TCP/IP | 260 bytes |
| Rango de direcciones de servidor (serial) | 1 a 247 (dirección 0 para broadcast) |
| Nodos máximos por segmento RS‑485 sin repetidor | 32 |
| Longitud máxima del cable RS‑485 | 1200 m / 3937 ft |
| Velocidades de transmisión típicas (serie) | 9600, 19200, 38400 bps (hasta 115200 bps) |
| Puerto TCP predeterminado | 502 |

## Estructura de la trama

Cada mensaje Modbus está compuesto por una **Unidad de Datos de Aplicación (ADU)**, que encapsula la **Unidad de Datos de Protocolo (PDU)** junto con información específica del medio. La PDU tiene una longitud máxima de 253 bytes y contiene exclusivamente el código de función y los datos asociados.

| Componente | Tamaño (serial RTU) | Tamaño (TCP) | Descripción |
|---|---|---|---|
| Dirección | 1 byte | — (se incluye en MBAP) | Identificador del servidor destino |
| Código de función | 1 byte | 1 byte | Operación solicitada (lectura/escritura) |
| Datos | 0 a 252 bytes | 0 a 252 bytes | Direcciones, valores, cantidad de registros |
| CRC / LRC | 2 bytes (CRC) | — | Verificación de errores en serie |
| Cabecera MBAP | — | 7 bytes | ID de transacción, protocolo, longitud, unidad |

> **ADU = Dirección + PDU + Comprobación de error**
> **PDU = Código de función + Datos**

En modo RTU la trama se delimita por silencios de al menos 3,5 caracteres; en ASCII se emplea el carácter dos puntos (:) como inicio y retorno de carro/salto de línea como fin.

## Códigos de función estándar

Existen 21 códigos de función públicos en la especificación Modbus. La tabla siguiente muestra los más empleados en aplicaciones de automatización.

| Código (hex) | Función | Tipo de dato |
|---|---|---|
| 01 (0x01) | Leer bobinas (coils) | Bit, salida física |
| 02 (0x02) | Leer entradas discretas | Bit, entrada física |
| 03 (0x03) | Leer registros de retención | 16 bits, salida |
| 04 (0x04) | Leer registros de entrada | 16 bits, entrada |
| 05 (0x05) | Escribir bobina única | Bit, salida |
| 06 (0x06) | Escribir registro único | 16 bits, salida |
| 15 (0x0F) | Escribir múltiples bobinas | Bits, salida |
| 16 (0x10) | Escribir múltiples registros | 16 bits, salida |

Las direcciones de datos se referencian mediante rangos predefinidos: bobinas de 00001 a 09999, entradas discretas de 10001 a 19999, registros de entrada de 30001 a 39999 y registros de retención de 40001 a 49999, aunque en la PDU el direccionamiento comienza siempre desde cero.

## Modos de transmisión

Modbus opera en tres modos de transmisión principales — RTU, ASCII y TCP/IP —, con tiempos de respuesta y alcances que van desde los pocos ms hasta los 1200 m (3937 ft) en RS‑485. La tabla siguiente resume sus diferencias.

| Característica | Modbus RTU | Modbus ASCII | Modbus TCP |
|---|---|---|---|
| Codificación | Binario | ASCII hexadecimal | MBAP + PDU binaria |
| Comprobación de error | CRC‑16 | LRC | Ethernet CRC (capa transporte) |
| Longitud máxima de trama | 256 bytes | 513 caracteres (aprox.) | 260 bytes |
| Velocidad típica | 9600–115200 bps | ≤ 19200 bps | 10/100/1000 Mbps |
| Alcance máximo | 1200 m / 3937 ft (RS‑485) | 1200 m / 3937 ft (RS‑485) | 100 m / 328 ft por segmento Ethernet |
| Topología | Bus (daisy chain) | Bus (daisy chain) | Estrella (conmutada) |

RTU es el modo más eficiente en ancho de banda y el más común en entornos industriales; TCP/IP permite integración directa con redes corporativas y sistemas de supervisión remotos.

## Aplicaciones típicas

Modbus conecta desde 2 hasta 247 dispositivos en la misma red y se encuentra presente en centenares de miles de instalaciones industriales, energéticas y de edificios inteligentes. Sus usos más representativos incluyen:

- **SCADA y telemetría**: comunicación entre RTUs, PLCs y centros de control.
- **Automatización de procesos**: lectura de sensores de temperatura, presión y caudal, y mando de bombas, válvulas y variadores.
- **Integración de equipos de distintos fabricantes**: debido a su carácter abierto, es el idioma común en pasarelas (gateways) y convertidores de protocolos.
- **Monitorización energética**: contadores eléctricos, analizadores de red y sistemas de gestión de energía.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre Modbus RTU y Modbus TCP?
Modbus RTU transmite las tramas en formato binario sobre líneas serie (RS‑485/RS‑232) con comprobación CRC, mientras que Modbus TCP encapsula la PDU dentro de un segmento TCP en redes Ethernet, utilizando la cabecera MBAP y el puerto 502. RTU alcanza distancias de 1200 m por bus, en tanto que TCP se limita a 100 m por enlace, pero ofrece mayor velocidad.

### ¿Cuántos dispositivos puedo conectar en una misma red Modbus?
En una red serie sin repetidores se pueden direccionar hasta 247 servidores, aunque la limitación física típica en RS‑485 es de 32 cargas unitarias por segmento. Mediante repetidores el límite se extiende a 247 direcciones totales. En Modbus TCP el número de conexiones depende de los recursos del servidor y del switch, no del protocolo.

### ¿Es Modbus compatible con cualquier PLC?
Sí. Al ser un estándar abierto publicado en 1979 y revisado hasta la versión V1.1b3 de 2012, la mayoría de los fabricantes de PLC (Siemens, Allen‑Bradley, Schneider Electric, Omron, etc.) ofrecen librerías o módulos de comunicación Modbus nativos, tanto en modo RTU como TCP.

### ¿Qué significa CRC en una trama Modbus RTU?
CRC (Cyclic Redundancy Check) es un campo de 2 bytes que el transmisor calcula a partir del contenido de la trama y añade al final. El receptor recalcula el CRC y lo compara; si no coinciden, la trama se descarta, garantizando la integridad de los datos frente a ruido electromagnético.

### ¿Se puede usar Modbus sobre RS‑232?
Sí, la especificación serial soporta EIA/TIA‑232, aunque su alcance es menor (15 m / 49 ft) y solo permite una conexión punto a punto. Habitualmente se emplea RS‑232 para conectar un único dispositivo directamente a un PC o a una pasarela.

### ¿Modbus es un protocolo gratuito y sin licencia?
Sí. La Modbus Organization distribuye libremente todas las especificaciones y no exige el pago de regalías para su implementación, lo que ha impulsado su adopción masiva en la industria.

## Fuentes consultadas

- **plcacademy.com**: https://www.plcacademy.com/category/plc-programming/
