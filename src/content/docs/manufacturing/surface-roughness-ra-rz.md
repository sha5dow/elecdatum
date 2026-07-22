---
title: "Rugosidad superficial Ra Rz equivalencias"
sidebar:
  label: "Rugosidad superficial Ra Rz equivalencias"
description: "Ficha tecnica: Rugosidad superficial Ra Rz equivalencias"
keywords: ["surface roughness Ra Rz RMS comparison process", "manufacturing"]
category: "manufacturing"
topic: "surface-finishing"
subcategory: "surface-roughness"
skill: "process-data-comparison"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción general
La rugosidad superficial cuantifica las microdesviaciones del perfil real frente a la forma ideal de una pieza; influye directamente en la fricción, el desgaste, la capacidad de sellado y el aspecto visual. Los parámetros más habituales para caracterizarla son Ra (rugosidad media aritmética) y Rz (altura media pico‑valle). Ambos evalúan aspectos distintos de la textura: Ra describe la suavidad global, mientras que Rz es sensible a defectos locales como rayas o poros. No existe una fórmula de conversión matemática exacta entre ellos, pero en la práctica industrial se emplean relaciones empíricas aproximadas según el proceso de fabricación (por ejemplo, Ra ≈ Rz/4 para torneado basto, Ra ≈ Rz/7 para rectificado). Esta página proporciona valores de referencia, tolerancias alcanzables según material y método, y criterios para seleccionar el parámetro adecuado en el plano de manufactura.

## Parámetros de operación
La evaluación de la rugosidad se realiza sobre una longitud de muestreo predefinida con un rugosímetro (palpador o sistema óptico) que registra el perfil superficial. Los parámetros normalizados ISO 4287 más utilizados son:

- **Ra (rugosidad media aritmética)**: media aritmética de los valores absolutos de las desviaciones del perfil respecto a la línea media. Reemplazó al antiguo RMS y es el indicador dominante en planos de fabricación.
- **Rz (altura media pico‑valle)**: promedio de las cinco mayores diferencias entre pico y valle consecutivos dentro de la longitud de evaluación. Mide la uniformidad de la textura y detecta anomalías que Ra suaviza.

La tabla siguiente recoge valores típicos de Ra y Rz para procesos de manufactura comunes, con una relación orientativa entre ambos parámetros.

| Proceso de manufactura | Ra (µm / µin) | Rz (µm / µin) | Relación aproximada Ra/Rz |
| --- | --- | --- | --- |
| Aserrado | 25–50 µm / 984–1969 µin | 100–250 µm / 3937–9843 µin | 1/4 a 1/5 |
| Torneado de desbaste | 6,3–12,5 µm / 248–492 µin | 25–50 µm / 984–1969 µin | 1/4 |
| Torneado de acabado | 0,8–3,2 µm / 31–126 µin | 4–16 µm / 157–630 µin | 1/5 |
| Fresado basto | 3,2–12,5 µm / 126–492 µin | 16–60 µm / 630–2362 µin | 1/4 a 1/5 |
| Fresado de acabado | 0,4–1,6 µm / 16–63 µin | 2–8 µm / 79–315 µin | 1/5 a 1/7 |
| Rectificado basto | 0,8–3,2 µm / 31–126 µin | 4–16 µm / 157–630 µin | 1/5 |
| Rectificado medio | 0,4–0,8 µm / 16–31 µin | 2–4 µm / 79–157 µin | 1/5 a 1/6 |
| Rectificado fino | 0,1–0,4 µm / 4–16 µin | 0,6–2,0 µm / 24–79 µin | 1/6 a 1/7 |
| Bruñido | 0,05–0,4 µm / 2–16 µin | 0,3–2,0 µm / 12–79 µin | 1/6 a 1/7 |
| Lapeado | 0,025–0,1 µm / 1–4 µin | 0,15–0,5 µm / 6–20 µin | 1/7 a 1/10 |
| Pulido espejo | 0,012–0,05 µm / 0,5–2 µin | 0,05–0,25 µm / 2–10 µin | 1/10 o mayor |

Nota: Las relaciones empíricas varían en función del material, herramienta y condiciones de corte. Se recomienda verificar con medición directa en pieza.

## Tolerancias típicas
Las tolerancias de rugosidad superficial se expresan como límite superior de Ra o Rz en micrómetros o micropulgadas; rara vez se especifica un límite inferior, salvo en aplicaciones de retención de lubricante. La tabla siguiente muestra los rangos de rugosidad alcanzables en fabricación normalizada, equivalentes a los grados N de acabado superficial (ISO 1302).

