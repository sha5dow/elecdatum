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
  'ferrous-metals': { es: 'Ferrosos', en: 'Ferrous' },
  'non-ferrous-metals': { es: 'No Ferrosos', en: 'Non-Ferrous' },
  'polymers': { es: 'Polímeros', en: 'Polymers' },
  'composites': { es: 'Compuestos', en: 'Composites' },
  'cross-reference': { es: 'Tablas Comparativas', en: 'Comparison Tables' },
  'machining': { es: 'Mecanizado', en: 'Machining' },
  'joining': { es: 'Unión', en: 'Joining' },
  'welding': { es: 'Soldadura', en: 'Welding' },
  'surface-finishing': { es: 'Acabados Superficiales', en: 'Surface Finishing' },
  'additive': { es: 'Manufactura Aditiva', en: 'Additive Manufacturing' },
  'casting': { es: 'Fundición', en: 'Casting' },
  'forming': { es: 'Conformado', en: 'Forming' },
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
console.log(`Sidebar generado: ${sidebar.length} categorías activas`);
