---
title: "Masas y momentos de inercia"
sidebar:
  label: "Masas y momentos de inercia"
description: "Ficha tecnica: Masas y momentos de inercia"
keywords: ["mass moment of inertia cylinder sphere", "mechanics"]
category: "mechanics"
topic: "dynamics"
subcategory: "mass-moments"
skill: "mechanics-reference-table"
launch_phase: 8
last_updated: "2026-07-23"
verified: true
---

El momento de inercia de masa, denotado por I, mide la resistencia que opone un cuerpo a la aceleración rotacional alrededor de un eje determinado. Es el análogo rotacional de la masa en el movimiento lineal. Sus unidades son masa × longitud² (kg·m² en el SI, lb·ft² o slug·ft² en el sistema inglés). No debe confundirse con el segundo momento de área, que tiene unidades de longitud⁴ y se emplea en cálculos de flexión de vigas.

## Fórmula general

Para un sistema de partículas puntuales, el momento de inercia total respecto a un eje es la suma de los productos de cada masa por el cuadrado de su distancia al eje:

I = Σ mᵢ rᵢ²

Donde:
- mᵢ = masa de la partícula i (kg, lbm)
- rᵢ = distancia perpendicular de la partícula i al eje de rotación (m, ft)

Para cuerpos continuos con distribución de masa simétrica y densidad constante, la expresión se convierte en una integral de volumen, obteniéndose fórmulas cerradas que se presentan en la tabla siguiente.

## Tabla de momentos de inercia para formas comunes

| Forma geométrica | Eje de rotación | Momento de inercia (I) | Notas |
|---|---|---|---|
| Masa puntual M a distancia R del eje | Perpendicular a la línea que une masa y eje | I = M R² | Caso fundamental; todas las demás formas derivan de este principio |
| Barra delgada de longitud L y masa M | Perpendicular a la barra, pasando por el centro | I_centro = (1/12) M L² | Barra infinitamente delgada y rígida |
| Barra delgada de longitud L y masa M | Perpendicular a la barra, pasando por un extremo | I_extremo = (1/3) M L² | Caso especial de la barra anterior aplicando el teorema de ejes paralelos |
| Aro circular delgado de radio R y masa M | Perpendicular al plano del aro, pasando por el centro | I_z = M R² | Toda la masa concentrada a la misma distancia R del eje |
| Aro circular delgado de radio R y masa M | Cualquier diámetro contenido en el plano del aro | I_x = I_y = (1/2) M R² | Consecuencia del teorema de ejes perpendiculares |
| Disco sólido delgado de radio R y masa M | Perpendicular al plano del disco, pasando por el centro | I_z = (1/2) M R² | Caso especial del cilindro sólido con altura h = 0 |
| Disco sólido delgado de radio R y masa M | Cualquier diámetro contenido en el plano del disco | I_x = I_y = (1/4) M R² | Se cumple I_x = I_y = I_z / 2 |
| Anillo uniforme (disco con agujero concéntrico) de masa M, radio interior R₁ y radio exterior R₂ | Perpendicular al plano, pasando por el centro | I_z = (1/2) M (R₁² + R₂²) | Se reduce al disco sólido cuando R₁ = 0 y al aro delgado cuando R₁ ≈ R₂ |
| Cilindro hueco de pared delgada de radio R y masa M | Eje longitudinal del cilindro | I = M R² | Toda la masa se considera a la misma distancia R del eje |
| Cilindro hueco (eje) de masa M, radio interior Rᵢ y radio exterior Rₒ | Eje longitudinal del cilindro | I = (1/2) M (Rᵢ² + Rₒ²) | Fórmula general para secciones tubulares; coincide con el anillo cuando la altura es despreciable |
| Cilindro sólido de radio R y masa M | Eje longitudinal del cilindro | I = (1/2) M R² | Caso particular del cilindro hueco con Rᵢ = 0 |
| Esfera hueca de pared delgada de radio R y masa M | Cualquier diámetro que pase por el centro | I = (2/3) M R² | La masa se distribuye uniformemente sobre la superficie esférica |
| Esfera sólida de radio R y masa M | Cualquier diámetro que pase por el centro | I = (2/5) M R² | Fórmula fundamental para cuerpos esféricos macizos |
| Placa rectangular de masa M, lados a y b | Perpendicular al plano de la placa, pasando por el centro de masa | I_z = M (a² + b²) / 12 | El eje es perpendicular a la placa; para ejes contenidos en el plano se requieren otras expresiones |
| Placa rectangular de masa M, lado a perpendicular al eje | Eje contenido en el plano de la placa, coincidente con un borde de longitud a | I = (1/3) M a² | La dimensión paralela al eje no contribuye al momento de inercia |

Las dimensiones lineales se expresan en metros (m) o pies (ft) y las masas en kilogramos (kg) o libras masa (lbm), según el sistema de unidades elegido. El resultado I se obtiene en kg·m² o lb·ft² respectivamente.

## Teorema de ejes paralelos

