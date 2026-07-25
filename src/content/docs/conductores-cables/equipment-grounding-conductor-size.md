---
title: "Calibre mínimo de conductor de tierra de equipo"
sidebar:
  label: "Calibre mínimo de conductor de tierra de equipo"
description: "Ficha tecnica: Calibre mínimo de conductor de tierra de equipo"
keywords: ["equipment grounding conductor size table NEC 250.122", "conductores-cables"]
category: "conductores-cables"
topic: "grounding-conductors"
subcategory: "equipment-grounding-size"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

## Tabla de calibres según capacidad del dispositivo de sobrecorriente

El calibre del conductor de tierra de equipo se dimensiona con base en la capacidad nominal del dispositivo de protección contra sobrecorriente que aguas arriba protege el circuito, no con base en la corriente de carga. La siguiente tabla presenta los calibres mínimos normalizados para conductores de cobre y aluminio.

| Capacidad del dispositivo de protección | Conductor de cobre (AWG/kcmil) | Conductor de cobre (mm²) | Conductor de aluminio (AWG/kcmil) | Conductor de aluminio (mm²) |
| :--- | :--- | :--- | :--- | :--- |
| 15 A | 14 AWG | 2,08 mm² | 12 AWG | 3,31 mm² |
| 20 A | 12 AWG | 3,31 mm² | 10 AWG | 5,26 mm² |
| 30 A | 10 AWG | 5,26 mm² | 8 AWG | 8,37 mm² |
| 40 A | 10 AWG | 5,26 mm² | 8 AWG | 8,37 mm² |
| 60 A | 10 AWG | 5,26 mm² | 8 AWG | 8,37 mm² |
| 100 A | 8 AWG | 8,37 mm² | 6 AWG | 13,3 mm² |
| 200 A | 6 AWG | 13,3 mm² | 4 AWG | 21,2 mm² |
| 300 A | 4 AWG | 21,2 mm² | 2 AWG | 33,6 mm² |
| 400 A | 3 AWG | 26,7 mm² | 1 AWG | 42,4 mm² |
| 500 A | 2 AWG | 33,6 mm² | 1/0 AWG | 53,5 mm² |
| 600 A | 1 AWG | 42,4 mm² | 2/0 AWG | 67,4 mm² |
| 800 A | 1/0 AWG | 53,5 mm² | 3/0 AWG | 85,0 mm² |
| 1000 A | 2/0 AWG | 67,4 mm² | 4/0 AWG | 107 mm² |
| 1200 A | 3/0 AWG | 85,0 mm² | 250 kcmil | 127 mm² |
| 1600 A | 4/0 AWG | 107 mm² | 350 kcmil | 177 mm² |
| 2000 A | 250 kcmil | 127 mm² | 400 kcmil | 203 mm² |
| 2500 A | 350 kcmil | 177 mm² | 600 kcmil | 304 mm² |
| 3000 A | 400 kcmil | 203 mm² | 600 kcmil | 304 mm² |
| 4000 A | 500 kcmil | 253 mm² | 800 kcmil | 405 mm² |
| 5000 A | 700 kcmil | 355 mm² | 1200 kcmil | 608 mm² |
| 6000 A | 800 kcmil | 405 mm² | 1200 kcmil | 608 mm² |

## Ajuste por aumento de calibre de los conductores de fase

Cuando los conductores activos de un circuito se incrementan de sección —típicamente para compensar caída de tensión en tiradas largas— el conductor de tierra de equipo debe incrementarse proporcionalmente en área de cobre. La regla aplica incluso si el dispositivo de protección no cambia. La fórmula general es:

> **S_tierra_final = S_tierra_inicial × (S_fase_aumentada / S_fase_inicial)**

| Variable | Descripción | Unidad |
| :--- | :--- | :--- |
| S_tierra_inicial | Área del conductor de tierra según tabla base para el dispositivo de protección | mm² o kcmil |
| S_fase_aumentada | Área del conductor de fase después del incremento por caída de tensión | mm² o kcmil |
| S_fase_inicial | Área mínima del conductor de fase para la corriente de carga sin ajuste por distancia | mm² o kcmil |
| S_tierra_final | Área mínima requerida para el conductor de tierra de equipo ajustado | mm² o kcmil |

## Límite de capacidad de cortocircuito

