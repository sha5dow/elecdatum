---
title: "Guía de selección de PLC"
sidebar:
  label: "Guía de selección de PLC"
description: "Ficha tecnica: Guía de selección de PLC"
keywords: ["PLC selection guide criteria", "sistemas-control"]
category: "sistemas-control"
topic: "plc-selection"
subcategory: "plc-selection-guide"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La selección del controlador lógico programable (PLC) adecuado determina la eficiencia, escalabilidad y fiabilidad de cualquier sistema de automatización industrial. Una evaluación sistemática de las exigencias del proceso, desde las condiciones ambientales hasta la arquitectura de red, permite descartar soluciones sobredimensionadas o insuficientes, maximizando la inversión durante todo el ciclo de vida del equipo.

## Parámetros de funcionamiento y entorno

Las condiciones físicas y eléctricas del lugar de instalación condicionan el diseño mecánico y la electrónica del PLC. Los controladores industriales operan típicamente entre 0 °C y 55 °C / 32 °F y 131 °F, con picos tolerados de hasta 60 °C / 140 °F durante períodos cortos; el almacenamiento admite de –20 °C a 70 °C / –4 °F a 158 °F. La humedad relativa sin condensación suele limitarse al 95 % y la altitud máxima de trabajo, a 2000 m / 6562 ft, aunque existen versiones endurecidas para ambientes agresivos.

| Parámetro | Valor típico | Observaciones |
| --- | --- | --- |
| Temperatura de operación | 0–55 °C / 32–131 °F | Versiones extendidas alcanzan –40 °C / –40 °F o 70 °C / 158 °F |
| Humedad relativa | 5–95 % (sin condensación) | Requiere envolvente estanco si hay salpicaduras |
| Altitud de funcionamiento | ≤2000 m / 6562 ft | Reducción del rendimiento por encima de este valor |
| Resistencia a vibraciones | 2 g @ 10–500 Hz / 0.07 in pico a pico | Cumplimiento con IEC 60068-2-6 |
| Inmunidad a ruido eléctrico | Nivel 3 según IEC 61000-4-4 | Protección contra transitorios rápidos de 2 kV |

La elección del grado de protección IP (mínimo IP20 para armario; IP65/IP67 para montaje en campo) y la certificación para atmósferas explosivas (ATEX, IECEx) son obligatorias cuando el PLC se ubica en zonas clasificadas.

## Arquitectura de entradas y salidas

El número y tipo de canales de E/S definen la capacidad de interacción con sensores, actuadores y periféricos. Los PLC compactos (tipo nano o micro) integran de 10 a 36 puntos de E/S, mientras que los sistemas modulares pueden escalar hasta varios miles de canales mediante módulos de expansión remotos. Las señales digitales trabajan habitualmente a 24 V CC y las analógicas cubren los rangos estándar de 0–10 V y 4–20 mA.

| Clase de PLC | Puntos de E/S digitales integrados | Canales analógicos típicos | Ampliación máxima |
| --- | --- | --- | --- |
| Nano (ej. Siemens LOGO!) | 8–24 | 0–2 | 24–48 puntos con módulos locales |
| Micro (ej. CLICK) | 20–36 | 2–4 | 100–200 puntos en bus local |
| Compacto medio (ej. S7-1200) | 24–128 | 4–16 | Hasta 284 puntos locales + remotas |
| Modular grande (ej. ControlLogix) | Configurables desde cero | Módulos de 4–16 canales | >10 000 puntos con redes de campo |

Para aplicaciones con control de movimiento es preciso considerar salidas rápidas de tren de pulsos (PTO) de hasta 200 kHz y entradas de encoder diferenciales. Los módulos especiales (termopar, RTD, galgas extensométricas) amplían la conectividad sin procesamiento externo.

## Capacidad de procesamiento y memoria

