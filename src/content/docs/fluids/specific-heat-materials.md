---
title: "Calor específico de materiales"
sidebar:
  label: "Calor específico de materiales"
description: "Ficha tecnica: Calor específico de materiales"
keywords: ["specific heat capacity metals fluids", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "specific-heat"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## Definición
El calor específico (\(c_p\)) es la propiedad termofísica que cuantifica la cantidad de energía necesaria para elevar en un grado la temperatura de una unidad de masa de una sustancia. Se define formalmente como el límite del cociente \(dq/dT\) cuando \(dT \to 0\), donde \(dq\) es el calor suministrado en un proceso a presión constante. En términos prácticos, representa la capacidad de un material para almacenar energía térmica: valores altos indican que el material absorbe gran cantidad de calor con un aumento de temperatura reducido, lo que lo convierte en un excelente amortiguador térmico. Las unidades en el sistema internacional son J/(kg·K) o J/(kg·°C), mientras que en el sistema imperial se emplea Btu/(lb·°F). La relación entre ambas unidades es 1 Btu/(lb·°F) = 4186,8 J/(kg·K).

## Tabla de calor específico de materiales comunes
Los siguientes valores corresponden a mediciones realizadas a temperatura ambiente (20‑25 °C / 68‑77 °F) y presión atmosférica estándar, salvo indicación contraria.

| Material | Calor específico \(c_p\) |
|---|---|
| Agua líquida (20 °C) | 4182 J/(kg·°C) / 1,000 Btu/(lb·°F) |
| Agua (hielo, -5 °C) | 2090 J/(kg·°C) / 0,499 Btu/(lb·°F) |
| Aire seco (nivel del mar) | 1005 J/(kg·°C) / 0,240 Btu/(lb·°F) |
| Alúmina (Al₂O₃) | 718 J/(kg·°C) / 0,172 Btu/(lb·°F) |
| Aluminio | 897 J/(kg·°C) / 0,214 Btu/(lb·°F) |
| Amoniaco líquido | 4700 J/(kg·°C) / 1,123 Btu/(lb·°F) |
| Amoniaco gas | 2060 J/(kg·°C) / 0,492 Btu/(lb·°F) |
| Asfalto (concreto asfáltico) | 920 J/(kg·°C) / 0,220 Btu/(lb·°F) |
| Bronce | 370 J/(kg·°C) / 0,088 Btu/(lb·°F) |
| Caliza | 909 J/(kg·°C) / 0,217 Btu/(lb·°F) |
| Carbón vegetal | 840 J/(kg·°C) / 0,201 Btu/(lb·°F) |
| Cobre | 385 J/(kg·°C) / 0,092 Btu/(lb·°F) |
| Concreto | 880 J/(kg·°C) / 0,210 Btu/(lb·°F) |
| Diamante (carbono) | 516 J/(kg·°C) / 0,123 Btu/(lb·°F) |
| Estaño | 228 J/(kg·°C) / 0,054 Btu/(lb·°F) |
| Grafito (carbono) | 717 J/(kg·°C) / 0,171 Btu/(lb·°F) |
| Granito | 790 J/(kg·°C) / 0,189 Btu/(lb·°F) |
| Helio | 5193 J/(kg·°C) / 1,241 Btu/(lb·°F) |
| Hierro | 449 J/(kg·°C) / 0,107 Btu/(lb·°F) |
| Hidrógeno | 14304 J/(kg·°C) / 3,417 Btu/(lb·°F) |
| Latón | 375 J/(kg·°C) / 0,090 Btu/(lb·°F) |
| Litio | 3582 J/(kg·°C) / 0,856 Btu/(lb·°F) |
| Madera (roble) | 2400 J/(kg·°C) / 0,573 Btu/(lb·°F) |
| Magnesio | 1050 J/(kg·°C) / 0,251 Btu/(lb·°F) |
| Mármol | 880 J/(kg·°C) / 0,210 Btu/(lb·°F) |
| Mercurio | 140 J/(kg·°C) / 0,033 Btu/(lb·°F) |
| Níquel | 461 J/(kg·°C) / 0,110 Btu/(lb·°F) |
| Oro | 129 J/(kg·°C) / 0,031 Btu/(lb·°F) |
| Plata | 235 J/(kg·°C) / 0,056 Btu/(lb·°F) |
| Plomo | 129 J/(kg·°C) / 0,031 Btu/(lb·°F) |
| Polietileno de alta densidad | 1920 J/(kg·°C) / 0,459 Btu/(lb·°F) |
| Tierra seca | 800 J/(kg·°C) / 0,191 Btu/(lb·°F) |
| Tierra húmeda | 1480 J/(kg·°C) / 0,354 Btu/(lb·°F) |
| Vidrio (sílice) | 840 J/(kg·°C) / 0,201 Btu/(lb·°F) |
| Zinc | 388 J/(kg·°C) / 0,093 Btu/(lb·°F) |

## Fórmulas de aplicación
La relación fundamental para el cálculo de energía térmica en procesos de transferencia de calor es:

\[
Q = m \cdot c_p \cdot \Delta T
\]

donde:  
\(Q\) = calor transferido (J)  
\(m\) = masa (kg)  
\(c_p\) = calor específico a presión constante (J/(kg·°C))  
\(\Delta T\) = cambio de temperatura (°C)

En análisis de termodinámica de fluidos, la capacidad calorífica también se expresa en base molar. Se define la capacidad calorífica molar a presión constante (\(C_{p,m}\)) y a volumen constante (\(C_{v,m}\)). Para gases ideales, la diferencia entre ambas viene dada por:

\[
C_{p,m} - C_{v,m} = R
\]

siendo \(R\) la constante universal de los gases (8,314 J/(mol·K)). Adicionalmente, el coeficiente adiabático \(\gamma\) se utiliza en procesos sin intercambio de calor:

\[
\gamma = \frac{c_p}{c_v}
\]

El calor específico de una mezcla sin reacción química se obtiene por promedio ponderado en masa:

\[
c_{p,\text{mezcla}} = \sum_i (w_i \cdot c_{p,i})
\]

con \(w_i\) la fracción másica del componente \(i\).

## Criterios de selección según calor específico
La elección de un material con base en su calor específico responde a la función deseada en el sistema térmico:

| Aplicación | Valor típico de \(c_p\) | Material recomendado |
|---|---|---|
| Almacenamiento térmico (calor sensible) | > 1500 J/(kg·°C) / 0,36 Btu/(lb·°F) | Agua, parafina, hidróxidos fundidos |
| Refrigerante líquido de alto rendimiento | > 3500 J/(kg·°C) / 0,84 Btu/(lb·°F) | Agua, amoniaco líquido |
| Disipadores de calor metálicos | 700–1000 J/(kg·°C) / 0,17–0,24 Btu/(lb·°F) | Aluminio, aluminio-latón |
| Aislamiento térmico (materiales con bajo calor específico) | < 400 J/(kg·°C) / 0,10 Btu/(lb·°F) | Plomo, corcho, espumas cerámicas |
| Estructuras sometidas a ciclos térmicos rápidos | > 1500 J/(kg·°C) / 0,36 Btu/(lb·°F) | Materiales de cambio de fase (PCM), sales hidratadas |

Para fluidos térmicos en intercambiadores de calor se prefiere un alto \(c_p\) porque reduce el caudal másico necesario para transportar una cantidad de calor dada, disminuyendo el consumo de bombeo. En procesos de temple o enfriamiento rápido, un bajo calor específico permite que el material alcance la temperatura deseada con menor inversión energética.

## Preguntas frecuentes
**¿Cuál es el calor específico del agua y por qué es tan alto?**  
El agua líquida a 20 °C tiene un calor específico de 4182 J/(kg·°C) / 1,000 Btu/(lb·°F), uno de los más altos entre los líquidos comunes. Este valor elevado se debe a los fuertes puentes de hidrógeno que almacenan parte de la energía suministrada en forma de energía potencial intermolecular, retrasando el aumento de temperatura.

**¿Cuál es el metal con mayor calor específico?**  
El litio presenta 3582 J/(kg·°C) / 0,856 Btu/(lb·°F), el valor más alto registrado para un metal puro a temperatura ambiente. Le siguen el berilio (1020 J/(kg·°C)) y el magnesio (1050 J/(kg·°C)), adecuados para aplicaciones aeroespaciales donde se busca ligereza y capacidad de absorción térmica.

**¿Qué material de uso masivo tiene el calor específico más bajo?**  
El plomo, con 129 J/(kg·°C) / 0,031 Btu/(lb·°F), comparte el valor más bajo entre los metales comunes junto con el oro. Esta propiedad, combinada con su alta densidad, lo hace útil en blindajes contra radiación donde se desea una baja acumulación de calor.

**¿Cuánta energía se necesita para calentar 1 litro de agua de 20 °C a ebullición?**  
Para elevar la temperatura de 1 L de agua (masa ≈ 1 kg) desde 20 °C hasta 100 °C se requieren aproximadamente 334 560 J (80 kcal), calculado con \(Q = 1\,\text{kg} \times 4182\,\text{J/(kg·°C)} \times 80\,\text{°C}\). En unidades imperiales equivale a cerca de 317 Btu.

**¿Cómo varía el calor específico del aire seco a diferente temperatura?**  
A 0 °C, el \(c_p\) del aire seco es aproximadamente 1005 J/(kg·°C) / 0,240 Btu/(lb·°F); a 100 °C sube a cerca de 1009 J/(kg·°C) / 0,241 Btu/(lb·°F). La variación es mínima en aplicaciones HVAC, por lo que se toma constante en la mayoría de los cálculos de ingeniería.

**¿Qué influencia tiene el calor específico en el diseño de un intercambiador de calor?**  
Un fluido secundario con alto calor específico, como el agua (4182 J/(kg·°C)), puede transportar más energía por unidad de masa, reduciendo el caudal necesario y el tamaño del intercambiador. Por contraste, fluidos con bajo \(c_p\) exigen mayores caudales para la misma transferencia térmica, lo que incrementa los costos operativos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/specific-heat-capacity-d_391.html
- **efunda.com**: https://www.efunda.com/formulae/
- **thermopedia.com**: https://www.thermopedia.com/content/1140/?tid=110
