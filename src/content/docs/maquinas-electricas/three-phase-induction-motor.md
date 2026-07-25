---
title: "Motor de inducción trifásico características"
sidebar:
  label: "Motor de inducción trifásico características"
description: "Ficha tecnica: Motor de inducción trifásico características"
keywords: ["three phase induction motor characteristics specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-induction"
subcategory: "three-phase-induction"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
El motor de inducción trifásico, también conocido como motor asíncrono trifásico, es la máquina eléctrica rotativa más extendida en aplicaciones industriales. Convierte energía eléctrica de corriente alterna trifásica en energía mecánica mediante un campo magnético giratorio. Destaca por su autoarranque, construcción robusta y mínimo mantenimiento, operando típicamente con tensiones de 400 V / 460 V y frecuencias de 50 Hz o 60 Hz en potencias que abarcan desde fracciones de kilovatio hasta varios cientos de kilovatios.

El principio de funcionamiento se basa en la creación de un campo magnético rotativo en el estator que induce corrientes en el rotor, generando un par que acelera el rotor hasta alcanzar una velocidad ligeramente inferior a la síncrona, con un deslizamiento típico a plena carga entre el 2 % y el 5 %.

Al alimentar el devanado trifásico del estator, se genera un campo magnético que gira a velocidad síncrona (Ns). Las líneas de flujo cortan los conductores del rotor, induciendo una fuerza electromotriz (fem) según la ley de Faraday. Si el circuito del rotor está cerrado —como ocurre en el rotor de jaula de ardilla— circula una corriente que, al interactuar con el campo del estator, produce un par electromagnético. Por la ley de Lenz, el rotor gira en el mismo sentido que el campo magnético, pero nunca alcanza la velocidad síncrona. Si el rotor llegara a igualarla, desaparecería la diferencia de velocidad y no se induciría tensión, por lo que el par sería nulo. Esta diferencia de velocidades se denomina deslizamiento (s) y es indispensable para la producción de par.

## Construcción

El motor de inducción trifásico consta de dos partes principales: el estator (parte fija) y el rotor (parte móvil). El entrehierro entre ambos es reducido, típicamente de 0,35 mm a 2 mm / 0.014 in a 0.079 in, para minimizar la corriente magnetizante.

El estator está formado por un núcleo de acero laminado con ranuras en su periferia interior donde se aloja un devanado trifásico distribuido. Este devanado se conecta a la red de alimentación y está diseñado para producir un campo magnético giratorio con un número de polos definido según la velocidad deseada.

El rotor más común es el de jaula de ardilla. Consiste en un núcleo cilíndrico de acero laminado con ranuras sesgadas inclinadas respecto al eje, en las cuales se alojan barras de aluminio o cobre unidas en ambos extremos por anillos de cortocircuito. El sesgado de las ranuras reduce el ruido magnético y ayuda a evitar puntos de par nulo durante el arranque.

## Velocidad y deslizamiento

La velocidad síncrona está determinada por la frecuencia de la red y el número de polos del devanado estatórico, expresada como:

> **Ns = 120 × f / P**

donde Ns es la velocidad síncrona en revoluciones por minuto (rpm), f la frecuencia de alimentación en Hz y P el número de polos del motor. La siguiente tabla muestra las velocidades síncronas más comunes para redes de 50 Hz y 60 Hz.

| Número de polos | Velocidad síncrona a 50 Hz / 60 Hz |
| --- | --- |
| 2 | 3000 rpm / 3600 rpm |
| 4 | 1500 rpm / 1800 rpm |
| 6 | 1000 rpm / 1200 rpm |
| 8 | 750 rpm / 900 rpm |
| 10 | 600 rpm / 720 rpm |
| 12 | 500 rpm / 600 rpm |

El deslizamiento (s) es la diferencia relativa entre la velocidad síncrona (Ns) y la velocidad real del rotor (Nr):

> **s = (Ns – Nr) / Ns**

Se expresa a menudo en porcentaje. A plena carga, el deslizamiento de motores estándar de jaula de ardilla varía entre el 1 % (motores grandes) y el 6 % (motores pequeños). La velocidad del rotor en funcionamiento es por tanto Ns × (1 – s).

## Factor de potencia

El factor de potencia de un motor de inducción trifásico varía desde valores tan bajos como 0,15 en vacío hasta 0,84‑0,91 a plena carga, en función de la potencia nominal y el número de polos. El motor siempre opera con factor de potencia en atraso (inductivo), ya que requiere corriente reactiva para crear el campo magnético.

El factor de potencia (PF) se define como la relación entre la potencia activa (P) y la potencia aparente (S), o bien como el coseno del ángulo de fase (φ) entre tensión y corriente:

> **PF = P / S = cos φ**

Para un sistema trifásico equilibrado, se calcula a partir de las magnitudes de línea:

> **PF = P / (√3 × U × I)**

donde P es la potencia activa en vatios (W), U la tensión de línea en voltios (V) e I la corriente de línea en amperios (A).

La tabla siguiente presenta los factores de potencia típicos para motores de 1800 rpm (4 polos, 60 Hz) en función del nivel de carga y el rango de potencia.

| Rango de potencia (hp / kW) | Velocidad (rpm) | Factor de potencia en vacío | Factor de potencia a 1/4 de carga | Factor de potencia a 1/2 carga | Factor de potencia a 3/4 de carga | Factor de potencia a plena carga |
| --- | --- | --- | --- | --- | --- | --- |
| 0 – 5 hp / 0 – 3,73 kW | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,72 | 0,82 | 0,84 |
| 5 – 20 hp / 3,73 – 14,91 kW | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,74 | 0,84 | 0,86 |
| 20 – 100 hp / 14,91 – 74,57 kW | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,79 | 0,86 | 0,89 |
| 100 – 300 hp / 74,57 – 223,7 kW | 1800 | 0,15 – 0,20 | 0,50 – 0,60 | 0,81 | 0,88 | 0,91 |

Estos valores muestran cómo el factor de potencia mejora sensiblemente al aumentar la carga y la potencia nominal del motor. Operar un motor de gran tamaño con escasa carga provoca un factor de potencia bajo y penalizaciones en la factura eléctrica.

## Par y características de arranque

El par de arranque típico de un motor de inducción trifásico de jaula de ardilla estándar (diseño NEMA B o equivalente) es de 150 % a 200 % del par nominal, con una corriente de arranque de 6 a 8 veces la corriente nominal a plena carga.

Al conectar el motor directamente a la red, el pico de corriente es elevado porque el rotor está parado, el deslizamiento es unitario y la impedancia es mínima. A medida que el rotor acelera, la corriente disminuye hasta estabilizarse en el valor de régimen. La curva característica par‑velocidad presenta un par de arranque definido (Tstart), un par máximo (Tmax) que puede alcanzar 250‑300 % del nominal, y el par nominal (Tn) que se entrega a la velocidad de trabajo con el deslizamiento de diseño.

El motor es inherentemente autoarrancante; no necesita devanados auxiliares ni dispositivos especiales para iniciar el giro, siempre que la carga opuesta en el arranque no exceda el par disponible.

## Eficiencia y pérdidas

La eficiencia de un motor de inducción trifásico oscila entre el 80 % para potencias inferiores a 5 kW (≈ 6,7 hp) y supera el 95 % en máquinas de gran potencia, dependiendo del número de polos y la clase de aislamiento. Las pérdidas se clasifican en pérdidas en el cobre del estator y rotor (I²R), pérdidas en el núcleo magnético (histéresis y corrientes parásitas), pérdidas mecánicas por fricción y ventilación, y pérdidas adicionales dispersas.

Los motores de alta eficiencia (IE3, IE4) reducen las pérdidas mediante mayor cantidad de cobre, acero magnético de mejores propiedades y optimización del diseño del rotor, alcanzando eficiencias hasta un 3‑5 % superiores a las de motores estándar.

## Aplicaciones típicas

Gracias a su robustez, economía y mínimo mantenimiento, los motores de inducción trifásicos se utilizan masivamente en bombas centrífugas, ventiladores, compresores, cintas transportadoras, agitadores, máquinas herramienta, sistemas de elevación y todo tipo de maquinaria industrial fija. Constituyen la opción preferente cuando se dispone de alimentación trifásica y se requiere accionamiento a velocidad fija.

## Ventajas y limitaciones

Ventajas fundamentales:
- Autoarranque sin necesidad de devanados auxiliares.
- Construcción simple y robusta, con una sola pieza móvil (rotor) sin escobillas ni conmutador.
- Bajo costo de adquisición y mantenimiento mínimo.
- Amplia gama de potencias y velocidades normalizadas.
- Funcionamiento silencioso y con baja generación de interferencias electromagnéticas.

Limitaciones principales:
- Elevada corriente de arranque (6 a 8 veces la nominal), que puede provocar caídas de tensión en redes débiles.
- Bajo factor de potencia, especialmente con cargas parciales, que obliga a la compensación reactiva.
- Velocidad dependiente de la frecuencia de red y de la carga, con regulación limitada sin variador de frecuencia.
- Deslizamiento variable con la carga, lo que impide un control preciso de la posición sin sistemas adicionales.

## Preguntas frecuentes (FAQ)

### ¿Qué es el deslizamiento y por qué es necesario?
El deslizamiento es la diferencia relativa entre la velocidad síncrona del campo magnético y la velocidad del rotor. Es indispensable porque sin diferencia de velocidad no se induciría tensión en el rotor y, por tanto, no se generaría par.

### ¿Cómo se invierte el sentido de giro de un motor de inducción trifásico?
Basta con intercambiar dos de las tres fases de alimentación. Esto invierte la secuencia del campo giratorio y, en consecuencia, el sentido de rotación del rotor.

### ¿Por qué el factor de potencia es tan bajo en vacío?
En vacío, el motor consume principalmente corriente reactiva para magnetizar el núcleo, mientras que la potencia activa es muy reducida. La relación entre potencia activa y aparente se desploma, resultando en factores de potencia de 0,15 a 0,20.

### ¿Qué ocurre si el motor trabaja constantemente con baja carga?
Un motor sobredimensionado operando a carga parcial presenta bajo rendimiento y factor de potencia muy pobre. Se desperdicia energía y, si el factor de potencia cae por debajo de 0,95, las compañías eléctricas suelen aplicar penalizaciones económicas.

### ¿Se puede variar la velocidad de un motor de inducción trifásico?
Sí, mediante un variador de frecuencia (VFD) que ajusta la frecuencia y la tensión de alimentación, permitiendo un control preciso de la velocidad. Es la solución más eficiente para aplicaciones que requieren velocidad variable.

### ¿Cuál es la vida útil esperada de un motor de inducción trifásico?
Con un mantenimiento básico (limpieza, lubricación de rodamientos y control de temperatura), estos motores pueden superar fácilmente las 20 000 horas de operación continua, y en aplicaciones bien cuidadas alcanzan más de 50 000 horas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/power-factor-electrical-motor-d_654.html
- **electrical4u.com**: https://www.electrical4u.com/working-principle-of-three-phase-induction-motor/
