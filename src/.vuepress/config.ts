import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Penzberg",
  description: "Life is like a long string of grass.",

  theme,


  head: [
    ['link', {rel: 'icon', href: '/pictures/Icon1.webp'}]
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
