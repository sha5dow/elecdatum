---
title: "Comparativa procesos manufactura aditiva"
sidebar:
  label: "Comparativa procesos manufactura aditiva"
description: "Ficha tecnica: Comparativa procesos manufactura aditiva"
keywords: ["additive manufacturing FDM SLA SLS comparison", "manufacturing"]
category: "manufacturing"
topic: "additive"
subcategory: "comparison"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Principio de funcionamiento

Los procesos de manufactura aditiva analizados construyen piezas capa a capa a partir de un modelo digital, pero difieren en la forma de depositar y consolidar el material:

- **FDM (Modelado por deposición fundida):** extruye un filamento termoplástico a través de una boquilla caliente que se desplaza en los ejes X‑Y, depositando el material fundido sobre una plataforma. La pieza se forma al solidificar cada capa.
- **SLA (Estereolitografía):** un láser ultravioleta solidifica selectivamente una resina fotosensible líquida contenida en un tanque. Una plataforma desciende progresivamente y una nueva capa de resina se extiende sobre la anterior para ser curada por el láser.
- **SLS (Sinterizado selectivo por láser):** un láser de alta potencia (normalmente CO₂) sinteriza o fusiona partículas de polvo (nailon, elastómero, etc.) extendido en capas finas sobre un lecho. El lecho se precalienta justo por debajo del punto de fusión del polvo y no se requieren soportes porque el polvo no sinterizado actúa como tal.

## Materiales aplicables

| Proceso | Material | Presentación |
| --- | --- |
| FDM | ABS, PLA, PETG, TPU, PC, ASA, nailon, compuestos con fibra | Filamento (∅ 1,75 mm / 0.069 in o ∅ 2,85 mm / 0.112 in) |
| SLA | Resinas estándar, técnicas (rígidas, flexibles, calcinables), biocompatibles, cerámicas cargadas | Líquido fotosensible |
| SLS | Nailon PA12, PA11, TPU (elastómero), polipropileno, poliamidas reforzadas (fibra de vidrio, carbono), poliestireno (pérdida de cera) | Polvo esférico (tamaño medio 20–80 µm / 787–3150 µin) |

## Parámetros de proceso

| Proceso | Material | Espesor de capa | Temperatura de operación | Potencia / fuente | Velocidad típica de construcción |
| --- | --- | --- | --- | --- | --- |
| FDM | PLA | 0,1–0,3 mm / 0.004–0.012 in | Boquilla: 190–220 °C / 374–428 °F; cama: 50–60 °C / 122–140 °F | — | 40–100 mm/s (eje Z variable según capa) |
| FDM | ABS | 0,1–0,3 mm / 0.004–0.012 in | Boquilla: 220–250 °C / 428–482 °F; cama: 90–110 °C / 194–230 °F | — | 30–80 mm/s |
| SLA | Resina estándar | 0,025–0,15 mm / 0.001–0.006 in | Ambiente controlado 25–30 °C / 77–86 °F | Láser UV 355 nm, hasta 500 mW | 10–20 mm/h (avance en Z) |
| SLS | PA12 (nailon) | 0,1–0,15 mm / 0.004–0.006 in | Lecho de polvo precalentado 170–180 °C / 338–356 °F (≈ 5–10 °C bajo Tm) | Láser CO₂ 30–50 W, haz pulsado | 10–20 mm/h (avance en Z) |
| SLS | TPU (elastómero) | 0,1–0,12 mm / 0.004–0.005 in | Lecho precalentado 80–100 °C / 176–212 °F | Láser CO₂ 20–40 W | 8–15 mm/h |

## Tolerancias y calidad superficial

| Proceso | Tolerancia dimensional típica | Rugosidad superficial (Ra) |
| --- | --- | --- |
| FDM | ±0,5 % del nominal (mínimo ±0,2 mm / 0.008 in) | 8–25 µm / 315–984 µin |
| SLA | ±0,1 mm / 0.004 in (hasta ±0,05 mm / 0.002 in en equipos de alta precisión) | 0,5–1,5 µm / 20–59 µin |
| SLS | ±0,3 mm / 0.012 in (Z puede ser mayor) | 5–15 µm / 197–591 µin (superficie polvorienta sin sellador) |

## Ventajas y limitaciones

