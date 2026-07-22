---
title: "Springback en doblado de chapa"
sidebar:
  label: "Springback en doblado de chapa"
description: "Ficha tecnica: Springback en doblado de chapa"
keywords: ["sheet metal springback by material angle", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "springback"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

La recuperación elástica tras el doblado, conocida como springback, modifica el ángulo de plegado final con valores típicos entre 2° y 10° para aceros al carbono y aleaciones de aluminio, dependiendo del radio de plegado y el espesor.

## Descripción general
El springback es un fenómeno inherente al conformado en frío de chapas metálicas, donde la pieza, una vez liberada de la herramienta, recupera parcialmente su forma original debido a la liberación de las tensiones elásticas acumuladas durante la deformación plástica. Como resultado, el ángulo de la pieza doblada es mayor que el ángulo del punzón, lo que obliga a sobredoblar para alcanzar la geometría deseada.

## Principio de funcionamiento
Durante el doblado, el material se somete a una deformación que combina una componente plástica (permanente) y una componente elástica (recuperable). Al retirar la carga, la parte elástica se relaja y la geometría cambia: el radio de curvatura aumenta y el ángulo se abre. La magnitud del springback se cuantifica por el factor de recuperación Ks = (180° – αf) / (180° – αi), donde αf es el ángulo final y αi el ángulo impuesto por la herramienta. La compensación consiste en sobreplegar la chapa un ángulo igual al springback previsto.

## Parámetros de springback
Los parámetros que rigen el springback son las propiedades mecánicas del material (límite elástico, módulo de Young, coeficiente de endurecimiento), la relación radio de plegado/espesor (R/t), el ángulo de doblado y la dirección de laminación. A mayor límite elástico y mayor relación R/t, mayor es la recuperación elástica.

| Parámetro | Efecto típico sobre el springback |
| :--- | :--- |
| Límite elástico (Re) | Aumento del springback con Re. |
| Módulo de Young (E) | Springback inversamente proporcional a E. |
| Relación Radio/Espesor (R/t) | A mayor R/t, mayor springback (recuperación del 5–15% adicional por cada unidad de aumento de R/t). |
| Ángulo de doblado (αi) | El springback absoluto crece con el ángulo de doblado. |
| Espesor de chapa (t) | A menor espesor, mayor springback para un mismo radio. |

## Materiales aplicables
El springback afecta a todos los metales conformados en frío, con diferencias notables según la aleación y el estado de tratamiento térmico.

**Aceros al carbono** (S235, A36, DC01): Springback moderado (2–5° en ángulos de 90° con R/t ≈ 1).
**Aceros inoxidables austeníticos** (AISI 304): Alto springback (5–8° bajo las mismas condiciones) debido a su elevado límite elástico y endurecimiento por deformación.
**Aleaciones de aluminio** (6061-T6, 7075-T6): Springback elevado (6–10°), especialmente en temple T6.
**Cobre y latón** (Cu-DHP, C26000): Springback bajo (1–3°), debido a su bajo límite elástico.
**Titanio** (Ti-6Al-4V): Springback muy alto (hasta 15°), combinado con un elevado retorno elástico.

## Ventajas y limitaciones
**Ventajas de controlar el springback**
- Permite obtener piezas dentro de tolerancias dimensionales estrechas (±0,5° en ángulo).
- Reduce rechazos y retrabajos al aplicar compensación predictiva.
- Aumenta la repetibilidad del proceso productivo.

**Limitaciones**
- Dependencia de variaciones lote a lote en propiedades mecánicas (el límite elástico puede variar ±10 %).
- Necesidad de software de simulación o ensayos prácticos para formas complejas.
- Desgaste de herramientas modifica el radio real y, con ello, el springback.

## Guía de selección de sobreplegado
Para seleccionar el ángulo de sobreplegado se recomienda:
1. Determinar experimentalmente el springback para el material y espesor mediante una pieza de prueba con el mismo R/t.
2. Emplear la fórmula de springback simplificada: αpunzón = αdeseado / (1 + (3·Re·R)/(E·t)), donde Re es el límite elástico y E el módulo de Young.
3. En producciones en serie, utilizar sistemas CNC con medición angular en tiempo real y compensación adaptativa.
4. Para geometrías de chapa delgada (t < 1,5 mm / 0.059 in), prever un sobreplegado del orden de 3°–8° según el material.

## Tablas de parámetros por material
Los valores inferiores se refieren a doblado a 90° en matriz en V con R/t=1 y chapa laminada en frío. Para otras condiciones, consultar la bibliografía especializada.

| Material | Espesor t (mm / in) | Radio de plegado R (mm / in) | Ángulo de springback (°) | Sobredoblado recomendado (°) |
| :--- | :--- | :--- | :--- | :--- |
| Acero al carbono S235 | 1,0 mm / 0.039 in | 1,0 mm / 0.039 in | 2° | 88° (punzón) |
| Acero al carbono S235 | 3,0 mm / 0.118 in | 3,0 mm / 0.118 in | 3° | 87° |
| Acero inoxidable 304 | 1,5 mm / 0.059 in | 1,5 mm / 0.059 in | 6° | 84° |
| Aluminio 6061-T6 | 2,0 mm / 0.079 in | 2,0 mm / 0.079 in | 8° | 82° |
| Aluminio 6061-T6 | 2,0 mm / 0.079 in | 4,0 mm / 0.157 in (R/t=2) | 12° | 78° |
| Latón C26000 | 1,0 mm / 0.039 in | 1,0 mm / 0.039 in | 2° | 88° |
| Titanio Ti-6Al-4V | 1,5 mm / 0.059 in | 1,5 mm / 0.059 in | 14° | 76° |

## Preguntas frecuentes (FAQ)

**¿Cuál es el springback típico en una chapa de acero S235 de 2 mm de espesor doblada a 90°?**
En condiciones normales con R/t=1, el springback es de aproximadamente 2,5°; para un espesor de 2 mm / 0.079 in, se requeriría un punzón con ángulo de 87,5° para compensarlo.

**¿Cómo afecta el radio de plegado al springback en aluminio 6061-T6?**
Con un R/t de 1, el springback ronda 8°, mientras que para R/t=2 asciende a 12°; duplicar el radio agrega entre 3° y 5° adicionales, dependiendo del espesor.

**¿Qué precisión se puede alcanzar con sistemas de compensación automática en plegadoras CNC?**
Los equipos con medición angular electrónica logran una precisión de ±0,2°, incluso en la primera pieza, gracias al ajuste en tiempo real del sobreplegado durante la carrera.

**¿Cuánto varía el springback por cambios en el límite elástico del lote?**
Una variación del ±10% en el límite elástico puede modificar el springback en 1° a 2°, especialmente en aceros inoxidables; por ello se recomienda muestrear cada lote antes de la producción.

**¿Debo considerar la dirección de laminación al estimar el springback?**
Sí, el springback puede diferir hasta 1° si se dobla en sentido transversal en lugar de paralelo a la laminación, debido a la anisotropía del material laminado en frío.

**¿Se puede eliminar completamente el springback mediante tratamiento térmico?**
Recocer la chapa reduce el límite elástico y, con ello, el springback (hasta un 50% menos) pero no lo elimina totalmente; el uso de matrices calientes puede minimizarlo aún más.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/steel-angles-d_1322.html
