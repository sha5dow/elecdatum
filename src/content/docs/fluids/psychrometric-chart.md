---
title: "Carta psicrométrica interpretación"
sidebar:
  label: "Carta psicrométrica interpretación"
description: "Ficha tecnica: Carta psicrométrica interpretación"
keywords: ["psychrometric chart humidity enthalpy temperature", "fluids"]
category: "fluids"
topic: "thermodynamics"
subcategory: "psychrometric-chart"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

La carta psicrométrica es la herramienta gráfica fundamental que correlaciona las propiedades termodinámicas del aire húmedo a una presión barométrica fija, normalmente 101,325 kPa. Interpretar correctamente sus siete líneas de estado permite realizar balances de masa y energía en sistemas HVAC con una precisión típica de ±1 % en humedad relativa cuando la velocidad del aire sobre los sensores supera los 5 m/s / 1000 ft/min.

## Propiedades psicrométricas fundamentales

La carta psicrométrica para el sistema aire seco‑vapor de agua trabaja con dos familias independientes de propiedades y tres ligaduras termodinámicas. La temperatura de bulbo seco (Tbs) es la magnitud termométrica convencional, medida con un sensor protegido de la radiación, y constituye la coordenada horizontal primaria de la carta. La humedad absoluta o relación de humedad (W) se representa en el eje vertical derecho y se define como la masa de vapor de agua por unidad de masa de aire seco, expresada en gramos de vapor por kilogramo de aire seco (g/kg) o en libras de vapor por libra de aire seco (lb/lb). La humedad relativa (HR) indica el grado de saturación del aire a una temperatura dada y se traza como curvas hiperbólicas que convergen en el punto de saturación de la curva envolvente; un valor de HR del 50 % a 25 °C / 77 °F corresponde a un contenido de humedad de aproximadamente 9,9 g/kg. La temperatura de bulbo húmedo termodinámico (Tbh) es prácticamente coincidente con la temperatura de saturación adiabática en el intervalo psicrométrico habitual y se lee siguiendo líneas de entalpía constante hasta cortar la curva de saturación. El punto de rocío (Tpr) es la temperatura a la cual el aire se satura si se enfría a presión y humedad absoluta constantes, y se obtiene desplazándose horizontalmente hacia la izquierda desde el estado representativo hasta intersecar la línea de saturación. El volumen específico del aire húmedo se presenta como líneas oblicuas con pendiente negativa, mientras que la entalpía específica (h) se representa mediante líneas prácticamente paralelas a las de bulbo húmedo.

| Propiedad | Símbolo | Unidad métrica | Unidad imperial |
|-----------|---------|----------------|-----------------|
| Temperatura de bulbo seco | Tbs | °C | °F |
| Temperatura de bulbo húmedo | Tbh | °C | °F |
| Temperatura de punto de rocío | Tpr | °C | °F |
| Humedad relativa | HR | % | % |
| Humedad absoluta | W | g/kg | lb/lb (granos/lb) |
| Entalpía específica | h | kJ/kg | BTU/lb |
| Volumen específico | v | m³/kg | ft³/lb |

## Relaciones termodinámicas y fórmulas de aplicación

La depresión de bulbo húmedo (Tbs − Tbh) es el parámetro psicrométrico clave para calcular la humedad relativa sin recurrir a sensores capacitivos ni a la carta gráfica. La ecuación psicrométrica de Sprung, válida para velocidades de aire superiores a 4,5 m/s / 885 ft/min, relaciona la presión parcial del vapor de agua con las temperaturas de bulbo seco y húmedo según la expresión:

\[
P_v = P_{sat}(Tbh) - A \cdot P_{atm} \cdot (Tbs - Tbh)
\]

donde \(P_{sat}(Tbh)\) es la presión de saturación del agua evaluada a la temperatura de bulbo húmedo, \(P_{atm}\) es la presión atmosférica total y \(A\) es el coeficiente psicrométrico, que toma el valor 0,000662 K⁻¹ para un psicrómetro de aspiración forzada. La humedad relativa se calcula posteriormente como el cociente entre la presión parcial del vapor y la presión de saturación a la temperatura de bulbo seco, multiplicado por 100.

