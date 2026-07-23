---
title: "GDT Circularidad y Cilindricidad"
sidebar:
  label: "GDT Circularidad y Cilindricidad"
description: "Ficha tecnica: GDT Circularidad y Cilindricidad"
keywords: ["GDT circularity cylindricity roundness", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "circularity-cylindricity"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Descripción general
La circularidad (roundness) controla la variación radial de una sección transversal respecto a un círculo perfecto, mientras que la cilindricidad amplía ese control a toda la superficie cilíndrica, garantizando que el elemento se mantenga simultáneamente redondo y recto a lo largo de su eje. Ambas tolerancias de forma son independientes del tamaño y no requieren datum, evaluando únicamente la desviación geométrica intrínseca de la pieza.

## Símbolo y Designación
| Característica geométrica | Símbolo | Designación en plano |
| --- | --- | --- |
| Circularidad | ○ | Marco de control con símbolo de círculo seguido del valor de tolerancia (ej. ○ 0,02) |
| Cilindricidad | ⌭ | Marco de control con símbolo de dos círculos paralelos seguido del valor de tolerancia (ej. ⌭ 0,05) |

En el sistema ISO, ambos símbolos se enmarcan en un recuadro de tolerancia idéntico al de ANSI/ASME Y14.5; la diferencia principal radica en las reglas de aplicación por defecto (principio de independencia ISO frente a la regla #1 de ASME).

## Tolerancia por Grados
La tabla siguiente recoge los valores normalizados de circularidad/rodadura circular extraídos de tolerancias generales ISO 2768-2, utilizables también como referencia comparativa para cilindricidad en ausencia de especificaciones particulares.

| Diámetro nominal (mm / in) | Clase H (fino) – Circularidad / cilindricidad (mm / in) | Clase K (medio) – Circularidad / cilindricidad (mm / in) | Clase L (grueso) – Circularidad / cilindricidad (mm / in) |
| --- | --- | --- | --- |
| ≤ 10 / ≤ 0.394 | 0,05 / 0.0020 | 0,1 / 0.0039 | 0,2 / 0.0079 |
| > 10–30 / > 0.394–1.181 | 0,10 / 0.0039 | 0,1 / 0.0039 | 0,3 / 0.0118 |
| > 30–100 / > 1.181–3.937 | 0,15 / 0.0059 | 0,2 / 0.0079 | 0,4 / 0.0157 |
| > 100–300 / > 3.937–11.811 | 0,20 / 0.0079 | 0,3 / 0.0118 | 0,6 / 0.0236 |
| > 300–1000 / > 11.811–39.370 | 0,30 / 0.0118 | 0,4 / 0.0157 | 0,8 / 0.0315 |
| > 1000–3000 / > 39.370–118.110 | 0,40 / 0.0157 | 0,6 / 0.0236 | 1,2 / 0.0472 |

*La cilindricidad suele acotarse con el mismo valor que la circularidad o la rodadura circular equivalente, según se indica en ISO 2768-2. Para requisitos más exigentes se recurre a tolerancias geométricas específicas con medición directa del eje cilíndrico completo.*

## Interpretación de la Tolerancia
La zona de tolerancia para circularidad está delimitada por dos círculos concéntricos coplanares cuya diferencia radial es el valor especificado. En el caso de cilindricidad, la zona queda definida por dos cilindros coaxiales perfectos que envuelven toda la superficie real; la distancia radial entre ambos es la tolerancia indicada.

Ninguna de las dos tolerancias requiere referencias a datum, ya que evalúan la forma intrínseca sin restringir posición u orientación. La medición se efectúa normalmente con palpador electrónico, máquinas de medición por coordenadas (CMM) o mediante giro en un soporte de precisión (roundness tester) capaz de filtrar armónicos según ISO 12181.

## Comparativa ANSI vs ISO
| Aspecto | ANSI/ASME Y14.5 | ISO 1101 / GPS |
| --- | --- | --- |
| Principio por defecto | Regla #1 (envolvente perfecta, el tamaño limita la forma) | Principio de independencia (el tamaño no restringe la forma a menos que se indique) |
| Circularidad (símbolo) | Mismo gráfico (círculo), idéntica zona de tolerancia | Idéntico al ANSI |
| Cilindricidad (símbolo) | Mismo gráfico (dos círculos), misma interpretación de zona | Idéntico, aunque puede aplicarse independientemente de la rectitud |
| Verificación | Se permite cualquier método que garantice la conformidad; CMM y medidores de forma son los habituales | ISO 12181 define el procedimiento de medición de circularidad con filtro gaussiano; ISO 12180 para cilindricidad |

Ambos sistemas comparten símbolos y definición de zona de tolerancia. La divergencia práctica surge cuando la tolerancia de tamaño es más restrictiva que la de forma: en ASME la forma queda controlada automáticamente, mientras que en ISO la circularidad o cilindricidad pueden exceder el rango de tamaño si no se especifica una tolerancia de forma individual o se invoca el principio de envolvente (E).

## Aplicaciones Típicas
| Componente | Característica | Tolerancia habitual (mm / in) | Motivo funcional |
| --- | --- | --- | --- |
| Muñón de cigüeñal | Cilindricidad | 0,005 / 0.0002 | Cojinete de fricción, espesor mínimo de película de aceite |
| Aguja de inyector diésel | Circularidad | 0,001 / 0.00004 | Sellado hidráulico, fugas controladas |
| Eje de motor eléctrico | Circularidad en zona de rodamiento | 0,004 / 0.00016 | Montaje silencioso, reducción de vibración |
| Calibre tampón patrón | Cilindricidad | 0,0003 / 0.000012 | Referencia dimensional, calibración |
| Camisa de cilindro hidráulico | Cilindricidad | 0,01 / 0.0004 | Estanqueidad con junta tórica |
| Rodillo de laminación | Circularidad | 0,02 / 0.0008 | Espesor uniforme de chapa |

## Preguntas Frecuentes (FAQ)
1. **¿Cuál es la tolerancia de circularidad admisible en un eje de 25 mm según ISO 2768‑2 clase K?**  
   La tolerancia general es 0,1 mm / 0.0039 in, ya que el diámetro se encuentra en el rango 10‑30 mm.

2. **¿Qué valor de cilindricidad garantiza el ajuste de un pistón de 50 mm con huelgo mínimo?**  
   Se recomienda una cilindricidad ≤ 0,005 mm / 0.0002 in para asegurar una película de lubricante uniforme y evitar el gripado.

3. **¿Cómo se mide la circularidad con un bloque en V y un comparador de carátula?**  
   El método detecta desviaciones por encima de 0,002 mm / 0.00008 in cuando el palpador está calibrado correctamente, aunque la incertidumbre crece con el número de lóbulos.

4. **¿A partir de qué diámetro una pieza torneada puede mantener una circularidad de 0,003 mm / 0.00012 in?**  
   Con procesos de precisión, diámetros de hasta 30 mm / 1.181 in pueden alcanzar 0,003 mm / 0.00012 in si se emplean herramientas de corte finas y velocidades controladas.

5. **¿Qué tolerancia de cilindricidad requiere un cojinete hidrodinámico de 100 mm de diámetro para evitar vibraciones de sub-armónicos?**  
   Una cilindricidad de 0,008 mm / 0.00031 in resulta suficiente para mantener el espesor mínimo de película, con valores más estrictos según la velocidad de rotación.

6. **¿Cuánto afecta una circularidad de 0,02 mm / 0.0008 in en un sellado de labio de 20 mm?**  
   A 6000 rpm, una excentricidad combinada con circularidad de 0,02 mm / 0.0008 in puede provocar fugas del 5‑8 % adicional respecto a una pieza con 0,005 mm / 0.0002 in de circularidad.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/mathematics-t_54.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom.html
