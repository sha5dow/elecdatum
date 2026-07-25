---
title: "Puesta a tierra estática requisitos industriales"
sidebar:
  label: "Puesta a tierra estática requisitos industriales"
description: "Ficha tecnica: Puesta a tierra estática requisitos industriales"
keywords: ["static grounding requirements industrial NFPA 77", "puesta-tierra"]
category: "puesta-tierra"
topic: "static-grounding"
subcategory: "static-grounding-requirements"
skill: "grounding-reference-table"
launch_phase: undefined
last_updated: "2026-07-25"
verified: true
---

La puesta a tierra estática consiste en conectar eléctricamente objetos conductores al terreno para disipar cargas electrostáticas acumuladas, evitando chispas que puedan inflamar atmósferas explosivas o inflamables. Los requisitos industriales, basados en la norma NFPA 77, establecen una resistencia a tierra inferior a 1 MΩ (10⁶ ohmios) para garantizar la disipación efectiva de la electricidad estática en áreas clasificadas como peligrosas.

## Normativa aplicable

La práctica recomendada NFPA 77 «Práctica Recomendada sobre Electricidad Estática» constituye la referencia principal para la puesta a tierra estática en entornos industriales. El apartado 500.4 Nota 3 del NEC (National Electrical Code) establece que la conexión a tierra de partes metálicas ayuda a drenar las cargas electrostáticas antes de que se alcance el potencial de arco, especialmente en ubicaciones peligrosas. Adicionalmente, normas como IEC 60079‑14 y API RP 2003 complementan los requisitos de puesta a tierra y unión equipotencial en atmósferas potencialmente explosivas.

## Resistencia máxima admisible

La resistencia de puesta a tierra para disipación estática no debe superar 1 MΩ (10⁶ Ω), valor ampliamente aceptado por NFPA 77 y otras buenas prácticas de ingeniería. Para garantizar la equipotencialidad entre partes conductoras, la resistencia de unión (bonding) debe ser inferior a 10 Ω.

| Aplicación | Resistencia máxima |
| --- | --- |
| Puesta a tierra estática de equipos conductores | 1 MΩ / 10⁶ Ω |
| Unión equipotencial entre elementos metálicos | 10 Ω |
| Puesta a tierra de sistemas de potencia (referencia) | 0,5 Ω – 10 Ω según instalación |

La diferencia entre los valores de estática y de potencia radica en que la descarga electrostática maneja corrientes muy bajas; el objetivo es disipar la carga gradualmente, no conducir corrientes de falla de gran magnitud.

## Métodos de puesta a tierra estática

Los métodos principales se clasifican según el tipo de equipo y el entorno:

- **Pinza y cable flexible**: pinza de contacto directo unida a un cable de cobre de sección mínima 10 mm² (8 AWG) que se conecta a una barra de tierra verificada.
- **Bornes fijos de puesta a tierra**: conexión permanente mediante terminal atornillado, habitual en tanques, tolvas, tuberías y estructuras metálicas fijas.
- **Sistemas monitorizados**: incorporan un controlador de continuidad que emite una alarma visual o sonora si la resistencia supera los 10 Ω, asegurando la integridad del circuito antes y durante operaciones de trasvase o mezcla.
- **Zapatos y pisos conductivos**: en áreas con presencia simultánea de personal y atmósferas inflamables se emplean suelos disipativos y calzado conductor, manteniendo una resistencia total a tierra inferior a 1 MΩ.

## Componentes típicos del sistema

| Componente | Descripción | Especificación |
| --- | --- | --- |
| Pinza de puesta a tierra | Mordaza de cobre, acero inoxidable o aluminio con puntas penetrantes para vencer capas de pintura o corrosión. | Capacidad de sujeción ≥ 25 mm / 1 in |
| Cable conductor | Flexible, con aislamiento resistente a hidrocarburos o desnudo en recorridos protegidos. | Sección mínima 10 mm² / 8 AWG |
| Carrete retráctil | Permite prolongar el cable y recogerlo automáticamente, asegurando contacto firme durante la operación. | Longitud habitual 6 m / 20 ft hasta 15 m / 50 ft |
| Monitor de continuidad | Dispositivo electrónico que supervisa en tiempo real la resistencia del lazo de tierra. | Alarma si R > 10 Ω |
| Barra o borne de tierra | Punto centralizado de conexión a la malla de puesta a tierra de la planta. | Resistencia a tierra verificada < 1 MΩ |

