---
title: "Diferencia entre puesta a tierra y bonding"
sidebar:
  label: "Diferencia entre puesta a tierra y bonding"
description: "Ficha tecnica: Diferencia entre puesta a tierra y bonding"
keywords: ["grounding vs bonding difference electrical", "puesta-tierra"]
category: "puesta-tierra"
topic: "grounding-fundamentals"
subcategory: "grounding-vs-bonding"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La puesta a tierra y el bonding son dos conceptos fundamentales en la protección de sistemas eléctricos, y aunque a menudo se usan indistintamente, sus propósitos y mecanismos de funcionamiento son claramente distintos. La puesta a tierra conecta intencionadamente un punto del sistema a la tierra física para disipar corrientes de falla o descargas atmosféricas, mientras que el bonding interconecta todas las partes metálicas no conductoras para igualar su potencial eléctrico y eliminar tensiones de contacto peligrosas. Un sistema de protección eficaz requiere que ambos trabajen en conjunto: sin puesta a tierra, la protección contra sobrecorriente puede no actuar; sin bonding, pueden aparecer diferencias de potencial mortales incluso con una puesta a tierra correcta.

## Propósito fundamental

La puesta a tierra proporciona un camino de retorno de baja impedancia hacia la fuente a través del terreno, asegurando la operación de las protecciones en condiciones de falla. El bonding elimina activamente las diferencias de voltaje entre partes conductoras accesibles, previniendo el paso de corriente a través del cuerpo humano. La siguiente tabla resume las diferencias principales:

| Característica | Puesta a Tierra (Grounding) | Bonding (Conexión Equipotencial) |
| :--- | :--- | :--- |
| **Objetivo** | Disipar corriente de falla a tierra | Igualar el potencial entre masas metálicas |
| **Conexión** | Electrodo en contacto con el terreno (pica, placa, anillo) | Conductor entre gabinetes, tuberías y estructuras metálicas |
| **Parámetro crítico** | Resistencia de tierra típica ≤ 25 Ω / ≤ 25 Ω | Impedancia de bucle de falla despreciable, idealmente 0 Ω / 0 Ω |
| **Operación ante falla** | Facilita disparo de protecciones por sobrecorriente | Evita tensión de contacto entre partes simultáneamente accesibles |

## Función específica de la puesta a tierra

La puesta a tierra establece un punto de referencia de tensión fijo —el potencial de tierra— al cual se vinculan los conductores del sistema. En una instalación residencial típica, el electrodo de puesta a tierra debe alcanzar una resistencia no mayor a 25 Ω / 25 Ω frente a tierra remota; si este valor es superado, la norma exige un segundo electrodo suplementario, separado al menos 1,8 m / 6 ft del principal. Su función crítica es drenar corrientes no deseadas —fallas de aislamiento, sobretensiones transitorias o descargas atmosféricas— directamente al terreno, limitando la elevación de potencial del sistema respecto a tierra. En los esquemas TN, el bucle de falla de baja impedancia permite que una corriente de cortocircuito elevada active un interruptor automático en milisegundos; en esquemas TT, la resistencia del terreno puede ser más alta, por lo que se instala un dispositivo de corriente diferencial-residual (RCD) con sensibilidad ≤ 30 mA / 30 mA para complementar la protección.

## Función específica del bonding

El bonding une todas las partes conductoras expuestas —gabinetes metálicos, bandejas portacables, tuberías de agua, gas o calefacción central, barandillas, escaleras, plataformas y estructuras metálicas del edificio— a un mismo potencial eléctrico, normalmente mediante un conductor de protección o directamente al embarrado de tierra principal. La conexión se dimensiona para soportar la máxima corriente de falla prevista sin fundirse ni desprenderse; en un panel principal residencial, el conductor de bonding del neutro a tierra suele ser de 8 mm² / 8 AWG (cobre) como mínimo. Cuando todos los objetos metálicos de una sala están vinculados, incluso si la conexión a tierra remota se interrumpe, una persona no puede tocar simultáneamente dos superficies con diferencia de potencial peligrosa. Esta igualación es especialmente crítica en cuartos de baño, piscinas y fuentes, donde la presencia de agua y piel desnuda reduce la resistencia corporal total.

## Interrelación práctica

El bonding y la puesta a tierra se complementan para formar una red de protección de dos capas. Durante una falla de aislamiento en un equipo, el bonding garantiza que su chasis metálico adquiera el mismo potencial que el resto de las masas conectadas, eliminando la tensión de contacto; simultáneamente, la puesta a tierra provee el camino de retorno que impulsa la corriente de falla a circular. La fórmula simplificada que gobierna la efectividad del disparo es:

> **I_falla = V_fase / (Z_fuente + Z_retorno_tierra)**

Donde:
- **I_falla**: corriente de cortocircuito que debe exceder el umbral del dispositivo de protección
- **V_fase**: tensión de línea (230 V / 400 V en sistemas europeos, 120 V / 240 V en sistemas americanos)
- **Z_fuente**: impedancia interna del transformador y de la línea hasta el punto de falla
- **Z_retorno_tierra**: impedancia del camino de tierra, que un bonding eficaz minimiza al evitar trayectorias a través de uniones sueltas o corroídas

Sin un bonding que unifique la impedancia del retorno, la corriente de falla puede ser demasiado baja para disparar un interruptor termomagnético, manteniendo la instalación energizada y peligrosa por tiempo indefinido.

