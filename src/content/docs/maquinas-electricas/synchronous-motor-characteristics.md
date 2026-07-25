---
title: "Motor síncrono características"
sidebar:
  label: "Motor síncrono características"
description: "Ficha tecnica: Motor síncrono características"
keywords: ["synchronous motor characteristics applications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "synchronous-motor"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un motor síncrono es una máquina eléctrica rotativa de corriente alterna que gira a una velocidad constante directamente proporcional a la frecuencia de la red de alimentación, por ejemplo 1500 rpm para un motor de 4 polos alimentado a 50 Hz, y que mantiene esta velocidad independientemente de la carga dentro de sus límites de par.

El funcionamiento se basa en la interacción entre un campo magnético giratorio generado en el estator por una corriente alterna trifásica y un campo magnético constante producido en el rotor (mediante imanes permanentes o devanados excitados con corriente continua). Cuando el rotor se acelera hasta la velocidad de sincronismo, los polos electromagnéticos del rotor se «enganchan» magnéticamente con los polos del campo giratorio del estator, dando lugar a un par uniforme y a una rotación isócrona.

## Velocidad síncrona

La velocidad síncrona de un motor síncrono se determina exclusivamente por la frecuencia de la red y el número de polos de la máquina, y se expresa mediante la siguiente fórmula:

> **N_s = (120 · f) / P**

donde:

| Variable | Significado | Unidad |
| --- | --- | --- |
| *N_s* | Velocidad síncrona | rpm (revoluciones por minuto) |
| *f* | Frecuencia de la red | Hz (hercios) |
| *P* | Número de polos del motor | ― |

Los valores prácticos más comunes son:

| Polos | 2 polos | 4 polos | 6 polos | 8 polos |
| --- | --- | --- | --- | --- |
| Red 50 Hz | 3000 / 3000 rpm | 1500 / 1500 rpm | 1000 / 1000 rpm | 750 / 750 rpm |
| Red 60 Hz | 3600 / 3600 rpm | 1800 / 1800 rpm | 1200 / 1200 rpm | 900 / 900 rpm |

## Características de par

Un motor síncrono genera un par constante durante el régimen sincronizado, pero su comportamiento transitorio se evalúa mediante varios valores de par relacionados con el arranque y la capacidad de sobrecarga. Los valores típicos expresados como múltiplos del par nominal *T_n* son:

| Par | Rango típico (× T_n) | Ejemplo para T_n = 637 N·m / 470 lb·ft |
| --- | --- | --- |
| Par de arranque | 1,5 – 2,0 | 955 – 1274 N·m / 704 – 940 lb·ft |
| Par de entrada en sincronismo (pull‑in) | 1,2 – 1,5 | 764 – 955 N·m / 563 – 704 lb·ft |
| Par máximo (pull‑out) | 2,0 – 3,5 | 1274 – 2229 N·m / 940 – 1644 lb·ft |

El par nominal se alcanza cuando el motor gira a la velocidad síncrona entregando la potencia mecánica nominal; el par máximo es el punto en que una carga mayor hace que el rotor pierda el sincronismo.

## Tipos de motores síncronos

- **Motor síncrono de imanes permanentes (PMSM)**: rotor equipado con imanes de neodimio, samario-cobalto o ferrita que generan un campo magnético constante sin necesidad de excitación eléctrica.
- **Motor síncrono de rotor bobinado (excitado por DC)**: rotor con devanados alimentados a través de anillos rozantes y escobillas, permitiendo ajustar la excitación y controlar el factor de potencia.
- **Motor de reluctancia síncrono**: rotor ferromagnético sin imanes ni devanados; el par se produce por la tendencia del rotor a alinearse con la dirección de mínima reluctancia del flujo magnético.
- **Motor de histéresis**: rotor de material magnéticamente duro que se magnetiza por histéresis; ofrece arranque suave, funcionamiento silencioso y se emplea en aplicaciones de pequeña potencia.

## Métodos de arranque

El motor síncrono no es inherentemente autoarrancable y la sincronización se consigue principalmente por tres métodos:

1. **Devanado amortiguador (jaula de ardilla)**: barras en cortocircuito en el rotor permiten el arranque como motor asíncrono hasta aproximadamente el 95 % – 97 % de la velocidad síncrona, momento en que se inyecta corriente continua de excitación para sincronizar el rotor.
2. **Motor auxiliar externo**: un motor de inducción o de corriente continua acelera el motor síncrono hasta la velocidad de sincronismo antes de la conexión eléctrica y la aplicación de la excitación.
3. **Variador de frecuencia (VFD)**: la frecuencia de alimentación se eleva progresivamente desde un valor bajo, manteniendo la relación tensión/frecuencia constante, de modo que el rotor acelera suavemente y se mantiene en sincronismo sin patinaje.

## Aplicaciones típicas

Los motores síncronos se utilizan en procesos que demandan velocidad fija, alta eficiencia o capacidad de corrección del factor de potencia. Algunas aplicaciones representativas son:

- Compresores alternativos y bombas de gran potencia (>35 kW).
- Molinos de bolas, laminadoras y trituradoras en minería.
- Propulsión naval con motores de imanes permanentes de alta densidad de par.
- Generación eléctrica como alternadores síncronos en centrales.
- Sistemas de tracción ferroviaria de velocidad constante.
- Relojes, temporizadores y servomecanismos de precisión en baja potencia.

## Ventajas y limitaciones

**Ventajas**
- Velocidad absolutamente constante, independiente de la carga dentro del margen de par nominal, ideal para procesos sincronizados.
- Capacidad de operar con factor de potencia unitario o en adelanto, contribuyendo a la corrección del factor de potencia de la instalación.
- Rendimiento muy alto, con eficiencias superiores al 95 % para máquinas de tamaño industrial y valores cercanos al 98 % en grandes motores PMSM.
- Alta densidad de par respecto al volumen, especialmente en motores de imanes permanentes.

**Limitaciones**
- Necesitan equipos de arranque adicionales (bobinados amortiguadores o variadores), lo que eleva la complejidad y el coste inicial.
- Velocidad fija sin variador: no es apto para numerosas aplicaciones que requieren regulación continua.
- Riesgo de pérdida de sincronismo ante sobrecargas que superen el par máximo (pull-out).
- En motores de rotor bobinado, el mantenimiento de anillos rozantes y escobillas es necesario.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la velocidad síncrona de un motor de 4 polos a 60 Hz?
La velocidad síncrona es de 1800 rpm cuando la red opera a 60 Hz, calculada como N_s = (120 × 60) / 4; en redes de 50 Hz, el mismo motor giraría a 1500 rpm.

### ¿Qué eficiencia se puede esperar de un motor síncrono industrial de 500 kW?
Un motor síncrono de 500 kW (670 hp) logra típicamente una eficiencia del 96 % – 97 %, y en configuraciones de imanes permanentes puede superar el 97 % a plena carga.

### ¿Cómo se logra un factor de potencia en adelanto con un motor síncrono?
Cuando el motor síncrono se excita con una corriente de campo mayor que la necesaria para operar a factor de potencia unitario (sobreexcitación), la corriente total absorbida se adelanta a la tensión, entregando potencia reactiva y llevando el factor de potencia a valores de hasta 0,95 en adelanto.

### ¿Qué par máximo puede soportar sin salir de sincronismo un motor de 200 N·m nominales?
Un motor síncrono con par nominal de 200 N·m (147 lb·ft) puede mantener el sincronismo hasta un par máximo de aproximadamente 400 – 700 N·m (295 – 516 lb·ft), dependiendo del margen de diseño del pull‑out torque.

### ¿A qué velocidad gira un motor síncrono de 6 polos en una red de 50 Hz?
Con una frecuencia de 50 Hz, la velocidad síncrona es de 1000 rpm; en una red de 60 Hz el mismo motor alcanzaría 1200 rpm.

### ¿Cuál es el peso aproximado de un motor síncrono de 750 kW a 1500 rpm?
Un motor síncrono de 750 kW (1000 hp) y 1500 rpm (4 polos) pesa entre 2800 y 4500 kg (6200 – 9900 lb), con un valor más ajustado en torno a los 3500 kg (7700 lb) en carcasas estándar de ventilación abierta.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motors-torques-d_651.html
- **electrical4u.com**: https://www.electrical4u.com/synchronous-motor-working-principle/
