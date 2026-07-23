---
title: "Cálculo consumo de aire neumático"
sidebar:
  label: "Cálculo consumo de aire neumático"
description: "Ficha tecnica: Cálculo consumo de aire neumático"
keywords: ["pneumatic air consumption cylinder flow", "hydraulics"]
category: "hydraulics"
topic: "pneumatic-system"
subcategory: "air-consumption"
skill: "hydraulics-reference-table"
launch_phase: 7
last_updated: "2026-07-23"
verified: true
---

El consumo de aire comprimido en sistemas neumáticos industriales representa típicamente entre el 15 % y el 30 % del coste energético total de una planta. Una estimación precisa del volumen de aire libre demandado por cilindros, herramientas y fugas resulta esencial para dimensionar correctamente compresores, redes de distribución y sistemas de tratamiento. A continuación se presentan los símbolos, fórmulas y tablas de referencia necesarios para realizar estos cálculos de acuerdo con la práctica habitual en ingeniería neumática.

## Símbolos normalizados

La presión atmosférica de referencia en los cálculos normalizados es de 1,013 bar abs / 14,7 psia a nivel del mar, y la temperatura ambiente de referencia es 20 °C / 68 °F. Los parámetros más utilizados se resumen en la tabla siguiente.

| Símbolo | Descripción | Unidad métrica / Unidad imperial |
| --- | --- | --- |
| *D* | Diámetro interior del cilindro | mm / in |
| *d* | Diámetro del vástago | mm / in |
| *L* | Longitud de la carrera | mm / in |
| *n* | Ciclos completos por minuto | ciclos/min / cpm |
| *P<sub>man</sub>* | Presión manométrica de trabajo | bar / psi |
| *P<sub>abs</sub>* | Presión absoluta = *P<sub>man</sub>* + *P<sub>atm</sub>* | bar abs / psia |
| *P<sub>atm</sub>* | Presión atmosférica (1,013 bar / 14,7 psi) | bar / psi |
| *A<sub>ext</sub>* | Área efectiva del pistón en extensión | mm² / in² |
| *A<sub>ret</sub>* | Área efectiva del pistón en retracción | mm² / in² |
| *V<sub>ciclo</sub>* | Volumen de aire libre consumido por ciclo completo | Nl / scf |
| *Q* | Caudal de aire libre consumido | Nl/min / scfm |
| *C* | Coeficiente de descarga (orificios) | adimensional |
| *A<sub>orif</sub>* | Área de sección transversal del orificio | mm² / in² |
| *T* | Temperatura absoluta del aire | K / °R |
| *ρ* | Densidad del aire a condiciones de referencia | kg/m³ / lb/ft³ |

## Fórmulas de cálculo

La presión de trabajo habitual en redes neumáticas es de 6 bar / 87 psi, y el caudal de aire libre requerido por un cilindro se calcula mediante la ecuación *Q = A × L × n × (P<sub>abs</sub> / P<sub>atm</sub>)*.

**Cálculo de áreas**  
Área del pistón en extensión:  
*A<sub>ext</sub>* = π · *D*² / 4  
Área del pistón en retracción (doble efecto):  
*A<sub>ret</sub>* = π · (*D*² – *d*²) / 4

**Volumen de aire libre por ciclo**  
Cilindro de simple efecto (solo avance neumático):  
*V<sub>ciclo</sub>* = *A<sub>ext</sub>* · *L* · (*P<sub>abs</sub>* / *P<sub>atm</sub>*)  

Cilindro de doble efecto (avance y retroceso neumáticos):  
*V<sub>ciclo</sub>* = (*A<sub>ext</sub>* + *A<sub>ret</sub>*) · *L* · (*P<sub>abs</sub>* / *P<sub>atm</sub>*)

**Caudal de aire libre**  
*Q* = *V<sub>ciclo</sub>* · *n*

**Descarga de aire por un orificio (fórmula de Moss)**  
Aplicable cuando la presión de alimentación supera el doble de la contrapresión y el flujo es sónico (presión manométrica > 1,013 bar / 14,7 psi):  

*W* = 0,5303 · *A*<sub>orif</sub> · *C* · *P*<sub>abs</sub> / √*T*  

Donde *W* en lb/s, *A*<sub>orif</sub> en in², *P*<sub>abs</sub> en psia y *T* en °R. El caudal volumétrico en condiciones de referencia (14,7 psia y 70 °F / 21,1 °C) se obtiene como:  

*Q* [scfm] = *W* · 60 / 0,07494  (donde 0,07494 lb/ft³ es la densidad del aire a esas condiciones).