La velocidad de ejecución del programa y la cantidad de memoria disponible determinan el tamaño máximo de la lógica de control y la respuesta temporal del sistema. Los PLC de gama baja ejecutan entre 1 y 10 k instrucciones por milisegundo, los de gama media alcanzan 0,1–0,5 ms/k instrucciones y los de altas prestaciones llegan a procesar una instrucción booleana en 1–5 ns.

| Recurso | Gama baja (nano/micro) | Gama media | Gama alta |
| --- | --- | --- | --- |
| Memoria de programa | 2–64 kB | 128 kB–2 MB | 4–32 MB |
| Memoria de datos | 1–8 kB | 32–512 kB | 1–8 MB |
| Tiempo de ciclo típico | 1–10 ms | 0,1–1 ms | 0,01–0,1 ms |
| Capacidad de ampliación de memoria | Tarjeta SD/microSD (hasta 32 GB) | Módulos de memoria propietarios | Módulos intercambiables en caliente |

La selección debe incluir un margen de memoria libre del 30–50 % para futuras ampliaciones y la posibilidad de almacenar recetas o registros históricos en memoria no volátil.

## Lenguajes de programación y software

El estándar IEC 61131-3 define cinco lenguajes de programación para PLC: diagrama de contactos (LD), diagrama de bloques funcionales (FBD), texto estructurado (ST), lista de instrucciones (IL) y gráfico secuencial de funciones (SFC). La compatibilidad con varios lenguajes permite seleccionar el más adecuado según la tarea: LD para lógica combinacional, ST para cálculos complejos y SFC para secuencias de producción.

| Plataforma | Lenguajes soportados | Entorno de desarrollo | Simulación integrada |
| --- | --- | --- | --- |
| Siemens TIA Portal | LD, FBD, ST, SFC, IL | TIA Portal V18 | Sí (PLCsim) |
| Rockwell Studio 5000 | LD, FBD, ST, SFC | Studio 5000 Logix Designer | Sí (Emulate) |
| Codesys | LD, FBD, ST, SFC, IL | Codesys Development System | Sí (nativo) |
| AutomationDirect Productivity Suite | LD, FBD, ST | Productivity Suite | No requiere hardware para prueba |

La disponibilidad de bibliotecas predefinidas para lazos PID, comunicaciones o motion control acelera el desarrollo; una ingeniería que requiera control por lotes se beneficiará de la implementación del estándar ISA-88 en el firmware del PLC.

## Comunicaciones y conectividad

La capacidad de integración con redes industriales y sistemas de supervisión define la escalabilidad y el coste de cableado. Los puertos básicos incluyen RS-232/485 y Ethernet con protocolos como Modbus RTU/TCP. Los PLC con soporte de bus de campo (PROFIBUS, CANopen) y protocolos de automatización (EtherNet/IP, PROFINET, EtherCAT) facilitan la distribución de E/S y el control de variadores.

| Protocolo | Velocidad típica | Topología | Aplicación habitual |
| --- | --- | --- | --- |
| Modbus TCP | 100 Mbps | Estrella | Integración con HMI/SCADA |
| EtherNet/IP | 100 Mbps / 1 Gbps | Estrella, anillo | Comunicación entre PLC y E/S remotas |
| PROFINET | 100 Mbps | Estrella, línea | Automatización de máquinas |
| EtherCAT | 100 Mbps | Anillo, línea | Control de movimiento de alta velocidad |

Los puertos USB incorporados permiten la carga de programas sin necesidad de red, y la conectividad OPC UA asegura la interoperabilidad con sistemas MES/ERP en el marco de la Industria 4.0.

## Consideraciones de instalación y mantenimiento

El formato mecánico (compacto, modular o basado en PC), las dimensiones del armario y la facilidad de diagnóstico impactan directamente en los costes operativos. Los PLC actuales incorporan LED de estado, pantallas locales y registros de diagnóstico accesibles desde el software de programación.