Todo conductor de tierra de equipo debe tener una sección transversal suficiente para soportar la máxima corriente de falla a tierra que el dispositivo de protección permite circular durante su tiempo de desconexión. El calibre mínimo según tabla garantiza este requisito para fallas de hasta 5 ciclos (0,083 s) en interruptores automáticos estándar, siempre que el conductor sea de cobre e instalado en las mismas condiciones de canalización que los conductores de fase. En sistemas con corrientes de cortocircuito superiores a 25 kA / 25 000 A simétricos, se debe verificar que la integral de Joule del conductor (I²t) exceda la energía específica pasante del dispositivo de protección.

> **I²t_conductor ≥ I² × t_despeje**

| Variable | Descripción | Unidad |
| :--- | :--- | :--- |
| I²t_conductor | Integral de Joule máxima admisible por el conductor de tierra | A²·s |
| I | Corriente de cortocircuito simétrica eficaz disponible en el punto de la falla | A |
| t_despeje | Tiempo total de despeje de la falla por el dispositivo de protección aguas arriba | s |

## Relación con la protección contra sobrecorriente

El dimensionamiento del conductor de tierra de equipo depende exclusivamente del calibre del dispositivo de protección contra sobrecorriente que alimenta el circuito derivado, no del calibre de los conductores de fase. Esta regla se invierte únicamente en el caso de ajuste por aumento de calibre de fase, donde el conductor de tierra debe escalarse para mantener la misma relación de impedancia de falla. En instalaciones con múltiples circuitos en un mismo conduit, se debe seleccionar un único conductor de tierra dimensionado para el mayor dispositivo de protección presente. Sistemas con protección por fusible permiten en ciertos casos el uso de conductores de tierra ligeramente menores que los requeridos para interruptores automáticos de igual amperaje cuando el tiempo de fusión es inferior a 0,01 s.

## Comparación con IEC 60364-5-54

El estándar internacional IEC 60364-5-54 utiliza un enfoque de cálculo en lugar de una tabla fija por dispositivo. El conductor de protección (PE) se dimensiona mediante la fórmula basada en la energía de cortocircuito y el tiempo de despeje. La tabla simplificada de la IEC produce valores muy cercanos a la tabla NEC para interruptores automáticos de hasta 63 A / 63 amperios; por encima de ese umbral, la IEC tiende a ser ligeramente más conservadora, requiriendo en promedio un 8 % más de sección en cobre para capacidades de 400 A / 400 amperios. En aluminio la diferencia alcanza hasta el 15 % para calibres superiores a 500 kcmil / 253 mm², debido a la menor conductividad y mayor resistividad del material que la IEC penaliza con mayor factor de corrección.

## Preguntas frecuentes (FAQ)

1.  **¿Cuál es el calibre mínimo de tierra para un interruptor de 20 amperios en cobre?**  
    El calibre mínimo es 12 AWG (3,31 mm²) para un dispositivo de protección de 20 A / 20 amperios, siempre que los conductores de fase no hayan sido aumentados por caída de tensión.

2.  **¿Se puede usar conductor de aluminio como tierra de equipo?**  
    Sí, el conductor de aluminio es permitido para tierra de equipo. Para un dispositivo de 200 A / 200 amperios se requiere mínimo 4 AWG de aluminio (21,2 mm²), frente a 6 AWG de cobre (13,3 mm²).

3.  **¿Qué calibre de tierra corresponde a un interruptor principal de 1000 amperios?**  
    Para un dispositivo de protección de 1000 A / 1000 amperios, el calibre mínimo en cobre es 2/0 AWG (67,4 mm²) y en aluminio es 4/0 AWG (107 mm²).

4.  **¿Cuándo se debe aumentar el calibre del conductor de tierra?**  
    Cuando los conductores de fase se aumentan de calibre para compensar caída de tensión, el conductor de tierra debe aumentarse proporcionalmente en área de sección transversal. Si un circuito de 20 A pasa de 12 AWG a 8 AWG en fase, el tierra de 12 AWG (3,31 mm²) pasa a 8 AWG (8,37 mm²).

5.  **¿Un conductor de tierra puede ser más pequeño que el neutro?**  
    Sí, el conductor de tierra suele ser de menor calibre que el neutro. En un circuito de 100 A con neutro 4 AWG, el tierra puede ser 8 AWG en cobre (8,37 mm²) dependiendo del dispositivo de protección, ya que solo conduce corriente durante fallas.

6.  **¿Qué ocurre si se instala un tierra de menor calibre del requerido?**  
    Un conductor de tierra subdimensionado puede fundirse antes de que el dispositivo de protección despeje una falla a tierra, dejando partes metálicas energizadas y creando un riesgo severo de electrocución. La tabla garantiza que el conductor soporte la corriente de falla por al menos 0,083 s / 83 ms.