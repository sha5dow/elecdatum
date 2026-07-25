---
title: "PLC de seguridad fundamentos"
sidebar:
  label: "PLC de seguridad fundamentos"
description: "Ficha tecnica: PLC de seguridad fundamentos"
keywords: ["safety PLC fundamentals SIL", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "safety-plc-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un PLC de seguridad (Programmable Logic Controller de seguridad) es un controlador lógico programable diseñado específicamente para ejecutar funciones de seguridad en aplicaciones industriales, cumpliendo con normativas de integridad de seguridad funcional como IEC 61508 e ISO 13849. A diferencia de un PLC estándar, incorpora diagnósticos internos, redundancia y arquitectura tolerante a fallos para garantizar un estado seguro ante fallos del sistema. Estos dispositivos supervisan y controlan funciones críticas como paradas de emergencia, cortinas de luz, alfombras de seguridad y enclavamientos, reduciendo el riesgo de lesiones al personal y daños a la maquinaria.

Un PLC de seguridad supervisa continuamente las entradas provenientes de dispositivos de seguridad, procesa la lógica mediante bloques de función certificados y controla las salidas de seguridad con un ciclo de exploración típicamente inferior a 10 ms. La arquitectura más común utiliza un diseño de dos canales con autodiagnóstico: dos microcontroladores independientes leen las mismas entradas, ejecutan la misma lógica en paralelo y comparan sus resultados. Si se detecta una discrepancia, el controlador fuerza el estado seguro (desenergización de salidas) en menos de 25 ms. Esta operación cíclica con verificación cruzada permite alcanzar niveles de cobertura de diagnóstico (DC) superiores al 99 %, cumpliendo los requisitos de las normas IEC 61508 e ISO 13849‑1 para sistemas de seguridad funcional.

## Niveles de integridad de seguridad (SIL)

Existen cuatro niveles de integridad de seguridad (SIL 1 a SIL 4) definidos en la norma IEC 61508, donde SIL 4 corresponde al mayor grado de reducción de riesgo. La mayoría de los PLC de seguridad comerciales están certificados hasta SIL 3, compatible con el nivel de prestaciones PL e (Cat. 4) de la ISO 13849‑1. La asignación del SIL se realiza mediante análisis de riesgos, apoyándose en métodos como matrices de riesgo, gráficos de riesgo o análisis de capas de protección (LOPA), según se detalla en la guía de relés y circuitos de seguridad (plcacademy.com).

| Nivel SIL | Probabilidad de fallo peligroso en demanda (PFD) | Probabilidad de fallo peligroso por hora (PFH) | Factor de reducción de riesgo (RRF) |
|-----------|---------------------------------------------------|-----------------------------------------------|-------------------------------------|
| SIL 1     | 0.1 – 0.01                                        | 10⁻⁵ – 10⁻⁶                                   | 10 – 100                            |
| SIL 2     | 0.01 – 0.001                                      | 10⁻⁶ – 10⁻⁷                                   | 100 – 1 000                         |
| SIL 3     | 0.001 – 0.0001                                    | 10⁻⁷ – 10⁻⁸                                   | 1 000 – 10 000                      |
| SIL 4     | 0.0001 – 0.00001                                  | 10⁻⁸ – 10⁻⁹                                   | 10 000 – 100 000                    |

## Arquitectura interna

Un PLC de seguridad integra típicamente dos microcontroladores idénticos que ejecutan la misma lógica de seguridad con una frecuencia de comparación cada 1 ms. La estructura habitual es 1oo2 (uno de dos) o 2oo3 (dos de tres) para la votación de canales, garantizando tolerancia a un fallo (HFT = 1) en configuraciones SIL 3. Cada canal dispone de hardware de vigilancia (watchdog) y circuitos de prueba de impulsos que verifican la integridad del cableado y de los contactos sin comprometer el estado de las salidas. La redundancia se extiende al sistema de reloj, buses de comunicación internos y fuentes de alimentación, permitiendo que el equipo detecte el 99 % de los fallos peligrosos antes de que provoquen una salida no segura.

## Características de hardware

Los PLC de seguridad actuales, como el Schmersal PROTECT PSC1 o el ReeR MOSAIC MZERO, ofrecen configuraciones compactas o modulares con escalabilidad hasta 216 puntos de E/S (automationdirect.com). El modelo PSC1‑C‑100, por ejemplo, incorpora 14 entradas seguras, 4 salidas semiconductoras de seguridad (OSSD), 2 salidas de relé y 2 salidas de impulsos, todas certificadas hasta SIL 3 / PL e Cat. 4. A continuación se muestran especificaciones típicas de un modelo compacto.

| Parámetro | Valor típico |
|-----------|--------------|
| Entradas digitales de seguridad | 14 |
| Salidas de seguridad OSSD | 4 |
| Salidas de relé | 2 |
| Tensión de alimentación | 24 V DC |
| Temperatura de operación | 0 °C a 55 °C / 32 °F a 131 °F |
| Dimensiones (ancho × alto × profundidad) | 120 × 100 × 85 mm / 4.72 × 3.94 × 3.35 in |
| Peso | 0.5 kg / 1.1 lb |

## Programación y configuración

La programación de un PLC de seguridad se realiza mediante software gráfico de arrastrar y soltar (por ejemplo, el proporcionado por Schmersal o ReeR), que genera automáticamente el proyecto con sus parámetros de fiabilidad calculados, como PFH, DCavg y MTTFd según EN 13849‑1. El lenguaje admitido suele ser una versión restringida de diagrama de bloques funcionales (FBD) o lógica de contactos (LD), donde únicamente están disponibles bloques de función certificados (parada de emergencia, muting, control de dos manos, etc.). No se permite la edición en línea ni la descarga de cambios mientras el sistema está en modo RUN, y toda modificación requiere una comisión de validación que verifique nuevamente las funciones de seguridad.

## Aplicaciones industriales

Los PLC de seguridad se emplean en cualquier sector donde las máquinas presenten riesgos para los operarios, como prensas hidráulicas, líneas de ensamblaje robotizadas, sistemas de transporte con bandas, empaquetadoras, centros de mecanizado y excavadoras mineras. Son especialmente útiles en instalaciones que combinan múltiples funciones de seguridad (más de tres zonas) porque permiten consolidar la lógica en un solo dispositivo, eliminando la necesidad de relés de seguridad individuales y reduciendo el cableado. La metodología de evaluación de riesgos según ISO 12100, descrita en plcacademy.com, proporciona el marco para identificar los peligros y definir las funciones instrumentadas de seguridad (SIF) que debe ejecutar el PLC.

## Ventajas

La principal ventaja de un PLC de seguridad es la integración de múltiples funciones de seguridad en un único controlador, lo que simplifica el cableado, reduce el espacio en armario y facilita las tareas de diagnóstico remoto. Además, ofrecen cobertura de diagnóstico (DC) superior al 99 %, registro detallado de eventos de seguridad y la posibilidad de escalar entradas y salidas mediante módulos de expansión hasta 216 puntos. La conectividad nativa a buses de campo (Profinet, EtherCAT, Modbus TCP) elimina la necesidad de pasarelas adicionales, y el software de configuración proporciona informes automáticos de los parámetros de fiabilidad (PFH, DCavg, MTTFd) exigidos por las normas.

## Desventajas

El coste de adquisición de un PLC de seguridad es significativamente mayor que el de un relé de seguridad o un PLC estándar equivalente, debido a su arquitectura redundante y a los procesos de certificación. La programación es más restrictiva: solo se pueden utilizar bloques de función pre‑certificados y no se admiten cambios en caliente, lo que ralentiza los procesos de puesta en marcha y modificación. Asimismo, la documentación y validación requeridas por la normativa exigen personal con formación específica en seguridad funcional, incrementando los costes de ingeniería.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre un PLC normal y un PLC de seguridad?
Un PLC estándar no garantiza un comportamiento predecible cuando se produce un fallo en su hardware o software, mientras que un PLC de seguridad está diseñado con redundancia y autodiagnóstico para forzar un estado seguro (paro de la máquina) ante cualquier anomalía. Además, los PLC de seguridad están certificados bajo normas de seguridad funcional como IEC 61508 o ISO 13849‑1, lo que implica procesos de desarrollo y validación mucho más rigurosos.

### ¿Hasta qué nivel SIL puede certificarse un PLC de seguridad?
Los PLC de seguridad disponibles en el mercado alcanzan de forma habitual SIL 3 según IEC 61508 / IEC 62061, que equivale a PL e y categoría 4 según ISO 13849‑1. Alcanzar SIL 4 es extremadamente raro en controladores de seguridad de propósito general, ya que requiere redundancia cuadruplicada y se reserva para sistemas altamente específicos, como la instrumentación nuclear.

### ¿Se puede mezclar E/S estándar y de seguridad en el mismo controlador?
Sí. La mayoría de los PLC de seguridad permiten combinar en el mismo bastidor módulos de entrada/salida estándar y módulos de seguridad certificados. Las E/S estándar se gestionan desde la parte no segura del firmware, mientras que las E/S de seguridad son procesadas exclusivamente por la parte certificada, garantizando la segregación lógica. Algunos modelos, como el PSC1‑C‑100, incluyen 20 puntos de E/S configurables como entradas o salidas estándar, además de los 14 canales de seguridad.

### ¿Qué normativas rigen el diseño de un PLC de seguridad?
Las normas fundamentales son IEC 61508 (seguridad funcional de sistemas eléctricos/electrónicos programables), IEC 62061 (seguridad funcional en máquinas) e ISO 13849‑1 (partes de los sistemas de mando relativas a la seguridad). A nivel de producto, los fabricantes deben pasar la certificación por un organismo notificado como TÜV Rheinland o TÜV SÜD, que verifica el cumplimiento de los niveles de integridad de seguridad declarados.

### ¿Es obligatorio utilizar un PLC de seguridad en toda máquina industrial?
No. La obligatoriedad depende de la valoración de riesgos realizada según la directiva de máquinas 2006/42/CE. Si el riesgo residual tras aplicar medidas de protección no instrumentadas es tolerable, pueden bastar relés de seguridad electromecánicos. Sin embargo, cuando se requieren múltiples funciones de seguridad, tiempos de respuesta inferiores a 10 ms o diagnóstico centralizado, el uso de un PLC de seguridad se convierte en la solución más eficiente y, en muchos casos, en la única viable.

### ¿Qué tipos de dispositivos de seguridad pueden conectarse a un PLC de seguridad?
Un PLC de seguridad admite la conexión de una amplia variedad de dispositivos con salidas OSSD o contactos libres de potencial: paradas de emergencia, interruptores de enclavamiento, cortinas de luz de seguridad, escáneres láser, alfombras de seguridad, sensores magnéticos codificados y válvulas de seguridad neumáticas. Los modelos más avanzados también permiten monitorizar la velocidad de rotación mediante sensores inductivos o encoders, implementando funciones como velocidad segura limitada (SLS) o parada segura (STO).

## Fuentes consultadas

- **plcacademy.com**: https://www.plcacademy.com/category/safety/
- **automationdirect.com**: https://www.automationdirect.com/adc/overview/catalog/safety/safety_controllers
