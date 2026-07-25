---
title: "Arranque directo a línea motores"
sidebar:
  label: "Arranque directo a línea motores"
description: "Ficha tecnica: Arranque directo a línea motores"
keywords: ["across the line motor starting current", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "across-line-starting"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El arranque directo a línea, también designado arranque directo o arranque DOL (*Direct On Line*), es un método de arranque para motores de inducción trifásicos en el cual se aplica la plena tensión de red a los bornes del motor en el instante de cierre del contactor. Constituye la técnica más simple y extendida para motores de jaula de ardilla de pequeña y mediana potencia.

En reposo, la fuerza contraelectromotriz del motor es nula. Al aplicar la tensión plena de línea al estator, la corriente queda limitada únicamente por la impedancia del devanado y la resistencia del rotor bloqueado. Esta corriente de arranque genera un campo magnético giratorio que induce grandes corrientes en el rotor, produciendo un par de arranque elevado que acelera el motor hasta su velocidad nominal. A medida que el motor gana velocidad, la fuerza contraelectromotriz aumenta y la corriente decrece progresivamente hasta alcanzar el valor de régimen.

## Características principales

La corriente de irrupción en el arranque directo oscila entre 5 y 10 veces la corriente nominal del motor. El par de arranque alcanza típicamente entre 1,5 y 3 veces el par nominal a plena carga. El tiempo de aceleración depende de la inercia de la carga acoplada y de la característica par‑velocidad del motor. Durante la transición de arranque se produce una caída de tensión transitoria en la red de alimentación proporcional a la corriente demandada.

| Parámetro | Valor típico |
| --- | --- |
| Corriente de arranque (múltiplo de Iₙ) | 5–10 p.u. |
| Par de arranque (múltiplo de Tₙ) | 1,5–3 p.u. |
| Caída de tensión admisible según IEC 60038 | ≤ 4 % |
| Tensión aplicada en arranque | 100 % de la tensión de línea |
| Duración típica de arranque para motores < 15 kW | 0,5–5 s |
| Duración típica de arranque para motores > 15 kW / 20 hp | 3–15 s |

## Ventajas

- Máxima sencillez constructiva: solo requiere contactor principal y relé de sobrecarga.
- Coste de adquisición e instalación reducido frente a arrancadores electrónicos o variadores de frecuencia.
- Par de arranque pleno disponible desde el primer instante, adecuado para cargas de baja inercia.
- Alta fiabilidad por mínimo número de componentes.
- Ocupa poco espacio en el tablero eléctrico.
- Fácil mantenimiento y diagnóstico de fallos.

## Desventajas

- Elevada corriente de irrupción que puede provocar caídas de tensión en redes débiles.
- Esfuerzos mecánicos bruscos sobre acoplamientos, correas, engranajes y cojinetes.
- Golpes de ariete en sistemas de bombeo si no se instalan válvulas de amortiguación.
- Imposibilidad de controlar la rampa de aceleración.
- No apto para máquinas que requieran arranque progresivo o limitación estricta de corriente.
- Puede dañar productos en procesos sensibles a aceleraciones súbitas (p. ej., transporte de botellas, textiles).

## Aplicaciones típicas

Se emplea en motores de jaula de ardilla de baja y media potencia, típicamente hasta 5,5 kW / 7,5 hp en redes domésticas y hasta 15 kW / 20 hp en entornos industriales con transformador de distribución de capacidad suficiente. Es habitual en ventiladores centrífugos, bombas hidráulicas pequeñas, compresores de pistón con válvula de descarga, cintas transportadoras cortas, sierras circulares y extractores de aire que no demanden arranque suave. También se utiliza en aplicaciones donde los picos de corriente no afectan a otros equipos conectados al mismo barraje.

## Componentes del arrancador DOL

| Componente | Función |
| --- | --- |
| Interruptor termomagnético (MCCB) | Protección contra cortocircuitos y sobrecargas de larga duración en la línea de alimentación. |
| Contactor principal | Cierre y apertura de los tres polos de potencia; soporta la corriente de arranque y la corriente nominal. |
| Relé de sobrecarga térmico o electrónico | Protección del motor frente a sobrecargas prolongadas mediante curva de disparo clase 10, 20 o 30. |
| Pulsador de marcha (NA) | Cierre momentáneo que excita la bobina del contactor. |
| Pulsador de paro (NC) | Apertura del circuito de mando para detener el motor. |
| Contacto auxiliar de retención | Realimentación en paralelo al pulsador de marcha para mantener la bobina energizada. |
| Relé de secuencia de fase (opcional) | Evita la inversión accidental del sentido de giro. |
| Guardamotor (opcional, en lugar de MCCB + relé) | Protección integrada contra cortocircuito y sobrecarga en un único dispositivo compacto. |

## Diagrama de conexión

El circuito de potencia conecta las tres fases de línea (L1, L2, L3) a los bornes del motor (U, V, W) a través del seccionador bajo carga, el contactor tripolar y el relé de sobrecarga. El circuito de mando se alimenta desde dos fases o mediante transformador de control e incluye el pulsador de paro (NC) en serie con el pulsador de marcha (NA) y la bobina del contactor. El contacto auxiliar NA del contactor se conecta en paralelo al pulsador de marcha para establecer el enclavamiento eléctrico. La apertura del relé de sobrecarga desconecta la bobina del contactor, provocando la caída de los contactos principales y la detención del motor.

> **Circuito de mando simplificado:** L1 → Paro NC → Marcha NA → Bobina K1 → Relé térmico NC → L2

## Fórmula de la corriente de arranque

La corriente de irrupción en el arranque directo se estima a partir de la impedancia de entrada del motor con el rotor bloqueado.

> **Iₐ = Vₗ / Zₗ**

| Símbolo | Significado | Unidad |
| --- | --- | --- |
| Iₐ | Corriente de arranque por fase | A |
| Vₗ | Tensión de línea fase‑fase | V |
| Zₗ | Impedancia equivalente de fase con rotor bloqueado | Ω |

En términos prácticos se usa la relación respecto a la corriente nominal:

> **Iₐ = k · Iₙ**

donde **k** típicamente vale de 5 a 10 para motores estándar y puede alcanzar 15 en motores de alto rendimiento.

## Comparación con otros métodos de arranque

| Método | Corriente de arranque (% del DOL) | Par de arranque (% del DOL) | Coste relativo | Complejidad |
| --- | --- | --- | --- | --- |
| Arranque directo (DOL) | 100 % | 100 % | 1 p.u. | Mínima |
| Arranque estrella‑triángulo | ≈ 30 % | ≈ 25 % | 1,3–1,8 p.u. | Baja‑Media |
| Arrancador suave electrónico | Ajustable (20–100 %) | Ajustable (20–100 %) | 2–3 p.u. | Media |
| Variador de frecuencia | 50–100 % | 100 % disponible desde baja velocidad | 3–5 p.u. | Alta |
| Arranque por autotransformador | Ajustable (40/65/80 % típico) | Proporcional al cuadrado de la tensión reducida | 2–4 p.u. | Media |

## Frequently Asked Questions (FAQ)

### ¿Qué valor de corriente de irrupción es típico en un arranque directo de un motor de inducción estándar?
La corriente de irrupción típica oscila entre 5 y 10 veces la corriente nominal a plena carga, pudiendo alcanzar hasta 15 veces en motores de alto rendimiento con diseño de baja resistencia estatórica.

### ¿Cuánto par de arranque entrega un motor con arranque DOL comparado con el par nominal?
Entrega entre 1,5 y 3 veces el par nominal. Este valor depende del diseño del rotor; rotores de doble jaula o barras profundas presentan pares de arranque más elevados.

### ¿Qué caída de tensión máxima admisible establece la norma IEC 60038 durante el arranque?
La caída de tensión máxima recomendada en la acometida común es del 4 % de la tensión nominal. En bornes del motor se toleran caídas mayores durante el breve intervalo de aceleración.

### ¿Qué duración tiene un arranque directo para un motor de 7,5 kW / 10 hp acoplado a una bomba centrífuga?
La duración típica está comprendida entre 1 y 3 segundos, siempre que el momento de inercia de la bomba no supere el valor admitido por el fabricante del motor.

### ¿Por qué un motor de 30 kW / 40 hp rara vez se arranca con DOL?
Porque la corriente de arranque, del orden de 600 a 900 A en una red de 400 V / 460 V, puede provocar una caída de tensión superior al 10 % en transformadores de distribución de capacidad ajustada, afectando a otros usuarios.

### ¿Cómo influye la clase de disparo del relé de sobrecarga en la protección durante el arranque directo?
La clase 10 o 20 define el tiempo máximo que el relé tolera una corriente de 6 veces la nominal sin disparar. En arranques largos (por encima de 10 segundos) se requiere clase 30 para evitar disparos intempestivos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/direct-online-starter-or-dol-starter/
