---
title: "Control de velocidad en motores DC"
sidebar:
  label: "Control de velocidad en motores DC"
description: "Ficha tecnica: Control de velocidad en motores DC"
keywords: ["DC motor speed control methods", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motors-dc"
subcategory: "dc-motor-speed-control"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La velocidad de un motor DC se controla ajustando la tensión aplicada al inducido, la resistencia del circuito de armadura o el flujo magnético por polo, según la ecuación fundamental de velocidad. El control puede ser manual o automatizado y se clasifica en métodos por armadura y por campo, aplicables a motores shunt, serie y compound.

La velocidad de un motor DC se rige por la fuerza contraelectromotriz y la tensión aplicada. La ecuación fundamental de velocidad relaciona la tensión de armadura, la caída por resistencia, la constante constructiva del motor y el flujo por polo.

> **N = (V - IₐRₐ) / (kφ)**

| Variable | Descripción | Unidad |
| --- | --- | --- |
| N | Velocidad del motor | rpm o rad/s |
| V | Tensión aplicada al inducido | V |
| Iₐ | Corriente de armadura | A |
| Rₐ | Resistencia del circuito de armadura | Ω |
| k | Constante constructiva del motor | — |
| φ | Flujo magnético por polo | Wb |

El control de velocidad actúa sobre tres parámetros independientes: la tensión de armadura V, la resistencia externa en el circuito de armadura Rₐ y el flujo por polo φ. Los dos primeros afectan exclusivamente al circuito de inducido y constituyen los métodos de control por armadura. El tercero modifica el campo magnético y define los métodos de control por campo.

## Métodos de control para motor DC shunt

Los motores DC shunt permiten control de velocidad por armadura y por campo. La elección del método depende del rango de velocidad requerido, la eficiencia energética admisible y las características de par demandadas por la carga.

### Control por armadura

El control por armadura en motor DC shunt varía la tensión aplicada al inducido manteniendo el flujo de campo constante. La velocidad es directamente proporcional a la tensión de armadura y el par máximo permanece inalterado.

**Control por resistencia de armadura:** consiste en insertar una resistencia variable en serie con el inducido. Este método reduce la tensión efectiva en bornes del motor y permite disminuir la velocidad por debajo de la velocidad nominal. La potencia disipada en la resistencia de control hace que el método sea ineficiente para operación continua con cargas elevadas. Se utiliza principalmente en arrancadores y aplicaciones con reducción temporal de velocidad en condiciones de carga ligera.

**Control por tensión de armadura:** emplea una fuente de tensión variable independiente. El método Ward Leonard, introducido por Harry Ward Leonard en 1891, constituye la implementación clásica: un grupo motor-generador donde un motor AC de velocidad constante impulsa un generador DC con excitación de campo ajustable. La tensión del generador alimenta directamente el inducido del motor a controlar. Pequeñas variaciones en la corriente de campo del generador producen cambios amplificados en la tensión de salida, logrando regulación suave desde cero hasta velocidad máxima en ambos sentidos de giro. El sistema puede incorporar un volante de inercia para estabilizar fluctuaciones de carga; esta variante se conoce como control Ward Leonard Ilgner.

| Parámetro | Rango típico |
| --- | --- |
| Rango de velocidad | 0 a velocidad nominal |
| Par disponible | Constante en todo el rango |
| Eficiencia | Alta en control por tensión, baja con resistencia en serie |
| Inversión de giro | Suave y controlada |

### Control por campo

El control por campo en motor DC shunt varía el flujo magnético mediante la inserción de un reóstato en el circuito de campo. Al reducir la corriente de excitación, disminuye el flujo por polo y la velocidad aumenta por encima de la velocidad nominal.

La potencia de excitación representa típicamente entre el 2 % y el 5 % de la potencia nominal del motor, por lo que las pérdidas en el reóstato de campo son reducidas. El par disponible disminuye inversamente proporcional al aumento de velocidad, manteniendo la potencia aproximadamente constante. El debilitamiento de campo excesivo puede provocar inestabilidad operativa y conmutación deficiente en el colector.

| Parámetro | Rango típico |
| --- | --- |
| Rango de velocidad | Velocidad nominal hasta 3 a 5 veces la nominal |
| Par disponible | Disminuye al aumentar la velocidad |
| Potencia | Aproximadamente constante |
| Pérdidas en control | Bajas (solo el circuito de campo) |

## Métodos de control para motor DC serie

El motor DC serie presenta características de velocidad y par inversamente proporcionales a la carga. El control de velocidad se implementa mediante métodos de armadura y de campo, con particular atención al riesgo de embalamiento en vacío.

### Control por armadura

**Control por resistencia de armadura:** una resistencia variable conectada en serie con el motor reduce la tensión aplicada al inducido. Este método es económico en aplicaciones de par constante como grúas, puentes levadizos y tracción ferroviaria, donde la reducción de velocidad ocurre bajo carga ligera y las pérdidas en la resistencia son aceptables.

**Control por armadura derivada:** combina un reóstato en paralelo con el inducido y otro en serie. El reóstato serie R₁ ajusta la tensión de armadura, mientras que el reóstato paralelo R₂ deriva parte de la corriente, variando la excitación del campo serie. El rango de control abarca velocidad inferior a la nominal con amplio margen de regulación, aunque las pérdidas en los reóstatos reducen la eficiencia global.

**Control por tensión de armadura:** requiere una fuente de tensión variable independiente para el motor serie. Su costo y complejidad limitan la aplicación práctica, siendo poco frecuente frente a otras alternativas.

| Método | Rango de velocidad | Aplicación típica |
| --- | --- | --- |
| Resistencia en serie | Por debajo de la nominal | Grúas, tracción |
| Armadura derivada | Amplio rango bajo nominal | Procesos industriales |
| Tensión variable | 0 a nominal | Aplicaciones especiales |

### Control por campo

**Método del derivador de campo:** conecta una resistencia variable (derivador) en paralelo con el devanado de campo serie. El derivador desvía una porción de la corriente de armadura, reduciendo el flujo de excitación y elevando la velocidad por encima de la nominal. A menor resistencia del derivador, mayor velocidad. Este método es típico en accionamientos eléctricos donde se requiere aumento rápido de velocidad al disminuir la carga.

**Control por tomas de campo:** el devanado de campo serie incorpora derivaciones o tomas que permiten variar el número efectivo de espiras por las que circula la corriente de excitación. Al reducir el número de espiras activas, disminuye el flujo y aumenta la velocidad. Esta técnica se emplea en sistemas de tracción eléctrica.

| Método | Principio | Velocidad resultante |
| --- | --- | --- |
| Derivador de campo | Resistencia en paralelo con campo | Superior a la nominal |
| Tomas en el campo | Reducción de espiras activas | Superior a la nominal |

## Método Ward Leonard

El sistema Ward Leonard, introducido por Harry Ward Leonard en 1891, es un accionamiento de velocidad variable para motores DC basado en un grupo motor-generador rotativo. Un motor primario de velocidad constante —típicamente un motor de inducción AC o síncrono— impulsa un generador DC cuyo devanado de campo recibe una señal de control de baja potencia. La salida de armadura del generador alimenta directamente el motor DC que mueve la carga.

El principio de amplificación del conjunto permite que variaciones reducidas en la corriente de campo del generador produzcan cambios significativos en la tensión y potencia entregadas al motor. La velocidad se controla desde cero hasta el valor nominal en ambos sentidos de giro mediante la inversión de la corriente de campo. El control adicional por debilitamiento de campo del motor permite extender la velocidad por encima de la nominal.

La variante Ward Leonard Ilgner incorpora un volante de inercia acoplado entre un motor de inducción de rotor bobinado y el generador, desacoplando las demandas bruscas de carga de la red de alimentación AC. El conjunto motor de inducción, volante y generador se denomina grupo Ilgner.

| Característica | Valor |
| --- | --- |
| Rango de velocidad | 0 a velocidad nominal (control por tensión), ampliable por campo |
| Par de arranque | Par nominal disponible desde velocidad cero |
| Inversión de giro | Suave, por inversión de campo del generador |
| Eficiencia típica | 70 % a 85 % (incluye pérdidas del grupo rotativo) |

El sistema Ward Leonard fue extensamente utilizado en ascensores, máquinas de extracción minera, tracción naval y radares militares (como el SCR-584 en 1942) hasta la llegada de los variadores estáticos con tiristores en la década de 1980.

## Comparación de métodos de control

Los métodos de control se diferencian en rango de velocidad, eficiencia, tipo de par generado y costo. La selección adecuada depende de la aplicación y de las características de la carga.

| Método | Motor | Rango de velocidad | Eficiencia | Costo relativo |
| --- | --- | --- | --- | --- |
| Resistencia de armadura | Shunt / Serie | Por debajo de nominal | Baja (pérdidas I²R) | Bajo |
| Tensión de armadura variable | Shunt / Serie | 0 a nominal | Media - alta | Medio - alto |
| Debilitamiento de campo | Shunt | Nominal a 3-5× nominal | Alta | Bajo |
| Derivador de campo | Serie | Por encima de nominal | Media | Bajo |
| Tomas de campo | Serie | Por encima de nominal | Alta | Bajo |
| Ward Leonard | Shunt | 0 a nominal, reversible | Media | Alto |

## Velocidad vs. número de polos y frecuencia

En motores DC con excitación independiente o shunt, la velocidad base depende del número de polos magnéticos y de la frecuencia de alimentación cuando se utiliza conversión AC/DC previa. La tabla siguiente muestra la velocidad síncrona y a plena carga para configuraciones típicas de 2, 4, 6 y 8 polos a frecuencias de 50 Hz y 60 Hz.

| Polos | 50 Hz — Síncrona (rpm / rad/s) | 50 Hz — Plena carga (rpm / rad/s) | 60 Hz — Síncrona (rpm / rad/s) | 60 Hz — Plena carga (rpm / rad/s) |
| --- | --- | --- | --- | --- |
| 2 | 3000 rpm / 314 rad/s | 2850 rpm / 298 rad/s | 3600 rpm / 377 rad/s | 3450 rpm / 361 rad/s |
| 4 | 1500 rpm / 157 rad/s | 1425 rpm / 149 rad/s | 1800 rpm / 188 rad/s | 1725 rpm / 181 rad/s |
| 6 | 1000 rpm / 105 rad/s | 950 rpm / 99 rad/s | 1200 rpm / 126 rad/s | 1150 rpm / 120 rad/s |
| 8 | 750 rpm / 79 rad/s | 700 rpm / 73 rad/s | 900 rpm / 94 rad/s | 850 rpm / 89 rad/s |

El deslizamiento entre la velocidad síncrona y la de plena carga oscila típicamente entre el 3 % y el 7 % para motores de inducción estándar. En configuraciones Ward Leonard con motor síncrono como primario, la velocidad del generador se mantiene constante independientemente de las variaciones de carga.

## Preguntas frecuentes (FAQ)

### ¿Qué método de control permite la máxima reducción de velocidad en un motor DC shunt?

El control por tensión de armadura con fuente variable —como el sistema Ward Leonard— permite operar desde 0 rpm / 0 rad/s hasta la velocidad nominal de 1500 rpm / 157 rad/s (motor de 4 polos a 50 Hz), manteniendo el par nominal en todo el rango. El control por resistencia de armadura reduce la velocidad pero con pérdidas crecientes a medida que la velocidad disminuye.

### ¿Por qué el control por campo solo aumenta la velocidad y no la reduce?

El flujo magnético φ aparece en el denominador de la ecuación de velocidad N = (V - IₐRₐ) / (kφ). Reducir el flujo mediante debilitamiento de campo aumenta la velocidad; para reducirla sería necesario aumentar el flujo por encima del valor nominal, lo cual satura el circuito magnético y eleva las pérdidas en el hierro sin beneficio práctico. El debilitamiento de campo alcanza típicamente de 3 a 5 veces la velocidad nominal.

### ¿Cuál es el riesgo principal del control de velocidad en motores DC serie?

El motor DC serie tiende al embalamiento cuando opera sin carga o con carga muy reducida, ya que la disminución de la corriente de armadura reduce el flujo de campo y la velocidad aumenta descontroladamente. Una velocidad excesiva —que puede superar 5000 rpm / 524 rad/s en motores pequeños— provoca daños mecánicos por fuerza centrífuga en el rotor y desgaste severo del colector y las escobillas.

### ¿Qué eficiencia tiene el método de control por resistencia de armadura?

La eficiencia del control por resistencia de armadura disminuye proporcionalmente a la reducción de velocidad. Para operar al 50 % de la velocidad nominal (por ejemplo, 750 rpm / 79 rad/s en un motor de 4 polos y 50 Hz con velocidad base de 1500 rpm / 157 rad/s), la potencia disipada en la resistencia equivale a la potencia entregada a la carga, resultando en una eficiencia inferior al 50 %.

### ¿En qué aplicaciones se utilizó masivamente el sistema Ward Leonard?

El sistema Ward Leonard se utilizó masivamente en ascensores de pasajeros y montacargas hasta la década de 1980, máquinas de extracción minera, tracción de locomotoras diésel-eléctricas patentadas por H.W. Leonard en 1903, y servomecanismos de precisión como los radares SCR-584 en la Segunda Guerra Mundial. Su capacidad de amplificación en el rango de multi-kilovatios y el control suave de velocidad sin escalones justificaron su adopción generalizada.

### ¿Qué ventaja ofrece el control por derivador de campo en motores DC serie?

El derivador de campo permite aumentar la velocidad por encima de la nominal de forma sencilla y con pocos componentes adicionales. Al conectar una resistencia variable en paralelo con el campo serie, se desvía una fracción de la corriente de excitación —típicamente entre el 10 % y el 40 %—, reduciendo el flujo magnético y elevando la velocidad. Es un método particularmente efectivo en tracción eléctrica donde la velocidad debe incrementarse al reducirse la carga.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-frequency-speed-d_456.html
- **electrical4u.com**: https://www.electrical4u.com/speed-control-of-dc-motor/
