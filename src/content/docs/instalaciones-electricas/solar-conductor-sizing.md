---
title: "Dimensionamiento de conductores en sistemas solares"
sidebar:
  label: "Dimensionamiento de conductores en sistemas solares"
description: "Ficha tecnica: Dimensionamiento de conductores en sistemas solares"
keywords: ["solar PV conductor sizing calculation", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "solar-installation"
subcategory: "solar-conductor-sizing"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un sistema solar fotovoltaico convierte la energía luminosa en energía eléctrica de corriente continua mediante el efecto fotovoltaico en las celdas solares. Una celda solar individual de silicio monocristalino genera una tensión de circuito abierto de aproximadamente 0,5 V a 0,6 V. Para alcanzar tensiones utilizables, las celdas se conectan en serie formando módulos, y estos a su vez se conectan en serie para crear cadenas. La corriente generada varía con la irradiancia solar, mientras que la tensión depende de la temperatura de operación de las celdas. Esta naturaleza variable y dependiente de las condiciones ambientales impone requisitos específicos para el dimensionamiento de los conductores que transportan la energía desde los módulos hasta el inversor y el punto de interconexión.

## Cálculo de la tensión máxima del sistema

La tensión máxima del sistema de corriente continua se determina para seleccionar conductores, equipos y espacios de trabajo. Para sistemas en edificios comerciales e industriales, la tensión se limita a 1000 V, mientras que en residencias unifamiliares y bifamiliares el límite es 600 V. El método principal de cálculo consiste en la suma de las tensiones de circuito abierto de todos los módulos conectados en serie, corregida por el coeficiente de temperatura para la temperatura ambiente mínima esperada.

| Componente | Valor sin corregir | Factor de corrección | Valor máximo corregido |
|------------|-------------------|---------------------|------------------------|
| Tensión de circuito abierto (Voc) por módulo | 49,2 V / 49,2 V | — | — |
| Módulos en serie por cadena | 20 unidades / 20 unidades | — | — |
| Suma de Voc (STC) | 984 V / 984 V | — | — |
| Corrección por temperatura mínima de -10 °C / 14 °F | — | 1,12 | — |
| Tensión máxima corregida de la cadena | — | — | 1102 V / 1102 V |

## Factores que influyen en el dimensionamiento

El dimensionamiento de conductores en sistemas fotovoltaicos está regido por la corriente máxima del circuito, calculada como el 125 % de la suma de las corrientes de cortocircuito de los módulos conectados en paralelo. Para sistemas con una capacidad de generación de 100 kW o superior, la corriente máxima debe determinarse mediante simulación de la irradiancia local, considerando el promedio de la corriente más alta en un intervalo de tres horas. Los factores que afectan la ampacidad requerida incluyen la temperatura ambiente en conduit, la agrupación de conductores y la exposición solar directa sobre las canalizaciones. La ampacidad final del conductor debe satisfacer simultáneamente dos criterios: al menos el 125 % de la corriente máxima sin aplicar correcciones, y al menos el 100 % de la corriente máxima después de aplicar todos los factores de corrección y ajuste.

| Factor | Descripción | Impacto en la ampacidad |
|--------|-------------|------------------------|
| Temperatura ambiente elevada | Conduit expuesto a sol directo sobre cubierta | Reducción según Tabla 310.15(B)(1)(1) |
| Agrupación de conductores | Más de tres conductores portadores de corriente en conduit | Reducción según Tabla 310.15(C)(1) |
| Margen de seguridad continuo | Carga considerada continua por definición | Factor 1,25 sobre corriente máxima |
| Tipo de aislamiento | THWN-2, XHHW-2, PV Wire | Temperatura de operación de 90 °C / 194 °F |

## Procedimiento de selección paso a paso

El procedimiento de selección del conductor para circuitos de fuente fotovoltaica se inicia con la corriente de cálculo de diseño, seguida de la aplicación de los factores de corrección y la verificación final contra los requisitos de protección contra sobrecorriente.

1. Calcular la corriente máxima del circuito según la fórmula:

> **Imáx = 1,25 × Σ Isc_paralelo**

Donde Σ Isc_paralelo es la suma de las corrientes de cortocircuito de todos los módulos o cadenas conectados en paralelo.

2. Determinar la ampacidad mínima requerida antes de correcciones como 125 % de Imáx.

3. Seleccionar un conductor con ampacidad base suficiente, y aplicar los factores de corrección por temperatura y ajuste por agrupación.

4. Verificar que la ampacidad corregida sea al menos el 100 % de la corriente máxima.

5. Verificar que el calibre seleccionado coordine con el dispositivo de protección contra sobrecorriente, el cual debe dimensionarse al 125 % de la corriente máxima.

| Paso | Criterio | Fórmula | Ejemplo con Isc = 10 A / 10 A, 4 cadenas en paralelo |
|------|--------|---------|------------------------------------------------------|
| 1 | Corriente máxima del circuito | Imáx = 1,25 × (4 × 10 A) / 1,25 × (4 × 10 A) | 50 A / 50 A |
| 2 | Ampacidad mínima sin correcciones | 1,25 × Imáx | 62,5 A / 62,5 A |
| 3 | Ampacidad base del conductor | Valor de tabla a 90 °C / 194 °F | AWG 6 THWN-2 = 75 A / 75 A |
| 4 | Aplicar factores (T=50 °C / 122 °F, 6 conductores) | 75 × 0,82 × 0,80 | 49,2 A / 49,2 A |
| 5 | Ampacidad requerida mínima corregida | Imáx | 50 A / 50 A |
| 6 | Calibre mínimo por ampacidad | — | AWG 4 (85 A base × 0,82 × 0,80 = 55,8 A / 55,8 A) |

## Normas aplicables

El dimensionamiento de conductores en sistemas solares se rige por el Artículo 690 del Código Eléctrico Nacional de Estados Unidos. La sección 690.7 establece los métodos de cálculo de la tensión máxima del sistema de corriente continua. La sección 690.8 define el cálculo de la corriente del circuito y los criterios de dimensionamiento de conductores. La sección 690.9 regula los requisitos de protección contra sobrecorriente. Para sistemas con capacidad de generación de 100 kW o superior, se permite el cálculo mediante métodos de ingeniería documentados y sellados por un profesional colegiado. Los conductores para circuitos de fuente fotovoltaica deben estar listados para uso en sistemas fotovoltaicos y soportar temperaturas de operación de 90 °C en condiciones húmedas y secas.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la tensión máxima permitida para un sistema solar residencial?

Para sistemas fotovoltaicos en edificios residenciales unifamiliares y bifamiliares, la tensión máxima del circuito de corriente continua está limitada a 600 V según la sección 690.7. En edificios comerciales, industriales y multifamiliares, el límite se eleva a 1000 V.

### ¿Cómo se calcula la corriente máxima de un circuito de fuente fotovoltaica?

La corriente máxima del circuito para sistemas de menos de 100 kW se calcula como el 125 % de la suma de las corrientes de cortocircuito de todos los módulos fotovoltaicos conectados en paralelo. Para sistemas de 100 kW o más, se requiere un cálculo de ingeniería basado en el promedio de la corriente más alta en un intervalo de tres horas.

### ¿Qué factor de seguridad se aplica al dimensionamiento de conductores solares?

Los conductores de circuitos fotovoltaicos deben tener una ampacidad de al menos el 125 % de la corriente máxima calculada antes de aplicar factores de corrección, y de al menos el 100 % de la corriente máxima después de aplicar todos los factores de corrección y ajuste por temperatura y agrupación.

### ¿Cuándo se puede omitir la protección contra sobrecorriente en un circuito solar?

La protección contra sobrecorriente no es obligatoria cuando los conductores del circuito tienen una ampacidad suficiente según la sección 690.8(B) y las corrientes de todas las fuentes no exceden la capacidad nominal del dispositivo de protección especificado por el fabricante para los módulos o convertidores electrónicos.

### ¿Qué temperatura de operación deben soportar los conductores solares?

Los conductores para circuitos de fuente fotovoltaica deben estar listados para sistemas fotovoltaicos y tener una temperatura de operación de 90 °C tanto en condiciones húmedas como secas, típicamente con aislamiento THWN-2, XHHW-2 o cable fotovoltaico dedicado.

### ¿Cómo afecta la temperatura ambiente al dimensionamiento del conductor?

La temperatura ambiente elevada reduce la ampacidad del conductor según los factores de la Tabla 310.15(B)(1)(1) del NEC. En instalaciones sobre cubierta expuestas al sol, la temperatura dentro del conduit puede alcanzar 17 °C por encima de la temperatura ambiente exterior, exigiendo conductores de mayor calibre para compensar esta reducción.

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=2809
- **electrical4u.com**: https://www.electrical4u.com/solar-cell/
