---
title: "Diseño de malla de tierra"
sidebar:
  label: "Diseño de malla de tierra"
description: "Ficha tecnica: Diseño de malla de tierra"
keywords: ["grounding mesh design calculation substation", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-systems"
subcategory: "grounding-mesh-design"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

En el diseño de sistemas de puesta a tierra para subestaciones, la malla de tierra es una red de conductores enterrados que garantiza la seguridad de personas y equipos durante fallas eléctricas. Su objetivo es limitar las tensiones de paso, contacto y malla a valores seguros, disipando la corriente de falla en el terreno con la menor elevación de potencial posible. Un diseño adecuado exige conocer la resistividad del suelo, la corriente máxima de falla y la geometría de la malla, siguiendo metodologías normalizadas como IEEE Std 80.

Cuando ocurre una falla a tierra en una subestación, la corriente inyectada al suelo fluye a través de la malla enterrada y se dispersa radialmente en el terreno. La resistencia no nula del suelo produce una elevación del potencial de tierra (GPR, por sus siglas en inglés) respecto a un punto remoto, siguiendo la ley de Ohm: la tensión de la malla es igual al producto de la corriente de falla por la impedancia de la malla. La malla distribuye la corriente en un área extensa, reduciendo la densidad de corriente, la impedancia total y, por tanto, los gradientes de potencial peligrosos en la superficie.

## Parámetros de diseño

El diseño de una malla de tierra parte de la corriente máxima de falla a tierra y la resistividad del suelo para determinar la sección del conductor, la profundidad de enterramiento y la geometría de la retícula.

| Parámetro | Descripción | Valor típico o rango |
| --- | --- | --- |
| Corriente máxima de falla a tierra (I_f) | Corriente que circula por la malla durante la falla de mayor magnitud | 1 kA a 63 kA (según nivel de tensión y sistema) |
| Resistividad del suelo (ρ) | Propiedad que opone resistencia al paso de corriente; varía con humedad, compactación y temperatura | 10 Ω·m a 3000 Ω·m; típico de diseño 100 Ω·m |
| Sección mínima del conductor (A) | Determinada por la capacidad térmica frente a la corriente de falla y su duración | 50 mm² a 300 mm² / 0.08 in² a 0.47 in² (cobre); mayores para acero |
| Profundidad de enterramiento (h) | Distancia desde la superficie hasta los conductores de la malla | 0,6 m a 1,0 m / 24 in a 39 in; mínimo 600 mm / 24 in |
| Espaciamiento de la retícula (D) | Separación entre conductores paralelos en la malla | 1 m a 15 m / 3.3 ft a 49 ft, según nivel de tensión y resistividad |
| Elevación máxima de potencial (GPR) | Tensión de la malla respecto a tierra remota durante la falla | Generalmente limitada por las tensiones de toque y paso permitidas |
| Tensión de malla (E_mesh) | Máxima diferencia de potencial entre un punto de la malla y el suelo dentro de la retícula | Típicamente diseñada para no superar 100 V a 600 V, según norma y protección |
| Tensión de paso (E_step) | Diferencia de potencial que puede aparecer entre los pies de una persona a 1 m de distancia | Límite típico 100 V a 300 V para fallas sostenidas |
| Tensión de contacto (E_touch) | Diferencia de potencial entre la mano y los pies de una persona que toca un objeto conectado a la malla | Límite similar a E_step, con factores de corrección por resistencia superficial |

## Fórmula de cálculo

La elevación de potencial de tierra (GPR) se estima con la ley de Ohm aplicada a la malla completa.

> **V_malla = I_f × Z_malla**

| Variable | Definición | Unidad |
| --- | --- | --- |
| V_malla | Tensión de la malla respecto a tierra remota (GPR) | V |
| I_f | Corriente de falla a tierra que circula por la malla | A |
| Z_malla | Impedancia total de la malla de tierra | Ω |

Para mallas extensas en suelos homogéneos, la resistencia de la malla se aproxima mediante la fórmula de Laurent y Niemann, y la resistencia de puesta a tierra de una malla rectangular con electrodos verticales puede calcularse como:

> **R_malla = (ρ / 4r) + (ρ / L_total)**

| Variable | Definición | Unidad |
| --- | --- | --- |
| R_malla | Resistencia de la malla | Ω |
| ρ | Resistividad del suelo | Ω·m |
| r | Radio equivalente del área cubierta por la malla (r = √(Área/π)) | m |
| L_total | Longitud total de conductores enterrados (horizontales + verticales) | m |

## Factores que afectan el diseño

El comportamiento de la malla de tierra depende de factores geológicos, constructivos y operativos.

| Factor | Efecto en la malla |
| --- | --- |
| Resistividad del suelo (ρ) | Un suelo de alta resistividad (ej. arena seca > 1000 Ω·m) eleva la impedancia de la malla, aumentando el GPR y las tensiones de toque y paso. Suelos de baja resistividad (< 100 Ω·m) favorecen la disipación. |
| Humedad y temperatura del suelo | La resistividad disminuye al aumentar la humedad; la congelación del suelo superficial puede elevar drásticamente la resistencia en capas superiores. |
| Corriente de falla y duración | Mayores corrientes y tiempos de despeje exigen conductores de mayor sección para soportar el calentamiento adiabático (I²t). |
| Geometría de la malla | Retículas con menor espaciamiento (D reducido) uniformizan el potencial superficial reduciendo las tensiones de malla y paso, a costa de mayor cantidad de conductor. |
| Capa superficial de alta resistividad | Una capa de grava triturada (10–15 cm / 4–6 in, ρ ≈ 3000 Ω·m) aumenta la resistencia en serie con el cuerpo humano, reduciendo las tensiones de toque y paso efectivas. |
| Electrodos verticales (jabalinas) | Mejoran la conexión con capas profundas de menor resistividad, reduciendo la resistencia total de la malla y controlando el GPR. |
| Conexiones y corrosión | Uniones mal soldadas o corrosión en conductores de acero incrementan la resistencia local, generando puntos calientes y gradientes peligrosos durante la falla. |

## Aplicaciones

Las mallas de tierra se instalan principalmente en subestaciones de alta y media tensión, pero también en centrales de generación, parques eólicos y cualquier instalación con equipos sensibles o riesgo de fallas de alta energía. En subestaciones se conectan a la malla los neutros de transformadores, las carcasas de interruptores, seccionadores, transformadores de corriente y tensión, estructuras metálicas, bajantes de apantallamiento y todos los equipos que puedan energizarse. Según las prácticas documentadas en fuentes especializadas, cada equipo debe contar con al menos dos conexiones a la malla desde direcciones ortogonales (x e y) para garantizar redundancia y baja impedancia. Adicionalmente, las cajas de mecanismo de seccionadores se conectan a una malla auxiliar local antes de unirse a la malla principal.

## Ventajas y limitaciones

| Ventaja | Limitación |
| --- | --- |
| Distribuye la corriente de falla en un área grande, reduciendo el GPR frente a sistemas de jabalina simple. | Requiere mayor cantidad de conductor y obra civil que electrodos verticales aislados, aumentando el costo inicial. |
| Uniformiza el potencial superficial dentro de la subestación, minimizando tensiones de malla, paso y contacto. | En terrenos de muy alta resistividad (> 2000 Ω·m) puede no alcanzar valores seguros de resistencia sin extensos movimientos de tierra o tratamientos del suelo. |
| Proporciona múltiples caminos de baja impedancia para los equipos, mejorando la fiabilidad y la protección contra sobretensiones. | Su geometría fija dificulta adaptaciones posteriores si se amplía la subestación o cambian los niveles de falla. |
| Permite combinar conductores horizontales con jabalinas verticales para acceder a capas profundas conductoras. | Requiere un estudio detallado de resistividad del suelo (modelo multicapa); las simplificaciones pueden dar lugar a diseños inseguros. |
| Al incorporar capa superficial de grava, aumenta la seguridad intrínseca frente a tensiones de toque y paso sin modificar la malla enterrada. | La corrosión galvánica entre cobre y acero enterrado exige protección o uso de materiales compatibles, aumentando la complejidad del mantenimiento. |

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre tensión de malla, tensión de paso y tensión de contacto?
La tensión de malla es la máxima diferencia de potencial entre un conductor de la malla y el suelo dentro de la retícula. La tensión de paso es la diferencia que aparece entre los pies de una persona a 1 m de distancia, y la tensión de contacto es la diferencia entre un objeto metálico conectado a la malla y el suelo en el punto donde se encuentra la persona. Las tres se limitan a valores seguros para evitar electrocución.

### ¿Por qué se coloca grava en la superficie de una subestación?
La grava triturada —normalmente una capa de 10 cm a 15 cm / 4 in a 6 in con resistividad alrededor de 3000 Ω·m— actúa como una resistencia adicional en serie con el cuerpo humano, reduciendo las corrientes que lo atravesarían durante una falla. Así se aumentan los umbrales de tensión de paso y contacto seguros sin modificar la malla enterrada.

### ¿Cómo afecta la resistividad del suelo al tamaño de la malla?
A mayor resistividad del suelo, la malla presenta mayor impedancia y eleva más el potencial de tierra (GPR). Para mantener las tensiones de toque y paso dentro de límites seguros se requiere aumentar la densidad de conductores (menor espaciamiento D) o instalar electrodos verticales profundos. En terrenos extremadamente resistivos puede ser necesario tratar químicamente el suelo o ampliar el área de la malla.

### ¿Es suficiente una sola conexión por equipo a la malla?
No. Las prácticas recomendadas indican que cada estructura metálica y cada equipo deben conectarse mediante al menos dos risers que lleguen desde direcciones ortogonales (conductores x e y de la malla). Esto asegura redundancia, reduce la impedancia de conexión y evita que la falla de una unión deje el equipo sin puesta a tierra efectiva.

### ¿Qué sección mínima debe tener el conductor de la malla?
Depende de la corriente de falla y su duración. Se calcula mediante la capacidad térmica del material (I²t). Para cobre, las secciones típicas en subestaciones de media y alta tensión van de 50 mm² / 0.08 in² a 300 mm² / 0.47 in². Conductores de acero requieren secciones mayores por su menor conductividad y mayor susceptibilidad a la corrosión.

### ¿Cuál es la profundidad mínima de enterramiento de la malla?
La profundidad mínima habitual es de 600 mm / 24 in por debajo del nivel del suelo. Si los conductores cruzan bajo zanjas de cables, tuberías o vías, se debe mantener al menos 300 mm / 12 in por debajo de dichas estructuras. Esta profundidad facilita el acceso durante la construcción y reduce el riesgo de daños mecánicos.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/earthing-of-substation-equipment/
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/multigroundedutilityneutral.pdf
