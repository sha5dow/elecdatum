---
title: "Tipos de UPS especificaciones"
sidebar:
  label: "Tipos de UPS especificaciones"
description: "Ficha tecnica: Tipos de UPS especificaciones"
keywords: ["UPS types online offline line interactive", "maquinas-electricas"]
category: "maquinas-electricas"
topic: "power-supplies"
subcategory: "ups-types"
skill: "electrical-machine-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---
Un sistema de alimentación ininterrumpida (UPS, por sus siglas en inglés) proporciona energía de emergencia con tiempos de respaldo que típicamente oscilan entre 5 y 20 minutos, utilizando baterías, volantes de inercia o supercondensadores para proteger equipos críticos. Los tres tipos principales de UPS — Offline, Online y Line-interactive — se diferencian por su topología, tiempo de transferencia y capacidad de acondicionamiento de energía, cubriendo desde aplicaciones domésticas de 200 VA hasta instalaciones industriales de varios MVA.

## UPS Offline (Standby)

El UPS Offline, conocido como Standby, es la solución más económica y ofrece un tiempo de transferencia de hasta 25 ms cuando la tensión de red sale de los límites preestablecidos. En funcionamiento normal, la carga se alimenta directamente de la red filtrada; solo ante una interrupción o anomalía grave, el inversor se activa y el interruptor estático transfiere la salida a la batería.

| Parámetro | Valor típico |
|---|---|
| Principio de operación | Red → filtro → carga; batería + inversor en espera |
| Tiempo de transferencia | ≤ 25 ms |
| Autonomía en batería | 5 – 20 min |
| Rango de potencia habitual | 200 VA – 1 kVA |
| Regulación de tensión | No (solo protección contra sobretensiones) |
| Protección frente a ruido eléctrico | Básica (filtrado pasivo) |
| Coste relativo | Bajo |

## UPS Online (Doble conversión)

El UPS Online, también denominado de doble conversión, elimina el tiempo de transferencia porque el inversor alimenta la carga de forma continua, con cero milisegundos de corte teóricos. La topología rectifica la entrada de CA a CC y luego invierte de nuevo a CA, manteniendo la batería permanentemente en línea; en diseños reales, fenómenos como la corriente de inserción pueden introducir retardos de 4 – 6 ms.

| Parámetro | Valor típico |
|---|---|
| Principio de operación | Red → rectificador → CC → inversor → carga (batería siempre conectada) |
| Tiempo de transferencia | 0 ms (ideal); ≤ 6 ms en transitorios |
| Autonomía en batería | Configurable (minutos a horas según banco de baterías) |
| Rango de potencia habitual | 1 kVA – varios MVA |
| Regulación de tensión | Completa (estabilización permanente) |
| Protección frente a ruido eléctrico | Muy alta (aislamiento galvánico y filtrado activo) |
| Coste relativo | Alto |

## UPS Line-interactive

El UPS Line-interactive agrega un transformador con tomas múltiples al diseño Offline, consiguiendo un tiempo de transferencia que se sitúa comúnmente entre 2 y 10 ms. Este sistema mantiene el inversor permanentemente conectado a la salida y regula la tensión de forma dinámica (boost/buck) sin necesidad de pasar a batería frente a fluctuaciones moderadas.

| Parámetro | Valor típico |
|---|---|
| Principio de operación | Red → autotransformador (regulación) + inversor en línea; batería se activa solo en fallo grave |
| Tiempo de transferencia | 2 – 10 ms |
| Autonomía en batería | 5 – 20 min (típico para modelos ≤ 5 kVA) |
| Rango de potencia habitual | 500 VA – 5 kVA |
| Regulación de tensión | Sí (cambiador de tomas, boost/buck) |
| Protección frente a ruido eléctrico | Media (mejor filtrado que Offline) |
| Coste relativo | Medio |

## Comparativa de especificaciones

| Tipo | Tecnología de conmutación | Tiempo de transferencia | Regulación de tensión | Potencia habitual | Aislamiento eléctrico | Coste relativo |
|---|---|---|---|---|---|---|
| Offline (Standby) | Conmutación de relé / estático | ≤ 25 ms | No | 200 VA – 1 kVA | No | Bajo |
| Line-interactive | Conmutación estática + cambiador de tomas | 2 – 10 ms | Boost/buck automático | 500 VA – 5 kVA | No | Medio |
| Online (Doble conversión) | Inversor continuo | 0 ms (hasta 6 ms transitorios) | Continua y precisa | 1 kVA – MVA | Sí (rectificador + inversor) | Alto |

## Aplicaciones típicas

| Tipo de UPS | Aplicaciones representativas |
|---|---|
| Offline | Equipos domésticos, PC básicos, periféricos, puntos de venta |
| Line-interactive | Pequeños servidores, estaciones de trabajo, departamentos comerciales, electrónica de red |
| Online | Centros de datos, equipos médicos críticos, telecomunicaciones, procesos industriales, laboratorios |

## Preguntas frecuentes (FAQ)

### ¿Qué tipo de UPS ofrece el menor tiempo de transferencia?
El UPS Online (doble conversión) proporciona cero tiempo de transferencia de forma permanente, aunque en condiciones transitorias extremas puede alcanzar hasta 6 ms.

### ¿Cuál es el UPS más adecuado para proteger un servidor de pequeña empresa?
El Line-interactive, porque combina regulación de tensión automática, tiempo de transferencia inferior a 10 ms y un coste intermedio, suficiente para pequeñas y medianas cargas críticas.

### ¿Qué significa la doble conversión en un UPS Online?
Significa que la energía de entrada se rectifica a corriente continua y luego se invierte nuevamente a corriente alterna, aislando eléctricamente la carga y garantizando una tensión de salida limpia y estable.

### ¿Puede un UPS Offline corregir caídas o picos de tensión?
No regula la tensión de forma activa; solo conmuta a batería cuando la red supera los umbrales de tolerancia. La protección se limita a filtrado básico contra picos y ruido.

### ¿Cuál es la autonomía típica de un UPS doméstico?
La mayoría de los UPS Offline y Line-interactive de hasta 1 kVA ofrecen una autonomía en batería de entre 5 y 20 minutos, suficiente para apagar el equipo de forma segura o conmutar a un generador.

### ¿Los UPS Online consumen más energía en operación normal?
Sí, la topología de doble conversión implica pérdidas continuas en el rectificador y el inversor, lo que reduce la eficiencia frente a los sistemas Line-interactive u Offline, aunque la protección y la calidad de energía obtenidas suelen justificar el mayor consumo.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/ups-uninterruptible-power-supply/