| Proceso | Ventajas | Limitaciones |
| --- | --- | --- |
| FDM | Bajo coste, amplia variedad de materiales termoplásticos, facilidad de uso, piezas funcionales, posibilidad de composites. | Menor resolución superficial, anisotropía mecánica (resistencia inferior en Z), requiere soportes para voladizos. |
| SLA | Muy alta precisión dimensional, excelente acabado superficial, posibilidad de materiales transparentes o calcinables, adecuado para prototipado visual y moldes. | Limitado a resinas fotosensibles (menor durabilidad mecánica y térmica que termoplásticos), postcurado necesario, menor resistencia al impacto. |
| SLS | Materiales muy próximos a termoplásticos de ingeniería (nailon, elastómeros), no necesita soportes, permite geometrías complejas y piezas funcionales, posible anidamiento 3D de piezas. | Acabado superficial poroso y polvoriento a menos que se aplique sellador, precisión en Z menos predecible que SLA, coste de máquina elevado, requiere manejo de polvo y precalentamiento controlado. |

## Guía de selección

Seleccione el proceso en función del criterio principal:

- **Bajo coste por pieza y material variado → FDM.** Ideal para prototipado rápido funcional, piezas de bajo esfuerzo y ensayos de forma/ajuste.
- **Máxima precisión y acabado superficial → SLA.** Recomendado para modelos de presentación, moldes maestros, patrones de colada y aplicaciones que exigen tolerancias inferiores a ±0,1 mm / 0.004 in.
- **Piezas funcionales sin soportes y con propiedades cercanas a termoplásticos de ingeniería → SLS.** Adecuado para series cortas, componentes con bisagras vivas, carcasas y geometrías inaccesibles por otros procesos.
- **Solicitaciones mecánicas o térmicas medias → FDM (con ABS, PC) o SLS (con PA12).** SLA queda descartado si se requiere tenacidad o resistencia a temperatura (> 60 °C / 140 °F).
- **Plazo de entrega urgente → FDM** (menor tiempo máquina para piezas sencillas). Para piezas muy detalladas, SLA puede ser competitivo.
- **Volumen de producción bajo (hasta 100 unidades) → SLS**, gracias al anidamiento y la ausencia de soportes que reduce el posprocesamiento.

## Preguntas frecuentes

1. **¿Cuál es la precisión dimensional típica de SLA?**  
   SLA alcanza tolerancias de ±0,1 mm / 0.004 in de forma rutinaria, pudiendo llegar a ±0,05 mm / 0.002 in en máquinas de alta gama.

2. **¿Qué espesor de capa emplea SLS en nailon PA12?**  
   El espesor de capa estándar para PA12 en SLS oscila entre 0,1 mm / 0.004 in y 0,15 mm / 0.006 in, lo que determina la rugosidad superficial y el tiempo de construcción.

3. **¿Cuál es la temperatura de la boquilla en FDM para ABS?**  
   La temperatura del extrusor para ABS se mantiene típicamente entre 220 °C / 428 °F y 250 °C / 482 °F, y la cama calefactada entre 90 °C / 194 °F y 110 °C / 230 °F para evitar el alabeo.

4. **¿Qué rugosidad superficial se puede esperar en piezas SLS sin sellar?**  
   La rugosidad media (Ra) de una pieza SLS sin tratamiento superficial está entre 5 µm / 197 µin y 15 µm / 591 µin, debido a la naturaleza polvorienta del polvo sinterizado.

5. **¿Cuánto tiempo tarda una impresión SLA de 100 mm de altura?**  
   Una pieza de 100 mm / 3.94 in de altura suele completarse en 5 a 10 horas con una configuración de capa de 0,1 mm / 0.004 in, dependiendo de la complejidad geométrica y del área de sección transversal.

6. **¿Qué espesor mínimo de pared se puede garantizar en FDM con boquilla de 0,4 mm?**  
   El espesor de pared mínimo funcional en FDM es de 0,8 mm / 0.031 in (doble del diámetro de boquilla) para garantizar resistencia estructural, aunque detalles decorativos pueden llegar a 0,4 mm / 0.016 in.

## Fuentes consultadas

- **efunda.com**: https://www.efunda.com/processes/rapid_prototyping/sls.cfm
- **manufacturingguide.com**: https://www.manufacturingguide.com/en/stereolithography-sla
