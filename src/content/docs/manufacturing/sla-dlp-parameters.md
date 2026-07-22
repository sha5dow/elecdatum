---
title: "SLA DLP parámetros y resinas"
sidebar:
  label: "SLA DLP parámetros y resinas"
description: "Ficha tecnica: SLA DLP parámetros y resinas"
keywords: ["SLA DLP resin 3D printing parameters resolution", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "sla"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción del proceso

La estereolitografía (SLA) y el Procesamiento Digital de Luz (DLP) son tecnologías de fabricación aditiva por fotopolimerización en cuba. En SLA, un láser ultravioleta traza selectivamente cada capa sobre la superficie de una resina líquida fotosensible, solidificándola. En DLP, un proyector digital expone una imagen completa de la capa de una sola vez, curando toda la sección simultáneamente. En ambos casos, la plataforma de construcción se desplaza verticalmente tras cada capa (típicamente entre 0,025 mm / 0.001 in y 0,15 mm / 0.006 in) y una cuchara o recubridor extiende resina fresca. Finalizada la impresión, la pieza requiere limpieza con disolvente para remover resina no curada y un post‑curado en horno UV o cámara de luz para alcanzar las propiedades mecánicas finales.

## Parámetros operativos

En SLA/DLP los parámetros críticos dependen del tipo de fuente luminosa, la óptica y la formulación de la resina. Para SLA, el diámetro del haz láser determina la resolución lateral, mientras que en DLP la resolución viene dada por el tamaño de píxel proyectado sobre la cuba. La velocidad de construcción se ve afectada por el tiempo de exposición por capa y el espesor de capa seleccionado.

| Parámetro | Rango típico |
|---|---|
| Espesor de capa | 0,025–0,15 mm / 0.001–0.006 in |
| Diámetro de haz láser (SLA) | 0,05–0,15 mm / 0.002–0.006 in |
| Tamaño de píxel (DLP) | 25–100 µm / 0.001–0.004 in |
| Longitud de onda de curado | 355–405 nm (UV) |
| Potencia del láser (SLA) | 30–500 mW |
| Tiempo de exposición por capa | 1–10 segundos (según resina y espesor) |
| Velocidad de barrido láser (SLA) | 80–250 cm/s / 31.5–98.4 in/s |
| Temperatura de cuba recomendada | 25–35 °C / 77–95 °F |

## Materiales

Las resinas para SLA/DLP son formulaciones líquidas de fotopolímeros (acrilatos, epoxis o uretanos) que reaccionan bajo luz UV. Se clasifican según sus propiedades finales: estándar (rígida y económica), de ingeniería (ABS‑like, PP‑like), flexible, de alta temperatura, colable (para joyería) y biocompatible. Todas requieren post‑curado para alcanzar sus valores nominales.

| Tipo de resina | Resistencia a tracción | Elongación a rotura | Temperatura de deflexión térmica (HDT) | Contracción volumétrica típica |
|---|---|---|---|---|
| Estándar | 30–50 MPa / 4.4–7.3 ksi | 5–15 % | 45–60 °C / 113–140 °F | 3–8 % |
| Tough (ABS‑like) | 45–65 MPa / 6.5–9.4 ksi | 20–50 % | 55–75 °C / 131–167 °F | 2–6 % |
| Flexible | 5–15 MPa / 0.7–2.2 ksi | 100–300 % | < 40 °C / < 104 °F | 1–5 % |
| Alta temperatura | 50–80 MPa / 7.3–11.6 ksi | 1–10 % | 120–250 °C / 248–482 °F | 5–10 % |
| Colable | 20–40 MPa / 2.9–5.8 ksi | 2–10 % | — (eliminación por calcinación) | < 0.5 % (cenizas) |
| Biocompatible (ISO 10993) | 40–60 MPa / 5.8–8.7 ksi | 3–20 % | 55–70 °C / 131–158 °F | 2–5 % |

## Tolerancias y rugosidad superficial

La precisión dimensional en SLA/DLP depende del tamaño de la pieza, la orientación de construcción y la compensación por contracción. Para piezas pequeñas (< 100 mm / 3.94 in) se alcanzan tolerancias de ±0,1 mm / ±0.004 in, mientras que en piezas grandes el error puede aumentar a ±0,25 mm / ±0.010 in o más. La rugosidad superficial está directamente relacionada con el espesor de capa y el efecto escalón.

| Espesor de capa | Rugosidad superficial típica (Ra) |
|---|---|
| 0,025 mm / 0.001 in | 1–5 µm / 39–197 µin |
| 0,05 mm / 0.002 in | 5–12 µm / 197–472 µin |
| 0,10 mm / 0.004 in | 10–25 µm / 394–984 µin |
| 0,15 mm / 0.006 in | 20–40 µm / 787–1575 µin |

## Ventajas y limitaciones

La tecnología SLA/DLP ofrece una combinación de alta resolución y buena calidad superficial que la hace particularmente adecuada para modelos de precisión, moldes matrices, joyería y guías quirúrgicas. El post‑procesado, la fragilidad de las resinas estándar y la toxicidad de los materiales no curados son sus principales desventajas.

| Ventajas | Limitaciones |
|---|---|
| Calidad superficial muy fina | Piezas frágiles con resinas estándar |
| Alta precisión dimensional | Superficie pegajosa sin post‑curado adecuado |
| Amplia gama de resinas especializadas | Deformación por post‑curado prolongado |
| Capacidad de geometrías complejas y paredes delgadas | Necesidad de estructuras de soporte |
| Proceso simple y automatizado | Toxicidad del material no curado; requiere ventilación |

## Selección de parámetros

1.  **Detalle fino y superficies suaves**: elegir espesor de capa entre 0,025 mm / 0.001 in y 0,05 mm / 0.002 in; sacrifica velocidad de construcción. Orientar la pieza con el eje largo vertical minimiza el efecto escalón pero aumenta el tiempo de impresión.
2.  **Producción rápida de prototipos**: capa de 0,10 mm / 0.004 in o superior; orientación horizontal siempre que sea posible para reducir la altura de construcción. Usar resina estándar.
3.  **Piezas funcionales sometidas a esfuerzo**: optar por resinas *tough* o de ingeniería, con post‑curado controlado para evitar distorsión. Compensar contracción aplicando un factor de escala de 1,005–1,020.
4.  **Aplicaciones de alta temperatura**: resinas con HDT > 120 °C / 248 °F, post‑curado térmico adicional tras el UV. El espesor de capa no debe superar 0,05 mm / 0.002 in para garantizar uniformidad de curado.
5.  **Joyería y fundición**: usar resinas colables con bajo contenido de cenizas, capa de 0,025–0,05 mm / 0.001–0.002 in y orientación que coloque los soportes en zonas no visibles o de fácil remoción.
6.  **Biocompatibilidad**: seleccionar resinas certificadas ISO 10993, con lavado y post‑curado conforme a las instrucciones del fabricante. No omitir el post‑curado, ya que la conversión incompleta libera monómeros residuales.

## Preguntas frecuentes

1.  **¿Cuál es la resolución de capa típica en SLA?** La resolución de capa suele variar entre 0,025 mm / 0.001 in y 0,15 mm / 0.006 in; el valor más común es 0,05 mm / 0.002 in para equilibrio entre detalle y velocidad.

2.  **¿Qué tolerancia dimensional puedo esperar en una pieza SLA/DLP?** Para piezas de hasta 100 mm / 3.94 in la tolerancia típica es de ±0,1 mm / ±0.004 in; en piezas mayores puede llegar a ±0,25 mm / ±0.010 in o más.

3.  **¿Cuánto tiempo tarda el post‑curado?** El post‑curado UV suele durar entre 5 y 30 minutos por pieza, dependiendo del tamaño y de la potencia de la lámpara; algunas resinas de alta temperatura requieren un curado térmico adicional de 1 a 4 horas a 120–160 °C / 248–320 °F.

4.  **¿Es necesario usar soportes?** Sí, casi siempre. Las piezas con voladizos superiores a 45° o áreas aisladas necesitan soportes para evitar deformaciones durante la impresión, al igual que las secciones que no tocan directamente la plataforma de construcción.

5.  **¿Qué resistencia tienen las piezas SLA frente a las de FDM?** Las resinas estándar ofrecen resistencia a tracción de 30–50 MPa / 4.4–7.3 ksi, comparable al PLA, pero menor elongación (5–15 %). Las resinas tipo ABS‑like elevan la resistencia hasta 65 MPa / 9.4 ksi con elongaciones de hasta 50 %.

6.  **¿Se puede pintar o metalizar una pieza SLA?** Sí, tras lijado y aplicación de imprimación. La superficie puede pintarse con pinturas acrílicas o de poliuretano, y también puede someterse a metalizado electrolítico si se aplica un barniz conductor previo. Se recomienda un post‑curado completo para eliminar la pegajosidad residual.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sla.cfm
