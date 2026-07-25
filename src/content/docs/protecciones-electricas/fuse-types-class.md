---
title: "Tipos de fusibles clase J RK1 T"
sidebar:
  label: "Tipos de fusibles clase J RK1 T"
description: "Ficha tecnica: Tipos de fusibles clase J RK1 T"
keywords: ["fuse types class J RK1 T specifications", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "fuses"
subcategory: "fuse-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los fusibles clase J, RK1 y T son dispositivos de protección limitadores de corriente conforme a las normas UL 248 y CSA C22.2, diseñados para operar en circuitos de distribución de baja tensión hasta 600 VCA. El fusible clase J, regido por la norma UL 248-8, se caracteriza por su tamaño compacto y alta capacidad de interrupción de 200 kA simétricos; el fusible clase RK1, bajo UL 248‑12, incorpora un elemento de fusible de doble elemento con rechazo mecánico que impide la inserción de cartuchos de clase H o K; el fusible clase T, especificado en UL 248‑15, presenta la mayor densidad de energía por volumen, con un poder de corte típico de 200 kA y dimensiones hasta un 40 % menores que las de un fusible clase J equivalente. Los tres tipos utilizan elemento fusible de plata o aleación de plata encapsulado en arena de sílice, lo que garantiza la extinción rápida del arco eléctrico en condiciones de cortocircuito.

## Características técnicas

| Parámetro | Clase J | Clase RK1 | Clase T |
|---|---|---|---|
| Tensión nominal VCA | 600 V / — | 250 V / — y 600 V / — | 300 V / — y 600 V / — |
| Rango de corrientes | 1 A a 600 A | 0,1 A a 600 A | 1 A a 800 A |
| Poder de corte (simétrico) | 200 kA / — | 200 kA / — (600 V), 300 kA / — (250 V) | 200 kA / — (600 V), 200 kA / — (300 V) |
| Clase de limitación | Limitador de corriente | Limitador de corriente, doble elemento disponible | Limitador de corriente de acción rápida |
| Estándar de referencia | UL 248-8, CSA C22.2 No. 248.8 | UL 248-12, CSA C22.2 No. 248.12 | UL 248-15, CSA C22.2 No. 248.15 |
| Temperatura de operación | –40 °C / –40 °F a 100 °C / 212 °F | –40 °C / –40 °F a 100 °C / 212 °F | –40 °C / –40 °F a 100 °C / 212 °F |

## Clasificación según tiempo de respuesta

- **Acción rápida (Fast-acting)**. Sin retardo intencionado, ideal para cargas resistivas y circuitos sin picos de arranque. La constante de prearco I²t es baja, típicamente inferior a 10 000 A²·s para un cartucho de 100 A.
- **Retardo de tiempo (Time-delay)**. Soportan sobrecargas momentáneas de hasta 5 veces la corriente nominal durante 10 s sin fundir. La clase RK1 con doble elemento es la representante principal; el elemento de fusible contiene una masa térmica adicional que retrasa la fusión en condiciones de arranque de motores.
- **Dual-element**. Exclusivo de las clases RK1 y RK5, integra un punto de soldadura calibrado para cortocircuitos y una sección térmica para sobrecargas. El comportamiento de sobrecarga se define a partir del 135 % de la corriente nominal, con un tiempo de apertura mínimo de 1 h.

## Sección constructiva y dimensional

Los fusibles clase J emplean cuerpo cilíndrico de melamina o epoxi reforzado con fibra de vidrio, con terminales tipo casquillo (ferrule) hasta 60 A y terminales tipo cuchilla (blade) para corrientes superiores. Las dimensiones estándar de un fusible clase J de 600 A son 170 mm / 6,69 in de longitud y 50,8 mm / 2,0 in de diámetro. Los fusibles RK1 comparten dimensiones externas con las clases H y K, pero incluyen una ranura de rechazo en sus terminales; las longitudes varían entre 76,2 mm / 3 in para cartuchos de 30 A y 339,7 mm / 13,37 in para 600 A. Los fusibles clase T reducen hasta un 40 % el volumen con respecto a uno clase J equivalente; un cartucho de 400 A clase T mide aproximadamente 101,6 mm / 4,0 in de largo y 25,4 mm / 1,0 in de diámetro.

## Aplicaciones por clase

| Clase | Aplicación principal | Ejemplo concreto |
|---|---|---|
| J | Protección de alimentadores de distribución, tableros de alumbrado y fuerza, centros de control de motores (CCM) con espacio limitado | Tablero de 480 V / 277 V para un edificio comercial de 5000 m² / 53 820 ft² |
| RK1 | Protección de circuitos ramales de motores y transformadores donde se requiere selectividad y rechazo mecánico | Arrancador de motor de inducción de 50 HP / 37 kW en una planta de tratamiento de aguas |
| T | Protección en gabinetes de espacio ultra-reducido, seccionadores compactos y barras de distribución de alta densidad | Seccionador principal de 1200 A en un centro de datos con módulos de potencia de 300 kW |

## Curva de disparo y energía de paso

La característica de disparo de los fusibles limitadores se define mediante la integral de Joule para el elemento fusible:

> **I²t = ∫ i² dt** donde I es la corriente instantánea y t el tiempo de fusión.

| Símbolo | Significado | Unidad |
|---|---|---|
| I²t | Energía de paso (integral de Joule) | A²·s |
| I | Corriente instantánea de cortocircuito | A |
| t | Tiempo de fusión (pre‑arco más arco) | s |

En sistemas trifásicos de 480 V con 65 kA de corriente de falla simétrica disponible, un fusible clase J de 200 A limita la corriente de pico de paso a menos de 18 kA, con un I²t de despeje alrededor de 15 000 A²·s. Un fusible clase T de igual calibre reduce la energía de paso en aproximadamente un 30 % adicional debido a su mayor velocidad de actuación.

## Instalación y selectividad

Los fusibles clase J y T se instalan en portafusibles sin mecanismo de rechazo; el cartucho debe ser seleccionado por el personal calificado según las marcas del equipo. La clase RK1 se aloja únicamente en bases con receptáculo de ranura, mecanismo que impide físicamente la inserción de fusibles clase H o K. Para lograr selectividad amperimétrica entre fusibles, se recomienda una relación mínima de 2:1 en corrientes nominales (ej. 200 A aguas arriba y 100 A aguas abajo). La selectividad en zona de cortocircuito se verifica comparando las curvas de energía de paso; el fusible aguas arriba debe tener un I²t de prearco que supere al I²t de despeje total del fusible aguas abajo.

## Preguntas frecuentes (FAQ)

### ¿Cuál es el poder de corte máximo de un fusible clase J a 600 V?

El poder de corte máximo de un fusible clase J a 600 V es 200 kA simétricos RMS, lo que equivale a 200 000 A eficaces, suficiente para las corrientes de falla más severas en instalaciones industriales. Esta capacidad de interrupción asegura que el fusible pueda despejar la falla sin fragmentación del cuerpo del cartucho.

### ¿En qué rango de corrientes están disponibles los fusibles clase T?

Los fusibles clase T cubren un rango de corrientes desde 1 A hasta 800 A, en tensiones de 300 V y 600 V. La versión de 300 V se usa en sistemas de distribución monofásicos o trifásicos de 208 V/240 V, mientras que la de 600 V es dominante en sistemas industriales de 480 V.

### ¿Cuánto mide un fusible clase J de 60 A?

Un fusible clase J de 60 A mide 57,2 mm / 2,25 in de longitud y 20,6 mm / 0,81 in de diámetro. Estos cartuchos utilizan terminales tipo casquillo (ferrule) adecuados para portafusibles con capacidad de 0 A a 30 A y de 31 A a 60 A.

### ¿Qué temperatura de operación soportan los fusibles RK1?

Los fusibles clase RK1 soportan una temperatura de operación continua desde –40 °C / –40 °F hasta 100 °C / 212 °F sin degradación de sus características de disparo. La elevación de temperatura en los terminales no debe superar 75 °C / 167 °F para cumplir con las pruebas de calentamiento de UL 248.

### ¿Cuál es la corriente nominal máxima de un fusible clase J?

La corriente nominal máxima de un fusible clase J es 600 A, con tensión nominal de 600 VCA. Este tamaño de cartucho utiliza terminales tipo cuchilla con un espaciamiento estándar entre centros de 44,5 mm / 1,75 in para montaje en bases de seccionador.

### ¿Qué energía de paso I²t se requiere para proteger un motor de 50 HP?

Para un motor de inducción de 50 HP / 37 kW a 460 V, trifásico, con corriente a plena carga de 65 A, se recomienda un fusible clase RK1 de retardo de tiempo de 100 A, cuyo I²t de despeje máximo ante un cortocircuito de 100 kA es del orden de 8000 A²·s, valor que limita eficazmente los esfuerzos electromagnéticos y térmicos en los devanados.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/electrical-fuse-hrc-fuse-high-rupturing-capacity/
