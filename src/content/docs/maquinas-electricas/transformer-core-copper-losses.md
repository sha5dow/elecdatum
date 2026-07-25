---
title: "Pérdidas en transformadores núcleo y cobre"
sidebar:
  label: "Pérdidas en transformadores núcleo y cobre"
description: "Ficha tecnica: Pérdidas en transformadores núcleo y cobre"
keywords: ["transformer core copper losses calculation", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "transformers"
subcategory: "transformer-losses"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Las pérdidas en un transformador se dividen principalmente en pérdidas fijas en el núcleo —ocasionadas por histéresis y corrientes de Foucault— y pérdidas variables en los arrollamientos por efecto Joule, que dependen del cuadrado de la corriente de carga. En un transformador de distribución típico de 500 kVA, las pérdidas totales representan alrededor del 1,5 % de la potencia nominal, repartidas aproximadamente en 0,5 % de pérdidas en el núcleo y 1 % de pérdidas en el cobre a plena carga.

## Pérdidas en el núcleo (hierro)

Las pérdidas en el núcleo de un transformador de 60 Hz fabricado con acero al silicio de grano orientado M4 ascienden típicamente a 0,9 W / lb (1,98 W / kg) medidas a 1,5 T de inducción. Estas pérdidas son constantes en todo el rango de carga y se dividen en dos componentes: pérdidas por histéresis y pérdidas por corrientes de Foucault.

### Pérdidas por histéresis

Se producen por la energía necesaria para reorientar los dominios magnéticos del material ferromagnético en cada ciclo de magnetización alterna. La potencia disipada se expresa como:

> **Ph = Kh · f · Bmax^n · V**

| Variable | Descripción | Unidad (SI) | Unidad (imperial) |
| --- | --- | --- | --- |
| Ph | Potencia de pérdidas por histéresis | W | W |
| Kh | Constante de histéresis del material | J / (m³·Tⁿ) | BTU / (ft³·Gⁿ) |
| f | Frecuencia de operación | Hz | Hz |
| Bmax | Densidad de flujo máxima | T | G (1 T = 10 000 G) |
| n | Exponente de Steinmetz (1,6–2,0 para aceros al silicio) | adimensional | adimensional |
| V | Volumen del núcleo | m³ | ft³ |

El exponente _n_ suele tomarse como 1,6 para aceros al silicio de grano orientado, y la constante _Kh_ varía entre 0,001 y 0,003 W·s / (T¹·⁶·m³) (≈ 0,5 × 10⁻⁶ – 1,5 × 10⁻⁶ BTU·s / (G¹·⁶·ft³)).

### Pérdidas por corrientes de Foucault (Eddy Current)

Son generadas por las corrientes inducidas que circulan en el material conductor del núcleo al ser atravesado por el flujo alterno. La fórmula clásica para esta pérdida es:

> **Pe = Ke · f² · Bmax² · t² · V**

| Variable | Descripción | Unidad (SI) | Unidad (imperial) |
| --- | --- | --- | --- |
| Pe | Potencia de pérdidas por corrientes parásitas | W | W |
| Ke | Constante de corrientes de Foucault | Ω⁻¹·m³·s² | Ω⁻¹·ft³·s² |
| f | Frecuencia | Hz | Hz |
| Bmax | Densidad de flujo máxima | T | G |
| t | Espesor de la laminación | m | ft (o mils) |
| V | Volumen del núcleo | m³ | ft³ |

Para acero al silicio M4 con laminación de 0,27 mm (0,0106 in) de espesor y operando a 60 Hz / 1,5 T, el valor de _Ke_ se sitúa en el orden de 5 × 10⁻⁵ Ω⁻¹·m³·s².

## Pérdidas en el cobre (arrollamientos)

En un transformador de 1000 kVA con devanados de cobre, las pérdidas en el cobre a plena carga representan aproximadamente el 1,2 % de la potencia nominal, es decir, unos 12 kW. Esta pérdida es proporcional al cuadrado de la corriente de carga y crece rápidamente ante sobrecargas.

La potencia Joule disipada en cada devanado se calcula mediante:

> **Pcu = I² · R**

Donde _I_ es la corriente eficaz que circula por el devanado y _R_ la resistencia óhmica del conductor a la temperatura de operación.

Para incluir el efecto de la temperatura sobre la resistencia del cobre o del aluminio se emplea:

> **R(T) = R₀ · [1 + α · (T – T₀)]**

| Variable | Descripción | Valor típico (Cu) | Valor típico (Al) |
| --- | --- | --- | --- |
| α | Coeficiente de temperatura | 0,00393 °C⁻¹ | 0,00403 °C⁻¹ |
| T₀ | Temperatura de referencia | 20 °C / 68 °F | 20 °C / 68 °F |

Así, un devanado de cobre que mide 0,10 Ω a 20 °C (68 °F) alcanza 0,14 Ω a 120 °C (248 °F), incrementando las pérdidas en un 40 %.

| Material | Resistividad a 20 °C | Densidad | α (a 20 °C) |
| --- | --- | --- | --- |
| Cobre recocido | 1,68 × 10⁻⁸ Ω·m / 10,37 Ω·cmil / ft | 8960 kg / m³ / 559 lb / ft³ | 0,00393 °C⁻¹ |
| Aluminio duro | 2,65 × 10⁻⁸ Ω·m / 16,06 Ω·cmil / ft | 2700 kg / m³ / 169 lb / ft³ | 0,00403 °C⁻¹ |

## Cálculo de las pérdidas totales

Las pérdidas totales en un transformador de 2500 kVA con unas pérdidas en vacío de 3,5 kW y unas pérdidas en carga de 18 kW ascienden a 21,5 kW a plena carga, lo que representa el 0,86 % de la potencia nominal. La expresión general es:

> **Ptotal = Pnúcleo + Pcobre**

| Componente | Dependencia | Valor ejemplo (2500 kVA) |
| --- | --- | --- |
| Pnúcleo (hierro) | Constante (no depende de la carga) | 3,5 kW / 4,69 hp |
| Pcobre a plena carga | ∝ I² (cuadrado de la corriente de carga) | 18 kW / 24,14 hp |
| Ptotal a plena carga | Suma directa | 21,5 kW / 28,83 hp |

Si el transformador trabaja al 50 % de su carga nominal, la pérdida en el cobre se reduce al 25 % del valor a plena carga (4,5 kW), mientras que la pérdida en el núcleo permanece en 3,5 kW, resultando un total de 8,0 kW (0,64 % de la potencia entregada).

## Factores que afectan las pérdidas

La resistividad del cobre a 20 °C es de 1,68 × 10⁻⁸ Ω·m (10,37 Ω·cmil / ft); cualquier aumento de temperatura eleva este valor y encarece las pérdidas Joule. Los principales factores se resumen a continuación:

| Factor | Efecto sobre Pnúcleo | Efecto sobre Pcobre |
| --- | --- | --- |
| Frecuencia | Ph ∝ f ; Pe ∝ f² | Despreciable hasta ≈400 Hz; luego crece por efecto piel |
| Inducción máxima (Bmax) | Ph ∝ Bmax¹·⁶ ; Pe ∝ Bmax² | Sin influencia directa |
| Espesor de laminación | Solo afecta Pe (Pe ∝ t²) | No aplica |
| Temperatura | Muy leve (disminuye Ph, aumenta Pe por variación de resistividad) | Aumenta R → aumenta Pcu (+0,39 % / °C en cobre) |
| Carga | No varía | Pcu ∝ I² → proporcional al cuadrado de la carga |

## Reducción de pérdidas en transformadores

Emplear acero al silicio de grano orientado con láminas de 0,23 mm (0,009 in) de espesor permite reducir las pérdidas por corrientes parásitas hasta un 40 % frente a laminaciones de 0,35 mm (0,014 in). Las estrategias de reducción se agrupan según la naturaleza de la pérdida:

| Método | Afecta a | Reducción típica lograda |
| --- | --- | --- |
| Utilizar acero al silicio de grano orientado | Pnúcleo (histéresis + Foucault) | 20 %–30 % respecto a acero no orientado |
| Reducir el espesor de las laminaciones (0,23 mm / 0,009 in) | Pnúcleo (Foucault) | Hasta 40 % frente a 0,35 mm / 0,014 in |
| Aumentar la sección de los conductores | Pcobre | Proporcional a la reducción de R (ej. 25 % más sección → 20 % menos Pcu) |
| Emplear cobre en lugar de aluminio | Pcobre | ≈ 40 % menos pérdidas para igual geometría |
| Mejorar la refrigeración (bajar temperatura de operación) | Pcobre | ~2 % menos Pcu por cada 5 °C de reducción |

## Comparación entre pérdidas en el núcleo y en el cobre

| Característica | Pérdidas en el núcleo (hierro) | Pérdidas en el cobre (arrollamientos) |
| --- | --- | --- |
| Naturaleza física | Histéresis y corrientes parásitas | Efecto Joule (I²R) |
| Dependencia de la carga | Constante en todo el rango de carga | Proporcional al cuadrado de la corriente (I²) |
| Frecuencia | Ph ∝ f , Pe ∝ f² | Independiente hasta ≈400 Hz; a alta frecuencia aumenta por efecto piel |
| Materiales afectados | Núcleo magnético (acero al silicio, ferrita, amorfo) | Conductores (cobre o aluminio) |
| Valor típico a plena carga (60 Hz, 1,5 T) | 0,9 W / lb (1,98 W / kg) | Depende del diseño: ≈1 %–2 % de la potencia nominal |
| Medición normalizada | Ensayo en vacío (circuito abierto) | Ensayo en cortocircuito |
| Evolución con el tiempo de operación | Prácticamente constante si la tensión y frecuencia son estables | Aumenta con la degradación de contactos y con el incremento de temperatura |

## Preguntas frecuentes (FAQ)

### ¿Cómo se calculan las pérdidas en el cobre de un transformador?

Se emplea la ley de Joule **Pcu = I²·R**, donde _I_ es la corriente eficaz que recorre cada devanado a una carga determinada y _R_ la resistencia del conductor a la temperatura de operación. Si se requiere gran exactitud, la resistencia se corrige por temperatura con el coeficiente α del material.

### ¿Por qué las pérdidas en el núcleo se consideran constantes?

Porque la tensión aplicada y la frecuencia de la red suelen permanecer constantes; por tanto, la densidad de flujo máxima y la frecuencia no varían, y las pérdidas por histéresis y Foucault dependen únicamente de esos parámetros, no de la corriente de carga.

### ¿Qué material reduce más las pérdidas en el núcleo?

Los aceros al silicio de grano orientado de bajo espesor (M3, M4) ofrecen el mejor compromiso costo‑prestaciones. Para altas frecuencias se usan ferritas, y en aplicaciones de muy alta eficiencia se emplean núcleos amorfos que reducen las pérdidas hasta un 70 % respecto al acero al silicio convencional.

### ¿Afecta la frecuencia a las pérdidas en el cobre?

En transformadores de potencia (50/60 Hz) el efecto es despreciable. Al aumentar la frecuencia por encima de unos 400 Hz, los fenómenos de efecto piel y proximidad incrementan la resistencia efectiva del conductor, elevando las pérdidas I²R.

### ¿Cómo influye la temperatura en las pérdidas del transformador?

La temperatura incrementa la resistividad del cobre (≈0,39 % / °C) y, con ello, las pérdidas en el cobre para una misma corriente. En el núcleo, el efecto es contradictorio: disminuye ligeramente la pérdida por histéresis pero puede aumentar las corrientes parásitas al variar la resistividad del acero.

### ¿Se pueden eliminar por completo las pérdidas en un transformador?

No. Las pérdidas en el núcleo son inherentes a la magnetización alterna del material ferromagnético, y las pérdidas en el cobre son inevitables mientras circule corriente por un conductor con resistencia no nula. Se pueden minimizar con diseños y materiales optimizados, pero nunca anularse.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/voltage-drop-d_1550.html
- **electrical4u.com**: https://www.electrical4u.com/hysteresis-eddy-current-iron-or-core-losses-and-copper-loss-in-transformer/
