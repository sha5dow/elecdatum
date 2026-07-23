---
title: "Módulos normalizados ISO"
sidebar:
  label: "Módulos normalizados ISO"
description: "Ficha tecnica: Módulos normalizados ISO"
keywords: ["gear modules ISO DIN standard table", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "gear-modules"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Definición y principios

El módulo normalizado ISO es el parámetro fundamental que define el tamaño de los dientes en engranajes cilíndricos de perfil evolvente. Representa la relación entre el diámetro de referencia (mm) y el número de dientes del engrane (m = d/z). Un módulo de 1,5 mm indica que por cada diente la rueda aumenta 1,5 mm en su diámetro primitivo.

La normalización internacional bajo ISO 54 unifica las dimensiones del dentado para garantizar la intercambiabilidad de engranajes fabricados en cualquier parte del mundo. El sistema de módulo permite construir transmisiones robustas porque relaciona directamente el espesor del diente con la capacidad de carga y el paso circular. En el sistema imperial se emplea el paso diametral (DP), inversamente proporcional al módulo (DP = 25.4 / m).

## Dimensiones normalizadas

La siguiente tabla recoge las series I (preferente) y II (complementaria) de módulos según ISO 54, junto con su equivalente en paso diametral del sistema imperial.

| Módulo (mm) / Paso diametral (dientes/pulg) | Serie ISO |
|-----------------------------------------------|------------|
| 1 mm / 25.4 dientes/pulg                        | I          |
| 1.25 mm / 20.32 dientes/pulg                     | I          |
| 1.5 mm / 16.93 dientes/pulg                      | I          |
| 1.75 mm / 14.51 dientes/pulg                     | II         |
| 2 mm / 12.7 dientes/pulg                         | I          |
| 2.25 mm / 11.29 dientes/pulg                     | II         |
| 2.5 mm / 10.16 dientes/pulg                      | I          |
| 2.75 mm / 9.24 dientes/pulg                      | II         |
| 3 mm / 8.47 dientes/pulg                         | I          |
| 3.5 mm / 7.26 dientes/pulg                       | II         |
| 4 mm / 6.35 dientes/pulg                         | I          |
| 4.5 mm / 5.64 dientes/pulg                       | II         |
| 5 mm / 5.08 dientes/pulg                         | I          |
| 5.5 mm / 4.62 dientes/pulg                       | II         |
| 6 mm / 4.23 dientes/pulg                         | I          |
| 7 mm / 3.63 dientes/pulg                         | II         |
| 8 mm / 3.18 dientes/pulg                         | I          |
| 9 mm / 2.82 dientes/pulg                         | II         |
| 10 mm / 2.54 dientes/pulg                        | I          |
| 11 mm / 2.31 dientes/pulg                        | II         |
| 12 mm / 2.12 dientes/pulg                        | I          |
| 14 mm / 1.81 dientes/pulg                        | II         |
| 16 mm / 1.588 dientes/pulg                       | I          |
| 18 mm / 1.411 dientes/pulg                       | II         |
| 20 mm / 1.27 dientes/pulg                        | I          |
| 22 mm / 1.155 dientes/pulg                       | II         |
| 25 mm / 1.016 dientes/pulg                       | I          |
| 28 mm / 0.907 dientes/pulg                       | II         |
| 32 mm / 0.794 dientes/pulg                       | I          |
| 36 mm / 0.706 dientes/pulg                       | II         |
| 40 mm / 0.635 dientes/pulg                       | I          |
| 45 mm / 0.564 dientes/pulg                       | II         |
| 50 mm / 0.508 dientes/pulg                       | I          |

Los valores de la serie I cubren la mayoría de las aplicaciones; la serie II se reserva para situaciones donde las razones de transmisión o dimensiones constructivas exigen un paso inmediato no disponible en la serie preferente. La distancia entre centros se calcula como a = m·(z₁+z₂)/2, siempre expresada en milímetros.

## Capacidad de carga

La capacidad de carga de un engrane recto de acero con dureza superficial 300 HB, ancho de cara igual a 10 veces el módulo y ángulo de presión 20°, puede estimarse según la fórmula de Lewis. A continuación se presenta una tabla orientativa del momento torsor admisible para diferentes módulos, considerando material de acero al carbono cementado y velocidad tangencial inferior a 5 m/s / 16.4 ft/s.

| Módulo (mm) / Paso diametral (dientes/pulg) | Momento torsor admisible (N·m / lb·ft) |
|-----------------------------------------------|-----------------------------------------|
| 1.5 mm / 16.93 dientes/pulg                    | 12 N·m / 8.9 lb·ft                       |
| 2 mm / 12.7 dientes/pulg                       | 35 N·m / 25.8 lb·ft                      |
| 2.5 mm / 10.16 dientes/pulg                    | 75 N·m / 55.3 lb·ft                      |
| 3 mm / 8.47 dientes/pulg                       | 130 N·m / 95.8 lb·ft                     |
| 4 mm / 6.35 dientes/pulg                       | 280 N·m / 206 lb·ft                      |
| 5 mm / 5.08 dientes/pulg                       | 500 N·m / 369 lb·ft                      |
| 6 mm / 4.23 dientes/pulg                       | 800 N·m / 590 lb·ft                      |
| 8 mm / 3.18 dientes/pulg                       | 1.600 N·m / 1180 lb·ft                   |
| 10 mm / 2.54 dientes/pulg                      | 2.800 N·m / 2065 lb·ft                   |

Los valores corresponden a un factor de seguridad estático de 2. Para engranes helicoidales se incrementa la capacidad en un 20 – 30 % gracias al mayor grado de recubrimiento. La resistencia al desgaste superficial debe verificarse mediante el criterio de presión de contacto de Hertz, empleando los límites del material seleccionado (típicamente 1200 MPa / 174 ksi para aceros templados).

## Criterios de selección

La selección del módulo normalizado se basa en los siguientes parámetros de diseño:

- **Carga transmitida:** A mayor momento torsor, mayor módulo requerido para evitar la rotura del diente por flexión. El esfuerzo se evalúa con la fórmula σ = Fₜ · Y / (b · m), donde Fₜ es fuerza tangencial, Y factor de forma, b ancho de cara y m módulo.
- **Velocidad de giro:** Velocidades altas ( > 1500 rpm) exigen módulos más pequeños y acabados superficiales finos para reducir el ruido y las vibraciones.
- **Precisión necesaria:** Los sistemas de control (servomotores, robótica) utilizan módulos finos (1 – 2 mm) para minimizar el juego angular y aumentar la rigidez torsional.
- **Material disponible:** Los engranes plásticos admiten módulos mayores que los metálicos a igualdad de carga para compensar su menor resistencia.
- **Espacio constructivo:** La distancia entre centros condiciona la suma de dientes y, por tanto, el módulo máximo posible. Siempre se prefiere un valor de la serie I.

La norma ISO 6336 proporciona métodos detallados para el cálculo de la capacidad portante, pero la regla práctica inicial es: m ≥ (2·T / (σ_lim · b · Y · z))^(1/3), con T en N·mm.

## Selección por aplicación

| Aplicación típica | Módulo recomendado (mm) / Paso diametral (dientes/pulg) |
|-------------------|----------------------------------------------------------|
| Instrumentos de medición (micrómetros, calibres) | 0.3 – 0.5 mm / 84.7 – 50.8 dientes/pulg |
| Relojería y temporizadores | 0.1 – 0.3 mm / 254 – 84.7 dientes/pulg |
| Impresoras 3D y equipos de oficina | 0.5 – 1 mm / 50.8 – 25.4 dientes/pulg |
| Servoactuadores y robótica ligera | 1 – 2 mm / 25.4 – 12.7 dientes/pulg |
| Bicicletas y transmisiones ligeras | 2 – 2.5 mm / 12.7 – 10.16 dientes/pulg |
| Bombas hidráulicas y compresores | 2.5 – 5 mm / 10.16 – 5.08 dientes/pulg |
| Máquinas herramienta (tornos, fresadoras) | 3 – 6 mm / 8.47 – 4.23 dientes/pulg |
| Cajas de cambio automotrices | 2 – 4 mm / 12.7 – 6.35 dientes/pulg |
| Reductores industriales hasta 100 kW | 5 – 10 mm / 5.08 – 2.54 dientes/pulg |
| Reductores de molinos y grandes accionamientos | 12 – 25 mm / 2.12 – 1.016 dientes/pulg |
| Transmisiones de elevación y grúas | 8 – 16 mm / 3.18 – 1.588 dientes/pulg |

Para aplicaciones de alta velocidad con silencio exigido (por ejemplo, transmisiones de helicópteros) se recurre a módulos pequeños y dentado helicoidal con recubrimiento superficial (nitruración). En ambientes sin lubricación forzada se incrementa un 20 % el módulo para reducir la presión de contacto.

## Consideraciones de montaje

El montaje de engranajes con módulos normalizados exige controlar las siguientes tolerancias y parámetros:

- **Distancia entre centros:** La tolerancia típica en una caja mecanizada es ± 0.05 mm / ± 0.002 in para módulos hasta 5 mm. Un error mayor reduce el recubrimiento y eleva el ruido.
- **Juego entre dientes (backlash):** Se recomienda 0.05 – 0.10 mm / 0.002 – 0.004 in por cada 100 mm / 3.94 in de diámetro primitivo, ajustable mediante el desplazamiento del perfil.
- **Alineación de ejes:** La desalineación paralela no debe superar 0.02 mm / 0.0008 in por cada 100 mm de ancho de cara. La desalineación angular admisible es ≤ 0.05°.
- **Lubricación:** En montajes con velocidad de deslizamiento inferior a 3 m/s / 9.8 ft/s se emplea grasa NLGI 0 – 1; por encima se usa aceite ISO VG 68 a VG 220 con sistema de salpique o forzado.
- **Ajuste de calado:** Los piñones pequeños (m < 3) se montan con ajuste H7/g6 sobre el eje para facilitar el centrado sin juego radial.
- **Fijación axial:** Para anchos de cara inferiores a 25 mm / 0.98 in basta con un prisionero de punta plana. Engranajes más anchos requieren chavetero o cono de apriete.

La verificación final del montaje se realiza con galgas de espesor sobre la distancia entre ejes y con una capa fina de azul de Prusia para comprobar el patrón de contacto.

## Preguntas frecuentes (FAQ)

**1. ¿Cuál es el módulo mínimo que se puede fabricar en acero con fresado estándar?**  
El módulo mínimo práctico es de 0.5 mm / 50.8 dientes/pulg, porque por debajo las fresas generan un acabado superficial deficiente y la resistencia del diente resulta insuficiente para la mayoría de las aplicaciones mecánicas.

**2. ¿Qué vida útil en horas tiene un engrane de módulo 3 mm con bomba de aceite?**  
Un par de engranes rectos en acero aleado con dureza 55 HRC, lubricado con aceite ISO VG 100, alcanza típicamente 25 000 horas de servicio continuo antes de que el desgaste superficial supere 0.2 mm / 0.008 in.

**3. ¿Cuánto aumenta el momento de inercia al duplicar el módulo con el mismo número de dientes?**  
El momento de inercia crece aproximadamente 16 veces porque el diámetro primitivo se duplica y la masa aumenta en proporción al cuadrado del radio.

**4. ¿A qué velocidad tangencial genera ruido excesivo un engrane recto de módulo 4 mm?**  
A partir de 12 m/s / 39.4 ft/s se superan los 85 dB(A) en cajas no insonorizadas, lo que obliga a usar dentado helicoidal o rectificado de alta precisión.

**5. ¿Cuál es el ancho de cara mínimo para un piñón de módulo 2 mm que transmite 50 N·m / 36.9 lb·ft?**  
Con acero cementado y un factor de seguridad de 2.5, se requiere un ancho mínimo de 18 mm / 0.71 in para mantener la tensión de flexión por debajo de 250 MPa / 36.3 ksi.

**6. ¿Cuánta carga radial añade un engrane recto de módulo 5 mm sobre su eje?**  
Para un momento torsor de 300 N·m / 221 lb·ft y un diámetro primitivo de 100 mm / 3.94 in, la carga radial resultante es de 6 000 N / 1 350 lbf, despreciando el ángulo de presión.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/din-standards-d_759.html
- **mcmaster.com**: https://www.mcmaster.com/products/gears/