En el caso del sistema aire‑agua, la relación psicrométrica es prácticamente igual a 1, lo que significa que las líneas de temperatura de bulbo húmedo y de temperatura de saturación adiabática son esencialmente coincidentes. La humedad absoluta (W) se calcula a partir de la presión parcial del vapor mediante la fórmula:

\[
W = 0,622 \cdot \frac{P_v}{P_{atm} - P_v} \quad (\text{kg vapor / kg aire seco})
\]

La entalpía específica del aire húmedo se determina con la ecuación:

\[
h = 1,006 \cdot Tbs + W \cdot (2501 + 1,86 \cdot Tbs) \quad (\text{kJ/kg aire seco})
\]

donde 1,006 kJ/(kg·K) es el calor específico del aire seco y 2501 kJ/kg es el calor latente de vaporización del agua a 0 °C / 32 °F. La capacidad calorífica húmeda de la mezcla, \(C_{py}\), se define como la suma del calor específico del aire seco más el producto de la humedad absoluta por el calor específico del vapor de agua.

## Criterios de selección de la carta psicrométrica

La selección de la carta psicrométrica adecuada depende fundamentalmente de la presión barométrica del emplazamiento y del intervalo de temperaturas de operación previsto. Se debe emplear una carta trazada para la altitud del sitio: a nivel del mar la presión estándar es 101,325 kPa / 14,696 psi; a 1500 m / 4921 ft de altitud la presión desciende aproximadamente a 84,5 kPa / 12,26 psi, lo que modifica la posición de la curva de saturación y de las líneas de volumen específico en un 15‑18 %. Para aplicaciones de refrigeración y confort se utiliza normalmente la carta de baja temperatura, que cubre el intervalo de Tbs entre −10 °C / 14 °F y 55 °C / 131 °F; los procesos de secado industrial a alta temperatura requieren cartas extendidas hasta 200 °C / 392 °F.

El caudal mínimo de aire sobre los sensores de un psicrómetro debe ser de 3,5 m/s / 690 ft/min para garantizar que la temperatura de bulbo húmedo medida sea representativa; por debajo de 1 m/s / 200 ft/min los errores pueden superar el 15 % de la humedad relativa. En ambientes con radiación térmica significativa, los termómetros de bulbo húmedo deben blindarse con pantallas radiantes de baja emisividad. Además, para humedades relativas inferiores al 20 %, la medición directa de la temperatura de bulbo húmedo se vuelve difícil y se recomienda el uso de higrómetros de punto de rocío o sensores capacitivos calibrados in situ.

## Tabla de referencia de propiedades del aire húmedo

Propiedades termodinámicas del aire húmedo a presión atmosférica estándar de 101,325 kPa / 14,696 psi.

| Tbs (°C / °F) | HR (%) | Tbh (°C / °F) | Tpr (°C / °F) | W (g/kg / lb/lb) | h (kJ/kg / BTU/lb) | v (m³/kg / ft³/lb) |
|---|---|---|---|---|---|---|
| 10 °C / 50 °F | 30 | 4,1 °C / 39,4 °F | −6,5 °C / 20,3 °F | 2,3 / 0,0023 | 15,8 / 6,8 | 0,801 / 12,83 |
| 10 °C / 50 °F | 60 | 6,5 °C / 43,7 °F | 2,6 °C / 36,7 °F | 4,6 / 0,0046 | 21,6 / 9,3 | 0,804 / 12,88 |
| 20 °C / 68 °F | 40 | 12,9 °C / 55,2 °F | 6,0 °C / 42,8 °F | 5,9 / 0,0059 | 35,2 / 15,1 | 0,842 / 13,49 |
| 20 °C / 68 °F | 70 | 16,5 °C / 61,7 °F | 14,4 °C / 57,9 °F | 10,3 / 0,0103 | 46,3 / 19,9 | 0,849 / 13,60 |
| 30 °C / 86 °F | 50 | 22,0 °C / 71,6 °F | 18,4 °C / 65,1 °F | 13,5 / 0,0135 | 64,6 / 27,8 | 0,887 / 14,21 |
| 30 °C / 86 °F | 80 | 27,1 °C / 80,8 °F | 26,2 °C / 79,2 °F | 21,6 / 0,0216 | 85,4 / 36,7 | 0,902 / 14,45 |
| 40 °C / 104 °F | 30 | 24,5 °C / 76,1 °F | 18,8 °C / 65,8 °F | 13,7 / 0,0137 | 75,3 / 32,4 | 0,929 / 14,88 |
| 40 °C / 104 °F | 60 | 32,9 °C / 91,2 °F | 31,0 °C / 87,8 °F | 28,9 / 0,0289 | 114,5 / 49,2 | 0,953 / 15,27 |
| 50 °C / 122 °F | 20 | 29,6 °C / 85,3 °F | 21,1 °C / 70,0 °F | 15,4 / 0,0154 | 89,7 / 38,6 | 0,974 / 15,60 |
| 50 °C / 122 °F | 40 | 36,5 °C / 97,7 °F | 33,9 °C / 93,0 °F | 32,8 / 0,0328 | 135,4 / 58,2 | 1,007 / 16,13 |

