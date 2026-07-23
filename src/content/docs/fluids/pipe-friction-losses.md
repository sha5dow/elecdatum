---
title: "Pérdidas por fricción en tuberías"
sidebar:
  label: "Pérdidas por fricción en tuberías"
description: "Ficha tecnica: Pérdidas por fricción en tuberías"
keywords: ["Darcy Weisbach pipe friction losses", "fluids"]
category: "fluids"
topic: "fluid-mechanics"
subcategory: "pipe-losses"
skill: "fluids-reference-table"
launch_phase: 9
last_updated: "2026-07-23"
verified: true
---

## Descripción general
Las pérdidas por fricción en tuberías, también conocidas como pérdidas mayores, representan la disminución de presión que experimenta un fluido al circular por un conducto recto debido a los esfuerzos viscosos sobre las paredes. La ecuación de Darcy‑Weisbach es el método más preciso y universalmente aceptado para cuantificar esta pérdida en régimen estacionario, incompresible y completamente desarrollado. El factor de fricción (λ) depende del número de Reynolds y de la rugosidad relativa de la tubería.

## Ecuación de Darcy‑Weisbach
La pérdida de presión por fricción se calcula con:

Δp = λ · (L / Dₕ) · (ρ · v² / 2)

Donde:
- Δp = pérdida de presión mayor, expresada en Pa o N/m² (psi o psf)
- λ = factor de fricción de Darcy‑Weisbach (adimensional)
- L = longitud de la tubería, en m o ft
- Dₕ = diámetro hidráulico (para secciones circulares igual al diámetro interior), en m o ft
- ρ = densidad del fluido, en kg/m³ o slugs/ft³
- v = velocidad media del flujo, en m/s o ft/s

Para expresar la pérdida como altura de columna de agua (head loss) se divide por el peso específico del agua:

Δh = λ · (L / Dₕ) · (ρ / ρw) · (v² / (2g))

donde ρw es la densidad del agua (1000 kg/m³, 62.4 lb/ft³) y g es la aceleración de la gravedad (9.81 m/s², 32.2 ft/s²).

## Factor de fricción (λ)
El factor de fricción adimensional λ se determina en función del régimen de flujo:

- **Flujo laminar (Re < 2000):**  
  λ = 64 / Re
- **Flujo turbulento (Re > 4000):**  
  Se emplea la ecuación implícita de Colebrook‑White:

  1 / √λ = –2 · log₁₀( (e/Dₕ) / 3.7 + 2.51 / (Re · √λ) )

  donde e es la rugosidad absoluta de la pared y e/Dₕ la rugosidad relativa.
- **Zona de transición (2000 < Re < 4000):**  
  El flujo es inestable; se recomienda emplear la correlación turbulenta asumiendo el peor caso.

Para tuberías lisas y Re entre 5×10³ y 10⁵ puede usarse la fórmula de Blasius: λ = 0.316 / Re⁰·²⁵. En la región completamente rugosa (Re muy alto) λ depende solo de la rugosidad relativa.

## Rugosidad absoluta de tuberías
La rugosidad absoluta (e) representa la altura media de las protuberancias de la pared interna. La tabla siguiente recoge valores típicos para materiales comerciales.

| Material | Rugosidad absoluta (e) |
| --- | --- |
| Tubería nueva de metal ferroso estirado | 0.01 mm / 0.00039 in |
| Tubería nueva de acero | 0.014 mm / 0.00055 in |
| Tubería de acero tras unos años de servicio | 0.2 mm / 0.0079 in |
| Tubería vieja y oxidada | 1 – 3 mm / 0.039 – 0.118 in |
| Tubería galvanizada nueva | 0.5 mm / 0.020 in |
| Tubería nueva de fibrocemento | 0.085 mm / 0.0033 in |

*Valores recopilados de Thermopedia.*

## Cálculo del número de Reynolds
El número de Reynolds determina el régimen de flujo y se obtiene de:

Re = (ρ · v · Dₕ) / μ = (v · Dₕ) / ν

donde μ es la viscosidad dinámica (Pa·s o lb/(ft·s)) y ν la viscosidad cinemática (m²/s o ft²/s).

| Régimen | Número de Reynolds | Comportamiento del factor de fricción |
| --- | --- | --- |
| Laminar | Re ≤ 2000 | λ solo depende de Re; independiente de la rugosidad |
| Transición | 2000 < Re < 4000 | Flujo inestable, se recomienda usar correlación turbulenta |
| Turbulento liso | 4000 < Re < 10⁵ | λ función de Re, poca influencia de la rugosidad |
| Turbulento de transición | Re intermedio | λ depende de Re y e/Dₕ según Colebrook |
| Completamente rugoso | Re muy alto | λ solo función de e/Dₕ |

