---
title: "Ics e Icu en interruptores diferencia"
sidebar:
  label: "Ics e Icu en interruptores diferencia"
description: "Ficha tecnica: Ics e Icu en interruptores diferencia"
keywords: ["circuit breaker Ics Icu difference explanation", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "circuit-breaker-standards"
subcategory: "breaker-icu-ics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

Los interruptores automáticos de baja tensión se seleccionan en función de su capacidad para interrumpir corrientes de cortocircuito de forma segura. Dos parámetros fundamentales definen este comportamiento: la **Icu** (capacidad de corte última) y la **Ics** (capacidad de corte en servicio), establecidas por la norma IEC 60947-2. Comprender la diferencia entre ambas es esencial para garantizar la protección de la instalación y la continuidad del servicio tras un fallo.

## Icu: Capacidad de corte última

La Icu es la máxima corriente de cortocircuito que el interruptor puede interrumpir una sola vez sin peligro para el operario ni para la instalación, pero tras la cual el equipo puede quedar inutilizado o requerir una revisión completa. Este valor se verifica mediante un ensayo normalizado que incluye una secuencia de apertura (O – t – CO) sin que el interruptor deba conducir posteriormente su corriente nominal. La Icu se expresa en kA eficaces y es el dato que habitualmente figura en las características del dispositivo como “poder de corte”. Por ejemplo, un interruptor magnetotérmico doméstico típico tiene una Icu de **6 kA / 6 kA**, mientras que un interruptor de caja moldeada industrial puede alcanzar **50 kA / 50 kA** o más.

## Ics: Capacidad de corte en servicio

La Ics es la corriente de cortocircuito que el interruptor puede interrumpir repetidas veces (generalmente tres ciclos de ensayo) y continuar después funcionando normalmente, es decir, conduciendo su corriente asignada sin daños permanentes. La norma exige que, tras interrumpir la Ics, el interruptor supere un ensayo de calentamiento y un ensayo de rigidez dieléctrica. Los valores de Ics suelen indicarse como un porcentaje de la Icu: **25 %, 50 %, 75 % o 100 %** en función del diseño del aparato. Un interruptor con Ics = 100 % Icu puede ser reutilizado sin restricciones después de un disparo por cortocircuito.

## Diferencias fundamentales entre Icu e Ics

La diferencia esencial radica en el **estado del interruptor después del disparo**. La Icu es un valor de diseño que garantiza la integridad frente a la falla, pero asume que el interruptor puede sacrificarse; la Ics, en cambio, asegura la continuidad del servicio. La Ics nunca supera a la Icu, y en muchos equipos de uso industrial la relación Ics/Icu alcanza al menos el **50 %**, mientras que en el sector residencial puede ser del **25 %** o inferior.

## Relación numérica habitual entre Icu e Ics

Los fabricantes ensayan y declaran los pares Icu/Ics en función de la categoría de empleo y de la tensión de servicio. La siguiente tabla muestra valores típicos para interruptores de baja tensión en redes de 400 V CA:

| Tipo de interruptor | Icu típica (400 V CA) | Ics típica (400 V CA) | Relación Ics / Icu |
|----------------------|-----------------------|-----------------------|-------------------|
| Magnetotérmico residencial (MCB) | 6 kA / 6 kA | 6 kA / 6 kA | 100 % |
| Magnetotérmico terciario (MCB) | 10 kA / 10 kA | 7,5 kA / 7,5 kA | 75 % |
| Caja moldeada estándar (MCCB) | 36 kA / 36 kA | 18 kA / 18 kA | 50 % |
| Caja moldeada alto rendimiento (MCCB) | 50 kA / 50 kA | 50 kA / 50 kA | 100 % |
| Interruptor de bastidor abierto (ACB) | 85 kA / 85 kA | 85 kA / 85 kA | 100 % |

La Ics puede ser igual a la Icu cuando el diseño del interruptor permite disipar la energía del arco sin deterioro. En aplicaciones donde la continuidad es crítica, se seleccionan interruptores con Ics = Icu.

## Implicaciones en el diseño y la seguridad

Elegir un interruptor basándose únicamente en la Icu puede ser insuficiente si no se analiza el nivel de cortocircuito real en el punto de instalación y la necesidad de reutilización tras un fallo. La selectividad y la protección de las personas exigen que, incluso después de despejar una corriente de defecto igual a la Ics, el interruptor siga protegiendo contra sobrecargas y cortocircuitos posteriores. Por tanto, el proyectista debe:

1. Calcular la corriente de cortocircuito máxima en bornes del interruptor (Icc máx).
2. Escoger un interruptor con **Icu ≥ Icc máx**.
3. Comprobar que la **Ics** es adecuada para la estrategia de reposición y mantenimiento de la instalación.

## Preguntas frecuentes (FAQ)

### ¿Qué significa que un interruptor tenga Ics = 50 % de Icu?
Significa que después de interrumpir una corriente de **50 % del valor de Icu**, el interruptor sigue funcionando correctamente y puede ser reutilizado sin mantenimiento especial.

### ¿Es obligatorio que la Ics sea igual al 100 % de la Icu en instalaciones residenciales?
No es obligatorio; un interruptor doméstico de **6 kA** suele tener Ics igual al **100 % de su Icu** por razones de seguridad y sencillez, pero en otros sectores se admiten valores menores.

### ¿Cuál es el valor mínimo de Ics exigido por la norma IEC 60947-2?
La norma establece que, salvo especificación contraria, la Ics debe ser como mínimo el **25 % de la Icu**, aunque en la práctica muchos fabricantes ofrecen **50 % o más**.

### ¿Puede un interruptor reutilizarse después de interrumpir su Icu?
Después de interrumpir la **Icu**, el interruptor puede haber sufrido daños internos que impidan su funcionamiento posterior; la norma no exige que siga siendo operativo.

### ¿En qué aplicaciones se requiere Ics = 100 % de Icu?
Se requiere en aplicaciones críticas donde no se puede tolerar una parada prolongada, como centros de datos, hospitales o procesos industriales continuos, con interruptores que alcanzan **85 kA** de Icu e Ics.

### ¿Cómo se verifica la Ics durante los ensayos de tipo?
Se realiza una secuencia de tres maniobras de apertura y cierre a la corriente declarada, seguidas de un ensayo de calentamiento a la intensidad nominal, garantizando que el interruptor sigue operando dentro de los **límites térmicos especificados**.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/nema-iec-enclosure-standards-d_920.html
- **electrical4u.com**: https://www.electrical4u.com/electrical-circuit-breaker-operation-and-types-of-circuit-breaker/
