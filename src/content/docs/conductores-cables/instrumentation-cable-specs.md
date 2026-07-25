---
title: "Cables de instrumentación especificaciones"
sidebar:
  label: "Cables de instrumentación especificaciones"
description: "Ficha tecnica: Cables de instrumentación especificaciones"
keywords: ["instrumentation cable specifications shielded", "conductores-cables"]
category: "conductores-cables"
topic: "cable-types"
subcategory: "instrumentation-cable"
skill: "conductor-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Los cables de instrumentación están diseñados para transmitir señales de bajo nivel (analógicas, digitales o de control) en entornos industriales con alta interferencia electromagnética (EMI). Incorporan pares trenzados apantallados que reducen el acoplamiento inductivo y capacitivo. Según la norma ISA‑ANSI S5.1, se identifican mediante códigos como FT (transmisor de flujo) o TT (transmisor de temperatura), siempre acompañados de un número único. La tensión nominal típica es 600 V y se instalan en bandejas portacables (TC‑ER) o conductos.

## Construcción
El cable descrito (referencia Southwire SPEC43604) presenta la siguiente configuración:

1. **Conductor**: cobre suave desnudo, cableado clase B, compatible con terminales de compresión y tornillo.  
2. **Aislamiento**: PVC tipo TFN (thermoplastic fixture wire nylon) de alta resistencia dieléctrica, coloreado según código ICEA para identificación de pares.  
3. **Par trenzado**: dos conductores aislados se trenzan con paso uniforme; cada par se envuelve con cinta separadora opcional.  
4. **Pantalla global**: cinta de aluminio/poliéster termosoldada con solape del 25 % y un hilo de drenaje de cobre estañado en contacto íntimo con la cara metálica.  
5. **Cubierta exterior**: PVC de alto impacto, color gris, resistente a aceites, productos químicos y rayos UV.

## Materiales

| Componente            | Material                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| Conductor             | Cobre suave desnudo (ASTM B3 / B8)                                      |
| Aislamiento primario  | PVC tipo TFN (termoplástico + capa de nylon)                             |
| Elemento de pantalla  | Cinta aluminio/poliéster de 12 µm / 0.47 mil + hilo de drenaje de cobre estañado |
| Relleno / separador   | Compuesto de polipropileno (opcional según número de pares)              |
| Cubierta exterior     | PVC de alto grado, color gris, estabilizado UV                           |

## Especificaciones técnicas

| Parámetro                    | Valor                                                                 |
| ---------------------------- | --------------------------------------------------------------------- |
| Tensión nominal máxima       | 600 V / 600 V                                                         |
| Temperatura máxima del conductor | 105 °C / 221 °F (aislamiento TFN)                                |
| Temperatura mínima de instalación | −20 °C / −4 °F                                                  |
| Calibre del conductor        | 18 AWG (0,82 mm²) / 0,82 mm² – 14 AWG (1,63 mm²) según pedido       |
| Espesor del aislamiento      | 0,38 mm / 0,015 in (para 18 AWG)                                      |
| Espesor de la cubierta       | 0,80 mm / 0,031 in (nominal)                                          |
| Diámetro exterior (1 par)    | 7,0 mm / 0,276 in                                                     |
| Diámetro exterior (2 pares)  | 9,0 mm / 0,354 in                                                     |
| Radio mínimo de curvatura    | 8× diámetro exterior (56 mm / 2,2 in para 1 par)                     |
| Peso neto (1 par)            | 68 kg/km / 45,7 lb/1000 ft                                            |
| Resistencia a la tracción    | 150 N / 33,7 lbf por conductor                                        |

## Propiedades eléctricas