## Procedimiento de instalación

1. Verificar que la resistencia de la malla de tierra general de la instalación sea inferior a 1 MΩ.
2. Seleccionar un punto de contacto limpio y libre de corrosión en el equipo; si es necesario, lijar la superficie para garantizar contacto metálico.
3. Fijar la pinza o borne de manera que no pueda soltarse durante la operación; la fuerza de mordaza debe perforar eventuales capas de pintura.
4. Conectar el cable flexible al borne o barra de tierra; la longitud del cable no debe exceder 15 m (50 ft) sin refuerzo de sección.
5. En sistemas monitorizados, enlazar el monitor de continuidad y comprobar que indique «tierra OK» antes de iniciar trabajos.
6. Evitar empalmes improvisados; toda unión debe realizarse con conectores certificados o soldadura exotérmica.

## Inspección y mantenimiento

La frecuencia de inspección suele ser mensual en áreas de alto riesgo y trimestral en zonas de riesgo moderado. Durante la revisión se mide la resistencia de puesta a tierra con un comprobador de resistencia a tierra (earth bond tester), aceptándose un valor máximo de 1 MΩ. Se recomienda:

- Limpiar contactos de pinzas y bornes con cepillo metálico cada tres meses.
- Revisar visualmente el aislamiento del cable; sustituir si presenta cortes, grietas o deformaciones.
- Verificar la funcionalidad del monitor de continuidad simulando una desconexión.
- Registrar los valores medidos en un historial de mantenimiento para identificar tendencias de deterioro.

## Preguntas frecuentes (FAQ)

### ¿Cuál es la resistencia máxima admisible para puesta a tierra estática?

La NFPA 77 establece que la resistencia a tierra debe ser inferior a 1 MΩ (10⁶ Ω). Valores superiores impiden una disipación eficaz de la carga electrostática.

### ¿Qué diferencia hay entre puesta a tierra estática y puesta a tierra de potencia?

La puesta a tierra estática disipa corrientes muy pequeñas (microamperios) con una resistencia máxima de 1 MΩ, mientras que la de potencia conduce corrientes de falla elevadas y requiere resistencias del orden de 0,5 Ω a 10 Ω.

### ¿Es obligatorio un monitor de continuidad en todos los sistemas de puesta a tierra estática?

No en todos, pero se recomienda en operaciones de trasvase de líquidos inflamables, mezclado de polvos combustibles o donde una desconexión accidental no sería evidente para el operario. Su uso es cada vez más frecuente para cumplir con estándares de seguridad funcional.

### ¿Qué sección de cable se necesita para la puesta a tierra estática?

La sección mínima habitualmente especificada es de 10 mm² (8 AWG) para conductores flexibles que conectan equipos móviles. En instalaciones fijas pueden emplearse cables de hasta 16 mm² (6 AWG) si las distancias son largas.

### ¿Puede la pintura o el óxido afectar la puesta a tierra estática?

Sí, las capas de pintura, recubrimientos o corrosión actúan como aislantes. Es imprescindible que las pinzas de puesta a tierra tengan puntas penetrantes o que el punto de contacto esté libre de tales capas para garantizar una resistencia inferior a 10 Ω en el circuito de unión.

### ¿Cada cuánto se debe comprobar la resistencia del sistema?

En áreas clasificadas como zona 0, 1 o 20 (atmósferas explosivas) se recomienda una verificación diaria o semanal. En el resto de áreas peligrosas, una frecuencia mensual es aceptable, siempre registrando los resultados para auditorías.

## Fuentes consultadas

- **electrical4u.com**: https://www.electrical4u.com/equipment-earthing/
- **mikeholt.com**: https://www.mikeholt.com/instructor2/img/product/pdf/17NCT2-1475-sample.pdf
