---
title: "Interruptor de transferencia automática ATS"
sidebar:
  label: "Interruptor de transferencia automática ATS"
description: "Ficha tecnica: Interruptor de transferencia automática ATS"
keywords: ["automatic transfer switch ATS specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "generators"
subcategory: "automatic-transfer-switch"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un interruptor de transferencia automática (ATS, por sus siglas en inglés) es un dispositivo de conmutación eléctrica que transfiere la alimentación de una carga entre dos fuentes de energía (normal y de respaldo) de forma automática ante la detección de una falla. El ATS se instala principalmente con generadores de emergencia para garantizar la continuidad del suministro eléctrico en aplicaciones residenciales, comerciales e industriales.

## Partes de un interruptor de transferencia automática
| Componente | Función |
|---|---|
| Mecanismo de conmutación | Conjunto de contactos principales que realizan la transferencia física entre las fuentes |
| Controlador lógico | Microprocesador o relé programable que monitorea tensión, frecuencia y estado de las fuentes, y emite las órdenes de arranque/paro y conmutación |
| Relevador de supervisión de red | Detecta la presencia, pérdida o retorno de la tensión de la fuente principal dentro de los umbrales programados |
| Actuador motorizado o bobina de disparo | Elemento que ejecuta mecánicamente el movimiento de los contactos bajo la orden del controlador |
| Contactos auxiliares | Proporcionan señales de estado para señalización remota, enclavamientos o arranque del generador |
| Interfaz de comunicación | Permite la integración con sistemas de gestión de edificios (BMS) o SCADA mediante protocolos como Modbus, Profibus o Ethernet |

## Principio de funcionamiento
El ATS monitorea continuamente la tensión y la frecuencia de la fuente principal. Cuando los parámetros salen de los límites establecidos (subtensión, sobretensión, pérdida de fase), el controlador envía una señal de arranque al grupo electrógeno de respaldo. Una vez que el generador alcanza tensión y frecuencia estables y dentro de los valores nominales, el interruptor transfiere la carga mediante un mecanismo de ruptura antes de cierre (transición abierta) o cierre antes de ruptura (transición cerrada) según su tipo. Al retornar la red principal dentro de parámetros aceptables durante un tiempo mínimo de estabilización, el ATS reconecta la carga a la red y, tras un período de enfriamiento sin carga, ordena la parada del generador.

La condición de sincronización para una transferencia en transición cerrada se cumple cuando:
> **|ΔU| < 5 %**, **|Δf| < 0,2 Hz** y **|Δφ| < 5°**

## Tipos de interruptores de transferencia automática
| Tipo | Descripción | Transición típica | Aplicación principal |
|---|---|---|---|
| ATS de transición abierta (break‑before‑make) | Interrumpe la conexión con la primera fuente antes de establecer el contacto con la segunda | < 167 ms / 0.167 s | Residencial, pequeños comercios, cargas generales |
| ATS de transición cerrada (make‑before‑break) | Conecta momentáneamente ambas fuentes en paralelo (si están sincronizadas) para transferir sin microcorte | Superposición < 100 ms / 0.1 s | Centros de datos, hospitales, procesos industriales con cargas sensibles |
| Interruptor de transferencia estático (STS) | Utiliza semiconductores de potencia (SCR) para conmutar entre dos fuentes en un tiempo extremadamente corto | < 4 ms / 0.004 s | Aplicaciones críticas con microprocesadores, salas de servidores, UPS industriales |
| ATS con carga suave (soft‑loading) | Variante del ATS de transición cerrada que permite la transferencia progresiva y sincronización con la red para reducir picos de demanda | Superposición controlada, ciclo programable | Grandes instalaciones con generación propia, sistemas de gestión de carga |

## Características técnicas
| Parámetro | Valor típico |
|---|---|
| Corriente nominal de servicio (In) | 40 A / 0.04 kA (residencial) hasta 5000 A / 5 kA (industrial) |
| Tensión nominal de funcionamiento (Ue) | 120/208 V / 0.12‑0.208 kV, 230/400 V / 0.23‑0.4 kV, 480 V / 0.48 kV |
| Frecuencia nominal | 50 Hz / 0.05 kHz o 60 Hz / 0.06 kHz |
| Tiempo de conmutación en transición abierta | < 167 ms / 0.167 s |
| Tiempo de superposición en transición cerrada | < 100 ms / 0.1 s |
| Diferencia de tensión admisible para sincronización (ΔU) | ±5 % / ±0.05 pu |
| Diferencia de frecuencia admisible para sincronización (Δf) | ±0.2 Hz / 0.0002 kHz |
| Ángulo de fase máximo para sincronización | ±5° |
| Número de maniobras mecánicas (vida útil) | ≥ 10 000 operaciones |
| Grado de protección (IEC 60529) | IP20 a IP54 típicos |
| Temperatura ambiente de operación | -5 °C / 23 °F a +40 °C / 104 °F (estándar); bajo pedido hasta -25 °C / -13 °F |

## Aplicaciones
Los interruptores de transferencia automática se emplean en:
- Residencias con generador de respaldo para cargas esenciales (iluminación, refrigeración, calefacción).
- Establecimientos comerciales que requieren continuidad en equipos de punto de venta, refrigeración o servidores locales.
- Hospitales y centros de salud, donde la alimentación ininterrumpida es crítica para equipos de soporte vital y quirófanos.
- Centros de datos y salas de telecomunicaciones, con ATS de transición cerrada o estática para evitar microcortes.
- Plantas industriales con procesos continuos (químicas, siderúrgicas, alimentarias) que instalan ATS de alta corriente.
- Sistemas de bombeo de agua potable y aguas residuales donde la interrupción prolongada es inaceptable.

## Mantenimiento
Las operaciones de mantenimiento preventivo recomendadas cada 6 meses o 500 maniobras incluyen:
- Verificación visual del estado de contactos, cables y bornes, reapriete de conexiones.
- Medición de resistencia de aislamiento y de contacto con microóhmetro.
- Comprobación funcional de la lógica de arranque/paro del generador, transferencia en ambos sentidos y rearme automático.
- Limpieza del interior del gabinete y filtros de ventilación con aire comprimido seco o aspiradora.
- Revisión de los umbrales programados de subtensión, sobretensión, frecuencia y temporizaciones.
- Prueba de transferencia bajo carga en condiciones reales para verificar el correcto funcionamiento de todo el sistema.

## Ventajas y desventajas
| Ventajas | Desventajas |
|---|---|
| Automatización total: no requiere intervención humana durante un corte de red | Costo inicial superior al de un conmutador manual |
| Rápida respuesta: tiempos de conmutación inferiores a 167 ms / 0.167 s en transición abierta | Requiere mantenimiento periódico para asegurar la fiabilidad de los contactos y la electrónica |
| Protección contra realimentación a la red, garantizando la seguridad del personal de mantenimiento de la compañía eléctrica | La transición abierta produce un microcorte que puede afectar equipos electrónicos sensibles si no se emplea ATS de transición cerrada o un UPS auxiliar |
| Flexibilidad: posibilidad de programar temporizaciones, priorizar circuitos y realizar deslastre de cargas en modelos avanzados | La transición cerrada necesita sincronización de fuentes y aprobación de la empresa distribuidora, incrementando la complejidad |
| Integración con sistemas de telegestión y protocolos de comunicación para supervisión remota | Los ATS estáticos, aunque ofrecen conmutación sin interrupción, presentan pérdidas por conducción en los semiconductores y requieren disipación térmica |

## Preguntas frecuentes (FAQ)
### ¿Cuál es el tiempo típico de conmutación de un ATS de transición abierta?
El tiempo habitual de conmutación en un interruptor de transferencia automática de transición abierta es inferior a 167 ms (0.167 s), suficiente para que la mayoría de las cargas no pierdan su estado operativo.

### ¿Qué diferencia de tensión se permite para una transferencia cerrada?
Para que un ATS de transición cerrada opere de forma segura, la diferencia de tensión entre ambas fuentes no debe superar el 5 %, condición monitorizada por el controlador antes de autorizar la superposición.

### ¿Cuántos ciclos de maniobra soporta un ATS industrial típico?
Un ATS industrial está diseñado para superar los 10 000 ciclos de operación mecánica con los contactos en vacío, y alrededor de 5 000 ciclos con carga nominal según los ensayos de vida eléctrica.

### ¿Cuál es la corriente máxima que puede manejar un ATS en baja tensión?
Los ATS normalizados en baja tensión alcanzan corrientes de servicio de hasta 5000 A (5 kA) en ejecuciones de bastidor abierto, adecuadas para servicios principales de grandes instalaciones.

### ¿A qué temperatura ambiente operan los ATS estándar?
La mayoría de los ATS comerciales operan de forma confiable en el rango de temperatura ambiente de -5 °C (23 °F) a +40 °C (104 °F); existen versiones especiales para -25 °C (-13 °F) garantizando el funcionamiento del motor de maniobra y la electrónica.

### ¿Cuánto dura la señal de estabilización para el retorno a la red principal?
El temporizador de retorno a la red principal se programa típicamente entre 30 s y 15 min para asegurar que la energía de la compañía se ha restablecido de forma estable antes de transferir la carga de regreso.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/piping-hvac-abbreviations-d_1694.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-bus-system-and-electrical-substation-layout/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