| Grado N | Ra (µm / µin) | Rz (µm / µin) | Procesos representativos |
| --- | --- | --- | --- |
| N12 | 50 µm / 1969 µin | 200 µm / 7874 µin | Corte por sierra, forja en bruto |
| N11 | 25 µm / 984 µin | 100 µm / 3937 µin | Taladrado de desbaste, fundición arenada |
| N10 | 12,5 µm / 492 µin | 50 µm / 1969 µin | Torneado basto, oxicorte |
| N9 | 6,3 µm / 248 µin | 25 µm / 984 µin | Fresado basto, mecanizado de semiacabado |
| N8 | 3,2 µm / 126 µin | 12,5 µm / 492 µin | Torneado de acabado, fresado medio |
| N7 | 1,6 µm / 63 µin | 6,3 µm / 248 µin | Rectificado basto, mandrinado fino |
| N6 | 0,8 µm / 31 µin | 3,2 µm / 126 µin | Rectificado medio, brochado |
| N5 | 0,4 µm / 16 µin | 1,6 µm / 63 µin | Rectificado fino, bruñido |
| N4 | 0,2 µm / 8 µin | 0,8 µm / 31 µin | Bruñido fino, rectificado sin centro |
| N3 | 0,1 µm / 4 µin | 0,4 µm / 16 µin | Lapeado, superacabado |
| N2 | 0,05 µm / 2 µin | 0,2 µm / 8 µin | Pulido óptico, lapeado fino |
| N1 | 0,025 µm / 1 µin | 0,1 µm / 4 µin | Pulido espejo para óptica y calibres patrón |

Estos valores suponen condiciones estables de proceso y materiales homogéneos. La capacidad real puede desviarse hasta un 30 % según el lote y el desgaste de la herramienta.

## Materiales aplicables
Todos los materiales de ingeniería mecanizables admiten la medición y especificación de Ra y Rz. La rugosidad resultante depende tanto de la maquinabilidad del material como del proceso y la herramienta. A continuación se indican combinaciones típicas de material/proceso con los parámetros de rugosidad esperados.

| Material | Proceso | Ra alcanzable (µm / µin) | Rz alcanzable (µm / µin) |
| --- | --- | --- | --- |
| Acero al carbono (SAE 1045) | Torneado de acabado | 0,8–1,6 µm / 31–63 µin | 4–8 µm / 157–315 µin |
| Acero al carbono | Rectificado medio | 0,2–0,8 µm / 8–31 µin | 1,2–4 µm / 47–157 µin |
| Acero inoxidable AISI 304 | Torneado de acabado | 0,8–3,2 µm / 31–126 µin | 4–16 µm / 157–630 µin |
| Acero inoxidable AISI 304 | Rectificado fino | 0,1–0,4 µm / 4–16 µin | 0,6–2,0 µm / 24–79 µin |
| Fundición gris GG25 | Fresado basto | 3,2–6,3 µm / 126–248 µin | 16–30 µm / 630–1181 µin |
| Fundición gris | Rectificado fino | 0,2–0,8 µm / 8–31 µin | 1,2–4 µm / 47–157 µin |
| Aluminio 6061‑T6 | Torneado con inserto PCD | 0,2–0,8 µm / 8–31 µin | 1,0–4 µm / 39–157 µin |
| Aluminio 6061‑T6 | Pulido | 0,025–0,1 µm / 1–4 µin | 0,15–0,5 µm / 6–20 µin |
| Latón C360 | Torneado de acabado | 0,4–1,6 µm / 16–63 µin | 2–8 µm / 79–315 µin |
| Titanio Ti‑6Al‑4V | Rectificado medio | 0,4–1,2 µm / 16–47 µin | 2–6 µm / 79–236 µin |
| Plásticos técnicos (POM, PA6) | Fresado de acabado | 0,4–1,6 µm / 16–63 µin | 2–8 µm / 79–315 µin |

Los valores son orientativos; la rugosidad real puede mejorar con refrigeración, herramientas de mayor filo y parámetros de corte optimizados.

## Ventajas y limitaciones
**Ventajas de Ra**
- Proporciona una visión global del estado de la superficie, útil para monitorear la estabilidad del proceso.
- Es el parámetro universalmente aceptado en planos, normas y contratos de fabricación.
- Fácil de interpretar por operarios y clientes.

**Limitaciones de Ra**
- Insensible a picos aislados, rayas o poros que pueden comprometer la estanqueidad o iniciar fatiga.
- No distingue entre perfiles con igual media pero diferente distribución de picos y valles.

**Ventajas de Rz**
- Detecta anomalías locales (estalladuras, marcas de herramienta) que Ra promediaría, por lo que es idóneo para superficies de sellado.
- Promedio de los cinco pico‑valle más representativos, ofreciendo mayor repetibilidad en presencia de defectos puntuales.

**Limitaciones de Rz**
- Menor difusión en la industria, lo que exige aclaraciones en la documentación de calidad.
- Puede variar significativamente si una sola pasada produce un pico extremo; el promediado reduce pero no elimina la influencia de valores atípicos.

No es correcto afirmar que Ra y Rz sean intercambiables mediante una constante universal. Cada parámetro responde a una necesidad de control distinta, y la elección depende del requisito funcional de la superficie.

