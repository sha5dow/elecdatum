---
title: "Símbolos neumáticos ISO 1219"
sidebar:
  label: "Símbolos neumáticos ISO 1219"
description: "Ficha tecnica: Símbolos neumáticos ISO 1219"
keywords: ["ISO 1219 pneumatic symbols valves cylinders", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "symbols-pneumatic"
skill: "standards-guide"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

La norma ISO 1219-1:2012 define los símbolos gráficos normalizados para sistemas de potencia por fluidos neumáticos e hidráulicos, estableciendo 4 reglas básicas de representación: cada símbolo muestra la función, no la construcción; los componentes se dibujan en estado de reposo; las conexiones se representan mediante líneas; y las posiciones de válvulas se indican con cuadrados adyacentes. La parte 2 de la norma (ISO 1219-2:2012) complementa esta documentación con las reglas para el dibujo de diagramas de circuito completos.

## Símbolos de actuadores neumáticos

| Símbolo | Descripción | Notas técnicas |
| --- | --- | --- |
| Cilindro de simple efecto, retorno por muelle | El vástago avanza por presión de aire y retrocede por fuerza del muelle interno. Carreras típicas de 25 mm a 2000 mm / 0.98 in a 78.74 in. | Presión máxima habitual 10 bar / 145 psi. |
| Cilindro de doble efecto, vástago simple | El aire comprimido actúa en ambas caras del émbolo para controlar avance y retroceso. Diámetros estándar desde 32 mm / 1.26 in hasta 320 mm / 12.6 in. | Símbolo con dos conexiones de aire y pistón sin muelle. |
| Cilindro de doble efecto, doble vástago | Dispone de vástago en ambos extremos del émbolo. Permite trabajo en ambos sentidos con la misma fuerza. Carreras simétricas típicas de 50 mm a 800 mm / 1.97 in a 31.5 in. | La fuerza disponible es igual en ambas direcciones al tener áreas efectivas idénticas. |
| Cilindro de doble efecto con amortiguación regulable | Incorpora válvulas de estrangulación en los extremos para decelerar el pistón antes del impacto final. Los tornillos de ajuste permiten modificar la velocidad de amortiguación en un rango de 0,1 m/s a 1,5 m/s / 0.33 ft/s a 4.92 ft/s. | La amortiguación neumática reduce el ruido y prolonga la vida útil del cilindro. |
| Motor neumático de giro limitado (actuador rotativo) | Convierte la presión neumática en un movimiento angular. Ángulos de giro típicos de 90°, 180° y 270°. Pares útiles desde 0,5 N·m hasta 500 N·m / 0.37 lbf·ft a 369 lbf·ft. | Se representa con un sector circular y el símbolo del aire comprimido. |
| Pinza neumática de apertura angular | Dispositivo de sujeción con dedos que se abren/cierran mediante un pistón neumático. Fuerzas de cierre desde 50 N a 2000 N / 11.24 lbf a 449.6 lbf a 6 bar / 87 psi. | Símbolo similar al cilindro de doble efecto pero con indicación del mecanismo de pinza. |

## Símbolos de válvulas direccionales

| Símbolo | Descripción | Notas técnicas |
| --- | --- | --- |
| Válvula 2/2, normalmente cerrada (N.C.) | Dos conexiones y dos posiciones; en reposo bloquea el paso. Accionamiento por pulsador, retorno por muelle. Caudales nominales de 50 Nl/min a 5000 Nl/min / 1.77 scfm a 176.6 scfm. | El cuadrado de la derecha indica la posición de reposo sin flujo. |
| Válvula 3/2, normalmente abierta (N.A.) | Tres conexiones y dos posiciones; en reposo permite el paso de 1 hacia 2. Accionamiento neumático con retorno por muelle. Presión de pilotaje mínima 1,5 bar / 21.8 psi. | La vía 3 queda bloqueada en reposo y conectada a escape en posición activa. |
| Válvula 4/2 monoestable | Cuatro conexiones y dos posiciones. Controla un cilindro de doble efecto con una sola bobina o piloto. Caudales hasta 1200 Nl/min / 42.4 scfm. | En reposo conecta presión a una cámara y la otra a escape; al activar se invierten las conexiones. |
| Válvula 5/2 biestable | Cinco conexiones y dos posiciones. Dispone de dos pilotos independientes; mantiene la última posición al desaparecer la señal. Tiempo de conmutación típico 10 ms a 25 ms. | Los dos escapes permiten regular la velocidad de cada cámara del cilindro por separado. |
| Válvula 5/3, centro cerrado | Cinco conexiones y tres posiciones. La posición central bloquea todas las vías (1, 2, 4, 3 y 5 aisladas). Permite detener un cilindro en cualquier punto intermedio de su carrera. Frecuencia de conmutación máxima 400 ciclos/min. | Requiere juntas de buena estanqueidad para mantener la posición bloqueada bajo carga. |
| Válvula 5/3, centro abierto a escape | Similar a la anterior pero en posición central conecta las vías 2 y 4 a escape (3 y 5) mientras la presión (1) permanece bloqueada. El cilindro queda libre de fuerzas neumáticas en la posición central. Presión máxima de trabajo 16 bar / 232 psi. | Común en aplicaciones donde se requiere movimiento manual del cilindro con el sistema detenido. |

## Símbolos de válvulas de control y bloqueo

| Símbolo | Descripción | Notas técnicas |
| --- | --- | --- |
| Válvula antirretorno (check) sin muelle | Permite el flujo libre en un sentido y bloquea en el contrario. La apertura se produce por la propia presión del fluido. Presión de apertura inferior a 0,1 bar / 1.45 psi. | Símbolo: asiento y bola sin resorte; el triángulo indica el sentido de flujo libre. |
| Válvula antirretorno con muelle | Igual que la anterior pero requiere una presión mínima de apertura, típicamente 0,5 bar a 1,0 bar / 7.25 psi a 14.5 psi, para vencer el muelle. | El muelle garantiza el cierre incluso en ausencia de presión diferencial. |
| Válvula de escape rápido | Acelera la evacuación de aire de un cilindro al conectar directamente la cámara con la atmósfera. Reduce los tiempos de retroceso en un 40% a 60% respecto a una conexión directa. | Símbolo: tres conexiones con asiento flotante que desvía el flujo al escape. |
| Válvula estranguladora unidireccional (regulador de caudal) | Permite paso libre en un sentido y restringe el caudal en el sentido opuesto mediante un tornillo de ajuste. La regulación se realiza normalmente sobre la velocidad de avance o retroceso del cilindro. Diámetros de conexión desde M5 hasta G1/2. | El símbolo muestra un estrangulador variable con un check by-pass. |
| Válvula reguladora de presión con escape | Mantiene una presión secundaria constante independientemente de las variaciones en la presión primaria. Rango de regulación típico 0,5 bar a 10 bar / 7.25 psi a 145 psi. | Incorpora un escape para liberar el exceso de presión en el secundario; símbolo con muelle ajustable y conexión de escape. |
| Selector de circuito (válvula OR) | Dispone de dos entradas y una salida; la señal de presión en cualquiera de las entradas pasa a la salida. La presión de entrada debe ser al menos 0,3 bar / 4.35 psi superior a la de salida para la conmutación. | Símbolo con dos entradas convergiendo hacia un punto y un asiento flotante interno. |

## Símbolos de accesorios y tratamiento de aire

| Símbolo | Descripción | Notas técnicas |
| --- | --- | --- |
| Filtro de aire comprimido con purga | Elimina partículas sólidas y condensado del aire comprimido. Tamaños de poro desde 5 µm / 0.0002 in hasta 40 µm / 0.0016 in. La purga puede ser manual o automática. | El símbolo muestra un contenedor con línea de entrada/salida y un drenaje inferior. |
| Lubricador de aire comprimido | Dosifica aceite en forma de niebla fina para lubricar componentes neumáticos aguas abajo. Caudal máximo de lubricación 3000 Nl/min / 105.9 scfm. Capacidad del depósito 30 cm³ a 500 cm³ / 1.83 in³ a 30.5 in³. | La gota de aceite en el símbolo indica la función de lubricación; se instala después del filtro y regulador. |
| Secador frigorífico compacto | Enfría el aire comprimido para condensar la humedad y luego lo recalienta antes de la salida. Punto de rocío a presión alcanzable +3 °C / 37.4 °F. Caudal de aire tratado desde 15 m³/h / 8.83 cfm hasta 180 m³/h / 105.94 cfm. | Símbolo genérico con intercambiador de calor y separador de condensados. |
| Unidad de mantenimiento compacta (FRL) | Combina filtro, regulador de presión y lubricador en un solo bloque. Purga semiautomática activada por pérdida de presión. Conexiones estándar G1/4, G3/8 y G1/2. Peso total 0,6 kg a 3,5 kg / 1.32 lb a 7.72 lb. | El símbolo muestra tres bloques en línea atravesados por la tubería de alimentación. |
| Presostato neumático | Conmuta un contacto eléctrico cuando la presión neumática alcanza un valor prefijado. Rango de ajuste 0,2 bar a 12 bar / 2.9 psi a 174 psi. Repetibilidad ±1% del fondo de escala. | Símbolo con línea de presión y contacto eléctrico normalmente abierto o cerrado. |
| Silenciador neumático | Reduce el ruido del escape de aire comprimido en puertos de válvulas y cilindros. Atenuación sonora de 15 dB(A) a 35 dB(A) según el material poroso interno. Conexiones desde M5 hasta G1. | El símbolo muestra un elemento en el escape de la válvula con indicación de atenuación acústica. |

## Preguntas frecuentes (FAQ)

### ¿Qué norma internacional regula los símbolos neumáticos para circuitos?

La norma ISO 1219-1:2012, revisada por última vez en 2012, regula los símbolos gráficos para sistemas de potencia por fluidos, incluyendo más de 200 símbolos neumáticos e hidráulicos. La parte 1 establece las reglas básicas y la representación de componentes, mientras que la ISO 1219-2:2012 define las reglas para los diagramas de circuito. La nomenclatura española se recoge en la UNE-EN ISO 1219-1:2012, idéntica a la versión internacional.

### ¿Cuántas posiciones y vías define una válvula 5/3 de centro cerrado?

Una válvula 5/3 de centro cerrado dispone de 5 conexiones (vías) y 3 posiciones de conmutación, con la posición central bloqueando todas las vías. La presión máxima de trabajo para este tipo de válvula es de 16 bar / 232 psi y el caudal nominal alcanza los 1200 Nl/min / 42.4 scfm en tamaños G1/4. La frecuencia de conmutación máxima es de 400 ciclos/minuto en versiones con pilotaje neumático y retorno por muelle.

### ¿Cómo se representa un cilindro de doble efecto con amortiguación en ISO 1219?

El símbolo ISO 1219 para un cilindro de doble efecto con amortiguación regulable muestra un pistón sin muelle con dos conexiones de aire y un rectángulo adicional en cada extremo que indica las válvulas de estrangulación ajustables. Las carreras típicas oscilan entre 25 mm / 0.98 in y 2000 mm / 78.74 in, con diámetros normalizados desde 32 mm / 1.26 in hasta 320 mm / 12.6 in según ISO 6432 e ISO 15552.

### ¿Qué presión de pilotaje mínima necesita una válvula 3/2 neumática?

La presión de pilotaje mínima para una válvula 3/2 con accionamiento neumático es de 1,5 bar / 21.8 psi, valor por debajo del cual el piloto no garantiza la conmutación del distribuidor principal. Las válvulas 3/2 normalmente cerradas operan en un rango de presión de 2 bar a 10 bar / 29 psi a 145 psi y admiten caudales desde 50 Nl/min / 1.77 scfm hasta 5000 Nl/min / 176.6 scfm según el tamaño de conexión.

### ¿Cuánto reduce un silenciador neumático el ruido de escape?

Un silenciador neumático estándar reduce el ruido de escape entre 15 dB(A) y 35 dB(A), dependiendo del material poroso interno (bronce sinterizado o polietileno) y de las condiciones de presión de trabajo, que pueden alcanzar hasta 12 bar / 174 psi. Las conexiones roscadas estándar van desde M5 hasta G1, y la pérdida de carga adicional introducida es inferior a 0,3 bar / 4.35 psi en condiciones nominales.

### ¿Qué norma ISO define las unidades de tratamiento de aire comprimido?

La unidad de mantenimiento compuesta por filtro, regulador y lubricador (FRL) se describe en la norma ISO 1219-1:2012 dentro de la familia de símbolos para tratamiento de aire comprimido. El filtro retiene partículas de 5 µm / 0.0002 in a 40 µm / 0.0016 in, el regulador mantiene una presión secundaria estable en un rango de 0,5 bar a 10 bar / 7.25 psi a 145 psi, y el lubricador dosifica aceite para caudales de hasta 3000 Nl/min / 105.9 scfm.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/iso-valve-standards-d_375.html
- **engineersedge.com**: https://www.engineersedge.com/hydraulic/symbols/hydraulic_iso_schematic_symbols.htm
- **efunda.com**: https://www.efunda.com/designstandards/oring/oring_intro.cfm
