---
title: "GDT Concentricidad y Simetría"
sidebar:
  label: "GDT Concentricidad y Simetría"
description: "Ficha tecnica: GDT Concentricidad y Simetría"
keywords: ["GDT concentricity symmetry tolerance", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "concentricity-symmetry"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

## Visión general

La concentricidad y la simetría son tolerancias geométricas de localización que controlan la posición del eje central (concentricidad) o del plano medio (simetría) de una pieza respecto a un elemento datum de referencia. Ambas tolerancias se utilizan para asegurar el equilibrio dinámico, la alineación de montajes y la intercambiabilidad, aunque en la práctica moderna a menudo se sustituyen por tolerancias de posición o perfil por su mayor facilidad de verificación.

La zona de tolerancia de concentricidad es un cilindro cuyo diámetro es igual al valor de tolerancia especificado; el eje derivado de la pieza debe estar completamente dentro de este cilindro. En simetría, la zona de tolerancia está formada por dos planos paralelos separados una distancia igual al valor de tolerancia, y el plano medio real debe encontrarse entre ambos.

## Interpretación de símbolos

Los símbolos normalizados y su marco de control de operación contienen el indicador geométrico, el valor de tolerancia y, cuando es necesario, referencias a datum. Las representaciones más utilizadas son:

| Sistema | Símbolo | Descripción visual |
| --- | --- | --- |
| ASME Y14.5‑2018 | ⊗ | Círculo con una cruz en su interior (retículo) |
| ISO 1101 | ⊚ | Dos círculos concéntricos (circunferencia doble) |

En la simetría, ASME emplea un símbolo compuesto por tres líneas horizontales paralelas (línea central gruesa flanqueada por dos líneas finas). ISO utiliza la misma representación. El valor de tolerancia se coloca en la segunda celda del marco de control, expresado en milímetros (o pulgadas según norma); por ejemplo, **0,02 mm / 0.0008 in** indica una zona cilíndrica de diámetro 0,02 mm para concentricidad, o una zona plana de 0,02 mm de espesor para simetría.

## Tolerancias por grado de mecanizado

La capacidad de un proceso para conseguir tolerancias de concentricidad/simetría se relaciona con el grado de tolerancia ISO que puede mantener. A continuación se indican los rangos típicos para un eje o superficie de referencia con diámetro nominal de 25 mm (1 in). La tabla se basa en las correspondencias entre procesos y grados ISO según la norma ISO 286‑1.

| Proceso | Grados ISO | Tolerancia de concentricidad para Ø25 mm (mm / in) |
| --- | --- | --- |
| Lapeado y bruñido | IT4–IT6 | 0,006–0,013 mm / 0.00024–0.00051 in |
| Rectificado cilíndrico | IT5–IT7 | 0,009–0,021 mm / 0.00035–0.00083 in |
| Torneado de precisión | IT7–IT9 | 0,021–0,052 mm / 0.00083–0.00205 in |
| Fresado | IT9–IT11 | 0,052–0,130 mm / 0.00205–0.00512 in |
| Taladrado | IT10–IT12 | 0,084–0,210 mm / 0.00331–0.00827 in |

Los valores representan el rango de tolerancia (diámetro de zona cilíndrica o anchura de zona plana) que se puede alcanzar de manera fiable con cada proceso bajo condiciones normales de producción. Para piezas de mayor tamaño, la tolerancia absoluta aumenta según los valores tabulados de las calidades IT; la conversión a pulgadas se redondea a cinco decimales.

## Comparativa ISO vs ASME

La comparación entre los dos sistemas principales revela diferencias normativas y de aplicación que afectan directamente a la interpretación en taller.

| Aspecto | ASME Y14.5‑2018 | ISO 1101 (GPS) |
| --- | --- | --- |
| **Estado normativo** | Reintroducida tras ausencia en la edición 2009 | Vigente de forma continuada |
| **Elemento controlado** | Eje medio de elementos opuestos | Línea mediana derivada (median line) |
| **Zona de tolerancia** | Cilindro de diámetro **t** (ej. 0,025 mm / 0.001 in) | Cilindro de diámetro **t** |
| **Requisito de datum** | Obligatorio; al menos un datum axial | Obligatorio |
| **Aplicación preferente** | Piezas rotativas de alta velocidad | Piezas estáticas y de rotación lenta |
| **Símbolo de concentricidad** | ⊗ (círculo con cruz) | ⊚ (dos círculos concéntricos) |
| **Simetría** | Símbolo de tres líneas paralelas; misma lógica de zona | Ídem; se usa en planos medios de chaveteros, etc. |

En la práctica, muchos diseñadores reemplazan concentricidad/simetría por tolerancias de posición con el modificador de zona proyectada, ya que éstas permiten una verificación más sencilla con métodos funcionales (calibres pasa/no pasa) y ofrecen mayor margen de tolerancia.

## Ejemplos de aplicación real

**Eje de rotor de motor eléctrico de 30 mm de diámetro**. Para asegurar que el entrehierro magnético sea uniforme y evitar vibraciones, el asiento del rotor debe ser concéntrico con los muñones de apoyo (dato A‑B). Se especifica una tolerancia de concentricidad de **0,015 mm / 0.0006 in**, alcanzable mediante rectificado cilíndrico entre centros (IT6). El control garantiza que el centro del paquete magnético no se desplace más de 0,0075 mm (0.0003 in) radialmente respecto al eje de giro.

**Chavetero de cuña en un eje de transmisión de 40 mm de diámetro**. La ranura de la chaveta debe ser simétrica respecto al eje que definen los centros de los extremos del eje. Se prescribe una simetría de **0,05 mm / 0.002 in**, lo que significa que el plano medio de la ranura puede desplazarse como máximo ±0,025 mm (±0.001 in) respecto al datum. Esta tolerancia se verifica con un reloj comparador montado en un soporte de centrado, tomando medidas en ambos lados de la ranura.

**Alojamiento de cojinete en una carcasa bipartida**. Los dos semicilindros que alojan un cojinete deben ser coaxiales entre sí y concéntricos con el plano de referencia de la base. Se aplica una concentricidad compuesta: el fabricante utiliza una tolerancia de posición de **0,03 mm / 0.0012 in** (Ø0,03 mm) que controla simultáneamente localización y orientación, simplificando la inspección respecto a la concentricidad pura.

## Preguntas frecuentes

**1. ¿Cuál es la tolerancia de concentricidad típica que ofrece un rectificado cilíndrico?**  
Para un eje de 25 mm de diámetro, el rectificado cilíndrico puede mantener una concentricidad entre **0,009 mm (0.00035 in) y 0,021 mm (0.00083 in)**, correspondiente a los grados IT5 a IT7.

**2. ¿Qué valor numérico debe aparecer en el marco de control para una simetría de 0,08 mm?**  
El marco indicaría el símbolo de simetría y la cifra **0,08**, lo que equivale a una zona plana de **0,08 mm / 0.00315 in** de espesor; el plano medio real debe estar dentro de esa zona respecto al datum especificado.

**3. ¿Por qué la concentricidad se eliminó de ASME Y14.5‑2009 y luego se reintrodujo?**  
Se eliminó en 2009 por la dificultad de medir la «mediana de puntos opuestos» y la preferencia por posición; se reintrodujo en 2018 con medición basada en la envolvente funcional, pero manteniendo el símbolo clásico (⊗).

**4. ¿Cómo se relaciona la concentricidad con la excentricidad que mide un comparador?**  
La excentricidad medida (TIR – Total Indicator Reading) es el doble del desplazamiento radial; si un comparador marca **0,04 mm (0.0016 in)** de variación total, la concentricidad (desviación del eje) es de **0,02 mm / 0.0008 in**.

**5. ¿Cuál es el grado ISO mínimo para garantizar una simetría de 0,1 mm en un chavetero?**  
Para una anchura nominal de 10 mm, el grado **IT11** (tolerancia 0,09 mm / 0.0035 in) o **IT10** (0,058 mm / 0.0023 in) pueden cumplir 0,1 mm; el fresado convencional alcanza IT9‑IT11.

**6. ¿Influye la longitud de la pieza en la tolerancia de concentricidad?**  
Sí, la relación longitud/diámetro puede hacer que la desviación angular amplifique el error; una pieza de 100 mm (3.94 in) de largo con una concentricidad de **0,03 mm / 0.0012 in** exige que el proceso mantenga una rectitud muy estricta, a menudo **0,005 mm / 0.0002 in** adicional en el cilindrado previo.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
