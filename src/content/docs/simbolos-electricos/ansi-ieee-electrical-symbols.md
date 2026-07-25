---
title: "Símbolos eléctricos ANSI/IEEE"
sidebar:
  label: "Símbolos eléctricos ANSI/IEEE"
description: "Ficha tecnica: Símbolos eléctricos ANSI/IEEE"
keywords: ["ANSI IEEE electrical symbols reference", "simbolos-electricos"]
category: "simbolos-electricos"
topic: "iec-symbols"
subcategory: "ansi-ieee-electrical-symbols"
skill: "electrical-symbols-guide"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los símbolos eléctricos ANSI/IEEE, formalmente normalizados mediante la norma IEEE 315-1975 (ANSI Y32.2-1975 / CSA Z99-1975), constituyen un lenguaje gráfico universal utilizado para representar componentes, funciones y conexiones en diagramas esquemáticos y planos eléctricos. Aunque el estándar IEEE 315 fue inactivado sin reemplazo en noviembre de 2019, su conjunto de símbolos continúa siendo referencia obligada en ingeniería eléctrica y electrónica en Norteamérica y en numerosos sectores industriales globales. Esta página recopila los símbolos fundamentales descritos en dicha norma y sus extensiones posteriores, incluyendo los símbolos gráficos para funciones lógicas recogidos en IEEE 91/91a y las convenciones de cruce de conductores.

## Normas de referencia
Los símbolos gráficos para componentes eléctricos y electrónicos están cubiertos por las siguientes normas, que definen la representación adoptada en los esquemas ANSI/IEEE:

| Norma | Descripción |
|---|---|
| IEEE 315‑1975 / ANSI Y32.2‑1975 | Símbolos gráficos para diagramas eléctricos y electrónicos (reafirmada en 1993, inactivada sin sustitución en 2019). |
| IEEE 91 / IEEE 91a | Símbolos gráficos para funciones lógicas (digitales), referenciados desde IEEE 315. |
| ANSI Y32.9‑1972 | Símbolos gráficos para planos de arquitectura eléctrica y de iluminación. |
| ANSI Y1.1‑1972 | Abreviaturas para uso en dibujos y textos técnicos; complementa la simbología gráfica con nomenclatura normalizada. |
| NMTBA EGPl‑1967 | Símbolos JIC (Joint Industrial Council) adoptados por la asociación de fabricantes de máquina‑herramienta. |

> La norma IEEE 315 original agrupaba los símbolos en categorías funcionales: elementos de transmisión, dispositivos de maniobra, contactos, componentes de estado sólido, máquinas rotativas, relés, instrumentos y dispositivos de medida.

## Símbolos de alimentación, tierra y fuentes
La correcta interpretación del tipo de alimentación y de las referencias de masa es imprescindible para analizar cualquier circuito. Las normas ANSI/IEEE distinguen entre fuentes de tensión continua, alterna, masa de señal y masa de chasis.

| Símbolo ANSI/IEEE | Designación |
|---|---|
| Línea continua horizontal o vertical, con un punto de conexión (círculo relleno) donde confluyen tres o más conductores. | Conductor o conexión eléctrica. |
| Dos líneas paralelas de distinta longitud; la más larga representa el borne positivo y la más corta el negativo. | Pila o batería, celda única. |
| Dos o más pares de líneas paralelas largas y cortas alternadas. | Batería multicelda. |
| Círculo con un signo más «+» y otro menos «–» en su interior, separados por una línea horizontal. | Fuente de tensión continua (CC) controlada o independiente. |
| Círculo con una onda senoidal (~) en su interior. | Fuente de tensión alterna (CA) genérica. |
| Tres líneas horizontales de longitud decreciente hacia abajo. | Tierra de chasis o tierra de protección (earth ground, IEC‑style adaptado). |
| Tres líneas horizontales decrecientes, con la superior conectada a un punto; en lugar de la inferior se dibuja un triángulo con la punta hacia arriba. | Tierra general (señal/referencia). |
| Símbolo de tierra con un asterisco «*» junto a él (el asterisco no forma parte del símbolo). | Tierra de baja señal o de bajo ruido. |

## Símbolos de resistencias, condensadores e inductores
Los componentes pasivos constituyen la base de los circuitos. Los símbolos ANSI/IEEE suelen representar las resistencias mediante una línea quebrada (zigzag) mientras que los condensadores usan dos placas paralelas.

| Símbolo ANSI/IEEE | Componente |
|---|---|
| Línea quebrada en zigzag. | Resistencia fija. |
| Línea quebrada con una flecha diagonal que la atraviesa. | Resistencia variable (reóstato). |
| Línea quebrada con una flecha diagonal y un tercer terminal. | Potenciómetro (divisor de tensión ajustable). |
| Dos placas paralelas de igual longitud, sin polaridad marcada. | Condensador no polarizado (genérico). |
| Dos placas paralelas; una de ellas curvada o acompañada de un signo «+». | Condensador electrolítico polarizado. |
| Dos placas paralelas con una flecha diagonal que las cruza. | Condensador variable. |
| Serie de semibucles (arcos) consecutivos sobre una línea. | Inductor (bobina) con núcleo de aire. |
| Serie de semibucles con dos líneas paralelas próximas (representan un núcleo ferromagnético). | Inductor con núcleo de hierro. |
| Dos bobinas acopladas magnéticamente (dos inductores próximos con líneas de núcleo comunes) | Transformador de dos devanados. |

