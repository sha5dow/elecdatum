---
title: "Embragues de disco tipos"
sidebar:
  label: "Embragues de disco tipos"
description: "Ficha tecnica: Embragues de disco tipos"
keywords: ["disc clutch types single multi-plate", "machine-elements"]
category: "machine-elements"
topic: "clutches-brakes"
subcategory: "disc-clutches"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

Los embragues de disco son mecanismos de fricción diseñados para conectar y desconectar dos ejes en rotación, transfiriendo par torsor mediante el contacto axial de superficies planas. Su clasificación principal se basa en el número de discos de fricción: **monodisco** (un solo disco) y **multidisco** (múltiples discos intercalados), cada uno optimizado para rangos específicos de par, velocidad y condiciones de operación. La selección adecuada depende de la potencia a transmitir, el espacio disponible, la frecuencia de accionamiento y el entorno de trabajo.

## Principio de funcionamiento

El embrague de disco opera bajo el principio de fricción seca o húmeda entre superficies planas presionadas axialmente. Un disco de fricción, montado sobre estrías en el eje de salida, es comprimido contra un volante de inercia solidario al eje de entrada mediante un plato de presión accionado por resortes. La fuerza axial aplicada genera un par de fricción proporcional al coeficiente de rozamiento, la fuerza normal y el radio efectivo del disco. Cuando el conductor pisa el pedal, la horquilla desplaza el cojinete de empuje, venciendo la fuerza de los resortes y separando el disco de fricción del volante, interrumpiendo así la transmisión de potencia. En un sistema multidisco, varios discos metálicos y forrados se intercalan para multiplicar la superficie de fricción sin aumentar el diámetro.

## Fórmulas de cálculo para embragues de disco

### Capacidad de par torsor

El par torsor máximo transmisible por un embrague de disco de fricción se calcula según la teoría de presión uniforme:

```
T = n · μ · Fa · rm · c
```

Donde:
- **T** = Par torsor transmisible (N·m / lb·ft)
- **n** = Número de superficies de fricción (2 caras para monodisco; 2n para n discos interiores en multidisco)
- **μ** = Coeficiente de fricción del material de forro (adimensional)
- **Fa** = Fuerza axial aplicada por los resortes (N / lbf)
- **rm** = Radio medio del forro de fricción = (De + Di) / 2 (m / in)
- **c** = Factor de servicio (1,0–3,0 según aplicación)

| Parámetro | Monodisco típico | Multidisco típico |
| --- | --- | --- |
| Coeficiente de fricción (seco) | μ = 0,30 – 0,50 | μ = 0,30 – 0,45 |
| Coeficiente de fricción (húmedo) | μ = 0,05 – 0,15 | μ = 0,05 – 0,15 |
| Presión superficial admisible | 0,2 – 0,4 MPa / 29 – 58 psi | 0,15 – 0,35 MPa / 22 – 51 psi |
| Número de superficies fricción | 2 | 4 – 20+ |

### Fórmula de desgaste y vida útil

La pérdida de espesor del forro por desgaste se estima con la fórmula de trabajo de rozamiento acumulado:

```
Δh = kw · p · v · t
```

- **Δh** = Desgaste lineal (m / in)
- **kw** = Coeficiente de desgaste específico (m²/N / in²/lbf)
- **p** = Presión de contacto (Pa / psi)
- **v** = Velocidad de deslizamiento (m/s / ft/min)
- **t** = Tiempo acumulado de patinaje (s)

La vida útil del embrague (en ciclos) para embragues industriales de uso intermitente oscila entre 500 000 y 2 000 000 de ciclos en condiciones nominales, asumiendo mantenimiento y lubricación adecuados.

### Fórmula de generación de calor durante el embrague

La energía disipada como calor durante un acoplamiento se calcula como:

```
Q = ½ · J · ω² · (T_embrague / (T_embrague – T_resistente))
```

- **Q** = Energía térmica generada (J / BTU)
- **J** = Momento de inercia reducido al eje del embrague (kg·m² / lb·ft²)
- **ω** = Velocidad angular inicial del eje motor antes del acoplamiento (rad/s)
- **T embrague** = Par transmitido por el embrague (N·m / lb·ft)
- **T resistente** = Par resistente de la carga (N·m / lb·ft)

### Fórmula de tensiones en el disco giratorio

Un disco de embrague en rotación experimenta tensiones radiales y tangenciales proporcionales a la velocidad angular y la densidad del material. La tensión radial máxima en un disco macizo rotatorio se expresa como:

```
σz = (ω² · r² · ρ) / 3 = (v² · ρ) / 3
```

Donde:
- **σz** = Tensión en el disco (Pa / psi)
- **ω** = Velocidad angular (rad/s)
- **r** = Radio del disco (m / in)
- **ρ** = Densidad del material (kg/m³ / lb/in³)
- **v** = Velocidad periférica = ω·r (m/s / ft/s)

