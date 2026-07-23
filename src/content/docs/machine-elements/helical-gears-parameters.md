---
title: "Engranajes helicoidales parámetros"
sidebar:
  label: "Engranajes helicoidales"
description: "Ficha tecnica: Engranajes helicoidales parámetros"
keywords: ["helical gear helix angle parameters", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "helical-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Parámetros geométricos
El parámetro geométrico principal de un engranaje helicoidal es el ángulo de hélice (β), cuyo valor estándar comercial varía de 15° a 45° / 0.26 a 0.79 rad, siendo 20° y 30° los más comunes en la industria general y 45° en cruces de ejes perpendiculares. La relación entre el paso circular transversal (Pt) y el paso circular normal (Pn) está determinada por Pn = Pt × cos(β). En consecuencia, el módulo normal (mn) y el módulo transversal (mt) guardan la misma relación: mn = mt × cos(β). El ángulo de presión normal (αn) está estandarizado en 14.5° y 20°, siendo este último el predominante para aplicaciones de potencia.

| Parámetro               | Fórmula              | Unidad         |
| :---------------------- | :------------------- | :------------- |
| Ángulo de hélice (β)    | —                    | 15°–45° / 0.26–0.79 rad |
| Paso circular normal (Pn) | Pn = Pt × cos(β)     | mm / in        |
| Módulo normal (mn)      | mn = mt × cos(β)     | mm / in        |
| Ángulo de presión (αn)  | —                    | 20° / 0.35 rad |
| Número de dientes (Z)   | —                    | 10 a 48 dientes |

## Dimensiones normalizadas
La oferta estándar comercial se rige por el paso diametral (DP), con valores de 16, 20, 24, 32 y 48 dientes por pulgada, lo que equivale a módulos desde 1.59 mm hasta 0.53 mm. La tabla siguiente correlaciona los pasos diametrales habituales con sus módulos métricos y pasos circulares correspondientes.

| Paso diametral (DP) | Módulo (m)                  | Paso circular (Pc)          |
| :------------------ | :-------------------------- | :-------------------------- |
| 16                  | 1.59 mm / 0.063 in          | 4.99 mm / 0.196 in          |
| 20                  | 1.27 mm / 0.050 in          | 3.99 mm / 0.157 in          |
| 24                  | 1.06 mm / 0.042 in          | 3.32 mm / 0.131 in          |
| 32                  | 0.79 mm / 0.031 in          | 2.49 mm / 0.098 in          |
| 48                  | 0.53 mm / 0.021 in          | 1.66 mm / 0.065 in          |

## Capacidades de carga
Un engranaje helicoidal soporta entre un 30% y un 50% más de carga tangencial que un engranaje recto de módulo y material equivalentes, gracias al solapamiento progresivo de los dientes. La tensión de flexión en la raíz del diente se estima mediante la fórmula de Lewis modificada: σ = (Ft × Ko × Kv × Ks) / (b × Y × mn), donde Ft es la carga tangencial, b el ancho de cara, Y el factor de forma y mn el módulo normal. El contacto más gradual reduce la carga dinámica (Kv cercano a 1), mejorando la suavidad de operación y la distribución de presión sobre la superficie.

| Tipo de carga             | Capacidad de carga sugerida         | Factor de seguridad típico |
| :------------------------ | :---------------------------------- | :------------------------- |
| Servicio uniforme         | 100 % del límite de fluencia / 100 % | 2.0 a 3.0                  |
| Choques moderados         | 75 % del límite de fluencia / 75 %   | 3.0 a 5.0                  |
| Choques severos           | 50 % del límite de fluencia / 50 %   | 5.0 a 8.0                  |
| Cargas estáticas puntuales| Hasta 150 % del límite / Hasta 150 % | 1.0 a 1.2                  |

## Criterios de selección
El equilibrio entre la carga axial que deben soportar los rodamientos y la suavidad de transmisión es el criterio fundamental de diseño. Un ángulo de hélice de 45° / 0.79 rad genera una carga axial exactamente igual a la carga tangencial transmitida. En engranajes de ejes paralelos, se prefieren ángulos bajos (15° a 20°) para minimizar el empuje, mientras que ángulos altos (30° a 45°) se seleccionan para transmisiones donde el silencio y la ausencia de vibraciones son críticas. La selección del material y el ángulo de presión también dependen del par torsor requerido y la velocidad de operación.

| Criterio              | Ángulo de hélice bajo (15°–20°)    | Ángulo de hélice alto (30°–45°)     |
| :-------------------- | :--------------------------------- | :---------------------------------- |
| Carga axial resultante| Baja                              | Alta (requiere rodamientos de empuje) |
| Suavidad de operación | Buena                             | Excelente                          |
| Nivel de ruido        | Moderado                          | Muy bajo                           |
| Velocidad recomendada | Alta (> 3000 rpm / 3000 rpm)      | Media o baja (< 2000 rpm / 2000 rpm) |

## Consideraciones de montaje
La tolerancia de distanciamiento entre centros debe mantenerse dentro de ±0.05 mm / ±0.002 in para un engrane helicoidal de paso diametral fino. El sentido de la hélice (derecha o izquierda) en un par debe ser opuesto para transmisiones de ejes paralelos, gestionando así la carga axial generada. Los rodamientos de bolas de contacto angular o rodillos cónicos son mandatorios para absorber el empuje en ángulos superiores a 20° / 0.35 rad. La lubricación debe asegurar la formación de película elastohidrodinámica (EHD) incluso en la zona de deslizamiento axial, requiriendo aceites con aditivos de extrema presión (EP) para cargas pesadas.

## Tablas de selección por aplicación
Las tablas siguientes ofrecen una guía de selección rápida basada en pasos diametrales y materiales estándar disponibles para diferentes sectores industriales.

| Aplicación típica             | Dientes sugeridos | Paso diametral (DP) | Material recomendado           |
| :---------------------------- | :---------------- | :------------------ | :----------------------------- |
| Transmisión de instrumentación | 48                | 48                  | Acero inoxidable AISI 304     |
| Bombas hidráulicas ligeras    | 16 a 20           | 20                  | Acero aleado 4140             |
| Motores eléctricos (1–10 HP)  | 24 a 32           | 16                  | Acero al carbono 1045         |
| Transportadores continuos     | 13 a 18           | 16                  | Acero aleado 8620, cementado  |

| Servicio de carga                | Ángulo de hélice (β) | Ángulo de presión (αn) | Material y dureza superficial    |
| :------------------------------- | :------------------- | :--------------------- | :------------------------------- |
| Gran potencia, choques severos   | 20°–30° / 0.35–0.52 rad | 20° / 0.35 rad         | Acero aleado, > 60 HRC / > 60 HRC |
| Alta velocidad continua          | 15°–20° / 0.26–0.35 rad | 20° / 0.35 rad         | Acero al carbono, > 50 HRC / > 50 HRC |
| Silencioso, baja carga de choque | 30°–45° / 0.52–0.79 rad | 20° / 0.35 rad         | Acero inoxidable, sin templar     |

## Preguntas frecuentes
### ¿Qué ángulo de hélice minimiza la carga axial en transmisiones de ejes paralelos?
Un ángulo de hélice bajo de 15° / 0.26 rad reduce la carga axial a aproximadamente el 27% de la carga tangencial, siendo la opción técnica para minimizar empujes en reductores de alta velocidad.

### ¿Cuál es la diferencia práctica entre el paso normal y el circular en el diseño de herramientas?
El paso circular normal de un engranaje con módulo 1.27 mm / 0.050 in es 3.99 mm / 0.157 in, mientras que su paso transversal es mayor; la directriz de la fresa se alinea al paso normal porque la herramienta de corte sigue el perfil del diente.

### ¿Pueden engranar entre sí piñones helicoidales con diferentes ángulos de hélice?
Solo engranan correctamente si la suma algebraica de sus ángulos de hélice es igual al ángulo entre los ejes, comúnmente 90° / 1.57 rad para transmisiones de ejes cruzados.

### ¿Cómo afecta un incremento en el ángulo de hélice a la capacidad de carga del diente?
Un aumento del ángulo de 15° a 30° / 0.26 a 0.52 rad incrementa la longitud de la línea de contacto efectiva y la carga que puede soportar el diente en un 40% aproximadamente, aunque a costa de generar un empuje axial correspondiente al 57% de la fuerza tangencial.

### ¿Qué dureza superficial requieren los engranajes helicoidales para servicio pesado?
Para soportar presiones de contacto superiores a 1100 MPa / 160 ksi, los dientes deben ser cementados y templados para alcanzar una dureza superficial de 58 a 62 HRC / 58 a 62 HRC en la capa externa, manteniendo un núcleo tenaz alrededor de 35 HRC.

### ¿Por qué los engranajes helicoidales de 45°/1.57 rad son comunes en trenes de laminación?
Porque un ángulo de hélice de 45° / 1.57 rad iguala la fuerza axial y la tangencial, permitiendo anularlas mutuamente o gestionarlas simétricamente en configuraciones de doble hélice, lo que duplica la capacidad de carga para una misma carga de flexión en la raíz.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gears-d_1307.html
- **mcmaster.com**: https://www.mcmaster.com/products/helical-gears/
