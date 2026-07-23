---
title: "Conversión rugosidad Ra Rz RMS CLA"
sidebar:
  label: "Conversión rugosidad Ra Rz RMS CLA"
description: "Ficha tecnica: Conversión rugosidad Ra Rz RMS CLA"
keywords: ["surface roughness Ra Rz RMS CLA conversion table", "converters"]
category: "converters"
topic: "roughness"
subcategory: "ra-rz-rms"
skill: "converter-reference-table"
launch_phase: 10
last_updated: "2026-07-23"
verified: true
---

## Descripción
La rugosidad superficial se mide con diferentes parámetros normalizados como Ra, Rz, RMS y CLA. Convertir entre ellos permite comparar especificaciones de planos, informes de medición y requisitos de fabricación. Ra (rugosidad media aritmética) es el parámetro más difundido en la norma ISO. CLA (Center Line Average) es un sinónimo histórico británico de Ra, normalmente expresado en micropulgadas (µin). RMS (Root Mean Square, también designado Rq) cuantifica la rugosidad media cuadrática, lo que le da mayor peso a los picos y valles pronunciados. Rz (altura media máxima del perfil) mide la media de cinco profundidades pico‑valle consecutivas, por lo que es más sensible a defectos puntuales. No existe una relación matemática universalmente exacta entre ellos, pero en la práctica se emplean factores aproximados basados en procesos típicos de mecanizado.

## Tabla de conversión Ra, Rz, RMS, CLA
La tabla siguiente emplea las equivalencias prácticas para superficies mecanizadas por arranque de viruta, rectificado y lapeado. Todas las conversiones son aproximadas; el factor real depende del proceso de fabricación y de la distribución de alturas del perfil.

| Ra (µm) / Ra (µin) | RMS / Rq (µm) / RMS / Rq (µin) | Rz (µm) / Rz (µin) | CLA (µin) ¹ |
| --- | --- | --- | --- |
| 0.025 µm / 1.0 µin | 0.028 µm / 1.1 µin | 0.10 µm / 3.9 µin | 1.0 µin |
| 0.05 µm / 2.0 µin | 0.056 µm / 2.2 µin | 0.20 µm / 7.9 µin | 2.0 µin |
| 0.1 µm / 3.9 µin | 0.11 µm / 4.3 µin | 0.4 µm / 15.7 µin | 3.9 µin |
| 0.2 µm / 7.9 µin | 0.22 µm / 8.7 µin | 0.8 µm / 31.5 µin | 7.9 µin |
| 0.4 µm / 15.7 µin | 0.44 µm / 17.3 µin | 1.6 µm / 63 µin | 15.7 µin |
| 0.8 µm / 31.5 µin | 0.89 µm / 35 µin | 3.2 µm / 126 µin | 31.5 µin |
| 1.6 µm / 63 µin | 1.78 µm / 70 µin | 6.3 µm / 248 µin | 63 µin |
| 3.2 µm / 126 µin | 3.55 µm / 140 µin | 12.5 µm / 492 µin | 126 µin |
| 6.3 µm / 248 µin | 6.99 µm / 275 µin | 25 µm / 984 µin | 248 µin |
| 12.5 µm / 492 µin | 13.9 µm / 547 µin | 50 µm / 1969 µin | 492 µin |
| 25 µm / 984 µin | 27.8 µm / 1094 µin | 100 µm / 3937 µin | 984 µin |
| 50 µm / 1969 µin | 55.5 µm / 2185 µin | 200 µm / 7874 µin | 1969 µin |

¹ CLA es el valor de Ra en micropulgadas; se incluye por compatibilidad con planos antiguos.

## Fórmulas de conversión directa e inversa
Las fórmulas que se indican a continuación son las de uso industrial más aceptado para superficies de torneado, fresado, rectificado y lapeado. Los factores deben ajustarse según el proceso concreto.

- **Ra a RMS (Rq):**  
  RMS ≈ 1.11 × Ra  
  Ejemplo: para Ra = 3.2 µm / 126 µin, RMS ≈ 3.55 µm / 140 µin

- **Ra a Rz:**  
  Rz ≈ 4.0 × Ra (rango típico 3.5 – 6 × Ra según el proceso)  
  Ejemplo: para Ra = 1.6 µm / 63 µin, Rz ≈ 6.4 µm / 252 µin (aquí se redondea al valor ISO 6.3 µm)

- **CLA a Ra:**  
  CLA (µin) / 39.37 = Ra (µm)  o  Ra (µm) × 39.37 = Ra (µin) = CLA (µin)  
  Como CLA equivale numéricamente a Ra en micropulgadas, no se requiere factor adicional.

