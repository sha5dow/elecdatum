---
title: "Sistema de protección contra rayos NFPA 780"
sidebar:
  label: "Sistema de protección contra rayos NFPA 780"
description: "Ficha tecnica: Sistema de protección contra rayos NFPA 780"
keywords: ["lightning protection system design NFPA 780", "puesta-tierra"]
category: "puesta-tierra"
topic: "lightning-protection"
subcategory: "lightning-protection-system"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un sistema de protección contra rayos (SPCR) conforme a la norma NFPA 780 tiene como objetivo capturar la descarga atmosférica y conducir su corriente de forma segura hasta tierra, evitando daños en la estructura y sus ocupantes. La resistencia de puesta a tierra medida en la instalación suele exigir un valor inferior a 25 Ω para garantizar una operación efectiva.

## Componentes del sistema de protección contra rayos NFPA 780

Un SPCR completo incluye al menos 3 terminales aéreas por cada 30 m² / 323 sq ft de superficie de techo y se compone de los siguientes elementos fundamentales.

| Componente | Función principal | Material típico (cobre) | Dimensión mínima requerida |
| --- | --- | --- | --- |
| Terminal aérea (pararrayos) | Captación de la descarga | Cobre macizo | 9,5 mm / 3/8 in de diámetro |
| Conductor de bajada | Conducción vertical de la corriente | Cobre desnudo o cable trenzado | 29 mm² / #2 AWG (o 5/8 in × 1/16 in en fleje) |
| Electrodo de puesta a tierra | Disipación segura de la corriente en el terreno | Electrodo de acero recubierto de cobre (copperweld) | 15,9 mm / 5/8 in de diámetro × 3 m / 10 ft |
| Uniones equipotenciales | Interconexión de elementos metálicos para evitar diferencia de potencial | Conductor de cobre | 16 mm² / #6 AWG |

## Resistencia de puesta a tierra recomendada

La resistencia máxima del sistema de tierra medida con un telurómetro debe ser igual o inferior a 25 Ω para cumplir con NFPA 780, aunque en instalaciones que albergan equipos sensibles se recomienda un valor de 10 Ω o menor. La resistividad aparente del terreno, influida por la humedad y el tipo de suelo, es el factor que más afecta la resistencia final.

## Cálculo de la resistencia de un electrodo vertical simple

La resistencia de puesta a tierra de un electrodo cilíndrico vertical se estima con la siguiente fórmula simplificada, suficiente para dimensionamientos preliminares de SPCR.

> **R = (ρ / (2πL))* (ln(4L/d) - 1)**

| Símbolo | Parámetro | Unidad (métrica/imperial) |
| --- | --- | --- |
| R | Resistencia de puesta a tierra | Ω |
| ρ | Resistividad del terreno | Ω·m |
| L | Longitud enterrada del electrodo | m / ft |
| d | Diámetro del electrodo | m / ft |

## Tabla de resistividades típicas del terreno

La resistividad del suelo (ρ) varía ampliamente según su composición y el contenido de humedad. Los valores de la tabla se utilizan como dato de entrada para el dimensionamiento del electrodo.

| Tipo de terreno | Resitividad ρ (Ω·m) | Resistividad ρ (Ω·cm) |
| --- | --- | --- |
| Humus húmedo | 10 – 50 | 1000 – 5000 |
| Tierra de jardín húmeda | 50 – 150 | 5000 – 15000 |
| Arena seca | 200 – 2000 | 20000 – 200000 |
| Arcilla húmeda | 20 – 100 | 2000 – 10000 |
| Grava triturada | 300 – 1000 | 30000 – 100000 |
| Roca sólida | 2000 – 10000 | 200000 – 1000000 |

## Preguntas frecuentes (FAQ)

### ¿Qué estructuras requieren protección contra rayos según NFPA 780?
La normativa NFPA 780 exige la instalación de SPCR en edificios con altura superior a 23 m / 75 ft, en aquellos que almacenen materiales explosivos o inflamables, y en instalaciones críticas como hospitales y centros de datos, siempre que una evaluación de riesgo determine una necesidad real.

### ¿Cuál es la diferencia entre un pararrayos y un sistema de protección contra rayos?
Un pararrayos (terminal aérea) es el dispositivo que captura la descarga inicial, mientras que el sistema de protección contra rayos es el conjunto completo formado por terminales aéreas, conductores de bajada, electrodos de tierra y uniones equipotenciales, diseñado para conducir la corriente de rayo de forma segura hasta el terreno.

### ¿Cada cuánto tiempo debe inspeccionarse el sistema de protección contra rayos?
NFPA 780 recomienda realizar una inspección visual anual y una revisión completa con medición de resistencia de tierra al menos cada 5 años, así como después de cualquier tormenta eléctrica severa o reparación del techo que haya podido alterar los componentes.

### ¿Es posible instalar el sistema sin ayuda de un profesional certificado?
No es recomendable. La correcta instalación exige cálculos de nivel de protección (Clase I, II, III, IV según IEC/NFPA), selección precisa de materiales, soldaduras exotérmicas y comprobación final de la resistencia de tierra, labores que requieren personal capacitado y certificación UL o equivalente.

### ¿Influye la forma del pararrayos en su eficacia?
La forma más común es la varilla puntiaguda (terminación aguda) que facilita la ionización y captura gradual de la carga. Sin embargo, las terminaciones redondeadas o tipo “Franklin” también son aceptables mientras cumplan con las dimensiones y materiales especificados por NFPA 780.

### ¿Se puede reutilizar la estructura metálica del edificio como conductor de bajada?
Sí, siempre que la estructura metálica tenga una conductividad equivalente a la de los conductores de bajada normalizados (como un perfil de acero con espesor mínimo de 4,8 mm / 3/16 in) y se asegure continuidad eléctrica entre todos sus elementos, según las disposiciones de NFPA 780.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/surge-protection-and-lightning-arrester-surge-arrester/
