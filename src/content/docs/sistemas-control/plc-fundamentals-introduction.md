---
title: "Fundamentos de PLC introducción"
sidebar:
  label: "Fundamentos de PLC introducción"
description: "Ficha tecnica: Fundamentos de PLC introducción"
keywords: ["PLC programmable logic controller basics introduction", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "plc-fundamentals-introduction"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un controlador lógico programable (PLC, del inglés _Programmable Logic Controller_) es una computadora industrial robustecida, diseñada para gobernar procesos de manufactura, líneas de ensamblaje y maquinaria con alta fiabilidad. Su función central consiste en ejecutar un programa de control que lee continuamente el estado de sensores y actuadores a través de entradas digitales y analógicas, procesa la lógica programada y actualiza las salidas en tiempo real, todo ello dentro de un ciclo de scan predecible. A diferencia de los sistemas de relés cableados, un PLC puede reprogramarse sin modificar el cableado físico, lo que simplifica la adaptación a cambios en el proceso.

## Antecedentes históricos

El primer PLC se desarrolló en 1968 como respuesta a la necesidad de reemplazar los costosos y rígidos sistemas de lógica de relés en la industria automotriz. La división Hydramatic de General Motors publicó una solicitud de propuestas para un controlador electrónico flexible, y la compañía Bedford Associates, liderada por Dick Morley, resultó seleccionada. El resultado, entregado en 1969, fue el Modicon 084 (proyecto número 84 de Bedford), considerado el primer PLC comercial. Este equipo introdujo la lógica de escalera (ladder logic) como lenguaje de programación inspirado en los diagramas de relés, permitiendo que técnicos eléctricos sin formación en informática pudieran programarlo. La marca Modicon se vendió posteriormente a Gould Electronics y hoy pertenece a Schneider Electric.

## Arquitectura del PLC

Un PLC integra los siguientes bloques funcionales:

| Componente | Función | Características típicas |
|---|---|---|
| CPU (Unidad Central de Proceso) | Ejecutar el programa de control y gestionar la comunicación | Procesador de 32 bits, ciclo de instrucciones inferior a 0,1 µs / 0.0001 ms |
| Fuente de alimentación | Convertir la tensión de red a los niveles DC internos | Entrada 100‑240 V AC / 47‑63 Hz; salida 24 V DC / 5 A |
| Módulos de entrada (I) | Adquirir señales de sensores, pulsadores, finales de carrera | Tensión de entrada digital 24 V DC o 120 V AC / 50‑60 Hz; rango analógico 0‑10 V |
| Módulos de salida (O) | Activar actuadores, contactores, válvulas | Salida a relé hasta 2 A / 250 V AC, salida a transistor 0,5 A / 24 V DC |
| Bus de interconexión (backplane) | Transportar datos entre CPU y módulos de E/S | Velocidad de bus típica 100 Mbps o superior |
| Memoria | Almacenar el programa de usuario, datos y sistema operativo | Memoria de programa no volátil, capacidad desde 64 kB hasta varios MB |

## Ciclo de scan y funcionamiento interno

El tiempo de ciclo de scan típico de un PLC moderno varía entre 1 ms y 20 ms, dependiendo de la complejidad del programa y la cantidad de entradas/salidas. Durante cada scan el controlador ejecuta secuencialmente tres etapas:

1. **Lectura de entradas:** la CPU captura el estado de todos los módulos de entrada y almacena una imagen en memoria.
2. **Ejecución del programa:** el procesador recorre el código de control (ladder, texto estructurado, etc.) evaluando contactos, bobinas y bloques funcionales, actualizando una imagen interna de salidas.
3. **Escritura de salidas:** la imagen de salidas se transfiere a los módulos físicos, modificando el estado de los actuadores.

Este ciclo se repite de forma continua mientras el PLC está en modo RUN, garantizando un comportamiento determinista. Los PLC de gama alta pueden completar más de 50000 instrucciones lógicas en 1 ms.

## Programación básica

El estándar IEC 61131‑3, establecido en 1993, define cinco lenguajes de programación para PLC, combinando entornos gráficos y textuales:

| Lenguaje | Tipo | Descripción |
|---|---|---|
| Diagrama de escalera (LD) | Gráfico | Basado en contactos y bobinas; semeja los esquemas eléctricos de relés |
| Diagrama de bloques funcionales (FBD) | Gráfico | Conecta bloques que representan funciones lógicas, matemáticas o de control |
| Texto estructurado (ST) | Texto | Sintaxis similar a lenguajes de alto nivel (Pascal, C) |
| Lista de instrucciones (IL) | Texto | Lenguaje de bajo nivel con acumulador y operaciones mnemónicas |
| Gráfico secuencial de funciones (SFC) | Gráfico | Describe secuencias de etapas y transiciones |

El diagrama de escalera sigue siendo el más utilizado en la industria por su facilidad de interpretación por parte del personal de mantenimiento eléctrico.

## Ventajas frente a la lógica de relés

Un solo PLC puede reemplazar cientos de relés, temporizadores y contadores, reduciendo el volumen del armario eléctrico de 2 m³ / 70,6 ft³ a menos de 0,5 m³ / 17,7 ft³ y el peso del panel de control en más del 60 %. Además, ofrece ventajas significativas sobre los sistemas cableados tradicionales:

- **Flexibilidad:** modificar el programa no requiere recablear, lo que acorta las puestas en marcha de semanas a horas.
- **Diagnóstico integrado:** las rutinas de autodiagnóstico detectan averías y muestran alarmas detalladas, agilizando la localización de fallos.
- **Conectividad:** los PLC se integran en redes industriales (EtherNet/IP, PROFINET, Modbus TCP) y se comunican con SCADA, HMI y sistemas MES.
- **Fiabilidad eléctrica:** inmunidad a ruido electromagnético conforme a IEC 61000‑4‑4 (burst de 2 kV) y alta resistencia a vibraciones (hasta 2 g / 19,6 m/s²).

## Aplicaciones

Los PLC controlan procesos en todos los sectores industriales. Una línea de ensamblaje automotriz puede gestionar más de 2000 puntos de E/S con un solo PLC modular, mientras que aplicaciones de envasado emplean controladores compactos que procesan 300 botellas por minuto. Otros ejemplos incluyen:

- Sistemas de transporte y clasificación (cintas, rodillos, elevadores).
- Tratamiento de aguas y dosificación química.
- Máquinas herramienta y centros de mecanizado CNC.
- Control de calderas, hornos y quemadores.
- Automatización de edificios (climatización, iluminación, seguridad).

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia un PLC de un microcontrolador común?
Un PLC está diseñado para operar 24/7 en entornos industriales adversos (temperaturas de 0 °C a 55 °C / 32 °F a 131 °F, humedad 95 % sin condensación, vibraciones), incluye protecciones eléctricas integradas y ofrece lenguajes de programación específicos para automatización, mientras que un microcontrolador requiere hardware adicional y software de base para alcanzar niveles de fiabilidad similares.

### ¿Cuál es el tiempo de vida útil de un PLC?
La vida útil de un PLC en operación continua suele superar los 15 años, siempre que se respeten las condiciones ambientales especificadas. Muchas instalaciones continúan funcionando con equipos de hace más de 20 años gracias a su diseño robusto y a la disponibilidad de repuestos.

### ¿Se necesita formación en programación informática para programar un PLC?
No es indispensable. El lenguaje de escalera (ladder) fue concebido para que los técnicos eléctricos pudieran programar sin conocimientos de lenguajes de alto nivel. No obstante, manejar texto estructurado o bloques funcionales requiere cierta base en lógica y programación.

### ¿Puede un PLC comunicarse con otros sistemas como bases de datos o la nube?
Sí. Los PLC actuales incorporan puertos Ethernet y protocolos como OPC UA, MQTT o Modbus TCP, lo que permite conectarlos con bases de datos SQL, servicios en la nube y plataformas de IoT industrial.

### ¿Qué significa que un PLC sea modular?
Un PLC modular está compuesto por una CPU independiente y módulos de E/S, comunicación y funciones especiales que se acoplan sobre un bastidor o backplane. Esta arquitectura permite ampliar hasta varios miles de puntos de E/S sin necesidad de sustituir el controlador central.

### ¿Es posible simular un programa de PLC sin disponer del hardware físico?
Numerosos fabricantes ofrecen simuladores software (por ejemplo, RSLogix Emulate, PLCSIM, CODESYS Simulation) que permiten ejecutar y depurar el programa en un PC, reduciendo el tiempo de puesta en marcha y evitando riesgos en la máquina real.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-systems-t_32.html
- **plcacademy.com**: https://www.plcacademy.com/category/plc-basics/
- **automationdirect.com**: https://www.automationdirect.com/ebooks/plc-handbook
