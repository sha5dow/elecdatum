---
title: "Motorreductores fundamentos y selección"
sidebar:
  label: "Motorreductores fundamentos y selección"
description: "Ficha tecnica: Motorreductores fundamentos y selección"
keywords: ["gearmotor fundamentals selection ratio", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "gearmotor-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un motorreductor integra un motor eléctrico de inducción con una caja reductora de engranajes en un solo conjunto compacto, entregando pares de salida que típicamente van desde 0,1 N·m / 0,074 lbf·ft hasta más de 50 000 N·m / 36 878 lbf·ft. Este diseño elimina acoplamientos externos, reduce el espacio de instalación y simplifica el mantenimiento al compartir una carcasa común y, con frecuencia, un solo eje de salida. La potencia del motor se transmite a través de etapas de engranajes que disminuyen la velocidad y multiplican el par, adaptando la energía eléctrica a la mecánica directamente en el punto de uso.

## Principio de funcionamiento
El eje del motor gira a una velocidad nominal de 1500 r/min (50 Hz) o 1800 r/min (60 Hz) en aplicaciones estándar de cuatro polos, y la caja de engranajes reduce esa velocidad mediante la relación de transmisión, mientras que el par de salida se multiplica aproximadamente por el mismo factor, descontando las pérdidas por eficiencia. Cada etapa de engranajes transmite la potencia mediante ruedas dentadas que engranan progresivamente; en un tren de engranajes simple, la velocidad de salida *S*ₒ (r/min) es igual a la velocidad de entrada *S*ᵢ dividida por la relación de transmisión *r*, siempre que la eficiencia se considere por separado.

## Relación de transmisión
La relación de transmisión indica cuántas revoluciones debe dar el eje de entrada para que el eje de salida complete una vuelta; en motorreductores industriales de una etapa se emplean relaciones desde 1:1 hasta aproximadamente 10:1, mientras que configuraciones planetarias o de múltiples etapas alcanzan relaciones superiores a 100:1 a 300:1. Esta magnitud es el cociente entre el número de dientes del engranaje conducido y el número de dientes del engranaje conductor, y determina la transformación de velocidad y par según las leyes de la mecánica de engranajes.

## Fórmulas de cálculo de par, velocidad y potencia
El comportamiento de salida de un reductor de engranajes se rige por tres expresiones básicas, donde la eficiencia *μ* afecta directamente al par y a la potencia, pero no a la velocidad (idealmente sin deslizamiento). Las fórmulas se basan en los valores de entrada y en la relación de transmisión *r* = (velocidad de entrada) / (velocidad de salida).

> **Par de salida: *M*ₒ = *M*ᵢ · *r* · *μ***  
> **Velocidad de salida: *S*ₒ = *S*ᵢ / *r***  
> **Potencia de salida: *P*ₒ = *P*ᵢ · *μ***

| Variable | Significado | Unidad (métrica / imperial) |
| --- | --- | --- |
| *M*ₒ | Par de salida | N·m / lbf·ft |
| *M*ᵢ | Par de entrada | N·m / lbf·ft |
| *r* | Relación de transmisión (adimensional) | — |
| *μ* | Eficiencia del engranaje (decimal) | — (ej. 0,94) |
| *S*ₒ | Velocidad de salida | r/min o rad/s (igual en imperial) |
| *S*ᵢ | Velocidad de entrada | r/min o rad/s (igual en imperial) |
| *P*ₒ | Potencia de salida | kW / hp |
| *P*ᵢ | Potencia de entrada | kW / hp |

Ejemplo práctico: con un par de entrada de 500 N·m / 369 lbf·ft, una relación de transmisión de 3,8 y una eficiencia de 0,9, el par de salida es (500 N·m)·(3,8)·(0,9) = 1710 N·m / 1261 lbf·ft. Para una velocidad de entrada de 2000 r/min y la misma relación, la velocidad de salida es 2000 / 3,8 ≈ 526 r/min. Análogamente, una potencia de entrada de 300 kW / 402 hp produce una potencia de salida de 300 kW · 0,9 = 270 kW / 362 hp.

## Eficiencia y pérdidas en el reductor
Las pérdidas en un motorreductor provienen principalmente del rozamiento entre dientes, la fricción en rodamientos y el batido del lubricante; la eficiencia típica de un reductor de engranajes rectos oscila entre 94 % y 98 %, mientras que la de un reductor de sinfín‑corona varía entre 50 % y 90 % según la relación y el paso. La eficiencia global del conjunto motor‑reductor se obtiene multiplicando la eficiencia del motor (habitualmente 85–95 % para motores de inducción) por la eficiencia de la caja de engranajes.

| Tipo de reductor | Rango de eficiencia (aproximado) | Comentario |
| --- | --- | --- |
| Engranajes rectos / helicoidales | 94 – 98 % | Pérdidas bajas, adecuado para uso continuo |
| Planetario | 96 – 98 % | Alta densidad de par, muy eficiente |
| Sinfín‑corona (tornillo sinfín) | 50 – 90 % | Relaciones altas en una etapa, pero eficiencia cae con la relación |
| Cónico‑helicoidal | 94 – 97 % | Transmisión entre ejes perpendiculares |

## Criterios de selección
Para seleccionar un motorreductor se suele partir de una velocidad de salida requerida, por ejemplo 100 r/min, y un par de salida necesario de 50 N·m / 36,9 lbf·ft. Con la velocidad de entrada nominal del motor (1750 r/min a 60 Hz) se determina la relación de transmisión necesaria (≈17,5:1). Luego se verifica que el par nominal del motorreductor, corregido por el factor de servicio, supere el par demandado por la carga. Además se evalúan: tipo de carga (uniforme, con choques), ciclo de trabajo, posición de montaje, temperatura ambiente y clase de aislamiento del motor.

## Factores de servicio típicos
El factor de servicio *fs* es un multiplicador de seguridad que adapta el par nominal del motorreductor a las condiciones reales de operación; un valor de 1,0 corresponde a servicio continuo con carga uniforme y pocos arranques (menos de 5 por hora), mientras que en aplicaciones con impactos severos puede llegar a 2,0 o más. La siguiente tabla recoge valores orientativos según la naturaleza de la carga y el tipo de máquina impulsada.

| Aplicación | Rango de factor de servicio *fs* |
| --- | --- |
| Transportadores de banda (carga uniforme) | 1,0 – 1,25 |
| Agitadores, mezcladoras (carga media) | 1,25 – 1,5 |
| Elevadores de cangilones, extrusoras | 1,5 – 1,75 |
| Trituradoras, laminadoras, prensas | 1,75 – 2,0 o superior |

*Nota: los valores exactos dependen del número de horas diarias de funcionamiento y de la frecuencia de arranques, y deben consultarse en los catálogos del fabricante.*

## Frequently Asked Questions (FAQ)

### ¿Cómo se calcula el par de salida de un motorreductor conociendo el par motor y la relación de transmisión?
    El par de salida se obtiene multiplicando el par de entrada por la relación de transmisión y por la eficiencia del reductor; con un motor de 10 N·m / 7,4 lbf·ft, una relación de 10:1 y una eficiencia del 90 %, el par disponible en el eje de salida es 10 × 10 × 0,9 = 90 N·m / 66,4 lbf·ft.

### ¿Cuál es la eficiencia típica de un motorreductor de sinfín-corona comparada con uno de engranajes rectos?
    Un reductor de sinfín‑corona puede tener eficiencias desde 50 % (relaciones altas, 60:1 o más) hasta 90 % (relaciones bajas), mientras que un reductor de engranajes rectos de una etapa suele rendir entre 94 % y 98 %; la diferencia es crítica en aplicaciones de funcionamiento continuo donde 10 puntos porcentuales de eficiencia representan cientos de kW·h desperdiciados al año.

### ¿Qué factor de servicio debo elegir para una cinta transportadora que opera 16 horas al día con arranques frecuentes?
    Para un transportador que trabaja más de 10 horas diarias y experimenta de 5 a 10 arranques por hora, se recomienda un factor de servicio de 1,25 a 1,5. Con una demanda de par continua de 200 N·m / 147,5 lbf·ft, el motorreductor debería ofrecer al menos 200 × 1,5 = 300 N·m / 221,3 lbf·ft de par nominal.

### ¿Es posible acoplar un motorreductor directamente a la carga sin elementos flexibles?
    Sí, siempre que la tolerancia de alineación del fabricante lo permita; un desalineamiento angular superior a 0,5°/0,5° puede reducir la vida del rodamiento en un 50­% o más. En cargas con vibraciones moderadas se intercala un acoplamiento flexible o se opta por un motorreductor con eje hueco y chavetero que acepta ligeros desalineamientos.

### ¿Cómo determino la relación de transmisión necesaria si necesito una velocidad de salida de 60 r/min con un motor de 4 polos a 50 Hz?
    La velocidad síncrona de un motor de 4 polos a 50 Hz es 1500 r/min. Si la velocidad a plena carga ronda 1450 r/min, la relación de transmisión requerida es 1450 / 60 ≈ 24,2:1. Se elegiría la relación nominal más próxima disponible, por ejemplo 25:1, verificando que la velocidad real de salida (1450 / 25 = 58 r/min) sea aceptable para el proceso.

### ¿Cuándo conviene usar un motorreductor planetario en lugar de uno convencional de ejes paralelos?
    Un motorreductor planetario ofrece densidades de par hasta 3 veces superiores a las de un reductor de ejes paralelos del mismo tamaño, con eficiencias que alcanzan el 96–98 %. Se prefiere cuando el espacio de instalación es crítico y se requieren pares superiores a 500 N·m / 369 lbf·ft en un diámetro reducido, por ejemplo en robótica o husillos de máquina herramienta.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/electric-motor/
- **weg.net**: https://www.weg.net/institutional/US/en/support/resources-and-tools
