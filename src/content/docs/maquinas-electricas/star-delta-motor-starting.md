---
title: "Arranque estrella delta motores"
sidebar:
  label: "Arranque estrella delta motores"
description: "Ficha tecnica: Arranque estrella delta motores"
keywords: ["star delta starter motor circuit", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-starting"
subcategory: "star-delta-starting"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El arranque estrella‑delta es un método de arranque a tensión reducida para motores asíncronos trifásicos. Durante la puesta en marcha el estator se conecta en estrella (Y) y, una vez que el motor alcanza aproximadamente el 80 % de su velocidad nominal, se conmuta a la configuración triángulo (Δ). La corriente de arranque se limita a cerca del 33 % de la corriente de arranque directo, lo que reduce el esfuerzo eléctrico y mecánico sobre la red y la máquina accionada.

En la conexión estrella la tensión aplicada a cada devanado de fase es igual a la tensión de línea dividida por √3 (≈ 0,58 VL). Como la corriente de fase es proporcional a la tensión de fase, la corriente de línea absorbida en estrella es un tercio de la que absorbería el mismo motor arrancado directamente en triángulo. Un temporizador controla el intervalo en estrella; cuando el rotor alcanza la velocidad suficiente (alrededor del 80 % de la de régimen), el circuito conmuta automáticamente a triángulo. En posición triángulo cada devanado recibe la tensión de línea plena y el motor entrega su par nominal.

## Componentes
Un arrancador estrella‑delta automático estándar está compuesto por:

| Componente | Función |
|---|---|
| Contactor principal (KM1) | Alimenta el motor en triángulo | 
| Contactor estrella (KM2) | Cierra la conexión en estrella durante el arranque |
| Contactor triángulo (KM3) | Actúa junto con KM1 para cerrar la conexión en triángulo |
| Relé de sobrecarga (F1) | Protege contra sobrecorrientes prolongadas |
| Temporizador (K1) | Define el tiempo de permanencia en estrella |
| Pulsadores de marcha/paro | Controlan la orden de arranque y parada |

Adicionalmente, los contactores incorporan enclavamientos mecánicos y eléctricos que impiden el cierre simultáneo de estrella y triángulo.

## Diagrama de conexión
El circuito de fuerza parte de la red trifásica (L1, L2, L3) y llega al motor a través de los tres contactores. Durante el arranque el contactor de estrella (KM2) une los extremos U2, V2, W2 del devanado, mientras KM1 alimenta los principios U1, V1, W1. Transcurrido el temporizador, KM2 se abre y KM3 cierra, conectando cada devanado entre dos fases: U1‑W2, V1‑U2, W1‑V2, formando el triángulo.

```
      L1       L2       L3
       │        │        │
       ├─── KM1 ────────┤
       │                │
       │   U1  V1  W1  │
       │                │
       └─── KM2 (Y) ────┘
                  U2,V2,W2
                  
      Conmutado a Δ:
       L1       L2       L3
       │        │        │
       ├─── KM1 ────────┤
       │                │
       │ U1──┐ ┌──V1──┐ │
       │     │ │      │ │
       │     W2      U2 │
       │                │
       └── V2 ── W1 ────┘
```

El circuito de mando incluye el temporizador, los contactos auxiliares de los contactores y la bobina del relé de sobrecarga para realizar la secuencia estrella → triángulo de forma automática.

## Características de arranque

| Parámetro | Valor típico |
|---|---|
| Corriente de arranque (respecto al arranque directo) | 33 % (≈ 1/3) |
| Par de arranque (respecto al arranque directo) | 33 % (≈ 1/3) |
| Velocidad de conmutación | ≈ 80 % de la velocidad nominal |
| Tensión inicial por fase | 58 % de la tensión de línea |
| Tiempo de arranque en estrella | Ajustable con temporizador (típ. 5‑15 s) |
| Ejemplo de velocidad: motor 4 polos, 50 Hz, 1 500 min⁻¹ / 1 500 rpm → conmutación a 1 200 min⁻¹ / 1 200 rpm |

El par de arranque, proporcional al cuadrado de la tensión de fase, se reduce a (1/√3)² = 1/3 del par del arranque directo. La corriente de arranque en línea sigue la misma reducción, dado que la impedancia por fase es constante.

## Ventajas
- Corriente de arranque reducida al 33 % de la del arranque directo, evitando caídas de tensión excesivas en la red.
- No utiliza componentes electrónicos ni resistencias que generen calor, lo que incrementa la eficiencia del arrancador.
- El arrancador es económico en comparación con variadores de frecuencia o arrancadores suaves.
- Produce un par de arranque moderado, suficiente para aplicaciones con carga centrífuga donde no se requiere un alto par de despegue.
- La conmutación estrella‑triángulo es un método ampliamente normalizado y fácil de implementar con contactores estándar.

## Desventajas
- El par de arranque también se reduce a un tercio, por lo que no es adecuado para cargas con alto par resistente en el arranque.
- Durante la transición de estrella a triángulo se produce un breve pico de corriente (de segunda inserción) que puede provocar perturbaciones en la red.
- El motor debe tener sus seis terminales de devanado accesibles y ser apto para la conexión estrella‑triángulo (normalmente previsto para funcionar en triángulo a la tensión de red).
- El tiempo de arranque se prolonga frente al arranque directo, lo que puede aumentar el calentamiento del motor si el temporizador no está bien ajustado.
- La instalación requiere tres contactores, un relé de sobrecarga y un temporizador, lo que incrementa el volumen y el cableado del armario eléctrico.

## Aplicaciones típicas
El arranque estrella‑delta se emplea en máquinas donde el par resistente crece con la velocidad, de modo que un par de arranque del orden de un tercio del nominal es suficiente para acelerar la carga. Algunos ejemplos:
- Compresores centrífugos
- Bombas centrífugas
- Ventiladores de gran tamaño
- Sopladores
- Cintas transportadoras que arrancan en vacío
- Trituradoras y molinos con acoplamiento hidráulico que permite el desacople parcial

No es apropiado para cargas como cintas transportadoras muy cargadas, elevadores de cangilones o maquinaria que requiera par máximo desde el reposo.

## Fórmulas y cálculos
La reducción de tensión en estrella conduce a las relaciones fundamentales de corriente y par.

**Corriente de línea en arranque estrella (IY) frente a arranque triángulo (IΔ):**

> \mathbf{I_Y = \frac{V_L}{\sqrt{3}\,Z} \quad ; \quad I_\Delta = \frac{\sqrt{3}\,V_L}{Z} \quad \Rightarrow \quad \frac{I_Y}{I_\Delta} = \frac{1}{3}}

**Par de arranque en estrella (TY) frente a arranque triángulo (TΔ), siendo T ∝ Vfase²:**

> \mathbf{T_Y \propto \left( \frac{V_L}{\sqrt{3}} \right)^2 = \frac{V_L^2}{3} \quad ; \quad T_\Delta \propto V_L^2 \quad \Rightarrow \quad \frac{T_Y}{T_\Delta} = \frac{1}{3}}

| Variable | Significado | Unidad |
|---|---|---|
| VL | Tensión de línea de la red | V |
| Vfase | Tensión en bornes de cada devanado | V |
| Z | Impedancia por fase en reposo | Ω |
| IY | Corriente de línea absorbida en estrella | A |
| IΔ | Corriente de línea absorbida en arranque directo triángulo | A |
| TY | Par de arranque en conexión estrella | N·m / lb·ft |
| TΔ | Par de arranque en conexión triángulo directa | N·m / lb·ft |

**Ejemplo numérico:** Si un motor absorbe 150 A en arranque directo, en estrella demandará aproximadamente 150 A / 3 = 50 A de la red. Si el par de arranque directo es 300 N·m / 221 lb·ft, el par en estrella se reduce a unos 100 N·m / 74 lb·ft.

## Preguntas frecuentes (FAQ)
### ¿Cuál es la corriente de arranque de un arrancador estrella‑delta comparada con el arranque directo?
La corriente de arranque en estrella es aproximadamente un 33 % (1/3) de la corriente que absorbería el mismo motor con arranque directo en triángulo, es decir, si en directo consume 150 A, en estrella consumirá unos 50 A.

### ¿Cuánto se reduce el par de arranque con el método estrella‑delta?
El par de arranque se reduce a un 33 % (1/3) del par de arranque directo. En números redondos, un motor que desarrolla 90 N·m / 66 lb·ft en arranque directo generará unos 30 N·m / 22 lb·ft en estrella.

### ¿A qué velocidad se produce la conmutación de estrella a triángulo?
La conmutación se programa típicamente cuando el motor alcanza el 80 % de su velocidad nominal. Para un motor de 4 polos a 50 Hz (1 500 min⁻¹ / 1 500 rpm), la transición ocurre alrededor de 1 200 min⁻¹ / 1 200 rpm.

### ¿Qué par máximo puede vencer un arranque estrella‑delta?
El motor solo entrega un tercio del par de arranque directo, por lo que solo es capaz de vencer cargas cuyo par resistente al arranque no supere ese valor. Con un par directo de 100 N·m / 74 lb·ft, el par útil en estrella será de unos 33 N·m / 24 lb·ft.

### ¿Cuánta tensión recibe cada devanado durante la etapa en estrella?
Cada devanado recibe la tensión de línea dividida por √3, es decir, aproximadamente el 58 % de la tensión de red. Para una red de 400 V, cada fase del motor ve 230 V durante el arranque.

### ¿Cuál es el tiempo típico de permanencia en estrella?
El temporizador se ajusta según la inercia de la carga, y normalmente el tiempo de arranque en estrella oscila entre 5 y 15 segundos.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-motor-start-d_1441.html
- **electrical4u.com**: https://www.electrical4u.com/star-delta-starter/
