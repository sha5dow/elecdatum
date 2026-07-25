---
title: "Cálculo de impedancia en corriente alterna"
sidebar:
  label: "Cálculo de impedancia en corriente alterna"
description: "Ficha tecnica: Cálculo de impedancia en corriente alterna"
keywords: ["AC impedance calculation formula R X Z", "circuitos-analisis"]
category: "circuitos-analisis"
topic: "ac-fundamentals"
subcategory: "impedance-calculation"
skill: "circuit-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La impedancia es una magnitud fundamental en el análisis de circuitos de corriente alterna (CA) que generaliza el concepto de resistencia. Cuantifica la oposición total que presenta un circuito al paso de una corriente sinusoidal, combinando los efectos de la resistencia óhmica y de la reactancia (inductiva y capacitiva). Se expresa como un número complejo cuya unidad en el Sistema Internacional es el ohmio (Ω).

## Definición y representación compleja de la impedancia
En un circuito de CA en régimen sinusoidal permanente, la impedancia \(Z\) se define como la relación entre el fasor de tensión \(V\) y el fasor de corriente \(I\). Su valor típico en aplicaciones de electrónica de potencia puede oscilar entre unos pocos miliohmios hasta varios kiloohmios. La representación compleja más utilizada es la forma cartesiana:

> **Z = R + jX**

| Símbolo | Magnitud | Unidad |
| --- | --- | --- |
| Z | Impedancia compleja | Ω |
| R | Resistencia (parte real) | Ω |
| X | Reactancia (parte imaginaria) | Ω |
| j | Unidad imaginaria (\(\sqrt{-1}\)) | – |

La parte real \(R\) corresponde a la resistencia eléctrica del circuito, mientras que la parte imaginaria \(X\) es la reactancia, que puede ser de naturaleza inductiva (\(X_L\) positiva) o capacitiva (\(X_C\) negativa).

## Componentes de la impedancia: resistencia y reactancia
En un circuito de CA, la componente resistiva disipa energía en forma de calor y es independiente de la frecuencia, mientras que la componente reactiva almacena y devuelve energía sin disiparla y su valor varía con la frecuencia. La resistencia se mide en ohmios (Ω), al igual que la reactancia.

La resistencia es la oposición al movimiento de cargas debida a colisiones en la estructura del material; para un conductor metálico a 20 °C / 68 °F, una resistencia típica puede ser de 10 Ω. La reactancia, en cambio, surge de los campos magnéticos (inductancia) y eléctricos (capacitancia) generados por los elementos del circuito. Mientras que en corriente continua la reactancia no tiene efecto, en corriente alterna introduce un desfase entre tensión y corriente.

## Reactancia inductiva y capacitiva
La reactancia inductiva de una bobina de 100 mH a 50 Hz es aproximadamente 31.4 Ω, mientras que la reactancia capacitiva de un condensador de 100 µF a la misma frecuencia es de 31.8 Ω. Ambas dependen directamente de la frecuencia angular \(\omega = 2\pi f\) y de los valores de inductancia \(L\) y capacidad \(C\).

**Reactancia inductiva:**
> **X_L = 2\pi f L = \omega L**

**Reactancia capacitiva (magnitud):**
> **X_C = \frac{1}{2\pi f C} = \frac{1}{\omega C}**

En notación compleja, la impedancia de un inductor puro es \(Z_L = j\omega L\) y la de un condensador puro es \(Z_C = -j\frac{1}{\omega C} = \frac{1}{j\omega C}\). Por convenio, la reactancia inductiva se considera positiva y la capacitiva negativa, lo que determina el signo del ángulo de fase.

| Parámetro | Símbolo | Unidad | Relación con la frecuencia |
| --- | --- | --- | --- |
| Inductancia | L | Henrio (H) | Reactancia directamente proporcional a \(f\) |
| Capacidad | C | Faradio (F) | Reactancia inversamente proporcional a \(f\) |
| Frecuencia angular | \(\omega\) | rad/s | \(\omega = 2\pi f\) |

## Magnitud y ángulo de fase de la impedancia
Para una impedancia con \(R = 10\ \Omega\) y \(X = 5\ \Omega\), su magnitud es de 11.18 Ω y el ángulo de fase de 26.6°. La magnitud (o módulo) de la impedancia se calcula mediante:

> **|Z| = \sqrt{R^{2} + X^{2}}**

El ángulo de fase \(\theta\) representa el desfase entre la tensión y la corriente:

> **\theta = \arctan\left(\frac{X}{R}\right)**

| Símbolo | Significado | Unidad / Rango |
| --- | --- | --- |
| \( \|Z\| \) | Módulo de la impedancia | Ω |
| \(\theta\) | Ángulo de fase | Grados (°) o radianes |
| \(R\) | Resistencia | Ω |
| \(X\) | Reactancia neta (\(X_L - X_C\)) | Ω |

