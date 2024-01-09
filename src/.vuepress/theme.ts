import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

    author: {
        name: "Mr.CaoBaoQi",
        url: "https://gitee.com/cola777jz",
        email: "2023cbq@gmail.com"
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.svg",

    repo: "https://gitee.com/cola777jz",

    docsDir: "src",

    navbar,

    sidebar,

    footer: "Power by <a href=\"https://gitee.com/cola777jz/\" target=\"_blank\">CBQ</a> | MIT Licensed, Copyright © 2024-present",

    displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["777777"],
        },
    },

    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    plugins: {
        comment: {
            provider: "Giscus",
            repo: "CaoBaoQi/docsify-template",
            repoId: "R_kgDOKx6Q2A",
            category: "Announcements",
            categoryId: "DIC_kwDOKx6Q2M4CbYTM",
        },
        mdEnhance: {
            align: true,
            attrs: true,
            codetabs: true,
            demo: true,
            figure: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            mark: true,
            playground: {
                presets: ["ts", "vue"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
        },
    },
});