## FAQ: Preguntas frecuentes sobre la carta psicrométrica

**¿Cuál es la pendiente aproximada de las líneas de entalpía en una carta psicrométrica estándar?**  
Las líneas de entalpía constante presentan una pendiente de aproximadamente −2,4 kJ/kg por cada g/kg de aumento en la humedad absoluta, lo que equivale a −1,03 BTU/lb por cada lb/lb de incremento en la relación de humedad. Esta pendiente es prácticamente paralela a la de la temperatura de bulbo húmedo y permite leer directamente ambos parámetros en un solo trazado.

**¿A qué presión se traza la carta psicrométrica convencional y cómo se corrige por altitud?**  
La carta psicrométrica más difundida se traza a la presión atmosférica estándar al nivel del mar de 101,325 kPa / 14,696 psi. Para cada 500 m / 1640 ft de incremento en la altitud, la presión barométrica disminuye aproximadamente 6 kPa / 0,87 psi, lo que exige utilizar una carta específica para la altitud o aplicar factores de corrección del 5‑7 % en las lecturas de humedad absoluta.

**¿Qué diferencia máxima se acepta entre la temperatura de bulbo húmedo y la temperatura de saturación adiabática en el sistema aire‑agua?**  
Para el sistema aire húmedo con agua, la diferencia entre la temperatura termodinámica de bulbo húmedo y la temperatura de saturación adiabática es inferior a 0,2 °C / 0,36 °F en todo el intervalo de confort, debido a que el número de Luikov es aproximadamente igual a 1. Esta coincidencia permite emplear ambas líneas indistintamente en los cálculos de climatización.

**¿Cuánto desciende el punto de rocío al reducir la humedad relativa un 10 % a temperatura seca constante de 25 °C / 77 °F?**  
A 25 °C / 77 °F, una reducción de humedad relativa del 60 % al 50 % produce un descenso del punto de rocío de aproximadamente 17,4 °C / 63,3 °F a 13,8 °C / 56,8 °F, es decir, una caída cercana a 3,6 °C / 6,5 °F. Esta variación es crítica en procesos de enfriamiento para evitar condensaciones superficiales no deseadas.

**¿Qué velocidad de aire mínima debe mantenerse en un psicrómetro de aspiración para limitar el error de medición al 1 %?**  
Para asegurar un error de medición de humedad relativa inferior al 1 %, la velocidad del aire sobre los bulbos de un psicrómetro de aspiración forzada debe ser de al menos 4,5 m/s / 885 ft/min. Velocidades inferiores a 2 m/s / 394 ft/min provocan errores por encima del 5 % debido a la insuficiente renovación de la capa límite húmeda.

**¿Qué incremento de humedad absoluta se produce al calentar aire desde 10 °C / 50 °F y 60 % HR hasta 30 °C / 86 °F e inyectar vapor hasta alcanzar 50 % HR?**  
Al calentar aire desde 10 °C / 50 °F con una humedad absoluta inicial de 4,6 g/kg / 0,0046 lb/lb y agregar vapor hasta alcanzar 30 °C / 86 °F y 50 % HR, la humedad absoluta final asciende a 13,5 g/kg / 0,0135 lb/lb. Esto representa una adición de 8,9 gramos de vapor de agua por cada kilogramo de aire seco procesado, equivalente a 62,3 granos de vapor por libra de aire seco.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/
- **thermopedia.com**: https://www.thermopedia.com/content/1261/
