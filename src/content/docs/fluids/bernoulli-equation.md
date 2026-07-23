---
title: "Ecuación de Bernoulli aplicada"
sidebar:
  label: "Ecuación de Bernoulli aplicada"
description: "Ficha tecnica: Ecuación de Bernoulli aplicada"
keywords: ["Bernoulli equation fluid mechanics applications", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "bernoulli"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## Definición y principio

La ecuación de Bernoulli expresa el principio de conservación de la energía para un flujo estacionario, no viscoso e incompresible. A lo largo de una línea de corriente, la suma de las energías de presión, cinética y potencial por unidad de masa permanece constante: en un conducto horizontal, un aumento de velocidad implica una disminución de presión y viceversa.

El principio de Bernoulli es la base del teorema del mismo nombre, que es una forma especial de la ecuación de Euler derivada a lo largo de una línea de corriente.

## Ecuaciones

A continuación se presentan las formas más utilizadas de la ecuación de Bernoulli, incluyendo los términos de pérdidas energéticas.

**Forma de energía**  
Para un flujo incompresible en estado estacionario:

E = p₁ / ρ + v₁² / 2 + g h₁ = p₂ / ρ + v₂² / 2 + g h₂ – E<sub>loss</sub>

donde:  
- *E*: energía por unidad de masa (J/kg o Btu/slug)  
- *p*: presión del fluido (Pa o psf)  
- *ρ*: densidad del fluido (kg/m³ o slug/ft³)  
- *v*: velocidad del fluido (m/s o ft/s)  
- *g*: aceleración de la gravedad (9.81 m/s² o 32.2 ft/s²)  
- *h*: altura con respecto a un plano de referencia (m o ft)  
- *E<sub>loss</sub>*: pérdida de energía por unidad de masa (J/kg o Btu/slug)  

**Forma de altura (cabeza)**  
Dividiendo la ecuación anterior por *g* se obtienen términos con unidades de longitud:

h = p₁ / γ + v₁² / (2 g) + h₁ = p₂ / γ + v₂² / (2 g) + h₂ – E<sub>loss</sub> / g

donde γ = ρ g es el peso específico del fluido (N/m³ o lbf/ft³). Esta forma recibe el nombre de “cabeza” porque todos los términos tienen dimensiones de columna de fluido.

**Presión dinámica**  
Si se desprecia la variación de altura (flujo horizontal), la ecuación de Bernoulli se simplifica a:

p₁ + ½ ρ v₁² = p₂ + ½ ρ v₂² – p<sub>loss</sub>

El término ½ ρ v² se conoce como **presión dinámica** y relaciona la velocidad con la presión recuperable en un punto de estancamiento. La presión total es la suma de la presión estática y la dinámica.

## Tabla de referencia de presión dinámica

Valores de presión dinámica para agua (ρ = 1000 kg/m³ / 1.940 slug/ft³ a 20 °C) en función de la velocidad. Los cálculos se basan en la expresión p<sub>d</sub> = ½ ρ v².

| Velocidad (m/s) | Velocidad (ft/s) | Presión dinámica (Pa) | Presión dinámica (psi) |
|-----------------|------------------|------------------------|-------------------------|
| 1 m/s           | 3.28 ft/s        | 500 Pa / 0.0725 psi   | 0.50 kPa / 0.073 psi   |
| 2 m/s           | 6.56 ft/s        | 2 000 Pa / 0.290 psi  | 2.0 kPa / 0.29 psi     |
| 5 m/s           | 16.4 ft/s        | 12 500 Pa / 1.81 psi  | 12.5 kPa / 1.81 psi    |
| 10 m/s          | 32.8 ft/s        | 50 000 Pa / 7.25 psi  | 50.0 kPa / 7.25 psi    |
| 15 m/s          | 49.2 ft/s        | 112 500 Pa / 16.3 psi | 112.5 kPa / 16.3 psi   |
| 20 m/s          | 65.6 ft/s        | 200 000 Pa / 29.0 psi | 200 kPa / 29.0 psi     |
| 25 m/s          | 82.0 ft/s        | 312 500 Pa / 45.3 psi | 312.5 kPa / 45.3 psi   |
| 30 m/s          | 98.4 ft/s        | 450 000 Pa / 65.3 psi | 450 kPa / 65.3 psi     |

*Nota: 1 psi = 6894.76 Pa = 144 psf. Las conversiones imperiales utilizan ρ = 1.940 slug/ft³.*

## Aplicaciones típicas

La ecuación de Bernoulli, con sus adaptaciones, permite resolver numerosos problemas prácticos:

- **Descarga desde un depósito abierto (Teorema de Torricelli):** Si el área superficial del depósito es mucho mayor que la del orificio de salida y la presión exterior es igual a la interior (depósito ventilado), la velocidad de salida es v₂ = √(2 g h), donde *h* es la diferencia de altura entre la superficie libre y el centro del orificio. Para un desnivel de 10 m, v₂ = 14.0 m/s.
- **Descarga desde un depósito presurizado:** Cuando la presión del depósito (p₁) es distinta de la presión exterior (p₂), la velocidad de salida se calcula con:  

v₂ = c · √{ (2 / [1 – (A₂/A₁)²]) · [ (p₁ – p₂) / ρ + g h ] }  

donde *c* es el coeficiente de descarga del orificio.
- **Medidores de caudal:** El tubo Venturi y la placa orificio utilizan la caída de presión en una restricción para determinar el caudal, aplicando Bernoulli junto con la ecuación de continuidad.
- **Tubo de Pitot:** Mide la presión total en el punto de estancamiento (v = 0). La diferencia entre presión total y estática da la presión dinámica, de la que se obtiene la velocidad del flujo.
- **Válvulas reductoras de presión:** La pérdida de energía a través de una válvula se puede modelar como E<sub>loss</sub> = (p₁ – p₂) / ρ, despreciando cambios de velocidad y altura.

## Coeficientes de descarga

Para tener en cuenta las pérdidas reales, la velocidad teórica obtenida con la ecuación de Bernoulli se multiplica por un *coeficiente de descarga* (c), determinado experimentalmente.

| Geometría del orificio      | Coeficiente de descarga (c) |
|-----------------------------|-----------------------------|
| Orificio de borde vivo      | 0.60 – 0.64                |
| Orificio de borde redondeado| 0.72 – 0.80                |
| Orificio corto y liso       | 0.80 – 0.85                |
| Boquilla de salida suave    | 0.95 – 1.00                |

## Limitaciones de la ecuación

La forma simple de la ecuación de Bernoulli está sujeta a las siguientes restricciones:

1. Flujo **estacionario** (independiente del tiempo) y **no viscoso** (despreciable efecto de esfuerzos cortantes).
2. Fluido **incompresible**; en gases solo es válida para números de Mach bajos (Ma < 0.3).
3. Debe aplicarse a lo largo de la **misma línea de corriente**; si el flujo es irrotacional, la constante de Bernoulli es la misma para todas las líneas de corriente.
4. No considera pérdidas de carga por fricción, válvulas o cambios bruscos de sección; para incluir esos efectos se añade el término de pérdida ΔE o p<sub>loss</sub>.
5. No es adecuada para flujos con recirculación, turbulencia intensa o intercambios de calor significativos (procesos no adiabáticos).

## Ejemplo de cálculo

**Problema:** Un depósito presurizado contiene agua (ρ = 1000 kg/m³) a una presión manométrica p₁ = 0.2 MPa. La presión exterior es p₂ = 0.1 MPa. El orificio de descarga está 10 m por debajo de la superficie libre. La relación de áreas es A₂/A₁ = 0.01. Suponiendo un coeficiente de descarga c = 1.0 (orificio liso), determinar la velocidad de salida.

**Solución:**  
Aplicamos la ecuación para depósito presurizado:

v₂ = √{ (2 / [1 – (A₂/A₁)²]) · [ (p₁ – p₂) / ρ + g h ] }

Sustituyendo:  
A₂/A₁ = 0.01  → (A₂/A₁)² = 0.0001  → 1 – (A₂/A₁)² ≈ 0.9999  
p₁ – p₂ = 0.2×10⁶ – 0.1×10⁶ = 0.1×10⁶ Pa  
g = 9.81 m/s², h = 10 m  

v₂ = √{ (2 / 0.9999) [ (0.1×10⁶ Pa) / (1000 kg/m³) + (9.81 m/s²)(10 m) ] }  
v₂ = √{ 2.0002 [ 100 + 98.1 ] } ≈ √{ 2.0002 × 198.1 } ≈ √{ 396.2 } ≈ **19.9 m/s**

La velocidad de salida es 19.9 m/s (65.3 ft/s). Si se hubiese despreciado la contribución de la altura (h ≈ 0), la velocidad sería 14.1 m/s, lo que demuestra la importancia de considerar todas las contribuciones energéticas.

## Preguntas frecuentes

**1. ¿Cuál es la velocidad de salida del agua en un tanque abierto con una altura de 10 m respecto al orificio?**  
La velocidad teórica es 14.0 m/s (45.9 ft/s) según el teorema de Torricelli, suponiendo flujo ideal sin pérdidas.

**2. ¿Qué presión dinámica genera un flujo de agua a 5 m/s?**  
Un flujo de agua a 5 m/s (16.4 ft/s) desarrolla una presión dinámica de 12 500 Pa (12.5 kPa / 1.81 psi).

**3. ¿Qué diferencia de presión entre el depósito y el exterior se necesita para obtener 20 m/s de salida sin influencia de la altura?**  
Despejando de v = √(2 Δp / ρ), se requiere Δp = ½ ρ v² = 0.5 × 1000 × 400 = 200 000 Pa = 200 kPa (29.0 psi).

**4. ¿Cuál es el coeficiente de descarga típico para un orificio de borde vivo?**  
El coeficiente de descarga para un orificio de borde vivo varía entre 0.60 y 0.64, por lo que la velocidad real será aproximadamente un 60 % de la velocidad ideal.

**5. ¿En qué unidades se mide la forma de cabeza de la ecuación de Bernoulli?**  
Los términos en la forma de cabeza tienen unidades de longitud (m o ft) y representan la altura de columna del fluido en circulación.

**6. ¿Hasta qué velocidad del aire se puede considerar el flujo como incompresible al aplicar Bernoulli?**  
Para el aire en condiciones normales, la aproximación incompresible es aceptable hasta velocidades de aproximadamente 100 m/s (328 ft/s), lo que corresponde a un número de Mach cercano a 0.3.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bernouilli-equation-d_183.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/bernoulli.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/579/
