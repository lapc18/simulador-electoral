<template>
  <v-footer padless class="font-weight-medium white--text pa-2" color="primary">
    <v-spacer></v-spacer>
    <div class="text-center" style="min-width: 100%">
        <v-divider light></v-divider>
      <div class="py-3">Copyright © {{ new Date().getFullYear() }} — <strong>DevLegnd</strong></div>
    </div>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { name: "mdi-facebook", link: "http://facebook.com/lapx18" },
      { name: "mdi-instagram", link: "http://instagram.com/lapc18" },
      { name: "mdi-twitter", link: "http://twitter.com/lapx18" },
      { name: "mdi-github-circle", link: "http://github.com/lapc18" }
    ]
  })
};
</script>