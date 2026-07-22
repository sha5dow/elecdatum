---
title: "Reglas DFM para chapa metálica"
sidebar:
  label: "Reglas DFM para chapa metálica"
description: "Ficha tecnica: Reglas DFM para chapa metálica"
keywords: ["DFM design for manufacturing sheet metal rules", "manufacturing"]
category: "manufacturing"
topic: "forming"
subcategory: "dfm-sheet-metal"
skill: "process-parameters"
launch_phase: 2
last_updated: "2026-07-22"
verified: true
---

## Descripción general

Las reglas de diseño para manufactura (DFM) en chapa metálica establecen directrices para que las piezas puedan producirse de manera consistente, económica y sin defectos, aprovechando las capacidades de los procesos de corte, plegado, punzonado y embutición. Los principios fundamentales extraídos de las buenas prácticas de diseño industrial recomiendan simplificar la geometría, reducir el número de componentes siempre que sea viable, estandarizar elementos repetitivos (como diámetros de agujeros o tipos de rosca) y prever la orientación de las piezas para la manipulación automatizada. En el caso de la embutición profunda, el análisis basado en reglas indica que la formabilidad del material, la holgura entre punzón y matriz, los radios de acuerdo y la fuerza de sujeción del blanco son críticos para evitar estirados, arrugas o roturas.

## Materiales aplicables

| Material | Espesor típico (mm / pulg.) | Límite elástico (MPa / ksi) | Resistencia a la tracción (MPa / ksi) | Aplicaciones comunes |
| --- | --- | --- | --- | --- |
| Acero al carbono (SAE 1008/1010) | 0,5 – 6,0 mm / 0,020 – 0,236 in | 170 – 310 MPa / 25 – 45 ksi | 280 – 420 MPa / 41 – 61 ksi | Soportes, carcasas, paneles automotrices |
| Acero inoxidable AISI 304 | 0,5 – 3,0 mm / 0,020 – 0,118 in | 205 – 310 MPa / 30 – 45 ksi | 515 – 700 MPa / 75 – 102 ksi | Equipos alimentarios, depósitos, componentes decorativos |
| Aluminio 5052-H32 | 0,5 – 4,0 mm / 0,020 – 0,157 in | 195 MPa / 28 ksi | 230 – 275 MPa / 33 – 40 ksi | Carcasas electrónicas, paneles ligeros, señalización |
| Aluminio 6061-T6 | 0,5 – 5,0 mm / 0,020 – 0,197 in | 276 MPa / 40 ksi | 310 – 380 MPa / 45 – 55 ksi | Componentes estructurales, bastidores, piezas soldadas |
| Cobre C110 | 0,3 – 3,0 mm / 0,012 – 0,118 in | 69 – 210 MPa / 10 – 30 ksi | 210 – 310 MPa / 30 – 45 ksi | Contactos eléctricos, pantallas, piezas conductoras |
| Latón C260 | 0,3 – 3,0 mm / 0,012 – 0,118 in | 105 – 380 MPa / 15 – 55 ksi | 310 – 480 MPa / 45 – 70 ksi | Bisagras, conectores, piezas decorativas |

## Parámetros operativos

