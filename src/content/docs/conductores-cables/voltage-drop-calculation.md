---
title: "Cálculo de caída de tensión en conductores"
sidebar:
  label: "Cálculo de caída de tensión en conductores"
description: "Ficha tecnica: Cálculo de caída de tensión en conductores"
keywords: ["voltage drop calculation formula conductor", "conductores-cables"]
category: "conductores-cables"
topic: "voltage-drop"
subcategory: "voltage-drop-calc"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La caída de tensión representa la reducción del potencial eléctrico entre la fuente y la carga, provocada por la resistencia e impedancia propia del conductor. Su cálculo preciso es determinante para garantizar que los equipos terminales operen dentro de sus márgenes nominales y para cumplir con los límites máximos exigidos por las normativas de instalación.

## Principio eléctrico fundamental

La caída de tensión se fundamenta en la Ley de Ohm, que establece una relación directamente proporcional entre la corriente que circula y la resistencia total del circuito. En corriente continua o circuitos de corriente alterna con factor de potencia unitario, la caída de tensión se obtiene mediante:

> **ΔU = I · R**

donde cada variable corresponde a:

| Variable | Descripción | Unidad |
| --- | --- | --- |
| ΔU | Caída de tensión en el conductor | V |
| I | Corriente del circuito | A |
| R | Resistencia eléctrica del conductor | Ω |

En circuitos de corriente alterna con presencia de reactancia, la resistencia se sustituye por la impedancia total del conductor, y la expresión se transforma en:

> **ΔU = I · Z**

Para sistemas trifásicos equilibrados, la caída de tensión entre fases considera el factor de fase correspondiente y se calcula habitualmente sobre la tensión compuesta.

## Método por resistencia del conductor

Este método determina la caída de tensión a partir del valor de resistencia eléctrica del conductor, el cual depende del material, la sección, la longitud y la temperatura de operación. La resistencia total del circuito se calcula como:

> **R = R<sub>u</sub> · L**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| R | Resistencia total del circuito | Ω |
| R<sub>u</sub> | Resistencia unitaria del conductor | Ω/m u Ω/ft |
| L | Longitud del conductor (ida y retorno en monofásico) | m o ft |

### Resistencia unitaria de conductores comunes

| Material | Sección | Resistencia unitaria a 20 °C / 68 °F |
| --- | --- | --- |
| Cobre electrolítico | 1,5 mm² / 15,4 AWG | 0,0121 Ω/m / 0,00369 Ω/ft |
| Cobre electrolítico | 2,5 mm² / 13,3 AWG | 0,00741 Ω/m / 0,00226 Ω/ft |
| Cobre electrolítico | 4 mm² / 11,4 AWG | 0,00461 Ω/m / 0,00141 Ω/ft |
| Cobre electrolítico | 6 mm² / 9,3 AWG | 0,00308 Ω/m / 0,000939 Ω/ft |
| Cobre electrolítico | 10 mm² / 7,0 AWG | 0,00183 Ω/m / 0,000558 Ω/ft |
| Cobre electrolítico | 16 mm² / 5,2 AWG | 0,00115 Ω/m / 0,000351 Ω/ft |
| Cobre electrolítico | 25 mm² / 3,2 AWG | 0,000727 Ω/m / 0,000222 Ω/ft |
| Cobre electrolítico | 35 mm² / 2,0 AWG | 0,000524 Ω/m / 0,000160 Ω/ft |
| Cobre electrolítico | 50 mm² / 1/0 AWG | 0,000387 Ω/m / 0,000118 Ω/ft |
| Aluminio | 16 mm² / 5,2 AWG | 0,00191 Ω/m / 0,000582 Ω/ft |
| Aluminio | 25 mm² / 3,2 AWG | 0,00120 Ω/m / 0,000366 Ω/ft |
| Aluminio | 35 mm² / 2,0 AWG | 0,000868 Ω/m / 0,000265 Ω/ft |
| Aluminio | 50 mm² / 1/0 AWG | 0,000641 Ω/m / 0,000195 Ω/ft |

## Método de los circular mils (AWG/kcmil)

En Norteamérica y en instalaciones que emplean conductores AWG o kcmil, se utiliza la expresión basada en circular mils y en el coeficiente de resistividad específica K:

> **ΔU = (K · P · L · I) / A**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| ΔU | Caída de tensión | V |
| K | Resistividad específica | Ω·circular mil/ft |
| P | Constante de fase: 2 para monofásico, 1,732 para trifásico | — |
| L | Longitud del conductor (un solo sentido) | ft |
| I | Corriente | A |
| A | Área del conductor en circular mils | cmil |

### Coeficiente de resistividad K por material y temperatura

