---
title: "Conductores secundarios de transformador"
sidebar:
  label: "Conductores secundarios de transformador"
description: "Ficha tecnica: Conductores secundarios de transformador"
keywords: ["transformer secondary conductor sizing protection", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "transformer-secondary-conductors"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los conductores secundarios de transformador son los conductores eléctricos que conectan el devanado secundario de un transformador con el dispositivo de protección contra sobrecorriente principal del lado secundario. Su dimensionamiento y protección siguen reglas específicas establecidas en el artículo 240.4(F) del Código Eléctrico Nacional (NEC), que permite proteger estos conductores de manera diferente a su ampacidad nominal bajo ciertas condiciones de instalación.

La función principal de estos conductores es transportar la corriente del secundario del transformador hasta el primer medio de desconexión o dispositivo de protección, manteniendo la integridad del sistema ante condiciones normales de operación y posibles fallas. La selección adecuada de estos conductores es crítica, ya que una protección insuficiente puede resultar en sobrecalentamiento, deterioro del aislamiento y riesgo de incendio.

## Dimensionamiento del conductor secundario

El dimensionamiento de los conductores secundarios de transformador se basa en la corriente nominal del secundario más un factor de sobrecarga continua del 125%. La corriente nominal secundaria se calcula dividiendo la potencia aparente del transformador entre el producto de la tensión secundaria de línea y la raíz cuadrada de tres para sistemas trifásicos, o simplemente entre la tensión secundaria para sistemas monofásicos.

> **I_sec = VA / (√3 × V_LL)** para sistemas trifásicos

| Variable | Descripción | Unidad |
|----------|-------------|--------|
| I_sec | Corriente nominal secundaria | A |
| VA | Potencia aparente del transformador | VA |
| V_LL | Tensión de línea secundaria | V |

| Potencia del transformador (kVA) | Tensión secundaria (V) | Corriente secundaria (A) | Corriente de diseño al 125% (A) |
|----------------------------------|------------------------|--------------------------|--------------------------------|
| 15 kVA | 208 / 120 V trifásico | 41,6 A | 52,0 A |
| 30 kVA | 208 / 120 V trifásico | 83,3 A | 104,1 A |
| 45 kVA | 208 / 120 V trifásico | 124,9 A | 156,1 A |
| 75 kVA | 480 / 277 V trifásico | 90,2 A | 112,8 A |
| 112,5 kVA | 480 / 277 V trifásico | 135,3 A | 169,1 A |

| Calibre AWG / kcmil | Sección métrica equivalente (mm²) | Ampacidad a 75 °C (cobre) | Ampacidad a 75 °C (aluminio) |
|---------------------|-----------------------------------|---------------------------|------------------------------|
| 14 AWG | 2,08 mm² / 0.003 in² | 20 A | No aplica |
| 12 AWG | 3,31 mm² / 0.005 in² | 25 A | No aplica |
| 10 AWG | 5,26 mm² / 0.008 in² | 35 A | No aplica |
| 8 AWG | 8,37 mm² / 0.013 in² | 50 A | 40 A |
| 6 AWG | 13,3 mm² / 0.021 in² | 65 A | 50 A |
| 4 AWG | 21,2 mm² / 0.033 in² | 85 A | 65 A |
| 3 AWG | 26,7 mm² / 0.041 in² | 100 A | 75 A |
| 2 AWG | 33,6 mm² / 0.052 in² | 115 A | 90 A |
| 1 AWG | 42,4 mm² / 0.066 in² | 130 A | 100 A |
| 1/0 AWG | 53,5 mm² / 0.083 in² | 150 A | 120 A |
| 2/0 AWG | 67,4 mm² / 0.105 in² | 175 A | 135 A |
| 3/0 AWG | 85,0 mm² / 0.132 in² | 200 A | 155 A |
| 4/0 AWG | 107,2 mm² / 0.166 in² | 230 A | 180 A |
| 250 kcmil | 126,7 mm² / 0.196 in² | 255 A | 205 A |
| 300 kcmil | 152,0 mm² / 0.236 in² | 285 A | 230 A |
| 350 kcmil | 177,3 mm² / 0.275 in² | 310 A | 250 A |
| 400 kcmil | 202,7 mm² / 0.314 in² | 335 A | 270 A |
| 500 kcmil | 253,4 mm² / 0.393 in² | 380 A | 310 A |

## Protección del conductor secundario

La protección de los conductores secundarios de transformador se rige por la sección 240.4(F) del NEC, que establece que los conductores del lado secundario de un transformador pueden ser protegidos por el dispositivo de sobrecorriente del lado primario, siempre que dicho dispositivo esté dimensionado correctamente según la relación de transformación. Esta disposición constituye una excepción a la regla general de protección de conductores.

Para aplicar correctamente esta excepción, el dispositivo de protección en el primario no debe exceder el valor determinado por la relación de transformación multiplicada por la ampacidad del conductor secundario. En instalaciones típicas, el interruptor o fusible del primario protege indirectamente los conductores secundarios cuando la corriente de cortocircuito o sobrecarga se refleja a través del transformador.

| Relación de transformación (Vp:Vs) | Protección máxima en primario para conductor secundario de 100 A | Protección máxima en primario para conductor secundario de 200 A |
|------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|
| 480 V : 208 V (2,31:1) | 43,3 A | 86,6 A |
| 480 V : 240 V (2:1) | 50,0 A | 100,0 A |
| 600 V : 208 V (2,88:1) | 34,7 A | 69,4 A |
| 4160 V : 480 V (8,67:1) | 11,5 A | 23,1 A |

| Tipo de protección en secundario | Capacidad de interrupción mínima (kA) | Aplicación recomendada |
|----------------------------------|---------------------------------------|------------------------|
| Interruptor termomagnético | 10 kA / 10.000 A | Transformadores ≤ 45 kVA |
| Interruptor de caja moldeada | 22 kA / 22.000 A | Transformadores 45-112,5 kVA |
| Fusibles limitadores de corriente clase J | 200 kA / 200.000 A | Todos los tamaños, alta capacidad |
| Interruptor de potencia | 35 kA / 35.000 A | Transformadores ≥ 500 kVA |

## Consideraciones de instalación

Los conductores secundarios de transformador deben instalarse cumpliendo distancias máximas específicas desde el transformador hasta el dispositivo de protección. La longitud máxima permitida para estos conductores sin protección individual en el secundario es de 3,0 m / 10 ft para instalaciones industriales y 7,5 m / 25 ft para instalaciones comerciales, siempre que se cumplan condiciones adicionales de canalización y accesibilidad.

Adicionalmente, la temperatura de operación de los terminales del transformador y del dispositivo de protección dicta la columna de ampacidad aplicable según la tabla de conductores. Para equipos con capacidad nominal de 100 A o menos, se utiliza la columna de 60 °C, mientras que para equipos superiores a 100 A se aplica la columna de 75 °C, de acuerdo con la sección 110.14(C) del NEC.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia entre un conductor secundario de transformador y un conductor de acometida?

Los conductores secundarios de transformador transportan corriente desde el devanado secundario del transformador propiedad del usuario hasta el primer dispositivo de protección contra sobrecorriente, mientras que los conductores de acometida conectan el punto de entrega de la compañía suministradora con el equipo de servicio del edificio. La protección de los conductores secundarios sigue reglas específicas bajo 240.4(F) del NEC, permitiendo protección indirecta desde el primario, mientras que los conductores de acometida se protegen según 230.90. Los conductores secundarios típicamente manejan corrientes entre 20 A y 5000 A dependiendo del tamaño del transformador.

### ¿Cuál es la longitud máxima permitida para un conductor secundario de transformador sin protección dedicada?

La longitud máxima permitida para conductores secundarios sin protección individual es de 3,0 m / 10 ft en instalaciones industriales con prácticas de mantenimiento calificadas y supervisión de ingeniería, y de 7,5 m / 25 ft en instalaciones comerciales u otras ubicaciones. Para longitudes superiores a 7,5 m / 25 ft, se requiere un dispositivo de protección contra sobrecorriente dedicado en el lado secundario ubicado inmediatamente después del transformador. Estas distancias se miden desde los terminales secundarios del transformador hasta el punto de conexión del dispositivo de protección.

### ¿Cómo afecta la regla del 10% y 25% a la protección de conductores secundarios?

La regla del 10% aplica cuando la corriente nominal del dispositivo de protección en el primario no excede el 10% de la capacidad nominal del conductor secundario ajustada por la relación de transformación, permitiendo protección indirecta total sin dispositivo secundario. La regla del 25% aplica cuando el dispositivo primario no excede el 25% de dicha capacidad, requiriendo protección adicional en el secundario pero con mayor flexibilidad de ubicación. Por ejemplo, un transformador de 45 kVA con secundario de 208 V trifásico requiere conductores de cobre de al menos 21,2 mm² / 4 AWG con capacidad de 85 A a 75 °C para cumplir con ambas reglas.

### ¿Qué sucede si un conductor secundario de transformador sufre un cortocircuito franco?

Ante un cortocircuito franco en los conductores secundarios, la corriente de falla se refleja al primario del transformador multiplicada por la relación de transformación inversa. Un cortocircuito de 10.000 A en el secundario de un transformador de 480 V a 208 V se refleja como aproximadamente 4330 A en el primario, valor que debe ser interrumpido por el dispositivo de protección primario. La magnitud de la corriente de cortocircuito disponible en el secundario depende de la impedancia del transformador, típicamente entre 2% y 6% para transformadores de distribución, produciendo corrientes de falla de hasta 25 veces la corriente nominal secundaria.

### ¿Cómo se coordina la protección del conductor secundario con el interruptor principal del tablero?

La coordinación entre el conductor secundario del transformador y el interruptor principal del tablero requiere que el interruptor secundario esté dimensionado al 125% de la corriente continua más el 100% de la carga no continua. El interruptor principal del tablero de 250 A protegerá adecuadamente un conductor secundario de cobre de 152,0 mm² / 300 kcmil con ampacidad de 285 A a 75 °C, manteniendo selectividad con el dispositivo primario del transformador. La curva de disparo del interruptor secundario debe coordinarse con la curva del dispositivo primario para garantizar que solo opere el dispositivo más cercano a la falla.

### ¿Qué consideraciones especiales aplican para conductores secundarios en paralelo por fase?

Los conductores secundarios en paralelo por fase deben ser idénticos en material, calibre, longitud y tipo de aislamiento, con una ampacidad combinada no menor al 125% de la corriente nominal secundaria. Para un transformador de 500 kVA con secundario en 480 V trifásico que entrega 601 A, se requieren dos conductores de cobre de 152,0 mm² / 300 kcmil en paralelo por fase, cada uno con ampacidad de 285 A a 75 °C, proporcionando una capacidad combinada de 570 A que cumple con la corriente de diseño de 751 A al 125%. Todas las terminaciones y conexiones de los conductores en paralelo deben realizarse en ambos extremos con conectores clasificados para la cantidad de conductores y el calibre especificado.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **mikeholt.com**: https://www.mikeholt.com/nec-conductor-sizing-and-protection.php
- **electrical4u.com**: https://www.electrical4u.com/transformer-protection-and-transformer-fault/