| Parámetro | Recomendación (relación o valor absoluto) | Notas adicionales |
| --- | --- | --- |
| Radio mínimo de plegado (acero dulce) | ≥ 1,0 × espesor | Ejemplo: para chapa de 1,5 mm / 0.059 in, radio ≥ 1,5 mm / 0.059 in |
| Radio mínimo de plegado (aluminio 5052) | ≥ 1,5 – 2,0 × espesor | Evita el agrietamiento; orientar el plegado perpendicular a la dirección de laminación |
| Distancia mínima entre agujero y borde | ≥ 2,0 × espesor + diámetro del agujero | En chapa de 2 mm / 0.079 in con agujero de 5 mm / 0.197 in, distancia ≥ 9 mm / 0.354 in |
| Altura mínima de pestaña | ≥ 4,0 × espesor | Para garantizar un doblado estable sin deformación del ala |
| Diámetro mínimo de agujero (punzonado) | ≥ 1,0 × espesor (hasta 1,5 × espesor para aceros duros) | En chapa de 3 mm / 0.118 in, agujero ≥ 3 mm / 0.118 in |
| Relación de embutición máxima | Db / Dp ≤ 2,0 | Donde Db = diámetro del blanco, Dp = diámetro del punzón; para formas no circulares usar áreas equivalentes |
| Radio de esquina de matriz (embutición) | 5 – 10 × espesor de chapa | Radio menor provoca arrugas o rotura por cambio brusco de dirección |
| Radio de acuerdo del punzón (embutición) | 4 – 10 × espesor de chapa | Radio demasiado agudo causa adelgazamiento extremo y grietas cerca de la base |
| Holgura entre punzón y matriz (embutición) | > espesor de chapa, sin exceder 1,4 × espesor | La holgura excesiva permite arrugas en la pared |
| Fuerza de sujeción del blanco | Suficiente para evitar arrugas en la brida, sin aumentar la fricción innecesariamente | Ajustar mediante ensayo; el exceso incrementa la fuerza de embutición |

## Tolerancias típicas

| Característica | Proceso | Tolerancia general (mm / pulg.) |
| --- | --- | --- |
| Dimensiones lineales (≤ 100 mm) | Corte láser / punzonado | ±0,15 mm / ±0.006 in |
| Dimensiones lineales (100 – 500 mm) | Corte láser / punzonado | ±0,3 mm / ±0.012 in |
| Posición de agujeros | Punzonado con troquel | ±0,1 mm / ±0.004 in |
| Diámetro de agujero (≤ 10 mm) | Punzonado | ±0,05 mm / ±0.002 in |
| Ángulo de plegado | Plegadora | ±1° |
| Longitud de ala después de plegado | Plegado | ±0,5 mm / ±0.020 in por ala |
| Diámetro exterior de copa embutida | Embutición profunda | ±0,3 mm / ±0.012 in para diámetros < 50 mm |
| Altura de copa embutida | Embutición profunda | ±0,5 mm / ±0.020 in |

## Ventajas

*   Reduce el número de operaciones secundarias (soldadura, mecanizado) al integrar múltiples funciones en una sola pieza de chapa.
*   Disminuye el tiempo de fabricación y los costes de herramiental al estandarizar agujeros, radios de plegado y tolerancias.
*   Facilita la automatización del ensamblaje y la inspección cuando se diseñan referencias de posicionamiento claras.
*   Mejora la repetibilidad y la calidad al seguir reglas que evitan la deformación excesiva del material y la concentración de tensiones.
*   Permite optimizar el aprovechamiento de la materia prima (nesting) y reducir el desperdicio de chapa.
*   Incrementa la vida útil de punzones y matrices al respetar las relaciones de espesor y holguras adecuadas.

## Limitaciones

*   La capacidad de conformado está limitada por el tipo de material; aleaciones de alta resistencia pueden presentar springback elevado y requerir compensaciones angulares de 2 a 5 grados.
*   Las esquinas internas afiladas no son factibles; el radio mínimo de plegado impone restricciones geométricas.
*   La embutición profunda en una sola etapa no puede superar una relación de embutición de aproximadamente 2; piezas más profundas requieren embuticiones progresivas y tratamientos térmicos intermedios.
*   La variación del espesor es inevitable: el adelgazamiento localizado en la zona del punzón durante la embutición puede llegar al 10-20 % del espesor original.
*   Las tolerancias dimensionales en plegado son menos precisas que en mecanizado; la acumulación de tolerancias en conjuntos de chapa debe analizarse cuidadosamente.

## Guía de selección

