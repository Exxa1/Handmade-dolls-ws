// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      script: [
        { id: 'cookieyes', src: 'https://cdn-cookieyes.com/client_data/ecdb13dd9578132dea6a023a/script.js' }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap'}
      ]
    },
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  css: ['~/assets/css/custom-tailwind.css'],
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/message-fail', '/message-success']
    }
  }
})