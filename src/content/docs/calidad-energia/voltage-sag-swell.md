---
title: "Caída y elevación de tensión (sag/swell)"
sidebar:
  label: "Caída y elevación de tensión (sag/swell)"
description: "Ficha tecnica: Caída y elevación de tensión (sag/swell)"
keywords: ["voltage sag swell definition causes", "calidad-energia"]
category: "calidad-energia"
topic: "voltage-quality"
subcategory: "voltage-sag-swell"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La caída de tensión (*sag* o *dip*) es una reducción momentánea del valor eficaz (RMS) de la tensión, típicamente entre el 10 % y el 90 % de la tensión nominal, con una duración que va desde 0,5 ciclos hasta 1 minuto. Su contraparte, la elevación de tensión (*swell*), consiste en un incremento temporal por encima del 110 % de la tensión nominal, normalmente en el rango de 110 % a 180 %, con duraciones similares. Ambas perturbaciones constituyen los eventos de calidad de la energía más frecuentes en sistemas eléctricos industriales y comerciales.

## Definición y parámetros característicos

La magnitud de una caída de tensión se sitúa entre el 10 % y el 90 % de la tensión nominal, mientras que su duración mínima es de 0,5 ciclos (10 ms a 60 Hz / 8,33 ms a 50 Hz). La siguiente tabla resume los valores típicos de ambos fenómenos.

| Parámetro | Caída de tensión (sag/dip) | Elevación de tensión (swell) |
|---|---|---|
| Magnitud (% de V<sub>nominal</sub>) | 10 % – 90 % | 110 % – 180 % (1,10 p.u. – 1,80 p.u.) |
| Duración | 0,5 ciclos (10 ms @ 60 Hz / 8,33 ms @ 50 Hz) a 1 minuto (60 s / 3 600 ciclos @ 60 Hz) | Mismo rango que la caída |
| Frecuencia típica de ocurrencia | Puede representar hasta el 70 % de todas las perturbaciones de calidad de energía en una instalación | Menos frecuente, a menudo asociada al deslastre de grandes cargas |

## Clasificación según duración (IEEE 1159)

La norma IEEE 1159 establece tres categorías temporales para los eventos de corta duración: instantánea (0,5–30 ciclos), momentánea (30 ciclos – 3 s) y temporal (3 s – 1 min). La tabla siguiente detalla los límites.

| Categoría | Duración (ciclos) | Duración a 50 Hz (ms / s) | Duración a 60 Hz (ms / s) |
|---|---|---|---|
| Instantánea | 0,5 – 30 ciclos | 10 ms – 600 ms (0,6 s) | 8,33 ms – 500 ms (0,5 s) |
| Momentánea | 30 ciclos – 3 s | 600 ms (0,6 s) – 3 s | 500 ms (0,5 s) – 3 s |
| Temporal | 3 s – 1 min | 3 s – 60 s | 3 s – 60 s |

## Causas principales

Las faltas monofásicas a tierra en el sistema de distribución son la causa más habitual, ya que pueden provocar caídas de tensión del 30 % al 60 % en los circuitos adyacentes. Además de las faltas, existen otras causas relevantes:

- Arranque de motores de gran potencia: la corriente de inserción puede alcanzar de 5 a 7 veces la corriente nominal, generando una caída momentánea.
- Maniobras de conexión de transformadores de potencia: la energización repentina origina corrientes de *inrush* que pueden superar 10 veces la corriente nominal, hundiendo la tensión en el punto de acoplamiento común.
- Conmutación de cargas elevadas o variaciones bruscas de la demanda.
- Fenómenos atmosféricos (rayos) que provocan faltas línea‑tierra transitorias.
- Las elevaciones de tensión aparecen típicamente al desconectar grandes cargas o al operar interruptores en presencia de bancos de condensadores.

## Consecuencias en los equipos

Caídas de tensión de tan solo el 20 % de la tensión nominal con una duración de 2 a 3 ciclos (34 ms–50 ms @ 60 Hz) pueden causar la apertura de contactores y la parada de procesos automatizados. Los principales efectos adversos son:

