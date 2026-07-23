---
title: "Resortes de tensión cálculo"
sidebar:
  label: "Resortes de tensión cálculo"
description: "Ficha tecnica: Resortes de tensión cálculo"
keywords: ["extension spring calculation initial tension", "machine-elements"]
category: "machine-elements"
topic: "springs"
subcategory: "extension-springs"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Definición

Un resorte de tensión (o de extensión) es un elemento elástico diseñado para absorber y almacenar energía mecánica cuando es sometido a una fuerza de tracción axial. A diferencia de los resortes de compresión, los resortes de tensión incorporan una tensión inicial propia —llamada tensión de enrrollado— que mantiene las espiras en contacto firme y debe vencerse antes de que el resorte comience a alargarse. La rigidez del resorte se describe mediante la constante elástica k (N/mm o lb/in) y la relación fuerza–deformación obedece la forma generalizada de la ley de Hooke: F = Fᵢ + k·δ, donde Fᵢ es la tensión inicial y δ la extensión a partir de la longitud libre.

## Principio de funcionamiento

El comportamiento de un resorte de tensión responde a la deformación elástica por torsión del alambre enrollado helicoidalmente. Cuando se aplica una fuerza externa, primero debe superarse la tensión inicial Fᵢ que mantiene las espiras unidas; solo entonces las espiras comienzan a separarse y el alargamiento resulta linealmente proporcional a la carga adicional. Matemáticamente esto se expresa con la ley de Hooke modificada:

**F = Fᵢ + k · δ**

donde F es la fuerza aplicada, Fᵢ la tensión inicial (N o lb), k la constante del resorte (N/mm o lb/in) y δ la elongación desde la longitud libre (mm o in). Mientras la carga no exceda el límite elástico del material, la recuperación es completa y el resorte vuelve a su estado original. Este principio se emplea en mecanismos de retorno, puertas, trampolines, balanzas de resorte y dispositivos de sujeción.

## Dimensiones normalizadas

Las dimensiones típicas para resortes de tensión de uso industrial fabricados en alambre de acero para muelles (según DIN 17223 o ASTM A228) se presentan en la tabla siguiente. Los valores corresponden a medidas comerciales habituales; las tolerancias y acabados superficiales se rigen por las normas del fabricante.

| Diámetro de alambre (d) | Diámetro exterior (De) | Longitud libre (L₀) | Diámetro de gancho típico (Dg) |
|--------------------------|------------------------|---------------------|--------------------------------|
| 0,5 mm / 0.020 in | 3,2 mm / 0.126 in | 12,7 mm / 0,50 in | 2,5 mm / 0.098 in |
| 1,0 mm / 0.039 in | 6,5 mm / 0.256 in | 25,4 mm / 1,00 in | 5,0 mm / 0.197 in |
| 1,6 mm / 0.063 in | 10,0 mm / 0.394 in | 50,8 mm / 2,00 in | 8,0 mm / 0.315 in |
| 2,5 mm / 0.098 in | 16,0 mm / 0.630 in | 76,2 mm / 3,00 in | 12,7 mm / 0.500 in |
| 3,5 mm / 0.138 in | 22,5 mm / 0.886 in | 102,0 mm / 4,02 in | 18,0 mm / 0.709 in |
| 5,0 mm / 0.197 in | 32,0 mm / 1.260 in | 152,4 mm / 6,00 in | 25,4 mm / 1.000 in |

*Nota: Los ganchos de tracción pueden ser semibucle, bucle completo o insertos roscados, y aumentan la longitud total instalada. La longitud libre indicada no incluye los ganchos.*

## Capacidades de carga

La capacidad de carga de un resorte de tensión está determinada por la tensión de cortadura admisible del material, el índice de resorte C = D/d y el factor de Wahl. En la tabla siguiente se indican valores orientativos para las dimensiones normalizadas anteriores, considerando un acero de alto carbono con módulo de cortadura G = 79,3 GPa / 11,5×10⁶ psi y un número de espiras activas Na = 20.