**Flujo a través de una restricción (medidor venturi)**  
Para velocidades subsónicas y flujo incompresible:  

*Q* = *C* · (*A*<sub>1</sub> · *A*<sub>2</sub> / √(*A*<sub>1</sub>² – *A*<sub>2</sub>²)) · √(2 · Δ*p* / ρ)  

*C* se sitúa normalmente entre 0,90 y 0,98 para venturis de perfil suave.

## Tablas de selección de componentes

Para un orificio de borde vivo de 1,59 mm / 1/16 in, la descarga de aire a 6,9 bar / 100 psig es de 4,2 scfm / 119 Nl/min con *C* = 0,65, o bien 6,3 scfm / 178 Nl/min con bordes redondeados (*C* = 0,97). Las tablas siguientes facilitan la evaluación del consumo de cilindros normalizados y de la descarga por orificios típicos.

**Consumo de aire libre por ciclo completo (extensión + retracción) para cilindros de doble efecto a 6 bar / 87 psi manométricos, carrera de 100 mm / 3,94 in**

| Diámetro interior | Área extensión | Área retracción | Consumo por ciclo (100 mm / 3,94 in) |
| --- | --- | --- | --- |
| 32 mm / 1,26 in | 804 mm² / 1,25 in² | 691 mm² / 1,07 in² | 1,03 Nl / 0,0364 scf |
| 40 mm / 1,57 in | 1257 mm² / 1,95 in² | 1056 mm² / 1,64 in² | 1,60 Nl / 0,0565 scf |
| 50 mm / 1,97 in | 1963 mm² / 3,04 in² | 1649 mm² / 2,56 in² | 2,50 Nl / 0,0883 scf |
| 63 mm / 2,48 in | 3117 mm² / 4,83 in² | 2804 mm² / 4,35 in² | 4,09 Nl / 0,144 scf |
| 80 mm / 3,15 in | 5027 mm² / 7,79 in² | 4536 mm² / 7,03 in² | 6,61 Nl / 0,233 scf |
| 100 mm / 3,94 in | 7854 mm² / 12,17 in² | 7147 mm² / 11,08 in² | 10,4 Nl / 0,366 scf |

*Nota: los valores de área de retracción consideran vástagos de 12, 16, 20, 20, 25 y 30 mm respectivamente. El consumo es directamente proporcional a la carrera y a la presión absoluta.*

**Descarga de aire a través de un orificio circular, *C* = 0,65 / *C* = 0,97**

| Presión manométrica | 1/16 in / 1,59 mm | 1/8 in / 3,18 mm | 1/4 in / 6,35 mm | 1/2 in / 12,7 mm |
| --- | --- | --- | --- | --- |
| 1,4 bar / 20 psi | 1,27 / 1,90 scfm (36,0 / 53,8 Nl/min) | 5,09 / 7,59 scfm (144 / 215 Nl/min) | 20,4 / 30,4 scfm (578 / 861 Nl/min) | 81,6 / 122 scfm (2310 / 3450 Nl/min) |
| 4,1 bar / 60 psi | 2,59 / 3,86 scfm (73,3 / 109 Nl/min) | 10,4 / 15,5 scfm (294 / 439 Nl/min) | 41,5 / 61,9 scfm (1175 / 1750 Nl/min) | 166 / 248 scfm (4700 / 7020 Nl/min) |
| 6,9 bar / 100 psi | 4,20 / 6,27 scfm (119 / 178 Nl/min) | 16,8 / 25,1 scfm (476 / 711 Nl/min) | 67,3 / 100 scfm (1910 / 2830 Nl/min) | 270 / 402 scfm (7650 / 11400 Nl/min) |

*Valores calculados según la fórmula de Moss para condiciones de referencia 14,7 psia y 70 °F / 21,1 °C; el caudal de aire libre a 20 °C / 1 atm se obtiene multiplicando el valor en scfm por 28,3 L/scf.*

## Presiones estándar de trabajo

La presión nominal de los compresores industriales es de 7 bar / 101 psi a 8 bar / 116 psi, mientras que los actuadores suelen operar entre 4 bar / 58 psi y 8 bar / 116 psi.

