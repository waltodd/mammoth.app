// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src',
  dir:{
    pages:'views'
  },
  css:['@/assets/styles/app.css'],
  components:{
    dirs:[
      {
        path:'components/shared',
        pathPrefix: false,
        global: true,
        prefix:'R'
      }
    ]
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
  vite:{
    plugins:[
        tailwindcss()
    ]
  }
})