Si se conoce el momento de inercia I_CM de un cuerpo respecto a un eje que pasa por su centro de masa, el momento de inercia I respecto a cualquier otro eje paralelo separado una distancia d se calcula como:

I = I_CM + M d²

Donde:
- M = masa total del cuerpo (kg, lbm)
- d = distancia perpendicular entre los dos ejes paralelos (m, ft)

Este teorema permite calcular rápidamente momentos de inercia para ejes desplazados del centro de masa sin necesidad de reintegrar. Por ejemplo, una barra delgada de longitud L tiene I_CM = (1/12) M L² respecto a su centro; si se desea el momento respecto a un extremo, con d = L/2, se obtiene I = (1/12) M L² + M (L/2)² = (1/3) M L², coincidiendo con el valor tabulado.

## Teorema de ejes perpendiculares

Para una placa plana de distribución de masa arbitraria contenida en el plano xy, los momentos de inercia respecto a tres ejes mutuamente perpendiculares que se intersectan en un punto O, con los ejes x e y en el plano de la placa y el eje z perpendicular a ella, satisfacen:

I_z = I_x + I_y

Este teorema solo es válido para objetos estrictamente planos (espesor despreciable) y no se aplica a cuerpos tridimensionales generales. Permite deducir el momento de inercia respecto al eje perpendicular al plano si se conocen los momentos respecto a dos diámetros perpendiculares contenidos en él. Por ejemplo, para un disco delgado, I_x = I_y = (1/4) M R², con lo que I_z = (1/2) M R².

## Radio de giro

El radio de giro k se define como la distancia a la cual habría que concentrar toda la masa del cuerpo para obtener el mismo momento de inercia:

k = √(I / M)

Donde:
- I = momento de inercia respecto al eje considerado (kg·m², lb·ft²)
- M = masa total (kg, lbm)
- k = radio de giro (m, ft)

Los radios de giro para las formas más comunes se resumen en la siguiente tabla:

| Forma geométrica | Eje de rotación | Radio de giro (k) |
|---|---|---|
| Barra delgada de longitud L | Perpendicular por el centro | k = L / √12 ≈ 0,2887 L |
| Barra delgada de longitud L | Perpendicular por un extremo | k = L / √3 ≈ 0,5774 L |
| Aro circular delgado de radio R | Perpendicular por el centro (eje z) | k = R |
| Disco sólido de radio R | Perpendicular por el centro (eje z) | k = R / √2 ≈ 0,7071 R |
| Cilindro sólido de radio R | Eje longitudinal | k = R / √2 ≈ 0,7071 R |
| Cilindro hueco de radios Rᵢ y Rₒ | Eje longitudinal | k = √[(Rᵢ² + Rₒ²) / 2] |
| Esfera hueca delgada de radio R | Cualquier diámetro | k = R √(2/3) ≈ 0,8165 R |
| Esfera sólida de radio R | Cualquier diámetro | k = R √(2/5) ≈ 0,6325 R |
| Placa rectangular de lados a, b | Perpendicular por el centro | k = √[(a² + b²) / 12] |

Las longitudes de k se expresan en las mismas unidades que las dimensiones características (R, L, a, b), típicamente metros (m) o pies (ft).

## Ejemplo de aplicación práctica

Un volante de inercia de una prensa mecánica se fabrica como un cilindro sólido de acero con masa M = 150 kg / 330,7 lbm y radio R = 0,4 m / 1,31 ft. Se requiere calcular el momento de inercia respecto a su eje longitudinal y el torque necesario para acelerarlo desde el reposo hasta una velocidad angular de 300 rpm en 5 segundos.

**Paso 1: Cálculo del momento de inercia**

Para un cilindro sólido respecto a su eje longitudinal:

I = (1/2) M R² = (1/2) × 150 kg × (0,4 m)² = 0,5 × 150 × 0,16 = 12 kg·m²

En unidades imperiales: I = (1/2) × 330,7 lbm × (1,31 ft)² ≈ 283,8 lb·ft²

**Paso 2: Cálculo de la aceleración angular requerida**

Velocidad angular final: ω = 300 rpm = 300 × 2π / 60 = 31,42 rad/s

Aceleración angular: α = Δω / Δt = 31,42 rad/s / 5 s = 6,28 rad/s²

**Paso 3: Torque necesario (segunda ley de Newton para rotación)**

τ = I × α = 12 kg·m² × 6,28 rad/s² = 75,4 N·m

En unidades imperiales: τ ≈ 283,8 lb·ft² × 6,28 rad/s² ≈ 55,6 lb·ft

El motor debe suministrar un torque neto de 75,4 N·m para lograr la aceleración deseada. Si además existen pérdidas por fricción en los cojinetes estimadas en 5 N·m, el torque total requerido sería de 80,4 N·m / 59,3 lb·ft. La selección del motor deberá considerar este valor más un factor de servicio adecuado a la aplicación.

## Preguntas frecuentes (FAQ)

**¿Cuál es la diferencia entre momento de inercia de masa y segundo momento de área?**

