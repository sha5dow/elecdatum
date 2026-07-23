---
title: "Engranajes tornillo sin fin"
sidebar:
  label: "Engranajes tornillo sin fin"
description: "Ficha tecnica: Engranajes tornillo sin fin"
keywords: ["worm gear worm wheel parameters ratio", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "worm-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Descripción general
Los engranajes de tornillo sin fin son un sistema de transmisión mecánica por deslizamiento que consta de un tornillo sin fin (también llamado gusano) y una rueda dentada helicoidal (corona). Los ejes del tornillo y de la rueda se cruzan habitualmente a 90°, permitiendo relaciones de reducción muy elevadas en una sola etapa, normalmente entre 5:1 y 100:1. Una de sus características más valoradas es la posibilidad de ser **auto-bloqueantes**: cuando el ángulo de avance del tornillo es inferior al ángulo de fricción el sistema no puede ser arrastrado desde la salida, lo que garantiza la irreversibilidad del movimiento en aplicaciones de elevación o sujeción.

Según la geometría de contacto se distinguen tres tipos: sin garganta (contacto puntual, cargas ligeras), de garganta simple (rueda con garganta envolvente, mayor superficie de contacto) y de doble garganta (ambos elementos abrazan el perfil, máxima capacidad de carga). La excelente capacidad de reducción y el funcionamiento silencioso los hacen idóneos para transportadores, ascensores, mesas giratorias, posicionadores de precisión y accionamientos de válvulas.

## Parámetros geométricos
Un engranaje de tornillo sin fin se define mediante los siguientes parámetros:

- **Módulo** _m_ (mm) o **paso diametral** _DP_ (`DP = 25,4 / m`).
- **Ángulo de presión** _α_: 20° en la mayoría de los diseños métricos; 14,5° o 20° en imperiales.
- **Número de entradas** _z₁_ (comúnmente 1, 2, 3 o 4).
- **Número de dientes de la rueda** _z₂_.
- **Relación de transmisión** _i = z₂ / z₁_.
- **Diámetro de paso del tornillo** _d₁_, diámetro exterior _da₁_ y longitud del tornillo _L_.
- **Ángulo de avance** _γ = arctan(m·z₁ / d₁)_.

La tabla siguiente recoge dimensiones normalizadas de tornillos sin fin con acabado rectificado, montados sobre eje, según especificaciones comerciales habituales.

| Módulo (mm) / DP (pulg⁻¹) | Diámetro de paso (mm / in) | Diámetro exterior (mm / in) | Longitud (mm / in) | Entradas (z₁) | Ángulo de presión (°) |
| --- | --- | --- | --- | --- | --- |
| 0,5 / 50,8 | 9 / 0.354 | 10 / 0.394 | 12 / 0.472 | 1 | 20 |
| 1,0 / 25,4 | 16 / 0.630 | 18 / 0.709 | 32 / 1.260 | 1 | 20 |
| 1,5 / 16,9 | 25 / 0.984 | 28 / 1.102 | 40 / 1.575 | 1 | 20 |
| 2,0 / 12,7 | 31 / 1.220 | 35 / 1.378 | 46 / 1.811 | 1 | 14,5 |
| 2,5 / 10,16 | 37 / 1.457 | 42 / 1.654 | 63 / 2.480 | 2 | 20 |

La rueda debe tener un número de dientes \(z_2\) como mínimo 20 para evitar socavación. La distancia entre centros se calcula como \(a ≈ (d_1 + d_2)/2\), donde \(d_2 = m·z_2\) es el diámetro de paso de la rueda.

## Materiales y tratamientos
La combinación clásica es tornillo de acero con rueda de bronce, que ofrece baja fricción, buena disipación térmica y resistencia al desgaste. En aplicaciones donde prima la capacidad de carga estática o el costo se emplea fundición de hierro. La tabla siguiente resume los materiales más comunes, sus tratamientos y aplicaciones típicas.

| Componente | Material | Tratamiento / Acabado | Características | Aplicaciones típicas |
| --- | --- | --- | --- | --- |
| Tornillo | Acero al carbono 1045 | Sin templar, roscado laminado | Económico, buena maquinabilidad | Cargas moderadas, series económicas |
| Tornillo | Acero al carbono 1045 | Cementado y rectificado (HRC 58–62) | Alta resistencia al desgaste, precisión | Uso intensivo, larga vida |
| Tornillo | Acero aleado 4140 | Templado y rectificado (HRC 56–60) | Excelente resistencia a la fatiga, integrado en eje | Engranajes de alta exigencia |
| Tornillo | Acero inoxidable 303 | Sin templar | Resistente a la corrosión, higiénico | Industria alimentaria, ambientes húmedos |
| Rueda | Bronce al estaño (CuSn12) | Fundición centrífuga o forja | Bajo coeficiente de fricción, buena evacuación térmica | Combinación estándar con tornillo de acero |
| Rueda | Fundición gris (GG-25) | Mecanizado | Alta rigidez, bajo costo | Velocidades bajas, carga predominantemente estática |

## Lubricación y refrigeración
El contacto tornillo-rueda es mayoritariamente por deslizamiento, lo que genera calor y exige una lubricación adecuada para controlar el desgaste y la temperatura. Se emplean aceites minerales o sintéticos de alta viscosidad con aditivos de extrema presión (EP). La tabla siguiente orienta sobre la viscosidad ISO VG en función de la velocidad periférica del tornillo.

| Velocidad periférica (m/s / ft/min) | Viscosidad ISO VG recomendada | Método de lubricación |
| --- | --- | --- |
| < 2,5 / < 492 | ISO VG 680 | Baño de aceite o grasa fluida |
| 2,5 – 5 / 492 – 984 | ISO VG 460 | Baño de aceite / salpique |
| > 5 / > 984 | ISO VG 320 | Circulación forzada con refrigeración |

La temperatura de servicio debe mantenerse por debajo de 80 °C / 176 °F para preservar el lubricante y los materiales. Reductores con alta potencia térmica incorporan refrigeración adicional: ventilador montado en el eje, serpentín de agua o intercambiador de calor aceite-agua.

## Capacidad de carga
Las fórmulas básicas de transmisión para un reductor de tornillo sin fin son las siguientes:

- **Par de salida** \(M_o = M_i · i · \eta\) (Nm / lb·ft)
- **Velocidad de salida** \(S_o = S_i / i\) (rpm)
- **Potencia de salida** \(P_o = P_i · \eta\) (W / hp)

donde \(M_i\) = par de entrada, \(S_i\) = velocidad de entrada, \(i\) = relación de transmisión y \(\eta\) = rendimiento.

La **eficiencia** \(\eta\) depende fuertemente del ángulo de avance, la velocidad de deslizamiento, los materiales y la lubricación. La tabla siguiente muestra valores orientativos en función del número de entradas.

| Número de entradas (z₁) | Ángulo de avance γ (°) | Rendimiento η | Relación de transmisión típica i |
| --- | --- | --- | --- |
| 1 | 3 – 6 | 0,30 – 0,55 | 20:1 – 100:1 |
| 2 | 7 – 16 | 0,65 – 0,80 | 10:1 – 40:1 |
| 3 | 10 – 20 | 0,75 – 0,90 | 5:1 – 20:1 |
| 4 o más | > 20 | 0,85 – 0,95 | < 15:1 |

Los reductores auto-bloqueantes (z₁ = 1, γ < 5° con μ ≈ 0,1) presentan rendimientos por debajo del 50 %. La capacidad de carga admisible se determina a partir de la resistencia a fatiga superficial del flanco de la rueda y de la resistencia del tornillo, y debe verificarse también la potencia térmica disipada.

## Criterios de selección
Para elegir un tamaño de engranaje de tornillo sin fin se recomienda seguir la secuencia:

1. **Definir la relación de transmisión** \(i = n_{entrada} / n_{salida}\) y decidir el número de entradas del tornillo (1 para auto-bloqueo, ≥2 para mayor eficiencia).
2. **Calcular el par de salida requerido** \(M_o\) (Nm) a partir de la potencia \(P\) (kW) y la velocidad de salida \(n_2\) (rpm): \(M_o = 9550·P / n_2\).
3. **Seleccionar el módulo** en función del par y de la distancia entre centros disponible, empleando tablas de carga del fabricante. La tabla siguiente orienta sobre pares máximos admisibles para tornillo de acero cementado/rectificado y rueda de bronce, con lubricación adecuada y régimen continuo.

   | Módulo (mm) | Par máximo orientativo (Nm / lb·ft) | Distancia entre centros típica (mm / in) |
   | --- | --- | --- |
   | 0,5 | 1,2 / 0,89 | 12 – 15 / 0.47 – 0.59 |
   | 1,0 | 12 / 8,9 | 20 – 30 / 0.79 – 1.18 |
   | 1,5 | 40 / 29,5 | 35 – 50 / 1.38 – 1.97 |
   | 2,0 | 85 / 62,7 | 50 – 70 / 1.97 – 2.76 |
   | 2,5 | 160 / 118 | 70 – 100 / 2.76 – 3.94 |

4. **Verificar el auto-bloqueo** si la aplicación lo exige: el ángulo de avance debe ser menor que el ángulo de fricción (aprox. 4° a 6°).
5. **Comprobar la potencia térmica**: la potencia disipada en régimen nominal no debe superar la capacidad térmica del reductor sin refrigeración auxiliar.
6. **Elegir materiales y lubricación** acordes con la velocidad, el entorno y la duración esperada.

## Montaje
La correcta instalación del engranaje determina su vida útil y precisión. Se deben seguir estas recomendaciones:

- Garantizar una alineación exacta entre los ejes del tornillo y de la rueda, utilizando soportes rígidos y rodamientos de bolas o rodillos cónicos que absorban cargas axiales y radiales.
- Ajustar el juego circunferencial (backlash) mediante desplazamiento axial del tornillo o de la rueda; en aplicaciones de posicionamiento puede aplicarse una ligera precarga.
- Prever dilataciones térmicas, especialmente en tornillos largos; montar un extremo con rodamiento fijo y el otro con rodamiento libre axial.
- Asegurar que el sistema de lubricación alcance todos los puntos de contacto; en montajes verticales emplear laberintos o retenes especiales para evitar fugas.
- Montar preferentemente en posición horizontal; si es vertical, disponer un sistema de recirculación de aceite y un depósito auxiliar.

## Tablas de selección por aplicación
La tabla siguiente ofrece una guía rápida para elegir la configuración más adecuada según el tipo de máquina o instalación.

| Aplicación | Relación típica | Módulo recomendado | Material tornillo / rueda | Tipo de lubricación | Rendimiento estimado |
| --- | --- | --- | --- | --- | --- |
| Instrumentos de precisión (telescopios) | 40:1 – 100:1, 1 entrada | 0,5 – 1,0 | Acero 1045 / Bronce | Grasa fluida o aceite ISO VG 460 | 0,35 – 0,55 |
| Transportadores de banda (carga media) | 20:1 – 30:1, 1 o 2 entradas | 1,0 – 1,5 | Acero cementado / Bronce | Baño de aceite ISO VG 460 | 0,55 – 0,75 |
| Ascensores y montacargas | 30:1 – 50:1, 1 entrada | 1,5 – 2,5 | Acero cementado / Bronce | Baño con refrigeración por ventilador | 0,45 – 0,65 |
| Maquinaria de elevación (grúas) | 50:1 – 100:1, 1 entrada (autoblocante) | 2,0 – 3,0 | Acero aleado templado / Fundición o bronce | Circulación forzada ISO VG 680 | 0,35 – 0,50 |
| Accionamientos de válvulas y compuertas | 20:1 – 60:1, 1 entrada | 1,0 – 2,0 | Acero inoxidable / Bronce | Grasa especial para exteriores | 0,40 – 0,60 |
| Husillos de máquinas herramienta | 5:1 – 15:1, 2 o 3 entradas | 1,5 – 2,5 | Acero cementado rectificado / Bronce | Aceite con EP ISO VG 320 | 0,75 – 0,90 |

## FAQ
1. ¿Cuál es la relación de transmisión máxima que puede alcanzar un tornillo sin fin de una entrada?  
   Con un tornillo de una sola entrada la relación de transmisión es igual al número de dientes de la rueda, pudiendo alcanzar hasta 100:1 en diseños compactos de una etapa, aunque los valores más frecuentes se sitúan entre 5:1 y 60:1.

2. ¿Qué eficiencia mínima se espera de un reductor auto-bloqueante?  
   La eficiencia de un conjunto auto-bloqueante oscila entre el 30 % y el 50 %, limitada por el bajo ángulo de avance (3°–6°) y la fricción inherente al deslizamiento con lubricación convencional.

3. ¿Cuál es la longitud estándar de un tornillo sin fin de módulo 1 con diámetro de paso 16 mm?  
   La longitud normalizada para un tornillo de módulo 1 y diámetro de paso 16 mm es de 32 mm / 1.260 in, medida sobre el cuerpo roscado montado en el eje.

4. ¿Qué ángulo de presión utilizan los engranajes de tornillo sin fin métricos?  
   Los engranajes métricos adoptan predominantemente un ángulo de presión de 20°, mientras que en los sistemas imperiales se encuentran tanto 14,5° como 20°.

5. ¿Cuántas entradas debe tener un tornillo para lograr una eficiencia superior al 80 %?  
   Para sobrepasar el 80 % de rendimiento se requieren al menos 2 entradas; con 3 o más entradas y ángulos de avance por encima de 15° se alcanzan eficiencias del 85 % al 95 %.

6. ¿Qué viscosidad de aceite se recomienda para un tornillo sin fin de carga media a alta?  
   Para condiciones de carga media a alta se recomienda un aceite ISO VG 460 (equivalente a SAE 140), preferiblemente con aditivos de extrema presión (EP) que protejan contra el desgaste por deslizamiento.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **mcmaster.com**: https://www.mcmaster.com/products/worm-gears/
