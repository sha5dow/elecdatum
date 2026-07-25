---
title: "Dimensionamiento de fusibles por carga"
sidebar:
  label: "Dimensionamiento de fusibles por carga"
description: "Ficha tecnica: Dimensionamiento de fusibles por carga"
keywords: ["fuse sizing calculation motor load", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "fuses"
subcategory: "fuse-sizing"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento correcto de fusibles para cargas inductivas como motores se fundamenta en la Protección Máxima Contra Sobrecorriente (MOCP), cuyo valor habitual es **2,25 veces la corriente a plena carga (FLA)** del motor de mayor potencia más el resto de cargas simultáneas. Este valor establece el límite superior de la capacidad nominal que puede tener el fusible o interruptor automático asociado a un equipo, garantizando que el elemento protector desconecte de forma segura durante cualquier condición de fallo sin disparos intempestivos durante el arranque. El MOCP trabaja en conjunto con la Ampacidad Mínima del Circuito (MCA) — **1,25 veces la FLA más cargas resistivas** — para definir tanto el calibre mínimo del conductor como el tamaño máximo del dispositivo de protección contra sobrecorriente.

Un fusible de **10 A tipo gG** debe fundir en menos de **1 hora** cuando circula por él una corriente de **1,45 veces** su valor nominal (14,5 A), según los ensayos de verificación de la norma IEC 60269. El principio de protección térmica se basa en un elemento fusible calibrado que, al ser atravesado por una sobrecorriente, eleva su temperatura hasta alcanzar el punto de fusión. La característica tiempo‑corriente define dos regiones: una zona de sobrecarga moderada donde el tiempo de fusión puede ser de minutos u horas, y una zona de cortocircuito donde la interrupción ocurre en milisegundos. En el caso de motores, la elevada corriente de arranque (hasta **8 veces la FLA** durante algunos ciclos) obliga a seleccionar fusibles con retardo suficiente, como los de clase aM o con curva gM, capaces de soportar picos transitorios sin fundir prematuramente.

## Categorías de aplicación según IEC 60269
La norma IEC 60269 define categorías de aplicación para fusibles de baja tensión, donde la primera letra indica el tipo de protección (g = general, a = solo cortocircuito) y la segunda letra identifica el equipo a proteger. Para motores eléctricos las dos categorías esenciales son aM y gM. Un fusible aM está diseñado exclusivamente para **protección contra cortocircuitos** y debe soportar sin fundir corrientes de hasta **1,05 veces su intensidad nominal** durante una hora; necesita un dispositivo asociado (relé térmico o guardamotor) para la protección frente a sobrecargas. En cambio, un fusible gM actúa como protección general — sobrecarga y cortocircuito — y debe fundir a **1,45 veces** su intensidad nominal en una hora. La categoría gG, de uso común en redes, no es adecuada para motores porque no discrimina de forma fiable la corriente de arranque.

| Categoría | Tipo de protección | Aplicación típica | Corriente de no fusión (1 h) | Corriente de fusión (1 h) |
| --- | --- | --- | --- | --- |
| aM | Solo cortocircuito (acompañante) | Motores con protección de sobrecarga externa | 1,05 × In | No definida (fusible rápido) |
| gM | General (sobrecarga + cortocircuito) | Motores sin protección de sobrecarga separada | 1,05 × In | 1,45 × In |
| gG | General para cables y conductores | Distribución general (no recomendado en motores) | 1,05 × In | 1,45 × In |

## Cálculo de la protección máxima (MOCP) y ampacidad mínima (MCA)
Para un motor trifásico de **15 kW (20 hp)** con una FLA de **28 A** a 400 V, el valor de MOCP según la fórmula normalizada es **2,25 × 28 A = 63 A**, mientras que la MCA mínima para el conductor es **1,25 × 28 A = 35 A**. Cuando existen varias cargas simultáneas se aplican las siguientes expresiones:

> **MOCP = (2,25 × FLA del motor de mayor potencia) + (Suma FLA de otros motores) + (Carga resistiva total)**

> **MCA = 1,25 × (FLA del motor de mayor potencia + Carga resistiva) + (Suma FLA de otros motores)**

En un sistema con dos motores de 10 kW (14 A) y 5 kW (7 A) más una resistencia de calefacción de 8 A, el MOCP resultante sería: 2,25 × 14 A + 7 A + 8 A = **46,5 A** (redondear a 50 A), y la MCA: 1,25 × (14 A + 8 A) + 7 A = **34,5 A** (conductor mínimo de 6 mm² / 10 AWG si las condiciones de instalación lo permiten).

Variables de la fórmula:

| Variable | Significado | Unidad |
| --- | --- | --- |
| FLA_mayor | Corriente a plena carga del motor de mayor potencia | A |
| FLA_otros | Corriente a plena carga del resto de motores | A |
| I_calef | Corriente de cargas resistivas (ej. calefactor) | A |
| MOCP | Máxima protección contra sobrecorriente (fuse/CB rating) | A |
| MCA | Ampacidad mínima del circuito (conductor) | A |

La Norma Nacional de Electricidad (NEC) estadounidense establece como calibre mínimo normalizado de protección **15 A** para circuitos ramales, y la gama comercial de fusibles sigue los valores: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100 A, etc. Siempre se elige el fusible de valor normalizado inmediatamente superior al MOCP calculado sin sobrepasarlo.

## Tabla de selección de fusibles para motores
Para un motor de **5,5 kW (7,5 hp)** a 400 V trifásico, la corriente a plena carga se sitúa en torno a **11,5 A**, recomendándose un fusible aM de **20 A** si existe protección de sobrecarga externa, o un gM de **25 A** si se busca protección integral. La tabla siguiente proporciona valores orientativos para motores normalizados de 4 polos (1500 rpm), considerando arranque directo y temperatura ambiente de 40 °C.

| Potencia motor | Tensión (V) | FLA (A) | MCA (A) | MOCP (A) | Fusible aM (A) | Fusible gM (A) |
| --- | --- | --- | --- | --- | --- | --- |
| 0,75 kW / 1 hp | 230 1~ / 400 3~ | 4,8 / 1,8 | 6,0 / 2,3 | 13,5 / 5,1 | 16 / 6 | 16 / 10 |
| 2,2 kW / 3 hp | 230 1~ / 400 3~ | 13,0 / 4,8 | 16,3 / 6,0 | 36,6 / 13,5 | 40 / 16 | 40 / 16 |
| 5,5 kW / 7,5 hp | 400 3~ | 11,5 | 14,4 | 32,4 | 35 | 40 |
| 11 kW / 15 hp | 400 3~ | 22 | 27,5 | 62 | 63 | 80 |
| 22 kW / 30 hp | 400 3~ | 42 | 52,5 | 118 | 125 | 125 |
| 37 kW / 50 hp | 400 3~ | 70 | 87,5 | 197 | 200 | 225 |

*Nota: los valores en la columna 230 V 1~ / 400 V 3~ se muestran separados por barra. Los fusibles cumplen con la serie normalizada según IEC 60269 y se seleccionan por defecto de tipo gG para protección general de conductores; los aM requieren protección de sobrecarga adicional.*

## Normas aplicables
La IEC 60269-2 exige que los fusibles para uso industrial (tipos aM y gM) sean capaces de interrumpir corrientes de cortocircuito de hasta **50 kA** eficaces en baja tensión. Esta norma internacional armoniza las antiguas normas nacionales (DIN, BS, NFC) y garantiza que fusibles con la misma categoría de aplicación sean eléctricamente intercambiables, independientemente de su formato constructivo (Diazed, Neozed, NH, etc.). A nivel americano, el National Electrical Code (NEC) establece en su artículo 430 el método de cálculo de MOCP y MCA, limitando el ajuste máximo del dispositivo de protección al **225% de la FLA** para motores de inducción con arranque a tensión plena, con un calibre mínimo de **15 A** para cualquier circuito ramal.

## Preguntas frecuentes (FAQ)

### ¿Cuál es el factor de multiplicación estándar para calcular el MOCP de un motor?
    El factor estándar es **2,25**, aplicado sobre la corriente a plena carga (FLA) del motor de mayor potencia. Para un motor que consume **10 A de FLA**, el MOCP resultante sería **22,5 A**, seleccionándose el fusible normalizado de **25 A**.

### ¿Qué diferencia de tiempo de fusión existe entre un fusible gG y uno aM ante una sobrecarga de 1,45 veces In?
    Un fusible gG debe fundir en menos de **1 hora** (convencionalmente **3600 s**) al aplicarle **1,45 veces In**, mientras que un fusible aM carece de especificación de fusión en sobrecarga porque no está diseñado para proteger frente a sobrecorrientes sostenidas — solo actúa ante cortocircuitos.

### ¿Por qué un fusible de 63 A no puede proteger un motor de 15 kW si la FLA es 28 A?
    El MOCP para ese motor es **2,25 × 28 A = 63 A**, por lo que un fusible de 63 A es correcto como máximo; sin embargo, durante el arranque la corriente puede alcanzar **224 A (8 × FLA)** durante algunos segundos. El fusible aM de 63 A está dimensionado para soportar ese pico sin fundir, pero uno gG de igual calibre podría actuar prematuramente si su curva I²t no es adecuada.

### ¿Qué ampacidad mínima debe tener el conductor de alimentación de un motor de 3 kW monofásico?
    Con una FLA de **15 A** (230 V 1~), la MCA mínima es **1,25 × 15 A = 18,75 A**, lo que exige un conductor de al menos **2,5 mm² (14 AWG)** si la canalización y la temperatura permiten esa capacidad de corriente.

### ¿Cuál es el error más común al dimensionar fusibles para varios motores en un mismo circuito?
    Olvidar sumar el **100 % de la FLA de los motores adicionales** tras aplicar el factor 2,25 al mayor. Por ejemplo, con dos motores de **20 A y 8 A** y una resistencia de **5 A**, el MOCP correcto es **(2,25 × 20 A) + 8 A + 5 A = 58 A**, no simplemente **2,25 × 20 A = 45 A**.

### ¿Qué valor de MOCP establece el NEC para un motor de 50 hp con letra de código de rotor bloqueado G?
    Para un motor de **50 hp (37 kW)** con FLA de **65 A** a 460 V, el NEC permite un MOCP del **225 %** si se usa fusible de retardo (clase CC o aM), lo que da **146 A** y exige un fusible normalizado de **150 A**. Si el arranque produce disparos, se puede aumentar hasta el **250 %** (162 A, fusible de 175 A) tras verificar que el conductor soporte ese ajuste.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-calculator-d_832.html
- **electrical4u.com**: https://www.electrical4u.com/maximum-over-current-protection-mocp/
