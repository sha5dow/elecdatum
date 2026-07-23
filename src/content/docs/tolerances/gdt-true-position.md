---
title: "GDT Posición verdadera"
sidebar:
  label: "GDT Posición verdadera"
description: "Ficha tecnica: GDT Posición verdadera"
keywords: ["GDT position true position tolerance zone", "tolerances"]
category: "tolerances"
topic: "gdt"
subcategory: "position"
skill: "standards-guide"
launch_phase: 3
last_updated: "2026-07-23"
verified: true
---

La posición verdadera es un control geométrico que define la ubicación exacta de un elemento (agujero, ranura, saliente) mediante dimensiones básicas y referencias a datum. Especifica una zona de tolerancia cilíndrica dentro de la cual debe encontrarse el eje, el punto medio o el plano medio del elemento controlado. A diferencia de la acotación por coordenadas cartesianas, la zona cilíndrica permite un aprovechamiento hasta un 57 % mayor del espacio disponible para el error de posición, lo que facilita la fabricación sin comprometer la intercambiabilidad.

## Zona de tolerancia e interpretación

La tolerancia de posición se interpreta siempre como un diámetro que define un cilindro (o un ancho de banda para elementos no cilíndricos) orientado y localizado según los datum especificados en el marco de control. El valor indicado en el marco es el diámetro de la zona, lo que significa que el eje del elemento puede desplazarse radialmente la mitad de ese valor desde su posición teórica exacta.

| Característica | RFS (sin modificador) | MMC (círculo Ⓜ) | LMC (círculo Ⓛ) |
|----------------|------------------------|-----------------|------------------|
| **Condición de aplicabilidad** | Independientemente del tamaño real del elemento | Cuando el elemento está en condición de máximo material | Cuando el elemento está en condición de mínimo material |
| **Zona de tolerancia** | Diámetro fijo igual a la tolerancia especificada (ej. ∅0,2 mm / ∅0.008 in) | Diámetro variable; tolerancia especificada + bonus por desviación del MMC | Diámetro variable; tolerancia especificada + bonus por desviación del LMC |
| **Tolerancia adicional (bonus)** | 0 mm / 0 in | Diferencia entre MMC y tamaño real | Diferencia entre tamaño real y LMC |
| **Uso principal** | Ajustes de precisión, concentricidad | Aseguramiento de montaje, piezas de chapa | Control de espesor mínimo de pared |

La zona de tolerancia se ubica perpendicular al datum primario y centrada en las intersecciones de los planos datum secundario y terciario, formando un sistema de referencia cartesiano que reproduce el montaje real de la pieza.

## Símbolo y marco de control de elemento

El símbolo de posición verdadera es una diana estilizada (cruz con círculo central). En el marco de control se dispone de la siguiente manera:

```
⌖ | ∅0,2 Ⓜ | A | B | C
```

- Primer compartimento: símbolo de característica geométrica (posición verdadera)
- Segundo compartimento: valor de tolerancia con modificador opcional (aquí ∅0,2 mm / ∅0.008 in con MMC)
- Tercer compartimento en adelante: letras de referencia datum en orden de prioridad (primario, secundario, terciario)

Las dimensiones básicas (teóricamente exactas) que localizan el elemento se representan en el plano encerradas en un rectángulo, sin tolerancia directa. La tolerancia completa proviene exclusivamente del marco de control.

## Requisito de máximo material (MMR) y condición virtual

Cuando se aplica el modificador Ⓜ (MMR – Maximum Material Requirement), la tolerancia geométrica especificada es válida únicamente cuando el elemento de tamaño se encuentra en su condición de máximo material (MMC). Si el tamaño real se aleja del MMC, se genera una tolerancia adicional (bonus) de igual magnitud, sin comprometer la condición virtual de montaje.

### Ejemplo numérico con agujero

| Parámetro | Valor métrico | Valor imperial |
|-----------|---------------|----------------|
| Diámetro nominal | 10 mm | 0.3937 in |
| Tolerancia dimensional | +0,2 mm / 0 mm | +0.0079 in / 0 in |
| MMC (mínimo diámetro de agujero) | 10,0 mm | 0.3937 in |
| LMC (máximo diámetro de agujero) | 10,2 mm | 0.4016 in |
| Tolerancia de posición especificada (∅) | 0,1 mm | 0.0039 in |
| Diámetro real medido | 10,15 mm | 0.3996 in |
| Bonus por desviación del MMC | 0,15 mm | 0.0059 in |
| Tolerancia total de posición | 0,25 mm | 0.0098 in |
| MMVS (Maximum Material Virtual Size) | 9,9 mm | 0.3898 in |