## Guía de selección
La decisión de especificar Ra o Rz (o ambos) en la pieza debe basarse en la función principal de la superficie. A continuación se presentan criterios prácticos:

| Requisito funcional | Parámetro recomendado | Justificación |
| --- | --- | --- |
| Control general de suavidad y calidad visual | Ra | Basta con la rugosidad media; toda la industria lo entiende. |
| Superficie de sellado estático con junta | Rz (o Rmax) | Detecta rayas o poros que provocarían fugas. |
| Asiento de rodamiento | Ra y Rz | Ra define la zona de contacto; Rz destaca los defectos que reducen la vida útil. |
| Retención de lubricante (cilindros) | Rz | La altura media pico‑valle se correlaciona con el volumen de aceite retenido. |
| Superficie de deslizamiento con rozamiento controlado | Ra | Un Ra bajo asegura baja fricción global; se puede complementar con Rsk (asimetría). |
| Piezas estéticas o pintura posterior | Ra | La percepción táctil y la adherencia de la pintura se correlacionan con Ra. |
| Control de proceso en producción en serie | Ra | Permite establecer límites de control (por ejemplo, Ra ≤ 0,8 µm / 31 µin) y monitorizar tendencias. |

Cuando se exige el cumplimiento de ambos parámetros, se anota por ejemplo: Ra ≤ 0,4 µm / 16 µin y Rz ≤ 2,0 µm / 79 µin. La combinación reduce el riesgo de superficies que cumplen Ra pero presentan defectos profundos.

## Preguntas frecuentes (FAQ)

### ¿Qué es la rugosidad Ra y cómo se calcula?
Ra es la media aritmética de los valores absolutos de las desviaciones del perfil respecto a la línea media; se expresa habitualmente en micrómetros (µm) o micropulgadas (µin). Por ejemplo, un rectificado fino entrega valores de Ra de 0,4 µm / 16 µin, mientras que un torneado basto alcanza 6,3 µm / 248 µin. Se calcula como la integral del perfil |y(x)| dividida por la longitud de muestreo, según la norma ISO 4287.

### ¿En qué se diferencia Rz de Ra?
Rz mide la altura media pico‑valle promediando las cinco mayores diferencias entre un pico y su valle adyacente en cinco longitudes de muestreo independientes. Un perfil torneado puede mostrar Ra = 3,2 µm / 126 µin pero Rz = 15 µm / 591 µin si existen estrías profundas. Ra alisa esos defectos, mientras que Rz los pone de manifiesto, siendo especialmente útil para juntas de estanqueidad.

### ¿Existe una fórmula de conversión directa entre Ra y Rz?
No, porque cada parámetro mide una propiedad distinta del perfil. No obstante, en la práctica se emplean relaciones aproximadas: para torneado Ra ≈ Rz/4, para rectificado Ra ≈ Rz/7 y para pulido Ra ≈ Rz/10. Un mismo valor de Ra de 0,8 µm / 31 µin puede corresponder a un Rz de 5,6 µm / 220 µin en torneado o a 3,2 µm / 126 µin en rectificado. Siempre debe verificarse la medida directa.

### ¿Cuándo se debe especificar Ra y cuándo Rz en un plano?
Para superficies de uso general o control estadístico se elige Ra, por ejemplo Ra ≤ 0,8 µm / 31 µin en un asiento de rodamiento. Si la función exige detectar rayaduras o defectos aislados (caras de brida, estanqueidad), se recurre a Rz o Rmax, p.ej. Rz ≤ 3,2 µm / 126 µin. En componentes críticos se especifican ambos parámetros simultáneamente.

### ¿Cuáles son los valores típicos de Ra y Rz por proceso de mecanizado?
Los valores varían con la operación y el material. Como referencia, un torneado basto suele dejar Ra 6,3–12,5 µm / 248–492 µin y Rz 25–50 µm / 984–1969 µin, mientras que un rectificado fino consigue Ra 0,1–0,4 µm / 4–16 µin y Rz 0,6–2,0 µm / 24–79 µin. El lapeado óptico reduce hasta Ra 0,025 µm / 1 µin y Rz 0,1 µm / 4 µin. Consulte la tabla de la sección «Parámetros de operación» para más rangos.

### ¿Cómo se miden Ra y Rz en el taller?
Ambos se obtienen con un rugosímetro de contacto que arrastra un palpador de diamante (radio de punta 2 µm / 79 µin típicamente) sobre una longitud de muestreo de 0,8 mm / 0.031 in o 2,5 mm / 0.098 in. El equipo calcula automáticamente Ra y Rz a partir del perfil digitalizado. Para piezas pequeñas o delicadas se utilizan sistemas ópticos sin contacto que alcanzan resoluciones de 0,01 µm / 0,4 µin.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/forum/show_message.cfm?start=1&thread=4043&id=4058
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/ordlista/surface-roughness
