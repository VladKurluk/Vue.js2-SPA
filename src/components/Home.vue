<template>
  <div v-if="!loading">
    <v-container fluid>
        <v-layout row>
            <v-flex xs12>
               <v-carousel>
                    <v-carousel-item
                    v-for="(ad,i) in promoAds"
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
                    <app-buy-modal :ad="ad" class="ml-2"></app-buy-modal>
                    
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
  <div v-else>
      <v-container>
          <v-layout row>
              <v-flex xs12 class="text-xs-center">
                  <v-progress-circular
                    :width="5"
                    :size="100"
                    color="green"
                    indeterminate
                    ></v-progress-circular>
              </v-flex>
          </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
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


