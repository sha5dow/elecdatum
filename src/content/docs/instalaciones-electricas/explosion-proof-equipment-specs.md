---
title: "Equipo a prueba de explosión especificaciones"
sidebar:
  label: "Equipo a prueba de explosión especificaciones"
description: "Ficha tecnica: Equipo a prueba de explosión especificaciones"
keywords: ["explosion proof equipment specifications rating", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "hazardous-locations"
subcategory: "explosion-proof-equipment"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los equipos eléctricos instalados en atmósferas con gases, vapores inflamables, líquidos combustibles o polvos explosivos representan un riesgo de incendio o explosión. Para mitigar este peligro, las instalaciones se clasifican en áreas peligrosas (hazardous locations) y los equipos se diseñan bajo normas estrictas que garantizan su operación segura. Este documento detalla las especificaciones fundamentales que rigen la selección, instalación y marcado de equipo a prueba de explosión conforme al National Electrical Code (NEC) y a las normas internacionales IEC.

## Clasificación de áreas peligrosas

| Sistema | Región principal | Estructura de clasificación |
|---|---|---|
| Clase/División | Norteamérica (NEC Art. 500) | Clase → naturaleza del material; División → probabilidad de presencia; Grupo → tipo de material |
| Zona | Internacional (IEC 60079) y NEC Art. 505/506 | Zona → nivel de riesgo combinado con naturaleza del material; Grupo → tipo de material y localización |

La clasificación del área la definen profesionales como el ingeniero de planta, el asegurador o el responsable de seguridad, no el instalador eléctrico. Todo emplazamiento clasificado debe documentarse en un plano de clasificación de áreas (NEC 500.4).

## Sistema Clase/División

### Clases de atmósferas peligrosas

| Clase | Naturaleza del material peligroso |
|---|---|
| Clase I | Gases o vapores inflamables que pueden formar mezclas explosivas. |
| Clase II | Polvos combustibles o conductivos que pueden generar mezclas explosivas. |
| Clase III | Fibras o partículas en suspensión fácilmente inflamables (flyings). |

### Divisiones según probabilidad

| División | Probabilidad de presencia del material en concentración inflamable |
|---|---|
| División 1 | Alta probabilidad: presente de forma continua, intermitente o periódica durante la operación normal, o liberado por el propio equipo en condiciones normales. |
| División 2 | Baja probabilidad: presente solo en condiciones anormales durante cortos periodos, como una fuga accidental o fallo de un sistema. |

### Grupos de materiales

Para la Clase I (gases/vapores) se emplean los grupos A, B, C y D. Las Clases II y III utilizan los grupos E, F y G.

| Grupo | Materiales típicos | MESG (Huelgo máximo experimental seguro) | Relación MIC |
|---|---|---|---|
| A | Acetileno | No normalizado | No normalizado |
| B | Hidrógeno, butadieno, óxido de etileno, óxido de propileno, acroleína y gases con >30 % de hidrógeno en volumen | ≤ 0.45 mm / 0.018 in | ≤ 0.40 |
| C | Monóxido de carbono, éter etílico, sulfuro de hidrógeno, etileno, ciclopropano, acetaldehído, isopreno y otros de riesgo equivalente | > 0.75 mm / 0.030 in | > 0.40 y < 0.80 |
| D | Gasolina, acetona, amoniaco, benceno, butano, etanol, hexano, metanol, metano, cloruro de vinilo, gas natural, nafta, propano y equivalentes | > 0.75 mm / 0.030 in | > 0.80 |
| E | Polvos metálicos combustibles: aluminio, magnesio, bronce, cromo, titanio, zinc y sus aleaciones comerciales | N/A | N/A |
| F | Polvos carbonáceos: negro de humo, carbón vegetal, coque y polvos de carbón con más del 8 % de volátiles atrapados | N/A | N/A |
| G | Polvos combustibles no incluidos en E o F: harina, grano, almidón, azúcar, madera, plásticos y productos químicos | N/A | N/A |

**Nota:** MESG mide la holgura máxima entre dos superficies metálicas paralelas que evita la propagación de una explosión interna. La Relación MIC compara la corriente mínima de ignición del gas con la del metano bajo las mismas condiciones de prueba.

## Sistema de Zonas

### Gases, vapores y nieblas (NEC Art. 505 / IEC 60079-10-1)

| Zona | Naturaleza y probabilidad del material peligroso |
|---|---|
| Zona 0 | Concentraciones inflamables presentes de forma continua o durante periodos prolongados. |
| Zona 1 | Concentraciones inflamables probables en condiciones normales de operación. |
| Zona 2 | Concentraciones inflamables poco probables en operación normal y, si ocurren, solo por cortos periodos. |

### Polvos combustibles (NEC Art. 506 / IEC 60079-10-2)

| Zona | Naturaleza y probabilidad del material peligroso |
|---|---|
| Zona 20 | Nube de polvo combustible presente de forma continua, frecuente o por largos periodos. |
| Zona 21 | Nube de polvo combustible que puede formarse ocasionalmente en operación normal. |
| Zona 22 | Nube de polvo combustible poco probable en operación normal y de corta duración. |

## Métodos de protección para equipos

| Método | Símbolo IEC | Principio de protección |
|---|---|---|
| Envolvente antideflagrante (explosion-proof) | Ex d | Contiene la explosión interna e impide que las llamas o gases calientes salgan al exterior. El envolvente soporta la presión de una explosión y los intersticios enfrían los gases. |
| Seguridad aumentada | Ex e | Diseño robusto que evita la formación de arcos, chispas o temperaturas excesivas en operación normal, reduciendo la probabilidad de ignición. |
| Seguridad intrínseca | Ex i | La energía del circuito se limita por debajo del nivel necesario para inflamar la atmósfera, incluso bajo condiciones de fallo. Categorías ia (Zona 0), ib (Zona 1). |
| Presurización | Ex p | Se mantiene una presión positiva de gas de protección (aire o inerte) en el envolvente para impedir el ingreso de la atmósfera explosiva. |
| Encapsulado | Ex m | Los componentes que pueden generar ignición se encapsulan en resina para excluir la atmósfera explosiva. |
| No incendiario | Ex n | Equipo que en condiciones normales de operación no produce arcos, chispas ni superficies calientes capaces de provocar ignición (apto solo para Zona 2). |

## Códigos de temperatura

La temperatura máxima superficial del equipo, incluyendo condiciones de fallo, no debe superar la temperatura de auto‑ignición de la atmósfera circundante. Los códigos T establecen los límites.

| Clase de temperatura | Temperatura máxima superficial permitida | Temperatura en °F |
|---|---|---|
| T1 | ≤ 450 °C | ≤ 842 °F |
| T2 | ≤ 300 °C | ≤ 572 °F |
| T3 | ≤ 200 °C | ≤ 392 °F |
| T4 | ≤ 135 °C | ≤ 275 °F |
| T5 | ≤ 100 °C | ≤ 212 °F |
| T6 | ≤ 85 °C | ≤ 185 °F |

## Requisitos de documentación

Todos los lugares clasificados como peligrosos deben estar documentados en un plano de clasificación de áreas, disponible para quienes diseñen, instalen, inspeccionen, mantengan u operen los equipos (NEC 500.4). Este plano indica las clases, divisiones (o zonas), grupos y códigos T aplicables, y es la base para seleccionar el equipo correcto.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la temperatura máxima superficial permitida para un equipo con clase T4?
La temperatura máxima superficial para equipos T4 es de 135 °C / 275 °F, apto para atmósferas con temperatura de auto‑ignición superior a ese valor.

### ¿Cuál es el huelgo máximo experimental seguro (MESG) exigido para el Grupo B?
El MESG máximo del Grupo B es de 0.45 mm / 0.018 in, lo que lo convierte en el grupo más restrictivo para gases inflamables según el NEC.

### ¿Cuántas divisiones existen en el sistema Clase/División y qué significan?
Existen dos divisiones, División 1 y División 2. La División 1 indica presencia frecuente o continua de la sustancia peligrosa (alta probabilidad), mientras que la División 2 implica presencia solo en condiciones anormales (baja probabilidad).

### ¿Cuántos grupos de materiales define el NEC para la Clase I?
La Clase I define cuatro grupos de gases: Grupo A (acetileno), Grupo B (hidrógeno y análogos), Grupo C (éter, etileno, etc.) y Grupo D (gasolina, propano, etc.).

### ¿A partir de qué tamaño de partícula los polvos metálicos del Grupo E se consideran especialmente peligrosos?
No existe un diámetro único; los polvos del Grupo E son peligrosos por su conductividad y abrasividad, así como por su capacidad de formar nubes explosivas con partículas de tamaño inferior a 0.5 mm / 0.020 in en muchos casos.

### ¿Cuántas zonas de riesgo para gases distingue el sistema internacional IEC?
El sistema IEC y el NEC Artículo 505 establecen tres zonas: Zona 0 (presencia continua), Zona 1 (presencia ocasional en operación normal) y Zona 2 (presencia solo en condiciones anormales).

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-areas-classification-d_345.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2697
- **electrical4u.com**: https://www.electrical4u.com/cut-sheets/
