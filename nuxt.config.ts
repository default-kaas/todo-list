// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      'tailwindcss/nesting': 'postcss-nesting',
      // https://tailwindcss.com/docs/guides/nuxtjs#3
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
