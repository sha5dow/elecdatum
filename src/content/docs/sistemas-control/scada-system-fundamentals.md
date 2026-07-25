---
title: "Fundamentos de sistemas SCADA"
sidebar:
  label: "Fundamentos de sistemas SCADA"
description: "Ficha tecnica: Fundamentos de sistemas SCADA"
keywords: ["SCADA system fundamentals basics", "sistemas-control"]
category: "sistemas-control"
topic: "hmi-scada"
subcategory: "scada-system-fundamentals"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un sistema SCADA (Supervisory Control and Data Acquisition) es una arquitectura de control orientada a la supervisión de máquinas y procesos, que integra computadoras, redes de comunicación y estaciones de operación con interfaces gráficas. Su función principal es adquirir datos en tiempo real desde dispositivos de campo, como sensores y actuadores, y permitir que los operadores emitan comandos de control de alto nivel, como cambios de consigna, sin intervenir en la lógica de control en tiempo real que ejecutan PLCs o RTUs. Los sistemas SCADA se sitúan en los niveles de supervisión y monitoreo de la pirámide de automatización definida en ISA‑95/IEC 62264‑3, conectando el mundo operacional (OT) con los sistemas de información empresarial (IT). Constituyen uno de los tipos de sistemas de control industrial más extendidos, utilizados en infraestructuras críticas, plantas de proceso y redes de distribución eléctrica, entre otros.

## ¿Qué es un sistema SCADA?

SCADA significa Control de Supervisión y Adquisición de Datos. Se trata de un sistema basado en software que recopila información de dispositivos distribuidos, la presenta de forma comprensible para el operador a través de una interfaz hombre‑máquina (HMI) y permite enviar órdenes de supervisión sin manejar directamente el control de bajo nivel. El concepto central reside en que la supervisión está separada del control local: los controladores (PLC, RTU) ejecutan las funciones críticas en tiempo real y el SCADA proporciona la visibilidad global y la capacidad de intervención remota.

Un SCADA puede abarcar desde una sola estación con un PLC conectado hasta cientos de nodos repartidos en varios emplazamientos geográficos. En todos los casos, la información se organiza mediante una base de datos de tags, donde cada punto (o tag) representa una variable de instrumentación o un actuador concreto del proceso. Datos como valores de temperatura, presión, caudal o estado de válvulas se acumulan históricamente para análisis de tendencias y auditorías.

## Arquitectura y niveles funcionales

La arquitectura SCADA se describe comúnmente mediante niveles funcionales, desde los dispositivos de campo hasta la planificación corporativa. La siguiente tabla resume los cinco niveles, el equipamiento característico y su función principal:

| Nivel | Denominación | Equipamiento típico | Función principal |
|-------|--------------|---------------------|-------------------|
| 0 | Campo | Sensores de caudal, temperatura, presión; elementos finales de control (válvulas de control) | Medición y actuación directa sobre el proceso |
| 1 | Control local | Módulos de entrada/salida industrializados, PLCs, RTUs | Ejecución de lógica de control en tiempo real, comunicación con el nivel de campo |
| 2 | Supervisión | Computadoras supervisoras, servidores SCADA, estaciones HMI | Adquisición, presentación de datos y envío de comandos de supervisión |
| 3 | Control de producción | Sistemas MES (Manufacturing Execution System) | Seguimiento de producción y gestión de objetivos, sin control directo del proceso |
| 4 | Planificación empresarial | ERP (Enterprise Resource Planning) | Programación de la producción, logística y gestión de recursos corporativos |

Los niveles 1 y 2 constituyen el núcleo del SCADA. En el nivel 1, los RTU (unidades terminales remotas) son dispositivos robustecidos, a menudo alimentados por paneles solares y capaces de operar en rangos de temperatura desde **‑20 °C a +70 °C / ‑4 °F a +158 °F**, e incluso de **‑40 °C a +85 °C / ‑40 °F a +185 °F** en versiones especiales, sin equipos externos de climatización. Los PLCs, por su parte, ofrecen alta velocidad de conexión en aplicaciones de fábrica y pueden comunicarse directamente con el SCADA o a través de un RTU en entornos remotos.

## Componentes fundamentales

Los sistemas SCADA se sustentan en cuatro elementos principales que colaboran para la supervisión y el control:

| Componente | Descripción | Ejemplos / Características |
|------------|-------------|----------------------------|
| Computadoras supervisoras y HMI | Constituyen el núcleo lógico del SCADA. Ejecutan el software de servidor y las interfaces de operador. En configuraciones grandes se implementan servidores redundantes (dual‑redundantes o en espera activa) para garantizar la continuidad. | Ignition, WinCC, FactoryTalk View SE, InTouch |
| Unidades terminales remotas (RTU) | Dispositivos de campo que conectan sensores y actuadores, convierten señales a formato digital y se comunican con el sistema supervisor. Soportan programación según IEC 61131‑3 (ladder, bloques funcionales). Diseñados para ambientes hostiles. | Alimentación solar, comunicaciones por radio, GSM o satélite, rango de temperatura amplio |
| Controladores lógicos programables (PLC) | Realizan el control local de procesos con alta velocidad de ciclo. Se conectan a sensores/actuadores y, a través de redes industriales, al SCADA. En automatización de fábrica se comunican directamente; en aplicaciones remotas suelen delegar la gestión de comunicaciones en un RTU. | Plataformas de AutomationDirect, Siemens, Rockwell |
| Infraestructura de comunicaciones | Enlaza todos los elementos anteriores mediante protocolos estándar y propietarios. Incluye buses de campo, Ethernet industrial, radio, satélite y redes móviles. | OPC UA, Modbus TCP, DNP3, IEC 60870‑5 |