La condición virtual de máximo material (MMVC) es un cilindro de diámetro 9,9 mm / 0.3898 in perfectamente orientado y localizado. Mientras ningún punto del agujero viole este volumen, la pieza será montable.

### Ejemplo numérico con pasador

| Parámetro | Valor métrico | Valor imperial |
|-----------|---------------|----------------|
| Diámetro nominal | 10 mm | 0.3937 in |
| Tolerancia dimensional | 0 mm / -0,2 mm | 0 in / -0.0079 in |
| MMC (máximo diámetro de pasador) | 10,0 mm | 0.3937 in |
| LMC (mínimo diámetro de pasador) | 9,8 mm | 0.3858 in |
| Tolerancia de posición especificada (∅) | 0,1 mm | 0.0039 in |
| Diámetro real medido | 9,85 mm | 0.3878 in |
| Bonus por desviación del MMC | 0,15 mm | 0.0059 in |
| Tolerancia total de posición | 0,25 mm | 0.0098 in |
| MMVS (Maximum Material Virtual Size) | 10,1 mm | 0.3976 in |

## Requisito de mínimo material (LMR)

El modificador Ⓛ (LMR – Least Material Requirement) se emplea cuando la condición crítica es el espesor mínimo de pared. La tolerancia geométrica especificada se aplica en la condición de mínimo material (LMC). A medida que el tamaño real se desvía del LMC, se concede un bonus proporcional.

| Estado del elemento | Tolerancia de posición aplicable |
|---------------------|----------------------------------|
| En LMC (máximo agujero, mínimo pasador) | Tolerancia especificada (ej. ∅0,1 mm / ∅0.0039 in) |
| En MMC (mínimo agujero, máximo pasador) | Tolerancia especificada + diferencia diametral total (ej. ∅0,3 mm / ∅0.0118 in) |

Esta práctica protege distancias mínimas entre superficies críticas, común en componentes fundidos o forjados.

## Aplicaciones prácticas

### Montaje de dos placas con tornillos

Dos placas unidas mediante tornillos M6 (paso 1 mm). Agujeros pasantes en la placa superior de diámetro 6,5 mm / 0.256 in con tolerancia dimensional ±0,2 mm / ±0.008 in. Agujeros roscados en la placa inferior M6. Se aplica posición verdadera con MMC a los agujeros pasantes:

- Posición especificada: ∅0,2 mm / ∅0.008 in Ⓜ
- MMC agujero: 6,3 mm / 0.248 in
- Si el agujero se produce en 6,5 mm / 0.256 in, bonus = 0,2 mm / 0.008 in
- Tolerancia total de posición: ∅0,4 mm / ∅0.016 in

Con esta especificación, incluso en la peor combinación de diámetros y posiciones, el tornillo siempre encontrará holgura suficiente para el montaje.

### Patrón de agujeros con datum común

Para cuatro agujeros equidistantes en un patrón circular, se especifican dimensiones básicas de radio y ángulo, y un marco de control único con referencia al eje central como datum primario y la superficie de apoyo como secundaria. La tolerancia de posición se aplica a cada agujero individualmente o como grupo, según se requiera repetibilidad de montaje.

## Comparación entre normas ISO y ASME

| Aspecto | ASME Y14.5 | ISO 1101 (GPS) |
|---------|-------------|-----------------|
| **Condición por defecto** | RFS (Regardless of Feature Size) siempre que no se indique modificador | Independencia; el tamaño y la geometría no están relacionados a menos que se use Ⓜ, Ⓛ o (E) |
| **Notación MMR** | Ⓜ en el compartimento de tolerancia y/o datum | Ⓜ en el compartimento de tolerancia; el datum puede llevar modificador independiente |
| **Condición virtual** | MMVC definido como frontera fija | MMVC de igual interpretación práctica |
| **Tolerancia de posición sin datum** | No permitida; al menos un datum es obligatorio | Permitida en casos de autorreferencia |
| **Zona de tolerancia proyectada** | Símbolo Ⓟ | Símbolo Ⓟ, interpretación idéntica |

En aplicaciones industriales con múltiples proveedores es crítico especificar en el cajetín del plano la norma aplicable (ASME Y14.5 o ISO 1101) para evitar interpretaciones contradictorias.

## Tablas de referencia

### Tolerancias de posición sugeridas por diámetro nominal

| Diámetro nominal del agujero (mm / in) | Tornillo / pasador típico | Tolerancia de posición sugerida ∅ (mm / in) |
|----------------------------------------|---------------------------|--------------------------------------------|
| 3,0 mm / 0.118 in | M2,5 | 0,10 mm / 0.0039 in |
| 5,0 mm / 0.197 in | M4 | 0,15 mm / 0.0059 in |
| 6,5 mm / 0.256 in | M5 | 0,20 mm / 0.0079 in |
| 8,5 mm / 0.335 in | M6 | 0,25 mm / 0.0098 in |
| 10,5 mm / 0.413 in | M8 | 0,30 mm / 0.0118 in |
| 13,0 mm / 0.512 in | M10 | 0,35 mm / 0.0138 in |
| 17,0 mm / 0.669 in | M12 | 0,40 mm / 0.0157 in |

