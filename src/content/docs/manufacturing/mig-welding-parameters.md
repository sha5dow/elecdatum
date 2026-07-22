---
title: "Soldadura MIG parámetros por material"
sidebar:
  label: "Soldadura MIG parámetros por material"
description: "Ficha tecnica: Soldadura MIG parámetros por material"
keywords: ["MIG GMAW welding parameters wire speed voltage", "manufacturing"]
category: "manufacturing"
topic: "joining"
subcategory: "mig-welding"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Parámetros operativos
El voltaje típico en soldadura MIG para acero al carbono oscila entre 15 V y 32 V, dependiendo del espesor y el modo de transferencia. Los parámetros fundamentales que controlan el proceso son el voltaje del arco, la velocidad de alimentación del alambre, la velocidad de desplazamiento y el caudal de gas de protección. La selección adecuada de estos valores determina la calidad de la unión y la penetración.

| Parámetro | Rango típico | Unidad común |
|---|---|---|
| Voltaje | 15 – 32 | V |
| Velocidad de alimentación del alambre (acero ⌀ 0,8 mm) | 2 – 12 m/min / 6,6 – 39,4 ft/min | m/min |
| Velocidad de desplazamiento | 0,2 – 0,8 m/min / 0,7 – 2,6 ft/min | m/min |
| Caudal de gas de protección | 10 – 20 L/min / 0,35 – 0,71 ft³/min | L/min |
| Distancia de contacto (stick-out) | 10 – 15 mm / 0,39 – 0,59 in | mm |

La intensidad de corriente está directamente ligada a la velocidad de alimentación del alambre y al diámetro del electrodo. En transferencia por cortocircuito se manejan corrientes de 50 a 200 A, mientras que en transferencia por spray se superan los 250 A. La polaridad recomendada es corriente continua electrodo positivo (DCEP) para la mayoría de aplicaciones.

## Tolerancias típicas
La precisión de posicionamiento del cordón de soldadura alcanza ±1 mm / ±0,039 in en procesos semiautomáticos con utillaje adecuado. Las tolerancias están influenciadas por la preparación de la junta, la habilidad del operador y la estabilidad del arco.

| Característica | Tolerancia habitual |
|---|---|
| Posición del cordón respecto a la línea de junta | ±1 mm / ±0,039 in |
| Sobre-espesor del cordón (refuerzo) | ±0,5 mm / ±0,020 in |
| Ancho del cordón | ±0,5 mm / ±0,020 in |
| Penetración de raíz (junta a tope sin bisel) | ±0,2 mm / ±0,008 in |
| Distancia entre puntos de soldadura de sujeción | Mínimo 50 mm / 2 in |

La distorsión térmica se minimiza espaciando los puntos de fijación al menos 50 mm / 2 in y utilizando secuencias de soldadura alternadas. Las tolerancias angulares en juntas en esquina suelen controlarse dentro de ±2°.

## Materiales aplicables
El proceso MIG es apto para soldar 4 familias principales de materiales. Los aceros al carbono, aceros de baja aleación, aceros inoxidables y la mayoría de las aleaciones de aluminio se sueldan con éxito mediante este procedimiento.

| Material | Soldabilidad | Gas de protección típico | Observaciones |
|---|---|---|---|
| Aceros al carbono (A36, S235, S275) | Excelente | CO₂ o mezcla Ar/CO₂ (80/20) | Apto desde 0,5 mm / 0,020 in |
| Aceros de baja aleación (4140, 4340) | Buena | Ar/CO₂ (80/20) o Ar/O₂ | Puede requerir precalentamiento |
| Aceros inoxidables (304, 316) | Excelente | Ar/CO₂ (98/2) o He/Ar/CO₂ | Atención a la distorsión |
| Aleaciones de aluminio (5052, 6061) | Muy buena | Argón 100 % | Usar antorcha con empuje |
| Aleaciones de cobre con zinc (latón) | Limitada | Argón o mezcla Ar/He | Emisión de vapores de zinc |

El proceso también se emplea en níquel y titanio con gases inertes de alta pureza y condiciones de respaldo de gas. Los materiales con recubrimientos (galvanizados) requieren extracción de humos y pueden necesitar alambre tubular.

## Ventajas y limitaciones
La tasa de deposición en transferencia por spray puede alcanzar 8 kg/h / 17,6 lb/h, lo que ofrece una productividad muy superior a la soldadura por electrodo revestido. La soldadura MIG combina alta velocidad de ejecución, excelente adaptabilidad a la automatización y ausencia de escoria en la mayoría de modalidades.

