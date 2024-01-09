import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "案例",
            collapsible: true,

            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        }
    ],
});