| Aspecto | Recomendación |
| --- | --- |
| Montaje | Carril DIN de 35 mm / 1.38 in o panel, con separación mínima de 50 mm / 2 in para ventilación |
| Alimentación | 24 V CC (industrial) o 100–240 V CA; consumo típico de 5–30 W |
| Protección eléctrica | Fusible externo de 2 A y supresor de transitorios en la entrada de alimentación |
| Mantenimiento preventivo | Batería de respaldo de 3 V con vida útil de 3–5 años; sustitución sin pérdida de programa si se emplea memoria flash |
| Diagnóstico | Watchdog, indicadores de estado de E/S y buffer de eventos con sello de tiempo |

La capacidad de sustituir módulos en caliente (hot-swap) y la existencia de repuestos estándar reducen los tiempos de parada no programada.

## Aplicaciones típicas

La guía de selección se concreta en los siguientes sectores, donde los PLC dominan la automatización:

- **Fabricación discreta**: líneas de ensamblaje, prensas y robots. Se requieren ciclos rápidos (<10 ms), numerosas E/S digitales y redes de seguridad.
- **Control de procesos continuos**: mezcla de fluidos, reactores químicos. Demandan lazos PID redundantes, módulos analógicos de alta resolución y comunicación HART.
- **Infraestructura y edificios**: estaciones de bombeo, climatización. PLC nano con conectividad Modbus y alarmas gestionadas vía SMS o nube.
- **Maquinaria móvil y agrícola**: PLC embebidos con protección IP67, fuente de alimentación de 12/24 V CC y protocolo CAN bus (SAE J1939).
- **Energía y utilities**: subestaciones, parques eólicos. Necesidad de sellado de tiempo, sincronización SNTP y soporte de protocolos como DNP3 o IEC 61850.
- **Industria farmacéutica y alimentaria**: dosificación y envasado. Cumplimiento de ISA-88, registros de auditoría inalterables y CIP/SIP integrado.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia un PLC compacto de uno modular?

El PLC compacto integra CPU, fuente y E/S en una única carcasa no ampliable significativamente, ideal para aplicaciones de hasta 128 puntos. El modular permite añadir módulos de E/S, comunicación y funciones especiales sobre un bus de expansión, escalando hasta miles de canales.

### ¿Cuántos puntos de E/S debo reservar para futuras ampliaciones?

Un margen prudente oscila entre el 20 % y el 30 % del total instalado. En sistemas con previsión de crecimiento rápido o integración de nuevas líneas, se recomienda dejar un 50 % de capacidad en el bastidor.

### ¿Es mejor seleccionar un PLC con fuente de alimentación integrada o externa?

Las fuentes integradas simplifican el montaje y reducen el espacio en armario en aplicaciones pequeñas. Para sistemas modulares con alta demanda de corriente (>2 A) o necesidad de redundancia, es preferible una fuente externa dimensionada y conmutada.

### ¿Qué protocolo de comunicación debo elegir para control de movimiento?

EtherCAT y PROFINET IRT ofrecen determinismo y tiempos de ciclo de bus inferiores a 100 µs, aptos para sincronización multieje. EtherNet/IP con CIP Motion también cumple en aplicaciones de dinámica media, pero requiere gestión de jitter.

### ¿Puedo mezclar módulos de E/S de distintos fabricantes en un mismo PLC?

No de manera directa. Los buses de expansión son propietarios. La interoperabilidad se consigue a través de pasarelas de protocolo o usando E/S remotas con bus de campo abierto (PROFIBUS, EtherNet/IP) soportado por el PLC principal.

### ¿Cómo afecta la temperatura ambiente a la vida útil del PLC?

El incremento de 10 °C / 18 °F sobre la temperatura máxima de operación reduce la vida de los condensadores electrolíticos a la mitad. Mantener el PLC dentro del rango nominal y con ventilación adecuada evita fallos prematuros y reinicios espontáneos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/process-control-systems-t_32.html
- **plcacademy.com**: https://www.plcacademy.com/
- **automationdirect.com**: https://www.automationdirect.com/systembuilder
