<template>
  <div>
    <v-container fluid>
        <v-layout row>
            <v-flex xs12>
               <v-carousel>
                    <v-carousel-item
                    v-for="(ad,i) in ads"
                    :key="i"
                    :src="ad.imageSrc"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {title: 'FirstAd', description: 'Descr', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '123'},
        {title: 'SecondAd', description: 'Descr2', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '1234'}
      ]
    }
  }
}
</script>

