---
title: "Protocolo EtherNet/IP fundamentos"
sidebar:
  label: "Protocolo EtherNet/IP fundamentos"
description: "Ficha tecnica: Protocolo EtherNet/IP fundamentos"
keywords: ["EtherNet/IP protocol basics industrial", "sistemas-control"]
category: "sistemas-control"
topic: "communication-protocols"
subcategory: "ethernet-ip-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

EtherNet/IP, abreviatura de Ethernet Industrial Protocol, es un protocolo de red industrial abierto que adapta el protocolo CIP (Common Industrial Protocol) a la capa física y de enlace de datos de Ethernet estándar, permitiendo comunicación en tiempo real y configuración de dispositivos en entornos de automatización con una tasa de transferencia típica de 100 Mbit/s.

## Arquitectura del protocolo

EtherNet/IP distribuye sus servicios de comunicación en un modelo híbrido TCP/IP que asigna funciones distintas a la capa de transporte: el tráfico crítico de E/S utiliza UDP para minimizar latencia mediante mensajería implícita, mientras que las tareas de configuración y diagnóstico viajan sobre TCP con mensajería explícita. El protocolo implementa el CIP en las capas superiores (sesión, presentación y aplicación del modelo OSI), encapsulando datos de automatización mediante un modelo orientado a objetos común a otras redes de ODVA como DeviceNet y ControlNet.

| Capa OSI | Protocolo implementado | Función principal |
| --- | --- | --- |
| Aplicación (7) | CIP | Perfiles de dispositivo y objetos específicos |
| Presentación (6) | CIP | Formato de datos y traducción de tipos |
| Sesión (5) | CIP | Establecimiento y manejo de conexiones |
| Transporte (4) | TCP / UDP | Control de flujo (TCP) o prioridad de tiempo real (UDP) |
| Red (3) | IP | Enrutamiento y direccionamiento lógico |
| Enlace de datos (2) | Ethernet | Control de acceso al medio (MAC) y tramas |
| Física (1) | Ethernet (IEEE 802.3) | Señalización eléctrica/óptica y cableado |

## Mensajería implícita y explícita

El protocolo define dos mecanismos de intercambio de datos diferenciados por su propósito y recurso de transporte. La mensajería implícita transfiere datos de entrada/salida en tiempo real con baja sobrecarga mediante paquetes UDP, usando identificadores de conexión predefinidos y sin necesidad de interpretar comandos. La mensajería explícita emplea TCP para solicitudes y respuestas con estructura solicitud/servicio, transportando comandos como lectura y escritura de parámetros, configuración y carga de programas, donde cada mensaje incluye un código de servicio, clase, instancia y atributo CIP.

| Característica | Mensajería implícita (I/O) | Mensajería explícita |
| --- | --- | --- |
| Transporte | UDP | TCP |
| Formato de datos | Solo datos de E/S predefinidos | Comandos y datos estructurados |
| Uso típico | Control de procesos cíclico | Configuración y diagnóstico |
| Tamaño máximo de paquete | Hasta 1 472 bytes (Ethernet) / 1 472 bytes | Hasta 65 535 bytes teórico, limitado por MTU |
| Conexión | Unicast o multicast | Punto a punto (unicast) |

## Parámetros de comunicación

Los parámetros de conexión determinan la frecuencia y el disparador de transmisión de los paquetes de mensajería implícita. El tipo de disparo puede ser cíclico, por cambio de estado o bajo demanda (polled), y la tasa de actualización se configura en el origen de la conexión. La infraestructura utiliza el puerto 44818 para mensajería explícita TCP y el puerto 2222 para mensajería implícita UDP.

| Parámetro | Valor típico / Rango | Descripción |
| --- | --- | --- |
| Puerto TCP explícito | 44818 | Usado para configuración y programación |
| Puerto UDP implícito | 2222 | Usado para mensajería de E/S cíclica |
| Intervalo de paquete solicitado (RPI) | 0.5 ms a 3 200 ms | Frecuencia de actualización de datos implícitos |
| Tiempo de espera de conexión (timeout) | Multiplicador de RPI, típico 4x a 16x | Tiempo antes de declarar pérdida de conexión |
| MTU estándar Ethernet | 1 500 bytes | Tamaño máximo de trama sin jumbo frames |

## Topologías y medios físicos

EtherNet/IP opera sobre infraestructura Ethernet comercial estándar, soportando topología en estrella mediante switches, topología en anillo a nivel de dispositivo (DLR) y configuración lineal. El protocolo es independiente del medio físico, funcionando sobre cobre y fibra óptica con las mismas limitaciones de alcance definidas por las variantes de IEEE 802.3.