| Aplicación | Rango de presión típico |
| --- | --- |
| Instrumentación neumática | 1,4 – 2,4 bar / 20 – 35 psi |
| Válvulas de control | 2 – 6 bar / 29 – 87 psi |
| Soplado y limpieza | 2 – 4 bar / 29 – 58 psi |
| Pintura por pulverización | 2 – 3,5 bar / 29 – 51 psi |
| Actuadores lineales / pinzas | 4 – 8 bar / 58 – 116 psi |
| Herramientas portátiles | 6,3 bar / 90 psi (valor nominal típico) |
| Procesos de embalaje / automatización | 5 – 6 bar / 73 – 87 psi |

## Ejemplo de cálculo

Para un cilindro de doble efecto de 50 mm / 1,97 in de diámetro interior, con vástago de 20 mm / 0,79 in, carrera de 200 mm / 7,87 in y frecuencia de 20 ciclos por minuto, el consumo de aire libre es de 100 Nl/min / 3,53 scfm.

**Paso 1 – Áreas efectivas**  
*A<sub>ext</sub>* = π · (50 mm)² / 4 = 1963,5 mm² = 0,0019635 m²  
*A<sub>ret</sub>* = π · [(50 mm)² – (20 mm)²] / 4 = 1649,3 mm² = 0,0016493 m²

**Paso 2 – Volumen geométrico por ciclo (extensión + retracción)**  
*V<sub>ext</sub>* = 0,0019635 m² · 0,200 m = 0,0003927 m³ = 0,3927 L  
*V<sub>ret</sub>* = 0,0016493 m² · 0,200 m = 0,0003299 m³ = 0,3299 L  
Volumen geométrico total por ciclo: 0,7226 L

**Paso 3 – Presión absoluta**  
*P<sub>man</sub>* = 6 bar → *P<sub>abs</sub>* = 6 + 1,013 = 7,013 bar

**Paso 4 – Volumen de aire libre por ciclo**  
*V<sub>ciclo</sub>* = 0,7226 L · (7,013 / 1,013) = 5,00 Nl

**Paso 5 – Caudal de aire libre**  
*Q* = 5,00 Nl/ciclo · 20 ciclos/min = 100,0 Nl/min  
*Q* (scfm) = 100,0 / 28,317 ≈ 3,53 scfm

Este caudal debe suministrarse a la presión de régimen de 6 bar; la tubería de alimentación y la unidad de mantenimiento deberán dimensionarse en consecuencia.

## Preguntas frecuentes

**¿Cómo se calcula el consumo de aire de un cilindro de simple efecto?**  
El consumo de aire libre por minuto de un cilindro de simple efecto de 40 mm de diámetro y 100 mm de carrera, operando a 6 bar y 30 ciclos/min, es de aproximadamente 25 Nl/min. Solamente se consume aire durante la extensión; el retorno lo proporciona un resorte o la carga.

**¿Cuál es la presión de trabajo recomendada para actuadores neumáticos?**  
La presión de trabajo estándar para actuadores lineales es de 6 bar / 87 psi, con un rango permitido de 4 a 8 bar / 58 a 116 psi. Presiones inferiores reducen drásticamente la fuerza disponible; presiones superiores acortan la vida útil de juntas y componentes.

**¿Qué coeficiente de descarga se utiliza para un orificio de bordes vivos?**  
Para un orificio de bordes vivos el coeficiente de descarga *C* es 0,65, mientras que para bordes redondeados se emplea 0,97. En válvulas y estranguladores comerciales se suele adoptar *C* ≈ 0,7 – 0,8.

**¿Cómo afecta la presión de trabajo al consumo de aire?**  
Aumentar la presión de trabajo de 6 a 8 bar incrementa el consumo de aire libre en aproximadamente un 33 %, ya que el volumen de aire atmosférico necesario es directamente proporcional a la presión absoluta.

**¿Cuál es la conversión entre Nl/min y scfm?**  
1 scfm equivale a 28,3 Nl/min cuando se consideran condiciones de referencia de 20 °C / 68 °F y 1 atmósfera (1,013 bar / 14,7 psi). Los valores en Nl/min se obtienen multiplicando los scfm por 28,317.

**¿Qué diámetro de tubería se recomienda para un caudal de 500 Nl/min?**  
Para un caudal de 500 Nl/min / 17,7 scfm, una tubería de 10 mm / 0,39 in de diámetro interior genera una pérdida de carga inferior a 0,1 bar / 1,5 psi por cada 10 m / 33 ft de longitud, lo que resulta adecuado para la mayoría de las instalaciones.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/single-acting-piston-air-volume-d_1192.html
- **engineersedge.com**: https://www.engineersedge.com/fluid_flow/discharge-air-orifice.htm
- **efunda.com**: https://www.efunda.com/formulae/fluids/venturi_flowmeter.cfm
