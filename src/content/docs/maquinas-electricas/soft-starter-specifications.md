---
title: "Arrancador suave especificaciones"
sidebar:
  label: "Arrancador suave especificaciones"
description: "Ficha tecnica: Arrancador suave especificaciones"
keywords: ["soft starter motor specifications", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "soft-starter"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La corriente de arranque se reduce típicamente a un rango de 1,5 a 4 veces la corriente nominal a plena carga, dependiendo de la configuración del equipo. Los arrancadores suaves utilizan tiristores en configuración antiparalelo para controlar la tensión aplicada al motor durante la fase de aceleración, minimizando los esfuerzos mecánicos y eléctricos.

El arrancador suave opera mediante el control del ángulo de disparo de pares de tiristores conectados en antiparalelo en serie con cada fase del motor. Durante el arranque, la tensión se incrementa progresivamente desde un valor inicial ajustable hasta la tensión nominal de línea, limitando la corriente de irrupción y el par de arranque.

La ecuación fundamental que rige el comportamiento del arrancador suave es:

> **I_arranque = V_controlada / Z_estator**, donde **V_controlada** se obtiene mediante el recorte de fase de la tensión de alimentación, y **Z_estator** representa la impedancia equivalente del motor en reposo.

| Variable | Descripción |
|---|---|
| V_controlada | Tensión eficaz controlada aplicada al motor, en V |
| V_nominal | Tensión de alimentación nominal de la red, en V |
| Z_estator | Impedancia del devanado del estator en reposo, en Ω |
| I_nominal | Corriente nominal a plena carga del motor, en A |
| I_arranque_DOL | Corriente de arranque con arranque directo, típicamente 6 a 10 veces I_nominal |

El control se realiza electrónicamente, sin partes móviles, y permite rampas de aceleración y desaceleración programables. En aplicaciones trifásicas, el control óptimo se obtiene con tiristores en las tres fases, evitando desequilibrios de corriente. Al alcanzar la velocidad nominal, un contactor de bypass interno o externo puentea los tiristores para eliminar pérdidas por conducción en estado estacionario.

## Características técnicas

Las especificaciones eléctricas y mecánicas de los arrancadores suaves comerciales cubren un amplio rango de potencias y tensiones. La tabla siguiente resume los valores característicos típicos.

| Parámetro | Valor típico |
|---|---|
| Tensión de alimentación (trifásica) | 200 a 690 V CA ±10 % |
| Frecuencia de red | 50/60 Hz ±2 Hz |
| Potencia nominal del motor aplicable | 4 kW a 1200 kW / 5,4 HP a 1609 HP |
| Corriente nominal del arrancador | 8 A a 1400 A |
| Corriente de arranque ajustable | 1,5 a 7 × I_nominal |
| Par de arranque ajustable | 0,1 a 1,0 × par nominal del motor |
| Tiempo de rampa de aceleración | 0,5 s a 180 s |
| Tiempo de rampa de desaceleración (parada suave) | 0 s a 60 s |
| Tensión inicial de arranque (pedestal) | 10 % a 70 % de V_nominal |
| Temperatura ambiente de operación | -10 °C a +50 °C / 14 °F a 122 °F |
| Altitud máxima sin derateo | 1000 m / 3281 ft sobre el nivel del mar |
| Grado de protección (envolvente estándar) | IP00 a IP54 |

## Parámetros de configuración

Los arrancadores suaves electrónicos ofrecen múltiples ajustes para adaptar el arranque a las características de la carga. Los parámetros más relevantes se listan a continuación.

| Parámetro | Rango de ajuste | Descripción |
|---|---|---|
| Tensión inicial de arranque | 10 % a 70 % de V_nominal | Valor de tensión aplicada al inicio de la rampa; define el par de arranque inicial. |
| Tiempo de rampa de aceleración | 0,5 s a 180 s | Duración del incremento lineal de tensión hasta V_nominal. |
| Límite de corriente de arranque | 1,5 a 7 × I_nominal | Corriente máxima permitida durante la aceleración; el controlador mantiene este valor constante. |
| Par de arranque máximo | 0,1 a 1,0 × par nominal | Limitación del par mediante control de la tensión. |
| Tiempo de rampa de desaceleración | 0 s a 60 s | Duración de la reducción gradual de tensión para parada suave en bombas o cintas transportadoras. |
| Tensión final de desaceleración | 0 % a 40 % de V_nominal | Tensión a la cual se desconecta el motor al finalizar la rampa de parada. |
| Nivel de protección por sobrecarga | Clase 5 a 30 según IEC 60947-4-2 | Curva de disparo térmico electrónico ajustable a la clase de aislamiento del motor. |

## Aplicaciones típicas

Las especificaciones del arrancador suave lo hacen adecuado para aplicaciones donde se requiere limitar la corriente de irrupción y el impacto mecánico del arranque directo. Las aplicaciones más frecuentes se detallan en la tabla siguiente.

| Aplicación | Beneficio principal del arranque suave |
|---|---|
| Bombas centrífugas | Eliminación del golpe de ariete; reducción de sobrepresiones en tuberías hasta en un 90 %. |
| Ventiladores y sopladores | Evita deslizamiento de correas; arranque sin picos de presión de aire. |
| Compresores de tornillo | Minimiza el desgaste en cojinetes y engranajes; reduce la corriente de irrupción a 3-4 × I_nominal. |
| Cintas transportadoras | Aceleración progresiva que evita tirones y daños en el material transportado. |
| Trituradoras y molinos | Limitación del par de arranque; protección contra bloqueo del rotor. |
| Bombas de pozo profundo | Reducción de la tensión mecánica en ejes y acoplamientos; arranque controlado para largas columnas de bombeo. |

| Corriente de arranque como múltiplo de I_nominal, según método | |
|---|---|
| Arranque directo (DOL) | 6 a 10 × I_nominal, hasta 15 × en motores de alta eficiencia |
| Arranque estrella-triángulo | ~2 a 3 × I_nominal (aproximadamente 1/3 del arranque directo) |
| Arrancador suave | 1,5 a 4 × I_nominal (configuración típica); programable hasta 7 × I_nominal |
| Variador de frecuencia | 0,5 a 1,5 × I_nominal |

## Ventajas y limitaciones

| Ventajas | Limitaciones |
|---|---|
| Reduce picos de corriente de arranque hasta un 70 % comparado con arranque directo (DOL). | No permite control de velocidad en régimen permanente; solo opera durante arranque y parada. |
| Minimiza tensiones mecánicas en acoplamientos, engranajes y correas, extendiendo la vida útil del sistema. | Genera calor en los tiristores durante la fase de aceleración; requiere ventilación adecuada o bypass en estado estable. |
| Elimina el golpe de ariete en sistemas de bombeo mediante rampa de parada suave. | La distorsión armónica durante el arranque puede ser significativa si el tiempo de aceleración es prolongado. |
| Instalación sencilla y menor costo comparado con variadores de frecuencia para funciones de arranque/parada. | No apto para aplicaciones con alto par de arranque permanente (ej. cargas de fricción estática muy elevada). |
| Configuración simple con pocos parámetros; algunos modelos incluyen autoaprendizaje de la carga. | El control de par en motores de rotor bobinado es limitado; se prefiere reóstato de rotor para aplicaciones de muy alto par. |

## Comparativa con otros métodos de arranque

| Método de arranque | Corriente de irrupción típica | Par de arranque típico | Costo relativo | Eficiencia energética en estado estable |
|---|---|---|---|---|
| Arranque directo (DOL) | 6 a 10 × I_nominal (100 %) | 1,5 a 3 × par nominal (100 %) | Bajo | Alta (sin pérdidas adicionales) |
| Arranque estrella-triángulo | ~2 a 3,3 × I_nominal (aprox. 33 %) | ~0,5 a 1 × par nominal (aprox. 25-33 %) | Medio-bajo | Alta (sin pérdidas en estado estable) |
| Arrancador suave | 1,5 a 4 × I_nominal (ajustable) | 0,1 a 1 × par nominal (ajustable) | Medio | Alta (con bypass en estado estable); pérdidas en tiristores < 1,5 W/A durante arranque |
| Variador de frecuencia (VFD) | 0,5 a 1,5 × I_nominal | 1 × par nominal disponible desde baja velocidad | Alto | Media-alta (pérdidas en etapa de potencia 2-5 % de la carga) |

| Caída de tensión estimada en la red durante el arranque, para un transformador de 500 kVA | |
|---|---|
| Arranque directo (6 × I_nominal, motor 55 kW) | Caída de tensión superior al 15 % |
| Arrancador suave (3 × I_nominal, mismo motor) | Caída de tensión inferior al 10 % |

## Preguntas frecuentes (FAQ)

### ¿Cuál es el rango típico de reducción de corriente de arranque con un arrancador suave?
Un arrancador suave reduce típicamente la corriente de arranque de 6 a 10 veces la corriente nominal (arranque directo) a un valor ajustable entre 1,5 y 4 veces la corriente nominal, lo que representa una reducción del 60 % al 75 %. En aplicaciones de bombas y ventiladores, la corriente de arranque se configura comúnmente a 3 veces la corriente nominal, suficiente para vencer la inercia sin provocar caídas de tensión excesivas.

### ¿Cómo se especifica el tiempo de rampa de aceleración máximo en un arrancador suave?
El tiempo de rampa de aceleración máximo se especifica típicamente en 180 segundos, dependiendo del modelo y la potencia. Para motores de hasta 100 kW / 134 HP, los tiempos de rampa se programan comúnmente entre 5 y 30 segundos; para motores de gran potencia, superiores a 500 kW / 670 HP, pueden extenderse hasta 120 segundos para limitar el estrés térmico en los tiristores y en el motor.

### ¿Cuál es la temperatura ambiente máxima de operación sin reducción de prestaciones?
La temperatura ambiente máxima de operación sin derateo de corriente es de 40 °C / 104 °F para la mayoría de los arrancadores suaves estándar. Entre 40 °C y 50 °C / 104 °F y 122 °F, se aplica un factor de reducción típico de 0,8 % por cada grado Celsius adicional, según indican las curvas de derateo de los fabricantes.

### ¿Qué clase de protección por sobrecarga incorpora un arrancador suave?
Los arrancadores suaves electrónicos incorporan protección por sobrecarga ajustable de clase 5 a 30, conforme a la norma IEC 60947-4-2. La clase 10 (disparo en 10 segundos a 6 veces la corriente nominal) es la más utilizada para motores de uso general; la clase 20 se selecciona para motores de alta inercia con tiempos de arranque superiores a 10 segundos.

### ¿Qué grado de protección IP es estándar en arrancadores suaves?
Los arrancadores suaves en versión de chasis abierto presentan típicamente grado de protección IP00, mientras que las versiones encapsuladas alcanzan IP20 o IP54. Para instalación en tableros eléctricos, la protección IP20 suele ser suficiente; en ambientes con polvo o humedad, se requiere IP54, logrado mediante envolventes con empaquetaduras y prensaestopas.

### ¿Cuál es la potencia máxima de motor que puede controlar un arrancador suave monofásico?
Los arrancadores suaves monofásicos controlan motores de hasta 5 kW / 6,7 HP típicamente, con corrientes nominales máximas de 25 A a 230 V CA. Para potencias superiores, se emplean arrancadores suaves trifásicos, que cubren motores desde 4 kW / 5,4 HP hasta más de 1200 kW / 1609 HP en media tensión.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/star-delta-starter/
