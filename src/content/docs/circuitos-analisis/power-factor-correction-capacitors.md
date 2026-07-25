---
title: "Corrección de factor de potencia con capacitores"
sidebar:
  label: "Corrección de factor de potencia con capacitores"
description: "Ficha tecnica: Corrección de factor de potencia con capacitores"
keywords: ["power factor correction capacitor sizing calculation", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "power-factor"
subcategory: "power-factor-correction"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La corrección del factor de potencia con capacitores consiste en conectar bancos de capacitores en paralelo con cargas inductivas para compensar la potencia reactiva demandada por motores, transformadores y balastros, reduciendo así el desfase entre tensión y corriente. Un factor de potencia bajo, típicamente inferior a 0,95, incrementa las pérdidas en conductores y transformadores, eleva la corriente de línea y puede acarrear penalizaciones económicas por parte de la compañía eléctrica. El objetivo práctico es llevar el factor de potencia a un valor entre 0,9 y 0,95, rango que equilibra costo de inversión y beneficio técnico‑económico sin pretender alcanzar la unidad, lo cual resultaría excesivamente costoso.

## Principio de la corrección del factor de potencia
En un circuito de corriente alterna con predominio inductivo, la corriente total I L está retrasada un ángulo φ₁ respecto a la tensión V. Al instalar un capacitor en derivación, éste demanda una corriente I C que adelanta 90° a la tensión. La suma fasorial de I L e I C da una corriente resultante I R con un ángulo de fase φ₂ < φ₁, elevando el factor de potencia de cos φ₁ a cos φ₂. La potencia activa P permanece invariable porque el capacitor solo intercambia potencia reactiva. El capacitor entrega potencia reactiva capacitiva Q C que cancela parcialmente la potencia reactiva inductiva Q L, reduciendo la potencia aparente S y la corriente de línea.

## Cálculo de la capacidad del capacitor
La potencia reactiva capacitiva necesaria para pasar de un factor de potencia cos φ₁ a cos φ₂ se obtiene con la fórmula:

> **Q C = P × (tan φ₁ − tan φ₂)**

donde Q C es la potencia reactiva del capacitor en kilovoltamperes reactivos (kVAR), P es la potencia activa de la carga en kilovatios (kW) y φ₁, φ₂ son los ángulos de fase inicial y deseado. La capacidad del capacitor para un sistema monofásico se calcula como:

> **C = Q C / (2π f V²)**

Para un sistema trifásico con capacitores conectados en triángulo (configuración más habitual) la capacidad por fase se determina con:

> **C Δ = Q C / (2π f V L² (3))**

donde C Δ es la capacidad en faradios (F), f es la frecuencia de red en hercios (Hz) —50 Hz o 60 Hz según la región—, V L es la tensión de línea en voltios (V) y Q C la potencia reactiva trifásica total en voltamperes reactivos (VAR). Si los capacitores se conectan en estrella, la capacidad por fase es tres veces mayor: C Y = 3 C Δ.

### Ejemplo numérico
Considérese una instalación industrial con potencia activa de 100 kW (100 000 W) que opera con un factor de potencia inicial de 0,70 y se desea corregir a 0,95. Los ángulos correspondientes son φ₁ = arccos(0,70) ≈ 45,57° y φ₂ = arccos(0,95) ≈ 18,19°. Aplicando la fórmula:

Q C = 100 kW × (tan 45,57° − tan 18,19°) = 100 × (1,02 − 0,33) ≈ 69 kVAR

Para una red trifásica de 400 V / 277 V, 50 Hz, los capacitores en triángulo requieren:

C Δ = 69 000 VAR / (2π × 50 Hz × (400 V)² × 3) ≈ 69 000 / (314,16 × 160 000 × 3) ≈ 0,000 457 F = 457 μF por fase.

El resultado en unidades imperiales (480 V, 60 Hz) se obtiene de manera análoga: para 100 kW de carga, 480 V línea‑línea, la capacidad por fase en triángulo sería aproximadamente 317 μF.

## Tabla de factores de corrección
El factor de corrección presentado en la tabla siguiente es el multiplicador que, aplicado a la potencia activa en kW, entrega los kVAR del capacitor necesarios para elevar el factor de potencia desde el valor inicial (columna izquierda) hasta el valor deseado (fila superior). Los valores son adimensionales y válidos para cualquier frecuencia de red.

| Factor de potencia inicial | Factor de potencia deseado → 1,00 | 0,99 | 0,98 | 0,97 | 0,96 | 0,95 | 0,94 | 0,93 | 0,92 | 0,91 | 0,90 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0,50 | 1,73 | 1,59 | 1,53 | 1,48 | 1,44 | 1,40 | 1,37 | 1,34 | 1,30 | 1,28 | 1,25 |
| 0,55 | 1,52 | 1,38 | 1,32 | 1,28 | 1,23 | 1,19 | 1,16 | 1,12 | 1,09 | 1,06 | 1,04 |
| 0,60 | 1,33 | 1,19 | 1,13 | 1,08 | 1,04 | 1,01 | 0,97 | 0,94 | 0,91 | 0,88 | 0,85 |
| 0,65 | 1,17 | 1,03 | — | — | — | — | — | — | — | — | — |

Nota: Los valores no mostrados (—) corresponden a combinaciones cuyos factores de corrección se derivan directamente de la expresión Q C = P (tan φ₁ − tan φ₂) y pueden calcularse con la misma. La tabla se limita a los datos verificados en las fuentes disponibles.

## Configuración de bancos de capacitores
Los bancos de capacitores para corrección del factor de potencia en sistemas trifásicos se conectan preferentemente en triángulo porque cada capacitor queda sometido a la tensión compuesta (línea‑línea), requiriendo una capacidad tres veces menor que en conexión estrella para la misma potencia reactiva total. Esta configuración aprovecha además el hecho de que muchos capacitores monofásicos están diseñados para la tensión de línea. La conexión en estrella se emplea ocasionalmente cuando se necesita limitar la tensión aplicada a cada unidad, conectando el neutro a tierra, o cuando se corrigen cargas monofásicas desequilibradas fase‑neutro. En instalaciones con variaciones de carga se instalan reguladores automáticos que conectan y desconectan escalones de capacitores para mantener el factor de potencia dentro de la banda deseada, evitando sobretensiones en periodos de baja carga.

La localización de los capacitores puede ser:
- **Corrección individual**: cada motor o carga inductiva importante recibe su propio capacitor, conectado directamente en bornes. Reduce las corrientes reactivas en todos los conductores aguas arriba.
- **Corrección por grupos**: un banco común para un conjunto de cargas, ubicado en el centro de control de motores.
- **Corrección centralizada**: un único banco en el punto de acometida, que compensa el factor de potencia global de la instalación.

## Beneficios de la corrección del factor de potencia
La corrección del factor de potencia con capacitores aporta varios beneficios operativos y económicos. En primer lugar, reduce la factura eléctrica al eliminar o minimizar los recargos que las compañías aplican cuando el factor de potencia es inferior a 0,95. En segundo lugar, aumenta la capacidad disponible del sistema: al disminuir la corriente de línea, se libera capacidad en transformadores, cables e interruptores, permitiendo añadir nuevas cargas sin sobredimensionar la infraestructura. En tercer lugar, se reducen las pérdidas por efecto Joule en los conductores, ya que las pérdidas son proporcionales al cuadrado de la corriente. Finalmente, la caída de tensión en los alimentadores disminuye, mejorando la regulación de voltaje en los puntos de consumo y prolongando la vida útil de los equipos conectados.

## Factores de potencia típicos en la industria
A modo de referencia, se presentan dos tablas con factores de potencia representativos. La primera muestra la variación del factor de potencia de motores trifásicos normalizados en función de la carga. La segunda recoge valores típicos sin corregir en diferentes sectores industriales.

### Motores eléctricos trifásicos – Factor de potencia típico según carga
| Potencia (hp / kW) | Velocidad (rpm) | Vacío | 1/4 carga | 1/2 carga | 3/4 carga | Plena carga |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 – 5 / 0 – 3,7 | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,72 | 0,82 | 0,84 |
| 5 – 20 / 3,7 – 14,9 | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,74 | 0,84 | 0,86 |
| 20 – 100 / 14,9 – 74,6 | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,79 | 0,86 | 0,89 |
| 100 – 300 / 74,6 – 223,7 | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,81 | 0,88 | 0,91 |

### Factor de potencia sin corregir por sector industrial
| Sector | Factor de potencia típico |
| :--- | :--- |
| Minería del carbón | 65 – 80 |
| Cemento | 75 – 80 |
| Química | 65 – 75 |
| Electroquímica | 65 – 75 |
| Fundición | 75 – 80 |
| Forja | 70 – 80 |
| Hospitales | 75 – 80 |
| Manufactura (maquinaria) | 60 – 65 |
| Pinturas | 65 – 70 |
| Metalurgia | 65 – 70 |
| Oficinas | 80 – 90 |
| Bombeo de petróleo | 40 – 60 |
| Plásticos | 75 – 80 |
| Estampado | 60 – 70 |
| Acerías | 65 – 80 |
| Textil | 35 – 60 |
| Cervecería | 75 – 80 |

## Preguntas frecuentes (FAQ)
### ¿Por qué no se corrige el factor de potencia hasta la unidad?
Alcanzar un factor de potencia unitario (1,00) exige anular completamente la potencia reactiva inductiva, lo que requiere capacitores de mayor tamaño, incrementa el riesgo de sobretensión en condiciones de poca carga y eleva el costo de la instalación sin un retorno económico proporcional. Los valores entre 0,90 y 0,95 eliminan las penalizaciones y optimizan la relación costo‑beneficio.

### ¿Cómo se calcula la potencia reactiva necesaria para un motor trifásico?
Se mide o se toma de placa la potencia activa en kW y el factor de potencia actual cos φ₁. Con el factor de potencia deseado cos φ₂ se aplica Q C = P (tan φ₁ − tan φ₂). El resultado, en kVAR, se divide entre la tensión de línea y la frecuencia para dimensionar el banco de capacitores.

### ¿Qué diferencia hay entre corrección fija y automática?
La corrección fija mantiene permanentemente conectado un valor constante de capacitancia, adecuado para cargas estables. La corrección automática incorpora un regulador que conecta o desconecta escalones de capacitores según la demanda reactiva instantánea, idónea para instalaciones con variaciones frecuentes de carga.

### ¿Puede la corrección con capacitores generar sobretensiones?
Sí, especialmente si el banco de capacitores no se desconecta cuando la carga inductiva disminuye significativamente. La potencia reactiva capacitiva en exceso puede elevar la tensión en bornes, afectando equipos sensibles. Por ello se recomienda instalar reguladores automáticos o desconectar manualmente los capacitores fuera de servicio.

### ¿Es adecuado conectar el capacitor directamente en bornes del motor?
Sí, la corrección individual es una práctica habitual que evita que la corriente reactiva circule por los alimentadores. Debe dimensionarse el capacitor para que en vacío no se produzca autoexcitación del motor, limitando la potencia reactiva capacitiva al 90 % de la corriente de magnetización del motor.

### ¿Influye la frecuencia de red en el dimensionamiento del capacitor?
La capacidad calculada es inversamente proporcional a la frecuencia. Un mismo capacitor produce menos potencia reactiva a 50 Hz que a 60 Hz. Por tanto, las tablas de selección deben corresponder a la frecuencia nominal de la instalación, o bien corregir el valor de capacidad mediante la relación de frecuencias.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-11/practical-power-factor-correction/
- **electrical4u.com**: https://www.electrical4u.com/power-factor-correction/