| Diámetro de alambre (d) | Constante elástica (k) | Fuerza máxima (Fmáx) | Extensión máxima (δmáx) | Tensión inicial típica (Fᵢ) |
|--------------------------|------------------------|----------------------|--------------------------|------------------------------|
| 0,5 mm / 0.020 in | 0,12 N/mm / 0,69 lb/in | 3,8 N / 0,85 lb | 31,8 mm / 1,25 in | 0,4 N / 0,09 lb |
| 1,0 mm / 0.039 in | 0,35 N/mm / 2,0 lb/in | 22 N / 4,9 lb | 62,7 mm / 2,47 in | 2,2 N / 0,49 lb |
| 1,6 mm / 0.063 in | 1,15 N/mm / 6,6 lb/in | 85 N / 19,1 lb | 73,9 mm / 2,91 in | 8,5 N / 1,9 lb |
| 2,5 mm / 0.098 in | 2,8 N/mm / 16,0 lb/in | 310 N / 69,7 lb | 110,7 mm / 4,36 in | 31 N / 7,0 lb |
| 3,5 mm / 0.138 in | 5,5 N/mm / 31,4 lb/in | 750 N / 168,6 lb | 136,4 mm / 5,37 in | 75 N / 16,9 lb |
| 5,0 mm / 0.197 in | 11,0 N/mm / 62,8 lb/in | 1800 N / 404,7 lb | 163,6 mm / 6,44 in | 180 N / 40,5 lb |

*Los valores de Fmáx corresponden a una tensión de cortadura admisible de aproximadamente 40 % de la resistencia a la tracción del material (≈ 1100 MPa / 160 ksi). La tensión inicial Fᵢ representa entre 5 % y 10 % de la fuerza máxima.*

## Cálculo y selección

1. **Determinar las condiciones de servicio**: fuerza deseada en la longitud extendida F₁ y longitud libre L₀, o bien el recorrido δ = L₁ – L₀ y la fuerza F₁.
2. **Elegir una tensión inicial Fᵢ** acorde al diseño (generalmente 5‑15 % de Fmáx para ganchos estándar; más alto para aplicaciones de retorno firme). La tensión inicial es difícil de calcular con precisión y suele verificarse mediante ensayo.
3. **Calcular la constante elástica requerida**:
   \[ k = \frac{F₁ - Fᵢ}{δ} \]
4. **Dimensionar el resorte** utilizando la fórmula de rigidez para muelles helicoidales:
   \[ k = \frac{G \, d^4}{8 \, D_m^3 \, N_a} \]
   donde G es el módulo de rigidez del material, d el diámetro de alambre, Dm = De – d el diámetro medio y Na el número de espiras activas.
5. **Verificar la tensión de cortadura** en el alambre con el factor de Wahl (Kw):
   \[ τ_{máx} = K_w \, \frac{8 \, F_{máx} \, D_m}{π \, d^3} \]
   Asegurar que τmáx sea inferior a la tensión admisible del material, considerando efectos de fatiga si hay carga cíclica.
6. **Seleccionar el material**: acero para muelles según ASTM A228 (alambre music wire), AISI 302/304 inoxidable para ambientes corrosivos, o aleaciones de níquel para altas temperaturas.
7. **Redondear a dimensiones normalizadas** comerciales y recalcular la fuerza real obtenida. Durante la selección de ganchos, considerar la reducción de longitud libre efectiva y el posible efecto de concentración de tensiones.

## Consideraciones de montaje

- **Ganchos y terminales**: los extremos en bucle o gancho son las zonas más débiles del resorte. Evitar radios de curvatura agudos que incrementen la tensión local. El gancho debe ser formado sin dañar el alambre; los dobleces en frío elevan el riesgo de rotura por fatiga.
- **Puntos de anclaje**: los ejes o soportes donde se engancha el resorte deben ser lisos y sin aristas vivas que rayen el alambre. Utilizar pasadores, pernos o clips con diámetro ligeramente inferior al interior del gancho para evitar juego excesivo.
- **Pretensado**: cuando se especifique una tensión inicial alta, el resorte puede requerir un tensado previo que lo lleva ligeramente por encima del límite elástico durante la fabricación (asentamiento) para estabilizar la tensión inicial.
- **Protección y seguridad**: en aplicaciones con alta energía almacenada, prever un sistema de guía o contención que evite la eyección del resorte ante un fallo imprevisto. En presencia de corrosión, seleccionar materiales inoxidables o considerar recubrimientos protectores.
- **Montaje desmontable**: si el mantenimiento requiere desmontar el resorte con frecuencia, elegir ganchos de fácil acople (tipo “alemán” o clip) y verificar que la fuerza de inserción no sobrepase la carga de trabajo.

