---
title: "Parámetros de configuración de variadores"
sidebar:
  label: "Parámetros de configuración de variadores"
description: "Ficha tecnica: Parámetros de configuración de variadores"
keywords: ["VFD parameter configuration acceleration deceleration", "sistemas-control"]
category: "sistemas-control"
topic: "variable-frequency-drives"
subcategory: "vfd-parameter-configuration"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La configuración de los parámetros de aceleración y desaceleración en un variador de frecuencia (VFD) determina cómo responde el motor a los cambios de consigna de velocidad, incidiendo directamente en la suavidad del arranque, el frenado y la protección mecánica. Estos tiempos de rampa definen la tasa de variación de la frecuencia de salida (y por tanto de la velocidad del motor), pudiendo ajustarse entre 0,1 s y 3600 s según la aplicación. Una parametrización adecuada evita picos de corriente, reduce el estrés en transmisiones y asegura un control óptimo de procesos.

## Parámetros de rampa de aceleración y desaceleración

Los parámetros principales vinculados a la gestión de rampas en un VFD son el **tiempo de aceleración** (Acceleration Time) y el **tiempo de desaceleración** (Deceleration Time). Generalmente se definen como el lapso requerido para que la frecuencia pase de 0 Hz a la frecuencia máxima (o frecuencia nominal del motor) y viceversa.

| Parámetro | Descripción | Rango típico | Unidad |
|-----------|-------------|--------------|--------|
| Tiempo de aceleración 1 (P.03 o F002) | Tiempo de 0 Hz a frecuencia máxima | 0,1 – 3600 | s |
| Tiempo de desaceleración 1 (P.04 o F003) | Tiempo de frecuencia máxima a 0 Hz | 0,1 – 3600 | s |
| Tiempo de aceleración 2 | Segundo juego de rampa (multivelocidad) | 0,1 – 3600 | s |
| Tiempo de desaceleración 2 | Segundo juego de rampa | 0,1 – 3600 | s |
| Frecuencia máxima (Fmax) | Frecuencia de referencia para cálculo de rampa | 50 / 60 (EU) 60 / 60 (US) | Hz |
| Curva de rampa | Lineal o curva en S | Lineal / S1 / S2 | — |

La mayoría de variadores permiten programar hasta ocho rampas diferentes, seleccionables mediante entradas digitales. Los valores se introducen en segundos, pero internamente el convertidor calcula la variación de frecuencia por segundo (Hz/s), que es la tasa real de aceleración.

## Relación matemática entre tiempo de rampa y aceleración

La aceleración lineal de la carga traducida al eje del motor se vincula con la variación de frecuencia mediante la velocidad de sincronismo. Para un motor de inducción, la velocidad mecánica en rpm está dada por:

> **n = 120 × f / p**

donde f es la frecuencia (Hz) y p el número de polos. La aceleración angular α (rad/s²) se relaciona con la variación de frecuencia en el tiempo Δf/Δt mediante la fórmula:

> **α = (2π / 60) × (120 / p) × (Δf/Δt) = (4π / p) × (Δf/Δt)**

| Variable | Símbolo | Unidades (métrico / imperial) |
|----------|---------|---------------------------|
| Velocidad final del motor | n_f | rpm |
| Velocidad inicial del motor | n_i | rpm |
| Variación de frecuencia | Δf = f_f - f_i | Hz |
| Tiempo de rampa configurado | Δt | s |
| Aceleración angular | α | rad/s² |
| Número de polos | p | — |
| Par acelerador disponible | T | N·m / lb·ft |
| Momento de inercia total referido al motor | J | kg·m² / lb·ft² |

A partir de la segunda ley de Newton para rotación (T = J × α), el tiempo de rampa mínimo alcanzable se obtiene con:

> **Δt_min = J × (2π/60) × (n_f - n_i) / T**

Ejemplo numérico: para un motor de 4 polos (p=4) con velocidad nominal 1750 rpm, par nominal 35 N·m y momento de inercia total 0,15 kg·m², el tiempo de aceleración desde 0 hasta 1750 rpm es Δt = 0,15 × (2π/60) × 1750 / 35 ≈ 7,85 s. En variadores reales se programa un valor algo mayor (p. ej., 10 s) para evitar sobrecorrientes.