| Material | Tipo | Rango de temperatura | K (Ω·cmil/ft) |
| --- | --- | --- | --- |
| Cobre | Sólido | 25 a 50 °C / 77 a 121 °F | 11 |
| Cobre | Sólido | 50 a 75 °C / 122 a 167 °F | 12 |
| Cobre | Cableado | 25 a 50 °C / 77 a 121 °F | 11 |
| Cobre | Cableado | 50 a 75 °C / 122 a 167 °F | 12 |
| Aluminio | Sólido | 25 a 50 °C / 77 a 121 °F | 18 |
| Aluminio | Sólido | 50 a 75 °C / 122 a 167 °F | 20 |
| Aluminio | Cableado | 25 a 50 °C / 77 a 121 °F | 19 |
| Aluminio | Cableado | 50 a 75 °C / 122 a 167 °F | 20 |

## Método por factor de caída unitario

Para conductores de cobre normalizados, puede emplearse un factor empírico _f_ que agrupa las propiedades resistivas del conductor. La expresión simplificada es:

> **ΔU = f · I · L**

donde L corresponde a la longitud de un solo conductor y los valores de _f_ se obtienen de la tabla siguiente para cada calibre.

| Calibre AWG | Sección métrica equivalente | Factor f monofásico | Factor f trifásico |
| --- | --- | --- | --- |
| 14 | 2,08 mm² | 0,476 | 0,42 |
| 12 | 3,31 mm² | 0,313 | 0,26 |
| 10 | 5,26 mm² | 0,196 | 0,17 |
| 8 | 8,37 mm² | 0,125 | 0,11 |
| 6 | 13,3 mm² | 0,0833 | 0,071 |
| 4 | 21,2 mm² | 0,0538 | 0,046 |
| 3 | 26,7 mm² | 0,0431 | 0,038 |
| 2 | 33,6 mm² | 0,0323 | 0,028 |
| 1 | 42,4 mm² | 0,0323 | 0,028 |
| 1/0 | 53,5 mm² | 0,0269 | 0,023 |
| 2/0 | 67,4 mm² | 0,0222 | 0,020 |
| 3/0 | 85,0 mm² | 0,0190 | 0,016 |
| 4/0 | 107,2 mm² | 0,0161 | 0,014 |
| 250 kcmil | 126,7 mm² | 0,0147 | 0,013 |
| 300 kcmil | 152,0 mm² | 0,0131 | 0,011 |
| 350 kcmil | 177,3 mm² | 0,0121 | 0,011 |
| 400 kcmil | 202,7 mm² | 0,0115 | 0,009 |
| 500 kcmil | 253,4 mm² | 0,0101 | 0,009 |

## Factores que influyen en la caída de tensión

### Resistividad del material

La resistividad eléctrica determina la oposición intrínseca del material al paso de corriente. El cobre recocido presenta una resistividad de 1,72·10⁻⁸ Ω·m a 20 °C / 68 °F, mientras que el aluminio alcanza 2,82·10⁻⁸ Ω·m a 20 °C / 68 °F. Esta diferencia explica por qué un conductor de aluminio requiere una sección aproximadamente 1,6 veces mayor que uno de cobre para igual caída de tensión.

### Temperatura de operación

La resistencia de los conductores metálicos aumenta con la temperatura según:

> **R<sub>T</sub> = R<sub>20</sub> · [1 + α · (T − 20 °C)]**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| R<sub>T</sub> | Resistencia a la temperatura T | Ω |
| R<sub>20</sub> | Resistencia a 20 °C / 68 °F | Ω |
| α | Coeficiente de temperatura: 0,00393 para cobre, 0,00403 para aluminio | °C⁻¹ |
| T | Temperatura de operación | °C |

Un conductor de cobre operando a 75 °C / 167 °F incrementa su resistencia en aproximadamente 21,6% respecto al valor a 20 °C / 68 °F.

### Longitud del circuito

La caída de tensión es linealmente proporcional a la longitud del conductor. Para circuitos monofásicos debe considerarse el doble de la distancia física entre fuente y carga, pues la corriente recorre tanto el conductor de fase como el neutro. En sistemas trifásicos equilibrados, si el neutro no conduce corriente de retorno, solo se contabiliza la longitud de la fase.

### Tipo de corriente y factor de potencia

En corriente continua o corriente alterna monofásica con factor de potencia cercano a la unidad se aplica la expresión resistiva pura. En circuitos de alterna con cargas inductivas (motores, balastros, transformadores), la reactancia del cable cobra relevancia. Para secciones superiores a 16 mm² / 5,2 AWG, la reactancia inductiva puede representar entre un 5% y un 15% de la impedancia total del conductor.

## Corrección por reactancia en corriente alterna

En instalaciones de corriente alterna con conductores de sección significativa o con factores de potencia bajos, la caída de tensión debe calcularse incorporando la componente inductiva:

