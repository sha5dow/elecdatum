---
title: "Requisitos eléctricos para albercas y spas"
sidebar:
  label: "Requisitos eléctricos para albercas y spas"
description: "Ficha tecnica: Requisitos eléctricos para albercas y spas"
keywords: ["pool spa electrical code requirements NEC 680", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "residential-code"
subcategory: "pool-spa-electrical-code"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El Artículo 680 del Código Eléctrico Nacional (NEC) o NFPA 70, establece una distancia de seguridad horizontal de al menos 1,5 m / 5 ft desde el borde interior de la alberca hasta cualquier equipo eléctrico o cableado expuesto, medida que busca prevenir contactos accidentales y garantizar una zona de protección alrededor del vaso.

Los requisitos eléctricos para albercas y spas agrupan todas las prescripciones normativas contenidas principalmente en el Artículo 680 del NEC/NFPA 70 y normas complementarias, cuyo objetivo es proteger a las personas contra descargas eléctricas, incendios y explosiones en instalaciones que combinan agua y electricidad. Estas disposiciones cubren el diseño, la selección de materiales, la instalación y el mantenimiento de circuitos de bombas, iluminación subacuática, sistemas de calefacción, tableros de control y la puesta a tierra de todos los elementos metálicos en contacto con el agua. Por su naturaleza de ambiente mojado y la presencia de substancias químicas como el cloro, estas áreas se consideran de riesgo elevado y exigen dispositivos de protección diferencial, unión equipotencial y distancias de separación rigurosas.

## Clasificación de áreas

Aunque una alberca o spa no se clasifica típicamente como un “lugar peligroso” en el sentido de atmósferas explosivas, la proximidad de equipos eléctricos a vapores de productos de tratamiento (cloro, ácido muriático) puede requerir, en ciertos cuartos de máquinas o almacenes de químicos, una clasificación Clase I División 2 según el Artículo 500 del NEC.

| Clase | Naturaleza del material peligroso | Aplicación frecuente en instalaciones de alberca |
| --- | --- | --- |
| Clase I | Gases o vapores inflamables | Cuartos de almacenamiento de cloro gas; áreas con generadores de desinfectante |
| Clase II | Polvos combustibles o conductivos | Áreas de manejo de polvos químicos para tratamiento de agua |
| Clase III | Fibras o pelusas inflamables | No típico en albercas, salvo zonas de mantenimiento textil adyacentes |

| División | Probabilidad de presencia del material | Interpretación para el entorno de alberca |
| --- | --- | --- |
| División 1 | Alta probabilidad (presencia continua, intermitente o periódica) | Interior de recipientes o tuberías de cloro gas; nunca en el espacio general del cuarto si la ventilación es adecuada |
| División 2 | Baja probabilidad, solo en condiciones anormales (fuga o falla) | Zonas alrededor de bombonas de cloro o tanques de almacenamiento, hasta una distancia radial de 1 m / 3.28 ft |

| Grupo | Material típico | Valor MESG / MIC relevante |
| --- | --- | --- |
| Grupo A | Acetileno | – |
| Grupo B | Hidrógeno, butadieno, óxido de etileno | MESG ≤ 0.45 mm / 0.018 in; MIC ≤ 0.40 |
| Grupo C | Éter, etileno, ciclopropano | MESG > 0.45 mm / 0.018 in a ≤ 0.75 mm / 0.030 in; MIC > 0.40 a < 0.80 |
| Grupo D | Gasolina, gas natural, propano, amoníaco, metano, vapores de alcoholes y cetonas | MESG > 0.75 mm / 0.030 in; MIC > 0.80 |

## Requisitos de puesta a tierra y unión equipotencial

Todas las superficies metálicas conductoras situadas a menos de 1,5 m / 5 ft del borde interior de la alberca deben conectarse a una rejilla equipotencial de cobre desnudo de calibre mínimo 8 AWG (8,37 mm² / 0.013 in²).

Para spas y tinas de hidromasaje, el perímetro de unión se extiende horizontalmente 1,5 m / 5 ft desde la pared interior; todos los elementos metálicos estructurales, soportes de lámparas, escaleras, pasamanos, motores de bombas, calefactores eléctricos y tuberías metálicas de agua deben unirse al conductor de puesta a tierra del sistema mediante conectores irreversibles y, en su caso, conectores de compresión adecuados para ambiente húmedo.

La resistencia total de la unión equipotencial, medida entre cualquier componente metálico expuesto y el conductor de unión, debe ser menor a 1 Ω para garantizar una trayectoria de baja impedancia durante una falla.

## Protección contra sobrecorriente y dimensionamiento de conductores

El dimensionamiento de los conductores y la selección de la protección de sobrecorriente para motores de bombeo y equipos eléctricos de albercas y spas se basa en los valores de MCA (Minimum Circuit Ampacity) y MOCP (Maximum Over-Current Protection), generalmente indicados en la placa de datos del equipo.

> **MOCP = (2.25 × FLA del motor más grande) + (otras cargas de motores) + (cargas resistivas)**

| Parámetro | Símbolo | Definición simplificada | Ecuación típica |
| --- | --- | --- | --- |
| Corriente de plena carga | FLA | Corriente que demanda el motor a carga nominal | – |
| Amperaje mínimo del circuito | MCA | 125 % de la FLA más las cargas resistivas | MCA = 1.25 × (FLA del motor + corriente de calefactor) |
| Protección máxima contra sobrecorriente | MOCP | Límite superior del fusible o interruptor termomagnético | MOCP = 2.25 × FLA del motor mayor + otras cargas |
| Corriente de rotor bloqueado | LRA | Corriente transitoria en el arranque, ~8 veces la FLA | LRA ≈ 8 × FLA |

| Unidad o equipo típico | FLA estimada (230 V / 460 V) | MCA mínimo (230 V / 460 V) | MOCP máximo (230 V / 460 V) |
| --- | --- | --- | --- |
| Bomba monofásica 2 HP | 12 A / 6 A | 15 A / 7.5 A | 25 A / 15 A |
| Bomba trifásica 5 HP | 15 A / 7.6 A | 18.8 A / 9.5 A | 35 A / 15 A |
| Calentador eléctrico 5.5 kW | 24 A / 12 A | 30 A / 15 A | 40 A / 20 A |
| Bomba de circulación spa 1.5 HP | 10 A / 5 A | 12.5 A / 6.3 A | 20 A / 10 A |

El valor de MOCP nunca debe ser menor que el MCA. Si el cálculo arroja un valor inferior a 15 A, se redondea a 15 A. Si el valor calculado no es un múltiplo de 5, se redondea hacia abajo al tamaño de interruptor estándar inmediato inferior, excepto cuando ello contradiga la regla MOCP ≥ MCA.

## Distancias de seguridad y ubicación de equipos

Las distancias mínimas de seguridad para la instalación de equipos eléctricos en el perímetro de albercas y spas se resumen en la siguiente tabla:

| Elemento | Distancia horizontal desde el borde interior | Altura mínima sobre el nivel del agua (donde aplique) |
| --- | --- | --- |
| Receptáculos de propósito general | ≥ 1.83 m / 6 ft | – |
| Interruptores de control de equipos | ≥ 1.5 m / 5 ft | – |
| Luminarias colgantes | ≥ 1.5 m / 5 ft | ≥ 3.7 m / 12 ft |
| Subtableros y centros de carga | ≥ 1.5 m / 5 ft | – |
| Motores de bombas y ventiladores | ≥ 1.5 m / 5 ft | – |
| Transformadores de iluminación subacuática | ≥ 1.5 m / 5 ft | – |

## Dispositivos de protección contra falla a tierra

Todos los circuitos que alimentan cargas en albercas y spas deben estar protegidos por interruptores de circuito por falla a tierra (GFCI) con una corriente de disparo nominal de 5 mA ± 1 mA (0.005 A). Los tiempos de desconexión exigidos son de 25 ms o menos para garantizar la protección de las personas frente a electrocución. La altura de instalación de los GFCI no debe exceder 1.8 m / 6 ft sobre el nivel del piso, y deben ser de tipo intemperie (NEMA 3R o superior) si se instalan a la intemperie.

## Requisitos para iluminación subacuática

Las luminarias sumergibles deben operar a una tensión máxima de 12 V CA en albercas de concreto y de 30 V CA en spa con carcasa plástica, con transformadores aislados galvánicamente y ubicados a no menos de 1.5 m / 5 ft del borde interior del vaso. La profundidad mínima de instalación para luminarias de nicho de bajo voltaje es de 450 mm / 18 in por debajo de la superficie normal del agua. Todas las conexiones deben realizarse mediante cajas de unión de bronce o polímero resistente a la corrosión, selladas herméticamente con empaques de neopreno y probadas a una presión de 35 kPa / 5 psi.

## Cableado y canalizaciones permitidas

En las áreas húmedas y mojadas de una alberca se exige el uso de conductores de cobre con aislamiento THW-2, THWN-2 o XHHW-2, con capacidad de operación a 90 °C / 194 °F en condiciones de humedad, instalados dentro de tubería de PVC cédula 40 o 80, o en su defecto, tubería metálica intermedia galvanizada en caliente (IMC) o tubería metálica rígida (RMC) con tratamiento anticorrosivo exterior. La profundidad de enterramiento para cualquier ducto bajo el área del deck o jardines adyacentes a la alberca será de al menos 450 mm / 18 in para circuitos de baja tensión y 600 mm / 24 in para circuitos de media tensión.

## Preguntas frecuentes (FAQ)

### ¿A qué distancia mínima horizontal debe colgar una luminaria sobre el agua de una alberca?
La altura mínima de montaje para una luminaria colgante sobre el espejo de agua de una alberca es de 3.7 m / 12 ft, medida desde la superficie del agua hasta el accesorio.

### ¿Qué calibre mínimo debe tener el conductor de la malla equipotencial alrededor de la piscina?
El conductor de cobre desnudo de la malla equipotencial perimetral debe ser al menos de 8 AWG, equivalente a un diámetro de 3.26 mm / 0.128 in.

### ¿A qué profundidad se entierra el ducto eléctrico bajo el deck de la piscina?
Los ductos eléctricos bajo el deck deben enterrarse a una profundidad mínima de 450 mm / 18 in para circuitos de baja tensión y de 600 mm / 24 in para circuitos de media tensión.

### ¿Cuál es la corriente de fuga máxima permitida para el disparo de un GFCI en albercas?
El interruptor GFCI para albercas debe abrir el circuito con una corriente de fuga no mayor a 6 mA, siendo el umbral nominal estándar de disparo de 5 mA / 0.005 A.

### ¿Cuál es la separación mínima horizontal entre un contacto de uso general y el borde interior de la alberca?
La distancia horizontal medida desde el borde interior de la alberca hasta cualquier receptáculo de uso general debe ser de al menos 1.83 m / 6 ft.

### ¿Qué tensión máxima se permite en luminarias subacuáticas de nicho en albercas de concreto?
Las luminarias subacuáticas en albercas de concreto deben operar a una tensión máxima de 12 V CA, lo que equivale a una diferencia de potencial que cualquier instalador puede verificar en campo con un voltímetro de baja escala.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