## Tipos de curvas de rampa

Los VFD ofrecen modos de rampa que influyen en la suavidad del movimiento:

- **Rampa lineal:** la frecuencia varía de manera uniforme (aceleración constante). Adecuada para la mayoría de bombas, ventiladores y cintas transportadoras.
- **Rampa en S:** la transición sigue una curva sigmoidea (aceleración gradual al inicio y al final). Se utiliza en aplicaciones que requieren mínimo tirón mecánico (elevadores, grúas, máquinas herramientas). El parámetro adicional suele ser “tiempo de curvatura S” (0 a 2 s), que define el suavizado de las esquinas.

| Tipo de rampa | Aceleración | Tirón (jerk) | Aplicaciones típicas |
|---------------|-------------|--------------|----------------------|
| Lineal | Constante | ∞ (teórico) | Bombas, ventiladores, transportadores |
| Curva S suave | Variable controlada | Finito programable | Ascensores, embalaje, movimiento de personas |
| Curva S doble | Dos zonas de curvatura | Finito ajustable | Máquinas herramienta, robots |

La parametrización combinada (tiempo de aceleración + curvatura S) define el perfil de velocidad real.

## Valores de configuración recomendados

La elección del tiempo de rampa depende del par resistente, la inercia de la carga y las limitaciones eléctricas. Como punto de partida se recomiendan:

| Aplicación | Tiempo de aceleración | Tiempo de desaceleración |
|------------|----------------------|---------------------------|
| Bombas centrífugas | 2 – 10 s | 2 – 10 s |
| Ventiladores axiales | 5 – 20 s | 5 – 20 s |
| Cintas transportadoras (carga ligera) | 1 – 5 s | 1 – 3 s |
| Cintas transportadoras (carga pesada) | 5 – 15 s | 3 – 10 s |
| Grúas y polipastos | 3 – 10 s | 3 – 10 s |
| Centrifugadoras | 30 – 120 s | 30 – 180 s (con resistencia de frenado) |
| Extrusoras | 5 – 30 s | 5 – 30 s |

Para evitar sobrecargas, el tiempo de desaceleración debe considerar si el variador dispone de resistencia de frenado (DBR). Si no la tiene y la carga posee gran inercia, la energía regenerativa eleva la tensión del bus de continua, provocando fallo por sobretensión. En ese caso se debe aumentar el tiempo de desaceleración o añadir un chopper de frenado.

## Tabla de parámetros típicos en variadores comerciales

La siguiente tabla muestra parámetros reales tomados de hojas de datos de variadores de propósito general (200 V – 480 V, 0,4 kW a 75 kW), abarcando las marcas más comunes en el mercado:

| Parámetro (código) | Rango de ajuste | Valor por defecto | Unidades |
|--------------------|-----------------|-------------------|----------|
| Tiempo aceleración 1 (F02 / P03) | 0,1 a 3600 | 10,0 | s |
| Tiempo desaceleración 1 (F03 / P04) | 0,1 a 3600 | 10,0 | s |
| Tiempo aceleración 2 (E10 / P19) | 0,1 a 3600 | 15,0 | s |
| Tiempo desaceleración 2 (E11 / P20) | 0,1 a 3600 | 15,0 | s |
| Curva S suave (H07 / P42) | 0,00 a 2,00 | 0,20 | s |
| Parada rápida (tiempo) (F08 / P12) | 0,1 a 3600 | 5,0 | s |
| Frecuencia máxima (F15 / P18) | 50,0 / 60,0 seleccionable | 50,0 (UE) 60,0 (US) | Hz |
| Inyección DC tras parada (tiempo) (F12 / P14) | 0,0 a 10,0 | 0,5 | s |

Estos valores son meramente ilustrativos y deben adaptarse a la instalación.

## Efectos de una configuración incorrecta

Una rampa excesivamente corta (p. ej., 0,1 s para un motor de 15 kW con carga inercial) provoca:

- **Sobrecarga instantánea de corriente** (pico > 200 % In), con posible disparo de la protección.
- **Tensión mecánica elevada** en correas, cadenas o acoplamientos, reduciendo su vida útil.
- **Cavitación en bombas** o golpes de ariete en tuberías por aceleración brusca del fluido.