Para un anillo rotatorio, la tensión se calcula como:

```
σz = ω² · ρ · (r₁² + r₁·r₂ + r₂²) / 3
```

- **r₁** = Radio exterior del anillo (m / in)
- **r₂** = Radio interior del anillo (m / in)

| Material del disco | Densidad (kg/m³ / lb/in³) | Tensión de diseño típica (MPa / ksi) |
| --- | --- | --- |
| Aleación de aluminio | 2700 / 0,0975 | 150 – 280 / 21,8 – 40,6 |
| Aleación de titanio | 4500 / 0,1626 | 650 / 94,3 |
| Acero aleado templado | 7800 / 0,2818 | 400 – 900 / 58,0 – 130,5 |
| Compuesto carbono-epoxi 40% | 1550 / 0,0560 | 750 / 108,8 |
| Compuesto kevlar-epoxi 40% | 1400 / 0,0506 | 1000 / 145,0 |

Las velocidades periféricas típicas de los discos de embrague varían entre 30 m/s / 5906 ft/min y 70 m/s / 13 779 ft/min para aplicaciones industriales estándar. La fuerza centrífuga a altas revoluciones puede provocar la auto-desintegración del disco si la tensión supera el límite de rotura del material.

## Tipos de embragues de disco

### Monodisco (de placa única)

El embrague monodisco incorpora un único disco de fricción forrado por ambas caras, comprimido entre el volante motor y el plato de presión. Es el tipo predominante en automóviles con transmisión manual, motocicletas de media y alta cilindrada, y maquinaria agrícola ligera. Su diámetro típico oscila entre 180 mm / 7,09 in y 350 mm / 13,78 in, con una capacidad de par de 200 a 800 N·m / 148 a 590 lb·ft en automoción. El accionamiento puede ser por muelles helicoidales periféricos o por diafragma (Belleville), ofreciendo este último una fuerza de pedal más constante a lo largo de la vida del forro y mejor compensación del desgaste.

### Multidisco (de placas múltiples)

El embrague multidisco emplea un paquete de discos alternados: discos metálicos (acero) que giran con el cubo estriado y discos forrados (bronce sinterizado, fibra de carbono o papel) que giran con la campana exterior. Esta configuración multiplica la superficie de fricción sin aumentar el diámetro, reduciendo la inercia rotacional y mejorando la disipación térmica en espacios confinados. El número de discos varía entre 3 y 15 en aplicaciones convencionales.

| Característica | Embrague monodisco | Embrague multidisco |
| --- | --- | --- |
| Nº de discos de fricción | 1 (2 caras) | 2 a 15+ |
| Diámetro típico (mm / in) | 180 – 400 / 7,09 – 15,75 | 80 – 250 / 3,15 – 9,84 |
| Capacidad de par (N·m / lb·ft) | 200 – 3000 / 148 – 2213 | 100 – 5000 / 74 – 3688 |
| Peso aproximado (kg / lb) | 4 – 25 / 8,8 – 55,1 | 2 – 20 / 4,4 – 44,1 |
| Refrigeración típica | Aire (seco) | Aceite (húmedo) o aire |
| Aplicación principal | Automoción manual | Motocicletas, maquinaria CNC, prensas |

Los embragues multidisco pueden ser **secos** o **húmedos**. En la versión húmeda, los discos operan sumergidos en aceite, que refrigera, lubrica y prolonga la vida útil de los forros, aunque con una ligera reducción del coeficiente de fricción efectiva (típicamente μ = 0,10 – 0,15 en baño de aceite). Para aplicaciones de competición (drag racing), se emplean multidisco secos con forros cerámicos de alto coeficiente de fricción y gran resistencia térmica.

### Embrague centrífugo de disco

Una variante especial es el embrague centrífugo, donde los discos de fricción no son presionados por resortes axiales, sino por la propia fuerza centrífuga generada por masas o zapatas pivotantes al aumentar las revoluciones del motor. Cuando el eje motor alcanza una velocidad de acoplamiento predefinida (típicamente 1500 a 2500 rpm), las masas centrífugas vencen los resortes de retorno y presionan los discos entre sí, transmitiendo el par. Por debajo de esa velocidad, el embrague permanece desacoplado, permitiendo el ralentí sin carga. Se utiliza en minimotos, karts y algún vehículo industrial ligero.

## Aplicaciones