## Símbolos de diodos, transistores y dispositivos de estado sólido
La familia de semiconductores se representa de acuerdo con la norma IEEE 315, complementada por IEEE 91 para elementos lógicos. Los símbolos comparten la flecha que indica la unión PN y la dirección de conducción.

| Símbolo ANSI/IEEE | Dispositivo |
|---|---|
| Triángulo (ánodo) apoyado sobre una barra vertical (cátodo); el vértice apunta hacia la barra. | Diodo de unión (rectificador). |
| Ídem anterior, con una barra vertical doblada en ángulo recto en la zona del cátodo. | Diodo Zener. |
| Diodo con dos flechas entrantes (símbolo de luz) hacia la unión. | Fotodiodo. |
| Diodo con dos flechas saliendo del triángulo (emisión de luz). | LED (diodo emisor de luz). |
| Cuatro diodos dispuestos en configuración de puente. | Puente rectificador de diodos. |
| Transistor con tres terminales: base (línea recta), emisor (flecha saliente en NPN, entrante en PNP) y colector. | BJT NPN. |
| Similar al anterior, pero con la flecha del emisor dirigida hacia la base. | BJT PNP. |
| Transistor de efecto de campo de unión de canal N: puerta (gate) con flecha entrante. | JFET canal N. |
| Transistor de efecto de campo de unión de canal P: puerta con flecha saliente. | JFET canal P. |
| Círculo con una flecha en su interior y un símbolo de amplificador. | Fotocélula (célula fotovoltaica). |

## Símbolos de interruptores, relés y conectores
Estos símbolos controlan el flujo de corriente y la interconexión física entre partes del circuito. La norma distingue entre contacto normalmente abierto (NA), normalmente cerrado (NC) y conmutado.

| Símbolo ANSI/IEEE | Función |
|---|---|
| Dos líneas paralelas; la superior móvil (se separa en reposo). | Contacto normalmente abierto (NA). |
| Dos líneas paralelas que se tocan en reposo; la superior se eleva al accionar. | Contacto normalmente cerrado (NC). |
| Combinación de NA y NC con un punto común. | Contacto conmutado (SPDT). |
| Bobina de relé (representada como un círculo o un rectángulo con la letra «K» y dos terminales). | Relé electromecánico, bobina. |
| Símbolo de interruptor de circuito (línea quebrada con un arco encima) y un contacto NA asociado. | Interruptor termomagnético (automático). |
| Punto de unión con un pequeño círculo relleno en el cruce de conductores. | Conexión eléctrica (empalme). |
| Cruce de dos líneas sin círculo; a veces se añade un semicírculo («puente») sobre una de ellas. | Cruce sin conexión (aislado). |

## Símbolos de instrumentación y medida
Los aparatos de medida se representan con un círculo y una letra identificativa en su interior. La norma distingue entre indicadores, registradores y transductores.

| Símbolo ANSI/IEEE | Instrumento |
|---|---|
| Círculo con la letra «A» en su interior. | Amperímetro. |
| Círculo con la letra «V» en su interior. | Voltímetro. |
| Círculo con la letra «G» en su interior. | Galvanómetro. |
| Círculo con la letra «W» en su interior. | Vatímetro. |
| Rectángulo con la etiqueta «CRO» o «OSC». | Osciloscopio de rayos catódicos (CRO). |
| Rectángulo genérico con pines numerados; puede llevar el número de parte estándar. | Circuito integrado (CI). |

## Preguntas frecuentes (FAQ)
### ¿Qué significan las siglas ANSI e IEEE en el contexto de los símbolos eléctricos?
ANSI (American National Standards Institute) coordina la normalización en Estados Unidos; IEEE (Institute of Electrical and Electronics Engineers) desarrolla los contenidos técnicos. La norma de símbolos se denominó IEEE 315-1975 y fue adoptada como ANSI Y32.2-1975.

### ¿En qué se diferencian los símbolos ANSI/IEEE de los símbolos IEC?
La principal diferencia radica en la representación gráfica: por ejemplo, las resistencias se dibujan con zigzag en ANSI/IEEE y como un rectángulo en IEC 60617. También varían los símbolos de masa y de fuentes, aunque el significado funcional es equivalente.

### ¿Cómo se representa una conexión a tierra de chasis según la norma IEEE 315?
Se utiliza un conjunto de tres líneas horizontales de longitud decreciente hacia abajo, conectadas a un punto común. Para tierra de señal se emplea un triángulo con la punta hacia arriba.

### ¿Sigue vigente la norma IEEE 315-1975?
Fue reafirmada en 1993 e inactivada sin reemplazo en noviembre de 2019. Sin embargo, continúa utilizándose como referencia de facto en multitud de planos y aplicaciones de CAD.

### ¿Cómo se debe dibujar un cruce de cables sin conexión eléctrica?
El método recomendado es evitar los cruces en ángulo recto y, en lugar de eso, dibujar un pequeño semicírculo («puente») sobre uno de los conductores, de forma que quede claro que no existe unión metálica. El uso exclusivo de un punto (•) queda reservado para empalmes conectados.

### ¿Existen variantes del estándar ANSI/IEEE para aplicaciones específicas?
Sí, el estándar recoge símbolos específicos para máquinas herramienta (JIC), planos arquitectónicos (ANSI Y32.9) y funciones lógicas (IEEE 91). Además, muchos fabricantes introducen ligeras personalizaciones dentro de los símbolos normalizados para indicar características especiales.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/ANSI-abbreviations-scientific-engineering-terms-d_1622.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-international-symbol/
