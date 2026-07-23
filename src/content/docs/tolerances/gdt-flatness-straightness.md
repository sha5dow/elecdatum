---
title: "GDT Planitud y Rectitud"
sidebar:
  label: "GDT Planitud y Rectitud"
description: "Ficha tecnica: GDT Planitud y Rectitud"
keywords: ["GDT flatness straightness tolerance symbol", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "flatness-straightness"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Descripción general
La planitud y la rectitud son tolerancias geométricas de forma que limitan la desviación de un elemento respecto a su geometría ideal. La planitud controla cuánto se aparta una superficie de un plano perfecto, mientras que la rectitud restringe la variación de una línea o un eje respecto a una línea recta teórica. Ambas tolerancias se especifican en el marco de control de características según las normas ISO 1101 y ASME Y14.5, y son independientes de cualquier referencia (datum), definiendo únicamente la forma del elemento. Su aplicación abarca desde placas base de máquinas hasta ejes de transmisión, garantizando el correcto funcionamiento y montaje de componentes mecánicos.

## Símbolo y representación
Los símbolos normalizados para planitud y rectitud se indican en el primer compartimento del marco de control de características. La representación gráfica sigue las convenciones de ISO y ASME.

| Característica | Símbolo ISO/ANSI | Descripción |
| --- | --- | --- |
| Planitud | Un paralelogramo inclinado (dos líneas oblicuas paralelas) | Se aplica a una superficie y define una zona de tolerancia entre dos planos paralelos. |
| Rectitud | Una línea recta horizontal | Controla la forma de una línea en una superficie o de un eje. Si la zona es cilíndrica, el valor de tolerancia va precedido del símbolo de diámetro (⌀). |

El marco típico incluye, de izquierda a derecha, el símbolo de la característica, el valor de la tolerancia (en milímetros o pulgadas) y, si procede, la letra del datum en rectitud de eje.

## Zona de tolerancia
La zona de tolerancia define el volumen o área dentro del cual debe encontrarse el elemento real.
- **Planitud**: Zona delimitada por dos planos paralelos separados una distancia igual al valor de tolerancia especificado (por ejemplo, 0,05 mm / 0.002 in). La superficie completa debe residir entre dichos planos.
- **Rectitud de una línea de superficie**: Zona en el plano de proyección delimitada por dos líneas rectas paralelas separadas la tolerancia.
- **Rectitud de un eje**: Zona cilíndrica con un diámetro igual al valor de tolerancia (precedido del símbolo ⌀). El eje real del cilindro debe permanecer dentro de ese volumen cilíndrico.

## Tolerancias generales según ISO 2768-2
Cuando no se indica una tolerancia de forma explícita en el dibujo, se aplican las tolerancias generales de la norma ISO 2768-2. Las tablas siguientes recogen los valores para planitud y rectitud en función de la longitud nominal y la clase de tolerancia (H – fina, K – media, L – basta). Los valores son idénticos para ambas características.

| Rango de longitud nominal (mm / in) | Tolerancia clase H (mm / in) | Tolerancia clase K (mm / in) | Tolerancia clase L (mm / in) |
| --- | --- | --- | --- |
| hasta 10 mm / 0.394 in | 0,02 mm / 0.0008 in | 0,05 mm / 0.002 in | 0,1 mm / 0.004 in |
| más de 10 hasta 30 mm / 0.394 – 1.181 in | 0,05 mm / 0.002 in | 0,1 mm / 0.004 in | 0,2 mm / 0.008 in |
| más de 30 hasta 100 mm / 1.181 – 3.937 in | 0,1 mm / 0.004 in | 0,2 mm / 0.008 in | 0,4 mm / 0.016 in |
| más de 100 hasta 300 mm / 3.937 – 11.811 in | 0,2 mm / 0.008 in | 0,4 mm / 0.016 in | 0,8 mm / 0.031 in |
| más de 300 hasta 1000 mm / 11.811 – 39.37 in | 0,3 mm / 0.012 in | 0,6 mm / 0.024 in | 1,2 mm / 0.047 in |
| más de 1000 hasta 3000 mm / 39.37 – 118.11 in | 0,5 mm / 0.02 in | 1,0 mm / 0.039 in | 2,0 mm / 0.079 in |

*Nota: La longitud nominal para planitud es el lado mayor de la superficie; para rectitud es la longitud total del elemento controlado.*

## Tolerancias alcanzables por procesos de fabricación
Los procesos de mecanizado permiten obtener distintos grados de precisión en forma. La tabla siguiente, derivada de las capacidades típicas de cada proceso, muestra valores orientativos de planitud/rectitud por cada 100 mm (3.94 in) de longitud. Los grados de tolerancia IT se basan en los rangos de la fuente engineeringtoolbox.com.

| Proceso | Grado de tolerancia dimensional típico (IT) | Tolerancia de forma orientativa por 100 mm (mm / in) |
| --- | --- | --- |
| Lapeado / Bruñido | IT4 | 0,0025 mm / 0.0001 in |
| Rectificado cilíndrico / superficial | IT5 – IT6 | 0,005 mm / 0.0002 in |
| Torneado con diamante / Mandrinado de precisión | IT6 – IT7 | 0,01 mm / 0.0004 in |
| Brochado | IT7 – IT8 | 0,02 mm / 0.0008 in |
| Escariado | IT8 | 0,03 mm / 0.0012 in |
| Torneado convencional | IT9 – IT10 | 0,05 mm / 0.002 in |
| Fresado | IT9 – IT11 | 0,08 mm / 0.003 in |
| Taladrado | IT11 – IT12 | 0,2 mm / 0.008 in |
| Cepillado / Limado | IT11 – IT13 | 0,3 mm / 0.012 in |

## Ejemplos de aplicación real
- **Placa base de un centro de mecanizado**: La superficie de apoyo se especifica con una tolerancia de planitud de 0,02 mm / 0.0008 in por cada 500 mm / 19.69 in para garantizar la estabilidad geométrica de la máquina.
- **Eje de transmisión de precisión**: Se aplica rectitud de eje con zona cilíndrica ⌀ 0,01 mm / 0.0004 in en toda su longitud, evitando vibraciones y desgaste prematuro.
- **Calzos y alineaciones**: Superficies de contacto en utillajes de soldadura requieren planitud de 0,05 mm / 0.002 in sobre toda la superficie para asegurar un posicionamiento repetible.
- **Guías lineales**: La rectitud de las caras de deslizamiento se controla con 0,01 mm / 0.0004 in por cada 300 mm / 11.81 in.

## Comparativa ISO vs ANSI
| Aspecto | ISO 1101 | ASME Y14.5 |
| --- | --- | --- |
| Símbolo de planitud | Idéntico (paralelogramo) | Idéntico |
| Símbolo de rectitud | Línea recta | Línea recta |
| Uso de modificador de diámetro | Rara vez utilizado para rectitud de línea; no requerido explícitamente | Obligatorio (⌀) cuando la zona de tolerancia es cilíndrica |
| Indicación de zona de tolerancia en rectitud de eje | Se asume zona cilíndrica si la tolerancia se asocia al eje | Debe indicarse ⌀ antes del valor |
| Interpretación de la regla 1 (Envolvente) | No existe una regla equivalente universal; depende de la norma ISO 8015 | Regla #1: Forma perfecta en MMC |
| Tolerancias generales | ISO 2768-2 define tolerancias de forma por defecto | No tiene equivalente directo; deben especificarse en el dibujo |
| Aplicación en superficies curvas | La planitud se aplica solo a superficies nominalmente planas | Igual criterio |

## Preguntas frecuentes
### ¿Cuál es la tolerancia de planitud típica para una placa de apoyo de 200 mm × 200 mm?
Una placa de 200 mm / 7.87 in de lado suele recibir una tolerancia de planitud de 0,05 mm / 0.002 in para asientos de precisión, valor que se encuentra dentro de la clase H de ISO 2768-2 para esa longitud.

### ¿Qué significa un valor de rectitud de ⌀ 0,03 mm / 0.0012 in en un eje?
Significa que el eje real del cilindro debe estar completamente contenido dentro de una zona cilíndrica de 0,03 mm / 0.0012 in de diámetro a lo largo de toda su longitud de 150 mm / 5.91 in.

### ¿Cómo se mide la planitud de una superficie de 0,2 mm / 0.008 in con medios convencionales?
Para una tolerancia de 0,2 mm / 0.008 in puede emplearse un comparador de carátula montado sobre una base magnética, deslizándolo sobre un mármol de granito y cubriendo un área de 300 mm × 300 mm / 11.81 in × 11.81 in.

### ¿Qué diferencia práctica existe entre aplicar rectitud de superficie o planitud en un carril guía?
La rectitud de cada línea del carril controla individualmente 0,01 mm / 0.0004 in a lo largo de 500 mm / 19.69 in, mientras que la planitud controlaría toda la superficie superior de 500 mm × 20 mm / 19.69 in × 0.79 in con una única zona de dos planos paralelos.

### ¿Se pueden combinar tolerancias de planitud y rectitud en el mismo plano?
Sí, es habitual especificar una rectitud de 0,03 mm / 0.0012 in para una línea generatriz y, simultáneamente, una planitud de 0,05 mm / 0.002 in para toda la superficie de 250 mm / 9.84 in de largo.

### ¿Qué procesos de mecanizado garantizan una rectitud de eje inferior a 0,01 mm / 0.0004 in?
El rectificado cilíndrico de precisión o el torneado con diamante pueden alcanzar una rectitud de eje de ⌀ 0,005 mm / 0.0002 in sobre una longitud de 100 mm / 3.94 in.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