Las estaciones de operación presentan sinópticos basados en diagramas de tuberías e instrumentación (P&ID) o representaciones esquemáticas de las máquinas, donde el operador visualiza valores en tiempo real y puede modificar consignas. La base de datos de tags es el repositorio central que relaciona cada variable con su instrumento físico.

## Funcionamiento básico

El flujo de información en un SCADA sigue un ciclo continuo de adquisición, procesamiento, presentación y comando. Se inicia con la lectura de señales de campo por parte de los RTU o PLCs, que convierten magnitudes físicas a valores digitales. Estos datos se transmiten al servidor SCADA a través de la red de comunicaciones. El servidor los almacena en la base de datos de tags y los pone a disposición de las estaciones HMI.

El operador visualiza el estado del proceso mediante pantallas gráficas animadas, tablas de alarmas y curvas de tendencia. Cuando se requiere una intervención, el operador puede enviar un comando (por ejemplo, un nuevo valor de consigna para un lazo de control) que viaja desde la HMI al servidor y de ahí al controlador local. El lazo de control de bajo nivel (habitualmente un PID ejecutado en el PLC) sigue operando de forma autónoma; la supervisión solo modifica parámetros o activa secuencias.

Los historiadores, frecuentemente integrados en el SCADA o como módulos independientes, registran los datos con marcas de tiempo para análisis posteriores, informes de producción y cumplimiento normativo. La redundancia de servidores y rutas de comunicación asegura la disponibilidad del sistema incluso ante fallos de hardware.

## Aplicaciones típicas

Los sistemas SCADA encuentran aplicación en cualquier sector que requiera monitorización y control centralizado de procesos distribuidos:

- **Tratamiento y distribución de agua**: Control de bombas, niveles de depósitos, dosificación de productos químicos, detección de fugas en redes de tuberías.
- **Generación y distribución eléctrica**: Supervisión de subestaciones, gestión de cargas, control de interruptores y seccionadores, integración de energías renovables.
- **Petróleo y gas**: Monitorización de oleoductos y gasoductos, control de válvulas de bloqueo, compresores y estaciones de bombeo.
- **Fabricación industrial**: Supervisión de líneas de producción, control de calidad en tiempo real, integración con sistemas MES.
- **Transporte y logística**: Gestión de tráfico ferroviario, control de climatización en túneles, sistemas de peaje automático.
- **Infraestructuras críticas**: Edificios inteligentes, control de accesos, gestión energética centralizada.

En cada caso, las pantallas HMI se diseñan a medida para representar fielmente el proceso, utilizando símbolos normalizados y jerarquías de navegación que facilitan la respuesta rápida del operador.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre SCADA y DCS?

Un SCADA está orientado a la supervisión de procesos geográficamente dispersos y delega el control de bajo nivel en dispositivos locales (PLC, RTU), mientras que un sistema de control distribuido (DCS) integra control y supervisión en una arquitectura pensada para procesos continuos y centralizados, con un bus de control determinista y controladores locales normalmente propietarios.

### ¿Es lo mismo HMI que SCADA?

No. La HMI (interfaz hombre‑máquina) es únicamente el componente visual que presenta los datos al operador. El SCADA es el sistema completo que abarca servidores, comunicaciones, base de datos, lógica de supervisión y, entre sus interfaces, una o varias HMIs.

### ¿Qué protocolos de comunicación se utilizan en SCADA?

Los protocolos más extendidos son Modbus (RTU y TCP), DNP3, IEC 60870‑5, OPC UA y Profibus. El estándar OPC UA se ha impuesto como capa de interoperabilidad entre dispositivos de distintos fabricantes, mientras que DNP3 e IEC 60870‑5 dominan en el sector eléctrico y de infraestructuras.

### ¿Cómo se garantiza la disponibilidad del sistema SCADA?

Mediante redundancia en todos los niveles: servidores duales (activo‑standby), doble ruta de comunicaciones, fuentes de alimentación redundantes y RTU/PLC con capacidad de operación autónoma en caso de pérdida de comunicación con el centro de control.

### ¿Qué es un RTU y en qué se diferencia de un PLC?

Un RTU (Unidad Terminal Remota) es un dispositivo diseñado para entornos remotos hostiles, con soporte para comunicaciones inalámbricas, amplio rango de temperatura y alimentación autónoma. Un PLC (Controlador Lógico Programable) está optimizado para control local rápido, típicamente en entornos industriales protegidos, y suele depender de un RTU cuando se requiere conectividad remota compleja.

### ¿Qué papel juega el historiador en un sistema SCADA?

El historiador es un componente de software que almacena series temporales de todas las variables del proceso con alta compresión y velocidad de escritura. Permite generar informes reglamentarios, analizar tendencias, diagnosticar fallos y alimentar aplicaciones avanzadas de inteligencia empresarial.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/pfd-process-flow-diagram-d_465.html
- **plcacademy.com**: https://www.plcacademy.com/scada-system/
- **automationdirect.com**: https://www.automationdirect.com/ebooks/plc-handbook
