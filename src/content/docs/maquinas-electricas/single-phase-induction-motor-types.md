---
title: "Motor de inducción monofásico tipos"
sidebar:
  label: "Motor de inducción monofásico tipos"
description: "Ficha tecnica: Motor de inducción monofásico tipos"
keywords: ["single phase induction motor types capacitor", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "single-phase-induction"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los motores de inducción monofásicos abarcan potencias desde fracciones de hp hasta 10 hp / 7.5 kW, siendo la opción predominante en aplicaciones domésticas y comerciales donde no se dispone de alimentación trifásica. El rotor siempre es de jaula de ardilla, y la diferencia entre los tipos radica en el método empleado para generar un campo magnético giratorio durante el arranque y, en algunos casos, durante la marcha.

## Principio de funcionamiento del motor monofásico
El devanado monofásico principal produce un campo magnético pulsante que puede descomponerse en dos campos giratorios de igual magnitud y sentidos opuestos; este campo por sí solo no genera par de arranque (a motor parado los pares de los dos campos se cancelan). Para lograr el arranque se añade un devanado auxiliar desfasado espacialmente 90° eléctricos, alimentado a través de un elemento que introduce un desfase temporal de 30° a 50° (típicamente un capacitor o una resistencia), con lo que se obtiene un campo giratorio elíptico suficiente para vencer la inercia.

## Clasificación de los motores de inducción monofásicos
Existen cinco tipos principales de motores de inducción monofásicos clasificados según el método de arranque y la conexión del devanado auxiliar: fase partida, capacitor de arranque, capacitor permanente (PSC), dos capacitores (arranque y marcha) y polos sombreados. La tabla siguiente resume sus características distintivas.

| Tipo | Capacitor de arranque | Capacitor de marcha | Par de arranque (pu) | Aplicaciones representativas |
| --- | --- | --- | --- | --- |
| Fase partida | No | No | 1.3‑2.0 / 130‑200 % | Ventiladores, bombas centrífugas pequeñas, sopladores ligeros |
| Capacitor de arranque | Sí (desconectado a ~75 % velocidad) | No | 2.5‑3.5 / 250‑350 % | Compresores, transportadores, bombas de desplazamiento positivo |
| Capacitor permanente (PSC) | No | Sí (conectado siempre) | 0.5‑1.0 / 50‑100 % | Ventiladores de tiro forzado, sopladores, bombas de circulación |
| Dos capacitores | Sí (desconectado a ~75 % velocidad) | Sí (conectado siempre) | 2.5‑3.5 / 250‑350 % | Compresores herméticos, equipos de aire acondicionado, aplicaciones de alto par y eficiencia |
| Polos sombreados | No | No | 0.3‑0.5 / 30‑50 % | Ventiladores de equipamiento pequeño, extractores de baño, electrodomésticos de muy baja potencia |

## Tabla comparativa de capacitancias y tensiones de capacitores
Los valores típicos de los capacitores empleados en los motores monofásicos de tipo capacitor se detallan en función de si operan solo durante el arranque o de forma continua.

| Parámetro | Capacitor de arranque | Capacitor de marcha |
| --- | --- | --- |
| Capacitancia | >70 µF / >70 µF (hasta cientos de µF) | 1.5‑100 µF / 1.5‑100 µF |
| Tensiones nominales (VCA) | 125, 165, 250, 330 VCA / 125, 165, 250, 330 VAC | 250, 370, 440 VCA / 250, 370, 440 VAC |
| Tecnología constructiva | Electrolítico de aluminio no polarizado | Film de polipropileno (polímero de bajas pérdidas) |
| Servicio | Intermitente (solo durante el arranque) | Continuo |

## Curva característica par‑velocidad
La curva par‑velocidad de un motor de inducción monofásico presenta cuatro puntos de interés: el par de arranque o de rotor bloqueado (típicamente 130‑350 % del nominal según el tipo), el par de aceleración mínimo (*pull‑up*), el par máximo o de ruptura (*break‑down*, 200‑350 %) y el par nominal a la velocidad de régimen. El par de plena carga puede calcularse mediante las siguientes fórmulas, según el sistema de unidades utilizado.

> **T = 9550 · P<sub>kW</sub> / n<sub>r</sub>** *(par nominal en N·m, potencia en kW, velocidad en rpm)*
> **T = 5252 · P<sub>hp</sub> / n<sub>r</sub>** *(par nominal en lb·ft, potencia en hp, velocidad en rpm)*

Donde:
- *T*: par de plena carga
- *P<sub>kW</sub>*: potencia nominal en kilowatts
- *P<sub>hp</sub>*: potencia nominal en caballos de fuerza (hp)
- *n<sub>r</sub>*: velocidad nominal de rotación (rpm)

El par de arranque elevado de los motores con capacitor de arranque se debe al alto desfase que introduce el capacitor en el devanado auxiliar; estos motores alcanzan el 75 % de la velocidad nominal antes de que un interruptor centrífugo desconecte el capacitor, momento en el cual el par exhibe el punto mínimo de aceleración para luego ascender hasta el par máximo.

## Selección y aplicaciones típicas
El par de arranque requerido por la carga es el criterio determinante en la selección del tipo: compresores alternativos demandan 200‑300 % del par nominal — se escoge capacitor de arranque o dos capacitores —, mientras que ventiladores centrífugos y bombas de baja inercia solo necesitan 50‑80 % (fase partida o PSC). Los motores PSC, al mantener el capacitor de marcha permanentemente, mejoran el factor de potencia (0.6‑0.8 a plena carga) y el rendimiento en régimen, siendo la opción preferida en climatización. Los motores de polos sombreados se limitan a potencias inferiores a 1/4 hp / 186 W, con un costo mínimo y construcción simple.

## Preguntas frecuentes (FAQ)
### ¿Cuál es el rango habitual de capacitancia de un capacitor de arranque?
El capacitor de arranque presenta una capacitancia superior a 70 µF, con valores que frecuentemente alcanzan varios cientos de microfaradios, y se fabrica en clases de tensión de 125, 165, 250 y 330 V CA / 125, 165, 250 y 330 V AC.

### ¿Qué tensión máxima soporta un capacitor de marcha estándar?
Los capacitores de marcha de film de polipropileno se ofrecen en tensiones nominales de 250, 370 y 440 V CA / 250, 370 y 440 V AC, siendo 440 V CA el valor máximo común en aplicaciones de aire acondicionado.

### ¿A qué velocidad se desconecta el capacitor de arranque?
El interruptor centrífugo desconecta el capacitor de arranque a aproximadamente el 75 % de la velocidad de sincronismo, momento a partir del cual el motor funciona únicamente con el devanado principal o con el capacitor de marcha si existe.

### ¿Cuál es el par de arranque típico de un motor de fase partida?
Un motor de fase partida desarrolla entre el 130 % y el 200 % del par nominal a rotor bloqueado, suficiente para cargas de ventilación pero insuficiente para aplicaciones de alta inercia.

### ¿Hasta qué potencia se utilizan motores monofásicos de capacitor permanente (PSC)?
Los motores PSC se fabrican normalmente hasta potencias de 5 hp / 3.7 kW, cubriendo la mayoría de las necesidades de ventiladores, sopladores y bombas centrífugas en sistemas de climatización.

### ¿Qué factor de potencia presenta un motor de inducción monofásico a plena carga?
El factor de potencia a plena carga de los motores monofásicos de inducción se sitúa habitualmente entre 0.6 y 0.8, dependiendo del diseño, siendo mayor en los tipos con capacitor de marcha permanente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
