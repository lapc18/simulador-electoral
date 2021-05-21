<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="http://prm.org.do/wp-content/uploads/2019/01/logoprmheadweb.png"
          transition="scale-transition"
          width="150"
        />
      </div>
      <p class="headline my-4">Simulador</p>
      <v-spacer></v-spacer>
      <v-btn href="http://www.prm.org.do/" target="_blank" text>
        <span class="mr-2">PRM Oficial</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content style="min-height:80%;">
      <section id="header">
        <div class="text-center pa-5 ma-5">
          <h1 class="black--text font-weight-bold">Sistema de Voto Automatizado</h1>
          <br/>
          <h2 class="black--text font-weight-light">Elecciones Ordinarias Generales Municipales 16 Febrero 2020</h2>          
          <h4 class="grey--text font-weight-light">Seleccione el candidato de su preferencia</h4>
        </div>
      </section>

      <router-view />
    </v-content>

    <div>
      <Social />
      <Footer />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/Footer.vue";
import Social from "./components/Social.vue";

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Social
  },

  data: () => ({
    //
  })
});
</script>
