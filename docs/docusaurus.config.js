// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Senaia Starter",
  tagline: "A template for your next React Native project 🚀",
  url: "https://starter.senaia.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "senaia", // Usually your GitHub org/user name.
  projectName: "senaia-starter", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },


  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/senaia/react-native-template-senaia/tree/master/docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/senaia/react-native-template-senaia/tree/master/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-GQ45JJD1JC",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Senaia Starter",
        logo: {
          alt: "Senaia Starter Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/senaia/react-native-template-senaia",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://senaia.com",
            label: "Senaia",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/docs/overview",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Senaia",
                href: "https://senaia.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/senaia/react-native-template-senaia",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Senaia. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name:'title',
          content: 'Senaia Starter | A template for your next React Native project 🚀',
        },
        {
          name: "description",
          content: "A template for your next React Native project 🚀.Made with developer experience and performance first: Expo,TypeScript,tailwindcss, Husky, Lint-Staged, react-navigation, react-query, react-hook-form, I18n.",
        },

        {
          name: "og:title",
          content: "Senaia Starter | A template for your next React Native project 🚀",
        },
        {
          name: "og:description",
          content: "A template for your next React Native project 🚀.Made with developer experience and performance first: Expo,TypeScript,tailwindcss, Husky, Lint-Staged, react-navigation, react-query, react-hook-form, I18n.",
        },
        {
          name: "og:image",
          content: "https://starter.senaia.com/img/cover.jpg",
        },
        {
          name: "og:url",
          content: "https://starter.senaia.com",
        },

        {
          name: "twitter:title",
          content: "Senaia Starter | A template for your next React Native project 🚀",
        },
        {
          name: "twitter:description",
          content: "A template for your next React Native project 🚀.Made with developer experience and performance first: Expo,TypeScript,tailwindcss, Husky, Lint-Staged, react-navigation, react-query, react-hook-form, I18n.",
        },
        {
          name: "twitter:image",
          content: "https://starter.senaia.com/img/cover.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name :'keywords',
          content:"react-native, expo, typescript, tailwindcss, husky, lint-staged, react-navigation, react-query, react-hook-form, i18n, senaia, starter, template, react-native-template-senaia"
        }
      ],

    }),
};

module.exports = config;
