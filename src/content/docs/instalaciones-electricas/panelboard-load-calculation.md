---
title: "Cálculo de carga en tableros eléctricos"
sidebar:
  label: "Cálculo de carga en tableros eléctricos"
description: "Ficha tecnica: Cálculo de carga en tableros eléctricos"
keywords: ["panelboard load calculation demand factor", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "panel-loads"
subcategory: "panelboard-load-calculation"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El cálculo de carga en tableros eléctricos consiste en determinar la potencia activa o aparente máxima (carga demandada) que debe alimentar un tablero de distribución. Se obtiene a partir de la suma de las cargas conectadas, aplicándoles factores de demanda normalizados que reflejan la probabilidad de uso simultáneo. El objetivo es elegir una capacidad nominal del tablero, de sus embarrados y de sus dispositivos de protección contra sobrecorriente que sea suficiente y económica, respetando los requisitos de seguridad de la normativa aplicable.

## Fórmula de cálculo
> **S_dem = ( Σ S_conectada_i × F_dem_i ) × F_coinc**

| Variable | Definición | Unidad |
| :--- | :--- | :--- |
| S_dem | Carga demandada total del tablero | kVA |
| S_conectada_i | Potencia aparente conectada de la carga i | kVA |
| F_dem_i | Factor de demanda de la carga i | adimensional (0 a 1) |
| F_coinc | Factor de coincidencia entre cargas (si aplica) | adimensional (0 a 1) |

Cuando todas las cargas no funcionan simultáneamente, se emplea un factor de coincidencia global; de lo contrario, se asume F_coinc = 1. Los factores de demanda dependen del tipo de carga y de la reglamentación local, generalmente tomados de la NEC Artículo 220 o de la IEC 61439-2.

## Factores de demanda según tipo de carga
Los valores típicos provienen de la práctica estadounidense (NEC) y son ampliamente adoptados en Latinoamérica como referencia para instalaciones comerciales e industriales.

### Alumbrado y tomacorrientes generales

| Tipo de carga | Rango de carga conectada | Factor de demanda |
| :--- | :--- | :--- |
| Alumbrado general residencial | Primeros 3000 VA / 3 kVA | 1,00 (100 %) |
| Alumbrado general residencial | De 3001 VA a 120 kVA | 0,35 (35 %) |
| Alumbrado general residencial | Más de 120 kVA | 0,25 (25 %) |
| Alumbrado de locales comerciales | Carga total de alumbrado | 1,00 (100 %) hasta 15 kVA; luego 0,50 (50 %) para el exceso |
| Tomacorrientes de uso general (oficinas) | Hasta 10 kVA | 1,00 (100 %) |
| Tomacorrientes de uso general (oficinas) | Exceso sobre 10 kVA | 0,50 (50 %) |

### Motores eléctricos

| Potencia nominal del motor (kW / HP) | Corriente de placa típica (A) | Factor de demanda aplicable (NEC 430.24) |
| :--- | :--- | :--- |
| 0,37 kW / 0,5 HP | 2,4 A (monofásico 230 V) | 125 % de la corriente a plena carga del motor mayor + 100 % del resto |
| 0,75 kW / 1 HP | 6,9 A (trifásico 208 V) | 125 % de la corriente a plena carga del motor mayor + 100 % del resto |
| 3,73 kW / 5 HP | 16,7 A (trifásico 208 V) | 125 % de la corriente a plena carga del motor mayor + 100 % del resto |
| 18,65 kW / 25 HP | 74,8 A (trifásico 480 V) | 125 % de la corriente a plena carga del motor mayor + 100 % del resto |
| 37,3 kW / 50 HP | 65 A (trifásico 480 V) | 125 % de la corriente a plena carga del motor mayor + 100 % del resto |

### Equipos de cocina y lavandería

| Electrodoméstico | Potencia conectada típica (kVA) | Factor de demanda |
| :--- | :--- | :--- |
| Cocina eléctrica doméstica | 8 – 12 kVA | 0,80 (80 %) para una unidad, 0,65 para dos |
| Secadora de ropa | 5 kVA | 1,00 (100 %) o según placa |
| Lavavajillas comercial | 3 – 6 kVA | 0,90 (90 %) |

## Procedimiento de cálculo
1. **Listar todas las cargas conectadas** al tablero, clasificándolas por tipo (alumbrado, tomacorrientes, motores, equipos especiales).
2. **Asignar la potencia aparente conectada (S_conectada)** de cada carga en kVA, utilizando valores de placa o tablas normalizadas (p. ej., 180 VA por tomacorriente en oficinas).
3. **Aplicar el factor de demanda correspondiente** (F_dem_i) según el tipo de carga y la cantidad acumulada, de acuerdo con la normativa de diseño.
4. **Calcular la carga demandada parcial** sumando los productos S_conectada_i × F_dem_i.
5. **Aplicar el factor de coincidencia** si se alimentan varios sub-tableros o grupos de cargas que no trabajan simultáneamente (típicamente de 0,7 a 0,9 para tableros de distribución).
6. **Verificar que la capacidad nominal del tablero (en A o kVA) sea mayor o igual a la carga demandada calculada**, y que el dispositivo de protección principal no supere la capacidad del tablero (NEC 408.36).
7. **Registrar la carga demandada, la corriente de diseño y la corriente de cortocircuito disponible** en la rotulación del tablero de acuerdo con NEC 408.6.

## Normativa de referencia
- **NEC 408.30** – Capacidad del tablero no menor que la capacidad mínima del alimentador según cálculos de carga del Artículo 220.
- **NEC 408.36** – Protección contra sobrecorriente del tablero: el dispositivo debe tener una capacidad nominal no mayor que la del tablero.
- **NEC Artículo 220** – Métodos de cálculo de carga para circuitos ramales y alimentadores, incluyendo factores de demanda por tipo de ocupación.
- **IEC 61439-1/-2** – Conjuntos de aparamenta de baja tensión, criterios de calentamiento y verificación de la capacidad de corriente asignada.

## Preguntas frecuentes (FAQ)
### ¿Cuál es el factor de demanda para alumbrado general en una vivienda unifamiliar?
   Los primeros 3000 VA se toman al 100 % y el resto hasta 120 kVA al 35 %, según la NEC Tabla 220.42.

### ¿Qué capacidad mínima debe tener un tablero principal residencial típico en sistemas 120/240 V?
   La capacidad nominal del tablero debe ser al menos igual a la carga demandada calculada; en viviendas unifamiliares norteamericanas suele instalarse un tablero de 100 A o 200 A.

### ¿Cuánta carga se asigna a cada tomacorriente de uso general en oficinas?
   Se asigna una carga conectada de 180 VA por cada tomacorriente simple o múltiple, y se puede aplicar un factor de demanda del 100 % hasta 10 kVA y del 50 % para el exceso.

### ¿Cómo se determina la carga de motores en un tablero industrial?
   Se toma el 125 % de la corriente a plena carga del motor de mayor potencia más el 100 % de la corriente del resto de los motores, de acuerdo con NEC 430.24.

### ¿Qué exigen las normas NEC sobre la rotulación de la corriente de falla en el tablero?
   En instalaciones que no sean viviendas uni‑ o bifamiliares se debe marcar en el gabinete la corriente de cortocircuito disponible y la fecha del cálculo, con una etiqueta durable (NEC 408.6).

### ¿Es obligatorio aplicar factor de demanda a las cargas de calefacción y aire acondicionado?
   Solo se aplica factor de demanda si la norma local lo permite; en la NEC, los equipos de climatización fijos se consideran al 100 % de su corriente de placa, sin reducción por demanda.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/fans-efficiency-power-consumption-d_197.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2860
