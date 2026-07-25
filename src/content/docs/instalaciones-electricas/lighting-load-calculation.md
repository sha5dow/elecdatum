---
title: "Cálculo de carga de iluminación"
sidebar:
  label: "Cálculo de carga de iluminación"
description: "Ficha tecnica: Cálculo de carga de iluminación"
keywords: ["lighting load calculation VA per square foot", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "lighting-circuits"
subcategory: "lighting-load-calculation"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La carga de iluminación general para una vivienda se establece en **3 VA por pie cuadrado (ft²)**, equivalente a **32,3 VA/m²**, conforme a los requisitos mínimos del NEC para circuitos de alumbrado y tomas de uso general. Este valor cubre tanto las luminarias fijas como las bases de enchufe, constituyendo la base para el dimensionamiento de alimentadores y servicios eléctricos.

## Cargas de alumbrado general por tipo de ocupación
La siguiente tabla recoge los valores mínimos de carga unitaria que el NEC 220.12 asigna a cada tipo de ocupación, expresados en voltamperios por metro cuadrado y su equivalente en VA/ft². La carga total se obtiene multiplicando esta densidad por la superficie útil del local.

| Tipo de ocupación | Carga unitaria (VA/m² / VA/ft²) |
| :--- | :--- |
| Viviendas unifamiliares y multifamiliares | 32,3 VA/m² / 3,0 VA/ft² |
| Oficinas y bancos | 37,7 VA/m² / 3,5 VA/ft² |
| Locales comerciales y tiendas | 32,3 VA/m² / 3,0 VA/ft² |
| Iglesias y salones de actos | 10,8 VA/m² / 1,0 VA/ft² |
| Salas de reuniones y auditorios | 10,8 VA/m² / 1,0 VA/ft² |
| Hospitales (áreas generales) | 21,5 VA/m² / 2,0 VA/ft² |
| Hoteles y moteles (zonas comunes) | 21,5 VA/m² / 2,0 VA/ft² |
| Hoteles y moteles (habitaciones) | 21,5 VA/m² / 2,0 VA/ft² |
| Escuelas y centros educativos | 32,3 VA/m² / 3,0 VA/ft² |
| Restaurantes y comedores | 21,5 VA/m² / 2,0 VA/ft² |
| Almacenes y depósitos | 2,7 VA/m² / 0,25 VA/ft² |
| Garajes y estacionamientos | 5,4 VA/m² / 0,5 VA/ft² |
| Peluquerías y barberías | 32,3 VA/m² / 3,0 VA/ft² |
| Bibliotecas y museos | 32,3 VA/m² / 3,0 VA/ft² |
| Residencias geriátricas (habitaciones) | 21,5 VA/m² / 2,0 VA/ft² |

## Factores de demanda
Para cargas de alumbrado general en viviendas, el NEC (Tabla 220.42) permite aplicar factores de demanda decrecientes, ya que no todas las luminarias y tomas funcionan simultáneamente. El primer escalón de **3000 VA** se considera al **100 %**; la porción comprendida entre **3001 VA y 120 000 VA** se calcula al **35 %**, y el resto por encima de **120 000 VA** al **25 %**. En otros tipos de edificios, como hospitales u hoteles, se emplean factores específicos que reflejan perfiles de uso distintos. La tabla siguiente resume los valores típicos:

| Tipo de ocupación | Rango de carga (VA) | Factor de demanda (%) |
| :--- | :--- | :--- |
| Viviendas | 0 – 3 000 | 100 |
|  | 3 001 – 120 000 | 35 |
|  | Más de 120 000 | 25 |
| Hospitales | 0 – 50 000 | 40 |
|  | Más de 50 000 | 20 |
| Hoteles y moteles | 0 – 20 000 | 50 |
|  | 20 001 – 100 000 | 40 |
|  | Más de 100 000 | 30 |
| Restaurantes | Carga total | 100 |

## Método de cálculo
La carga de alumbrado general se determina multiplicando la superficie útil de cada espacio por la densidad correspondiente de la tabla de ocupaciones, y después aplicando los factores de demanda cuando estén permitidos. La expresión general es:

> **Carga de alumbrado (VA) = Σ [ Área (m²) × Densidad (VA/m²) ]**

Si el edificio alberga varias ocupaciones, se suman los productos de cada tipo de local. A la carga resultante se le pueden aplicar los factores de demanda siempre que la instalación no concentre el uso simultáneo de todo el alumbrado (por ejemplo, en salones de baile o comedores comunitarios). Para receptáculos de uso general en locales no residenciales, una vez superados los **10 000 VA** de carga conectada, se aplica un factor de demanda del **50 %** sobre el excedente, según la sección 220.44 del NEC.

## Ejemplo de cálculo
Una vivienda unifamiliar de **150 m²** (≈ 1615 ft²) sin otras ocupaciones mixtas requiere los siguientes pasos:

1. Carga base = 150 m² × 32,3 VA/m² = **4845 VA**.
2. Aplicación de factores de demanda según Tabla 220.42:
   - Primeros 3000 VA al 100 % = 3000 VA.
   - Resto (4845 – 3000) = 1845 VA al 35 % = **645,75 VA**.
3. Carga demandada total = 3000 + 645,75 = **3645,75 VA** (≈ 3,6 kVA).

Este valor se integra en el cálculo del alimentador o del servicio eléctrico, sumándolo a otras cargas como pequeños electrodomésticos, lavandería, cocina y climatización.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la carga de iluminación mínima exigida para una vivienda de 100 m²?
La carga de alumbrado general sin aplicar demanda es de **3230 VA** (100 m² × 32,3 VA/m²). Tras aplicar los factores de demanda, la carga demandada se reduce a aproximadamente **2480 VA**.

### ¿En qué casos no se permite aplicar el factor de demanda del 35 % en viviendas?
El factor de demanda no se aplica en aquellas zonas donde se prevea que todo el alumbrado puede estar encendido simultáneamente, como salones de baile o salas de banquetes, según lo indicado en la nota del NEC 220.42.

### ¿Cómo se calcula la carga de iluminación para un local comercial de 200 m²?
Se multiplica la superficie de 200 m² por la densidad de 32,3 VA/m², obteniendo **6460 VA**. Si el comercio forma parte de un edificio mayor, este valor se suma a las cargas de otros espacios y se aplican los factores de demanda globales correspondientes.

### ¿Qué diferencia práctica hay entre VA/m² y W/ft² en el cálculo de iluminación?
Para cargas de alumbrado con factor de potencia cercano a la unidad, **1 VA equivale aproximadamente a 1 W**. Por tanto, las densidades en VA/m² pueden convertirse a W/m² sin pérdida de precisión práctica, aunque el NEC utiliza VA para reflejar la capacidad del sistema de distribución.

### ¿Cuál es la carga unitaria para un estacionamiento de 500 m²?
Según la tabla de ocupaciones, los garajes tienen **5,4 VA/m² (0,5 VA/ft²)**, por lo que la carga total asciende a **2700 VA** (500 m² × 5,4 VA/m²). Esta carga no suele estar sujeta a factores de demanda adicionales.

### ¿En qué momento se aplica el factor de demanda del 50 % para receptáculos comerciales?
Cuando la carga conectada de todos los receptáculos de uso general supera los **10 000 VA**, la porción que excede ese umbral se reduce al **50 %** (sección 220.44 del NEC). Por ejemplo, para 15 000 VA conectados, la carga demandada es 10 000 + (5000 × 0,5) = **12 500 VA**.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/light-power-room-d_897.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2144
- **electrical4u.com**: https://www.electrical4u.com/voltage-drop-calculation/