| Aplicación | Tipo de embrague recomendado | Rango de par típico (N·m / lb·ft) | Observaciones |
| --- | --- | --- | --- |
| Automóvil de pasajeros (manual) | Monodisco seco | 150 – 400 / 111 – 295 | Accionamiento por diafragma |
| Motocicleta de calle | Multidisco húmedo | 40 – 150 / 30 – 111 | Bañado en aceite motor |
| Motocicleta de competición | Multidisco seco | 80 – 200 / 59 – 148 | Forros cerámicos, refrigeración por aire |
| Vehículo pesado / camión | Monodisco seco (Ø > 350 mm / 13,78 in) | 800 – 2500 / 590 – 1844 | Reforzado, con servoasistencia |
| Maquinaria textil / CNC | Multidisco húmedo | 10 – 100 / 7,4 – 74 | Alta cadencia de acoplamientos |
| Prensa mecánica | Multidisco seco | 1000 – 5000 / 738 – 3688 | Accionamiento neumático |
| Embrague centrífugo (kart/minimoto) | Centrífugo de disco | 5 – 30 / 3,7 – 22,1 | Acople automático por rpm |
| Transmisión de cadena cinemática agrícola | Monodisco seco | 250 – 600 / 184 – 443 | Toma de fuerza (TDF) |

## Mantenimiento y solución de averías

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| El embrague patina (aumentan rpm sin acelerar) | Forro desgastado (espesor < 2 mm / 0,079 in), muelles de presión débiles, contaminación de aceite en seco | Sustituir disco de embrague y comprobar retenes de cigüeñal |
| Acoplamiento brusco (tirones al arrancar) | Forro cristalizado, plato de presión deformado, cable de accionamiento agarrotado | Rectificar volante, sustituir disco y plato |
| El pedal no retorna o está esponjoso | Aire en el circuito hidráulico, bombín emisor/receptor defectuoso, horquilla desgastada | Purgar sistema hidráulico, sustituir componentes defectuosos |
| El embrague no desembraga (imposible meter marcha) | Disco pegado al volante por óxido, cable partido, varillaje desajustado, cojinete de empuje gripado | Liberar disco (arrancar en marcha con pedal pisado), sustituir cable/cojinete |
| Vibración durante el acoplamiento | Alabeo del disco (> 0,5 mm / 0,020 in), amortiguadores de torsión rotos, desalineación | Sustituir disco de embrague, verificar centrado con herramienta |
| Ruido metálico o chirrido | Cojinete de empuje desgastado, piloto del cigüeñal seco, muelles de amortiguación rotos | Sustituir cojinete de empuje y engrasar piloto |
| Calentamiento excesivo y olor a quemado | Patinaje severo, carga excesiva, tiempo de acoplamiento prolongado | Reducir carga, verificar fuerza de resortes, mejorar refrigeración |

## Glosario de términos técnicos

- **Cojinete de empuje (release bearing):** Rodamiento axial que transmite la fuerza del pedal a los diafragmas o muelles del plato de presión para desacoplar el embrague.
- **Disco de fricción (friction disc):** Componente central del embrague, forrado con material de fricción en ambas caras y dotado de un cubo estriado que conecta con el eje de entrada de la transmisión.
- **Factor de servicio (service factor):** Coeficiente multiplicador que sobredimensiona el embrague para absorber vibraciones, sobrecargas transitorias y garantizar una vida útil mínima; varía entre 1,0 y 3,0.
- **Horquilla de embrague (release fork):** Palanca pivotante que transforma el movimiento del cable o bombín en desplazamiento axial del cojinete de empuje.
- **Muelle de diafragma (diaphragm spring):** Resorte cónico de chapa de acero que ejerce la fuerza de presión; ofrece una curva de fuerza no lineal, más ligera en posición pisada que los muelles helicoidales.
- **Plato de presión (pressure plate):** Disco metálico mecanizado que, bajo la acción de los resortes, aprisiona el disco de fricción contra el volante motor.
- **Patinaje (slippage):** Deslizamiento relativo controlado entre las superficies de fricción durante el acoplamiento; necesario para arrancar suavemente pero perjudicial si es prolongado por desgaste acelerado y sobrecalentamiento.
- **Volante bimasa (dual-mass flywheel):** Volante de inercia dividido en dos masas unidas por un sistema de muelles-amortiguador, que absorbe las vibraciones torsionales del motor diésel y reduce el esfuerzo sobre el disco de embrague.

## Preguntas frecuentes

1. **¿Cuál es el espesor mínimo admisible del forro de un disco de embrague monodisco?** El espesor mínimo antes de la sustitución suele ser de 2,0 mm / 0,079 in medido desde la superficie del forro hasta la cabeza de los remaches, aunque esta cota varía entre fabricantes entre 1,5 mm / 0,06 in y 3,0 mm / 0,12 in.

2. **¿Cuántos discos puede incorporar un embrague multidisco húmedo?** Un embrague multidisco húmedo puede incorporar entre 2 y 15 discos de fricción en configuraciones estándar, proporcionando entre 4 y 30 superficies de contacto en un diámetro compatible con cárteres compactos de 120 mm / 4,72 in a 250 mm / 9,84 in.

