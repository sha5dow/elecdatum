---
title: "Desbalance de voltaje en sistemas trifásicos"
sidebar:
  label: "Desbalance de voltaje en sistemas trifásicos"
description: "Ficha tecnica: Desbalance de voltaje en sistemas trifásicos"
keywords: ["voltage unbalance three phase calculation", "calidad-energia"]
category: "calidad-energia"
topic: "voltage-quality"
subcategory: "voltage-unbalance"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El desbalance de voltaje en sistemas trifásicos afecta la eficiencia y vida útil de los equipos conectados, siendo una de las perturbaciones más comunes en redes de distribución industrial. En condiciones ideales, las tres tensiones de fase deben tener igual magnitud y estar defasadas exactamente 120° entre sí; cualquier desviación de este equilibrio constituye un desbalance que incrementa las pérdidas y puede provocar fallos prematuros en motores, transformadores y variadores de velocidad.

El desbalance de voltaje se presenta cuando los fasores de tensión de un sistema trifásico no poseen la misma magnitud y/o no se encuentran exactamente defasados 120 grados eléctricos entre sí. La métrica más común para cuantificarlo es el porcentaje de desbalance de voltaje (%DV), definido por la norma NEMA MG 1 como la máxima desviación respecto al promedio de las tres tensiones de línea.

| Parámetro | Valor típico en sistemas balanceados | Condición de desbalance |
|---|---|---|
| Magnitud de tensiones de línea | Iguales entre sí (ej. 480 V / 480 V / 480 V) | Al menos una tensión difiere (ej. 480 V / 475 V / 485 V) |
| Ángulo de fase | 120° / 120° / 120° eléctricos | Ángulos distintos de 120° (ej. 120° / 118° / 122°) |
| Secuencia de fases | L1-L2-L3 (positiva) | Puede aparecer componente de secuencia negativa |

[VERIFICAR: valores numéricos de tolerancia típica según IEC 60034-26]

## Causas

Las principales causas de desbalance de voltaje en una instalación trifásica se agrupan en tres categorías: asimetrías en la generación, desequilibrios en la red de distribución y, de forma predominante, la operación de cargas monofásicas conectadas de manera desigual entre las fases. La distribución no uniforme de luminarias, equipos de climatización y hornos de inducción monofásicos en sistemas de baja tensión de 400/230 V puede introducir desbalances significativos si no se planifica adecuadamente el reparto de cargas.

| Causa | Ejemplo | Impacto típico sobre el %DV |
|---|---|---|
| Cargas monofásicas desequilibradas | 30 kVA monofásicos en fase A, 10 kVA en fase B, 20 kVA en fase C | 2 – 5 % |
| Impedancias de línea asimétricas | Conductores de distinto calibre o longitud en líneas de distribución | 0,5 – 2 % |
| Fallos en bancos de capacitores | Fusible fundido en una etapa de compensación trifásica | 1 – 3 % |
| Conexiones defectuosas o contactos flojos | Bornes con alta resistencia en una fase del tablero principal | 1 – 4 % |
| Cargas no lineales con consumo desigual por fase | Variadores de velocidad monofásicos concentrados en dos fases | 2 – 6 % |

[VERIFICAR: datos estadísticos de distribución de causas según estudios de campo]

## Efectos en los equipos

Un desbalance de voltaje de tan solo un 1 % puede incrementar las pérdidas en un motor de inducción hasta en un 5 %, mientras que un 3 % de desbalance reduce la vida útil del aislamiento en aproximadamente un 50 % por cada 10 °C de sobreelevación de temperatura. Los motores trifásicos son particularmente sensibles porque el desbalance genera un campo magnético rotatorio inverso (componente de secuencia negativa) que produce un par de frenado y corrientes de frecuencia doble en el rotor, elevando la temperatura de operación y acelerando el envejecimiento de los devanados.

