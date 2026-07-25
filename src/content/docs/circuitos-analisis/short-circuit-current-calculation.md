---
title: "Cálculo de corriente de cortocircuito"
sidebar:
  label: "Cálculo de corriente de cortocircuito"
description: "Ficha tecnica: Cálculo de corriente de cortocircuito"
keywords: ["short circuit current calculation formula", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "short-circuit"
subcategory: "short-circuit-calculation"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La corriente de cortocircuito prospectiva (PSCC, por sus siglas en inglés) es la máxima intensidad que puede circular en un sistema eléctrico cuando se produce un cortocircuito franco. Su valor está determinado por la tensión de la fuente y la impedancia total del circuito de falla, expresándose típicamente como I<sub>cc</sub> = V / Z. En instalaciones domésticas estándar su magnitud ronda los pocos miles de amperios, mientras que en sistemas industriales de gran potencia puede superar los cientos de miles de amperios.

## Fórmula fundamental
> **I<sub>cc</sub> = V / Z**

Donde:
I<sub>cc</sub> = corriente de cortocircuito (A)
V = tensión en el punto de falla (V)
Z = impedancia total del bucle de falla (Ω)

## Variables y unidades

| Variable | Símbolo | Unidad | Descripción |
|----------|---------|--------|-------------|
| Corriente de cortocircuito | I<sub>cc</sub> | A | Amperio |
| Tensión nominal | V | V | Voltios |
| Impedancia del bucle | Z | Ω | Ohmios |

La impedancia Z incluye la resistencia y reactancia de todos los elementos en serie: transformador de alimentación, conductores, conexiones e impedancia de contacto.

## Procedimiento de cálculo

1. Determinar la tensión nominal en el punto de falla (fase‑neutro para fallas monofásicas, o fase‑fase para fallas bifásicas/trifásicas).
2. Calcular la impedancia total del bucle de cortocircuito (fuente + cableado + empalmes) mediante medición o suma de componentes.
3. Aplicar la fórmula I<sub>cc</sub> = V / Z para obtener la corriente simétrica eficaz.
4. Para fallas asimétricas (trifásicas, fase‑tierra, etc.) emplear componentes simétricas y factores de asimetría según la norma aplicable, que elevan el valor pico hasta aproximadamente 2,5 veces el valor de cresta simétrico.

## Ejemplo de cálculo

Un suministro monofásico de 230 V / 50 Hz tiene una impedancia de bucle medida de 0,1 Ω. La corriente de cortocircuito prospectiva es:

I<sub>cc</sub> = 230 V / 0,1 Ω = 2300 A.

El dispositivo de protección en ese punto debe poseer un poder de corte superior a 2,3 kA para interrumpir la falla con seguridad.

## Esfuerzos térmicos y electrodinámicos

Durante el cortocircuito, los conductores y contactos de los interruptores experimentan elevaciones bruscas de temperatura y fuerzas electromagnéticas que condicionan el diseño de las barras y soportes.

### Incremento de temperatura
El calentamiento ocurre en régimen adiabático (sin cesión de calor al entorno) durante los escasos milisegundos que dura la falla. El aumento de temperatura se puede estimar con:

> **ΔT = (I² · R · t) / (m · c)**

| Variable | Significado | Unidad SI | Unidad imperial |
|----------|-------------|-----------|-----------------|
| ΔT | Incremento de temperatura | °C | °F |
| I | Corriente de cortocircuito (valor eficaz) | A | A |
| R | Resistencia del conductor | Ω | Ω |
| t | Duración de la falla | s | s |
| m | Masa del conductor | kg | lb |
| c | Calor específico del material | J/(kg·°C) | BTU/(lb·°F) |

En aluminio, la resistencia mecánica se degrada por encima de 160 °C / 320 °F, por lo que el diseño debe limitar el incremento térmico mediante una sección suficiente y un tiempo de corte ultra‑rápido.

### Fuerza electrodinámica entre conductores

La fuerza que se desarrolla entre dos conductores paralelos que transportan la corriente de cortocircuito se calcula con la fórmula de Ampère adaptada:

> **F = (μ₀ · I² · L) / (2π · S)**  
> (Sistema Internacional: F en N, L y S en m)

Para unidades imperiales (L y S en pulgadas, F en libras‑fuerza):

> **F<sub>lbf</sub> = (2,54×10⁻⁷ · I² · L) / S**

| Variable | Significado | Unidad SI | Unidad imperial |
|----------|-------------|-----------|-----------------|
| I | Corriente de cortocircuito (valor pico asimétrico) | A | A |
| L | Longitud activa de los conductores | m | in |
| S | Distancia entre centros de los conductores | m | in |
| F | Fuerza entre conductores | N | lbf |

Para conductores rectangulares se aplica un factor de corrección K en función de la relación ancho/espesor y de la separación; K es máximo en pletinas muy delgadas y tiende a 1 en secciones circulares.

## Consideraciones de diseño

- La capacidad de ruptura (poder de corte) de interruptores y fusibles debe superar la máxima I<sub>cc</sub> prospectiva en el punto de instalación; de lo contrario, el arco eléctrico no se extinguirá.
- La I<sub>cc</sub> mínima en una base de enchufe debe ser al menos 20 veces la corriente nominal del circuito, para garantizar la rápida actuación de las protecciones y limitar la tensión de contacto durante fallas a tierra.
- En redes industriales, los motores y generadores contribuyen a la corriente de cortocircuito durante los primeros ciclos, por lo que su impedancia subtransitoria debe incluirse en el cálculo.
- Las pletinas y sus soportes deben dimensionarse para resistir la fuerza máxima generada por el pico asimétrico (aproximadamente 2,5 veces la corriente de pico simétrica), considerando además posibles fenómenos de resonancia mecánica.

## Preguntas frecuentes (FAQ)

### ¿Qué es la corriente de cortocircuito prospectiva?
Es la máxima corriente que podría fluir en un punto de la instalación si se produjese un cortocircuito franco. Se obtiene dividiendo la tensión de alimentación entre la impedancia total del bucle de falla.

### ¿Cuál es la fórmula básica para calcular la corriente de cortocircuito?
La fórmula fundamental es I<sub>cc</sub> = V / Z, donde V es la tensión en el punto de falla y Z la impedancia del bucle, que incluye fuente, conductores y conexiones.

### ¿Cómo se mide la impedancia de bucle en campo?
Se emplea un medidor de impedancia de bucle de falla, que inyecta una corriente reducida entre fase y tierra y mide la caída de tensión, calculando Z = V<sub>medida</sub> / I<sub>inyectada</sub>.

### ¿Por qué es indispensable calcular la I<sub>cc</sub> al diseñar una instalación?
Para seleccionar dispositivos de protección con poder de corte suficiente y evitar daños por arco eléctrico, incendio o explosión en caso de falla.

### ¿Qué diferencia hay entre corriente de cortocircuito simétrica y asimétrica?
La simétrica es el valor eficaz de la componente alterna pura, mientras que la asimétrica incluye una componente continua transitoria que eleva el primer pico hasta 2,5 veces el valor de pico simétrico.

### ¿Afecta la temperatura de operación al valor de la I<sub>cc</sub>?
La resistividad de los conductores aumenta con la temperatura, lo que incrementa Z y reduce ligeramente la I<sub>cc</sub>. En cálculos de precisión se parte de la resistividad a la temperatura esperada durante la falla.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/direct-current/chpt-16/voltage-current-calculations/
- **electrical4u.com**: https://www.electrical4u.com/short-circuit-current-of-circuit-breaker/
