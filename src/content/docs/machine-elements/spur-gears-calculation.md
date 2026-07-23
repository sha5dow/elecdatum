---
title: "Engranajes rectos módulos y cálculo"
sidebar:
  label: "Engranajes rectos módulos y cálculo"
description: "Ficha tecnica: Engranajes rectos módulos y cálculo"
keywords: ["spur gear module pitch diameter calculation", "machine-elements"]
category: "machine-elements"
topic: "gears"
subcategory: "spur-gears"
skill: "machine-element-reference-table"
launch_phase: 6
last_updated: "2026-07-22"
verified: true
---

## Generalidades
Los engranajes rectos son el tipo más simple de engranaje; transmiten movimiento entre ejes paralelos mediante dientes rectos orientados radialmente. El contacto entre los perfiles de evolvente asegura una relación de transmisión constante. La ausencia de empuje axial los hace adecuados para aplicaciones de velocidad moderada. Los ángulos de presión normalizados modernos son 20° y 25°, mientras que 14,5° se encuentra en equipos antiguos.

La relación entre el módulo *m* y el número de dientes *z* define todas las dimensiones principales. Para engranajes con 17 o más dientes, el diámetro primitivo es diámetro primitivo = *m* × *z*. En engranajes con menos de 17 dientes se requiere un desplazamiento de perfil, resultando en un diámetro primitivo corregido = *m* × *z* + *m*. La interferencia y el socavado se evitan mediante este desplazamiento.

## Nomenclatura y dimensiones normalizadas
Los módulos normalizados según la serie ISO 54 se emplean universalmente. La conversión entre módulo métrico *m* (mm) y paso diametral *DP* (pulg⁻¹) es *DP* = 25,4 / *m*. La tabla siguiente recoge los módulos preferentes y el diámetro primitivo resultante para un piñón de 20 dientes.

| Módulo *m* (mm) / DP equivalente (pulg⁻¹) | Diámetro primitivo para *z*=20 (mm / pulg) |
| --- | --- |
| 0,5 / 50,8 | 10 / 0,394 |
| 0,8 / 31,75 | 16 / 0,630 |
| 1 / 25,4 | 20 / 0,787 |
| 1,25 / 20,32 | 25 / 0,984 |
| 1,5 / 16,933 | 30 / 1,181 |
| 2 / 12,7 | 40 / 1,575 |
| 2,5 / 10,16 | 50 / 1,969 |
| 3 / 8,467 | 60 / 2,362 |
| 4 / 6,35 | 80 / 3,150 |
| 5 / 5,08 | 100 / 3,937 |
| 6 / 4,233 | 120 / 4,724 |
| 8 / 3,175 | 160 / 6,299 |
| 10 / 2,54 | 200 / 7,874 |

El ancho de cara *b* suele estar comprendido entre 8 y 12 veces el módulo. Para módulos comerciales de 1 a 6 mm, el ancho oscila típicamente entre 10 y 60 mm (0,39 a 2,36 pulg). La altura total del diente *h* es 2,25 × *m* y el espesor circular en la circunferencia primitiva π × *m* / 2.

## Capacidad de carga
Aunque la capacidad de carga a flexión y a picadura sigue metodologías como AGMA o ISO 6336, una primera estimación de la transmisión se basa en las relaciones cinemáticas siguientes. Para un par de engranajes con rendimiento η, la velocidad de salida *n₂* y el par de salida *M₂* vienen dados por:

*n₂* = *n₁* / *i*  
*M₂* = *M₁* × *i* × η  

donde *i* = *z₂*/z₁ es la relación de transmisión. La potencia mecánica se mantiene salvo pérdidas: *P₂* = *P₁* × η.

### Ejemplo de cálculo
- Par de entrada: *M₁* = 500 N·m / 369 lbf·ft  
- Relación de transmisión: *i* = 3,8  
- Rendimiento: η = 0,90  
- Velocidad de entrada: *n₁* = 2000 rpm  

Resultados:  
*M₂* = 500 N·m × 3,8 × 0,90 = 1710 N·m (1261 lbf·ft)  
*n₂* = 2000 rpm / 3,8 = 526 rpm  
Potencia de entrada *P₁* = 300 kW / 402 hp → *P₂* = 270 kW / 362 hp

Para transmitir estas cargas con seguridad se debe verificar el fallo por fatiga del diente. Como orientación inicial, se emplean valores de tensión admisible para acero cementado de 200 a 400 MPa (29 000 a 58 000 psi) en la raíz del diente.

## Montaje y ajustes
Los engranajes rectos requieren un montaje preciso sobre ejes paralelos. La distancia entre centros *a* = *m*(*z₁*+*z₂*)/2 debe respetarse con tolerancias de ±0,05 mm (±0,002 pulg) para módulos pequeños y hasta ±0,2 mm (±0,008 pulg) para módulos grandes. Los ajustes entre árbol y cubo siguen el sistema ISO; un acoplamiento H7/g6 o H7/js6 evita holguras excesivas. La fijación axial se logra con anillos elásticos o tuercas de seguridad.

