---
title: "Radios mínimos de doblez por material"
sidebar:
  label: "Radios mínimos de doblez por material"
description: "Ficha tecnica: Radios mínimos de doblez por material"
keywords: ["minimum bend radius sheet metal by material thickness", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "minimum-bend-radius"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción general
El radio mínimo de doblez para chapa metálica es el menor radio interior que se puede alcanzar sin provocar fracturas, deformaciones excesivas o reducción significativa de la vida útil de la pieza. Se expresa generalmente como un múltiplo del espesor del material (T) y constituye un parámetro fundamental en el diseño de piezas conformadas por plegado. La regla más difundida — aplicable a la mayoría de los metales — establece que el radio interior mínimo debe ser al menos igual al espesor de la lámina (1T). Sin embargo, el valor exacto depende de la ductilidad del material, su estado de tratamiento térmico y la orientación del doblez respecto al sentido de laminación.

## Parámetros por material
Los valores de la tabla siguiente se basan en la recomendación genérica de **radio interior mínimo = 1 × espesor (1T)**, válida como punto de partida seguro para aceros al carbono, aceros inoxidables, aluminio y otros metales de uso común en calderería. Para materiales de alta ductilidad (aluminio recocido, cobre blando) pueden admitirse radios menores, mientras que aceros duros o laminados en frío con dureza superior a Rb 70 requieren radios mayores y precauciones adicionales en la dirección de plegado.

| Calibre | Material | Espesor (mm / in) | Radio mínimo interior 1T (mm / in) |
| --- | --- | --- | --- |
| 16 | Acero al carbono (Sheet Steel) | 1,52 mm / 0.0598 in | 1,52 mm / 0.0598 in |
| 16 | Acero inoxidable (Stainless Steel) | 1,59 mm / 0.0625 in | 1,59 mm / 0.0625 in |
| 16 | Aluminio (Aluminum) | 1,29 mm / 0.0508 in | 1,29 mm / 0.0508 in |
| 18 | Acero al carbono | 1,21 mm / 0.0478 in | 1,21 mm / 0.0478 in |
| 18 | Acero inoxidable | 1,27 mm / 0.0500 in | 1,27 mm / 0.0500 in |
| 18 | Aluminio | 1,02 mm / 0.0403 in | 1,02 mm / 0.0403 in |
| 20 | Acero al carbono | 0,91 mm / 0.0359 in | 0,91 mm / 0.0359 in |
| 20 | Acero inoxidable | 0,95 mm / 0.0375 in | 0,95 mm / 0.0375 in |
| 20 | Aluminio | 0,81 mm / 0.0320 in | 0,81 mm / 0.0320 in |
| 22 | Acero al carbono | 0,76 mm / 0.0299 in | 0,76 mm / 0.0299 in |
| 22 | Acero inoxidable | 0,79 mm / 0.0312 in | 0,79 mm / 0.0312 in |
| 22 | Aluminio | 0,64 mm / 0.0253 in | 0,64 mm / 0.0253 in |
| 24 | Acero al carbono | 0,61 mm / 0.0239 in | 0,61 mm / 0.0239 in |
| 24 | Acero inoxidable | 0,64 mm / 0.0250 in | 0,64 mm / 0.0250 in |
| 24 | Aluminio | 0,51 mm / 0.0201 in | 0,51 mm / 0.0201 in |

**Nota:** Los espesores proceden de la tabla de calibres normalizados para chapa metálica (Fuente 1). Los radios se calculan con el criterio 1T. Materiales más dúctiles (por ejemplo, aluminio serie 1xxx recocido o cobre blando) pueden doblarse con radios de hasta **0,5T**, mientras que aceros inoxidables endurecidos pueden exigir **2T** o más. Consulte siempre la ficha técnica del material que va a procesar.

### Relación con la dirección de laminación
El plegado paralelo a la dirección de laminación es más propenso a fisuras, sobre todo en aceros laminados en frío de dureza elevada. Las directrices extraídas de la fuente efunda son:

- Para acero laminado en frío con dureza **Rb 70 – 85** no se recomienda plegar paralelo a la laminación.
- Para acero laminado en frío con dureza **superior a Rb 85** no debe realizarse ningún plegado, ni siquiera perpendicular a la laminación.
- El acero laminado en caliente admite el plegado paralelo a la laminación sin restricciones severas.

## Tolerancias típicas
En el proceso de doblez las tolerancias geométricas se ven afectadas por la recuperación elástica (springback) y por la proximidad de taladros o ranuras al borde de la plegadora. Aunque no se indican valores numéricos absolutos en las fuentes empleadas, se establecen las siguientes reglas de diseño para preservar la calidad dimensional:

- **Distancia mínima al borde para agujeros o ranuras:** al menos **3 veces el espesor de la chapa más el radio de doblez** (3T + R). Si la geometría obliga a colocar orificios más cerca, se recomienda prolongar la ranura o el agujero más allá de la línea de plegado.
- **Anchura mínima de la pestaña:** la pestaña debe medir como mínimo **4 veces el espesor más el radio de doblez** (4T + R). Valores inferiores pueden provocar distorsión de la pieza, deslizamiento en la matriz o riesgo para el operario.

Se aconseja dimensionar teniendo en cuenta la acumulación de tolerancias y prever agujeros oblongos en las fijaciones para absorber variaciones. Las piezas deben inspeccionarse en una posición de sujeción que anule la flexión natural del material; las cotas interiores de un doblez interior se medirán cerca de la zona de plegado.

## Ventajas y limitaciones
**Ventajas de respetar el radio mínimo adecuado**

- Evita la formación de grietas y concentraciones de tensión que reducirían la vida útil.
- Mantiene la integridad dimensional tras el plegado, minimizando el springback excesivo.
- Permite plegar materiales de baja ductilidad o tratados térmicamente sin rotura.

**Limitaciones y riesgos**

- Un radio demasiado grande puede perjudicar el diseño compacto de la pieza.
- Radios muy cerrados en materiales duros o con plegado paralelo a la laminación provocan fracturas inmediatas.
- El incumplimiento de las distancias mínimas a agujeros o bordes genera distorsiones que invalidan la pieza.
- Aceros laminados en frío con dureza > Rb 85 no son plegables; forzar el doblez conlleva rotura catastrófica.

## Guía de selección
1. **Identifique el material y su dureza.** Consulte la ficha técnica: acero al carbono, acero inoxidable, aluminio, cobre, latón, y si está recocido o endurecido.
2. **Determinación del radio interior mínimo inicial.** Adopte el valor **1T** (radio = espesor) como línea de base para la mayoría de los metales.
3. **Ajuste por ductilidad.** Si el material es muy dúctil (aluminio recocido, cobre blando) puede reducir progresivamente hasta **0,5T** validando con pruebas. Para materiales tenaces o de alta resistencia (inoxidable endurecido, titanio) incremente hasta **2T** o más.
4. **Compruebe la orientación del doblez.** Siempre que sea posible, pliegue perpendicularmente a la dirección de laminación. Para aceros laminados en frío con dureza Rb 70‑85, evite el plegado paralelo; para dureza > Rb 85, no realice ningún plegado.
5. **Verifique las distancias críticas:** anchura mínima de pestaña ≥ 4T + R y agujeros ≥ 3T + R respecto al radio de doblez. Si no se pueden cumplir, rediseñe la pieza o extienda el agujero más allá de la línea de doblez.

Realice siempre un ensayo con chapa real antes de la producción en serie; los valores tabulados son recomendaciones genéricas.

## Preguntas frecuentes
**¿Cuál es el radio mínimo de doblez recomendado para la mayoría de los metales?**  
El radio interior mínimo es de **1 vez el espesor del material (1T)**, lo que equivale, por ejemplo, a **1,52 mm / 0.0598 in** para una chapa de acero al carbono de calibre 16. Este valor constituye un punto de partida seguro para acero, acero inoxidable y aluminio en estado de suministro comercial.

**¿Afecta la dirección de laminación al radio de doblez?**  
Sí, de forma significativa. Para acero laminado en frío con dureza **Rb 70 a 85**, no se recomienda plegar paralelo a la laminación, y si la dureza supera **Rb 85**, no debe realizarse ningún plegado. El acero laminado en caliente admite el doblez paralelo sin restricciones.

**¿Cuál es la anchura mínima que debe tener una pestaña para un plegado fiable?**  
La pestaña debe medir al menos **4 veces el espesor del material más el radio de doblez**. Por ejemplo, para una chapa de **1,52 mm / 0.0598 in** con radio 1T, la pestaña mínima es de **2 × 1,52 mm = 3,04 mm / 0.1196 in** (computando 4T + R). Respetar esta cota evita distorsiones y riesgos de deslizamiento en la matriz.

**¿A qué distancia del doblez puedo situar un agujero sin que se deforme?**  
Los agujeros o ranuras deben separarse al menos **3 veces el espesor más el radio de doblez (3T + R)**. Si la distancia se reduce, el taladro debe prolongarse hasta sobrepasar la línea de doblez para que la deformación no le afecte directamente.

**¿Se puede doblar aluminio con un radio más cerrado que 1T?**  
Sí, el aluminio recocido y otras aleaciones de alta ductilidad pueden plegarse con radios tan pequeños como **0,5T** (por ejemplo, **0,65 mm / 0.0256 in** de radio para calibre 20). Debe confirmarse con el proveedor del material y validarse mediante ensayos, ya que el temple y la dirección de laminación influyen en el resultado.

**¿Qué sucede si se emplea un radio de doblez inferior al mínimo?**  
El material sufrirá fisuras en la zona traccionada exterior del doblez, pudiendo llegar a la fractura completa. En aceros laminados en frío con dureza superior a **Rb 85**, el simple intento de plegado produce rotura, independientemente del radio empleado.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/gauge-sheet-d_915.html
- **efunda.com**: https://www.efunda.com/processes/metal_processing/bending_design.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/sites/default/files/company-presentation/smicut_eng_2021-09.pdf