Una rampa demasiado larga (p. ej., 300 s en un ventilador que no lo requiere) ocasiona:

- **Pérdida de productividad**, sobre todo en aplicaciones de ciclos rápidos.
- **Calentamiento adicional del motor** durante el arranque prolongado con corriente elevada pero a baja velocidad de enfriamiento.

En la desaceleración, un tiempo insuficiente sin resistor de frenado desencadena la protección por **sobretensión en el bus DC (OV)**. En VFD sin resistencia de frenado, es típico ajustar el tiempo de desaceleración al menos 2‑3 veces el tiempo de aceleración cuando se trata de cargas inerciales.

## Procedimiento de ajuste práctico

1. Configurar el tiempo de aceleración al valor sugerido en la tabla de aplicaciones.
2. Arrancar el motor en vacío y verificar ausencia de alarmas.
3. Con la carga acoplada, arrancar y monitorear la corriente mediante el display o software del VFD.
4. Si la corriente pico supera el 110–120 % de la nominal, aumentar el tiempo en pasos de 1 s.
5. Para la desaceleración, frenar desde la máxima velocidad y observar la tensión del bus DC (parámetro de monitorización). Si se acerca al límite de sobretensión (generalmente 410 V para redes de 230 V AC o 820 V para 400 V AC), incrementar el tiempo de desaceleración.
6. Si se requiere rampa en S, habilitar la curva y ajustar el parámetro de curvatura S, aumentándolo hasta eliminar tirones sensibles.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre el tiempo de aceleración en un VFD y la rampa lineal de un arrancador suave?

En un VFD, el tiempo de aceleración controla la frecuencia de salida, por lo que el motor arranca realmente a baja velocidad y con par completo disponible. En un arrancador suave solo se limita la tensión, por lo que el par se reduce aproximadamente con el cuadrado de la tensión. El VFD permite rampas mucho más largas (hasta 3600 s) sin sobrecalentar el motor, mientras que un arrancador suave no debe permanecer en rampa prolongada para evitar sobrecalentamiento por baja velocidad.

### ¿Por qué el variador dispara por sobretensión en la desaceleración si el tiempo configurado es corto?

Cuando el motor frena, actúa como generador devolviendo energía al bus de continua del variador. Si la desaceleración es muy rápida, esa energía no se disipa y la tensión del bus aumenta hasta alcanzar el umbral de protección. La solución es instalar una resistencia de frenado externo o aumentar el tiempo de desaceleración para que la energía se disipe gradualmente.

### ¿Es necesario programar el mismo tiempo de aceleración y desaceleración?

No necesariamente. En muchas aplicaciones, el tiempo de aceleración se define por la capacidad de corriente del variador y el par de arranque requerido, mientras que el tiempo de desaceleración depende de la energía regenerativa y la presencia de frenado dinámico. Es común que el tiempo de desaceleración sea mayor (incluso el doble) que el de aceleración.

### ¿Qué efecto tiene la rampa en S en el consumo de corriente?

La rampa en S reduce el pico de corriente inicial porque la aceleración angular empieza gradualmente, evitando la demanda brusca de corriente para vencer la inercia estática. Aunque la aceleración media se mantiene, el perfil suavizado permite menores tasas máximas de variación de corriente (dI/dt).

### ¿Puedo cambiar los tiempos de rampa mientras el motor está en marcha?

Sí, la mayoría de variadores permite modificar los parámetros de rampa en tiempo real sin detener el motor. El cambio es efectivo de inmediato o al siguiente flanco de aceleración/desaceleración, según la configuración del fabricante. Esto es útil en procesos con variaciones de carga.

### ¿Cómo influye la inercia de la carga en la selección del tiempo de aceleración?

La inercia es el factor dominante. A mayor inercia, se necesita más par acelerador para mover la carga en el mismo tiempo, o bien se requiere un tiempo de aceleración mayor para mantener la corriente dentro de los límites del variador. La fórmula Δt = J × Δω / T muestra la dependencia lineal con la inercia.

## Fuentes consultadas

- **automationdirect.com**: https://www.automationdirect.com/videos/video?videoToPlay=KlEOk86_3Uc