| Propiedad                                   | Valor típico (20 °C)                                                  |
| ------------------------------------------- | -------------------------------------------------------------------- |
| Resistencia del conductor (18 AWG)          | 21,8 Ω/km / 6,64 Ω/1000 ft                                           |
| Resistencia de aislamiento                  | > 5000 MΩ⋅km / > 800 MΩ⋅1000 ft (par‑tierra, 500 V dc)              |
| Capacitancia mutua (1 kHz)                  | 98 nF/km / 29,9 nF/1000 ft                                           |
| Capacitancia desequilibrada (par‑tierra)    | 1,6 pF/m / 0,49 pF/ft                                                |
| Tensión aplicada de rutina                  | 2,0 kV ac / 2,0 kV ac durante 5 min (conductor‑conductor)           |
| Impedancia característica (a 1 MHz)         | 100 Ω ±15 % / 100 Ω                                                  |
| Atenuación máxima (a 1 MHz)                 | 2,0 dB/100 m / 6,1 dB/1000 ft                                        |
| Efectividad de la pantalla (30 MHz‑1 GHz)   | > 40 dB / > 40 dB                                                    |

## Normas aplicables

| Norma                  | Descripción                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| UL 2250                | Instrumentation Cable (tipo PLTC/ITC)                                       |
| UL 13                  | Power‑Limited Circuit Cable (componentes de aislamiento)                    |
| ICEA S‑73‑532          | Standard for Control, Thermocouple and Instrumentation Cables               |
| NEC 725 / 727          | Class 2, Class 3 y cable ITC                                               |
| CSA C22.2 No. 239      | Instrumentation and Control Cable (reconocimiento canadiense)               |
| IEEE 383               | Ensayo de propagación de incendio en bandeja vertical                       |
| RoHS 3 (EU 2015/863)   | Cumplimiento de sustancias peligrosas                                       |

## Aplicaciones

- Lazos de control de proceso 4‑20 mA y señales de termopar/RTD.
- Conexión de transmisores, actuadores y posicionadores de válvulas.
- Sistemas SCADA, DCS y PLC en refinerías, plantas químicas y generación de energía.
- Edificios inteligentes con redes BACnet o Modbus RS‑485.
- Instalaciones al aire libre en bandeja portacables expuesta (UV resistente).
- Ambientes con riesgo de interferencia por variadores de frecuencia (VFD).

La buena práctica exige mantener una separación mínima de 75 mm / 3 in respecto de circuitos de potencia en paralelo, y conectar la pantalla en ambos extremos a tierra manteniendo continuidad eléctrica. Para frecuencias superiores a 1 MHz es imperativo un contacto circunferencial de 360° a través del prensaestopas o conector.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la tensión máxima de operación de estos cables?
   La tensión nominal máxima de aislamiento es 600 V, apta para circuitos de clase ITC y PLTC según NEC, con un margen de seguridad dieléctrica probado a 2 kV ac durante 5 min.

### ¿Qué rango de temperatura ambiente soportan?
   El aislamiento de PVC tipo TFN admite desde −20 °C / −4 °F en instalación hasta 105 °C / 221 °F en operación continua; para ambientes extremos existen versiones con XLPE hasta 125 °C.

### ¿Cómo se determina el radio mínimo de curvatura?
   Se aplica un factor de 8 veces el diámetro exterior del cable, por ejemplo 56 mm / 2,2 in para un par de 18 AWG; curvas más cerradas pueden deformar el aislamiento y la pantalla.

### ¿Qué tipo de pantalla ofrece la mejor protección contra interferencias?
   La combinación de cinta aluminio/poliéster con solape del 25 % y un hilo de drenaje de cobre estañado proporciona una cobertura óptica del 100 %, alcanzando una efectividad superior a 40 dB en el rango de 30 MHz a 1 GHz.

### ¿Se puede utilizar este cable en atmósferas explosivas?
   Sí, cuando se instala con prensaestopas certificados Ex‑e o Ex‑d y se respetan las corrientes máximas; el cable cumple los requisitos de baja emisión de halógenos y propagación de incendio según IEEE 383, apto para zonas Clase I, División 2.

### ¿Cuál es la capacitancia mutua típica y por qué es importante?
   La capacitancia mutua es de 98 nF/km / 29,9 nF/1000 ft a 1 kHz, lo que limita la distorsión en señales analógicas de millamperios y define la longitud máxima del lazo de corriente para no atenuar la señal por debajo del 1 % del fondo de escala.

## Fuentes consultadas

- **southwire.com**: https://www.southwire.com/wire-cable/instrumentation/600v-cu-pvc-tfn-pairs-pvc-spos-instrumentation/p/SPEC43604
