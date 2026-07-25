---
title: "Requisitos eléctricos para elevadores"
sidebar:
  label: "Requisitos eléctricos para elevadores"
description: "Ficha tecnica: Requisitos eléctricos para elevadores"
keywords: ["elevator electrical code requirements NEC 620", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "elevator-electrical-requirements"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El Artículo 620 del Código Eléctrico Nacional (NEC/NFPA 70) establece los requisitos para la instalación de conductores, equipos eléctricos, canalizaciones y sistemas de control de elevadores, montacargas, escaleras mecánicas, pasillos móviles, plataformas elevadoras y salvaescaleras. Su aplicación abarca desde la acometida del alimentador dedicado hasta los dispositivos de desconexión, protección contra sobrecorriente, cableado viajero, puesta a tierra y circuitos de alumbrado y tomacorrientes en el cuarto de máquinas. Cuando el equipo se instala en atmósferas con gases, vapores inflamables o polvos combustibles, se deben cumplir además los requisitos de lugares peligrosos de los Artículos 500 a 506 del NEC.

## Parámetros eléctricos principales

| Parámetro | Valor |
| --- | --- |
| Tensión nominal trifásica típica | 208 V / 208 V; 240 V / 240 V; 480 V / 480 V (60 Hz) |
| Tensión de control | 120 V / 120 V (monofásico) desde transformador de control |
| Frecuencia | 60 Hz / 60 Hz |
| Corriente de cortocircuito mínima del equipo | 10 kA / 10 kA simétrica |
| Factor de demanda para varios elevadores | Según tabla 620.14 del NEC, varía de 1,00 (1 ascensor) a 0,72 (6 o más) |
| Sección mínima del alimentador principal | 8 AWG / 8,37 mm² (cobre) |
| Temperatura máxima de operación de conductores | 75 °C / 167 °F (para cálculos de ampacidad según NEC) |
| Resistencia de puesta a tierra máxima | 25 Ω / 25 Ω (valor recomendado por IEEE, no obligatorio en NEC) |

### Clasificación del alimentador y protecciones

| Circuito | Protección típica (disyuntor) | Capacidad de interrupción |
| --- | --- | --- |
| Alimentador principal | Interruptor automático de caja moldeada, 3 polos, 100 A / 100 A | 25 kA / 25 kA a 480 V / 480 V |
| Circuito de control | Fusibles clase CC, 15 A / 15 A | 100 kA / 100 kA a 120 V / 120 V |
| Alumbrado cuarto de máquinas | Interruptor termomagnético 1P, 15 A / 15 A | 10 kA / 10 kA a 120 V / 120 V |

## Clasificación de áreas peligrosas (cuando aplica)
Si el elevador se instala en una atmósfera con riesgo de incendio o explosión, la instalación eléctrica debe cumplir la clasificación de lugares peligrosos del NEC, ya sea por el sistema de Clase/División (Artículo 500) o el sistema de Zona (Artículos 505/506). A continuación se resume el sistema Clase/División:

| Clase | Naturaleza del material peligroso |
| --- | --- |
| Clase I | Gases o vapores inflamables en cantidad suficiente para producir mezclas explosivas o inflamables. |
| Clase II | Polvos combustibles o conductivos en cantidad suficiente para producir mezclas explosivas o inflamables. |
| Clase III | Fibras o partículas volátiles inflamables en cantidad suficiente para producir mezclas explosivas o inflamables. |

| División | Probabilidad de presencia del material peligroso |
| --- | --- |
| División 1 | Alta probabilidad: presente continua, intermitente o periódicamente, o el equipo lo libera en operación normal. |
| División 2 | Baja probabilidad: presente solo en condiciones anormales y por corto tiempo (fugas, roturas, fallos). |

| Grupo (Gases) | Tipo de material peligroso |
| --- | --- |
| Grupo A | Acetileno. |
| Grupo B | Hidrógeno, butadieno, óxido de etileno, óxido de propileno, acroleína o gases con MESG ≤ 0,45 mm / 0.018 in o MIC ratio ≤ 0,40. |
| Grupo C | Monóxido de carbono, éter, sulfuro de hidrógeno, morfolina, ciclopropano, etileno, isopreno, acetaldehído, con MESG > 0,75 mm / 0.030 in o MIC ratio entre 0,40 y 0,80. |
| Grupo D | Gasolina, acetona, amoníaco, benceno, butano, etanol, hexano, metanol, metano, gas natural, propano, con MESG > 0,75 mm / 0.030 in o MIC ratio > 0,80. |

| Grupo (Polvos/Fibras) | Tipo de material peligroso |
| --- | --- |
| Grupo E | Polvos metálicos combustibles: aluminio, magnesio, bronce, cromo, titanio, zinc y sus aleaciones. |
| Grupo F | Polvos carbonáceos: negro de carbón, carbón vegetal, coque, carbón con más del 8 % de volátiles. |
| Grupo G | Otros polvos combustibles: harina, grano, almidón, azúcar, madera, plásticos, productos químicos. |

> **MESG**: Maximum Experimental Safe Gap (Holgura máxima experimental de seguridad) – holgura máxima entre dos superficies metálicas paralelas que, en condiciones de ensayo, impide la propagación de una explosión desde una cámara de prueba a otra que contiene la misma mezcla inflamable.  
> **MIC ratio**: Relación de la corriente mínima de encendido (Minimum Igniting Current) respecto a la del metano en las mismas condiciones.

Los equipos eléctricos en estos ambientes deben estar certificados para la clase, división y grupo correspondientes. En el caso de un elevador dentro de un área Clase I, División 1, los motores, cuadros de control y dispositivos de mando deben ser a prueba de explosión o intrínsecamente seguros.

## Fórmula para cálculo de caída de tensión en alimentadores de elevadores
El NEC recomienda una caída de tensión máxima del 3 % en el alimentador para cargas de potencia. Para un sistema trifásico, la caída de tensión se calcula con la siguiente expresión:

> **V caída = (√3 · I · L · (R cos φ + X sen φ)) / 1000**

donde:

| Variable | Descripción | Unidades |
| --- | --- | --- |
| V caída | Caída de tensión línea a línea | V / V |
| I | Corriente de plena carga del motor | A / A |
| L | Longitud del alimentador (ida) | m / ft |
| R | Resistencia del conductor por unidad de longitud | Ω/km / Ω/1000 ft |
| X | Reactancia inductiva por unidad de longitud | Ω/km / Ω/1000 ft |
| cos φ | Factor de potencia de la carga | adimensional |
| sen φ | √(1 − cos² φ) | adimensional |

Para un cálculo rápido en corriente continua o circuitos cortos, se puede usar la fórmula simplificada:

> **V caída = (2 · I · L · R) / 1000** (monofásico)  
> **V caída = (√3 · I · L · R) / 1000** (trifásico)

Siempre se debe verificar que la caída de tensión acumulada hasta el motor del elevador no supere el 5 % según la definición de "punto de entrega" en NEC 620.12.

## Aplicaciones típicas
- Edificios residenciales de altura media y alta con ascensores eléctricos de tracción o hidráulicos.  
- Hoteles y hospitales con montacargas y montaplatos.  
- Centros comerciales con escaleras mecánicas y pasillos móviles.  
- Instalaciones industriales con elevadores de carga en ambientes polvorientos o con presencia de vapores inflamables (áreas clasificadas).  
- Plataformas salvaescaleras en viviendas unifamiliares o espacios públicos accesibles.

## Normas de referencia
- NFPA 70 (NEC), Artículo 620 – Elevadores, montacargas, escaleras mecánicas y pasillos móviles.  
- NFPA 70 (NEC), Artículos 500 a 506 – Lugares peligrosos (clasificación de áreas).  
- ANSI/ASME A17.1 – Código de seguridad para elevadores y escaleras mecánicas.  
- IEEE Std 241 (Libro Gris) – Sistemas eléctricos en edificios comerciales.  
- IEC 60079 (atmósferas explosivas) para equipos con certificación internacional.

## Preguntas frecuentes (FAQ)

**1. ¿Cuál es la tensión de alimentación más común para un elevador comercial?** La tensión estándar es 480 V trifásico / 480 V trifásico, aunque muchos equipos aceptan 208 V / 208 V y 240 V / 240 V; el control se alimenta con 120 V monofásico / 120 V monofásico mediante un transformador de control.

**2. ¿Qué calibre mínimo exige el NEC para el alimentador de un ascensor?** El conductor de alimentación principal no puede ser menor de 8 AWG / 8,37 mm² de cobre, independientemente de la carga, según NEC 620.12.

**3. ¿Cuánta corriente demanda un elevador típico de pasajeros?** Un ascensor hidráulico con capacidad de 1360 kg / 3000 lb suele requerir entre 40 A y 60 A a 480 V / 480 V, mientras que uno de tracción de similar carga puede consumir de 30 A a 50 A.

**4. ¿A qué altura sobre el piso debe instalarse el seccionador del elevador?** El medio de desconexión debe estar ubicado de manera que la manija de operación quede a una altura no mayor de 1,98 m / 6.5 ft del suelo o plataforma de trabajo, según NEC 620.51.

**5. ¿Cuál es el factor de demanda que se aplica a un banco de 3 ascensores?** Para 3 ascensores, el factor de demanda es 0,90 sobre la suma de las corrientes nominales de placa de cada unidad, conforme a la tabla 620.14 del NEC.

**6. ¿Qué temperatura máxima se considera para la selección de conductores en un cuarto de máquinas?** Los conductores se dimensionan para una temperatura ambiente de 40 °C / 104 °F, salvo que el fabricante especifique un valor mayor; se utiliza la columna de 75 °C / 167 °F de las tablas de ampacidad del NEC.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-engineering-articles/basic-electrical/
