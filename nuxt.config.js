export default {
  components: true,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmLAttrs: {
      Lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [{
      charset: "utf-8"
    }]
  },
  router: {
    prefetchLinks: false
  }
}