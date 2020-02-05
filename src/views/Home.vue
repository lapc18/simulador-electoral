<template>
  <div class="home">
    <div class="text-center">
      <h3 class="black--text font-weight-bold">{{JSON.stringify(positions[positionIndex])}}</h3>
    </div>

    <div class="justify-center">
      <v-row v-if="this.showImages" justify="center" align="center">
        <v-col v-for="(item, index) in dataImgs" :key="index" cols="auto">
          <v-card class="ma-4" width="150" ripple @click="onSelectImage(item)">
            <v-img :src="item.candidato" height="150px" width="150">
              <v-row no-gutters>
                <v-col class="text-left">
                  <v-img :src="item.src" height="30" width="30"></v-img>
                </v-col>
                <v-col class="text-center d-flex flex-row-reverse">
                  <p
                    class="black--text white pa-3 font-weight-bold"
                    style="width:30px; height:30px;"
                  >{{index+1}}</p>
                </v-col>
              </v-row>
            </v-img>
            <v-card-text>
              <div class="text-center">
                <h6 class="uppercase">{{ item.name + ' ' + item.alt }}</h6>
                <h5 class="uppercase">{{JSON.stringify(positions[positionIndex])}}</h5>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="justify-content-center" v-if="this.showVoto">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-card class="justify-content-center">
              <v-img :src="votoData.candidato"></v-img>
              <v-card-text>Candidato #{{parseInt(votoData.id) + 1}}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="back" dark rounded color="red">
                  <v-icon>mdi-cancel</v-icon>Volver a elegir
                </v-btn>

                <v-btn @click="next" color="primary" rounded>
                  <v-icon>mdi-check</v-icon>Siguiente
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div v-if="this.showTable" class="container">
        <v-simple-table :fixed-header="true">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Cargos</th>
                <th class="text-left">Partidos</th>
                <th class="text-left">Candidatos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in userSelection" :key="key">
                <td>{{ positions[key] }}</td>
                <td>{{ item.alt }}</td>
                <td>{{ item.name + ' ' + (parseInt(item.id) + 1) + ' ' + item.alt }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <div class="pa-4 ma-4">
          <v-btn rounded color="primary" @click="start">
            <v-icon>mdi-twitter-retweet</v-icon>Volver a practicar
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import VueSelectImage from "vue-select-image";

export default {
  name: "home",
  components: {
    //VueSelectImage
  },
  data: () => ({
    positions: ["Regidor(a)", "Alcalde(sa)"],
    positionIndex: 0,
    dataImgs: [
      {
        id: "1",
        src:
          "https://elecciones2020.club/wp-content/uploads/2020/01/pld-150x150.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "PLD",
        name: "Candidato"
      },

      {
        id: "2",
        src:
          "https://elecciones2020.club/wp-content/uploads/2020/01/prm-150x150.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "PRM",
        name: "Candidato"
      },
      {
        id: "3",
        src:
          "https://elecciones2020.club/wp-content/uploads/2020/01/prd-150x150.jpg",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "PRD",
        name: "Candidato"
      },
      {
        id: "4",
        src:
          "https://elecciones2020.club/wp-content/uploads/2020/01/reformista-150x150.jpg",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "PRSC",
        name: "Candidato"
      },
      {
        id: "4",
        src:
          "https://elecciones2020.club/wp-content/uploads/2020/01/ALPAIS-150x150.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "A. Pais",
        name: "Candidato"
      },
      {
        id: "5",
        src:
          "https://elecciones2020.club/wp-content/uploads/2020/01/4fz5fc_400x400-150x150.jpg",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },
      {
        id: "6",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },
      {
        id: "7",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },
      {
        id: "8",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },
      {
        id: "9",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },
      {
        id: "10",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "11",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "12",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "13",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "14",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "15",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "16",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "17",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "18",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "19",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      },

      {
        id: "20",
        src:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-logo.png",
        candidato:
          "https://elecciones2020.club/wp-content/themes/elecciones/images/no-candidato.png",
        alt: "Partido n",
        name: "Candidato"
      }
    ],
    userSelection: [],
    votoData: {},
    showVoto: false,
    showTable: false,
    showImages: true
  }),
  methods: {
    start() {
      this.positionIndex = 0;
      this.userSelection = [];
      this.votoData = {};
      this.showVoto = false;
      this.showTable = false;
      this.showImages = true;
    },
    onSelectImage(e) {
      //alert(JSON.stringify(e));
      this.votoData = e;
      this.showVoto = true;
      this.showImages = false;
      this.showTable = false;

      //alert(JSON.stringify(this.votoData));
    },
    back() {
      this.positionIndex = 0;
      this.userSelection = [];
      this.showVoto = false;
      this.showImages = true;
      this.showTable = false;
    },
    next() {
      //alert(this.positionIndex);

      if (this.positionIndex == 0 || this.positionIndex == 1) {
        //alert(this.positionIndex);
        this.userSelection.push(this.votoData);
        this.showImages = true;
        this.positionIndex = this.positionIndex + 1;
      } else {
        //alert(this.positionIndex);
        this.showTable = true;
        this.showImages = false;
        this.showVoto = false;
      }

      //alert(this.positionIndex);
      this.showVoto = false;
    }
  },
  watch: {
    positionIndex: function() {
      if (this.positionIndex == 2) {
        this.showTable = true;
        this.showVoto = false;
        this.showImages = false;
      }
    }
  }
};
</script>