| Equipo / Sistema | Efecto de la caída de tensión |
|---|---|
| Contactores y relés electromecánicos | Desconexión con tensiones inferiores al 80 % (0,80 p.u.) durante más de 1–2 ciclos. |
| Variadores de velocidad (VSD) | Disparo por subtensión en el bus de continua cuando la tensión de red cae por debajo del 70 %–85 % (0,70 p.u.–0,85 p.u.). |
| PLC y sistemas de control | Reinicio o fallo si la fuente de alimentación no soporta el hueco; sensibilidad típica desde caídas del 30 %. |
| Lámparas de descarga (HID) | Apagado y posterior tiempo de re‑encendido de varios minutos (3 min – 15 min). |
| Computadores y equipos informáticos | Reinicio o pérdida de datos con caídas superiores al 30 % y duración mayor de 8 ms (0,5 ciclos @ 60 Hz). |

## Métodos de mitigación

Los restauradores dinámicos de tensión (DVR) pueden compensar caídas de hasta el 50 % de la tensión nominal en menos de 2 ms, manteniendo la carga dentro de los límites operativos. Las tecnologías de mitigación más comunes son:

| Método | Descripción | Rango típico de compensación |
|---|---|---|
| Restaurador dinámico de tensión (DVR) | Inyecta tensión en serie mediante un convertidor de potencia para compensar el hueco. | Caídas de hasta el 50 % (0,50 p.u.), respuesta < 2 ms. |
| UPS (sistema de alimentación ininterrumpida) | Proporciona respaldo con baterías; el modo en línea aísla completamente la carga. | Cubre caídas del 100 % (interrupciones) según la autonomía (minutos a horas). |
| Compensador estático síncrono (STATCOM) | Compensa huecos profundos mediante intercambio rápido de potencia reactiva. | Caídas de hasta el 30 %–40 % (0,30 p.u.–0,40 p.u.). |
| Condensadores conmutados rápidamente | Elevan la tensión en el punto de conexión durante el evento. | Atenuación de caídas del 10 %–20 % (0,10 p.u.–0,20 p.u.). |
| Recierres automáticos y coordinación de protecciones | Reducen la duración de la falta y, por tanto, del hueco de tensión. | Depende de la topología de la red. |

## Normativas aplicables

La norma IEEE 1159 clasifica las variaciones de tensión de corta duración en tres categorías temporales —instantánea, momentánea y temporal— y proporciona las definiciones fundamentales de sag y swell. Otras normativas de referencia son:

- **IEC 61000‑4‑30 / EN 61000‑4‑30**: métodos de medición de la calidad de la energía, incluyendo la detección de huecos (*dips*) y sobretensiones temporales.
- **EN 50160**: características de la tensión suministrada por las redes de distribución; establece límites estadísticos para la frecuencia de huecos de tensión.
- **SEMI F47**: especificación para equipos de fabricación de semiconductores que define los límites de tolerancia a huecos de tensión.
- **ITIC (CBEMA)**: curva de susceptibilidad de equipos electrónicos, ampliamente utilizada para evaluar la inmunidad frente a sag/swell.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre una caída de tensión y un apagón?
La caída de tensión es una reducción parcial de la tensión (10 %‑90 %) que dura entre 0,5 ciclos y 1 minuto; un apagón o interrupción corresponde a una pérdida total de tensión (≥90 % de reducción) que puede prolongarse por tiempos mayores.

### ¿Qué equipos son más susceptibles a las caídas de tensión?
Los contactores electromecánicos, variadores de velocidad, PLC y lámparas de descarga son particularmente sensibles; una caída de apenas un 20 % durante 2‑3 ciclos puede detener una línea de producción.

### ¿Cómo se mide una caída de tensión según la normativa?
Se utiliza un analizador de calidad de energía que registre la tensión RMS cada medio ciclo según IEC 61000‑4‑30; el evento se caracteriza por su magnitud residual, duración y marcas de tiempo.

### ¿Las elevaciones de tensión son dañinas para los equipos?
Sí. Tensiones superiores al 110 % de la nominal pueden dañar fuentes de alimentación, reducir la vida útil de luminarias LED y causar sobretensiones en equipos electrónicos si no están protegidos.

### ¿Cómo puedo mitigar las caídas de tensión en una planta industrial?
La solución más efectiva es instalar un DVR o un UPS en línea para cargas críticas; también es posible mejorar la coordinación de protecciones y utilizar arrancadores suaves para limitar las corrientes de inserción.

### ¿Qué duración debe tener una caída de tensión para considerarse según IEEE 1159?
Un evento se clasifica como caída de tensión si su duración es mayor que 0,5 ciclos y menor o igual a 1 minuto; duraciones menores se consideran transitorios, y mayores se catalogan como subtensiones sostenidas.

## Fuentes consultadas

- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-9/practical-considerations-transformers/
