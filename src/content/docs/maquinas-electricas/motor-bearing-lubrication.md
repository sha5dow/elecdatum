---
title: "Lubricación de rodamientos en motores"
sidebar:
  label: "Lubricación de rodamientos en motores"
description: "Ficha tecnica: Lubricación de rodamientos en motores"
keywords: ["electric motor bearing lubrication schedule", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "motor-selection"
subcategory: "motor-bearing-lubrication"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La lubricación de rodamientos en motores eléctricos es un procedimiento de mantenimiento que aplica grasa o aceite entre los elementos rodantes y las pistas de rodadura para reducir la fricción, disipar calor y proteger contra la contaminación. Una lubricación adecuada puede extender la vida útil del rodamiento hasta en un 80% respecto a condiciones de lubricación deficiente, y representa una de las tareas de mantenimiento preventivo más críticas para garantizar la operación confiable de motores de inducción y otras máquinas eléctricas rotativas.

## Principio de lubricación

La lubricación de rodamientos en motores eléctricos se basa en la formación de una película delgada de lubricante entre los elementos rodantes y las pistas de rodadura, que separa las superficies metálicas en movimiento relativo. Esta película soporta la carga aplicada y minimiza el contacto directo metal-metal, reduciendo el desgaste. El régimen de lubricación predominante en rodamientos de motores es la lubricación elastohidrodinámica (EHL), donde la presión en la zona de contacto es lo suficientemente alta como para aumentar transitoriamente la viscosidad del lubricante y deformar elásticamente las superficies. En condiciones ideales de velocidad y carga, el espesor de película típico oscila entre 0,1 µm y 3 µm / 3,9 µin y 118 µin.

En los rodamientos lubricados con grasa, el jabón metálico que conforma el espesante actúa como una esponja que libera el aceite base gradualmente hacia la zona de contacto. Durante la fase de rodaje inicial, la grasa se redistribuye y el exceso es expulsado de las pistas, dejando solo una fina película lubricante en funcionamiento estable. La cantidad de grasa requerida se estima con la fórmula que relaciona el volumen libre en el rodamiento con un factor de llenado porcentual.

> **G = 0,005 × D × B**

Donde:
| Variable | Significado | Unidad |
|---|---|---|
| G | Cantidad de grasa | g / oz |
| D | Diámetro exterior del rodamiento | mm / in |
| B | Ancho del rodamiento | mm / in |

## Tipos de sistemas de lubricación

| Sistema | Componentes | Aplicación típica en motores |
|---|---|---|
| Grasa por engrasador manual | Engrasador de bola o cónico, conducto de entrada | Motores pequeños y medianos de jaula de ardilla |
| Grasa por plato de resorte | Plato compresor, resorte calibrado, depósito de grasa | Motores de larga duración sin mantenimiento frecuente |
| Anillo de aceite / ring oiler | Anillo metálico, depósito inferior de aceite, ranura en el eje | Motores horizontales con cojinetes de deslizamiento |
| Circulación forzada de aceite | Bomba de aceite, filtro, enfriador, tuberías, depósito | Motores grandes o de alta velocidad con cojinetes lubricados por aceite |
| Niebla de aceite | Generador de niebla, boquillas de aplicación, colector | Motores en servicios continuos de plantas de proceso |

El sistema de anillo de aceite opera montando un anillo metálico de diámetro mayor que el eje sobre la parte superior del mismo, sumergido parcialmente en un depósito de aceite inferior. La rotación del eje arrastra el anillo, el cual asciende girando sobre su propio eje y transporta aceite adherido a su superficie hacia la parte superior del eje, desde donde fluye lateralmente hacia los cojinetes. Este sistema es efectivo en velocidades de hasta aproximadamente 1000 rpm / 1000 rpm, ya que por encima de este valor la fuerza centrífuga tiende a expulsar el aceite del anillo en lugar de transportarlo, y requiere que el eje permanezca horizontal y estable.

## Programa de lubricación según tipo de motor

| Tipo de motor | Intervalo de lubricación típico (horas) | Método de verificación |
|---|---|---|
| Jaula de ardilla, servicio ligero (< 1800 rpm / < 1800 rpm) | Cada 2000 – 4000 h | Control de temperatura y análisis de vibración |
| Jaula de ardilla, servicio continuo estándar | Cada 1500 – 2000 h | Medición de temperatura en carcasa del rodamiento |
| Jaula de ardilla, servicio severo (alta temperatura, suciedad) | Cada 500 – 1000 h | Monitoreo continuo de vibración y termografía |
| Rotor bobinado con anillos rozantes | Cada 1000 – 1500 h | Inspección visual de anillos y verificación de nivel de aceite |
| Cojinetes de deslizamiento lubricados por anillo | Revisión semanal del nivel; cambio de aceite cada 6 meses | Control visual del nivel de aceite en depósito |

## Tipos de lubricantes y aplicaciones

| Tipo de lubricante | Composición base | Rango de temperatura de operación | Viscosidad típica del aceite base a 40 °C | Aplicación recomendada |
|---|---|---|---|---|
| Grasa de litio NLGI 2 | Aceite mineral + jabón de litio | -30 °C a 120 °C / -22 °F a 248 °F | 100 – 150 cSt | Servicio general en motores estándar |
| Grasa de litio complejo NLGI 2-3 | Aceite mineral + jabón de litio complejo | -20 °C a 150 °C / -4 °F a 302 °F | 150 – 220 cSt | Motores de alta temperatura o ciclos largos |
| Grasa de poliurea NLGI 2 | Aceite mineral o sintético + espesante de poliurea | -20 °C a 160 °C / -4 °F a 320 °F | 70 – 150 cSt | Motores de alta velocidad y larga vida |
| Grasa de bentonita NLGI 2 | Aceite sintético + arcilla bentonítica | -40 °C a 180 °C / -40 °F a 356 °F | 30 – 100 cSt | Temperaturas extremas, compatible con radiación |
| Aceite para cojinetes de deslizamiento R&O | Aceite mineral refinado con aditivos antioxido y antidesgaste | -10 °C a 80 °C / 14 °F a 176 °F | 32 – 68 cSt | Cojinetes de deslizamiento lubricados por anillo o circulación |

## Frecuencia de re-lubricación

La frecuencia de lubricación en motores eléctricos depende de cuatro factores principales: la velocidad de giro, la temperatura de operación del rodamiento, el tipo de grasa seleccionada y las condiciones ambientales. Un método común para estimar la frecuencia de relubricación utiliza la siguiente fórmula empírica.

> **t = K × (14 × 10⁶) / (n × √d) − 4 × d**

Donde:
| Variable | Significado | Unidad |
|---|---|---|
| t | Intervalo de re-lubricación | h |
| n | Velocidad de rotación del eje | rpm / rpm |
| d | Diámetro interior del rodamiento | mm / in |
| K | Factor de ajuste por tipo de rodamiento y condiciones | adimensional |

## Fallas comunes por mala lubricación

| Falla | Síntoma | Causa probable | Solución |
|---|---|---|---|
| Desgaste abrasivo en pistas y elementos rodantes | Aumento gradual de vibración y ruido, superficie mate o rayada | Grasa contaminada con partículas sólidas o ingreso de polvo ambiental | Limpiar completamente el rodamiento, aplicar grasa nueva, mejorar sellos |
| Fatiga superficial por sobrecarga de lubricante | Ruido excesivo, aumento rápido de temperatura, grasa oscurecida y endurecida | Exceso de grasa que provoca batido y calentamiento interno | Reducir cantidad de grasa al 30-50% del volumen libre del rodamiento |
| Falso brinelling / marcas por vibración | Marcas transversales visibles en pistas, vibración sin rotación del eje | Motor detenido sometido a vibración externa sin película lubricante suficiente | Usar grasa con aditivos antidesgaste, arrancar motor periódicamente, aplicar recubrimientos |
| Corrosión por humedad atrapada | Óxido superficial en pistas, picaduras, aumento del juego interno | Agua libre emulsionada en la grasa por lavado a presión o condensación | Sustituir grasa por una con inhibidores de corrosión, revisar sellos y drenajes |
| Degradación térmica del lubricante | Residuos carbonosos en jaula y pistas, color negro intenso, pérdida de viscosidad | Temperatura de operación superior al límite de la grasa | Seleccionar grasa con mayor estabilidad térmica, reducir carga o mejorar ventilación |

## Cómo engrasar correctamente

El procedimiento de engrase de un rodamiento en un motor eléctrico debe seguir una secuencia controlada para evitar el ingreso de contaminantes y el exceso de lubricante. Primero, se limpia minuciosamente el engrasador y la zona circundante para eliminar suciedad adherida. Luego, se retira el tapón de purga inferior, si existe, y se inyecta la grasa a través del engrasador superior con el motor en funcionamiento, siempre que las condiciones de seguridad lo permitan. La cantidad a aplicar se mide en gramos, no por volumen de bombeo, usando la fórmula de llenado o las tablas del fabricante del rodamiento. Después de engrasar, se deja el motor girando entre 30 minutos y 1 hora para que el exceso de grasa sea expulsado por el tapón de purga, tras lo cual se vuelve a colocar el tapón. La temperatura del rodamiento debe monitorizarse durante esta operación; un aumento superior a 15 °C / 27 °F respecto a la temperatura de régimen indica sobreengrase o contaminación.

## Herramientas y materiales

| Herramienta / Material | Función | Especificaciones típicas |
|---|---|---|
| Bomba engrasadora manual | Aplicación controlada de grasa | Palanca o pistola, boquilla acoplable a engrasador |
| Medidor de ultrasonidos pasivos | Detección de fricción anormal y fallos incipientes en rodamientos | Rango de frecuencia típico 20 – 100 kHz |
| Ultrasonidos activos con grasa compatible | Verificación del ingreso efectivo de grasa durante la lubricación | Receptor de contacto con indicador audible y visual |
| Analizador de vibraciones portátil | Medición de espectro de vibración para diagnóstico de rodamientos | Acelerómetro piezoeléctrico, rango 10 Hz – 10 kHz |
| Grasa de litio NLGI 2 para motores eléctricos | Lubricante principal para rodamientos de motores estándar | Consistencia 265-295, punto de gota ≥ 180 °C / 356 °F |
| Paños libres de pelusa y solvente desengrasante | Limpieza de engrasadores y tapones de purga antes de la lubricación | Solvente no clorado, inflamabilidad controlada |
| Tapón de purga de repuesto | Reemplazo en caso de daño u obstrucción del tapón de purga original | Rosca métrica o NPT según diseño del motor |

## Gráfica temperatura vs vida del rodamiento

La relación entre la temperatura de operación del rodamiento y su vida útil sigue una tendencia exponencial decreciente. Un rodamiento operando a 70 °C / 158 °F con lubricación adecuada alcanza comúnmente entre 40 000 y 100 000 horas de vida nominal L10. Por cada incremento de 15 °C / 27 °F en la temperatura de operación sostenida, la vida útil de la grasa se reduce aproximadamente a la mitad, y la fatiga del material del rodamiento se acelera de forma proporcional. A temperaturas superiores a 100 °C / 212 °F, la tasa de degradación del lubricante se triplica respecto a la condición base de 70 °C / 158 °F, requiriendo intervalos de relubricación drásticamente más cortos y la selección de grasas con aceites base de mayor viscosidad o base sintética.

| Temperatura de operación | Vida relativa estimada del rodamiento | Factor multiplicador del intervalo de lubricación |
|---|---|---|
| 50 °C / 122 °F | 1,5 – 2,0 respecto a nominal | 2,0 |
| 70 °C / 158 °F | 1,0 (referencia nominal) | 1,0 |
| 85 °C / 185 °F | 0,5 – 0,7 respecto a nominal | 0,5 |
| 100 °C / 212 °F | 0,2 – 0,3 respecto a nominal | 0,3 |
| 120 °C / 248 °F y superior | Menor a 0,1 respecto a nominal | 0,1 – 0,15 |

## Mantenimiento predictivo aplicado

El mantenimiento predictivo de la lubricación de rodamientos en motores eléctricos integra varias técnicas de monitoreo de condición para detectar fallas antes de que ocurran. La medición regular de vibración en banda ancha permite identificar defectos en pistas de rodadura, elementos rodantes y jaula mediante la aparición de frecuencias características (BPFO, BPFI, BSF, FTF). Un rodamiento con lubricación adecuada muestra un valor global de vibración inferior a 2,8 mm/s RMS / 0,11 in/s RMS en motores hasta 300 kW; valores superiores a 7,1 mm/s RMS / 0,28 in/s RMS indican condición de alarma.

La termografía infrarroja detecta puntos calientes en la carcasa del rodamiento, siendo aceptables incrementos de hasta 20 °C / 68 °F sobre la temperatura ambiente. Los ultrasonidos pasivos son capaces de detectar la falta de lubricante o el inicio de fricción metal-metal con hasta 12 semanas de anticipación a la falla catastrófica. La combinación de ultrasonidos con grasa compatible permite verificar en tiempo real que el lubricante está ingresando efectivamente a la zona de contacto, al registrar la atenuación progresiva del nivel ultrasónico durante el bombeo. El análisis de aceite o grasa usada mediante espectrometría de emisión óptica y ferrografía cuantifica partículas metálicas de desgaste; concentraciones superiores a 100 ppm / 100 ppm de hierro en una muestra de aceite indican desgaste anormal activo.

## Normas y estándares

| Norma / Estándar | Enfoque | Parámetro principal |
|---|---|---|
| ISO 281 | Cálculo de vida nominal de rodamientos | Capacidad de carga dinámica y carga equivalente |
| NEMA MG 1 | Motores eléctricos y generadores | Condiciones de servicio, incluyendo lubricación de rodamientos |
| DIN 51825 | Grasas lubricantes tipo K | Clasificación de grasas para rodamientos según temperatura y consistencia |
| ISO 6743-9 | Clasificación de lubricantes industriales | Familia X (grasas) y familia C (turbinas y sistemas de circulación) |

La norma NEMA MG 1 establece que los rodamientos de motores eléctricos deben ser lubricados con la grasa especificada en la placa de datos o en el manual del fabricante, y que el diseño del sistema de lubricación debe permitir la re-lubricación sin desmontar el motor. La norma DIN 51825 clasifica las grasas para rodamientos según la temperatura de operación máxima y la consistencia NLGI, siendo la grasa K2K-30 adecuada para rodamientos con temperatura máxima de 120 °C / 248 °F y consistencia NLGI 2.

## Preguntas frecuentes (FAQ)

### ¿Cada cuánto tiempo se debe lubricar un rodamiento de motor eléctrico estándar?
El intervalo de lubricación típico para un motor de jaula de ardilla en servicio continuo estándar es de cada 2000 horas de operación, aunque este valor se ajusta según la velocidad del motor, la temperatura ambiente y el tipo de grasa utilizada, pudiendo reducirse a 1000 horas en condiciones severas o extenderse a 4000 horas en servicio ligero.

### ¿Cuál es la cantidad correcta de grasa para un rodamiento de motor eléctrico?
La cantidad correcta de grasa se calcula con la fórmula G = 0,005 × D × B, donde D es el diámetro exterior y B el ancho del rodamiento, y equivale aproximadamente al 30% al 50% del volumen libre interno del rodamiento; para un rodamiento 6308 cuyo diámetro exterior mide 90 mm / 3,54 in y ancho 23 mm / 0,91 in, la cantidad aproximada es de 10 g / 0,35 oz.

### ¿Qué ocurre si se aplica demasiada grasa a un rodamiento de motor?
El exceso de grasa provoca un aumento de temperatura por batido y fricción interna, elevando la temperatura de operación entre 10 °C y 20 °C / 18 °F y 36 °F por encima del valor normal, lo que acelera la degradación del lubricante, aumenta la presión interna y puede causar falla prematura del rodamiento en menos del 25% de su vida nominal esperada.

### ¿Es necesario purgar la grasa vieja durante la re-lubricación de un motor?
Sí, la evacuación del exceso de grasa a través del tapón de purga inferior durante el engrase con el motor en marcha es esencial para eliminar la grasa degradada y evitar la acumulación de presión; la purga debe realizarse siempre que el rodamiento opere a una temperatura superior a 70 °C / 158 °F o cuando la grasa nueva sea químicamente incompatible con la anterior.

### ¿Cómo influye el régimen de arranques y paradas en la lubricación de rodamientos de motores?
Los regímenes de operación con arranques y paradas frecuentes, como los definidos en los ciclos de trabajo S3 (intermitente periódico) y S4 (intermitente periódico con arranque) de la norma IEC, demandan intervalos de lubricación entre un 30% y un 50% más cortos respecto a los motores en servicio continuo S1, porque cada arranque elimina momentáneamente la película lubricante y somete al rodamiento a condiciones de fricción límite.

### ¿Qué método de monitoreo es más efectivo para detectar falta de lubricante en rodamientos de motores eléctricos?
El monitoreo por ultrasonidos pasivos es el método más sensible para detectar falta de lubricante, ya que puede identificar el aumento de la fricción en la zona de contacto con hasta 12 semanas de anticipación a una falla catastrófica, mientras que el análisis de vibraciones y la termografía suelen detectar la anomalía cuando el daño ya está iniciado, típicamente con 4 semanas de anticipación.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/iec-duty-cucles-d_739.html
- **electrical4u.com**: https://www.electrical4u.com/induction-motor-maintenance/
