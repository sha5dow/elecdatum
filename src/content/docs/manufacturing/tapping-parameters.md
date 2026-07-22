---
title: "Roscado con macho parámetros"
sidebar:
  label: "Roscado con macho"
description: "Ficha tecnica: Roscado con macho parámetros"
keywords: ["tapping speeds feeds cut roll form", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "tapping"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

El roscado con macho es un proceso de mecanizado para generar roscas internas mediante una herramienta rotativa de múltiples filos. Los parámetros de operación —velocidad de corte, avance y profundidad— determinan la calidad de la rosca, la vida útil del macho y la productividad. Se presentan dos variantes principales: roscado por arranque de viruta (machos de corte) y roscado por deformación en frío (machos de laminación o formadores). A continuación se detallan los valores de referencia, materiales aplicables y criterios de selección.

## Parámetros operativos

### Velocidad de corte (vc)

La velocidad de corte en roscado es la velocidad tangencial en el diámetro mayor del macho. Para machos de acero rápido (HSS) se manejan valores entre 3 m/min para aceros inoxidables y 50 m/min para aluminio (10–164 ft/min). La velocidad de corte se relaciona con las revoluciones por minuto (n) mediante:

n = (1000 · vc) / (π · D)  [min⁻¹] cuando vc está en m/min y D en mm.

En unidades imperiales: n = (12 · vc) / (π · D)  [RPM] con vc en ft/min y D en pulgadas.

**Velocidades de corte recomendadas – Machos de arranque (HSS, rectos)**

| Material | vc recomendada |
|---|---|
| Aluminio (forjado, <6% Si) | 25–50 m/min (82–164 ft/min) |
| Aluminio fundido (6–12% Si) | 15–25 m/min (49–82 ft/min) |
| Latón / Bronce | 15–30 m/min (49–98 ft/min) |
| Acero al carbono (≤0.3% C) | 10–20 m/min (33–66 ft/min) |
| Acero aleado (0.3–0.5% C) | 5–12 m/min (16–39 ft/min) |
| Acero inoxidable (304/316) | 3–8 m/min (10–26 ft/min) |
| Fundición gris | 12–25 m/min (39–82 ft/min) |
| Termoplásticos (plásticos técnicos) | 15–30 m/min (49–98 ft/min) |

**Velocidades de corte para machos de laminación (formadores, sin viruta)**

| Material | vc recomendada |
|---|---|
| Aluminio (forjado) | 20–35 m/min (66–115 ft/min) |
| Acero de bajo carbono | 10–20 m/min (33–66 ft/min) |
| Acero inoxidable (austenítico) | 5–12 m/min (16–39 ft/min) |
| Latón (CuZn37) | 15–25 m/min (49–82 ft/min) |

Los valores suponen refrigeración adecuada (aceite o emulsión) y condiciones de máquina estables. Para aumentar la vida útil hasta 2 veces se pueden reducir un 20–30 % las velocidades indicadas.

### Avance (f)

En roscado, el avance es igual al paso de la rosca, ya que el macho se autodesplaza axialmente una vez que enroscan las primeras guías. La unidad es milímetros por revolución (mm/rev) o pulgadas por revolución (in/rev). Por ejemplo, una rosca M10×1.5 tiene un avance de 1.5 mm/rev (0.059 in/rev). No se requiere un control externo de avance; puede ser necesario un soporte de macho con flotación axial.

### Profundidad de corte (ap)

La profundidad de corte corresponde a la altura del filete, desde el diámetro de broca hasta el diámetro interior de la rosca. El macho suele terminar el perfil en una sola pasada. La profundidad efectiva es la diferencia entre el diámetro de la broca previa y el diámetro nominal.

**Diámetros de broca para macho de arranque (rosca métrica ISO paso grueso)**

| Rosca | Paso (mm) | Broca recomendada (mm) | Pulgadas aprox. |
|---|---|---|---|
| M3 | 0.5 | 2.5 mm | 0.098 in |
| M4 | 0.7 | 3.3 mm | 0.130 in |
| M5 | 0.8 | 4.2 mm | 0.166 in |
| M6 | 1.0 | 5.0 mm | 0.197 in |
| M8 | 1.25 | 6.8 mm | 0.268 in |
| M10 | 1.5 | 8.5 mm | 0.335 in |
| M12 | 1.75 | 10.2 mm | 0.402 in |

Para roscas finas y otros sistemas, el tamaño de broca se calcula como: D_broca ≈ D_nominal – Paso.

**Diámetros de broca para macho de laminación** requieren un agujero entre un 3 % y un 8 % mayor que el diámetro interior de la rosca, ya que el material es desplazado. El fabricante proporciona la tabla exacta.

Para roscas Whitworth (BSW, ISO 7/1, ISO 228), la tabla inferior muestra brocas para un 75 % de altura de filete:

**Roscas Withworth – Machos y tamaños de broca**

| Tamaño macho (in) | Hilos por pulgada (TPI) | Broca para 75 % de rosca |
|---|---|---|
| 1/8 | 40 | 2.6 mm / 0.102 in (#39) |
| 1/4 | 20 | 5.1 mm / 0.201 in (#9) |
| 3/8 | 16 | 8.0 mm / 0.315 in (5/16) |
| 1/2 | 12 | 10.7 mm / 0.421 in (27/64) |
| 5/8 | 11 | 13.7 mm / 0.539 in (17/32) |
| 3/4 | 10 | 16.6 mm / 0.654 in (21/32) |
| 7/8 | 9 | 19.5 mm / 0.768 in (49/64) |
| 1 | 8 | 22.3 mm / 0.878 in (7/8) |
| 1 1/4 | 7 | 28.3 mm / 1.114 in (1 7/64) |
| 1 1/2 | 6 | 34.0 mm / 1.339 in (1 5/16) |
| 1 3/4 | 5 | 39.6 mm / 1.559 in (1 9/16) |
| 2 | 4 1/2 | 45.4 mm / 1.787 in (1 3/4) |
| 2 1/4 | 4 | 51.1 mm / 2.012 in (2) |
| 2 1/2 | 4 | 57.4 mm / 2.260 in (2 1/4) |
| 2 3/4 | 3 1/2 | 62.9 mm / 2.476 in (2 1/2) |
| 3 | 3 1/2 | 69.2 mm / 2.724 in (2 3/4) |
| 3 1/4 | 3 1/4 | 75.0 mm / 2.953 in (3) |
| 3 1/2 | 3 1/4 | 81.4 mm / 3.205 in (3 1/4) |
| 3 3/4 | 3 | 87.1 mm / 3.429 in (3 3/8) |
| 4 | 3 | 93.5 mm / 3.681 in (3 5/8) |

## Tolerancias típicas

La clase de tolerancia para roscas métricas interiores suele ser 6H (calidad media, usos generales), que permite una desviación de cero en el diámetro de paso (posición H) y tolerancias de entre 0.1 mm y 0.3 mm en función del paso (ej. 0.112 mm para M6×1.0; 0.180 mm para M10×1.5). En aplicaciones de alta exigencia se usa 4H, y para roscas flojas 7H. Para roscas unificadas (UN), las clases de ajuste van de 2B (ajuste medio) a 3B (ajuste fino). El roscado correcto logra una precisión de diámetro de paso de aproximadamente ±0.02 mm (±0.0008 in) con machos de alta calidad en máquinas CNC rígidas.

La posición y perpendicularidad del agujero roscado se controla con tolerancias de posición en el plano (Ø 0.1–0.5 mm / 0.004–0.020 in) y un límite de inclinación axial de 0.5° a 1° respecto al eje teórico.

## Materiales aplicables

Machos de arranque de viruta (HSS, metal duro) procesan casi cualquier material metálico, plásticos y algunos composites. Los machos de laminación están restringidos a materiales con alargamiento mínimo del 5–8 % (A5) y dureza inferior a 35 HRC. La tabla siguiente resume la aplicabilidad.

| Material | Macho de corte (arranque) | Macho de laminación (formador) |
|---|---|---|
| Aceros al carbono (≤0.3% C) | Excelente | Excelente |
| Aceros de baja aleación (hasta 35 HRC) | Muy bueno | Bueno (baja velocidad) |
| Acero inoxidable austenítico (304/316) | Bueno (con refrigeración) | Excelente (mayor vida útil) |
| Fundición gris | Excelente (viruta corta) | No recomendado (<5% alarg.) |
| Aluminio forjado (serie 6000) | Bueno | Excelente |
| Aluminio fundido (>6% Si) | Regular (desgaste abrasivo) | No recomendado |
| Latón (CuZn37) | Excelente | Bueno (riesgo de gripado) |
| Titanio | Posible (machos especiales, baja vc) | No viable (falta ductilidad) |
| Plásticos (Nylon, POM) | Bueno | No aplica |

## Ventajas

**Roscado por arranque de viruta**
- Capacidad de penetrar en materiales duros y quebradizos.
- Coste inicial más bajo; geometrías estandarizadas.
- Permite evacuar viruta mediante canales helicoidales (espiral punto o espiral flauta).
- Mayor margen de tolerancia en el diámetro previo.

**Roscado por deformación**
- Sin producción de virutas; elimina el riesgo de atascamiento y minimiza el coste de limpieza.
- Las fibras del material quedan interrumpidas, produciendo una rosca con mayor resistencia a fatiga (hasta un 20 % más de vida útil) y mejor acabado superficial.
- Menor desgaste del macho en materiales dúctiles; la vida útil se multiplica por 3–10 respecto a un macho de corte.
- Mayor precisión de la rosca y diámetro interior más resistente a la corrosión.

## Limitaciones

**Roscado por arranque**
- Genera viruta que puede dañar la rosca o la pieza, especialmente en agujeros ciegos pequeños.
- Menor velocidad productiva en materiales pegajosos.
- Acabado superficial inferior (Ra 3.2–6.3 µm / 126–248 µin) frente al laminado.

**Roscado por deformación**
- Requiere agujero previo de mayor precisión (±0.05 mm / ±0.002 in) y lubricación extrema (aceite EP o fluidos de laminación).
- Par de roscado elevado (hasta 2 veces el de un macho de corte), lo que exige máquinas rígidas y portamachos flotantes más robustos.
- No apto para materiales frágiles (fundición, aceros endurecidos >35 HRC, composites fibrosos).
- El par máximo puede romper el macho si no se dispone de control de torque.

## Guía de selección

1. **Tipo de material y ductilidad**: si el material posee >7 % de alargamiento y dureza <35 HRC, el macho de laminación suele ser preferible por su mayor vida útil y ausencia de viruta. Para fundición, aceros endurecidos o plásticos, usar macho de arranque.

2. **Tipo de agujero**: en agujeros pasantes se recomiendan machos de punta espiral (arrojan la viruta hacia adelante). En agujeros ciegos aplicar machos de flauta helicoidal (sacan viruta hacia atrás). Los machos de laminación son universales (ciego o pasante) pero necesitan más profundidad para la zona de conformado.

3. **Productividad**: los machos de laminación operan a velocidades iguales o superiores a los de corte en materiales dúctiles y pueden durar más de 10 000 agujeros en acero bajo carbono. En series largas el menor tiempo de cambio de herramienta compensa el mayor costo inicial.

4. **Lubricación**: macho de corte requiere aceite de corte soluble o aceite mineral. Macho de laminación requiere lubricante de extrema presión (EP) o aceites específicos; la ausencia de lubricante provoca gripado inmediato.

5. **Control de par y avance**: en máquinas CNC con roscado rígido se programa el avance exacto del paso. En máquinas convencionales es obligatorio un cabezal de roscar con flotación axial. Para machos de laminación el par es un 50–100 % mayor; verificar que la máquina lo soporte.

## Preguntas frecuentes

**¿Cuál es la velocidad de corte recomendada para roscar acero inoxidable 304 con macho de HSS?**
La velocidad de corte típica para acero inoxidable austenítico con macho de arranque es de 3–8 m/min (10–26 ft/min). El valor exacto depende de la refrigeración y la rigidez del sistema.

**¿Qué avance se programa en una rosca M12×1.75?**
El avance programado debe ser de 1.75 mm/rev (0.069 in/rev), igual al paso de la rosca. En roscado rígido la máquina sincroniza el avance con el giro del husillo.

**¿Cuánto más duran los machos de laminación que los de corte en aluminio dúctil?**
En aluminio forjado 6061-T6, los machos de laminación pueden alcanzar una vida útil de 3 a 10 veces superior gracias a la ausencia de desgaste por arista de corte y al endurecimiento por deformación de la superficie de la rosca.

**¿Cuál es el diámetro de broca para un macho de laminación M10×1.5?**
Un valor de partida es broca de 8.9 ± 0.05 mm (0.350 ± 0.002 in), que deja un margen de 0.6 mm para el desplazamiento del material. La tolerancia estricta es indispensable para evitar rotura o rosca incompleta.

**¿Cuánto par de roscado añade un macho de laminación respecto a uno de corte en acero dulce?**
Se estima un incremento del 50–100 %, con valores típicos de 15–30 N·m (11–22 ft·lbf) para un M10×1.5 en acero de bajo carbono con lubricación EP.

**¿Qué profundidad adicional necesita un macho de laminación en un agujero ciego?**
Requiere una longitud de salida de aproximadamente 2.5 veces el paso más la punta de conformado. Para M10×1.5 (paso 1.5 mm), esto equivale a unos 5–6 mm (0.20–0.24 in) adicionales a la profundidad roscada útil.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-size-pipe-taps-d_1126.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/roll-form-tapping
