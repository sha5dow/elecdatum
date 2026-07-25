---
title: "Límites de la norma IEEE 519"
sidebar:
  label: "Límites de la norma IEEE 519"
description: "Ficha tecnica: Límites de la norma IEEE 519"
keywords: ["IEEE 519 harmonic limits table", "calidad-energia"]
category: "calidad-energia"
topic: "power-factor-quality"
subcategory: "ieee519-limits"
skill: "power-quality-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El estándar IEEE 519, titulado *Prácticas y requisitos recomendados para el control de armónicos en sistemas eléctricos de potencia*, establece los límites de distorsión armónica admisibles tanto en voltaje como en corriente en el punto de acoplamiento común (PAC). Publicado originalmente en 1981 y actualizado periódicamente, define criterios para prevenir problemas de calidad de energía generados por cargas no lineales.

## Definición de la norma IEEE 519

La norma IEEE 519 impone un límite de distorsión armónica total de voltaje del 8 % para sistemas con tensión nominal igual o inferior a 1 kV en el punto de acoplamiento común. Se trata de una práctica recomendada que asigna responsabilidades tanto al suministrador como al usuario final, delimitando los niveles máximos de armónicos de voltaje que el sistema puede soportar y los máximos armónicos de corriente que una carga puede inyectar.

## Límites de distorsión de voltaje

Los límites de distorsión armónica de voltaje especificados en IEEE 519‑2014 son del 8 % para el THD total en baja tensión y dependen del nivel de voltaje nominal en el punto de acoplamiento común.

| Tensión nominal en el PAC (kV) | Armónico individual máximo (%) | THDv máximo (%) |
| --- | --- | --- |
| V ≤ 1 kV / V ≤ 1 kV | 5,0 | 8,0 |
| 1 kV < V ≤ 69 kV / 1 kV < V ≤ 69 kV | 3,0 | 5,0 |
| 69 kV < V ≤ 161 kV / 69 kV < V ≤ 161 kV | 1,5 | 2,5 |
| V > 161 kV / V > 161 kV | 1,0 | 1,5 |

## Límites de distorsión de corriente

Los límites de distorsión de corriente se determinan mediante la relación entre la corriente de cortocircuito disponible en el PAC (Isc) y la corriente máxima de demanda de la carga (IL). Una relación Isc/IL inferior a 20 exige un límite de TDD del 5,0 % para los armónicos de orden inferior a 11.

| Isc/IL | h < 11 (%) | 11 ≤ h < 17 (%) | 17 ≤ h < 23 (%) | 23 ≤ h < 35 (%) | 35 ≤ h (%) | TDD (%) |
| --- | --- | --- | --- | --- | --- | --- |
| < 20** | 4,0 | 2,0 | 1,5 | 0,6 | 0,3 | 5,0 |
| 20 – 50 | 7,0 | 3,5 | 2,5 | 1,0 | 0,5 | 8,0 |
| 50 – 100 | 10,0 | 4,5 | 4,0 | 1,5 | 0,7 | 12,0 |
| 100 – 1000 | 12,0 | 5,5 | 5,0 | 2,0 | 1,0 | 15,0 |
| > 1000 | 15,0 | 7,0 | 6,0 | 2,5 | 1,4 | 20,0 |

*\* Los armónicos pares se limitan al 25 % de los valores indicados.*

## Cálculo del THD

La distorsión armónica total (THD) de voltaje se calcula como la raíz cuadrada de la suma de los cuadrados de las componentes armónicas respecto a la componente fundamental.

> **THDv = (√(V₂² + V₃² + … + Vₙ²) / V₁) × 100 %**

donde V₁ es la magnitud RMS de la componente fundamental y V₂, V₃ … Vₙ son las magnitudes RMS de las armónicas de orden 2, 3 … n.

## Punto de acoplamiento común (PAC)

El punto de acoplamiento común, definido por IEEE 519 como la interfaz entre el sistema del suministrador y el del usuario, es la ubicación donde deben cumplirse los límites de distorsión. En instalaciones industriales típicas, este punto se sitúa en el lado de baja tensión del transformador de servicio, donde la relación Isc/IL suele ser superior a 20 y la TDD no debe rebasar el 8,0 %.

## Preguntas frecuentes (FAQ)

### ¿Qué diferencia hay entre THDv y TDD?

El THDv mide la distorsión armónica total de voltaje referida a la componente fundamental, mientras que la TDD (distorsión de demanda total) de corriente se refiere a la máxima corriente de demanda del usuario, no a la fundamental instantánea.

### ¿A qué se debe el límite del 8 % en el THD de voltaje para baja tensión?

El 8 % se estableció como compromiso entre la operación segura de equipos y la viabilidad económica de la mitigación, evitando calentamiento excesivo, pérdidas adicionales y mal funcionamiento de dispositivos electrónicos sensibles.

### ¿Cómo se obtiene la relación Isc/IL en una instalación existente?

La Isc se puede calcular a partir de la impedancia del transformador de acometida y la IL como la corriente de demanda máxima medida en el PAC durante un período representativo; ambos valores deben coordinarse con la empresa suministradora.

### ¿Los límites de IEEE 519 se aplican en el lado de alta o de baja tensión?

Depende del contrato de suministro; normalmente se aplican en el PAC, que para usuarios industriales suele ser el punto de conexión de media o baja tensión, donde las distorsiones afectan a otros usuarios.

### ¿Qué sucede si los límites de distorsión de corriente se superan?

Superar los límites puede provocar calentamiento de conductores, disparos intempestivos de protecciones, interferencias electromagnéticas y penalizaciones contractuales, además de degradar la calidad de suministro a usuarios vecinos.

### ¿IEEE 519 exige medición hasta el armónico 50?

Sí, la norma recomienda evaluar armónicos hasta el orden 50, aunque en la práctica los armónicos significativos suelen concentrarse por debajo del orden 25 en la mayoría de las instalaciones industriales.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/fundamental-frequency-and-harmonics/
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/technical-articles/understanding-thd-total-harmonic-distortion-in-power-systems/
