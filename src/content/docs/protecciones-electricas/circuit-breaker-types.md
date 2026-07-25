---
title: "Tipos de interruptores termomagnéticos"
sidebar:
  label: "Tipos de interruptores termomagnéticos"
description: "Ficha tecnica: Tipos de interruptores termomagnéticos"
keywords: ["circuit breaker types MCB MCCB", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breakers"
subcategory: "breaker-types"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los interruptores termomagnéticos son dispositivos de protección eléctrica que utilizan un bimetal (efecto térmico) y un electroimán (efecto magnético) para detectar sobrecargas y cortocircuitos en circuitos de baja tensión. La corriente nominal abarca desde 0,5 A / 0,5 A en modelos miniatura hasta 6300 A / 6300 A en interruptores de potencia. La siguiente tabla resume las principales familias.

| Tipo | Corriente nominal | Tensión asignada típica | Poder de corte habitual |
| --- | --- | --- | --- |
| MCB (Miniatura) | 0,5 A – 125 A / 0,5 A – 125 A | 230/400 V CA / 230/400 V CA | 3 kA – 25 kA / 3 kA – 25 kA |
| MCCB (Caja moldeada) | 10 A – 2500 A / 10 A – 2500 A | 690 V CA / 690 V CA | 25 kA – 150 kA / 25 kA – 150 kA |
| ACB (Abierto) | 630 A – 6300 A / 630 A – 6300 A | 690 V CA / 690 V CA | 50 kA – 150 kA / 50 kA – 150 kA |

El mecanismo combina la deformación térmica de una lámina bimetálica por efecto Joule y la fuerza magnética generada por una bobina de disparo. La sobrecarga persistente provoca el calentamiento del bimetal, que al curvarse libera un pestillo mecánico. El cortocircuito induce un campo magnético intenso en la bobina, cuyo núcleo golpea el mismo pestillo abriendo los contactos de forma instantánea. La fuerza magnética sigue la ley:

> **F = k · I²**

donde F es la fuerza sobre el mecanismo, I es la corriente de falla y k es una constante que depende de la geometría del dispositivo.

## Tipos de interruptores termomagnéticos

Se clasifican según su construcción, capacidad de interrupción y aplicación:

**MCB (Miniature Circuit Breaker)**: diseño compacto para montaje sobre riel DIN, corrientes hasta 125 A / 125 A, poder de corte de 3 kA a 25 kA / 3 kA a 25 kA. De uso residencial y en pequeños cuadros de distribución. Detección completamente contenida en el propio dispositivo.

**MCCB (Molded Case Circuit Breaker)**: envolvente de material aislante moldeado, corrientes entre 10 A / 10 A y 2500 A / 2500 A, poder de corte hasta 150 kA / 150 kA. Incorpora relés electrónicos ajustables en los modelos más avanzados.

**ACB (Air Circuit Breaker)**: construcción abierta con contactos al aire, empleado en baja tensión hasta 690 V CA / 690 V CA y corrientes de 630 A / 630 A a 6300 A / 6300 A. Se utilizan en tableros principales de distribución industrial.

**Envolventes según NEMA e IEC**: los interruptores se alojan en envolventes normalizadas. La tabla siguiente establece la correspondencia entre tipos NEMA (usados en América) y clasificación IP según IEC 60529.

| Tipo NEMA | Designación IEC | Descripción |
| --- | --- | --- |
| 1 | IP10 | Protección contra objetos sólidos de hasta 50 mm / 1,97 in, p. ej., contacto accidental con las manos. |
| 2 | IP11 | Protección contra objetos sólidos de hasta 50 mm / 1,97 in y contra caída vertical de gotas de agua, como condensación. |
| 3 | IP54 | Protección limitada contra polvo (sin depósito perjudicial) y contra chorros de agua desde cualquier dirección. |
| 3R | IP14 | Protección contra objetos sólidos de hasta 50 mm / 1,97 in y contra chorros de agua desde cualquier dirección (ingreso limitado). |
| 3S | IP54 | Protección limitada contra polvo y contra chorros de agua desde cualquier dirección. |
| 4 | IP56 | Protección limitada contra polvo y contra chorros potentes de agua. |
| 4X | IP56 | Igual que tipo 4, además resistente a la corrosión. |
| 5 | IP52 | Protección limitada contra polvo y contra pulverización directa de agua hasta 15° de la vertical. |
| 6 | IP67 | Protección total contra polvo y contra inmersión entre 15 cm / 5,9 in y 1 m / 39,4 in. |
| 6P | IP67 | Protección total contra polvo y contra inmersión prolongada (misma profundidad que tipo 6). |
| 12 | IP52 | Protección limitada contra polvo y contra pulverización directa de agua hasta 15° de la vertical. |
| 12K | IP52 | Igual que tipo 12, pero con prensaestopas removibles. |
| 13 | IP54 | Protección limitada contra polvo y contra chorros de agua desde cualquier dirección. |

*Nota: los estándares NEMA cumplen o superan los requisitos IEC; la conversión no es válida en sentido inverso.*

## Ventajas y desventajas

Frente a los fusibles, los interruptores termomagnéticos presentan las siguientes diferencias:

- **Desconexión automática** ante sobrecarga y cortocircuito, detectable por la posición de la palanca.
- **Mayor sensibilidad** y repetibilidad en la detección de corrientes anormales.
- **Reposición rápida** mediante rearme manual; no requiere reemplazo.
- **Mayor seguridad eléctrica** en la manipulación.
- **Posibilidad de control remoto** en algunos modelos.
- **Desventaja principal:** costo inicial más alto que un fusible equivalente.

## Aplicaciones típicas

- **Residencial y comercial:** MCB en tableros de distribución para iluminación y tomacorrientes.
- **Industrial ligero:** MCCB en alimentadores de máquinas, subestaciones unitarias.
- **Distribución principal:** ACB en interruptores generales de baja tensión con alta capacidad de corte.
- **Protección de motores:** interruptores magnetotérmicos coordinados con contactores para arranque y maniobra.

## Normas aplicables

- **IEC 60898** (MCB): Interruptores automáticos para instalaciones domésticas y análogas.
- **IEC 60947-2** (MCCB, ACB): Interruptores automáticos de baja tensión para uso industrial.
- **NEMA AB 1:** Molded Case Circuit Breakers (mercado americano).
- **IEC 60529:** Grados de protección IP para envolventes.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la corriente máxima de un interruptor termomagnético tipo MCB?
La corriente nominal máxima de un MCB es de 125 A / 125 A, según el estándar IEC 60898.

### ¿Qué poder de corte tiene un interruptor miniatura residencial típico?
Los MCB domésticos ofrecen un poder de corte entre 6 kA y 10 kA / 6 kA y 10 kA, suficiente para instalaciones con corrientes de cortocircuito moderadas.

### ¿En cuánto tiempo actúa el disparo térmico ante una sobrecarga del 45 %?
El disparo térmico opera en un rango de 0,1 s a varios minutos; con una sobrecarga de 1,45 veces la intensidad nominal, el tiempo de apertura puede llegar hasta una hora.

### ¿Cuál es la temperatura ambiente de funcionamiento nominal de un MCB?
La mayoría de los MCB mantienen su calibración entre -5 °C y 40 °C (23 °F y 104 °F). Fuera de este rango, se aplican factores de corrección.

### ¿Cuántos ciclos de maniobra eléctricos soporta un MCCB de 2500 A?
Un MCCB de alta corriente alcanza típicamente 10 000 operaciones bajo carga nominal, según ensayos de vida eléctrica documentados por fabricantes.

### ¿Qué diferencia hay entre un interruptor de 6 kA y uno de 10 kA?
El modelo de 10 kA puede interrumpir corrientes de cortocircuito hasta 10 000 A / 10 000 A, mientras que el de 6 kA está limitado a 6 000 A / 6 000 A, haciéndolo apto para redes con menor nivel de falla.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-iec-enclosure-standards-d_920.html
- **electrical4u.com**: https://www.electrical4u.com/miniature-circuit-breaker-or-mcb/