## Normativa y referencias técnicas

A nivel internacional, la Comisión Electrotécnica Internacional (IEC) clasifica los sistemas de puesta a tierra y bonding en los tipos TN-S, TN-C, TN-C-S, TT e IT, definidos en la norma IEC 60364. En Estados Unidos, el National Electrical Code (NEC) dedica el Artículo 250 íntegramente a los requisitos de grounding y bonding, incluyendo calibres de conductores, electrodos admisibles y métodos de conexión; la mesa 250.66 especifica, por ejemplo, un conductor de cobre de 8,37 mm² / 8 AWG para un electrodo de varilla y de 33,6 mm² / 2 AWG como mínimo para un electrodo de anillo. La IEEE 142 (Green Book) proporciona directrices para el diseño de sistemas de puesta a tierra industriales, mientras que la IEEE 837 detalla la calificación de conectores de bonding para subestaciones.

## Errores comunes

- **Confundir el electrodo de tierra con el bonding**: clavar una varilla de 2,4 m / 8 ft no iguala el potencial entre tuberías y gabinetes, solo deriva corriente al terreno.
- **Asumir que el neutro y la tierra son equivalentes**: en un esquema TN-C-S, la ruptura del conductor neutro aguas arriba del punto de separación deja todas las masas conectadas al potencial de fase; el bonding adecuado de tuberías metálicas evita que existan trayectorias de retorno no controladas.
- **Ignorar el bonding en remodelaciones**: instalar ventanas de aluminio, barandillas o tuberías de metal sin conectarlas al sistema de bonding introduce objetos flotantes que pueden quedar energizados por inducción o contacto accidental.
- **Secionar el conductor de tierra como método de prueba**: desconectar la tierra para medirla sin desenergizar el sistema es una práctica peligrosa, ya que mientras dura la medición todas las masas pierden su referencia de protección.
- **Usar el mismo término para ambos conceptos**: en español, "puesta a tierra" no implica automáticamente "conexión equipotencial"; referirse a ambos como "tierra" en planos y procedimientos es fuente recurrente de defectos de instalación.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia esencial entre puesta a tierra y bonding?
La puesta a tierra conecta el sistema eléctrico a la tierra física para drenar corrientes de falla y fijar una referencia de tensión, mientras que el bonding une todas las partes metálicas entre sí para mantenerlas a un mismo potencial, evitando que aparezcan tensiones peligrosas entre superficies que una persona puede tocar simultáneamente.

### ¿Puede un sistema ser seguro sin bonding si la puesta a tierra tiene una resistencia inferior a 5 ohmios / 5 ohmios?
No lo garantiza. Una resistencia de tierra de 5 ohmios / 5 ohmios asegura un buen drenaje al terreno, pero si dos gabinetes metálicos están unidos a tierra a través de trayectorias con distinta impedancia, una falla en uno de ellos puede elevar su potencial respecto al otro, generando una tensión de contacto que el bonding eliminaría al conectarlos directamente.

### ¿Por qué el bonding es obligatorio en piscinas y fuentes con un mallado de refuerzo?
Porque el cuerpo sumergido reduce drásticamente su resistencia eléctrica y la piel mojada tiene una impedancia de apenas unos cientos de ohmios. El bonding de todos los elementos metálicos, incluyendo armaduras de hormigón, barandillas de acero inoxidable y escalerillas, crea una zona equipotencial donde la diferencia de potencial entre dos puntos cualquiera es prácticamente cero, eliminando el gradiente de tensión que podría atravesar a un nadador.

### ¿Un electrodo de tierra enterrado a 3 metros / 10 ft de profundidad elimina la necesidad de bonding en una subestación?
Definitivamente no. El electrodo drena la corriente de falla y disipa sobretensiones, pero no iguala el potencial de las estructuras metálicas, gabinetes, rejillas y soportes en la superficie. Las normas como IEEE 80 exigen tanto una malla de tierra enterrada como una extensa red de bonding que forme una superficie equipotencial segura para el personal.

### ¿Qué sucede si se rompe el conductor neutro en un sistema TN-C-S que cuenta con bonding?
Si el bonding de tuberías metálicas está correctamente ejecutado, estas tuberías y otras masas interconectadas no se energizarán directamente, pero el potencial del neutro aguas abajo de la rotura puede elevarse hacia la tensión de fase debido a las cargas conectadas. La puesta a tierra con electrodo propio en el edificio atenúa parcialmente el aumento, pero solo un bonding integral evita diferencias de potencial peligrosas entre los elementos metálicos expuestos.

### ¿Es necesario aplicar bonding a una tubería de CPVC o polipropileno de 25 mm / 1 in de diámetro?
No, el bonding solo se requiere en tuberías metálicas o en aquellas que contengan tramos metálicos susceptibles de energizarse. Una tubería completamente no conductora no introduce una superficie expuesta que pueda adquirir un potencial diferente al del entorno, por lo que no forma parte del sistema de conexión equipotencial, aunque las partes metálicas de los equipos conectados a ella sí deben estar vinculadas al bonding.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/electrical-systems-t_33.html
- **electrical4u.com**: https://www.electrical4u.com/system-earthing/
- **mikeholt.com**: https://www.mikeholt.com/bonding-and-grounding.php
