---
title: "Clases de disparo de sobrecarga en motores"
sidebar:
  label: "Clases de disparo de sobrecarga en motores"
description: "Ficha tecnica: Clases de disparo de sobrecarga en motores"
keywords: ["motor overload trip class 10 20 30", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "motor-protection"
subcategory: "motor-overload-classes"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Las clases de disparo de sobrecarga protegen los motores eléctricos contra calentamientos excesivos al definir el tiempo máximo que un relé de sobrecarga tarda en interrumpir el circuito cuando la corriente supera un valor preestablecido, típicamente 600 % de la intensidad nominal. Esta clasificación, normalizada internacionalmente, coordina la respuesta del sistema de protección con las características térmicas y de arranque del motor, evitando paradas intempestivas y prolongando la vida del aislamiento.

## Clasificación normalizada de los tiempos de disparo
La norma IEC 60947-4-1 define tres clases principales de disparo —10, 20 y 30— que establecen un tiempo máximo de interrupción de 10 s para la clase 10 cuando el motor absorbe el 600 % de su corriente nominal. La tabla siguiente resume los límites temporales que deben cumplir los relés de sobrecarga en condiciones de arranque y sobreintensidad.

| Clase de disparo | Disparo máximo a 600 % In (segundos / minutos) | Rango típico de tiempo de arranque admisible |
| --- | --- | --- |
| 10 | 10 s / 0,17 min | < 10 s |
| 20 | 20 s / 0,33 min | 10 s – 20 s |
| 30 | 30 s / 0,50 min | 20 s – 30 s |

## Curva característica tiempo‑corriente
La curva de disparo de un relé clase 10 indica que, para una sobrecarga del 600 % de In, el contacto auxiliar se abre en 10 s, mientras que a sobrecargas moderadas del 200 % el tiempo de disparo se extiende a varios minutos. Esta respuesta de tiempo inverso, modelada por la integral de efecto Joule, replica el calentamiento real del bobinado y permite que el motor aproveche su capacidad térmica de corta duración sin que la protección actúe prematuramente.

| Nivel de sobrecarga (% In) | Tiempo de disparo orientativo clase 10 (s / min) | Tiempo de disparo orientativo clase 20 (s / min) | Tiempo de disparo orientativo clase 30 (s / min) |
| --- | --- | --- | --- |
| 200 % | ≈ 120 s / 2,0 min | ≈ 240 s / 4,0 min | ≈ 360 s / 6,0 min |
| 300 % | ≈ 30 s / 0,5 min | ≈ 60 s / 1,0 min | ≈ 90 s / 1,5 min |
| 600 % (límite normalizado) | 10 s / 0,17 min | 20 s / 0,33 min | 30 s / 0,50 min |

## Criterios de selección según la aplicación
La clase 10 se selecciona para motores con arranque ligero, donde la corriente de arranque supera los 600 % de In durante menos de 10 s, mientras que la clase 20 cubre arranques de hasta 20 s y la clase 30 se reserva para cargas de alta inercia que requieren aceleraciones de hasta 30 s. Una elección incorrecta — clase demasiado rápida— provoca disparos intempestivos en cada arranque; una clase demasiado lenta reduce la protección térmica del devanado y puede recortar la vida del motor en un 50 % por cada 10 °C de aumento sostenido sobre el límite de clase del aislamiento.

## Factores que modifican el tiempo real de disparo
La temperatura ambiente puede acortar el tiempo de disparo hasta un 30 % respecto al valor catalogado porque los bimétales o los sensores electrónicos integran el efecto acumulativo del calor. Otros factores que desplazan la curva de respuesta son la ventilación del armario, la altitud de instalación y la disipación térmica del contactor asociado. La presencia de armónicos de corriente añade calentamiento adicional sin incremento proporcional en la lectura del relé, por lo que en redes con distorsión armónica total superior al 10 % se recomienda emplear protección electrónica con medición de verdadero valor eficaz.

## Preguntas frecuentes (FAQ)
### ¿Qué diferencia hay entre clase 10 y clase 10A?
La clase 10A impone un tiempo máximo de disparo igual a 10 s a 600 % In, pero exige además un tiempo mínimo de disparo de 2 s, garantizando que el relé no actúe durante arranques muy breves que la clase 10 general no acota con la misma precisión.
### ¿Puede utilizarse un relé clase 20 en un motor que solo requiere clase 10?
Sí, aunque el motor quedará menos protegido térmicamente. El relé clase 20 permite que la corriente de sobrecarga circule durante 20 s, el doble del tiempo que soporta el diseño del bobinado, lo que reduce la vida útil del aislamiento.
### ¿Qué sucede si el tiempo de arranque real del motor supera los 30 s?
Ninguna de las clases normalizadas garantiza protección sin disparo durante el arranque. Se debe valorar una protección electrónica con vigilancia continua de la temperatura del devanado mediante sondas RTD o termistores PTC, o bien rediseñar el sistema de arranque.
### ¿Las clases de disparo son iguales en normativa NEMA e IEC?
No exactamente. IEC define clases 10, 20 y 30, mientras que NEMA utiliza clases de disparo 10, 20 y 30 con tolerancias de tiempo ligeramente distintas a baja sobrecarga. La equivalencia es válida en el punto de 600 % In, pero en la práctica los relés NEMA tienden a ser un poco más rápidos a sobrecargas moderadas.
### ¿El calentamiento previo del motor afecta el tiempo de disparo?
Sí, porque el relé de sobrecarga —especialmente el de bimetales— reacciona a la energía acumulada. Un motor que ya ha operado a plena carga durante horas puede disparar en menos de 4 s ante una sobrecarga del 600 % In si el relé estaba térmicamente saturado.
### ¿Cómo se verifica en campo la clase de disparo de un relé?
Se inyecta una corriente del 600 % de la In del relé y se cronometra el tiempo hasta la apertura del contacto auxiliar. El valor obtenido debe ser inferior al límite máximo de la clase declarada (10, 20 o 30 s). La prueba debe realizarse partiendo del relé en frío para no falsear la medición.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/motor-thermal-overload-protection/