**Ventajas:**
- Alta tasa de deposición – hasta 8 kg/h / 17,6 lb/h en spray.
- Cordón de soldadura continuo sin necesidad de cambiar electrodo.
- Bajo nivel de humos y proyecciones con gases mezcla argón/CO₂.
- Fácil integración en células robotizadas y posicionadores.
- Amplio rango de espesores: desde 0,5 mm / 0,020 in hasta 6,3 mm / 0,250 in.

**Limitaciones:**
- Sensibilidad a corrientes de aire: el gas de protección puede ser desplazado, limitando el uso en exteriores sin barreras.
- Equipo más complejo y requiere suministro de gas, boquillas, difusores y arrastradores de alambre.
- La transferencia por cortocircuito genera proyecciones que exigen limpieza adicional.
- Limitado para soldadura en posición vertical ascendente con espesores mayores de 4 mm / 0,16 in.
- Mayor costo operativo que la soldadura MMA cuando se usan mezclas especiales de gas.

## Guía de selección de parámetros
La elección de parámetros recomendada para acero al carbono con alambre sólido ER70S-6 y gas Ar/CO₂ (80/20) se basa en el espesor del material y el tipo de transferencia deseado.

| Espesor del material | Diámetro del alambre | Corriente (A) | Voltaje (V) | Velocidad de alambre | Modo de transferencia |
|---|---|---|---|---|---|
| 0,8 mm / 0,031 in | 0,6 mm / 0,024 in | 40 – 60 | 15 – 17 | 1,5 – 2,5 m/min / 4,9 – 8,2 ft/min | Cortocircuito |
| 1,5 mm / 0,059 in | 0,8 mm / 0,030 in | 80 – 110 | 17 – 19 | 3,0 – 4,5 m/min / 9,8 – 14,8 ft/min | Cortocircuito |
| 3,0 mm / 0,118 in | 1,0 mm / 0,040 in | 130 – 170 | 20 – 23 | 5,0 – 7,0 m/min / 16,4 – 23,0 ft/min | Cortocircuito o globular |
| 4,5 mm / 0,177 in | 1,2 mm / 0,047 in | 180 – 220 | 23 – 26 | 7,5 – 9,5 m/min / 24,6 – 31,2 ft/min | Globular o spray |
| 6,0 mm / 0,236 in | 1,2 mm / 0,047 in | 220 – 280 | 26 – 30 | 9,5 – 13,0 m/min / 31,2 – 42,6 ft/min | Spray |

Para aluminio, con argón puro y alambre 5356, los parámetros se desplazan a valores más altos de velocidad de alimentación y corriente debido a la mayor conductividad térmica. Se recomienda siempre una limpieza previa con cepillo de acero inoxidable y desengrasado con acetona.

## Tablas de parámetros por material
A continuación se presentan tablas de parámetros típicos para tres materiales de amplio uso industrial. Los valores pueden ajustarse según la geometría de la junta, la posición de soldadura y las condiciones ambientales.

### Acero al carbono (ER70S-6 / CO₂ o Ar/CO₂)
| Espesor | Diámetro de alambre | Voltaje (V) | Velocidad de alimentación | Gas de protección | Transferencia |
|---|---|---|---|---|---|
| 0,8 mm / 0,031 in | 0,6 mm / 0,024 in | 15 – 16 V | 1,5 – 2,0 m/min / 4,9 – 6,6 ft/min | CO₂ | Cortocircuito |
| 1,0 mm / 0,039 in | 0,8 mm / 0,030 in | 16 – 18 V | 2,5 – 3,5 m/min / 8,2 – 11,5 ft/min | Ar/CO₂ 80/20 | Cortocircuito |
| 1,5 mm / 0,059 in | 0,8 mm / 0,030 in | 17 – 19 V | 3,5 – 4,5 m/min / 11,5 – 14,8 ft/min | Ar/CO₂ 80/20 | Cortocircuito |
| 2,0 mm / 0,079 in | 1,0 mm / 0,040 in | 19 – 21 V | 4,5 – 6,0 m/min / 14,8 – 19,7 ft/min | Ar/CO₂ 80/20 | Cortocircuito |
| 3,0 mm / 0,118 in | 1,0 mm / 0,040 in | 20 – 23 V | 6,0 – 7,5 m/min / 19,7 – 24,6 ft/min | Ar/CO₂ 80/20 | Cortocircuito/Globular |
| 4,0 mm / 0,157 in | 1,2 mm / 0,047 in | 23 – 26 V | 7,5 – 9,0 m/min / 24,6 – 29,5 ft/min | Ar/CO₂ 80/20 | Globular/Spray |
| 5,0 mm / 0,197 in | 1,2 mm / 0,047 in | 26 – 29 V | 9,0 – 11,0 m/min / 29,5 – 36,1 ft/min | Ar/CO₂ 80/20 | Spray |
| 6,0 mm / 0,236 in | 1,2 mm / 0,047 in | 29 – 32 V | 11,0 – 14,0 m/min / 36,1 – 45,9 ft/min | Ar/CO₂ 80/20 | Spray |