> **ΔU = I · (R · cos φ + X · sen φ)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| ΔU | Caída de tensión | V |
| I | Corriente del circuito | A |
| R | Resistencia del conductor | Ω |
| X | Reactancia inductiva del conductor | Ω |
| cos φ | Factor de potencia de la carga | — |

### Valores típicos de reactancia inductiva

| Disposición de conductores | Reactancia a 60 Hz |
| --- | --- |
| Cables unipolares en trébol | 0,08 a 0,10 mΩ/m / 0,024 a 0,030 mΩ/ft |
| Cables unipolares separados un diámetro | 0,12 a 0,15 mΩ/m / 0,037 a 0,046 mΩ/ft |
| Cables en ducto magnético (acero) | 0,15 a 0,25 mΩ/m / 0,046 a 0,076 mΩ/ft |

Para secciones inferiores a 16 mm² / 6 AWG, la reactancia es despreciable y el cálculo resistivo puro resulta suficiente.

## Valores límite de caída de tensión recomendados

La caída de tensión excesiva produce calentamiento en los conductores, reducción del par de arranque en motores, disminución del flujo luminoso en alumbrado y disparos intempestivos de protecciones. Las normativas internacionales establecen límites máximos para distintos tipos de circuitos:

| Tipo de instalación | Caída máxima recomendada | Norma de referencia |
| --- | --- | --- |
| Circuitos de iluminación | 3% | NEC 210.19(A) / IEC 60364-5-52 |
| Circuitos de fuerza (combinado) | 5% | NEC 210.19(A) / IEC 60364-5-52 |
| Ramal desde tablero a carga | 3% | NEC 210.19(A) |
| Alimentador más ramal combinados | 5% | NEC 215.2(A)(3) |
| Circuitos de motores en arranque | 10 a 15% (transitorio) | NEMA MG-1 |
| Instalaciones sensibles (datos, instrumentación) | 1% | Recomendación del fabricante |

## Preguntas frecuentes (FAQ)

**¿Qué factor de agrupamiento aplica para el cálculo de caída de tensión?** 0,8 es el factor de reducción típico para circuitos con 4 a 6 conductores activos en un mismo ducto, pero este factor afecta únicamente la capacidad de corriente y no la fórmula de caída de tensión, que se calcula con la corriente real del circuito. La caída de tensión se incrementa indirectamente si se reduce la sección por aplicación de factores de agrupamiento.

**¿Cuál es la caída de tensión máxima permitida para un alimentador principal?** 3% es el límite máximo establecido por el NEC para alimentadores, y hasta un 5% cuando se suma la caída del circuito ramal, medidos desde el punto de acometida hasta la carga más lejana. La IEC 60364-5-52 recomienda un 4% para instalaciones de baja tensión.

**¿Cómo se corrige el valor de resistencia del cobre para una temperatura de 90 °C?** El factor de corrección es 1,275, lo que significa que la resistencia de un conductor de cobre a 90 °C / 194 °F es un 27,5% mayor que a 20 °C / 68 °F. Se aplica la fórmula de corrección con el coeficiente α de 0,00393 °C⁻¹.

**¿A partir de qué longitud de conductor debe calcularse la caída de tensión en una instalación residencial?** 30 m / 98 ft es la longitud a partir de la cual resulta indispensable verificar la caída de tensión en circuitos monofásicos de 120 V con conductores de 2,5 mm² / 14 AWG y cargas típicas de 15 A. Para circuitos de 240 V, ese umbral se duplica hasta aproximadamente 60 m / 197 ft.

**¿Qué influencia tiene el factor de potencia de 0,85 en la caída de tensión de un conductor de 35 mm²?** Para un conductor de cobre de 35 mm² / 2 AWG con factor de potencia de 0,85, la componente reactiva representa aproximadamente un 12% adicional sobre la caída resistiva pura. La caída total puede estimarse multiplicando la caída resistiva por un factor de 1,08 a 1,12.

**¿Cuál es la sección mínima en mm² para limitar la caída de tensión al 2% en un circuito monofásico de 230 V, 16 A y 40 m de longitud?** La sección mínima requerida es de aproximadamente 6 mm² / 10 AWG, lo que produce una caída resistiva de 4,56 V (1,98%) considerando la ida y retorno del circuito (80 m / 262 ft de conductor total). Con 4 mm² / 12 AWG la caída alcanza 2,93%.

## Herramientas de cálculo en línea

Existen calculadoras especializadas que simplifican el proceso de dimensionamiento por caída de tensión. La calculadora de Southwire permite seleccionar el material, tamaño, longitud, corriente y tipo de circuito, devolviendo tanto el porcentaje de caída como la tensión final en bornes de la carga. Los fabricantes de conductores integran estas herramientas en sus portales técnicos para facilitar la verificación en campo y en etapa de diseño.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/voltage-drop-d_1550.html
- **southwire.com**: https://www.southwire.com/calculator-vdrop
