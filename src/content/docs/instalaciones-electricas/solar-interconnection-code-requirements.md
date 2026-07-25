---
title: "Requisitos de interconexión de sistemas solares"
sidebar:
  label: "Requisitos de interconexión de sistemas solares"
description: "Ficha tecnica: Requisitos de interconexión de sistemas solares"
keywords: ["solar PV interconnection code requirements NEC 690", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "solar-installation"
subcategory: "solar-interconnection-code"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los requisitos de interconexión de sistemas solares fotovoltaicos son el conjunto de especificaciones técnicas, procedimientos y condiciones que establecen los códigos eléctricos nacionales y las compañías distribuidoras para conectar un generador solar a la red de baja o media tensión. Su objetivo principal es salvaguardar a las personas y los bienes de los riesgos derivados del uso de la electricidad, tal como exige el NEC en su sección 90.1(A). En el ámbito de la normativa estadounidense, el Artículo 690 del National Electrical Code (NEC) y el estándar IEEE 1547 constituyen el marco de referencia obligatorio, definiendo desde la puesta a tierra de los módulos hasta la respuesta ante eventos de la red.

## Normas de referencia
Las normas que rigen la interconexión se apoyan en tres documentos fundamentales para el ámbito de la instalación eléctrica:

| Norma | Descripción |
|---|---|
| NEC Artículo 690 (NFPA 70) | Requisitos de seguridad eléctrica para sistemas fotovoltaicos. Incluye la Parte V — Puesta a tierra y unión equipotencial (Sección 690.43). |
| IEEE 1547‑2018 | Estándar de interconexión de recursos energéticos distribuidos con la red. Define parámetros de tensión, frecuencia y calidad de energía. |
| UL 1741 / UL 1741 SA | Estándar de seguridad para inversores, convertidores y controladores de sistemas fotovoltaicos, requerido por las compañías eléctricas. |

## Clasificación de los sistemas de interconexión
Atendiendo a su relación con la red de distribución, los sistemas solares se agrupan en tres categorías básicas que determinan las exigencias de interconexión:

- **Sistema interconectado a red (grid‑tied)**. Opera en paralelo con la red eléctrica, sin almacenamiento. El inversor interactivo sincroniza con la red y cesa la inyección en ausencia de ésta (anti‑islanding).
- **Sistema aislado (off‑grid)**. No se conecta a la red de suministro público. Incluye banco de baterías y regulador de carga; no requiere acuerdo de interconexión pero sí cumplir el NEC Artículo 690.
- **Sistema híbrido**. Combina la conexión a red con almacenamiento local. Exige cumplir simultáneamente los requisitos de los sistemas grid‑tied y los de almacenamiento de energía.

## Requisitos de conexión a la red
El diseño del punto de interconexión debe satisfacer las siguientes exigencias del NEC Artículo 690 y del IEEE 1547, entre las que destacan las limitaciones de tensión, la capacidad de los conductores y la puesta a tierra.

### Tensión máxima del sistema
La tensión de corriente continua del generador FV no puede superar los valores indicados en la tabla, según el tipo de edificio y la presencia de personal calificado.

| Tipo de instalación | Tensión máxima CC |
|---|---|
| Viviendas unifamiliares y bifamiliares | 600 V |
| Edificios comerciales/industriales con acceso a personal calificado | 1000 V |
| Instalaciones con control de acceso exclusivo (grandes plantas) | 1500 V |

### Dimensionamiento de los conductores
La capacidad de corriente de los conductores del sistema FV debe ser, como mínimo, el 156 % de la corriente de cortocircuito del módulo (I<sub>sc</sub>). Esta exigencia se traduce en la siguiente expresión, que incorpora factores de seguridad acumulados:

> **I<sub>COND</sub> ≥ 1,25 × 1,25 × I<sub>sc STC</sub> = 1,56 × I<sub>sc STC</sub>**

Donde:
- **I<sub>COND</sub>** – Corriente admisible del conductor (A)
- **I<sub>sc STC</sub>** – Corriente de cortocircuito del módulo en condiciones estándar (A)

### Conductor de puesta a tierra del equipo (EGC)
El equipo de puesta a tierra de los sistemas FV sigue las reglas generales del NEC 250.122. La sección 690.43 del NEC exige que todos los marcos metálicos de los módulos, los gabinetes y las canalizaciones que contengan conductores del sistema FV estén conectados al conductor de puesta a tierra del equipo. La tabla siguiente muestra el calibre mínimo del conductor de cobre en función del dispositivo de protección contra sobrecorriente del circuito.

| Dispositivo de sobrecorriente (A) | Calibre mínimo EGC (cobre) | Área de sección transversal equivalente |
|---|---|---|
| 15 | 14 AWG | 2,08 mm² / 0.0032 in² |
| 20 | 12 AWG | 3,31 mm² / 0.0051 in² |
| 30 | 10 AWG | 5,26 mm² / 0.0082 in² |
| 60 | 8 AWG | 8,37 mm² / 0.0130 in² |
| 100 | 6 AWG | 13,3 mm² / 0.0206 in² |
| 200 | 4 AWG | 21,2 mm² / 0.0328 in² |

## Dispositivos de protección y control
Para garantizar la seguridad y la calidad del suministro en el punto de interconexión, el NEC y el IEEE 1547 exigen la implementación de las siguientes protecciones:

- **Protección de falla a tierra (GFP)** – Requerida por NEC 690.5 para arreglos montados en edificios, con detector que abra automáticamente el circuito si la corriente de fuga supera **1 A**.
- **Protección de falla de arco (AFCI)** – NEC 690.11 exige protección contra arcos eléctricos en circuitos CC de más de **80 V**.
- **Desconexión rápida (Rapid Shutdown)** – NEC 690.12 obliga a limitar la tensión de los conductores dentro del arreglo a menos de **80 V** en menos de **30 s**, y a menos de **30 V** en 30 s en los conductores de control, mediante interruptores externos al arreglo.
- **Protección de sobrecorriente** – NEC 690.9 exige dispositivos capaces de soportar el **156 %** de la corriente de cortocircuito del arreglo.
- **Protección contra sobretensiones (SPD)** – Recomendada para proteger inversores y electrónica sensible, especialmente en zonas con alta incidencia de descargas atmosféricas.

*Nota: Los equipos de montaje utilizados para fijar y conectar los marcos de los módulos a las estructuras metálicas de soporte deben estar listados, etiquetados e identificados para la unión equipotencial (NEC 690.43(A)). Cuando las estructuras metálicas de soporte se emplean como conductores de puesta a tierra, es obligatorio instalar puentes de unión listados entre las secciones metálicas separadas (NEC 690.43(B)).*

## Procedimiento de interconexión
La conexión de un sistema solar a la red se desarrolla siguiendo una secuencia regulada por la compañía eléctrica local y supone:

1. **Solicitud de interconexión** – Presentación del diagrama unifilar y las características del sistema (potencia, tensión, modelo del inversor certificado UL 1741).
2. **Revisión técnica** – La compañía verifica que la capacidad de la red y los parámetros del sistema sean compatibles. Aprobado el estudio, se emite el permiso de interconexión.
3. **Inspección eléctrica** – La autoridad competente comprueba el cumplimiento del NEC (puesta a tierra, protecciones, etiquetado, desconexión rápida).
4. **Pruebas de puesta en marcha** – Verificación de la tensión en circuito abierto (V<sub>oc</sub>), corriente de cortocircuito (I<sub>sc</sub>), sincronización del inversor y ensayo de anti‑islanding. Superadas las pruebas, se autoriza la operación en paralelo.

## Pruebas y verificación
Antes de energizar el sistema y durante su aceptación, se realizan las siguientes comprobaciones, exigidas por la práctica del NEC 690 y los criterios de la compañía distribuidora:

- **Resistencia de aislamiento** – Se mide con un medidor de 500 V CC. El valor mínimo aceptable es **1 MΩ** para todo el arreglo, aunque se recomienda > **20 MΩ** en condiciones secas. Cada conductor activo frente a tierra debe superar el valor de **40 MΩ** por módulo.
- **Continuidad del conductor de puesta a tierra** – Resistencia inferior a **0,1 Ω** entre cualquier marco de módulo y la barra principal de tierra.
- **Polaridad** – Verificación de que todos los conductores positivos y negativos coinciden con las marcas del inversor.
- **Funcionamiento del inversor** – Secuencia de arranque, sincronización con la red y comprobación de la desconexión por pérdida de red (anti‑islanding) en menos de **2 s**.
- **Protección de falla a tierra** – Simulación de fuga de **300 mA** para confirmar la apertura del circuito.

## Mantenimiento
La conservación del sistema en condiciones seguras de interconexión contempla:

- Limpieza periódica de los módulos con agua desmineralizada y paño suave para evitar pérdidas superiores al **5 %** de la potencia nominal.
- Inspección visual trimestral de conexiones, cableado y cajas de paso, prestando especial atención a signos de degradación en los conductores expuestos (agrietamiento a **90 °C / 194 °F**).
- Reapriete de bornes de potencia al menos una vez al año, con los pares de apriete especificados por el fabricante.
- Monitoreo continuo de la producción y comparación con los valores de diseño, verificando que la diferencia no exceda el **10 %** respecto a la estimación teórica.

## Preguntas frecuentes (FAQ)
### ¿Cuál es la tensión máxima de CC permitida en sistemas residenciales según el NEC?
   La tensión máxima en corriente continua para viviendas unifamiliares y bifamiliares está limitada a **600 V**. En edificios no residenciales con personal calificado puede alcanzar **1000 V**, mientras que instalaciones con control de acceso exclusivo admiten hasta **1500 V**.

### ¿Qué calibre mínimo de conductor de puesta a tierra de equipo se requiere para un sistema con un interruptor principal de 60 A?
   Para un dispositivo de sobrecorriente de **60 A**, el NEC 250.122 exige un conductor de cobre de al menos **8 AWG**, equivalente a **8,37 mm² / 0.0130 in²**.

### ¿A qué distancia máxima debe ubicarse el interruptor de desconexión CC respecto al punto de entrada al edificio?
   Según el NEC 690.13, el medio de desconexión CC no debe superar una distancia de **1,8 m / 6 ft** del punto donde los conductores del arreglo penetran en la edificación.

### ¿Cuál es el valor mínimo de resistencia de aislamiento en un sistema fotovoltaico recién instalado?
   La práctica común de puesta en marcha exige que el valor medido con **500 V CC** no sea inferior a **1 MΩ** para el arreglo completo. Idealmente, cada módulo debe mostrar más de **40 MΩ** en condiciones secas.

### ¿Qué temperatura máxima soporta un conductor fotovoltaico tipo USE‑2 en ambientes húmedos y secos?
   Los conductores USE‑2 están diseñados para operar hasta **90 °C / 194 °F** en ambiente seco y **75 °C / 167 °F** en ambiente húmedo, lo que los hace aptos para intemperie.

### ¿Qué factor de sobrecorriente deben soportar los conductores de un sistema fotovoltaico según el NEC?
   El conductor debe dimensionarse para, como mínimo, **1,56 veces** la corriente de cortocircuito I<sub>sc</sub> del módulo en condiciones STC, es decir, el **156 %** de su capacidad nominal, para absorber condiciones de alta irradiancia y fallas.

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/files/PDF/20_SOLAR_690.43.pdf
- **electrical4u.com**: https://www.electrical4u.com/solar-cell/