### Capacidad de proceso y grados de tolerancia

Según la tabla de grados de tolerancia ANSI B4.1 para mecanizado, los procesos capaces de mantener tolerancias dimensionales en los rangos IT4 a IT13 se relacionan con la precisión de posición alcanzable. La tabla siguiente asocia el grado de tolerancia dimensional con una precisión de posición orientativa para un diámetro nominal de 10 mm.

| Proceso de mecanizado | Grado IT típico | Tolerancia dimensional (µm / µin) | Precisión de posición orientativa (∅ mm / ∅ in) |
|------------------------|-----------------|----------------------------------|-------------------------------------------------|
| Lapeado / Rectificado fino | IT4–IT5 | 4–6 µm / 157–236 µin | 0,005 mm / 0.0002 in |
| Rectificado cilíndrico | IT6 | 9 µm / 354 µin | 0,010 mm / 0.0004 in |
| Torneado diamantado | IT7 | 15 µm / 591 µin | 0,020 mm / 0.0008 in |
| Brochado / Escariado | IT8 | 22 µm / 866 µin | 0,030 mm / 0.0012 in |
| Torneado general | IT9–IT10 | 36–58 µm / 1417–2283 µin | 0,050 mm / 0.0020 in |
| Taladrado | IT11–IT12 | 90–150 µm / 3543–5906 µin | 0,100 mm / 0.0039 in |
| Planeado / Limado | IT12–IT13 | 150–220 µm / 5906–8661 µin | 0,200 mm / 0.0079 in |

Valores orientativos; la posición verdadera exigible depende además de la rigidez del conjunto, el tipo de ajuste y la presencia de MMC/LMC.

## Preguntas frecuentes

**¿Qué mejora supone la zona de tolerancia cilíndrica de 0,1 mm / 0.0039 in respecto a una tolerancia cartesiana equivalente?**  
La zona cilíndrica de diámetro 0,1 mm / 0.0039 in ofrece un 57 % más de área útil que una zona cuadrada de lado 0,1 mm / 0.0039 in, ya que elimina las restricciones rígidas de las esquinas y admite desplazamientos diagonales completos.

**¿Cómo se calcula la tolerancia adicional cuando se aplica el modificador Ⓜ a un agujero de 6,5 mm / 0.256 in con tolerancia dimensional +0,2 mm / 0?**  
Si el diámetro real es 6,7 mm / 0.264 in, el bonus es la diferencia entre el diámetro real y el MMC (6,5 mm / 0.256 in), es decir 0,2 mm / 0.008 in, que se suma a la tolerancia de posición especificada.

**¿Qué valor de posición verdadera se recomienda para un agujero pasante de M8 con diámetro 9,0 mm / 0.354 in?**  
Con un diámetro de agujero 9,0 mm / 0.354 in y un tornillo M8, la tolerancia de posición sugerida es ∅0,3 mm / ∅0.012 in aplicada con MMC para garantizar la intercambiabilidad.

**¿Cuál es el tamaño virtual de máximo material (MMVS) para un agujero de 10,0 mm / 0.3937 in con tolerancia de posición ∅0,1 mm / ∅0.0039 in?**  
El MMVS resulta de restar la tolerancia de posición al MMC: 10,0 mm – 0,1 mm = 9,9 mm / 0.3898 in. Representa el diámetro del pasador de montaje en peor condición.

**¿Un marco de control con ∅0,2 mm / ∅0.008 in y sin modificador permite movimiento radial de 0,2 mm / 0.008 in?**  
No; al ser una zona cilíndrica, el valor ∅0,2 mm / ∅0.008 in es el diámetro total admisible. El eje puede desplazarse un máximo de 0,1 mm / 0.004 in radialmente desde su posición teórica.

**¿Cómo afecta el principio de independencia de ISO a la posición verdadera sin modificador?**  
En ISO, si no se especifica Ⓜ o (E), el tamaño del elemento no influye en la tolerancia geométrica: un agujero de 10,0 mm / 0.3937 in mantiene su zona de posición fija, aunque su diámetro real varíe, a diferencia del RFS de ASME que tampoco otorga bonus pero sí exige el cumplimiento de envolvente.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/machine-processes-tolerance-grades-d_1367.html
- **roymech.org**: https://roymech.org/Useful_Tables/Drawing/draw_geom_notes.html
