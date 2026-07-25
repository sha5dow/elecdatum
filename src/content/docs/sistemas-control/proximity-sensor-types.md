---
title: "Tipos de sensores de proximidad industrial"
sidebar:
  label: "Tipos de sensores de proximidad industrial"
description: "Ficha tecnica: Tipos de sensores de proximidad industrial"
keywords: ["proximity sensor types inductive capacitive photoelectric", "sistemas-control"]
category: "sistemas-control"
topic: "sensors"
subcategory: "proximity-sensor-types"
skill: "control-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un sensor de proximidad industrial es un dispositivo sin contacto que detecta la presencia de objetos en distancias que varían desde fracciones de milímetro hasta varios metros. Estos sensores emiten un campo electromagnético o un haz de radiación y analizan el retorno de la señal o los cambios en el campo para conmutar una salida electrónica, lo que los convierte en elementos esenciales en automatización industrial por su alta fiabilidad y larga vida funcional.

El principio de funcionamiento se basa en la emisión de un campo o haz y la detección de la perturbación causada por el objeto objetivo. Un sensor inductivo genera un campo electromagnético de alta frecuencia que induce corrientes de Foucault al entrar un metal; un sensor capacitivo genera un campo electrostático que varía su capacitancia ante cualquier material con una constante dieléctrica diferente al aire; un sensor fotoeléctrico emite un haz de luz, generalmente infrarroja, láser o LED roja, y evalúa el retorno o la interrupción del mismo para determinar la presencia del objetivo.

## Tipos de sensores de proximidad

Existen diversos tipos de sensores agrupados por su principio físico de detección, entre los que destacan los inductivos, capacitivos, fotoeléctricos, magnéticos y ultrasónicos.

| Característica | Inductivo | Capacitivo | Fotoeléctrico (Infrarrojo/LED) |
| --- | --- | --- | --- |
| Principio de detección | Corrientes de Foucault en campo electromagnético | Variación de capacitancia dieléctrica | Interrupción o reflexión de un haz de luz |
| Material del objetivo | Metales ferrosos y no ferrosos | Cualquier material (sólido, líquido, polvo) | Cualquier material opaco o reflectante |
| Distancia de detección típica | 1–60 mm / 0.04–2.36 in | 2–50 mm / 0.08–1.97 in | 0.1–200 m / 0.33–656.17 ft |
| Frecuencia de conmutación máxima | 0,5–5 kHz | 10–100 Hz | 0,25–5 kHz |
| Condiciones ambientales | Inmune a polvo y humedad; sensible a virutas metálicas | Sensible a humedad y suciedad | Alto impacto en niebla o polvo denso |

## Aplicaciones típicas

Los sensores de proximidad se despliegan en múltiples sectores industriales para control de procesos, detección de posición, conteo de piezas y monitorización de vibraciones.

| Tipo de sensor | Aplicación industrial | Sector |
| --- | --- | --- |
| Inductivo | Detección de fin de carrera en cilindros neumáticos | Automatización de fábrica |
| Inductivo de proximidad | Medición de vibración de ejes en turbinas y compresores | Generación de energía |
| Capacitivo | Detección de nivel de llenado de líquidos y granulados a través de paredes de tanques | Alimentación y bebidas |
| Capacitivo | Inspección de envases vacíos en líneas de embalaje | Farmacéutica y cosmética |
| Fotoeléctrico de barrera | Conteo de botellas a alta velocidad en cintas transportadoras | Embotellado y logística |
| Fotoeléctrico difuso | Detección de objetos de colores variados para clasificación | Almacenes automatizados |

## Ventajas y limitaciones

Cada tecnología de detección ofrece un perfil único de fortalezas y debilidades que determinan su idoneidad para un entorno operativo específico.

| Característica | Inductivo | Capacitivo | Fotoeléctrico |
| --- | --- | --- | --- |
| Inmunidad a polvo/suciedad | Excelente | Baja | Baja a media |
| Capacidad de detección por barrera | Nula | Alta (materiales no metálicos) | Nula (a menos que sea transparente) |
| Deriva térmica | Baja | Media a alta | Baja |
| Complejidad de instalación | Baja (2–3 hilos) | Alta (sensibilidad ajustable) | Media a alta (alineación crítica) |
| Vida útil mecánica | Muy larga (sin contacto) | Muy larga (sin contacto) | Muy larga (sin contacto) |
| Rango de temperatura | −25 °C a 100 °C / −13 °F a 212 °F | −20 °C a 80 °C / −4 °F a 176 °F | −40 °C a 60 °C / −40 °F a 140 °F |