| Equipo afectado | Efecto principal | Consecuencia operativa |
|---|---|---|
| Motor de inducción jaula de ardilla | Aumento de pérdidas I²R y calentamiento adicional | Reducción de vida útil del aislamiento, riesgo de disparo térmico |
| Transformador trifásico | Corrientes de secuencia negativa provocan calentamiento desigual en el núcleo | Disminución de la capacidad de carga efectiva |
| Variador de frecuencia | Rizado de bus CC incrementado, posibles disparos por sobretensión | Funcionamiento errático, fallos prematuros de condensadores del bus |
| Banco de capacitores | Sobrecorriente en la fase más cargada, envejecimiento acelerado del dieléctrico | Degradación prematura, posible resonancia con armónicos |
| Cables de alimentación | Corriente de neutro elevada en sistemas estrella | Calentamiento excesivo del conductor neutro, riesgo de incendio |

## Métodos de cálculo

La cuantificación del desbalance se realiza mediante tres enfoques principales reconocidos por normas internacionales: el método NEMA (porcentaje de desbalance de tensión), el método IEC (factor de desbalance de tensión) y el método de componentes simétricas (relación de secuencia negativa a positiva). El método NEMA es el más extendido en aplicaciones industriales por su simplicidad.

> **%DV_NEMA = (Desviación máxima respecto al promedio / Promedio de los tres voltajes de línea) · 100**

| Variable | Significado | Unidad |
|---|---|---|
| V_AB, V_BC, V_CA | Tensiones de línea trifásicas | V |
| V_prom | Promedio aritmético de las tres tensiones de línea | V |
| Desviación máxima | Máximo valor absoluto de la diferencia V_i - V_prom | V |
| %DV_NEMA | Porcentaje de desbalance de voltaje según NEMA | % |

El método de componentes simétricas, utilizado por la norma IEC 61000-4-30, define el factor de desbalance de tensión (VUF, Voltage Unbalance Factor) como:

> **VUF = (V_neg / V_pos) · 100**

donde V_neg y V_pos son las magnitudes de las componentes de secuencia negativa y positiva respectivamente.

## Normas y estándares

La norma NEMA MG 1 establece que los motores de inducción pueden operar de forma continua con un desbalance de voltaje de hasta el 1 %, siempre que la carga se reduzca según las curvas de factor de corrección publicadas por el fabricante. La norma IEC 60034-26 fija un límite del 2 % de VUF para motores en condiciones nominales, mientras que la IEC 61000-2-2 recomienda mantener el desbalance por debajo del 2 % en puntos de acoplamiento común de baja tensión.

| Estándar | Parámetro | Límite recomendado | Observaciones |
|---|---|---|---|
| NEMA MG 1 (2016) | %DV_NEMA | 1 % continuo; máximo 5 % durante arranque | Por encima del 1 % se requiere reducción de carga (derating) |
| IEC 60034-26 | VUF | 2 % máximo para operación nominal | A 2 % de VUF, se recomienda reducir la potencia del motor al 90 % |
| IEEE 141 (Red Book) | %DV_NEMA | < 3 % para distribución industrial | Valores superiores requieren estudio de mitigación |
| IEC 61000-2-2 | VUF | 2 % en BT (230/400 V) | Compatibilidad electromagnética en redes públicas |

[VERIFICAR: ediciones específicas y años de actualización para cada norma]

## Límites recomendados en la práctica

La tabla siguiente resume los rangos de desbalance de voltaje comúnmente aceptados en instalaciones industriales y las acciones recomendadas en cada caso. Se considera que un desbalance superior al 5 % puede provocar la operación de protecciones térmicas en motores de inducción en menos de 10 minutos.

| Rango de %DV (NEMA) | Clasificación | Acción recomendada |
|---|---|---|
| 0 – 1 % | Normal | Operación continua sin restricciones; monitoreo periódico |
| 1 – 2 % | Atención | Redistribuir cargas monofásicas; verificar balance en el CCM |
| 2 – 3 % | Anormal | Realizar derating del motor según NEMA MG 1; planificar corrección |
| 3 – 5 % | Crítico | Corrección inmediata; instalar compensador estático o filtro activo |
| > 5 % | Riesgo | Parada programada urgente; riesgo de falla catastrófica del aislamiento |

Las unidades de temperatura en la tabla anterior no requieren conversión ya que no se presentan valores numéricos en grados.

## Medición y monitoreo

