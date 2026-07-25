---
title: "Relevador de sobrecarga térmica selección"
sidebar:
  label: "Relevador de sobrecarga térmica selección"
description: "Ficha tecnica: Relevador de sobrecarga térmica selección"
keywords: ["thermal overload relay selection motor", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "relays"
subcategory: "overload-relay"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

El relevador de sobrecarga térmica es un dispositivo de protección que desconecta el motor cuando la corriente absorbida supera el valor nominal durante un tiempo suficiente para generar un calentamiento peligroso. Su función principal es evitar daños en el aislamiento de los devanados debidos a sobrecargas prolongadas, arranques frecuentes o condiciones anormales como bloqueo del rotor, baja tensión o falta de fase.

El relevador térmico basa su operación en el efecto calorífico de la corriente. Una lámina bimetálica, calentada directa o indirectamente por la corriente del motor, se deforma de manera proporcional a la energía acumulada. Cuando la temperatura alcanza el umbral de disparo, la deformación libera un mecanismo de enclavamiento que abre un contacto auxiliar en serie con la bobina del contactor, interrumpiendo la alimentación del motor. El tiempo de disparo sigue una característica inversa: a mayor sobrecorriente, menor tiempo de actuación.

Tras un disparo, el bimetal debe enfriarse antes de que pueda rearmarse manual o automáticamente, lo que proporciona un tiempo de recuperación necesario para la disipación del calor en el motor.

## Curva característica de disparo térmico
La curva define la relación entre la corriente que circula por el relé (expresada en múltiplos de la corriente de ajuste) y el tiempo de disparo. La forma típica se basa en una ecuación de calentamiento adiabático:

> **t = k / (I² – 1)**

| Variable | Significado |
|----------|-------------|
| t | Tiempo de disparo (s) |
| k | Constante térmica dependiente de la clase de disparo y del diseño del relé |
| I | Corriente real en por unidad de la corriente de ajuste |

El valor de k se determina experimentalmente para cada clase de disparo, estableciendo los límites de tiempo a diferentes sobrecargas según las normas internacionales.

## Criterios de selección
La elección del relevador térmico adecuado se fundamenta en estos parámetros:

| Criterio | Descripción | Ejemplo numérico |
|---|---|---|
| Corriente de ajuste (Ir) | Debe cubrir la corriente nominal del motor, reflejada en su placa de características. El rango del relé debe incluir dicho valor. | Motor de 10 A / 10 A → relé con rango 8–12,5 A / 8–12,5 A |
| Clase de disparo | Determinada por la aplicación (ver tabla siguiente). | Compresor pesado → clase 20 o 30 |
| Tensión de aislamiento y corriente de cortocircuito | El relé debe soportar la tensión nominal del circuito y el nivel de cortocircuito del arrancador. | 690 V CA / 690 V CA |
| Compensación de temperatura ambiente | Los relevadores con compensación mantienen el punto de disparo casi constante entre –20 °C / –4 °F y +60 °C / 140 °F. | — |
| Número de polos | Normalmente tripolares para motores trifásicos; también disponibles versiones monofásicas o con detección de falta de fase. | Motor trifásico → relé tripolar |
| Tipo de montaje | Directo sobre contactor, independiente sobre riel DIN o placa. | — |

## Clases de disparo según IEC 60947-4-1
Las clases normalizadas definen el tiempo máximo de disparo a 7,2 veces la corriente de ajuste, partiendo del estado frío.

| Clase | Tiempo de disparo a 7,2 × Ir (s / s) | Aplicaciones típicas |
|-------|-----------------------------------------|----------------------|
| 10A | < 2 s / < 2 s | Cargas de muy baja inercia, bombas centrífugas pequeñas |
| 10 | 2 s / 2 s – 10 s / 10 s | Aplicaciones generales ligeras, ventiladores, bombas estándar |
| 20 | 6 s / 6 s – 20 s / 20 s | Maquinaria con arranque pesado, compresores de pistón, cintas transportadoras largas |
| 30 | 9 s / 9 s – 30 s / 30 s | Arranques muy prolongados, ventiladores de gran inercia, trituradoras |

[VERIFICAR] Los valores exactos pueden variar según el fabricante y deben contrastarse con la norma IEC 60947-4-1 en vigor.

## Ajuste de la corriente de disparo
El ajuste se realiza mediante un dial graduado que desplaza el punto de anclaje del bimetal o modifica la tensión del resorte de disparo. La corriente de ajuste (Ir) se calcula con la expresión:

> **I_ajuste = I_n × FS**

| Símbolo | Magnitud | Unidad |
|---------|----------|--------|
| I_ajuste | Corriente de ajuste del relé | A / A |
| I_n | Corriente nominal del motor a plena carga (placa) | A / A |
| FS | Factor de servicio (típicamente 1,0 o 1,15) | — |

Para motores con factor de servicio 1,15, el relé se configura al 115 % / 115 % de la corriente nominal, asegurando que no dispare en la zona de sobrecarga admisible continua. Si el relé no dispone de compensación de temperatura, debe aplicarse un factor de corrección adicional cuando la temperatura ambiente difiera significativamente de 40 °C / 104 °F.

## Protecciones contra condiciones anormales
El relevador de sobrecarga térmica, complementado con un disparo diferencial en algunos modelos, cubre las siguientes situaciones:

| Condición | Efecto en el motor | Acción del relevador |
|---|---|---|
| Sobrecarga mecánica | Aumento de corriente proporcional a la carga | Calentamiento del bimetal y disparo según curva térmica |
| Rotor bloqueado | Corriente de arranque permanente (600 % / 600 % a 700 % / 700 % de In) | Disparo rápido por alta energía disipada |
| Baja tensión de alimentación | Incremento de corriente para mantener el par motor | Disparo por sobrecorriente sostenida |
| Falta de fase (monofasismo) | Corriente dispar en las fases, sobrecalentamiento severo | Disparo diferencial por desequilibrio entre bimetales (en relés con sensibilidad a falta de fase) |
| Desequilibrio de tensión (>2 % / 2 %) | Corrientes de secuencia negativa que generan calor adicional | Disparo por calentamiento asimétrico del bimetal |
| Arranques frecuentes o reinicios tras microcorte | Acumulación de calor sin tiempo de enfriamiento suficiente | Memoria térmica del bimetal que acorta el tiempo de disparo en rearranques sucesivos |

## Preguntas frecuentes (FAQ)

### ¿Cuánto puede alcanzar la corriente de arranque de un motor de inducción en el momento del encendido?
La corriente de arranque puede llegar a un 600 % / 600 % de la corriente nominal a plena carga, equivalente a 6 o 7 veces su valor, debido al máximo deslizamiento cuando el rotor está detenido.

### ¿En cuánto tiempo se reduce la corriente de arranque a aproximadamente 500 % / 500 % de la nominal?
La corriente cae al entorno del 500 % / 500 % en unos 12 s / 12 s, momento en que el motor alcanza cerca del 80 % / 80 % de la velocidad de sincronismo.

### ¿Qué rango de deslizamiento presenta un motor asíncrono durante su operación normal?
El deslizamiento en régimen permanente se sitúa típicamente entre el 1 % / 1 % y el 3 % / 3 %, dependiendo del nivel de carga y del diseño del motor.

### ¿Cuál es la principal causa de sobrecalentamiento que activa la protección térmica?
La sobrecarga mecánica es la causa más frecuente, ya que fuerza al motor a consumir una corriente superior a la nominal, detectada directamente por el relevador térmico.

### ¿Qué ocurre con la corriente en las fases sanas cuando se pierde una fase en un sistema trifásico?
La corriente en las dos fases restantes aumenta a un valor comprendido entre el 150 % / 150 % y el 200 % / 200 % de la corriente nominal, provocando un rápido calentamiento que el relé interpreta como sobrecarga.

### ¿Cómo afecta la temperatura ambiente al punto de disparo de un relevador sin compensación térmica?
Una variación de 10 °C / 18 °F en la temperatura ambiente puede desplazar el umbral de disparo en aproximadamente un 10 % / 10 %, adelantando o retrasando la protección según el sentido del cambio.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/motor-thermal-overload-protection/