## Tablas de selección por aplicación

Para una selección rápida se ofrecen dimensiones y prestaciones orientativas para aplicaciones comunes. Todas las tablas incluyen valores en unidades métricas e imperiales.

| Aplicación | Diámetro de alambre (d) | Longitud libre (L₀) | Constante k (N/mm / lb/in) | Fuerza máxima (N / lb) |
|------------|--------------------------|---------------------|-----------------------------|-------------------------|
| Trampolín recreativo | 3,5 mm / 0.138 in | 140 mm / 5.51 in | 3,0 N/mm / 17,1 lb/in | 800 N / 180 lb |
| Mecanismo de retorno de pedal | 1,6 mm / 0.063 in | 80 mm / 3.15 in | 0,7 N/mm / 4,0 lb/in | 50 N / 11,2 lb |
| Puerta contraincendios (cierre) | 4,5 mm / 0.177 in | 300 mm / 11.81 in | 1,2 N/mm / 6,9 lb/in | 600 N / 135 lb |
| Tensor de cinta de persiana | 1,0 mm / 0.039 in | 40 mm / 1.57 in | 0,2 N/mm / 1,1 lb/in | 12 N / 2,7 lb |
| Gancho de remolque ligero | 5,5 mm / 0.217 in | 180 mm / 7.09 in | 4,8 N/mm / 27,4 lb/in | 1500 N / 337 lb |
| Balanza de resorte analógica | 0,7 mm / 0.028 in | 60 mm / 2.36 in | 0,08 N/mm / 0,46 lb/in | 8 N / 1,8 lb |

## Preguntas frecuentes

**¿Cuál es la tensión inicial típica para un resorte de tensión de acero de alambre de 2 mm de diámetro?**  
La tensión inicial suele situarse entre 12 N / 2,7 lb y 25 N / 5,6 lb, dependiendo del índice de resorte y del proceso de enrollado, representando aproximadamente un 8 % de la fuerza máxima admisible.

**¿Cómo se calcula la constante elástica k de un resorte de extensión?**  
La constante se obtiene con la fórmula k = (F – Fᵢ) / δ, donde F es la fuerza total aplicada, Fᵢ la tensión inicial y δ la elongación medida. Para un resorte helicoidal de alambre redondo, k también puede calcularse como k = G·d⁴ / (8·Dm³·Na), siendo G ≈ 79,3 GPa / 11,5×10⁶ psi para acero.

**¿Qué extensión máxima puede alcanzar un resorte de tensión sin perder sus propiedades elásticas?**  
Se recomienda no sobrepasar una deformación que induzca una tensión cortante superior al 45 % de la resistencia a la tracción del material, lo que para un acero ASTM A228 de 2,5 mm / 0.098 in equivale, por ejemplo, a una elongación máxima de unos 110 mm / 4,3 in.

**¿Cuánto varía la fuerza de un resorte de tensión al aumentar la temperatura de 20 °C a 100 °C?**  
En aceros al carbono el módulo de rigidez G disminuye aproximadamente un 1 % cada 38 °C, de modo que al pasar de 20 °C a 100 °C la constante elástica se reduce cerca de un 2,5 %, reduciendo proporcionalmente la fuerza generada para la misma extensión. La fuerza a 100 °C sería un 2,5 % menor que a 20 °C.

**¿Qué fuerza se necesita para abrir 15 mm una puerta de cierre equipada con un resorte de tensión de k = 0,8 N/mm?**  
Asumiendo una tensión inicial de 3 N, la fuerza requerida sería F = 3 N + 0,8 N/mm × 15 mm = 15 N / 3,4 lb. En unidades imperiales: k ≈ 4,6 lb/in, Fᵢ = 0,67 lb, δ = 0,59 in, por lo que F = 0,67 + 4,6 × 0,59 ≈ 3,4 lb.

**¿Cómo influye el número de espiras activas en la rigidez de un resorte de tensión?**  
La rigidez es inversamente proporcional a Na. Si se precisa una constante de 2,8 N/mm con 20 espiras, un resorte con 10 espiras activas duplicaría la rigidez hasta 5,6 N/mm, siempre que no se modifiquen el diámetro de alambre ni el diámetro medio de la hélice.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hookes-law-force-spring-constant-d_1853.html
- **mcmaster.com**: https://www.mcmaster.com/products/tension-springs/
