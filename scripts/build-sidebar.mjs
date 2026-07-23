import fg from 'fast-glob';
import matter from 'gray-matter';
import fs from 'node:fs';

const CATEGORY_LABELS = {
  materials: { es: 'Materiales', en: 'Materials' },
  manufacturing: { es: 'Procesos de Manufactura', en: 'Manufacturing Processes' },
  tolerances: { es: 'Tolerancias y Ajustes', en: 'Tolerances & Fits' },
  fasteners: { es: 'Tornillería', en: 'Fasteners' },
  'machine-elements': { es: 'Elementos de Máquinas', en: 'Machine Elements' },
  hydraulics: { es: 'Hidráulica y Neumática', en: 'Hydraulics & Pneumatics' },
  mechanics: { es: 'Resistencia de Materiales', en: 'Strength of Materials' },
  fluids: { es: 'Fluidos y Termodinámica', en: 'Fluids & Thermodynamics' },
  symbols: { es: 'Símbolos Técnicos', en: 'Technical Symbols' },
  converters: { es: 'Conversores', en: 'Converters' },
};

const TOPIC_LABELS = {
  // Materials
  'ferrous-metals': { es: 'Ferrosos', en: 'Ferrous' },
  'non-ferrous-metals': { es: 'No Ferrosos', en: 'Non-Ferrous' },
  'polymers': { es: 'Polímeros', en: 'Polymers' },
  'composites': { es: 'Compuestos', en: 'Composites' },
  'cross-reference': { es: 'Tablas Comparativas', en: 'Comparison Tables' },
  // Manufacturing
  'machining': { es: 'Mecanizado', en: 'Machining' },
  'joining': { es: 'Unión', en: 'Joining' },
  'welding': { es: 'Soldadura', en: 'Welding' },
  'surface-finishing': { es: 'Acabados Superficiales', en: 'Surface Finishing' },
  'additive': { es: 'Manufactura Aditiva', en: 'Additive Manufacturing' },
  'casting': { es: 'Fundición', en: 'Casting' },
  'forming': { es: 'Conformado', en: 'Forming' },
  // Fasteners
  'metric-threads': { es: 'Roscas Métricas', en: 'Metric Threads' },
  'imperial-threads': { es: 'Roscas Imperiales', en: 'Imperial Threads' },
  'standard-fasteners': { es: 'Tornillería Normalizada', en: 'Standard Fasteners' },
  'torque-preload': { es: 'Torque y Preload', en: 'Torque & Preload' },
  'grades-standards': { es: 'Grados y Normas', en: 'Grades & Standards' },
  // Machine Elements
  'bearings': { es: 'Rodamientos', en: 'Bearings' },
  'gears': { es: 'Engranajes', en: 'Gears' },
  'power-transmission': { es: 'Transmisión de Potencia', en: 'Power Transmission' },
  'shafts-couplings': { es: 'Ejes y Acoplamientos', en: 'Shafts & Couplings' },
  'springs': { es: 'Resortes', en: 'Springs' },
  'seals': { es: 'Sellos', en: 'Seals' },
  'clutches-brakes': { es: 'Embragues y Frenos', en: 'Clutches & Brakes' },
  // Mechanics
  'strength': { es: 'Resistencia', en: 'Strength' },
  'fatigue': { es: 'Fatiga', en: 'Fatigue' },
  'columns': { es: 'Columnas', en: 'Columns' },
  'dynamics': { es: 'Dinámica', en: 'Dynamics' },
  // Hydraulics
  'hydraulic-system': { es: 'Sistema Hidráulico', en: 'Hydraulic System' },
  'pneumatic-system': { es: 'Sistema Neumático', en: 'Pneumatic System' },
  // Fluids
  'fluid-mechanics': { es: 'Mecánica de Fluidos', en: 'Fluid Mechanics' },
  'thermodynamics': { es: 'Termodinámica', en: 'Thermodynamics' },
  // Converters
  'hardness': { es: 'Dureza', en: 'Hardness' },
  'roughness': { es: 'Rugosidad', en: 'Roughness' },
  'units': { es: 'Unidades', en: 'Units' },
  // Tolerances / Symbols (para cuando se generen)
  'iso-system': { es: 'Sistema ISO', en: 'ISO System' },
  'ansi-system': { es: 'Sistema ANSI', en: 'ANSI System' },
  'gdt': { es: 'GD&T', en: 'GD&T' },
  'drawing-symbols': { es: 'Símbolos de Planos', en: 'Drawing Symbols' },
  'welding-symbols': { es: 'Símbolos de Soldadura', en: 'Welding Symbols' },
  'hydraulic-pneumatic': { es: 'Símbolos Hidráulicos/Neumáticos', en: 'Hydraulic/Pneumatic Symbols' },
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
      collapsed: true,
      items,
    });
  }
  return sidebar;
}

const sidebar = await build();
fs.writeFileSync('sidebar.generated.json', JSON.stringify(sidebar, null, 2));
console.log(`Sidebar generado: ${sidebar.length} categorías activas`);
