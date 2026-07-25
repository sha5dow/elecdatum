---
title: "Interconexión de generadores de respaldo"
sidebar:
  label: "Interconexión de generadores de respaldo"
description: "Ficha tecnica: Interconexión de generadores de respaldo"
keywords: ["backup generator interconnection transfer switch code", "instalaciones-electricas"]
category: "instalaciones-electricas"
topic: "industrial-installations"
subcategory: "backup-generator-interconnection"
skill: "installation-standards-guide"
launch_phase: undefined
last_updated: "2026-07-24"
verified: true
---

La interconexión correcta del generador de respaldo con la instalación eléctrica existente es la piedra angular de cualquier sistema de energía de emergencia o standby. El elemento central de esta conexión es el interruptor de transferencia, dispositivo encargado de conmutar la carga entre la red pública y el generador, garantizando en todo momento la separación galvánica entre ambas fuentes y la protección del personal de la compañía eléctrica. Un diseño adecuado de la interconexión no solo asegura la continuidad del suministso, sino que determina el cumplimiento normativo, la seguridad de los ocupantes y la longevidad tanto del generador como de los equipos alimentados.

Los sistemas de interconexión se clasifican en tres categorías fundamentales según su modo de conmutación: interruptores de transición abierta, interruptores de transición cerrada e interruptores de transferencia estática. Cada uno responde a necesidades diferentes en cuanto a tolerancia a la interrupción, tipo de carga y requisitos de sincronización con la red, y su selección influye directamente en el esquema de protecciones, el dimensionamiento de los conductores y la configuración de la puesta a tierra del conjunto.

## Principios de funcionamiento

La función principal del interruptor de transferencia consiste en aislar el generador de respaldo de la red de distribución pública cuando el generador está en operación. El interruptor monitoriza la tensión en la acometida principal y, al detectar una condición de fallo, puede enviar la orden de arranque al generador. Una vez que el controlador verifica que el generador ha alcanzado los parámetros nominales de tensión y frecuencia, desconecta la carga de la red y la conecta al generador en una secuencia de conmutación que depende del tipo de transición configurada.

### Conmutación abierta (break‑before‑make)

En el modo de transición abierta, también denominado “corte antes de conexión”, el interruptor abre el contacto con la fuente activa antes de cerrar el contacto con la fuente alternativa. Durante la fracción de segundo que dura la transferencia, el flujo de electricidad se interrumpe completamente. El tiempo de interrupción típico es inferior a 1/6 de segundo (unos 167 ms), intervalo que en la mayoría de las aplicaciones residenciales y comerciales no afecta a las cargas.

### Conmutación cerrada (make‑before‑break)

La transición cerrada evita toda interrupción conectando momentáneamente ambas fuentes en paralelo dentro de parámetros estrictos de sincronismo. Para que el controlador autorice la operación, la diferencia de tensión debe ser menor al 5 %, la diferencia de frecuencia menor a 0,2 Hz y el ángulo de fase máximo entre las dos fuentes no puede superar los 5 grados. El tiempo de superposición o overlap debe ser inferior a 100 ms. Cuando cualquiera de las dos fuentes no está presente o está fuera de los límites aceptables, el interruptor opera por defecto en modo break‑before‑make para impedir el realimentado hacia la red. La transición cerrada requiere aprobación previa de la compañía eléctrica local porque supone una puesta en paralelo momentánea del generador con la red.

## Tipos de interruptores de transferencia

| Tipo de interruptor | Modo de actuación | Aplicación principal | Requisito destacado |
|---|---|---|---|
| Manual | Operación humana directa; tres posiciones (red – apagado – generador) | Instalaciones residenciales pequeñas o temporales | Obliga a pasar por la posición de apagado antes de conectar la otra fuente |
| Automático (ATS) | Detección de fallo de red, arranque del generador y conmutación sin intervención humana | Sistemas de emergencia (Art. 700 NEC), standby legal (Art. 701) y opcional (Art. 702) | Para generadores portátiles > 15 kW / 20,1 HP, la placa de características debe incluir impedancias subtransitorias y factor de potencia |
| Estático (STS) | Conmutación mediante semiconductores de potencia (SCR) entre dos fuentes | Cargas críticas con tolerancia cero a la interrupción; centros de datos | Tiempo de transferencia en el rango de milisegundos o inferior; no sustituye a un UPS |

## Coordinación de protecciones

Todo generador y su interruptor de transferencia asociado deben integrarse con los esquemas de protección de la instalación. El alimentador que conecta el generador al interruptor de transferencia debe dimensionarse para el 125 % de la corriente a plena carga del generador, coordinando sus dispositivos de sobrecorriente con los relés de protección propios del grupo electrógeno. La protección diferencial del generador, la protección contra defecto a tierra del estator y la protección de secuencia negativa son elementos que el diseñador debe coordinar temporalmente con los ajustes del interruptor de transferencia para evitar disparos intempestivos. Las corrientes de secuencia negativa provocadas por cargas desequilibradas aguas abajo del ATS generan un campo rotatorio al doble de la frecuencia síncrona que induce corrientes de alta magnitud en el rotor; sin una correcta coordinación, el sobrecalentamiento acumulado por estas corrientes puede dañar irreversiblemente la máquina.