| Requisito de diseño | Proceso recomendado | Criterio clave |
| --- | --- | --- |
| Piezas planas o con un solo pliegue | Corte por láser/punzonado + plegado | Relaciones de espesor, radio de plegado ≥ 1t, altura de ala ≥ 4t |
| Forma de copa cilíndrica simple, profundidad moderada (h/d ≤ 1) | Embutición profunda de una etapa | Relación de embutición ≤ 2, radios de matriz 5-10t, holgura correcta |
| Copas profundas o formas complejas (rectangulares) | Embutición progresiva o con varios pasos | Análisis de secuencia, recocido intermedio si es necesario |
| Grandes series de piezas pequeñas con muchos detalles | Troquel progresivo | Distancia entre estaciones, paso constante, diseño de banda portadora |
| Piezas de baja rigidez o gran superficie | Plegado con nervios de refuerzo o embutición de rigidizadores | Incorporar refuerzos que eviten la deformación por pandeo |
| Piezas soldadas o ensambladas | Diseñar lengüetas, pestañas de centrado o puntos de soldadura | Minimizar piezas de fijación adicionales; asegurar acceso de electrodos |

## FAQ

### ¿Cuál es el radio mínimo de plegado para acero dulce?

El radio mínimo de plegado para acero al carbono de bajo contenido (SAE 1008/1010) es de 1,0 veces el espesor de la chapa, lo que equivale a 1,5 mm / 0.059 in para una lámina de 1,5 mm de espesor. Esta relación evita el agrietamiento en la superficie exterior del pliegue y es válida cuando la dirección de laminación es perpendicular al eje de doblado.

### ¿Qué distancia mínima debe haber entre un agujero y el borde de la pieza?

Para evitar la deformación o el desgarro del material, la distancia entre el centro de un agujero y el borde más próximo debe ser al menos 2,0 veces el espesor de la chapa más el diámetro del agujero. En una lámina de 2 mm / 0.079 in con un agujero de 5 mm / 0.197 in, la distancia mínima al borde es de 9 mm / 0.354 in.

### ¿Cuál es la profundidad máxima de embutición que se puede alcanzar en una sola operación?

La relación de embutición (diámetro del blanco / diámetro del punzón) no debe superar 2,0 en una única etapa. Para una copa cilíndrica con punzón de 50 mm / 1.97 in de diámetro, el blanco máximo utilizable es de 100 mm / 3.94 in, lo que se traduce en una altura final aproximada de 30-35 mm / 1.18-1.38 in, dependiendo del radio de fondo y del espesor.

### ¿Cómo se compensa el springback en operaciones de plegado?

El springback típico en aceros al carbono suaves oscila entre 2° y 5°, por lo que el ángulo de doblado en la matriz debe sobrepasarse en esa cantidad. En aluminios de la serie 5000, el retorno elástico puede ser mayor, entre 3° y 8°, requiriendo un ajuste adicional del ángulo de la herramienta o la sobrecarrera del punzón.

### ¿Qué espesores de chapa suelen utilizarse en fabricación de chapa metálica?

Los espesores más comunes en piezas de chapa metálica van desde 0,5 mm / 0.020 in hasta 6,0 mm / 0.236 in. Por debajo de 0,5 mm se habla de láminas ultradelgadas (foil), mientras que por encima de 6 mm las piezas suelen considerarse placas y se procesan con otros métodos como el oxicorte o el mecanizado.

### ¿Qué radio de matriz se recomienda para embutir acero inoxidable?

El radio de esquina de la matriz en una operación de embutición para acero inoxidable 304 debe ser de 5 a 10 veces el espesor de la chapa. Con un espesor de 1,0 mm / 0.039 in, el radio adecuado estaría entre 5 mm y 10 mm / 0.197 in y 0.394 in. Radios menores producen roturas por cambio brusco de dirección del flujo de material.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/paper-drawing-sizes-d_140.html
- **efunda.com**: https://www.efunda.com/designstandards/
- **manufacturingguide.com**: https://www.manufacturingguide.com/sv/iindep/design-manufacturing
