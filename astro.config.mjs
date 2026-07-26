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
          content: \
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RC5WSLWH5E');
          \,
        },
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7956072980493669',
            crossorigin: 'anonymous',
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