El juego entre flancos o backlash *j* se recomienda entre 0,03 y 0,10 mm (0,0012 – 0,004 pulg) para módulos de 1 a 4 mm, aumentando proporcionalmente con el módulo. Una guía práctica es *j* ≈ 0,05 × *m* (en mm). La siguiente tabla detalla valores típicos:

| Módulo *m* (mm) | Backlash mínimo (mm / pulg) | Backlash máximo (mm / pulg) |
| --- | --- | --- |
| 1 | 0,03 / 0,0012 | 0,06 / 0,0024 |
| 2 | 0,05 / 0,0020 | 0,10 / 0,0039 |
| 3 | 0,08 / 0,0031 | 0,15 / 0,0059 |
| 4 | 0,10 / 0,0039 | 0,20 / 0,0079 |
| 5 | 0,13 / 0,0051 | 0,25 / 0,0098 |
| 6 | 0,15 / 0,0059 | 0,30 / 0,0118 |

Durante el montaje se debe verificar con galgas de espesores la separación y el contacto de la huella mediante azul de Prusia.

## Selección por aplicación
La tabla siguiente relaciona sectores de aplicación con recomendaciones típicas de módulo, ángulo de presión y material. Los valores son orientativos y deben confirmarse mediante cálculo detallado.

| Aplicación | Módulo típico *m* (mm) | Ángulo de presión (°) | Material | Observaciones |
| --- | --- | --- | --- | --- |
| Mecanismos de oficina, instrumentación | 0,5 – 1,0 / DP 50,8 – 25,4 | 20° | Latón, plástico (POM) | Bajo ruido, cargas < 10 N·m / 7,4 lbf·ft |
| Electrodomésticos (batidoras, licuadoras) | 1,0 – 2,0 / DP 25,4 – 12,7 | 20° | Acero sinterizado, PA6+GF | Velocidades medias, torque hasta 50 N·m / 37 lbf·ft |
| Máquina herramienta (tornos, fresadoras) | 2,5 – 5,0 / DP 10,16 – 5,08 | 20° o 25° | Acero aleado cementado 20MnCr5 | Alta precisión, cargas continuas de 200 – 800 N·m / 148 – 590 lbf·ft |
| Transmisiones de vehículos ligeros | 3,0 – 6,0 / DP 8,47 – 4,23 | 20° | Acero 42CrMo4 templado por inducción | Cargas fluctuantes, par típico 500 – 1500 N·m / 369 – 1106 lbf·ft |
| Minería, transportadores pesados | 8,0 – 12,0 / DP 3,18 – 2,12 | 25° | Acero fundido, cementación profunda | Impactos severos, par > 2000 N·m / 1475 lbf·ft |

## Preguntas frecuentes
**1. ¿Cuál es la fórmula del diámetro primitivo para un piñón con 20 dientes y módulo 2 mm?**  
El diámetro primitivo es 20 × 2 mm = 40 mm (1,575 pulg). Para módulos estándar esta relación es válida siempre que el número de dientes sea ≥ 17.

**2. ¿Qué valor de backlash se recomienda para un engranaje de módulo 4?**  
Se recomienda un backlash mínimo de 0,10 mm (0,004 pulg) y máximo de 0,20 mm (0,008 pulg), siguiendo la regla práctica de 0,05 × *m*.

**3. ¿Cuánto vale el paso diametral equivalente a módulo 3?**  
El paso diametral equivalente es 25,4 / 3 = 8,467 dientes por pulgada. Un engranaje módulo 3 con 30 dientes tendría un diámetro primitivo de 90 mm (3,543 pulg).

**4. ¿Qué eficiencia típica tiene un par de engranajes rectos bien lubricados?**  
La eficiencia varía entre 94 % y 98 %. Para cálculos preliminares se emplea η = 0,95, lo que implica que con 100 kW (134 hp) de entrada se obtienen 95 kW (127 hp) útiles.

**5. ¿Cuántos dientes mínimos sin corrección se necesitan para un ángulo de presión de 20°?**  
Para evitar interferencia con ángulo de presión de 20° se requieren al menos 17 dientes en el piñón. Con 25° el mínimo baja a 12 dientes, lo que permite diseños más compactos.

**6. ¿Qué par puede transmitir un engranaje de módulo 4, acero cementado, para vida infinita?**  
Un piñón de 20 dientes con ancho de cara 40 mm, σ_Flim = 350 MPa (50 800 psi), puede transmitir aproximadamente 1200 N·m (885 lbf·ft) siguiendo ISO 6336. El valor exacto depende de la calidad y del factor de servicio.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gear-output-torque-speed-horsepower-d_1691.html
- **mcmaster.com**: https://www.mcmaster.com/products/spur-gears/