En el lado de la carga, la selectividad entre las protecciones del generador y los interruptores termomagnéticos de los circuitos derivados garantiza que un cortocircuito en un circuito secundario no provoque la parada del grupo electrógeno completo. Los dispositivos de protección contra sobrecarga del generador deben ajustarse para soportar el transitorio de arranque de motores durante la conmutación, mientras que la curva de daño del alternador —especialmente su capacidad de soportar corrientes de secuencia negativa— se convierte en un límite superior que ningún ajuste debe sobrepasar.

Los Artículos 700, 701 y 702 del NEC imponen una segregación física de los circuitos de emergencia, standby legal y standby opcional, respectivamente, lo que obliga a que los interruptores de transferencia y sus protecciones asociadas se ubiquen en envolventes independientes y se identifiquen conforme a la categoría de la carga que alimentan.

## Códigos y normas aplicables

| Norma / Código | Artículo / Apartado | Requisito principal relacionado con la interconexión |
|---|---|---|
| NEC (NFPA 70) | Artículo 445 | Instalación y requisitos de placa de características del generador; para portátiles > 15 kW / 20,1 HP se exige factor de potencia e impedancias subtransitoria y transitoria |
| NEC (NFPA 70) | Artículo 700 | Sistemas de emergencia; interruptor de transferencia dedicado, cableado independiente, pruebas mensuales bajo carga |
| NEC (NFPA 70) | Artículo 701 | Sistemas de standby legalmente requeridos; requisitos de conmutación y separación de circuitos |
| NEC (NFPA 70) | Artículo 702 | Sistemas de standby opcionales; permite interruptor de transferencia manual o automático con menor exigencia de pruebas |
| NEC (NFPA 70) | Artículo 220.87 | Cálculo de carga existente basado en el 125 % de la demanda máxima anual o, alternativamente, medición continua de 30 días en el periodo de 15 minutos de mayor consumo |
| ANSI/ISA S5.1‑1984 (R 1992) | Códigos de identificación de instrumentación | Nomenclatura para planos P&ID que incluye interruptores (S), relés (Y) y posicionadores (Z) |

## Criterios de diseño e instalación

El diseño de la interconexión parte del cálculo de la carga que el generador debe alimentar tras la conmutación. La NEC exige que para instalaciones existentes se tome el valor mayor entre la carga calculada según el método estándar y el 125 % de la demanda máxima registrada durante un año (o la demanda máxima en intervalos de 15 minutos durante un periodo mínimo de 30 días con el edificio ocupado). Este dato determina la capacidad nominal del interruptor de transferencia y la sección del alimentador.

La elección entre transición abierta y transición cerrada depende de la criticidad de la carga. Si el proceso admite una interrupción máxima de 1/6 de segundo, la transición abierta es suficiente y simplifica la instalación al no requerir sincronismo. Cuando las cargas involucran equipos de procesamiento de datos, motores y transformadores sensibles al microcorte o sistemas en los que la prueba mensual obligatoria bajo carga (Art. 700) resulta inaceptable por la interrupción, se opta por la transición cerrada. Esta última exige un gobernador isócrono en el motor del generador para mantener la frecuencia estable durante la sincronización y la aprobación de la compañía eléctrica debido al paralelo momentáneo.

La configuración de puesta a tierra del generador y del interruptor de transferencia es otro aspecto que define el diseño. El NEC obliga a que el fabricante marque en la placa de características si el neutro del generador está o no unido a la carcasa. Cuando esta unión se modifica en campo, debe instalarse una señalización adicional que lo indique. En sistemas con interruptor de transferencia que conmuta el neutro (switched neutral), se debe garantizar que en ningún momento el sistema quede sin referencia a tierra, coordinando el esquema de conexión a tierra del generador con el del transformador de servicio para cumplir con los Artículos 250 y 445 del NEC.

La separación física entre los circuitos de emergencia y los circuitos normales es un requisito no negociable en los sistemas cubiertos por el Artículo 700: los conductores de emergencia no pueden compartir canalizaciones, gabinetes ni envolventes con conductores de otros sistemas, y el interruptor de transferencia debe estar claramente identificado como equipo de emergencia.

## Comparación de modos de transición