El momento de inercia de masa mide la resistencia a la aceleración rotacional y depende de la masa del cuerpo, con unidades de masa × longitud² (kg·m² o lb·ft²). El segundo momento de área es una propiedad puramente geométrica de la sección transversal de una viga, con unidades de longitud⁴ (mm⁴ o in⁴), y se usa en cálculos de flexión y deflexión. Por ejemplo, un cilindro de acero de 50 kg y 2 m de longitud puede tener un momento de inercia de masa de 1,2 kg·m² / 0,88 lb·ft² respecto a su eje longitudinal, mientras que el segundo momento de área de su sección circular de 100 mm / 3,94 in de diámetro es de aproximadamente 4,91 × 10⁶ mm⁴ / 11,8 in⁴. No se deben confundir ni intercambiar en los cálculos.

**¿Cómo se aplica el teorema de ejes paralelos en un caso real?**

Si se conoce el momento de inercia de un motor eléctrico respecto a su centro de masa, valor típico de 0,05 kg·m² / 0,037 lb·ft² para un motor pequeño de 10 kg / 22 lb, y se monta sobre una bancada a 0,3 m / 11,8 in del eje de pivote, el momento de inercia total respecto al pivote será I = 0,05 + 10 × (0,3)² = 0,05 + 0,9 = 0,95 kg·m² / 0,70 lb·ft². El término M d² suele dominar cuando la distancia es grande comparada con las dimensiones del cuerpo, como en este caso donde el desplazamiento de 300 mm / 11,8 in contribuye 0,9 kg·m² frente a los 0,05 kg·m² originales.

**¿Qué forma geométrica proporciona el mayor momento de inercia para una masa y radio dados?**

Para una masa M y un radio exterior R fijos, el aro delgado (o cilindro hueco de pared delgada) proporciona el mayor momento de inercia posible: I = M R². En el otro extremo, la esfera sólida concentra más masa cerca del eje y presenta el valor más bajo entre las formas comunes: I = (2/5) M R² = 0,4 M R². La relación entre ambos es de 2,5 veces. Para un volante de inercia de automóvil con masa 8 kg / 17,6 lb y radio 0,15 m / 5,9 in, los valores serían 0,18 kg·m² / 0,13 lb·ft² para un aro y 0,072 kg·m² / 0,053 lb·ft² para una esfera sólida del mismo radio exterior.

**¿Cómo influye la distribución de la masa en el radio de giro de un cilindro hueco?**

El radio de giro de un cilindro hueco con radios Rᵢ y Rₒ es k = √[(Rᵢ² + Rₒ²) / 2]. Para un cilindro sólido (Rᵢ = 0), k = Rₒ / √2 ≈ 0,707 Rₒ. Para un tubo de pared delgada (Rᵢ ≈ Rₒ), k ≈ Rₒ. Por ejemplo, un tubo de acero con Rₒ = 50 mm / 1,97 in y Rᵢ = 40 mm / 1,57 in tiene k = √[(40² + 50²) / 2] = √[(1600 + 2500)/2] = √2050 ≈ 45,3 mm / 1,78 in, lo que representa un 90,6 % del radio exterior. Esto demuestra cómo al desplazar la masa hacia la periferia se incrementa el radio de giro y, por tanto, la inercia rotacional para la misma masa total.

**¿Qué torque se necesita para detener un volante de inercia en un tiempo determinado?**

El torque de frenado se calcula con τ = I × α, donde α = Δω / Δt. Un volante con I = 20 kg·m² / 14,75 lb·ft² que gira a 1500 rpm (157,1 rad/s) y debe detenerse en 3 segundos requiere una desaceleración de α = 157,1 / 3 = 52,37 rad/s². El torque de frenado será τ = 20 × 52,37 = 1047,4 N·m / 772,6 lb·ft. Si el sistema de frenos actúa a un radio efectivo de 0,25 m / 9,84 in, la fuerza tangencial necesaria en el disco de freno será F = τ / r = 1047,4 / 0,25 ≈ 4189 N / 941,7 lbf. Este nivel de fuerza debe ser soportado por los componentes del freno y disipado como calor en el sistema.

**¿Es correcto sumar momentos de inercia de diferentes componentes de un sistema?**

Sí, siempre que todos los momentos de inercia estén referidos al mismo eje de rotación. El momento de inercia es una propiedad aditiva. Por ejemplo, un sistema rotor compuesto por un eje de acero (I₁ = 0,002 kg·m² / 0,0015 lb·ft²), un disco (I₂ = 0,15 kg·m² / 0,11 lb·ft²) y un acoplamiento (I₃ = 0,008 kg·m² / 0,0059 lb·ft²) tendrá un momento de inercia total de 0,16 kg·m² / 0,118 lb·ft² respecto al eje común. Si algún componente no comparte el mismo eje, deberá trasladarse su momento de inercia mediante el teorema de ejes paralelos antes de sumarlo.

## Fuentes consultadas

- **engineersedge.com**: https://www.engineersedge.com/mechanics_machines/mass_moment_of_inertia_equations_13091.htm
- **efunda.com**: https://www.efunda.com/math/solids/solids_display.cfm?SolidName=Sphere
