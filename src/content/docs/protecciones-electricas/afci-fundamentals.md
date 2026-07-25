---
title: "Interruptor AFCI fundamentos y aplicación"
sidebar:
  label: "Interruptor AFCI fundamentos y aplicación"
description: "Ficha tecnica: Interruptor AFCI fundamentos y aplicación"
keywords: ["AFCI arc fault circuit interrupter basics", "protecciones-electricas"]
category: "protecciones-electricas"
topic: "gfci-afci"
subcategory: "afci-basics"
skill: "protection-reference-table"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

Un interruptor de circuito por falla de arco (AFCI, del inglés Arc-Fault Circuit Interrupter) es un dispositivo de protección eléctrica diseñado para interrumpir el circuito tan pronto como detecta arcos eléctricos peligrosos, los cuales son característicos de conexiones flojas en el cableado de una instalación. A diferencia de los interruptores termomagnéticos convencionales, que solo responden ante sobrecargas y cortocircuitos, un AFCI analiza continuamente la forma de onda de la corriente para discriminar entre el arco normal producido por interruptores o motores con escobillas y el arco anómalo que puede alcanzar temperaturas superiores a 3000 °C / 5432 °F, capaces de iniciar un incendio. Cada año se reportan más de 40 000 incendios en Estados Unidos atribuidos al cableado eléctrico residencial, con un saldo de más de 350 víctimas fatales y 1 400 lesionados.

Los circuitos electrónicos internos de un AFCI monitorizan la corriente eléctrica buscando componentes de alta frecuencia, típicamente alrededor de 100 kHz / 100 000 ciclos por segundo, que se sostienen por más de unos pocos milisegundos. Estas señales son propias de la descarga disruptiva que ocurre cuando una unión floja o un conductor parcialmente roto ioniza el aire, generando un plasma conductor. El fenómeno del arco se inicia mediante dos mecanismos principales: la ionización térmica, donde el aumento de temperatura (por encima de 3000 °C / 5432 °F) incrementa la energía cinética de las moléculas y arranca electrones, y la ionización por colisión de electrones, en la cual los electrones libres acelerados por el campo eléctrico chocan contra los átomos y liberan más electrones en cascada. Una vez que el microprocesador del AFCI identifica una firma de arco peligroso, ordena la apertura inmediata de los contactos, desenergizando el circuito antes de que la energía liberada alcance un nivel capaz de encender materiales adyacentes.

## Tipos de AFCI

| Tipo de AFCI | Protección ofrecida | Corriente de disparo característica | Norma aplicable |
| --- | --- | --- | --- |
| AFCI de derivación (Branch) | Arco en paralelo (línea‑neutro, línea‑tierra) | 75 A / 75 A | UL 1699 |
| AFCI de tipo combinación (Combination) | Arco en serie, arco en paralelo, arco a tierra, sobrecarga y cortocircuito | 5 A / 5 A (serie), 75 A / 75 A (paralelo) | UL 1699 |
| Receptáculo AFCI | Arco en serie en todo el circuito derivado, arco en paralelo desde el primer tomacorriente | Equivalente a tipo combinación | UL 1699 |

El AFCI de derivación solo interrumpe el circuito cuando circula una corriente de arco de al menos 75 A / 75 A desde la línea hacia el neutro o la tierra. El de tipo combinación añade la capacidad de detectar arcos en serie, disparando con tan solo 5 A / 5 A, e incluye protección contra sobrecorriente y cortocircuito en el mismo módulo. El receptáculo AFCI, instalado en la primera salida de un circuito derivado, protege toda la rama contra fallas de arco en serie y desde ese punto en adelante contra fallas en paralelo, sin depender del tipo de tablero de distribución.

## Requisitos de instalación según NEC
Desde la edición 2014 del Código Eléctrico Nacional (NEC) de Estados Unidos, la protección AFCI es obligatoria en todas las ramas que alimenten tomas o dispositivos en cocinas, cuartos familiares, comedores, salas de estar, bibliotecas, dormitorios, vestidores, pasillos, áreas de lavandería y locales similares de viviendas. En dormitorios la exigencia data de 1999. El Código Eléctrico Canadiense (CEC) incorporó requisitos equivalentes a partir de 2015. Para cumplir se puede usar un interruptor de “tipo combinación” en el tablero de distribución o un receptáculo AFCI en la primera salida del circuito. La selección del dispositivo debe verificarse con las adopciones locales del código, ya que no todas las jurisdicciones han incorporado las últimas revisiones.

## Mantenimiento y pruebas
El fabricante recomienda ejercitar el botón de prueba (TEST) del AFCI mensualmente. Al pulsarlo, el dispositivo simula una falla de arco y debe disparar en menos de 25 ms / 0.025 s, abriendo los contactos y cortando la alimentación del circuito. Después de un disparo por prueba, se restablece la operación accionando la palanca de reconexión. Un AFCI que no responda al test o que presente disparos intempestivos frecuentes debe ser reemplazado de inmediato, ya que puede indicar deterioro del sensor o la presencia de arcos reales en la instalación. No se requiere mantenimiento interno; toda reparación debe ser efectuada por personal calificado.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la frecuencia característica que buscan los AFCI en la corriente?
Los AFCI monitorizan la señal eléctrica en busca de componentes que oscilen alrededor de 100 kHz / 100 000 ciclos por segundo, asociadas a la naturaleza errática del arco eléctrico, y que perduren por más de unos milisegundos.

### ¿Cuántos incendios eléctricos residenciales se registran anualmente en Estados Unidos?
Se reportan más de 40 000 incendios anuales atribuidos al cableado eléctrico doméstico, los cuales provocan más de 350 muertes y 1 400 lesiones cada año, según estadísticas nacionales.

### ¿A qué corriente dispara un AFCI de tipo combinación frente a una falla de arco en serie?
El dispositivo abre el circuito cuando detecta una corriente de arco en serie de apenas 5 A / 5 A, un valor muy por debajo de la capacidad de reacción de los interruptores termomagnéticos comunes.

### ¿Cuál es la temperatura mínima necesaria para que el aire se ionice térmicamente y se forme un arco?
Para que se produzca una ionización térmica significativa la temperatura debe superar los 3000 °C / 5432 °F, punto en el cual las moléculas de gas adquieren energía suficiente para liberar electrones y establecer un plasma conductor.

### ¿Cada cuánto tiempo se recomienda probar manualmente un AFCI?
Se debe accionar el botón de prueba al menos una vez cada 30 días / 1 mes; el dispositivo debe disparar y restaurarse correctamente.

### ¿Cuántos amperios de arco en paralelo necesita un AFCI de derivación para activarse?
El umbral de disparo de un AFCI de derivación es de 75 A / 75 A entre línea y neutro o línea y tierra, protegiendo exclusivamente contra arcos en paralelo.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/what-is-arc-arc-in-circuit-breaker/
