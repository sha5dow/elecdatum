---
title: "Dimensionamiento de alimentadores NEC"
sidebar:
  label: "Dimensionamiento de alimentadores NEC"
description: "Ficha tecnica: Dimensionamiento de alimentadores NEC"
keywords: ["NEC feeder sizing calculation article 215", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "nec"
subcategory: "nec-feeder-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El dimensionamiento de alimentadores según el National Electrical Code (NEC/NFPA 70) establece la ampacidad mínima requerida para los conductores que alimentan tableros, equipos o cargas aguas abajo de la acometida. El artículo 215.2(A) exige que la ampacidad del conductor no sea inferior al mayor de dos criterios: capacidad para cargas continuas y no continuas en condiciones nominales, o capacidad después de aplicar factores de corrección por temperatura y ajuste por agrupamiento. Estas reglas garantizan que el alimentador opere de forma segura bajo cualquier condición de carga y entorno.

## Requisitos generales según NEC Artículo 215

La sección 215.2(A) establece que los conductores de un alimentador deben tener una ampacidad igual o superior al valor más exigente entre:

1. **Cálculo sin corrección ni ajuste:** 125 % de la carga continua más 100 % de la carga no continua, evaluado en la columna de temperatura correspondiente a las terminales (normalmente 75 °C según 110.14(C)(1)) antes de aplicar cualquier corrección o ajuste.
2. **Cálculo con corrección y ajuste:** 100 % de la carga total después de aplicar los factores de corrección por temperatura ambiente [Tabla 310.15(B)(1)(1)] y de ajuste por agrupamiento de conductores [Tabla 310.15(C)(1)].

Esta doble verificación asegura que el conductor elegido cumpla tanto en condiciones de instalación típicas como en las más restrictivas previstas para el tendido real.

## Fórmula de dimensionamiento para terminales estándar (75 °C)

La ampacidad mínima del conductor, antes de cualquier corrección o ajuste, se calcula con la expresión:

> **Amp mín (75 °C) = 1,25 × I_cont + 1,00 × I_nocont**

Donde:

| Variable | Descripción | Unidad |
| --- | --- | --- |
| Amp mín (75 °C) | Ampacidad requerida del conductor según columna de 75 °C de la tabla 310.16 | A |
| I_cont | Suma de las corrientes de todas las cargas que operan de forma continua (3 horas o más) | A |
| I_nocont | Suma de las corrientes de las cargas no continuas | A |

Esta fórmula es válida para la mayoría de las instalaciones donde los equipos de conexión están marcados para conductores de 75 °C. Si las terminales de ambos extremos son de 90 °C y están en gabinetes separados, se puede emplear el 100 % de toda la carga basándose en la columna de 90 °C [Excepción 2 de 215.2(A)(1)].

## Selección del calibre del conductor

Una vez determinada la ampacidad mínima, se elige el calibre en la tabla 310.16 para conductores de cobre tipo THWN-2 (columna de 75 °C). Los tamaños más comunes y su capacidad se muestran a continuación.

| Calibre AWG/kcmil (imperial) | Sección transversal (mm²) | Ampacidad a 75 °C (A) |
| --- | --- | --- |
| 1 AWG | 42,4 mm² | 130 A |
| 1/0 AWG | 53,5 mm² | 150 A |
| 2/0 AWG | 67,4 mm² | 175 A |
| 3/0 AWG | 85,0 mm² | 200 A |
| 4/0 AWG | 107,2 mm² | 230 A |
| 250 kcmil | 127,0 mm² | 255 A |
| 300 kcmil | 152,0 mm² | 285 A |
| 350 kcmil | 177,3 mm² | 310 A |
| 500 kcmil | 253,4 mm² | 380 A |

## Ejemplo de cálculo

**Caso:** alimentador con 100 A de carga continua y 100 A de carga no continua, terminales de 75 °C.

1. Ampacidad requerida = (100 A × 1,25) + 100 A = 225 A.
2. Según la tabla anterior, el calibre 4/0 AWG soporta 230 A a 75 °C, por lo que es el mínimo permitido.

**Caso adicional con carga 100 % continua de 180 A:** Ampacidad = 180 A × 1,25 = 225 A → mismo resultado, 4/0 AWG.

## Ajustes por temperatura y agrupamiento

Cuando el alimentador está expuesto a temperaturas ambiente distintas de 30 °C / 86 °F o se instalan más de tres conductores portadores de corriente en una misma canalización, la ampacidad se corrige y ajusta. El artículo 215.2(A)(2) exige que la ampacidad después de aplicar estos factores no sea inferior al 100 % de la carga.

Para seleccionar el conductor se calcula primero la ampacidad que debe tener en la columna de temperatura nominal del aislamiento (normalmente 90 °C para THWN-2) mediante:

> **Amp nominal (90 °C) = Carga total / (Factor_temp × Factor_agrup)**

Factores de corrección por temperatura ambiente para conductor de 90 °C:

| Temperatura ambiente | Factor de corrección |
| --- | --- |
| 30 °C / 86 °F | 1,00 |
| 40 °C / 104 °F | 0,91 |
| 45 °C / 113 °F | 0,87 |
| 50 °C / 122 °F | 0,82 |
| 55 °C / 131 °F | 0,76 |
| 60 °C / 140 °F | 0,71 |

Factores de ajuste por agrupamiento (más de tres conductores portadores de corriente en conducto):

| Número de conductores | Factor de ajuste |
| --- | --- |
| 4 – 6 | 0,80 |
| 7 – 9 | 0,70 |
| 10 – 20 | 0,50 |

**Ejemplo con ajustes:** alimentador con 180 A continuos, cuatro conductores activos en conducto, temperatura ambiente de 40 °C / 104 °F, aislamiento de 90 °C.

- Amp nominal requerida = 180 A / (0,91 × 0,80) = 180 A / 0,728 ≈ 247 A.
- De la columna de 90 °C de la tabla 310.16, el conductor 4/0 AWG posee 260 A, por lo que cumple. Si se compara con el criterio sin corrección (180 A × 1,25 = 225 A), el dimensionamiento final sigue siendo 4/0 AWG porque este debe satisfacer la condición más restrictiva.

## Dimensionamiento del conductor neutro

El neutro de un alimentador se dimensiona de acuerdo con 215.2(B) y 220.61. Se permite que tenga una ampacidad del 100 % de las cargas continuas y no continuas conectadas a él. Sin embargo, su sección no debe ser inferior a la del conductor de puesta a tierra del equipo indicado en la tabla 250.122.

**Ejemplo práctico:** para un alimentador con fases de 3/0 AWG protegidas por un interruptor de 200 A y una corriente de desequilibrio máxima de 30 A:

- Según carga, bastaría un neutro de 10 AWG (30 A a 75 °C).
- No obstante, el conductor de puesta a tierra mínimo para un dispositivo de 200 A es 6 AWG según 250.122.
- Por tanto, el neutro no puede ser menor que 6 AWG.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la ampacidad mínima para un alimentador con 150 A continuos y 200 A no continuos en terminales de 75 °C?
150 A × 1,25 = 187,5 A; sumando los 200 A no continuos se obtienen 387,5 A, que redondeando exige un calibre 500 kcmil (380 A insuficiente, se necesita 400 kcmil o evaluar el siguiente estándar).

### ¿Qué calibre de cobre THWN-2 se necesita para una carga continua de 120 A sin otros ajustes?
120 A × 1,25 = 150 A → 1/0 AWG (150 A a 75 °C).

### ¿Cómo se dimensiona un alimentador cuando el equipo de protección es 100 % nominal?
Si el interruptor está listado para operar al 100 % de su capacidad, los conductores se pueden dimensionar al 100 % de la carga continua más la no continua, en lugar de aplicar el 125 % a la continua.

### ¿Qué ampacidad mínima debe tener un conductor de 90 °C después de corrección y ajuste para una carga total de 200 A?
Debe permanecer al menos 200 A después de multiplicar por los factores; la fórmula inversa da Amp_90°C = 200 A / (Factor_temp × Factor_agrup).

### ¿Cuál es el factor de corrección para un conductor de 90 °C operando a 45 °C / 113 °F?
El factor es 0,87 según la tabla 310.15(B)(1)(1).

### ¿Qué tamaño de neutro exige el NEC para un alimentador de 100 A con desequilibrio de 40 A?
El neutro debe soportar 40 A como mínimo, pero no puede ser menor que el conductor de tierra especificado para un dispositivo de 100 A (8 AWG de cobre), por lo que se elige 8 AWG.

## Normas aplicables

 - ANSI/NFPA 70, National Electrical Code (NEC), Artículo 215 — Alimentadores.
 - NEC Artículo 310 — Conductores para instalaciones generales, incluyendo Tabla 310.16 (ampacidades) y Tablas 310.15(B)(1)(1) y 310.15(C)(1) (corrección y ajuste).
 - NEC Artículo 110.14 — Requisitos para terminales y conexiones eléctricas.
 - NEC Artículo 220.61 — Cálculo de cargas en el neutro.
 - NEC Artículo 250.122 — Dimensionamiento del conductor de puesta a tierra de equipos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/
- **mikeholt.com**: https://www.mikeholt.com/files/PDF/23_CALC_215.2.pdf
- **electrical4u.com**: https://www.electrical4u.com/available-fault-current/
