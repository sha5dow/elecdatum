---
title: "Guía de cédula de circuitos de tablero"
sidebar:
  label: "Guía de cédula de circuitos de tablero"
description: "Ficha tecnica: Guía de cédula de circuitos de tablero"
keywords: ["electrical panel schedule guide", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "panel-loads"
subcategory: "panel-schedule-guide"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La cédula de circuitos de un tablero es un documento técnico que registra la totalidad de los circuitos derivados alimentados desde un tablero de distribución, indicando para cada posición el número de circuito, la fase de conexión, la descripción del área servida o equipo alimentado, la carga estimada en VA y amperios, el calibre del conductor y el dispositivo de protección asociado.

## Propósito

La cédula permite verificar el balance de cargas entre fases, identificar rápidamente cada circuito durante labores de mantenimiento o ampliación y demostrar el cumplimiento de los requisitos de capacidad de corriente y coordinación de protecciones exigidos por la normativa eléctrica aplicable.

## Componentes de una cédula de circuitos

Una cédula de circuitos completa incluye los siguientes campos.

| Campo | Descripción |
| --- | --- |
| Posición en el tablero | Número físico del espacio ocupado por el interruptor (1, 2, 3…). Los interruptores bipolares ocupan dos posiciones adyacentes. |
| Número de circuito | Identificador único del circuito dentro del tablero, normalmente asignado de manera secuencial. |
| Fase | Línea de alimentación utilizada (A, B o C). En sistemas monofásicos de 120/240 V se emplean A y B. |
| Descripción | Localización o equipo servido: “Iluminación oficina 1”, “Tomacorrientes cocina”, “Unidad condensadora 2”, etc. |
| Carga estimada (VA) | Potencia aparente prevista para el circuito, en volt‑amperios. |
| Carga estimada (A) | Corriente calculada dividiendo los VA entre la tensión nominal del circuito. |
| Protección (A) | Capacidad nominal del interruptor termomagnético asignado. |
| Calibre del conductor | Designación en AWG o kcmil y su equivalente en mm². |
| Tipo de carga | Clasificación: iluminación general, tomacorrientes de uso general, equipos especiales, motores, etc. |

## Numeración de circuitos

La disposición mecánica de los interruptores en el tablero define la secuencia de numeración y la asignación de fases. En gabinetes norteamericanos los breakers se instalan en dos columnas verticales; la numeración avanza de izquierda a derecha y de arriba hacia abajo. Las filas sucesivas alternan la fase de alimentación para facilitar la conexión de interruptores bipolares o tripolares.

### Numeración en sistema monofásico (120/240 V)

| Posición | Posición | Fase A | Fase B |
| --- | --- | --- | --- |
| 1 | 2 | A | B |
| 3 | 4 | B | A |
| 5 | 6 | A | B |
| 7 | 8 | B | A |
| 9 | 10 | A | B |
| 11 | 12 | B | A |

### Numeración en sistema trifásico (120/208 V)

| Posición | Posición | Fase A | Fase B | Fase C |
| --- | --- | --- | --- | --- |
| 1 | 2 | A | B | — |
| 3 | 4 | B | C | — |
| 5 | 6 | C | A | — |
| 7 | 8 | A | B | — |
| 9 | 10 | B | C | — |
| 11 | 12 | C | A | — |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |

La asignación de fases por posición se extrae de las conexiones internas del bus del tablero. El instalador debe verificar la correspondencia exacta en la placa de datos del fabricante antes de rotular la cédula definitiva.

## Cálculo de carga

La carga conectada total de un tablero se determina sumando las potencias aparentes de todos los circuitos derivados y aplicando los factores de demanda permitidos por la norma correspondiente.

La fórmula general para la corriente total del alimentador es:

> **I_alimentador = (Σ cargas continuas × 1,25 + Σ cargas no continuas) / (V × √3 × cos φ)** 

(en sistemas trifásicos; para monofásicos se omite √3)

| Variable | Significado | Unidades habituales |
| --- | --- | --- |
| I_alimentador | Corriente de diseño del alimentador principal | A |
| Σ cargas continuas | Suma de cargas que operan 3 h o más | VA |
| 1,25 | Factor de seguridad para cargas continuas (125 %) | — |
| Σ cargas no continuas | Suma de cargas de operación intermitente | VA |
| V | Tensión nominal entre fases | 208 V, 480 V… |
| √3 | Raíz cuadrada de 3 (1,732) para sistemas trifásicos | — |
| cos φ | Factor de potencia promedio de la instalación | 0,8 a 1,0 |

Los conductores y el interruptor principal se dimensionan para una capacidad no menor que el valor de I_alimentador. La cédula debe reflejar el valor calculado en el encabezado del tablero junto con la capacidad del interruptor principal y la sección del alimentador.

## Ejemplo de cédula de circuitos

A continuación se muestra una cédula parcial para un tablero monofásico de 120/240 V, 200 A, con 12 circuitos.

| N.° | Fase | Descripción | Carga (VA) | Corriente (A) | Protección (A) | Calibre AWG | Calibre mm² |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | A | Iluminación sala | 900 | 7,5 | 15 | 14 | 2,08 |
| 2 | B | Tomacorrientes dormitorio 1 | 1500 | 12,5 | 20 | 12 | 3,31 |
| 3 | B | Iluminación cocina | 1200 | 10,0 | 15 | 14 | 2,08 |
| 4 | A | Tomacorrientes sala | 1800 | 15,0 | 20 | 12 | 3,31 |
| 5 | A | Lavadora | 1500 | 12,5 | 20 | 12 | 3,31 |
| 6 | B | Secadora (240 V) | 5000 | 20,8 | 30 | 10 | 5,26 |
| 7 | B | Tomacorrientes baño | 1000 | 8,3 | 20 | 12 | 3,31 |
| 8 | A | Iluminación exterior | 800 | 6,7 | 15 | 14 | 2,08 |
| 9 | A | Refrigerador | 1200 | 10,0 | 20 | 12 | 3,31 |
| 10 | B | Reserva | — | — | 20 | 12 | 3,31 |
| 11–12 | A–B | Aire acondicionado central 240 V | 7200 | 30,0 | 40 | 8 | 8,37 |

La carga total conectada es 21 600 VA, que en 240 V equivale a 90 A. Aplicando los factores de demanda correspondientes a una vivienda unifamiliar, el alimentador principal se dimensiona con conductores de 2/0 AWG (67,4 mm²) y protección principal de 200 A.

## Errores comunes

- No documentar la fase real de cada circuito: se asume una alternancia teórica que no siempre coincide con el bus instalado.
- Omitir los circuitos de reserva en la cédula, lo que impide conocer la capacidad disponible para futuras ampliaciones.
- No actualizar la cédula después de modificaciones en la instalación, creando discrepancias peligrosas entre lo documentado y lo existente.
- Utilizar corrientes nominales de los equipos en lugar de las cargas reales en VA, subestimando el calentamiento de conductores.
- Exceder el límite de circuitos permitido por el fabricante del tablero sin verificar la densidad de potencia ni el balance de fases.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la capacidad máxima de circuitos en un panel residencial típico?

Un panel residencial monofásico de 200 A puede alojar hasta 42 polos de interruptores según la edición 2020 del National Electrical Code, aunque muchos paneles modernos se fabrican con 30 a 40 espacios físicos, lo que permite 60 a 80 circuitos si se emplean interruptores tándem donde el fabricante lo autoriza.

### ¿Cuánto debe ser el balance máximo entre fases en un tablero trifásico?

La corriente entre las fases más y menos cargadas no debe diferir en más del 20 % de la corriente promedio de las tres fases en condiciones de plena carga; idealmente se busca una desviación inferior al 10 %.

### ¿Qué carga en VA se reserva típicamente para un circuito de iluminación de uso general?

Cada circuito de iluminación de uso general en una vivienda se dimensiona para una carga máxima de 1500 VA en áreas comunes, aunque en habitaciones individuales se suelen proyectar 900 a 1200 VA para mantener holgura.

### ¿Cuál es la corriente mínima de cortocircuito que debe registrar la cédula de un tablero industrial?

La cédula debe incluir la corriente de cortocircuito disponible en el punto de instalación; en tableros industriales alimentados por transformadores de 500 kVA o más, este valor suele superar los 22 000 A simétricos.

### ¿Cada cuántos años se recomienda revisar y actualizar la cédula de circuitos?

La cédula debe revisarse cada 5 años como parte del mantenimiento eléctrico predictivo, o inmediatamente después de cualquier ampliación que añada al menos 3 circuitos nuevos.

### ¿Qué porcentaje de reserva se acostumbra dejar en un tablero de distribución comercial?

Se recomienda reservar un 25 % de los espacios del tablero para circuitos futuros, además de dimensionar el alimentador principal con al menos un 20 % de capacidad adicional sobre la carga calculada.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/basic-electrical/
