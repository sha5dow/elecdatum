import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import sidebarGenerated from './sidebar.generated.json' with { type: 'json' };

export default defineConfig({
  site: 'https://elecdatum.com',
  integrations: [
    starlight({
      title: 'ElecDatum',
      description: 'Base de datos técnica de referencia para ingenieros eléctricos en español.',
      customCss: ['./src/styles/custom.css'],
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
          tag: 'script',
          attrs: {
            'data-cfasync': 'false',
            src: 'https://cmp.gatekeeperconsent.com/min.js',
          },
        },
        {
          tag: 'script',
          attrs: {
            'data-cfasync': 'false',
            src: 'https://the.gatekeeperconsent.com/cmp.min.js',
          },
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: '//www.ezojs.com/ezoic/sa.min.js',
          },
        },
        {
          tag: 'script',
          content: `
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `,
        },
        {
          tag: 'script',
          attrs: {
            src: '//ezoicanalytics.com/analytics.js',
          },
        },
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
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-RC5WSLWH5E',
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RC5WSLWH5E');
          `,
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
        PageSidebar: './src/components/PageSidebar.astro',
      },
    }),
    sitemap(),
  ],
});