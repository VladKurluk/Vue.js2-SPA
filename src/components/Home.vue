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
                    >
                        <div class="carousel-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex 
              xs12
              sm6
              md4
              v-for="(ad,i) in ads"
              :key="i"
            >
                <v-card>
                    <v-img
                    :src="ad.imageSrc"
                    aspect-ratio="2.75"
                    height='200px'
                    ></v-img>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ad.title}}</h3>
                        <div>{{ad.description}}</div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                    <v-btn raised class="primary">Buy</v-btn>
                    </v-card-actions>
                </v-card>
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

<style scoped>
    .carousel-link {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        background: rgba(0,0,0, .5);
        padding: 5px 15px;
        border-radius: 6px;
    }
</style>


