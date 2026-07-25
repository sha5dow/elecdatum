---
title: "Requisitos eléctricos para centros de datos"
sidebar:
  label: "Requisitos eléctricos para centros de datos"
description: "Ficha tecnica: Requisitos eléctricos para centros de datos"
keywords: ["data center electrical requirements redundancy", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "data-center-electrical"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los centros de datos demandan una alimentación eléctrica continua, limpia y capaz de sostener tanto los equipos de TI como los sistemas auxiliares (refrigeración, ventilación e iluminación). La capacidad instalada debe cubrir todas las cargas que operen de forma simultánea, incluyendo picos transitorios, y se diseña típicamente con un margen de crecimiento del 25‑30 % respecto a la carga calculada. La clasificación del sistema según su criticidad y el tiempo de interrupción admisible determina la arquitectura de redundancia y el tipo de suministro de respaldo.

## Niveles de redundancia y disponibilidad
La infraestructura eléctrica de un centro de datos se dimensiona en función del nivel de tolerancia a fallos. La clasificación más establecida en la industria define cuatro niveles de rendimiento, que se resumen en la siguiente tabla.

| Nivel (Tier) | Disponibilidad garantizada | Tiempo de inactividad anual máximo | Configuración de redundancia |
|---|---|---|---|
| Tier I | 99,671 % | < 28,8 h | Sin redundancia (un solo camino de alimentación y refrigeración) |
| Tier II | 99,741 % | < 22 h | Componentes redundantes parciales (N+1 parcial) en un único camino de distribución |
| Tier III | 99,982 % | < 1,6 h | Redundancia N+1 completa en todos los sistemas; mantenimiento concurrente sin interrupción |
| Tier IV | 99,995 % | < 26,3 min | Tolerante a fallos (2N o 2N+1) con caminos activos e independientes para alimentación y refrigeración |

Las instalaciones Tier III y Tier IV incorporan sistemas de alimentación ininterrumpida (SAI/UPS) redundantes y grupos electrógenos de respaldo que asumen la carga en segundos. En centros de datos de hiperescala se suele preferir una arquitectura distribuida en múltiples zonas de disponibilidad, equivalente a dos o más emplazamientos Tier III coordinados.

## Alimentación de emergencia y transferencia
Todo centro de datos que requiera alta disponibilidad debe contar con al menos un sistema de potencia de reserva. La normativa estadounidense (NEC 2017) distingue tres categorías aplicables a instalaciones críticas como los centros de datos:

- **Sistema de emergencia (Artículo 700)**: alimenta cargas que protegen la vida humana durante una evacuación (alumbrado de salida, detección de incendios). Debe restablecerse en 10 s o menos tras la pérdida de red, y sus circuitos deben permanecer independientes de cualquier otro cableado.
- **Sistema legalmente requerido (Artículo 701)**: suministra potencia a equipos de apoyo a los servicios de emergencia (ventilación de humos, ascensores de bomberos). Tiempo máximo de entrada: 60 s.
- **Sistema opcional de reserva (Artículo 702)**: cubre cargas cuyo corte provocaría pérdidas económicas o interrupción del negocio. El tiempo de transferencia se define mediante un análisis de riesgos; en centros de datos suele ser del orden de 8‑15 s con grupos electrógenos arrancados automáticamente.

Los equipos de transferencia (ATS) deben ser automáticos, llevar marcado en campo su poder de corte frente a cortocircuito y evitar la interconexión accidental de las fuentes normal y alternativa. Para un centro de datos típico, el generador de respaldo se dimensiona para sostener la carga total calculada más un 20 % adicional, y su disyuntor de acoplamiento se coordina selectivamente con las protecciones aguas abajo.

## Cálculo de carga eléctrica
La potencia requerida por un centro de datos se desglosa en dos grandes bloques:

1. **Carga de TI**: suma de las potencias nominales de servidores, almacenamiento y equipos de red.
2. **Carga auxiliar**: refrigeración (compresores, bombas, ventiladores), iluminación, SAI/UPS y pérdidas de distribución.

La eficiencia global del sistema se mide con el PUE (Power Usage Effectiveness):
> **PUE = Potencia total de la instalación / Potencia destinada a TI**

Un centro de datos moderno de alta eficiencia presenta un PUE en torno a 1,2 (1,2 kW totales por cada 1 kW de TI), mientras que uno antiguo puede superar 2,0.

Para estimar la carga de ventilación, se emplean las curvas de los fabricantes o la fórmula básica de potencia ideal de un ventilador:
> **P_i = Δp · q**

Donde:
- *P_i* = potencia ideal absorbida por el ventilador (W)
- *Δp* = incremento de presión total en el ventilador (Pa)
- *q* = caudal volumétrico de aire impulsado (m³/s)

La potencia real consumida incorpora la eficiencia del ventilador:
> **P = (Δp · q) / (μ_f · μ_c · μ_m)**

Donde:
- *μ_f* = eficiencia del ventilador (0,55‑0,75 para ventiladores centrífugos sin ducto)
- *μ_c* = eficiencia de la transmisión por correa (0,88‑0,93)
- *μ_m* = eficiencia del motor (0,87‑0,92 para motores de 10‑100 kW)

| Potencia del motor | Eficiencia típica del motor | Eficiencia típica de la correa |
|---|---|---|
| 1 kW / 1,34 HP | 0,40 | 0,78 |
| 10 kW / 13,4 HP | 0,87 | 0,88 |
| 100 kW / 134 HP | 0,92 | 0,93 |

El incremento de temperatura del aire al atravesar el ventilador se aproxima con:
> **Δt = Δp / 1000**

Con *Δt* en kelvin (K) y *Δp* en Pa. Por ejemplo, un ventilador que eleve la presión 500 Pa generará un calentamiento del aire de aproximadamente 0,5 K.

## Soluciones móviles de respaldo
Cuando se requiere potencia provisional durante obras, ampliaciones o contingencias, las subestaciones móviles proporcionan un punto de conexión transportable. Están compuestas por un transformador (elevador/reductor), celdas de media y baja tensión, sistema de refrigeración autónomo y protecciones integradas, todo montado sobre remolque o patín. Pueden conectarse mediante cables flexibles a la red existente y ofrecer tensiones desde 480 V hasta 34,5 kV, con potencias unitarias de hasta 40 MVA. Su uso en centros de datos permite mantener la operación durante la sustitución de un transformador fijo o añadir capacidad temporal durante picos de carga.

## Normativa de referencia
- **NEC 2017**: Artículos 700 (Emergencia), 701 (Reserva legalmente requerida) y 702 (Reserva opcional). Establecen los tiempos de transferencia, la capacidad de las fuentes, la coordinación selectiva y la obligatoriedad de protectores contra sobretensiones transitorias en tableros de emergencia.
- **NFPA 110**: Norma para sistemas de energía de emergencia y de reserva, que fija los criterios de instalación, ensayos y mantenimiento de grupos electrógenos.
- **ISO 12759 / AMCA 205**: Clasificación de eficiencia energética para ventiladores, aplicable a la selección de los equipos de climatización de las salas técnicas.
- **Uptime Institute Tier Standard**: Topología y redundancia, referencia de facto para la certificación de niveles I a IV, aunque no es una norma de obligado cumplimiento legal.

## Preguntas frecuentes (FAQ)
### ¿Cuánto cuesta una interrupción en un centro de datos?
El coste medio de una parada no planificada asciende a 9000 USD por minuto según estudios de mercado, pudiendo superar los 17 000 USD/min en grandes instalaciones financieras, lo que justifica inversiones millonarias en redundancia.

### ¿Qué tiempo de autonomía debe tener un SAI/UPS en un centro de datos?
El SAI típico de un centro de datos Tier III ofrece al menos 15 minutos de autonomía a plena carga, tiempo suficiente para que los grupos electrógenos arranquen y alcancen su régimen estable (generalmente entre 8 y 12 s). En configuraciones Tier IV la batería suele sobredimensionarse para 20‑30 minutos.

### ¿Cuántos kilovatios por metro cuadrado consume un centro de datos actual?
La densidad de carga media se sitúa entre 1,5 y 3 kW/m² en salas de empresa, mientras que los centros de hiperescala alcanzan 8‑12 kW/m² y los racks de alta densidad hasta 30 kW por rack.

### ¿Cuánto incide la refrigeración en el consumo eléctrico total?
En un centro de datos con PUE = 1,6, la refrigeración representa aproximadamente el 37 % del consumo total de la instalación. Con PUE = 1,2, esa proporción baja a alrededor del 12 %. Por cada kilovatio ahorrado en ventiladores y compresores se reduce también la carga térmica sobre los equipos.

### ¿Cuál es el voltaje de distribución más común en centros de datos?
La distribución principal suele realizarse a 480 V trifásica en Norteamérica y 400 V en Europa, con transformadores locales que proporcionan 208/120 V para los racks. Las grandes instalaciones reciben la acometida en media tensión (13,8 kV o 34,5 kV) y disponen de subestación propia con transformadores de potencia de hasta 2500 kVA.

### ¿Cuánta carga de reserva se considera para un grupo electrógeno de centro de datos?
La práctica habitual es dimensionar el generador para el 120 % de la carga total calculada, de modo que pueda soportar picos de arranque de motores y permitir un margen de crecimiento. En configuraciones 2N se instalan dos o más generadores capaces de asumir individualmente al menos el 100 % de la carga.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/fans-efficiency-power-consumption-d_197.html
- **mikeholt.com**: https://www.mikeholt.com/newsletters.php?action=display&letterID=1914
- **electrical4u.com**: https://www.electrical4u.com/mobile-substation-portable-substation-mobile-transformer/
