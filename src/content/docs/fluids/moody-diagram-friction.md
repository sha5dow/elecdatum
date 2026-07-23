---
title: "Diagrama de Moody factor fricción"
sidebar:
  label: "Diagrama de Moody factor fricción"
description: "Ficha tecnica: Diagrama de Moody factor fricción"
keywords: ["Moody diagram Darcy Weisbach friction factor Reynolds", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "moody-diagram"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

El diagrama de Moody es una representación gráfica adimensional que relaciona el factor de fricción de Darcy-Weisbach (f_D), el número de Reynolds (Re) y la rugosidad relativa (ε/D) para flujo completamente desarrollado en una tubería circular. Publicado en 1944 por Lewis Ferry Moody, este diagrama permite predecir la caída de presión o el caudal en sistemas de tuberías y es una herramienta fundamental en mecánica de fluidos aplicada. El factor de fricción de Darcy-Weisbach (λ o f) se utiliza en la ecuación fundamental de pérdida de carga para calcular las pérdidas por fricción en conductos cerrados.

## Principio de funcionamiento

El diagrama se construye a partir del equilibrio de fuerzas en una tubería, donde el esfuerzo cortante en la pared (τ_w) se equilibra con la caída de presión. La ecuación unidimensional de balance de fuerzas establece que Δp · S = τ_w · A, donde S es el área de la sección transversal y A es el área superficial de la tubería. El factor de fricción se define como una relación adimensional entre el esfuerzo cortante en la pared y la energía cinética del fluido, expresada como f = 2τ_w / (ρV²).

El diagrama de Moody correlaciona datos experimentales de aproximadamente 10,000 ensayos y los presenta en un solo gráfico logarítmico. Las variables adimensionales que gobiernan el fenómeno son el número de Reynolds (Re = ρVD/μ) y la rugosidad relativa (ε/D), donde ε es la altura media de las asperezas de la pared interior y D es el diámetro de la tubería.

Existen dos definiciones del factor de fricción: la basada en el sistema SI (factor de Darcy-Weisbach f_D) y la imperial (factor de Fanning f_F). El factor de Darcy-Weisbach es cuatro veces mayor que el factor de Fanning (f_D = 4f_F). La ecuación de pérdida de carga utilizando el factor de Darcy-Weisbach se expresa como h_f = f_D · (L/D) · (V²/(2g)), donde L es la longitud de la tubería, V la velocidad media del fluido y g la aceleración de la gravedad.

## Formulaciones y ecuaciones

| Ecuación | Expresión | Condiciones de aplicación |
|---|---|---|
| Darcy-Weisbach (pérdida de carga) | h_f = f_D · (L/D) · (V² / 2g) | Flujo completamente desarrollado en tuberías circulares |
| Caída de presión directa | Δp = f_D · (ρV²/2) · (L/D) | Válida para cualquier régimen de flujo |
| Poiseuille (laminar) | f_D = 64 / Re | Re < 2100, independiente de la rugosidad |
| Blasius (turbulento liso) | f_D = 0,3164 / Re^(0,25) | 3000 < Re < 100,000, tuberías lisas |
| Colebrook-White (transición) | 1/√f_D = -2,0·log₁₀[(ε/D)/3,7 + 2,51/(Re·√f_D)] | Re > 4000, cualquier rugosidad (ecuación implícita) |
| Karman-Nikuradse (liso) | 1/√f_F = 2,0·log₁₀(Re·√f_F) - 0,8 | Tuberías lisas, régimen turbulento |
| Completamente rugoso | 1/√f_F = 2,0·log₁₀(3,7/(ε/D)) | Régimen completamente rugoso, independiente de Re |

La ecuación de Colebrook-White es implícita en f_D y requiere iteración (método de Newton-Raphson) para su resolución. Converge a la ecuación de Karman-Nikuradse para tuberías lisas cuando ε → 0, y al régimen completamente rugoso cuando Re → ∞. Para flujo en transición (2100 < Re < 4000), el factor de fricción no puede determinarse con certeza y generalmente se interpola entre los valores laminar y turbulento.

## Factores que afectan

| Factor | Efecto sobre el factor de fricción | Rango de influencia |
|---|---|---|
| Número de Reynolds (Re) | Determina el régimen de flujo. En laminar, f_D ∝ 1/Re. En turbulento, f_D disminuye con Re hasta estabilizarse | Re < 2100 laminar; 2100–4000 transición; Re > 4000 turbulento |
| Rugosidad relativa (ε/D) | Sin efecto en flujo laminar. En turbulento, a mayor ε/D, mayor f_D para un mismo Re | Adimensional, valores típicos de 10⁻⁶ a 10⁻² |
| Rugosidad absoluta (ε) | Depende del material y método de fabricación. Las tuberías comerciales tienen patrones de rugosidad no uniformes | Varía desde 0,0015 mm (tubos estirados) hasta > 0,26 mm (fundición) |
| Régimen de rugosidad (u*ε/ν) | Define tres zonas: dinámicamente liso (0–5), transición (5–70) y completamente rugoso (>70) | Adimensional (u* = velocidad de fricción, ν = viscosidad cinemática) |
| Diámetro de la tubería (D) | Afecta la rugosidad relativa. A igual ε, mayor D → menor ε/D → menor f_D | Influye indirectamente a través de ε/D y Re |
| Velocidad del fluido (V) | Influye en Re y en el régimen de flujo. A mayor V, mayor Re y potencial transición a turbulento | Directamente proporcional a Re |
| Densidad (ρ) y viscosidad (μ) del fluido | Definen las propiedades del flujo. Mayor μ reduce Re; mayor ρ aumenta Re | Varían con temperatura y presión del fluido |

## Rugosidad absoluta de tuberías comerciales

| Material | Rugosidad absoluta ε |
|---|---|
| Vidrio | 0,0015 mm / 0.000059 in |
| Tubo estirado (drawn tubing) | 0,0015 mm / 0.000059 in |
| Acero comercial o hierro forjado | 0,046 mm / 0.0018 in |
| Hierro fundido asfaltado | 0,12 mm / 0.0047 in |
| Hierro galvanizado | 0,15 mm / 0.0059 in |
| Hierro fundido | 0,26 mm / 0.0102 in |
| PVC (rugosidad típica) | 0,0015 mm / 0.000059 in |

## Criterios de selección del factor de fricción

El procedimiento de selección del factor de fricción mediante el diagrama de Moody sigue una secuencia determinada por el régimen de flujo. Primero se calcula el número de Reynolds (Re = ρVD/μ) y se determina el régimen: si Re < 2100, el flujo es laminar y f_D = 64/Re independientemente de la rugosidad; si Re > 4000, el flujo es turbulento y se requiere la rugosidad relativa (ε/D) para ingresar al diagrama; si 2100 < Re < 4000, el flujo está en zona de transición y el factor de fricción es incierto, recomendándose interpolar.

Para el régimen turbulento, se calcula la rugosidad relativa ε/D con los valores de rugosidad absoluta de la tabla anterior y el diámetro de la tubería. Con Re y ε/D, se ingresa al diagrama de Moody: en el eje horizontal (abscisas) se ubica Re, se asciende verticalmente hasta intersecar la curva de ε/D correspondiente, y se lee f_D en el eje vertical izquierdo. Alternativamente, puede utilizarse la ecuación de Colebrook-White para obtener mayor precisión numérica.

Para tuberías comerciales en la zona de transición, la ecuación de Colebrook-White proporciona valores que difieren de los obtenidos con rugosidad artificial de arena (Nikuradse), ya que los patrones de rugosidad comercial no son uniformes. Se estima que las caídas de presión calculadas mediante este método tienen una incertidumbre de al menos un 10%, debido a la dispersión de los datos experimentales subyacentes.

En sistemas con fluidos no newtonianos o flujo multifásico, el diagrama de Moody estándar no es directamente aplicable y se requieren correlaciones específicas. Para tuberías no circulares, se utiliza el diámetro hidráulico D_h = 4A/P, donde A es el área de la sección transversal y P el perímetro mojado, manteniendo la misma formulación. La precisión del método gráfico original es suficiente para la mayoría de aplicaciones de ingeniería, con valores típicos de f_D entre 0,008 y 0,08.

## FAQ

**¿Cuál es la fórmula del factor de fricción para flujo laminar?**
El factor de fricción de Darcy-Weisbach (f_D) para flujo laminar se calcula analíticamente como f_D = 64/Re, válido para números de Reynolds (Re) inferiores a 2100. Esta expresión, derivada de la ecuación de Hagen-Poiseuille, es independiente de la rugosidad de la tubería y produce valores que oscilan entre 0,03 (Re ≈ 2100) y 0,064 (Re = 1000).

**¿Cómo se determina el factor de fricción en la zona de transición (2100 < Re < 4000)?**
En la zona de transición (2100 < Re < 4000), el flujo alterna entre características laminares y turbulentas, y el factor de fricción no puede determinarse con precisión. La práctica habitual consiste en interpolar linealmente entre el valor laminar a Re = 2100 (f_D = 64/2100 ≈ 0,0305) y el valor turbulento a Re = 4000, calculado con la ecuación de Colebrook-White para la rugosidad relativa correspondiente.

**¿Qué diferencia existe entre el factor de fricción de Darcy-Weisbach y el de Fanning?**
El factor de fricción de Darcy-Weisbach (f_D) es exactamente cuatro veces mayor que el factor de Fanning (f_F): f_D = 4 · f_F. El factor de Darcy-Weisbach (también denominado λ) se utiliza en la ecuación de pérdida de carga h_f = f_D·(L/D)·(V²/2g), mientras que el factor de Fanning (f_F) aparece en la definición de esfuerzo cortante τ_w = f_F·(ρV²/2). Es esencial identificar cuál de los dos se está utilizando al leer valores del diagrama, ya que una confusión introduce un error de factor 4.

**¿Para qué valor de rugosidad relativa se puede considerar una tubería como lisa?**
Una tubería se considera hidráulicamente lisa cuando el parámetro adimensional de rugosidad u*ε/ν está entre 0 y 5, donde u* = √(τ_w/ρ) es la velocidad de fricción y ν la viscosidad cinemática. En términos prácticos, para Re = 10⁵, esto corresponde aproximadamente a ε/D < 0,000001; para Re = 10⁶, ε/D < 0,00001. En estas condiciones, las asperezas quedan sumergidas dentro de la subcapa viscosa y no afectan el factor de fricción.

**¿Qué incertidumbre tienen las caídas de presión calculadas con el diagrama de Moody?**
Las caídas de presión calculadas mediante el diagrama de Moody presentan una incertidumbre de al menos un 10%, atribuible a la dispersión de los datos experimentales que sustentan las curvas y a las diferencias entre la rugosidad artificial uniforme (arena de Nikuradse) y los patrones irregulares de rugosidad en tuberías comerciales. Para aplicaciones críticas se recomienda verificación experimental o el uso de factores de seguridad adecuados.

**¿Cómo se calcula el factor de fricción sin utilizar el gráfico?**
El factor de fricción puede calcularse numéricamente sin recurrir al gráfico mediante la ecuación de Colebrook-White: 1/√f_D = -2,0·log₁₀[(ε/D)/3,7 + 2,51/(Re·√f_D)]. Por ser implícita, requiere iteración; el método de Newton-Raphson es el más utilizado y converge típicamente en 3 a 5 iteraciones. Existen también aproximaciones explícitas como la ecuación de Swamee-Jain, válida para 10⁻⁶ < ε/D < 10⁻² y 5000 < Re < 10⁸: f_D = 0,25 / [log₁₀((ε/D)/3,7 + 5,74/Re^0,9)]².

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/moody-diagram-d_618.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/789/
