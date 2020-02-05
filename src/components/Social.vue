<template>
    <v-content class="primary text-center pt-3">
        <v-btn class="white--text ma-2" icon rounded v-for="(icon, i) in icons" :key="i" target="_blank" :href="icon.link"><v-icon>{{icon.name}}</v-icon></v-btn>
    </v-content>
</template>

<script>
export default {
    data: () => ({
        icons:[
            {name: 'mdi-facebook', link: 'http://facebook.com/lapx18'},
            {name: 'mdi-instagram', link: 'http://instagram.com/lapc18'},
            {name: 'mdi-twitter', link: 'http://twitter.com/lapx18'},
            {name: 'mdi-github-circle', link: 'http://github.com/lapc18'},
        ]
    }),
}
</script>