---
title: "FDM parámetros materiales y tolerancias"
sidebar:
  label: "FDM parámetros materiales y tolerancias"
description: "Ficha tecnica: FDM parámetros materiales y tolerancias"
keywords: ["FDM 3D printing parameters tolerances layer height", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "fdm"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción del proceso

La fabricación por filamento fundido (FFF), denominada comercialmente modelado por deposición fundida (FDM), es un proceso de manufactura aditiva que construye piezas capa por capa mediante la extrusión de un filamento termoplástico continuo. El material en forma de hilo es arrastrado por un mecanismo de rodillos hacia un cabezal extrusor calefactado; allí se funde y se deposita a través de una boquilla sobre una plataforma de construcción móvil. Cada capa horizontal reproduce una sección del modelo CAD. Una vez completada, la plataforma desciende (o el cabezal asciende) la distancia correspondiente al espesor de capa y se aplica la siguiente lámina de material. Cuando el diseño presenta voladizos o geometrías complejas se extruye una estructura de soporte que se retira mecánicamente en la etapa de postprocesado. Si se requiere un acabado superficial superior, pueden realizarse operaciones adicionales como lijado, pulido o alisado químico con vapor.

## Parámetros del proceso

Los parámetros de impresión FDM varían en función del material termoplástico utilizado. La tabla siguiente recoge los rangos de operación más habituales para los filamentos de uso común en equipos de escritorio.

| Material | Temperatura de extrusión | Temperatura de cama | Altura de capa típica | Velocidad de impresión | Diámetro de boquilla estándar |
|---|---|---|---|---|---|
| PLA (ácido poliláctico) | 190 – 220 °C / 374 – 428 °F | 20 – 60 °C / 68 – 140 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| ABS (acrilonitrilo butadieno estireno) | 220 – 250 °C / 428 – 482 °F | 80 – 110 °C / 176 – 230 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| PETG (tereftalato de polietileno glicol) | 220 – 250 °C / 428 – 482 °F | 70 – 90 °C / 158 – 194 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| PET (tereftalato de polietileno) | 230 – 260 °C / 446 – 500 °F | 70 – 90 °C / 158 – 194 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 30 – 50 mm/s / 1,18 – 1,97 in/s | 0,4 mm / 0.016 in |
| TPU (poliuretano termoplástico) | 210 – 230 °C / 410 – 446 °F | 20 – 60 °C / 68 – 140 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 20 – 30 mm/s / 0,79 – 1,18 in/s | 0,4 mm / 0.016 in |
| Nailon (poliamida) | 240 – 260 °C / 464 – 500 °F | 70 – 100 °C / 158 – 212 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 30 – 50 mm/s / 1,18 – 1,97 in/s | 0,4 mm / 0.016 in |
| ASA (acrilato de estireno acrilonitrilo) | 230 – 250 °C / 446 – 482 °F | 90 – 110 °C / 194 – 230 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |
| HIPS (poliestireno de alto impacto) | 220 – 250 °C / 428 – 482 °F | 90 – 110 °C / 194 – 230 °F | 0,1 – 0,3 mm / 0.004 – 0.012 in | 40 – 60 mm/s / 1,57 – 2,36 in/s | 0,4 mm / 0.016 in |

## Tolerancias dimensionales típicas

La precisión geométrica en FDM está limitada fundamentalmente por la mecánica del posicionamiento, el diámetro de la boquilla, la altura de capa y la contracción térmica del material. En equipos de escritorio bien calibrados se alcanzan los siguientes valores orientativos.

| Parámetro dimensional | Tolerancia típica |
|---|---|
| Dimensión lineal en el plano XY (piezas < 100 mm) | ± 0,2 mm / 0.008 in |
| Dimensión lineal en el plano XY (piezas > 100 mm) | ± 0,5 % de la cota nominal |
| Dimensión en altura (eje Z) | ± 0,1 mm / 0.004 in o +-1 altura de capa |
| Diámetro de agujero horizontal | ± 0,15 mm / 0.006 in |
| Planitud (por cada 100 mm de longitud) | 0,3 mm / 0.012 in |
| Redondez (orificios verticales) | 0,10 mm / 0.004 in |

Los valores mejoran con el uso de boquillas más finas (0,2 – 0,3 mm / 0.008 – 0.012 in), velocidades reducidas y sistemas de calefacción de cámara que minimizan la deformación.

## Materiales aplicables

El proceso FDM admite una amplia gama de termoplásticos de ingeniería y de uso general. Los más comunes en impresión de escritorio e industrial son:

- **PLA**: ácido poliláctico, biodegradable, fácil de imprimir, baja contracción.
- **ABS**: resistente al impacto y a la temperatura, requiere cama caliente y buena ventilación.
- **PETG**: combina facilidad de impresión con buena resistencia química y mecánica.
- **PET**: similar al PETG pero con mayor rigidez y temperatura de extrusión ligeramente más alta.
- **TPU**: elastómero termoplástico, flexible y resistente a la abrasión.
- **Nailon (poliamida)**: alta tenacidad y resistencia al desgaste, higroscópico, necesita secado previo.
- **ASA**: equivalente al ABS pero con excelente resistencia a la intemperie y a los rayos UV.
- **HIPS**: se emplea tanto como material de soporte soluble en limoneno como pieza final ligera.

También se procesan policarbonato (PC), polipropileno (PP) y materiales compuestos con carga de fibra de carbono o vidrio, siempre que el equipo cuente con los elementos de extrusión adecuados.

## Ventajas

- **Disponibilidad comercial**: gran oferta de impresoras y filamentos, desde equipos educativos hasta sistemas industriales.
- **Amplia gama de materiales poliméricos**: desde termoplásticos rígidos hasta flexibles y compuestos.
- **Alto aprovechamiento del material**: el desperdicio se limita prácticamente al material de soporte y purgas, con índices superiores al 95 %.
- **Bajo costo de adquisición**: las máquinas de escritorio son económicas y el precio por kilogramo de filamento es reducido.

## Limitaciones

- **Resolución superficial limitada**: el diámetro de boquilla y la altura de capa generan escalones visibles; las piezas detalladas requieren postprocesado.
- **Paredes delgadas y geometrías finas**: los esfuerzos residuales y la falta de resistencia en perfiles reducidos pueden provocar fallos o deformaciones.
- **Necesidad de estructuras de soporte**: voladizos, puentes y cavidades internas exigen soportes que luego deben retirarse mecánica o químicamente.
- **Anisotropía mecánica**: la resistencia en el eje Z es inferior a la de los planos XY, debido a la unión entre capas.

## Guía de selección

FDM es la opción más adecuada cuando se busca:

- Prototipado rápido funcional que no requiera altísima precisión dimensional.
- Piezas de gran tamaño (superiores a 200 mm / 7.9 in) que pueden fabricarse a bajo coste.
- Lotes unitarios o series muy cortas, donde la amortización del utillaje de otros procesos no es viable.
- Aplicaciones en las que se necesita aprovechar la variedad de materiales termoplásticos disponibles.

No es recomendable para:

- Componentes que demandan tolerancias inferiores a ± 0,1 mm / 0.004 in.
- Detalles de menos de 0,8 mm / 0.031 in de espesor o geometrías con microcavidades.
- Producción en masa donde la velocidad de ciclo de otros métodos (inyección) supera ampliamente a la impresión 3D.

## Preguntas frecuentes

**¿Cuál es la altura de capa mínima que se puede lograr en FDM?**  
La altura de capa mínima práctica es de 0,05 mm / 0.002 in, aunque la mayoría de las impresoras de escritorio trabajan con 0,1 mm / 0.004 in sin comprometer la fiabilidad de la extrusión.

**¿Qué tolerancia dimensional es realista en impresoras FDM de escritorio?**  
En los ejes XY se obtiene una precisión de ±0,2 mm / 0.008 in para piezas de hasta 100 mm de lado, mientras que en el eje Z la tolerancia se sitúa en ±0,1 mm / 0.004 in, equivalente aproximadamente a una altura de capa.

**¿Cuánto material se desperdicia durante una impresión FDM?**  
El aprovechamiento de material supera el 95 %, siendo el desperdicio inferior al 5 % y concentrado principalmente en las estructuras de soporte y en las purgas al inicio de cada trabajo.

**¿Qué temperatura de cama se necesita para evitar el warping con ABS?**  
El ABS requiere una cama calefactada entre 80 y 110 °C / 176 – 230 °F; por debajo de 80 °C / 176 °F es muy probable que la pieza se despegue y se deforme.

**¿Cuál es la velocidad máxima de impresión recomendada para TPU?**  
Los filamentos flexibles se imprimen a baja velocidad, típicamente entre 20 y 30 mm/s / 0,79 – 1,18 in/s; velocidades superiores pueden provocar atascos en el extrusor.

**¿Qué diámetro de boquilla se emplea como estándar en FDM?**  
El diámetro de boquilla más común es 0,4 mm / 0.016 in, que ofrece un equilibrio entre velocidad de construcción y detalle superficial. También se utilizan boquillas de 0,2 mm / 0.008 in para piezas de alta definición y de hasta 1,0 mm / 0.039 in para impresiones rápidas de gran formato.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/designstandards/gdt/3d_hole.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/fused-deposition-modeling-fdm
