---
title: "Circuitos derivados según NEC"
sidebar:
  label: "Circuitos derivados según NEC"
description: "Ficha tecnica: Circuitos derivados según NEC"
keywords: ["NEC branch circuit requirements article 210", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nec"
subcategory: "nec-branch-circuits"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Definición y alcance según el NEC
Un circuito derivado es el conjunto de conductores y componentes que van desde el dispositivo de protección contra sobrecorriente (interruptor automático o fusible) hasta la carga o tomacorriente final, tal como lo define el Artículo 100 del NEC, y toda su instalación debe cumplir los requisitos del Artículo 210 de NFPA 70. La normativa clasifica los circuitos derivados por su capacidad de corriente máxima, expresada en amperios, y los distingue según la aplicación (alumbrado, electrodomésticos, tomacorrientes, circuitos individuales), estableciendo las condiciones de protección, identificación y conexión segura de equipos.

## Clasificación de los circuitos derivados
El NEC agrupa los circuitos derivados en dos grandes categorías: multiconductores (con más de un conductor de fase no puesto a tierra) e individuales (que alimentan una sola carga, generalmente no utilizables como circuitos de uso general).

| Tipo de circuito | Corriente nominal máxima | Aplicaciones típicas | Protección requerida |
| --- | --- | --- | --- |
| Derivado de propósito general (120 V) | 15 A / 15 A, 20 A / 20 A | Iluminación, tomacorrientes en viviendas | Protección contra sobreintensidad, GFCI/AFCI según ubicación |
| Derivado para electrodomésticos (120/240 V) | 20 A / 20 A hasta 50 A / 50 A | Cocina, lavandería, secadora, horno, calentador de agua | Protección GFCI clase A en la mayoría de los casos (210.8(D)) |
| Derivado individual | Hasta 50 A / 50 A (receptáculos) o según placa del equipo | Equipos fijos, motores, aires acondicionados | Solo sobreintensidad, salvo que el equipo o la ubicación requieran GFCI (210.8(F)) |
| Derivados para circuitos de iluminación (277/480 V) | 20 A / 20 A, 30 A / 30 A | Comercial e industrial | Coordinación con canalizaciones metálicas, GFCI en ciertas ubicaciones |

## Requisitos de protección
### Protección contra sobreintensidad
Cada circuito derivado debe estar protegido por un dispositivo de sobreintensidad (fusible o interruptor automático) con una capacidad nominal no superior a la ampacidad de los conductores, ajustándose a las tablas de 310.16. La corriente de cortocircuito disponible (AFC, available fault current) en el punto de conexión se debe marcar en todos los equipos según NEC 110.24, y el poder de corte (SCCR) del equipo debe ser igual o mayor que la AFC calculada.

Para calcular la AFC en un circuito derivado, se emplea la fórmula de punto a punto desde el secundario del transformador de la compañía suministradora:

> **F = (1.73 × L × I) / (C × E L-L)**

Donde:

| Variable | Significado | Unidad |
| --- | --- | --- |
| F | Factor de reducción | adimensional |
| L | Longitud del conductor de acometida | ft / m |
| I | Corriente de cortocircuito disponible en el secundario del transformador | A |
| C | Constante del conductor (según tabla NEC) | - |
| E L-L | Tensión entre fases | V |

> **Multiplicador M = 1 / (1 + F)**

> **AFC en el punto de conexión Isc = I × M**

**Ejemplo práctico** (números típicos): en un sistema trifásico de 480 V con un transformador que entrega 35 000 A de cortocircuito, conductor de acometida de 30.5 m / 100 ft de longitud y constante C = 13 900 (cobre en ducto), la AFC en el tablero de distribución resulta 18 340 A, lo que obliga a seleccionar interruptores con un SCCR mínimo de 22 kA.

### Protección GFCI (210.8)
Desde la edición 2023 del NEC, todas las referencias a “ground-fault circuit-interrupter” en el Artículo 210.8 se han actualizado a “interruptor diferencial clase A listado”, cuyo umbral de disparo por desbalance de corriente es de **5 mA nominal (±1 mA)**. La protección diferencial se exige ahora en la práctica totalidad de áreas donde existe humedad o agua, tanto en viviendas como en locales no residenciales.

Los receptáculos en las ubicaciones listadas a continuación deben contar con protección GFCI clase A, medible desde el borde más cercano del fregadero, bañera o soporte conductor similar mediante el trayecto más corto que seguiría el cordón de alimentación sin perforar pisos, paredes ni barreras fijas.

| Ubicación (según 210.8) | Distancia máxima desde la fuente de agua | Tensión y corriente del circuito |
| --- | --- | --- |
| Receptáculos en cocinas (todas las áreas con provisión permanente de preparación de alimentos, bebidas o cocción) | Sin límite de distancia – todos los receptáculos del área | 120 V, 15 A – 20 A |
| Áreas de lavabo (baños, vestidores, salas de aseo) | 1.8 m / 6 ft del borde interior superior del lavabo | 120 V, 15 A – 20 A |
| Garajes, edificios accesorios, cobertizos para botes y exteriores | Todos los receptáculos, incluyendo aquellos que reemplacen equipos no protegidos existentes | 120 V – 240 V, hasta 50 A |
| Áreas de servicio de alimentos (buffets, bares, zonas de bebidas) | 1.8 m / 6 ft del fregadero o superficie conductora del acuario, tanque para cebo y vasijas similares | 120 V, 15 A – 60 A |
| Aparatos listados (hornos eléctricos, estufas, secadoras, microondas, hornos de pared, unidades de cocción montadas en mostrador) | Todo equipo conectado por cordón y clavija o alambrado fijo, en viviendas | 150 V máx. a tierra; 60 A o menos |

**Excepciones importantes (edición 2023)**:
- El receptáculo interno de un extractor de baño no requiere protección GFCI, a menos que las instrucciones del fabricante o el listado del producto lo exijan.
- La medición del trayecto del cordón ya no excluye los tramos que atraviesen ventanas o puertas interiores, eliminando ambigüedades previas.

### Protección AFCI (210.12)
Los circuitos derivados que alimentan dormitorios, salas de estar y espacios comunes en unidades de vivienda deben incluir protección por arco eléctrico (AFCI) mediante un interruptor listado que detecte arcos en serie y en paralelo. La obligación se extiende a todos los conductores de fase de 120 V, 15 A y 20 A que suministran tomacorrientes y luminarias en dichas áreas.

## Dimensionamiento de conductores y caída de tensión
La capacidad de corriente de los conductores de un circuito derivado se determina con base en la tabla 310.16 del NEC, seleccionando el calibre mínimo que soporte la carga continua (con un factor del 125 %) y la no continua, sin sobrepasar la temperatura de aislamiento. El NEC recomienda que la caída de tensión, aunque no es un requisito obligatorio para la mayoría de los circuitos, no exceda el **3 % en el ramal y el 5 % combinado con el alimentador**, valores que se verifican con la fórmula clásica:

> **Vd = (2 × K × I × L) / CM**  (monofásico) o **Vd = (1.73 × K × I × L) / CM** (trifásico)

| Calibre AWG | Sección equivalente (mm²) | Ampacidad a 60 °C (cobre) / a 75 °C (cobre) | Caída de tensión típica por cada 30 m / 100 ft (120 V, 20 A) |
| --- | --- | --- | --- |
| 14 AWG | 2.08 mm² / 2.08 mm² | 15 A (60 °C) / 20 A (75 °C) solo en aplicaciones específicas | ~5.2 % (demasiado alta para uso general) |
| 12 AWG | 3.31 mm² / 3.31 mm² | 20 A / 25 A | ~3.3 % (aceptable para circuitos de 20 A) |
| 10 AWG | 5.26 mm² / 5.26 mm² | 30 A / 35 A | ~2.1 % |

En la práctica, los circuitos derivados residenciales de 15 A y 20 A se cablean con 14 AWG y 12 AWG respectivamente, mientras que los electrodomésticos de 240 V y 30 A utilizan 10 AWG, y las estufas de 50 A requieren 6 AWG cobre a 75 °C.

## Requisitos de instalación
- Todo dispositivo GFCI debe ser **fácilmente accesible**, sin necesidad de escaleras portátiles ni de remover obstáculos.
- Los circuitos que alimenten cargas no lineales requieren conductor neutro dimensionado al 100 % de la corriente de fase, a veces sobredimensionado al 200 %.
- En habitaciones múltiples de una vivienda, los circuitos de iluminación y tomacorrientes de uso general no deben exceder una carga total de 3 VA por pie cuadrado (aproximadamente 32 VA/m²), repartiendo las cargas equitativamente entre fases.
- Los tomacorrientes instalados en mesadas de cocina deben estar protegidos por GFCI y ser servidos por al menos dos circuitos derivados de 20 A.

## Normativa aplicable
- **NFPA 70 (NEC)**: Artículo 100 (definiciones), Artículo 210 (circuitos derivados), Artículo 240 (protección por sobrecorriente), Artículo 250 (puesta a tierra), Artículo 310 (conductores), Artículo 422 (electrodomésticos), Artículo 590 (instalaciones temporales).
- **Código Eléctrico Nacional (NESC – IEEE C2)**: para líneas de suministro de acometida y subestaciones, no directamente circuitos derivados.
- **NOM-001-SEDE (México)**: equivalente local basado en el NEC, con algunas variaciones.

## Preguntas frecuentes (FAQ)
### ¿A qué distancia de un fregadero es obligatorio instalar GFCI en zonas no residenciales?
   El NEC 210.8(B)(7) exige protección GFCI para todos los receptáculos situados a **1.8 m / 6 ft** del borde interior superior del fregadero, medido por el trayecto más corto que seguiría un cable sin atravesar paredes ni techos.

### ¿Cuál es la corriente nominal máxima de un circuito derivado para alumbrado en viviendas?
   Los circuitos de alumbrado en unidades de vivienda pueden ser de **15 A o 20 A** (limitados al 80 % de carga continua, es decir, 12 A o 16 A efectivos).

### ¿Qué equipos domésticos de 240 V requieren ahora protección GFCI según la edición 2023 del NEC?
   La lista actualizada incluye estufas eléctricas, hornos de pared, unidades de cocción montadas en mostrador, secadoras de ropa y hornos de microondas, siempre que funcionen a 150 V o menos respecto a tierra y no superen **60 A**.

### ¿Qué corriente de cortocircuito disponible se debe marcar en un tablero de distribución residencial?
   La AFC debe ser grabada con su fecha de cálculo. En un servicio monofásico de 240 V y 200 A, la AFC suele estar entre **10 000 A y 22 000 A** (10 kA – 22 kA) dependiendo de la impedancia de la acometida y el transformador.

### ¿Cuánto puede ser la caída de tensión máxima en un circuito derivado según las buenas prácticas del NEC?
   La recomendación es no superar el **3 %** en el circuito derivado más el **2 %** en el alimentador, para un total combinado de **5 %**, equivalente a una pérdida de **6 V** en un sistema de 120 V.

### ¿A partir de qué calibre se deben utilizar conductores con aislamiento de 75 °C en circuitos derivados?
   Se permite usar la columna de 75 °C para calibres **1.3 mm² / 16 AWG** y mayores, siempre que el equipo terminal esté listado para esa temperatura; en la práctica, a partir de **1.6 mm² / 14 AWG** y 15 A, muchos instaladores emplean aislamiento THWN-2 de 90 °C que se limita a 75 °C en los bornes.

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/files/PDF/23_CC_210.8.pdf
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
