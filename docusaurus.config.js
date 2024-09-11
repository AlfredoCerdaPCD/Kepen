import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PCD Systems',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  //i18n: {
  //  defaultLocale: 'en',
  //  locales: ['en'],
  //},
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
      path: 'i18n',
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
          calendar: 'gregory',
          path: 'en',
        },
        es: {
          label: 'Español',
          direction: 'ltr',
          htmlLang: 'es-MX',
          calendar: 'gregory',
          path: 'es',
        },
      },
    },
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'docs_operaciones',
          path: 'docs_operaciones',
          routeBasePath:'docs_operaciones',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'docs_procedures',
          path: 'docs_procedures',
          routeBasePath:'docs_procedures',
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
    ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/PCD_Card.png',
      navbar: {
        title: 'Knowledge Base',
        logo: {
          alt: 'PCD Logo',
          src: 'img/KepenLogo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs_Sidebar',
            position: 'left',
            label: 'Administración',
          },
          {
            to: '/docs_operaciones/Intro_Operator_Manuals',
            sidebarId: 'docs_Sidebar',
            label: 'Operaciones',
            position: 'left',
          },
          {
            to: '/docs_procedures/Intro',
            sidebarId: 'docs_Sidebar',
            label: 'Procedimientos',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} PCD Systems, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }
  ),

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
};

export default config;
