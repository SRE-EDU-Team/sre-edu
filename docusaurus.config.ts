import type * as Preset from '@docusaurus/preset-classic'
import type { Config, PostCssOptions } from '@docusaurus/types'
import autoprefixer from 'autoprefixer'
import { themes as prismThemes } from 'prism-react-renderer'
import tailwindcss from 'tailwindcss'

const config: Config = {
    title: 'Учебные материалы по SRE',
    tagline: 'Эксплуатация и обеспечение бесперебойной работы нетривиальных информационных систем',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://sre-edu-team.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/sre-edu/',

    organizationName: 'SRE-EDU-Team',
    projectName: 'sre-edu',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts'
                },
                // blog: {
                //     showReadingTime: true
                // },
                theme: {
                    customCss: [
                        './src/css/main.css',
                        './src/css/reveal.css',
                        './src/css/reveal-theme.css'
                    ]
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
    // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Полный курс SRE',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg'
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'lections',
                    position: 'left',
                    label: 'Лекции'
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'terms',
                    position: 'left',
                    label: 'Глоссарий'
                },
                {
                    href: 'https://github.com/SRE-EDU-Team/sre-edu',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Сообщество',
                    items: [
                        {
                            label: 'Команда',
                            to: 'docs/team'
                        },
                        {
                            label: 'Telegram',
                            href: 'https://t.me/sre_pub'
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/SRE-EDU-Team'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} SRE EDU Team, Inc. Built with Docusaurus.`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig,

    plugins: [
        async function docusaurusTailwindCssPlugin (_context, _options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss (postcssOptions: PostCssOptions) {
                // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(
                        {
                            postcssPlugin: 'filter-out-some-infima-styles',
                            Once (root: any) {
                                if (root.source.input.from.endsWith('infima/dist/css/default/default.css') as boolean) {
                                    root.nodes.forEach((n: any) => {
                                        if (n.type === 'rule' && n.selector.startsWith('.markdown') as boolean) {
                                            n.remove()
                                        }
                                    })
                                }
                            }
                        }
                    )
                    postcssOptions.plugins.push(tailwindcss)
                    postcssOptions.plugins.push(autoprefixer)
                    return postcssOptions
                }
            }
        },
        [
            require.resolve('docusaurus-lunr-search'), {
                languages: ['ru', 'en']
            }
        ],
        'docusaurus-plugin-sass'
    ]
}

export default config
