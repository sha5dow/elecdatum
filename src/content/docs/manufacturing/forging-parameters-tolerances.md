---
title: "Forja parámetros y tolerancias"
sidebar:
  label: "Forja parámetros y tolerancias"
description: "Ficha tecnica: Forja parámetros y tolerancias"
keywords: ["forging allowances tolerances design parameters", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "forging"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Resumen del proceso
La forja es un proceso de conformado por deformación plástica en el que un material metálico, generalmente precalentado, es sometido a fuerzas de compresión localizadas aplicadas mediante martillos, prensas o matrices. El objetivo es orientar la estructura de grano, mejorar las propiedades mecánicas y obtener piezas con formas próximas a la geometría final. Los parámetros de diseño, como los ángulos de desmoldeo, radios de acuerdo y tolerancias dimensionales, son críticos para garantizar la fabricabilidad y la calidad del componente forjado.

## Tipos de forja
- **Forja en matriz abierta (forja libre):** El material se deforma repetidamente entre matrices planas o formas simples, moviendo la pieza manualmente o con manipuladores. Produce piezas de geometría aproximada, ideales para grandes componentes y series pequeñas.  
- **Forja en matriz cerrada (estampación):** El material fluye dentro de una cavidad cerrada que reproduce la forma final. Incluye variantes como forja con rebaba (bloqueo) y forja de precisión (near‑net shape).  
- **Forja por recalcado:** Incrementa la sección transversal al comprimir la longitud, típica para cabezas de tornillos y válvulas.  
- **Forja por laminación (roll forging):** Reduce la sección y alarga la pieza mediante rodillos ranurados, usada para ejes y ballestas.  
- **Forja rotativa (swaging):** Martillos radiales reducen el diámetro de tubos o barras mediante impactos giratorios.

## Parámetros de diseño

### Ángulos de desmoldeo
Para facilitar la extracción de la forja de la matriz se requieren ángulos de inclinación en las paredes interiores y exteriores. Los valores recomendados en función del material son:

| Material | Ángulo de desmoldeo (°) |
|----------|----------------------------|
| Aluminio | 0 – 2 |
| Aleaciones de cobre (latón) | 0 – 3 |
| Acero al carbono y aleado | 5 – 7 |
| Acero inoxidable | 5 – 8 |

### Radios mínimos de esquina y redondeo
Es indispensable evitar aristas vivas mediante radios generosos que mejoran el flujo de material y reducen concentraciones de tensión. Las dimensiones mínimas dependen de la altura de la protuberancia forjada:

| Altura de la protuberancia | Radio mínimo de esquina | Radio mínimo de redondeo |
|-----------------------------|---------------------------|----------------------------|
| 12,5 mm / 0.5 in | 1,5 mm / 0.06 in | 5 mm / 0.2 in |
| 25 mm / 1.0 in | 3 mm / 0.12 in | 6,25 mm / 0.25 in |
| 50 mm / 2.0 in | 5 mm / 0.2 in | 10 mm / 0.4 in |
| 100 mm / 4.0 in | 6,25 mm / 0.25 in | 10 mm / 0.4 in |
| 400 mm / 16 in | 22 mm / 0.875 in | 50 mm / 2.0 in |

### Consideraciones sobre la línea de partición
- La línea de partición debe situarse, siempre que sea posible, en un único plano y a través del centro de la pieza, no cerca de los bordes superior o inferior.  
- Cualquier punto de la superficie de partición no debe superar los 75° respecto al plano principal de partición.  
- Deben evitarse socavados que impidan la extracción de la pieza.

## Tolerancias

### Tolerancia dimensional
La tolerancia dimensional habitual es positiva y se aproxima al **0,3 % de la dimensión**, redondeada al siguiente múltiplo de 0,5 mm / 0.020 in. Por ejemplo, para una cota de 100 mm se espera una tolerancia de +0,5 mm.

### Tolerancia por desgaste de la matriz
Lateral (paralela al plano de partición), expresada como porcentaje del valor nominal:

| Material | Tolerancia por desgaste (% del valor nominal lateral) |
|----------|-------------------------------------------------------|
| Aleaciones de cobre | +0,2 % |
| Aluminio, Acero | +0,5 % |

### Tolerancia de cierre de matriz
Corresponde a la dirección de apertura y cierre de los herramentales:

| Área proyectada de la matriz | Tolerancia de cierre |
|------------------------------|-----------------------|
| < 150 cm² / < 23 in² | 1 mm / 0.040 in |
| > 6500 cm² / > 100 in² | 6,25 mm / 0.25 in |

Para áreas intermedias se interpola linealmente.

### Tolerancia de coincidencia de matriz
Desplazamiento admisible entre las mitades superior e inferior de la matriz en función del peso de la forja recortada:

| Material | Peso de la forja acabada (recortada) | Tolerancia de coincidencia |
|----------|--------------------------------------|----------------------------|
| Aluminio, Aleaciones de cobre, Acero | < 10 kg / < 22 lb | 0,75 mm / 0.030 in |
|  | < 50 kg / < 110 lb | 1,75 mm / 0.070 in |
|  | > 500 kg / > 1100 lb | 5 mm / 0.200 in |
| Acero inoxidable, Titanio | < 10 kg / < 22 lb | 1,25 mm / 0.050 in |
|  | < 50 kg / < 110 lb | 2,5 mm / 0.100 in |
|  | > 500 kg / > 1100 lb | 6,5 mm / 0.260 in |

### Tolerancia de rebaba
Cantidad admisible de rebaba remanente tras la operación de recorte:

| Material | Peso de la forja acabada (recortada) | Tolerancia de rebaba |
|----------|--------------------------------------|----------------------|
| Aluminio, Aleaciones de cobre, Acero | < 10 kg / < 22 lb | 0,8 mm / 0.032 in |
|  | < 50 kg / < 110 lb | 3,25 mm / 0.125 in |
|  | > 500 kg / > 1100 lb | 10 mm / 0.4 in |
| Acero inoxidable, Titanio | < 10 kg / < 22 lb | 1,6 mm / 0.064 in |
|  | < 50 kg / < 110 lb | 5 mm / 0.2 in |
|  | > 500 kg / > 1100 lb | 12,5 mm / 0.5 in |

## Materiales aplicables
La forja se aplica a una amplia gama de aleaciones metálicas con suficiente ductilidad en caliente. Los rangos típicos de temperatura de forja en caliente son:

| Material | Temperatura de forja en caliente (°C / °F) |
|----------|---------------------------------------------|
| Aluminio y aleaciones | 350 – 500 °C / 662 – 932 °F |
| Aleaciones de cobre (latón, bronce) | 700 – 800 °C / 1292 – 1472 °F |
| Acero al carbono y aleado | 1100 – 1250 °C / 2012 – 2282 °F |
| Acero inoxidable | 1150 – 1250 °C / 2102 – 2282 °F |
| Titanio y aleaciones | 900 – 950 °C / 1652 – 1742 °F |

La selección del material influye directamente en los ángulos de desmoldeo y las tolerancias de coincidencia y rebaba, según las tablas anteriores.

## Ventajas y limitaciones
**Ventajas**
- Mejora continua del flujo de grano, lo que incrementa la resistencia a la fatiga y la tenacidad.
- Obtención de formas cercanas a la definitiva (*near‑net shape*), reduciendo el mecanizado posterior.
- Ausencia de porosidades y homogeneidad estructural superior a fundición o sinterizado.
- Amplia gama de tamaños, desde piezas pequeñas de gramos hasta ejes de varias toneladas.

**Limitaciones**
- Costos elevados de utillaje y matrices, especialmente en forja de precisión.
- Restricciones geométricas: necesidad de ángulos de desmoldeo, radios, y espesores mínimos de pared.
- Tolerancias menos ajustadas que en mecanizado, con sobreespesores para acabado posterior.
- No apto para materiales frágiles o con poca capacidad de deformación plástica.

## Preguntas frecuentes
**1. ¿Qué tolerancia dimensional se espera en una pieza forjada estándar?**  
La tolerancia positiva habitual es aproximadamente el 0,3 % de la dimensión nominal, redondeada al siguiente 0,5 mm / 0.020 in.

**2. ¿Cuál es el radio mínimo de esquina para una protuberancia de 50 mm?**  
Para una altura de 50 mm / 2.0 in se recomienda un radio mínimo de esquina de 5 mm / 0.2 in.

**3. ¿Qué ángulo de desmoldeo necesita un diseño en acero inoxidable?**  
Los aceros inoxidables requieren un ángulo de 5° a 8°; típicamente se elige 7° como valor seguro.

**4. ¿Cuánto puede desplazarse una matriz en una forja de aluminio de 30 kg?**  
Para 30 kg / 66 lb (categoría <50 kg) la tolerancia de coincidencia de matriz es 1,75 mm / 0.070 in.

**5. ¿Qué espesor máximo de rebaba se acepta en una forja de titanio de 600 kg recortada?**  
Para pesos >500 kg / >1100 lb, la tolerancia de rebaba alcanza 12,5 mm / 0.5 in.

**6. ¿Cuánto movimiento permite el cierre de matriz en una pieza de pequeño tamaño?**  
Cuando el área proyectada es inferior a 150 cm² / 23 in², la tolerancia de cierre es de 1 mm / 0.040 in.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **efunda.com**: https://www.efunda.com/processes/metal_processing/forging.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/open-die-forging
