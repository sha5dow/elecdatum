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
],

      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'google-site-verification',
            content: 'PENDING',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-CLYH2C3ER6',
            async: true,
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CLYH2C3ER6');
          `,
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    sitemap(),
  ],
});