3. **¿Qué par máximo puede transmitir un embrague monodisco de automóvil antes de requerir multidisco?** Un embrague monodisco para turismo admite hasta 400 N·m / 295 lb·ft de par motor con diámetros de 240 mm / 9,45 in; por encima de 450 N·m / 332 lb·ft se recomienda pasar a configuraciones multidisco o discos de alto rendimiento.

4. **¿Cuál es la temperatura máxima de operación segura para un forro orgánico en embrague seco?** Los forros orgánicos estándar soportan picos de temperatura de hasta 300 °C / 572 °F de forma intermitente; exposiciones prolongadas por encima de 250 °C / 482 °F aceleran la degradación y el desgaste a tasas de 5 μm/s / 0,0002 in/s.

5. **¿Qué velocidad de acoplamiento centrífugo es habitual en embragues de karting?** La velocidad de acoplamiento en embragues centrífugos de karting se calibra típicamente entre 2000 rpm y 3500 rpm, dependiendo de la cilindrada del motor y el peso de las zapatas centrífugas, con un par de arranque de 5 N·m a 15 N·m / 3,7 lb·ft a 11,1 lb·ft.

6. **¿Cada cuántos kilómetros debe revisarse el espesor del disco de embrague en un automóvil de pasajeros?** La vida útil media de un disco de embrague en uso mixto urbano-carretera oscila entre 80 000 km y 160 000 km (50 000 a 100 000 millas), aunque la primera inspección visual suele recomendarse a los 60 000 km / 37 500 millas.

## Consideraciones de montaje

El montaje de un embrague de disco exige una alineación precisa entre el eje del cigüeñal y el eje primario de la caja de cambios. Se recomienda el uso de un mandril centrador para posicionar el disco de fricción antes de apretar los tornillos del plato de presión. La desalineación máxima admisible en la punta del eje primario no debe superar 0,15 mm / 0,006 in de diámetro indicado. Durante la instalación, se debe aplicar una fina capa de grasa de alta temperatura en las estrías del cubo del disco y en la superficie de apoyo del cojinete de empuje, evitando cualquier contacto con las superficies de fricción. Los tornillos del plato de presión deben apretarse en cruz y en al menos dos etapas, respetando un par de apriete de 25 a 30 N·m / 18 a 22 lb·ft para vehículos ligeros, y comprobar el juego libre del pedal tras la instalación para asegurar un correcto recorrido del cojinete de empuje.

## Dimensiones y especificaciones

| Parámetro | Monodisco seco | Multidisco húmedo |
| --- | --- | --- |
| Diámetro exterior disco (mm / in) | 180 – 400 / 7,09 – 15,75 | 80 – 250 / 3,15 – 9,84 |
| Diámetro interior forro (mm / in) | 125 – 280 / 4,92 – 11,02 | 50 – 180 / 1,97 – 7,09 |
| Espesor disco nuevo (mm / in) | 7,5 – 10,0 / 0,295 – 0,394 | 1,5 – 4,0 / 0,059 – 0,157 (por disco) |
| Número de estrías | 20 – 28 | 15 – 30 |
| Diámetro cigüeñal / eje (mm / in) | 25 – 45 / 0,984 – 1,772 | 15 – 40 / 0,591 – 1,575 |
| Fuerza de presión de plato (N / lbf) | 4000 – 9000 / 899 – 2023 | 800 – 5000 / 180 – 1124 |
| Carrera de desembrague (mm / in) | 8 – 12 / 0,315 – 0,472 | 2 – 5 / 0,079 – 0,197 |

## Selección según aplicación

| Criterio | Aplicación ligera | Aplicación media | Aplicación pesada |
| --- | --- | --- | --- |
| Tipo de embrague | Monodisco seco Ø < 220 mm / 8,66 in | Monodisco seco Ø 220 – 310 mm / 8,66 – 12,20 in | Multidisco seco o húmedo |
| Par máximo (N·m / lb·ft) | < 200 / 148 | 200 – 500 / 148 – 369 | > 500 / 369 |
| Factor de servicio recomendado | 1,3 – 1,6 | 1,6 – 2,2 | 2,2 – 3,0 |
| Material del forro | Orgánico NAO | Orgánico con cobre / semimetálico | Cerámico / sinterizado / carbono |
| Refrigeración | Aire natural | Aire forzado | Aceite (húmedo) o aire con carcasas ventiladas |
| Ciclos de acoplamiento diarios | < 100 | 100 – 500 | > 500 |
| Ejemplo típico | Torno pequeño, cortacésped | Automóvil de pasajeros, furgoneta | Prensas, maquinaria de construcción |

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/stress-rotation-disc-ring-body-d_1752.html
- **mcmaster.com**: https://www.mcmaster.com/products/clutches/
