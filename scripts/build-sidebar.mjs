import fg from 'fast-glob';
import matter from 'gray-matter';
import fs from 'node:fs';

const CATEGORY_LABELS = {
  'conductores-cables': { es: 'Conductores y Cables', en: 'Conductors and Cables' },
  'circuitos-analisis': { es: 'Circuitos y An\u00e1lisis', en: 'Circuits and Analysis' },
  'maquinas-electricas': { es: 'M\u00e1quinas El\u00e9ctricas', en: 'Electrical Machines' },
  'protecciones-electricas': { es: 'Protecciones El\u00e9ctricas', en: 'Electrical Protection' },
  'instalaciones-electricas': { es: 'Instalaciones El\u00e9ctricas', en: 'Electrical Installations' },
  'puesta-tierra': { es: 'Sistemas de Puesta a Tierra', en: 'Grounding Systems' },
  'calidad-energia': { es: 'Calidad de la Energ\u00eda', en: 'Power Quality' },
  'sistemas-control': { es: 'Sistemas de Control', en: 'Control Systems' },
  'simbolos-electricos': { es: 'S\u00edmbolos El\u00e9ctricos', en: 'Electrical Symbols' },
  converters: { es: 'Conversores', en: 'Converters' },
};

const TOPIC_LABELS = {
  'awg-system': { es: 'Sistema AWG', en: 'AWG System' },
  'ampacity': { es: 'Ampacidad', en: 'Ampacity' },
  'insulation-types': { es: 'Tipos de Aislamiento', en: 'Insulation Types' },
  'voltage-drop': { es: 'Ca\u00edda de Tensi\u00f3n', en: 'Voltage Drop' },
  'cable-types': { es: 'Tipos de Cable', en: 'Cable Types' },
  'conductor-materials': { es: 'Materiales de Conductores', en: 'Conductor Materials' },
  'grounding-conductors': { es: 'Conductores de Tierra', en: 'Grounding Conductors' },
  'busbar': { es: 'Barras Conductoras', en: 'Busbar' },
  'conduit-fill': { es: 'Llenado de Conducto', en: 'Conduit Fill' },
  'fundamentals': { es: 'Fundamentos', en: 'Fundamentals' },
  'single-three-phase': { es: 'Monof\u00e1sico y Trif\u00e1sico', en: 'Single & Three Phase' },
  'power-factor': { es: 'Factor de Potencia', en: 'Power Factor' },
  'circuit-elements': { es: 'Elementos de Circuito', en: 'Circuit Elements' },
  'ac-fundamentals': { es: 'Fundamentos de CA', en: 'AC Fundamentals' },
  'motor-electrical': { es: 'El\u00e9ctrica de Motores', en: 'Motor Electrical' },
  'transformers-calc': { es: 'C\u00e1lculo de Transformadores', en: 'Transformer Calculations' },
  'short-circuit': { es: 'Cortocircuito', en: 'Short Circuit' },
  'motors-induction': { es: 'Motores de Inducci\u00f3n', en: 'Induction Motors' },
  'motors-dc': { es: 'Motores DC', en: 'DC Motors' },
  'motor-starting': { es: 'Arranque de Motores', en: 'Motor Starting' },
  'transformers': { es: 'Transformadores', en: 'Transformers' },
  'generators': { es: 'Generadores', en: 'Generators' },
  'motor-selection': { es: 'Selecci\u00f3n de Motores', en: 'Motor Selection' },
  'power-supplies': { es: 'Fuentes de Alimentaci\u00f3n', en: 'Power Supplies' },
  'capacitor-banks': { es: 'Bancos de Capacitores', en: 'Capacitor Banks' },
  'solar-electrical': { es: 'El\u00e9ctrica Solar', en: 'Solar Electrical' },
  'battery-systems': { es: 'Sistemas de Bater\u00edas', en: 'Battery Systems' },
  'switchgear': { es: 'Equipo de Conmutaci\u00f3n', en: 'Switchgear' },
  'circuit-breakers': { es: 'Interruptores Termomagn\u00e9ticos', en: 'Circuit Breakers' },
  'fuses': { es: 'Fusibles', en: 'Fuses' },
  'gfci-afci': { es: 'GFCI y AFCI', en: 'GFCI & AFCI' },
  'relays': { es: 'Relevadores', en: 'Relays' },
  'surge-protection': { es: 'Protecci\u00f3n contra Sobretensi\u00f3n', en: 'Surge Protection' },
  'coordination': { es: 'Coordinaci\u00f3n de Protecciones', en: 'Protection Coordination' },
  'motor-protection': { es: 'Protecci\u00f3n de Motores', en: 'Motor Protection' },
  'disconnect-switches': { es: 'Interruptores de Desconexi\u00f3n', en: 'Disconnect Switches' },
  'arc-flash': { es: 'Arco El\u00e9ctrico', en: 'Arc Flash' },
  'circuit-breaker-standards': { es: 'Normas de Interruptores', en: 'Breaker Standards' },
  'nom-001': { es: 'NOM-001', en: 'NOM-001' },
  'nec': { es: 'NEC', en: 'NEC' },
  'panel-loads': { es: 'Cargas de Tablero', en: 'Panel Loads' },
  'raceways': { es: 'Canalizaciones', en: 'Raceways' },
  'receptacles-switches': { es: 'Contactos e Interruptores', en: 'Receptacles & Switches' },
  'lighting-circuits': { es: 'Circuitos de Iluminaci\u00f3n', en: 'Lighting Circuits' },
  'hazardous-locations': { es: '\u00c1reas Peligrosas', en: 'Hazardous Locations' },
  'service-entrance': { es: 'Acometida', en: 'Service Entrance' },
  'wiring-methods': { es: 'M\u00e9todos de Alambrado', en: 'Wiring Methods' },
  'standards-comparison': { es: 'Comparativa de Normas', en: 'Standards Comparison' },
  'industrial-installations': { es: 'Instalaciones Industriales', en: 'Industrial Installations' },
  'residential-code': { es: 'C\u00f3digo Residencial', en: 'Residential Code' },
  'solar-installation': { es: 'Instalaci\u00f3n Solar', en: 'Solar Installation' },
  'grounding-fundamentals': { es: 'Fundamentos de Tierra', en: 'Grounding Fundamentals' },
  'grounding-systems': { es: 'Sistemas de Tierra', en: 'Grounding Systems' },
  'resistance-testing': { es: 'Pruebas de Resistencia', en: 'Resistance Testing' },
  'bonding': { es: 'Bonding', en: 'Bonding' },
  'lightning-protection': { es: 'Protecci\u00f3n contra Rayos', en: 'Lightning Protection' },
  'static-grounding': { es: 'Tierra Est\u00e1tica', en: 'Static Grounding' },
  'harmonics': { es: 'Arm\u00f3nicos', en: 'Harmonics' },
  'power-factor-quality': { es: 'Calidad de Factor de Potencia', en: 'Power Factor Quality' },
  'voltage-quality': { es: 'Calidad de Voltaje', en: 'Voltage Quality' },
  'transients': { es: 'Transitorios', en: 'Transients' },
  'reactive-power': { es: 'Potencia Reactiva', en: 'Reactive Power' },
  'metering': { es: 'Medici\u00f3n', en: 'Metering' },
  'contactors': { es: 'Contactores', en: 'Contactors' },
  'plc-basics': { es: 'Fundamentos de PLC', en: 'PLC Basics' },
  'sensors': { es: 'Sensores', en: 'Sensors' },
  'thermocouples': { es: 'Termopares', en: 'Thermocouples' },
  'control-signals': { es: 'Se\u00f1ales de Control', en: 'Control Signals' },
  'hmi-scada': { es: 'HMI y SCADA', en: 'HMI & SCADA' },
  'communication-protocols': { es: 'Protocolos de Comunicaci\u00f3n', en: 'Communication Protocols' },
  'motor-control-devices': { es: 'Dispositivos de Control de Motores', en: 'Motor Control Devices' },
  'plc-selection': { es: 'Selecci\u00f3n de PLC', en: 'PLC Selection' },
  'variable-frequency-drives': { es: 'Variadores de Frecuencia', en: 'Variable Frequency Drives' },
  'unifilar-diagrams': { es: 'Diagramas Unifilares', en: 'Single-Line Diagrams' },
  'iec-symbols': { es: 'S\u00edmbolos IEC', en: 'IEC Symbols' },
  'control-diagram-symbols': { es: 'S\u00edmbolos de Diagrama de Control', en: 'Control Diagram Symbols' },
  'device-numbers': { es: 'N\u00fameros de Dispositivo', en: 'Device Numbers' },
  'wiring-diagram-symbols': { es: 'S\u00edmbolos de Diagrama de Alambrado', en: 'Wiring Diagram Symbols' },
  'plc-symbols': { es: 'S\u00edmbolos de PLC', en: 'PLC Symbols' },
  'power-units': { es: 'Unidades de Potencia', en: 'Power Units' },
  'wire-units': { es: 'Unidades de Cable', en: 'Wire Units' },
  'energy-units': { es: 'Unidades de Energ\u00eda', en: 'Energy Units' },
  'illumination-units': { es: 'Unidades de Iluminaci\u00f3n', en: 'Illumination Units' },
  'resistance-units': { es: 'Unidades de Resistencia', en: 'Resistance Units' },
  'frequency-units': { es: 'Unidades de Frecuencia', en: 'Frequency Units' },
};
const topicLabelEs = (s) => TOPIC_LABELS[s]?.es ?? s;
const topicLabelEn = (s) => TOPIC_LABELS[s]?.en ?? s;

