---
title: "Curvas de disparo de interruptores B C D K"
sidebar:
  label: "Curvas de disparo de interruptores B C D K"
description: "Ficha tecnica: Curvas de disparo de interruptores B C D K"
keywords: ["circuit breaker trip curve B C D K", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breakers"
subcategory: "breaker-trip-curves"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Las curvas de disparo definen la relación entre la intensidad de corriente y el tiempo de respuesta de un interruptor automático. Los tipos B, C, D y K son las curvas normalizadas más utilizadas en interruptores magnetotérmicos de baja tensión; cada una está optimizada para un rango específico de corrientes de arranque y cargas. La parte térmica de la curva actúa frente a sobrecargas mediante un bimetal calentado por la corriente, mientras que la parte magnética responde de forma instantánea ante corrientes de cortocircuito elevadas.

El disparo térmico se basa en la deformación de una lámina bimetálica. Al circular corriente se genera calor por efecto Joule; la diferencia de dilatación entre los dos metales provoca una flexión que, al alcanzar un desplazamiento crítico, libera el mecanismo de disparo. La relación entre la geometría de la banda y la temperatura responde a la siguiente expresión:

> **s = (α · L² · ΔT) / e**

| Variable | Significado | Unidad típica |
|----------|--------------|----------------|
| s | Desplazamiento (flexión) del extremo libre | mm / in |
| α | Coeficiente de flexión del bimetal | 14 × 10⁻⁶ K⁻¹ (típico) |
| L | Longitud activa de la banda bimetálica | mm / in |
| ΔT | Incremento de temperatura respecto a la condición en reposo | °C / °F |
| e | Espesor total del bimetal | mm / in |

La temperatura del bimetal depende del calor generado por la corriente (Q ∝ I²·R·t). En consecuencia, en la zona de sobrecarga la curva de disparo sigue una ley de tiempo inverso: el tiempo de disparo disminuye al aumentar la corriente. El disparo magnético emplea una bobina cuyo campo electromagnético atrae un núcleo móvil cuando la corriente supera un umbral prefijado, consiguiendo tiempos de respuesta del orden de milisegundos (típicamente por debajo de 10 ms / 0.01 s).

## Curvas de disparo normalizadas
Las normas IEC 60898 (interruptores de uso doméstico y similar) e IEC 60947-2 (interruptores de baja tensión industriales) establecen los umbrales de disparo magnético y las condiciones de ensayo térmico. Las curvas más comunes son:

- **Curva B**: 3 a 5 veces la corriente nominal (In) para el disparo instantáneo.
- **Curva C**: 5 a 10 In.
- **Curva D**: 10 a 20 In.
- **Curva K**: 8 a 12 In (algunos fabricantes extienden hasta 14 In), definida en IEC 60947-2.

El comportamiento térmico es idéntico para todas las curvas en interruptores domésticos: no debe disparar con 1.13 In en un tiempo de 1 hora (2 horas para corrientes asignadas mayores de 63 A) y debe disparar antes de 1 hora (o 2 horas) con 1.45 In.

## Curva B – respuesta rápida
El umbral magnético está comprendido entre 3 In y 5 In. La curva es la más sensible de las habituales, diseñada para circuitos con corrientes de cortocircuito moderadas y donde se requiere una rápida desconexión ante pequeñas sobreintensidades.

- Tiempo de disparo magnético: inferior a 100 ms / 0.1 s para corrientes ≥ 5 In.
- Para una sobrecarga del 200 % (2 In) el tiempo de disparo térmico se sitúa alrededor de 60 s / 1 min (valores orientativos para In ≤ 63 A).

## Curva C – uso general
El umbral magnético abarca de 5 In a 10 In. Es la curva más extendida en instalaciones eléctricas convencionales.

- Tiempo de disparo magnético: inferior a 100 ms / 0.1 s a partir de 10 In.
- Con una sobrecarga del 150 % (1.5 In) el disparo térmico se produce aproximadamente entre 100 s / 1.67 min y 200 s / 3.33 min para interruptores de hasta 63 A.

## Curva D – cargas con alta corriente de arranque
El disparo magnético se configura entre 10 In y 20 In. Soporta los fuertes picos de arranque de motores, transformadores o equipos con núcleo magnético sin que se produzca una desconexión intempestiva.

- Tiempo de disparo magnético: típicamente por debajo de 20 ms / 0.02 s una vez superado el umbral.
- Con una sobrecarga del 150 % el tiempo térmico es similar al resto de curvas, ya que la protección térmica no depende del ajuste magnético.

## Curva K – protección de motores y líneas con electrónica de potencia
Definida por la norma IEC 60947-2, el intervalo de disparo magnético va de 8 In a 12 In (algunas series comerciales alcanzan 14 In). Presenta una característica térmica ligeramente más lenta para evitar disparos durante arranques prolongados, manteniendo la capacidad de respuesta rápida frente a cortocircuitos francos.

- Con 10 In el disparo magnético ocurre en menos de 100 ms / 0.1 s.
- Durante una sobrecarga del 120 % (1.2 In) el tiempo de disparo térmico puede exceder los 300 s / 5 min, permitiendo arranques pesados.

## Aplicaciones típicas

| Curva | Carga típica | Tipo de instalación |
|-------|---------------|----------------------|
| B | Circuitos de alumbrado, tomas de uso general con baja corriente de arranque | Viviendas, oficinas |
| C | Tomas de fuerza, pequeños motores, luminarias con balasto electrónico | Instalaciones terciarias, comercios |
| D | Motores con alto par de arranque, transformadores, soldadoras | Industria, talleres |
| K | Motores de inducción, líneas con variadores de frecuencia o rectificadores | Plantas industriales, bombas, ventiladores |

## Tabla resumen de umbrales de disparo

| Curva | Disparo magnético (múltiplo de In) | Disparo térmico (no disparo / disparo obligado) | Rango de corriente de ensayo |
|-------|-------------------------------------|--------------------------------------------------|------------------------------|
| B | 3 a 5 In | 1.13 In / 1.45 In | 3 – 5 |
| C | 5 a 10 In | 1.13 In / 1.45 In | 5 – 10 |
| D | 10 a 20 In | 1.13 In / 1.45 In | 10 – 20 |
| K | 8 a 12 In (fabricante: hasta 14 In) | 1.05 In / 1.2 In (valores indicativos) | 8 – 12 |

## Fórmula de protección térmica
La protección frente a sobrecargas sigue un comportamiento de tiempo inverso gobernado por la integral de Joule. Para la zona térmica de la curva, y despreciando la evacuación de calor, se cumple aproximadamente:

> **I² · t = K**

| Símbolo | Significado | Unidad |
|---------|--------------|--------|
| I | Corriente eficaz que circula por el interruptor | A (amperios) |
| t | Tiempo necesario para alcanzar la temperatura de disparo | s (segundos) |
| K | Constante que depende de la construcción del bimetal, su masa y el punto de disparo mecánico | A²·s |

La constante K es característica de cada calibre y modelo. Durante el ensayo normalizado, el interruptor no debe disparar antes de 1 h (o 2 h) con 1.13 In, lo que implica que el producto I²·t correspondiente está por debajo del umbral de acumulación de energía suficiente para deformar el bimetal hasta el punto de disparo; con 1.45 In, en cambio, se supera ese umbral y el disparo se produce dentro del tiempo especificado.

## Preguntas frecuentes (FAQ)

### ¿Cuánto tiempo tarda en disparar un interruptor curva B ante un cortocircuito franco de 5 In?
El disparo magnético se produce en menos de 100 ms / 0.1 s. Con corrientes superiores a 5 In la respuesta es aún más rápida, llegando a valores de 20 ms / 0.02 s.

### ¿Qué corriente necesita un interruptor curva C para activar el disparo instantáneo?
La zona magnética actúa a partir de 5 In, pero el disparo garantizado se da a 10 In, con un tiempo típico de 10 ms / 0.01 s.

### ¿Cuánto se demora un interruptor curva D en abrir con una sobrecarga del 150 %?
El tiempo es similar al de las demás curvas (el bimetal es común) y ronda los 120 s / 2 min para calibres ≤ 63 A, siempre que no actúe la protección magnética.

### ¿Con qué rapidez responde un interruptor curva K ante una corriente de arranque de 8 In?
Si la corriente se mantiene por debajo de 12 In y el tiempo de arranque es corto, el disparo magnético no se produce; en caso de superar 12 In, el tiempo de apertura es inferior a 100 ms / 0.1 s.

### ¿Cuál es la tolerancia de no disparo en la curva B para 1.13 In?
Con 1.13 In el interruptor no debe disparar en menos de 1 hora (2 horas para In > 63 A), lo que equivale a mantener la carga admisible durante ese intervalo sin interrupción.

### ¿Qué diferencia de tiempo de disparo hay entre 3 In y 5 In en una curva B?
A 3 In el interruptor puede tardar varios segundos en disparar desde el arranque, mientras que a 5 In el disparo es prácticamente instantáneo (menor de 100 ms / 0.1 s), marcando la transición entre zona térmica y magnética.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/bimetallic-strips-d_1755.html
- **electrical4u.com**: https://www.electrical4u.com/circuit-breaker-operation/
