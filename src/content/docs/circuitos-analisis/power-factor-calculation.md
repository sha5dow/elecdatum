---
title: "Cálculo del factor de potencia"
sidebar:
  label: "Cálculo del factor de potencia"
description: "Ficha tecnica: Cálculo del factor de potencia"
keywords: ["power factor calculation formula cos phi", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "power-factor"
subcategory: "power-factor-calculation"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

El factor de potencia (PF) es una magnitud adimensional que toma valores entre 0 y 1 y representa la relación entre la potencia activa (P) y la potencia aparente (S). Por ejemplo, un FP de 0,7 indica que solo el 70 % de la energía suministrada se convierte en trabajo útil. Su cálculo es fundamental en sistemas de corriente alterna para evaluar la eficiencia energética y dimensionar correctamente los componentes de la instalación.

## Fórmula general

El factor de potencia se expresa como el cociente entre la potencia activa y la potencia aparente, igual al coseno del ángulo de desfase entre tensión y corriente.

> **PF = P / S = cos φ**

| Símbolo | Nombre | Unidad | Definición |
| --- | --- | --- | --- |
| PF | Factor de potencia | adimensional | Relación entre potencia activa y aparente |
| P | Potencia activa (real) | W (vatios) | Potencia que realiza trabajo útil |
| S | Potencia aparente | VA (voltiamperios) | Producto de la tensión y la corriente eficaces |
| φ | Ángulo de fase | ° (grados) o rad | Desfase entre la onda de tensión y la de corriente |

## Triángulo de potencias

La relación entre las tres potencias se representa mediante un triángulo rectángulo donde la hipotenusa es la potencia aparente (S), el cateto adyacente la potencia activa (P) y el cateto opuesto la potencia reactiva (Q). El ángulo φ puede variar entre 0° y 90°, y su coseno es el factor de potencia.

> **S² = P² + Q²**

| Magnitud | Símbolo | Unidad |
| --- | --- | --- |
| Potencia activa | P | W |
| Potencia reactiva | Q | VAR (voltiamperios reactivos) |
| Potencia aparente | S | VA |

## Factor de potencia en cargas lineales

En una carga puramente resistiva el factor de potencia es 1 y la corriente está en fase con la tensión. En una carga inductiva pura (motor, transformador) el factor de potencia es 0 y la corriente se retrasa 90° respecto a la tensión; en una carga capacitiva pura, la corriente se adelanta 90° y el factor de potencia también es 0. En la práctica, las cargas combinan resistencia e inductancia, dando lugar a factores de potencia intermedios, normalmente con carácter inductivo (atrasado).

## Factor de potencia en motores trifásicos

Para un motor trifásico de 10 hp (7,46 kW) a plena carga, el factor de potencia típico es de 0,86. La expresión que permite calcularlo a partir de las magnitudes de línea es:

> **PF = P / (√3 · U · I)**

donde U es la tensión de línea (V) e I la corriente de línea (A).

| Potencia (hp / kW) | Velocidad (rpm) | Sin carga | 1/4 carga | 1/2 carga | 3/4 carga | Plena carga |
| --- | --- | --- | --- | --- | --- | --- |
| 0 – 5 / 0 – 3,7 | 1800 | 0,15 – 0,20 | 0,5 – 0,6 | 0,72 | 0,82 | 0,84 |
| 5 – 20 / 3,7 – 14,9 | 1800 | 0,15 – 0,20 | 0,5 – 0,6 | 0,74 | 0,84 | 0,86 |
| 20 – 100 / 14,9 – 74,6 | 1800 | 0,15 – 0,20 | 0,5 – 0,6 | 0,79 | 0,86 | 0,89 |
| 100 – 300 / 74,6 – 223,7 | 1800 | 0,15 – 0,20 | 0,5 – 0,6 | 0,81 | 0,88 | 0,91 |

*1 hp = 0,7457 kW*

## Efectos de un bajo factor de potencia

Un factor de potencia inferior a 0,95 suele acarrear penalizaciones en la factura eléctrica y obliga a dimensionar los conductores con una sección hasta un 11 % mayor para un FP de 0,3. Las consecuencias más relevantes son:

- Aumento de la corriente de línea para una misma potencia activa.
- Mayores pérdidas por efecto Joule en cables y transformadores.
- Caídas de tensión más acusadas, que deterioran la regulación.
- Reducción de la capacidad de carga del sistema de distribución.
- Posibles recargos por parte de la compañía eléctrica.

| Industria | Factor de potencia típico sin corregir |
| --- | --- |
| Oficinas | 0,80 – 0,90 |
| Manufactura (máquinas) | 0,60 – 0,65 |
| Metalurgia | 0,65 – 0,70 |
| Química | 0,65 – 0,75 |
| Cemento | 0,75 – 0,80 |
| Textil | 0,35 – 0,60 |
| Bombeo de petróleo | 0,40 – 0,60 |
| Minas de carbón | 0,65 – 0,80 |

## Métodos de corrección del factor de potencia

La instalación de un banco de capacitores de 50 kVAR puede elevar el factor de potencia de 0,7 a 0,95 en una planta industrial típica. Las técnicas principales son:

- **Bancos de capacitores en derivación**: conectados en paralelo a la carga, suministran la potencia reactiva necesaria y reducen la demanda reactiva de la red.
- **Condensadores síncronos**: motores síncronos sobreexcitados que actúan como generadores de potencia reactiva.
- **Compensadores estáticos de VAR (SVC)**: sistemas electrónicos de respuesta rápida para cargas fluctuantes.

## Factores de corrección con capacitores

La tabla siguiente resume los factores de multiplicación para determinar la potencia reactiva de compensación necesaria (en kVAR) por cada kW de carga activa. Por ejemplo, para elevar el factor de potencia desde 0,70 hasta 0,95 se requiere un factor de 0,69 kVAR/kW.

| PF inicial | PF objetivo 0,90 | PF objetivo 0,92 | PF objetivo 0,94 | PF objetivo 0,95 | PF objetivo 0,98 |
| --- | --- | --- | --- | --- | --- |
| 0,50 | 1,25 | 1,30 | 1,37 | 1,40 | 1,53 |
| 0,55 | 1,04 | 1,09 | 1,12 | 1,19 | 1,32 |
| 0,60 | 0,85 | 0,91 | 0,94 | 1,01 | 1,13 |
| 0,65 | 0,71 | 0,77 | 0,80 | 0,87 | 0,97 |
| 0,70 | 0,54 | 0,60 | 0,63 | 0,69 | 0,81 |
| 0,75 | 0,40 | 0,46 | 0,49 | 0,55 | 0,66 |
| 0,80 | 0,27 | 0,32 | 0,36 | 0,42 | 0,52 |
| 0,85 | 0,14 | 0,19 | 0,23 | 0,29 | 0,39 |

## Beneficios de la corrección del factor de potencia

Mediante la corrección del factor de potencia se pueden reducir las pérdidas en líneas hasta en un 20 % y aumentar la capacidad de carga del sistema en un 10 %. Los beneficios concretos incluyen:

- Eliminación de penalizaciones en la factura eléctrica.
- Reducción de la corriente de línea y, por tanto, de las pérdidas por calentamiento.
- Mejora de los niveles de tensión en bornes de los equipos.
- Incremento de la capacidad de transporte de la instalación existente.
- Posibilidad de añadir nuevas cargas sin necesidad de reforzar transformadores o cables.

## Preguntas frecuentes (FAQ)

### ¿Qué es el factor de potencia?
Es la relación entre la potencia activa (W) y la potencia aparente (VA) en un circuito de corriente alterna, expresada como un número adimensional entre 0 y 1, o como el coseno del ángulo de desfase φ.

### ¿Cómo se calcula el factor de potencia en un circuito monofásico?
Se divide la potencia activa medida con un vatímetro entre el producto de la tensión eficaz y la corriente eficaz (PF = P / (V·I)), lo que coincide con el coseno del ángulo de fase si las formas de onda son sinusoidales.

### ¿Por qué es importante mantener un factor de potencia cercano a 1?
Porque un factor de potencia bajo incrementa la corriente necesaria para transmitir la misma potencia útil, eleva las pérdidas, reduce la capacidad del sistema y puede generar recargos económicos por parte de la compañía suministradora.

### ¿Qué diferencia hay entre factor de potencia adelantado y atrasado?
Un factor de potencia atrasado se da en cargas inductivas (motores, transformadores) donde la corriente va retrasada respecto a la tensión. Un factor adelantado aparece en cargas capacitivas (bancos de condensadores), con la corriente adelantada respecto a la tensión.

### ¿Cómo se corrige un factor de potencia bajo en una instalación industrial?
Se instalan bancos de capacitores en paralelo con las cargas inductivas, calculados para suministrar la potencia reactiva necesaria y llevar el factor de potencia al valor deseado, típicamente 0,95.

### ¿Cuál es el valor mínimo de factor de potencia que exigen las empresas eléctricas?
Generalmente se penaliza cuando el factor de potencia es inferior a 0,95 (o 0,90 según la normativa local), por lo que se recomienda mantenerlo en ese umbral o superior.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/alternating-current/chpt-11/calculating-power-factor/
- **electrical4u.com**: https://www.electrical4u.com/electrical-power-factor/
