---
title: "Resistividad del suelo medición"
sidebar:
  label: "Resistividad del suelo medición"
description: "Ficha tecnica: Resistividad del suelo medición"
keywords: ["soil resistivity measurement method Wenner", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-fundamentals"
subcategory: "soil-resistivity"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La resistividad del suelo es la propiedad que cuantifica la oposición del terreno al paso de la corriente eléctrica y constituye el parámetro fundamental para el diseño de sistemas de puesta a tierra. Su medición precisa permite predecir el comportamiento del electrodo de tierra ante fallas o descargas atmosféricas. El método más extendido para determinar la resistividad aparente del suelo es el arreglo tetraelectródico de Wenner, que inyecta una corriente conocida entre dos electrodos externos y mide la diferencia de potencial entre dos electrodos internos.

## Factores que afectan la resistividad del suelo

La resistividad depende principalmente de la composición química, la granulometría, el contenido de humedad y la temperatura del terreno. Los suelos con alta concentración de sales disueltas presentan menor resistividad, mientras que los materiales secos o congelados incrementan notablemente su oposición al flujo eléctrico. La compactación y la presencia de materia orgánica también modifican el valor medido.

## Método de Wenner para medición de resistividad

El método de Wenner utiliza cuatro electrodos alineados, separados por una distancia uniforme **a**, clavados a una profundidad que no supera **0,1·a**. Un equipo inyector hace circular una corriente continua o de baja frecuencia entre los dos electrodos extremos (C1 y C2); simultáneamente se mide la diferencia de potencial entre los dos electrodos centrales (P1 y P2). La relación entre la tensión medida y la corriente inyectada proporciona una resistencia aparente que, junto con la geometría del arreglo, permite calcular la resistividad del volumen de suelo explorado hasta una profundidad aproximada igual a la separación **a**.

## Fórmula de Wenner

> **ρ = 2 π a R**
> 
> Donde **ρ** es la resistividad aparente del suelo, **a** la separación entre electrodos adyacentes y **R** el cociente entre la tensión medida y la corriente inyectada.

La expresión anterior es válida cuando la profundidad de hinca de los electrodos es mucho menor que la separación entre ellos. Para estudios estratigráficos se repite la medición incrementando progresivamente la distancia **a**, lo que permite trazar perfiles verticales de resistividad.

## Valores típicos de resistividad de suelos

| Tipo de suelo | Resistividad (media o rango) |
| --- | --- |
| Arcilla blanda | 50 Ω·m / 164 Ω·ft |
| Arcilla compactada | 100 – 200 Ω·m / 328 – 656 Ω·ft |
| Arena arcillosa | 50 – 500 Ω·m / 164 – 1640 Ω·ft |
| Humus, mantillo | 10 – 150 Ω·m / 33 – 492 Ω·ft |
| Granito | 1500 – 10000 Ω·m / 4921 – 32808 Ω·ft |
| Granito alterado | 100 – 600 Ω·m / 328 – 1969 Ω·ft |
| Marga jurásica | 30 – 40 Ω·m / 98 – 131 Ω·ft |
| Caliza fisurada | 500 – 1000 Ω·m / 1640 – 3281 Ω·ft |
| Marga | 100 – 200 Ω·m / 328 – 656 Ω·ft |
| Esquisto micáceo | 800 Ω·m / 2625 Ω·ft |
| Turba, césped | 5 – 100 Ω·m / 16 – 328 Ω·ft |
| Arenisca | 1500 – 10000 Ω·m / 4921 – 32808 Ω·ft |
| Arenisca alterada | 100 – 600 Ω·m / 328 – 1969 Ω·ft |
| Pizarra, esquistos arcillosos | 50 – 300 Ω·m / 164 – 984 Ω·ft |
| Arena silícea | 200 – 300 Ω·m / 656 – 984 Ω·ft |
| Suelo calcáreo | 100 – 300 Ω·m / 328 – 984 Ω·ft |
| Suelo pantanoso | 1 – 30 Ω·m / 3 – 98 Ω·ft |
| Subsuelo pedregoso con césped | 300 – 500 Ω·m / 984 – 1640 Ω·ft |
| Terreno pedregoso | 1500 – 3000 Ω·m / 4921 – 9843 Ω·ft |

Los valores corresponden a mediciones con contenido de humedad y temperatura moderados. Condiciones extremas de sequedad o helada pueden multiplicar la resistividad por un factor superior a 10.

## Interpretación de resultados y diseño de puesta a tierra

La resistividad obtenida en campo es un dato de entrada para calcular la resistencia de dispersión de electrodos. Cuanto menor sea la resistividad del suelo, menor será la resistencia de puesta a tierra alcanzable con una geometría de electrodo dada. En suelos de alta resistividad se requiere aumentar la longitud de los electrodos, emplear múltiples elementos en paralelo o recurrir a tratamientos químicos del terreno. La norma de referencia no obliga a un valor máximo de resistencia de tierra, pero se considera aceptable un valor inferior a 25 Ω / 82 Ω·ft para protección contra rayos, mientras que instalaciones de telecomunicaciones o equipos sensibles pueden exigir menos de 3 Ω / 10 Ω·ft.

## Preguntas frecuentes (FAQ)

### ¿Por qué se usa el método de Wenner y no otro arreglo?
El arreglo Wenner ofrece una interpretación directa de la fórmula, igual separación entre electrodos y una profundidad de investigación aproximadamente igual a la distancia interelectródica, lo que facilita la correlación con los estratos del terreno.

### ¿Qué separación entre electrodos se recomienda para medir la resistividad del suelo?
Se comienza típicamente con separaciones de 1 m a 3 m / 3,28 ft a 9,84 ft, y se aumenta progresivamente hasta alcanzar la profundidad de interés para el sistema de puesta a tierra. A mayor separación, mayor volumen de suelo muestreado, pero menor resolución lateral.

### ¿Influye la profundidad de hinca de los electrodos en la medición?
Sí. Para que la fórmula de Wenner sea válida, la profundidad de enterramiento debe ser inferior al 10 % de la separación entre electrodos. Profundidades mayores introducen errores que requieren correcciones analíticas.

### ¿Qué tipo de corriente se utiliza en la medición?
Se emplea corriente continua o corriente alterna de muy baja frecuencia (típicamente entre 70 Hz y 128 Hz) para minimizar los efectos de polarización de los electrodos y reducir el acople con ruido industrial de 50/60 Hz.

### ¿Cómo afecta la humedad a la resistividad del suelo?
La resistividad disminuye drásticamente al aumentar el contenido de agua, en especial cuando el suelo contiene sales disueltas. Un suelo seco puede tener una resistividad hasta 1000 veces mayor que el mismo suelo saturado de humedad.

### ¿Qué hacer si el terreno presenta resistividades muy altas?
Se puede optar por electrodos más profundos que alcancen capas más conductoras, utilizar múltiples electrodos interconectados, o mejorar la conductividad del terreno con rellenos de baja resistividad como bentonita o mezclas de carbón vegetal y sales.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/soil-resistivity-d_1865.html
- **electrical4u.com**: https://www.electrical4u.com/resistance-of-earth/
- **mikeholt.com**: https://www.mikeholt.com/technical-grounding-Ground-Resistance-It-is-Not-What-You-Think-(12-30-99).php
