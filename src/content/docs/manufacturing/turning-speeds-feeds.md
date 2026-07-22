---
title: "Torneado velocidades y avances por material"
sidebar:
  label: "Torneado velocidades y avances por material"
description: "Ficha tecnica: Torneado velocidades y avances por material"
keywords: ["turning speeds feeds by material CNC lathe sfm", "manufacturing"]
category: "manufacturing"
topic: "machining"
subcategory: "turning"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción del proceso
El torneado es un proceso de mecanizado por arranque de viruta donde una herramienta de corte monofilo, estacionaria o en movimiento controlado, remueve material de la superficie de una pieza en rotación. La correcta selección de la velocidad de corte (Vc, en m/min o sfpm) y del avance (f, en mm/rev o ipr) determina la productividad, la vida útil de la herramienta y la calidad superficial de la pieza. La velocidad de corte se refiere a la velocidad tangencial relativa entre el filo de la herramienta y la superficie maquinada, mientras que el avance indica la distancia que la herramienta avanza por cada revolución del husillo. Junto con la profundidad de corte (ap), estos parámetros conforman el triplete operativo fundamental del torneado.

## Parámetros operativos
La velocidad de corte (Vc) en torneado se calcula a partir del diámetro de la pieza y la velocidad angular del husillo mediante la ecuación Vc = (π × D × N) / 1000, donde D es el diámetro en mm y N son las revoluciones por minuto (rpm). En unidades imperiales, la fórmula equivalente es Vc (sfpm) = (π × D × N) / 12, con D en pulgadas. Valores típicos de Vc oscilan entre 10 m/min (33 sfpm) para materiales difíciles como el titanio y 300 m/min (984 sfpm) para aluminio con herramientas de carburo.  
El avance (f) se mide en milímetros por revolución (mm/rev) o pulgadas por revolución (ipr) y, combinado con la profundidad de corte (ap), define la tasa de remoción de material (MRR = Vc × f × ap). En operaciones de desbaste se emplean avances de 0,2 a 0,6 mm/rev (0,008-0,024 ipr), mientras que en acabado se reducen a 0,05-0,20 mm/rev (0,002-0,008 ipr).  
La profundidad de corte (ap) representa la penetración radial de la herramienta en la pieza y suele variar entre 0,3 mm / 0,012 in en acabados finos y 10 mm / 0,394 in en desbastes pesados.  
La potencia necesaria en el cabezal (P) se relaciona con la MRR y la presión específica de corte (kc) del material: P (kW) = MRR (cm³/min) × kc / (60 × 10³). Para aceros de baja aleación, kc oscila alrededor de 2500 N/mm².

## Velocidades y avances por material

| Material | Velocidad de corte HSS (m/min / sfpm) | Velocidad de corte Carburo (m/min / sfpm) | Avance desbaste (mm/rev / ipr) | Avance acabado (mm/rev / ipr) | Profundidad de corte típica (mm / in) |
| --- | --- | --- | --- | --- | --- |
| Acero al carbono (C ≤ 0,3 %) | 21–27 / 70–90 | 90–120 / 300–400 | 0,20–0,50 / 0,008–0,020 | 0,05–0,15 / 0,002–0,006 | 0,5–6 / 0,02–0,24 |
| Acero aleado (4140, 4340) | 15–24 / 50–80 | 60–105 / 200–350 | 0,15–0,50 / 0,006–0,020 | 0,05–0,15 / 0,002–0,006 | 0,5–4 / 0,02–0,16 |
| Acero inoxidable (304, 316) | 15–24 / 50–80 | 60–90 / 200–300 | 0,15–0,40 / 0,006–0,016 | 0,05–0,15 / 0,002–0,006 | 0,5–3 / 0,02–0,12 |
| Fundición gris | 24–36 / 80–120 | 105–150 / 350–500 | 0,20–0,60 / 0,008–0,024 | 0,08–0,20 / 0,003–0,008 | 0,5–6 / 0,02–0,24 |
| Aluminio (aleaciones forja) | 90–150 / 300–500 | 150–300 / 500–1000 | 0,20–0,60 / 0,008–0,024 | 0,05–0,20 / 0,002–0,008 | 0,5–10 / 0,02–0,40 |
| Latón y bronce blando | 60–105 / 200–350 | 120–180 / 400–600 | 0,20–0,50 / 0,008–0,020 | 0,05–0,15 / 0,002–0,006 | 0,5–6 / 0,02–0,24 |
| Titanio | 10–20 / 30–65 | 30–60 / 100–200 | 0,10–0,30 / 0,004–0,012 | 0,05–0,10 / 0,002–0,004 | 0,3–2 / 0,01–0,08 |
| Plásticos (termoestables) | 60–150 / 200–500 | 90–210 / 300–700 | 0,10–0,40 / 0,004–0,016 | 0,05–0,15 / 0,002–0,006 | 0,5–3 / 0,02–0,12 |