- **Rz a Ra (inverso):**  
  Ra ≈ Rz / 4.0  
  Ejemplo: Rz = 25 µm / 984 µin ⇒ Ra ≈ 6.25 µm / 246 µin (se adopta 6.3 µm / 248 µin como valor normalizado)

- **RMS a Ra (inverso):**  
  Ra ≈ RMS / 1.11  
  Ejemplo: RMS = 1.78 µm / 70 µin ⇒ Ra ≈ 1.6 µm / 63 µin

## Notas sobre precisión y casos especiales
- **Los factores son aproximados.** La relación real entre Ra y Rz varía entre 3:1 y 7:1 dependiendo del material, la herramienta, los parámetros de corte y la dirección de medida. Para superficies rectificadas se suele usar 4:1; para fresado o torneado rugoso puede alcanzar 6:1 o más.
- **RMS (Rq) y Ra solo coinciden** si el perfil es una línea recta; cuanto más irregular es la superficie, mayor es la diferencia. Para perfiles sinusoidales, Rq ≈ 1.11 Ra. En procesos con picos aislados (poros, rayaduras) Rq puede ser sensiblemente mayor.
- **CLA vs. Ra:** El Center Line Average (BS 1134) es la media aritmética de las desviaciones tomadas desde la línea central y matemáticamente es igual a Ra. En la práctica, cualquier conversión directa (1 CLA = 1 Ra en las mismas unidades) es exacta. Las discrepancias solo aparecen por errores de filtrado o de instrumentación.
- **Rz (ISO 4287)** corresponde a la media de cinco alturas máximas pico‑valle en la longitud de muestreo. En normas más antiguas (DIN 4768) Rz se definía como la altura media pico‑valle en una sola longitud de referencia, dando valores distintos; se debe verificar la edición de la norma aplicable.
- **Conversión a micropulgadas:** 1 µm equivale a 39.37 µin. Las tolerancias en industrias que usan unidades imperiales se expresan a menudo en micropulgadas, por lo que la conversión µm ↔ µin resulta imprescindible. La tabla incorpora ambos valores en cada celda para evitar errores de redondeo.
- **Tabla especializada por proceso:** Si se necesita máxima precisión, se recomienda consultar gráficos de equivalencia suministrados por el fabricante de la instrumentación o basados en series medidas sobre patrones certificados.

## Preguntas frecuentes (FAQ)

**1. ¿Cuánto vale Rz si Ra es 3.2 µm?**  
Para Ra = 3.2 µm / 126 µin, la conversión típica da Rz ≈ 12.5 µm / 492 µin (factor 3.9). En mecanizado suave el valor puede oscilar entre 11 µm y 16 µm / 433–630 µin.

**2. ¿Qué RMS corresponde a una rugosidad Ra de 0.8 µm?**  
Un Ra de 0.8 µm / 31.5 µin se traduce en un RMS de aproximadamente 0.89 µm / 35 µin (factor 1.11). En rectificado de precisión se han reportado valores de hasta 0.93 µm / 37 µin.

**3. ¿Cómo se pasa de CLA a Ra en µm?**  
CLA (µin) equivale a Ra (µin). Así, un CLA de 63 µin corresponde a 1.6 µm (63 / 39.37). Esta conversión es directa y sin factor empírico.

**4. ¿Cuál es el valor de Rz para Ra 1.6 µm?**  
Para Ra = 1.6 µm / 63 µin, el Rz esperado es 6.3 µm / 248 µin. En procesos de torneado puede variar entre 5 µm y 9 µm / 197–354 µin según el avance y el radio de punta.

**5. ¿Qué Ra resulta de un Rz medido de 25 µm?**  
Aplicando el factor 4, Ra ≈ 6.25 µm / 246 µin, que en la práctica se redondea a 6.3 µm / 248 µin. En superficies de fundición con alto Rz, el Ra podría ser tan bajo como 4 µm / 157 µin si el perfil está muy desigual.

**6. ¿Son válidas estas conversiones para todo material?**  
Las conversiones dependen más del proceso de fabricación que del material. No obstante, materiales dúctiles (aluminio, cobre) tienden a generar perfiles más regulares con relaciones Ra/Rz más próximas a 4.0, mientras que fundiciones y aleaciones frágiles pueden mostrar picos aislados que elevan Rz sin afectar tanto a Ra.

## Fuentes consultadas

- **unitconverters.net**: https://www.unitconverters.net/
- **convertworld.com**: https://www.convertworld.com/en/
