---
title: "Dimensionamiento de bancos de capacitores"
sidebar:
  label: "Dimensionamiento de bancos de capacitores"
description: "Ficha tecnica: Dimensionamiento de bancos de capacitores"
keywords: ["capacitor bank sizing power factor correction", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "capacitor-banks"
subcategory: "capacitor-bank-sizing"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de bancos de capacitores determina la potencia reactiva necesaria para elevar el factor de potencia de una instalación desde valores típicos de 0,7 a 0,8 hasta el rango económico de 0,90 a 0,95, reduciendo la componente inductiva de la carga sin modificar la potencia activa.

## Importancia
Un factor de potencia de 0,7 en un sistema de 200 A a 400 V (80 kVA / 60 kW) entrega solo 56 kW de potencia real, obligando a sobredimensionar transformadores, cables y protecciones, mientras que la corrección a 0,95 libera capacidad de distribución y evita penalizaciones tarifarias.

## Principio de funcionamiento
El banco de capacitores conectado en paralelo con la carga inductiva suministra potencia reactiva capacitiva que se opone a la potencia reactiva inductiva, compensando el desfase entre tensión y corriente. El fasor de corriente del capacitor (Ic) adelanta 90° respecto a la tensión, reduciendo la corriente reactiva total demandada de la red y disminuyendo el ángulo de fase φ.

| Componente        | Efecto                                                                 |
|-------------------|------------------------------------------------------------------------|
| Carga inductiva   | Absorbe potencia reactiva, corriente atrasada respecto a la tensión    |
| Banco de capacitores | Genera potencia reactiva, corriente adelantada respecto a la tensión |

## Componentes clave
Un banco de capacitores trifásico industrial está compuesto típicamente por:

| Componente               | Función                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| Capacitores unitarios    | Aportan la potencia reactiva capacitiva (kVAR)                          |
| Contactores              | Conmutan los escalones de capacitores                                   |
| Fusibles o interruptores | Protegen contra cortocircuitos y sobrecargas                            |
| Resistencias de descarga | Reducen la tensión residual a menos de 50 V / 50 V en 1 minuto tras la desconexión |
| Regulador de factor de potencia | Controla automáticamente la conexión de escalones en función del cos φ medido |
| Filtros de armónicos (opcional) | Evitan fenómenos de resonancia en redes con distorsión armónica |

## Parámetros de diseño
Los valores de diseño principales para el dimensionamiento son:

| Parámetro                          | Valor típico / Rango          |
|------------------------------------|-------------------------------|
| Tensión nominal del sistema        | 400 V / 480 V, 6,6 kV, etc.   |
| Frecuencia                         | 50 Hz / 60 Hz                 |
| Factor de potencia existente (cos φ1) | 0,5 a 0,85                    |
| Factor de potencia objetivo (cos φ2)  | 0,92 a 0,95                   |
| Potencia activa de la carga (kW)   | 1 – 10 000 kW / 1,34 – 13 400 hp |
| Potencia reactiva requerida (kVAR) | Depende de la diferencia de tangentes |

## Fórmula de dimensionamiento
La potencia reactiva necesaria del banco de capacitores (Qc, en kVAR) se calcula a partir de la potencia activa demandada (P, en kW) y los ángulos de fase antes y después de la compensación:

> **Qc = P × (tan φ1 − tan φ2)**

donde:

| Variable | Significado                                          |
|----------|------------------------------------------------------|
| P        | Potencia activa de la carga (kW / hp, 1 hp = 0,746 kW) |
| cos φ1   | Factor de potencia inicial                           |
| cos φ2   | Factor de potencia final deseado                     |
| tan φ1   | Tangente del ángulo correspondiente a cos φ1         |
| tan φ2   | Tangente del ángulo correspondiente a cos φ2         |

Alternativamente se puede expresar como:

> **Qc = P × f**

donde f es el factor de corrección tabulado que depende de (cos φ1) y (cos φ2).

## Tabla de factores de corrección
Se utiliza un factor multiplicador (f) para determinar directamente Qc = P × f. La tabla siguiente muestra algunos valores típicos; los datos completos se extienden desde cos φ = 0,50 hasta 0,90 y para objetivos desde 0,90 hasta 1,00.

| cos φ1 | f (objetivo cos φ2 = 0,95) | f (objetivo cos φ2 = 0,97) | f (objetivo cos φ2 = 1,00) |
|--------|----------------------------|----------------------------|----------------------------|
| 0,60   | 1,01                       | 1,08                       | 1,33                       |
| 0,65   | 0,80                       | 0,88                       | 1,17                       |
| 0,70   | 0,62                       | 0,70                       | 1,02                       |
| 0,75   | 0,46                       | 0,54                       | 0,88                       |
| 0,80   | 0,31                       | 0,39                       | 0,75                       |
| 0,85   | 0,17                       | 0,25                       | 0,62                       |

## Ejemplo de cálculo
Una planta industrial con motores trifásicos consume 500 kW con un factor de potencia inicial de 0,70 y se desea alcanzar 0,95.

- P = 500 kW
- cos φ1 = 0,70 → tan φ1 = 1,020
- cos φ2 = 0,95 → tan φ2 = 0,329
- Qc = 500 × (1,020 − 0,329) = 500 × 0,691 = 345,5 kVAR

Se selecciona un banco de capacitores de 350 kVAR en escalones automáticos, conectado en el embarrado principal de baja tensión (400 V / 480 V). La corriente del banco se reduce desde 722 A (sin compensación) hasta 532 A (con compensación) para la misma potencia activa, disminuyendo las pérdidas en conductores en aproximadamente un 46 %.

## Buenas prácticas
- Ubicar el banco de capacitores lo más cerca posible de las cargas inductivas para reducir las pérdidas en el cableado.
- Utilizar reguladores automáticos de factor de potencia cuando la carga varíe más del 30 % a lo largo del día.
- Realizar un estudio de armónicos si la distorsión total de tensión (THDv) supera el 3 % o el 5 % según la norma local, para evitar resonancias con el banco.
- Sobredimensionar los contactores y fusibles para soportar corrientes de inserción de hasta 30 veces la nominal durante menos de 10 ms.
- Mantener un factor de potencia objetivo no mayor de 0,95 para evitar sobretensiones permanentes y riesgo de resonancia.

## Errores comunes
- Compensar al valor unitario (cos φ = 1,00), lo que puede provocar sobretensiones excesivas en bornes del motor (hasta un 10 % de la tensión nominal) y penalizaciones por inyección de reactivos a la red.
- No considerar la corriente de descarga del capacitor en estado estable, que puede dañar equipos sensibles si no se instalan resistencias de descarga adecuadas.
- Instalar bancos fijos en instalaciones con carga muy variable, lo que causa subcompensación y sobrecompensación cíclica.
- Omitir la influencia de armónicos: la presencia de 5ª o 7ª armónica puede reducir la impedancia equivalente y generar corrientes de sobrecarga en los capacitores.
- Calcular el banco usando únicamente la potencia total instalada (kVA) sin descontar la carga real, sobredimensionando el equipo y aumentando el costo innecesariamente.

## Frequently Asked Questions (FAQ)
### ¿Cuál es el factor de potencia típico de un motor trifásico de 20 hp a plena carga?
El factor de potencia de un motor de 15–20 kW (20 hp) a plena carga y 1800 rpm es de aproximadamente 0,86, mientras que a media carga cae a 0,74 y en vacío alcanza solo 0,15 a 0,20.

### ¿Qué capacidad de capacitores se requiere para corregir una carga de 1000 A con factor de potencia de 0,70 a 0,95?
Para una carga trifásica de 1000 A a 400 V (aproximadamente 692 kVA y 484 kW de potencia activa con cos φ = 0,70), se necesitan 484 × 0,69 ≈ 334 kVAR. Esto implica instalar un banco de capacitores de unos 350 kVAR, reduciendo la corriente total absorbida de la red en un 26 %.

### ¿Qué límite de factor de potencia suelen penalizar las compañías eléctricas?
Generalmente se aplican penalizaciones cuando el factor de potencia es inferior a 0,90 o 0,95, dependiendo del país, y se mide el promedio mensual; algunas tarifas incluyen cargos adicionales a partir de 0,85.

### ¿Hasta qué valor de potencia reactiva se debe compensar para evitar inestabilidad?
No se recomienda superar un factor de potencia de 0,95 inductivo, porque valores unitarios o capacitivos pueden provocar sobretensiones permanentes de hasta el 10 % y excitar resonancias con armónicos del sistema.

### ¿Cómo afecta la corrección del factor de potencia a la sección transversal del conductor?
Mejorar el factor de potencia de 0,50 a 1,00 reduce la sección necesaria del conductor en un factor 4 (tabla: a PF=0,50 se requiere 4 veces la sección que a PF=1,00). Con una corrección a 0,95 la sección requerida es apenas un 5 % mayor que la teórica para PF unitario.

### ¿Qué porcentaje de la capacidad del transformador se libera al compensar de 0,70 a 0,95?
Un transformador de 1000 kVA que alimenta una carga con PF=0,70 entrega solo 700 kW de potencia activa; al compensar a 0,95, la misma máquina puede entregar 950 kW, liberando un 25 % de capacidad (aproximadamente 250 kW) sin necesidad de inversión en nuevos equipos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/power-factor-correction/
