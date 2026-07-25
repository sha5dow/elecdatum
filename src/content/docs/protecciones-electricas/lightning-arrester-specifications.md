---
title: "Pararrayos y descargadores especificaciones"
sidebar:
  label: "Pararrayos y descargadores especificaciones"
description: "Ficha tecnica: Pararrayos y descargadores especificaciones"
keywords: ["lightning arrester specifications rating", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "surge-protection"
subcategory: "lightning-arrester"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un pararrayos típico puede desviar corrientes de rayo superiores a 100 kA / 100 kA pico, protegiendo el aislamiento y los conductores de sistemas eléctricos y de telecomunicaciones frente a sobretensiones transitorias. El dispositivo, también denominado descargador de sobretensión o apartarrayos, se conecta entre la línea de alta tensión y tierra. Ante un impulso de rayo o una maniobra de conmutación, el pararrayos deriva la corriente excedente a tierra y limita la tensión aplicada a los equipos, evitando su deterioro o destrucción.

Un pararrayos aprovecha materiales con resistencia eléctrica no lineal. Durante la operación normal, su impedancia es extremadamente alta y solo circula una corriente de fuga del orden de 1 mA / 1 mA. Cuando una sobretensión supera un umbral de cebado, la resistencia cae bruscamente, permitiendo el paso de la corriente de descarga. En los modelos de óxido de zinc la ausencia de entrehierro elimina el tiempo de retardo al disparo. La sobretensión transitoria inducida en una carga inductiva se puede aproximar con la fórmula:

> **V_transitoria = L × (di/dt)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| V_transitoria | Tensión transitoria inducida | V |
| L | Inductancia de la carga | H |
| di/dt | Tasa de variación de la corriente interrumpida | A/s |

## Construcción de un pararrayos de óxido de zinc
El elemento activo de un descargador de ZnO está formado por una pila de discos cerámicos de óxido de zinc, cuya cantidad es proporcional a la tensión nominal de la red. La pila se aloja dentro de una carcasa cilíndrica de porcelana o de polímero siliconado y se mantiene fuertemente comprimida mediante un resorte de alta presión anclado a la tapa superior. El terminal de línea sobresale de la tapa superior, mientras que el terminal de puesta a tierra sale de la tapa inferior. La envolvente puede incorporar una válvula de alivio de sobrepresión que ventee gases en caso de falla interna, evitando la explosión del aislador.

## Especificaciones técnicas
Los pararrayos de uso en subestaciones poseen una capacidad de absorción de energía típica de 5 kJ / 4,7 BTU en un único impulso de 4/10 µs, y parámetros operativos que se seleccionan de acuerdo con la tensión máxima continua del sistema.

| Parámetro | Valor típico |
| --- | --- |
| Tensión asignada (Ur) | 3 kV a 800 kV / 3 kV a 800 kV |
| Tensión de funcionamiento continuo (Uc) | 2,4 kV a 640 kV / 2,4 kV a 640 kV |
| Corriente nominal de descarga (In) – onda 8/20 µs | 5 kA, 10 kA, 20 kA / 5 kA, 10 kA, 20 kA |
| Corriente de impulso de rayo (Iimp) – onda 10/350 µs | 25 kA / 25 kA |
| Capacidad de absorción de energía (línea simple) | 2 kJ a 20 kJ / 1,9 BTU a 19 BTU |
| Tensión residual (Ures) al valor nominal de In | 1,5 a 3 veces Ur / 1,5 a 3 veces Ur |
| Clase de descarga según IEC 61643-11 | Clase I, II o III |
| Material activo | Óxido de zinc (ZnO) |
| Material de la envolvente | Porcelana o polímero siliconado |
| Temperatura ambiente de servicio | -40 °C a +55 °C / -40 °F a +131 °F |
| Altitud máxima de instalación sin derrateo | 1000 m / 3280 ft |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia un pararrayos de un descargador de sobretensión?
Ambos términos designan el mismo equipo principal, aunque “descargador de sobretensión” se suele reservar para dispositivos instalados en tableros eléctricos interiores y “pararrayos” para los montados en líneas aéreas o subestaciones.

### ¿Por qué se utiliza óxido de zinc en lugar de carburo de silicio?
El ZnO ofrece una característica tensión‑corriente muy no lineal, no requiere entrehierro, responde en nanosegundos y disipa mayor energía por unidad de volumen, lo que permite fabricar descargadores más compactos y fiables.

### ¿Cómo se selecciona la tensión asignada de un pararrayos?
Se elige de modo que la tensión de funcionamiento continuo Uc supere la máxima tensión fase‑tierra esperada en servicio permanente, incluyendo sobretensiones temporales, y que la tensión residual resultante sea inferior a la tensión soportada por el equipo protegido.

### ¿Qué representa la onda 8/20 µs y la onda 10/350 µs en las especificaciones?
Son formas de impulso normalizadas: la onda 8/20 µs simula impulsos de maniobra y rayos inducidos con tiempo de frente de 8 µs y cola de 20 µs, mientras que la onda 10/350 µs reproduce un impacto directo de rayo con frente de 10 µs y cola de 350 µs.

### ¿Los pararrayos requieren mantenimiento periódico?
Los descargadores de ZnO sellados de porcelana o polímero no necesitan mantenimiento rutinario, aunque se recomienda inspeccionar visualmente la integridad de la envolvente y verificar la conexión de tierra cada 12 meses / cada 12 meses en ambientes muy contaminados.

### ¿Se puede instalar un pararrayos a cualquier altitud?
La envolvente y los discos soportan altitudes superiores, pero el enfriamiento dieléctrico del aire disminuye, por lo que los fabricantes suministran factores de corrección; más allá de 1000 m / 3280 ft suele ser necesario derratear la tensión de funcionamiento continuo.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/surge-protection-and-lightning-arrester-surge-arrester/
