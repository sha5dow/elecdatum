---
title: "Centro de control de motores MCC fundamentos"
sidebar:
  label: "Centro de control de motores MCC fundamentos"
description: "Ficha tecnica: Centro de control de motores MCC fundamentos"
keywords: ["motor control center MCC basics components", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "switchgear"
subcategory: "mcc-basics"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un centro de control de motores (MCC) concentra en una ubicación centralizada el arranque, la protección y el control de múltiples motores eléctricos, típicamente entre 10 y 50 motores en una sola instalación. De acuerdo con el Código Eléctrico Nacional (NEC), un MCC es un ensamblaje de una o más secciones cerradas que comparten un bus de potencia común y contienen principalmente unidades de control de motores. Estos equipos se emplean en grandes edificios comerciales e industriales donde numerosos motores trifásicos de baja tensión (220 V a 600 V) deben ser operados desde un punto único, como salas de máquinas o cuartos eléctricos. Existen también MCC de media tensión para motores de mayor potencia, que trabajan en rangos de 2300 V a 15 000 V y utilizan contactores de vacío.

## Componentes y estructura

Un MCC está formado por uno o varios gabinetes metálicos verticales que alojan barras de potencia comunes y compartimentos extraíbles para los controladores de motor. La estructura típica incluye una barra principal trifásica de cobre o aluminio, barras de distribución y bandejas para cables de control y potencia. Cada unidad de control de motor (bucket o cubículo) es un módulo extraíble que contiene los siguientes elementos:

- Interruptor automático o fusibles de protección contra cortocircuitos.
- Contactor electromagnético o arrancador de estado sólido.
- Relé de sobrecarga (térmico o electrónico).
- Seccionador para aislamiento del circuito.
- Bornes de conexión para el motor y el circuito de control.
- Opcionalmente, transformador de control, pilotos luminosos, pulsadores de arranque/paro, variador de frecuencia (VFD) o PLC integrado.

Cada módulo se conecta al bus de potencia mediante conectores desenchufables, lo que facilita el mantenimiento o la sustitución sin desenergizar todo el MCC. Las unidades de mayor tamaño pueden atornillarse de forma fija. El cableado de campo accede por la parte superior o inferior de los gabinetes.

## Tipos de arrancadores en MCC

Los MCC integran diversos arrancadores según la necesidad de control y protección del motor:

- **Arrancador directo (DOL)**: Conecta el motor directamente a la red, aplicando plena tensión. Es el método más sencillo y económico, pero genera una corriente de arranque de 5 a 8 veces la corriente nominal. Se utiliza en motores pequeños donde la caída de tensión admisible lo permita.
- **Arrancador estrella-triángulo**: Reduce la corriente de arranque a un tercio aproximadamente, conectando el motor primero en estrella y luego en triángulo.
- **Arrancador suave (soft starter)**: Controla electrónicamente la tensión aplicada al motor para limitar la corriente y el par de arranque.
- **Variador de frecuencia (VFD)**: Permite arrancar, parar y regular la velocidad del motor variando la frecuencia y la tensión de alimentación; es la opción más versátil y eficiente.

En particular, el arrancador directo (DOL) consta de un contactor y un relé de sobrecarga, controlados por un circuito con botones de marcha y paro. La corriente de arranque elevada responde a la siguiente relación eléctrica:

> **I_a = (V – E) / R_a**

| Variable | Descripción |
|----------|-------------|
| I_a | Corriente de armadura (A) |
| V | Tensión de alimentación (V) |
| E | Fuerza contraelectromotriz (V) |
| R_a | Resistencia del devanado de armadura (Ω) |

Al inicio, la velocidad es nula y, por tanto, E = 0, lo que produce una corriente inicial muy alta que disminuye conforme el motor acelera.

## Disipación térmica

El calor generado por los equipos eléctricos es un factor crítico en el diseño del sistema de ventilación o climatización de la sala donde se instala el MCC. La tabla siguiente recoge las pérdidas de calor típicas para secciones de MCC y arrancadores de distintos tamaños en baja y media tensión.

| Componente | Pérdida de calor |
|------------|------------------|
| Sección de MCC (por módulo) | 500 W |
| Arrancador BT tamaño 00 | 50 W |
| Arrancador BT tamaño 0 | 50 W |
| Arrancador BT tamaño 1 | 50 W |
| Arrancador BT tamaño 2 | 100 W |
| Arrancador BT tamaño 3 | 130 W |
| Arrancador BT tamaño 4 | 200 W |
| Arrancador BT tamaño 5 | 300 W |
| Arrancador BT tamaño 6 | 650 W |
| Arrancador MT 200 A | 400 W |
| Arrancador MT 400 A | 1300 W |
| Arrancador MT 700 A | 1700 W |

*BT = baja tensión, MT = media tensión.*

Estos valores sirven para calcular la carga térmica total que el MCC aporta al ambiente.

## Consideraciones de instalación

La ubicación del MCC debe garantizar espacio suficiente para la operación, ventilación y mantenimiento. Se recomienda una distancia frontal mínima de 1,5 m / 5 ft para la extracción de los módulos y un espacio libre superior para el acceso de grúas si se instalan unidades pesadas. En ambientes polvorientos o corrosivos se prefiere instalar el MCC en un cuarto con aire acondicionado separado, manteniendo la temperatura ambiente por debajo de 40 °C / 104 °F y la humedad relativa controlada. Los suelos deben tener resistencia al fuego adecuada y todos los pasamuros de cables deben sellarse con barreras cortafuego.

## Normas aplicables

Los centros de control de motores se diseñan y ensayan conforme a estándares internacionales:

- **IEC 61439-1** e **IEC 61439-2**: Conjuntos de aparamenta de baja tensión.
- **UL 845**: Norma estadounidense para centros de control de motores.
- **NEMA ICS 18**: Estándares de la National Electrical Manufacturers Association para MCC.
- **NFPA 70 (NEC)**: Artículo 430 sobre motores y controladores, y artículo 409 para centros de control industrial.
- **IEEE C37.20.7**: Guía para pruebas de arco interno en equipos de media tensión.

## Preguntas frecuentes (FAQ)

### ¿Cuántos módulos de arranque puede contener un MCC?
Un MCC vertical típico puede alojar de 10 a 50 módulos extraíbles, dependiendo del tamaño de los arrancadores y de la capacidad del bus (desde 600 A hasta 3000 A).

### ¿Cuál es la pérdida de calor de un arrancador tamaño 2?
Un arrancador de baja tensión tamaño 2 disipa aproximadamente 100 W de calor al ambiente.

### ¿Qué corriente de arranque genera un arrancador directo?
Un DOL produce una corriente de arranque entre 5 y 8 veces la corriente nominal del motor, pudiendo superar los 500 A en motores de mediana potencia.

### ¿Hasta qué tensión llegan los MCC de baja tensión?
Los MCC estándar de baja tensión cubren tensiones de 220 V a 600 V; por encima se utilizan MCC de media tensión que operan hasta 15 000 V.

### ¿Cuál es la temperatura ambiente máxima recomendada para un MCC?
La temperatura ambiente no debe superar los 40 °C / 104 °F para garantizar la vida útil de los componentes electrónicos y evitar disparos térmicos.

### ¿Cuánta carga térmica aporta una sección de MCC completa?
Cada sección de MCC (sin arrancadores) disipa unos 500 W, valor que debe sumarse a los arrancadores instalados para calcular la ganancia de calor total de la sala.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/heat-gain-equipment-d_1668.html
- **electrical4u.com**: https://www.electrical4u.com/direct-online-starter-or-dol-starter/
