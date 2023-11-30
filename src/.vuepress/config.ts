import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "VueHope-Template",
  description: "vuepress-theme-hope 模板项目",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
