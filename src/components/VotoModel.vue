<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="8" >
      <v-card class="justify-content-center">
        <v-img :src="voto.candidato"></v-img>
        <v-card-text>Candidato #{{voto.id + 1}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="back" dark rounded color="red">
            <v-icon>mdi-cancel</v-icon>Volver a elegir
          </v-btn>

          <v-btn @click="next(voto)" color="primary" rounded>
            <v-icon>mdi-check</v-icon>Siguiente
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "voto-model",
  props: {
    model: Object
  },
  data: () => ({
    voto: []
  }),
  created() {
    this.voto.push(this.model);
  },
  watch:{
      model: function(newVal){
          this.voto.push(newVal);
      }
  },
  methods: {
    back() {
      this.$emit("ready", false);
    },
    next(e) {
      alert(e);
      this.$emit("ready", true);
    }
  }
};
</script>