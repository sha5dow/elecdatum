---
title: "Riesgo de arco eléctrico fundamentos"
sidebar:
  label: "Riesgo de arco eléctrico fundamentos"
description: "Ficha tecnica: Riesgo de arco eléctrico fundamentos"
keywords: ["arc flash hazard basics NFPA 70E", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "arc-flash"
subcategory: "arc-flash-basics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Un arco eléctrico (arc flash) es la luz y el calor generados durante una falla de arco en un sistema eléctrico, alcanzando temperaturas de hasta 19 400 °C / 35 000 °F en los terminales del arco y liberando una energía capaz de vaporizar conductores metálicos en milisegundos.

## Temperatura y energía del arco eléctrico
La temperatura del plasma en el núcleo del arco supera los 19 400 °C / 35 000 °F, mientras que la energía incidente puede sobrepasar los 40 cal/cm² en sistemas de baja tensión con alta corriente de falla.

| Parámetro | Valor típico |
|---|---|
| Temperatura máxima en terminales | 19 400 °C / 35 000 °F |
| Energía incidente en arco típico (480 V, 65 kA) | 40 cal/cm² – 100 cal/cm² |
| Radiación ultravioleta máxima | ~170 nm (UV lejano) |
| Potencia instantánea (arco controlado de 85 J) | 24 000 000 W |
| Calor radiante percibido a 1 m | Superior a 5 W/cm² (quemadura de segundo grado en 0,1 s) |

## Mecanismo de formación y propagación
El arco se inicia cuando la tensión aplicada ioniza el aire o un medio aislante entre conductores, y se sostiene porque la resistencia del plasma disminuye al aumentar la temperatura, fenómeno conocido como resistencia incremental negativa. Esto provoca un incremento descontrolado de la corriente hasta que algún elemento del circuito se funde, dispara un interruptor o la distancia de separación extingue el arco. La formación de un arco no requiere contacto físico si la tensión supera el valor de ruptura dieléctrica del medio; en sistemas de media y alta tensión (>1000 V) el riesgo de iniciación a distancia es elevado.

## Efectos del arco eléctrico y el arco blast
El arco flash y la explosión de arco (arc blast) son fenómenos simultáneos pero con consecuencias diferenciadas:

| Efecto | Característica |
|---|---|
| Radiación térmica | Quemaduras graves a distancia; los tejidos absorben energía infrarroja y ultravioleta casi instantáneamente |
| Onda de choque supersónica | Presiones >100 kPa (14,5 psi) capaces de derribar estructuras y lanzar fragmentos |
| Expansión del metal vaporizado | El cobre se expande 67 000 veces su volumen al pasar de sólido a gas, generando una explosión mecánica |
| Proyección de partículas | Gotas de metal fundido y esquirlas viajan a alta velocidad |
| Ruido | Niveles sonoros superiores a 160 dB, con riesgo de rotura de tímpano |

## Análisis de riesgo según NFPA 70E
La norma NFPA 70E establece la metodología para evaluar el riesgo de arco eléctrico en lugares de trabajo, clasificar los equipos de protección personal (EPP) y definir las distancias de seguridad. El análisis se basa en el cálculo de la energía incidente (cal/cm²) a una distancia de trabajo dada y en la determinación de la frontera de arco (arc flash boundary), donde la energía incidente alcanza 1,2 cal/cm² (umbral de quemadura de segundo grado). La protección EPP se agrupa en categorías desde 1 hasta 4, donde la categoría 4 exige vestimenta similar a un traje antibombas, capaz de soportar energías superiores a 40 cal/cm².

| Categoría NFPA 70E | Energía incidente máxima (cal/cm²) | Protección típica requerida |
|---|---|---|
| 1 | 4 | Ropa de algodón tratado, careta de protección facial |
| 2 | 8 | Ropa interior ignífuga, camisa y pantalón de arco |
| 3 | 25 | Traje completo de protección contra arco, capucha, guantes dieléctricos |
| 4 | 40 | Traje multicapa de protección extrema, escafandra, guantes de arco |

## Métodos de interrupción del arco eléctrico
La extinción del arco en equipos de maniobra se logra mediante dos enfoques principales:

1. **Método de alta resistencia**: se incrementa progresivamente la resistencia del arco (alargándolo, enfriándolo o dividiéndolo) hasta que la corriente se reduce a cero. Se aplica típicamente en interruptores de corriente continua y en algunos interruptores de corriente alterna de baja y media tensión.

2. **Método de baja resistencia o interrupción por paso por cero**: exclusivo de corriente alterna, aprovecha el cruce natural de la corriente por cero. En ese instante, si la rigidez dieléctrica del medio entre contactos se recupera más rápido que la tensión de restablecimiento, el arco se extingue sin reencendido.

   La ecuación de la tensión de restablecimiento en un sistema ideal sin pérdidas es:
   > **v(t) = V · (1 − cos (t / √(L·C)))**
   
   dondev v es la tensión de restablecimiento, V la tensión en el instante de interrupción, L la inductancia serie hasta el punto de falla y C la capacidad en derivación. Cuanto menor sea el producto L·C, mayor será la pendiente de restablecimiento y más exigente será la interrupción.

Dos teorías clásicas explican el fenómeno:
- **Teoría del balance energético**: el arco se apaga si la velocidad de disipación de calor entre contactos supera a la velocidad de generación de calor, lo que se consigue alargando, enfriando y dividiendo el arco.
- **Teoría de la carrera de tensiones**: la interrupción se logra eliminando los iones del espacio entre contactos (recombinación o inserción de aislante) a un ritmo mayor que la ionización producida por la tensión de restablecimiento.

## Tabla de datos característicos
| Dato | Valor |
|---|---|
| Temperatura terminal del arco | 19 400 °C / 35 000 °F |
| Factor de expansión del cobre al vaporizarse | 67 000 veces su volumen |
| Tensión mínima con riesgo de arco sostenido | 400 V en corriente alterna (servicios estándar) |
| Tensión de iniciación sin contacto | > 1000 V (condiciones típicas de laboratorio e instalaciones de media tensión) |
| Umbral de quemadura de segundo grado | 1,2 cal/cm² (5 J/cm²) |
| Distancia de seguridad típica (frontera de arco) | Variable según cálculo, frecuentemente entre 0,5 m / 20 in y 5 m / 200 in para tableros de baja tensión |
| Nivel sonoro de un arc blast severo | > 160 dB |
| Velocidad de expansión del plasma | Supersónica (~ 340 m/s iniciales) |

## Preguntas frecuentes (FAQ)
### ¿Cuál es la temperatura máxima que alcanza un arco eléctrico?
La temperatura en los terminales del arco puede superar los 19 400 °C / 35 000 °F, valor superior al de la superficie solar.

### ¿Qué diferencia hay entre arc flash y arc blast?
El arc flash es la emisión de luz y calor radiante; el arc blast es la onda de choque supersónica y la proyección de material fundido que acompañan al mismo evento. El equipo de protección puede mitigar el flash, pero el blast requiere distancias de seguridad y diseño de equipos.

### ¿A partir de qué tensión se considera que existe riesgo de arco eléctrico?
En sistemas de corriente alterna, ya a partir de 400 V existe energía suficiente para sostener un arco peligroso. Por encima de 1000 V aumenta el riesgo de iniciación sin contacto físico.

### ¿Qué normativa regula la protección contra arco eléctrico en el trabajo?
La NFPA 70E (Standard for Electrical Safety in the Workplace) es la referencia internacional. En Europa se complementa con las normas IEC 61482 y EN 50110.

### ¿Cómo se calcula la energía incidente en un análisis de arco?
Se emplean métodos descritos en la IEEE 1584 y en la NFPA 70E, que consideran la corriente de cortocircuito, el tiempo de despeje de la protección, la distancia de trabajo y la configuración de los electrodos, entregando el valor en cal/cm².

### ¿Por qué el cobre se expande de forma tan violenta durante un arco?
Al vaporizarse, el cobre pasa de estado sólido a gas con una expansión de 67 000 veces su volumen original, creando una explosión mecánica que puede destruir envolventes y lanzar fragmentos a alta velocidad.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/cheicals-hazard-rating-d_400.html
- **electrical4u.com**: https://www.electrical4u.com/arc-interruption-theory/