## Criterios de selección

La selección del sensor correcto exige evaluar el material del blanco, la distancia operativa, la frecuencia de conmutación requerida y las condiciones ambientales de la instalación.

| Criterio | Pregunta clave a responder | Tecnología sugerida |
| --- | --- | --- |
| Material del objetivo | ¿Es metálico o no metálico? | Inductivo (metales); Capacitivo (todos) |
| Distancia de detección | ¿Es menor a 50 mm / 2 in o mayor? | Inductivo/Capacitivo (<50 mm); Fotoeléctrico (>50 mm) |
| Velocidad del proceso | ¿Se requiere más de 500 Hz de conmutación? | Inductivo o Fotoeléctrico de alta velocidad |
| Entorno | ¿Hay presencia de polvo, aceite o fluidos de corte? | Inductivo (sellado IP67/IP69K) |
| Montaje | ¿El sensor debe estar enrasado (flush) en metal? | Inductivo apantallado (enrasable) |

## Mantenimiento y solución de problemas

El mantenimiento preventivo se limita a la limpieza periódica de la cara sensible y la verificación de la integridad de cables, conectores y alineación mecánica. Para sensores fotoeléctricos, limpie los lentes con paño suave y alcohol isopropílico. Para sensores inductivos, remueva virutas metálicas acumuladas en la zona activa con aire comprimido seco. En sensores capacitivos, elimine residuos conductivos o humedad superficial para evitar falsas detecciones.

| Síntoma | Causa probable | Acción correctiva |
| --- | --- | --- |
| Inductivo no detecta acero a distancias cortas | Cable roto o cortocircuito | Verificar continuidad y aislamiento con multímetro |
| Inductivo genera pulsos erráticos | Acumulación de virutas metálicas | Limpiar cara activa y reubicar si es necesario |
| Capacitivo se satura en ambiente húmedo | Alta humedad ambiental | Ajustar sensibilidad con potenciómetro o reubicar |
| Fotoeléctrico de reflector falla esporádicamente | Reflector sucio o desalineado | Limpiar reflector y recalibrar eje óptico |
| Salida no conmuta en ningún escenario | Tensión de alimentación incorrecta | Medir tensión entre bornes; debe ser 10–30 VDC |

## Preguntas frecuentes (FAQ)

### ¿Cuál es la diferencia principal entre un sensor inductivo y uno capacitivo?
Un sensor inductivo solo detecta metales y es inmune a materiales no metálicos, mientras que un sensor capacitivo detecta todo tipo de materiales —incluidos vidrio, plástico, madera o líquidos— y puede hacerlo incluso a través de paredes no metálicas de hasta 4 mm / 0.16 in.

### ¿Puede un sensor de proximidad detectar un objeto a través de una barrera?
Sí, un sensor capacitivo puede detectar materiales sólidos o líquidos a través de paredes de vidrio o plástico de hasta 10 mm / 0.39 in de espesor. Los inductivos y fotoeléctricos requieren visión directa del objetivo sin barreras no metálicas o transparentes respectivamente.

### ¿Cómo afecta el entorno industrial a la selección del sensor?
La presencia de aceite refrigerante, polvo metálico o humedad extrema limita el uso de capacitivos y fotoeléctricos. Los sensores inductivos con grado de protección IP67 o IP69K son preferibles en entornos agresivos y pueden operar en un rango de −25 °C a 100 °C / −13 °F a 212 °F.

### ¿Qué mantenimiento requieren los sensores de proximidad?
Gracias a la ausencia de partes móviles, el mantenimiento se reduce a inspección visual, limpieza de la cara sensible con paño suave (y alcohol isopropílico para lentes fotoeléctricos), verificación de conexiones eléctricas y control de la integridad mecánica de la fijación.

### ¿Es posible usar un sensor fotoeléctrico a distancias superiores a 50 metros?
Sí, los sensores fotoeléctricos de barrera con emisor y receptor separado pueden alcanzar distancias de hasta 200 m / 656.17 ft. Para mediciones de precisión en grandes distancias, se utilizan modelos con fuente de luz láser y reflectores prismáticos.

### ¿Cuándo es indispensable un sensor con tecnología de bobina compensada?
Esta tecnología, típica de sensores inductivos de precisión, compensa las variaciones de temperatura mediante una bobina de referencia. Es indispensable en procesos de control de posición de alta exactitud —por ejemplo, en turbinas de vapor— donde una deriva térmica de pocos micrómetros puede causar paradas no programadas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/temperature-sensors-d_448.html
- **automationdirect.com**: https://www.automationdirect.com/ebooks/sensors-handbook