Los valores de velocidad de corte corresponden a condiciones con refrigerante adecuado y rigidez correcta de la máquina. Para herramientas de HSS, tomar los valores inferiores del rango; para carburo, se pueden alcanzar los superiores. Las profundidades de corte indicadas son para operaciones de desbaste (valores altos) y semiacabado (valores bajos); en acabado se recomienda ap ≤ 0,5 mm / 0,02 in.

## Tolerancias típicas
El torneado permite alcanzar tolerancias dimensionales IT7 a IT9 según ISO 286, lo que equivale a ±0,02 mm / ±0,0008 in para diámetros de hasta 30 mm y ±0,05 mm / ±0,002 in para diámetros de hasta 120 mm. La rugosidad superficial se sitúa habitualmente entre Ra 0,8 µm / 32 µin y Ra 6,3 µm / 250 µin. Con herramientas de wiper y parámetros optimizados es factible obtener Ra 0,4 µm / 16 µin de forma repetible. La tolerancia de cilindricidad y concentricidad dependerá de la alineación de la contrapunta y de la rigidez del montaje, normalmente en el rango de 0,01–0,03 mm / 0,0004–0,0012 in.

## Materiales aplicables
Prácticamente todos los metales y algunas aleaciones no metálicas pueden mecanizarse mediante torneado. Los aceros al carbono y de baja aleación son los más comunes, con machinabilidad de referencia. Los aceros inoxidables austeníticos requieren velocidades reducidas y herramientas de carburo con recubrimiento para evitar el embotamiento. Las fundiciones grises producen viruta corta y son favorables en terminación, con velocidades moderadas. Las aleaciones de aluminio forja y fundición, así como los latones, presentan alta maquinabilidad y permiten velocidades y avances elevados. El titanio y las superaleaciones termorresistentes (Inconel, Hastelloy) demandan herramientas de carburo o cerámica, velocidades bajas (10–60 m/min / 33–200 sfpm) y refrigeración abundante. Materiales no metálicos como plásticos técnicos (nylon, POM, PTFE) y compuestos pueden tornearese con herramientas muy afiladas y velocidades comparables a las del aluminio.

## Ventajas y limitaciones
**Ventajas del torneado con parámetros adecuados:**
- Alta productividad al combinar velocidades elevadas y avances agresivos en desbaste.
- Excelente control dimensional y de rugosidad (tolerancias IT7, Ra 0,8 µm / 32 µin habituales).
- Amplia gama de materiales mecanizables, desde plásticos hasta aleaciones endurecidas.
- Facilidad para automatizar mediante CNC con programas de velocidad de corte constante (G96).
- Capacidad de generar diversos acabados superficiales con solo modificar avance y radio de punta.

**Limitaciones:**
- Restricciones geométricas: piezas con relaciones L/D > 5 requieren lunetas y su precisión se degrada.
- Desgaste acelerado de la herramienta cuando la velocidad de corte excede la temperatura máxima del material de la plaquita (aproximadamente 600 °C / 1112 °F en HSS, 1200 °C / 2192 °F en carburo).
- La velocidad de corte disminuye hacia el centro en el refrentado, obligando a usar CSS (G96) o reducir rpm en operaciones con diámetro variable.
- La formación de filo recrecido (BUE) en aluminio y acero inoxidable puede deteriorar el acabado si no se emplean velocidades y refrigerantes adecuados.
- Las fuerzas de corte elevadas con grandes profundidades requieren husillos potentes y montajes rígidos.

