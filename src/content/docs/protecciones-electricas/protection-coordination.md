---
title: "Coordinación de protecciones eléctricas"
sidebar:
  label: "Coordinación de protecciones eléctricas"
description: "Ficha tecnica: Coordinación de protecciones eléctricas"
keywords: ["electrical protection coordination selectivity study", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "coordination"
subcategory: "protection-coordination"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
La coordinación de protecciones eléctricas, también llamada selectividad o discriminación, es la técnica de ajuste de dispositivos de sobrecorriente que garantiza que, ante un fallo en una instalación, solo el interruptor más próximo al defecto desconecte el circuito, manteniendo el servicio en el resto de la red. En sistemas de baja tensión, un diseño de coordinación adecuado puede limitar el tiempo de interrupción a menos de 0,5 segundos incluso en fallos de cortocircuito de hasta 50 kA.

## Requisitos funcionales de la protección selectiva
Un sistema de protección confiable debe alcanzar una tasa de éxito superior al 99,9 % en la detección y despeje de fallos, asegurando que las partes sanas de la instalación permanezcan en servicio.

| Requisito | Descripción | Dato numérico típico |
|---|---|---|
| **Confiabilidad** | El relé debe operar únicamente cuando se cumplan las condiciones para las que fue diseñado, sin actuar en condiciones normales o transitorias ajenas. | Tasa de disparos indebidos < 0,1 % (1 de cada 1000 maniobras) |
| **Selectividad** | Capacidad para disparar solo el interruptor necesario, preservando el suministro en las ramas no afectadas. | Discriminación efectiva en el 100 % de los fallos para la zona de selectividad total |
| **Sensibilidad** | Detecta corrientes de fallo a partir de un valor mínimo preestablecido, funcionando incluso con niveles de cortocircuito reducidos. | Ajuste de pick-up desde 1,2 veces la corriente nominal (In) del circuito |
| **Velocidad** | El tiempo total de interrupción debe ser lo bastante corto para evitar daños en equipos y riesgos para las personas. | Tiempo de operación típico entre 20 ms y 100 ms en circuitos de distribución |

## Métodos de coordinación selectiva
Existen cuatro métodos principales de coordinación selectiva definidos en la norma IEC 60947‑2, que se diferencian por el principio físico utilizado para lograr la discriminación y por el margen de selectividad mínimo que ofrecen.

### Selectividad amperimétrica (corriente)
La selectividad amperimétrica se basa en escalonar las corrientes de disparo instantáneo de los interruptores conectados en serie, de modo que el dispositivo aguas abajo responda antes que el de aguas arriba para la misma intensidad de defecto. El ajuste instantáneo del interruptor principal suele programarse a un valor 1,5 a 2,0 veces superior al del interruptor secundario, lo que proporciona un margen de selectividad del 50 % al 100 %.

| Nivel de protección | Corriente de ajuste instantáneo (ejemplo) | Margen de selectividad |
|---|---|---|
| Interruptor aguas abajo Q2, In = 100 A | 500 A | – |
| Interruptor aguas arriba Q1, In = 250 A | 1000 A | 2,0 (100 %) |

### Selectividad cronométrica (tiempo)
La selectividad cronométrica introduce un retardo intencionado en los dispositivos aguas arriba mediante curvas de tiempo inverso o temporizadores fijos, de manera que la protección más cercana al fallo opere sin espera y la siguiente espere un intervalo definido. El escalón de tiempo típico entre curvas adyacentes es de 0,2 s a 0,5 s, dependiendo de la clase de selectividad.

| Dispositivo | Ajuste de retardo (s) |
|---|---|
| Interruptor Q2 (aguas abajo) | 0 s (instantáneo) |
| Interruptor Q1 (aguas arriba) | 0,3 s |

### Selectividad basada en energía
La selectividad energética analiza la evolución temporal de la corriente de cortocircuito y distingue entre fallos que pueden ser despejados por el interruptor local y aquellos que exceden su capacidad de ruptura, haciendo disparar únicamente al dispositivo de mayor poder de corte. Este método permite alcanzar selectividad total hasta corrientes de cortocircuito superiores a 50 kA en interruptores de caja moldeada con control electrónico.

### Selectividad por zona de interbloqueo (ZSI)
La selectividad por zona de interbloqueo utiliza señales de comunicación entre los relés de protección de diferentes niveles. Cuando un relé detecta un fallo, envía una orden de bloqueo al nivel superior, que retrasa su disparo; si el fallo no es despejado por el nivel inferior en un tiempo de gradiente típico de 100 ms, el nivel superior actúa como respaldo. Esta técnica es especialmente útil en cuadros de distribución con numerosos circuitos ramales.

## Parámetros de ajuste de dispositivos de protección
Los relés de sobrecorriente electrónicos permiten definir con precisión los umbrales y tiempos de actuación mediante ajustes discretos o continuos. Un relé con pantalla gráfica puede ofrecer pasos de ajuste de corriente tan finos como 0,1 A dentro de un rango de 0,5 a 10 veces la corriente nominal (In).

| Parámetro | Símbolo | Rango típico | Unidad dual aplicable (si procede) |
|---|---|---|---|
| Corriente de pick-up (ajuste de sobrecarga) | Is | 0,5 – 1,0 × In | A (valor absoluto en amperios) |
| Corriente de disparo instantáneo | Ii | 2 – 12 × In | A |
| Multiplicador de tiempo (time dial) | TMS | 0,05 – 1,50 | adimensional |
| Retardo fijo para selectividad cronométrica | t<sub>d</sub> | 0,1 – 3,0 s | s |
| Separación mínima entre curvas tiempo‑corriente | Δt | 0,20 – 0,40 s | s |

## Curvas de disparo y ecuaciones de tiempo inverso
La relación entre el tiempo de disparo y la intensidad de fallo sigue curvas normalizadas, cuya forma se describe mediante la ecuación general de tiempo inverso. Para una curva estándar IEC normalmente inversa, la expresión es:

> **t = TMS × (0,14 / ((I/Is)^0,02 – 1))**

donde los términos se definen a continuación.

| Variable | Significado | Unidad |
|---|---|---|
| t | Tiempo de disparo del relé | s |
| TMS | Multiplicador de tiempo (time multiplier setting) | adimensional |
| I | Corriente real del defecto | A |
| Is | Corriente de ajuste (pick‑up) del relé | A |

## Coordinación en áreas clasificadas
La protección de equipos en atmósferas potencialmente explosivas impone restricciones adicionales de temperatura superficial máxima, que deben respetarse en toda la cadena de coordinación. El código de temperatura de un dispositivo indica su temperatura superficial máxima en operación continua y debe ser inferior a la temperatura de autoignición del gas o polvo presente.

| Código de temperatura | Temperatura superficial máxima |
|---|---|
| T1 | 450 °C / 842 °F |
| T2 | 300 °C / 572 °F |
| T2A | 280 °C / 536 °F |
| T2B | 260 °C / 500 °F |
| T2C | 230 °C / 446 °F |
| T2D | 215 °C / 419 °F |
| T3 | 200 °C / 392 °F |
| T3A | 180 °C / 356 °F |
| T3B | 165 °C / 329 °F |
| T3C | 160 °C / 320 °F |
| T4 | 135 °C / 275 °F |
| T4A | 120 °C / 248 °F |
| T5 | 100 °C / 212 °F |
| T6 | 85 °C / 185 °F |

En instalaciones intrínsecamente seguras, la coordinación incluye la separación física entre cableado intrínsecamente seguro y no intrínseco, que de acuerdo con la práctica ISA‑RP12.6 debe ser de al menos **50,8 mm / 2 in** para evitar la transferencia de energía peligrosa al área clasificada.

## Aplicaciones prácticas y ejemplos de selectividad
En una planta industrial con tres niveles de distribución (acometida, tableros secundarios y cargas finales), la aplicación de selectividad cronométrica combinada con selectividad amperimétrica puede reducir el tiempo de indisponibilidad a menos de 0,5 s para el 95 % de los fallos. Por ejemplo, en un esquema con interruptor principal de bastidor abierto de 1600 A, interruptores de caja moldeada de 250 A en sub‑alimentación e interruptores miniatura de 20 A en circuitos de iluminación, se ajustan las curvas de disparo de manera que un cortocircuito en una luminaria solo haga actuar el magnetotérmico de 20 A, dejando los demás niveles en servicio.

## Ventajas y limitaciones de la coordinación
La selectividad total garantiza la continuidad del suministro en las partes no afectadas de la instalación, pero puede exigir interruptores con mayor poder de corte y calibre en los niveles superiores. En sistemas con altas corrientes de cortocircuito (> 50 kA), la selectividad basada en energía ofrece la mejor solución, aunque requiere equipos electrónicos y un estudio de curvas preciso. La principal limitación de la selectividad cronométrica es el incremento del tiempo de despeje en los niveles aguas arriba, lo que puede comprometer la estabilidad térmica de los cables; para compensarlo se suele imponer un tiempo máximo de falla de 5 s en circuitos de distribución.

## Preguntas frecuentes (FAQ)
### ¿Qué es la coordinación selectiva o discriminación?
Es la coordinación de los dispositivos de protección de sobrecorriente para que, ante un fallo, únicamente el interruptor más cercano al defecto desconecte el circuito, preservando el suministro en el resto de la instalación.

### ¿Cuál es la diferencia entre selectividad total y selectividad parcial?
La selectividad total se mantiene para cualquier valor de corriente de cortocircuito hasta el poder de corte máximo de los interruptores; la selectividad parcial solo es válida hasta un determinado nivel de corriente, a partir del cual pueden disparar ambos dispositivos.

### ¿Qué métodos de selectividad contempla la norma IEC 60947‑2?
La norma reconoce la selectividad amperimétrica (por escalonamiento de corrientes), la cronométrica (por retardos de tiempo), la selectividad basada en energía y la selectividad por zona de interbloqueo lógico (ZSI).

### ¿Es obligatorio aplicar coordinación selectiva en todas las instalaciones?
No en todas, pero sí en aquellas donde la continuidad del servicio es crítica, como hospitales, centros de datos o procesos industriales continuos, según exigen códigos como el NEC (artículo 700) o las normas locales equivalentes.

### ¿Cómo se calcula el margen de selectividad entre dos interruptores?
Se compara la curva tiempo‑corriente de los dos dispositivos y se verifica que, para cualquier corriente de fallo, el interruptor aguas abajo despeje el defecto antes de que el interruptor aguas arriba comience a cronometrar su disparo. Un margen típico es un factor de 1,5 a 2 en el ajuste instantáneo o un escalón de tiempo de 0,2 s a 0,4 s en el dominio cronométrico.

### ¿Qué ventajas ofrece la selectividad por zona de interbloqueo (ZSI)?
Reduce el tiempo de despeje en los niveles superiores al evitar retardos innecesarios, ya que los relés de protección se comunican para decidir cuál debe operar. El tiempo de espera programado en el comando de bloqueo suele ser del orden de 100 ms, mucho menor que los retardos acumulativos de la selectividad cronométrica pura.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/hazardous-area-protection-d_487.html
- **electrical4u.com**: https://www.electrical4u.com/protection-system-in-power-system/
