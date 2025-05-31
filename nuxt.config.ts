// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开发时暂时设置为false，以提高运行速度
  // ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],
  srcDir: 'src/',
  components: [
    {
      path: '~/components',
      pathPrefix: false // 取消自动前缀
    }
  ],

  tailwindcss: {
    config: {
      prefix: 'tw-', // tailwindcss类名前缀
      corePlugins: {
        preflight: false // 禁用 Tailwind 的 CSS reset
      }
    }
  },

  // better-sqlite3编译出现问题，node22.5.0以上可以如此解决（实验性功能）
  // https://content.nuxt.com/docs/getting-started/configuration#experimentalnativesqlite
  content: {
    experimental: { nativeSqlite: true }
  },

  app: {
    // head
    head: {
      title: 'Nuxt',
      meta: [
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1'
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
        },
        {
          name: 'description',
          content: 'Nuxt3'
        }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/fontawesome.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/brands.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/solid.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/regular.min.css'
        }
      ]
    }
  },

  // css
  css: ['~/assets/css/main.css']
})