### Acero inoxidable (ER308L / Ar+CO₂ 98/2)
| Espesor | Diámetro de alambre | Voltaje (V) | Velocidad de alimentación | Gas de protección | Transferencia |
|---|---|---|---|---|---|
| 1,0 mm / 0,039 in | 0,8 mm / 0,030 in | 16 – 18 V | 2,5 – 3,5 m/min / 8,2 – 11,5 ft/min | Ar/CO₂ 98/2 | Cortocircuito |
| 1,5 mm / 0,059 in | 0,8 mm / 0,030 in | 17 – 19 V | 3,5 – 4,5 m/min / 11,5 – 14,8 ft/min | Ar/CO₂ 98/2 | Cortocircuito |
| 2,0 mm / 0,079 in | 1,0 mm / 0,040 in | 19 – 21 V | 4,5 – 5,5 m/min / 14,8 – 18,0 ft/min | Ar/CO₂ 98/2 | Cortocircuito |
| 3,0 mm / 0,118 in | 1,0 mm / 0,040 in | 20 – 23 V | 5,5 – 7,0 m/min / 18,0 – 23,0 ft/min | Ar/CO₂ 98/2 | Cortocircuito/Globular |
| 4,0 mm / 0,157 in | 1,2 mm / 0,047 in | 23 – 26 V | 7,0 – 9,0 m/min / 23,0 – 29,5 ft/min | Ar/CO₂ 98/2 | Spray |

### Aluminio (ER5356 / Argón 100%)
| Espesor | Diámetro de alambre | Voltaje (V) | Velocidad de alimentación | Gas de protección | Transferencia |
|---|---|---|---|---|---|
| 2,0 mm / 0,079 in | 1,0 mm / 0,040 in | 20 – 23 V | 5,5 – 7,0 m/min / 18,0 – 23,0 ft/min | Ar 100% | Spray pulsado |
| 3,0 mm / 0,118 in | 1,2 mm / 0,047 in | 23 – 26 V | 7,0 – 9,5 m/min / 23,0 – 31,2 ft/min | Ar 100% | Spray pulsado |
| 4,0 mm / 0,157 in | 1,2 mm / 0,047 in | 24 – 27 V | 9,5 – 12,0 m/min / 31,2 – 39,4 ft/min | Ar 100% | Spray |
| 5,0 mm / 0,197 in | 1,6 mm / 0,063 in | 26 – 30 V | 8,0 – 11,0 m/min / 26,2 – 36,1 ft/min | Ar 100% | Spray |
| 6,0 mm / 0,236 in | 1,6 mm / 0,063 in | 28 – 32 V | 11,0 – 14,0 m/min / 36,1 – 45,9 ft/min | Ar 100% | Spray |

## Preguntas frecuentes

**1. ¿Qué rango de espesores puede soldarse con MIG?**  
El rango típico abarca desde 0,5 mm / 0,020 in hasta 6,3 mm / 0,250 in en una sola pasada. Espesores mayores requieren múltiples pasadas o bisel adecuado.

**2. ¿Cuál es el caudal de gas de protección recomendado para interiores?**  
El caudal óptimo se sitúa entre 10 L/min y 20 L/min (0,35–0,71 ft³/min). Valores por debajo de 8 L/min pueden generar porosidad; superiores a 25 L/min provocan turbulencias y contaminación.

**3. ¿Con qué voltaje se logra la transferencia por spray en acero al carbono?**  
La transición a spray ocurre generalmente a partir de 25 V con alambre de 1,2 mm y gas Ar/CO₂ 80/20, alcanzando corrientes superiores a 220 A.

**4. ¿Cuánto debe medir la distancia de contacto (stick-out)?**  
La distancia stick-out recomendada para alambre sólido es de 10–15 mm / 0,39–0,59 in. Un valor excesivo reduce la penetración; uno demasiado corto puede sobrecalentar la boquilla.

**5. ¿Qué velocidad de alimentación se necesita para soldar aluminio de 3 mm?**  
Para aluminio de 3 mm / 0,118 in con alambre ⌀ 1,2 mm se utilizan entre 7,0 y 9,5 m/min / 23,0–31,2 ft/min, con voltajes de 23–26 V y argón puro.

**6. ¿Cuantos puntos de fijación por metro lineal se recomiendan?**  
Se sugiere un mínimo de 5 puntos por metro lineal, espaciados al menos 50 mm / 2 in entre sí para controlar la distorsión térmica en chapas finas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/thermal-conductivity-calculator-d_857.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/welding_inertgas.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/manual-metal-arc-welding-mma
