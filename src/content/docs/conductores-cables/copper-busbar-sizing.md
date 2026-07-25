---
title: "Dimensionamiento de barras de cobre"
sidebar:
  label: "Dimensionamiento de barras de cobre"
description: "Ficha tecnica: Dimensionamiento de barras de cobre"
keywords: ["copper busbar sizing current rating", "conductores-cables"]
category: "conductores-cables"
topic: "busbar"
subcategory: "busbar-sizing"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Una barra de cobre es un conductor rígido, generalmente de sección rectangular o tubular, utilizado para distribuir grandes corrientes eléctricas en cuadros de distribución, subestaciones y sistemas de potencia. Su baja resistividad y elevada conductividad térmica permiten manejar densidades de corriente superiores a las de los cables redondos equivalentes, optimizando el espacio y la disipación de calor. Las barras de cobre se dimensionan principalmente en función de la sección transversal, el tipo de instalación y la elevación de temperatura admisible.

## Principio de dimensionamiento
La capacidad de corriente de una barra de cobre depende directamente de su área de sección transversal, del material (cobre electrolítico con resistividad de 1,724×10⁻⁸ Ω·m a 20 °C) y de las condiciones de ventilación. Para una misma sección, las barras planas disipan mejor el calor que los conductores cilíndricos gracias a su mayor superficie lateral. El efecto pelicular comienza a ser significativo en barras de más de 8 mm / 0.31 in de espesor en corriente alterna de 50–60 Hz, lo que favorece el uso de perfiles huecos o paquetes laminares en aplicaciones de muy alta corriente.

## Cálculo de la capacidad de corriente
La corriente admisible en régimen permanente se estima mediante la expresión:

> **I = J × A**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| I | Corriente continua admisible | A |
| J | Densidad de corriente práctica (cobre en aire libre) | A/mm² / A/in² |
| A | Área de la sección transversal | mm² / in² |

Para barras de cobre desnudas en aire quieto a 30 °C / 86 °F, se adopta típicamente una densidad de corriente entre 1,2 y 2,0 A/mm² (≈ 774 – 1290 A/in²), dependiendo del tamaño y la separación entre apoyos.

## Factores de corrección por temperatura ambiente
Si la temperatura ambiente supera los 30 °C / 86 °F, la capacidad de corriente debe reducirse aplicando los siguientes factores de corrección:

| Temperatura ambiente | Factor de corrección |
| --- | --- |
| 31 – 40 °C / 87.8 – 104 °F | 0,82 |
| 41 – 45 °C / 105.8 – 113 °F | 0,71 |
| 46 – 50 °C / 114.8 – 122 °F | 0,58 |

Estos coeficientes son válidos para barras con aislamiento básico o en instalaciones donde la disipación de calor está limitada. Para barras al aire libre con alta convección natural, la reducción suele ser menos severa.

## Tabla de dimensiones y capacidades orientativas
Los valores siguientes corresponden a barras de cobre desnudas, horizontales, en aire quieto a 30 °C / 86 °F, con una densidad de corriente de diseño de 1,5 A/mm² (≈ 968 A/in²). Se consideran secciones rectangulares estándar.

| Dimensiones (mm) | Dimensiones (in) | Sección (mm²) | Sección (in²) | Corriente admisible (A) |
| --- | --- | --- | --- | --- |
| 15 × 3 | 0.59 × 0.12 | 45 | 0.07 | 68 |
| 20 × 5 | 0.79 × 0.20 | 100 | 0.16 | 150 |
| 30 × 5 | 1.18 × 0.20 | 150 | 0.23 | 225 |
| 40 × 5 | 1.57 × 0.20 | 200 | 0.31 | 300 |
| 50 × 5 | 1.97 × 0.20 | 250 | 0.39 | 375 |
| 60 × 10 | 2.36 × 0.39 | 600 | 0.93 | 900 |
| 80 × 10 | 3.15 × 0.39 | 800 | 1.24 | 1200 |
| 100 × 10 | 3.94 × 0.39 | 1000 | 1.55 | 1500 |
| 120 × 10 | 4.72 × 0.39 | 1200 | 1.86 | 1800 |

Para instalaciones con ventilación forzada o barras montadas verticalmente, la capacidad puede incrementarse hasta un 20 %.

## Consideraciones de instalación
- Las barras deben apoyarse sobre soportes aislantes que resistan los esfuerzos electrodinámicos en caso de cortocircuito.
- La separación entre apoyos no debe exceder los 500 mm / 19.7 in para espesores inferiores a 6 mm / 0.24 in, con el fin de evitar deformaciones por peso propio y vibraciones.
- Las uniones entre tramos requieren superficies planas, limpias y, en corrientes elevadas, plateadas para minimizar la resistencia de contacto.
- Se recomienda prever juntas de dilatación en tramos rectos superiores a 3 m / 118 in, porque el cobre se expande aproximadamente 0,017 mm por metro y por cada grado Celsius de elevación de temperatura.
- En exteriores, las barras deben protegerse contra la corrosión galvánica cuando entran en contacto con aluminio u otros metales.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la densidad de corriente típica para barras de cobre en aire libre?
La densidad de corriente recomendada varía entre 1,2 y 2,0 A/mm² (774 – 1290 A/in²), siendo 1,5 A/mm² (968 A/in²) el valor más utilizado en diseño de cuadros eléctricos con ventilación natural.

### ¿Qué capacidad de corriente tiene una barra de cobre de 30 × 5 mm?
Una barra de cobre de 30 × 5 mm (1.18 × 0.20 in), con 150 mm² de sección (0.23 in²), admite aproximadamente 225 A en condiciones estándar de instalación al aire a 30 °C / 86 °F.

### ¿Cuánto se reduce la corriente admisible a 45 °C?
A 45 °C / 113 °F la corriente admisible se multiplica por un factor de corrección de 0,71, lo que para una barra de 375 A reduce la capacidad a unos 266 A.

### ¿A partir de qué espesor es relevante el efecto pelicular en corriente alterna?
El efecto pelicular se vuelve apreciable en barras de cobre con espesor superior a 8 mm / 0.31 in operando a 50–60 Hz, lo que puede reducir la capacidad efectiva entre un 3 % y un 8 % respecto a la sección real.

### ¿Qué corriente puede transportar una barra de cobre de 100 × 10 mm?
Una barra de 100 × 10 mm (3.94 × 0.39 in), con 1000 mm² de sección (1.55 in²), es capaz de conducir alrededor de 1500 A en régimen permanente al aire libre y sin aislamiento adicional.

### ¿Cuál es la resistividad del cobre empleado en barras?
La resistividad del cobre electrolítico estándar a 20 °C / 68 °F es de 1,724×10⁻⁸ Ω·m, equivalente a 0,01724 Ω·mm²/m, valor que puede aumentar con la temperatura y las impurezas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/wire-gauges-d_419.html
- **southwire.com**: https://www.southwire.com/calculators