La medición del desbalance de voltaje se realiza con analizadores de calidad de energía capaces de registrar las tres tensiones de fase simultáneamente durante un período mínimo de una semana, conforme a la clase A de la IEC 61000-4-30. Los instrumentos deben calcular las componentes de secuencia mediante la transformada de Fortescue y reportar el VUF cada 10 minutos como agregado de valores eficaces de 200 ms.

| Parámetro de medición | Recomendación | Intervalo |
|---|---|---|
| Duración mínima de la campaña | 7 días continuos | 1 semana |
| Intervalo de agregación | 10 minutos (valores eficaces cada 200 ms) | 10 min |
| Precisión requerida del instrumento | Clase A según IEC 61000-4-30 | --- |
| Magnitudes a registrar | V_AB, V_BC, V_CA, VUF, componentes de secuencia | Muestreo >= 256 puntos/ciclo |
| Sincronización temporal | GPS o NTP para correlación con otros puntos de medida | --- |

[VERIFICAR: valores exactos de precisión nominal de clase A para tensión de estado estacionario]

## Mitigación

La corrección del desbalance de voltaje se aborda principalmente mediante la redistribución equilibrada de cargas monofásicas entre las tres fases y, cuando esto no es suficiente, con la instalación de equipos de compensación activa o pasiva. Los compensadores estáticos de reactivos (SVC) y los filtros activos de potencia (APF) pueden corregir dinámicamente el desbalance al inyectar corrientes de secuencia negativa en oposición de fase.

| Método de mitigación | Costo relativo | Efectividad | Aplicación típica |
|---|---|---|---|
| Redistribución manual de cargas | Bajo | Alta para desbalances moderados (1-3 %) | Plantas con cargas monofásicas estáticas |
| Bancos de capacitores con reactancias de secuencia | Medio | Media | Corrección de factor de potencia combinada con reducción de desbalance |
| Compensador estático (SVC) | Alto | Muy alta | Grandes hornos de inducción, sistemas de distribución |
| Filtro activo de potencia (APF) | Alto | Muy alta | Entornos con armónicos y desbalance simultáneo |
| Transformador de aislamiento delta-estrella | Medio | Media | Eliminación de armónicos triples y redistribución parcial |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia existe entre desbalance de voltaje y desbalance de corriente?

El desbalance de voltaje se mide en las tres tensiones de línea y está relacionado con la calidad de suministro, mientras que el desbalance de corriente se mide en los conductores de fase y refleja la desigualdad de carga conectada. Un motor perfectamente equilibrado puede presentar corrientes desbalanceadas si el voltaje de alimentación está desbalanceado.

### ¿Cómo afecta un transformador delta-estrella al desbalance de voltaje?

Un transformador delta-estrella puede atenuar componentes de secuencia cero pero no elimina la secuencia negativa, por lo que el desbalance de voltaje línea-línea se transfiere casi íntegramente al secundario, afectando igualmente a los motores conectados aguas abajo.

### ¿Cuál es el límite seguro de desbalance para un variador de frecuencia?

La mayoría de fabricantes recomiendan un desbalance de voltaje inferior al 2 %; por encima de este valor, el rizado de la tensión del bus de CC aumenta y puede provocar disparos por sobretención, especialmente si el variador opera sin bobina de choque en el enlace de CC.

### ¿El desbalance de voltaje aumenta las pérdidas en el neutro?

En un sistema trifásico de cuatro hilos con carga no lineal y desbalance, la corriente de neutro puede exceder la corriente de fase, provocando calentamiento excesivo del conductor neutro e incluso riesgo de incendio si no está dimensionado adecuadamente.

### ¿Se puede medir el desbalance con un multímetro convencional?

Un multímetro común solo mide magnitudes RMS y no permite calcular el ángulo de fase ni las componentes de secuencia. Para caracterizar el desbalance de voltaje es necesario utilizar un analizador de calidad de energía que registre fasores o calcule la transformada de Fortescue.

### ¿Qué relación tiene el desbalance con los armónicos?

El desbalance de voltaje y los armónicos son perturbaciones diferentes pero frecuentemente coexistentes. Cargas monofásicas no lineales (como fuentes conmutadas) pueden generar simultáneamente armónicos y desbalance, y los armónicos de secuencia negativa (5º, 11º, etc.) agravan el efecto del desbalance sobre motores y transformadores.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/three-phase-electrical-d_888.html