| Modo | Tiempo de interrupción | Requisito de sincronización | Aplicación típica | Requiere aprobación de la compañía eléctrica |
|---|---|---|---|---|
| Transición abierta | < 167 ms / 1/6 s | No requiere | Viviendas unifamiliares, comercios, sistemas de standby opcional | No |
| Transición cerrada | 0 ms (sin interrupción) | Diferencia de tensión < 5 %, frecuencia < 0,2 Hz, ángulo de fase < 5° | Centros de datos, hospitales con cargas sensibles, sistemas con prueba mensual sin microcorte en emergencia | Sí |
| Transición suave (soft‑loading) | 0 ms mientras las fuentes están sincronizadas; tiempo de rampa programable | Igual que transición cerrada; control adicional de rampa de carga | Peak shaving, transferencia controlada de grandes motores, reducción de transitorios | Sí |

## Causas de fallo en la transferencia

| Causa | Consecuencia | Frecuencia relativa | Referencia normativa / técnica asociada |
|---|---|---|---|
| Tensión residual en el lado de red durante la conmutación manual | Realimentación hacia la red y riesgo de electrocución para el personal de la compañía eléctrica | Moderada | NEC Art. 702; interruptor de transferencia con posición de apagado central obligatoria |
| Falla del relé de arranque del generador o degradación del controlador del ATS | Ausencia de respuesta del generador ante un corte de red | Alta | NEC Art. 700 (pruebas mensuales requeridas); mantenimiento predictivo del controlador |
| Parámetros de sincronización fuera de rango en transición cerrada | Funcionamiento forzado en modo break‑before‑make sin haberlo previsto, microcorte sobre cargas sensibles | Baja | Ajuste de gobernador isócrono; verificación de transformadores de potencial en ambas fuentes |
| Ausencia de coordinación entre la protección de sobrecarga del generador y la corriente de irrupción de la carga | Disparo del interruptor principal del generador durante la transferencia, dejando la carga sin alimentación aunque el grupo esté disponible | Moderada | NEC Art. 445; ajuste de la curva de sobrecarga por encima de la corriente de arranque de la carga más desfavorable |

## Preguntas frecuentes (FAQ)

### ¿Cuál es el propósito principal de un interruptor de transferencia automático (ATS)?

El ATS monitoriza continuamente la tensión de la red eléctrica y, al detectar una interrupción o una caída fuera de los límites permitidos, envía la señal de arranque al generador. Cuando comprueba que el generador ha alcanzado la tensión y frecuencia nominales, conmuta la carga de la red al generador en un tiempo máximo de 167 ms en modo abierto, aislándolo completamente de la red de distribución para impedir el realimentado.

### ¿Qué condiciones de sincronismo deben cumplirse para una transferencia en modo cerrado?

La transición cerrada requiere que la diferencia de tensión entre la red y el generador sea inferior al 5 %, la diferencia de frecuencia menor a 0,2 Hz y el ángulo de fase máximo entre ambas fuentes no supere los 5 grados. El controlador verifica estas tres condiciones antes de autorizar el solape de fuentes, cuyo tiempo total debe ser inferior a 100 ms.

### ¿Cuándo es obligatorio utilizar un interruptor de transferencia de transición cerrada?

Ningún código exige de forma absoluta la transición cerrada; se selecciona por requisitos del proceso o de la carga. Es preferible cuando la interrupción de 167 ms de la transición abierta resulta inaceptable para equipos de procesamiento de datos, sistemas de resonancia magnética o procesos industriales continuos, y cuando se desea que la prueba mensual obligatoria del Artículo 700 del NEC no provoque un microcorte.

### ¿Exige el NEC un interruptor de transferencia específico para sistemas de emergencia?

Sí. El Artículo 700 del NEC establece que los sistemas de emergencia deben contar con un interruptor de transferencia automático, dedicado exclusivamente a las cargas de emergencia, instalado en una envolvente independiente y claramente identificado. No se permite compartir el ATS con circuitos de standby opcional ni con cargas no clasificadas como de emergencia.

### ¿Cómo se coordinan las protecciones del generador con el interruptor de transferencia?

La coordinación se logra ajustando los relés de sobreintensidad del lado del generador por encima de la corriente total de arranque de la carga cuando el ATS conmuta, mientras que la protección diferencial y la protección de secuencia negativa se configuran para operar instantáneamente ante faltas internas. Los dispositivos de sobrecorriente aguas abajo del ATS deben ser selectivos para que una falta en un circuito derivado no provoque la apertura del interruptor principal del grupo.

### ¿Cómo se verifica que la instalación existente soporta la adición de un interruptor de transferencia?

El Artículo 220.87 del NEC permite basar el dimensionamiento en el 125 % de la demanda máxima registrada durante un año. Si no se dispone de esos datos, se puede utilizar la demanda máxima medida en intervalos de 15 minutos durante un periodo continuo de al menos 30 días con el edificio ocupado. El valor resultante determina la capacidad mínima del interruptor de transferencia y la sección del alimentador.

## Fuentes consultadas

- **mikeholt.com**: https://www.mikeholt.com/files/PDF/Generators_and_Standby_Power_Systems_2014NEC.pdf
- **electrical4u.com**: https://www.electrical4u.com/generator-protection/