## Criterios de diseño
Al dimensionar sistemas de tuberías con la ecuación de Darcy‑Weisbach se deben considerar los siguientes criterios:

- **Longitud dominante:** cuando la tubería es larga (L/D > 1000) las pérdidas por fricción dominan sobre las pérdidas locales; en tramos cortos deben sumarse las pérdidas singulares.
- **Régimen de flujo:** en aplicaciones de agua y fluidos poco viscosos se prefiere flujo turbulento para evitar sedimentación, pero se aceptan velocidades de diseño entre 1 y 3 m/s (3.3 y 9.8 ft/s).
- **Selección del material:** la rugosidad aumenta con el envejecimiento; se debe usar el valor correspondiente a la vida útil esperada del sistema.
- **Temperatura:** la densidad y viscosidad del fluido varían con la temperatura, alterando el número de Reynolds y la pérdida de carga. Se recomienda evaluar en las condiciones de operación más desfavorables (peor caso).
- **Diámetro económico:** un diámetro mayor reduce la pérdida de presión pero incrementa el coste de material; se optimiza minimizando la suma de costes de bombeo y tubería.
- **Factor de seguridad:** debido a la incertidumbre inherente en las correlaciones (±10 %), se aconseja sobredimensionar la potencia de bombeo entre 10 y 15 %.

## Preguntas frecuentes
### ¿Cuál es la pérdida de presión por metro en una tubería de acero DN 50 con agua a 2 m/s?
En una tubería lisa de 0.05 m de diámetro, con agua a 20 °C (ν≈1.0×10⁻⁶ m²/s, ρ=1000 kg/m³), Re = 100 000. Aplicando Blasius (λ≈0.0178) la pérdida de presión es aproximadamente 712 Pa por metro lineal (0.103 psi/ft).

### ¿Cómo varía la pérdida de carga si se duplica el caudal?
Si se duplica el caudal, la velocidad se duplica, por lo que la pérdida de presión aumenta en un factor 4 (Δp ∝ v²) si el factor de fricción se mantiene constante. En la práctica λ puede disminuir ligeramente al aumentar Re, resultando en un incremento cercano a 3.8 veces en régimen turbulento.

### ¿Qué error se comete al usar la fórmula de Blasius en lugar de Colebrook para tuberías rugosas?
Para una rugosidad relativa e/D = 0.001 y Re = 10⁵, Blasius da λ ≈ 0.0179 mientras que Colebrook arroja λ ≈ 0.0199, un error de aproximadamente –10 % en la pérdida de carga. El error crece al aumentar la rugosidad o el número de Reynolds.

### ¿Cuándo es necesario considerar las pérdidas singulares además de las pérdidas por fricción?
Cuando la longitud de la tubería es inferior a 1000 diámetros (L/D < 1000), las pérdidas en accesorios, válvulas y cambios de sección pueden representar más del 10 % de la pérdida total y deben sumarse a las pérdidas mayores.

### ¿Qué diámetro hidráulico tiene un conducto rectangular de 0.3 m × 0.2 m?
El diámetro hidráulico se calcula como Dₕ = 4A/P. Para un rectángulo de 0.3 m × 0.2 m, A = 0.06 m², P = 1.0 m, por lo que Dₕ = 0.24 m (9.45 in). Este valor sustituye al diámetro en la ecuación de Darcy‑Weisbach.

### ¿Cómo afecta la temperatura del agua a la pérdida por fricción?
Al aumentar la temperatura de 10 °C a 80 °C (50 °F a 176 °F), la viscosidad cinemática del agua disminuye de 1.31 a 0.36×10⁻⁶ m²/s. Con el mismo caudal, el número de Reynolds se incrementa en un factor ~3.6 y el factor de fricción se reduce, lo que disminuye la pérdida de presión en aproximadamente un 15‑25 % para tuberías lisas.

## Fuentes consultadas

- **engineeringtoolbox.com**: https://www.engineeringtoolbox.com/darcy-weisbach-equation-d_646.html
- **efunda.com**: https://www.efunda.com/formulae/fluids/calc_pipe_friction.cfm
- **thermopedia.com**: https://www.thermopedia.com/content/857/
