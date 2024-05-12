// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap'}
      ]
    },
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  css: ['~/assets/css/custom-tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/content"],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})