## Guía de selección
1. **Identificar el material de la pieza** y consultar la tabla de velocidades y avances para determinar el rango recomendado de Vc y f.  
2. **Seleccionar el material de la herramienta**: para producción general use carburo recubierto (PVD/CVD); para lotes cortos o materiales blandos, HSS es económico.  
3. **Elegir el tipo de operación**: desbaste (ap 1–10 mm / 0,04–0,4 in, f 0,2–0,6 mm/rev / 0,008–0,024 ipr) o acabado (ap 0,1–0,5 mm / 0,004–0,02 in, f 0,05–0,15 mm/rev / 0,002–0,006 ipr).  
4. **Calcular la velocidad del husillo (N rpm)** a partir de Vc y el diámetro de la pieza: N = (1000 × Vc) / (π × D) con Vc en m/min y D en mm. En unidades imperiales: N = (12 × Vc) / (π × D) con Vc en sfpm y D en pulgadas.  
5. **Ajustar los parámetros por refrigeración**: al tornear acero con carburo y refrigerante se puede aumentar Vc un 10–20 %; en aluminio, sin refrigerante reduzca Vc un 15%.  
6. **Verificar la carga de viruta y la potencia**: la sección de viruta (ap × f) debe coincidir con la geometría del inserto; si la potencia calculada supera el 80% de la nominal del husillo, reduzca ap o f.  
7. **Realizar cortes de prueba** y ajustar hasta obtener el acabado deseado sin vibración ni sobrecalentamiento.

## Preguntas frecuentes
**¿Cuál es la velocidad de corte recomendada para aluminio con herramienta de carburo?**  
La velocidad de corte recomendada es de 150–300 m/min (500–1000 sfpm) para aluminio de forja con herramientas de carburo integral, pudiendo alcanzarse 500 m/min (1640 sfpm) en máquinas rígidas con plaquitas pulidas.

**¿Qué avance se debe usar para obtener un acabado fino en acero al carbono?**  
El avance típico para acabado es de 0,05–0,15 mm/rev (0,002–0,006 ipr), con un radio de punta de inserto de 0,4–0,8 mm que proporciona una rugosidad teórica Ra 0,8–3,2 µm / 32–126 µin.

**¿Cuál es la profundidad de corte máxima en desbaste de acero?**  
La profundidad de corte máxima puede alcanzar 6 mm / 0,24 in en acero de baja aleación con máquinas de potencia superior a 10 kW y herramientas de carburo, aunque usualmente se limita a 4 mm / 0,16 in para preservar la vida útil del inserto.

**¿Cómo se convierte la velocidad de corte en rpm?**  
Para un diámetro de pieza de 50 mm / 2 in y velocidad de corte de 100 m/min / 328 sfpm, las rpm resultantes son aproximadamente 636 rpm (usando N = (1000 × 100) / (π × 50) ≈ 637; en imperial N = (12 × 328) / (π × 2) ≈ 626 rpm).

**¿Qué temperatura máxima alcanza la herramienta en el corte de acero inoxidable?**  
La temperatura en la interfaz herramienta-viruta puede superar los 1000 °C / 1832 °F en acero inoxidable con velocidades de 80–100 m/min / 260–330 sfpm, por lo que se emplean recubrimientos de AlTiN o refrigeración de alta presión.

**¿Qué rugosidad superficial es factible en torneado de precisión?**  
El torneado de precisión puede lograr regularmente Ra 0,4 µm / 16 µin con insertos de wiper y avances de 0,08 mm/rev / 0,003 ipr, e incluso Ra 0,2 µm / 8 µin en máquinas de ultraprecisión.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/drill-bit-speed-hardwood-softwood-d_1451.html
- **efunda.com**: https://www.efunda.com/processes/machining/chip_formation_2.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/surface-finish-when-turning
