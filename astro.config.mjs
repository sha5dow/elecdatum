import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import sidebarGenerated from './sidebar.generated.json' with { type: 'json' };

export default defineConfig({
  site: 'https://mechdatum.com',
  integrations: [
    starlight({
      title: 'MechDatum',
      description: 'Base de datos técnica de referencia para ingenieros mecánicos en español.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },

      sidebar: [
        ...sidebarGenerated,
        {
          label: 'Tolerancias y Ajustes',
          translations: { en: 'Tolerances & Fits' },
          items: [{ autogenerate: { directory: 'tolerances' } }],
        },
        {
          label: 'Tornillería',
          translations: { en: 'Fasteners' },
          items: [{ autogenerate: { directory: 'fasteners' } }],
        },
        {
          label: 'Elementos de Máquinas',
          translations: { en: 'Machine Elements' },
          items: [{ autogenerate: { directory: 'machine-elements' } }],
        },
        {
          label: 'Hidráulica y Neumática',
          translations: { en: 'Hydraulics & Pneumatics' },
          items: [{ autogenerate: { directory: 'hydraulics' } }],
        },
        {
          label: 'Resistencia de Materiales',
          translations: { en: 'Strength of Materials' },
          items: [{ autogenerate: { directory: 'mechanics' } }],
        },
        {
          label: 'Fluidos y Termodinámica',
          translations: { en: 'Fluids & Thermodynamics' },
          items: [{ autogenerate: { directory: 'fluids' } }],
        },
        {
          label: 'Símbolos Técnicos',
          translations: { en: 'Technical Symbols' },
          items: [{ autogenerate: { directory: 'symbols' } }],
        },
        {
          label: 'Conversores',
          translations: { en: 'Converters' },
          items: [{ autogenerate: { directory: 'converters' } }],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'google-site-verification',
            content: 'PENDING',
          },
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    sitemap(),
  ],
});