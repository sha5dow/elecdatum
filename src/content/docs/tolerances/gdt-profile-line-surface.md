---
title: "GDT Perfil de línea y superficie"
sidebar:
  label: "GDT Perfil de línea y superficie"
description: "Ficha tecnica: GDT Perfil de línea y superficie"
keywords: ["GDT profile line surface tolerance", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "profile"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Descripción general
La tolerancia de perfil de línea y superficie define una zona de tolerancia uniforme que sigue la forma nominal de una característica. Se utiliza un control geométrico para limitar la desviación de la superficie real respecto a la geometría teórica exacta definida por cotas básicas. La zona de tolerancia está formada por dos contornos equidistantes —dos curvas para el perfil de línea y dos superficies para el perfil de superficie— separados por el valor de tolerancia total. Este control puede aplicarse a cualquier forma, incluyendo contornos abiertos y cerrados, y es el único medio para controlar simultáneamente forma, orientación y, cuando se utilizan referencias datum, también la localización de una característica.

## Símbolos y especificación
El marco de control de características para perfil de línea se compone del símbolo de una curva en forma de arco (⌒) seguido del valor de tolerancia y, opcionalmente, referencias datum. Para perfil de superficie el símbolo es un arco cerrado (⌓). La tolerancia siempre se interpreta como una zona bilateral de igual distribución a menos que se indique lo contrario.

| Elemento | Descripción |
|---|---|
| Símbolo de perfil de línea | ⌒ |
| Símbolo de perfil de superficie | ⌓ |
| Modificador de zona | Ⓤ (unilateral, ASME) / UZ (ISO) para indicar distribución desigual |
| Zona de tolerancia por defecto | Bilateral igual, centrada en el perfil verdadero |

## Tablas de tolerancias por grado de fabricación
La tabla siguiente relaciona los procesos de fabricación más comunes con el grado de tolerancia IT que pueden alcanzar en condiciones normales, y traduce ese grado a una tolerancia de perfil típica para una dimensión nominal entre 18 mm y 30 mm (0.71 in a 1.18 in). Los valores se basan en las tolerancias fundamentales ISO para ese rango de tamaño.

| Proceso | Grados IT típicos | Tolerancia de perfil (mm / in) |
|---|---|---|
| Lapeado y bruñido | IT4 – IT5 | 0,006 mm – 0,009 mm / 0.00024 in – 0.00035 in |
| Rectificado cilíndrico | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Rectificado superficial | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Torneado con diamante | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Mandrinado con diamante | IT5 – IT6 | 0,009 mm – 0,013 mm / 0.00035 in – 0.00051 in |
| Brochado | IT6 – IT7 | 0,013 mm – 0,021 mm / 0.00051 in – 0.00083 in |
| Escariado | IT7 – IT8 | 0,021 mm – 0,033 mm / 0.00083 in – 0.00130 in |
| Torneado | IT8 – IT10 | 0,033 mm – 0,084 mm / 0.00130 in – 0.00331 in |
| Mandrinado | IT8 – IT10 | 0,033 mm – 0,084 mm / 0.00130 in – 0.00331 in |
| Fresado | IT9 – IT11 | 0,052 mm – 0,130 mm / 0.00205 in – 0.00512 in |
| Cepillado y limado | IT10 – IT11 | 0,084 mm – 0,130 mm / 0.00331 in – 0.00512 in |
| Taladrado | IT11 – IT12 | 0,130 mm – 0,210 mm / 0.00512 in – 0.00827 in |

Cuando el perfil se aplica a una superficie grande o a una pieza compleja, se debe considerar el tamaño nominal para seleccionar el grado IT adecuado, ya que las tolerancias absolutas aumentan con la dimensión.

## Interpretación según ASME e ISO
Tanto ASME Y14.5 como ISO 1101 comparten el concepto fundamental de zona de tolerancia de perfil, aunque difieren en la notación de distribuciones desiguales de tolerancia y en algunos modificadores.

| Aspecto | ASME Y14.5 | ISO 1101 |
|---|---|---|
| Tolerancia por defecto | Bilateral igual | Bilateral igual |
| Distribución unilateral | Modificador Ⓤ seguido de un valor que indica el espesor en la dirección del material sobrante | Símbolo UZ seguido del valor de la zona en una dirección y el total |
| Indicación de "todo alrededor" | Círculo en la intersección del líder | Igual, con opción de "toda la pieza" (doble círculo) |
| Referencias datum en perfil sin datum | Solo controla forma | Solo controla forma |
| Aplicación a una superficie compuesta | Se permite con "all over" o con perfiles múltiples | Perfil de superficie puede ser combinado con "CZ" (zona común) para múltiples superficies |

## Ejemplos de aplicación real
- Leva de un árbol de levas: un perfil de superficie con tolerancia 0,1 mm / 0.004 in controla la forma funcional que determina el diagrama de apertura de válvulas, referenciado a los muñones del eje.
- Contorno de ala de avión: el perfil aerodinámico se controla con una tolerancia de perfil de línea de 0,5 mm / 0.020 in para garantizar un flujo laminar y el rendimiento previsto, sin referencias datum en las secciones transversales individuales.
- Junta de estanqueidad en carcasa de bomba: el perfil de superficie con 0,05 mm / 0.002 in sobre la brida asegura la compresión uniforme del sello tórico, referenciado a la superficie de montaje.
- Panel de carrocería de automóvil: se aplica perfil de línea con valor de 1,5 mm / 0.06 in a lo largo del borde de la aleta para controlar la apariencia y el ajuste con las piezas adyacentes, utilizando el sistema de referencias del vehículo.
- Molde de inyección: el perfil de superficie de la cavidad con 0,03 mm / 0.0012 in garantiza la geometría 3D precisa de la pieza plástica, referenciado a los planos de cierre del molde.

## Preguntas frecuentes (FAQ)
- **¿Qué tolerancia de perfil se puede esperar de un proceso de rectificado superficial?** Un rectificado superficial típico puede mantener un perfil dentro de 0,013 mm / 0.00051 in (grado IT6) para dimensiones nominales entre 18 mm y 30 mm / 0.71 in–1.18 in, aunque en condiciones óptimas se puede alcanzar 0,009 mm / 0.00035 in.
- **¿Cuándo se utiliza el perfil de línea en lugar del perfil de superficie?** El perfil de línea se aplica a secciones transversales individuales de una característica, como el borde de una pieza de chapa con tolerancia de 0,2 mm / 0.008 in; el perfil de superficie abarca toda la forma tridimensional y se usa cuando toda la superficie debe controlarse con un único marco de referencia, por ejemplo una tolerancia de 0,5 mm / 0.020 in sobre la cara de un panel de plástico.
- **¿Cómo se interpreta una tolerancia de perfil con referencia datum?** Con referencias datum la zona de tolerancia de 0,08 mm / 0.0031 in queda fijada en posición y orientación respecto a esos datum, controlando tanto la desviación de forma como la localización del perfil real; sin datum sólo se controla la forma.
- **¿Cuál es la diferencia entre una zona bilateral igual y una unilateral en perfil de superficie?** En una zona bilateral igual, una tolerancia de 0,1 mm / 0.004 in se reparte en ±0,05 mm / 0.002 in a cada lado del perfil nominal; en una unilateral el valor total de 0,1 mm / 0.004 in se dispone únicamente hacia el exterior o hacia el interior desde el perfil verdadero.
- **¿Qué tolerancia de perfil es realista para una junta de estanqueidad en una brida de aluminio fresada?** Fresando una brida de aluminio con tamaño alrededor de 100 mm / 4 in se puede lograr una tolerancia de perfil de superficie de 0,1 mm / 0.004 in a 0,15 mm / 0.006 in, equivalente a un grado IT9-IT10.
- **¿Es posible medir el perfil de una superficie con una máquina de medición por coordenadas?** Sí, la medición por contacto con palpador permite evaluar desviaciones de perfil de superficie inferiores a 0,01 mm / 0.0004 in, aunque la incertidumbre de la máquina debe ser al menos 5 veces mejor que la tolerancia a verificar.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
