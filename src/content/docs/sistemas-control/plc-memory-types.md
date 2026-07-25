---
title: "Tipos de memoria en PLC"
sidebar:
  label: "Tipos de memoria en PLC"
description: "Ficha tecnica: Tipos de memoria en PLC"
keywords: ["PLC memory types RAM ROM EEPROM", "sistemas-control"]
category: "sistemas-control"
topic: "plc-basics"
subcategory: "plc-memory-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La memoria de un controlador lógico programable (PLC) es el componente electrónico que almacena el sistema operativo, el programa de usuario y los datos de trabajo. Un PLC típico puede integrar desde 64 kB / 65 536 bytes hasta varios megabytes / varios millones de bytes de memoria total, repartida entre distintas tecnologías de almacenamiento. Conocer los tipos de memoria que emplea un PLC —RAM, ROM y EEPROM— es fundamental para dimensionar la aplicación, gestionar la persistencia de datos y planificar el mantenimiento.

## Tipos de memoria en PLC
Se distinguen por el número de ciclos de escritura que soportan: la RAM admite lecturas y escrituras ilimitadas, mientras que una EEPROM moderna alcanza una vida útil de 1 000 000 / 1×10⁶ ciclos de programación/borrado. A continuación se describe cada tipo con sus características técnicas.

## Memoria RAM (Random Access Memory)
La memoria RAM en un PLC tiene una capacidad típica que oscila entre 256 kB / 262 144 bytes y 16 MB / 16 777 216 bytes y se borra completamente al desconectar la alimentación. Se emplea como memoria de trabajo durante la ejecución del programa, almacenando los valores temporales de entradas, salidas, temporizadores, contadores y flags. Es volátil, de alta velocidad de lectura/escritura y se direcciona byte a byte. En muchos PLC, la RAM se complementa con una pila o batería de litio que mantiene los datos tras un corte de energía, convirtiéndola en *RAM respaldada por batería*.

## Memoria ROM (Read-Only Memory)
La ROM aloja entre 64 kB / 65 536 bytes y 1 MB / 1 048 576 bytes del código del sistema operativo del PLC, grabado de fábrica de forma indeleble. También puede contener rutinas de arranque, autodiagnóstico (POST) y bootloader. Al ser una memoria de solo lectura, no puede ser modificada por el usuario ni por el programa de aplicación, lo que garantiza la integridad del firmware. Su contenido se mantiene sin alimentación y es inmune a fallos de tensión.

## Memoria EEPROM (Electrically Erasable Programmable Read-Only Memory)
Una EEPROM típica de PLC puede almacenar desde 2 kB / 2 048 bytes hasta 512 kB / 524 288 bytes del programa de usuario, parámetros de configuración y tablas de datos. Su tecnología de transistor de puerta flotante permite el borrado y la reprogramación eléctrica byte a byte o por páginas, alcanzando hasta 1 000 000 / 1×10⁶ ciclos de escritura en modelos actuales. La información permanece sin tensión de alimentación. A diferencia de la ROM, la EEPROM puede ser actualizada en campo mediante software de programación sin necesidad de retirar el dispositivo. En PLC modernos, la tendencia es emular EEPROM con memoria flash de mayor densidad y menor coste.

## Comparativa de características principales

| Tipo | Volatilidad | Capacidad típica | Ciclos de escritura | Uso principal |
|------|-------------|------------------|---------------------|---------------|
| RAM | Volátil (se borra al apagar) | 256 kB / 262 144 B a 16 MB / 16 777 216 B | Ilimitado / ∞ | Datos de trabajo, variables de proceso |
| ROM | No volátil | 64 kB / 65 536 B a 1 MB / 1 048 576 B | 1 vez (grabación de fábrica) | Sistema operativo, firmware, bootloader |
| EEPROM | No volátil | 2 kB / 2 048 B a 512 kB / 524 288 B | 1 000 000 / 1×10⁶ (hasta 1 000 000) | Programa de usuario, parámetros, calibraciones |

## Gestión de memoria en la ejecución del programa
El mapa de memoria de un PLC secciona el espacio de direcciones en áreas funcionales, cuyo tamaño influye en la capacidad de la aplicación. En un controlador de gama media se pueden encontrar las siguientes zonas típicas:

| Área de memoria | Rango de direcciones (ej.) | Tamaño (palabras / bytes) |
|-----------------|----------------------------|---------------------------|
| Imagen de entradas (I) | I0 – I2047 | 2048 palabras / 4096 bytes |
| Imagen de salidas (Q) | Q0 – Q2047 | 2048 palabras / 4096 bytes |
| Marcas internas (M) | M0 – M8191 | 8192 palabras / 16384 bytes |
| Registros de datos (V) | V0 – V32767 | 32768 palabras / 65536 bytes |
| Temporizadores (T) | T0 – T255 | 256 estructuras / ~6 144 bytes |
| Contadores (C) | C0 – C255 | 256 estructuras / ~6 144 bytes |

La RAM de trabajo aloja los valores dinámicos de estas áreas durante el ciclo de scan. Las versiones retentivas (batería o supercondensador) conservan los registros de datos tras un apagado, mientras que las posiciones no retentivas se reinician. El sistema operativo gestiona la copia del programa desde la EEPROM a la RAM en el arranque, y muchos PLC permiten volcar tablas de recetas hacia o desde la EEPROM mediante instrucciones del programa.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/technical-terms-fluid-mechanics-d_181.html
- **plcacademy.com**: https://www.plcacademy.com/plc-hardware-components/
- **automationdirect.com**: https://www.automationdirect.com/do-more/h2/software/memory-management