| Medio físico | Velocidad nominal | Distancia máxima por segmento |
| --- | --- | --- |
| Cobre par trenzado Cat5e/6 (100BASE-TX) | 100 Mbit/s | 100 m / 328 ft |
| Cobre par trenzado Cat6a/7 (1000BASE-T) | 1 000 Mbit/s | 100 m / 328 ft |
| Fibra multimodo 62.5/125 µm (100BASE-FX) | 100 Mbit/s | 2 000 m / 6 562 ft |
| Fibra monomodo 9/125 µm (1000BASE-LX) | 1 000 Mbit/s | 10 000 m / 32 808 ft |

## Modos de transporte de datos

Los adaptadores EtherNet/IP pueden consumir y producir datos a través de varios modos de transporte que definen cómo y cuándo se envían los paquetes. El modo más determinista es el multicast cíclico, donde el productor emite datos a un grupo multicast a intervalos fijos; alternativamente, el modo cambio de estado (COS) transmite únicamente ante una variación en los datos de E/S, y el modo polled envía datos como respuesta a una solicitud explícita del escáner.

| Modo de transporte | Disparador de transmisión | Uso típico |
| --- | --- | --- |
| Cíclico | Temporizador RPI fijo | Control de movimiento de alta velocidad |
| Cambio de estado (COS) | Flanco de cambio en los datos | Reducción de tráfico en entornos con cambios esporádicos |
| Polled (bajo demanda) | Solicitud del escáner | Peticiones de diagnóstico o eventos no críticos |
| Multicast | Transmisión a grupo de nodos | Control de E/S distribuida desde un único productor |

## Comparativa con otros protocolos industriales

EtherNet/IP compite directamente con otros protocolos de Ethernet industrial basados en estándares de la IEC 61158. Frente a Modbus TCP, añade un modelo de objetos CIP integral y comunicación productor/consumidor; respecto a PROFINET Io, la diferencia radica en que EtherNet/IP encapsula CIP sobre TCP/UDP estándar sin requerir un controlador de acceso al medio modificado ni hardware especial para tiempo real estricto.

| Protocolo | Mensajería en tiempo real | Transporte | Topología en anillo |
| --- | --- | --- | --- |
| EtherNet/IP | UDP implícito + CIP Sync (IEEE 1588) | TCP/UDP estándar | DLR nativo a nivel de dispositivo |
| Modbus TCP | No nativa (sondeo maestro-esclavo) | TCP | Dependiente de switch gestionado |
| PROFINET Io | IRT con hardware dedicado o RT con software | Ethertype propietario | MRP (Media Redundancy Protocol) |
| EtherCAT | Procesamiento de trama sobre la marcha | Ethertype propietario | Anillo lógico con puerto cerrado |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre mensajería implícita y explícita en EtherNet/IP?

La mensajería implícita utiliza UDP para intercambiar datos de entrada/salida en tiempo real sin comandos embebidos, mientras que la mensajería explícita opera sobre TCP con estructura solicitud/respuesta para leer o escribir parámetros, configurar dispositivos y transferir programas.

### ¿Qué puertos debo abrir en el firewall para una red EtherNet/IP?

Se deben permitir el puerto 44818 TCP para mensajería explícita y el puerto 2222 UDP para mensajería implícita. Además, es necesario habilitar el tráfico multicast UDP en el rango de direcciones IP que utilice la aplicación.

### ¿Es posible ejecutar EtherNet/IP sobre infraestructura Ethernet de oficina?

Sí, EtherNet/IP opera sobre hardware Ethernet estándar compatible con IEEE 802.3, aunque en entornos de oficina se recomienda segmentar el tráfico mediante VLANs y switches gestionados que soporten IGMP snooping para evitar la inundación de paquetes multicast en toda la red.

### ¿Qué es CIP y por qué es relevante para EtherNet/IP?

CIP (Common Industrial Protocol) es un protocolo de aplicación orientado a objetos gestionado por ODVA que proporciona perfiles de dispositivo estandarizados y servicios comunes a varias redes, permitiendo que EtherNet/IP comparta el mismo modelo de datos y configuración que DeviceNet y ControlNet.

### ¿EtherNet/IP soporta topología en anillo?

Sí, el protocolo define el DLR (Device Level Ring), un mecanismo de redundancia de capa 2 que permite conectar dispositivos en anillo para mantener la comunicación ante un único fallo de cable o nodo, con tiempos de recuperación inferiores a 3 ms para 50 nodos.

### ¿Se puede usar EtherNet/IP con direcciones IP públicas?

Técnicamente es posible, pero es una práctica no recomendada por razones de seguridad y determinismo. El protocolo está diseñado para redes de control aisladas o correctamente segmentadas, y la exposición a Internet introduce latencia impredecible y vulnerabilidades a ataques informáticos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/p-id-piping-instrumentation-diagram-d_466.html
- **plcacademy.com**: https://www.plcacademy.com/category/plc-basics/
- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=O88HPpYBSlc