Cuando la reactancia neta es positiva (predominantemente inductiva), \(\theta > 0\) y la corriente se retrasa respecto a la tensión. Si la reactancia es negativa (predominantemente capacitiva), \(\theta < 0\) y la corriente adelanta a la tensión.

## Cálculo de impedancias equivalentes en serie y en paralelo
La impedancia total de dos elementos en serie \(Z_1 = 3 + j4\ \Omega\) y \(Z_2 = 1 - j2\ \Omega\) es \(4 + j2\ \Omega\), con una magnitud de 4.47 Ω. Las reglas de asociación de impedancias son análogas a las de resistencias, pero utilizando álgebra compleja.

**Conexión en serie:**
> **Z_{eq} = Z_{1} + Z_{2} + \dots + Z_{n}**

**Conexión en paralelo:**
> **\frac{1}{Z_{eq}} = \frac{1}{Z_{1}} + \frac{1}{Z_{2}} + \dots + \frac{1}{Z_{n}}**

Para el caso particular de dos impedancias en paralelo, \(Z_{eq} = \frac{Z_1 Z_2}{Z_1 + Z_2}\).

En circuitos RLC serie, la impedancia equivalente se obtiene sumando las contribuciones:
> **Z_{serie} = R + j\left(\omega L - \frac{1}{\omega C}\right)**

En circuitos RLC paralelo se trabaja con admitancias (\(Y = 1/Z\)):
> **Y_{paralelo} = \frac{1}{R} + j\left(\omega C - \frac{1}{\omega L}\right)**

## Ejemplo de cálculo de impedancia en un circuito RL serie
Se dispone de un circuito RL serie con una resistencia de 40 Ω y una bobina de 0.1 H conectado a una fuente de 60 Hz. La reactancia inductiva se calcula como \(X_L = 2\pi \cdot 60 \cdot 0.1 \approx 37.7\ \Omega\). La impedancia total en forma compleja es:

> **Z = 40 + j37.7\ \Omega**

La magnitud de la impedancia es \( |Z| = \sqrt{40^2 + 37.7^2} \approx 54.5\ \Omega\) y el ángulo de fase \(\theta = \arctan(37.7 / 40) \approx 43.3^\circ\). Este ángulo positivo indica que la corriente atrasa respecto a la tensión, comportamiento característico de un circuito inductivo. Si la tensión de alimentación tuviera un valor eficaz de 120 V, la corriente eficaz sería \(I = 120\ \text{V} / 54.5\ \Omega \approx 2.2\ \text{A}\).

## Preguntas frecuentes (FAQ)
### ¿Cuál es la diferencia entre resistencia e impedancia?
La resistencia es la oposición al flujo de corriente en corriente continua y solo depende del material y la geometría; la impedancia es la oposición en corriente alterna, incluyendo efectos reactivos que dependen de la frecuencia y que introducen un desfase entre tensión y corriente.

### ¿Cómo se calcula la reactancia inductiva?
La reactancia inductiva se calcula con la fórmula \(X_L = 2\pi f L\), donde \(f\) es la frecuencia en hercios y \(L\) la inductancia en henrios.

### ¿Qué significa un ángulo de fase positivo o negativo en la impedancia?
Un ángulo de fase positivo (\(X > 0\)) indica un circuito con comportamiento inductivo, donde la corriente se atrasa respecto a la tensión; un ángulo negativo (\(X < 0\)) señala un circuito capacitivo, donde la corriente adelanta a la tensión.

### ¿Cómo se suman impedancias en serie y en paralelo?
En serie se suman directamente como números complejos (\(Z_{eq} = Z_1 + Z_2 + \dots\)). En paralelo se suman sus admitancias (inversos) o, para dos impedancias, se usa \(Z_{eq} = (Z_1 Z_2)/(Z_1 + Z_2)\).

### ¿Por qué la impedancia varía con la frecuencia?
Porque la reactancia inductiva y capacitiva dependen de la frecuencia angular \(\omega = 2\pi f\). Al aumentar la frecuencia, \(X_L\) crece y \(X_C\) decrece, modificando la reactancia neta y, por tanto, la impedancia total.

### ¿Qué instrumento se utiliza para medir la impedancia?
Se emplea un analizador de impedancia o un puente LCR, que aplica una señal de prueba a distintas frecuencias y mide la respuesta en magnitud y fase.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-formulas-d_455.html
- **allaboutcircuits.com**: https://www.allaboutcircuits.com/textbook/reference/chpt-1/ac-circuit-equations/
- **electrical4u.com**: https://www.electrical4u.com/electrical-impedance/