async function buildCategory(dir, baseDir, urlPrefix) {
  const allFiles = await fg(`${baseDir}/${dir}/*.md`);
  const files = allFiles.filter(f => !f.endsWith('index.md'));
  if (files.length === 0) return null;

  const tree = {};
  for (const f of files) {
    const { data } = matter(fs.readFileSync(f, 'utf8'));
    const slug = f.split(/[\\/]/).pop().replace(/\.mdx?$/, '');
    const t = data.topic || 'otros';
    tree[t] ??= [];
    tree[t].push({
      label: data.sidebar?.label ?? data.title,
      link: `${urlPrefix}${dir}/${slug}/`,
    });
  }

  const items = Object.entries(tree)
    .sort(([a], [b]) => topicLabelEs(a).localeCompare(topicLabelEs(b)))
    .map(([t, pages]) => ({
      label: topicLabelEs(t),
      translations: { en: topicLabelEn(t) },
      collapsed: true,
      items: pages.sort((a, b) => a.label.localeCompare(b.label)),
    }));

  return items;
}

async function build() {
  const sidebar = [];
  for (const dir of Object.keys(CATEGORY_LABELS)) {
    const items = await buildCategory(dir, 'src/content/docs', '/');
    if (!items) continue;
    sidebar.push({
      label: CATEGORY_LABELS[dir].es,
      translations: { en: CATEGORY_LABELS[dir].en },
      items,
    });
  }
  return sidebar;
}

const sidebar = await build();
fs.writeFileSync('sidebar.generated.json', JSON.stringify(sidebar, null, 2));
console.log(`Sidebar generado: ${sidebar.length} categor\u00edas activas`);
